(this["webpackJsonptcss-app"]=this["webpackJsonptcss-app"]||[]).push([[0],{13:function(e,t,c){},21:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(15),n=c.n(r),i=(c(21),c(5)),o=c(2),d=c(12),h=c.n(d),l=c(16),p=c(3),b=(c(13),c(0)),j=function(e){var t=e.title,c=e.calories,a=e.image,s=e.ingredients,r=e.servings,n=Math.round(c)/r;return Object(b.jsxs)("div",{className:"cards",children:[Object(b.jsx)("h2",{className:"recipe-title",children:t}),Object(b.jsxs)("h4",{className:"calories",children:[Math.round(n)," Calories Per Serving (Serves ",r,")"]}),Object(b.jsx)("img",{className:"gifs",src:a,alt:t}),Object(b.jsx)("ul",{className:"ingredients-container",children:s.map((function(e,t){return Object(b.jsx)("li",{className:"ingredient",children:e.text},t)}))}),Object(b.jsx)("hr",{})]})};c(24).config();var u=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(""),n=Object(p.a)(r,2),i=n[0],o=n[1],d=Object(a.useState)("Rhino"),u=Object(p.a)(d,2),f=u[0],m=u[1],x=Object(a.useState)(null),O=Object(p.a)(x,2),g=O[0],k=O[1];Object(a.useEffect)((function(){v()}),[f]);var v=function(){var e=Object(l.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("d843d4c8","&app_key=").concat("2e30a51ebccb2f3115c10140b3e38ea0","&to=20")).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){console.log(e.hits),s(e.hits)})).catch((function(e){k(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"Recipe",children:[Object(b.jsx)("h1",{children:"Recipe Search"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(i),o("")},className:"search-form",children:[Object(b.jsx)("input",{className:"search-bar",type:"text",value:i,onChange:function(e){o(e.target.value)},placeholder:"Search"}),Object(b.jsx)("button",{className:"search-btn",type:"submit",children:Object(b.jsx)("i",{className:"fas fa-search"})})]}),Object(b.jsxs)("div",{className:"search-results",children:[g&&Object(b.jsxs)("h4",{children:[g,"Please message us on ",Object(b.jsx)("a",{href:"https://www.facebook.com/takechargestrengthstudio",children:Object(b.jsx)("i",{className:"fab fa-facebook-square 3x"})})," to resolve the issue."]}),c.map((function(e){return Object(b.jsx)(j,{title:e.recipe.label,calories:e.recipe.calories,servings:e.recipe.yield,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.image)}))]}),Object(b.jsx)("footer",{})]})},f=c(6),m=c(7),x=c(9),O=c(8);c(27);!function(){var e=localStorage.getItem("TCSSuserName");if(null===e||""===e)localStorage.setItem("TCSSuserName",prompt("Welcome to Take Charge Strenght Studios! What can I call you?"))}();var g=function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){return Object(f.a)(this,c),t.apply(this,arguments)}return Object(m.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"greeting-container",children:[Object(b.jsx)("h1",{children:"Welcome "+localStorage.getItem("TCSSuserName")+"!"}),Object(b.jsx)("h3",{children:"Please be patient as we develop the app."}),Object(b.jsx)("div",{className:"quote-container",children:Object(b.jsx)("p",{children:'"I don\'t chase. I attract. What belongs to me will find me. Simple."'})})]})}}]),c}(a.Component),k=g,v=function(e){Object(x.a)(c,e);var t=Object(O.a)(c);function c(){return Object(f.a)(this,c),t.apply(this,arguments)}return Object(m.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Trainers"})})}}]),c}(a.Component),y=v;c(28);var N=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(null),n=Object(p.a)(r,2),i=n[0],o=n[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"header-container",children:[Object(b.jsx)("h1",{children:"Exersices"}),Object(b.jsx)("h3",{children:"What would you like to workout today?"})]}),Object(b.jsxs)("div",{className:"body-parts-container",children:[Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){s(e)})).catch((function(e){o(e.message)}))},children:"Chest"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){s(e)})).catch((function(e){o(e.message)}))},children:"Back"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){s(e)})).catch((function(e){o(e.message)}))},children:"Waist / Abs"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20arms",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){s(e)})).catch((function(e){o(e.message)}))},children:"Upper Arms"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20arms",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){s(e)})).catch((function(e){o(e.message)}))},children:"Lower Arms"})]}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/neck",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){s(e)})).catch((function(e){o(e.message)}))},children:"Neck"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){s(e)})).catch((function(e){o(e.message)}))},children:"Shoulders"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){s(e)})).catch((function(e){o(e.message)}))},children:"Cardio"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20legs",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){s(e)})).catch((function(e){o(e.message)}))},children:"Upper Legs"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20legs",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){s(e)})).catch((function(e){o(e.message)}))},children:"Lower Legs"})]})]}),Object(b.jsxs)("div",{className:"results-container",children:[i&&Object(b.jsxs)("h4",{children:[i,"Please message us on ",Object(b.jsx)("a",{href:"https://www.facebook.com/takechargestrengthstudio",children:Object(b.jsx)("i",{className:"fab fa-facebook-square 3x"})})," to resolve the issue."]}),c.map((function(e){return Object(b.jsxs)("div",{className:"single-exercise",children:[Object(b.jsx)("img",{className:"gifs",src:e.gifUrl,alt:e.name}),Object(b.jsx)("figcaption",{children:e.name.toUpperCase()})]},e.id)}))]})]})},C=(c(29),function(){do{localStorage.removeItem("TCSSuserName"),localStorage.setItem("TCSSuserName",prompt("What would you like to change your name to?"))}while(""===localStorage.getItem("TCSSuserName").trim())});var S=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,element:Object(b.jsx)(k,{})}),Object(b.jsx)(o.a,{path:"/recipes",element:Object(b.jsx)(u,{})}),Object(b.jsx)(o.a,{path:"/exercises",element:Object(b.jsx)(N,{})}),Object(b.jsx)(o.a,{path:"/trainers",element:Object(b.jsx)(y,{})})]}),Object(b.jsxs)("div",{className:"nav-container",children:[Object(b.jsx)("i",{title:"Exercises",className:"fas fa-cog fa-2x nav-icon",onClick:C}),Object(b.jsx)(i.b,{to:"/recipes",children:Object(b.jsx)("i",{title:"Recipe Search",className:"fas fa-utensils fa-2x nav-icon"})}),Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)("img",{className:"logo",src:"./img/TCS-logo2.png",alt:"TCSS Logo"})}),Object(b.jsx)(i.b,{to:"/exercises",children:Object(b.jsx)("i",{title:"Exercises",className:"fas fa-dumbbell fa-2x nav-icon"})}),Object(b.jsx)(i.b,{to:"/trainers",children:Object(b.jsx)("i",{title:"Trainers",className:"fas fa-users fa-2x nav-icon"})})]})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),r(e),n(e)}))};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),w()}},[[30,1,2]]]);
//# sourceMappingURL=main.ba130d6b.chunk.js.map