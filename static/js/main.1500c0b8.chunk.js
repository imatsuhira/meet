(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(20),s=n.n(o),c=(n(26),n(3)),i=n(4),u=n(6),l=n(5),h=(n(27),n(21)),d=n(7),p=n.n(d),m=n(8),v=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"}}],f=n(10),b=n.n(f),j=n(9),w=n.n(j),g=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return w.a.done(),e.abrupt("return",v);case 4:return e.next=6,x();case 6:if(!(t=e.sent)){e.next=16;break}return O(),n="https://mkyjyx3r2d.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,b.a.get(n);case 12:return(a=e.sent).data&&(r=S(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),w.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,a,r,o,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,g(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,b.a.get("https://mkyjyx3r2d.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&k(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},k=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://mkyjyx3r2d.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t=e.map((function(e){return e.location}));return Object(h.a)(new Set(t))},C=(n(47),n(0)),N=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(C.jsxs)("div",{className:"CitySearch",children:[Object(C.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(C.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(C.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(C.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(C.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),Z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isEventDetailsShown:!1},e.handleClick=function(t){e.setState({isEventDetailsShown:!e.state.isEventDetailsShown})},e}return Object(i.a)(n,[{key:"render",value:function(){var e,t,n=this.props.event;return Object(C.jsxs)("div",{className:"event",children:[Object(C.jsx)("h2",{className:"event-summary",children:n.summary}),Object(C.jsx)("p",{className:"event-time",children:null===(e=n.start)||void 0===e?void 0:e.dateTime}),Object(C.jsx)("p",{className:"event-summery-at",children:null===(t=n.organizer)||void 0===t?void 0:t.email}),Object(C.jsx)("p",{className:"event-location",children:n.location}),this.state.isEventDetailsShown?Object(C.jsxs)("div",{className:"hidden-details",children:[Object(C.jsx)("h3",{children:"About event"}),Object(C.jsx)("a",{href:n.htmlLink,children:"See details on Google Calendar"}),Object(C.jsx)("p",{children:n.description})]}):null,this.state.isEventDetailsShown?Object(C.jsx)("button",{className:"hide-details-btn",onClick:this.handleClick,children:"hide details"}):Object(C.jsx)("button",{className:"show-details-btn",onClick:this.handleClick,children:"show details"})]})}}]),n}(a.Component),T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(C.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(C.jsx)("li",{children:Object(C.jsx)(Z,{event:e})},e.id)}))})}}]),n}(a.Component),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={eventsPerPage:32},e.handleChange=function(t){e.setState({eventsPerPage:t.target.value})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"number-of-events",children:[Object(C.jsx)("p",{children:"Number of events"}),Object(C.jsx)("input",{type:"number",min:"0",className:"eventsNumber",value:this.state.eventsPerPage,placeholder:this.state.eventsPerPage,onChange:this.handleChange})]})}}]),n}(a.Component),A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[]},e.updateEvents=function(t){y().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,y().then((function(t){e.mounted&&e.setState({events:t,locations:S(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(N,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(C.jsx)(M,{}),Object(C.jsx)(T,{events:this.state.events})]})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(A,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),W()}},[[49,1,2]]]);
//# sourceMappingURL=main.1500c0b8.chunk.js.map