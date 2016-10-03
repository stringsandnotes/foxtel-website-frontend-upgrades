/*! sajari-widgets 09-02-2015 */
function contentLoaded(t,e){var n=!1,i=!0,o=t.document,r=o.documentElement,s=o.addEventListener,a=s?"addEventListener":"attachEvent",c=s?"removeEventListener":"detachEvent",u=s?"":"on",l=function(i){("readystatechange"!=i.type||"complete"==o.readyState)&&(("load"==i.type?t:o)[c](u+i.type,l,!1),!n&&(n=!0)&&e.call(t,i.type||i))},d=function(){try{r.doScroll("left")}catch(t){return setTimeout(d,50),void 0}l("poll")};if("complete"==o.readyState)e.call(t,"lazy");else{if(!s&&r.doScroll){try{i=!t.frameElement}catch(f){}i&&d()}o[a](u+"DOMContentLoaded",l,!1),o[a](u+"readystatechange",l,!1),t[a](u+"load",l,!1)}}(function(t){var e=document.getElementsByTagName("head")[0].getElementsByTagName("script"),n=e.length>0?/(^|\/)sj\.js\?(.+&)?(amd|jquery)(&|$)/.exec(e[e.length-1].src)||[]:[];"amd"===n[3]?define(t):"jquery"===n[3]?(window._sj=window.SJ=jQuery.SJ=t(),jQuery.fn.sj=function(){this.each(function(){$(this).is("input[type=text]")?jQuery.SJ.__installInput(this):jQuery.SJ.__installGo(this)})}):window._sj=window.SJ=t()})(function(){function t(t){if(n(t))for(var e=0;t.length>e;e++)W.push(t[e]);else if("object"==typeof t)for(var e in t){var i=n(t[e])?t[e].slice():[t[e]];i.unshift(e),W.push(i)}q()}function e(t){U&&console.log(t)}function n(t){return"[object Array]"===Object.prototype.toString.call(t)}function i(t,e,n,i){var o=!0,r="";if(t.indexOf("#")>0){var s=t.indexOf("#");r=t.substring(t.indexOf("#"),t.length)}else{r="";var s=t.length}var a=t.substring(0,s),c=a.split("?"),u="";if(c.length>1)for(var l=c[1].split("&"),d=0;l.length>d;d++){var f=l[d].split("=");o&&f[0]==e||(""==u?u="?":u+="&",u+=f[0]+"="+(f[1]?f[1]:""))}return""==u&&(u="?"),i?u="?"+e+"="+n+(u.length>1?"&"+u.substring(1):""):(""!==u&&"?"!=u&&(u+="&"),u+=e+"="+(n?n:"")),c[0]+u+r}function o(t){return decodeURIComponent((RegExp("[?|&]"+t+"="+"([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null}function r(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on"+e,function(e){n.apply(t,[e])})}function s(t){for(var e="",n="abcdefghijklmnopqrstuvwxyz0123456789",i=0;t>i;i++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}function a(t){return(void 0===ae||t)&&(ae=s(16)),ae}function c(){return void 0===se&&(se=g("sjID"),void 0===se&&(se=(new Date).getTime()+"."+Math.floor(1e6*Math.random())),m("sjID",se,365)),se}function u(){var t="",e=g("_ga");if(void 0!==e){var n=e.split(".");n.length>2&&(t=n[2])}return t}function l(t,e){var n,i={company:oe,collection:ie},o=/^([^\?]+)\?(.+)+$/.exec(t);for(n in ne)i[n]=ne[n];for(n in e)i[n]=e[n];return o?o[1]+"?"+p(i,o[2]):t+"?"+f(i)}function d(t){var e={},n=t.split("&");for(var i in n)if(n.hasOwnProperty(i)){var o=n[i].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}function f(t){var e=[];for(var n in t)e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")}function p(t){for(var e="string"==typeof t?d(t):t,n=1;arguments.length>n;n++)if(void 0!==arguments[n]){var i="string"==typeof arguments[n]?d(arguments[n]):arguments[n];for(var o in i)e[o]=i[o]}return f(e)}function h(t,n){var i=new Image;i.onerror=function(){e("Failed sending: "+i.src)},i.onload=function(){e("Successful send: "+i.src)},i.src=l(void 0===n?V:n,t)}function v(t,e,n){var i="_jsonp_"+re++,o=document.createElement("script");window["__SJ"+i]=function(t){e(t);try{delete window["__SJ"+i]}catch(n){window["__SJ"+i]=void 0}o.parentNode.removeChild(o)},o.onerror=function(){n();try{delete window["__SJ"+i]}catch(t){window["__SJ"+i]=void 0}o.parentNode.removeChild(o)},o.src=l(t,{jsoncallback:"__SJ"+i}),document.getElementsByTagName("head")[0].appendChild(o)}function y(t){var e,n=document.getElementsByTagName("meta");for(e=0;n.length>e;e++)if(n[e].getAttribute("name")==t)return n[e].getAttribute("content");return""}function m(t,e,n){var i="",o=";domain="+window.location.hostname.toLowerCase().replace(/^www(.)/,""),r=";path=/";if(n){var s=new Date;s.setTime(s.getTime()+1e3*60*60*24*n),i=";expires="+s.toGMTString()}document.cookie=t+"="+escape(e)+i+o+r}function g(t){for(var e=t+"=",n=document.cookie.split(";"),i=0;n.length>i;i++){for(var o=n[i];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return void 0}function j(t){if(!Z){Z=!0;var e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),e.setAttribute("href",t),document.getElementsByTagName("head")[0].appendChild(e)}}function w(t){var e=document.createElement("div");return e.appendChild(document.createTextNode(t)),e.innerHTML}function b(t){var e="",n="blue";if("object"==typeof t)for(var i in t)t.hasOwnProperty(i)&&(e+=" data-sj-"+i+"="+t[i],"theme"==i&&(n=t[i]));if(void 0===ue?(ue=document.createElement("div"),ue.style.display="none",ue.className="sj-search",ue.innerHTML='<div class="sj-shade"></div><div class="sj-search-modal sj-cf"><div class="sj-close">&times;</div><form class="sj-search-form"><div id="sj-search-bar"><span id="sj-icon-search"></span><input type="text" placeholder="search this site" /><button type="submit" class="sj-search-go '+n+'">Search</button>'+"</div>"+"</form>"+'<div class="sj-results"'+e+"></div>"+"</div>",document.body.appendChild(ue),r(ue.lastChild.firstChild,"click",function(){this.parentNode.parentNode.style.display="none"}),r(ue.firstChild,"click",function(){this.parentNode.style.display="none"}),R(ue.lastChild.childNodes[1].lastChild.lastChild,O(ue.lastChild.childNodes[1].firstChild.childNodes[1])),void 0!==N("search-query")&&ce["search-query"].push(ue.lastChild.childNodes[1].firstChild.childNodes[1])):ue.lastChild.lastChild.innerHTML="","object"==typeof t){for(var o=ue.lastChild.childNodes[1].firstChild.childNodes[1],s=0;o.attributes.length>s;s++){var a=o.attributes[s];a.specified&&"data-sj-"===a.name.substr(0,8)&&o.removeAttribute(a.name)}for(var c in t)o.setAttribute("data-sj-"+c,t[c])}return ue.style.display="block",ue.lastChild.lastChild}function k(t,e,n){if(1===t.nodeType){for(var i=0;e.length>i;i++)t.hasAttribute($+e[i])&&(void 0===n[e[i]]&&(n[e[i]]=[]),n[e[i]].push(t));if(void 0!==t.childNodes)for(var o=0;t.childNodes.length>o;o++)k(t.childNodes[o],e,n)}}function q(){for(var t;t=W.shift();){var e=t.shift();void 0!==he[e]&&he[e].apply(void 0,t)}Q>0&&setTimeout(q,Q)}function C(t){var e,n={};for(var i in t.attributes){var o=t.attributes[i];o.specified&&(e=/^data\-sj\-(.+)$/.exec(o.name),e&&-1===Y.indexOf(e[1])&&(n[e[1]]=o.value))}return n}function S(t){var e=[],n=C(t);for(var i in n)e.push(encodeURIComponent(i)+"="+encodeURIComponent(n[i]));return e.join("&")}function x(t,e){if(_(t))for(var n=0;ce[t].length>n;n++)e(ce[t][n],$+t)}function _(t){return void 0!==ce[t]&&ce[t].length>0}function N(t){return _(t)?ce[t][0]:void 0}function E(t,e){var n=N(t);return void 0!==n?n.getAttribute($+t):e}function T(t,e,n){var o,r,s,a,c,u=t.response.results,l=!1,d=!1,f=[],p=[],h=C(e);for(var v in h)h.hasOwnProperty(v)&&("thumbnail"==v&&(l=!0),"hidedesc"==v&&(d=!0),"showmeta"==v&&(f=h[v].split(/\s*,\s*/)));if(void 0!==N("search-error")&&(N("search-error").style.display="none"),0===u.length)return _("search-results")&&_("search-noresults")?void 0!==N("search-noresults")&&(N("search-noresults").style.display="block"):e.innerHTML='<p class="sj-noresults">No results found.</p>',void 0;for(void 0!==N("search-noresults")&&(N("search-noresults").style.display="none"),o=0;u.length>o;o++){if(r="",!l||void 0===u[o].meta.image||"https:"===window.location.protocol&&"http:"===u[o].meta.image.substr(0,5)||(r='<div class="sj-thumb-wrapper"><div class="sj-result-thumb" style="background-image:url('+w(u[o].meta.image)+');"></div></div>'),a="",a=void 0!==t.response.queryID?i(w(u[o].meta.url),"q.id",t.response.queryID,!1):w(u[o].meta.url),a=i(a,"q.sl",o+1,!1),s="",!d&&(s='<p class="sj-result-meta"><span class="sj-result-meta-desc">'+w(u[o].meta.description)+"</span></p>",f.length>0)){s+='<p class="sj-result-meta">';for(var y=0;f.length>y;y++)s+='<span class="sj-result-meta-name">'+f[y]+' : </span><span class="sj-result-meta-value">'+w(u[o].meta[f[y]])+"</span>";s+="</p>"}p.push('<div class="sj-result-item">'+r+'<div class="sj-result-wrapper">'+'<div class="sj-result-title" data-docid='+w(u[o].docId)+">"+'<a class="sj-result-link" href="'+a+'">'+w(u[o].meta.title)+"</a>"+"</div>"+s+"</div>"+"</div>")}if(c="","search"==n){if(void 0!==t.response.fuzzy){var m=le,g=t.response.fuzzy;for(var j in g)g.hasOwnProperty(j)&&(m=m.replace(j,g[j]));m.length>0&&(c+='<p class="sj-search-info sj-search-fuzzy">Showing results for <strong>'+m+"</strong></p>")}c+='<p class="sj-search-info">Showing 1-'+u.length+" of "+t.response.totalmatches+" results ("+parseFloat(t.msecs/1e3).toFixed(3)+" seconds)</p>"}e.innerHTML=c+p.join("")}function A(t){_("search-results")&&_("search-error")?void 0!==N("search-error")&&(N("search-error").style.display="block"):t.innerHTML='<p class="sj-error">Oops! An error occured while searching. Please try again.</p>'}function I(){var t=this,e=this.value;if(!pe){if(void 0!==N("search-query")&&_("search-results")){var n=N("search-results"),i=C(this);if("object"==typeof i)for(var o in i)i.hasOwnProperty(o)&&n.setAttribute("data-sj-"+o,i[o])}pe=!0}fe=_("search-results")?N("search-results"):b(C(this)),de||(de=!0,X.Search(this.value.replace(/(^ *| *$)/,""),function(n){de=!1,T(n,fe,"search"),t.value!==e&&L(t)&&I.apply(t)},function(){de=!1,A(fe)},S(this)),le=t.value,x("search-query",function(e){t!==e&&(e.value=t.value)}))}function O(t){return r(t,"keydown",function(t){13===t.keyCode&&(I.apply(this),void 0!==t.preventDefault&&t.preventDefault())}),r(t,"change",function(){x("search-query",function(e){t!==e&&(e.value=t.value)})}),L(t)&&r(t,"keyup",function(t){(t.keyCode>32||8===t.keyCode||16===t.keyCode)&&I.apply(this)}),t}function L(t){var e=C(t);for(var n in e)if(e.hasOwnProperty(n)&&"search-query-instant"==n)return!0;return!1}function R(t,e){return r(t,"click",function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,I.apply(e?e:N("search-query"))}),t}function M(t){this.options=t}function D(t){return Math.round((t.valueOf()+(new Date).getTimezoneOffset())/1e3)}function z(t){if("[object Date]"===Object.prototype.toString.call(t))return D(t);if("string"!=typeof t&&"number"!=typeof t)throw"Invalid Sajari query value: ("+typeof t+") "+t;return""+t}function B(t){if("[object Date]"===Object.prototype.toString.call(t))return D(t);if("number"!=typeof t)throw"Invalid Sajari query numeric value: ("+typeof t+") "+t;return t}function J(t){switch(t.op){case">":case"<":case"<=":case">=":case"^":case"$":case"!=":case"~":break;case"starts-with":t.op="^";break;case"ends-with":t.op="$";break;case"contains":t.op="~";break;default:t.op=""}if("string"!=typeof t.key)throw"Invalid Sajari filter key: ("+typeof t.key+") "+t.key;return""===t.op?t.key+","+z(t.value):t.op+t.key+","+z(t.value)}function P(t){if("string"!=typeof t.key)throw"Invalid Sajari scale key: ("+typeof t.key+") "+t.key;return void 0!==t.center&&(t.centre=t.center),t.key+","+B(t.centre)+","+B(t.radius)+","+B(t.start)+","+B(t.finish)}var U=!1,$="data-sj-",H=2e4,Q=100,F=!0,G="https://re.sajari.com",V="https://www.sajari.com/api",K="https://www.sajari.com/css/sj.css",W=[],X=function(e){return t(e),this},Y=["company","collection","profile-id","noindex","noprofile","profile-delay","conv-type","search-query","search-query-word","search-query-go","search-results","recent","popular","related","best","search-recent","search-noresults","search-error","personalization"],Z=!1,te=!1,ee=!1,ne={},ie=void 0,oe=void 0,re=0,se=void 0,ae=void 0,ce={},ue=void 0,le="",de=!1,fe=void 0,pe=!1;Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var e=this.length>>>0,n=Number(arguments[1])||0;for(n=0>n?Math.ceil(n):Math.floor(n),0>n&&(n+=e);e>n;n++)if(n in this&&this[n]===t)return n;return-1});var he={profile:function(t){if(!ee){ee=!0;var e=u(),n=c();h({"profile.text":t+"","p.ga":e,"p.id":n},V+"/stats/profile")}},conversion:function(t,e){(null===e||void 0===e)&&(e=0);var n=u(),i=c();h({"cv.t":t+"","cv.v":e+"","p.ga":n,"p.id":i},V+"/stats/conversion")},click:function(t,e){var n=u(),i=c();h({"p.ga":n,"p.id":i,"q.id":t,"q.sl":e},V+"/stats/click")},index:function(){if(te)return e("Already indexed"),void 0;te=!0;var t=u(),n=c();h({"ec.ti":document.title,"ec.de":y("description"),"ec.ke":y("keywords"),"e.id":document.URL,"cc.co":oe,"cc.pr":ie,"p.ga":t,"p.id":n},G)},noindex:function(){te=!0},nocss:function(){Z=!0},noprofile:function(){ee=!0},identity:function(t,e){ne[t]=e+""},collection:function(t){ie=t+""},company:function(t){oe=t+""},"no-scan":function(){F=!1},debug:function(t){U=t?!0:!1},overlay:function(t){b(t)}};return X.Search=function(t,e,n,i){var o={q:t,"p.id":c(),"q.id":a(!1)};_("personalization")&&(o["profile.query"]="true",o.personalization="true"),_("search-recent")&&(o.recent="true"),v(V+"/search?"+p(o,i),function(n){e(n,t)},n)},X.Popular=function(t,e,n){var i=V+"/popular";void 0!==n&&(i+="?"+n),v(i,function(e){t(e)},e)},X.Recent=function(t,e,n){var i=V+"/recent";void 0!==n&&(i+="?"+n),v(i,function(e){t(e)},e)},X.Related=function(t,e,n){var i={url:location.href,title:document.title,description:y("description")};v(V+"/related?"+p(i,n),function(e){t(e)},e)},X.Best=function(t,e,n){var i={"p.id":c()};v(V+"/best?"+p(i,n),function(i){0===i.response.results.length?X.Popular(t,e,n):t(i)},e)},X.__installInput=function(t){O(t),void 0===ce["search-query"]&&(ce["search-query"]=[]),ce["search-query"].push(t)},X.__installGo=function(t){R(t)},X.Scan=function(){var t;if(pe=!1,ce={},void 0!==document.getElementsByAttribute)for(var e=0;Y.length>e;e++)t=document.getElementsByAttribute($+Y[e],"*"),t.length>0&&(ce[Y[e]]=t);else k(document.body,Y,ce)},X.Install=function(e){if(t(e),oe=E("company",oe),ie=E("collection",ie),void 0!==oe&&void 0!==ie){if(!_("noprofile")){setTimeout(function(){W.push(["profile",document.title]),q()},E("profile-delay",H));for(var n=document.getElementsByTagName("a"),i=0;n.length>i;i++)/^#/.test(n[i].getAttribute("href")+"")&&r(n[i],"mousedown",function(){W.push(["profile",void 0===this.innerText?this.textContent:this.innerText]),q()})}_("noindex")||W.push(["index"]),x("conv-type",function(t,e){W.push(["conversion",t.getAttribute(e),t.getAttribute($+"conv-val")])});var s=o("q.id");s&&W.push(["click",s,o("q.sl")]),q(),j(K),_("popular")&&X.Popular(function(t){T(t,N("popular"),"popular")},function(){},S(N("popular"))),_("recent")&&X.Recent(function(t){T(t,N("recent"),"recent")},function(){},S(N("recent"))),_("related")&&X.Related(function(t){T(t,N("related"),"related")},function(){},S(N("related"))),_("best")&&X.Best(function(t){T(t,N("best"),"best")},function(){},S(N("best"))),fe=void 0,pe=!1,_("search-query")&&(x("search-query",function(t){O(t)}),_("search-query-go")?x("search-query-go",function(t){R(t)}):_("search-results")&&x("search-query",function(t){_("search-query-word")&&r(t,"keyup",function(t){32===t.keyCode&&I.apply(this)}),r(t,"change",I)}))}},X.push=function(t){W.push(t)},X.Query=function(t){return"string"==typeof t?t={q:t}:"object"!=typeof t&&(t={}),t.func="search",new M(t)},X.Recommend=function(t){return"string"==typeof t?t={func:t}:"object"!=typeof t&&(t={}),new M(t)},M.prototype.run=function(t,e){try{var n="string"==typeof this.options.q?this.options.q:"",i={};void 0!==this.options.cols&&(i.cols=this.options.cols.join(","));for(var o=["url","facet.fields","facet.limit","facet.metric.field","facet.metric.start","facet.metric.end","facet.metric.gap","facet.date.start","facet.date.end","facet.date.gap","page"],r=0;o.length>r;r++)void 0!==this.options[o[r]]&&(i[o[r]]=this.options[o[r]]);if(void 0!==this.options.filters){for(var s=[],r=0;this.options.filters.length>r;r++)s.push(J(this.options.filters[r]));s.length>0&&(i.filters=s.join("|"))}if(void 0!==this.options.scales){for(var a=[],r=0;this.options.scales.length>r;r++)a.push(P(this.options.scales[r]));a.length>0&&(i.scales=a.join("|"))}if(void 0!==this.options.attrs)for(var r=0;this.options.attrs.length>r;r++)i[this.options.attrs[r].key]=this.options.attrs[r].value;void 0!==this.options.func&&("search"==this.options.func?X.Search(n,t,e,f(i)):"best"==this.options.func?X.Best(t,e,f(i)):"popular"==this.options.func?X.Popular(t,e,f(i)):"recent"==this.options.func?X.Recent(t,e,f(i)):"related"==this.options.func&&X.Related(t,e,f(i)))}catch(c){e(""+c)}},M.prototype.cols=function(t){return this.options.cols=t,this},M.prototype.url=function(t){return this.options.url=t,this},M.prototype.page=function(t){return this.options.page=t,this},M.prototype.facetfields=function(t,e){return this.options["facet.fields"]=t,this.options["facet.limit"]=e,this},M.prototype.metricfacet=function(t,e,n,i){return this.options["facet.metric.field"]=t,this.options["facet.metric.start"]=e,this.options["facet.metric.end"]=n,this.options["facet.metric.gap"]=i,this},M.prototype.datefacet=function(t,e,n){return this.options["facet.date.start"]=t,this.options["facet.date.end"]=e,this.options["facet.date.gap"]=n,this},M.prototype.filter=function(t,e,n){return void 0===this.options.filters&&(this.options.filters=[]),this.options.filters.push({key:t,op:e,value:n}),this},M.prototype.scale=function(t,e,n,i,o){return void 0===this.options.scales&&(this.options.scales=[]),this.options.scales.push({key:t,centre:e,radius:n,start:i,finish:o}),this},M.prototype.attr=function(t,e){return void 0===this.options.attrs&&(this.options.attrs=[]),this.options.attrs.push({key:t,value:e}),this},void 0!==window._sj&&n(window._sj)&&(t(window._sj),window._sj=X),function(){contentLoaded(window,function(){F&&(X.Scan(),X.Install()),q()})}(),X});