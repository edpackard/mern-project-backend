(this.webpackJsonpfrontend_mern=this.webpackJsonpfrontend_mern||[]).push([[0],{41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(17),r=n.n(c),o=n(8),i=n(3),a=n(2),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsx)("button",{onClick:n,children:c})]})},l=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{className:"error",children:e})},j=n(6),f=n.n(j),d="https://damp-tor-55947.herokuapp.com/api/notes",b={getAll:function(){return f.a.get(d).then((function(t){return t.data}))},create:function(t){return f.a.post(d,t).then((function(t){return t.data}))},update:function(t,e){return f.a.put("".concat(d,"/").concat(t),e).then((function(t){return t.data}))}},m=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),j=Object(i.a)(r,2),f=j[0],d=j[1],m=Object(a.useState)(!0),p=Object(i.a)(m,2),O=p[0],h=p[1],v=Object(a.useState)(null),x=Object(i.a)(v,2),g=x[0],S=x[1];Object(a.useEffect)((function(){b.getAll().then((function(t){c(t)}))}),[]),console.log("render",n.length,"notes");var k=O?n:n.filter((function(t){return t.important})),w=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, following Dept of Computer Science, University of Helsinki tutorial, 2021"})]})};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(l,{message:g}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return h(!O)},children:["show ",O?"important":"all"]})}),Object(u.jsx)("ul",{children:k.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),r=Object(o.a)(Object(o.a)({},e),{},{important:!e.important});b.update(t,r).then((function(e){c(n.map((function(n){return n.id!==t?n:e})))})).catch((function(r){S("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){S(null)}),5e3),c(n.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:f,date:(new Date).toISOString(),important:Math.random()<.5};b.create(e).then((function(t){c(n.concat(t)),d("")}))},children:[Object(u.jsx)("input",{value:f,onChange:function(t){d(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(w,{})]})};n(41);r.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b5f801c5.chunk.js.map