(this["webpackJsonppokedex-react-app"]=this["webpackJsonppokedex-react-app"]||[]).push([[0],{98:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(22),r=a.n(c),o=a(37),s=a(121),p=a(29),l=a(113),d=a(114),j=a(122),h=a(115),b=a(116),m=a(112),u=a(32),g=a.n(u),x=a(2),O=Object(m.a)({imageContainer:{width:"100vw",justifyContent:"center"},image:{width:"40vw","@media (max-width: 1024px)":{width:"100%",margin:30}},Title:{marginTop:"50px",color:"#1d3557",fontFamily:"Roboto",fontSize:"30px",fontWeight:500,textAlign:"center"},Subtitle:{color:"#1d3557",fontFamily:"Roboto",fontSize:"20px",fontWeight:500},Boton:{justifySelf:"center",margin:20,padding:5,backgroundColor:"#e63946",color:"white","&:hover":{backgroundColor:"#457b9d"}}});function f(e){var t=e.history,a=e.match,i=O(),c=a.params.pokemonId,r=Object(n.useState)(void 0),o=Object(p.a)(r,2),s=o[0],m=o[1];Object(n.useEffect)((function(){g.a.get("https://pokeapi.co/api/v2/pokemon/".concat(c,"/")).then((function(e){var t=e.data;m(t)})).catch((function(e){m(!1)}))}),[c]);return Object(x.jsxs)(x.Fragment,{children:[void 0===s&&Object(x.jsx)(h.a,{}),void 0!==s&&s&&function(){var e=s.height,t=s.name,a=s.id,n=s.weight,c=s.types,r="https://pokeres.bastionbot.org/images/pokemon/".concat(a,".png");return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(l.a,{variant:"h3",className:i.Title,children:[a," - ",t.charAt(0).toUpperCase()+t.slice(1)]}),Object(x.jsx)(d.a,{container:!0,className:i.imageContainer,children:Object(x.jsx)("img",{src:r,className:i.image})}),Object(x.jsxs)(j.a,{display:"flex",flexDirection:"column",alignItems:"center",margin:"0px 0px 30px 0px",children:[Object(x.jsx)(l.a,{variant:"h5",className:i.Subtitle,children:"Info"}),Object(x.jsxs)(l.a,{variant:"subtitle1",children:["Height: ",e]}),Object(x.jsxs)(l.a,{variant:"subtitle1",children:["Weight: ",n]}),Object(x.jsxs)(l.a,{variant:"subtitle1",children:["Types:                         ",c.map((function(e){var t=e.type.name;return Object(x.jsxs)(l.a,{variant:"body",children:["-",t.charAt(0).toUpperCase()+t.slice(1)]},t)}))]})]})]})}(),!1===s&&Object(x.jsx)(l.a,{variant:"h3",className:i.Title,children:"No existe el pokemon"}),Object(x.jsx)(j.a,{className:i.imageContainer,display:"flex",children:Object(x.jsx)(b.a,{onClick:function(){return t.push("/")},className:i.Boton,children:"Volver"})})]})}var k=a(117),v=a(118),y=a(119),w=a(125),C=a(120),N=a(123),I=a(54),S=a.n(I),T=a(21),F=a(12),R=Object(m.a)((function(e){return{header:{backgroundColor:"#e63946"},mainContainer:{justifyContent:"center"},cardsWrapper:{alignContent:"center",width:1400,marginTop:64,padding:21},card:{width:307,backgroundColor:"transparent","@media (max-width: 1024px)":{width:"100%"}},cardImage:{margin:"auto",height:"192px",width:"192px"},NombreTypo:{marginTop:-20,marginBottom:20,color:"#1d3557",fontFamily:"Roboto",fontSize:"16px",fontWeight:500,textAlign:"center"},grow:{flexGrow:1},backgroundBar:{backgroundColor:"#e63946"},separar:{justifyContent:"space-between"},menuButton:{marginRight:e.spacing(2)},title:Object(T.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(T.a)({justifySelf:"right",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(F.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(F.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(T.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"300px"}),sectionDesktop:Object(T.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(T.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function B(e){var t=e.history,a=R(),i=Object(n.useState)(),c=Object(p.a)(i,2),r=c[0],o=c[1],s=Object(n.useState)(""),b=Object(p.a)(s,2),m=b[0],u=b[1];Object(n.useEffect)((function(){g.a.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((function(e){var t=e.data.results,a={};t.forEach((function(e,t){a[t+1]={id:t+1,name:e.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1,".png")}})),o(a)}))}),[]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:a.grow,children:Object(x.jsx)(w.a,{position:"static",className:a.backgroundBar,children:Object(x.jsxs)(C.a,{className:a.separar,children:[Object(x.jsx)(l.a,{className:a.title,variant:"h6",noWrap:!0,children:"React Pokedex"}),Object(x.jsxs)("div",{className:a.search,children:[Object(x.jsx)("div",{className:a.searchIcon,children:Object(x.jsx)(S.a,{})}),Object(x.jsx)(N.a,{onChange:function(e){u(e.target.value)},placeholder:"Pokemon...",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"}})]})]})})}),Object(x.jsx)(d.a,{container:!0,fullwidth:!0,className:a.mainContainer,children:Object(x.jsx)(d.a,{container:!0,spacing:2,className:a.cardsWrapper,children:r?Object.keys(r).map((function(e){return r[e].name.includes(m)&&function(e){var n=r[e],i=n.id,c=n.name,o=n.sprite;return Object(x.jsx)(d.a,{item:!0,xs:12,sm:6,md:4,children:Object(x.jsx)(j.a,{className:a.card,onClick:function(){return t.push("/".concat(i))},children:Object(x.jsxs)(k.a,{children:[Object(x.jsx)(v.a,{className:a.cardImage,image:o,title:"..."}),Object(x.jsx)(y.a,{children:Object(x.jsxs)(l.a,{gutterBottom:!0,variant:"h5",component:"h2",className:a.NombreTypo,children:[i," - ",c.charAt(0).toUpperCase()+c.slice(1)]})})]})})},i)}(e)})):Object(x.jsx)(h.a,{})})})]})}var P=function(){return Object(x.jsxs)(s.c,{children:[Object(x.jsx)(s.a,{exact:!0,path:"/",render:function(e){return Object(x.jsx)(B,Object(o.a)({},e))}}),Object(x.jsx)(s.a,{exact:!0,path:"/:pokemonId",render:function(e){return Object(x.jsx)(f,Object(o.a)({},e))}})]})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,127)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))},A=a(14),E=Object(A.a)();r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(s.b,{history:E,children:Object(x.jsx)(P,{})})}),document.getElementById("root")),W()}},[[98,1,2]]]);
//# sourceMappingURL=main.6098512d.chunk.js.map