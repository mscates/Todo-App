(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{20:function(e,t,o){},28:function(e,t,o){"use strict";o.r(t);var n=o(0),c=o.n(n),d=o(10),a=o.n(d),r=(o(20),o(1)),i=function(e){var t=e.title;return Object(r.jsx)("h1",{className:"title",children:t})},s=o(4),l=o(6),u=o(5),j=o(3),b=o(11),h=o(30),m=Object(b.b)({name:"todos",initialState:[],reducers:{todoAdded:function(e,t){e.push({todo:t.payload.todo,completed:!1,id:Object(h.a)()})},todoRemoved:function(e,t){return e.filter((function(e){return e.id!==t.payload}))},todoUpdated:function(e,t){var o=e.findIndex((function(e){return e.id===t.payload.id}));e[o]={todo:t.payload.todo,id:t.payload.id}},todoCompleted:function(e,t){var o=e.findIndex((function(e){return e.id===t.payload.id}));e[o].completed=t.payload.completed}}}),O=m.actions,p=O.todoAdded,f=O.todoRemoved,x=O.todoUpdated,v=O.todoCompleted,S=m.reducer,g=o(2),N=o.n(g),C=function(e){var t=e.todo,o=e.setShowForm,c=Object(j.b)(),d=Object(n.useState)({todo:t.todo,id:t.id,showForm:t.showForm}),a=Object(s.a)(d,2),r=a[0],i=a[1];return{handleChange:function(e){var t,o=e.target,n=o.name,c=o.value;i(Object(l.a)(Object(l.a)({},r),{},(t={},Object(u.a)(t,n,c),Object(u.a)(t,"showForm",!1),t)))},updateValues:r,handleSubmit:function(e){e.preventDefault(),c(x(r)),o(!1)},handleClose:function(){o(!1)}}};C.propTypes={todo:N.a.bool.isRequired,setShowForm:N.a.func.isRequired};var y=C,w=o(7),F=o(8),k=function(e){var t=e.todo,o=e.setShowForm,n=y({todo:t,setShowForm:o}),c=n.handleChange,d=n.handleSubmit,a=n.updateValues,i=n.handleClose;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{onSubmit:d,children:[Object(r.jsx)("input",{name:"todo",type:"text",value:a.todo,onChange:c}),Object(r.jsx)(w.a,{onClick:i,icon:F.c})]})})},T=function(e){var t=e.todo,o=e.className,c=Object(j.b)(),d=Object(n.useState)(!1),a=Object(s.a)(d,2),i=a[0],u=a[1],b=Object(n.useState)({todo:t.todo,id:t.id,completed:t.completed}),h=Object(s.a)(b,2),m=h[0],O=h[1];Object(n.useEffect)((function(){c(v(m))}),[m.completed]);var p=function(){O((function(e){return Object(l.a)(Object(l.a)({},e),{},{completed:!e.completed})}))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"".concat(o%2===0?"todo cardEven":"todo cardOdd"),children:Object(r.jsxs)("div",{className:"todo-body",children:[Object(r.jsxs)("li",{className:"update-todo",children:[Object(r.jsx)("input",{className:"checkbox",type:"checkbox",name:"complete",checked:m.completed,onChange:function(){p()}}),i?Object(r.jsx)(k,{setShowForm:u,todo:t}):Object(r.jsx)("span",{className:t.completed?"strike":null,children:t.todo})]}),Object(r.jsxs)("div",{className:"todo-actions",children:[t.completed?null:Object(r.jsx)(w.a,{icon:F.a,onClick:function(){u(!0)},className:"",children:"Edit"}),Object(r.jsx)(w.a,{icon:F.b,onClick:function(){return e=t.id,void c(f(e));var e},className:"",children:"Delete"})]})]})})})},A=function(e){var t=e.newTodos,o=Object(j.c)((function(e){return e})).map((function(e,t){return Object(r.jsx)(T,{className:t,todo:e},e.id)})),n=t.map((function(e,t){return Object(r.jsx)(T,{className:t,todo:e},e.id)}));return Object(r.jsx)("div",{className:"todos-container",children:Object(r.jsx)("ul",{children:n||o})})},E=function(){var e=Object(j.b)(),t=Object(n.useState)({todo:""}),o=Object(s.a)(t,2),c=o[0],d=o[1];return{handleChange:function(e){var t=e.target,o=t.name,n=t.value;d(Object(u.a)({},o,n))},value:c,handleSubmit:function(t){t.preventDefault(),""!==c.todo&&(e(p(c)),d({todo:""}))}}},R=function(e){var t=e.todos;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{children:[Object(r.jsxs)("h3",{children:["Total Todos: ",t.length]}),Object(r.jsxs)("h3",{children:["Completed Todos: ",t?t.filter((function(e){return!0===e.completed})).length:null]})]})})},D=function(e){var t=e.handleSearchChange;return Object(r.jsx)("input",{className:"search-todo",placeholder:"Search Todos",type:"text",onChange:t})},I=function(){var e=E(),t=e.handleSubmit,o=e.value,c=e.handleChange,d=Object(n.useState)(""),a=Object(s.a)(d,2),i=a[0],l=a[1],u=Object(j.c)((function(e){return e}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(D,{handleSearchChange:function(e){l(e.target.value)}}),Object(r.jsxs)("form",{className:"input-form",onSubmit:t,children:[Object(r.jsx)("input",{className:"add-todo todo",type:"text",value:o.todo,name:"todo",onChange:c,placeholder:"Add Todo"}),Object(r.jsx)("button",{className:"submit-todo",type:"submit",children:"Add"})]}),Object(r.jsx)(R,{todos:u}),Object(r.jsx)(A,{newTodos:function(e,t){return e.filter((function(e){return-1!==e.todo.indexOf(t)}))}(u,i)})]})},q=Object(b.a)({reducer:S});var J=function(){return Object(r.jsx)(j.a,{store:q,children:Object(r.jsx)("div",{className:"hero",children:Object(r.jsxs)("div",{className:"main-container",children:[Object(r.jsx)("div",{children:Object(r.jsx)(i,{title:"Todo List App"})}),Object(r.jsx)(I,{})]})})})};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(J,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.b4bed6b2.chunk.js.map