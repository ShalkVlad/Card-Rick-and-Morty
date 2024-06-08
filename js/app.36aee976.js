(function(e){function t(t){for(var r,s,o=t[0],i=t[1],l=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&d.push(c[s][0]),c[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var i=a[o];0!==c[i]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},c={app:0},n=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Card-Rick-and-Morty/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=i;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("7a23");const c={id:"app"};function n(e,t,a,n,s,o){const i=Object(r["k"])("CharacterList");return Object(r["g"])(),Object(r["d"])("div",c,[Object(r["f"])(i)])}const s=e=>(Object(r["i"])("data-v-77cf4dd9"),e=e(),Object(r["h"])(),e),o={class:"filters"},i=s(()=>Object(r["e"])("option",{value:""}," All ",-1)),l=s(()=>Object(r["e"])("option",{value:"alive"}," Alive ",-1)),u=s(()=>Object(r["e"])("option",{value:"dead"}," Dead ",-1)),p=s(()=>Object(r["e"])("option",{value:"unknown"}," Unknown ",-1)),d=[i,l,u,p],b={class:"character-list"},f={class:"pagination"},h=["disabled"],O=["disabled"];function j(e,t,a,c,n,s){const i=Object(r["k"])("Card");return Object(r["g"])(),Object(r["d"])("div",null,[Object(r["e"])("div",o,[Object(r["o"])(Object(r["e"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.filters.name=e),class:"filter-input",placeholder:"Name"},null,512),[[r["n"],n.filters.name]]),Object(r["o"])(Object(r["e"])("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.filters.status=e),class:"filter-select"},d,512),[[r["m"],n.filters.status]]),Object(r["e"])("button",{class:"filter-button",onClick:t[2]||(t[2]=(...e)=>s.applyFilters&&s.applyFilters(...e))}," Apply ")]),Object(r["e"])("div",b,[(Object(r["g"])(!0),Object(r["d"])(r["a"],null,Object(r["j"])(n.characters,e=>(Object(r["g"])(),Object(r["c"])(i,{key:e.id,character:e},null,8,["character"]))),128))]),Object(r["e"])("div",f,[Object(r["e"])("button",{class:"pagination-button",disabled:1===n.currentPage,onClick:t[3]||(t[3]=e=>s.changePage(n.currentPage-1))}," Previous ",8,h),Object(r["e"])("span",null," Page "+Object(r["l"])(n.currentPage)+" of "+Object(r["l"])(n.totalPages),1),Object(r["e"])("button",{class:"pagination-button",disabled:n.currentPage===n.totalPages,onClick:t[4]||(t[4]=e=>s.changePage(n.currentPage+1))}," Next ",8,O)])])}var g=a("cee4");const v={class:"character-card animate__animated animate__fadeInUp"},m=["src","alt"];function y(e,t,a,c,n,s){return Object(r["g"])(),Object(r["d"])("div",v,[Object(r["e"])("img",{src:a.character.image,alt:"Image of "+a.character.name},null,8,m),Object(r["e"])("h2",null,Object(r["l"])(a.character.name),1),Object(r["e"])("p",null,"Status: "+Object(r["l"])(a.character.status),1),Object(r["e"])("p",null,"Species: "+Object(r["l"])(a.character.species),1),Object(r["e"])("p",null,"Gender: "+Object(r["l"])(a.character.gender),1),Object(r["e"])("p",null,"Origin: "+Object(r["l"])(a.character.origin.name),1)])}var P={name:"CharacterCard",props:{character:{type:Object,required:!0}}},C=(a("a55b"),a("6b0d")),_=a.n(C);const k=_()(P,[["render",y],["__scopeId","data-v-6c6ae4ce"]]);var w=k,x={name:"CharacterList",components:{Card:w},data(){return{characters:[],currentPage:1,totalPages:1,filters:{name:"",status:""}}},mounted(){this.fetchCharacters()},methods:{async fetchCharacters(){const e={page:this.currentPage,name:this.filters.name,status:this.filters.status};try{const t=await g["a"].get("https://rickandmortyapi.com/api/character",{params:e});this.characters=t.data.results,this.totalPages=t.data.info.pages}catch(t){console.error("Error fetching characters:",t)}},changePage(e){e>=1&&e<=this.totalPages&&(this.currentPage=e,this.fetchCharacters())},applyFilters(){this.currentPage=1,this.fetchCharacters()}}};a("e3a3");const S=_()(x,[["render",j],["__scopeId","data-v-77cf4dd9"]]);var M=S,A={name:"App",components:{CharacterList:M}};a("7311");const I=_()(A,[["render",n]]);var U=I;Object(r["b"])(U).mount("#app")},"672d":function(e,t,a){},7311:function(e,t,a){"use strict";a("c771")},"809c":function(e,t,a){},a55b:function(e,t,a){"use strict";a("809c")},c771:function(e,t,a){},e3a3:function(e,t,a){"use strict";a("672d")}});
//# sourceMappingURL=app.36aee976.js.map