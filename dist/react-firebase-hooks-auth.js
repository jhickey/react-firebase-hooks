!function(r,e){"use strict";var t=function(){return(t=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var u in e=arguments[t])Object.prototype.hasOwnProperty.call(e,u)&&(r[u]=e[u]);return r}).apply(this,arguments)},n=function(r){return{loading:void 0===r||null===r,value:r}},u=function(r){var u=r?r():void 0,o=e.useReducer(function(r,e){switch(e.type){case"error":return t({},r,{error:e.error,loading:!1,value:void 0});case"reset":return n(e.defaultValue);case"value":return t({},r,{error:void 0,loading:!1,value:e.value});default:return r}},n(u)),a=o[0],i=o[1],l=function(){var e=r?r():void 0;i({type:"reset",defaultValue:e})},c=function(r){i({type:"error",error:r})},s=function(r){i({type:"value",value:r})};return e.useMemo(function(){return{error:a.error,loading:a.loading,reset:l,setError:c,setValue:s,value:a.value}},[a.error,a.loading,l,c,s,a.value])};r.useAuthState=function(r){var t=u(function(){return r.currentUser}),n=t.error,o=t.loading,a=t.setError,i=t.setValue,l=t.value;e.useEffect(function(){var e=r.onAuthStateChanged(i,a);return function(){e()}},[r]);var c=[l,o,n];return e.useMemo(function(){return c},c)}}(this["react-firebase-hooks"]=this["react-firebase-hooks"]||{},react);
//# sourceMappingURL=react-firebase-hooks-auth.js.map