(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(8),s=n.n(o),i=(n(14),n(3)),r=n(4),l=n(6),h=n(5),m=(n(15),n(0));var u=function(){return Object(m.jsxs)("header",{children:[Object(m.jsx)("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Problem?"}),Object(m.jsx)("p",{children:"Meme Generator"})]})},j=n(9),b=n(2),d=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={topText:"",bottomText:"",randomImage:"http://i.imgflip.com/1bij.jpg",allMemeImg:[]},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var n=t.data.memes;e.setState({allMemeImg:n})}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(j.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImg.length),n=this.state.allMemeImg[t].url;this.setState({randomImage:n})}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("form",{className:"meme-form",onSubmit:this.handleSubmit,children:[Object(m.jsx)("input",{type:"text",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange}),Object(m.jsx)("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.handleChange}),Object(m.jsx)("button",{children:"Gen"})]}),Object(m.jsxs)("div",{className:"meme",children:[Object(m.jsx)("img",{src:this.state.randomImage,alt:""}),Object(m.jsx)("h2",{className:"top",children:this.state.topText}),Object(m.jsx)("h2",{className:"bottom",children:this.state.bottomText})]})]})}}]),n}(c.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(u,{}),Object(m.jsx)(d,{})]})}}]),n}(c.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.00788c34.chunk.js.map