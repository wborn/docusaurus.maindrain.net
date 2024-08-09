ace.define("ace/mode/ruby_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(require,exports,module){"use strict";var oop=require("../lib/oop"),TextHighlightRules=require("./text_highlight_rules").TextHighlightRules,constantOtherSymbol=exports.constantOtherSymbol={token:"constant.other.symbol.ruby",regex:"[:](?:[A-Za-z_]|[@$](?=[a-zA-Z0-9_]))[a-zA-Z0-9_]*[!=?]?"};exports.qString={token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},exports.qqString={token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},exports.tString={token:"string",regex:"[`](?:(?:\\\\.)|(?:[^'\\\\]))*?[`]"};var constantNumericHex=exports.constantNumericHex={token:"constant.numeric",regex:"0[xX][0-9a-fA-F](?:[0-9a-fA-F]|_(?=[0-9a-fA-F]))*\\b"},constantNumericBinary=exports.constantNumericBinary={token:"constant.numeric",regex:/\b(0[bB][01](?:[01]|_(?=[01]))*)\b/},constantNumericDecimal=exports.constantNumericDecimal={token:"constant.numeric",regex:/\b(0[dD](?:[1-9](?:[\d]|_(?=[\d]))*|0))\b/},constantNumericOctal=exports.constantNumericDecimal={token:"constant.numeric",regex:/\b(0[oO]?(?:[1-7](?:[0-7]|_(?=[0-7]))*|0))\b/},constantNumericRational=exports.constantNumericRational={token:"constant.numeric",regex:/\b([\d]+(?:[./][\d]+)?ri?)\b/},constantNumericComplex=exports.constantNumericComplex={token:"constant.numeric",regex:/\b([\d]i)\b/},constantNumericFloat=exports.constantNumericFloat={token:"constant.numeric",regex:"[+-]?\\d(?:\\d|_(?=\\d))*(?:(?:\\.\\d(?:\\d|_(?=\\d))*)?(?:[eE][+-]?\\d+)?)?i?\\b"},instanceVariable=exports.instanceVariable={token:"variable.instance",regex:"@{1,2}[a-zA-Z_\\d]+"},RubyHighlightRules=function(){var keywordMapper=this.$keywords=this.createKeywordMapper({keyword:"alias|and|BEGIN|begin|break|case|class|def|defined|do|else|elsif|END|end|ensure|__FILE__|finally|for|gem|if|in|__LINE__|module|next|not|or|private|protected|public|redo|rescue|retry|return|super|then|undef|unless|until|when|while|yield|__ENCODING__|prepend","constant.language":"true|TRUE|false|FALSE|nil|NIL|ARGF|ARGV|DATA|ENV|RUBY_PLATFORM|RUBY_RELEASE_DATE|RUBY_VERSION|STDERR|STDIN|STDOUT|TOPLEVEL_BINDING|RUBY_PATCHLEVEL|RUBY_REVISION|RUBY_COPYRIGHT|RUBY_ENGINE|RUBY_ENGINE_VERSION|RUBY_DESCRIPTION","variable.language":"$DEBUG|$defout|$FILENAME|$LOAD_PATH|$SAFE|$stdin|$stdout|$stderr|$VERBOSE|$!|root_url|flash|session|cookies|params|request|response|logger|self","support.function":"abort|Array|assert|assert_equal|assert_not_equal|assert_same|assert_not_same|assert_nil|assert_not_nil|assert_match|assert_no_match|assert_in_delta|assert_throws|assert_raise|assert_nothing_raised|assert_instance_of|assert_kind_of|assert_respond_to|assert_operator|assert_send|assert_difference|assert_no_difference|assert_recognizes|assert_generates|assert_response|assert_redirected_to|assert_template|assert_select|assert_select_email|assert_select_rjs|assert_select_encoded|css_select|at_exit|attr|attr_writer|attr_reader|attr_accessor|attr_accessible|autoload|binding|block_given?|callcc|caller|catch|chomp|chomp!|chop|chop!|defined?|delete_via_redirect|eval|exec|exit|exit!|fail|Float|flunk|follow_redirect!|fork|form_for|form_tag|format|gets|global_variables|gsub|gsub!|get_via_redirect|host!|https?|https!|include|Integer|lambda|link_to|link_to_unless_current|link_to_function|link_to_remote|load|local_variables|loop|open|open_session|p|print|printf|proc|putc|puts|post_via_redirect|put_via_redirect|raise|rand|raw|readline|readlines|redirect?|request_via_redirect|require|scan|select|set_trace_func|sleep|split|sprintf|srand|String|stylesheet_link_tag|syscall|system|sub|sub!|test|throw|trace_var|trap|untrace_var|atan2|cos|exp|frexp|ldexp|log|log10|sin|sqrt|tan|render|javascript_include_tag|csrf_meta_tag|label_tag|text_field_tag|submit_tag|check_box_tag|content_tag|radio_button_tag|text_area_tag|password_field_tag|hidden_field_tag|fields_for|select_tag|options_for_select|options_from_collection_for_select|collection_select|time_zone_select|select_date|select_time|select_datetime|date_select|time_select|datetime_select|select_year|select_month|select_day|select_hour|select_minute|select_second|file_field_tag|file_field|respond_to|skip_before_filter|around_filter|after_filter|verify|protect_from_forgery|rescue_from|helper_method|redirect_to|before_filter|send_data|send_file|validates_presence_of|validates_uniqueness_of|validates_length_of|validates_format_of|validates_acceptance_of|validates_associated|validates_exclusion_of|validates_inclusion_of|validates_numericality_of|validates_with|validates_each|authenticate_or_request_with_http_basic|authenticate_or_request_with_http_digest|filter_parameter_logging|match|get|post|resources|redirect|scope|assert_routing|translate|localize|extract_locale_from_tld|caches_page|expire_page|caches_action|expire_action|cache|expire_fragment|expire_cache_for|observe|cache_sweeper|has_many|has_one|belongs_to|has_and_belongs_to_many|p|warn|refine|using|module_function|extend|alias_method|private_class_method|remove_method|undef_method","invalid.deprecated":"debugger"},"identifier"),escapedChars="\\\\(?:n(?:[1-7][0-7]{0,2}|0)|[nsrtvfbae'\"\\\\]|c(?:\\\\M-)?.|M-(?:\\\\C-|\\\\c)?.|C-(?:\\\\M-)?.|[0-7]{3}|x[\\da-fA-F]{2}|u[\\da-fA-F]{4}|u{[\\da-fA-F]{1,6}(?:\\s[\\da-fA-F]{1,6})*})",closeParen={"(":")","[":"]","{":"}","<":">","^":"^","|":"|","%":"%"};this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"comment.multiline",regex:"^=begin(?=$|\\s.*$)",next:"comment"},{token:"string.regexp",regex:/[/](?=.*\/)/,next:"regex"},[{token:["constant.other.symbol.ruby","string.start"],regex:/(:)?(")/,push:[{token:"constant.language.escape",regex:escapedChars},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/"/,next:"pop"},{defaultToken:"string"}]},{token:"string.start",regex:/`/,push:[{token:"constant.language.escape",regex:escapedChars},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/`/,next:"pop"},{defaultToken:"string"}]},{token:["constant.other.symbol.ruby","string.start"],regex:/(:)?(')/,push:[{token:"constant.language.escape",regex:/\\['\\]/},{token:"string.end",regex:/'/,next:"pop"},{defaultToken:"string"}]},{token:"string.start",regex:/%[qwx]([(\[<{^|%])/,onMatch:function(val,state,stack){stack.length&&(stack=[]);var paren=val[val.length-1];return stack.unshift(paren,state),this.next="qStateWithoutInterpolation",this.token}},{token:"string.start",regex:/%[QWX]?([(\[<{^|%])/,onMatch:function(val,state,stack){stack.length&&(stack=[]);var paren=val[val.length-1];return stack.unshift(paren,state),this.next="qStateWithInterpolation",this.token}},{token:"constant.other.symbol.ruby",regex:/%[si]([(\[<{^|%])/,onMatch:function(val,state,stack){stack.length&&(stack=[]);var paren=val[val.length-1];return stack.unshift(paren,state),this.next="sStateWithoutInterpolation",this.token}},{token:"constant.other.symbol.ruby",regex:/%[SI]([(\[<{^|%])/,onMatch:function(val,state,stack){stack.length&&(stack=[]);var paren=val[val.length-1];return stack.unshift(paren,state),this.next="sStateWithInterpolation",this.token}},{token:"string.regexp",regex:/%[r]([(\[<{^|%])/,onMatch:function(val,state,stack){stack.length&&(stack=[]);var paren=val[val.length-1];return stack.unshift(paren,state),this.next="rState",this.token}}],{token:"punctuation",regex:"::"},instanceVariable,{token:"variable.global",regex:"[$][a-zA-Z_\\d]+"},{token:"support.class",regex:"[A-Z][a-zA-Z_\\d]*"},{token:["punctuation.operator","support.function"],regex:/(\.)([a-zA-Z_\d]+)(?=\()/},{token:["punctuation.operator","identifier"],regex:/(\.)([a-zA-Z_][a-zA-Z_\d]*)/},{token:"string.character",regex:"\\B\\?(?:"+escapedChars+"|\\S)"},{token:"punctuation.operator",regex:/\?(?=.+:)/},constantNumericRational,constantNumericComplex,constantOtherSymbol,constantNumericHex,constantNumericFloat,constantNumericBinary,constantNumericDecimal,constantNumericOctal,{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:keywordMapper,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"punctuation.separator.key-value",regex:"=>"},{stateName:"heredoc",onMatch:function(value,currentState,stack){var next="-"==value[2]||"~"==value[2]?"indentedHeredoc":"heredoc",tokens=value.split(this.splitRegex);return stack.push(next,tokens[3]),[{type:"constant",value:tokens[1]},{type:"string",value:tokens[2]},{type:"support.class",value:tokens[3]},{type:"string",value:tokens[4]}]},regex:"(<<[-~]?)(['\"`]?)([\\w]+)(['\"`]?)",rules:{heredoc:[{onMatch:function(value,currentState,stack){return value===stack[1]?(stack.shift(),stack.shift(),this.next=stack[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}],indentedHeredoc:[{token:"string",regex:"^ +"},{onMatch:function(value,currentState,stack){return value===stack[1]?(stack.shift(),stack.shift(),this.next=stack[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}]}},{regex:"$",token:"empty",next:function(currentState,stack){return"heredoc"===stack[0]||"indentedHeredoc"===stack[0]?stack[0]:currentState}},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|/|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\||\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]",onMatch:function(value,currentState,stack){return this.next="","}"==value&&stack.length>1&&"start"!=stack[1]&&(stack.shift(),this.next=stack.shift()),this.token}},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:/[?:,;.]/}],comment:[{token:"comment.multiline",regex:"^=end(?=$|\\s.*$)",next:"start"},{token:"comment",regex:".+"}],qStateWithInterpolation:[{token:"string.start",regex:/[(\[<{]/,onMatch:function(val,state,stack){return stack.length&&val===stack[0]?(stack.unshift(val,state),this.token):"string"}},{token:"constant.language.escape",regex:escapedChars},{token:"constant.language.escape",regex:/\\./},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/[)\]>}^|%]/,onMatch:function(val,state,stack){return stack.length&&val===closeParen[stack[0]]?(stack.shift(),this.next=stack.shift(),this.token):(this.next="","string")}},{defaultToken:"string"}],qStateWithoutInterpolation:[{token:"string.start",regex:/[(\[<{]/,onMatch:function(val,state,stack){return stack.length&&val===stack[0]?(stack.unshift(val,state),this.token):"string"}},{token:"constant.language.escape",regex:/\\['\\]/},{token:"constant.language.escape",regex:/\\./},{token:"string.end",regex:/[)\]>}^|%]/,onMatch:function(val,state,stack){return stack.length&&val===closeParen[stack[0]]?(stack.shift(),this.next=stack.shift(),this.token):(this.next="","string")}},{defaultToken:"string"}],sStateWithoutInterpolation:[{token:"constant.other.symbol.ruby",regex:/[(\[<{]/,onMatch:function(val,state,stack){return stack.length&&val===stack[0]?(stack.unshift(val,state),this.token):"constant.other.symbol.ruby"}},{token:"constant.other.symbol.ruby",regex:/[)\]>}^|%]/,onMatch:function(val,state,stack){return stack.length&&val===closeParen[stack[0]]?(stack.shift(),this.next=stack.shift(),this.token):(this.next="","constant.other.symbol.ruby")}},{defaultToken:"constant.other.symbol.ruby"}],sStateWithInterpolation:[{token:"constant.other.symbol.ruby",regex:/[(\[<{]/,onMatch:function(val,state,stack){return stack.length&&val===stack[0]?(stack.unshift(val,state),this.token):"constant.other.symbol.ruby"}},{token:"constant.language.escape",regex:escapedChars},{token:"constant.language.escape",regex:/\\./},{token:"paren.start",regex:/#{/,push:"start"},{token:"constant.other.symbol.ruby",regex:/[)\]>}^|%]/,onMatch:function(val,state,stack){return stack.length&&val===closeParen[stack[0]]?(stack.shift(),this.next=stack.shift(),this.token):(this.next="","constant.other.symbol.ruby")}},{defaultToken:"constant.other.symbol.ruby"}],rState:[{token:"string.regexp",regex:/[(\[<{]/,onMatch:function(val,state,stack){return stack.length&&val===stack[0]?(stack.unshift(val,state),this.token):"constant.language.escape"}},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.regexp",regex:/\//},{token:"string.regexp",regex:/[)\]>}^|%][imxouesn]*/,onMatch:function(val,state,stack){return stack.length&&val[0]===closeParen[stack[0]]?(stack.shift(),this.next=stack.shift(),this.token):(this.next="","constant.language.escape")}},{include:"regex"},{defaultToken:"string.regexp"}],regex:[{token:"regexp.keyword",regex:/\\[wWdDhHsS]/},{token:"constant.language.escape",regex:/\\[AGbBzZ]/},{token:"constant.language.escape",regex:/\\g<[a-zA-Z0-9]*>/},{token:["constant.language.escape","regexp.keyword","constant.language.escape"],regex:/(\\p{\^?)(Alnum|Alpha|Blank|Cntrl|Digit|Graph|Lower|Print|Punct|Space|Upper|XDigit|Word|ASCII|Any|Assigned|Arabic|Armenian|Balinese|Bengali|Bopomofo|Braille|Buginese|Buhid|Canadian_Aboriginal|Carian|Cham|Cherokee|Common|Coptic|Cuneiform|Cypriot|Cyrillic|Deseret|Devanagari|Ethiopic|Georgian|Glagolitic|Gothic|Greek|Gujarati|Gurmukhi|Han|Hangul|Hanunoo|Hebrew|Hiragana|Inherited|Kannada|Katakana|Kayah_Li|Kharoshthi|Khmer|Lao|Latin|Lepcha|Limbu|Linear_B|Lycian|Lydian|Malayalam|Mongolian|Myanmar|New_Tai_Lue|Nko|Ogham|Ol_Chiki|Old_Italic|Old_Persian|Oriya|Osmanya|Phags_Pa|Phoenician|Rejang|Runic|Saurashtra|Shavian|Sinhala|Sundanese|Syloti_Nagri|Syriac|Tagalog|Tagbanwa|Tai_Le|Tamil|Telugu|Thaana|Thai|Tibetan|Tifinagh|Ugaritic|Vai|Yi|Ll|Lm|Lt|Lu|Lo|Mn|Mc|Me|Nd|Nl|Pc|Pd|Ps|Pe|Pi|Pf|Po|No|Sm|Sc|Sk|So|Zs|Zl|Zp|Cc|Cf|Cn|Co|Cs|N|L|M|P|S|Z|C)(})/},{token:["constant.language.escape","invalid","constant.language.escape"],regex:/(\\p{\^?)([^/]*)(})/},{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:/[/][imxouesn]*/,next:"start"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?(?:[:=!>]|<'?[a-zA-Z]*'?>|<[=!])|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"regexp.keyword",regex:/\[\[:(?:alnum|alpha|blank|cntrl|digit|graph|lower|print|punct|space|upper|xdigit|word|ascii):\]\]/},{token:"constant.language.escape",regex:/\[\^?/,push:"regex_character_class"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.keyword",regex:/\\[wWdDhHsS]/},{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:/&?&?\[\^?/,push:"regex_character_class"},{token:"constant.language.escape",regex:"]",next:"pop"},{token:"constant.language.escape",regex:"-"},{defaultToken:"string.regexp.characterclass"}]},this.normalizeRules()};oop.inherits(RubyHighlightRules,TextHighlightRules),exports.RubyHighlightRules=RubyHighlightRules})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(require,exports,module){"use strict";var Range=require("../range").Range,MatchingBraceOutdent=function(){};(function(){this.checkOutdent=function(line,input){return!!/^\s+$/.test(line)&&/^\s*\}/.test(input)},this.autoOutdent=function(doc,row){var match=doc.getLine(row).match(/^(\s*\})/);if(!match)return 0;var column=match[1].length,openBracePos=doc.findMatchingBracket({row,column});if(!openBracePos||openBracePos.row==row)return 0;var indent=this.$getIndent(doc.getLine(openBracePos.row));doc.replace(new Range(row,0,row,column-1),indent)},this.$getIndent=function(line){return line.match(/^\s*/)[0]}}).call(MatchingBraceOutdent.prototype),exports.MatchingBraceOutdent=MatchingBraceOutdent})),ace.define("ace/mode/folding/ruby",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range","ace/token_iterator"],(function(require,exports,module){"use strict";var oop=require("../../lib/oop"),BaseFoldMode=require("./fold_mode").FoldMode,Range=require("../../range").Range,TokenIterator=require("../../token_iterator").TokenIterator,FoldMode=exports.FoldMode=function(){};oop.inherits(FoldMode,BaseFoldMode),function(){this.indentKeywords={class:1,def:1,module:1,do:1,unless:1,if:1,while:1,for:1,until:1,begin:1,else:0,elsif:0,rescue:0,ensure:0,when:0,end:-1,case:1,"=begin":1,"=end":-1},this.foldingStartMarker=/(?:\s|^)(def|do|while|class|unless|module|if|for|until|begin|else|elsif|case|rescue|ensure|when)\b|({\s*$)|(=begin)/,this.foldingStopMarker=/(=end(?=$|\s.*$))|(^\s*})|\b(end)\b/,this.getFoldWidget=function(session,foldStyle,row){var match,line=session.getLine(row),isStart=this.foldingStartMarker.test(line),isEnd=this.foldingStopMarker.test(line);if(isStart&&!isEnd)if((match=line.match(this.foldingStartMarker))[1]){if("if"==match[1]||"else"==match[1]||"while"==match[1]||"until"==match[1]||"unless"==match[1]){if("else"==match[1]&&!1===/^\s*else\s*$/.test(line))return;if(!1===/^\s*(?:if|else|while|until|unless)\s*/.test(line))return}if("when"==match[1]&&!0===/\sthen\s/.test(line))return;if("keyword"===session.getTokenAt(row,match.index+2).type)return"start"}else{if(!match[3])return"start";if("comment.multiline"===session.getTokenAt(row,match.index+1).type)return"start"}if("markbeginend"!=foldStyle||!isEnd||isStart&&isEnd)return"";if("end"===(match=line.match(this.foldingStopMarker))[3]){if("keyword"===session.getTokenAt(row,match.index+1).type)return"end"}else{if(!match[1])return"end";if("comment.multiline"===session.getTokenAt(row,match.index+1).type)return"end"}},this.getFoldWidgetRange=function(session,foldStyle,row){var match,line=session.doc.getLine(row);return(match=this.foldingStartMarker.exec(line))?match[1]||match[3]?this.rubyBlock(session,row,match.index+2):this.openingBracketBlock(session,"{",row,match.index):(match=this.foldingStopMarker.exec(line))?"end"===match[3]&&"keyword"===session.getTokenAt(row,match.index+1).type||"=end"===match[1]&&"comment.multiline"===session.getTokenAt(row,match.index+1).type?this.rubyBlock(session,row,match.index+1):this.closingBracketBlock(session,"}",row,match.index+match[0].length):void 0},this.rubyBlock=function(session,row,column,tokenRange){var stream=new TokenIterator(session,row,column),token=stream.getCurrentToken();if(token&&("keyword"==token.type||"comment.multiline"==token.type)){var val=token.value,line=session.getLine(row);switch(token.value){case"if":case"unless":case"while":case"until":if(!new RegExp("^\\s*"+token.value).test(line))return;var dir=this.indentKeywords[val];break;case"when":if(/\sthen\s/.test(line))return;case"elsif":case"rescue":case"ensure":dir=1;break;case"else":if(!new RegExp("^\\s*"+token.value+"\\s*$").test(line))return;dir=1;break;default:dir=this.indentKeywords[val]}var stack=[val];if(dir){var startColumn=-1===dir?session.getLine(row-1).length:session.getLine(row).length,startRow=row,ranges=[];if(ranges.push(stream.getCurrentTokenRange()),stream.step=-1===dir?stream.stepBackward:stream.stepForward,"comment.multiline"==token.type){for(;token=stream.step();)if("comment.multiline"===token.type)if(1==dir){if(startColumn=6,"=end"==token.value)break}else if("=begin"==token.value)break}else for(;token=stream.step();){var ignore=!1;if("keyword"===token.type){var level=dir*this.indentKeywords[token.value];switch(line=session.getLine(stream.getCurrentTokenRow()),token.value){case"do":for(var i=stream.$tokenIndex-1;i>=0;i--){var prevToken=stream.$rowTokens[i];if(prevToken&&("while"==prevToken.value||"until"==prevToken.value||"for"==prevToken.value)){level=0;break}}break;case"else":new RegExp("^\\s*"+token.value+"\\s*$").test(line)&&"case"!=val||(level=0,ignore=!0);break;case"if":case"unless":case"while":case"until":new RegExp("^\\s*"+token.value).test(line)||(level=0,ignore=!0);break;case"when":(/\sthen\s/.test(line)||"case"==val)&&(level=0,ignore=!0)}if(level>0)stack.unshift(token.value);else if(level<=0&&!1===ignore){if(stack.shift(),!stack.length){if(("while"==val||"until"==val||"for"==val)&&"do"!=token.value)break;if("do"==token.value&&-1==dir&&0!=level)break;if("do"!=token.value)break}0===level&&stack.unshift(token.value)}}}if(!token)return null;if(tokenRange)return ranges.push(stream.getCurrentTokenRange()),ranges;row=stream.getCurrentTokenRow();if(-1===dir){if("comment.multiline"===token.type)var endColumn=6;else endColumn=session.getLine(row).length;return new Range(row,endColumn,startRow-1,startColumn)}return new Range(startRow,startColumn,row-1,session.getLine(row-1).length)}}}}.call(FoldMode.prototype)})),ace.define("ace/mode/ruby",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/ruby_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/folding/ruby"],(function(require,exports,module){"use strict";var oop=require("../lib/oop"),TextMode=require("./text").Mode,RubyHighlightRules=require("./ruby_highlight_rules").RubyHighlightRules,MatchingBraceOutdent=require("./matching_brace_outdent").MatchingBraceOutdent,Range=require("../range").Range,FoldMode=require("./folding/ruby").FoldMode,Mode=function(){this.HighlightRules=RubyHighlightRules,this.$outdent=new MatchingBraceOutdent,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new FoldMode,this.indentKeywords=this.foldingRules.indentKeywords};oop.inherits(Mode,TextMode),function(){this.lineCommentStart="#",this.getNextLineIndent=function(state,line,tab){var indent=this.$getIndent(line),tokens=this.getTokenizer().getLineTokens(line,state).tokens;if(tokens.length&&"comment"==tokens[tokens.length-1].type)return indent;if("start"==state){var match=line.match(/^.*[\{\(\[]\s*$/),startingClassOrMethod=line.match(/^\s*(class|def|module)\s.*$/),startingDoBlock=line.match(/.*do(\s*|\s+\|.*\|\s*)$/),startingConditional=line.match(/^\s*(if|else|when|elsif|unless|while|for|begin|rescue|ensure)\s*/);(match||startingClassOrMethod||startingDoBlock||startingConditional)&&(indent+=tab)}return indent},this.checkOutdent=function(state,line,input){return/^\s+(end|else|rescue|ensure)$/.test(line+input)||this.$outdent.checkOutdent(line,input)},this.autoOutdent=function(state,session,row){var line=session.getLine(row);if(/}/.test(line))return this.$outdent.autoOutdent(session,row);var indent=this.$getIndent(line),prevLine=session.getLine(row-1),prevIndent=this.$getIndent(prevLine),tab=session.getTabString();prevIndent.length<=indent.length&&indent.slice(-tab.length)==tab&&session.remove(new Range(row,indent.length-tab.length,row,indent.length))},this.getMatching=function(session,row,column){if(null==row){var pos=session.selection.lead;column=pos.column,row=pos.row}var startToken=session.getTokenAt(row,column);if(startToken&&startToken.value in this.indentKeywords)return this.foldingRules.rubyBlock(session,row,column,!0)},this.$id="ace/mode/ruby",this.snippetFileId="ace/snippets/ruby"}.call(Mode.prototype),exports.Mode=Mode})),ace.require(["ace/mode/ruby"],(function(m){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=m)}));