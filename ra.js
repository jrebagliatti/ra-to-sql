/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var ra = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,6],$V1=[1,4],$V2=[1,7],$V3=[1,13],$V4=[1,14],$V5=[5,7],$V6=[2,13],$V7=[1,18],$V8=[1,19],$V9=[1,21],$Va=[5,7,12,24,25],$Vb=[1,34],$Vc=[1,32],$Vd=[1,31],$Ve=[1,33],$Vf=[1,42],$Vg=[1,38],$Vh=[1,39],$Vi=[1,41],$Vj=[21,27],$Vk=[1,46],$Vl=[1,47],$Vm=[1,48],$Vn=[1,49],$Vo=[12,21,27,28,29,30,31,35,36,37,38,39,40,42,44],$Vp=[12,21],$Vq=[12,21,42],$Vr=[12,21,42,44],$Vs=[1,59],$Vt=[1,60],$Vu=[1,61],$Vv=[1,62],$Vw=[1,63],$Vx=[1,64],$Vy=[1,71],$Vz=[8,11,29,32],$VA=[12,21,27,28,29,35,36,37,38,39,40,42,44];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"ra_program":3,"ra_sentences":4,"EOF":5,"ra_sentence":6,"NEWLINE":7,"IDENTIFIER":8,"<-":9,"ra_expression":10,"(":11,")":12,"tableName":13,"projection":14,"selection":15,"union":16,"product":17,"PROJ":18,"[":19,"field_list":20,"]":21,"SEL":22,"bool_expression":23,"UNION":24,"PRODUCT":25,"e":26,"COMMA":27,"+":28,"-":29,"*":30,"/":31,"NUMBER":32,"b_e":33,"bool_operator":34,">":35,"<":36,"<=":37,">=":38,"=":39,"<>":40,"term":41,"OR":42,"factor":43,"AND":44,"TRUE":45,"FALSE":46,"!":47,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"NEWLINE",8:"IDENTIFIER",9:"<-",11:"(",12:")",18:"PROJ",19:"[",21:"]",22:"SEL",24:"UNION",25:"PRODUCT",27:"COMMA",28:"+",29:"-",30:"*",31:"/",32:"NUMBER",35:">",36:"<",37:"<=",38:">=",39:"=",40:"<>",42:"OR",44:"AND",45:"TRUE",46:"FALSE",47:"!"},
productions_: [0,[3,2],[4,1],[4,3],[6,3],[6,1],[6,1],[10,3],[10,1],[10,1],[10,1],[10,1],[10,1],[13,1],[14,7],[15,7],[16,3],[17,3],[20,1],[20,3],[26,3],[26,3],[26,3],[26,3],[26,2],[26,3],[26,1],[26,1],[33,3],[34,1],[34,1],[34,1],[34,1],[34,1],[34,1],[23,1],[23,3],[41,1],[41,3],[43,1],[43,1],[43,1],[43,2],[43,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return $$[$0-1] 
break;
case 2:
 this.$ = new Array($$[$0]); 
break;
case 3:
 $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 4:
 this.$ = { type: 'identifier', value: { id: $$[$0-2], expression: $$[$0].value} }; 
break;
case 5:
 this.$ = { type: 'expression', value: $$[$0] }; 
break;
case 6:
 console.log ('NEWLINE'); 
break;
case 7:
 this.$ = {id: yy.getNewId('GROUP'), value: $$[$0-1] }; 
break;
case 8:
 this.$ = {id: yy.getNewId('ID'), value: $$[$0] }; 
break;
case 9: case 10:
 this.$ = {id: yy.getNewId('PROJ'), value: $$[$0] }; 
break;
case 11:
 this.$ = {id: yy.getNewId('UNION'), value: $$[$0] }; 
break;
case 12:
 this.$ = {id: yy.getNewId('PROD'), value: $$[$0] }; 
break;
case 13:
 this.$ = yy.getSingleTable($$[$0]); 
break;
case 14:
 this.$ = yy.getProjection($$[$0-1].value, $$[$0-1].id, $$[$0-4]); 
break;
case 15:
 this.$ = yy.getSelection($$[$0-1].value, $$[$0-1].id, $$[$0-4]); 
break;
case 16:
 this.$ = yy.getUnion($$[$0-2].value, $$[$0].value); 
break;
case 17:
 this.$ = yy.getProduct($$[$0-2].value, $$[$0].value); 
break;
case 18:
this.$ = new Array($$[$0])
break;
case 19:
 
            $$[$0-2].push($$[$0]);
            this.$ = $$[$0-2];
        
break;
case 20:
 this.$ = $$[$0-2] + '+' + $$[$0]; 
break;
case 21:
 this.$ = $$[$0-2] + '-' + $$[$0]; 
break;
case 22:
 this.$ = $$[$0-2] + '*' + $$[$0]; 
break;
case 23:
 this.$ = $$[$0-2] + '/' + $$[$0]; 
break;
case 24:
 this.$ = '-' + $$[$0];
break;
case 25: case 43:
 this.$ =  '(' + $$[$0-1] + ')'; 
break;
case 26:
 this.$ = Number(yytext); 
break;
case 28:
 this.$ = yy.getBooleanOperation($$[$0-2], $$[$0-1], $$[$0]); 
break;
case 36:
 this.$ = yy.getOr($$[$0-2], $$[$0]); 
break;
case 38:
 this.$ = yy.getAnd($$[$0-2], $$[$0]); 
break;
case 42:
 this.$ = yy.getNot($$[$0]); 
break;
}
},
table: [{3:1,4:2,6:3,7:$V0,8:$V1,10:5,11:$V2,13:8,14:9,15:10,16:11,17:12,18:$V3,22:$V4},{1:[3]},{5:[1,15],7:[1,16]},o($V5,[2,2]),o([5,7,24,25],$V6,{9:[1,17]}),o($V5,[2,5],{24:$V7,25:$V8}),o($V5,[2,6]),{8:$V9,10:20,11:$V2,13:8,14:9,15:10,16:11,17:12,18:$V3,22:$V4},o($Va,[2,8]),o($Va,[2,9]),o($Va,[2,10]),o($Va,[2,11]),o($Va,[2,12]),{19:[1,22]},{19:[1,23]},{1:[2,1]},{6:24,7:$V0,8:$V1,10:5,11:$V2,13:8,14:9,15:10,16:11,17:12,18:$V3,22:$V4},{8:$V9,10:25,11:$V2,13:8,14:9,15:10,16:11,17:12,18:$V3,22:$V4},{8:$V9,10:26,11:$V2,13:8,14:9,15:10,16:11,17:12,18:$V3,22:$V4},{8:$V9,10:27,11:$V2,13:8,14:9,15:10,16:11,17:12,18:$V3,22:$V4},{12:[1,28],24:$V7,25:$V8},o($Va,$V6),{8:$Vb,11:$Vc,20:29,26:30,29:$Vd,32:$Ve},{8:$Vb,11:$Vf,23:35,26:43,29:$Vd,32:$Ve,33:40,41:36,43:37,45:$Vg,46:$Vh,47:$Vi},o($V5,[2,3]),o($V5,[2,4],{24:$V7,25:$V8}),o([5,7,12,24],[2,16],{25:$V8}),o($Va,[2,17]),o($Va,[2,7]),{21:[1,44],27:[1,45]},o($Vj,[2,18],{28:$Vk,29:$Vl,30:$Vm,31:$Vn}),{8:$Vb,11:$Vc,26:50,29:$Vd,32:$Ve},{8:$Vb,11:$Vc,26:51,29:$Vd,32:$Ve},o($Vo,[2,26]),o($Vo,[2,27]),{21:[1,52]},o($Vp,[2,35],{42:[1,53]}),o($Vq,[2,37],{44:[1,54]}),o($Vr,[2,39]),o($Vr,[2,40]),o($Vr,[2,41]),{8:$Vb,11:$Vf,26:43,29:$Vd,32:$Ve,33:40,43:55,45:$Vg,46:$Vh,47:$Vi},{8:$Vb,11:$Vf,23:56,26:57,29:$Vd,32:$Ve,33:40,41:36,43:37,45:$Vg,46:$Vh,47:$Vi},{28:$Vk,29:$Vl,30:$Vm,31:$Vn,34:58,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx},{11:[1,65]},{8:$Vb,11:$Vc,26:66,29:$Vd,32:$Ve},{8:$Vb,11:$Vc,26:67,29:$Vd,32:$Ve},{8:$Vb,11:$Vc,26:68,29:$Vd,32:$Ve},{8:$Vb,11:$Vc,26:69,29:$Vd,32:$Ve},{8:$Vb,11:$Vc,26:70,29:$Vd,32:$Ve},o($Vo,[2,24]),{12:$Vy,28:$Vk,29:$Vl,30:$Vm,31:$Vn},{11:[1,72]},{8:$Vb,11:$Vf,26:43,29:$Vd,32:$Ve,33:40,43:73,45:$Vg,46:$Vh,47:$Vi},{8:$Vb,11:$Vf,26:43,29:$Vd,32:$Ve,33:40,43:74,45:$Vg,46:$Vh,47:$Vi},o($Vr,[2,42]),{12:[1,75]},{12:$Vy,28:$Vk,29:$Vl,30:$Vm,31:$Vn,34:58,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw,40:$Vx},{8:$Vb,11:$Vc,26:76,29:$Vd,32:$Ve},o($Vz,[2,29]),o($Vz,[2,30]),o($Vz,[2,31]),o($Vz,[2,32]),o($Vz,[2,33]),o($Vz,[2,34]),{8:$V9,10:77,11:$V2,13:8,14:9,15:10,16:11,17:12,18:$V3,22:$V4},o($Vj,[2,19],{28:$Vk,29:$Vl,30:$Vm,31:$Vn}),o($VA,[2,20],{30:$Vm,31:$Vn}),o($VA,[2,21],{30:$Vm,31:$Vn}),o($Vo,[2,22]),o($Vo,[2,23]),o($Vo,[2,25]),{8:$V9,10:78,11:$V2,13:8,14:9,15:10,16:11,17:12,18:$V3,22:$V4},o($Vp,[2,36]),o($Vq,[2,38]),o($Vr,[2,43]),o($Vr,[2,28],{28:$Vk,29:$Vl,30:$Vm,31:$Vn}),{12:[1,79],24:$V7,25:$V8},{12:[1,80],24:$V7,25:$V8},o($Va,[2,14]),o($Va,[2,15])],
defaultActions: {15:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip comments */
break;
case 1:/* skip comments */
break;
case 2:return 7;
break;
case 3:/* skip whitespace */
break;
case 4:yy_.yytext = yy_.yytext.slice(1,-1); return 'STR'
break;
case 5:return "PROJ"
break;
case 6:return "SEL"
break;
case 7:return "UNION"
break;
case 8:return "PRODUCT"
break;
case 9:return "TRUE"
break;
case 10:return "FALSE"
break;
case 11:return 8
break;
case 12:return 32
break;
case 13:return 30
break;
case 14:return 31
break;
case 15:return 29
break;
case 16:return 28
break;
case 17:return '^'
break;
case 18:return 47
break;
case 19:return '%'
break;
case 20:return 11
break;
case 21:return 12
break;
case 22:return "COMMA"
break;
case 23:return 19
break;
case 24:return 21
break;
case 25:return "OR"
break;
case 26:return "AND"
break;
case 27:return 9
break;
case 28:return 35
break;
case 29:return 36
break;
case 30:return 38
break;
case 31:return 37
break;
case 32:return 39
break;
case 33:return 40
break;
case 34:return 5
break;
case 35:return 'INVALID'
break;
}
},
rules: [/^(?:#[^\n]*)/,/^(?:%[^\n]*)/,/^(?:(\r\n|\r|\n))/,/^(?:\s+)/,/^(?:"[^"]+")/,/^(?:proj\b)/,/^(?:sel\b)/,/^(?:U\b)/,/^(?:X\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:[a-zA-Z][a-zA-Z0-9.]*)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:!)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:,)/,/^(?:\[)/,/^(?:\])/,/^(?:\|)/,/^(?:&)/,/^(?:<-)/,/^(?:>)/,/^(?:<)/,/^(?:>=)/,/^(?:<=)/,/^(?:=)/,/^(?:<>)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = ra;
exports.Parser = ra.Parser;
exports.parse = function () { return ra.parse.apply(ra, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}