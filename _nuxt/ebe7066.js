(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{420:function(t,e,n){var r=n(39),o=n(220);t.exports=r?o:function(t){return Set.prototype.values.call(t)}},506:function(t,e,n){var r=n(87),o=n(17),c=n(20),f=n(26).f,l=n(109),d=n(559),v=l("meta"),h=0,S=Object.isExtensible||function(){return!0},x=function(t){f(t,v,{value:{objectID:"O"+ ++h,weakData:{}}})},meta=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!c(t,v)){if(!S(t))return"F";if(!e)return"E";x(t)}return t[v].objectID},getWeakData:function(t,e){if(!c(t,v)){if(!S(t))return!0;if(!e)return!1;x(t)}return t[v].weakData},onFreeze:function(t){return d&&meta.REQUIRED&&S(t)&&!c(t,v)&&x(t),t}};r[v]=!0},507:function(t,e,n){var content=n(580);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("709c544e",content,!0,{sourceMap:!1})},557:function(t,e,n){"use strict";var r=n(558),o=n(560);t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},558:function(t,e,n){"use strict";var r=n(6),o=n(8),c=n(110),f=n(27),l=n(506),d=n(218),v=n(108),h=n(17),S=n(10),x=n(146),E=n(65),R=n(223);t.exports=function(t,e,n){var y=-1!==t.indexOf("Map"),w=-1!==t.indexOf("Weak"),T=y?"set":"add",I=o[t],m=I&&I.prototype,O=I,_={},k=function(t){var e=m[t];f(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(w&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return w&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(w&&!h(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(c(t,"function"!=typeof I||!(w||m.forEach&&!S((function(){(new I).entries().next()})))))O=n.getConstructor(e,t,y,T),l.REQUIRED=!0;else if(c(t,!0)){var D=new O,A=D[T](w?{}:-0,1)!=D,z=S((function(){D.has(1)})),j=x((function(t){new I(t)})),U=!w&&S((function(){for(var t=new I,e=5;e--;)t[T](e,e);return!t.has(-0)}));j||((O=e((function(e,n){v(e,O,t);var r=R(new I,e,O);return null!=n&&d(n,r[T],{that:r,AS_ENTRIES:y}),r}))).prototype=m,m.constructor=O),(z||U)&&(k("delete"),k("has"),y&&k("get")),(U||A)&&k(T),w&&m.clear&&delete m.clear}return _[t]=O,r({global:!0,forced:O!=I},_),E(O,t),w||n.setStrong(O,t,y),O}},559:function(t,e,n){var r=n(10);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},560:function(t,e,n){"use strict";var r=n(26).f,o=n(88),c=n(148),f=n(72),l=n(108),d=n(218),v=n(147),h=n(149),S=n(18),x=n(506).fastKey,E=n(52),R=E.set,y=E.getterFor;t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){l(t,h,e),R(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),S||(t.size=0),null!=r&&d(r,t[v],{that:t,AS_ENTRIES:n})})),E=y(e),w=function(t,e,n){var r,o,c=E(t),f=T(t,e);return f?f.value=n:(c.last=f={index:o=x(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=f),r&&(r.next=f),S?c.size++:t.size++,"F"!==o&&(c.index[o]=f)),t},T=function(t,e){var n,r=E(t),o=x(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(h.prototype,{clear:function(){for(var t=E(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,S?t.size=0:this.size=0},delete:function(t){var e=this,n=E(e),r=T(e,t);if(r){var o=r.next,c=r.previous;delete n.index[r.index],r.removed=!0,c&&(c.next=o),o&&(o.previous=c),n.first==r&&(n.first=o),n.last==r&&(n.last=c),S?n.size--:e.size--}return!!r},forEach:function(t){for(var e,n=E(this),r=f(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!T(this,t)}}),c(h.prototype,n?{get:function(t){var e=T(this,t);return e&&e.value},set:function(t,e){return w(this,0===t?0:t,e)}}:{add:function(t){return w(this,t=0===t?0:t,t)}}),S&&r(h.prototype,"size",{get:function(){return E(this).size}}),h},setStrong:function(t,e,n){var r=e+" Iterator",o=y(e),c=y(r);v(t,e,(function(t,e){R(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),h(e)}}},561:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(562);r({target:"Set",proto:!0,real:!0,forced:o},{addAll:function(){return c.apply(this,arguments)}})},562:function(t,e,n){"use strict";var r=n(13),o=n(81);t.exports=function(){for(var t=r(this),e=o(t.add),n=0,c=arguments.length;n<c;n++)e.call(t,arguments[n]);return t}},563:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(564);r({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},564:function(t,e,n){"use strict";var r=n(13),o=n(81);t.exports=function(){for(var t,e=r(this),n=o(e.delete),c=!0,f=0,l=arguments.length;f<l;f++)t=n.call(e,arguments[f]),c=c&&t;return!!c}},565:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(49),f=n(13),l=n(81),d=n(106),v=n(218);r({target:"Set",proto:!0,real:!0,forced:o},{difference:function(t){var e=f(this),n=new(d(e,c("Set")))(e),r=l(n.delete);return v(t,(function(t){r.call(n,t)})),n}})},566:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(13),f=n(72),l=n(420),d=n(218);r({target:"Set",proto:!0,real:!0,forced:o},{every:function(t){var e=c(this),n=l(e),r=f(t,arguments.length>1?arguments[1]:void 0,3);return!d(n,(function(t,n){if(!r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},567:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(49),f=n(13),l=n(81),d=n(72),v=n(106),h=n(420),S=n(218);r({target:"Set",proto:!0,real:!0,forced:o},{filter:function(t){var e=f(this),n=h(e),r=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(v(e,c("Set"))),x=l(o.add);return S(n,(function(t){r(t,t,e)&&x.call(o,t)}),{IS_ITERATOR:!0}),o}})},568:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(13),f=n(72),l=n(420),d=n(218);r({target:"Set",proto:!0,real:!0,forced:o},{find:function(t){var e=c(this),n=l(e),r=f(t,arguments.length>1?arguments[1]:void 0,3);return d(n,(function(t,n){if(r(t,t,e))return n(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},569:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(49),f=n(13),l=n(81),d=n(106),v=n(218);r({target:"Set",proto:!0,real:!0,forced:o},{intersection:function(t){var e=f(this),n=new(d(e,c("Set"))),r=l(e.has),o=l(n.add);return v(t,(function(t){r.call(e,t)&&o.call(n,t)})),n}})},570:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(13),f=n(81),l=n(218);r({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function(t){var e=c(this),n=f(e.has);return!l(t,(function(t,r){if(!0===n.call(e,t))return r()}),{INTERRUPTED:!0}).stopped}})},571:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(49),f=n(13),l=n(81),d=n(220),v=n(218);r({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function(t){var e=d(this),n=f(t),r=n.has;return"function"!=typeof r&&(n=new(c("Set"))(t),r=l(n.has)),!v(e,(function(t,e){if(!1===r.call(n,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},572:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(13),f=n(81),l=n(218);r({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function(t){var e=c(this),n=f(e.has);return!l(t,(function(t,r){if(!1===n.call(e,t))return r()}),{INTERRUPTED:!0}).stopped}})},573:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(13),f=n(420),l=n(218);r({target:"Set",proto:!0,real:!0,forced:o},{join:function(t){var e=c(this),n=f(e),r=void 0===t?",":String(t),o=[];return l(n,o.push,{that:o,IS_ITERATOR:!0}),o.join(r)}})},574:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(49),f=n(13),l=n(81),d=n(72),v=n(106),h=n(420),S=n(218);r({target:"Set",proto:!0,real:!0,forced:o},{map:function(t){var e=f(this),n=h(e),r=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(v(e,c("Set"))),x=l(o.add);return S(n,(function(t){x.call(o,r(t,t,e))}),{IS_ITERATOR:!0}),o}})},575:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(13),f=n(81),l=n(420),d=n(218);r({target:"Set",proto:!0,real:!0,forced:o},{reduce:function(t){var e=c(this),n=l(e),r=arguments.length<2,o=r?void 0:arguments[1];if(f(t),d(n,(function(n){r?(r=!1,o=n):o=t(o,n,n,e)}),{IS_ITERATOR:!0}),r)throw TypeError("Reduce of empty set with no initial value");return o}})},576:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(13),f=n(72),l=n(420),d=n(218);r({target:"Set",proto:!0,real:!0,forced:o},{some:function(t){var e=c(this),n=l(e),r=f(t,arguments.length>1?arguments[1]:void 0,3);return d(n,(function(t,n){if(r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},577:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(49),f=n(13),l=n(81),d=n(106),v=n(218);r({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function(t){var e=f(this),n=new(d(e,c("Set")))(e),r=l(n.delete),o=l(n.add);return v(t,(function(t){r.call(n,t)||o.call(n,t)})),n}})},578:function(t,e,n){"use strict";var r=n(6),o=n(39),c=n(49),f=n(13),l=n(81),d=n(106),v=n(218);r({target:"Set",proto:!0,real:!0,forced:o},{union:function(t){var e=f(this),n=new(d(e,c("Set")))(e);return v(t,l(n.add),{that:n}),n}})},579:function(t,e,n){"use strict";n(507)},580:function(t,e,n){var r=n(46)(!1);r.push([t.i,".grid[data-v-1916153e]{border:1px solid grey;display:grid}.grid-cell[data-v-1916153e]{min-height:60px}.grid-cell[data-v-1916153e],.node[data-v-1916153e]{border:1px solid #aaa}.node[data-v-1916153e]{position:relative;max-width:100px;top:calc(100% - 30px);left:calc(100% - 50px);padding:20px}",""]),t.exports=r},614:function(t,e,n){"use strict";n.r(e);n(14),n(557),n(25),n(561),n(563),n(565),n(566),n(567),n(568),n(569),n(570),n(571),n(572),n(573),n(574),n(575),n(576),n(577),n(578),n(31);var r=n(310),o=Object(r.c)({data:function(){return{nodes:[{position:[0,1],name:"test1"},{position:[1,1],name:"test1"},{position:[2,1],name:"test2"},{position:[3,2],name:"test3"},{position:[2,2],name:"test4"}],edges:[[0,1],[1,2],[2,3],[1,4]]}},computed:{ncolumns:function(){var t=0;for(var i in this.nodes)t=Math.max(this.nodes[i].position[1]);return t+=2},nrows:function(){var t=0;for(var i in this.nodes)t=Math.max(this.nodes[i].position[0]);return t+=3},rowStyle:function(){return{display:"grid","grid-template-columns":"repeat(".concat(this.ncolumns,", 1fr)")}},showCell:function(){var t=new Set;for(var i in this.nodes){var e=this.nodes[i].position[0],col=this.nodes[i].position[1];t.add(1e3*(2*e+1)+col)}return t},showEdge:function(){var t=new Set;for(var i in this.edges){var e=this.nodes[i].position[0],col=this.nodes[i].position[1];t.add(1e3*(2*e-1)+col)}return t}}}),c=(n(579),n(45)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"canvas"}},[n("div",t._l(2*t.nrows,(function(i){return n("div",{key:i,style:t.rowStyle},t._l(t.ncolumns,(function(e){return n("div",{key:e,staticClass:"grid-cell"},[t.showCell.has(1e3*i+e)?n("div",{staticClass:"node"},[t._v("Hello")]):t._e()])})),0)})),0)])}),[],!1,null,"1916153e",null);e.default=component.exports}}]);