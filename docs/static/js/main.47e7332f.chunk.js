(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(8),a=n.n(c),i=n(5),s=n(2),u=n(0),o=function(t){var e=t.ponCategories,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(t){a.trim().length>2&&(e((function(t){return[a].concat(Object(i.a)(t))})),o("")),t.preventDefault()},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(7),b=n.n(d),l=n(9),p=function(){var t=Object(l.a)(b.a.mark((function t(e){var n,r,c,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=x945rQOr6YW6ojeEKzs9RrxyqGJHGyfq&q=".concat(encodeURI(e),"&limit=3"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.id,n=t.title,r=t.url;return console.log(e,n,r),Object(u.jsxs)("div",{className:"card animate__animated animate__bounce animate__delay-2s",children:[Object(u.jsx)("img",{src:r,alt:n}),Object(u.jsx)("p",{children:n})]})},O=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){p(t).then((function(t){a({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),a&&Object(u.jsx)("p",{children:"Loading.."}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(u.jsx)(f,Object(j.a)({},t),t.id)}))})]})},x=function(){var t=Object(r.useState)(["Ranma"]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{ponCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("button",{onClick:function(){c(["HunterXHunter"].concat(Object(i.a)(n)))},children:"Agregar"}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{category:t},t)}))})]})};n(17);a.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.47e7332f.chunk.js.map