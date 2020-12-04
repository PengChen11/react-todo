(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{192:function(e,t){},194:function(e,t){},208:function(e,t){},210:function(e,t){},238:function(e,t){},240:function(e,t){},241:function(e,t){},246:function(e,t){},248:function(e,t){},267:function(e,t){},279:function(e,t){},282:function(e,t){},303:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(29),i=n.n(s),o=n(311),l=n(30),u=n(13),j=n(9),d=n(15),b=n(305),h=n(310),O=n(16),p=n.n(O),m=n(26),x=n(32),f=n.n(x),g=n(97),v=n.n(g),y=n(164),w=n.n(y),C=r.a.createContext();var k=function(e){var t=Object(c.useState)(!1),n=Object(j.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)({}),o=Object(j.a)(i,2),l=o[0],d=o[1],b=Object(c.useState)(!1),h=Object(j.a)(b,2),O=h[0],x=h[1],g=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),n={method:"post",url:"https://peng-authenticated-api-server.herokuapp.com/users/signin",auth:{username:t.username,password:t.password}},e.prev=2,e.next=5,f()(n);case 5:a=e.sent,c=a.data.token,S(c),x(!1),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(2),console.warn("Login Attempt Failed"),k(),window.alert("login failed. Please try again"),x(!1);case 17:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),n={method:"post",url:"https://peng-authenticated-api-server.herokuapp.com/users/signup",data:t},e.prev=2,e.next=5,f()(n);case 5:a=e.sent,c=a.data.token,S(c),x(!1),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(2),console.warn("Register Attempt Failed"),k(),window.alert("Register process failed. Please try again"),x(!1);case 17:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){s(!1),d({})},S=Object(c.useCallback)((function(e){try{var t=w.a.verify(e,"wocaowocao");s(!0),d(Object(u.a)(Object(u.a)({},t),{},{token:e})),v.a.save("auth",e)}catch(n){k(),console.warn("user token error"),window.alert("Something is wrong with user authentication. Please try to login again")}}),[]);return Object(c.useEffect)((function(){var e=v.a.load("auth")||null;e&&S(e)}),[S]),Object(a.jsx)(C.Provider,{value:{isLoggedIn:r,authenticatedUser:l,login:g,logout:k,signup:y,isLoading:O},children:e.children})},S=n(309);function N(e){var t=Object(c.useState)({}),n=Object(j.a)(t,2),a=n[0],r=n[1];function s(t){t.preventDefault(),t.target.reset(),e&&e(a),r({})}function i(e){e.persist(),"maxNum"!==e.target.name&&"difficulty"!==e.target.name?"showCompleted"!==e.target.name?r(Object(u.a)(Object(u.a)({},a),{},Object(l.a)({},e.target.name,e.target.value))):r(Object(u.a)(Object(u.a)({},a),{},Object(l.a)({},e.target.name,"yes"===e.target.value))):r(Object(u.a)(Object(u.a)({},a),{},Object(l.a)({},e.target.name,Number(e.target.value))))}return[s,i,a]}function I(e){var t=N((function(t){i.signup(t),e.handleClose()})),n=Object(j.a)(t,2),r=n[0],s=n[1],i=Object(c.useContext)(C);return Object(a.jsxs)(S.a,{show:e.show,onHide:e.handleClose,onSubmit:r,children:[Object(a.jsx)(S.a.Header,{closeButton:!0,children:Object(a.jsx)(S.a.Title,{children:"Welcome to To Do Manager! "})}),Object(a.jsxs)(S.a.Body,{children:[Object(a.jsx)("p",{children:"Please input the following info to register as new user."}),Object(a.jsxs)(h.a,{className:"font-weight-bold",children:[Object(a.jsxs)(h.a.Group,{controlId:"username",children:[Object(a.jsx)(h.a.Label,{className:"mr-3",children:"Username"}),Object(a.jsx)(h.a.Control,{required:!0,name:"username",onChange:s})]}),Object(a.jsxs)(h.a.Group,{controlId:"password",children:[Object(a.jsx)(h.a.Label,{children:"Password"}),Object(a.jsx)(h.a.Control,{required:!0,name:"password",type:"password",onChange:s})]}),Object(a.jsxs)(h.a.Group,{controlId:"email",children:[Object(a.jsx)(h.a.Label,{children:"Email"}),Object(a.jsx)(h.a.Control,{required:!0,name:"email",type:"email",onChange:s})]}),Object(a.jsxs)(h.a.Group,{controlId:"role",children:[Object(a.jsx)(h.a.Label,{className:"mr-3",children:"What's your role?"}),Object(a.jsxs)(h.a.Control,{required:!0,name:"role",as:"select",onChange:s,children:[Object(a.jsx)("option",{value:"",children:"..."}),Object(a.jsx)("option",{value:"user",children:"User"}),Object(a.jsx)("option",{value:"editor",children:"Editor"}),Object(a.jsx)("option",{value:"admin",children:"Admin"})]})]}),Object(a.jsx)(b.a,{variant:"primary",type:"submit",className:"float-right",children:"Register!"}),Object(a.jsx)(b.a,{variant:"secondary",onClick:e.handleClose,children:"Cancel"})]})]})]})}function L(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(j.a)(s,2),o=i[0],O=i[1],p=Object(c.useContext)(C),m=function(e){r(Object(u.a)(Object(u.a)({},n),{},Object(l.a)({},e.target.name,e.target.value)))},x=function(){O(!o)};return Object(a.jsxs)(d.b,{condition:p.isLoggedIn,children:[Object(a.jsxs)(d.c,{children:[Object(a.jsx)("h4",{children:p.authenticatedUser?"Welcome Back, ".concat(p.authenticatedUser.username):"hi"}),Object(a.jsx)(b.a,{variant:"dark",onClick:p.logout,children:"Sign Out"})]}),Object(a.jsxs)(d.a,{children:[Object(a.jsxs)(h.a,{inline:!0,onSubmit:function(e){e.preventDefault(),p.login(n),e.target.reset()},children:[Object(a.jsx)(h.a.Control,{required:!0,name:"username",type:"text",placeholder:"username",onChange:m,className:"m-3"}),Object(a.jsx)(h.a.Control,{required:!0,name:"password",type:"password",placeholder:"password",onChange:m,className:"m-3"}),Object(a.jsx)(b.a,{variant:"dark",type:"submit",className:"m-3",children:"Sign In"}),Object(a.jsx)(b.a,{variant:"dark",className:"m-3",onClick:x,children:"Sign up"})]}),Object(a.jsx)(I,{show:o,handleClose:x})]})]})}var D=n(70),B=n.n(D);function A(){var e=Object(c.useContext)(C).isLoading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(o.a,{bg:"primary",variant:"dark",className:"justify-content-between",children:[Object(a.jsx)(o.a.Brand,{href:"#home",className:"d-inline",children:"Home"}),Object(a.jsx)(L,{})]}),Object(a.jsx)(d.d,{condition:e,children:Object(a.jsx)(B.a,{type:"bars",color:"grey",width:150,className:"m-auto"})})]})}var T=n(98),q=n(313);function G(e){var t=N(e.handleSubmit),n=Object(j.a)(t,3),r=n[0],s=n[1],i=n[2],o=Object(c.useState)({disabled:!0}),l=Object(j.a)(o,2),u=l[0],d=l[1];return Object(c.useEffect)((function(){i.item&&i.assignee?d({disabled:!1}):d({disabled:!0})}),[i]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(h.a,{onSubmit:r,children:Object(a.jsx)(q.a,{children:Object(a.jsxs)(q.a.Body,{children:[Object(a.jsx)(q.a.Title,{children:"Add To Do Item"}),Object(a.jsxs)(h.a.Group,{controlId:"item",children:[Object(a.jsx)(h.a.Label,{children:"To Do Item"}),Object(a.jsx)(h.a.Control,{required:!0,autoComplete:"off",name:"item",type:"text",placeholder:"Item Details",onChange:s})]}),Object(a.jsxs)(h.a.Group,{controlId:"assignee",children:[Object(a.jsx)(h.a.Label,{children:"Assigned To"}),Object(a.jsx)(h.a.Control,{required:!0,autoComplete:"off",name:"assignee",type:"text",placeholder:"Assignee Name",onChange:s})]}),Object(a.jsxs)(h.a.Group,{controlId:"difficulty",children:[Object(a.jsx)(h.a.Label,{children:"Difficulty Rating"}),Object(a.jsx)(h.a.Control,{required:!0,defaultValue:"1",type:"range",min:"1",max:"5",name:"difficulty",placeholder:"Assignee Name",onChange:s})]}),Object(a.jsx)(b.a,{variant:"primary",type:"submit",disabled:u.disabled,children:"Add Item"})]})})})})}var F=n(306),P=n(312),E=n(314),H=r.a.createContext();var U=function(e){var t;try{t=JSON.parse(localStorage.getItem("ToDoManagerSettingsData"))}catch(o){localStorage.removeItem("ToDoManagerSettingsData"),console.warn("Local settings data corrupted")}var n=Object(c.useState)(t||{showCompleted:!1,maxNum:5,sort:"difficulty",sortOrder:"ascending"}),r=Object(j.a)(n,2),s=r[0],i=r[1];return Object(a.jsx)(H.Provider,{value:{settings:s,setSettings:i},children:e.children})};function M(e){var t=Object(c.useContext)(H).settings,n=t.showCompleted,r=t.maxNum,s=t.sort,i=t.sortOrder,o=Object(c.useState)(0),l=Object(j.a)(o,2),u=l[0],b=l[1],h=e.list.filter((function(e){return!!n||!e.complete})),O=r*u||0,p=O+r||h.length,m=new Array(Math.ceil(h.length/r)).fill(""),x=h?h.slice(O,p):[];x.sort(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ascending";return function(n,a){if(!n[e]||!a[e])return 0;var c="string"===typeof n[e]?n[e].toLowerCase():n[e],r="string"===typeof a[e]?a[e].toLowerCase():a[e],s=0;return c>r?s=1:c<r&&(s=-1),"descending"===t?-1*s:s}}(s,i));var f=Object(c.useContext)(C).authenticatedUser;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(d.b,{condition:e.error,children:[Object(a.jsx)(d.c,{children:Object(a.jsx)(F.a,{className:"bg-danger",children:Object(a.jsx)("h2",{children:e.error})})}),Object(a.jsxs)(d.a,{children:[x.map((function(t){return Object(a.jsxs)(P.a,{onClose:function(){return e.handleDelete(t._id)},style:{width:"100%",maxWidth:"100%"},children:[Object(a.jsxs)(P.a.Header,{closeButton:f.capabilities.includes("delete"),children:[Object(a.jsx)("strong",{className:"".concat(t.complete?"bg-success":"bg-danger"," rounded mr-2 text-white p-1"),onClick:f.capabilities.includes("update")?function(){return e.handleComplete(t._id)}:null,children:t.complete?"Completed":"Pending"}),Object(a.jsx)("span",{className:"ml-auto mr-auto h6",children:t.assignee})]}),Object(a.jsxs)(P.a.Body,{children:[Object(a.jsx)("span",{className:"mr-auto h5",children:t.item}),Object(a.jsx)("small",{className:"float-right",children:"Difficulty: ".concat(t.difficulty)})]})]},t._id)})),Object(a.jsx)(E.a,{children:m.map((function(e,t){return Object(a.jsx)(E.a.Item,{active:t===u,onClick:function(){return b(t)},children:t+1},t+1)}))})]})]})})}var z=n(307),_=n(308),J=n(165);var R=function(e){var t=N((function(t){i.setSettings(t),localStorage.setItem("ToDoManagerSettingsData",JSON.stringify(t)),e.handleClose()})),n=Object(j.a)(t,2),r=n[0],s=n[1],i=Object(c.useContext)(H);return Object(a.jsxs)(S.a,{show:e.show,onHide:e.handleClose,onSubmit:r,children:[Object(a.jsx)(S.a.Header,{closeButton:!0,children:Object(a.jsx)(S.a.Title,{children:"Settings"})}),Object(a.jsx)(S.a.Body,{children:Object(a.jsxs)(h.a,{className:"font-weight-bold",children:[Object(a.jsxs)(h.a.Group,{controlId:"showCompleted",children:[Object(a.jsx)(h.a.Label,{className:"mr-3",children:"Show completed items?"}),Object(a.jsxs)(h.a.Control,{required:!0,name:"showCompleted",as:"select",onChange:s,children:[Object(a.jsx)("option",{value:"",children:"..."}),Object(a.jsx)("option",{value:"no",children:"No"}),Object(a.jsx)("option",{value:"yes",children:"Yes"})]})]}),Object(a.jsxs)(h.a.Group,{controlId:"maxNum",children:[Object(a.jsx)(h.a.Label,{children:"How many items do you want to display per page?"}),Object(a.jsxs)(h.a.Control,{required:!0,as:"select",name:"maxNum",type:"text",onChange:s,children:[Object(a.jsx)("option",{value:"",children:"..."}),Object(a.jsx)("option",{value:"5",children:"5 items"}),Object(a.jsx)("option",{value:"6",children:"6 items"}),Object(a.jsx)("option",{value:"7",children:"7 items"}),Object(a.jsx)("option",{value:"8",children:"8 items"}),Object(a.jsx)("option",{value:"9",children:"9 items"}),Object(a.jsx)("option",{value:"10",children:"10 items"})]})]}),Object(a.jsxs)(h.a.Group,{controlId:"sort",children:[Object(a.jsx)(h.a.Label,{children:"How do you want to sort your to do items?"}),Object(a.jsxs)(h.a.Control,{required:!0,as:"select",name:"sort",type:"text",onChange:s,children:[Object(a.jsx)("option",{value:"",children:"..."}),Object(a.jsx)("option",{value:"difficulty",children:"By difficulty ratings"}),Object(a.jsx)("option",{value:"item",children:"By item info"}),Object(a.jsx)("option",{value:"assignee",children:"By assignee name"})]})]}),Object(a.jsxs)(h.a.Group,{controlId:"sortOrder",children:[Object(a.jsx)(h.a.Label,{className:"mr-3",children:"Sorting order?"}),Object(a.jsxs)(h.a.Control,{required:!0,name:"sortOrder",as:"select",onChange:s,children:[Object(a.jsx)("option",{value:"",children:"..."}),Object(a.jsx)("option",{value:"ascending",children:"Ascending"}),Object(a.jsx)("option",{value:"descending",children:"Descending"})]})]}),Object(a.jsx)(b.a,{variant:"primary",type:"submit",className:"float-right",children:"Save Changes"}),Object(a.jsx)(b.a,{variant:"secondary",onClick:e.handleClose,children:"Cancel"})]})})]})};function W(e){var t=Object(c.useContext)(C),n=t.authenticatedUser,r=t.isLoggedIn,s=!1;try{if(0!==Object.keys(n).length){var i=!e.capability||n.capabilities.includes(e.capability);s=r&&i}}catch(o){console.warn("Not Authorized")}return Object(a.jsx)(d.d,{condition:s,children:e.children})}function V(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),i=Object(j.a)(s,2),o=i[0],l=i[1],h=Object(c.useState)(!1),O=Object(j.a)(h,2),x=O[0],g=O[1],v=Object(c.useContext)(C).authenticatedUser,y=Object(c.useState)(!1),w=Object(j.a)(y,2),k=w[0],S=w[1],N="https://peng-authenticated-api-server.herokuapp.com/api/todo";function I(){return(I=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n={method:"post",url:N,data:Object(u.a)(Object(u.a)({},t),{},{complete:!1}),headers:{Authorization:"Bearer ".concat(v.token)}}).data.difficulty||(n.data.difficulty=1),e.prev=2,e.next=5,f()(n);case 5:return e.next=7,A();case 7:l(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),l(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function L(){return(L=Object(m.a)(p.a.mark((function e(t){var a,c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=function(){a.complete=!a.complete;var e=Object(T.a)(n);r(e)},a=n.filter((function(e){return e._id===t}))[0]||{},c={method:"put",url:"".concat(N,"/").concat(t),data:Object(u.a)(Object(u.a)({},a),{},{complete:!a.complete}),headers:{Authorization:"Bearer ".concat(v.token)}},e.prev=3,e.next=6,f()(c);case 6:s(),l(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),l(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function D(){return(D=Object(m.a)(p.a.mark((function e(t){var a,c,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(){n.splice(c,1);var e=Object(T.a)(n);r(e)},a=n.filter((function(e){return e._id===t}))[0]||{},c=n.indexOf(a),s={method:"delete",url:"".concat(N,"/").concat(t),headers:{Authorization:"Bearer ".concat(v.token)}},e.prev=4,e.next=7,f()(s);case 7:i(),l(null),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),l(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}var A=Object(c.useCallback)(Object(m.a)(p.a.mark((function e(){var t,n,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),t="user"===v.role?N+"/assignee/".concat(v.username):N,n={method:"get",url:t,headers:{Authorization:"Bearer ".concat(v.token)}},e.prev=3,e.next=6,f()(n);case 6:a=e.sent,c=a.data,r(c),l(null),S(!1),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(3),l(e.t0.message),S(!1),console.warn("Error hit when fetching the lists");case 18:case"end":return e.stop()}}),e,null,[[3,13]])}))),[v,N]);function q(){g(!x)}return Object(c.useEffect)((function(){(function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===Object.keys(v).length){e.next=3;break}return e.next=3,A();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[A,v]),Object(c.useEffect)((function(){document.title="To Do List: ".concat(n.filter((function(e){return!e.complete})).length)})),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(z.a,{className:"p-3",children:[Object(a.jsxs)("h2",{className:"text-white bg-dark mt-3 p-3",children:["To Do List Manager (",n.filter((function(e){return!e.complete})).length,")",Object(a.jsx)(b.a,{className:"float-right",variant:"primary",onClick:q,children:"Settings"})]}),Object(a.jsx)(R,{show:x,handleClose:q}),Object(a.jsxs)(_.a,{className:"font-weight-bold",children:[Object(a.jsx)(W,{capability:"create",children:Object(a.jsx)(J.a,{lg:4,md:6,sm:12,className:"p-3",children:Object(a.jsx)(G,{handleSubmit:function(e){return I.apply(this,arguments)}})})}),Object(a.jsx)(J.a,{className:"p-3",children:Object(a.jsxs)(d.b,{condition:k,children:[Object(a.jsx)(d.c,{children:Object(a.jsx)(B.a,{type:"bars",color:"grey",width:150,className:"m-auto"})}),Object(a.jsx)(d.a,{children:Object(a.jsx)(M,{list:n,handleComplete:function(e){return L.apply(this,arguments)},handleDelete:function(e){return D.apply(this,arguments)},error:o})})]})})]})]})})}function Y(){return Object(a.jsxs)(k,{children:[Object(a.jsx)(A,{}),Object(a.jsx)(W,{children:Object(a.jsx)(V,{})})]})}var K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,315)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(302);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(U,{children:Object(a.jsx)(Y,{})})}),document.getElementById("root")),K()}},[[303,1,2]]]);
//# sourceMappingURL=main.279ebab5.chunk.js.map