"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[217],{217:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(2791),a=n(9434),s=n(30),c=n(9439),o=n(5984),i={containerInput:"AddForm_containerInput__upGJ6",buttonForm:"AddForm_buttonForm__5FZ1w"},u=n(184);function l(){var e=(0,r.useState)(""),t=(0,c.Z)(e,2),n=t[0],l=t[1],d=(0,r.useState)(""),m=(0,c.Z)(d,2),h=m[0],f=m[1],p=(0,o.x0)(),v=(0,o.x0)(),x=(0,a.I0)(),b=(0,a.v9)((function(e){return e.contacts})).contacts,j=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":l(r);break;case"number":f(r);break;default:return}};return(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:(0,o.x0)(),name:n,phone:h};if(null!==b&&void 0!==b&&b.some((function(e){return e.name.toLowerCase().trim()===n.toLowerCase().trim()})))return alert("".concat(n," is already in contacts"));x((0,s.uK)(t)),l(""),f("")},children:[(0,u.jsxs)("div",{className:i.containerInput,children:[(0,u.jsxs)("label",{htmlFor:p,className:i.formLabel,children:["Name",(0,u.jsx)("input",{className:i.formInput,value:n,id:p,type:"text",onChange:j,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{htmlFor:v,className:i.formLabel,children:["Number",(0,u.jsx)("input",{className:i.formInput,id:v,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:h,onChange:j})]})]}),(0,u.jsx)("button",{type:"submit",className:i.buttonForm,children:"Add contact"})]})}var d={listUses:"ContactList_listUses__Aa-vb"};function m(){var e=(0,a.I0)(),t=(0,a.v9)((function(e){return e.contacts.contacts})),n=(0,a.v9)((function(e){return e.filter})),r=null===t||void 0===t?void 0:t.filter((function(e){return e.name.toLowerCase().includes(n)}));return(0,u.jsx)("ul",{className:d.listUsers,children:null===r||void 0===r?void 0:r.map((function(t){return(0,u.jsxs)("li",{className:d.itemUser,children:[(0,u.jsxs)("p",{className:d.itemText,children:[t.name,": "]}),(0,u.jsx)("p",{className:d.itemText,children:t.phone}),(0,u.jsx)("button",{className:d.buttonDelete,onClick:function(n){return e((0,s.GK)(t.id))},children:"Delete"})]},t.id)}))})}var h=n(2198),f="Filter_filterInput__1Cysk";function p(){var e=(0,a.v9)((function(e){return e.filter})),t=(0,a.I0)(),n=(0,o.x0)();return(0,u.jsxs)("label",{className:f,htmlFor:n,children:["Find contacts by name",(0,u.jsx)("input",{name:"filter",id:n,type:"text",value:e,onChange:function(e){return t((0,h.T)(e.currentTarget.value))}})]})}var v={},x=function(){var e=(0,a.I0)(),t=(0,a.v9)((function(e){return e.contacts.contacts})),n=(0,a.v9)((function(e){return e.contacts.isLoading})),c=(0,a.v9)((function(e){return e.contacts.error}));return(0,r.useEffect)((function(){e((0,s.yF)())}),[e]),(0,u.jsxs)("div",{className:v.container,children:[(0,u.jsx)("h1",{className:v.titleBook,children:"Phonebook"}),(0,u.jsx)(l,{}),(0,u.jsx)("h2",{className:v.titleContacts,children:"Contacts"}),(0,u.jsx)(p,{}),c&&(0,u.jsx)("h2",{children:"Error..."}),n&&(0,u.jsx)("h3",{children:"Loading..."}),t.length>0?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(m,{})}):(0,u.jsx)("h2",{children:"You have not added contacts yet"})]})}},5984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=217.09f4d35f.chunk.js.map