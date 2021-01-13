(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),s=n.n(r),o=n(19),c=n.n(o),i=(n(64),n(8)),u=n(10),l=n(17),h=n(14),p=n(13),d=(n(65),n(105)),m=n(106),j=n(107),f=n(108),b=n(110),k=n(109),O=n(42),v=n.n(O);function y(e){switch(e=e.toLowerCase()){case"normal":return"#a8a878";case"fire":return"#f08030";case"water":return"#6890f0";case"grass":return"#78c850";case"electric":return"#f8d030";case"ice":return"#98d8d8";case"ground":return"#e0c068";case"flying":return"#a890f0";case"poison":return"#a040a0";case"fighting":return"#c03028";case"psychic":return"#f85888";case"dark":return"#705848";case"rock":return"#b8a038";case"bug":return"#a8b820";case"ghost":return"#705898";case"steel":return"#b8b8d0";case"dragon":return"#7038F8";case"fairy":return"#ffaec9";default:return"#f0f0f0"}}var g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).divStyle={backgroundColor:y(e.props.type)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{style:this.divStyle,className:"PokemonType",children:this.props.type})}}]),n}(s.a.Component),x=n(113),C=n(43),P=n.n(C),w=function(e){var t=e.bgcolor,n=e.completed,r={borderRadius:"10px",padding:2,width:"".concat(n,"%"),backgroundColor:t};return Object(a.jsx)("div",{style:{borderRadius:"10px",backgroundColor:"#e0e0de"},children:Object(a.jsx)("div",{style:r,children:Object(a.jsx)("span",{style:{padding:5,color:"white"},children:"".concat(n)})})})},N=function(e){return e.includes("-")?e.split("-").join(" "):e},E=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getColorByStat=function(e){switch(e){case"hp":return"#ff0000";case"attack":return"#F08030";case"defense":return"#F8D030";case"special-attack":return"#6890F0";case"special-defense":return"#78C850";case"speed":return"#F85888";default:return"#ffffff"}},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[N((t=this.props.name,t.charAt(0).toUpperCase()+t.slice(1))),Object(a.jsx)(w,{bgcolor:this.getColorByStat(this.props.name),completed:(e=this.props.base,100*(e-0)/100)})]});var e,t}}]),n}(s.a.Component),F=new(n(89).Pokedex),S=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},_=function(){function e(t){Object(i.a)(this,e),this._apiResult=t,this._name=t.name,this._image=t.sprites.front_default,this._stats=t.stats}return Object(u.a)(e,[{key:"name",get:function(){return S(this._name)}},{key:"image",get:function(){return this._image}},{key:"types",get:function(){var e=[];return this._apiResult.types.map((function(t){return e.push(t.type.name)})),e=(e=e.map((function(e){return S(e)}))).map((function(e,t){return Object(a.jsx)(x.a,{mr:1,display:"inline",children:Object(a.jsx)(g,{type:e},t)})}))}},{key:"stats",get:function(){return this._stats.map((function(e,t){return Object(a.jsx)(E,{name:e.stat.name,base:e.base_stat},t)}))}}]),e}(),L=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={pokemon:null,isFlipped:!1},a.handleClick=a.handleClick.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.mounted=!0,this.setPokemon(this.props.name)}}]),Object(u.a)(n,[{key:"setPokemon",value:function(e){var t=this;this.name=e,F.getPokemonByName(e).then((function(e){t.mounted&&t.setState({pokemon:new _(e)})})).catch((function(){t.setState({pokemon:void 0})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"handleClick",value:function(){this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){return void 0===this.state.pokemon?(v()("Looks like we didn't catch this Pokemon either!","Maybe you've misspelled it's name?","error"),this.state.pokemon=null,this.props.onError(this.name),Object(a.jsx)("div",{})):null===this.state.pokemon?Object(a.jsx)(d.a,{}):Object(a.jsxs)(P.a,{isFlipped:this.state.isFlipped,infinite:"true",children:[Object(a.jsx)("div",{onClick:this.handleClick,children:Object(a.jsxs)(m.a,{className:"PokemonCard",children:[Object(a.jsx)(j.a,{className:"PokemonImage",image:this.state.pokemon.image}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(k.a,{variant:"h5",children:this.state.pokemon.name}),Object(a.jsx)(b.a,{}),Object(a.jsx)(x.a,{mt:2,children:this.state.pokemon.types})]})]},this.state.pokemon.name)}),Object(a.jsx)("div",{onClick:this.handleClick,children:Object(a.jsx)(m.a,{className:"PokemonCard",children:Object(a.jsxs)(f.a,{children:[Object(a.jsx)(k.a,{variant:"h5",children:this.state.pokemon.name}),Object(a.jsx)(b.a,{}),this.state.pokemon.stats]})})})]})}}]),n}(s.a.Component);function A(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}var B=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).pokemons=e.props.pokemons,e.handleError=function(t){A(e.pokemons,t),e.props.onError()},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.pokemons.map((function(t){return Object(a.jsx)(L,{name:t,onError:e.handleError},t)}));return Object(a.jsx)("div",{className:"PokemonList",children:t})}}]),n}(s.a.Component),I=n(111),D=n(114);var R=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={pokemons:[]},a.handleClick=a.handleClick.bind(Object(l.a)(a)),a.handleError=a.handleError.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"handleClick",value:function(){var e=document.getElementById("NewPokemonName").value.toLowerCase();this.state.pokemons.unshift(e),this.setState({pokemons:this.state.pokemons}),document.getElementById("NewPokemonName").value=""}},{key:"handleError",value:function(e){!function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}(this.state.pokemons,e),this.setState({pokemons:this.state.pokemons})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(I.a,{position:"static",children:Object(a.jsx)("img",{className:"Logo",src:"https://i.imgur.com/3uepDa1.png",alt:"PokemonLogo"})}),Object(a.jsx)("input",{id:"NewPokemonName",placeholder:"Enter Pokemon Name",type:"text",className:"PokemonInput"}),Object(a.jsx)("div",{className:"center",children:Object(a.jsx)(D.a,{variant:"contained",color:"primary",size:"large",onClick:this.handleClick,children:"Add Pokemon"})}),Object(a.jsx)(B,{pokemons:this.state.pokemons,onError:this.handleError})]})}}]),n}(s.a.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),M()}},[[88,1,2]]]);
//# sourceMappingURL=main.914ab553.chunk.js.map