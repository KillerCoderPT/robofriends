(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),o=n.n(c),s=n(7),i=n.n(s),a=(n(13),n(2)),h=n(3),d=n(5),l=n(4),b=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},j=function(e){var t=e.id,n=e.name,c=e.email;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(t+n,"?200x200"),alt:"robots"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:c})]})]})},u=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e){return Object(r.jsx)(j,{id:e.id,name:e.name,email:e.email},e.id)}))})},f=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",borderTop:"2px solid #1347b6",borderBottom:"2px solid #1347b6",height:"75vh"},children:e.children})},O=(n(14),function(){return Object(r.jsx)("footer",{children:Object(r.jsxs)("p",{children:["RoboFriends designed by ",Object(r.jsx)("a",{href:"https://zerotomastery.io/",children:"ZTM"})," edited and coded by ",Object(r.jsx)("a",{href:"https://killercoder.netlify.app/",children:"KillerCoder"}),"."]})})}),p=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Ooops! That is not good!"}):this.props.children}}]),n}(c.Component),x=(n(15),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return c.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(b,{searchChange:this.onSearchChange}),Object(r.jsx)(f,{children:Object(r.jsx)(p,{children:Object(r.jsx)(u,{robots:c})})}),Object(r.jsx)(O,{})]}):Object(r.jsx)("h1",{children:"Loading"})}}]),n}(c.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))};n(16);i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.620b576f.chunk.js.map