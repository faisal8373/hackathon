(this.webpackJsonphackathon=this.webpackJsonphackathon||[]).push([[0],{108:function(e,a,t){},121:function(e,a,t){"use strict";t.r(a);var i=t(0),c=t.n(i),n=t(14),r=t.n(n),s=(t(108),t(164)),l=Object(s.a)({logoContainer:{margin:50},menu:{float:"left",paddingTop:20},logo:{float:"left"},options:{display:"inline",padding:10},textMargin:{marginLeft:430},btn:{margin:10,paddingLeft:20,paddingRight:30},categoriesBar:{paddingLeft:400,height:30,backgroundColor:"grey",color:"black",padding:10,fontSize:20}}),j=t(37),b=t(54),d=t(33),o=t(6),h=t(178),x=t(172),O=t(167),p=t(169),u=t(170),g=t(171),m=t(90),v=t.n(m),f=t(88),y=t.n(f),S=t(87),C=t.n(S),A=t(89),T=t.n(A),F=t(4),P=Object(s.a)({list:{width:250},fullList:{width:"auto"}});function D(){var e=P(),a=c.a.useState({top:!1,left:!1,bottom:!1,right:!1}),t=Object(d.a)(a,2),i=t[0],n=t[1],r=function(e,a){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&n(Object(b.a)(Object(b.a)({},i),{},Object(j.a)({},e,a)))}},s=function(a){return Object(F.jsx)("div",{className:Object(o.a)(e.list,Object(j.a)({},e.fullList,"top"===a||"bottom"===a)),role:"presentation",onClick:r(a,!1),onKeyDown:r(a,!1),children:Object(F.jsx)(O.a,{children:["Home","Login as Resturant","Login as Customer","Signup"].map((function(e,a){return Object(F.jsxs)(p.a,{button:!0,children:[Object(F.jsx)(u.a,{children:0===a?Object(F.jsx)(C.a,{}):1===a||2===a?Object(F.jsx)(y.a,{}):Object(F.jsx)(T.a,{})}),Object(F.jsx)(g.a,{primary:e})]},e)}))})})};return Object(F.jsx)("div",{children:["left"].map((function(e){return Object(F.jsxs)(c.a.Fragment,{children:[Object(F.jsx)(x.a,{onClick:r(e,!0),children:Object(F.jsx)(v.a,{})}),Object(F.jsx)(h.a,{anchor:e,open:i[e],onClose:r(e,!1),onOpen:r(e,!0),children:s(e)})]},e)}))})}var z=t(68),G=t(91),I=t.n(G),V=t(22);var H=function(){var e=l();return Object(F.jsxs)("div",{className:e.logoContainer,children:[Object(F.jsx)("span",{className:e.menu,children:Object(F.jsx)(D,{})}),Object(F.jsx)(V.b,{to:"/",children:Object(F.jsx)("span",{className:e.logo,children:Object(F.jsx)("img",{src:"data:image/png;base64,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",alt:"Super Meal Logo"})})}),Object(F.jsxs)("span",{className:e.textMargin,children:[Object(F.jsx)(V.b,{children:Object(F.jsx)(z.a,{className:e.options,display:"inline",children:"I am a Resturant"})}),Object(F.jsx)(V.b,{children:Object(F.jsx)(z.a,{className:e.options,display:"inline",children:"About Us"})}),Object(F.jsx)(V.b,{to:"/signup",children:Object(F.jsx)(x.a,{className:e.btn,variant:"contained",color:"primary",children:"Sign Up"})}),Object(F.jsx)(V.b,{to:"/login",children:Object(F.jsx)(x.a,{className:e.btn,variant:"contained",color:"secondary",children:"Login"})}),Object(F.jsx)("span",{className:e.cartSpan,children:Object(F.jsx)(I.a,{className:e.cartSpan})})]})]})};var N=function(){var e=l();return Object(F.jsxs)("div",{className:e.categoriesBar,children:[Object(F.jsxs)(V.b,{children:[" ",Object(F.jsx)(z.a,{className:e.options,display:"inline",children:"Arabic"})]}),Object(F.jsx)(V.b,{children:Object(F.jsx)(z.a,{className:e.options,display:"inline",children:" Italian"})}),Object(F.jsxs)(V.b,{children:[" ",Object(F.jsx)(z.a,{className:e.options,display:"inline",children:"Fast food"})]}),Object(F.jsxs)(V.b,{children:[" ",Object(F.jsx)(z.a,{className:e.options,display:"inline",children:"Sandwich"})]}),Object(F.jsxs)(V.b,{children:[" ",Object(F.jsx)(z.a,{className:e.options,display:"inline",children:"Vegetarian"})]})]})},L=t.p+"static/media/salaad-home.b881555d.png",k=Object(s.a)({saladPlate:{width:"400px",height:"500px",float:"left",paddingTop:50},search:{paddingTop:100,paddingLeft:100,float:"left",marginBottom:20},searchComponent:{height:600},input:{marginTop:3,border:"solid skyblue 2px",borderRadius:"5px",fontSize:35},btn:{fontSize:20,marginLeft:10,marginBottom:10},searchInput:{float:"left",marginLeft:20,marginTop:5},app:{float:"left",marginLeft:100,marginTop:50},getApp:{padding:20},appPic:{width:300,height:350,position:"absolute",top:250,left:1e3}}),R=t(92),B=t.n(R),E=t(93),w=t.n(E),M=t.p+"static/media/supermeal-app-screen.ee70c033.png";var X=function(){var e=k();return Object(F.jsxs)("div",{className:e.searchComponent,children:[Object(F.jsx)("div",{className:e.saladPlate,children:Object(F.jsx)("img",{className:e.salad,src:L,alt:"Salad plate",width:"400",height:"400"})}),Object(F.jsxs)("div",{className:e.search,children:[Object(F.jsx)(z.a,{variant:"h4",display:"inline",children:"Super Discounts"}),Object(F.jsx)(z.a,{variant:"h5",children:"up to 30% cashback on all orders"})]}),Object(F.jsxs)("div",{className:e.searchInput,children:[Object(F.jsx)("input",{placeholder:"Search location\u2026",className:e.input}),Object(F.jsx)(x.a,{className:e.btn,variant:"contained",color:"secondary",children:"Search"})]}),Object(F.jsxs)("div",{className:e.app,children:[Object(F.jsx)(z.a,{display:"inline",variant:"h4",children:"Get App"}),Object(F.jsxs)(z.a,{display:"inline",variant:"h4",color:"secondary",className:e.getApp,children:[Object(F.jsx)(V.b,{children:Object(F.jsx)(B.a,{})}),Object(F.jsx)(V.b,{children:Object(F.jsx)(w.a,{})})]})]}),Object(F.jsx)("div",{className:e.appPic,children:Object(F.jsx)("img",{src:M,alt:"App Screen",width:"250",height:"400"})})]})},U=Object(s.a)({main:{width:"1000",height:1e3,padding:30,margin:10,boxShadow:"10px 10px 10px grey",borderRadius:20,backgroundColor:"rgb(208, 213, 219)"}});var J=t(173),K=t(174),W=t(176),Z=t(175),q=t.p+"static/media/pizza.49f514bc.jpg",Q=Object(s.a)({root:{maxWidth:300,padding:10,margin:10,borderRadius:10,float:"left"}});function Y(){var e=Q();return Object(F.jsxs)(J.a,{className:e.root,children:[Object(F.jsxs)(K.a,{children:[Object(F.jsx)("img",{src:q,alt:"pizza",width:"300",height:"300"}),Object(F.jsxs)(Z.a,{children:[Object(F.jsx)(z.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Folk and Knives"}),Object(F.jsx)(z.a,{variant:"body2",color:"textSecondary",component:"p",children:"Chicken Fajita with extra sauce"})]})]}),Object(F.jsx)(W.a,{children:Object(F.jsx)(x.a,{size:"small",color:"primary",children:"Order Now"})})]})}var _=function(){var e=U();return console.log("resturant",{name:"Folk and Knives",address:"Kohinoor",category:"Fast Foods",city:"Faisalabad",phone:1234567,email:"folkandknives@gmail.com"}),Object(F.jsxs)("div",{className:e.main,children:[Object(F.jsx)(z.a,{variant:"h3",children:"Restaurants and Their Products"}),Object(F.jsx)(Y,{}),Object(F.jsx)(Y,{}),Object(F.jsx)(Y,{}),Object(F.jsx)(Y,{}),Object(F.jsx)(Y,{})]})},$=Object(s.a)({list:{listStyleType:"none"},list1:{float:"left",marginRight:30},list2:{float:"left",marginRight:30},list3:{float:"left",marginRight:30},list4:{float:"left",marginRight:30},list5:{float:"left",marginRight:0},footer:{backgroundColor:"rgb(3,3,3)",height:350,color:"white",paddingLeft:50}}),ee=t.p+"static/media/facebook.e764da59.png",ae=t.p+"static/media/twitter.6208f93b.png",te=t.p+"static/media/instagram.2e3b4d78.png",ie=t.p+"static/media/blogger.7a24984c.png";var ce=function(){var e=$();return Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{className:e.list1,children:Object(F.jsxs)("ul",{className:e.list,children:[Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"h5",color:"primary",children:"Super Meal"})}),Object(F.jsxs)("li",{children:[" ",Object(F.jsx)(z.a,{variant:"p",children:"Home"})]}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"I am a Resturant"})}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"Blog"})})]})}),Object(F.jsx)("div",{className:e.list2,children:Object(F.jsxs)("ul",{className:e.list,children:[Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"h5",color:"primary",children:"Need Help"})}),Object(F.jsxs)("li",{children:[" ",Object(F.jsx)(z.a,{variant:"p",children:"Contact Us"})]}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"Referral FAQs"})}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"FAQs"})})]})}),Object(F.jsx)("div",{className:e.list3,children:Object(F.jsxs)("ul",{className:e.list,children:[Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"h5",color:"primary",children:"Ppoular Restaurants"})}),Object(F.jsxs)("li",{children:[" ",Object(F.jsx)(z.a,{variant:"p",children:"Golden Apple Bahadurabad"})]}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"Red Apple PECHS"})}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"Student Biryani"})}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"Pizza Mix"})}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"Red Apple DHA"})})]})}),Object(F.jsx)("div",{className:e.list4,children:Object(F.jsxs)("ul",{className:e.list,children:[Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"h5",color:"primary",children:"Ppoular Cuisines"})}),Object(F.jsxs)("li",{children:[" ",Object(F.jsx)(z.a,{variant:"p",children:"Drinks"})]}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"Appetizers"})}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"Fast Food"})}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"Sandwich"})}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"Pizza"})}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"BBQ"})}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"Pakistani"})}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"Salads"})})]})}),Object(F.jsx)("div",{className:e.list5,children:Object(F.jsxs)("ul",{className:e.list,children:[Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"h5",color:"primary",children:"Order Food Online"})}),Object(F.jsxs)("li",{children:[" ",Object(F.jsx)("p",{children:Object(F.jsxs)(z.a,{variant:"p",children:["An online food ordering website ",Object(F.jsx)("br",{}),"for delivery, collection and executive ",Object(F.jsx)("br",{}),"dine-in. Order your favorite meal",Object(F.jsx)("br",{})," online from hundreds of restaurants ",Object(F.jsx)("br",{}),"in Pakistan."]})})]}),Object(F.jsx)("li",{children:Object(F.jsx)(z.a,{variant:"p",children:"Follow us on"})}),Object(F.jsxs)("li",{children:[Object(F.jsx)("br",{}),Object(F.jsx)("img",{src:ee,alt:"Facebook",width:"70",height:"50"}),Object(F.jsx)("img",{src:ae,alt:"Twitter",width:"50",height:"50"}),Object(F.jsx)("img",{src:te,alt:"Instagram",width:"50",height:"50"}),Object(F.jsx)("img",{src:ie,alt:"Blogger",width:"50",height:"50"})]})]})})]})};var ne=function(){var e=$();return Object(F.jsxs)("div",{className:e.footer,children:[Object(F.jsx)(ce,{}),Object(F.jsx)("div",{children:Object(F.jsxs)(z.a,{children:["2021 Supermeal. All rights reserved. Terms & Conditions- Privacy Policy ",Object(F.jsx)("br",{}),"118, Rashid Minhas Road, Block 10-A, Gulshan-Iqbal, Karachi  |  +922134610877"]})})]})},re=t(177),se=Object(s.a)({signup:{marginLeft:400,marginTop:50,width:450,borderRadius:20,padding:50,backgroundColor:"rgb(200, 222, 247)"}}),le=t(59),je=t(74),be=t.n(je),de=t(94),oe=t(76);oe.a.initializeApp({apiKey:"AIzaSyCl2xALVRpPRtXauXDAn63EHFbFyRk7V3o",authDomain:"foodstorehackathon.firebaseapp.com",projectId:"foodstorehackathon",storageBucket:"foodstorehackathon.appspot.com",messagingSenderId:"161193196975",appId:"1:161193196975:web:52f9aa36a1cb7f1ed3435a"});var he=oe.a.firestore();var xe,Oe=function(){var e=Object(le.c)((function(e){return e}));console.log("store",e.AddUserReducer);var a=se(),t=Object(i.useState)(""),c=Object(d.a)(t,2),n=c[0],r=c[1],s=Object(i.useState)(""),l=Object(d.a)(s,2),j=l[0],b=l[1],o=Object(i.useState)(""),h=Object(d.a)(o,2),O=h[0],p=h[1],u=Object(i.useState)(""),g=Object(d.a)(u,2),m=g[0],v=g[1],f=Object(i.useState)(""),y=Object(d.a)(f,2),S=y[0],C=y[1],A=Object(le.b)();return Object(F.jsxs)("div",{className:a.signup,children:[Object(F.jsx)(z.a,{variant:"h3",color:"primary",children:"User Signup"}),Object(F.jsx)(re.a,{id:"standard",label:"Name",value:n,onChange:function(e){return r(e.target.value)}}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)(re.a,{id:"basic",label:"Password",value:j,onChange:function(e){return b(e.target.value)}}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)(re.a,{id:"standard-basic1",label:"City",value:O,onChange:function(e){return p(e.target.value)}}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)(re.a,{id:"standard-basic2",label:"Email",value:m,onChange:function(e){return v(e.target.value)}}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)(re.a,{id:"standard-basic3",label:"Mobile",value:S,onChange:function(e){return C(e.target.value)}}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)(x.a,{color:"primary",variant:"contained",onClick:function(){var e;""===n||""===j||""===O||""===m||""===S?alert("One of the required field is left blank"):(A((e={userName:n,password:j,city:O,email:m,mobile:S},function(){var a=Object(de.a)(be.a.mark((function a(t){return be.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,he.collection("users").add(e);case 3:console.log("data added into firebase in action"),t({type:"ADD_USER",payload:e}),a.next=11;break;case 7:a.prev=7,a.t0=a.catch(0),console.log("error",a.t0),alert(a.t0);case 11:return a.prev=11,a.finish(11);case 13:case"end":return a.stop()}}),a,null,[[0,7,11,13]])})));return function(e){return a.apply(this,arguments)}}())),r(""),b(""),p(""),v(""),C(""),alert("Data added to firebase"))},children:"Sign up"})]})},pe=t(60),ue=t(95),ge=(xe={userName:"",password:"",city:""},Object(j.a)(xe,"password",""),Object(j.a)(xe,"email",""),Object(j.a)(xe,"mobile",""),xe);var me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_USER":return Object(b.a)(Object(b.a)({},e),{},{user:a.payload});default:return e}},ve=Object(pe.b)({AddUserReducer:me}),fe=Object(pe.c)(ve,Object(pe.a)(ue.a)),ye=t(19);var Se=function(){var e=Object(i.useState)(""),a=Object(d.a)(e,2),t=a[0],c=a[1],n=Object(i.useState)(""),r=Object(d.a)(n,2),s=r[0],l=r[1],j=se();return Object(F.jsxs)("div",{className:j.signup,children:[Object(F.jsx)(z.a,{variant:"h3",color:"primary",children:"User Login"}),Object(F.jsx)(re.a,{id:"standard-basic2",label:"Email",value:t,onChange:function(e){return c(e.target.value)}}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)(re.a,{id:"basic",label:"Password",value:s,onChange:function(e){return l(e.target.value)}}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)(x.a,{color:"primary",variant:"contained",onClick:function(){},children:"Sign up"})]})};var Ce=function(){return Object(F.jsx)("div",{children:Object(F.jsxs)(V.a,{children:[Object(F.jsx)(H,{}),Object(F.jsx)(N,{}),Object(F.jsxs)(ye.c,{children:[Object(F.jsxs)(ye.a,{exact:!0,path:"/",children:[Object(F.jsx)(X,{}),Object(F.jsx)(_,{}),Object(F.jsx)(ne,{})]}),Object(F.jsx)(ye.a,{exact:!0,path:"/signup",children:Object(F.jsx)(Oe,{})}),Object(F.jsx)(ye.a,{exact:!0,path:"/login",children:Object(F.jsx)(Se,{})})]})]})})};var Ae=function(){return Object(F.jsx)("div",{children:Object(F.jsx)(Ce,{})})},Te=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,181)).then((function(a){var t=a.getCLS,i=a.getFID,c=a.getFCP,n=a.getLCP,r=a.getTTFB;t(e),i(e),c(e),n(e),r(e)}))};r.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(le.a,{store:fe,children:Object(F.jsx)(V.a,{children:Object(F.jsx)(Ae,{})})})}),document.getElementById("root")),Te()}},[[121,1,2]]]);
//# sourceMappingURL=main.b25f10dd.chunk.js.map