(this["webpackJsonptcss-app"]=this["webpackJsonptcss-app"]||[]).push([[0],[,,,,,,,,,function(e,t,s){},,,,,,,,function(e,t,s){},,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(11),n=s.n(r),i=(s(17),s(5)),o=s(2),l=s(8),d=s.n(l),j=s(12),h=s(3),b=(s(9),s(0)),p=function(e){var t=e.title,s=e.calories,c=e.image,a=(e.ingredients,e.servings),r=e.url,n=Math.round(s)/a;return Object(b.jsxs)("div",{className:"cards",children:[Object(b.jsx)("h2",{className:"recipe-title",children:t}),Object(b.jsx)("a",{href:r,children:Object(b.jsx)("img",{className:"gifs",src:c,alt:t})}),Object(b.jsxs)("h4",{className:"calories",children:[Math.round(n)," Calories Per Serving"]}),Object(b.jsx)("hr",{className:"recipe-seperater"})]})};s(20).config();var m=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(""),n=Object(h.a)(r,2),i=n[0],o=n[1],l=Object(c.useState)("Rhino"),m=Object(h.a)(l,2),u=m[0],x=m[1],f=Object(c.useState)(null),O=Object(h.a)(f,2),g=O[0],N=O[1];Object(c.useEffect)((function(){v()}),[u]);var v=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.edamam.com/search?q=".concat(u,"&app_id=").concat("d843d4c8","&app_key=").concat("2e30a51ebccb2f3115c10140b3e38ea0","&to=20")).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. Error Code: ".concat(e.status));return e.json()})).then((function(e){if(0===e.count)throw Error("No results.");a(e.hits),N(null)})).catch((function(e){N(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"Recipe",children:[Object(b.jsxs)("p",{className:"db-reference",children:["Powered by:",Object(b.jsxs)("a",{className:"reference-logo-container",href:"https://www.edamam.com/",children:[Object(b.jsx)("img",{className:"reference-logo2",src:"./img/small-logo.png",alt:"Edamam Logo"}),Object(b.jsx)("img",{className:"reference-logo",src:"./img/logo.png",alt:"Edamam"})]})]}),Object(b.jsx)("h1",{className:"page-name",children:"Recipe Search"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x(i),o("")},className:"search-form",children:[Object(b.jsx)("input",{className:"search-bar",type:"text",value:i,onChange:function(e){o(e.target.value)},placeholder:"Search"}),Object(b.jsx)("button",{className:"search-btn",type:"submit",children:Object(b.jsx)("i",{className:"fas fa-search"})})]}),Object(b.jsxs)("div",{className:"search-results",children:[g&&Object(b.jsx)("div",{className:"error-container",children:Object(b.jsx)("h2",{className:"error-message",children:g})}),Object(b.jsx)("p",{className:"follow-recipe-instructions",children:"Select a recipe:"}),s.map((function(e){return Object(b.jsx)(p,{title:e.recipe.label,calories:e.recipe.calories,servings:e.recipe.yield,image:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.shareAs},e.recipe.image)}))]}),Object(b.jsx)("footer",{})]})},u=(s(23),function(){!function(){var e=localStorage.getItem("TCSSuserName");if(null===e||""===e)localStorage.setItem("TCSSuserName",prompt("Welcome to Take Charge Strenght Studios! What can I call you?"))}();var e=Object(c.useState)([]),t=Object(h.a)(e,2),s=t[0],a=(t[1],Object(c.useState)(null)),r=Object(h.a)(a,2),n=r[0];r[1],localStorage.getItem("TCSS-quote");return Object(b.jsxs)("div",{className:"greeting-container",children:[Object(b.jsxs)("div",{className:"scene",children:[Object(b.jsxs)("div",{className:"banner",children:[Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"}),Object(b.jsx)("div",{className:"panel"})]}),Object(b.jsx)("div",{className:"screen"})]}),Object(b.jsxs)("div",{className:"quote-container",children:[Object(b.jsx)("i",{class:"fas fa-quote-left"}),Object(b.jsx)("h3",{className:"quote",children:"I don't chase, I attract. What belongs to me will find me. Simple."}),Object(b.jsx)("i",{class:"fas fa-quote-right"}),n&&Object(b.jsx)("h1",{children:n}),s&&Object(b.jsx)("p",{className:"quote",children:s.text}),s&&Object(b.jsx)("p",{className:"author",children:s.author})]})]})});s(24);var x=function(){return Object(b.jsxs)("div",{className:"trainers-page",children:[Object(b.jsx)("h1",{children:"Meet Your Trainers!"}),Object(b.jsxs)("div",{className:"trainer-links",children:[Object(b.jsx)(i.b,{to:"/trainers/Chrissy",children:Object(b.jsx)("h1",{children:"Chrissy"})}),Object(b.jsx)(i.b,{to:"/trainers/James",children:Object(b.jsx)("h1",{children:"James"})}),Object(b.jsx)(i.b,{to:"/trainers/Jake",children:Object(b.jsx)("h1",{children:"Jake"})})]})]})};s(25);var f=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(null),n=Object(h.a)(r,2),i=n[0],o=n[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{className:"db-reference",children:["Powered by:",Object(b.jsx)("a",{className:"reference-logo-container",href:"https://rapidapi.com/hub",children:Object(b.jsx)("img",{className:"rapidAPI-logo",src:"./img/rapidAPI-logo.svg",alt:"Rapid API Logo"})})]}),Object(b.jsxs)("div",{className:"header-container",children:[Object(b.jsx)("h1",{className:"page-name",children:"Exersices"}),Object(b.jsx)("h3",{children:"What would you like to workout today?"})]}),Object(b.jsxs)("div",{className:"body-parts-container",children:[Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){a(e)})).catch((function(e){o(e.message)}))},children:"Chest"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){a(e)})).catch((function(e){o(e.message)}))},children:"Back"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){a(e)})).catch((function(e){o(e.message)}))},children:"Waist / Abs"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20arms",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){a(e)})).catch((function(e){o(e.message)}))},children:"Upper Arms"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20arms",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){a(e)})).catch((function(e){o(e.message)}))},children:"Lower Arms"})]}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/neck",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){a(e)})).catch((function(e){o(e.message)}))},children:"Neck"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){a(e)})).catch((function(e){o(e.message)}))},children:"Shoulders"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){a(e)})).catch((function(e){o(e.message)}))},children:"Cardio"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20legs",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){a(e)})).catch((function(e){o(e.message)}))},children:"Upper Legs"}),Object(b.jsx)("li",{className:"body-part-btn",onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20legs",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){if(!e.ok)throw Error("Could not fetch the requested data. ");return e.json()})).then((function(e){a(e)})).catch((function(e){o(e.message)}))},children:"Lower Legs"})]})]}),Object(b.jsxs)("div",{className:"results-container",children:[i&&Object(b.jsxs)("h4",{children:[i,"Please message us on ",Object(b.jsx)("a",{href:"https://www.facebook.com/takechargestrengthstudio",children:Object(b.jsx)("i",{className:"fab fa-facebook-square 3x"})})," to resolve the issue."]}),s.map((function(e){return Object(b.jsxs)("div",{className:"single-exercise",children:[Object(b.jsx)("img",{className:"gifs",src:(t=e.gifUrl,t.replace("http","https")),alt:e.name}),Object(b.jsx)("figcaption",{children:e.name.toUpperCase()})]},e.id);var t}))]})]})};var O=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Jake"})})};var g=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"James"})})};var N=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Chrissy"})})};s(26);var v=function(){return Object(b.jsx)("div",{className:"hidden-menu-container",children:Object(b.jsx)("h1",{children:"You found me!"})})},k=(s(27),function(){do{localStorage.removeItem("TCSSuserName"),localStorage.setItem("TCSSuserName",prompt("What would you like to change your name to?"))}while(""===localStorage.getItem("TCSSuserName").trim())});var y=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,element:Object(b.jsx)(u,{})}),Object(b.jsx)(o.a,{path:"/recipes",element:Object(b.jsx)(m,{})}),Object(b.jsx)(o.a,{path:"/exercises",element:Object(b.jsx)(f,{})}),Object(b.jsx)(o.a,{path:"/trainers",element:Object(b.jsx)(x,{})}),Object(b.jsx)(o.a,{path:"/trainers/Jake",element:Object(b.jsx)(O,{})}),Object(b.jsx)(o.a,{path:"/trainers/James",element:Object(b.jsx)(g,{})}),Object(b.jsx)(o.a,{path:"/trainers/Chrissy",element:Object(b.jsx)(N,{})}),Object(b.jsx)(o.a,{path:"/hidden_menu",element:Object(b.jsx)(v,{})})]}),Object(b.jsxs)("div",{className:"nav-container",children:[Object(b.jsxs)("div",{className:"icon-container",children:[Object(b.jsx)("i",{title:"Exercises",className:"fas fa-cog fa-2x nav-icon",onClick:k}),Object(b.jsx)(i.b,{to:"/recipes",children:Object(b.jsx)("i",{title:"Recipe Search",className:"fas fa-utensils fa-2x nav-icon"})}),Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)("img",{className:"logo",src:"./img/TCS-logo2.png",alt:"TCSS Logo"})}),Object(b.jsx)(i.b,{to:"/exercises",children:Object(b.jsx)("i",{title:"Exercises",className:"fas fa-dumbbell fa-2x nav-icon"})}),Object(b.jsx)(i.b,{to:"/trainers",children:Object(b.jsx)("i",{title:"Trainers",className:"fas fa-users fa-2x nav-icon"})})]}),Object(b.jsx)(i.b,{to:"/hidden_menu",children:Object(b.jsx)("hr",{className:"hidden-menu-btn"})})]})]})})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,29)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),r(e),n(e)}))};n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),C()}],[[28,1,2]]]);
//# sourceMappingURL=main.6251df35.chunk.js.map