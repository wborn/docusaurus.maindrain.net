"use strict";(self.webpackChunk_openremote_workshop=self.webpackChunk_openremote_workshop||[]).push([[6285],{"../../../node_modules/refractor/lang/dot.js":module=>{function dot(Prism){!function(Prism){var ID="(?:"+[/[a-zA-Z_\x80-\uFFFF][\w\x80-\uFFFF]*/.source,/-?(?:\.\d+|\d+(?:\.\d*)?)/.source,/"[^"\\]*(?:\\[\s\S][^"\\]*)*"/.source,/<(?:[^<>]|(?!<!--)<(?:[^<>"']|"[^"]*"|'[^']*')+>|<!--(?:[^-]|-(?!->))*-->)*>/.source].join("|")+")",IDInside={markup:{pattern:/(^<)[\s\S]+(?=>$)/,lookbehind:!0,alias:["language-markup","language-html","language-xml"],inside:Prism.languages.markup}};function withID(source,flags){return RegExp(source.replace(/<ID>/g,(function(){return ID})),flags)}Prism.languages.dot={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\/|^#.*/m,greedy:!0},"graph-name":{pattern:withID(/(\b(?:digraph|graph|subgraph)[ \t\r\n]+)<ID>/.source,"i"),lookbehind:!0,greedy:!0,alias:"class-name",inside:IDInside},"attr-value":{pattern:withID(/(=[ \t\r\n]*)<ID>/.source),lookbehind:!0,greedy:!0,inside:IDInside},"attr-name":{pattern:withID(/([\[;, \t\r\n])<ID>(?=[ \t\r\n]*=)/.source),lookbehind:!0,greedy:!0,inside:IDInside},keyword:/\b(?:digraph|edge|graph|node|strict|subgraph)\b/i,"compass-point":{pattern:/(:[ \t\r\n]*)(?:[ewc_]|[ns][ew]?)(?![\w\x80-\uFFFF])/,lookbehind:!0,alias:"builtin"},node:{pattern:withID(/(^|[^-.\w\x80-\uFFFF\\])<ID>/.source),lookbehind:!0,greedy:!0,inside:IDInside},operator:/[=:]|-[->]/,punctuation:/[\[\]{};,]/},Prism.languages.gv=Prism.languages.dot}(Prism)}module.exports=dot,dot.displayName="dot",dot.aliases=["gv"]}}]);