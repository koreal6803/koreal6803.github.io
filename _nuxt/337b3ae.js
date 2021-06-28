(window.webpackJsonp=window.webpackJsonp||[]).push([[23,20],{334:function(t,e,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("889f5830",content,!0,{sourceMap:!1})},352:function(t,e,n){"use strict";n.r(e);var r=n(19),o=(n(14),n(31),n(386)),l=n(603),d=n(601),c=n(604),v=n(602),m=n(600),h=n(343);Object(o.a)([l.a,c.a,v.a,d.a,m.a]);var _={name:"Maxdrawdown",props:{values:{default:[1,2,3,4]},index:{default:["2020-01-01","2020-02-01","2020-03-01","2020-04-01"]}},components:{VChart:h.b},provide:Object(r.a)({},h.a,"light"),data:function(){return{option:{tooltip:{trigger:"axis",position:function(t){return[t[0]-100,t[1]-100]},axisPointer:{type:"line",snap:!0,axis:"x"},formatter:function(t){return t=t[0],"<h4>"+Math.round(10*t.value[1])/10+"%</h4>"+t.value[0]}},grid:{left:0,right:0,top:"12px",bottom:"10px"},xAxis:{type:"time",name:"日期",minorTick:{show:!1},minorSplitLine:{show:!1},axisLabel:{inside:!0},inverval:1},yAxis:{type:"value",name:"累積報酬率",axisLabel:{formatter:"{value}%",inside:!0,position:"right"},show:!0,minorTick:{show:!1},minorSplitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},lineStyle:{width:0},position:"right"},series:[{name:"累積報酬",data:[],type:"line",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(232, 56, 115, 0)"},{offset:1,color:"rgba(232, 56, 115, 1)",alpha:1}],global:!1}},itemStyle:{color:"#000",borderColor:"#000",opacity:0},lineStyle:{color:"rgba(232, 56, 115, 0.5)"}}],backgroundColor:"transparent"}}},mounted:function(){var t=this.values,e=[],n=0;for(var i in t)n=Math.max(t[i],n),e.push(t[i]/n);var r=this.index,o=[];for(var l in r)o.push([r[l],100*e[l]-100]);this.option.series[0].data=o}},f=(n(379),n(45)),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-chart",{staticClass:"chart",staticStyle:{"z-index":"0"},attrs:{option:t.option,autoresize:""}})}),[],!1,null,"eeda027e",null);e.default=component.exports},379:function(t,e,n){"use strict";n(334)},380:function(t,e,n){var r=n(46)(!1);r.push([t.i,".chart[data-v-eeda027e]{height:200px;width:100%}",""]),t.exports=r},382:function(t,e,n){"use strict";n.r(e);var r=n(310),o=n(352),l=Object(r.c)({components:{Maxdrawdown:o.default},props:{returns:{default:function(){return{value:[],time:[]}}},drawdown_details:{default:function(){return{}}},dailyMean:{default:0},max_drawdown:{default:0}},data:function(){return{investCapital:20,investPercentage:80}},computed:{simulated_maxdrawdown:function(){var t=parseInt(this.investPercentage)*parseInt(this.investCapital)*this.max_drawdown;return Math.round(t/10)/10},simulated_stock_investment:function(){return Math.round(parseInt(this.investCapital)*parseInt(this.investPercentage)/10)/10},simulated_annual_return:function(){return Math.round(parseInt(this.investPercentage)*parseInt(this.investCapital)*this.dailyMean/10)/10}}}),d=n(45),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"chart-title"},[t._v("下跌幅度")]),t._v(" "),n("Maxdrawdown",{attrs:{values:t.returns.value,index:t.returns.time}}),t._v(" "),n("div",{staticClass:"uk-grid uk-grid-match uk-margin",attrs:{"uk-grid":""}},[n("div",{staticClass:"uk-width-1-2@s"},[n("div",{staticClass:"uk-card uk-card-default uk-padding"},[n("h3",{staticClass:"chart-title"},[t._v("歷史最大風險")]),t._v(" "),n("table",{staticClass:"uk-table uk-table-divider uk-table-striped"},[t._m(0),t._v(" "),n("tbody",t._l(t.drawdown_details,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(r))]),t._v(" "),n("td",[t._v(t._s(Math.round(1e3*e.drawdown)/10)+"%")]),t._v(" "),n("td",[t._v(t._s(e.Length)+" 天")])])})),0)])])]),t._v(" "),n("div",{staticClass:"uk-width-1-2@s"},[n("div",{staticClass:"uk-card uk-card-primary uk-padding"},[n("h3",{staticClass:"chart-title"},[t._v("實際數值模擬")]),t._v(" "),n("div",{staticClass:"uk-grid-match",attrs:{"uk-grid":""}},[n("div",{staticClass:"uk-width-1-2@s"},[n("label",{staticClass:"uk-form-label"},[t._v("總金額(萬)")]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.investCapital,expression:"investCapital"}],staticClass:"uk-text-primary",staticStyle:{"background-color":"transparent",border:"0px","border-bottom":"1px solid white","font-size":"2rem",width:"200px"},attrs:{type:"card-number",id:"quantity",name:"quantity",min:"1"},domProps:{value:t.investCapital},on:{input:function(e){e.target.composing||(t.investCapital=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"uk-form-label uk-margin"},[t._v("\n              股票部位 "+t._s(t.simulated_stock_investment)+"萬\n            ")]),t._v(" "),n("div",{staticClass:"uk-form-controls uk-margin"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.investPercentage,expression:"investPercentage"}],staticStyle:{width:"100%"},attrs:{type:"range",id:"volume",name:"volume",min:"0",max:"100"},domProps:{value:t.investPercentage},on:{__r:function(e){t.investPercentage=e.target.value}}})])]),t._v(" "),n("div",{staticClass:"uk-width-1-2@s uk-child-width-1-2 uk-text-center",attrs:{"uk-grid":""}},[n("div",[n("div",[t._v("模擬年報酬")]),t._v(" "),n("div",{staticClass:"card-number"},[t._v(t._s(t.simulated_annual_return)+" 萬")])]),t._v(" "),n("div",[n("div",[t._v("模擬最大虧損")]),t._v(" "),n("div",{staticClass:"card-number"},[t._v(t._s(t.simulated_maxdrawdown)+" 萬")])])])])])])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("起始時間")]),t._v(" "),n("th",[t._v("虧損程度")]),t._v(" "),n("th",[t._v("時間長度")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Maxdrawdown:n(352).default})}}]);