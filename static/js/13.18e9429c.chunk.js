"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[13],{7013:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var a=t(9434),r=t(1413),i=t(5844),l=t(2759),u={name:{type:"string",name:"name",required:!0,label:"Name",placeholder:"User name"},email:{type:"string",name:"email",required:!0,label:"Email",placeholder:"User  email"},password:{type:"string",name:"password",required:!0,label:"Password",placeholder:"User password"}},s={name:"",email:"",password:""},o=t(3932),d="RegisterForm_form__Tv43W",c=t(184),m=function(e){var n=e.onSubmit,t=(0,l.Z)({initialState:s,onSubmit:n}),a=t.state,m=t.handleChange,h=t.handleSubmit,f=a.name,p=a.email,v=a.password;return(0,c.jsxs)("form",{className:d,onSubmit:h,children:[(0,c.jsx)(i.Z,(0,r.Z)({value:f,handleChange:m},u.name)),(0,c.jsx)(i.Z,(0,r.Z)({value:p,handleChange:m},u.email)),(0,c.jsx)(i.Z,(0,r.Z)({value:v,handleChange:m},u.password)),(0,c.jsx)(o.Z,{children:"Sign up"})]})},h=t(5568),f=function(){var e=(0,a.I0)();return(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"RegisterPage"}),(0,c.jsx)(m,{onSubmit:function(n){return e((0,h.IU)(n))}})]})}},3932:function(e,n,t){t.d(n,{Z:function(){return i}});var a="Button_button__urlvE",r=t(184),i=function(e){var n=e.children,t=e.type,i=void 0===t?"submit":t;return(0,r.jsx)("button",{type:i,className:a,children:n})}},5844:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(1413),r=t(4925),i=t(2791),l=t(5984),u="TextField_wrapper__OQN5w",s="TextField_field__f880x",o=t(184),d=["label","handleChange"],c=function(e){var n=e.label,t=e.handleChange,c=(0,r.Z)(e,d),m=(0,i.useMemo)((function(){return(0,l.x0)()}),[]);return(0,o.jsxs)("div",{className:u,children:[(0,o.jsx)("label",{htmlFor:m,children:n}),(0,o.jsx)("input",(0,a.Z)((0,a.Z)({className:s,id:m,onChange:t},c),{},{type:"text"}))]})}},2759:function(e,n,t){var a=t(4942),r=t(1413),i=t(9439),l=t(2791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,u=(0,l.useState)((0,r.Z)({},n)),s=(0,i.Z)(u,2),o=s[0],d=s[1],c=(0,l.useCallback)((function(e){var n=e.target,t=n.name,i=n.value;d((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},t,i))}))}),[d]);return{state:o,setState:d,handleChange:c,handleSubmit:function(e){e.preventDefault(),t((0,r.Z)({},o)),d((0,r.Z)({},n))}}}},5984:function(e,n,t){t.d(n,{x0:function(){return a}});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=13.18e9429c.chunk.js.map