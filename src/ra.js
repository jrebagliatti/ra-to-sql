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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,8],$V1=[1,9],$V2=[1,6],$V3=[1,10],$V4=[1,20],$V5=[1,22],$V6=[1,21],$V7=[5,9,10],$V8=[5,9,10,11,14,26,29,30],$V9=[2,24],$Va=[1,29],$Vb=[1,30],$Vc=[1,31],$Vd=[1,32],$Ve=[1,33],$Vf=[1,35],$Vg=[5,9,10,16,32,33,34,35,36],$Vh=[1,49],$Vi=[1,47],$Vj=[1,46],$Vk=[1,48],$Vl=[1,50],$Vm=[1,64],$Vn=[1,60],$Vo=[1,61],$Vp=[1,63],$Vq=[1,69],$Vr=[16,28,38],$Vs=[1,71],$Vt=[1,70],$Vu=[1,72],$Vv=[1,73],$Vw=[16,28,36,38,39,40,41,46,47,48,49,50,51,54,55],$Vx=[16,28],$Vy=[16,28,54,55],$Vz=[1,85],$VA=[1,86],$VB=[1,87],$VC=[1,88],$VD=[1,89],$VE=[1,90],$VF=[1,98],$VG=[11,14,36,42,43,57,58,59],$VH=[11,14,36,42,43],$VI=[16,28,36,38,39,46,47,48,49,50,51,54,55];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"ra_program":3,"ra_sentences":4,"EOF":5,"sentence_separators":6,"ra_sentence":7,"sentence_separator":8,"NEWLINE":9,";":10,"IDENTIFIER":11,"<-":12,"ra_expression":13,"(":14,"field_list":15,")":16,"tableName":17,"projection":18,"selection":19,"union":20,"intersection":21,"product":22,"natural":23,"subtraction":24,"rename":25,"PROJ":26,"[":27,"]":28,"REN":29,"SEL":30,"bool_expression":31,"UNION":32,"INTERSECTION":33,"PRODUCT":34,"NATURAL":35,"-":36,"e":37,"COMMA":38,"+":39,"*":40,"/":41,"NUMBER":42,"STR":43,"b_e":44,"bool_operator":45,">":46,"<":47,"<=":48,">=":49,"=":50,"<>":51,"factor":52,"bool_op":53,"OR":54,"AND":55,"term":56,"TRUE":57,"FALSE":58,"!":59,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"NEWLINE",10:";",11:"IDENTIFIER",12:"<-",14:"(",16:")",26:"PROJ",27:"[",28:"]",29:"REN",30:"SEL",32:"UNION",33:"INTERSECTION",34:"PRODUCT",35:"NATURAL",36:"-",38:"COMMA",39:"+",40:"*",41:"/",42:"NUMBER",43:"STR",46:">",47:"<",48:"<=",49:">=",50:"=",51:"<>",54:"OR",55:"AND",57:"TRUE",58:"FALSE",59:"!"},
productions_: [0,[3,2],[3,3],[3,4],[3,3],[4,1],[4,3],[6,1],[6,2],[8,1],[8,1],[7,3],[7,6],[7,1],[13,3],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[17,1],[18,7],[25,7],[19,7],[20,3],[21,3],[22,3],[23,3],[24,3],[15,1],[15,3],[37,3],[37,3],[37,3],[37,3],[37,2],[37,3],[37,1],[37,1],[37,1],[44,3],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[31,1],[31,3],[53,1],[53,1],[56,1],[56,3],[52,1],[52,1],[52,1],[52,2],[52,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: case 4:
 return $$[$0-1] 
break;
case 2: case 3:
 return $$[$0-2] 
break;
case 5:
 this.$ = new Array($$[$0]); 
break;
case 6:
 $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 11:
 this.$ = { type: 'identifier', value: { id: $$[$0-2], expression: $$[$0].value} }; 
break;
case 12:
 this.$ = { type: 'identifier', value: { id: $$[$0-5], expression: $$[$0].value, fields: $$[$0-3] } }; 
break;
case 13:
 this.$ = { type: 'expression', value: $$[$0] }; 
break;
case 14:
 this.$ = {id: yy.getNewId('GROUP'), value: $$[$0-1].value }; 
break;
case 15:
 this.$ = {id: yy.getNewId('ID'), value: $$[$0] }; 
break;
case 16: case 17:
 this.$ = {id: yy.getNewId('PROJ'), value: $$[$0] }; 
break;
case 18: case 19:
 this.$ = {id: yy.getNewId('UNION'), value: $$[$0] }; 
break;
case 20: case 21:
 this.$ = {id: yy.getNewId('PROD'), value: $$[$0] }; 
break;
case 22:
 this.$ = {id: yy.getNewId('SUBS'), value: $$[$0] }; 
break;
case 23:
 this.$ = {id: yy.getNewId('REN'), value: $$[$0] }; 
break;
case 24:
 this.$ = yy.getSingleTable($$[$0]); 
break;
case 25:
 this.$ = yy.getProjection($$[$0-1].value, $$[$0-1].id, $$[$0-4]); 
break;
case 26:
 this.$ = yy.getRename($$[$0-1].value, $$[$0-1].id, $$[$0-4]); 
break;
case 27:
 this.$ = yy.getSelection($$[$0-1].value, $$[$0-1].id, $$[$0-4]); 
break;
case 28:
 this.$ = yy.getUnion($$[$0-2].value, $$[$0].value); 
break;
case 29:
 this.$ = yy.getIntersection($$[$0-2].value, $$[$0].value); 
break;
case 30:
 this.$ = yy.getProduct($$[$0-2].value, $$[$0].value); 
break;
case 31:
 this.$ = yy.getNaturalJoin($$[$0-2].value, $$[$0].value); 
break;
case 32:
 this.$ = yy.getSubtraction($$[$0-2].value, $$[$0].value); 
break;
case 33:
this.$ = new Array($$[$0])
break;
case 34:
 
            $$[$0-2].push($$[$0]);
            this.$ = $$[$0-2];
        
break;
case 35:
 this.$ = $$[$0-2] + '+' + $$[$0]; 
break;
case 36:
 this.$ = $$[$0-2] + '-' + $$[$0]; 
break;
case 37:
 this.$ = $$[$0-2] + '*' + $$[$0]; 
break;
case 38:
 this.$ = $$[$0-2] + '/' + $$[$0]; 
break;
case 39:
 this.$ = '-' + $$[$0];
break;
case 40: case 61:
 this.$ =  '(' + $$[$0-1] + ')'; 
break;
case 41:
 this.$ = Number(yytext); 
break;
case 43:
 this.$ = "'" + $$[$0] + "'" 
break;
case 44:
 this.$ = yy.getBooleanOperation($$[$0-2], $$[$0-1], $$[$0]); 
break;
case 52:
 this.$ = yy.getBooleanExpression($$[$0-2], $$[$0-1], $$[$0]); 
break;
case 56:
 this.$ = yy.getAnd($$[$0-2], $$[$0]); 
break;
case 60:
 this.$ = yy.getNot($$[$0]); 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:$V0,10:$V1,11:$V2,13:7,14:$V3,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:19,26:$V4,29:$V5,30:$V6},{1:[3]},{5:[1,23],6:24,8:5,9:$V0,10:$V1},{4:25,7:4,8:26,9:$V0,10:$V1,11:$V2,13:7,14:$V3,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:19,26:$V4,29:$V5,30:$V6},o($V7,[2,5]),o($V8,[2,7]),o([5,9,10,32,33,34,35,36],$V9,{12:[1,27],14:[1,28]}),o($V7,[2,13],{32:$Va,33:$Vb,34:$Vc,35:$Vd,36:$Ve}),o($V8,[2,9]),o($V8,[2,10]),{11:$Vf,13:34,14:$V3,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:19,26:$V4,29:$V5,30:$V6},o($Vg,[2,15]),o($Vg,[2,16]),o($Vg,[2,17]),o($Vg,[2,18]),o($Vg,[2,19]),o($Vg,[2,20]),o($Vg,[2,21]),o($Vg,[2,22]),o($Vg,[2,23]),{27:[1,36]},{27:[1,37]},{27:[1,38]},{1:[2,1]},{5:[1,39],7:40,8:26,9:$V0,10:$V1,11:$V2,13:7,14:$V3,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:19,26:$V4,29:$V5,30:$V6},{5:[1,42],6:41,8:5,9:$V0,10:$V1},o($V8,[2,8]),{11:$Vf,13:43,14:$V3,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:19,26:$V4,29:$V5,30:$V6},{11:$Vh,14:$Vi,15:44,36:$Vj,37:45,42:$Vk,43:$Vl},{11:$Vf,13:51,14:$V3,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:19,26:$V4,29:$V5,30:$V6},{11:$Vf,13:52,14:$V3,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:19,26:$V4,29:$V5,30:$V6},{11:$Vf,13:53,14:$V3,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:19,26:$V4,29:$V5,30:$V6},{11:$Vf,13:54,14:$V3,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:19,26:$V4,29:$V5,30:$V6},{11:$Vf,13:55,14:$V3,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:19,26:$V4,29:$V5,30:$V6},{16:[1,56],32:$Va,33:$Vb,34:$Vc,35:$Vd,36:$Ve},o($Vg,$V9),{11:$Vh,14:$Vi,15:57,36:$Vj,37:45,42:$Vk,43:$Vl},{11:$Vh,14:$Vm,31:58,36:$Vj,37:65,42:$Vk,43:$Vl,44:62,52:59,57:$Vn,58:$Vo,59:$Vp},{11:$Vh,14:$Vi,15:66,36:$Vj,37:45,42:$Vk,43:$Vl},{1:[2,2]},o($V7,[2,6]),{5:[1,67],7:40,8:26,9:$V0,10:$V1,11:$V2,13:7,14:$V3,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:19,26:$V4,29:$V5,30:$V6},{1:[2,4]},o($V7,[2,11],{32:$Va,33:$Vb,34:$Vc,35:$Vd,36:$Ve}),{16:[1,68],38:$Vq},o($Vr,[2,33],{36:$Vs,39:$Vt,40:$Vu,41:$Vv}),{11:$Vh,14:$Vi,36:$Vj,37:74,42:$Vk,43:$Vl},{11:$Vh,14:$Vi,36:$Vj,37:75,42:$Vk,43:$Vl},o($Vw,[2,41]),o($Vw,[2,42]),o($Vw,[2,43]),o([5,9,10,16,32],[2,28],{33:$Vb,34:$Vc,35:$Vd,36:$Ve}),o([5,9,10,16,32,33],[2,29],{34:$Vc,35:$Vd,36:$Ve}),o([5,9,10,16,32,33,34],[2,30],{35:$Vd,36:$Ve}),o([5,9,10,16,32,33,34,35],[2,31],{36:$Ve}),o($Vg,[2,32]),o($Vg,[2,14]),{28:[1,76],38:$Vq},{28:[1,77]},o($Vx,[2,51],{53:78,54:[1,79],55:[1,80]}),o($Vy,[2,57]),o($Vy,[2,58]),o($Vy,[2,59]),{11:$Vh,14:$Vm,36:$Vj,37:65,42:$Vk,43:$Vl,44:62,52:81,57:$Vn,58:$Vo,59:$Vp},{11:$Vh,14:$Vm,31:82,36:$Vj,37:83,42:$Vk,43:$Vl,44:62,52:59,57:$Vn,58:$Vo,59:$Vp},{36:$Vs,39:$Vt,40:$Vu,41:$Vv,45:84,46:$Vz,47:$VA,48:$VB,49:$VC,50:$VD,51:$VE},{28:[1,91],38:$Vq},{1:[2,3]},{12:[1,92]},{11:$Vh,14:$Vi,36:$Vj,37:93,42:$Vk,43:$Vl},{11:$Vh,14:$Vi,36:$Vj,37:94,42:$Vk,43:$Vl},{11:$Vh,14:$Vi,36:$Vj,37:95,42:$Vk,43:$Vl},{11:$Vh,14:$Vi,36:$Vj,37:96,42:$Vk,43:$Vl},{11:$Vh,14:$Vi,36:$Vj,37:97,42:$Vk,43:$Vl},o($Vw,[2,39]),{16:$VF,36:$Vs,39:$Vt,40:$Vu,41:$Vv},{14:[1,99]},{14:[1,100]},{11:$Vh,14:$Vm,31:101,36:$Vj,37:65,42:$Vk,43:$Vl,44:62,52:59,57:$Vn,58:$Vo,59:$Vp},o($VG,[2,53]),o($VG,[2,54]),o($Vy,[2,60]),{16:[1,102]},{16:$VF,36:$Vs,39:$Vt,40:$Vu,41:$Vv,45:84,46:$Vz,47:$VA,48:$VB,49:$VC,50:$VD,51:$VE},{11:$Vh,14:$Vi,36:$Vj,37:103,42:$Vk,43:$Vl},o($VH,[2,45]),o($VH,[2,46]),o($VH,[2,47]),o($VH,[2,48]),o($VH,[2,49]),o($VH,[2,50]),{14:[1,104]},{11:$Vf,13:105,14:$V3,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:19,26:$V4,29:$V5,30:$V6},o($Vr,[2,34],{36:$Vs,39:$Vt,40:$Vu,41:$Vv}),o($VI,[2,35],{40:$Vu,41:$Vv}),o($VI,[2,36],{40:$Vu,41:$Vv}),o($Vw,[2,37]),o($Vw,[2,38]),o($Vw,[2,40]),{11:$Vf,13:106,14:$V3,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:19,26:$V4,29:$V5,30:$V6},{11:$Vf,13:107,14:$V3,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:19,26:$V4,29:$V5,30:$V6},o($Vx,[2,52]),o($Vy,[2,61]),o($Vy,[2,44],{36:$Vs,39:$Vt,40:$Vu,41:$Vv}),{11:$Vf,13:108,14:$V3,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:19,26:$V4,29:$V5,30:$V6},o($V7,[2,12],{32:$Va,33:$Vb,34:$Vc,35:$Vd,36:$Ve}),{16:[1,109],32:$Va,33:$Vb,34:$Vc,35:$Vd,36:$Ve},{16:[1,110],32:$Va,33:$Vb,34:$Vc,35:$Vd,36:$Ve},{16:[1,111],32:$Va,33:$Vb,34:$Vc,35:$Vd,36:$Ve},o($Vg,[2,25]),o($Vg,[2,27]),o($Vg,[2,26])],
