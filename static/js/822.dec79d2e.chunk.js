"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[822],{4822:function(e,n,a){a.r(n),a.d(n,{default:function(){return Z}});var t=a(9434),r=a(7689),i=a(1413),l=a(5844),s=a(2759),u={name:{type:"string",name:"name",required:!0,label:"Name",placeholder:"User name"},email:{type:"string",name:"email",required:!0,label:"Email",placeholder:"User  email"},password:{type:"string",name:"password",required:!0,label:"Password",placeholder:"User password"}},o={name:"",email:"",password:""},c=a(3932),d="RegisterForm_form__Tv43W",m="RegisterForm_field__NNsWW",h=a(184),f=function(e){var n=e.onSubmit,a=(0,s.Z)({initialState:o,onSubmit:n}),t=a.state,r=a.handleChange,f=a.handleSubmit,p=t.name,_=t.email,g=t.password;return(0,h.jsxs)("form",{className:d,onSubmit:f,children:[(0,h.jsx)(l.Z,(0,i.Z)({className:m,value:p,handleChange:r},u.name)),(0,h.jsx)(l.Z,(0,i.Z)({className:m,value:_,handleChange:r},u.email)),(0,h.jsx)(l.Z,(0,i.Z)({className:m,value:g,handleChange:r},u.password)),(0,h.jsx)(c.Z,{children:"Sign up"})]})},p=a(5568),_=a(5624),g="RegisterPage_container__l-2BF",v="RegisterPage_title__Yjy6g",Z=function(){var e=(0,t.v9)(_.y6),n=(0,t.I0)();return e?(0,h.jsx)(r.Fg,{to:"/contacts"}):(0,h.jsxs)("div",{className:g,children:[(0,h.jsx)("h2",{className:v,children:"Create your account please"}),(0,h.jsx)(f,{onSubmit:function(e){return n((0,p.IU)(e))}})]})}},3932:function(e,n,a){a.d(n,{Z:function(){return i}});var t="Button_button__urlvE",r=a(184),i=function(e){var n=e.children,a=e.type,i=void 0===a?"submit":a;return(0,r.jsx)("button",{type:i,className:t,children:n})}},5844:function(e,n,a){a.d(n,{Z:function(){return d}});var t=a(1413),r=a(4925),i=a(2791),l=a(5984),s="TextField_wrapper__OQN5w",u="TextField_field__f880x",o=a(184),c=["label","handleChange"],d=function(e){var n=e.label,a=e.handleChange,d=(0,r.Z)(e,c),m=(0,i.useMemo)((function(){return(0,l.x0)()}),[]);return(0,o.jsxs)("div",{className:s,children:[(0,o.jsx)("label",{htmlFor:m,children:n}),(0,o.jsx)("input",(0,t.Z)((0,t.Z)({className:u,id:m,onChange:a},d),{},{type:"text"}))]})}},2759:function(e,n,a){var t=a(4942),r=a(1413),i=a(9439),l=a(2791),s=a(9434),u=a(5624);n.Z=function(e){var n=e.initialState,a=e.onSubmit,o=(0,l.useState)((0,r.Z)({},n)),c=(0,i.Z)(o,2),d=c[0],m=c[1],h=(0,l.useCallback)((function(e){var n=e.target,a=n.name,i=n.value;m((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,t.Z)({},a,i))}))}),[m]),f=(0,s.v9)(u.TV);return{state:d,setState:m,handleChange:h,handleSubmit:function(e){e.preventDefault(),a((0,r.Z)({},d)),m((0,r.Z)({},n)),f&&m(d)}}}},5984:function(e,n,a){a.d(n,{x0:function(){return t}});var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=822.dec79d2e.chunk.js.map