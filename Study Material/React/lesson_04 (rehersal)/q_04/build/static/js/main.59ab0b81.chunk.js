(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var a=c(1),r=c.n(a),o=c(7),n=c.n(o),s=c(2),l=c(3),i=c(5),u=c(4),d=c(0),p=function(t){Object(i.a)(c,t);var e=Object(u.a)(c);function c(t){var a;return Object(s.a)(this,c),(a=e.call(this,t)).state={type:"",color:""},a}return Object(l.a)(c,[{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{className:"add-vehicle",children:[Object(d.jsx)("h1",{children:"Add a vehicle"}),Object(d.jsx)("input",{type:"text",placeholder:"car type (audi, bmw, etc...)",value:this.state.type,onChange:function(e){t.setState({type:e.target.value})}}),Object(d.jsx)("input",{type:"text",placeholder:"car color (blue, red, etc...)",value:this.state.color,onChange:function(e){t.setState({color:e.target.value})}}),Object(d.jsx)("button",{onClick:function(){t.props.add(t.state.type,t.state.color),t.setState({type:"",color:""})},children:"Add"})]})}}]),c}(a.Component);var j=function(t){return Object(d.jsx)("div",{children:t.list.map((function(t,e){return Object(d.jsxs)("div",{className:"vehicle",style:{backgroundColor:t.color,color:"black"===t.color||"Black"===t.color?"white":"black"},children:[Object(d.jsxs)("h2",{children:["Type: ",t.type]}),Object(d.jsxs)("h3",{children:["Color: ",t.color]})]},e)}))})},h=function(t){Object(i.a)(c,t);var e=Object(u.a)(c);function c(){var t;Object(s.a)(this,c);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={cars:[{type:"Volkswagen",color:"black"},{type:"Audi",color:"grey"},{type:"Volvo",color:"teal"},{type:"Suzuki",color:"orange"}]},t.add=function(e,c){var a=t.state.cars.slice();a.unshift({type:e,color:c}),t.setState({cars:a})},t}return Object(l.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(p,{add:this.add}),Object(d.jsx)(j,{list:this.state.cars})]})}}]),c}(a.Component);c(13);n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.59ab0b81.chunk.js.map