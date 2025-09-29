(function(){"use strict";var aa=document.createElement("style");aa.textContent=`:root{--bg-grad-start: #2a2d3a;--bg-grad-end: #3a3f4f;--panel-bg: rgba(58, 63, 79, .85);--panel-border: rgba(212, 164, 116, .4);--accent: #d4a574;--accent-soft: #e8b892;--text-primary: #f0e6d2;--text-muted: #c4b5a0;--success: #85c1e9;--warning: #f4d03f;font-family:Nunito,Segoe UI,sans-serif;color:var(--text-primary)}*{box-sizing:border-box}html,body{margin:0;padding:0;min-height:100%;width:100%;background:radial-gradient(circle at 12% 18%,#1f2636,#111520 60%),linear-gradient(160deg,var(--bg-grad-start),var(--bg-grad-end));overflow:hidden;color:var(--text-primary)}canvas#stage{position:absolute;inset:0;width:100%;height:100%;display:block}.hidden{display:none!important}.left-panels{position:absolute;top:1.8rem;left:2rem;display:flex;flex-direction:column;gap:1.5rem;width:280px}.right-panels{position:absolute;top:1.8rem;right:2rem;display:flex;flex-direction:column;gap:1.5rem;width:280px}.hud{padding:1.4rem 1.6rem;background:var(--panel-bg);border:1px solid var(--panel-border);border-radius:18px;box-shadow:0 20px 32px #090c1a73;backdrop-filter:blur(18px);display:grid;gap:1.2rem}.hud-section{display:grid;gap:.55rem}.hud-row{display:flex;justify-content:space-between;align-items:center;font-size:1rem}.hud-row .label{font-weight:650;text-transform:uppercase;font-size:.78rem;color:var(--text-muted);letter-spacing:.12em}.webgpu-status{transition:all .3s ease}.webgpu-status[data-status=enabled]{background:#64d2c41a;border-radius:6px;padding:.3rem .6rem;margin:.2rem -.6rem}.webgpu-status[data-status=disabled]{background:#ffa87a1a;border-radius:6px;padding:.3rem .6rem;margin:.2rem -.6rem}.webgpu-status[data-status=checking]{background:#7c9dff1a;border-radius:6px;padding:.3rem .6rem;margin:.2rem -.6rem}.webgpu-status .label{color:var(--text-muted);font-size:.75rem}.webgpu-status[data-status=enabled] .label{color:var(--success)}.webgpu-status[data-status=disabled] .label{color:var(--warning)}.webgpu-status[data-status=checking] .label{color:var(--accent)}.webgpu-status span[data-ui=webgpu-status]{font-weight:600;font-size:.8rem}.webgpu-status[data-status=enabled] span[data-ui=webgpu-status]{color:var(--success)}.webgpu-status[data-status=disabled] span[data-ui=webgpu-status]{color:var(--warning)}.webgpu-status[data-status=checking] span[data-ui=webgpu-status]{color:var(--accent)}.hud-button{justify-self:end;border:none;border-radius:999px;background:#7c9dff40;color:var(--accent);padding:.45rem .75rem;font-size:1.05rem;cursor:pointer;transition:transform .15s ease,background .2s ease}.hud-button:hover{background:#7c9dff66;transform:translateY(-1px)}.tutorial-panel,.legend-panel{background:var(--panel-bg);border:1px solid var(--panel-border);border-radius:18px;padding:1.4rem 1.6rem;box-shadow:0 20px 32px #090c1a73;backdrop-filter:blur(18px);font-size:.9rem;line-height:1.5}.tutorial-panel h3,.legend-panel h3{margin:0 0 .6rem;text-transform:uppercase;font-size:.78rem;letter-spacing:.14em;color:var(--text-muted)}.tutorial-panel ul,.legend-panel ul{margin:0;padding-left:1.1rem;display:grid;gap:.5rem}.legend-panel strong{color:var(--accent)}\\\\.debug{position:absolute;top:7.6rem;right:2rem;padding:.5rem .85rem;background:var(--panel-bg);border:1px solid var(--panel-border);border-radius:14px;font-size:.9rem;color:var(--text-muted);backdrop-filter:blur(18px)}.settings-panel{position:absolute;top:1.8rem;left:50%;transform:translate(-50%);padding:1.2rem 1.6rem;background:var(--panel-bg);border:1px solid var(--panel-border);border-radius:18px;box-shadow:0 20px 32px #090c1a73;backdrop-filter:blur(18px);display:none;min-width:260px}.settings-panel.open{display:block}.settings-panel h2{margin:0 0 .8rem;font-weight:700}.settings-panel label{display:grid;gap:.55rem;font-size:.95rem}input[type=range]{accent-color:var(--accent)}.modal{position:absolute;inset:0;display:none;align-items:center;justify-content:center;background:#0a0c1499;backdrop-filter:blur(12px);padding:2rem}.modal.open{display:flex}.modal-panel{background:#141823d9;border:1px solid rgba(124,157,255,.25);border-radius:22px;padding:2rem;width:min(640px,92vw);box-shadow:0 24px 40px #06081099}.modal-panel h2{margin:0 0 1rem;font-size:1.5rem;text-align:center;background:linear-gradient(135deg,var(--accent),var(--accent-soft));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-shadow:0 2px 4px rgba(0,0,0,.3)}.upgrade-cards{display:grid;gap:1rem;margin-top:1.5rem}.card{display:grid;grid-template-columns:auto 1fr;gap:.8rem 1.2rem;padding:1.5rem 1.8rem;border-radius:20px;border:2px solid rgba(124,157,255,.4);background:linear-gradient(135deg,#7c9dff1f,#6fd2c414);color:var(--text-primary);cursor:pointer;transition:all .3s ease;position:relative;overflow:hidden}.card:hover,.card:focus{transform:translateY(-4px) scale(1.02);box-shadow:0 20px 35px #060810a6;border-color:#7c9dffcc;background:linear-gradient(135deg,#7c9dff33,#6fd2c426)}.card-index{font-weight:800;color:var(--accent);font-size:1.5rem;text-shadow:0 2px 4px rgba(0,0,0,.3)}.card-title{font-weight:700;font-size:1.2rem;color:var(--text-primary);text-shadow:0 1px 2px rgba(0,0,0,.2)}.card-desc{grid-column:1 / -1;color:var(--text-muted);font-size:.95rem;line-height:1.4;margin-top:.3rem;font-style:italic}.modal-actions{display:flex;gap:1rem;margin-top:1.9rem}.btn{flex:1;padding:.95rem 1.3rem;border-radius:18px;border:none;background:linear-gradient(135deg,var(--accent),var(--accent-soft));color:#0f121c;font-weight:700;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}.btn:hover{transform:translateY(-2px);box-shadow:0 16px 28px #0608108c}.modal-open{overflow:hidden}code{background:#7c9dff38;padding:.25rem .45rem;border-radius:10px}@media (max-width: 900px){.hud{left:1.2rem;right:1.2rem;grid-template-columns:repeat(auto-fit,minmax(160px,1fr))}.settings-panel{top:auto;bottom:1.8rem}}.control-panel{display:flex;gap:.6rem;padding:.8rem 1rem;background:var(--panel-bg);border:1px solid var(--panel-border);border-radius:16px;box-shadow:0 16px 30px #0608108c;backdrop-filter:blur(18px);align-items:center;justify-content:center}.control-btn{border:none;border-radius:14px;background:#7c9dff2e;color:var(--accent);width:44px;height:44px;display:grid;place-items:center;font-size:1rem;cursor:pointer;transition:transform .2s ease,background .2s ease,color .2s ease;flex-shrink:0}.control-btn:hover{transform:translateY(-2px);background:#7c9dff52}.control-btn.active{background:#6fd2c461;color:var(--success)}.control-btn span{pointer-events:none}.social-btn{background:#7c9dff1f!important;color:var(--accent)!important;transition:all .2s ease}.social-btn:hover{background:#7c9dff40!important;transform:translateY(-2px);color:var(--accent)!important}.social-btn:active{transform:scale(.95)}.social-btn svg{width:18px;height:18px;fill:currentColor}.social-btn[data-action=twitter]:hover{background:#1da1f233!important;color:#1da1f2!important}.social-btn[data-action=itch]:hover{background:#fa5f5533!important;color:#fa5f55!important}.legend-panel h3{margin:0 0 .8rem;text-transform:uppercase;font-size:.85rem;letter-spacing:.14em;color:var(--accent);font-weight:700}.legend-panel ul{margin:0;padding:0;list-style:none;display:grid;gap:.6rem}.legend-panel li{font-size:.85rem;line-height:1.4;color:var(--text-primary);padding:.4rem 0}.legend-panel strong{color:var(--accent);font-weight:600}@media (max-width: 900px){.left-panels{top:1.2rem;left:1.2rem;width:calc(50% - 1.8rem)}.right-panels{top:1.2rem;right:1.2rem;width:calc(50% - 1.8rem)}.hud,.tutorial-panel,.legend-panel{padding:1.2rem 1.4rem}.control-panel{gap:.4rem;padding:.6rem .8rem}.control-btn{width:40px;height:40px;font-size:.9rem}.social-btn svg{width:16px;height:16px}}.timer-stats{position:fixed;top:60px;right:10px;background:#000000e6;color:#fff;padding:12px;border-radius:6px;font-family:monospace;font-size:11px;z-index:1000;border:1px solid #333;min-width:200px}.timer-stats-content h4{margin:0 0 8px;color:#4caf50;font-size:12px}.loading-screen{position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at 12% 18%,#1f2636,#111520 60%),linear-gradient(160deg,var(--bg-grad-start),var(--bg-grad-end));display:flex;align-items:center;justify-content:center;z-index:1000;transition:opacity .5s ease,visibility .5s ease}.loading-screen.hidden{opacity:0;visibility:hidden}.loading-content{text-align:center;color:var(--text-primary)}.loading-content h2{font-size:2.5rem;font-weight:700;margin-bottom:2rem;color:var(--accent);text-shadow:0 0 20px rgba(124,157,255,.3)}.loading-bar-container{margin-bottom:1rem}.loading-bar{width:300px;height:8px;background:#7c9dff33;border-radius:4px;overflow:hidden;margin:0 auto .5rem}.loading-fill{height:100%;background:linear-gradient(90deg,var(--accent),#64d2c4);border-radius:4px;width:0%;transition:width .3s ease;box-shadow:0 0 10px #7c9dff80}.loading-text{font-size:.9rem;color:var(--text-muted);margin-bottom:.5rem}.loading-percentage{font-size:1.2rem;font-weight:600;color:var(--accent)}.timer-stat{display:flex;justify-content:space-between;margin-bottom:4px}.timer-stat .label{color:#ccc}.timer-stat .value{color:#fff;font-weight:700}
/*$vite$:1*/`,document.head.appendChild(aa);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dr="153",lc=0,oa=1,cc=2,la=1,uc=2,en=3,hn=0,Et=1,Xt=2,fn=0,Vn=1,ca=2,ua=3,da=4,dc=5,Wn=100,hc=101,fc=102,ha=103,fa=104,pc=200,mc=201,gc=202,_c=203,pa=204,ma=205,vc=206,xc=207,yc=208,Sc=209,Mc=210,bc=0,Ec=1,wc=2,Ur=3,Ac=4,Tc=5,Rc=6,Cc=7,Ir=0,Pc=1,Lc=2,tn=0,Dc=1,Uc=2,Ic=3,Fc=4,Nc=5,ga=300,Xn=301,qn=302,Fr=303,Nr=304,zi=306,Or=1e3,It=1001,Br=1002,yt=1003,_a=1004,zr=1005,Pt=1006,Oc=1007,yi=1008,pn=1009,Bc=1010,zc=1011,kr=1012,va=1013,mn=1014,gn=1015,Si=1016,xa=1017,ya=1018,En=1020,kc=1021,Ft=1023,Gc=1024,Hc=1025,wn=1026,$n=1027,Vc=1028,Sa=1029,Wc=1030,Ma=1031,ba=1033,Gr=33776,Hr=33777,Vr=33778,Wr=33779,Ea=35840,wa=35841,Aa=35842,Ta=35843,Xc=36196,Ra=37492,Ca=37496,Pa=37808,La=37809,Da=37810,Ua=37811,Ia=37812,Fa=37813,Na=37814,Oa=37815,Ba=37816,za=37817,ka=37818,Ga=37819,Ha=37820,Va=37821,Xr=36492,qc=36283,Wa=36284,Xa=36285,qa=36286,$a=3e3,An=3001,$c=3200,Yc=3201,qr=0,jc=1,Tn="",Ce="srgb",qt="srgb-linear",Ya="display-p3",$r=7680,Kc=519,Jc=512,Zc=513,Qc=514,eu=515,tu=516,nu=517,iu=518,ru=519,ja=35044,Ka="300 es",Yr=1035,nn=2e3,ki=2001;class Yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jr=Math.PI/180,Kr=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function su(i,e){return(i%e+e)%e}function Jr(i,e,t){return(1-t)*i+t*e}function Ja(i){return(i&i-1)===0&&i!==0}function Zr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,r,s,o,l,h,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,l,h,u)}set(e,t,n,r,s,o,l,h,u){const p=this.elements;return p[0]=e,p[1]=r,p[2]=l,p[3]=t,p[4]=s,p[5]=h,p[6]=n,p[7]=o,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],l=n[3],h=n[6],u=n[1],p=n[4],a=n[7],c=n[2],d=n[5],g=n[8],_=r[0],m=r[3],f=r[6],x=r[1],v=r[4],b=r[7],w=r[2],T=r[5],P=r[8];return s[0]=o*_+l*x+h*w,s[3]=o*m+l*v+h*T,s[6]=o*f+l*b+h*P,s[1]=u*_+p*x+a*w,s[4]=u*m+p*v+a*T,s[7]=u*f+p*b+a*P,s[2]=c*_+d*x+g*w,s[5]=c*m+d*v+g*T,s[8]=c*f+d*b+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],l=e[5],h=e[6],u=e[7],p=e[8];return t*o*p-t*l*u-n*s*p+n*l*h+r*s*u-r*o*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],l=e[5],h=e[6],u=e[7],p=e[8],a=p*o-l*u,c=l*h-p*s,d=u*s-o*h,g=t*a+n*c+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=a*_,e[1]=(r*u-p*n)*_,e[2]=(l*n-r*o)*_,e[3]=c*_,e[4]=(p*t-r*h)*_,e[5]=(r*s-l*t)*_,e[6]=d*_,e[7]=(n*h-u*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,l){const h=Math.cos(s),u=Math.sin(s);return this.set(n*h,n*u,-n*(h*o+u*l)+o+e,-r*u,r*h,-r*(-u*o+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Qr.makeScale(e,t)),this}rotate(e){return this.premultiply(Qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new Ue;function Za(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Qa={};function bi(i){i in Qa||(Qa[i]=!0,console.warn(i))}function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const au=new Ue().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ou=new Ue().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function lu(i){return i.convertSRGBToLinear().applyMatrix3(ou)}function cu(i){return i.applyMatrix3(au).convertLinearToSRGB()}const uu={[qt]:i=>i,[Ce]:i=>i.convertSRGBToLinear(),[Ya]:lu},du={[qt]:i=>i,[Ce]:i=>i.convertLinearToSRGB(),[Ya]:cu},Nt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return qt},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=uu[e],r=du[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Kn;class eo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Kn===void 0&&(Kn=Hi("canvas")),Kn.width=e.width,Kn.height=e.height;const n=Kn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Kn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hu=0;class to{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(ts(r[o].image)):s.push(ts(r[o]))}else s=ts(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ts(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fu=0;class At extends Yn{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=It,r=It,s=Pt,o=yi,l=Ft,h=pn,u=At.DEFAULT_ANISOTROPY,p=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Mi(),this.name="",this.source=new to(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=h,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===An?Ce:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ga)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Or:e.x=e.x-Math.floor(e.x);break;case It:e.x=e.x<0?0:1;break;case Br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Or:e.y=e.y-Math.floor(e.y);break;case It:e.y=e.y<0?0:1;break;case Br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ce?An:$a}set encoding(e){bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===An?Ce:Tn}}At.DEFAULT_IMAGE=null,At.DEFAULT_MAPPING=ga,At.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const h=e.elements,u=h[0],p=h[4],a=h[8],c=h[1],d=h[5],g=h[9],_=h[2],m=h[6],f=h[10];if(Math.abs(p-c)<.01&&Math.abs(a-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(p+c)<.1&&Math.abs(a+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,b=(d+1)/2,w=(f+1)/2,T=(p+c)/4,P=(a+_)/4,D=(g+m)/4;return v>b&&v>w?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=T/n,s=P/n):b>w?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=T/r,s=D/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=P/s,r=D/s),this.set(n,r,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(a-_)*(a-_)+(c-p)*(c-p));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(a-_)/x,this.z=(c-p)/x,this.w=Math.acos((u+d+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rn extends Yn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(bi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===An?Ce:Tn),this.texture=new At(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new to(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class no extends At{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pu extends At{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,l){let h=n[r+0],u=n[r+1],p=n[r+2],a=n[r+3];const c=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(l===0){e[t+0]=h,e[t+1]=u,e[t+2]=p,e[t+3]=a;return}if(l===1){e[t+0]=c,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(a!==_||h!==c||u!==d||p!==g){let m=1-l;const f=h*c+u*d+p*g+a*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const w=Math.sqrt(v),T=Math.atan2(w,f*x);m=Math.sin(m*T)/w,l=Math.sin(l*T)/w}const b=l*x;if(h=h*m+c*b,u=u*m+d*b,p=p*m+g*b,a=a*m+_*b,m===1-l){const w=1/Math.sqrt(h*h+u*u+p*p+a*a);h*=w,u*=w,p*=w,a*=w}}e[t]=h,e[t+1]=u,e[t+2]=p,e[t+3]=a}static multiplyQuaternionsFlat(e,t,n,r,s,o){const l=n[r],h=n[r+1],u=n[r+2],p=n[r+3],a=s[o],c=s[o+1],d=s[o+2],g=s[o+3];return e[t]=l*g+p*a+h*d-u*c,e[t+1]=h*g+p*c+u*a-l*d,e[t+2]=u*g+p*d+l*c-h*a,e[t+3]=p*g-l*a-h*c-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,l=Math.cos,h=Math.sin,u=l(n/2),p=l(r/2),a=l(s/2),c=h(n/2),d=h(r/2),g=h(s/2);switch(o){case"XYZ":this._x=c*p*a+u*d*g,this._y=u*d*a-c*p*g,this._z=u*p*g+c*d*a,this._w=u*p*a-c*d*g;break;case"YXZ":this._x=c*p*a+u*d*g,this._y=u*d*a-c*p*g,this._z=u*p*g-c*d*a,this._w=u*p*a+c*d*g;break;case"ZXY":this._x=c*p*a-u*d*g,this._y=u*d*a+c*p*g,this._z=u*p*g+c*d*a,this._w=u*p*a-c*d*g;break;case"ZYX":this._x=c*p*a-u*d*g,this._y=u*d*a+c*p*g,this._z=u*p*g-c*d*a,this._w=u*p*a+c*d*g;break;case"YZX":this._x=c*p*a+u*d*g,this._y=u*d*a+c*p*g,this._z=u*p*g-c*d*a,this._w=u*p*a-c*d*g;break;case"XZY":this._x=c*p*a-u*d*g,this._y=u*d*a-c*p*g,this._z=u*p*g+c*d*a,this._w=u*p*a+c*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],l=t[5],h=t[9],u=t[2],p=t[6],a=t[10],c=n+l+a;if(c>0){const d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(p-h)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(n>l&&n>a){const d=2*Math.sqrt(1+n-l-a);this._w=(p-h)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(l>a){const d=2*Math.sqrt(1+l-n-a);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(h+p)/d}else{const d=2*Math.sqrt(1+a-n-l);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(h+p)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,l=t._x,h=t._y,u=t._z,p=t._w;return this._x=n*p+o*l+r*u-s*h,this._y=r*p+o*h+s*l-n*u,this._z=s*p+o*u+n*h-r*l,this._w=o*p-n*l-r*h-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let l=o*e._w+n*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const h=1-l*l;if(h<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(h),p=Math.atan2(u,l),a=Math.sin((1-t)*p)/u,c=Math.sin(t*p)/u;return this._w=o*a+this._w*c,this._x=n*a+this._x*c,this._y=r*a+this._y*c,this._z=s*a+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(io.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(io.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,l=e.z,h=e.w,u=h*t+o*r-l*n,p=h*n+l*t-s*r,a=h*r+s*n-o*t,c=-s*t-o*n-l*r;return this.x=u*h+c*-s+p*-l-a*-o,this.y=p*h+c*-o+a*-s-u*-l,this.z=a*h+c*-l+u*-o-p*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,l=t.y,h=t.z;return this.x=r*h-s*l,this.y=s*o-n*h,this.z=n*l-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ns.copy(this).projectOnVector(e),this.sub(ns)}reflect(e){return this.sub(ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ns=new C,io=new Ei;class wi{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Jn.copy(e.boundingBox),Jn.applyMatrix4(e.matrixWorld),this.union(Jn);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,l=s.count;o<l;o++)sn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(sn)}else r.boundingBox===null&&r.computeBoundingBox(),Jn.copy(r.boundingBox),Jn.applyMatrix4(e.matrixWorld),this.union(Jn)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ai),Vi.subVectors(this.max,Ai),Zn.subVectors(e.a,Ai),Qn.subVectors(e.b,Ai),ei.subVectors(e.c,Ai),_n.subVectors(Qn,Zn),vn.subVectors(ei,Qn),Cn.subVectors(Zn,ei);let t=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Cn.z,Cn.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Cn.z,0,-Cn.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Cn.y,Cn.x,0];return!is(t,Zn,Qn,ei,Vi)||(t=[1,0,0,0,1,0,0,0,1],!is(t,Zn,Qn,ei,Vi))?!1:(Wi.crossVectors(_n,vn),t=[Wi.x,Wi.y,Wi.z],is(t,Zn,Qn,ei,Vi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new C,new C,new C,new C,new C,new C,new C,new C],sn=new C,Jn=new wi,Zn=new C,Qn=new C,ei=new C,_n=new C,vn=new C,Cn=new C,Ai=new C,Vi=new C,Wi=new C,Pn=new C;function is(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Pn.fromArray(i,s);const l=r.x*Math.abs(Pn.x)+r.y*Math.abs(Pn.y)+r.z*Math.abs(Pn.z),h=e.dot(Pn),u=t.dot(Pn),p=n.dot(Pn);if(Math.max(-Math.max(h,u,p),Math.min(h,u,p))>l)return!1}return!0}const mu=new wi,Ti=new C,rs=new C;class Ri{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ti.subVectors(e,this.center);const t=Ti.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ti,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ti.copy(e.center).add(rs)),this.expandByPoint(Ti.copy(e.center).sub(rs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new C,ss=new C,Xi=new C,xn=new C,as=new C,qi=new C,os=new C;class $i{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ss.copy(e).add(t).multiplyScalar(.5),Xi.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(ss);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Xi),l=xn.dot(this.direction),h=-xn.dot(Xi),u=xn.lengthSq(),p=Math.abs(1-o*o);let a,c,d,g;if(p>0)if(a=o*h-l,c=o*l-h,g=s*p,a>=0)if(c>=-g)if(c<=g){const _=1/p;a*=_,c*=_,d=a*(a+o*c+2*l)+c*(o*a+c+2*h)+u}else c=s,a=Math.max(0,-(o*c+l)),d=-a*a+c*(c+2*h)+u;else c=-s,a=Math.max(0,-(o*c+l)),d=-a*a+c*(c+2*h)+u;else c<=-g?(a=Math.max(0,-(-o*s+l)),c=a>0?-s:Math.min(Math.max(-s,-h),s),d=-a*a+c*(c+2*h)+u):c<=g?(a=0,c=Math.min(Math.max(-s,-h),s),d=c*(c+2*h)+u):(a=Math.max(0,-(o*s+l)),c=a>0?s:Math.min(Math.max(-s,-h),s),d=-a*a+c*(c+2*h)+u);else c=o>0?-s:s,a=Math.max(0,-(o*c+l)),d=-a*a+c*(c+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,a),r&&r.copy(ss).addScaledVector(Xi,c),d}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),r=an.dot(an)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=n-o,h=n+o;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,l,h;const u=1/this.direction.x,p=1/this.direction.y,a=1/this.direction.z,c=this.origin;return u>=0?(n=(e.min.x-c.x)*u,r=(e.max.x-c.x)*u):(n=(e.max.x-c.x)*u,r=(e.min.x-c.x)*u),p>=0?(s=(e.min.y-c.y)*p,o=(e.max.y-c.y)*p):(s=(e.max.y-c.y)*p,o=(e.min.y-c.y)*p),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),a>=0?(l=(e.min.z-c.z)*a,h=(e.max.z-c.z)*a):(l=(e.max.z-c.z)*a,h=(e.min.z-c.z)*a),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,r,s){as.subVectors(t,e),qi.subVectors(n,e),os.crossVectors(as,qi);let o=this.direction.dot(os),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;xn.subVectors(this.origin,e);const h=l*this.direction.dot(qi.crossVectors(xn,qi));if(h<0)return null;const u=l*this.direction.dot(as.cross(xn));if(u<0||h+u>o)return null;const p=-l*xn.dot(os);return p<0?null:this.at(p/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,r,s,o,l,h,u,p,a,c,d,g,_,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,l,h,u,p,a,c,d,g,_,m)}set(e,t,n,r,s,o,l,h,u,p,a,c,d,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=l,f[13]=h,f[2]=u,f[6]=p,f[10]=a,f[14]=c,f[3]=d,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ti.setFromMatrixColumn(e,0).length(),s=1/ti.setFromMatrixColumn(e,1).length(),o=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),l=Math.sin(n),h=Math.cos(r),u=Math.sin(r),p=Math.cos(s),a=Math.sin(s);if(e.order==="XYZ"){const c=o*p,d=o*a,g=l*p,_=l*a;t[0]=h*p,t[4]=-h*a,t[8]=u,t[1]=d+g*u,t[5]=c-_*u,t[9]=-l*h,t[2]=_-c*u,t[6]=g+d*u,t[10]=o*h}else if(e.order==="YXZ"){const c=h*p,d=h*a,g=u*p,_=u*a;t[0]=c+_*l,t[4]=g*l-d,t[8]=o*u,t[1]=o*a,t[5]=o*p,t[9]=-l,t[2]=d*l-g,t[6]=_+c*l,t[10]=o*h}else if(e.order==="ZXY"){const c=h*p,d=h*a,g=u*p,_=u*a;t[0]=c-_*l,t[4]=-o*a,t[8]=g+d*l,t[1]=d+g*l,t[5]=o*p,t[9]=_-c*l,t[2]=-o*u,t[6]=l,t[10]=o*h}else if(e.order==="ZYX"){const c=o*p,d=o*a,g=l*p,_=l*a;t[0]=h*p,t[4]=g*u-d,t[8]=c*u+_,t[1]=h*a,t[5]=_*u+c,t[9]=d*u-g,t[2]=-u,t[6]=l*h,t[10]=o*h}else if(e.order==="YZX"){const c=o*h,d=o*u,g=l*h,_=l*u;t[0]=h*p,t[4]=_-c*a,t[8]=g*a+d,t[1]=a,t[5]=o*p,t[9]=-l*p,t[2]=-u*p,t[6]=d*a+g,t[10]=c-_*a}else if(e.order==="XZY"){const c=o*h,d=o*u,g=l*h,_=l*u;t[0]=h*p,t[4]=-a,t[8]=u*p,t[1]=c*a+_,t[5]=o*p,t[9]=d*a-g,t[2]=g*a-d,t[6]=l*p,t[10]=_*a+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gu,e,_u)}lookAt(e,t,n){const r=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),yn.crossVectors(n,Tt),yn.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),yn.crossVectors(n,Tt)),yn.normalize(),Yi.crossVectors(Tt,yn),r[0]=yn.x,r[4]=Yi.x,r[8]=Tt.x,r[1]=yn.y,r[5]=Yi.y,r[9]=Tt.y,r[2]=yn.z,r[6]=Yi.z,r[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],l=n[4],h=n[8],u=n[12],p=n[1],a=n[5],c=n[9],d=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],v=n[7],b=n[11],w=n[15],T=r[0],P=r[4],D=r[8],y=r[12],A=r[1],W=r[5],j=r[9],N=r[13],O=r[2],z=r[6],J=r[10],q=r[14],Y=r[3],K=r[7],Z=r[11],fe=r[15];return s[0]=o*T+l*A+h*O+u*Y,s[4]=o*P+l*W+h*z+u*K,s[8]=o*D+l*j+h*J+u*Z,s[12]=o*y+l*N+h*q+u*fe,s[1]=p*T+a*A+c*O+d*Y,s[5]=p*P+a*W+c*z+d*K,s[9]=p*D+a*j+c*J+d*Z,s[13]=p*y+a*N+c*q+d*fe,s[2]=g*T+_*A+m*O+f*Y,s[6]=g*P+_*W+m*z+f*K,s[10]=g*D+_*j+m*J+f*Z,s[14]=g*y+_*N+m*q+f*fe,s[3]=x*T+v*A+b*O+w*Y,s[7]=x*P+v*W+b*z+w*K,s[11]=x*D+v*j+b*J+w*Z,s[15]=x*y+v*N+b*q+w*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],l=e[5],h=e[9],u=e[13],p=e[2],a=e[6],c=e[10],d=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*h*a-r*u*a-s*l*c+n*u*c+r*l*d-n*h*d)+_*(+t*h*d-t*u*c+s*o*c-r*o*d+r*u*p-s*h*p)+m*(+t*u*a-t*l*d-s*o*a+n*o*d+s*l*p-n*u*p)+f*(-r*l*p-t*h*a+t*l*c+r*o*a-n*o*c+n*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],l=e[5],h=e[6],u=e[7],p=e[8],a=e[9],c=e[10],d=e[11],g=e[12],_=e[13],m=e[14],f=e[15],x=a*m*u-_*c*u+_*h*d-l*m*d-a*h*f+l*c*f,v=g*c*u-p*m*u-g*h*d+o*m*d+p*h*f-o*c*f,b=p*_*u-g*a*u+g*l*d-o*_*d-p*l*f+o*a*f,w=g*a*h-p*_*h-g*l*c+o*_*c+p*l*m-o*a*m,T=t*x+n*v+r*b+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=x*P,e[1]=(_*c*s-a*m*s-_*r*d+n*m*d+a*r*f-n*c*f)*P,e[2]=(l*m*s-_*h*s+_*r*u-n*m*u-l*r*f+n*h*f)*P,e[3]=(a*h*s-l*c*s-a*r*u+n*c*u+l*r*d-n*h*d)*P,e[4]=v*P,e[5]=(p*m*s-g*c*s+g*r*d-t*m*d-p*r*f+t*c*f)*P,e[6]=(g*h*s-o*m*s-g*r*u+t*m*u+o*r*f-t*h*f)*P,e[7]=(o*c*s-p*h*s+p*r*u-t*c*u-o*r*d+t*h*d)*P,e[8]=b*P,e[9]=(g*a*s-p*_*s-g*n*d+t*_*d+p*n*f-t*a*f)*P,e[10]=(o*_*s-g*l*s+g*n*u-t*_*u-o*n*f+t*l*f)*P,e[11]=(p*l*s-o*a*s-p*n*u+t*a*u+o*n*d-t*l*d)*P,e[12]=w*P,e[13]=(p*_*r-g*a*r+g*n*c-t*_*c-p*n*m+t*a*m)*P,e[14]=(g*l*r-o*_*r-g*n*h+t*_*h+o*n*m-t*l*m)*P,e[15]=(o*a*r-p*l*r+p*n*h-t*a*h-o*n*c+t*l*c)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,l=e.y,h=e.z,u=s*o,p=s*l;return this.set(u*o+n,u*l-r*h,u*h+r*l,0,u*l+r*h,p*l+n,p*h-r*o,0,u*h-r*l,p*h+r*o,s*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,l=t._z,h=t._w,u=s+s,p=o+o,a=l+l,c=s*u,d=s*p,g=s*a,_=o*p,m=o*a,f=l*a,x=h*u,v=h*p,b=h*a,w=n.x,T=n.y,P=n.z;return r[0]=(1-(_+f))*w,r[1]=(d+b)*w,r[2]=(g-v)*w,r[3]=0,r[4]=(d-b)*T,r[5]=(1-(c+f))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(g+v)*P,r[9]=(m-x)*P,r[10]=(1-(c+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ti.set(r[0],r[1],r[2]).length();const o=ti.set(r[4],r[5],r[6]).length(),l=ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ot.copy(this);const u=1/s,p=1/o,a=1/l;return Ot.elements[0]*=u,Ot.elements[1]*=u,Ot.elements[2]*=u,Ot.elements[4]*=p,Ot.elements[5]*=p,Ot.elements[6]*=p,Ot.elements[8]*=a,Ot.elements[9]*=a,Ot.elements[10]*=a,t.setFromRotationMatrix(Ot),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,o,l=nn){const h=this.elements,u=2*s/(t-e),p=2*s/(n-r),a=(t+e)/(t-e),c=(n+r)/(n-r);let d,g;if(l===nn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(l===ki)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=a,h[12]=0,h[1]=0,h[5]=p,h[9]=c,h[13]=0,h[2]=0,h[6]=0,h[10]=d,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,s,o,l=nn){const h=this.elements,u=1/(t-e),p=1/(n-r),a=1/(o-s),c=(t+e)*u,d=(n+r)*p;let g,_;if(l===nn)g=(o+s)*a,_=-2*a;else if(l===ki)g=s*a,_=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*u,h[4]=0,h[8]=0,h[12]=-c,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-d,h[2]=0,h[6]=0,h[10]=_,h[14]=-g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ti=new C,Ot=new Ye,gu=new C(0,0,0),_u=new C(1,1,1),yn=new C,Yi=new C,Tt=new C,ro=new Ye,so=new Ei;class ji{constructor(e=0,t=0,n=0,r=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],l=r[8],h=r[1],u=r[5],p=r[9],a=r[2],c=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-a,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-a,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-a,s)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-p,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ro,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return so.setFromEuler(this),this.setFromQuaternion(so,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class ls{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vu=0;const ao=new C,ni=new Ei,on=new Ye,Ki=new C,Ci=new C,xu=new C,yu=new Ei,oo=new C(1,0,0),lo=new C(0,1,0),co=new C(0,0,1),Su={type:"added"},uo={type:"removed"};class at extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new C,t=new ji,n=new Ei,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ue}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(oo,e)}rotateY(e){return this.rotateOnAxis(lo,e)}rotateZ(e){return this.rotateOnAxis(co,e)}translateOnAxis(e,t){return ao.copy(e).applyQuaternion(this.quaternion),this.position.add(ao.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oo,e)}translateY(e){return this.translateOnAxis(lo,e)}translateZ(e){return this.translateOnAxis(co,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ki.copy(e):Ki.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ci,Ki,this.up):on.lookAt(Ki,Ci,this.up),this.quaternion.setFromRotationMatrix(on),r&&(on.extractRotation(r.matrixWorld),ni.setFromRotationMatrix(on),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Su)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(uo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,e,xu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,yu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const l=r[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let u=0,p=h.length;u<p;u++){const a=h[u];s(e.shapes,a)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,u=this.material.length;h<u;h++)l.push(s(e.materials,this.material[h]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(s(e.animations,h))}}if(t){const l=o(e.geometries),h=o(e.materials),u=o(e.textures),p=o(e.images),a=o(e.shapes),c=o(e.skeletons),d=o(e.animations),g=o(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),p.length>0&&(n.images=p),a.length>0&&(n.shapes=a),c.length>0&&(n.skeletons=c),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(l){const h=[];for(const u in l){const p=l[u];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}at.DEFAULT_UP=new C(0,1,0),at.DEFAULT_MATRIX_AUTO_UPDATE=!0,at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bt=new C,ln=new C,cs=new C,cn=new C,ii=new C,ri=new C,ho=new C,us=new C,ds=new C,hs=new C;let Ji=!1;class zt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bt.subVectors(e,t),r.cross(Bt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Bt.subVectors(r,t),ln.subVectors(n,t),cs.subVectors(e,t);const o=Bt.dot(Bt),l=Bt.dot(ln),h=Bt.dot(cs),u=ln.dot(ln),p=ln.dot(cs),a=o*u-l*l;if(a===0)return s.set(-2,-1,-1);const c=1/a,d=(u*h-l*p)*c,g=(o*p-l*h)*c;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,cn),cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getUV(e,t,n,r,s,o,l,h){return Ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ji=!0),this.getInterpolation(e,t,n,r,s,o,l,h)}static getInterpolation(e,t,n,r,s,o,l,h){return this.getBarycoord(e,t,n,r,cn),h.setScalar(0),h.addScaledVector(s,cn.x),h.addScaledVector(o,cn.y),h.addScaledVector(l,cn.z),h}static isFrontFacing(e,t,n,r){return Bt.subVectors(n,t),ln.subVectors(e,t),Bt.cross(ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Bt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ji=!0),zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,l;ii.subVectors(r,n),ri.subVectors(s,n),us.subVectors(e,n);const h=ii.dot(us),u=ri.dot(us);if(h<=0&&u<=0)return t.copy(n);ds.subVectors(e,r);const p=ii.dot(ds),a=ri.dot(ds);if(p>=0&&a<=p)return t.copy(r);const c=h*a-p*u;if(c<=0&&h>=0&&p<=0)return o=h/(h-p),t.copy(n).addScaledVector(ii,o);hs.subVectors(e,s);const d=ii.dot(hs),g=ri.dot(hs);if(g>=0&&d<=g)return t.copy(s);const _=d*u-h*g;if(_<=0&&u>=0&&g<=0)return l=u/(u-g),t.copy(n).addScaledVector(ri,l);const m=p*g-d*a;if(m<=0&&a-p>=0&&d-g>=0)return ho.subVectors(s,r),l=(a-p)/(a-p+(d-g)),t.copy(r).addScaledVector(ho,l);const f=1/(m+_+c);return o=_*f,l=c*f,t.copy(n).addScaledVector(ii,o).addScaledVector(ri,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Mu=0;class $t extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Vn,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=pa,this.blendDst=ma,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vn&&(n.blending=this.blending),this.side!==hn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const l in s){const h=s[l];delete h.metadata,o.push(h)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kt={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function fs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ce){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Nt.workingColorSpace){if(e=su(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=fs(o,s,e+1/3),this.g=fs(o,s,e),this.b=fs(o,s,e-1/3)}return Nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ce){const n=fo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ce){return Nt.fromWorkingColorSpace(mt.copy(this),e),Math.round(dt(mt.r*255,0,255))*65536+Math.round(dt(mt.g*255,0,255))*256+Math.round(dt(mt.b*255,0,255))}getHexString(e=Ce){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,r=mt.g,s=mt.b,o=Math.max(n,r,s),l=Math.min(n,r,s);let h,u;const p=(l+o)/2;if(l===o)h=0,u=0;else{const a=o-l;switch(u=p<=.5?a/(o+l):a/(2-o-l),o){case n:h=(r-s)/a+(r<s?6:0);break;case r:h=(s-n)/a+2;break;case s:h=(n-r)/a+4;break}h/=6}return e.h=h,e.s=u,e.l=p,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=Ce){Nt.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,r=mt.b;return e!==Ce?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(kt),kt.h+=e,kt.s+=t,kt.l+=n,this.setHSL(kt.h,kt.s,kt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kt),e.getHSL(Zi);const n=Jr(kt.h,Zi.h,t),r=Jr(kt.s,Zi.s,t),s=Jr(kt.l,Zi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new Ee;Ee.NAMES=fo;class ps extends $t{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ir,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new C,Qi=new ze;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ja,this.updateRange={offset:0,count:-1},this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qi.fromBufferAttribute(this,t),Qi.applyMatrix3(e),this.setXY(t,Qi.x,Qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ja&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class po extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mo extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bu=0;const Lt=new Ye,ms=new at,si=new C,Rt=new wi,Pi=new wi,ot=new C;class gt extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Za(e)?mo:po)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,n){return Lt.makeTranslation(e,t,n),this.applyMatrix4(Lt),this}scale(e,t,n){return Lt.makeScale(e,t,n),this.applyMatrix4(Lt),this}lookAt(e){return ms.lookAt(e),ms.updateMatrix(),this.applyMatrix4(ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Pi.setFromBufferAttribute(l),this.morphTargetsRelative?(ot.addVectors(Rt.min,Pi.min),Rt.expandByPoint(ot),ot.addVectors(Rt.max,Pi.max),Rt.expandByPoint(ot)):(Rt.expandByPoint(Pi.min),Rt.expandByPoint(Pi.max))}Rt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ot));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],h=this.morphTargetsRelative;for(let u=0,p=l.count;u<p;u++)ot.fromBufferAttribute(l,u),h&&(si.fromBufferAttribute(e,u),ot.add(si)),r=Math.max(r,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*l),4));const h=this.getAttribute("tangent").array,u=[],p=[];for(let A=0;A<l;A++)u[A]=new C,p[A]=new C;const a=new C,c=new C,d=new C,g=new ze,_=new ze,m=new ze,f=new C,x=new C;function v(A,W,j){a.fromArray(r,A*3),c.fromArray(r,W*3),d.fromArray(r,j*3),g.fromArray(o,A*2),_.fromArray(o,W*2),m.fromArray(o,j*2),c.sub(a),d.sub(a),_.sub(g),m.sub(g);const N=1/(_.x*m.y-m.x*_.y);isFinite(N)&&(f.copy(c).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(N),x.copy(d).multiplyScalar(_.x).addScaledVector(c,-m.x).multiplyScalar(N),u[A].add(f),u[W].add(f),u[j].add(f),p[A].add(x),p[W].add(x),p[j].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let A=0,W=b.length;A<W;++A){const j=b[A],N=j.start,O=j.count;for(let z=N,J=N+O;z<J;z+=3)v(n[z+0],n[z+1],n[z+2])}const w=new C,T=new C,P=new C,D=new C;function y(A){P.fromArray(s,A*3),D.copy(P);const W=u[A];w.copy(W),w.sub(P.multiplyScalar(P.dot(W))).normalize(),T.crossVectors(D,W);const N=T.dot(p[A])<0?-1:1;h[A*4]=w.x,h[A*4+1]=w.y,h[A*4+2]=w.z,h[A*4+3]=N}for(let A=0,W=b.length;A<W;++A){const j=b[A],N=j.start,O=j.count;for(let z=N,J=N+O;z<J;z+=3)y(n[z+0]),y(n[z+1]),y(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,d=n.count;c<d;c++)n.setXYZ(c,0,0,0);const r=new C,s=new C,o=new C,l=new C,h=new C,u=new C,p=new C,a=new C;if(e)for(let c=0,d=e.count;c<d;c+=3){const g=e.getX(c+0),_=e.getX(c+1),m=e.getX(c+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),p.subVectors(o,s),a.subVectors(r,s),p.cross(a),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,m),l.add(p),h.add(p),u.add(p),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let c=0,d=t.count;c<d;c+=3)r.fromBufferAttribute(t,c+0),s.fromBufferAttribute(t,c+1),o.fromBufferAttribute(t,c+2),p.subVectors(o,s),a.subVectors(r,s),p.cross(a),n.setXYZ(c+0,p.x,p.y,p.z),n.setXYZ(c+1,p.x,p.y,p.z),n.setXYZ(c+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(l,h){const u=l.array,p=l.itemSize,a=l.normalized,c=new u.constructor(h.length*p);let d=0,g=0;for(let _=0,m=h.length;_<m;_++){l.isInterleavedBufferAttribute?d=h[_]*l.data.stride+l.offset:d=h[_]*p;for(let f=0;f<p;f++)c[g++]=u[d++]}return new Yt(c,p,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],u=e(h,n);t.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const h=[],u=s[l];for(let p=0,a=u.length;p<a;p++){const c=u[p],d=e(c,n);h.push(d)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const u in h)h[u]!==void 0&&(e[u]=h[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const u=n[h];e.data.attributes[h]=u.toJSON(e.data)}const r={};let s=!1;for(const h in this.morphAttributes){const u=this.morphAttributes[h],p=[];for(let a=0,c=u.length;a<c;a++){const d=u[a];p.push(d.toJSON(e.data))}p.length>0&&(r[h]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const p=r[u];this.setAttribute(u,p.clone(t))}const s=e.morphAttributes;for(const u in s){const p=[],a=s[u];for(let c=0,d=a.length;c<d;c++)p.push(a[c].clone(t));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,p=o.length;u<p;u++){const a=o[u];this.addGroup(a.start,a.count,a.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const go=new Ye,Ln=new $i,er=new Ri,_o=new C,ai=new C,oi=new C,li=new C,gs=new C,tr=new C,nr=new ze,ir=new ze,rr=new ze,vo=new C,xo=new C,yo=new C,sr=new C,ar=new C;class _t extends at{constructor(e=new gt,t=new ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){tr.set(0,0,0);for(let h=0,u=s.length;h<u;h++){const p=l[h],a=s[h];p!==0&&(gs.fromBufferAttribute(a,e),o?tr.addScaledVector(gs,p):tr.addScaledVector(gs.sub(t),p))}t.add(tr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(s),Ln.copy(e.ray).recast(e.near),!(er.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(er,_o)===null||Ln.origin.distanceToSquared(_o)>(e.far-e.near)**2))&&(go.copy(s).invert(),Ln.copy(e.ray).applyMatrix4(go),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ln)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,l=s.index,h=s.attributes.position,u=s.attributes.uv,p=s.attributes.uv1,a=s.attributes.normal,c=s.groups,d=s.drawRange;if(l!==null)if(Array.isArray(o))for(let g=0,_=c.length;g<_;g++){const m=c[g],f=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=x,w=v;b<w;b+=3){const T=l.getX(b),P=l.getX(b+1),D=l.getX(b+2);r=or(this,f,e,n,u,p,a,T,P,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const x=l.getX(m),v=l.getX(m+1),b=l.getX(m+2);r=or(this,o,e,n,u,p,a,x,v,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(o))for(let g=0,_=c.length;g<_;g++){const m=c[g],f=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(h.count,Math.min(m.start+m.count,d.start+d.count));for(let b=x,w=v;b<w;b+=3){const T=b,P=b+1,D=b+2;r=or(this,f,e,n,u,p,a,T,P,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(h.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,b=m+2;r=or(this,o,e,n,u,p,a,x,v,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Eu(i,e,t,n,r,s,o,l){let h;if(e.side===Et?h=n.intersectTriangle(o,s,r,!0,l):h=n.intersectTriangle(r,s,o,e.side===hn,l),h===null)return null;ar.copy(l),ar.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(ar);return u<t.near||u>t.far?null:{distance:u,point:ar.clone(),object:i}}function or(i,e,t,n,r,s,o,l,h,u){i.getVertexPosition(l,ai),i.getVertexPosition(h,oi),i.getVertexPosition(u,li);const p=Eu(i,e,t,n,ai,oi,li,sr);if(p){r&&(nr.fromBufferAttribute(r,l),ir.fromBufferAttribute(r,h),rr.fromBufferAttribute(r,u),p.uv=zt.getInterpolation(sr,ai,oi,li,nr,ir,rr,new ze)),s&&(nr.fromBufferAttribute(s,l),ir.fromBufferAttribute(s,h),rr.fromBufferAttribute(s,u),p.uv1=zt.getInterpolation(sr,ai,oi,li,nr,ir,rr,new ze),p.uv2=p.uv1),o&&(vo.fromBufferAttribute(o,l),xo.fromBufferAttribute(o,h),yo.fromBufferAttribute(o,u),p.normal=zt.getInterpolation(sr,ai,oi,li,vo,xo,yo,new C),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const a={a:l,b:h,c:u,normal:new C,materialIndex:0};zt.getNormal(ai,oi,li,a.normal),p.face=a}return p}class Dn extends gt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const h=[],u=[],p=[],a=[];let c=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(a,2));function g(_,m,f,x,v,b,w,T,P,D,y){const A=b/P,W=w/D,j=b/2,N=w/2,O=T/2,z=P+1,J=D+1;let q=0,Y=0;const K=new C;for(let Z=0;Z<J;Z++){const fe=Z*W-N;for(let k=0;k<z;k++){const Q=k*A-j;K[_]=Q*x,K[m]=fe*v,K[f]=O,u.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[f]=T>0?1:-1,p.push(K.x,K.y,K.z),a.push(k/P),a.push(1-Z/D),q+=1}}for(let Z=0;Z<D;Z++)for(let fe=0;fe<P;fe++){const k=c+fe+z*Z,Q=c+fe+z*(Z+1),ee=c+(fe+1)+z*(Z+1),ue=c+(fe+1)+z*Z;h.push(k,Q,ue),h.push(Q,ee,ue),Y+=6}l.addGroup(d,Y,y),d+=Y,c+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ci(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const n=ci(i[t]);for(const r in n)e[r]=n[r]}return e}function wu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function So(i){return i.getRenderTarget()===null?i.outputColorSpace:qt}const Au={clone:ci,merge:St};var Tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends $t{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tu,this.fragmentShader=Ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ci(e.uniforms),this.uniformsGroups=wu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mo extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends Mo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/h,t-=o.offsetY*n/u,r*=o.width/h,n*=o.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ui=-90,di=1;class Cu extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Dt(ui,di,e,t);r.layers=this.layers,this.add(r);const s=new Dt(ui,di,e,t);s.layers=this.layers,this.add(s);const o=new Dt(ui,di,e,t);o.layers=this.layers,this.add(o);const l=new Dt(ui,di,e,t);l.layers=this.layers,this.add(l);const h=new Dt(ui,di,e,t);h.layers=this.layers,this.add(h);const u=new Dt(ui,di,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,l,h]=t;for(const u of t)this.remove(u);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ki)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,h,u]=this.children,p=e.getRenderTarget(),a=e.toneMapping,c=e.xr.enabled;e.toneMapping=tn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,h),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(p),e.toneMapping=a,e.xr.enabled=c,n.texture.needsPMREMUpdate=!0}}class bo extends At{constructor(e,t,n,r,s,o,l,h,u,p){e=e!==void 0?e:[],t=t!==void 0?t:Xn,super(e,t,n,r,s,o,l,h,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pu extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(bi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===An?Ce:Tn),this.texture=new bo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Dn(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Et,blending:fn});s.uniforms.tEquirect.value=t;const o=new _t(r,s),l=t.minFilter;return t.minFilter===yi&&(t.minFilter=Pt),new Cu(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const _s=new C,Lu=new C,Du=new Ue;class Sn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=_s.subVectors(n,t).cross(Lu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_s),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Du.getNormalMatrix(e),r=this.coplanarPoint(_s).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Ri,lr=new C;class vs{constructor(e=new Sn,t=new Sn,n=new Sn,r=new Sn,s=new Sn,o=new Sn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn){const n=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],h=r[3],u=r[4],p=r[5],a=r[6],c=r[7],d=r[8],g=r[9],_=r[10],m=r[11],f=r[12],x=r[13],v=r[14],b=r[15];if(n[0].setComponents(h-s,c-u,m-d,b-f).normalize(),n[1].setComponents(h+s,c+u,m+d,b+f).normalize(),n[2].setComponents(h+o,c+p,m+g,b+x).normalize(),n[3].setComponents(h-o,c-p,m-g,b-x).normalize(),n[4].setComponents(h-l,c-a,m-_,b-v).normalize(),t===nn)n[5].setComponents(h+l,c+a,m+_,b+v).normalize();else if(t===ki)n[5].setComponents(l,a,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(lr.x=r.normal.x>0?e.max.x:e.min.x,lr.y=r.normal.y>0?e.max.y:e.min.y,lr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eo(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Uu(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,p){const a=u.array,c=u.usage,d=i.createBuffer();i.bindBuffer(p,d),i.bufferData(p,a,c),u.onUploadCallback();let g;if(a instanceof Float32Array)g=i.FLOAT;else if(a instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(a instanceof Int16Array)g=i.SHORT;else if(a instanceof Uint32Array)g=i.UNSIGNED_INT;else if(a instanceof Int32Array)g=i.INT;else if(a instanceof Int8Array)g=i.BYTE;else if(a instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:d,type:g,bytesPerElement:a.BYTES_PER_ELEMENT,version:u.version}}function s(u,p,a){const c=p.array,d=p.updateRange;i.bindBuffer(a,u),d.count===-1?i.bufferSubData(a,0,c):(t?i.bufferSubData(a,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count):i.bufferSubData(a,d.offset*c.BYTES_PER_ELEMENT,c.subarray(d.offset,d.offset+d.count)),d.count=-1),p.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const p=n.get(u);p&&(i.deleteBuffer(p.buffer),n.delete(u))}function h(u,p){if(u.isGLBufferAttribute){const c=n.get(u);(!c||c.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const a=n.get(u);a===void 0?n.set(u,r(u,p)):a.version<u.version&&(s(a.buffer,u,p),a.version=u.version)}return{get:o,remove:l,update:h}}class cr extends gt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,l=Math.floor(n),h=Math.floor(r),u=l+1,p=h+1,a=e/l,c=t/h,d=[],g=[],_=[],m=[];for(let f=0;f<p;f++){const x=f*c-o;for(let v=0;v<u;v++){const b=v*a-s;g.push(b,-x,0),_.push(0,0,1),m.push(v/l),m.push(1-f/h)}}for(let f=0;f<h;f++)for(let x=0;x<l;x++){const v=x+u*f,b=x+u*(f+1),w=x+1+u*(f+1),T=x+1+u*f;d.push(v,b,T),d.push(b,w,T)}this.setIndex(d),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ku="vec3 transformed = vec3( position );",Gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vu=`#ifdef USE_IRIDESCENCE
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
#endif`,Wu=`#ifdef USE_BUMPMAP
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qu=`#define PI 3.141592653589793
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
} // validated`,ed=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,td=`vec3 transformedNormal = objectNormal;
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
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_d=`#ifdef USE_GRADIENTMAP
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
}`,vd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Md=`uniform bool receiveShadow;
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
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,Ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rd=`PhysicalMaterial material;
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
#endif`,Cd=`struct PhysicalMaterial {
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
}`,Pd=`
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
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ud=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Od=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kd=`#if defined( USE_POINTS_UV )
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
#endif`,Gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
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
#endif`,Xd=`#ifdef USE_MORPHTARGETS
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
#endif`,qd=`#ifdef USE_MORPHTARGETS
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
#endif`,$d=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zd=`#ifdef USE_NORMALMAP
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
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,eh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,th=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ih=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ah=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ch=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ph=`float getShadowMask() {
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
}`,mh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gh=`#ifdef USE_SKINNING
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
#endif`,_h=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vh=`#ifdef USE_SKINNING
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
#endif`,xh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bh=`#ifdef USE_TRANSMISSION
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
#endif`,Eh=`#ifdef USE_TRANSMISSION
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
#endif`,wh=`#ifdef USE_UV
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
#endif`,Ah=`#ifdef USE_UV
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
#endif`,Th=`#ifdef USE_UV
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
#endif`,Rh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const De={alphamap_fragment:Iu,alphamap_pars_fragment:Fu,alphatest_fragment:Nu,alphatest_pars_fragment:Ou,aomap_fragment:Bu,aomap_pars_fragment:zu,begin_vertex:ku,beginnormal_vertex:Gu,bsdfs:Hu,iridescence_fragment:Vu,bumpmap_pars_fragment:Wu,clipping_planes_fragment:Xu,clipping_planes_pars_fragment:qu,clipping_planes_pars_vertex:$u,clipping_planes_vertex:Yu,color_fragment:ju,color_pars_fragment:Ku,color_pars_vertex:Ju,color_vertex:Zu,common:Qu,cube_uv_reflection_fragment:ed,defaultnormal_vertex:td,displacementmap_pars_vertex:nd,displacementmap_vertex:id,emissivemap_fragment:rd,emissivemap_pars_fragment:sd,encodings_fragment:ad,encodings_pars_fragment:od,envmap_fragment:ld,envmap_common_pars_fragment:cd,envmap_pars_fragment:ud,envmap_pars_vertex:dd,envmap_physical_pars_fragment:bd,envmap_vertex:hd,fog_vertex:fd,fog_pars_vertex:pd,fog_fragment:md,fog_pars_fragment:gd,gradientmap_pars_fragment:_d,lightmap_fragment:vd,lightmap_pars_fragment:xd,lights_lambert_fragment:yd,lights_lambert_pars_fragment:Sd,lights_pars_begin:Md,lights_toon_fragment:Ed,lights_toon_pars_fragment:wd,lights_phong_fragment:Ad,lights_phong_pars_fragment:Td,lights_physical_fragment:Rd,lights_physical_pars_fragment:Cd,lights_fragment_begin:Pd,lights_fragment_maps:Ld,lights_fragment_end:Dd,logdepthbuf_fragment:Ud,logdepthbuf_pars_fragment:Id,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:Nd,map_fragment:Od,map_pars_fragment:Bd,map_particle_fragment:zd,map_particle_pars_fragment:kd,metalnessmap_fragment:Gd,metalnessmap_pars_fragment:Hd,morphcolor_vertex:Vd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:qd,normal_fragment_begin:$d,normal_fragment_maps:Yd,normal_pars_fragment:jd,normal_pars_vertex:Kd,normal_vertex:Jd,normalmap_pars_fragment:Zd,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:eh,clearcoat_pars_fragment:th,iridescence_pars_fragment:nh,output_fragment:ih,packing:rh,premultiplied_alpha_fragment:sh,project_vertex:ah,dithering_fragment:oh,dithering_pars_fragment:lh,roughnessmap_fragment:ch,roughnessmap_pars_fragment:uh,shadowmap_pars_fragment:dh,shadowmap_pars_vertex:hh,shadowmap_vertex:fh,shadowmask_pars_fragment:ph,skinbase_vertex:mh,skinning_pars_vertex:gh,skinning_vertex:_h,skinnormal_vertex:vh,specularmap_fragment:xh,specularmap_pars_fragment:yh,tonemapping_fragment:Sh,tonemapping_pars_fragment:Mh,transmission_fragment:bh,transmission_pars_fragment:Eh,uv_pars_fragment:wh,uv_pars_vertex:Ah,uv_vertex:Th,worldpos_vertex:Rh,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},re={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},jt={basic:{uniforms:St([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:St([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ee(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:St([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:St([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:St([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ee(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:St([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:St([re.points,re.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:St([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:St([re.common,re.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:St([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:St([re.sprite,re.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:St([re.common,re.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:St([re.lights,re.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};jt.physical={uniforms:St([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const ur={r:0,b:0,g:0};function Ch(i,e,t,n,r,s,o){const l=new Ee(0);let h=s===!0?0:1,u,p,a=null,c=0,d=null;function g(m,f){let x=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(l,h):v&&v.isColor&&(_(v,1),x=!0),i.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),x=!0;break}(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===zi)?(p===void 0&&(p=new _t(new Dn(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:ci(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(T,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=v,p.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,p.material.toneMapped=v.colorSpace!==Ce,(a!==v||c!==v.version||d!==i.toneMapping)&&(p.material.needsUpdate=!0,a=v,c=v.version,d=i.toneMapping),p.layers.enableAll(),m.unshift(p,p.geometry,p.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new _t(new cr(2,2),new Un({name:"BackgroundMaterial",uniforms:ci(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(a!==v||c!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,a=v,c=v.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,f){m.getRGB(ur,So(i)),n.buffers.color.setClear(ur.r,ur.g,ur.b,f,o)}return{getClearColor:function(){return l},setClearColor:function(m,f=1){l.set(m),h=f,_(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,_(l,h)},render:g}}function Ph(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,l={},h=m(null);let u=h,p=!1;function a(O,z,J,q,Y){let K=!1;if(o){const Z=_(q,J,z);u!==Z&&(u=Z,d(u.object)),K=f(O,q,J,Y),K&&x(O,q,J,Y)}else{const Z=z.wireframe===!0;(u.geometry!==q.id||u.program!==J.id||u.wireframe!==Z)&&(u.geometry=q.id,u.program=J.id,u.wireframe=Z,K=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(K||p)&&(p=!1,D(O,z,J,q),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(O){return n.isWebGL2?i.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?i.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function _(O,z,J){const q=J.wireframe===!0;let Y=l[O.id];Y===void 0&&(Y={},l[O.id]=Y);let K=Y[z.id];K===void 0&&(K={},Y[z.id]=K);let Z=K[q];return Z===void 0&&(Z=m(c()),K[q]=Z),Z}function m(O){const z=[],J=[],q=[];for(let Y=0;Y<r;Y++)z[Y]=0,J[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:q,object:O,attributes:{},index:null}}function f(O,z,J,q){const Y=u.attributes,K=z.attributes;let Z=0;const fe=J.getAttributes();for(const k in fe)if(fe[k].location>=0){const ee=Y[k];let ue=K[k];if(ue===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),ee===void 0||ee.attribute!==ue||ue&&ee.data!==ue.data)return!0;Z++}return u.attributesNum!==Z||u.index!==q}function x(O,z,J,q){const Y={},K=z.attributes;let Z=0;const fe=J.getAttributes();for(const k in fe)if(fe[k].location>=0){let ee=K[k];ee===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor));const ue={};ue.attribute=ee,ee&&ee.data&&(ue.data=ee.data),Y[k]=ue,Z++}u.attributes=Y,u.attributesNum=Z,u.index=q}function v(){const O=u.newAttributes;for(let z=0,J=O.length;z<J;z++)O[z]=0}function b(O){w(O,0)}function w(O,z){const J=u.newAttributes,q=u.enabledAttributes,Y=u.attributeDivisors;J[O]=1,q[O]===0&&(i.enableVertexAttribArray(O),q[O]=1),Y[O]!==z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,z),Y[O]=z)}function T(){const O=u.newAttributes,z=u.enabledAttributes;for(let J=0,q=z.length;J<q;J++)z[J]!==O[J]&&(i.disableVertexAttribArray(J),z[J]=0)}function P(O,z,J,q,Y,K,Z){Z===!0?i.vertexAttribIPointer(O,z,J,Y,K):i.vertexAttribPointer(O,z,J,q,Y,K)}function D(O,z,J,q){if(n.isWebGL2===!1&&(O.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Y=q.attributes,K=J.getAttributes(),Z=z.defaultAttributeValues;for(const fe in K){const k=K[fe];if(k.location>=0){let Q=Y[fe];if(Q===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(Q=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(Q=O.instanceColor)),Q!==void 0){const ee=Q.normalized,ue=Q.itemSize,he=t.get(Q);if(he===void 0)continue;const ye=he.buffer,Ie=he.type,we=he.bytesPerElement,ct=n.isWebGL2===!0&&(Ie===i.INT||Ie===i.UNSIGNED_INT||Q.gpuType===va);if(Q.isInterleavedBufferAttribute){const ke=Q.data,I=ke.stride,ht=Q.offset;if(ke.isInstancedInterleavedBuffer){for(let Me=0;Me<k.locationSize;Me++)w(k.location+Me,ke.meshPerAttribute);O.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Me=0;Me<k.locationSize;Me++)b(k.location+Me);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Me=0;Me<k.locationSize;Me++)P(k.location+Me,ue/k.locationSize,Ie,ee,I*we,(ht+ue/k.locationSize*Me)*we,ct)}else{if(Q.isInstancedBufferAttribute){for(let ke=0;ke<k.locationSize;ke++)w(k.location+ke,Q.meshPerAttribute);O.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ke=0;ke<k.locationSize;ke++)b(k.location+ke);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let ke=0;ke<k.locationSize;ke++)P(k.location+ke,ue/k.locationSize,Ie,ee,ue*we,ue/k.locationSize*ke*we,ct)}}else if(Z!==void 0){const ee=Z[fe];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(k.location,ee);break;case 3:i.vertexAttrib3fv(k.location,ee);break;case 4:i.vertexAttrib4fv(k.location,ee);break;default:i.vertexAttrib1fv(k.location,ee)}}}}T()}function y(){j();for(const O in l){const z=l[O];for(const J in z){const q=z[J];for(const Y in q)g(q[Y].object),delete q[Y];delete z[J]}delete l[O]}}function A(O){if(l[O.id]===void 0)return;const z=l[O.id];for(const J in z){const q=z[J];for(const Y in q)g(q[Y].object),delete q[Y];delete z[J]}delete l[O.id]}function W(O){for(const z in l){const J=l[z];if(J[O.id]===void 0)continue;const q=J[O.id];for(const Y in q)g(q[Y].object),delete q[Y];delete J[O.id]}}function j(){N(),p=!0,u!==h&&(u=h,d(u.object))}function N(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:a,reset:j,resetDefaultState:N,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:W,initAttributes:v,enableAttribute:b,disableUnusedAttributes:T}}function Lh(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function l(u,p){i.drawArrays(s,u,p),t.update(p,s,1)}function h(u,p,a){if(a===0)return;let c,d;if(r)c=i,d="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[d](s,u,p,a),t.update(p,s,a)}this.setMode=o,this.render=l,this.renderInstances=h}function Dh(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const h=s(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=o||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,a=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),c=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=c>0,b=o||e.has("OES_texture_float"),w=v&&b,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:p,maxTextures:a,maxVertexTextures:c,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:w,maxSamples:T}}function Uh(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Sn,l=new Ue,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(a,c){const d=a.length!==0||c||n!==0||r;return r=c,n=a.length,d},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(a,c){t=p(a,c,0)},this.setState=function(a,c,d){const g=a.clippingPlanes,_=a.clipIntersection,m=a.clipShadows,f=i.get(a);if(!r||g===null||g.length===0||s&&!m)s?p(null):u();else{const x=s?0:n,v=x*4;let b=f.clippingState||null;h.value=b,b=p(g,c,v,d);for(let w=0;w!==v;++w)b[w]=t[w];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(a,c,d,g){const _=a!==null?a.length:0;let m=null;if(_!==0){if(m=h.value,g!==!0||m===null){const f=d+_*4,x=c.matrixWorldInverse;l.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,b=d;v!==_;++v,b+=4)o.copy(a[v]).applyMatrix4(x,l),o.normal.toArray(m,b),m[b+3]=o.constant}h.value=m,h.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ih(i){let e=new WeakMap;function t(o,l){return l===Fr?o.mapping=Xn:l===Nr&&(o.mapping=qn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping;if(l===Fr||l===Nr)if(e.has(o)){const h=e.get(o).texture;return t(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const u=new Pu(h.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class dr extends Mo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,l=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,l-=p*this.view.offsetY,h=l-p*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hi=4,wo=[.125,.215,.35,.446,.526,.582],Fn=20,xs=new dr,Ao=new Ee;let ys=null;const Nn=(1+Math.sqrt(5))/2,fi=1/Nn,To=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Nn,fi),new C(0,Nn,-fi),new C(fi,0,Nn),new C(-fi,0,Nn),new C(Nn,fi,0),new C(-Nn,fi,0)];class Ro{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ys=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ys),e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xn||e.mapping===qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ys=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Si,format:Ft,colorSpace:qt,depthBuffer:!1},r=Co(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Co(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fh(s)),this._blurMaterial=Nh(s,e,t)}return r}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,xs)}_sceneToCubeUV(e,t,n,r){const l=new Dt(90,1,t,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,a=p.autoClear,c=p.toneMapping;p.getClearColor(Ao),p.toneMapping=tn,p.autoClear=!1;const d=new ps({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),g=new _t(new Dn,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Ao),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(l.up.set(0,h[f],0),l.lookAt(u[f],0,0)):x===1?(l.up.set(0,0,h[f]),l.lookAt(0,u[f],0)):(l.up.set(0,h[f],0),l.lookAt(0,0,u[f]));const v=this._cubeSize;hr(r,x*v,f>2?v:0,v,v),p.setRenderTarget(r),_&&p.render(g,l),p.render(e,l)}g.geometry.dispose(),g.material.dispose(),p.toneMapping=c,p.autoClear=a,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Xn||e.mapping===qn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Po());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const h=this._cubeSize;hr(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(o,xs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=To[(r-1)%To.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,l){const h=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,a=new _t(this._lodPlanes[r],u),c=u.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Fn-1),_=s/g,m=isFinite(s)?1+Math.floor(p*_):Fn;m>Fn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fn}`);const f=[];let x=0;for(let P=0;P<Fn;++P){const D=P/_,y=Math.exp(-D*D/2);f.push(y),P===0?x+=y:P<m&&(x+=2*y)}for(let P=0;P<f.length;P++)f[P]=f[P]/x;c.envMap.value=e.texture,c.samples.value=m,c.weights.value=f,c.latitudinal.value=o==="latitudinal",l&&(c.poleAxis.value=l);const{_lodMax:v}=this;c.dTheta.value=g,c.mipInt.value=v-n;const b=this._sizeLods[r],w=3*b*(r>v-hi?r-v+hi:0),T=4*(this._cubeSize-b);hr(t,w,T,3*b,2*b),h.setRenderTarget(t),h.render(a,xs)}}function Fh(i){const e=[],t=[],n=[];let r=i;const s=i-hi+1+wo.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);t.push(l);let h=1/l;o>i-hi?h=wo[o-i+hi-1]:o===0&&(h=0),n.push(h);const u=1/(l-2),p=-u,a=1+u,c=[p,p,a,p,a,a,p,p,a,a,p,a],d=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*d),v=new Float32Array(m*g*d),b=new Float32Array(f*g*d);for(let T=0;T<d;T++){const P=T%3*2/3-1,D=T>2?0:-1,y=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];x.set(y,_*g*T),v.set(c,m*g*T);const A=[T,T,T,T,T,T];b.set(A,f*g*T)}const w=new gt;w.setAttribute("position",new Yt(x,_)),w.setAttribute("uv",new Yt(v,m)),w.setAttribute("faceIndex",new Yt(b,f)),e.push(w),r>hi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Co(i,e,t){const n=new Rn(i,e,t);return n.texture.mapping=zi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Nh(i,e,t){const n=new Float32Array(Fn),r=new C(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ss(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Po(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ss(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Lo(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Ss(){return`

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
	`}function Oh(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,u=h===Fr||h===Nr,p=h===Xn||h===qn;if(u||p)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let a=e.get(l);return t===null&&(t=new Ro(i)),a=u?t.fromEquirectangular(l,a):t.fromCubemap(l,a),e.set(l,a),a.texture}else{if(e.has(l))return e.get(l).texture;{const a=l.image;if(u&&a&&a.height>0||p&&a&&r(a)){t===null&&(t=new Ro(i));const c=u?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,c),l.addEventListener("dispose",s),c.texture}else return null}}}return l}function r(l){let h=0;const u=6;for(let p=0;p<u;p++)l[p]!==void 0&&h++;return h===u}function s(l){const h=l.target;h.removeEventListener("dispose",s);const u=e.get(h);u!==void 0&&(e.delete(h),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Bh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function zh(i,e,t,n){const r={},s=new WeakMap;function o(a){const c=a.target;c.index!==null&&e.remove(c.index);for(const g in c.attributes)e.remove(c.attributes[g]);for(const g in c.morphAttributes){const _=c.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}c.removeEventListener("dispose",o),delete r[c.id];const d=s.get(c);d&&(e.remove(d),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function l(a,c){return r[c.id]===!0||(c.addEventListener("dispose",o),r[c.id]=!0,t.memory.geometries++),c}function h(a){const c=a.attributes;for(const g in c)e.update(c[g],i.ARRAY_BUFFER);const d=a.morphAttributes;for(const g in d){const _=d[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function u(a){const c=[],d=a.index,g=a.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,b=x.length;v<b;v+=3){const w=x[v+0],T=x[v+1],P=x[v+2];c.push(w,T,T,P,P,w)}}else{const x=g.array;_=g.version;for(let v=0,b=x.length/3-1;v<b;v+=3){const w=v+0,T=v+1,P=v+2;c.push(w,T,T,P,P,w)}}const m=new(Za(c)?mo:po)(c,1);m.version=_;const f=s.get(a);f&&e.remove(f),s.set(a,m)}function p(a){const c=s.get(a);if(c){const d=a.index;d!==null&&c.version<d.version&&u(a)}else u(a);return s.get(a)}return{get:l,update:h,getWireframeAttribute:p}}function kh(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}let l,h;function u(c){l=c.type,h=c.bytesPerElement}function p(c,d){i.drawElements(s,d,l,c*h),t.update(d,s,1)}function a(c,d,g){if(g===0)return;let _,m;if(r)_=i,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,d,l,c*h,g),t.update(d,s,g)}this.setMode=o,this.setIndex=u,this.render=p,this.renderInstances=a}function Gh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Hh(i,e){return i[0]-e[0]}function Vh(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Wh(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new st,l=[];for(let u=0;u<8;u++)l[u]=[u,0];function h(u,p,a){const c=u.morphTargetInfluences;if(e.isWebGL2===!0){const d=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,g=d!==void 0?d.length:0;let _=s.get(p);if(_===void 0||_.count!==g){let O=function(){j.dispose(),s.delete(p),p.removeEventListener("dispose",O)};_!==void 0&&_.texture.dispose();const x=p.morphAttributes.position!==void 0,v=p.morphAttributes.normal!==void 0,b=p.morphAttributes.color!==void 0,w=p.morphAttributes.position||[],T=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let D=0;x===!0&&(D=1),v===!0&&(D=2),b===!0&&(D=3);let y=p.attributes.position.count*D,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const W=new Float32Array(y*A*4*g),j=new no(W,y,A,g);j.type=gn,j.needsUpdate=!0;const N=D*4;for(let z=0;z<g;z++){const J=w[z],q=T[z],Y=P[z],K=y*A*4*z;for(let Z=0;Z<J.count;Z++){const fe=Z*N;x===!0&&(o.fromBufferAttribute(J,Z),W[K+fe+0]=o.x,W[K+fe+1]=o.y,W[K+fe+2]=o.z,W[K+fe+3]=0),v===!0&&(o.fromBufferAttribute(q,Z),W[K+fe+4]=o.x,W[K+fe+5]=o.y,W[K+fe+6]=o.z,W[K+fe+7]=0),b===!0&&(o.fromBufferAttribute(Y,Z),W[K+fe+8]=o.x,W[K+fe+9]=o.y,W[K+fe+10]=o.z,W[K+fe+11]=Y.itemSize===4?o.w:1)}}_={count:g,texture:j,size:new ze(y,A)},s.set(p,_),p.addEventListener("dispose",O)}let m=0;for(let x=0;x<c.length;x++)m+=c[x];const f=p.morphTargetsRelative?1:1-m;a.getUniforms().setValue(i,"morphTargetBaseInfluence",f),a.getUniforms().setValue(i,"morphTargetInfluences",c),a.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),a.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const d=c===void 0?0:c.length;let g=n[p.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];n[p.id]=g}for(let v=0;v<d;v++){const b=g[v];b[0]=v,b[1]=c[v]}g.sort(Vh);for(let v=0;v<8;v++)v<d&&g[v][1]?(l[v][0]=g[v][0],l[v][1]=g[v][1]):(l[v][0]=Number.MAX_SAFE_INTEGER,l[v][1]=0);l.sort(Hh);const _=p.morphAttributes.position,m=p.morphAttributes.normal;let f=0;for(let v=0;v<8;v++){const b=l[v],w=b[0],T=b[1];w!==Number.MAX_SAFE_INTEGER&&T?(_&&p.getAttribute("morphTarget"+v)!==_[w]&&p.setAttribute("morphTarget"+v,_[w]),m&&p.getAttribute("morphNormal"+v)!==m[w]&&p.setAttribute("morphNormal"+v,m[w]),r[v]=T,f+=T):(_&&p.hasAttribute("morphTarget"+v)===!0&&p.deleteAttribute("morphTarget"+v),m&&p.hasAttribute("morphNormal"+v)===!0&&p.deleteAttribute("morphNormal"+v),r[v]=0)}const x=p.morphTargetsRelative?1:1-f;a.getUniforms().setValue(i,"morphTargetBaseInfluence",x),a.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:h}}function Xh(i,e,t,n){let r=new WeakMap;function s(h){const u=n.render.frame,p=h.geometry,a=e.get(h,p);return r.get(a)!==u&&(e.update(a),r.set(a,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER)),a}function o(){r=new WeakMap}function l(h){const u=h.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Do=new At,Uo=new no,Io=new pu,Fo=new bo,No=[],Oo=[],Bo=new Float32Array(16),zo=new Float32Array(9),ko=new Float32Array(4);function pi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=No[r];if(s===void 0&&(s=new Float32Array(r),No[r]=s),e!==0){n.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(s,l)}return s}function it(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fr(i,e){let t=Oo[e];t===void 0&&(t=new Int32Array(e),Oo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $h(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2fv(this.addr,e),rt(t,e)}}function Yh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(it(t,e))return;i.uniform3fv(this.addr,e),rt(t,e)}}function jh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4fv(this.addr,e),rt(t,e)}}function Kh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;ko.set(n),i.uniformMatrix2fv(this.addr,!1,ko),rt(t,n)}}function Jh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;zo.set(n),i.uniformMatrix3fv(this.addr,!1,zo),rt(t,n)}}function Zh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;Bo.set(n),i.uniformMatrix4fv(this.addr,!1,Bo),rt(t,n)}}function Qh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2iv(this.addr,e),rt(t,e)}}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;i.uniform3iv(this.addr,e),rt(t,e)}}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4iv(this.addr,e),rt(t,e)}}function rf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2uiv(this.addr,e),rt(t,e)}}function af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;i.uniform3uiv(this.addr,e),rt(t,e)}}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4uiv(this.addr,e),rt(t,e)}}function lf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Do,r)}function cf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Io,r)}function uf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Fo,r)}function df(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Uo,r)}function hf(i){switch(i){case 5126:return qh;case 35664:return $h;case 35665:return Yh;case 35666:return jh;case 35674:return Kh;case 35675:return Jh;case 35676:return Zh;case 5124:case 35670:return Qh;case 35667:case 35671:return ef;case 35668:case 35672:return tf;case 35669:case 35673:return nf;case 5125:return rf;case 36294:return sf;case 36295:return af;case 36296:return of;case 35678:case 36198:case 36298:case 36306:case 35682:return lf;case 35679:case 36299:case 36307:return cf;case 35680:case 36300:case 36308:case 36293:return uf;case 36289:case 36303:case 36311:case 36292:return df}}function ff(i,e){i.uniform1fv(this.addr,e)}function pf(i,e){const t=pi(e,this.size,2);i.uniform2fv(this.addr,t)}function mf(i,e){const t=pi(e,this.size,3);i.uniform3fv(this.addr,t)}function gf(i,e){const t=pi(e,this.size,4);i.uniform4fv(this.addr,t)}function _f(i,e){const t=pi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vf(i,e){const t=pi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xf(i,e){const t=pi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yf(i,e){i.uniform1iv(this.addr,e)}function Sf(i,e){i.uniform2iv(this.addr,e)}function Mf(i,e){i.uniform3iv(this.addr,e)}function bf(i,e){i.uniform4iv(this.addr,e)}function Ef(i,e){i.uniform1uiv(this.addr,e)}function wf(i,e){i.uniform2uiv(this.addr,e)}function Af(i,e){i.uniform3uiv(this.addr,e)}function Tf(i,e){i.uniform4uiv(this.addr,e)}function Rf(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Do,s[o])}function Cf(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Io,s[o])}function Pf(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fo,s[o])}function Lf(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Uo,s[o])}function Df(i){switch(i){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return _f;case 35675:return vf;case 35676:return xf;case 5124:case 35670:return yf;case 35667:case 35671:return Sf;case 35668:case 35672:return Mf;case 35669:case 35673:return bf;case 5125:return Ef;case 36294:return wf;case 36295:return Af;case 36296:return Tf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return Lf}}class Uf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=hf(t.type)}}class If{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Df(t.type)}}class Ff{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const Ms=/(\w+)(\])?(\[|\.)?/g;function Go(i,e){i.seq.push(e),i.map[e.id]=e}function Nf(i,e,t){const n=i.name,r=n.length;for(Ms.lastIndex=0;;){const s=Ms.exec(n),o=Ms.lastIndex;let l=s[1];const h=s[2]==="]",u=s[3];if(h&&(l=l|0),u===void 0||u==="["&&o+2===r){Go(t,u===void 0?new Uf(l,i,e):new If(l,i,e));break}else{let a=t.map[l];a===void 0&&(a=new Ff(l),Go(t,a)),t=a}}}class pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Nf(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const l=t[s],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ho(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Of=0;function Bf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}function zf(i){switch(i){case qt:return["Linear","( value )"];case Ce:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Vo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Bf(i.getShaderSource(e),o)}else return r}function kf(i,e){const t=zf(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Gf(i,e){let t;switch(e){case Dc:t="Linear";break;case Uc:t="Reinhard";break;case Ic:t="OptimizedCineon";break;case Fc:t="ACESFilmic";break;case Nc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Li).join(`
`)}function Vf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function Li(i){return i!==""}function Wo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xf=/^[ \t]*#include +<([\w\d./]+)>/gm;function bs(i){return i.replace(Xf,qf)}function qf(i,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return bs(t)}const $f=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qo(i){return i.replace($f,Yf)}function Yf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $o(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===la?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===uc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===en&&(e="SHADOWMAP_TYPE_VSM"),e}function Kf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xn:case qn:e="ENVMAP_TYPE_CUBE";break;case zi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qn:e="ENVMAP_MODE_REFRACTION";break}return e}function Zf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ir:e="ENVMAP_BLENDING_MULTIPLY";break;case Pc:e="ENVMAP_BLENDING_MIX";break;case Lc:e="ENVMAP_BLENDING_ADD";break}return e}function Qf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ep(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const h=jf(t),u=Kf(t),p=Jf(t),a=Zf(t),c=Qf(t),d=t.isWebGL2?"":Hf(t),g=Vf(s),_=r.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Li).join(`
`),m.length>0&&(m+=`
`),f=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Li).join(`
`),f.length>0&&(f+=`
`)):(m=[$o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),f=[d,$o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMap?"#define "+a:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tn?"#define TONE_MAPPING":"",t.toneMapping!==tn?De.tonemapping_pars_fragment:"",t.toneMapping!==tn?Gf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,kf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),o=bs(o),o=Wo(o,t),o=Xo(o,t),l=bs(l),l=Wo(l,t),l=Xo(l,t),o=qo(o),l=qo(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+m+o,b=x+f+l,w=Ho(r,r.VERTEX_SHADER,v),T=Ho(r,r.FRAGMENT_SHADER,b);if(r.attachShader(_,w),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const y=r.getProgramInfoLog(_).trim(),A=r.getShaderInfoLog(w).trim(),W=r.getShaderInfoLog(T).trim();let j=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,w,T);else{const O=Vo(r,w,"vertex"),z=Vo(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+O+`
`+z)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(A===""||W==="")&&(N=!1);N&&(this.diagnostics={runnable:j,programLog:y,vertexShader:{log:A,prefix:m},fragmentShader:{log:W,prefix:f}})}r.deleteShader(w),r.deleteShader(T);let P;this.getUniforms=function(){return P===void 0&&(P=new pr(r,_)),P};let D;return this.getAttributes=function(){return D===void 0&&(D=Wf(r,_)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Of++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let tp=0;class np{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ip(e),t.set(e,n)),n}}class ip{constructor(e){this.id=tp++,this.code=e,this.usedTimes=0}}function rp(i,e,t,n,r,s,o){const l=new ls,h=new np,u=[],p=r.isWebGL2,a=r.logarithmicDepthBuffer,c=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,A,W,j,N){const O=j.fog,z=N.geometry,J=y.isMeshStandardMaterial?j.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||J),Y=q&&q.mapping===zi?q.image.height:null,K=g[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,fe=Z!==void 0?Z.length:0;let k=0;z.morphAttributes.position!==void 0&&(k=1),z.morphAttributes.normal!==void 0&&(k=2),z.morphAttributes.color!==void 0&&(k=3);let Q,ee,ue,he;if(K){const tt=jt[K];Q=tt.vertexShader,ee=tt.fragmentShader}else Q=y.vertexShader,ee=y.fragmentShader,h.update(y),ue=h.getVertexShaderID(y),he=h.getFragmentShaderID(y);const ye=i.getRenderTarget(),Ie=N.isInstancedMesh===!0,we=!!y.map,ct=!!y.matcap,ke=!!q,I=!!y.aoMap,ht=!!y.lightMap,Me=!!y.bumpMap,Fe=!!y.normalMap,Ae=!!y.displacementMap,Xe=!!y.emissiveMap,Be=!!y.metalnessMap,Pe=!!y.roughnessMap,Ve=y.anisotropy>0,ft=y.clearcoat>0,xt=y.iridescence>0,E=y.sheen>0,S=y.transmission>0,H=Ve&&!!y.anisotropyMap,te=ft&&!!y.clearcoatMap,ne=ft&&!!y.clearcoatNormalMap,ae=ft&&!!y.clearcoatRoughnessMap,ge=xt&&!!y.iridescenceMap,oe=xt&&!!y.iridescenceThicknessMap,X=E&&!!y.sheenColorMap,_e=E&&!!y.sheenRoughnessMap,ve=!!y.specularMap,Se=!!y.specularColorMap,pe=!!y.specularIntensityMap,me=S&&!!y.transmissionMap,Ne=S&&!!y.thicknessMap,We=!!y.gradientMap,R=!!y.alphaMap,se=y.alphaTest>0,B=!!y.extensions,ie=!!z.attributes.uv1,le=!!z.attributes.uv2,He=!!z.attributes.uv3;return{isWebGL2:p,shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:Q,fragmentShader:ee,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,supportsVertexTextures:c,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:qt,map:we,matcap:ct,envMap:ke,envMapMode:ke&&q.mapping,envMapCubeUVHeight:Y,aoMap:I,lightMap:ht,bumpMap:Me,normalMap:Fe,displacementMap:c&&Ae,emissiveMap:Xe,normalMapObjectSpace:Fe&&y.normalMapType===jc,normalMapTangentSpace:Fe&&y.normalMapType===qr,metalnessMap:Be,roughnessMap:Pe,anisotropy:Ve,anisotropyMap:H,clearcoat:ft,clearcoatMap:te,clearcoatNormalMap:ne,clearcoatRoughnessMap:ae,iridescence:xt,iridescenceMap:ge,iridescenceThicknessMap:oe,sheen:E,sheenColorMap:X,sheenRoughnessMap:_e,specularMap:ve,specularColorMap:Se,specularIntensityMap:pe,transmission:S,transmissionMap:me,thicknessMap:Ne,gradientMap:We,opaque:y.transparent===!1&&y.blending===Vn,alphaMap:R,alphaTest:se,combine:y.combine,mapUv:we&&_(y.map.channel),aoMapUv:I&&_(y.aoMap.channel),lightMapUv:ht&&_(y.lightMap.channel),bumpMapUv:Me&&_(y.bumpMap.channel),normalMapUv:Fe&&_(y.normalMap.channel),displacementMapUv:Ae&&_(y.displacementMap.channel),emissiveMapUv:Xe&&_(y.emissiveMap.channel),metalnessMapUv:Be&&_(y.metalnessMap.channel),roughnessMapUv:Pe&&_(y.roughnessMap.channel),anisotropyMapUv:H&&_(y.anisotropyMap.channel),clearcoatMapUv:te&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:X&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(y.sheenRoughnessMap.channel),specularMapUv:ve&&_(y.specularMap.channel),specularColorMapUv:Se&&_(y.specularColorMap.channel),specularIntensityMapUv:pe&&_(y.specularIntensityMap.channel),transmissionMapUv:me&&_(y.transmissionMap.channel),thicknessMapUv:Ne&&_(y.thicknessMap.channel),alphaMapUv:R&&_(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Fe||Ve),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:le,vertexUv3s:He,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(we||R),fog:!!O,useFog:y.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:a,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:k,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:y.toneMapped?i.toneMapping:tn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xt,flipSided:y.side===Et,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:B&&y.extensions.derivatives===!0,extensionFragDepth:B&&y.extensions.fragDepth===!0,extensionDrawBuffers:B&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:B&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const W in y.defines)A.push(W),A.push(y.defines[W]);return y.isRawShaderMaterial===!1&&(x(A,y),v(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function x(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){l.disableAll(),A.isWebGL2&&l.enable(0),A.supportsVertexTextures&&l.enable(1),A.instancing&&l.enable(2),A.instancingColor&&l.enable(3),A.matcap&&l.enable(4),A.envMap&&l.enable(5),A.normalMapObjectSpace&&l.enable(6),A.normalMapTangentSpace&&l.enable(7),A.clearcoat&&l.enable(8),A.iridescence&&l.enable(9),A.alphaTest&&l.enable(10),A.vertexColors&&l.enable(11),A.vertexAlphas&&l.enable(12),A.vertexUv1s&&l.enable(13),A.vertexUv2s&&l.enable(14),A.vertexUv3s&&l.enable(15),A.vertexTangents&&l.enable(16),A.anisotropy&&l.enable(17),y.push(l.mask),l.disableAll(),A.fog&&l.enable(0),A.useFog&&l.enable(1),A.flatShading&&l.enable(2),A.logarithmicDepthBuffer&&l.enable(3),A.skinning&&l.enable(4),A.morphTargets&&l.enable(5),A.morphNormals&&l.enable(6),A.morphColors&&l.enable(7),A.premultipliedAlpha&&l.enable(8),A.shadowMapEnabled&&l.enable(9),A.useLegacyLights&&l.enable(10),A.doubleSided&&l.enable(11),A.flipSided&&l.enable(12),A.useDepthPacking&&l.enable(13),A.dithering&&l.enable(14),A.transmission&&l.enable(15),A.sheen&&l.enable(16),A.opaque&&l.enable(17),A.pointsUvs&&l.enable(18),y.push(l.mask)}function b(y){const A=g[y.type];let W;if(A){const j=jt[A];W=Au.clone(j.uniforms)}else W=y.uniforms;return W}function w(y,A){let W;for(let j=0,N=u.length;j<N;j++){const O=u[j];if(O.cacheKey===A){W=O,++W.usedTimes;break}}return W===void 0&&(W=new ep(i,A,y,s),u.push(W)),W}function T(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),y.destroy()}}function P(y){h.remove(y)}function D(){h.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:w,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:D}}function sp(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,l){i.get(s)[o]=l}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function ap(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(a,c,d,g,_,m){let f=i[e];return f===void 0?(f={id:a.id,object:a,geometry:c,material:d,groupOrder:g,renderOrder:a.renderOrder,z:_,group:m},i[e]=f):(f.id=a.id,f.object=a,f.geometry=c,f.material=d,f.groupOrder=g,f.renderOrder=a.renderOrder,f.z=_,f.group=m),e++,f}function l(a,c,d,g,_,m){const f=o(a,c,d,g,_,m);d.transmission>0?n.push(f):d.transparent===!0?r.push(f):t.push(f)}function h(a,c,d,g,_,m){const f=o(a,c,d,g,_,m);d.transmission>0?n.unshift(f):d.transparent===!0?r.unshift(f):t.unshift(f)}function u(a,c){t.length>1&&t.sort(a||ap),n.length>1&&n.sort(c||Yo),r.length>1&&r.sort(c||Yo)}function p(){for(let a=e,c=i.length;a<c;a++){const d=i[a];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:h,finish:p,sort:u}}function op(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new jo,i.set(n,[o])):r>=s.length?(o=new jo,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function lp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ee};break;case"SpotLight":t={position:new C,direction:new C,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function cp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let up=0;function dp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hp(i,e){const t=new lp,n=cp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)r.probe.push(new C);const s=new C,o=new Ye,l=new Ye;function h(p,a){let c=0,d=0,g=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let _=0,m=0,f=0,x=0,v=0,b=0,w=0,T=0,P=0,D=0;p.sort(dp);const y=a===!0?Math.PI:1;for(let W=0,j=p.length;W<j;W++){const N=p[W],O=N.color,z=N.intensity,J=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)c+=O.r*z*y,d+=O.g*z*y,g+=O.b*z*y;else if(N.isLightProbe)for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(N.sh.coefficients[Y],z);else if(N.isDirectionalLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*y),N.castShadow){const K=N.shadow,Z=n.get(N);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.directionalShadow[_]=Z,r.directionalShadowMap[_]=q,r.directionalShadowMatrix[_]=N.shadow.matrix,b++}r.directional[_]=Y,_++}else if(N.isSpotLight){const Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(O).multiplyScalar(z*y),Y.distance=J,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,r.spot[f]=Y;const K=N.shadow;if(N.map&&(r.spotLightMap[P]=N.map,P++,K.updateMatrices(N),N.castShadow&&D++),r.spotLightMatrix[f]=K.matrix,N.castShadow){const Z=n.get(N);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.spotShadow[f]=Z,r.spotShadowMap[f]=q,T++}f++}else if(N.isRectAreaLight){const Y=t.get(N);Y.color.copy(O).multiplyScalar(z),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),r.rectArea[x]=Y,x++}else if(N.isPointLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*y),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const K=N.shadow,Z=n.get(N);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=q,r.pointShadowMatrix[m]=N.shadow.matrix,w++}r.point[m]=Y,m++}else if(N.isHemisphereLight){const Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(z*y),Y.groundColor.copy(N.groundColor).multiplyScalar(z*y),r.hemi[v]=Y,v++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=c,r.ambient[1]=d,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==_||A.pointLength!==m||A.spotLength!==f||A.rectAreaLength!==x||A.hemiLength!==v||A.numDirectionalShadows!==b||A.numPointShadows!==w||A.numSpotShadows!==T||A.numSpotMaps!==P)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=x,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+P-D,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=D,A.directionalLength=_,A.pointLength=m,A.spotLength=f,A.rectAreaLength=x,A.hemiLength=v,A.numDirectionalShadows=b,A.numPointShadows=w,A.numSpotShadows=T,A.numSpotMaps=P,r.version=up++)}function u(p,a){let c=0,d=0,g=0,_=0,m=0;const f=a.matrixWorldInverse;for(let x=0,v=p.length;x<v;x++){const b=p[x];if(b.isDirectionalLight){const w=r.directional[c];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),c++}else if(b.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),g++}else if(b.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(f),l.identity(),o.copy(b.matrixWorld),o.premultiply(f),l.extractRotation(o),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),_++}else if(b.isPointLight){const w=r.point[d];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(f),d++}else if(b.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:h,setupView:u,state:r}}function Ko(i,e){const t=new hp(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(a){n.push(a)}function l(a){r.push(a)}function h(a){t.setup(n,a)}function u(a){t.setupView(n,a)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:h,setupLightsView:u,pushLight:o,pushShadow:l}}function fp(i,e){let t=new WeakMap;function n(s,o=0){const l=t.get(s);let h;return l===void 0?(h=new Ko(i,e),t.set(s,[h])):o>=l.length?(h=new Ko(i,e),l.push(h)):h=l[o],h}function r(){t=new WeakMap}return{get:n,dispose:r}}class pp extends $t{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mp extends $t{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_p=`uniform sampler2D shadow_pass;
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
}`;function vp(i,e,t){let n=new vs;const r=new ze,s=new ze,o=new st,l=new pp({depthPacking:Yc}),h=new mp,u={},p=t.maxTextureSize,a={[hn]:Et,[Et]:hn,[Xt]:Xt},c=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:gp,fragmentShader:_p}),d=c.clone();d.defines.HORIZONTAL_PASS=1;const g=new gt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(g,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=la;let f=this.type;this.render=function(w,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const D=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),W=i.state;W.setBlending(fn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const j=f!==en&&this.type===en,N=f===en&&this.type!==en;for(let O=0,z=w.length;O<z;O++){const J=w[O],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const Y=q.getFrameExtents();if(r.multiply(Y),s.copy(q.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/Y.x),r.x=s.x*Y.x,q.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/Y.y),r.y=s.y*Y.y,q.mapSize.y=s.y)),q.map===null||j===!0||N===!0){const Z=this.type!==en?{minFilter:yt,magFilter:yt}:{};q.map!==null&&q.map.dispose(),q.map=new Rn(r.x,r.y,Z),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const K=q.getViewportCount();for(let Z=0;Z<K;Z++){const fe=q.getViewport(Z);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),W.viewport(o),q.updateMatrices(J,Z),n=q.getFrustum(),b(T,P,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===en&&x(q,P),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(D,y,A)};function x(w,T){const P=e.update(_);c.defines.VSM_SAMPLES!==w.blurSamples&&(c.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Rn(r.x,r.y)),c.uniforms.shadow_pass.value=w.map.texture,c.uniforms.resolution.value=w.mapSize,c.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,P,c,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,P,d,_,null)}function v(w,T,P,D){let y=null;const A=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)y=A;else if(y=P.isPointLight===!0?h:l,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=y.uuid,j=T.uuid;let N=u[W];N===void 0&&(N={},u[W]=N);let O=N[j];O===void 0&&(O=y.clone(),N[j]=O),y=O}if(y.visible=T.visible,y.wireframe=T.wireframe,D===en?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:a[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=i.properties.get(y);W.light=P}return y}function b(w,T,P,D,y){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===en)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const j=e.update(w),N=w.material;if(Array.isArray(N)){const O=j.groups;for(let z=0,J=O.length;z<J;z++){const q=O[z],Y=N[q.materialIndex];if(Y&&Y.visible){const K=v(w,Y,D,y);i.renderBufferDirect(P,null,j,K,w,q)}}}else if(N.visible){const O=v(w,N,D,y);i.renderBufferDirect(P,null,j,O,w,null)}}const W=w.children;for(let j=0,N=W.length;j<N;j++)b(W[j],T,P,D,y)}}function xp(i,e,t){const n=t.isWebGL2;function r(){let R=!1;const se=new st;let B=null;const ie=new st(0,0,0,0);return{setMask:function(le){B!==le&&!R&&(i.colorMask(le,le,le,le),B=le)},setLocked:function(le){R=le},setClear:function(le,He,Ke,tt,kn){kn===!0&&(le*=tt,He*=tt,Ke*=tt),se.set(le,He,Ke,tt),ie.equals(se)===!1&&(i.clearColor(le,He,Ke,tt),ie.copy(se))},reset:function(){R=!1,B=null,ie.set(-1,0,0,0)}}}function s(){let R=!1,se=null,B=null,ie=null;return{setTest:function(le){le?ye(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(le){se!==le&&!R&&(i.depthMask(le),se=le)},setFunc:function(le){if(B!==le){switch(le){case bc:i.depthFunc(i.NEVER);break;case Ec:i.depthFunc(i.ALWAYS);break;case wc:i.depthFunc(i.LESS);break;case Ur:i.depthFunc(i.LEQUAL);break;case Ac:i.depthFunc(i.EQUAL);break;case Tc:i.depthFunc(i.GEQUAL);break;case Rc:i.depthFunc(i.GREATER);break;case Cc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}B=le}},setLocked:function(le){R=le},setClear:function(le){ie!==le&&(i.clearDepth(le),ie=le)},reset:function(){R=!1,se=null,B=null,ie=null}}}function o(){let R=!1,se=null,B=null,ie=null,le=null,He=null,Ke=null,tt=null,kn=null;return{setTest:function(Je){R||(Je?ye(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(Je){se!==Je&&!R&&(i.stencilMask(Je),se=Je)},setFunc:function(Je,Qt,Mt){(B!==Je||ie!==Qt||le!==Mt)&&(i.stencilFunc(Je,Qt,Mt),B=Je,ie=Qt,le=Mt)},setOp:function(Je,Qt,Mt){(He!==Je||Ke!==Qt||tt!==Mt)&&(i.stencilOp(Je,Qt,Mt),He=Je,Ke=Qt,tt=Mt)},setLocked:function(Je){R=Je},setClear:function(Je){kn!==Je&&(i.clearStencil(Je),kn=Je)},reset:function(){R=!1,se=null,B=null,ie=null,le=null,He=null,Ke=null,tt=null,kn=null}}}const l=new r,h=new s,u=new o,p=new WeakMap,a=new WeakMap;let c={},d={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,b=null,w=null,T=null,P=null,D=null,y=!1,A=null,W=null,j=null,N=null,O=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,q=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=q>=2);let K=null,Z={};const fe=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),Q=new st().fromArray(fe),ee=new st().fromArray(k);function ue(R,se,B,ie){const le=new Uint8Array(4),He=i.createTexture();i.bindTexture(R,He),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<B;Ke++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(se+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return He}const he={};he[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(he[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),h.setClear(1),u.setClear(0),ye(i.DEPTH_TEST),h.setFunc(Ur),Ae(!1),Xe(oa),ye(i.CULL_FACE),Me(fn);function ye(R){c[R]!==!0&&(i.enable(R),c[R]=!0)}function Ie(R){c[R]!==!1&&(i.disable(R),c[R]=!1)}function we(R,se){return d[R]!==se?(i.bindFramebuffer(R,se),d[R]=se,n&&(R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=se),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function ct(R,se){let B=_,ie=!1;if(R)if(B=g.get(se),B===void 0&&(B=[],g.set(se,B)),R.isWebGLMultipleRenderTargets){const le=R.texture;if(B.length!==le.length||B[0]!==i.COLOR_ATTACHMENT0){for(let He=0,Ke=le.length;He<Ke;He++)B[He]=i.COLOR_ATTACHMENT0+He;B.length=le.length,ie=!0}}else B[0]!==i.COLOR_ATTACHMENT0&&(B[0]=i.COLOR_ATTACHMENT0,ie=!0);else B[0]!==i.BACK&&(B[0]=i.BACK,ie=!0);ie&&(t.isWebGL2?i.drawBuffers(B):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}function ke(R){return m!==R?(i.useProgram(R),m=R,!0):!1}const I={[Wn]:i.FUNC_ADD,[hc]:i.FUNC_SUBTRACT,[fc]:i.FUNC_REVERSE_SUBTRACT};if(n)I[ha]=i.MIN,I[fa]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(I[ha]=R.MIN_EXT,I[fa]=R.MAX_EXT)}const ht={[pc]:i.ZERO,[mc]:i.ONE,[gc]:i.SRC_COLOR,[pa]:i.SRC_ALPHA,[Mc]:i.SRC_ALPHA_SATURATE,[yc]:i.DST_COLOR,[vc]:i.DST_ALPHA,[_c]:i.ONE_MINUS_SRC_COLOR,[ma]:i.ONE_MINUS_SRC_ALPHA,[Sc]:i.ONE_MINUS_DST_COLOR,[xc]:i.ONE_MINUS_DST_ALPHA};function Me(R,se,B,ie,le,He,Ke,tt){if(R===fn){f===!0&&(Ie(i.BLEND),f=!1);return}if(f===!1&&(ye(i.BLEND),f=!0),R!==dc){if(R!==x||tt!==y){if((v!==Wn||T!==Wn)&&(i.blendEquation(i.FUNC_ADD),v=Wn,T=Wn),tt)switch(R){case Vn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ca:i.blendFunc(i.ONE,i.ONE);break;case ua:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case da:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Vn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ca:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ua:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case da:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,w=null,P=null,D=null,x=R,y=tt}return}le=le||se,He=He||B,Ke=Ke||ie,(se!==v||le!==T)&&(i.blendEquationSeparate(I[se],I[le]),v=se,T=le),(B!==b||ie!==w||He!==P||Ke!==D)&&(i.blendFuncSeparate(ht[B],ht[ie],ht[He],ht[Ke]),b=B,w=ie,P=He,D=Ke),x=R,y=!1}function Fe(R,se){R.side===Xt?Ie(i.CULL_FACE):ye(i.CULL_FACE);let B=R.side===Et;se&&(B=!B),Ae(B),R.blending===Vn&&R.transparent===!1?Me(fn):Me(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),h.setFunc(R.depthFunc),h.setTest(R.depthTest),h.setMask(R.depthWrite),l.setMask(R.colorWrite);const ie=R.stencilWrite;u.setTest(ie),ie&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Pe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(R){A!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),A=R)}function Xe(R){R!==lc?(ye(i.CULL_FACE),R!==W&&(R===oa?i.cullFace(i.BACK):R===cc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),W=R}function Be(R){R!==j&&(J&&i.lineWidth(R),j=R)}function Pe(R,se,B){R?(ye(i.POLYGON_OFFSET_FILL),(N!==se||O!==B)&&(i.polygonOffset(se,B),N=se,O=B)):Ie(i.POLYGON_OFFSET_FILL)}function Ve(R){R?ye(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function ft(R){R===void 0&&(R=i.TEXTURE0+z-1),K!==R&&(i.activeTexture(R),K=R)}function xt(R,se,B){B===void 0&&(K===null?B=i.TEXTURE0+z-1:B=K);let ie=Z[B];ie===void 0&&(ie={type:void 0,texture:void 0},Z[B]=ie),(ie.type!==R||ie.texture!==se)&&(K!==B&&(i.activeTexture(B),K=B),i.bindTexture(R,se||he[R]),ie.type=R,ie.texture=se)}function E(){const R=Z[K];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function S(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function H(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function X(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(R){Q.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Q.copy(R))}function pe(R){ee.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ee.copy(R))}function me(R,se){let B=a.get(se);B===void 0&&(B=new WeakMap,a.set(se,B));let ie=B.get(R);ie===void 0&&(ie=i.getUniformBlockIndex(se,R.name),B.set(R,ie))}function Ne(R,se){const ie=a.get(se).get(R);p.get(se)!==ie&&(i.uniformBlockBinding(se,ie,R.__bindingPointIndex),p.set(se,ie))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},K=null,Z={},d={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,b=null,w=null,T=null,P=null,D=null,y=!1,A=null,W=null,j=null,N=null,O=null,Q.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),l.reset(),h.reset(),u.reset()}return{buffers:{color:l,depth:h,stencil:u},enable:ye,disable:Ie,bindFramebuffer:we,drawBuffers:ct,useProgram:ke,setBlending:Me,setMaterial:Fe,setFlipSided:Ae,setCullFace:Xe,setLineWidth:Be,setPolygonOffset:Pe,setScissorTest:Ve,activeTexture:ft,bindTexture:xt,unbindTexture:E,compressedTexImage2D:S,compressedTexImage3D:H,texImage2D:_e,texImage3D:ve,updateUBOMapping:me,uniformBlockBinding:Ne,texStorage2D:oe,texStorage3D:X,texSubImage2D:te,texSubImage3D:ne,compressedTexSubImage2D:ae,compressedTexSubImage3D:ge,scissor:Se,viewport:pe,reset:We}}function yp(i,e,t,n,r,s,o){const l=r.isWebGL2,h=r.maxTextures,u=r.maxCubemapSize,p=r.maxTextureSize,a=r.maxSamples,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,S){return f?new OffscreenCanvas(E,S):Hi("canvas")}function v(E,S,H,te){let ne=1;if((E.width>te||E.height>te)&&(ne=te/Math.max(E.width,E.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ae=S?Zr:Math.floor,ge=ae(ne*E.width),oe=ae(ne*E.height);_===void 0&&(_=x(ge,oe));const X=H?x(ge,oe):_;return X.width=ge,X.height=oe,X.getContext("2d").drawImage(E,0,0,ge,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ge+"x"+oe+")."),X}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function b(E){return Ja(E.width)&&Ja(E.height)}function w(E){return l?!1:E.wrapS!==It||E.wrapT!==It||E.minFilter!==yt&&E.minFilter!==Pt}function T(E,S){return E.generateMipmaps&&S&&E.minFilter!==yt&&E.minFilter!==Pt}function P(E){i.generateMipmap(E)}function D(E,S,H,te,ne=!1){if(l===!1)return S;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae=S;return S===i.RED&&(H===i.FLOAT&&(ae=i.R32F),H===i.HALF_FLOAT&&(ae=i.R16F),H===i.UNSIGNED_BYTE&&(ae=i.R8)),S===i.RG&&(H===i.FLOAT&&(ae=i.RG32F),H===i.HALF_FLOAT&&(ae=i.RG16F),H===i.UNSIGNED_BYTE&&(ae=i.RG8)),S===i.RGBA&&(H===i.FLOAT&&(ae=i.RGBA32F),H===i.HALF_FLOAT&&(ae=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ae=te===Ce&&ne===!1?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)),(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(E,S,H){return T(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==yt&&E.minFilter!==Pt?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function A(E){return E===yt||E===_a||E===zr?i.NEAREST:i.LINEAR}function W(E){const S=E.target;S.removeEventListener("dispose",W),N(S),S.isVideoTexture&&g.delete(S)}function j(E){const S=E.target;S.removeEventListener("dispose",j),z(S)}function N(E){const S=n.get(E);if(S.__webglInit===void 0)return;const H=E.source,te=m.get(H);if(te){const ne=te[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&O(E),Object.keys(te).length===0&&m.delete(H)}n.remove(E)}function O(E){const S=n.get(E);i.deleteTexture(S.__webglTexture);const H=E.source,te=m.get(H);delete te[S.__cacheKey],o.memory.textures--}function z(E){const S=E.texture,H=n.get(E),te=n.get(S);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)i.deleteFramebuffer(H.__webglFramebuffer[ne]),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[ne]);else{if(i.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ne=0;ne<H.__webglColorRenderbuffer.length;ne++)H.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ne=0,ae=S.length;ne<ae;ne++){const ge=n.get(S[ne]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(S[ne])}n.remove(S),n.remove(E)}let J=0;function q(){J=0}function Y(){const E=J;return E>=h&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+h),J+=1,E}function K(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function Z(E,S){const H=n.get(E);if(E.isVideoTexture&&ft(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(H,E,S);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function fe(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){we(H,E,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function k(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){we(H,E,S);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function Q(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){ct(H,E,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}const ee={[Or]:i.REPEAT,[It]:i.CLAMP_TO_EDGE,[Br]:i.MIRRORED_REPEAT},ue={[yt]:i.NEAREST,[_a]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[Oc]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},he={[Jc]:i.NEVER,[ru]:i.ALWAYS,[Zc]:i.LESS,[eu]:i.LEQUAL,[Qc]:i.EQUAL,[iu]:i.GEQUAL,[tu]:i.GREATER,[nu]:i.NOTEQUAL};function ye(E,S,H){if(H?(i.texParameteri(E,i.TEXTURE_WRAP_S,ee[S.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ee[S.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ee[S.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ue[S.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ue[S.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==It||S.wrapT!==It)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,A(S.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==yt&&S.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,he[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===yt||S.minFilter!==zr&&S.minFilter!==yi||S.type===gn&&e.has("OES_texture_float_linear")===!1||l===!1&&S.type===Si&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Ie(E,S){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",W));const te=S.source;let ne=m.get(te);ne===void 0&&(ne={},m.set(te,ne));const ae=K(S);if(ae!==E.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[ae].usedTimes++;const ge=ne[E.__cacheKey];ge!==void 0&&(ne[E.__cacheKey].usedTimes--,ge.usedTimes===0&&O(S)),E.__cacheKey=ae,E.__webglTexture=ne[ae].texture}return H}function we(E,S,H){let te=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=i.TEXTURE_3D);const ne=Ie(E,S),ae=S.source;t.bindTexture(te,E.__webglTexture,i.TEXTURE0+H);const ge=n.get(ae);if(ae.version!==ge.__version||ne===!0){t.activeTexture(i.TEXTURE0+H),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const oe=w(S)&&b(S.image)===!1;let X=v(S.image,oe,!1,p);X=xt(S,X);const _e=b(X)||l,ve=s.convert(S.format,S.colorSpace);let Se=s.convert(S.type),pe=D(S.internalFormat,ve,Se,S.colorSpace);ye(te,S,_e);let me;const Ne=S.mipmaps,We=l&&S.isVideoTexture!==!0,R=ge.__version===void 0||ne===!0,se=y(S,X,_e);if(S.isDepthTexture)pe=i.DEPTH_COMPONENT,l?S.type===gn?pe=i.DEPTH_COMPONENT32F:S.type===mn?pe=i.DEPTH_COMPONENT24:S.type===En?pe=i.DEPTH24_STENCIL8:pe=i.DEPTH_COMPONENT16:S.type===gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===wn&&pe===i.DEPTH_COMPONENT&&S.type!==kr&&S.type!==mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=mn,Se=s.convert(S.type)),S.format===$n&&pe===i.DEPTH_COMPONENT&&(pe=i.DEPTH_STENCIL,S.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=En,Se=s.convert(S.type))),R&&(We?t.texStorage2D(i.TEXTURE_2D,1,pe,X.width,X.height):t.texImage2D(i.TEXTURE_2D,0,pe,X.width,X.height,0,ve,Se,null));else if(S.isDataTexture)if(Ne.length>0&&_e){We&&R&&t.texStorage2D(i.TEXTURE_2D,se,pe,Ne[0].width,Ne[0].height);for(let B=0,ie=Ne.length;B<ie;B++)me=Ne[B],We?t.texSubImage2D(i.TEXTURE_2D,B,0,0,me.width,me.height,ve,Se,me.data):t.texImage2D(i.TEXTURE_2D,B,pe,me.width,me.height,0,ve,Se,me.data);S.generateMipmaps=!1}else We?(R&&t.texStorage2D(i.TEXTURE_2D,se,pe,X.width,X.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,X.width,X.height,ve,Se,X.data)):t.texImage2D(i.TEXTURE_2D,0,pe,X.width,X.height,0,ve,Se,X.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&R&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,pe,Ne[0].width,Ne[0].height,X.depth);for(let B=0,ie=Ne.length;B<ie;B++)me=Ne[B],S.format!==Ft?ve!==null?We?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,me.width,me.height,X.depth,ve,me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,pe,me.width,me.height,X.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,me.width,me.height,X.depth,ve,Se,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,B,pe,me.width,me.height,X.depth,0,ve,Se,me.data)}else{We&&R&&t.texStorage2D(i.TEXTURE_2D,se,pe,Ne[0].width,Ne[0].height);for(let B=0,ie=Ne.length;B<ie;B++)me=Ne[B],S.format!==Ft?ve!==null?We?t.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,me.width,me.height,ve,me.data):t.compressedTexImage2D(i.TEXTURE_2D,B,pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(i.TEXTURE_2D,B,0,0,me.width,me.height,ve,Se,me.data):t.texImage2D(i.TEXTURE_2D,B,pe,me.width,me.height,0,ve,Se,me.data)}else if(S.isDataArrayTexture)We?(R&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,pe,X.width,X.height,X.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,ve,Se,X.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,X.width,X.height,X.depth,0,ve,Se,X.data);else if(S.isData3DTexture)We?(R&&t.texStorage3D(i.TEXTURE_3D,se,pe,X.width,X.height,X.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,ve,Se,X.data)):t.texImage3D(i.TEXTURE_3D,0,pe,X.width,X.height,X.depth,0,ve,Se,X.data);else if(S.isFramebufferTexture){if(R)if(We)t.texStorage2D(i.TEXTURE_2D,se,pe,X.width,X.height);else{let B=X.width,ie=X.height;for(let le=0;le<se;le++)t.texImage2D(i.TEXTURE_2D,le,pe,B,ie,0,ve,Se,null),B>>=1,ie>>=1}}else if(Ne.length>0&&_e){We&&R&&t.texStorage2D(i.TEXTURE_2D,se,pe,Ne[0].width,Ne[0].height);for(let B=0,ie=Ne.length;B<ie;B++)me=Ne[B],We?t.texSubImage2D(i.TEXTURE_2D,B,0,0,ve,Se,me):t.texImage2D(i.TEXTURE_2D,B,pe,ve,Se,me);S.generateMipmaps=!1}else We?(R&&t.texStorage2D(i.TEXTURE_2D,se,pe,X.width,X.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Se,X)):t.texImage2D(i.TEXTURE_2D,0,pe,ve,Se,X);T(S,_e)&&P(te),ge.__version=ae.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ct(E,S,H){if(S.image.length!==6)return;const te=Ie(E,S),ne=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+H);const ae=n.get(ne);if(ne.version!==ae.__version||te===!0){t.activeTexture(i.TEXTURE0+H),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ge=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,X=[];for(let B=0;B<6;B++)!ge&&!oe?X[B]=v(S.image[B],!1,!0,u):X[B]=oe?S.image[B].image:S.image[B],X[B]=xt(S,X[B]);const _e=X[0],ve=b(_e)||l,Se=s.convert(S.format,S.colorSpace),pe=s.convert(S.type),me=D(S.internalFormat,Se,pe,S.colorSpace),Ne=l&&S.isVideoTexture!==!0,We=ae.__version===void 0||te===!0;let R=y(S,_e,ve);ye(i.TEXTURE_CUBE_MAP,S,ve);let se;if(ge){Ne&&We&&t.texStorage2D(i.TEXTURE_CUBE_MAP,R,me,_e.width,_e.height);for(let B=0;B<6;B++){se=X[B].mipmaps;for(let ie=0;ie<se.length;ie++){const le=se[ie];S.format!==Ft?Se!==null?Ne?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie,0,0,le.width,le.height,Se,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie,me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie,0,0,le.width,le.height,Se,pe,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie,me,le.width,le.height,0,Se,pe,le.data)}}}else{se=S.mipmaps,Ne&&We&&(se.length>0&&R++,t.texStorage2D(i.TEXTURE_CUBE_MAP,R,me,X[0].width,X[0].height));for(let B=0;B<6;B++)if(oe){Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,X[B].width,X[B].height,Se,pe,X[B].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,me,X[B].width,X[B].height,0,Se,pe,X[B].data);for(let ie=0;ie<se.length;ie++){const He=se[ie].image[B].image;Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie+1,0,0,He.width,He.height,Se,pe,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie+1,me,He.width,He.height,0,Se,pe,He.data)}}else{Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Se,pe,X[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,me,Se,pe,X[B]);for(let ie=0;ie<se.length;ie++){const le=se[ie];Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie+1,0,0,Se,pe,le.image[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie+1,me,Se,pe,le.image[B])}}}T(S,ve)&&P(i.TEXTURE_CUBE_MAP),ae.__version=ne.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ke(E,S,H,te,ne){const ae=s.convert(H.format,H.colorSpace),ge=s.convert(H.type),oe=D(H.internalFormat,ae,ge,H.colorSpace);n.get(S).__hasExternalTextures||(ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,oe,S.width,S.height,S.depth,0,ae,ge,null):t.texImage2D(ne,0,oe,S.width,S.height,0,ae,ge,null)),t.bindFramebuffer(i.FRAMEBUFFER,E),Ve(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ne,n.get(H).__webglTexture,0,Pe(S)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ne,n.get(H).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function I(E,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,E),S.depthBuffer&&!S.stencilBuffer){let te=i.DEPTH_COMPONENT16;if(H||Ve(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===gn?te=i.DEPTH_COMPONENT32F:ne.type===mn&&(te=i.DEPTH_COMPONENT24));const ae=Pe(S);Ve(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,te,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,te,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(S.depthBuffer&&S.stencilBuffer){const te=Pe(S);H&&Ve(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,S.width,S.height):Ve(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<te.length;ne++){const ae=te[ne],ge=s.convert(ae.format,ae.colorSpace),oe=s.convert(ae.type),X=D(ae.internalFormat,ge,oe,ae.colorSpace),_e=Pe(S);H&&Ve(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,X,S.width,S.height):Ve(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,X,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,X,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,ne=Pe(S);if(S.depthTexture.format===wn)Ve(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(S.depthTexture.format===$n)Ve(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Me(E){const S=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ht(S.__webglFramebuffer,E)}else if(H){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=i.createRenderbuffer(),I(S.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),I(S.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(E,S,H){const te=n.get(E);S!==void 0&&ke(te.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),H!==void 0&&Me(E)}function Ae(E){const S=E.texture,H=n.get(E),te=n.get(S);E.addEventListener("dispose",j),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=S.version,o.memory.textures++);const ne=E.isWebGLCubeRenderTarget===!0,ae=E.isWebGLMultipleRenderTargets===!0,ge=b(E)||l;if(ne){H.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)H.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(H.__webglFramebuffer=i.createFramebuffer(),ae)if(r.drawBuffers){const oe=E.texture;for(let X=0,_e=oe.length;X<_e;X++){const ve=n.get(oe[X]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&E.samples>0&&Ve(E)===!1){const oe=ae?S:[S];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let X=0;X<oe.length;X++){const _e=oe[X];H.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[X]);const ve=s.convert(_e.format,_e.colorSpace),Se=s.convert(_e.type),pe=D(_e.internalFormat,ve,Se,_e.colorSpace,E.isXRRenderTarget===!0),me=Pe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,pe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,H.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),I(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ye(i.TEXTURE_CUBE_MAP,S,ge);for(let oe=0;oe<6;oe++)ke(H.__webglFramebuffer[oe],E,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe);T(S,ge)&&P(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const oe=E.texture;for(let X=0,_e=oe.length;X<_e;X++){const ve=oe[X],Se=n.get(ve);t.bindTexture(i.TEXTURE_2D,Se.__webglTexture),ye(i.TEXTURE_2D,ve,ge),ke(H.__webglFramebuffer,E,ve,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D),T(ve,ge)&&P(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(l?oe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,te.__webglTexture),ye(oe,S,ge),ke(H.__webglFramebuffer,E,S,i.COLOR_ATTACHMENT0,oe),T(S,ge)&&P(oe),t.unbindTexture()}E.depthBuffer&&Me(E)}function Xe(E){const S=b(E)||l,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,ne=H.length;te<ne;te++){const ae=H[te];if(T(ae,S)){const ge=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,oe=n.get(ae).__webglTexture;t.bindTexture(ge,oe),P(ge),t.unbindTexture()}}}function Be(E){if(l&&E.samples>0&&Ve(E)===!1){const S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,te=E.height;let ne=i.COLOR_BUFFER_BIT;const ae=[],ge=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(E),X=E.isWebGLMultipleRenderTargets===!0;if(X)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){ae.push(i.COLOR_ATTACHMENT0+_e),E.depthBuffer&&ae.push(ge);const ve=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(ve===!1&&(E.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),X&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[_e]),ve===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ge])),X){const Se=n.get(S[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,H,te,0,0,H,te,ne,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,oe.__webglColorRenderbuffer[_e]);const ve=n.get(S[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Pe(E){return Math.min(a,E.samples)}function Ve(E){const S=n.get(E);return l&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ft(E){const S=o.render.frame;g.get(E)!==S&&(g.set(E,S),E.update())}function xt(E,S){const H=E.colorSpace,te=E.format,ne=E.type;return E.isCompressedTexture===!0||E.format===Yr||H!==qt&&H!==Tn&&(H===Ce?l===!1?e.has("EXT_sRGB")===!0&&te===Ft?(E.format=Yr,E.minFilter=Pt,E.generateMipmaps=!1):S=eo.sRGBToLinear(S):(te!==Ft||ne!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=Z,this.setTexture2DArray=fe,this.setTexture3D=k,this.setTextureCube=Q,this.rebindTextures=Fe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Ve}function Sp(i,e,t){const n=t.isWebGL2;function r(s,o=Tn){let l;if(s===pn)return i.UNSIGNED_BYTE;if(s===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(s===ya)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Bc)return i.BYTE;if(s===zc)return i.SHORT;if(s===kr)return i.UNSIGNED_SHORT;if(s===va)return i.INT;if(s===mn)return i.UNSIGNED_INT;if(s===gn)return i.FLOAT;if(s===Si)return n?i.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===kc)return i.ALPHA;if(s===Ft)return i.RGBA;if(s===Gc)return i.LUMINANCE;if(s===Hc)return i.LUMINANCE_ALPHA;if(s===wn)return i.DEPTH_COMPONENT;if(s===$n)return i.DEPTH_STENCIL;if(s===Yr)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===Vc)return i.RED;if(s===Sa)return i.RED_INTEGER;if(s===Wc)return i.RG;if(s===Ma)return i.RG_INTEGER;if(s===ba)return i.RGBA_INTEGER;if(s===Gr||s===Hr||s===Vr||s===Wr)if(o===Ce)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Gr)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Gr)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hr)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vr)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wr)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ea||s===wa||s===Aa||s===Ta)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Ea)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wa)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Aa)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ta)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xc)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ra||s===Ca)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Ra)return o===Ce?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Ca)return o===Ce?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Pa||s===La||s===Da||s===Ua||s===Ia||s===Fa||s===Na||s===Oa||s===Ba||s===za||s===ka||s===Ga||s===Ha||s===Va)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Pa)return o===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===La)return o===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Da)return o===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ua)return o===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ia)return o===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fa)return o===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Na)return o===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Oa)return o===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ba)return o===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===za)return o===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ka)return o===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ga)return o===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ha)return o===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Va)return o===Ce?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xr)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Xr)return o===Ce?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===qc||s===Wa||s===Xa||s===qa)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Xr)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Wa)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xa)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qa)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===En?n?i.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Mp extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kt extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bp={type:"move"};class Es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const l=this._targetRay,h=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(u,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const p=u.joints["index-finger-tip"],a=u.joints["thumb-tip"],c=p.position.distanceTo(a.position),d=.02,g=.005;u.inputState.pinching&&c>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ep extends At{constructor(e,t,n,r,s,o,l,h,u,p){if(p=p!==void 0?p:wn,p!==wn&&p!==$n)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===wn&&(n=mn),n===void 0&&p===$n&&(n=En),super(null,r,s,o,l,h,p,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:yt,this.minFilter=h!==void 0?h:yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wp extends Yn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,l="local-floor",h=1,u=null,p=null,a=null,c=null,d=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const x=[],v=[];let b=null;const w=new Dt;w.layers.enable(1),w.viewport=new st;const T=new Dt;T.layers.enable(2),T.viewport=new st;const P=[w,T],D=new Mp;D.layers.enable(1),D.layers.enable(2);let y=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(k){b=k},this.getController=function(k){let Q=x[k];return Q===void 0&&(Q=new Es,x[k]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(k){let Q=x[k];return Q===void 0&&(Q=new Es,x[k]=Q),Q.getGripSpace()},this.getHand=function(k){let Q=x[k];return Q===void 0&&(Q=new Es,x[k]=Q),Q.getHandSpace()};function W(k){const Q=v.indexOf(k.inputSource);if(Q===-1)return;const ee=x[Q];ee!==void 0&&(ee.update(k.inputSource,k.frame,u||o),ee.dispatchEvent({type:k.type,data:k.inputSource}))}function j(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",N);for(let k=0;k<x.length;k++){const Q=v[k];Q!==null&&(v[k]=null,x[k].disconnect(Q))}y=null,A=null,e.setRenderTarget(m),d=null,c=null,a=null,r=null,f=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){l=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return a},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",j),r.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:d}),f=new Rn(d.framebufferWidth,d.framebufferHeight,{format:Ft,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,ee=null,ue=null;_.depth&&(ue=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=_.stencil?$n:wn,ee=_.stencil?En:mn);const he={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};a=new XRWebGLBinding(r,t),c=a.createProjectionLayer(he),r.updateRenderState({layers:[c]}),f=new Rn(c.textureWidth,c.textureHeight,{format:Ft,type:pn,depthTexture:new Ep(c.textureWidth,c.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ye=e.properties.get(f);ye.__ignoreDepthValues=c.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(h),u=null,o=await r.requestReferenceSpace(l),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(k){for(let Q=0;Q<k.removed.length;Q++){const ee=k.removed[Q],ue=v.indexOf(ee);ue>=0&&(v[ue]=null,x[ue].disconnect(ee))}for(let Q=0;Q<k.added.length;Q++){const ee=k.added[Q];let ue=v.indexOf(ee);if(ue===-1){for(let ye=0;ye<x.length;ye++)if(ye>=v.length){v.push(ee),ue=ye;break}else if(v[ye]===null){v[ye]=ee,ue=ye;break}if(ue===-1)break}const he=x[ue];he&&he.connect(ee)}}const O=new C,z=new C;function J(k,Q,ee){O.setFromMatrixPosition(Q.matrixWorld),z.setFromMatrixPosition(ee.matrixWorld);const ue=O.distanceTo(z),he=Q.projectionMatrix.elements,ye=ee.projectionMatrix.elements,Ie=he[14]/(he[10]-1),we=he[14]/(he[10]+1),ct=(he[9]+1)/he[5],ke=(he[9]-1)/he[5],I=(he[8]-1)/he[0],ht=(ye[8]+1)/ye[0],Me=Ie*I,Fe=Ie*ht,Ae=ue/(-I+ht),Xe=Ae*-I;Q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Xe),k.translateZ(Ae),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Be=Ie+Ae,Pe=we+Ae,Ve=Me-Xe,ft=Fe+(ue-Xe),xt=ct*we/Pe*Be,E=ke*we/Pe*Be;k.projectionMatrix.makePerspective(Ve,ft,xt,E,Be,Pe),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function q(k,Q){Q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCameraXR=function(k){if(r===null)return k;b&&(k=b),D.near=T.near=w.near=k.near,D.far=T.far=w.far=k.far,(y!==D.near||A!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),y=D.near,A=D.far);const Q=k.parent,ee=D.cameras;q(D,Q);for(let ue=0;ue<ee.length;ue++)q(ee[ue],Q);return ee.length===2?J(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),b&&Y(D,Q),D};function Y(k,Q){const ee=b;Q===null?ee.matrix.copy(k.matrixWorld):(ee.matrix.copy(Q.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(k.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0);const ue=ee.children;for(let he=0,ye=ue.length;he<ye;he++)ue[he].updateMatrixWorld(!0);ee.projectionMatrix.copy(k.projectionMatrix),ee.projectionMatrixInverse.copy(k.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Kr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getFoveation=function(){if(!(c===null&&d===null))return h},this.setFoveation=function(k){h=k,c!==null&&(c.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)};let K=null;function Z(k,Q){if(p=Q.getViewerPose(u||o),g=Q,p!==null){const ee=p.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let ue=!1;ee.length!==D.cameras.length&&(D.cameras.length=0,ue=!0);for(let he=0;he<ee.length;he++){const ye=ee[he];let Ie=null;if(d!==null)Ie=d.getViewport(ye);else{const ct=a.getViewSubImage(c,ye);Ie=ct.viewport,he===0&&(e.setRenderTargetTextures(f,ct.colorTexture,c.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(f))}let we=P[he];we===void 0&&(we=new Dt,we.layers.enable(he),we.viewport=new st,P[he]=we),we.matrix.fromArray(ye.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(ye.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),he===0&&(D.matrix.copy(we.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ue===!0&&D.cameras.push(we)}}for(let ee=0;ee<x.length;ee++){const ue=v[ee],he=x[ee];ue!==null&&he!==void 0&&he.update(ue,Q,u||o)}K&&K(k,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const fe=new Eo;fe.setAnimationLoop(Z),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}}function Ap(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,So(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,v,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),a(m,f)):f.isMeshPhongMaterial?(s(m,f),p(m,f)):f.isMeshStandardMaterial?(s(m,f),c(m,f),f.isMeshPhysicalMaterial&&d(m,f,b)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&l(m,f)):f.isPointsMaterial?h(m,f,x,v):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Et&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Et&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function l(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function h(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function p(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function a(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function c(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Et&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Tp(i,e,t,n){let r={},s={},o=[];const l=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(x,v){const b=v.program;n.uniformBlockBinding(x,b)}function u(x,v){let b=r[x.id];b===void 0&&(g(x),b=p(x),r[x.id]=b,x.addEventListener("dispose",m));const w=v.program;n.updateUBOMapping(x,w);const T=e.render.frame;s[x.id]!==T&&(c(x),s[x.id]=T)}function p(x){const v=a();x.__bindingPointIndex=v;const b=i.createBuffer(),w=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function a(){for(let x=0;x<l;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(x){const v=r[x.id],b=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,P=b.length;T<P;T++){const D=b[T];if(d(D,T,w)===!0){const y=D.__offset,A=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let j=0;j<A.length;j++){const N=A[j],O=_(N);typeof N=="number"?(D.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,y+W,D.__data)):N.isMatrix3?(D.__data[0]=N.elements[0],D.__data[1]=N.elements[1],D.__data[2]=N.elements[2],D.__data[3]=N.elements[0],D.__data[4]=N.elements[3],D.__data[5]=N.elements[4],D.__data[6]=N.elements[5],D.__data[7]=N.elements[0],D.__data[8]=N.elements[6],D.__data[9]=N.elements[7],D.__data[10]=N.elements[8],D.__data[11]=N.elements[0]):(N.toArray(D.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,y,D.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,v,b){const w=x.value;if(b[v]===void 0){if(typeof w=="number")b[v]=w;else{const T=Array.isArray(w)?w:[w],P=[];for(let D=0;D<T.length;D++)P.push(T[D].clone());b[v]=P}return!0}else if(typeof w=="number"){if(b[v]!==w)return b[v]=w,!0}else{const T=Array.isArray(b[v])?b[v]:[b[v]],P=Array.isArray(w)?w:[w];for(let D=0;D<T.length;D++){const y=T[D];if(y.equals(P[D])===!1)return y.copy(P[D]),!0}}return!1}function g(x){const v=x.uniforms;let b=0;const w=16;let T=0;for(let P=0,D=v.length;P<D;P++){const y=v[P],A={boundary:0,storage:0},W=Array.isArray(y.value)?y.value:[y.value];for(let j=0,N=W.length;j<N;j++){const O=W[j],z=_(O);A.boundary+=z.boundary,A.storage+=z.storage}if(y.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=b,P>0){T=b%w;const j=w-T;T!==0&&j-A.boundary<0&&(b+=w-T,y.__offset=b)}b+=A.storage}return T=b%w,T>0&&(b+=w-T),x.__size=b,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:h,update:u,dispose:f}}function Rp(){const i=Hi("canvas");return i.style.display="block",i}class Jo{constructor(e={}){const{canvas:t=Rp(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:a=!1}=e;this.isWebGLRenderer=!0;let c;n!==null?c=n.getContextAttributes().alpha:c=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ce,this.useLegacyLights=!0,this.toneMapping=tn,this.toneMappingExposure=1;const v=this;let b=!1,w=0,T=0,P=null,D=-1,y=null;const A=new st,W=new st;let j=null;const N=new Ee(0);let O=0,z=t.width,J=t.height,q=1,Y=null,K=null;const Z=new st(0,0,z,J),fe=new st(0,0,z,J);let k=!1;const Q=new vs;let ee=!1,ue=!1,he=null;const ye=new Ye,Ie=new ze,we=new C,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return P===null?q:1}let I=n;function ht(M,F){for(let G=0;G<M.length;G++){const U=M[G],V=t.getContext(U,F);if(V!==null)return V}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:a};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dr}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",ie,!1),I===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),I=ht(F,M),I===null)throw ht(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Me,Fe,Ae,Xe,Be,Pe,Ve,ft,xt,E,S,H,te,ne,ae,ge,oe,X,_e,ve,Se,pe,me,Ne;function We(){Me=new Bh(I),Fe=new Dh(I,Me,e),Me.init(Fe),pe=new Sp(I,Me,Fe),Ae=new xp(I,Me,Fe),Xe=new Gh(I),Be=new sp,Pe=new yp(I,Me,Ae,Be,Fe,pe,Xe),Ve=new Ih(v),ft=new Oh(v),xt=new Uu(I,Fe),me=new Ph(I,Me,xt,Fe),E=new zh(I,xt,Xe,me),S=new Xh(I,E,xt,Xe),_e=new Wh(I,Fe,Pe),ge=new Uh(Be),H=new rp(v,Ve,ft,Me,Fe,me,ge),te=new Ap(v,Be),ne=new op,ae=new fp(Me,Fe),X=new Ch(v,Ve,ft,Ae,S,c,h),oe=new vp(v,S,Fe),Ne=new Tp(I,Xe,Fe,Ae),ve=new Lh(I,Me,Xe,Fe),Se=new kh(I,Me,Xe,Fe),Xe.programs=H.programs,v.capabilities=Fe,v.extensions=Me,v.properties=Be,v.renderLists=ne,v.shadowMap=oe,v.state=Ae,v.info=Xe}We();const R=new wp(v,I);this.xr=R,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Me.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Me.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(z,J,!1))},this.getSize=function(M){return M.set(z,J)},this.setSize=function(M,F,G=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=M,J=F,t.width=Math.floor(M*q),t.height=Math.floor(F*q),G===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(z*q,J*q).floor()},this.setDrawingBufferSize=function(M,F,G){z=M,J=F,q=G,t.width=Math.floor(M*G),t.height=Math.floor(F*G),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(A)},this.getViewport=function(M){return M.copy(Z)},this.setViewport=function(M,F,G,U){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,F,G,U),Ae.viewport(A.copy(Z).multiplyScalar(q).floor())},this.getScissor=function(M){return M.copy(fe)},this.setScissor=function(M,F,G,U){M.isVector4?fe.set(M.x,M.y,M.z,M.w):fe.set(M,F,G,U),Ae.scissor(W.copy(fe).multiplyScalar(q).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(M){Ae.setScissorTest(k=M)},this.setOpaqueSort=function(M){Y=M},this.setTransparentSort=function(M){K=M},this.getClearColor=function(M){return M.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(M=!0,F=!0,G=!0){let U=0;if(M){let V=!1;if(P!==null){const de=P.texture.format;V=de===ba||de===Ma||de===Sa}if(V){const de=P.texture.type,xe=de===pn||de===mn||de===kr||de===En||de===xa||de===ya,be=X.getClearColor(),Te=X.getClearAlpha(),Oe=be.r,Re=be.g,Le=be.b,qe=Be.get(P).__webglFramebuffer;xe?(d[0]=Oe,d[1]=Re,d[2]=Le,d[3]=Te,I.clearBufferuiv(I.COLOR,qe,d)):(g[0]=Oe,g[1]=Re,g[2]=Le,g[3]=Te,I.clearBufferiv(I.COLOR,qe,g))}else U|=I.COLOR_BUFFER_BIT}F&&(U|=I.DEPTH_BUFFER_BIT),G&&(U|=I.STENCIL_BUFFER_BIT),I.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),ne.dispose(),ae.dispose(),Be.dispose(),Ve.dispose(),ft.dispose(),S.dispose(),me.dispose(),Ne.dispose(),H.dispose(),R.dispose(),R.removeEventListener("sessionstart",Je),R.removeEventListener("sessionend",Qt),he&&(he.dispose(),he=null),Mt.stop()};function se(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=Xe.autoReset,F=oe.enabled,G=oe.autoUpdate,U=oe.needsUpdate,V=oe.type;We(),Xe.autoReset=M,oe.enabled=F,oe.autoUpdate=G,oe.needsUpdate=U,oe.type=V}function ie(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function le(M){const F=M.target;F.removeEventListener("dispose",le),He(F)}function He(M){Ke(M),Be.remove(M)}function Ke(M){const F=Be.get(M).programs;F!==void 0&&(F.forEach(function(G){H.releaseProgram(G)}),M.isShaderMaterial&&H.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,G,U,V,de){F===null&&(F=ct);const xe=V.isMesh&&V.matrixWorld.determinant()<0,be=Kg(M,F,G,U,V);Ae.setMaterial(U,xe);let Te=G.index,Oe=1;U.wireframe===!0&&(Te=E.getWireframeAttribute(G),Oe=2);const Re=G.drawRange,Le=G.attributes.position;let qe=Re.start*Oe,Ze=(Re.start+Re.count)*Oe;de!==null&&(qe=Math.max(qe,de.start*Oe),Ze=Math.min(Ze,(de.start+de.count)*Oe)),Te!==null?(qe=Math.max(qe,0),Ze=Math.min(Ze,Te.count)):Le!=null&&(qe=Math.max(qe,0),Ze=Math.min(Ze,Le.count));const Wt=Ze-qe;if(Wt<0||Wt===1/0)return;me.setup(V,U,be,G,Te);let dn,nt=ve;if(Te!==null&&(dn=xt.get(Te),nt=Se,nt.setIndex(dn)),V.isMesh)U.wireframe===!0?(Ae.setLineWidth(U.wireframeLinewidth*ke()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(V.isLine){let Ge=U.linewidth;Ge===void 0&&(Ge=1),Ae.setLineWidth(Ge*ke()),V.isLineSegments?nt.setMode(I.LINES):V.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else V.isPoints?nt.setMode(I.POINTS):V.isSprite&&nt.setMode(I.TRIANGLES);if(V.isInstancedMesh)nt.renderInstances(qe,Wt,V.count);else if(G.isInstancedBufferGeometry){const Ge=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,na=Math.min(G.instanceCount,Ge);nt.renderInstances(qe,Wt,na)}else nt.render(qe,Wt)},this.compile=function(M,F){function G(U,V,de){U.transparent===!0&&U.side===Xt&&U.forceSinglePass===!1?(U.side=Et,U.needsUpdate=!0,Lr(U,V,de),U.side=hn,U.needsUpdate=!0,Lr(U,V,de),U.side=Xt):Lr(U,V,de)}m=ae.get(M),m.init(),x.push(m),M.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights(v.useLegacyLights),M.traverse(function(U){const V=U.material;if(V)if(Array.isArray(V))for(let de=0;de<V.length;de++){const xe=V[de];G(xe,M,U)}else G(V,M,U)}),x.pop(),m=null};let tt=null;function kn(M){tt&&tt(M)}function Je(){Mt.stop()}function Qt(){Mt.start()}const Mt=new Eo;Mt.setAnimationLoop(kn),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(M){tt=M,R.setAnimationLoop(M),M===null?Mt.stop():Mt.start()},R.addEventListener("sessionstart",Je),R.addEventListener("sessionend",Qt),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(F=R.updateCameraXR(F)),M.isScene===!0&&M.onBeforeRender(v,M,F,P),m=ae.get(M,x.length),m.init(),x.push(m),ye.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(ye),ue=this.localClippingEnabled,ee=ge.init(this.clippingPlanes,ue),_=ne.get(M,f.length),_.init(),f.push(_),nc(M,F,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,K),ee===!0&&ge.beginShadows();const G=m.state.shadowsArray;if(oe.render(G,M,F),ee===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,X.render(_,M),m.setupLights(v.useLegacyLights),F.isArrayCamera){const U=F.cameras;for(let V=0,de=U.length;V<de;V++){const xe=U[V];ic(_,M,xe,xe.viewport)}}else ic(_,M,F);P!==null&&(Pe.updateMultisampleRenderTarget(P),Pe.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(v,M,F),me.resetDefaultState(),D=-1,y=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function nc(M,F,G,U){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Q.intersectsSprite(M)){U&&we.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ye);const xe=S.update(M),be=M.material;be.visible&&_.push(M,xe,be,G,we.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Q.intersectsObject(M))){M.isSkinnedMesh&&M.skeleton.frame!==Xe.render.frame&&(M.skeleton.update(),M.skeleton.frame=Xe.render.frame);const xe=S.update(M),be=M.material;if(U&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),we.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),we.copy(xe.boundingSphere.center)),we.applyMatrix4(M.matrixWorld).applyMatrix4(ye)),Array.isArray(be)){const Te=xe.groups;for(let Oe=0,Re=Te.length;Oe<Re;Oe++){const Le=Te[Oe],qe=be[Le.materialIndex];qe&&qe.visible&&_.push(M,xe,qe,G,we.z,Le)}}else be.visible&&_.push(M,xe,be,G,we.z,null)}}const de=M.children;for(let xe=0,be=de.length;xe<be;xe++)nc(de[xe],F,G,U)}function ic(M,F,G,U){const V=M.opaque,de=M.transmissive,xe=M.transparent;m.setupLightsView(G),ee===!0&&ge.setGlobalState(v.clippingPlanes,G),de.length>0&&jg(V,de,F,G),U&&Ae.viewport(A.copy(U)),V.length>0&&Pr(V,F,G),de.length>0&&Pr(de,F,G),xe.length>0&&Pr(xe,F,G),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function jg(M,F,G,U){const V=Fe.isWebGL2;he===null&&(he=new Rn(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Si:pn,minFilter:yi,samples:V&&l===!0?4:0})),v.getDrawingBufferSize(Ie),V?he.setSize(Ie.x,Ie.y):he.setSize(Zr(Ie.x),Zr(Ie.y));const de=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(N),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();const xe=v.toneMapping;v.toneMapping=tn,Pr(M,G,U),Pe.updateMultisampleRenderTarget(he),Pe.updateRenderTargetMipmap(he);let be=!1;for(let Te=0,Oe=F.length;Te<Oe;Te++){const Re=F[Te],Le=Re.object,qe=Re.geometry,Ze=Re.material,Wt=Re.group;if(Ze.side===Xt&&Le.layers.test(U.layers)){const dn=Ze.side;Ze.side=Et,Ze.needsUpdate=!0,rc(Le,G,U,qe,Ze,Wt),Ze.side=dn,Ze.needsUpdate=!0,be=!0}}be===!0&&(Pe.updateMultisampleRenderTarget(he),Pe.updateRenderTargetMipmap(he)),v.setRenderTarget(de),v.setClearColor(N,O),v.toneMapping=xe}function Pr(M,F,G){const U=F.isScene===!0?F.overrideMaterial:null;for(let V=0,de=M.length;V<de;V++){const xe=M[V],be=xe.object,Te=xe.geometry,Oe=U===null?xe.material:U,Re=xe.group;be.layers.test(G.layers)&&rc(be,F,G,Te,Oe,Re)}}function rc(M,F,G,U,V,de){M.onBeforeRender(v,F,G,U,V,de),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(v,F,G,U,M,de),V.transparent===!0&&V.side===Xt&&V.forceSinglePass===!1?(V.side=Et,V.needsUpdate=!0,v.renderBufferDirect(G,F,U,V,M,de),V.side=hn,V.needsUpdate=!0,v.renderBufferDirect(G,F,U,V,M,de),V.side=Xt):v.renderBufferDirect(G,F,U,V,M,de),M.onAfterRender(v,F,G,U,V,de)}function Lr(M,F,G){F.isScene!==!0&&(F=ct);const U=Be.get(M),V=m.state.lights,de=m.state.shadowsArray,xe=V.state.version,be=H.getParameters(M,V.state,de,F,G),Te=H.getProgramCacheKey(be);let Oe=U.programs;U.environment=M.isMeshStandardMaterial?F.environment:null,U.fog=F.fog,U.envMap=(M.isMeshStandardMaterial?ft:Ve).get(M.envMap||U.environment),Oe===void 0&&(M.addEventListener("dispose",le),Oe=new Map,U.programs=Oe);let Re=Oe.get(Te);if(Re!==void 0){if(U.currentProgram===Re&&U.lightsStateVersion===xe)return sc(M,be),Re}else be.uniforms=H.getUniforms(M),M.onBuild(G,be,v),M.onBeforeCompile(be,v),Re=H.acquireProgram(be,Te),Oe.set(Te,Re),U.uniforms=be.uniforms;const Le=U.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=ge.uniform),sc(M,be),U.needsLights=Zg(M),U.lightsStateVersion=xe,U.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.directionalShadowMap.value=V.state.directionalShadowMap,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotShadowMap.value=V.state.spotShadowMap,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMap.value=V.state.pointShadowMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix);const qe=Re.getUniforms(),Ze=pr.seqWithValue(qe.seq,Le);return U.currentProgram=Re,U.uniformsList=Ze,Re}function sc(M,F){const G=Be.get(M);G.outputColorSpace=F.outputColorSpace,G.instancing=F.instancing,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Kg(M,F,G,U,V){F.isScene!==!0&&(F=ct),Pe.resetTextureUnits();const de=F.fog,xe=U.isMeshStandardMaterial?F.environment:null,be=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:qt,Te=(U.isMeshStandardMaterial?ft:Ve).get(U.envMap||xe),Oe=U.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Re=!!G.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Le=!!G.morphAttributes.position,qe=!!G.morphAttributes.normal,Ze=!!G.morphAttributes.color,Wt=U.toneMapped?v.toneMapping:tn,dn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,nt=dn!==void 0?dn.length:0,Ge=Be.get(U),na=m.state.lights;if(ee===!0&&(ue===!0||M!==y)){const Ct=M===y&&U.id===D;ge.setState(U,M,Ct)}let ut=!1;U.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==na.state.version||Ge.outputColorSpace!==be||V.isInstancedMesh&&Ge.instancing===!1||!V.isInstancedMesh&&Ge.instancing===!0||V.isSkinnedMesh&&Ge.skinning===!1||!V.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Te||U.fog===!0&&Ge.fog!==de||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ge.numPlanes||Ge.numIntersection!==ge.numIntersection)||Ge.vertexAlphas!==Oe||Ge.vertexTangents!==Re||Ge.morphTargets!==Le||Ge.morphNormals!==qe||Ge.morphColors!==Ze||Ge.toneMapping!==Wt||Fe.isWebGL2===!0&&Ge.morphTargetsCount!==nt)&&(ut=!0):(ut=!0,Ge.__version=U.version);let Gn=Ge.currentProgram;ut===!0&&(Gn=Lr(U,F,V));let ac=!1,Bi=!1,ia=!1;const bt=Gn.getUniforms(),Hn=Ge.uniforms;if(Ae.useProgram(Gn.program)&&(ac=!0,Bi=!0,ia=!0),U.id!==D&&(D=U.id,Bi=!0),ac||y!==M){if(bt.setValue(I,"projectionMatrix",M.projectionMatrix),Fe.logarithmicDepthBuffer&&bt.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),y!==M&&(y=M,Bi=!0,ia=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Ct=bt.map.cameraPosition;Ct!==void 0&&Ct.setValue(I,we.setFromMatrixPosition(M.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&bt.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||V.isSkinnedMesh)&&bt.setValue(I,"viewMatrix",M.matrixWorldInverse)}if(V.isSkinnedMesh){bt.setOptional(I,V,"bindMatrix"),bt.setOptional(I,V,"bindMatrixInverse");const Ct=V.skeleton;Ct&&(Fe.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),bt.setValue(I,"boneTexture",Ct.boneTexture,Pe),bt.setValue(I,"boneTextureSize",Ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ra=G.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0&&Fe.isWebGL2===!0)&&_e.update(V,G,Gn),(Bi||Ge.receiveShadow!==V.receiveShadow)&&(Ge.receiveShadow=V.receiveShadow,bt.setValue(I,"receiveShadow",V.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Hn.envMap.value=Te,Hn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Bi&&(bt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&Jg(Hn,ia),de&&U.fog===!0&&te.refreshFogUniforms(Hn,de),te.refreshMaterialUniforms(Hn,U,q,J,he),pr.upload(I,Ge.uniformsList,Hn,Pe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(pr.upload(I,Ge.uniformsList,Hn,Pe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&bt.setValue(I,"center",V.center),bt.setValue(I,"modelViewMatrix",V.modelViewMatrix),bt.setValue(I,"normalMatrix",V.normalMatrix),bt.setValue(I,"modelMatrix",V.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Ct=U.uniformsGroups;for(let sa=0,Qg=Ct.length;sa<Qg;sa++)if(Fe.isWebGL2){const oc=Ct[sa];Ne.update(oc,Gn),Ne.bind(oc,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function Jg(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Zg(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,F,G){Be.get(M.texture).__webglTexture=F,Be.get(M.depthTexture).__webglTexture=G;const U=Be.get(M);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=G===void 0,U.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,F){const G=Be.get(M);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,G=0){P=M,w=F,T=G;let U=!0,V=null,de=!1,xe=!1;if(M){const Te=Be.get(M);Te.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(I.FRAMEBUFFER,null),U=!1):Te.__webglFramebuffer===void 0?Pe.setupRenderTarget(M):Te.__hasExternalTextures&&Pe.rebindTextures(M,Be.get(M.texture).__webglTexture,Be.get(M.depthTexture).__webglTexture);const Oe=M.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(xe=!0);const Re=Be.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(V=Re[F],de=!0):Fe.isWebGL2&&M.samples>0&&Pe.useMultisampledRTT(M)===!1?V=Be.get(M).__webglMultisampledFramebuffer:V=Re,A.copy(M.viewport),W.copy(M.scissor),j=M.scissorTest}else A.copy(Z).multiplyScalar(q).floor(),W.copy(fe).multiplyScalar(q).floor(),j=k;if(Ae.bindFramebuffer(I.FRAMEBUFFER,V)&&Fe.drawBuffers&&U&&Ae.drawBuffers(M,V),Ae.viewport(A),Ae.scissor(W),Ae.setScissorTest(j),de){const Te=Be.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,G)}else if(xe){const Te=Be.get(M.texture),Oe=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.__webglTexture,G||0,Oe)}D=-1},this.readRenderTargetPixels=function(M,F,G,U,V,de,xe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Be.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){Ae.bindFramebuffer(I.FRAMEBUFFER,be);try{const Te=M.texture,Oe=Te.format,Re=Te.type;if(Oe!==Ft&&pe.convert(Oe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===Si&&(Me.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Re!==pn&&pe.convert(Re)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===gn&&(Fe.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-U&&G>=0&&G<=M.height-V&&I.readPixels(F,G,U,V,pe.convert(Oe),pe.convert(Re),de)}finally{const Te=P!==null?Be.get(P).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(M,F,G=0){const U=Math.pow(2,-G),V=Math.floor(F.image.width*U),de=Math.floor(F.image.height*U);Pe.setTexture2D(F,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,M.x,M.y,V,de),Ae.unbindTexture()},this.copyTextureToTexture=function(M,F,G,U=0){const V=F.image.width,de=F.image.height,xe=pe.convert(G.format),be=pe.convert(G.type);Pe.setTexture2D(G,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment),F.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,U,M.x,M.y,V,de,xe,be,F.image.data):F.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,U,M.x,M.y,F.mipmaps[0].width,F.mipmaps[0].height,xe,F.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,U,M.x,M.y,xe,be,F.image),U===0&&G.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(M,F,G,U,V=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=M.max.x-M.min.x+1,xe=M.max.y-M.min.y+1,be=M.max.z-M.min.z+1,Te=pe.convert(U.format),Oe=pe.convert(U.type);let Re;if(U.isData3DTexture)Pe.setTexture3D(U,0),Re=I.TEXTURE_3D;else if(U.isDataArrayTexture)Pe.setTexture2DArray(U,0),Re=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Le=I.getParameter(I.UNPACK_ROW_LENGTH),qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ze=I.getParameter(I.UNPACK_SKIP_PIXELS),Wt=I.getParameter(I.UNPACK_SKIP_ROWS),dn=I.getParameter(I.UNPACK_SKIP_IMAGES),nt=G.isCompressedTexture?G.mipmaps[0]:G.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,nt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,M.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,M.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,M.min.z),G.isDataTexture||G.isData3DTexture?I.texSubImage3D(Re,V,F.x,F.y,F.z,de,xe,be,Te,Oe,nt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Re,V,F.x,F.y,F.z,de,xe,be,Te,nt.data)):I.texSubImage3D(Re,V,F.x,F.y,F.z,de,xe,be,Te,Oe,nt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Le),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,dn),V===0&&U.generateMipmaps&&I.generateMipmap(Re),Ae.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Pe.setTextureCube(M,0):M.isData3DTexture?Pe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Pe.setTexture2DArray(M,0):Pe.setTexture2D(M,0),Ae.unbindTexture()},this.resetState=function(){w=0,T=0,P=null,Ae.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ce?An:$a}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===An?Ce:qt}}class Cp extends Jo{}Cp.prototype.isWebGL1Renderer=!0;class Pp extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class On extends $t{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zo=new C,Qo=new C,el=new Ye,ws=new $i,mr=new Ri;class As extends at{constructor(e=new gt,t=new On){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Zo.fromBufferAttribute(t,r-1),Qo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Zo.distanceTo(Qo);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),mr.radius+=s,e.ray.intersectsSphere(mr)===!1)return;el.copy(r).invert(),ws.copy(e.ray).applyMatrix4(el);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=new C,p=new C,a=new C,c=new C,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=f,b=x-1;v<b;v+=d){const w=g.getX(v),T=g.getX(v+1);if(u.fromBufferAttribute(m,w),p.fromBufferAttribute(m,T),ws.distanceSqToSegment(u,p,c,a)>h)continue;c.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(c);D<e.near||D>e.far||t.push({distance:D,point:a.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=f,b=x-1;v<b;v+=d){if(u.fromBufferAttribute(m,v),p.fromBufferAttribute(m,v+1),ws.distanceSqToSegment(u,p,c,a)>h)continue;c.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(c);T<e.near||T>e.far||t.push({distance:T,point:a.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}const tl=new C,nl=new C;class Ts extends As{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)tl.fromBufferAttribute(t,r),nl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+tl.distanceTo(nl);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Di extends $t{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const il=new Ye,Rs=new $i,gr=new Ri,_r=new C;class Cs extends at{constructor(e=new gt,t=new Di){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),gr.radius+=s,e.ray.intersectsSphere(gr)===!1)return;il.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(il);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=n.index,a=n.attributes.position;if(u!==null){const c=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=c,_=d;g<_;g++){const m=u.getX(g);_r.fromBufferAttribute(a,m),rl(_r,m,h,r,e,t,this)}}else{const c=Math.max(0,o.start),d=Math.min(a.count,o.start+o.count);for(let g=c,_=d;g<_;g++)_r.fromBufferAttribute(a,g),rl(_r,g,h,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function rl(i,e,t,n,r,s,o){const l=Rs.distanceSqToPoint(i);if(l<t){const h=new C;Rs.closestPointToPoint(i,h),h.applyMatrix4(n);const u=r.ray.origin.distanceTo(h);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:h,index:e,face:null,object:o})}}class Lp{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let l=0,h=s-1,u;for(;l<=h;)if(r=Math.floor(l+(h-l)/2),u=n[r]-o,u<0)l=r+1;else if(u>0)h=r-1;else{h=r;break}if(r=h,n[r]===o)return r/(s-1);const p=n[r],c=n[r+1]-p,d=(o-p)/c;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),l=this.getPoint(s),h=t||(o.isVector2?new ze:new C);return h.copy(l).sub(o).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,r=[],s=[],o=[],l=new C,h=new Ye;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new C)}s[0]=new C,o[0]=new C;let u=Number.MAX_VALUE;const p=Math.abs(r[0].x),a=Math.abs(r[0].y),c=Math.abs(r[0].z);p<=u&&(u=p,n.set(1,0,0)),a<=u&&(u=a,n.set(0,1,0)),c<=u&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],l),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),l.crossVectors(r[d-1],r[d]),l.length()>Number.EPSILON){l.normalize();const g=Math.acos(dt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(h.makeRotationAxis(l,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(dt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(l.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(h.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Ps(){let i=0,e=0,t=0,n=0;function r(s,o,l,h){i=s,e=l,t=-3*s+3*o-2*l-h,n=2*s-2*o+l+h}return{initCatmullRom:function(s,o,l,h,u){r(o,l,u*(l-s),u*(h-o))},initNonuniformCatmullRom:function(s,o,l,h,u,p,a){let c=(o-s)/u-(l-s)/(u+p)+(l-o)/p,d=(l-o)/p-(h-o)/(p+a)+(h-l)/a;c*=p,d*=p,r(o,l,c,d)},calc:function(s){const o=s*s,l=o*s;return i+e*s+t*o+n*l}}}const vr=new C,Ls=new Ps,Ds=new Ps,Us=new Ps;class Dp extends Lp{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new C){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let l=Math.floor(o),h=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1);let u,p;this.closed||l>0?u=r[(l-1)%s]:(vr.subVectors(r[0],r[1]).add(r[0]),u=vr);const a=r[l%s],c=r[(l+1)%s];if(this.closed||l+2<s?p=r[(l+2)%s]:(vr.subVectors(r[s-1],r[s-2]).add(r[s-1]),p=vr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(a),d),_=Math.pow(a.distanceToSquared(c),d),m=Math.pow(c.distanceToSquared(p),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ls.initNonuniformCatmullRom(u.x,a.x,c.x,p.x,g,_,m),Ds.initNonuniformCatmullRom(u.y,a.y,c.y,p.y,g,_,m),Us.initNonuniformCatmullRom(u.z,a.z,c.z,p.z,g,_,m)}else this.curveType==="catmullrom"&&(Ls.initCatmullRom(u.x,a.x,c.x,p.x,this.tension),Ds.initCatmullRom(u.y,a.y,c.y,p.y,this.tension),Us.initCatmullRom(u.z,a.z,c.z,p.z,this.tension));return n.set(Ls.calc(h),Ds.calc(h),Us.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class xr extends gt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:h};const u=this;r=Math.floor(r),s=Math.floor(s);const p=[],a=[],c=[],d=[];let g=0;const _=[],m=n/2;let f=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(p),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(d,2));function x(){const b=new C,w=new C;let T=0;const P=(t-e)/n;for(let D=0;D<=s;D++){const y=[],A=D/s,W=A*(t-e)+e;for(let j=0;j<=r;j++){const N=j/r,O=N*h+l,z=Math.sin(O),J=Math.cos(O);w.x=W*z,w.y=-A*n+m,w.z=W*J,a.push(w.x,w.y,w.z),b.set(z,P,J).normalize(),c.push(b.x,b.y,b.z),d.push(N,1-A),y.push(g++)}_.push(y)}for(let D=0;D<r;D++)for(let y=0;y<s;y++){const A=_[y][D],W=_[y+1][D],j=_[y+1][D+1],N=_[y][D+1];p.push(A,W,N),p.push(W,j,N),T+=6}u.addGroup(f,T,0),f+=T}function v(b){const w=g,T=new ze,P=new C;let D=0;const y=b===!0?e:t,A=b===!0?1:-1;for(let j=1;j<=r;j++)a.push(0,m*A,0),c.push(0,A,0),d.push(.5,.5),g++;const W=g;for(let j=0;j<=r;j++){const O=j/r*h+l,z=Math.cos(O),J=Math.sin(O);P.x=y*J,P.y=m*A,P.z=y*z,a.push(P.x,P.y,P.z),c.push(0,A,0),T.x=z*.5+.5,T.y=J*.5*A+.5,d.push(T.x,T.y),g++}for(let j=0;j<r;j++){const N=w+j,O=W+j;b===!0?p.push(O,O+1,N):p.push(O+1,O,N),D+=3}u.addGroup(f,D,b===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Is extends gt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const l=[],h=[],u=[],p=[];let a=e;const c=(t-e)/r,d=new C,g=new ze;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const f=s+m/n*o;d.x=a*Math.cos(f),d.y=a*Math.sin(f),h.push(d.x,d.y,d.z),u.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,p.push(g.x,g.y)}a+=c}for(let _=0;_<r;_++){const m=_*(n+1);for(let f=0;f<n;f++){const x=f+m,v=x,b=x+n+1,w=x+n+2,T=x+1;l.push(v,b,T),l.push(b,w,T)}}this.setIndex(l),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mi extends $t{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Up extends $t{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ir,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const sl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ip{constructor(e,t,n){const r=this;let s=!1,o=0,l=0,h;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){l++,s===!1&&r.onStart!==void 0&&r.onStart(p,o,l),s=!0},this.itemEnd=function(p){o++,r.onProgress!==void 0&&r.onProgress(p,o,l),o===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,a){return u.push(p,a),this},this.removeHandler=function(p){const a=u.indexOf(p);return a!==-1&&u.splice(a,2),this},this.getHandler=function(p){for(let a=0,c=u.length;a<c;a+=2){const d=u[a],g=u[a+1];if(d.global&&(d.lastIndex=0),d.test(p))return g}return null}}}const Fp=new Ip;class al{constructor(e){this.manager=e!==void 0?e:Fp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const un={};class Np extends Error{constructor(e,t){super(e),this.response=t}}class Op extends al{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=sl.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(un[e]!==void 0){un[e].push({onLoad:t,onProgress:n,onError:r});return}un[e]=[],un[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,h=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const p=un[e],a=u.body.getReader(),c=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),d=c?parseInt(c):0,g=d!==0;let _=0;const m=new ReadableStream({start(f){x();function x(){a.read().then(({done:v,value:b})=>{if(v)f.close();else{_+=b.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let T=0,P=p.length;T<P;T++){const D=p[T];D.onProgress&&D.onProgress(w)}f.enqueue(b),x()}})}}});return new Response(m)}else throw new Np(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(h){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(p=>new DOMParser().parseFromString(p,l));case"json":return u.json();default:if(l===void 0)return u.text();{const a=/charset="?([^;"\s]*)"?/i.exec(l),c=a&&a[1]?a[1].toLowerCase():void 0,d=new TextDecoder(c);return u.arrayBuffer().then(g=>d.decode(g))}}}).then(u=>{sl.add(e,u);const p=un[e];delete un[e];for(let a=0,c=p.length;a<c;a++){const d=p[a];d.onLoad&&d.onLoad(u)}}).catch(u=>{const p=un[e];if(p===void 0)throw this.manager.itemError(e),u;delete un[e];for(let a=0,c=p.length;a<c;a++){const d=p[a];d.onError&&d.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ol extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Fs=new Ye,ll=new C,cl=new C;class Bp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(ll),cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cl),t.updateMatrixWorld(),Fs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zp extends Bp{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kp extends ol{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new zp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gp extends ol{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hp{constructor(e,t,n=0,r=1/0){this.ray=new $i(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ns(e,this,n,t),n.sort(ul),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ns(e[r],this,n,t);return n.sort(ul),n}}function ul(i,e){return i.distance-e.distance}function Ns(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Ns(r[s],e,t,!0)}}const dl=new C,yr=new C;class Vp{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){dl.subVectors(e,this.start),yr.subVectors(this.end,this.start);const n=yr.dot(yr);let s=yr.dot(dl)/n;return t&&(s=dt(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dr}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dr);var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var hl={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(gi,function(){var t=function(){function n(d){return o.appendChild(d.dom),d}function r(d){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===d?"block":"none";s=d}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(d){d.preventDefault(),r(++s%o.children.length)},!1);var l=(performance||Date).now(),h=l,u=0,p=n(new t.Panel("FPS","#0ff","#002")),a=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=n(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:n,showPanel:r,begin:function(){l=(performance||Date).now()},end:function(){u++;var d=(performance||Date).now();if(a.update(d-l,200),d>h+1e3&&(p.update(1e3*u/(d-h),100),h=d,u=0,c)){var g=performance.memory;c.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return d},update:function(){l=this.end()},domElement:o,setMode:r}};return t.Panel=function(n,r,s){var o=1/0,l=0,h=Math.round,u=h(window.devicePixelRatio||1),p=80*u,a=48*u,c=3*u,d=2*u,g=3*u,_=15*u,m=74*u,f=30*u,x=document.createElement("canvas");x.width=p,x.height=a,x.style.cssText="width:80px;height:48px";var v=x.getContext("2d");return v.font="bold "+9*u+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=s,v.fillRect(0,0,p,a),v.fillStyle=r,v.fillText(n,c,d),v.fillRect(g,_,m,f),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(g,_,m,f),{dom:x,update:function(b,w){o=Math.min(o,b),l=Math.max(l,b),v.fillStyle=s,v.globalAlpha=1,v.fillRect(0,0,p,_),v.fillStyle=r,v.fillText(h(b)+" "+n+" ("+h(o)+"-"+h(l)+")",c,d),v.drawImage(x,g+u,_,m-u,f,g,_,m-u,f),v.fillRect(g+m-u,_,u,f),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(g+m-u,_,u,h((1-b/w)*f))}}},t})})(hl);var Xp=hl.exports;const fl=Wp(Xp);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class Jt{constructor(e,t,n,r,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Jt.nextNameID=Jt.nextNameID||0,this.$name.id=`lil-gui-name-${++Jt.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class qp extends Jt{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Os(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const $p={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Os,toHexString:Os},Ui={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Yp=[$p,Ui,{isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=Ui.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Ui.toHexString(r)}},{isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=Ui.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Ui.toHexString(r)}}];function jp(i){return Yp.find(e=>e.match(i))}class Kp extends Jt{constructor(e,t,n,r){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=jp(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Os(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Bs extends Jt{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Jp extends Jt{constructor(e,t,n,r,s,o){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(s);const l=o!==void 0;this.step(l?o:this._getImplicitStep(),l),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+x),this.$input.value=this.getValue())},r=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},s=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let o=!1,l,h,u,p,a;const c=5,d=x=>{l=x.clientX,h=u=x.clientY,o=!0,p=this.getValue(),a=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=x=>{if(o){const v=x.clientX-l,b=x.clientY-h;Math.abs(b)>c?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>c&&_()}if(!o){const v=x.clientY-u;a-=v*this._step*this._arrowKeyMultiplier(x),p+a>this._max?a=this._max-p:p+a<this._min&&(a=this._min-p),this._snapClampSetValue(p+a)}u=x.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,x,v,b,w)=>(f-x)/(v-x)*(w-b)+b,t=f=>{const x=this.$slider.getBoundingClientRect();let v=e(f,x.left,x.right,this._min,this._max);this._snapClampSetValue(v)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=f=>{t(f.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let o=!1,l,h;const u=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),o=!1},p=f=>{f.touches.length>1||(this._hasScrollBar?(l=f.touches[0].clientX,h=f.touches[0].clientY,o=!0):u(f),window.addEventListener("touchmove",a,{passive:!1}),window.addEventListener("touchend",c))},a=f=>{if(o){const x=f.touches[0].clientX-l,v=f.touches[0].clientY-h;Math.abs(x)>Math.abs(v)?u(f):(window.removeEventListener("touchmove",a),window.removeEventListener("touchend",c))}else f.preventDefault(),t(f.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",a),window.removeEventListener("touchend",c)},d=this._callOnFinishChange.bind(this),g=400;let _;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const v=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(d,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",p,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Zp extends Jt{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Qp extends Jt{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const em=`.lil-gui {
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
}`;function tm(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let pl=!1;class Sr{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:s="Controls",closeFolders:o=!1,injectStyles:l=!0,touchStyles:h=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",u=>{(u.code==="Enter"||u.code==="Space")&&(u.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),h&&this.domElement.classList.add("allow-touch-styles"),!pl&&l&&(tm(em),pl=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=o}add(e,t,n,r,s){if(Object(n)===n)return new Zp(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new Jp(this,e,t,n,r,s);case"boolean":return new qp(this,e,t);case"string":return new Qp(this,e,t);case"function":return new Bs(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new Kp(this,e,t,n)}addFolder(e){const t=new Sr({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Bs||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Bs)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}new C,new C,new C;const nm=new Ee,Gt=Object.freeze({background:new Ee(2764090),ground:new Ee(3817295),truckBase:new Ee(13935988),truckCab:new Ee(15251602),houseBody:new Ee(15787730),houseRoof:new Ee(13943976),warning:new Ee(16044095),danger:new Ee(15105570),safe:new Ee(8765929)});function Mr(i,e,t){return i<e?e:i>t?t:i}function im(i,e,t){return i+(e-i)*t}function rm(i,e,t){const n=Mr((t-i)/(e-i),0,1);return n*n*(3-2*n)}function ml(i,e){const t=i.x-e.x,n=i.z-e.z;return Math.sqrt(t*t+n*n)}function gl(i,e,t,n=nm){return n.copy(i),n.lerp(e,Mr(t,0,1)),n}class sm{constructor(e,t){this.canvas=e,this.config=t,this.device=null,this.context=null,this.queue=null,this.commandEncoder=null,this.renderPass=null,this.width=0,this.height=0,this.aspectRatio=1,this.viewMatrix=new Float32Array(16),this.projectionMatrix=new Float32Array(16),this.uniformBuffer=null,this.vertexBuffer=null,this.indexBuffer=null,this.texture=null,this.sampler=null,this.vertexShader=null,this.fragmentShader=null,this.computeShader=null,this.renderPipeline=null,this.computePipeline=null,this.bindGroup=null,this.houseInstances=[],this.houseInstanceBuffer=null,this.maxHouses=t.MAX_HOUSES||12,this.routePoints=[],this.routeBuffer=null,this.routePipeline=null,this.frameCount=0,this.lastFrameTime=0,this.fps=60}async initialize(){try{if(!navigator.gpu)throw new Error("WebGPU not supported");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance",forceFallbackAdapter:!1});if(!e)throw new Error("No WebGPU adapter found");if(this.device=await e.requestDevice({requiredFeatures:["timestamp-query"],requiredLimits:{maxStorageBufferBindingSize:e.limits.maxStorageBufferBindingSize,maxBufferSize:e.limits.maxBufferSize}}),this.queue=this.device.queue,this.context=this.canvas.getContext("webgpu"),!this.context)throw new Error("WebGPU context not available");const t=navigator.gpu.getPreferredCanvasFormat();return this.context.configure({device:this.device,format:t,usage:GPUTextureUsage.RENDER_ATTACHMENT,alphaMode:"opaque"}),await this.createShaders(),await this.createBuffers(),await this.createPipelines(),this.setupResizeObserver(),console.log("WebGPU renderer initialized successfully"),!0}catch(e){return console.error("Failed to initialize WebGPU renderer:",e),!1}}async createShaders(){this.vertexShader=this.device.createShaderModule({code:`
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
      `})}async createBuffers(){this.uniformBuffer=this.device.createBuffer({size:16*4*2+8,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.houseInstanceBuffer=this.device.createBuffer({size:this.maxHouses*8*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.routeBuffer=this.device.createBuffer({size:2048*6*4,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),await this.createGeometryBuffers()}async createGeometryBuffers(){const e=new Float32Array([-1.6,-.6,-1,1,.8,.6,0,0,1.6,-.6,-1,1,.8,.6,1,0,1.6,-.6,1,1,.8,.6,1,1,-1.6,-.6,1,1,.8,.6,0,1,-.7,-.65,-.9,1,.6,.7,0,0,.7,-.65,-.9,1,.6,.7,1,0,.7,-.65,.9,1,.6,.7,1,1,-.7,-.65,.9,1,.6,.7,0,1]);this.vertexBuffer=this.device.createBuffer({size:e.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.queue.writeBuffer(this.vertexBuffer,0,e);const t=new Float32Array([-1.3,-.75,-1.3,.4,.8,.8,0,0,1.3,-.75,-1.3,.4,.8,.8,1,0,1.3,-.75,1.3,.4,.8,.8,1,1,-1.3,-.75,1.3,.4,.8,.8,0,1,-1.45,-.2,-1.45,.9,.5,.7,0,0,1.45,-.2,-1.45,.9,.5,.7,1,0,1.45,-.2,1.45,.9,.5,.7,1,1,-1.45,-.2,1.45,.9,.5,.7,0,1]);this.houseVertexBuffer=this.device.createBuffer({size:t.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.queue.writeBuffer(this.houseVertexBuffer,0,t)}async createPipelines(){this.renderPipeline=this.device.createRenderPipeline({layout:"auto",vertex:{module:this.vertexShader,entryPoint:"vs_main",buffers:[{arrayStride:8*4,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"},{shaderLocation:2,offset:24,format:"float32x2"}]}]},fragment:{module:this.fragmentShader,entryPoint:"fs_main",targets:[{format:navigator.gpu.getPreferredCanvasFormat()}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),this.computePipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.computeShader,entryPoint:"cs_main"}}),this.bindGroup=this.device.createBindGroup({layout:this.renderPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.houseInstanceBuffer}},{binding:2,resource:{buffer:this.routeBuffer}}]})}setupResizeObserver(){new ResizeObserver(t=>{for(const n of t){const{width:r,height:s}=n.contentRect;this.resize(r,s)}}).observe(this.canvas)}resize(e,t){this.width=e,this.height=t,this.aspectRatio=e/t,this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.config.WORLD_SIZE*.75,t=-e*this.aspectRatio/2,n=e*this.aspectRatio/2,r=e/2,s=-e/2,o=-200,l=400,h=1/(n-t),u=1/(r-s),p=1/(o-l);this.projectionMatrix.set([2*h,0,0,0,0,2*u,0,0,0,0,2*p,0,-(n+t)*h,-(r+s)*u,-200*p,1])}updateViewMatrix(e,t){const n=e,r=t,s=[0,1,0],o=this.normalize([n[0]-r[0],n[1]-r[1],n[2]-r[2]]),l=this.normalize(this.cross(s,o)),h=this.cross(o,l);this.viewMatrix.set([l[0],h[0],o[0],0,l[1],h[1],o[1],0,l[2],h[2],o[2],0,-this.dot(l,n),-this.dot(h,n),-this.dot(o,n),1])}normalize(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);return[e[0]/t,e[1]/t,e[2]/t]}cross(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}dot(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}updateUniforms(e,t,n){this.updateViewMatrix(t,n);const r=new Float32Array(16*2+2);r.set(this.viewMatrix,0),r.set(this.projectionMatrix,16),r[32]=e,r[33]=0,this.queue.writeBuffer(this.uniformBuffer,0,r)}updateHouses(e){const t=new Float32Array(this.maxHouses*8);for(let n=0;n<e.length&&n<this.maxHouses;n++){const r=e[n],s=n*8;t[s+0]=r.position.x,t[s+1]=r.position.y,t[s+2]=r.position.z,t[s+3]=r.scale||1,t[s+4]=r.color.r,t[s+5]=r.color.g,t[s+6]=r.color.b,t[s+7]=r.timer||0}this.queue.writeBuffer(this.houseInstanceBuffer,0,t)}updateRoute(e){const t=new Float32Array(e.length*6);for(let n=0;n<e.length;n++){const r=e[n],s=n*6;t[s+0]=r.position.x,t[s+1]=r.position.y,t[s+2]=r.position.z,t[s+3]=r.color.r,t[s+4]=r.color.g,t[s+5]=r.color.b}this.queue.writeBuffer(this.routeBuffer,0,t)}beginFrame(){this.commandEncoder=this.device.createCommandEncoder()}endFrame(){this.commandEncoder&&(this.queue.submit([this.commandEncoder.finish()]),this.commandEncoder=null)}render(e,t,n,r,s){this.commandEncoder||this.beginFrame(),this.updateUniforms(e,t,n),this.updateHouses(r),this.updateRoute(s);const o=this.context.getCurrentTexture().createView();this.renderPass=this.commandEncoder.beginRenderPass({colorAttachments:[{view:o,clearValue:{r:.1,g:.1,b:.15,a:1},loadOp:"clear",storeOp:"store"}]}),this.renderPass.setPipeline(this.renderPipeline),this.renderPass.setBindGroup(0,this.bindGroup),r.length>0&&(this.renderPass.setVertexBuffer(0,this.houseVertexBuffer),this.renderPass.setVertexBuffer(1,this.houseInstanceBuffer),this.renderPass.draw(8,r.length)),this.renderPass.setVertexBuffer(0,this.vertexBuffer),this.renderPass.draw(8),s.length>0&&(this.renderPass.setVertexBuffer(0,this.routeBuffer),this.renderPass.draw(s.length)),this.renderPass.end()}dispatchHouseUpdates(e,t){this.commandEncoder||this.beginFrame();const n=this.commandEncoder.beginComputePass();n.setPipeline(this.computePipeline),n.setBindGroup(0,this.bindGroup);const r=new Float32Array([e,t.x,t.y,t.z]);this.queue.writeBuffer(this.uniformBuffer,16*4*2,r);const s=Math.ceil(this.maxHouses/64);n.dispatchWorkgroups(s),n.end()}getPerformanceStats(){const e=performance.now();return this.frameCount++,e-this.lastFrameTime>=1e3&&(this.fps=this.frameCount,this.frameCount=0,this.lastFrameTime=e),{fps:this.fps,frameCount:this.frameCount}}destroy(){this.uniformBuffer&&this.uniformBuffer.destroy(),this.vertexBuffer&&this.vertexBuffer.destroy(),this.houseInstanceBuffer&&this.houseInstanceBuffer.destroy(),this.routeBuffer&&this.routeBuffer.destroy(),this.houseVertexBuffer&&this.houseVertexBuffer.destroy()}}class am{constructor(e){this.device=e,this.queue=e.queue,this.routeOptimizationPipeline=null,this.collisionDetectionPipeline=null,this.houseManagementPipeline=null,this.particleSystemPipeline=null,this.routeBuffer=null,this.houseBuffer=null,this.collisionBuffer=null,this.particleBuffer=null,this.routeBindGroup=null,this.houseBindGroup=null,this.collisionBindGroup=null,this.particleBindGroup=null,this.initialized=!1}async initialize(){try{return await this.createComputeShaders(),await this.createBuffers(),await this.createPipelines(),await this.createBindGroups(),this.initialized=!0,console.log("WebGPU compute system initialized"),!0}catch(e){return console.error("Failed to initialize WebGPU compute system:",e),!1}}async createComputeShaders(){this.routeOptimizationShader=this.device.createShaderModule({code:`
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
      `})}async createBuffers(){this.routeBuffer=this.device.createBuffer({size:256*7*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.houseBuffer=this.device.createBuffer({size:12*8*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.collisionBuffer=this.device.createBuffer({size:64*6*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.particleBuffer=this.device.createBuffer({size:1024*7*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})}async createPipelines(){this.routeOptimizationPipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.routeOptimizationShader,entryPoint:"cs_route_optimization"}}),this.collisionDetectionPipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.collisionDetectionShader,entryPoint:"cs_collision_detection"}}),this.houseManagementPipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.houseManagementShader,entryPoint:"cs_house_management"}}),this.particleSystemPipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.particleSystemShader,entryPoint:"cs_particle_system"}})}async createBindGroups(){this.routeBindGroup=this.device.createBindGroup({layout:this.routeOptimizationPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.routeBuffer}}]}),this.houseBindGroup=this.device.createBindGroup({layout:this.houseManagementPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.houseBuffer}}]}),this.collisionBindGroup=this.device.createBindGroup({layout:this.collisionDetectionPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.collisionBuffer}},{binding:1,resource:{buffer:this.collisionBuffer}}]}),this.particleBindGroup=this.device.createBindGroup({layout:this.particleSystemPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.particleBuffer}}]})}optimizeRoute(e,t,n){if(!this.initialized)return;const r=this.device.createCommandEncoder(),s=r.beginComputePass();s.setPipeline(this.routeOptimizationPipeline),s.setBindGroup(0,this.routeBindGroup),this.updateRouteBuffer(e);const o=Math.ceil(e.length/64);s.dispatchWorkgroups(o),s.end(),this.queue.submit([r.finish()])}updateRouteBuffer(e){const t=new Float32Array(e.length*7);for(let n=0;n<e.length;n++){const r=e[n],s=n*7;t[s+0]=r.position.x,t[s+1]=r.position.y,t[s+2]=r.position.z,t[s+3]=r.color.r,t[s+4]=r.color.g,t[s+5]=r.color.b,t[s+6]=r.active?1:0}this.queue.writeBuffer(this.routeBuffer,0,t)}updateHouses(e,t,n){if(!this.initialized)return;const r=this.device.createCommandEncoder(),s=r.beginComputePass();s.setPipeline(this.houseManagementPipeline),s.setBindGroup(0,this.houseBindGroup),this.updateHouseBuffer(e,t,n);const o=Math.ceil(e.length/64);s.dispatchWorkgroups(o),s.end(),this.queue.submit([r.finish()])}updateHouseBuffer(e,t,n){const r=new Float32Array(e.length*8);for(let s=0;s<e.length;s++){const o=e[s],l=s*8;r[l+0]=o.position.x,r[l+1]=o.position.y,r[l+2]=o.position.z,r[l+3]=o.timer,r[l+4]=o.maxTimer,r[l+5]=o.color.r,r[l+6]=o.color.g,r[l+7]=o.color.b}this.queue.writeBuffer(this.houseBuffer,0,r)}detectCollisions(e,t){if(!this.initialized)return[];const n=this.device.createCommandEncoder(),r=n.beginComputePass();r.setPipeline(this.collisionDetectionPipeline),r.setBindGroup(0,this.collisionBindGroup),this.updateCollisionBuffer(e,t);const s=Math.ceil(e.length/64);return r.dispatchWorkgroups(s),r.end(),this.queue.submit([n.finish()]),[]}updateCollisionBuffer(e,t){const n=new Float32Array(e.length*6);for(let r=0;r<e.length;r++){const s=e[r],o=r*6;n[o+0]=s.position.x,n[o+1]=s.position.y,n[o+2]=s.position.z,n[o+3]=s.radius,n[o+4]=s.active?1:0,n[o+5]=s.type||0}this.queue.writeBuffer(this.collisionBuffer,0,n)}updateParticles(e,t,n,r,s){if(!this.initialized)return;const o=this.device.createCommandEncoder(),l=o.beginComputePass();l.setPipeline(this.particleSystemPipeline),l.setBindGroup(0,this.particleBindGroup),this.updateParticleBuffer(e,t,n,r,s);const h=Math.ceil(e.length/64);l.dispatchWorkgroups(h),l.end(),this.queue.submit([o.finish()])}updateParticleBuffer(e,t,n,r,s){const o=new Float32Array(e.length*7);for(let l=0;l<e.length;l++){const h=e[l],u=l*7;o[u+0]=h.position.x,o[u+1]=h.position.y,o[u+2]=h.position.z,o[u+3]=h.velocity.x,o[u+4]=h.velocity.y,o[u+5]=h.velocity.z,o[u+6]=h.life}this.queue.writeBuffer(this.particleBuffer,0,o)}destroy(){this.routeBuffer&&this.routeBuffer.destroy(),this.houseBuffer&&this.houseBuffer.destroy(),this.collisionBuffer&&this.collisionBuffer.destroy(),this.particleBuffer&&this.particleBuffer.destroy()}}class om{constructor(e){this.device=e,this.queue=e.queue,this.audioProcessingPipeline=null,this.soundEffectPipeline=null,this.musicPipeline=null,this.audioBuffer=null,this.outputBuffer=null,this.effectBuffer=null,this.audioBindGroup=null,this.effectBindGroup=null,this.audioContext=null,this.audioWorklet=null,this.initialized=!1}async initialize(){try{return await this.createAudioShaders(),await this.createAudioBuffers(),await this.createAudioPipelines(),await this.createAudioBindGroups(),await this.setupWebAudioIntegration(),this.initialized=!0,console.log("WebGPU audio system initialized"),!0}catch(e){return console.error("Failed to initialize WebGPU audio system:",e),!1}}async createAudioShaders(){this.audioProcessingShader=this.device.createShaderModule({code:`
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
      `})}async createAudioBuffers(){this.audioBuffer=this.device.createBuffer({size:44100*2*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.outputBuffer=this.device.createBuffer({size:44100*2*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.effectBuffer=this.device.createBuffer({size:64*6*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.musicBuffer=this.device.createBuffer({size:128*6*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})}async createAudioPipelines(){this.audioProcessingPipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.audioProcessingShader,entryPoint:"cs_audio_processing"}}),this.soundEffectPipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.soundEffectShader,entryPoint:"cs_sound_effects"}}),this.musicPipeline=this.device.createComputePipeline({layout:"auto",compute:{module:this.musicShader,entryPoint:"cs_music_processing"}})}async createAudioBindGroups(){this.audioBindGroup=this.device.createBindGroup({layout:this.audioProcessingPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.audioBuffer}},{binding:1,resource:{buffer:this.outputBuffer}}]}),this.effectBindGroup=this.device.createBindGroup({layout:this.soundEffectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.effectBuffer}},{binding:1,resource:{buffer:this.outputBuffer}}]}),this.musicBindGroup=this.device.createBindGroup({layout:this.musicPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.musicBuffer}},{binding:1,resource:{buffer:this.outputBuffer}}]})}async setupWebAudioIntegration(){try{this.audioContext=new(window.AudioContext||window.webkitAudioContext),await this.audioContext.audioWorklet.addModule("/src/webgpu/audio-worklet.js"),this.audioWorklet=new AudioWorkletNode(this.audioContext,"webgpu-audio-processor"),this.audioWorklet.connect(this.audioContext.destination),console.log("Web Audio integration setup complete")}catch(e){console.warn("Web Audio integration failed, falling back to standard audio:",e)}}processAudio(e,t){if(!this.initialized)return;const n=this.device.createCommandEncoder(),r=n.beginComputePass();r.setPipeline(this.audioProcessingPipeline),r.setBindGroup(0,this.audioBindGroup),this.updateAudioBuffer(e),this.updateAudioParams(t);const s=Math.ceil(e.length/64);r.dispatchWorkgroups(s),r.end(),this.queue.submit([n.finish()])}updateAudioBuffer(e){const t=new Float32Array(e.length*2);for(let n=0;n<e.length;n++){const r=e[n];t[n*2]=r.left||0,t[n*2+1]=r.right||0}this.queue.writeBuffer(this.audioBuffer,0,t)}updateAudioParams(e){const t=new Float32Array([e.volume||1,e.pitch||1,e.reverb||0,e.echo||0,e.lowPass||0,e.highPass||0,e.sampleRate||44100,e.deltaTime||.016]),n=this.device.createBuffer({size:t.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.queue.writeBuffer(n,0,t)}playSoundEffect(e,t=1,n=1,r=1){if(!this.initialized)return;const s=this.device.createCommandEncoder(),o=s.beginComputePass();o.setPipeline(this.soundEffectPipeline),o.setBindGroup(0,this.effectBindGroup),this.updateEffectBuffer(e,t,n,r);const l=Math.ceil(64/64);o.dispatchWorkgroups(l),o.end(),this.queue.submit([s.finish()])}updateEffectBuffer(e,t,n,r){const s=new Float32Array(384);for(let o=0;o<64;o++){const l=o*6;if(s[l+5]===0){s[l+0]=e,s[l+1]=t,s[l+2]=n,s[l+3]=r,s[l+4]=performance.now()/1e3,s[l+5]=1;break}}this.queue.writeBuffer(this.effectBuffer,0,s)}playMusic(e,t=120,n=0,r=0){if(!this.initialized)return;const s=this.device.createCommandEncoder(),o=s.beginComputePass();o.setPipeline(this.musicPipeline),o.setBindGroup(0,this.musicBindGroup),this.updateMusicBuffer(e,t,n,r);const l=Math.ceil(e.length/64);o.dispatchWorkgroups(l),o.end(),this.queue.submit([s.finish()])}updateMusicBuffer(e,t,n,r){const s=new Float32Array(e.length*6);for(let o=0;o<e.length;o++){const l=e[o],h=o*6;s[h+0]=l.frequency,s[h+1]=l.duration,s[h+2]=l.startTime,s[h+3]=l.volume,s[h+4]=l.waveform,s[h+5]=l.active?1:0}this.queue.writeBuffer(this.musicBuffer,0,s)}integrateWithHowler(){if(!this.audioContext)return;const e=window.Howl.prototype.play;window.Howl.prototype.play=function(t){const s=this._sprite[t||"default"];return s&&this.webgpuAudio.playSoundEffect(this._type||0,this._volume||1,this._rate||1,s[1]/1e3),e.call(this,t)}}destroy(){this.audioBuffer&&this.audioBuffer.destroy(),this.outputBuffer&&this.outputBuffer.destroy(),this.effectBuffer&&this.effectBuffer.destroy(),this.musicBuffer&&this.musicBuffer.destroy(),this.audioContext&&this.audioContext.close()}}class lm{constructor(e,t){this.canvas=e,this.config=t,this.renderer=null,this.compute=null,this.audio=null,this.initialized=!1,this.fallbackMode=!1,this.performanceStats={fps:60,gpuTime:0,cpuTime:0,memoryUsage:0},this.threeJSScene=null,this.threeJSCamera=null,this.threeJSRenderer=null}async initialize(){try{if(console.log("Initializing WebGPU integration..."),!navigator.gpu)return console.warn("WebGPU not supported, falling back to Three.js"),console.log('💡 To enable WebGPU: Go to chrome://flags/ and enable "Unsafe WebGPU"'),this.fallbackMode=!0,!1;try{if(!await navigator.gpu.requestAdapter())return console.warn("WebGPU adapter not available, falling back to Three.js"),console.log('💡 To enable WebGPU: Go to chrome://flags/ and enable "Unsafe WebGPU"'),this.fallbackMode=!0,!1}catch(e){return console.warn("WebGPU adapter request failed:",e),console.log('💡 To enable WebGPU: Go to chrome://flags/ and enable "Unsafe WebGPU"'),this.fallbackMode=!0,!1}return await this.initializeWebGPUSystems(),this.setupCompatibilityLayer(),this.initialized=!0,console.log("WebGPU integration initialized successfully"),!0}catch(e){return console.error("Failed to initialize WebGPU integration:",e),this.fallbackMode=!0,!1}}async initializeWebGPUSystems(){if(this.renderer=new sm(this.canvas,this.config),!await this.renderer.initialize())throw new Error("Failed to initialize WebGPU renderer");this.compute=new am(this.renderer.device),await this.compute.initialize()||console.warn("WebGPU compute system failed to initialize"),this.audio=new om(this.renderer.device),await this.audio.initialize()||console.warn("WebGPU audio system failed to initialize")}setupCompatibilityLayer(){this.getScene=()=>this.threeJSScene,this.getCamera=()=>this.threeJSCamera,this.getRenderer=()=>this.threeJSRenderer,this.render=this.render.bind(this)}setThreeJSScene(e){this.threeJSScene=e}setThreeJSCamera(e){this.threeJSCamera=e}setThreeJSRenderer(e){this.threeJSRenderer=e}render(){if(!this.initialized||this.fallbackMode){this.threeJSRenderer&&this.threeJSScene&&this.threeJSCamera&&this.threeJSRenderer.render(this.threeJSScene,this.threeJSCamera);return}const e=performance.now();try{const t=this.getCurrentGameState();this.updateWebGPUSystems(t),this.renderWithWebGPU(t),this.updatePerformanceStats(e)}catch(t){console.error("WebGPU rendering failed, falling back to Three.js:",t),this.fallbackToThreeJS()}}getCurrentGameState(){const e=[],t=[],n={x:0,y:0,z:0};if(this.threeJSScene){const r=this.threeJSScene.getObjectByName("HouseManager");r&&r.children.forEach((l,h)=>{l.name==="House"&&e.push({position:l.position,color:l.material?.color||{r:.4,g:.8,b:.8},timer:l.userData?.timer||25,active:l.visible})});const s=this.threeJSScene.getObjectByName("Truck");s&&(n.x=s.position.x,n.y=s.position.y,n.z=s.position.z);const o=this.threeJSScene.getObjectByName("RouteLine");if(o&&o.geometry){const l=o.geometry.attributes.position.array;for(let h=0;h<l.length;h+=3)t.push({position:{x:l[h],y:l[h+1],z:l[h+2]},color:{r:.4,g:.8,b:1}})}}return{houses:e,routePoints:t,truckPosition:n,time:performance.now()/1e3}}updateWebGPUSystems(e){this.compute&&(this.compute.optimizeRoute(e.routePoints,e.truckPosition,e.houses.map(t=>t.position)),this.compute.updateHouses(e.houses,e.truckPosition,.016)),this.audio&&this.audio.processAudio([],{volume:1,pitch:1,reverb:0,echo:0})}renderWithWebGPU(e){if(!this.renderer)return;const t=this.threeJSCamera?[this.threeJSCamera.position.x,this.threeJSCamera.position.y,this.threeJSCamera.position.z]:[0,60,60],n=[0,0,0];this.renderer.render(e.time,t,n,e.houses,e.routePoints)}fallbackToThreeJS(){this.threeJSRenderer&&this.threeJSScene&&this.threeJSCamera&&this.threeJSRenderer.render(this.threeJSScene,this.threeJSCamera)}updatePerformanceStats(e){const n=performance.now()-e;this.performanceStats.fps=Math.round(1e3/n),this.performanceStats.gpuTime=n*.7,this.performanceStats.cpuTime=n*.3,this.performanceStats.memoryUsage=this.estimateMemoryUsage()}estimateMemoryUsage(){const e=this.threeJSScene?.getObjectByName("HouseManager")?.children.length||0,t=this.threeJSScene?.getObjectByName("RouteLine")?.geometry?.attributes.position.count||0;return e*.1+t*.01+5+10}optimizeRouteDrawing(e){return!this.compute||!this.initialized||this.compute.optimizeRoute(e,{x:0,y:0,z:0},[]),e}accelerateHouseUpdates(e,t,n){return!this.compute||!this.initialized||this.compute.updateHouses(e,t,n),e}processAudioWithWebGPU(e,t){return!this.audio||!this.initialized||this.audio.processAudio(e,t),e}getPerformanceStats(){return{...this.performanceStats,webgpuEnabled:this.initialized&&!this.fallbackMode,systems:{renderer:!!this.renderer,compute:!!this.compute,audio:!!this.audio}}}enableDebugMode(){this.renderer&&(this.renderer.debugMode=!0),this.compute&&(this.compute.debugMode=!0),this.audio&&(this.audio.debugMode=!0)}disableDebugMode(){this.renderer&&(this.renderer.debugMode=!1),this.compute&&(this.compute.debugMode=!1),this.audio&&(this.audio.debugMode=!1)}destroy(){this.renderer&&this.renderer.destroy(),this.compute&&this.compute.destroy(),this.audio&&this.audio.destroy(),this.initialized=!1}}let Zt=null,lt=null,Mn=null,vt=null;const zs=new Set,cm=new C(0,0,0),um=new C(0,60,60);async function dm(i,e){Mn=new Pp,Mn.background=Gt.background,Zt=new Jo({canvas:i,antialias:!0,alpha:!1}),Zt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Zt.outputColorSpace=Ce,vt=new lm(i,e),await vt.initialize()?(console.log("WebGPU integration enabled - enhanced performance available"),vt.setThreeJSScene(Mn)):console.log("WebGPU not available - using standard Three.js rendering");const n=window.innerWidth/window.innerHeight;{const r=e.WORLD_SIZE*.75;lt=new dr(r*n/-2,r*n/2,r/2,r/-2,-200,400)}return lt.position.copy(um),lt.lookAt(cm),vt&&(vt.setThreeJSCamera(lt),vt.setThreeJSRenderer(Zt)),mm(Mn),_l(e),window.addEventListener("resize",()=>_l(e)),{renderer:Zt,scene:Mn,camera:lt}}function br(){return Mn}function hm(){return lt}function fm(){!Zt||!Mn||!lt||(vt&&vt.initialized?vt.render():Zt.render(Mn,lt))}function pm(i){return typeof i=="function"&&zs.add(i),()=>zs.delete(i)}function _l(i){if(!Zt||!lt)return;const e=window.innerWidth,t=window.innerHeight;Zt.setSize(e,t,!1);const n=e/t;if(lt instanceof dr){const r=i.WORLD_SIZE*.85;lt.left=-r*n/2,lt.right=r*n/2,lt.top=r/2,lt.bottom=-r/2,lt.updateProjectionMatrix()}else lt instanceof Dt&&(lt.aspect=n,lt.updateProjectionMatrix());for(const r of zs)r(e,t,Zt)}function mm(i){const e=new Gp(16777215,.55);i.add(e);const t=new kp(16777215,.65);t.position.set(60,80,40),i.add(t)}function gm(){return vt?vt.getPerformanceStats():null}function vl(){return vt&&vt.initialized}function _m(i){return vt&&vt.initialized?vt.optimizeRouteDrawing(i):i}const Ii=new Map,je={x:0,y:0,ndcX:0,ndcY:0,down:!1,button:0,lastSampleX:0,lastSampleY:0},xl=new Set,ks=new Set,vm=4;let Gs=null;function xm(i){Gs=i,i.addEventListener("pointerdown",ym),window.addEventListener("pointermove",Sm),window.addEventListener("pointerup",Mm),window.addEventListener("keydown",bm),window.addEventListener("keyup",Em)}function Hs(i,e){return Ii.has(i)||Ii.set(i,new Set),Ii.get(i).add(e),()=>Ii.get(i)?.delete(e)}function Ht(i){return ks.has(i)?(ks.delete(i),!0):!1}function _i(i,e){const t=Ii.get(i);if(t)for(const n of t)n(e)}function ym(i){je.down=!0,je.button=i.button,Vs(i),Gs&&Gs.setPointerCapture(i.pointerId),_i("pointer-down",Ws(i))}function Sm(i){Vs(i);const e=Ws(i);_i("pointer-move",e);const t=je.x-je.lastSampleX,n=je.y-je.lastSampleY;Math.hypot(t,n)>=vm&&(je.lastSampleX=je.x,je.lastSampleY=je.y,_i("pointer-sample",e))}function Mm(i){Vs(i),je.down=!1,je.button=-1,_i("pointer-up",Ws(i))}function bm(i){i.repeat||(xl.add(i.code),ks.add(i.code),_i("key-down",{code:i.code,event:i}))}function Em(i){xl.delete(i.code),_i("key-up",{code:i.code,event:i})}function Vs(i){je.x=i.clientX,je.y=i.clientY,je.ndcX=i.clientX/window.innerWidth*2-1,je.ndcY=-(i.clientY/window.innerHeight)*2+1}function Ws(i){return{event:i,x:je.x,y:je.y,ndcX:je.ndcX,ndcY:je.ndcY,down:je.down,button:je.button}}const Xs=new C,qs=new C;function wm(i,e=2048){const t=new Array(e+1);let n=0;i.getPointAt(0,Xs),t[0]={u:0,s:0};for(let s=1;s<=e;s+=1){const o=s/e;i.getPointAt(o,qs),n+=qs.distanceTo(Xs),t[s]={u:o,s:n},Xs.copy(qs)}return{length:n,resolution:e,samples:t}}function Am(i,e){const{length:t}=i;if(t<=0)return 0;const n=(e%t+t)%t;return Cm(i,n)}function Tm(i,e,t){if(!i||i.length<=0)return e;const r=Rm(i,e)+t;return Am(i,r)}function Rm(i,e){if(!i||i.length<=0)return 0;const t=(e%1+1)%1,{samples:n}=i;let r=0,s=n.length-1;for(;r<=s;){const a=r+s>>>1,c=n[a];if(Math.abs(c.u-t)<1e-6)return c.s;c.u<t?r=a+1:s=a-1}const o=Math.max(1,r),l=n[o-1],h=n[o],u=h.u-l.u||1e-6,p=(t-l.u)/u;return l.s+(h.s-l.s)*p}function Cm(i,e){const{samples:t,length:n}=i,r=(e%n+n)%n;let s=0,o=t.length-1;for(;s<=o;){const d=s+o>>>1,g=t[d];if(Math.abs(g.s-r)<1e-4)return g.u;g.s<r?s=d+1:o=d-1}const l=Math.max(1,s),h=t[l-1],u=t[l],p=u.s-h.s||1e-6,a=(r-h.s)/p;return((h.u+(u.u-h.u)*a)%1+1)%1}const Pm=2048,Lm=256,Fi=16754810,yl=6607556,Dm=7315455,Sl=new Hp,Um=new Sn(new C(0,1,0),0),Bn=new C,Im=new C,Ml=new C,$s=new Vp,ce={scene:null,mapState:null,config:null,curve:null,lut:null,length:0,commitListeners:new Set,mode:"idle",drawingPoints:[],minSampleDist:.35,line:null,lineGeometry:null,lineMaterial:null,previewMaterial:null,previewGeometry:null,previewLine:null};function Fm(i,e,t){return ce.scene=i,ce.mapState=e,ce.config=t,ce.minSampleDist=t.MIN_SAMPLE_DIST??.35,ce.lineGeometry=new gt,ce.lineMaterial=new On({color:Dm,linewidth:2}),ce.line=new As(ce.lineGeometry,ce.lineMaterial),ce.line.name="RouteLine",ce.line.visible=!1,i.add(ce.line),ce.previewGeometry=new gt,ce.previewMaterial=new On({color:Fi,linewidth:1}),ce.previewLine=new As(ce.previewGeometry,ce.previewMaterial),ce.previewLine.name="RoutePreview",ce.previewLine.visible=!1,i.add(ce.previewLine),ce}function bl(){if(!ce.scene)throw new Error("Route system not initialized");ce.mode="drawing",ce.drawingPoints.length=0,ce.previewLine.visible=!0,ce.previewMaterial.color.setHex(Fi)}function Nm(){ce.mode==="drawing"&&ce.drawingPoints.length>1&&(ce.mode="ready",wl())}function Er(i,e=!1){if(ce.mode!=="drawing"||!i)return;const t=new C(i.x,0,i.z),n=ce.drawingPoints[ce.drawingPoints.length-1],r=ce.minSampleDist;if(!n||e||n.distanceToSquared(t)>=r*r){if(ce.drawingPoints.length>=ce.config.MAX_POINTS)return;ce.drawingPoints.push(t),wl()}}function Ni(){ce.mode="idle",ce.previewLine.visible=!1,ce.drawingPoints.length=0,ce.previewMaterial.color.setHex(Fi)}function El(i=!1,e={}){if(ce.mode==="idle")return!1;const t=Al();if(t.length<2)return Ni(),!1;const n=ce.config.RDP_EPS>0&&t.length>2?Ys(t,ce.config.RDP_EPS):t.slice();if(zm(n),!i&&!Tl(n))return ce.previewMaterial.color.setHex(Fi),!1;if(!Tl(n))return Ni(),!1;const r=_m(n),s=r!==n?r:n,o=new Dp(s,!0,"catmullrom",.12),l=wm(o,Pm);let h=null;if(e.anchor&&(h=Hm(o,e.anchor,e.attachRadius),!h))return Ni(),!1;ce.curve=o,ce.lut=l,ce.length=l.length,ce.line.visible=!0,Gm(o),ce.previewLine.visible=!1,ce.drawingPoints.length=0,ce.mode="idle",ce.previewMaterial.color.setHex(yl);const u={curve:o,lut:l,attachInfo:h};for(const p of ce.commitListeners)p(u);return u}function Om(i){return ce.commitListeners.add(i),()=>ce.commitListeners.delete(i)}function Bm(i,e,t=Bn){if(!i)return null;Sl.setFromCamera(e,i);const n=Sl.ray.intersectPlane(Um,t);return n?t.set(n.x,0,n.z):null}function wl(){if(ce.mode==="idle"){ce.previewLine.visible=!1;return}const i=Al();if(km(i),i.length<2){ce.previewMaterial.color.setHex(Fi);return}ce.previewMaterial.color.setHex(yl)}function Al(){return ce.drawingPoints.map(i=>i.clone())}function zm(i){if(i.length<2)return;const e=i[0];i[i.length-1].distanceToSquared(e)>1e-4?i.push(e.clone()):i[i.length-1]=e.clone()}function Tl(i){if(!ce.mapState)return!0;const e=ce.mapState.half;for(const t of i)if(Math.abs(t.x)>e||Math.abs(t.z)>e)return!1;return!0}function km(i){if(!i.length){ce.previewLine.visible=!1;return}const e=new Float32Array(i.length*3);for(let t=0;t<i.length;t+=1){const n=i[t];e[t*3+0]=n.x,e[t*3+1]=.05,e[t*3+2]=n.z}ce.previewGeometry.setAttribute("position",new $e(e,3)),ce.previewGeometry.computeBoundingSphere(),ce.previewLine.visible=!0}function Gm(i){const e=Lm,t=new Float32Array((e+1)*3);for(let n=0;n<=e;n+=1){const r=n/e;i.getPointAt(r,Bn),t[n*3+0]=Bn.x,t[n*3+1]=.06,t[n*3+2]=Bn.z}ce.lineGeometry.setAttribute("position",new $e(t,3)),ce.lineGeometry.computeBoundingSphere()}function Hm(i,e,t=6,n=256){let r=1/0,s=0;for(let o=0;o<=n;o+=1){const l=o/n;i.getPointAt(l,Bn);const h=Bn.distanceTo(e);h<r&&(r=h,s=l,Ml.copy(Bn))}return r>t?null:{u:s,point:Ml.clone(),distance:r}}function Ys(i,e){if(i.length<=2)return i.slice();const t=i[0],n=i[i.length-1];let r=-1,s=0;for(let o=1;o<i.length-1;o+=1){const l=Vm(i[o],t,n);l>s&&(r=o,s=l)}if(s>e){const o=Ys(i.slice(0,r+1),e),l=Ys(i.slice(r),e);return o.slice(0,o.length-1).concat(l)}return[t.clone(),n.clone()]}function Vm(i,e,t){return $s.start.copy(e),$s.end.copy(t),$s.closestPointToPoint(i,!0,Im).distanceTo(i)}const Rl=4294967295;function wr(i){if(typeof i=="number"&&Number.isFinite(i))return i>>>0;if(typeof i=="string"){let t=0;for(let n=0;n<i.length;n+=1)t=Math.imul(31,t)+i.charCodeAt(n),t|=0;return t>>>0||1}return Math.floor(Math.random()*Rl)||1}function Cl(i){let e=wr(i)||1;function t(){e+=1831565813;let r=e;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/Rl}return{seed:e>>>0,rand(){return t()},randRange(r,s){return r+(s-r)*t()},pick(r){if(!r.length)return;const s=Math.floor(t()*r.length);return r[s]},shuffle(r){for(let s=r.length-1;s>0;s-=1){const o=Math.floor(t()*(s+1));[r[s],r[o]]=[r[o],r[s]]}return r}}}function Wm(i,e,t){const n=new Kt;n.name="Map",i.add(n);const r=t.WORLD_SIZE,s=r/2,o=new mi({color:Gt.ground,roughness:.85,metalness:.05}),l=new _t(new cr(r,r,1,1),o);l.rotation.x=-Math.PI/2,l.receiveShadow=!1,n.add(l);const h=$m(r,t.GRID_RES);return h.visible=!1,n.add(h),{root:n,size:r,half:s,ground:l,grid:h,obstacles:[]}}function Xm(i,e){i?.grid&&(i.grid.visible=e)}function qm(i,e){const t=i.size*.08,n=e.randRange(-i.half+t,i.half-t),r=e.randRange(-i.half+t,i.half-t);return{x:n,z:r,y:0}}function $m(i,e){const t=i/e,n=i/2,r=[];for(let h=-n;h<=n;h+=t)r.push(-n,.01,h,n,.01,h),r.push(h,.01,-n,h,.01,n);const s=new gt;s.setAttribute("position",new $e(r,3));const o=new On({color:4871528,linewidth:1}),l=new Ts(s,o);return l.frustumCulled=!1,l}const Ym=/^[og]\s*(.+)?/,jm=/^mtllib /,Km=/^usemtl /,Jm=/^usemap /,Pl=/\s+/,Ll=new C,js=new C,Dl=new C,Ul=new C,Ut=new C,Ar=new Ee;function Zm(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const l={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const u={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return u.clone=this.clone.bind(u),u}};return this.materials.push(l),l},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){const r=this.vertices,s=this.object.geometry.normals;Ll.fromArray(r,e),js.fromArray(r,t),Dl.fromArray(r,n),Ut.subVectors(Dl,js),Ul.subVectors(Ll,js),Ut.cross(Ul),Ut.normalize(),s.push(Ut.x,Ut.y,Ut.z),s.push(Ut.x,Ut.y,Ut.z),s.push(Ut.x,Ut.y,Ut.z)},addColor:function(e,t,n){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,s,o,l,h,u){const p=this.vertices.length;let a=this.parseVertexIndex(e,p),c=this.parseVertexIndex(t,p),d=this.parseVertexIndex(n,p);if(this.addVertex(a,c,d),this.addColor(a,c,d),l!==void 0&&l!==""){const g=this.normals.length;a=this.parseNormalIndex(l,g),c=this.parseNormalIndex(h,g),d=this.parseNormalIndex(u,g),this.addNormal(a,c,d)}else this.addFaceNormal(a,c,d);if(r!==void 0&&r!==""){const g=this.uvs.length;a=this.parseUVIndex(r,g),c=this.parseUVIndex(s,g),d=this.parseUVIndex(o,g),this.addUV(a,c,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return i.startObject("",!1),i}class Il extends al{constructor(e){super(e),this.materials=null}load(e,t,n,r){const s=this,o=new Op(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{t(s.parse(l))}catch(h){r?r(h):console.error(h),s.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Zm;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let r=[];for(let l=0,h=n.length;l<h;l++){const u=n[l].trimStart();if(u.length===0)continue;const p=u.charAt(0);if(p!=="#")if(p==="v"){const a=u.split(Pl);switch(a[0]){case"v":t.vertices.push(parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3])),a.length>=7?(Ar.setRGB(parseFloat(a[4]),parseFloat(a[5]),parseFloat(a[6])).convertSRGBToLinear(),t.colors.push(Ar.r,Ar.g,Ar.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3]));break;case"vt":t.uvs.push(parseFloat(a[1]),parseFloat(a[2]));break}}else if(p==="f"){const c=u.slice(1).trim().split(Pl),d=[];for(let _=0,m=c.length;_<m;_++){const f=c[_];if(f.length>0){const x=f.split("/");d.push(x)}}const g=d[0];for(let _=1,m=d.length-1;_<m;_++){const f=d[_],x=d[_+1];t.addFace(g[0],f[0],x[0],g[1],f[1],x[1],g[2],f[2],x[2])}}else if(p==="l"){const a=u.substring(1).trim().split(" ");let c=[];const d=[];if(u.indexOf("/")===-1)c=a;else for(let g=0,_=a.length;g<_;g++){const m=a[g].split("/");m[0]!==""&&c.push(m[0]),m[1]!==""&&d.push(m[1])}t.addLineGeometry(c,d)}else if(p==="p"){const c=u.slice(1).trim().split(" ");t.addPointGeometry(c)}else if((r=Ym.exec(u))!==null){const a=(" "+r[0].slice(1).trim()).slice(1);t.startObject(a)}else if(Km.test(u))t.object.startMaterial(u.substring(7).trim(),t.materialLibraries);else if(jm.test(u))t.materialLibraries.push(u.substring(7).trim());else if(Jm.test(u))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(r=u.split(" "),r.length>1){const c=r[1].trim().toLowerCase();t.object.smooth=c!=="0"&&c!=="off"}else t.object.smooth=!0;const a=t.object.currentMaterial();a&&(a.smooth=t.object.smooth)}else{if(u==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+u+'"')}}t.finalize();const s=new Kt;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let l=0,h=t.objects.length;l<h;l++){const u=t.objects[l],p=u.geometry,a=u.materials,c=p.type==="Line",d=p.type==="Points";let g=!1;if(p.vertices.length===0)continue;const _=new gt;_.setAttribute("position",new $e(p.vertices,3)),p.normals.length>0&&_.setAttribute("normal",new $e(p.normals,3)),p.colors.length>0&&(g=!0,_.setAttribute("color",new $e(p.colors,3))),p.hasUVIndices===!0&&_.setAttribute("uv",new $e(p.uvs,2));const m=[];for(let x=0,v=a.length;x<v;x++){const b=a[x],w=b.name+"_"+b.smooth+"_"+g;let T=t.materials[w];if(this.materials!==null){if(T=this.materials.create(b.name),c&&T&&!(T instanceof On)){const P=new On;$t.prototype.copy.call(P,T),P.color.copy(T.color),T=P}else if(d&&T&&!(T instanceof Di)){const P=new Di({size:10,sizeAttenuation:!1});$t.prototype.copy.call(P,T),P.color.copy(T.color),P.map=T.map,T=P}}T===void 0&&(c?T=new On:d?T=new Di({size:1,sizeAttenuation:!1}):T=new Up,T.name=b.name,T.flatShading=!b.smooth,T.vertexColors=g,t.materials[w]=T),m.push(T)}let f;if(m.length>1){for(let x=0,v=a.length;x<v;x++){const b=a[x];_.addGroup(b.groupStart,b.groupCount,x)}c?f=new Ts(_,m):d?f=new Cs(_,m):f=new _t(_,m)}else c?f=new Ts(_,m[0]):d?f=new Cs(_,m[0]):f=new _t(_,m[0]);f.name=u.name,s.add(f)}else if(t.vertices.length>0){const l=new Di({size:1,sizeAttenuation:!1}),h=new gt;h.setAttribute("position",new $e(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new $e(t.colors,3)),l.vertexColors=!0);const u=new Cs(h,l);s.add(u)}return s}}const Fl=new Map;async function Qm(){console.log("🎨 Starting asset preloading...");const i=[{name:"truck",path:"assets/models/truck.obj"},{name:"house",path:"assets/models/house.obj"}],e=new Il,t=i.map(n=>eg(e,n));try{const n=await Promise.all(t);return console.log("✅ All assets preloaded successfully"),n}catch(n){return console.warn("⚠️ Some assets failed to load:",n),[]}}function eg(i,e){return new Promise((t,n)=>{i.load(e.path,r=>{Fl.set(e.name,r),console.log(`✅ ${e.name} asset loaded`),t({name:e.name,object:r,success:!0})},r=>{const s=Math.round(r.loaded/r.total*100);console.log(`Loading ${e.name}: ${s}%`)},r=>{console.warn(`❌ Failed to load ${e.name}:`,r),t({name:e.name,object:null,success:!1})})})}function tg(i){return Fl.get(i)}const Tr=new C,Ks=new C;class ng{constructor(e){this.config=e,this.group=new Kt,this.group.name="Truck",this.loadTruckModel(),this.curve=null,this.lut=null,this.u=0,this.baseSpeed=e.BASE_SPEED,this.speed=e.BASE_SPEED,this.deliveryRadius=e.DELIVERY_RADIUS,this.cooldown=0}loadTruckModel(){const e=tg("truck");if(e){const t=e.clone();t.scale.setScalar(.009),t.rotation.y=Math.PI,t.position.set(0,0,0),this.applyTruckMaterials(t),this.group.add(t),console.log("✅ Truck model loaded from cache")}else new Il().load("assets/models/truck.obj",n=>{n.scale.setScalar(.03),n.rotation.y=Math.PI,n.position.set(0,0,0),this.applyTruckMaterials(n),this.group.add(n),console.log("✅ Truck model loaded from file")},n=>{console.log("Loading truck model:",n.loaded/n.total*100+"%")},n=>{console.error("❌ Error loading truck model:",n),this.group.add(ig())})}applyTruckMaterials(e){e.traverse(t=>{if(t.isMesh){const n=new mi({color:13935988,roughness:.7,metalness:.2});t.material=n}})}attachToCurve(e,t,n=0,r=null){this.curve=e,this.lut=t,this.u=(n%1+1)%1,e&&(r?this.group.position.copy(r):(e.getPointAt(this.u,Tr),this.group.position.copy(Tr)))}addToScene(e){e.add(this.group)}update(e,t){if(!this.curve||!this.lut)return;const{houses:n=[],onDeliver:r=()=>{},now:s=typeof performance<"u"?performance.now():Date.now()}=t||{},l=this.computeSpeed()*e;this.cooldown>0?this.cooldown-=e:this.u=Tm(this.lut,this.u,l),this.curve.getPointAt(this.u,Tr),this.curve.getTangentAt(this.u,Ks),this.group.position.copy(Tr);const h=Math.atan2(Ks.x,Ks.z);if(this.group.rotation.y=h,!(this.cooldown>0))for(const u of n){if(!u.active||typeof u.isServedRecently=="function"&&u.isServedRecently(s))continue;if(ml(this.group.position,u.position)<=this.deliveryRadius){this.cooldown=.25,r(u,s);break}}}computeSpeed(){return this.baseSpeed}}function ig(){const i=new Kt,e=new Dn(3.2,1.2,2),t=new Dn(1.4,1.3,1.8),n=new mi({color:Gt.truckBase,roughness:.4,metalness:.1}),r=new mi({color:Gt.truckCab,roughness:.35,metalness:.1}),s=new _t(e,n);s.position.y=.6,i.add(s);const o=new _t(t,r);return o.position.set(1,.75,0),i.add(o),i}const Nl=48,Ol=300,rg=9,sg=500;class ag{constructor(e,t){this.position=e.clone(),this.deadlineMaxMs=t,this.deadlineMs=t,this.active=!0,this.warningThreshold=.25,this.lastServedAt=-1/0,this.group=lg(),this.group.position.copy(this.position),this.group.name="House",this.timerMesh=this.group.getObjectByName("HouseTimer"),this.bodyMesh=this.group.getObjectByName("HouseBody"),this.roofMesh=this.group.getObjectByName("HouseRoof"),this.ringIndexCount=this.timerMesh.geometry.index?.count??Nl*6,this.refreshVisuals()}update(e,t){return this.active?(this.deadlineMs-=e*1e3,this.refreshVisuals(),this.deadlineMs<=0):!1}deliver(e){this.deadlineMs=this.deadlineMaxMs,this.lastServedAt=e,this.refreshVisuals()}isServedRecently(e){return e-this.lastServedAt<sg}refreshVisuals(){if(!this.active){this.group.visible=!1;return}this.group.visible=!0;const e=Mr(this.deadlineMs/this.deadlineMaxMs,0,1),t=Math.max(3,Math.floor(this.ringIndexCount*e));this.timerMesh.geometry.setDrawRange(0,t);const n=e>.5?gl(Gt.safe,Gt.warning,(1-e)*2):gl(Gt.warning,Gt.danger,Mr((.5-e)/.5,0,1));this.timerMesh.material.color.copy(n);const r=e<this.warningThreshold?1+Math.sin((1-e)*20)*.05:1;this.timerMesh.scale.setScalar(r)}setDeadline(e){this.deadlineMaxMs=e,this.deadlineMs=e,this.refreshVisuals()}}class og{constructor(e,t,n,r){this.scene=e,this.mapState=t,this.rng=n,this.config=r,this.houses=[],this.group=new Kt,this.group.name="HouseManager",e.add(this.group),this.elapsed=0,this.spawnTimer=r.FIRST_SPAWN_AT,this.spawnedCount=0,this.maxHouses=r.MAX_HOUSES||12,this.justSpawned=!1,this.weekElapsed=0,this.weekNumber=1,this.housesSpawnedThisWeek=0}setRng(e){this.rng=e}reset(){for(const e of this.houses)this.group.remove(e.group);this.houses.length=0,this.elapsed=0,this.spawnTimer=this.config.FIRST_SPAWN_AT,this.spawnedCount=0,this.maxHouses=this.config.MAX_HOUSES||12,this.justSpawned=!1,this.weekElapsed=0,this.weekNumber=1,this.housesSpawnedThisWeek=0}resetWeek(){this.weekElapsed=0,this.weekNumber+=1,this.housesSpawnedThisWeek=0,console.log(`🏠 Week ${this.weekNumber} started - resetting house spawns`)}update(e,t){this.elapsed+=e,this.weekElapsed+=e,this.justSpawned=!1;let n=null;for(const s of this.houses){if(!s.active)continue;s.update(e,t)&&!n&&(n=s)}return this.shouldSpawnHouse()&&(this.spawnNextHouse(),this.justSpawned=!0),n}shouldSpawnHouse(){if(this.weekNumber<=5){const e=[2,22,45],t=this.weekElapsed;for(let n=0;n<e.length;n++)if(this.housesSpawnedThisWeek===n&&t>=e[n]&&t<e[n]+1)return!0}else{const e=[2,22,45,60,75],t=this.weekElapsed;for(let n=0;n<e.length;n++)if(this.housesSpawnedThisWeek===n&&t>=e[n]&&t<e[n]+1)return!0}return!1}spawnNextHouse(){const e=this.getDeadline(),t=this.findSpawnPosition(),n=new ag(t,e);return this.houses.push(n),this.group.add(n.group),this.spawnedCount+=1,this.housesSpawnedThisWeek+=1,console.log(`🏠 House spawned! Week ${this.weekNumber}, House ${this.housesSpawnedThisWeek} at ${this.weekElapsed.toFixed(1)}s`),n}findSpawnPosition(){let e=null;for(let t=0;t<40;t+=1){const n=qm(this.mapState,this.rng),r=new C(n.x,0,n.z);if(this.isFarFromOthers(r))return r;e||(e=r)}return e||new C(0,0,0)}isFarFromOthers(e){for(const t of this.houses){if(!t.active)continue;if(ml(e,t.position)<rg)return!1}return!0}handleDelivery(e,t){e&&e.deliver(t)}getHouses(){return this.houses}getActiveHouseCount(){return this.houses.filter(e=>e.active).length}getDeadline(){const e=Math.min(this.elapsed,Ol),t=this.config.DEADLINE_START*1e3,n=this.config.DEADLINE_END*1e3;return im(t,n,rm(0,Ol,e))}wasJustSpawned(){return this.justSpawned}}function lg(){const i=new Kt,e=new xr(1.3,1.3,1.5,12),t=new xr(0,1.45,1.1,12),n=new Is(1.5,1.7,Nl),r=new mi({color:Gt.houseBody,roughness:.6,metalness:.05}),s=new mi({color:Gt.houseRoof,roughness:.45,metalness:.1}),o=new ps({color:Gt.safe,transparent:!0,opacity:.9,side:Xt}),l=new _t(e,r);l.name="HouseBody",l.position.y=.75,i.add(l);const h=new _t(t,s);h.name="HouseRoof",h.position.y=1.55,i.add(h);const u=new _t(n,o);return u.name="HouseTimer",u.rotation.x=-Math.PI/2,u.position.y=2,i.add(u),i}const cg=[{id:"tuned_engine",name:"Tuned Engine",desc:"+10% base speed. Trucks move faster between deliveries.",apply:i=>{i.truck.baseSpeed*=1.1},stackable:!0},{id:"service_radius",name:"Service Radius+",desc:"+10% delivery radius. Easier to hit houses.",apply:i=>{i.truck.deliveryRadius*=1.1},stackable:!0},{id:"patient_customers",name:"Patient Customers",desc:"+12% max deadlines for all houses.",apply:i=>{i.config.DEADLINE_START*=1.12,i.config.DEADLINE_END*=1.12;for(const e of i.houseManager.getHouses())e.setDeadline(e.deadlineMaxMs*1.12)},stackable:!1},{id:"dispatch_optimizer",name:"Dispatch Optimizer",desc:"Deadlines +20% longer and delivery radius +15%.",apply:i=>{i.config.DEADLINE_START*=1.2,i.config.DEADLINE_END*=1.2,i.truck.deliveryRadius*=1.15},stackable:!1},{id:"time_master",name:"Time Master",desc:"Week timer +15 seconds. More time to plan routes.",apply:i=>{i.config.WEEK_SECONDS+=15},stackable:!0},{id:"fleet_training",name:"Fleet Training",desc:"Base speed +10% and delivery radius +5%.",apply:i=>{i.truck.baseSpeed*=1.1,i.truck.deliveryRadius*=1.05},stackable:!0}];function ug(i,e=new Set,t=3,n=null){const s=cg.filter(o=>!(!o.stackable&&e.has(o.id)||o.condition&&n&&!o.condition(n))).slice();return i.shuffle(s),s.slice(0,t)}const $={pauseBtn:null,speedBtn:null,pauseIcon:null,speedLabel:null,hud:null,scoreLabel:null,weekLabel:null,seedLabel:null,fpsLabel:null,debugWrap:null,upgradeModal:null,upgradeCards:null,gameOverModal:null,gameOverScore:null,gameOverHigh:null,gameOverSeed:null,retryBtn:null,newRunBtn:null,settingsBtn:null,settingsPanel:null,volumeSlider:null,bgMusicVolumeSlider:null,onPausePress:null,onSpeedPress:null,onUpgradeSelect:null,onRetry:null,onNewRun:null,onVolumeChange:null,onBackgroundMusicVolumeChange:null,currentCards:[]};function dg(){$.pauseBtn=document.querySelector("[data-action=pause]"),$.speedBtn=document.querySelector("[data-action=speed]"),$.pauseIcon=document.querySelector("[data-ui=pause-icon]"),$.speedLabel=document.querySelector("[data-ui=speed-label]"),$.hud=document.querySelector(".hud"),$.scoreLabel=document.querySelector("[data-ui=score]"),$.weekLabel=document.querySelector("[data-ui=week]"),$.weekTimerLabel=document.querySelector("[data-ui=week-timer]"),$.upgradeCountLabel=document.querySelector("[data-ui=upgrade-count]"),$.seedLabel=document.querySelector("[data-ui=seed]"),$.webgpuWrap=document.querySelector("[data-ui=webgpu-wrap]"),$.webgpuStatus=document.querySelector("[data-ui=webgpu-status]"),$.fpsLabel=document.querySelector("[data-ui=fps]"),$.debugWrap=document.querySelector("[data-ui=debug]"),$.upgradeModal=document.querySelector(".upgrade-modal"),$.upgradeCards=document.querySelector(".upgrade-cards"),$.gameOverModal=document.querySelector(".gameover-modal"),$.gameOverScore=document.querySelector("[data-ui=final-score]"),$.gameOverHigh=document.querySelector("[data-ui=final-best]"),$.gameOverSeed=document.querySelector("[data-ui=final-seed]"),$.retryBtn=document.querySelector("[data-action=retry]"),$.newRunBtn=document.querySelector("[data-action=new-seed]"),$.settingsBtn=document.querySelector("[data-action=settings]"),$.settingsPanel=document.querySelector(".settings-panel"),$.volumeSlider=document.querySelector("[data-setting=volume]"),$.bgMusicVolumeSlider=document.querySelector("[data-setting=bgMusicVolume]"),$.pauseBtn?.addEventListener("click",()=>$.onPausePress?.()),$.speedBtn?.addEventListener("click",i=>{console.log("🚨 SPEED BUTTON CLICKED!",{event:i.type,isTrusted:i.isTrusted,target:i.target,currentTarget:i.currentTarget}),console.trace("Speed button click stack trace:"),$.onSpeedPress?.()}),$.retryBtn?.addEventListener("click",()=>$.onRetry?.()),$.newRunBtn?.addEventListener("click",()=>$.onNewRun?.()),$.settingsBtn?.addEventListener("click",vg),document.querySelector("[data-action=twitter]")?.addEventListener("click",()=>{window.open("https://x.com/ariescipher7","_blank")}),document.querySelector("[data-action=itch]")?.addEventListener("click",()=>{window.open("https://cipheratlas.itch.io/","_blank")}),$.volumeSlider?.addEventListener("input",i=>{const e=Number(i.target.value);$.onVolumeChange?.(e)}),$.bgMusicVolumeSlider?.addEventListener("input",i=>{const e=Number(i.target.value);$.onBackgroundMusicVolumeChange?.(e)}),Cr(!1)}function Bl(i){$.scoreLabel&&($.scoreLabel.textContent=String(i))}function zl(i){$.weekLabel&&($.weekLabel.textContent=String(i))}function hg(i){$.weekTimerLabel&&($.weekTimerLabel.textContent=String(Math.ceil(i)))}function fg(i){$.seedLabel&&($.seedLabel.textContent=i)}function pg(i,e){$.debugWrap&&($.debugWrap.classList.toggle("hidden",!e),e&&$.fpsLabel&&($.fpsLabel.textContent=`${Math.round(i)}`))}function mg(i,e){!$.upgradeModal||!$.upgradeCards||($.onUpgradeSelect=e,$.currentCards=i,$.upgradeCards.innerHTML="",i.forEach((t,n)=>{const r=document.createElement("button");r.className="card",r.dataset.cardId=t.id,r.innerHTML=`<span class="card-index">${n+1}</span>
      <span class="card-title">${t.name}</span>
      <span class="card-desc">${t.desc}</span>`,r.addEventListener("click",()=>Rr(n)),$.upgradeCards.appendChild(r)}),document.body.classList.add("modal-open"),$.upgradeModal.classList.add("open"))}function kl(){$.upgradeModal&&($.onUpgradeSelect=null,$.currentCards=[],document.body.classList.remove("modal-open"),$.upgradeModal.classList.remove("open"))}function Rr(i){if(!$.onUpgradeSelect)return;const e=$.currentCards[i];e&&$.onUpgradeSelect(e,i)}function gg(i,{onRetry:e,onNewRun:t}){$.gameOverModal&&($.onRetry=e,$.onNewRun=t,$.gameOverScore&&($.gameOverScore.textContent=String(i.score??0)),$.gameOverHigh&&($.gameOverHigh.textContent=String(i.highscore??0)),$.gameOverSeed&&($.gameOverSeed.textContent=i.seed??""),document.body.classList.add("modal-open"),$.gameOverModal.classList.add("open"))}function Gl(){$.gameOverModal&&($.gameOverModal.classList.remove("open"),document.body.classList.remove("modal-open"))}function _g(i,e,t){$.onVolumeChange=e,$.onBackgroundMusicVolumeChange=t,$.volumeSlider&&($.volumeSlider.value=String(i.volume??1)),$.bgMusicVolumeSlider&&($.bgMusicVolumeSlider.value=String(i.bgMusicVolume??.3))}function vg(){const i=$.settingsPanel?.classList.toggle("open");document.body.classList.toggle("modal-open",!!i)}function xg(i){$.onPausePress=i}function yg(i){$.onSpeedPress=i}function Cr(i){const e="▶",t="⏸";$.pauseBtn&&($.pauseBtn.setAttribute("aria-pressed",i?"true":"false"),$.pauseBtn.classList.toggle("active",i),$.pauseBtn.title=i?"Resume (Space)":"Pause (Space)"),$.pauseIcon&&($.pauseIcon.textContent=i?e:t)}function Js(i){console.log("🎛️ UI setSpeedMultiplier called with:",i),console.trace("Stack trace:");const e="×";if($.speedLabel&&($.speedLabel.textContent=i+e),$.speedBtn){const t=i>1;$.speedBtn.setAttribute("aria-pressed",t?"true":"false"),$.speedBtn.classList.toggle("active",t),$.speedBtn.title=t?"Back to 1"+e:"Toggle 2"+e+" speed"}}function Zs(i,e=null){if(!$.webgpuWrap||!$.webgpuStatus)return;$.webgpuWrap.setAttribute("data-status",i);const n=e||{checking:"Checking...",enabled:"WebGPU Active",disabled:"WebGL Fallback",error:"GPU Error"}[i]||"Unknown";$.webgpuStatus.textContent=n;let r="";switch(i){case"enabled":r="WebGPU is active - enhanced performance available";break;case"disabled":r="WebGPU not supported - using WebGL fallback (requires dedicated GPU)";break;case"error":r="WebGPU initialization failed";break;case"checking":r="Checking WebGPU support...";break}$.webgpuWrap.title=r,$.webgpuWrap.style.cursor="default",$.webgpuWrap.onclick=null}function Sg(i){if(!i||!$.webgpuStatus)return;const e=Math.round(i.fps||0),t=(i.gpuTime||0).toFixed(1);$.webgpuStatus.textContent=`WebGPU Active (${e}fps)`,$.webgpuWrap.title=`WebGPU Performance: ${e} FPS, GPU Time: ${t}ms`}var zn={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(i){(function(){var e=function(){this.init()};e.prototype={init:function(){var a=this||t;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var c=this||t;if(a=parseFloat(a),c.ctx||p(),typeof a<"u"&&a>=0&&a<=1){if(c._volume=a,c._muted)return c;c.usingWebAudio&&c.masterGain.gain.setValueAtTime(a,t.ctx.currentTime);for(var d=0;d<c._howls.length;d++)if(!c._howls[d]._webAudio)for(var g=c._howls[d]._getSoundIds(),_=0;_<g.length;_++){var m=c._howls[d]._soundById(g[_]);m&&m._node&&(m._node.volume=m._volume*a)}return c}return c._volume},mute:function(a){var c=this||t;c.ctx||p(),c._muted=a,c.usingWebAudio&&c.masterGain.gain.setValueAtTime(a?0:c._volume,t.ctx.currentTime);for(var d=0;d<c._howls.length;d++)if(!c._howls[d]._webAudio)for(var g=c._howls[d]._getSoundIds(),_=0;_<g.length;_++){var m=c._howls[d]._soundById(g[_]);m&&m._node&&(m._node.muted=a?!0:m._muted)}return c},stop:function(){for(var a=this||t,c=0;c<a._howls.length;c++)a._howls[c].stop();return a},unload:function(){for(var a=this||t,c=a._howls.length-1;c>=0;c--)a._howls[c].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,p()),a},codecs:function(a){return(this||t)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||t;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var c=new Audio;typeof c.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var c=new Audio;c.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||t,c=null;try{c=typeof Audio<"u"?new Audio:null}catch{return a}if(!c||typeof c.canPlayType!="function")return a;var d=c.canPlayType("audio/mpeg;").replace(/^no$/,""),g=a._navigator?a._navigator.userAgent:"",_=g.match(/OPR\/(\d+)/g),m=_&&parseInt(_[0].split("/")[1],10)<33,f=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,x=g.match(/Version\/(.*?) /),v=f&&x&&parseInt(x[1],10)<15;return a._codecs={mp3:!!(!m&&(d||c.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(c.canPlayType('audio/wav; codecs="1"')||c.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!c.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!c.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(c.canPlayType("audio/x-m4a;")||c.canPlayType("audio/m4a;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(c.canPlayType("audio/x-m4b;")||c.canPlayType("audio/m4b;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(c.canPlayType("audio/x-mp4;")||c.canPlayType("audio/mp4;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!c.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(c.canPlayType("audio/x-flac;")||c.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||t;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var c=function(d){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,a._releaseHtml5Audio(g)}catch{a.noAudio=!0;break}for(var _=0;_<a._howls.length;_++)if(!a._howls[_]._webAudio)for(var m=a._howls[_]._getSoundIds(),f=0;f<m.length;f++){var x=a._howls[_]._soundById(m[f]);x&&x._node&&!x._node._unlocked&&(x._node._unlocked=!0,x._node.load())}a._autoResume();var v=a.ctx.createBufferSource();v.buffer=a._scratchBuffer,v.connect(a.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),v.onended=function(){v.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",c,!0),document.removeEventListener("touchend",c,!0),document.removeEventListener("click",c,!0),document.removeEventListener("keydown",c,!0);for(var b=0;b<a._howls.length;b++)a._howls[b]._emit("unlock")}};return document.addEventListener("touchstart",c,!0),document.addEventListener("touchend",c,!0),document.addEventListener("click",c,!0),document.addEventListener("keydown",c,!0),a}},_obtainHtml5Audio:function(){var a=this||t;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var c=new Audio().play();return c&&typeof Promise<"u"&&(c instanceof Promise||typeof c.then=="function")&&c.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var c=this||t;return a._unlocked&&c._html5AudioPool.push(a),c},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!t.usingWebAudio)){for(var c=0;c<a._howls.length;c++)if(a._howls[c]._webAudio){for(var d=0;d<a._howls[c]._sounds.length;d++)if(!a._howls[c]._sounds[d]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var g=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(g,g)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!t.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var c=0;c<a._howls.length;c++)a._howls[c]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var t=new e,n=function(a){var c=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}c.init(a)};n.prototype={init:function(a){var c=this;return t.ctx||p(),c._autoplay=a.autoplay||!1,c._format=typeof a.format!="string"?a.format:[a.format],c._html5=a.html5||!1,c._muted=a.mute||!1,c._loop=a.loop||!1,c._pool=a.pool||5,c._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,c._rate=a.rate||1,c._sprite=a.sprite||{},c._src=typeof a.src!="string"?a.src:[a.src],c._volume=a.volume!==void 0?a.volume:1,c._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},c._duration=0,c._state="unloaded",c._sounds=[],c._endTimers={},c._queue=[],c._playLock=!1,c._onend=a.onend?[{fn:a.onend}]:[],c._onfade=a.onfade?[{fn:a.onfade}]:[],c._onload=a.onload?[{fn:a.onload}]:[],c._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],c._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],c._onpause=a.onpause?[{fn:a.onpause}]:[],c._onplay=a.onplay?[{fn:a.onplay}]:[],c._onstop=a.onstop?[{fn:a.onstop}]:[],c._onmute=a.onmute?[{fn:a.onmute}]:[],c._onvolume=a.onvolume?[{fn:a.onvolume}]:[],c._onrate=a.onrate?[{fn:a.onrate}]:[],c._onseek=a.onseek?[{fn:a.onseek}]:[],c._onunlock=a.onunlock?[{fn:a.onunlock}]:[],c._onresume=[],c._webAudio=t.usingWebAudio&&!c._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(c),c._autoplay&&c._queue.push({event:"play",action:function(){c.play()}}),c._preload&&c._preload!=="none"&&c.load(),c},load:function(){var a=this,c=null;if(t.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var d=0;d<a._src.length;d++){var g,_;if(a._format&&a._format[d])g=a._format[d];else{if(_=a._src[d],typeof _!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(_),g||(g=/\.([^.]+)$/.exec(_.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&t.codecs(g)){c=a._src[d];break}}if(!c){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=c,a._state="loading",window.location.protocol==="https:"&&c.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new r(a),a._webAudio&&o(a),a},play:function(a,c){var d=this,g=null;if(typeof a=="number")g=a,a=null;else{if(typeof a=="string"&&d._state==="loaded"&&!d._sprite[a])return null;if(typeof a>"u"&&(a="__default",!d._playLock)){for(var _=0,m=0;m<d._sounds.length;m++)d._sounds[m]._paused&&!d._sounds[m]._ended&&(_++,g=d._sounds[m]._id);_===1?a=null:g=null}}var f=g?d._soundById(g):d._inactiveSound();if(!f)return null;if(g&&!a&&(a=f._sprite||"__default"),d._state!=="loaded"){f._sprite=a,f._ended=!1;var x=f._id;return d._queue.push({event:"play",action:function(){d.play(x)}}),x}if(g&&!f._paused)return c||d._loadQueue("play"),f._id;d._webAudio&&t._autoResume();var v=Math.max(0,f._seek>0?f._seek:d._sprite[a][0]/1e3),b=Math.max(0,(d._sprite[a][0]+d._sprite[a][1])/1e3-v),w=b*1e3/Math.abs(f._rate),T=d._sprite[a][0]/1e3,P=(d._sprite[a][0]+d._sprite[a][1])/1e3;f._sprite=a,f._ended=!1;var D=function(){f._paused=!1,f._seek=v,f._start=T,f._stop=P,f._loop=!!(f._loop||d._sprite[a][2])};if(v>=P){d._ended(f);return}var y=f._node;if(d._webAudio){var A=function(){d._playLock=!1,D(),d._refreshBuffer(f);var O=f._muted||d._muted?0:f._volume;y.gain.setValueAtTime(O,t.ctx.currentTime),f._playStart=t.ctx.currentTime,typeof y.bufferSource.start>"u"?f._loop?y.bufferSource.noteGrainOn(0,v,86400):y.bufferSource.noteGrainOn(0,v,b):f._loop?y.bufferSource.start(0,v,86400):y.bufferSource.start(0,v,b),w!==1/0&&(d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),w)),c||setTimeout(function(){d._emit("play",f._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?A():(d._playLock=!0,d.once("resume",A),d._clearTimer(f._id))}else{var W=function(){y.currentTime=v,y.muted=f._muted||d._muted||t._muted||y.muted,y.volume=f._volume*t.volume(),y.playbackRate=f._rate;try{var O=y.play();if(O&&typeof Promise<"u"&&(O instanceof Promise||typeof O.then=="function")?(d._playLock=!0,D(),O.then(function(){d._playLock=!1,y._unlocked=!0,c?d._loadQueue():d._emit("play",f._id)}).catch(function(){d._playLock=!1,d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):c||(d._playLock=!1,D(),d._emit("play",f._id)),y.playbackRate=f._rate,y.paused){d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||f._loop?d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),w):(d._endTimers[f._id]=function(){d._ended(f),y.removeEventListener("ended",d._endTimers[f._id],!1)},y.addEventListener("ended",d._endTimers[f._id],!1))}catch(z){d._emit("playerror",f._id,z)}};y.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(y.src=d._src,y.load());var j=window&&window.ejecta||!y.readyState&&t._navigator.isCocoonJS;if(y.readyState>=3||j)W();else{d._playLock=!0,d._state="loading";var N=function(){d._state="loaded",W(),y.removeEventListener(t._canPlayEvent,N,!1)};y.addEventListener(t._canPlayEvent,N,!1),d._clearTimer(f._id)}}return f._id},pause:function(a){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"pause",action:function(){c.pause(a)}}),c;for(var d=c._getSoundIds(a),g=0;g<d.length;g++){c._clearTimer(d[g]);var _=c._soundById(d[g]);if(_&&!_._paused&&(_._seek=c.seek(d[g]),_._rateSeek=0,_._paused=!0,c._stopFade(d[g]),_._node))if(c._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),c._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||c._emit("pause",_?_._id:null)}return c},stop:function(a,c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(a)}}),d;for(var g=d._getSoundIds(a),_=0;_<g.length;_++){d._clearTimer(g[_]);var m=d._soundById(g[_]);m&&(m._seek=m._start||0,m._rateSeek=0,m._paused=!0,m._ended=!0,d._stopFade(g[_]),m._node&&(d._webAudio?m._node.bufferSource&&(typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),d._cleanBuffer(m._node)):(!isNaN(m._node.duration)||m._node.duration===1/0)&&(m._node.currentTime=m._start||0,m._node.pause(),m._node.duration===1/0&&d._clearSound(m._node))),c||d._emit("stop",m._id))}return d},mute:function(a,c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(a,c)}}),d;if(typeof c>"u")if(typeof a=="boolean")d._muted=a;else return d._muted;for(var g=d._getSoundIds(c),_=0;_<g.length;_++){var m=d._soundById(g[_]);m&&(m._muted=a,m._interval&&d._stopFade(m._id),d._webAudio&&m._node?m._node.gain.setValueAtTime(a?0:m._volume,t.ctx.currentTime):m._node&&(m._node.muted=t._muted?!0:a),d._emit("mute",m._id))}return d},volume:function(){var a=this,c=arguments,d,g;if(c.length===0)return a._volume;if(c.length===1||c.length===2&&typeof c[1]>"u"){var _=a._getSoundIds(),m=_.indexOf(c[0]);m>=0?g=parseInt(c[0],10):d=parseFloat(c[0])}else c.length>=2&&(d=parseFloat(c[0]),g=parseInt(c[1],10));var f;if(typeof d<"u"&&d>=0&&d<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,c)}}),a;typeof g>"u"&&(a._volume=d),g=a._getSoundIds(g);for(var x=0;x<g.length;x++)f=a._soundById(g[x]),f&&(f._volume=d,c[2]||a._stopFade(g[x]),a._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(d,t.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=d*t.volume()),a._emit("volume",f._id))}else return f=g?a._soundById(g):a._sounds[0],f?f._volume:0;return a},fade:function(a,c,d,g){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(a,c,d,g)}}),_;a=Math.min(Math.max(0,parseFloat(a)),1),c=Math.min(Math.max(0,parseFloat(c)),1),d=parseFloat(d),_.volume(a,g);for(var m=_._getSoundIds(g),f=0;f<m.length;f++){var x=_._soundById(m[f]);if(x){if(g||_._stopFade(m[f]),_._webAudio&&!x._muted){var v=t.ctx.currentTime,b=v+d/1e3;x._volume=a,x._node.gain.setValueAtTime(a,v),x._node.gain.linearRampToValueAtTime(c,b)}_._startFadeInterval(x,a,c,d,m[f],typeof g>"u")}}return _},_startFadeInterval:function(a,c,d,g,_,m){var f=this,x=c,v=d-c,b=Math.abs(v/.01),w=Math.max(4,b>0?g/b:g),T=Date.now();a._fadeTo=d,a._interval=setInterval(function(){var P=(Date.now()-T)/g;T=Date.now(),x+=v*P,x=Math.round(x*100)/100,v<0?x=Math.max(d,x):x=Math.min(d,x),f._webAudio?a._volume=x:f.volume(x,a._id,!0),m&&(f._volume=x),(d<c&&x<=d||d>c&&x>=d)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,f.volume(d,a._id),f._emit("fade",a._id))},w)},_stopFade:function(a){var c=this,d=c._soundById(a);return d&&d._interval&&(c._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,c.volume(d._fadeTo,a),d._fadeTo=null,c._emit("fade",a)),c},loop:function(){var a=this,c=arguments,d,g,_;if(c.length===0)return a._loop;if(c.length===1)if(typeof c[0]=="boolean")d=c[0],a._loop=d;else return _=a._soundById(parseInt(c[0],10)),_?_._loop:!1;else c.length===2&&(d=c[0],g=parseInt(c[1],10));for(var m=a._getSoundIds(g),f=0;f<m.length;f++)_=a._soundById(m[f]),_&&(_._loop=d,a._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=d,d&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,a.playing(m[f])&&(a.pause(m[f],!0),a.play(m[f],!0)))));return a},rate:function(){var a=this,c=arguments,d,g;if(c.length===0)g=a._sounds[0]._id;else if(c.length===1){var _=a._getSoundIds(),m=_.indexOf(c[0]);m>=0?g=parseInt(c[0],10):d=parseFloat(c[0])}else c.length===2&&(d=parseFloat(c[0]),g=parseInt(c[1],10));var f;if(typeof d=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,c)}}),a;typeof g>"u"&&(a._rate=d),g=a._getSoundIds(g);for(var x=0;x<g.length;x++)if(f=a._soundById(g[x]),f){a.playing(g[x])&&(f._rateSeek=a.seek(g[x]),f._playStart=a._webAudio?t.ctx.currentTime:f._playStart),f._rate=d,a._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):f._node&&(f._node.playbackRate=d);var v=a.seek(g[x]),b=(a._sprite[f._sprite][0]+a._sprite[f._sprite][1])/1e3-v,w=b*1e3/Math.abs(f._rate);(a._endTimers[g[x]]||!f._paused)&&(a._clearTimer(g[x]),a._endTimers[g[x]]=setTimeout(a._ended.bind(a,f),w)),a._emit("rate",f._id)}}else return f=a._soundById(g),f?f._rate:a._rate;return a},seek:function(){var a=this,c=arguments,d,g;if(c.length===0)a._sounds.length&&(g=a._sounds[0]._id);else if(c.length===1){var _=a._getSoundIds(),m=_.indexOf(c[0]);m>=0?g=parseInt(c[0],10):a._sounds.length&&(g=a._sounds[0]._id,d=parseFloat(c[0]))}else c.length===2&&(d=parseFloat(c[0]),g=parseInt(c[1],10));if(typeof g>"u")return 0;if(typeof d=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,c)}}),a;var f=a._soundById(g);if(f)if(typeof d=="number"&&d>=0){var x=a.playing(g);x&&a.pause(g,!0),f._seek=d,f._ended=!1,a._clearTimer(g),!a._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=d);var v=function(){x&&a.play(g,!0),a._emit("seek",g)};if(x&&!a._webAudio){var b=function(){a._playLock?setTimeout(b,0):v()};setTimeout(b,0)}else v()}else if(a._webAudio){var w=a.playing(g)?t.ctx.currentTime-f._playStart:0,T=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(T+w*Math.abs(f._rate))}else return f._node.currentTime;return a},playing:function(a){var c=this;if(typeof a=="number"){var d=c._soundById(a);return d?!d._paused:!1}for(var g=0;g<c._sounds.length;g++)if(!c._sounds[g]._paused)return!0;return!1},duration:function(a){var c=this,d=c._duration,g=c._soundById(a);return g&&(d=c._sprite[g._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var a=this,c=a._sounds,d=0;d<c.length;d++)c[d]._paused||a.stop(c[d]._id),a._webAudio||(a._clearSound(c[d]._node),c[d]._node.removeEventListener("error",c[d]._errorFn,!1),c[d]._node.removeEventListener(t._canPlayEvent,c[d]._loadFn,!1),c[d]._node.removeEventListener("ended",c[d]._endFn,!1),t._releaseHtml5Audio(c[d]._node)),delete c[d]._node,a._clearTimer(c[d]._id);var g=t._howls.indexOf(a);g>=0&&t._howls.splice(g,1);var _=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===a._src||a._src.indexOf(t._howls[d]._src)>=0){_=!1;break}return s&&_&&delete s[a._src],t.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,c,d,g){var _=this,m=_["_on"+a];return typeof c=="function"&&m.push(g?{id:d,fn:c,once:g}:{id:d,fn:c}),_},off:function(a,c,d){var g=this,_=g["_on"+a],m=0;if(typeof c=="number"&&(d=c,c=null),c||d)for(m=0;m<_.length;m++){var f=d===_[m].id;if(c===_[m].fn&&f||!c&&f){_.splice(m,1);break}}else if(a)g["_on"+a]=[];else{var x=Object.keys(g);for(m=0;m<x.length;m++)x[m].indexOf("_on")===0&&Array.isArray(g[x[m]])&&(g[x[m]]=[])}return g},once:function(a,c,d){var g=this;return g.on(a,c,d,1),g},_emit:function(a,c,d){for(var g=this,_=g["_on"+a],m=_.length-1;m>=0;m--)(!_[m].id||_[m].id===c||a==="load")&&(setTimeout(function(f){f.call(this,c,d)}.bind(g,_[m].fn),0),_[m].once&&g.off(a,_[m].fn,_[m].id));return g._loadQueue(a),g},_loadQueue:function(a){var c=this;if(c._queue.length>0){var d=c._queue[0];d.event===a&&(c._queue.shift(),c._loadQueue()),a||d.action()}return c},_ended:function(a){var c=this,d=a._sprite;if(!c._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(c._ended.bind(c,a),100),c;var g=!!(a._loop||c._sprite[d][2]);if(c._emit("end",a._id),!c._webAudio&&g&&c.stop(a._id,!0).play(a._id),c._webAudio&&g){c._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=t.ctx.currentTime;var _=(a._stop-a._start)*1e3/Math.abs(a._rate);c._endTimers[a._id]=setTimeout(c._ended.bind(c,a),_)}return c._webAudio&&!g&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,c._clearTimer(a._id),c._cleanBuffer(a._node),t._autoSuspend()),!c._webAudio&&!g&&c.stop(a._id,!0),c},_clearTimer:function(a){var c=this;if(c._endTimers[a]){if(typeof c._endTimers[a]!="function")clearTimeout(c._endTimers[a]);else{var d=c._soundById(a);d&&d._node&&d._node.removeEventListener("ended",c._endTimers[a],!1)}delete c._endTimers[a]}return c},_soundById:function(a){for(var c=this,d=0;d<c._sounds.length;d++)if(a===c._sounds[d]._id)return c._sounds[d];return null},_inactiveSound:function(){var a=this;a._drain();for(var c=0;c<a._sounds.length;c++)if(a._sounds[c]._ended)return a._sounds[c].reset();return new r(a)},_drain:function(){var a=this,c=a._pool,d=0,g=0;if(!(a._sounds.length<c)){for(g=0;g<a._sounds.length;g++)a._sounds[g]._ended&&d++;for(g=a._sounds.length-1;g>=0;g--){if(d<=c)return;a._sounds[g]._ended&&(a._webAudio&&a._sounds[g]._node&&a._sounds[g]._node.disconnect(0),a._sounds.splice(g,1),d--)}}},_getSoundIds:function(a){var c=this;if(typeof a>"u"){for(var d=[],g=0;g<c._sounds.length;g++)d.push(c._sounds[g]._id);return d}else return[a]},_refreshBuffer:function(a){var c=this;return a._node.bufferSource=t.ctx.createBufferSource(),a._node.bufferSource.buffer=s[c._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,t.ctx.currentTime),c},_cleanBuffer:function(a){var c=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return c;if(t._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),d))try{a.bufferSource.buffer=t._scratchBuffer}catch{}return a.bufferSource=null,c},_clearSound:function(a){var c=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);c||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var r=function(a){this._parent=a,this.init()};r.prototype={init:function(){var a=this,c=a._parent;return a._muted=c._muted,a._loop=c._loop,a._volume=c._volume,a._rate=c._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,c._sounds.push(a),a.create(),a},create:function(){var a=this,c=a._parent,d=t._muted||a._muted||a._parent._muted?0:a._volume;return c._webAudio?(a._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),a._node.gain.setValueAtTime(d,t.ctx.currentTime),a._node.paused=!0,a._node.connect(t.masterGain)):t.noAudio||(a._node=t._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(t._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=c._src,a._node.preload=c._preload===!0?"auto":c._preload,a._node.volume=d*t.volume(),a._node.load()),a},reset:function(){var a=this,c=a._parent;return a._muted=c._muted,a._loop=c._loop,a._volume=c._volume,a._rate=c._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,c=a._parent;c._duration=Math.ceil(a._node.duration*10)/10,Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue()),a._node.removeEventListener(t._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,c=a._parent;c._duration===1/0&&(c._duration=Math.ceil(a._node.duration*10)/10,c._sprite.__default[1]===1/0&&(c._sprite.__default[1]=c._duration*1e3),c._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var s={},o=function(a){var c=a._src;if(s[c]){a._duration=s[c].duration,u(a);return}if(/^data:[^;]+;base64,/.test(c)){for(var d=atob(c.split(",")[1]),g=new Uint8Array(d.length),_=0;_<d.length;++_)g[_]=d.charCodeAt(_);h(g.buffer,a)}else{var m=new XMLHttpRequest;m.open(a._xhr.method,c,!0),m.withCredentials=a._xhr.withCredentials,m.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(f){m.setRequestHeader(f,a._xhr.headers[f])}),m.onload=function(){var f=(m.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+m.status+".");return}h(m.response,a)},m.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete s[c],a.load())},l(m)}},l=function(a){try{a.send()}catch{a.onerror()}},h=function(a,c){var d=function(){c._emit("loaderror",null,"Decoding audio data failed.")},g=function(_){_&&c._sounds.length>0?(s[c._src]=_,u(c,_)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(a).then(g).catch(d):t.ctx.decodeAudioData(a,g,d)},u=function(a,c){c&&!a._duration&&(a._duration=c.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},p=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),c=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=c?parseInt(c[1],10):null;if(a&&d&&d<9){var g=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!g&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};i.Howler=t,i.Howl=n,typeof gi<"u"?(gi.HowlerGlobal=e,gi.Howler=t,gi.Howl=n,gi.Sound=r):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=r)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var r=n._howls.length-1;r>=0;r--)n._howls[r].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,r){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,r=typeof r!="number"?s._pos[2]:r,typeof t=="number")s._pos=[t,n,r],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,r,s,o,l){var h=this;if(!h.ctx||!h.ctx.listener)return h;var u=h._orientation;if(n=typeof n!="number"?u[1]:n,r=typeof r!="number"?u[2]:r,s=typeof s!="number"?u[3]:s,o=typeof o!="number"?u[4]:o,l=typeof l!="number"?u[5]:l,typeof t=="number")h._orientation=[t,n,r,s,o,l],typeof h.ctx.listener.forwardX<"u"?(h.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),h.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),h.ctx.listener.forwardZ.setTargetAtTime(r,Howler.ctx.currentTime,.1),h.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),h.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),h.ctx.listener.upZ.setTargetAtTime(l,Howler.ctx.currentTime,.1)):h.ctx.listener.setOrientation(t,n,r,s,o,l);else return u;return h},Howl.prototype.init=function(t){return function(n){var r=this;return r._orientation=n.orientation||[1,0,0],r._stereo=n.stereo||null,r._pos=n.pos||null,r._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},r._onstereo=n.onstereo?[{fn:n.onstereo}]:[],r._onpos=n.onpos?[{fn:n.onpos}]:[],r._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var r=this;if(!r._webAudio)return r;if(r._state!=="loaded")return r._queue.push({event:"stereo",action:function(){r.stereo(t,n)}}),r;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")r._stereo=t,r._pos=[t,0,0];else return r._stereo;for(var o=r._getSoundIds(n),l=0;l<o.length;l++){var h=r._soundById(o[l]);if(h)if(typeof t=="number")h._stereo=t,h._pos=[t,0,0],h._node&&(h._pannerAttr.panningModel="equalpower",(!h._panner||!h._panner.pan)&&e(h,s),s==="spatial"?typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):h._panner.setPosition(t,0,0):h._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),r._emit("stereo",h._id);else return h._stereo}return r},Howl.prototype.pos=function(t,n,r,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,n,r,s)}}),o;if(n=typeof n!="number"?0:n,r=typeof r!="number"?-.5:r,typeof s>"u")if(typeof t=="number")o._pos=[t,n,r];else return o._pos;for(var l=o._getSoundIds(s),h=0;h<l.length;h++){var u=o._soundById(l[h]);if(u)if(typeof t=="number")u._pos=[t,n,r],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setPosition(t,n,r)),o._emit("pos",u._id);else return u._pos}return o},Howl.prototype.orientation=function(t,n,r,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,n,r,s)}}),o;if(n=typeof n!="number"?o._orientation[1]:n,r=typeof r!="number"?o._orientation[2]:r,typeof s>"u")if(typeof t=="number")o._orientation=[t,n,r];else return o._orientation;for(var l=o._getSoundIds(s),h=0;h<l.length;h++){var u=o._soundById(l[h]);if(u)if(typeof t=="number")u._orientation=[t,n,r],u._node&&(u._panner||(u._pos||(u._pos=o._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setOrientation(t,n,r)),o._emit("orientation",u._id);else return u._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,r,s,o;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")r=n[0],typeof s>"u"&&(r.pannerAttr||(r.pannerAttr={coneInnerAngle:r.coneInnerAngle,coneOuterAngle:r.coneOuterAngle,coneOuterGain:r.coneOuterGain,distanceModel:r.distanceModel,maxDistance:r.maxDistance,refDistance:r.refDistance,rolloffFactor:r.rolloffFactor,panningModel:r.panningModel}),t._pannerAttr={coneInnerAngle:typeof r.pannerAttr.coneInnerAngle<"u"?r.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof r.pannerAttr.coneOuterAngle<"u"?r.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof r.pannerAttr.coneOuterGain<"u"?r.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof r.pannerAttr.distanceModel<"u"?r.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof r.pannerAttr.maxDistance<"u"?r.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof r.pannerAttr.refDistance<"u"?r.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof r.pannerAttr.rolloffFactor<"u"?r.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof r.pannerAttr.panningModel<"u"?r.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(n[0],10)),o?o._pannerAttr:t._pannerAttr;else n.length===2&&(r=n[0],s=parseInt(n[1],10));for(var l=t._getSoundIds(s),h=0;h<l.length;h++)if(o=t._soundById(l[h]),o){var u=o._pannerAttr;u={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:u.coneOuterGain,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:u.distanceModel,maxDistance:typeof r.maxDistance<"u"?r.maxDistance:u.maxDistance,refDistance:typeof r.refDistance<"u"?r.refDistance:u.refDistance,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:u.rolloffFactor,panningModel:typeof r.panningModel<"u"?r.panningModel:u.panningModel};var p=o._panner;p||(o._pos||(o._pos=t._pos||[0,0,-.5]),e(o,"spatial"),p=o._panner),p.coneInnerAngle=u.coneInnerAngle,p.coneOuterAngle=u.coneOuterAngle,p.coneOuterGain=u.coneOuterGain,p.distanceModel=u.distanceModel,p.maxDistance=u.maxDistance,p.refDistance=u.refDistance,p.rolloffFactor=u.rolloffFactor,p.panningModel=u.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,r=n._parent;n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,t.call(this),n._stereo?r.stereo(n._stereo):n._pos&&r.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,r=n._parent;return n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,n._stereo?r.stereo(n._stereo):n._pos?r.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,r._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(zn);const Oi=new Map([["gameover",{src:"assets/sfx/house_expire.wav",howl:null,loop:!1}],["route_commit",{src:"assets/sfx/route_commit.wav",howl:null,loop:!1}],["house_spawn",{src:"assets/sfx/house_spawn.wav",howl:null,loop:!1}],["house_expire",{src:"assets/sfx/house_expire.wav",howl:null,loop:!1}],["week_complete",{src:"assets/sfx/week_complete.wav",howl:null,loop:!1}],["bg_music",{src:"assets/sfx/bg.mp3",howl:null,loop:!0}]]);let vi=1,Vt=null;const Hl=new Map,Vl=new Map;function Mg(i={}){if(vi=i.volume??1,typeof zn.Howler<"u"){zn.Howler.volume(vi),console.log("🔊 Preloading all audio assets...");for(const[e,t]of Oi)t.howl=new zn.Howl({src:[t.src],loop:t.loop,volume:vi,preload:!0,html5:!1,onload:()=>{console.log(`✅ Audio loaded: ${e}`)},onloaderror:(n,r)=>{console.warn(`❌ Audio load error for ${e}:`,r)}});for(const[e,t]of Oi)t.howl&&t.howl.load();console.log("🔊 All audio assets preloaded")}else typeof window<"u"&&window.AudioContext&&(Vt=new AudioContext,Eg().catch(e=>console.warn("Audio preload failed",e)))}function bg(i){if(vi=i,typeof zn.Howler<"u")zn.Howler.volume(i);else if(Vl.size)for(const[,e]of Vl)e.gain.value=i}function xi(i){console.log(`🔊 Audio.play called for: ${i}`);const e=Oi.get(i);if(!e){console.warn(`❌ Sound "${i}" not found in sounds map`);return}e.howl?(console.log(`✅ Playing sound: ${i} with Howl`),e.howl.volume(vi),e.howl.play()):(console.log(`⚠️ Using fallback for sound: ${i}`),Ag(i,!1))}async function Eg(){for(const[i,e]of Oi)try{const n=await(await fetch(e.src)).arrayBuffer(),r=await wg(n);Hl.set(i,r)}catch(t){console.warn("Failed to load",i,t)}}async function wg(i){return Vt?(Vt.state==="suspended"&&await Vt.resume(),new Promise((e,t)=>{Vt.decodeAudioData(i.slice(0),e,t)})):null}function Ag(i,e){if(!Vt)return;const t=Hl.get(i);if(!t){console.warn("Missing fallback buffer",i);return}Vt.state==="suspended"&&Vt.resume().catch(()=>{});const n=Vt.createBufferSource();n.buffer=t,n.loop=e;const r=Vt.createGain();r.gain.value=vi,n.connect(r).connect(Vt.destination),n.start(0)}let Qs=.3;function Tg(i){if(Qs=Math.max(0,Math.min(1,i)),console.log(`🎵 Background music volume set to: ${Qs}`),typeof zn.Howler<"u"){const e=Oi.get("bg_music");e&&e.howl&&e.howl.volume(Qs)}}function Rg(){console.log("🎵 Starting background music..."),xi("bg_music")}const Wl="pp_highscore",Xl="pp_settings_v1";function Cg(){try{if(typeof window>"u")return null;const{localStorage:i}=window,e="__pp_test__";return i.setItem(e,"1"),i.removeItem(e),i}catch(i){return console.warn("LocalStorage unavailable",i),null}}const bn=Cg();function ql(){if(!bn)return 0;const i=bn.getItem(Wl),e=i?Number(i):0;return Number.isFinite(e)?e:0}function Pg(i){if(!bn)return;const e=Math.max(i,ql());bn.setItem(Wl,String(e))}function $l(){if(!bn)return{};try{const i=bn.getItem(Xl);return i?JSON.parse(i):{}}catch(i){return console.warn("Failed to parse settings",i),{}}}function Yl(i){if(bn)try{bn.setItem(Xl,JSON.stringify(i))}catch(e){console.warn("Failed to save settings",e)}}const et={WORLD_SIZE:100,GRID_RES:50,CLOSE_SNAP:2,RDP_EPS:0,LINE_WIDTH:3,ROUTE_ATTACH_RADIUS:8,MAX_POINTS:400,MIN_SAMPLE_DIST:.35,BASE_SPEED:9,DELIVERY_RADIUS:2,FIRST_SPAWN_AT:5,SPAWN_INTERVAL_START:14,SPAWN_INTERVAL_END:5,DEADLINE_START:40,DEADLINE_END:18,WEEK_SECONDS:90},L={rng:null,seed:null,debug:!1,stats:null,statsEnabled:!1,gui:null,mapState:null,truck:null,houseManager:null,score:0,week:1,runTime:0,weekTimer:0,highscore:0,takenUpgrades:new Set,pendingCards:[],mode:"boot",lastFrameTime:0,fpsAccum:0,fpsFrames:0,fps:0,paused:!1,settings:{volume:1},gridVisible:!1,routeActive:!1,speedMultiplier:parseInt(localStorage.getItem("parcelPanicSpeedMultiplier"))||1,simTimeMs:0},Lg=new C;Dg();function Dg(){const i=document.getElementById("loading-screen"),e=document.getElementById("loading-fill"),t=document.getElementById("loading-text"),n=document.getElementById("loading-percentage");let r=0;const s=7;function o(l,h){r=Math.round(l/s*100),e.style.width=`${r}%`,t.textContent=h,n.textContent=`${r}%`}setTimeout(()=>{o(1,"Initializing audio system..."),setTimeout(()=>{o(2,"Loading 3D models..."),Qm().then(()=>{o(3,"Loading game assets..."),setTimeout(()=>{o(4,"Setting up WebGPU..."),setTimeout(()=>{o(5,"Initializing game engine..."),setTimeout(()=>{o(6,"Preparing game world..."),setTimeout(()=>{o(7,"Starting game..."),setTimeout(()=>{i.classList.add("hidden"),setTimeout(()=>{i.style.display="none",jl()},500)},500)},300)},300)},400)},200)}).catch(l=>{console.warn("Asset preloading failed, continuing with fallbacks:",l),o(3,"Loading game assets..."),setTimeout(()=>{o(4,"Setting up WebGPU..."),setTimeout(()=>{o(5,"Initializing game engine..."),setTimeout(()=>{o(6,"Preparing game world..."),setTimeout(()=>{o(7,"Starting game..."),setTimeout(()=>{i.classList.add("hidden"),setTimeout(()=>{i.style.display="none",jl()},500)},500)},300)},300)},400)},200)})},200)},100)}function jl(){dg(),xg(ec),yg(tc),Cr(L.paused),Js(L.speedMultiplier);const i=document.querySelector("canvas#stage");dm(i,et),pm((r,s)=>{}),$g();const e=new URL(window.location.href),t=e.searchParams.get("seed"),n=e.searchParams.get("debug");L.debug=n==="1",L.seed=wr(t?Number(t)||t:Math.random()*1e9),e.searchParams.set("seed",String(L.seed)),window.history.replaceState({},"",e.toString()),L.rng=Cl(L.seed),L.highscore=ql(),L.settings={volume:$l().volume??1,bgMusicVolume:$l().bgMusicVolume??.3},_g(L.settings,Xg,qg),Mg(L.settings),console.log("🔊 Audio system initialized"),Rg(),L.mapState=Wm(br(),L.rng,et),L.truck=new ng(et),L.truck.addToScene(br()),L.houseManager=new og(br(),L.mapState,L.rng,et),Fm(br(),L.mapState,et),Om(({curve:r,lut:s,attachInfo:o})=>{const l=o??{u:0};L.truck.attachToCurve(r,s,l.u??0,l.point??null)}),xm(i),zg(),Vg(),Kl(L.seed),L.lastFrameTime=performance.now(),requestAnimationFrame(Jl)}function Kl(i){console.log("🔄 NEW RUN CALLED - Preserving speed:",L.speedMultiplier);const e=L.speedMultiplier;L.seed=i,L.rng=Cl(i),L.houseManager.setRng(L.rng),L.score=0,L.week=1,L.runTime=0,L.weekTimer=et.WEEK_SECONDS,L.paused=!1,L.speedMultiplier=e,L.simTimeMs=0,L.mode="run",L.takenUpgrades.clear(),L.pendingCards=[],L.houseManager.reset(),Cr(L.paused),Js(L.speedMultiplier),kg(),Bl(L.score),zl(L.week),fg(L.seed),Gl(),kl()}function Jl(i){requestAnimationFrame(Jl);const e=Math.min((i-L.lastFrameTime)/1e3,.1);L.lastFrameTime=i,Ug();const n=!L.paused&&L.mode==="run"?e*L.speedMultiplier:0;n>0&&(L.simTimeMs+=n*1e3,Ig(n,L.simTimeMs)),Hg(),Yg(),fm()}function Ug(){Ht("Space")&&ec(),Ht("KeyT")&&tc(),Ht("KeyG")&&(L.gridVisible=!L.gridVisible,Xm(L.mapState,L.gridVisible)),Ht("KeyD")&&(L.debug=!L.debug,Wg(L.debug)),Ht("Backquote")&&(L.statsEnabled=!L.statsEnabled,L.stats&&(L.stats.dom.style.display=L.statsEnabled?"block":"none")),L.mode==="upgrade"&&(Ht("Digit1")&&Rr(0),Ht("Digit2")&&Rr(1),Ht("Digit3")&&Rr(2)),Ht("Enter")&&(console.log("⌨️ Enter key pressed - attempting to commit route"),El(!0,{anchor:L.truck.group.position,attachRadius:et.ROUTE_ATTACH_RADIUS})?(console.log("✅ Route committed successfully"),L.routeActive=!1,console.log("🔊 Playing route_commit sound (Enter key)"),xi("route_commit")):(console.log("❌ Route commit failed - route cancelled"),Ni(),L.routeActive=!1)),L.routeActive&&Ht("Escape")&&(Ni(),L.routeActive=!1),Ht("KeyR")&&Ql()}function Ig(i,e){L.runTime+=i,L.weekTimer-=i,hg(L.weekTimer);const t=L.houseManager.getHouses();if(L.truck.update(i,{houses:t,onDeliver:Fg,now:e}),L.houseManager.update(i,e)){xi("house_expire"),Bg();return}L.houseManager.wasJustSpawned()&&(console.log("🔊 Playing house_spawn sound"),xi("house_spawn")),L.weekTimer<=0&&Ng(),Gg(i)}function Fg(i,e){const t=typeof e=="number"?e:performance.now();L.houseManager.handleDelivery(i,t),L.score+=1,Bl(L.score)}function Ng(){L.mode="upgrade",L.week+=1,zl(L.week),L.weekTimer=et.WEEK_SECONDS,L.houseManager.resetWeek(),xi("week_complete"),L.pendingCards=ug(L.rng,L.takenUpgrades,3,{truck:L.truck,config:et,houseManager:L.houseManager}),mg(L.pendingCards,Og),L.paused=!0}function Og(i){i&&(i.apply({truck:L.truck,config:et,houseManager:L.houseManager}),L.takenUpgrades.add(i.id),kl(),L.mode="run",L.paused=!1)}function Bg(i){L.mode="gameover",L.paused=!0;const e=Math.max(L.score,L.highscore);Pg(L.score),L.highscore=e,gg({score:L.score,highscore:e,seed:L.seed},{onRetry:()=>Zl(L.seed),onNewRun:()=>Zl(wr(Math.random()*1e9))}),xi("gameover")}function Zl(i){Gl();const e=new URL(window.location.href);e.searchParams.set("seed",String(i)),window.history.replaceState({},"",e.toString()),Kl(i),L.lastFrameTime=performance.now()}function Ql(){L.mode==="run"&&(bl(),L.routeActive=!0)}function zg(){Hs("pointer-down",i=>{if(i.button!==0||L.mode!=="run")return;Ql();const e=ea(i);e&&Er(e,!0)}),Hs("pointer-sample",i=>{if(!L.routeActive||!i.down)return;const e=ea(i);e&&Er(e)}),Hs("pointer-up",i=>{if(!L.routeActive||i.button!==0)return;const e=ea(i);e&&Er(e,!0),Nm()})}function ea(i){const e=hm();if(!e)return null;const t=Bm(e,{x:i.ndcX,y:i.ndcY},Lg);if(t){const n=et.WORLD_SIZE/2;if(Math.abs(t.x)>n||Math.abs(t.z)>n)return null}return t}function kg(){const i=et.WORLD_SIZE*.3,e=24;bl();for(let t=0;t<=e;t+=1){const n=t/e*Math.PI*2,r=Math.cos(n)*i,s=Math.sin(n)*i;Er({x:r,z:s},!0)}El(),L.routeActive=!1}let ta=!1;function ec(){L.mode!=="gameover"&&(ta=!0,console.log("🎮 PAUSE TOGGLE - Before:",{paused:L.paused,speedMultiplier:L.speedMultiplier}),L.paused=!L.paused,Cr(L.paused),console.log("🎮 PAUSE TOGGLE - After:",{paused:L.paused,speedMultiplier:L.speedMultiplier}),setTimeout(()=>{ta=!1},100))}function tc(){if(ta){console.log("🛡️ BLOCKED SPEED CHANGE - Pause operation in progress");return}const i=L.speedMultiplier;L.speedMultiplier=L.speedMultiplier===1?2:1,localStorage.setItem("parcelPanicSpeedMultiplier",L.speedMultiplier.toString()),console.log("⚡ SPEED TOGGLE:",{from:i,to:L.speedMultiplier}),Js(L.speedMultiplier)}function Gg(i){L.fpsAccum+=i,L.fpsFrames+=1,L.fpsAccum>=.5&&(L.fps=L.fpsFrames/L.fpsAccum,pg(L.fps,L.debug),L.fpsAccum=0,L.fpsFrames=0)}function Hg(){L.stats&&L.statsEnabled&&L.stats.update()}function Vg(){L.debug&&(L.stats=new fl,L.stats.showPanel(0),document.body.appendChild(L.stats.dom),L.statsEnabled=!0,L.gui=new Sr({title:"Parcel Panic"}),L.gui.add(et,"BASE_SPEED",4,20,.1).name("Base Speed"),L.gui.add(et,"DELIVERY_RADIUS",1,6,.1).name("Delivery Radius"),L.gui.add(et,"SPAWN_INTERVAL_END",2,15,.25).name("Spawn Interval End"),L.gui.add(et,"DEADLINE_END",8,40,.5).name("Deadline End"),L.gui.hide())}function Wg(i){i?(L.stats||(L.stats=new fl,L.stats.showPanel(0),document.body.appendChild(L.stats.dom)),L.statsEnabled=!0,L.stats&&(L.stats.dom.style.display="block"),L.gui||(L.gui=new Sr({title:"Parcel Panic"}),L.gui.add(et,"BASE_SPEED",4,20,.1).name("Base Speed"),L.gui.add(et,"DELIVERY_RADIUS",1,6,.1).name("Delivery Radius"),L.gui.add(et,"SPAWN_INTERVAL_END",2,15,.25).name("Spawn Interval End"),L.gui.add(et,"DEADLINE_END",8,40,.5).name("Deadline End"),L.gui.hide())):(L.statsEnabled=!1,L.stats&&(L.stats.dom.style.display="none"),L.gui&&L.gui.hide())}function Xg(i){const e=Math.max(0,Math.min(1,i));L.settings.volume=e,bg(e),Yl({volume:e})}function qg(i){const e=Math.max(0,Math.min(1,i));L.settings.bgMusicVolume=e,Tg(e),Yl({bgMusicVolume:e})}function $g(){Zs("checking"),setTimeout(()=>{vl()?(Zs("enabled"),console.log("✅ WebGPU is active - enhanced performance available")):(Zs("disabled"),console.log("⚠️ WebGPU not available - using WebGL fallback"),console.log("💡 WebGPU requires a dedicated GPU (NVIDIA/AMD graphics card)"))},1e3)}function Yg(){if(vl()){const i=gm();i&&Sg(i)}}})();
