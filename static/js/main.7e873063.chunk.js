(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(53)},30:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),o=a.n(r),c=(a(30),a(56)),s=a(57),m=a(47),i=a(55),u=a(6),d=a(7),p=a(9),h=a(8),g=a(10),E=a(58),f=a(54),b=a(2),v=a(24),w=a(20),C=a.n(w),N=a(21),y=a.n(N);function x(e){return e.name}function j(e){return n.createElement("span",{className:"react-autosuggest__item"},e.name)}function k(e){var t=e.value.split("/").map(function(e){return n.createElement("li",{className:"breadcrumb-item"},e)});return n.createElement("nav",{"aria-label":"breadcrumb",className:"pr-2"},n.createElement("ol",{className:"breadcrumb"},t))}function S(e){return e.category}var O=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).onChange=function(t,a){var n=a.newValue;a.method;e.setState({value:n})},e.onSuggestionsFetchRequested=function(t){var a=t.value;fetch("https://daswort-api.herokuapp.com/search/".concat(a)).then(function(e){return e.json()}).then(function(t){e.setState({suggestions:t})},function(e){})},e.onSuggestionSelected=function(t,a){var n=a.suggestion;e.props.history.push("/notes/".concat(n.parentId))},e.onSuggestionsClearRequested=function(){e.setState({suggestions:[]})},e.state={value:"",suggestions:[]},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.suggestions,l={placeholder:"\u041f\u043e\u0438\u0441\u043a...",value:t,onChange:this.onChange};return n.createElement(y.a,{multiSection:!0,suggestions:a,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,onSuggestionSelected:this.onSuggestionSelected,getSuggestionValue:x,renderSuggestion:j,renderSectionTitle:k,getSectionSuggestions:S,inputProps:l})}}]),t}(n.Component),M=Object(E.a)(O),R=function(e){var t=e.children,a=e.items,l=e.itemsObjects,r=(e.withSearchForm,e.rightColumnComponent,e.collapse,e.routerContextComponentType),o=C()("header d-lg-flex p-0");return n.createElement("div",{className:o},n.createElement("div",{className:"container-fluid pt-2"},t||n.createElement(b.e.Row,{className:"align-items-center"},n.createElement(b.e.Col,{ignoreCol:!0,width:1,className:"d-none d-md-block d-xl-block"},n.createElement("a",{className:"header-brand",href:"#"},n.createElement("img",{src:"https://daswort-api.herokuapp.com/img/brand/brand.svg",className:"header-brand-img ml-3",alt:"Brand loc",style:{height:"2.3em"}}))),n.createElement(b.e.Col,{ignoreCol:!0,lg:2,md:2,sm:3,xs:6},n.createElement(b.g,{tabbed:!0,className:"border-0 d-flex",items:a,itemsObjects:l,routerContextComponentType:r})),n.createElement(b.e.Col,{ignoreCol:!0,lg:7,md:8,sm:8,xs:6},n.createElement(b.d.Group,{className:"w-100 m-0 pt-2 pb-2"},n.createElement(M,null))),n.createElement(b.e.Col,{ignoreCol:!0,width:1,className:"d-none d-md-block d-xl-block offset-lg-1"}))))};R.displayName="Site.Nav";var B=R,T=function(e){var t=e.links,a=e.note,l=e.copyright,r=e.nav;return n.createElement(n.Fragment,null,(t||a)&&n.createElement("div",{className:"footer fixed-bottom"},n.createElement(b.b,null,n.createElement(b.e.Row,null,n.createElement(b.e.Col,{lg:8}),n.createElement(b.e.Col,{lg:4,className:"mt-4 mt-lg-0"},a)))),(r||l)&&n.createElement("footer",{className:"footer",style:{bottom:0,position:"fixed",width:"100%"}},n.createElement(b.b,null,n.createElement(b.e.Row,{className:"align-items-center flex-row-reverse"},n.createElement(b.e.Col,{auto:!0,className:"ml-auto"},n.createElement(b.e.Row,{className:"align-items-center"},r)),n.createElement(b.e.Col,{width:12,lgAuto:!0,className:"mt-3 mt-lg-0 text-center"},l)))))};T.displayName="Site.Footer";var I=T,F=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={collapseMobileMenu:!0},a.handleCollapseMobileMenu=function(){a.setState(function(e){return{collapseMobileMenu:!e.collapseMobileMenu}})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.navProps,a=e.footerProps,l=e.children,r=e.routerContextComponentType,o=Object(v.a)({},t,{collapse:this.state.collapseMobileMenu,routerContextComponentType:r}),c=n.createElement(B,o);n.createElement(I,a);return n.createElement(b.h,null,n.createElement(b.h.Main,null,c,l),n.createElement("footer",{className:"footer",style:{bottom:0,position:"fixed",width:"100%",fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}},n.createElement(b.b,{className:"footer-container"},n.createElement(b.e.Row,{className:"align-items-center flex-row-reverse"},n.createElement(b.e.Col,{width:12,lgAuto:!0,className:"mt-3 mt-lg-0 text-center"},"Alle Rechte vorbehalten. Das hier ver\xf6ffentlichte Notenmaterial ist urheberrechtlich gesch\xfctzt.")),n.createElement(b.e.Row,{className:"align-items-center flex-row-reverse"},n.createElement(b.e.Col,{width:12,lgAuto:!0,className:"mt-3 mt-lg-0 text-center"},"Die Originale d\xfcrfen nur mit Erlaubnis der jeweiligen Rechtsinhaber kopiert, nachgedruckt, vervielf\xe4ltigt oder aufgenommen werden. Diese Notensammlung ist gem. \xa7 46 UrhG ausschlie\xdflich f\xfcr den Kirchen- und Unterrichtsgebrauch in den Gemeinden der EvangeliumsChristen-Baptisten bestimmt.")))))}}]),t}(n.PureComponent);F.displayName="Site.Wrapper";var L=F,q=[{value:"\u041d\u043e\u0442\u043d\u044b\u0439 \u0430\u0440\u0445\u0438\u0432",to:"/notes",initialValue:!0,LinkComponent:Object(E.a)(f.a)}],A=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).handleCollapseMobileMenu=function(){a.setState(function(e){return{collapseMobileMenu:!e.collapseMobileMenu}})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.createElement(L,{navProps:{itemsObjects:q,onMenuToggleClick:this.handleCollapseMobileMenu},routerContextComponentType:Object(E.a)(b.i)},this.props.children)}}]),t}(n.Component),P=a(48),D=a(12),G=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[]},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.fileId||"";this.props.history.push("/notes/".concat(t)),fetch("https://daswort-api.herokuapp.com/files/".concat(t)).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,items:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;if(t)return l.a.createElement("div",null,"Error: ",t.message);if(a){var r=n.breadcrumbItems.map(function(e){var t,a="breadcrumb-item";return e.isCurrent?(a+=" active",t=e.name):t=l.a.createElement(P.a,{to:"/notes/".concat(e.link),replace:!0},e.name),l.a.createElement("li",{className:a},t)}),o=n.fileList.filter(function(e){return"application/vnd.google-apps.folder"!==e.mimeType}).map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.b,null,l.a.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"300",height:"18"})),l.a.createElement(b.e.Col,{ignoreCol:!0,md:3,lg:2,sm:4,xs:4},l.a.createElement(b.a,null,l.a.createElement(b.a.Body,{className:"d-flex flex-column p-2"},e.thumbnailImgBase64?l.a.createElement("img",{title:e.name,className:"card-img-top",src:"data:image/jpeg;base64,".concat(e.thumbnailImgBase64)}):l.a.createElement("img",{title:e.name,className:"card-img-top pt-3 pb-3 m-auto",src:e.iconLink.replace("/16/","/128/")}),l.a.createElement("div",{className:"d-flex align-items-center mt-auto"},l.a.createElement("span",{className:"m-auto",style:{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}},e.name)),l.a.createElement("div",null,l.a.createElement("small",{style:{color:"lightgrey"}},e.fileExtension),l.a.createElement("a",{href:e.webContentLink,className:"icon d-inline-block",style:{float:"right"}},l.a.createElement(b.f,{prefix:"fe",name:"download"})))))))}),c=n.fileList.filter(function(e){return"application/vnd.google-apps.folder"===e.mimeType}).map(function(e){return l.a.createElement(b.e.Col,{sm:6,lg:3,key:e.id},l.a.createElement(b.a,{className:"drive-folder"},l.a.createElement(b.j,{className:"file-wrapper",icon:"folder",header:l.a.createElement(P.a,{to:"/notes/".concat(e.driveId),replace:!0},l.a.createElement("small",null,e.name))}),l.a.createElement(b.a.Footer,null,l.a.createElement(b.c,{type:"button",className:"download-folder",color:"secondary",icon:"download",items:l.a.createElement(b.c.Item,null,l.a.createElement("a",{href:"https://daswort-api.herokuapp.com/download/".concat(e.driveId)},"Herunterladen"))}))))});return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{"aria-label":"breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement("a",{href:"/notes"},l.a.createElement(P.a,{to:"/notes",replace:!0},l.a.createElement("i",{className:"fas fa-home"}),"\xa0Blasmusik"))),r)),l.a.createElement(b.e.Row,null,c),l.a.createElement(b.e.Row,{cards:!0,deck:!0},o))}return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{"aria-label":"breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},"\xa0"))),l.a.createElement(b.e.Row,{cards:!0},l.a.createElement(b.e.Col,{md:4},l.a.createElement(b.a,null,l.a.createElement(b.a.Body,{className:"d-flex flex-column p-2"},l.a.createElement(D.a,null)))),l.a.createElement(b.e.Col,{md:4},l.a.createElement(b.a,null,l.a.createElement(b.a.Body,{className:"d-flex flex-column p-2"},l.a.createElement(D.a,null)))),l.a.createElement(b.e.Col,{md:4},l.a.createElement(b.a,null,l.a.createElement(b.a.Body,{className:"d-flex flex-column p-2"},l.a.createElement(D.a,null)))),l.a.createElement(b.e.Col,{md:4},l.a.createElement(b.a,null,l.a.createElement(b.a.Body,{className:"d-flex flex-column p-2"},l.a.createElement(D.a,null))))))}}]),t}(l.a.Component),V=Object(E.a)(G),W=function(e){return l.a.createElement(A,null,l.a.createElement(b.h.Content,null,l.a.createElement(V,{key:e.match.params.fileId})))};var z=function(){return l.a.createElement(A,null,l.a.createElement(b.h.Content,null,l.a.createElement(b.e.Row,{cards:!0},l.a.createElement(b.e.Col,{width:6,sm:4,lg:2},l.a.createElement(b.k,{layout:1,movement:6,total:"43",label:"New Tickets"})),l.a.createElement(b.e.Col,{width:6,sm:4,lg:2},l.a.createElement(b.k,{layout:1,movement:-3,total:"17",label:"Closed Today"})))))};a(49),a(51);var J=function(e){return n.createElement(n.StrictMode,null,n.createElement(c.a,{basename:"/daswort"},n.createElement(s.a,null,n.createElement(m.a,{exact:!0,path:"/",render:function(){return n.createElement(i.a,{to:"/notes"})}}),n.createElement(m.a,{exact:!0,path:"/notes/",component:W}),n.createElement(m.a,{exact:!0,path:"/notes/:fileId",component:W}),n.createElement(m.a,{exact:!0,path:"/photos",component:z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.7e873063.chunk.js.map