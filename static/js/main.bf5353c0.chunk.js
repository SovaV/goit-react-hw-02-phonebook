(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"Container_container__2Eziz"}},2:function(t,e,n){t.exports={box:"ContactForm_box__1pBP5",wrapp:"ContactForm_wrapp__2tji9",btn:"ContactForm_btn__3sBDH"}},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),s=n(14),o=n(4),u=n(5),l=n(7),b=n(6),d=n(11),j=n.n(d),m=n(0);function h(t){var e=t.children;return Object(m.jsx)("div",{className:j.a.container,children:e})}var p=n(12),f=n.n(p),O=n(15),x=n(8),C=n.n(x),v=function(t){var e=t.id,n=t.name,a=t.number;return Object(m.jsx)("div",{children:Object(m.jsxs)("p",{children:[n,": ",a]},e)})},g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(m.jsx)("ul",{className:C.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(m.jsxs)("li",{className:C.a.item,children:[Object(m.jsx)(v,{name:a,number:c}),Object(m.jsx)("button",{className:C.a.btn,type:"button",onClick:function(){return n(e)},children:Object(m.jsx)(O.a,{size:"20px"})})]},e)}))})},_=n(13),y=n(2),w=n.n(y),S=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.hendleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(_.a)({},a,c))},t.hendleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{className:w.a.box,onSubmit:this.hendleSubmit,children:[Object(m.jsxs)("label",{className:w.a.wrapp,children:[Object(m.jsx)("p",{children:"Name"}),Object(m.jsx)("input",{value:this.state.name,onChange:this.hendleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{className:w.a.wrapp,children:[Object(m.jsx)("p",{children:"Number"}),Object(m.jsx)("input",{value:this.state.number,onChange:this.hendleChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:w.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),A=S,N=function(t){var e=t.value,n=t.onChange;return Object(m.jsxs)("label",{children:["Find contacts by name",Object(m.jsx)("input",{type:"text",value:e,onChange:n})]})},k=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c=t.state.contacts,r={id:f.a.generate(),name:n,number:a},i=c.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}));i?alert("".concat(n," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(s.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts();return Object(m.jsxs)(h,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(A,{onSubmit:this.addContact}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(N,{value:this.filter,onChange:this.changeFilter}),Object(m.jsx)(g,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),z=k;n(29);i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={btn:"ContactList_btn__1IAOh",list:"ContactList_list__ZpfFy",item:"ContactList_item__hYVa5"}}},[[30,1,2]]]);
//# sourceMappingURL=main.bf5353c0.chunk.js.map