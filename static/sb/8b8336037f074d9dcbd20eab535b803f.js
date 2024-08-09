ace.define("ace/ext/elastic_tabstops_lite",["require","exports","module","ace/editor","ace/config"],(function(require,exports,module){"use strict";var ElasticTabstopsLite=function(){function ElasticTabstopsLite(editor){this.$editor=editor;var self=this,changedRows=[],recordChanges=!1;this.onAfterExec=function(){recordChanges=!1,self.processRows(changedRows),changedRows=[]},this.onExec=function(){recordChanges=!0},this.onChange=function(delta){recordChanges&&(-1==changedRows.indexOf(delta.start.row)&&changedRows.push(delta.start.row),delta.end.row!=delta.start.row&&changedRows.push(delta.end.row))}}return ElasticTabstopsLite.prototype.processRows=function(rows){this.$inChange=!0;for(var checkedRows=[],r=0,rowCount=rows.length;r<rowCount;r++){var row=rows[r];if(!(checkedRows.indexOf(row)>-1))for(var cellWidthObj=this.$findCellWidthsForBlock(row),cellWidths=this.$setBlockCellWidthsToMax(cellWidthObj.cellWidths),rowIndex=cellWidthObj.firstRow,w=0,l=cellWidths.length;w<l;w++){var widths=cellWidths[w];checkedRows.push(rowIndex),this.$adjustRow(rowIndex,widths),rowIndex++}}this.$inChange=!1},ElasticTabstopsLite.prototype.$findCellWidthsForBlock=function(row){for(var widths,cellWidths=[],rowIter=row;rowIter>=0&&0!=(widths=this.$cellWidthsForRow(rowIter)).length;)cellWidths.unshift(widths),rowIter--;var firstRow=rowIter+1;rowIter=row;for(var numRows=this.$editor.session.getLength();rowIter<numRows-1&&(rowIter++,0!=(widths=this.$cellWidthsForRow(rowIter)).length);)cellWidths.push(widths);return{cellWidths,firstRow}},ElasticTabstopsLite.prototype.$cellWidthsForRow=function(row){for(var selectionColumns=this.$selectionColumnsForRow(row),tabs=[-1].concat(this.$tabsForRow(row)),widths=tabs.map((function(el){return 0})).slice(1),line=this.$editor.session.getLine(row),i=0,len=tabs.length-1;i<len;i++){var leftEdge=tabs[i]+1,rightEdge=tabs[i+1],rightmostSelection=this.$rightmostSelectionInCell(selectionColumns,rightEdge),cell=line.substring(leftEdge,rightEdge);widths[i]=Math.max(cell.replace(/\s+$/g,"").length,rightmostSelection-leftEdge)}return widths},ElasticTabstopsLite.prototype.$selectionColumnsForRow=function(row){var selections=[],cursor=this.$editor.getCursorPosition();return this.$editor.session.getSelection().isEmpty()&&row==cursor.row&&selections.push(cursor.column),selections},ElasticTabstopsLite.prototype.$setBlockCellWidthsToMax=function(cellWidths){for(var blockStartRow,blockEndRow,maxWidth,startingNewBlock=!0,columnInfo=this.$izip_longest(cellWidths),c=0,l=columnInfo.length;c<l;c++){var column=columnInfo[c];if(column.push){column.push(NaN);for(var r=0,s=column.length;r<s;r++){var width=column[r];if(startingNewBlock&&(blockStartRow=r,maxWidth=0,startingNewBlock=!1),isNaN(width)){blockEndRow=r;for(var j=blockStartRow;j<blockEndRow;j++)cellWidths[j][c]=maxWidth;startingNewBlock=!0}maxWidth=Math.max(maxWidth,width)}}else console.error(column)}return cellWidths},ElasticTabstopsLite.prototype.$rightmostSelectionInCell=function(selectionColumns,cellRightEdge){var rightmost=0;if(selectionColumns.length){for(var lengths=[],s=0,length=selectionColumns.length;s<length;s++)selectionColumns[s]<=cellRightEdge?lengths.push(s):lengths.push(0);rightmost=Math.max.apply(Math,lengths)}return rightmost},ElasticTabstopsLite.prototype.$tabsForRow=function(row){for(var match,rowTabs=[],line=this.$editor.session.getLine(row),re=/\t/g;null!=(match=re.exec(line));)rowTabs.push(match.index);return rowTabs},ElasticTabstopsLite.prototype.$adjustRow=function(row,widths){var rowTabs=this.$tabsForRow(row);if(0!=rowTabs.length)for(var bias=0,location=-1,expandedSet=this.$izip(widths,rowTabs),i=0,l=expandedSet.length;i<l;i++){var w=expandedSet[i][0],it=expandedSet[i][1],difference=(location+=1+w)-(it+=bias);if(0!=difference){var partialLine=this.$editor.session.getLine(row).substr(0,it),strippedPartialLine=partialLine.replace(/\s*$/g,""),ispaces=partialLine.length-strippedPartialLine.length;difference>0&&(this.$editor.session.getDocument().insertInLine({row,column:it+1},Array(difference+1).join(" ")+"\t"),this.$editor.session.getDocument().removeInLine(row,it,it+1),bias+=difference),difference<0&&ispaces>=-difference&&(this.$editor.session.getDocument().removeInLine(row,it+difference,it),bias+=difference)}}},ElasticTabstopsLite.prototype.$izip_longest=function(iterables){if(!iterables[0])return[];for(var longest=iterables[0].length,iterablesLength=iterables.length,i=1;i<iterablesLength;i++){var iLength=iterables[i].length;iLength>longest&&(longest=iLength)}for(var expandedSet=[],l=0;l<longest;l++){var set=[];for(i=0;i<iterablesLength;i++)""===iterables[i][l]?set.push(NaN):set.push(iterables[i][l]);expandedSet.push(set)}return expandedSet},ElasticTabstopsLite.prototype.$izip=function(widths,tabs){for(var size=widths.length>=tabs.length?tabs.length:widths.length,expandedSet=[],i=0;i<size;i++){var set=[widths[i],tabs[i]];expandedSet.push(set)}return expandedSet},ElasticTabstopsLite}();exports.ElasticTabstopsLite=ElasticTabstopsLite;var Editor=require("../editor").Editor;require("../config").defineOptions(Editor.prototype,"editor",{useElasticTabstops:{set:function(val){val?(this.elasticTabstops||(this.elasticTabstops=new ElasticTabstopsLite(this)),this.commands.on("afterExec",this.elasticTabstops.onAfterExec),this.commands.on("exec",this.elasticTabstops.onExec),this.on("change",this.elasticTabstops.onChange)):this.elasticTabstops&&(this.commands.removeListener("afterExec",this.elasticTabstops.onAfterExec),this.commands.removeListener("exec",this.elasticTabstops.onExec),this.removeListener("change",this.elasticTabstops.onChange))}}})})),ace.require(["ace/ext/elastic_tabstops_lite"],(function(m){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=m)}));