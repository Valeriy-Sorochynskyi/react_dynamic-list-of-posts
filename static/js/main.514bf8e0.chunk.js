(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),u=n(1),l=n(2),s=n.n(l),m=n(6),i=n(5),p="https://jsonplaceholder.typicode.com/",f=function(e){return fetch(e).then((function(e){return e.json()}))},d=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u="posts",f("".concat(p).concat(u));case 2:return t=e.sent,e.next=5,o="comments",f("".concat(p).concat(o));case 5:return n=e.sent,e.next=8,c="users",f("".concat(p).concat(c));case 8:return a=e.sent,r=t.map((function(e){return Object(m.a)({},e,{user:a.find((function(t){return t.id===e.userId})),comments:n.filter((function(t){return t.postId===e.id}))})})),e.abrupt("return",r);case 11:case"end":return e.stop()}var c,o,u}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){var t=e.user,n=t.name,a=t.email,c=t.address;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Posted by: ".concat(n)),r.a.createElement("p",null,"Email: ".concat(a,".\n         Address: ").concat(c.city," \n         ").concat(c.street," ").concat(c.suite)))},h=function(e){var t=e.comment;return r.a.createElement("li",null,r.a.createElement("p",null,"Comment: ".concat(t.name)),r.a.createElement("p",null,t.body),r.a.createElement("p",null,t.email))},b=function(e){var t=e.comments;return r.a.createElement("ul",{className:"comments-list"},t.map((function(e){return r.a.createElement(h,{key:e.id,comment:e})})))},y=function(e){var t=e.post,n=t.title,a=t.body,c=t.user,o=t.comments;return r.a.createElement("li",{className:"post"},r.a.createElement("h2",null,n),r.a.createElement("p",null,a),r.a.createElement(E,{user:c}),r.a.createElement(b,{comments:o}))},v=function(e){var t=e.posts,n=e.onChange,a=e.inputValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"search"},"Search:",r.a.createElement("input",{id:"search",name:"search",type:"text",value:a,onChange:n,placeholder:"enter search word..."}))),r.a.createElement("ul",{className:"posts-container"},t.map((function(e){return r.a.createElement(y,{key:e.id,post:e})}))))},j=(n(13),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),l=Object(u.a)(o,2),s=l[0],m=l[1],i=Object(a.useState)(""),p=Object(u.a)(i,2),f=p[0],E=p[1],h=Object(a.useMemo)((function(){return n.filter((function(e){return e.title.toLowerCase().includes(f.trim().toLowerCase())||e.body.toLowerCase().includes(f.trim().toLowerCase())}))}),[f,n]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of posts"),n.length?r.a.createElement(v,{posts:h,onChange:function(e){E(e.target.value)},inputValue:f}):r.a.createElement("button",{type:"button",onClick:function(){m(!0),d().then((function(e){c(e),m(!1)}))},disabled:s},s?"Loading...":"Load Posts"))});o.a.render(r.a.createElement(j,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.514bf8e0.chunk.js.map