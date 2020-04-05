(this["webpackJsonpgithub-portfolio-criodo"]=this["webpackJsonpgithub-portfolio-criodo"]||[]).push([[0],{104:function(e,t,a){e.exports=a(200)},109:function(e,t,a){},152:function(e,t,a){},177:function(e,t){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(95),c=a.n(o),i=(a(109),a(8)),l=a(9),d=a(10),s=a(11),m=a(98),p=a(212),E=a(15),_=a(25),C=a(49),u=a(19),R=a.n(u),g=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.container},this.props.children)}}]),a}(n.Component),T=R()((function(e){return{container:{margin:"40px 0px",height:"auto",background:e.palette.primary.white,padding:"65px 0px 25px 0px",boxShadow:"0 10px 20px 0 rgba(20,21,26,0.1)"}}}))(g),y=a(214),x=a(99),b=a(215),O=function(e){switch(e){case"heading1":case"heading2":case"heading3":case"heading4":case"heading5":case"headLine":case"button":case"title":case"subHeader":case"button":default:return"Open Sans"}},h=function(e){switch(e){case"heading1":return"32px";case"heading2":return"24px";case"heading3":return"18px";case"heading4":return"16px";case"heading5":return"14px";case"body1":return"18px";case"body2":return"16px";case"body3":return"14px";case"body4":return"12px";case"quote":return"20px";case"button":default:return"14px"}},f=function(e){switch(e){case"heading1":case"heading2":case"heading3":case"heading4":case"heading5":return"600";case"body1":case"body2":case"body3":case"body4":return"400";case"quote":case"button":return"600";case"bold":return"800";default:return"400"}},N=function(e){var t=e.classes,a=(e.color,Object(x.a)(e,["color"]));return r.a.createElement(b.a,Object.assign({className:t.root,style:{cursor:e.cursor?e.cursor:"default",fontFamily:e.fontFamily?e.fontFamily:O(e.type),fontSize:e.fontSize?e.fontSize:h(e.type),fontWeight:e.fontWeight?e.fontWeight:f(e.type),color:e.color?e.color:function(t){if("dark"===e.currentTheme)return"#ffffff";switch(t){case"heading1":case"heading2":case"heading3":case"heading4":case"heading5":return"#000000";case"button":return"#FFFFFF";default:return"#000000"}}(e.type),letterSpacing:"0.04em"}},a),e.children)};N.defaultProps={type:"body"};var v=R()((function(e){return{root:{letterSpacing:0,opacity:1}}}))(N),A=a(18),I=a(59),P=a.n(I),L=(a(70),a(152),n.Component,a(4)),M=a.n(L),k=a(3),B=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={meDetail:{},user:"",isLoading:!0,qbox:{},qmoney:"",qcharm:"",qprep:""},n.title=n.title.bind(Object(C.a)(n)),n}return Object(l.a)(a,[{key:"title",value:function(e){return e.split(" ").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()})).join(" ")}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{row:!0,lg:2,md:1,xs:1}),r.a.createElement(y.a,{row:!0,lg:7,md:10,xs:10},r.a.createElement(T,null,r.a.createElement("div",{className:e.top},r.a.createElement(v,{fontSize:"48px"},this.title("Rajat Marathe")),r.a.createElement("div",{className:e.subtitle},r.a.createElement(v,{fontSize:"34px",color:"rgba(0,0,0,0.6)"},"Backend Developer"),r.a.createElement("a",{href:"https://www.linkedin.com/in/rajat-m-458620103/",target:"_blank",rel:"noopener"},r.a.createElement(A.a,{icon:["fab","linkedin"],className:e.socialIcon})),r.a.createElement("a",{href:"https://github.com/rajatrmarathe",target:"_blank",rel:"noopener"},r.a.createElement(A.a,{icon:["fab","github"],className:e.socialIcon}))),r.a.createElement("div",{className:e.programs},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,lg:1,md:1,xs:12},r.a.createElement(v,{type:"body2",color:"rgba(0,0,0,0.6)"},"Programs:")),r.a.createElement(y.a,{item:!0,lg:5,md:5,xs:12,style:{marginLeft:"40px"}},r.a.createElement(v,{type:"body2",color:"#7C8DFF"},"Crio Launch")))),r.a.createElement("a",{href:"https://raw.githubusercontent.com/CrioDo/Crio-Launch-Feb-2020-".concat("rajatrmarathe","/gh-pages/static/media/Crio-Launch-Feb-2020-Certificate.png"),target:"_blank"},r.a.createElement("div",{className:"viewCertificate",style:{padding:"10px",border:"1px solid #7C8DFF",width:"max-content",borderRadius:"4px",margin:"0px 0px 60px 0px",display:"inline-flex",alignItems:"center"}},r.a.createElement(A.a,{icon:["fas","file-alt"],style:{marginRight:"10px"},className:e.arrowIcon}),r.a.createElement(v,{type:"body2",color:"#7C8DFF",cursor:"pointer"},"VIEW CERTIFICATE")))),r.a.createElement("div",{className:e.middle},r.a.createElement(v,{type:"body1",color:"rgba(0,0,0,0.6)"},"Crio Experience"),r.a.createElement("div",{className:e.programRow},r.a.createElement("div",{className:e.programPill},r.a.createElement("img",{alt:"Crio.Do",src:P.a,style:{marginRight:"10px"}}),r.a.createElement(v,{type:"heading3",color:"rgba(255,255,255,1)"},"Crio Launch")),r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"31 Jan 2020 - 10 Apr 2020")),r.a.createElement("ul",{className:"timeline"},r.a.createElement("li",null,r.a.createElement("div",{className:e.MERow,class:"meRow"},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(v,{type:"heading3",color:"rgba(0,0,0,1)"},"QBox"),r.a.createElement("div",{style:{marginTop:"16px"}},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"}," ",M()(k.qbox_outer.cardContentContainer.cardContentList[1].cardBody)," "),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(y.a,{item:!0,xs:12,md:2},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),r.a.createElement(y.a,{item:!0,xs:12,md:10},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},M()(k.qbox_outer.skills)," "))),r.a.createElement("div",{style:{margin:"30px 0px"}},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:4},r.a.createElement(E.b,{to:{pathname:"/detail/ME_QBOX",aboutProps:{data:this.state.meDetail.ME_QBOX,getTitle:this.props.getTitle}}},r.a.createElement(v,{type:"body5",color:"#7C8DFF",cursor:"pointer"},"VIEW DETAILS",r.a.createElement(A.a,{icon:["fas","arrow-right"],className:e.arrowIcon}))))))))))),r.a.createElement("div",{style:{marginLeft:"80px",borderBottom:"1px solid #d8d8d8",marginBottom:"30px"}}),r.a.createElement("li",null,r.a.createElement("div",{className:e.MERow,class:"meRow"},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(v,{type:"heading3",color:"rgba(0,0,0,1)"},"QMoney"),r.a.createElement("div",{style:{marginTop:"16px"}},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},M()(k.qmoney_outer.cardContentContainer.cardContentList[1].cardBody)," "),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(y.a,{item:!0,xs:12,md:2},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),r.a.createElement(y.a,{item:!0,xs:12,md:10},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},M()(k.qmoney_outer.skills)," "))),r.a.createElement("div",{style:{margin:"40px 0px"}},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:4},r.a.createElement(E.b,{to:{pathname:"/detail/ME_QMONEY",aboutProps:{data:this.state.meDetail.ME_QMONEY,getTitle:this.props.getTitle}}},r.a.createElement(v,{type:"body5",color:"#7C8DFF",cursor:"pointer"},"VIEW DETAILS",r.a.createElement(A.a,{icon:["fas","arrow-right"],className:e.arrowIcon}))))))))))),r.a.createElement("div",{style:{marginLeft:"80px",borderBottom:"1px solid #d8d8d8",marginBottom:"30px"}})," ",r.a.createElement("li",null,r.a.createElement("div",{className:e.MERow,class:"meRow"},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(v,{type:"heading3",color:"rgba(0,0,0,1)"},"QPrep"),r.a.createElement("div",{style:{marginTop:"16px"}},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},M()(k.qprep_outer.cardContentContainer.cardContentList[1].cardBody)," "),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(y.a,{item:!0,xs:12,md:2},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),r.a.createElement(y.a,{item:!0,xs:12,md:10},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},"Applied DSA"),r.a.createElement("br",null)))))))),k.qcharm_outer&&k.qcharm_inner?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginLeft:"80px",borderBottom:"1px solid #d8d8d8",marginBottom:"30px"}}),r.a.createElement("li",null,r.a.createElement("div",{className:e.MERow,class:"meRow"},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(v,{type:"heading3",color:"rgba(0,0,0,1)"},"QCharm"),r.a.createElement("div",{style:{marginTop:"16px"}},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},M()(k.qcharm_outer.cardContentContainer.cardContentList[1].cardBody)," "),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(y.a,{item:!0,xs:12,md:2},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),r.a.createElement(y.a,{item:!0,xs:12,md:10},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},M()(k.qcharm_outer.skills)," ")))))))," ",r.a.createElement("div",{style:{margin:"30px 0px"}},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:4},r.a.createElement(E.b,{to:{pathname:"/detail/ME_QCHARM",aboutProps:{data:this.state.meDetail.ME_QCHARM,getTitle:this.props.getTitle}}},r.a.createElement(v,{type:"body5",color:"#7C8DFF",cursor:"pointer"},"VIEW DETAILS",r.a.createElement(A.a,{icon:["fas","arrow-right"],className:e.arrowIcon})))))))):"")))),r.a.createElement(y.a,{row:!0,lg:2,md:1,xs:1}))}}]),a}(n.Component),S=R()((function(e){return{top:{borderBottom:"1px solid"+e.palette.primary.primaryBorder,padding:"0px 55px"},middle:{margin:"45px 55px"},subtitle:{display:"flex",alignItems:"center"},socialIcon:{color:e.palette.primary.primary,fontSize:"32px",marginLeft:"20px"},arrowIcon:{color:e.palette.primary.primary,marginLeft:"5px",cursor:"pointer"},programs:{margin:"35px 0px 30px 0px",color:"rgba(0, 0, 0, 0.6)",display:"flex",alignItems:"center"},programRow:{padding:"10px 0px 0px 0px"},MERow:{margin:"55px 0px 0px 0px"},programPill:{display:"flex",alignItems:"center",background:"#3f3f3f",width:"fit-content",padding:"16px",borderRadius:"8px",margin:"10px 0px"}}}))(B),w=a(97),D=a.n(w),Q=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.navbar},r.a.createElement(E.c,{to:"/"},r.a.createElement("img",{alt:"Crio.Do",src:D.a}),r.a.createElement("div",{style:{marginLeft:"16px"}},r.a.createElement(v,{type:"heading4",fontWeight:"bold",cursor:"pointer"},this.props.title))))}}]),a}(n.Component),q=R()((function(e){return{navbar:{height:"80px",background:e.palette.primary.white,display:"flex",padding:"0px 32px",alignItems:"center",borderBottom:"1px solid"+e.palette.primary.primaryBorder}}}))(Q),J=(a(196),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={meDetail:{},data:"",me:"",isLoading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.meid;this.setState({me:e},(function(){})),this.container.scrollTop=0}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(y.a,{container:!0,ref:function(t){return e.container=t}},r.a.createElement(y.a,{row:!0,lg:2,md:1,xs:1}),r.a.createElement(y.a,{row:!0,lg:7,md:10,xs:10},r.a.createElement(T,null,"ME_QBOX"===this.state.me?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.b,{to:{pathname:"/"}},r.a.createElement("div",{style:{display:"inline-flex",alignItems:"center",marginBottom:"20px"}},r.a.createElement(A.a,{icon:["fas","arrow-left"],style:{fontSize:"1.5em",margin:"0px 10px 0px 55px",cursor:"pointer",color:"#999"}}),r.a.createElement(v,{cursor:"pointer",color:"#999"},"Back"))),r.a.createElement("div",{className:t.top},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement("div",{style:{margin:"0px 0px 10px 0px"}},r.a.createElement(v,{fontSize:"46px"}," QBox")),r.a.createElement(v,{fontSize:"30px",color:"rgba(0,0,0,0.6)"},M()(k.qbox_outer.cardContentContainer.cardContentList[0].cardBody)," "),r.a.createElement(v,{fontSize:"14px"},M()(k.qbox_outer.cardContentContainer.cardContentList[1].cardBody))),r.a.createElement(y.a,{item:!0,xs:5,style:{textAlign:"right"}}),r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement("div",{style:{textAlign:"center"}},M()(k.qbox_milestone0.cardContentContainer.cardContentList[0].cardBody)," ")))),r.a.createElement("div",{className:t.middle},r.a.createElement(v,{color:"rgba(0,0,0,1)",fontSize:"20px"},"QBox Modules"),r.a.createElement("ul",{className:"timeline"},k.qbox_inner.map((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("div",{className:t.MERow,class:"meRow"},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(v,{type:"heading3",color:"rgba(0,0,0,1)"},M()(e.cardContentContainer.containerTitle)),r.a.createElement("div",{style:{marginTop:"16px"}},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Scope of work:")),r.a.createElement(y.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement("br",null),r.a.createElement(v,{type:"body5",color:"#000"},M()(e.cardContentContainer.cardContentList[0].cardBody)))),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(y.a,{item:!0,xs:12,md:2},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),r.a.createElement(y.a,{item:!0,xs:12,md:10},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},M()(e.cardContentContainer.cardContentList[1].cardBody))))))))),a!==k.qbox_inner.length-1?r.a.createElement("div",{style:{borderBottom:"1px solid #d8d8d8",margin:"30px 0px 30px 80px"}}):"")}))))):"ME_QMONEY"===this.state.me?r.a.createElement(r.a.Fragment,null," ",r.a.createElement(E.b,{to:{pathname:"/"}},r.a.createElement("div",{style:{display:"inline-flex",alignItems:"center",marginBottom:"20px"}},r.a.createElement(A.a,{icon:["fas","arrow-left"],style:{fontSize:"1.5em",margin:"0px 10px 0px 55px",cursor:"pointer",color:"#999"}}),r.a.createElement(v,{cursor:"pointer",color:"#999"},"Back"))),r.a.createElement("div",{className:t.top},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement("div",{style:{margin:"0px 0px 10px 0px"}},r.a.createElement(v,{fontSize:"46px"}," QMoney")),r.a.createElement(v,{fontSize:"30px",color:"rgba(0,0,0,0.6)"},M()(k.qmoney_outer.cardContentContainer.cardContentList[0].cardBody)," "),r.a.createElement(v,{fontSize:"14px"},M()(k.qmoney_outer.cardContentContainer.cardContentList[1].cardBody))),r.a.createElement(y.a,{item:!0,xs:5,style:{textAlign:"right"}}),r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement("div",{style:{textAlign:"center"}},M()(k.qmoney_milestone0.cardContentContainer.cardContentList[0].cardBody)," ")))),r.a.createElement("div",{className:t.middle},r.a.createElement("div",{style:{margin:"0px 0px 20px 0px"}},r.a.createElement(v,{color:"rgba(0,0,0,1)",fontSize:"20px"},"QMoney Modules")),r.a.createElement("ul",{className:"timeline"},k.qmoney_inner.map((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("div",{className:t.MERow,class:"meRow"},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(v,{type:"heading3",color:"rgba(0,0,0,1)"},M()(e.cardContentContainer.containerTitle)),r.a.createElement("div",{style:{marginTop:"16px"}},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Scope of work:")),r.a.createElement(y.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement("br",null),r.a.createElement(v,{type:"body5",color:"#000"},M()(e.cardContentContainer.cardContentList[0].cardBody)))),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(y.a,{item:!0,xs:12,md:2},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),r.a.createElement(y.a,{item:!0,xs:12,md:10},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},M()(e.cardContentContainer.cardContentList[1].cardBody))))))))),a!==k.qmoney_inner.length-1?r.a.createElement("div",{style:{borderBottom:"1px solid #d8d8d8",margin:"30px 0px 30px 80px"}}):"")}))))):"ME_QCHARM"===this.state.me&&k.qcharm_outer&&k.qcharm_inner?r.a.createElement(r.a.Fragment,null," ",r.a.createElement(E.b,{to:{pathname:"/"}},r.a.createElement("div",{style:{display:"inline-flex",alignItems:"center",marginBottom:"20px"}},r.a.createElement(A.a,{icon:["fas","arrow-left"],style:{fontSize:"1.5em",margin:"0px 10px 0px 55px",cursor:"pointer",color:"#999"}}),r.a.createElement(v,{cursor:"pointer",color:"#999"},"Back"))),r.a.createElement("div",{className:t.top},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement("div",{style:{margin:"0px 0px 10px 0px"}},r.a.createElement(v,{fontSize:"46px"}," QCharm")),r.a.createElement(v,{fontSize:"30px",color:"rgba(0,0,0,0.6)"},M()(k.qcharm_outer.cardContentContainer.cardContentList[0].cardBody)," "),r.a.createElement(v,{fontSize:"14px"},M()(k.qcharm_outer.cardContentContainer.cardContentList[1].cardBody))),r.a.createElement(y.a,{item:!0,xs:5,style:{textAlign:"right"}}),r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement("div",{style:{textAlign:"center"}},M()(k.qcharm_milestone0.cardContentContainer.cardContentList[0].cardBody)," ")))),r.a.createElement("div",{className:t.middle},r.a.createElement(v,{color:"rgba(0,0,0,1)",fontSize:"20px"},"QCharm Modules"),r.a.createElement("ul",{className:"timeline"},k.qcharm_inner.map((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("div",{className:t.MERow,class:"meRow"},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(v,{type:"heading3",color:"rgba(0,0,0,1)"},M()(e.cardContentContainer.containerTitle)),r.a.createElement("div",{style:{marginTop:"16px"}},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Scope of work:")),r.a.createElement(y.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement("br",null),r.a.createElement(v,{type:"body5",color:"#000"},M()(e.cardContentContainer.cardContentList[0].cardBody)))),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(y.a,{item:!0,xs:12,md:2},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),r.a.createElement(y.a,{item:!0,xs:12,md:10},r.a.createElement(v,{type:"body5",color:"rgba(0,0,0,1)"},M()(e.cardContentContainer.cardContentList[1].cardBody))))))))),a!==k.qcharm_inner.length-1?r.a.createElement("div",{style:{borderBottom:"1px solid #d8d8d8",margin:"30px 0px 30px 80px"}}):"")}))))):r.a.createElement("center",null,r.a.createElement(v,{color:"#999999"},"No data available")))),r.a.createElement(y.a,{row:!0,lg:2,md:1,xs:1}))}}]),a}(n.Component)),U=R()((function(e){return{top:{borderBottom:"1px solid"+e.palette.primary.primaryBorder,padding:"0px 55px 60px 55px"},middle:{margin:"45px 55px"},subtitle:{display:"flex",alignItems:"center"},socialIcon:{color:e.palette.primary.primary,fontSize:"32px",marginLeft:"20px"},arrowIcon:{color:e.palette.primary.primary,marginLeft:"5px",cursor:"pointer"},programs:{margin:"45px 0px",color:"rgba(0, 0, 0, 0.6)",display:"flex",alignItems:"center"},programRow:{padding:"60px 0px 0px 0px"},MERow:{margin:"55px 0px 0px 0px"},programPill:{display:"inline-flex",alignItems:"center",background:"#3f3f3f",width:"fit-content",padding:"16px",borderRadius:"8px",margin:"10px 0px"}}}))(J),Y=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).theme=Object(m.a)({palette:{primary:{main:"#7C8DFF",primary:"#7C8DFF",primaryBackground:"#F1F4FE",primaryBorder:"#D8D8D8",white:"#fff",black:"#000000",red:"#E66565",green:"#70CC63",orange:"#E6935A",grey:"#999999",greyTwo:"#EEEEEE",purple:"#570DA8",yellow:"#F1C21B"},secondary:{main:"#ffffff",secondaryBackground:"#C9D0FF",tertiaryBackground:"#F7F7F7"}}}),n.state={title:"Crio.Do Portfolio",defaultPath:"/Crio-Launch-Feb-2020-rajatrmarathe",detailPath:"/detail/:meid"},console.log(n.state.detailPath),n}return Object(l.a)(a,[{key:"getTitle",value:function(e){this.setState({title:this.state.title.concat(e)})}},{key:"render",value:function(){var e=this;this.props.classes;return r.a.createElement(E.a,{basename:this.state.defaultPath},r.a.createElement(p.a,{theme:this.theme},r.a.createElement("div",{style:{backgroundColor:this.theme.palette.secondary.tertiaryBackground,height:"100vh",overflowX:"scroll"}},r.a.createElement(q,{title:this.state.title}),r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:this.state.defaultPath,render:function(){return r.a.createElement(S,{getTitle:e.getTitle.bind(e)})}}),r.a.createElement(_.a,{path:this.state.detailPath,component:U}),r.a.createElement(_.a,{render:function(){return r.a.createElement(S,{getTitle:e.getTitle.bind(e)})}})))))}}]),a}(n.Component),F=a(41),j=a(62),G=a(42);F.b.add(j.b,j.a,G.b,G.d,G.c,G.a);var V=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.title="Portfolio - Crio.Do"}},{key:"render",value:function(){return r.a.createElement(Y,null)}}]),a}(n.Component);a(197).config(),c.a.render(r.a.createElement(V,null),document.getElementById("root"))},3:function(e){e.exports=JSON.parse('{"qmoney_inner":[{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Used Tiingo\u2019s REST APIs to fetch stock quotes.</p>\\n</li>\\n<li>\\n<p>Computed the annualized returns based on stock purchase date and holding period.</p>\\n</li>\\n</ol></div>","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_2_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>Java, REST API, Jackson</p></div>","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_2_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QMONEY_PROJECT_REPORT_MILESTONE_1","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Fetch stock quotes and compute annualized stock returns","containerTldr":"","permalinkId":"container-regular-me_qmoney-project_report-milestone-1","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Refactored code to adapt to an updated interface contract published by the backend team.</p>\\n</li>\\n<li>\\n<p>Published the portfolio manager library as a JAR for easy versioning and distribution.</p>\\n</li>\\n<li>\\n<p>Created examples to help document library (JAR) usage.</p>\\n</li>\\n</ol></div>","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_3_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>Interfaces, Code Refactoring, Gradle</p></div>","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_3_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QMONEY_PROJECT_REPORT_MILESTONE_2","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Refactor using Java interfaces and publish a JAR file","containerTldr":"","permalinkId":"container-regular-me_qmoney-project_report-milestone-2","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}}],"qbox_inner":[{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>Implemented a pre-installation script that validated the minimum system requirements to be met for QBox installation. The script checked the availability of the following system resources:</li>\\n</ol><ul>\\n<li>\\n<p>Processor</p>\\n</li>\\n<li>\\n<p>Memory</p>\\n</li>\\n<li>\\n<p>Disk space</p>\\n</li>\\n<li>\\n<p>OS version</p>\\n</li>\\n</ul><ol start=\'2\'>\\n<li>Installed the QBox server and connected it to various QBox clients.</li>\\n</ol><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QBOX_MODULE_PROJECT_REPORT_image_1.jpg\' style=\'max-width:750px;\'/></p></div>","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_2_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>Linux commands</p></div>","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_2_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QBOX_PROJECT_REPORT_MILESTONE_1","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Check system requirements and install QBox","containerTldr":"","permalinkId":"container-regular-me_qbox-project_report-milestone-1","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Created a performance benchmark using a base version of QBox.</p>\\n</li>\\n<li>\\n<p>Identified regressions in newer QBox versions (memory usage, cpu usage, file transfer speed, file permission issues).</p>\\n</li>\\n</ol><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QBOX_MODULE_PROJECT_REPORT_image_2.jpg\' style=\'max-width:750px;\'/></p></div>","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_3_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>Linux commands, OS Concepts</p></div>","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_3_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QBOX_PROJECT_REPORT_MILESTONE_2","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Debug performance issues and identify regressions","containerTldr":"","permalinkId":"container-regular-me_qbox-project_report-milestone-2","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Collected and analyzed pcap files using Wireshark.</p>\\n</li>\\n<li>\\n<p>Identified the following network issues in different versions of QBox: TCP retransmissions, connection refusals, dropped connections, sub-optimal TCP window sizes and retransmission delays.</p>\\n</li>\\n<li>\\n<p>Identified several network issues in different versions of QBox including TCP retransmissions, connection refusals and retransmission delays.</p>\\n</li>\\n</ol><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QBOX_MODULE_PROJECT_REPORT_image_3.jpg\' style=\'max-width:750px;\'/></p></div>","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_4_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>Networking Concepts</p></div>","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_4_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QBOX_PROJECT_REPORT_MILESTONE_3","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Troubleshoot network issues","containerTldr":"","permalinkId":"container-regular-me_qbox-project_report-milestone-3","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Created SSL certificates and used them to enable secured file transfer.</p>\\n</li>\\n<li>\\n<p>Snooped network traffic using Wireshark and ensured that it was indeed encrypted.</p>\\n</li>\\n</ol></div>","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_5_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>Network Security</p></div>","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_5_CARD_2"},{"cardTitle":"Image(s)","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Image(s)_card card-content-body\'><p>All images used in this doc are available in the following folder:</p><p><a href=\'https://drive.google.com/drive/folders/1Gzac9QNQ2eJK6T7BBE6ZqW8BWg92X42H\' target=\'_blank\'>https://drive.google.com/drive/folders/1Gzac9QNQ2eJK6T7BBE6ZqW8BWg92X42H</a></p></div>","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_5_CARD_3"}],"containerId":"CONTAINER_REGULAR_ME_QBOX_PROJECT_REPORT_MILESTONE_4","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Enable end-to-end encryption","containerTldr":"","permalinkId":"container-regular-me_qbox-project_report-milestone-4","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}}],"qmoney_milestone0":{"cardContentContainer":{"cardContentList":[{"cardTitle":"Image","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Image_card card-content-body\'><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QMONEY_MODULE_PROJECT_REPORT_image_0.png\' style=\'max-width:750px;\'/></p><p>QMoney Architecture</p><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QMONEY_MODULE_PROJECT_REPORT_image_1.png\' style=\'max-width:750px;\'/></p><p>QMoney Portfolio Manager Interface</p></div>","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_1_CARD_1"}],"containerId":"CONTAINER_REGULAR_ME_QMONEY_PROJECT_REPORT_MILESTONE_0","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Extended Overview","containerTldr":"","permalinkId":"container-regular-me_qmoney-project_report-milestone-0","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},"qbox_outer":{"skills":"Linux Commands, OS Concepts, Networking Concepts, Network Security","cardContentContainer":{"cardContentList":[{"cardTitle":"Headline","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Headline_card card-content-body\'><p>A secure file-sharing service hosted in the cloud.</p></div>","cardId":"ME_QBOXPROJECT_REPORT_OVERVIEW_1_CARD_1"},{"cardTitle":"Overview","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Overview_card card-content-body\'><p>QBox is a secure file-sharing service. It is a customized version of the popularly available VSFTPD server.</p><p>During the course of this Micro-Experience, the developer:</p><ul>\\n<li>\\n<p>Created pre-install scripts to run system checks, install and configure QBox.</p>\\n</li>\\n<li>\\n<p>Developed tools to automatically analyze performance and functionality issues in different versions of QBox.</p>\\n</li>\\n</ul></div>","cardId":"ME_QBOXPROJECT_REPORT_OVERVIEW_1_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QBOX_PROJECT_REPORT_OVERVIEW_0","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"ME_QBOX","containerTldr":"","permalinkId":"container-regular-me_qbox-project_report-overview-0","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},"qprep_outer":{"cardContentContainer":{"cardContentList":[{"cardTitle":"Headline","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Headline_card card-content-body\'><p>Structured methodology to solve PS/DS problems.</p></div>","cardId":"ME_PS_DS1PROJECT_REPORT_OVERVIEW_1_CARD_1"},{"cardTitle":"Overview","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Overview_card card-content-body\'><p>Learn and Practice algorithmic problems in a structured way.</p><p>During the course of this QPrep Micro-Experience, the developer is expected to solve problems in a structured way by:</p><ol>\\n<li>\\n<p>First articulating the problem statement clearly with examples.</p>\\n</li>\\n<li>\\n<p>Brainstorming multiple approaches, understanding trade-offs and writing pseudocode for the chosen approach.</p>\\n</li>\\n<li>\\n<p>Implementing the solution and testing it.</p>\\n</li>\\n</ol><p>The deliberate divide-and-conquer practice helps the developer to approach unknown problems with reasonable confidence.</p></div>","cardId":"ME_PS_DS1PROJECT_REPORT_OVERVIEW_1_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_PS_DS1_PROJECT_REPORT_OVERVIEW_0","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"ME_PS_DS1","containerTldr":"","permalinkId":"container-regular-me_ps_ds1-project_report-overview-0","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},"qbox_milestone0":{"cardContentContainer":{"cardContentList":[{"cardTitle":"Image","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Image_card card-content-body\'><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QBOX_MODULE_PROJECT_REPORT_image_0.png\' style=\'max-width:750px;\'/></p><h5>File transfer using the QBox server</h5></div>","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_1_CARD_1"},{"cardTitle":"Skills","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Skills_card card-content-body\'><p>Linux commands, OS and Networking Concepts</p></div>","cardId":"ME_QBOXPROJECT_REPORT_MILESTONE_1_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QBOX_PROJECT_REPORT_MILESTONE_0","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Extended Overview","containerTldr":"","permalinkId":"container-regular-me_qbox-project_report-milestone-0","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},"qmoney_outer":{"skills":"Java, REST API, Jackson, Interfaces, Code Refactoring, Gradle","cardContentContainer":{"cardContentList":[{"cardTitle":"Headline","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Headline_card card-content-body\'><p>A visual stock portfolio analyzer.</p></div>","cardId":"ME_QMONEYPROJECT_REPORT_OVERVIEW_1_CARD_1"},{"cardTitle":"Overview","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Overview_card card-content-body\'><p>QMoney is a visual stock portfolio analyzer. It helps portfolio managers make trade recommendations for their clients.</p><p>During the course of this Micro-Experience, the developer:</p><ul>\\n<li>\\n<p>Implemented the core logic of the portfolio manager and published it as a library.</p>\\n</li>\\n<li>\\n<p>Refactored code to add support for multiple stock quote services.</p>\\n</li>\\n<li>\\n<p>Improved application stability and performance.</p>\\n</li>\\n</ul></div>","cardId":"ME_QMONEYPROJECT_REPORT_OVERVIEW_1_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QMONEY_PROJECT_REPORT_OVERVIEW_0","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"ME_QMONEY","containerTldr":"","permalinkId":"container-regular-me_qmoney-project_report-overview-0","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}}}')},59:function(e,t,a){e.exports=a.p+"static/media/crio-logo-white.c9536e04.svg"},97:function(e,t,a){e.exports=a.p+"static/media/crio-logo.63be71d0.svg"}},[[104,1,2]]]);
//# sourceMappingURL=main.7085611c.chunk.js.map