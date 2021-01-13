(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{39:function(n,t,e){"use strict";e.r(t);var r=e(2),i=e(1),c=e.n(i),o=e(21),a=e.n(o),s=e(5),l=e(10),d=e(6),j=e(15),u=e(27),h=e(25),x=e(26);function b(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 30%;\n\n  li {\n    text-decoration: none;\n    color: white;\n    list-style: none;\n    transition: all 0.3s ease;\n  }\n\n  li:hover {\n    color: #f7ec77;\n  }\n\n  @media (max-width: 1024px) {\n    width: 40%;\n  }\n\n  @media (max-width: 768px) {\n    display: ",";\n    flex-direction: column;\n    width: 100%;\n    padding: 0;\n\n    li {\n      text-align: center;\n      padding: 0.5rem;\n    }\n    li:hover {\n      color: white;\n      background: #474b52;\n    }\n  }\n"]);return b=function(){return n},n}var p=d.a.ul(b(),(function(n){return n.open?"block":"none"})),O=function(n){var t=n.open;return Object(r.jsxs)(p,{open:t,children:[Object(r.jsx)(l.b,{to:"/",style:{textDecoration:"none"},children:Object(r.jsxs)("li",{children:[" ",Object(r.jsx)(h.a,{})," Home"]})}),Object(r.jsx)(l.b,{to:"/shop",style:{textDecoration:"none"},children:Object(r.jsxs)("li",{children:[" ",Object(r.jsx)(j.b,{})," Shop"]})}),Object(r.jsx)(l.b,{to:"/cart",style:{textDecoration:"none"},children:Object(r.jsxs)("li",{children:[" ",Object(r.jsx)(x.a,{}),"Cart"]})})]})};function f(){var n=Object(s.a)(["\n  display: none;\n  cursor: pointer;\n\n  div {\n    width: 25px;\n    height: 3px;\n    margin: 4px;\n    background: white;\n    transition: all 0.3s ease;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n\n  @media (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 2.5%;\n    right: 6%;\n  }\n"]);return f=function(){return n},n}var m=d.a.div(f(),(function(n){return n.open?"rotate(-45deg) translate(-5px, 5px)":"rotate(0)"}),(function(n){return n.open?"0":"1"}),(function(n){return n.open?"rotate(45deg) translate(-5px, -5px)":"rotate(0)"})),g=function(){var n=Object(i.useState)(!1),t=Object(u.a)(n,2),e=t[0],c=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(m,{open:e,onClick:function(){return c(!e)},children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]}),Object(r.jsx)(O,{open:e})]})};function v(){var n=Object(s.a)(["\n  font-size: 2rem;\n  color: white;\n"]);return v=function(){return n},n}function y(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #1b7fbd;\n  min-height: 6vh;\n  padding: 0 3rem;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]);return y=function(){return n},n}var w=d.a.nav(y()),k=d.a.h2(v()),z=function(){return Object(r.jsxs)(w,{children:[Object(r.jsx)(l.b,{to:"/",style:{textDecoration:"none"},children:Object(r.jsxs)(k,{children:["Odinzom ",Object(r.jsx)(j.a,{style:{verticalAlign:"middle"}})]})}),Object(r.jsx)(g,{})]})},S=e.p+"static/media/space.554afaf7.jpeg";function B(){var n=Object(s.a)(['\n\n  h2 {\n    text-align: center;\n    font-size: 2rem;\n    color: #595cae;\n  }\n\n  h2:after {\n    content: "";\n    position: absolute";\n    height: 3px;\n    width: 25px;\n    background: #f9ed69;\n  }\n']);return B=function(){return n},n}function H(){var n=Object(s.a)(["\n  margin-top: -2rem;\n  min-height: 50vh;\n  background: url(",") center;\n  background-size: cover;\n\n  h1 {\n    letter-spacing: 2px;\n    font-size: 3rem;\n    text-align: center;\n    color: white;\n    padding-top: 22vh;\n  }\n"]);return H=function(){return n},n}var C=d.a.div(H(),S),D=d.a.div(B()),E=function(){var n=document.getElementById("title");return null!==n&&(n.innerHTML="Odinzom | Home"),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(C,{children:Object(r.jsx)("h1",{children:"The Billionaire's Planet Shop"})}),Object(r.jsx)(D,{children:Object(r.jsx)("h2",{children:"Our Services"})})]})};function I(){var n=Object(s.a)(["\n  text-align: center;\n"]);return I=function(){return n},n}var M=d.a.h1(I()),T=function(){var n=document.getElementById("title");return null!==n&&(n.innerHTML="Odinzom | Shop"),Object(r.jsx)(M,{children:"Shop"})};function L(){var n=Object(s.a)(["\n  text-align: center;\n"]);return L=function(){return n},n}var F=d.a.h1(L()),J=function(){var n=document.getElementById("title");return null!==n&&(n.innerHTML="Odinzom | Cart"),Object(r.jsx)(F,{children:"Cart"})},A=e(3),P=function(){return Object(r.jsxs)(l.a,{children:[Object(r.jsx)(z,{}),Object(r.jsxs)(A.c,{children:[Object(r.jsx)(A.a,{path:"/",exact:!0,component:E}),Object(r.jsx)(A.a,{path:"/shop",exact:!0,component:T}),Object(r.jsx)(A.a,{path:"/cart",exact:!0,component:J})]})]})};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(P,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.afa30ea4.chunk.js.map