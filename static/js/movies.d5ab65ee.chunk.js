"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{741:function(n,e,t){var r=t(6871),a=t(501),u=t(184);e.Z=function(n){var e=n.data;return(0,u.jsxs)("ul",{children:[e.map((function(n){var e=n.title,t=n.id;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(t),children:e})},t)})),(0,u.jsx)(r.j3,{})]})}},771:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(885),a=t(2791),u=t(501),c=t(184),i=function(n){var e=n.handleSubmit;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("form",{onSubmit:e,children:[(0,c.jsx)("input",{type:"text",name:"query",placeholder:"Search movies"}),(0,c.jsx)("button",{type:"submit",children:"Search"})]})})},o=t(4390),s=t(741),p=function(){var n=(0,u.lr)(),e=(0,r.Z)(n,2),t=e[0],p=e[1],f=(0,a.useState)([]),l=(0,r.Z)(f,2),v=l[0],d=l[1],h=t.get("query")||"";return(0,a.useEffect)((function(){h&&(0,o.bI)(h).then((function(n){var e=n.results;return d(e)}))}),[h]),(0,c.jsxs)("div",{children:[(0,c.jsx)(i,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.query.value;""!==e.trim()&&p({query:e})}}),(0,c.jsx)(s.Z,{data:v})]})}},4390:function(n,e,t){t.d(e,{GW:function(){return f},Me:function(){return l},SU:function(){return s},bI:function(){return p},np:function(){return v}});var r=t(5861),a=t(7757),u=t.n(a),c=t(4569),i=t.n(c);i().defaults.baseURL="https://api.themoviedb.org/3";var o="ad1bc7edbb361d4c2586895572eb3a0c",s=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("/trending/movie/day?api_key=".concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("search/movie?api_key=".concat(o,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=movies.d5ab65ee.chunk.js.map