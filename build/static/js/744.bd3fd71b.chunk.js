"use strict";(self.webpackChunkbuild_for_project=self.webpackChunkbuild_for_project||[]).push([[744],{1744:(e,s,t)=>{t.r(s),t.d(s,{default:()=>P});var l=t(5043),a=t(3216),i=t(9945),r=t(7148),o=t(18),n=t(579);const c=e=>{let{title:s,onClick:t,className:l}=e;return(0,n.jsxs)("button",{className:"submit-button ".concat(l||""),type:"submit",onClick:()=>{t&&t()},children:[s,(0,n.jsxs)("span",{className:"submit-button__loading-dots",children:[(0,n.jsx)("span",{className:"submit-button__loading-dot"}),(0,n.jsx)("span",{className:"submit-button__loading-dot"}),(0,n.jsx)("span",{className:"submit-button__loading-dot"})]})]})};var m=t(9323);const d=e=>{const[s,t]=(0,l.useState)(!1),{setResetPasswordActive:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"reset-password",children:[(0,n.jsx)("div",{className:"reset-password__form",children:(0,n.jsx)("form",{className:"customer-form",children:(0,n.jsxs)("label",{htmlFor:"",className:"customer-form__item",children:[(0,n.jsx)("p",{children:"E-mail"}),(0,n.jsx)("input",{type:"text",placeholder:"example@gmail.com",className:"customer-form__item_input"})]})})}),(0,n.jsxs)("div",{className:"reset-password__buttons",children:[(0,n.jsx)("button",{type:"button",className:"reset-password__buttons_return",onClick:()=>a(!1),children:"\u0417\u0433\u0430\u0434\u0430\u043b\u0438?"}),(0,n.jsx)(c,{title:"\u041d\u0430\u0433\u0430\u0434\u0430\u0442\u0438",onClick:()=>t(!0)})]})]}),s&&(0,n.jsx)("div",{className:"reset-password-modal",children:(0,n.jsxs)(m.A,{active:s,setActive:t,isSubmitedText:"\u0412\u0430\u0448 \u0432\u0456\u0434\u0433\u0443\u043a \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0434\u043e\u0434\u0430\u043d\u043e!",maxwidth:"500px",children:[(0,n.jsx)("h1",{className:"reset-password-modal__title",children:"\u041d\u0430 \u0430\u0434\u0440\u0435\u0441\u0443 \u0432\u0430\u0448\u043e\u0457 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438 \u0431\u0443\u043b\u043e \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u0434\u043b\u044f \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u0430\u0440\u043e\u043b\u044f."}),(0,n.jsx)("p",{className:"reset-password-modal__text",children:'\u041a\u0440\u0456\u043c \u043f\u0430\u043f\u043a\u0438 "\u0412\u0445\u0456\u0434\u043d\u0456" \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0442\u0430\u043a\u043e\u0436 \u043f\u0430\u043f\u043a\u0443 "\u0421\u043f\u0430\u043c" \u0432\u0430\u0448\u043e\u0457 \u043f\u043e\u0448\u0442\u043e\u0432\u043e\u0457 \u0441\u043a\u0440\u0438\u043d\u044c\u043a\u0438. \u041c\u043e\u0436\u043b\u0438\u0432\u043e, \u043b\u0438\u0441\u0442 \u043f\u043e\u0442\u0440\u0430\u043f\u0438\u0432 \u0442\u0443\u0434\u0438.'})]})})]})};var u=t(3516),p=t(9523);const _=[{id:"cart",label:"\u041d\u0430 \u043a\u0430\u0440\u0442\u0443",value:"CARD"},{id:"iban",label:"\u041d\u0430 \u0440\u043e\u0437\u0440\u0430\u0445\u0443\u043d\u043a\u043e\u0432\u0438\u0439 \u0440\u0430\u0445\u0443\u043d\u043e\u043a",value:"IBAN"},{id:"cash",label:"\u0413\u043e\u0442\u0456\u0432\u043a\u043e\u044e \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456",value:"CASH"}],h=e=>{const{inputName:s,selectedValue:t,onChange:a}=e,[i,r]=(0,l.useState)(t);return(0,l.useEffect)((()=>{a(i)}),[i]),(0,n.jsxs)("div",{className:"payment-method",children:[(0,n.jsx)("h2",{className:"payment-method__title",children:"\u0421\u043f\u043e\u0441\u0456\u0431 \u043e\u043f\u043b\u0430\u0442\u0438:"}),_.map((e=>(0,n.jsx)("div",{className:"delivery-payment-block__options_option",children:(0,n.jsxs)("label",{className:"delivery-payment-block__options_option_label",children:[(0,n.jsx)("input",{type:"radio",name:s,value:i,checked:i===e.value,onChange:()=>r(e.value),className:"delivery-payment-block__options_option_label_input"}),e.label]})},e.id)))]})};var v=t(4955),N=t(6452),x=t(9417);const j=e=>{var s,t,a,r,o,m;let{isResetAddress:d,handleSubmitOrderForm:_,animationClass:j}=e;const y=(0,i.j)(),f=JSON.parse(localStorage.getItem("orderData")||JSON.stringify(null)),b=(0,l.useCallback)((0,x.A)((e=>{y((0,N.VD)({...e}))}),800),[]),g=(0,u.Wx)({initialValues:{city:(null===f||void 0===f||null===(s=f.delivery)||void 0===s?void 0:s.city)||"",house:(null===f||void 0===f||null===(t=f.delivery)||void 0===t?void 0:t.house)||"",street:(null===f||void 0===f||null===(a=f.delivery)||void 0===a?void 0:a.street)||"",apartment:(null===f||void 0===f||null===(r=f.delivery)||void 0===r?void 0:r.apartment)||"",comment:(null===f||void 0===f||null===(o=f.delivery)||void 0===o?void 0:o.comment)||"",paymentMethod:(null===f||void 0===f||null===(m=f.delivery)||void 0===m?void 0:m.paymentMethod)||"CARD",callNeeded:!0},validate:e=>{const s={},t="\u0426\u0435 \u043f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f";return e.city||(s.city=t),e.house||(s.house=t),e.street||(s.street=t),e.apartment||(s.apartment=t),b(e),s},onSubmit:e=>{y((0,N.VD)({...e})),setTimeout((()=>{_()}),100)}});return(0,l.useEffect)((()=>{d&&g.resetForm()}),[d]),(0,n.jsxs)("form",{className:"customer-form",onSubmit:g.handleSubmit,noValidate:!0,children:[(0,n.jsxs)("label",{className:"customer-form__item",children:[(0,n.jsx)("p",{children:"\u041c\u0456\u0441\u0442\u043e*"}),(0,n.jsx)("input",{className:"customer-form__item_input",id:(0,p.Ay)("city"),name:"city",type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u043c\u0456\u0441\u0442\u043e",onChange:g.handleChange,onBlur:g.handleBlur,value:g.values.city,required:!0}),g.touched.city&&g.errors.city?(0,n.jsx)(v.A,{message:g.errors.city}):null]}),(0,n.jsxs)("label",{className:"customer-form__item",children:[(0,n.jsx)("p",{children:"\u0411\u0443\u0434\u0438\u043d\u043e\u043a*"}),(0,n.jsx)("input",{className:"customer-form__item_input",id:(0,p.Ay)("house"),name:"house",type:"text",placeholder:"\u0412\u0430\u0448 \u0431\u0443\u0434\u0438\u043d\u043e\u043a",onChange:g.handleChange,onBlur:g.handleBlur,value:g.values.house,required:!0}),g.touched.house&&g.errors.house?(0,n.jsx)(v.A,{message:g.errors.house}):null]}),(0,n.jsxs)("label",{className:"customer-form__item",children:[(0,n.jsx)("p",{children:"\u0412\u0443\u043b\u0438\u0446\u044f*"}),(0,n.jsx)("input",{className:"customer-form__item_input",id:(0,p.Ay)("street"),name:"street",type:"text",placeholder:"\u0412\u0430\u0448\u0430 \u0432\u0443\u043b\u0438\u0446\u044f",onChange:g.handleChange,onBlur:g.handleBlur,value:g.values.street,required:!0}),g.touched.street&&g.errors.street?(0,n.jsx)(v.A,{message:g.errors.street}):null]}),(0,n.jsxs)("label",{className:"customer-form__item",children:[(0,n.jsx)("p",{children:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430*"}),(0,n.jsx)("input",{className:"customer-form__item_input",id:(0,p.Ay)("apartment"),name:"apartment",type:"text",placeholder:"\u0412\u0430\u0448\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430",onChange:g.handleChange,onBlur:g.handleBlur,value:g.values.apartment,required:!0}),g.touched.apartment&&g.errors.apartment?(0,n.jsx)(v.A,{message:g.errors.apartment}):null]}),(0,n.jsx)(h,{inputName:"paymentMethod",selectedValue:g.values.paymentMethod,onChange:e=>{g.setFieldValue("paymentMethod",e)}}),(0,n.jsx)("div",{className:"payment-method__comment",children:(0,n.jsxs)("label",{className:"payment-method__comment_label",children:[(0,n.jsx)("p",{className:"payment-method__comment_label_title",children:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440"}),(0,n.jsx)("textarea",{placeholder:"\u0412\u0430\u0448 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",className:"payment-method__comment_label_text",name:"comment",value:g.values.comment,rows:6,onChange:g.handleChange})]})}),(0,n.jsxs)("div",{className:"customer-form__bottom",children:[(0,n.jsx)("div",{className:"payment-method__completion",children:(0,n.jsxs)("label",{className:"filter__label",children:[(0,n.jsx)("input",{className:"filter__input",type:"checkbox",name:"callNeeded",checked:!1===g.values.callNeeded,onChange:()=>{g.setFieldValue("callNeeded",!g.values.callNeeded)}}),(0,n.jsxs)("span",{className:"filter__input_custom-input",children:[(0,n.jsx)("span",{className:"filter__input_custom-input_default"}),(0,n.jsx)("span",{className:"filter__input_custom-input_checked"})]}),(0,n.jsx)("p",{className:"payment-method__completion_input_title",children:"\u041d\u0435 \u0434\u0437\u0432\u043e\u043d\u0438\u0442\u0438 \u0434\u043b\u044f \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f"})]})}),(0,n.jsx)("div",{className:"button-wrapper",children:(0,n.jsx)(c,{title:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",className:j})})]})]})};j.defaultProps={isResetAddress:!1};const y=j,f=e=>{const[s,t]=(0,l.useState)(!1),{selectFields:a,defaulTitle:i,selectNameOptions:r,selectedValue:o,onChange:c}=e,[m,d]=(0,l.useState)(o),u=e=>{e.target.closest(".select__custom-fields")||e.target.closest(".select__custom")||t(!1)};(0,l.useEffect)((()=>(s&&document.addEventListener("click",u),()=>document.removeEventListener("click",u))),[s]),(0,l.useEffect)((()=>{c(m)}),[m]),(0,l.useEffect)((()=>{d(o)}),[o]);return(0,n.jsx)("div",{className:"select",children:(0,n.jsxs)("div",{className:"select__custom ".concat(s?"active":""),children:[(0,n.jsx)("button",{className:"select__open-btn",type:"button",onClick:()=>t(!s),children:(0,n.jsx)("span",{className:"select-btn__current-option",children:m||i})}),(0,n.jsx)("fieldset",{className:"select__custom-fields",children:a.map(((e,s)=>{const{title:t,fieldName:l}=e;return(0,n.jsxs)("div",{className:"select__field",children:[(0,n.jsx)("input",{className:"select__input",id:"input-".concat(l).concat(s),type:"radio",name:r,checked:t===m,value:t,onChange:e=>d(e.target.value)}),(0,n.jsx)("label",{className:"select__label",htmlFor:"input-".concat(l).concat(s),children:t})]},(0,p.Ay)("select-field"))}))})]})})},b=(0,l.memo)(f),g=e=>{var s,t,a,r,o,m;let{handleSubmitOrderForm:d,animationClass:_}=e;const j=(0,i.j)(),y=JSON.parse(localStorage.getItem("orderData")||JSON.stringify(null)),f=(0,l.useCallback)((0,x.A)((e=>{j((0,N.VD)({...e}))}),800),[]),g=(0,u.Wx)({initialValues:{deliveryCompanyName:(null===y||void 0===y||null===(s=y.delivery)||void 0===s?void 0:s.deliveryCompanyName)||"",region:(null===y||void 0===y||null===(t=y.delivery)||void 0===t?void 0:t.region)||"",city:(null===y||void 0===y||null===(a=y.delivery)||void 0===a?void 0:a.city)||"",postOffice:(null===y||void 0===y||null===(r=y.delivery)||void 0===r?void 0:r.postOffice)||"",paymentMethod:(null===y||void 0===y||null===(o=y.delivery)||void 0===o?void 0:o.paymentMethod)||"CARD",comment:(null===y||void 0===y||null===(m=y.delivery)||void 0===m?void 0:m.comment)||"",callNeeded:!0},validate:e=>{const s={},t="\u0426\u0435 \u043f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f";return e.deliveryCompanyName||(s.deliveryCompanyName=t),e.region||(s.region=t),e.city||(s.city=t),e.postOffice||(s.postOffice=t),f(e),s},onSubmit:e=>{j((0,N.VD)({...e})),setTimeout((()=>{d()}),100)}});return(0,n.jsxs)("form",{className:"customer-form",noValidate:!0,onSubmit:g.handleSubmit,children:[(0,n.jsxs)("div",{className:"customer-form__item",children:[(0,n.jsx)("p",{children:"\u041f\u043e\u0448\u0442\u043e\u0432\u0438\u0439 \u0441\u0435\u0440\u0432\u0456\u0441*"}),(0,n.jsx)(b,{selectFields:[{title:"\u0423\u043a\u0440\u043f\u043e\u0448\u0442\u0430",fieldName:"ukrposhta"},{title:"\u041d\u043e\u0432\u0430 \u043f\u043e\u0448\u0442\u0430",fieldName:"navaposhta"},{title:"Meest",fieldName:"meest"},{title:"\u0410\u0432\u0442\u043e\u043b\u044e\u043a\u0441",fieldName:"autolux"},{title:"\u0414\u0435\u043b\u0456\u0432\u0435\u0440\u0456",fieldName:"delivery"}],defaulTitle:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c",selectNameOptions:"deliveryCompanyName",selectedValue:g.values.deliveryCompanyName,onChange:e=>{g.setFieldValue("deliveryCompanyName",e)}}),g.touched.deliveryCompanyName&&g.errors.deliveryCompanyName?(0,n.jsx)(v.A,{message:g.errors.deliveryCompanyName}):null]}),(0,n.jsxs)("label",{className:"customer-form__item",children:[(0,n.jsx)("p",{children:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c*"}),(0,n.jsx)("input",{className:"customer-form__item_input",id:(0,p.Ay)("region"),name:"region",type:"text",placeholder:"\u0412\u0430\u0448\u0430 \u043e\u0431\u043b\u0430\u0441\u0442\u044c",onChange:g.handleChange,onBlur:g.handleBlur,value:g.values.region,required:!0}),g.touched.region&&g.errors.region?(0,n.jsx)(v.A,{message:g.errors.region}):null]}),(0,n.jsxs)("label",{className:"customer-form__item",children:[(0,n.jsx)("p",{children:"\u041c\u0456\u0441\u0442\u043e*"}),(0,n.jsx)("input",{className:"customer-form__item_input",id:(0,p.Ay)("city"),name:"city",type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u043c\u0456\u0441\u0442\u043e",onChange:g.handleChange,onBlur:g.handleBlur,value:g.values.city,required:!0}),g.touched.city&&g.errors.city?(0,n.jsx)(v.A,{message:g.errors.city}):null]}),(0,n.jsxs)("div",{className:"customer-form__item",children:[(0,n.jsx)("p",{children:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f*"}),(0,n.jsx)(b,{selectFields:[{title:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f 1",fieldName:"1"},{title:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f 2",fieldName:"2"},{title:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f 3",fieldName:"3"},{title:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f 4",fieldName:"4"},{title:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f 5",fieldName:"5"}],defaulTitle:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c",selectNameOptions:"postOffice",selectedValue:g.values.postOffice,onChange:e=>{g.setFieldValue("postOffice",e)}}),g.touched.postOffice&&g.errors.postOffice?(0,n.jsx)(v.A,{message:g.errors.postOffice}):null]}),(0,n.jsx)(h,{inputName:"paymentMethod",selectedValue:g.values.paymentMethod,onChange:e=>{g.setFieldValue("paymentMethod",e)}}),(0,n.jsx)("div",{className:"payment-method__comment",children:(0,n.jsxs)("label",{className:"payment-method__comment_label",children:[(0,n.jsx)("p",{className:"payment-method__comment_label_title",children:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440"}),(0,n.jsx)("textarea",{placeholder:"\u0412\u0430\u0448 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",className:"payment-method__comment_label_text",name:"comment",value:g.values.comment,rows:6,onChange:g.handleChange})]})}),(0,n.jsxs)("div",{className:"customer-form__bottom",children:[(0,n.jsx)("div",{className:"payment-method__completion",children:(0,n.jsxs)("label",{className:"filter__label",children:[(0,n.jsx)("input",{className:"filter__input",type:"checkbox",name:"callNeeded",checked:!1===g.values.callNeeded,onChange:()=>{g.setFieldValue("callNeeded",!g.values.callNeeded)}}),(0,n.jsxs)("span",{className:"filter__input_custom-input",children:[(0,n.jsx)("span",{className:"filter__input_custom-input_default"}),(0,n.jsx)("span",{className:"filter__input_custom-input_checked"})]}),(0,n.jsx)("p",{className:"payment-method__completion_input_title",children:"\u041d\u0435 \u0434\u0437\u0432\u043e\u043d\u0438\u0442\u0438 \u0434\u043b\u044f \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f"})]})}),(0,n.jsx)("div",{className:"button-wrapper",children:(0,n.jsx)(c,{title:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",className:_})})]})]})},C=[{id:"postal-delivery",label:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0443 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f",description:'\u0428\u0432\u0438\u0434\u043a\u0438\u0439 \u0442\u0430 \u043d\u0430\u0434\u0456\u0439\u043d\u0438\u0439 \u0441\u043f\u043e\u0441\u0456\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c. \u041d\u0430\u0448\u0430 \u043f\u043e\u0441\u043b\u0443\u0433\u0430 "\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0443 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f" \u043f\u0440\u043e\u043f\u043e\u043d\u0443\u0454 \u0437\u0440\u0443\u0447\u043d\u0438\u0439 \u0441\u043f\u043e\u0441\u0456\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0432\u0430\u0448\u0456 \u043f\u043e\u043a\u0443\u043f\u043a\u0438.',value:"postal-delivery"},{id:"address-delivery",label:"\u0410\u0434\u0440\u0435\u0441\u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430",description:'\u041e\u0442\u0440\u0438\u043c\u0430\u0439\u0442\u0435 \u0432\u0430\u0448\u0456 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u044f\u043c\u043e \u0434\u043e \u0434\u0432\u0435\u0440\u0435\u0439. \u041d\u0430\u0448\u0430 \u043f\u043e\u0441\u043b\u0443\u0433\u0430 "\u0410\u0434\u0440\u0435\u0441\u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430" \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0437\u0440\u0443\u0447\u043d\u043e \u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0442\u0438 \u0442\u043e\u0432\u0430\u0440\u0438 \u0431\u0435\u0437\u043f\u043e\u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e \u043d\u0430 \u0432\u0430\u0448\u0443 \u0430\u0434\u0440\u0435\u0441\u0443.',value:"address-delivery"}],k=e=>{const{selectedDeliveryOption:s,setSelectedDeliveryOption:t}=e,r=JSON.parse(localStorage.getItem("orderData")||JSON.stringify(null)),{loading:o,error:c,orderNumber:m}=(0,i.G)((e=>e.order)),[d,u]=(0,l.useState)(""),p=(0,i.j)(),_=(0,a.Zp)();(0,l.useEffect)((()=>{"succeeded"===o&&m&&(p((0,N.Ye)()),_("/checkout/success"))}),[o,c,m]),(0,l.useEffect)((()=>{var e;null!==r&&void 0!==r&&null!==(e=r.delivery)&&void 0!==e&&e.deliveryType&&t(r.delivery.deliveryType)}),[]);const h=()=>{p((0,N.ZO)())};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"delivery-payment-block",children:(0,n.jsx)("div",{className:"delivery-payment-block__options",children:C.map((e=>(0,n.jsxs)("div",{className:"delivery-payment-block__options_option",children:[(0,n.jsxs)("label",{className:"delivery-payment-block__options_option_label",children:[(0,n.jsx)("input",{type:"radio",name:"deliveryOption",value:e.value,checked:s===e.id,onChange:()=>{var s;s=e.value,p((0,N.VD)({deliveryType:s,deliveryCompanyName:"",region:"",city:"",postOffice:"",house:"",street:"",apartment:""})),setTimeout((()=>{t(s)}),50),u(e.label)},className:"delivery-payment-block__options_option_label_input"}),e.label]}),(0,n.jsx)("p",{className:"delivery-payment-block__options_option_description",children:e.description})]},e.id)))})}),(0,n.jsx)("div",{className:"delivery-payment-block__form",children:"postal-delivery"===s?(0,n.jsx)(g,{handleSubmitOrderForm:h,animationClass:"".concat("pending"===o?"loading":"")}):(0,n.jsx)(y,{handleSubmitOrderForm:h,animationClass:"".concat("pending"===o?"loading":"")})})]})};var S=t(2791);const A=()=>{const e=(0,i.G)((e=>e.cart.productsInfoToCheckout));return(0,n.jsxs)("div",{className:"checkout__products",children:[(0,n.jsxs)("div",{className:"checkout__products-header products-header",children:[(0,n.jsx)("span",{className:"products-header__left",children:"\u0422\u043e\u0432\u0430\u0440"}),(0,n.jsx)("span",{className:"products-header__right",children:"\u0426\u0456\u043d\u0430"})]}),(0,n.jsx)("ul",{className:"checkout__products-list products-list",children:e.map((e=>{const{quantityToCheckout:s}=e;return s<1?"":(0,n.jsxs)("li",{className:"products-list__item",children:[(0,n.jsxs)("span",{className:"products-list__item-name",children:[e.productName,", ",e.skuCode,","," ",(0,n.jsxs)("span",{className:"products-list__item-nowrap",children:[e.colorName," ",(0,n.jsxs)("span",{className:"products-list__item-quantity",children:["x ",e.quantityToCheckout]})]})]}),(0,n.jsxs)("span",{className:"products-list__item-price",children:[(0,S.A)(e.price)," UAH"]})]},(0,p.Ay)("checkout-product-item"))}))})]})};var O=t(3359),F=t(7525),w=t(524),V=t(4006);const T=e=>{const{handleSubmit:s,setCustomerForm:t}=e,a=(0,i.j)(),r=(0,i.G)((e=>e.auth.loginLoading)),o=(0,i.G)((e=>e.userActions.userProfileData)),m=(0,i.G)((e=>e.userActions.loadingUserPersonalInfo)),d=(0,i.G)((e=>e.auth.newPasswordLoading)),p=(0,i.G)((e=>e.cart.cartTotal)),_=JSON.parse(localStorage.getItem("orderData")||JSON.stringify(null)),h=(0,l.useCallback)((0,x.A)((e=>{a((0,N.p_)({...e}))}),800),[]),v=(0,u.Wx)({initialValues:{firstName:(null===_||void 0===_?void 0:_.firstName)||"",lastName:(null===_||void 0===_?void 0:_.lastName)||"",phoneNumber:(null===_||void 0===_?void 0:_.phoneNumber)||"",email:(null===_||void 0===_?void 0:_.email)||""},validate:e=>{const s={};return h(e),["firstName","lastName","phoneNumber","email"].forEach((t=>{const l=(0,O.A)(t,e[t]);l&&("email"!==t||e[t])&&(s[t]=l)})),s},onSubmit:(e,t)=>{let{resetForm:l}=t;p&&0!==p.totalQuantityToCheckout&&_&&null!==_&&void 0!==_&&_.orderItems&&_.orderItems.length>0&&(s(!0),a((0,N.p_)({...e})),l()),p&&0!==p.totalQuantityToCheckout&&null!==_&&void 0!==_&&_.orderItems&&0!==_.orderItems.length||alert("\u043d\u0435 \u043c\u043e\u0436\u043d\u0430 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f, \u044f\u043a\u0449\u043e \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456 \u0442\u043e\u0432\u0430\u0440\u0438")}});return(0,l.useEffect)((()=>{t(v)}),[]),(0,l.useEffect)((()=>{"succeeded"===r&&null!==_&&void 0!==_&&_.firstName&&v.setValues({firstName:(null===_||void 0===_?void 0:_.firstName)||"",lastName:(null===_||void 0===_?void 0:_.lastName)||"",phoneNumber:(null===_||void 0===_?void 0:_.phoneNumber)||"",email:(null===_||void 0===_?void 0:_.email)||""})}),[r]),(0,l.useEffect)((()=>{v.values.firstName||v.values.lastName||v.values.phoneNumber||v.values.email||a((0,V.TH)()),"succeeded"!==r&&"succeeded"!==d||a((0,V.TH)())}),[r,d]),(0,l.useEffect)((()=>{"succeeded"===m&&o&&(v.setValues({firstName:o.firstName||"",lastName:o.lastName||"",phoneNumber:o.phoneNumber||"",email:o.email||""}),a((0,V.YK)()),a((0,w.a5)()),a((0,w.E2)()))}),[o,m]),(0,n.jsxs)("form",{className:"customer-form",onSubmit:v.handleSubmit,noValidate:!0,children:[(0,n.jsx)("div",{className:"customer-form__item",children:(0,n.jsx)(F.MU,{formik:v})}),(0,n.jsx)("div",{className:"customer-form__item",children:(0,n.jsx)(F.aB,{formik:v})}),(0,n.jsx)("div",{className:"customer-form__item",children:(0,n.jsx)(F.yL,{formik:v})}),(0,n.jsx)("div",{className:"customer-form__item",children:(0,n.jsx)(F.j5,{formik:v})}),(0,n.jsx)("div",{className:"button-wrapper",children:(0,n.jsx)(c,{title:"\u0414\u0430\u043b\u0456"})})]})},D=(0,l.memo)(T);var E=t(9153),I=t(2261);const R=e=>{const{setResetPasswordActive:s,setRegularLoggedIn:t}=e,[a,i]=(0,l.useState)(!1);return(0,n.jsxs)("div",{className:"regular-customer",children:[(0,n.jsx)("div",{className:"regular-customer__form",children:(0,n.jsx)(E.A,{styleClass:"customer-form",setIsLoginBtnClicked:i})}),(0,n.jsx)("span",{className:"custom-line"}),(0,n.jsxs)("div",{className:"regular-customer__login",children:[(0,n.jsx)("p",{className:"regular-customer__login_title",children:"\u0423\u0432\u0456\u0439\u0434\u0456\u0442\u044c \u044f\u043a \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447"}),(0,n.jsx)(I.A,{additionalClass:"regular-customer__login_button",textBtn:"\u0423\u0432\u0456\u0439\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e Google",isTitleShow:!1})]})]})},B=(0,l.memo)(R),M=()=>{const e=(0,i.G)((e=>e.order.data)),s=JSON.parse(localStorage.getItem("orderData")||JSON.stringify(null)),t=(0,i.j)();return(0,l.useEffect)((()=>{s&&t((0,N.B_)(s))}),[]),(0,l.useEffect)((()=>{e&&localStorage.setItem("orderData",JSON.stringify(e))}),[e]),(0,n.jsx)("div",{style:{display:"none",userSelect:"none",visibility:"hidden"},children:"''"})},q=(0,l.memo)(M),G=()=>{const[e,s]=(0,l.useState)(!0),[t,c]=(0,l.useState)(!1),[m,u]=(0,l.useState)(null),[p,_]=(0,l.useState)(!0),[h,v]=(0,l.useState)(!1),[x,j]=(0,l.useState)(!1),[y,f]=(0,l.useState)(!1),[b,g]=(0,l.useState)("postal-delivery"),C=((0,a.Zp)(),(0,i.G)((e=>e.cart.cartTotal))),S=(0,i.G)((e=>e.auth.jwtToken)),O=(0,i.G)((e=>e.cart.productsInfoToCheckout)),F=(0,i.j)();(0,l.useEffect)((()=>{if(!C)return;const e=O.map((e=>{const{skuCode:s,colorHex:t,quantityToCheckout:l,price:a}=e;return{productSkuCode:s,colorHex:t,quantity:l,price:a}})).filter((e=>e.quantity>0));F((0,N.CM)(e)),C.totalQuantityToCheckout}),[C]),(0,l.useEffect)((()=>{S?(s(!1),c(!0),f(!0)):f(!1)}),[S]);const w=(0,l.useCallback)((e=>{_(!0),v(!1),s(!e),c(e),j(!1)}),[]),V=(0,l.useCallback)((e=>{_(!e),v(e)}),[]),T={ResetPassword:(0,n.jsx)(d,{setResetPasswordActive:j}),NewCustomer:(0,n.jsx)(D,{handleSubmit:V,setCustomerForm:u}),RegularCustomer:(0,n.jsx)(B,{setResetPasswordActive:j,setRegularLoggedIn:f}),RegularCustomerLoggedIn:(0,n.jsx)(D,{handleSubmit:V,setCustomerForm:u}),DeliveryAndPaymentForm:(0,n.jsx)(k,{selectedDeliveryOption:b,setSelectedDeliveryOption:g})},E=h?"DeliveryAndPaymentForm":x?"ResetPassword":e?"NewCustomer":y?"RegularCustomerLoggedIn":"RegularCustomer";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"checkout",children:[(0,n.jsx)("h1",{className:"checkout__title",children:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,n.jsxs)("div",{className:"checkout__content",children:[(0,n.jsxs)("div",{className:"customer-block",children:[(0,n.jsx)("div",{className:"customer-handler",children:(0,n.jsxs)("ul",{className:"customer-handler__list",children:[S?"":(0,n.jsx)("li",{onClick:()=>w(!1),className:e?"customer-handler__list_item active":"customer-handler__list_item",children:"\u041d\u043e\u0432\u0438\u0439 \u043f\u043e\u043a\u0443\u043f\u0435\u0446\u044c"}),(0,n.jsx)("li",{onClick:()=>w(!0),className:"customer-handler__list_item regular-cutomer ".concat(t?"active":""," ").concat(S?"center":""),children:"\u041f\u043e\u0441\u0442\u0456\u0439\u043d\u0438\u0439 \u043a\u043b\u0456\u0454\u043d\u0442"})]})}),e||y?(0,n.jsxs)("div",{className:"customer-block__steps",children:[(0,n.jsxs)("button",{className:p?"customer-block__steps_step active":"customer-block__steps_step",type:"button",onClick:()=>{_(!0),v(!1)},children:[(0,n.jsx)("span",{className:p?"customer-block__steps_step_number active":"customer-block__steps_step_number",children:"1"}),"\u041e\u0441\u043e\u0431\u0438\u0441\u0442\u0456 \u0434\u0430\u043d\u0456"]}),(0,n.jsxs)("button",{className:h?"customer-block__steps_step active":"customer-block__steps_step",type:"button",onClick:()=>{m&&m.submitForm()},children:[(0,n.jsx)("span",{className:h?"customer-block__steps_step_number active":"customer-block__steps_step_number",children:"2"}),"\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u0442\u0430 \u043e\u043f\u043b\u0430\u0442\u0443"]})]}):"",T[E]]}),(0,n.jsx)("div",{className:"summary-block",children:(0,n.jsx)(o.A,{title:"\u0412\u0430\u0448\u0435 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",bgColor:"#FAFAF9",children:(0,n.jsx)(A,{})})})]})]})}),(0,n.jsx)(q,{})]})},P=(0,l.memo)(G)},7148:(e,s,t)=>{t.d(s,{A:()=>o});var l=t(3216),a=t(5475),i=t(9523),r=t(579);const o=()=>{const e=(0,l.zy)(),s={catalog:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433",product:"\u0422\u043e\u0432\u0430\u0440",cart:"\u041a\u043e\u0448\u0438\u043a",checkout:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",success:"\u0423\u0441\u043f\u0456\u0448\u043d\u043e",cabinet:"\u041e\u0441\u043e\u0431\u0438\u0441\u0442\u0438\u0439 \u043a\u0430\u0431\u0456\u043d\u0435\u0442",delivery:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0456 \u043e\u043f\u043b\u0430\u0442\u0430",about:"\u041f\u0440\u043e \u043d\u0430\u0441"},t=e.pathname.split("/").filter((e=>""!==e));let o="";const n=t.map((e=>{const t=decodeURIComponent(e);return o+="/".concat(t),(0,r.jsx)("li",{className:"breadcrumbs__list_item",children:(0,r.jsx)(a.k2,{to:o,className:"breadcrumbs__list_item_link",children:s[e]||t})},e)}));return n.length>0&&n.unshift((0,r.jsx)("li",{className:"breadcrumbs__list_item",children:(0,r.jsx)(a.k2,{to:"/",className:"breadcrumbs__list_item_link",children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"})},(0,i.Ay)("crumb-item"))),(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("nav",{className:"breadcrumbs",children:(0,r.jsx)("ol",{className:"breadcrumbs__list",children:n})})})}}}]);
//# sourceMappingURL=744.bd3fd71b.chunk.js.map