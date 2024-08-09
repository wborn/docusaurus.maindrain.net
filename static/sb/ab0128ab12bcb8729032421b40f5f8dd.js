ace.define("ace/theme/kuroir-css",["require","exports","module"],(function(require,exports,module){module.exports='/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: 467560D0-6ACE-4409-82FD-4791420837AC) */\n\n.ace-kuroir .ace_gutter {\n  background: #e8e8e8;\n  color: #333;\n}\n\n.ace-kuroir .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-kuroir {\n  background-color: #E8E9E8;\n  color: #363636;\n}\n\n.ace-kuroir .ace_cursor {\n  color: #202020;\n}\n\n.ace-kuroir .ace_marker-layer .ace_selection {\n  background: rgba(245, 170, 0, 0.57);\n}\n\n.ace-kuroir.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #E8E9E8;\n}\n\n.ace-kuroir .ace_marker-layer .ace_step {\n  background: rgb(198, 219, 174);\n}\n\n.ace-kuroir .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(0, 0, 0, 0.29);\n}\n\n.ace-kuroir .ace_marker-layer .ace_active-line {\n  background: rgba(203, 220, 47, 0.22);\n}\n\n.ace-kuroir .ace_gutter-active-line {\n  background-color: rgba(203, 220, 47, 0.22);\n}\n\n.ace-kuroir .ace_marker-layer .ace_selected-word {\n  border: 1px solid rgba(245, 170, 0, 0.57);\n}\n\n.ace-kuroir .ace_invisible {\n  color: #BFBFBF\n}\n\n.ace-kuroir .ace_fold {\n  border-color: #363636;\n}\n\n\n\n\n\n.ace-kuroir .ace_constant{color:#CD6839;}.ace-kuroir .ace_constant.ace_numeric{color:#9A5925;}.ace-kuroir .ace_support{color:#104E8B;}.ace-kuroir .ace_support.ace_function{color:#005273;}.ace-kuroir .ace_support.ace_constant{color:#CF6A4C;}.ace-kuroir .ace_storage{color:#A52A2A;}.ace-kuroir .ace_invalid.ace_illegal{color:#FD1224;\nbackground-color:rgba(255, 6, 0, 0.15);}.ace-kuroir .ace_invalid.ace_deprecated{text-decoration:underline;\nfont-style:italic;\ncolor:#FD1732;\nbackground-color:#E8E9E8;}.ace-kuroir .ace_string{color:#639300;}.ace-kuroir .ace_string.ace_regexp{color:#417E00;\nbackground-color:#C9D4BE;}.ace-kuroir .ace_comment{color:rgba(148, 148, 148, 0.91);\nbackground-color:rgba(220, 220, 220, 0.56);}.ace-kuroir .ace_variable{color:#009ACD;}.ace-kuroir .ace_meta.ace_tag{color:#005273;}.ace-kuroir .ace_markup.ace_heading{color:#B8012D;\nbackground-color:rgba(191, 97, 51, 0.051);}.ace-kuroir .ace_markup.ace_list{color:#8F5B26;}\n\n.ace-kuroir .ace_indent-guide {\n    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n\n.ace-kuroir .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n} \n'})),ace.define("ace/theme/kuroir",["require","exports","module","ace/theme/kuroir-css","ace/lib/dom"],(function(require,exports,module){exports.isDark=!1,exports.cssClass="ace-kuroir",exports.cssText=require("./kuroir-css"),require("../lib/dom").importCssString(exports.cssText,exports.cssClass,!1)})),ace.require(["ace/theme/kuroir"],(function(m){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=m)}));