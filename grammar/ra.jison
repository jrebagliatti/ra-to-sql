
/* description: Relational Algebra parser. */

/* lexical grammar */
%lex
%%

\#[^\n]*                /* skip comments */
\%%[^\n]*               /* skip comments */
(\r\n|\r|\n)                   return 'NEWLINE';
\s+                   /* skip whitespace */
\"[^"]+\"         yytext = yytext.slice(1,-1); return 'STR'

"chenErd"          return 'CHEN_ERD';

"proj"                return "PROJ"
"sel"                 return "SEL"
"true"                return "TRUE"
"false"               return "FALSE"

[a-zA-Z][a-zA-Z0-9]*    return 'IDENTIFIER'
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"!"                   return '!'
"%"                   return '%'
"("                   return '('
")"                   return ')'
","                   return "COMMA"
"["                   return '['
"]"                   return ']'
"|"                   return "OR"
"&"                   return "AND"
">"                   return '>'
"<"                   return '<'
">="                  return '>='
"<="                  return '<='
"="                   return '='
"<>"                  return '<>'

<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%left '+' '-'
%left '*' '/'
%left '^'
%right '!'
%right '%'
%left UMINUS

%start ra_expressions

%% /* language grammar */

ra_expressions
    : ra_expression EOF
        { console.log($1); }
    | ra_expression NEWLINE ra_expressions
        { console.log($1); }
    | EOF
    ;

ra_expression
    : IDENTIFIER
    | projection
    | selection
    ;

projection
    : PROJ '[' field_list ']' '(' ra_expression ')'
        { $$ = "SELECT " + $3 + " FROM (" + $6 + ") PROJ" }
    ;

selection
    : SEL '[' bool_expression ']' '(' ra_expression ')'
        { $$ = "SELECT * FROM (" + $6 + ") A WHERE " + $3 }
    ;

field_list
    : e {$$ = new Array($1)}
    | field_list COMMA e
        { 
            $1.push($3);
            $$ = $1;
        }
    ;

e
    : e '+' e
        {$$ = $1 + '+' + $3;}
    | e '-' e
        {$$ = $1 + '-' + $3;}
    | e '*' e
        {$$ = $1 + '*' + $3;}
    | e '/' e
        {$$ = $1 + '/' + $3;}
    | '-' e %prec UMINUS
        {$$ = '-' + $2;}
    | '(' e ')'
        {$$ =  '(' + $2 + ')';}
    | NUMBER
        {$$ = Number(yytext);}
    | IDENTIFIER
    ;

b_e
    : e bool_operator e
        {$$ = $1 + $2 + $3;}
    ;

bool_operator
    : '>'
    | '<'
    | '<='
    | '>='
    | '='
    | '<>'
    ;

bool_expression
    : term
    | term OR factor
        {$$ = $1 + " OR " + $3}
    ;

term
    : factor
    | factor AND factor
        {$$ = $1 + " AND " + $3}
    ;

factor
    : TRUE
    | FALSE
    | b_e
    | '!' factor
        {$$ = "NOT " + $2}
    | '(' bool_expression ')'
        {$$ =  '(' + $2 + ')';}
    ;