"use strict";(self.webpackChunk_openremote_workshop=self.webpackChunk_openremote_workshop||[]).push([[2824],{"../../../node_modules/refractor/lang/robotframework.js":module=>{function robotframework(Prism){!function(Prism){var comment={pattern:/(^[ \t]*| {2}|\t)#.*/m,lookbehind:!0,greedy:!0},variable={pattern:/((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,lookbehind:!0,inside:{punctuation:/^[$@&%]\{|\}$/}};function createSection(name,inside){var extendecInside={"section-header":{pattern:/^ ?\*{3}.+?\*{3}/,alias:"keyword"}};for(var token in inside)extendecInside[token]=inside[token];return extendecInside.tag={pattern:/([\r\n](?: {2}|\t)[ \t]*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/\[|\]/}},extendecInside.variable=variable,extendecInside.comment=comment,{pattern:RegExp(/^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(/<name>/g,(function(){return name})),"im"),alias:"section",inside:extendecInside}}var docTag={pattern:/(\[Documentation\](?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},testNameLike={pattern:/([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,alias:"function",inside:{variable}},testPropertyLike={pattern:/([\r\n](?: {2}|\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,inside:{variable}};Prism.languages.robotframework={settings:createSection("Settings",{documentation:{pattern:/([\r\n] ?Documentation(?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},property:{pattern:/([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0}}),variables:createSection("Variables"),"test-cases":createSection("Test Cases",{"test-name":testNameLike,documentation:docTag,property:testPropertyLike}),keywords:createSection("Keywords",{"keyword-name":testNameLike,documentation:docTag,property:testPropertyLike}),tasks:createSection("Tasks",{"task-name":testNameLike,documentation:docTag,property:testPropertyLike}),comment},Prism.languages.robot=Prism.languages.robotframework}(Prism)}module.exports=robotframework,robotframework.displayName="robotframework",robotframework.aliases=[]}}]);