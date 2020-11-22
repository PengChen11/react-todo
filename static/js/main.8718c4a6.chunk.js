(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{70:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(0),r=n.n(a),s=n(16),i=n.n(s),l=n(13),o=n(10),u=n.n(o),j=n(18),d=n(12),h=n(74),b=n(78),p=n(79),m=n(21);function f(e){var t=function(e){var t=Object(a.useState)({difficulty:1}),n=Object(d.a)(t,2),c=n[0],r=n[1];return[function(t){t.preventDefault(),t.target.reset(),e&&e(c),r({difficulty:1})},function(e){e.persist(),r(Object(l.a)(Object(l.a)({},c),{},Object(m.a)({},e.target.name,e.target.value)))},c]}(e.handleSubmit),n=Object(d.a)(t,2),r=n[0],s=n[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(h.a,{onSubmit:r,children:Object(c.jsx)(b.a,{children:Object(c.jsxs)(b.a.Body,{children:[Object(c.jsx)(b.a.Title,{children:"Add To Do Item"}),Object(c.jsxs)(h.a.Group,{controlId:"item",children:[Object(c.jsx)(h.a.Label,{children:"To Do Item"}),Object(c.jsx)(h.a.Control,{name:"item",type:"text",placeholder:"Item Details",onChange:s})]}),Object(c.jsxs)(h.a.Group,{controlId:"assignee",children:[Object(c.jsx)(h.a.Label,{children:"Assigned To"}),Object(c.jsx)(h.a.Control,{name:"assignee",type:"text",placeholder:"Assignee Name",onChange:s})]}),Object(c.jsxs)(h.a.Group,{controlId:"difficulty",children:[Object(c.jsx)(h.a.Label,{children:"Difficulty Rating"}),Object(c.jsx)(h.a.Control,{defaultValue:"1",type:"range",min:"1",max:"5",name:"difficulty",placeholder:"Assignee Name",onChange:s})]}),Object(c.jsx)(p.a,{variant:"primary",type:"submit",children:"Add Item"})]})})})})}var O=n(76),x=n(75),g=n(26);function v(e){return Object(c.jsx)(O.a,{children:Object(c.jsxs)(g.b,{condition:e.error,children:[Object(c.jsx)(g.c,{children:Object(c.jsx)(O.a.Item,{className:"bg-danger",children:Object(c.jsx)("h2",{children:e.error})})}),Object(c.jsx)(g.a,{children:e.list.map((function(t){return Object(c.jsx)(O.a.Item,{children:Object(c.jsxs)(x.a,{onClose:function(){return e.handleDelete(t._id)},style:{width:"100%",maxWidth:"100%"},children:[Object(c.jsxs)(x.a.Header,{children:[Object(c.jsx)("strong",{className:"".concat(t.complete?"bg-success":"bg-danger"," rounded mr-2 text-white p-1"),onClick:function(){return e.handleComplete(t._id)},children:t.complete?"Completed":"Pending"}),Object(c.jsx)("span",{className:"ml-auto mr-auto h6",children:t.assignee})]}),Object(c.jsxs)(x.a.Body,{children:[Object(c.jsx)("span",{className:"mr-auto h5",children:t.item}),Object(c.jsx)("small",{className:"float-right",children:"Difficulty: ".concat(t.difficulty)})]})]})},t._id)}))})]})})}var y=n(77);function k(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(y.a,{bg:"primary",variant:"dark",children:Object(c.jsx)(y.a.Brand,{href:"#home",children:"Home"})})})}var w=n(72),C=n(73),N=n(39),D=(n(52),"https://peng-authenticated-api-server.herokuapp.com/api/todo"),I=n(19),S=n.n(I);function T(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),i=Object(d.a)(s,2),o=i[0],h=i[1],b=Object(a.useState)(null),p=Object(d.a)(b,2),m=p[0],O=p[1];function x(){return(x=Object(j.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"post",url:D,data:Object(l.a)(Object(l.a)({},t),{},{complete:!1})},e.prev=1,e.next=4,S()(c);case 4:r(!n),O(null),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),O(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function g(){return(g=Object(j.a)(u.a.mark((function e(t){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.filter((function(e){return e._id===t}))[0]||{},a={method:"put",url:"".concat(D,"/").concat(t),data:Object(l.a)(Object(l.a)({},c),{},{complete:!c.complete})},e.prev=2,e.next=5,S()(a);case 5:r(!n),O(null),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),O(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function y(){return(y=Object(j.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"delete",url:"".concat(D,"/").concat(t)},e.prev=1,e.next=4,S()(c);case 4:r(!n),O(null),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),O(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"get",url:D},e.prev=1,e.next=4,S()(t);case 4:n=e.sent,c=n.data,h(c),O(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),O(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),console.log("list",o),Object(a.useEffect)((function(){document.title="To Do List: ".concat(o.filter((function(e){return!e.complete})).length)})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{}),Object(c.jsxs)(w.a,{className:"p-3",children:[Object(c.jsxs)("h2",{className:"text-white bg-dark mt-3 p-3",children:["To Do List Manager (",o.filter((function(e){return!e.complete})).length,")"]}),Object(c.jsxs)(C.a,{className:"font-weight-bold",children:[Object(c.jsx)(N.a,{lg:4,md:6,sm:12,className:"p-3",children:Object(c.jsx)(f,{handleSubmit:function(e){return x.apply(this,arguments)}})}),Object(c.jsx)(N.a,{lg:8,md:6,sm:12,className:"p-3",children:Object(c.jsx)(v,{list:o,handleComplete:function(e){return g.apply(this,arguments)},handleDelete:function(e){return y.apply(this,arguments)},error:m})})]})]})]})}var F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root")),F()}},[[70,1,2]]]);
//# sourceMappingURL=main.8718c4a6.chunk.js.map