(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{175:function(e,t,a){},176:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),l=a(65),o=a.n(l),r=a(13),s=(a(75),a(8)),i=["btn--primary","btn--outline","btn--test"],m=["btn--medium","btn--large"],u=function(e){var t=e.children,a=e.type,n=e.onClick,l=e.buttonStyle,o=e.buttonSize,r=i.includes(l)?l:i[0],u=m.includes(o)?o:m[0];return c.a.createElement(s.b,{to:"/contact-me",className:"btn-mobile"},c.a.createElement("button",{className:"btn ".concat(r," ").concat(u),onClick:n,type:a},t))};a(80);var d=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!0),i=Object(r.a)(o,2),m=i[0],d=i[1],E=function(){return l(!1)},p=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"navbar-container"},c.a.createElement(s.b,{to:"/",className:"navbar-logo",onClick:E},"RBR",c.a.createElement("i",{class:"fas fa-globe"})),c.a.createElement("div",{className:"menu-icon",onClick:function(){return l(!a)}},c.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),c.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.b,{to:"/",className:"nav-links",onClick:E},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.b,{to:"/projects",className:"nav-links",onClick:E},"Posts")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.b,{to:"/about",className:"nav-links",onClick:E},"About")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/contact-me",className:"nav-links-mobile",onClick:E},"Contact Me"))),m&&c.a.createElement(u,{buttonStyle:"btn--outline"},"CONTACT ME"))))},E=(a(27),a(46));E.a.initializeApp({apiKey:"AIzaSyDzjtIL5yZ_DarqzeqNTwnvltmXDZFItg8",authDomain:"personalsite-6b7f7.firebaseapp.com",databaseURL:"https://personalsite-6b7f7-default-rtdb.firebaseio.com",projectId:"personalsite-6b7f7",storageBucket:"personalsite-6b7f7.appspot.com",messagingSenderId:"442679242582",appId:"1:442679242582:web:ffdaca06f057a365e070f7",measurementId:"G-Y3LPE3C17P"});var p=E.a,f=(a(84),function(e){return c.a.createElement("li",{className:"cards__item"},c.a.createElement(s.b,{className:"cards__item__link",to:"/posts/"+e.id},c.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.post.label},c.a.createElement("img",{className:"cards__item__img",alt:"Travel",src:e.post.background})),c.a.createElement("div",{className:"cards__item__info"},c.a.createElement("h5",{className:"cards__item__text"},e.post.title))))}),b=function(e){var t=Object(n.useState)([]),a=Object(r.a)(t,2),l=a[0],o=a[1];return Object(n.useEffect)((function(){p.firestore().collection("posts").orderBy("date","desc").limit(2).onSnapshot((function(e){return o(e.docs)}))}),[]),c.a.createElement("div",{className:"cards"},c.a.createElement("h1",null,"Check out my recent posts"),c.a.createElement("div",{className:"cards__container"},c.a.createElement("div",{className:"cards__wrapper"},c.a.createElement("ul",{className:"cards__items"},l.map((function(e,t){return c.a.createElement(f,{next:l[t<l.length-1?t+1:0].id,prev:l[0!==t?t-1:l.length-1].id,key:e.id,id:e.id,post:e.data()})}))))))};a(85);var g=function(){return c.a.createElement("div",{className:"hero-container"},c.a.createElement("video",{src:"/videos/space.mp4",autoPlay:!0,loop:!0,muted:!0}),c.a.createElement("h1",null,"WELCOME"),c.a.createElement("p",null,"Thank you for stopping by"),c.a.createElement("div",{className:"hero-btns"},c.a.createElement(u,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"Projects")))};a(86);var h=function(){return c.a.createElement("div",{className:"footer-container"},c.a.createElement("section",{className:"footer-subscription"},c.a.createElement("p",{className:"footer-subscription-heading"},"Join my newsletter to be notified when new posts are added"),c.a.createElement("p",{className:"footer-subscription-text"},"Not too much to offer now but just wanted to add firebase writing"),c.a.createElement("div",{className:"input-areas"},c.a.createElement("form",null,c.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),c.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe")))),c.a.createElement("div",{class:"footer-links"},c.a.createElement("div",{className:"footer-link-wrapper"},c.a.createElement("div",{class:"footer-link-items"},c.a.createElement("h2",null,"Contact Me"),c.a.createElement(s.b,{to:"mailto:remalyryan@gmail.com"},"remalyryan@gmail.com"))),c.a.createElement("div",{class:"footer-link-items"},c.a.createElement("h2",null,"Social Media"),c.a.createElement("a",{href:"https://www.instagram.com/ryanremaly/"},"Instagram"),c.a.createElement("a",{href:"https://www.facebook.com/ryan.remaly/"},"Facebook"),c.a.createElement("a",{href:"https://twitter.com/RyanRemaly/"},"Twitter"))),c.a.createElement("section",{class:"social-media"},c.a.createElement("div",{class:"social-media-wrap"},c.a.createElement("div",{class:"footer-logo"},c.a.createElement(s.b,{to:"/",className:"social-logo"},"RBR",c.a.createElement("i",{class:"fas fa-space-shuttle"}))),c.a.createElement("small",{class:"website-built"},"Site built with react and GCP"),c.a.createElement("div",{class:"social-icons"},c.a.createElement("a",{class:"social-icon-link facebook",href:"https://www.facebook.com/ryan.remaly/"}," ",c.a.createElement("i",{class:"fab fa-facebook"})),c.a.createElement("a",{class:"social-icon-link github",href:"https://github.com/skillfulman2"}," ",c.a.createElement("i",{class:"fab fa-github"})),c.a.createElement("a",{class:"social-icon-link instagram",href:"https://www.instagram.com/ryanremaly/"}," ",c.a.createElement("i",{class:"fab fa-instagram"})),c.a.createElement("a",{class:"social-icon-link twitter",href:"https://twitter.com/RyanRemaly"}," ",c.a.createElement("i",{class:"fab fa-twitter"})),c.a.createElement("a",{class:"social-icon-link linkedin",href:"https://www.linkedin.com/in/ryan-remaly-24148211a/"}," ",c.a.createElement("i",{class:"fab fa-linkedin"}))))))};var v=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null),c.a.createElement(b,null),c.a.createElement(h,null))},N=a(7);function w(){return c.a.createElement("h1",{className:"about"},"About")}var k=function(e){return c.a.createElement("main",{className:"login"},!e.signedIn&&c.a.createElement(c.a.Fragment,null,!localStorage.getItem("Logging in")&&c.a.createElement("button",{onClick:function(){var e=new p.auth.GoogleAuthProvider;e.addScope("profile"),e.addScope("email"),p.auth().signInWithPopup(e).catch((function(e){console.log(e)})),localStorage.setItem("Logging in",!0)}},"use google to sign in"),localStorage.getItem("Logging in")&&c.a.createElement("p",null,"Log in progress, hold on...")),e.signedIn&&c.a.createElement("div",null,c.a.createElement("h1",null,"You are logged in to firebase"),c.a.createElement("p",null,"Welcome ",p.auth().currentUser.displayName,". You are now signed-in."),c.a.createElement("button",{onClick:function(){p.auth().signOut()}},"Sign-out"),p.auth().currentUser.photoURL&&c.a.createElement("img",{src:p.auth().currentUser.photoURL,alt:"profile"})))};function y(){return c.a.createElement("h1",{className:"contact-me"},"I can be reached at the following:")}a(87),a(88);var S=a(67),j=a.n(S),O=function(e){var t=Object(n.useState)(),a=Object(r.a)(t,2),l=a[0],o=a[1],i=Object(n.useState)(0),m=Object(r.a)(i,2),u=m[0],d=m[1],E=Object(n.useState)(0),f=Object(r.a)(E,2),b=f[0],g=f[1];console.log("-----------------"),console.log(e),console.log("-----------------"),console.log("hello"),console.log(e.id),console.log(l),console.log(u),console.log(Object(n.useState)(0).toString()),window.scrollTo(0,0),Object(n.useEffect)((function(){p.firestore().collection("posts").doc(e.match.params.id).onSnapshot((function(e){return o(e.data())}))}),[e.match.params.id]),Object(n.useEffect)((function(){p.firestore().collection("posts").orderBy("text").get().then((function(t){var a=t.docs.map((function(e){return e.id})),n=a.indexOf(e.match.params.id);g(n+1===a.length?a[0]:a[n+1]),d(0===n?a[a.length-1]:a[n-1])}))}),[e.match.params.id]);var h={};return l&&(h={parallax:{backgroundImage:"url("+l.background+")",height:"100vh",width:"100vw",backgroundAttachment:"fixed",backgroundSize:"cover",backgroundPosition:"center center"}}),c.a.createElement("main",{className:"post-detail"},l?c.a.createElement("div",null,c.a.createElement("div",{style:h.parallax},c.a.createElement("div",{className:"parallax-overlay"},c.a.createElement("div",null,c.a.createElement("h1",null,l.title)))),c.a.createElement("div",{className:"post-content"},c.a.createElement("div",{className:"admin-actions pager"},c.a.createElement(s.b,{to:"/posts/"+u},"prev"),c.a.createElement(s.b,{to:"/posts/"+b},"next")),c.a.createElement("div",{className:"post-images"}),c.a.createElement(j.a,{source:l.text}),c.a.createElement("div",{className:"post-features"},c.a.createElement("ul",null,l.javascript&&c.a.createElement("li",null,"Javascript"),l.reactjs&&c.a.createElement("li",null,"React JS"),l.userOriented&&c.a.createElement("li",null,"User oriented"),l.design&&c.a.createElement("li",null,"Design"))))):c.a.createElement("h2",{style:{width:"100vw",textAlign:"center"}},"Fetching post, hold on..."))},_=(a(175),function(e){return console.log(e.post.text),c.a.createElement("div",{className:"post"},e.post.background&&c.a.createElement("img",{src:e.post.background,alt:"hei"}),c.a.createElement(s.b,{className:"post-inner",to:"/posts/".concat(e.id)},c.a.createElement("div",null,c.a.createElement("h1",null,e.post.title))))}),I=(a(176),a(69)),C=function(e){var t=Object(n.useState)([]),a=Object(r.a)(t,2),l=a[0],o=a[1];Object(n.useEffect)((function(){p.firestore().collection("posts").orderBy("text").onSnapshot((function(e){return o(e.docs)}))}),[]);return c.a.createElement("main",{className:"posts"},e.signedIn&&c.a.createElement("div",{className:"admin-actions",onClick:function(){p.firestore().collection("posts").add({title:"",text:"",timestamp:p.firestore.FieldValue.serverTimestamp()}).then((function(e){Object(I.a)("/edit/"+e.id)})).catch((function(e){return console.log(e)}))}},c.a.createElement("i",{class:"far fa-edit",className:"edit-icon"})),l.length>0?c.a.createElement("div",{className:"posts-container"},l.map((function(t,a){return c.a.createElement(_,{next:l[a<l.length-1?a+1:0].id,prev:l[0!==a?a-1:l.length-1].id,key:t.id,id:t.id,post:t.data(),signedIn:e.signedIn})}))):c.a.createElement("p",null,"Why Getting posts, hold on..."))};var x=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){p.auth().onAuthStateChanged((function(e){e?(l(!0),localStorage.removeItem("Logging in")):l(!1)}))})),c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,null,c.a.createElement(d,null),c.a.createElement(N.c,null,c.a.createElement(N.a,{path:"/",exact:!0,component:v}),c.a.createElement(N.a,{path:"/posts/:id",component:O}),c.a.createElement(N.a,{path:"/projects",component:C}),c.a.createElement(N.a,{path:"/about",component:w}),c.a.createElement(N.a,{path:"/contact-me",component:y}),c.a.createElement(k,{path:"/login",signedIn:a}))))};o.a.render(c.a.createElement(x,null),document.getElementById("root"))},27:function(e,t,a){},70:function(e,t,a){e.exports=a(180)},75:function(e,t,a){},80:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.888249f9.chunk.js.map