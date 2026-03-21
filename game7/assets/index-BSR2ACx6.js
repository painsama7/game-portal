(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const No="170",Fu=0,ul=1,Ou=2,wc=1,Rc=2,Cn=3,Jn=0,Ie=1,_n=2,$n=0,Ji=1,hl=2,fl=3,dl=4,Bu=5,di=100,zu=101,Gu=102,Hu=103,Vu=104,ku=200,Wu=201,Xu=202,Yu=203,za=204,Ga=205,qu=206,Zu=207,Ku=208,$u=209,ju=210,Ju=211,Qu=212,th=213,eh=214,Ha=0,Va=1,ka=2,sr=3,Wa=4,Xa=5,Ya=6,qa=7,Cc=0,nh=1,ih=2,jn=0,rh=1,sh=2,ah=3,Pc=4,oh=5,lh=6,ch=7,Dc=300,ar=301,or=302,Za=303,Ka=304,Ks=306,$a=1e3,mi=1001,ja=1002,ln=1003,uh=1004,Kr=1005,xn=1006,na=1007,gi=1008,Nn=1009,Lc=1010,Ic=1011,Nr=1012,Fo=1013,xi=1014,Pn=1015,Gr=1016,Oo=1017,Bo=1018,lr=1020,Uc=35902,Nc=1021,Fc=1022,an=1023,Oc=1024,Bc=1025,Qi=1026,cr=1027,zc=1028,zo=1029,Gc=1030,Go=1031,Ho=1033,Es=33776,Ts=33777,As=33778,bs=33779,Ja=35840,Qa=35841,to=35842,eo=35843,no=36196,io=37492,ro=37496,so=37808,ao=37809,oo=37810,lo=37811,co=37812,uo=37813,ho=37814,fo=37815,po=37816,mo=37817,go=37818,_o=37819,xo=37820,vo=37821,ws=36492,Mo=36494,So=36495,Hc=36283,yo=36284,Eo=36285,To=36286,hh=3200,fh=3201,Vc=0,dh=1,Yn="",Ke="srgb",pr="srgb-linear",$s="linear",$t="srgb",Pi=7680,pl=519,ph=512,mh=513,gh=514,kc=515,_h=516,xh=517,vh=518,Mh=519,ml=35044,gl="300 es",Dn=2e3,Ns=2001;class mr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _l=1234567;const Dr=Math.PI/180,Fr=180/Math.PI;function gr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toLowerCase()}function De(n,t,e){return Math.max(t,Math.min(e,n))}function Vo(n,t){return(n%t+t)%t}function Sh(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function yh(n,t,e){return n!==t?(e-n)/(t-n):0}function Lr(n,t,e){return(1-e)*n+e*t}function Eh(n,t,e,i){return Lr(n,t,1-Math.exp(-e*i))}function Th(n,t=1){return t-Math.abs(Vo(n,t*2)-t)}function Ah(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function bh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function wh(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Rh(n,t){return n+Math.random()*(t-n)}function Ch(n){return n*(.5-Math.random())}function Ph(n){n!==void 0&&(_l=n);let t=_l+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dh(n){return n*Dr}function Lh(n){return n*Fr}function Ih(n){return(n&n-1)===0&&n!==0}function Uh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fh(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),u=a((t+i)/2),f=s((t-i)/2),d=a((t-i)/2),m=s((i-t)/2),g=a((i-t)/2);switch(r){case"XYX":n.set(o*u,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const js={DEG2RAD:Dr,RAD2DEG:Fr,generateUUID:gr,clamp:De,euclideanModulo:Vo,mapLinear:Sh,inverseLerp:yh,lerp:Lr,damp:Eh,pingpong:Th,smoothstep:Ah,smootherstep:bh,randInt:wh,randFloat:Rh,randFloatSpread:Ch,seededRandom:Ph,degToRad:Dh,radToDeg:Lh,isPowerOfTwo:Ih,ceilPowerOfTwo:Uh,floorPowerOfTwo:Nh,setQuaternionFromProperEuler:Fh,normalize:Ce,denormalize:Xi};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,i,r,s,a,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],g=i[8],x=r[0],p=r[3],h=r[6],A=r[1],T=r[4],S=r[7],N=r[2],w=r[5],b=r[8];return s[0]=a*x+o*A+l*N,s[3]=a*p+o*T+l*w,s[6]=a*h+o*S+l*b,s[1]=c*x+u*A+f*N,s[4]=c*p+u*T+f*w,s[7]=c*h+u*S+f*b,s[2]=d*x+m*A+g*N,s[5]=d*p+m*T+g*w,s[8]=d*h+m*S+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,g=e*f+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(r*c-u*i)*x,t[2]=(o*i-r*a)*x,t[3]=d*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-o*e)*x,t[6]=m*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ia.makeScale(t,e)),this}rotate(t){return this.premultiply(ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new It;function Wc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Oh(){const n=Fs("canvas");return n.style.display="block",n}const xl={};function Cr(n){n in xl||(xl[n]=!0,console.warn(n))}function Bh(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function zh(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gh(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const kt={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===$t&&(n.r=In(n.r),n.g=In(n.g),n.b=In(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===$t&&(n.r=tr(n.r),n.g=tr(n.g),n.b=tr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Yn?$s:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function In(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const vl=[.64,.33,.3,.6,.15,.06],Ml=[.2126,.7152,.0722],Sl=[.3127,.329],yl=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),El=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);kt.define({[pr]:{primaries:vl,whitePoint:Sl,transfer:$s,toXYZ:yl,fromXYZ:El,luminanceCoefficients:Ml,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:vl,whitePoint:Sl,transfer:$t,toXYZ:yl,fromXYZ:El,luminanceCoefficients:Ml,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}});let Di;class Hh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=Fs("canvas")),Di.width=t.width,Di.height=t.height;const i=Di.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=In(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(In(e[i]/255)*255):e[i]=In(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vh=0;class Xc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=gr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ra(r[a].image)):s.push(ra(r[a]))}else s=ra(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function ra(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kh=0;class Fe extends mr{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,i=mi,r=mi,s=xn,a=gi,o=an,l=Nn,c=Fe.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=gr(),this.name="",this.source=new Xc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $a:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $a:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Dc;Fe.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,i=0,r=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],g=l[9],x=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,S=(m+1)/2,N=(h+1)/2,w=(u+d)/4,b=(f+x)/4,I=(g+p)/4;return T>S&&T>N?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=w/i,s=b/i):S>N?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=I/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=b/s,r=I/s),this.set(i,r,s,e),this}let A=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(f-x)/A,this.z=(d-u)/A,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wh extends mr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Fe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Wh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Yc extends Fe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xh extends Fe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==d||c!==m||u!==g){let p=1-o;const h=l*d+c*m+u*g+f*x,A=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const N=Math.sqrt(T),w=Math.atan2(N,h*A);p=Math.sin(p*w)/N,o=Math.sin(o*w)/N}const S=o*A;if(l=l*p+d*S,c=c*p+m*S,u=u*p+g*S,f=f*p+x*S,p===1-o){const N=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=N,c*=N,u*=N,f*=N}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+u*f+l*m-c*d,t[e+1]=l*g+u*d+c*f-o*m,t[e+2]=c*g+u*m+o*d-l*f,t[e+3]=u*g-o*f-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"YZX":this._x=d*u*f+c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f-d*m*g;break;case"XZY":this._x=d*u*f-c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return sa.copy(this).projectOnVector(t),this.sub(sa)}reflect(t){return this.sub(sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new U,Tl=new Hr;class Vr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(s,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$r.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(t.matrixWorld),this.union($r)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),jr.subVectors(this.max,yr),Li.subVectors(t.a,yr),Ii.subVectors(t.b,yr),Ui.subVectors(t.c,yr),Gn.subVectors(Ii,Li),Hn.subVectors(Ui,Ii),si.subVectors(Li,Ui);let e=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-si.z,si.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,si.z,0,-si.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-si.y,si.x,0];return!aa(e,Li,Ii,Ui,jr)||(e=[1,0,0,0,1,0,0,0,1],!aa(e,Li,Ii,Ui,jr))?!1:(Jr.crossVectors(Gn,Hn),e=[Jr.x,Jr.y,Jr.z],aa(e,Li,Ii,Ui,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Tn=[new U,new U,new U,new U,new U,new U,new U,new U],en=new U,$r=new Vr,Li=new U,Ii=new U,Ui=new U,Gn=new U,Hn=new U,si=new U,yr=new U,jr=new U,Jr=new U,ai=new U;function aa(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ai.fromArray(n,s);const o=r.x*Math.abs(ai.x)+r.y*Math.abs(ai.y)+r.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),u=i.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Yh=new Vr,Er=new U,oa=new U;class kr{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Yh.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);const e=Er.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Er,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(oa)),this.expandByPoint(Er.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new U,la=new U,Qr=new U,Vn=new U,ca=new U,ts=new U,ua=new U;class ko{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){la.copy(t).add(e).multiplyScalar(.5),Qr.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(la);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Qr),o=Vn.dot(this.direction),l=-Vn.dot(Qr),c=Vn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,g;if(u>0)if(f=a*l-o,d=a*o-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(la).addScaledVector(Qr,d),m}intersectSphere(t,e){An.subVectors(t.center,this.origin);const i=An.dot(this.direction),r=An.dot(An)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,i,r,s){ca.subVectors(e,t),ts.subVectors(i,t),ua.crossVectors(ca,ts);let a=this.direction.dot(ua),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);const l=o*this.direction.dot(ts.crossVectors(Vn,ts));if(l<0)return null;const c=o*this.direction.dot(ca.cross(Vn));if(c<0||l+c>a)return null;const u=-o*Vn.dot(ua);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,i,r,s,a,o,l,c,u,f,d,m,g,x,p){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,f,d,m,g,x,p)}set(t,e,i,r,s,a,o,l,c,u,f,d,m,g,x,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=x,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ni.setFromMatrixColumn(t,0).length(),s=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*u,m=a*f,g=o*u,x=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=m+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*f,g=c*u,x=c*f;e[0]=d+x*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*f,g=c*u,x=c*f;e[0]=d-x*o,e[4]=-a*f,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*f,g=o*u,x=o*f;e[0]=l*u,e[4]=g*c-m,e[8]=d*c+x,e[1]=l*f,e[5]=x*c+d,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=x-d*f,e[8]=g*f+m,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*f+g,e[10]=d-x*f}else if(t.order==="XZY"){const d=a*l,m=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+x,e[5]=a*u,e[9]=m*f-g,e[2]=g*f-m,e[6]=o*u,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qh,t,Zh)}lookAt(t,e,i){const r=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),kn.crossVectors(i,ze),kn.lengthSq()===0&&(Math.abs(i.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),kn.crossVectors(i,ze)),kn.normalize(),es.crossVectors(ze,kn),r[0]=kn.x,r[4]=es.x,r[8]=ze.x,r[1]=kn.y,r[5]=es.y,r[9]=ze.y,r[2]=kn.z,r[6]=es.z,r[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],g=i[2],x=i[6],p=i[10],h=i[14],A=i[3],T=i[7],S=i[11],N=i[15],w=r[0],b=r[4],I=r[8],y=r[12],M=r[1],R=r[5],H=r[9],G=r[13],X=r[2],$=r[6],W=r[10],J=r[14],k=r[3],rt=r[7],ut=r[11],Mt=r[15];return s[0]=a*w+o*M+l*X+c*k,s[4]=a*b+o*R+l*$+c*rt,s[8]=a*I+o*H+l*W+c*ut,s[12]=a*y+o*G+l*J+c*Mt,s[1]=u*w+f*M+d*X+m*k,s[5]=u*b+f*R+d*$+m*rt,s[9]=u*I+f*H+d*W+m*ut,s[13]=u*y+f*G+d*J+m*Mt,s[2]=g*w+x*M+p*X+h*k,s[6]=g*b+x*R+p*$+h*rt,s[10]=g*I+x*H+p*W+h*ut,s[14]=g*y+x*G+p*J+h*Mt,s[3]=A*w+T*M+S*X+N*k,s[7]=A*b+T*R+S*$+N*rt,s[11]=A*I+T*H+S*W+N*ut,s[15]=A*y+T*G+S*J+N*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],m=t[14],g=t[3],x=t[7],p=t[11],h=t[15];return g*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+x*(+e*l*m-e*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+e*c*f-e*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-e*l*f+e*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],m=t[11],g=t[12],x=t[13],p=t[14],h=t[15],A=f*p*c-x*d*c+x*l*m-o*p*m-f*l*h+o*d*h,T=g*d*c-u*p*c-g*l*m+a*p*m+u*l*h-a*d*h,S=u*x*c-g*f*c+g*o*m-a*x*m-u*o*h+a*f*h,N=g*f*l-u*x*l-g*o*d+a*x*d+u*o*p-a*f*p,w=e*A+i*T+r*S+s*N;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=A*b,t[1]=(x*d*s-f*p*s-x*r*m+i*p*m+f*r*h-i*d*h)*b,t[2]=(o*p*s-x*l*s+x*r*c-i*p*c-o*r*h+i*l*h)*b,t[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*b,t[4]=T*b,t[5]=(u*p*s-g*d*s+g*r*m-e*p*m-u*r*h+e*d*h)*b,t[6]=(g*l*s-a*p*s-g*r*c+e*p*c+a*r*h-e*l*h)*b,t[7]=(a*d*s-u*l*s+u*r*c-e*d*c-a*r*m+e*l*m)*b,t[8]=S*b,t[9]=(g*f*s-u*x*s-g*i*m+e*x*m+u*i*h-e*f*h)*b,t[10]=(a*x*s-g*o*s+g*i*c-e*x*c-a*i*h+e*o*h)*b,t[11]=(u*o*s-a*f*s-u*i*c+e*f*c+a*i*m-e*o*m)*b,t[12]=N*b,t[13]=(u*x*r-g*f*r+g*i*d-e*x*d-u*i*p+e*f*p)*b,t[14]=(g*o*r-a*x*r-g*i*l+e*x*l+a*i*p-e*o*p)*b,t[15]=(a*f*r-u*o*r+u*i*l-e*f*l-a*i*d+e*o*d)*b,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,g=s*f,x=a*u,p=a*f,h=o*f,A=l*c,T=l*u,S=l*f,N=i.x,w=i.y,b=i.z;return r[0]=(1-(x+h))*N,r[1]=(m+S)*N,r[2]=(g-T)*N,r[3]=0,r[4]=(m-S)*w,r[5]=(1-(d+h))*w,r[6]=(p+A)*w,r[7]=0,r[8]=(g+T)*b,r[9]=(p-A)*b,r[10]=(1-(d+x))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ni.set(r[0],r[1],r[2]).length();const a=Ni.set(r[4],r[5],r[6]).length(),o=Ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],nn.copy(this);const c=1/s,u=1/a,f=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,e.setFromRotationMatrix(nn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Dn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r);let m,g;if(o===Dn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ns)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Dn){const l=this.elements,c=1/(e-t),u=1/(i-r),f=1/(a-s),d=(e+t)*c,m=(i+r)*u;let g,x;if(o===Dn)g=(a+s)*f,x=-2*f;else if(o===Ns)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ni=new U,nn=new se,qh=new U(0,0,0),Zh=new U(1,1,1),kn=new U,es=new U,ze=new U,Al=new se,bl=new Hr;class Mn{constructor(t=0,e=0,i=0,r=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-De(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bl.setFromEuler(this),this.setFromQuaternion(bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class qc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kh=0;const wl=new U,Fi=new Hr,bn=new se,ns=new U,Tr=new U,$h=new U,jh=new Hr,Rl=new U(1,0,0),Cl=new U(0,1,0),Pl=new U(0,0,1),Dl={type:"added"},Jh={type:"removed"},Oi={type:"childadded",child:null},ha={type:"childremoved",child:null};class Me extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new U,e=new Mn,i=new Hr,r=new U(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new se},normalMatrix:{value:new It}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Rl,t)}rotateY(t){return this.rotateOnAxis(Cl,t)}rotateZ(t){return this.rotateOnAxis(Pl,t)}translateOnAxis(t,e){return wl.copy(t).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rl,t)}translateY(t){return this.translateOnAxis(Cl,t)}translateZ(t){return this.translateOnAxis(Pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ns.copy(t):ns.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Tr,ns,this.up):bn.lookAt(ns,Tr,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(bn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jh),ha.child=t,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,$h),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Me.DEFAULT_UP=new U(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new U,wn=new U,fa=new U,Rn=new U,Bi=new U,zi=new U,Ll=new U,da=new U,pa=new U,ma=new U,ga=new ce,_a=new ce,xa=new ce;class sn{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),rn.subVectors(t,e),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){rn.subVectors(r,e),wn.subVectors(i,e),fa.subVectors(t,e);const a=rn.dot(rn),o=rn.dot(wn),l=rn.dot(fa),c=wn.dot(wn),u=wn.dot(fa),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return ga.setScalar(0),_a.setScalar(0),xa.setScalar(0),ga.fromBufferAttribute(t,e),_a.fromBufferAttribute(t,i),xa.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ga,s.x),a.addScaledVector(_a,s.y),a.addScaledVector(xa,s.z),a}static isFrontFacing(t,e,i,r){return rn.subVectors(i,e),wn.subVectors(t,e),rn.cross(wn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),rn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return sn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Bi.subVectors(r,i),zi.subVectors(s,i),da.subVectors(t,i);const l=Bi.dot(da),c=zi.dot(da);if(l<=0&&c<=0)return e.copy(i);pa.subVectors(t,r);const u=Bi.dot(pa),f=zi.dot(pa);if(u>=0&&f<=u)return e.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Bi,a);ma.subVectors(t,s);const m=Bi.dot(ma),g=zi.dot(ma);if(g>=0&&m<=g)return e.copy(s);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(zi,o);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Ll.subVectors(s,r),o=(f-u)/(f-u+(m-g)),e.copy(r).addScaledVector(Ll,o);const h=1/(p+x+d);return a=x*h,o=d*h,e.copy(i).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},is={h:0,s:0,l:0};function va(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,kt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=kt.workingColorSpace){if(t=Vo(t,1),e=De(e,0,1),i=De(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=va(a,s,t+1/3),this.g=va(a,s,t),this.b=va(a,s,t-1/3)}return kt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ke){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const i=Zc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return kt.fromWorkingColorSpace(Te.copy(this),t),Math.round(De(Te.r*255,0,255))*65536+Math.round(De(Te.g*255,0,255))*256+Math.round(De(Te.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.fromWorkingColorSpace(Te.copy(this),e);const i=Te.r,r=Te.g,s=Te.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=kt.workingColorSpace){return kt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Ke){kt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,i=Te.g,r=Te.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(is);const i=Lr(Wn.h,is.h,e),r=Lr(Wn.s,is.s,e),s=Lr(Wn.l,is.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new wt;wt.NAMES=Zc;let Qh=0;class Ti extends mr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=gr(),this.name="",this.blending=Ji,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ga,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==za&&(i.blendSrc=this.blendSrc),this.blendDst!==Ga&&(i.blendDst=this.blendDst),this.blendEquation!==di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ai extends Ti{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new U,rs=new Xt;class cn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ml,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)rs.fromBufferAttribute(this,e),rs.applyMatrix3(t),this.setXY(e,rs.x,rs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),r=Ce(r,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ml&&(t.usage=this.usage),t}}class Kc extends cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class $c extends cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class de extends cn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let tf=0;const qe=new se,Ma=new Me,Gi=new U,Ge=new Vr,Ar=new Vr,_e=new U;class Oe extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wc(t)?$c:Kc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new It().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,i){return qe.makeTranslation(t,e,i),this.applyMatrix4(qe),this}scale(t,e,i){return qe.makeScale(t,e,i),this.applyMatrix4(qe),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ge.setFromBufferAttribute(s),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Ge.min,Ar.min),Ge.expandByPoint(_e),_e.addVectors(Ge.max,Ar.max),Ge.expandByPoint(_e)):(Ge.expandByPoint(Ar.min),Ge.expandByPoint(Ar.max))}Ge.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)_e.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(_e));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_e.fromBufferAttribute(o,c),l&&(Gi.fromBufferAttribute(t,c),_e.add(Gi)),r=Math.max(r,i.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new U,l[I]=new U;const c=new U,u=new U,f=new U,d=new Xt,m=new Xt,g=new Xt,x=new U,p=new U;function h(I,y,M){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,I),m.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),m.sub(d),g.sub(d);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(R),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),o[I].add(x),o[y].add(x),o[M].add(x),l[I].add(p),l[y].add(p),l[M].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let I=0,y=A.length;I<y;++I){const M=A[I],R=M.start,H=M.count;for(let G=R,X=R+H;G<X;G+=3)h(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const T=new U,S=new U,N=new U,w=new U;function b(I){N.fromBufferAttribute(r,I),w.copy(N);const y=o[I];T.copy(y),T.sub(N.multiplyScalar(N.dot(y))).normalize(),S.crossVectors(w,y);const R=S.dot(l[I])<0?-1:1;a.setXYZW(I,T.x,T.y,T.z,R)}for(let I=0,y=A.length;I<y;++I){const M=A[I],R=M.start,H=M.count;for(let G=R,X=R+H;G<X;G+=3)b(t.getX(G+0)),b(t.getX(G+1)),b(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,f=new U;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*u;for(let h=0;h<u;h++)d[g++]=c[m++]}return new cn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=t(d,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Il=new se,oi=new ko,ss=new kr,Ul=new U,as=new U,os=new U,ls=new U,Sa=new U,cs=new U,Nl=new U,us=new U;class ve extends Me{constructor(t=new Oe,e=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){cs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Sa.fromBufferAttribute(f,t),a?cs.addScaledVector(Sa,u):cs.addScaledVector(Sa.sub(e),u))}e.add(cs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ss.copy(i.boundingSphere),ss.applyMatrix4(s),oi.copy(t.ray).recast(t.near),!(ss.containsPoint(oi.origin)===!1&&(oi.intersectSphere(ss,Ul)===null||oi.origin.distanceToSquared(Ul)>(t.far-t.near)**2))&&(Il.copy(s).invert(),oi.copy(t.ray).applyMatrix4(Il),!(i.boundingBox!==null&&oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const p=d[g],h=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=A,N=T;S<N;S+=3){const w=o.getX(S),b=o.getX(S+1),I=o.getX(S+2);r=hs(this,h,t,i,c,u,f,w,b,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const A=o.getX(p),T=o.getX(p+1),S=o.getX(p+2);r=hs(this,a,t,i,c,u,f,A,T,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const p=d[g],h=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=A,N=T;S<N;S+=3){const w=S,b=S+1,I=S+2;r=hs(this,h,t,i,c,u,f,w,b,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const A=p,T=p+1,S=p+2;r=hs(this,a,t,i,c,u,f,A,T,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function ef(n,t,e,i,r,s,a,o){let l;if(t.side===Ie?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Jn,o),l===null)return null;us.copy(o),us.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(us);return c<e.near||c>e.far?null:{distance:c,point:us.clone(),object:n}}function hs(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,as),n.getVertexPosition(l,os),n.getVertexPosition(c,ls);const u=ef(n,t,e,i,as,os,ls,Nl);if(u){const f=new U;sn.getBarycoord(Nl,as,os,ls,f),r&&(u.uv=sn.getInterpolatedAttribute(r,o,l,c,f,new Xt)),s&&(u.uv1=sn.getInterpolatedAttribute(s,o,l,c,f,new Xt)),a&&(u.normal=sn.getInterpolatedAttribute(a,o,l,c,f,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};sn.getNormal(as,os,ls,d.normal),u.face=d,u.barycoord=f}return u}class ii extends Oe{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(f,2));function g(x,p,h,A,T,S,N,w,b,I,y){const M=S/b,R=N/I,H=S/2,G=N/2,X=w/2,$=b+1,W=I+1;let J=0,k=0;const rt=new U;for(let ut=0;ut<W;ut++){const Mt=ut*R-G;for(let Ft=0;Ft<$;Ft++){const jt=Ft*M-H;rt[x]=jt*A,rt[p]=Mt*T,rt[h]=X,c.push(rt.x,rt.y,rt.z),rt[x]=0,rt[p]=0,rt[h]=w>0?1:-1,u.push(rt.x,rt.y,rt.z),f.push(Ft/b),f.push(1-ut/I),J+=1}}for(let ut=0;ut<I;ut++)for(let Mt=0;Mt<b;Mt++){const Ft=d+Mt+$*ut,jt=d+Mt+$*(ut+1),q=d+(Mt+1)+$*(ut+1),et=d+(Mt+1)+$*ut;l.push(Ft,jt,et),l.push(jt,q,et),k+=6}o.addGroup(m,k,y),m+=k,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ur(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Pe(n){const t={};for(let e=0;e<n.length;e++){const i=ur(n[e]);for(const r in i)t[r]=i[r]}return t}function nf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function jc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}const rf={clone:ur,merge:Pe};var sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Ti{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sf,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=nf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Jc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new U,Fl=new Xt,Ol=new Xt;class $e extends Jc{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Fl,Ol),e.subVectors(Ol,Fl)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Dr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Vi=1;class of extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $e(Hi,Vi,t,e);r.layers=this.layers,this.add(r);const s=new $e(Hi,Vi,t,e);s.layers=this.layers,this.add(s);const a=new $e(Hi,Vi,t,e);a.layers=this.layers,this.add(a);const o=new $e(Hi,Vi,t,e);o.layers=this.layers,this.add(o);const l=new $e(Hi,Vi,t,e);l.layers=this.layers,this.add(l);const c=new $e(Hi,Vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qc extends Fe{constructor(t,e,i,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ar,super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lf extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Qc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ii(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:$n});s.uniforms.tEquirect.value=e;const a=new ve(r,s),o=e.minFilter;return e.minFilter===gi&&(e.minFilter=xn),new of(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const ya=new U,cf=new U,uf=new It;class hi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ya.subVectors(i,e).cross(cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ya),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||uf.getNormalMatrix(t),r=this.coplanarPoint(ya).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new kr,fs=new U;class Wo{constructor(t=new hi,e=new hi,i=new hi,r=new hi,s=new hi,a=new hi){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Dn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],g=r[9],x=r[10],p=r[11],h=r[12],A=r[13],T=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,p-m,S-h).normalize(),i[1].setComponents(l+s,d+c,p+m,S+h).normalize(),i[2].setComponents(l+a,d+u,p+g,S+A).normalize(),i[3].setComponents(l-a,d-u,p-g,S-A).normalize(),i[4].setComponents(l-o,d-f,p-x,S-T).normalize(),e===Dn)i[5].setComponents(l+o,d+f,p+x,S+T).normalize();else if(e===Ns)i[5].setComponents(o,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(fs.x=r.normal.x>0?t.max.x:t.min.x,fs.y=r.normal.y>0?t.max.y:t.min.y,fs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tu(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function hf(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],x=f[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const x=f[m];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class _r extends Oe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=t/o,d=e/l,m=[],g=[],x=[],p=[];for(let h=0;h<u;h++){const A=h*d-a;for(let T=0;T<c;T++){const S=T*f-s;g.push(S,-A,0),x.push(0,0,1),p.push(T/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<o;A++){const T=A+c*h,S=A+c*(h+1),N=A+1+c*(h+1),w=A+1+c*h;m.push(T,S,w),m.push(S,N,w)}this.setIndex(m),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.width,t.height,t.widthSegments,t.heightSegments)}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,df=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Af=`#ifdef USE_IRIDESCENCE
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
#endif`,bf=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nf=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,id=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,rd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ad=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ud=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,hd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,md=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sd=`#if defined( USE_POINTS_UV )
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
#endif`,yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ad=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,Pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ud=`#ifdef USE_NORMALMAP
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
#endif`,Nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$d=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ap=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,xp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Mp=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ap=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,bp=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Rp=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Pp=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Lp=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ip=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Up=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Fp=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Bp=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Vp=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:ff,alphahash_pars_fragment:df,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:_f,aomap_fragment:xf,aomap_pars_fragment:vf,batching_pars_vertex:Mf,batching_vertex:Sf,begin_vertex:yf,beginnormal_vertex:Ef,bsdfs:Tf,iridescence_fragment:Af,bumpmap_pars_fragment:bf,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Pf,color_fragment:Df,color_pars_fragment:Lf,color_pars_vertex:If,color_vertex:Uf,common:Nf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Of,displacementmap_pars_vertex:Bf,displacementmap_vertex:zf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Hf,colorspace_fragment:Vf,colorspace_pars_fragment:kf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:Yf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:rd,envmap_vertex:Zf,fog_vertex:Kf,fog_pars_vertex:$f,fog_fragment:jf,fog_pars_fragment:Jf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:td,lights_lambert_fragment:ed,lights_lambert_pars_fragment:nd,lights_pars_begin:id,lights_toon_fragment:sd,lights_toon_pars_fragment:ad,lights_phong_fragment:od,lights_phong_pars_fragment:ld,lights_physical_fragment:cd,lights_physical_pars_fragment:ud,lights_fragment_begin:hd,lights_fragment_maps:fd,lights_fragment_end:dd,logdepthbuf_fragment:pd,logdepthbuf_pars_fragment:md,logdepthbuf_pars_vertex:gd,logdepthbuf_vertex:_d,map_fragment:xd,map_pars_fragment:vd,map_particle_fragment:Md,map_particle_pars_fragment:Sd,metalnessmap_fragment:yd,metalnessmap_pars_fragment:Ed,morphinstance_vertex:Td,morphcolor_vertex:Ad,morphnormal_vertex:bd,morphtarget_pars_vertex:wd,morphtarget_vertex:Rd,normal_fragment_begin:Cd,normal_fragment_maps:Pd,normal_pars_fragment:Dd,normal_pars_vertex:Ld,normal_vertex:Id,normalmap_pars_fragment:Ud,clearcoat_normal_fragment_begin:Nd,clearcoat_normal_fragment_maps:Fd,clearcoat_pars_fragment:Od,iridescence_pars_fragment:Bd,opaque_fragment:zd,packing:Gd,premultiplied_alpha_fragment:Hd,project_vertex:Vd,dithering_fragment:kd,dithering_pars_fragment:Wd,roughnessmap_fragment:Xd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:qd,shadowmap_pars_vertex:Zd,shadowmap_vertex:Kd,shadowmask_pars_fragment:$d,skinbase_vertex:jd,skinning_pars_vertex:Jd,skinning_vertex:Qd,skinnormal_vertex:tp,specularmap_fragment:ep,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:rp,transmission_fragment:sp,transmission_pars_fragment:ap,uv_pars_fragment:op,uv_pars_vertex:lp,uv_vertex:cp,worldpos_vertex:up,background_vert:hp,background_frag:fp,backgroundCube_vert:dp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:_p,depth_frag:xp,distanceRGBA_vert:vp,distanceRGBA_frag:Mp,equirect_vert:Sp,equirect_frag:yp,linedashed_vert:Ep,linedashed_frag:Tp,meshbasic_vert:Ap,meshbasic_frag:bp,meshlambert_vert:wp,meshlambert_frag:Rp,meshmatcap_vert:Cp,meshmatcap_frag:Pp,meshnormal_vert:Dp,meshnormal_frag:Lp,meshphong_vert:Ip,meshphong_frag:Up,meshphysical_vert:Np,meshphysical_frag:Fp,meshtoon_vert:Op,meshtoon_frag:Bp,points_vert:zp,points_frag:Gp,shadow_vert:Hp,shadow_frag:Vp,sprite_vert:kp,sprite_frag:Wp},nt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},pn={basic:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Pe([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Pe([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Pe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Pe([nt.points,nt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Pe([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Pe([nt.common,nt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Pe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Pe([nt.sprite,nt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Pe([nt.common,nt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Pe([nt.lights,nt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};pn.physical={uniforms:Pe([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const ds={r:0,b:0,g:0},ci=new Mn,Xp=new se;function Yp(n,t,e,i,r,s,a){const o=new wt(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function g(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?e:t).get(T)),T}function x(A){let T=!1;const S=g(A);S===null?h(o,l):S&&S.isColor&&(h(S,1),T=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(A,T){const S=g(T);S&&(S.isCubeTexture||S.mapping===Ks)?(u===void 0&&(u=new ve(new ii(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:ur(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ci.copy(T.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(ci)),u.material.toneMapped=kt.getTransfer(S.colorSpace)!==$t,(f!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ve(new _r(2,2),new Qn({name:"BackgroundMaterial",uniforms:ur(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=kt.getTransfer(S.colorSpace)!==$t,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,T){A.getRGB(ds,jc(n)),i.buffers.color.setClear(ds.r,ds.g,ds.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(A,T=1){o.set(A),l=T,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(o,l)},render:x,addToRenderList:p}}function qp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(M,R,H,G,X){let $=!1;const W=f(G,H,R);s!==W&&(s=W,c(s.object)),$=m(M,G,H,X),$&&g(M,G,H,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(M,R,H,G),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,R,H){const G=H.wireframe===!0;let X=i[M.id];X===void 0&&(X={},i[M.id]=X);let $=X[R.id];$===void 0&&($={},X[R.id]=$);let W=$[G];return W===void 0&&(W=d(l()),$[G]=W),W}function d(M){const R=[],H=[],G=[];for(let X=0;X<e;X++)R[X]=0,H[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:G,object:M,attributes:{},index:null}}function m(M,R,H,G){const X=s.attributes,$=R.attributes;let W=0;const J=H.getAttributes();for(const k in J)if(J[k].location>=0){const ut=X[k];let Mt=$[k];if(Mt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),ut===void 0||ut.attribute!==Mt||Mt&&ut.data!==Mt.data)return!0;W++}return s.attributesNum!==W||s.index!==G}function g(M,R,H,G){const X={},$=R.attributes;let W=0;const J=H.getAttributes();for(const k in J)if(J[k].location>=0){let ut=$[k];ut===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));const Mt={};Mt.attribute=ut,ut&&ut.data&&(Mt.data=ut.data),X[k]=Mt,W++}s.attributes=X,s.attributesNum=W,s.index=G}function x(){const M=s.newAttributes;for(let R=0,H=M.length;R<H;R++)M[R]=0}function p(M){h(M,0)}function h(M,R){const H=s.newAttributes,G=s.enabledAttributes,X=s.attributeDivisors;H[M]=1,G[M]===0&&(n.enableVertexAttribArray(M),G[M]=1),X[M]!==R&&(n.vertexAttribDivisor(M,R),X[M]=R)}function A(){const M=s.newAttributes,R=s.enabledAttributes;for(let H=0,G=R.length;H<G;H++)R[H]!==M[H]&&(n.disableVertexAttribArray(H),R[H]=0)}function T(M,R,H,G,X,$,W){W===!0?n.vertexAttribIPointer(M,R,H,X,$):n.vertexAttribPointer(M,R,H,G,X,$)}function S(M,R,H,G){x();const X=G.attributes,$=H.getAttributes(),W=R.defaultAttributeValues;for(const J in $){const k=$[J];if(k.location>=0){let rt=X[J];if(rt===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){const ut=rt.normalized,Mt=rt.itemSize,Ft=t.get(rt);if(Ft===void 0)continue;const jt=Ft.buffer,q=Ft.type,et=Ft.bytesPerElement,_t=q===n.INT||q===n.UNSIGNED_INT||rt.gpuType===Fo;if(rt.isInterleavedBufferAttribute){const st=rt.data,At=st.stride,Pt=rt.offset;if(st.isInstancedInterleavedBuffer){for(let Ot=0;Ot<k.locationSize;Ot++)h(k.location+Ot,st.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ot=0;Ot<k.locationSize;Ot++)p(k.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let Ot=0;Ot<k.locationSize;Ot++)T(k.location+Ot,Mt/k.locationSize,q,ut,At*et,(Pt+Mt/k.locationSize*Ot)*et,_t)}else{if(rt.isInstancedBufferAttribute){for(let st=0;st<k.locationSize;st++)h(k.location+st,rt.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let st=0;st<k.locationSize;st++)p(k.location+st);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let st=0;st<k.locationSize;st++)T(k.location+st,Mt/k.locationSize,q,ut,Mt*et,Mt/k.locationSize*st*et,_t)}}else if(W!==void 0){const ut=W[J];if(ut!==void 0)switch(ut.length){case 2:n.vertexAttrib2fv(k.location,ut);break;case 3:n.vertexAttrib3fv(k.location,ut);break;case 4:n.vertexAttrib4fv(k.location,ut);break;default:n.vertexAttrib1fv(k.location,ut)}}}}A()}function N(){I();for(const M in i){const R=i[M];for(const H in R){const G=R[H];for(const X in G)u(G[X].object),delete G[X];delete R[H]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const H in R){const G=R[H];for(const X in G)u(G[X].object),delete G[X];delete R[H]}delete i[M.id]}function b(M){for(const R in i){const H=i[R];if(H[M.id]===void 0)continue;const G=H[M.id];for(const X in G)u(G[X].object),delete G[X];delete H[M.id]}}function I(){y(),a=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:y,dispose:N,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:p,disableUnusedAttributes:A}}function Zp(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];e.update(m,i,1)}function l(c,u,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*d[x];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Kp(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==an&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const I=b===Gr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Nn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Pn&&!I)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:N,maxSamples:w}}function $p(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new hi,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const A=s?0:i,T=A*4;let S=h.clippingState||null;l.value=S,S=u(g,d,T,m);for(let N=0;N!==T;++N)S[N]=e[N];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,m,g){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const h=m+x*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<h)&&(p=new Float32Array(h));for(let T=0,S=m;T!==x;++T,S+=4)a.copy(f[T]).applyMatrix4(A,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function jp(n){let t=new WeakMap;function e(a,o){return o===Za?a.mapping=ar:o===Ka&&(a.mapping=or),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Za||o===Ka)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new lf(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class eu extends Jc{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yi=4,Bl=[.125,.215,.35,.446,.526,.582],pi=20,Ea=new eu,zl=new wt;let Ta=null,Aa=0,ba=0,wa=!1;const fi=(1+Math.sqrt(5))/2,ki=1/fi,Gl=[new U(-fi,ki,0),new U(fi,ki,0),new U(-ki,0,fi),new U(ki,0,fi),new U(0,fi,-ki),new U(0,fi,ki),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Hl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ta,Aa,ba),this._renderer.xr.enabled=wa,t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ar||t.mapping===or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Gr,format:an,colorSpace:pr,depthBuffer:!1},r=Vl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jp(s)),this._blurMaterial=Qp(s,t,e)}return r}_compileMaterial(t){const e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,Ea)}_sceneToCubeUV(t,e,i,r){const o=new $e(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(zl),u.toneMapping=jn,u.autoClear=!1;const m=new Ai({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new ve(new ii,m);let x=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(zl),x=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):A===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const T=this._cubeSize;ps(r,A*T,h>2?T:0,T,T),u.setRenderTarget(r),x&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===ar||t.mapping===or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ve(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ps(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ea)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gl[(r-s-1)%Gl.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ve(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*pi-1),x=s/g,p=isFinite(s)?1+Math.floor(u*x):pi;p>pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pi}`);const h=[];let A=0;for(let b=0;b<pi;++b){const I=b/x,y=Math.exp(-I*I/2);h.push(y),b===0?A+=y:b<p&&(A+=2*y)}for(let b=0;b<h.length;b++)h[b]=h[b]/A;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-i;const S=this._sizeLods[r],N=3*S*(r>T-Yi?r-T+Yi:0),w=4*(this._cubeSize-S);ps(e,N,w,3*S,2*S),l.setRenderTarget(e),l.render(f,Ea)}}function Jp(n){const t=[],e=[],i=[];let r=n;const s=n-Yi+1+Bl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Yi?l=Bl[a-n+Yi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,x=3,p=2,h=1,A=new Float32Array(x*g*m),T=new Float32Array(p*g*m),S=new Float32Array(h*g*m);for(let w=0;w<m;w++){const b=w%3*2/3-1,I=w>2?0:-1,y=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];A.set(y,x*g*w),T.set(d,p*g*w);const M=[w,w,w,w,w,w];S.set(M,h*g*w)}const N=new Oe;N.setAttribute("position",new cn(A,x)),N.setAttribute("uv",new cn(T,p)),N.setAttribute("faceIndex",new cn(S,h)),t.push(N),r>Yi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Vl(n,t,e){const i=new vi(n,t,e);return i.texture.mapping=Ks,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ps(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Qp(n,t,e){const i=new Float32Array(pi),r=new U(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function kl(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Wl(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Xo(){return`

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
	`}function tm(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Za||l===Ka,u=l===ar||l===or;if(c||u){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Hl(n)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new Hl(n)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function em(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Cr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nm(n,t,e,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let p=0,h=x.length;p<h;p++)t.remove(x[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const x=m[g];for(let p=0,h=x.length;p<h;p++)t.update(x[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let x=0;if(m!==null){const A=m.array;x=m.version;for(let T=0,S=A.length;T<S;T+=3){const N=A[T+0],w=A[T+1],b=A[T+2];d.push(N,w,w,b,b,N)}}else if(g!==void 0){const A=g.array;x=g.version;for(let T=0,S=A.length/3-1;T<S;T+=3){const N=T+0,w=T+1,b=T+2;d.push(N,w,w,b,b,N)}}else return;const p=new(Wc(d)?$c:Kc)(d,1);p.version=x;const h=s.get(f);h&&t.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function im(n,t,e){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*a),e.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*a,g),e.update(m,i,g))}function u(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];e.update(p,i,1)}function f(d,m,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/a,m[h],x[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,x,0,g);let h=0;for(let A=0;A<g;A++)h+=m[A]*x[A];e.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function rm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function sm(n,t,e){const i=new WeakMap,r=new ce;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let M=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let N=o.attributes.position.count*S,w=1;N>t.maxTextureSize&&(w=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const b=new Float32Array(N*w*4*f),I=new Yc(b,N,w,f);I.type=Pn,I.needsUpdate=!0;const y=S*4;for(let R=0;R<f;R++){const H=h[R],G=A[R],X=T[R],$=N*w*4*R;for(let W=0;W<H.count;W++){const J=W*y;g===!0&&(r.fromBufferAttribute(H,W),b[$+J+0]=r.x,b[$+J+1]=r.y,b[$+J+2]=r.z,b[$+J+3]=0),x===!0&&(r.fromBufferAttribute(G,W),b[$+J+4]=r.x,b[$+J+5]=r.y,b[$+J+6]=r.z,b[$+J+7]=0),p===!0&&(r.fromBufferAttribute(X,W),b[$+J+8]=r.x,b[$+J+9]=r.y,b[$+J+10]=r.z,b[$+J+11]=X.itemSize===4?r.w:1)}}d={count:f,texture:I,size:new Xt(N,w)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function am(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class nu extends Fe{constructor(t,e,i,r,s,a,o,l,c,u=Qi){if(u!==Qi&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qi&&(i=xi),i===void 0&&u===cr&&(i=lr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const iu=new Fe,Xl=new nu(1,1),ru=new Yc,su=new Xh,au=new Qc,Yl=[],ql=[],Zl=new Float32Array(16),Kl=new Float32Array(9),$l=new Float32Array(4);function xr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Yl[r];if(s===void 0&&(s=new Float32Array(r),Yl[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Js(n,t){let e=ql[t];e===void 0&&(e=new Int32Array(t),ql[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function om(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function lm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2fv(this.addr,t),ge(e,t)}}function cm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;n.uniform3fv(this.addr,t),ge(e,t)}}function um(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4fv(this.addr,t),ge(e,t)}}function hm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;$l.set(i),n.uniformMatrix2fv(this.addr,!1,$l),ge(e,i)}}function fm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;Kl.set(i),n.uniformMatrix3fv(this.addr,!1,Kl),ge(e,i)}}function dm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;Zl.set(i),n.uniformMatrix4fv(this.addr,!1,Zl),ge(e,i)}}function pm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2iv(this.addr,t),ge(e,t)}}function gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3iv(this.addr,t),ge(e,t)}}function _m(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4iv(this.addr,t),ge(e,t)}}function xm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function vm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2uiv(this.addr,t),ge(e,t)}}function Mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3uiv(this.addr,t),ge(e,t)}}function Sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4uiv(this.addr,t),ge(e,t)}}function ym(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Xl.compareFunction=kc,s=Xl):s=iu,e.setTexture2D(t||s,r)}function Em(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||su,r)}function Tm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||au,r)}function Am(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||ru,r)}function bm(n){switch(n){case 5126:return om;case 35664:return lm;case 35665:return cm;case 35666:return um;case 35674:return hm;case 35675:return fm;case 35676:return dm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return _m;case 5125:return xm;case 36294:return vm;case 36295:return Mm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Am}}function wm(n,t){n.uniform1fv(this.addr,t)}function Rm(n,t){const e=xr(t,this.size,2);n.uniform2fv(this.addr,e)}function Cm(n,t){const e=xr(t,this.size,3);n.uniform3fv(this.addr,e)}function Pm(n,t){const e=xr(t,this.size,4);n.uniform4fv(this.addr,e)}function Dm(n,t){const e=xr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Lm(n,t){const e=xr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Im(n,t){const e=xr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Um(n,t){n.uniform1iv(this.addr,t)}function Nm(n,t){n.uniform2iv(this.addr,t)}function Fm(n,t){n.uniform3iv(this.addr,t)}function Om(n,t){n.uniform4iv(this.addr,t)}function Bm(n,t){n.uniform1uiv(this.addr,t)}function zm(n,t){n.uniform2uiv(this.addr,t)}function Gm(n,t){n.uniform3uiv(this.addr,t)}function Hm(n,t){n.uniform4uiv(this.addr,t)}function Vm(n,t,e){const i=this.cache,r=t.length,s=Js(e,r);me(i,s)||(n.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||iu,s[a])}function km(n,t,e){const i=this.cache,r=t.length,s=Js(e,r);me(i,s)||(n.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||su,s[a])}function Wm(n,t,e){const i=this.cache,r=t.length,s=Js(e,r);me(i,s)||(n.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||au,s[a])}function Xm(n,t,e){const i=this.cache,r=t.length,s=Js(e,r);me(i,s)||(n.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ru,s[a])}function Ym(n){switch(n){case 5126:return wm;case 35664:return Rm;case 35665:return Cm;case 35666:return Pm;case 35674:return Dm;case 35675:return Lm;case 35676:return Im;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return Gm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}class qm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=bm(e.type)}}class Zm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ym(e.type)}}class Km{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function jl(n,t){n.seq.push(t),n.map[t.id]=t}function $m(n,t,e){const i=n.name,r=i.length;for(Ra.lastIndex=0;;){const s=Ra.exec(i),a=Ra.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){jl(e,c===void 0?new qm(o,n,t):new Zm(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new Km(o),jl(e,f)),e=f}}}class Rs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);$m(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Jl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const jm=37297;let Jm=0;function Qm(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Ql=new It;function tg(n){kt._getMatrix(Ql,kt.workingColorSpace,n);const t=`mat3( ${Ql.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(n)){case $s:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function tc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Qm(n.getShaderSource(t),a)}else return r}function eg(n,t){const e=tg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ng(n,t){let e;switch(t){case rh:e="Linear";break;case sh:e="Reinhard";break;case ah:e="Cineon";break;case Pc:e="ACESFilmic";break;case lh:e="AgX";break;case ch:e="Neutral";break;case oh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ms=new U;function ig(){kt.getLuminanceCoefficients(ms);const n=ms.x.toFixed(4),t=ms.y.toFixed(4),e=ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function sg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ag(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Pr(n){return n!==""}function ec(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(n){return n.replace(og,cg)}const lg=new Map;function cg(n,t){let e=Nt[t];if(e===void 0){const i=lg.get(t);if(i!==void 0)e=Nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ao(e)}const ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(n){return n.replace(ug,hg)}function hg(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function fg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function dg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ar:case or:t="ENVMAP_TYPE_CUBE";break;case Ks:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case or:t="ENVMAP_MODE_REFRACTION";break}return t}function mg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Cc:t="ENVMAP_BLENDING_MULTIPLY";break;case nh:t="ENVMAP_BLENDING_MIX";break;case ih:t="ENVMAP_BLENDING_ADD";break}return t}function gg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function _g(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=fg(e),c=dg(e),u=pg(e),f=mg(e),d=gg(e),m=rg(e),g=sg(s),x=r.createProgram();let p,h,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pr).join(`
`),h.length>0&&(h+=`
`)):(p=[rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),h=[rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==jn?ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,eg("linearToOutputTexel",e.outputColorSpace),ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pr).join(`
`)),a=Ao(a),a=ec(a,e),a=nc(a,e),o=Ao(o),o=ec(o,e),o=nc(o,e),a=ic(a),o=ic(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=A+p+a,S=A+h+o,N=Jl(r,r.VERTEX_SHADER,T),w=Jl(r,r.FRAGMENT_SHADER,S);r.attachShader(x,N),r.attachShader(x,w),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(R){if(n.debug.checkShaderErrors){const H=r.getProgramInfoLog(x).trim(),G=r.getShaderInfoLog(N).trim(),X=r.getShaderInfoLog(w).trim();let $=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,N,w);else{const J=tc(r,N,"vertex"),k=tc(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+J+`
`+k)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||X==="")&&(W=!1);W&&(R.diagnostics={runnable:$,programLog:H,vertexShader:{log:G,prefix:p},fragmentShader:{log:X,prefix:h}})}r.deleteShader(N),r.deleteShader(w),I=new Rs(r,x),y=ag(r,x)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,jm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=w,this}let xg=0;class vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Mg(t),e.set(t,i)),i}}class Mg{constructor(t){this.id=xg++,this.code=t,this.usedTimes=0}}function Sg(n,t,e,i,r,s,a){const o=new qc,l=new vg,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,M,R,H,G){const X=H.fog,$=G.geometry,W=y.isMeshStandardMaterial?H.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),k=J&&J.mapping===Ks?J.image.height:null,rt=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Mt=ut!==void 0?ut.length:0;let Ft=0;$.morphAttributes.position!==void 0&&(Ft=1),$.morphAttributes.normal!==void 0&&(Ft=2),$.morphAttributes.color!==void 0&&(Ft=3);let jt,q,et,_t;if(rt){const Kt=pn[rt];jt=Kt.vertexShader,q=Kt.fragmentShader}else jt=y.vertexShader,q=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),_t=l.getFragmentShaderID(y);const st=n.getRenderTarget(),At=n.state.buffers.depth.getReversed(),Pt=G.isInstancedMesh===!0,Ot=G.isBatchedMesh===!0,ae=!!y.map,Ht=!!y.matcap,ue=!!J,L=!!y.aoMap,Xe=!!y.lightMap,Bt=!!y.bumpMap,zt=!!y.normalMap,yt=!!y.displacementMap,ne=!!y.emissiveMap,St=!!y.metalnessMap,E=!!y.roughnessMap,_=y.anisotropy>0,F=y.clearcoat>0,Z=y.dispersion>0,j=y.iridescence>0,Y=y.sheen>0,xt=y.transmission>0,at=_&&!!y.anisotropyMap,ht=F&&!!y.clearcoatMap,Vt=F&&!!y.clearcoatNormalMap,Q=F&&!!y.clearcoatRoughnessMap,ft=j&&!!y.iridescenceMap,Et=j&&!!y.iridescenceThicknessMap,bt=Y&&!!y.sheenColorMap,dt=Y&&!!y.sheenRoughnessMap,Gt=!!y.specularMap,Ut=!!y.specularColorMap,te=!!y.specularIntensityMap,C=xt&&!!y.transmissionMap,it=xt&&!!y.thicknessMap,V=!!y.gradientMap,K=!!y.alphaMap,ct=y.alphaTest>0,ot=!!y.alphaHash,Dt=!!y.extensions;let le=jn;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(le=n.toneMapping);const ye={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:jt,fragmentShader:q,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ot,batchingColor:Ot&&G._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&G.instanceColor!==null,instancingMorph:Pt&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:pr,alphaToCoverage:!!y.alphaToCoverage,map:ae,matcap:Ht,envMap:ue,envMapMode:ue&&J.mapping,envMapCubeUVHeight:k,aoMap:L,lightMap:Xe,bumpMap:Bt,normalMap:zt,displacementMap:d&&yt,emissiveMap:ne,normalMapObjectSpace:zt&&y.normalMapType===dh,normalMapTangentSpace:zt&&y.normalMapType===Vc,metalnessMap:St,roughnessMap:E,anisotropy:_,anisotropyMap:at,clearcoat:F,clearcoatMap:ht,clearcoatNormalMap:Vt,clearcoatRoughnessMap:Q,dispersion:Z,iridescence:j,iridescenceMap:ft,iridescenceThicknessMap:Et,sheen:Y,sheenColorMap:bt,sheenRoughnessMap:dt,specularMap:Gt,specularColorMap:Ut,specularIntensityMap:te,transmission:xt,transmissionMap:C,thicknessMap:it,gradientMap:V,opaque:y.transparent===!1&&y.blending===Ji&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:ct,alphaHash:ot,combine:y.combine,mapUv:ae&&x(y.map.channel),aoMapUv:L&&x(y.aoMap.channel),lightMapUv:Xe&&x(y.lightMap.channel),bumpMapUv:Bt&&x(y.bumpMap.channel),normalMapUv:zt&&x(y.normalMap.channel),displacementMapUv:yt&&x(y.displacementMap.channel),emissiveMapUv:ne&&x(y.emissiveMap.channel),metalnessMapUv:St&&x(y.metalnessMap.channel),roughnessMapUv:E&&x(y.roughnessMap.channel),anisotropyMapUv:at&&x(y.anisotropyMap.channel),clearcoatMapUv:ht&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:dt&&x(y.sheenRoughnessMap.channel),specularMapUv:Gt&&x(y.specularMap.channel),specularColorMapUv:Ut&&x(y.specularColorMap.channel),specularIntensityMapUv:te&&x(y.specularIntensityMap.channel),transmissionMapUv:C&&x(y.transmissionMap.channel),thicknessMapUv:it&&x(y.thicknessMap.channel),alphaMapUv:K&&x(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(zt||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(ae||K),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:At,skinning:G.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:ae&&y.map.isVideoTexture===!0&&kt.getTransfer(y.map.colorSpace)===$t,decodeVideoTextureEmissive:ne&&y.emissiveMap.isVideoTexture===!0&&kt.getTransfer(y.emissiveMap.colorSpace)===$t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===Ie,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Dt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&y.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function h(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(A(M,y),T(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function A(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function T(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const M=g[y.type];let R;if(M){const H=pn[M];R=rf.clone(H.uniforms)}else R=y.uniforms;return R}function N(y,M){let R;for(let H=0,G=u.length;H<G;H++){const X=u[H];if(X.cacheKey===M){R=X,++R.usedTimes;break}}return R===void 0&&(R=new _g(n,M,y,s),u.push(R)),R}function w(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:N,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:I}}function yg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Eg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function sc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ac(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f,d,m,g,x,p){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},n[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=x,h.group=p),t++,h}function o(f,d,m,g,x,p){const h=a(f,d,m,g,x,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):e.push(h)}function l(f,d,m,g,x,p){const h=a(f,d,m,g,x,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):e.unshift(h)}function c(f,d){e.length>1&&e.sort(f||Eg),i.length>1&&i.sort(d||sc),r.length>1&&r.sort(d||sc)}function u(){for(let f=t,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Tg(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new ac,n.set(i,[a])):r>=s.length?(a=new ac,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ag(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new wt};break;case"SpotLight":e={position:new U,direction:new U,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function bg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let wg=0;function Rg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Cg(n){const t=new Ag,e=bg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new se,a=new se;function o(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,g=0,x=0,p=0,h=0,A=0,T=0,S=0,N=0,w=0,b=0;c.sort(Rg);for(let y=0,M=c.length;y<M;y++){const R=c[y],H=R.color,G=R.intensity,X=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=H.r*G,f+=H.g*G,d+=H.b*G;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],G);b++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,k=e.get(R);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=R.shadow.matrix,A++}i.directional[m]=W,m++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(H).multiplyScalar(G),W.distance=X,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[x]=W;const J=R.shadow;if(R.map&&(i.spotLightMap[N]=R.map,N++,J.updateMatrices(R),R.castShadow&&w++),i.spotLightMatrix[x]=J.matrix,R.castShadow){const k=e.get(R);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=$,S++}x++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(H).multiplyScalar(G),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=W,p++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const J=R.shadow,k=e.get(R);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=R.shadow.matrix,T++}i.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(G),W.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[h]=W,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==p||I.hemiLength!==h||I.numDirectionalShadows!==A||I.numPointShadows!==T||I.numSpotShadows!==S||I.numSpotMaps!==N||I.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+N-w,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,I.directionalLength=m,I.pointLength=g,I.spotLength=x,I.rectAreaLength=p,I.hemiLength=h,I.numDirectionalShadows=A,I.numPointShadows=T,I.numSpotShadows=S,I.numSpotMaps=N,I.numLightProbes=b,i.version=wg++)}function l(c,u){let f=0,d=0,m=0,g=0,x=0;const p=u.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const T=c[h];if(T.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(T.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:i}}function oc(n){const t=new Cg(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Pg(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new oc(n),t.set(r,[o])):s>=a.length?(o=new oc(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Dg extends Ti{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lg extends Ti{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ug=`uniform sampler2D shadow_pass;
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
}`;function Ng(n,t,e){let i=new Wo;const r=new Xt,s=new Xt,a=new ce,o=new Dg({depthPacking:fh}),l=new Lg,c={},u=e.maxTextureSize,f={[Jn]:Ie,[Ie]:Jn,[_n]:_n},d=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Ig,fragmentShader:Ug}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ve(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let h=this.type;this.render=function(w,b,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),H=n.state;H.setBlending($n),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=h!==Cn&&this.type===Cn,X=h===Cn&&this.type!==Cn;for(let $=0,W=w.length;$<W;$++){const J=w[$],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const rt=k.getFrameExtents();if(r.multiply(rt),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/rt.x),r.x=s.x*rt.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/rt.y),r.y=s.y*rt.y,k.mapSize.y=s.y)),k.map===null||G===!0||X===!0){const Mt=this.type!==Cn?{minFilter:ln,magFilter:ln}:{};k.map!==null&&k.map.dispose(),k.map=new vi(r.x,r.y,Mt),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ut=k.getViewportCount();for(let Mt=0;Mt<ut;Mt++){const Ft=k.getViewport(Mt);a.set(s.x*Ft.x,s.y*Ft.y,s.x*Ft.z,s.y*Ft.w),H.viewport(a),k.updateMatrices(J,Mt),i=k.getFrustum(),S(b,I,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===Cn&&A(k,I),k.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(y,M,R)};function A(w,b){const I=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new vi(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(b,null,I,d,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(b,null,I,m,x,null)}function T(w,b,I,y){let M=null;const R=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)M=R;else if(M=I.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=M.uuid,G=b.uuid;let X=c[H];X===void 0&&(X={},c[H]=X);let $=X[G];$===void 0&&($=M.clone(),X[G]=$,b.addEventListener("dispose",N)),M=$}if(M.visible=b.visible,M.wireframe=b.wireframe,y===Cn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=n.properties.get(M);H.light=I}return M}function S(w,b,I,y,M){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Cn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const G=t.update(w),X=w.material;if(Array.isArray(X)){const $=G.groups;for(let W=0,J=$.length;W<J;W++){const k=$[W],rt=X[k.materialIndex];if(rt&&rt.visible){const ut=T(w,rt,y,M);w.onBeforeShadow(n,w,b,I,G,ut,k),n.renderBufferDirect(I,null,G,ut,w,k),w.onAfterShadow(n,w,b,I,G,ut,k)}}}else if(X.visible){const $=T(w,X,y,M);w.onBeforeShadow(n,w,b,I,G,$,null),n.renderBufferDirect(I,null,G,$,w,null),w.onAfterShadow(n,w,b,I,G,$,null)}}const H=w.children;for(let G=0,X=H.length;G<X;G++)S(H[G],b,I,y,M)}function N(w){w.target.removeEventListener("dispose",N);for(const I in c){const y=c[I],M=w.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Fg={[Ha]:Va,[ka]:Ya,[Wa]:qa,[sr]:Xa,[Va]:Ha,[Ya]:ka,[qa]:Wa,[Xa]:sr};function Og(n,t){function e(){let C=!1;const it=new ce;let V=null;const K=new ce(0,0,0,0);return{setMask:function(ct){V!==ct&&!C&&(n.colorMask(ct,ct,ct,ct),V=ct)},setLocked:function(ct){C=ct},setClear:function(ct,ot,Dt,le,ye){ye===!0&&(ct*=le,ot*=le,Dt*=le),it.set(ct,ot,Dt,le),K.equals(it)===!1&&(n.clearColor(ct,ot,Dt,le),K.copy(it))},reset:function(){C=!1,V=null,K.set(-1,0,0,0)}}}function i(){let C=!1,it=!1,V=null,K=null,ct=null;return{setReversed:function(ot){if(it!==ot){const Dt=t.get("EXT_clip_control");it?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const le=ct;ct=null,this.setClear(le)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?st(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(ot){V!==ot&&!C&&(n.depthMask(ot),V=ot)},setFunc:function(ot){if(it&&(ot=Fg[ot]),K!==ot){switch(ot){case Ha:n.depthFunc(n.NEVER);break;case Va:n.depthFunc(n.ALWAYS);break;case ka:n.depthFunc(n.LESS);break;case sr:n.depthFunc(n.LEQUAL);break;case Wa:n.depthFunc(n.EQUAL);break;case Xa:n.depthFunc(n.GEQUAL);break;case Ya:n.depthFunc(n.GREATER);break;case qa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ot}},setLocked:function(ot){C=ot},setClear:function(ot){ct!==ot&&(it&&(ot=1-ot),n.clearDepth(ot),ct=ot)},reset:function(){C=!1,V=null,K=null,ct=null,it=!1}}}function r(){let C=!1,it=null,V=null,K=null,ct=null,ot=null,Dt=null,le=null,ye=null;return{setTest:function(Kt){C||(Kt?st(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(Kt){it!==Kt&&!C&&(n.stencilMask(Kt),it=Kt)},setFunc:function(Kt,Qe,yn){(V!==Kt||K!==Qe||ct!==yn)&&(n.stencilFunc(Kt,Qe,yn),V=Kt,K=Qe,ct=yn)},setOp:function(Kt,Qe,yn){(ot!==Kt||Dt!==Qe||le!==yn)&&(n.stencilOp(Kt,Qe,yn),ot=Kt,Dt=Qe,le=yn)},setLocked:function(Kt){C=Kt},setClear:function(Kt){ye!==Kt&&(n.clearStencil(Kt),ye=Kt)},reset:function(){C=!1,it=null,V=null,K=null,ct=null,ot=null,Dt=null,le=null,ye=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,m=[],g=null,x=!1,p=null,h=null,A=null,T=null,S=null,N=null,w=null,b=new wt(0,0,0),I=0,y=!1,M=null,R=null,H=null,G=null,X=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=J>=2);let rt=null,ut={};const Mt=n.getParameter(n.SCISSOR_BOX),Ft=n.getParameter(n.VIEWPORT),jt=new ce().fromArray(Mt),q=new ce().fromArray(Ft);function et(C,it,V,K){const ct=new Uint8Array(4),ot=n.createTexture();n.bindTexture(C,ot),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<V;Dt++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(it+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return ot}const _t={};_t[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),_t[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_t[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(n.DEPTH_TEST),a.setFunc(sr),Bt(!1),zt(ul),st(n.CULL_FACE),L($n);function st(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function At(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function Pt(C,it){return f[C]!==it?(n.bindFramebuffer(C,it),f[C]=it,C===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=it),C===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=it),!0):!1}function Ot(C,it){let V=m,K=!1;if(C){V=d.get(it),V===void 0&&(V=[],d.set(it,V));const ct=C.textures;if(V.length!==ct.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,Dt=ct.length;ot<Dt;ot++)V[ot]=n.COLOR_ATTACHMENT0+ot;V.length=ct.length,K=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,K=!0);K&&n.drawBuffers(V)}function ae(C){return g!==C?(n.useProgram(C),g=C,!0):!1}const Ht={[di]:n.FUNC_ADD,[zu]:n.FUNC_SUBTRACT,[Gu]:n.FUNC_REVERSE_SUBTRACT};Ht[Hu]=n.MIN,Ht[Vu]=n.MAX;const ue={[ku]:n.ZERO,[Wu]:n.ONE,[Xu]:n.SRC_COLOR,[za]:n.SRC_ALPHA,[ju]:n.SRC_ALPHA_SATURATE,[Ku]:n.DST_COLOR,[qu]:n.DST_ALPHA,[Yu]:n.ONE_MINUS_SRC_COLOR,[Ga]:n.ONE_MINUS_SRC_ALPHA,[$u]:n.ONE_MINUS_DST_COLOR,[Zu]:n.ONE_MINUS_DST_ALPHA,[Ju]:n.CONSTANT_COLOR,[Qu]:n.ONE_MINUS_CONSTANT_COLOR,[th]:n.CONSTANT_ALPHA,[eh]:n.ONE_MINUS_CONSTANT_ALPHA};function L(C,it,V,K,ct,ot,Dt,le,ye,Kt){if(C===$n){x===!0&&(At(n.BLEND),x=!1);return}if(x===!1&&(st(n.BLEND),x=!0),C!==Bu){if(C!==p||Kt!==y){if((h!==di||S!==di)&&(n.blendEquation(n.FUNC_ADD),h=di,S=di),Kt)switch(C){case Ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hl:n.blendFunc(n.ONE,n.ONE);break;case fl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case fl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}A=null,T=null,N=null,w=null,b.set(0,0,0),I=0,p=C,y=Kt}return}ct=ct||it,ot=ot||V,Dt=Dt||K,(it!==h||ct!==S)&&(n.blendEquationSeparate(Ht[it],Ht[ct]),h=it,S=ct),(V!==A||K!==T||ot!==N||Dt!==w)&&(n.blendFuncSeparate(ue[V],ue[K],ue[ot],ue[Dt]),A=V,T=K,N=ot,w=Dt),(le.equals(b)===!1||ye!==I)&&(n.blendColor(le.r,le.g,le.b,ye),b.copy(le),I=ye),p=C,y=!1}function Xe(C,it){C.side===_n?At(n.CULL_FACE):st(n.CULL_FACE);let V=C.side===Ie;it&&(V=!V),Bt(V),C.blending===Ji&&C.transparent===!1?L($n):L(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const K=C.stencilWrite;o.setTest(K),K&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ne(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(C){M!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),M=C)}function zt(C){C!==Fu?(st(n.CULL_FACE),C!==R&&(C===ul?n.cullFace(n.BACK):C===Ou?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),R=C}function yt(C){C!==H&&(W&&n.lineWidth(C),H=C)}function ne(C,it,V){C?(st(n.POLYGON_OFFSET_FILL),(G!==it||X!==V)&&(n.polygonOffset(it,V),G=it,X=V)):At(n.POLYGON_OFFSET_FILL)}function St(C){C?st(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function E(C){C===void 0&&(C=n.TEXTURE0+$-1),rt!==C&&(n.activeTexture(C),rt=C)}function _(C,it,V){V===void 0&&(rt===null?V=n.TEXTURE0+$-1:V=rt);let K=ut[V];K===void 0&&(K={type:void 0,texture:void 0},ut[V]=K),(K.type!==C||K.texture!==it)&&(rt!==V&&(n.activeTexture(V),rt=V),n.bindTexture(C,it||_t[C]),K.type=C,K.texture=it)}function F(){const C=ut[rt];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Vt(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ft(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Et(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function bt(C){jt.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),jt.copy(C))}function dt(C){q.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),q.copy(C))}function Gt(C,it){let V=c.get(it);V===void 0&&(V=new WeakMap,c.set(it,V));let K=V.get(C);K===void 0&&(K=n.getUniformBlockIndex(it,C.name),V.set(C,K))}function Ut(C,it){const K=c.get(it).get(C);l.get(it)!==K&&(n.uniformBlockBinding(it,K,C.__bindingPointIndex),l.set(it,K))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},rt=null,ut={},f={},d=new WeakMap,m=[],g=null,x=!1,p=null,h=null,A=null,T=null,S=null,N=null,w=null,b=new wt(0,0,0),I=0,y=!1,M=null,R=null,H=null,G=null,X=null,jt.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:st,disable:At,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:ae,setBlending:L,setMaterial:Xe,setFlipSided:Bt,setCullFace:zt,setLineWidth:yt,setPolygonOffset:ne,setScissorTest:St,activeTexture:E,bindTexture:_,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:ft,texImage3D:Et,updateUBOMapping:Gt,uniformBlockBinding:Ut,texStorage2D:Vt,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:xt,compressedTexSubImage2D:at,compressedTexSubImage3D:ht,scissor:bt,viewport:dt,reset:te}}function lc(n,t,e,i){const r=Bg(i);switch(e){case Nc:return n*t;case Oc:return n*t;case Bc:return n*t*2;case zc:return n*t/r.components*r.byteLength;case zo:return n*t/r.components*r.byteLength;case Gc:return n*t*2/r.components*r.byteLength;case Go:return n*t*2/r.components*r.byteLength;case Fc:return n*t*3/r.components*r.byteLength;case an:return n*t*4/r.components*r.byteLength;case Ho:return n*t*4/r.components*r.byteLength;case Es:case Ts:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case As:case bs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qa:case eo:return Math.max(n,16)*Math.max(t,8)/4;case Ja:case to:return Math.max(n,8)*Math.max(t,8)/2;case no:case io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ao:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case oo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case lo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case co:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case uo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case fo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case po:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case mo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case go:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case _o:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case xo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case vo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ws:case Mo:case So:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Hc:case yo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Eo:case To:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bg(n){switch(n){case Nn:case Lc:return{byteLength:1,components:1};case Nr:case Ic:case Gr:return{byteLength:2,components:1};case Oo:case Bo:return{byteLength:2,components:4};case xi:case Fo:case Pn:return{byteLength:4,components:1};case Uc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function zg(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return m?new OffscreenCanvas(E,_):Fs("canvas")}function x(E,_,F){let Z=1;const j=St(E);if((j.width>F||j.height>F)&&(Z=F/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(Z*j.width),xt=Math.floor(Z*j.height);f===void 0&&(f=g(Y,xt));const at=_?g(Y,xt):f;return at.width=Y,at.height=xt,at.getContext("2d").drawImage(E,0,0,Y,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+xt+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function p(E){return E.generateMipmaps}function h(E){n.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(E,_,F,Z,j=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=_;if(_===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),_===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),_===n.RGBA){const xt=j?$s:kt.getTransfer(Z);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=xt===$t?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function S(E,_){let F;return E?_===null||_===xi||_===lr?F=n.DEPTH24_STENCIL8:_===Pn?F=n.DEPTH32F_STENCIL8:_===Nr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===xi||_===lr?F=n.DEPTH_COMPONENT24:_===Pn?F=n.DEPTH_COMPONENT32F:_===Nr&&(F=n.DEPTH_COMPONENT16),F}function N(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==ln&&E.minFilter!==xn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function w(E){const _=E.target;_.removeEventListener("dispose",w),I(_),_.isVideoTexture&&u.delete(_)}function b(E){const _=E.target;_.removeEventListener("dispose",b),M(_)}function I(E){const _=i.get(E);if(_.__webglInit===void 0)return;const F=E.source,Z=d.get(F);if(Z){const j=Z[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(E),Object.keys(Z).length===0&&d.delete(F)}i.remove(E)}function y(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const F=E.source,Z=d.get(F);delete Z[_.__cacheKey],a.memory.textures--}function M(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let j=0;j<_.__webglFramebuffer[Z].length;j++)n.deleteFramebuffer(_.__webglFramebuffer[Z][j]);else n.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[Z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=E.textures;for(let Z=0,j=F.length;Z<j;Z++){const Y=i.get(F[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(F[Z])}i.remove(E)}let R=0;function H(){R=0}function G(){const E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function X(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function $(E,_){const F=i.get(E);if(E.isVideoTexture&&yt(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,E,_);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function W(E,_){const F=i.get(E);if(E.version>0&&F.__version!==E.version){q(F,E,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function J(E,_){const F=i.get(E);if(E.version>0&&F.__version!==E.version){q(F,E,_);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function k(E,_){const F=i.get(E);if(E.version>0&&F.__version!==E.version){et(F,E,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const rt={[$a]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},ut={[ln]:n.NEAREST,[uh]:n.NEAREST_MIPMAP_NEAREST,[Kr]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[na]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},Mt={[ph]:n.NEVER,[Mh]:n.ALWAYS,[mh]:n.LESS,[kc]:n.LEQUAL,[gh]:n.EQUAL,[vh]:n.GEQUAL,[_h]:n.GREATER,[xh]:n.NOTEQUAL};function Ft(E,_){if(_.type===Pn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===xn||_.magFilter===na||_.magFilter===Kr||_.magFilter===gi||_.minFilter===xn||_.minFilter===na||_.minFilter===Kr||_.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,rt[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,rt[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,rt[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ut[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ut[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Mt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ln||_.minFilter!==Kr&&_.minFilter!==gi||_.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function jt(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",w));const Z=_.source;let j=d.get(Z);j===void 0&&(j={},d.set(Z,j));const Y=X(_);if(Y!==E.__cacheKey){j[Y]===void 0&&(j[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[Y].usedTimes++;const xt=j[E.__cacheKey];xt!==void 0&&(j[E.__cacheKey].usedTimes--,xt.usedTimes===0&&y(_)),E.__cacheKey=Y,E.__webglTexture=j[Y].texture}return F}function q(E,_,F){let Z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=n.TEXTURE_3D);const j=jt(E,_),Y=_.source;e.bindTexture(Z,E.__webglTexture,n.TEXTURE0+F);const xt=i.get(Y);if(Y.version!==xt.__version||j===!0){e.activeTexture(n.TEXTURE0+F);const at=kt.getPrimaries(kt.workingColorSpace),ht=_.colorSpace===Yn?null:kt.getPrimaries(_.colorSpace),Vt=_.colorSpace===Yn||at===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let Q=x(_.image,!1,r.maxTextureSize);Q=ne(_,Q);const ft=s.convert(_.format,_.colorSpace),Et=s.convert(_.type);let bt=T(_.internalFormat,ft,Et,_.colorSpace,_.isVideoTexture);Ft(Z,_);let dt;const Gt=_.mipmaps,Ut=_.isVideoTexture!==!0,te=xt.__version===void 0||j===!0,C=Y.dataReady,it=N(_,Q);if(_.isDepthTexture)bt=S(_.format===cr,_.type),te&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,bt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,bt,Q.width,Q.height,0,ft,Et,null));else if(_.isDataTexture)if(Gt.length>0){Ut&&te&&e.texStorage2D(n.TEXTURE_2D,it,bt,Gt[0].width,Gt[0].height);for(let V=0,K=Gt.length;V<K;V++)dt=Gt[V],Ut?C&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,dt.width,dt.height,ft,Et,dt.data):e.texImage2D(n.TEXTURE_2D,V,bt,dt.width,dt.height,0,ft,Et,dt.data);_.generateMipmaps=!1}else Ut?(te&&e.texStorage2D(n.TEXTURE_2D,it,bt,Q.width,Q.height),C&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,Et,Q.data)):e.texImage2D(n.TEXTURE_2D,0,bt,Q.width,Q.height,0,ft,Et,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ut&&te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,bt,Gt[0].width,Gt[0].height,Q.depth);for(let V=0,K=Gt.length;V<K;V++)if(dt=Gt[V],_.format!==an)if(ft!==null)if(Ut){if(C)if(_.layerUpdates.size>0){const ct=lc(dt.width,dt.height,_.format,_.type);for(const ot of _.layerUpdates){const Dt=dt.data.subarray(ot*ct/dt.data.BYTES_PER_ELEMENT,(ot+1)*ct/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ot,dt.width,dt.height,1,ft,Dt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,dt.width,dt.height,Q.depth,ft,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,bt,dt.width,dt.height,Q.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?C&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,dt.width,dt.height,Q.depth,ft,Et,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,V,bt,dt.width,dt.height,Q.depth,0,ft,Et,dt.data)}else{Ut&&te&&e.texStorage2D(n.TEXTURE_2D,it,bt,Gt[0].width,Gt[0].height);for(let V=0,K=Gt.length;V<K;V++)dt=Gt[V],_.format!==an?ft!==null?Ut?C&&e.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,V,bt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?C&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,dt.width,dt.height,ft,Et,dt.data):e.texImage2D(n.TEXTURE_2D,V,bt,dt.width,dt.height,0,ft,Et,dt.data)}else if(_.isDataArrayTexture)if(Ut){if(te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,bt,Q.width,Q.height,Q.depth),C)if(_.layerUpdates.size>0){const V=lc(Q.width,Q.height,_.format,_.type);for(const K of _.layerUpdates){const ct=Q.data.subarray(K*V/Q.data.BYTES_PER_ELEMENT,(K+1)*V/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ft,Et,ct)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Et,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,bt,Q.width,Q.height,Q.depth,0,ft,Et,Q.data);else if(_.isData3DTexture)Ut?(te&&e.texStorage3D(n.TEXTURE_3D,it,bt,Q.width,Q.height,Q.depth),C&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Et,Q.data)):e.texImage3D(n.TEXTURE_3D,0,bt,Q.width,Q.height,Q.depth,0,ft,Et,Q.data);else if(_.isFramebufferTexture){if(te)if(Ut)e.texStorage2D(n.TEXTURE_2D,it,bt,Q.width,Q.height);else{let V=Q.width,K=Q.height;for(let ct=0;ct<it;ct++)e.texImage2D(n.TEXTURE_2D,ct,bt,V,K,0,ft,Et,null),V>>=1,K>>=1}}else if(Gt.length>0){if(Ut&&te){const V=St(Gt[0]);e.texStorage2D(n.TEXTURE_2D,it,bt,V.width,V.height)}for(let V=0,K=Gt.length;V<K;V++)dt=Gt[V],Ut?C&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,ft,Et,dt):e.texImage2D(n.TEXTURE_2D,V,bt,ft,Et,dt);_.generateMipmaps=!1}else if(Ut){if(te){const V=St(Q);e.texStorage2D(n.TEXTURE_2D,it,bt,V.width,V.height)}C&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,Et,Q)}else e.texImage2D(n.TEXTURE_2D,0,bt,ft,Et,Q);p(_)&&h(Z),xt.__version=Y.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function et(E,_,F){if(_.image.length!==6)return;const Z=jt(E,_),j=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);const Y=i.get(j);if(j.version!==Y.__version||Z===!0){e.activeTexture(n.TEXTURE0+F);const xt=kt.getPrimaries(kt.workingColorSpace),at=_.colorSpace===Yn?null:kt.getPrimaries(_.colorSpace),ht=_.colorSpace===Yn||xt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Vt=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!Vt&&!Q?ft[K]=x(_.image[K],!0,r.maxCubemapSize):ft[K]=Q?_.image[K].image:_.image[K],ft[K]=ne(_,ft[K]);const Et=ft[0],bt=s.convert(_.format,_.colorSpace),dt=s.convert(_.type),Gt=T(_.internalFormat,bt,dt,_.colorSpace),Ut=_.isVideoTexture!==!0,te=Y.__version===void 0||Z===!0,C=j.dataReady;let it=N(_,Et);Ft(n.TEXTURE_CUBE_MAP,_);let V;if(Vt){Ut&&te&&e.texStorage2D(n.TEXTURE_CUBE_MAP,it,Gt,Et.width,Et.height);for(let K=0;K<6;K++){V=ft[K].mipmaps;for(let ct=0;ct<V.length;ct++){const ot=V[ct];_.format!==an?bt!==null?Ut?C&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,ot.width,ot.height,bt,ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Gt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,ot.width,ot.height,bt,dt,ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Gt,ot.width,ot.height,0,bt,dt,ot.data)}}}else{if(V=_.mipmaps,Ut&&te){V.length>0&&it++;const K=St(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,it,Gt,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Ut?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,bt,dt,ft[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,ft[K].width,ft[K].height,0,bt,dt,ft[K].data);for(let ct=0;ct<V.length;ct++){const Dt=V[ct].image[K].image;Ut?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,Dt.width,Dt.height,bt,dt,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Gt,Dt.width,Dt.height,0,bt,dt,Dt.data)}}else{Ut?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,bt,dt,ft[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,bt,dt,ft[K]);for(let ct=0;ct<V.length;ct++){const ot=V[ct];Ut?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,bt,dt,ot.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Gt,bt,dt,ot.image[K])}}}p(_)&&h(n.TEXTURE_CUBE_MAP),Y.__version=j.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function _t(E,_,F,Z,j,Y){const xt=s.convert(F.format,F.colorSpace),at=s.convert(F.type),ht=T(F.internalFormat,xt,at,F.colorSpace),Vt=i.get(_),Q=i.get(F);if(Q.__renderTarget=_,!Vt.__hasExternalTextures){const ft=Math.max(1,_.width>>Y),Et=Math.max(1,_.height>>Y);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,Y,ht,ft,Et,_.depth,0,xt,at,null):e.texImage2D(j,Y,ht,ft,Et,0,xt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),zt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,j,Q.__webglTexture,0,Bt(_)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,j,Q.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(E,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const Z=_.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,Y=S(_.stencilBuffer,j),xt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=Bt(_);zt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,Y,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,E)}else{const Z=_.textures;for(let j=0;j<Z.length;j++){const Y=Z[j],xt=s.convert(Y.format,Y.colorSpace),at=s.convert(Y.type),ht=T(Y.internalFormat,xt,at,Y.colorSpace),Vt=Bt(_);F&&zt(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,ht,_.width,_.height):zt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt,ht,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ht,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function At(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const j=Z.__webglTexture,Y=Bt(_);if(_.depthTexture.format===Qi)zt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(_.depthTexture.format===cr)zt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pt(E){const _=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const Z=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=Z}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");At(_.__webglFramebuffer,E)}else if(F){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=n.createRenderbuffer(),st(_.__webglDepthbuffer[Z],E,!1);else{const j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),st(_.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,j)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(E,_,F){const Z=i.get(E);_!==void 0&&_t(Z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Pt(E)}function ae(E){const _=E.texture,F=i.get(E),Z=i.get(_);E.addEventListener("dispose",b);const j=E.textures,Y=E.isWebGLCubeRenderTarget===!0,xt=j.length>1;if(xt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=_.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let ht=0;ht<_.mipmaps.length;ht++)F.__webglFramebuffer[at][ht]=n.createFramebuffer()}else F.__webglFramebuffer[at]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)F.__webglFramebuffer[at]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xt)for(let at=0,ht=j.length;at<ht;at++){const Vt=i.get(j[at]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&zt(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const ht=j[at];F.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[at]);const Vt=s.convert(ht.format,ht.colorSpace),Q=s.convert(ht.type),ft=T(ht.internalFormat,Vt,Q,ht.colorSpace,E.isXRRenderTarget===!0),Et=Bt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,ft,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,F.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),st(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ft(n.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)_t(F.__webglFramebuffer[at][ht],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ht);else _t(F.__webglFramebuffer[at],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(_)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let at=0,ht=j.length;at<ht;at++){const Vt=j[at],Q=i.get(Vt);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Ft(n.TEXTURE_2D,Vt),_t(F.__webglFramebuffer,E,Vt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),p(Vt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),Ft(at,_),_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)_t(F.__webglFramebuffer[ht],E,_,n.COLOR_ATTACHMENT0,at,ht);else _t(F.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,at,0);p(_)&&h(at),e.unbindTexture()}E.depthBuffer&&Pt(E)}function Ht(E){const _=E.textures;for(let F=0,Z=_.length;F<Z;F++){const j=_[F];if(p(j)){const Y=A(E),xt=i.get(j).__webglTexture;e.bindTexture(Y,xt),h(Y),e.unbindTexture()}}}const ue=[],L=[];function Xe(E){if(E.samples>0){if(zt(E)===!1){const _=E.textures,F=E.width,Z=E.height;let j=n.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(E),at=_.length>1;if(at)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[ht]);const Vt=i.get(_[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Vt,0)}n.blitFramebuffer(0,0,F,Z,0,0,F,Z,j,n.NEAREST),l===!0&&(ue.length=0,L.length=0,ue.push(n.COLOR_ATTACHMENT0+ht),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ue.push(Y),L.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,xt.__webglColorRenderbuffer[ht]);const Vt=i.get(_[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,Vt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Bt(E){return Math.min(r.maxSamples,E.samples)}function zt(E){const _=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function yt(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function ne(E,_){const F=E.colorSpace,Z=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==pr&&F!==Yn&&(kt.getTransfer(F)===$t?(Z!==an||j!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function St(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=k,this.rebindTextures=Ot,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=zt}function Gg(n,t){function e(i,r=Yn){let s;const a=kt.getTransfer(r);if(i===Nn)return n.UNSIGNED_BYTE;if(i===Oo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lc)return n.BYTE;if(i===Ic)return n.SHORT;if(i===Nr)return n.UNSIGNED_SHORT;if(i===Fo)return n.INT;if(i===xi)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===Gr)return n.HALF_FLOAT;if(i===Nc)return n.ALPHA;if(i===Fc)return n.RGB;if(i===an)return n.RGBA;if(i===Oc)return n.LUMINANCE;if(i===Bc)return n.LUMINANCE_ALPHA;if(i===Qi)return n.DEPTH_COMPONENT;if(i===cr)return n.DEPTH_STENCIL;if(i===zc)return n.RED;if(i===zo)return n.RED_INTEGER;if(i===Gc)return n.RG;if(i===Go)return n.RG_INTEGER;if(i===Ho)return n.RGBA_INTEGER;if(i===Es||i===Ts||i===As||i===bs)if(a===$t)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Es)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Es)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ts)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===As)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ja||i===Qa||i===to||i===eo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ja)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===to)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===no||i===io||i===ro)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===no||i===io)return a===$t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ro)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===so||i===ao||i===oo||i===lo||i===co||i===uo||i===ho||i===fo||i===po||i===mo||i===go||i===_o||i===xo||i===vo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===so)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ao)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===co)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ho)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===po)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===go)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_o)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ws||i===Mo||i===So)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ws)return a===$t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===So)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hc||i===yo||i===Eo||i===To)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ws)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Eo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===To)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Hg extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qi extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vg={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),h=this._getHandJoint(c,x);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new qi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Fe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Qn({vertexShader:kg,fragmentShader:Wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new _r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yg extends mr{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,g=null;const x=new Xg,p=e.getContextAttributes();let h=null,A=null;const T=[],S=[],N=new Xt;let w=null;const b=new $e;b.viewport=new ce;const I=new $e;I.viewport=new ce;const y=[b,I],M=new Hg;let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=T[q];return et===void 0&&(et=new Ca,T[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=T[q];return et===void 0&&(et=new Ca,T[q]=et),et.getGripSpace()},this.getHand=function(q){let et=T[q];return et===void 0&&(et=new Ca,T[q]=et),et.getHandSpace()};function G(q){const et=S.indexOf(q.inputSource);if(et===-1)return;const _t=T[et];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",$);for(let q=0;q<T.length;q++){const et=S[q];et!==null&&(S[q]=null,T[q].disconnect(et))}R=null,H=null,x.reset(),t.setRenderTarget(h),m=null,d=null,f=null,r=null,A=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",X),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(N),r.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new vi(m.framebufferWidth,m.framebufferHeight,{format:an,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,_t=null,st=null;p.depth&&(st=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?cr:Qi,_t=p.stencil?lr:xi);const At={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(At),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),A=new vi(d.textureWidth,d.textureHeight,{format:an,type:Nn,depthTexture:new nu(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),jt.setContext(r),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(q){for(let et=0;et<q.removed.length;et++){const _t=q.removed[et],st=S.indexOf(_t);st>=0&&(S[st]=null,T[st].disconnect(_t))}for(let et=0;et<q.added.length;et++){const _t=q.added[et];let st=S.indexOf(_t);if(st===-1){for(let Pt=0;Pt<T.length;Pt++)if(Pt>=S.length){S.push(_t),st=Pt;break}else if(S[Pt]===null){S[Pt]=_t,st=Pt;break}if(st===-1)break}const At=T[st];At&&At.connect(_t)}}const W=new U,J=new U;function k(q,et,_t){W.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(_t.matrixWorld);const st=W.distanceTo(J),At=et.projectionMatrix.elements,Pt=_t.projectionMatrix.elements,Ot=At[14]/(At[10]-1),ae=At[14]/(At[10]+1),Ht=(At[9]+1)/At[5],ue=(At[9]-1)/At[5],L=(At[8]-1)/At[0],Xe=(Pt[8]+1)/Pt[0],Bt=Ot*L,zt=Ot*Xe,yt=st/(-L+Xe),ne=yt*-L;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ne),q.translateZ(yt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),At[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const St=Ot+yt,E=ae+yt,_=Bt-ne,F=zt+(st-ne),Z=Ht*ae/E*St,j=ue*ae/E*St;q.projectionMatrix.makePerspective(_,F,Z,j,St,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let et=q.near,_t=q.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),M.near=I.near=b.near=et,M.far=I.far=b.far=_t,(R!==M.near||H!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,H=M.far),b.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,M.layers.mask=b.layers.mask|I.layers.mask;const st=q.parent,At=M.cameras;rt(M,st);for(let Pt=0;Pt<At.length;Pt++)rt(At[Pt],st);At.length===2?k(M,b,I):M.projectionMatrix.copy(b.projectionMatrix),ut(q,M,st)};function ut(q,et,_t){_t===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Fr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Mt=null;function Ft(q,et){if(u=et.getViewerPose(c||a),g=et,u!==null){const _t=u.views;m!==null&&(t.setRenderTargetFramebuffer(A,m.framebuffer),t.setRenderTarget(A));let st=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Pt=0;Pt<_t.length;Pt++){const Ot=_t[Pt];let ae=null;if(m!==null)ae=m.getViewport(Ot);else{const ue=f.getViewSubImage(d,Ot);ae=ue.viewport,Pt===0&&(t.setRenderTargetTextures(A,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(A))}let Ht=y[Pt];Ht===void 0&&(Ht=new $e,Ht.layers.enable(Pt),Ht.viewport=new ce,y[Pt]=Ht),Ht.matrix.fromArray(Ot.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Ot.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ae.x,ae.y,ae.width,ae.height),Pt===0&&(M.matrix.copy(Ht.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(Ht)}const At=r.enabledFeatures;if(At&&At.includes("depth-sensing")){const Pt=f.getDepthInformation(_t[0]);Pt&&Pt.isValid&&Pt.texture&&x.init(t,Pt,r.renderState)}}for(let _t=0;_t<T.length;_t++){const st=S[_t],At=T[_t];st!==null&&At!==void 0&&At.update(st,et,c||a)}Mt&&Mt(q,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}const jt=new tu;jt.setAnimationLoop(Ft),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}}const ui=new Mn,qg=new se;function Zg(n,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,jc(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,A,T,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),x(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,A,T):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Ie&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Ie&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const A=t.get(h),T=A.envMap,S=A.envMapRotation;T&&(p.envMap.value=T,ui.copy(S),ui.x*=-1,ui.y*=-1,ui.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),p.envMapRotation.value.setFromMatrix4(qg.makeRotationFromEuler(ui)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,A,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*A,p.scale.value=T*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,A){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ie&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){const A=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Kg(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const S=T.program;i.uniformBlockBinding(A,S)}function c(A,T){let S=r[A.id];S===void 0&&(g(A),S=u(A),r[A.id]=S,A.addEventListener("dispose",p));const N=T.program;i.updateUBOMapping(A,N);const w=t.render.frame;s[A.id]!==w&&(d(A),s[A.id]=w)}function u(A){const T=f();A.__bindingPointIndex=T;const S=n.createBuffer(),N=A.__size,w=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,N,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=r[A.id],S=A.uniforms,N=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let w=0,b=S.length;w<b;w++){const I=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,M=I.length;y<M;y++){const R=I[y];if(m(R,w,y,N)===!0){const H=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let $=0;$<G.length;$++){const W=G[$],J=x(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,H+X,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,T,S,N){const w=A.value,b=T+"_"+S;if(N[b]===void 0)return typeof w=="number"||typeof w=="boolean"?N[b]=w:N[b]=w.clone(),!0;{const I=N[b];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return N[b]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(A){const T=A.uniforms;let S=0;const N=16;for(let b=0,I=T.length;b<I;b++){const y=Array.isArray(T[b])?T[b]:[T[b]];for(let M=0,R=y.length;M<R;M++){const H=y[M],G=Array.isArray(H.value)?H.value:[H.value];for(let X=0,$=G.length;X<$;X++){const W=G[X],J=x(W),k=S%N,rt=k%J.boundary,ut=k+rt;S+=rt,ut!==0&&N-ut<J.storage&&(S+=N-ut),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=J.storage}}}const w=S%N;return w>0&&(S+=N-w),A.__size=S,A.__cache={},this}function x(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function p(A){const T=A.target;T.removeEventListener("dispose",p);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class $g{constructor(t={}){const{canvas:e=Oh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,h=null;const A=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=jn,this.toneMappingExposure=1;const S=this;let N=!1,w=0,b=0,I=null,y=-1,M=null;const R=new ce,H=new ce;let G=null;const X=new wt(0);let $=0,W=e.width,J=e.height,k=1,rt=null,ut=null;const Mt=new ce(0,0,W,J),Ft=new ce(0,0,W,J);let jt=!1;const q=new Wo;let et=!1,_t=!1;const st=new se,At=new se,Pt=new U,Ot=new ce,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function ue(){return I===null?k:1}let L=i;function Xe(v,P){return e.getContext(v,P)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${No}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),L===null){const P="webgl2";if(L=Xe(P,v),L===null)throw Xe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Bt,zt,yt,ne,St,E,_,F,Z,j,Y,xt,at,ht,Vt,Q,ft,Et,bt,dt,Gt,Ut,te,C;function it(){Bt=new em(L),Bt.init(),Ut=new Gg(L,Bt),zt=new Kp(L,Bt,t,Ut),yt=new Og(L,Bt),zt.reverseDepthBuffer&&d&&yt.buffers.depth.setReversed(!0),ne=new rm(L),St=new yg,E=new zg(L,Bt,yt,St,zt,Ut,ne),_=new jp(S),F=new tm(S),Z=new hf(L),te=new qp(L,Z),j=new nm(L,Z,ne,te),Y=new am(L,j,Z,ne),bt=new sm(L,zt,E),Q=new $p(St),xt=new Sg(S,_,F,Bt,zt,te,Q),at=new Zg(S,St),ht=new Tg,Vt=new Pg(Bt),Et=new Yp(S,_,F,yt,Y,m,l),ft=new Ng(S,Y,zt),C=new Kg(L,ne,zt,yt),dt=new Zp(L,Bt,ne),Gt=new im(L,Bt,ne),ne.programs=xt.programs,S.capabilities=zt,S.extensions=Bt,S.properties=St,S.renderLists=ht,S.shadowMap=ft,S.state=yt,S.info=ne}it();const V=new Yg(S,L);this.xr=V,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const v=Bt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Bt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(v){v!==void 0&&(k=v,this.setSize(W,J,!1))},this.getSize=function(v){return v.set(W,J)},this.setSize=function(v,P,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,J=P,e.width=Math.floor(v*k),e.height=Math.floor(P*k),B===!0&&(e.style.width=v+"px",e.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(W*k,J*k).floor()},this.setDrawingBufferSize=function(v,P,B){W=v,J=P,k=B,e.width=Math.floor(v*B),e.height=Math.floor(P*B),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(Mt)},this.setViewport=function(v,P,B,z){v.isVector4?Mt.set(v.x,v.y,v.z,v.w):Mt.set(v,P,B,z),yt.viewport(R.copy(Mt).multiplyScalar(k).round())},this.getScissor=function(v){return v.copy(Ft)},this.setScissor=function(v,P,B,z){v.isVector4?Ft.set(v.x,v.y,v.z,v.w):Ft.set(v,P,B,z),yt.scissor(H.copy(Ft).multiplyScalar(k).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(v){yt.setScissorTest(jt=v)},this.setOpaqueSort=function(v){rt=v},this.setTransparentSort=function(v){ut=v},this.getClearColor=function(v){return v.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(v=!0,P=!0,B=!0){let z=0;if(v){let D=!1;if(I!==null){const tt=I.texture.format;D=tt===Ho||tt===Go||tt===zo}if(D){const tt=I.texture.type,lt=tt===Nn||tt===xi||tt===Nr||tt===lr||tt===Oo||tt===Bo,pt=Et.getClearColor(),mt=Et.getClearAlpha(),Rt=pt.r,Lt=pt.g,gt=pt.b;lt?(g[0]=Rt,g[1]=Lt,g[2]=gt,g[3]=mt,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Rt,x[1]=Lt,x[2]=gt,x[3]=mt,L.clearBufferiv(L.COLOR,0,x))}else z|=L.COLOR_BUFFER_BIT}P&&(z|=L.DEPTH_BUFFER_BIT),B&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ht.dispose(),Vt.dispose(),St.dispose(),_.dispose(),F.dispose(),Y.dispose(),te.dispose(),C.dispose(),xt.dispose(),V.dispose(),V.removeEventListener("sessionstart",nl),V.removeEventListener("sessionend",il),ri.stop()};function K(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const v=ne.autoReset,P=ft.enabled,B=ft.autoUpdate,z=ft.needsUpdate,D=ft.type;it(),ne.autoReset=v,ft.enabled=P,ft.autoUpdate=B,ft.needsUpdate=z,ft.type=D}function ot(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Dt(v){const P=v.target;P.removeEventListener("dispose",Dt),le(P)}function le(v){ye(v),St.remove(v)}function ye(v){const P=St.get(v).programs;P!==void 0&&(P.forEach(function(B){xt.releaseProgram(B)}),v.isShaderMaterial&&xt.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,B,z,D,tt){P===null&&(P=ae);const lt=D.isMesh&&D.matrixWorld.determinant()<0,pt=Iu(v,P,B,z,D);yt.setMaterial(z,lt);let mt=B.index,Rt=1;if(z.wireframe===!0){if(mt=j.getWireframeAttribute(B),mt===void 0)return;Rt=2}const Lt=B.drawRange,gt=B.attributes.position;let Wt=Lt.start*Rt,ee=(Lt.start+Lt.count)*Rt;tt!==null&&(Wt=Math.max(Wt,tt.start*Rt),ee=Math.min(ee,(tt.start+tt.count)*Rt)),mt!==null?(Wt=Math.max(Wt,0),ee=Math.min(ee,mt.count)):gt!=null&&(Wt=Math.max(Wt,0),ee=Math.min(ee,gt.count));const ie=ee-Wt;if(ie<0||ie===1/0)return;te.setup(D,z,pt,B,mt);let Ne,Yt=dt;if(mt!==null&&(Ne=Z.get(mt),Yt=Gt,Yt.setIndex(Ne)),D.isMesh)z.wireframe===!0?(yt.setLineWidth(z.wireframeLinewidth*ue()),Yt.setMode(L.LINES)):Yt.setMode(L.TRIANGLES);else if(D.isLine){let vt=z.linewidth;vt===void 0&&(vt=1),yt.setLineWidth(vt*ue()),D.isLineSegments?Yt.setMode(L.LINES):D.isLineLoop?Yt.setMode(L.LINE_LOOP):Yt.setMode(L.LINE_STRIP)}else D.isPoints?Yt.setMode(L.POINTS):D.isSprite&&Yt.setMode(L.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Yt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const vt=D._multiDrawStarts,En=D._multiDrawCounts,qt=D._multiDrawCount,tn=mt?Z.get(mt).bytesPerElement:1,Ci=St.get(z).currentProgram.getUniforms();for(let Be=0;Be<qt;Be++)Ci.setValue(L,"_gl_DrawID",Be),Yt.render(vt[Be]/tn,En[Be])}else if(D.isInstancedMesh)Yt.renderInstances(Wt,ie,D.count);else if(B.isInstancedBufferGeometry){const vt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,En=Math.min(B.instanceCount,vt);Yt.renderInstances(Wt,ie,En)}else Yt.render(Wt,ie)};function Kt(v,P,B){v.transparent===!0&&v.side===_n&&v.forceSinglePass===!1?(v.side=Ie,v.needsUpdate=!0,Zr(v,P,B),v.side=Jn,v.needsUpdate=!0,Zr(v,P,B),v.side=_n):Zr(v,P,B)}this.compile=function(v,P,B=null){B===null&&(B=v),h=Vt.get(B),h.init(P),T.push(h),B.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),v!==B&&v.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),h.setupLights();const z=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const tt=D.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const pt=tt[lt];Kt(pt,B,D),z.add(pt)}else Kt(tt,B,D),z.add(tt)}),T.pop(),h=null,z},this.compileAsync=function(v,P,B=null){const z=this.compile(v,P,B);return new Promise(D=>{function tt(){if(z.forEach(function(lt){St.get(lt).currentProgram.isReady()&&z.delete(lt)}),z.size===0){D(v);return}setTimeout(tt,10)}Bt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Qe=null;function yn(v){Qe&&Qe(v)}function nl(){ri.stop()}function il(){ri.start()}const ri=new tu;ri.setAnimationLoop(yn),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(v){Qe=v,V.setAnimationLoop(v),v===null?ri.stop():ri.start()},V.addEventListener("sessionstart",nl),V.addEventListener("sessionend",il),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(P),P=V.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,P,I),h=Vt.get(v,T.length),h.init(P),T.push(h),At.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),q.setFromProjectionMatrix(At),_t=this.localClippingEnabled,et=Q.init(this.clippingPlanes,_t),p=ht.get(v,A.length),p.init(),A.push(p),V.enabled===!0&&V.isPresenting===!0){const tt=S.xr.getDepthSensingMesh();tt!==null&&ea(tt,P,-1/0,S.sortObjects)}ea(v,P,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(rt,ut),Ht=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ht&&Et.addToRenderList(p,v),this.info.render.frame++,et===!0&&Q.beginShadows();const B=h.state.shadowsArray;ft.render(B,v,P),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,D=p.transmissive;if(h.setupLights(),P.isArrayCamera){const tt=P.cameras;if(D.length>0)for(let lt=0,pt=tt.length;lt<pt;lt++){const mt=tt[lt];sl(z,D,v,mt)}Ht&&Et.render(v);for(let lt=0,pt=tt.length;lt<pt;lt++){const mt=tt[lt];rl(p,v,mt,mt.viewport)}}else D.length>0&&sl(z,D,v,P),Ht&&Et.render(v),rl(p,v,P);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(S,v,P),te.resetDefaultState(),y=-1,M=null,T.pop(),T.length>0?(h=T[T.length-1],et===!0&&Q.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function ea(v,P,B,z){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||q.intersectsSprite(v)){z&&Ot.setFromMatrixPosition(v.matrixWorld).applyMatrix4(At);const lt=Y.update(v),pt=v.material;pt.visible&&p.push(v,lt,pt,B,Ot.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||q.intersectsObject(v))){const lt=Y.update(v),pt=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ot.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ot.copy(lt.boundingSphere.center)),Ot.applyMatrix4(v.matrixWorld).applyMatrix4(At)),Array.isArray(pt)){const mt=lt.groups;for(let Rt=0,Lt=mt.length;Rt<Lt;Rt++){const gt=mt[Rt],Wt=pt[gt.materialIndex];Wt&&Wt.visible&&p.push(v,lt,Wt,B,Ot.z,gt)}}else pt.visible&&p.push(v,lt,pt,B,Ot.z,null)}}const tt=v.children;for(let lt=0,pt=tt.length;lt<pt;lt++)ea(tt[lt],P,B,z)}function rl(v,P,B,z){const D=v.opaque,tt=v.transmissive,lt=v.transparent;h.setupLightsView(B),et===!0&&Q.setGlobalState(S.clippingPlanes,B),z&&yt.viewport(R.copy(z)),D.length>0&&qr(D,P,B),tt.length>0&&qr(tt,P,B),lt.length>0&&qr(lt,P,B),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function sl(v,P,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[z.id]===void 0&&(h.state.transmissionRenderTarget[z.id]=new vi(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Gr:Nn,minFilter:gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));const tt=h.state.transmissionRenderTarget[z.id],lt=z.viewport||R;tt.setSize(lt.z,lt.w);const pt=S.getRenderTarget();S.setRenderTarget(tt),S.getClearColor(X),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),Ht&&Et.render(B);const mt=S.toneMapping;S.toneMapping=jn;const Rt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),h.setupLightsView(z),et===!0&&Q.setGlobalState(S.clippingPlanes,z),qr(v,B,z),E.updateMultisampleRenderTarget(tt),E.updateRenderTargetMipmap(tt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let gt=0,Wt=P.length;gt<Wt;gt++){const ee=P[gt],ie=ee.object,Ne=ee.geometry,Yt=ee.material,vt=ee.group;if(Yt.side===_n&&ie.layers.test(z.layers)){const En=Yt.side;Yt.side=Ie,Yt.needsUpdate=!0,al(ie,B,z,Ne,Yt,vt),Yt.side=En,Yt.needsUpdate=!0,Lt=!0}}Lt===!0&&(E.updateMultisampleRenderTarget(tt),E.updateRenderTargetMipmap(tt))}S.setRenderTarget(pt),S.setClearColor(X,$),Rt!==void 0&&(z.viewport=Rt),S.toneMapping=mt}function qr(v,P,B){const z=P.isScene===!0?P.overrideMaterial:null;for(let D=0,tt=v.length;D<tt;D++){const lt=v[D],pt=lt.object,mt=lt.geometry,Rt=z===null?lt.material:z,Lt=lt.group;pt.layers.test(B.layers)&&al(pt,P,B,mt,Rt,Lt)}}function al(v,P,B,z,D,tt){v.onBeforeRender(S,P,B,z,D,tt),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(S,P,B,z,v,tt),D.transparent===!0&&D.side===_n&&D.forceSinglePass===!1?(D.side=Ie,D.needsUpdate=!0,S.renderBufferDirect(B,P,z,D,v,tt),D.side=Jn,D.needsUpdate=!0,S.renderBufferDirect(B,P,z,D,v,tt),D.side=_n):S.renderBufferDirect(B,P,z,D,v,tt),v.onAfterRender(S,P,B,z,D,tt)}function Zr(v,P,B){P.isScene!==!0&&(P=ae);const z=St.get(v),D=h.state.lights,tt=h.state.shadowsArray,lt=D.state.version,pt=xt.getParameters(v,D.state,tt,P,B),mt=xt.getProgramCacheKey(pt);let Rt=z.programs;z.environment=v.isMeshStandardMaterial?P.environment:null,z.fog=P.fog,z.envMap=(v.isMeshStandardMaterial?F:_).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Rt===void 0&&(v.addEventListener("dispose",Dt),Rt=new Map,z.programs=Rt);let Lt=Rt.get(mt);if(Lt!==void 0){if(z.currentProgram===Lt&&z.lightsStateVersion===lt)return ll(v,pt),Lt}else pt.uniforms=xt.getUniforms(v),v.onBeforeCompile(pt,S),Lt=xt.acquireProgram(pt,mt),Rt.set(mt,Lt),z.uniforms=pt.uniforms;const gt=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(gt.clippingPlanes=Q.uniform),ll(v,pt),z.needsLights=Nu(v),z.lightsStateVersion=lt,z.needsLights&&(gt.ambientLightColor.value=D.state.ambient,gt.lightProbe.value=D.state.probe,gt.directionalLights.value=D.state.directional,gt.directionalLightShadows.value=D.state.directionalShadow,gt.spotLights.value=D.state.spot,gt.spotLightShadows.value=D.state.spotShadow,gt.rectAreaLights.value=D.state.rectArea,gt.ltc_1.value=D.state.rectAreaLTC1,gt.ltc_2.value=D.state.rectAreaLTC2,gt.pointLights.value=D.state.point,gt.pointLightShadows.value=D.state.pointShadow,gt.hemisphereLights.value=D.state.hemi,gt.directionalShadowMap.value=D.state.directionalShadowMap,gt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,gt.spotShadowMap.value=D.state.spotShadowMap,gt.spotLightMatrix.value=D.state.spotLightMatrix,gt.spotLightMap.value=D.state.spotLightMap,gt.pointShadowMap.value=D.state.pointShadowMap,gt.pointShadowMatrix.value=D.state.pointShadowMatrix),z.currentProgram=Lt,z.uniformsList=null,Lt}function ol(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=Rs.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function ll(v,P){const B=St.get(v);B.outputColorSpace=P.outputColorSpace,B.batching=P.batching,B.batchingColor=P.batchingColor,B.instancing=P.instancing,B.instancingColor=P.instancingColor,B.instancingMorph=P.instancingMorph,B.skinning=P.skinning,B.morphTargets=P.morphTargets,B.morphNormals=P.morphNormals,B.morphColors=P.morphColors,B.morphTargetsCount=P.morphTargetsCount,B.numClippingPlanes=P.numClippingPlanes,B.numIntersection=P.numClipIntersection,B.vertexAlphas=P.vertexAlphas,B.vertexTangents=P.vertexTangents,B.toneMapping=P.toneMapping}function Iu(v,P,B,z,D){P.isScene!==!0&&(P=ae),E.resetTextureUnits();const tt=P.fog,lt=z.isMeshStandardMaterial?P.environment:null,pt=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:pr,mt=(z.isMeshStandardMaterial?F:_).get(z.envMap||lt),Rt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Lt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),gt=!!B.morphAttributes.position,Wt=!!B.morphAttributes.normal,ee=!!B.morphAttributes.color;let ie=jn;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ie=S.toneMapping);const Ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Yt=Ne!==void 0?Ne.length:0,vt=St.get(z),En=h.state.lights;if(et===!0&&(_t===!0||v!==M)){const Ye=v===M&&z.id===y;Q.setState(z,v,Ye)}let qt=!1;z.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==En.state.version||vt.outputColorSpace!==pt||D.isBatchedMesh&&vt.batching===!1||!D.isBatchedMesh&&vt.batching===!0||D.isBatchedMesh&&vt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&vt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&vt.instancing===!1||!D.isInstancedMesh&&vt.instancing===!0||D.isSkinnedMesh&&vt.skinning===!1||!D.isSkinnedMesh&&vt.skinning===!0||D.isInstancedMesh&&vt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&vt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&vt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&vt.instancingMorph===!1&&D.morphTexture!==null||vt.envMap!==mt||z.fog===!0&&vt.fog!==tt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Q.numPlanes||vt.numIntersection!==Q.numIntersection)||vt.vertexAlphas!==Rt||vt.vertexTangents!==Lt||vt.morphTargets!==gt||vt.morphNormals!==Wt||vt.morphColors!==ee||vt.toneMapping!==ie||vt.morphTargetsCount!==Yt)&&(qt=!0):(qt=!0,vt.__version=z.version);let tn=vt.currentProgram;qt===!0&&(tn=Zr(z,P,D));let Ci=!1,Be=!1,Mr=!1;const re=tn.getUniforms(),fn=vt.uniforms;if(yt.useProgram(tn.program)&&(Ci=!0,Be=!0,Mr=!0),z.id!==y&&(y=z.id,Be=!0),Ci||M!==v){yt.buffers.depth.getReversed()?(st.copy(v.projectionMatrix),zh(st),Gh(st),re.setValue(L,"projectionMatrix",st)):re.setValue(L,"projectionMatrix",v.projectionMatrix),re.setValue(L,"viewMatrix",v.matrixWorldInverse);const Bn=re.map.cameraPosition;Bn!==void 0&&Bn.setValue(L,Pt.setFromMatrixPosition(v.matrixWorld)),zt.logarithmicDepthBuffer&&re.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&re.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Be=!0,Mr=!0)}if(D.isSkinnedMesh){re.setOptional(L,D,"bindMatrix"),re.setOptional(L,D,"bindMatrixInverse");const Ye=D.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),re.setValue(L,"boneTexture",Ye.boneTexture,E))}D.isBatchedMesh&&(re.setOptional(L,D,"batchingTexture"),re.setValue(L,"batchingTexture",D._matricesTexture,E),re.setOptional(L,D,"batchingIdTexture"),re.setValue(L,"batchingIdTexture",D._indirectTexture,E),re.setOptional(L,D,"batchingColorTexture"),D._colorsTexture!==null&&re.setValue(L,"batchingColorTexture",D._colorsTexture,E));const Sr=B.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&bt.update(D,B,tn),(Be||vt.receiveShadow!==D.receiveShadow)&&(vt.receiveShadow=D.receiveShadow,re.setValue(L,"receiveShadow",D.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(fn.envMap.value=mt,fn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&P.environment!==null&&(fn.envMapIntensity.value=P.environmentIntensity),Be&&(re.setValue(L,"toneMappingExposure",S.toneMappingExposure),vt.needsLights&&Uu(fn,Mr),tt&&z.fog===!0&&at.refreshFogUniforms(fn,tt),at.refreshMaterialUniforms(fn,z,k,J,h.state.transmissionRenderTarget[v.id]),Rs.upload(L,ol(vt),fn,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Rs.upload(L,ol(vt),fn,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&re.setValue(L,"center",D.center),re.setValue(L,"modelViewMatrix",D.modelViewMatrix),re.setValue(L,"normalMatrix",D.normalMatrix),re.setValue(L,"modelMatrix",D.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ye=z.uniformsGroups;for(let Bn=0,zn=Ye.length;Bn<zn;Bn++){const cl=Ye[Bn];C.update(cl,tn),C.bind(cl,tn)}}return tn}function Uu(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Nu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,P,B){St.get(v.texture).__webglTexture=P,St.get(v.depthTexture).__webglTexture=B;const z=St.get(v);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,P){const B=St.get(v);B.__webglFramebuffer=P,B.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,B=0){I=v,w=P,b=B;let z=!0,D=null,tt=!1,lt=!1;if(v){const mt=St.get(v);if(mt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(mt.__webglFramebuffer===void 0)E.setupRenderTarget(v);else if(mt.__hasExternalTextures)E.rebindTextures(v,St.get(v.texture).__webglTexture,St.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const gt=v.depthTexture;if(mt.__boundDepthTexture!==gt){if(gt!==null&&St.has(gt)&&(v.width!==gt.image.width||v.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(v)}}const Rt=v.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const Lt=St.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Lt[P])?D=Lt[P][B]:D=Lt[P],tt=!0):v.samples>0&&E.useMultisampledRTT(v)===!1?D=St.get(v).__webglMultisampledFramebuffer:Array.isArray(Lt)?D=Lt[B]:D=Lt,R.copy(v.viewport),H.copy(v.scissor),G=v.scissorTest}else R.copy(Mt).multiplyScalar(k).floor(),H.copy(Ft).multiplyScalar(k).floor(),G=jt;if(yt.bindFramebuffer(L.FRAMEBUFFER,D)&&z&&yt.drawBuffers(v,D),yt.viewport(R),yt.scissor(H),yt.setScissorTest(G),tt){const mt=St.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,mt.__webglTexture,B)}else if(lt){const mt=St.get(v.texture),Rt=P||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,mt.__webglTexture,B||0,Rt)}y=-1},this.readRenderTargetPixels=function(v,P,B,z,D,tt,lt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=St.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){yt.bindFramebuffer(L.FRAMEBUFFER,pt);try{const mt=v.texture,Rt=mt.format,Lt=mt.type;if(!zt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-z&&B>=0&&B<=v.height-D&&L.readPixels(P,B,z,D,Ut.convert(Rt),Ut.convert(Lt),tt)}finally{const mt=I!==null?St.get(I).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(v,P,B,z,D,tt,lt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=St.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){const mt=v.texture,Rt=mt.format,Lt=mt.type;if(!zt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=v.width-z&&B>=0&&B<=v.height-D){yt.bindFramebuffer(L.FRAMEBUFFER,pt);const gt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,gt),L.bufferData(L.PIXEL_PACK_BUFFER,tt.byteLength,L.STREAM_READ),L.readPixels(P,B,z,D,Ut.convert(Rt),Ut.convert(Lt),0);const Wt=I!==null?St.get(I).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,Wt);const ee=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Bh(L,ee,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,gt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,tt),L.deleteBuffer(gt),L.deleteSync(ee),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,P=null,B=0){v.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,v=arguments[1]);const z=Math.pow(2,-B),D=Math.floor(v.image.width*z),tt=Math.floor(v.image.height*z),lt=P!==null?P.x:0,pt=P!==null?P.y:0;E.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,lt,pt,D,tt),yt.unbindTexture()},this.copyTextureToTexture=function(v,P,B=null,z=null,D=0){v.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,v=arguments[1],P=arguments[2],D=arguments[3]||0,B=null);let tt,lt,pt,mt,Rt,Lt,gt,Wt,ee;const ie=v.isCompressedTexture?v.mipmaps[D]:v.image;B!==null?(tt=B.max.x-B.min.x,lt=B.max.y-B.min.y,pt=B.isBox3?B.max.z-B.min.z:1,mt=B.min.x,Rt=B.min.y,Lt=B.isBox3?B.min.z:0):(tt=ie.width,lt=ie.height,pt=ie.depth||1,mt=0,Rt=0,Lt=0),z!==null?(gt=z.x,Wt=z.y,ee=z.z):(gt=0,Wt=0,ee=0);const Ne=Ut.convert(P.format),Yt=Ut.convert(P.type);let vt;P.isData3DTexture?(E.setTexture3D(P,0),vt=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(E.setTexture2DArray(P,0),vt=L.TEXTURE_2D_ARRAY):(E.setTexture2D(P,0),vt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);const En=L.getParameter(L.UNPACK_ROW_LENGTH),qt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),tn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ci=L.getParameter(L.UNPACK_SKIP_ROWS),Be=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ie.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ie.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,mt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Lt);const Mr=v.isDataArrayTexture||v.isData3DTexture,re=P.isDataArrayTexture||P.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const fn=St.get(v),Sr=St.get(P),Ye=St.get(fn.__renderTarget),Bn=St.get(Sr.__renderTarget);yt.bindFramebuffer(L.READ_FRAMEBUFFER,Ye.__webglFramebuffer),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let zn=0;zn<pt;zn++)Mr&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.get(v).__webglTexture,D,Lt+zn),v.isDepthTexture?(re&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.get(P).__webglTexture,D,ee+zn),L.blitFramebuffer(mt,Rt,tt,lt,gt,Wt,tt,lt,L.DEPTH_BUFFER_BIT,L.NEAREST)):re?L.copyTexSubImage3D(vt,D,gt,Wt,ee+zn,mt,Rt,tt,lt):L.copyTexSubImage2D(vt,D,gt,Wt,ee+zn,mt,Rt,tt,lt);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else re?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(vt,D,gt,Wt,ee,tt,lt,pt,Ne,Yt,ie.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(vt,D,gt,Wt,ee,tt,lt,pt,Ne,ie.data):L.texSubImage3D(vt,D,gt,Wt,ee,tt,lt,pt,Ne,Yt,ie):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,D,gt,Wt,tt,lt,Ne,Yt,ie.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,D,gt,Wt,ie.width,ie.height,Ne,ie.data):L.texSubImage2D(L.TEXTURE_2D,D,gt,Wt,tt,lt,Ne,Yt,ie);L.pixelStorei(L.UNPACK_ROW_LENGTH,En),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,tn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ci),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be),D===0&&P.generateMipmaps&&L.generateMipmap(vt),yt.unbindTexture()},this.copyTextureToTexture3D=function(v,P,B=null,z=null,D=0){return v.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,v=arguments[2],P=arguments[3],D=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,P,B,z,D)},this.initRenderTarget=function(v){St.get(v).__webglFramebuffer===void 0&&E.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?E.setTextureCube(v,0):v.isData3DTexture?E.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?E.setTexture2DArray(v,0):E.setTexture2D(v,0),yt.unbindTexture()},this.resetState=function(){w=0,b=0,I=null,yt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}}class jg extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ou extends Ti{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Os=new U,Bs=new U,cc=new se,br=new ko,gs=new kr,Pa=new U,uc=new U;class Jg extends Me{constructor(t=new Oe,e=new ou){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Os.fromBufferAttribute(e,r-1),Bs.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Os.distanceTo(Bs);t.setAttribute("lineDistance",new de(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(r),gs.radius+=s,t.ray.intersectsSphere(gs)===!1)return;cc.copy(r).invert(),br.copy(t.ray).applyMatrix4(cc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=m,p=g-1;x<p;x+=c){const h=u.getX(x),A=u.getX(x+1),T=_s(this,t,br,l,h,A);T&&e.push(T)}if(this.isLineLoop){const x=u.getX(g-1),p=u.getX(m),h=_s(this,t,br,l,x,p);h&&e.push(h)}}else{const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=m,p=g-1;x<p;x+=c){const h=_s(this,t,br,l,x,x+1);h&&e.push(h)}if(this.isLineLoop){const x=_s(this,t,br,l,g-1,m);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function _s(n,t,e,i,r,s){const a=n.geometry.attributes.position;if(Os.fromBufferAttribute(a,r),Bs.fromBufferAttribute(a,s),e.distanceSqToSegment(Os,Bs,Pa,uc)>i)return;Pa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Pa);if(!(l<t.near||l>t.far))return{distance:l,point:uc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const hc=new U,fc=new U;class Qg extends Jg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)hc.fromBufferAttribute(e,r),fc.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+hc.distanceTo(fc);t.setAttribute("lineDistance",new de(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lu extends Ti{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const dc=new se,bo=new ko,xs=new kr,vs=new U;class t_ extends Me{constructor(t=new Oe,e=new lu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(r),xs.radius+=s,t.ray.intersectsSphere(xs)===!1)return;dc.copy(r).invert(),bo.copy(t.ray).applyMatrix4(dc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,x=m;g<x;g++){const p=c.getX(g);vs.fromBufferAttribute(f,p),pc(vs,p,l,r,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=d,x=m;g<x;g++)vs.fromBufferAttribute(f,g),pc(vs,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function pc(n,t,e,i,r,s,a){const o=bo.distanceSqToPoint(n);if(o<e){const l=new U;bo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Yo extends Oe{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],m=[];let g=0;const x=[],p=i/2;let h=0;A(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(m,2));function A(){const S=new U,N=new U;let w=0;const b=(e-t)/i;for(let I=0;I<=s;I++){const y=[],M=I/s,R=M*(e-t)+t;for(let H=0;H<=r;H++){const G=H/r,X=G*l+o,$=Math.sin(X),W=Math.cos(X);N.x=R*$,N.y=-M*i+p,N.z=R*W,f.push(N.x,N.y,N.z),S.set($,b,W).normalize(),d.push(S.x,S.y,S.z),m.push(G,1-M),y.push(g++)}x.push(y)}for(let I=0;I<r;I++)for(let y=0;y<s;y++){const M=x[y][I],R=x[y+1][I],H=x[y+1][I+1],G=x[y][I+1];(t>0||y!==0)&&(u.push(M,R,G),w+=3),(e>0||y!==s-1)&&(u.push(R,H,G),w+=3)}c.addGroup(h,w,0),h+=w}function T(S){const N=g,w=new Xt,b=new U;let I=0;const y=S===!0?t:e,M=S===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,p*M,0),d.push(0,M,0),m.push(.5,.5),g++;const R=g;for(let H=0;H<=r;H++){const X=H/r*l+o,$=Math.cos(X),W=Math.sin(X);b.x=y*W,b.y=p*M,b.z=y*$,f.push(b.x,b.y,b.z),d.push(0,M,0),w.x=$*.5+.5,w.y=W*.5*M+.5,m.push(w.x,w.y),g++}for(let H=0;H<r;H++){const G=N+H,X=R+H;S===!0?u.push(X,X+1,G):u.push(X+1,X,G),I+=3}c.addGroup(h,I,S===!0?1:2),h+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qo extends Oe{constructor(t=.5,e=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let f=t;const d=(e-t)/r,m=new U,g=new Xt;for(let x=0;x<=r;x++){for(let p=0;p<=i;p++){const h=s+p/i*a;m.x=f*Math.cos(h),m.y=f*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,u.push(g.x,g.y)}f+=d}for(let x=0;x<r;x++){const p=x*(i+1);for(let h=0;h<i;h++){const A=h+p,T=A,S=A+i+1,N=A+i+2,w=A+1;o.push(T,S,w),o.push(S,N,w)}}this.setIndex(o),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Qs extends Oe{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new U,d=new U,m=[],g=[],x=[],p=[];for(let h=0;h<=i;h++){const A=[],T=h/i;let S=0;h===0&&a===0?S=.5/e:h===i&&l===Math.PI&&(S=-.5/e);for(let N=0;N<=e;N++){const w=N/e;f.x=-t*Math.cos(r+w*s)*Math.sin(a+T*o),f.y=t*Math.cos(a+T*o),f.z=t*Math.sin(r+w*s)*Math.sin(a+T*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),p.push(w+S,1-T),A.push(c++)}u.push(A)}for(let h=0;h<i;h++)for(let A=0;A<e;A++){const T=u[h][A+1],S=u[h][A],N=u[h+1][A],w=u[h+1][A+1];(h!==0||a>0)&&m.push(T,S,w),(h!==i-1||l<Math.PI)&&m.push(S,N,w)}this.setIndex(m),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Or extends Ti{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cu extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Da=new se,mc=new U,gc=new U;class e_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;mc.setFromMatrixPosition(t.matrixWorld),e.position.copy(mc),gc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gc),e.updateMatrixWorld(),Da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class n_ extends e_{constructor(){super(new eu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uu extends cu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new n_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class i_ extends cu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class r_ extends Qg{constructor(t=10,e=10,i=4473924,r=8947848){i=new wt(i),r=new wt(r);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,m=0,g=-o;d<=e;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const x=d===s?i:r;x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3}const u=new Oe;u.setAttribute("position",new de(l,3)),u.setAttribute("color",new de(c,3));const f=new ou({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);const pe=new $g({antialias:!0});pe.setSize(window.innerWidth,window.innerHeight);pe.setPixelRatio(Math.min(window.devicePixelRatio,1.5));pe.shadowMap.enabled=!0;pe.shadowMap.type=Rc;pe.toneMapping=Pc;pe.toneMappingExposure=1.1;document.body.appendChild(pe.domElement);pe.domElement.style.touchAction="none";const bi=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||"ontouchstart"in window,mn={x:0,z:0};if(bi){document.getElementById("touch-controls").style.display="none",document.getElementById("controls").textContent="ドラッグ: 移動　　上スワイプ: ジャンプ",document.getElementById("message").textContent="タップしてスタート";let n=null,t=0,e=0,i=!1;const r=20;pe.domElement.addEventListener("pointerdown",a=>{n===null&&(a.preventDefault(),n=a.pointerId,t=a.clientX,e=a.clientY,i=!1,pe.domElement.setPointerCapture(a.pointerId),hr())}),pe.domElement.addEventListener("pointermove",a=>{if(a.pointerId!==n)return;a.preventDefault();const o=a.clientX-t,l=a.clientY-e;if(!i&&l<-30){i=!0;const u=performance.now()/1e3;O&&!O.grounded&&Jo(u)&&!ir?Br=!0:Gs=!0}const c=Math.sqrt(o*o+l*l);if(c>5){const u=Math.min(c,r);mn.x=o/c*(u/r),mn.z=l/c*(u/r)}else mn.x=0,mn.z=0;a.clientX,a.clientY});const s=a=>{a.pointerId===n&&(n=null,mn.x=0,mn.z=0)};pe.domElement.addEventListener("pointerup",s),pe.domElement.addEventListener("pointercancel",s)}const Ct=new jg;Ct.background=new wt(15199734);const Ve=new $e(45,window.innerWidth/window.innerHeight,.1,200);Ct.add(new i_(16777215,1));const xe=new uu(16775144,1.6);xe.position.set(12,20,10);xe.castShadow=!0;xe.shadow.mapSize.set(1024,1024);xe.shadow.camera.near=.5;xe.shadow.camera.far=120;xe.shadow.camera.left=-24;xe.shadow.camera.right=24;xe.shadow.camera.top=28;xe.shadow.camera.bottom=-16;xe.shadow.bias=-.001;Ct.add(xe);Ct.add(xe.target);Ct.add(new uu(13164031,.38).translateX(-8).translateY(12).translateZ(-6));const Re=new qi;Ct.add(Re);const Zt=10,Qt=10,fe=1,Tt=.82,_c=4.8,Ms=7.6,xc=.09,hu=22,s_=3,fu=10,zs=[{color:11591935,bonus:10},{color:12124026,bonus:10},{color:16772971,bonus:10},{color:16755021,bonus:10},{color:16739179,bonus:10},{color:12086271,bonus:12},{color:6061306,bonus:12},{color:9268835,bonus:12},{color:2236962,bonus:10}],vc=.66,a_=18,Mc=1,o_=4,l_=10,c_=js.degToRad(40),du=js.degToRad(40),u_=.35,h_=.86,f_=.6,pu=17,Sc=10,d_=.045,p_=-8,m_=6,ti=[16739179,3382e3,8160660,5361510,16753922,15754645],wr=document.getElementById("timer"),La=document.getElementById("height"),gn=document.getElementById("message"),Cs=document.getElementById("controls"),g_=document.getElementById("clone-status"),mu=document.querySelectorAll(".gauge-seg"),oe=document.getElementById("continue-overlay"),be=document.getElementById("continue-text"),gu=document.getElementById("btn-yes"),wo=document.getElementById("btn-no"),Zo=0,yc=zs.map(n=>"#"+n.color.toString(16).padStart(6,"0"));let er=[];const Ro=new URLSearchParams(window.location.search).has("dev");let wi=!1,Ir=null,Rr=null,we=[],Ri=new Map,ei=new Map,ke=new Map,Le=[],qn=new Map,nr=[],O=null,Se=null,dn=new Set,Gs=!1,Ze=0,on=new U(1,1,1),un=!1,He=null,Fn=!1,Ue=!1,Ps=0,vn=fu,je=0,Co="",_u=1,Ec=performance.now(),Zn=du,Mi=null,Po=0,Jt=null,Do=null,Si="",Ko=-1,yi=!1,Lo=-100,Io=0,Ds=0,ta=-1/0,Br=!1,ir=!1,Hs=!1,xu=0,Vs=0,vr=!0,Ia=0,Ur=[];const __=.5,Ls=new U,vu=new U,Ua=new U,Tc=new U,Ss=new U,Ac=new U,x_=new U(0,.5,0),v_=new U(1.08,.9,1.08),M_=new U(.82,1.18,.82);let _i=0,Ae=null,ks=!1,$o=!1,Kn=0,Ws=!1;const S_=1.4,Zi=new wt(3037840);let Ki=0,Xs=!1;const y_=1.6,E_=new wt(15199734);new wt(15988733);const T_=new wt(328976);new wt(328976);const Wi=new wt;let Ys=[];const A_=document.getElementById("dev-panel");function Mu(){mu.forEach(n=>{const t=Number(n.dataset.index),e=n.querySelector(".gauge-seg-fill");if(t<er.length){n.classList.add("filled");const i=er[t];e.style.background=i,e.style.boxShadow=`0 0 7px ${i}`}else n.classList.remove("filled"),e.style.background="",e.style.boxShadow=""})}function Uo(){er=[],Mu()}function Su(n){const t=n-Zo;t<0||t>=yc.length||(er.length<mu.length&&er.push(yc[t]),er.length,Mu())}function yu(n){if(!Ir)return;oe.classList.remove("visible"),wi=!1;const t=Ir;Ir=null,t(n)}gu.addEventListener("click",()=>yu(!0));wo.addEventListener("click",()=>yu(!1));let ys=null;function b_(n,t){be.textContent=n,oe.querySelector("#continue-sub").style.display="none",oe.querySelector("#continue-buttons").style.display="none",oe.style.background="transparent",oe.classList.add("visible"),ys&&clearTimeout(ys),ys=setTimeout(()=>{oe.classList.remove("visible"),oe.querySelector("#continue-sub").style.display="",oe.querySelector("#continue-buttons").style.display="",oe.style.background="",ys=null},t*1e3)}const w_=document.getElementById("btn-clear-continue"),R_=document.getElementById("btn-clear-restart"),jo=document.getElementById("clear-buttons");let Is=null;function C_(){return new Promise(n=>{wi=!0,be.textContent="クリア",be.style.fontSize="72px",be.style.color="#ffd700",be.style.textShadow="0 0 20px rgba(255,215,0,0.6), 0 4px 24px rgba(0,0,0,0.4)",oe.querySelector("#continue-sub").style.display="none",oe.querySelector("#continue-buttons").style.display="none",jo.style.display="flex",oe.classList.add("visible","celebrate");const t=new U(O.x,O.y+2,O.z);fr(t,16766720,50,.6,.5),fr(t,16777215,30,.4,.35),Is=n})}function Eu(n){if(!Is)return;oe.classList.remove("visible","celebrate"),oe.querySelector("#continue-sub").style.display="",oe.querySelector("#continue-buttons").style.display="",jo.style.display="none",be.style.fontSize="",be.style.color="",be.style.textShadow="",be.textContent="",wi=!1;const t=Is;Is=null,t(n)}w_.addEventListener("click",()=>Eu(!0));R_.addEventListener("click",()=>Eu(!1));function Wr(n){const t=On(n.x,n.y,n.z);Ri.set(t,n);const e=hn(n.x,n.z);let i=ei.get(e);i||(i=[],ei.set(e,i)),i.push(n)}function P_(){Ri.clear(),ei.clear();for(const n of we)Wr(n)}function hr(){return Rr||(Rr=new(window.AudioContext||window.webkitAudioContext)),Rr.state==="suspended"&&Rr.resume(),Rr}function Un(n=880,t=.04,e=.08,i="triangle"){const r=hr(),s=r.currentTime,a=r.createOscillator(),o=r.createGain();a.type=i,a.frequency.setValueAtTime(n,s),o.gain.setValueAtTime(1e-4,s),o.gain.exponentialRampToValueAtTime(t,s+.01),o.gain.exponentialRampToValueAtTime(1e-4,s+e),a.connect(o),o.connect(r.destination),a.start(s),a.stop(s+e+.02)}function D_(){Un(660,.04,.08),Un(990,.05,.14)}function L_(){Un(260,.05,.25,"sawtooth")}function I_(){const n=Math.random()*Math.PI*2,t=8.8+Math.random()*3.2;return{vx:Math.cos(n)*t,vy:6.8+Math.random()*1.6,vz:Math.sin(n)*t}}function ni(){return Fn&&!Ue&&!wi}function U_(){return!!He}function N_(){Ls.set(-Math.sin(Zn),0,-Math.cos(Zn)),vu.set(-Ls.z,0,Ls.x)}function F_(n,t){return N_(),Ss.copy(vu).multiplyScalar(n).addScaledVector(Ls,-t),Ss.lengthSq()>1&&Ss.normalize(),Ss}function O_(n){if(!He)return!1;if(He.pause>0)He.pause=Math.max(0,He.pause-n),on.lerp(v_,.18),He.pause===0&&(He.launch=I_(),L_());else if(He.launch){const t=He.launch;t.vy-=hu*.72*n,O.x+=t.vx*n,O.y+=t.vy*n,O.z+=t.vz*n,on.lerp(M_,.12)}return Se.scale.copy(on),Se.position.set(O.x,O.y+(on.y-1)*Tt/2,O.z),!0}function Je(n){return(n-(Zt-1)/2)*fe}function We(n){return(n-(Qt-1)/2)*fe}function On(n,t,e){return`${n},${t},${e}`}function hn(n,t){return`${n},${t}`}const Na=new Map,Fa=new Map;function B_(n){const t=n.toFixed(2);return Na.has(t)||Na.set(t,new ii(n,n,n)),Na.get(t)}function z_(n){const t=n.toString(16);return Fa.has(t)||Fa.set(t,new Or({color:n,roughness:.3,metalness:.05})),Fa.get(t)}function Xr(n,t=.98){const e=new ve(B_(t),z_(n));return e.castShadow=!1,e.receiveShadow=!0,e.userData.sharedGeometry=!0,e.userData.sharedMaterial=!0,e}function Sn(n){n.traverse(t=>{t.geometry&&!t.userData.sharedGeometry&&t.geometry.dispose(),t.material&&!t.userData.sharedMaterial&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())})}function G_(){const n=new ve(new ii(Zt+2.4,.5,Qt+2.4),new Or({color:14410735,roughness:.6,metalness:.04}));n.position.set(0,-.25,0),n.receiveShadow=!0,Ct.add(n);const t=new r_(Zt+2,Zt+2,12240600,13818598);t.position.y=.005,Ct.add(t);const e=new ve(new _r(Zt+8,40),new Or({color:16120060,roughness:.95}));e.position.set(0,12,We(-1)-2.3),Ct.add(e)}function H_(){Ae=new ve(new Qs(60,24,24),new Ai({color:15988733,side:Ie})),Ct.add(Ae)}const V_=new _r(.98,.98),k_=new Ai({color:0,transparent:!0,opacity:.18,depthWrite:!1});let $i=new Map;const W_=new Qs(.08,6,6);function fr(n,t,e=18,i=.28,r=.28){for(let s=0;s<e;s+=1){const a=new ve(W_,new Ai({color:t,transparent:!0,opacity:1}));a.userData.sharedGeometry=!0,a.position.copy(n),a.userData.vel=new U((Math.random()-.5)*i,Math.random()*r+.12,(Math.random()-.5)*i),a.userData.life=1,a.userData.decay=.016+Math.random()*.016,Ct.add(a),nr.push(a)}}let Us=[];function X_(n,t,e){const i=new ve(new qo(.1,.3,24),new Ai({color:8965375,transparent:!0,opacity:.8,side:_n,depthWrite:!1}));i.position.set(n,t,e),i.rotation.x=-Math.PI/2,i.userData.life=1,i.userData.speed=6,Ct.add(i),Us.push(i)}function Y_(n){for(let t=Us.length-1;t>=0;t--){const e=Us[t];e.userData.life-=n*2.5;const i=1+(1-e.userData.life)*e.userData.speed;e.scale.set(i,i,i),e.material.opacity=Math.max(0,e.userData.life*.8),e.userData.life<=0&&(Ct.remove(e),e.geometry.dispose(),e.material.dispose(),Us.splice(t,1))}}function Tu(){for(let n=nr.length-1;n>=0;n-=1){const t=nr[n];t.position.add(t.userData.vel),t.userData.vel.y-=.007,t.userData.life-=t.userData.decay,t.material.opacity=Math.max(0,t.userData.life),t.userData.life<=0&&(Ct.remove(t),Sn(t),nr.splice(n,1))}}function q_(){Jt=new qi;const n=new ve(new Yo(.045,.045,1.95,8),new Or({color:4804695,roughness:.5}));n.position.y=.975,n.castShadow=!0,Jt.add(n);const t=new ve(new ii(.93,.48,.06),new Or({color:16774079,roughness:.45,metalness:.02}));t.position.set(.48,1.53,0),t.castShadow=!0,Do=t,Jt.add(t),Jt.visible=!1,Jt.frustumCulled=!1,Jt.renderOrder=20,Jt.traverse(e=>{e.material&&(e.material.depthTest=!1)}),Ct.add(Jt)}function Z_(){if(!Jt||!Si)return;const n=wu();n&&Jt.position.set(Je(n.x),n.y+.95,We(n.z))}function Jo(n){return n-ta>=pu}function Au(n,t){const e=ei.get(hn(n,t));if(!e||e.length===0)return null;let i=e[0];for(let r=1;r<e.length;r++)e[r].y>i.y&&(i=e[r]);return i}function zr(n,t){const e=Au(n,t);return e?e.y+1:0}function bu(){let n=0;for(const t of we)n=Math.max(n,t.y+1);Vs=n,vr=!1}function Qo(){return vr&&bu(),Vs}function K_(){const n=Math.max(0,Math.floor((O.x-Tt/2)/fe+(Zt-1)/2+.5)),t=Math.min(Zt-1,Math.floor((O.x+Tt/2)/fe+(Zt-1)/2+.5)),e=Math.max(0,Math.floor((O.z-Tt/2)/fe+(Qt-1)/2+.5)),i=Math.min(Qt-1,Math.floor((O.z+Tt/2)/fe+(Qt-1)/2+.5)),r=new Set;for(let s=n;s<=t;s+=1)for(let a=e;a<=i;a+=1)r.add(hn(s,a));return r}function $_(n,t){const e=t===8?6:t>=6?5:4,i=tl(n),r=Qo(),s=Math.round(O.x/fe+(Zt-1)/2),a=Math.round(O.z/fe+(Qt-1)/2),o=K_(),l=i?i.y+1:r,c=[],u=[];for(let x=0;x<Zt;x+=1)for(let p=0;p<Qt;p+=1){const h=hn(x,p);h===n||o.has(h)||bc(x,p)||u.push(h)}const f=u.length>0?u[Math.floor(Math.random()*u.length)]:null;for(let x=0;x<Zt;x+=1)for(let p=0;p<Qt;p+=1){const h=hn(x,p);if(h===n||o.has(h)||bc(x,p))continue;const A=zr(x,p),T=i?Math.abs(x-i.x)+Math.abs(p-i.z):0;let S;if(h===f)S=e;else{const w=2+Math.floor(Math.random()*(e-1)),b=Math.max(r-3,l-4-Math.floor(T/3)),I=Math.max(0,b-A);S=Math.max(w,Math.min(e,I))}const N=A+S;for(let w=A;w<N;w+=1){const b={x,y:w,z:p,color:ti[(x*13+p*17+w*5+_u)%ti.length],riseFrom:A,riseDelay:(w-A)*.055};we.push(b),Wr(b),c.push(b)}}const d=Math.max(0,(O?Math.floor(O.y):0)-10);if(d>0){const x=we.length;if(we=we.filter(p=>p.y>=d),we.length!==x){P_();const p=[];ke.forEach((h,A)=>{h.userData.gridY<d&&(Re.remove(h),Sn(h),p.push(A))}),p.forEach(h=>ke.delete(h))}}el(),Le=[],vr=!0,c.forEach(x=>n0(x)),Hs=!0,un=!0,Jt&&(Jt.visible=!1);const m=zr(s,a),g=Math.max(O.y,m+Tt/2);O.y=g,O.vy=Math.max(O.vy,0),O.grounded=O.y<=m+Tt/2+.001,Se.position.set(O.x,O.y,O.z)}function bc(n,t){const e=(Zt-1)/2,i=(Qt-1)/2;if(t<i)return!1;const r=Qt-1,s=(r-t)/(r-i),a=(Zt-1)/2*(1-s);return Math.abs(n-e)<=a+.001}function j_(n){if(!un)return;let t=!1;ke.forEach(e=>{const i=e.userData.targetY??e.position.y,r=e.userData.targetBlockY??Math.round(i-.5);if(e.userData.displayY===void 0&&(e.userData.displayY=i),e.userData.currentBlockY===void 0&&(e.userData.currentBlockY=Math.round(e.userData.displayY-.5)),e.userData.riseDelay===void 0&&(e.userData.riseDelay=0),e.userData.stepPause===void 0&&(e.userData.stepPause=0),e.userData.riseDelay>0)t=!0,e.userData.riseDelay=Math.max(0,e.userData.riseDelay-n);else if(e.userData.currentBlockY<r)if(t=!0,e.userData.stepPause>0)e.userData.stepPause=Math.max(0,e.userData.stepPause-n);else{const s=e.userData.currentBlockY+1.5,a=Math.min(s,e.userData.displayY+n*Sc);e.userData.displayY=a,a>=s-1e-4&&(e.userData.currentBlockY+=1,e.userData.stepPause=d_)}else e.userData.displayY=js.lerp(e.userData.displayY,i,Math.min(1,n*Sc));Math.abs(e.userData.displayY-i)>.001&&(t=!0),e.position.y=e.userData.displayY}),un=t}function J_(){const n=new Set,t=[];let e=0,i=1/0;for(const r of we)r.y<i&&(i=r.y);if(i===1/0)return n;for(const r of we){if(r.y!==i)continue;const s=On(r.x,r.y,r.z);n.has(s)||(n.add(s),t.push(r))}for(;e<t.length;){const r=t[e++],s=r.x,a=r.y,o=r.z,l=[[s+1,a,o],[s-1,a,o],[s,a+1,o],[s,a-1,o],[s,a,o+1],[s,a,o-1]];for(const[c,u,f]of l){const d=On(c,u,f);if(n.has(d))continue;const m=Ri.get(d);m&&(n.add(d),t.push(m))}}return n}function tl(n=""){const t=J_(),e=O?Math.round(O.x/fe+(Zt-1)/2):-99,i=O?Math.round(O.z/fe+(Qt-1)/2):-99;let r=null,s=0;for(let a=0;a<Zt;a+=1)for(let o=0;o<Qt;o+=1){const l=hn(a,o);if(n&&l===n)continue;let c=null;for(const f of we)f.x!==a||f.z!==o||t.has(On(f.x,f.y,f.z))&&(!c||f.y>c.y)&&(c=f);if(!c)continue;const u=Math.abs(a-e)+Math.abs(o-i);(!r||c.y>r.y||c.y===r.y&&u>s)&&(r={x:a,y:c.y,z:o},s=u)}return!r&&n?tl(""):r}function ji(n){Io=n%zs.length,Do&&Do.material.color.setHex(zs[Io].color)}function wu(){if(!Si)return null;const[n,t]=Si.split(",");return Au(Number(n),Number(t))}function Q_(){const n=wu();return!n||n.y>Ko}function t0(n=""){const t=tl(n);return t?(Si=hn(t.x,t.z),Ko=t.y,yi=!0,un||(Jt.visible=!0),Z_(),!0):(yi=!1,Jt&&(Jt.visible=!1),!1)}function Ln(n=!1,t=""){return Jt?!n&&yi&&Jt.visible&&Si&&!Q_()?!0:t0(t):!1}function e0(){ke.forEach(n=>{Re.remove(n),Sn(n)}),ke.clear()}function n0(n){const t=On(n.x,n.y,n.z);let e=ke.get(t);return(!e||e.userData.color!==n.color)&&(e&&(Re.remove(e),Sn(e)),e=Xr(n.color),Re.add(e),ke.set(t,e)),e.userData.color=n.color,e.userData.gridX=n.x,e.userData.gridY=n.y,e.userData.gridZ=n.z,e.userData.displayY=(n.riseFrom??n.y)+.5,e.userData.currentBlockY=n.riseFrom??n.y,e.userData.targetBlockY=n.y,e.userData.targetY=n.y+.5,e.userData.riseDelay=n.riseDelay??0,e.userData.stepPause=0,e.position.set(Je(n.x),e.userData.displayY,We(n.z)),e.visible=!0,delete n.riseFrom,delete n.riseDelay,e}function Ru(){const n=new Set;we.forEach(t=>{const e=On(t.x,t.y,t.z);n.add(e);let i=ke.get(e);!i||i.userData.color!==t.color?(i&&(Re.remove(i),Sn(i)),i=Xr(t.color),i.userData.color=t.color,i.userData.gridX=t.x,i.userData.gridY=t.y,i.userData.gridZ=t.z,i.userData.displayY=(t.riseFrom??t.y)+.5,i.userData.currentBlockY=t.riseFrom??t.y,i.userData.targetBlockY=t.y,i.userData.targetY=t.y+.5,i.userData.riseDelay=t.riseDelay??0,i.userData.stepPause=0,Re.add(i),ke.set(e,i)):(i.userData.gridX=t.x,i.userData.gridY=t.y,i.userData.gridZ=t.z,i.userData.targetBlockY=t.y,i.userData.targetY=t.y+.5,i.userData.displayY===void 0&&(i.userData.displayY=i.userData.targetY),i.userData.currentBlockY===void 0&&(i.userData.currentBlockY=t.y)),i.position.set(Je(t.x),i.userData.displayY,We(t.z)),i.visible=!0,delete t.riseFrom,delete t.riseDelay}),ke.forEach((t,e)=>{n.has(e)||(Re.remove(t),Sn(t),ke.delete(e))})}function el(){qn.forEach(n=>{Re.remove(n),Sn(n)}),qn.clear(),$i.forEach(n=>{Re.remove(n)}),$i.clear()}function i0(){const n=new Set(Le.map(t=>t.id));qn.forEach((t,e)=>{n.has(e)||(Re.remove(t),Sn(t),qn.delete(e))}),$i.forEach((t,e)=>{n.has(e)||(Re.remove(t),$i.delete(e))}),Le.forEach(t=>{let e=qn.get(t.id);e||(e=Xr(t.color),e.receiveShadow=!1,Re.add(e),qn.set(t.id,e)),e.position.set(Je(t.x),t.y+.5,We(t.z));let i=0;const r=ei.get(hn(t.x,t.z));if(r)for(const u of r)i=Math.max(i,u.y+1);let s=$i.get(t.id);s||(s=new ve(V_,k_.clone()),s.rotation.x=-Math.PI/2,s.userData.sharedGeometry=!0,s.userData.spawnTime=performance.now(),Re.add(s),$i.set(t.id,s));const a=(performance.now()-s.userData.spawnTime)/1e3,o=Math.min(1,a/.7),l=t.y-i,c=Math.max(0,1-l/12);s.material.opacity=.18*o*c,s.position.set(Je(t.x),i+.005,We(t.z)),s.scale.setScalar(1),s.visible=s.material.opacity>.005})}function r0(){we=[],Ri.clear(),ei.clear(),vr=!0;for(let n=0;n<Zt;n+=1)for(let t=0;t<Qt;t+=1){const e=Math.abs(n-Math.floor(Zt/2))+Math.abs(t-(Qt-2));let i=Mc+Math.floor(Math.random()*(o_-Mc+1));e<=1?i=1:e<=3&&(i=Math.min(i,2));for(let r=0;r<i;r+=1){const s={x:n,y:r,z:t,color:ti[(n*7+t*11+r*3)%ti.length]};we.push(s),Wr(s)}}}function s0(){Se||(Se=Xr(16777215,Tt),Ct.add(Se));const n=Math.floor(Zt/2),t=Qt-2,e=zr(n,t);O={x:Je(n),y:e+Tt/2,z:We(t),vx:0,vy:0,vz:0,grounded:!0},je=Math.max(0,Math.round(O.y-Tt/2)),on.set(1,1,1),Se.scale.copy(on),Se.position.set(O.x,O.y,O.z),Se.visible=!0}function a0(n,t,e){return{minX:n-Tt/2,maxX:n+Tt/2,minY:t-Tt/2,maxY:t+Tt/2,minZ:e-Tt/2,maxZ:e+Tt/2}}function dr(n,t,e){return{minX:Je(n)-.5,maxX:Je(n)+.5,minY:t,maxY:t+1,minZ:We(e)-.5,maxZ:We(e)+.5}}function qs(n,t){return n.minX<t.maxX&&n.maxX>t.minX&&n.minY<t.maxY&&n.maxY>t.minY&&n.minZ<t.maxZ&&n.maxZ>t.minZ}function Oa(n,t,e){const i=a0(n,t,e),r=Math.max(0,Math.floor((n-Tt/2)/fe+(Zt-1)/2)),s=Math.min(Zt-1,Math.ceil((n+Tt/2)/fe+(Zt-1)/2)),a=Math.max(0,Math.floor((e-Tt/2)/fe+(Qt-1)/2)),o=Math.min(Qt-1,Math.ceil((e+Tt/2)/fe+(Qt-1)/2)),l=Math.max(0,Math.floor(t-Tt/2)-1),c=Math.ceil(t+Tt/2);for(let u=r;u<=s;u++)for(let f=a;f<=o;f++)for(let d=l;d<=c;d++)if(Ri.has(On(u,d,f))&&qs(i,dr(u,d,f)))return!0;for(const u of Le)if(qs(i,dr(u.x,u.y,u.z)))return!0;return!1}function o0(){if(!ni()||un||U_())return;const n=.08,t={minX:O.x-Tt/2+n,maxX:O.x+Tt/2-n,minY:O.y-Tt/2+n,maxY:O.y+Tt/2-n,minZ:O.z-Tt/2+n,maxZ:O.z+Tt/2-n},e=Math.max(0,Math.floor((O.x-Tt/2)/fe+(Zt-1)/2)),i=Math.min(Zt-1,Math.ceil((O.x+Tt/2)/fe+(Zt-1)/2)),r=Math.max(0,Math.floor((O.z-Tt/2)/fe+(Qt-1)/2)),s=Math.min(Qt-1,Math.ceil((O.z+Tt/2)/fe+(Qt-1)/2)),a=Math.max(0,Math.floor(O.y-Tt/2)-1),o=Math.ceil(O.y+Tt/2);for(let l=e;l<=i;l++)for(let c=r;c<=s;c++)for(let u=a;u<=o;u++)if(Ri.has(On(l,u,c))&&qs(t,dr(l,u,c))){rr("CRUSHED");return}for(const l of Le){const c=dr(l.x,l.y,l.z);if(!(c.maxY<=t.minY)&&qs(t,c)){rr("CRUSHED");return}}}function l0(n,t,e=1/0,i=null){let r=0;const s=ei.get(hn(n,t));if(s)for(const a of s)r=Math.max(r,a.y+1);for(const a of Le)a.id===i||a.x!==n||a.z!==t||a.y>e||(r=Math.max(r,a.y+1));return r}function c0(n){if(!O||O_(n)||Ue)return;let t=(dn.has("ArrowRight")||dn.has("KeyD")?1:0)-(dn.has("ArrowLeft")||dn.has("KeyA")?1:0),e=(dn.has("ArrowDown")||dn.has("KeyS")?1:0)-(dn.has("ArrowUp")||dn.has("KeyW")?1:0);bi&&(Math.abs(mn.x)>.1||Math.abs(mn.z)>.1)&&(t=mn.x,e=mn.z);const i=F_(t,e);O.vx=i.x*_c,O.vz=i.z*_c,Gs&&O.grounded&&Ze<=0&&(Ze=xc,O.vx=0,O.vz=0),Br&&!O.grounded&&!ir&&Ze<=0&&(O.vy=Ms,O.grounded=!1,ir=!0,ta=performance.now()/1e3,Un(960,.04,.11),X_(O.x,O.y-Tt/2,O.z)),Gs=!1,Br=!1,Ze>0?(Ze=Math.max(0,Ze-n),O.vx=0,O.vz=0,Ze===0&&(O.vy=Ms,O.grounded=!1,Un(720,.03,.08))):O.vy-=hu*n;const r=O.x+O.vx*n;Oa(r,O.y,O.z)||(O.x=r);const s=O.z+O.vz*n;Oa(O.x,O.y,s)||(O.z=s);const a=O.y+O.vy*n;if(O.grounded=!1,!Oa(O.x,a,O.z))O.y=a;else if(O.vy<0){const u=O.y-Tt/2,f=g=>O.x+Tt/2>g.minX+.1&&O.x-Tt/2<g.maxX-.1&&O.z+Tt/2>g.minZ+.1&&O.z-Tt/2<g.maxZ-.1&&u>=g.maxY-.15&&u<g.maxY+.5,d=performance.now()/1e3;if(Ur=Ur.filter(g=>d-g.time<__),Le.some(g=>f(dr(g.x,g.y,g.z)))||Ur.some(g=>f(dr(g.x,g.y,g.z)))){O.vy=Ms,O.grounded=!1,Ia=O.y,Un(960,.04,.11);const g=new U(O.x,O.y-Tt/2,O.z);fr(g,14692657,24,.35,.15)}else O.y=Math.max(Tt/2,Math.round(O.y-Tt/2)+Tt/2),O.grounded=!0,Ia=O.y,ir=!1,Ze=0,O.vy=0}else O.vy=0;if((O.x<Je(0)-.6||O.x>Je(Zt-1)+.6||O.z<We(0)-.6||O.z>We(Qt-1)+.6)&&O.y<Tt/2){rr("無惨にも落下した");return}if(!O.grounded&&O.vy<=0&&Ia-O.y>=m_){rr("無惨にも落下した");return}if(O.y<=p_){rr("無惨にも落下した");return}je=Math.max(je,Math.max(0,Math.round(O.y-Tt/2)));let l=1,c=1;if(Ze>0){const u=1-Ze/xc,f=1-(1-u)*(1-u);l=1-.18*f,c=1+.12*f}else if(!O.grounded){const u=js.clamp(O.vy/Ms,-1,1);if(u>=0)l=1.04+.18*u,c=1.02-.14*u;else{const f=Math.abs(u);l=1-.08*f,c=1+.06*f}}Ac.set(c,l,c),on.lerp(Ac,Ze>0?.22:.16),Se.scale.copy(on),Se.position.set(O.x,O.y+(on.y-1)*Tt/2,O.z)}function u0(){const n=Math.round(O.x/fe+(Zt-1)/2),t=Math.round(O.z/fe+(Qt-1)/2),e=yi?Si:"";for(let i=0;i<24;i+=1){const r=Math.floor(Math.random()*Zt),s=Math.floor(Math.random()*Qt);if(hn(r,s)!==e&&Math.abs(r-n)+Math.abs(s-t)>1)return{x:r,z:s}}for(let i=0;i<Zt;i+=1)for(let r=0;r<Qt;r+=1)if(hn(i,r)!==e)return{x:i,z:r};return{x:0,z:0}}function h0(){if(Le.length>=a_)return;const{x:n,z:t}=u0();Le.push({id:_u+=1,x:n,z:t,y:Qo()+8+Math.random()*2,speed:s_+Math.random()*.5,color:ti[Math.floor(Math.random()*ti.length)]})}function f0(n){const t={x:n.x,y:n.y,z:n.z,color:n.color};we.push(t),Wr(t),Ur.push({x:n.x,y:n.y,z:n.z,time:performance.now()/1e3}),Vs=Math.max(Vs,n.y+1),vr=!1;const e=qn.get(n.id);e&&(Re.remove(e),Sn(e),qn.delete(n.id));const i=On(n.x,n.y,n.z);if(!ke.has(i)){const r=Xr(n.color);r.userData.color=n.color,r.userData.gridX=n.x,r.userData.gridY=n.y,r.userData.gridZ=n.z,r.userData.displayY=n.y+.5,r.userData.currentBlockY=n.y,r.userData.targetBlockY=n.y,r.userData.targetY=n.y+.5,r.userData.riseDelay=0,r.userData.stepPause=0,r.position.set(Je(n.x),n.y+.5,We(n.z)),Re.add(r),ke.set(i,r)}}function d0(n){if(!ni())return;if(un){Le.length>0&&(el(),Le=[]);return}Ps+=n,Ps>=vc&&(Ps-=vc,h0());const t=[];for(const e of Le){const i=l0(e.x,e.z,e.y,e.id),r=e.speed,s=e.y-r*n;s<=i?(e.y=i,t.push(e)):e.y=s}if(t.length>0){const e=new Set(t.map(i=>i.id));Le=Le.filter(i=>!e.has(i.id))}i0(),t.length>0&&t.forEach(e=>f0(e)),o0()}function p0(n){if(!ni()||!yi||!Jt.visible||un||n-Lo<.5)return;const t=O.x-Jt.position.x,e=O.z-Jt.position.z,i=O.y-(Jt.position.y+.55);if(Math.hypot(t,e)<.7&&Math.abs(i)<1.1){const r=Si,s=Jt.position.clone().add(x_),a=Io;if(vn+=zs[a].bonus,Lo=n,D_(),fr(s,16774079,28,.38,.35),$_(r,a),a>=Zo&&Su(a),je>=200&&!ks){ks=!0,x0();return}const o={6:"あと２フラッグ",7:"あと１フラッグ"};if(o[a]&&Ds===0)b_(o[a],1.5),ji(a+1),Ln(!0,r);else if(a===8)if(Ds++,Ds===1){C_().then(l=>{l?(Uo(),ji(0),Ln(!0)):Ei()});return}else Uo(),ji(0),Ln(!0);else ji(a+1),Ln(!0,r)}}function Zs(n){if(bi&&O&&Jt&&yi){const c=Jt.position.x-O.x,u=Jt.position.z-O.z;let d=Math.atan2(-c,-u)-Zn;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;Zn+=d*.05}const t=Qo(),e=l_*(He?h_:1),i=O?O.x:0,r=O?O.z:0,s=O?O.y+.75:1.6,a=(O?O.y:0)+4.2,o=Math.max(Math.tan(c_)*e+t*u_,a);Ua.set(i+Math.sin(Zn)*e,o,r+Math.cos(Zn)*e),Tc.set(i,s,r),n<=0?Ve.position.copy(Ua):Ve.position.lerp(Ua,.14),Ve.lookAt(Tc);const l=O?O.y:0;xe.position.set(12,l+20,10),xe.target.position.set(0,l,0),xe.target.updateMatrixWorld(),xe.shadow.camera.top=28,xe.shadow.camera.bottom=-16,xe.shadow.camera.updateProjectionMatrix()}function Cu(){document.body.classList.toggle("title",!Fn&&!Ue),document.body.classList.toggle("playing",ni()),document.body.classList.toggle("game-over",Ue)}function m0(n){const t=je;let e=0;if(t>=200?e=3:t>=150?e=2:t>=100&&(e=1),e!==_i&&(g0(e),_i=e),t>=195&&t<200&&!$o&&!ks&&_0(),Ws&&Kn<1){Kn=Math.min(1,Kn+n/S_);const i=Kn,r=i*i*(3-2*i);Wi.copy(E_).lerp(Zi,r),Ct.background.copy(Wi),Ae&&Ae.material.color.copy(Wi),Ct.children.forEach(s=>{s.isAmbientLight&&(s.intensity=1-r*.35)})}if(Xs&&Ki<1){Ki=Math.min(1,Ki+n/y_);const i=Ki,r=i*i*(3-2*i);Wi.copy(Zi).lerp(T_,r),Ct.background.copy(Wi),Ae&&Ae.material.color.copy(Wi),Ct.children.forEach(s=>{s.isAmbientLight&&(s.intensity=.65-r*.35)}),Ct.children.forEach(s=>{s.userData.isStars&&(s.material.opacity=r*.9)})}}function g0(n){if(n>=1&&_i<1&&(Ws=!0),n>=2&&_i<2){if(Kn<1&&(Kn=1,Ct.background.copy(Zi),Ae&&Ae.material.color.copy(Zi)),Xs=!0,!Ct.userData.starsAdded){Ct.userData.starsAdded=!0;const t=new Oe,e=400,i=new Float32Array(e*3);for(let a=0;a<e;a++){const o=40+Math.random()*50,l=Math.random()*Math.PI*2,c=Math.random()*Math.PI;i[a*3]=o*Math.sin(c)*Math.cos(l),i[a*3+1]=60+Math.random()*150,i[a*3+2]=o*Math.sin(c)*Math.sin(l)}t.setAttribute("position",new cn(i,3));const r=new lu({color:16777215,size:.15,transparent:!0,opacity:0}),s=new t_(t,r);s.userData.isStars=!0,Ct.add(s)}}else n<2&&_i>=2&&(Xs=!1,Ki=0,n>=1?(Ct.background.copy(Zi),Ae&&Ae.material.color.copy(Zi)):(Ct.background=new wt(15199734),Ae&&Ae.material.color.setHex(15988733)),Ct.children.forEach(t=>{t.isAmbientLight&&(t.intensity=n>=1?.65:1)}),Ct.children.filter(t=>t.userData.isStars).forEach(t=>{Ct.remove(t),t.geometry.dispose(),t.material.dispose()}),Ct.userData.starsAdded=!1);n<1&&_i>=1&&(Ws=!1,Kn=0,Ct.background=new wt(15199734),Ae&&Ae.material.color.setHex(15988733),Ct.children.forEach(t=>{t.isAmbientLight&&(t.intensity=1)}))}function _0(){$o=!0;const n=hr(),t=n.currentTime,e=18,i=[[261.6,329.6,392,493.9],[220,261.6,329.6,440],[174.6,261.6,329.6,415.3],[196,246.9,293.7,392]],r=e/i.length;for(let o=0;o<i.length;o++)for(const l of i[o]){const c=n.createOscillator(),u=n.createGain();c.type="sine",c.frequency.setValueAtTime(l,t);const f=t+o*r;u.gain.setValueAtTime(1e-4,f),u.gain.linearRampToValueAtTime(.018,f+.8),u.gain.linearRampToValueAtTime(.015,f+r-.3),u.gain.linearRampToValueAtTime(1e-4,f+r),c.connect(u),u.connect(n.destination),c.start(f),c.stop(f+r+.1),Ys.push(c)}const s=[523.3,587.3,659.3,784,659.3,523.3,587.3,523.3],a=e/s.length;for(let o=0;o<s.length;o++){const l=n.createOscillator(),c=n.createGain();l.type="triangle",l.frequency.setValueAtTime(s[o],t);const u=t+o*a;c.gain.setValueAtTime(1e-4,u),c.gain.linearRampToValueAtTime(.025,u+.15),c.gain.exponentialRampToValueAtTime(.008,u+a*.7),c.gain.linearRampToValueAtTime(1e-4,u+a),l.connect(c),c.connect(n.destination),l.start(u),l.stop(u+a+.1),Ys.push(l)}}function Pu(){for(const n of Ys)try{n.stop()}catch{}Ys=[],$o=!1}function x0(){wi=!0,Pu();const n=Se.position.clone(),t=Ve.position.clone(),e=2,i=2.2;let r=0;Se.material=new Ai({color:16777215,transparent:!0,opacity:1}),Se.material.depthTest=!1;function s(){r+=.016;const a=Math.min(r/e,1),o=1-Math.pow(1-a,3);if(Ve.position.lerpVectors(t,n.clone().add(new U(0,.4,1.2)),o),Ve.lookAt(n),Se.scale.setScalar(1+o*.3),pe.render(Ct,Ve),r<i)requestAnimationFrame(s);else{let u=function(){c+=.016,Tu(),pe.render(Ct,Ve),c<2?requestAnimationFrame(u):v0()};var l=u;Se.visible=!1,fr(n,16777215,80,1,.8),fr(n,16766720,50,.7,.6),Un(880,.06,.3,"sine"),Un(1320,.05,.5,"sine"),Un(1760,.04,.7,"sine");let c=0;requestAnimationFrame(u)}}requestAnimationFrame(s)}function v0(){be.textContent="おめでとう",be.style.fontSize="64px",be.style.color="#ffd700",be.style.textShadow="0 0 30px rgba(255,215,0,0.7), 0 4px 24px rgba(0,0,0,0.5)";const n=oe.querySelector("#continue-sub");n.textContent="永遠の命を得た",n.style.display="",n.style.fontSize="28px",n.style.color="#fff",n.style.letterSpacing="6px",oe.querySelector("#continue-buttons").style.display="none",jo.style.display="none",oe.style.background="rgba(5, 5, 16, 0.85)",oe.classList.add("visible"),setTimeout(()=>{n.textContent="もう一度遊ぶ？",n.style.fontSize="",n.style.color="",n.style.letterSpacing="",oe.querySelector("#continue-buttons").style.display="flex",gu.textContent="はい",wo.style.display="none",Ir=t=>{oe.classList.remove("visible"),oe.style.background="",be.style.fontSize="",be.style.color="",be.style.textShadow="",wo.style.display="",Du(),Ei()}},3e3)}function Du(){_i=0,ks=!1,Ws=!1,Kn=0,Xs=!1,Ki=0,Pu(),Ct.background=new wt(15199734),Ae&&Ae.material.color.setHex(15988733),Ct.children.forEach(n=>{n.isAmbientLight&&(n.intensity=1)}),Ct.children.filter(n=>n.userData.isStars).forEach(n=>{Ct.remove(n),n.geometry.dispose(),n.material.dispose()}),Ct.userData.starsAdded=!1}function Ba(n){if(!Fn&&!Ue)return;const t=Math.floor(Zt/2),e=Math.floor(Qt/2);for(let i=0;i<Zt;i++)for(let r=0;r<Qt;r++){const s=Math.abs(i-t)+Math.abs(r-e),a=Math.floor(Math.random()*3)+s,o=Math.max(1,n-a),l=zr(i,r);for(let c=l;c<o;c++){const u={x:i,y:c,z:r,color:ti[(i*13+r*17+c*5)%ti.length]};we.push(u),Wr(u)}}vr=!0,Ru(),O.x=Je(t),O.y=zr(t,e)+Tt/2,O.z=We(e),O.vy=0,O.grounded=!0,je=n,vn=Math.max(vn,60),Ln(!0),Zs(0),Yr()}function Yr(){const n=Math.max(0,pu-(performance.now()/1e3-ta)),t=Jo(performance.now()/1e3)?"READY":`${Math.ceil(n)}S`,e=[Fn?1:0,Ue?1:0,He?1:0,vn.toFixed(1),je,n.toFixed(1),t,gn.textContent].join("|");if(e===Co)return;Co=e,wr.textContent=`${Math.max(0,vn).toFixed(1)}`,vn<=3&&ni()?(wr.style.color="#e03131",wr.style.fontSize="101px"):(wr.style.color="",wr.style.fontSize=""),La.textContent=`${je}階`;const i=["#ff8c42","#ff8c42","#e03131","#c026d3","#2563eb","#0d9488","#16a34a","#eab308","#e03131"],r=je>=100,s=r?Math.min(Math.floor((je-100)/10)+1,i.length-1):je>=20?Math.min(Math.floor((je-20)/10)+1,i.length-1):0;La.style.color=i[s],La.style.fontSize=r?"220px":"",g_.textContent=t,Cu();const a=bi?"ドラッグ: 移動　　上スワイプ: ジャンプ":"移動: WASD / 矢印キー　　ジャンプ: スペース　　二段ジャンプ: スペース x2　　リセット: R";!Fn&&!Ue||ni()?(gn.textContent="",Cs.textContent=a):Ue&&(Cs.textContent=performance.now()/1e3<xu?"PLEASE WAIT":"MOVE OR CLICK TO RETRY   RESET: R")}function rr(n){Ue||(Fn=!1,Ue=!0,O.vx=0,O.vy=0,O.vz=0,gn.textContent=n,gn.style.fontSize="78px",gn.style.opacity="1",on.set(1,1,1),Se.scale.copy(on),He={reason:n,pause:f_,launch:null},xu=performance.now()/1e3+3.5,Yr(),setTimeout(()=>{gn.style.opacity="0"},1700),setTimeout(()=>{Ue&&(gn.style.fontSize="",gn.style.opacity="",Ei())},3e3))}function Ei(){if(Du(),Ds=0,el(),e0(),Le=[],we=[],Ri.clear(),ei.clear(),Ur=[],nr.forEach(n=>{Ct.remove(n),Sn(n)}),nr=[],r0(),bu(),Ru(),s0(),Ro){ji(7),Ln(!0);for(let n=Zo;n<=6;n++)Su(n)}else ji(0),Ln(!0);vn=fu,Ps=0,Ze=0,un=!1,He=null,Ko=-1,Hs=!1,ta=-1/0,Br=!1,ir=!1,wi=!1,oe.classList.remove("visible"),Ir=null,Ro||Uo(),Fn=!0,Ue=!1,Co="",Lo=-100,Zn=du,Mi=null,gn.textContent="",Cs.textContent=bi?"ドラッグ: 移動　　上スワイプ: ジャンプ":"移動: WASD / 矢印キー　　ジャンプ: スペース　　二段ジャンプ: スペース x2　　リセット: R",Yr()}window.addEventListener("keydown",n=>{if(hr(),(n.code.startsWith("Arrow")||n.code==="Space")&&n.preventDefault(),dn.add(n.code),!n.repeat&&n.code==="KeyR"&&Ei(),n.code==="Space"&&!n.repeat){const t=performance.now()/1e3;O&&!O.grounded&&Jo(t)&&!ir?Br=!0:Gs=!0}});window.addEventListener("keyup",n=>{dn.delete(n.code)});window.addEventListener("pointerdown",n=>{if(bi){n.button===0&&!Fn&&!Ue&&(hr(),Fn=!0,Cu()),n.button===0&&Ue&&Ei();return}if(n.button===0&&(hr(),Mi=n.pointerId,Po=n.clientX,Ue)){Ei();return}});window.addEventListener("pointermove",n=>{if(bi||n.pointerId!==Mi)return;const t=n.clientX-Po;Po=n.clientX,Math.abs(t)>0&&(Zn-=t*.0024)});window.addEventListener("pointerup",n=>{n.pointerId===Mi&&(Mi=null)});window.addEventListener("pointercancel",n=>{n.pointerId===Mi&&(Mi=null)});window.addEventListener("resize",()=>{Ve.aspect=window.innerWidth/window.innerHeight,Ve.updateProjectionMatrix(),pe.setSize(window.innerWidth,window.innerHeight)});function Lu(n=performance.now()){requestAnimationFrame(Lu);const t=Math.min(.033,(n-Ec)/1e3);if(Ec=n,wi){Zs(t),pe.render(Ct,Ve);return}ni()&&(vn-=t,vn<=0&&(vn=0,rr("TIME UP"))),c0(t),d0(t),p0(n/1e3),Tu(),Y_(t);const e=un;j_(t),Jt&&(Hs&&e&&!un&&(Ln(!0),Hs=!1),!un&&ni()&&(!yi||!Jt.visible)&&Ln(!0)),m0(t),Zs(t),Yr(),pe.render(Ct,Ve)}Ro&&(A_.style.display="flex",document.getElementById("dev-99").addEventListener("click",()=>Ba(99)),document.getElementById("dev-149").addEventListener("click",()=>Ba(149)),document.getElementById("dev-199").addEventListener("click",()=>Ba(199)));G_();H_();q_();Ei();Zs(0);Yr();pe.render(Ct,Ve);Lu();
