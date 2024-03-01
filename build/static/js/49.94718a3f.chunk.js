"use strict";(self.webpackChunkbuild_for_project=self.webpackChunkbuild_for_project||[]).push([[49],{6049:(e,a,s)=>{s.r(a),s.d(a,{default:()=>j});var c=s(7148),r=s(5475),t=s(802),l=s(9945),i=s(9436),d=s(483),n=s(579);const m=()=>{const e=(0,l.G)((e=>e.cart.cartData)),a=(0,l.G)((e=>e.cart.loading)),s=(0,l.G)((e=>e.cart.error)),c=(0,l.j)();return(0,n.jsxs)("div",{className:"cart-table",children:[(0,n.jsxs)("ul",{className:"cart-table__header",children:[(0,n.jsx)("li",{className:"cart-table__header-item","aria-label":"\u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0442\u043e\u0432\u0430\u0440"}),(0,n.jsx)("li",{className:"cart-table__header-item cart-table__header-item_pdl",children:"\u0422\u043e\u0432\u0430\u0440"}),(0,n.jsxs)("ul",{className:"cart-table__header-right",children:[(0,n.jsx)("li",{className:"cart-table__header-item",children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"}),(0,n.jsx)("li",{className:"cart-table__header-item",children:"\u041d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c"}),(0,n.jsx)("li",{className:"cart-table__header-item",children:"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c"})]})]}),(0,n.jsx)("ul",{className:"cart-table__items",children:(0,d.A)({error:s,loading:a,content:()=>e.map((e=>(0,n.jsx)("li",{className:"cart-table__item",children:(0,n.jsx)(t.A,{cartData:e})},"product_for-cart".concat(e.skuCode,"-").concat(e.colorHex))))})}),(0,n.jsxs)("div",{className:"cart-table__navigation-wrapper",children:[(0,n.jsx)("button",{className:"cart-table__clear-cart",type:"button",disabled:"succeeded"!==a,onClick:()=>{c((0,i.M2)([])),c((0,i.Sf)())},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043a\u043e\u0448\u0438\u043a"}),(0,n.jsx)(r.k2,{className:"cart-table__go-shopping",to:"/catalog",children:"\u0414\u043e \u043f\u043e\u043a\u0443\u043f\u043e\u043a"})]})]})};var _=s(494),h=s(18);s(5043);const o=s.p+"static/media/empty-cart.b120e53bcb44ce99f34a745fff67589d.svg",x=()=>(0,n.jsxs)("div",{className:"cart-empty",children:[(0,n.jsxs)("div",{className:"cart-empty__content",children:[(0,n.jsx)("img",{className:"cart-empty__smile",src:o,alt:"\u043f\u043e\u0445\u043c\u0443\u0440\u0438\u0439 \u0441\u043c\u0430\u0439\u043b"}),(0,n.jsx)("p",{className:"cart-empty__text",children:"\u0412\u0430\u0448 \u043a\u043e\u0448\u0438\u043a \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439."})]}),(0,n.jsx)(r.k2,{className:"cart-empty__link",to:"/catalog",children:"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044c \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"})]}),j=()=>{const e=(0,l.G)((e=>e.cart.cartBody)),a=(0,l.G)((e=>e.cart.loading));return(0,n.jsxs)("section",{className:"cart",children:[(0,n.jsx)(c.A,{}),(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h1",{className:"cart__title",children:"\u041a\u043e\u0448\u0438\u043a"}),0===e.length&&"pending"!==a?(0,n.jsx)(x,{}):(0,n.jsxs)("div",{className:"cart-content",children:[(0,n.jsx)(m,{}),"succeeded"===a?(0,n.jsx)("div",{className:"cart__right-side",children:(0,n.jsxs)("div",{className:"cart__right-sticky",children:[(0,n.jsx)(h.A,{title:"\u041f\u0456\u0434\u0441\u0443\u043c\u043a\u0438 \u043a\u043e\u0448\u0438\u043a\u0430",bgColor:"#FAFAF9"}),(0,n.jsxs)("div",{className:"cart__delivery-block",children:[(0,n.jsx)("h3",{className:"cart__delivery-title",children:"\u0423\u043c\u043e\u0432\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),(0,n.jsx)(_.A,{extraClass:"cart__delivery_fz11"})]})]})}):""]})]})]})}},7148:(e,a,s)=>{s.d(a,{A:()=>i});var c=s(3216),r=s(5475),t=s(9523),l=s(579);const i=()=>{const e=(0,c.zy)(),a={catalog:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433",product:"\u0422\u043e\u0432\u0430\u0440",cart:"\u041a\u043e\u0448\u0438\u043a",checkout:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",success:"\u0423\u0441\u043f\u0456\u0448\u043d\u043e",cabinet:"\u041e\u0441\u043e\u0431\u0438\u0441\u0442\u0438\u0439 \u043a\u0430\u0431\u0456\u043d\u0435\u0442",delivery:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0456 \u043e\u043f\u043b\u0430\u0442\u0430",about:"\u041f\u0440\u043e \u043d\u0430\u0441"},s=e.pathname.split("/").filter((e=>""!==e));let i="";const d=s.map((e=>{const s=decodeURIComponent(e);return i+="/".concat(s),(0,l.jsx)("li",{className:"breadcrumbs__list_item",children:(0,l.jsx)(r.k2,{to:i,className:"breadcrumbs__list_item_link",children:a[e]||s})},e)}));return d.length>0&&d.unshift((0,l.jsx)("li",{className:"breadcrumbs__list_item",children:(0,l.jsx)(r.k2,{to:"/",className:"breadcrumbs__list_item_link",children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"})},(0,t.Ay)("crumb-item"))),(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("nav",{className:"breadcrumbs",children:(0,l.jsx)("ol",{className:"breadcrumbs__list",children:d})})})}},494:(e,a,s)=>{s.d(a,{A:()=>t});var c=s(579);const r=e=>{let{extraClass:a}=e;return(0,c.jsxs)("div",{className:"delivery-terms ".concat(a),children:[(0,c.jsx)("b",{className:"delivery-terms__main",children:"\u041e\u043f\u043b\u0430\u0442\u0430:"})," ",(0,c.jsx)("br",{}),"\u041f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u043d\u0430\u043a\u043b\u0430\u0434\u0435\u043d\u0438\u043c \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u043c ",(0,c.jsx)("b",{children:"(\u0432\u0441\u044f \u0423\u043a\u0440\u0430\u0457\u043d\u0430)"})," \u0430\u0431\u043e \u0433\u043e\u0442\u0456\u0432\u043a\u043e\u044e \u043a\u0443\u0440'\u0454\u0440\u0443 ",(0,c.jsx)("b",{children:"(\u041a\u0438\u0457\u0432)"}),(0,c.jsx)("br",{})," \u041d\u0430 \u0431\u0430\u043d\u043a\u0456\u0432\u0441\u044c\u043a\u0443 \u043a\u0430\u0440\u0442\u0443 (\u043f\u0435\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430)",(0,c.jsx)("br",{})," \u041d\u0430 \u0440\u043e\u0437\u0440\u0430\u0445\u0443\u043d\u043a\u043e\u0432\u0438\u0439 \u0440\u0430\u0445\u0443\u043d\u043e\u043a (\u043f\u0435\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430)",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("b",{className:"delivery-terms__main",children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430:"}),(0,c.jsx)("br",{}),"\u0411\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0432\u0441\u0456\u043c\u0430 \u043f\u043e\u0448\u0442\u043e\u0432\u0430\u043c\u0438 \u0441\u043b\u0443\u0436\u0431\u0430\u043c\u0438: ",(0,c.jsx)("b",{children:"\u041d\u043e\u0432\u0430 \u041f\u043e\u0448\u0442\u0430"}),", ",(0,c.jsx)("b",{children:"\u0410\u0432\u0442\u043e\u043b\u044e\u043a\u0441"}),", ",(0,c.jsx)("b",{children:"\u0414\u0435\u043b\u0456\u0432\u0435\u0440\u0456"})]})};r.defaultProps={extraClass:""};const t=r}}]);
//# sourceMappingURL=49.94718a3f.chunk.js.map