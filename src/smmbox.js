var SmmBox=function(){function e(e){return"string"==typeof e}function t(e){return e.indexOf("http://")>=0||e.indexOf("https://")>=0}function n(e){var t=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,n=e.match(t);return!(!n||11!==n[7].length)&&n[7]}function r(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r>127&&r<2048?(t+=String.fromCharCode(r>>6|192),t+=String.fromCharCode(63&r|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(63&r|128))}return t}function o(e){var t,n,o,i,a,u,s,c,l,m=function(e,t){return e<<t|e>>>32-t},f=function(e,t){var n,r,o,i,a;return o=2147483648&e,i=2147483648&t,n=1073741824&e,r=1073741824&t,a=(1073741823&e)+(1073741823&t),n&r?2147483648^a^o^i:n|r?1073741824&a?3221225472^a^o^i:1073741824^a^o^i:a^o^i},d=function(e,t,n){return e&t|~e&n},h=function(e,t,n){return e&n|t&~n},v=function(e,t,n){return e^t^n},g=function(e,t,n){return t^(e|~n)},w=function(e,t,n,r,o,i,a){return e=f(e,f(f(d(t,n,r),o),a)),f(m(e,i),t)},x=function(e,t,n,r,o,i,a){return e=f(e,f(f(h(t,n,r),o),a)),f(m(e,i),t)},b=function(e,t,n,r,o,i,a){return e=f(e,f(f(v(t,n,r),o),a)),f(m(e,i),t)},y=function(e,t,n,r,o,i,a){return e=f(e,f(f(g(t,n,r),o),a)),f(m(e,i),t)},p=function(e){var t,n="",r="";for(t=0;t<=3;t++)n+=(r="0"+(e>>>8*t&255).toString(16)).substr(r.length-2,2);return n},S=Array();for(S=function(e){for(var t,n=e.length,r=n+8,o=16*((r-r%64)/64+1),i=Array(o-1),a=0,u=0;u<n;)a=u%4*8,i[t=(u-u%4)/4]=i[t]|e.charCodeAt(u)<<a,u++;return t=(u-u%4)/4,a=u%4*8,i[t]=i[t]|128<<a,i[o-2]=n<<3,i[o-1]=n>>>29,i}(e=r(e)),u=1732584193,s=4023233417,c=2562383102,l=271733878,t=0;t<S.length;t+=16)n=u,o=s,i=c,a=l,s=y(s=y(s=y(s=y(s=b(s=b(s=b(s=b(s=x(s=x(s=x(s=x(s=w(s=w(s=w(s=w(s,c=w(c,l=w(l,u=w(u,s,c,l,S[t+0],7,3614090360),s,c,S[t+1],12,3905402710),u,s,S[t+2],17,606105819),l,u,S[t+3],22,3250441966),c=w(c,l=w(l,u=w(u,s,c,l,S[t+4],7,4118548399),s,c,S[t+5],12,1200080426),u,s,S[t+6],17,2821735955),l,u,S[t+7],22,4249261313),c=w(c,l=w(l,u=w(u,s,c,l,S[t+8],7,1770035416),s,c,S[t+9],12,2336552879),u,s,S[t+10],17,4294925233),l,u,S[t+11],22,2304563134),c=w(c,l=w(l,u=w(u,s,c,l,S[t+12],7,1804603682),s,c,S[t+13],12,4254626195),u,s,S[t+14],17,2792965006),l,u,S[t+15],22,1236535329),c=x(c,l=x(l,u=x(u,s,c,l,S[t+1],5,4129170786),s,c,S[t+6],9,3225465664),u,s,S[t+11],14,643717713),l,u,S[t+0],20,3921069994),c=x(c,l=x(l,u=x(u,s,c,l,S[t+5],5,3593408605),s,c,S[t+10],9,38016083),u,s,S[t+15],14,3634488961),l,u,S[t+4],20,3889429448),c=x(c,l=x(l,u=x(u,s,c,l,S[t+9],5,568446438),s,c,S[t+14],9,3275163606),u,s,S[t+3],14,4107603335),l,u,S[t+8],20,1163531501),c=x(c,l=x(l,u=x(u,s,c,l,S[t+13],5,2850285829),s,c,S[t+2],9,4243563512),u,s,S[t+7],14,1735328473),l,u,S[t+12],20,2368359562),c=b(c,l=b(l,u=b(u,s,c,l,S[t+5],4,4294588738),s,c,S[t+8],11,2272392833),u,s,S[t+11],16,1839030562),l,u,S[t+14],23,4259657740),c=b(c,l=b(l,u=b(u,s,c,l,S[t+1],4,2763975236),s,c,S[t+4],11,1272893353),u,s,S[t+7],16,4139469664),l,u,S[t+10],23,3200236656),c=b(c,l=b(l,u=b(u,s,c,l,S[t+13],4,681279174),s,c,S[t+0],11,3936430074),u,s,S[t+3],16,3572445317),l,u,S[t+6],23,76029189),c=b(c,l=b(l,u=b(u,s,c,l,S[t+9],4,3654602809),s,c,S[t+12],11,3873151461),u,s,S[t+15],16,530742520),l,u,S[t+2],23,3299628645),c=y(c,l=y(l,u=y(u,s,c,l,S[t+0],6,4096336452),s,c,S[t+7],10,1126891415),u,s,S[t+14],15,2878612391),l,u,S[t+5],21,4237533241),c=y(c,l=y(l,u=y(u,s,c,l,S[t+12],6,1700485571),s,c,S[t+3],10,2399980690),u,s,S[t+10],15,4293915773),l,u,S[t+1],21,2240044497),c=y(c,l=y(l,u=y(u,s,c,l,S[t+8],6,1873313359),s,c,S[t+15],10,4264355552),u,s,S[t+6],15,2734768916),l,u,S[t+13],21,1309151649),c=y(c,l=y(l,u=y(u,s,c,l,S[t+4],6,4149444226),s,c,S[t+11],10,3174756917),u,s,S[t+2],15,718787259),l,u,S[t+9],21,3951481745),u=f(u,n),s=f(s,o),c=f(c,i),l=f(l,a);return(p(u)+p(s)+p(c)+p(l)).toLowerCase()}function i(e){var t=0;if(0==e.length)return t;for(var n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t&=t;return t}function a(e,t){return o(e)+t+i(e)}function u(){s("attaches",{attaches:f,url:location.href})}function s(e,t){t=t||{};var n=JSON.stringify({hash:a(e+JSON.stringify(t),O),action:e,params:t});document.getElementById("smmbox_"+O).contentWindow.postMessage(n,B)}function c(e){if(!(e.origin.indexOf(B)<0)){try{var t=JSON.parse(e.data);if(a(t.action+JSON.stringify(t.params),O)!==t.hash)return}catch(e){return}switch(t.action){case"attaches":u();break;case"push_up":document.body.style.overflow="visible",document.getElementById("smmbox_"+O).style.height="62px",document.getElementById("smmbox_"+O).style.background="none transparent";break;case"push_down":document.body.style.overflow="hidden",document.getElementById("smmbox_"+O).style.height="100%",document.getElementById("smmbox_"+O).style.background="rgba(0,0,0,0.7)";break;case"close":document.body.style.overflow="visible",document.getElementById("smmbox_"+O).remove(),f=[],E.close()}}}SmmBoxError=function(e,t){this.code=e,this.message=function(){switch(parseInt(e)){case 1:return"Тип аттача не найден";case 2:return"Обязательное поле";case 3:return"Неверный тип поля";case 4:return"Неверное значение поля";case 5:return"Список аттачей должен быть массивом";case 6:return"Аттач должен содержать поля `type` и `fields`";case 7:return"Неподдерживаемая социальная сеть";case 8:return"Неверный идентификатор аттача социальной сети";default:return"Неизвестная ошибка"}}(),this.data=t||[]};var l=function(t,n){var r=0;if(void 0===t)r=2;else if(e(t)){if(0!==t.trim().length)return!0;r=4}else r=3;if(void 0!==n)throw new SmmBoxError(r,[n]);return!1},m=function(e,n){if(!l(e,n)||!t(e)){if(void 0!==n)throw new SmmBoxError(4,[n]);return!1}return!0},f=[],d={photo:["original","thumbnail"],video:["url","thumbnail","name","social","id"],doc:["url","filename","social","id"],audio:["social","id","title"],link:["url","title"],poll:["question","answers","options"],text:["text"]},h={AnonymousVoting:"Анонимный опрос",SingleChoice:"Единственный выбор"},v=function(e,t){if(SmmBox.GetAvaiableTypes().indexOf(e)<0)throw new SmmBoxError(1);switch("object"!=typeof t&&(t={}),e){case"photo":return w(t);case"video":return x(t);case"doc":return b(t);case"link":return y(t);case"poll":return p(t);case"text":return S(t);case"audio":return g(t)}},g=function(e){var t={vk:function(e){return 0===e.indexOf("audio")&&e.indexOf("_")>0},ok:function(e){return parseInt(e)>0}};if(-1===Object.keys(t).indexOf(e.social))throw new SmmBoxError(7,{social:e.social,avaiable:Object.keys(t)});if(!l(e.id)||!t[e.social](e.id))throw new SmmBoxError(8,[e.id]);return l(e.title)||(e.title="Audio "+e.id),e},w=function(e){return m(e.original,"original"),m(e.thumbnail)||(e.thumbnail=e.original),e},x=function(e){var t=!1;if(l(e.social)){var r={vk:function(e){return 0===e.indexOf("video")&&e.indexOf("_")>0},ok:function(e){return 0===e.indexOf("movie")}};if(-1===Object.keys(r).indexOf(e.social))throw new SmmBoxError(7,{social:e.social,avaiable:Object.keys(r)});if(!l(e.id)||!r[e.social](e.id))throw new SmmBoxError(8,[e.id])}else m(e.url,"url"),(e.url.indexOf("youtube")>=0||e.url.indexOf("youtu.be")>=0)&&!1!==(t=n(e.url))&&(e.url="https://youtu.be/"+t);return l(e.name)||(e.name="Video"),m(e.thumbnail)||!1!==t&&(e.thumbnail="http://img.youtube.com/vi/"+t+"/default.jpg"),e},b=function(e){var t=!1;if(l(e.social)){if("vk"!==e.social)throw new SmmBoxError(7,{social:e.social,avaiable:["vk"]});if(!l(e.id)||0!==e.id.indexOf("doc")||e.id.indexOf("_")<=0)throw new SmmBoxError(8,[e.id]);t=!0}else m(e.url,"url");return l(e.filename)||(e.filename=t?"Document "+e.id:e.url.substring(e.url.lastIndexOf("/")+1,e.url.length)),e},y=function(e){return m(e.url,"url"),l(e.title)||(e.title=""),e},p=function(e){if(l(e.question,"question"),void 0===e.answers||!Array.isArray(e.answers))throw new SmmBoxError(3,["answers"]);if(0===e.answers.length)throw new SmmBoxError(4,["answers"]);for(n=0;n<e.answers.length;n++)l(e.answers[n],"answers["+n+"]");if(void 0===e.options)e.options=[];else{if(!Array.isArray(e.options))throw new SmmBoxError(3,["options"]);for(var t=SmmBox.GetAvaiablePollOptions(!0),n=0;n<e.options.length;n++)if(t.indexOf(e.options[n])<0)throw new SmmBoxError(4,["options["+n+"]"])}return e},S=function(e){return l(e.text,"text"),e},B="https://smmbox.com",O=i(o(location.origin)),E={close:function(){}};return window.addEventListener?window.addEventListener("message",c,!1):window.attachEvent("onmessage",c),{GetAvaiableTypes:function(e){return!0===e?d:Object.keys(d)},GetAttaches:function(){return f},GetAvaiablePollOptions:function(e){return!0===e?Object.keys(h):h},RemoveAttach:function(e){return void 0!==f[e]&&f.splice(e,1),this},ClearAttaches:function(){f=[]},AddAttach:function(e,t){if(void 0===e||void 0===t)throw new SmmBoxError(6);return f.push({type:e,fields:v(e,t)}),this},AddAttaches:function(e){if(!Array.isArray(e))throw new SmmBoxError(5);for(var t=0;t<e.length;t++)SmmBox.AddAttach(e[t].type,e[t].fields);return this},ShowWindow:function(e){void 0!==(e=e||{}).attaches&&SmmBox.AddAttaches(e.attaches),void 0!==e.close&&(E.close=e.close),null!==document.getElementById("smmbox_"+O)&&document.getElementById("smmbox_"+O).remove();var t=document.createElement("iframe");t.src=B+"/smmbox_popup/smmbox.html?tkey="+O+"&t="+Date.now()+"&domain="+location.origin,t.id="smmbox_"+O,t.style.cssText="border:none;max-height:100%!important;height:100%!important;width:100%!important;position:fixed!important;z-index:2147483647;top:0;left:0;background:rgba(0,0,0,0.7);margin:0;overflow-x:hiddenoverflow-y:auto",t.onload=u;var n=function(){for(var e=document.getElementsByTagName("script"),t=0;t<e.length;t++)if(e[t].src.indexOf("smmbox.js")>0)return e[t];return e[e.length-1]}();n=n.parentNode.insertBefore(t,n),document.body.style.overflow="hidden"},GetVersion:function(){return"1.0"},OnClose:function(e){return E.close=e||function(){},this}}}();