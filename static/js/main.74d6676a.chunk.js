(this["webpackJsonptcss-app"]=this["webpackJsonptcss-app"]||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),r=c(12),s=c.n(r),a=(c(17),c(9)),o=c(2),d=c(5),p=c(6),h=c(8),l=c(7),j=c(1),b=function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(p.a)(c,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Recipes"})})}}]),c}(i.Component),u=b;c(19);!function(){var e=localStorage.getItem("TCSSuserName");if(null===e||""===e)localStorage.setItem("TCSSuserName",prompt("Welcome to Take Charge Strenght Studios! What can I call you?"))}();var x=function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(p.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"greeting-container",children:[Object(j.jsx)("h1",{children:"Welcome "+localStorage.getItem("TCSSuserName")+"!"}),Object(j.jsx)("h3",{children:"Please be patient as we develop the app."}),Object(j.jsx)("div",{className:"quote-container",children:Object(j.jsx)("p",{children:'"I don\'t chase. I attract. What belongs to me will find me. Simple."'})})]})}}]),c}(i.Component),f=x,m=function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(p.a)(c,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Trainers"})})}}]),c}(i.Component),O=m,g=c(4);c(20);var k=function(){var e=Object(i.useState)([]),t=Object(g.a)(e,2),c=t[0],n=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"header-container",children:[Object(j.jsx)("h1",{children:"Exersices"}),Object(j.jsx)("h3",{children:"What would you like to workout today?"})]}),Object(j.jsxs)("div",{className:"body-parts-container",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.error(e)}))},children:"Chest"}),Object(j.jsx)("li",{onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.error(e)}))},children:"Back"}),Object(j.jsx)("li",{onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.error(e)}))},children:"Waist / Abs"}),Object(j.jsx)("li",{onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20arms",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.error(e)}))},children:"Upper Arms"}),Object(j.jsx)("li",{onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20arms",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.error(e)}))},children:"Lower Arms"})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/neck",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.error(e)}))},children:"Neck"}),Object(j.jsx)("li",{onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.error(e)}))},children:"Shoulders"}),Object(j.jsx)("li",{onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.error(e)}))},children:"Cardio"}),Object(j.jsx)("li",{onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20legs",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.error(e)}))},children:"Upper Legs"}),Object(j.jsx)("li",{onClick:function(){fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20legs",{method:"GET",headers:{"x-rapidapi-host":"exercisedb.p.rapidapi.com","x-rapidapi-key":"a7db697272mshf83894164fb9651p19c31ejsn385335820313"}}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.error(e)}))},children:"Lower Legs"})]})]}),Object(j.jsxs)("div",{className:"results-container",children:[Object(j.jsx)("h2",{children:"Your results are below:"}),c.map((function(e){return Object(j.jsxs)("div",{className:"single-exercise",children:[Object(j.jsx)("img",{className:"gifs",src:e.gifUrl,alt:e.name}),Object(j.jsx)("figcaption",{children:e.name.toUpperCase()})]},e.id)}))]})]})},y=(c(21),function(){do{localStorage.removeItem("TCSSuserName"),localStorage.setItem("TCSSuserName",prompt("What would you like to change your name to?"))}while(""===localStorage.getItem("TCSSuserName").trim())});var C=function(){return Object(j.jsx)(a.a,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",exact:!0,element:Object(j.jsx)(f,{})}),Object(j.jsx)(o.a,{path:"/recipes",element:Object(j.jsx)(u,{})}),Object(j.jsx)(o.a,{path:"/exercises",element:Object(j.jsx)(k,{})}),Object(j.jsx)(o.a,{path:"/trainers",element:Object(j.jsx)(O,{})})]}),Object(j.jsxs)("div",{className:"nav-container",children:[Object(j.jsx)("i",{title:"Exercises",className:"fas fa-cog fa-2x",onClick:y}),Object(j.jsx)(a.b,{to:"/recipes",children:Object(j.jsx)("i",{title:"Recipe Search",className:"fas fa-utensils fa-2x"})}),Object(j.jsx)(a.b,{to:"/",children:Object(j.jsx)("img",{className:"logo",src:"./img/TCS-logo2.png",alt:"TCSS Logo"})}),Object(j.jsx)(a.b,{to:"/exercises",children:Object(j.jsx)("i",{title:"Exercises",className:"fas fa-dumbbell fa-2x"})}),Object(j.jsx)(a.b,{to:"/trainers",children:Object(j.jsx)("i",{title:"Trainers",className:"fas fa-users fa-2x"})})]})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),i(e),n(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),S()}},[[22,1,2]]]);
//# sourceMappingURL=main.74d6676a.chunk.js.map