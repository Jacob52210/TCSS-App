(this["webpackJsonptcss-app"]=this["webpackJsonptcss-app"]||[]).push([[0],{12:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(13),r=c.n(i),j=(c(18),c(8)),a=c(2),l=c(4),o=c(5),b=c(7),h=c(6),O=(c(19),c(0)),d=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Exercises"}),Object(O.jsx)("h3",{children:"Will you be working out in the gym today?"}),Object(O.jsxs)("div",{className:"options-container",children:[Object(O.jsx)(j.b,{to:"/no-equipment",children:Object(O.jsx)("i",{className:"fas fa-times fa-5x"})}),Object(O.jsx)(j.b,{to:"/equipment",children:Object(O.jsx)("i",{className:"fas fa-check fa-5x"})})]})]})}}]),c}(n.Component),u=d,x=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Recipes"})})}}]),c}(n.Component),m=x;c(21);!function(){var e=localStorage.getItem("userName");if(null===e||""===e)localStorage.setItem("userName",prompt("Welcome to Take Charge Strenght Studios! What can I call you?"))}();var p=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"greeting-container",children:[Object(O.jsx)("h1",{children:"Welcome "+localStorage.getItem("userName")+"!"}),Object(O.jsx)("h3",{children:"Please be patient as we develope the app."})]})}}]),c}(n.Component),f=p,g=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Trainers"})})}}]),c}(n.Component),v=g,y=(c(12),function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Yes Gym"}),Object(O.jsx)("h3",{children:"What would you like to workout today?"}),Object(O.jsxs)("div",{className:"body-parts-container",children:[Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Chest"}),Object(O.jsx)("li",{children:"Back"}),Object(O.jsx)("li",{children:"Waist / Abs"}),Object(O.jsx)("li",{children:"Upper Arms"}),Object(O.jsx)("li",{children:"Lower Arms"})]}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Neck"}),Object(O.jsx)("li",{children:"Shoulders"}),Object(O.jsx)("li",{children:"Cardio"}),Object(O.jsx)("li",{children:"Upper Legs"}),Object(O.jsx)("li",{children:"Lower Legs"})]})]})]})}}]),c}(n.Component)),N=y,k=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"No Gym"}),Object(O.jsx)("h3",{children:"What would you like to workout today?"}),Object(O.jsxs)("div",{className:"body-parts-container",children:[Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Chest"}),Object(O.jsx)("li",{children:"Back"}),Object(O.jsx)("li",{children:"Waist / Abs"}),Object(O.jsx)("li",{children:"Upper Arms"}),Object(O.jsx)("li",{children:"Lower Arms"})]}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Neck"}),Object(O.jsx)("li",{children:"Shoulders"}),Object(O.jsx)("li",{children:"Cardio"}),Object(O.jsx)("li",{children:"Upper Legs"}),Object(O.jsx)("li",{children:"Lower Legs"})]})]})]})}}]),c}(n.Component),C=k,S=(c(22),function(){do{localStorage.removeItem("userName"),localStorage.setItem("userName",prompt("Enter A New Name:"))}while(""===localStorage.getItem("userName").trim())});var w=function(){return Object(O.jsx)(j.a,{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)(a.c,{children:[Object(O.jsx)(a.a,{path:"/",exact:!0,element:Object(O.jsx)(f,{})}),Object(O.jsx)(a.a,{path:"/recipes",element:Object(O.jsx)(m,{})}),Object(O.jsx)(a.a,{path:"/exercises",element:Object(O.jsx)(u,{})}),Object(O.jsx)(a.a,{path:"/trainers",element:Object(O.jsx)(v,{})}),Object(O.jsx)(a.a,{path:"/no-equipment",element:Object(O.jsx)(C,{})}),Object(O.jsx)(a.a,{path:"/equipment",element:Object(O.jsx)(N,{})})]}),Object(O.jsxs)("div",{className:"nav-container",children:[Object(O.jsx)("i",{title:"Exercises",className:"fas fa-cog fa-2x",onClick:S}),Object(O.jsx)(j.b,{to:"/recipes",children:Object(O.jsx)("i",{title:"Recipe Search",className:"fas fa-utensils fa-2x"})}),Object(O.jsx)(j.b,{to:"/",children:Object(O.jsx)("img",{src:"/img/TCS-logo2.png",alt:"TCSS Logo",title:"Change Your Name"})}),Object(O.jsx)(j.b,{to:"/exercises",children:Object(O.jsx)("i",{title:"Exercises",className:"fas fa-dumbbell fa-2x"})}),Object(O.jsx)(j.b,{to:"/trainers",children:Object(O.jsx)("i",{title:"Trainers",className:"fas fa-users fa-2x"})})]})]})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),L()}},[[23,1,2]]]);
//# sourceMappingURL=main.a2066abe.chunk.js.map