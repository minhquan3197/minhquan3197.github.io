(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,a,t){e.exports=t.p+"static/media/me.37ecc9f5.jpg"},163:function(e,a,t){e.exports=t.p+"static/media/project.80f5cb50.jpg"},174:function(e,a,t){e.exports=t(328)},179:function(e,a,t){},326:function(e,a,t){},327:function(e,a,t){"use strict";t.r(a);var n=t(10),r=t.n(n),c=t(171),l=t(51),s=t(66),o=t(67),i=t(36),m=t(69);Object(c.a)(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===o.a.readCookie("jwtToken")){e.next=12;break}return Object(s.a)(o.a.readCookie("jwtToken")),e.prev=2,e.next=5,i.a.get("/api/auth/user");case 5:(a=e.sent)?m.a.dispatch(Object(l.c)(a.data)):(m.a.dispatch(Object(l.b)()),window.location.href="/login"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("Error");case 12:case"end":return e.stop()}},e,null,[[2,9]])}))()},328:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),l=t.n(c),s=(t(179),t(16)),o=t(17),i=t(20),m=t(18),u=t(19),d=t(69),p=t(83),f=t(35),b=t(22),E=t(51),h=function(e){var a=e.name,t=e.placeholder,n=e.value,c=e.error,l=e.type,s=e.onChange,o=e.disabled,i=e.icon;return r.a.createElement("label",{className:"block clearfix"},r.a.createElement("span",{className:"block input-icon input-icon-right"},r.a.createElement("input",{type:l,name:a,placeholder:t,value:n,onChange:s,disabled:o,className:"form-control"}),c&&r.a.createElement("p",{className:"text-danger"},c[0]),r.a.createElement("i",{className:i})))};h.defaultProps={type:"text"};var v=h,g=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state={username:"anivia",password:"anivia",errors:{}},e.onChange=e.onChange.bind(Object(f.a)(e)),e.onSubmit=e.onSubmit.bind(Object(f.a)(e)),e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"onChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/"),e.errors&&(this.setState({errors:e.errors}),this.props.auth.loading=!1)}},{key:"onSubmit",value:function(e){e.preventDefault();var a={username:this.state.username,password:this.state.password};this.props.loginUser(a)}},{key:"componentDidMount",value:function(){document.body.className="login"}},{key:"render",value:function(){var e,a=this.state.errors;return e=this.props.auth.loading?r.a.createElement("h1",null,"Loading"):r.a.createElement("button",{id:"login",type:"submit",className:"width-35 pull-right btn btn-sm btn-primary"},r.a.createElement("i",{className:"ace-icon fa fa-key"}),r.a.createElement("span",{className:"bigger-110"},"Login")),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("fieldset",null,r.a.createElement(v,{name:"username",placeholder:"T\xe0i kho\u1ea3n",value:this.state.username,onChange:this.onChange,error:a.username,icon:"ace-icon fa fa-user"}),r.a.createElement(v,{name:"password",type:"password",placeholder:"M\u1eadt kh\u1ea9u t\xe0i kho\u1ea3n",value:this.state.password,onChange:this.onChange,error:a.password,icon:"ace-icon fa fa-lock"}),r.a.createElement("div",{className:"space"}),r.a.createElement("div",{className:"clearfix"},e),r.a.createElement("div",{className:"space-4"})))}}]),a}(n.Component),N=Object(b.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:E.a})(g),j=t(161),O=t.n(j),y=t(27),w=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("ul",{className:"breadcrumb"},r.a.createElement("li",null,r.a.createElement("i",{className:"ace-icon fa fa-home home-icon"}),r.a.createElement(y.b,{to:"/"},"Trang ch\u1ee7")),this.props.previous&&void 0!==this.props.link?r.a.createElement("li",null,r.a.createElement(y.b,{to:this.props.link},this.props.previous)):null,r.a.createElement("li",{className:"active"},this.props.title))}}]),a}(n.Component),k=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-content-inner"},r.a.createElement("div",{className:"breadcrumbs ace-save-state",id:"breadcrumbs"},r.a.createElement(w,{title:"About me"})),r.a.createElement("div",{className:"page-content"},r.a.createElement("div",{className:"page-header"},r.a.createElement("h1",null,"About me")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12"},r.a.createElement("div",{className:"hr dotted"}),r.a.createElement("div",null,r.a.createElement("div",{id:"user-profile-1",className:"user-profile row"},r.a.createElement("div",{className:"col-xs-12 col-sm-3 center"},r.a.createElement("div",null,r.a.createElement("span",{className:"profile-picture"},r.a.createElement("img",{id:"avatar",className:"editable img-responsive",alt:"Nguy\u1ec5n Minh Qu\xe2n",height:"250px",width:"250px",src:O.a})),r.a.createElement("div",{className:"space-4"}),r.a.createElement("div",{className:"width-80 label label-info label-xlg arrowed-in arrowed-in-right"},r.a.createElement("div",{className:"inline position-relative"},r.a.createElement("p",null,r.a.createElement("span",{className:"white"},"Nguy\u1ec5n Minh Qu\xe2n"))))),r.a.createElement("div",{className:"space-6"}),r.a.createElement("div",{className:"profile-contact-info"},r.a.createElement("div",{className:"profile-contact-links"},r.a.createElement("a",{href:"mailto:minhquan.k0r1@gmail.com",className:"btn btn-link"},r.a.createElement("i",{className:"ace-icon fa fa-envelope bigger-120 pink"}),"Send a message"),r.a.createElement("a",{href:"https://minhquan3197.github.io",target:"_blank",rel:"noopener noreferrer",className:"btn btn-link"},r.a.createElement("i",{className:"ace-icon fa fa-globe bigger-125 blue"}),"minhquan3197.github.io")),r.a.createElement("div",{className:"space-6"}),r.a.createElement("div",{className:"profile-social-links align-center"},r.a.createElement("a",{href:"https://www.facebook.com/Quan.K0r1",target:"_blank",rel:"noopener noreferrer",className:"tooltip-info",title:"","data-original-title":"Visit my Facebook"},r.a.createElement("i",{className:"middle ace-icon fa fa-facebook-square fa-2x blue"})),r.a.createElement("a",{href:"https://twitter.com/K0r1MQ",target:"_blank",rel:"noopener noreferrer",className:"tooltip-info",title:"","data-original-title":"Visit my Twitter"},r.a.createElement("i",{className:"middle ace-icon fa fa-twitter-square fa-2x light-blue"})),r.a.createElement("a",{href:"https://www.instagram.com/quan.k0r1/",target:"_blank",rel:"noopener noreferrer",className:"tooltip-error",title:"","data-original-title":"Visit my Pinterest"},r.a.createElement("i",{className:"middle ace-icon fa fa-instagram fa-2x red"})))),r.a.createElement("div",{className:"hr hr12 dotted"})),r.a.createElement("div",{className:"col-xs-12 col-sm-9"},r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"Project"),r.a.createElement("span",{className:"btn btn-app btn-sm btn-purple no-hover"},r.a.createElement("span",{className:"line-height-1 bigger-170 white"}," 2 "),r.a.createElement("br",null),r.a.createElement("span",{className:"line-height-1 smaller-90"}," PHP ")),r.a.createElement("span",{className:"btn btn-app btn-sm btn-default no-hover"},r.a.createElement("span",{className:"line-height-1 bigger-170"}," 1 "),r.a.createElement("br",null),r.a.createElement("span",{className:"line-height-1 smaller-90"}," Python ")),r.a.createElement("span",{className:"btn btn-app btn-sm btn-success no-hover"},r.a.createElement("span",{className:"line-height-1 bigger-170"}," 1 "),r.a.createElement("br",null),r.a.createElement("span",{className:"line-height-1 smaller-90"}," JavaScript "))),r.a.createElement("div",{className:"space-12"}),r.a.createElement("div",{className:"profile-user-info profile-user-info-striped"},r.a.createElement("div",{className:"profile-info-row"},r.a.createElement("div",{className:"profile-info-name"}," H\u1ecd v\xe0 t\xean "),r.a.createElement("div",{className:"profile-info-value"},r.a.createElement("span",null,"Nguy\u1ec5n Minh Qu\xe2n"))),r.a.createElement("div",{className:"profile-info-row"},r.a.createElement("div",{className:"profile-info-name"}," \u0110\u1ecba ch\u1ec9 "),r.a.createElement("div",{className:"profile-info-value"},r.a.createElement("span",null,"Qu\u1eadn Ph\xfa Nhu\u1eadn"),r.a.createElement("span",null,"Th\xe0nh ph\u1ed1 H\u1ed3 Ch\xed Minh"),r.a.createElement("span",null,"Vi\u1ec7t Nam"))),r.a.createElement("div",{className:"profile-info-row"},r.a.createElement("div",{className:"profile-info-name"}," Sinh n\u0103m "),r.a.createElement("div",{className:"profile-info-value"},r.a.createElement("span",null,"1997")))),r.a.createElement("div",{className:"space-20"})),r.a.createElement("div",{className:"col-xs-12 col-sm-9"},r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"Skills")),r.a.createElement("div",{className:"space-12"}),r.a.createElement("div",{className:"profile-user-info profile-user-info-striped"},r.a.createElement("div",{className:"profile-info-row"},r.a.createElement("div",{className:"profile-info-name"}," Programming Lanauge "),r.a.createElement("div",{className:"profile-info-value"},r.a.createElement("span",null,"PHP"),r.a.createElement("span",null,"JavaScript"),r.a.createElement("span",null,"TypeScript"),r.a.createElement("span",null,"Python"))),r.a.createElement("div",{className:"profile-info-row"},r.a.createElement("div",{className:"profile-info-name"}," Framework & Library "),r.a.createElement("div",{className:"profile-info-value"},r.a.createElement("span",null,"Laravel"),r.a.createElement("span",null,"ReactJS"),r.a.createElement("span",null,"VueJS"),r.a.createElement("span",null,"Angular"),r.a.createElement("span",null,"MochaJS"),r.a.createElement("br",null),r.a.createElement("span",null,"ExpressJS"),r.a.createElement("span",null,"Django"))),r.a.createElement("div",{className:"profile-info-row"},r.a.createElement("div",{className:"profile-info-name"}," Database "),r.a.createElement("div",{className:"profile-info-value"},r.a.createElement("span",null,"MySQL"),r.a.createElement("span",null,"PostgreSQL"),r.a.createElement("span",null,"MongoDB")))),r.a.createElement("div",{className:"space-20"}))))))))}}]),a}(n.Component),x=t(163),C=t.n(x),S=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-content-inner"},r.a.createElement("div",{className:"breadcrumbs ace-save-state",id:"breadcrumbs"},r.a.createElement(w,{title:"About project"})),r.a.createElement("div",{className:"page-content"},r.a.createElement("div",{className:"page-header"},r.a.createElement("h1",null,"About project")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12"},r.a.createElement("div",{className:"hr dotted"}),r.a.createElement("div",null,r.a.createElement("div",{id:"user-profile-1",className:"user-profile row"},r.a.createElement("div",{className:"col-xs-12 col-sm-3 center"},r.a.createElement("div",null,r.a.createElement("span",{className:"profile-picture"},r.a.createElement("img",{id:"avatar",className:"editable img-responsive",alt:"Nguy\u1ec5n Minh Qu\xe2n",src:C.a})),r.a.createElement("div",{className:"space-4"}),r.a.createElement("div",{className:"width-80 label label-info label-xlg arrowed-in arrowed-in-right"},r.a.createElement("div",{className:"inline position-relative"},r.a.createElement("p",null,r.a.createElement("span",{className:"white"},"My project"))))),r.a.createElement("div",{className:"space-6"}),r.a.createElement("div",{className:"profile-contact-info"},r.a.createElement("div",{className:"profile-contact-links"},r.a.createElement("a",{href:"https://minhquan3197.github.io",target:"_blank",rel:"noopener noreferrer",className:"btn btn-link"},r.a.createElement("i",{className:"ace-icon fa fa-globe bigger-125 blue"}),"minhquan3197.github.io"))),r.a.createElement("div",{className:"hr hr12 dotted"})),r.a.createElement("div",{className:"col-xs-12 col-sm-9"},r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"Project"),r.a.createElement("p",null,"This is my pet project, it's used test API. Project built by front-end reactjs and back-end laravel. Template admin by http://ace.jeka.by/")),r.a.createElement("div",{className:"space-20"})),r.a.createElement("div",{className:"col-xs-12 col-sm-9"},r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"Technology")),r.a.createElement("div",{className:"space-12"}),r.a.createElement("div",{className:"profile-user-info profile-user-info-striped"},r.a.createElement("div",{className:"profile-info-row"},r.a.createElement("div",{className:"profile-info-name"}," Application & Data "),r.a.createElement("div",{className:"profile-info-value"},r.a.createElement("span",null,"PHP"),r.a.createElement("span",null,"JavaScript"),r.a.createElement("span",null,"Socket.IO"),r.a.createElement("span",null,"Node.js"),r.a.createElement("span",null,"React"),r.a.createElement("span",null,"Redux"),r.a.createElement("br",null),r.a.createElement("span",null,"ExpressJS"),r.a.createElement("span",null,"Laravel"),r.a.createElement("br",null),r.a.createElement("span",null,"PostgreSQL"),r.a.createElement("span",null,"Heroku Postgres"),r.a.createElement("span",null,"MongoDB"),r.a.createElement("span",null,"MongoLab"),r.a.createElement("span",null,"Heroku"),r.a.createElement("span",null,"Mongoose"))),r.a.createElement("div",{className:"profile-info-row"},r.a.createElement("div",{className:"profile-info-name"}," Utilities "),r.a.createElement("div",{className:"profile-info-value"},r.a.createElement("span",null,"Postman"),r.a.createElement("span",null,"Github Pages"))),r.a.createElement("div",{className:"profile-info-row"},r.a.createElement("div",{className:"profile-info-name"}," DevOps "),r.a.createElement("div",{className:"profile-info-value"},r.a.createElement("span",null,"Github"),r.a.createElement("span",null,"PostgreSQL"),r.a.createElement("span",null,"MongoDB")))),r.a.createElement("div",{className:"space-20"}))))))))}}]),a}(n.Component),_=t(7);var T=t(115),A=(t(325),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={treeData:[]},t.onDeleteNode=t.onDeleteNode.bind(Object(f.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"onDeleteNode",value:function(e){if(this.props.removeCategory(e.node.id),0===e.node.children.length){var a=e.path;this.setState({treeData:Object(T.b)({treeData:this.state.treeData,path:a,getNodeKey:function(e){return e.treeIndex}})})}}},{key:"componentDidMount",value:function(){this.setState({treeData:this.props.blog_categories})}},{key:"componentWillReceiveProps",value:function(e){this.setState({treeData:e.blog_categories})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{height:400}},r.a.createElement(T.a,{generateNodeProps:function(a){return{buttons:[r.a.createElement("button",{style:{verticalAlign:"middle"},onClick:function(t){return e.onDeleteNode(a)}},"X")]}},treeData:this.state.treeData,onChange:function(a){return e.setState({treeData:a})},onMoveNode:function(a){return e.props.updateCategory(a.nextParentNode,a.node)}}))}}]),a}(n.Component)),D=Object(b.b)(function(e){return{}},{updateCategory:function(e,a){return{type:_.m,nextParentNode:e,node:a}},removeCategory:function(e){return{type:_.j,data:e}}})(A),R=t(170),P=t.n(R),M=function(e){var a=e.name,t=e.placeholder,n=e.value,c=e.error,l=e.type,s=e.onChange,o=e.disabled,i=e.title;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-sm-2 control-label no-padding-right"},i),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:l,name:a,placeholder:t,value:n,onChange:s,disabled:o,className:"col-xs-10 col-sm-7"}),c&&r.a.createElement("p",{className:"text-danger col-xs-10 col-sm-7"},c[0])))};M.defaultProps={type:"text"};var L=M,U=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state={title:"",alias:"",errors:{}},e.onChange=e.onChange.bind(Object(f.a)(e)),e.onSubmit=e.onSubmit.bind(Object(f.a)(e)),e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"onChange",value:function(e){"title"===e.target.name&&this.setState({alias:P()(e.target.value),title:e.target.value})}},{key:"componentWillReceiveProps",value:function(e){e.errors&&(this.setState({errors:e.errors}),this.props.blog_categories.loading=!1)}},{key:"onSubmit",value:function(e){e.preventDefault();var a={title:this.state.title,alias:this.state.alias};this.setState({title:"",alias:""}),this.props.createCategory(a)}},{key:"render",value:function(){var e,a=this.state.errors;return e=this.props.blog_categories.loading?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"clearfix form-actions"},r.a.createElement("div",{className:"col-md-offset-3 col-md-9"},r.a.createElement("button",{className:"btn btn-info",type:"submit"},r.a.createElement("i",{className:"ace-icon fa fa-check bigger-110"}),"Submit"))),r.a.createElement("form",{className:"form-horizontal",onSubmit:this.onSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(L,{name:"title",placeholder:"Title",value:this.state.title,onChange:this.onChange,error:a.title,title:"Title"}),r.a.createElement(L,{name:"alias",placeholder:"Alias",value:this.state.alias,onChange:this.onChange,error:a.alias,title:"SEO Meta",disabled:"disabled"}))),e)}}]),a}(n.Component),G=Object(b.b)(function(e){return{errors:e.errors,blog_categories:e.blog_categories}},{createCategory:function(e){return{type:_.d,data:e}}})(U),Q=t(84),I=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.getCategories()}},{key:"render",value:function(){var e=this.props.blog_categories.blog_categories;return r.a.createElement("div",{className:"main-content-inner"},r.a.createElement("div",{className:"breadcrumbs ace-save-state",id:"breadcrumbs"},r.a.createElement(w,{title:"Blog category"})),r.a.createElement("div",{className:"page-content","v-if":"isLoading === false"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"vspace-16-sm"}),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(G,null)),r.a.createElement("div",{className:"col-sm-6"},Object(Q.a)(e)?null:r.a.createElement(D,{blog_categories:e})))))))}}]),a}(n.Component),J=Object(b.b)(function(e){return{blog_categories:e.blog_categories}},{getCategories:function(){return{type:_.e}}})(I),B=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){document.body.className="login-layout"}},{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-10 col-sm-offset-1"},r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,r.a.createElement("i",{className:"ace-icon fa fa-leaf green"}),r.a.createElement("span",{className:"blue"},"Qu\xe2n "),r.a.createElement("span",{className:"white",id:"id-text2"},"Nguy\u1ec5n")),r.a.createElement("h4",{className:"blue",id:"id-company-text"},"\xa9 Nguy\u1ec5n Minh Qu\xe2n")),r.a.createElement("div",{className:"space-6"}),r.a.createElement("div",{className:"position-relative"},r.a.createElement("div",{id:"login-box",className:"login-box visible widget-box no-border"},r.a.createElement("div",{className:"widget-body"},r.a.createElement("div",{className:"widget-main"},r.a.createElement("h4",{className:"header blue lighter bigger"},r.a.createElement("i",{className:"ace-icon fa fa-coffee green"}),"Nh\u1eadp th\xf4ng tin \u0111\u0103ng nh\u1eadp",r.a.createElement("br",null),r.a.createElement("i",{className:"ace-icon fa fa-coffee green"}),"Username: anivia",r.a.createElement("br",null),r.a.createElement("i",{className:"ace-icon fa fa-coffee green"}),"Password: anivia"),r.a.createElement("div",{className:"space-6"}),this.props.children)))))))))}}]),a}(n.Component),q=Object(b.b)(function(e){return{}})(B),H=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"onLogoutClick",value:function(e){e.preventDefault(),this.props.logoutUser()}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"navbar-container ace-save-state",id:"navbar-container"},r.a.createElement("button",{type:"button",className:"navbar-toggle menu-toggler pull-left",id:"menu-toggler","data-target":"#sidebar"},r.a.createElement("span",{className:"sr-only"},"Toggle sidebar"),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement("div",{className:"navbar-header pull-left"},r.a.createElement(y.b,{className:"navbar-brand",to:"/"},r.a.createElement("small",null,r.a.createElement("i",{className:"fa fa-leaf"}),"Nguy\u1ec5n Minh Qu\xe2n"))),r.a.createElement("div",{className:"navbar-buttons navbar-header pull-right",role:"navigation","v-if":"isAuthenticated === true"},r.a.createElement("ul",{className:"nav ace-nav"},r.a.createElement("li",{className:"purple dropdown-modal"},r.a.createElement("a",{"data-toggle":"dropdown",className:"dropdown-toggle",href:"#!"},r.a.createElement("i",{className:"ace-icon fa fa-bell icon-animated-bell"})),r.a.createElement("ul",{className:"dropdown-menu-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close"},r.a.createElement("li",{className:"dropdown-header"},r.a.createElement("i",{className:"ace-icon fa fa-exclamation-triangle"}),"Th\xf4ng b\xe1o"),r.a.createElement("li",{className:"dropdown-content"},r.a.createElement("ul",{className:"dropdown-menu dropdown-navbar navbar-pink"},r.a.createElement("li",{"v-for":"notification in notifications"},r.a.createElement("a",{href:"#!"},r.a.createElement("i",{className:"btn btn-xs btn-primary fa fa-user"}),r.a.createElement("br",null))))))),r.a.createElement("li",{className:"light-blue dropdown-modal"},r.a.createElement("a",{"data-toggle":"dropdown",href:"#!",className:"dropdown-toggle"},r.a.createElement("img",{className:"nav-user-photo",src:e.avatar,alt:e.name}),r.a.createElement("span",{className:"user-info"},r.a.createElement("small",null,"Welcome,"),e.name),r.a.createElement("i",{className:"ace-icon fa fa-caret-down"})),r.a.createElement("ul",{className:"user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},r.a.createElement("i",{className:"ace-icon fa fa-home"}),"Trang ch\u1ee7")),r.a.createElement("li",{className:"divider"}),r.a.createElement("li",null,r.a.createElement("a",{href:"!#",onClick:this.onLogoutClick.bind(this)},r.a.createElement("i",{className:"ace-icon fa fa-power-off"}),"Logout")))))))}}]),a}(n.Component),W=Object(b.b)(function(e){return{}},{logoutUser:E.b})(H),V=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-inner"},r.a.createElement("div",{className:"footer-content"},r.a.createElement("span",{className:"bigger-120"},r.a.createElement("span",{className:"blue bolder"},"Nguy\u1ec5n Minh Qu\xe2n")," Application \xa9 2019")))}}]),a}(n.Component),Y=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-list"},r.a.createElement("li",null,r.a.createElement(y.b,{to:"/"},r.a.createElement("i",{className:"menu-icon fa fa-home"}),r.a.createElement("span",{className:"menu-text"}," Home ")),r.a.createElement("b",{className:"arrow"})),r.a.createElement("li",null,r.a.createElement(y.b,{to:"/about"},r.a.createElement("i",{className:"menu-icon fa fa-cube"}),r.a.createElement("span",{className:"menu-text"}," About ")),r.a.createElement("b",{className:"arrow"})),r.a.createElement("li",{className:""},r.a.createElement("a",{href:"#!",className:"dropdown-toggle"},r.a.createElement("i",{className:"menu-icon fa fa-desktop"}),r.a.createElement("span",{className:"menu-text"},"Blog"),r.a.createElement("b",{className:"arrow fa fa-angle-down"})),r.a.createElement("b",{className:"arrow"}),r.a.createElement("ul",{className:"submenu"},r.a.createElement("li",null,r.a.createElement(y.b,{to:"/blog_categories"},r.a.createElement("i",{className:"menu-icon fa fa-caret-right"}),"Danh m\u1ee5c Blog"),r.a.createElement("b",{className:"arrow"})),r.a.createElement("li",null,r.a.createElement(y.b,{to:"/"},r.a.createElement("i",{className:"menu-icon fa fa-caret-right"}),"Blog"),r.a.createElement("b",{className:"arrow"}))))),r.a.createElement("div",{className:"sidebar-toggle sidebar-collapse",id:"sidebar-collapse"},r.a.createElement("i",{id:"sidebar-toggle-icon",className:"ace-save-state ace-icon fa fa-angle-double-right","data-icon1":"ace-icon fa fa-angle-double-left","data-icon2":"ace-icon fa fa-angle-double-right"})))}}]),a}(n.Component),z=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){document.body.className="no-skin",localStorage.setItem("ace_state_id-sidebar",{class:{"menu-min":1}}),localStorage.setItem("ace_state_id-sidebar-toggle-icon",{class:{className:"ace-save-state ace-icon fa fa-angle-double-left"}})}},{key:"render",value:function(){var e=this.props.auth.user;return r.a.createElement("div",null,r.a.createElement("div",{id:"navbar",className:"navbar navbar-default ace-save-state"},r.a.createElement(W,{user:e})),r.a.createElement("div",{className:"main-container ace-save-state",id:"main-container"},r.a.createElement("div",{id:"sidebar",className:"sidebar responsive ace-save-state menu-min","data-sidebar":"true","data-sidebar-scroll":"true","data-sidebar-hover":"true"},r.a.createElement(Y,null)),r.a.createElement("div",{className:"main-content"},this.props.children),r.a.createElement("div",{className:"footer"},r.a.createElement(V,null)),r.a.createElement("a",{href:"#!",id:"btn-scroll-up",className:"btn-scroll-up btn btn-sm btn-inverse"},r.a.createElement("i",{className:"ace-icon fa fa-angle-double-up icon-only bigger-110"}))))}}]),a}(n.Component),K=Object(b.b)(function(e){return{auth:e.auth}})(z),F=[{path:"/",exact:!0,layout:K,main:k},{path:"/about",exact:!0,layout:K,main:S},{path:"/blog_categories",exact:!0,layout:K,main:J},{path:"/login",exact:!0,layout:q,main:N}],X=t(44),$=t(88),Z=Object(b.b)(function(e){return{auth:e.auth}})(function(e){var a=e.component,t=e.layout,n=e.auth,c=Object($.a)(e,["component","layout","auth"]);return r.a.createElement(X.b,Object.assign({},c,{render:function(e){return!0===n.isAuthenticated?r.a.createElement(t,null,r.a.createElement(a,e)):r.a.createElement(X.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),ee=function(e){var a=e.component,t=e.layout,n=Object($.a)(e,["component","layout"]);return r.a.createElement(X.b,Object.assign({},n,{render:function(e){return r.a.createElement(t,null,r.a.createElement(a,e))}}))};t(326);t(327);var ae=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).showContent=function(e){var a=null;return e.length>0&&(a=e.map(function(e,a){return"/login"!==e.path?r.a.createElement(Z,{key:a,path:e.path,exact:e.exact,component:e.main,layout:e.layout}):r.a.createElement(ee,{key:a,path:e.path,exact:e.exact,component:e.main,layout:e.layout})})),r.a.createElement(X.d,null,a)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,{store:d.a},r.a.createElement(y.a,null,this.showContent(F)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,a,t){"use strict";var n=t(45),r=t.n(n),c="https://laravel3197.herokuapp.com";a.a={get:function(e){return r.a.get(c+e)},post:function(e,a){return r.a.post(c+e,a)},put:function(e,a){return r.a.put(c+e,a)},del:function(e){return r.a.delete(c+e)}}},51:function(e,a,t){"use strict";t.d(a,"a",function(){return r}),t.d(a,"b",function(){return c}),t.d(a,"c",function(){return l});var n=t(7);function r(e){return{type:n.h,data:e}}function c(){return{type:n.i}}function l(e){return{type:n.f,data:e}}},66:function(e,a,t){"use strict";var n=t(45),r=t.n(n);a.a=function(e){e?r.a.defaults.headers.common.Authorization="Bearer "+e:delete r.a.defaults.headers.common.Authorization}},67:function(e,a,t){"use strict";a.a={readCookie:function(e){for(var a=e+"=",t=document.cookie.split(";"),n=0;n<t.length;n++){for(var r=t[n];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(a))return r.substring(a.length,r.length)}return null},setCookie:function(e,a,t){var n="";if(t){var r=new Date;r.setTime(r.getTime()+24*t*60*60*1e3),n="; expires="+r.toUTCString()}document.cookie=e+"="+(a||"")+n+"; path=/"}}},69:function(e,a,t){"use strict";var n=t(33),r=t(173),c=t(52),l=t(7),s=t(84),o={isAuthenticated:!1,user:{},loading:!1},i={},m=t(172),u={blog_categories:[],loading:!1},d=Object(n.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.n:return Object(c.a)({},e,{loading:!e.loading});case l.l:return Object(c.a)({},e,{isAuthenticated:!Object(s.a)(a.payload),user:a.payload,loading:!1});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.g:return a.payload;case l.b:return{};default:return e}},blog_categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.a:return Object(c.a)({},e,{loading:!e.loading});case l.k:return Object(c.a)({},e,{blog_categories:a.payload,loading:!1});case l.c:return Object(c.a)({},e,{loading:!1,blog_categories:[].concat(Object(m.a)(e.blog_categories),[a.payload])});default:return e}}}),p=t(10),f=t.n(p),b=t(11),E=t(66),h=t(36),v=t(67),g=t(54),N=t.n(g);N.a.options={debug:!1,positionClass:"toast-top-right",onclick:null,fadeIn:300,fadeOut:1e3,timeOut:3e3,extendedTimeOut:1e3};var j={displaySuccess:function(e){N.a.success(e)},displayError:function(e){Array.isArray(e)?e.each(function(e){N.a.error(e)}):N.a.error(e)},displayWarning:function(e){N.a.warning(e)},displayInfo:function(e){N.a.info(e)}},O=f.a.mark(S),y=f.a.mark(_),w=f.a.mark(T),k=f.a.mark(A),x=f.a.mark(D),C=f.a.mark(R);function S(e){return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(b.d)({type:l.l,payload:e.data});case 2:case"end":return a.stop()}},O)}function _(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.cookie="jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",window.location.reload(),j.displaySuccess("\u0110\u0103ng xu\u1ea5t th\xe0nh c\xf4ng"),Object(E.a)(!1),e.next=6,Object(b.c)(S,{});case 6:case"end":return e.stop()}},y)}function T(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)({type:l.n});case 2:case"end":return e.stop()}},w)}function A(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)({type:l.b});case 2:case"end":return e.stop()}},k)}function D(e){var a,t,n;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(b.c)(T);case 2:return r.next=4,Object(b.c)(A);case 4:return r.prev=4,r.next=7,h.a.post("/api/auth/login",e.data);case 7:return a=r.sent,t=a.data.data,v.a.setCookie("jwtToken",t,3),j.displaySuccess(a.data.message),r.next=13,Object(E.a)(t);case 13:return r.next=15,h.a.get("/api/auth/user");case 15:return n=r.sent,r.next=18,Object(b.c)(S,n);case 18:r.next=29;break;case 20:return r.prev=20,r.t0=r.catch(4),r.next=24,Object(b.c)(T);case 24:if(!r.t0.response.data.message){r.next=29;break}if(j.displayError(r.t0.response.data.message),!r.t0.response.data.data){r.next=29;break}return r.next=29,Object(b.d)({type:l.g,payload:r.t0.response.data.data});case 29:case"end":return r.stop()}},x,null,[[4,20]])}function R(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)([Object(b.f)(l.i,_),Object(b.f)(l.h,D),Object(b.f)(l.f,S)]);case 2:case"end":return e.stop()}},C)}var P=f.a.mark(B),M=f.a.mark(q),L=f.a.mark(H),U=f.a.mark(W),G=f.a.mark(V),Q=f.a.mark(Y),I=f.a.mark(z),J=f.a.mark(K);function B(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)({type:l.a});case 2:case"end":return e.stop()}},P)}function q(){var e;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.a.get("/api/blog_categories");case 3:return e=a.sent,a.next=6,Object(b.d)({type:l.k,payload:e.data.data});case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.response);case 11:case"end":return a.stop()}},M,null,[[0,8]])}function H(){var e,a;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.a)(l.e);case 2:e=t.sent;case 3:return t.next=6,Object(b.e)(e);case 6:return a=t.sent,t.next=9,Object(b.c)(q,a);case 9:t.next=3;break;case 11:case"end":return t.stop()}},L)}function W(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)({type:l.b});case 2:case"end":return e.stop()}},U)}function V(e){var a;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.c)(W);case 2:return t.next=4,Object(b.c)(B);case 4:return t.prev=4,t.next=7,h.a.post("/api/blog_categories",e.data);case 7:return a=t.sent,j.displaySuccess(a.data.message),t.next=11,Object(b.d)({type:l.c,payload:a.data.data});case 11:t.next=22;break;case 13:return t.prev=13,t.t0=t.catch(4),t.next=17,Object(b.c)(B);case 17:if(!t.t0.response.data.message){t.next=22;break}if(j.displayError(t.t0.response.data.message),!t.t0.response.data.data){t.next=22;break}return t.next=22,Object(b.d)({type:l.g,payload:t.t0.response.data.data});case 22:case"end":return t.stop()}},G,null,[[4,13]])}function Y(e){return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.a.put("/api/blog_categories/"+e.node.id,e.nextParentNode);case 3:a.next=8;break;case 5:a.prev=5,a.t0=a.catch(0),console.log(a.t0.response);case 8:case"end":return a.stop()}},Q,null,[[0,5]])}function z(e){return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.a.del("/api/blog_categories/"+e.data);case 3:a.next=8;break;case 5:a.prev=5,a.t0=a.catch(0),a.t0.response.data.message&&j.displayError(a.t0.response.data.message);case 8:case"end":return a.stop()}},I,null,[[0,5]])}function K(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)([Object(b.f)(l.d,V),Object(b.f)(l.m,Y),Object(b.f)(l.j,z)]);case 2:case"end":return e.stop()}},J)}var F=f.a.mark(X);function X(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)([R(),K(),H()]);case 2:case"end":return e.stop()}},F)}var $=Object(r.a)(),Z=[$],ee=Object(n.createStore)(d,{},Object(n.compose)(n.applyMiddleware.apply(void 0,Z)));$.run(X);a.a=ee},7:function(e,a,t){"use strict";t.d(a,"g",function(){return n}),t.d(a,"b",function(){return r}),t.d(a,"f",function(){return c}),t.d(a,"h",function(){return l}),t.d(a,"i",function(){return s}),t.d(a,"e",function(){return o}),t.d(a,"d",function(){return i}),t.d(a,"j",function(){return m}),t.d(a,"l",function(){return u}),t.d(a,"n",function(){return d}),t.d(a,"a",function(){return p}),t.d(a,"k",function(){return f}),t.d(a,"c",function(){return b}),t.d(a,"m",function(){return E});var n="GET_ERRORS",r="CLEAR_ERRORS",c="GET_CURRENT_USER",l="LOGIN_USER",s="LOGOUT_USER",o="GET_CATEGORIES",i="CREATE_CATEGORY",m="REMOVE_CATEGORY",u="SET_CURRENT_USER",d="USER_LOADING",p="CATEGORIES_LOADING",f="SET_CATEGORIES",b="CREATED_CATEGORY",E="UPDATE_CATEGORY"},84:function(e,a,t){"use strict";a.a=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}}},[[174,1,2]]]);
//# sourceMappingURL=main.46ae2e69.chunk.js.map