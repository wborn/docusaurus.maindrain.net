"use strict";(self.webpackChunk_openremote_workshop=self.webpackChunk_openremote_workshop||[]).push([[7735],{"../../../node_modules/refractor/lang/pascaligo.js":module=>{function pascaligo(Prism){!function(Prism){var braces=/\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/.source,type=/(?:\b\w+(?:<braces>)?|<braces>)/.source.replace(/<braces>/g,(function(){return braces})),pascaligo=Prism.languages.pascaligo={comment:/\(\*[\s\S]+?\*\)|\/\/.*/,string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,greedy:!0},"class-name":[{pattern:RegExp(/(\btype\s+\w+\s+is\s+)<type>/.source.replace(/<type>/g,(function(){return type})),"i"),lookbehind:!0,inside:null},{pattern:RegExp(/<type>(?=\s+is\b)/.source.replace(/<type>/g,(function(){return type})),"i"),inside:null},{pattern:RegExp(/(:\s*)<type>/.source.replace(/<type>/g,(function(){return type}))),lookbehind:!0,inside:null}],keyword:{pattern:/(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,lookbehind:!0},boolean:{pattern:/(^|[^&])\b(?:False|True)\b/i,lookbehind:!0},builtin:{pattern:/(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,lookbehind:!0},function:/\b\w+(?=\s*\()/,number:[/%[01]+|&[0-7]+|\$[a-f\d]+/i,/\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i],operator:/->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,punctuation:/\(\.|\.\)|[()\[\]:;,.{}]/},classNameInside=["comment","keyword","builtin","operator","punctuation"].reduce((function(accum,key){return accum[key]=pascaligo[key],accum}),{});pascaligo["class-name"].forEach((function(p){p.inside=classNameInside}))}(Prism)}module.exports=pascaligo,pascaligo.displayName="pascaligo",pascaligo.aliases=[]}}]);