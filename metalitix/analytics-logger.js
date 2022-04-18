!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["analytics-logger"]=o():t["analytics-logger"]=o()}(self,(function(){return(()=>{"use strict";var t,o={};(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})})(o);var e=new Uint8Array(16);function i(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(e)}const n=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,r=function(t){return"string"==typeof t&&n.test(t)};for(var s=[],l=0;l<256;++l)s.push((l+256).toString(16).substr(1));const a=function(t,o,e){var n=(t=t||{}).random||(t.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,o){e=e||0;for(var l=0;l<16;++l)o[e+l]=n[l];return o}return function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(s[t[o+0]]+s[t[o+1]]+s[t[o+2]]+s[t[o+3]]+"-"+s[t[o+4]]+s[t[o+5]]+"-"+s[t[o+6]]+s[t[o+7]]+"-"+s[t[o+8]]+s[t[o+9]]+"-"+s[t[o+10]]+s[t[o+11]]+s[t[o+12]]+s[t[o+13]]+s[t[o+14]]+s[t[o+15]]).toLowerCase();if(!r(e))throw TypeError("Stringified UUID is invalid");return e}(n)};function d(t){return 180/Math.PI*t}const p={schema:{interval:{default:1e3},ref:{default:""},appkey:{default:"fsgdshe4h43h43h43y"}},init(){this.poll=this.poll.bind(this),this.startPolling=this.startPolling.bind(this),this.stopPolling=this.stopPolling.bind(this),this.nextPoll,this.worldPosition=new window.THREE.Vector3,this.worldQuaternion=new window.THREE.Quaternion,this.uuid=a(),window.aircards__analytics_logger__permission_granted=this.startPolling,window.aircards__analytics_logger__permission_denied=this.stopPolling},play(){this.startPolling()},remove(){this.stopPolling()},startPolling(){const{interval:t}=this.data;this.nextPoll=setTimeout(this.poll,t)},stopPolling(){clearTimeout(this.nextPoll)},poll(){const{el:{object3D:t},data:{ref:o,interval:e,appkey:i},worldPosition:n,uuid:r}=this,{rotation:{x:s,y:l,z:a}}=t;t.getWorldPosition(n);const p=d(s),u=d(l),f=d(a),{x:c,y,z:g}=n,h={sessionId:r,appkey:i,timestamp:Date.now(),position:{x:c,y,z:g},rotation:{x:p,y:u,z:f}};console.log("poll",h),fetch("https://metalitix-dev.aircards.io/api/v1/xr-analytics",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}),this.nextPoll=setTimeout(this.poll,e)}};return window.AFRAME.registerComponent("analytics-logger",p),o})()}));