defaultActions: {23:[2,1],39:[2,2],42:[2,4],67:[2,3]},
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
case 2:return 9;
break;
case 3:/* skip whitespace */
break;
case 4:yy_.yytext = yy_.yytext.slice(1,-1); return 43
break;
case 5:yy_.yytext = yy_.yytext.slice(1,-1); return 43
break;
case 6:return "PROJ"
break;
case 7:return "PROJ"
break;
case 8:return "PROJ"
break;
case 9:return "PROJ"
break;
case 10:return "SEL"
break;
case 11:return "SEL"
break;
case 12:return "SEL"
break;
case 13:return "SEL"
break;
case 14:return "UNION"
break;
case 15:return "UNION"
break;
case 16:return "UNION"
break;
case 17:return "NATURAL"
break;
case 18:return "NATURAL"
break;
case 19:return "NATURAL"
break;
case 20:return "PRODUCT"
break;
case 21:return "PRODUCT"
break;
case 22:return "PRODUCT"
break;
case 23:return "INTERSECTION"
break;
case 24:return "INTERSECTION"
break;
case 25:return "INTERSECTION"
break;
case 26:return "INTERSECTION"
break;
case 27:return "TRUE"
break;
case 28:return "FALSE"
break;
case 29:return "REN"
break;
case 30:return "REN"
break;
case 31:return "REN"
break;
case 32:return "REN"
break;
case 33:return 54
break;
case 34:return 54
break;
case 35:return 54
break;
case 36:return 55
break;
case 37:return 55
break;
case 38:return 55
break;
case 39:return 11
break;
case 40:return 42
break;
case 41:return 40
break;
case 42:return 41
break;
case 43:return 36
break;
case 44:return 39
break;
case 45:return '^'
break;
case 46:return 59
break;
case 47:return '%'
break;
case 48:return 14
break;
case 49:return 16
break;
case 50:return "COMMA"
break;
case 51:return 27
break;
case 52:return 28
break;
case 53:return "OR"
break;
case 54:return "AND"
break;
case 55:return 51
break;
case 56:return 12
break;
case 57:return 48
break;
case 58:return 49
break;
case 59:return 46
break;
case 60:return 47
break;
case 61:return 50
break;
case 62:return 10
break;
case 63:return 5
break;
case 64:return 'INVALID'
break;
}
},
rules: [/^(?:#[^\n]*)/,/^(?:%[^\n]*)/,/^(?:(\r\n|\r|\n))/,/^(?:\s+)/,/^(?:"[^"]+")/,/^(?:'[^']+')/,/^(?:proj\b)/,/^(?:PROJ\b)/,/^(?:Proj\b)/,/^(?:π)/,/^(?:sel\b)/,/^(?:Sel\b)/,/^(?:SEL\b)/,/^(?:σ)/,/^(?:U\b)/,/^(?:u\b)/,/^(?:∪)/,/^(?:\|X\|)/,/^(?:\|x\|)/,/^(?:⋈)/,/^(?:X\b)/,/^(?:x\b)/,/^(?:×)/,/^(?:INT\b)/,/^(?:int\b)/,/^(?:Int\b)/,/^(?:∩)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:Ren\b)/,/^(?:ren\b)/,/^(?:REN\b)/,/^(?:ρ)/,/^(?:OR\b)/,/^(?:or\b)/,/^(?:Or\b)/,/^(?:AND\b)/,/^(?:and\b)/,/^(?:And\b)/,/^(?:[a-zA-Z][a-zA-Z0-9.]*)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:!)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:,)/,/^(?:\[)/,/^(?:\])/,/^(?:\|)/,/^(?:&)/,/^(?:<>)/,/^(?:<-)/,/^(?:<=)/,/^(?:>=)/,/^(?:>)/,/^(?:<)/,/^(?:=)/,/^(?:;)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64],"inclusive":true}}
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