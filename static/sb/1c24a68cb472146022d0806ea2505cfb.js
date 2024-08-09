ace.define("ace/mode/terraform_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(require,exports,module){"use strict";var oop=require("../lib/oop"),TextHighlightRules=require("./text_highlight_rules").TextHighlightRules,TerraformHighlightRules=function(){this.$rules={start:[{token:["storage.function.terraform"],regex:"\\b(output|resource|data|variable|module|export)\\b"},{token:"variable.terraform",regex:"\\$\\s",push:[{token:"keyword.terraform",regex:"(-var-file|-var)"},{token:"variable.terraform",regex:"\\n|$",next:"pop"},{include:"strings"},{include:"variables"},{include:"operators"},{defaultToken:"text"}]},{token:"language.support.class",regex:"\\b(timeouts|provider|connection|provisioner|lifecycleprovider|atlas)\\b"},{token:"singleline.comment.terraform",regex:"#.*$"},{token:"singleline.comment.terraform",regex:"//.*$"},{token:"multiline.comment.begin.terraform",regex:/\/\*/,push:"blockComment"},{token:"storage.function.terraform",regex:"^\\s*(locals|terraform)\\s*{"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{include:"constants"},{include:"strings"},{include:"operators"},{include:"variables"}],blockComment:[{regex:/\*\//,token:"multiline.comment.end.terraform",next:"pop"},{defaultToken:"comment"}],constants:[{token:"constant.language.terraform",regex:"\\b(true|false|yes|no|on|off|EOF)\\b"},{token:"constant.numeric.terraform",regex:"(\\b([0-9]+)([kKmMgG]b?)?\\b)|(\\b(0x[0-9A-Fa-f]+)([kKmMgG]b?)?\\b)"}],variables:[{token:["variable.assignment.terraform","keyword.operator"],regex:"\\b([a-zA-Z_]+)(\\s*=)"}],interpolated_variables:[{token:"variable.terraform",regex:"\\b(var|self|count|path|local)\\b(?:\\.*[a-zA-Z_-]*)?"}],strings:[{token:"punctuation.quote.terraform",regex:"'",push:[{token:"punctuation.quote.terraform",regex:"'",next:"pop"},{include:"escaped_chars"},{defaultToken:"string"}]},{token:"punctuation.quote.terraform",regex:'"',push:[{token:"punctuation.quote.terraform",regex:'"',next:"pop"},{include:"interpolation"},{include:"escaped_chars"},{defaultToken:"string"}]}],escaped_chars:[{token:"constant.escaped_char.terraform",regex:"\\\\."}],operators:[{token:"keyword.operator",regex:"\\?|:|==|!=|>|<|>=|<=|&&|\\|\\||!|%|&|\\*|\\+|\\-|/|="}],interpolation:[{token:"punctuation.interpolated.begin.terraform",regex:"\\$?\\$\\{",push:[{token:"punctuation.interpolated.end.terraform",regex:"\\}",next:"pop"},{include:"interpolated_variables"},{include:"operators"},{include:"constants"},{include:"strings"},{include:"functions"},{include:"parenthesis"},{defaultToken:"punctuation"}]}],functions:[{token:"keyword.function.terraform",regex:"\\b(abs|basename|base64decode|base64encode|base64gzip|base64sha256|base64sha512|bcrypt|ceil|chomp|chunklist|cidrhost|cidrnetmask|cidrsubnet|coalesce|coalescelist|compact|concat|contains|dirname|distinct|element|file|floor|flatten|format|formatlist|indent|index|join|jsonencode|keys|length|list|log|lookup|lower|map|matchkeys|max|merge|min|md5|pathexpand|pow|replace|rsadecrypt|sha1|sha256|sha512|signum|slice|sort|split|substr|timestamp|timeadd|title|transpose|trimspace|upper|urlencode|uuid|values|zipmap)\\b"}],parenthesis:[{token:"paren.lparen",regex:"\\["},{token:"paren.rparen",regex:"\\]"}]},this.normalizeRules()};oop.inherits(TerraformHighlightRules,TextHighlightRules),exports.TerraformHighlightRules=TerraformHighlightRules})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(require,exports,module){"use strict";var oop=require("../../lib/oop"),Range=require("../../range").Range,BaseFoldMode=require("./fold_mode").FoldMode,FoldMode=exports.FoldMode=function(commentRegex){commentRegex&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+commentRegex.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+commentRegex.end)))};oop.inherits(FoldMode,BaseFoldMode),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(session,foldStyle,row){var line=session.getLine(row);if(this.singleLineBlockCommentRe.test(line)&&!this.startRegionRe.test(line)&&!this.tripleStarBlockCommentRe.test(line))return"";var fw=this._getFoldWidgetBase(session,foldStyle,row);return!fw&&this.startRegionRe.test(line)?"start":fw},this.getFoldWidgetRange=function(session,foldStyle,row,forceMultiline){var match,line=session.getLine(row);if(this.startRegionRe.test(line))return this.getCommentRegionBlock(session,line,row);if(match=line.match(this.foldingStartMarker)){var i=match.index;if(match[1])return this.openingBracketBlock(session,match[1],row,i);var range=session.getCommentFoldRange(row,i+match[0].length,1);return range&&!range.isMultiLine()&&(forceMultiline?range=this.getSectionRange(session,row):"all"!=foldStyle&&(range=null)),range}if("markbegin"!==foldStyle&&(match=line.match(this.foldingStopMarker))){i=match.index+match[0].length;return match[1]?this.closingBracketBlock(session,match[1],row,i):session.getCommentFoldRange(row,i,-1)}},this.getSectionRange=function(session,row){for(var line=session.getLine(row),startIndent=line.search(/\S/),startRow=row,startColumn=line.length,endRow=row+=1,maxRow=session.getLength();++row<maxRow;){var indent=(line=session.getLine(row)).search(/\S/);if(-1!==indent){if(startIndent>indent)break;var subRange=this.getFoldWidgetRange(session,"all",row);if(subRange){if(subRange.start.row<=startRow)break;if(subRange.isMultiLine())row=subRange.end.row;else if(startIndent==indent)break}endRow=row}}return new Range(startRow,startColumn,endRow,session.getLine(endRow).length)},this.getCommentRegionBlock=function(session,line,row){for(var startColumn=line.search(/\s*$/),maxRow=session.getLength(),startRow=row,re=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,depth=1;++row<maxRow;){line=session.getLine(row);var m=re.exec(line);if(m&&(m[1]?depth--:depth++,!depth))break}if(row>startRow)return new Range(startRow,startColumn,row,line.length)}}.call(FoldMode.prototype)})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(require,exports,module){"use strict";var Range=require("../range").Range,MatchingBraceOutdent=function(){};(function(){this.checkOutdent=function(line,input){return!!/^\s+$/.test(line)&&/^\s*\}/.test(input)},this.autoOutdent=function(doc,row){var match=doc.getLine(row).match(/^(\s*\})/);if(!match)return 0;var column=match[1].length,openBracePos=doc.findMatchingBracket({row,column});if(!openBracePos||openBracePos.row==row)return 0;var indent=this.$getIndent(doc.getLine(openBracePos.row));doc.replace(new Range(row,0,row,column-1),indent)},this.$getIndent=function(line){return line.match(/^\s*/)[0]}}).call(MatchingBraceOutdent.prototype),exports.MatchingBraceOutdent=MatchingBraceOutdent})),ace.define("ace/mode/terraform",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/terraform_highlight_rules","ace/mode/folding/cstyle","ace/mode/matching_brace_outdent"],(function(require,exports,module){"use strict";var oop=require("../lib/oop"),TextMode=require("./text").Mode,TerraformHighlightRules=require("./terraform_highlight_rules").TerraformHighlightRules,CStyleFoldMode=require("./folding/cstyle").FoldMode,MatchingBraceOutdent=require("./matching_brace_outdent").MatchingBraceOutdent,Mode=function(){TextMode.call(this),this.HighlightRules=TerraformHighlightRules,this.$outdent=new MatchingBraceOutdent,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new CStyleFoldMode};oop.inherits(Mode,TextMode),function(){this.lineCommentStart=["#","//"],this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/terraform"}.call(Mode.prototype),exports.Mode=Mode})),ace.require(["ace/mode/terraform"],(function(m){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=m)}));