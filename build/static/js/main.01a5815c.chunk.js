(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/triangle6.8750c792.png"},20:function(e,t,a){e.exports=a.p+"static/media/address1.c5bdb717.jpg"},21:function(e,t,a){e.exports=a.p+"static/media/address2.a4c70232.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/address3.4ef28b33.jpg"},25:function(e,t,a){e.exports=a(56)},30:function(e,t,a){},32:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(18),c=a.n(r),l=(a(30),a(4)),i=a(5),u=a(7),o=a(6),m=a(8),d=a(1),h=(a(32),a(19)),p=a.n(h);var f=function(e){return s.a.createElement("div",{className:"EntrancePageImg"},s.a.createElement("img",{src:p.a,className:"triangleImg",alt:"triangle animation",onClick:e.handleClick,value:"mainView"}),s.a.createElement("button",{type:"button",value:"mainView",onClick:e.handleClick,className:"EntrBtnStyle"},s.a.createElement("span",{value:"mainView",onClick:e.handleClick},"Click me")))};var v=function(e){return s.a.createElement("div",{className:"LandingImg"},s.a.createElement("div",{className:"AnimationDiv"},s.a.createElement("h1",null,"Welcome to the Harvard Gallery app")))};var b=function(e){return s.a.createElement("ul",{className:"NavBarStyle"},s.a.createElement("li",{"data-value":"imagesView",onClick:e.handleClickMenuText,className:"NavBtnStyle"},"Images"),s.a.createElement("li",{"data-value":"videosView",onClick:e.handleClickMenuText,className:"NavBtnStyle"},"Videos"),s.a.createElement("li",{"data-value":"galleryView",onClick:e.handleClickMenuText,className:"NavBtnStyle"},"Gallery choice"),s.a.createElement("li",{"data-value":"classifView",onClick:e.handleClickMenuText,className:"NavBtnStyle"},"Classification"),s.a.createElement("li",{"data-value":"addressesView",onClick:e.handleClickMenuText,className:"NavBtnStyle"},"Find us here"),s.a.createElement("li",{"data-value":"newFormView",onClick:e.handleClickMenuText,className:"NavBtnStyle"},"Your exhibition request"),s.a.createElement("li",{"data-value":"mainView",onClick:e.handleClickMenuText,className:"NavBtnStyle"},"Main page"))},y=a(2),g=a.n(y),E=a(3);var k=function(e){var t=e.videosLinkData.split("/"),a=t[t.length-1];return s.a.createElement("div",{className:"allVideos"},s.a.createElement("h2",null,e.videosDescrData),s.a.createElement("iframe",{src:"https://player.vimeo.com/video/".concat(a,"?title=0&byline=0&portrait=0"),frameborder:"0",title:"yogaVideo",className:"VideosStyle"}),s.a.createElement("a",{href:e.videolinkData,target:"__html"},e.videolinkData))},j=a(10),N=a.n(j),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={videosData:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchData",value:function(){var e=Object(E.a)(g.a.mark(function e(){var t,a,n,s,r,c;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=1,a=[],n=[];t<=7;)s="".concat("https://api.harvardartmuseums.org/","video?apikey=").concat("c618a9f0-e782-11e8-ac8f-15dc77ff48b1","&page=").concat(t),a.push(s),t+=1;r=0;case 5:if(!(r<7)){e.next=13;break}return e.next=8,N()(a[r]);case 8:c=e.sent,n=n.concat(c.data.records);case 10:r++,e.next=5;break;case 13:this.setState({videosData:n});case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"VideosListStyle"},this.state.videosData.map(function(e){return s.a.createElement(k,{videosLinkData:e.primaryurl,videosDescrData:e.description})}))}}]),t}(n.Component);var O=function(e){return s.a.createElement("div",null,s.a.createElement("img",{src:e.imageUrlData,className:"ImagesStyle",alt:"img"}))},w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={imageData:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){e.lastNumProps!==this.props.lastNumProps&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(E.a)(g.a.mark(function e(){var t,a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("https://api.harvardartmuseums.org/","image?apikey=").concat("c618a9f0-e782-11e8-ac8f-15dc77ff48b1","&page=").concat(this.props.lastNumProps),e.next=3,N()(t);case 3:a=e.sent,this.setState({imageData:a.data.records});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"BtnImgDivStyle"},s.a.createElement("button",{type:"button",onClick:this.props.prevProps,className:"ImgBtnStyle"},"Previous"),s.a.createElement("button",{type:"button",onClick:this.props.nextProps,className:"ImgBtnStyle"},"Next")),s.a.createElement("div",{className:"ImgListStyle"},this.state.imageData.map(function(e){return s.a.createElement(O,{imageUrlData:e.baseimageurl})})))}}]),t}(n.Component);var C=function(e){return s.a.createElement("div",{className:"GalleryStyle"},s.a.createElement("ul",null,s.a.createElement("li",{className:"GallItemsCentered"},"floor number: ",e.galleryPropsFloor),s.a.createElement("li",{className:"GallItemsCentered"},e.galleryPropsTheme),s.a.createElement("li",null,e.galleryPropsLabeltext)))},x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={galleryData:[],selectedItem:"",selectedObj:null},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchData",value:function(){var e=Object(E.a)(g.a.mark(function e(){var t,a,n,s,r,c;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=1,a=[],n=[];t<8;)s="".concat("https://api.harvardartmuseums.org/","gallery?apikey=").concat("c618a9f0-e782-11e8-ac8f-15dc77ff48b1","&page=").concat(t),a.push(s),t+=1;r=0;case 5:if(!(r<7)){e.next=13;break}return e.next=8,N()(a[r]);case 8:c=e.sent,n=n.concat(c.data.records);case 10:r++,e.next=5;break;case 13:this.setState({galleryData:n,selectedItem:n[1].name,selectedObj:n[1]});case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=this.state.galleryData.find(function(t){return t.id===e.target.value});this.setState({selectedItem:e.target.value,selectedObj:t})}},{key:"render",value:function(){return s.a.createElement("div",{className:"GalleryListStyle"},s.a.createElement("select",{onChange:this.handleChange,className:"SelectStyle"},this.state.galleryData.map(function(e,t){return s.a.createElement("option",{value:e.id,key:t,className:"OptionStyle"},e.name)})),this.state.selectedObj?s.a.createElement(C,{galleryPropsFloor:this.state.selectedObj.floor,galleryPropsTheme:this.state.selectedObj.theme,galleryPropsLabeltext:this.state.selectedObj.labeltext}):null)}}]),t}(n.Component);var D=function(e){return e.classifProps.length>0?s.a.createElement("div",{className:"ClassifStyle"},e.classifProps.map(function(e){return s.a.createElement("p",null,e.name)})):null},V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={classificationData:[],searchInput:"",searchOutput:""},a.handleSearch=a.handleSearch.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchData",value:function(){var e=Object(E.a)(g.a.mark(function e(){var t,a,n,s,r,c;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=1,a=[],n=[];t<=7;)s="".concat("https://api.harvardartmuseums.org/","classification?apikey=").concat("c618a9f0-e782-11e8-ac8f-15dc77ff48b1","&page=").concat(t),a.push(s),t+=1;r=0;case 5:if(!(r<7)){e.next=13;break}return e.next=8,N()(a[r]);case 8:c=e.sent,n=n.concat(c.data.records);case 10:r++,e.next=5;break;case 13:this.setState({classificationData:n});case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleSearch",value:function(e){var t=e.target.value;this.setState({searchInput:t})}},{key:"getSearch",value:function(e){var t=this,a=this.state.classificationData.filter(function(e){return e.name.includes(t.state.searchInput)});this.setState({searchOutput:a}),console.log(a)}},{key:"handleSubmit",value:function(){this.getSearch(this.state.searchInput)}},{key:"render",value:function(){return s.a.createElement("div",{className:"ClassifListStyle"},s.a.createElement("div",{className:"SearchBarStyle"},s.a.createElement("input",{type:"text",onChange:this.handleSearch,value:this.searchInput,placeholder:"What would you like to search?",className:"SearchItemsClassif"}),s.a.createElement("button",{onClick:this.handleSubmit,className:"SearchItemsClassif"},"Search")),s.a.createElement(D,{classifProps:this.state.searchOutput}))}}]),t}(n.Component);var I=function(e){return s.a.createElement("div",null,s.a.createElement("ul",{className:"AddressUlStyle"},s.a.createElement("li",null,s.a.createElement("span",{className:"AddressesLabel"},"Name:")," ",s.a.createElement("span",{className:"AddressesValue"},e.addressUrlDataName)),s.a.createElement("li",null,s.a.createElement("span",{className:"AddressesLabel"},"Address:")," ",s.a.createElement("span",{className:"AddressesValue"},e.addressUrlDataAddress)),s.a.createElement("li",null,s.a.createElement("span",{className:"AddressesLabel"},"Longitude:")," ",s.a.createElement("span",{className:"AddressesValue"},e.addressUrlDataLongitude)),s.a.createElement("li",null,s.a.createElement("span",{className:"AddressesLabel"},"Latitude:")," ",s.a.createElement("span",{className:"AddressesValue"},e.addressUrlDataLatitude))))},L=a(20),P=a.n(L),M=a(21),A=a.n(M),B=a(22),T=a.n(B),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={addressesData:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchData",value:function(){var e=Object(E.a)(g.a.mark(function e(){var t,a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("https://api.harvardartmuseums.org/","site?apikey=").concat("c618a9f0-e782-11e8-ac8f-15dc77ff48b1","&"),e.next=3,N()(t);case 3:a=e.sent,this.setState({addressesData:a.data.records});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"AddressListStyle"},this.state.addressesData.map(function(e){return s.a.createElement(I,{addressUrlDataName:e.name,addressUrlDataAddress:e.address,addressUrlDataLongitude:e.geo.longitude,addressUrlDataLatitude:e.geo.latitude})})),s.a.createElement("div",{className:"AddressImagesStyle"},s.a.createElement("img",{src:P.a,className:"addressImg",alt:"first address view"}),s.a.createElement("img",{src:A.a,className:"addressImg",alt:"second address view"}),s.a.createElement("img",{src:T.a,className:"addressImg",alt:"third address view"})))}}]),t}(n.Component),U=a(24),G=a(23),Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={formsSubmition:[],subject:"",personName:"",description:"",date:"",contacts:"",temp:""},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a.handleDelete=a.handleDelete.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){console.log(e.target),this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={name:this.state.personName,subject:this.state.subject,description:this.state.description,date:this.state.date,contacts:this.state.contacts};this.setState({formsSubmition:Object(U.a)(this.state.formsSubmition).concat([t]),subject:"",personName:"",description:"",date:"",contacts:""})}},{key:"handleDelete",value:function(e){for(var t=this.state.formsSubmition.find(function(t){return t.name===e.target.name}),a=0;a<this.state.formsSubmition.length;a++)this.state.formsSubmition[a]===t&&this.setState({formsSubmition:this.state.formsSubmition.splice(a,1)})}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.handleSubmit,className:"newFormDivStyle"},s.a.createElement("input",{type:"text",name:"personName",value:this.state.personName,onChange:this.handleChange,placeholder:"Your name:",className:"newFormStyle"}),s.a.createElement("input",{type:"text",name:"subject",value:this.state.subject,onChange:this.handleChange,placeholder:"Subject of your exhibition:",className:"newFormStyle"}),s.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:this.handleChange,placeholder:"Description of your exhibition:",className:"newFormStyle"}),s.a.createElement("input",{type:"text",name:"date",value:this.state.date,onChange:this.handleChange,placeholder:"Date for the exhibition:",className:"newFormStyle"}),s.a.createElement("input",{type:"text",name:"contacts",value:this.state.contacts,onChange:this.handleChange,placeholder:"Your contacts:",className:"newFormStyle"}),s.a.createElement("button",{type:"submit",value:"Submit",className:"newFormBtnStyle"},"Submit"),s.a.createElement("div",{className:"mainDivForm"},this.state.formsSubmition.map(function(t){return s.a.createElement("div",{key:t.name,className:"formBorderStyle"},s.a.createElement("p",null,t.name),s.a.createElement("p",null,t.subject),s.a.createElement("p",null,t.description),s.a.createElement("p",null,t.date),s.a.createElement("p",null,t.contacts),s.a.createElement("button",{name:t.name,onClick:e.handleDelete},"Delete"))})))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={currentView:"EntranceView",lastNum:1},a.handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a.handleClickMenuText=a.handleClickMenuText.bind(Object(d.a)(Object(d.a)(a))),a.next=a.next.bind(Object(d.a)(Object(d.a)(a))),a.prev=a.prev.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"next",value:function(){this.setState({lastNum:this.state.lastNum+1}),this.getView()}},{key:"prev",value:function(){this.state.lastNum>=2?(this.setState({lastNum:this.state.lastNum-1}),this.getView()):alert("This is the first page. There are no previous pages")}},{key:"handleClick",value:function(e){var t=e.target.value;this.setState({currentView:t})}},{key:"handleClickMenuText",value:function(e){var t=e.target.getAttribute("data-value");console.log(t),this.setState({currentView:t})}},{key:"getView",value:function(){switch(this.state.currentView){case"imagesView":return s.a.createElement(w,{nextProps:this.next,lastNumProps:this.state.lastNum,prevProps:this.prev});case"videosView":return s.a.createElement(S,null);case"galleryView":return s.a.createElement(x,null);case"classifView":return s.a.createElement(V,null);case"addressesView":return s.a.createElement(F,null);case"newFormView":return s.a.createElement(Y,null);case"mainView":return s.a.createElement(v,null);case"EntranceView":return s.a.createElement(f,{handleClick:this.handleClick});default:return s.a.createElement(v,null)}}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},"EntranceView"===this.state.currentView?null:s.a.createElement("div",null,s.a.createElement(b,{handleClickMenuText:this.handleClickMenuText})),this.getView())}}]),t}(n.Component);c.a.render(s.a.createElement(J,null),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.01a5815c.chunk.js.map