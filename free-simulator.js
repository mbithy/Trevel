/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(a,m){var r={},f=r.lib={},g=function(){},l=f.Base={extend:function(a){g.prototype=this;var b=new g;a&&b.mixIn(a);b.hasOwnProperty("init")||(b.init=function(){b.$super.init.apply(this,arguments)});b.init.prototype=b;b.$super=this;return b},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
p=f.WordArray=l.extend({init:function(a,b){a=this.words=a||[];this.sigBytes=b!=m?b:4*a.length},toString:function(a){return(a||q).stringify(this)},concat:function(a){var b=this.words,d=a.words,c=this.sigBytes;a=a.sigBytes;this.clamp();if(c%4)for(var j=0;j<a;j++)b[c+j>>>2]|=(d[j>>>2]>>>24-8*(j%4)&255)<<24-8*((c+j)%4);else if(65535<d.length)for(j=0;j<a;j+=4)b[c+j>>>2]=d[j>>>2];else b.push.apply(b,d);this.sigBytes+=a;return this},clamp:function(){var n=this.words,b=this.sigBytes;n[b>>>2]&=4294967295<<
32-8*(b%4);n.length=a.ceil(b/4)},clone:function(){var a=l.clone.call(this);a.words=this.words.slice(0);return a},random:function(n){for(var b=[],d=0;d<n;d+=4)b.push(4294967296*a.random()|0);return new p.init(b,n)}}),y=r.enc={},q=y.Hex={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++){var j=b[c>>>2]>>>24-8*(c%4)&255;d.push((j>>>4).toString(16));d.push((j&15).toString(16))}return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c+=2)d[c>>>3]|=parseInt(a.substr(c,
2),16)<<24-4*(c%8);return new p.init(d,b/2)}},G=y.Latin1={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++)d.push(String.fromCharCode(b[c>>>2]>>>24-8*(c%4)&255));return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c++)d[c>>>2]|=(a.charCodeAt(c)&255)<<24-8*(c%4);return new p.init(d,b)}},fa=y.Utf8={stringify:function(a){try{return decodeURIComponent(escape(G.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return G.parse(unescape(encodeURIComponent(a)))}},
h=f.BufferedBlockAlgorithm=l.extend({reset:function(){this._data=new p.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=fa.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(n){var b=this._data,d=b.words,c=b.sigBytes,j=this.blockSize,l=c/(4*j),l=n?a.ceil(l):a.max((l|0)-this._minBufferSize,0);n=l*j;c=a.min(4*n,c);if(n){for(var h=0;h<n;h+=j)this._doProcessBlock(d,h);h=d.splice(0,n);b.sigBytes-=c}return new p.init(h,c)},clone:function(){var a=l.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});f.Hasher=h.extend({cfg:l.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){h.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,d){return(new a.init(d)).finalize(b)}},_createHmacHelper:function(a){return function(b,d){return(new ga.HMAC.init(a,
d)).finalize(b)}}});var ga=r.algo={};return r}(Math);
(function(a){var m=CryptoJS,r=m.lib,f=r.Base,g=r.WordArray,m=m.x64={};m.Word=f.extend({init:function(a,p){this.high=a;this.low=p}});m.WordArray=f.extend({init:function(l,p){l=this.words=l||[];this.sigBytes=p!=a?p:8*l.length},toX32:function(){for(var a=this.words,p=a.length,f=[],q=0;q<p;q++){var G=a[q];f.push(G.high);f.push(G.low)}return g.create(f,this.sigBytes)},clone:function(){for(var a=f.clone.call(this),p=a.words=this.words.slice(0),g=p.length,q=0;q<g;q++)p[q]=p[q].clone();return a}})})();
(function(){function a(){return g.create.apply(g,arguments)}for(var m=CryptoJS,r=m.lib.Hasher,f=m.x64,g=f.Word,l=f.WordArray,f=m.algo,p=[a(1116352408,3609767458),a(1899447441,602891725),a(3049323471,3964484399),a(3921009573,2173295548),a(961987163,4081628472),a(1508970993,3053834265),a(2453635748,2937671579),a(2870763221,3664609560),a(3624381080,2734883394),a(310598401,1164996542),a(607225278,1323610764),a(1426881987,3590304994),a(1925078388,4068182383),a(2162078206,991336113),a(2614888103,633803317),
a(3248222580,3479774868),a(3835390401,2666613458),a(4022224774,944711139),a(264347078,2341262773),a(604807628,2007800933),a(770255983,1495990901),a(1249150122,1856431235),a(1555081692,3175218132),a(1996064986,2198950837),a(2554220882,3999719339),a(2821834349,766784016),a(2952996808,2566594879),a(3210313671,3203337956),a(3336571891,1034457026),a(3584528711,2466948901),a(113926993,3758326383),a(338241895,168717936),a(666307205,1188179964),a(773529912,1546045734),a(1294757372,1522805485),a(1396182291,
2643833823),a(1695183700,2343527390),a(1986661051,1014477480),a(2177026350,1206759142),a(2456956037,344077627),a(2730485921,1290863460),a(2820302411,3158454273),a(3259730800,3505952657),a(3345764771,106217008),a(3516065817,3606008344),a(3600352804,1432725776),a(4094571909,1467031594),a(275423344,851169720),a(430227734,3100823752),a(506948616,1363258195),a(659060556,3750685593),a(883997877,3785050280),a(958139571,3318307427),a(1322822218,3812723403),a(1537002063,2003034995),a(1747873779,3602036899),
a(1955562222,1575990012),a(2024104815,1125592928),a(2227730452,2716904306),a(2361852424,442776044),a(2428436474,593698344),a(2756734187,3733110249),a(3204031479,2999351573),a(3329325298,3815920427),a(3391569614,3928383900),a(3515267271,566280711),a(3940187606,3454069534),a(4118630271,4000239992),a(116418474,1914138554),a(174292421,2731055270),a(289380356,3203993006),a(460393269,320620315),a(685471733,587496836),a(852142971,1086792851),a(1017036298,365543100),a(1126000580,2618297676),a(1288033470,
3409855158),a(1501505948,4234509866),a(1607167915,987167468),a(1816402316,1246189591)],y=[],q=0;80>q;q++)y[q]=a();f=f.SHA512=r.extend({_doReset:function(){this._hash=new l.init([new g.init(1779033703,4089235720),new g.init(3144134277,2227873595),new g.init(1013904242,4271175723),new g.init(2773480762,1595750129),new g.init(1359893119,2917565137),new g.init(2600822924,725511199),new g.init(528734635,4215389547),new g.init(1541459225,327033209)])},_doProcessBlock:function(a,f){for(var h=this._hash.words,
g=h[0],n=h[1],b=h[2],d=h[3],c=h[4],j=h[5],l=h[6],h=h[7],q=g.high,m=g.low,r=n.high,N=n.low,Z=b.high,O=b.low,$=d.high,P=d.low,aa=c.high,Q=c.low,ba=j.high,R=j.low,ca=l.high,S=l.low,da=h.high,T=h.low,v=q,s=m,H=r,E=N,I=Z,F=O,W=$,J=P,w=aa,t=Q,U=ba,K=R,V=ca,L=S,X=da,M=T,x=0;80>x;x++){var B=y[x];if(16>x)var u=B.high=a[f+2*x]|0,e=B.low=a[f+2*x+1]|0;else{var u=y[x-15],e=u.high,z=u.low,u=(e>>>1|z<<31)^(e>>>8|z<<24)^e>>>7,z=(z>>>1|e<<31)^(z>>>8|e<<24)^(z>>>7|e<<25),D=y[x-2],e=D.high,k=D.low,D=(e>>>19|k<<13)^
(e<<3|k>>>29)^e>>>6,k=(k>>>19|e<<13)^(k<<3|e>>>29)^(k>>>6|e<<26),e=y[x-7],Y=e.high,C=y[x-16],A=C.high,C=C.low,e=z+e.low,u=u+Y+(e>>>0<z>>>0?1:0),e=e+k,u=u+D+(e>>>0<k>>>0?1:0),e=e+C,u=u+A+(e>>>0<C>>>0?1:0);B.high=u;B.low=e}var Y=w&U^~w&V,C=t&K^~t&L,B=v&H^v&I^H&I,ha=s&E^s&F^E&F,z=(v>>>28|s<<4)^(v<<30|s>>>2)^(v<<25|s>>>7),D=(s>>>28|v<<4)^(s<<30|v>>>2)^(s<<25|v>>>7),k=p[x],ia=k.high,ea=k.low,k=M+((t>>>14|w<<18)^(t>>>18|w<<14)^(t<<23|w>>>9)),A=X+((w>>>14|t<<18)^(w>>>18|t<<14)^(w<<23|t>>>9))+(k>>>0<M>>>
0?1:0),k=k+C,A=A+Y+(k>>>0<C>>>0?1:0),k=k+ea,A=A+ia+(k>>>0<ea>>>0?1:0),k=k+e,A=A+u+(k>>>0<e>>>0?1:0),e=D+ha,B=z+B+(e>>>0<D>>>0?1:0),X=V,M=L,V=U,L=K,U=w,K=t,t=J+k|0,w=W+A+(t>>>0<J>>>0?1:0)|0,W=I,J=F,I=H,F=E,H=v,E=s,s=k+e|0,v=A+B+(s>>>0<k>>>0?1:0)|0}m=g.low=m+s;g.high=q+v+(m>>>0<s>>>0?1:0);N=n.low=N+E;n.high=r+H+(N>>>0<E>>>0?1:0);O=b.low=O+F;b.high=Z+I+(O>>>0<F>>>0?1:0);P=d.low=P+J;d.high=$+W+(P>>>0<J>>>0?1:0);Q=c.low=Q+t;c.high=aa+w+(Q>>>0<t>>>0?1:0);R=j.low=R+K;j.high=ba+U+(R>>>0<K>>>0?1:0);S=l.low=
S+L;l.high=ca+V+(S>>>0<L>>>0?1:0);T=h.low=T+M;h.high=da+X+(T>>>0<M>>>0?1:0)},_doFinalize:function(){var a=this._data,f=a.words,h=8*this._nDataBytes,g=8*a.sigBytes;f[g>>>5]|=128<<24-g%32;f[(g+128>>>10<<5)+30]=Math.floor(h/4294967296);f[(g+128>>>10<<5)+31]=h;a.sigBytes=4*f.length;this._process();return this._hash.toX32()},clone:function(){var a=r.clone.call(this);a._hash=this._hash.clone();return a},blockSize:32});m.SHA512=r._createHelper(f);m.HmacSHA512=r._createHmacHelper(f)})();

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(){var h=CryptoJS,j=h.lib.WordArray;h.enc.Base64={stringify:function(b){var e=b.words,f=b.sigBytes,c=this._map;b.clamp();b=[];for(var a=0;a<f;a+=3)for(var d=(e[a>>>2]>>>24-8*(a%4)&255)<<16|(e[a+1>>>2]>>>24-8*((a+1)%4)&255)<<8|e[a+2>>>2]>>>24-8*((a+2)%4)&255,g=0;4>g&&a+0.75*g<f;g++)b.push(c.charAt(d>>>6*(3-g)&63));if(e=c.charAt(64))for(;b.length%4;)b.push(e);return b.join("")},parse:function(b){var e=b.length,f=this._map,c=f.charAt(64);c&&(c=b.indexOf(c),-1!=c&&(e=c));for(var c=[],a=0,d=0;d<
e;d++)if(d%4){var g=f.indexOf(b.charAt(d-1))<<2*(d%4),h=f.indexOf(b.charAt(d))>>>6-2*(d%4);c[a>>>2]|=(g|h)<<24-8*(a%4);a++}return j.create(c,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(a,j){var c={},b=c.lib={},f=function(){},l=b.Base={extend:function(a){f.prototype=this;var d=new f;a&&d.mixIn(a);d.hasOwnProperty("init")||(d.init=function(){d.$super.init.apply(this,arguments)});d.init.prototype=d;d.$super=this;return d},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var d in a)a.hasOwnProperty(d)&&(this[d]=a[d]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
u=b.WordArray=l.extend({init:function(a,d){a=this.words=a||[];this.sigBytes=d!=j?d:4*a.length},toString:function(a){return(a||m).stringify(this)},concat:function(a){var d=this.words,M=a.words,e=this.sigBytes;a=a.sigBytes;this.clamp();if(e%4)for(var b=0;b<a;b++)d[e+b>>>2]|=(M[b>>>2]>>>24-8*(b%4)&255)<<24-8*((e+b)%4);else if(65535<M.length)for(b=0;b<a;b+=4)d[e+b>>>2]=M[b>>>2];else d.push.apply(d,M);this.sigBytes+=a;return this},clamp:function(){var D=this.words,d=this.sigBytes;D[d>>>2]&=4294967295<<
32-8*(d%4);D.length=a.ceil(d/4)},clone:function(){var a=l.clone.call(this);a.words=this.words.slice(0);return a},random:function(D){for(var d=[],b=0;b<D;b+=4)d.push(4294967296*a.random()|0);return new u.init(d,D)}}),k=c.enc={},m=k.Hex={stringify:function(a){var d=a.words;a=a.sigBytes;for(var b=[],e=0;e<a;e++){var c=d[e>>>2]>>>24-8*(e%4)&255;b.push((c>>>4).toString(16));b.push((c&15).toString(16))}return b.join("")},parse:function(a){for(var d=a.length,b=[],e=0;e<d;e+=2)b[e>>>3]|=parseInt(a.substr(e,
2),16)<<24-4*(e%8);return new u.init(b,d/2)}},y=k.Latin1={stringify:function(a){var b=a.words;a=a.sigBytes;for(var c=[],e=0;e<a;e++)c.push(String.fromCharCode(b[e>>>2]>>>24-8*(e%4)&255));return c.join("")},parse:function(a){for(var b=a.length,c=[],e=0;e<b;e++)c[e>>>2]|=(a.charCodeAt(e)&255)<<24-8*(e%4);return new u.init(c,b)}},z=k.Utf8={stringify:function(a){try{return decodeURIComponent(escape(y.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return y.parse(unescape(encodeURIComponent(a)))}},
x=b.BufferedBlockAlgorithm=l.extend({reset:function(){this._data=new u.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=z.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(b){var d=this._data,c=d.words,e=d.sigBytes,l=this.blockSize,k=e/(4*l),k=b?a.ceil(k):a.max((k|0)-this._minBufferSize,0);b=k*l;e=a.min(4*b,e);if(b){for(var x=0;x<b;x+=l)this._doProcessBlock(c,x);x=c.splice(0,b);d.sigBytes-=e}return new u.init(x,e)},clone:function(){var a=l.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});b.Hasher=x.extend({cfg:l.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){x.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,c){return(new a.init(c)).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return(new ja.HMAC.init(a,
c)).finalize(b)}}});var ja=c.algo={};return c}(Math);
(function(a){var j=CryptoJS,c=j.lib,b=c.Base,f=c.WordArray,j=j.x64={};j.Word=b.extend({init:function(a,b){this.high=a;this.low=b}});j.WordArray=b.extend({init:function(b,c){b=this.words=b||[];this.sigBytes=c!=a?c:8*b.length},toX32:function(){for(var a=this.words,b=a.length,c=[],m=0;m<b;m++){var y=a[m];c.push(y.high);c.push(y.low)}return f.create(c,this.sigBytes)},clone:function(){for(var a=b.clone.call(this),c=a.words=this.words.slice(0),k=c.length,f=0;f<k;f++)c[f]=c[f].clone();return a}})})();
(function(){function a(){return f.create.apply(f,arguments)}for(var j=CryptoJS,c=j.lib.Hasher,b=j.x64,f=b.Word,l=b.WordArray,b=j.algo,u=[a(1116352408,3609767458),a(1899447441,602891725),a(3049323471,3964484399),a(3921009573,2173295548),a(961987163,4081628472),a(1508970993,3053834265),a(2453635748,2937671579),a(2870763221,3664609560),a(3624381080,2734883394),a(310598401,1164996542),a(607225278,1323610764),a(1426881987,3590304994),a(1925078388,4068182383),a(2162078206,991336113),a(2614888103,633803317),
a(3248222580,3479774868),a(3835390401,2666613458),a(4022224774,944711139),a(264347078,2341262773),a(604807628,2007800933),a(770255983,1495990901),a(1249150122,1856431235),a(1555081692,3175218132),a(1996064986,2198950837),a(2554220882,3999719339),a(2821834349,766784016),a(2952996808,2566594879),a(3210313671,3203337956),a(3336571891,1034457026),a(3584528711,2466948901),a(113926993,3758326383),a(338241895,168717936),a(666307205,1188179964),a(773529912,1546045734),a(1294757372,1522805485),a(1396182291,
2643833823),a(1695183700,2343527390),a(1986661051,1014477480),a(2177026350,1206759142),a(2456956037,344077627),a(2730485921,1290863460),a(2820302411,3158454273),a(3259730800,3505952657),a(3345764771,106217008),a(3516065817,3606008344),a(3600352804,1432725776),a(4094571909,1467031594),a(275423344,851169720),a(430227734,3100823752),a(506948616,1363258195),a(659060556,3750685593),a(883997877,3785050280),a(958139571,3318307427),a(1322822218,3812723403),a(1537002063,2003034995),a(1747873779,3602036899),
a(1955562222,1575990012),a(2024104815,1125592928),a(2227730452,2716904306),a(2361852424,442776044),a(2428436474,593698344),a(2756734187,3733110249),a(3204031479,2999351573),a(3329325298,3815920427),a(3391569614,3928383900),a(3515267271,566280711),a(3940187606,3454069534),a(4118630271,4000239992),a(116418474,1914138554),a(174292421,2731055270),a(289380356,3203993006),a(460393269,320620315),a(685471733,587496836),a(852142971,1086792851),a(1017036298,365543100),a(1126000580,2618297676),a(1288033470,
3409855158),a(1501505948,4234509866),a(1607167915,987167468),a(1816402316,1246189591)],k=[],m=0;80>m;m++)k[m]=a();b=b.SHA512=c.extend({_doReset:function(){this._hash=new l.init([new f.init(1779033703,4089235720),new f.init(3144134277,2227873595),new f.init(1013904242,4271175723),new f.init(2773480762,1595750129),new f.init(1359893119,2917565137),new f.init(2600822924,725511199),new f.init(528734635,4215389547),new f.init(1541459225,327033209)])},_doProcessBlock:function(a,b){for(var c=this._hash.words,
f=c[0],j=c[1],d=c[2],l=c[3],e=c[4],m=c[5],N=c[6],c=c[7],aa=f.high,O=f.low,ba=j.high,P=j.low,ca=d.high,Q=d.low,da=l.high,R=l.low,ea=e.high,S=e.low,fa=m.high,T=m.low,ga=N.high,U=N.low,ha=c.high,V=c.low,r=aa,n=O,G=ba,E=P,H=ca,F=Q,Y=da,I=R,s=ea,p=S,W=fa,J=T,X=ga,K=U,Z=ha,L=V,t=0;80>t;t++){var A=k[t];if(16>t)var q=A.high=a[b+2*t]|0,g=A.low=a[b+2*t+1]|0;else{var q=k[t-15],g=q.high,v=q.low,q=(g>>>1|v<<31)^(g>>>8|v<<24)^g>>>7,v=(v>>>1|g<<31)^(v>>>8|g<<24)^(v>>>7|g<<25),C=k[t-2],g=C.high,h=C.low,C=(g>>>19|
h<<13)^(g<<3|h>>>29)^g>>>6,h=(h>>>19|g<<13)^(h<<3|g>>>29)^(h>>>6|g<<26),g=k[t-7],$=g.high,B=k[t-16],w=B.high,B=B.low,g=v+g.low,q=q+$+(g>>>0<v>>>0?1:0),g=g+h,q=q+C+(g>>>0<h>>>0?1:0),g=g+B,q=q+w+(g>>>0<B>>>0?1:0);A.high=q;A.low=g}var $=s&W^~s&X,B=p&J^~p&K,A=r&G^r&H^G&H,ka=n&E^n&F^E&F,v=(r>>>28|n<<4)^(r<<30|n>>>2)^(r<<25|n>>>7),C=(n>>>28|r<<4)^(n<<30|r>>>2)^(n<<25|r>>>7),h=u[t],la=h.high,ia=h.low,h=L+((p>>>14|s<<18)^(p>>>18|s<<14)^(p<<23|s>>>9)),w=Z+((s>>>14|p<<18)^(s>>>18|p<<14)^(s<<23|p>>>9))+(h>>>
0<L>>>0?1:0),h=h+B,w=w+$+(h>>>0<B>>>0?1:0),h=h+ia,w=w+la+(h>>>0<ia>>>0?1:0),h=h+g,w=w+q+(h>>>0<g>>>0?1:0),g=C+ka,A=v+A+(g>>>0<C>>>0?1:0),Z=X,L=K,X=W,K=J,W=s,J=p,p=I+h|0,s=Y+w+(p>>>0<I>>>0?1:0)|0,Y=H,I=F,H=G,F=E,G=r,E=n,n=h+g|0,r=w+A+(n>>>0<h>>>0?1:0)|0}O=f.low=O+n;f.high=aa+r+(O>>>0<n>>>0?1:0);P=j.low=P+E;j.high=ba+G+(P>>>0<E>>>0?1:0);Q=d.low=Q+F;d.high=ca+H+(Q>>>0<F>>>0?1:0);R=l.low=R+I;l.high=da+Y+(R>>>0<I>>>0?1:0);S=e.low=S+p;e.high=ea+s+(S>>>0<p>>>0?1:0);T=m.low=T+J;m.high=fa+W+(T>>>0<J>>>0?1:
0);U=N.low=U+K;N.high=ga+X+(U>>>0<K>>>0?1:0);V=c.low=V+L;c.high=ha+Z+(V>>>0<L>>>0?1:0)},_doFinalize:function(){var a=this._data,b=a.words,c=8*this._nDataBytes,f=8*a.sigBytes;b[f>>>5]|=128<<24-f%32;b[(f+128>>>10<<5)+30]=Math.floor(c/4294967296);b[(f+128>>>10<<5)+31]=c;a.sigBytes=4*b.length;this._process();return this._hash.toX32()},clone:function(){var a=c.clone.call(this);a._hash=this._hash.clone();return a},blockSize:32});j.SHA512=c._createHelper(b);j.HmacSHA512=c._createHmacHelper(b)})();
(function(){var a=CryptoJS,j=a.enc.Utf8;a.algo.HMAC=a.lib.Base.extend({init:function(a,b){a=this._hasher=new a.init;"string"==typeof b&&(b=j.parse(b));var f=a.blockSize,l=4*f;b.sigBytes>l&&(b=a.finalize(b));b.clamp();for(var u=this._oKey=b.clone(),k=this._iKey=b.clone(),m=u.words,y=k.words,z=0;z<f;z++)m[z]^=1549556828,y[z]^=909522486;u.sigBytes=k.sigBytes=l;this.reset()},reset:function(){var a=this._hasher;a.reset();a.update(this._iKey)},update:function(a){this._hasher.update(a);return this},finalize:function(a){var b=
this._hasher;a=b.finalize(a);b.reset();return b.finalize(this._oKey.clone().concat(a))}})})();

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(h,s){var f={},t=f.lib={},g=function(){},j=t.Base={extend:function(a){g.prototype=this;var c=new g;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
q=t.WordArray=j.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=s?c:4*a.length},toString:function(a){return(a||u).stringify(this)},concat:function(a){var c=this.words,d=a.words,b=this.sigBytes;a=a.sigBytes;this.clamp();if(b%4)for(var e=0;e<a;e++)c[b+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((b+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)c[b+e>>>2]=d[e>>>2];else c.push.apply(c,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=h.ceil(c/4)},clone:function(){var a=j.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],d=0;d<a;d+=4)c.push(4294967296*h.random()|0);return new q.init(c,a)}}),v=f.enc={},u=v.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++){var e=c[b>>>2]>>>24-8*(b%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b+=2)d[b>>>3]|=parseInt(a.substr(b,
2),16)<<24-4*(b%8);return new q.init(d,c/2)}},k=v.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++)d.push(String.fromCharCode(c[b>>>2]>>>24-8*(b%4)&255));return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b++)d[b>>>2]|=(a.charCodeAt(b)&255)<<24-8*(b%4);return new q.init(d,c)}},l=v.Utf8={stringify:function(a){try{return decodeURIComponent(escape(k.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return k.parse(unescape(encodeURIComponent(a)))}},
x=t.BufferedBlockAlgorithm=j.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=l.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,d=c.words,b=c.sigBytes,e=this.blockSize,f=b/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;b=h.min(4*a,b);if(a){for(var m=0;m<a;m+=e)this._doProcessBlock(d,m);m=d.splice(0,a);c.sigBytes-=b}return new q.init(m,b)},clone:function(){var a=j.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});t.Hasher=x.extend({cfg:j.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){x.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,d){return(new a.init(d)).finalize(c)}},_createHmacHelper:function(a){return function(c,d){return(new w.HMAC.init(a,
d)).finalize(c)}}});var w=f.algo={};return f}(Math);
(function(h){for(var s=CryptoJS,f=s.lib,t=f.WordArray,g=f.Hasher,f=s.algo,j=[],q=[],v=function(a){return 4294967296*(a-(a|0))|0},u=2,k=0;64>k;){var l;a:{l=u;for(var x=h.sqrt(l),w=2;w<=x;w++)if(!(l%w)){l=!1;break a}l=!0}l&&(8>k&&(j[k]=v(h.pow(u,0.5))),q[k]=v(h.pow(u,1/3)),k++);u++}var a=[],f=f.SHA256=g.extend({_doReset:function(){this._hash=new t.init(j.slice(0))},_doProcessBlock:function(c,d){for(var b=this._hash.words,e=b[0],f=b[1],m=b[2],h=b[3],p=b[4],j=b[5],k=b[6],l=b[7],n=0;64>n;n++){if(16>n)a[n]=
c[d+n]|0;else{var r=a[n-15],g=a[n-2];a[n]=((r<<25|r>>>7)^(r<<14|r>>>18)^r>>>3)+a[n-7]+((g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10)+a[n-16]}r=l+((p<<26|p>>>6)^(p<<21|p>>>11)^(p<<7|p>>>25))+(p&j^~p&k)+q[n]+a[n];g=((e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22))+(e&f^e&m^f&m);l=k;k=j;j=p;p=h+r|0;h=m;m=f;f=e;e=r+g|0}b[0]=b[0]+e|0;b[1]=b[1]+f|0;b[2]=b[2]+m|0;b[3]=b[3]+h|0;b[4]=b[4]+p|0;b[5]=b[5]+j|0;b[6]=b[6]+k|0;b[7]=b[7]+l|0},_doFinalize:function(){var a=this._data,d=a.words,b=8*this._nDataBytes,e=8*a.sigBytes;
d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=h.floor(b/4294967296);d[(e+64>>>9<<4)+15]=b;a.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var a=g.clone.call(this);a._hash=this._hash.clone();return a}});s.SHA256=g._createHelper(f);s.HmacSHA256=g._createHmacHelper(f)})(Math);



var R = {}; // the Recurrent library
(function(global) {
	"use strict";
	// Utility fun
	function assert(condition, message) {
		// from http://stackoverflow.com/questions/15313418/javascript-assert
		if (!condition) {
			message = message || "Assertion failed";
			if (typeof Error !== "undefined") {
				throw new Error(message);
			}
			throw message; // Fallback
		}
	}
	// Random numbers utils
	var return_v = false;
	var v_val = 0.0;
	var gaussRandom = function() {
		if (return_v) {
			return_v = false;
			return v_val;
		}
		var u = 2 * Math.random() - 1;
		var v = 2 * Math.random() - 1;
		var r = u * u + v * v;
		if (r == 0 || r > 1) return gaussRandom();
		var c = Math.sqrt(-2 * Math.log(r) / r);
		v_val = v * c; // cache this
		return_v = true;
		return u * c;
	}
	var randf = function(a, b) {
		return Math.random() * (b - a) + a;
	}
	var randi = function(a, b) {
		return Math.floor(Math.random() * (b - a) + a);
	}
	var randn = function(mu, std) {
		return mu + gaussRandom() * std;
	}
	// helper function returns array of zeros of length n
	// and uses typed arrays if available
	var zeros = function(n) {
		if (typeof(n) === 'undefined' || isNaN(n)) {
			return [];
		}
		if (typeof ArrayBuffer === 'undefined') {
			// lacking browser support
			var arr = new Array(n);
			for (var i = 0; i < n; i++) {
				arr[i] = 0;
			}
			return arr;
		} else {
			return new Float64Array(n);
		}
	}
	// Mat holds a matrix
	var Mat = function(n, d) {
		// n is number of rows d is number of columns
		this.n = n;
		this.d = d;
		this.w = zeros(n * d);
		this.dw = zeros(n * d);
	}
	Mat.prototype = {
		get: function(row, col) {
			// slow but careful accessor function
			// we want row-major order
			var ix = (this.d * row) + col;
			assert(ix >= 0 && ix < this.w.length);
			return this.w[ix];
		},
		set: function(row, col, v) {
			// slow but careful accessor function
			var ix = (this.d * row) + col;
			assert(ix >= 0 && ix < this.w.length);
			this.w[ix] = v;
		},
		setFrom: function(arr) {
			for (var i = 0, n = arr.length; i < n; i++) {
				this.w[i] = arr[i];
			}
		},
		setColumn: function(m, i) {
			for (var q = 0, n = m.w.length; q < n; q++) {
				this.w[(this.d * q) + i] = m.w[q];
			}
		},
		toJSON: function() {
			var json = {};
			json['n'] = this.n;
			json['d'] = this.d;
			json['w'] = this.w;
			return json;
		},
		fromJSON: function(json) {
			this.n = json.n;
			this.d = json.d;
			this.w = zeros(this.n * this.d);
			this.dw = zeros(this.n * this.d);
			for (var i = 0, n = this.n * this.d; i < n; i++) {
				this.w[i] = json.w[i]; // copy over weights
			}
		}
	}
	var copyMat = function(b) {
		var a = new Mat(b.n, b.d);
		a.setFrom(b.w);
		return a;
	}
	var copyNet = function(net) {
		// nets are (k,v) pairs with k = string key, v = Mat()
		var new_net = {};
		for (var p in net) {
			if (net.hasOwnProperty(p)) {
				new_net[p] = copyMat(net[p]);
			}
		}
		return new_net;
	}
	var updateMat = function(m, alpha) {
		// updates in place
		for (var i = 0, n = m.n * m.d; i < n; i++) {
			if (m.dw[i] !== 0) {
				m.w[i] += -alpha * m.dw[i];
				m.dw[i] = 0;
			}
		}
	}
	var updateNet = function(net, alpha) {
		for (var p in net) {
			if (net.hasOwnProperty(p)) {
				updateMat(net[p], alpha);
			}
		}
	}
	var netToJSON = function(net) {
		var j = {};
		for (var p in net) {
			if (net.hasOwnProperty(p)) {
				j[p] = net[p].toJSON();
			}
		}
		return j;
	}
	var netFromJSON = function(j) {
		var net = {};
		for (var p in j) {
			if (j.hasOwnProperty(p)) {
				net[p] = new Mat(1, 1); // not proud of this
				net[p].fromJSON(j[p]);
			}
		}
		return net;
	}
	var netZeroGrads = function(net) {
		for (var p in net) {
			if (net.hasOwnProperty(p)) {
				var mat = net[p];
				gradFillConst(mat, 0);
			}
		}
	}
	var netFlattenGrads = function(net) {
		var n = 0;
		for (var p in net) {
			if (net.hasOwnProperty(p)) {
				var mat = net[p];
				n += mat.dw.length;
			}
		}
		var g = new Mat(n, 1);
		var ix = 0;
		for (var p in net) {
			if (net.hasOwnProperty(p)) {
				var mat = net[p];
				for (var i = 0, m = mat.dw.length; i < m; i++) {
					g.w[ix] = mat.dw[i];
					ix++;
				}
			}
		}
		return g;
	}
	// return Mat but filled with random numbers from gaussian
	var RandMat = function(n, d, mu, std) {
		var m = new Mat(n, d);
		fillRandn(m, mu, std);
		//fillRand(m,-std,std); // kind of :P
		return m;
	}
	// Mat utils
	// fill matrix with random gaussian numbers
	var fillRandn = function(m, mu, std) {
		for (var i = 0, n = m.w.length; i < n; i++) {
			m.w[i] = randn(mu, std);
		}
	}
	var fillRand = function(m, lo, hi) {
		for (var i = 0, n = m.w.length; i < n; i++) {
			m.w[i] = randf(lo, hi);
		}
	}
	var gradFillConst = function(m, c) {
		for (var i = 0, n = m.dw.length; i < n; i++) {
			m.dw[i] = c
		}
	}
	// Transformer definitions
	var Graph = function(needs_backprop) {
		if (typeof needs_backprop === 'undefined') {
			needs_backprop = true;
		}
		this.needs_backprop = needs_backprop;
		// this will store a list of functions that perform backprop,
		// in their forward pass order. So in backprop we will go
		// backwards and evoke each one
		this.backprop = [];
	}
	Graph.prototype = {
		backward: function() {
			for (var i = this.backprop.length - 1; i >= 0; i--) {
				this.backprop[i](); // tick!
			}
		},
		rowPluck: function(m, ix) {
			// pluck a row of m with index ix and return it as col vector
			assert(ix >= 0 && ix < m.n);
			var d = m.d;
			var out = new Mat(d, 1);
			for (var i = 0, n = d; i < n; i++) {
				out.w[i] = m.w[d * ix + i];
			} // copy over the data
			if (this.needs_backprop) {
				var backward = function() {
					for (var i = 0, n = d; i < n; i++) {
						m.dw[d * ix + i] += out.dw[i];
					}
				}
				this.backprop.push(backward);
			}
			return out;
		},
		tanh: function(m) {
			// tanh nonlinearity
			var out = new Mat(m.n, m.d);
			var n = m.w.length;
			for (var i = 0; i < n; i++) {
				out.w[i] = Math.tanh(m.w[i]);
			}
			if (this.needs_backprop) {
				var backward = function() {
					for (var i = 0; i < n; i++) {
						// grad for z = tanh(x) is (1 - z^2)
						var mwi = out.w[i];
						m.dw[i] += (1.0 - mwi * mwi) * out.dw[i];
					}
				}
				this.backprop.push(backward);
			}
			return out;
		},
		sigmoid: function(m) {
			// sigmoid nonlinearity
			var out = new Mat(m.n, m.d);
			var n = m.w.length;
			for (var i = 0; i < n; i++) {
				out.w[i] = sig(m.w[i]);
			}
			if (this.needs_backprop) {
				var backward = function() {
					for (var i = 0; i < n; i++) {
						// grad for z = tanh(x) is (1 - z^2)
						var mwi = out.w[i];
						m.dw[i] += mwi * (1.0 - mwi) * out.dw[i];
					}
				}
				this.backprop.push(backward);
			}
			return out;
		},
		relu: function(m) {
			var out = new Mat(m.n, m.d);
			var n = m.w.length;
			for (var i = 0; i < n; i++) {
				out.w[i] = Math.max(0, m.w[i]); // relu
			}
			if (this.needs_backprop) {
				var backward = function() {
					for (var i = 0; i < n; i++) {
						m.dw[i] += m.w[i] > 0 ? out.dw[i] : 0.0;
					}
				}
				this.backprop.push(backward);
			}
			return out;
		},
		mul: function(m1, m2) {
			// multiply matrices m1 * m2
			assert(m1.d === m2.n, 'matmul dimensions misaligned');
			var n = m1.n;
			var d = m2.d;
			var out = new Mat(n, d);
			for (var i = 0; i < m1.n; i++) { // loop over rows of m1
				for (var j = 0; j < m2.d; j++) { // loop over cols of m2
					var dot = 0.0;
					for (var k = 0; k < m1.d; k++) { // dot product loop
						dot += m1.w[m1.d * i + k] * m2.w[m2.d * k + j];
					}
					out.w[d * i + j] = dot;
				}
			}
			if (this.needs_backprop) {
				var backward = function() {
					for (var i = 0; i < m1.n; i++) { // loop over rows of m1
						for (var j = 0; j < m2.d; j++) { // loop over cols of m2
							for (var k = 0; k < m1.d; k++) { // dot product loop
								var b = out.dw[d * i + j];
								m1.dw[m1.d * i + k] += m2.w[m2.d * k + j] * b;
								m2.dw[m2.d * k + j] += m1.w[m1.d * i + k] * b;
							}
						}
					}
				}
				this.backprop.push(backward);
			}
			return out;
		},
		add: function(m1, m2) {
			assert(m1.w.length === m2.w.length);
			var out = new Mat(m1.n, m1.d);
			for (var i = 0, n = m1.w.length; i < n; i++) {
				out.w[i] = m1.w[i] + m2.w[i];
			}
			if (this.needs_backprop) {
				var backward = function() {
					for (var i = 0, n = m1.w.length; i < n; i++) {
						m1.dw[i] += out.dw[i];
						m2.dw[i] += out.dw[i];
					}
				}
				this.backprop.push(backward);
			}
			return out;
		},
		dot: function(m1, m2) {
			// m1 m2 are both column vectors
			assert(m1.w.length === m2.w.length);
			var out = new Mat(1, 1);
			var dot = 0.0;
			for (var i = 0, n = m1.w.length; i < n; i++) {
				dot += m1.w[i] * m2.w[i];
			}
			out.w[0] = dot;
			if (this.needs_backprop) {
				var backward = function() {
					for (var i = 0, n = m1.w.length; i < n; i++) {
						m1.dw[i] += m2.w[i] * out.dw[0];
						m2.dw[i] += m1.w[i] * out.dw[0];
					}
				}
				this.backprop.push(backward);
			}
			return out;
		},
		eltmul: function(m1, m2) {
			assert(m1.w.length === m2.w.length);
			var out = new Mat(m1.n, m1.d);
			for (var i = 0, n = m1.w.length; i < n; i++) {
				out.w[i] = m1.w[i] * m2.w[i];
			}
			if (this.needs_backprop) {
				var backward = function() {
					for (var i = 0, n = m1.w.length; i < n; i++) {
						m1.dw[i] += m2.w[i] * out.dw[i];
						m2.dw[i] += m1.w[i] * out.dw[i];
					}
				}
				this.backprop.push(backward);
			}
			return out;
		},
	}
	var softmax = function(m) {
		var out = new Mat(m.n, m.d); // probability volume
		var maxval = -999999;
		for (var i = 0, n = m.w.length; i < n; i++) {
			if (m.w[i] > maxval) maxval = m.w[i];
		}
		var s = 0.0;
		for (var i = 0, n = m.w.length; i < n; i++) {
			out.w[i] = Math.exp(m.w[i] - maxval);
			s += out.w[i];
		}
		for (var i = 0, n = m.w.length; i < n; i++) {
			out.w[i] /= s;
		}
		// no backward pass here needed
		// since we will use the computed probabilities outside
		// to set gradients directly on m
		return out;
	}
	var Solver = function() {
		this.decay_rate = 0.999;
		this.smooth_eps = 1e-8;
		this.step_cache = {};
	}
	Solver.prototype = {
		step: function(model, step_size, regc, clipval) {
			// perform parameter update
			var solver_stats = {};
			var num_clipped = 0;
			var num_tot = 0;
			for (var k in model) {
				if (model.hasOwnProperty(k)) {
					var m = model[k]; // mat ref
					if (!(k in this.step_cache)) {
						this.step_cache[k] = new Mat(m.n, m.d);
					}
					var s = this.step_cache[k];
					for (var i = 0, n = m.w.length; i < n; i++) {
						// rmsprop adaptive learning rate
						var mdwi = m.dw[i];
						s.w[i] = s.w[i] * this.decay_rate + (1.0 - this.decay_rate) * mdwi * mdwi;
						// gradient clip
						if (mdwi > clipval) {
							mdwi = clipval;
							num_clipped++;
						}
						if (mdwi < -clipval) {
							mdwi = -clipval;
							num_clipped++;
						}
						num_tot++;
						// update (and regularize)
						m.w[i] += -step_size * mdwi / Math.sqrt(s.w[i] + this.smooth_eps) - regc * m.w[i];
						m.dw[i] = 0; // reset gradients for next iteration
					}
				}
			}
			solver_stats['ratio_clipped'] = num_clipped * 1.0 / num_tot;
			return solver_stats;
		}
	}
	var initLSTM = function(input_size, hidden_sizes, output_size) {
		// hidden size should be a list
		var model = {};
		for (var d = 0; d < hidden_sizes.length; d++) { // loop over depths
			var prev_size = d === 0 ? input_size : hidden_sizes[d - 1];
			var hidden_size = hidden_sizes[d];
			// gates parameters
			model['Wix' + d] = new RandMat(hidden_size, prev_size, 0, 0.08);
			model['Wih' + d] = new RandMat(hidden_size, hidden_size, 0, 0.08);
			model['bi' + d] = new Mat(hidden_size, 1);
			model['Wfx' + d] = new RandMat(hidden_size, prev_size, 0, 0.08);
			model['Wfh' + d] = new RandMat(hidden_size, hidden_size, 0, 0.08);
			model['bf' + d] = new Mat(hidden_size, 1);
			model['Wox' + d] = new RandMat(hidden_size, prev_size, 0, 0.08);
			model['Woh' + d] = new RandMat(hidden_size, hidden_size, 0, 0.08);
			model['bo' + d] = new Mat(hidden_size, 1);
			// cell write params
			model['Wcx' + d] = new RandMat(hidden_size, prev_size, 0, 0.08);
			model['Wch' + d] = new RandMat(hidden_size, hidden_size, 0, 0.08);
			model['bc' + d] = new Mat(hidden_size, 1);
		}
		// decoder params
		model['Whd'] = new RandMat(output_size, hidden_size, 0, 0.08);
		model['bd'] = new Mat(output_size, 1);
		return model;
	}
	var forwardLSTM = function(G, model, hidden_sizes, x, prev) {
		// forward prop for a single tick of LSTM
		// G is graph to append ops to
		// model contains LSTM parameters
		// x is 1D column vector with observation
		// prev is a struct containing hidden and cell
		// from previous iteration
		if (prev == null || typeof prev.h === 'undefined') {
			var hidden_prevs = [];
			var cell_prevs = [];
			for (var d = 0; d < hidden_sizes.length; d++) {
				hidden_prevs.push(new R.Mat(hidden_sizes[d], 1));
				cell_prevs.push(new R.Mat(hidden_sizes[d], 1));
			}
		} else {
			var hidden_prevs = prev.h;
			var cell_prevs = prev.c;
		}
		var hidden = [];
		var cell = [];
		for (var d = 0; d < hidden_sizes.length; d++) {
			var input_vector = d === 0 ? x : hidden[d - 1];
			var hidden_prev = hidden_prevs[d];
			var cell_prev = cell_prevs[d];
			// input gate
			var h0 = G.mul(model['Wix' + d], input_vector);
			var h1 = G.mul(model['Wih' + d], hidden_prev);
			var input_gate = G.sigmoid(G.add(G.add(h0, h1), model['bi' + d]));
			// forget gate
			var h2 = G.mul(model['Wfx' + d], input_vector);
			var h3 = G.mul(model['Wfh' + d], hidden_prev);
			var forget_gate = G.sigmoid(G.add(G.add(h2, h3), model['bf' + d]));
			// output gate
			var h4 = G.mul(model['Wox' + d], input_vector);
			var h5 = G.mul(model['Woh' + d], hidden_prev);
			var output_gate = G.sigmoid(G.add(G.add(h4, h5), model['bo' + d]));
			// write operation on cells
			var h6 = G.mul(model['Wcx' + d], input_vector);
			var h7 = G.mul(model['Wch' + d], hidden_prev);
			var cell_write = G.tanh(G.add(G.add(h6, h7), model['bc' + d]));
			// compute new cell activation
			var retain_cell = G.eltmul(forget_gate, cell_prev); // what do we keep from cell
			var write_cell = G.eltmul(input_gate, cell_write); // what do we write to cell
			var cell_d = G.add(retain_cell, write_cell); // new cell contents
			// compute hidden state as gated, saturated cell activations
			var hidden_d = G.eltmul(output_gate, G.tanh(cell_d));
			hidden.push(hidden_d);
			cell.push(cell_d);
		}
		// one decoder to outputs at end
		var output = G.add(G.mul(model['Whd'], hidden[hidden.length - 1]), model['bd']);
		// return cell memory, hidden representation and output
		return {
			'h': hidden,
			'c': cell,
			'o': output
		};
	}
	var sig = function(x) {
		// helper function for computing sigmoid
		return 1.0 / (1 + Math.exp(-x));
	}
	var maxi = function(w) {
		// argmax of array w
		var maxv = w[0];
		var maxix = 0;
		for (var i = 1, n = w.length; i < n; i++) {
			var v = w[i];
			if (v > maxv) {
				maxix = i;
				maxv = v;
			}
		}
		return maxix;
	}
	var samplei = function(w) {
		// sample argmax from w, assuming w are 
		// probabilities that sum to one
		var r = randf(0, 1);
		var x = 0.0;
		var i = 0;
		while (true) {
			x += w[i];
			if (x > r) {
				return i;
			}
			i++;
		}
		return w.length - 1; // pretty sure we should never get here?
	}
	// various utils
	global.assert = assert;
	global.zeros = zeros;
	global.maxi = maxi;
	global.samplei = samplei;
	global.randi = randi;
	global.randn = randn;
	global.softmax = softmax;
	// classes
	global.Mat = Mat;
	global.RandMat = RandMat;
	global.forwardLSTM = forwardLSTM;
	global.initLSTM = initLSTM;
	// more utils
	global.updateMat = updateMat;
	global.updateNet = updateNet;
	global.copyMat = copyMat;
	global.copyNet = copyNet;
	global.netToJSON = netToJSON;
	global.netFromJSON = netFromJSON;
	global.netZeroGrads = netZeroGrads;
	global.netFlattenGrads = netFlattenGrads;
	// optimization
	global.Solver = Solver;
	global.Graph = Graph;
})(R);
// END OF RECURRENTJS
var RL = {};
(function(global) {
	"use strict";
	// syntactic sugar function for getting default parameter values
	var getopt = function(opt, field_name, default_value) {
		if (typeof opt === 'undefined') {
			return default_value;
		}
		return (typeof opt[field_name] !== 'undefined') ? opt[field_name] : default_value;
	}
	var zeros = R.zeros; // inherit these
	var assert = R.assert;
	var randi = R.randi;
	var randf = R.randf;
	var setConst = function(arr, c) {
		for (var i = 0, n = arr.length; i < n; i++) {
			arr[i] = c;
		}
	}
	var sampleWeighted = function(p) {
		var r = Math.random();
		var c = 0.0;
		for (var i = 0, n = p.length; i < n; i++) {
			c += p[i];
			if (c >= r) {
				return i;
			}
		}
		assert(false, 'wtf');
	}
	// ------
	// AGENTS
	// ------
	// DPAgent performs Value Iteration
	// - can also be used for Policy Iteration if you really wanted to
	// - requires model of the environment :(
	// - does not learn from experience :(
	// - assumes finite MDP :(
	var DPAgent = function(env, opt) {
		this.V = null; // state value function
		this.P = null; // policy distribution \pi(s,a)
		this.env = env; // store pointer to environment
		this.gamma = getopt(opt, 'gamma', 0.75); // future reward discount factor
		this.reset();
	}
	DPAgent.prototype = {
		reset: function() {
			// reset the agent's policy and value function
			this.ns = this.env.getNumStates();
			this.na = this.env.getMaxNumActions();
			this.V = zeros(this.ns);
			this.P = zeros(this.ns * this.na);
			// initialize uniform random policy
			for (var s = 0; s < this.ns; s++) {
				var poss = this.env.allowedActions(s);
				for (var i = 0, n = poss.length; i < n; i++) {
					this.P[poss[i] * this.ns + s] = 1.0 / poss.length;
				}
			}
		},
		act: function(s) {
			// behave according to the learned policy
			var poss = this.env.allowedActions(s);
			var ps = [];
			for (var i = 0, n = poss.length; i < n; i++) {
				var a = poss[i];
				var prob = this.P[a * this.ns + s];
				ps.push(prob);
			}
			var maxi = sampleWeighted(ps);
			return poss[maxi];
		},
		learn: function() {
			// perform a single round of value iteration
			self.evaluatePolicy(); // writes this.V
			self.updatePolicy(); // writes this.P
		},
		evaluatePolicy: function() {
			// perform a synchronous update of the value function
			var Vnew = zeros(this.ns);
			for (var s = 0; s < this.ns; s++) {
				// integrate over actions in a stochastic policy
				// note that we assume that policy probability mass over allowed actions sums to one
				var v = 0.0;
				var poss = this.env.allowedActions(s);
				for (var i = 0, n = poss.length; i < n; i++) {
					var a = poss[i];
					var prob = this.P[a * this.ns + s]; // probability of taking action under policy
					if (prob === 0) {
						continue;
					} // no contribution, skip for speed
					var ns = this.env.nextStateDistribution(s, a);
					var rs = this.env.reward(s, a, ns); // reward for s->a->ns transition
					v += prob * (rs + this.gamma * this.V[ns]);
				}
				Vnew[s] = v;
			}
			this.V = Vnew; // swap
		},
		updatePolicy: function() {
			// update policy to be greedy w.r.t. learned Value function
			for (var s = 0; s < this.ns; s++) {
				var poss = this.env.allowedActions(s);
				// compute value of taking each allowed action
				var vmax, nmax;
				var vs = [];
				for (var i = 0, n = poss.length; i < n; i++) {
					var a = poss[i];
					var ns = this.env.nextStateDistribution(s, a);
					var rs = this.env.reward(s, a, ns);
					var v = rs + this.gamma * this.V[ns];
					vs.push(v);
					if (i === 0 || v > vmax) {
						vmax = v;
						nmax = 1;
					} else if (v === vmax) {
						nmax += 1;
					}
				}
				// update policy smoothly across all argmaxy actions
				for (var i = 0, n = poss.length; i < n; i++) {
					var a = poss[i];
					this.P[a * this.ns + s] = (vs[i] === vmax) ? 1.0 / nmax : 0.0;
				}
			}
		},
	}
	// QAgent uses TD (Q-Learning, SARSA)
	// - does not require environment model :)
	// - learns from experience :)
	var TDAgent = function(env, opt) {
		this.update = getopt(opt, 'update', 'qlearn'); // qlearn | sarsa
		this.gamma = getopt(opt, 'gamma', 0.75); // future reward discount factor
		this.epsilon = getopt(opt, 'epsilon', 0.1); // for epsilon-greedy policy
		this.alpha = getopt(opt, 'alpha', 0.01); // value function learning rate
		// class allows non-deterministic policy, and smoothly regressing towards the optimal policy based on Q
		this.smooth_policy_update = getopt(opt, 'smooth_policy_update', false);
		this.beta = getopt(opt, 'beta', 0.01); // learning rate for policy, if smooth updates are on
		// eligibility traces
		this.lambda = getopt(opt, 'lambda', 0); // eligibility trace decay. 0 = no eligibility traces used
		this.replacing_traces = getopt(opt, 'replacing_traces', true);
		// optional optimistic initial values
		this.q_init_val = getopt(opt, 'q_init_val', 0);
		this.planN = getopt(opt, 'planN', 0); // number of planning steps per learning iteration (0 = no planning)
		this.Q = null; // state action value function
		this.P = null; // policy distribution \pi(s,a)
		this.e = null; // eligibility trace
		this.env_model_s = null;; // environment model (s,a) -> (s',r)
		this.env_model_r = null;; // environment model (s,a) -> (s',r)
		this.env = env; // store pointer to environment
		this.reset();
	}
	TDAgent.prototype = {
		reset: function() {
			// reset the agent's policy and value function
			this.ns = this.env.getNumStates();
			this.na = this.env.getMaxNumActions();
			this.Q = zeros(this.ns * this.na);
			if (this.q_init_val !== 0) {
				setConst(this.Q, this.q_init_val);
			}
			this.P = zeros(this.ns * this.na);
			this.e = zeros(this.ns * this.na);
			// model/planning vars
			this.env_model_s = zeros(this.ns * this.na);
			setConst(this.env_model_s, -1); // init to -1 so we can test if we saw the state before
			this.env_model_r = zeros(this.ns * this.na);
			this.sa_seen = [];
			this.pq = zeros(this.ns * this.na);
			// initialize uniform random policy
			for (var s = 0; s < this.ns; s++) {
				var poss = this.env.allowedActions(s);
				for (var i = 0, n = poss.length; i < n; i++) {
					this.P[poss[i] * this.ns + s] = 1.0 / poss.length;
				}
			}
			// agent memory, needed for streaming updates
			// (s0,a0,r0,s1,a1,r1,...)
			this.r0 = null;
			this.s0 = null;
			this.s1 = null;
			this.a0 = null;
			this.a1 = null;
		},
		resetEpisode: function() {
			// an episode finished
		},
		act: function(s) {
			// act according to epsilon greedy policy
			var poss = this.env.allowedActions(s);
			var probs = [];
			for (var i = 0, n = poss.length; i < n; i++) {
				probs.push(this.P[poss[i] * this.ns + s]);
			}
			// epsilon greedy policy
			if (Math.random() < this.epsilon) {
				var a = poss[randi(0, poss.length)]; // random available action
				this.explored = true;
			} else {
				var a = poss[sampleWeighted(probs)];
				this.explored = false;
			}
			// shift state memory
			this.s0 = this.s1;
			this.a0 = this.a1;
			this.s1 = s;
			this.a1 = a;
			return a;
		},
		learn: function(r1) {
			// takes reward for previous action, which came from a call to act()
			if (!(this.r0 == null)) {
				this.learnFromTuple(this.s0, this.a0, this.r0, this.s1, this.a1, this.lambda);
				if (this.planN > 0) {
					this.updateModel(this.s0, this.a0, this.r0, this.s1);
					this.plan();
				}
			}
			this.r0 = r1; // store this for next update
		},
		updateModel: function(s0, a0, r0, s1) {
			// transition (s0,a0) -> (r0,s1) was observed. Update environment model
			var sa = a0 * this.ns + s0;
			if (this.env_model_s[sa] === -1) {
				// first time we see this state action
				this.sa_seen.push(a0 * this.ns + s0); // add as seen state
			}
			this.env_model_s[sa] = s1;
			this.env_model_r[sa] = r0;
		},
		plan: function() {
			// order the states based on current priority queue information
			var spq = [];
			for (var i = 0, n = this.sa_seen.length; i < n; i++) {
				var sa = this.sa_seen[i];
				var sap = this.pq[sa];
				if (sap > 1e-5) { // gain a bit of efficiency
					spq.push({
						sa: sa,
						p: sap
					});
				}
			}
			spq.sort(function(a, b) {
				return a.p < b.p ? 1 : -1
			});
			// perform the updates
			var nsteps = Math.min(this.planN, spq.length);
			for (var k = 0; k < nsteps; k++) {
				// random exploration
				//var i = randi(0, this.sa_seen.length); // pick random prev seen state action
				//var s0a0 = this.sa_seen[i];
				var s0a0 = spq[k].sa;
				this.pq[s0a0] = 0; // erase priority, since we're backing up this state
				var s0 = s0a0 % this.ns;
				var a0 = Math.floor(s0a0 / this.ns);
				var r0 = this.env_model_r[s0a0];
				var s1 = this.env_model_s[s0a0];
				var a1 = -1; // not used for Q learning
				if (this.update === 'sarsa') {
					// generate random action?...
					var poss = this.env.allowedActions(s1);
					var a1 = poss[randi(0, poss.length)];
				}
				this.learnFromTuple(s0, a0, r0, s1, a1, 0); // note lambda = 0 - shouldnt use eligibility trace here
			}
		},
		learnFromTuple: function(s0, a0, r0, s1, a1, lambda) {
			var sa = a0 * this.ns + s0;
			// calculate the target for Q(s,a)
			if (this.update === 'qlearn') {
				// Q learning target is Q(s0,a0) = r0 + gamma * max_a Q[s1,a]
				var poss = this.env.allowedActions(s1);
				var qmax = 0;
				for (var i = 0, n = poss.length; i < n; i++) {
					var s1a = poss[i] * this.ns + s1;
					var qval = this.Q[s1a];
					if (i === 0 || qval > qmax) {
						qmax = qval;
					}
				}
				var target = r0 + this.gamma * qmax;
			} else if (this.update === 'sarsa') {
				// SARSA target is Q(s0,a0) = r0 + gamma * Q[s1,a1]
				var s1a1 = a1 * this.ns + s1;
				var target = r0 + this.gamma * this.Q[s1a1];
			}
			if (lambda > 0) {
				// perform an eligibility trace update
				if (this.replacing_traces) {
					this.e[sa] = 1;
				} else {
					this.e[sa] += 1;
				}
				var edecay = lambda * this.gamma;
				var state_update = zeros(this.ns);
				for (var s = 0; s < this.ns; s++) {
					var poss = this.env.allowedActions(s);
					for (var i = 0; i < poss.length; i++) {
						var a = poss[i];
						var saloop = a * this.ns + s;
						var esa = this.e[saloop];
						var update = this.alpha * esa * (target - this.Q[saloop]);
						this.Q[saloop] += update;
						this.updatePriority(s, a, update);
						this.e[saloop] *= edecay;
						var u = Math.abs(update);
						if (u > state_update[s]) {
							state_update[s] = u;
						}
					}
				}
				for (var s = 0; s < this.ns; s++) {
					if (state_update[s] > 1e-5) { // save efficiency here
						this.updatePolicy(s);
					}
				}
				if (this.explored && this.update === 'qlearn') {
					// have to wipe the trace since q learning is off-policy :(
					this.e = zeros(this.ns * this.na);
				}
			} else {
				// simpler and faster update without eligibility trace
				// update Q[sa] towards it with some step size
				var update = this.alpha * (target - this.Q[sa]);
				this.Q[sa] += update;
				this.updatePriority(s0, a0, update);
				// update the policy to reflect the change (if appropriate)
				this.updatePolicy(s0);
			}
		},
		updatePriority: function(s, a, u) {
			// used in planning. Invoked when Q[sa] += update
			// we should find all states that lead to (s,a) and upgrade their priority
			// of being update in the next planning step
			u = Math.abs(u);
			if (u < 1e-5) {
				return;
			} // for efficiency skip small updates
			if (this.planN === 0) {
				return;
			} // there is no planning to be done, skip.
			for (var si = 0; si < this.ns; si++) {
				// note we are also iterating over impossible actions at all states,
				// but this should be okay because their env_model_s should simply be -1
				// as initialized, so they will never be predicted to point to any state
				// because they will never be observed, and hence never be added to the model
				for (var ai = 0; ai < this.na; ai++) {
					var siai = ai * this.ns + si;
					if (this.env_model_s[siai] === s) {
						// this state leads to s, add it to priority queue
						this.pq[siai] += u;
					}
				}
			}
		},
		updatePolicy: function(s) {
			var poss = this.env.allowedActions(s);
			// set policy at s to be the action that achieves max_a Q(s,a)
			// first find the maxy Q values
			var qmax, nmax;
			var qs = [];
			for (var i = 0, n = poss.length; i < n; i++) {
				var a = poss[i];
				var qval = this.Q[a * this.ns + s];
				qs.push(qval);
				if (i === 0 || qval > qmax) {
					qmax = qval;
					nmax = 1;
				} else if (qval === qmax) {
					nmax += 1;
				}
			}
			// now update the policy smoothly towards the argmaxy actions
			var psum = 0.0;
			for (var i = 0, n = poss.length; i < n; i++) {
				var a = poss[i];
				var target = (qs[i] === qmax) ? 1.0 / nmax : 0.0;
				var ix = a * this.ns + s;
				if (this.smooth_policy_update) {
					// slightly hacky :p
					this.P[ix] += this.beta * (target - this.P[ix]);
					psum += this.P[ix];
				} else {
					// set hard target
					this.P[ix] = target;
				}
			}
			if (this.smooth_policy_update) {
				// renomalize P if we're using smooth policy updates
				for (var i = 0, n = poss.length; i < n; i++) {
					var a = poss[i];
					this.P[a * this.ns + s] /= psum;
				}
			}
		}
	}
	var DQNAgent = function(env, opt) {
		this.gamma = getopt(opt, 'gamma', 0.75); // future reward discount factor
		this.epsilon = getopt(opt, 'epsilon', 0.1); // for epsilon-greedy policy
		this.alpha = getopt(opt, 'alpha', 0.01); // value function learning rate
		this.experience_add_every = getopt(opt, 'experience_add_every', 25); // number of time steps before we add another experience to replay memory
		this.experience_size = getopt(opt, 'experience_size', 5000); // size of experience replay
		this.learning_steps_per_iteration = getopt(opt, 'learning_steps_per_iteration', 10);
		this.tderror_clamp = getopt(opt, 'tderror_clamp', 1.0);
		this.num_hidden_units = getopt(opt, 'num_hidden_units', 100);
		this.env = env;
		this.reset();
	}
	DQNAgent.prototype = {
		reset: function() {
			this.nh = this.num_hidden_units; // number of hidden units
			this.ns = this.env.getNumStates();
			this.na = this.env.getMaxNumActions();
			// nets are hardcoded for now as key (str) -> Mat
			// not proud of this. better solution is to have a whole Net object
			// on top of Mats, but for now sticking with this
			this.net = {};
			this.net.W1 = new R.RandMat(this.nh, this.ns, 0, 0.01);
			this.net.b1 = new R.Mat(this.nh, 1, 0, 0.01);
			this.net.W2 = new R.RandMat(this.na, this.nh, 0, 0.01);
			this.net.b2 = new R.Mat(this.na, 1, 0, 0.01);
			this.exp = []; // experience
			this.expi = 0; // where to insert
			this.t = 0;
			this.r0 = null;
			this.s0 = null;
			this.s1 = null;
			this.a0 = null;
			this.a1 = null;
			this.tderror = 0; // for visualization only...
		},
		toJSON: function() {
			// save function
			var j = {};
			j.nh = this.nh;
			j.ns = this.ns;
			j.na = this.na;
			j.net = R.netToJSON(this.net);
			return j;
		},
		fromJSON: function(j) {
			// load function
			this.nh = j.nh;
			this.ns = j.ns;
			this.na = j.na;
			this.net = R.netFromJSON(j.net);
		},
		forwardQ: function(net, s, needs_backprop) {
			var G = new R.Graph(needs_backprop);
			var a1mat = G.add(G.mul(net.W1, s), net.b1);
			var h1mat = G.tanh(a1mat);
			var a2mat = G.add(G.mul(net.W2, h1mat), net.b2);
			this.lastG = G; // back this up. Kind of hacky isn't it
			return a2mat;
		},
		act: function(slist) {
			// convert to a Mat column vector
			var s = new R.Mat(this.ns, 1);
			s.setFrom(slist);
			// epsilon greedy policy
			if (Math.random() < this.epsilon) {
				var a = randi(0, this.na);
			} else {
				// greedy wrt Q function
				var amat = this.forwardQ(this.net, s, false);
				var a = R.maxi(amat.w); // returns index of argmax action
			}
			// shift state memory
			this.s0 = this.s1;
			this.a0 = this.a1;
			this.s1 = s;
			this.a1 = a;
			return a;
		},
		learn: function(r1) {
			// perform an update on Q function
			if (!(this.r0 == null) && this.alpha > 0) {
				// learn from this tuple to get a sense of how "surprising" it is to the agent
				var tderror = this.learnFromTuple(this.s0, this.a0, this.r0, this.s1, this.a1);
				this.tderror = tderror; // a measure of surprise
				// decide if we should keep this experience in the replay
				if (this.t % this.experience_add_every === 0) {
					this.exp[this.expi] = [this.s0, this.a0, this.r0, this.s1, this.a1];
					this.expi += 1;
					if (this.expi > this.experience_size) {
						this.expi = 0;
					} // roll over when we run out
				}
				this.t += 1;
				// sample some additional experience from replay memory and learn from it
				for (var k = 0; k < this.learning_steps_per_iteration; k++) {
					var ri = randi(0, this.exp.length); // todo: priority sweeps?
					var e = this.exp[ri];
					this.learnFromTuple(e[0], e[1], e[2], e[3], e[4])
				}
			}
			this.r0 = r1; // store for next update
		},
		learnFromTuple: function(s0, a0, r0, s1, a1) {
			// want: Q(s,a) = r + gamma * max_a' Q(s',a')
			// compute the target Q value
			var tmat = this.forwardQ(this.net, s1, false);
			var qmax = r0 + this.gamma * tmat.w[R.maxi(tmat.w)];
			// now predict
			var pred = this.forwardQ(this.net, s0, true);
			var tderror = pred.w[a0] - qmax;
			var clamp = this.tderror_clamp;
			if (Math.abs(tderror) > clamp) { // huber loss to robustify
				if (tderror > clamp) tderror = clamp;
				if (tderror < -clamp) tderror = -clamp;
			}
			pred.dw[a0] = tderror;
			this.lastG.backward(); // compute gradients on net params
			// update net
			R.updateNet(this.net, this.alpha);
			return tderror;
		}
	}
	// buggy implementation, doesnt work...
	var SimpleReinforceAgent = function(env, opt) {
		this.gamma = getopt(opt, 'gamma', 0.5); // future reward discount factor
		this.epsilon = getopt(opt, 'epsilon', 0.75); // for epsilon-greedy policy
		this.alpha = getopt(opt, 'alpha', 0.001); // actor net learning rate
		this.beta = getopt(opt, 'beta', 0.01); // baseline net learning rate
		this.env = env;
		this.reset();
	}
	SimpleReinforceAgent.prototype = {
		reset: function() {
			this.ns = this.env.getNumStates();
			this.na = this.env.getMaxNumActions();
			this.nh = 100; // number of hidden units
			this.nhb = 100; // and also in the baseline lstm
			this.actorNet = {};
			this.actorNet.W1 = new R.RandMat(this.nh, this.ns, 0, 0.01);
			this.actorNet.b1 = new R.Mat(this.nh, 1, 0, 0.01);
			this.actorNet.W2 = new R.RandMat(this.na, this.nh, 0, 0.1);
			this.actorNet.b2 = new R.Mat(this.na, 1, 0, 0.01);
			this.actorOutputs = [];
			this.actorGraphs = [];
			this.actorActions = []; // sampled ones
			this.rewardHistory = [];
			this.baselineNet = {};
			this.baselineNet.W1 = new R.RandMat(this.nhb, this.ns, 0, 0.01);
			this.baselineNet.b1 = new R.Mat(this.nhb, 1, 0, 0.01);
			this.baselineNet.W2 = new R.RandMat(this.na, this.nhb, 0, 0.01);
			this.baselineNet.b2 = new R.Mat(this.na, 1, 0, 0.01);
			this.baselineOutputs = [];
			this.baselineGraphs = [];
			this.t = 0;
		},
		forwardActor: function(s, needs_backprop) {
			var net = this.actorNet;
			var G = new R.Graph(needs_backprop);
			var a1mat = G.add(G.mul(net.W1, s), net.b1);
			var h1mat = G.tanh(a1mat);
			var a2mat = G.add(G.mul(net.W2, h1mat), net.b2);
			return {
				'a': a2mat,
				'G': G
			}
		},
		forwardValue: function(s, needs_backprop) {
			var net = this.baselineNet;
			var G = new R.Graph(needs_backprop);
			var a1mat = G.add(G.mul(net.W1, s), net.b1);
			var h1mat = G.tanh(a1mat);
			var a2mat = G.add(G.mul(net.W2, h1mat), net.b2);
			return {
				'a': a2mat,
				'G': G
			}
		},
		act: function(slist) {
			// convert to a Mat column vector
			var s = new R.Mat(this.ns, 1);
			s.setFrom(slist);
			// forward the actor to get action output
			var ans = this.forwardActor(s, true);
			var amat = ans.a;
			var ag = ans.G;
			this.actorOutputs.push(amat);
			this.actorGraphs.push(ag);
			// forward the baseline estimator
			var ans = this.forwardValue(s, true);
			var vmat = ans.a;
			var vg = ans.G;
			this.baselineOutputs.push(vmat);
			this.baselineGraphs.push(vg);
			// sample action from the stochastic gaussian policy
			var a = R.copyMat(amat);
			var gaussVar = 0.02;
			a.w[0] = R.randn(0, gaussVar);
			a.w[1] = R.randn(0, gaussVar);
			this.actorActions.push(a);
			// shift state memory
			this.s0 = this.s1;
			this.a0 = this.a1;
			this.s1 = s;
			this.a1 = a;
			return a;
		},
		learn: function(r1) {
			// perform an update on Q function
			this.rewardHistory.push(r1);
			var n = this.rewardHistory.length;
			var baselineMSE = 0.0;
			var nup = 100; // what chunk of experience to take
			var nuse = 80; // what chunk to update from
			if (n >= nup) {
				// lets learn and flush
				// first: compute the sample values at all points
				var vs = [];
				for (var t = 0; t < nuse; t++) {
					var mul = 1;
					// compute the actual discounted reward for this time step
					var V = 0;
					for (var t2 = t; t2 < n; t2++) {
						V += mul * this.rewardHistory[t2];
						mul *= this.gamma;
						if (mul < 1e-5) {
							break;
						} // efficiency savings
					}
					// get the predicted baseline at this time step
					var b = this.baselineOutputs[t].w[0];
					for (var i = 0; i < this.na; i++) {
						// [the action delta] * [the desirebility]
						var update = -(V - b) * (this.actorActions[t].w[i] - this.actorOutputs[t].w[i]);
						if (update > 0.1) {
							update = 0.1;
						}
						if (update < -0.1) {
							update = -0.1;
						}
						this.actorOutputs[t].dw[i] += update;
					}
					var update = -(V - b);
					if (update > 0.1) {
						update = 0.1;
					}
					if (update < 0.1) {
						update = -0.1;
					}
					this.baselineOutputs[t].dw[0] += update;
					baselineMSE += (V - b) * (V - b);
					vs.push(V);
				}
				baselineMSE /= nuse;
				// backprop all the things
				for (var t = 0; t < nuse; t++) {
					this.actorGraphs[t].backward();
					this.baselineGraphs[t].backward();
				}
				R.updateNet(this.actorNet, this.alpha); // update actor network
				R.updateNet(this.baselineNet, this.beta); // update baseline network
				// flush
				this.actorOutputs = [];
				this.rewardHistory = [];
				this.actorActions = [];
				this.baselineOutputs = [];
				this.actorGraphs = [];
				this.baselineGraphs = [];
				this.tderror = baselineMSE;
			}
			this.t += 1;
			this.r0 = r1; // store for next update
		},
	}
	// buggy implementation as well, doesn't work
	var RecurrentReinforceAgent = function(env, opt) {
		this.gamma = getopt(opt, 'gamma', 0.5); // future reward discount factor
		this.epsilon = getopt(opt, 'epsilon', 0.1); // for epsilon-greedy policy
		this.alpha = getopt(opt, 'alpha', 0.001); // actor net learning rate
		this.beta = getopt(opt, 'beta', 0.01); // baseline net learning rate
		this.env = env;
		this.reset();
	}
	RecurrentReinforceAgent.prototype = {
		reset: function() {
			this.ns = this.env.getNumStates();
			this.na = this.env.getMaxNumActions();
			this.nh = 40; // number of hidden units
			this.nhb = 40; // and also in the baseline lstm
			this.actorLSTM = R.initLSTM(this.ns, [this.nh], this.na);
			this.actorG = new R.Graph();
			this.actorPrev = null;
			this.actorOutputs = [];
			this.rewardHistory = [];
			this.actorActions = [];
			this.baselineLSTM = R.initLSTM(this.ns, [this.nhb], 1);
			this.baselineG = new R.Graph();
			this.baselinePrev = null;
			this.baselineOutputs = [];
			this.t = 0;
			this.r0 = null;
			this.s0 = null;
			this.s1 = null;
			this.a0 = null;
			this.a1 = null;
		},
		act: function(slist) {
			// convert to a Mat column vector
			var s = new R.Mat(this.ns, 1);
			s.setFrom(slist);
			// forward the LSTM to get action distribution
			var actorNext = R.forwardLSTM(this.actorG, this.actorLSTM, [this.nh], s, this.actorPrev);
			this.actorPrev = actorNext;
			var amat = actorNext.o;
			this.actorOutputs.push(amat);
			// forward the baseline LSTM
			var baselineNext = R.forwardLSTM(this.baselineG, this.baselineLSTM, [this.nhb], s, this.baselinePrev);
			this.baselinePrev = baselineNext;
			this.baselineOutputs.push(baselineNext.o);
			// sample action from actor policy
			var gaussVar = 0.05;
			var a = R.copyMat(amat);
			for (var i = 0, n = a.w.length; i < n; i++) {
				a.w[0] += R.randn(0, gaussVar);
				a.w[1] += R.randn(0, gaussVar);
			}
			this.actorActions.push(a);
			// shift state memory
			this.s0 = this.s1;
			this.a0 = this.a1;
			this.s1 = s;
			this.a1 = a;
			return a;
		},
		learn: function(r1) {
			// perform an update on Q function
			this.rewardHistory.push(r1);
			var n = this.rewardHistory.length;
			var baselineMSE = 0.0;
			var nup = 100; // what chunk of experience to take
			var nuse = 80; // what chunk to also update
			if (n >= nup) {
				// lets learn and flush
				// first: compute the sample values at all points
				var vs = [];
				for (var t = 0; t < nuse; t++) {
					var mul = 1;
					var V = 0;
					for (var t2 = t; t2 < n; t2++) {
						V += mul * this.rewardHistory[t2];
						mul *= this.gamma;
						if (mul < 1e-5) {
							break;
						} // efficiency savings
					}
					var b = this.baselineOutputs[t].w[0];
					// todo: take out the constants etc.
					for (var i = 0; i < this.na; i++) {
						// [the action delta] * [the desirebility]
						var update = -(V - b) * (this.actorActions[t].w[i] - this.actorOutputs[t].w[i]);
						if (update > 0.1) {
							update = 0.1;
						}
						if (update < -0.1) {
							update = -0.1;
						}
						this.actorOutputs[t].dw[i] += update;
					}
					var update = -(V - b);
					if (update > 0.1) {
						update = 0.1;
					}
					if (update < 0.1) {
						update = -0.1;
					}
					this.baselineOutputs[t].dw[0] += update;
					baselineMSE += (V - b) * (V - b);
					vs.push(V);
				}
				baselineMSE /= nuse;
				this.actorG.backward(); // update params! woohoo!
				this.baselineG.backward();
				R.updateNet(this.actorLSTM, this.alpha); // update actor network
				R.updateNet(this.baselineLSTM, this.beta); // update baseline network
				// flush
				this.actorG = new R.Graph();
				this.actorPrev = null;
				this.actorOutputs = [];
				this.rewardHistory = [];
				this.actorActions = [];
				this.baselineG = new R.Graph();
				this.baselinePrev = null;
				this.baselineOutputs = [];
				this.tderror = baselineMSE;
			}
			this.t += 1;
			this.r0 = r1; // store for next update
		},
	}
	// Currently buggy implementation, doesnt work
	var DeterministPG = function(env, opt) {
		this.gamma = getopt(opt, 'gamma', 0.5); // future reward discount factor
		this.epsilon = getopt(opt, 'epsilon', 0.5); // for epsilon-greedy policy
		this.alpha = getopt(opt, 'alpha', 0.001); // actor net learning rate
		this.beta = getopt(opt, 'beta', 0.01); // baseline net learning rate
		this.env = env;
		this.reset();
	}
	DeterministPG.prototype = {
		reset: function() {
			this.ns = this.env.getNumStates();
			this.na = this.env.getMaxNumActions();
			this.nh = 100; // number of hidden units
			// actor
			this.actorNet = {};
			this.actorNet.W1 = new R.RandMat(this.nh, this.ns, 0, 0.01);
			this.actorNet.b1 = new R.Mat(this.nh, 1, 0, 0.01);
			this.actorNet.W2 = new R.RandMat(this.na, this.ns, 0, 0.1);
			this.actorNet.b2 = new R.Mat(this.na, 1, 0, 0.01);
			this.ntheta = this.na * this.ns + this.na; // number of params in actor
			// critic
			this.criticw = new R.RandMat(1, this.ntheta, 0, 0.01); // row vector
			this.r0 = null;
			this.s0 = null;
			this.s1 = null;
			this.a0 = null;
			this.a1 = null;
			this.t = 0;
		},
		forwardActor: function(s, needs_backprop) {
			var net = this.actorNet;
			var G = new R.Graph(needs_backprop);
			var a1mat = G.add(G.mul(net.W1, s), net.b1);
			var h1mat = G.tanh(a1mat);
			var a2mat = G.add(G.mul(net.W2, h1mat), net.b2);
			return {
				'a': a2mat,
				'G': G
			}
		},
		act: function(slist) {
			// convert to a Mat column vector
			var s = new R.Mat(this.ns, 1);
			s.setFrom(slist);
			// forward the actor to get action output
			var ans = this.forwardActor(s, false);
			var amat = ans.a;
			var ag = ans.G;
			// sample action from the stochastic gaussian policy
			var a = R.copyMat(amat);
			if (Math.random() < this.epsilon) {
				var gaussVar = 0.02;
				a.w[0] = R.randn(0, gaussVar);
				a.w[1] = R.randn(0, gaussVar);
			}
			var clamp = 0.25;
			if (a.w[0] > clamp) a.w[0] = clamp;
			if (a.w[0] < -clamp) a.w[0] = -clamp;
			if (a.w[1] > clamp) a.w[1] = clamp;
			if (a.w[1] < -clamp) a.w[1] = -clamp;
			// shift state memory
			this.s0 = this.s1;
			this.a0 = this.a1;
			this.s1 = s;
			this.a1 = a;
			return a;
		},
		utilJacobianAt: function(s) {
			var ujacobian = new R.Mat(this.ntheta, this.na);
			for (var a = 0; a < this.na; a++) {
				R.netZeroGrads(this.actorNet);
				var ag = this.forwardActor(this.s0, true);
				ag.a.dw[a] = 1.0;
				ag.G.backward();
				var gflat = R.netFlattenGrads(this.actorNet);
				ujacobian.setColumn(gflat, a);
			}
			return ujacobian;
		},
		learn: function(r1) {
			// perform an update on Q function
			//this.rewardHistory.push(r1);
			if (!(this.r0 == null)) {
				var Gtmp = new R.Graph(false);
				// dpg update:
				// first compute the features psi:
				// the jacobian matrix of the actor for s
				var ujacobian0 = this.utilJacobianAt(this.s0);
				// now form the features \psi(s,a)
				var psi_sa0 = Gtmp.mul(ujacobian0, this.a0); // should be [this.ntheta x 1] "feature" vector
				var qw0 = Gtmp.mul(this.criticw, psi_sa0); // 1x1
				// now do the same thing because we need \psi(s_{t+1}, \mu\_\theta(s\_t{t+1}))
				var ujacobian1 = this.utilJacobianAt(this.s1);
				var ag = this.forwardActor(this.s1, false);
				var psi_sa1 = Gtmp.mul(ujacobian1, ag.a);
				var qw1 = Gtmp.mul(this.criticw, psi_sa1); // 1x1
				// get the td error finally
				var tderror = this.r0 + this.gamma * qw1.w[0] - qw0.w[0]; // lol
				if (tderror > 0.5) tderror = 0.5; // clamp
				if (tderror < -0.5) tderror = -0.5;
				this.tderror = tderror;
				// update actor policy with natural gradient
				var net = this.actorNet;
				var ix = 0;
				for (var p in net) {
					var mat = net[p];
					if (net.hasOwnProperty(p)) {
						for (var i = 0, n = mat.w.length; i < n; i++) {
							mat.w[i] += this.alpha * this.criticw.w[ix]; // natural gradient update
							ix += 1;
						}
					}
				}
				// update the critic parameters too
				for (var i = 0; i < this.ntheta; i++) {
					var update = this.beta * tderror * psi_sa0.w[i];
					this.criticw.w[i] += update;
				}
			}
			this.r0 = r1; // store for next update
		},
	}
	// exports
	global.DPAgent = DPAgent;
	global.TDAgent = TDAgent;
	global.DQNAgent = DQNAgent;
	//global.SimpleReinforceAgent = SimpleReinforceAgent;
	//global.RecurrentReinforceAgent = RecurrentReinforceAgent;
	//global.DeterministPG = DeterministPG;
})(RL);







var Trevel = {
	//settings you can change
	stop: false,
	maxBet: 0.00001,
	minBet: 0.00000002,
	swap: true,
	betSpeed: 0,//change this on init
	verbose: true,
	isTesting: true,
	showEvery:10000,//log to console after bets if verbose is false
	//money management
	useKelly: false,//martingale performs better on live account!
	kellyPercent: 5, //can't be more than 100 or less than 1
	useMartingale: true, //if kelly is true this won't work
	martingaleMultiplier: 2,
	//bot settings, these are set automaticcally don't bother
	currentBalance: 0,
	startingBalance: 0,
	betAmount: 0,
	profit: 0,
	totalBets: 0,
	totalWins: 0,
	winRate: 0,
	betHistory: [], //this is a sequence of all winning bets not the sequence of bets we placed
	betOutcomes: [],
	rollHistory:[],
	hbProbability: 0,
	lbProbability: 0,
	hbCount: 0,
	lbcount: 0,
	nextBet: "",
	previousReward:0,
	nextLog:0,
    nonce:1,
    serverSeed:"",
    clientSeed:"",
    hiNum:5250,
    loNum:4750,
	looseStreak:0,
	winStreak:0,
	addBet: function(bet, outcome) {
		if (bet === "LB" && outcome === "Win") {
			Trevel.betHistory.push("LO");
			Trevel.betOutcomes.push("W");
			Trevel.totalWins++;
			Trevel.lbcount++;
		}
		if (bet === "LB" && outcome === "Loose") {
			Trevel.betHistory.push("HI");
			Trevel.hbCount++;
			Trevel.betOutcomes.push("L");
		}
		if (bet === "HB" && outcome === "Win") {
			Trevel.betHistory.push("HI");
			Trevel.totalWins++;
			Trevel.hbCount++;
			Trevel.betOutcomes.push("W");
		}
		if (bet === "HB" && outcome === "Loose") {
			Trevel.betHistory.push("LO");
			Trevel.lbcount++;
			Trevel.betOutcomes.push("L");
		}
		Trevel.totalBets++;
	},
	calculateProbabilities: function() {
		Trevel.hbProbability = Trevel.hbCount / Trevel.betHistory.length;
		Trevel.lbProbability = Trevel.lbcount / Trevel.betHistory.length;
		Trevel.winRate = Trevel.totalWins / Trevel.totalBets;
		if(Trevel.isTesting===false){
		Trevel.profit = Trevel.getProfit();
		}
	},
    getNewSeed:function(){
        var result = '';
        var length = 16;
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
        for (var i = length; i > 0; --i) {
            result += chars[Math.floor(Math.random() * chars.length)];
            }
        return result;
    },
    rollDice:function(cs,ss){
        var server_seed_hash = CryptoJS.SHA256(ss).toString(CryptoJS.enc.Hex);
					var string1 = Trevel.nonce.toString().concat(":",ss,":",Trevel.nonce.toString());
					var string2 = Trevel.nonce.toString().concat(":",cs,":",Trevel.nonce.toString());
					var hmac512 = CryptoJS.HmacSHA512(string1,string2).toString(CryptoJS.enc.Hex);
					var string3 = hmac512.substring(0,8);
					var number = parseInt(string3, 16);
					var roll = (Math.round(number/429496.7295)).toFixed(0);
                    return roll;
    },
	getCurrentBalance: function() {
		return parseFloat($('#balance').html());
	},
	placeHighBet: function() {
		$('#double_your_btc_bet_hi_button').click();
	},
	placeLowBet: function() {
		$('#double_your_btc_bet_lo_button').click();
	},
	setBetAmount: function(amount) {
		var elem = document.getElementById("double_your_btc_stake");
		elem.value = amount;
	},
	setOutcome: function(bet) {
		if ($('#double_your_btc_bet_lose').html() !== '') {
			Trevel.addBet(bet, "Loose");
		} else {
			Trevel.addBet(bet, "Win");
		}
	},
	prepareBet: function() {
		Trevel.calculateProbabilities();
		if (Trevel.betHistory.length < 10) {
			if (Trevel.useMartingale === true && Trevel.betHistory.length>12) {
				if ($('#double_your_btc_bet_lose').html() !== '' && parseFloat($('#double_your_btc_stake').val()) * Trevel.martingaleMultiplier < Trevel.maxBet) {
					Trevel.setBetAmount((parseFloat($('#double_your_btc_stake').val()) * Trevel.martingaleMultiplier).toFixed(8));
				} else {
					Trevel.setBetAmount(Trevel.minBet);
				}
			}
		} else {
			if (Trevel.useKelly === true && Trevel.betHistory.length>12) {
				Trevel.currentBalance = Trevel.getCurrentBalance();
				var currMulty = document.getElementById("double_your_btc_payout_multiplier").value;
				var kellyAmount = (((Trevel.currentBalance * Trevel.kellyPercent) / 100) * ((Trevel.winRate * currMulty - 1)) / (currMulty - 1)).toFixed(8);
				if (kellyAmount > 0 && kellyAmount < Trevel.maxBet) {
					Trevel.setBetAmount(kellyAmount);
				} else {
					Trevel.setBetAmount(Trevel.minBet);
				}
			} else if (Trevel.useMartingale === true && Trevel.betHistory.length>12) {
				if ($('#double_your_btc_bet_lose').html() !== '' && parseFloat($('#double_your_btc_stake').val()) * Trevel.martingaleMultiplier < Trevel.maxBet) {
					Trevel.setBetAmount((parseFloat($('#double_your_btc_stake').val()) * Trevel.martingaleMultiplier).toFixed(8));
				} else {
					Trevel.setBetAmount(Trevel.minBet);
				}
			}
		}
	},
	placeBet: function() {
		if (Trevel.nextBet === "HB") {
			Trevel.placeHighBet();
		} else if (Trevel.nextBet === "LB") {
			Trevel.placeLowBet();
		} else if (Trevel.betHistory.length > 0 && Trevel.swap === true) {
			var prev = Trevel.betHistory[Trevel.betHistory.length - 1];
			if (prev === "LO") {
				Trevel.placeHighBet();
			} else {
				Trevel.placeLowBet();
			}
		} else {
			Trevel.placeLowBet();
		}
	},
	getProfit: function() {
		return (Trevel.getCurrentBalance() - Trevel.startingBalance).toFixed(8);
	},
	getNumStates: function() {
		return 5;
	},
	getMaxNumActions: function() {
		return 2;
	},
	getSentiment: function(bet) {
		if (bet === "HI") {
			return 1;
		} else {
			return 0;
		}
	},
	getPreviousBets: function() {
		var hist = [];
		if (Trevel.rollHistory.length > 5) {
            for(var i=1;i<5;i++){
                hist.push(Trevel.rollHistory[Trevel.rollHistory.length - i]);
            }
		} else {
            for(var j=0;j<5;j++){
                hist = [Trevel.rollDice(Trevel.getNewSeed(),Trevel.getNewSeed())]; //incase we just started...
            }			
		}
		return hist;
	},
	getAgentState: function() { //we'll observe the last 8 bets
		var s = Trevel.getPreviousBets();
		return s;
	},
	getReward: function() {
		var reward = 0;
		var out1=Trevel.betOutcomes[Trevel.betOutcomes.length - 1];
		var out2=Trevel.betOutcomes[Trevel.betOutcomes.length - 2];
		if(out1==="L"){
			if(Trevel.previousReward<0){
				reward=Trevel.previousReward;
				reward+=-0.03;
				if(out2==="L"){
					reward+=-0.03;
				}
			}
			else{
				reward=-0.03;
				if(out2==="L"){
					reward+=-0.03;
				}
			}
		}
		else{
			if(Trevel.previousReward>0){
				reward=Trevel.previousReward;
				reward+=0.01;
				if(out2==="W"){
					reward+=0.01;
				}
			}
			else{
				reward=0.01;
				if(out2==="W"){
					reward+=0.01;
				}
			}
		}
		return reward;
	},
	//for raw testing only
	randomNumber: function(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	},
	getTestOutcome: function(random) {        
		/*if(Trevel.betHistory[Trevel.betHistory.length-1]==="LO"){
			return "HI";
		}
		else{
			return "LO";
        }*/
		 if (random % 2 == 0) {
		 	return "HI";
		 } else {
		 	return "LO";
		 }
	},
	//initialize Trevel
	init: function() {
		Trevel.startingBalance = Trevel.currentBalance = parseFloat($('#balance').html());
		Trevel.setBetAmount(Trevel.minBet);
		Trevel.stop = false;
		Trevel.swap = true;
		Trevel.betSpeed=3000;
		Trevel.nextLog=Trevel.showEvery;
	}
};
//Deep Q learning with reinforceJS
var spec = {}
spec.update = 'qlearn';
spec.gamma = 0.9;
//everything here is modifiable for testing purposes FYI
spec.epsilon = 0.20;
spec.alpha = 0.1;
spec.experience_add_every = 5;
spec.experience_size = 999999;
spec.learning_steps_per_iteration = 5;
spec.tderror_clamp = 1.0; 
spec.num_hidden_units = 100;
// create an environment object
var env = Trevel;
if (env.isTesting === false) {
	env.init();
}
// create the DQN agent
agent = new RL.DQNAgent(env, spec);
var winRoll=0,looseRoll=0;
var testAmount=2;
setInterval(function() {
	if (env.stop === false) {
		var state = env.getAgentState();
		var action = agent.act(state);
		var outcome = "";
		if (env.isTesting === false) {
			if (action === 0) {
				env.nextBet = "LB";
				env.prepareBet();
				env.placeBet();
				env.setOutcome("LB");
				outcome = env.betOutcomes[env.betOutcomes.length - 1];
			} else if (action === 1) {
				env.nextBet = "HB";
				env.prepareBet();
				env.placeBet();
				env.setOutcome("HB");
				outcome = env.betOutcomes[env.betOutcomes.length - 1];
			}
			if (env.verbose === true) {
				env.calculateProbabilities();
				//console.log("Machine Bet: " + action + "{" + env.nextBet + "} isKelly: " + env.useKelly + " isMartingale: " + env.useMartingale);
				console.log("Profit: " + env.profit+" WinRate: " + (env.winRate*100).toFixed(2));
			}
		} else {
            env.serverSeed=env.getNewSeed();
            env.clientSeed=env.getNewSeed();
            var roll=env.rollDice(env.clientSeed,env.serverSeed);
			env.rollHistory.push(parseInt(roll));
			if (action === 0 && roll<env.loNum) {
				env.profit+=testAmount;
				/*if(env.betOutcomes[env.betOutcomes.length-1]==="W" && winRoll<5){
				testAmount=parseFloat(((testAmount*200)/100).toFixed(2));
				}
				else{
					testAmount=2;
				}*/
				env.addBet("LB", "Win");
				outcome = "W";
				winRoll++;
				looseRoll=0;
				testAmount=2;				
			} else if (action === 0 && roll>env.loNum) {
				env.addBet("LB", "Loose");
				outcome = "L";
				winRoll=0;
				looseRoll++;
				env.profit-=testAmount;
				testAmount*=2;
			} else if (action === 1 && roll>env.hiNum) {
				env.profit+=testAmount;
				/*if(env.betOutcomes[env.betOutcomes.length-1]==="W" && winRoll<5){
				testAmount=parseFloat(((testAmount*200)/100).toFixed(2));
				}
				else{
					testAmount=2;
				}*/
				env.addBet("HB", "Win");
				outcome = "W";
				winRoll++;
				looseRoll=0;
				testAmount=2;
			} else if (action === 1 && roll<env.hiNum) {
				env.addBet("HB", "Loose");
				outcome = "L";
				winRoll=0;
				looseRoll++;
				env.profit-=testAmount;
				testAmount*=2;			
			}

			if(looseRoll>env.looseStreak){
				env.looseStreak=looseRoll;
			}
			if(winRoll>env.winStreak){
				env.winStreak=winRoll;
			}
            env.nonce+=1;
			env.calculateProbabilities();
			if(env.betOutcomes.length>=env.nextLog){
			console.log("Winrate: " + (env.winRate*100).toFixed(2)+" Bets: "+env.betOutcomes.length+" Loose Streak: "+env.looseStreak+" Win Streak: "+env.winStreak+" Profit: "+env.profit);
			env.nextLog+=env.showEvery;
			env.looseStreak=env.winStreak=0;
			env.totalBets=env.totalWins=0;
			}
		}
		var reward = env.getReward();
		if (reward == 0) {
			if (outcome === "L") {
				reward = -0.03;
			} else {
				reward = 0.01;
			}
		}
		agent.learn(reward);
		env.previousReward=reward;
	}
}, env.betSpeed);