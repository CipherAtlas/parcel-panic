(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $s="153",hc=0,fo=1,fc=2,nl=1,pc=2,cn=3,yn=0,Et=1,$t=2,Sn=0,li=1,po=2,mo=3,go=4,mc=5,si=100,gc=101,_c=102,_o=103,vo=104,vc=200,xc=201,Sc=202,Mc=203,il=204,rl=205,yc=206,bc=207,Ec=208,wc=209,Ac=210,Tc=0,Rc=1,Cc=2,Rs=3,Pc=4,Lc=5,Dc=6,Uc=7,Ys=0,Ic=1,Fc=2,dn=0,Nc=1,Oc=2,Bc=3,Gc=4,zc=5,sl=300,di=301,hi=302,Cs=303,Ps=304,Er=306,Ls=1e3,Ht=1001,Ds=1002,bt=1003,xo=1004,Nr=1005,Dt=1006,kc=1007,Pi=1008,Mn=1009,Hc=1010,Vc=1011,js=1012,ol=1013,vn=1014,xn=1015,Li=1016,al=1017,ll=1018,Un=1020,Wc=1021,Vt=1023,Xc=1024,qc=1025,In=1026,fi=1027,$c=1028,cl=1029,Yc=1030,ul=1031,dl=1033,Or=33776,Br=33777,Gr=33778,zr=33779,So=35840,Mo=35841,yo=35842,bo=35843,jc=36196,Eo=37492,wo=37496,Ao=37808,To=37809,Ro=37810,Co=37811,Po=37812,Lo=37813,Do=37814,Uo=37815,Io=37816,Fo=37817,No=37818,Oo=37819,Bo=37820,Go=37821,kr=36492,Kc=36283,zo=36284,ko=36285,Ho=36286,hl=3e3,Fn=3001,Jc=3200,Zc=3201,Ks=0,Qc=1,Nn="",Ce="srgb",Zt="srgb-linear",fl="display-p3",Hr=7680,eu=519,tu=512,nu=513,iu=514,ru=515,su=516,ou=517,au=518,lu=519,Vo=35044,Wo="300 es",Us=1035,un=2e3,xr=2001;class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vr=Math.PI/180,Is=180/Math.PI;function Ii(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function cu(i,e){return(i%e+e)%e}function Wr(i,e,t){return(1-t)*i+t*e}function Xo(i){return(i&i-1)===0&&i!==0}function Fs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,r,s,a,l,h,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,h,u)}set(e,t,n,r,s,a,l,h,u){const p=this.elements;return p[0]=e,p[1]=r,p[2]=l,p[3]=t,p[4]=s,p[5]=h,p[6]=n,p[7]=a,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[3],h=n[6],u=n[1],p=n[4],o=n[7],c=n[2],d=n[5],g=n[8],_=r[0],m=r[3],f=r[6],x=r[1],v=r[4],y=r[7],w=r[2],T=r[5],P=r[8];return s[0]=a*_+l*x+h*w,s[3]=a*m+l*v+h*T,s[6]=a*f+l*y+h*P,s[1]=u*_+p*x+o*w,s[4]=u*m+p*v+o*T,s[7]=u*f+p*y+o*P,s[2]=c*_+d*x+g*w,s[5]=c*m+d*v+g*T,s[8]=c*f+d*y+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],h=e[6],u=e[7],p=e[8];return t*a*p-t*l*u-n*s*p+n*l*h+r*s*u-r*a*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],h=e[6],u=e[7],p=e[8],o=p*a-l*u,c=l*h-p*s,d=u*s-a*h,g=t*o+n*c+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=o*_,e[1]=(r*u-p*n)*_,e[2]=(l*n-r*a)*_,e[3]=c*_,e[4]=(p*t-r*h)*_,e[5]=(r*s-l*t)*_,e[6]=d*_,e[7]=(n*h-u*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,l){const h=Math.cos(s),u=Math.sin(s);return this.set(n*h,n*u,-n*(h*a+u*l)+a+e,-r*u,r*h,-r*(-u*a+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Xr.makeScale(e,t)),this}rotate(e){return this.premultiply(Xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new Ue;function pl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const qo={};function Ri(i){i in qo||(qo[i]=!0,console.warn(i))}function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const uu=new Ue().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),du=new Ue().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function hu(i){return i.convertSRGBToLinear().applyMatrix3(du)}function fu(i){return i.applyMatrix3(uu).convertLinearToSRGB()}const pu={[Zt]:i=>i,[Ce]:i=>i.convertSRGBToLinear(),[fl]:hu},mu={[Zt]:i=>i,[Ce]:i=>i.convertLinearToSRGB(),[fl]:fu},Ft={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Zt},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=pu[e],r=mu[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Vn;class ml{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vn===void 0&&(Vn=Sr("canvas")),Vn.width=e.width,Vn.height=e.height;const n=Vn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ci(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gu=0;class gl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Ii(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push($r(r[a].image)):s.push($r(r[a]))}else s=$r(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function $r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _u=0;class Ct extends vi{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Ht,r=Ht,s=Dt,a=Pi,l=Vt,h=Mn,u=Ct.DEFAULT_ANISOTROPY,p=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Ii(),this.name="",this.source=new gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=h,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===Fn?Ce:Nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case Ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case Ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ce?Fn:hl}set encoding(e){Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fn?Ce:Nn}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=sl;Ct.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const h=e.elements,u=h[0],p=h[4],o=h[8],c=h[1],d=h[5],g=h[9],_=h[2],m=h[6],f=h[10];if(Math.abs(p-c)<.01&&Math.abs(o-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(p+c)<.1&&Math.abs(o+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(d+1)/2,w=(f+1)/2,T=(p+c)/4,P=(o+_)/4,U=(g+m)/4;return v>y&&v>w?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=T/n,s=P/n):y>w?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=T/r,s=U/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=P/s,r=U/s),this.set(n,r,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(o-_)*(o-_)+(c-p)*(c-p));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(o-_)/x,this.z=(c-p)/x,this.w=Math.acos((u+d+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zn extends vi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ri("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fn?Ce:Nn),this.texture=new Ct(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _l extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vu extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,l){let h=n[r+0],u=n[r+1],p=n[r+2],o=n[r+3];const c=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(l===0){e[t+0]=h,e[t+1]=u,e[t+2]=p,e[t+3]=o;return}if(l===1){e[t+0]=c,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(o!==_||h!==c||u!==d||p!==g){let m=1-l;const f=h*c+u*d+p*g+o*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const w=Math.sqrt(v),T=Math.atan2(w,f*x);m=Math.sin(m*T)/w,l=Math.sin(l*T)/w}const y=l*x;if(h=h*m+c*y,u=u*m+d*y,p=p*m+g*y,o=o*m+_*y,m===1-l){const w=1/Math.sqrt(h*h+u*u+p*p+o*o);h*=w,u*=w,p*=w,o*=w}}e[t]=h,e[t+1]=u,e[t+2]=p,e[t+3]=o}static multiplyQuaternionsFlat(e,t,n,r,s,a){const l=n[r],h=n[r+1],u=n[r+2],p=n[r+3],o=s[a],c=s[a+1],d=s[a+2],g=s[a+3];return e[t]=l*g+p*o+h*d-u*c,e[t+1]=h*g+p*c+u*o-l*d,e[t+2]=u*g+p*d+l*c-h*o,e[t+3]=p*g-l*o-h*c-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,h=Math.sin,u=l(n/2),p=l(r/2),o=l(s/2),c=h(n/2),d=h(r/2),g=h(s/2);switch(a){case"XYZ":this._x=c*p*o+u*d*g,this._y=u*d*o-c*p*g,this._z=u*p*g+c*d*o,this._w=u*p*o-c*d*g;break;case"YXZ":this._x=c*p*o+u*d*g,this._y=u*d*o-c*p*g,this._z=u*p*g-c*d*o,this._w=u*p*o+c*d*g;break;case"ZXY":this._x=c*p*o-u*d*g,this._y=u*d*o+c*p*g,this._z=u*p*g+c*d*o,this._w=u*p*o-c*d*g;break;case"ZYX":this._x=c*p*o-u*d*g,this._y=u*d*o+c*p*g,this._z=u*p*g-c*d*o,this._w=u*p*o+c*d*g;break;case"YZX":this._x=c*p*o+u*d*g,this._y=u*d*o+c*p*g,this._z=u*p*g-c*d*o,this._w=u*p*o-c*d*g;break;case"XZY":this._x=c*p*o-u*d*g,this._y=u*d*o-c*p*g,this._z=u*p*g+c*d*o,this._w=u*p*o+c*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],l=t[5],h=t[9],u=t[2],p=t[6],o=t[10],c=n+l+o;if(c>0){const d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(p-h)*d,this._y=(s-u)*d,this._z=(a-r)*d}else if(n>l&&n>o){const d=2*Math.sqrt(1+n-l-o);this._w=(p-h)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+u)/d}else if(l>o){const d=2*Math.sqrt(1+l-n-o);this._w=(s-u)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(h+p)/d}else{const d=2*Math.sqrt(1+o-n-l);this._w=(a-r)/d,this._x=(s+u)/d,this._y=(h+p)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,l=t._x,h=t._y,u=t._z,p=t._w;return this._x=n*p+a*l+r*u-s*h,this._y=r*p+a*h+s*l-n*u,this._z=s*p+a*u+n*h-r*l,this._w=a*p-n*l-r*h-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let l=a*e._w+n*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const h=1-l*l;if(h<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(h),p=Math.atan2(u,l),o=Math.sin((1-t)*p)/u,c=Math.sin(t*p)/u;return this._w=a*o+this._w*c,this._x=n*o+this._x*c,this._y=r*o+this._y*c,this._z=s*o+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($o.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($o.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,l=e.z,h=e.w,u=h*t+a*r-l*n,p=h*n+l*t-s*r,o=h*r+s*n-a*t,c=-s*t-a*n-l*r;return this.x=u*h+c*-s+p*-l-o*-a,this.y=p*h+c*-a+o*-s-u*-l,this.z=o*h+c*-l+u*-a-p*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,l=t.y,h=t.z;return this.x=r*h-s*l,this.y=s*a-n*h,this.z=n*l-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yr.copy(this).projectOnVector(e),this.sub(Yr)}reflect(e){return this.sub(Yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new C,$o=new Fi;class Ni{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Wn.copy(e.boundingBox),Wn.applyMatrix4(e.matrixWorld),this.union(Wn);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,l=s.count;a<l;a++)nn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(nn)}else r.boundingBox===null&&r.computeBoundingBox(),Wn.copy(r.boundingBox),Wn.applyMatrix4(e.matrixWorld),this.union(Wn)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mi),Hi.subVectors(this.max,Mi),Xn.subVectors(e.a,Mi),qn.subVectors(e.b,Mi),$n.subVectors(e.c,Mi),hn.subVectors(qn,Xn),fn.subVectors($n,qn),Tn.subVectors(Xn,$n);let t=[0,-hn.z,hn.y,0,-fn.z,fn.y,0,-Tn.z,Tn.y,hn.z,0,-hn.x,fn.z,0,-fn.x,Tn.z,0,-Tn.x,-hn.y,hn.x,0,-fn.y,fn.x,0,-Tn.y,Tn.x,0];return!jr(t,Xn,qn,$n,Hi)||(t=[1,0,0,0,1,0,0,0,1],!jr(t,Xn,qn,$n,Hi))?!1:(Vi.crossVectors(hn,fn),t=[Vi.x,Vi.y,Vi.z],jr(t,Xn,qn,$n,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new C,new C,new C,new C,new C,new C,new C,new C],nn=new C,Wn=new Ni,Xn=new C,qn=new C,$n=new C,hn=new C,fn=new C,Tn=new C,Mi=new C,Hi=new C,Vi=new C,Rn=new C;function jr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Rn.fromArray(i,s);const l=r.x*Math.abs(Rn.x)+r.y*Math.abs(Rn.y)+r.z*Math.abs(Rn.z),h=e.dot(Rn),u=t.dot(Rn),p=n.dot(Rn);if(Math.max(-Math.max(h,u,p),Math.min(h,u,p))>l)return!1}return!0}const xu=new Ni,yi=new C,Kr=new C;class Oi{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yi.subVectors(e,this.center);const t=yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(yi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yi.copy(e.center).add(Kr)),this.expandByPoint(yi.copy(e.center).sub(Kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new C,Jr=new C,Wi=new C,pn=new C,Zr=new C,Xi=new C,Qr=new C;class wr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Jr.copy(e).add(t).multiplyScalar(.5),Wi.copy(t).sub(e).normalize(),pn.copy(this.origin).sub(Jr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Wi),l=pn.dot(this.direction),h=-pn.dot(Wi),u=pn.lengthSq(),p=Math.abs(1-a*a);let o,c,d,g;if(p>0)if(o=a*h-l,c=a*l-h,g=s*p,o>=0)if(c>=-g)if(c<=g){const _=1/p;o*=_,c*=_,d=o*(o+a*c+2*l)+c*(a*o+c+2*h)+u}else c=s,o=Math.max(0,-(a*c+l)),d=-o*o+c*(c+2*h)+u;else c=-s,o=Math.max(0,-(a*c+l)),d=-o*o+c*(c+2*h)+u;else c<=-g?(o=Math.max(0,-(-a*s+l)),c=o>0?-s:Math.min(Math.max(-s,-h),s),d=-o*o+c*(c+2*h)+u):c<=g?(o=0,c=Math.min(Math.max(-s,-h),s),d=c*(c+2*h)+u):(o=Math.max(0,-(a*s+l)),c=o>0?s:Math.min(Math.max(-s,-h),s),d=-o*o+c*(c+2*h)+u);else c=a>0?-s:s,o=Math.max(0,-(a*c+l)),d=-o*o+c*(c+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,o),r&&r.copy(Jr).addScaledVector(Wi,c),d}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const n=rn.dot(this.direction),r=rn.dot(rn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=n-a,h=n+a;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,l,h;const u=1/this.direction.x,p=1/this.direction.y,o=1/this.direction.z,c=this.origin;return u>=0?(n=(e.min.x-c.x)*u,r=(e.max.x-c.x)*u):(n=(e.max.x-c.x)*u,r=(e.min.x-c.x)*u),p>=0?(s=(e.min.y-c.y)*p,a=(e.max.y-c.y)*p):(s=(e.max.y-c.y)*p,a=(e.min.y-c.y)*p),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),o>=0?(l=(e.min.z-c.z)*o,h=(e.max.z-c.z)*o):(l=(e.max.z-c.z)*o,h=(e.min.z-c.z)*o),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,r,s){Zr.subVectors(t,e),Xi.subVectors(n,e),Qr.crossVectors(Zr,Xi);let a=this.direction.dot(Qr),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;pn.subVectors(this.origin,e);const h=l*this.direction.dot(Xi.crossVectors(pn,Xi));if(h<0)return null;const u=l*this.direction.dot(Zr.cross(pn));if(u<0||h+u>a)return null;const p=-l*pn.dot(Qr);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,r,s,a,l,h,u,p,o,c,d,g,_,m){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,h,u,p,o,c,d,g,_,m)}set(e,t,n,r,s,a,l,h,u,p,o,c,d,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=l,f[13]=h,f[2]=u,f[6]=p,f[10]=o,f[14]=c,f[3]=d,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Yn.setFromMatrixColumn(e,0).length(),s=1/Yn.setFromMatrixColumn(e,1).length(),a=1/Yn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),h=Math.cos(r),u=Math.sin(r),p=Math.cos(s),o=Math.sin(s);if(e.order==="XYZ"){const c=a*p,d=a*o,g=l*p,_=l*o;t[0]=h*p,t[4]=-h*o,t[8]=u,t[1]=d+g*u,t[5]=c-_*u,t[9]=-l*h,t[2]=_-c*u,t[6]=g+d*u,t[10]=a*h}else if(e.order==="YXZ"){const c=h*p,d=h*o,g=u*p,_=u*o;t[0]=c+_*l,t[4]=g*l-d,t[8]=a*u,t[1]=a*o,t[5]=a*p,t[9]=-l,t[2]=d*l-g,t[6]=_+c*l,t[10]=a*h}else if(e.order==="ZXY"){const c=h*p,d=h*o,g=u*p,_=u*o;t[0]=c-_*l,t[4]=-a*o,t[8]=g+d*l,t[1]=d+g*l,t[5]=a*p,t[9]=_-c*l,t[2]=-a*u,t[6]=l,t[10]=a*h}else if(e.order==="ZYX"){const c=a*p,d=a*o,g=l*p,_=l*o;t[0]=h*p,t[4]=g*u-d,t[8]=c*u+_,t[1]=h*o,t[5]=_*u+c,t[9]=d*u-g,t[2]=-u,t[6]=l*h,t[10]=a*h}else if(e.order==="YZX"){const c=a*h,d=a*u,g=l*h,_=l*u;t[0]=h*p,t[4]=_-c*o,t[8]=g*o+d,t[1]=o,t[5]=a*p,t[9]=-l*p,t[2]=-u*p,t[6]=d*o+g,t[10]=c-_*o}else if(e.order==="XZY"){const c=a*h,d=a*u,g=l*h,_=l*u;t[0]=h*p,t[4]=-o,t[8]=u*p,t[1]=c*o+_,t[5]=a*p,t[9]=d*o-g,t[2]=g*o-d,t[6]=l*p,t[10]=_*o+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Su,e,Mu)}lookAt(e,t,n){const r=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),mn.crossVectors(n,Tt),mn.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),mn.crossVectors(n,Tt)),mn.normalize(),qi.crossVectors(Tt,mn),r[0]=mn.x,r[4]=qi.x,r[8]=Tt.x,r[1]=mn.y,r[5]=qi.y,r[9]=Tt.y,r[2]=mn.z,r[6]=qi.z,r[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[4],h=n[8],u=n[12],p=n[1],o=n[5],c=n[9],d=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],v=n[7],y=n[11],w=n[15],T=r[0],P=r[4],U=r[8],S=r[12],A=r[1],q=r[5],Y=r[9],N=r[13],B=r[2],z=r[6],J=r[10],X=r[14],j=r[3],ee=r[7],K=r[11],me=r[15];return s[0]=a*T+l*A+h*B+u*j,s[4]=a*P+l*q+h*z+u*ee,s[8]=a*U+l*Y+h*J+u*K,s[12]=a*S+l*N+h*X+u*me,s[1]=p*T+o*A+c*B+d*j,s[5]=p*P+o*q+c*z+d*ee,s[9]=p*U+o*Y+c*J+d*K,s[13]=p*S+o*N+c*X+d*me,s[2]=g*T+_*A+m*B+f*j,s[6]=g*P+_*q+m*z+f*ee,s[10]=g*U+_*Y+m*J+f*K,s[14]=g*S+_*N+m*X+f*me,s[3]=x*T+v*A+y*B+w*j,s[7]=x*P+v*q+y*z+w*ee,s[11]=x*U+v*Y+y*J+w*K,s[15]=x*S+v*N+y*X+w*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],l=e[5],h=e[9],u=e[13],p=e[2],o=e[6],c=e[10],d=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*h*o-r*u*o-s*l*c+n*u*c+r*l*d-n*h*d)+_*(+t*h*d-t*u*c+s*a*c-r*a*d+r*u*p-s*h*p)+m*(+t*u*o-t*l*d-s*a*o+n*a*d+s*l*p-n*u*p)+f*(-r*l*p-t*h*o+t*l*c+r*a*o-n*a*c+n*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],h=e[6],u=e[7],p=e[8],o=e[9],c=e[10],d=e[11],g=e[12],_=e[13],m=e[14],f=e[15],x=o*m*u-_*c*u+_*h*d-l*m*d-o*h*f+l*c*f,v=g*c*u-p*m*u-g*h*d+a*m*d+p*h*f-a*c*f,y=p*_*u-g*o*u+g*l*d-a*_*d-p*l*f+a*o*f,w=g*o*h-p*_*h-g*l*c+a*_*c+p*l*m-a*o*m,T=t*x+n*v+r*y+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=x*P,e[1]=(_*c*s-o*m*s-_*r*d+n*m*d+o*r*f-n*c*f)*P,e[2]=(l*m*s-_*h*s+_*r*u-n*m*u-l*r*f+n*h*f)*P,e[3]=(o*h*s-l*c*s-o*r*u+n*c*u+l*r*d-n*h*d)*P,e[4]=v*P,e[5]=(p*m*s-g*c*s+g*r*d-t*m*d-p*r*f+t*c*f)*P,e[6]=(g*h*s-a*m*s-g*r*u+t*m*u+a*r*f-t*h*f)*P,e[7]=(a*c*s-p*h*s+p*r*u-t*c*u-a*r*d+t*h*d)*P,e[8]=y*P,e[9]=(g*o*s-p*_*s-g*n*d+t*_*d+p*n*f-t*o*f)*P,e[10]=(a*_*s-g*l*s+g*n*u-t*_*u-a*n*f+t*l*f)*P,e[11]=(p*l*s-a*o*s-p*n*u+t*o*u+a*n*d-t*l*d)*P,e[12]=w*P,e[13]=(p*_*r-g*o*r+g*n*c-t*_*c-p*n*m+t*o*m)*P,e[14]=(g*l*r-a*_*r-g*n*h+t*_*h+a*n*m-t*l*m)*P,e[15]=(a*o*r-p*l*r+p*n*h-t*o*h-a*n*c+t*l*c)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,l=e.y,h=e.z,u=s*a,p=s*l;return this.set(u*a+n,u*l-r*h,u*h+r*l,0,u*l+r*h,p*l+n,p*h-r*a,0,u*h-r*l,p*h+r*a,s*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,l=t._z,h=t._w,u=s+s,p=a+a,o=l+l,c=s*u,d=s*p,g=s*o,_=a*p,m=a*o,f=l*o,x=h*u,v=h*p,y=h*o,w=n.x,T=n.y,P=n.z;return r[0]=(1-(_+f))*w,r[1]=(d+y)*w,r[2]=(g-v)*w,r[3]=0,r[4]=(d-y)*T,r[5]=(1-(c+f))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(g+v)*P,r[9]=(m-x)*P,r[10]=(1-(c+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Yn.set(r[0],r[1],r[2]).length();const a=Yn.set(r[4],r[5],r[6]).length(),l=Yn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nt.copy(this);const u=1/s,p=1/a,o=1/l;return Nt.elements[0]*=u,Nt.elements[1]*=u,Nt.elements[2]*=u,Nt.elements[4]*=p,Nt.elements[5]*=p,Nt.elements[6]*=p,Nt.elements[8]*=o,Nt.elements[9]*=o,Nt.elements[10]*=o,t.setFromRotationMatrix(Nt),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,a,l=un){const h=this.elements,u=2*s/(t-e),p=2*s/(n-r),o=(t+e)/(t-e),c=(n+r)/(n-r);let d,g;if(l===un)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(l===xr)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=o,h[12]=0,h[1]=0,h[5]=p,h[9]=c,h[13]=0,h[2]=0,h[6]=0,h[10]=d,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,s,a,l=un){const h=this.elements,u=1/(t-e),p=1/(n-r),o=1/(a-s),c=(t+e)*u,d=(n+r)*p;let g,_;if(l===un)g=(a+s)*o,_=-2*o;else if(l===xr)g=s*o,_=-1*o;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*u,h[4]=0,h[8]=0,h[12]=-c,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-d,h[2]=0,h[6]=0,h[10]=_,h[14]=-g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yn=new C,Nt=new Je,Su=new C(0,0,0),Mu=new C(1,1,1),mn=new C,qi=new C,Tt=new C,Yo=new Je,jo=new Fi;class Ar{constructor(e=0,t=0,n=0,r=Ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],h=r[1],u=r[5],p=r[9],o=r[2],c=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-o,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-o,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-o,s)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-p,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jo.setFromEuler(this),this.setFromQuaternion(jo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ar.DEFAULT_ORDER="XYZ";class Js{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yu=0;const Ko=new C,jn=new Fi,sn=new Je,$i=new C,bi=new C,bu=new C,Eu=new Fi,Jo=new C(1,0,0),Zo=new C(0,1,0),Qo=new C(0,0,1),wu={type:"added"},ea={type:"removed"};class ut extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new C,t=new Ar,n=new Fi,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ue}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(Jo,e)}rotateY(e){return this.rotateOnAxis(Zo,e)}rotateZ(e){return this.rotateOnAxis(Qo,e)}translateOnAxis(e,t){return Ko.copy(e).applyQuaternion(this.quaternion),this.position.add(Ko.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jo,e)}translateY(e){return this.translateOnAxis(Zo,e)}translateZ(e){return this.translateOnAxis(Qo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$i.copy(e):$i.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(bi,$i,this.up):sn.lookAt($i,bi,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),jn.setFromRotationMatrix(sn),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ea)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ea)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Eu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const l=r[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let u=0,p=h.length;u<p;u++){const o=h[u];s(e.shapes,o)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,u=this.material.length;h<u;h++)l.push(s(e.materials,this.material[h]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(s(e.animations,h))}}if(t){const l=a(e.geometries),h=a(e.materials),u=a(e.textures),p=a(e.images),o=a(e.shapes),c=a(e.skeletons),d=a(e.animations),g=a(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),p.length>0&&(n.images=p),o.length>0&&(n.shapes=o),c.length>0&&(n.skeletons=c),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(l){const h=[];for(const u in l){const p=l[u];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ut.DEFAULT_UP=new C(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new C,on=new C,es=new C,an=new C,Kn=new C,Jn=new C,ta=new C,ts=new C,ns=new C,is=new C;let Yi=!1;class zt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ot.subVectors(e,t),r.cross(Ot);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ot.subVectors(r,t),on.subVectors(n,t),es.subVectors(e,t);const a=Ot.dot(Ot),l=Ot.dot(on),h=Ot.dot(es),u=on.dot(on),p=on.dot(es),o=a*u-l*l;if(o===0)return s.set(-2,-1,-1);const c=1/o,d=(u*h-l*p)*c,g=(a*p-l*h)*c;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,n,r,s,a,l,h){return Yi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yi=!0),this.getInterpolation(e,t,n,r,s,a,l,h)}static getInterpolation(e,t,n,r,s,a,l,h){return this.getBarycoord(e,t,n,r,an),h.setScalar(0),h.addScaledVector(s,an.x),h.addScaledVector(a,an.y),h.addScaledVector(l,an.z),h}static isFrontFacing(e,t,n,r){return Ot.subVectors(n,t),on.subVectors(e,t),Ot.cross(on).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Ot.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Yi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yi=!0),zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,l;Kn.subVectors(r,n),Jn.subVectors(s,n),ts.subVectors(e,n);const h=Kn.dot(ts),u=Jn.dot(ts);if(h<=0&&u<=0)return t.copy(n);ns.subVectors(e,r);const p=Kn.dot(ns),o=Jn.dot(ns);if(p>=0&&o<=p)return t.copy(r);const c=h*o-p*u;if(c<=0&&h>=0&&p<=0)return a=h/(h-p),t.copy(n).addScaledVector(Kn,a);is.subVectors(e,s);const d=Kn.dot(is),g=Jn.dot(is);if(g>=0&&d<=g)return t.copy(s);const _=d*u-h*g;if(_<=0&&u>=0&&g<=0)return l=u/(u-g),t.copy(n).addScaledVector(Jn,l);const m=p*g-d*o;if(m<=0&&o-p>=0&&d-g>=0)return ta.subVectors(s,r),l=(o-p)/(o-p+(d-g)),t.copy(r).addScaledVector(ta,l);const f=1/(m+_+c);return a=_*f,l=c*f,t.copy(n).addScaledVector(Kn,a).addScaledVector(Jn,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Au=0;class Qt extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=li,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=il,this.blendDst=rl,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const l in s){const h=s[l];delete h.metadata,a.push(h)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bt={h:0,s:0,l:0},ji={h:0,s:0,l:0};function rs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ce){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ft.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ft.workingColorSpace){if(e=cu(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=rs(a,s,e+1/3),this.g=rs(a,s,e),this.b=rs(a,s,e-1/3)}return Ft.toWorkingColorSpace(this,r),this}setStyle(e,t=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ce){const n=vl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ce){return Ft.fromWorkingColorSpace(gt.copy(this),e),Math.round(ft(gt.r*255,0,255))*65536+Math.round(ft(gt.g*255,0,255))*256+Math.round(ft(gt.b*255,0,255))}getHexString(e=Ce){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.fromWorkingColorSpace(gt.copy(this),t);const n=gt.r,r=gt.g,s=gt.b,a=Math.max(n,r,s),l=Math.min(n,r,s);let h,u;const p=(l+a)/2;if(l===a)h=0,u=0;else{const o=a-l;switch(u=p<=.5?o/(a+l):o/(2-a-l),a){case n:h=(r-s)/o+(r<s?6:0);break;case r:h=(s-n)/o+2;break;case s:h=(n-r)/o+4;break}h/=6}return e.h=h,e.s=u,e.l=p,e}getRGB(e,t=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Ce){Ft.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,n=gt.g,r=gt.b;return e!==Ce?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Bt),Bt.h+=e,Bt.s+=t,Bt.l+=n,this.setHSL(Bt.h,Bt.s,Bt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bt),e.getHSL(ji);const n=Wr(Bt.h,ji.h,t),r=Wr(Bt.s,ji.s,t),s=Wr(Bt.l,ji.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new Te;Te.NAMES=vl;class Zs extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ys,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new C,Ki=new ke;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vo,this.updateRange={offset:0,count:-1},this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ki.fromBufferAttribute(this,t),Ki.applyMatrix3(e),this.setXY(t,Ki.x,Ki.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class xl extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sl extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tu=0;const Pt=new Je,ss=new ut,Zn=new C,Rt=new Ni,Ei=new Ni,at=new C;class xt extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pl(e)?Sl:xl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return ss.lookAt(e),ss.updateMatrix(),this.applyMatrix4(ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Ei.setFromBufferAttribute(l),this.morphTargetsRelative?(at.addVectors(Rt.min,Ei.min),Rt.expandByPoint(at),at.addVectors(Rt.max,Ei.max),Rt.expandByPoint(at)):(Rt.expandByPoint(Ei.min),Rt.expandByPoint(Ei.max))}Rt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)at.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(at));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],h=this.morphTargetsRelative;for(let u=0,p=l.count;u<p;u++)at.fromBufferAttribute(l,u),h&&(Zn.fromBufferAttribute(e,u),at.add(Zn)),r=Math.max(r,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*l),4));const h=this.getAttribute("tangent").array,u=[],p=[];for(let A=0;A<l;A++)u[A]=new C,p[A]=new C;const o=new C,c=new C,d=new C,g=new ke,_=new ke,m=new ke,f=new C,x=new C;function v(A,q,Y){o.fromArray(r,A*3),c.fromArray(r,q*3),d.fromArray(r,Y*3),g.fromArray(a,A*2),_.fromArray(a,q*2),m.fromArray(a,Y*2),c.sub(o),d.sub(o),_.sub(g),m.sub(g);const N=1/(_.x*m.y-m.x*_.y);isFinite(N)&&(f.copy(c).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(N),x.copy(d).multiplyScalar(_.x).addScaledVector(c,-m.x).multiplyScalar(N),u[A].add(f),u[q].add(f),u[Y].add(f),p[A].add(x),p[q].add(x),p[Y].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let A=0,q=y.length;A<q;++A){const Y=y[A],N=Y.start,B=Y.count;for(let z=N,J=N+B;z<J;z+=3)v(n[z+0],n[z+1],n[z+2])}const w=new C,T=new C,P=new C,U=new C;function S(A){P.fromArray(s,A*3),U.copy(P);const q=u[A];w.copy(q),w.sub(P.multiplyScalar(P.dot(q))).normalize(),T.crossVectors(U,q);const N=T.dot(p[A])<0?-1:1;h[A*4]=w.x,h[A*4+1]=w.y,h[A*4+2]=w.z,h[A*4+3]=N}for(let A=0,q=y.length;A<q;++A){const Y=y[A],N=Y.start,B=Y.count;for(let z=N,J=N+B;z<J;z+=3)S(n[z+0]),S(n[z+1]),S(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,d=n.count;c<d;c++)n.setXYZ(c,0,0,0);const r=new C,s=new C,a=new C,l=new C,h=new C,u=new C,p=new C,o=new C;if(e)for(let c=0,d=e.count;c<d;c+=3){const g=e.getX(c+0),_=e.getX(c+1),m=e.getX(c+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),p.subVectors(a,s),o.subVectors(r,s),p.cross(o),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,m),l.add(p),h.add(p),u.add(p),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let c=0,d=t.count;c<d;c+=3)r.fromBufferAttribute(t,c+0),s.fromBufferAttribute(t,c+1),a.fromBufferAttribute(t,c+2),p.subVectors(a,s),o.subVectors(r,s),p.cross(o),n.setXYZ(c+0,p.x,p.y,p.z),n.setXYZ(c+1,p.x,p.y,p.z),n.setXYZ(c+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(l,h){const u=l.array,p=l.itemSize,o=l.normalized,c=new u.constructor(h.length*p);let d=0,g=0;for(let _=0,m=h.length;_<m;_++){l.isInterleavedBufferAttribute?d=h[_]*l.data.stride+l.offset:d=h[_]*p;for(let f=0;f<p;f++)c[g++]=u[d++]}return new Kt(c,p,o)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],u=e(h,n);t.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const h=[],u=s[l];for(let p=0,o=u.length;p<o;p++){const c=u[p],d=e(c,n);h.push(d)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const u in h)h[u]!==void 0&&(e[u]=h[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const u=n[h];e.data.attributes[h]=u.toJSON(e.data)}const r={};let s=!1;for(const h in this.morphAttributes){const u=this.morphAttributes[h],p=[];for(let o=0,c=u.length;o<c;o++){const d=u[o];p.push(d.toJSON(e.data))}p.length>0&&(r[h]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const p=r[u];this.setAttribute(u,p.clone(t))}const s=e.morphAttributes;for(const u in s){const p=[],o=s[u];for(let c=0,d=o.length;c<d;c++)p.push(o[c].clone(t));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,p=a.length;u<p;u++){const o=a[u];this.addGroup(o.start,o.count,o.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const na=new Je,Cn=new wr,Ji=new Oi,ia=new C,Qn=new C,ei=new C,ti=new C,os=new C,Zi=new C,Qi=new ke,er=new ke,tr=new ke,ra=new C,sa=new C,oa=new C,nr=new C,ir=new C;class vt extends ut{constructor(e=new xt,t=new Zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Zi.set(0,0,0);for(let h=0,u=s.length;h<u;h++){const p=l[h],o=s[h];p!==0&&(os.fromBufferAttribute(o,e),a?Zi.addScaledVector(os,p):Zi.addScaledVector(os.sub(t),p))}t.add(Zi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(s),Cn.copy(e.ray).recast(e.near),!(Ji.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(Ji,ia)===null||Cn.origin.distanceToSquared(ia)>(e.far-e.near)**2))&&(na.copy(s).invert(),Cn.copy(e.ray).applyMatrix4(na),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,l=s.index,h=s.attributes.position,u=s.attributes.uv,p=s.attributes.uv1,o=s.attributes.normal,c=s.groups,d=s.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,_=c.length;g<_;g++){const m=c[g],f=a[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,w=v;y<w;y+=3){const T=l.getX(y),P=l.getX(y+1),U=l.getX(y+2);r=rr(this,f,e,n,u,p,o,T,P,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const x=l.getX(m),v=l.getX(m+1),y=l.getX(m+2);r=rr(this,a,e,n,u,p,o,x,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(a))for(let g=0,_=c.length;g<_;g++){const m=c[g],f=a[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(h.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,w=v;y<w;y+=3){const T=y,P=y+1,U=y+2;r=rr(this,f,e,n,u,p,o,T,P,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(h.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,y=m+2;r=rr(this,a,e,n,u,p,o,x,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ru(i,e,t,n,r,s,a,l){let h;if(e.side===Et?h=n.intersectTriangle(a,s,r,!0,l):h=n.intersectTriangle(r,s,a,e.side===yn,l),h===null)return null;ir.copy(l),ir.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(ir);return u<t.near||u>t.far?null:{distance:u,point:ir.clone(),object:i}}function rr(i,e,t,n,r,s,a,l,h,u){i.getVertexPosition(l,Qn),i.getVertexPosition(h,ei),i.getVertexPosition(u,ti);const p=Ru(i,e,t,n,Qn,ei,ti,nr);if(p){r&&(Qi.fromBufferAttribute(r,l),er.fromBufferAttribute(r,h),tr.fromBufferAttribute(r,u),p.uv=zt.getInterpolation(nr,Qn,ei,ti,Qi,er,tr,new ke)),s&&(Qi.fromBufferAttribute(s,l),er.fromBufferAttribute(s,h),tr.fromBufferAttribute(s,u),p.uv1=zt.getInterpolation(nr,Qn,ei,ti,Qi,er,tr,new ke),p.uv2=p.uv1),a&&(ra.fromBufferAttribute(a,l),sa.fromBufferAttribute(a,h),oa.fromBufferAttribute(a,u),p.normal=zt.getInterpolation(nr,Qn,ei,ti,ra,sa,oa,new C),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const o={a:l,b:h,c:u,normal:new C,materialIndex:0};zt.getNormal(Qn,ei,ti,o.normal),p.face=o}return p}class kn extends xt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const h=[],u=[],p=[],o=[];let c=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(o,2));function g(_,m,f,x,v,y,w,T,P,U,S){const A=y/P,q=w/U,Y=y/2,N=w/2,B=T/2,z=P+1,J=U+1;let X=0,j=0;const ee=new C;for(let K=0;K<J;K++){const me=K*q-N;for(let O=0;O<z;O++){const Z=O*A-Y;ee[_]=Z*x,ee[m]=me*v,ee[f]=B,u.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[f]=T>0?1:-1,p.push(ee.x,ee.y,ee.z),o.push(O/P),o.push(1-K/U),X+=1}}for(let K=0;K<U;K++)for(let me=0;me<P;me++){const O=c+me+z*K,Z=c+me+z*(K+1),Q=c+(me+1)+z*(K+1),ue=c+(me+1)+z*K;h.push(O,Z,ue),h.push(Z,Q,ue),j+=6}l.addGroup(d,j,S),d+=j,c+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function yt(i){const e={};for(let t=0;t<i.length;t++){const n=pi(i[t]);for(const r in n)e[r]=n[r]}return e}function Cu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ml(i){return i.getRenderTarget()===null?i.outputColorSpace:Zt}const Pu={clone:pi,merge:yt};var Lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lu,this.fragmentShader=Du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=Cu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yl extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ut extends yl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/h,t-=a.offsetY*n/u,r*=a.width/h,n*=a.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class Uu extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Ut(ni,ii,e,t);r.layers=this.layers,this.add(r);const s=new Ut(ni,ii,e,t);s.layers=this.layers,this.add(s);const a=new Ut(ni,ii,e,t);a.layers=this.layers,this.add(a);const l=new Ut(ni,ii,e,t);l.layers=this.layers,this.add(l);const h=new Ut(ni,ii,e,t);h.layers=this.layers,this.add(h);const u=new Ut(ni,ii,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,l,h]=t;for(const u of t)this.remove(u);if(e===un)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,l,h,u]=this.children,p=e.getRenderTarget(),o=e.toneMapping,c=e.xr.enabled;e.toneMapping=dn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,h),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(p),e.toneMapping=o,e.xr.enabled=c,n.texture.needsPMREMUpdate=!0}}class bl extends Ct{constructor(e,t,n,r,s,a,l,h,u,p){e=e!==void 0?e:[],t=t!==void 0?t:di,super(e,t,n,r,s,a,l,h,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Iu extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ri("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Fn?Ce:Nn),this.texture=new bl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new kn(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Et,blending:Sn});s.uniforms.tEquirect.value=t;const a=new vt(r,s),l=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Dt),new Uu(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const as=new C,Fu=new C,Nu=new Ue;class gn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=as.subVectors(n,t).cross(Fu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(as),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nu.getNormalMatrix(e),r=this.coplanarPoint(as).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Oi,sr=new C;class Qs{constructor(e=new gn,t=new gn,n=new gn,r=new gn,s=new gn,a=new gn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=un){const n=this.planes,r=e.elements,s=r[0],a=r[1],l=r[2],h=r[3],u=r[4],p=r[5],o=r[6],c=r[7],d=r[8],g=r[9],_=r[10],m=r[11],f=r[12],x=r[13],v=r[14],y=r[15];if(n[0].setComponents(h-s,c-u,m-d,y-f).normalize(),n[1].setComponents(h+s,c+u,m+d,y+f).normalize(),n[2].setComponents(h+a,c+p,m+g,y+x).normalize(),n[3].setComponents(h-a,c-p,m-g,y-x).normalize(),n[4].setComponents(h-l,c-o,m-_,y-v).normalize(),t===un)n[5].setComponents(h+l,c+o,m+_,y+v).normalize();else if(t===xr)n[5].setComponents(l,o,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(e){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(sr.x=r.normal.x>0?e.max.x:e.min.x,sr.y=r.normal.y>0?e.max.y:e.min.y,sr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function El(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ou(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,p){const o=u.array,c=u.usage,d=i.createBuffer();i.bindBuffer(p,d),i.bufferData(p,o,c),u.onUploadCallback();let g;if(o instanceof Float32Array)g=i.FLOAT;else if(o instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(o instanceof Int16Array)g=i.SHORT;else if(o instanceof Uint32Array)g=i.UNSIGNED_INT;else if(o instanceof Int32Array)g=i.INT;else if(o instanceof Int8Array)g=i.BYTE;else if(o instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:d,type:g,bytesPerElement:o.BYTES_PER_ELEMENT,version:u.version}}function s(u,p,o){const c=p.array,d=p.updateRange;i.bindBuffer(o,u),d.count===-1?i.bufferSubData(o,0,c):(t?i.bufferSubData(o,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count):i.bufferSubData(o,d.offset*c.BYTES_PER_ELEMENT,c.subarray(d.offset,d.offset+d.count)),d.count=-1),p.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const p=n.get(u);p&&(i.deleteBuffer(p.buffer),n.delete(u))}function h(u,p){if(u.isGLBufferAttribute){const c=n.get(u);(!c||c.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const o=n.get(u);o===void 0?n.set(u,r(u,p)):o.version<u.version&&(s(o.buffer,u,p),o.version=u.version)}return{get:a,remove:l,update:h}}class Tr extends xt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,l=Math.floor(n),h=Math.floor(r),u=l+1,p=h+1,o=e/l,c=t/h,d=[],g=[],_=[],m=[];for(let f=0;f<p;f++){const x=f*c-a;for(let v=0;v<u;v++){const y=v*o-s;g.push(y,-x,0),_.push(0,0,1),m.push(v/l),m.push(1-f/h)}}for(let f=0;f<h;f++)for(let x=0;x<l;x++){const v=x+u*f,y=x+u*(f+1),w=x+1+u*(f+1),T=x+1+u*f;d.push(v,y,T),d.push(y,w,T)}this.setIndex(d),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wu="vec3 transformed = vec3( position );",Xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$u=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,id=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",dd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Md=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ad=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Td=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Ud=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Id=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Od=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kd=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$d=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,th=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ih=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,rh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ah=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ch=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ph=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_h=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Mh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ah=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Th=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ch=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ph=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lh=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ih=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Oh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$h=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ef=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,af=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,hf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:Bu,alphamap_pars_fragment:Gu,alphatest_fragment:zu,alphatest_pars_fragment:ku,aomap_fragment:Hu,aomap_pars_fragment:Vu,begin_vertex:Wu,beginnormal_vertex:Xu,bsdfs:qu,iridescence_fragment:$u,bumpmap_pars_fragment:Yu,clipping_planes_fragment:ju,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:Ju,clipping_planes_vertex:Zu,color_fragment:Qu,color_pars_fragment:ed,color_pars_vertex:td,color_vertex:nd,common:id,cube_uv_reflection_fragment:rd,defaultnormal_vertex:sd,displacementmap_pars_vertex:od,displacementmap_vertex:ad,emissivemap_fragment:ld,emissivemap_pars_fragment:cd,encodings_fragment:ud,encodings_pars_fragment:dd,envmap_fragment:hd,envmap_common_pars_fragment:fd,envmap_pars_fragment:pd,envmap_pars_vertex:md,envmap_physical_pars_fragment:Td,envmap_vertex:gd,fog_vertex:_d,fog_pars_vertex:vd,fog_fragment:xd,fog_pars_fragment:Sd,gradientmap_pars_fragment:Md,lightmap_fragment:yd,lightmap_pars_fragment:bd,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:wd,lights_pars_begin:Ad,lights_toon_fragment:Rd,lights_toon_pars_fragment:Cd,lights_phong_fragment:Pd,lights_phong_pars_fragment:Ld,lights_physical_fragment:Dd,lights_physical_pars_fragment:Ud,lights_fragment_begin:Id,lights_fragment_maps:Fd,lights_fragment_end:Nd,logdepthbuf_fragment:Od,logdepthbuf_pars_fragment:Bd,logdepthbuf_pars_vertex:Gd,logdepthbuf_vertex:zd,map_fragment:kd,map_pars_fragment:Hd,map_particle_fragment:Vd,map_particle_pars_fragment:Wd,metalnessmap_fragment:Xd,metalnessmap_pars_fragment:qd,morphcolor_vertex:$d,morphnormal_vertex:Yd,morphtarget_pars_vertex:jd,morphtarget_vertex:Kd,normal_fragment_begin:Jd,normal_fragment_maps:Zd,normal_pars_fragment:Qd,normal_pars_vertex:eh,normal_vertex:th,normalmap_pars_fragment:nh,clearcoat_normal_fragment_begin:ih,clearcoat_normal_fragment_maps:rh,clearcoat_pars_fragment:sh,iridescence_pars_fragment:oh,output_fragment:ah,packing:lh,premultiplied_alpha_fragment:ch,project_vertex:uh,dithering_fragment:dh,dithering_pars_fragment:hh,roughnessmap_fragment:fh,roughnessmap_pars_fragment:ph,shadowmap_pars_fragment:mh,shadowmap_pars_vertex:gh,shadowmap_vertex:_h,shadowmask_pars_fragment:vh,skinbase_vertex:xh,skinning_pars_vertex:Sh,skinning_vertex:Mh,skinnormal_vertex:yh,specularmap_fragment:bh,specularmap_pars_fragment:Eh,tonemapping_fragment:wh,tonemapping_pars_fragment:Ah,transmission_fragment:Th,transmission_pars_fragment:Rh,uv_pars_fragment:Ch,uv_pars_vertex:Ph,uv_vertex:Lh,worldpos_vertex:Dh,background_vert:Uh,background_frag:Ih,backgroundCube_vert:Fh,backgroundCube_frag:Nh,cube_vert:Oh,cube_frag:Bh,depth_vert:Gh,depth_frag:zh,distanceRGBA_vert:kh,distanceRGBA_frag:Hh,equirect_vert:Vh,equirect_frag:Wh,linedashed_vert:Xh,linedashed_frag:qh,meshbasic_vert:$h,meshbasic_frag:Yh,meshlambert_vert:jh,meshlambert_frag:Kh,meshmatcap_vert:Jh,meshmatcap_frag:Zh,meshnormal_vert:Qh,meshnormal_frag:ef,meshphong_vert:tf,meshphong_frag:nf,meshphysical_vert:rf,meshphysical_frag:sf,meshtoon_vert:of,meshtoon_frag:af,points_vert:lf,points_frag:cf,shadow_vert:uf,shadow_frag:df,sprite_vert:hf,sprite_frag:ff},re={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},qt={basic:{uniforms:yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Te(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:yt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:yt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Te(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:yt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:yt([re.points,re.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:yt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:yt([re.common,re.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:yt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:yt([re.sprite,re.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:yt([re.common,re.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:yt([re.lights,re.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};qt.physical={uniforms:yt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const or={r:0,b:0,g:0};function pf(i,e,t,n,r,s,a){const l=new Te(0);let h=s===!0?0:1,u,p,o=null,c=0,d=null;function g(m,f){let x=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(l,h):v&&v.isColor&&(_(v,1),x=!0),i.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),x=!0;break}(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Er)?(p===void 0&&(p=new vt(new kn(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:pi(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(T,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=v,p.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,p.material.toneMapped=v.colorSpace!==Ce,(o!==v||c!==v.version||d!==i.toneMapping)&&(p.material.needsUpdate=!0,o=v,c=v.version,d=i.toneMapping),p.layers.enableAll(),m.unshift(p,p.geometry,p.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new vt(new Tr(2,2),new Hn({name:"BackgroundMaterial",uniforms:pi(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(o!==v||c!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,o=v,c=v.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,f){m.getRGB(or,Ml(i)),n.buffers.color.setClear(or.r,or.g,or.b,f,a)}return{getClearColor:function(){return l},setClearColor:function(m,f=1){l.set(m),h=f,_(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,_(l,h)},render:g}}function mf(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,l={},h=m(null);let u=h,p=!1;function o(B,z,J,X,j){let ee=!1;if(a){const K=_(X,J,z);u!==K&&(u=K,d(u.object)),ee=f(B,X,J,j),ee&&x(B,X,J,j)}else{const K=z.wireframe===!0;(u.geometry!==X.id||u.program!==J.id||u.wireframe!==K)&&(u.geometry=X.id,u.program=J.id,u.wireframe=K,ee=!0)}j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(ee||p)&&(p=!1,U(B,z,J,X),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function c(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(B){return n.isWebGL2?i.bindVertexArray(B):s.bindVertexArrayOES(B)}function g(B){return n.isWebGL2?i.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function _(B,z,J){const X=J.wireframe===!0;let j=l[B.id];j===void 0&&(j={},l[B.id]=j);let ee=j[z.id];ee===void 0&&(ee={},j[z.id]=ee);let K=ee[X];return K===void 0&&(K=m(c()),ee[X]=K),K}function m(B){const z=[],J=[],X=[];for(let j=0;j<r;j++)z[j]=0,J[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:X,object:B,attributes:{},index:null}}function f(B,z,J,X){const j=u.attributes,ee=z.attributes;let K=0;const me=J.getAttributes();for(const O in me)if(me[O].location>=0){const Q=j[O];let ue=ee[O];if(ue===void 0&&(O==="instanceMatrix"&&B.instanceMatrix&&(ue=B.instanceMatrix),O==="instanceColor"&&B.instanceColor&&(ue=B.instanceColor)),Q===void 0||Q.attribute!==ue||ue&&Q.data!==ue.data)return!0;K++}return u.attributesNum!==K||u.index!==X}function x(B,z,J,X){const j={},ee=z.attributes;let K=0;const me=J.getAttributes();for(const O in me)if(me[O].location>=0){let Q=ee[O];Q===void 0&&(O==="instanceMatrix"&&B.instanceMatrix&&(Q=B.instanceMatrix),O==="instanceColor"&&B.instanceColor&&(Q=B.instanceColor));const ue={};ue.attribute=Q,Q&&Q.data&&(ue.data=Q.data),j[O]=ue,K++}u.attributes=j,u.attributesNum=K,u.index=X}function v(){const B=u.newAttributes;for(let z=0,J=B.length;z<J;z++)B[z]=0}function y(B){w(B,0)}function w(B,z){const J=u.newAttributes,X=u.enabledAttributes,j=u.attributeDivisors;J[B]=1,X[B]===0&&(i.enableVertexAttribArray(B),X[B]=1),j[B]!==z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,z),j[B]=z)}function T(){const B=u.newAttributes,z=u.enabledAttributes;for(let J=0,X=z.length;J<X;J++)z[J]!==B[J]&&(i.disableVertexAttribArray(J),z[J]=0)}function P(B,z,J,X,j,ee,K){K===!0?i.vertexAttribIPointer(B,z,J,j,ee):i.vertexAttribPointer(B,z,J,X,j,ee)}function U(B,z,J,X){if(n.isWebGL2===!1&&(B.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=X.attributes,ee=J.getAttributes(),K=z.defaultAttributeValues;for(const me in ee){const O=ee[me];if(O.location>=0){let Z=j[me];if(Z===void 0&&(me==="instanceMatrix"&&B.instanceMatrix&&(Z=B.instanceMatrix),me==="instanceColor"&&B.instanceColor&&(Z=B.instanceColor)),Z!==void 0){const Q=Z.normalized,ue=Z.itemSize,he=t.get(Z);if(he===void 0)continue;const Se=he.buffer,Ie=he.type,Ee=he.bytesPerElement,st=n.isWebGL2===!0&&(Ie===i.INT||Ie===i.UNSIGNED_INT||Z.gpuType===ol);if(Z.isInterleavedBufferAttribute){const Ge=Z.data,I=Ge.stride,dt=Z.offset;if(Ge.isInstancedInterleavedBuffer){for(let ye=0;ye<O.locationSize;ye++)w(O.location+ye,Ge.meshPerAttribute);B.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let ye=0;ye<O.locationSize;ye++)y(O.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let ye=0;ye<O.locationSize;ye++)P(O.location+ye,ue/O.locationSize,Ie,Q,I*Ee,(dt+ue/O.locationSize*ye)*Ee,st)}else{if(Z.isInstancedBufferAttribute){for(let Ge=0;Ge<O.locationSize;Ge++)w(O.location+Ge,Z.meshPerAttribute);B.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ge=0;Ge<O.locationSize;Ge++)y(O.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Ge=0;Ge<O.locationSize;Ge++)P(O.location+Ge,ue/O.locationSize,Ie,Q,ue*Ee,ue/O.locationSize*Ge*Ee,st)}}else if(K!==void 0){const Q=K[me];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(O.location,Q);break;case 3:i.vertexAttrib3fv(O.location,Q);break;case 4:i.vertexAttrib4fv(O.location,Q);break;default:i.vertexAttrib1fv(O.location,Q)}}}}T()}function S(){Y();for(const B in l){const z=l[B];for(const J in z){const X=z[J];for(const j in X)g(X[j].object),delete X[j];delete z[J]}delete l[B]}}function A(B){if(l[B.id]===void 0)return;const z=l[B.id];for(const J in z){const X=z[J];for(const j in X)g(X[j].object),delete X[j];delete z[J]}delete l[B.id]}function q(B){for(const z in l){const J=l[z];if(J[B.id]===void 0)continue;const X=J[B.id];for(const j in X)g(X[j].object),delete X[j];delete J[B.id]}}function Y(){N(),p=!0,u!==h&&(u=h,d(u.object))}function N(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:o,reset:Y,resetDefaultState:N,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:q,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function gf(i,e,t,n){const r=n.isWebGL2;let s;function a(u){s=u}function l(u,p){i.drawArrays(s,u,p),t.update(p,s,1)}function h(u,p,o){if(o===0)return;let c,d;if(r)c=i,d="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[d](s,u,p,o),t.update(p,s,o)}this.setMode=a,this.render=l,this.renderInstances=h}function _f(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const h=s(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=a||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,o=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),c=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=c>0,y=a||e.has("OES_texture_float"),w=v&&y,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:p,maxTextures:o,maxVertexTextures:c,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:T}}function vf(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new gn,l=new Ue,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(o,c){const d=o.length!==0||c||n!==0||r;return r=c,n=o.length,d},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(o,c){t=p(o,c,0)},this.setState=function(o,c,d){const g=o.clippingPlanes,_=o.clipIntersection,m=o.clipShadows,f=i.get(o);if(!r||g===null||g.length===0||s&&!m)s?p(null):u();else{const x=s?0:n,v=x*4;let y=f.clippingState||null;h.value=y,y=p(g,c,v,d);for(let w=0;w!==v;++w)y[w]=t[w];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(o,c,d,g){const _=o!==null?o.length:0;let m=null;if(_!==0){if(m=h.value,g!==!0||m===null){const f=d+_*4,x=c.matrixWorldInverse;l.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=d;v!==_;++v,y+=4)a.copy(o[v]).applyMatrix4(x,l),a.normal.toArray(m,y),m[y+3]=a.constant}h.value=m,h.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function xf(i){let e=new WeakMap;function t(a,l){return l===Cs?a.mapping=di:l===Ps&&(a.mapping=hi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping;if(l===Cs||l===Ps)if(e.has(a)){const h=e.get(a).texture;return t(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const u=new Iu(h.height/2);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Rr extends yl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,l=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,l-=p*this.view.offsetY,h=l-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ai=4,aa=[.125,.215,.35,.446,.526,.582],Dn=20,ls=new Rr,la=new Te;let cs=null;const Ln=(1+Math.sqrt(5))/2,ri=1/Ln,ca=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Ln,ri),new C(0,Ln,-ri),new C(ri,0,Ln),new C(-ri,0,Ln),new C(Ln,ri,0),new C(-Ln,ri,0)];class ua{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){cs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ha(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cs),e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Li,format:Vt,colorSpace:Zt,depthBuffer:!1},r=da(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=da(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sf(s)),this._blurMaterial=Mf(s,e,t)}return r}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,ls)}_sceneToCubeUV(e,t,n,r){const l=new Ut(90,1,t,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,o=p.autoClear,c=p.toneMapping;p.getClearColor(la),p.toneMapping=dn,p.autoClear=!1;const d=new Zs({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),g=new vt(new kn,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(la),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(l.up.set(0,h[f],0),l.lookAt(u[f],0,0)):x===1?(l.up.set(0,0,h[f]),l.lookAt(0,u[f],0)):(l.up.set(0,h[f],0),l.lookAt(0,0,u[f]));const v=this._cubeSize;ar(r,x*v,f>2?v:0,v,v),p.setRenderTarget(r),_&&p.render(g,l),p.render(e,l)}g.geometry.dispose(),g.material.dispose(),p.toneMapping=c,p.autoClear=o,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===di||e.mapping===hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ha());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const h=this._cubeSize;ar(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(a,ls)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ca[(r-1)%ca.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,l){const h=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,o=new vt(this._lodPlanes[r],u),c=u.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Dn-1),_=s/g,m=isFinite(s)?1+Math.floor(p*_):Dn;m>Dn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Dn}`);const f=[];let x=0;for(let P=0;P<Dn;++P){const U=P/_,S=Math.exp(-U*U/2);f.push(S),P===0?x+=S:P<m&&(x+=2*S)}for(let P=0;P<f.length;P++)f[P]=f[P]/x;c.envMap.value=e.texture,c.samples.value=m,c.weights.value=f,c.latitudinal.value=a==="latitudinal",l&&(c.poleAxis.value=l);const{_lodMax:v}=this;c.dTheta.value=g,c.mipInt.value=v-n;const y=this._sizeLods[r],w=3*y*(r>v-ai?r-v+ai:0),T=4*(this._cubeSize-y);ar(t,w,T,3*y,2*y),h.setRenderTarget(t),h.render(o,ls)}}function Sf(i){const e=[],t=[],n=[];let r=i;const s=i-ai+1+aa.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);t.push(l);let h=1/l;a>i-ai?h=aa[a-i+ai-1]:a===0&&(h=0),n.push(h);const u=1/(l-2),p=-u,o=1+u,c=[p,p,o,p,o,o,p,p,o,o,p,o],d=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*d),v=new Float32Array(m*g*d),y=new Float32Array(f*g*d);for(let T=0;T<d;T++){const P=T%3*2/3-1,U=T>2?0:-1,S=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];x.set(S,_*g*T),v.set(c,m*g*T);const A=[T,T,T,T,T,T];y.set(A,f*g*T)}const w=new xt;w.setAttribute("position",new Kt(x,_)),w.setAttribute("uv",new Kt(v,m)),w.setAttribute("faceIndex",new Kt(y,f)),e.push(w),r>ai&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function da(i,e,t){const n=new zn(i,e,t);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Mf(i,e,t){const n=new Float32Array(Dn),r=new C(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function ha(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function fa(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function eo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yf(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,u=h===Cs||h===Ps,p=h===di||h===hi;if(u||p)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let o=e.get(l);return t===null&&(t=new ua(i)),o=u?t.fromEquirectangular(l,o):t.fromCubemap(l,o),e.set(l,o),o.texture}else{if(e.has(l))return e.get(l).texture;{const o=l.image;if(u&&o&&o.height>0||p&&o&&r(o)){t===null&&(t=new ua(i));const c=u?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,c),l.addEventListener("dispose",s),c.texture}else return null}}}return l}function r(l){let h=0;const u=6;for(let p=0;p<u;p++)l[p]!==void 0&&h++;return h===u}function s(l){const h=l.target;h.removeEventListener("dispose",s);const u=e.get(h);u!==void 0&&(e.delete(h),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function bf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ef(i,e,t,n){const r={},s=new WeakMap;function a(o){const c=o.target;c.index!==null&&e.remove(c.index);for(const g in c.attributes)e.remove(c.attributes[g]);for(const g in c.morphAttributes){const _=c.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}c.removeEventListener("dispose",a),delete r[c.id];const d=s.get(c);d&&(e.remove(d),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function l(o,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c}function h(o){const c=o.attributes;for(const g in c)e.update(c[g],i.ARRAY_BUFFER);const d=o.morphAttributes;for(const g in d){const _=d[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function u(o){const c=[],d=o.index,g=o.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,y=x.length;v<y;v+=3){const w=x[v+0],T=x[v+1],P=x[v+2];c.push(w,T,T,P,P,w)}}else{const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const w=v+0,T=v+1,P=v+2;c.push(w,T,T,P,P,w)}}const m=new(pl(c)?Sl:xl)(c,1);m.version=_;const f=s.get(o);f&&e.remove(f),s.set(o,m)}function p(o){const c=s.get(o);if(c){const d=o.index;d!==null&&c.version<d.version&&u(o)}else u(o);return s.get(o)}return{get:l,update:h,getWireframeAttribute:p}}function wf(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}let l,h;function u(c){l=c.type,h=c.bytesPerElement}function p(c,d){i.drawElements(s,d,l,c*h),t.update(d,s,1)}function o(c,d,g){if(g===0)return;let _,m;if(r)_=i,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,d,l,c*h,g),t.update(d,s,g)}this.setMode=a,this.setIndex=u,this.render=p,this.renderInstances=o}function Af(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Tf(i,e){return i[0]-e[0]}function Rf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Cf(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new ct,l=[];for(let u=0;u<8;u++)l[u]=[u,0];function h(u,p,o){const c=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(p);if(m===void 0||m.count!==_){let z=function(){N.dispose(),s.delete(p),p.removeEventListener("dispose",z)};var d=z;m!==void 0&&m.texture.dispose();const v=p.morphAttributes.position!==void 0,y=p.morphAttributes.normal!==void 0,w=p.morphAttributes.color!==void 0,T=p.morphAttributes.position||[],P=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),w===!0&&(S=3);let A=p.attributes.position.count*S,q=1;A>e.maxTextureSize&&(q=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const Y=new Float32Array(A*q*4*_),N=new _l(Y,A,q,_);N.type=xn,N.needsUpdate=!0;const B=S*4;for(let J=0;J<_;J++){const X=T[J],j=P[J],ee=U[J],K=A*q*4*J;for(let me=0;me<X.count;me++){const O=me*B;v===!0&&(a.fromBufferAttribute(X,me),Y[K+O+0]=a.x,Y[K+O+1]=a.y,Y[K+O+2]=a.z,Y[K+O+3]=0),y===!0&&(a.fromBufferAttribute(j,me),Y[K+O+4]=a.x,Y[K+O+5]=a.y,Y[K+O+6]=a.z,Y[K+O+7]=0),w===!0&&(a.fromBufferAttribute(ee,me),Y[K+O+8]=a.x,Y[K+O+9]=a.y,Y[K+O+10]=a.z,Y[K+O+11]=ee.itemSize===4?a.w:1)}}m={count:_,texture:N,size:new ke(A,q)},s.set(p,m),p.addEventListener("dispose",z)}let f=0;for(let v=0;v<c.length;v++)f+=c[v];const x=p.morphTargetsRelative?1:1-f;o.getUniforms().setValue(i,"morphTargetBaseInfluence",x),o.getUniforms().setValue(i,"morphTargetInfluences",c),o.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=c===void 0?0:c.length;let _=n[p.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[p.id]=_}for(let y=0;y<g;y++){const w=_[y];w[0]=y,w[1]=c[y]}_.sort(Rf);for(let y=0;y<8;y++)y<g&&_[y][1]?(l[y][0]=_[y][0],l[y][1]=_[y][1]):(l[y][0]=Number.MAX_SAFE_INTEGER,l[y][1]=0);l.sort(Tf);const m=p.morphAttributes.position,f=p.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const w=l[y],T=w[0],P=w[1];T!==Number.MAX_SAFE_INTEGER&&P?(m&&p.getAttribute("morphTarget"+y)!==m[T]&&p.setAttribute("morphTarget"+y,m[T]),f&&p.getAttribute("morphNormal"+y)!==f[T]&&p.setAttribute("morphNormal"+y,f[T]),r[y]=P,x+=P):(m&&p.hasAttribute("morphTarget"+y)===!0&&p.deleteAttribute("morphTarget"+y),f&&p.hasAttribute("morphNormal"+y)===!0&&p.deleteAttribute("morphNormal"+y),r[y]=0)}const v=p.morphTargetsRelative?1:1-x;o.getUniforms().setValue(i,"morphTargetBaseInfluence",v),o.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:h}}function Pf(i,e,t,n){let r=new WeakMap;function s(h){const u=n.render.frame,p=h.geometry,o=e.get(h,p);return r.get(o)!==u&&(e.update(o),r.set(o,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER)),o}function a(){r=new WeakMap}function l(h){const u=h.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const wl=new Ct,Al=new _l,Tl=new vu,Rl=new bl,pa=[],ma=[],ga=new Float32Array(16),_a=new Float32Array(9),va=new Float32Array(4);function xi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=pa[r];if(s===void 0&&(s=new Float32Array(r),pa[r]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(s,l)}return s}function it(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cr(i,e){let t=ma[e];t===void 0&&(t=new Int32Array(e),ma[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Lf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2fv(this.addr,e),rt(t,e)}}function Uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(it(t,e))return;i.uniform3fv(this.addr,e),rt(t,e)}}function If(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4fv(this.addr,e),rt(t,e)}}function Ff(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;va.set(n),i.uniformMatrix2fv(this.addr,!1,va),rt(t,n)}}function Nf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;_a.set(n),i.uniformMatrix3fv(this.addr,!1,_a),rt(t,n)}}function Of(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;ga.set(n),i.uniformMatrix4fv(this.addr,!1,ga),rt(t,n)}}function Bf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2iv(this.addr,e),rt(t,e)}}function zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;i.uniform3iv(this.addr,e),rt(t,e)}}function kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4iv(this.addr,e),rt(t,e)}}function Hf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2uiv(this.addr,e),rt(t,e)}}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;i.uniform3uiv(this.addr,e),rt(t,e)}}function Xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4uiv(this.addr,e),rt(t,e)}}function qf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||wl,r)}function $f(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Tl,r)}function Yf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Rl,r)}function jf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Al,r)}function Kf(i){switch(i){case 5126:return Lf;case 35664:return Df;case 35665:return Uf;case 35666:return If;case 35674:return Ff;case 35675:return Nf;case 35676:return Of;case 5124:case 35670:return Bf;case 35667:case 35671:return Gf;case 35668:case 35672:return zf;case 35669:case 35673:return kf;case 5125:return Hf;case 36294:return Vf;case 36295:return Wf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return qf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return jf}}function Jf(i,e){i.uniform1fv(this.addr,e)}function Zf(i,e){const t=xi(e,this.size,2);i.uniform2fv(this.addr,t)}function Qf(i,e){const t=xi(e,this.size,3);i.uniform3fv(this.addr,t)}function ep(i,e){const t=xi(e,this.size,4);i.uniform4fv(this.addr,t)}function tp(i,e){const t=xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function np(i,e){const t=xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ip(i,e){const t=xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rp(i,e){i.uniform1iv(this.addr,e)}function sp(i,e){i.uniform2iv(this.addr,e)}function op(i,e){i.uniform3iv(this.addr,e)}function ap(i,e){i.uniform4iv(this.addr,e)}function lp(i,e){i.uniform1uiv(this.addr,e)}function cp(i,e){i.uniform2uiv(this.addr,e)}function up(i,e){i.uniform3uiv(this.addr,e)}function dp(i,e){i.uniform4uiv(this.addr,e)}function hp(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||wl,s[a])}function fp(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Tl,s[a])}function pp(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Rl,s[a])}function mp(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Al,s[a])}function gp(i){switch(i){case 5126:return Jf;case 35664:return Zf;case 35665:return Qf;case 35666:return ep;case 35674:return tp;case 35675:return np;case 35676:return ip;case 5124:case 35670:return rp;case 35667:case 35671:return sp;case 35668:case 35672:return op;case 35669:case 35673:return ap;case 5125:return lp;case 36294:return cp;case 36295:return up;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}class _p{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Kf(t.type)}}class vp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=gp(t.type)}}class xp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const us=/(\w+)(\])?(\[|\.)?/g;function xa(i,e){i.seq.push(e),i.map[e.id]=e}function Sp(i,e,t){const n=i.name,r=n.length;for(us.lastIndex=0;;){const s=us.exec(n),a=us.lastIndex;let l=s[1];const h=s[2]==="]",u=s[3];if(h&&(l=l|0),u===void 0||u==="["&&a+2===r){xa(t,u===void 0?new _p(l,i,e):new vp(l,i,e));break}else{let o=t.map[l];o===void 0&&(o=new xp(l),xa(t,o)),t=o}}}class gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Sp(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const l=t[s],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Sa(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Mp=0;function yp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}function bp(i){switch(i){case Zt:return["Linear","( value )"];case Ce:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Ma(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+yp(i.getShaderSource(e),a)}else return r}function Ep(i,e){const t=bp(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function wp(i,e){let t;switch(e){case Nc:t="Linear";break;case Oc:t="Reinhard";break;case Bc:t="OptimizedCineon";break;case Gc:t="ACESFilmic";break;case zc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ap(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wi).join(`
`)}function Tp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function wi(i){return i!==""}function ya(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ba(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ns(i){return i.replace(Cp,Pp)}function Pp(i,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ns(t)}const Lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ea(i){return i.replace(Lp,Dp)}function Dp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wa(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Up(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ip(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case hi:e="ENVMAP_TYPE_CUBE";break;case Er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:e="ENVMAP_MODE_REFRACTION";break}return e}function Np(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ys:e="ENVMAP_BLENDING_MULTIPLY";break;case Ic:e="ENVMAP_BLENDING_MIX";break;case Fc:e="ENVMAP_BLENDING_ADD";break}return e}function Op(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const h=Up(t),u=Ip(t),p=Fp(t),o=Np(t),c=Op(t),d=t.isWebGL2?"":Ap(t),g=Tp(s),_=r.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wi).join(`
`),m.length>0&&(m+=`
`),f=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wi).join(`
`),f.length>0&&(f+=`
`)):(m=[wa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),f=[d,wa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMap?"#define "+o:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?De.tonemapping_pars_fragment:"",t.toneMapping!==dn?wp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,Ep("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),a=Ns(a),a=ya(a,t),a=ba(a,t),l=Ns(l),l=ya(l,t),l=ba(l,t),a=Ea(a),l=Ea(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+m+a,y=x+f+l,w=Sa(r,r.VERTEX_SHADER,v),T=Sa(r,r.FRAGMENT_SHADER,y);if(r.attachShader(_,w),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const S=r.getProgramInfoLog(_).trim(),A=r.getShaderInfoLog(w).trim(),q=r.getShaderInfoLog(T).trim();let Y=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,w,T);else{const B=Ma(r,w,"vertex"),z=Ma(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+B+`
`+z)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(A===""||q==="")&&(N=!1);N&&(this.diagnostics={runnable:Y,programLog:S,vertexShader:{log:A,prefix:m},fragmentShader:{log:q,prefix:f}})}r.deleteShader(w),r.deleteShader(T);let P;this.getUniforms=function(){return P===void 0&&(P=new gr(r,_)),P};let U;return this.getAttributes=function(){return U===void 0&&(U=Rp(r,_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let Gp=0;class zp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kp(e),t.set(e,n)),n}}class kp{constructor(e){this.id=Gp++,this.code=e,this.usedTimes=0}}function Hp(i,e,t,n,r,s,a){const l=new Js,h=new zp,u=[],p=r.isWebGL2,o=r.logarithmicDepthBuffer,c=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,A,q,Y,N){const B=Y.fog,z=N.geometry,J=S.isMeshStandardMaterial?Y.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||J),j=X&&X.mapping===Er?X.image.height:null,ee=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,me=K!==void 0?K.length:0;let O=0;z.morphAttributes.position!==void 0&&(O=1),z.morphAttributes.normal!==void 0&&(O=2),z.morphAttributes.color!==void 0&&(O=3);let Z,Q,ue,he;if(ee){const Qe=qt[ee];Z=Qe.vertexShader,Q=Qe.fragmentShader}else Z=S.vertexShader,Q=S.fragmentShader,h.update(S),ue=h.getVertexShaderID(S),he=h.getFragmentShaderID(S);const Se=i.getRenderTarget(),Ie=N.isInstancedMesh===!0,Ee=!!S.map,st=!!S.matcap,Ge=!!X,I=!!S.aoMap,dt=!!S.lightMap,ye=!!S.bumpMap,Fe=!!S.normalMap,we=!!S.displacementMap,Xe=!!S.emissiveMap,Be=!!S.metalnessMap,Pe=!!S.roughnessMap,Ve=S.anisotropy>0,ht=S.clearcoat>0,pt=S.iridescence>0,E=S.sheen>0,M=S.transmission>0,H=Ve&&!!S.anisotropyMap,te=ht&&!!S.clearcoatMap,ne=ht&&!!S.clearcoatNormalMap,oe=ht&&!!S.clearcoatRoughnessMap,ge=pt&&!!S.iridescenceMap,ae=pt&&!!S.iridescenceThicknessMap,W=E&&!!S.sheenColorMap,_e=E&&!!S.sheenRoughnessMap,ve=!!S.specularMap,Me=!!S.specularColorMap,fe=!!S.specularIntensityMap,pe=M&&!!S.transmissionMap,Ne=M&&!!S.thicknessMap,We=!!S.gradientMap,R=!!S.alphaMap,se=S.alphaTest>0,G=!!S.extensions,ie=!!z.attributes.uv1,le=!!z.attributes.uv2,He=!!z.attributes.uv3;return{isWebGL2:p,shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:Q,defines:S.defines,customVertexShaderID:ue,customFragmentShaderID:he,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,supportsVertexTextures:c,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Zt,map:Ee,matcap:st,envMap:Ge,envMapMode:Ge&&X.mapping,envMapCubeUVHeight:j,aoMap:I,lightMap:dt,bumpMap:ye,normalMap:Fe,displacementMap:c&&we,emissiveMap:Xe,normalMapObjectSpace:Fe&&S.normalMapType===Qc,normalMapTangentSpace:Fe&&S.normalMapType===Ks,metalnessMap:Be,roughnessMap:Pe,anisotropy:Ve,anisotropyMap:H,clearcoat:ht,clearcoatMap:te,clearcoatNormalMap:ne,clearcoatRoughnessMap:oe,iridescence:pt,iridescenceMap:ge,iridescenceThicknessMap:ae,sheen:E,sheenColorMap:W,sheenRoughnessMap:_e,specularMap:ve,specularColorMap:Me,specularIntensityMap:fe,transmission:M,transmissionMap:pe,thicknessMap:Ne,gradientMap:We,opaque:S.transparent===!1&&S.blending===li,alphaMap:R,alphaTest:se,combine:S.combine,mapUv:Ee&&_(S.map.channel),aoMapUv:I&&_(S.aoMap.channel),lightMapUv:dt&&_(S.lightMap.channel),bumpMapUv:ye&&_(S.bumpMap.channel),normalMapUv:Fe&&_(S.normalMap.channel),displacementMapUv:we&&_(S.displacementMap.channel),emissiveMapUv:Xe&&_(S.emissiveMap.channel),metalnessMapUv:Be&&_(S.metalnessMap.channel),roughnessMapUv:Pe&&_(S.roughnessMap.channel),anisotropyMapUv:H&&_(S.anisotropyMap.channel),clearcoatMapUv:te&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:W&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(S.sheenRoughnessMap.channel),specularMapUv:ve&&_(S.specularMap.channel),specularColorMapUv:Me&&_(S.specularColorMap.channel),specularIntensityMapUv:fe&&_(S.specularIntensityMap.channel),transmissionMapUv:pe&&_(S.transmissionMap.channel),thicknessMapUv:Ne&&_(S.thicknessMap.channel),alphaMapUv:R&&_(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Fe||Ve),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:le,vertexUv3s:He,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Ee||R),fog:!!B,useFog:S.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:o,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:O,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:S.toneMapped?i.toneMapping:dn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===$t,flipSided:S.side===Et,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:G&&S.extensions.derivatives===!0,extensionFragDepth:G&&S.extensions.fragDepth===!0,extensionDrawBuffers:G&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:G&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const q in S.defines)A.push(q),A.push(S.defines[q]);return S.isRawShaderMaterial===!1&&(x(A,S),v(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function x(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){l.disableAll(),A.isWebGL2&&l.enable(0),A.supportsVertexTextures&&l.enable(1),A.instancing&&l.enable(2),A.instancingColor&&l.enable(3),A.matcap&&l.enable(4),A.envMap&&l.enable(5),A.normalMapObjectSpace&&l.enable(6),A.normalMapTangentSpace&&l.enable(7),A.clearcoat&&l.enable(8),A.iridescence&&l.enable(9),A.alphaTest&&l.enable(10),A.vertexColors&&l.enable(11),A.vertexAlphas&&l.enable(12),A.vertexUv1s&&l.enable(13),A.vertexUv2s&&l.enable(14),A.vertexUv3s&&l.enable(15),A.vertexTangents&&l.enable(16),A.anisotropy&&l.enable(17),S.push(l.mask),l.disableAll(),A.fog&&l.enable(0),A.useFog&&l.enable(1),A.flatShading&&l.enable(2),A.logarithmicDepthBuffer&&l.enable(3),A.skinning&&l.enable(4),A.morphTargets&&l.enable(5),A.morphNormals&&l.enable(6),A.morphColors&&l.enable(7),A.premultipliedAlpha&&l.enable(8),A.shadowMapEnabled&&l.enable(9),A.useLegacyLights&&l.enable(10),A.doubleSided&&l.enable(11),A.flipSided&&l.enable(12),A.useDepthPacking&&l.enable(13),A.dithering&&l.enable(14),A.transmission&&l.enable(15),A.sheen&&l.enable(16),A.opaque&&l.enable(17),A.pointsUvs&&l.enable(18),S.push(l.mask)}function y(S){const A=g[S.type];let q;if(A){const Y=qt[A];q=Pu.clone(Y.uniforms)}else q=S.uniforms;return q}function w(S,A){let q;for(let Y=0,N=u.length;Y<N;Y++){const B=u[Y];if(B.cacheKey===A){q=B,++q.usedTimes;break}}return q===void 0&&(q=new Bp(i,A,S,s),u.push(q)),q}function T(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),S.destroy()}}function P(S){h.remove(S)}function U(){h.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:w,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:U}}function Vp(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,l){i.get(s)[a]=l}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Wp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Aa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ta(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(o,c,d,g,_,m){let f=i[e];return f===void 0?(f={id:o.id,object:o,geometry:c,material:d,groupOrder:g,renderOrder:o.renderOrder,z:_,group:m},i[e]=f):(f.id=o.id,f.object=o,f.geometry=c,f.material=d,f.groupOrder=g,f.renderOrder=o.renderOrder,f.z=_,f.group=m),e++,f}function l(o,c,d,g,_,m){const f=a(o,c,d,g,_,m);d.transmission>0?n.push(f):d.transparent===!0?r.push(f):t.push(f)}function h(o,c,d,g,_,m){const f=a(o,c,d,g,_,m);d.transmission>0?n.unshift(f):d.transparent===!0?r.unshift(f):t.unshift(f)}function u(o,c){t.length>1&&t.sort(o||Wp),n.length>1&&n.sort(c||Aa),r.length>1&&r.sort(c||Aa)}function p(){for(let o=e,c=i.length;o<c;o++){const d=i[o];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:h,finish:p,sort:u}}function Xp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ta,i.set(n,[a])):r>=s.length?(a=new Ta,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function qp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Te};break;case"SpotLight":t={position:new C,direction:new C,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function $p(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Yp=0;function jp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kp(i,e){const t=new qp,n=$p(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)r.probe.push(new C);const s=new C,a=new Je,l=new Je;function h(p,o){let c=0,d=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let _=0,m=0,f=0,x=0,v=0,y=0,w=0,T=0,P=0,U=0;p.sort(jp);const S=o===!0?Math.PI:1;for(let q=0,Y=p.length;q<Y;q++){const N=p[q],B=N.color,z=N.intensity,J=N.distance,X=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)c+=B.r*z*S,d+=B.g*z*S,g+=B.b*z*S;else if(N.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector(N.sh.coefficients[j],z);else if(N.isDirectionalLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){const ee=N.shadow,K=n.get(N);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=X,r.directionalShadowMatrix[_]=N.shadow.matrix,y++}r.directional[_]=j,_++}else if(N.isSpotLight){const j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(B).multiplyScalar(z*S),j.distance=J,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,r.spot[f]=j;const ee=N.shadow;if(N.map&&(r.spotLightMap[P]=N.map,P++,ee.updateMatrices(N),N.castShadow&&U++),r.spotLightMatrix[f]=ee.matrix,N.castShadow){const K=n.get(N);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,r.spotShadow[f]=K,r.spotShadowMap[f]=X,T++}f++}else if(N.isRectAreaLight){const j=t.get(N);j.color.copy(B).multiplyScalar(z),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),r.rectArea[x]=j,x++}else if(N.isPointLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*S),j.distance=N.distance,j.decay=N.decay,N.castShadow){const ee=N.shadow,K=n.get(N);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,K.shadowCameraNear=ee.camera.near,K.shadowCameraFar=ee.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=X,r.pointShadowMatrix[m]=N.shadow.matrix,w++}r.point[m]=j,m++}else if(N.isHemisphereLight){const j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(z*S),j.groundColor.copy(N.groundColor).multiplyScalar(z*S),r.hemi[v]=j,v++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=c,r.ambient[1]=d,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==_||A.pointLength!==m||A.spotLength!==f||A.rectAreaLength!==x||A.hemiLength!==v||A.numDirectionalShadows!==y||A.numPointShadows!==w||A.numSpotShadows!==T||A.numSpotMaps!==P)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=x,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+P-U,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=U,A.directionalLength=_,A.pointLength=m,A.spotLength=f,A.rectAreaLength=x,A.hemiLength=v,A.numDirectionalShadows=y,A.numPointShadows=w,A.numSpotShadows=T,A.numSpotMaps=P,r.version=Yp++)}function u(p,o){let c=0,d=0,g=0,_=0,m=0;const f=o.matrixWorldInverse;for(let x=0,v=p.length;x<v;x++){const y=p[x];if(y.isDirectionalLight){const w=r.directional[c];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),c++}else if(y.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),l.identity(),a.copy(y.matrixWorld),a.premultiply(f),l.extractRotation(a),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),_++}else if(y.isPointLight){const w=r.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),d++}else if(y.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:h,setupView:u,state:r}}function Ra(i,e){const t=new Kp(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(o){n.push(o)}function l(o){r.push(o)}function h(o){t.setup(n,o)}function u(o){t.setupView(n,o)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:h,setupLightsView:u,pushLight:a,pushShadow:l}}function Jp(i,e){let t=new WeakMap;function n(s,a=0){const l=t.get(s);let h;return l===void 0?(h=new Ra(i,e),t.set(s,[h])):a>=l.length?(h=new Ra(i,e),l.push(h)):h=l[a],h}function r(){t=new WeakMap}return{get:n,dispose:r}}class Zp extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qp extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nm(i,e,t){let n=new Qs;const r=new ke,s=new ke,a=new ct,l=new Zp({depthPacking:Zc}),h=new Qp,u={},p=t.maxTextureSize,o={[yn]:Et,[Et]:yn,[$t]:$t},c=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:em,fragmentShader:tm}),d=c.clone();d.defines.HORIZONTAL_PASS=1;const g=new xt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vt(g,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let f=this.type;this.render=function(w,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const U=i.getRenderTarget(),S=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Sn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Y=f!==cn&&this.type===cn,N=f===cn&&this.type!==cn;for(let B=0,z=w.length;B<z;B++){const J=w[B],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const j=X.getFrameExtents();if(r.multiply(j),s.copy(X.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/j.x),r.x=s.x*j.x,X.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/j.y),r.y=s.y*j.y,X.mapSize.y=s.y)),X.map===null||Y===!0||N===!0){const K=this.type!==cn?{minFilter:bt,magFilter:bt}:{};X.map!==null&&X.map.dispose(),X.map=new zn(r.x,r.y,K),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ee=X.getViewportCount();for(let K=0;K<ee;K++){const me=X.getViewport(K);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),q.viewport(a),X.updateMatrices(J,K),n=X.getFrustum(),y(T,P,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===cn&&x(X,P),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(U,S,A)};function x(w,T){const P=e.update(_);c.defines.VSM_SAMPLES!==w.blurSamples&&(c.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zn(r.x,r.y)),c.uniforms.shadow_pass.value=w.map.texture,c.uniforms.resolution.value=w.mapSize,c.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,P,c,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,P,d,_,null)}function v(w,T,P,U){let S=null;const A=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)S=A;else if(S=P.isPointLight===!0?h:l,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const q=S.uuid,Y=T.uuid;let N=u[q];N===void 0&&(N={},u[q]=N);let B=N[Y];B===void 0&&(B=S.clone(),N[Y]=B),S=B}if(S.visible=T.visible,S.wireframe=T.wireframe,U===cn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:o[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const q=i.properties.get(S);q.light=P}return S}function y(w,T,P,U,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===cn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const Y=e.update(w),N=w.material;if(Array.isArray(N)){const B=Y.groups;for(let z=0,J=B.length;z<J;z++){const X=B[z],j=N[X.materialIndex];if(j&&j.visible){const ee=v(w,j,U,S);i.renderBufferDirect(P,null,Y,ee,w,X)}}}else if(N.visible){const B=v(w,N,U,S);i.renderBufferDirect(P,null,Y,B,w,null)}}const q=w.children;for(let Y=0,N=q.length;Y<N;Y++)y(q[Y],T,P,U,S)}}function im(i,e,t){const n=t.isWebGL2;function r(){let R=!1;const se=new ct;let G=null;const ie=new ct(0,0,0,0);return{setMask:function(le){G!==le&&!R&&(i.colorMask(le,le,le,le),G=le)},setLocked:function(le){R=le},setClear:function(le,He,Ye,Qe,En){En===!0&&(le*=Qe,He*=Qe,Ye*=Qe),se.set(le,He,Ye,Qe),ie.equals(se)===!1&&(i.clearColor(le,He,Ye,Qe),ie.copy(se))},reset:function(){R=!1,G=null,ie.set(-1,0,0,0)}}}function s(){let R=!1,se=null,G=null,ie=null;return{setTest:function(le){le?Se(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(le){se!==le&&!R&&(i.depthMask(le),se=le)},setFunc:function(le){if(G!==le){switch(le){case Tc:i.depthFunc(i.NEVER);break;case Rc:i.depthFunc(i.ALWAYS);break;case Cc:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case Pc:i.depthFunc(i.EQUAL);break;case Lc:i.depthFunc(i.GEQUAL);break;case Dc:i.depthFunc(i.GREATER);break;case Uc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}G=le}},setLocked:function(le){R=le},setClear:function(le){ie!==le&&(i.clearDepth(le),ie=le)},reset:function(){R=!1,se=null,G=null,ie=null}}}function a(){let R=!1,se=null,G=null,ie=null,le=null,He=null,Ye=null,Qe=null,En=null;return{setTest:function(je){R||(je?Se(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(je){se!==je&&!R&&(i.stencilMask(je),se=je)},setFunc:function(je,Xt,St){(G!==je||ie!==Xt||le!==St)&&(i.stencilFunc(je,Xt,St),G=je,ie=Xt,le=St)},setOp:function(je,Xt,St){(He!==je||Ye!==Xt||Qe!==St)&&(i.stencilOp(je,Xt,St),He=je,Ye=Xt,Qe=St)},setLocked:function(je){R=je},setClear:function(je){En!==je&&(i.clearStencil(je),En=je)},reset:function(){R=!1,se=null,G=null,ie=null,le=null,He=null,Ye=null,Qe=null,En=null}}}const l=new r,h=new s,u=new a,p=new WeakMap,o=new WeakMap;let c={},d={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,y=null,w=null,T=null,P=null,U=null,S=!1,A=null,q=null,Y=null,N=null,B=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,X=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),J=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),J=X>=2);let ee=null,K={};const me=i.getParameter(i.SCISSOR_BOX),O=i.getParameter(i.VIEWPORT),Z=new ct().fromArray(me),Q=new ct().fromArray(O);function ue(R,se,G,ie){const le=new Uint8Array(4),He=i.createTexture();i.bindTexture(R,He),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<G;Ye++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(se+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return He}const he={};he[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(he[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),h.setClear(1),u.setClear(0),Se(i.DEPTH_TEST),h.setFunc(Rs),we(!1),Xe(fo),Se(i.CULL_FACE),ye(Sn);function Se(R){c[R]!==!0&&(i.enable(R),c[R]=!0)}function Ie(R){c[R]!==!1&&(i.disable(R),c[R]=!1)}function Ee(R,se){return d[R]!==se?(i.bindFramebuffer(R,se),d[R]=se,n&&(R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=se),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function st(R,se){let G=_,ie=!1;if(R)if(G=g.get(se),G===void 0&&(G=[],g.set(se,G)),R.isWebGLMultipleRenderTargets){const le=R.texture;if(G.length!==le.length||G[0]!==i.COLOR_ATTACHMENT0){for(let He=0,Ye=le.length;He<Ye;He++)G[He]=i.COLOR_ATTACHMENT0+He;G.length=le.length,ie=!0}}else G[0]!==i.COLOR_ATTACHMENT0&&(G[0]=i.COLOR_ATTACHMENT0,ie=!0);else G[0]!==i.BACK&&(G[0]=i.BACK,ie=!0);ie&&(t.isWebGL2?i.drawBuffers(G):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))}function Ge(R){return m!==R?(i.useProgram(R),m=R,!0):!1}const I={[si]:i.FUNC_ADD,[gc]:i.FUNC_SUBTRACT,[_c]:i.FUNC_REVERSE_SUBTRACT};if(n)I[_o]=i.MIN,I[vo]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(I[_o]=R.MIN_EXT,I[vo]=R.MAX_EXT)}const dt={[vc]:i.ZERO,[xc]:i.ONE,[Sc]:i.SRC_COLOR,[il]:i.SRC_ALPHA,[Ac]:i.SRC_ALPHA_SATURATE,[Ec]:i.DST_COLOR,[yc]:i.DST_ALPHA,[Mc]:i.ONE_MINUS_SRC_COLOR,[rl]:i.ONE_MINUS_SRC_ALPHA,[wc]:i.ONE_MINUS_DST_COLOR,[bc]:i.ONE_MINUS_DST_ALPHA};function ye(R,se,G,ie,le,He,Ye,Qe){if(R===Sn){f===!0&&(Ie(i.BLEND),f=!1);return}if(f===!1&&(Se(i.BLEND),f=!0),R!==mc){if(R!==x||Qe!==S){if((v!==si||T!==si)&&(i.blendEquation(i.FUNC_ADD),v=si,T=si),Qe)switch(R){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFunc(i.ONE,i.ONE);break;case mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case go:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case go:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,w=null,P=null,U=null,x=R,S=Qe}return}le=le||se,He=He||G,Ye=Ye||ie,(se!==v||le!==T)&&(i.blendEquationSeparate(I[se],I[le]),v=se,T=le),(G!==y||ie!==w||He!==P||Ye!==U)&&(i.blendFuncSeparate(dt[G],dt[ie],dt[He],dt[Ye]),y=G,w=ie,P=He,U=Ye),x=R,S=!1}function Fe(R,se){R.side===$t?Ie(i.CULL_FACE):Se(i.CULL_FACE);let G=R.side===Et;se&&(G=!G),we(G),R.blending===li&&R.transparent===!1?ye(Sn):ye(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),h.setFunc(R.depthFunc),h.setTest(R.depthTest),h.setMask(R.depthWrite),l.setMask(R.colorWrite);const ie=R.stencilWrite;u.setTest(ie),ie&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Pe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(R){A!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),A=R)}function Xe(R){R!==hc?(Se(i.CULL_FACE),R!==q&&(R===fo?i.cullFace(i.BACK):R===fc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),q=R}function Be(R){R!==Y&&(J&&i.lineWidth(R),Y=R)}function Pe(R,se,G){R?(Se(i.POLYGON_OFFSET_FILL),(N!==se||B!==G)&&(i.polygonOffset(se,G),N=se,B=G)):Ie(i.POLYGON_OFFSET_FILL)}function Ve(R){R?Se(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function ht(R){R===void 0&&(R=i.TEXTURE0+z-1),ee!==R&&(i.activeTexture(R),ee=R)}function pt(R,se,G){G===void 0&&(ee===null?G=i.TEXTURE0+z-1:G=ee);let ie=K[G];ie===void 0&&(ie={type:void 0,texture:void 0},K[G]=ie),(ie.type!==R||ie.texture!==se)&&(ee!==G&&(i.activeTexture(G),ee=G),i.bindTexture(R,se||he[R]),ie.type=R,ie.texture=se)}function E(){const R=K[ee];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function M(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function H(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(R){Z.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function fe(R){Q.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Q.copy(R))}function pe(R,se){let G=o.get(se);G===void 0&&(G=new WeakMap,o.set(se,G));let ie=G.get(R);ie===void 0&&(ie=i.getUniformBlockIndex(se,R.name),G.set(R,ie))}function Ne(R,se){const ie=o.get(se).get(R);p.get(se)!==ie&&(i.uniformBlockBinding(se,ie,R.__bindingPointIndex),p.set(se,ie))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},ee=null,K={},d={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,y=null,w=null,T=null,P=null,U=null,S=!1,A=null,q=null,Y=null,N=null,B=null,Z.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),l.reset(),h.reset(),u.reset()}return{buffers:{color:l,depth:h,stencil:u},enable:Se,disable:Ie,bindFramebuffer:Ee,drawBuffers:st,useProgram:Ge,setBlending:ye,setMaterial:Fe,setFlipSided:we,setCullFace:Xe,setLineWidth:Be,setPolygonOffset:Pe,setScissorTest:Ve,activeTexture:ht,bindTexture:pt,unbindTexture:E,compressedTexImage2D:M,compressedTexImage3D:H,texImage2D:_e,texImage3D:ve,updateUBOMapping:pe,uniformBlockBinding:Ne,texStorage2D:ae,texStorage3D:W,texSubImage2D:te,texSubImage3D:ne,compressedTexSubImage2D:oe,compressedTexSubImage3D:ge,scissor:Me,viewport:fe,reset:We}}function rm(i,e,t,n,r,s,a){const l=r.isWebGL2,h=r.maxTextures,u=r.maxCubemapSize,p=r.maxTextureSize,o=r.maxSamples,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,M){return f?new OffscreenCanvas(E,M):Sr("canvas")}function v(E,M,H,te){let ne=1;if((E.width>te||E.height>te)&&(ne=te/Math.max(E.width,E.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const oe=M?Fs:Math.floor,ge=oe(ne*E.width),ae=oe(ne*E.height);_===void 0&&(_=x(ge,ae));const W=H?x(ge,ae):_;return W.width=ge,W.height=ae,W.getContext("2d").drawImage(E,0,0,ge,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ge+"x"+ae+")."),W}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function y(E){return Xo(E.width)&&Xo(E.height)}function w(E){return l?!1:E.wrapS!==Ht||E.wrapT!==Ht||E.minFilter!==bt&&E.minFilter!==Dt}function T(E,M){return E.generateMipmaps&&M&&E.minFilter!==bt&&E.minFilter!==Dt}function P(E){i.generateMipmap(E)}function U(E,M,H,te,ne=!1){if(l===!1)return M;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let oe=M;return M===i.RED&&(H===i.FLOAT&&(oe=i.R32F),H===i.HALF_FLOAT&&(oe=i.R16F),H===i.UNSIGNED_BYTE&&(oe=i.R8)),M===i.RG&&(H===i.FLOAT&&(oe=i.RG32F),H===i.HALF_FLOAT&&(oe=i.RG16F),H===i.UNSIGNED_BYTE&&(oe=i.RG8)),M===i.RGBA&&(H===i.FLOAT&&(oe=i.RGBA32F),H===i.HALF_FLOAT&&(oe=i.RGBA16F),H===i.UNSIGNED_BYTE&&(oe=te===Ce&&ne===!1?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)),(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function S(E,M,H){return T(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==bt&&E.minFilter!==Dt?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function A(E){return E===bt||E===xo||E===Nr?i.NEAREST:i.LINEAR}function q(E){const M=E.target;M.removeEventListener("dispose",q),N(M),M.isVideoTexture&&g.delete(M)}function Y(E){const M=E.target;M.removeEventListener("dispose",Y),z(M)}function N(E){const M=n.get(E);if(M.__webglInit===void 0)return;const H=E.source,te=m.get(H);if(te){const ne=te[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&B(E),Object.keys(te).length===0&&m.delete(H)}n.remove(E)}function B(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const H=E.source,te=m.get(H);delete te[M.__cacheKey],a.memory.textures--}function z(E){const M=E.texture,H=n.get(E),te=n.get(M);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)i.deleteFramebuffer(H.__webglFramebuffer[ne]),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[ne]);else{if(i.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ne=0;ne<H.__webglColorRenderbuffer.length;ne++)H.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ne=0,oe=M.length;ne<oe;ne++){const ge=n.get(M[ne]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(M[ne])}n.remove(M),n.remove(E)}let J=0;function X(){J=0}function j(){const E=J;return E>=h&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+h),J+=1,E}function ee(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function K(E,M){const H=n.get(E);if(E.isVideoTexture&&ht(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(H,E,M);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function me(E,M){const H=n.get(E);if(E.version>0&&H.__version!==E.version){Ee(H,E,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function O(E,M){const H=n.get(E);if(E.version>0&&H.__version!==E.version){Ee(H,E,M);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function Z(E,M){const H=n.get(E);if(E.version>0&&H.__version!==E.version){st(H,E,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}const Q={[Ls]:i.REPEAT,[Ht]:i.CLAMP_TO_EDGE,[Ds]:i.MIRRORED_REPEAT},ue={[bt]:i.NEAREST,[xo]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[kc]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},he={[tu]:i.NEVER,[lu]:i.ALWAYS,[nu]:i.LESS,[ru]:i.LEQUAL,[iu]:i.EQUAL,[au]:i.GEQUAL,[su]:i.GREATER,[ou]:i.NOTEQUAL};function Se(E,M,H){if(H?(i.texParameteri(E,i.TEXTURE_WRAP_S,Q[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Q[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Q[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ue[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ue[M.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Ht||M.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,A(M.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==bt&&M.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,he[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===bt||M.minFilter!==Nr&&M.minFilter!==Pi||M.type===xn&&e.has("OES_texture_float_linear")===!1||l===!1&&M.type===Li&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Ie(E,M){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",q));const te=M.source;let ne=m.get(te);ne===void 0&&(ne={},m.set(te,ne));const oe=ee(M);if(oe!==E.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ne[oe].usedTimes++;const ge=ne[E.__cacheKey];ge!==void 0&&(ne[E.__cacheKey].usedTimes--,ge.usedTimes===0&&B(M)),E.__cacheKey=oe,E.__webglTexture=ne[oe].texture}return H}function Ee(E,M,H){let te=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=i.TEXTURE_3D);const ne=Ie(E,M),oe=M.source;t.bindTexture(te,E.__webglTexture,i.TEXTURE0+H);const ge=n.get(oe);if(oe.version!==ge.__version||ne===!0){t.activeTexture(i.TEXTURE0+H),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ae=w(M)&&y(M.image)===!1;let W=v(M.image,ae,!1,p);W=pt(M,W);const _e=y(W)||l,ve=s.convert(M.format,M.colorSpace);let Me=s.convert(M.type),fe=U(M.internalFormat,ve,Me,M.colorSpace);Se(te,M,_e);let pe;const Ne=M.mipmaps,We=l&&M.isVideoTexture!==!0,R=ge.__version===void 0||ne===!0,se=S(M,W,_e);if(M.isDepthTexture)fe=i.DEPTH_COMPONENT,l?M.type===xn?fe=i.DEPTH_COMPONENT32F:M.type===vn?fe=i.DEPTH_COMPONENT24:M.type===Un?fe=i.DEPTH24_STENCIL8:fe=i.DEPTH_COMPONENT16:M.type===xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===In&&fe===i.DEPTH_COMPONENT&&M.type!==js&&M.type!==vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=vn,Me=s.convert(M.type)),M.format===fi&&fe===i.DEPTH_COMPONENT&&(fe=i.DEPTH_STENCIL,M.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Un,Me=s.convert(M.type))),R&&(We?t.texStorage2D(i.TEXTURE_2D,1,fe,W.width,W.height):t.texImage2D(i.TEXTURE_2D,0,fe,W.width,W.height,0,ve,Me,null));else if(M.isDataTexture)if(Ne.length>0&&_e){We&&R&&t.texStorage2D(i.TEXTURE_2D,se,fe,Ne[0].width,Ne[0].height);for(let G=0,ie=Ne.length;G<ie;G++)pe=Ne[G],We?t.texSubImage2D(i.TEXTURE_2D,G,0,0,pe.width,pe.height,ve,Me,pe.data):t.texImage2D(i.TEXTURE_2D,G,fe,pe.width,pe.height,0,ve,Me,pe.data);M.generateMipmaps=!1}else We?(R&&t.texStorage2D(i.TEXTURE_2D,se,fe,W.width,W.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,W.width,W.height,ve,Me,W.data)):t.texImage2D(i.TEXTURE_2D,0,fe,W.width,W.height,0,ve,Me,W.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&R&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,fe,Ne[0].width,Ne[0].height,W.depth);for(let G=0,ie=Ne.length;G<ie;G++)pe=Ne[G],M.format!==Vt?ve!==null?We?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,W.depth,ve,pe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,fe,pe.width,pe.height,W.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,W.depth,ve,Me,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,fe,pe.width,pe.height,W.depth,0,ve,Me,pe.data)}else{We&&R&&t.texStorage2D(i.TEXTURE_2D,se,fe,Ne[0].width,Ne[0].height);for(let G=0,ie=Ne.length;G<ie;G++)pe=Ne[G],M.format!==Vt?ve!==null?We?t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,pe.width,pe.height,ve,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,G,fe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(i.TEXTURE_2D,G,0,0,pe.width,pe.height,ve,Me,pe.data):t.texImage2D(i.TEXTURE_2D,G,fe,pe.width,pe.height,0,ve,Me,pe.data)}else if(M.isDataArrayTexture)We?(R&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,fe,W.width,W.height,W.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,ve,Me,W.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,W.width,W.height,W.depth,0,ve,Me,W.data);else if(M.isData3DTexture)We?(R&&t.texStorage3D(i.TEXTURE_3D,se,fe,W.width,W.height,W.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,ve,Me,W.data)):t.texImage3D(i.TEXTURE_3D,0,fe,W.width,W.height,W.depth,0,ve,Me,W.data);else if(M.isFramebufferTexture){if(R)if(We)t.texStorage2D(i.TEXTURE_2D,se,fe,W.width,W.height);else{let G=W.width,ie=W.height;for(let le=0;le<se;le++)t.texImage2D(i.TEXTURE_2D,le,fe,G,ie,0,ve,Me,null),G>>=1,ie>>=1}}else if(Ne.length>0&&_e){We&&R&&t.texStorage2D(i.TEXTURE_2D,se,fe,Ne[0].width,Ne[0].height);for(let G=0,ie=Ne.length;G<ie;G++)pe=Ne[G],We?t.texSubImage2D(i.TEXTURE_2D,G,0,0,ve,Me,pe):t.texImage2D(i.TEXTURE_2D,G,fe,ve,Me,pe);M.generateMipmaps=!1}else We?(R&&t.texStorage2D(i.TEXTURE_2D,se,fe,W.width,W.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Me,W)):t.texImage2D(i.TEXTURE_2D,0,fe,ve,Me,W);T(M,_e)&&P(te),ge.__version=oe.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function st(E,M,H){if(M.image.length!==6)return;const te=Ie(E,M),ne=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+H);const oe=n.get(ne);if(ne.version!==oe.__version||te===!0){t.activeTexture(i.TEXTURE0+H),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ge=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,W=[];for(let G=0;G<6;G++)!ge&&!ae?W[G]=v(M.image[G],!1,!0,u):W[G]=ae?M.image[G].image:M.image[G],W[G]=pt(M,W[G]);const _e=W[0],ve=y(_e)||l,Me=s.convert(M.format,M.colorSpace),fe=s.convert(M.type),pe=U(M.internalFormat,Me,fe,M.colorSpace),Ne=l&&M.isVideoTexture!==!0,We=oe.__version===void 0||te===!0;let R=S(M,_e,ve);Se(i.TEXTURE_CUBE_MAP,M,ve);let se;if(ge){Ne&&We&&t.texStorage2D(i.TEXTURE_CUBE_MAP,R,pe,_e.width,_e.height);for(let G=0;G<6;G++){se=W[G].mipmaps;for(let ie=0;ie<se.length;ie++){const le=se[ie];M.format!==Vt?Me!==null?Ne?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie,0,0,le.width,le.height,Me,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie,pe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie,0,0,le.width,le.height,Me,fe,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie,pe,le.width,le.height,0,Me,fe,le.data)}}}else{se=M.mipmaps,Ne&&We&&(se.length>0&&R++,t.texStorage2D(i.TEXTURE_CUBE_MAP,R,pe,W[0].width,W[0].height));for(let G=0;G<6;G++)if(ae){Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,W[G].width,W[G].height,Me,fe,W[G].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,pe,W[G].width,W[G].height,0,Me,fe,W[G].data);for(let ie=0;ie<se.length;ie++){const He=se[ie].image[G].image;Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie+1,0,0,He.width,He.height,Me,fe,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie+1,pe,He.width,He.height,0,Me,fe,He.data)}}else{Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Me,fe,W[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,pe,Me,fe,W[G]);for(let ie=0;ie<se.length;ie++){const le=se[ie];Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie+1,0,0,Me,fe,le.image[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie+1,pe,Me,fe,le.image[G])}}}T(M,ve)&&P(i.TEXTURE_CUBE_MAP),oe.__version=ne.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Ge(E,M,H,te,ne){const oe=s.convert(H.format,H.colorSpace),ge=s.convert(H.type),ae=U(H.internalFormat,oe,ge,H.colorSpace);n.get(M).__hasExternalTextures||(ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,ae,M.width,M.height,M.depth,0,oe,ge,null):t.texImage2D(ne,0,ae,M.width,M.height,0,oe,ge,null)),t.bindFramebuffer(i.FRAMEBUFFER,E),Ve(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ne,n.get(H).__webglTexture,0,Pe(M)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ne,n.get(H).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function I(E,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer&&!M.stencilBuffer){let te=i.DEPTH_COMPONENT16;if(H||Ve(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===xn?te=i.DEPTH_COMPONENT32F:ne.type===vn&&(te=i.DEPTH_COMPONENT24));const oe=Pe(M);Ve(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,te,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,te,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(M.depthBuffer&&M.stencilBuffer){const te=Pe(M);H&&Ve(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,M.width,M.height):Ve(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<te.length;ne++){const oe=te[ne],ge=s.convert(oe.format,oe.colorSpace),ae=s.convert(oe.type),W=U(oe.internalFormat,ge,ae,oe.colorSpace),_e=Pe(M);H&&Ve(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,W,M.width,M.height):Ve(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,W,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,W,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const te=n.get(M.depthTexture).__webglTexture,ne=Pe(M);if(M.depthTexture.format===In)Ve(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(M.depthTexture.format===fi)Ve(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ye(E){const M=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");dt(M.__webglFramebuffer,E)}else if(H){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=i.createRenderbuffer(),I(M.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),I(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(E,M,H){const te=n.get(E);M!==void 0&&Ge(te.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),H!==void 0&&ye(E)}function we(E){const M=E.texture,H=n.get(E),te=n.get(M);E.addEventListener("dispose",Y),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=M.version,a.memory.textures++);const ne=E.isWebGLCubeRenderTarget===!0,oe=E.isWebGLMultipleRenderTargets===!0,ge=y(E)||l;if(ne){H.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)H.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(H.__webglFramebuffer=i.createFramebuffer(),oe)if(r.drawBuffers){const ae=E.texture;for(let W=0,_e=ae.length;W<_e;W++){const ve=n.get(ae[W]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&E.samples>0&&Ve(E)===!1){const ae=oe?M:[M];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let W=0;W<ae.length;W++){const _e=ae[W];H.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[W]);const ve=s.convert(_e.format,_e.colorSpace),Me=s.convert(_e.type),fe=U(_e.internalFormat,ve,Me,_e.colorSpace,E.isXRRenderTarget===!0),pe=Pe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,fe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,H.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),I(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Se(i.TEXTURE_CUBE_MAP,M,ge);for(let ae=0;ae<6;ae++)Ge(H.__webglFramebuffer[ae],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae);T(M,ge)&&P(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const ae=E.texture;for(let W=0,_e=ae.length;W<_e;W++){const ve=ae[W],Me=n.get(ve);t.bindTexture(i.TEXTURE_2D,Me.__webglTexture),Se(i.TEXTURE_2D,ve,ge),Ge(H.__webglFramebuffer,E,ve,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D),T(ve,ge)&&P(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(l?ae=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,te.__webglTexture),Se(ae,M,ge),Ge(H.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,ae),T(M,ge)&&P(ae),t.unbindTexture()}E.depthBuffer&&ye(E)}function Xe(E){const M=y(E)||l,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,ne=H.length;te<ne;te++){const oe=H[te];if(T(oe,M)){const ge=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(oe).__webglTexture;t.bindTexture(ge,ae),P(ge),t.unbindTexture()}}}function Be(E){if(l&&E.samples>0&&Ve(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,te=E.height;let ne=i.COLOR_BUFFER_BIT;const oe=[],ge=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(E),W=E.isWebGLMultipleRenderTargets===!0;if(W)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){oe.push(i.COLOR_ATTACHMENT0+_e),E.depthBuffer&&oe.push(ge);const ve=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ve===!1&&(E.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),W&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[_e]),ve===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ge])),W){const Me=n.get(M[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,H,te,0,0,H,te,ne,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ae.__webglColorRenderbuffer[_e]);const ve=n.get(M[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Pe(E){return Math.min(o,E.samples)}function Ve(E){const M=n.get(E);return l&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ht(E){const M=a.render.frame;g.get(E)!==M&&(g.set(E,M),E.update())}function pt(E,M){const H=E.colorSpace,te=E.format,ne=E.type;return E.isCompressedTexture===!0||E.format===Us||H!==Zt&&H!==Nn&&(H===Ce?l===!1?e.has("EXT_sRGB")===!0&&te===Vt?(E.format=Us,E.minFilter=Dt,E.generateMipmaps=!1):M=ml.sRGBToLinear(M):(te!==Vt||ne!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=j,this.resetTextureUnits=X,this.setTexture2D=K,this.setTexture2DArray=me,this.setTexture3D=O,this.setTextureCube=Z,this.rebindTextures=Fe,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=Ve}function sm(i,e,t){const n=t.isWebGL2;function r(s,a=Nn){let l;if(s===Mn)return i.UNSIGNED_BYTE;if(s===al)return i.UNSIGNED_SHORT_4_4_4_4;if(s===ll)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Hc)return i.BYTE;if(s===Vc)return i.SHORT;if(s===js)return i.UNSIGNED_SHORT;if(s===ol)return i.INT;if(s===vn)return i.UNSIGNED_INT;if(s===xn)return i.FLOAT;if(s===Li)return n?i.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===Wc)return i.ALPHA;if(s===Vt)return i.RGBA;if(s===Xc)return i.LUMINANCE;if(s===qc)return i.LUMINANCE_ALPHA;if(s===In)return i.DEPTH_COMPONENT;if(s===fi)return i.DEPTH_STENCIL;if(s===Us)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===$c)return i.RED;if(s===cl)return i.RED_INTEGER;if(s===Yc)return i.RG;if(s===ul)return i.RG_INTEGER;if(s===dl)return i.RGBA_INTEGER;if(s===Or||s===Br||s===Gr||s===zr)if(a===Ce)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Or)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Br)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Or)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Br)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gr)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zr)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===So||s===Mo||s===yo||s===bo)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===So)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mo)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yo)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bo)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jc)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Eo||s===wo)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Eo)return a===Ce?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===wo)return a===Ce?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ao||s===To||s===Ro||s===Co||s===Po||s===Lo||s===Do||s===Uo||s===Io||s===Fo||s===No||s===Oo||s===Bo||s===Go)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Ao)return a===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===To)return a===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ro)return a===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Co)return a===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Po)return a===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Lo)return a===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Do)return a===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Uo)return a===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Io)return a===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fo)return a===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===No)return a===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Oo)return a===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bo)return a===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Go)return a===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===kr)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===kr)return a===Ce?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Kc||s===zo||s===ko||s===Ho)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===kr)return l.COMPRESSED_RED_RGTC1_EXT;if(s===zo)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ko)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ho)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Un?n?i.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class om extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jt extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const am={type:"move"};class ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const l=this._targetRay,h=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(u,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const p=u.joints["index-finger-tip"],o=u.joints["thumb-tip"],c=p.position.distanceTo(o.position),d=.02,g=.005;u.inputState.pinching&&c>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(am)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class lm extends Ct{constructor(e,t,n,r,s,a,l,h,u,p){if(p=p!==void 0?p:In,p!==In&&p!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===In&&(n=vn),n===void 0&&p===fi&&(n=Un),super(null,r,s,a,l,h,p,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:bt,this.minFilter=h!==void 0?h:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cm extends vi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,l="local-floor",h=1,u=null,p=null,o=null,c=null,d=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const x=[],v=[];let y=null;const w=new Ut;w.layers.enable(1),w.viewport=new ct;const T=new Ut;T.layers.enable(2),T.viewport=new ct;const P=[w,T],U=new om;U.layers.enable(1),U.layers.enable(2);let S=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(O){y=O},this.getController=function(O){let Z=x[O];return Z===void 0&&(Z=new ds,x[O]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(O){let Z=x[O];return Z===void 0&&(Z=new ds,x[O]=Z),Z.getGripSpace()},this.getHand=function(O){let Z=x[O];return Z===void 0&&(Z=new ds,x[O]=Z),Z.getHandSpace()};function q(O){const Z=v.indexOf(O.inputSource);if(Z===-1)return;const Q=x[Z];Q!==void 0&&(Q.update(O.inputSource,O.frame,u||a),Q.dispatchEvent({type:O.type,data:O.inputSource}))}function Y(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",N);for(let O=0;O<x.length;O++){const Z=v[O];Z!==null&&(v[O]=null,x[O].disconnect(Z))}S=null,A=null,e.setRenderTarget(m),d=null,c=null,o=null,r=null,f=null,me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){l=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(O){u=O},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return o},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:d}),f=new zn(d.framebufferWidth,d.framebufferHeight,{format:Vt,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,Q=null,ue=null;_.depth&&(ue=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?fi:In,Q=_.stencil?Un:vn);const he={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};o=new XRWebGLBinding(r,t),c=o.createProjectionLayer(he),r.updateRenderState({layers:[c]}),f=new zn(c.textureWidth,c.textureHeight,{format:Vt,type:Mn,depthTexture:new lm(c.textureWidth,c.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Se=e.properties.get(f);Se.__ignoreDepthValues=c.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(h),u=null,a=await r.requestReferenceSpace(l),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(O){for(let Z=0;Z<O.removed.length;Z++){const Q=O.removed[Z],ue=v.indexOf(Q);ue>=0&&(v[ue]=null,x[ue].disconnect(Q))}for(let Z=0;Z<O.added.length;Z++){const Q=O.added[Z];let ue=v.indexOf(Q);if(ue===-1){for(let Se=0;Se<x.length;Se++)if(Se>=v.length){v.push(Q),ue=Se;break}else if(v[Se]===null){v[Se]=Q,ue=Se;break}if(ue===-1)break}const he=x[ue];he&&he.connect(Q)}}const B=new C,z=new C;function J(O,Z,Q){B.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(Q.matrixWorld);const ue=B.distanceTo(z),he=Z.projectionMatrix.elements,Se=Q.projectionMatrix.elements,Ie=he[14]/(he[10]-1),Ee=he[14]/(he[10]+1),st=(he[9]+1)/he[5],Ge=(he[9]-1)/he[5],I=(he[8]-1)/he[0],dt=(Se[8]+1)/Se[0],ye=Ie*I,Fe=Ie*dt,we=ue/(-I+dt),Xe=we*-I;Z.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Xe),O.translateZ(we),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const Be=Ie+we,Pe=Ee+we,Ve=ye-Xe,ht=Fe+(ue-Xe),pt=st*Ee/Pe*Be,E=Ge*Ee/Pe*Be;O.projectionMatrix.makePerspective(Ve,ht,pt,E,Be,Pe),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function X(O,Z){Z===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Z.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCameraXR=function(O){if(r===null)return O;y&&(O=y),U.near=T.near=w.near=O.near,U.far=T.far=w.far=O.far,(S!==U.near||A!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),S=U.near,A=U.far);const Z=O.parent,Q=U.cameras;X(U,Z);for(let ue=0;ue<Q.length;ue++)X(Q[ue],Z);return Q.length===2?J(U,w,T):U.projectionMatrix.copy(w.projectionMatrix),y&&j(U,Z),U};function j(O,Z){const Q=y;Z===null?Q.matrix.copy(O.matrixWorld):(Q.matrix.copy(Z.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(O.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0);const ue=Q.children;for(let he=0,Se=ue.length;he<Se;he++)ue[he].updateMatrixWorld(!0);Q.projectionMatrix.copy(O.projectionMatrix),Q.projectionMatrixInverse.copy(O.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Is*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getFoveation=function(){if(!(c===null&&d===null))return h},this.setFoveation=function(O){h=O,c!==null&&(c.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)};let ee=null;function K(O,Z){if(p=Z.getViewerPose(u||a),g=Z,p!==null){const Q=p.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let ue=!1;Q.length!==U.cameras.length&&(U.cameras.length=0,ue=!0);for(let he=0;he<Q.length;he++){const Se=Q[he];let Ie=null;if(d!==null)Ie=d.getViewport(Se);else{const st=o.getViewSubImage(c,Se);Ie=st.viewport,he===0&&(e.setRenderTargetTextures(f,st.colorTexture,c.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(f))}let Ee=P[he];Ee===void 0&&(Ee=new Ut,Ee.layers.enable(he),Ee.viewport=new ct,P[he]=Ee),Ee.matrix.fromArray(Se.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Se.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),he===0&&(U.matrix.copy(Ee.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ue===!0&&U.cameras.push(Ee)}}for(let Q=0;Q<x.length;Q++){const ue=v[Q],he=x[Q];ue!==null&&he!==void 0&&he.update(ue,Z,u||a)}ee&&ee(O,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const me=new El;me.setAnimationLoop(K),this.setAnimationLoop=function(O){ee=O},this.dispose=function(){}}}function um(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ml(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),o(m,f)):f.isMeshPhongMaterial?(s(m,f),p(m,f)):f.isMeshStandardMaterial?(s(m,f),c(m,f),f.isMeshPhysicalMaterial&&d(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&l(m,f)):f.isPointsMaterial?h(m,f,x,v):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Et&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Et&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function l(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function h(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function p(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function o(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function c(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Et&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function dm(i,e,t,n){let r={},s={},a=[];const l=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function u(x,v){let y=r[x.id];y===void 0&&(g(x),y=p(x),r[x.id]=y,x.addEventListener("dispose",m));const w=v.program;n.updateUBOMapping(x,w);const T=e.render.frame;s[x.id]!==T&&(c(x),s[x.id]=T)}function p(x){const v=o();x.__bindingPointIndex=v;const y=i.createBuffer(),w=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function o(){for(let x=0;x<l;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(x){const v=r[x.id],y=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,P=y.length;T<P;T++){const U=y[T];if(d(U,T,w)===!0){const S=U.__offset,A=Array.isArray(U.value)?U.value:[U.value];let q=0;for(let Y=0;Y<A.length;Y++){const N=A[Y],B=_(N);typeof N=="number"?(U.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,S+q,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=N.elements[0],U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=N.elements[0],U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=N.elements[0]):(N.toArray(U.__data,q),q+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,S,U.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,v,y){const w=x.value;if(y[v]===void 0){if(typeof w=="number")y[v]=w;else{const T=Array.isArray(w)?w:[w],P=[];for(let U=0;U<T.length;U++)P.push(T[U].clone());y[v]=P}return!0}else if(typeof w=="number"){if(y[v]!==w)return y[v]=w,!0}else{const T=Array.isArray(y[v])?y[v]:[y[v]],P=Array.isArray(w)?w:[w];for(let U=0;U<T.length;U++){const S=T[U];if(S.equals(P[U])===!1)return S.copy(P[U]),!0}}return!1}function g(x){const v=x.uniforms;let y=0;const w=16;let T=0;for(let P=0,U=v.length;P<U;P++){const S=v[P],A={boundary:0,storage:0},q=Array.isArray(S.value)?S.value:[S.value];for(let Y=0,N=q.length;Y<N;Y++){const B=q[Y],z=_(B);A.boundary+=z.boundary,A.storage+=z.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,P>0){T=y%w;const Y=w-T;T!==0&&Y-A.boundary<0&&(y+=w-T,S.__offset=y)}y+=A.storage}return T=y%w,T>0&&(y+=w-T),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:h,update:u,dispose:f}}function hm(){const i=Sr("canvas");return i.style.display="block",i}class Cl{constructor(e={}){const{canvas:t=hm(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:o=!1}=e;this.isWebGLRenderer=!0;let c;n!==null?c=n.getContextAttributes().alpha:c=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ce,this.useLegacyLights=!0,this.toneMapping=dn,this.toneMappingExposure=1;const v=this;let y=!1,w=0,T=0,P=null,U=-1,S=null;const A=new ct,q=new ct;let Y=null;const N=new Te(0);let B=0,z=t.width,J=t.height,X=1,j=null,ee=null;const K=new ct(0,0,z,J),me=new ct(0,0,z,J);let O=!1;const Z=new Qs;let Q=!1,ue=!1,he=null;const Se=new Je,Ie=new ke,Ee=new C,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return P===null?X:1}let I=n;function dt(b,F){for(let k=0;k<b.length;k++){const D=b[k],V=t.getContext(D,F);if(V!==null)return V}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:o};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$s}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",ie,!1),I===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),I=dt(F,b),I===null)throw dt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ye,Fe,we,Xe,Be,Pe,Ve,ht,pt,E,M,H,te,ne,oe,ge,ae,W,_e,ve,Me,fe,pe,Ne;function We(){ye=new bf(I),Fe=new _f(I,ye,e),ye.init(Fe),fe=new sm(I,ye,Fe),we=new im(I,ye,Fe),Xe=new Af(I),Be=new Vp,Pe=new rm(I,ye,we,Be,Fe,fe,Xe),Ve=new xf(v),ht=new yf(v),pt=new Ou(I,Fe),pe=new mf(I,ye,pt,Fe),E=new Ef(I,pt,Xe,pe),M=new Pf(I,E,pt,Xe),_e=new Cf(I,Fe,Pe),ge=new vf(Be),H=new Hp(v,Ve,ht,ye,Fe,pe,ge),te=new um(v,Be),ne=new Xp,oe=new Jp(ye,Fe),W=new pf(v,Ve,ht,we,M,c,h),ae=new nm(v,M,Fe),Ne=new dm(I,Xe,Fe,we),ve=new gf(I,ye,Xe,Fe),Me=new wf(I,ye,Xe,Fe),Xe.programs=H.programs,v.capabilities=Fe,v.extensions=ye,v.properties=Be,v.renderLists=ne,v.shadowMap=ae,v.state=we,v.info=Xe}We();const R=new cm(v,I);this.xr=R,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(z,J,!1))},this.getSize=function(b){return b.set(z,J)},this.setSize=function(b,F,k=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,J=F,t.width=Math.floor(b*X),t.height=Math.floor(F*X),k===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(z*X,J*X).floor()},this.setDrawingBufferSize=function(b,F,k){z=b,J=F,X=k,t.width=Math.floor(b*k),t.height=Math.floor(F*k),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,F,k,D){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,F,k,D),we.viewport(A.copy(K).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(me)},this.setScissor=function(b,F,k,D){b.isVector4?me.set(b.x,b.y,b.z,b.w):me.set(b,F,k,D),we.scissor(q.copy(me).multiplyScalar(X).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(b){we.setScissorTest(O=b)},this.setOpaqueSort=function(b){j=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(b=!0,F=!0,k=!0){let D=0;if(b){let V=!1;if(P!==null){const de=P.texture.format;V=de===dl||de===ul||de===cl}if(V){const de=P.texture.type,xe=de===Mn||de===vn||de===js||de===Un||de===al||de===ll,be=W.getClearColor(),Ae=W.getClearAlpha(),Oe=be.r,Re=be.g,Le=be.b,qe=Be.get(P).__webglFramebuffer;xe?(d[0]=Oe,d[1]=Re,d[2]=Le,d[3]=Ae,I.clearBufferuiv(I.COLOR,qe,d)):(g[0]=Oe,g[1]=Re,g[2]=Le,g[3]=Ae,I.clearBufferiv(I.COLOR,qe,g))}else D|=I.COLOR_BUFFER_BIT}F&&(D|=I.DEPTH_BUFFER_BIT),k&&(D|=I.STENCIL_BUFFER_BIT),I.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),ne.dispose(),oe.dispose(),Be.dispose(),Ve.dispose(),ht.dispose(),M.dispose(),pe.dispose(),Ne.dispose(),H.dispose(),R.dispose(),R.removeEventListener("sessionstart",je),R.removeEventListener("sessionend",Xt),he&&(he.dispose(),he=null),St.stop()};function se(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=Xe.autoReset,F=ae.enabled,k=ae.autoUpdate,D=ae.needsUpdate,V=ae.type;We(),Xe.autoReset=b,ae.enabled=F,ae.autoUpdate=k,ae.needsUpdate=D,ae.type=V}function ie(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function le(b){const F=b.target;F.removeEventListener("dispose",le),He(F)}function He(b){Ye(b),Be.remove(b)}function Ye(b){const F=Be.get(b).programs;F!==void 0&&(F.forEach(function(k){H.releaseProgram(k)}),b.isShaderMaterial&&H.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,k,D,V,de){F===null&&(F=st);const xe=V.isMesh&&V.matrixWorld.determinant()<0,be=lc(b,F,k,D,V);we.setMaterial(D,xe);let Ae=k.index,Oe=1;D.wireframe===!0&&(Ae=E.getWireframeAttribute(k),Oe=2);const Re=k.drawRange,Le=k.attributes.position;let qe=Re.start*Oe,Ze=(Re.start+Re.count)*Oe;de!==null&&(qe=Math.max(qe,de.start*Oe),Ze=Math.min(Ze,(de.start+de.count)*Oe)),Ae!==null?(qe=Math.max(qe,0),Ze=Math.min(Ze,Ae.count)):Le!=null&&(qe=Math.max(qe,0),Ze=Math.min(Ze,Le.count));const It=Ze-qe;if(It<0||It===1/0)return;pe.setup(V,D,be,k,Ae);let en,et=ve;if(Ae!==null&&(en=pt.get(Ae),et=Me,et.setIndex(en)),V.isMesh)D.wireframe===!0?(we.setLineWidth(D.wireframeLinewidth*Ge()),et.setMode(I.LINES)):et.setMode(I.TRIANGLES);else if(V.isLine){let ze=D.linewidth;ze===void 0&&(ze=1),we.setLineWidth(ze*Ge()),V.isLineSegments?et.setMode(I.LINES):V.isLineLoop?et.setMode(I.LINE_LOOP):et.setMode(I.LINE_STRIP)}else V.isPoints?et.setMode(I.POINTS):V.isSprite&&et.setMode(I.TRIANGLES);if(V.isInstancedMesh)et.renderInstances(qe,It,V.count);else if(k.isInstancedBufferGeometry){const ze=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Dr=Math.min(k.instanceCount,ze);et.renderInstances(qe,It,Dr)}else et.render(qe,It)},this.compile=function(b,F){function k(D,V,de){D.transparent===!0&&D.side===$t&&D.forceSinglePass===!1?(D.side=Et,D.needsUpdate=!0,zi(D,V,de),D.side=yn,D.needsUpdate=!0,zi(D,V,de),D.side=$t):zi(D,V,de)}m=oe.get(b),m.init(),x.push(m),b.traverseVisible(function(D){D.isLight&&D.layers.test(F.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights(v.useLegacyLights),b.traverse(function(D){const V=D.material;if(V)if(Array.isArray(V))for(let de=0;de<V.length;de++){const xe=V[de];k(xe,b,D)}else k(V,b,D)}),x.pop(),m=null};let Qe=null;function En(b){Qe&&Qe(b)}function je(){St.stop()}function Xt(){St.start()}const St=new El;St.setAnimationLoop(En),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(b){Qe=b,R.setAnimationLoop(b),b===null?St.stop():St.start()},R.addEventListener("sessionstart",je),R.addEventListener("sessionend",Xt),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(F=R.updateCameraXR(F)),b.isScene===!0&&b.onBeforeRender(v,b,F,P),m=oe.get(b,x.length),m.init(),x.push(m),Se.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(Se),ue=this.localClippingEnabled,Q=ge.init(this.clippingPlanes,ue),_=ne.get(b,f.length),_.init(),f.push(_),oo(b,F,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,ee),Q===!0&&ge.beginShadows();const k=m.state.shadowsArray;if(ae.render(k,b,F),Q===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,W.render(_,b),m.setupLights(v.useLegacyLights),F.isArrayCamera){const D=F.cameras;for(let V=0,de=D.length;V<de;V++){const xe=D[V];ao(_,b,xe,xe.viewport)}}else ao(_,b,F);P!==null&&(Pe.updateMultisampleRenderTarget(P),Pe.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(v,b,F),pe.resetDefaultState(),U=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function oo(b,F,k,D){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){D&&Ee.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Se);const xe=M.update(b),be=b.material;be.visible&&_.push(b,xe,be,k,Ee.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){b.isSkinnedMesh&&b.skeleton.frame!==Xe.render.frame&&(b.skeleton.update(),b.skeleton.frame=Xe.render.frame);const xe=M.update(b),be=b.material;if(D&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ee.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ee.copy(xe.boundingSphere.center)),Ee.applyMatrix4(b.matrixWorld).applyMatrix4(Se)),Array.isArray(be)){const Ae=xe.groups;for(let Oe=0,Re=Ae.length;Oe<Re;Oe++){const Le=Ae[Oe],qe=be[Le.materialIndex];qe&&qe.visible&&_.push(b,xe,qe,k,Ee.z,Le)}}else be.visible&&_.push(b,xe,be,k,Ee.z,null)}}const de=b.children;for(let xe=0,be=de.length;xe<be;xe++)oo(de[xe],F,k,D)}function ao(b,F,k,D){const V=b.opaque,de=b.transmissive,xe=b.transparent;m.setupLightsView(k),Q===!0&&ge.setGlobalState(v.clippingPlanes,k),de.length>0&&ac(V,de,F,k),D&&we.viewport(A.copy(D)),V.length>0&&Gi(V,F,k),de.length>0&&Gi(de,F,k),xe.length>0&&Gi(xe,F,k),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ac(b,F,k,D){const V=Fe.isWebGL2;he===null&&(he=new zn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Li:Mn,minFilter:Pi,samples:V&&l===!0?4:0})),v.getDrawingBufferSize(Ie),V?he.setSize(Ie.x,Ie.y):he.setSize(Fs(Ie.x),Fs(Ie.y));const de=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(N),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();const xe=v.toneMapping;v.toneMapping=dn,Gi(b,k,D),Pe.updateMultisampleRenderTarget(he),Pe.updateRenderTargetMipmap(he);let be=!1;for(let Ae=0,Oe=F.length;Ae<Oe;Ae++){const Re=F[Ae],Le=Re.object,qe=Re.geometry,Ze=Re.material,It=Re.group;if(Ze.side===$t&&Le.layers.test(D.layers)){const en=Ze.side;Ze.side=Et,Ze.needsUpdate=!0,lo(Le,k,D,qe,Ze,It),Ze.side=en,Ze.needsUpdate=!0,be=!0}}be===!0&&(Pe.updateMultisampleRenderTarget(he),Pe.updateRenderTargetMipmap(he)),v.setRenderTarget(de),v.setClearColor(N,B),v.toneMapping=xe}function Gi(b,F,k){const D=F.isScene===!0?F.overrideMaterial:null;for(let V=0,de=b.length;V<de;V++){const xe=b[V],be=xe.object,Ae=xe.geometry,Oe=D===null?xe.material:D,Re=xe.group;be.layers.test(k.layers)&&lo(be,F,k,Ae,Oe,Re)}}function lo(b,F,k,D,V,de){b.onBeforeRender(v,F,k,D,V,de),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(v,F,k,D,b,de),V.transparent===!0&&V.side===$t&&V.forceSinglePass===!1?(V.side=Et,V.needsUpdate=!0,v.renderBufferDirect(k,F,D,V,b,de),V.side=yn,V.needsUpdate=!0,v.renderBufferDirect(k,F,D,V,b,de),V.side=$t):v.renderBufferDirect(k,F,D,V,b,de),b.onAfterRender(v,F,k,D,V,de)}function zi(b,F,k){F.isScene!==!0&&(F=st);const D=Be.get(b),V=m.state.lights,de=m.state.shadowsArray,xe=V.state.version,be=H.getParameters(b,V.state,de,F,k),Ae=H.getProgramCacheKey(be);let Oe=D.programs;D.environment=b.isMeshStandardMaterial?F.environment:null,D.fog=F.fog,D.envMap=(b.isMeshStandardMaterial?ht:Ve).get(b.envMap||D.environment),Oe===void 0&&(b.addEventListener("dispose",le),Oe=new Map,D.programs=Oe);let Re=Oe.get(Ae);if(Re!==void 0){if(D.currentProgram===Re&&D.lightsStateVersion===xe)return co(b,be),Re}else be.uniforms=H.getUniforms(b),b.onBuild(k,be,v),b.onBeforeCompile(be,v),Re=H.acquireProgram(be,Ae),Oe.set(Ae,Re),D.uniforms=be.uniforms;const Le=D.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=ge.uniform),co(b,be),D.needsLights=uc(b),D.lightsStateVersion=xe,D.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.directionalShadowMap.value=V.state.directionalShadowMap,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotShadowMap.value=V.state.spotShadowMap,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMap.value=V.state.pointShadowMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix);const qe=Re.getUniforms(),Ze=gr.seqWithValue(qe.seq,Le);return D.currentProgram=Re,D.uniformsList=Ze,Re}function co(b,F){const k=Be.get(b);k.outputColorSpace=F.outputColorSpace,k.instancing=F.instancing,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function lc(b,F,k,D,V){F.isScene!==!0&&(F=st),Pe.resetTextureUnits();const de=F.fog,xe=D.isMeshStandardMaterial?F.environment:null,be=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zt,Ae=(D.isMeshStandardMaterial?ht:Ve).get(D.envMap||xe),Oe=D.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Re=!!k.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Le=!!k.morphAttributes.position,qe=!!k.morphAttributes.normal,Ze=!!k.morphAttributes.color,It=D.toneMapped?v.toneMapping:dn,en=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=en!==void 0?en.length:0,ze=Be.get(D),Dr=m.state.lights;if(Q===!0&&(ue===!0||b!==S)){const wt=b===S&&D.id===U;ge.setState(D,b,wt)}let ot=!1;D.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Dr.state.version||ze.outputColorSpace!==be||V.isInstancedMesh&&ze.instancing===!1||!V.isInstancedMesh&&ze.instancing===!0||V.isSkinnedMesh&&ze.skinning===!1||!V.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Ae||D.fog===!0&&ze.fog!==de||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ge.numPlanes||ze.numIntersection!==ge.numIntersection)||ze.vertexAlphas!==Oe||ze.vertexTangents!==Re||ze.morphTargets!==Le||ze.morphNormals!==qe||ze.morphColors!==Ze||ze.toneMapping!==It||Fe.isWebGL2===!0&&ze.morphTargetsCount!==et)&&(ot=!0):(ot=!0,ze.__version=D.version);let wn=ze.currentProgram;ot===!0&&(wn=zi(D,F,V));let uo=!1,Si=!1,Ur=!1;const Mt=wn.getUniforms(),An=ze.uniforms;if(we.useProgram(wn.program)&&(uo=!0,Si=!0,Ur=!0),D.id!==U&&(U=D.id,Si=!0),uo||S!==b){if(Mt.setValue(I,"projectionMatrix",b.projectionMatrix),Fe.logarithmicDepthBuffer&&Mt.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),S!==b&&(S=b,Si=!0,Ur=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const wt=Mt.map.cameraPosition;wt!==void 0&&wt.setValue(I,Ee.setFromMatrixPosition(b.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Mt.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||V.isSkinnedMesh)&&Mt.setValue(I,"viewMatrix",b.matrixWorldInverse)}if(V.isSkinnedMesh){Mt.setOptional(I,V,"bindMatrix"),Mt.setOptional(I,V,"bindMatrixInverse");const wt=V.skeleton;wt&&(Fe.floatVertexTextures?(wt.boneTexture===null&&wt.computeBoneTexture(),Mt.setValue(I,"boneTexture",wt.boneTexture,Pe),Mt.setValue(I,"boneTextureSize",wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ir=k.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0&&Fe.isWebGL2===!0)&&_e.update(V,k,wn),(Si||ze.receiveShadow!==V.receiveShadow)&&(ze.receiveShadow=V.receiveShadow,Mt.setValue(I,"receiveShadow",V.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(An.envMap.value=Ae,An.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Si&&(Mt.setValue(I,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&cc(An,Ur),de&&D.fog===!0&&te.refreshFogUniforms(An,de),te.refreshMaterialUniforms(An,D,X,J,he),gr.upload(I,ze.uniformsList,An,Pe)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(gr.upload(I,ze.uniformsList,An,Pe),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Mt.setValue(I,"center",V.center),Mt.setValue(I,"modelViewMatrix",V.modelViewMatrix),Mt.setValue(I,"normalMatrix",V.normalMatrix),Mt.setValue(I,"modelMatrix",V.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const wt=D.uniformsGroups;for(let Fr=0,dc=wt.length;Fr<dc;Fr++)if(Fe.isWebGL2){const ho=wt[Fr];Ne.update(ho,wn),Ne.bind(ho,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function cc(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function uc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,F,k){Be.get(b.texture).__webglTexture=F,Be.get(b.depthTexture).__webglTexture=k;const D=Be.get(b);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=k===void 0,D.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,F){const k=Be.get(b);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,k=0){P=b,w=F,T=k;let D=!0,V=null,de=!1,xe=!1;if(b){const Ae=Be.get(b);Ae.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(I.FRAMEBUFFER,null),D=!1):Ae.__webglFramebuffer===void 0?Pe.setupRenderTarget(b):Ae.__hasExternalTextures&&Pe.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(xe=!0);const Re=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(V=Re[F],de=!0):Fe.isWebGL2&&b.samples>0&&Pe.useMultisampledRTT(b)===!1?V=Be.get(b).__webglMultisampledFramebuffer:V=Re,A.copy(b.viewport),q.copy(b.scissor),Y=b.scissorTest}else A.copy(K).multiplyScalar(X).floor(),q.copy(me).multiplyScalar(X).floor(),Y=O;if(we.bindFramebuffer(I.FRAMEBUFFER,V)&&Fe.drawBuffers&&D&&we.drawBuffers(b,V),we.viewport(A),we.scissor(q),we.setScissorTest(Y),de){const Ae=Be.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ae.__webglTexture,k)}else if(xe){const Ae=Be.get(b.texture),Oe=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,k||0,Oe)}U=-1},this.readRenderTargetPixels=function(b,F,k,D,V,de,xe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){we.bindFramebuffer(I.FRAMEBUFFER,be);try{const Ae=b.texture,Oe=Ae.format,Re=Ae.type;if(Oe!==Vt&&fe.convert(Oe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===Li&&(ye.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Re!==Mn&&fe.convert(Re)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===xn&&(Fe.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-D&&k>=0&&k<=b.height-V&&I.readPixels(F,k,D,V,fe.convert(Oe),fe.convert(Re),de)}finally{const Ae=P!==null?Be.get(P).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(b,F,k=0){const D=Math.pow(2,-k),V=Math.floor(F.image.width*D),de=Math.floor(F.image.height*D);Pe.setTexture2D(F,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,b.x,b.y,V,de),we.unbindTexture()},this.copyTextureToTexture=function(b,F,k,D=0){const V=F.image.width,de=F.image.height,xe=fe.convert(k.format),be=fe.convert(k.type);Pe.setTexture2D(k,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment),F.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,D,b.x,b.y,V,de,xe,be,F.image.data):F.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,D,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,xe,F.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,D,b.x,b.y,xe,be,F.image),D===0&&k.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(b,F,k,D,V=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=b.max.x-b.min.x+1,xe=b.max.y-b.min.y+1,be=b.max.z-b.min.z+1,Ae=fe.convert(D.format),Oe=fe.convert(D.type);let Re;if(D.isData3DTexture)Pe.setTexture3D(D,0),Re=I.TEXTURE_3D;else if(D.isDataArrayTexture)Pe.setTexture2DArray(D,0),Re=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const Le=I.getParameter(I.UNPACK_ROW_LENGTH),qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ze=I.getParameter(I.UNPACK_SKIP_PIXELS),It=I.getParameter(I.UNPACK_SKIP_ROWS),en=I.getParameter(I.UNPACK_SKIP_IMAGES),et=k.isCompressedTexture?k.mipmaps[0]:k.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,et.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,et.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,b.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,b.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,b.min.z),k.isDataTexture||k.isData3DTexture?I.texSubImage3D(Re,V,F.x,F.y,F.z,de,xe,be,Ae,Oe,et.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Re,V,F.x,F.y,F.z,de,xe,be,Ae,et.data)):I.texSubImage3D(Re,V,F.x,F.y,F.z,de,xe,be,Ae,Oe,et),I.pixelStorei(I.UNPACK_ROW_LENGTH,Le),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,It),I.pixelStorei(I.UNPACK_SKIP_IMAGES,en),V===0&&D.generateMipmaps&&I.generateMipmap(Re),we.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Pe.setTextureCube(b,0):b.isData3DTexture?Pe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Pe.setTexture2DArray(b,0):Pe.setTexture2D(b,0),we.unbindTexture()},this.resetState=function(){w=0,T=0,P=null,we.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ce?Fn:hl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fn?Ce:Zt}}class fm extends Cl{}fm.prototype.isWebGL1Renderer=!0;class pm extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class On extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ca=new C,Pa=new C,La=new Je,hs=new wr,lr=new Oi;class Os extends ut{constructor(e=new xt,t=new On){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ca.fromBufferAttribute(t,r-1),Pa.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ca.distanceTo(Pa);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),lr.radius+=s,e.ray.intersectsSphere(lr)===!1)return;La.copy(r).invert(),hs.copy(e.ray).applyMatrix4(La);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=new C,p=new C,o=new C,c=new C,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=f,y=x-1;v<y;v+=d){const w=g.getX(v),T=g.getX(v+1);if(u.fromBufferAttribute(m,w),p.fromBufferAttribute(m,T),hs.distanceSqToSegment(u,p,c,o)>h)continue;c.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(c);U<e.near||U>e.far||t.push({distance:U,point:o.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let v=f,y=x-1;v<y;v+=d){if(u.fromBufferAttribute(m,v),p.fromBufferAttribute(m,v+1),hs.distanceSqToSegment(u,p,c,o)>h)continue;c.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(c);T<e.near||T>e.far||t.push({distance:T,point:o.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}const Da=new C,Ua=new C;class Bs extends Os{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Da.fromBufferAttribute(t,r),Ua.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Da.distanceTo(Ua);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ai extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ia=new Je,Gs=new wr,cr=new Oi,ur=new C;class fs extends ut{constructor(e=new xt,t=new Ai){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),cr.radius+=s,e.ray.intersectsSphere(cr)===!1)return;Ia.copy(r).invert(),Gs.copy(e.ray).applyMatrix4(Ia);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=n.index,o=n.attributes.position;if(u!==null){const c=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=c,_=d;g<_;g++){const m=u.getX(g);ur.fromBufferAttribute(o,m),Fa(ur,m,h,r,e,t,this)}}else{const c=Math.max(0,a.start),d=Math.min(o.count,a.start+a.count);for(let g=c,_=d;g<_;g++)ur.fromBufferAttribute(o,g),Fa(ur,g,h,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Fa(i,e,t,n,r,s,a){const l=Gs.distanceSqToPoint(i);if(l<t){const h=new C;Gs.closestPointToPoint(i,h),h.applyMatrix4(n);const u=r.ray.origin.distanceTo(h);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:h,index:e,face:null,object:a})}}class mm{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let l=0,h=s-1,u;for(;l<=h;)if(r=Math.floor(l+(h-l)/2),u=n[r]-a,u<0)l=r+1;else if(u>0)h=r-1;else{h=r;break}if(r=h,n[r]===a)return r/(s-1);const p=n[r],c=n[r+1]-p,d=(a-p)/c;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),l=this.getPoint(s),h=t||(a.isVector2?new ke:new C);return h.copy(l).sub(a).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,r=[],s=[],a=[],l=new C,h=new Je;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new C)}s[0]=new C,a[0]=new C;let u=Number.MAX_VALUE;const p=Math.abs(r[0].x),o=Math.abs(r[0].y),c=Math.abs(r[0].z);p<=u&&(u=p,n.set(1,0,0)),o<=u&&(u=o,n.set(0,1,0)),c<=u&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],l),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),l.crossVectors(r[d-1],r[d]),l.length()>Number.EPSILON){l.normalize();const g=Math.acos(ft(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(h.makeRotationAxis(l,g))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(ft(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(l.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(h.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function to(){let i=0,e=0,t=0,n=0;function r(s,a,l,h){i=s,e=l,t=-3*s+3*a-2*l-h,n=2*s-2*a+l+h}return{initCatmullRom:function(s,a,l,h,u){r(a,l,u*(l-s),u*(h-a))},initNonuniformCatmullRom:function(s,a,l,h,u,p,o){let c=(a-s)/u-(l-s)/(u+p)+(l-a)/p,d=(l-a)/p-(h-a)/(p+o)+(h-l)/o;c*=p,d*=p,r(a,l,c,d)},calc:function(s){const a=s*s,l=a*s;return i+e*s+t*a+n*l}}}const dr=new C,ps=new to,ms=new to,gs=new to;class gm extends mm{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new C){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1);let u,p;this.closed||l>0?u=r[(l-1)%s]:(dr.subVectors(r[0],r[1]).add(r[0]),u=dr);const o=r[l%s],c=r[(l+1)%s];if(this.closed||l+2<s?p=r[(l+2)%s]:(dr.subVectors(r[s-1],r[s-2]).add(r[s-1]),p=dr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(o),d),_=Math.pow(o.distanceToSquared(c),d),m=Math.pow(c.distanceToSquared(p),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ps.initNonuniformCatmullRom(u.x,o.x,c.x,p.x,g,_,m),ms.initNonuniformCatmullRom(u.y,o.y,c.y,p.y,g,_,m),gs.initNonuniformCatmullRom(u.z,o.z,c.z,p.z,g,_,m)}else this.curveType==="catmullrom"&&(ps.initCatmullRom(u.x,o.x,c.x,p.x,this.tension),ms.initCatmullRom(u.y,o.y,c.y,p.y,this.tension),gs.initCatmullRom(u.z,o.z,c.z,p.z,this.tension));return n.set(ps.calc(h),ms.calc(h),gs.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Mr extends xt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:h};const u=this;r=Math.floor(r),s=Math.floor(s);const p=[],o=[],c=[],d=[];let g=0;const _=[],m=n/2;let f=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(p),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(d,2));function x(){const y=new C,w=new C;let T=0;const P=(t-e)/n;for(let U=0;U<=s;U++){const S=[],A=U/s,q=A*(t-e)+e;for(let Y=0;Y<=r;Y++){const N=Y/r,B=N*h+l,z=Math.sin(B),J=Math.cos(B);w.x=q*z,w.y=-A*n+m,w.z=q*J,o.push(w.x,w.y,w.z),y.set(z,P,J).normalize(),c.push(y.x,y.y,y.z),d.push(N,1-A),S.push(g++)}_.push(S)}for(let U=0;U<r;U++)for(let S=0;S<s;S++){const A=_[S][U],q=_[S+1][U],Y=_[S+1][U+1],N=_[S][U+1];p.push(A,q,N),p.push(q,Y,N),T+=6}u.addGroup(f,T,0),f+=T}function v(y){const w=g,T=new ke,P=new C;let U=0;const S=y===!0?e:t,A=y===!0?1:-1;for(let Y=1;Y<=r;Y++)o.push(0,m*A,0),c.push(0,A,0),d.push(.5,.5),g++;const q=g;for(let Y=0;Y<=r;Y++){const B=Y/r*h+l,z=Math.cos(B),J=Math.sin(B);P.x=S*J,P.y=m*A,P.z=S*z,o.push(P.x,P.y,P.z),c.push(0,A,0),T.x=z*.5+.5,T.y=J*.5*A+.5,d.push(T.x,T.y),g++}for(let Y=0;Y<r;Y++){const N=w+Y,B=q+Y;y===!0?p.push(B,B+1,N):p.push(B+1,B,N),U+=3}u.addGroup(f,U,y===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class no extends xt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const l=[],h=[],u=[],p=[];let o=e;const c=(t-e)/r,d=new C,g=new ke;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const f=s+m/n*a;d.x=o*Math.cos(f),d.y=o*Math.sin(f),h.push(d.x,d.y,d.z),u.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,p.push(g.x,g.y)}o+=c}for(let _=0;_<r;_++){const m=_*(n+1);for(let f=0;f<n;f++){const x=f+m,v=x,y=x+n+1,w=x+n+2,T=x+1;l.push(v,y,T),l.push(y,w,T)}}this.setIndex(l),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mi extends Qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ks,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _m extends Qt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Te(16777215),this.specular=new Te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ks,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ys,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Na={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class vm{constructor(e,t,n){const r=this;let s=!1,a=0,l=0,h;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){l++,s===!1&&r.onStart!==void 0&&r.onStart(p,a,l),s=!0},this.itemEnd=function(p){a++,r.onProgress!==void 0&&r.onProgress(p,a,l),a===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,o){return u.push(p,o),this},this.removeHandler=function(p){const o=u.indexOf(p);return o!==-1&&u.splice(o,2),this},this.getHandler=function(p){for(let o=0,c=u.length;o<c;o+=2){const d=u[o],g=u[o+1];if(d.global&&(d.lastIndex=0),d.test(p))return g}return null}}}const xm=new vm;class Pl{constructor(e){this.manager=e!==void 0?e:xm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ln={};class Sm extends Error{constructor(e,t){super(e),this.response=t}}class Mm extends Pl{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Na.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ln[e]!==void 0){ln[e].push({onLoad:t,onProgress:n,onError:r});return}ln[e]=[],ln[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,h=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const p=ln[e],o=u.body.getReader(),c=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),d=c?parseInt(c):0,g=d!==0;let _=0;const m=new ReadableStream({start(f){x();function x(){o.read().then(({done:v,value:y})=>{if(v)f.close();else{_+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let T=0,P=p.length;T<P;T++){const U=p[T];U.onProgress&&U.onProgress(w)}f.enqueue(y),x()}})}}});return new Response(m)}else throw new Sm(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(h){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(p=>new DOMParser().parseFromString(p,l));case"json":return u.json();default:if(l===void 0)return u.text();{const o=/charset="?([^;"\s]*)"?/i.exec(l),c=o&&o[1]?o[1].toLowerCase():void 0,d=new TextDecoder(c);return u.arrayBuffer().then(g=>d.decode(g))}}}).then(u=>{Na.add(e,u);const p=ln[e];delete ln[e];for(let o=0,c=p.length;o<c;o++){const d=p[o];d.onLoad&&d.onLoad(u)}}).catch(u=>{const p=ln[e];if(p===void 0)throw this.manager.itemError(e),u;delete ln[e];for(let o=0,c=p.length;o<c;o++){const d=p[o];d.onError&&d.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ll extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _s=new Je,Oa=new C,Ba=new C;class ym{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Oa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oa),Ba.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ba),t.updateMatrixWorld(),_s.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_s),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_s)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bm extends ym{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Em extends Ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new bm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wm extends Ll{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Am{constructor(e,t,n=0,r=1/0){this.ray=new wr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return zs(e,this,n,t),n.sort(Ga),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)zs(e[r],this,n,t);return n.sort(Ga),n}}function Ga(i,e){return i.distance-e.distance}function zs(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)zs(r[s],e,t,!0)}}const za=new C,hr=new C;class Tm{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){za.subVectors(e,this.start),hr.subVectors(this.end,this.start);const n=hr.dot(hr);let s=hr.dot(za)/n;return t&&(s=ft(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$s}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$s);var oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Dl={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(oi,function(){var t=function(){function n(d){return a.appendChild(d.dom),d}function r(d){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===d?"block":"none";s=d}var s=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(d){d.preventDefault(),r(++s%a.children.length)},!1);var l=(performance||Date).now(),h=l,u=0,p=n(new t.Panel("FPS","#0ff","#002")),o=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=n(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:a,addPanel:n,showPanel:r,begin:function(){l=(performance||Date).now()},end:function(){u++;var d=(performance||Date).now();if(o.update(d-l,200),d>h+1e3&&(p.update(1e3*u/(d-h),100),h=d,u=0,c)){var g=performance.memory;c.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return d},update:function(){l=this.end()},domElement:a,setMode:r}};return t.Panel=function(n,r,s){var a=1/0,l=0,h=Math.round,u=h(window.devicePixelRatio||1),p=80*u,o=48*u,c=3*u,d=2*u,g=3*u,_=15*u,m=74*u,f=30*u,x=document.createElement("canvas");x.width=p,x.height=o,x.style.cssText="width:80px;height:48px";var v=x.getContext("2d");return v.font="bold "+9*u+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=s,v.fillRect(0,0,p,o),v.fillStyle=r,v.fillText(n,c,d),v.fillRect(g,_,m,f),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(g,_,m,f),{dom:x,update:function(y,w){a=Math.min(a,y),l=Math.max(l,y),v.fillStyle=s,v.globalAlpha=1,v.fillRect(0,0,p,_),v.fillStyle=r,v.fillText(h(y)+" "+n+" ("+h(a)+"-"+h(l)+")",c,d),v.drawImage(x,g+u,_,m-u,f,g,_,m-u,f),v.fillRect(g+m-u,_,u,f),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(g+m-u,_,u,h((1-y/w)*f))}}},t})})(Dl);var Cm=Dl.exports;const Ul=Rm(Cm);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class Jt{constructor(e,t,n,r,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Jt.nextNameID=Jt.nextNameID||0,this.$name.id=`lil-gui-name-${++Jt.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Pm extends Jt{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ks(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Lm={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:ks,toHexString:ks},Di={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Dm={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=Di.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Di.toHexString(r)}},Um={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=Di.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Di.toHexString(r)}},Im=[Lm,Di,Dm,Um];function Fm(i){return Im.find(e=>e.match(i))}class Nm extends Jt{constructor(e,t,n,r){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Fm(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=ks(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class vs extends Jt{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Om extends Jt{constructor(e,t,n,r,s,a){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(s);const l=a!==void 0;this.step(l?a:this._getImplicitStep(),l),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+x),this.$input.value=this.getValue())},r=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},s=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let a=!1,l,h,u,p,o;const c=5,d=x=>{l=x.clientX,h=u=x.clientY,a=!0,p=this.getValue(),o=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=x=>{if(a){const v=x.clientX-l,y=x.clientY-h;Math.abs(y)>c?(x.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>c&&_()}if(!a){const v=x.clientY-u;o-=v*this._step*this._arrowKeyMultiplier(x),p+o>this._max?o=this._max-p:p+o<this._min&&(o=this._min-p),this._snapClampSetValue(p+o)}u=x.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,x,v,y,w)=>(f-x)/(v-x)*(w-y)+y,t=f=>{const x=this.$slider.getBoundingClientRect();let v=e(f,x.left,x.right,this._min,this._max);this._snapClampSetValue(v)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=f=>{t(f.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let a=!1,l,h;const u=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),a=!1},p=f=>{f.touches.length>1||(this._hasScrollBar?(l=f.touches[0].clientX,h=f.touches[0].clientY,a=!0):u(f),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",c))},o=f=>{if(a){const x=f.touches[0].clientX-l,v=f.touches[0].clientY-h;Math.abs(x)>Math.abs(v)?u(f):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",c))}else f.preventDefault(),t(f.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",c)},d=this._callOnFinishChange.bind(this),g=400;let _;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const v=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(d,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",p,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Bm extends Jt{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const a=document.createElement("option");a.innerHTML=s,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Gm extends Jt{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const zm=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function km(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let ka=!1;class Pr{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:s="Controls",closeFolders:a=!1,injectStyles:l=!0,touchStyles:h=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",u=>{(u.code==="Enter"||u.code==="Space")&&(u.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),h&&this.domElement.classList.add("allow-touch-styles"),!ka&&l&&(km(zm),ka=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=a}add(e,t,n,r,s){if(Object(n)===n)return new Bm(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new Om(this,e,t,n,r,s);case"boolean":return new Pm(this,e,t);case"string":return new Gm(this,e,t);case"function":return new vs(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new Nm(this,e,t,n)}addFolder(e){const t=new Pr({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof vs||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof vs)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}new C;new C;new C;const Hm=new Te,Wt=Object.freeze({background:new Te(2764090),ground:new Te(3817295),truckBase:new Te(13935988),truckCab:new Te(15251602),houseBody:new Te(15787730),houseRoof:new Te(13943976),warning:new Te(16044095),danger:new Te(15105570),safe:new Te(8765929)});function yr(i,e,t){return i<e?e:i>t?t:i}function Vm(i,e,t){return i+(e-i)*t}function Wm(i,e,t){const n=yr((t-i)/(e-i),0,1);return n*n*(3-2*n)}function Il(i,e){const t=i.x-e.x,n=i.z-e.z;return Math.sqrt(t*t+n*n)}function Ha(i,e,t,n=Hm){return n.copy(i),n.lerp(e,yr(t,0,1)),n}class Xm{constructor(e,t){this.canvas=e,this.config=t,this.device=null,this.context=null,this.queue=null,this.commandEncoder=null,this.renderPass=null,this.width=0,this.height=0,this.aspectRatio=1,this.viewMatrix=new Float32Array(16),this.projectionMatrix=new Float32Array(16),this.uniformBuffer=null,this.vertexBuffer=null,this.indexBuffer=null,this.texture=null,this.sampler=null,this.vertexShader=null,this.fragmentShader=null,this.computeShader=null,this.renderPipeline=null,this.computePipeline=null,this.bindGroup=null,this.houseInstances=[],this.houseInstanceBuffer=null,this.maxHouses=t.MAX_HOUSES||12,this.routePoints=[],this.routeBuffer=null,this.routePipeline=null,this.frameCount=0,this.lastFrameTime=0,this.fps=60}async initialize(){try{if(!navigator.gpu)throw new Error("WebGPU not supported");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance",forceFallbackAdapter:!1});if(!e)throw new Error("No WebGPU adapter found");if(this.device=await e.requestDevice({requiredFeatures:["timestamp-query"],requiredLimits:{maxStorageBufferBindingSize:e.limits.maxStorageBufferBindingSize,maxBufferSize:e.limits.maxBufferSize}}),this.queue=this.device.queue,this.context=this.canvas.getContext("webgpu"),!this.context)throw new Error("WebGPU context not available");const t=navigator.gpu.getPreferredCanvasFormat();return this.context.configure({device:this.device,format:t,usage:GPUTextureUsage.RENDER_ATTACHMENT,alphaMode:"opaque"}),await this.createShaders(),await this.createBuffers(),await this.createPipelines(),this.setupResizeObserver(),console.log("WebGPU renderer initialized successfully"),!0}catch(e){return console.error("Failed to initialize WebGPU renderer:",e),!1}}async createShaders(){this.vertexShader=this.device.createShaderModule({code:`
        struct Uniforms {
          viewMatrix: mat4x4<f32>,
          projectionMatrix: mat4x4<f32>,
          time: f32,
          _padding: f32,
        }
        
        struct VertexOutput {
          @builtin(position) position: vec4<f32>,
          @location(0) color: vec3<f32>,
          @location(1) uv: vec2<f32>,
        }
        
        struct VertexInput {
          @location(0) position: vec3<f32>,
          @location(1) color: vec3<f32>,
          @location(2) uv: vec2<f32>,
        }
        
        @group(0) @binding(0) var<uniform> uniforms: Uniforms;
        
        @vertex
        fn vs_main(input: VertexInput) -> VertexOutput {
          var output: VertexOutput;
          let worldPos = vec4<f32>(input.position, 1.0);
          let viewPos = uniforms.viewMatrix * worldPos;
          output.position = uniforms.projectionMatrix * viewPos;
          output.color = input.color;
          output.uv = input.uv;
          return output;
        }
      `}),this.fragmentShader=this.device.createShaderModule({code:`
        struct FragmentOutput {
          @location(0) color: vec4<f32>,
        }
        
        @fragment
        fn fs_main(@location(0) color: vec3<f32>, @location(1) uv: vec2<f32>) -> FragmentOutput {
          var output: FragmentOutput;
          output.color = vec4<f32>(color, 1.0);
          return output;
        }
      `}),this.computeShader=this.device.createShaderModule({code:`
        struct HouseInstance {
          position: vec3<f32>,
          scale: f32,
          color: vec3<f32>,
          timer: f32,
          active: f32,
        }
        
        struct RoutePoint {
          position: vec3<f32>,
          color: vec3<f32>,
        }
        
        @group(0) @binding(0) var<storage, read_write> houses: array<HouseInstance>;
        @group(0) @binding(1) var<storage, read_write> route: array<RoutePoint>;
        @group(0) @binding(2) var<uniform> params: Uniforms;
        
        struct Uniforms {
          deltaTime: f32,
          truckPosition: vec3<f32>,
          _padding: f32,
        }
        
        @compute @workgroup_size(64)
        fn cs_main(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&houses)) { return; }
          
          var house = &houses[index];
          if (house.active < 0.5) { return; }
          
          // Update house timer
          house.timer = house.timer - params.deltaTime;
          
          // Update house color based on timer
          let timerRatio = house.timer / 25.0; // Assuming 25 second max timer
          if (timerRatio > 0.5) {
            house.color = mix(vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(1.0, 1.0, 0.0), (1.0 - timerRatio) * 2.0);
          } else {
            house.color = mix(vec3<f32>(1.0, 1.0, 0.0), vec3<f32>(1.0, 0.0, 0.0), (0.5 - timerRatio) * 2.0);
          }
          
          // Check for delivery
          let distance = length(house.position - params.truckPosition);
          if (distance < 2.0) {
            house.timer = 25.0; // Reset timer
            house.color = vec3<f32>(0.0, 1.0, 0.0);
          }
        }
      `})}async createBuffers(){this.uniformBuffer=this.device.createBuffer({size:16*4*2+8,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.houseInstanceBuffer=this.device.createBuffer({size:this.maxHouses*8*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.routeBuffer=this.device.createBuffer({size:2048*6*4,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),await this.createGeometryBuffers()}async createGeometryBuffers(){const e=new Float32Array([-1.6,-.6,-1,1,.8,.6,0,0,1.6,-.6,-1,1,.8,.6,1,0,1.6,-.6,1,1,.8,.6,1,1,-1.6,-.6,1,1,.8,.6,0,1,-.7,-.65,-.9,1,.6,.7,0,0,.7,-.65,-.9,1,.6,.7,1,0,.7,-.65,.9,1,.6,.7,1,1,-.7,-.65,.9,1,.6,.7,0,1]);this.vertexBuffer=this.device.createBuffer({size:e.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.queue.writeBuffer(this.vertexBuffer,0,e);const t=new Float32Array([-1.3,-.75,-1.3,.4,.8,.8,0,0,1.3,-.75,-1.3,.4,.8,.8,1,0,1.3,-.75,1.3,.4,.8,.8,1,1,-1.3,-.75,1.3,.4,.8,.8,0,1,-1.45,-.2,-1.45,.9,.5,.7,0,0,1.45,-.2,-1.45,.9,.5,.7,1,0,1.45,-.2,1.45,.9,.5,.7,1,1,-1.45,-.2,1.45,.9,.5,.7,0,1]);this.houseVertexBuffer=this.device.createBuffer({size:t.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.queue.writeBuffer(this.houseVertexBuffer,0,t)}async createPipelines(){this.renderPipeline=this.device.createRenderPipeline({layout:"auto",vertex:{module:this.vertexShader,entryPoint:"vs_main",buffers:[{arrayStride:8*4,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"},{shaderLocation:2,offset:24,format:"float32x2"}]}]},fragment:{module:this.fragmentShader,entryPoint:"fs_main",targets:[{format:navigator.gpu.getPreferredCanvasFormat()}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),this.computePipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.computeShader,entryPoint:"cs_main"}}),this.bindGroup=this.device.createBindGroup({layout:this.renderPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.houseInstanceBuffer}},{binding:2,resource:{buffer:this.routeBuffer}}]})}setupResizeObserver(){new ResizeObserver(t=>{for(const n of t){const{width:r,height:s}=n.contentRect;this.resize(r,s)}}).observe(this.canvas)}resize(e,t){this.width=e,this.height=t,this.aspectRatio=e/t,this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.config.WORLD_SIZE*.75,t=-e*this.aspectRatio/2,n=e*this.aspectRatio/2,r=e/2,s=-e/2,a=-200,l=400,h=1/(n-t),u=1/(r-s),p=1/(a-l);this.projectionMatrix.set([2*h,0,0,0,0,2*u,0,0,0,0,2*p,0,-(n+t)*h,-(r+s)*u,-200*p,1])}updateViewMatrix(e,t){const n=e,r=t,s=[0,1,0],a=this.normalize([n[0]-r[0],n[1]-r[1],n[2]-r[2]]),l=this.normalize(this.cross(s,a)),h=this.cross(a,l);this.viewMatrix.set([l[0],h[0],a[0],0,l[1],h[1],a[1],0,l[2],h[2],a[2],0,-this.dot(l,n),-this.dot(h,n),-this.dot(a,n),1])}normalize(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);return[e[0]/t,e[1]/t,e[2]/t]}cross(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}dot(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}updateUniforms(e,t,n){this.updateViewMatrix(t,n);const r=new Float32Array(16*2+2);r.set(this.viewMatrix,0),r.set(this.projectionMatrix,16),r[32]=e,r[33]=0,this.queue.writeBuffer(this.uniformBuffer,0,r)}updateHouses(e){const t=new Float32Array(this.maxHouses*8);for(let n=0;n<e.length&&n<this.maxHouses;n++){const r=e[n],s=n*8;t[s+0]=r.position.x,t[s+1]=r.position.y,t[s+2]=r.position.z,t[s+3]=r.scale||1,t[s+4]=r.color.r,t[s+5]=r.color.g,t[s+6]=r.color.b,t[s+7]=r.timer||0}this.queue.writeBuffer(this.houseInstanceBuffer,0,t)}updateRoute(e){const t=new Float32Array(e.length*6);for(let n=0;n<e.length;n++){const r=e[n],s=n*6;t[s+0]=r.position.x,t[s+1]=r.position.y,t[s+2]=r.position.z,t[s+3]=r.color.r,t[s+4]=r.color.g,t[s+5]=r.color.b}this.queue.writeBuffer(this.routeBuffer,0,t)}beginFrame(){this.commandEncoder=this.device.createCommandEncoder()}endFrame(){this.commandEncoder&&(this.queue.submit([this.commandEncoder.finish()]),this.commandEncoder=null)}render(e,t,n,r,s){this.commandEncoder||this.beginFrame(),this.updateUniforms(e,t,n),this.updateHouses(r),this.updateRoute(s);const a=this.context.getCurrentTexture().createView();this.renderPass=this.commandEncoder.beginRenderPass({colorAttachments:[{view:a,clearValue:{r:.1,g:.1,b:.15,a:1},loadOp:"clear",storeOp:"store"}]}),this.renderPass.setPipeline(this.renderPipeline),this.renderPass.setBindGroup(0,this.bindGroup),r.length>0&&(this.renderPass.setVertexBuffer(0,this.houseVertexBuffer),this.renderPass.setVertexBuffer(1,this.houseInstanceBuffer),this.renderPass.draw(8,r.length)),this.renderPass.setVertexBuffer(0,this.vertexBuffer),this.renderPass.draw(8),s.length>0&&(this.renderPass.setVertexBuffer(0,this.routeBuffer),this.renderPass.draw(s.length)),this.renderPass.end()}dispatchHouseUpdates(e,t){this.commandEncoder||this.beginFrame();const n=this.commandEncoder.beginComputePass();n.setPipeline(this.computePipeline),n.setBindGroup(0,this.bindGroup);const r=new Float32Array([e,t.x,t.y,t.z]);this.queue.writeBuffer(this.uniformBuffer,16*4*2,r);const s=Math.ceil(this.maxHouses/64);n.dispatchWorkgroups(s),n.end()}getPerformanceStats(){const e=performance.now();return this.frameCount++,e-this.lastFrameTime>=1e3&&(this.fps=this.frameCount,this.frameCount=0,this.lastFrameTime=e),{fps:this.fps,frameCount:this.frameCount}}destroy(){this.uniformBuffer&&this.uniformBuffer.destroy(),this.vertexBuffer&&this.vertexBuffer.destroy(),this.houseInstanceBuffer&&this.houseInstanceBuffer.destroy(),this.routeBuffer&&this.routeBuffer.destroy(),this.houseVertexBuffer&&this.houseVertexBuffer.destroy()}}class qm{constructor(e){this.device=e,this.queue=e.queue,this.routeOptimizationPipeline=null,this.collisionDetectionPipeline=null,this.houseManagementPipeline=null,this.particleSystemPipeline=null,this.routeBuffer=null,this.houseBuffer=null,this.collisionBuffer=null,this.particleBuffer=null,this.routeBindGroup=null,this.houseBindGroup=null,this.collisionBindGroup=null,this.particleBindGroup=null,this.initialized=!1}async initialize(){try{return await this.createComputeShaders(),await this.createBuffers(),await this.createPipelines(),await this.createBindGroups(),this.initialized=!0,console.log("WebGPU compute system initialized"),!0}catch(e){return console.error("Failed to initialize WebGPU compute system:",e),!1}}async createComputeShaders(){this.routeOptimizationShader=this.device.createShaderModule({code:`
        struct RoutePoint {
          position: vec3<f32>,
          color: vec3<f32>,
          active: f32,
        }
        
        struct OptimizationParams {
          truckPosition: vec3<f32>,
          targetHouses: array<vec3<f32>, 12>,
          houseCount: u32,
          optimizationLevel: f32,
          deltaTime: f32,
        }
        
        @group(0) @binding(0) var<storage, read_write> routePoints: array<RoutePoint>;
        @group(0) @binding(1) var<uniform> params: OptimizationParams;
        
        // TSP (Traveling Salesman Problem) optimization using GPU
        fn calculateDistance(a: vec3<f32>, b: vec3<f32>) -> f32 {
          return length(a - b);
        }
        
        fn optimizeRouteOrder(points: ptr<function, array<RoutePoint, 256>>, count: u32) {
          // Simple nearest neighbor optimization
          for (var i: u32 = 0; i < count - 1; i++) {
            var bestDistance = 1000000.0;
            var bestIndex = i + 1;
            
            for (var j: u32 = i + 1; j < count; j++) {
              let distance = calculateDistance((*points)[i].position, (*points)[j].position);
              if (distance < bestDistance) {
                bestDistance = distance;
                bestIndex = j;
              }
            }
            
            // Swap if better option found
            if (bestIndex != i + 1) {
              let temp = (*points)[i + 1];
              (*points)[i + 1] = (*points)[bestIndex];
              (*points)[bestIndex] = temp;
            }
          }
        }
        
        @compute @workgroup_size(64)
        fn cs_route_optimization(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&routePoints)) { return; }
          
          var point = &routePoints[index];
          if (point.active < 0.5) { return; }
          
          // Update route point color based on distance to truck
          let distanceToTruck = calculateDistance(point.position, params.truckPosition);
          let colorIntensity = 1.0 - clamp(distanceToTruck / 50.0, 0.0, 1.0);
          
          point.color = vec3<f32>(0.4 + colorIntensity * 0.6, 0.8 + colorIntensity * 0.2, 1.0);
        }
      `}),this.collisionDetectionShader=this.device.createShaderModule({code:`
        struct CollisionData {
          position: vec3<f32>,
          radius: f32,
          active: f32,
          collisionType: u32,
        }
        
        struct CollisionResult {
          hasCollision: u32,
          collisionPoint: vec3<f32>,
          collisionNormal: vec3<f32>,
          collisionDistance: f32,
        }
        
        @group(0) @binding(0) var<storage, read> objects: array<CollisionData>;
        @group(0) @binding(1) var<storage, read_write> results: array<CollisionResult>;
        @group(0) @binding(2) var<uniform> truckData: CollisionData;
        
        fn sphereSphereCollision(a: CollisionData, b: CollisionData) -> bool {
          let distance = length(a.position - b.position);
          return distance < (a.radius + b.radius);
        }
        
        fn spherePlaneCollision(sphere: CollisionData, planeNormal: vec3<f32>, planeDistance: f32) -> bool {
          let distance = dot(sphere.position, planeNormal) - planeDistance;
          return abs(distance) < sphere.radius;
        }
        
        @compute @workgroup_size(64)
        fn cs_collision_detection(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&objects)) { return; }
          
          let object = objects[index];
          if (object.active < 0.5) { return; }
          
          var result = &results[index];
          result.hasCollision = 0u;
          
          // Check truck collision with objects
          if (sphereSphereCollision(truckData, object)) {
            result.hasCollision = 1u;
            result.collisionPoint = (truckData.position + object.position) * 0.5;
            result.collisionNormal = normalize(truckData.position - object.position);
            result.collisionDistance = length(truckData.position - object.position);
          }
        }
      `}),this.houseManagementShader=this.device.createShaderModule({code:`
        struct HouseData {
          position: vec3<f32>,
          timer: f32,
          maxTimer: f32,
          color: vec3<f32>,
          active: f32,
          deliveryRadius: f32,
        }
        
        struct HouseParams {
          truckPosition: vec3<f32>,
          deliveryRadius: f32,
          deltaTime: f32,
          gameTime: f32,
        }
        
        @group(0) @binding(0) var<storage, read_write> houses: array<HouseData>;
        @group(0) @binding(1) var<uniform> params: HouseParams;
        
        fn updateHouseTimer(house: ptr<function, HouseData>) {
          (*house).timer = (*house).timer - params.deltaTime;
          
          // Update color based on timer urgency
          let timerRatio = (*house).timer / (*house).maxTimer;
          if (timerRatio > 0.5) {
            (*house).color = mix(vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(1.0, 1.0, 0.0), (1.0 - timerRatio) * 2.0);
          } else {
            (*house).color = mix(vec3<f32>(1.0, 1.0, 0.0), vec3<f32>(1.0, 0.0, 0.0), (0.5 - timerRatio) * 2.0);
          }
        }
        
        fn checkDelivery(house: ptr<function, HouseData>) -> bool {
          let distance = length((*house).position - params.truckPosition);
          return distance <= params.deliveryRadius;
        }
        
        @compute @workgroup_size(64)
        fn cs_house_management(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&houses)) { return; }
          
          var house = &houses[index];
          if (house.active < 0.5) { return; }
          
          // Update house timer and color
          updateHouseTimer(house);
          
          // Check for delivery
          if (checkDelivery(house)) {
            house.timer = house.maxTimer; // Reset timer
            house.color = vec3<f32>(0.0, 1.0, 0.0); // Green for delivered
          }
          
          // Deactivate house if timer expired
          if (house.timer <= 0.0) {
            house.active = 0.0;
          }
        }
      `}),this.particleSystemShader=this.device.createShaderModule({code:`
        struct Particle {
          position: vec3<f32>,
          velocity: vec3<f32>,
          color: vec3<f32>,
          life: f32,
          maxLife: f32,
          size: f32,
        }
        
        struct ParticleParams {
          deltaTime: f32,
          gravity: vec3<f32>,
          wind: vec3<f32>,
          turbulence: f32,
        }
        
        @group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
        @group(0) @binding(1) var<uniform> params: ParticleParams;
        
        fn updateParticle(particle: ptr<function, Particle>) {
          // Update position
          (*particle).position = (*particle).position + (*particle).velocity * params.deltaTime;
          
          // Apply forces
          (*particle).velocity = (*particle).velocity + params.gravity * params.deltaTime;
          (*particle).velocity = (*particle).velocity + params.wind * params.deltaTime;
          
          // Add turbulence
          let turbulence = vec3<f32>(
            (fract(sin((*particle).position.x * 12.9898 + params.deltaTime) * 43758.5453) - 0.5) * params.turbulence,
            (fract(sin((*particle).position.y * 12.9898 + params.deltaTime) * 43758.5453) - 0.5) * params.turbulence,
            (fract(sin((*particle).position.z * 12.9898 + params.deltaTime) * 43758.5453) - 0.5) * params.turbulence
          );
          (*particle).velocity = (*particle).velocity + turbulence;
          
          // Update life
          (*particle).life = (*particle).life - params.deltaTime;
          
          // Update color based on life
          let lifeRatio = (*particle).life / (*particle).maxLife;
          (*particle).color = mix(vec3<f32>(1.0, 0.0, 0.0), vec3<f32>(1.0, 1.0, 0.0), lifeRatio);
          
          // Update size
          (*particle).size = (*particle).size * (0.99 + lifeRatio * 0.01);
        }
        
        @compute @workgroup_size(64)
        fn cs_particle_system(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&particles)) { return; }
          
          var particle = &particles[index];
          if (particle.life <= 0.0) { return; }
          
          updateParticle(particle);
        }
      `})}async createBuffers(){this.routeBuffer=this.device.createBuffer({size:256*7*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.houseBuffer=this.device.createBuffer({size:12*8*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.collisionBuffer=this.device.createBuffer({size:64*6*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.particleBuffer=this.device.createBuffer({size:1024*7*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})}async createPipelines(){this.routeOptimizationPipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.routeOptimizationShader,entryPoint:"cs_route_optimization"}}),this.collisionDetectionPipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.collisionDetectionShader,entryPoint:"cs_collision_detection"}}),this.houseManagementPipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.houseManagementShader,entryPoint:"cs_house_management"}}),this.particleSystemPipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.particleSystemShader,entryPoint:"cs_particle_system"}})}async createBindGroups(){this.routeBindGroup=this.device.createBindGroup({layout:this.routeOptimizationPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.routeBuffer}}]}),this.houseBindGroup=this.device.createBindGroup({layout:this.houseManagementPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.houseBuffer}}]}),this.collisionBindGroup=this.device.createBindGroup({layout:this.collisionDetectionPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.collisionBuffer}},{binding:1,resource:{buffer:this.collisionBuffer}}]}),this.particleBindGroup=this.device.createBindGroup({layout:this.particleSystemPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.particleBuffer}}]})}optimizeRoute(e,t,n){if(!this.initialized)return;const r=this.device.createCommandEncoder(),s=r.beginComputePass();s.setPipeline(this.routeOptimizationPipeline),s.setBindGroup(0,this.routeBindGroup),this.updateRouteBuffer(e);const a=Math.ceil(e.length/64);s.dispatchWorkgroups(a),s.end(),this.queue.submit([r.finish()])}updateRouteBuffer(e){const t=new Float32Array(e.length*7);for(let n=0;n<e.length;n++){const r=e[n],s=n*7;t[s+0]=r.position.x,t[s+1]=r.position.y,t[s+2]=r.position.z,t[s+3]=r.color.r,t[s+4]=r.color.g,t[s+5]=r.color.b,t[s+6]=r.active?1:0}this.queue.writeBuffer(this.routeBuffer,0,t)}updateHouses(e,t,n){if(!this.initialized)return;const r=this.device.createCommandEncoder(),s=r.beginComputePass();s.setPipeline(this.houseManagementPipeline),s.setBindGroup(0,this.houseBindGroup),this.updateHouseBuffer(e,t,n);const a=Math.ceil(e.length/64);s.dispatchWorkgroups(a),s.end(),this.queue.submit([r.finish()])}updateHouseBuffer(e,t,n){const r=new Float32Array(e.length*8);for(let s=0;s<e.length;s++){const a=e[s],l=s*8;r[l+0]=a.position.x,r[l+1]=a.position.y,r[l+2]=a.position.z,r[l+3]=a.timer,r[l+4]=a.maxTimer,r[l+5]=a.color.r,r[l+6]=a.color.g,r[l+7]=a.color.b}this.queue.writeBuffer(this.houseBuffer,0,r)}detectCollisions(e,t){if(!this.initialized)return[];const n=this.device.createCommandEncoder(),r=n.beginComputePass();r.setPipeline(this.collisionDetectionPipeline),r.setBindGroup(0,this.collisionBindGroup),this.updateCollisionBuffer(e,t);const s=Math.ceil(e.length/64);return r.dispatchWorkgroups(s),r.end(),this.queue.submit([n.finish()]),[]}updateCollisionBuffer(e,t){const n=new Float32Array(e.length*6);for(let r=0;r<e.length;r++){const s=e[r],a=r*6;n[a+0]=s.position.x,n[a+1]=s.position.y,n[a+2]=s.position.z,n[a+3]=s.radius,n[a+4]=s.active?1:0,n[a+5]=s.type||0}this.queue.writeBuffer(this.collisionBuffer,0,n)}updateParticles(e,t,n,r,s){if(!this.initialized)return;const a=this.device.createCommandEncoder(),l=a.beginComputePass();l.setPipeline(this.particleSystemPipeline),l.setBindGroup(0,this.particleBindGroup),this.updateParticleBuffer(e,t,n,r,s);const h=Math.ceil(e.length/64);l.dispatchWorkgroups(h),l.end(),this.queue.submit([a.finish()])}updateParticleBuffer(e,t,n,r,s){const a=new Float32Array(e.length*7);for(let l=0;l<e.length;l++){const h=e[l],u=l*7;a[u+0]=h.position.x,a[u+1]=h.position.y,a[u+2]=h.position.z,a[u+3]=h.velocity.x,a[u+4]=h.velocity.y,a[u+5]=h.velocity.z,a[u+6]=h.life}this.queue.writeBuffer(this.particleBuffer,0,a)}destroy(){this.routeBuffer&&this.routeBuffer.destroy(),this.houseBuffer&&this.houseBuffer.destroy(),this.collisionBuffer&&this.collisionBuffer.destroy(),this.particleBuffer&&this.particleBuffer.destroy()}}class $m{constructor(e){this.device=e,this.queue=e.queue,this.audioProcessingPipeline=null,this.soundEffectPipeline=null,this.musicPipeline=null,this.audioBuffer=null,this.outputBuffer=null,this.effectBuffer=null,this.audioBindGroup=null,this.effectBindGroup=null,this.audioContext=null,this.audioWorklet=null,this.initialized=!1}async initialize(){try{return await this.createAudioShaders(),await this.createAudioBuffers(),await this.createAudioPipelines(),await this.createAudioBindGroups(),await this.setupWebAudioIntegration(),this.initialized=!0,console.log("WebGPU audio system initialized"),!0}catch(e){return console.error("Failed to initialize WebGPU audio system:",e),!1}}async createAudioShaders(){this.audioProcessingShader=this.device.createShaderModule({code:`
        struct AudioSample {
          left: f32,
          right: f32,
        }
        
        struct AudioParams {
          volume: f32,
          pitch: f32,
          reverb: f32,
          echo: f32,
          lowPass: f32,
          highPass: f32,
          sampleRate: f32,
          deltaTime: f32,
        }
        
        @group(0) @binding(0) var<storage, read> inputSamples: array<AudioSample>;
        @group(0) @binding(1) var<storage, read_write> outputSamples: array<AudioSample>;
        @group(0) @binding(2) var<uniform> params: AudioParams;
        
        fn applyLowPass(sample: f32, prevSample: f32, cutoff: f32) -> f32 {
          let alpha = 1.0 / (1.0 + cutoff);
          return alpha * sample + (1.0 - alpha) * prevSample;
        }
        
        fn applyHighPass(sample: f32, prevSample: f32, cutoff: f32) -> f32 {
          let alpha = cutoff / (1.0 + cutoff);
          return alpha * (prevSample + sample - prevSample);
        }
        
        fn applyReverb(sample: f32, delayBuffer: ptr<function, array<f32, 44100>>, delayIndex: u32, reverbTime: f32) -> f32 {
          let delayedSample = (*delayBuffer)[delayIndex];
          let reverbAmount = reverbTime * 0.3;
          return sample + delayedSample * reverbAmount;
        }
        
        fn applyEcho(sample: f32, delayBuffer: ptr<function, array<f32, 44100>>, delayIndex: u32, echoTime: f32) -> f32 {
          let delayedSample = (*delayBuffer)[delayIndex];
          let echoAmount = echoTime * 0.5;
          return sample + delayedSample * echoAmount;
        }
        
        @compute @workgroup_size(64)
        fn cs_audio_processing(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&inputSamples)) { return; }
          
          var input = inputSamples[index];
          var output = &outputSamples[index];
          
          // Apply volume
          input.left = input.left * params.volume;
          input.right = input.right * params.volume;
          
          // Apply pitch (simple time stretching)
          let pitchFactor = params.pitch;
          if (pitchFactor != 1.0) {
            // Simple pitch shifting - in a real implementation, you'd use more sophisticated algorithms
            input.left = input.left * pitchFactor;
            input.right = input.right * pitchFactor;
          }
          
          // Apply low-pass filter
          input.left = applyLowPass(input.left, input.left, params.lowPass);
          input.right = applyLowPass(input.right, input.right, params.lowPass);
          
          // Apply high-pass filter
          input.left = applyHighPass(input.left, input.left, params.highPass);
          input.right = applyHighPass(input.right, input.right, params.highPass);
          
          // Apply reverb (simplified)
          if (params.reverb > 0.0) {
            // This is a simplified reverb - in practice, you'd use convolution or FFT
            input.left = input.left * (1.0 + params.reverb * 0.1);
            input.right = input.right * (1.0 + params.reverb * 0.1);
          }
          
          // Apply echo
          if (params.echo > 0.0) {
            // Simplified echo effect
            input.left = input.left * (1.0 + params.echo * 0.2);
            input.right = input.right * (1.0 + params.echo * 0.2);
          }
          
          output.left = input.left;
          output.right = input.right;
        }
      `}),this.soundEffectShader=this.device.createShaderModule({code:`
        struct SoundEffect {
          type: u32, // 0: ding, 1: gameover
          volume: f32,
          pitch: f32,
          duration: f32,
          startTime: f32,
          active: f32,
        }
        
        struct EffectParams {
          gameTime: f32,
          deltaTime: f32,
          masterVolume: f32,
          _padding: f32,
        }
        
        @group(0) @binding(0) var<storage, read_write> effects: array<SoundEffect>;
        @group(0) @binding(1) var<storage, read_write> audioOutput: array<f32>;
        @group(0) @binding(2) var<uniform> params: EffectParams;
        
        fn generateSineWave(frequency: f32, time: f32, volume: f32) -> f32 {
          return sin(frequency * 2.0 * 3.14159 * time) * volume;
        }
        
        fn generateSquareWave(frequency: f32, time: f32, volume: f32) -> f32 {
          return sign(sin(frequency * 2.0 * 3.14159 * time)) * volume;
        }
        
        fn generateSawtoothWave(frequency: f32, time: f32, volume: f32) -> f32 {
          let phase = fract(frequency * time);
          return (phase * 2.0 - 1.0) * volume;
        }
        
        fn generateDingEffect(time: f32, volume: f32) -> f32 {
          let envelope = exp(-time * 8.0); // Exponential decay
          let frequency = 800.0 + sin(time * 20.0) * 100.0; // Vibrato
          return generateSineWave(frequency, time, volume) * envelope;
        }
        
        
        fn generateGameOverEffect(time: f32, volume: f32) -> f32 {
          let envelope = exp(-time * 2.0);
          let frequency = 400.0 - time * 200.0; // Descending pitch
          return generateSawtoothWave(frequency, time, volume) * envelope;
        }
        
        @compute @workgroup_size(64)
        fn cs_sound_effects(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&effects)) { return; }
          
          var effect = &effects[index];
          if (effect.active < 0.5) { return; }
          
          let elapsedTime = params.gameTime - effect.startTime;
          if (elapsedTime >= effect.duration) {
            effect.active = 0.0;
            return;
          }
          
          let volume = effect.volume * params.masterVolume;
          let pitch = effect.pitch;
          let time = elapsedTime * pitch;
          
          var sample: f32;
          
          switch (effect.type) {
            case 0u: { // Ding
              sample = generateDingEffect(time, volume);
            }
            case 2u: { // Game over
              sample = generateGameOverEffect(time, volume);
            }
            default: {
              sample = 0.0;
            }
          }
          
          // Write to output buffer
          let outputIndex = index * 2; // Stereo
          audioOutput[outputIndex] = sample; // Left channel
          audioOutput[outputIndex + 1] = sample; // Right channel
        }
      `}),this.musicShader=this.device.createShaderModule({code:`
        struct MusicNote {
          frequency: f32,
          duration: f32,
          startTime: f32,
          volume: f32,
          waveform: u32, // 0: sine, 1: square, 2: sawtooth
          active: f32,
        }
        
        struct MusicParams {
          gameTime: f32,
          tempo: f32,
          key: f32,
          scale: u32, // 0: major, 1: minor
          _padding: f32,
        }
        
        @group(0) @binding(0) var<storage, read_write> notes: array<MusicNote>;
        @group(0) @binding(1) var<storage, read_write> musicOutput: array<f32>;
        @group(0) @binding(2) var<uniform> params: MusicParams;
        
        fn getScaleFrequency(noteIndex: i32, scale: u32) -> f32 {
          let baseFreq = 440.0; // A4
          let majorScale = array<f32, 7>(1.0, 1.122, 1.26, 1.335, 1.498, 1.682, 1.888);
          let minorScale = array<f32, 7>(1.0, 1.122, 1.189, 1.335, 1.498, 1.587, 1.888);
          
          let scaleArray = select(majorScale, minorScale, scale == 1u);
          let octave = noteIndex / 7;
          let scaleNote = noteIndex % 7;
          
          return baseFreq * pow(2.0, f32(octave)) * scaleArray[scaleNote];
        }
        
        fn generateWaveform(frequency: f32, time: f32, waveform: u32, volume: f32) -> f32 {
          switch (waveform) {
            case 0u: { // Sine wave
              return sin(frequency * 2.0 * 3.14159 * time) * volume;
            }
            case 1u: { // Square wave
              return sign(sin(frequency * 2.0 * 3.14159 * time)) * volume;
            }
            case 2u: { // Sawtooth wave
              let phase = fract(frequency * time);
              return (phase * 2.0 - 1.0) * volume;
            }
            default: {
              return 0.0;
            }
          }
        }
        
        @compute @workgroup_size(64)
        fn cs_music_processing(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&notes)) { return; }
          
          var note = &notes[index];
          if (note.active < 0.5) { return; }
          
          let elapsedTime = params.gameTime - note.startTime;
          if (elapsedTime >= note.duration) {
            note.active = 0.0;
            return;
          }
          
          let frequency = note.frequency * pow(2.0, params.key / 12.0);
          let envelope = 1.0 - (elapsedTime / note.duration); // Linear decay
          let volume = note.volume * envelope;
          
          let sample = generateWaveform(frequency, elapsedTime, note.waveform, volume);
          
          // Write to output buffer
          let outputIndex = index * 2; // Stereo
          musicOutput[outputIndex] = sample; // Left channel
          musicOutput[outputIndex + 1] = sample; // Right channel
        }
      `})}async createAudioBuffers(){this.audioBuffer=this.device.createBuffer({size:44100*2*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.outputBuffer=this.device.createBuffer({size:44100*2*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.effectBuffer=this.device.createBuffer({size:64*6*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.musicBuffer=this.device.createBuffer({size:128*6*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})}async createAudioPipelines(){this.audioProcessingPipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.audioProcessingShader,entryPoint:"cs_audio_processing"}}),this.soundEffectPipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.soundEffectShader,entryPoint:"cs_sound_effects"}}),this.musicPipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.musicShader,entryPoint:"cs_music_processing"}})}async createAudioBindGroups(){this.audioBindGroup=this.device.createBindGroup({layout:this.audioProcessingPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.audioBuffer}},{binding:1,resource:{buffer:this.outputBuffer}}]}),this.effectBindGroup=this.device.createBindGroup({layout:this.soundEffectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.effectBuffer}},{binding:1,resource:{buffer:this.outputBuffer}}]}),this.musicBindGroup=this.device.createBindGroup({layout:this.musicPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.musicBuffer}},{binding:1,resource:{buffer:this.outputBuffer}}]})}async setupWebAudioIntegration(){try{this.audioContext=new(window.AudioContext||window.webkitAudioContext),await this.audioContext.audioWorklet.addModule("/src/webgpu/audio-worklet.js"),this.audioWorklet=new AudioWorkletNode(this.audioContext,"webgpu-audio-processor"),this.audioWorklet.connect(this.audioContext.destination),console.log("Web Audio integration setup complete")}catch(e){console.warn("Web Audio integration failed, falling back to standard audio:",e)}}processAudio(e,t){if(!this.initialized)return;const n=this.device.createCommandEncoder(),r=n.beginComputePass();r.setPipeline(this.audioProcessingPipeline),r.setBindGroup(0,this.audioBindGroup),this.updateAudioBuffer(e),this.updateAudioParams(t);const s=Math.ceil(e.length/64);r.dispatchWorkgroups(s),r.end(),this.queue.submit([n.finish()])}updateAudioBuffer(e){const t=new Float32Array(e.length*2);for(let n=0;n<e.length;n++){const r=e[n];t[n*2]=r.left||0,t[n*2+1]=r.right||0}this.queue.writeBuffer(this.audioBuffer,0,t)}updateAudioParams(e){const t=new Float32Array([e.volume||1,e.pitch||1,e.reverb||0,e.echo||0,e.lowPass||0,e.highPass||0,e.sampleRate||44100,e.deltaTime||.016]),n=this.device.createBuffer({size:t.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.queue.writeBuffer(n,0,t)}playSoundEffect(e,t=1,n=1,r=1){if(!this.initialized)return;const s=this.device.createCommandEncoder(),a=s.beginComputePass();a.setPipeline(this.soundEffectPipeline),a.setBindGroup(0,this.effectBindGroup),this.updateEffectBuffer(e,t,n,r);const l=Math.ceil(64/64);a.dispatchWorkgroups(l),a.end(),this.queue.submit([s.finish()])}updateEffectBuffer(e,t,n,r){const s=new Float32Array(384);for(let a=0;a<64;a++){const l=a*6;if(s[l+5]===0){s[l+0]=e,s[l+1]=t,s[l+2]=n,s[l+3]=r,s[l+4]=performance.now()/1e3,s[l+5]=1;break}}this.queue.writeBuffer(this.effectBuffer,0,s)}playMusic(e,t=120,n=0,r=0){if(!this.initialized)return;const s=this.device.createCommandEncoder(),a=s.beginComputePass();a.setPipeline(this.musicPipeline),a.setBindGroup(0,this.musicBindGroup),this.updateMusicBuffer(e,t,n,r);const l=Math.ceil(e.length/64);a.dispatchWorkgroups(l),a.end(),this.queue.submit([s.finish()])}updateMusicBuffer(e,t,n,r){const s=new Float32Array(e.length*6);for(let a=0;a<e.length;a++){const l=e[a],h=a*6;s[h+0]=l.frequency,s[h+1]=l.duration,s[h+2]=l.startTime,s[h+3]=l.volume,s[h+4]=l.waveform,s[h+5]=l.active?1:0}this.queue.writeBuffer(this.musicBuffer,0,s)}integrateWithHowler(){if(!this.audioContext)return;const e=window.Howl.prototype.play;window.Howl.prototype.play=function(t){const s=this._sprite[t||"default"];return s&&this.webgpuAudio.playSoundEffect(this._type||0,this._volume||1,this._rate||1,s[1]/1e3),e.call(this,t)}}destroy(){this.audioBuffer&&this.audioBuffer.destroy(),this.outputBuffer&&this.outputBuffer.destroy(),this.effectBuffer&&this.effectBuffer.destroy(),this.musicBuffer&&this.musicBuffer.destroy(),this.audioContext&&this.audioContext.close()}}class Ym{constructor(e,t){this.canvas=e,this.config=t,this.renderer=null,this.compute=null,this.audio=null,this.initialized=!1,this.fallbackMode=!1,this.performanceStats={fps:60,gpuTime:0,cpuTime:0,memoryUsage:0},this.threeJSScene=null,this.threeJSCamera=null,this.threeJSRenderer=null}async initialize(){try{if(console.log("Initializing WebGPU integration..."),!navigator.gpu)return console.warn("WebGPU not supported, falling back to Three.js"),console.log('💡 To enable WebGPU: Go to chrome://flags/ and enable "Unsafe WebGPU"'),this.fallbackMode=!0,!1;try{if(!await navigator.gpu.requestAdapter())return console.warn("WebGPU adapter not available, falling back to Three.js"),console.log('💡 To enable WebGPU: Go to chrome://flags/ and enable "Unsafe WebGPU"'),this.fallbackMode=!0,!1}catch(e){return console.warn("WebGPU adapter request failed:",e),console.log('💡 To enable WebGPU: Go to chrome://flags/ and enable "Unsafe WebGPU"'),this.fallbackMode=!0,!1}return await this.initializeWebGPUSystems(),this.setupCompatibilityLayer(),this.initialized=!0,console.log("WebGPU integration initialized successfully"),!0}catch(e){return console.error("Failed to initialize WebGPU integration:",e),this.fallbackMode=!0,!1}}async initializeWebGPUSystems(){if(this.renderer=new Xm(this.canvas,this.config),!await this.renderer.initialize())throw new Error("Failed to initialize WebGPU renderer");this.compute=new qm(this.renderer.device),await this.compute.initialize()||console.warn("WebGPU compute system failed to initialize"),this.audio=new $m(this.renderer.device),await this.audio.initialize()||console.warn("WebGPU audio system failed to initialize")}setupCompatibilityLayer(){this.getScene=()=>this.threeJSScene,this.getCamera=()=>this.threeJSCamera,this.getRenderer=()=>this.threeJSRenderer,this.render=this.render.bind(this)}setThreeJSScene(e){this.threeJSScene=e}setThreeJSCamera(e){this.threeJSCamera=e}setThreeJSRenderer(e){this.threeJSRenderer=e}render(){if(!this.initialized||this.fallbackMode){this.threeJSRenderer&&this.threeJSScene&&this.threeJSCamera&&this.threeJSRenderer.render(this.threeJSScene,this.threeJSCamera);return}const e=performance.now();try{const t=this.getCurrentGameState();this.updateWebGPUSystems(t),this.renderWithWebGPU(t),this.updatePerformanceStats(e)}catch(t){console.error("WebGPU rendering failed, falling back to Three.js:",t),this.fallbackToThreeJS()}}getCurrentGameState(){const e=[],t=[],n={x:0,y:0,z:0};if(this.threeJSScene){const r=this.threeJSScene.getObjectByName("HouseManager");r&&r.children.forEach((l,h)=>{l.name==="House"&&e.push({position:l.position,color:l.material?.color||{r:.4,g:.8,b:.8},timer:l.userData?.timer||25,active:l.visible})});const s=this.threeJSScene.getObjectByName("Truck");s&&(n.x=s.position.x,n.y=s.position.y,n.z=s.position.z);const a=this.threeJSScene.getObjectByName("RouteLine");if(a&&a.geometry){const l=a.geometry.attributes.position.array;for(let h=0;h<l.length;h+=3)t.push({position:{x:l[h],y:l[h+1],z:l[h+2]},color:{r:.4,g:.8,b:1}})}}return{houses:e,routePoints:t,truckPosition:n,time:performance.now()/1e3}}updateWebGPUSystems(e){this.compute&&(this.compute.optimizeRoute(e.routePoints,e.truckPosition,e.houses.map(t=>t.position)),this.compute.updateHouses(e.houses,e.truckPosition,.016)),this.audio&&this.audio.processAudio([],{volume:1,pitch:1,reverb:0,echo:0})}renderWithWebGPU(e){if(!this.renderer)return;const t=this.threeJSCamera?[this.threeJSCamera.position.x,this.threeJSCamera.position.y,this.threeJSCamera.position.z]:[0,60,60],n=[0,0,0];this.renderer.render(e.time,t,n,e.houses,e.routePoints)}fallbackToThreeJS(){this.threeJSRenderer&&this.threeJSScene&&this.threeJSCamera&&this.threeJSRenderer.render(this.threeJSScene,this.threeJSCamera)}updatePerformanceStats(e){const n=performance.now()-e;this.performanceStats.fps=Math.round(1e3/n),this.performanceStats.gpuTime=n*.7,this.performanceStats.cpuTime=n*.3,this.performanceStats.memoryUsage=this.estimateMemoryUsage()}estimateMemoryUsage(){const e=this.threeJSScene?.getObjectByName("HouseManager")?.children.length||0,t=this.threeJSScene?.getObjectByName("RouteLine")?.geometry?.attributes.position.count||0;return e*.1+t*.01+5+10}optimizeRouteDrawing(e){return!this.compute||!this.initialized||this.compute.optimizeRoute(e,{x:0,y:0,z:0},[]),e}accelerateHouseUpdates(e,t,n){return!this.compute||!this.initialized||this.compute.updateHouses(e,t,n),e}processAudioWithWebGPU(e,t){return!this.audio||!this.initialized||this.audio.processAudio(e,t),e}getPerformanceStats(){return{...this.performanceStats,webgpuEnabled:this.initialized&&!this.fallbackMode,systems:{renderer:!!this.renderer,compute:!!this.compute,audio:!!this.audio}}}enableDebugMode(){this.renderer&&(this.renderer.debugMode=!0),this.compute&&(this.compute.debugMode=!0),this.audio&&(this.audio.debugMode=!0)}disableDebugMode(){this.renderer&&(this.renderer.debugMode=!1),this.compute&&(this.compute.debugMode=!1),this.audio&&(this.audio.debugMode=!1)}destroy(){this.renderer&&this.renderer.destroy(),this.compute&&this.compute.destroy(),this.audio&&this.audio.destroy(),this.initialized=!1}}let Yt=null,lt=null,_n=null,_t=null;const Hs=new Set,jm=new C(0,0,0),Km=new C(0,60,60);async function Jm(i,e){_n=new pm,_n.background=Wt.background,Yt=new Cl({canvas:i,antialias:!0,alpha:!1}),Yt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Yt.outputColorSpace=Ce,_t=new Ym(i,e),await _t.initialize()?(console.log("WebGPU integration enabled - enhanced performance available"),_t.setThreeJSScene(_n)):console.log("WebGPU not available - using standard Three.js rendering");const n=window.innerWidth/window.innerHeight;{const r=e.WORLD_SIZE*.75;lt=new Rr(r*n/-2,r*n/2,r/2,r/-2,-200,400)}return lt.position.copy(Km),lt.lookAt(jm),_t&&(_t.setThreeJSCamera(lt),_t.setThreeJSRenderer(Yt)),tg(_n),Va(e),window.addEventListener("resize",()=>Va(e)),{renderer:Yt,scene:_n,camera:lt}}function fr(){return _n}function Zm(){return lt}function Qm(){!Yt||!_n||!lt||(_t&&_t.initialized?_t.render():Yt.render(_n,lt))}function eg(i){return typeof i=="function"&&Hs.add(i),()=>Hs.delete(i)}function Va(i){if(!Yt||!lt)return;const e=window.innerWidth,t=window.innerHeight;Yt.setSize(e,t,!1);const n=e/t;if(lt instanceof Rr){const r=i.WORLD_SIZE*.85;lt.left=-r*n/2,lt.right=r*n/2,lt.top=r/2,lt.bottom=-r/2,lt.updateProjectionMatrix()}else lt instanceof Ut&&(lt.aspect=n,lt.updateProjectionMatrix());for(const r of Hs)r(e,t,Yt)}function tg(i){const e=new wm(16777215,.55);i.add(e);const t=new Em(16777215,.65);t.position.set(60,80,40),i.add(t)}function ng(){return _t?_t.getPerformanceStats():null}function Fl(){return _t&&_t.initialized}function ig(i){return _t&&_t.initialized?_t.optimizeRouteDrawing(i):i}const Ti=new Map,Ke={x:0,y:0,ndcX:0,ndcY:0,down:!1,button:0,lastSampleX:0,lastSampleY:0},Nl=new Set,Vs=new Set,rg=4;let Ws=null;function sg(i){Ws=i,i.addEventListener("pointerdown",og),window.addEventListener("pointermove",ag),window.addEventListener("pointerup",lg),window.addEventListener("keydown",cg),window.addEventListener("keyup",ug)}function xs(i,e){return Ti.has(i)||Ti.set(i,new Set),Ti.get(i).add(e),()=>Ti.get(i)?.delete(e)}function Gt(i){return Vs.has(i)?(Vs.delete(i),!0):!1}function gi(i,e){const t=Ti.get(i);if(t)for(const n of t)n(e)}function og(i){Ke.down=!0,Ke.button=i.button,io(i),Ws&&Ws.setPointerCapture(i.pointerId),gi("pointer-down",ro(i))}function ag(i){io(i);const e=ro(i);gi("pointer-move",e);const t=Ke.x-Ke.lastSampleX,n=Ke.y-Ke.lastSampleY;Math.hypot(t,n)>=rg&&(Ke.lastSampleX=Ke.x,Ke.lastSampleY=Ke.y,gi("pointer-sample",e))}function lg(i){io(i),Ke.down=!1,Ke.button=-1,gi("pointer-up",ro(i))}function cg(i){i.repeat||(Nl.add(i.code),Vs.add(i.code),gi("key-down",{code:i.code,event:i}))}function ug(i){Nl.delete(i.code),gi("key-up",{code:i.code,event:i})}function io(i){Ke.x=i.clientX,Ke.y=i.clientY,Ke.ndcX=i.clientX/window.innerWidth*2-1,Ke.ndcY=-(i.clientY/window.innerHeight)*2+1}function ro(i){return{event:i,x:Ke.x,y:Ke.y,ndcX:Ke.ndcX,ndcY:Ke.ndcY,down:Ke.down,button:Ke.button}}const Ss=new C,Ms=new C;function dg(i,e=2048){const t=new Array(e+1);let n=0;i.getPointAt(0,Ss),t[0]={u:0,s:0};for(let s=1;s<=e;s+=1){const a=s/e;i.getPointAt(a,Ms),n+=Ms.distanceTo(Ss),t[s]={u:a,s:n},Ss.copy(Ms)}return{length:n,resolution:e,samples:t}}function hg(i,e){const{length:t}=i;if(t<=0)return 0;const n=(e%t+t)%t;return mg(i,n)}function fg(i,e,t){if(!i||i.length<=0)return e;const r=pg(i,e)+t;return hg(i,r)}function pg(i,e){if(!i||i.length<=0)return 0;const t=(e%1+1)%1,{samples:n}=i;let r=0,s=n.length-1;for(;r<=s;){const o=r+s>>>1,c=n[o];if(Math.abs(c.u-t)<1e-6)return c.s;c.u<t?r=o+1:s=o-1}const a=Math.max(1,r),l=n[a-1],h=n[a],u=h.u-l.u||1e-6,p=(t-l.u)/u;return l.s+(h.s-l.s)*p}function mg(i,e){const{samples:t,length:n}=i,r=(e%n+n)%n;let s=0,a=t.length-1;for(;s<=a;){const d=s+a>>>1,g=t[d];if(Math.abs(g.s-r)<1e-4)return g.u;g.s<r?s=d+1:a=d-1}const l=Math.max(1,s),h=t[l-1],u=t[l],p=u.s-h.s||1e-6,o=(r-h.s)/p;return((h.u+(u.u-h.u)*o)%1+1)%1}const gg=2048,_g=256,Bi=16754810,Ol=6607556,vg=7315455,Wa=new Am,xg=new gn(new C(0,1,0),0),Bn=new C,Sg=new C,Xa=new C,ys=new Tm,ce={scene:null,mapState:null,config:null,curve:null,lut:null,length:0,commitListeners:new Set,mode:"idle",drawingPoints:[],minSampleDist:.35,line:null,lineGeometry:null,lineMaterial:null,previewMaterial:null,previewGeometry:null,previewLine:null};function Mg(i,e,t){return ce.scene=i,ce.mapState=e,ce.config=t,ce.minSampleDist=t.MIN_SAMPLE_DIST??.35,ce.lineGeometry=new xt,ce.lineMaterial=new On({color:vg,linewidth:2}),ce.line=new Os(ce.lineGeometry,ce.lineMaterial),ce.line.name="RouteLine",ce.line.visible=!1,i.add(ce.line),ce.previewGeometry=new xt,ce.previewMaterial=new On({color:Bi,linewidth:1}),ce.previewLine=new Os(ce.previewGeometry,ce.previewMaterial),ce.previewLine.name="RoutePreview",ce.previewLine.visible=!1,i.add(ce.previewLine),ce}function Bl(){if(!ce.scene)throw new Error("Route system not initialized");ce.mode="drawing",ce.drawingPoints.length=0,ce.previewLine.visible=!0,ce.previewMaterial.color.setHex(Bi)}function yg(){ce.mode==="drawing"&&ce.drawingPoints.length>1&&(ce.mode="ready",zl())}function _r(i,e=!1){if(ce.mode!=="drawing"||!i)return;const t=new C(i.x,0,i.z),n=ce.drawingPoints[ce.drawingPoints.length-1],r=ce.minSampleDist;if(!n||e||n.distanceToSquared(t)>=r*r){if(ce.drawingPoints.length>=ce.config.MAX_POINTS)return;ce.drawingPoints.push(t),zl()}}function Ci(){ce.mode="idle",ce.previewLine.visible=!1,ce.drawingPoints.length=0,ce.previewMaterial.color.setHex(Bi)}function Gl(i=!1,e={}){if(ce.mode==="idle")return!1;const t=kl();if(t.length<2)return Ci(),!1;const n=ce.config.RDP_EPS>0&&t.length>2?Xs(t,ce.config.RDP_EPS):t.slice();if(wg(n),!i&&!qa(n))return ce.previewMaterial.color.setHex(Bi),!1;if(!qa(n))return Ci(),!1;const r=ig(n),s=r!==n?r:n,a=new gm(s,!0,"catmullrom",.12),l=dg(a,gg);let h=null;if(e.anchor&&(h=Rg(a,e.anchor,e.attachRadius),!h))return Ci(),!1;ce.curve=a,ce.lut=l,ce.length=l.length,ce.line.visible=!0,Tg(a),ce.previewLine.visible=!1,ce.drawingPoints.length=0,ce.mode="idle",ce.previewMaterial.color.setHex(Ol);const u={curve:a,lut:l,attachInfo:h};for(const p of ce.commitListeners)p(u);return u}function bg(i){return ce.commitListeners.add(i),()=>ce.commitListeners.delete(i)}function Eg(i,e,t=Bn){if(!i)return null;Wa.setFromCamera(e,i);const n=Wa.ray.intersectPlane(xg,t);return n?t.set(n.x,0,n.z):null}function zl(){if(ce.mode==="idle"){ce.previewLine.visible=!1;return}const i=kl();if(Ag(i),i.length<2){ce.previewMaterial.color.setHex(Bi);return}ce.previewMaterial.color.setHex(Ol)}function kl(){return ce.drawingPoints.map(i=>i.clone())}function wg(i){if(i.length<2)return;const e=i[0];i[i.length-1].distanceToSquared(e)>1e-4?i.push(e.clone()):i[i.length-1]=e.clone()}function qa(i){if(!ce.mapState)return!0;const e=ce.mapState.half;for(const t of i)if(Math.abs(t.x)>e||Math.abs(t.z)>e)return!1;return!0}function Ag(i){if(!i.length){ce.previewLine.visible=!1;return}const e=new Float32Array(i.length*3);for(let t=0;t<i.length;t+=1){const n=i[t];e[t*3+0]=n.x,e[t*3+1]=.05,e[t*3+2]=n.z}ce.previewGeometry.setAttribute("position",new $e(e,3)),ce.previewGeometry.computeBoundingSphere(),ce.previewLine.visible=!0}function Tg(i){const e=_g,t=new Float32Array((e+1)*3);for(let n=0;n<=e;n+=1){const r=n/e;i.getPointAt(r,Bn),t[n*3+0]=Bn.x,t[n*3+1]=.06,t[n*3+2]=Bn.z}ce.lineGeometry.setAttribute("position",new $e(t,3)),ce.lineGeometry.computeBoundingSphere()}function Rg(i,e,t=6,n=256){let r=1/0,s=0;for(let a=0;a<=n;a+=1){const l=a/n;i.getPointAt(l,Bn);const h=Bn.distanceTo(e);h<r&&(r=h,s=l,Xa.copy(Bn))}return r>t?null:{u:s,point:Xa.clone(),distance:r}}function Xs(i,e){if(i.length<=2)return i.slice();const t=i[0],n=i[i.length-1];let r=-1,s=0;for(let a=1;a<i.length-1;a+=1){const l=Cg(i[a],t,n);l>s&&(r=a,s=l)}if(s>e){const a=Xs(i.slice(0,r+1),e),l=Xs(i.slice(r),e);return a.slice(0,a.length-1).concat(l)}return[t.clone(),n.clone()]}function Cg(i,e,t){return ys.start.copy(e),ys.end.copy(t),ys.closestPointToPoint(i,!0,Sg).distanceTo(i)}const Hl=4294967295;function br(i){if(typeof i=="number"&&Number.isFinite(i))return i>>>0;if(typeof i=="string"){let t=0;for(let n=0;n<i.length;n+=1)t=Math.imul(31,t)+i.charCodeAt(n),t|=0;return t>>>0||1}return Math.floor(Math.random()*Hl)||1}function Vl(i){let e=br(i)||1;function t(){e+=1831565813;let r=e;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/Hl}return{seed:e>>>0,rand(){return t()},randRange(r,s){return r+(s-r)*t()},pick(r){if(!r.length)return;const s=Math.floor(t()*r.length);return r[s]},shuffle(r){for(let s=r.length-1;s>0;s-=1){const a=Math.floor(t()*(s+1));[r[s],r[a]]=[r[a],r[s]]}return r}}}function Pg(i,e,t){const n=new jt;n.name="Map",i.add(n);const r=t.WORLD_SIZE,s=r/2,a=new mi({color:Wt.ground,roughness:.85,metalness:.05}),l=new vt(new Tr(r,r,1,1),a);l.rotation.x=-Math.PI/2,l.receiveShadow=!1,n.add(l);const h=Ug(r,t.GRID_RES);return h.visible=!1,n.add(h),{root:n,size:r,half:s,ground:l,grid:h,obstacles:[]}}function Lg(i,e){i?.grid&&(i.grid.visible=e)}function Dg(i,e){const t=i.size*.08,n=e.randRange(-i.half+t,i.half-t),r=e.randRange(-i.half+t,i.half-t);return{x:n,z:r,y:0}}function Ug(i,e){const t=i/e,n=i/2,r=[];for(let h=-n;h<=n;h+=t)r.push(-n,.01,h,n,.01,h),r.push(h,.01,-n,h,.01,n);const s=new xt;s.setAttribute("position",new $e(r,3));const a=new On({color:4871528,linewidth:1}),l=new Bs(s,a);return l.frustumCulled=!1,l}const Ig=/^[og]\s*(.+)?/,Fg=/^mtllib /,Ng=/^usemtl /,Og=/^usemap /,$a=/\s+/,Ya=new C,bs=new C,ja=new C,Ka=new C,Lt=new C,pr=new Te;function Bg(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const l={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const u={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return u.clone=this.clone.bind(u),u}};return this.materials.push(l),l},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){const r=this.vertices,s=this.object.geometry.normals;Ya.fromArray(r,e),bs.fromArray(r,t),ja.fromArray(r,n),Lt.subVectors(ja,bs),Ka.subVectors(Ya,bs),Lt.cross(Ka),Lt.normalize(),s.push(Lt.x,Lt.y,Lt.z),s.push(Lt.x,Lt.y,Lt.z),s.push(Lt.x,Lt.y,Lt.z)},addColor:function(e,t,n){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,s,a,l,h,u){const p=this.vertices.length;let o=this.parseVertexIndex(e,p),c=this.parseVertexIndex(t,p),d=this.parseVertexIndex(n,p);if(this.addVertex(o,c,d),this.addColor(o,c,d),l!==void 0&&l!==""){const g=this.normals.length;o=this.parseNormalIndex(l,g),c=this.parseNormalIndex(h,g),d=this.parseNormalIndex(u,g),this.addNormal(o,c,d)}else this.addFaceNormal(o,c,d);if(r!==void 0&&r!==""){const g=this.uvs.length;o=this.parseUVIndex(r,g),c=this.parseUVIndex(s,g),d=this.parseUVIndex(a,g),this.addUV(o,c,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,a=e.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,a=t.length;s<a;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return i.startObject("",!1),i}class Wl extends Pl{constructor(e){super(e),this.materials=null}load(e,t,n,r){const s=this,a=new Mm(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{t(s.parse(l))}catch(h){r?r(h):console.error(h),s.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Bg;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let r=[];for(let l=0,h=n.length;l<h;l++){const u=n[l].trimStart();if(u.length===0)continue;const p=u.charAt(0);if(p!=="#")if(p==="v"){const o=u.split($a);switch(o[0]){case"v":t.vertices.push(parseFloat(o[1]),parseFloat(o[2]),parseFloat(o[3])),o.length>=7?(pr.setRGB(parseFloat(o[4]),parseFloat(o[5]),parseFloat(o[6])).convertSRGBToLinear(),t.colors.push(pr.r,pr.g,pr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(o[1]),parseFloat(o[2]),parseFloat(o[3]));break;case"vt":t.uvs.push(parseFloat(o[1]),parseFloat(o[2]));break}}else if(p==="f"){const c=u.slice(1).trim().split($a),d=[];for(let _=0,m=c.length;_<m;_++){const f=c[_];if(f.length>0){const x=f.split("/");d.push(x)}}const g=d[0];for(let _=1,m=d.length-1;_<m;_++){const f=d[_],x=d[_+1];t.addFace(g[0],f[0],x[0],g[1],f[1],x[1],g[2],f[2],x[2])}}else if(p==="l"){const o=u.substring(1).trim().split(" ");let c=[];const d=[];if(u.indexOf("/")===-1)c=o;else for(let g=0,_=o.length;g<_;g++){const m=o[g].split("/");m[0]!==""&&c.push(m[0]),m[1]!==""&&d.push(m[1])}t.addLineGeometry(c,d)}else if(p==="p"){const c=u.slice(1).trim().split(" ");t.addPointGeometry(c)}else if((r=Ig.exec(u))!==null){const o=(" "+r[0].slice(1).trim()).slice(1);t.startObject(o)}else if(Ng.test(u))t.object.startMaterial(u.substring(7).trim(),t.materialLibraries);else if(Fg.test(u))t.materialLibraries.push(u.substring(7).trim());else if(Og.test(u))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(r=u.split(" "),r.length>1){const c=r[1].trim().toLowerCase();t.object.smooth=c!=="0"&&c!=="off"}else t.object.smooth=!0;const o=t.object.currentMaterial();o&&(o.smooth=t.object.smooth)}else{if(u==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+u+'"')}}t.finalize();const s=new jt;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let l=0,h=t.objects.length;l<h;l++){const u=t.objects[l],p=u.geometry,o=u.materials,c=p.type==="Line",d=p.type==="Points";let g=!1;if(p.vertices.length===0)continue;const _=new xt;_.setAttribute("position",new $e(p.vertices,3)),p.normals.length>0&&_.setAttribute("normal",new $e(p.normals,3)),p.colors.length>0&&(g=!0,_.setAttribute("color",new $e(p.colors,3))),p.hasUVIndices===!0&&_.setAttribute("uv",new $e(p.uvs,2));const m=[];for(let x=0,v=o.length;x<v;x++){const y=o[x],w=y.name+"_"+y.smooth+"_"+g;let T=t.materials[w];if(this.materials!==null){if(T=this.materials.create(y.name),c&&T&&!(T instanceof On)){const P=new On;Qt.prototype.copy.call(P,T),P.color.copy(T.color),T=P}else if(d&&T&&!(T instanceof Ai)){const P=new Ai({size:10,sizeAttenuation:!1});Qt.prototype.copy.call(P,T),P.color.copy(T.color),P.map=T.map,T=P}}T===void 0&&(c?T=new On:d?T=new Ai({size:1,sizeAttenuation:!1}):T=new _m,T.name=y.name,T.flatShading=!y.smooth,T.vertexColors=g,t.materials[w]=T),m.push(T)}let f;if(m.length>1){for(let x=0,v=o.length;x<v;x++){const y=o[x];_.addGroup(y.groupStart,y.groupCount,x)}c?f=new Bs(_,m):d?f=new fs(_,m):f=new vt(_,m)}else c?f=new Bs(_,m[0]):d?f=new fs(_,m[0]):f=new vt(_,m[0]);f.name=u.name,s.add(f)}else if(t.vertices.length>0){const l=new Ai({size:1,sizeAttenuation:!1}),h=new xt;h.setAttribute("position",new $e(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new $e(t.colors,3)),l.vertexColors=!0);const u=new fs(h,l);s.add(u)}return s}}const Xl=new Map;async function Gg(){console.log("🎨 Starting asset preloading...");const i=[{name:"truck",path:"assets/models/truck.obj"},{name:"house",path:"assets/models/house.obj"}],e=new Wl,t=i.map(n=>zg(e,n));try{const n=await Promise.all(t);return console.log("✅ All assets preloaded successfully"),n}catch(n){return console.warn("⚠️ Some assets failed to load:",n),[]}}function zg(i,e){return new Promise((t,n)=>{i.load(e.path,r=>{Xl.set(e.name,r),console.log(`✅ ${e.name} asset loaded`),t({name:e.name,object:r,success:!0})},r=>{const s=Math.round(r.loaded/r.total*100);console.log(`Loading ${e.name}: ${s}%`)},r=>{console.warn(`❌ Failed to load ${e.name}:`,r),t({name:e.name,object:null,success:!1})})})}function kg(i){return Xl.get(i)}const mr=new C,Es=new C;class Hg{constructor(e){this.config=e,this.group=new jt,this.group.name="Truck",this.loadTruckModel(),this.curve=null,this.lut=null,this.u=0,this.baseSpeed=e.BASE_SPEED,this.speed=e.BASE_SPEED,this.deliveryRadius=e.DELIVERY_RADIUS,this.cooldown=0}loadTruckModel(){const e=kg("truck");if(e){const t=e.clone();t.scale.setScalar(.009),t.rotation.y=Math.PI,t.position.set(0,0,0),this.applyTruckMaterials(t),this.group.add(t),console.log("✅ Truck model loaded from cache")}else new Wl().load("assets/models/truck.obj",n=>{n.scale.setScalar(.03),n.rotation.y=Math.PI,n.position.set(0,0,0),this.applyTruckMaterials(n),this.group.add(n),console.log("✅ Truck model loaded from file")},n=>{console.log("Loading truck model:",n.loaded/n.total*100+"%")},n=>{console.error("❌ Error loading truck model:",n),this.group.add(Vg())})}applyTruckMaterials(e){e.traverse(t=>{if(t.isMesh){const n=new mi({color:13935988,roughness:.7,metalness:.2});t.material=n}})}attachToCurve(e,t,n=0,r=null){this.curve=e,this.lut=t,this.u=(n%1+1)%1,e&&(r?this.group.position.copy(r):(e.getPointAt(this.u,mr),this.group.position.copy(mr)))}addToScene(e){e.add(this.group)}update(e,t){if(!this.curve||!this.lut)return;const{houses:n=[],onDeliver:r=()=>{},now:s=typeof performance<"u"?performance.now():Date.now()}=t||{},l=this.computeSpeed()*e;this.cooldown>0?this.cooldown-=e:this.u=fg(this.lut,this.u,l),this.curve.getPointAt(this.u,mr),this.curve.getTangentAt(this.u,Es),this.group.position.copy(mr);const h=Math.atan2(Es.x,Es.z);if(this.group.rotation.y=h,!(this.cooldown>0))for(const u of n){if(!u.active||typeof u.isServedRecently=="function"&&u.isServedRecently(s))continue;if(Il(this.group.position,u.position)<=this.deliveryRadius){this.cooldown=.25,r(u,s);break}}}computeSpeed(){return this.baseSpeed}}function Vg(){const i=new jt,e=new kn(3.2,1.2,2),t=new kn(1.4,1.3,1.8),n=new mi({color:Wt.truckBase,roughness:.4,metalness:.1}),r=new mi({color:Wt.truckCab,roughness:.35,metalness:.1}),s=new vt(e,n);s.position.y=.6,i.add(s);const a=new vt(t,r);return a.position.set(1,.75,0),i.add(a),i}const ql=48,Ja=300,Wg=9,Xg=500;class qg{constructor(e,t){this.position=e.clone(),this.deadlineMaxMs=t,this.deadlineMs=t,this.active=!0,this.warningThreshold=.25,this.lastServedAt=-1/0,this.group=Yg(),this.group.position.copy(this.position),this.group.name="House",this.timerMesh=this.group.getObjectByName("HouseTimer"),this.bodyMesh=this.group.getObjectByName("HouseBody"),this.roofMesh=this.group.getObjectByName("HouseRoof"),this.ringIndexCount=this.timerMesh.geometry.index?.count??ql*6,this.refreshVisuals()}update(e,t){return this.active?(this.deadlineMs-=e*1e3,this.refreshVisuals(),this.deadlineMs<=0):!1}deliver(e){this.deadlineMs=this.deadlineMaxMs,this.lastServedAt=e,this.refreshVisuals()}isServedRecently(e){return e-this.lastServedAt<Xg}refreshVisuals(){if(!this.active){this.group.visible=!1;return}this.group.visible=!0;const e=yr(this.deadlineMs/this.deadlineMaxMs,0,1),t=Math.max(3,Math.floor(this.ringIndexCount*e));this.timerMesh.geometry.setDrawRange(0,t);const n=e>.5?Ha(Wt.safe,Wt.warning,(1-e)*2):Ha(Wt.warning,Wt.danger,yr((.5-e)/.5,0,1));this.timerMesh.material.color.copy(n);const r=e<this.warningThreshold?1+Math.sin((1-e)*20)*.05:1;this.timerMesh.scale.setScalar(r)}setDeadline(e){this.deadlineMaxMs=e,this.deadlineMs=e,this.refreshVisuals()}}class $g{constructor(e,t,n,r){this.scene=e,this.mapState=t,this.rng=n,this.config=r,this.houses=[],this.group=new jt,this.group.name="HouseManager",e.add(this.group),this.elapsed=0,this.spawnTimer=r.FIRST_SPAWN_AT,this.spawnedCount=0,this.maxHouses=r.MAX_HOUSES||12,this.justSpawned=!1,this.weekElapsed=0,this.weekNumber=1,this.housesSpawnedThisWeek=0}setRng(e){this.rng=e}reset(){for(const e of this.houses)this.group.remove(e.group);this.houses.length=0,this.elapsed=0,this.spawnTimer=this.config.FIRST_SPAWN_AT,this.spawnedCount=0,this.maxHouses=this.config.MAX_HOUSES||12,this.justSpawned=!1,this.weekElapsed=0,this.weekNumber=1,this.housesSpawnedThisWeek=0}resetWeek(){this.weekElapsed=0,this.weekNumber+=1,this.housesSpawnedThisWeek=0,console.log(`🏠 Week ${this.weekNumber} started - resetting house spawns`)}update(e,t){this.elapsed+=e,this.weekElapsed+=e,this.justSpawned=!1;let n=null;for(const s of this.houses){if(!s.active)continue;s.update(e,t)&&!n&&(n=s)}return this.shouldSpawnHouse()&&(this.spawnNextHouse(),this.justSpawned=!0),n}shouldSpawnHouse(){if(this.weekNumber<=5){const e=[2,22,45],t=this.weekElapsed;for(let n=0;n<e.length;n++)if(this.housesSpawnedThisWeek===n&&t>=e[n]&&t<e[n]+1)return!0}else{const e=[2,22,45,60,75],t=this.weekElapsed;for(let n=0;n<e.length;n++)if(this.housesSpawnedThisWeek===n&&t>=e[n]&&t<e[n]+1)return!0}return!1}spawnNextHouse(){const e=this.getDeadline(),t=this.findSpawnPosition(),n=new qg(t,e);return this.houses.push(n),this.group.add(n.group),this.spawnedCount+=1,this.housesSpawnedThisWeek+=1,console.log(`🏠 House spawned! Week ${this.weekNumber}, House ${this.housesSpawnedThisWeek} at ${this.weekElapsed.toFixed(1)}s`),n}findSpawnPosition(){let e=null;for(let t=0;t<40;t+=1){const n=Dg(this.mapState,this.rng),r=new C(n.x,0,n.z);if(this.isFarFromOthers(r))return r;e||(e=r)}return e||new C(0,0,0)}isFarFromOthers(e){for(const t of this.houses){if(!t.active)continue;if(Il(e,t.position)<Wg)return!1}return!0}handleDelivery(e,t){e&&e.deliver(t)}getHouses(){return this.houses}getActiveHouseCount(){return this.houses.filter(e=>e.active).length}getDeadline(){const e=Math.min(this.elapsed,Ja),t=this.config.DEADLINE_START*1e3,n=this.config.DEADLINE_END*1e3;return Vm(t,n,Wm(0,Ja,e))}wasJustSpawned(){return this.justSpawned}}function Yg(){const i=new jt,e=new Mr(1.3,1.3,1.5,12),t=new Mr(0,1.45,1.1,12),n=new no(1.5,1.7,ql),r=new mi({color:Wt.houseBody,roughness:.6,metalness:.05}),s=new mi({color:Wt.houseRoof,roughness:.45,metalness:.1}),a=new Zs({color:Wt.safe,transparent:!0,opacity:.9,side:$t}),l=new vt(e,r);l.name="HouseBody",l.position.y=.75,i.add(l);const h=new vt(t,s);h.name="HouseRoof",h.position.y=1.55,i.add(h);const u=new vt(n,a);return u.name="HouseTimer",u.rotation.x=-Math.PI/2,u.position.y=2,i.add(u),i}const jg=[{id:"tuned_engine",name:"Tuned Engine",desc:"+10% base speed. Trucks move faster between deliveries.",apply:i=>{i.truck.baseSpeed*=1.1},stackable:!0},{id:"service_radius",name:"Service Radius+",desc:"+10% delivery radius. Easier to hit houses.",apply:i=>{i.truck.deliveryRadius*=1.1},stackable:!0},{id:"patient_customers",name:"Patient Customers",desc:"+12% max deadlines for all houses.",apply:i=>{i.config.DEADLINE_START*=1.12,i.config.DEADLINE_END*=1.12;for(const e of i.houseManager.getHouses())e.setDeadline(e.deadlineMaxMs*1.12)},stackable:!1},{id:"dispatch_optimizer",name:"Dispatch Optimizer",desc:"Deadlines +20% longer and delivery radius +15%.",apply:i=>{i.config.DEADLINE_START*=1.2,i.config.DEADLINE_END*=1.2,i.truck.deliveryRadius*=1.15},stackable:!1},{id:"time_master",name:"Time Master",desc:"Week timer +15 seconds. More time to plan routes.",apply:i=>{i.config.WEEK_SECONDS+=15},stackable:!0},{id:"fleet_training",name:"Fleet Training",desc:"Base speed +10% and delivery radius +5%.",apply:i=>{i.truck.baseSpeed*=1.1,i.truck.deliveryRadius*=1.05},stackable:!0}];function Kg(i,e=new Set,t=3,n=null){const s=jg.filter(a=>!(!a.stackable&&e.has(a.id)||a.condition&&n&&!a.condition(n))).slice();return i.shuffle(s),s.slice(0,t)}const $={pauseBtn:null,speedBtn:null,pauseIcon:null,speedLabel:null,hud:null,scoreLabel:null,weekLabel:null,seedLabel:null,fpsLabel:null,debugWrap:null,upgradeModal:null,upgradeCards:null,gameOverModal:null,gameOverScore:null,gameOverHigh:null,gameOverSeed:null,retryBtn:null,newRunBtn:null,settingsBtn:null,settingsPanel:null,volumeSlider:null,bgMusicVolumeSlider:null,onPausePress:null,onSpeedPress:null,onUpgradeSelect:null,onRetry:null,onNewRun:null,onVolumeChange:null,onBackgroundMusicVolumeChange:null,currentCards:[]};function Jg(){$.pauseBtn=document.querySelector("[data-action=pause]"),$.speedBtn=document.querySelector("[data-action=speed]"),$.pauseIcon=document.querySelector("[data-ui=pause-icon]"),$.speedLabel=document.querySelector("[data-ui=speed-label]"),$.hud=document.querySelector(".hud"),$.scoreLabel=document.querySelector("[data-ui=score]"),$.weekLabel=document.querySelector("[data-ui=week]"),$.weekTimerLabel=document.querySelector("[data-ui=week-timer]"),$.upgradeCountLabel=document.querySelector("[data-ui=upgrade-count]"),$.seedLabel=document.querySelector("[data-ui=seed]"),$.webgpuWrap=document.querySelector("[data-ui=webgpu-wrap]"),$.webgpuStatus=document.querySelector("[data-ui=webgpu-status]"),$.fpsLabel=document.querySelector("[data-ui=fps]"),$.debugWrap=document.querySelector("[data-ui=debug]"),$.upgradeModal=document.querySelector(".upgrade-modal"),$.upgradeCards=document.querySelector(".upgrade-cards"),$.gameOverModal=document.querySelector(".gameover-modal"),$.gameOverScore=document.querySelector("[data-ui=final-score]"),$.gameOverHigh=document.querySelector("[data-ui=final-best]"),$.gameOverSeed=document.querySelector("[data-ui=final-seed]"),$.retryBtn=document.querySelector("[data-action=retry]"),$.newRunBtn=document.querySelector("[data-action=new-seed]"),$.settingsBtn=document.querySelector("[data-action=settings]"),$.settingsPanel=document.querySelector(".settings-panel"),$.volumeSlider=document.querySelector("[data-setting=volume]"),$.bgMusicVolumeSlider=document.querySelector("[data-setting=bgMusicVolume]"),$.pauseBtn?.addEventListener("click",()=>$.onPausePress?.()),$.speedBtn?.addEventListener("click",i=>{console.log("🚨 SPEED BUTTON CLICKED!",{event:i.type,isTrusted:i.isTrusted,target:i.target,currentTarget:i.currentTarget}),console.trace("Speed button click stack trace:"),$.onSpeedPress?.()}),$.retryBtn?.addEventListener("click",()=>$.onRetry?.()),$.newRunBtn?.addEventListener("click",()=>$.onNewRun?.()),$.settingsBtn?.addEventListener("click",r_),document.querySelector("[data-action=twitter]")?.addEventListener("click",()=>{window.open("https://x.com/ariescipher7","_blank")}),document.querySelector("[data-action=itch]")?.addEventListener("click",()=>{window.open("https://cipheratlas.itch.io/","_blank")}),$.volumeSlider?.addEventListener("input",i=>{const e=Number(i.target.value);$.onVolumeChange?.(e)}),$.bgMusicVolumeSlider?.addEventListener("input",i=>{const e=Number(i.target.value);$.onBackgroundMusicVolumeChange?.(e)}),Lr(!1)}function $l(i){$.scoreLabel&&($.scoreLabel.textContent=String(i))}function Yl(i){$.weekLabel&&($.weekLabel.textContent=String(i))}function Zg(i){$.weekTimerLabel&&($.weekTimerLabel.textContent=String(Math.ceil(i)))}function Qg(i){$.seedLabel&&($.seedLabel.textContent=i)}function e_(i,e){$.debugWrap&&($.debugWrap.classList.toggle("hidden",!e),e&&$.fpsLabel&&($.fpsLabel.textContent=`${Math.round(i)}`))}function t_(i,e){!$.upgradeModal||!$.upgradeCards||($.onUpgradeSelect=e,$.currentCards=i,$.upgradeCards.innerHTML="",i.forEach((t,n)=>{const r=document.createElement("button");r.className="card",r.dataset.cardId=t.id,r.innerHTML=`<span class="card-index">${n+1}</span>
      <span class="card-title">${t.name}</span>
      <span class="card-desc">${t.desc}</span>`,r.addEventListener("click",()=>vr(n)),$.upgradeCards.appendChild(r)}),document.body.classList.add("modal-open"),$.upgradeModal.classList.add("open"))}function jl(){$.upgradeModal&&($.onUpgradeSelect=null,$.currentCards=[],document.body.classList.remove("modal-open"),$.upgradeModal.classList.remove("open"))}function vr(i){if(!$.onUpgradeSelect)return;const e=$.currentCards[i];e&&$.onUpgradeSelect(e,i)}function n_(i,{onRetry:e,onNewRun:t}){$.gameOverModal&&($.onRetry=e,$.onNewRun=t,$.gameOverScore&&($.gameOverScore.textContent=String(i.score??0)),$.gameOverHigh&&($.gameOverHigh.textContent=String(i.highscore??0)),$.gameOverSeed&&($.gameOverSeed.textContent=i.seed??""),document.body.classList.add("modal-open"),$.gameOverModal.classList.add("open"))}function Kl(){$.gameOverModal&&($.gameOverModal.classList.remove("open"),document.body.classList.remove("modal-open"))}function i_(i,e,t){$.onVolumeChange=e,$.onBackgroundMusicVolumeChange=t,$.volumeSlider&&($.volumeSlider.value=String(i.volume??1)),$.bgMusicVolumeSlider&&($.bgMusicVolumeSlider.value=String(i.bgMusicVolume??.3))}function r_(){const i=$.settingsPanel?.classList.toggle("open");document.body.classList.toggle("modal-open",!!i)}function s_(i){$.onPausePress=i}function o_(i){$.onSpeedPress=i}function Lr(i){const e="▶",t="⏸";$.pauseBtn&&($.pauseBtn.setAttribute("aria-pressed",i?"true":"false"),$.pauseBtn.classList.toggle("active",i),$.pauseBtn.title=i?"Resume (Space)":"Pause (Space)"),$.pauseIcon&&($.pauseIcon.textContent=i?e:t)}function so(i){console.log("🎛️ UI setSpeedMultiplier called with:",i),console.trace("Stack trace:");const e="×";if($.speedLabel&&($.speedLabel.textContent=i+e),$.speedBtn){const t=i>1;$.speedBtn.setAttribute("aria-pressed",t?"true":"false"),$.speedBtn.classList.toggle("active",t),$.speedBtn.title=t?"Back to 1"+e:"Toggle 2"+e+" speed"}}function ws(i,e=null){if(!$.webgpuWrap||!$.webgpuStatus)return;$.webgpuWrap.setAttribute("data-status",i);const n=e||{checking:"Checking...",enabled:"WebGPU Active",disabled:"WebGL Fallback",error:"GPU Error"}[i]||"Unknown";$.webgpuStatus.textContent=n;let r="";switch(i){case"enabled":r="WebGPU is active - enhanced performance available";break;case"disabled":r="WebGPU not supported - using WebGL fallback (requires dedicated GPU)";break;case"error":r="WebGPU initialization failed";break;case"checking":r="Checking WebGPU support...";break}$.webgpuWrap.title=r,$.webgpuWrap.style.cursor="default",$.webgpuWrap.onclick=null}function a_(i){if(!i||!$.webgpuStatus)return;const e=Math.round(i.fps||0),t=(i.gpuTime||0).toFixed(1);$.webgpuStatus.textContent=`WebGPU Active (${e}fps)`,$.webgpuWrap.title=`WebGPU Performance: ${e} FPS, GPU Time: ${t}ms`}var Gn={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(i){(function(){var e=function(){this.init()};e.prototype={init:function(){var o=this||t;return o._counter=1e3,o._html5AudioPool=[],o.html5PoolSize=10,o._codecs={},o._howls=[],o._muted=!1,o._volume=1,o._canPlayEvent="canplaythrough",o._navigator=typeof window<"u"&&window.navigator?window.navigator:null,o.masterGain=null,o.noAudio=!1,o.usingWebAudio=!0,o.autoSuspend=!0,o.ctx=null,o.autoUnlock=!0,o._setup(),o},volume:function(o){var c=this||t;if(o=parseFloat(o),c.ctx||p(),typeof o<"u"&&o>=0&&o<=1){if(c._volume=o,c._muted)return c;c.usingWebAudio&&c.masterGain.gain.setValueAtTime(o,t.ctx.currentTime);for(var d=0;d<c._howls.length;d++)if(!c._howls[d]._webAudio)for(var g=c._howls[d]._getSoundIds(),_=0;_<g.length;_++){var m=c._howls[d]._soundById(g[_]);m&&m._node&&(m._node.volume=m._volume*o)}return c}return c._volume},mute:function(o){var c=this||t;c.ctx||p(),c._muted=o,c.usingWebAudio&&c.masterGain.gain.setValueAtTime(o?0:c._volume,t.ctx.currentTime);for(var d=0;d<c._howls.length;d++)if(!c._howls[d]._webAudio)for(var g=c._howls[d]._getSoundIds(),_=0;_<g.length;_++){var m=c._howls[d]._soundById(g[_]);m&&m._node&&(m._node.muted=o?!0:m._muted)}return c},stop:function(){for(var o=this||t,c=0;c<o._howls.length;c++)o._howls[c].stop();return o},unload:function(){for(var o=this||t,c=o._howls.length-1;c>=0;c--)o._howls[c].unload();return o.usingWebAudio&&o.ctx&&typeof o.ctx.close<"u"&&(o.ctx.close(),o.ctx=null,p()),o},codecs:function(o){return(this||t)._codecs[o.replace(/^x-/,"")]},_setup:function(){var o=this||t;if(o.state=o.ctx&&o.ctx.state||"suspended",o._autoSuspend(),!o.usingWebAudio)if(typeof Audio<"u")try{var c=new Audio;typeof c.oncanplaythrough>"u"&&(o._canPlayEvent="canplay")}catch{o.noAudio=!0}else o.noAudio=!0;try{var c=new Audio;c.muted&&(o.noAudio=!0)}catch{}return o.noAudio||o._setupCodecs(),o},_setupCodecs:function(){var o=this||t,c=null;try{c=typeof Audio<"u"?new Audio:null}catch{return o}if(!c||typeof c.canPlayType!="function")return o;var d=c.canPlayType("audio/mpeg;").replace(/^no$/,""),g=o._navigator?o._navigator.userAgent:"",_=g.match(/OPR\/(\d+)/g),m=_&&parseInt(_[0].split("/")[1],10)<33,f=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,x=g.match(/Version\/(.*?) /),v=f&&x&&parseInt(x[1],10)<15;return o._codecs={mp3:!!(!m&&(d||c.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(c.canPlayType('audio/wav; codecs="1"')||c.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!c.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!c.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(c.canPlayType("audio/x-m4a;")||c.canPlayType("audio/m4a;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(c.canPlayType("audio/x-m4b;")||c.canPlayType("audio/m4b;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(c.canPlayType("audio/x-mp4;")||c.canPlayType("audio/mp4;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!c.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(c.canPlayType("audio/x-flac;")||c.canPlayType("audio/flac;")).replace(/^no$/,"")},o},_unlockAudio:function(){var o=this||t;if(!(o._audioUnlocked||!o.ctx)){o._audioUnlocked=!1,o.autoUnlock=!1,!o._mobileUnloaded&&o.ctx.sampleRate!==44100&&(o._mobileUnloaded=!0,o.unload()),o._scratchBuffer=o.ctx.createBuffer(1,1,22050);var c=function(d){for(;o._html5AudioPool.length<o.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,o._releaseHtml5Audio(g)}catch{o.noAudio=!0;break}for(var _=0;_<o._howls.length;_++)if(!o._howls[_]._webAudio)for(var m=o._howls[_]._getSoundIds(),f=0;f<m.length;f++){var x=o._howls[_]._soundById(m[f]);x&&x._node&&!x._node._unlocked&&(x._node._unlocked=!0,x._node.load())}o._autoResume();var v=o.ctx.createBufferSource();v.buffer=o._scratchBuffer,v.connect(o.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof o.ctx.resume=="function"&&o.ctx.resume(),v.onended=function(){v.disconnect(0),o._audioUnlocked=!0,document.removeEventListener("touchstart",c,!0),document.removeEventListener("touchend",c,!0),document.removeEventListener("click",c,!0),document.removeEventListener("keydown",c,!0);for(var y=0;y<o._howls.length;y++)o._howls[y]._emit("unlock")}};return document.addEventListener("touchstart",c,!0),document.addEventListener("touchend",c,!0),document.addEventListener("click",c,!0),document.addEventListener("keydown",c,!0),o}},_obtainHtml5Audio:function(){var o=this||t;if(o._html5AudioPool.length)return o._html5AudioPool.pop();var c=new Audio().play();return c&&typeof Promise<"u"&&(c instanceof Promise||typeof c.then=="function")&&c.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(o){var c=this||t;return o._unlocked&&c._html5AudioPool.push(o),c},_autoSuspend:function(){var o=this;if(!(!o.autoSuspend||!o.ctx||typeof o.ctx.suspend>"u"||!t.usingWebAudio)){for(var c=0;c<o._howls.length;c++)if(o._howls[c]._webAudio){for(var d=0;d<o._howls[c]._sounds.length;d++)if(!o._howls[c]._sounds[d]._paused)return o}return o._suspendTimer&&clearTimeout(o._suspendTimer),o._suspendTimer=setTimeout(function(){if(o.autoSuspend){o._suspendTimer=null,o.state="suspending";var g=function(){o.state="suspended",o._resumeAfterSuspend&&(delete o._resumeAfterSuspend,o._autoResume())};o.ctx.suspend().then(g,g)}},3e4),o}},_autoResume:function(){var o=this;if(!(!o.ctx||typeof o.ctx.resume>"u"||!t.usingWebAudio))return o.state==="running"&&o.ctx.state!=="interrupted"&&o._suspendTimer?(clearTimeout(o._suspendTimer),o._suspendTimer=null):o.state==="suspended"||o.state==="running"&&o.ctx.state==="interrupted"?(o.ctx.resume().then(function(){o.state="running";for(var c=0;c<o._howls.length;c++)o._howls[c]._emit("resume")}),o._suspendTimer&&(clearTimeout(o._suspendTimer),o._suspendTimer=null)):o.state==="suspending"&&(o._resumeAfterSuspend=!0),o}};var t=new e,n=function(o){var c=this;if(!o.src||o.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}c.init(o)};n.prototype={init:function(o){var c=this;return t.ctx||p(),c._autoplay=o.autoplay||!1,c._format=typeof o.format!="string"?o.format:[o.format],c._html5=o.html5||!1,c._muted=o.mute||!1,c._loop=o.loop||!1,c._pool=o.pool||5,c._preload=typeof o.preload=="boolean"||o.preload==="metadata"?o.preload:!0,c._rate=o.rate||1,c._sprite=o.sprite||{},c._src=typeof o.src!="string"?o.src:[o.src],c._volume=o.volume!==void 0?o.volume:1,c._xhr={method:o.xhr&&o.xhr.method?o.xhr.method:"GET",headers:o.xhr&&o.xhr.headers?o.xhr.headers:null,withCredentials:o.xhr&&o.xhr.withCredentials?o.xhr.withCredentials:!1},c._duration=0,c._state="unloaded",c._sounds=[],c._endTimers={},c._queue=[],c._playLock=!1,c._onend=o.onend?[{fn:o.onend}]:[],c._onfade=o.onfade?[{fn:o.onfade}]:[],c._onload=o.onload?[{fn:o.onload}]:[],c._onloaderror=o.onloaderror?[{fn:o.onloaderror}]:[],c._onplayerror=o.onplayerror?[{fn:o.onplayerror}]:[],c._onpause=o.onpause?[{fn:o.onpause}]:[],c._onplay=o.onplay?[{fn:o.onplay}]:[],c._onstop=o.onstop?[{fn:o.onstop}]:[],c._onmute=o.onmute?[{fn:o.onmute}]:[],c._onvolume=o.onvolume?[{fn:o.onvolume}]:[],c._onrate=o.onrate?[{fn:o.onrate}]:[],c._onseek=o.onseek?[{fn:o.onseek}]:[],c._onunlock=o.onunlock?[{fn:o.onunlock}]:[],c._onresume=[],c._webAudio=t.usingWebAudio&&!c._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(c),c._autoplay&&c._queue.push({event:"play",action:function(){c.play()}}),c._preload&&c._preload!=="none"&&c.load(),c},load:function(){var o=this,c=null;if(t.noAudio){o._emit("loaderror",null,"No audio support.");return}typeof o._src=="string"&&(o._src=[o._src]);for(var d=0;d<o._src.length;d++){var g,_;if(o._format&&o._format[d])g=o._format[d];else{if(_=o._src[d],typeof _!="string"){o._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(_),g||(g=/\.([^.]+)$/.exec(_.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&t.codecs(g)){c=o._src[d];break}}if(!c){o._emit("loaderror",null,"No codec support for selected audio sources.");return}return o._src=c,o._state="loading",window.location.protocol==="https:"&&c.slice(0,5)==="http:"&&(o._html5=!0,o._webAudio=!1),new r(o),o._webAudio&&a(o),o},play:function(o,c){var d=this,g=null;if(typeof o=="number")g=o,o=null;else{if(typeof o=="string"&&d._state==="loaded"&&!d._sprite[o])return null;if(typeof o>"u"&&(o="__default",!d._playLock)){for(var _=0,m=0;m<d._sounds.length;m++)d._sounds[m]._paused&&!d._sounds[m]._ended&&(_++,g=d._sounds[m]._id);_===1?o=null:g=null}}var f=g?d._soundById(g):d._inactiveSound();if(!f)return null;if(g&&!o&&(o=f._sprite||"__default"),d._state!=="loaded"){f._sprite=o,f._ended=!1;var x=f._id;return d._queue.push({event:"play",action:function(){d.play(x)}}),x}if(g&&!f._paused)return c||d._loadQueue("play"),f._id;d._webAudio&&t._autoResume();var v=Math.max(0,f._seek>0?f._seek:d._sprite[o][0]/1e3),y=Math.max(0,(d._sprite[o][0]+d._sprite[o][1])/1e3-v),w=y*1e3/Math.abs(f._rate),T=d._sprite[o][0]/1e3,P=(d._sprite[o][0]+d._sprite[o][1])/1e3;f._sprite=o,f._ended=!1;var U=function(){f._paused=!1,f._seek=v,f._start=T,f._stop=P,f._loop=!!(f._loop||d._sprite[o][2])};if(v>=P){d._ended(f);return}var S=f._node;if(d._webAudio){var A=function(){d._playLock=!1,U(),d._refreshBuffer(f);var B=f._muted||d._muted?0:f._volume;S.gain.setValueAtTime(B,t.ctx.currentTime),f._playStart=t.ctx.currentTime,typeof S.bufferSource.start>"u"?f._loop?S.bufferSource.noteGrainOn(0,v,86400):S.bufferSource.noteGrainOn(0,v,y):f._loop?S.bufferSource.start(0,v,86400):S.bufferSource.start(0,v,y),w!==1/0&&(d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),w)),c||setTimeout(function(){d._emit("play",f._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?A():(d._playLock=!0,d.once("resume",A),d._clearTimer(f._id))}else{var q=function(){S.currentTime=v,S.muted=f._muted||d._muted||t._muted||S.muted,S.volume=f._volume*t.volume(),S.playbackRate=f._rate;try{var B=S.play();if(B&&typeof Promise<"u"&&(B instanceof Promise||typeof B.then=="function")?(d._playLock=!0,U(),B.then(function(){d._playLock=!1,S._unlocked=!0,c?d._loadQueue():d._emit("play",f._id)}).catch(function(){d._playLock=!1,d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):c||(d._playLock=!1,U(),d._emit("play",f._id)),S.playbackRate=f._rate,S.paused){d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}o!=="__default"||f._loop?d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),w):(d._endTimers[f._id]=function(){d._ended(f),S.removeEventListener("ended",d._endTimers[f._id],!1)},S.addEventListener("ended",d._endTimers[f._id],!1))}catch(z){d._emit("playerror",f._id,z)}};S.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(S.src=d._src,S.load());var Y=window&&window.ejecta||!S.readyState&&t._navigator.isCocoonJS;if(S.readyState>=3||Y)q();else{d._playLock=!0,d._state="loading";var N=function(){d._state="loaded",q(),S.removeEventListener(t._canPlayEvent,N,!1)};S.addEventListener(t._canPlayEvent,N,!1),d._clearTimer(f._id)}}return f._id},pause:function(o){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"pause",action:function(){c.pause(o)}}),c;for(var d=c._getSoundIds(o),g=0;g<d.length;g++){c._clearTimer(d[g]);var _=c._soundById(d[g]);if(_&&!_._paused&&(_._seek=c.seek(d[g]),_._rateSeek=0,_._paused=!0,c._stopFade(d[g]),_._node))if(c._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),c._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||c._emit("pause",_?_._id:null)}return c},stop:function(o,c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(o)}}),d;for(var g=d._getSoundIds(o),_=0;_<g.length;_++){d._clearTimer(g[_]);var m=d._soundById(g[_]);m&&(m._seek=m._start||0,m._rateSeek=0,m._paused=!0,m._ended=!0,d._stopFade(g[_]),m._node&&(d._webAudio?m._node.bufferSource&&(typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),d._cleanBuffer(m._node)):(!isNaN(m._node.duration)||m._node.duration===1/0)&&(m._node.currentTime=m._start||0,m._node.pause(),m._node.duration===1/0&&d._clearSound(m._node))),c||d._emit("stop",m._id))}return d},mute:function(o,c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(o,c)}}),d;if(typeof c>"u")if(typeof o=="boolean")d._muted=o;else return d._muted;for(var g=d._getSoundIds(c),_=0;_<g.length;_++){var m=d._soundById(g[_]);m&&(m._muted=o,m._interval&&d._stopFade(m._id),d._webAudio&&m._node?m._node.gain.setValueAtTime(o?0:m._volume,t.ctx.currentTime):m._node&&(m._node.muted=t._muted?!0:o),d._emit("mute",m._id))}return d},volume:function(){var o=this,c=arguments,d,g;if(c.length===0)return o._volume;if(c.length===1||c.length===2&&typeof c[1]>"u"){var _=o._getSoundIds(),m=_.indexOf(c[0]);m>=0?g=parseInt(c[0],10):d=parseFloat(c[0])}else c.length>=2&&(d=parseFloat(c[0]),g=parseInt(c[1],10));var f;if(typeof d<"u"&&d>=0&&d<=1){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"volume",action:function(){o.volume.apply(o,c)}}),o;typeof g>"u"&&(o._volume=d),g=o._getSoundIds(g);for(var x=0;x<g.length;x++)f=o._soundById(g[x]),f&&(f._volume=d,c[2]||o._stopFade(g[x]),o._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(d,t.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=d*t.volume()),o._emit("volume",f._id))}else return f=g?o._soundById(g):o._sounds[0],f?f._volume:0;return o},fade:function(o,c,d,g){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(o,c,d,g)}}),_;o=Math.min(Math.max(0,parseFloat(o)),1),c=Math.min(Math.max(0,parseFloat(c)),1),d=parseFloat(d),_.volume(o,g);for(var m=_._getSoundIds(g),f=0;f<m.length;f++){var x=_._soundById(m[f]);if(x){if(g||_._stopFade(m[f]),_._webAudio&&!x._muted){var v=t.ctx.currentTime,y=v+d/1e3;x._volume=o,x._node.gain.setValueAtTime(o,v),x._node.gain.linearRampToValueAtTime(c,y)}_._startFadeInterval(x,o,c,d,m[f],typeof g>"u")}}return _},_startFadeInterval:function(o,c,d,g,_,m){var f=this,x=c,v=d-c,y=Math.abs(v/.01),w=Math.max(4,y>0?g/y:g),T=Date.now();o._fadeTo=d,o._interval=setInterval(function(){var P=(Date.now()-T)/g;T=Date.now(),x+=v*P,x=Math.round(x*100)/100,v<0?x=Math.max(d,x):x=Math.min(d,x),f._webAudio?o._volume=x:f.volume(x,o._id,!0),m&&(f._volume=x),(d<c&&x<=d||d>c&&x>=d)&&(clearInterval(o._interval),o._interval=null,o._fadeTo=null,f.volume(d,o._id),f._emit("fade",o._id))},w)},_stopFade:function(o){var c=this,d=c._soundById(o);return d&&d._interval&&(c._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,c.volume(d._fadeTo,o),d._fadeTo=null,c._emit("fade",o)),c},loop:function(){var o=this,c=arguments,d,g,_;if(c.length===0)return o._loop;if(c.length===1)if(typeof c[0]=="boolean")d=c[0],o._loop=d;else return _=o._soundById(parseInt(c[0],10)),_?_._loop:!1;else c.length===2&&(d=c[0],g=parseInt(c[1],10));for(var m=o._getSoundIds(g),f=0;f<m.length;f++)_=o._soundById(m[f]),_&&(_._loop=d,o._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=d,d&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,o.playing(m[f])&&(o.pause(m[f],!0),o.play(m[f],!0)))));return o},rate:function(){var o=this,c=arguments,d,g;if(c.length===0)g=o._sounds[0]._id;else if(c.length===1){var _=o._getSoundIds(),m=_.indexOf(c[0]);m>=0?g=parseInt(c[0],10):d=parseFloat(c[0])}else c.length===2&&(d=parseFloat(c[0]),g=parseInt(c[1],10));var f;if(typeof d=="number"){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"rate",action:function(){o.rate.apply(o,c)}}),o;typeof g>"u"&&(o._rate=d),g=o._getSoundIds(g);for(var x=0;x<g.length;x++)if(f=o._soundById(g[x]),f){o.playing(g[x])&&(f._rateSeek=o.seek(g[x]),f._playStart=o._webAudio?t.ctx.currentTime:f._playStart),f._rate=d,o._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):f._node&&(f._node.playbackRate=d);var v=o.seek(g[x]),y=(o._sprite[f._sprite][0]+o._sprite[f._sprite][1])/1e3-v,w=y*1e3/Math.abs(f._rate);(o._endTimers[g[x]]||!f._paused)&&(o._clearTimer(g[x]),o._endTimers[g[x]]=setTimeout(o._ended.bind(o,f),w)),o._emit("rate",f._id)}}else return f=o._soundById(g),f?f._rate:o._rate;return o},seek:function(){var o=this,c=arguments,d,g;if(c.length===0)o._sounds.length&&(g=o._sounds[0]._id);else if(c.length===1){var _=o._getSoundIds(),m=_.indexOf(c[0]);m>=0?g=parseInt(c[0],10):o._sounds.length&&(g=o._sounds[0]._id,d=parseFloat(c[0]))}else c.length===2&&(d=parseFloat(c[0]),g=parseInt(c[1],10));if(typeof g>"u")return 0;if(typeof d=="number"&&(o._state!=="loaded"||o._playLock))return o._queue.push({event:"seek",action:function(){o.seek.apply(o,c)}}),o;var f=o._soundById(g);if(f)if(typeof d=="number"&&d>=0){var x=o.playing(g);x&&o.pause(g,!0),f._seek=d,f._ended=!1,o._clearTimer(g),!o._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=d);var v=function(){x&&o.play(g,!0),o._emit("seek",g)};if(x&&!o._webAudio){var y=function(){o._playLock?setTimeout(y,0):v()};setTimeout(y,0)}else v()}else if(o._webAudio){var w=o.playing(g)?t.ctx.currentTime-f._playStart:0,T=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(T+w*Math.abs(f._rate))}else return f._node.currentTime;return o},playing:function(o){var c=this;if(typeof o=="number"){var d=c._soundById(o);return d?!d._paused:!1}for(var g=0;g<c._sounds.length;g++)if(!c._sounds[g]._paused)return!0;return!1},duration:function(o){var c=this,d=c._duration,g=c._soundById(o);return g&&(d=c._sprite[g._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var o=this,c=o._sounds,d=0;d<c.length;d++)c[d]._paused||o.stop(c[d]._id),o._webAudio||(o._clearSound(c[d]._node),c[d]._node.removeEventListener("error",c[d]._errorFn,!1),c[d]._node.removeEventListener(t._canPlayEvent,c[d]._loadFn,!1),c[d]._node.removeEventListener("ended",c[d]._endFn,!1),t._releaseHtml5Audio(c[d]._node)),delete c[d]._node,o._clearTimer(c[d]._id);var g=t._howls.indexOf(o);g>=0&&t._howls.splice(g,1);var _=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===o._src||o._src.indexOf(t._howls[d]._src)>=0){_=!1;break}return s&&_&&delete s[o._src],t.noAudio=!1,o._state="unloaded",o._sounds=[],o=null,null},on:function(o,c,d,g){var _=this,m=_["_on"+o];return typeof c=="function"&&m.push(g?{id:d,fn:c,once:g}:{id:d,fn:c}),_},off:function(o,c,d){var g=this,_=g["_on"+o],m=0;if(typeof c=="number"&&(d=c,c=null),c||d)for(m=0;m<_.length;m++){var f=d===_[m].id;if(c===_[m].fn&&f||!c&&f){_.splice(m,1);break}}else if(o)g["_on"+o]=[];else{var x=Object.keys(g);for(m=0;m<x.length;m++)x[m].indexOf("_on")===0&&Array.isArray(g[x[m]])&&(g[x[m]]=[])}return g},once:function(o,c,d){var g=this;return g.on(o,c,d,1),g},_emit:function(o,c,d){for(var g=this,_=g["_on"+o],m=_.length-1;m>=0;m--)(!_[m].id||_[m].id===c||o==="load")&&(setTimeout(function(f){f.call(this,c,d)}.bind(g,_[m].fn),0),_[m].once&&g.off(o,_[m].fn,_[m].id));return g._loadQueue(o),g},_loadQueue:function(o){var c=this;if(c._queue.length>0){var d=c._queue[0];d.event===o&&(c._queue.shift(),c._loadQueue()),o||d.action()}return c},_ended:function(o){var c=this,d=o._sprite;if(!c._webAudio&&o._node&&!o._node.paused&&!o._node.ended&&o._node.currentTime<o._stop)return setTimeout(c._ended.bind(c,o),100),c;var g=!!(o._loop||c._sprite[d][2]);if(c._emit("end",o._id),!c._webAudio&&g&&c.stop(o._id,!0).play(o._id),c._webAudio&&g){c._emit("play",o._id),o._seek=o._start||0,o._rateSeek=0,o._playStart=t.ctx.currentTime;var _=(o._stop-o._start)*1e3/Math.abs(o._rate);c._endTimers[o._id]=setTimeout(c._ended.bind(c,o),_)}return c._webAudio&&!g&&(o._paused=!0,o._ended=!0,o._seek=o._start||0,o._rateSeek=0,c._clearTimer(o._id),c._cleanBuffer(o._node),t._autoSuspend()),!c._webAudio&&!g&&c.stop(o._id,!0),c},_clearTimer:function(o){var c=this;if(c._endTimers[o]){if(typeof c._endTimers[o]!="function")clearTimeout(c._endTimers[o]);else{var d=c._soundById(o);d&&d._node&&d._node.removeEventListener("ended",c._endTimers[o],!1)}delete c._endTimers[o]}return c},_soundById:function(o){for(var c=this,d=0;d<c._sounds.length;d++)if(o===c._sounds[d]._id)return c._sounds[d];return null},_inactiveSound:function(){var o=this;o._drain();for(var c=0;c<o._sounds.length;c++)if(o._sounds[c]._ended)return o._sounds[c].reset();return new r(o)},_drain:function(){var o=this,c=o._pool,d=0,g=0;if(!(o._sounds.length<c)){for(g=0;g<o._sounds.length;g++)o._sounds[g]._ended&&d++;for(g=o._sounds.length-1;g>=0;g--){if(d<=c)return;o._sounds[g]._ended&&(o._webAudio&&o._sounds[g]._node&&o._sounds[g]._node.disconnect(0),o._sounds.splice(g,1),d--)}}},_getSoundIds:function(o){var c=this;if(typeof o>"u"){for(var d=[],g=0;g<c._sounds.length;g++)d.push(c._sounds[g]._id);return d}else return[o]},_refreshBuffer:function(o){var c=this;return o._node.bufferSource=t.ctx.createBufferSource(),o._node.bufferSource.buffer=s[c._src],o._panner?o._node.bufferSource.connect(o._panner):o._node.bufferSource.connect(o._node),o._node.bufferSource.loop=o._loop,o._loop&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop||0),o._node.bufferSource.playbackRate.setValueAtTime(o._rate,t.ctx.currentTime),c},_cleanBuffer:function(o){var c=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!o.bufferSource)return c;if(t._scratchBuffer&&o.bufferSource&&(o.bufferSource.onended=null,o.bufferSource.disconnect(0),d))try{o.bufferSource.buffer=t._scratchBuffer}catch{}return o.bufferSource=null,c},_clearSound:function(o){var c=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);c||(o.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var r=function(o){this._parent=o,this.init()};r.prototype={init:function(){var o=this,c=o._parent;return o._muted=c._muted,o._loop=c._loop,o._volume=c._volume,o._rate=c._rate,o._seek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++t._counter,c._sounds.push(o),o.create(),o},create:function(){var o=this,c=o._parent,d=t._muted||o._muted||o._parent._muted?0:o._volume;return c._webAudio?(o._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),o._node.gain.setValueAtTime(d,t.ctx.currentTime),o._node.paused=!0,o._node.connect(t.masterGain)):t.noAudio||(o._node=t._obtainHtml5Audio(),o._errorFn=o._errorListener.bind(o),o._node.addEventListener("error",o._errorFn,!1),o._loadFn=o._loadListener.bind(o),o._node.addEventListener(t._canPlayEvent,o._loadFn,!1),o._endFn=o._endListener.bind(o),o._node.addEventListener("ended",o._endFn,!1),o._node.src=c._src,o._node.preload=c._preload===!0?"auto":c._preload,o._node.volume=d*t.volume(),o._node.load()),o},reset:function(){var o=this,c=o._parent;return o._muted=c._muted,o._loop=c._loop,o._volume=c._volume,o._rate=c._rate,o._seek=0,o._rateSeek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++t._counter,o},_errorListener:function(){var o=this;o._parent._emit("loaderror",o._id,o._node.error?o._node.error.code:0),o._node.removeEventListener("error",o._errorFn,!1)},_loadListener:function(){var o=this,c=o._parent;c._duration=Math.ceil(o._node.duration*10)/10,Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue()),o._node.removeEventListener(t._canPlayEvent,o._loadFn,!1)},_endListener:function(){var o=this,c=o._parent;c._duration===1/0&&(c._duration=Math.ceil(o._node.duration*10)/10,c._sprite.__default[1]===1/0&&(c._sprite.__default[1]=c._duration*1e3),c._ended(o)),o._node.removeEventListener("ended",o._endFn,!1)}};var s={},a=function(o){var c=o._src;if(s[c]){o._duration=s[c].duration,u(o);return}if(/^data:[^;]+;base64,/.test(c)){for(var d=atob(c.split(",")[1]),g=new Uint8Array(d.length),_=0;_<d.length;++_)g[_]=d.charCodeAt(_);h(g.buffer,o)}else{var m=new XMLHttpRequest;m.open(o._xhr.method,c,!0),m.withCredentials=o._xhr.withCredentials,m.responseType="arraybuffer",o._xhr.headers&&Object.keys(o._xhr.headers).forEach(function(f){m.setRequestHeader(f,o._xhr.headers[f])}),m.onload=function(){var f=(m.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){o._emit("loaderror",null,"Failed loading audio file with status: "+m.status+".");return}h(m.response,o)},m.onerror=function(){o._webAudio&&(o._html5=!0,o._webAudio=!1,o._sounds=[],delete s[c],o.load())},l(m)}},l=function(o){try{o.send()}catch{o.onerror()}},h=function(o,c){var d=function(){c._emit("loaderror",null,"Decoding audio data failed.")},g=function(_){_&&c._sounds.length>0?(s[c._src]=_,u(c,_)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(o).then(g).catch(d):t.ctx.decodeAudioData(o,g,d)},u=function(o,c){c&&!o._duration&&(o._duration=c.duration),Object.keys(o._sprite).length===0&&(o._sprite={__default:[0,o._duration*1e3]}),o._state!=="loaded"&&(o._state="loaded",o._emit("load"),o._loadQueue())},p=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var o=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),c=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=c?parseInt(c[1],10):null;if(o&&d&&d<9){var g=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!g&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};i.Howler=t,i.Howl=n,typeof oi<"u"?(oi.HowlerGlobal=e,oi.Howler=t,oi.Howl=n,oi.Sound=r):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=r)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var r=n._howls.length-1;r>=0;r--)n._howls[r].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,r){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,r=typeof r!="number"?s._pos[2]:r,typeof t=="number")s._pos=[t,n,r],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,r,s,a,l){var h=this;if(!h.ctx||!h.ctx.listener)return h;var u=h._orientation;if(n=typeof n!="number"?u[1]:n,r=typeof r!="number"?u[2]:r,s=typeof s!="number"?u[3]:s,a=typeof a!="number"?u[4]:a,l=typeof l!="number"?u[5]:l,typeof t=="number")h._orientation=[t,n,r,s,a,l],typeof h.ctx.listener.forwardX<"u"?(h.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),h.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),h.ctx.listener.forwardZ.setTargetAtTime(r,Howler.ctx.currentTime,.1),h.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),h.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),h.ctx.listener.upZ.setTargetAtTime(l,Howler.ctx.currentTime,.1)):h.ctx.listener.setOrientation(t,n,r,s,a,l);else return u;return h},Howl.prototype.init=function(t){return function(n){var r=this;return r._orientation=n.orientation||[1,0,0],r._stereo=n.stereo||null,r._pos=n.pos||null,r._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},r._onstereo=n.onstereo?[{fn:n.onstereo}]:[],r._onpos=n.onpos?[{fn:n.onpos}]:[],r._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var r=this;if(!r._webAudio)return r;if(r._state!=="loaded")return r._queue.push({event:"stereo",action:function(){r.stereo(t,n)}}),r;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")r._stereo=t,r._pos=[t,0,0];else return r._stereo;for(var a=r._getSoundIds(n),l=0;l<a.length;l++){var h=r._soundById(a[l]);if(h)if(typeof t=="number")h._stereo=t,h._pos=[t,0,0],h._node&&(h._pannerAttr.panningModel="equalpower",(!h._panner||!h._panner.pan)&&e(h,s),s==="spatial"?typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):h._panner.setPosition(t,0,0):h._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),r._emit("stereo",h._id);else return h._stereo}return r},Howl.prototype.pos=function(t,n,r,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,n,r,s)}}),a;if(n=typeof n!="number"?0:n,r=typeof r!="number"?-.5:r,typeof s>"u")if(typeof t=="number")a._pos=[t,n,r];else return a._pos;for(var l=a._getSoundIds(s),h=0;h<l.length;h++){var u=a._soundById(l[h]);if(u)if(typeof t=="number")u._pos=[t,n,r],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setPosition(t,n,r)),a._emit("pos",u._id);else return u._pos}return a},Howl.prototype.orientation=function(t,n,r,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,n,r,s)}}),a;if(n=typeof n!="number"?a._orientation[1]:n,r=typeof r!="number"?a._orientation[2]:r,typeof s>"u")if(typeof t=="number")a._orientation=[t,n,r];else return a._orientation;for(var l=a._getSoundIds(s),h=0;h<l.length;h++){var u=a._soundById(l[h]);if(u)if(typeof t=="number")u._orientation=[t,n,r],u._node&&(u._panner||(u._pos||(u._pos=a._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setOrientation(t,n,r)),a._emit("orientation",u._id);else return u._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,r,s,a;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")r=n[0],typeof s>"u"&&(r.pannerAttr||(r.pannerAttr={coneInnerAngle:r.coneInnerAngle,coneOuterAngle:r.coneOuterAngle,coneOuterGain:r.coneOuterGain,distanceModel:r.distanceModel,maxDistance:r.maxDistance,refDistance:r.refDistance,rolloffFactor:r.rolloffFactor,panningModel:r.panningModel}),t._pannerAttr={coneInnerAngle:typeof r.pannerAttr.coneInnerAngle<"u"?r.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof r.pannerAttr.coneOuterAngle<"u"?r.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof r.pannerAttr.coneOuterGain<"u"?r.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof r.pannerAttr.distanceModel<"u"?r.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof r.pannerAttr.maxDistance<"u"?r.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof r.pannerAttr.refDistance<"u"?r.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof r.pannerAttr.rolloffFactor<"u"?r.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof r.pannerAttr.panningModel<"u"?r.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(n[0],10)),a?a._pannerAttr:t._pannerAttr;else n.length===2&&(r=n[0],s=parseInt(n[1],10));for(var l=t._getSoundIds(s),h=0;h<l.length;h++)if(a=t._soundById(l[h]),a){var u=a._pannerAttr;u={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:u.coneOuterGain,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:u.distanceModel,maxDistance:typeof r.maxDistance<"u"?r.maxDistance:u.maxDistance,refDistance:typeof r.refDistance<"u"?r.refDistance:u.refDistance,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:u.rolloffFactor,panningModel:typeof r.panningModel<"u"?r.panningModel:u.panningModel};var p=a._panner;p||(a._pos||(a._pos=t._pos||[0,0,-.5]),e(a,"spatial"),p=a._panner),p.coneInnerAngle=u.coneInnerAngle,p.coneOuterAngle=u.coneOuterAngle,p.coneOuterGain=u.coneOuterGain,p.distanceModel=u.distanceModel,p.maxDistance=u.maxDistance,p.refDistance=u.refDistance,p.rolloffFactor=u.rolloffFactor,p.panningModel=u.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,r=n._parent;n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,t.call(this),n._stereo?r.stereo(n._stereo):n._pos&&r.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,r=n._parent;return n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,n._stereo?r.stereo(n._stereo):n._pos?r.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,r._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(Gn);const Ui=new Map([["gameover",{src:"assets/sfx/house_expire.wav",howl:null,loop:!1}],["route_commit",{src:"assets/sfx/route_commit.wav",howl:null,loop:!1}],["house_spawn",{src:"assets/sfx/house_spawn.wav",howl:null,loop:!1}],["house_expire",{src:"assets/sfx/house_expire.wav",howl:null,loop:!1}],["week_complete",{src:"assets/sfx/week_complete.wav",howl:null,loop:!1}],["bg_music",{src:"assets/sfx/bg.mp3",howl:null,loop:!0}]]);let ui=1,kt=null;const Jl=new Map,Za=new Map;function l_(i={}){if(ui=i.volume??1,typeof Gn.Howler<"u"){Gn.Howler.volume(ui),console.log("🔊 Preloading all audio assets...");for(const[e,t]of Ui)t.howl=new Gn.Howl({src:[t.src],loop:t.loop,volume:ui,preload:!0,html5:!1,onload:()=>{console.log(`✅ Audio loaded: ${e}`)},onloaderror:(n,r)=>{console.warn(`❌ Audio load error for ${e}:`,r)}});for(const[e,t]of Ui)t.howl&&t.howl.load();console.log("🔊 All audio assets preloaded")}else typeof window<"u"&&window.AudioContext&&(kt=new AudioContext,u_().catch(e=>console.warn("Audio preload failed",e)))}function c_(i){if(ui=i,typeof Gn.Howler<"u")Gn.Howler.volume(i);else if(Za.size)for(const[,e]of Za)e.gain.value=i}function _i(i){console.log(`🔊 Audio.play called for: ${i}`);const e=Ui.get(i);if(!e){console.warn(`❌ Sound "${i}" not found in sounds map`);return}e.howl?(console.log(`✅ Playing sound: ${i} with Howl`),e.howl.volume(ui),e.howl.play()):(console.log(`⚠️ Using fallback for sound: ${i}`),h_(i,!1))}async function u_(){for(const[i,e]of Ui)try{const n=await(await fetch(e.src)).arrayBuffer(),r=await d_(n);Jl.set(i,r)}catch(t){console.warn("Failed to load",i,t)}}async function d_(i){return kt?(kt.state==="suspended"&&await kt.resume(),new Promise((e,t)=>{kt.decodeAudioData(i.slice(0),e,t)})):null}function h_(i,e){if(!kt)return;const t=Jl.get(i);if(!t){console.warn("Missing fallback buffer",i);return}kt.state==="suspended"&&kt.resume().catch(()=>{});const n=kt.createBufferSource();n.buffer=t,n.loop=e;const r=kt.createGain();r.gain.value=ui,n.connect(r).connect(kt.destination),n.start(0)}let As=.3;function f_(i){if(As=Math.max(0,Math.min(1,i)),console.log(`🎵 Background music volume set to: ${As}`),typeof Gn.Howler<"u"){const e=Ui.get("bg_music");e&&e.howl&&e.howl.volume(As)}}function p_(){console.log("🎵 Starting background music..."),_i("bg_music")}const Zl="pp_highscore",Ql="pp_settings_v1";function m_(){try{if(typeof window>"u")return null;const{localStorage:i}=window,e="__pp_test__";return i.setItem(e,"1"),i.removeItem(e),i}catch(i){return console.warn("LocalStorage unavailable",i),null}}const bn=m_();function ec(){if(!bn)return 0;const i=bn.getItem(Zl),e=i?Number(i):0;return Number.isFinite(e)?e:0}function g_(i){if(!bn)return;const e=Math.max(i,ec());bn.setItem(Zl,String(e))}function Qa(){if(!bn)return{};try{const i=bn.getItem(Ql);return i?JSON.parse(i):{}}catch(i){return console.warn("Failed to parse settings",i),{}}}function tc(i){if(bn)try{bn.setItem(Ql,JSON.stringify(i))}catch(e){console.warn("Failed to save settings",e)}}const nt={WORLD_SIZE:100,GRID_RES:50,CLOSE_SNAP:2,RDP_EPS:0,LINE_WIDTH:3,ROUTE_ATTACH_RADIUS:8,MAX_POINTS:400,MIN_SAMPLE_DIST:.35,BASE_SPEED:9,DELIVERY_RADIUS:2,FIRST_SPAWN_AT:5,SPAWN_INTERVAL_START:14,SPAWN_INTERVAL_END:5,DEADLINE_START:40,DEADLINE_END:18,WEEK_SECONDS:90},L={rng:null,seed:null,debug:!1,stats:null,statsEnabled:!1,gui:null,mapState:null,truck:null,houseManager:null,score:0,week:1,runTime:0,weekTimer:0,highscore:0,takenUpgrades:new Set,pendingCards:[],mode:"boot",lastFrameTime:0,fpsAccum:0,fpsFrames:0,fps:0,paused:!1,settings:{volume:1},gridVisible:!1,routeActive:!1,speedMultiplier:parseInt(localStorage.getItem("parcelPanicSpeedMultiplier"))||1,simTimeMs:0},__=new C;v_();function v_(){const i=document.getElementById("loading-screen"),e=document.getElementById("loading-fill"),t=document.getElementById("loading-text"),n=document.getElementById("loading-percentage");let r=0;const s=7;function a(l,h){r=Math.round(l/s*100),e.style.width=`${r}%`,t.textContent=h,n.textContent=`${r}%`}setTimeout(()=>{a(1,"Initializing audio system..."),setTimeout(()=>{a(2,"Loading 3D models..."),Gg().then(()=>{a(3,"Loading game assets..."),setTimeout(()=>{a(4,"Setting up WebGPU..."),setTimeout(()=>{a(5,"Initializing game engine..."),setTimeout(()=>{a(6,"Preparing game world..."),setTimeout(()=>{a(7,"Starting game..."),setTimeout(()=>{i.classList.add("hidden"),setTimeout(()=>{i.style.display="none",el()},500)},500)},300)},300)},400)},200)}).catch(l=>{console.warn("Asset preloading failed, continuing with fallbacks:",l),a(3,"Loading game assets..."),setTimeout(()=>{a(4,"Setting up WebGPU..."),setTimeout(()=>{a(5,"Initializing game engine..."),setTimeout(()=>{a(6,"Preparing game world..."),setTimeout(()=>{a(7,"Starting game..."),setTimeout(()=>{i.classList.add("hidden"),setTimeout(()=>{i.style.display="none",el()},500)},500)},300)},300)},400)},200)})},200)},100)}function el(){Jg(),s_(sc),o_(oc),Lr(L.paused),so(L.speedMultiplier);const i=document.querySelector("canvas#stage");Jm(i,nt),eg((r,s)=>{}),U_();const e=new URL(window.location.href),t=e.searchParams.get("seed"),n=e.searchParams.get("debug");L.debug=n==="1",L.seed=br(t?Number(t)||t:Math.random()*1e9),e.searchParams.set("seed",String(L.seed)),window.history.replaceState({},"",e.toString()),L.rng=Vl(L.seed),L.highscore=ec(),L.settings={volume:Qa().volume??1,bgMusicVolume:Qa().bgMusicVolume??.3},i_(L.settings,L_,D_),l_(L.settings),console.log("🔊 Audio system initialized"),p_(),L.mapState=Pg(fr(),L.rng,nt),L.truck=new Hg(nt),L.truck.addToScene(fr()),L.houseManager=new $g(fr(),L.mapState,L.rng,nt),Mg(fr(),L.mapState,nt),bg(({curve:r,lut:s,attachInfo:a})=>{const l=a??{u:0};L.truck.attachToCurve(r,s,l.u??0,l.point??null)}),sg(i),w_(),C_(),nc(L.seed),L.lastFrameTime=performance.now(),requestAnimationFrame(ic)}function nc(i){console.log("🔄 NEW RUN CALLED - Preserving speed:",L.speedMultiplier);const e=L.speedMultiplier;L.seed=i,L.rng=Vl(i),L.houseManager.setRng(L.rng),L.score=0,L.week=1,L.runTime=0,L.weekTimer=nt.WEEK_SECONDS,L.paused=!1,L.speedMultiplier=e,L.simTimeMs=0,L.mode="run",L.takenUpgrades.clear(),L.pendingCards=[],L.houseManager.reset(),Lr(L.paused),so(L.speedMultiplier),A_(),$l(L.score),Yl(L.week),Qg(L.seed),Kl(),jl()}function ic(i){requestAnimationFrame(ic);const e=Math.min((i-L.lastFrameTime)/1e3,.1);L.lastFrameTime=i,x_();const n=!L.paused&&L.mode==="run"?e*L.speedMultiplier:0;n>0&&(L.simTimeMs+=n*1e3,S_(n,L.simTimeMs)),R_(),I_(),Qm()}function x_(){Gt("Space")&&sc(),Gt("KeyT")&&oc(),Gt("KeyG")&&(L.gridVisible=!L.gridVisible,Lg(L.mapState,L.gridVisible)),Gt("KeyD")&&(L.debug=!L.debug,P_(L.debug)),Gt("Backquote")&&(L.statsEnabled=!L.statsEnabled,L.stats&&(L.stats.dom.style.display=L.statsEnabled?"block":"none")),L.mode==="upgrade"&&(Gt("Digit1")&&vr(0),Gt("Digit2")&&vr(1),Gt("Digit3")&&vr(2)),Gt("Enter")&&(console.log("⌨️ Enter key pressed - attempting to commit route"),Gl(!0,{anchor:L.truck.group.position,attachRadius:nt.ROUTE_ATTACH_RADIUS})?(console.log("✅ Route committed successfully"),L.routeActive=!1,console.log("🔊 Playing route_commit sound (Enter key)"),_i("route_commit")):(console.log("❌ Route commit failed - route cancelled"),Ci(),L.routeActive=!1)),L.routeActive&&Gt("Escape")&&(Ci(),L.routeActive=!1),Gt("KeyR")&&rc()}function S_(i,e){L.runTime+=i,L.weekTimer-=i,Zg(L.weekTimer);const t=L.houseManager.getHouses();if(L.truck.update(i,{houses:t,onDeliver:M_,now:e}),L.houseManager.update(i,e)){_i("house_expire"),E_();return}L.houseManager.wasJustSpawned()&&(console.log("🔊 Playing house_spawn sound"),_i("house_spawn")),L.weekTimer<=0&&y_(),T_(i)}function M_(i,e){const t=typeof e=="number"?e:performance.now();L.houseManager.handleDelivery(i,t),L.score+=1,$l(L.score)}function y_(){L.mode="upgrade",L.week+=1,Yl(L.week),L.weekTimer=nt.WEEK_SECONDS,L.houseManager.resetWeek(),_i("week_complete"),L.pendingCards=Kg(L.rng,L.takenUpgrades,3,{truck:L.truck,config:nt,houseManager:L.houseManager}),t_(L.pendingCards,b_),L.paused=!0}function b_(i){i&&(i.apply({truck:L.truck,config:nt,houseManager:L.houseManager}),L.takenUpgrades.add(i.id),jl(),L.mode="run",L.paused=!1)}function E_(i){L.mode="gameover",L.paused=!0;const e=Math.max(L.score,L.highscore);g_(L.score),L.highscore=e,n_({score:L.score,highscore:e,seed:L.seed},{onRetry:()=>tl(L.seed),onNewRun:()=>tl(br(Math.random()*1e9))}),_i("gameover")}function tl(i){Kl();const e=new URL(window.location.href);e.searchParams.set("seed",String(i)),window.history.replaceState({},"",e.toString()),nc(i),L.lastFrameTime=performance.now()}function rc(){L.mode==="run"&&(Bl(),L.routeActive=!0)}function w_(){xs("pointer-down",i=>{if(i.button!==0||L.mode!=="run")return;rc();const e=Ts(i);e&&_r(e,!0)}),xs("pointer-sample",i=>{if(!L.routeActive||!i.down)return;const e=Ts(i);e&&_r(e)}),xs("pointer-up",i=>{if(!L.routeActive||i.button!==0)return;const e=Ts(i);e&&_r(e,!0),yg()})}function Ts(i){const e=Zm();if(!e)return null;const t=Eg(e,{x:i.ndcX,y:i.ndcY},__);if(t){const n=nt.WORLD_SIZE/2;if(Math.abs(t.x)>n||Math.abs(t.z)>n)return null}return t}function A_(){const i=nt.WORLD_SIZE*.3,e=24;Bl();for(let t=0;t<=e;t+=1){const n=t/e*Math.PI*2,r=Math.cos(n)*i,s=Math.sin(n)*i;_r({x:r,z:s},!0)}Gl(),L.routeActive=!1}let qs=!1;function sc(){L.mode!=="gameover"&&(qs=!0,console.log("🎮 PAUSE TOGGLE - Before:",{paused:L.paused,speedMultiplier:L.speedMultiplier}),L.paused=!L.paused,Lr(L.paused),console.log("🎮 PAUSE TOGGLE - After:",{paused:L.paused,speedMultiplier:L.speedMultiplier}),setTimeout(()=>{qs=!1},100))}function oc(){if(qs){console.log("🛡️ BLOCKED SPEED CHANGE - Pause operation in progress");return}const i=L.speedMultiplier;L.speedMultiplier=L.speedMultiplier===1?2:1,localStorage.setItem("parcelPanicSpeedMultiplier",L.speedMultiplier.toString()),console.log("⚡ SPEED TOGGLE:",{from:i,to:L.speedMultiplier}),so(L.speedMultiplier)}function T_(i){L.fpsAccum+=i,L.fpsFrames+=1,L.fpsAccum>=.5&&(L.fps=L.fpsFrames/L.fpsAccum,e_(L.fps,L.debug),L.fpsAccum=0,L.fpsFrames=0)}function R_(){L.stats&&L.statsEnabled&&L.stats.update()}function C_(){L.debug&&(L.stats=new Ul,L.stats.showPanel(0),document.body.appendChild(L.stats.dom),L.statsEnabled=!0,L.gui=new Pr({title:"Parcel Panic"}),L.gui.add(nt,"BASE_SPEED",4,20,.1).name("Base Speed"),L.gui.add(nt,"DELIVERY_RADIUS",1,6,.1).name("Delivery Radius"),L.gui.add(nt,"SPAWN_INTERVAL_END",2,15,.25).name("Spawn Interval End"),L.gui.add(nt,"DEADLINE_END",8,40,.5).name("Deadline End"),L.gui.hide())}function P_(i){i?(L.stats||(L.stats=new Ul,L.stats.showPanel(0),document.body.appendChild(L.stats.dom)),L.statsEnabled=!0,L.stats&&(L.stats.dom.style.display="block"),L.gui||(L.gui=new Pr({title:"Parcel Panic"}),L.gui.add(nt,"BASE_SPEED",4,20,.1).name("Base Speed"),L.gui.add(nt,"DELIVERY_RADIUS",1,6,.1).name("Delivery Radius"),L.gui.add(nt,"SPAWN_INTERVAL_END",2,15,.25).name("Spawn Interval End"),L.gui.add(nt,"DEADLINE_END",8,40,.5).name("Deadline End"),L.gui.hide())):(L.statsEnabled=!1,L.stats&&(L.stats.dom.style.display="none"),L.gui&&L.gui.hide())}function L_(i){const e=Math.max(0,Math.min(1,i));L.settings.volume=e,c_(e),tc({volume:e})}function D_(i){const e=Math.max(0,Math.min(1,i));L.settings.bgMusicVolume=e,f_(e),tc({bgMusicVolume:e})}function U_(){ws("checking"),setTimeout(()=>{Fl()?(ws("enabled"),console.log("✅ WebGPU is active - enhanced performance available")):(ws("disabled"),console.log("⚠️ WebGPU not available - using WebGL fallback"),console.log("💡 WebGPU requires a dedicated GPU (NVIDIA/AMD graphics card)"))},1e3)}function I_(){if(Fl()){const i=ng();i&&a_(i)}}
