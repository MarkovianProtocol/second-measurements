/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={3958:function(t,n,e){var i=e(2702)(),r=e(7002);t.exports=function(t,n){function e(n){if(!(this instanceof e))return new e(n);try{throw new Error(n)}catch(n){n.name=t,this.stack=n.stack}i&&this.stack&&(this.stack=r(this.stack,t,n)),this.message=n||"",this.name=t}return e.prototype=new(n||Error),e.prototype.constructor=e,e.prototype.inspect=function(){return this.message?"["+t+": "+this.message+"]":"["+t+"]"},e.prototype.name=t,e}},7002:function(t){"use strict";t.exports=function(t,n,e){var i=n;return e&&(i+=": "+e),t=i+t.slice(t.indexOf("\n"))}},2702:function(t){"use strict";t.exports=function(){var t=new Error("yep");return!!t.stack&&"Error: yep\n"===t.stack.substr(0,11)}},1375:function(t,n,e){t.exports=function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}var i=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,a=void 0,u=function(t,n){y[r]=t,y[r+1]=n,2===(r+=2)&&(a?a(w):I())};function c(t){a=t}function s(t){u=t}var f="undefined"!=typeof window?window:void 0,l=f||{},d=l.MutationObserver||l.WebKitMutationObserver,v="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){return function(){return process.nextTick(w)}}function g(){return void 0!==o?function(){o(w)}:_()}function m(){var t=0,n=new d(w),e=document.createTextNode("");return n.observe(e,{characterData:!0}),function(){e.data=t=++t%2}}function b(){var t=new MessageChannel;return t.port1.onmessage=w,function(){return t.port2.postMessage(0)}}function _(){var t=setTimeout;return function(){return t(w,1)}}var y=new Array(1e3);function w(){for(var t=0;t<r;t+=2)(0,y[t])(y[t+1]),y[t]=void 0,y[t+1]=void 0;r=0}function E(){try{var t=e(4118);return o=t.runOnLoop||t.runOnContext,g()}catch(t){return _()}}var I=void 0;function A(t,n){var e=arguments,i=this,r=new this.constructor(O);void 0===r[T]&&Q(r);var o,a=i._state;return a?(o=e[a-1],u((function(){return $(a,r,o,i._result)}))):G(i,r,t,n),r}function S(t){var n=this;if(t&&"object"==typeof t&&t.constructor===n)return t;var e=new n(O);return U(e,t),e}I=v?p():d?m():h?b():void 0===f?E():_();var T=Math.random().toString(36).substring(16);function O(){}var k=void 0,R=1,C=2,N=new H;function D(){return new TypeError("You cannot resolve a promise with itself")}function x(){return new TypeError("A promises callback cannot return that same promise.")}function j(t){try{return t.then}catch(t){return N.error=t,N}}function M(t,n,e,i){try{t.call(n,e,i)}catch(t){return t}}function P(t,n,e){u((function(t){var i=!1,r=M(e,n,(function(e){i||(i=!0,n!==e?U(t,e):F(t,e))}),(function(n){i||(i=!0,z(t,n))}),"Settle: "+(t._label||" unknown promise"));!i&&r&&(i=!0,z(t,r))}),t)}function L(t,n){n._state===R?F(t,n._result):n._state===C?z(t,n._result):G(n,void 0,(function(n){return U(t,n)}),(function(n){return z(t,n)}))}function V(t,e,i){e.constructor===t.constructor&&i===A&&e.constructor.resolve===S?L(t,e):i===N?(z(t,N.error),N.error=null):void 0===i?F(t,e):n(i)?P(t,e,i):F(t,e)}function U(n,e){n===e?z(n,D()):t(e)?V(n,e,j(e)):F(n,e)}function B(t){t._onerror&&t._onerror(t._result),q(t)}function F(t,n){t._state===k&&(t._result=n,t._state=R,0!==t._subscribers.length&&u(q,t))}function z(t,n){t._state===k&&(t._state=C,t._result=n,u(B,t))}function G(t,n,e,i){var r=t._subscribers,o=r.length;t._onerror=null,r[o]=n,r[o+R]=e,r[o+C]=i,0===o&&t._state&&u(q,t)}function q(t){var n=t._subscribers,e=t._state;if(0!==n.length){for(var i=void 0,r=void 0,o=t._result,a=0;a<n.length;a+=3)i=n[a],r=n[a+e],i?$(e,i,r,o):r(o);t._subscribers.length=0}}function H(){this.error=null}var Y=new H;function K(t,n){try{return t(n)}catch(t){return Y.error=t,Y}}function $(t,e,i,r){var o=n(i),a=void 0,u=void 0,c=void 0,s=void 0;if(o){if((a=K(i,r))===Y?(s=!0,u=a.error,a.error=null):c=!0,e===a)return void z(e,x())}else a=r,c=!0;e._state!==k||(o&&c?U(e,a):s?z(e,u):t===R?F(e,a):t===C&&z(e,a))}function W(t,n){try{n((function(n){U(t,n)}),(function(n){z(t,n)}))}catch(n){z(t,n)}}var X=0;function J(){return X++}function Q(t){t[T]=X++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Z(t,n){this._instanceConstructor=t,this.promise=new t(O),this.promise[T]||Q(this.promise),i(n)?(this._input=n,this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?F(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&F(this.promise,this._result))):z(this.promise,tt())}function tt(){return new Error("Array Methods must be provided an Array")}function nt(t){return new Z(this,t).promise}function et(t){var n=this;return i(t)?new n((function(e,i){for(var r=t.length,o=0;o<r;o++)n.resolve(t[o]).then(e,i)})):new n((function(t,n){return n(new TypeError("You must pass an array to race."))}))}function it(t){var n=new this(O);return z(n,t),n}function rt(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ot(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function at(t){this[T]=J(),this._result=this._state=void 0,this._subscribers=[],O!==t&&("function"!=typeof t&&rt(),this instanceof at?W(this,t):ot())}function ut(){var t=void 0;if(void 0!==e.g)t=e.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var i=null;try{i=Object.prototype.toString.call(n.resolve())}catch(t){}if("[object Promise]"===i&&!n.cast)return}t.Promise=at}return Z.prototype._enumerate=function(){for(var t=this.length,n=this._input,e=0;this._state===k&&e<t;e++)this._eachEntry(n[e],e)},Z.prototype._eachEntry=function(t,n){var e=this._instanceConstructor,i=e.resolve;if(i===S){var r=j(t);if(r===A&&t._state!==k)this._settledAt(t._state,n,t._result);else if("function"!=typeof r)this._remaining--,this._result[n]=t;else if(e===at){var o=new e(O);V(o,t,r),this._willSettleAt(o,n)}else this._willSettleAt(new e((function(n){return n(t)})),n)}else this._willSettleAt(i(t),n)},Z.prototype._settledAt=function(t,n,e){var i=this.promise;i._state===k&&(this._remaining--,t===C?z(i,e):this._result[n]=e),0===this._remaining&&F(i,this._result)},Z.prototype._willSettleAt=function(t,n){var e=this;G(t,void 0,(function(t){return e._settledAt(R,n,t)}),(function(t){return e._settledAt(C,n,t)}))},at.all=nt,at.race=et,at.resolve=S,at.reject=it,at._setScheduler=c,at._setAsap=s,at._asap=u,at.prototype={constructor:at,then:A,catch:function(t){return this.then(null,t)}},at.polyfill=ut,at.Promise=at,at}()},3826:function(t){"use strict";t.exports=function(t){var n,e={};if(!(t instanceof Object)||Array.isArray(t))throw new Error("keyMirror(...): Argument must be an object.");for(n in t)t.hasOwnProperty(n)&&(e[n]=n);return e}},2627:function(t){"use strict";t.exports=function(t,n,e,i){Object.defineProperty(t,n,{get:function(){var t=e.call(this);return Object.defineProperty(this,n,{value:t,enumerable:!!i,writable:!0}),t},set:function(t){return Object.defineProperty(this,n,{value:t,enumerable:!!i,writable:!0}),t},enumerable:!!i,configurable:!0})}},5556:function(t){!function(){function n(t,n){var e,i,r,o,a,u,c,s;for(e=3&t.length,i=t.length-e,r=n,a=3432918353,u=461845907,s=0;s<i;)c=255&t.charCodeAt(s)|(255&t.charCodeAt(++s))<<8|(255&t.charCodeAt(++s))<<16|(255&t.charCodeAt(++s))<<24,++s,r=27492+(65535&(o=5*(65535&(r=(r^=c=(65535&(c=(c=(65535&c)*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295)<<13|r>>>19))+((5*(r>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16);switch(c=0,e){case 3:c^=(255&t.charCodeAt(s+2))<<16;case 2:c^=(255&t.charCodeAt(s+1))<<8;case 1:r^=c=(65535&(c=(c=(65535&(c^=255&t.charCodeAt(s)))*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295}return r^=t.length,r=2246822507*(65535&(r^=r>>>16))+((2246822507*(r>>>16)&65535)<<16)&4294967295,r=3266489909*(65535&(r^=r>>>13))+((3266489909*(r>>>16)&65535)<<16)&4294967295,(r^=r>>>16)>>>0}var e=n;e.v2=function(t,n){for(var e,i=t.length,r=n^i,o=0;i>=4;)e=1540483477*(65535&(e=255&t.charCodeAt(o)|(255&t.charCodeAt(++o))<<8|(255&t.charCodeAt(++o))<<16|(255&t.charCodeAt(++o))<<24))+((1540483477*(e>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^(e=1540483477*(65535&(e^=e>>>24))+((1540483477*(e>>>16)&65535)<<16)),i-=4,++o;switch(i){case 3:r^=(255&t.charCodeAt(o+2))<<16;case 2:r^=(255&t.charCodeAt(o+1))<<8;case 1:r=1540483477*(65535&(r^=255&t.charCodeAt(o)))+((1540483477*(r>>>16)&65535)<<16)}return r=1540483477*(65535&(r^=r>>>13))+((1540483477*(r>>>16)&65535)<<16),(r^=r>>>15)>>>0},e.v3=n,t.exports=e}()},1691:function(t,n,e){var i=e(5556).v3,r=Math.pow(2,32),o=function(t,n){return(i(t,n)>>>0)/r};t.exports={Seed:{IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},hashToHex:function(t,n){var e=i(t,n);return(e>>>16).toString(16)+(65535&e).toString(16)},hashToInt:function(t,n,e){return Math.floor(o(t,n)*e)},hashToReal:o,toByteString:function(t){var n=String.fromCharCode;return t.replace(/[\S\s]/gi,(function(t){t=t.charCodeAt(0);var e=n(255&t);return t>255&&(e=n(t>>>8&255)+e),t>65535&&(e=n(t>>>16)+e),e}))}}},8674:function(t,n,e){var i=e(8275).pick,r=e(2025).get("stores/audience_data"),o=e(7566),a=e(3111),u=e(2895),c=e(7474);function s(t){var n=["type","selector","attributes","value"],e=Object.assign({},t);return e.changeSet=t.changeSet.map((function(t){return i(c.dereferenceChangeId(t),n)})),e}n.emitLayerDecided=function(t){var n=(t.decisionTicket?t.decisionTicket.audienceIds:[]).map((function(t){return{id:t,name:r.get(t).name}})),e={type:a.TYPES.LIFECYCLE,name:"layerDecided",data:Object.assign(t,{audiences:n})},i=c.translateLayerEventToCampaignEvent(e);o.emit(e),o.emit(i)},n.emitViewActivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"viewActivated",data:t},e=c.translateViewActivatedToPageActivated(n);o.emit(n),o.emit(e)},n.emitViewsActivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"viewsActivated",data:t};o.emit(n)},n.emitCampaignsDecided=function(t){o.emit({type:a.TYPES.LIFECYCLE,name:"campaignsDecided",data:{pageIds:t}})},n.emitPageDeactivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"pageDeactivated",data:t};o.emit(n)},n.emitActivateEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activate"},!0)},n.emitActivatedEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activated"})},n.emitInitializedEvent=function(){var t={type:a.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),o.emit(t)},n.emitOriginsSyncedEvent=function(){var t={type:a.TYPES.LIFECYCLE,name:"originsSynced"};o.emit(t)},n.emitActionAppliedEvent=function(t){var n={type:t.type,campaignId:t.layerId,pageId:t.pageId,experimentId:t.experimentId,variationId:t.variationId};u.defineProperty(n,"changes",(function(){return s(t).changeSet}),"actionAppliedEvent");var e={type:a.TYPES.ACTION,name:"applied",data:n};o.emit(e)},n.emitActionsForDecisionAppliedEvent=function(t,n){var e={decision:t};u.defineProperty(e,"actions",(function(){return n.map(s)}),"appliedAllForDecisionEvent");var i={type:a.TYPES.ACTION,name:"appliedAllForDecision",data:e};o.emit(i)},n.emitSendEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"sendEvents"};o.emit(t)},n.emitMaybeSendEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"maybeSendEvents"};o.emit(t)},n.emitHoldEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"holdEvents"};o.emit(t)}},188:function(t,n,e){Object.defineProperty(n,"u",{value:!0});var i=e(8275),r=i.cloneDeep,o=i.isEqual,a=i.mapValues,u=i.pick,c=i.pickBy,s=e(9207),f=e(2895),l=e(7474),d=e(5686),v=e(3272);function h(t,n,e,i){var r=t.getLayerState(i),o=n.get(i),a=e.get();if(!r||!o)return a?{layer:{name:a.layerName,id:a.layerId,policy:a.layerPolicy,integrationStringVersion:a.integrationStringVersion},experiment:{name:a.experimentName,id:a.experimentId},variation:{name:a.variationName,id:a.variationId},isLayerHoldback:!1}:null;if(d.isSingleExperimentPolicy(o.policy)&&r.decision.isLayerHoldback)return null;var u,c,s=r.decision.experimentId,f=r.decision.variationId;return s&&f&&(u=o.experiments.find((function(t){return t.id===s})))&&(c=u.variations.find((function(t){return t.id===f})))?{layer:{name:o.name,id:o.id,policy:o.policy,integrationStringVersion:o.integrationStringVersion},experiment:{name:u.name,id:u.id},variation:{name:c.name,id:c.id},isLayerHoldback:r.decision.isLayerHoldback}:null}function p(t,n,e,i,r,a,c){var s=[],f=t.getLayerStates();c.onlySingleExperiments&&(f=f.filter((function(t){var e=n.get(t.layerId);return e&&d.isSingleExperimentPolicy(e.policy)})));var l=e.getActiveViewIds(),h=f.map((function(t){var e,i=!!t.decision.variationId,o=t.decisionActivationId&&t.decisionActivationId===r.getActivationId(),a=v.getExperimentAndVariation(),u=a?a.variationId:null,c=i&&t.decision.variationId===u,s=((null==(e=n.get(null==t?void 0:t.layerId))?void 0:e.viewIds)||[]).every((function(t){return!l.includes(t)}));return Object.assign(t,{isActive:i&&o&&!s||c,visitorRedirected:c})}));return(a?"function"==typeof a?h.filter(a):h.filter((function(t){return Object.keys(a).every((function(n){return o(t[n],a[n])}))})):h).forEach((function(t){var e=function(t,n,e,i){var r,o,a=t.layerId,c=n.get(a)||{},s=(c.experiments||[]).map((function(t){return u(t,["id","name"])}));if(!i&&c.decisionMetadata&&c.decisionMetadata.offerConsistency)return;var f={id:a,campaignName:c.name||null,experiment:null,audiences:[],allExperiments:s,variation:null,reason:t.decision.reason,isActive:!!t.isActive,visitorRedirected:t.visitorRedirected,isInCampaignHoldback:t.decision.isLayerHoldback};t.decision&&t.decision.experimentId&&(r=(c.experiments||[]).find((function(n){return n.id===t.decision.experimentId}))),r&&(f.experiment=u(r,["id","name","campaignName"])),r&&t.decision.variationId&&(o=r.variations.find((function(n){return n.id===t.decision.variationId}))),o&&(f.variation=u(o,["id","name"]));var l=(t.decisionTicket.audienceIds||[]).map((function(t){return u(e.get(t),["id","name"])}));return f.audiences=l,c.decisionMetadata&&c.decisionMetadata.offerConsistency&&(f.pageId=t.pageId),f}(t,n,i,c.includeOfferConsistency);e&&s.push(e)})),s}n.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(t,n,i,r,o,a,u,c,s){e(5010).time("optimizelyGetData");var d={},v={},h={},p={audiences:t.getAudiencesMap(),events:i.getEventsMap(),campaigns:d,pages:o.getPagesMap(),experiments:v,variations:h,projectId:s.getProjectId(),snippetId:s.getSnippetId(),accountId:s.getAccountId(),dcpServiceId:s.getDCPServiceId(),revision:s.getRevision(),clientName:n.getClientName(),clientVersion:n.getClientVersion()},g=l.dereferenceChangeId;return r.getAll().forEach((function(t){f.defineProperty(d,t.id,(function(){var n=Object.assign({},t);return f.defineProperty(n,"changes",(function(){return(t.changes||[]).map(g)}),"campaign"),f.defineProperty(n,"experiments",(function(){return(t.experiments||[]).map((function(t){return v[t.id]}))}),"campaign"),n}),"campaignMap","byId"),(t.experiments||[]).forEach((function(t){f.defineProperty(v,t.id,(function(){var n=Object.assign({},t);return f.defineProperty(n,"changes",(function(){return(t.changes||[]).map(g)}),"experiment"),f.defineProperty(n,"variations",(function(){return(t.variations||[]).map((function(t){return h[t.id]}))}),"experiment"),n}),"experimentMap","byId"),(t.variations||[]).forEach((function(t){f.defineProperty(h,t.id,(function(){var n=Object.assign({},t);return f.defineProperty(n,"actions",(function(){return(t.actions||[]).map((function(t){return Object.assign({},t,{changes:(t.changes||[]).map(g)})}))}),"variation"),n}),"variationMap","byId")}))}))})),p.groups=a.getGroupsMap(),e(5010).timeEnd("optimizelyGetData"),p}],n.visitor=["stores/visitor",function(t){return r(t.getVisitorProfile())}],n.visitor_id=["stores/visitor_id",function(t){return{randomId:t.getRandomId()}}],n.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(t,n,i,r,o,f,l){return{getTrafficExclusionStats:function(){return e(4308).getStats()},getCampaignStates:function(e){var r={};return p(i,n,o,t,f,e,{includeOfferConsistency:!1}).forEach((function(t){r[t.id]=t})),r},getExperimentStates:function(e){var r=p(i,n,o,t,f,e,{includeOfferConsistency:!1,onlySingleExperiments:!0}),a=["audiences","variation","reason","visitorRedirected","isActive"];return r.reduce((function(t,n){var e=n.allExperiments[0];return t[e.id]=Object.assign({},u(n,a),{id:e.id,experimentName:e.name,isInExperimentHoldback:n.isInCampaignHoldback}),t}),{})},getCampaignStateLists:function(e){var r={};return p(i,n,o,t,f,e,{includeOfferConsistency:!0}).forEach((function(t){var n=t.id;r[n]||(r[n]=[]),r[n].push(t)})),r},getPageStates:function(t){var n=o.getAll(),e=Object.keys(n).reduce((function(t,e){var i=n[e],o=r.get(i.id);return t[i.id]=Object.assign({},u(o,["id","name","apiName","category","staticConditions","tags"]),u(i,["isActive","metadata"])),t[i.id].isActive=!!t[i.id].isActive,t}),{});return t?c(e,t):e},isGlobalHoldback:function(){return f.isGlobalHoldback()},getActivationId:function(){return f.getActivationId()},getVariationMap:function(){var t=i.getLayerStates(),e={};return t.forEach((function(t){var i=n.get(t.layerId);if(t.decision&&t.decision.experimentId&&(e[t.decision.experimentId]={id:t.decision.variationId,name:null,index:null},i)){var r=(i.experiments||[]).find((function(n){return n.id===t.decision.experimentId}));if(r&&t.decision.variationId)var o=r.variations.find((function(n){return n.id===t.decision.variationId})),a=r.variations.findIndex((function(n){return n.id===t.decision.variationId}));o&&(e[t.decision.experimentId]={id:t.decision.variationId,name:o.name,index:a})}})),e},getActiveExperimentIds:function(){var t={},n=this.getCampaignStateLists({isActive:!0});return Object.keys(n).forEach((function(e){n[e].forEach((function(n){t[n.experiment.id]=!0}))})),Object.keys(t)},getRedirectInfo:function(){var t=v.getExperimentAndVariation();return t&&(t.referrer=v.getReferrer()),t},getDecisionString:function(t){if(!t)throw new Error("Must pass a config to getDecisionString");t=Object.assign({maxLength:255,shouldCleanString:!1},t);var e=h(i,n,l,t.campaignId);return e?s.generateAnalyticsString(e.layer,e.experiment,e.variation,e.isLayerHoldback,t.maxLength,t.shouldCleanString):null},getDecisionObject:function(t){if(!t)throw new Error("Must pass a config to getDecisionObject");t=Object.assign({maxLength:255,shouldCleanString:!1},t);var e=h(i,n,l,t.campaignId);if(!e)return null;var r=s.formatNamesAndIdsForAnalytics(e.layer,e.experiment,e.variation,t.shouldCleanString),o=a(r.names,(function(n,e){return s.combineAndTruncateIdAndName(n,r.idStrings[e],t.maxLength)})),u={experiment:o.experiment,variation:o.variation};return d.isSingleExperimentPolicy(e.layer.policy)||Object.assign(u,{campaign:o.layer,holdback:e.isLayerHoldback}),u}}}],n.utils=e(2671).create(),n.jquery=["env/jquery",function(t){return t}],n.event_emitter=e(5547)},9445:function(t,n,e){var i=e(7852),r=e(9454),o="optimizelyDataApi";n.registerFunction=function(t,n){var e=r.getGlobal(o);e||(e={},r.setGlobal(o,e)),e[t]||(e[t]=n)},n.unregisterFunction=function(t){var n=r.getGlobal(o);n&&n[t]&&(n[t]=function(){i.log('Ignoring attempt to call "'+o+"."+t+'" which has been unregistered.')})},n.getFunction=function(t){return r.getGlobal(o)[t]}},3737:function(t,n,e){var i=e(8275).isObject,r=e(7852),o=e(188),a=e(2025),u=a.get("stores/plugins"),c=e(136),s=e(6592),f=e(409),l=[e(3770),e(6708),e(8197)],d=["clientMetadata","cookieDomain","disable","load","optOut","rum"];n.push=function(t,n){var e,o,a,u;if(!Array.isArray(t)&&i(t))u=void 0!==t.version?t.version:1,e=t.type,a=[t];else if(Array.isArray(t))u=0,e=t[0],a=t.slice(1);else{if("string"!=typeof t)return r.warn("API / Ignoring non-array/object/string argument:",t),!1;u=0,e=t,a=[]}if(l[u]&&(o=l[u][e]),n&&-1===d.indexOf(e))return r.debug("API / Ignoring non high priority function:",e,a),!1;if(!o)return r.warn('API / No function found for "'+e+'" (v'+u+") with arguments:",a),!1;r.log('API / Executing: "'+e,'" with arguments:',a);try{o.apply(null,a),f.dispatch(c.RECORD_API_USAGE,{methodName:u?"v"+u+"."+e:e})}catch(t){r.error(t)}return!0},n.get=function(t){r.log('API / Getting module: "'+t+'"');var n=o[t];if(n?Array.isArray(n)&&(n=a.evaluate(n)):n=u.getPlugin(s.PluginTypes.apiModules,t),n)return f.dispatch(c.RECORD_API_USAGE,{methodName:"get."+t}),n;r.warn('Module "'+t+'" not found.')}},2895:function(t,n,e){var i=e(2627),r=e(136),o=e(409),a=e(7852);n.defineProperty=function(t,n,e,u,c){i(t,n,(function(){var t=["prop",u,c||n].join(".");return a.debug('Evaluating getter: "'+t+'"'),o.dispatch(r.RECORD_API_USAGE,{methodName:t}),e()}),!0)}},3770:function(t,n,e){var i=e(6708);function r(t){var n,e={};if(t)if(o(t))n=Number(t);else{if("object"!=typeof t)throw new Error("tracker: Revenue argument "+t+"not a number.");if("revenue"in(e=Object.assign({},t))){if(!o(e.revenue))throw new Error("tracker: Revenue value "+e.revenue+"not a number.");n=Number(e.revenue),delete e.revenue}}return void 0!==n&&(e.revenue=n),e}function o(t){return"number"==typeof t||"string"==typeof t&&!isNaN(Number(t))&&Number(t).toString()==t}n.activateGeoDelayedExperiments=function(t,n){n||(n=t.lists?"odds":"cdn3"),i.dataFromSource({data:t,source:n})},n.activateSiteCatalyst=function(t){t&&t.sVariable&&i.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:t.sVariable}})},n.bucketVisitor=function(t,n){if(t&&n){var e={experimentId:String(t)};n>256?e.variationId=String(n):e.variationIndex=String(n),i.bucketVisitor(e)}},n.bucketUser=n.bucketVisitor,n.disable=function(t){i.disable({scope:t})},n.log=function(t){void 0===t&&(t=!0),i.log({level:t?"INFO":"OFF"})},n.optOut=function(t){void 0===t&&(t=!0),i.optOut({isOptOut:t})},n.setCookieDomain=function(t){i.cookieDomain({cookieDomain:t})},n.setCookieExpiration=function(t){i.cookieExpiration({cookieExpirationDays:t})},n.setDimensionValue=function(t,n){var e={};e[t]=n,i.user({attributes:e})},n.setUserId=function(t){i.user({userId:t})},n.setGA4UserId=function(t){i.ga4User({ga4UserId:t})},n.storeThirdPartyData=function(t,n){i.dataFromSource({source:t,data:n})},n.trackEvent=function(t,n){i.event({eventName:t,tags:r(n)})}},7474:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.omit,a=e(2025),u=e(3019),c=e(2895),s=a.get("stores/change_data");n.translateDecisionToCampaignDecision=function(t){return f(r(t),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},n.translateLayerEventToCampaignEvent=function(t){var e={};return c.defineProperty(e,"campaign",(function(){return function(t){var e=r(t);return e.changes&&(e.changes=e.changes.map(n.dereferenceChangeId)),e.experiments&&e.experiments.forEach((function(t){t.changes&&(t.changes=t.changes.map(n.dereferenceChangeId)),t.variations&&t.variations.forEach((function(t){t.actions&&t.actions.forEach((function(t){t.changes&&(t.changes=t.changes.map(n.dereferenceChangeId))}))}))})),e}(t.data.layer)}),"campaignEvent"),e.decisionTicket=t.data.decisionTicket,e.decision=this.translateDecisionToCampaignDecision(t.data.decision),e.audiences=t.data.audiences,{type:"lifecycle",name:"campaignDecided",data:e}},n.translateViewActivatedToPageActivated=function(t){return{type:"lifecycle",name:"pageActivated",data:{page:t.data.view}}},n.dereferenceChangeId=function(t){var n=s.getChange(t);return n?u.safeReference(n):t};var f=function(t,n){var e=o(t,Object.keys(n));return Object.keys(n).forEach((function(i){var r=n[i];e[r]=t[i]})),e}},2671:function(t,n,e){var i=e(6761).Promise,r=e(7796).o,o=e(1166).F,a=e(5504).M,u=e(3329).poll,c=e(9558).x,s=e(6726).a;n.create=function(){return{observeSelector:r,onUrlChange:o,persistHtml:a,poll:u,Promise:i,waitForElement:c,waitUntil:s}}},6643:function(t){t.exports={DEFAULT_INTERVAL:20}},7796:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.isObject,a=e(136),u=e(2025),c=u.get("stores/directive"),s=e(1019),f=e(4970),l=e(6592),d=e(409),v=e(9899).generate,h=e(3329),p=e(9454),g=u.get("stores/rum"),m={once:!1,onTimeout:null,timeout:null},b={},_=function(t){_=function(){if(!c.shouldObserveChangesIndefinitely())return function(t){var n=h.poll(w.bind(null,t));b[t].cancelObservation=function(){n(),delete b[t]}};var t,n=function(){t.disconnect(),Object.keys(b).forEach(w),t.observe(i,e),g.getSampleRum()&&d.dispatch(a.RECORD_DOM_OBSERVATION_OCCURENCE,{counterName:l.PerformanceCounters.mutation_observer_invocation})},e={attributes:!0,childList:!0,subtree:!0},i=s.getDocumentElement();return t=f.create(n),function(n){var o=b[n];t.observe(i,e),o.cancelObservation=function(){delete b[n],r(b)&&t.disconnect()}}}(),_(t)};function y(t){var n=b[t];n&&n.cancelObservation&&n.cancelObservation()}function w(t){if(b[t]){if(function(t){var n=t.options.timeout;if(null!==n)if("function"==typeof n)try{return n()}catch(t){}else if(Date.now()-t.startTime>n)return!0;return!1}(b[t]))return 0===b[t].matchedCount&&"function"==typeof b[t].options.onTimeout&&b[t].options.onTimeout(),void y(t);var n=s.querySelectorAll(b[t].selector);n.length&&(n.forEach((function(n){n.l&&n.l[t]||b[t].callbackQueue.push(n)})),function(t){for(;b[t]&&b[t].callbackQueue.length;){var n=b[t].callbackQueue.shift();if(E(n,t),b[t].matchedCount=b[t].matchedCount+1,b[t].callback(n),b[t]&&b[t].options.once)return void y(t)}}(t)),g.getSampleRum()&&d.dispatch(a.RECORD_DOM_OBSERVATION_OCCURENCE,{counterName:l.PerformanceCounters.match_selector_invocation})}}function E(t,n){t.l||(t.l={}),t.l[n]=!0}n.o=function(t,n,e){if(!function(t){try{s.querySelector(t)}catch(t){return!1}return!0}(t))throw new Error("observeSelector expects a valid css selector as its first argument");if("function"!=typeof n)throw new Error("observeSelector expects a function as its second argument");if(e&&(!o(e)||"function"==typeof e))throw new Error("observeSelector expects an object as its third argument");var i=v();return e=Object.assign({},m,e||{}),b[i]={callback:n,callbackQueue:[],matchedCount:0,options:e,selector:t,startTime:Date.now()},_(i),p.setTimeout(w.bind(null,i),0),y.bind(null,i)}},1166:function(t,n,e){var i=e(9899).generate,r=e(9454),o={},a=!1,u=null,c=null,s=null,f=null;function l(){a&&(window.history.pushState===s&&(window.history.pushState=u),window.history.replaceState===f&&(window.history.replaceState=c),u=null,c=null,s=null,f=null,a=!1)}function d(){var t=r.getHref();Object.keys(o).forEach((function(n){var e=o[n];e&&e(t)}))}n.F=function(t){var n=i(),e=0===Object.keys(o).length;return o[n]=t,e&&(r.addEventListener("popstate",d),r.addEventListener("hashchange",d),a||(u=window.history.pushState,c=window.history.replaceState,window.history.pushState=function(t,n,e){u.apply(window.history,arguments),d()},s=window.history.pushState,window.history.replaceState=function(t,n,e){c.apply(window.history,arguments),d()},f=window.history.replaceState,a=!0)),function(){!function(t){delete o[t],0===Object.keys(o).length&&(r.removeEventListener("popstate",d),r.removeEventListener("hashchange",d),l())}(n)}}},5504:function(t,n,e){var i=e(1019),r=e(9899).generate,o=e(4970),a={before:"beforebegin",after:"afterend",first_child:"afterbegin",last_child:"beforeend"},u=Object.keys(a),c=[];function s(t,n,e){var i,r,o=[];if("beforebegin"===n)for(i=t.previousSibling,r=0;r<e&&i;r++)o.unshift(i),i=i.previousSibling;else if("afterend"===n)for(i=t.nextSibling,r=0;r<e&&i;r++)o.push(i),i=i.nextSibling;else if("afterbegin"===n)for(i=t.firstChild,r=0;r<e&&i;r++)o.push(i),i=i.nextSibling;else if("beforeend"===n)for(i=t.lastChild,r=0;r<e&&i;r++)o.unshift(i),i=i.previousSibling;return o}function f(t){return document.documentElement.contains(t)}n.M=function(t,n,e){if("string"!=typeof t||!t)throw new Error("persistHtml: html must be a non-empty string");if(!function(t){try{i.querySelector(t)}catch(t){return!1}return!0}(n))throw new Error("persistHtml: invalid CSS selector: "+n);if(e=null!=e?e:"before",-1===u.indexOf(e))throw new Error("persistHtml: placement must be one of: "+u.join(", "));var l=a[e],d=i.querySelector(n);if(!d)throw new Error('persistHtml: no element found for selector "'+n+'"');if(("beforebegin"===l||"afterend"===l)&&!d.parentElement)throw new Error('persistHtml: placement "'+e+'" requires the anchor element to have a parent');var v=function(t){var n=document.createElement("div");return n.innerHTML=t,n.childNodes.length}(t);if(0===v)throw new Error("persistHtml: html produces no DOM nodes");var h=function(t){var n=document.createElement("div");n.innerHTML=t;var e=[];return Array.prototype.forEach.call(n.childNodes,(function(t){if(t.nodeType===Node.ELEMENT_NODE){var n=r();e.push(n),t.setAttribute("data-optly-persist-id",n)}})),{taggedHtml:n.innerHTML,ids:e}}(t);d.insertAdjacentHTML(l,h.taggedHtml);var p,g=s(d,l,v),m=!1,b={childList:!0,subtree:!0},_=i.getDocumentElement();function y(){if(!m){m=!0,p.disconnect();var t=c.indexOf(y);-1!==t&&c.splice(t,1),g.forEach((function(t){f(t)&&t.parentNode&&t.parentNode.removeChild(t)}))}}return(p=o.create((function(){if(!m&&g.some((function(t){return!f(t)}))){var t=i.querySelector(n);!t||("beforebegin"===l||"afterend"===l)&&!t.parentElement||(p.disconnect(),g.forEach((function(t){f(t)&&t.parentNode&&t.parentNode.removeChild(t)})),m||(t.insertAdjacentHTML(l,h.taggedHtml),g=s(t,l,v)),m||p.observe(_,b))}}))).observe(_,b),c.push(y),y}},3329:function(t,n,e){var i=e(136),r=e(2025),o=e(6592),a=e(409),u=e(9899).generate,c=e(9454),s=e(6643).DEFAULT_INTERVAL,f=r.get("stores/rum"),l={};function d(t){l[t]&&Object.keys(l[t].callbacks).forEach((function(n){l[t].callbacks[n].call(null)})),f.getSampleRum()&&a.dispatch(i.RECORD_DOM_OBSERVATION_OCCURENCE,{counterName:o.PerformanceCounters.polling_invocation})}function v(t,n){l[n]&&l[n].callbacks[t]&&(delete l[n].callbacks[t],0===Object.keys(l[n].callbacks).length&&(clearInterval(l[n].id),delete l[n]))}n.poll=function(t,n){"number"!=typeof n&&(n=s),l[n]||(l[n]={callbacks:{},id:c.setInterval(d.bind(null,n),n)});var e=u();return l[n].callbacks[e]=t,v.bind(null,e,n)},n.cancelAll=function(){Object.keys(l).forEach((function(t){var n=l[t];clearInterval(n.id),delete l[t]}))}},9558:function(t,n,e){var i=e(6761).Promise,r=e(7796).o;n.x=function(t){return new i((function(n,e){r(t,n,{once:!0})}))}},6726:function(t,n,e){var i=e(6761).Promise,r=e(3329).poll;n.a=function(t){return new i((function(n,e){if(t())n();else var i=r((function(){t()&&(i(),n())}))}))}},6708:function(t,n,e){var i=e(8275).omit,r=e(136),o=e(3737),a=e(188),u=e(9480),c=e(6592),s=e(8131),f=e(8674),l=e(5192),d=e(8130).v,v=e(8298),h=e(4214),p=(e(673),e(8851)),g=e(7566),m=e(409),b=e(192),_=e(2042),y=e(587),w=e(7852),E=e(9937),I=(e(5894),e(2348)),A=e(4285),S=e(2025),T=S.get("stores/dimension_data"),O=S.get("stores/view"),k=S.get("stores/view_data"),R=S.get("stores/visitor_id"),C=S.get("stores/layer_data"),N=S.get("stores/directive"),D=n.ApiListenerError=d("ApiListenerError");n.event=function(t){var n;switch(t.eventType){case"click":n=function(t){var n;return t.eventData&&(n=p.create(t.eventData.id,t.eventData.apiName,"click",t.eventData)),function(){var t=s.trackClickEvent(n);t?w.log("API / Tracking click event:",t):w.log("API / Not tracking click event:",t)}}(t);break;case"decision":n=function(t){var n=t.eventData,e=_.createLayerState(n.layerId,n.experimentId,n.variationId,n.isLayerHoldback,n.isLayerConcluded),i=_.createSingle(n.layerId,n.experimentId,n.variationId);return function(){_.recordLayerDecision(e.layerId,e.decisionTicket,e.decision),w.log("API / Tracking decision event:",e),s.trackDecisionEvent(e.decision,e.decisionTicket,i)}}(t);break;case"pageview":n=function(t){var n=I.create(t.eventData.id,t.eventData.apiName),e=I.createState(n.id);return function(){var t=s.trackViewActivation(n,e);t?w.log("API / Tracking pageview event:",t):w.log("API / Not tracking pageview event:",t)}}(t);break;default:n=function(t){var n;return t.eventId&&(n=p.create(t.eventId,t.eventName,"custom")),I.updateAllViewTags(),function(){s.trackCustomEvent(t.eventName,t.tags,n,t.properties)?w.log("API / Tracking custom event:",t.eventName,t.tags):w.log("API / Not tracking custom event:",t.eventName)}}(t)}R.getBucketingId()?n():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postActivate,cleanupFn:n})},n.clientMetadata=function(t){0},n.priorRedirectString=function(t){},n.microsnippetError=function(t){},n.rum=function(t){m.dispatch(r.SET_RUM_DATA,t.eventData)},n.initialViewStates=function(t){var n=Object.keys(t.states||{}).map((function(n){return{id:n,isActive:t.states[n]}}));I.registerViews(n)},n.page=function(t){var n=k.getByApiName(t.pageName);if(!n)throw new Error('Unknown page "'+t.pageName+'"');var e=!t.hasOwnProperty("isActive")||t.isActive,i=function(){e?I.activateViaAPI(n,t.tags):(I.deactivate(n),w.log("API / Deactivated Page",I.description(n)))};R.getBucketingId()?i():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postViewsActivated,cleanupFn:i})},n.tags=function(t){I.setGlobalTags(t.tags)},n.user=function(t){w.log("API / Setting visitor custom attributes:",t.attributes),Object.keys(t.attributes||{}).forEach((function(n){var e,i,r=t.attributes[n],o=n,a=T.getById(n)||T.getByApiName(n);a&&(o=a.id,e=a.apiName,i=a.segmentId||a.id);var u={id:i,value:r};e&&(u.name=e),x(o,u,!0)}))},n.ga4User=function(t){t.ga4UserId?(w.log("API / Setting ga4 user id in the global store:",t.ga4UserId),m.dispatch(r.SET_GA4_USER_ID,t)):w.error('API / Argument "ga4UserId" is missing')};var x=function(t,n,e){var i=[{key:e?["custom",t]:[t],value:n,metadata:{lastModified:v.now()}}],o=function(){m.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:i})};R.getBucketingId()?o():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:o})};n.optOut=function(t){var n=!t.hasOwnProperty("isOptOut")||t.isOptOut;h.setOptOut(n)},n.cookieExpiration=function(t){var n=t.cookieExpirationDays;n<90&&(w.error('Argument "cookieExpirationDays"=',n,"less than minimum days:",90,", setting to minimum."),n=90),w.log("API / Setting cookie age to",n,"days."),m.dispatch(r.SET_COOKIE_AGE,86400*n)},n.extendCookieLifetime=function(t){t=Object.assign({isEnabled:!0},t),w.log("API / Setting cookie automatic lifetime extension to",t.isEnabled),m.dispatch(r.SET_COOKIE_AUTO_REFRESH,t.isEnabled)},n.cookieDomain=function(t){w.log("API / Setting cookie domain to",t.cookieDomain),m.dispatch(r.SET_COOKIE_DOMAIN,t.cookieDomain)},n.disable=function(t){if(t.scope){if("tracking"!==t.scope)throw new Error('Unknown "scope" for disable: '+t.scope);w.log("API / Disabling tracking"),m.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else w.log("API / Disabling everything"),m.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},n.log=function(t){var n=t.level,e=t.match;void 0===n&&(n="INFO"),void 0===e&&(e=""),w.setLogMatcher(e),w.setLogLevel(n)},n.registerModule=function(t){var n="custom/"+t.moduleName;if(a[n]||o.get(n))throw new Error('Module name "'+n+'" is reserved. Will not be registered as plugin.');E.registerApiModule(n,t.module)},n.dataFromSource=function(t){var n=t.source;l.makeAsyncRequest(n),l.resolveRequest(n,t.data)},n.addListener=function(t){if("function"!=typeof t.handler)throw new Error("A handler function must be supplied");(t=i(t,["type"])).publicOnly=!0,t.emitErrors=!0;var n=t.handler;t.handler=function(t){try{return n(t)}catch(t){throw new D(t)}},g.on(t)},n.removeListener=function(t){if(!t.token)throw new Error("Must supply a token to removeListener");g.off(t.token)},n.load=function(t){t.data=Object.assign({},t.data),u.normalizeClientData(t.data),m.dispatch(r.DATA_LOADED,{data:t.data})},n.integrationSettings=function(t){if(!t.id)throw new Error("id is required");if(!t.settings)throw new Error("settings is required");m.dispatch(r.SET_INTEGRATION_SETTINGS,Object.assign({},t.settings,{id:t.id}))},n.loadEmbeddedEditor=function(){document.getElementById("optimizely-visual-editor-root")?w.warn("API / Visual editor is already loaded."):y.loadEmbeddedEditor("https://app.optimizely.com/dist/visual-editor/main.js")},n.bucketVisitor=function(t){if(!t.variationId&&void 0===t.variationIndex||t.variationId&&t.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!t.experimentId)throw new Error("An experimentId is required.");var n,e,i=t.campaignId;if(i){if(!(n=C.get(i)))throw new Error("Could not find layer "+i)}else if(!(i=(n=C.getLayerByExperimentId(t.experimentId)).id))throw new Error("Could not find layer for experiment "+t.experimentId);if(!(e=n.experiments.find((function(n){return n.id===t.experimentId}))))throw new Error("Could not find experiment "+t.experimentId+" in layer "+i);var r=t.variationId;if(void 0!==t.variationIndex){if(!(r=e.variations[t.variationIndex].id))throw new Error("Could not find variation at index "+t.variationIndex+" in experiment "+t.experimentId)}else if(!e.variations.find((function(t){return t.id===r})))throw new Error("Cound not find variation "+r+" in experiment "+t.experimentId);A.updateVariationIdMap(i,t.experimentId,r),R.getBucketingId()&&A.persistVariationIdMap(),A.updateContextualMabMap(i,t.experimentId,{variationId:r}),R.getBucketingId()&&A.persistContextualMabMap()},n.waitForOriginSync=function(t){if(!Array.isArray(t.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+b.stringify(t.canonicalOrigins));t.canonicalOrigins.forEach((function(t){if("string"!=typeof t)throw new Error("Each item in canonicalOrigins must be a string. Found type "+(void 0===t?"undefined":(n=t)&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n));var n})),m.dispatch(r.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:t.canonicalOrigins})},n.disableCrossOrigin=function(){w.log("API / cross origin tracking is DISABLED"),m.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0})},n.activate=function(){N.shouldActivate()?(O.getActiveViewStates().forEach((function(t){I.deactivate(k.get(t.id))})),m.dispatch(r.RESET_VIEW_STATES),f.emitActivateEvent()):w.debug("Not activating.")},n.sendEvents=function(){f.emitSendEvents()},n.holdEvents=function(){f.emitHoldEvents()}},8197:function(){},4860:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.flattenDeep,a=i.isEmpty,u=i.isObject,c=e(8130).v,s=n.ActivationCodeError=c("ActivationCodeError"),f=n.ProjectJSError=c("ProjectJSError"),l=e(8395),d=e(136),v=e(8131),h=e(8674),p=e(7595),g=e(8841),m=e(9480),b=e(8298),_=e(1035),y=e(2025),w=e(4214),E=e(1019),I=e(6592),A=e(7566),S=e(3111),T=e(8484),O=e(409),k=e(3672),R=e(2042),C=e(1353).DT,N=e(7852),D=e(3224),x=e(5010),j=e(9937),M=e(5385),P=e(6761).Promise,L=e(5467),V=e(5894),U=e(249),B=e(123),F=e(2348),z=e(4285),G=e(9454),q=(y=e(2025)).get("stores/session"),H=y.get("stores/audience_data"),Y=y.get("stores/action_data"),K=y.get("stores/cleanup"),$=y.get("stores/directive"),W=y.get("stores/global"),X=y.get("stores/group_data"),J=y.get("stores/layer_data"),Q=y.get("stores/layer"),Z=y.get("stores/pending_events"),tt=y.get("stores/plugins"),nt=y.get("stores/rum"),et=y.get("stores/visitor"),it=y.get("stores/view_data"),rt=y.get("stores/view"),ot=y.get("stores/visitor_id"),at=y.get("stores/visitor_bucketing"),ut=y.get("stores/xdomain"),ct=e(3737),st=e(673),ft=e(2594),lt=!1,dt=n;function vt(){x.timeEnd("xdomainSetup");h.emitActivateEvent()}function ht(t){st.handleError(t.data.error,t.data.metadata)}function pt(t,n){O.dispatch(d.SET_RUM_DATA,{data:{extras:{xdAttempt:t,xdError:n?n.toString():void 0}}})}function gt(t,n,e){x.time("getDecisionTicket"),t=t||[];var i=W.getGlobalHoldbackThreshold(),r=ot.getBucketingId();if(!r)throw new Error("bucketingId not set");var o,a=et.getVisitorProfile();n&&(o=at.getVariationIdMap()[n.id]);var u={bucketingId:r,visitorProfile:a,audiences:t,globalHoldback:i,preferredVariationMap:o,layer:n};return n&&e&&_.isPageIdRelevant(n)?e.map((function(t){return _.createTicket(Object.assign({},u,{pageId:t}))})):[_.createTicket(u)]}function mt(t,n){var e={};return t.forEach((function(t){Array.isArray(t)?Object.assign(e,mt(t,n)):u(t)&&n[t.type]&&(e[t.type]=!0)})),e}function bt(t){var n=[];return t.forEach((function(t){n.push(t.name,t)})),n}function _t(t){var n=K.getCleanupFns(t);if(n.length>0){for(;n.length>0;)n.shift()();O.dispatch(d.CLEAR_CLEANUP_FN,{lifecycle:t})}}n.initialize=function(t){return this.initGlobalStore(t.clientData),this.initializePlugins(t.plugins)},n.initGlobalStore=function(t){m.normalizeClientData(t),A.on({filter:{type:"error"},handler:ht}),O.dispatch(d.DATA_LOADED,{data:t}),N.log("Initialized with DATA:",t)},n.initializePlugins=function(t){if(x.timeEnd("preInitialize"),x.time("ClientInitialize"),Array.isArray(window.optimizely)&&(window.optimizely=window.optimizely.filter((function(t){var n=!0;return!ct.push(t,n)}))),w.setOptOut($.shouldOptOut()),!$.isDisabled()&&!$.shouldOptOut()){ft.queueBeacons(),E.isReady()?O.dispatch(d.SET_DOMCONTENTLOADED):E.addReadyHandler((function(){O.dispatch(d.SET_DOMCONTENTLOADED)})),x.time("projectJS");var e=W.getProjectJS();if("function"==typeof e)try{T.apply(e)}catch(t){N.error("Error while executing projectJS: ",t),g.emitError(new f(t))}x.timeEnd("projectJS"),x.time("pluginsRegister"),(t||[]).forEach((function(t){try{t(j)}catch(t){g.emitInternalError(t)}})),(W.getPlugins()||[]).forEach((function(t){try{T.apply(t,[j])}catch(t){g.emitError(t)}})),x.timeEnd("pluginsRegister"),V.load();var i=A.on({filter:{type:"lifecycle",name:"activated"},handler:function(){et.observe(z.persistVisitorProfile),Q.observe(z.persistLayerStates),q.observe(z.persistSessionState),Z.observe(D.schedulePersistPendingEvents),at.observe(z.persistVisitorBucketingStore),A.off(i)}});A.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:n.onViewsActivated}),A.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:n.onPageDeactivated}),n.initializeApi();var r=D.getPendingEvents();if(r&&(O.dispatch(d.LOAD_PENDING_EVENTS,{events:r}),D.retryPendingEvents(r)),A.on({filter:{type:"lifecycle",name:"activate"},handler:n.activate}),h.emitInitializedEvent(),!$.shouldActivate())return P.resolve();var o=[];if(ut.isDisabled())vt(),x.timeEnd("ClientInitialize");else{x.time("xdomainSetup");var a=n.initializeXDomainStorage();if(o.push(a),Boolean(ut.getCanonicalOrigins())){var u=U.makeTimeoutPromise(1e3);P.race([a,u]).catch((function(t){N.error("Failed to initialize xDomain storage: ",t)})).then(vt).catch(st.handleError)}else vt(),x.timeEnd("ClientInitialize")}return P.all(o)}N.log("Controller / Is disabled")},n.activate=function(){try{var t=[];N.log("Activated client"),_t(I.Lifecycle.preActivate);var n=!1;lt;var e=b.now();O.dispatch(d.ACTIVATE,{activationId:String(e),activationTimestamp:e});var i=it.getAll();F.registerViews(i,n),z.setId(z.getOrGenerateId()),t.push(v.trackPostRedirectDecisionEvent()),O.dispatch(d.MERGE_VARIATION_ID_MAP,{variationIdMap:z.getVariationIdMap()}),O.dispatch(d.MERGE_CONTEXTUAL_MAB_MAP,{contextualMabMap:z.getContextualMabMap()}),O.dispatch(d.SET_ODP_SEGMENTS,z.getOdpSegments()),O.dispatch(d.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:z.getPreferredLayerMap()}),_t(I.Lifecycle.postVisitorProfileLoad),t.push((s=tt.getAllPlugins(I.PluginTypes.visitorProfileProviders),f=et.getVisitorProfile(),z.populateEagerVisitorData(s,f)).then((function(){N.log("Populated visitor profile")})));var r=gt(),o=_.decideGlobal(r);N.log("Made global decision",r,"->",o),O.dispatch(d.RECORD_GLOBAL_DECISION,o);var a=v.trackClientActivation();a?N.log("Tracked activation event",a):N.log("Not tracking activation event");var u=dt.setUpViewActivation(i),c=[];return u.forEach((function(t){c=c.concat(F.activateMultiple([t]))})),_t(I.Lifecycle.postViewsActivated),rt.getActiveViewStates().length||h.emitCampaignsDecided([]),_t(I.Lifecycle.postActivate),h.emitActivatedEvent(),P.all(t).then((function(){A.emit({type:S.TYPES.LIFECYCLE,name:"activateDeferredDone"}),N.log("All immediate effects of activation resolved")}),g.emitError)}catch(t){return g.emitError(t),P.reject(t)}var s,f},dt.setUpViewActivation=function(t){var n=[];return t.forEach((function(t){"boolean"==typeof rt.getViewState(t.id).isActive&&F.isActivationTypeImmediate(t.activationType)?N.debug("Skipping page: already evaluated, presumably at the edge",F.description(t)):F.shouldTriggerImmediately(t.activationType)?n.push(t):t.activationType===I.ViewActivationTypes.callback?(N.debug("Setting up conditional activation for Page",F.description(t)),dt.activateViewOnCallback(t)):t.activationType===I.ViewActivationTypes.polling?(N.debug("Setting up polling activation for Page",F.description(t)),M.pollFor(T.apply.bind(null,t.activationCode),null,B.isTimedOut.bind(null,b.now())).then((function(){F.activateMultiple([t])})).catch((function(n){N.warn("Failed to activate view ",t,n)}))):t.activationType!==I.ViewActivationTypes.manual&&g.emitError(new Error("Unknown view activationType: "+t.activationType))})),n},dt.activateViewOnCallback=function(t){var n={pageId:t.id};Object.defineProperty(n,"isActive",{get:function(){return rt.isViewActive(t.id)}});try{T.apply(t.activationCode,[function(n){var e=Object.assign({},n,{pageName:t.apiName,type:"page"});ct.push(e)},n])}catch(n){var e=new s("("+n.toString()+") in activationCode for "+F.description(t));g.emitError(e,{originalError:n,userError:!0})}},n.onViewsActivated=function(t){var e,i=t.data.views,r=i.map((function(t){return t.id}));try{if(!ot.getBucketingId())throw new Error("View activated with no visitorId set");var o=function(t){var e=J.getAllByPageIds(t),i=$.getForceVariationIds(),r=$.getForceAudienceIds(),o=!a(i);o&&N.log("Force variations are in use. Disabling mutual exclusivity.");var u=o?{individual:e}:e.reduce((function(t,n){return n.groupId?t.groups[n.groupId]||(t.groups[n.groupId]=X.get(n.groupId)):t.individual.push(n),t}),{groups:{},individual:[]});if(N.log("Deciding Campaigns/Experiments for Page(s)",t),u.groups){var c=Object.keys(u.groups).map((function(t){return k.description(u.groups[t])})).join(", ");N.log("Groups:",c)}var s=u.individual.map(R.description).join(", ");N.log("Campaigns/Experiments not in Groups (by Campaign id):",s);var f=Object.keys(u.groups||{}).map((function(e){return function(t,e,i,r){try{var o=function(t){return{bucketingId:ot.getBucketingId(),preferredLayerId:at.getPreferredLayerMap()[t.id]}}(r),u=_.decideGroup(r,o);if(u.reason)return N.debug("Not activating Group",k.description(r),"; reason:",u.reason),nt.getSampleRum()&&O.dispatch(d.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:r.id}),P.resolve();var c=J.get(u.layerId);if(!c)return N.debug("Visitor was bucketed into a Campaign ("+u.layerId+") which is not in this snippet"),P.resolve();var s=(c.pageIds||[]).filter((function(t){return Array.isArray(i)&&i.includes(t)}));return a(s)?(N.debug("Not activating Group",k.description(r),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),P.resolve()):(nt.getSampleRum()&&O.dispatch(d.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:r.id}),n.decideAndExecuteLayerASAP(t,e,s,c))}catch(t){return N.error("Error getting decision for Group",k.description(r),"; ",t),P.reject(t)}}(i,r,t,u.groups[e])}))||[],l=u.individual.map((function(e){var o=(e.pageIds||[]).filter((function(n){return Array.isArray(t)&&t.includes(n)}));return n.decideAndExecuteLayerASAP(i,r,o,e)})),v=f.concat(l);return P.all(v).then((function(n){var e=n.filter((function(t){return!!t}));return N.log("All Campaigns/Experiments for Page(s) (by Campaign id)",t,"resolved:",e.map(R.description).join(", ")),e}))}(r).catch(g.emitError);return o.then((function(){h.emitCampaignsDecided(r)})),e=P.all(i.map((function(t){var n=function(){x.time("sendViewActivate"),F.parseViewTags(t);var n=v.trackViewActivation(t);n?N.log("Tracked activation for Page",F.description(t),n):N.log("Not Tracking activation for Page",F.description(t))};return E.isReady()?P.resolve(n()):M.pollFor(E.isReady,1e3).then(n)}))),P.all([o,e])}catch(t){g.emitError(t)}},n.onPageDeactivated=function(t){var n=t.data.page;(Y.getAllActionIdsByPageId(n.id)||[]).forEach((function(t){var e=Y.getActionState(t);e&&(Object.keys(e).forEach((function(t){var i=e[t];if(i.cancel)try{i.cancel(),N.debug("Controller / Canceled change",t,"observation due to deactivation of page:",n)}catch(n){N.error("Controller / Error canceling change",t,"observation upon deactivation of page.",n)}if(n.undoOnDeactivation&&i.undo)try{i.undo(),N.debug("Controller / Undid change",t,"due to deactivation of page:",n)}catch(t){N.error("Controller / Error undoing change upon deactivation of page.",t)}})),O.dispatch(d.REMOVE_ACTION_STATE,{actionId:t}),N.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",n,t))}))},n.initializeApi=function(){var t={push:ct.push};t.get=ct.get;var n=window.optimizely;Array.isArray(n)&&n.forEach((function(n){t.push(n)})),t.data={note:"Obsolete, use optimizely.get('data') instead"},t.state={},window.optimizely=t},n.persistItemsWithId=function(t){return Object.keys(t).forEach((function(n){var e=t[n];z.checkKeyForVisitorId(n)&&C.setItem(n,e)})),t},n.initializeXDomainStorage=function(){var t=e(5292),i=!!z.getCurrentId(),r=!!i&&z.hasSomeData();i?r?N.log("xd / Existing visitor; has data on this origin"):N.log("xd / Existing visitor; new to this origin"):N.log("xd / New visitor");var o=W.getAccountId(),u="https://a22744560884.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+o+"."),c="/client_storage/a"+o+".html";t.subscribe((function(t,n){z.checkKeyForVisitorId(t)&&C.setItem(t,n)}));var s=t.fetchAll().then((function(n){if(!ot.getVisitorIdLocator()){var e=ut.getCanonicalOrigins();if(e){var i=t.getXDomainUserId(n,e);i&&(N.log("Syncing cross-origin visitor randomId:",i),z.maybePersistVisitorId({randomId:i}))}}return z.deleteOldForeignData(),n})).then(n.persistItemsWithId).then((function(t){if(z.loadForeignData(),i&&!r){var n=!a(t);N.debug("xd / Loaded foreign data? ",n),pt(n)}N.log("Loaded visitor data from foreign origins"),h.emitOriginsSyncedEvent()}),(function(t){throw i&&!r&&(N.debug("xd / Failed to load foreign data:",t),pt(!1,t)),t}));return P.all([t.load(u,c).catch((function(t){throw N.debug("xd / Failed to load iframe:",t),i&&!r&&pt(!1,t),t})),s.catch((function(t){N.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",t.message),N.debug("xd / Enqueuing sync to happen after visitorId set."),O.dispatch(d.ADD_CLEANUP_FN,{lifecycle:I.Lifecycle.postVisitorProfileLoad,cleanupFn:h.emitOriginsSyncedEvent})}))])},n.decideAndExecuteLayerASAP=function(t,e,i,u){return new P((function(c,s){x.time("decideAndExecuteLayer");try{!function(t,n,e,i,r){if(n.length||e.length)return void r(gt([],void 0,i));var u=R.relatedAudienceIds(t),c=u.reduce((function(t,n){var e=H.get(n);return e&&t.push(e),t}),[]),s=tt.getAllPlugins(I.PluginTypes.audienceMatchers);if(nt.getSampleRum()){var f={};if(c.forEach((function(t){Object.assign(f,mt(t.conditions,s))})),!a(f)){var l=Object.keys(f);O.dispatch(d.RECORD_AUDIENCE_USAGE,{audienceTypes:l,layerId:t.id})}}var v=function(t){N.debug("Audience list for extracting types",t);try{var n=new Set(o(t.map((function(t){return t.conditions}))).filter((function(t){return null!=t&&"string"!=typeof t})).map((function(t){return t.type})));return n.has("time_and_day")&&n.add("currentTimestamp"),N.debug("Extracted unique types from audiences",n),n}catch(t){return N.error("An error occurred while extracting types from audiences:",t),new Set}}(c),h=tt.getAllPlugins(I.PluginTypes.visitorProfileProviders),g=et.getVisitorProfile();z.populateLazyVisitorData(h,g,v),function(t,n,e,i){var r=t.reduce((function(t,e){return Object.assign(t,p.requiredAudienceFieldsForConditions(e.conditions,n))}),{}),o=Object.keys(r).reduce((function(t,n){var e=r[n];if(void 0===z.getAttribute(e)){var i=z.getPendingAttributeValue(e);void 0!==i&&t.push(i)}return t}),[]);if(0===o.length)return i();var u=[].concat(t),c=L.firstToResolve(o.map((function(t){return P.resolve(t).then((function(){var t=et.getVisitorProfile();if(u=u.filter((function(e){return void 0===p.isInAudience(t,e,n)})),!a(u))throw new Error("At least one audience is still pending")}))})));P.race([c,new P((function(t,n){G.setTimeout(n,e)}))]).then((function(){N.log("Activating Campaign after pending Audiences resolved",t),i()}),(function(){N.log("Activating Campaign after timeout on Audiences",t),i()}))}(c,s,R.getActivationTimeout(t),(function(){var n=gt(c,t,i);n.forEach((function(n){!function(t,n,e){var i=t.audienceIds.map(H.get.bind(H)).filter(Boolean),r=n.filter((function(n){return!t.audienceIds.includes(n.id)}));N.log("When deciding Campaign",R.description(e),"visitor is in audiences:",bt(i),"and not in audiences:",bt(r))}(n,c,t)})),r(n)}))}(u,t,e,i,(function(o){o.forEach((function(o){var c=o.pageId?[o.pageId]:i;N.debug("Deciding layer: ",u,"with decisionTicket: ",o,"and actionViewIds: ",c),function(t,e,i,o,u){var c=R.description(t);N.log("Activating Campaign",c,"on Page(s)",o),x.time("decideLayer"),i.length&&(N.log("Applying force audienceIds:",i,"to Campaign",c),(u=r(u)).audienceIds=i);var s=n.decideLayer(t,u,e),f=!(!e.length&&!i.length),p=n.getActionsForDecision(t,s,f),g=function(t,n){return t.filter((function(t){return void 0===t.pageId||n.includes(t.pageId)}))}(p.actions,o);if(p.maybeExecute&&function(t,n,e,i){var r=R.description(n);N.log("Preparing actions",t,"for Campaign",r,"on Page(s)",i),t.forEach(l.prepareAction)}(g,t,0,o),o.forEach((function(){v.trackDecisionEvent(s,u,t)})),h.emitLayerDecided({layer:t,decisionTicket:u,decision:s}),s.error)throw s.error;if(nt.getSampleRum()){O.dispatch(d.RECORD_LAYER_POLICY_USAGE,{policy:t.policy,layerId:t.id});var m=function(t){var n={};return t.forEach((function(t){t.changeSet.forEach((function(t){n[t.type]||(n[t.type]=!0)}))})),n}(p.actions);O.dispatch(d.RECORD_CHANGE_TYPE_USAGE,{changeTypes:Object.keys(m),layerId:t.id}),a(t.integrationSettings)||O.dispatch(d.RECORD_INTEGRATION_USAGE,{integrations:R.getIntegrationTypes(t),layerId:t.id})}if(x.timeEnd("decideLayer"),!_.isInCohort(s))return void N.log("Not activating Campaign: "+R.description(t)+"; not in the cohort because:",s.reason);x.time("executeLayer"),p.maybeExecute&&function(t,n,e,i){var r=R.description(n);N.log("Executing actions",t,"for Campaign",r,"on Page(s)",i),P.all(t.map((function(t){return l.executePreparedAction(t).then(h.emitActionAppliedEvent.bind(null,t))}))).then((function(){N.log("All page actions for",e,"applied:",t),h.emitActionsForDecisionAppliedEvent(e,t)})).catch((function(t){N.warn("Error evaluating page actions for decision",e,"because:",t)}))}(g,t,s,o),x.timeEnd("executeLayer")}(u,t,e,c,o)})),c(u)}))}catch(t){N.error("Error getting decision for Campaign: "+R.description(u),t),s(t)}x.timeEnd("decideAndExecuteLayer")}))},n.decideLayer=function(t,n,e){var i;x.time("sendDecision");var r=R.description(t);i=e.length?_.getDummyLayerDecision(t,e):_.decideLayer(t,n),N.log("Recording decision for Campaign",r,n,"->",i),R.recordLayerDecision(t.id,n,i),i.variationId&&i.experimentId&&z.updateVariationIdMap(t.id,i.experimentId,i.variationId),t.groupId&&z.updatePreferredLayerMap(t.groupId,t.id);return i},n.getActionsForDecision=function(t,n,e){var i=R.description(t),r="NOT applying changes for Campaign",o={actions:[],maybeExecute:!1};if(o.actions=[].concat(Y.getLayerActions(n.layerId)||[],Y.getExperimentActions(n.experimentId)||[],Y.getExperimentVariationActions(n.experimentId,n.variationId)||[]),!e&&W.isGlobalHoldback())return N.log(r,i,"(visitor is in global holdback)"),o;if(n.isLayerHoldback)return N.log(r,i,"(visitor is in layer holdback)"),x.timeEnd("layerHoldback"),o;if(!n.experimentId||!n.variationId)return N.log(r,i,"(visitor is not eligible for any Experiments)"),o;return o.maybeExecute=!0,N.log("Got Actions for Campaign:",i,o.actions),o}},6546:function(t,n,e){var i=e(6761).Promise,r=e(8298),o=e(2025).get("stores/plugins"),a=e(6592),u=e(7852);n.create=function(t,n,e){var c={identifier:t.id,action:n,startTime:e||r.now()};try{var s=o.getPlugin(a.PluginTypes.changeAppliers,t.type);if(!s)throw new Error("Unrecognized change type "+t.type);return new s(t,c)}catch(t){return u.error("Change applier was never properly constructed:",t),{apply:function(){return i.reject(t)}}}}},8486:function(t){t.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}},9114:function(t,n,e){var i=e(8275).isEmpty,r=e(8486).CHANGE_DATA_KEY;function o(t,n){return[t,n].join("_")}n.getData=function(t,n,e){var i=o(n,e);return t[r]&&t[r][i]?t[r][i]:null},n.hasData=function(t){return Boolean(t&&t[r]&&!i(t[r]))},n.removeData=function(t,n,e){t[r]&&delete t[r][o(n,e)]},n.setData=function(t,n,e,i){if("object"!=typeof i)throw new Error("setData expects an object");t[r]||(t[r]={}),t[r][o(n,e)]=i}},8421:function(t,n,e){var i=e(3826);t.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",SRCSET:"srcset",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}},8395:function(t,n,e){var i=e(136),r=e(8841),o=e(5192),a=e(8130).v,u=e(8298),c=e(2025),s=e(409),f=e(7852),l=e(6761).Promise,d=e(7219),v=c.get("stores/global"),h=c.get("stores/action_data"),p=c.get("stores/change_data"),g=c.get("stores/session"),m=e(6546);e(123).initialize();var b=a("ActionError");function _(t,n,e){if(h.getActionState(n.id))if(void 0===h.getChangeApplier(t.id,n.id)){var r={changeId:t.id,actionId:n.id,changeApplier:m.create(t,n,e)};s.dispatch(i.SET_CHANGE_APPLIER,r)}else f.warn("Action / Attempted to prepare a change which is already being applied: ",t);else f.warn("Action / Attempted to prepare change for inactive action: ",n)}function y(t,n,i,a){if(!a.includes(n)){if(!t[String(n)]){var c=p.getChange(n);if(!c){var s="Change with id "+n+" is absent";return a.length&&(s+=" but listed as a dependency for "+a[a.length-1]),void f.warn(s)}t[String(n)]=new l((function(s){var v=(c.dependencies||[]).map((function(e){return y(t,e,i,a.concat([n]))}));if(c.src){var g="change_"+c.src,m=o.makeAsyncRequest(g,(function(){return d.addScriptAsync("https://cdn.optimizely.com/public/22744560884/data"+c.src,(function(){o.resolveRequest(g)}))})).then((function(){var t=p.getChange(c.id);t||r.emitError(new b("Failed to load async change from src: "+c.src)),_(t,i,u.now())}));v.push(m)}l.all(v).then((function(){var t=u.now(),r=h.getChangeApplier(n,i.id);return r?(f.debug("Action / Applying change:",c),r.apply().then((function(n){n?f.log(n):f.debug("Action / Applied change for the first time in "+(u.now()-t)+"ms:",c),e(5010).timeEnd("flash"),s()}))):(f.debug("Action / Not applying change ",n," - No changeApplier found."),void s())})).catch((function(t){f.error("Action / Failed to apply change:",c,t),s()}))}))}return t[String(n)]}f.error("Change with id "+n+" has circular dependencies: "+a.concat(n))}n.prepareAction=function(t){f.debug("Action / Preparing:",t),s.dispatch(i.ACTION_EXECUTED,{actionId:t.id,sessionId:g.getSessionId(),layerId:t.layerId,pageId:t.pageId,timestamp:u.now(),activationId:v.getActivationId()});var n=u.now();t.changeSet.forEach((function(e){var r="object"==typeof e&&null!==e?e.id:e,o=p.getChange(r);o||(s.dispatch(i.ADD_CHANGE,e),o=p.getChange(r)),o.src||_(o,t,n)}))},n.executePreparedAction=function(t){f.debug("Action / Executing:",t);var n={},e=t.changeSet.map((function(e){var i="object"==typeof e&&null!==e?e.id:e;return y(n,i,t,[])}));return l.all(e).then((function(){f.debug("changes for action id="+t.id+" applied")}))}},123:function(t,n,e){var i=e(8486),r=e(2025).get("stores/directive");function o(){("interactive"===document.readyState||"complete"===document.readyState)&&(n.domReadyTime=Date.now())}n.domReadyTime=null,n.initialize=function(){o(),document.addEventListener("readystatechange",o,!0)},n.isTimedOut=function(t){var e=Date.now();if(!n.domReadyTime||!t)return!1;var o=Math.max(t,n.domReadyTime);return r.isEditor()&&(o=n.domReadyTime),!(e-o<i.SELECTOR_POLLING_MAX_TIME)}},8131:function(t,n,e){var i=e(8275),r=i.omit,o=i.pick,a=e(136),u=e(8841),c=e(8674),s=e(2575),f=e(8298),l=e(7871),d=e(2025),v=e(1019),h=e(6592),p=e(8421),g=e(5225),m=e(7566),b=e(3111),_=e(1320),y=e(409),w=e(2042),E=e(7852),I=e(5010),A=e(6761).Promise,S=e(3272),T=e(5894),O=e(249),k=e(6938),R=e(9899),C=d.get("stores/client_metadata"),N=d.get("stores/global"),D=d.get("stores/session"),x=d.get("stores/view"),j=d.get("stores/plugins"),M=d.get("stores/layer"),P=d.get("stores/layer_data"),L=d.get("stores/observed_redirect"),V=d.get("stores/pending_redirect"),U=d.get("stores/visitor"),B=d.get("stores/directive"),F=d.get("stores/event_data"),z=d.get("stores/visitor_id");function G(t,n,e){return void 0===e&&(e=!1),Object.assign({},t,{isLayerHoldback:n,isLayerConcluded:e,isGlobalHoldback:!1,clientName:null!==t.clientName?t.clientName:l.NAME,integrationStringVersion:null!==t.integrationStringVersion?t.integrationStringVersion:1,anonymizeIP:null!==N.getAnonymizeIP()?N.getAnonymizeIP():void 0,activationId:N.getActivationId(),decisionTicketAudienceIds:[],sessionId:D.getSessionId(),activeViewStates:[],userFeatures:K(U.getVisitorProfile()),layerStates:M.getLayerStatesForAnalytics()})}function q(t){var n=S.getReferrer()||v.getReferrer();return{eventId:R.generate(),timestamp:f.now(),revision:N.getRevision(),clientName:C.getClientName(),clientVersion:C.getClientVersion(),projectId:N.getProjectId(),accountId:N.getAccountId(),activationId:N.getActivationId(),sessionId:D.getSessionId(),isGlobalHoldback:N.isGlobalHoldback(),namespace:N.getNamespace(),referrer:n,visitorId:z.getRandomId(),activeViewStates:t.activeViewStates,layerStates:t.layerStates,userFeatures:K(t.visitorProfile,!t.deferBehaviorFeatures)}}function H(t){var n,e;return t.pageId?(n=t.pageId,(e=x.getViewState(n))&&e.isActive?e.metadata:{}):{}}function Y(){try{var t=P.getExperimentsMap()||{},n=[],i=Object.create(null);if(Object.keys(t).forEach((function(e){var r=t[e]&&t[e].experimentMetadata;(r&&r.cmabAttributes&&r.cmabAttributes.vbaAttributes||[]).forEach((function(t){t&&t.featureName&&!i[t.featureName]&&(i[t.featureName]=!0,n.push(t))}))})),!n.length)return[];var r=e(8620).getEvents();return e(5560).buildVbaFeatures(n,r,f.now()).map((function(t){return{id:t.id,name:t.id,type:t.type,value:t.value,shouldIndex:!0}}))}catch(t){E.warn("CMAB / VBA / Error building visitor behavior features",t)}return[]}function K(t,n){void 0===n&&(n=!0);var e=j.getAllPlugins(h.PluginTypes.visitorProfileProviders),i=Object.values(e).filter((function(t){return!0===t.shouldTrack})),r={id:null,type:null,name:"",value:null,shouldIndex:!0},a=i.reduce((function(n,e){try{var i=e.provides,a=t[i],u=[];if(void 0!==a){null!==a&&"object"==typeof a?u=Object.keys(a).map((function(t){var n=a[t],e=null!==n&&"object"==typeof n?n:{value:n};return Object.assign({},{type:i,name:t},e)})):u.push({type:i,value:a});var c=u.map((function(t){return o(Object.assign({},r,t),Object.keys(r))})).filter((function(t){return!!t.value}));n=n.concat(c)}}catch(t){E.warn("Error evaluating userFeature against visitorProfile:",t)}return n}),[]);return n?a.concat(Y()):a}function $(t){t&&t.userFeatures&&(t.userFeatures=t.userFeatures.concat(Y()))}function W(t,n,e){var i=function(t,n){var e=[],i=j.getAllPlugins(h.PluginTypes.analyticsTrackers);return Object.keys(i).forEach((function(r){var o=i[r];if(o[t]&&(!n||!o[n]))try{e.push({name:r,hookFn:d.evaluate(o[t])})}catch(t){E.error(t)}})),e}(t,e);E.debug("Found "+i.length+" analytics integrations defining a "+t+" hook"),E.debug("Calling each with data: ",n),i.forEach((function(t){try{E.debug("Calling plugin: "+t.name),t.hookFn(n),E.debug("Called plugin: "+t.name)}catch(t){E.error(t)}}))}function X(t,n,e){var i=function(t,n){0;var e=[],i=j.getAllPlugins(h.PluginTypes.analyticsTrackers);return Object.keys(i).forEach((function(r){var o=i[r];n.includes(o[t])&&e.push({name:r,hookFn:o.trackLayerDecision})})),e}(t,n);E.debug("Found "+i.length+" analytics integrations  defining a trackLayerDecision "+t+" timing of "+n.join("|")),E.debug("Calling each with data: ",e),i.forEach((function(t){try{E.debug("Calling plugin: "+t.name),t.hookFn(e),E.debug("Called plugin: "+t.name)}catch(t){E.error(t)}}))}n.trackClientActivation=function(){if(!e(4308).shouldDrop()&&B.shouldSendTrackingData()){var t,n=(t=q({activeViewStates:[],visitorProfile:U.getVisitorProfile(),layerStates:M.getLayerStatesForAnalytics()}),Object.assign(t,{eventTags:{}}));return I.timeEnd("sendActivate"),W("onClientActivation",n),n}},n.trackCustomEvent=function(t,n,i,o){if(!e(4308).shouldDrop()){n=n||{},o=o||{},i||(i=F.getByApiName(t));var a=function(t,n,e,i){var r=q({activeViewStates:x.getActiveViewStates(),visitorProfile:U.getVisitorProfile(),layerStates:M.getLayerStatesForAnalytics(),deferBehaviorFeatures:!0}),o=i&&i.pageId?H(i):x.getActiveViewTags(),a=Object.assign({},o,n),u=i&&i.category?i.category:g.OTHER;return Object.assign(r,{eventEntityId:i&&i.id,eventApiName:t,eventCategory:u,eventTags:a,eventProperties:e})}(t,n,o,i),c={name:t,type:_.CUSTOM,category:a.eventCategory,tags:r(a.eventTags,["revenue"])};if(void 0!==n.revenue&&(c.revenue=n.revenue),u.emitAnalyticsEvent({name:i?i.name||i.apiName:t,apiName:i?i.apiName:void 0,type:_.CUSTOM,properties:a.eventProperties,tags:r(a.eventTags,["revenue"]),category:a.eventCategory,metrics:c.revenue?{revenue:c.revenue}:{}},!B.shouldSendTrackingData()),B.shouldSendTrackingData())return s.addEvent(c),$(a),W("onCustomEvent",a),a}},n.trackDecisionEvent=function(t,n,i){if(!e(4308).shouldDrop()){I.time("trackDecisionEvent"),i||(i=P.get(t.layerId));var r=R.generate();y.dispatch(a.RECORD_LAYER_DECISION_EVENT_ID,{layerId:t.layerId,pageId:n.pageId,decisionId:r});var o=t.experimentId?i.experiments.find((function(n){return n.id===t.experimentId})):null,u=function(t,n,e,i,r){var o=null,a=null,u=null;if(r&&(o=r.name||null,u=r.integrationSettings,n.variationId)){var c=r.variations.find((function(t){return t.id===n.variationId}));c&&(a=c.name||null)}var s=S.getReferrer()||v.getReferrer(),l={sessionId:D.getSessionId(),decisionTicketAudienceIds:e.audienceIds,visitorId:z.getRandomId(),decisionId:t,activationId:N.getActivationId(),namespace:N.getNamespace(),timestamp:f.now(),pageId:e.pageId||null,variationId:n.variationId,variationName:a,experimentId:n.experimentId,experimentName:o,layerId:n.layerId,layerName:i.name,layerPolicy:i.policy,accountId:N.getAccountId(),projectId:N.getProjectId(),revision:String(N.getRevision()),clientName:C.getClientName(),clientVersion:C.getClientVersion(),referrer:s,integrationStringVersion:i.integrationStringVersion||1,integrationSettings:Object.assign({},i.integrationSettings,u)};return l}(r,t,n,i,o),s=V.isExpectingRedirect(),l=V.getLayerId(),d=w.description(i);if(s&&l===i.id&&(T.persist(u,"COOKIE"),E.log("Relaying decision for redirect Campaign",d)),B.shouldSendTrackingData()){var h=G(u,t.isLayerHoldback,t.isLayerConcluded);if(s&&l===i.id){var g=k.TrackLayerDecisionTimingFlags.preRedirectPolicy;h.timing=g,X(g,[k.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],h),E.log("Called trackLayerDecision for redirect Campaign",d,h)}else{g=k.TrackLayerDecisionTimingFlags.nonRedirectPolicy;h.timing=g,X(g,[k.NonRedirectPolicies.TRACK_IMMEDIATELY],h),E.log("Called trackLayerDecision for non-redirect Campaign",d,h)}(function(t){return!(!t||!t.variations)&&t.variations.some((function(t){return!!t.actions&&t.actions.some((function(t){return!(!t||!t.changes)&&t.changes.some((function(t){return t.type===p.changeType.REDIRECT}))}))}))})(o)&&(y.dispatch(a.SET_TRACKER_USE_BEACON,!0),c.emitMaybeSendEvents(),y.dispatch(a.SET_TRACKER_USE_BEACON,!1)),I.timeEnd("trackDecisionEvent")}else E.log("Analytics / Not tracking decision for Campaign",w.description(i))}},n.trackPostRedirectDecisionEvent=function(){if(e(4308).shouldDrop()||!B.shouldSendTrackingData()||L.hasTracked())return A.resolve();var t=L.get();if(!t)return A.resolve();var n=G(t,!1),i=k.TrackLayerDecisionTimingFlags.postRedirectPolicy;n.timing=i,X(i,[k.PostRedirectPolicies.TRACK_IMMEDIATELY],n);var r=new A((function(t){var n=m.on({filter:{type:b.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){t(),m.off(n)}})})),o=O.makeTimeoutPromise(1e3);return A.race([r,o]).then((function(){E.log("Calling trackers after successful sync")}),(function(t){E.warn("Calling trackers after failed sync:",t)})).then((function(){(n=G(t,!1)).timing=k.TrackLayerDecisionTimingFlags.postRedirectPolicy,X(k.TrackLayerDecisionTimingFlags.postRedirectPolicy,[k.PostRedirectPolicies.TRACK_AFTER_SYNC],n),y.dispatch(a.REGISTER_TRACKED_REDIRECT_DATA)})).catch((function(t){E.error("Error when calling trackers after sync:",t)}))},n.trackClickEvent=function(t){if(!e(4308).shouldDrop()){var n=function(t){var n=q({activeViewStates:x.getActiveViewStates(),visitorProfile:U.getVisitorProfile(),layerStates:M.getLayerStatesForAnalytics(),deferBehaviorFeatures:!0}),e=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector,i=t.apiName,r=t.category||g.OTHER,o=t.id,a=H(t);return Object.assign(n,{eventApiName:i,eventCategory:r,eventEntityId:o,eventTags:a,pageId:t.pageId,selector:e})}(t),i={name:t.apiName,type:t.eventType,category:n.eventCategory,tags:n.eventTags};if(u.emitAnalyticsEvent({name:t.name||t.apiName,apiName:t?t.apiName:void 0,type:t.eventType,category:n.eventCategory,tags:n.eventTags,metrics:{}},!B.shouldSendTrackingData()),B.shouldSendTrackingData())return s.addEvent(i),$(n),W("onClickEvent",n),n}},n.trackViewActivation=function(t,n){if(!e(4308).shouldDrop())if(n||(n=x.getViewState(t.id)),n.isActive){var i=function(t,n){var e=q({activeViewStates:x.getActiveViewStates(),visitorProfile:U.getVisitorProfile(),layerStates:M.getLayerStatesForAnalytics(),deferBehaviorFeatures:!0});return Object.assign(e,{pageId:t.id,pageApiName:t.apiName,viewCategory:t.category,eventTags:n.metadata})}(t,n);if(u.emitAnalyticsEvent({name:t.name||i.pageApiName,apiName:i.pageApiName,type:_.PAGEVIEW,category:i.viewCategory,tags:i.eventTags,metrics:{}},!B.shouldSendTrackingData()),B.shouldSendTrackingData())return s.addEvent({name:i.pageApiName,type:_.PAGEVIEW,category:i.viewCategory,tags:i.eventTags}),$(i),y.dispatch(a.TRACK_VIEW_ACTIVATED_EVENT,{pageId:t.id,eventData:i}),I.timeEnd("sendViewActivate"),W("onPageActivated",i),i}else E.debug("Inactive view passed to `trackViewActivation`")}},5894:function(t,n,e){var i=e(136),r=e(6278),o=e(8841),a=e(2025),u=e(6592),c=e(409),s=e(7852),f=e(6938),l=a.get("stores/plugins"),d=".",v=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(t){return t.map(encodeURIComponent).join(",")},encodeValueString:function(t){return t},decodeValueString:function(t){return t},valueFromValueString:function(t){return t.split(",").map(r.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:function(t,n){var e=null;if(t){var i=l.getPlugin(u.PluginTypes.analyticsTrackers,n);if(i&&"function"==typeof i.serializeSettings)try{e=i.serializeSettings(t)}catch(t){s.warn("Analytics / Failed to persist integrationSettings for plugin:",n,t)}}return e},valueFromValueString:function(t,n){var e=null,i=l.getPlugin(u.PluginTypes.analyticsTrackers,n);if(i&&"function"==typeof i.deserializeSettings)try{e=i.deserializeSettings(t)}catch(t){s.warn("Analytics / Failed to persist integrationSettings for plugin:",n,t)}return e},isNullable:!0}],h={},p={};v.forEach((function(t){h[t.name]=t,p[t.relayName]=t})),n.persist=function(t,n){n===f.RedirectRelayMedia.COOKIE?function(t){try{var n=function(t){var n=[],e=Object.keys(t).reduce((function(e,i){var r=t[i],o=h[i];return o?(o.isMulti?Object.keys(r).forEach((function(t){var n=r[t];null!==(n=o.valueToValueString?o.valueToValueString(n,t):String(n))&&(n=(o.encodeValueString||encodeURIComponent)(n),e.push(encodeURIComponent(o.relayName+d+t)+"="+n))})):null!==r&&(r=(o.valueToValueString||String)(r),r=(o.encodeValueString||encodeURIComponent)(r),e.push(o.relayName+"="+r)),e):(n.push(i),e)}),[]);if(n.length)throw new Error("Relay / Don't know how to relay some fields: "+n);return e.sort(),e.join("&")}(t)}catch(t){return s.error("Relay / Error computing redirect relay cookie: ",t),void o.emitError(t)}s.debug("Relay / Setting redirect relay cookie:",n);try{r.set(u.COOKIES.REDIRECT,n,{maxAge:5,encodeValue:!1})}catch(t){s.error("Relay / Failed to set redirect relay cookie",t),o.emitError(t)}}(t):s.error("Relay / Unsupported redirect relay medium: "+n)},n.load=function(t){if(t||(t=function(){var t=r.get(u.COOKIES.REDIRECT,!1);if(t)return s.log("Relay / Found redirect cookie:",t),t}()),t){var n=function(t){var n={};return t.split("&").forEach((function(t){var e=t.split("=");if(2===e.length){var i=r.safeDecodeURIComponent(e[0]),a=p[i];if(a||(a=v.find((function(t){return t.isMulti&&0===i.indexOf(t.relayName+d)})))){var u=e[1];try{if(a.isMulti){n[a.name]=n[a.name]||{};var c=i.substring(a.relayName.length+1);u=(a.decodeValueString||r.safeDecodeURIComponent)(u),u=(a.valueFromValueString||function(t){return t})(u,c),n[a.name][c]=u}else u=(a.decodeValueString||r.safeDecodeURIComponent)(u),u=(a.valueFromValueString||function(t){return t})(u),n[a.name]=u}catch(n){return s.warn("Relay / Skipping segment due to decode or parse error:",t,n),void o.emitError(n)}}else s.warn("Relay / Skipping segment with unknown field identifier:",t,i)}else s.warn("Relay / Skipping invalid segment:",t)})),n}(t);if(n){var e=[];if(v.forEach((function(t){null!==n[t.name]&&void 0!==n[t.name]||(t.isNullable?n[t.name]=null:(delete n[t.name],e.push(t.name)))})),!e.length)return c.dispatch(i.LOAD_REDIRECT_DATA,n),c.dispatch(i.ADD_CLEANUP_FN,{lifecycle:u.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){var t,e;e=(t=n).pageId||void 0,c.dispatch(i.RECORD_LAYER_DECISION,{layerId:t.layerId,decision:{layerId:t.layerId,experimentId:t.experimentId,variationId:t.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:t.decisionTicketAudienceIds,bucketingId:t.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:e,activationId:t.activationId},sessionId:t.sessionId,activationId:t.activationId,timestamp:t.timestamp,revision:t.revision,namespace:t.namespace,pageId:e}),c.dispatch(i.RECORD_LAYER_DECISION_EVENT_ID,{layerId:t.layerId,pageId:e,decisionId:t.decisionId}),c.dispatch(i.ACTION_EXECUTED,{sessionId:t.sessionId,layerId:t.layerId,pageId:t.pageId,timestamp:t.timestamp,activationId:t.activationId})}}),n;s.error("Relay / Observed redirect data with missing fields:",e)}}}},8841:function(t,n,e){var i=e(7566);n.emitError=function(t,n,e){i.emit({type:"error",name:t.name||"Error",data:{error:t,metadata:n}},e||!1,!0)},n.emitInternalError=function(t,e){n.emitError(t,e,!0)},n.emitAnalyticsEvent=function(t,n){var e={type:"analytics",name:"trackEvent",data:t};i.emit(e,n)}},7595:function(t,n,e){var i=e(5421),r=e(8859),o=e(7852),a=e(4285);function u(t,n){var e="function"==typeof t?t(n):t;return"string"==typeof e&&(e=[e]),Array.isArray(e)?e:(o.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function c(t){return t.name?t.name+" ("+t.id+")":t.id}n.isInAudience=function(t,n,e){var a,s=function(t,n){return function(e){var i=e.type,a=n[i];if(!a)throw new Error("Audience / No matcher found for type="+i);if(a.fieldsNeeded)for(var c=u(a.fieldsNeeded,e),s=0;s<c.length;s++){var f=c[s];if(void 0===r.getFieldValue(t,f))return void o.debug("Audience / Required field",f,"for type",i,"has no value")}o.debug("Matching condition:",e,"to values:",t);var l=a.match(t,e);if(void 0!==l)return!!l}}(t,e);o.groupCollapsed("Checking audience",n.name,n.id,n),o.debug("Visitor Profile:",t);try{var f=i.evaluate(n.conditions,s)}catch(t){a=t,f=!1}return o.groupEnd(),a&&o.error("Audience / Error evaluating audience",c(n),":",a),o.log("Is "+(f?"in":"NOT in")+" audience:",c(n)),f},n.requiredAudienceFieldsForConditions=function t(n,e){var i={};return n.forEach((function(n){if(Array.isArray(n))Object.assign(i,t(n,e));else if(null!==n&&"object"==typeof n){var r=e[n.type];if(r)u(r.fieldsNeeded,n).forEach((function(t){i[a.serializeFieldKey(t)]=t}))}})),i}},1489:function(t,n){n.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},n.FIELDS_V0_2={name:n.FIELDS.NAME,time:n.FIELDS.TIME,type:n.FIELDS.TYPE,category:n.FIELDS.CATEGORY,tags:n.FIELDS.OPTIONS,session_index:n.FIELDS.SESSION_INDEX}},8487:function(t,n,e){var i=e(1489),r=e(8859).getFieldValue,o=e(1691);function a(t,n,e,r,o){this[i.FIELDS.NAME]=t,this[i.FIELDS.TYPE]=n,"string"==typeof e&&e.trim().length>0&&(this[i.FIELDS.CATEGORY]=e),r&&Object.keys(r).length>0&&(this[i.FIELDS.OPTIONS]=r),void 0!==o&&(this[i.FIELDS.REVENUE]=o)}function u(t,n,e,r){this.eventBase=t,this[i.FIELDS.TIME]=n,void 0!==e&&(this[i.FIELDS.SESSION_ID]=e),void 0!==r&&(this[i.FIELDS.SESSION_INDEX]=r)}n._=a,a.prototype.digest=function(){var t=function(t,n){return encodeURIComponent(t)+"="+encodeURIComponent(n)},n=[];if(n.push(t(i.FIELDS.NAME,this[i.FIELDS.NAME])),n.push(t(i.FIELDS.TYPE,this[i.FIELDS.TYPE])),this[i.FIELDS.CATEGORY]&&n.push(t(i.FIELDS.CATEGORY,this[i.FIELDS.CATEGORY])),this[i.FIELDS.REVENUE]&&n.push(t(i.FIELDS.REVENUE,this[i.FIELDS.REVENUE])),!this[i.FIELDS.OPTIONS])return n.join("&");var e=this[i.FIELDS.OPTIONS]||{},r=Object.keys(e).filter((function(t){return e.hasOwnProperty(t)}));r=r.sort();for(var o=0;o<r.length;o++)n.push(t(r[o],e[r[o]]));return n.join("&")},a.prototype.hash=function(){return this.hash_||(this.hash_=o.hashToHex(o.toByteString(this.digest()),o.Seed.BEHAVIOR_EVENT)),this.hash_},a.prototype.setHash=function(t){this.hash_=t},a.prototype.reHash=function(){this.hash_=null,this.hash()},a.prototype.equals=function(t){if(this.hash()!==t.hash()||this[i.FIELDS.NAME]!==t[i.FIELDS.NAME]||this[i.FIELDS.TYPE]!==t[i.FIELDS.TYPE]||this[i.FIELDS.CATEGORY]!==t[i.FIELDS.CATEGORY]||this[i.FIELDS.REVENUE]!==t[i.FIELDS.REVENUE])return!1;var n=this[i.FIELDS.OPTIONS]||{},e=t[i.FIELDS.OPTIONS]||{},r=Object.keys(n).filter((function(t){return n.hasOwnProperty(t)})),o=Object.keys(e).filter((function(t){return e.hasOwnProperty(t)}));if(r.length!==o.length)return!1;for(var a=0;a<r.length;a++){var u=r[a];if(!e.hasOwnProperty(u)||n[u]!==e[u])return!1}return!0},a.prototype.getValueOrDefault=function(t,n){var e=r(this,t);return void 0!==e?e:n},a.prototype.setFieldValue=function(t,n){t!==i.FIELDS.NAME&&t!==i.FIELDS.TYPE&&t!==i.FIELDS.CATEGORY&&t!==i.FIELDS.REVENUE&&t!==i.FIELDS.OPTIONS||(this[t]=n,this.reHash())},n.J=u,u.prototype.getValueOrDefault=function(t,n){if(0===t.length)return this;var e={};e[i.FIELDS.TIME]=this[i.FIELDS.TIME],e[i.FIELDS.SESSION_ID]=this[i.FIELDS.SESSION_ID],e[i.FIELDS.SESSION_INDEX]=this[i.FIELDS.SESSION_INDEX];var o=r(e,t);return void 0!==o?o:this.eventBase.getValueOrDefault(t,n)},u.prototype.setFieldValue=function(t,n){t===i.FIELDS.TIME||t===i.FIELDS.SESSION_ID||t===i.FIELDS.SESSION_INDEX?this[t]=n:this.eventBase.setFieldValue(t,n)};var c={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};u.prototype.readableEvent=function(){var t,n,e=function(t){return"string"==typeof t?'"'+t+'"':t},r=this,o=[];[i.FIELDS.NAME,i.FIELDS.TYPE,i.FIELDS.CATEGORY,i.FIELDS.REVENUE,i.FIELDS.SESSION_ID].forEach((function(i){t=c[i],void 0!==(n=r.getValueOrDefault([i]))&&o.push(t+": "+e(n))}));var a=[];if(t=c[i.FIELDS.OPTIONS],void 0!==(n=r.getValueOrDefault([i.FIELDS.OPTIONS]))&&(Object.keys(n).forEach((function(t){var i=n[t];a.push(t+": "+String(e(i)))})),o.push(t+": {\n\t\t"+a.join(",\n\t\t")+"\n\t}")),"number"==typeof(n=r.getValueOrDefault([i.FIELDS.TIME]))&&(n=e(new Date(n).toString())),void 0!==n){o.push("timestamp: "+n)}return"{\n\t"+o.join(",\n\t")+"\n}"},u.prototype.toObject=function(t){var n,e,r={},o=this;[i.FIELDS.NAME,i.FIELDS.TYPE,i.FIELDS.CATEGORY,i.FIELDS.REVENUE,i.FIELDS.OPTIONS,i.FIELDS.SESSION_INDEX].forEach((function(t){n=c[t],void 0!==(e=o.getValueOrDefault([t],t===i.FIELDS.OPTIONS?{}:void 0))&&(r[n]=e)}));var a=c[i.FIELDS.OPTIONS],u=c[i.FIELDS.REVENUE];if(t&&t.revenueAsTag&&r[u]&&(r[a]=r[a]||{},r[a][u]=r[u],delete r[u]),"number"==typeof(e=o.getValueOrDefault([i.FIELDS.TIME])))if(t&&t.timeAsTimestamp){r.timestamp=new Date(e)}else{r.time=e}return r}},2575:function(t,n,e){var i=e(4938);n.initializeStore=i.initialize,n.addEvent=i.addEvent,n.getEvents=i.getEvents,n.getEventCount=i.getEventCount},7269:function(t,n,e){var i=e(8487).J,r=e(8298),o=e(1489),a=e(8487)._;n.CURRENT_SESSION_INDEX=0;var u=18e5;function c(t,e){var i;i=n.isInSameSession(t,e)?t.getValueOrDefault([o.FIELDS.SESSION_ID]):e.getValueOrDefault([o.FIELDS.TIME]),e.setFieldValue(o.FIELDS.SESSION_ID,i)}function s(t,e,i){var r,a=t.getValueOrDefault([o.FIELDS.SESSION_INDEX]);r=n.isInSameSession(e,t)?a:i?a+1:a-1,e.setFieldValue(o.FIELDS.SESSION_INDEX,r)}n.isInSameSession=function(t,n){var e=t.getValueOrDefault([o.FIELDS.TIME],0),i=n.getValueOrDefault([o.FIELDS.TIME],0);return this.isTimestampInSameSession(e,i)},n.isTimestampInSameSession=function(t,n){return Math.abs(t-n)<u},n.updateSessionId=function(t,n){if(t){var e=t.getValueOrDefault([o.FIELDS.TIME]),r=t.getValueOrDefault([o.FIELDS.SESSION_ID]),u=n.getValueOrDefault([o.FIELDS.TIME]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?e:r,c(t=new i(new a("",""),e,r),n)}else n.setFieldValue(o.FIELDS.SESSION_ID,n.getValueOrDefault([o.FIELDS.TIME]))},n.updateSessionIndex=function(t,n){if(t){var e=t.getValueOrDefault([o.FIELDS.TIME]),r=t.getValueOrDefault([o.FIELDS.SESSION_INDEX]),u=n.getValueOrDefault([o.FIELDS.TIME]),c=t.getValueOrDefault([o.FIELDS.SESSION_ID]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?0:r,c="number"!=typeof c?e:c,s(t=new i(new a("",""),e,c,r),n,!1)}else n.setFieldValue(o.FIELDS.SESSION_INDEX,0)},n.sessionize=function(t){var e=t.length;if(0!==e){t[0].setFieldValue(o.FIELDS.SESSION_ID,t[0].getValueOrDefault([o.FIELDS.TIME]));for(var i=1;i<e;i++)c(t[i-1],t[i]);var a=n.CURRENT_SESSION_INDEX,f=t[e-1].getValueOrDefault([o.FIELDS.TIME]);r.now()-f>u&&(a+=1),t[e-1].setFieldValue(o.FIELDS.SESSION_INDEX,a);for(i=e-1;i>0;i--)s(t[i],t[i-1],!0)}},n.reindexIfNecessary=function(t,n,e){var i=function(t){for(var n=0;n<t.length;n++){var e=t[n].getValueOrDefault([o.FIELDS.SESSION_INDEX]);t[n].setFieldValue(o.FIELDS.SESSION_INDEX,e+1)}};-1===t.getValueOrDefault([o.FIELDS.SESSION_INDEX])&&(i(n),i(e))},n.sessionSortPredicate=function(t,n){return t[o.FIELDS.TIME]-n[o.FIELDS.TIME]},n.applyMigrations=function(t){return!1}},4938:function(t,n,e){var i=e(136),r=e(6278),o=e(8298),a=e(5225),u=e(409),c=e(7852),s=e(7269),f=e(4285),l=n,d=e(8487).J,v=e(1489),h=e(6592),p=e(8487)._,g=(s=e(7269),e(2025)),m=g.get("stores/visitor_events"),b=g.get("stores/visitor_events_manager"),_={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},y=1e3;function w(t){u.dispatch(i.SET_VISITOR_EVENTS,t)}function E(t){u.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:t})}function I(t){u.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:t})}function A(t){u.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:t})}function S(){return m.getEvents()}function T(){return b.getBaseMap()}function O(){return b.getEventQueue()}function k(){return b.getLastEvent()}function R(){var t=S().concat(O()),n=!1;return t.length>y&&(t=t.slice(-1e3),n=!0),w(t),I([]),n}n.initialize=function(t,n){if(!b.getInitialized()){l.I(t,n);var e=S();e.length>0&&A(e[e.length-1]);var r=O();r.length>0&&A(r[r.length-1]),u.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}},n.addEvent=function(t){c.debug("Behavior store: adding event",t);var n=l.A(t);A(n),I(O().concat(n)),s.reindexIfNecessary(k(),S(),O()),l.S(O()),n.t&&function(t){try{var n=Number(r.get(h.COOKIES.OPTIMIZELY_SESSION,!1));if(isNaN(n)||0!==n){var e=n?s.isTimestampInSameSession(t,n)?t:0:t;r.set(h.COOKIES.OPTIMIZELY_SESSION,e.toString(),{path:"/",encodeValue:!1},!0)}}catch(t){c.error("Error setting session cookie",t)}}(n.t)},n.getEvents=function(){return O().length>0&&(R()&&s.sessionize(S()),l.T(S()),l.S(O())),S()},n.getEventCount=function(){return O().length+S().length},l.I=function(t,n){e(5010).time("populatePersistedEvents"),l.O(t,n)&&(l.T(S()),l.S(O())),s.sessionize(S()),e(5010).timeEnd("populatePersistedEvents")},l.O=function(t,n){if(0===t.length&&0===n.length)return w([]),I([]),!1;var e=!1,i=t[0]||n[0];return _.EVENTBASE in i?(w(l.k(t)),I(l.k(n))):(e=!0,w(l.R(t)),I(l.R(n))),O().length>0&&(R(),e=!0),w(l._updateBaseMapAndMaybeDedupe(S())),l._migrateEventBasesAndUpdateStore()&&(e=!0),e},l.R=function(t){for(var n=[],e=0;e<t.length;e++){var i=t[e],r=l.N(i);n[e]=new d(r,i[v.FIELDS.TIME])}return n},l._migrateEventBasesAndUpdateStore=function(){var t=!1,n=l.D();return s.applyMigrations(n)&&(t=!0,E({}),w(l._updateBaseMapAndMaybeDedupe(S())),I(l._updateBaseMapAndMaybeDedupe(O()))),t},l.j=function(){return o.now()},l.A=function(t){var n,e=t.name,i=t.type||"default",r=t.category||a.OTHER,o=t.tags||{};t.revenue&&(n=t.revenue);var u=new p(e,i,r,o,n);u=l.P(u);var c=l.j(),f=new d(u,c,-1);return s.updateSessionId(k(),f),s.updateSessionIndex(k(),f),f},l._updateBaseMapAndMaybeDedupe=function(t){for(var n=0;n<t.length;n++)t[n].eventBase=l.P(t[n].eventBase);return t},l.T=function(t){var n=l.L(t);f.persistBehaviorEvents(n)},l.S=function(t){var n=l.L(t);f.persistBehaviorEventQueue(n)},l.V=function(){var t;b.getCleared()||(w([]),I([]),l.T(S()),l.S(O()),E({}),A(null),t=!0,u.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:t}))},l.P=function(t){var n=t.hash(),e=T(),i=e[n];if(void 0===i)return e[n]=[t],E(e),t;for(var r=0;r<i.length;r++)if(t.equals(i[r]))return i[r];return i.push(t),E(e),t},l.D=function(){var t=[],n=T();for(var e in n)!n.hasOwnProperty(e)||(t=t.concat(n[e]));return t},l.L=function(t){for(var n=function(t){var n={};n[v.FIELDS.NAME]=t.getValueOrDefault([v.FIELDS.NAME]),n[v.FIELDS.TYPE]=t.getValueOrDefault([v.FIELDS.TYPE]);var e=t.getValueOrDefault([v.FIELDS.CATEGORY]);void 0!==e&&(n[v.FIELDS.CATEGORY]=e);var i=t.getValueOrDefault([v.FIELDS.REVENUE]);void 0!==i&&(n[v.FIELDS.REVENUE]=i);var r=t.getValueOrDefault([v.FIELDS.OPTIONS]);return void 0!==r&&(n[v.FIELDS.OPTIONS]=r),n},e=_,i=[],r="_idx_",o=0;o<t.length;o++){var a,u,c=t[o],s=c.eventBase;if(s.hasOwnProperty(r)){a=i[s[r]];var f=c[v.FIELDS.TIME]-(a[e.TIMEBASE]||0);(u={})[e.DELTA]=f,u[e.INDEX]=o,a[e.TIMESTAMPS].push(u)}else(a={})[e.EVENTBASE]=n(c),a[e.HASH]=s.hash(),a[e.TIMEBASE]=c[v.FIELDS.TIME],(u={})[e.DELTA]=0,u[e.INDEX]=o,a[e.TIMESTAMPS]=[u],i.push(a),s[r]=i.length-1}for(o=0;o<t.length;o++)delete t[o].eventBase[r];return i},l.N=function(t,n){var e=new p(t[v.FIELDS.NAME],t[v.FIELDS.TYPE],t[v.FIELDS.CATEGORY],t[v.FIELDS.OPTIONS],t[v.FIELDS.REVENUE]);return void 0!==n&&e.setHash(n),e},l.k=function(t){for(var n=_,e=[],i=0;i<t.length;i++)for(var r=t[i],o=l.N(r[n.EVENTBASE],r[n.HASH]),a=r[n.TIMEBASE],u=r[n.TIMESTAMPS],c=0;c<u.length;c++){var s=u[c],f=new d(o,a+s[n.DELTA]);e[s[n.INDEX]]=f}return e},n.deserialize=function(t){return l.k(t)},n.mergeAllEvents=function(t){var n=[].concat.apply([],t);return n.sort(s.sessionSortPredicate),s.sessionize(n),n},n.MAX_EVENTS=y},136:function(t,n,e){var i=e(3826);t.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,SET_GA4_USER_ID:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,UPDATE_CONTEXTUAL_MAB_MAP:null,MERGE_CONTEXTUAL_MAB_MAP:null,SET_ODP_SEGMENTS:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,RESET_VIEW_STATES:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT:null,RECORD_VISITOR_ID_LOCATOR_USAGE:null,RECORD_VISITOR_ID_ERROR:null,RECORD_STICKY_BUCKETING_FEATURE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_USE_BEACON:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})},6592:function(t,n,e){var i=e(3826);n.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",OPTIMIZELY_SESSION:"optimizelySession",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},n.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},n.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},n.Lifecycle=i({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),n.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},n.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},n.PluginTypes=i({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),n.ResourceTimingAttributes=i({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),n.RUMPerformanceTimingAttributes=i({blockTime:null}),n.AttributionTypes=i({FIRST_TOUCH:null,LAST_TOUCH:null}),n.SandboxedFunctions=i({XMLHttpRequest:null}),n.PerformanceData=i({performance_marks:null,resource_timing:null,performance_timing:null}),n.PerformanceCounters=i({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),n.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely",CONTEXTUAL_MAB:"contextual_mab",ODP_SEGMENTS:"odp_segments"},n.AllStorageKeys=Object.assign({},n.StorageKeys,n.VisitorStorageKeys),n.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"},n.VisitorIdLocatorType={COOKIE:"cookie",JS_VARIABLE:"js",LOCALSTORAGE:"localStorage",QUERY:"query"},n.AllocationPolicyEnum={CMAB:"contextual-multi-arm-bandit",MIN_REGRET:"min-regret",MIN_TIME:"min-time",MANUAL:"manual"}},5225:function(t){t.exports={OTHER:"other"}},3111:function(t,n){n.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}},1320:function(t){t.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}},6938:function(t,n,e){var i=e(3826);n.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),n.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),n.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),n.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),n.RedirectRelayMedia=i({COOKIE:null})},9249:function(t,n,e){var i=e(1691),r=n.TOTAL_POINTS=1e4;n.bucketingNumber=function(t,n,e){return i.hashToInt(t+n,e,r)},n.isHoldback=function(t,e){return n.bucketingNumber(t,e.id,i.Seed.IGNORING)<(e.holdback||0)},n.chooseWeightedCandidate=function(t,e,r){for(var o=n.bucketingNumber(t,e,i.Seed.BUCKETING),a=0;a<r.length;a++)if(r[a].endOfRange>o)return r[a].entityId;throw new Error("Unable to choose candidate")}},571:function(t,n,e){var i=e(8275).isEmpty,r=e(136),o=e(9249),a=e(5421),u=e(7353).b,c=e(409),s=e(7852),f=e(2855);n.isValidExperiment=function(t,n){var e;return s.groupCollapsed("Decision / Evaluating audiences for experiment:",n,t),e=!n.audienceIds||a.evaluate(n.audienceIds,(function(n){return t.includes(n)})),s.groupEnd(),s.debug("Decision / Experiment",n,"is valid?",e),e},n.selectVariation=function(t,n,e,i,a){if(s.debug("Decision / Selecting variation for experiment:",t.id),!t.variations||0===t.variations.length)throw new u('No variations in selected experiment "'+t.id+'"');if(!t.weightDistributions&&t.variations.length>1)throw new u('On selected experiment "'+t.id+'", weightDistributions must be defined if # variations > 1');var l;if(t.bucketingStrategy&&"impression"===t.bucketingStrategy)if(1===t.variations.length)l=t.variations[0].id;else{var d=i;l=o.chooseWeightedCandidate(e+d,t.id,t.weightDistributions)}else if(l=1===t.variations.length?t.variations[0].id:o.chooseWeightedCandidate(e,t.id,t.weightDistributions),null==t?void 0:t.deployed)s.debug("Decision / Experiment is deployed. Skipping bucketing.");else if(a&&a[t.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",t.id);var v=a[t.id];if(!t.variations.find((function(t){return t.id===v})))return c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"stoppedVariation",id:t.id}),s.debug("Decision / Preferred variation:",v,"not found on experiment:",t.id,". Visitor not bucketed."),null;v!==l&&(c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredVariation",id:t.id}),l=v)}var h=f.processCmabExperiment(t,l);h&&(l=h);var p=t.variations.find((function(t){return t.id===l}));if(p)return s.debug("Decision / Selected variation:",p),p;throw new u('Unable to find selected variation: "'+l+'".')},n.getExperimentById=function(t,n){var e=t.experiments.find((function(t){return t.id===n}));if(e)return e;throw new u("Unable to find selected experiment.")},n.hasVariationActionsOnView=function(t,n){return s.debug("Decision / Checking variation:",t,"for actions on pageId:",n),!!(t.actions||[]).find((function(t){return t.pageId===n&&!i(t.changes)}))}},7353:function(t,n){function e(t){this.message=t}e.prototype=new Error,n.b=e},1035:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.pick,a=e(136),u=e(8841),c=e(7595),s=e(9249),f=e(571),l=e(7353).b,d=e(2025),v=e(6592),h=e(409),p=e(3672),g=e(2042),m=e(7852),b=e(5010),_=e(5686),y=d.get("stores/plugins"),w=d.get("stores/global"),E=d.get("stores/layer_data");function I(t){var n=y.getPlugin(v.PluginTypes.deciders,t);if(r(n))throw new Error("No deciders found for policy: "+t);return n}n.isPageIdRelevant=function(t){if(!t)return!1;var n=I(t.policy);return"function"==typeof n.includePageIdInDecisionTicket?n.includePageIdInDecisionTicket(t):!0===n.includePageIdInDecisionTicket},n.createTicket=function(t){var n,i,r,a=o(t,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return Object.assign(a,{audienceIds:(n=t.visitorProfile,i=t.audiences,r=y.getAllPlugins(v.PluginTypes.audienceMatchers),i.reduce((function(t,e){return c.isInAudience(n,e,r)&&t.push(e.id),t}),[])),activationId:w.getActivationId()}),e(5010).timeEnd("getDecisionTicket"),a},n.decideGlobal=function(t){return{isGlobalHoldback:s.isHoldback(t.bucketingId,{id:null,holdback:t.globalHoldback})}},n.decideGroup=function(t,n){m.debug("Decision / Deciding layer for group: ",p.description(t));var e,i,r=n.preferredLayerId,o=!!r;try{(e=s.chooseWeightedCandidate(n.bucketingId,t.id,t.weightDistributions))&&"None"!==e||(i='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(t){i="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(o&&(m.debug("Decision / Using preferredLayerMap to select layer for group:",p.description(t)),r!==e&&(h.dispatch(a.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredLayer",id:t.id}),e=r)),i)return{layerId:null,reason:i};if(!t.weightDistributions.find((function(t){return t.entityId===e}))){var u="Visitor was"+(o?" sticky-":" non-sticky ")+"bucketed into a campaign ("+e+") which is not in the group";if(!o)throw new l(u);return{layerId:null,reason:u}}return{layerId:e}},n.decideLayer=function(t,n){var e,i;m.debug("Deciding: ",t,n);var o=I(t.policy);b.time("layerHoldback");var a,c,d={layerId:t.id,experimentId:null,variationId:null,isLayerHoldback:s.isHoldback(n.bucketingId,t),isLayerConcluded:!!t.concluded};if(r(t.experiments))throw new l("No experiments in layer.");try{if(o.decideLayer){m.debug("Decision / Using decider's custom decideLayer.");var v=o.decideLayer(t,n);e=v.experiment,i=v.variation}else m.debug("Decision / Using default decideLayer behavior."),e=o.selectExperiment(t,n.audienceIds,n.bucketingId),i=f.selectVariation(e,n.audienceIds,n.bucketingId,n.activationId,n.preferredVariationMap)}catch(t){a=t,(null!=(c=l)&&"undefined"!=typeof Symbol&&c[Symbol.hasInstance]?c[Symbol.hasInstance](a):a instanceof c)?d.reason=t.message:d.error=t}return d.experimentId=e?e.id:null,d.variationId=i?i.id:null,d.error&&(d.error.name="DecisionEngineError",u.emitError(d.error)),d},n.getDummyLayerDecision=function(t,n){var e,i=function(t,n){for(var e=0;e<t.experiments.length;e++)for(var i=0;i<t.experiments[e].variations.length;i++)if(n.indexOf(t.experiments[e].variations[i].id)>-1)return{experimentId:t.experiments[e].id,variationId:t.experiments[e].variations[i].id};return null}(t,n);return i?(m.log("Decision / Applying force variation:",i.variationId,"to Campaign",g.description(t)),e={layerId:t.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,isLayerConcluded:!1,reason:"force"}):(m.log("No variation matches ids:",n,"in Campaign",g.description(t)),e={layerId:t.id,variationId:null,experimentId:null,isLayerHoldback:!1,isLayerConcluded:!1,reason:"force"}),e},n.isInCohort=function(t){if(!t.experimentId||!t.variationId)return!1;var n=E.get(t.layerId);return!(_.isSingleExperimentPolicy(n.policy)&&t.isLayerHoldback)}},2025:function(t,n,e){var i=e(2328),r=e(409),o=e(3822),a=i.create(),u={action_data:e(5628),async_request:e(9021),audience_data:e(2500),change_data:e(7090),cleanup:e(2587),client_metadata:e(2814),cookie_options:e(6108),event_data:e(9034),event_emitter:e(4338),dimension_data:e(1862),directive:e(5798),global:e(2940),history:e(1459),integration_settings:e(4453),layer:e(2734),layer_data:e(9057),log:e(9809),observed_redirect:e(8338),pending_events:e(9738),performance:e(5501),plugins:e(4715),provider_status:e(8515),pending_redirect:e(6067),rum:e(4999),sandbox:e(9292),session:e(3799),tracker_optimizely:e(8950),ua_data:e(4184),view:e(90),view_data:e(749),visitor:e(2857),visitor_attribute_entity:e(6658),visitor_events:e(2725),visitor_events_manager:e(977),visitor_id:e(241),visitor_bucketing:e(7016),xdomain:e(227)};u.group_data=e(527),r.registerStores(u),Object.keys(u).forEach((function(t){a.register("stores/"+t,r.getStore(t))})),a.register("core/plugins/matchers/key_value",o),t.exports=a},4214:function(t,n,e){var i=e(136),r=e(8841),o=e(6278),a=e(8130).v,u=e(6592),c=e(409),s=e(7852),f=n.JSONParseError=a("JSONParseError"),l=e(6022),d=e(192),v=e(9454),h="optimizely_show_preview",p="optimizely_disable",g="optimizely_editor",m="optimizely_p13n",b="optimizely_x_audiences",_="optimizely_x",y="optimizely_show_preview",w="optimizely_opt_out",E="optimizely_token",I="optimizely_force_tracking",A="optimizely_embed_editor";n.populateDirectiveData=function(){var t,n,e,a,S,T,O,k,R;!function(){var t="OFF",n=l.getQueryParamValue("optimizely_log");if(n){var e=n.split(":");""!==e[0]&&(t=String(e[0]).toUpperCase()),void 0!==e[1]&&s.setLogMatch(e[1])}s.setLogLevel(t)}(),function(){var t=v.getUserAgent()||"";if("string"!=typeof t)return void s.warn("Directive / userAgent not a string");t=t.toLowerCase(),["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"].some((function(n){if(t.includes(n))return s.warn("Directive / Matches bot:",n),!0}))&&(s.log("Directive / Disabling tracking"),c.dispatch(i.LOAD_DIRECTIVE,{trackingDisabled:!0}))}(),t=window.optimizely?window.optimizely.initialized:void 0,n=Boolean("function"==typeof t?t():t),c.dispatch(i.LOAD_DIRECTIVE,{alreadyInitialized:n}),c.dispatch(i.LOAD_DIRECTIVE,{mutationObserverAPISupported:v.isMutationObserverAPISupported()}),function(){var t=o.get(u.COOKIES.OPT_OUT),n=l.getQueryParamValue(w),e="You have successfully opted out of Optimizely for this domain.",r="You are NOT opted out of Optimizely for this domain.";if("true"===n||"false"===n){var a="true"===n;c.dispatch(i.LOAD_DIRECTIVE,{shouldOptOut:a}),v.alert(a?e:r)}else t&&c.dispatch(i.LOAD_DIRECTIVE,{shouldOptOut:"true"===t})}(),function(){var t=!1,n=[h,p];n.push(g);for(var e=0;e<n.length;e++)if("true"===l.getQueryParamValue(n[e])){s.warn("Directive / Not activating because "+n[e]+" is set."),t=!0;break}c.dispatch(i.LOAD_DIRECTIVE,{disabled:t})}(),c.dispatch(i.LOAD_DIRECTIVE,{isEditor:!1}),c.dispatch(i.LOAD_DIRECTIVE,{isPreview:!1}),(e=l.getQueryParamValue(y))&&s.log("Directive / Is legacy preview mode"),c.dispatch(i.LOAD_DIRECTIVE,{isLegacyPreview:!!e}),c.dispatch(i.LOAD_DIRECTIVE,{isSlave:!1}),a=v.getGlobal("optlyDesktop"),(S=!(!a||void 0===a.p13nInner))&&s.log("Directive / Is running in desktop app editor"),c.dispatch(i.LOAD_DIRECTIVE,{isRunningInDesktopApp:S}),(T="true"===l.getQueryParamValue(m))&&s.log("Directive / Is running in editor"),c.dispatch(i.LOAD_DIRECTIVE,{isRunningInV2Editor:T}),function(){var t=!1,n=v.getGlobal("sessionStorage"),e=l.getQueryParamValue(A);t="true"===e,e&&n&&("true"===e?n.setItem(A,"true"):n.removeItem(A)),n&&"true"===n.getItem(A)&&(t=!0,s.log("Directive / Should mount embedded editor"));c.dispatch(i.LOAD_DIRECTIVE,{requestedEmbeddedEditor:t})}(),O=o.get(u.COOKIES.TOKEN)||null,k=l.getQueryParamValue(E)||O,c.dispatch(i.LOAD_DIRECTIVE,{projectToken:k}),function(){var t=o.get(u.COOKIES.PREVIEW),n=[],e=l.getQueryParamValue(b);if(e)n=o.safeDecodeURIComponent(e).split(",");else if(t)try{n=d.parse(t).forceAudienceIds}catch(n){var a=new f("Failed to parse previewCookie in registerForceAudienceIds: "+t),v={originalMessage:n.message,userError:!0};r.emitError(a,v)}n.length&&(s.log("Directive / Force Audience IDs:",n),c.dispatch(i.LOAD_DIRECTIVE,{forceAudienceIds:n}))}(),function(){var t=o.get(u.COOKIES.PREVIEW),n=[],e=l.getQueryParamValue(_);if(e)n=o.safeDecodeURIComponent(e).split(",");else if(t)try{n=d.parse(t).forceVariationIds}catch(n){var a=new f("Failed to parse previewCookie in registerForceVariationIds: "+t),v={originalMessage:n.message,userError:!0};r.emitError(a,v)}n.length&&(s.log("Directive / Force Variation IDs:",n),c.dispatch(i.LOAD_DIRECTIVE,{forceVariationIds:n}))}(),(R=l.getQueryParamValue(I))&&c.dispatch(i.LOAD_DIRECTIVE,{forceTracking:R})};n.setOptOut=function(t){t?(s.warn("Directive / Opting out"),o.set(u.COOKIES.OPT_OUT,"true",{maxAge:31536e4},!0)):o.remove(u.COOKIES.OPT_OUT),c.dispatch(i.LOAD_DIRECTIVE,{shouldOptOut:t})}},8298:function(t,n){n.now=function(){return+new Date}},7871:function(t,n){n.VERSION="0.261.0",n.NAME="js"},1019:function(t,n,e){var i=e(2025).get("stores/global");n.getDocumentElement=function(){return document.documentElement},n.getCookieString=function(){return document.cookie||""},n.setCookie=function(t){document.cookie=t},n.querySelector=function(t){return document.querySelector(t)},n.querySelectorAll=function(t){return document.querySelectorAll(t)},n.parseUri=function(t){var e=n.createElement("a");return e.href=t,e},n.childrenOf=function(t){return Array.prototype.slice.call(t.querySelectorAll("*"))},n.createElement=function(t){return document.createElement(t)},n.isReady=function(){return i.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},n.isLoaded=function(){return"complete"===document.readyState},n.addReadyHandler=function(t){return document.addEventListener("DOMContentLoaded",t),function(){n.removeReadyHandler(t)}},n.removeReadyHandler=function(t){return function(){document.removeEventListener("DOMContentLoaded",t)}},n.getReferrer=function(){return document.referrer},n.getReadyState=function(){return document.readyState},n.write=function(t){if("loading"!==n.getReadyState())throw new Error("Aborting attempt to write to already-loaded document");document.write(t)},n.appendToHead=function(t){return n.appendTo(document.head,t)},n.appendTo=function(t,n){t.appendChild(n)},n.addEventListener=function(t,n,e){return document.addEventListener(t,n,e),function(){document.removeEventListener(t,n,e)}},n.getCurrentScript=function(){if(document.currentScript)return document.currentScript},n.parentElement=function(t){for(var n=t.parentNode;n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;return n}},1353:function(t,n,e){var i,r,o="optimizely_data",a=e(8130).v,u=e(3908),c=e(9454),s=a("StorageError");try{r=c.getGlobal("localStorage")}catch(t){throw new s("Unable to read localStorage: "+t.toString())}if(!r)throw new s("localStorage is undefined");i=u.create(r,o),n.DT=i},4970:function(t,n,e){var i=e(318);n.create=function(t){return new(i.get("MutationObserver",MutationObserver))(t)},n.observe=function(t,n,e){t.observe(n,e)}},4049:function(t,n,e){var i=e(6761).Promise,r=e(9454);n.estimateStorage=function(){var t=r.getGlobal("navigator");try{return t.storage.estimate()}catch(t){return i.resolve({usage:null,quota:null})}}},5010:function(t,n,e){var i=e(136),r=e(8130).v,o=e(8298),a=e(409),u=e(9454),c=e(2025).get("stores/rum"),s="optimizely:",f=n.Error=r("PerformanceError");function l(){return u.getGlobal("performance")}n.time=function(t){if(c.getSampleRum()){var n=l();if(n&&n.mark){var e=s+t;n.clearMarks(e+"Begin"),n.mark(e+"Begin")}}},n.timeEnd=function(t){if(c.getSampleRum()){var n=l();if(n&&n.mark){var e=s+t,r=n.getEntriesByName(e+"Begin");if(0===r.length)throw new f("Called timeEnd without matching time: "+t);n.clearMarks(e+"End"),n.mark(e+"End");var o=t+"Time",u=n.getEntriesByName(e+"End")[0].startTime-r[0].startTime;a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:o,data:{startTime:Math.round(1e3*r[0].startTime)/1e3,duration:Math.round(1e3*u)/1e3}})}}},n.setMark=function(t,n,e){if(c.getSampleRum()){var r=l();if(r&&r.mark){var o=s+t;r.mark(o),a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:t,data:{startTime:Math.round(1e3*n)/1e3,duration:Math.round(1e3*e)/1e3}})}}},n.now=function(){var t=l();return t?t.now():o.now()}},318:function(t,n){n.get=function(t,n){try{var e=window.Zone;if(e&&"function"==typeof e.U){var i=window[e.U(t)];if("function"==typeof i)return i}}catch(t){}return n}},9454:function(t,n,e){var i=e(7852);n.getUserAgent=function(){return window.navigator.userAgent},n.getLocationSearch=function(){return window.location.search},n.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},n.getHref=function(){return window.location.href},n.getLocation=function(){return window.location},n.setLocation=function(t){window.location.replace(t)},n.setGlobal=function(t,n){window[t]=n},n.getGlobal=function(t){return window[t]},n.getGlobalByPath=function(t){for(var n=t.split("."),e=window;n.length;)try{e=e[n.shift()]}catch(n){throw i.error("Attempted to access nonexistent property. Path ",t),new Error("Attempted to access nonexistent property. Path "+t)}return e},n.addEventListener=function(){return window.addEventListener.apply(window,arguments)},n.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},n.isMutationObserverAPISupported=function(){return void 0!==window.MutationObserver},n.alert=function(t){alert(t)},n.setTimeout=function(t,n){return setTimeout((function(){try{t()}catch(t){i.warn("Deferred function threw error:",t)}}),n)},n.setInterval=function(t,n){return setInterval((function(){try{t()}catch(t){i.warn("Polling function threw error:",t)}}),n)}},8851:function(t,n){n.create=function(t,n,e,i){return Object.assign({category:"other"},i,{id:t,apiName:n,eventType:e})}},7566:function(t,n,e){var i=e(9899),r=e(136),o=e(8841),a=e(2025),u=e(409),c=e(7852),s=a.get("stores/event_emitter");n.on=function(t){return t.token||(t.token=i.generate()),u.dispatch(r.ADD_EMITTER_HANDLER,t),t.token},n.off=function(t){u.dispatch(r.REMOVE_EMITTER_HANDLER,{token:t})},n.emit=function(t,n,e){s.getHandlers(t,n).forEach((function(i){try{i.handler.call({$di:a},t)}catch(r){!e&&i.emitErrors?(c.error("Error in handler for event:",t,r),o.emitError(r,null,n)):c.warn("Suppressed error in handler for event:",t,r)}}))}},5547:function(t,n,e){var i=e(7566);n.on=function(t){return t.publicOnly=!0,i.on(t)},n.off=i.off,n.emit=function(t){i.emit(t)}},8484:function(__unused_webpack_module,exports,__webpack_require__){var createError=__webpack_require__(3958),di=__webpack_require__(2025),Logger=__webpack_require__(7852),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(t,n){n=(n=n||[]).concat(di.get("env/jquery"));try{return t.apply(void 0,n)}catch(e){throw Logger.warn("Error applying function",t,"with args:",n,e),new ExecError(e)}},exports.eval=function(str){try{return str="var $ = optimizely.get('jquery');"+str,eval(str)}catch(t){throw Logger.warn("Error executing JS:",str,t),new ExecError(t)}}},409:function(t,n,e){var i=e(3191);t.exports=i.create()},3672:function(t,n){n.description=function(t){var n=!!t.name?'"'+t.name+'" ':"",e=function(t){return(t.weightDistributions||[]).map((function(t){return t.entityId}))}(t).join(", ");return n+"(id "+t.id+", campaigns: "+e+")"}},2042:function(t,n,e){var i=e(8275).flattenDeep,r=e(136),o=e(8298),a=e(2025),u=e(409),c=a.get("stores/global"),s=a.get("stores/session");n.recordLayerDecision=function(t,n,e){return u.dispatch(r.RECORD_LAYER_DECISION,{layerId:t,decision:e,decisionTicket:n,sessionId:s.getSessionId(),activationId:c.getActivationId(),timestamp:o.now(),revision:c.getRevision(),namespace:c.getNamespace(),pageId:n.pageId}),e},n.relatedAudienceIds=function(t){var n={},e=["and","or","not"];return(t.experiments||[]).forEach((function(t){i(t.audienceIds).forEach((function(t){e.includes(t)||(n[t]=!0)}))})),Object.keys(n)},n.getActivationTimeout=function(t){var n=t.activation;return n&&null!==n.timeout&&void 0!==n.timeout?n.timeout:2e3},n.description=function(t){return(t.name?'"'+t.name+'" ':"")+"("+t.id+")"},n.createSingle=function(t,n,e){return{id:t,policy:"single_experiment",holdback:0,experiments:[{id:n||"",variations:[{id:e||"",actions:[]}],audienceIds:[]}],integrationStringVersion:1}},n.createLayerState=function(t,n,e,i,r){return void 0===i&&(i=!1),void 0===r&&(r=!1),{layerId:t,decision:{layerId:t,experimentId:n,variationId:e,isLayerHoldback:i||!1,isLayerConcluded:r||!1},decisionTicket:{audienceIds:[]}}},n.getIntegrationTypes=function(t){return Object.keys(Object.keys(t.integrationSettings).reduce((function(t,n){return Number.isNaN(Number(n))||(n="custom"),t[n]=1,t}),{}))}},2424:function(t,n){n.G=function(t,n){if(!n)return 0;for(var e=n.toString().split("."),i=t.toString().split("."),r=0;r<e.length;r++){if(void 0===i[r])return-1;if(isNaN(Number(i[r]))){if(i[r]!==e[r])return-1}else{if(Number(i[r])<Number(e[r]))return-1;if(Number(i[r])>Number(e[r]))return 1}}return 0}},5421:function(t,n,e){var i=e(192),r=e(7852),o="or",a="not";var u={};function c(t,n){var e;if(Array.isArray(t)){var a,c;"string"==typeof t[0]&&t[0]in u?(a=t[0],c=t.slice(1)):(a=o,c=t),r.groupCollapsed('Condition / Applying operator "'+a+'" with args',i.stringify(c));try{e=u[a](c,n),r.debug("Condition / Result:",e)}finally{r.groupEnd()}return e}return e=n(t),r.debug("Condition / Evaluated:",i.stringify(t),":",e),e}u["and"]=function(t,n){for(var e,i,r=0;r<t.length;r++){if(!1===(e=c(t[r],n)))return!1;void 0===e&&(i=!0)}if(!i)return!0},u[o]=function(t,n){for(var e,i=!1,r=0;r<t.length;r++){if(!0===(e=c(t[r],n)))return!0;void 0===e&&(i=!0)}if(!i)return!1},u[a]=function(t,n){if(1!==t.length)return!1;var e=c(t[0],n);return void 0!==e?!e:void 0},t.exports={evaluate:c}},4861:function(t,n,e){var i=e(6179);function r(t){return(t=(t||"").toLowerCase())in u?t:Object.keys(u).find((function(n){return u[n].includes(t)}))||"unknown"}function o(t,n,e){return n||("unknown"===t?"unknown":e?"mobile":"desktop_laptop")}n.parseUA=function(t){var n=new i(t),e=n.getBrowser(),u=n.getOS(),s=n.getDevice(),f=(u.name||"unknown").toLowerCase(),l=(e.name||"unknown").toLowerCase(),d=function(t){var n=/\b(iPad|iPhone)\d+,\d+/i.exec(t);return n?n[1].toLowerCase():null}(t),v="ipad"===d?"tablet":s.type,h=a(v,l,f);return{browser:{id:r(e.name),version:e.version},platform:{name:f,version:u.version},device:{model:c[s.model]||d||"unknown",type:o(l,v,h),isMobile:h}}};var a=function(t,n,e){if(["mobile","tablet"].includes(t)||["opera mini"].includes(n))return!0;return!!["android","blackberry","ios","windows phone"].includes(e)},u={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},c={iPhone:"iphone",iPad:"ipad"}},2328:function(t){function n(){this.B={}}n.prototype.register=function(t,n){if(1!==arguments.length){if(this.B[t])throw new Error("Module already registered for: "+t);this.B[t]=n}else{var e=this;Object.keys(t).forEach((function(n){var i=t[n];e.register(n,i)}))}},n.prototype.get=function(t){return this.B[t]},n.prototype.getModuleKeys=function(){var t=this.B;return Object.keys(t)},n.prototype.evaluate=function(t){var n=t.length,e=t.slice(0,n-1),i=t[n-1];if("function"!=typeof i)throw new Error("Evaluate must take a function as last element in array");var r=e.map(this.get,this);return i.apply(null,r)},n.prototype.reset=function(){this.B={}},t.exports={create:function(){return new n}}},4544:function(t,n,e){var i=e(8275).cloneDeep;function r(t,n,e){this.q=t,this.H=n,this.Y=0,this.K=!1,this.$={},Object.assign(this,e),this.W={},this.initialize&&this.initialize()}r.prototype.X=function(t,n){var e=this.$[t];e&&"function"==typeof e&&e.call(this,n,t)},r.prototype.Z=function(){return i(this.W)},r.prototype.on=function(t,n){this.$[t]=n.bind(this)},r.prototype.observe=function(t){return this.H.tt(this.q,t)},r.prototype.emitChange=function(){this.K=!0,this.Y++},r.prototype.hasChanges=function(){return this.K},r.prototype.resetChange=function(){this.K=!1},r.prototype.getStateId=function(){return this.Y},r.prototype.nt=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},t.exports=r},3191:function(t,n,e){var i=e(4544);function r(t){t=t||{},this.et={},this.it={},this.rt=0,this.ot=[],this.ut=[]}function o(t,n){return function(){var e=t.indexOf(n);-1!==e&&t.splice(e,1)}}r.prototype.registerStores=function(t){Object.keys(t).forEach((function(n){this.et[n]=new i(n,this,t[n])}),this)},r.prototype.getStore=function(t){return this.et[t]},r.prototype.dispatch=function(t,n){this.dispatchId++;var e=this;this.ot.forEach((function(i){i.call(e,t,n)}));var i=this.et;Object.keys(i).forEach((function(e){i[e].X(t,n)})),this.ut.forEach((function(i){i.call(e,t,n)})),Object.keys(i).forEach((function(t){var n=i[t];n.hasChanges()&&this.it[t]&&(n.resetChange(),this.it[t].forEach((function(t){t(n)})))}),this)},r.prototype.reset=function(){this.it={};var t=this.et;Object.keys(t).forEach((function(n){t[n].nt()}))},r.prototype.getState=function(){var t={},n=this.et;return Object.keys(n).forEach((function(e){t[e]=n[e].Z()})),t},r.prototype.onPreAction=function(t){var n=this.ot;return n.push(t),o(n,t)},r.prototype.onPostAction=function(t){var n=this.ut;return n.push(t),o(n,t)},r.prototype.tt=function(t,n){return this.it[t]||(this.it[t]=[]),this.it[t].push(n),o(this.it[t],n)},t.exports={create:function(t){return new r(t)}}},192:function(t,n){n.stringify=function(){var t=arguments;return function(t){var n,e,i=[Array.prototype],r=[];i.forEach((function(t){void 0!==t.toJSON&&(r.push(t.toJSON),delete t.toJSON)}));try{n=t()}catch(t){e=t}finally{r.forEach((function(t,n){i[n].toJSON=t}))}if(e)throw e;return n}((function(){return JSON.stringify.apply(null,t)}))},n.parse=JSON.parse},2973:function(t,n){n.hasMatch=function(t,n,e){var i=null!=e,r=null!=t;switch(n||(r?"exact":"exists")){case"exists":return i;case"exact":return i&&String(e)===t;case"substring":return i&&String(e).indexOf(t)>-1;case"regex":try{return!(!r||!i)&&new RegExp(t).test(String(e))}catch(t){}return!1;case"range":var o=t.split(":"),a=parseFloat(o[0]),u=parseFloat(o[1]),c=parseFloat(e);return c>=a&&c<=u;default:return!1}}},6761:function(t,n,e){t.exports=e(1375)},3908:function(t,n,e){var i=e(7852);function r(t,n){this.ct=t,this.st=n}r.prototype.ft=function(t){return[this.st,t].join("$$")},r.prototype.dt=function(t){return t.replace(this.st+"$$","")},r.prototype.setItem=function(t,n){e(5010).time("localstorageSetItem");try{this.ct.setItem(this.ft(t),n)}catch(n){i.warn("Failed to save",t,"to localStorage:",n)}e(5010).timeEnd("localstorageSetItem")},r.prototype.removeItem=function(t){this.ct.removeItem(this.ft(t))},r.prototype.getItem=function(t){e(5010).time("localstorageGetItem");var n=null;try{n=this.ct.getItem(this.ft(t))}catch(t){}return e(5010).timeEnd("localstorageGetItem"),n},r.prototype.keys=function(){var t=this;return Object.keys(this.ct).filter((function(n){return n.includes(t.st)})).map((function(n){return t.dt(n)}))},r.prototype.allKeys=function(){return Object.keys(this.ct)},r.prototype.allValues=function(){return Object.values(this.ct)},t.exports={create:function(t,n){return new r(t,n)},mockStorage:{keys:function(){},getItem:function(t){},removeItem:function(t){},setItem:function(t,n){}}}},3224:function(t,n,e){var i=e(8275).isEmpty,r=e(8841),o=e(6592),a=e(192),u=e(1353).DT,c=e(7852),s=e(6761),f=e(8260),l=e(2025).get("stores/pending_events"),d=o.StorageKeys.PENDING_EVENTS,v=!1;n.persistPendingEvents=function(){try{var t=l.getEventsString();u.setItem(d,t),e(5292).setItem(d,t)}catch(t){c.warn("PendingEvents / Unable to set localStorage key, error was: ",t),r.emitInternalError(t)}},n.flushPersistPendingEvents=function(){v&&(v=!1,n.persistPendingEvents())},n.schedulePersistPendingEvents=function(){v||(v=!0,s.resolve().then(n.flushPersistPendingEvents).catch((function(t){c.warn("PendingEvents / Unable to persist pending events, error was: ",t)})))},n.getPendingEvents=function(){try{return a.parse(u.getItem(d))}catch(t){return null}},n.retryPendingEvents=function(t){Object.keys(t).forEach((function(n){var e=t[n];f.retryableRequest(e.data,n,e.retryCount)})),i(t)||c.log("Retried pending events: ",t)}},9937:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(2025),a=e(6592),u=e(7566),c=e(409);n.registerApiModule=function(t,n){Array.isArray(n)&&(n=o.evaluate(n)),c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.apiModules,name:t,plugin:n})},n.registerDependency=function(t,n){o.get(t)||o.register(t,n)},n.registerVisitorProfileProvider=function(t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.visitorProfileProviders,name:t.provides,plugin:t})},n.registerViewProvider=function(t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewProviders,name:t.provides,plugin:t})},n.registerAudienceMatcher=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.audienceMatchers,name:t,plugin:n})},n.registerViewMatcher=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewMatchers,name:t,plugin:n})},n.registerAnalyticsTracker=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.analyticsTrackers,name:t,plugin:n})},n.registerViewTagLocator=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTagLocators,name:t,plugin:n})},n.registerAudiencePlugin=function(t){t.dependencies&&Object.keys(t.dependencies).forEach((function(e){var i=t.dependencies[e];n.registerDependency(e,i)}));var e,r,a="vendor."+t.vendor;e="string"==typeof t.provider?o.get(t.provider)(t.vendor):"function"==typeof t.provider?t.provider(t.vendor):i(t.provider),n.registerVisitorProfileProvider(Object.assign(e,{provides:a})),r="string"==typeof t.matcher?o.get(t.matcher):t.matcher;var u={fieldsNeeded:[a],match:function(t,n){return r(t[a],n)}};n.registerAudienceMatcher(a,u)};var s={};n.registerWidget=function(t){Array.isArray(t)&&(t=o.evaluate(t));var n=t.widgetId,e=s[n];e&&(u.off(e.showToken),u.off(e.hideToken));var i=u.on({filter:{type:"showWidget",name:n},handler:t.showFn}),r=u.on({filter:{type:"hideWidget",name:n},handler:t.hideFn});return s[n]={showToken:i,hideToken:r},s[n]},n.hasWidget=function(t){return Object.prototype.hasOwnProperty.call(s,t)},n.registerChangeApplier=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.changeAppliers,name:t,plugin:n})},n.registerDecider=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.deciders,name:t,plugin:n})},n.registerEventImplementation=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.eventImplementations,name:t,plugin:n})},n.registerViewTrigger=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTriggers,name:t,plugin:n})}},9207:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.mapValues,a=e(2025),u=":",c="holdback",s="treatment",f="",l=e(7852),d=e(5686);function v(t){return t.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}n.formatNamesAndIdsForAnalytics=function(t,n,e,i){var u={layer:t.name||f,experiment:n.name||f,variation:e.name||f};i&&(u=o(u,v));var c,s=!t.integrationStringVersion||1===t.integrationStringVersion;if(u.experiment===f&&s)if(c=n.audienceIds,r(c)||-1===["and","or","not"].indexOf(c[0])){var l=a.get("stores/audience_data");u.experiment=function(t,n){return r(n)?"everyone_else":n.reduce((function(n,e){var i=t.get(e);return i?n+v(i.name?i.name:i.id)+",":n}),"").slice(0,-1)}(l,n.audienceIds)}else u.experiment="Exp";return{names:u,idStrings:{layer:"("+v(t.id)+")",experiment:"("+v(n.id)+")",variation:"("+v(e.id)+")"}}},n.combineAndTruncateIdAndName=function(t,n,e){var i=e-n.length;if(i<0&&(l.warn("maxLength must be at least long enough to fit the entity ID, which is length"+n.length+". Defaulting to only use entity ID as name."),t=f),t===f)return n;if(t.length>i){var r=Math.min(t.length,i);return(t=t.substring(0,r))+n}return t+" "+n},n.generateAnalyticsString=function(t,e,i,r,o,a){return t.integrationStringVersion&&2===t.integrationStringVersion?function(t,e,i,r,o,a){if(d.isSingleExperimentPolicy(t.policy)&&r)return;var s=!d.isSingleExperimentPolicy(t.policy)&&r,f=n.formatNamesAndIdsForAnalytics(t,e,i,a),l=[f.names.experiment,f.names.variation],v=[f.idStrings.experiment,f.idStrings.variation];d.isSingleExperimentPolicy(t.policy)||(l.unshift(f.names.layer),v.unshift(f.idStrings.layer));var h=v.reduce((function(t,n){return t+n.length}),0),p=l.length-1+(s?1:0),g=h+1*p;if(s&&(g+=8),g>o)throw new Error("The analytics string size is too low to send the entity IDs.");for(var m=o-g,b=l.length,_=[],y=l.length-1;y>=0;y--){var w=l[y],E=Math.min(w.length,Math.floor(m/b));m-=E,b--,_.unshift(w.substring(0,E))}var I=_.map((function(t,n){return t+v[n]}));return s&&I.push(c),I.join(u)}(t,e,i,r,o,a):function(t,e,i,r,o,a){var f=r?c:s,l=3,v=n.formatNamesAndIdsForAnalytics(t,e,i,a),h=v.names,p=v.idStrings,g=Object.values(p).reduce((function(t,n){return t+n.length}),0);if(g+l+f.length>o)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var m=o-g-l-f.length,b={};b.variation=Math.min(h.variation.length,Math.floor(m/3)),m-=b.variation,b.experiment=Math.min(h.experiment.length,Math.floor(m/2)),m-=b.experiment,b.layer=m;var _={};Object.keys(h).forEach((function(t){var n=h[t];_[t]=n.substring(0,b[t])}));var y=[];return d.isSingleExperimentPolicy(t.policy)||y.push(_.layer+p.layer),(y=y.concat([_.experiment+p.experiment,_.variation+p.variation,f])).join(u)}(t,e,i,r,o,a)}},6582:function(t){t.exports=function(t,n){t=function(t){var n=t.split("?");if(n[1]){var i=n[1].split("#"),r=i[0],o=i.slice(1).join("#"),a=r.split("&"),u=[];return a.forEach((function(t){0!==t.indexOf(e)&&u.push(t)})),n[1]="",u.length>0&&(n[1]="?"+u.join("&")),o&&(n[1]+="#"+o),n.join("")}return t}(t);var i=n.value;switch(n.match){case"exact":return(t=o(t))===o(i);case"regex":try{return Boolean(t.match(i))}catch(t){}return!1;case"simple":return(t=r(t))===(i=r(i));case"substring":return t=o(t,!0),i=o(i,!0),-1!==t.indexOf(i);default:return!1}};var n=["www."],e="optimizely_",i=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"];function r(t){return o(function(t){var n=t.indexOf("?");return-1!==n&&(t=t.substring(0,n)),-1!==(n=t.indexOf("#"))&&(t=t.substring(0,n)),t}(t))}function o(t,e){t=(t=t.replace("/?","?")).toLowerCase().replace(/[/&?]+$/,"");var r=i.slice(0);e||(r=r.concat(n));for(var o=r.length,a=0;a<o;a++){var u=r[a],c=new RegExp("^"+u);t=t.replace(c,"")}return t}},3822:function(t,n,e){var i=e(8859).getFieldValue,r=e(2973);t.exports=function(t,n){var e=i(t,n.name.split("."));return Array.isArray(e)?e.some((function(t){return r.hasMatch(n.value,n.match,t)})):r.hasMatch(n.value,n.match,e)}},131:function(t,n,e){var i=e(5192),r=e(7219),o="cdn3";n.getIP=function(){return i.makeAsyncRequest(o,u).then((function(t){return t.ip}))},n.getIPDerivedGeolocation=function(){return i.makeAsyncRequest(o,u).then((function(t){return t.location}))};var a="//cdn3.optimizely.com/js/geo4.js";function u(){r.addScriptAsync(a,void 0,"script")}},5628:function(t,n,e){var i=e(136),r=e(3019),o=e(7852),a=e(8275).isEmpty;t.exports={initialize:function(){this.W={actions:{},actionState:{}},this.on(i.DATA_LOADED,this.vt),this.on(i.ACTION_EXECUTED,this.ht),this.on(i.SET_CHANGE_APPLIER,this.bt),this.on(i.REMOVE_ACTION_STATE,this._t)},vt:function(t){var n=this;a(t.data.layers)||(t.data.layers.forEach((function(t){var e;if(t.changes){var i="layerId:"+t.id;e={id:i,layerId:t.id,changeSet:t.changes,type:"layer"},r.deepFreeze(e),n.W.actions[i]=e}(t.experiments||[]).forEach((function(i){if(i.changes){var o="experimentId:"+i.id;e={id:o,layerId:t.id,experimentId:i.id,changeSet:i.changes,type:"experiment"},r.deepFreeze(e),n.W.actions[o]=e}(i.variations||[]).forEach((function(o){(o.actions||[]).forEach((function(a){var u=a.pageId||a.viewId,c=i.id+":"+o.id+":"+u;e={id:c,layerId:t.id,experimentId:i.id,variationId:o.id,pageId:u,changeSet:a.changes,type:"variation"},r.deepFreeze(e),n.W.actions[c]=e}))}))}))})),this.emitChange())},ht:function(t){var n=t.actionId;void 0===n||this.W.actionState[n]||(this.W.actionState[n]={})},bt:function(t){var n=t.actionId,e=t.changeId;this.W.actionState[n]?this.W.actionState[n][e]=t.changeApplier:o.warn("Action Data / Attempted to set changeApplier for inactive action: ",n)},_t:function(t){delete this.W.actionState[t.actionId]},get:function(t){return r.safeReference(this.W.actions[t])},getActionState:function(t){return r.safeReference(this.W.actionState[t])},getByChangeId:function(t){return Object.values(this.W.actions).find((function(n){return n.changeSet&&n.changeSet.some((function(n){return n.id===t}))}))},getAllActionIdsByPageId:function(t){return Object.values(this.W.actions).filter((function(n){return n.pageId===t})).map((function(t){return t.id}))},getChangeApplier:function(t,n){var e=this.W.actionState[n];if(e)return e[t]},getExperimentVariationActions:function(t,n){return r.safeReference(Object.values(this.W.actions).filter((function(e){return e.experimentId===t&&e.variationId===n})))},getLayerActions:function(t){return r.safeReference(Object.values(this.W.actions).filter((function(n){return n.id==="layerId:"+t})))},getExperimentActions:function(t){return r.safeReference(Object.values(this.W.actions).filter((function(n){return n.id==="experimentId:"+t})))},getAll:function(){return r.safeReference(Object.values(this.W.actions))}}},9021:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={},this.on(i.REGISTER_ASYNC_DEFERRED,this.yt),this.on(i.RESOLVE_DEFERRED,this.wt),this.on(i.REJECT_DEFERRED,this.Et)},getRequest:function(t){return this.W[t]},getPromise:function(t){var n=this.getRequest(t);if(n)return n.promise},yt:function(t){this.W[t.source]={promise:t.promise,resolver:t.resolver,rejecter:t.rejecter}},wt:function(t){var n=this.getRequest(t.source);if(!n)throw new Error("No request registered for source: "+t.source);n.resolver(t.resolveWith)},Et:function(t){var n=this.getRequest(t.source);if(!n)throw new Error("No request registered for source: "+t.source);if(!n.rejecter)throw new Error("No rejecter registered for source: "+t.source);n.rejecter(t.rejectWith)}}},2500:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.merge,a=e(136),u=e(3019);function c(t,n){return n||(n={}),t?(t.forEach((function(t){if("string"!=typeof t){if("object"==typeof t&&null!==t&&!Array.isArray(t)){var e=t.type,i=t.name||"_";n[e]||(n[e]={}),n[e][i]=!0}Array.isArray(t)&&c(t,n)}})),n):n}t.exports={initialize:function(){this.W={audiences:{},featuresNeeded:{}},this.on(a.DATA_LOADED,this.vt)},vt:function(t){if(!r(t.data.audiences)){var n=this;t.data.audiences.forEach((function(t){u.deepFreeze(t),o(n.W.featuresNeeded,c(t.conditions)),n.W.audiences[t.id]=t})),this.emitChange()}},getAll:function(){return u.safeReference(Object.values(this.W.audiences))},getFeaturesNeeded:function(t){return u.safeReference(this.W.featuresNeeded[t]||{})},getAudiencesMap:function(){return u.safeReference(this.W.audiences)},get:function(t){return u.safeReference(this.W.audiences[t])},getAudienceName:function(t){return Object.values(this.W.audiences).find((function(n){return n.id===t})).name||"Aud "+t}}},7090:function(t,n,e){var i=e(8275).isEmpty,r=e(136),o=e(3019);t.exports={initialize:function(){this.W={},this.on(r.ADD_CHANGE,this.It),this.on(r.DATA_LOADED,this.vt)},getChange:function(t){return this.W[t]},vt:function(t){if(!i(t.data.changes)){var n=this;t.data.changes.forEach((function(t){n.It(t)}))}},It:function(t){o.deepFreeze(t),this.W[t.id]=t,this.emitChange()}}},2587:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(6592);t.exports={initialize:function(){this.W={};var t=this;Object.keys(o.Lifecycle).forEach((function(n){var e=o.Lifecycle[n];t.W[e]=[]})),this.on(r.ADD_CLEANUP_FN,this.At),this.on(r.CLEAR_CLEANUP_FN,this.St)},getCleanupFns:function(t){return i(this.W[t])},At:function(t){this.W[t.lifecycle].push(t.cleanupFn),this.emitChange()},St:function(t){var n=this.W[t.lifecycle];if(t.cleanupFn){var e=n.indexOf(t.cleanupFn);e>-1&&(n.splice(e,1),this.emitChange())}else this.W[t.lifecycle]=[],this.emitChange()}}},2814:function(t,n,e){var i=e(136),r=e(7871);t.exports={initialize:function(){this.W={name:r.NAME,version:r.VERSION},this.on(i.SET_CLIENT_NAME,this.Tt),this.on(i.SET_CLIENT_VERSION,this.Ot)},getClientName:function(){return this.W.name},getClientVersion:function(){return this.W.version},Tt:function(t){t&&(this.W.name=t),this.emitChange()},Ot:function(t){t&&(this.W.version=t),this.emitChange()}}},6108:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={currentDomain:null,defaultAgeSeconds:15552e3,autoRefresh:true},this.on(i.SET_COOKIE_DOMAIN,this.kt),this.on(i.SET_COOKIE_AGE,this.Rt),this.on(i.SET_COOKIE_AUTO_REFRESH,this.Ct)},getCurrentDomain:function(){return this.W.currentDomain},getDefaultAgeInSeconds:function(){return this.W.defaultAgeSeconds},getAutoRefresh:function(){return this.W.autoRefresh},kt:function(t){this.W.currentDomain=t,this.emitChange()},Rt:function(t){this.W.defaultAgeSeconds=t,this.emitChange()},Ct:function(t){this.W.autoRefresh=t,this.emitChange()}}},1862:function(t,n,e){var i=e(136),r=e(3019),o=e(8275).isEmpty;t.exports={initialize:function(){this.W={},this.on(i.DATA_LOADED,this.vt)},vt:function(t){if(!o(t.data.dimensions)){var n=this;t.data.dimensions.forEach((function(t){r.deepFreeze(t),n.W[t.id]=t})),this.emitChange()}},getAll:function(){return r.safeReference(Object.values(this.W))},getById:function(t){return r.safeReference(this.W[t])},getByApiName:function(t){var n=Object.values(this.W);return r.safeReference(n.find((function(n){return n.apiName===t})))}}},5798:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(136);t.exports={initialize:function(){this.W={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1,requestedEmbeddedEditor:!1},this.on(a.LOAD_DIRECTIVE,this.Nt)},getAll:function(){return r(this.W)},conflictInObservingChanges:function(){return!this.W.mutationObserverAPISupported},isDisabled:function(){return this.W.disabled},isEditor:function(){return this.W.isEditor},clientHasAlreadyInitialized:function(){return this.W.alreadyInitialized},getForceAudienceIds:function(){return this.W.forceAudienceIds},getForceVariationIds:function(){return this.W.forceVariationIds},getPreviewLayerIds:function(){return this.W.previewLayerIds},getProjectToken:function(){return this.W.projectToken},getForceTracking:function(){return this.W.forceTracking},shouldActivate:function(){return!this.W.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.W.isPreview},shouldBootstrapDataForEditor:function(){return this.W.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.W.isPreview||this.W.isLegacyPreview||!this.getProjectToken()||this.W.isEditor)},shouldLoadEmbeddedEditor:function(){return this.W.requestedEmbeddedEditor&&!this.W.isEditor},shouldBailForDesktopApp:function(){return!this.W.isEditor&&this.W.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.W.isSlave&&!this.W.isEditor&&this.W.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return this.W.mutationObserverAPISupported},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.W.shouldOptOut},shouldSendTrackingData:function(){return!this.W.trackingDisabled&&(!!this.W.forceTracking||!this.W.isPreview&&o(this.getForceVariationIds())&&o(this.getForceAudienceIds()))},isSlave:function(){return this.W.isSlave},isRunningInDesktopApp:function(){return this.W.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.W.isRunningInV2Editor},Nt:function(t){Object.assign(this.W,t),this.emitChange()}}},9034:function(t,n,e){var i=e(136),r=e(3019),o=e(8275).isEmpty;t.exports={initialize:function(){this.W={},this.on(i.DATA_LOADED,this.vt)},getAll:function(){return r.safeReference(Object.values(this.W))},getEventsMap:function(){return r.safeReference(this.W)},get:function(t){return r.safeReference(this.W[t])},getByApiName:function(t){var n=Object.values(this.W);return r.safeReference(n.find((function(n){return n.apiName===t})))},getByPageId:function(t){var n=Object.values(this.W);return r.safeReference(n.filter((function(n){return n.pageId===t})))},vt:function(t){if(!o(t.data.events)){var n=this;t.data.events.forEach((function(t){t.pageId||(t.pageId=t.viewId),r.deepFreeze(t),n.W[t.id]=t})),this.emitChange()}}}},4338:function(t,n,e){var i=e(136);function r(t){var n=[];return t&&"object"==typeof t&&null!==t?(t.type&&n.push(t.type),n.push("|"),t.type&&t.name&&n.push(t.name),n.join("")):"|"}t.exports={initialize:function(){this.W={handlers:{}},this.on(i.ADD_EMITTER_HANDLER,this.Dt),this.on(i.REMOVE_EMITTER_HANDLER,this.xt)},getHandlers:function(t,n){var e=[null,{type:t.type},{type:t.type,name:t.name}],i=[],o=this;return e.forEach((function(t){var n=r(t),e=o.W.handlers[n];e&&(i=i.concat(e))})),n&&(i=i.filter((function(t){return!t.publicOnly}))),i},Dt:function(t){var n=r(t.filter);this.W.handlers[n]||(this.W.handlers[n]=[]),this.W.handlers[n].push({handler:t.handler,token:t.token,publicOnly:!!t.publicOnly,emitErrors:!!t.emitErrors}),this.emitChange()},xt:function(t){var n=!1,e=t.token;Object.keys(this.W.handlers).forEach(function(t){var i=this.W.handlers[t],r=i.filter((function(t){return t.token!==e}));r.length!==i.length&&(n=!0,this.W.handlers[t]=r)}.bind(this)),n&&this.emitChange()}}},2940:function(t,n,e){var i=e(136),r=e(3019);t.exports={initialize:function(){this.W={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{},ga4UserId:null,trafficExclusion:null},this.on(i.DATA_LOADED,this.jt),this.on(i.ACTIVATE,this.Mt),this.on(i.RECORD_GLOBAL_DECISION,this.Pt),this.on(i.SET_DOMCONTENTLOADED,this.Lt),this.on(i.SET_GA4_USER_ID,this.Vt)},getRevision:function(){return this.W.revision},getGlobalHoldbackThreshold:function(){return this.W.holdback},getProjectId:function(){return this.W.projectId},getSnippetId:function(){return this.W.snippetId},getAccountId:function(){return this.W.accountId},getNamespace:function(){return this.W.namespace},getActivationId:function(){return this.W.activationId},getActivationTimestamp:function(){return this.W.activationTimestamp},getAnonymizeIP:function(){return this.W.anonymizeIP},getTrafficExclusion:function(){return this.W.trafficExclusion},isGlobalHoldback:function(){return!!this.W.isGlobalHoldback},getListTargetingKeys:function(){return this.W.listTargetingKeys.slice()},getDCPServiceId:function(){return this.W.dcpServiceId},getDCPKeyfieldLocators:function(){return this.W.dcpKeyfieldLocators},getRecommenderServices:function(){return this.W.recommenderServices},getProjectJS:function(){return this.W.projectJS},getPlugins:function(){return this.W.plugins},getExperimental:function(){return r.safeReference(this.W.experimental)},getGA4UserId:function(){return this.W.ga4UserId},domContentLoadedHasFired:function(){return this.W.domContentLoaded},Mt:function(t){this.W.activationId=t.activationId,this.W.activationTimestamp=t.activationTimestamp,this.W.isGlobalHoldback=null},Pt:function(t){var n=t.isGlobalHoldback;if(null!==this.W.isGlobalHoldback&&this.W.isGlobalHoldback!==n)throw new Error("Attempted to change already set global holdback!");this.W.isGlobalHoldback=n,this.emitChange()},Vt:function(t){var n=t.ga4UserId;if(!n)throw new Error('Argument "payload.ga4UserId" is missing');this.W.ga4UserId=n,this.emitChange()},jt:function(t){var n=t.data,e={};if(["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental","ga4UserId","trafficExclusion"].forEach((function(t){t in n&&(e[t]=n[t])})),0!==Object.keys(e).length){Object.assign(this.W,{listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]},e),this.emitChange()}},Lt:function(){this.W.domContentLoaded=!0,this.emitChange()}}},527:function(t,n,e){var i=e(136),r=e(3019),o=e(8275).isEmpty;t.exports={initialize:function(){this.W={},this.on(i.DATA_LOADED,this.vt)},vt:function(t){if(!o(t.data.groups)){var n=this;t.data.groups.forEach((function(t){r.deepFreeze(t),n.W[t.id]=t})),this.emitChange()}},getAll:function(){return r.safeReference(Object.values(this.W))},getGroupsMap:function(){return r.safeReference(this.W)},get:function(t){return r.safeReference(this.W[t])}}},1459:function(t,n,e){var i=e(136),r=e(9454);t.exports={initialize:function(){this.W={originalPushState:null,originalReplaceState:null},this.on(i.ENSURE_ORIGINAL_PUSHSTATE,this.Ut),this.on(i.ENSURE_ORIGINAL_REPLACESTATE,this.Bt)},getOriginalPushState:function(){return this.W.originalPushState},getOriginalReplaceState:function(){return this.W.originalReplaceState},Ut:function(){this.W.originalPushState||(this.W.originalPushState=r.getGlobal("history").pushState.bind(r.getGlobal("history")))},Bt:function(){this.W.originalReplaceState||(this.W.originalReplaceState=r.getGlobal("history").replaceState.bind(r.getGlobal("history")))}}},4453:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(136);t.exports={initialize:function(){this.W={},this.on(a.DATA_LOADED,this.vt),this.on(a.SET_INTEGRATION_SETTINGS,this.Ft)},vt:function(t){if(!o(t.data.integrationSettings)){var n=this;t.data.integrationSettings.forEach((function(t){n.W[t.id]=t})),this.emitChange()}},Ft:function(t){var n=this.W[t.id];n?Object.assign(n,t):this.W[t.id]=t},getAll:function(){return r(Object.values(this.W))},get:function(t){return r(this.W[t])},getReference:function(t){return this.W[t]}}},2734:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(7852),a="*";t.exports={initialize:function(){this.W={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.zt),this.on(r.RECORD_LAYER_DECISION,this.Gt),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.qt)},getLayerState:function(t,n){if(this.W[t]){var e=this.W[t];if(Object.keys(e).length>1&&!n)throw new Error("View Id must be specified when more than one layerState for layer.");return i(n?e[n]:e[a])}},getLayerStates:function(t){var n=this,e=function(e){var o=n.W[e];Object.keys(o).forEach((function(n){var e=o[n];(void 0===t||e.namespace===t)&&r.push(i(e))}))},r=[];for(var o in this.W)e(o);return r},getLayerStatesForAnalytics:function(){var t=this,n=function(n){var i=t.W[n];Object.keys(i).forEach((function(t){var n=i[t];e.push({layerId:n.layerId,decision:n.decision,decisionEventId:n.decisionEventId})}))},e=[];for(var i in this.W)n(i);return e},zt:function(t){t.merge||(this.W={});var n=this;t.layerStates.forEach((function(t){var e=t.layerId;t.pageId||(t.pageId=t.viewId);var i=t.pageId||a,r=n.W[e];if(void 0===r)n.W[e]={},n.W[e][i]=t;else{var o=r[i];(!o||t.decisionTimestamp>(o.decisionTimestamp||0))&&(n.W[e][i]=t)}})),this.emitChange()},Gt:function(t){var n={layerId:t.layerId,revision:t.revision,namespace:t.namespace,pageId:t.pageId,decisionTicket:t.decisionTicket,decision:t.decision,decisionActivationId:t.activationId,decisionTimestamp:t.timestamp,decisionEventId:null},e=this.W[t.layerId]||{};t.pageId?(delete e[a],e[t.pageId]=n):(e={})[a]=n,this.W[t.layerId]=e,this.emitChange()},qt:function(t){var n=t.layerId,e=t.pageId||a;this.W[n]?this.W[n][e]?(this.W[n][e].decisionEventId=t.decisionId,this.emitChange()):o.warn("Not recording decision event: Layer state not found for view",e):o.warn("Not recording decision event: Campaign not registered",n)}}},9057:function(t,n,e){var i=e(136),r=e(3019),o=e(5686),a=e(8275).isEmpty;t.exports={initialize:function(){this.W={layers:{},experiments:{},variations:{}},this.on(i.DATA_LOADED,this.vt)},vt:function(t){if(!a(t.data.layers)){var n=this;(t.data.layers||[]).forEach((function(t){(t.experiments||[]).forEach((function(e){t.pageIds||(t.pageIds=t.viewIds),e.campaignName||o.isSingleExperimentPolicy(t.policy)?o.isSingleExperimentPolicy(t.policy)&&t.groupId&&(e.groupId=t.groupId):e.campaignName=t.name,(e.variations||[]).forEach((function(t){(t.actions||[]).forEach((function(t){t.pageId||(t.pageId=t.viewId)})),n.W.variations[t.id]=t})),n.W.experiments[e.id]=e})),r.deepFreeze(t),n.W.layers[t.id]=t})),this.emitChange()}},getAll:function(){return r.safeReference(Object.values(this.W.layers))},getCampaignsMap:function(){return r.safeReference(this.W.layers)},getExperimentsMap:function(){return r.safeReference(this.W.experiments)},getVariationsMap:function(){return r.safeReference(this.W.variations)},getCount:function(){return Object.keys(this.W.layers).length},getAllByPageIds:function(t){var n=this.W.layers;return r.safeReference(Object.keys(n).reduce((function(e,i){var r=n[i];return t.some((function(t){return(r.pageIds||[]).includes(t)}))&&e.push(r),e}),[]))},get:function(t){return r.safeReference(this.W.layers[t])},getLayerByExperimentId:function(t){var n,e=this.W.layers;return Object.keys(e).some((function(i){var r=e[i];return!!(r.experiments||[]).find((function(n){return n.id===t}))&&(n=r,!0)})),r.safeReference(n)},getExperimentByVariationId:function(t){var n,e=this.W.layers;return Object.keys(e).some((function(i){return(e[i].experiments||[]).some((function(e){return(e.variations||[]).find((function(n){return n.id===t}))&&(n=e),!!n}))})),r.safeReference(n)}}},9809:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={logs:[]},this.on(i.LOG,this.Ht)},getLogs:function(){return this.W.logs},Ht:function(t){this.W.logs.push(t),this.emitChange()},Z:function(){return this.W.logs.slice()}}},8338:function(t,n,e){var i=e(136),r=e(3019);t.exports={initialize:function(){this.W={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.Yt),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.Kt)},get:function(){return r.safeReference(this.W.data)},hasTracked:function(){return this.W.hasTracked},Yt:function(t){r.deepFreeze(t),this.W.data=t,this.W.hasTracked=!1,this.emitChange()},Kt:function(){this.W.hasTracked=!0}}},9738:function(t,n,e){var i=e(136),r=e(192);t.exports={initialize:function(){this.W={},this.on(i.SET_PENDING_EVENT,this.$t),this.on(i.REMOVE_PENDING_EVENT,this.Wt),this.on(i.LOAD_PENDING_EVENTS,this.Xt)},getEvents:function(){return this.W},getEventsString:function(){return r.stringify(this.W)},$t:function(t){Object.keys(this.W).length>=1e3&&this.Jt();var n=t.id,e=t.retryCount;this.W[n]&&this.W[n].retryCount===e||(this.W[n]={id:n,timeStamp:t.timeStamp,data:t.data,retryCount:e},this.emitChange())},Wt:function(t){delete this.W[t.id],this.emitChange()},Xt:function(t){this.W=t.events,this.Jt(),this.emitChange()},Jt:function(){for(var t=Object.values(this.W).sort((function(t,n){return t.timeStamp-n.timeStamp})),n=0;n<=t.length-1e3;n++)delete this.W[t[n].id];this.emitChange()}}},6067:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={layerId:null},this.on(i.ANNOUNCE_PENDING_REDIRECT,this.Yt)},isExpectingRedirect:function(){return"string"==typeof this.W.layerId},getLayerId:function(){return this.W.layerId},Yt:function(t){this.isExpectingRedirect()||(this.W.layerId=t.layerId,this.emitChange())}}},5501:function(t,n,e){var i=e(8275).mapValues,r=e(136),o=e(6592);t.exports={initialize:function(){this.W={},this.W[o.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Qt)},Qt:function(t){void 0===this.W[o.PerformanceData.performance_marks][t.name]&&(this.W[o.PerformanceData.performance_marks][t.name]=[]),this.W[o.PerformanceData.performance_marks][t.name].push(t.data),this.emitChange()},getMarks:function(){return i(this.W[o.PerformanceData.performance_marks],(function(t){return t.map((function(t){return[t.startTime,t.duration]}))}))},getDurationsFor:function(t){var n=this;return t.reduce((function(t,e){var i=n.W[o.PerformanceData.performance_marks][e];return i&&(t[e]=Math.round(i.reduce((function(t,n){return t+n.duration}),0))),t}),{})}}},4715:function(t,n,e){var i=e(8275).mapValues,r=e(136),o=e(6592),a=e(7852);t.exports={initialize:function(){this.W=i(o.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Zt)},Zt:function(t){var n=t.type,e=t.name,i=t.plugin;if(!n||!e)throw new Error("Missing information needed to register plugins: "+n+":"+e);if(!this.W[n])throw new Error("Invalid plugin type specified: "+n);this.W[n][e]=i,a.debug("Plugin Store: Registering Plugin :",t)},getAllPlugins:function(t){if(!t)return this.W;if(this.W[t])return this.W[t];throw new Error("Invalid plugin type: "+t)},getPlugin:function(t,n){if(!n||!t)throw new Error("Missing plugin parameters");return this.getAllPlugins(t)[n]||null}}},8515:function(t,n,e){var i=e(136),r=e(8859);t.exports={initialize:function(){this.W={},this.on(i.SET_VISITOR_ATTRIBUTE_PENDING,this.tn)},getPendingAttributeValue:function(t){return t=Array.isArray(t)?t.concat("pending"):[t,"pending"],r.getFieldValue(this.W,t)},tn:function(t){r.setFieldValue(this.W,t.key,{pending:t.pending}),this.emitChange()}}},4999:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=i.merge,u=e(136);t.exports={initialize:function(){this.W={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(u.SET_RUM_DATA,this.nn),this.on(u.RECORD_API_USAGE,this.en),this.on(u.INITIALIZE_CHANGE_METRICS,this.rn),this.on(u.RECORD_ACTIVATION_TYPE_USAGE,this.an),this.on(u.RECORD_AUDIENCE_USAGE,this.un),this.on(u.RECORD_CHANGE_MACROTASK_RATE,this.cn),this.on(u.RECORD_CHANGE_OVERHEATED,this.sn),this.on(u.RECORD_CHANGE_TYPE_USAGE,this.fn),this.on(u.RECORD_DOM_OBSERVATION_OCCURENCE,this.ln),this.on(u.RECORD_INTEGRATION_USAGE,this.dn),this.on(u.RECORD_LAYER_FEATURE_USAGE,this.vn),this.on(u.RECORD_LAYER_POLICY_USAGE,this.hn),this.on(u.RECORD_VIEW_FEATURE_USAGE,this.pn),this.on(u.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,this.gn),this.on(u.RECORD_VISITOR_ID_LOCATOR_USAGE,this.mn),this.on(u.RECORD_VISITOR_ID_ERROR,this.bn),this.on(u.RECORD_STICKY_BUCKETING_FEATURE,this._n)},nn:function(t){a(this.W,t),this.emitChange()},en:function(t){this.W.apis[t.methodName]||(this.W.apis[t.methodName]=0),this.W.apis[t.methodName]++,this.emitChange()},rn:function(){void 0===this.W.data.extras.changeMacrotaskRate&&(this.W.data.extras.changeMacrotaskRate=0),void 0===this.W.data.extras.numOverheatedChanges&&(this.W.data.extras.numOverheatedChanges=0)},cn:function(t){void 0===this.W.data.extras.changeMacrotaskRate&&(this.W.data.extras.changeMacrotaskRate=0),t.changeMacrotaskRate>this.W.data.extras.changeMacrotaskRate&&(this.W.data.extras.changeMacrotaskRate=t.changeMacrotaskRate),this.emitChange()},sn:function(){void 0===this.W.data.extras.numOverheatedChanges&&(this.W.data.extras.numOverheatedChanges=0),this.W.data.extras.numOverheatedChanges++,this.emitChange()},ln:function(t){this.W.DOMObservation[t.counterName]||(this.W.DOMObservation[t.counterName]=0),this.W.DOMObservation[t.counterName]++,this.emitChange()},yn:function(t,n,e){void 0===this.W.featuresNeeded[t]&&(this.W.featuresNeeded[t]={});var i=this.W.featuresNeeded[t];n.forEach((function(t){i[t]||(i[t]={}),i[t][e]||(i[t][e]=!0)}))},dn:function(t){this.yn("integrations",t.integrations,t.layerId)},fn:function(t){this.yn("changeTypes",t.changeTypes,t.layerId)},an:function(t){this.yn("activationTypes",[t.activationType],t.entityId),this.emitChange()},pn:function(t){this.yn("viewFeatures",t.featuresUsed,t.entityId),this.emitChange()},vn:function(t){this.yn("layerFeatures",[t.feature],t.entityId),this.emitChange()},hn:function(t){this.yn("policy",[t.policy],t.layerId),this.emitChange()},un:function(t){this.yn("audiences",t.audienceTypes,t.layerId),this.emitChange()},gn:function(t){this.W.data.extras.viewsInitiallyActivatedCount=t.viewsInitiallyActivatedCount,this.emitChange()},mn:function(t){this.yn("visitorIdLocatorType",[t.visitorIdLocatorType],t.entityId),this.emitChange()},bn:function(t){this.W.data.extras.errorCustomVisitorId=t.isError,this.emitChange()},_n:function(t){this.yn("stickyBucketing",[t.feature],t.id)},getSampleRum:function(){return this.W.inRumSample},getRumId:function(){return this.W.id},getRumHost:function(){return this.W.RumHost},getApiData:function(){return this.W.apis},getDOMObservationData:function(){return this.W.DOMObservation},getRumData:function(){return r(this.W.data)},getScriptSrc:function(){return this.W.src},getFeaturesNeededData:function(){var t=this.W.featuresNeeded,n={};return Object.keys(t).forEach((function(e){var i=t[e],r=Object.keys(i);o(r)||(n[e]={}),r.forEach((function(t){n[e][t]=Object.keys(i[t]).length}))})),n}}},9292:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.wn)},wn:function(t){if(!t.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.W.natives=t.sandboxedFunctions,this.W.initialized=!0,this.emitChange()},getAll:function(){return this.W.natives},get:function(t){if(!t)throw new Error("Missing name parameter");return this.W.natives[t]||null},isInitialized:function(){return this.W.initialized}}},3799:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(8298),a=e(9899);t.exports={initialize:function(){this.W={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.En),this.on(r.LOAD_SESSION_STATE,this.In)},getState:function(){return i(this.W)},getSessionId:function(){return this.W.sessionId},In:function(t){this.W.sessionId=t.sessionId,this.W.lastSessionTimestamp=t.lastSessionTimestamp,this.emitChange()},En:function(){var t=o.now(),n=this.W.lastSessionTimestamp;(!this.W.sessionId||t-n>18e5)&&(this.W.sessionId=a.generate()),this.W.lastSessionTimestamp=t,this.emitChange()}}},8950:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(136);t.exports={initialize:function(){this.An(),this.on(a.FINALIZE_BATCH_SNAPSHOT,this.Sn),this.on(a.REGISTER_PREVIOUS_BATCH,this.Tn),this.on(a.REGISTER_TRACKER_VISITOR,this.On),this.on(a.REGISTER_TRACKER_EVENT,this.kn),this.on(a.REGISTER_TRACKER_DECISION,this.Rn),this.on(a.RESET_TRACKER_EVENTS,this.Cn),this.on(a.RESET_TRACKER_STORE,this.An),this.on(a.RESET_TRACKER_PREVIOUS_BATCHES,this.Nn),this.on(a.SET_TRACKER_POLLING,this.Dn),this.on(a.SET_TRACKER_BATCHING,this.xn),this.on(a.SET_TRACKER_USE_BEACON,this.jn),this.on(a.SET_TRACKER_SEND_EVENTS,this.Mn),this.on(a.SET_TRACKER_PERSISTABLE_STATE,this.Pn),this.on(a.SET_TRACKER_DIRTY,this.Ln),this.on(a.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.Vn)},getPersistableState:function(){return this.W.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.W.data,decisions:this.W.decisions,decisionEvents:this.W.decisionEvents,previousBatches:this.W.previousBatches}:{}:null},Pn:function(t){o(this.W.data)||o(t.data)||(this.Sn(),this.W.previousBatches.push(this.getEventBatch())),this.W.data=t.data||{},this.W.decisions=t.decisions||[],this.W.decisionEvents=t.decisionEvents||[],o(this.W.previousBatches)||o(t.previousBatches)?this.W.previousBatches=t.previousBatches||[]:this.W.previousBatches=this.W.previousBatches.concat(t.previousBatches),this.emitChange()},Ln:function(t){this.W.isDirty=t,this.emitChange()},kn:function(t){var n=this.Un();(o(n.snapshots)||!o(this.W.decisionEvents))&&this.Bn(),this.Fn().events.push(t.event),this.W.decisions=t.decisions,this.Ln(!0)},Rn:function(t){this.W.decisionEvents.push(t.decisionEvent),this.W.decisions=t.decisions,this.Ln(!0)},On:function(t){o(this.W.data)?this.W.data=t.data:this.Sn(),this.W.data.visitors.push(t.visitor),this.W.decisions=t.decisions,this.W.decisionEvents=[],this.Ln(!0)},Tn:function(t){this.W.previousBatches.push(t),this.Ln(!0)},An:function(){this.W={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Cn:function(){var t=this.Un();this.W.data.visitors=[t],t.snapshots=[],this.Ln(!0)},Nn:function(){this.W.previousBatches=[],this.Ln(!0)},Dn:function(t){this.W.polling=t,this.emitChange()},xn:function(t){this.W.shouldBatch=t,this.emitChange()},jn:function(t){this.W.shouldUseBeacon=t,this.emitChange()},Mn:function(t){this.W.canSend=t,this.emitChange()},getEventBatch:function(){return r(this.W.data)},getPreviousBatches:function(){return r(this.W.previousBatches)},zn:function(){return this.W.decisionEvents.slice()},Gn:function(){this.W.decisionEvents=[]},qn:function(){return this.W.decisions.slice()},isPolling:function(){return this.W.polling},shouldBatch:function(){return this.W.shouldBatch},shouldUseBeacon:function(){return this.W.shouldUseBeacon},Fn:function(){var t=this.Un(),n=t&&t.snapshots;return n&&n[n.length-1]},Un:function(){var t=this.W.data.visitors;return t&&t[t.length-1]},Bn:function(){var t=this.zn();this.Un().snapshots.push({decisions:this.qn(),events:t}),this.Gn(),this.Ln(!0)},Sn:function(){this.W.decisionEvents.length>0&&this.Bn()},hasEventsToSend:function(){if(!o(this.W.decisionEvents))return!0;if(!o(this.W.data)&&(this.W.data.visitors||[]).some((function(t){return t.snapshots.length>0})))return!0;return!1},hasPreviousBatchesToSend:function(){return!o(this.W.previousBatches)},canSend:function(){return this.W.canSend},Vn:function(t){var n=this.Un();n&&(n.attributes=t.attributes)}}},4184:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(136);t.exports={initialize:function(){this.W={},this.on(a.SET_UA_DATA,this.vt)},vt:function(t){o(this.W)&&(this.W=t.data)},get:function(){return r(this.W)}}},90:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(7852),a={globalTags:{},viewStates:{},shouldBatch:!1};t.exports={initialize:function(){this.W=i(a),this.on(r.REGISTER_VIEWS,this.Hn),this.on(r.SET_VIEW_ACTIVE_STATE,this.Yn),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.Kn),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.$n),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.Wn),this.on(r.SET_GLOBAL_TAGS,this.Xn),this.on(r.RESET_VIEW_STATES,this.Jn),this.on(r.SET_VIEW_BATCHING,this.xn)},getAll:function(){var t={};for(var n in this.W.viewStates)t[n]=this.getViewState(n);return t},getActiveViewIds:function(){var t=this,n=this.W.viewStates;return Object.keys(n).reduce((function(n,e){return t.isViewActive(e)&&n.push(e),n}),[])},shouldBatch:function(){return this.W.shouldBatch},getViewState:function(t){var n=i(this.W.viewStates[t]),e=this.W.globalTags;return n.metadata=Object.assign({},n.parsedMetadata,e,n.userSuppliedMetadata),n},getActiveViewTags:function(){var t=this.getActiveViewStates().map((function(t){return t.metadata})),n=[{}].concat(t);return Object.assign.apply(Object,n)},getActivationEventId:function(t){return this.W.viewStates[t]?this.W.viewStates[t].activationEventId:null},getActiveViewStates:function(){var t=this,n=this.W.viewStates;return Object.keys(n).reduce((function(n,e){return t.isViewActive(e)&&n.push(t.getViewState(e)),n}),[])},isViewActive:function(t){var n=this.W.viewStates[t];return n||o.warn("No Page registered with id",t),!!n.isActive},getGlobalTags:function(){return i(this.W.globalTags)},Jn:function(){this.W.viewStates={},this.emitChange()},Hn:function(t){var n=t.forceClean||!1,e=this;t.views.forEach((function(t){var i=t.id;e.W.viewStates[i]={id:i,isActive:"boolean"!=typeof t.isActive||n?null:t.isActive,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}})),this.emitChange()},Yn:function(t){var n=t.view.id;if(!this.W.viewStates[n])throw new Error("No view exists with id "+n);this.W.viewStates[n].isActive=t.isActive,t.isActive?this.W.viewStates[n].activatedTimestamp=t.timestamp:(this.W.viewStates[n].parsedMetadata={},this.W.viewStates[n].userSuppliedMetadata={}),this.emitChange()},Kn:function(t){var n=t.pageId;if(!this.W.viewStates[n])throw new Error("No view exists with id "+n);Object.assign(this.W.viewStates[n].parsedMetadata,t.metadata),this.emitChange()},$n:function(t){var n=t.pageId;if(!this.W.viewStates[n])throw new Error("No view exists with id "+n);Object.assign(this.W.viewStates[n].userSuppliedMetadata,t.metadata),this.emitChange()},Wn:function(t){var n=t.pageId;this.W.viewStates[n]&&(this.W.viewStates[n].activationEventId=t.eventData.eventId,this.emitChange())},Xn:function(t){Object.assign(this.W.globalTags,t),this.emitChange()},xn:function(t){this.W.shouldBatch=t,this.emitChange()}}},749:function(t,n,e){var i=e(136),r=e(3019),o=e(8275).isEmpty;t.exports={initialize:function(){this.W={views:{},apiNamesToViews:{}},this.on(i.DATA_LOADED,this.vt)},getAll:function(){return r.safeReference(Object.values(this.W.views))},getPagesMap:function(){return r.safeReference(this.W.views)},get:function(t){return r.safeReference(this.W.views[t])},getByApiName:function(t){return r.safeReference(this.W.apiNamesToViews[t])},apiNameToId:function(t){var n=this.W.apiNamesToViews[t];if(n)return n.id},idToApiName:function(t){var n=this.W.views[t];if(n)return n.apiName},getNumberOfPages:function(){return Object.keys(this.W.views).length},getAllViewsForActivationType:function(t){var n=this.W.views;return Object.keys(n).map((function(t){return n[t]})).filter((function(n){return n.activationType===t}))},vt:function(t){if(!o(t.data.views)){var n=this;t.data.views.forEach((function(t){r.deepFreeze(t),n.W.views[t.id]=t,n.W.apiNamesToViews[t.apiName]=t})),this.emitChange()}}}},2857:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(8859);t.exports={initialize:function(){this.W={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.Qn),this.on(r.SET_VISITOR_ATTRIBUTES,this.Zn),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.te)},getVisitorProfile:function(){return this.W.profile},getVisitorProfileMetadata:function(){return this.W.metadata},getAttribute:function(t){var n=this.W.profile;return i(o.getFieldValue(n,t))},getAttributeMetadata:function(t){return i(this.W.metadata[t])},getVisitorIdFromAPI:function(){return this.W.visitorId},te:function(t){this.W.profile=t.profile,this.W.metadata=t.metadata,this.emitChange()},Zn:function(t){var n=this;t.attributes.forEach((function(t){var e=t.key;o.setFieldValue(n.W.profile,e,t.value),t.metadata&&Object.keys(t.metadata).forEach((function(i){var r=t.metadata[i];o.setFieldValue(n.W.metadata,e.concat(i),r)}))})),this.emitChange()},Qn:function(t){this.W.visitorId=t,this.emitChange()}}},6658:function(t,n,e){var i=e(136),r=e(8275).isEmpty;t.exports={initialize:function(){this.W={},this.on(i.DATA_LOADED,this.ne)},getCustomBehavioralAttributes:function(){var t=this.W;return Object.keys(t).reduce((function(n,e){var i=t[e];return i.rule_json&&n.push(i),n}),[])},getVisitorAttribute:function(t){var n=Object.values(this.W);if(t.datasourceId&&(n=n.filter((function(n){return n.dcp_datasource_id===String(t.datasourceId)}))),t.attributeName&&t.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(t.attributeId){var e=this.W[t.attributeId];if(!e)throw new Error("Unrecognized attribute ID: "+t.attributeId);return e}if(t.attributeName){var i=n.filter((function(n){return n.name===t.attributeName}));if(!i.length)throw new Error("Unrecognized attribute name: "+t.attributeName);if(i.length>1)throw new Error("Too many attributes with name: "+t.attributeName);return i[0]}throw new Error("Must specify attribute name or attribute ID")},ne:function(t){if(!r(t.data.visitorAttributes)){var n=this;t.data.visitorAttributes.forEach((function(t){n.W[t.id]=t})),this.emitChange()}}}},7016:function(t,n,e){Object.defineProperty(n,"u",{value:!0});var i=e(8275),r=i.cloneDeep,o=i.isEqual,a=e(136),u=e(192);t.exports={initialize:function(){this.W={variationIdMap:{},preferredLayerMap:{},contextualMabMap:{},odpSegments:{}},this.on(a.UPDATE_VARIATION_ID_MAP,this.ee),this.on(a.MERGE_VARIATION_ID_MAP,this.re),this.on(a.UPDATE_PREFERRED_LAYER_MAP,this.oe),this.on(a.MERGE_PREFERRED_LAYER_MAP,this.ae),this.on(a.UPDATE_CONTEXTUAL_MAB_MAP,this.ue),this.on(a.MERGE_CONTEXTUAL_MAB_MAP,this.ce),this.on(a.SET_ODP_SEGMENTS,this.se)},se:function(t){this.W.odpSegments=t,this.emitChange()},getOdpSegments:function(){return this.W.odpSegments},getContextualMabMap:function(){return r(this.W.contextualMabMap)},getContextualMabMapString:function(){return u.stringify(this.W.contextualMabMap)},ue:function(t){var n=this.W.contextualMabMap[t.layerId]||{};o(n[t.experimentId],t.variationData)||(n[t.experimentId]=t.variationData,this.W.contextualMabMap[t.layerId]=n,this.emitChange())},ce:function(t){var n=this.W.contextualMabMap;Object.keys(t.contextualMabMap).forEach((function(e){var i=t.contextualMabMap[e];n[e]||(n[e]={}),Object.keys(i).forEach((function(t){var r=i[t];n[e][t]||(n[e][t]=r)}))})),this.W.contextualMabMap=n,this.emitChange()},getVariationIdMap:function(){return r(this.W.variationIdMap)},getVariationIdMapString:function(){return u.stringify(this.W.variationIdMap)},ee:function(t){var n=this.W.variationIdMap[t.layerId]||{};n[t.experimentId]!==t.variationId&&(n[t.experimentId]=t.variationId,this.W.variationIdMap[t.layerId]=n,this.emitChange())},re:function(t){var n=this.getVariationIdMap(),e=t.variationIdMap;Object.keys(n||{}).forEach((function(t){var i=(n||{})[t];e[t]?Object.assign(e[t],i):e[t]=i})),this.W.variationIdMap=e,this.emitChange()},getPreferredLayerMap:function(){return r(this.W.preferredLayerMap)},getPreferredLayerMapString:function(){return u.stringify(this.W.preferredLayerMap)},getPreferredLayerId:function(t){return this.W.preferredLayerMap[t]},oe:function(t){this.W.preferredLayerMap[t.groupId]!==t.layerId&&(this.W.preferredLayerMap[t.groupId]=t.layerId,this.emitChange())},ae:function(t){var n=this.getPreferredLayerMap(),e=t.preferredLayerMap;Object.assign(e,n),this.W.preferredLayerMap=e,this.emitChange()}}},2725:function(t,n,e){var i=e(136);e(8487).J;t.exports={initialize:function(){this.W={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.vt),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.fe),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.le)},getEvents:function(){return this.W.events},getForeignEvents:function(){return this.W.foreignEvents},getForeignEventQueues:function(){return this.W.foreignEventQueues},vt:function(t){this.W.events=t,this.emitChange()},fe:function(t){this.W.foreignEvents[t.key]=t.value},le:function(t){this.W.foreignEventQueues[t.key]=t.value}}},977:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.de)},getBaseMap:function(){return this.W.baseMap},getEventQueue:function(){return this.W.eventQueue},getLastEvent:function(){return this.W.lastEvent},getCleared:function(){return this.W.cleared},getInitialized:function(){return this.W.initialized},de:function(t){this.W[t.key]=t.value}}},241:function(t,n,e){var i=e(8275).isEmpty,r=e(136);t.exports={initialize:function(){this.W={randomId:null,visitorIdLocator:null},this.on(r.SET_VISITOR_ID,this.vt),this.on(r.DATA_LOADED,this.ve)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.W.randomId},getVisitorIdLocator:function(){return this.W.visitorIdLocator},vt:function(t){Object.assign(this.W,t),this.emitChange()},ve:function(t){i(t.data.visitorIdLocator)||(this.W.visitorIdLocator=t.data.visitorIdLocator,this.emitChange())}}},227:function(t,n,e){var i=e(8275).cloneDeep,r=e(7852),o=e(136);t.exports={initialize:function(){this.W={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(o.XDOMAIN_SET_DEFAULT_FRAME,this.he),this.on(o.XDOMAIN_ADD_FRAME,this.pe),this.on(o.XDOMAIN_SET_MESSAGE,this.ge),this.on(o.XDOMAIN_ADD_SUBSCRIBER,this.me),this.on(o.XDOMAIN_SET_CANONICAL_ORIGINS,this.be),this.on(o.XDOMAIN_SET_DISABLED,this._e)},getMessages:function(){return i(this.W.messages)},getOffset:function(){return 0===this.W.messages.length?0:this.W.messages[0].data.id},getNextMessageId:function(){return this.W.messages.length+this.getOffset()},getMessageById:function(t){return this.W.messages[t-this.getOffset()]},getSubscribers:function(){return this.W.subscribers},getFrames:function(){return this.W.frames},getNextFrameId:function(){return this.W.frames.length},getDefaultFrame:function(){return this.W.defaultFrame},getCanonicalOrigins:function(){return i(this.W.canonicalOrigins)},isDisabled:function(){return this.W.disabled},he:function(t){this.W.defaultFrame=t},pe:function(t){this.W.frames.push(t)},ge:function(t){for(this.W.messages[t.messageId-this.getOffset()]=t.message;this.W.messages.length>1e3;){var n=this.W.messages.shift();r.debug("XDomainStorage: Cleared old message: "+n.data.id)}},me:function(t){this.W.subscribers.push(t.subscriber)},be:function(t){this.W.canonicalOrigins=t.canonicalOrigins},_e:function(t){this.W.disabled=t.disabled}}},9262:function(t,n){n.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},n.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},n.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}},9326:function(t,n,e){var i=e(8130).v;n.Error=i("TagError")},8612:function(t,n,e){var i=e(6592).PluginTypes,r=e(2025).get("stores/plugins");n.getTagValue=function(t){var e=r.getPlugin(i.viewTagLocators,t.locatorType);if(!e)throw new n.Error("No locator registered for tag locatorType: "+t.locatorType);return e(t)},n.enums=e(9262),n.Error=e(9326).Error},5192:function(t,n,e){var i=e(136),r=e(409),o=e(6761).Promise,a=e(2025).get("stores/async_request");n.makeAsyncRequest=function(t,n){var e,u,c=a.getPromise(t);if(c)return c;var s=new o((function(t,n){e=t,u=n}));return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:t,promise:s,resolver:e,rejecter:u}),n&&n(),s},n.resolveRequest=function(t,n){r.dispatch(i.RESOLVE_DEFERRED,{source:t,resolveWith:n})},n.rejectRequest=function(t,n){r.dispatch(i.REJECT_DEFERRED,{source:t,rejectWith:n})}},6022:function(t,n,e){var i=e(4618),r=e(9454);n.getLanguage=function(){return r.getNavigatorLanguage()},n.getQueryParams=i.getQueryParams,n.getQueryParamValue=i.getQueryParamValue,n.getUrl=function(){return r.getHref()}},6278:function(t,n,e){var i=e(8130).v,r=e(8298),o=e(1019),a=e(9454),u=e(136),c=e(2025),s=e(409),f=c.get("stores/cookie_options"),l=n.SetError=i("CookieSetError"),d=n.MismatchError=i("CookieMismatchError"),v=["co","com","net","org","edu","gov","mil","int","ac","com","net","org"];n.getAll=function(t){var e,i,r,a,u;void 0===t&&(t=!0),e=o.getCookieString().split(/\s*;\s*/);var c={};for(r=0;r<e.length;r++)if((a=(i=e[r]).indexOf("="))>0&&void 0===c[u=n.safeDecodeURIComponent(i.substring(0,a))]){var s=i.substring(a+1);t&&(s=n.safeDecodeURIComponent(s)),c[u]=s}return c},n.safeDecodeURIComponent=function(t){try{return decodeURIComponent(t)}catch(n){return t}},n.get=function(t,e){return n.getAll(e)[t]},n.set=function(t,e,i,c){!1!==c&&(c=!0);var g=[];if(void 0===(i=Object.assign({encodeValue:!0},i)).domain){var m=f.getCurrentDomain();m||(m=function(t,e){!1!==e&&(e=!0);for(var i,r,o=t.hostname.split("."),a=[],c=null,f=o.length-1;f>=0;f--)if(a.unshift(o[f]),i=a.join("."),!(o.length>1&&(1===a.length||2===a.length&&v.includes(a[0]))||h.includes(i))){r={domain:e?"."+i:i};try{n.set(p,Math.random().toString(),r),n.remove(p,r),c=r.domain;break}catch(t){}}return s.dispatch(u.SET_COOKIE_DOMAIN,c),c}(a.getLocation(),!0)),i.domain=m}if(i.domain&&g.push("domain="+i.domain),void 0===i.path&&(i.path="/"),i.path&&g.push("path="+i.path),void 0===i.expires){var b=void 0===i.maxAge?f.getDefaultAgeInSeconds():i.maxAge;i.expires=new Date(r.now()+1e3*b)}if(void 0!==i.expires&&g.push("expires="+i.expires.toUTCString()),i.secure&&g.push("secure"),o.setCookie(t+"="+(i.encodeValue?encodeURIComponent(e):e)+";"+g.join(";")),c){var _=i.encodeValue,y=n.get(t,_);if(y!==e){if(!y)throw new l('Failed to set cookie "'+t+'"');throw new d('Expected "'+e+'" for "'+t+'", got "'+y+'"')}}},n.remove=function(t,e){for(var i=a.getLocation().hostname.split("."),r=1===i.length?0:1;i.length>r&&(2!==i.length||!v.includes(i[0]));)n.set(t,null,Object.assign({},e,{domain:"."+i.join("."),expires:new Date(0)}),!1),i.shift()};var h=["optimizely.test"],p="optimizelyDomainTestCookie"},8130:function(t,n,e){var i=e(3958),r=i("InternalError");n.C=r,n.v=function(t){return i(t,r)}},8339:function(t,n,e){var i=e(6761).Promise;t.exports=function(){var t,n,e=new i((function(e,i){t=e,n=i}));return e.resolve=function(){return t.apply(null,Array.from(arguments)),e},e.reject=function(){return n.apply(null,Array.from(arguments)),e},e}},587:function(t,n,e){Object.defineProperty(n,"u",{value:!0}),n.getEditorConfig=d,n.getEditorScriptUrl=v,n.persistEditorParams=p,n.loadEmbeddedEditor=function(t){"function"!=typeof(null==window.optimizely?void 0:window.optimizely.push)&&(u.warn("EditorLoader / window.optimizely does not have a push method; it may have been overridden by page code. Resetting to ensure embedded editor compatibility."),window.optimizely=[]);p(),i.registerFunction("getAccountId",(function(){return o.get("stores/global").getAccountId()})),a.setOptOut(!1);var n=d(t),e=v(n);n.pullRequestId&&!isNaN(Number(n.pullRequestId))&&u.debug("Main / Loading editor pull request ID: "+n.pullRequestId),c.addScriptAsync(e)};var i=e(9445),r=e(6278),o=e(2025),a=e(4214),u=e(7852),c=e(7219),s=e(9454),f=["optimizely_project_id","optimizely_experiment_id","optimizely_section_id","optimizely_variation_id","optimizely_embed_editor","optimizely_use_shadow_dom","optimizely_page_id","optimizely_device_mode","optimizely_events_mode"],l=["optimizely_oauth_token","optimizely_token_expires_in"];function d(t){var n,e={true:"http://localhost:9888/main.js",http:"http://localhost:9888/main.js",https:"https://localhost:9888/main.js"},i=null==(n=r.get("useLocalBundle"))?void 0:n.toLowerCase(),o=r.get("optimizelyVePr");return{useLocalBundle:!!e[i],pullRequestId:o,mfeEntrypoint:e[i]?e[i]:t}}function v(t){var n=t.pullRequestId;return n&&!isNaN(Number(n))?"https://develrc-app.optimizely.com/dist/visual-editor/pull-request/"+n+"/main.js":t.mfeEntrypoint}function h(t){var n={};if(!t)return n;for(var e=t.split("&"),i=0;i<e.length;i++){var r=e[i].indexOf("=");if(-1!==r){var o=e[i].substring(0,r),a=e[i].substring(r+1);try{n[o]=decodeURIComponent(a)}catch(t){n[o]=a}}}return n}function p(){var t=s.getGlobal("sessionStorage");if(t){var n=s.getHref()||"",e=n.indexOf("?"),i=n.indexOf("#"),r=-1!==e?n.substring(e+1,-1!==i?i:void 0):"",o=-1!==i?n.substring(i+1):"";o=o.replace(/^#?\/*/,"");var a=h(r),c=h(o);f.forEach((function(n){a[n]&&t.setItem(n,a[n])})),l.forEach((function(n){c[n]&&t.setItem(n,c[n])})),u.log("EditorLoader / Persisted visual editor params to sessionStorage")}}},3019:function(t,n,e){var i=e(8275).cloneDeep;n.deepFreeze=function(t){},n.safeReference=function(t){return i(t)}},8275:function(t,n){function e(t,n){return null!=n&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](t):t instanceof n}Object.defineProperty(n,"u",{value:!0}),n.cloneDeep=function t(n,r,o){if(void 0===r&&(r=0),null==n)return n;if("object"!==(void 0===n?"undefined":i(n)))return n;if(r>100)throw new Error("cloneDeep: Maximum recursion depth exceeded");if(o||(o=new Map),o.has(n))return o.get(n);var a=Date,u=RegExp,c=Array;if(e(n,a)){return new a(n.getTime())}if(e(n,u)){var s=n,f="";return s.global&&(f+="g"),s.ignoreCase&&(f+="i"),s.multiline&&(f+="m"),s.unicode&&(f+="u"),s.sticky&&(f+="y"),new u(s.source,f)}if(c.isArray(n)){var l=n,d=[];o.set(n,d);for(var v=l.length,h=0;h<v;h++)d[h]=t(l[h],r+1,o);return d}var p=Object.getPrototypeOf(n),g=p&&p!==Object.prototype?Object.create(p):{};for(var m in o.set(n,g),n)Object.prototype.hasOwnProperty.call(n,m)&&(g[m]=t(n[m],r+1,o));return g},n.isEmpty=function(t){return null==t||("string"==typeof t||Array.isArray(t)?0===t.length:"object"==typeof t&&0===Object.keys(t).length)},n.isEqual=function t(n,r){if(n===r)return!0;if(null==n||null==r)return n===r;if((void 0===n?"undefined":i(n))!==(void 0===r?"undefined":i(r)))return!1;if("object"!=typeof n)return n===r;if(Array.isArray(n)&&Array.isArray(r)){if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!t(n[o],r[o]))return!1;return!0}if(Array.isArray(n)!==Array.isArray(r))return!1;if(e(n,Date)&&e(r,Date))return n.getTime()===r.getTime();if(e(n,RegExp)&&e(r,RegExp))return n.source===r.source&&n.global===r.global&&n.ignoreCase===r.ignoreCase&&n.multiline===r.multiline&&n.sticky===r.sticky&&n.unicode===r.unicode;var a=Object.keys(n),u=Object.keys(r);if(a.length!==u.length)return!1;for(var c=0;c<a.length;c++){var s=a[c];if(!Object.prototype.hasOwnProperty.call(r,s)||!t(n[s],r[s]))return!1}return!0},n.isObject=r,n.pick=function(t,n){var e={};if(null==t)return e;for(var i=0;i<n.length;i++){var r=n[i];Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},n.omit=function(t,n){var e={};if(null==t)return e;var i=new Set(n);for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&!i.has(r)&&(e[r]=t[r]);return e},n.merge=function t(n){for(var e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];if(!r(n))throw new TypeError("Target must be an object");for(var a=0;a<i.length;a++){var u=i[a];if(r(u))for(var c in u)if(Object.prototype.hasOwnProperty.call(u,c)){var s=u[c],f=n[c];if(void 0===s)continue;r(s)&&r(f)?n[c]=t({},f,s):n[c]=s}}return n},n.mapValues=function(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=n(t[i],i,t));return e},n.flatten=function(t){for(var n=[],e=0;e<t.length;e++){var i=t[e];if(Array.isArray(i))for(var r=0;r<i.length;r++)n.push(i[r]);else n.push(i)}return n},n.flattenDeep=function t(n){var e=[];if(null==n)return e;for(var i=0;i<n.length;i++){var r=n[i];if(Array.isArray(r))for(var o=t(r),a=0;a<o.length;a++)e.push(o[a]);else e.push(r)}return e},n.pickBy=o,n.omitBy=function(t,n){var e="function"==typeof n;return o(t,(function(t,i){return!(e?n(t,i):r(t)&&Object.keys(n).every((function(e){return t[e]===n[e]})))}))};var i=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function r(t){var n=void 0===t?"undefined":i(t);return null!=t&&("object"===n||"function"===n)}function o(t,n){var e=function(e){if(!Object.prototype.hasOwnProperty.call(t,e))return"continue";var a=t[e];(i?n(a,e):r(a)&&Object.keys(n).every((function(t){return a[t]===n[t]})))&&(o[e]=a)},i="function"==typeof n,o={};for(var a in t)e(a);return o}},8859:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.isObject;n.getFieldValue=function(t,n){Array.isArray(n)||(n=[n]);for(var e=t,i=0;i<n.length;i++){var r=n[i];if(!o(e)||!e.hasOwnProperty(r))return;e=e[r]}return e},n.setFieldValue=function(t,n,e){if(!Array.isArray(n)||r(n))throw new Error("Attempted to set an invalid key path: "+n);for(var i=t,a=0;a<n.length-1;a++){var u=n[a];o(i[u])||(i[u]={}),i=i[u]}i[n[n.length-1]]=e}},7852:function(t,n,e){var i=e(136),r=e(8298),o=e(6592),a=e(409),u=e(192);function c(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=r.now()}c.prototype.ye=function(){return null!==this.logLevel},c.prototype.setLogLevel=function(t){var n=this.we(t);null===n?console.error("Unknown log level: "+t):this.logLevel!==n&&(this.log("Setting log level to "+n),this.logLevel=n,this.flush())},c.prototype.setLogMatcher=function(t){this.logMatcher="string"==typeof t?t:"",this.logGroup=0},c.prototype.shouldLog=function(t){return this.ye()&&this.logLevel>=t},c.prototype.matchesLogMessage=function(t,n){var e=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===t?this.logGroup++:"GROUPEND"===t&&this.logGroup--,!0;var i=n.some((function(t){if("string"!=typeof t)try{t=u.stringify(t)}catch(t){}return"string"==typeof t&&t.includes(e)}));return i&&"GROUPSTART"===t&&this.logGroup++,i},c.prototype.storeLog=function(t,n){var e={logLevel:t,logMessage:n};a.dispatch(i.LOG,e)},c.prototype.flush=function(){var t=e(2025).get("stores/log");this.logGroup=0;var n=t.getLogs(),i=this;n.forEach((function(t){i.Ee(t.logLevel,t.logMessage,!0)}))},c.prototype.Ee=function(t,n,e){var i,r=t;if(console)switch(t){case"GROUPSTART":i=console.groupCollapsed,r=o.LogLevel.DEBUG;break;case"GROUPEND":i=console.groupEnd,r=o.LogLevel.DEBUG;break;case o.LogLevel.ERROR:i=console.error;break;case o.LogLevel.WARN:i=console.warn;break;case o.LogLevel.DEBUG:i=console.debug;break;default:i=console.log}try{e||this.ye()&&!this.shouldLog(r)||(Array.isArray(n)&&"string"==typeof n[0]&&(n=this.Ie(n)),this.storeLog(t,n)),i&&this.shouldLog(r)&&this.matchesLogMessage(t,n)&&i.apply(console,n)}catch(t){console&&(console.error?console.error(t):console.log(t))}},c.prototype.debug=function(){this.Ee(o.LogLevel.DEBUG,[].slice.call(arguments))},c.prototype.log=function(){this.Ee(o.LogLevel.INFO,[].slice.call(arguments))},c.prototype.logAlways=function(){var t=this.Ie([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,t),this.storeLog(o.LogLevel.INFO,t)},c.prototype.warn=function(){this.Ee(o.LogLevel.WARN,[].slice.call(arguments))},c.prototype.error=function(t){var n=[].slice.call(arguments);1===n.length&&t.stack?(this.Ee(o.LogLevel.ERROR,[this.Ae(),t]),this.Ee(o.LogLevel.INFO,[t.stack])):this.Ee(o.LogLevel.ERROR,n)},c.prototype.groupCollapsed=function(){this.Ee("GROUPSTART",[].slice.call(arguments))},c.prototype.groupEnd=function(){this.Ee("GROUPEND",[].slice.call(arguments))},c.prototype.Ie=function(t){var n=this.Ae().toString();return n.length<6&&(n=("     "+n).slice(-6)),[n+"| Optly / "+t[0]].concat(t.slice(1))},c.prototype.Ae=function(){return this.timebase?r.now()-this.timebase:0},c.prototype.we=function(t){return t&&("TRUE"===(t=t.toUpperCase())&&(t="INFO"),"FALSE"===t&&(t="OFF"),"ALL"===t&&(t="DEBUG"),void 0!==o.LogLevel[t])?o.LogLevel[t]:null},t.exports=new c},5686:function(t,n){n.isSingleExperimentPolicy=function(t){return"single_experiment"===t||"multivariate"===t}},5385:function(t,n,e){var i=e(6761).Promise,r=e(9454);n.pollFor=function(t,n,e){var o,a;return"function"==typeof e?a=e:(o=e||100,a=function(){return--o<-1}),n=n||50,new i((function(e,i){!function o(){var u;if(!a()){try{var c=t();if(c)return e(c)}catch(t){u=t}return r.setTimeout(o,n)}i(u||new Error("Poll timed out"))}()}))}},5467:function(t,n,e){var i=e(6761).Promise;n.firstToResolve=function(t){return new i((function(n){t.forEach((function(t){i.resolve(t).then(n,(function(){}))}))}))}},4618:function(t,n,e){var i=e(9454);n.getQueryParams=function(){var t=i.getLocationSearch()||"";if(0===t.indexOf("?")&&(t=t.substring(1)),0===t.length)return[];for(var n=t.split("&"),e=[],r=0;r<n.length;r++){var o="",a="",u=n[r].split("=");u.length>0&&(o=u[0]),u.length>1&&(a=u[1]),e.push([o,a])}return e},n.getQueryParamValue=function(t){for(var e=n.getQueryParams(),i=0;i<e.length;i++)if(e[i][0]===t)return e[i][1]},n.queryStringFromMap=function(t){return Object.keys(t).map((function(n){return n+"="+t[n]})).join("&")}},1760:function(t,n,e){var i=e(7852),r=e(9454);function o(t){this.windowLength=t,this.count=0,this.listeners={},this.isIncrementingTick=!1}o.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),r.setTimeout(function(){this.isIncrementingTick=!1}.bind(this),0))},o.prototype.increment=function(){this.count+=1,(this.listeners[String(this.count)]||[]).forEach((function(t){t()})),r.setTimeout(this.decrement.bind(this),this.windowLength)},o.prototype.decrement=function(){this.count-=1,this.count<0&&(i.warn("Decremented down to negative count: ",this.count),this.count=0)},o.prototype.addListener=function(t,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(n)},t.exports=o},3272:function(t,n,e){var i=e(8275).pick,r=e(2025).get("stores/observed_redirect");n.getReferrer=function(){var t=r.get();return t?t.referrer:null},n.getExperimentAndVariation=function(){var t=r.get();return t&&"string"==typeof t.variationId?i(t,["experimentId","variationId"]):null}},9670:function(t,n,e){var i=e(8275).mapValues,r=e(136),o=e(8298),a=e(2025),u=e(1019),c=e(6592),s=e(409),f=e(7852),l=a.get("stores/sandbox"),d=e(9454);n.shouldSandbox=function(){return!1},n.get=function(t){if(!t)throw new Error("Name is required");if(n.shouldSandbox()){l.isInitialized()||v();var e=l.get(t);if(e)return e}return d.getGlobal(t)};var v=function(){try{var t="optimizely_"+o.now(),n=u.createElement("iframe");n.name=t,n.style.display="none",u.appendToHead(n);var e=n.contentWindow,a=n.contentDocument;a.write("<scr"),a.write("ipt></scr"),a.write("ipt>"),a.close();var l=i(c.SandboxedFunctions,(function(t){return e[t]}));s.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:l})}catch(t){f.warn("Unable to create a sandbox: ",t)}}},7219:function(t,n,e){var i=e(1019),r=e(7852),o=e(8260);n.addScriptAsync=function(t,n,e){var o,a=i.querySelector("head"),u=e?i.querySelector(e):null,c=i.createElement("script");(c.type="text/javascript",c.async=!0,c.src=t,n&&(c.onload=n),u)?(r.debug("Target element found for selector: "+e+", adding script before it."),null==(o=u.parentNode)||o.insertBefore(c,u)):(r.debug("Target element not found for selector: "+e+", adding script to HEAD instead."),a.insertBefore(c,a.firstChild));r.debug("Asynchronously requesting "+t)},n.addScriptSync=function(t,e){try{var a="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(-1!==t.indexOf('"'))return void r.error("Blocked attempt to load unsafe script: "+t);i.write("<scr"),i.write('ipt id="'+a+'" src="'+t+'"></scr'),i.write("ipt>");var u=i.querySelector("#"+a);if(!u)throw new Error("DocumentEnv.write failed to append script");u.onload=e,u.onerror=function(i){r.warn("Failed to load script ("+t+") synchronously:",i),n.addScriptAsync(t,e)}}catch(i){r.debug("DocumentEnv.write failed for "+t+": "+i.message);return o.request({url:t,async:!1,contentType:"text/plain",success:function(t){new Function(t.responseText)(),e&&e()}}).catch((function(i){r.error("Failed to load "+t+" via synchronous XHR: "+i.message),n.addScriptAsync(t,e)}))}}},249:function(t,n,e){var i=e(6761).Promise,r=e(9454);n.makeTimeoutPromise=function(t){return new i((function(n,e){r.setTimeout((function(){e(new Error("Timed out after "+t+" ms"))}),t)}))}},3498:function(t,n,e){var i=e(8275).isEmpty,r=e(4861),o=e(9454),a=e(136),u=e(2025),c=e(409),s=u.get("stores/ua_data");n.get=function(){var t=s.get();return i(t)&&(t=r.parseUA(o.getUserAgent()),c.dispatch(a.SET_UA_DATA,{data:t})),t}},327:function(t,n){n.guessDomain=function(t,n){if(!t)return"";try{return n?t.match(/:\/\/(.[^/]+)/)[1]:t.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]}catch(t){return""}}},9899:function(t,n){n.generate=function(){var t=new Uint8Array(16);crypto.getRandomValues(t),t[6]=15&t[6]|64,t[8]=63&t[8]|128;var n=Array.prototype.map.call(t,(function(t){return("0"+t.toString(16)).slice(-2)})).join("");return n.slice(0,8)+"-"+n.slice(8,12)+"-"+n.slice(12,16)+"-"+n.slice(16,20)+"-"+n.slice(20)}},5292:function(t,n,e){var i=e(6761).Promise,r=e(136),o=e(2025),a=e(409),u=e(8841),c=e(8130).v,s=e(8298),f=e(1019),l=e(192),d=e(5385),v=e(4285),h=e(9454),p=e(6592).VisitorStorageKeys,g=e(7852),m=o.get("stores/xdomain"),b=n.Error=c("XDomainStorageError");function _(t){var n;if(m.getFrames().find((function(n){return n.origin===t.origin}))){try{n=l.parse(t.data)}catch(n){return void g.debug("XDomain","Ignoring malformed message event:",t)}if("ERROR"===n.type)a.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0}),u.emitInternalError(new b("Xdomain Error: "+n.response));else if("SYNC"===n.type)e(5010).time("xdomainStorageSync"),m.getSubscribers().forEach((function(t){t(n.response.key,n.response.value)})),e(5010).timeEnd("xdomainStorageSync");else{var i=m.getMessageById(n.id);if(!i){if(g.warn("XDomain","No stored message found for ID",n.id),"number"!=typeof n.id)u.emitInternalError(new b("Message ID is not a number: "+n.id));else{var o=m.getNextMessageId();n.id>=o?u.emitInternalError(new b("Message ID is greater than expected maximum ID ("+n.id+">"+o+")")):n.id<0?u.emitInternalError(new b("Message ID is < 0: "+n.id)):u.emitInternalError(new b("No stored message found for message ID: "+n.id))}return}if(!i.resolver)return void g.warn("XDomain","Message already resolved, ignoring:",n.id);i.resolver(n.response),a.dispatch(r.XDOMAIN_SET_MESSAGE,{messageId:n.id,message:{data:{id:n.id,type:i.data.type,key:i.data.key},startTime:i.startTime,endTime:s.now()}})}}else g.debug("XDomain","No frame found for origin: "+t.origin)}function y(t){return!(["GET","PUT"].includes(t.type)&&!t.key.includes(p.SESSION_STATE))}function w(t,n){return n||(n=m.getDefaultFrame()),new i((function(e){var i={data:Object.assign({},t,{id:m.getNextMessageId(),use_cookie:y(t)}),resolver:e};n?m.isDisabled()||E(i,n):a.dispatch(r.XDOMAIN_SET_MESSAGE,{messageId:i.data.id,message:i})}))}function E(t,n){var e=t.data;a.dispatch(r.XDOMAIN_SET_MESSAGE,{messageId:t.data.id,message:Object.assign({},t,{startTime:s.now()})}),n.target.postMessage(l.stringify(e),n.origin)}n.setItem=function(t,n,e){return w({type:"PUT",key:t,value:n},e)},n.getItem=function(t,n){return w({type:"GET",key:t},n)},n.fetchAll=function(t){return w({type:"GETALL"},t)},n.deleteData=function(t,n){return w({type:"DELETE",visitorId:t},n)},n.subscribe=function(t){a.dispatch(r.XDOMAIN_ADD_SUBSCRIBER,{subscriber:t})},n.loadIframe=function(t,n){return new i((function(i){e(5010).time("xdomainIframeLoad");var o=f.createElement("iframe");o.src=t+n,o.hidden=!0,o.setAttribute("tabindex","-1"),o.setAttribute("title","Optimizely Internal Frame"),o.style.display="none",o.height=0,o.width=0,o.onload=function(){e(5010).timeEnd("xdomainIframeLoad");var u={id:m.getNextFrameId(),target:o.contentWindow,origin:t,path:n};a.dispatch(r.XDOMAIN_ADD_FRAME,u),i(u)},f.appendTo(f.querySelector("body"),o)}))},n.getXDomainUserId=function(t,n){var e,i={},r=Object.keys(t);return n.forEach((function(t){i[t]=[],r.forEach((function(n){var r=v.getUserIdFromKey(n,t);!e&&r&&(e=r),r&&!i[t].includes(r)&&i[t].push(r)}))})),g.debug("XDomain: Found userIds:",i),e},n.load=function(t,e){h.addEventListener("message",_);return d.pollFor((function(){return!!f.querySelector("body")})).then((function(){return n.loadIframe(t,e)})).then((function(t){a.dispatch(r.XDOMAIN_SET_DEFAULT_FRAME,t),m.isDisabled()||m.getMessages().forEach((function(n){n.startTime||E(n,t)}))}))}},8260:function(t,n,e){var i=e(8275).isObject,r=e(136),o=e(8298),a=e(409),u=e(192),c=e(7852),s=e(6761).Promise,f=e(9670);n.isCORSSupported=function(){return"withCredentials"in new(f.get("XMLHttpRequest"))},n.request=function(t){return t=Object.assign({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},t),new s((function(e,r){if(!n.isCORSSupported())return r("CORS is not supported");var o=new(f.get("XMLHttpRequest"));o.onload=function(){t.success&&t.success(o),e(o)},o.onerror=function(){t.error&&t.error(o),r(o)},i(t.data)&&(t.data=u.stringify(t.data)),o.open(t.method,t.url,t.async),t.withCredentials&&(o.withCredentials=t.withCredentials),o.setRequestHeader("Content-Type",t.contentType),i(t.headers)&&Object.keys(t.headers).forEach((function(n){o.setRequestHeader(n,t.headers[n])})),o.send(t.data)}))},n.retryableRequest=function(t,e,i,u){if(!e)return s.reject(new Error("No id specified for request."));if(!n.isCORSSupported())return s.reject(new Error("CORS is not supported."));void 0===u&&(u=3),void 0===i&&(i=0);var f={id:e,timeStamp:o.now(),data:t,retryCount:i};return a.dispatch(r.SET_PENDING_EVENT,f),c.debug("Sending event ",e),n.request(t).then((function(t){return a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),t}),(function(t){throw f.retryCount>=u?(a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),c.warn("Event ",f," could not be sent after ",u," attempts.")):(f.retryCount++,a.dispatch(r.SET_PENDING_EVENT,f),c.debug("Event ",f," failed to send, with error ",t," It will be retried ",u-i," times.")),t}))},n.sendBeacon=function(t,e){if(!t.url||!t.data)return s.reject(new Error("Must provide required options"));if(navigator&&navigator.sendBeacon)try{var r=i(t.data)?u.stringify(t.data):t.data;if(navigator.sendBeacon(t.url,r))return s.resolve();throw new Error("Unable to sendBeacon")}catch(t){c.warn("sendBeacon failed: ",t)}return t=Object.assign({method:"POST"},t),n.request(t,e)}},2348:function(t,n,e){var i=e(8275).isEmpty,r=e(136),o=e(8674),a=e(5421),u=e(8298),c=e(2025),s=e(6592),f=e(1320),l=e(409),d=e(7852),v=e(8612),h=c.get("stores/event_data"),p=c.get("stores/plugins"),g=c.get("stores/rum"),m=c.get("stores/view"),b=c.get("stores/view_data");n.parseViewTags=function(t){var e=n.evaluateViewTags(t);n.setParsedViewTags(t.id,e)},n.updateAllViewTags=function(){m.getActiveViewStates().forEach((function(t){var e=b.get(t.id);n.parseViewTags(e)}))},n.evaluateViewTags=function(t){return t.tags?t.tags.reduce((function(t,n){try{t[n.apiName]=v.getTagValue(n)}catch(t){e=t,(null!=(i=v.Error)&&"undefined"!=typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](e):e instanceof i)?d.warn("Page / Ignoring unparseable tag",n,t):d.error(t)}var e,i;return t}),{}):{}},n.createViewTicket=function(){var t={},n=p.getAllPlugins(s.PluginTypes.viewProviders);return Object.keys(n).forEach((function(e){var i=n[e];t[i.provides]=c.evaluate(i.getter)})),t},n.registerViews=function(t,n){l.dispatch(r.REGISTER_VIEWS,{views:t,forceClean:n})},n.activateViaAPI=function(t,e){e&&n.setUserSuppliedViewTags(t.id,e),n.activateMultiple([t],e)},n.getViewsAndActivate=function(t){var e=b.getAllViewsForActivationType(t);n.activateMultiple(e)},n.activateMultiple=function(t,a){var u=[];return t.forEach((function(t){var i=m.getViewState(t.id),c=n.createViewTicket();if(e(5010).time("setupViewActivation"),i.isActive)if(t.deactivationEnabled)try{n.hasValidStaticConditions(t,c)||n.deactivate(t)}catch(e){d.error("Page / Error evaluating whether to deactivate page ",n.description(t),e)}else d.log("Not activating Page, already active ",n.description(t));else{try{if(!n.hasValidStaticConditions(t,c))return"boolean"!=typeof i.isActive&&n.setViewActiveState(t,!1),void d.log("Page / Failed to match page conditions for "+n.description(t),t.staticConditions)}catch(e){return"boolean"!=typeof i.isActive&&n.setViewActiveState(t,!1),void d.error("Page / Error evaluating whether to activate page ",n.description(t),e)}if(u.push(t),n.setViewActiveState(t,!0),d.log("Activated Page",n.description(t)),o.emitViewActivated({view:t,metadata:a}),g.getSampleRum()){var f=t.activationType||s.ViewActivationTypes.immediate;l.dispatch(r.RECORD_ACTIVATION_TYPE_USAGE,{activationType:f,entityId:t.id})}var v=h.getByPageId(t.id);n.toggleEventImplementations(v,!0),e(5010).timeEnd("setupViewActivation")}})),i(u)||o.emitViewsActivated({views:u}),u},n.deactivate=function(t){if(m.getViewState(t.id).isActive){n.setViewActiveState(t,!1),d.log("Deactivated Page",n.description(t)),o.emitPageDeactivated({page:t});var e=h.getByPageId(t.id);n.toggleEventImplementations(e,!1)}else d.log("Not deactivating Page, already inactive ",n.description(t))},n.setViewActiveState=function(t,n){l.dispatch(r.SET_VIEW_ACTIVE_STATE,{view:t,timestamp:u.now(),isActive:n})},n.setGlobalTags=function(t){l.dispatch(r.SET_GLOBAL_TAGS,t)},n.setParsedViewTags=function(t,n){l.dispatch(r.UPDATE_PARSED_VIEW_METADATA,{pageId:t,metadata:n})},n.setUserSuppliedViewTags=function(t,n){l.dispatch(r.UPDATE_USER_SUPPLIED_METADATA,{pageId:t,metadata:n})},n.hasValidStaticConditions=function(t,n){var e={};if(i(t.staticConditions))return!0;var o=p.getAllPlugins(s.PluginTypes.viewMatchers);d.groupCollapsed("Page / Evaluating staticConditions:",t.staticConditions),d.debug("Matching to current value:",n);var u=a.evaluate(t.staticConditions,(function(t){var i=t.type,r=o[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r&&(e[t.type]||(e[t.type]=!0)),r.match(n,t)}));return d.groupEnd(),g.getSampleRum()&&u&&l.dispatch(r.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:Object.keys(e),entityId:t.id}),u},n.description=function(t){return'"'+t.name+'" ('+t.id+")"},n.toggleEventImplementations=function(t,n){t.forEach((function(t){if(t.eventType!==f.CUSTOM){var e=p.getPlugin(s.PluginTypes.eventImplementations,t.eventType);e?n?e.attach(t):e.detach(t):d.warn("No implementation found for event type:",t.eventType,"needed for event:",t)}}))},n.isActivationTypeImmediate=function(t){return t===s.ViewActivationTypes.immediate||!t},n.shouldTriggerImmediately=function(t){return t===s.ViewActivationTypes.DOMChanged||t===s.ViewActivationTypes.URLChanged||t===s.ViewActivationTypes.immediate||!t},n.create=function(t,n){return{id:t,apiName:n,category:"other"}},n.createState=function(t){return{id:t,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}}}},4285:function(t,n,e){Object.defineProperty(n,"u",{value:!0});var i,r=e(8275),o=(r.flattenDeep,r.isEmpty),a=r.omit,u=r.omitBy,c=e(409),s=e(136),f=e(2575),l=e(4938),d=e(6278),v=e(8298),h=e(2025),p=e(6592),g=e(192),m=e(8859),b=e(1353).DT,_=e(7852),y=e(6761).Promise,w=e(4618),E=e(6592).VisitorStorageKeys,I=e(9454);i=e(5292);var A=h.get("stores/cookie_options"),S=h.get("stores/global"),T=h.get("stores/layer"),O=h.get("stores/plugins"),k=h.get("stores/rum"),R=h.get("stores/session"),C=h.get("stores/visitor_id"),N=h.get("stores/visitor_bucketing"),D=h.get("stores/visitor"),x=h.get("stores/provider_status");function j(t){e(5010).time("visitorData");var n=L(t),i=b.getItem(n);return e(5010).timeEnd("visitorData"),"string"==typeof i&&(i=B(i)),i}function M(t){var n;if(t.layerId)n=t;else{var e=t;n={layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}return n}function P(t,n,e){try{var r=L(t);e||(n=g.stringify(n));try{b.setItem(r,n)}catch(t){throw _.warn("Visitor / Unable to set localStorage key, error was:",t),new Error("Unable to set localStorage")}i.setItem(r,n)}catch(t){_.warn("Unable to persist visitor data:",t.message)}}function L(t){var e=C.getBucketingId();if(!e)throw new Error("Visitor bucketingId not set");var i=n.getNamespace();if(!i)throw new Error("Namespace is not set");return[e,i,t].join("$$")}function V(t,e){if(!C.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(U(t)){var i=n.getStorageKeyFromKey(t);if(Object.keys(E).some((function(t){return E[t]===i}))){var r=L(i);if(!(t.indexOf(r)<=0)&&(e=B(e)))if(i===E.EVENT_QUEUE)c.dispatch(s.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:t,value:l.deserialize(e)});else if(i===E.EVENTS)c.dispatch(s.SET_FOREIGN_VISITOR_EVENTS,{key:t,value:l.deserialize(e)});else if(i===E.LAYER_STATES)c.dispatch(s.LOAD_PERSISTED_LAYER_STATES,{layerStates:e.map(M),merge:!0});else if(i===E.VARIATION_MAP)c.dispatch(s.MERGE_VARIATION_ID_MAP,{variationIdMap:e});else if(i===E.CONTEXTUAL_MAB)c.dispatch(s.MERGE_CONTEXTUAL_MAB_MAP,{contextualMabMap:e});else if(i===E.VISITOR_PROFILE){var a=e;["custom"].forEach((function(t){var n=O.getPlugin(p.PluginTypes.visitorProfileProviders,t);if(n){if(a.profile&&a.metadata){var e=function(t,n,e){var i=D.getAttribute(n),r=D.getAttributeMetadata(n),a=t.profile[n],u=t.metadata[n];if(o(i))return{data:a,metadata:u};var c={};return Object.keys(a).forEach((function(t){var n,i,o=a[t];r&&r[t]&&(n=r[t].lastModified),u&&u[t]&&(i=u[t].lastModified),(e===p.AttributionTypes.FIRST_TOUCH&&n>=i||e===p.AttributionTypes.LAST_TOUCH&&i>=n||void 0===n&&i)&&(c.data=c.data||{},c.data[t]=o,i&&(c.metadata=c.metadata||{},c.metadata[t]=c.metadata[t]||{},c.metadata[t].lastModified=i))})),c}(a,t,n.attributionType);if(!o(e)){var i=[];Object.keys(e.data||{}).forEach((function(n){var r=e.data[n],o=e.metadata[n],a={key:[t,n],value:r,metadata:o};i.push(a)})),c.dispatch(s.SET_VISITOR_ATTRIBUTES,{attributes:i})}}}else _.debug("Attribute type",t,"not used by any audiences")}))}}}}function U(t){return t.split("$$")[0].indexOf("://")>0}function B(t){try{return g.parse(t)}catch(n){return _.debug("Failed to parse: ",t,n),null}}n.getOrGenerateId=function(){return{randomId:n.getCurrentId()||"oeu"+v.now()+"r"+Math.random()}},n.getCurrentId=function(){var t=C.getVisitorIdLocator();return D.getVisitorIdFromAPI()||(t?function(t){var n,e=t.name;switch(t.type){case p.VisitorIdLocatorType.COOKIE:n=d.get(e);break;case p.VisitorIdLocatorType.JS_VARIABLE:n=I.getGlobalByPath(e);break;case p.VisitorIdLocatorType.LOCALSTORAGE:try{n=I.getGlobal("localStorage").getItem(e)}catch(t){throw new Error("Unable to read localStorage: "+t.toString())}break;case p.VisitorIdLocatorType.QUERY:n=w.getQueryParamValue(e)}try{if(!n)throw _.error("Visitor / Customer provided visitor id cannot be found. Type:",t.type," Name:",e),new Error("Failure to obtain visitor id from "+t.type);if("string"!=typeof n&&"number"!=typeof n)throw _.error("Visitor / Customer provided visitor id is not a string or number. Type:",t.type," Name:",e," Id Type:",(i=n)&&"undefined"!=typeof Symbol&&i.constructor===Symbol?"symbol":typeof i),new Error("Customer provided visitor id is not a string or number")}catch(t){throw k.getSampleRum()&&c.dispatch(s.RECORD_VISITOR_ID_ERROR,{isError:!0}),t}var i;k.getSampleRum()&&(c.dispatch(s.RECORD_VISITOR_ID_ERROR,{isError:!1}),c.dispatch(s.RECORD_VISITOR_ID_LOCATOR_USAGE,{visitorIdLocatorType:t.type,entityId:n}));return String(n)}(t):d.get(p.COOKIES.VISITOR_ID))},n.hasSomeData=function(){return b.keys().length>0},n.setId=function(t){var r,o,a=C.getBucketingId();c.dispatch(s.SET_VISITOR_ID,t),C.getBucketingId()!==a&&(!function(){e(5010).time("viewLoadData"),function(t,n){0;e(5010).time("loadBehaviorEvents"),f.initializeStore(t,n),e(5010).timeEnd("loadBehaviorEvents")}(j(E.EVENTS)||[],j(E.EVENT_QUEUE)||[]);var t=(i=E.LAYER_STATES,r=C.getBucketingId(),o=[],a=new RegExp(r+"\\$\\$([^$]+?)\\$\\$"+i),b.keys().forEach((function(t){var n=t.match(a);if(n){var e={namespace:n[1],userId:r,item:B(b.getItem(t))};o.push(e)}})),o);var i,r,o,a;t.forEach((function(t){t.item=(t.item||[]).map(M)})),l=t,d=[],l.forEach((function(t){t.item.forEach((function(n){n.namespace=t.namespace,d.push(n)}))})),h=d,c.dispatch(s.LOAD_PERSISTED_LAYER_STATES,{layerStates:h.filter((function(t){return!!t.decision}))}),v=j(E.SESSION_STATE)||{},v=Object.assign({lastSessionTimestamp:0,sessionId:null},v),c.dispatch(s.LOAD_SESSION_STATE,v),function(t){var n,e,i=O.getAllPlugins(p.PluginTypes.visitorProfileProviders),r=Object.keys(i||{}).map((function(t){return i[t]})).filter((function(t){return"function"==typeof t.restorer}));t.profile&&t.metadata?(n=t.profile,e=t.metadata):(n=t,e={});n=Object.keys(n||{}).reduce((function(t,e){var i=n[e],o=i,a=r.find((function(t){return t.provides===e}));return a&&(o=a.restorer(i)),t[e]=o,t}),{}),c.dispatch(s.LOAD_EXISTING_VISITOR_PROFILE,{profile:n,metadata:e})}(j(E.VISITOR_PROFILE)||{});var u=j(E.TRACKER_OPTIMIZELY);u&&(g=u,c.dispatch(s.SET_TRACKER_PERSISTABLE_STATE,g));var l,d;var v;var h;var g;n.loadForeignData(),n.removeLegacySessionStateCookies()}(),n.deleteOldLocalData(),i.deleteData(t));try{C.getVisitorIdLocator()||n.maybePersistVisitorId(t)}catch(t){if(_.error("Visitor / Unable to persist visitorId, disabling tracking"),c.dispatch(s.LOAD_DIRECTIVE,{trackingDisabled:!0}),r=t,null!=(o=d.MismatchError)&&"undefined"!=typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](r):r instanceof o)throw _.error("Visitor / Cookie not set to correct value:",t),new Error("Cookie mismatch error while persisting visitorId");throw t}n.refreshSession()},n.getVariationIdMap=function(){return j(E.VARIATION_MAP)||{}},n.updateVariationIdMap=function(t,n,e){c.dispatch(s.UPDATE_VARIATION_ID_MAP,{layerId:t,experimentId:n,variationId:e})},n.persistVariationIdMap=function(){var t=N.getVariationIdMapString();P(E.VARIATION_MAP,t,!0)},n.getContextualMabMap=function(){return j(E.CONTEXTUAL_MAB)||{}},n.updateContextualMabMap=function(t,n,e){c.dispatch(s.UPDATE_CONTEXTUAL_MAB_MAP,{layerId:t,experimentId:n,variationData:e})},n.persistContextualMabMap=function(){var t=N.getContextualMabMapString();P(E.CONTEXTUAL_MAB,t,!0)},n.getOdpSegments=function(){return j(E.ODP_SEGMENTS)||{}},n.persistOdpSegments=function(t){P(E.ODP_SEGMENTS,t,!1)},n.getPreferredLayerMap=function(){return j(E.LAYER_MAP)||{}},n.updatePreferredLayerMap=function(t,n){c.dispatch(s.UPDATE_PREFERRED_LAYER_MAP,{groupId:t,layerId:n})},n.persistTrackerOptimizelyData=function(t){P(E.TRACKER_OPTIMIZELY,t)},n.refreshSession=function(){c.dispatch(s.REFRESH_SESSION)},n.populateEagerVisitorData=function(t,i){e(5010).time("populateEagerVisitorData");var r=Object.keys(t||{}).reduce((function(n,e){var i=t[e];return i.isLazy||n.push(i),n}),[]),o=n.populateVisitorData(r,i);return e(5010).time("populateEagerVisitorData"),o},n.populateLazyVisitorData=function(t,e,i){_.debug("Populating lazy visitor. List of all providers",t);var r=Object.keys(t||{}).reduce((function(n,e){var r=t[e];return r.isLazy&&i.has(r.provides)&&n.push(r),n}),[]);return _.debug("Filtered list of providers that are lazy and present in audiences",r),n.populateVisitorData(r,e)},n.populateVisitorData=function(t,n){n=n||{};var i=function(t){return function(t,n){var e=function(t,e){var i;n.attributionType&&(i=v.now()),c.dispatch(s.SET_VISITOR_ATTRIBUTES,{attributes:[{key:t,value:e,metadata:{lastModified:i}}]})};if(!n.getter)return;var i=n.provides;Array.isArray(i)||(i=[i]),!1;var r,o=n.isSticky&&void 0!==m.getFieldValue(t,i);if(o)return;try{var a=h.evaluate(n.getter);"function"==typeof a&&(a=a((function(){return m.getFieldValue(t,i)}),(function(t){e(i,t)}))),void 0!==a&&(n.isAsync?(r=a.then((function(t){e(i,t)}),(function(t){_.warn('Failed to evaluate provider for "'+n.provides+'"; error was:',t)})),c.dispatch(s.SET_VISITOR_ATTRIBUTE_PENDING,{key:i,pending:r})):e(i,a))}catch(t){_.warn('Failed to evaluate getter for provider for "'+n.provides+'"; error was: '+t.message)}return r}(n,t)},r=t.filter((function(t){return!0===t.isAsync})).map(i).filter(Boolean);return e(5010).time("visitorSyncProviders"),t.filter((function(t){return!t.isAsync})).forEach(i),e(5010).timeEnd("visitorSyncProviders"),r.length>0?y.all(r):y.resolve()},n.persistBehaviorEvents=function(t){P(E.EVENTS,t)},n.persistBehaviorEventQueue=function(t){P(E.EVENT_QUEUE,t)},n.getPersistedBehaviorEventCount=function(){var t=j(E.EVENTS)||[],n=j(E.EVENT_QUEUE)||[];return l.deserialize(t).length+l.deserialize(n).length},n.persistLayerStates=function(){var t=T.getLayerStates(n.getNamespace());t=t.map((function(t){return a(t,["namespace"])})),P(E.LAYER_STATES,t)},n.persistSessionState=function(){P(E.SESSION_STATE,R.getState())},n.persistVisitorProfile=function(){var t=function(){var t=D.getVisitorProfile(),n=D.getVisitorProfileMetadata(),e=O.getAllPlugins(p.PluginTypes.visitorProfileProviders);if(e){var i=Object.keys(e).reduce((function(t,n){var i=e[n];return i.provides&&(t[i.provides]=i),t}),{});t=u(t,(function(t,n){var e=i[n];return e&&e.isTransient}))}return{profile:t,metadata:n}}();P(E.VISITOR_PROFILE,t)},n.persistVisitorBucketingStore=function(){var t;n.persistVariationIdMap(),t=N.getPreferredLayerMapString(),P(E.LAYER_MAP,t,!0),n.persistContextualMabMap()},n.getUserIdFromKey=function(t,e){var i;return t.includes(e)&&t.includes("_")&&t.includes("$$")&&t.slice(t.indexOf("$$")).includes(n.getNamespace())&&(i=t.slice(t.indexOf("_")+1,t.indexOf("$$"))),i},n.maybePersistVisitorId=function(t){t.randomId&&(A.getAutoRefresh()||n.getCurrentId()!==t.randomId?(d.set(p.COOKIES.VISITOR_ID,t.randomId),_.log("Persisting visitorId:",t.randomId)):_.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},n.getAttribute=function(t){return D.getAttribute(t)},n.getPendingAttributeValue=function(t){return x.getPendingAttributeValue(t)},n.isForeignKey=U,n.checkKeyForVisitorId=function(t){var e=C.getBucketingId()||n.getCurrentId(),i=n.getIdFromKey(t);return!i||i===e},n.getIdFromKey=function(t){var e=t.split("$$")[0],i=n.getStorageKeyFromKey(t);if(Object.keys(p.StorageKeys).some((function(t){return p.StorageKeys[t]===i})))return null;var r=e.indexOf("_");return-1===r?e:e.substring(r+1)},n.getStorageKeyFromKey=function(t){var n,e=t.split("$$").pop();if(e.indexOf("://")>-1){var i=e.indexOf("_");n=e.substring(i+1)}else n=e;return Object.keys(p.AllStorageKeys).some((function(t){return p.AllStorageKeys[t]===n}))?n:null},n.deleteOldLocalData=function(){b.keys().forEach((function(t){n.isForeignKey(t)||n.checkKeyForVisitorId(t)||b.removeItem(t)}))},n.deleteOldForeignData=function(){b.keys().forEach((function(t){n.isForeignKey(t)&&b.removeItem(t)}))},n.loadForeignData=function(){b.keys().forEach((function(t){var n=b.getItem(t);n&&V(t,n)}))},n.getNamespace=function(){return S.getNamespace()},n.serializeFieldKey=function(t){return Array.isArray(t)?t.join("$$"):t},n.removeLegacySessionStateCookies=function(){var t=d.getAll();Object.keys(t).forEach((function(t){0===t.indexOf(p.COOKIES.SESSION_STATE+"$$")&&d.remove(t)}))}},9480:function(t,n,e){var i=e(6592);n.normalizeClientData=function(t){!t.listTargetingKeys&&t.listTargetingCookies&&(t.listTargetingKeys=t.listTargetingCookies.map((function(t){return{type:i.ListTargetingKeyTypes.COOKIE,key:t}})),delete t.listTargetingCookies)}},7786:function(t,n,e){e(2025).register("env/jquery",e(8138))},8138:function(t,n,e){var i,r=e(9454);try{i=$}catch(t){}var o=r.getGlobal("$");t.exports=i&&i!==o?i:o},673:function(t,n,e){e(8275).isEmpty,e(8130).C,e(8298);var i=e(2025),r=(e(1019),e(7852));e(9454),e(8260),i.get("stores/client_metadata"),i.get("stores/global");n.handleError=function(t,n){n?r.error("Uncaught error:",t,n):r.error("Uncaught error:",t)}},4439:function(t,n,e){var i=e(136),r=e(8841),o=e(8486),a=e(8130).v,u=e(9114),c=e(8339),s=e(2025).get("stores/directive"),f=e(1019),l=e(8421),d=e(409),v=e(7852),h=e(1760),p=e(123),g=e(2671).create(),m=1e3,b=10,_=a("ChangeOverheatError");function y(t,n){if(this.change=t,this.identifier=n.identifier,this.startTime=n.startTime,s.shouldObserveChangesIndefinitely()){d.dispatch(i.INITIALIZE_CHANGE_METRICS),this.rateMeter=new h(m);var e=null===b?Number.POSITIVE_INFINITY:b;this.rateMeter.addListener(e,function(){v.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),d.dispatch(i.RECORD_CHANGE_OVERHEATED),r.emitError(new _("Change "+this.identifier+" has overheated"),{layerId:n.action&&n.action.layerId,experimentId:n.action&&n.action.experimentId,variationId:n.action&&n.action.variationId,changeId:t.id,changeType:t.type,movingWindowMilliseconds:m,maxMacroTasksInMovingWindow:e})}.bind(this));for(var o=Math.min(e,50),a=0;a<=o;a++)this.rateMeter.addListener(a,function(t){return function(){d.dispatch(i.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:t})}}(a))}}y.prototype.numberOfRootNodes=function(t){var n=document.createElement("div");return n.innerHTML=t,n.childNodes.length},y.prototype.getSiblingElements=function(t,n,e){for(var i=t,r=[],o=0;o<n;o++)e?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},y.prototype.apply=function(){this.applyDeferred=c();try{if(!this.numberOfRootNodes(this.change.value))throw new Error("No DOM elements to be created for this change: "+this.change.value);var t=this.applyDeferred.reject.bind(this.applyDeferred,new Error("Unable to find selector.")),n={};s.shouldObserveChangesUntilTimeout()?n={timeout:p.isTimedOut.bind(null,this.startTime),onTimeout:t}:s.isEditor()&&g.waitUntil(p.isTimedOut.bind(null,this.startTime)).then(t,t),this.unobserveSelector=g.observeSelector(this.change.selector,this.maybeApplyToElement.bind(this),n);var e=f.querySelectorAll(this.change.selector),i=this;e.forEach((function(t){i.maybeApplyToElement(t)}))}catch(t){this.applyDeferred.reject(t)}return this.applyDeferred},y.prototype.maybeApplyToElement=function(t){var n=o.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(t.hasAttribute(n))return v.debug("Not applying AppendChange to element",t,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick(),this.applyOrReapplyToElement.bind(this,t,n)(),this.applyDeferred.resolve()},y.prototype.applyOrReapplyToElement=function(t,n){var e;switch(this.change.operator){case l.DOMInsertionType.AFTER:e=l.insertAdjacentHTMLType.AFTER_END;break;case l.DOMInsertionType.APPEND:e=l.insertAdjacentHTMLType.BEFORE_END;break;case l.DOMInsertionType.BEFORE:e=l.insertAdjacentHTMLType.BEFORE_BEGIN;break;case l.DOMInsertionType.PREPEND:e=l.insertAdjacentHTMLType.AFTER_BEGIN;break;default:e=l.insertAdjacentHTMLType.BEFORE_END}t.insertAdjacentHTML(e,this.change.value),t.setAttribute(n,""),u.setData(t,this.change.id,this.identifier,[]);var i,r,o=this.numberOfRootNodes(this.change.value)-1;e===l.insertAdjacentHTMLType.BEFORE_END?(i=t.lastChild,r=this.getSiblingElements(i,o,!1)):e===l.insertAdjacentHTMLType.AFTER_BEGIN?(i=t.firstChild,r=this.getSiblingElements(i,o,!0)):e===l.insertAdjacentHTMLType.BEFORE_BEGIN?(i=t.previousSibling,r=this.getSiblingElements(i,o,!1)):e===l.insertAdjacentHTMLType.AFTER_END&&(i=t.nextSibling,r=this.getSiblingElements(i,o,!0)),r.unshift(i);var a=this;r.forEach((function(t){var e=t.nodeType===Node.ELEMENT_NODE?t:f.parentElement(t);e.setAttribute(n,"");var i=u.getData(e,a.change.id,a.identifier)||[];i.push(t),u.setData(e,a.change.id,a.identifier,i),f.childrenOf(e).forEach((function(t){t.setAttribute(n,"")}))}))},y.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},t.exports=function(t){t.registerChangeApplier(l.changeType.APPEND,y)}},2636:function(t,n,e){var i=e(8339),r=e(8421),o=e(8484);function a(t,n){if("function"!=typeof t.value)throw new Error("Custom code must be a function");this.change=t}a.prototype.apply=function(){var t=i();try{o.apply(this.change.value),t.resolve()}catch(n){t.reject(n)}return t},t.exports=function(t){t.registerChangeApplier(r.changeType.CUSTOM_CODE,a)}},3037:function(t,n,e){var i=e(571),r=e(7353).b,o={selectExperiment:function(t,n,e){if(t.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var o=t.experiments[0];if(!i.isValidExperiment(n,o))throw new r('Audience conditions failed for experiment: "'+o.id+'".');return o}};t.exports=function(t){t.registerDecider("single_experiment",o),t.registerDecider("multivariate",o)}},6092:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.flatten,a=e(8620),u=e(2599),c=e(986);function s(t,n){var e=u.buildFromSpecV0_1(n);if(1!==e.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return c.execute(e[0],t)}function f(t,n){return t.map((function(t){return"function"==typeof t.toObject?t.toObject(n):t}))}function l(t,n){if(!t)return["Descriptor not defined"];var e=[];return t.count&&e.push('Unexpected "count" clause specified'),t.pick&&t.pick.modifier&&-1===n.indexOf(t.pick.modifier)&&e.push('Invalid "pick" modifier "'+t.pick.modifier+'"'),(t.filters||[]).forEach((function(t){void 0!==t.modifier&&e.push('Unexpected "filter" modifier "'+t.modifier+'"')})),e.length>0?e:void 0}function d(t,n){var e={revenueAsTag:!1,timeAsTimestamp:!0};if(void 0===n)return f(a.getEvents(t),e);if("number"==typeof n){if(n<=0)throw new Error("Count must be a positive integer, got "+n);return f(a.getEvents(t).slice(-n),e)}var i=l(n,Object.values(u.RECENCY_FILTERS));if(i)throw new Error(i.join("\n"));return f(s(a.getEvents(t),n),e)}function v(t,n){if(!(n=r(n)||{}).pick)throw new Error('No "pick" clause provided in query descriptor');if(!n.pick.name)throw new Error('No field name provided in "pick" clause');n.pick.modifier=n.pick.modifier||u.FREQUENCY_FILTERS.MOST_FREQUENT;var e=l(n,Object.values(u.FREQUENCY_FILTERS));if(e)throw new Error(e.join("\n"));return s(a.getEvents(t),n)}function h(t,n){var e=u.buildFromSpecV0_2(n),i=a.getEvents(t),r=f(c.execute(e,i),{revenueAsTag:!0,timeAsTimestamp:!1});return(n.pick||n.reduce&&"count"===n.reduce.aggregator)&&(r=o(r)),n.reduce&&(r=r[0]),r}t.exports=["stores/visitor_events",function(t){return{getEvents:d.bind(null,t),getByFrequency:v.bind(null,t),query:h.bind(null,t)}}]},6988:function(t,n,e){t.exports=function(t){t.registerApiModule("behavior",e(6092))}},1982:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(5937)),t.registerAudienceMatcher("behavior",e(2816))}},2816:function(t,n,e){var i=e(192),r=e(2599),o=e(986);t.exports={fieldsNeeded:["events"],match:function(t,n){var e=i.parse(n.value);return(void 0===e.version?[e]:r.buildFromSpecV0_1(e)).every((function(n){return o.isSatisfied(n,t.events)}))}}},5937:function(t,n,e){var i=e(8620);t.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}},9202:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(3377))}},3377:function(t,n,e){var i=e(4519),r=e(8620),o=e(192),a=e(2599);t.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(t,n){var e=t.getProjectId(),u=n.getCustomBehavioralAttributes(e).map((function(t){try{return{id:t.id,granularity:i.GRANULARITY.ALL,rule:a.buildFromSpecV0_2(o.parse(t.rule_json))}}catch(t){return}})).filter((function(t){return t})),c=r.getEvents();return i.evaluate(u,c)}]}},9401:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(725)),t.registerAudienceMatcher("first_session",e(2388))}},2388:function(t){t.exports={fieldsNeeded:["first_session"],match:function(t){return!!t.first_session}}},725:function(t,n,e){var i=e(1489),r=e(8620),o=e(8859).getFieldValue,a=e(7269).CURRENT_SESSION_INDEX;t.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var t=r.getEvents();if(t&&t.length>0){var n=t[0];return o(n,[i.FIELDS.SESSION_INDEX])===a}return!0}]}},4519:function(t,n,e){var i=e(7852),r={FIELDS:e(1489).FIELDS},o=e(2599),a=e(986);n.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},n.evaluate=function(t,e){var u={};if(0===e.length){for(var c=0;c<t.length;c++)u[t[c].id]=t[c].defaultValue;return u}var s=function(t){if(0===t.length)return[];for(var n=t.length-1,e=r.FIELDS.SESSION_ID,i=t[n][e];n>0&&i===t[n-1][e];)n--;return t.slice(n)}(e),f=function(t,n){if(0===t.length||n<=0)return[];var e=+new Date-n*o.MILLIS_IN_A_DAY;e-=e%o.MILLIS_IN_A_DAY;for(var i=t.length;i>0&&e<=t[i-1][r.FIELDS.TIME];)i--;return t.slice(i)}(e,60);for(c=0;c<t.length;c++){var l=t[c],d=e;l.granularity===n.GRANULARITY.CURRENT_SESSION?d=s:l.granularity===n.GRANULARITY.LAST_60_DAYS&&(d=f);try{var v=d;l.rule&&(v=a.execute(l.rule,d)),u[l.id]=l.defaultValue,1===v.length?u[l.id]=v[0][0]||l.defaultValue:i.debug("Behavior / Rule for",l.id,"returned",v.length,"results, expected 1")}catch(t){i.error("Behavior / Rule for",l.id,"failed with",t.message||"")}}return u}},8620:function(t,n,e){var i=e(4938),r=e(2025).get("stores/visitor_events");n.getEvents=function(){var t=i.getEvents(),n=[].concat.apply([],Object.values(r.getForeignEvents())),e=[].concat.apply([],Object.values(r.getForeignEventQueues())),o=i.mergeAllEvents([t,n,e]);return o.slice(o.length-1e3)}},2599:function(t,n,e){var i=n,r={FIELDS:e(1489).FIELDS,FIELDS_V0_2:e(1489).FIELDS_V0_2},o=e(192),a=e(7852),u=e(986);i.MILLIS_IN_A_DAY=864e5,i.aggregateField=function(t,n){return"string"==typeof n&&(n=[n]),n=n||u.DEFAULT_FIELD,[u.generateAlias(t,n)]},i.groupField=function(t){return"string"==typeof t&&(t=[t]),[(t=t||u.DEFAULT_FIELD).join(".")]};var c={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};function s(t){return t=(t||"").toString().trim(),c[t]||t}function f(t,n,e){var o={where:n};if(t.count&&(o.limit=t.count),t.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT){var a=i.getFieldKeyPathForSource(t.name,e),u=i.aggregate("count"),c=i.aggregateField("count"),s=i.groupField(a);return Object.assign(o,{select:[{field:s}],groupBy:i.groupBy([a]),aggregate:[u],orderBy:[{field:c,direction:"DESC"}]})}return Object.assign(o,{orderBy:[{field:[r.FIELDS.TIME],direction:"DESC"}]})}i.fieldComparison=function(t,n,e){return"string"==typeof n&&(n=[n]),"exists"===(t=s(t))?{op:t,args:[{field:n}]}:{op:t,args:[{field:n},{value:e}]}},i.relativeTimeComparison=function(t,n){return{op:s(t),args:[{op:"-",args:[{eval:"now"},{field:[r.FIELDS.TIME]}]},{value:n*i.MILLIS_IN_A_DAY}]}},i.rangeTimeComparison=function(t){return Array.isArray(t)?{op:"between",args:[{field:[r.FIELDS.TIME]},{value:[t[0]||+new Date(0),t[1]||+new Date]}]}:(a.error("Rule builder","rangeTimeComparison passed invalid range",t),null)},i.groupBy=function(t){for(var n=[],e=0;e<t.length;e++)n[e]={field:t[e]};return n},i.aggregate=function(t,n){return"string"==typeof n&&(n=[n]),{op:t,args:[{field:n=n||u.DEFAULT_FIELD}]}},i.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},i.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},i.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},i.getFieldKeyPathForSource=function(t,n){n=n||i.SOURCE_TYPES.BEHAVIOR;var e=[];return"string"==typeof t?(e=[t],n!==i.SOURCE_TYPES.BEHAVIOR||Object.values(r.FIELDS).includes(t)||(e=[r.FIELDS.OPTIONS,t])):e=t,e},i.buildFromSpecV0_1=function(t){if(!(t.action||t.filters&&0!==t.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+o.stringify(t));var n=i.fieldComparison("gt",r.FIELDS.TIME,0),e=[],u=[];if(t.action&&(u.push(i.fieldComparison("eq",r.FIELDS.NAME,t.action.value)),t.action.type&&u.push(i.fieldComparison("eq",r.FIELDS.TYPE,t.action.type))),t.time)if("last_days"===t.time.type)u.push(i.relativeTimeComparison("lte",t.time.days));else if("range"===t.time.type){var c=i.rangeTimeComparison([t.time.start,t.time.stop]);c&&u.push(c)}else a.error("Rule builder",'Audience spec has bad "time" type',t.time.type);if(n={op:"and",args:u},t.count&&e.push({where:i.fieldComparison(t.count.comparator,"0",t.count.value),from:{select:[{field:i.aggregateField("count")}],where:n,aggregate:[i.aggregate("count")]}}),t.filters&&t.filters.forEach((function(o){var a,c,s=i.getFieldKeyPathForSource(o.name,t.source);if(o.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT?(a=i.aggregate("count"),c=i.aggregateField("count")):o.modifier===i.RECENCY_FILTERS.MOST_RECENT&&(a=i.aggregate("max",r.FIELDS.TIME),c=i.aggregateField("max",r.FIELDS.TIME)),a){var f=s,l=i.groupField(f);e.push({where:i.fieldComparison(o.comparator,"0",o.value),from:{select:[{field:l}],where:n,groupBy:i.groupBy([f]),aggregate:[a],orderBy:[{field:c,direction:"DESC"}],limit:1}})}else u.push(i.fieldComparison(o.comparator,s,o.value))})),t.pick){if(e.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+o.stringify(t));return[f(t.pick,n,t.source)]}return e.length>0?e:[{where:n}]},i.buildFromSpecV0_2=function(t){!function(t){var n=[];if(void 0===t)throw new Error("rule is undefined");if("object"!=typeof t||null===t)throw new Error("rule is not an Object");"0.2"!==t.version&&n.push('version: not "0.2"'),t.filter&&(Array.isArray(t.filter)?t.filter.forEach((function(t,e){var r=i.validateFieldKeyPathV0_2(t.field,i.FieldPurpose.FILTER);r&&n.push("filter["+e+"]: "+r);var o=i.validateComparatorAndValue(t.comparator,t.value);o&&n.push("filter["+e+"]: "+o)})):n.push("filter: not an array"));var e=[],r=[];t.sort&&(t.reduce&&t.reduce.aggregator&&"nth"!==t.reduce.aggregator&&n.push("sort: superfluous because we can apply aggregator "+o.stringify(t.reduce.aggregator)+" to unsorted items"),Array.isArray(t.sort)?t.sort.forEach((function(t,a){var u=i.validateFieldKeyPathV0_2(t.field,i.FieldPurpose.SORT);u&&n.push("sort["+a+"]: "+u),t.field&&"frequency"===t.field[0]?e.push(t):r.push(t);var c=function(t){var n="direction "+(o.stringify(t)||String(t));if(!["ascending","descending"].includes(t))return n+' is not "ascending" or "descending"'}(t.direction);c&&n.push("sort["+a+"]: "+c)})):n.push("sort: not an array"),e.length&&r.length&&n.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),e.length&&!t.pick&&n.push('sort: sorting by ["frequency"] is impossible because no values have been picked'));if(t.pick){t.reduce&&"count"===t.reduce.aggregator&&n.push('pick: superfluous because we can apply aggregator "count" to raw events');var a=i.validateFieldKeyPathV0_2(t.pick.field);a&&n.push("pick: "+a)}if(t.reduce){var u=t.reduce.aggregator,c="aggregator "+(o.stringify(u)||String(u)),s=t.reduce.n,f="index "+(o.stringify(s)||String(s));["sum","avg","max","min","count","nth"].includes(u)||n.push("reduce: "+c+" is unknown"),["sum","avg","max","min"].includes(u)&&(t.pick||n.push("reduce: "+c+" is impossible to use because no values have been picked")),"nth"===u?(("number"!=typeof s||isNaN(s)||Math.floor(s)!==s||s<0)&&n.push("reduce: "+f+" is not a non-negative integer (mandated by "+c+")"),t.sort||n.push('reduce: aggregator "nth" is meaningless without a specific sort order')):void 0!==s&&n.push("reduce: "+f+" is defined (not mandated by "+c+")")}if(n.length)throw new Error(n.join("\n"))}(t);var n={where:{op:"and",args:(t.filter||[]).map((function(t){return"age"===t.field[0]?i.relativeTimeComparison(t.comparator||"eq",t.value/i.MILLIS_IN_A_DAY):i.fieldComparison(t.comparator||"eq",i.convertFieldKeyPathFromSpecV0_2(t.field),t.value)}))}};if(t.reduce&&"count"===t.reduce.aggregator)return Object.assign(n,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var e=[],r=[];if(t.sort&&(t.sort.forEach((function(t){["ascending","descending"].includes(t.direction)&&(["time","age"].includes(t.field[0])&&r.push(t),"frequency"===t.field[0]&&e.push(t))})),r.length&&!e.length&&(n.orderBy=r.map((function(t){return"time"===t.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===t.direction?"ASC":"DESC"}:"age"===t.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===t.direction?"DESC":"ASC"}:void 0})).filter((function(t){return t})))),t.pick&&t.pick.field){var a=i.convertFieldKeyPathFromSpecV0_2(t.pick.field);if(t.reduce&&["avg","max","min","sum"].includes(t.reduce.aggregator))return Object.assign(n,{aggregate:[{op:t.reduce.aggregator,args:[{field:a}]}],select:[{field:[u.generateAlias(t.reduce.aggregator,a)]}]});n=e.length?Object.assign(n,{groupBy:[{field:a}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===e[0].direction?"ASC":"DESC"}],select:[{field:[a.join(".")]}]}):Object.assign(n,{select:[{field:a}]})}if(t.reduce&&"nth"===t.reduce.aggregator){var c=t.reduce.n;if("number"==typeof c&&c>=0&&Number(c)===Math.floor(Number(c)))return Object.assign(n,{offset:c,limit:1})}return n},i.convertFieldKeyPathFromSpecV0_2=function(t){return"tags"===t[0]&&"revenue"===t[1]?["r"]:[r.FIELDS_V0_2[t[0]]].concat(t.slice(1))},i.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},i.validateFieldKeyPathV0_2=function(t,n){var e="field "+(o.stringify(t)||String(t));if(!Array.isArray(t)||!t.every((function(t){return"string"==typeof t})))return e+" is not an array of strings";if("tags"===t[0]&&t.length>2||"tags"!==t[0]&&t.length>1)return e+" includes too many strings";if("tags"===t[0]&&t.length<2)return e+" does not specify an exact tag";if(t.length<1)return e+" does not specify a top-level field";var a=Object.keys(r.FIELDS_V0_2),u=["age","frequency"];return n===i.FieldPurpose.FILTER&&(a.push("age"),u=["frequency"]),n===i.FieldPurpose.SORT&&(a=["time","age","frequency"],u=["name","type","category","tags"]),u.includes(t[0])?e+" is not supported here":a.includes(t[0])?void 0:e+" is unknown"},i.validateComparatorAndValue=function(t,n){var e="comparator "+(o.stringify(t)||String(t)),i="value "+(o.stringify(n)||String(n));if("string"!=typeof t&&void 0!==t)return e+" is not a string";switch(t){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if("number"!=typeof n)return i+" is not a number (mandated by "+e+")";break;case"in":if(!Array.isArray(n))return i+" is not an array (mandated by "+e+")";break;case"between":if(!(Array.isArray(n)&&2===n.length&&"number"==typeof n[0]&&"number"==typeof n[1]&&n[0]<=n[1]))return i+" is not a pair of increasing numbers (mandated by "+e+")";break;case"regex":if(!("string"==typeof n||Array.isArray(n)&&2===n.length&&"string"==typeof n[0]&&"string"==typeof n[1]))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+e+")";break;case"exists":if(void 0!==n)return i+" is not undefined (mandated by "+e+")";break;default:return e+" is unknown"}}},986:function(t,n,e){var i=e(6592),r=e(7852),o=r.log.bind(r),a=e(8298),u=e(8859).getFieldValue,c=e(192),s=function(t,n,e){if(t.getValueOrDefault)return t.getValueOrDefault(n,e);if(!Array.isArray(n))return e;var i=u(t,n);return void 0===i&&(i=e),i},f=function(t){return"string"==typeof t?t.trim().toLowerCase():t};n.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},n.DEFAULT_FIELD=["*"],n.booleanOperators={eq:function(t){var n=t.map(f);return n[0]==n[1]},is:function(t){return t[0]===t[1]},gt:function(t){return t[0]>t[1]},lt:function(t){return t[0]<t[1]},gte:function(t){return t[0]>=t[1]},lte:function(t){return t[0]<=t[1]},in:function(t){return(t[1]||[]).map(f).includes(f(t[0]))},between:function(t){return t[1][0]<=t[0]&&t[0]<=t[1][1]},contains:function(t){var n=t.map((function(t){return"string"==typeof t?t.toLowerCase():t}));return-1!==(n[0]||"").indexOf(n[1])},regex:function(t){try{var n,e;return"string"==typeof t[1]?(n=t[1],e="i"):(n=t[1][0]||"",e=t[1][1]||""),new RegExp(n,e).test(t[0])}catch(t){return r.error("Rules",'In operator "regex", error: '+(t.message||"invalid RegExp /"+[n,e].join("/"))),!1}},exists:function(t){return void 0!==t[0]},and:function(t){return t.every((function(t){return t}))},or:function(t){return t.some((function(t){return t}))},not:function(t){return!t[0]}},n.arithmeticOperators={"+":function(t){return(t[0]||0)+(t[1]||0)},"-":function(t){return(t[0]||0)-(t[1]||0)},"/":function(t){return(t[0]||0)/(t[1]||1)},"%":function(t){return(t[0]||0)%(t[1]||1)}},n.aggregateOperators={sum:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=s(e[o],i,0);return r},avg:function(t,e){if(0===e.length)return 0;for(var i=t[0]||n.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=s(e[o],i,0);return r/e.length},max:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,o=0;o<e.length;o++)r=Math.max(r,s(e[o],i,Number.NEGATIVE_INFINITY));return r},min:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,o=0;o<e.length;o++)r=Math.min(r,s(e[o],i,Number.POSITIVE_INFINITY));return r},count:function(t,n){return n.length}};var l={now:function(){return a.now()}},d=function(t,e){if(e.hasOwnProperty("value"))return e.value;if(e.hasOwnProperty("field"))return s(t,e.field);if(e.hasOwnProperty("eval"))return e.eval in l?l[e.eval]():void r.error("Rules","Unknown function: "+e.eval);if(e.op){var i,o=(i=e.op)in n.booleanOperators?n.booleanOperators[i]:i in n.arithmeticOperators?n.arithmeticOperators[i]:null;if(o){var a=d.bind(null,t);return o((e.args||[]).map((function(t){return a(t)})),t)}r.error("Rules","Unknown operator: "+e.op)}else r.error("Rules","No operator specified: "+c.stringify(e))};n.generateAlias=function(t,n){return"_"+t+"_"+n.join(".")};n.rewrite=function(t){var e=[],i={};function o(t,a){if(Array.isArray(t)&&("and"!==t[0]&&"or"!==t[0]&&"not"!==t[0]&&r.error("Rules","Unexpected operation "+t[0]+". Continuing optimistically."),t={op:t[0],args:t.slice(1)}),t.hasOwnProperty("field")||t.hasOwnProperty("value")||t.hasOwnProperty("eval"))return t;if(a&&t.op in n.aggregateOperators){var u=(t.args&&t.args[0]||{}).field||n.DEFAULT_FIELD,c=n.generateAlias(t.op,u);return c in i||(e.push({op:t.op,args:t.args}),i[c]=!0),{field:[c]}}for(var s=[],f=t.args||[],l=0;l<f.length;l++)s[l]=o(f[l],a);return{op:t.op,args:s}}var a={};t.hasOwnProperty(n.clause.WHERE)&&(a[n.clause.WHERE]=o(t[n.clause.WHERE],!1)),t.hasOwnProperty(n.clause.HAVING)&&(a[n.clause.HAVING]=o(t[n.clause.HAVING],!0)),(t.hasOwnProperty(n.clause.AGGREGATE)||e.length>0)&&(a[n.clause.AGGREGATE]=(t[n.clause.AGGREGATE]||[]).concat(e));for(var u=[n.clause.GROUP_BY,n.clause.ORDER_BY,n.clause.SELECT,n.clause.OFFSET,n.clause.LIMIT],c=0;c<u.length;c++)t.hasOwnProperty(u[c])&&(a[u[c]]=t[u[c]]);return t.hasOwnProperty(n.clause.FROM)&&(a[n.clause.FROM]=n.rewrite(t[n.clause.FROM])),a};var v=function(t,e){e=e||0;var i=[];if(t.hasOwnProperty(n.clause.WHERE)?t[n.clause.WHERE].op?t[n.clause.WHERE].op in n.booleanOperators||i.push("Non-boolean WHERE clause operator"):i.push("Missing WHERE clause operator"):i.push("Missing WHERE clause"),!t.hasOwnProperty(n.clause.HAVING)||(t[n.clause.HAVING].op?t[n.clause.HAVING].op in n.booleanOperators||i.push("Non-boolean HAVING clause operator"):i.push("Missing HAVING clause operator")),t.hasOwnProperty(n.clause.GROUP_BY)&&!t.hasOwnProperty(n.clause.AGGREGATE)&&i.push("No AGGREGATE clause specified with GROUP_BY clause"),t.hasOwnProperty(n.clause.SELECT)){var r=t[n.clause.SELECT];if(Array.isArray(r))for(var o=0;o<r.length;o++)r[o].op&&r[o].op in n.aggregateOperators&&i.push('In SELECT clause, aggregate operator "'+r[o].op+'" specified in selector at index '+o);else i.push("SELECT clause must be an array")}if(t.hasOwnProperty(n.clause.OFFSET)){var a=t[n.clause.OFFSET];("number"!=typeof a||Number(a)<0||Number(a)!==Math.floor(Number(a)))&&i.push("OFFSET must be a non-negative integer")}if(t.hasOwnProperty(n.clause.LIMIT)){var u=t[n.clause.LIMIT];("number"!=typeof u||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&i.push("LIMIT must be a non-negative integer")}return e>0&&(i=i.map((function(t){return"Sub-rule "+e+": "+t}))),t.hasOwnProperty(n.clause.FROM)&&(i=i.concat(v(t[n.clause.FROM],e+1))),i},h=function(t,i){e(5010).time("rulesExecuteRecursively");var a,u,f,l=i;if(t.hasOwnProperty(n.clause.FROM)&&(r.debug("Evaluating FROM clause:",t[n.clause.FROM]),l=h(t[n.clause.FROM],l),r.debug("Results after FROM:",l)),r.debug("Evaluating WHERE clause:",t[n.clause.WHERE]),l=l.filter((function(e){return d(e,t[n.clause.WHERE])})),r.debug("Results after WHERE:",l),t.hasOwnProperty(n.clause.AGGREGATE)){r.debug("Evaluating AGGREGATE clause:",t[n.clause.AGGREGATE]);var v=function(t,n){var e={};if(void 0===t||!Array.isArray(t)||0===t.length)return e["*"]={fieldValues:{},events:n},e;for(var i=t.map((function(t){return t.field})),r=0;r<n.length;r++){for(var o=n[r],a=[],u={},f=0;f<i.length;f++){var l=i[f],d=s(o,l),v=l.join(".");u[v]=d,a.push(encodeURIComponent(v)+"="+encodeURIComponent(c.stringify(d)))}var h=a.join("&");e.hasOwnProperty(h)||(e[h]={fieldValues:u,events:[]}),e[h].events.push(o)}return e}(t[n.clause.GROUP_BY],l);l=function(t,n){var e=[];return Object.keys(t).forEach((function(i){var r=t[i],o=Object.assign({},r.fieldValues),a=n[i]||{};Object.assign(o,a),e.push(o)})),e}(v,(a=t[n.clause.AGGREGATE],u=v,f={},Object.keys(u).forEach((function(t){var e=u[t];f[t]={};for(var i=0;i<a.length;i++){var o=a[i],c=o.op;if(c in n.aggregateOperators){var s=(o.args&&o.args[0]||{}).field||n.DEFAULT_FIELD,l=n.generateAlias(c,s),d=n.aggregateOperators[c]([s],e.events);f[t][l]=d}else r.error("Rules","Unknown aggregate operator "+c)}})),f)),r.debug("Results after AGGREGATE:",l)}t.hasOwnProperty(n.clause.HAVING)&&(r.debug("Evaluating HAVING clause:",t[n.clause.HAVING]),l=l.filter((function(e){return d(e,t[n.clause.HAVING])})),r.debug("Results after HAVING:",l)),t.hasOwnProperty(n.clause.ORDER_BY)&&(r.debug("Evaluating ORDER_BY clause:",t[n.clause.ORDER_BY]),l=function(t,n){return Array.isArray(t)?0===t.length?n:n.sort((function(n,e){for(var i=0;i<t.length;i++){var r=t[i],o="ASC"===(r.direction||"ASC")?1:-1,a=r.field,u=s(n,a,0),c=s(e,a,0);if(u<c)return-o;if(u>c)return o}return 0})):(o("Rules","groupBy rule must be an array"),n)}(t[n.clause.ORDER_BY],l),r.debug("Results after ORDER_BY:",l));var p,g=0;return t.hasOwnProperty(n.clause.OFFSET)&&(r.debug("Evaluating OFFSET clause:",t[n.clause.OFFSET]),g=Number(t[n.clause.OFFSET])),t.hasOwnProperty(n.clause.LIMIT)&&(r.debug("Evaluating LIMIT clause:",t[n.clause.LIMIT]),p=g+Number(t[n.clause.LIMIT])),(g>0||void 0!==p)&&(l=l.slice(g,p),r.debug("Results after OFFSET/LIMIT:",l)),t.hasOwnProperty(n.clause.SELECT)&&(r.debug("Evaluating SELECT clause:",t[n.clause.SELECT]),l=function(t,n){return n.map((function(n){return t.map((function(t){return d(n,t)}))}))}(t[n.clause.SELECT],l),r.debug("Results after SELECT:",l)),e(5010).timeEnd("rulesExecuteRecursively"),l};n.execute=function(t,e){t=n.rewrite(t),r.shouldLog(i.LogLevel.DEBUG)&&r.groupCollapsed("Evaluating Behavioral Rule"),r.debug("Rule:",t,c.stringify(t)),r.debug("Events:",e);var o=v(t);if(o.length>0)throw new Error("Rule "+c.stringify(t)+" has violations: "+o.join("\n"));var a=h(t,e);return r.debug("Rule result:",a),r.shouldLog(i.LogLevel.DEBUG)&&r.groupEnd(),a},n.isSatisfied=function(t,e){try{return n.execute(t,e).length>0}catch(n){return r.error("Rules","Error "+n.toString()+" while evaluating rule "+c.stringify(t)),!1}}},9728:function(t,n,e){t.exports=function(t){t.registerDependency("sources/browser_id",e(4977)),t.registerVisitorProfileProvider(e(381)),t.registerVisitorProfileProvider(e(4138)),t.registerAudienceMatcher("browser_version",e(5374))}},5374:function(t,n,e){var i=e(2424).G;t.exports={fieldsNeeded:["browserVersion","browserId"],match:function(t,n){var e=n.value,r=t.browserId,o=t.browserVersion;if(0===e.indexOf(r)){var a=e.substr(r.length);return 0===i(o,a)}return!1}}},381:function(t){t.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(t){return t.getId()}]}},4138:function(t){t.exports={provides:"browserVersion",getter:["sources/browser_id",function(t){return t.getVersion()}]}},4977:function(t,n,e){var i=e(3498);n.getId=function(){return i.get().browser.id},n.getVersion=function(){return i.get().browser.version}},2163:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9298)),t.registerAudienceMatcher("campaign",e(7701))}},7701:function(t,n,e){var i=e(2973);t.exports={fieldsNeeded:["campaign"],match:function(t,n){return i.hasMatch(n.value,n.match,t.campaign)}}},9298:function(t,n,e){var i=e(6022);t.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}},8983:function(t,n,e){var i=e(192),r=e(8260),o=e(7852),a=e(4285),u=e(8264);n.getCmabPredictionUrl=function(){return"https://prediction.cmab.optimizely.com/predict"},n.getCmabPredictionUrlForExperiment=function(t){return t?n.getCmabPredictionUrl()+"/"+t:""},n.createPayload=function(t,n){var e=t.variations.map((function(t){return t.id})),i=u.getVisitorCmabAttributesForExperiment(t),r=u.getDcpCustomerIds(),o=u.getDcpServiceId();return{instances:[{visitorId:a.getCurrentId(),experimentId:t.id,cmabUUID:n,variationIds:e,attributes:i,dcpCustomerIds:r,dcpServiceId:o}]}},n.parseApiResponse=function(t){var n=null;try{n=i.parse(t)}catch(t){return o.error("CMAB API / Error parsing response:",t),null}return n&&n.predictions&&0!==n.predictions.length?n.predictions[0].variation_id.toString():(o.debug("CMAB API / No predictions found in API response",n),null)},n.validateVariationId=function(t,n){return t&&n.variations.find((function(n){return n.id===t}))?(o.debug("CMAB API / Variation ID:",t,"from API response found in experiment:",n.id),t):(o.debug("CMAB API / Variation ID:",t,"from API response not found in experiment:",n.id),null)},n.handleCmabApiResponse=function(t,e){if(200!==t.status)return o.error("CMAB API / API call failed with status:",t.status,t.statusText),null;o.debug("CMAB API / API call successful:",t.responseText);var i=n.parseApiResponse(t.responseText);return n.validateVariationId(i,e)},n.makeSyncApiCallWithXHR=function(t,e){o.debug("CMAB API / SYNC / Making a synchronous API call to get variation.");try{var r=n.createPayload(t,e),a=n.getCmabPredictionUrlForExperiment(t.id),u=new XMLHttpRequest;return u.open("POST",a,!1),u.send(i.stringify(r)),n.handleCmabApiResponse(u,t)}catch(t){return o.error("CMAB API / SYNC / API call encountered an error:",t),null}},n.makeAsyncApiCall=function(t,e){o.debug("CMAB API / ASYNC / Making an asynchronous API call to get variation.");var i=n.createPayload(t,e),a=n.getCmabPredictionUrlForExperiment(t.id);return r.request({url:a,contentType:"application/json",method:"POST",data:i})}},2855:function(t,n,e){var i=e(7852),r=e(8264),o=e(8983),a=e(4855);n.isCmabEnabled=function(){return!0},n.isExperimentSyncApiEnabled=function(t){return!0},n.defaultToSnippetBucketing=function(t,n,e){i.debug("CMAB / Defaulting to snippet bucketing with variation:",n,"for experiment:",t.id),r.setCmabVariationDataInVisitorStore(t,n,e)},n.processCmabExperiment=function(t,e){if(!n.isCmabEnabled())return i.debug("CMAB / Feature flag is disabled. Defaulting to snippet bucketing with variation:",e,"for experiment:",t.id),e;if(i.debug("CMAB / Feature flag is enabled. Processing CMAB for experiment:",t.id),r.activateTimeoutForNonBucketedCmabExperiments(t),!r.isCmabExperiment(t))return e;var u=r.getCmabVariationDataFromVisitorStore(t);if(!r.isCmabTimeout(t,u))return u.variationId;a.startCmabApiCallPerformanceTimer(t.id);var c=null,s=r.generateCmabUUID();if(n.isExperimentSyncApiEnabled(t))try{return(c=o.makeSyncApiCallWithXHR(t,s))?(r.setCmabVariationDataInVisitorStore(t,c,s),a.endCmabApiCallPerformanceTimer(t.id),c):(n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),e)}catch(r){return i.error("CMAB API / SYNC / API call failed with error:",r),n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),null}return o.makeAsyncApiCall(t,s).then((function(u){return(c=o.handleCmabApiResponse(u,t))?(i.debug("CMAB API / ASYNC / Variation:",c,"for experiment:",t.id),r.setCmabVariationDataInVisitorStore(t,c,s),a.endCmabApiCallPerformanceTimer(t.id),c):(n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),e)}),(function(r){return i.error("CMAB API / ASYNC / API call failed with error:",r),n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),null})),n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),e},n.getCmabUUIDAndUpdateSessionTimeout=function(t,n){var e=r.getCmabUUIDFromVisitorStore(t,n);return r.updateCmabTimeoutInVisitorStore(t,n),e}},4855:function(t,n,e){var i=e(5010),r=e(7852),o=null;n.startCmabApiCallPerformanceTimer=function(t){i.timeEnd("sendCmabApiInitiateCall"),i.time("sendCmabApiCall"),o=(new Date).getTime(),r.debug("CMAB / Performance / API call initiated for experiment: "+t)},n.endCmabApiCallPerformanceTimer=function(t){i.timeEnd("sendCmabApiCall"),r.debug("CMAB / Performance / API call took: "+((new Date).getTime()-o)+"ms for experiment: "+t)}},8264:function(t,n,e){var i=e(8275),r=i.omit,o=i.omitBy,a=e(1691),u=e(192),c=e(2025),s=e(9899),f=e(4285),l=e(7852),d=e(6592),v=e(5914),h=c.get("stores/visitor"),p=c.get("stores/plugins"),g=c.get("stores/global"),m=c.get("stores/layer");n.generateCmabUUID=function(){return s.generate()},n.getCmabLayerIdFromExperiment=function(t){return t.experimentMetadata&&t.experimentMetadata.layerId||t.id},n.isCmabExperiment=function(t){var n=t.experimentMetadata&&t.experimentMetadata.allocationPolicy;return n?n===d.AllocationPolicyEnum.CMAB:(l.debug("No allocation policy found in metadata for experiment:",t.id),!1)},n.isVisitorInHoldback=function(t){if(g.isGlobalHoldback())return l.debug("CMAB / Visitor is in global holdback, no timeout"),!0;var e=n.getCmabLayerIdFromExperiment(t),i=m.getLayerState(e);return!!(i&&i.decision&&i.decision.isLayerHoldback)&&(l.debug("CMAB / Visitor is in layer holdback, no timeout"),!0)},n.isCmabTimeout=function(t,e){if(!n.isCmabVariationStorageDataValid(e))return l.debug("CMAB / Timeout CMAB Storage Variation Data is invalid"),!0;if(n.isVisitorInHoldback(t))return!1;var i=e.variationId;return t.variations.find((function(t){return t.id===i}))?n.hasSessionOrAbsoluteTimeoutOccurred(e)?(l.debug("CMAB / Timeout Session or absolute timeout occurred:",e.cmabUUID),!0):(l.debug("CMAB / No timeout happened for:",e.cmabUUID),!1):(l.debug("CMAB / Timeout Variation ID:",i,"not found in experiment:",t.id),!0)},n.hasSessionOrAbsoluteTimeoutOccurred=function(t){if(!n.isCmabVariationStorageDataValid(t))return l.debug("CMAB / Timeout CMAB Storage Variation Data is invalid"),!0;var e=(new Date).getTime();new Date(t.stSessionTimeout).getTime();return e-new Date(t.stAbsoluteTimeout).getTime()>864e5},n.isCmabVariationStorageDataValid=function(t){if(!t)return!1;for(var n=["variationId","visitorId","cmabUUID","stSessionTimeout","stAbsoluteTimeout","userAttributeHash"],e=0;e<n.length;e++){var i=n[e];if(!t[i])return l.debug("CMAB / Storage data not found: "+i+" is missing"),!1}return!0},n.activateTimeoutForNonBucketedCmabExperiments=function(t){var e=n.getCmabLayerIdFromExperiment(t),i=t.id;l.debug("CMAB / Visitor is bucketed into experiment id:",i+" from layer id:",e);var a=f.getContextualMabMap();if(a&&a[e]){var u=a[e];l.debug("CMAB / All CMAB experiments found for the layer id:",e,"are:",u),l.debug("CMAB / Excluding the currently bucketed experiment id: ",i," from all CMAB experiments found for the current layer id: ",e);var c=r(u,[i]);c=o(c,(function(t){return t.isTimeout})),l.debug("CMAB / Non-bucketed CMAB experiments which will be timed out:",c),Object.keys(c).forEach((function(t){var n=c[t];n.isTimeout=!0,f.updateContextualMabMap(e,t,n)})),f.persistContextualMabMap()}else l.debug("CMAB / No CMAB experiments found for the current layer id:",e)},n.getCmabUUIDFromVisitorStore=function(t,n){if(!n||!t)return null;var e=f.getContextualMabMap();return e&&e[t]&&e[t][n]?e[t][n].cmabUUID:null},n.updateCmabTimeoutInVisitorStore=function(t,e){var i;if(!e||!t)return null;var r=f.getContextualMabMap();if(null==r||null==(i=r[t])?void 0:i[e]){var o=r[t][e];o.isTimeout||n.hasSessionOrAbsoluteTimeoutOccurred(o)||(o.stSessionTimeout=(new Date).toISOString(),f.updateContextualMabMap(t,e,o),f.persistContextualMabMap())}},n.getCmabVariationDataFromVisitorStore=function(t){var e,i=n.getCmabLayerIdFromExperiment(t),r=f.getContextualMabMap();if(!(null==r||null==(e=r[i])?void 0:e[t.id]))return l.debug("CMAB / No CMAB store found for experiment:",t.id),null;l.debug("CMAB / CMAB store found for experiment:",t.id);var o=r[i][t.id];return l.debug("CMAB / Contextual MAB Variation Data:",o),o},n.setCmabVariationDataInVisitorStore=function(t,e,i){l.debug("CMAB / Setting CMAB store for experiment:",t.id+" with variation:",e+" and cmabUUID:",i);var r=(new Date).toISOString(),o=n.getCmabLayerIdFromExperiment(t),a=n.getVisitorAttributesHash(t),u={variationId:e,visitorId:f.getCurrentId(),cmabUUID:i,stSessionTimeout:r,stAbsoluteTimeout:r,userAttributeHash:a,isTimeout:!1};f.updateContextualMabMap(o,t.id,u),f.persistContextualMabMap()},n.getStringifiedValue=function(t){if("string"==typeof t)return t;var n="";try{n=u.stringify(t)}catch(n){l.error("CMAB / Failed to stringify value for attributes:",t,n)}return n},n.getVisitorCmabAttributesForExperiment=function(t,i){var r;void 0===i&&(i=!0);var o=[],a=p.getAllPlugins(d.PluginTypes.audienceMatchers);if(!(null==t||null==(r=t.experimentMetadata)?void 0:r.cmabAttributes))return o;var u=t.experimentMetadata.cmabAttributes,c=u.customAttributes,s=u.standardAttributes;if(c.forEach((function(t){var e,i=(null==(e=h.getAttribute(["custom",t.id]))?void 0:e.value)||"";i=n.getStringifiedValue(i),o.push({id:t.id,type:t.type,value:i,client_api_name:t.clientApiName})})),s.forEach((function(t){var e,i,r=(null==(e=a[t.id])||null==(i=e.fieldsNeeded)?void 0:i[0])||t.id,u=h.getAttribute(r)||"";u=n.getStringifiedValue(u),o.push({id:t.id,type:t.type,value:u})})),i){var f=e(5560),v=t.experimentMetadata.cmabAttributes.vbaAttributes;if(v&&v.length)try{var g=e(8620).getEvents();g.length>=e(4938).MAX_EVENTS&&l.warn("CMAB / VBA / Behavior store is full; counts may miss evicted events"),o=o.concat(f.buildVbaFeatures(v,g,e(8298).now()))}catch(t){l.warn("CMAB / VBA / Error building visitor behavior attributes",t)}}return l.debug("CMAB / Current Visitor CMAB Attributes for Experiment:",t.id,"are:",o),o},n.generateAttributesHash=function(t){return a.hashToHex(a.toByteString(u.stringify(t)),a.Seed.BEHAVIOR_EVENT)},n.getVisitorAttributesHash=function(t){var e=n.getVisitorCmabAttributesForExperiment(t,!1);return n.generateAttributesHash(e)},n.hasAttributesChanged=function(t,e){var i=n.getVisitorAttributesHash(t);return i!==e.userAttributeHash&&(l.debug("CMAB / User attributes hash has changed from:",e.userAttributeHash," to ",i),!0)},n.getDcpCustomerIds=function(){var t=g.getDCPKeyfieldLocators(),n=f.getCurrentId();return v.getCurrentAliases(t,n)},n.getDcpServiceId=function(){return g.getDCPServiceId()}},5560:function(t,n,e){var i=e(1489),r=e(7852),o=Object.freeze([]);function a(t,n){return t&&"function"==typeof t.getValueOrDefault?t.getValueOrDefault([n]):t&&t[n]}function u(t){return a(t,i.FIELDS.TYPE)}function c(t){return a(t,i.FIELDS.TIME)}function s(t,n){return(t||"")+"\n"+n}n.buildVbaFeatures=function(t,n,e){for(var f=function(t){for(var n=Object.create(null),e=0;e<t.length;e++){var r=a(t[e],i.FIELDS.NAME),o=c(t[e]);if("string"==typeof r&&"number"==typeof o)for(var f=u(t[e]),l=f?[s("",r),s(f,r)]:[s("",r)],d=0;d<l.length;d++)n[l[d]]||(n[l[d]]=[]),n[l[d]].push(o)}return n}(n||[]),l=[],d=0;d<t.length;d++){var v=t[d];if(v&&"string"==typeof v.featureName&&v.featureName){var h=v.vbaWindow;if("number"!=typeof h||!isFinite(h)||h%1!=0||h<=0)r.warn("CMAB / VBA / skipping",v.featureName,"with window:",v.vbaWindow);else{for(var p=e-864e5*h,g=f[s(v.vbaKind,v.id)]||o,m=0,b=0;b<g.length;b++)g[b]>p&&g[b]<=e&&m++;l.push({id:v.featureName,type:"visitor_behavior_attribute",value:m})}}else r.warn("CMAB / VBA / skipping attribute with no featureName:",v)}return l}},9004:function(t,n,e){t.exports=function(t){t.registerAudienceMatcher("code",e(8937))}},8937:function(t,n,e){var i=e(8484);n.fieldsNeeded=[],n.match=function(t,n){if(void 0===n.value)return!0;if("function"==typeof n.value)try{return Boolean(i.apply(n.value))}catch(t){return!1}else try{return Boolean(i.eval(n.value))}catch(t){return!1}}},8252:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9102)),t.registerAudienceMatcher("cookies",e(2145))}},2145:function(t,n,e){var i=e(2973);t.exports={fieldsNeeded:["cookies"],match:function(t,n){var e=n.name,r=n.value,o=n.match,a=t.cookies[e];return i.hasMatch(r,o,a)}}},9102:function(t,n,e){var i=e(6278),r=e(2025).get("stores/audience_data");t.exports={provides:"cookies",isLazy:!0,getter:[function(){var t=i.getAll(),n=r.getFeaturesNeeded("cookies");return Object.keys(t).reduce((function(e,i){var r=t[i];return Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=r),e}),{})}]}},2085:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(5532));var n=e(4417);t.registerAudienceMatcher("custom_attribute",n),t.registerAudienceMatcher("custom_dimension",n)}},4417:function(t,n,e){var i=e(2973);n.match=function(t,n){var e;return t.custom&&(e=t.custom[n.name]),"object"==typeof e&&null!==e&&(e=e.value),i.hasMatch(n.value,n.match,e)}},5532:function(t,n,e){var i=e(6592),r=e(7852),o=e(2025).get("stores/dimension_data");t.exports={provides:"custom",attributionType:i.AttributionTypes.LAST_TOUCH,restorer:function(t){return Object.keys(t).reduce((function(n,e){var i=t[e],a=e,u=o.getByApiName(e),c=o.getById(e);return"object"!=typeof i||null===i?(r.error('Unable to restore custom attribute "'+e+'" because value is not an object'),n):(!i.id&&u&&(c=u,a=u.id,Object.assign(i,{id:c.segmentId||c.id})),!i.name&&c&&c.apiName&&(i.name=c.apiName),i.id||c||r.warn("Unable to determine ID for custom attribute:",e,"; segmentation is disabled."),n[a]=i,n)}),{})},shouldTrack:!0}},5914:function(t,n,e){var i=e(6022),r=e(6278),o=e(7852),a=e(9454),u="cookie",c="js_variable",s="query_param",f="uid";n.getCurrentAliases=function(t,n){var e={};return t.forEach((function(t){if(!t.is_optimizely){var l=t.dcp_datasource_id,d=t.type,v=t.name||"";if(l){var h=null;switch(d){case u:h=r.get(v);break;case c:try{h=a.getGlobal(v)}catch(t){o.warn("Failed getting global DCP keyfieldLocator:",v)}break;case s:h=i.getQueryParamValue(v);break;case f:h=n}("number"==typeof h||"string"==typeof h)&&(e[l]=h)}else o.error("DCP / No DCP datasource id specified")}})),e}},6591:function(t,n,e){t.exports=function(t){t.registerDependency("sources/device",e(8822)),t.registerVisitorProfileProvider(e(2422)),t.registerAudienceMatcher("device",e(1125))}},1125:function(t){t.exports={fieldsNeeded:["device"],match:function(t,n){return t.device===n.value}}},2422:function(t){t.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(t){return t.getDevice()}]}},8822:function(t,n,e){var i=e(3498);n.getDevice=function(){var t=i.get().device;return"unknown"!==t.model?t.model:"tablet"===t.type?"tablet":t.isMobile?"mobile":"desktop"}},2452:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(7726)),t.registerAudienceMatcher("device_type",e(9857))}},9857:function(t){t.exports={fieldsNeeded:["device_type"],match:function(t,n){return t.device_type===n.value}}},7726:function(t,n,e){var i=e(3498);t.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var t=i.get().device;switch(t.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return t.type;default:return"other"}}]}},1003:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(1842)),t.registerAudienceMatcher("language",e(9893))}},9893:function(t,n){n.fieldsNeeded=["language"],n.match=function(t,n){return!!t.language&&t.language.toLowerCase().indexOf(n.value)>-1}},1842:function(t,n,e){var i=e(6022);t.exports={provides:"language",getter:[function(){return i.getLanguage()}]}},7502:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(240)),t.registerAudienceMatcher("location",e(4537))}},4537:function(t,n){n.fieldsNeeded=["location"],n.match=function(t,n){if(!t.hasOwnProperty("location"))return!1;var e=t.location,i=n.value.split("|"),r=(i[0]||"").trim(),o=(i[1]||"").trim(),a=(i[2]||"").trim(),u=(i[3]||"").trim(),c=(i.length>4&&i[4]||"").trim();if("GB"===r){o={EN:"ENG",NI:"NIR",SC:"SCT",WA:"WLS"}[o]||o}switch(i.length){case 1:if(e.country===r)return!0;break;case 2:if(e.region===o&&e.country===r)return!0;break;case 3:var s=function(t){if(!t)return"";var n=t.trim().replace(/\s+/g,"").toUpperCase();return n.endsWith("CITY")?n.substring(0,n.length-4):n};if(s(e.city)===s(a)&&(e.region===o||""===o)&&e.country===r)return!0;break;case 4:if(e.continent===u)return!0;break;case 5:if(e.dma===c)return!0}return!1}},240:function(t,n,e){var i=e(131);t.exports={provides:"location",isAsync:!0,getter:[function(){return i.getIPDerivedGeolocation()}]}},9206:function(t,n,e){t.exports=function(t){t.registerDependency("sources/platform",e(5060)),t.registerVisitorProfileProvider(e(4048)),t.registerAudienceMatcher("platform",e(4665))}},4665:function(t,n){n.fieldsNeeded=["platform"],n.match=function(t,n){var e=t.platform;return n.value.split("_")[0]===e.name}},4048:function(t){t.exports={provides:"platform",isSticky:!0,getter:["sources/platform",function(t){return t.getPlatform()}]}},5060:function(t,n,e){var i=e(3498);n.getPlatform=function(){return i.get().platform}},39:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(8511)),t.registerAudienceMatcher("query",e(4127))}},4127:function(t,n,e){var i=e(2973);n.fieldsNeeded=["queryParams"],n.match=function(t,n){var e=t.queryParams.find((function(t){return t[0]===n.name}));return i.hasMatch(n.value,n.match,e?e[1]:null)}},8511:function(t,n,e){var i=e(6022);t.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}},6917:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9732)),t.registerAudienceMatcher("referrer",e(8881))}},8881:function(t,n,e){var i=e(6582);n.fieldsNeeded=["referrer"],n.match=function(t,n){return null!==t.referrer&&i(t.referrer,n)}},9732:function(t,n,e){var i=e(1019),r=e(3272);t.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var t=r.getReferrer()||i.getReferrer();return""===t&&(t=null),t}]}},945:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(3474)),t.registerAudienceMatcher("source_type",e(9007))}},9007:function(t,n,e){var i=e(2973);n.fieldsNeeded=["source_type"],n.match=function(t,n){return i.hasMatch(n.value,n.match,t.source_type)}},3474:function(t,n,e){var i=e(6022),r=e(1019),o=e(3272),a=e(327),u=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/","https://(www)?\\.google\\..*?/?$","https://search\\.yahoo\\..*?/?$","https://(www)?\\.bing\\..*?/?$"];t.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(t,n){var e,c=t(),s=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("utm_campaign")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var t=o.getReferrer()||r.getReferrer(),n=0;n<u.length;n++){var e=u[n];if(t.match(e))return"search"}return t&&a.guessDomain(t)!==a.guessDomain(i.getUrl())?"referral":"direct"}();e=s,(!c||"direct"!==e)&&n(s)}}]}},2819:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(1708)),t.registerVisitorProfileProvider(e(5435)),t.registerAudienceMatcher("time_and_day",e(2117))}},2117:function(t,n,e){var i=e(9665);n.fieldsNeeded=["currentTimestamp"],n.match=function(t,n){return i.test(n.value,new Date(t.currentTimestamp))}},1708:function(t,n,e){var i=e(8298);t.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}},5435:function(t){t.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}},9665:function(t,n){function e(t){var n=t.split(":");if(2!==n.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+t);return 60*parseInt(n[0],10)+parseInt(n[1],10)}n.test=function(t,n){var i=function(t){var n=t.split("_");if(3!==n.length)throw new Error("Invalid time and day string "+t);var e=n[2].split(",");return{start_time:n[0],end_time:n[1],days:e}}(t),r=e(i.start_time),o=e(i.end_time),a=60*n.getHours()+n.getMinutes(),u=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][n.getDay()];return a>=r&&a<=o&&i.days.includes(u)}},1823:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9078))}},9078:function(t){t.exports={provides:"visitorId",getter:["stores/visitor_id",function(t){return t.getRandomId()}]}},9807:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.omit,a=i.pick,u=e(8841),c=e(9899),s=e(136),f=e(8130).v,l=e(192),d=e(7852),v=e(6938),h=e(4285),p=e(9454),g=e(8260),m=e(2025),b=(e(1019),e(7566)),_=e(3111),y=e(409),w=m.get("stores/global"),E=m.get("stores/tracker_optimizely"),I=e(2855),A=n.Error=f("OptimizelyTrackerError"),S="client_activation",T="campaign_activated",O="view_activated",k={revenue:{validate:L,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:L,sanitize:Math.floor,excludeFeature:!0},value:{validate:L,sanitize:function(t){return t}}},R="AUTO",C=[function(){return function(t){U(function(t){var n=Object.assign({entity_id:t.pageId,key:t.pageApiName,timestamp:t.timestamp,uuid:t.eventId,type:O},j(t.eventTags));return n}(t),t.userFeatures,Q(t.layerStates))}}],N=[function(){return function(t){!function(t){var n=null!==w.getAnonymizeIP()?w.getAnonymizeIP():void 0,e={account_id:t.accountId,anonymize_ip:n,client_name:t.clientName,client_version:t.clientVersion,project_id:t.projectId,visitors:[]};e.revision=t.revision,e.enrich_decisions=!0;var i={session_id:F(t.sessionId),visitor_id:t.visitorId,attributes:[],snapshots:[]},r=Q(t.layerStates);y.dispatch(s.REGISTER_TRACKER_VISITOR,{data:e,visitor:i,decisions:r}),J()}(t),U(function(t){return{entity_id:null,type:S,uuid:t.eventId,timestamp:t.timestamp}}(t),t.userFeatures,Q(t.layerStates))}}],D=[function(){return function(t){var n;U((n=t,Object.assign({entity_id:n.eventEntityId,key:n.eventApiName,timestamp:n.timestamp,uuid:n.eventId,type:n.eventCategory,properties:M(n.eventProperties)},j(n.eventTags))),t.userFeatures,Q(t.layerStates))}}],x=[function(){return function(t){var n;U((n=t,Object.assign({entity_id:n.eventEntityId,key:n.eventApiName,timestamp:n.timestamp,uuid:n.eventId,type:n.eventCategory},j(n.eventTags))),t.userFeatures,Q(t.layerStates))}}];function j(t){var n=function(t,n,e){try{P(e),t[n]=e}catch(t){u.emitError(new A("Bad value for eventTags["+n+"]: "+t.message))}return t},e=Object.keys(k),i=o(t,e),r=a(t,e),c=Object.keys(i).reduce((function(t,e){return n(t,e,i[e])}),{}),s=Object.keys(r).reduce((function(t,e){var i=r[e],o=k[e];o.excludeFeature||n(c,e,i);try{o.validate(i),t[e]=o.sanitize(i),c[e]=t[e]}catch(t){u.emitError(new A("Bad value for eventMetrics["+e+"]: "+t.message))}return t}),{});return s.tags=c,s}function M(t){var n={},e={},i=0;for(var r in t){var o=t[r];"object"==typeof o&&null!==o?e[r]=o:i<15?(n[r]=o,i++):e[r]=o}return Object.keys(e).length>0&&d.log("Custom event properties dropped (complex values, or over the 15-property limit). The following properties were not pushed",e),n}function P(t){if(null==t)throw new Error("Feature value is null");if("object"==typeof t){var n;try{n=l.stringify(t)}catch(t){}throw new Error('Feature value is complex: "'+n)}}function L(t){if(null==t)throw new Error("Metric value is null");if("number"!=typeof t)throw new Error("Metric value is not numeric")}function V(t){return(t||[]).reduce((function(t,n){try{P(n.value),t.push({entity_id:n.id||null,key:n.name,type:n.type,value:n.value})}catch(t){d.warn("Error evaluating user feature",n,t)}return t}),[])}function U(t,n,e){y.dispatch(s.REGISTER_TRACKER_EVENT,{event:t,decisions:e}),B(n),J()}function B(t){var n=V(t);y.dispatch(s.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:n})}function F(t){return R}function z(){if(E.canSend()){var t=E.hasEventsToSend(),n=E.hasPreviousBatchesToSend();t||n?(e(5010).time("sendEventsTrackerOpti"),n&&(E.getPreviousBatches().forEach(G),y.dispatch(s.RESET_TRACKER_PREVIOUS_BATCHES)),t&&(y.dispatch(s.FINALIZE_BATCH_SNAPSHOT),G(E.getEventBatch()),y.dispatch(s.RESET_TRACKER_EVENTS)),e(5010).timeEnd("sendEventsTrackerOpti")):d.debug("Not sending events because there are no events to send")}else d.debug("Not sending events (holding)")}function G(t){d.debug("Sending ticket:",t);var n=c.generate(),e={url:"https://logx.optimizely.com/v1/events",method:"POST",data:q(t)};E.shouldUseBeacon()?g.sendBeacon(e,n):g.retryableRequest(e,n)}function q(t){return Object.assign({},a(t,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:t.visitors.map(H)})}function H(t){return{visitor_id:t.visitor_id,session_id:R,attributes:t.attributes.map(Y),snapshots:t.snapshots.map(K)}}function Y(t){return X(t,{entity_id:"e",key:"k",type:"t",value:"v"})}function K(t){var n=t.events;return n=function(t){var n=t.reduce((function(t,n){var e;if(t[e=n.type===O&&r(n.tags)&&r(a(n,Object.keys(k)))?n.type:n.uuid]){var i=t[e].timestamp;n.timestamp>i&&(i=n.timestamp),t[e]=Object.assign({},t[e],{key:t[e].key+"-"+(n.key||""),entity_id:t[e].entity_id+"-"+n.entity_id,timestamp:i})}else t[e]=n;return t}),{});return Object.values(n)}(n),{activationTimestamp:w.getActivationTimestamp(),decisions:t.decisions.map($),events:n.map(W)}}function $(t){var n=X(t,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"});return n.m=t.metadata?X(t.metadata,{cmab_uuid:"cmab_uuid"}):{},n}function W(t){return t.key===T&&(t.type=T,delete t.key),X(t,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",properties:"p",timestamp:"t",uuid:"u",value:"v",type:"y"})}function X(t,n){return Object.keys(t).reduce((function(e,i){var r=t[i];return i in n&&(e[n[i]||i]=r),e}),{})}function J(){if(E.shouldBatch()){if(!E.isPolling()){p.setTimeout((function t(){z(),E.isPolling()&&p.setTimeout(t,1e3)}),1e3),y.dispatch(s.SET_TRACKER_POLLING,!0),p.setTimeout((function(){y.dispatch(s.SET_TRACKER_BATCHING,!1),y.dispatch(s.SET_TRACKER_POLLING,!1)}),1e4)}}else z()}function Q(t){return t.map((function(t){var n=I.getCmabUUIDAndUpdateSessionTimeout(t.layerId,t.decision.experimentId),e=n?{cmab_uuid:n}:{};return{campaign_id:t.layerId,experiment_id:t.decision.experimentId,variation_id:t.decision.variationId,is_campaign_holdback:t.decision.isLayerHoldback,metadata:e}}))}function Z(){var t=E.getPersistableState();if(t)try{d.debug("Persisting pending batch:",t),h.persistTrackerOptimizelyData(t),y.dispatch(s.SET_TRACKER_DIRTY,!1)}catch(t){d.debug("Failed to persist pending batch:",t)}}var tt={trackLayerDecision:function(t){t.isLayerConcluded?d.debug("Layer is already concluded, skipping decision tracking"):t.timing===v.TrackLayerDecisionTimingFlags.postRedirectPolicy?function(t){var n=V(t.userFeatures),e={account_id:t.accountId,anonymize_ip:t.anonymizeIP,client_name:t.clientName,client_version:t.clientVersion,project_id:t.projectId,visitors:[{session_id:F(t.sessionId),visitor_id:t.visitorId,attributes:n,snapshots:[{decisions:[{campaign_id:t.layerId,experiment_id:t.experimentId,variation_id:t.variationId,is_campaign_holdback:t.isLayerHoldback}],events:[{uuid:t.decisionId,entity_id:t.layerId,timestamp:t.timestamp,type:T}]}]}]};y.dispatch(s.REGISTER_PREVIOUS_BATCH,e),J()}(t):function(t){e(5010).time("onLayerDecisionOptimizely");var n={entity_id:t.layerId,type:T,uuid:t.decisionId,timestamp:t.timestamp};y.dispatch(s.REGISTER_TRACKER_DECISION,{decisionEvent:n,decisions:Q(t.layerStates)}),B(t.userFeatures),e(5010).timeEnd("onLayerDecisionOptimizely"),J()}(t)},preRedirectPolicy:v.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT,postRedirectPolicy:v.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:v.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:C,onClientActivation:N,onClickEvent:x,onCustomEvent:D};t.exports=function(t){t.registerAnalyticsTracker("optimizely",tt),b.on({filter:{type:_.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){y.dispatch(s.SET_TRACKER_SEND_EVENTS,!0),z()}}),b.on({filter:{type:_.TYPES.ANALYTICS,name:"maybeSendEvents"},handler:function(){z()}}),b.on({filter:{type:_.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){y.dispatch(s.SET_TRACKER_SEND_EVENTS,!1)}}),y.dispatch(s.SET_TRACKER_SEND_EVENTS,!0);var n=b.on({filter:{type:"lifecycle",name:"activated"},handler:function(){E.observe(Z),b.off(n)}})}},7763:function(t,n,e){var i=e(4886),r=e(5473);function o(t){if(!t||"string"!=typeof t.value)return{configured:!1,valid:!1,leg:null};var n=t.value.replace(/^\s+|\s+$/g,"");if(""===n||n.length<3)return{configured:!0,valid:!1,leg:null};var e=i.makeUaTest(n);return e?{configured:!0,valid:!0,leg:{value:n,test:e}}:{configured:!0,valid:!1,leg:null}}function a(t){if(!t)return{configured:!1,legs:[]};if("string"!=typeof t.value||""===t.value.replace(/^\s+|\s+$/g,""))return{configured:!0,legs:[]};for(var n=t.value.split(","),e=[],i=0;i<n.length;i++){var o=n[i].replace(/^\s+|\s+$/g,"");if(""!==o){var a=r.makeIpTest(o);a&&e.push({value:o,test:a})}}return{configured:!0,legs:e}}n.compile=function(t){var n=[];if(!t||!t.rules||!Array.isArray(t.rules))return n;for(var e=0;e<t.rules.length;e++){var i=t.rules[e];if(i){var r=String(e),u=o(i.user_agent),c=a(i.ip);if((u.configured||c.configured)&&(!u.configured||u.valid)){var s=u.configured?u.leg:null;if(c.configured){if(0===c.legs.length)continue;for(var f=0;f<c.legs.length;f++)n.push({id:r,ua:s,ip:c.legs[f]})}else n.push({id:r,ua:s,ip:null})}}}return n}},4308:function(t,n,e){var i=e(7763),r=e(4483),o=e(9454),a=e(2025),u=e(7566),c=e(3111),s=a.get("stores/directive"),f=a.get("stores/global"),l=null,d=!1,v=void 0,h=!1,p=!1;function g(){p&&(p=!1,u.emit({type:c.TYPES.ANALYTICS,name:"sendEvents"}))}function m(){return{enabled:!1,mode:"monitor",compiledRules:[],hasIpRules:!1,hasUaRules:!1,stats:r.createStats()}}function b(){return!!(s&&s.shouldBootstrapDataForPreview&&s.shouldBootstrapDataForPreview())}function _(){if(!d){try{var t=function(){try{return f&&f.getTrafficExclusion?f.getTrafficExclusion():void 0}catch(t){return}}();if(!t)return;d=!0,l=function(t){if(!t||"object"!=typeof t||!t.enabled)return m();for(var n="enforce"===t.mode?"enforce":"monitor",e=i.compile(t),o=!1,a=!1,u=0;u<e.length;u++)e[u].ip&&(o=!0),e[u].ua&&(a=!0);return{enabled:!0,mode:n,compiledRules:e,hasIpRules:o,hasUaRules:a,stats:r.createStats()}}(t)}catch(t){return d=!0,void(l=m())}try{l.enabled&&l.hasIpRules&&!b()&&function(){if(!p){p=!0,u.emit({type:c.TYPES.ANALYTICS,name:"holdEvents"});var t=y;o.setTimeout((function(){y===t&&g()}),2e3)}}()}catch(t){}}}n.evaluate=function(t,n){if(!l||!l.compiledRules)return{matched:!1,ruleId:void 0};for(var e=l.compiledRules,i=null!=n,r=0;r<e.length;r++){var o=e[r];if(o.ua||o.ip){var a=!o.ua||!!o.ua.test(t),u=!o.ip||i&&!!o.ip.test(n);if(a&&u)return{matched:!0,ruleId:o.id}}}return{matched:!1,ruleId:void 0}},n.shouldDrop=function(){try{if(_(),!l||!l.enabled||b()||!l.compiledRules.length)return!1;var t=o.getUserAgent();l.hasIpRules&&function(){if(h)return;h=!0;var t=y;try{var i=e(131).getIP();i&&"function"==typeof i.then&&i.then((function(i){if(y===t&&"string"==typeof i&&i&&(v=i,l&&l.enabled&&"enforce"===l.mode)){var a=o.getUserAgent(),u=n.evaluate(a,i);if(u.matched){r.recordMatch(l.stats,u.ruleId);try{var c=e(409),s=e(136);c.dispatch(s.RESET_TRACKER_EVENTS),c.dispatch(s.RESET_TRACKER_PREVIOUS_BATCHES)}catch(t){}}}g()}),(function(){g()}))}catch(t){}}();var i=l.hasIpRules?v:void 0;r.recordEvaluation(l.stats),l.hasUaRules&&("string"!=typeof t||!t)&&r.recordUnusableUa(l.stats),l.hasIpRules&&("string"!=typeof i||!i)&&r.recordUnresolvedIp(l.stats);var a=n.evaluate(t,i);return!!a.matched&&(r.recordMatch(l.stats,a.ruleId),"enforce"===l.mode)}catch(t){try{l&&r.recordThrew(l.stats)}catch(t){}return!1}};var y=0;n.config=function(){return _(),l},n.getStats=function(){if(_(),!l||!l.enabled)return null;var t=l.stats,n={};for(var e in t.perRuleHits)Object.prototype.hasOwnProperty.call(t.perRuleHits,e)&&(n[e]=t.perRuleHits[e]);for(var i=[],r=l.compiledRules,o=0;o<r.length;o++){var a=r[o];n[a.id]&&i.push({id:a.id,type:a.ua&&a.ip?"ua+ip":a.ua?"ua":"ip",ua:a.ua?a.ua.value:null,ip:a.ip?a.ip.value:null,drops:n[a.id]})}return{enabled:!0,mode:l.mode,evaluated:t.evaluated,matched:t.matched,unusableUa:t.unusableUa,unresolvedIp:t.unresolvedIp,threw:t.threw,perRuleHits:n,matchedRules:i}}},5473:function(t,n){function e(t){if(!/^\d{1,3}$/.test(t))return!1;var n=Number(t);return!(n>255||String(n)!==t)}n.anonymizeIp=function(t){if("string"==typeof t&&""!==t){var n=t.split(".");if(4===n.length){for(var i=0;i<4;i++)if(!e(n[i]))return;return n[0]+"."+n[1]+"."+n[2]+".0"}}},n.makeIpTest=function(t){if(!t||"string"!=typeof t)return null;var e=n.anonymizeIp(t);return void 0===e||e!==t?null:function(e){var i=n.anonymizeIp(e);return void 0!==i&&i===t}}},4886:function(t,n){n.makeUaTest=function(t){if(!t||"string"!=typeof t)return null;var n=t.toLowerCase();return function(t){return"string"==typeof t&&-1!==t.toLowerCase().indexOf(n)}}},4483:function(t,n){n.createStats=function(){return{evaluated:0,matched:0,unusableUa:0,unresolvedIp:0,threw:0,perRuleHits:{}}},n.recordEvaluation=function(t){t&&t.evaluated++},n.recordUnusableUa=function(t){t&&t.unusableUa++},n.recordUnresolvedIp=function(t){t&&t.unresolvedIp++},n.recordThrew=function(t){t&&t.threw++},n.recordMatch=function(t,n){t&&(t.matched++,t.perRuleHits[n]=(t.perRuleHits[n]||0)+1)}},9016:function(t,n,e){var i=e(8484),r={match:function(t,n){return i.apply(n.value)}};t.exports=function(t){t.registerViewMatcher("custom_code",r)}},9820:function(t,n,e){t.exports=function(t){t.registerViewProvider(e(7568)),t.registerViewMatcher("url",e(683))}},683:function(t,n,e){var i=e(6582);t.exports={fieldsNeeded:["url"],match:function(t,n){return i(t.url,n)}}},7568:function(t,n,e){var i=e(6022);t.exports={provides:"url",getter:[function(){return i.getUrl()}]}},8326:function(t,n,e){var i=e(136),r=e(2025),o=e(6592),a=e(7566),u=e(409),c=r.get("stores/history"),s=e(7852),f=e(6761).Promise,l=e(2348),d=e(9454);function v(t){a.emit({type:"viewTrigger",name:"URLChanged",data:{source:t,newURL:d.getHref()}},!0)}t.exports=function(t){var n;n=function(){var t=c.getOriginalPushState().apply(this,arguments);return f.resolve().then((function(){v("pushState")})).catch((function(t){s.error("Error while wrapPushState: ",t)})),t},u.dispatch(i.ENSURE_ORIGINAL_PUSHSTATE),d.getGlobal("history").pushState=n,function(){var t=function(){var t=c.getOriginalReplaceState().apply(this,arguments);return f.resolve().then((function(){v("replaceState")})).catch((function(t){s.error("Error while wrapReplaceState: ",t)})),t};u.dispatch(i.ENSURE_ORIGINAL_REPLACESTATE),d.getGlobal("history").replaceState=t}(),d.addEventListener("popstate",h,!1),d.addEventListener("hashchange",p,!1),a.on({filter:{type:"viewTrigger",name:"URLChanged"},handler:function(){l.getViewsAndActivate(o.ViewActivationTypes.URLChanged)}}),t.registerViewTrigger("URLChanged")};var h=v.bind(null,"popstate"),p=v.bind(null,"hashchange")},9647:function(t,n,e){var i=e(2025),r=e(7566),o=e(3111),a=e(9454),u=i.get("stores/directive"),c="optimizelyPreview",s=function(t){a.getGlobal(c).push(t)};n.initialize=function(t){u.isSlave()&&function(t){var n=!1;if(Array.isArray(window.optimizely)&&window.optimizely.forEach((function(e){Array.isArray(e)&&"verifyPreviewProject"===e[0]&&String(e[1])===t&&(n=!0)})),!n)throw new Error("Preview projectId: "+t+" does not match expected")}(t),r.on({filter:{type:o.TYPES.ANALYTICS,name:"trackEvent"},handler:s}),r.on({filter:{type:o.TYPES.LIFECYCLE,name:"viewActivated"},handler:s}),r.on({filter:{type:o.TYPES.LIFECYCLE,name:"layerDecided"},handler:s}),r.on({filter:{type:"error"},publicOnly:!0,handler:s})},n.setupPreviewGlobal=function(){a.getGlobal(c)||a.setGlobal(c,[])},n.pushToPreviewGlobal=function(t){s(t)}},2594:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.mapValues,a=i.pick,u=i.pickBy,c=e(9899),s=e(5192),f=e(2575),l=e(8298),d=e(1019),v=e(409),h=e(1353).DT,p=e(7852),g=e(4049),m=e(6761).Promise,b=e(4285),_=e(9454),y=e(8260),w=e(136),E=e(6592),I=e(2025),A=I.get("stores/async_request"),S=I.get("stores/client_metadata"),T=I.get("stores/global"),O=I.get("stores/rum"),k=I.get("stores/performance"),R=I.get("stores/xdomain"),C=I.get("stores/view_data"),N=e(3737),D="https://rum.optimizely.com/rum",x="1.0";function j(t){return r(t)?m.resolve():(n=function(){return y.request({url:D,method:"POST",data:t,withCredentials:!0}).then((function(t){return s.resolveRequest("RUM_FIRST_BEACON",t),t})).catch((function(t){throw p.error("POST to client-rum failed:",t),s.rejectRequest("RUM_FIRST_BEACON",t),t}))},(e=A.getPromise("RUM_FIRST_BEACON"))?e.then(n):s.makeAsyncRequest("RUM_FIRST_BEACON",n));var n,e}function M(){try{return!d.querySelector("body")}catch(t){return null}}function P(){var t=_.getGlobal("performance"),n=t?t.timing:{},e=k.getMarks()||{},i=O.getApiData(),r=O.getDOMObservationData(),o=N.get("state").getActiveExperimentIds(),a=O.getFeaturesNeededData(),u=d.parseUri(O.getScriptSrc()),c=O.getRumData()||{},s=c.extras||{};Object.assign(s,{apiCalls:i,DOMObservationData:r,paintTimings:V(),activeExperimentIds:o,numPages:C.getNumberOfPages(),snippet:{scheme:u.protocol.slice(0,-1),host:u.host,path:u.pathname},networkInfo:L(),experimental:T.getExperimental(),featuresNeeded:a,beacon:{cjsOnload:!0}});var f=_.getGlobal("Prototype");f&&void 0!==f.Version&&(s.prototypeJS=f.Version);var l=!1;l=!0;var v=R.getFrames();v.length&&(s.xdFramesLoaded=v.length);var m={id:O.getRumId(),v:x,project:T.getSnippetId()||T.getProjectId(),navigationTimings:n,userTimings:e,xd:l,apis:Object.keys(i),extras:s,sampleRate:c.sampleRate};(function(){var t=h.keys().map((function(t){var n=b.getStorageKeyFromKey(t);return n?{key:t,isForeign:b.isForeignKey(t),category:n,size:t.length+h.getItem(t).length}:null})).filter(Boolean),n=t.reduce((function(t,n){var e=n.key,i=b.getIdFromKey(e);return i?((n.isForeign?t.foreign:t.local)[i]=!0,t):t}),{local:{},foreign:{}}),e=t.filter((function(t){return!0===t.isForeign})).reduce((function(t,n){return t[n.key.split("_")[0]]=!0,t}),{}),i={local:0,foreign:0},r={local:{},foreign:{}};t.forEach((function(t){var n=t.isForeign?"foreign":"local";i[n]+=t.size,r[n][t.category]||(r[n][t.category]=0),r[n][t.category]+=t.size}));var o={numKeys:h.allKeys().length,sizeKeys:h.allKeys().toString().length,sizeValues:h.allValues().toString().length,idCounts:{local:Object.keys(n.local).length,foreign:Object.keys(n.foreign).length},foreignOriginCount:Object.keys(e).length,byteTotals:i,byteTotalsByCategory:r};return g.estimateStorage().then((function(t){return Object.assign(o,{storageEstimate:t})}))})().then((function(t){return j(Object.assign(m,{lsMetrics:t}))})).catch((function(t){p.warn("RUM / Error sending onload beacon:",t)}))}function L(){var t=_.getGlobal("navigator");if(t&&t.connection)return a(t.connection,["downlink","rtt","effectiveType"])}function V(){var t=_.getGlobal("performance");if(t)try{var n=t.getEntriesByType("paint");if(r(n))return;return n.reduce((function(t,n){return t[n.name]=Math.round(n.startTime),t}),{})}catch(t){return}}n.initialize=function(){var t,n=c.generate().replace(/-/g,"");t=Math.random()<1;var e=function(){var t=d.getCurrentScript();if(t)return t.src}();v.dispatch(w.SET_RUM_DATA,{id:n,RumHost:D,inRumSample:t,src:e,data:{id:n,sync:M(),timebase:l.now(),sampleRate:1,url:e,extras:{initialDOMState:d.getReadyState()}}})},n.queueBeacons=function(){return O.getSampleRum()?(function(){try{_.getGlobal("requestAnimationFrame")((function(){var t=O.getRumData().timebase;v.dispatch(w.SET_RUM_DATA,{data:{render:l.now()-(t||0)}})}))}catch(t){return}}(),d.isLoaded()?_.setTimeout(P,0):_.addEventListener("load",P),new m((function(t,n){_.setTimeout((function(){(function(){!function(){var t={id:O.getRumId(),v:x,account:T.getAccountId(),project:T.getSnippetId()||T.getProjectId(),snippet:T.getSnippetId(),revision:T.getRevision(),clientVersion:S.getClientVersion(),hasSlave:!1,wxhr:!0,extras:{}},n=b.getPersistedBehaviorEventCount(),e=f.getEventCount();t.numBehaviorEvents=e;var i=e-n;Object.assign(t.extras,{behaviorEventCountDiff:i,behaviorEventCountDecreased:i<0}),Object.assign(t,function(){var t=_.getGlobal("performance");if(!t)return;var n,e=O.getScriptSrc();try{if(e){p.debug("Using derived script src: ",e);var i=t.getEntriesByName(e);i.length>0&&(n=i[0])}if(!n){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;p.debug("Scanning resource timing entries with regex");var a=t.getEntriesByType("resource");n=a.find((function(t){return r.test(t.name)}))}if(n)return o(E.ResourceTimingAttributes,(function(t,e){var i=n[e];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===e?function(t){if(!t||!t.length)return[];for(var n=[],e=0;e<t.length;e++)try{var i=t[e];n.push({name:i.name,duration:i.duration,description:i.description})}catch(t){}return n}(i):void 0}))}catch(t){return}}(),k.getDurationsFor(Object.values(E.RUMPerformanceTimingAttributes))),v.dispatch(w.SET_RUM_DATA,{data:t})}();var t=O.getRumData(),n=k.getMarks()||{};return t.extras=t.extras||{},t.extras.beacon={cjsTimeout:!0},t.userTimings=n,j(t=u(t,(function(t){return void 0!==t})))})().then(t,n)}),0)})).catch((function(t){p.warn("RUM / Error sending data:",t)}))):m.resolve()}},6179:function(t,n,e){var i;!function(r,o){"use strict";var a="function",u="undefined",c="object",s="string",f="major",l="model",d="name",v="type",h="vendor",p="version",g="architecture",m="console",b="mobile",_="tablet",y="smarttv",w="wearable",E="embedded",I="Amazon",A="Apple",S="ASUS",T="BlackBerry",O="Browser",k="Chrome",R="Firefox",C="Google",N="Honor",D="Huawei",x="LG",j="Microsoft",M="Motorola",P="Nvidia",L="OnePlus",V="Opera",U="OPPO",B="Samsung",F="Sharp",z="Sony",G="Xiaomi",q="Zebra",H="Facebook",Y="Chromium OS",K="Mac OS",$=" Browser",W=function(t){for(var n={},e=0;e<t.length;e++)n[t[e].toUpperCase()]=t[e];return n},X=function(t,n){return typeof t===s&&-1!==J(n).indexOf(J(t))},J=function(t){return t.toLowerCase()},Q=function(t,n){if(typeof t===s)return t=t.replace(/^\s\s*/,""),typeof n===u?t:t.substring(0,500)},Z=function(t,n){for(var e,i,r,u,s,f,l=0;l<n.length&&!s;){var d=n[l],v=n[l+1];for(e=i=0;e<d.length&&!s&&d[e];)if(s=d[e++].exec(t))for(r=0;r<v.length;r++)f=s[++i],typeof(u=v[r])===c&&u.length>0?2===u.length?typeof u[1]==a?this[u[0]]=u[1].call(this,f):this[u[0]]=u[1]:3===u.length?typeof u[1]!==a||u[1].exec&&u[1].test?this[u[0]]=f?f.replace(u[1],u[2]):o:this[u[0]]=f?u[1].call(this,f,u[2]):o:4===u.length&&(this[u[0]]=f?u[3].call(this,f.replace(u[1],u[2])):o):this[u]=f||o;l+=2}},tt=function(t,n){for(var e in n)if(typeof n[e]===c&&n[e].length>0){for(var i=0;i<n[e].length;i++)if(X(n[e][i],t))return"?"===e?o:e}else if(X(n[e],t))return"?"===e?o:e;return n.hasOwnProperty("*")?n["*"]:t},nt={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},et={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,p],[/opios[\/ ]+([\w\.]+)/i],[p,[d,V+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[p,[d,V+" GX"]],[/\bopr\/([\w\.]+)/i],[p,[d,V]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[p,[d,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[p,[d,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,/(heytap|ovi|115)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[d,p],[/quark(?:pc)?\/([-\w\.]+)/i],[p,[d,"Quark"]],[/\bddg\/([\w\.]+)/i],[p,[d,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[d,"UC"+O]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[p,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[d,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[p,[d,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[p,[d,"Smart Lenovo "+O]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure "+O],p],[/\bfocus\/([\w\.]+)/i],[p,[d,R+" Focus"]],[/\bopt\/([\w\.]+)/i],[p,[d,V+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[d,V+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[d,"MIUI"+$]],[/fxios\/([\w\.-]+)/i],[p,[d,R]],[/\bqihoobrowser\/?([\w\.]*)/i],[p,[d,"360"]],[/\b(qq)\/([\w\.]+)/i],[[d,/(.+)/,"$1Browser"],p],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1"+$],p],[/samsungbrowser\/([\w\.]+)/i],[p,[d,B+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[p,[d,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[d,"Sogou Mobile"],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[d,p],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[d],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[p,d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,H],p],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[d,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[d,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[p,[d,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[d,k+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,k+" WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[d,"Android "+O]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,p],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[p,[d,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[p,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[p,tt,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[d,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],p],[/(wolvic|librewolf)\/([\w\.]+)/i],[d,p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[d,R+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[d,[p,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[d,[p,/master.|lts./,""]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[g,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[g,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[g,"arm"]],[/((ppc|powerpc)(64)?)( mac|;|\))/i],[[g,/ower/,"",J]],[/ sun4\w[;\)]/i],[[g,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],[[g,J]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[h,B],[v,_]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[l,[h,B],[v,b]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[l,[h,A],[v,b]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[h,A],[v,_]],[/(macintosh);/i],[l,[h,A]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[h,F],[v,b]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[l,[h,N],[v,_]],[/honor([-\w ]+)[;\)]/i],[l,[h,N],[v,b]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[l,[h,D],[v,_]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[l,[h,D],[v,b]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[l,/_/g," "],[h,G],[v,_]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,/ ([\w ]+) miui\/v?\d/i],[[l,/_/g," "],[h,G],[v,b]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[h,U],[v,b]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[l,[h,tt,{OnePlus:["304","403","203"],"*":U}],[v,_]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[h,"Vivo"],[v,b]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[l,[h,"Realme"],[v,b]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[h,M],[v,b]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[h,M],[v,_]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[h,x],[v,_]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[h,x],[v,b]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[l,[h,"Lenovo"],[v,_]],[/(nokia) (t[12][01])/i],[h,l,[v,_]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*))/i],[[l,/_/g," "],[v,b],[h,"Nokia"]],[/(pixel (c|tablet))\b/i],[l,[h,C],[v,_]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[h,C],[v,b]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[h,z],[v,b]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[h,z],[v,_]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[h,L],[v,b]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[h,I],[v,_]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[h,I],[v,b]],[/(playbook);[-\w\),; ]+(rim)/i],[l,h,[v,_]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[h,T],[v,b]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[h,S],[v,_]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[h,S],[v,b]],[/(nexus 9)/i],[l,[h,"HTC"],[v,_]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[h,[l,/_/g," "],[v,b]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[l,[h,"TCL"],[v,_]],[/(itel) ((\w+))/i],[[h,J],l,[v,tt,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[h,"Acer"],[v,_]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[h,"Meizu"],[v,b]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[l,[h,"Ulefone"],[v,b]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[l,[h,"Energizer"],[v,b]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[l,[h,"Cat"],[v,b]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[l,[h,"Smartfren"],[v,b]],[/droid.+; (a(?:015|06[35]|142p?))/i],[l,[h,"Nothing"],[v,b]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[l,[h,"Archos"],[v,_]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[l,[h,"Archos"],[v,b]],[/(imo) (tab \w+)/i,/(infinix) (x1101b?)/i],[h,l,[v,_]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (hmd|imo) ([\w ]+?)(?: bui|\))/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,/(oppo) ?([\w ]+) bui/i],[h,l,[v,b]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[h,l,[v,_]],[/(surface duo)/i],[l,[h,j],[v,_]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[h,"Fairphone"],[v,b]],[/(u304aa)/i],[l,[h,"AT&T"],[v,b]],[/\bsie-(\w*)/i],[l,[h,"Siemens"],[v,b]],[/\b(rct\w+) b/i],[l,[h,"RCA"],[v,_]],[/\b(venue[\d ]{2,7}) b/i],[l,[h,"Dell"],[v,_]],[/\b(q(?:mv|ta)\w+) b/i],[l,[h,"Verizon"],[v,_]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[h,"Barnes & Noble"],[v,_]],[/\b(tm\d{3}\w+) b/i],[l,[h,"NuVision"],[v,_]],[/\b(k88) b/i],[l,[h,"ZTE"],[v,_]],[/\b(nx\d{3}j) b/i],[l,[h,"ZTE"],[v,b]],[/\b(gen\d{3}) b.+49h/i],[l,[h,"Swiss"],[v,b]],[/\b(zur\d{3}) b/i],[l,[h,"Swiss"],[v,_]],[/\b((zeki)?tb.*\b) b/i],[l,[h,"Zeki"],[v,_]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[h,"Dragon Touch"],l,[v,_]],[/\b(ns-?\w{0,9}) b/i],[l,[h,"Insignia"],[v,_]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[h,"NextBook"],[v,_]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[h,"Voice"],l,[v,b]],[/\b(lvtel\-)?(v1[12]) b/i],[[h,"LvTel"],l,[v,b]],[/\b(ph-1) /i],[l,[h,"Essential"],[v,b]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[h,"Envizen"],[v,_]],[/\b(trio[-\w\. ]+) b/i],[l,[h,"MachSpeed"],[v,_]],[/\btu_(1491) b/i],[l,[h,"Rotor"],[v,_]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[l,[h,P],[v,_]],[/(sprint) (\w+)/i],[h,l,[v,b]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[h,j],[v,b]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[h,q],[v,_]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[h,q],[v,b]],[/smart-tv.+(samsung)/i],[h,[v,y]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[h,B],[v,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[h,x],[v,y]],[/(apple) ?tv/i],[h,[l,A+" TV"],[v,y]],[/crkey/i],[[l,k+"cast"],[h,C],[v,y]],[/droid.+aft(\w+)( bui|\))/i],[l,[h,I],[v,y]],[/(shield \w+ tv)/i],[l,[h,P],[v,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[l,[h,F],[v,y]],[/(bravia[\w ]+)( bui|\))/i],[l,[h,z],[v,y]],[/(mi(tv|box)-?\w+) bui/i],[l,[h,G],[v,y]],[/Hbbtv.*(technisat) (.*);/i],[h,l,[v,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[h,Q],[l,Q],[v,y]],[/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],[l,[v,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[v,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[h,l,[v,m]],[/droid.+; (shield)( bui|\))/i],[l,[h,P],[v,m]],[/(playstation \w+)/i],[l,[h,z],[v,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[h,j],[v,m]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[l,[h,B],[v,w]],[/((pebble))app/i,/(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[h,l,[v,w]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[l,[h,U],[v,w]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[l,[h,A],[v,w]],[/(opwwe\d{3})/i],[l,[h,L],[v,w]],[/(moto 360)/i],[l,[h,M],[v,w]],[/(smartwatch 3)/i],[l,[h,z],[v,w]],[/(g watch r)/i],[l,[h,x],[v,w]],[/droid.+; (wt63?0{2,3})\)/i],[l,[h,q],[v,w]],[/droid.+; (glass) \d/i],[l,[h,C],[v,w]],[/(pico) (4|neo3(?: link|pro)?)/i],[h,l,[v,w]],[/; (quest( \d| pro)?)/i],[l,[h,H],[v,w]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[h,[v,E]],[/(aeobc)\b/i],[l,[h,I],[v,E]],[/(homepod).+mac os/i],[l,[h,A],[v,E]],[/windows iot/i],[[v,E]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[l,[v,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[v,_]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[v,_]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[v,b]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[l,[h,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[d,"EdgeHTML"]],[/(arkweb)\/([\w\.]+)/i],[d,p],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[d,p],[/ladybird\//i],[[d,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,p],[/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],[d,[p,tt,nt]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[p,tt,nt],[d,"Windows"]],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,K],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[p,d],[/(ubuntu) ([\w\.]+) like android/i],[[d,/(.+)/,"$1 Touch"],p],[/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],[d,p],[/\(bb(10);/i],[p,[d,T]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[p,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[d,R+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[d,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[p,[d,"watchOS"]],[/crkey\/([\d\.]+)/i],[p,[d,k+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[d,Y],p],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,p],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[d,p]]},it=function(t,n){if(typeof t===c&&(n=t,t=o),!(this instanceof it))return new it(t,n).getResult();var e=typeof r!==u&&r.navigator?r.navigator:o,i=t||(e&&e.userAgent?e.userAgent:""),m=e&&e.userAgentData?e.userAgentData:o,y=n?function(t,n){var e={};for(var i in t)n[i]&&n[i].length%2==0?e[i]=n[i].concat(t[i]):e[i]=t[i];return e}(et,n):et,w=e&&e.userAgent==i;return this.getBrowser=function(){var t,n={};return n[d]=o,n[p]=o,Z.call(n,i,y.browser),n[f]=typeof(t=n[p])===s?t.replace(/[^\d\.]/g,"").split(".")[0]:o,w&&e&&e.brave&&typeof e.brave.isBrave==a&&(n[d]="Brave"),n},this.getCPU=function(){var t={};return t[g]=o,Z.call(t,i,y.cpu),t},this.getDevice=function(){var t={};return t[h]=o,t[l]=o,t[v]=o,Z.call(t,i,y.device),w&&!t[v]&&m&&m.mobile&&(t[v]=b),w&&"Macintosh"==t[l]&&e&&typeof e.standalone!==u&&e.maxTouchPoints&&e.maxTouchPoints>2&&(t[l]="iPad",t[v]=_),t},this.getEngine=function(){var t={};return t[d]=o,t[p]=o,Z.call(t,i,y.engine),t},this.getOS=function(){var t={};return t[d]=o,t[p]=o,Z.call(t,i,y.os),w&&!t[d]&&m&&m.platform&&"Unknown"!=m.platform&&(t[d]=m.platform.replace(/chrome os/i,Y).replace(/macos/i,K)),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(t){return i=typeof t===s&&t.length>500?Q(t,500):t,this},this.setUA(i),this};it.VERSION="1.0.41",it.BROWSER=W([d,p,f]),it.CPU=W([g]),it.DEVICE=W([l,h,v,m,b,y,_,w,E]),it.ENGINE=it.OS=W([d,p]),typeof n!==u?(t.exports&&(n=t.exports=it),n.UAParser=it):e.amdO?(i=function(){return it}.call(n,e,n,t))===o||(t.exports=i):typeof r!==u&&(r.UAParser=it);var rt=typeof r!==u&&(r.jQuery||r.Zepto);if(rt&&!rt.ua){var ot=new it;rt.ua=ot.getResult(),rt.ua.get=function(){return ot.getUA()},rt.ua.set=function(t){ot.setUA(t);var n=ot.getResult();for(var e in n)rt.ua[e]=n[e]}}}("object"==typeof window?window:this)},4118:function(){},7263:function(t,n){!function(t){"use strict";var n,e,i,r,o,a=-1,u=function(t){addEventListener("pageshow",(function(n){n.persisted&&(a=n.timeStamp,t(n))}),!0)},c=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},s=function(){var t=c();return t&&t.activationStart||0},f=function(t,n){var e=c(),i="navigate";return a>=0?i="back-forward-cache":e&&(document.prerendering||s()>0?i="prerender":document.wasDiscarded?i="restore":e.type&&(i=e.type.replace(/_/g,"-"))),{name:t,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},l=function(t,n,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var i=new PerformanceObserver((function(t){Promise.resolve().then((function(){n(t.getEntries())}))}));return i.observe(Object.assign({type:t,buffered:!0},e||{})),i}}catch(t){}},d=function(t,n,e,i){var r,o;return function(a){n.value>=0&&(a||i)&&((o=n.value-(r||0))||void 0===r)&&(r=n.value,n.delta=o,n.rating=function(t,n){return t>n[1]?"poor":t>n[0]?"needs-improvement":"good"}(n.value,e),t(n))}},v=function(t){requestAnimationFrame((function(){return requestAnimationFrame((function(){return t()}))}))},h=function(t){var n=function(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||t(n)};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},p=function(t){var n=!1;return function(e){n||(t(e),n=!0)}},g=-1,m=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},b=function(t){"hidden"===document.visibilityState&&g>-1&&(g="visibilitychange"===t.type?t.timeStamp:0,y())},_=function(){addEventListener("visibilitychange",b,!0),addEventListener("prerenderingchange",b,!0)},y=function(){removeEventListener("visibilitychange",b,!0),removeEventListener("prerenderingchange",b,!0)},w=function(){return g<0&&(g=m(),_(),u((function(){setTimeout((function(){g=m(),_()}),0)}))),{get firstHiddenTime(){return g}}},E=function(t){document.prerendering?addEventListener("prerenderingchange",(function(){return t()}),!0):t()},I=[1800,3e3],A=function(t,n){n=n||{},E((function(){var e,i=w(),r=f("FCP"),o=l("paint",(function(t){t.forEach((function(t){"first-contentful-paint"===t.name&&(o.disconnect(),t.startTime<i.firstHiddenTime&&(r.value=Math.max(t.startTime-s(),0),r.entries.push(t),e(!0)))}))}));o&&(e=d(t,r,I,n.reportAllChanges),u((function(i){r=f("FCP"),e=d(t,r,I,n.reportAllChanges),v((function(){r.value=performance.now()-i.timeStamp,e(!0)}))})))}))},S=[.1,.25],T=function(t,n){n=n||{},A(p((function(){var e,i=f("CLS",0),r=0,o=[],a=function(t){t.forEach((function(t){if(!t.hadRecentInput){var n=o[0],e=o[o.length-1];r&&t.startTime-e.startTime<1e3&&t.startTime-n.startTime<5e3?(r+=t.value,o.push(t)):(r=t.value,o=[t])}})),r>i.value&&(i.value=r,i.entries=o,e())},c=l("layout-shift",a);c&&(e=d(t,i,S,n.reportAllChanges),h((function(){a(c.takeRecords()),e(!0)})),u((function(){r=0,i=f("CLS",0),e=d(t,i,S,n.reportAllChanges),v((function(){return e()}))})),setTimeout(e,0))})))},O={passive:!0,capture:!0},k=new Date,R=function(t,r){n||(n=r,e=t,i=new Date,D(removeEventListener),C())},C=function(){if(e>=0&&e<i-k){var t={entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+e};r.forEach((function(n){n(t)})),r=[]}},N=function(t){if(t.cancelable){var n=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,n){var e=function(){R(t,n),r()},i=function(){r()},r=function(){removeEventListener("pointerup",e,O),removeEventListener("pointercancel",i,O)};addEventListener("pointerup",e,O),addEventListener("pointercancel",i,O)}(n,t):R(n,t)}},D=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return t(n,N,O)}))},x=[100,300],j=function(t,i){i=i||{},E((function(){var o,a=w(),c=f("FID"),s=function(t){t.startTime<a.firstHiddenTime&&(c.value=t.processingStart-t.startTime,c.entries.push(t),o(!0))},v=function(t){t.forEach(s)},g=l("first-input",v);o=d(t,c,x,i.reportAllChanges),g&&h(p((function(){v(g.takeRecords()),g.disconnect()}))),g&&u((function(){var a;c=f("FID"),o=d(t,c,x,i.reportAllChanges),r=[],e=-1,n=null,D(addEventListener),a=s,r.push(a),C()}))}))},M=0,P=1/0,L=0,V=function(t){t.forEach((function(t){t.interactionId&&(P=Math.min(P,t.interactionId),L=Math.max(L,t.interactionId),M=L?(L-P)/7+1:0)}))},U=function(){return o?M:performance.interactionCount||0},B=function(){"interactionCount"in performance||o||(o=l("event",V,{type:"event",buffered:!0,durationThreshold:0}))},F=[200,500],z=0,G=function(){return U()-z},q=[],H={},Y=function(t){var n=q[q.length-1],e=H[t.interactionId];if(e||q.length<10||t.duration>n.latency){if(e)e.entries.push(t),e.latency=Math.max(e.latency,t.duration);else{var i={id:t.interactionId,latency:t.duration,entries:[t]};H[i.id]=i,q.push(i)}q.sort((function(t,n){return n.latency-t.latency})),q.splice(10).forEach((function(t){delete H[t.id]}))}},K=function(t,n){n=n||{},E((function(){var e;B();var i,r=f("INP"),o=function(t){t.forEach((function(t){t.interactionId&&Y(t),"first-input"===t.entryType&&!q.some((function(n){return n.entries.some((function(n){return t.duration===n.duration&&t.startTime===n.startTime}))}))&&Y(t)}));var n,e=(n=Math.min(q.length-1,Math.floor(G()/50)),q[n]);e&&e.latency!==r.value&&(r.value=e.latency,r.entries=e.entries,i())},a=l("event",o,{durationThreshold:null!==(e=n.durationThreshold)&&void 0!==e?e:40});i=d(t,r,F,n.reportAllChanges),a&&("PerformanceEventTiming"in window&&"interactionId"in PerformanceEventTiming.prototype&&a.observe({type:"first-input",buffered:!0}),h((function(){o(a.takeRecords()),r.value<0&&G()>0&&(r.value=0,r.entries=[]),i(!0)})),u((function(){q=[],z=U(),r=f("INP"),i=d(t,r,F,n.reportAllChanges)})))}))},$=[2500,4e3],W={},X=function(t,n){n=n||{},E((function(){var e,i=w(),r=f("LCP"),o=function(t){var n=t[t.length-1];n&&n.startTime<i.firstHiddenTime&&(r.value=Math.max(n.startTime-s(),0),r.entries=[n],e())},a=l("largest-contentful-paint",o);if(a){e=d(t,r,$,n.reportAllChanges);var c=p((function(){W[r.id]||(o(a.takeRecords()),a.disconnect(),W[r.id]=!0,e(!0))}));["keydown","click"].forEach((function(t){addEventListener(t,(function(){return setTimeout(c,0)}),!0)})),h(c),u((function(i){r=f("LCP"),e=d(t,r,$,n.reportAllChanges),v((function(){r.value=performance.now()-i.timeStamp,W[r.id]=!0,e(!0)}))}))}}))},J=[800,1800],Q=function t(n){document.prerendering?E((function(){return t(n)})):"complete"!==document.readyState?addEventListener("load",(function(){return t(n)}),!0):setTimeout(n,0)},Z=function(t,n){n=n||{};var e=f("TTFB"),i=d(t,e,J,n.reportAllChanges);Q((function(){var r=c();if(r){var o=r.responseStart;if(o<=0||o>performance.now())return;e.value=Math.max(o-s(),0),e.entries=[r],i(!0),u((function(){e=f("TTFB",0),(i=d(t,e,J,n.reportAllChanges))(!0)}))}}))};t.CLSThresholds=S,t.FCPThresholds=I,t.FIDThresholds=x,t.INPThresholds=F,t.LCPThresholds=$,t.TTFBThresholds=J,t.getCLS=T,t.getFCP=A,t.getFID=j,t.getINP=K,t.getLCP=X,t.getTTFB=Z,t.onCLS=T,t.onFCP=A,t.onFID=j,t.onINP=K,t.onLCP=X,t.onTTFB=Z}(n)}},__webpack_module_cache__={};function __webpack_require__(t){var n=__webpack_module_cache__[t];if(void 0!==n)return n.exports;var e=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t].call(e.exports,e,e.exports,__webpack_require__),e.exports}__webpack_require__.amdO={},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();var __webpack_exports__={};function main(){var t=function(t){var n=[__webpack_require__(1823)];n.push(__webpack_require__(1982)),n.push(__webpack_require__(9202)),n.push(__webpack_require__(9401)),n.push(__webpack_require__(6988)),n.push(__webpack_require__(9728)),n.push(__webpack_require__(2163)),n.push(__webpack_require__(9004)),n.push(__webpack_require__(8252)),n.push(__webpack_require__(2085)),n.push(__webpack_require__(6591)),n.push(__webpack_require__(2452)),n.push(__webpack_require__(1003)),n.push(__webpack_require__(7502)),n.push(__webpack_require__(9206)),n.push(__webpack_require__(39)),n.push(__webpack_require__(6917)),n.push(__webpack_require__(945)),n.push(__webpack_require__(2819)),n.push(__webpack_require__(9807)),n.push(__webpack_require__(9820)),n.push(__webpack_require__(9016)),n.push(__webpack_require__(8326)),n.push(__webpack_require__(4439)),n.push(__webpack_require__(2636)),n.push(__webpack_require__(3037)),v.initializePlugins(n)};window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(2594).initialize();var n=__webpack_require__(5010);n.time("gtagReady");var e=function(t){var e=t.name,i=(t.delta,t.value);t.id,"CLS"===e&&(i*=100),n.setMark(e,n.now(),i)};n.time("odpTime"),n.time("sendDCP"),n.time("sendActivate"),n.time("sendViewActivate"),n.time("sendDecision"),n.time("flash"),n.time("render"),n.time("preInitialize"),n.time("sendCmabApiInitiateCall");var i=__webpack_require__(7263);i.onFCP(e),i.onFID(e),i.onTTFB(e),i.onLCP(e,{reportAllChanges:!0}),i.onCLS(e,{reportAllChanges:!0}),i.onINP(e,{reportAllChanges:!0});var r=__webpack_require__(7852),o=__webpack_require__(2025);__webpack_require__(7786);var a=o.get("stores/directive");o.get("stores/tracker_optimizely");if(!__webpack_require__(8260).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var u,c=__webpack_require__(9445),s=__webpack_require__(4214),f=__webpack_require__(7219),l=__webpack_require__(587),d={"accountId": "22744560884", "namespace": "22886250866", "revision": "73200", "anonymizeIP": true, "enableForceParameters": true, "experimental": {"trimPages": true}, "projectId": "22886250866", "layers": [{"changes": null, "id": "4586485603631104", "name": "[no-track][100%] CSCRO-2450 Hide Google Pay Option", "commitId": "6263564904693760", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "4811655857569792", "5179119351103488"], "audienceName": "Not on Safari,Not on iphone", "changes": null, "id": "4961332632485888", "integrationSettings": null, "variations": [{"id": "4906151312097280", "name": "Original", "actions": []}, {"id": "6032051218939904", "name": "Variation #1", "actions": [{"viewId": "6665500023848960", "changes": [{"id": "8C6AAE26-DBF4-4CBE-853C-21A16DE6335F", "type": "custom_code", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subjectSelectorArray = ["vo-expandable-card .expandable-card label span.expandable-card__title"],
            subjectRemainingToLoad = subjectSelectorArray.filter(subject=>{return document.querySelectorAll(subject).length===0}).length==0,
            sales_cro = window.sales_cro, 
            optimzly = window.optimizely,
            debug = true;

            const experimentId = "4961332632485888", storyNumber = "CSCRO-2450",
            variant = ()=>{

                const titles = document.querySelectorAll("vo-expandable-card .expandable-card label span.expandable-card__title");
                const googlePayCard = Array.from(titles).find((card)=>{
                    return card.textContent.trim().toLowerCase().indexOf("google pay")>-1;
                });

                if (googlePayCard) {
                    const expandableCard = googlePayCard.closest(".expandable-card");
                    if (expandableCard) {
                        expandableCard.setAttribute("payment-method","gp-card");
                        expandableCard.classList.add("gp-card");
                    }
                }

                const paymentSection = document.querySelector("vm-payment-selection-section");

                if (paymentSection && !paymentSection.dataset.cscro2450Bound) {
                    paymentSection.dataset.cscro2450Bound = "true";
                    paymentSection.addEventListener("change", function (e) {
                        if (!e.target.closest("input")) return;
                        e.stopImmediatePropagation();
                        variant();
                    });
                }
            },
            log = (msg) => {                
                if(debug) console.log( msg);
            };
            
        // Only proceed if subject is found in DOM
        if( subjectRemainingToLoad && sales_cro && typeof $ == "function" && optimzly) {
            window.clearInterval($timerA);
            try{
                document.body.classList.add(storyNumber);
                console.log("in "+storyNumber);
                variant();

            }
            catch(error){
                console.log(`${storyNumber} Error: ${error}`);
                window.sales_cro.fireGA4(experimentId,storyNumber,"error",`Error: ${error}`);
                document.documentElement.classList.add(storyNumber+" - error");
            }       
        }       
    }, 500);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);
}(window, document));
}, "dependencies": []}, {"id": "AADCE167-CBFB-45B1-BCE6-564705D5D304", "type": "append", "selector": "head", "value": "<style>.CSCRO-2450 .gp-card{display: none!important;}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "6032051218939904", "endOfRange": 10000}], "name": "[no-track][100%] CSCRO-2450 Hide Google Pay Option", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4586485603631104"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6665500023848960"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": [{"name": "cro:shared", "type": "custom_code", "value": function($){((w) => {
    "use strict";

    var window = typeof unsafeWindow !== "undefined" ? unsafeWindow : w;
    var storyName = "CSCRO-2523";
    var experimentId = "4709821528670208";

    var initVariation = function () {
        document.documentElement.classList.add(storyName);
    };

    window[storyName] = {
        experimentId: experimentId,
        initVariation: initVariation,
    };

})(window);
}, "id": "d373719398bc4221807cb48615ae3ef1", "dependencies": []}], "id": "4634715938881536", "name": "[A/B][Stats Accel] CSCRO-2523 - Black Friday BB Only creative", "commitId": "5482176773357568", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "5303924979138560"], "audienceName": "Cookie consent [consentGroup]", "changes": null, "id": "6745856479592448", "integrationSettings": null, "variations": [{"id": "5207578173505536", "name": "Control", "actions": [{"viewId": "6748812356616192", "changes": [{"dependencies": [], "id": "a6b0e34d30224d4c908056729b53b016", "type": "custom_code", "value": function($){((window, document) => {
    "use strict";

    var storyName = "CSCRO-2523";
    var experimentId = "4709821528670208";

    document.documentElement.classList.add(storyName);
    document.documentElement.classList.add(storyName + "-control");
    void experimentId;
})(window, document);
}}]}]}, {"id": "6275604838875136", "name": "Variation #1", "actions": [{"viewId": "6748812356616192", "changes": [{"dependencies": [], "id": "1082e0f24d5e4cd782b45c6695e3fa80", "name": "cro:v1", "type": "custom_code", "value": function($){(function (window, document) {
    "use strict";

    var storyName = "CSCRO-2523";
    var experimentId = "4709821528670208";
    var variantId = "v1";
    var markerAttr = "data-cscro2523-hero";

    var ASSETS = {
        desktop: "https://a.storyblok.com/f/253875/1400x1080/260928bece/cscro-2523-v1-desktop-2x.png",
        tablet: "https://a.storyblok.com/f/253875/1120x1090/bb2d1f5ebe/cscro-2523-v1-tablet-2x.png",
        mobile: "https://a.storyblok.com/f/253875/640x630/198456ba6f/cscro-2523-v1-mobile-2x.png",
    };

    function buildPicture() {
        var picture = document.createElement("picture");
        picture.className = "cscro-2523-hero-picture";
        picture.setAttribute("data-cscro2523-picture", variantId);

        var sourceDesktop = document.createElement("source");
        sourceDesktop.media = "(min-width: 992px)";
        sourceDesktop.srcset = ASSETS.desktop;

        var sourceTablet = document.createElement("source");
        sourceTablet.media = "(min-width: 768px)";
        sourceTablet.srcset = ASSETS.tablet;

        var img = document.createElement("img");
        img.src = ASSETS.mobile;
        img.alt = "";
        img.className = "cscro-2523-hero-img";
        img.setAttribute("decoding", "async");

        picture.appendChild(sourceDesktop);
        picture.appendChild(sourceTablet);
        picture.appendChild(img);
        return picture;
    }

    function findSplitImage(heroImage) {
        var node = heroImage;
        while (node && node !== document.body) {
            if (node.className && String(node.className).indexOf("split-image") !== -1) {
                return node;
            }
            node = node.parentElement;
        }
        return heroImage.parentElement;
    }

    function applyHero(heroImage) {
        var splitImage = findSplitImage(heroImage);
        if (!splitImage) {
            return;
        }
        if (splitImage.getAttribute(markerAttr) === variantId) {
            if (splitImage.querySelector("[data-cscro2523-picture=\"" + variantId + "\"]")) {
                return;
            }
        }

        var existing = splitImage.querySelector("[data-cscro2523-picture]");
        if (existing) {
            existing.parentNode.removeChild(existing);
        }

        splitImage.appendChild(buildPicture());
        splitImage.setAttribute(markerAttr, variantId);
    }

    function variant() {
        var heroImage = document.querySelector('[data-testid="hero-image"]');
        if (!heroImage) {
            return;
        }
        applyHero(heroImage);

        var opti = window.optimizely;
        if (opti && typeof opti.get === "function") {
            var utils = opti.get("utils");
            if (utils && typeof utils.observeSelector === "function") {
                var stop = utils.observeSelector(
                    '[data-testid="hero-image"]',
                    function (el) {
                        applyHero(el);
                    },
                    { once: false }
                );
                if (typeof window.registerMO === "function" && stop) {
                    window.registerMO(storyName, { disconnect: stop });
                }
            }
        }
    }

    var $timerA = window.setInterval(function () {
        var subjectSelectorArray = ['[data-testid="hero-image"]'];
        var subjectRemainingToLoad =
            subjectSelectorArray.filter(function (subject) {
                return document.querySelectorAll(subject).length === 0;
            }).length === 0;
        var sales_cro = window.sales_cro;

        if (subjectRemainingToLoad && sales_cro) {
            window.clearInterval($timerA);
            $timerA = null;
            try {
                console.log("Variant START -", storyName, variantId);
                document.documentElement.classList.add(storyName);
                document.documentElement.classList.add(storyName + "-" + variantId);
                variant();
            } catch (error) {
                console.log(storyName + " Error: " + error);
                if (sales_cro && typeof sales_cro.fireGA4 === "function") {
                    sales_cro.fireGA4(experimentId, storyName, "error", "Error: " + error);
                }
                document.documentElement.classList.add(storyName + "-error");
            }
        }
    }, 500);

    window.setTimeout(function () {
        if ($timerA !== null) {
            window.clearInterval($timerA);
            $timerA = null;
        }
    }, 20000);
})(window, document);
}}, {"dependencies": [], "id": "18fbb663f8a943f0b340c0516fd5bf2d", "selector": "head", "type": "append", "value": "<style>.CSCRO-2523.CSCRO-2523-v1 [class*=\"split-image\"] [data-testid=\"hero-image\"],\n.CSCRO-2523.CSCRO-2523-v1 [class*=\"split-image\"] [data-testid=\"hero-image-overlay\"],\n.CSCRO-2523.CSCRO-2523-v1 [class*=\"split-image\"] .page-bundle-data,\n.CSCRO-2523.CSCRO-2523-v1 [class*=\"split-image\"] .cro-bundle-data {\n    display: none !important;\n}\n\n.CSCRO-2523.CSCRO-2523-v1 [class*=\"split-image\"] {\n    position: relative;\n    margin: 0 auto;\n}\n\n.CSCRO-2523.CSCRO-2523-v1 .cscro-2523-hero-picture {\n    display: block;\n    width: 100%;\n    max-width: 100%;\n}\n\n.CSCRO-2523.CSCRO-2523-v1 .cscro-2523-hero-img {\n    display: block;\n    position: relative;\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n    object-fit: contain;\n}\n\n@media (width >= 62rem) {\n    .CSCRO-2523.CSCRO-2523-v1 [class*=\"split-image\"] {\n        max-width: 100%;\n        height: calc(max(35rem, 40vh));\n        margin: auto;\n    }\n\n    .CSCRO-2523.CSCRO-2523-v1 .cscro-2523-hero-picture {\n        position: absolute;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .CSCRO-2523.CSCRO-2523-v1 .cscro-2523-hero-img {\n        position: absolute;\n        top: 50%;\n        left: 0;\n        width: 100%;\n        max-width: 850px;\n        height: 100%;\n        object-fit: contain;\n        mask-image: linear-gradient(90deg, #000 75%, #0000 99%);\n        transform: translate(0, calc(-50% - 1.5rem));\n    }\n}\n\n@media (width >= 90rem) {\n    .CSCRO-2523.CSCRO-2523-v1 [class*=\"split-image\"] {\n        height: calc(max(39.875rem, 50vh));\n    }\n}</style>"}]}]}, {"id": "5233200069345280", "name": "Variation #2", "actions": [{"viewId": "6748812356616192", "changes": [{"dependencies": [], "id": "004132d9cfbe439faff51b7c5b7e1e52", "name": "cro:v2", "type": "custom_code", "value": function($){(function (window, document) {
    "use strict";

    var storyName = "CSCRO-2523";
    var experimentId = "4709821528670208";
    var variantId = "v2";
    var markerAttr = "data-cscro2523-hero";

    var ASSETS = {
        desktop: "https://a.storyblok.com/f/253875/1400x1080/04ed924fd2/cscro-2523-v2-desktop-2x.png",
        tablet: "https://a.storyblok.com/f/253875/1120x1090/ece77e32ef/cscro-2523-v2-tablet-2x.png",
        mobile: "https://a.storyblok.com/f/253875/640x630/839ced772f/cscro-2523-v2-mobile-2x.png",
    };

    function buildPicture() {
        var picture = document.createElement("picture");
        picture.className = "cscro-2523-hero-picture";
        picture.setAttribute("data-cscro2523-picture", variantId);

        var sourceDesktop = document.createElement("source");
        sourceDesktop.media = "(min-width: 992px)";
        sourceDesktop.srcset = ASSETS.desktop;

        var sourceTablet = document.createElement("source");
        sourceTablet.media = "(min-width: 768px)";
        sourceTablet.srcset = ASSETS.tablet;

        var img = document.createElement("img");
        img.src = ASSETS.mobile;
        img.alt = "";
        img.className = "cscro-2523-hero-img";
        img.setAttribute("decoding", "async");

        picture.appendChild(sourceDesktop);
        picture.appendChild(sourceTablet);
        picture.appendChild(img);
        return picture;
    }

    function findSplitImage(heroImage) {
        var node = heroImage;
        while (node && node !== document.body) {
            if (node.className && String(node.className).indexOf("split-image") !== -1) {
                return node;
            }
            node = node.parentElement;
        }
        return heroImage.parentElement;
    }

    function applyHero(heroImage) {
        var splitImage = findSplitImage(heroImage);
        if (!splitImage) {
            return;
        }
        if (splitImage.getAttribute(markerAttr) === variantId) {
            if (splitImage.querySelector("[data-cscro2523-picture=\"" + variantId + "\"]")) {
                return;
            }
        }

        var existing = splitImage.querySelector("[data-cscro2523-picture]");
        if (existing) {
            existing.parentNode.removeChild(existing);
        }

        splitImage.appendChild(buildPicture());
        splitImage.setAttribute(markerAttr, variantId);
    }

    function variant() {
        var heroImage = document.querySelector('[data-testid="hero-image"]');
        if (!heroImage) {
            return;
        }
        applyHero(heroImage);

        var opti = window.optimizely;
        if (opti && typeof opti.get === "function") {
            var utils = opti.get("utils");
            if (utils && typeof utils.observeSelector === "function") {
                var stop = utils.observeSelector(
                    '[data-testid="hero-image"]',
                    function (el) {
                        applyHero(el);
                    },
                    { once: false }
                );
                if (typeof window.registerMO === "function" && stop) {
                    window.registerMO(storyName, { disconnect: stop });
                }
            }
        }
    }

    var $timerA = window.setInterval(function () {
        var subjectSelectorArray = ['[data-testid="hero-image"]'];
        var subjectRemainingToLoad =
            subjectSelectorArray.filter(function (subject) {
                return document.querySelectorAll(subject).length === 0;
            }).length === 0;
        var sales_cro = window.sales_cro;

        if (subjectRemainingToLoad && sales_cro) {
            window.clearInterval($timerA);
            $timerA = null;
            try {
                console.log("Variant START -", storyName, variantId);
                document.documentElement.classList.add(storyName);
                document.documentElement.classList.add(storyName + "-" + variantId);
                variant();
            } catch (error) {
                console.log(storyName + " Error: " + error);
                if (sales_cro && typeof sales_cro.fireGA4 === "function") {
                    sales_cro.fireGA4(experimentId, storyName, "error", "Error: " + error);
                }
                document.documentElement.classList.add(storyName + "-error");
            }
        }
    }, 500);

    window.setTimeout(function () {
        if ($timerA !== null) {
            window.clearInterval($timerA);
            $timerA = null;
        }
    }, 20000);
})(window, document);
}}, {"dependencies": [], "id": "c73135fd77d24f8194f6cd9821645db3", "selector": "head", "type": "append", "value": "<style>.CSCRO-2523.CSCRO-2523-v2 [class*=\"split-image\"] [data-testid=\"hero-image\"],\n.CSCRO-2523.CSCRO-2523-v2 [class*=\"split-image\"] [data-testid=\"hero-image-overlay\"],\n.CSCRO-2523.CSCRO-2523-v2 [class*=\"split-image\"] .page-bundle-data,\n.CSCRO-2523.CSCRO-2523-v2 [class*=\"split-image\"] .cro-bundle-data {\n    display: none !important;\n}\n\n.CSCRO-2523.CSCRO-2523-v2 [class*=\"split-image\"] {\n    position: relative;\n    margin: 0 auto;\n}\n\n.CSCRO-2523.CSCRO-2523-v2 .cscro-2523-hero-picture {\n    display: block;\n    width: 100%;\n    max-width: 100%;\n}\n\n.CSCRO-2523.CSCRO-2523-v2 .cscro-2523-hero-img {\n    display: block;\n    position: relative;\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n    object-fit: contain;\n}\n\n@media (width >= 62rem) {\n    .CSCRO-2523.CSCRO-2523-v2 [class*=\"split-image\"] {\n        max-width: 100%;\n        height: calc(max(35rem, 40vh));\n        margin: auto;\n    }\n\n    .CSCRO-2523.CSCRO-2523-v2 .cscro-2523-hero-picture {\n        position: absolute;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .CSCRO-2523.CSCRO-2523-v2 .cscro-2523-hero-img {\n        position: absolute;\n        top: 50%;\n        left: 0;\n        width: 100%;\n        max-width: 850px;\n        height: 100%;\n        object-fit: contain;\n        mask-image: linear-gradient(90deg, #000 75%, #0000 99%);\n        transform: translate(0, calc(-50% - 1.5rem));\n    }\n}\n\n@media (width >= 90rem) {\n    .CSCRO-2523.CSCRO-2523-v2 [class*=\"split-image\"] {\n        height: calc(max(39.875rem, 50vh));\n    }\n}</style>"}]}]}], "weightDistributions": [{"entityId": "5207578173505536", "endOfRange": 3980}, {"entityId": "6275604838875136", "endOfRange": 7424}, {"entityId": "5233200069345280", "endOfRange": 10000}], "name": "[A/B][Stats Accel] CSCRO-2523 - Black Friday BB Only creative", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "min-time", "layerId": "4634715938881536"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6748812356616192"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "4692270178369536", "name": "[100%] CSCRO-2529 - Skip in Customise", "commitId": "6559310061240320", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23064800131"], "audienceName": "Journey: create-basket", "changes": null, "id": "5601808926638080", "integrationSettings": null, "variations": [{"id": "6708306251612160", "name": "Original", "actions": [{"viewId": "29783000371", "changes": []}]}, {"id": "6179922194989056", "name": "Variation #1", "actions": [{"viewId": "29783000371", "changes": [{"id": "249831f274604058be5e7f315f414e90", "type": "custom_code", "value": function($){// Wrap code in an IIFE
(function (window, document) {
    // Invoking strict mode
    'use strict';
    const storyName = "CSCRO-2529";
    const experimentId = "5601808926638080";
    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector("vm-customisation-shell"),
            $ = window.$,
            sales_cro = window.sales_cro;

        const variant = function () {
            let utils = window.optimizely.get("utils");
            let continueCtaObserver;
            let initialContinueCta;
            let skipClickActive = false;

            const spinnerOverlay = `
                <div _ngcontent-ng-c678092626="" class="cro-overlay overlay ng-tns-c678092626-0 ng-star-inserted" style="position: fixed; inset: 0; z-index: 2147483647; background: #fff; overflow: hidden;"><div _ngcontent-ng-c678092626="" class="spinner-container ng-tns-c678092626-0 transparent-background"><div _ngcontent-ng-c678092626="" class="spinner-box ng-tns-c678092626-0"><div _ngcontent-ng-c678092626="" class="spinner-items ng-tns-c678092626-0"><vo-loading-logo _ngcontent-ng-c678092626="" variant="primary" height="64px" class="ng-tns-c678092626-0 ng-star-inserted"><img alt="Loading animation" data-testid="loading-animation" id="loading-animation" style="height: 64px;" src="https://a.storyblok.com/f/253875/110x64/0cceb796de/vm-loading-spinner.gif" aria-label="loading"></vo-loading-logo></div></div></div></div>
            `,
                removeCroOverlay = function () {
                    const croOverlay = document.querySelector("vm-spinner-overlay .cro-overlay");

                    if (croOverlay) {
                        croOverlay.remove();
                    }
                },
                removeOverlayOnUrlChange = function () {
                    const initialUrl = window.location.href;
                    const urlChangeInterval = window.setInterval(function () {
                        if (window.location.href !== initialUrl) {
                            removeCroOverlay();
                            window.clearInterval(urlChangeInterval);
                        }
                    }, 100);
                },
                clickContinueCta = function (event) {
                    event.preventDefault();

                    removeOverlayOnUrlChange();

                    skipClickActive = true;
                    initialContinueCta = document.querySelector("vm-continue-action-section [data-cy='onContinue']");
                    initialContinueCta.click();

                    if (!document.querySelector("vm-spinner-overlay .cro-overlay")) {
                        $("vm-spinner-overlay").append(spinnerOverlay);
                    }

                    sales_cro.fireGA4(experimentId, storyName, "click", "Click Skip");
                }

            // Add "skip" paragraph
            const skipParagraph = document.createElement("p");
            const skipCta = document.createElement("a");

            skipParagraph.classList.add(`${storyName}__skip`);
            skipParagraph.style.textAlign = "center";
            skipParagraph.style.fontFamily = "var(--mo-font-family)";
            skipParagraph.style.marginTop = ".5rem";
            skipCta.href = "#";
            skipCta.textContent = "Skip customisation";
            skipCta.style.color = "#5F2878";
            skipCta.addEventListener("click", clickContinueCta);
            skipParagraph.appendChild(skipCta);

            const addSkipCta = function (continueCta) {
                const continueSection = continueCta.closest("vm-continue-action-section");
                const nextStepIndicator = document.querySelector("vm-continue-action-section [data-cy='nextStepIndicatorText']");
                const existingSkipCta = document.querySelector(`.${storyName}__skip`);

                if (nextStepIndicator && [
                    "Next step: Installation",
                    "Next step: Your mobile SIM",
                    "Next step: Home phone set up",
                    "Next step: Book an engineer",
                    "Next step: Your Basket"
                ].includes(nextStepIndicator.innerText.trim())) {
                    if (existingSkipCta) {
                        existingSkipCta.remove();
                    }
                    return;
                }

                if (continueSection && !existingSkipCta) {
                    continueSection.insertAdjacentElement("afterend", skipParagraph);
                }
            }

            continueCtaObserver = utils.observeSelector("vm-continue-action-section [data-cy='onContinue']", function (continueCta) {
                if (skipClickActive) {
                    if (continueCta !== initialContinueCta) {
                        continueCta.click();
                    }
                } else {
                    addSkipCta(continueCta);
                }
            }, {
                once: false
            });

            window.registerMO(storyName, { disconnect: continueCtaObserver });

            utils.waitForElement("vm-continue-action-section").then(() => {
                const continueCta = document.querySelector("vm-continue-action-section [data-cy='onContinue']");

                if (continueCta) {
                    addSkipCta(continueCta);
                }
            });
        }

        // Only proceed if subject is found in DOM
        if (subject && typeof $ == "function" && sales_cro) {
            window.clearInterval($timerA);

            try {
                console.log('Variant START -', storyName)
                document.documentElement.classList.add(storyName);
                variant();
            }
            catch (error) {
                console.log(`${storyName} Error: ${error}`);
                sales_cro.fireGA4(experimentId, storyName, "error", `Error: ${error}`);
                document.documentElement.classList.add(storyName + "-error");
            }
        }

    }, 500);
    setTimeout(function () {
        if ($timerA !== null) {
            clearInterval($timerA);
            if (typeof (error) === 'function') {
                error();
            }
        }
    }, 20000);
}(window, document));
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "6179922194989056", "endOfRange": 10000}], "name": "[100%] CSCRO-2529 - Skip in Customise", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4692270178369536"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["29783000371"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "4740213203795968", "name": "[QA][no-track][SPIKE] CSCRO-2366", "commitId": "5133076815151104", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23197550032", "4721173056454656", "4792873663594496"], "audienceName": "optiqa = true,GCP journey: quickCheckout,product 1010", "changes": null, "id": "6558043884748800", "integrationSettings": null, "variations": [{"id": "6088029641637888", "name": "Original", "actions": [{"viewId": "25437860573", "changes": []}]}, {"id": "6152230812778496", "name": "Variation #1", "actions": [{"viewId": "25437860573", "changes": [{"id": "3B484261-C43F-4D0E-A39F-E55E344B2369", "type": "custom_code", "value": function($){// Wrap code in an IIFE
(function (window, document) {
    // Invoking strict mode
    'use strict';
    const storyName = "CSCRO-2366";
    const experimentId = "6558043884748800";
    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        let subject = document.querySelector("h1[data-cy=yourBasket]"),
            $ = window.$,
            sales_cro = window.sales_cro;

        const variant = function () {

            let checkoutEvent = window.dataLayer.filter((i) => i.event === "ecom_event");
            const product = checkoutEvent[checkoutEvent.length - 1].ecommerce.items[0],
                productId = product.bundle_id,
                clientSecret = "VpGkWOlp7fCYFinvqLQhrTpBTX7pojZ3Yc2xDBiGQeDm3qXe9lsRmqyrgYLXqige",
                appId = "h5jteuGEzo17ZDwzg9qBTmeEHCoUT8UA6nc5aSVfr2lcfH7q";
            // console.log("Current product ID:", productId);

            const makePutBasketCall = function (upsellProdID) {
                const uuidv4 = function () {
                    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
                    );
                };

                const addonsURL = `https://api.vmo2digital.co.uk/edmsa/v1/session/basket/${upsellProdID}`;
                const putBasketPayload = JSON.stringify({});

                let correlationId = window.sales_cro.getCookie("onlinesales-correlation-id") !== '' ? window.sales_cro.getCookie("onlinesales-correlation-id") : window.localStorage.getItem("onlinesales-correlation-id"),
                    headers = {
                        'accept': "application/json, text/plain, */*",
                        'Content-Type': 'application/json',
                        'Dapi-Appid': appId,
                        'Dapi-Channelid': "ONLINESALES",
                        'Dapi-Clientsecret': clientSecret,
                        'Dapi-Requestid': uuidv4(),
                        'Dapi-Correlationid': correlationId,
                        'Dapi-Requesttimestamp': new Date().toISOString(),
                    };

                // console.log(`Making PUT request for Product ID: ${upsellProdID}`);
                fetch(addonsURL, {
                    method: 'PUT',
                    headers: headers,
                    body: putBasketPayload
                })
                    .then((response) => response.json())
                    .then((data) => {
                        // console.log("PUT response data =", data);
                        document.location.reload();
                    })
                    .catch((error) => {
                        // console.log("Error during PUT request:", error);
                    });
            };
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `
                <div class="upsell-tv" style="cursor: pointer;">
                    <p style="color: #000; font-size: 16px; font-weight: bold; text-decoration: underline;">Upgrade to M500 Sports + Cinema for £3.99 per month</p>
                </div>
            `;
            document.querySelector("h1[data-cy=yourBasket]").insertAdjacentElement("beforeend",newDiv);

            document.querySelector(".upsell-tv").addEventListener("click", function () {
                makePutBasketCall(4684);
            });
        };

        // Only proceed if subject is found in DOM
        if (subject && typeof $ == "function" && sales_cro) {
            window.clearInterval($timerA);

            try {
                console.log('Variant START - upsell tv')
                document.documentElement.classList.add(storyName);
                variant();
            }
            catch (error) {
                console.log(`${storyName} Error: ${error}`);
                sales_cro.fireGA4(experimentId, storyName, "error", `Error: ${error}`);
                document.documentElement.classList.add(storyName + "-error");
            }
        }

    }, 500);
    setTimeout(function () {
        if ($timerA !== null) {
            clearInterval($timerA);
            if (typeof (error) === 'function') {
                error();
            }
        }
    }, 20000);
}(window, document));
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "6152230812778496", "endOfRange": 10000}], "name": "[QA][no-track][SPIKE] CSCRO-2366", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4740213203795968"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["25437860573"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "4865612944506880", "name": "[QA][no-track][A/B] CSCRO-2360 - Combined installation journey", "commitId": "6277220820320256", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "5303924979138560", "23197550032"], "audienceName": "Cookie consent [consentGroup],optiqa = true", "changes": null, "id": "4893073119903744", "integrationSettings": null, "variations": [{"id": "5991512851349504", "name": "Control", "actions": [{"viewId": "5561862308233216", "changes": [{"name": "cro:control", "type": "custom_code", "value": function($){(function (window, document) {
    "use strict";
    const storyName = "CSCRO-2360";
    const experimentId = "4893073119903744";

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        let subject = document.body,
            sales_cro = window.sales_cro;

        if (subject && sales_cro) {
            window.clearInterval($timerA);
            $timerA = null;

            try {
                console.log("Variant START -", storyName);
                document.documentElement.classList.add(storyName);
                document.documentElement.classList.add(storyName + "-control");
                try {
                    window.localStorage.setItem("onlinesales-df-004", "false");
                } catch (storageError) {
                    /* private mode / blocked storage */
                }
                bindProgressClicks(sales_cro);
            } catch (error) {
                console.log(`${storyName} Error: ${error}`);
                sales_cro.fireGA4(experimentId, storyName, "error", `Error: ${error}`);
                document.documentElement.classList.add(storyName + "-error");
            }
        }
    }, 500);

    window.setTimeout(function () {
        if ($timerA !== null) {
            window.clearInterval($timerA);
            $timerA = null;
        }
    }, 20000);

    function trackClick(sales_cro, eventValue) {
        var token = storyName + "-click-control-" + eventValue;
        try {
            if (window.sessionStorage && window.sessionStorage.getItem(token)) {
                return;
            }
        } catch (readError) {
            /* ignore */
        }
        sales_cro.fireGA4(experimentId, storyName, "click", eventValue);
        if (typeof sales_cro.fireOpti === "function") {
            sales_cro.fireOpti(eventValue);
        }
        try {
            if (window.sessionStorage) {
                window.sessionStorage.setItem(token, "1");
            }
        } catch (writeError) {
            /* ignore */
        }
    }

    function bindProgressClicks(sales_cro) {
        if (window.__cscro2360Progress) {
            return;
        }
        window.__cscro2360Progress = true;
        document.addEventListener(
            "click",
            function (event) {
                var button = eventClosest(event, '[data-cy="onContinue"]');
                if (!button || typeof button.closest !== "function") {
                    return;
                }
                var section = button.closest("vm-continue-action-section");
                if (!section) {
                    return;
                }
                if (!section.querySelector('[data-cy="nextStepIndicatorText"]')) {
                    return;
                }
                if (button.closest("vm-book-engineer-shell")) {
                    trackClick(sales_cro, "2360_Progress_Engineer_install");
                    return;
                }
                if (button.closest("vm-installation-shell")) {
                    trackClick(sales_cro, "2360_Progress_Self_install");
                }
            },
            true
        );
    }

    function eventClosest(event, selector) {
        var path = event && typeof event.composedPath === "function" ? event.composedPath() : null;
        var i;
        if (path && path.length) {
            for (i = 0; i < path.length; i++) {
                var node = path[i];
                if (node && node.nodeType === 1 && typeof node.matches === "function" && node.matches(selector)) {
                    return node;
                }
            }
            return null;
        }
        var el = event && event.target;
        if (!el) {
            return null;
        }
        if (el.nodeType !== 1) {
            el = el.parentElement;
        }
        if (!el || typeof el.closest !== "function") {
            return null;
        }
        return el.closest(selector);
    }
})(window, document);
}, "id": "64ff1405-1b7b-45cb-ac19-edc1be0c6f46", "dependencies": []}]}]}, {"id": "4541515517657088", "name": "Variation #1", "actions": [{"viewId": "5561862308233216", "changes": [{"name": "cro:v1", "type": "custom_code", "value": function($){(function (window, document) {
    "use strict";
    const storyName = "CSCRO-2360";
    const experimentId = "4893073119903744";
    const carouselClickSelectors = [
        '[data-cy="self-install-kit-carousel__prev"]',
        '[data-cy="self-install-kit-carousel__next"]',
        '[data-cy="self-install-kit-carousel__pagination"]',
        '[data-cy="self-install-kit-carousel__learn-more"]',
    ];

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        let subject = document.body,
            sales_cro = window.sales_cro;

        if (subject && sales_cro) {
            window.clearInterval($timerA);
            $timerA = null;

            try {
                console.log("Variant START -", storyName);
                document.documentElement.classList.add(storyName);
                document.documentElement.classList.add(storyName + "-v1");
                try {
                    window.localStorage.setItem("onlinesales-df-004", "true");
                } catch (storageError) {
                    /* private mode / blocked storage */
                }
                bindProgressClicks(sales_cro);
                bindCarouselClicks(sales_cro);
            } catch (error) {
                console.log(`${storyName} Error: ${error}`);
                sales_cro.fireGA4(experimentId, storyName, "error", `Error: ${error}`);
                document.documentElement.classList.add(storyName + "-error");
            }
        }
    }, 500);

    window.setTimeout(function () {
        if ($timerA !== null) {
            window.clearInterval($timerA);
            $timerA = null;
        }
    }, 20000);

    function trackClick(sales_cro, eventValue) {
        var token = storyName + "-click-v1-" + eventValue;
        try {
            if (window.sessionStorage && window.sessionStorage.getItem(token)) {
                return;
            }
        } catch (readError) {
            /* ignore */
        }
        sales_cro.fireGA4(experimentId, storyName, "click", eventValue);
        if (typeof sales_cro.fireOpti === "function") {
            sales_cro.fireOpti(eventValue);
        }
        try {
            if (window.sessionStorage) {
                window.sessionStorage.setItem(token, "1");
            }
        } catch (writeError) {
            /* ignore */
        }
    }

    function bindProgressClicks(sales_cro) {
        if (window.__cscro2360Progress) {
            return;
        }
        window.__cscro2360Progress = true;
        document.addEventListener(
            "click",
            function (event) {
                var button = eventClosest(event, '[data-cy="onContinue"]');
                if (!button || typeof button.closest !== "function") {
                    return;
                }
                var section = button.closest("vm-continue-action-section");
                if (!section) {
                    return;
                }
                var hasNextStep = !!section.querySelector('[data-cy="nextStepIndicatorText"]');
                var sectionContinue = !hasNextStep && !!button.closest("vo-form-vertical-section");
                if (!hasNextStep && !sectionContinue) {
                    return;
                }
                if (hasNextStep && button.closest("vm-book-engineer-shell")) {
                    trackClick(sales_cro, "2360_Progress_Engineer_install");
                    return;
                }
                var selected = document.querySelector(
                    'vm-installation-cards-section input[type="radio"]:checked'
                );
                if (!selected) {
                    return;
                }
                if (selected.value === "QuickStartInstallation") {
                    trackClick(sales_cro, "2360_Progress_Self_install");
                } else if (selected.value === "MannedInstallation") {
                    trackClick(sales_cro, "2360_Progress_Engineer_install");
                }
            },
            true
        );
    }

    function bindCarouselClicks(sales_cro) {
        if (window.__cscro2360Carousel) {
            return;
        }
        window.__cscro2360Carousel = true;
        document.addEventListener(
            "click",
            function (event) {
                var i;
                for (i = 0; i < carouselClickSelectors.length; i++) {
                    if (eventClosest(event, carouselClickSelectors[i])) {
                        trackClick(sales_cro, "2360_Setup_Carousel");
                        return;
                    }
                }
            },
            true
        );
        document.addEventListener(
            "swiperslidechange",
            function (event) {
                if (!event || event.type === "swiperinit") {
                    return;
                }
                var swiper = eventClosest(event, "swiper-container");
                if (!swiper || typeof swiper.closest !== "function") {
                    return;
                }
                if (!swiper.closest('[data-cy="self-install-kit-carousel"]')) {
                    return;
                }
                trackClick(sales_cro, "2360_Setup_Carousel");
            },
            true
        );
    }

    function eventClosest(event, selector) {
        var path = event && typeof event.composedPath === "function" ? event.composedPath() : null;
        var i;
        if (path && path.length) {
            for (i = 0; i < path.length; i++) {
                var node = path[i];
                if (node && node.nodeType === 1 && typeof node.matches === "function" && node.matches(selector)) {
                    return node;
                }
            }
            return null;
        }
        var el = event && event.target;
        if (!el) {
            return null;
        }
        if (el.nodeType !== 1) {
            el = el.parentElement;
        }
        if (!el || typeof el.closest !== "function") {
            return null;
        }
        return el.closest(selector);
    }
})(window, document);
}, "id": "be3bca32-6948-40d2-8c4f-cc16442ac7d8", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "5991512851349504", "endOfRange": 5000}, {"entityId": "4541515517657088", "endOfRange": 10000}], "name": "[QA][no-track][A/B] CSCRO-2360 - Combined installation journey", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4865612944506880"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5561862308233216"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "4893073119903744", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "4908196330995712", "name": "[no-track][100%]CSCRO-2197 Reorder Sims", "commitId": "5845965983186944", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5134141876862976", "integrationSettings": null, "variations": [{"id": "5425976314691584", "name": "Original", "actions": []}, {"id": "5341658372374528", "name": "Variation #1", "actions": [{"viewId": "6105551386443776", "changes": [{"id": "372998F9-4294-4D1E-887C-FE4D4CDDD44E", "type": "custom_code", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subjectSelectorArray = ["vm-continue-action-section"],
            subjectRemainingToLoad = subjectSelectorArray.filter(subject=>{return document.querySelectorAll(subject).length===0}).length==0,
            sales_cro = window.sales_cro, 
            optimzly = window.optimizely;

            const experimentId = "5134141876862976", storyNumber = "CSCRO-2197",
            variant = ()=>{

                optimzly.get("utils").observeSelector("vm-sim-selection swiper-slide .content-top-area .sim-card-speed",()=>{                    
                   let simTiles = document.querySelectorAll('vm-sim-selection swiper-slide .content-top-area .sim-card-speed'),
                      unlimitedTile= Array.from(simTiles).find(el => el.textContent.trim() === 'Unlimited'),
                      unlimitedSlide = unlimitedTile!==undefined ? unlimitedTile.closest('swiper-slide') : null;

                      if(unlimitedSlide!==null) document.querySelector('vm-sim-selection swiper-container').prepend(unlimitedSlide);
                },{once:false});
                    
            };
            
        // Only proceed if subject is found in DOM
        if( subjectRemainingToLoad && sales_cro && typeof $ == "function" && optimzly) {
            window.clearInterval($timerA);
            try{
                document.querySelector('body').classList.add(storyNumber+"-sim");
                console.log("in "+storyNumber+"-sim");
                variant();
            }
            catch(error){
                console.log(`${storyNumber} Error: ${error}`);
                window.sales_cro.fireGA4(experimentId,storyNumber,"error",`Error: ${error}`);
                document.documentElement.classList.add(storyNumber+" - error");
            }       
        }       
    }, 500);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);
}(window, document));
}, "dependencies": [], "name": "", "isOpalManaged": false}]}]}], "weightDistributions": [{"entityId": "5341658372374528", "endOfRange": 10000}], "name": "[no-track][100%]CSCRO-2197 Reorder Sims", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4908196330995712"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6105551386443776"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5002785878441984", "name": "[100%] CSCRO-2522 - Hide 362MB speed", "commitId": "5312743132102656", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "6287211820220416", ["or", "29787670039", "4721173056454656"]], "audienceName": "[2522] Product IDs 4302, 4301, 4009,GCP journey : create-basket,GCP journey: quickCheckout", "changes": null, "id": "5969738742890496", "integrationSettings": null, "variations": [{"id": "6358494570348544", "name": "Variation #1", "actions": [{"viewId": "29783000371", "changes": [{"id": "27C7C34D-9D1E-494C-82D9-0D5FADF6976A", "type": "custom_code", "value": function($){(function (window, document) {
    "use strict";

    var storyNumber = "CSCRO-2522";
    var experimentId = "5969738742890496";
    var hiddenClass = storyNumber + "-hidden";
    var $timerA = null;
    var cardObserver = null;

    function speedLabel(card) {
        var nodes = card.querySelectorAll("[data-cy='speed-card']");
        var i;
        for (i = 0; i < nodes.length; i++) {
            var text = (nodes[i].textContent || "").replace(/\s+/g, " ").trim();
            if (text) {
                return text;
            }
        }
        return "";
    }

    function isTargetSpeed(label) {
        return /^(362|350)(\s*mb(ps|s)?)?$/i.test(label) || /^m350\b/i.test(label);
    }

    function hideTargetCards(root) {
        var cards = root.querySelectorAll("vm-speed-card");
        var i;
        for (i = 0; i < cards.length; i++) {
            if (isTargetSpeed(speedLabel(cards[i]))) {
                cards[i].classList.add(hiddenClass);
            }
        }
    }

    function watch(root) {
        if (cardObserver) {
            cardObserver.disconnect();
        }
        cardObserver = new MutationObserver(function () {
            hideTargetCards(root);
        });
        cardObserver.observe(root, { childList: true, subtree: true });
        if (typeof window.registerMO === "function") {
            window.registerMO(storyNumber, cardObserver);
        }
        hideTargetCards(root);
    }

    $timerA = window.setInterval(function () {
        var subject = document.querySelector("vm-speed-selection");
        if (!subject) {
            return;
        }
        window.clearInterval($timerA);
        $timerA = null;
        try {
            console.log("Variant START -", storyNumber, experimentId);
            document.documentElement.classList.add(storyNumber);
            document.documentElement.classList.add(storyNumber + "-v1");
            watch(subject);
        } catch (error) {
            console.log(storyNumber + " Error: " + error);
            document.documentElement.classList.add(storyNumber + "-error");
        }
    }, 500);

    window.setTimeout(function () {
        if ($timerA !== null) {
            window.clearInterval($timerA);
            $timerA = null;
        }
    }, 20000);
})(window, document);
}, "dependencies": []}, {"id": "A6BB4590-62D1-46BD-B471-455D2DD36286", "type": "append", "selector": "head", "value": "<style>.CSCRO-2522-v1 vm-speed-card.CSCRO-2522-hidden {\n    display: none !important;\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "[100%] CSCRO-2522 - Hide 362MB speed", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5002785878441984"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["29783000371"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "5969738742890496", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": [{"id": "A34663F0-A1F2-460D-ADD3-BFC5C120B9FF", "type": "custom_code", "value": function($){((w) => {
    "use strict";

    const window = typeof unsafeWindow !== "undefined" ? unsafeWindow : w;
    const storyNumber = "CSCRO-2488";
    const experimentId = "4518652534325248";
    const sales_cro = window.sales_cro;
    const prefix = "cscro";
    const debug = document.cookie.includes("vmDEV");
    const imgRoot = "https://storyblok.cdn.vmo2digital.co.uk/f/253875/";

    const utils = {
        waitUntil: (cond, cb, storyNumber, timeout = 10000) => {
            let stop = false;
        
            const timer = setTimeout(() => {
                stop = true;
            }, timeout);
        
            const end = () => {
                clearTimeout(timer);
                stop = true;
            };
        
            const check = () => {
                if (stop) return;
        
                try {
                    const elCached = typeof cond === "string" ? document.querySelector(cond) : undefined;
                    const condSuccess = typeof cond === "function" ? cond() : undefined;
        
                    if (elCached) {
                        cb(elCached);
                        end();
                        return;
                    }
        
                    if (condSuccess) {
                        cb();
                        end();
                        return;
                    }
                } catch (err) {
                    if (storyNumber) utils.log(err, storyNumber);
                    else console.error(err);
                }
        
                if (!stop) {
                    window.requestAnimationFrame(check);
                }
            };
        
            check();
        },
        log: (msg, expTag = storyNumber) => {
            debug && console.log(`[CSCRO] ${storyNumber} -->`, msg);
        },
        checkPageChanges: (target, cb, opts = {childList: true, subtree: true, attributes: true}) => {
            const debounce = (func, delay) => {
                let timeout;
        
                return (...args) => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => func(...args), delay)
                }
            }

            const observer = new MutationObserver(
                debounce(() => {
                    cb();
                }, 100)
            )
    
            observer.observe(target, opts);
        },
        dispatchClick: (el) => {
            [`mousedown`, `mouseup`, `click`].forEach(event =>
                el.dispatchEvent(new MouseEvent(event, { bubbles: true }))
            );
        }
    }

    window.addEventListener("click", (e) => {
        const el = e.target;

        if(
            el.closest('a[href="/broadband/black-friday-deals"]')
            && el.closest('[data-testid="hero-container"]')
        ){
            sales_cro.fireGA4(experimentId,storyNumber,"click", "Click Shop now");
        }
    })
})(window)
}, "dependencies": []}], "id": "5055214208679936", "name": "[A/B] CSCRO-2488 BF - HP Hero", "commitId": "5840398722007040", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "5303924979138560"], "audienceName": "Cookie consent [consentGroup]", "changes": null, "id": "4518652534325248", "integrationSettings": null, "variations": [{"id": "6744064068943872", "name": "Original", "actions": []}, {"id": "5455618910191616", "name": "Variation #1", "actions": [{"viewId": "6450020239540224", "changes": [{"id": "0B37DE3C-0D4C-4058-9224-8F39B568CFE1", "type": "custom_code", "value": function($){((w) => {
    "use strict";

    const window = typeof unsafeWindow !== "undefined" ? unsafeWindow : w;
    const storyNumber = "CSCRO-2488";
    const experimentId = "4518652534325248";
    const sales_cro = window.sales_cro;
    const prefix = "cscro";
    const debug = document.cookie.includes("vmDEV");
    const imgRoot = "https://storyblok.cdn.vmo2digital.co.uk/f/253875/";

    const utils = {
        waitUntil: (cond, cb, storyNumber, timeout = 10000) => {
            let stop = false;
        
            const timer = setTimeout(() => {
                stop = true;
            }, timeout);
        
            const end = () => {
                clearTimeout(timer);
                stop = true;
            };
        
            const check = () => {
                if (stop) return;
        
                try {
                    const elCached = typeof cond === "string" ? document.querySelector(cond) : undefined;
                    const condSuccess = typeof cond === "function" ? cond() : undefined;
        
                    if (elCached) {
                        cb(elCached);
                        end();
                        return;
                    }
        
                    if (condSuccess) {
                        cb();
                        end();
                        return;
                    }
                } catch (err) {
                    if (storyNumber) utils.log(err, storyNumber);
                    else console.error(err);
                }
        
                if (!stop) {
                    window.requestAnimationFrame(check);
                }
            };
        
            check();
        },
        log: (msg, expTag = storyNumber) => {
            debug && console.log(`[CSCRO] ${storyNumber} -->`, msg);
        },
        checkPageChanges: (target, cb, opts = {childList: true, subtree: true, attributes: true}) => {
            const debounce = (func, delay) => {
                let timeout;
        
                return (...args) => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => func(...args), delay)
                }
            }

            const observer = new MutationObserver(
                debounce(() => {
                    cb();
                }, 100)
            )
    
            observer.observe(target, opts);
        },
        dispatchClick: (el) => {
            [`mousedown`, `mouseup`, `click`].forEach(event =>
                el.dispatchEvent(new MouseEvent(event, { bubbles: true }))
            );
        }
    }

    const svgs = {
        boldOrange: `<svg xmlns="http://www.w3.org/2000/svg" width="1103" height="356" viewBox="0 0 1103 356" fill="none"><path d="M1101.56 130.395L1082.12 19.7881C1079.85 6.79226 1067.47 -1.90257 1054.47 0.35732H1052.98C576.142 84.8069 193.479 441.289 2.14744 979.375H1.40012C-3.09324 992.168 3.58361 1006.19 16.3479 1010.76L122.477 1048.13C128.521 1050.27 135.169 1049.89 140.93 1047.08C146.691 1044.27 151.083 1039.26 153.12 1033.18C235.333 802.255 359.4 602.715 511.867 453.994C664.334 305.273 865.382 196.908 1080.63 158.794H1082.12C1088.52 157.71 1094.21 154.074 1097.87 148.719C1101.53 143.364 1102.86 136.75 1101.56 130.395Z" fill="url(#paint0_linear_6712_804)"/><defs><linearGradient id="paint0_linear_6712_804" x1="2.96963" y1="902.126" x2="975.149" y2="4.35872" gradientUnits="userSpaceOnUse"><stop stop-color="#FF0A0A"/><stop offset="0.01" stop-color="#FF0C0A"/><stop offset="0.26" stop-color="#FF3606"/><stop offset="0.49" stop-color="#FF5503"/><stop offset="0.68" stop-color="#FF6701"/><stop offset="0.81" stop-color="#FF6E00"/></linearGradient></defs></svg>`,
        lightOrange: `<svg xmlns="http://www.w3.org/2000/svg" width="550" height="615" viewBox="0 0 550 615" fill="none"><path d="M539.494 -80.8265L386.279 -293.072C367.936 -317.955 333.061 -323.601 307.803 -305.776L304.814 -303.534C-62.1545 -38.228 -350.647 352.632 -529.273 827.941L-530.768 830.93C-541.355 859.817 -526.678 891.838 -497.882 902.675L-253.486 995.346C-224.396 1005.98 -192.147 991.355 -180.989 962.463L-179.495 959.473C-27.0272 553.667 216.622 221.1 523.799 -0.860891L526.788 -2.35561C551.313 -20.9149 556.91 -55.4771 539.494 -80.8265Z" fill="url(#paint0_linear_6712_829)"/><defs><linearGradient id="paint0_linear_6712_829" x1="288.904" y1="-245.839" x2="-496.213" y2="821.586" gradientUnits="userSpaceOnUse"><stop stop-color="#FF0A0A"/><stop offset="0.73" stop-color="#FF6E00"/></linearGradient></defs></svg>`,
        lightOrangeBottom: `<svg xmlns="http://www.w3.org/2000/svg" width="343" height="150" viewBox="0 0 343 150" fill="none"><path d="M332.573 104.555L219.718 7.40069C206.246 -3.77139 186.311 -2.11024 174.874 11.1374L173.379 12.6321C111.21 85.1414 54.7383 162.348 4.4696 243.561V245.055C-4.34451 260.194 0.256754 279.584 14.933 289.149L141.242 366.872C156.123 376.244 175.773 371.914 185.338 357.157V354.915C229.738 283.094 279.718 214.875 334.816 150.89V149.396C345.977 136.185 344.997 116.587 332.573 104.555Z" fill="url(#paint0_linear_6712_389)"/><defs><linearGradient id="paint0_linear_6712_389" x1="281.86" y1="11.5111" x2="87.3775" y2="278.959" gradientUnits="userSpaceOnUse"><stop offset="0.11" stop-color="#FF0A0A"/><stop offset="0.78" stop-color="#FF6E00"/></linearGradient></defs></svg>`,
        lightOrangeTop: `<svg xmlns="http://www.w3.org/2000/svg" width="419" height="26" viewBox="0 0 419 26" fill="none"><path d="M417.789 -130.151L389.389 -234.779C387.811 -240.73 383.93 -245.809 378.601 -248.894C373.272 -251.979 366.935 -252.816 360.988 -251.22H359.493C239.541 -218.604 123.507 -172.996 13.4518 -115.204H12.7045C7.08598 -112.502 2.84603 -107.583 1.0026 -101.628C-0.84082 -95.6728 -0.121269 -89.2189 2.98842 -83.8157L53.0635 12.5913C59.3206 24.0679 73.6334 28.3948 85.2011 22.3068H85.9486C186.012 -30.1684 291.525 -71.5191 400.599 -101.005H401.347C407.469 -102.569 412.686 -106.565 415.79 -112.068C418.895 -117.571 419.617 -124.103 417.789 -130.151Z" fill="url(#paint0_linear_6712_827)"/><defs><linearGradient id="paint0_linear_6712_827" x1="21.8973" y1="-81.0545" x2="363.12" y2="-216.904" gradientUnits="userSpaceOnUse"><stop stop-color="#FF0A0A"/><stop offset="0.01" stop-color="#FF0B0A"/><stop offset="0.47" stop-color="#FF4005"/><stop offset="0.81" stop-color="#FF6101"/><stop offset="1" stop-color="#FF6E00"/></linearGradient></defs></svg>`,
        orangeCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="105" height="60" viewBox="0 0 105 60" fill="none"><path d="M52.3172 59.6737C81.2113 59.6737 104.634 36.252 104.634 7.35982C104.634 -21.5324 81.2113 -44.9541 52.3172 -44.9541C23.4232 -44.9541 0 -21.5324 0 7.35982C0 36.252 23.4232 59.6737 52.3172 59.6737Z" fill="url(#paint0_linear_6712_833)"/><defs><linearGradient id="paint0_linear_6712_833" x1="-0.149478" y1="7.50929" x2="104.784" y2="7.50929" gradientUnits="userSpaceOnUse"><stop stop-color="#FF0A0A"/><stop offset="1" stop-color="#FF6E00"/></linearGradient></defs></svg>`,
        checkMark: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M16.6654 5L7.4987 14.1667L3.33203 10" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        bbOnlyFlares: `<svg xmlns="http://www.w3.org/2000/svg" width="540" height="335" viewBox="0 0 540 335" fill="none"><path d="M-137.851 311.729L-69.2449 414.832C-65.2811 420.64 -59.1657 424.628 -52.2527 425.914C-45.3397 427.199 -38.1993 425.677 -32.4124 421.682L-31.1375 421.067L6.5513 397.12C147.678 310.691 293.414 256.613 439.713 237.362L440.988 236.747C455.427 234.627 465.54 221.379 463.778 206.892L447.57 84.27C445.449 69.8316 432.201 59.7189 417.714 61.4807L416.44 62.0958C286.404 80.2562 160.073 118.932 42.1567 176.68C-0.620314 197.32 -43.3638 220.563 -86.0736 246.409L-129.301 274.077L-130.576 274.692C-136.511 278.591 -140.627 284.714 -141.995 291.682C-143.364 298.65 -141.87 305.875 -137.851 311.729Z" fill="url(#paint0_linear_6690_4354)"/><path d="M228.032 328.453L228.852 327.938C301.147 279.841 391.909 258.926 491.358 267.111L492.099 267.561C500.575 268.091 507.956 261.833 508.819 253.384L514.964 181.082C515.494 172.606 509.235 165.225 500.787 164.362L499.821 164.283C377.014 154.078 263.409 180.889 171.578 241.959L170.757 242.475C163.804 247.291 161.871 256.726 166.37 263.888L206.506 324.252C208.781 327.691 212.341 330.073 216.389 330.863C220.436 331.653 224.631 330.785 228.032 328.453Z" fill="url(#paint1_linear_6690_4354)"/><defs><linearGradient id="paint0_linear_6690_4354" x1="457.961" y1="103.092" x2="-107.206" y2="375.785" gradientUnits="userSpaceOnUse"><stop stop-color="#8A36F1"/><stop offset="1" stop-color="#FF6EFF"/></linearGradient><linearGradient id="paint1_linear_6690_4354" x1="495.057" y1="205.64" x2="195.078" y2="274.079" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6EFF"/><stop offset="1" stop-color="#FF0A0A"/></linearGradient></defs></svg>`,
        bbTvFlare1: `<svg xmlns="http://www.w3.org/2000/svg" width="353" height="170" viewBox="0 0 353 170" fill="none"><path d="M288.356 2.70784L287.532 3.22614C214.886 51.5565 123.683 72.5725 23.7514 64.348L23.0071 63.896C14.4901 63.3629 7.07275 69.6522 6.2061 78.1417L0.0313408 150.795C-0.501682 159.312 5.78753 166.729 14.2771 167.596L15.2474 167.676C138.65 177.93 252.807 150.988 345.085 89.622L345.909 89.1038C352.896 84.2646 354.839 74.7837 350.317 67.5866L309.986 6.93002C307.701 3.47379 304.123 1.08014 300.056 0.286317C295.989 -0.50754 291.774 0.364909 288.356 2.70784Z" fill="url(#paint0_linear_6690_4371)"/><defs><linearGradient id="paint0_linear_6690_4371" x1="20.0344" y1="126.118" x2="321.47" y2="57.3462" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6EFF"/><stop offset="1" stop-color="#FF0A0A"/></linearGradient></defs></svg>`,
        bbTvFlare2: `<svg xmlns="http://www.w3.org/2000/svg" width="410" height="282" viewBox="0 0 410 282" fill="none"><path d="M604.75 115.186L535.81 11.583C531.827 5.74704 525.682 1.73942 518.736 0.447529C511.789 -0.844393 504.614 0.685926 498.799 4.69971L497.518 5.31784L459.646 29.3813C317.834 116.23 171.391 170.57 24.3811 189.914L23.1001 190.532C8.59159 192.663 -1.57043 205.976 0.200003 220.532L16.4869 343.75C18.6174 358.258 31.93 368.42 46.4868 366.65L47.7678 366.032C178.435 347.783 305.379 308.92 423.868 250.891C466.853 230.151 509.804 206.795 552.721 180.824L596.158 153.022L597.439 152.403C603.403 148.486 607.539 142.332 608.914 135.331C610.289 128.329 608.788 121.069 604.75 115.186Z" fill="url(#paint0_linear_6690_4372)"/><defs><linearGradient id="paint0_linear_6690_4372" x1="6.04511" y1="324.837" x2="573.956" y2="50.8196" gradientUnits="userSpaceOnUse"><stop stop-color="#8A36F1"/><stop offset="1" stop-color="#FF6EFF"/></linearGradient></defs></svg>`,
    }

    const imgs = {
        bbOnly: `${imgRoot}504x504/63c7afe048/bb-only-img-1.png`,
        bbTv: `${imgRoot}1080x612/d85914418e/bb-tv-img.png`,
        preSvc: `${imgRoot}388x230/a504e45b86/hero-img-low-res.png`,
        preSvcMob: `${imgRoot}786x367/395973bc3f/hero-img-mob.png`,
        tvOnly: `${imgRoot}322x228/4547163212/bb-tv-tv-img.png`,
        bfHero: `${imgRoot}966x442/48c597db87/cscro-bf-hero-img.png`,
        bbOnlyBF: `${imgRoot}/1016x480/6ee1639b98/cscro-bb-only-deals.png`,
        tvBundlesBF: `${imgRoot}1016x480/f721c43914/cscro-tv-bundles.png`,
        tvBundleMob: `${imgRoot}352x262/52f871837b/tv-bundle-mobile.png`,
        roundel: `${imgRoot}406x360/e6d25ac77b/cscro-roundel.png`,
        deviceTag: `${imgRoot}620x430/20ff3f5295/cscro-devic-tag.png`
    }

    const content = {
        bbOnly: `
            <div class="${prefix}-bb-only-tile ${prefix}-banner-tile">
                <div class="${prefix}-banner-tile-inner">
                    <h2>Broadband only</h2>
                    <p class="${prefix}-sub-head">Lightning-fast fibre broadband</p>
                    <p class="${prefix}-price">From £21.99/month</p>
                    <div class="${prefix}-cta">
                        <a href="/broadband/broadband-only">View deals</a>
                    </div>
                    <div class="${prefix}-tile-img">
                        <img src="${imgs.bbOnlyBF}">
                    </div>
                    <div class="${prefix}-tile-flares">
                        ${svgs.bbOnlyFlares}
                    </div>
                </div>
            </div>
        `,
        bbTv: `
            <div class="${prefix}-bb-tv-tile ${prefix}-banner-tile">
                <div class="${prefix}-banner-tile-inner">
                    <h2>TV & Broadband</h2>
                    <p class="${prefix}-sub-head">Complete entertainment bundles</p>
                    <p class="${prefix}-price">From £31.99/month</p>
                    <div class="${prefix}-cta">
                        <a href="/broadband/broadband-and-tv">View deals</a>
                    </div>
                    <div class="${prefix}-tile-img">
                        <img src="${imgs.tvBundlesBF}" class="${prefix}-tv-bundle-img-desktop">
                        <img src="${imgs.tvBundleMob}" class="${prefix}-tv-bundle-img-mob">
                    </div>
                    <div class="${prefix}-tile-flares">
                        ${svgs.bbTvFlare1}
                        ${svgs.bbTvFlare2}
                    </div>
                </div>
            </div>
        `
    }

    let path = window.location.pathname;

    const insertNewHero = () => {
        if(document.querySelector(`.${prefix}-hero`)) return;

        utils.waitUntil('[data-testid="hero-container"]', (hero) => {
            const markup = `
                <div class="${prefix}-change-postcode-banner">
                    <div class="${prefix}-check-mark">${svgs.checkMark}</div><p>Great news! <span></span><button class="${prefix}-change-cta">Change address</button></p>
                </div>
                <div class="${prefix}-bb-tv-bg"></div>
                <div class="${prefix}-hero">
                    <h1>BLACK FRIDAY</h1>
                    <div class="${prefix}-device-tag">
                        <img src="${imgs.deviceTag}">
                    </div>
                    <div class="${prefix}-roundel">
                        <img src="${imgs.roundel}">
                    </div>
                    <div class="${prefix}-hero-blocks">
                        ${content.bbOnly}
                        ${content.bbTv}
                    </div>
                    <div class="${prefix}-bf-hero-imgs">
                        <img src="${imgs.bfHero}">
                    </div>        
                </div>
            `;

            hero.insertAdjacentHTML('afterbegin', markup);

            const bbOnlyViewDeals = document.querySelector(`.${prefix}-bb-only-tile a`);
            const tvViewDeals = document.querySelector(`.${prefix}-bb-tv-tile a`);

            bbOnlyViewDeals.addEventListener("click", () => {
                sales_cro.fireGA4(experimentId,storyNumber,"click", "Click BB only");
            })

            tvViewDeals.addEventListener("click", () => {
                sales_cro.fireGA4(experimentId,storyNumber,"click", "Click BB&TV");
            })

            const postcodeBanner = document.querySelector(`.${prefix}-change-postcode-banner`);
            const header = document.querySelector('[data-testid="header-content"]');

            header.insertAdjacentElement("beforebegin", postcodeBanner);

            utils.waitUntil(`.${prefix}-change-cta`, (changeCta) => {
                changeCta.addEventListener("click", () => {
                    const heroSecondState = document.querySelector(`.${prefix}-second-state`);
                    const showHero = document.querySelector(`.${prefix}-show-hero`);
                    const hideBannerChild = document.querySelector(`[class*="hero_hero-banner__container--children-wrapper"].${prefix}-hide`);
                    const hideBannerImg = document.querySelector(`[class*="hero_hero-banner__split-image-container"].${prefix}-hide`);
                    const tvBg = document.querySelector(`.${prefix}-bb-tv-bg.${prefix}-slide-in`);
                    const postcodeBanner = changeCta.closest(`.${prefix}-change-postcode-banner`);

                    if(heroSecondState){
                        heroSecondState.classList.remove(`${prefix}-second-state`)
                    }

                    if(showHero){
                        showHero.classList.remove(`${prefix}-show-hero`)
                    }

                    if(tvBg){
                        tvBg.classList.remove(`.${prefix}-slide-in`)
                    }

                    if(hideBannerChild){
                        hideBannerChild.classList.remove(`${prefix}-hide`)
                    }

                    if(hideBannerImg){
                        hideBannerImg.classList.remove(`${prefix}-hide`)
                    }

                    utils.waitUntil('[data-cy="postcode-change-address-link"] button', (btn) =>{
                        utils.dispatchClick(btn)
                    })
                })
            })
        })
    }

    const preSvcChange = () => {
        if(document.querySelector(`.${prefix}-hero-img-tv`)) return;
        
        utils.waitUntil(
            '[data-testid="hero-container"] [class*="hero_hero-banner__container--children-wrapper"] h1 + div p',
            (heroPara) => {
                const heroMain = heroPara.closest(
                    '[data-testid="hero-container"] [class*="hero_hero-banner__container--children-wrapper"]'
                );

                const heroTitle = heroMain.querySelector('h1');

                heroMain.insertAdjacentHTML(
                    "afterbegin",
                    `
                        <div class="${prefix}-hero-img-tv">
                            <img src="${imgs.preSvc}">
                            <img class="${prefix}-mob-hero-img" src="${imgs.preSvcMob}">
                        </div>
                    `
                );

                // heroTitle.innerText = 'Life in the ultrafast lane'
                // heroPara.innerText = 'Scroll, stream and meme to the extreme with epic deals on ultrafast broadband and edge-of-your-seat entertainment'
            }
        );
    }

    const insertFlares = () => {
        utils.waitUntil('[data-testid="hero-container"]', (heroCont) => {
            if(document.querySelector(`.${prefix}-hero-flares-added`)) return;
            
            heroCont.classList.add(`${prefix}-hero-flares-added`);

            heroCont.insertAdjacentHTML(
                "afterbegin", 
                `<div class="${prefix}-hero-flare ${prefix}-bold-flare">
                    ${svgs.boldOrange}
                </div`
            );

            heroCont.insertAdjacentHTML(
                "afterbegin", 
                `<div class="${prefix}-hero-flare ${prefix}-circle-flare">
                    ${svgs.orangeCircle}
                </div`
            );

            heroCont.insertAdjacentHTML(
                "afterbegin", 
                `<div class="${prefix}-hero-flare ${prefix}-light-flare">
                    ${svgs.lightOrange}
                </div`
            );

            heroCont.insertAdjacentHTML(
                "afterbegin", 
                `<div class="${prefix}-hero-flare ${prefix}-light-ob-flare">
                    ${svgs.lightOrangeBottom}
                </div`
            );

            heroCont.insertAdjacentHTML(
                "afterbegin", 
                `<div class="${prefix}-hero-flare ${prefix}-light-ot-flare">
                    ${svgs.lightOrangeTop}
                </div`
            );
        })
    }

    const showNewHero = () => {
        if(document.querySelector(`.${prefix}-show-hero`)) return;

        console.log("show hero");

        window.scrollTo(0,0);

        utils.waitUntil(
            `[data-testid="hero-container"]`,
            (heroCont) => {
                heroCont.classList.add(`${prefix}-second-state`);
            }
        )

        utils.waitUntil(
            `[class*="hero_hero-banner__container--children-wrapper"]`,
            (heroChild) => {
                heroChild.classList.add(`${prefix}-hide`)
            }
        )

        utils.waitUntil(
            `[class*="hero_hero-banner__split-image-container"]`,
            (heroChild) => {
                heroChild.classList.add(`${prefix}-hide`);
            }
        )

        utils.waitUntil(
            `.cscro-bb-tv-bg`,
            (tileBg) => {
                tileBg.classList.add(`${prefix}-slide-in`);
            }
        )

        utils.waitUntil(
            `.${prefix}-hero`,
            (newHero) => {
                setTimeout(() => {
                    newHero.classList.add(`${prefix}-show-hero`)
                }, 0);
            }
        )

        utils.waitUntil(`.${prefix}-change-postcode-banner`, (postcodeBanner) => {
            postcodeBanner.classList.remove(`${prefix}-hide`)
            postcodeBanner.classList.add(`${prefix}-hide-in-transition`);

            setTimeout(() => {
                postcodeBanner.classList.remove(`${prefix}-show-in-transition`);
            }, 5000);
        })

        utils.waitUntil('[data-cy="postcode-result-text"]', (postcodeMsg) => {
            const changeCta = document.querySelector(`.${prefix}-change-cta`);

            if (!changeCta) return;

            const postCodeBanner = changeCta.parentElement;
            const postCodeBannerSpan = postCodeBanner.querySelector("span");

            postCodeBannerSpan.classList.add(`${prefix}-postcode-updated`);

            const postcodeMsgSplit = postcodeMsg.innerText.split(" at ");

            postCodeBannerSpan.innerHTML =
                `${postcodeMsgSplit[0]} at <span class="${prefix}-bold-pc">${postcodeMsgSplit[1]}</span>`;
        });
    }

    const initVariation = () => {
        try {
            document.documentElement.classList.add(storyNumber);
            path = window.location.pathname;

            if(path !== "/"){
                document.documentElement.classList.remove(storyNumber);
                return;
            }

            if(
                document.querySelector('[data-cy="postcode-result-section"]') &&
                document.querySelector(`.${prefix}-pc-change`)
            ){
                document.querySelector('[data-testid="hero-container"]').classList.remove(`${prefix}-pc-change`);
            }

            // if(
            //     !document.querySelector('[data-cy="postcode-section"]') 
            // ){
            //    document.querySelector('[data-testid="hero-container"]').classList.remove(`${prefix}-pc-change`);
            // }

            // if(
            //     document.querySelector('[data-cy="postcode-result-section"]') &&
            //     !document.querySelector(`.${prefix}-slide-in`) &&
            //     !document.querySelector(`.${prefix}-hero.${prefix}-show-hero`) &&
            //     window.sessionStorage.getItem(`${prefix}-banner-seen`)
            // ){
            //     document.documentElement.classList.remove(storyNumber);

            //     return
            // }

            // if(
            //     document.querySelector(`.${prefix}-slide-in`) &&
            //     !document.querySelector(`.${prefix}-hero.${prefix}-show-hero`) &&
            //     window.sessionStorage.getItem(`${prefix}-banner-seen`)
            // ){

            //     document.documentElement.classList.add(storyNumber);

            //     return
            // }

            // if(
            //     !document.querySelector('[data-cy="postcode-result-section"]') &&
            //     !document.querySelector(`.${prefix}-hero.${prefix}-show-hero`) &&
            //     window.sessionStorage.getItem(`${prefix}-banner-seen`)
            // ){
            //     document.documentElement.classList.add(storyNumber);
                
            //     return
            // }

            // preSvcChange();
            insertFlares();
            insertNewHero();

            utils.waitUntil(`.${prefix}-hero`, (newHero) => {
                const postCodeBanner = document.querySelector(`.${prefix}-change-postcode-banner`);

                if(!postCodeBanner) return;

                if(!newHero.classList.contains(`${prefix}-show-hero`)){
                    postCodeBanner.classList.add(`${prefix}-hide`)
                } else {
                    postCodeBanner.classList.remove(`${prefix}-hide`)
                }

                const postcodeChangeCta = document.querySelector(`.${prefix}-change-cta`);

                postcodeChangeCta.addEventListener("click", () => {
                    document.querySelector('[data-testid="hero-container"]').classList.add(`${prefix}-pc-change`);
                })
            })

            // if(window.sessionStorage.getItem(`${prefix}-banner-seen`)) return;

            const productElement = [...document.querySelectorAll('[data-product-id]')]
                .find(el => !el.closest('.cro-mask'));

            const isPostSVC = !!productElement;

            if(isPostSVC){
                document.querySelector('[data-testid="hero-container"]').classList.remove(`${prefix}-pre-svc-state`);
                window.sessionStorage.setItem(`${prefix}-banner-seen`, "true");
                showNewHero();
            } else {
                document.querySelector('[data-testid="hero-container"]').classList.add(`${prefix}-pre-svc-state`);
            }
        } catch(err) {
            sales_cro.fireGA4(experimentId,storyNumber,"error",`Error: ${err}`);
            utils.log(err, storyNumber)
        }
    }

    utils.waitUntil(
        "#topOfPage", 
        () => initVariation()
    );

    utils.waitUntil(
        'body',
        (rootEl) => {
            utils.checkPageChanges(rootEl, initVariation);
        }
    );
})(window)
}, "dependencies": []}, {"id": "3909A104-3F14-47A5-BEE9-A1D72F07A4F6", "type": "append", "selector": "head", "value": "<style>/* .CSCRO-2488 [data-testid=\"hero-container\"] [class*=vm-hero_hero-banner__content__] > a{\n    margin: auto;\n} */\n\n.CSCRO-2488 body.cscro-no-scroll{\n    overflow: hidden;\n}\n\n.CSCRO-2488 [data-testid=\"hero\"]{\n    margin-bottom: 0;\n    padding: 0px !important;\n}\n\n/* .CSCRO-2488 [data-testid=\"hero\"] [data-cy=\"postcode-result-section\"]{\n    margin: 0 auto;\n} */\n\n.CSCRO-2488 [class*=hero_hero-banner--bottom-curve],\n.CSCRO-2488 [class*=hero_hero-banner--bottom-curve]:after{\n    --_hero-curve-x: unset;\n    --_hero-curve-y: unset;\n}\n\n.CSCRO-2488 [data-testid=\"hero\"] + div{\n    padding-top: 0;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"]{\n    padding-top: 70px;\n    padding-bottom: 60px;\n    min-height: 1020px;\n    background-color: #000;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hide{\n    display: none !important;\n}\n\n/* .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__split-image-container\"]{\n    height: auto;\n} */\n\n/* .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__split-image-container\"] [data-testid=\"hero-image\"]{\n    display: none;\n} */\n\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img{\n    margin-top: 16px;\n    max-width: 532px;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img img{\n    position: absolute;\n    max-width: 532px;\n    z-index: 3;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img-tv{\n    margin: 40px auto 0;\n    max-width: 380px;\n    height: 215px;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-mob-hero-img{\n    display: none;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img-tv img{\n    position: absolute;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare{\n    position: absolute;\n    z-index: 0;\n    pointer-events: none;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-bold-flare{\n    right: 0px;\n    width: 1200px;\n    bottom: -110px;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-light-ot-flare{\n    top: 72px;\n    right: 0;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-light-ob-flare{\n    bottom: -80px;\n    left: 16%;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-circle-flare{\n    top: 70px;\n    left: 38%;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-bold-flare svg{\n    position: absolute;\n    bottom: 0;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-mob-flare{\n    display: none;\n}\n\n/* .CSCRO-2488 [data-testid=\"hero-container\"] h1{\n    margin-bottom: 0;\n    font-weight: 450;\n    text-align: center;\n} */\n\n.CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"vm-hero_hero-banner__content\"] [class*=\"_content\"]{\n    max-width: unset;\n}\n\n/* .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"vm-hero_hero-banner__content\"] h1 + [class*=\"_content\"] p{\n    text-align: center;\n    font-size: 20px;\n    font-weight: 450;\n    line-height: 32px;\n} */\n\n/* .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__container--children-wrapper\"]{\n    margin: 0 auto;\n    padding: 0 30px;\n    max-width: 800px;\n    width: unset;\n    opacity: 1;\n} */\n\n/* .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__split-image-container\"]{\n    display: none;\n} */\n/* \n.CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__container--children-wrapper\"].cscro-hide,\n.CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__split-image-container\"].cscro-hide{\n    opacity: 0;\n    transition: opacity 2s ease-in-out;\n} */\n\n.CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__container--children-wrapper\"]{\n    margin-top: 50px;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__split-image-container\"]{\n    margin-top: 50px;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] [data-cy=\"postcode-section\"] p{\n    display: none;\n}\n\n/* .CSCRO-2488 [data-testid=\"hero-container\"] [data-cs-override-id=\"postcode-result-section\"],\n.CSCRO-2488 [data-testid=\"hero-container\"] [data-cs-override-id=\"postcode-section-r5e0\"] form,\n.CSCRO-2488 [data-testid=\"hero-container\"] [data-cy=\"postcode-section\"] form{\n    margin: auto;\n} */\n\n.CSCRO-2488 [class*=\"address-capture_loaderContainer\"]{\n    margin-bottom: 120px;\n}\n\n.CSCRO-2488 .cscro-bb-tv-bg{\n    position: absolute;\n    width: 0vw;\n    height: 100%;\n    right: -24px;\n    background: #5F2878;\n}\n\n.CSCRO-2488 .cscro-bb-tv-bg.cscro-slide-in{\n    display: none;\n    width: 50vw;\n    transition: width 1s ease-in-out;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner.cscro-hide + .cscro-bb-tv-bg.cscro-slide-in{\n    width: 0vw;\n    transition: width 0s ease-in-out;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner.cscro-hide.cscro-show-in-transition + .cscro-bb-tv-bg.cscro-slide-in{\n    width: 50vw;\n}\n\n.CSCRO-2488 .cscro-hero{\n    position: absolute;\n    padding-top: 40px;\n    width: 100vw;\n    height: 100%;\n    opacity: 0;\n    z-index: 10;\n    left: 0;\n    pointer-events: none;\n    max-width: 1440px;\n    left: 50%;\n    justify-content: center;\n    transform: translateX(-50%);\n}\n\n.CSCRO-2488 .cscro-hero .cscro-hero-blocks{\n    display: flex;\n    margin: auto;\n    gap: 16px;\n    justify-content: center;\n    max-width: calc(100% - 40px);\n}\n\n.CSCRO-2488 .cscro-hero.cscro-show-hero{\n    padding: 80px 16px 0;\n    opacity: 1;\n    transition: opacity 0.5s ease-in-out;\n    pointer-events: all;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile{\n    display: flex;\n    padding-top: 40px;\n    flex-direction: column;\n    align-items: center;\n    width: 50%;\n    max-width: 540px;\n    max-height: 500px;\n    background: #000;\n    border-radius: 16px;\n    border: 16px solid rgba(255, 0, 0, 0.58);\n    background: rgba(0, 0, 0, 0.20);\n    box-shadow: 0 0 50px 15px rgba(237, 0, 0, 0.54);\n    overflow: hidden;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile-inner{\n    position: relative;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    overflow: hidden;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-tile-flares{\n    position: absolute;\n    bottom: 0;\n    font-size: 0;\n    width: 100%;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-mob-imgs{\n    display: none;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-flares svg:first-child{\n    position: absolute;\n    bottom: 10px;\n    right: 126px;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-flares svg:last-child{\n    position: absolute;\n    right: 0;\n    bottom: 0;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile h2{\n    margin-top: 0;\n    font-size: 24px !important;\n    line-height: 36px;\n    font-weight: 400;\n    color: #fff !important;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile .cscro-sub-head{\n    font-size: 20px;\n    line-height: 32px;\n    color: #fff !important;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile .cscro-price{\n    font-size: 16px !important;\n    line-height: 24px;\n    color: #fff !important;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-tile-img{\n    position: relative;\n    margin: 10px auto;\n    z-index: 1;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-img{\n    margin-top: -12px;\n    width: 565px;\n    max-width: 100%;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile .cscro-sub-head{\n    margin-top: 0;\n    font-size: 20px;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile .cscro-price{\n    margin-top: 8px;\n    font-size: 24px;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-cta{\n    position: relative;\n    display: flex;\n    margin: 8px auto 0;\n    align-items: center;\n    justify-content: center;\n    width: 146px;\n    height: 48px;\n    z-index: 3;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-cta a{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n    font-size: 16px;\n    font-weight: 700;\n    text-decoration: none;\n    border-radius: 32px;\n    width: 100%;\n    height: 100%;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-cta a{\n    background: #ed0000;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner{\n    /* position: absolute; */\n    display: flex;\n    padding: 8px;\n    gap: 12px;\n    z-index: 11;\n    /* top: 72px; */\n    left: 0;\n    width: 100vw;\n    background: #348437;\n    text-align: center;\n    color: #fff;\n    justify-content: center;\n    align-items: center;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner.cscro-hide{\n    display: none;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner p,\n.CSCRO-2488 .cscro-change-postcode-banner span{\n    color: #fff !important;\n    font-size: 16px;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner button{\n    color: #fff !important;\n    font-size: 16px;\n    background: none;\n    border: none;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner .cscro-check-mark{\n    height: 32px;\n    min-width: 32px;\n    border-radius: 50%;\n    background: #348437 !important;\n    border: 1px solid #fff;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner .cscro-check-mark svg{\n    width: 20px;\n    height: 32px;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner .cscro-bold-pc{\n    font-weight: 700;\n}\n\n/* BF */\n.CSCRO-2488 .cscro-hero h1{\n    margin-bottom: 40px;\n    font-size: 60px;\n    color: #FB9657;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs{\n    display: none;\n    justify-content: center;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs img{\n    margin-top: 10px;\n    margin-right: 80px;\n    width: 483px;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare{\n    display: none;\n}\n\n.CSCRO-2488 .cscro-second-state  [class*=hero_hero-banner__container--split-image]{\n    display: none !important;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-tile-flares{\n    display: none;\n}\n\n .CSCRO-2488 .cscro-tv-bundle-img-desktop{\n    display: block;\n}\n\n.CSCRO-2488 .cscro-tv-bundle-img-mob{\n    display: none;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile-inner img{\n    margin-top: 32px;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bb-only-tile .cscro-banner-tile-inner img{\n    margin-top: 42px;\n}\n\n.CSCRO-2488 .cscro-tv-bundle-img-mob{\n    margin: 45px auto 0;\n    width: 320px;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs{\n    display: none;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-device-tag{\n    position: absolute;\n    width: 310px;\n    top: 60px;\n    left: 50px;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-roundel{\n    position: absolute;\n    max-width: 200px;\n    top: 120px;\n    right: 72px;\n}\n\n.CSCRO-2488 .cscro-pc-change .cscro-hero.cscro-show-hero{\n    display: none !important;\n}\n\n.CSCRO-2488 .cscro-pc-change [class*=hero_hero-banner__container--split-image]{\n    display: block !important;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"].cscro-pc-change .cscro-hide[class*=\"hero_hero-banner__container--children-wrapper\"]{\n    display: block !important;\n}\n\n@media screen and (max-width: 1440px) {\n    .CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs{\n        display: flex;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-roundel{\n        display: none;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-device-tag{\n        display: none;\n    }\n}\n\n@media screen and (max-width: 1280px){\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-img{\n        margin-top: 0;\n    }\n}\n\n@media screen and (max-width: 1024px){\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-img{\n        margin-top: 16px;\n    }\n}\n\n@media screen and (max-width: 992px){\n    .CSCRO-2488 [data-testid=\"hero-container\"]{\n        min-height: 1000px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-banner-tile h2{\n        padding: 0 40px;\n    }\n}\n\n@media screen and (max-width: 768px){\n    .CSCRO-2488 [data-testid=\"hero-container\"]{\n        min-height: unset;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"].cscro-second-state{\n        min-height: 900px;\n        overflow: hidden;\n        --_hero-curve-x: unset;\n        --_hero-curve-y: unset;\n        /* -webkit-clip-path: ellipse(var(--_hero-curve-x) var(--_hero-curve-y) at 50% 40%);\n        clip-path: ellipse(var(--_hero-curve-x) var(--_hero-curve-y) at 50% 40%); */\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__container--children-wrapper\"]{\n        margin-top: 0;\n        padding-top: 24px;\n        padding-bottom: 0;\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 .cscro-change-postcode-banner{\n        top: 0;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-lb-flare{\n        display: none;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-light-ob-flare {\n        bottom: -10px;\n        left: -80px;\n        width: 210px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-light-flare{\n        top: -38px;\n        left: -230px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-light-ot-flare {\n        top: 65px;\n        left: 62%;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-circle-flare {\n        top: 64px;\n        left: 38%;\n        width: 70px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare,\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare svg{\n        max-width: 100%;\n        left: 0;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-blue-flare svg,\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-green-flare{\n        display: none;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-blue-flare{\n        max-width: unset;\n        width: 1100px;\n        bottom: 0;\n        --_hero-curve-x: 200%;\n        --_hero-curve-y: 58%;\n        -webkit-clip-path: ellipse(var(--_hero-curve-x) var(--_hero-curve-y) at 50% 40%);\n        clip-path: ellipse(var(--_hero-curve-x) var(--_hero-curve-y) at 50% 40%);\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-blue-flare svg{\n        width: 100%;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-blue-flare .cscro-mob-flare{\n        display: block;\n        width: 1100px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img{\n        margin: auto;\n        max-width: 240px;\n        margin: 10px auto;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img{\n        width: 240px;\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img img{\n        position: relative;\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img-tv img{\n        display: none;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img-tv img.cscro-mob-hero-img{\n        display: block;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"vm-hero_hero-banner__content\"] [class*=\"_content\"]{\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"vm-hero_hero-banner__content\"] h1{\n        margin-bottom: 4px;\n        font-size: 28px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"vm-hero_hero-banner__content--layout-split\"]{\n        gap: 18px;\n    }\n\n    .CSCRO-2488 [class*=\"hero_hero-banner--bottom-curve\"]:after{\n        height: 100%;\n    }\n\n    .CSCRO-2488 .cscro-hero.cscro-show-hero + .cscro-hero-flare,\n    .CSCRO-2488 .cscro-hero.cscro-show-hero + .cscro-hero-flare + .cscro-hero-flare,\n    .CSCRO-2488 .cscro-hero.cscro-show-hero + .cscro-hero-flare + .cscro-hero-flare + .cscro-hero-flare,\n    .CSCRO-2488 .cscro-hero.cscro-show-hero + .cscro-hero-flare + .cscro-hero-flare + .cscro-hero-flare + .cscro-hero-flare {\n        display: none;\n    }\n\n    .CSCRO-2488 .cscro-hero{\n        margin-left: 0;\n    }\n\n    .CSCRO-2488 .cscro-bb-tv-bg.cscro-slide-in{\n        right: 0;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-img,\n    .CSCRO-2488 .cscro-hero .cscro-bb-only-tile .cscro-tile-img{\n        padding: 0;\n        padding-bottom: 0;\n        margin-top: 28px;\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-mob-imgs{\n        position: relative;\n        margin: 20px auto;\n        display: block;\n        z-index: 1;\n        width: 160px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-mob-imgs .cscro-tile-mob-img:first-child{\n        position: absolute;\n        top: 30px;\n        width: 70px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-mob-imgs .cscro-tile-mob-img:last-child{\n        position: absolute;\n        left: 16px;\n        top: 5px;\n        width: 160px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile h2{\n        margin-top: 10px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-banner-tile{\n        padding-top: 12px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-banner-tile .cscro-sub-head{\n        display: none;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-banner-tile .cscro-price{\n        margin-top: 0;\n        padding: 0;\n        font-size: 16px;\n        text-align: center;\n    }\n\n    .CSCRO-2488 .cscro-change-postcode-banner{\n        top: 65px;\n        left: 0;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-banner-tile h2{\n        margin-top: 0;\n        padding: 0;\n        text-align: center;\n        font-size: 20px !important;\n        line-height: 32px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-cta{\n        width: 144px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img-tv{\n        position: relative;\n        margin: 40px auto 0;\n        max-width: 400px;\n        height: 182px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img-tv img{\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"vm-hero_hero-banner__content\"] h1 + [class*=\"_content\"] p{\n        font-size: 16px;\n        line-height: 24px;\n        padding: 0 30px; \n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-bold-flare{\n        width: 600px;\n        bottom: 0px;\n        left: unset;\n        right: -20px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-bold-flare svg{\n        position: absolute;\n        bottom: 0;\n        max-width: unset;\n        width: 600px;\n    }\n\n    .CSCRO-2488 .cscro-hero.cscro-show-hero{\n        padding-top: 24px;\n        gap: 8px;\n        height: 372px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-tile-flares{\n        height: 233px;\n        width: 180px;\n        left: unset;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-bb-tv-tile .cscro-tile-flares{\n        right: 0;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-tile-flares svg{\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-flares svg:last-child{\n        right: 12px;\n        bottom: -22px;\n        width: 150px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-flares svg:last-child{\n        right: -44px;\n        bottom: -60px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-flares svg:first-child{\n        position: absolute;\n        bottom: -24px;\n        right: -16px;\n        width: 155px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-tile-img{\n        margin: 0 auto;\n        width: 175px;\n    }\n\n    .CSCRO-2488 .cscro-hero h1{\n        margin-top: 6px;\n        margin-bottom: 22px;\n        font-size: 38px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-hero-blocks{\n        gap: 8px;\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-banner-tile{\n        border-width: 5px;\n        box-shadow: 0 0 13.4px 8px rgba(255, 0, 0, 0.42);\n    }\n\n    .CSCRO-2488 .cscro-tv-bundle-img-desktop{\n        display: none;\n    }\n\n    .CSCRO-2488 .cscro-tv-bundle-img-mob{\n        display: block;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs{\n        margin-top: 12px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs img{\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-only-tile .cscro-tile-img{\n        margin-top: 35px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs{\n        display: block;\n    }\n\n\n}\n\n@media screen and (max-width: 500px){\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-blue-flare{\n        width: 600px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-tile-img{\n        width: auto;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-mob-imgs{\n        margin: 0 auto;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"].cscro-second-state{\n        min-height: 800px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs img{\n        margin-top: 0;\n        margin-right: 0;\n    }\n}\n\n@media screen and (max-width: 400px){\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-blue-flare{\n        width: 500px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"].cscro-second-state{\n        min-height: 705px;\n    }\n}</style>", "dependencies": []}]}]}, {"id": "5427637718351872", "name": "Variation #2", "actions": [{"viewId": "6450020239540224", "changes": [{"id": "2EB5D227-63F4-44D2-B237-A9C6EFA6B1E2", "type": "custom_code", "value": function($){((w) => {
    "use strict";

    const window = typeof unsafeWindow !== "undefined" ? unsafeWindow : w;
    const storyNumber = "CSCRO-2488";
    const experimentId = "4518652534325248";
    const sales_cro = window.sales_cro;
    const prefix = "cscro";
    const debug = document.cookie.includes("vmDEV");
    const imgRoot = "https://storyblok.cdn.vmo2digital.co.uk/f/253875/";

    const utils = {
        waitUntil: (cond, cb, storyNumber, timeout = 10000) => {
            let stop = false;
        
            const timer = setTimeout(() => {
                stop = true;
            }, timeout);
        
            const end = () => {
                clearTimeout(timer);
                stop = true;
            };
        
            const check = () => {
                if (stop) return;
        
                try {
                    const elCached = typeof cond === "string" ? document.querySelector(cond) : undefined;
                    const condSuccess = typeof cond === "function" ? cond() : undefined;
        
                    if (elCached) {
                        cb(elCached);
                        end();
                        return;
                    }
        
                    if (condSuccess) {
                        cb();
                        end();
                        return;
                    }
                } catch (err) {
                    if (storyNumber) utils.log(err, storyNumber);
                    else console.error(err);
                }
        
                if (!stop) {
                    window.requestAnimationFrame(check);
                }
            };
        
            check();
        },
        log: (msg, expTag = storyNumber) => {
            debug && console.log(`[CSCRO] ${storyNumber} -->`, msg);
        },
        checkPageChanges: (target, cb, opts = {childList: true, subtree: true, attributes: true}) => {
            const debounce = (func, delay) => {
                let timeout;
        
                return (...args) => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => func(...args), delay)
                }
            }

            const observer = new MutationObserver(
                debounce(() => {
                    cb();
                }, 100)
            )
    
            observer.observe(target, opts);
        },
        dispatchClick: (el) => {
            [`mousedown`, `mouseup`, `click`].forEach(event =>
                el.dispatchEvent(new MouseEvent(event, { bubbles: true }))
            );
        }
    }

    const svgs = {
        boldOrange: `<svg xmlns="http://www.w3.org/2000/svg" width="1103" height="356" viewBox="0 0 1103 356" fill="none"><path d="M1101.56 130.395L1082.12 19.7881C1079.85 6.79226 1067.47 -1.90257 1054.47 0.35732H1052.98C576.142 84.8069 193.479 441.289 2.14744 979.375H1.40012C-3.09324 992.168 3.58361 1006.19 16.3479 1010.76L122.477 1048.13C128.521 1050.27 135.169 1049.89 140.93 1047.08C146.691 1044.27 151.083 1039.26 153.12 1033.18C235.333 802.255 359.4 602.715 511.867 453.994C664.334 305.273 865.382 196.908 1080.63 158.794H1082.12C1088.52 157.71 1094.21 154.074 1097.87 148.719C1101.53 143.364 1102.86 136.75 1101.56 130.395Z" fill="url(#paint0_linear_6712_804)"/><defs><linearGradient id="paint0_linear_6712_804" x1="2.96963" y1="902.126" x2="975.149" y2="4.35872" gradientUnits="userSpaceOnUse"><stop stop-color="#FF0A0A"/><stop offset="0.01" stop-color="#FF0C0A"/><stop offset="0.26" stop-color="#FF3606"/><stop offset="0.49" stop-color="#FF5503"/><stop offset="0.68" stop-color="#FF6701"/><stop offset="0.81" stop-color="#FF6E00"/></linearGradient></defs></svg>`,
        lightOrange: `<svg xmlns="http://www.w3.org/2000/svg" width="550" height="615" viewBox="0 0 550 615" fill="none"><path d="M539.494 -80.8265L386.279 -293.072C367.936 -317.955 333.061 -323.601 307.803 -305.776L304.814 -303.534C-62.1545 -38.228 -350.647 352.632 -529.273 827.941L-530.768 830.93C-541.355 859.817 -526.678 891.838 -497.882 902.675L-253.486 995.346C-224.396 1005.98 -192.147 991.355 -180.989 962.463L-179.495 959.473C-27.0272 553.667 216.622 221.1 523.799 -0.860891L526.788 -2.35561C551.313 -20.9149 556.91 -55.4771 539.494 -80.8265Z" fill="url(#paint0_linear_6712_829)"/><defs><linearGradient id="paint0_linear_6712_829" x1="288.904" y1="-245.839" x2="-496.213" y2="821.586" gradientUnits="userSpaceOnUse"><stop stop-color="#FF0A0A"/><stop offset="0.73" stop-color="#FF6E00"/></linearGradient></defs></svg>`,
        lightOrangeBottom: `<svg xmlns="http://www.w3.org/2000/svg" width="343" height="150" viewBox="0 0 343 150" fill="none"><path d="M332.573 104.555L219.718 7.40069C206.246 -3.77139 186.311 -2.11024 174.874 11.1374L173.379 12.6321C111.21 85.1414 54.7383 162.348 4.4696 243.561V245.055C-4.34451 260.194 0.256754 279.584 14.933 289.149L141.242 366.872C156.123 376.244 175.773 371.914 185.338 357.157V354.915C229.738 283.094 279.718 214.875 334.816 150.89V149.396C345.977 136.185 344.997 116.587 332.573 104.555Z" fill="url(#paint0_linear_6712_389)"/><defs><linearGradient id="paint0_linear_6712_389" x1="281.86" y1="11.5111" x2="87.3775" y2="278.959" gradientUnits="userSpaceOnUse"><stop offset="0.11" stop-color="#FF0A0A"/><stop offset="0.78" stop-color="#FF6E00"/></linearGradient></defs></svg>`,
        lightOrangeTop: `<svg xmlns="http://www.w3.org/2000/svg" width="419" height="26" viewBox="0 0 419 26" fill="none"><path d="M417.789 -130.151L389.389 -234.779C387.811 -240.73 383.93 -245.809 378.601 -248.894C373.272 -251.979 366.935 -252.816 360.988 -251.22H359.493C239.541 -218.604 123.507 -172.996 13.4518 -115.204H12.7045C7.08598 -112.502 2.84603 -107.583 1.0026 -101.628C-0.84082 -95.6728 -0.121269 -89.2189 2.98842 -83.8157L53.0635 12.5913C59.3206 24.0679 73.6334 28.3948 85.2011 22.3068H85.9486C186.012 -30.1684 291.525 -71.5191 400.599 -101.005H401.347C407.469 -102.569 412.686 -106.565 415.79 -112.068C418.895 -117.571 419.617 -124.103 417.789 -130.151Z" fill="url(#paint0_linear_6712_827)"/><defs><linearGradient id="paint0_linear_6712_827" x1="21.8973" y1="-81.0545" x2="363.12" y2="-216.904" gradientUnits="userSpaceOnUse"><stop stop-color="#FF0A0A"/><stop offset="0.01" stop-color="#FF0B0A"/><stop offset="0.47" stop-color="#FF4005"/><stop offset="0.81" stop-color="#FF6101"/><stop offset="1" stop-color="#FF6E00"/></linearGradient></defs></svg>`,
        orangeCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="105" height="60" viewBox="0 0 105 60" fill="none"><path d="M52.3172 59.6737C81.2113 59.6737 104.634 36.252 104.634 7.35982C104.634 -21.5324 81.2113 -44.9541 52.3172 -44.9541C23.4232 -44.9541 0 -21.5324 0 7.35982C0 36.252 23.4232 59.6737 52.3172 59.6737Z" fill="url(#paint0_linear_6712_833)"/><defs><linearGradient id="paint0_linear_6712_833" x1="-0.149478" y1="7.50929" x2="104.784" y2="7.50929" gradientUnits="userSpaceOnUse"><stop stop-color="#FF0A0A"/><stop offset="1" stop-color="#FF6E00"/></linearGradient></defs></svg>`,
        checkMark: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M16.6654 5L7.4987 14.1667L3.33203 10" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        bbOnlyFlares: `<svg xmlns="http://www.w3.org/2000/svg" width="540" height="335" viewBox="0 0 540 335" fill="none"><path d="M-137.851 311.729L-69.2449 414.832C-65.2811 420.64 -59.1657 424.628 -52.2527 425.914C-45.3397 427.199 -38.1993 425.677 -32.4124 421.682L-31.1375 421.067L6.5513 397.12C147.678 310.691 293.414 256.613 439.713 237.362L440.988 236.747C455.427 234.627 465.54 221.379 463.778 206.892L447.57 84.27C445.449 69.8316 432.201 59.7189 417.714 61.4807L416.44 62.0958C286.404 80.2562 160.073 118.932 42.1567 176.68C-0.620314 197.32 -43.3638 220.563 -86.0736 246.409L-129.301 274.077L-130.576 274.692C-136.511 278.591 -140.627 284.714 -141.995 291.682C-143.364 298.65 -141.87 305.875 -137.851 311.729Z" fill="url(#paint0_linear_6690_4354)"/><path d="M228.032 328.453L228.852 327.938C301.147 279.841 391.909 258.926 491.358 267.111L492.099 267.561C500.575 268.091 507.956 261.833 508.819 253.384L514.964 181.082C515.494 172.606 509.235 165.225 500.787 164.362L499.821 164.283C377.014 154.078 263.409 180.889 171.578 241.959L170.757 242.475C163.804 247.291 161.871 256.726 166.37 263.888L206.506 324.252C208.781 327.691 212.341 330.073 216.389 330.863C220.436 331.653 224.631 330.785 228.032 328.453Z" fill="url(#paint1_linear_6690_4354)"/><defs><linearGradient id="paint0_linear_6690_4354" x1="457.961" y1="103.092" x2="-107.206" y2="375.785" gradientUnits="userSpaceOnUse"><stop stop-color="#8A36F1"/><stop offset="1" stop-color="#FF6EFF"/></linearGradient><linearGradient id="paint1_linear_6690_4354" x1="495.057" y1="205.64" x2="195.078" y2="274.079" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6EFF"/><stop offset="1" stop-color="#FF0A0A"/></linearGradient></defs></svg>`,
        bbTvFlare1: `<svg xmlns="http://www.w3.org/2000/svg" width="353" height="170" viewBox="0 0 353 170" fill="none"><path d="M288.356 2.70784L287.532 3.22614C214.886 51.5565 123.683 72.5725 23.7514 64.348L23.0071 63.896C14.4901 63.3629 7.07275 69.6522 6.2061 78.1417L0.0313408 150.795C-0.501682 159.312 5.78753 166.729 14.2771 167.596L15.2474 167.676C138.65 177.93 252.807 150.988 345.085 89.622L345.909 89.1038C352.896 84.2646 354.839 74.7837 350.317 67.5866L309.986 6.93002C307.701 3.47379 304.123 1.08014 300.056 0.286317C295.989 -0.50754 291.774 0.364909 288.356 2.70784Z" fill="url(#paint0_linear_6690_4371)"/><defs><linearGradient id="paint0_linear_6690_4371" x1="20.0344" y1="126.118" x2="321.47" y2="57.3462" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6EFF"/><stop offset="1" stop-color="#FF0A0A"/></linearGradient></defs></svg>`,
        bbTvFlare2: `<svg xmlns="http://www.w3.org/2000/svg" width="410" height="282" viewBox="0 0 410 282" fill="none"><path d="M604.75 115.186L535.81 11.583C531.827 5.74704 525.682 1.73942 518.736 0.447529C511.789 -0.844393 504.614 0.685926 498.799 4.69971L497.518 5.31784L459.646 29.3813C317.834 116.23 171.391 170.57 24.3811 189.914L23.1001 190.532C8.59159 192.663 -1.57043 205.976 0.200003 220.532L16.4869 343.75C18.6174 358.258 31.93 368.42 46.4868 366.65L47.7678 366.032C178.435 347.783 305.379 308.92 423.868 250.891C466.853 230.151 509.804 206.795 552.721 180.824L596.158 153.022L597.439 152.403C603.403 148.486 607.539 142.332 608.914 135.331C610.289 128.329 608.788 121.069 604.75 115.186Z" fill="url(#paint0_linear_6690_4372)"/><defs><linearGradient id="paint0_linear_6690_4372" x1="6.04511" y1="324.837" x2="573.956" y2="50.8196" gradientUnits="userSpaceOnUse"><stop stop-color="#8A36F1"/><stop offset="1" stop-color="#FF6EFF"/></linearGradient></defs></svg>`,
    }

    const imgs = {
        bbOnly: `${imgRoot}504x504/63c7afe048/bb-only-img-1.png`,
        bbTv: `${imgRoot}1080x612/d85914418e/bb-tv-img.png`,
        preSvc: `${imgRoot}388x230/a504e45b86/hero-img-low-res.png`,
        preSvcMob: `${imgRoot}786x367/395973bc3f/hero-img-mob.png`,
        tvOnly: `${imgRoot}322x228/4547163212/bb-tv-tv-img.png`,
        bfHero: `${imgRoot}966x442/48c597db87/cscro-bf-hero-img.png`,
        bbOnlyBF: `${imgRoot}/1016x480/6ee1639b98/cscro-bb-only-deals.png`,
        tvBundlesBF: `${imgRoot}1016x480/f721c43914/cscro-tv-bundles.png`,
        tvBundleMob: `${imgRoot}352x262/52f871837b/tv-bundle-mobile.png`,
        roundel: `${imgRoot}406x360/e6d25ac77b/cscro-roundel.png`,
        deviceTag: `${imgRoot}620x430/20ff3f5295/cscro-devic-tag.png`
    }

    const content = {
        bbOnly: `
            <div class="${prefix}-bb-only-tile ${prefix}-banner-tile">
                <div class="${prefix}-banner-tile-inner">
                    <h2>Broadband only</h2>
                    <p class="${prefix}-sub-head">Lightning-fast fibre broadband</p>
                    <p class="${prefix}-price">From £21.99/month</p>
                    <div class="${prefix}-cta">
                        <a href="/broadband/broadband-only">View deals</a>
                    </div>
                    <div class="${prefix}-tile-img">
                        <img src="${imgs.bbOnlyBF}">
                    </div>
                    <div class="${prefix}-tile-flares">
                        ${svgs.bbOnlyFlares}
                    </div>
                </div>
            </div>
        `,
        bbTv: `
            <div class="${prefix}-bb-tv-tile ${prefix}-banner-tile">
                <div class="${prefix}-banner-tile-inner">
                    <h2>TV & Broadband</h2>
                    <p class="${prefix}-sub-head">Complete entertainment bundles</p>
                    <p class="${prefix}-price">From £31.99/month</p>
                    <div class="${prefix}-cta">
                        <a href="/broadband/broadband-and-tv">View deals</a>
                    </div>
                    <div class="${prefix}-tile-img">
                        <img src="${imgs.tvBundlesBF}" class="${prefix}-tv-bundle-img-desktop">
                        <img src="${imgs.tvBundleMob}" class="${prefix}-tv-bundle-img-mob">
                    </div>
                    <div class="${prefix}-tile-flares">
                        ${svgs.bbTvFlare1}
                        ${svgs.bbTvFlare2}
                    </div>
                </div>
            </div>
        `
    }

    let path = window.location.pathname;

    const insertNewHero = () => {
        if(document.querySelector(`.${prefix}-hero`)) return;

        utils.waitUntil('[data-testid="hero-container"]', (hero) => {
            const markup = `
                <div class="${prefix}-change-postcode-banner">
                    <div class="${prefix}-check-mark">${svgs.checkMark}</div><p>Great news! <span></span><button class="${prefix}-change-cta">Change address</button></p>
                </div>
                <div class="${prefix}-bb-tv-bg"></div>
                <div class="${prefix}-hero">
                    <h1>BLACK FRIDAY</h1>
                    <div class="${prefix}-device-tag">
                        <img src="${imgs.deviceTag}">
                    </div>
                    <div class="${prefix}-roundel">
                        <img src="${imgs.roundel}">
                    </div>
                    <div class="${prefix}-hero-blocks">
                        ${content.bbOnly}
                        ${content.bbTv}
                    </div>
                    <div class="${prefix}-bf-hero-imgs">
                        <img src="${imgs.bfHero}">
                    </div>        
                </div>
            `;

            hero.insertAdjacentHTML('afterbegin', markup);

            utils.waitUntil(`.${prefix}-change-cta`, (changeCta) => {
                changeCta.addEventListener("click", () => {
                    const heroSecondState = document.querySelector(`.${prefix}-second-state`);
                    const showHero = document.querySelector(`.${prefix}-show-hero`);
                    const hideBannerChild = document.querySelector(`[class*="hero_hero-banner__container--children-wrapper"].${prefix}-hide`);
                    const hideBannerImg = document.querySelector(`[class*="hero_hero-banner__split-image-container"].${prefix}-hide`);
                    const tvBg = document.querySelector(`.${prefix}-bb-tv-bg.${prefix}-slide-in`);

                    if(heroSecondState){
                        heroSecondState.classList.remove(`${prefix}-second-state`)
                    }

                    if(showHero){
                        showHero.classList.remove(`${prefix}-show-hero`)
                    }

                    if(tvBg){
                        tvBg.classList.remove(`.${prefix}-slide-in`)
                    }

                    if(hideBannerChild){
                        hideBannerChild.classList.remove(`${prefix}-hide`)
                    }

                    if(hideBannerImg){
                        hideBannerImg.classList.remove(`${prefix}-hide`)
                    }

                    utils.waitUntil('[data-cy="postcode-change-address-link"] button', (btn) =>{
                        utils.dispatchClick(btn)
                    })
                })
            })
        })
    }

    const preSvcChange = () => {
        if(document.querySelector(`.${prefix}-hero-img-tv`)) return;
        
        utils.waitUntil(
            '[data-testid="hero-container"] [class*="hero_hero-banner__container--children-wrapper"] h1 + div p',
            (heroPara) => {
                const heroMain = heroPara.closest(
                    '[data-testid="hero-container"] [class*="hero_hero-banner__container--children-wrapper"]'
                );

                const heroTitle = heroMain.querySelector('h1');

                heroMain.insertAdjacentHTML(
                    "afterbegin",
                    `
                        <div class="${prefix}-hero-img-tv">
                            <img src="${imgs.preSvc}">
                            <img class="${prefix}-mob-hero-img" src="${imgs.preSvcMob}">
                        </div>
                    `
                );

                // heroTitle.innerText = 'Life in the ultrafast lane'
                // heroPara.innerText = 'Scroll, stream and meme to the extreme with epic deals on ultrafast broadband and edge-of-your-seat entertainment'
            }
        );
    }

    const insertFlares = () => {
        utils.waitUntil('[data-testid="hero-container"]', (heroCont) => {
            if(document.querySelector(`.${prefix}-hero-flares-added`)) return;
            
            heroCont.classList.add(`${prefix}-hero-flares-added`);

            heroCont.insertAdjacentHTML(
                "afterbegin", 
                `<div class="${prefix}-hero-flare ${prefix}-bold-flare">
                    ${svgs.boldOrange}
                </div`
            );

            heroCont.insertAdjacentHTML(
                "afterbegin", 
                `<div class="${prefix}-hero-flare ${prefix}-circle-flare">
                    ${svgs.orangeCircle}
                </div`
            );

            heroCont.insertAdjacentHTML(
                "afterbegin", 
                `<div class="${prefix}-hero-flare ${prefix}-light-flare">
                    ${svgs.lightOrange}
                </div`
            );

            heroCont.insertAdjacentHTML(
                "afterbegin", 
                `<div class="${prefix}-hero-flare ${prefix}-light-ob-flare">
                    ${svgs.lightOrangeBottom}
                </div`
            );

            heroCont.insertAdjacentHTML(
                "afterbegin", 
                `<div class="${prefix}-hero-flare ${prefix}-light-ot-flare">
                    ${svgs.lightOrangeTop}
                </div`
            );
        })
    }

    const showNewHero = () => {
        if(document.querySelector(`.${prefix}-show-hero`)) return;

        window.scrollTo(0,0);

        utils.waitUntil(
            `[data-testid="hero-container"]`,
            (heroCont) => {
                heroCont.classList.add(`${prefix}-second-state`);
            }
        )

        utils.waitUntil(
            `[class*="hero_hero-banner__container--children-wrapper"]`,
            (heroChild) => {
                heroChild.classList.add(`${prefix}-hide`)
            }
        )

        utils.waitUntil(
            `[class*="hero_hero-banner__split-image-container"]`,
            (heroChild) => {
                heroChild.classList.add(`${prefix}-hide`)
            }
        )

        utils.waitUntil(
            `.cscro-bb-tv-bg`,
            (tileBg) => {
                tileBg.classList.add(`${prefix}-slide-in`);
            }
        )

        utils.waitUntil(
            `.${prefix}-hero`,
            (newHero) => {
                setTimeout(() => {
                    newHero.classList.add(`${prefix}-show-hero`)
                }, 0);
            }
        )

        utils.waitUntil(`.${prefix}-change-postcode-banner`, (postcodeBanner) => {
            postcodeBanner.classList.remove(`${prefix}-hide`)
            postcodeBanner.classList.add(`${prefix}-hide-in-transition`);

            setTimeout(() => {
                postcodeBanner.classList.remove(`${prefix}-show-in-transition`);
            }, 5000);
        })

        utils.waitUntil('[data-cy="postcode-result-text"]', (postcodeMsg) => {
            const changeCta = document.querySelector(`.${prefix}-change-cta`);

            if(
                document.querySelector(`.${prefix}-postcode-updated`) ||
                !changeCta
            ) return;

            utils.log(postcodeMsg.innerText);

            const postCodeBanner = changeCta.parentElement;
            const postCodeBannerSpan = postCodeBanner.querySelector("span");

            postCodeBannerSpan.classList.add(`${prefix}-postcode-updated`)
            
            const postcodeMsgSplit = postcodeMsg.innerText.split('at ');
            
            postCodeBannerSpan.innerHTML = `${postcodeMsgSplit[0]} at <span class="${prefix}-bold-pc">${postcodeMsgSplit[1]}</span>`;
        })
    }

    const initVariation = () => {
        try {
            document.documentElement.classList.add(storyNumber);
            path = window.location.pathname;

            if(path !== "/"){
                document.documentElement.classList.remove(storyNumber);
                return;
            }

            if(!document.querySelector('[data-cy="postcode-result-section"]')){

            }

            if(
                document.querySelector('[data-cy="postcode-result-section"]') &&
                !document.querySelector(`.${prefix}-slide-in`) &&
                !document.querySelector(`.${prefix}-hero.${prefix}-show-hero`) &&
                window.sessionStorage.getItem(`${prefix}-banner-seen`)
            ){
                document.documentElement.classList.remove(storyNumber);

                return
            }

            if(
                document.querySelector(`.${prefix}-slide-in`) &&
                !document.querySelector(`.${prefix}-hero.${prefix}-show-hero`) &&
                window.sessionStorage.getItem(`${prefix}-banner-seen`)
            ){

                document.documentElement.classList.add(storyNumber);

                return
            }

            if(
                !document.querySelector('[data-cy="postcode-result-section"]') &&
                !document.querySelector(`.${prefix}-hero.${prefix}-show-hero`) &&
                window.sessionStorage.getItem(`${prefix}-banner-seen`)
            ){
                document.documentElement.classList.add(storyNumber);
                
                return
            }

            // preSvcChange();
            insertFlares();
            insertNewHero();

            utils.waitUntil(`.${prefix}-hero`, (newHero) => {
                const postCodeBanner = document.querySelector(`.${prefix}-change-postcode-banner`);

                if(!postCodeBanner) return;

                if(!newHero.classList.contains(`${prefix}-show-hero`)){
                    postCodeBanner.classList.add(`${prefix}-hide`)
                } else {
                    postCodeBanner.classList.remove(`${prefix}-hide`)
                }
            })

            if(window.sessionStorage.getItem(`${prefix}-banner-seen`)) return;

            const isPostSVC = document.querySelector('[data-product-id]');

            if(isPostSVC){
                window.sessionStorage.setItem(`${prefix}-banner-seen`, "true");
                showNewHero();
            } else {

            }
        } catch(err) {
            sales_cro.fireGA4(experimentId,storyNumber,"error",`Error: ${err}`);
            utils.log(err, storyNumber)
        }
    }

    utils.waitUntil(
        "#topOfPage", 
        () => initVariation()
    );

    utils.waitUntil(
        'body',
        (rootEl) => {
            utils.checkPageChanges(rootEl, initVariation);
        }
    );
})(window)
}, "dependencies": []}, {"id": "098FE9CB-E279-49BD-B479-95EAC8C4174E", "type": "append", "selector": "head", "value": "<style>/* .CSCRO-2488 [data-testid=\"hero-container\"] [class*=vm-hero_hero-banner__content__] > a{\n    margin: auto;\n} */\n\n.CSCRO-2488 body.cscro-no-scroll{\n    overflow: hidden;\n}\n\n.CSCRO-2488 [data-testid=\"hero\"]{\n    margin-bottom: 0;\n    padding: 0px !important;\n}\n\n/* .CSCRO-2488 [data-testid=\"hero\"] [data-cy=\"postcode-result-section\"]{\n    margin: 0 auto;\n} */\n\n.CSCRO-2488 [class*=hero_hero-banner--bottom-curve],\n.CSCRO-2488 [class*=hero_hero-banner--bottom-curve]:after{\n    --_hero-curve-x: unset;\n    --_hero-curve-y: unset;\n}\n\n.CSCRO-2488 [data-testid=\"hero\"] + div{\n    padding-top: 0;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"]{\n    padding-top: 70px;\n    padding-bottom: 60px;\n    min-height: 1020px;\n    background-color: #000;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hide{\n    display: none !important;\n}\n\n/* .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__split-image-container\"]{\n    height: auto;\n} */\n\n/* .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__split-image-container\"] [data-testid=\"hero-image\"]{\n    display: none;\n} */\n\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img{\n    margin-top: 16px;\n    max-width: 532px;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img img{\n    position: absolute;\n    max-width: 532px;\n    z-index: 3;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img-tv{\n    margin: 40px auto 0;\n    max-width: 380px;\n    height: 215px;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-mob-hero-img{\n    display: none;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img-tv img{\n    position: absolute;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare{\n    position: absolute;\n    z-index: 0;\n    pointer-events: none;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-bold-flare{\n    right: 0px;\n    width: 1200px;\n    bottom: -110px;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-light-ot-flare{\n    top: 72px;\n    right: 0;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-light-ob-flare{\n    bottom: -80px;\n    left: 16%;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-circle-flare{\n    top: 70px;\n    left: 38%;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-bold-flare svg{\n    position: absolute;\n    bottom: 0;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-mob-flare{\n    display: none;\n}\n\n/* .CSCRO-2488 [data-testid=\"hero-container\"] h1{\n    margin-bottom: 0;\n    font-weight: 450;\n    text-align: center;\n} */\n\n.CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"vm-hero_hero-banner__content\"] [class*=\"_content\"]{\n    max-width: unset;\n}\n\n/* .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"vm-hero_hero-banner__content\"] h1 + [class*=\"_content\"] p{\n    text-align: center;\n    font-size: 20px;\n    font-weight: 450;\n    line-height: 32px;\n} */\n\n/* .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__container--children-wrapper\"]{\n    margin: 0 auto;\n    padding: 0 30px;\n    max-width: 800px;\n    width: unset;\n    opacity: 1;\n} */\n\n/* .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__split-image-container\"]{\n    display: none;\n} */\n/* \n.CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__container--children-wrapper\"].cscro-hide,\n.CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__split-image-container\"].cscro-hide{\n    opacity: 0;\n    transition: opacity 2s ease-in-out;\n} */\n\n.CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__container--children-wrapper\"]{\n    margin-top: 50px;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__split-image-container\"]{\n    margin-top: 50px;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] [data-cy=\"postcode-section\"] p{\n    display: none;\n}\n\n/* .CSCRO-2488 [data-testid=\"hero-container\"] [data-cs-override-id=\"postcode-result-section\"],\n.CSCRO-2488 [data-testid=\"hero-container\"] [data-cs-override-id=\"postcode-section-r5e0\"] form,\n.CSCRO-2488 [data-testid=\"hero-container\"] [data-cy=\"postcode-section\"] form{\n    margin: auto;\n} */\n\n.CSCRO-2488 [class*=\"address-capture_loaderContainer\"]{\n    margin-bottom: 120px;\n}\n\n.CSCRO-2488 .cscro-bb-tv-bg{\n    position: absolute;\n    width: 0vw;\n    height: 100%;\n    right: -24px;\n    background: #5F2878;\n}\n\n.CSCRO-2488 .cscro-bb-tv-bg.cscro-slide-in{\n    display: none;\n    width: 50vw;\n    transition: width 1s ease-in-out;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner.cscro-hide + .cscro-bb-tv-bg.cscro-slide-in{\n    width: 0vw;\n    transition: width 0s ease-in-out;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner.cscro-hide.cscro-show-in-transition + .cscro-bb-tv-bg.cscro-slide-in{\n    width: 50vw;\n}\n\n.CSCRO-2488 .cscro-hero{\n    position: absolute;\n    padding-top: 40px;\n    width: 100vw;\n    height: 100%;\n    opacity: 0;\n    z-index: 10;\n    left: 0;\n    pointer-events: none;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-hero-blocks{\n    display: flex;\n    margin: auto;\n    gap: 16px;\n    justify-content: center;\n    max-width: calc(100% - 40px);\n}\n\n.CSCRO-2488 .cscro-hero.cscro-show-hero{\n    padding: 80px 16px 0;\n    opacity: 1;\n    transition: opacity 0.5s ease-in-out;\n    pointer-events: all;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile{\n    display: flex;\n    padding-top: 40px;\n    flex-direction: column;\n    align-items: center;\n    width: 50%;\n    max-width: 540px;\n    max-height: 500px;\n    background: #000;\n    border-radius: 16px;\n    border: 16px solid rgba(255, 0, 0, 0.58);\n    background: rgba(0, 0, 0, 0.20);\n    box-shadow: 0 0 50px 15px rgba(237, 0, 0, 0.54);\n    overflow: hidden;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile-inner{\n    position: relative;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    overflow: hidden;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-tile-flares{\n    position: absolute;\n    bottom: 0;\n    font-size: 0;\n    width: 100%;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-mob-imgs{\n    display: none;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-flares svg:first-child{\n    position: absolute;\n    bottom: 10px;\n    right: 126px;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-flares svg:last-child{\n    position: absolute;\n    right: 0;\n    bottom: 0;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile h2{\n    margin-top: 0;\n    font-size: 24px !important;\n    line-height: 36px;\n    font-weight: 400;\n    color: #fff !important;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile .cscro-sub-head{\n    font-size: 20px;\n    line-height: 32px;\n    color: #fff !important;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile .cscro-price{\n    font-size: 16px !important;\n    line-height: 24px;\n    color: #fff !important;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-tile-img{\n    position: relative;\n    margin: 10px auto;\n    z-index: 1;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-img{\n    margin-top: -12px;\n    width: 565px;\n    max-width: 100%;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile .cscro-sub-head{\n    margin-top: 0;\n    font-size: 20px;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile .cscro-price{\n    margin-top: 8px;\n    font-size: 24px;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-cta{\n    position: relative;\n    display: flex;\n    margin: 8px auto 0;\n    align-items: center;\n    justify-content: center;\n    width: 146px;\n    height: 48px;\n    z-index: 3;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-cta a{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n    font-size: 16px;\n    font-weight: 700;\n    text-decoration: none;\n    border-radius: 32px;\n    width: 100%;\n    height: 100%;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-cta a{\n    background: #ed0000;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner{\n    position: absolute;\n    display: flex;\n    padding: 8px;\n    gap: 12px;\n    z-index: 11;\n    top: 72px;\n    left: 0;\n    width: 100vw;\n    background: #348437;\n    text-align: center;\n    color: #fff;\n    justify-content: center;\n    align-items: center;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner.cscro-hide{\n    display: none;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner p,\n.CSCRO-2488 .cscro-change-postcode-banner span{\n    color: #fff !important;\n    font-size: 16px;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner button{\n    color: #fff !important;\n    font-size: 16px;\n    background: none;\n    border: none;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner .cscro-check-mark{\n    height: 32px;\n    min-width: 32px;\n    border-radius: 50%;\n    background: #348437 !important;\n    border: 1px solid #fff;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner .cscro-check-mark svg{\n    width: 20px;\n    height: 32px;\n}\n\n.CSCRO-2488 .cscro-change-postcode-banner .cscro-bold-pc{\n    font-weight: 700;\n}\n\n/* BF */\n.CSCRO-2488 .cscro-hero h1{\n    margin-bottom: 40px;\n    font-size: 60px;\n    color: #FB9657;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs{\n    display: none;\n    justify-content: center;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs img{\n    margin-top: 10px;\n    margin-right: 80px;\n    width: 483px;\n}\n\n.CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare{\n    display: none;\n}\n\n.CSCRO-2488  [class*=hero_hero-banner__container--split-image]{\n    display: none !important;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-tile-flares{\n    display: none;\n}\n\n .CSCRO-2488 .cscro-tv-bundle-img-desktop{\n    display: block;\n}\n\n.CSCRO-2488 .cscro-tv-bundle-img-mob{\n    display: none;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-banner-tile-inner img{\n    margin-top: 32px;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bb-only-tile .cscro-banner-tile-inner img{\n    margin-top: 42px;\n}\n\n.CSCRO-2488 .cscro-tv-bundle-img-mob{\n    margin: 45px auto 0;\n    width: 320px;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs{\n    display: none;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-device-tag{\n    position: absolute;\n    width: 310px;\n    top: 60px;\n    left: 50px;\n}\n\n.CSCRO-2488 .cscro-hero .cscro-roundel{\n    position: absolute;\n    max-width: 200px;\n    top: 120px;\n    right: 72px;\n}\n\n@media screen and (max-width: 1440px) {\n    .CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs{\n        display: flex;\n    }\n}\n\n@media screen and (max-width: 1280px){\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-img{\n        margin-top: 0;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-roundel{\n        display: none;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-device-tag{\n        display: none;\n    }\n}\n\n@media screen and (max-width: 1024px){\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-img{\n        margin-top: 16px;\n    }\n}\n\n@media screen and (max-width: 992px){\n    .CSCRO-2488 [data-testid=\"hero-container\"]{\n        min-height: 1000px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-banner-tile h2{\n        padding: 0 40px;\n    }\n}\n\n@media screen and (max-width: 768px){\n    .CSCRO-2488 [data-testid=\"hero-container\"]{\n        min-height: unset;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"].cscro-second-state{\n        min-height: 900px;\n        overflow: hidden;\n        --_hero-curve-x: unset;\n        --_hero-curve-y: unset;\n        /* -webkit-clip-path: ellipse(var(--_hero-curve-x) var(--_hero-curve-y) at 50% 40%);\n        clip-path: ellipse(var(--_hero-curve-x) var(--_hero-curve-y) at 50% 40%); */\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"hero_hero-banner__container--children-wrapper\"]{\n        margin-top: 0;\n        padding-top: 24px;\n        padding-bottom: 0;\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 .cscro-change-postcode-banner{\n        top: 0;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-lb-flare{\n        display: none;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-light-ob-flare {\n        bottom: -10px;\n        left: -80px;\n        width: 210px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-light-flare{\n        top: -38px;\n        left: -230px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-light-ot-flare {\n        top: 65px;\n        left: 62%;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-circle-flare {\n        top: 64px;\n        left: 38%;\n        width: 70px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare,\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare svg{\n        max-width: 100%;\n        left: 0;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-blue-flare svg,\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-green-flare{\n        display: none;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-blue-flare{\n        max-width: unset;\n        width: 1100px;\n        bottom: 0;\n        --_hero-curve-x: 200%;\n        --_hero-curve-y: 58%;\n        -webkit-clip-path: ellipse(var(--_hero-curve-x) var(--_hero-curve-y) at 50% 40%);\n        clip-path: ellipse(var(--_hero-curve-x) var(--_hero-curve-y) at 50% 40%);\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-blue-flare svg{\n        width: 100%;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-blue-flare .cscro-mob-flare{\n        display: block;\n        width: 1100px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img{\n        margin: auto;\n        max-width: 240px;\n        margin: 10px auto;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img{\n        width: 240px;\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img img{\n        position: relative;\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img-tv img{\n        display: none;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img-tv img.cscro-mob-hero-img{\n        display: block;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"vm-hero_hero-banner__content\"] [class*=\"_content\"]{\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"vm-hero_hero-banner__content\"] h1{\n        margin-bottom: 4px;\n        font-size: 28px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"vm-hero_hero-banner__content--layout-split\"]{\n        gap: 18px;\n    }\n\n    .CSCRO-2488 [class*=\"hero_hero-banner--bottom-curve\"]:after{\n        height: 100%;\n    }\n\n    .CSCRO-2488 .cscro-hero.cscro-show-hero + .cscro-hero-flare,\n    .CSCRO-2488 .cscro-hero.cscro-show-hero + .cscro-hero-flare + .cscro-hero-flare,\n    .CSCRO-2488 .cscro-hero.cscro-show-hero + .cscro-hero-flare + .cscro-hero-flare + .cscro-hero-flare,\n    .CSCRO-2488 .cscro-hero.cscro-show-hero + .cscro-hero-flare + .cscro-hero-flare + .cscro-hero-flare + .cscro-hero-flare {\n        display: none;\n    }\n\n    .CSCRO-2488 .cscro-hero{\n        margin-left: 0;\n    }\n\n    .CSCRO-2488 .cscro-bb-tv-bg.cscro-slide-in{\n        right: 0;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-img,\n    .CSCRO-2488 .cscro-hero .cscro-bb-only-tile .cscro-tile-img{\n        padding: 0;\n        padding-bottom: 0;\n        margin-top: 28px;\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-mob-imgs{\n        position: relative;\n        margin: 20px auto;\n        display: block;\n        z-index: 1;\n        width: 160px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-mob-imgs .cscro-tile-mob-img:first-child{\n        position: absolute;\n        top: 30px;\n        width: 70px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-mob-imgs .cscro-tile-mob-img:last-child{\n        position: absolute;\n        left: 16px;\n        top: 5px;\n        width: 160px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile h2{\n        margin-top: 10px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-banner-tile{\n        padding-top: 12px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-banner-tile .cscro-sub-head{\n        display: none;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-banner-tile .cscro-price{\n        margin-top: 0;\n        padding: 0;\n        font-size: 16px;\n        text-align: center;\n    }\n\n    .CSCRO-2488 .cscro-change-postcode-banner{\n        top: 65px;\n        left: 0;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-banner-tile h2{\n        margin-top: 0;\n        padding: 0;\n        text-align: center;\n        font-size: 20px !important;\n        line-height: 32px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-cta{\n        width: 144px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img-tv{\n        position: relative;\n        margin: 40px auto 0;\n        max-width: 400px;\n        height: 182px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-img-tv img{\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] [class*=\"vm-hero_hero-banner__content\"] h1 + [class*=\"_content\"] p{\n        font-size: 16px;\n        line-height: 24px;\n        padding: 0 30px; \n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-bold-flare{\n        width: 600px;\n        bottom: 0px;\n        left: unset;\n        right: -20px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-hero-flare.cscro-bold-flare svg{\n        position: absolute;\n        bottom: 0;\n        max-width: unset;\n        width: 600px;\n    }\n\n    .CSCRO-2488 .cscro-hero.cscro-show-hero{\n        padding-top: 92px;\n        gap: 8px;\n        height: 372px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-tile-flares{\n        height: 233px;\n        width: 180px;\n        left: unset;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-bb-tv-tile .cscro-tile-flares{\n        right: 0;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-tile-flares svg{\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-flares svg:last-child{\n        right: 12px;\n        bottom: -22px;\n        width: 150px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-flares svg:last-child{\n        right: -44px;\n        bottom: -60px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-flares svg:first-child{\n        position: absolute;\n        bottom: -24px;\n        right: -16px;\n        width: 155px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-tile-img{\n        margin: 0 auto;\n        width: 175px;\n    }\n\n    .CSCRO-2488 .cscro-hero h1{\n        margin-top: 6px;\n        margin-bottom: 22px;\n        font-size: 38px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-hero-blocks{\n        gap: 8px;\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-banner-tile{\n        border-width: 5px;\n        box-shadow: 0 0 13.4px 8px rgba(255, 0, 0, 0.42);\n    }\n\n    .CSCRO-2488 .cscro-tv-bundle-img-desktop{\n        display: none;\n    }\n\n    .CSCRO-2488 .cscro-tv-bundle-img-mob{\n        display: block;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs{\n        margin-top: 12px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs img{\n        max-width: 100%;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-only-tile .cscro-tile-img{\n        margin-top: 35px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs{\n        display: block;\n    }\n\n\n}\n\n@media screen and (max-width: 500px){\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-blue-flare{\n        width: 600px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-tile-img{\n        width: auto;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bb-tv-tile .cscro-tile-mob-imgs{\n        margin: 0 auto;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"].cscro-second-state{\n        min-height: 800px;\n    }\n\n    .CSCRO-2488 .cscro-hero .cscro-bf-hero-imgs img{\n        margin-top: 0;\n        margin-right: 0;\n    }\n}\n\n@media screen and (max-width: 400px){\n    .CSCRO-2488 [data-testid=\"hero-container\"] .cscro-blue-flare{\n        width: 500px;\n    }\n\n    .CSCRO-2488 [data-testid=\"hero-container\"].cscro-second-state{\n        min-height: 705px;\n    }\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "6744064068943872", "endOfRange": 5000}, {"entityId": "5455618910191616", "endOfRange": 10000}], "name": "[A/B] CSCRO-2488 BF - HP Hero", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5055214208679936"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6450020239540224"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": [{"name": "cro:shared", "type": "custom_code", "value": function($){((w) => {
    "use strict";

    var window = typeof unsafeWindow !== "undefined" ? unsafeWindow : w;
    var storyName = "CSCRO-2524";
    var experimentId = "4565349029380096";

    var initVariation = function () {
        document.documentElement.classList.add(storyName);
    };

    function isPlaceholderId(id) {
        var value = id == null ? "" : String(id);
        return (
            value === "" ||
            value === "4565349029380096" ||
            value.indexOf("REPLACE_WITH_") === 0
        );
    }

    function readOptimizelyState() {
        var opti = window.optimizely;
        if (!opti || typeof opti.get !== "function") return null;
        try {
            return opti.get("state");
        } catch (err) {
            return null;
        }
    }

    function resolveExperimentId(state) {
        if (!isPlaceholderId(experimentId)) return String(experimentId);
        if (!state || typeof state.getCampaignStates !== "function") return "";
        var campaigns;
        try {
            campaigns = state.getCampaignStates({ isActive: true });
        } catch (err) {
            return "";
        }
        if (!campaigns || typeof campaigns !== "object") return "";
        var ids = Object.keys(campaigns);
        var i;
        for (i = 0; i < ids.length; i++) {
            var campaign = campaigns[ids[i]];
            var campaignName = campaign && campaign.campaignName ? String(campaign.campaignName) : "";
            if (campaignName.indexOf(storyName) !== -1 && campaign.experiment && campaign.experiment.id) {
                return String(campaign.experiment.id);
            }
        }
        return "";
    }

    function pushOptimizelyCampaign() {
        if (window.__CSCRO2524_campaignFired) return true;
        var state = readOptimizelyState();
        if (!state || typeof state.getExperimentStates !== "function") return false;

        var expId = resolveExperimentId(state);
        if (isPlaceholderId(expId)) return false;

        var states;
        try {
            states = state.getExperimentStates({ isActive: true });
        } catch (err) {
            return false;
        }
        var experimentData = states && states[expId];
        if (
            typeof experimentData !== "object" ||
            !experimentData ||
            Object.keys(experimentData).length === 0 ||
            !experimentData.variation ||
            !experimentData.variation.name
        ) {
            return false;
        }

        window.dataLayer = window.dataLayer || [];
        window.__CSCRO2524_campaignFired = true;
        window.dataLayer.push({
            event: "optimizely_campaign",
            optimizely_experiment: String(expId),
            optimizely_experiment_name: experimentData.experimentName + " (" + expId + ")",
            optimizely_variant_name: experimentData.variation.name,
        });
        return true;
    }

    if (!window.__CSCRO2524_campaignFired && !window.__CSCRO2524_campaignPolling) {
        window.__CSCRO2524_campaignPolling = true;
        var campaignTimer = window.setInterval(function () {
            if (pushOptimizelyCampaign()) {
                window.clearInterval(campaignTimer);
                campaignTimer = null;
            }
        }, 500);
        window.setTimeout(function () {
            if (campaignTimer !== null) {
                window.clearInterval(campaignTimer);
                campaignTimer = null;
            }
        }, 20000);
    }

    function insideSplitImage(node) {
        var current = node;
        while (current && current !== document.documentElement) {
            var className = current.className ? String(current.className) : "";
            if (className.indexOf("split-image") !== -1) return true;
            current = current.parentElement;
        }
        return false;
    }

    function insertBfLockup() {
        var container = document.querySelector('[data-testid="hero-container"]');
        if (!container) return;
        var title = container.querySelector("h1");
        if (!title || !title.parentNode || insideSplitImage(title)) return;

        var prev = title.previousElementSibling;
        if (prev && prev.getAttribute("data-cscro2524-bf") === "lockup") return;

        var leftovers = container.querySelectorAll("[data-cscro2524-bf='lockup']");
        var i;
        for (i = 0; i < leftovers.length; i++) {
            if (leftovers[i].parentNode) leftovers[i].parentNode.removeChild(leftovers[i]);
        }

        var img = document.createElement("img");
        // assets/cscro-2524-bf-lockup@2x.png
        img.src = "https://a.storyblok.com/f/253875/672x199/16f5d92303/cscro-2524-bf-lockup-2x.png";
        img.alt = "Black Friday";
        img.className = "cscro-2524-bf-lockup";
        img.setAttribute("data-cscro2524-bf", "lockup");
        img.setAttribute("decoding", "async");
        title.parentNode.insertBefore(img, title);
    }

    window[storyName] = {
        experimentId: experimentId,
        initVariation: initVariation,
        insertBfLockup: insertBfLockup,
    };
})(window);
}, "id": "cc46a902ee9742e29bc0b22896e2a158", "dependencies": []}], "id": "5138489665126400", "name": "[A/B][Stats Accel] CSCRO-2524 - Black Friday BB&TV creative", "commitId": "5467751790149632", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "5303924979138560"], "audienceName": "Cookie consent [consentGroup]", "changes": null, "id": "5445045136916480", "integrationSettings": null, "variations": [{"id": "4741357695139840", "name": "Control", "actions": [{"viewId": "4991726538981376", "changes": [{"dependencies": [], "id": "fd88d0408c5e434d81f66d90c66d5c02", "name": "cro:control", "type": "custom_code", "value": function($){((window, document) => {
    "use strict";

    var storyName = "CSCRO-2524";
    var experimentId = "4565349029380096";

    // Optimizely Control — no UI changes. Class-only stub.
    document.documentElement.classList.add(storyName);
    document.documentElement.classList.add(storyName + "-control");
    void experimentId;
})(window, document);
}}]}]}, {"id": "5867257601982464", "name": "Variation #1", "actions": [{"viewId": "4991726538981376", "changes": [{"dependencies": [], "id": "63b1757d30654b938d9a4c41e0a2db0f", "name": "cro:v1", "type": "custom_code", "value": function($){(function (window, document) {
    "use strict";

    var storyName = "CSCRO-2524";
    var experimentId = "4565349029380096";
    var variantId = "v1";
    var markerAttr = "data-cscro2524-hero";

    var ASSETS = {
        desktop: "https://a.storyblok.com/f/253875/1906x1482/cd689ba4f8/cscro-2524-v1-desktop-2x.png",
        mobile: "https://a.storyblok.com/f/253875/784x793/d793cc802d/cscro-2524-v1-mobile-2x.png",
    };

    function buildPicture() {
        var picture = document.createElement("picture");
        picture.className = "cscro-2524-hero-picture";
        picture.setAttribute("data-cscro2524-picture", variantId);

        var sourceDesktop = document.createElement("source");
        sourceDesktop.media = "(min-width: 992px)";
        sourceDesktop.srcset = ASSETS.desktop;

        var img = document.createElement("img");
        img.src = ASSETS.mobile;
        img.alt = "";
        img.className = "cscro-2524-hero-img";
        img.setAttribute("decoding", "async");

        picture.appendChild(sourceDesktop);
        picture.appendChild(img);
        return picture;
    }

    function findSplitImage(heroImage) {
        var node = heroImage;
        while (node && node !== document.body) {
            if (node.className && String(node.className).indexOf("split-image") !== -1) {
                return node;
            }
            node = node.parentElement;
        }
        return heroImage.parentElement;
    }

    function applyHero(heroImage) {
        var splitImage = findSplitImage(heroImage);
        if (!splitImage) {
            return;
        }
        if (splitImage.getAttribute(markerAttr) === variantId) {
            if (splitImage.querySelector("[data-cscro2524-picture=\"" + variantId + "\"]")) {
                return;
            }
        }

        var existing = splitImage.querySelector("[data-cscro2524-picture]");
        if (existing) {
            existing.parentNode.removeChild(existing);
        }

        splitImage.appendChild(buildPicture());
        splitImage.setAttribute(markerAttr, variantId);
    }

    function applyLockup() {
        var api = window[storyName];
        if (api && typeof api.insertBfLockup === "function") {
            api.insertBfLockup();
        }
    }

    function variant() {
        var heroImage = document.querySelector('[data-testid="hero-image"]');
        if (!heroImage) {
            return;
        }
        applyHero(heroImage);
        applyLockup();

        var opti = window.optimizely;
        if (opti && typeof opti.get === "function") {
            var utils = opti.get("utils");
            if (utils && typeof utils.observeSelector === "function") {
                var stopHero = utils.observeSelector(
                    '[data-testid="hero-image"]',
                    function (el) {
                        applyHero(el);
                        applyLockup();
                    },
                    { once: false }
                );
                var stopTitle = utils.observeSelector(
                    '[data-testid="hero-container"] h1',
                    function () {
                        applyLockup();
                    },
                    { once: false }
                );
                if (typeof window.registerMO === "function") {
                    if (stopHero) window.registerMO(storyName, { disconnect: stopHero });
                    if (stopTitle) window.registerMO(storyName, { disconnect: stopTitle });
                }
            }
        }
    }

    var $timerA = window.setInterval(function () {
        var subjectSelectorArray = ['[data-testid="hero-image"]', '[data-testid="hero-container"] h1'];
        var subjectRemainingToLoad =
            subjectSelectorArray.filter(function (subject) {
                return document.querySelectorAll(subject).length === 0;
            }).length === 0;
        var sales_cro = window.sales_cro;

        if (subjectRemainingToLoad && sales_cro) {
            window.clearInterval($timerA);
            $timerA = null;
            try {
                console.log("Variant START -", storyName, variantId);
                document.documentElement.classList.add(storyName);
                document.documentElement.classList.add(storyName + "-" + variantId);
                variant();
            } catch (error) {
                console.log(storyName + " Error: " + error);
                if (sales_cro && typeof sales_cro.fireGA4 === "function") {
                    sales_cro.fireGA4(experimentId, storyName, "error", "Error: " + error);
                }
                document.documentElement.classList.add(storyName + "-error");
            }
        }
    }, 500);

    window.setTimeout(function () {
        if ($timerA !== null) {
            window.clearInterval($timerA);
            $timerA = null;
        }
    }, 20000);
})(window, document);
}}, {"dependencies": [], "id": "558b8710fff24dac9ce073fce0215eb2", "name": "cro:v1-css", "selector": "head", "type": "append", "value": "<style>.CSCRO-2524.CSCRO-2524-v1 [class*=\"split-image\"] [data-testid=\"hero-image\"],\n.CSCRO-2524.CSCRO-2524-v1 [class*=\"split-image\"] [data-testid=\"hero-image-overlay\"],\n.CSCRO-2524.CSCRO-2524-v1 [class*=\"split-image\"] .page-bundle-data,\n.CSCRO-2524.CSCRO-2524-v1 [class*=\"split-image\"] .cro-bundle-data {\n    display: none !important;\n}\n\n.CSCRO-2524.CSCRO-2524-v1 [class*=\"split-content\"] {\n    position: relative;\n    z-index: 1;\n}\n\n.CSCRO-2524.CSCRO-2524-v1 [class*=\"split-image\"] {\n    position: relative;\n    margin: -30vw auto 0;\n}\n\n.CSCRO-2524.CSCRO-2524-v1 .cscro-2524-hero-picture {\n    position: relative;\n    display: block;\n    width: 100%;\n    max-width: 100%;\n    z-index: 0;\n}\n\n.CSCRO-2524.CSCRO-2524-v1 .cscro-2524-hero-img {\n    display: block;\n    position: relative;\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n    object-fit: contain;\n    mask-image: linear-gradient(0deg, #000 65%, #0000 79%);\n}\n\n.CSCRO-2524.CSCRO-2524-v1 .cscro-2524-bf-lockup {\n    display: block;\n    width: 336px;\n    max-width: calc(100vw - 2rem);\n    height: auto;\n    margin: 0 auto 18px;\n}\n\n@media (width >= 62rem) {\n    .CSCRO-2524.CSCRO-2524-v1 [class*=\"split-image\"] {\n        max-width: 100%;\n        height: calc(max(35rem, 40vh));\n        margin: auto;\n    }\n\n    .CSCRO-2524.CSCRO-2524-v1 .cscro-2524-hero-picture {\n        position: absolute;\n        top: -8rem;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        width: calc(100% + 10vw);\n        height: calc(100% + 8rem);\n        margin-left: -7vw;\n        max-width: none;\n    }\n\n    .CSCRO-2524.CSCRO-2524-v1 .cscro-2524-hero-img {\n        position: absolute;\n        top: 0;\n        right: 0;\n        width: calc(100% + 2vw);\n        max-width: 900px;\n        height: 100%;\n        object-fit: cover;\n        object-position: right top;\n        mask-image: linear-gradient(270deg, #000 75%, #0000 99%);\n    }\n\n    .CSCRO-2524.CSCRO-2524-v1 .cscro-2524-bf-lockup {\n        margin-right: 0;\n        margin-left: -7px;\n    }\n}\n\n@media (width >= 90rem) {\n    .CSCRO-2524.CSCRO-2524-v1 [class*=\"split-image\"] {\n        height: calc(max(39.875rem, 50vh));\n    }\n}</style>"}]}]}, {"id": "5304307648561152", "name": "Variation #2", "actions": [{"viewId": "4991726538981376", "changes": [{"dependencies": [], "id": "367d3733ed8948a0ac6aba9718c9c881", "name": "cro:v2", "type": "custom_code", "value": function($){(function (window, document) {
    "use strict";

    var storyName = "CSCRO-2524";
    var experimentId = "4565349029380096";
    var variantId = "v2";
    var markerAttr = "data-cscro2524-hero";

    var ASSETS = {
        desktop: "https://a.storyblok.com/f/253875/1786x1482/392524090a/cscro-2524-v2-desktop-2x.png",
        mobile: "https://a.storyblok.com/f/253875/784x932/ca8e84ce05/cscro-2524-v2-mobile-2x.png",
    };

    function buildPicture() {
        var picture = document.createElement("picture");
        picture.className = "cscro-2524-hero-picture";
        picture.setAttribute("data-cscro2524-picture", variantId);

        var sourceDesktop = document.createElement("source");
        sourceDesktop.media = "(min-width: 992px)";
        sourceDesktop.srcset = ASSETS.desktop;

        var img = document.createElement("img");
        img.src = ASSETS.mobile;
        img.alt = "";
        img.className = "cscro-2524-hero-img";
        img.setAttribute("decoding", "async");

        picture.appendChild(sourceDesktop);
        picture.appendChild(img);
        return picture;
    }

    function findSplitImage(heroImage) {
        var node = heroImage;
        while (node && node !== document.body) {
            if (node.className && String(node.className).indexOf("split-image") !== -1) {
                return node;
            }
            node = node.parentElement;
        }
        return heroImage.parentElement;
    }

    function applyHero(heroImage) {
        var splitImage = findSplitImage(heroImage);
        if (!splitImage) {
            return;
        }
        if (splitImage.getAttribute(markerAttr) === variantId) {
            if (splitImage.querySelector("[data-cscro2524-picture=\"" + variantId + "\"]")) {
                return;
            }
        }

        var existing = splitImage.querySelector("[data-cscro2524-picture]");
        if (existing) {
            existing.parentNode.removeChild(existing);
        }

        splitImage.appendChild(buildPicture());
        splitImage.setAttribute(markerAttr, variantId);
    }

    function applyLockup() {
        var api = window[storyName];
        if (api && typeof api.insertBfLockup === "function") {
            api.insertBfLockup();
        }
    }

    function variant() {
        var heroImage = document.querySelector('[data-testid="hero-image"]');
        if (!heroImage) {
            return;
        }
        applyHero(heroImage);
        applyLockup();

        var opti = window.optimizely;
        if (opti && typeof opti.get === "function") {
            var utils = opti.get("utils");
            if (utils && typeof utils.observeSelector === "function") {
                var stopHero = utils.observeSelector(
                    '[data-testid="hero-image"]',
                    function (el) {
                        applyHero(el);
                        applyLockup();
                    },
                    { once: false }
                );
                var stopTitle = utils.observeSelector(
                    '[data-testid="hero-container"] h1',
                    function () {
                        applyLockup();
                    },
                    { once: false }
                );
                if (typeof window.registerMO === "function") {
                    if (stopHero) window.registerMO(storyName, { disconnect: stopHero });
                    if (stopTitle) window.registerMO(storyName, { disconnect: stopTitle });
                }
            }
        }
    }

    var $timerA = window.setInterval(function () {
        var subjectSelectorArray = ['[data-testid="hero-image"]', '[data-testid="hero-container"] h1'];
        var subjectRemainingToLoad =
            subjectSelectorArray.filter(function (subject) {
                return document.querySelectorAll(subject).length === 0;
            }).length === 0;
        var sales_cro = window.sales_cro;

        if (subjectRemainingToLoad && sales_cro) {
            window.clearInterval($timerA);
            $timerA = null;
            try {
                console.log("Variant START -", storyName, variantId);
                document.documentElement.classList.add(storyName);
                document.documentElement.classList.add(storyName + "-" + variantId);
                variant();
            } catch (error) {
                console.log(storyName + " Error: " + error);
                if (sales_cro && typeof sales_cro.fireGA4 === "function") {
                    sales_cro.fireGA4(experimentId, storyName, "error", "Error: " + error);
                }
                document.documentElement.classList.add(storyName + "-error");
            }
        }
    }, 500);

    window.setTimeout(function () {
        if ($timerA !== null) {
            window.clearInterval($timerA);
            $timerA = null;
        }
    }, 20000);
})(window, document);
}}, {"dependencies": [], "id": "f3db903764fb495196833a33fdf2d281", "name": "cro:v2-css", "selector": "head", "type": "append", "value": "<style>.CSCRO-2524.CSCRO-2524-v2 [class*=\"split-image\"] [data-testid=\"hero-image\"],\n.CSCRO-2524.CSCRO-2524-v2 [class*=\"split-image\"] [data-testid=\"hero-image-overlay\"],\n.CSCRO-2524.CSCRO-2524-v2 [class*=\"split-image\"] .page-bundle-data,\n.CSCRO-2524.CSCRO-2524-v2 [class*=\"split-image\"] .cro-bundle-data {\n    display: none !important;\n}\n\n.CSCRO-2524.CSCRO-2524-v2 [class*=\"split-content\"] {\n    position: relative;\n    z-index: 1;\n}\n\n.CSCRO-2524.CSCRO-2524-v2 [class*=\"split-image\"] {\n    position: relative;\n    margin: -40vw auto 0;\n}\n\n.CSCRO-2524.CSCRO-2524-v2 .cscro-2524-hero-picture {\n    position: relative;\n    display: block;\n    width: 100%;\n    max-width: 100%;\n    z-index: 0;\n}\n\n.CSCRO-2524.CSCRO-2524-v2 .cscro-2524-hero-img {\n    display: block;\n    position: relative;\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n    object-fit: contain;\n    mask-image: linear-gradient(0deg, #000 65%, #0000 79%);\n}\n\n.CSCRO-2524.CSCRO-2524-v2 .cscro-2524-bf-lockup {\n    display: block;\n    width: 336px;\n    max-width: calc(100vw - 2rem);\n    height: auto;\n    margin: 0 auto 18px;\n}\n\n@media (width >= 62rem) {\n    .CSCRO-2524.CSCRO-2524-v2 [class*=\"split-image\"] {\n        max-width: 100%;\n        height: calc(max(35rem, 40vh));\n        margin: auto;\n    }\n\n    .CSCRO-2524.CSCRO-2524-v2 .cscro-2524-hero-picture {\n        position: absolute;\n        top: -8rem;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        width: calc(100% + 10vw);\n        height: calc(100% + 9rem);\n        margin-left: -7vw;\n        max-width: none;\n    }\n\n    .CSCRO-2524.CSCRO-2524-v2 .cscro-2524-hero-img {\n        position: absolute;\n        top: 0;\n        right: 0;\n        width: calc(100% + 10vw);\n        max-width: 850px;\n        height: 100%;\n        object-fit: cover;\n        object-position: right top;\n        mask-image: linear-gradient(270deg, #000 75%, #0000 99%);\n    }\n\n    .CSCRO-2524.CSCRO-2524-v2 .cscro-2524-bf-lockup {\n        margin-right: 0;\n        margin-left: -7px;\n    }\n}\n\n@media (width >= 90rem) {\n    .CSCRO-2524.CSCRO-2524-v2 [class*=\"split-image\"] {\n        height: calc(max(39.875rem, 50vh));\n    }\n}</style>"}]}]}, {"id": "6430207555403776", "name": "Variation #3", "actions": [{"viewId": "4991726538981376", "changes": [{"dependencies": [], "id": "4354573dec51405a908ff9c632bc6f38", "name": "cro:v3", "type": "custom_code", "value": function($){(function (window, document) {
    "use strict";

    var storyName = "CSCRO-2524";
    var experimentId = "4565349029380096";
    var variantId = "v3";
    var markerAttr = "data-cscro2524-hero";

    var ASSETS = {
        desktop: "https://a.storyblok.com/f/253875/1855x1494/5edbae2590/cscro-2524-v3-desktop-2x.png",
        mobile: "https://a.storyblok.com/f/253875/784x798/72a1197760/cscro-2524-v3-mobile-2x.png",
    };

    function buildPicture() {
        var picture = document.createElement("picture");
        picture.className = "cscro-2524-hero-picture";
        picture.setAttribute("data-cscro2524-picture", variantId);

        var sourceDesktop = document.createElement("source");
        sourceDesktop.media = "(min-width: 992px)";
        sourceDesktop.srcset = ASSETS.desktop;

        var img = document.createElement("img");
        img.src = ASSETS.mobile;
        img.alt = "";
        img.className = "cscro-2524-hero-img";
        img.setAttribute("decoding", "async");

        picture.appendChild(sourceDesktop);
        picture.appendChild(img);
        return picture;
    }

    function findSplitImage(heroImage) {
        var node = heroImage;
        while (node && node !== document.body) {
            if (node.className && String(node.className).indexOf("split-image") !== -1) {
                return node;
            }
            node = node.parentElement;
        }
        return heroImage.parentElement;
    }

    function applyHero(heroImage) {
        var splitImage = findSplitImage(heroImage);
        if (!splitImage) {
            return;
        }
        if (splitImage.getAttribute(markerAttr) === variantId) {
            if (splitImage.querySelector("[data-cscro2524-picture=\"" + variantId + "\"]")) {
                return;
            }
        }

        var existing = splitImage.querySelector("[data-cscro2524-picture]");
        if (existing) {
            existing.parentNode.removeChild(existing);
        }

        splitImage.appendChild(buildPicture());
        splitImage.setAttribute(markerAttr, variantId);
    }

    function applyLockup() {
        var api = window[storyName];
        if (api && typeof api.insertBfLockup === "function") {
            api.insertBfLockup();
        }
    }

    function variant() {
        var heroImage = document.querySelector('[data-testid="hero-image"]');
        if (!heroImage) {
            return;
        }
        applyHero(heroImage);
        applyLockup();

        var opti = window.optimizely;
        if (opti && typeof opti.get === "function") {
            var utils = opti.get("utils");
            if (utils && typeof utils.observeSelector === "function") {
                var stopHero = utils.observeSelector(
                    '[data-testid="hero-image"]',
                    function (el) {
                        applyHero(el);
                        applyLockup();
                    },
                    { once: false }
                );
                var stopTitle = utils.observeSelector(
                    '[data-testid="hero-container"] h1',
                    function () {
                        applyLockup();
                    },
                    { once: false }
                );
                if (typeof window.registerMO === "function") {
                    if (stopHero) window.registerMO(storyName, { disconnect: stopHero });
                    if (stopTitle) window.registerMO(storyName, { disconnect: stopTitle });
                }
            }
        }
    }

    var $timerA = window.setInterval(function () {
        var subjectSelectorArray = ['[data-testid="hero-image"]', '[data-testid="hero-container"] h1'];
        var subjectRemainingToLoad =
            subjectSelectorArray.filter(function (subject) {
                return document.querySelectorAll(subject).length === 0;
            }).length === 0;
        var sales_cro = window.sales_cro;

        if (subjectRemainingToLoad && sales_cro) {
            window.clearInterval($timerA);
            $timerA = null;
            try {
                console.log("Variant START -", storyName, variantId);
                document.documentElement.classList.add(storyName);
                document.documentElement.classList.add(storyName + "-" + variantId);
                variant();
            } catch (error) {
                console.log(storyName + " Error: " + error);
                if (sales_cro && typeof sales_cro.fireGA4 === "function") {
                    sales_cro.fireGA4(experimentId, storyName, "error", "Error: " + error);
                }
                document.documentElement.classList.add(storyName + "-error");
            }
        }
    }, 500);

    window.setTimeout(function () {
        if ($timerA !== null) {
            window.clearInterval($timerA);
            $timerA = null;
        }
    }, 20000);
})(window, document);
}}, {"dependencies": [], "id": "123d487d28dc442da0434ce24439be11", "name": "cro:v3-css", "selector": "head", "type": "append", "value": "<style>.CSCRO-2524.CSCRO-2524-v3 [class*=\"split-image\"] [data-testid=\"hero-image\"],\n.CSCRO-2524.CSCRO-2524-v3 [class*=\"split-image\"] [data-testid=\"hero-image-overlay\"],\n.CSCRO-2524.CSCRO-2524-v3 [class*=\"split-image\"] .page-bundle-data,\n.CSCRO-2524.CSCRO-2524-v3 [class*=\"split-image\"] .cro-bundle-data {\n    display: none !important;\n}\n\n.CSCRO-2524.CSCRO-2524-v3 [class*=\"split-content\"] {\n    position: relative;\n    z-index: 1;\n}\n\n.CSCRO-2524.CSCRO-2524-v3 [class*=\"split-image\"] {\n    position: relative;\n    margin: -27.5vw auto 0;\n}\n\n.CSCRO-2524.CSCRO-2524-v3 .cscro-2524-hero-picture {\n    position: relative;\n    display: block;\n    width: 100%;\n    max-width: 100%;\n    z-index: 0;\n}\n\n.CSCRO-2524.CSCRO-2524-v3 .cscro-2524-hero-img {\n    display: block;\n    position: relative;\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n    object-fit: contain;\n    mask-image: linear-gradient(0deg, #000 65%, #0000 79%);\n}\n\n.CSCRO-2524.CSCRO-2524-v3 .cscro-2524-bf-lockup {\n    display: block;\n    width: 336px;\n    max-width: calc(100vw - 2rem);\n    height: auto;\n    margin: 0 auto 18px;\n}\n\n@media (width >= 62rem) {\n    .CSCRO-2524.CSCRO-2524-v3 [class*=\"split-image\"] {\n        max-width: 100%;\n        height: calc(max(35rem, 40vh));\n        margin: auto;\n    }\n\n    .CSCRO-2524.CSCRO-2524-v3 .cscro-2524-hero-picture {\n        position: absolute;\n        top: -4rem;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        width: calc(100% + 10vw);\n        height: calc(100% + 4.5rem);\n        margin-left: -7vw;\n        max-width: none;\n    }\n\n    .CSCRO-2524.CSCRO-2524-v3 .cscro-2524-hero-img {\n        position: absolute;\n        top: 0;\n        right: 0;\n        width: calc(100% + 10vw);\n        max-width: 850px;\n        height: 100%;\n        object-fit: cover;\n        object-position: right top;\n        mask-image: linear-gradient(270deg, #000 75%, #0000 99%);\n    }\n\n    .CSCRO-2524.CSCRO-2524-v3 .cscro-2524-bf-lockup {\n        margin-right: 0;\n        margin-left: -7px;\n    }\n}\n\n@media (width >= 90rem) {\n    .CSCRO-2524.CSCRO-2524-v3 [class*=\"split-image\"] {\n        height: calc(max(39.875rem, 50vh));\n    }\n}</style>"}]}]}], "weightDistributions": [{"entityId": "4741357695139840", "endOfRange": 3428}, {"entityId": "5867257601982464", "endOfRange": 5456}, {"entityId": "5304307648561152", "endOfRange": 7553}, {"entityId": "6430207555403776", "endOfRange": 10000}], "name": "[A/B][Stats Accel] CSCRO-2524 - Black Friday BB&TV creative", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "min-time", "layerId": "5138489665126400"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["4991726538981376"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5183892888485888", "name": "[100%] CSCRO-2404 - No set up fee elevation", "commitId": "6536712074035200", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "5303924979138560", "24661040520"], "audienceName": "Cookie consent [consentGroup],Mobile only", "changes": null, "id": "5679833030590464", "integrationSettings": null, "variations": [{"id": "6579504326377472", "name": "Original", "actions": [{"viewId": "5698938490060800", "changes": []}, {"viewId": "5049482862133248", "changes": []}]}, {"id": "5268911279570944", "name": "Variation #1", "actions": [{"viewId": "5698938490060800", "changes": [{"id": "a779a56c0fca4b6eb3c0dd71582a1bb8", "type": "custom_code", "value": function($){// Wrap code in an IIFE
(function (window, document) {
    // Invoking strict mode
    'use strict';
    const storyName = "CSCRO-2404";
    const experimentId = "5679833030590464";
    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector("[data-product-id]"),
            $ = window.$,
            sales_cro = window.sales_cro;

const variant = function () {
    const utils = window.optimizely.get("utils");
    const transformBanner = function() {
        const banner = document.querySelector('.bundles-banner_inside-container__wpcqv');

        if (!banner || banner.querySelector('.cro-2404-copy')) return;

        const nativeButton = banner.querySelector('button');

        if (!nativeButton) return;

        const nativeButtonText = nativeButton.textContent.trim().toLowerCase();
        let networkCopy;

        if (nativeButtonText.includes('full fibre')) {
            networkCopy = 'full fibre network';
        } else if (nativeButtonText.includes('hybrid fibre')) {
            networkCopy = 'hybrid fibre network';
        } else {
            return;
        }

        banner.classList.add('cro-2404-banner');

        banner.querySelectorAll('p, button').forEach((el) => {
            el.classList.add('cro-2404-native-hidden');
        });

        banner.insertAdjacentHTML(
            'afterbegin',
            `
            <img
                class="cro-2404-image"
                src="https://a.storyblok.com/f/253875/100x100/c6043992c7/2319-no-set-up-fee.png"
                width="100"
                height="100"
                alt=""
            >
            <p class="cro-2404-copy">
                All broadband packages use our
                <span class="cro-2404-link" role="button" tabindex="0">${networkCopy}</span>
                and come with no setup fee.
            </p>
            `
        );

        const replacementLink = banner.querySelector('.cro-2404-link');
        const clickNativeButton = () => {
            nativeButton.click();
        };

        replacementLink.addEventListener('click', clickNativeButton);
        replacementLink.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                clickNativeButton();
            }
        });
    };

    transformBanner();

    const stopObserveBanner = utils.observeSelector(
        '.bundles-banner_inside-container__wpcqv',
        transformBanner,
        {
            once: false,
        }
    );

    const stopObservePlanCards = utils.observeSelector("[data-product-id]", function() {
        document.querySelectorAll("[data-product-id]").forEach((productCard) => {
            const contractTerm = productCard.querySelector('[data-cy="contract-term"]');

            if (!contractTerm || /no setup fee/i.test(contractTerm.textContent)) return;

            contractTerm.textContent = `${contractTerm.textContent.trim()}, no setup fee`;
        });
    }, {
        once: false,
    });

    window.registerMO(storyName, {disconnect: stopObserveBanner});
    window.registerMO(storyName, {disconnect: stopObservePlanCards});
};



        // Only proceed if subject is found in DOM
        if (subject && typeof $ == "function" && sales_cro) {
            window.clearInterval($timerA);

            try {
                console.log('Variant START -', storyName)
                document.documentElement.classList.add(storyName);
                variant();
            }
            catch (error) {
                console.log(`${storyName} Error: ${error}`);
                sales_cro.fireGA4(experimentId, storyName, "error", `Error: ${error}`);
                document.documentElement.classList.add(storyName + "-error");
            }
        }

    }, 500);
    setTimeout(function () {
        if ($timerA !== null) {
            clearInterval($timerA);
            if (typeof (error) === 'function') {
                error();
            }
        }
    }, 20000);
}(window, document));
}, "dependencies": []}, {"id": "9c1645599599432c8008673c2ba76b14", "type": "append", "selector": "head", "value": "<style>.CSCRO-2404 .bundles-banner_inside-container__wpcqv.cro-2404-banner {\n    position: relative;\n    left: auto;\n    display: flex !important;\n    align-items: center;\n    gap: 16px;\n    width: 100%;\n    padding: 20px !important;\n    border: 1px solid #d4d4d4 !important;\n    border-radius: 12px !important;\n    background: #fff !important;\n    box-sizing: border-box;\n    transform: none;\n}\n\n.CSCRO-2404 [class*=\"bundles-banner_fixed__\"] > .bundles-banner_inside-container__wpcqv.cro-2404-banner {\n    left: 50%;\n    width: calc(100vw - var(--scrollbar-width, 0px));\n    max-width: none;\n    border: 0 !important;\n    border-bottom: 1px solid #d4d4d4 !important;\n    border-radius: 0 !important;\n    transform: translateX(-50%);\n}\n\n.CSCRO-2404 [class*=\"bundles-banner_fixed__\"] > .bundles-banner_inside-container__wpcqv.cro-2404-banner::after {\n    position: absolute;\n    inset: 0 0 0 50%;\n    z-index: -1;\n    width: calc(100vw - var(--scrollbar-width, 0px));\n    height: 100%;\n    content: \"\";\n    background-color: inherit;\n    transform: translateX(-50%);\n}\n\n.CSCRO-2404 .bundles-banner_inside-container__wpcqv.cro-2404-banner > .cro-2404-image {\n    display: block !important;\n    width: 100px;\n    height: 100px;\n    margin: 0 !important;\n    flex-shrink: 0;\n    object-fit: contain;\n}\n\n.CSCRO-2404 .bundles-banner_inside-container__wpcqv.cro-2404-banner > .cro-2404-copy {\n    display: block !important;\n    margin: 0 !important;\n    color: #333;\n    font-family: \"VM Circular VIP\", sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px;\n    text-align: left;\n}\n\n.CSCRO-2404 .cro-2404-banner .cro-2404-link {\n    color: #5f2878;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.CSCRO-2404 .cro-2404-banner .cro-2404-link:focus-visible {\n    outline: 2px solid #5f2878;\n    outline-offset: 2px;\n}\n\n.CSCRO-2404 .cro-2404-banner > .cro-2404-native-hidden {\n    display: none !important;\n}</style>", "dependencies": []}]}, {"viewId": "5049482862133248", "changes": [{"id": "a00fb5f3424848cc9456205847e36cc3", "type": "append", "selector": "head", "value": "<style>.CSCRO-2404 .bundles-banner_inside-container__wpcqv.cro-2404-banner {\n    position: relative;\n    left: auto;\n    display: flex !important;\n    align-items: center;\n    gap: 16px;\n    width: 100%;\n    padding: 20px !important;\n    border: 1px solid #d4d4d4 !important;\n    border-radius: 12px !important;\n    background: #fff !important;\n    box-sizing: border-box;\n    transform: none;\n}\n\n.CSCRO-2404 [class*=\"bundles-banner_fixed__\"] > .bundles-banner_inside-container__wpcqv.cro-2404-banner {\n    left: 50%;\n    width: calc(100vw - var(--scrollbar-width, 0px));\n    max-width: none;\n    border: 0 !important;\n    border-bottom: 1px solid #d4d4d4 !important;\n    border-radius: 0 !important;\n    transform: translateX(-50%);\n}\n\n.CSCRO-2404 [class*=\"bundles-banner_fixed__\"] > .bundles-banner_inside-container__wpcqv.cro-2404-banner::after {\n    position: absolute;\n    inset: 0 0 0 50%;\n    z-index: -1;\n    width: calc(100vw - var(--scrollbar-width, 0px));\n    height: 100%;\n    content: \"\";\n    background-color: inherit;\n    transform: translateX(-50%);\n}\n\n.CSCRO-2404 .bundles-banner_inside-container__wpcqv.cro-2404-banner > .cro-2404-image {\n    display: block !important;\n    width: 100px;\n    height: 100px;\n    margin: 0 !important;\n    flex-shrink: 0;\n    object-fit: contain;\n}\n\n.CSCRO-2404 .bundles-banner_inside-container__wpcqv.cro-2404-banner > .cro-2404-copy {\n    display: block !important;\n    margin: 0 !important;\n    color: #333;\n    font-family: \"VM Circular VIP\", sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px;\n    text-align: left;\n}\n\n.CSCRO-2404 .cro-2404-banner .cro-2404-link {\n    color: #5f2878;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.CSCRO-2404 .cro-2404-banner .cro-2404-link:focus-visible {\n    outline: 2px solid #5f2878;\n    outline-offset: 2px;\n}\n\n.CSCRO-2404 .cro-2404-banner > .cro-2404-native-hidden {\n    display: none !important;\n}</style>", "dependencies": []}, {"id": "e76b11ada578484d90705d252d6f8841", "type": "custom_code", "value": function($){// Wrap code in an IIFE
(function (window, document) {
    // Invoking strict mode
    'use strict';
    const storyName = "CSCRO-2404";
    const experimentId = "5679833030590464";
    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector("[data-product-id]"),
            $ = window.$,
            sales_cro = window.sales_cro;

const variant = function () {
    const utils = window.optimizely.get("utils");
    const transformBanner = function() {
        const banner = document.querySelector('.bundles-banner_inside-container__wpcqv');

        if (!banner || banner.querySelector('.cro-2404-copy')) return;

        const nativeButton = banner.querySelector('button');

        if (!nativeButton) return;

        const nativeButtonText = nativeButton.textContent.trim().toLowerCase();
        let networkCopy;

        if (nativeButtonText.includes('full fibre')) {
            networkCopy = 'full fibre network';
        } else if (nativeButtonText.includes('hybrid fibre')) {
            networkCopy = 'hybrid fibre network';
        } else {
            return;
        }

        banner.classList.add('cro-2404-banner');

        banner.querySelectorAll('p, button').forEach((el) => {
            el.classList.add('cro-2404-native-hidden');
        });

        banner.insertAdjacentHTML(
            'afterbegin',
            `
            <img
                class="cro-2404-image"
                src="https://a.storyblok.com/f/253875/100x100/c6043992c7/2319-no-set-up-fee.png"
                width="100"
                height="100"
                alt=""
            >
            <p class="cro-2404-copy">
                All broadband packages use our
                <span class="cro-2404-link" role="button" tabindex="0">${networkCopy}</span>
                and come with no setup fee.
            </p>
            `
        );

        const replacementLink = banner.querySelector('.cro-2404-link');
        const clickNativeButton = () => {
            nativeButton.click();
        };

        replacementLink.addEventListener('click', clickNativeButton);
        replacementLink.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                clickNativeButton();
            }
        });
    };

    transformBanner();

    const stopObserveBanner = utils.observeSelector(
        '.bundles-banner_inside-container__wpcqv',
        transformBanner,
        {
            once: false,
        }
    );

    const stopObservePlanCards = utils.observeSelector("[data-product-id]", function() {
        document.querySelectorAll("[data-product-id]").forEach((productCard) => {
            const contractTerm = productCard.querySelector('[data-cy="contract-term"]');

            if (!contractTerm || /no setup fee/i.test(contractTerm.textContent)) return;

            contractTerm.textContent = `${contractTerm.textContent.trim()}, no setup fee`;
        });
    }, {
        once: false,
    });

    window.registerMO(storyName, {disconnect: stopObserveBanner});
    window.registerMO(storyName, {disconnect: stopObservePlanCards});
};



        // Only proceed if subject is found in DOM
        if (subject && typeof $ == "function" && sales_cro) {
            window.clearInterval($timerA);

            try {
                console.log('Variant START -', storyName)
                document.documentElement.classList.add(storyName);
                variant();
            }
            catch (error) {
                console.log(`${storyName} Error: ${error}`);
                sales_cro.fireGA4(experimentId, storyName, "error", `Error: ${error}`);
                document.documentElement.classList.add(storyName + "-error");
            }
        }

    }, 500);
    setTimeout(function () {
        if ($timerA !== null) {
            clearInterval($timerA);
            if (typeof (error) === 'function') {
                error();
            }
        }
    }, 20000);
}(window, document));
}, "dependencies": []}]}, {"viewId": "5559850269147136", "changes": [{"id": "D8EBF5D5-8830-49C5-9D34-8B156D224955", "type": "custom_code", "value": function($){// Wrap code in an IIFE
(function (window, document) {
    // Invoking strict mode
    'use strict';
    const storyName = "CSCRO-2404";
    const experimentId = "5679833030590464";
    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector("[data-product-id]"),
            $ = window.$,
            sales_cro = window.sales_cro;

const variant = function () {
    const utils = window.optimizely.get("utils");
    const transformBanner = function() {
        const banner = document.querySelector('.bundles-banner_inside-container__wpcqv');

        if (!banner || banner.querySelector('.cro-2404-copy')) return;

        const nativeButton = banner.querySelector('button');

        if (!nativeButton) return;

        const nativeButtonText = nativeButton.textContent.trim().toLowerCase();
        let networkCopy;

        if (nativeButtonText.includes('full fibre')) {
            networkCopy = 'full fibre network';
        } else if (nativeButtonText.includes('hybrid fibre')) {
            networkCopy = 'hybrid fibre network';
        } else {
            return;
        }

        banner.classList.add('cro-2404-banner');

        banner.querySelectorAll('p, button').forEach((el) => {
            el.classList.add('cro-2404-native-hidden');
        });

        banner.insertAdjacentHTML(
            'afterbegin',
            `
            <img
                class="cro-2404-image"
                src="https://a.storyblok.com/f/253875/100x100/c6043992c7/2319-no-set-up-fee.png"
                width="100"
                height="100"
                alt=""
            >
            <p class="cro-2404-copy">
                All broadband packages use our
                <span class="cro-2404-link" role="button" tabindex="0">${networkCopy}</span>
                and come with no setup fee.
            </p>
            `
        );

        const replacementLink = banner.querySelector('.cro-2404-link');
        const clickNativeButton = () => {
            nativeButton.click();
        };

        replacementLink.addEventListener('click', clickNativeButton);
        replacementLink.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                clickNativeButton();
            }
        });
    };

    transformBanner();

    const stopObserveBanner = utils.observeSelector(
        '.bundles-banner_inside-container__wpcqv',
        transformBanner,
        {
            once: false,
        }
    );

    const stopObservePlanCards = utils.observeSelector("[data-product-id]", function() {
        document.querySelectorAll("[data-product-id]").forEach((productCard) => {
            const contractTerm = productCard.querySelector('[data-cy="contract-term"]');

            if (!contractTerm || /no setup fee/i.test(contractTerm.textContent)) return;

            contractTerm.textContent = `${contractTerm.textContent.trim()}, no setup fee`;
        });
    }, {
        once: false,
    });

    window.registerMO(storyName, {disconnect: stopObserveBanner});
    window.registerMO(storyName, {disconnect: stopObservePlanCards});
};



        // Only proceed if subject is found in DOM
        if (subject && typeof $ == "function" && sales_cro) {
            window.clearInterval($timerA);

            try {
                console.log('Variant START -', storyName)
                document.documentElement.classList.add(storyName);
                variant();
            }
            catch (error) {
                console.log(`${storyName} Error: ${error}`);
                sales_cro.fireGA4(experimentId, storyName, "error", `Error: ${error}`);
                document.documentElement.classList.add(storyName + "-error");
            }
        }

    }, 500);
    setTimeout(function () {
        if ($timerA !== null) {
            clearInterval($timerA);
            if (typeof (error) === 'function') {
                error();
            }
        }
    }, 20000);
}(window, document));
}, "dependencies": []}, {"id": "6B4F3CAF-5D9F-4C3C-9F28-EB2E59A34356", "type": "append", "selector": "head", "value": "<style>.CSCRO-2404 .bundles-banner_inside-container__wpcqv.cro-2404-banner {\n    position: relative;\n    left: auto;\n    display: flex !important;\n    align-items: center;\n    gap: 16px;\n    width: 100%;\n    padding: 20px !important;\n    border: 1px solid #d4d4d4 !important;\n    border-radius: 12px !important;\n    background: #fff !important;\n    box-sizing: border-box;\n    transform: none;\n}\n\n.CSCRO-2404 [class*=\"bundles-banner_fixed__\"] > .bundles-banner_inside-container__wpcqv.cro-2404-banner {\n    left: 50%;\n    width: calc(100vw - var(--scrollbar-width, 0px));\n    max-width: none;\n    border: 0 !important;\n    border-bottom: 1px solid #d4d4d4 !important;\n    border-radius: 0 !important;\n    transform: translateX(-50%);\n}\n\n.CSCRO-2404 [class*=\"bundles-banner_fixed__\"] > .bundles-banner_inside-container__wpcqv.cro-2404-banner::after {\n    position: absolute;\n    inset: 0 0 0 50%;\n    z-index: -1;\n    width: calc(100vw - var(--scrollbar-width, 0px));\n    height: 100%;\n    content: \"\";\n    background-color: inherit;\n    transform: translateX(-50%);\n}\n\n.CSCRO-2404 .bundles-banner_inside-container__wpcqv.cro-2404-banner > .cro-2404-image {\n    display: block !important;\n    width: 100px;\n    height: 100px;\n    margin: 0 !important;\n    flex-shrink: 0;\n    object-fit: contain;\n}\n\n.CSCRO-2404 .bundles-banner_inside-container__wpcqv.cro-2404-banner > .cro-2404-copy {\n    display: block !important;\n    margin: 0 !important;\n    color: #333;\n    font-family: \"VM Circular VIP\", sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px;\n    text-align: left;\n}\n\n.CSCRO-2404 .cro-2404-banner .cro-2404-link {\n    color: #5f2878;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.CSCRO-2404 .cro-2404-banner .cro-2404-link:focus-visible {\n    outline: 2px solid #5f2878;\n    outline-offset: 2px;\n}\n\n.CSCRO-2404 .cro-2404-banner > .cro-2404-native-hidden {\n    display: none !important;\n}</style>", "dependencies": []}]}, {"viewId": "6688962425651200", "changes": [{"id": "2A22D026-636C-468B-B44D-C1C0CE465F3A", "type": "append", "selector": "head", "value": "<style>.CSCRO-2404 .bundles-banner_inside-container__wpcqv.cro-2404-banner {\n    position: relative;\n    left: auto;\n    display: flex !important;\n    align-items: center;\n    gap: 16px;\n    width: 100%;\n    padding: 20px !important;\n    border: 1px solid #d4d4d4 !important;\n    border-radius: 12px !important;\n    background: #fff !important;\n    box-sizing: border-box;\n    transform: none;\n}\n\n.CSCRO-2404 [class*=\"bundles-banner_fixed__\"] > .bundles-banner_inside-container__wpcqv.cro-2404-banner {\n    left: 50%;\n    width: calc(100vw - var(--scrollbar-width, 0px));\n    max-width: none;\n    border: 0 !important;\n    border-bottom: 1px solid #d4d4d4 !important;\n    border-radius: 0 !important;\n    transform: translateX(-50%);\n}\n\n.CSCRO-2404 [class*=\"bundles-banner_fixed__\"] > .bundles-banner_inside-container__wpcqv.cro-2404-banner::after {\n    position: absolute;\n    inset: 0 0 0 50%;\n    z-index: -1;\n    width: calc(100vw - var(--scrollbar-width, 0px));\n    height: 100%;\n    content: \"\";\n    background-color: inherit;\n    transform: translateX(-50%);\n}\n\n.CSCRO-2404 .bundles-banner_inside-container__wpcqv.cro-2404-banner > .cro-2404-image {\n    display: block !important;\n    width: 100px;\n    height: 100px;\n    margin: 0 !important;\n    flex-shrink: 0;\n    object-fit: contain;\n}\n\n.CSCRO-2404 .bundles-banner_inside-container__wpcqv.cro-2404-banner > .cro-2404-copy {\n    display: block !important;\n    margin: 0 !important;\n    color: #333;\n    font-family: \"VM Circular VIP\", sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px;\n    text-align: left;\n}\n\n.CSCRO-2404 .cro-2404-banner .cro-2404-link {\n    color: #5f2878;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.CSCRO-2404 .cro-2404-banner .cro-2404-link:focus-visible {\n    outline: 2px solid #5f2878;\n    outline-offset: 2px;\n}\n\n.CSCRO-2404 .cro-2404-banner > .cro-2404-native-hidden {\n    display: none !important;\n}</style>", "dependencies": []}, {"id": "B83F41BC-EE7C-4E58-857A-57C0F84B6A51", "type": "custom_code", "value": function($){// Wrap code in an IIFE
(function (window, document) {
    // Invoking strict mode
    'use strict';
    const storyName = "CSCRO-2404";
    const experimentId = "5679833030590464";
    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector("[data-product-id]"),
            $ = window.$,
            sales_cro = window.sales_cro;

const variant = function () {
    const utils = window.optimizely.get("utils");
    const transformBanner = function() {
        const banner = document.querySelector('.bundles-banner_inside-container__wpcqv');

        if (!banner || banner.querySelector('.cro-2404-copy')) return;

        const nativeButton = banner.querySelector('button');

        if (!nativeButton) return;

        const nativeButtonText = nativeButton.textContent.trim().toLowerCase();
        let networkCopy;

        if (nativeButtonText.includes('full fibre')) {
            networkCopy = 'full fibre network';
        } else if (nativeButtonText.includes('hybrid fibre')) {
            networkCopy = 'hybrid fibre network';
        } else {
            return;
        }

        banner.classList.add('cro-2404-banner');

        banner.querySelectorAll('p, button').forEach((el) => {
            el.classList.add('cro-2404-native-hidden');
        });

        banner.insertAdjacentHTML(
            'afterbegin',
            `
            <img
                class="cro-2404-image"
                src="https://a.storyblok.com/f/253875/100x100/c6043992c7/2319-no-set-up-fee.png"
                width="100"
                height="100"
                alt=""
            >
            <p class="cro-2404-copy">
                All broadband packages use our
                <span class="cro-2404-link" role="button" tabindex="0">${networkCopy}</span>
                and come with no setup fee.
            </p>
            `
        );

        const replacementLink = banner.querySelector('.cro-2404-link');
        const clickNativeButton = () => {
            nativeButton.click();
        };

        replacementLink.addEventListener('click', clickNativeButton);
        replacementLink.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                clickNativeButton();
            }
        });
    };

    transformBanner();

    const stopObserveBanner = utils.observeSelector(
        '.bundles-banner_inside-container__wpcqv',
        transformBanner,
        {
            once: false,
        }
    );

    const stopObservePlanCards = utils.observeSelector("[data-product-id]", function() {
        document.querySelectorAll("[data-product-id]").forEach((productCard) => {
            const contractTerm = productCard.querySelector('[data-cy="contract-term"]');

            if (!contractTerm || /no setup fee/i.test(contractTerm.textContent)) return;

            contractTerm.textContent = `${contractTerm.textContent.trim()}, no setup fee`;
        });
    }, {
        once: false,
    });

    window.registerMO(storyName, {disconnect: stopObserveBanner});
    window.registerMO(storyName, {disconnect: stopObservePlanCards});
};



        // Only proceed if subject is found in DOM
        if (subject && typeof $ == "function" && sales_cro) {
            window.clearInterval($timerA);

            try {
                console.log('Variant START -', storyName)
                document.documentElement.classList.add(storyName);
                variant();
            }
            catch (error) {
                console.log(`${storyName} Error: ${error}`);
                sales_cro.fireGA4(experimentId, storyName, "error", `Error: ${error}`);
                document.documentElement.classList.add(storyName + "-error");
            }
        }

    }, 500);
    setTimeout(function () {
        if ($timerA !== null) {
            clearInterval($timerA);
            if (typeof (error) === 'function') {
                error();
            }
        }
    }, 20000);
}(window, document));
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "5268911279570944", "endOfRange": 10000}], "name": "[100%] CSCRO-2404 - No set up fee elevation", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5183892888485888"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5049482862133248", "5559850269147136", "5698938490060800", "6688962425651200"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5310808316444672", "name": "[A/B][BF]CSCRO-2496 Black Friday checkout timer", "commitId": "5944118055010304", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", ["or", "29787670039", "4721173056454656"], "5303924979138560"], "audienceName": "GCP journey : create-basket,GCP journey: quickCheckout,Cookie consent [consentGroup]", "changes": null, "id": "5335894717104128", "integrationSettings": null, "variations": [{"id": "5478572289163264", "name": "Original", "actions": []}, {"id": "5866313866805248", "name": "Variation #1", "actions": [{"viewId": "6041522242584576", "changes": [{"id": "422649d850754a1597906d5a5aaef552", "type": "custom_code", "value": function($){// Wrap code in an IIFE
(function (window, document) {
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subjectSelectorArray = ["vo-header"],
            subjectRemainingToLoad = subjectSelectorArray.filter(subject => { return document.querySelectorAll(subject).length === 0 }).length == 0,
            sales_cro = window.sales_cro,
            optimzly = window.optimizely,
            debug = false,
            lastHref,
            timerInterval,
            counterMinutes = 20,
            sbImgPath = "https://storyblok.cdn.vmo2digital.co.uk/f/253875";

        const experimentId = "5335894717104128", storyNumber = "CSCRO-2496",
            path = window.location.pathname,
            prefix = "cscro",
            log = (msg) => {
                if (debug) console.log(msg);
            },
            clockIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29998 18.6C14.4375 18.6 18.6 14.4375 18.6 9.29998C18.6 4.16249 14.4375 0 9.29998 0C4.16249 0 0 4.16249 0 9.29998C0 14.4375 4.16249 18.6 9.29998 18.6ZM9.29998 16.8C5.15624 16.8 1.8 13.4437 1.8 9.29998C1.8 5.15624 5.15624 1.8 9.29998 1.8C13.4437 1.8 16.8 5.15624 16.8 9.29998C16.8 13.4437 13.4437 16.8 9.29998 16.8ZM12.2475 12.7875L12.9525 11.8162C13.0987 11.6137 13.0575 11.3325 12.855 11.1862L10.35 9.36374V4.04999C10.35 3.80251 10.1475 3.59999 9.89998 3.59999H8.69998C8.45249 3.59999 8.24998 3.80251 8.24998 4.04999V10.2075C8.24998 10.35 8.31747 10.485 8.43374 10.5712L11.6175 12.885C11.82 13.0312 12.1012 12.9862 12.2475 12.7875Z" fill="white"/>
</svg>`,
            timerHtml = `
                <div class="cscro-countdown-container">
                    <h2>
${clockIcon} Tick-tock...20 minutes to lock in your deal
                    </h2>
                    <dl class="cscro-clock">
                        <div class="counter">
                            <dd class="digits" id="minutes">00</dd>
                            <dt class="unit">Minutes</dt>
                        </div>
                        <div class="counter">
                            <dd class="digits" id="seconds">00</dd>
                            <dt class="unit">Seconds</dt>
                        </div>
                    </dl>
                </div>`,
            updateCountdown = (targetDate) => {
                function pad(num) {
                    return String(num).padStart(2, "0");
                }

                const now = new Date();
                const difference = targetDate - now;

                if (difference <= 0) {
                    const minEl = document.getElementById("minutes");
                    const secEl = document.getElementById("seconds");
                    if (minEl) minEl.textContent = "00";
                    if (secEl) secEl.textContent = "00";
                    clearInterval(timerInterval);
                    resetBanner();
                    return;
                }
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                log(`${minutes} minutes and ${seconds} seconds`);
                
                const minEl = document.getElementById("minutes");
                const secEl = document.getElementById("seconds");
                if (minEl) minEl.textContent = pad(minutes);
                if (secEl) secEl.textContent = pad(seconds);

                window.sessionStorage.setItem("cro-countdown", targetDate);
            },
            timer = (targetDate) => {
                timerInterval = setInterval(() => {
                    updateCountdown(targetDate);
                }, 1000);

                updateCountdown(targetDate);
            },
            onUrlChange = () => {
                if (location.href === lastHref) return;
                const from = lastHref;
                const to = location.href;
                lastHref = to;
                log("disconnecting observers");
                
                document.body.classList.remove(storyNumber);
                document.querySelectorAll(".cscro-countdown-container").forEach(el => el.remove());
            },
            calculateEndTime = (counterMinutes) => {
                // Get the current date and time
                const now = new Date();

                // Add 'counterMinutes' minutes
                const twentyMinutesLater = new Date(now.getTime() + counterMinutes * 60 * 1000);

                // Helper to pad with leading zero
                const pad = (n) => n.toString().padStart(2, "0");

                // Extract components
                const year = twentyMinutesLater.getFullYear();
                const month = pad(twentyMinutesLater.getMonth() + 1);
                const day = pad(twentyMinutesLater.getDate());
                const hours = pad(twentyMinutesLater.getHours());
                const minutes = pad(twentyMinutesLater.getMinutes());
                const seconds = pad(twentyMinutesLater.getSeconds());

                // Custom formatted versions
                log(`11️⃣ ISO-like no milliseconds → ${year}-${month}-${day}T${hours}:${minutes}:${seconds}`);
                return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
            },
            startPageChangeObserver = () => {
                window.addEventListener("popstate", onUrlChange, { passive: true });
                window.addEventListener("hashchange", onUrlChange, { passive: true });

                if (!window.globalExecutedTs) {
                    window.globalExecutedTs = true;
                    var oldPushState = window.history.pushState;
                    window.history.pushState = function (data) {
                        try {
                            oldPushState.apply(this, arguments);
                            document.body.classList.remove(storyNumber);
                            document.querySelectorAll(".cscro-countdown-container").forEach(el => el.remove());
                        } catch (e) {
                            console.log(e);
                        }
                    };
                }
            },
            resetBanner = () => {
                document.querySelectorAll(".cscro-countdown-container").forEach(el => el.remove());
                window.sessionStorage.setItem("cro-countdown-finished", "true");
                document.body.classList.remove("cro-countdown-on");
            },
            variant = () => {
                let countdownIsFinished = window.sessionStorage.getItem("cro-countdown-finished") == "true";
                if (countdownIsFinished) return;

                if (!document.querySelectorAll(`.cscro-countdown-container`).length) {
                    const header = document.querySelector("vo-header");
                    if (header) {
                        header.insertAdjacentHTML('beforeend', timerHtml);
                    }
                }
                document.body.classList.add("cro-countdown-on");
                let isCountdownOn = window.sessionStorage.getItem("cro-countdown") !== null;
                let targetDate = new Date(isCountdownOn ? window.sessionStorage.getItem("cro-countdown") : calculateEndTime(counterMinutes));
                log(`targetDate = ,${targetDate}`);
                timer(targetDate);
            };

        // Only proceed if subject is found in DOM (jQuery check removed)
        if (subjectRemainingToLoad && sales_cro && optimzly) {
            window.clearInterval($timerA);
            try {
                document.body.classList.add(storyNumber);
                console.log("in " + storyNumber);
                variant();

                //Start observing page change
                startPageChangeObserver();
            }
            catch (error) {
                console.log(`${storyNumber} Error: ${error}`);
                window.sales_cro.fireGA4(experimentId, storyNumber, "error", `Error: ${error}`);
                document.documentElement.classList.add(storyNumber + "-error");
            }
        }
    }, 500);

    setTimeout(function () {
        if ($timerA !== null) {
            clearInterval($timerA);
            if (typeof (error) === 'function') {
                error();
            }
        }
    }, 20000);
}(window, document));
}, "dependencies": []}, {"id": "0f4e63b18d42420092436a7e19c0722e", "type": "append", "selector": "head", "value": "<style>.CSCRO-2496 .cscro-clock{display: none!important;}\n.CSCRO-2496.cro-countdown-on vo-header{background-color: #000;}\n.CSCRO-2496 .cscro-countdown-container{\n    margin-bottom: 1.5rem;\n}\n\n.CSCRO-2496 .header-decoration{\n    --decoration-gradient: #000!important;\n    --decoration-flare-large-color: #000!important;\n    --decoration-flare-small-color: #000!important;\n}\n\n.CSCRO-2496 .cscro-countdown-container h2{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: .5rem;\n    color: #fff;\n    text-align: center;\n    font-family: var(--mo-font-family);\n    font-size: 1rem;\n    font-weight: 500;\n    line-height: 1.5rem;\n}\n\n.CSCRO-2496 .cscro-clock{\n    display: flex;\n    margin-left: 20px;\n    margin-top: 16px;\n    gap: 24px;\n    align-items: center;\n    justify-content: center;\n}\n\n.CSCRO-2496 .cscro-clock .counter{\n    position: relative;\n    width: 84px;\n}\n\n.CSCRO-2496 .cscro-clock .counter .digits::before{\n    left: -.75rem;\n}\n\n.CSCRO-2496 .cscro-clock .counter .digits::after{\n    right: 2px;\n}\n\n.CSCRO-2496 .cscro-clock .counter .digits::before, \n.CSCRO-2496 .cscro-clock .counter .digits::after{\n    position: absolute;\n    top: 0;\n    content: \"\";\n    z-index: -1;\n    border-radius: 4px;\n    height: 2.40625rem;\n    width: 2rem;\n    height: 48px;\n    width: 40px;\n    background: none;\n}\n\n.CSCRO-2496 .cscro-clock .counter .digits{\n    position: relative;\n    width: 75px;\n    height: 48px;\n    line-height: 48px;\n    letter-spacing: 1.85rem;\n    z-index: 1;\n    color: #000;\n    font-family: \"VMMomentum\", Arial, Helvetica, sans-serif;\n    font-size: 28px;\n    font-weight: 900;\n}\n\n.CSCRO-2496 .cscro-clock .counter .unit{\n    margin-top: 8px;\n    width: 62px;\n    color: #000;\n    text-align: center;\n    font-family: \"VMMomentum\", Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 20px; \n    text-transform: uppercase;\n}\n\n@media screen and (max-width: 990px){\n    .CSCRO-2496 .cscro-clock{\n        width: 270px;\n        gap: 24px;\n        margin-left: auto;\n        margin-right: auto; \n        padding-left: 10px;\n    }\n\n    .CSCRO-2496 .cscro-clock .counter .digits{\n        height: 32px;\n    }\n\n    .CSCRO-2496 .cscro-clock .counter .digits::before, \n    .CSCRO-2496 .cscro-clock .counter .digits::after{\n        height: 32px;\n        width: 28px;\n    }\n\n    .CSCRO-2496 .cscro-clock .counter .unit{\n        font-size: 10px;\n        width: 46px;\n    }\n\n    .CSCRO-2496 .cscro-clock .counter .digits{\n        width: 54px;\n        font-size: 20px;\n        letter-spacing: 1.1em;\n        line-height: 35px;\n    }\n\n    .CSCRO-2496 .cscro-clock .counter .digits::before{\n        left: -8px;\n    }\n}\n@media (max-width:321px){\n    .CSCRO-2496 .cscro-countdown-container h2{font-size: .8rem;}\n}</style>", "dependencies": []}]}]}, {"id": "6306467635003392", "name": "Variation #2", "actions": [{"viewId": "6041522242584576", "changes": [{"id": "557e65f1ff724f56a20a81c8327f3755", "type": "custom_code", "value": function($){// Wrap code in an IIFE
(function (window, document) {
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subjectSelectorArray = ["vo-header"],
            subjectRemainingToLoad = subjectSelectorArray.filter(subject => { return document.querySelectorAll(subject).length === 0 }).length == 0,
            sales_cro = window.sales_cro,
            optimzly = window.optimizely,
            debug = false,
            lastHref,
            timerInterval,
            counterMinutes = 20,
            scrollObserver,
            sbImgPath = "https://storyblok.cdn.vmo2digital.co.uk/f/253875";

        const experimentId = "5335894717104128", storyNumber = "CSCRO-2496",
            path = window.location.pathname,
            prefix = "cscro",
            log = (msg) => {
                if (debug) console.log(msg);
            },
            clockIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29998 18.6C14.4375 18.6 18.6 14.4375 18.6 9.29998C18.6 4.16249 14.4375 0 9.29998 0C4.16249 0 0 4.16249 0 9.29998C0 14.4375 4.16249 18.6 9.29998 18.6ZM9.29998 16.8C5.15624 16.8 1.8 13.4437 1.8 9.29998C1.8 5.15624 5.15624 1.8 9.29998 1.8C13.4437 1.8 16.8 5.15624 16.8 9.29998C16.8 13.4437 13.4437 16.8 9.29998 16.8ZM12.2475 12.7875L12.9525 11.8162C13.0987 11.6137 13.0575 11.3325 12.855 11.1862L10.35 9.36374V4.04999C10.35 3.80251 10.1475 3.59999 9.89998 3.59999H8.69998C8.45249 3.59999 8.24998 3.80251 8.24998 4.04999V10.2075C8.24998 10.35 8.31747 10.485 8.43374 10.5712L11.6175 12.885C11.82 13.0312 12.1012 12.9862 12.2475 12.7875Z" fill="white"/>
</svg>`,
            clockIconSticky = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none" class="sticky-svg">
  <path d="M9.29998 18.6C14.4375 18.6 18.6 14.4375 18.6 9.29998C18.6 4.16249 14.4375 0 9.29998 0C4.16249 0 0 4.16249 0 9.29998C0 14.4375 4.16249 18.6 9.29998 18.6ZM9.29998 16.8C5.15624 16.8 1.8 13.4437 1.8 9.29998C1.8 5.15624 5.15624 1.8 9.29998 1.8C13.4437 1.8 16.8 5.15624 16.8 9.29998C16.8 13.4437 13.4437 16.8 9.29998 16.8ZM12.2475 12.7875L12.9525 11.8162C13.0987 11.6137 13.0575 11.3325 12.855 11.1862L10.35 9.36374V4.04999C10.35 3.80251 10.1475 3.59999 9.89998 3.59999H8.69998C8.45249 3.59999 8.24998 3.80251 8.24998 4.04999V10.2075C8.24998 10.35 8.31747 10.485 8.43375 10.5712L11.6175 12.885C11.82 13.0312 12.1012 12.9862 12.2475 12.7875Z" fill-rule="evenodd" clip-rule="evenodd" fill="#333333"/>
</svg>`,
            timerHtml = `
                <div class="cscro-countdown-container">
                    <h2>
${clockIcon}${clockIconSticky} Tick-tock...20 minutes to lock in your deal
                    </h2>
                    <dl class="cscro-clock">
                        <div class="counter">
                            <dd class="digits" id="minutes">00</dd>
                            <dt class="unit">Minutes</dt>
                        </div>
                        <div class="counter">
                            <dd class="digits" id="seconds">00</dd>
                            <dt class="unit">Seconds</dt>
                        </div>
                    </dl>
                </div>`,
            updateCountdown = (targetDate) => {
                function pad(num) {
                    return String(num).padStart(2, "0");
                }

                const now = new Date();
                const difference = targetDate - now;

                if (difference <= 0) {
                    const minEl = document.getElementById("minutes");
                    const secEl = document.getElementById("seconds");
                    if (minEl) minEl.textContent = "00";
                    if (secEl) secEl.textContent = "00";
                    clearInterval(timerInterval);
                    resetBanner();
                    return;
                }
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                log(`${minutes} minutes and ${seconds} seconds`);
                
                const minEl = document.getElementById("minutes");
                const secEl = document.getElementById("seconds");
                if (minEl) minEl.textContent = pad(minutes);
                if (secEl) secEl.textContent = pad(seconds);

                window.sessionStorage.setItem("cro-countdown", targetDate);
            },
            timer = (targetDate) => {
                timerInterval = setInterval(() => {
                    updateCountdown(targetDate);
                }, 1000);

                updateCountdown(targetDate);
            },
            onUrlChange = () => {
                if (location.href === lastHref) return;
                const from = lastHref;
                const to = location.href;
                lastHref = to;
                log("disconnecting observers");
                
                document.body.classList.remove(storyNumber);
                if(scrollObserver && typeof(scrollObserver) == "object") scrollObserver.disconnect();
                document.querySelectorAll(".cscro-countdown-container,.cscro-scroll-sentinel").forEach(el => el.remove());
            },
            calculateEndTime = (counterMinutes) => {
                // Get the current date and time
                const now = new Date();

                // Add 'counterMinutes' minutes
                const twentyMinutesLater = new Date(now.getTime() + counterMinutes * 60 * 1000);

                // Helper to pad with leading zero
                const pad = (n) => n.toString().padStart(2, "0");

                // Extract components
                const year = twentyMinutesLater.getFullYear();
                const month = pad(twentyMinutesLater.getMonth() + 1);
                const day = pad(twentyMinutesLater.getDate());
                const hours = pad(twentyMinutesLater.getHours());
                const minutes = pad(twentyMinutesLater.getMinutes());
                const seconds = pad(twentyMinutesLater.getSeconds());

                // Custom formatted versions
                log(`11️⃣ ISO-like no milliseconds → ${year}-${month}-${day}T${hours}:${minutes}:${seconds}`);
                return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
            },
            startPageChangeObserver = () => {
                window.addEventListener("popstate", onUrlChange, { passive: true });
                window.addEventListener("hashchange", onUrlChange, { passive: true });

                if (!window.globalExecutedTs) {
                    window.globalExecutedTs = true;
                    var oldPushState = window.history.pushState;
                    window.history.pushState = function (data) {
                        try {
                            oldPushState.apply(this, arguments);
                            document.body.classList.remove(storyNumber);
                            document.querySelectorAll(".cscro-countdown-container,.cscro-scroll-sentinel").forEach(el => el.remove());
                            if(scrollObserver && typeof(scrollObserver) == "object") scrollObserver.disconnect();
                        } catch (e) {
                            console.log(e);
                        }
                    };
                }
            },
            resetBanner = () => {
                document.querySelectorAll(".cscro-countdown-container").forEach(el => el.remove());
                window.sessionStorage.setItem("cro-countdown-finished", "true");
                document.body.classList.remove("cro-countdown-on");
            },
            makeBannerStickyOnScroll = () => {
                const banner = document.querySelector(".cscro-countdown-container");
                if (!banner) return;

                // Create an invisible anchor element right before the banner to observe
                const sentinel = document.createElement("div");
                sentinel.className = "cscro-scroll-sentinel";
                sentinel.style.position = "absolute";
                sentinel.style.height = "0px";
                sentinel.style.width = "100%";
                
                // Insert the sentinel right before the banner in the DOM
                banner.parentNode.insertBefore(sentinel, banner);

                // Watch when the sentinel exits the top of the viewport
                scrollObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        // If the sentinel is NOT intersecting, it means it has scrolled off-screen (above the viewport)
                        if (!entry.isIntersecting) {
                            banner.classList.add("cscro-is-sticky");
                            document.querySelector("vo-header-decoration").classList.add("cscro-is-sticky");

                        } else {
                            banner.classList.remove("cscro-is-sticky");
                            document.querySelector("vo-header-decoration").classList.remove("cscro-is-sticky");
                        }
                    });
                }, {
                    root: null, // default is viewport
                    threshold: 0,
                    rootMargin: "0px" // Triggers exactly when the sentinel crosses the top of the viewport
                });

                scrollObserver.observe(sentinel);
            },
            variant = () => {
                let countdownIsFinished = window.sessionStorage.getItem("cro-countdown-finished") == "true";
                if (countdownIsFinished) return;

                if (!document.querySelectorAll(`.cscro-countdown-container`).length) {
                    const header = document.querySelector("vo-header");
                    if (header) {
                        header.insertAdjacentHTML('beforeend', timerHtml);
                        makeBannerStickyOnScroll();
                    }
                }
                document.body.classList.add("cro-countdown-on");
                let isCountdownOn = window.sessionStorage.getItem("cro-countdown") !== null;
                let targetDate = new Date(isCountdownOn ? window.sessionStorage.getItem("cro-countdown") : calculateEndTime(counterMinutes));
                log(`targetDate = ,${targetDate}`);
                timer(targetDate);
            };

        // Only proceed if subject is found in DOM (jQuery check removed)
        if (subjectRemainingToLoad && sales_cro && optimzly) {
            window.clearInterval($timerA);
            try {
                document.body.classList.add(storyNumber);
                console.log("in " + storyNumber);
                variant();

                //Start observing page change
                startPageChangeObserver();
            }
            catch (error) {
                console.log(`${storyNumber} Error: ${error}`);
                window.sales_cro.fireGA4(experimentId, storyNumber, "error", `Error: ${error}`);
                document.documentElement.classList.add(storyNumber + "-error");
            }
        }
    }, 500);

    setTimeout(function () {
        if ($timerA !== null) {
            clearInterval($timerA);
            if (typeof (error) === 'function') {
                error();
            }
        }
    }, 20000);
}(window, document));
}, "dependencies": []}, {"id": "f3db469a6cea44dda4f0d593fa605aee", "type": "append", "selector": "head", "value": "<style>.CSCRO-2496 .cscro-clock{display: none!important;}\n.CSCRO-2496.cro-countdown-on vo-header{background-color: #000;}\n.CSCRO-2496 .cscro-countdown-container{\n    margin-bottom: 1.5rem;\n}\n\n.CSCRO-2496 .header-decoration{\n    --decoration-gradient: #000!important;\n    --decoration-flare-large-color: #000!important;\n    --decoration-flare-small-color: #000!important;\n}\n\n.CSCRO-2496 .cscro-countdown-container h2{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: .5rem;\n    color: #fff;\n    text-align: center;\n    font-family: var(--mo-font-family);\n    font-size: 1rem;\n    font-weight: 500;\n    line-height: 1.5rem;\n}\n\n.CSCRO-2496 .cscro-clock{\n    display: flex;\n    margin-left: 20px;\n    margin-top: 16px;\n    gap: 24px;\n    align-items: center;\n    justify-content: center;\n}\n\n.CSCRO-2496 .cscro-clock .counter{\n    position: relative;\n    width: 84px;\n}\n\n.CSCRO-2496 .cscro-clock .counter .digits::before{\n    left: -.75rem;\n}\n\n.CSCRO-2496 .cscro-clock .counter .digits::after{\n    right: 2px;\n}\n\n.CSCRO-2496 .cscro-clock .counter .digits::before, \n.CSCRO-2496 .cscro-clock .counter .digits::after{\n    position: absolute;\n    top: 0;\n    content: \"\";\n    z-index: -1;\n    border-radius: 4px;\n    height: 2.40625rem;\n    width: 2rem;\n    height: 48px;\n    width: 40px;\n    background: none;\n}\n\n.CSCRO-2496 .cscro-clock .counter .digits{\n    position: relative;\n    width: 75px;\n    height: 48px;\n    line-height: 48px;\n    letter-spacing: 1.85rem;\n    z-index: 1;\n    color: #000;\n    font-family: \"VMMomentum\", Arial, Helvetica, sans-serif;\n    font-size: 28px;\n    font-weight: 900;\n}\n\n.CSCRO-2496 .cscro-clock .counter .unit{\n    margin-top: 8px;\n    width: 62px;\n    color: #000;\n    text-align: center;\n    font-family: \"VMMomentum\", Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 20px; \n    text-transform: uppercase;\n}\n\n@media screen and (max-width: 990px){\n    .CSCRO-2496 .cscro-clock{\n        width: 270px;\n        gap: 24px;\n        margin-left: auto;\n        margin-right: auto; \n        padding-left: 10px;\n    }\n\n    .CSCRO-2496 .cscro-clock .counter .digits{\n        height: 32px;\n    }\n\n    .CSCRO-2496 .cscro-clock .counter .digits::before, \n    .CSCRO-2496 .cscro-clock .counter .digits::after{\n        height: 32px;\n        width: 28px;\n    }\n\n    .CSCRO-2496 .cscro-clock .counter .unit{\n        font-size: 10px;\n        width: 46px;\n    }\n\n    .CSCRO-2496 .cscro-clock .counter .digits{\n        width: 54px;\n        font-size: 20px;\n        letter-spacing: 1.1em;\n        line-height: 35px;\n    }\n\n    .CSCRO-2496 .cscro-clock .counter .digits::before{\n        left: -8px;\n    }\n}\n@media (max-width:321px){\n    .CSCRO-2496 .cscro-countdown-container h2{font-size: .8rem;}\n}\n\n/****Sticky Timer CSS ****/\n\n/* Base container style */\n.CSCRO-2496 .cscro-countdown-container {\n  width: 100%;\n  transition: all 0.3s ease-in-out;\n}\n\n/* Sticky state activated by JS */\n.CSCRO-2496 .cscro-countdown-container.cscro-is-sticky,\n.CSCRO-2496 vo-header-decoration.cscro-is-sticky {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  /*box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);*/\n  animation: slideDown 0.3s ease-out;\n}\n.CSCRO-2496 vo-header-decoration.cscro-is-sticky {width: 100%;  z-index: 99;}\n.CSCRO-2496 vo-header-decoration.cscro-is-sticky > .header-decoration{\n   --decoration-height: 84px!important;\n    --decoration-gradient: #fff !important;\n    --decoration-flare-large-color: #fff !important;\n    --decoration-flare-small-color: #fff !important;\n    fill: var(--badge-fg, #FFF);\n    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.20));\n}\n\n.CSCRO-2496 .cscro-countdown-container.cscro-is-sticky{margin-top: 1.5rem}\n\n.CSCRO-2496 .cscro-countdown-container.cscro-is-sticky h2{color: #333;}\n\n.CSCRO-2496 .cscro-countdown-container:not(.cscro-is-sticky) svg.sticky-svg{display: none;}\n.CSCRO-2496 .cscro-countdown-container.cscro-is-sticky svg.sticky-svg{display: block;}\n\n.CSCRO-2496 .cscro-countdown-container.cscro-is-sticky svg:not(.sticky-svg){display: none;}\n\n\n\n@keyframes slideDown {\n  from { transform: translateY(-100%); }\n  to { transform: translateY(0); }\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "5478572289163264", "endOfRange": 3334}, {"entityId": "5866313866805248", "endOfRange": 6667}, {"entityId": "6306467635003392", "endOfRange": 10000}], "name": "[A/B][BF]CSCRO-2496 Black Friday checkout timer", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5310808316444672"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6041522242584576"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": [{"name": "cro:shared", "type": "custom_code", "value": function($){((w) => {
    "use strict";

    var window = typeof unsafeWindow !== "undefined" ? unsafeWindow : w;
    var storyName = "CSCRO-2521";
    var experimentId = "__CRO_EXPERIMENT_ID__";
    var prefix = "cscro2521";
    var debug =
        document.cookie.indexOf("vmDEV") !== -1 ||
        /[?&](?:vmqa|crodebug)=true(?:&|$)/.test(window.location.search);
    var TRACK_FLUSH_MS = 500;

    var SELECTORS = {
        placeholder:
            "[data-testid='vertex-search-placeholder'], [data-cy='vertex-search-text-placeholder']",
        portal: "[data-testid='vertex-portal']",
        modal: "[data-testid='vertex-modal']",
        container: "[class*='VertexSearch_container']",
        searchForm: "[class*='VertexSearch_search-form']",
        vertexForm: "[data-testid='vertex-search-form']",
        submitButton: "[data-testid='vertex-search-submit-button']",
        autocomplete: "[data-testid='vertex-search-autocomplete-suggestions']",
        recommendationsGrid: "[data-testid='vertex-search-recommendations-grid']",
        popularProductsGrid: "[data-testid='vertex-search-popular-products-grid']",
        recommendationCta: "[data-cy='horizontal-add-to-basket-cta']",
        productCard: "[data-cy='vertex-search-product-card']",
        // Native listing ATB (portrait + landscape) — not Vertex recommendations
        pageTileCta:
            "[data-cy='add-to-basket-cta'], [data-cy='horizontal-add-to-basket-cta']",
        vertexCard: "[data-testid='vertex-search-product-card']",
        // Hero change address (PostcodeAvailabilityResult)
        heroChange: "[data-testid='success-result'], [data-cy='postcode-result-section']",
        // Top-bar change address (TopMenuSvcClient)
        headerChange:
            "[data-testid='top-menu-svc'] [data-testid='postcode-result'], [data-testid='postcode-result']",
    };

    var utils = {
        waitUntil: function (cond, cb, timeout) {
            var waitMs = typeof timeout === "number" ? timeout : 10000;
            var start = Date.now();
            var check = function () {
                if (Date.now() - start > waitMs) {
                    return;
                }
                var el = typeof cond === "string" ? document.querySelector(cond) : undefined;
                var ok = typeof cond === "function" ? cond() : undefined;
                if (el) {
                    cb(el);
                    return;
                }
                if (ok) {
                    cb();
                    return;
                }
                window.requestAnimationFrame(check);
            };
            window.requestAnimationFrame(check);
        },
        log: function (msg) {
            if (debug) {
                console.log("[CSCRO] " + storyName + " -->", msg);
            }
        },
        checkPageChanges: function (target, cb, opts) {
            var observeOpts = opts || { childList: true, subtree: true };
            var debounce = function (func, delay) {
                var timeoutId;
                return function () {
                    var args = arguments;
                    window.clearTimeout(timeoutId);
                    timeoutId = window.setTimeout(function () {
                        func.apply(null, args);
                    }, delay);
                };
            };
            var observer;
            if (typeof window.registerMO === "function") {
                observer = window.registerMO(
                    storyName,
                    new MutationObserver(
                        debounce(function () {
                            utils.log("Mutation");
                            cb();
                        }, 100)
                    )
                );
            } else {
                observer = new MutationObserver(
                    debounce(function () {
                        utils.log("Mutation");
                        cb();
                    }, 100)
                );
            }
            observer.observe(target, observeOpts);
            return observer;
        },
    };

    var markHidden = function (el) {
        if (!el || el.getAttribute("data-" + prefix + "-hide") === "1") {
            return;
        }
        el.setAttribute("data-" + prefix + "-hide", "1");
    };

    var hideNodes = function (selector) {
        var nodes = document.querySelectorAll(selector);
        var i;
        for (i = 0; i < nodes.length; i += 1) {
            markHidden(nodes[i]);
        }
        return nodes.length;
    };

    // Control-only: hide Vertex Search (v1 leaves native search visible).
    var hideVertexSearch = function () {
        var placeholders = document.querySelectorAll(SELECTORS.placeholder);
        var i;
        for (i = 0; i < placeholders.length; i += 1) {
            var input = placeholders[i];
            var form = input.closest(SELECTORS.searchForm) || input.parentElement;
            var container =
                (form && form.closest(SELECTORS.container)) ||
                (form && form.parentElement) ||
                null;
            if (container) {
                markHidden(container);
            } else if (form) {
                markHidden(form);
            } else {
                markHidden(input);
            }
        }

        hideNodes(SELECTORS.portal);

        var containers = document.querySelectorAll(SELECTORS.container);
        for (i = 0; i < containers.length; i += 1) {
            if (containers[i].querySelector(SELECTORS.placeholder)) {
                markHidden(containers[i]);
            }
        }

        return placeholders.length > 0;
    };

    var HERO_CA_ATTR = "data-" + prefix + "-hero-ca";
    var STRIP_SELECTOR = "[data-testid='top-menu-svc']";
    var LINKS_SELECTOR = "[class*='top-menu-svc_links']";
    var HEADER_POSTCODE_SELECTOR =
        "[data-testid='top-menu-svc'] [data-testid='postcode-result']";
    var POSTCODE_CAPTURE_SELECTOR =
        "[data-cy='postcode-section'], [data-cy='postcode-input'], [class*='postcode-capture_postcodeForm']";
    var CA_RESET_LOCK_MS = 4000;
    var caResetLockUntil = 0;

    var isPostcodeCaptureVisible = function () {
        return Boolean(document.querySelector(POSTCODE_CAPTURE_SELECTOR));
    };

    var isCaResetLocked = function () {
        return Date.now() < caResetLockUntil;
    };

    var lockCaReset = function (ms) {
        var waitMs = typeof ms === "number" ? ms : CA_RESET_LOCK_MS;
        caResetLockUntil = Date.now() + waitMs;
    };

    var hideEmptyHeaderStrips = function () {
        var strips = document.querySelectorAll(STRIP_SELECTOR);
        var i;
        for (i = 0; i < strips.length; i += 1) {
            var strip = strips[i];
            var hasLinks = Boolean(strip.querySelector(LINKS_SELECTOR));
            if (!hasLinks) {
                markHidden(strip);
            }
        }
    };

    /** Hide hero CA proxy pills (e.g. after Change address → postcode form). */
    var hideRelocatedHeroChangeAddress = function () {
        var pills = document.querySelectorAll(
            "[" + HERO_CA_ATTR + '="1"], .cro_hero-change-address'
        );
        var i;
        for (i = 0; i < pills.length; i += 1) {
            markHidden(pills[i]);
        }
        return pills.length;
    };

    var removeHeroChangeAddressProxies = function () {
        var pills = document.querySelectorAll(
            "[" + HERO_CA_ATTR + '="1"], .cro_hero-change-address'
        );
        var i;
        for (i = 0; i < pills.length; i += 1) {
            // Only remove CRO-owned clones — never React's header node.
            if (pills[i].closest(STRIP_SELECTOR)) {
                continue;
            }
            if (pills[i].parentNode) {
                pills[i].parentNode.removeChild(pills[i]);
            }
        }
    };

    var resolveVertexInsertParent = function () {
        var vertexContainer = document.querySelector(SELECTORS.container);
        if (!vertexContainer) {
            var ph = document.querySelector(SELECTORS.placeholder);
            if (ph) {
                var form = ph.closest(SELECTORS.searchForm) || ph.parentElement;
                vertexContainer =
                    (form && form.closest(SELECTORS.container)) ||
                    (form && form.parentElement) ||
                    ph.parentElement;
            }
        }
        return {
            vertexContainer: vertexContainer,
            insertParent: vertexContainer && vertexContainer.parentElement,
        };
    };

    var getExistingHeroCaProxy = function (insertParent) {
        if (!insertParent) {
            return null;
        }
        var existing = insertParent.querySelector("[" + HERO_CA_ATTR + '="1"]');
        if (existing && document.contains(existing) && !existing.closest(STRIP_SELECTOR)) {
            return existing;
        }
        return null;
    };

    var getReactOnClick = function (node) {
        var el = node;
        var key;
        var walkFiber = function (fiber) {
            var depth = 0;
            var props;
            var current = fiber;
            while (current && depth < 10) {
                props = current.memoizedProps || current.pendingProps;
                if (props && typeof props.onClick === "function") {
                    return props.onClick;
                }
                current = current.return;
                depth += 1;
            }
            return null;
        };
        while (el && el !== document.documentElement) {
            for (key in el) {
                if (key.indexOf("__reactFiber$") === 0) {
                    var fromFiber = walkFiber(el[key]);
                    if (fromFiber) {
                        return fromFiber;
                    }
                }
                if (key.indexOf("__reactProps$") === 0 && el[key] && typeof el[key].onClick === "function") {
                    return el[key].onClick;
                }
            }
            el = el.parentElement;
        }
        return null;
    };

    /**
     * Invoke the live header Button onClick (resetAddress + setLoading).
     * HTMLElement.click() on a display:none ancestor is unreliable; React props
     * still run. Fallback click only if no onClick is found.
     */
    var triggerLiveChangeAddress = function () {
        var live = document.querySelector(HEADER_POSTCODE_SELECTOR + " button");
        var onClick;
        if (!live) {
            return false;
        }
        onClick = getReactOnClick(live);
        if (typeof onClick === "function") {
            try {
                onClick({
                    target: live,
                    currentTarget: live,
                    preventDefault: function () {},
                    stopPropagation: function () {},
                    persist: function () {},
                    isDefaultPrevented: function () {
                        return false;
                    },
                    isPropagationStopped: function () {
                        return false;
                    },
                    type: "click",
                    nativeEvent: { isTrusted: true, type: "click" },
                });
                return true;
            } catch (err) {
                utils.log(err);
            }
        }
        try {
            live.click();
            return true;
        } catch (err2) {
            return false;
        }
    };

    var onHeroCaProxyActivate = function (e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        lockCaReset(CA_RESET_LOCK_MS);
        hideRelocatedHeroChangeAddress();
        triggerLiveChangeAddress();
        removeHeroChangeAddressProxies();
        utils.log("Control: Change address proxy → live header onClick");
    };

    /** Native hero PostcodeAvailabilityResult (not header strip / not CRO proxy). */
    var hasNativeHeroChangeAddress = function () {
        var nodes = document.querySelectorAll(SELECTORS.heroChange);
        var i;
        for (i = 0; i < nodes.length; i += 1) {
            if (nodes[i].closest(STRIP_SELECTOR)) {
                continue;
            }
            if (nodes[i].getAttribute(HERO_CA_ATTR) === "1") {
                continue;
            }
            if (nodes[i].classList && nodes[i].classList.contains("cro_hero-change-address")) {
                continue;
            }
            return true;
        }
        return false;
    };

    /**
     * Control: keep header CA in React's tree; when native hero CA is absent,
     * clone a stable hero proxy that invokes the original Button onClick.
     * Reparenting crashed Next on home. Do not tear down/rebuild the proxy on
     * every MutationObserver tick — that swallowed clicks unless the user
     * mashed the link inside one 100ms window.
     */
    var relocateHeaderChangeAddressToHero = function () {
        var proxy;
        var source;
        var isSplit;

        // After Change address, postcode form is BAU — do not show hero CA pill.
        if (isPostcodeCaptureVisible()) {
            caResetLockUntil = 0;
            removeHeroChangeAddressProxies();
            return hideRelocatedHeroChangeAddress();
        }

        if (isCaResetLocked()) {
            hideRelocatedHeroChangeAddress();
            return 0;
        }

        // Native hero CA present — leave it; no proxy.
        if (hasNativeHeroChangeAddress()) {
            removeHeroChangeAddressProxies();
            hideEmptyHeaderStrips();
            return 0;
        }

        var headerPostcodes = document.querySelectorAll(HEADER_POSTCODE_SELECTOR);
        var insert = resolveVertexInsertParent();
        var vertexContainer = insert.vertexContainer;
        var insertParent = insert.insertParent;

        if (!insertParent || !vertexContainer || !headerPostcodes.length) {
            return 0;
        }

        source = headerPostcodes[0];
        proxy = getExistingHeroCaProxy(insertParent);
        if (proxy) {
            hideEmptyHeaderStrips();
            return 1;
        }

        removeHeroChangeAddressProxies();

        isSplit = Boolean(
            document.querySelector(
                "[class*='VertexSearch_search-form'][class*='layout-split'], [class*='layout-split'][class*='VertexSearch_search-form']"
            )
        );

        proxy = source.cloneNode(true);
        proxy.setAttribute(HERO_CA_ATTR, "1");
        proxy.classList.add("cro_hero-change-address");
        if (isSplit) {
            proxy.classList.add("cro_hero-change-address--split");
        }
        proxy.removeAttribute("data-" + prefix + "-hide");
        proxy.addEventListener("click", onHeroCaProxyActivate, true);

        if (vertexContainer.nextSibling) {
            insertParent.insertBefore(proxy, vertexContainer.nextSibling);
        } else {
            insertParent.appendChild(proxy);
        }

        hideEmptyHeaderStrips();
        return 1;
    };

    function getRuntimeExperimentId() {
        var fromApi = window[storyName] && window[storyName].experimentId;
        var id = fromApi || experimentId;
        return id !== undefined && id !== null ? String(id) : "";
    }

    function isUsableVariation(variation) {
        return !!(variation && typeof variation === "object" && Object.keys(variation).length);
    }

    function getVariationInfo() {
        var expId = getRuntimeExperimentId();
        var sales_cro = window.sales_cro;
        if (sales_cro && typeof sales_cro.getActiveVariationObject === "function") {
            try {
                var byString = sales_cro.getActiveVariationObject(expId);
                if (isUsableVariation(byString)) {
                    return byString;
                }
                if (/^\d+$/.test(expId)) {
                    var byNumber = sales_cro.getActiveVariationObject(Number(expId));
                    if (isUsableVariation(byNumber)) {
                        return byNumber;
                    }
                }
            } catch (err) {
                /* ignore */
            }
        }
        try {
            var opti = window.optimizely;
            var state = opti && typeof opti.get === "function" ? opti.get("state") : null;
            var experiments =
                state && typeof state.getExperimentStates === "function"
                    ? state.getExperimentStates({ isActive: true }) || {}
                    : {};
            var key;
            for (key in experiments) {
                if (!Object.prototype.hasOwnProperty.call(experiments, key)) {
                    continue;
                }
                var exp = experiments[key];
                var name = String((exp && (exp.experimentName || exp.name)) || "");
                if (name.indexOf(storyName) === -1) {
                    continue;
                }
                if (isUsableVariation(exp.variation)) {
                    return exp.variation;
                }
            }
        } catch (err2) {
            /* ignore */
        }
        return null;
    }

    function dataLayerHasEvent(eventName, eventValue) {
        var dl = window.dataLayer;
        if (!dl || !dl.length) {
            return false;
        }
        var i;
        var start = Math.max(0, dl.length - 8);
        for (i = dl.length - 1; i >= start; i--) {
            var entry = dl[i];
            if (
                entry &&
                entry.event === "optimizely_event" &&
                entry.optimizely_event_name === eventName &&
                entry.optimizely_event_value === eventValue
            ) {
                return true;
            }
        }
        return false;
    }

    function pushGaEvent(eventName, eventValue, variationInfo) {
        var variant = variationInfo || {};
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "optimizely_event",
            event_name: "optimizely_event",
            optimizely_experiment: getRuntimeExperimentId(),
            optimizely_experiment_name: storyName,
            optimizely_variant: variant.id !== undefined && variant.id !== null ? String(variant.id) : "",
            optimizely_variant_name: variant.name || "Variation #1",
            optimizely_event_name: eventName,
            optimizely_event_value: eventValue,
        });
    }

    var OPTI_EVENT_KEY = {
        "2521_Click Search": "2521_Click_Search",
        "2521_Click Submit Search": "2521_Click_Submit_Search",
        "2521_Click Search recommendation": "2521_Click_Search_recommendation",
        "2521_Click Search_Popular": "2521_Click_Search_Popular",
    };

    function fireTrackingEvent(eventName, eventValue, onFired) {
        var sales_cro = window.sales_cro;
        var expId = getRuntimeExperimentId();
        var variationInfo = getVariationInfo();
        var optiKey = OPTI_EVENT_KEY[eventValue];
        if (sales_cro && typeof sales_cro.fireGA4 === "function") {
            sales_cro.fireGA4(expId, storyName, eventName, eventValue);
        }
        if (!dataLayerHasEvent(eventName, eventValue)) {
            pushGaEvent(eventName, eventValue, variationInfo);
        }
        if (sales_cro && typeof sales_cro.fireOpti === "function" && eventValue) {
            sales_cro.fireOpti(eventValue);
            // 2344: extra keyed call when Optimizely API name ≠ GA label
            if (optiKey && optiKey !== eventValue) {
                sales_cro.fireOpti(optiKey);
            }
        }
        if (typeof onFired === "function") {
            onFired();
        }
        utils.log(
            "GA4 " +
                eventName +
                " / " +
                eventValue +
                (dataLayerHasEvent(eventName, eventValue) ? " (dataLayer)" : " (MISSING dataLayer)")
        );
    }

    function fireErrorTracking(error) {
        fireTrackingEvent("error", "Error: " + error);
    }

    function afterTrackingFlush(cb) {
        window.setTimeout(cb, TRACK_FLUSH_MS);
    }

    function wireTrackingForVariant(variantId) {
        var variant = String(variantId || "").toLowerCase();
        var clickStoragePrefix = storyName + "-click-" + variant;
        function trackEvent(eventName, eventValue, unique, uniqueSuffix) {
            var token = unique ? clickStoragePrefix + "-" + eventName + "-" + eventValue : "";
            if (uniqueSuffix) {
                token += "-" + uniqueSuffix;
            }
            if (unique && token && window.sessionStorage && window.sessionStorage.getItem(token)) {
                return;
            }
            fireTrackingEvent(eventName, eventValue, function () {
                if (!unique || !token || !window.sessionStorage) {
                    return;
                }
                try {
                    window.sessionStorage.setItem(token, "1");
                } catch (err) {
                    /* ignore */
                }
            });
        }
        return { trackEvent: trackEvent };
    }

    var isVertexRecommendationTarget = function (el) {
        if (!el || typeof el.closest !== "function") {
            return false;
        }
        return Boolean(
            el.closest(SELECTORS.recommendationsGrid) ||
                el.closest(SELECTORS.vertexCard) ||
                el.closest(SELECTORS.portal)
        );
    };

    /**
     * Ticket page-of-origin slug: 2521_Click_Search_Broadband (etc).
     * Arena preview hosts map story slug → Home / Broadband / TV / Landline.
     */
    var getSearchOriginPageName = function () {
        var path =
            String((window.location && window.location.pathname) || "/")
                .replace(/\/$/, "")
                .toLowerCase() || "/";
        if (path === "/" || path === "") {
            return "Home";
        }
        if (path.indexOf("/arena/") === 0) {
            if (path.indexOf("broadband") !== -1) {
                return "Broadband";
            }
            if (path.indexOf("landline") !== -1) {
                return "Landline";
            }
            if (path.indexOf("/tv") !== -1 || /(?:^|\/|-)tv(?:\/|-|$)/.test(path)) {
                return "TV";
            }
            if (path.indexOf("home") !== -1) {
                return "Home";
            }
            return "Other";
        }
        if (path === "/tv" || path.indexOf("/tv/") === 0) {
            return "TV";
        }
        if (path === "/landline" || path.indexOf("/landline/") === 0) {
            return "Landline";
        }
        if (path === "/broadband" || path.indexOf("/broadband/") === 0) {
            return "Broadband";
        }
        return "Other";
    };

    /**
     * Control + v1: ATB on a normal product card (not Vertex recommendations).
     * v2 removes listing cards, so it does not call this.
     */
    var wirePageTileTracking = function (variantId) {
        var tracking = wireTrackingForVariant(variantId);
        var ns = "click." + prefix + "-pagetile-" + variantId;
        var $ = window.$;
        var trackPageTile = function (el) {
            if (isVertexRecommendationTarget(el)) {
                return;
            }
            tracking.trackEvent("click", "2521_Click_Page_Tile", true);
        };

        if (typeof $ === "function") {
            $(document)
                .off(ns)
                .on(ns, SELECTORS.pageTileCta, function () {
                    trackPageTile(this);
                });
            return;
        }

        var attr = "data-" + prefix + "-pagetile-" + variantId;
        if (document.documentElement.getAttribute(attr) === "1") {
            return;
        }
        document.documentElement.setAttribute(attr, "1");
        document.addEventListener(
            "click",
            function (e) {
                var t = e.target;
                if (!t || !t.closest) {
                    return;
                }
                var cta = t.closest(SELECTORS.pageTileCta);
                if (cta) {
                    trackPageTile(cta);
                }
            },
            true
        );
    };

    /**
     * v1 + v2: open / submit / recommendation clicks (unique per session).
     * Does not re-fire native ecom_event view_item_list / add_to_cart.
     */
    var wireVertexSearchTracking = function (variantId) {
        var tracking = wireTrackingForVariant(variantId);
        var ns = "click." + prefix + "-" + variantId;
        var $ = window.$;

        var trackOpen = function () {
            tracking.trackEvent("click", "2521_Click Search", true);
            tracking.trackEvent(
                "click",
                "2521_Click_Search_" + getSearchOriginPageName(),
                true
            );
        };

        var trackSubmit = function () {
            tracking.trackEvent("click", "2521_Click Submit Search", true);
        };

        var trackRecommendation = function () {
            tracking.trackEvent("click", "2521_Click Search recommendation", true);
        };

        var trackPopular = function () {
            tracking.trackEvent("click", "2521_Click Search_Popular", true);
        };

        var popularCard =
            SELECTORS.popularProductsGrid +
            " " +
            SELECTORS.vertexCard +
            ", " +
            SELECTORS.popularProductsGrid +
            " " +
            SELECTORS.productCard;

        if (typeof $ === "function") {
            var submitNs = "submit." + prefix + "-" + variantId;
            $(document)
                .off(ns)
                .off(submitNs)
                .on(ns, SELECTORS.placeholder, function () {
                    trackOpen();
                })
                .on(submitNs, SELECTORS.vertexForm, function () {
                    trackSubmit();
                })
                .on(ns, SELECTORS.submitButton, function () {
                    trackSubmit();
                })
                .on(ns, SELECTORS.autocomplete + " button", function () {
                    trackSubmit();
                })
                .on(
                    ns,
                    SELECTORS.recommendationsGrid + " " + SELECTORS.recommendationCta,
                    function () {
                        trackRecommendation();
                    }
                )
                .on(
                    ns,
                    SELECTORS.recommendationsGrid + " " + SELECTORS.productCard,
                    function (e) {
                        if (
                            e.target &&
                            e.target.closest &&
                            e.target.closest(SELECTORS.recommendationCta)
                        ) {
                            return;
                        }
                            trackRecommendation();
                        }
                    )
                    .on(
                        ns,
                        SELECTORS.popularProductsGrid + " " + SELECTORS.recommendationCta,
                        function () {
                            trackPopular();
                        }
                    )
                    .on(ns, popularCard, function (e) {
                        if (
                            e.target &&
                            e.target.closest &&
                            e.target.closest(SELECTORS.recommendationCta)
                        ) {
                            return;
                        }
                        trackPopular();
                    });
                return;
            }

        // Fallback without jQuery (capture so we fire before native hard-nav).
        if (document.documentElement.getAttribute("data-" + prefix + "-track") === "1") {
            return;
        }
        document.documentElement.setAttribute("data-" + prefix + "-track", "1");

        document.addEventListener(
            "click",
            function (e) {
                var t = e.target;
                if (!t || !t.closest) {
                    return;
                }
                if (t.closest(SELECTORS.placeholder)) {
                    trackOpen();
                    return;
                }
                if (t.closest(SELECTORS.submitButton)) {
                    trackSubmit();
                    return;
                }
                if (t.closest(SELECTORS.autocomplete + " button")) {
                    trackSubmit();
                    return;
                }
                if (
                    t.closest(
                        SELECTORS.recommendationsGrid + " " + SELECTORS.recommendationCta
                    ) ||
                    t.closest(SELECTORS.recommendationsGrid + " " + SELECTORS.productCard)
                    ) {
                    trackRecommendation();
                    return;
                }
                if (
                    t.closest(
                        SELECTORS.popularProductsGrid + " " + SELECTORS.recommendationCta
                    ) ||
                    t.closest(SELECTORS.popularProductsGrid + " " + SELECTORS.vertexCard) ||
                    t.closest(SELECTORS.popularProductsGrid + " " + SELECTORS.productCard)
                ) {
                    trackPopular();
                }
            },
            true
        );

        document.addEventListener(
            "submit",
            function (e) {
                var t = e.target;
                if (!t || !t.closest) {
                    return;
                }
                if (t.matches && t.matches(SELECTORS.vertexForm)) {
                    trackSubmit();
                    return;
                }
                if (t.closest && t.closest(SELECTORS.vertexForm)) {
                    trackSubmit();
                }
            },
            true
        );
    };

    /**
     * Boot a variant: add story + variant class, run applyFn, re-apply on SPA mutations.
     * Variant-only DOM (incl. whether to hide Vertex Search) lives in applyFn.
     * @param {string} variantId "control" | "v1"
     * @param {function(): void} applyFn variant-only DOM work
     */
    var bootVariant = function (variantId, applyFn) {
        var applied = false;
        var observerBound = false;

        var run = function () {
            document.documentElement.classList.add(storyName);
            document.documentElement.classList.add(storyName + "-" + variantId);
            if (typeof applyFn === "function") {
                applyFn();
            }
        };

        var bindObserver = function (rootEl) {
            if (observerBound || !rootEl) {
                return;
            }
            observerBound = true;
            utils.checkPageChanges(rootEl, function () {
                try {
                    run();
                } catch (err) {
                    fireErrorTracking(err);
                    utils.log(err);
                    document.documentElement.classList.add(storyName + "-error");
                }
            });
        };

        var init = function () {
            try {
                console.log("Variant START -", storyName, variantId);
                run();
                bindObserver(document.body);
                applied = true;
            } catch (err) {
                console.log(storyName + " Error: " + err);
                fireErrorTracking(err);
                utils.log(err);
                document.documentElement.classList.add(storyName + "-error");
            }
        };

        utils.waitUntil(
            function () {
                return (
                    Boolean(document.body) &&
                    (Boolean(document.querySelector(SELECTORS.placeholder)) ||
                        Boolean(document.querySelector(SELECTORS.heroChange)) ||
                        Boolean(document.querySelector(SELECTORS.headerChange)) ||
                        applied)
                );
            },
            function () {
                if (!applied) {
                    init();
                }
            },
            20000
        );

        utils.waitUntil("body", function (rootEl) {
            if (!applied) {
                init();
            } else {
                bindObserver(rootEl);
            }
        });
    };

    document.documentElement.classList.add(storyName);

    window[storyName] = window[storyName] || {};
    window[storyName].experimentId = experimentId;
    window[storyName].prefix = prefix;
    window[storyName].storyName = storyName;
    window[storyName].SELECTORS = SELECTORS;
    window[storyName].utils = utils;
    window[storyName].fireError = fireErrorTracking;
    window[storyName].fireErrorTracking = fireErrorTracking;
    window[storyName].fireTrackingEvent = fireTrackingEvent;
    window[storyName].wireTrackingForVariant = wireTrackingForVariant;
    window[storyName].afterTrackingFlush = afterTrackingFlush;
    window[storyName].wireVertexSearchTracking = wireVertexSearchTracking;
    window[storyName].wirePageTileTracking = wirePageTileTracking;
    window[storyName].markHidden = markHidden;
    window[storyName].hideNodes = hideNodes;
    window[storyName].hideVertexSearch = hideVertexSearch;
    window[storyName].hasNativeHeroChangeAddress = hasNativeHeroChangeAddress;
    window[storyName].relocateHeaderChangeAddressToHero = relocateHeaderChangeAddressToHero;
    window[storyName].bootVariant = bootVariant;
})(window);
}, "id": "81c4a94ee533493e8fb3bbdd552c0b14", "dependencies": []}, {"name": "cro:shared-css", "selector": "head", "type": "append", "value": "<style>.CSCRO-2521 [data-cscro2521-hide=\"1\"] {\n    display: none !important;\n}</style>", "id": "62fdbc59451046b2a5da67c6f1f4508a", "dependencies": []}], "id": "5532894934859776", "name": "[A/B] CSCRO-2521 - Vertex AI V3", "commitId": "6453127346388992", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "5303924979138560"], "audienceName": "Cookie consent [consentGroup]", "changes": null, "id": "6148638190075904", "integrationSettings": null, "variations": [{"id": "5334501805522944", "name": "Control", "actions": [{"viewId": "6496865984708608", "changes": [{"id": "6D151ABC-1521-4589-8D90-A3FA286E7F30", "type": "custom_code", "value": function($){((w) => {
    "use strict";

    var window = typeof unsafeWindow !== "undefined" ? unsafeWindow : w;
    var storyName = "CSCRO-2521";
    var api = window[storyName];
    if (!api || typeof api.bootVariant !== "function") {
        return;
    }

    // Control: hide Vertex Search. Proxy hero CA only when native hero CA is absent.
    try {
        api.bootVariant("control", function () {
            api.hideVertexSearch();
            var nativeHero =
                typeof api.hasNativeHeroChangeAddress === "function" &&
                api.hasNativeHeroChangeAddress();
            var moved = api.relocateHeaderChangeAddressToHero();
            api.utils.log(
                nativeHero
                    ? "Control: native hero change address kept (no proxy)"
                    : moved
                      ? "Control: hero CA proxy placed (header source kept for React)"
                      : "Control: header change address not in DOM yet"
            );
            if (typeof api.wirePageTileTracking === "function") {
                api.wirePageTileTracking("control");
            }
        });
    } catch (err) {
        if (typeof api.fireErrorTracking === "function") {
            api.fireErrorTracking(err);
        } else if (typeof api.fireError === "function") {
            api.fireError(err);
        }
        console.error("[CSCRO] CSCRO-2521 control", err);
    }
})(window);
}, "dependencies": []}, {"id": "F44BA6A8-CDA4-4C58-889D-71242F700B61", "type": "append", "selector": "head", "value": "<style>/* Empty strip / leftover header CA (before relocate or if remounted briefly) */\n.CSCRO-2521-control [data-testid=\"top-menu-svc\"]:has([class*=\"top-menu-svc_links\"]) [data-testid=\"postcode-result\"],\n.CSCRO-2521-control [data-testid=\"top-menu-svc\"]:not(:has([class*=\"top-menu-svc_links\"])) {\n    display: none !important;\n}\n\n.CSCRO-2521-control [data-testid=\"vertex-portal\"],\n.CSCRO-2521-control [class^=\"VertexSearch_container\"],\n.CSCRO-2521-control [class*=\" VertexSearch_container\"],\n.CSCRO-2521-control [class*=\"VertexSearch_container__\"],\n.CSCRO-2521-control [class^=\"VertexSearch_search-form\"],\n.CSCRO-2521-control [class*=\" VertexSearch_search-form\"],\n.CSCRO-2521-control [class*=\"VertexSearch_search-form__\"] {\n    display: none !important;\n}\n\n/*\n * Hero CA proxy (clone) \u2192 match native PostcodeAvailabilityResult pill.\n * Header source stays in React tree (hidden above); proxy only for display/click.\n */\n.CSCRO-2521-control [data-cscro2521-hero-ca=\"1\"],\n.CSCRO-2521-control .cro_hero-change-address {\n    display: flex !important;\n    gap: 8px;\n    align-items: center;\n    justify-content: center;\n    flex-grow: 0;\n    max-width: 21rem;\n    width: max-content;\n    padding: 8px 5px;\n    margin: auto;\n    background: transparent;\n    border: 2px solid var(--hero-color);\n    border-radius: 32px;\n    box-sizing: border-box;\n}\n\n.CSCRO-2521-control .cro_hero-change-address--split {\n    margin: 0 0 1rem;\n}\n\n/* Pill must yield to postcode capture (Change address); beat display:flex !important */\n.CSCRO-2521-control:has([data-cy=\"postcode-section\"]) [data-cscro2521-hero-ca=\"1\"],\n.CSCRO-2521-control:has([data-cy=\"postcode-section\"]) .cro_hero-change-address,\n.CSCRO-2521-control:has([data-cy=\"postcode-input\"]) [data-cscro2521-hero-ca=\"1\"],\n.CSCRO-2521-control:has([data-cy=\"postcode-input\"]) .cro_hero-change-address,\n.CSCRO-2521-control [data-cscro2521-hero-ca=\"1\"][data-cscro2521-hide=\"1\"],\n.CSCRO-2521-control .cro_hero-change-address[data-cscro2521-hide=\"1\"] {\n    display: none !important;\n}\n\n/* Header uses dark-grey pin; native hero pin follows --hero-color */\n.CSCRO-2521-control [data-cscro2521-hero-ca=\"1\"] svg,\n.CSCRO-2521-control .cro_hero-change-address svg {\n    color: var(--hero-color) !important;\n    fill: currentColor;\n    flex-shrink: 0;\n}\n\n.CSCRO-2521-control [data-cscro2521-hero-ca=\"1\"] [class*=\"postcode-result-text\"],\n.CSCRO-2521-control .cro_hero-change-address [class*=\"postcode-result-text\"] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0;\n    text-align: left;\n    width: 18rem;\n    max-width: 18rem;\n    margin: 0;\n    font-weight: var(--font-weight-regular, 400);\n    white-space: normal;\n}\n\n/* Force \"Change address\" onto its own line; keep postcode with availability copy */\n.CSCRO-2521-control [data-cscro2521-hero-ca=\"1\"] [class*=\"postcode-result-text\"] > span,\n.CSCRO-2521-control .cro_hero-change-address [class*=\"postcode-result-text\"] > span {\n    display: block;\n    text-underline-offset: 3px;\n}\n\n.CSCRO-2521-control [data-cscro2521-hero-ca=\"1\"] button,\n.CSCRO-2521-control .cro_hero-change-address button,\n.CSCRO-2521-control [data-cscro2521-hero-ca=\"1\"] .button-link,\n.CSCRO-2521-control .cro_hero-change-address .button-link {\n    color: var(--hero-color) !important;\n    text-decoration: underline;\n    text-underline-offset: 3px;\n    display: inline;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    background: transparent;\n    font: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n    --color-custom-link-fg: var(--hero-color);\n}\n\n.CSCRO-2521-control [data-cscro2521-hero-ca=\"1\"] button:hover,\n.CSCRO-2521-control .cro_hero-change-address button:hover {\n    text-decoration: none;\n}</style>", "dependencies": []}]}]}, {"id": "4618101260550144", "name": "Variation #1", "actions": [{"viewId": "6496865984708608", "changes": [{"id": "6F98E308-F086-4962-8756-E88D6DACF48D", "type": "custom_code", "value": function($){((w) => {
    "use strict";

    var window = typeof unsafeWindow !== "undefined" ? unsafeWindow : w;
    var storyName = "CSCRO-2521";
    var api = window[storyName];
    if (!api || typeof api.bootVariant !== "function") {
        return;
    }

    // Results box stays hidden until the loading grid or recommended product cards are in the modal
    try {
        api.bootVariant("v1", function () {
            var hidden = api.hideNodes(api.SELECTORS.heroChange);
            api.utils.log(
                hidden
                    ? "v1: defensive hide of legacy hero change address (header CA kept)"
                    : "v1: search visible; header change address kept"
            );
            if (typeof api.wirePageTileTracking === "function") {
                api.wirePageTileTracking("v1");
            }
            if (typeof api.wireVertexSearchTracking === "function") {
                api.wireVertexSearchTracking("v1");
            }
        });
    } catch (err) {
        if (typeof api.fireErrorTracking === "function") {
            api.fireErrorTracking(err);
        } else if (typeof api.fireError === "function") {
            api.fireError(err);
        }
        console.error("[CSCRO] CSCRO-2521 v1", err);
    }
})(window);
}, "dependencies": []}, {"id": "4656E8FD-A238-41BD-958A-A6E117603459", "type": "append", "selector": "head", "value": "<style>.CSCRO-2521-v1 [data-testid=\"success-result\"],\n.CSCRO-2521-v1 [data-cy=\"postcode-result-section\"],\n.CSCRO-2521-v1 [data-testid=\"vertex-search-no-results-grid\"] [data-testid=\"vertex-search-popular-products-grid\"] {\n    display: none !important;\n}\n\n/* Results box only. Search form, portal, and backdrop stay visible. */\n.CSCRO-2521-v1 [data-testid=\"vertex-modal\"] {\n    display: none !important;\n}\n\n.CSCRO-2521-v1 [data-testid=\"vertex-modal\"]:has([data-testid=\"vertex-search-loading-grid\"]):not(:has([data-testid=\"vertex-search-autocomplete-suggestions\"])):not(:has([data-testid=\"vertex-search-popular-products-grid\"])),\n.CSCRO-2521-v1 [data-testid=\"vertex-modal\"]:has([data-testid=\"vertex-search-no-results-grid\"]):not(:has([data-testid=\"vertex-search-autocomplete-suggestions\"])),\n.CSCRO-2521-v1 [data-testid=\"vertex-modal\"]:has([data-testid=\"vertex-search-recommendations-grid\"] [data-testid=\"vertex-search-product-card\"]):not(:has([data-testid=\"vertex-search-autocomplete-suggestions\"])):not(:has([data-testid=\"vertex-search-popular-products-grid\"])) {\n    display: flex !important;\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "5334501805522944", "endOfRange": 5000}, {"entityId": "4618101260550144", "endOfRange": 10000}], "name": "[A/B] CSCRO-2521 - Vertex AI V3", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5532894934859776"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6496865984708608"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5658843594620928", "name": "[no-track][100%] CSCRO-1859 Switch Breadcrumb - nextjs", "commitId": "4980003459301376", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4909922362589184", "integrationSettings": null, "variations": [{"id": "6595408860807168", "name": "Original", "actions": []}, {"id": "5095893641199616", "name": "Variation #1", "actions": [{"viewId": "5327977299312640", "changes": [{"id": "4c734508ca58414c8b13f0e6796e60f4", "type": "custom_code", "value": function($){((w) => {
    "use strict";

    const window = typeof unsafeWindow !== "undefined" ? unsafeWindow : w;
    const storyNumber = "CSCRO-1859";
    const experimentId = "4909922362589184";
    const sales_cro = window.sales_cro;
    const prefix = "cscro";
    const debug = document.cookie.includes("vmDEV");

    const log = (msg, expTag = storyNumber) => {
        debug && console.log(`[CSCRO] ${storyNumber} -->`, msg);
    }

    const utils = window["optimizely"].get("utils");

    const updateBreadcrumb = () => {
        utils
            .waitForElement("li[data-cy=breadcrumbs-list-item-end] p")
            .then(breadcrumb => {
                log(breadcrumb);

                if(breadcrumb.innerText !== 'Switch to us'){
                    let updateCbo = setInterval(()=>{
                        breadcrumb.innerText = 'Switch to us';
                    },10);

                    setTimeout(()=>{
                        clearInterval(updateCbo)
                    },2000)
                    
                }
            })
    }
    const initVariation = () => {
        try {
            document.documentElement.classList.add(storyNumber);

            log('1859 Variant running');
            updateBreadcrumb();
        } catch(err) {
            sales_cro.fireGA4(experimentId,storyNumber,"error",`Error: ${err}`);
            log(err, storyNumber)
        }
    }
    initVariation();
})(window)
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "5095893641199616", "endOfRange": 10000}], "name": "[no-track][100%] CSCRO-1859 Switch Breadcrumb - nextjs", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5658843594620928"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5327977299312640"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5673619638976512", "name": "[no-track][100%]CSCRO-2505 VM DMCCA Basket Fix", "commitId": "6602028359614464", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "6599250623070208"], "audienceName": "Existing O2 user with Volt product (No SIM)", "changes": null, "id": "5045721626312704", "integrationSettings": null, "variations": [{"id": "5218934184476672", "name": "Original", "actions": [{"viewId": "4777718642900992", "changes": []}]}, {"id": "5264122340704256", "name": "Variation #1", "actions": [{"viewId": "4777718642900992", "changes": [{"id": "23A902D2-C8A2-45DE-86E2-62B0068BF3D6", "type": "custom_code", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subjectSelectorArray = ["body"],
            subjectRemainingToLoad = subjectSelectorArray.filter(subject=>{return document.querySelectorAll(subject).length===0}).length==0,
            sales_cro = window.sales_cro, 
            optimzly = window.optimizely,
            debug = true;

            const experimentId = "5045721626312704", storyNumber = "CSCRO-2505",
            log = (msg) => {                
                if(debug) console.log( msg);
            };
            
        // Only proceed if subject is found in DOM
        if( subjectRemainingToLoad && sales_cro && typeof $ == "function" && optimzly) {
            window.clearInterval($timerA);
            try{
                document.body.classList.add(storyNumber);
                console.log("in "+storyNumber);
            }
            catch(error){
                console.log(`${storyNumber} Error: ${error}`);
                window.sales_cro.fireGA4(experimentId,storyNumber,"error",`Error: ${error}`);
                document.documentElement.classList.add(storyNumber+" - error");
            }       
        }       
    }, 500);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);
}(window, document));
}, "dependencies": []}, {"id": "3A68DD3C-90B4-4A02-960A-03A8685A992C", "type": "append", "selector": "head", "value": "<style>.CSCRO-2505 a[data-cy=aboutYourO2Contract],\n.CSCRO-2505 a[data-cy=cancellationLinkO2]{\n    display: none!important;\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "5264122340704256", "endOfRange": 10000}], "name": "[no-track][100%]CSCRO-2505 VM DMCCA Basket Fix", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5673619638976512"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["4777718642900992"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5747584478740480", "name": "[A/B] CSCRO-2477 - BF overlay vs toaster vs animation", "commitId": "5987610806452224", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "5303924979138560"], "audienceName": "Cookie consent [consentGroup]", "changes": null, "id": "6687134780751872", "integrationSettings": null, "variations": [{"id": "4721826566242304", "name": "Original", "actions": [{"viewId": "5516809309257728", "changes": [{"id": "D87FEEF0-53AA-4D14-831B-8E7D0040F1C6", "type": "custom_code", "value": function($){(function (window, document) {
    'use strict';
    const storyName = 'CSCRO-2477';
    const experimentId = '6687134780751872';
    const isToaster = false;
    // Timer rule: true shows the countdown; false hides it.
    const config = Object.assign({
        timer: false,
        deadline: '2026-12-05T23:59:00+00:00',
        imageUrl: 'https://storyblok.cdn.vmo2digital.co.uk/f/253875/541x187/4dce1cd0c7/2477-walrus-modal.png',
    }, window.cro2477Config);
    const deadline = Date.parse(config.deadline);
    let attempts = 0;
    const ready = window.setInterval(function () {
        if (++attempts >= 40) window.clearInterval(ready);
        if (!document.querySelector("div[data-cy='hero-banner']") || !window.sales_cro) return;
        window.clearInterval(ready);
        if (document.getElementById('cro-bf-dialog')) return;
        document.documentElement.classList.add(storyName);
        initialise();
    }, 500);
    const blackBannerSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="32"  viewBox="0 0 64 32" fill="none">
                <path d="M4.00005 0.799805H0.800049V31.1998H63.2001V0.799805H60" stroke-width="1.6" stroke="white"/>
                </svg>`

    function initialise() {
        const url = 'https://www.virginmedia.com/broadband/black-friday-deals';
        const track = label => window.sales_cro.fireGA4(experimentId, storyName, 'click', label);
        const inPageBanner = document.createElement('aside');
        inPageBanner.className = 'cro_bf_slimBanner';
        inPageBanner.setAttribute('aria-label', 'Black Friday offers');
        inPageBanner.innerHTML = `
            <span class="cro_bf_slimBanner-icon" aria-hidden="true">${blackBannerSvg}<span>Black<br>Friday</span></span>
            <div class="cro_bf_slimBanner-copy"><span>Treat yourself this Black Friday and bag yourself an offer</span><a href="${url}" class="cro_bf-link">Explore offers</a></div>
            <div class="cro_bf_countdown" role="timer" aria-live="off" hidden></div>`;
        document.querySelector("div[data-cy='hero-banner']").after(inPageBanner);
        inPageBanner.querySelector('a').addEventListener('click', () => track('Click skinny banner'));
        const backdrop = document.createElement('div');
        backdrop.className = 'cro-backdrop';
        const dialog = document.createElement('section');
        dialog.id = 'cro-bf-dialog';
        dialog.className = 'cro_bf_modal' + (isToaster ? ' cro_bf_toaster' : '');
        dialog.setAttribute('role', 'dialog');
        dialog.setAttribute('aria-modal', 'true');
        dialog.setAttribute('aria-labelledby', 'cro-bf-title');
        dialog.hidden = true;
        dialog.innerHTML = `
            <button type="button" class="cro_icon_close" aria-label="${isToaster ? 'Collapse Black Friday offers' : 'Close Black Friday offers'}">${isToaster ? '⌄' : '×'}</button>
            <div class="cro_bf_modal-body">
                <h2 id="cro-bf-title">Our lowest ever prices on selected bundles</h2>
                <p class="cro_bf_modal-subtitle">Go big this Black Friday and bag yourself an offer</p>
                <div class="cro_bf_countdown" role="timer" aria-live="off" hidden></div>
                <div class="cro_bf_modal_cta-wrappper">
                    <a href="${url}" class="cro_bf-cta">Show me the offers</a>
                    <button type="button" class="cro_bf-close">Remind me later</button>
                </div>
            </div>`;
        const artwork = document.createElement('img');
        artwork.src = config.imageUrl;
        artwork.alt = '';
        artwork.className = 'cro_bf_artwork';
        dialog.append(artwork);
        const banner = document.createElement('aside');
        banner.className = 'cro_bf_collapsed';
        banner.hidden = true;
        banner.setAttribute('aria-label', 'Black Friday offers');
        banner.innerHTML = `<div class="cro_bf_collapsed-copy"><span>Turn your next Black Friday into your best one</span><a href="${url}" class="cro_bf-link">Explore Black Friday deals</a></div><button type="button" class="cro_bf_expand" aria-label="Expand Black Friday offers" aria-controls="cro-bf-dialog" aria-expanded="false">⌃</button>`;
        const bannerArtwork = artwork.cloneNode();
        banner.append(bannerArtwork);
        document.body.append(backdrop, dialog);
        if (isToaster) document.body.append(banner);

        let previousFocus;
        let inertElements = [];
        let previousOverflow;
        let isOpen = false;
        function open() {
            if (isOpen) return;
            isOpen = true;
            previousFocus = document.activeElement;
            banner.hidden = true;
            dialog.hidden = false;
            backdrop.classList.add('visible');
            previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            inertElements = Array.from(document.body.children)
                .filter(el => el !== dialog && el !== backdrop && el !== banner && !el.inert);
            inertElements.forEach(el => { el.inert = true; });
            banner.querySelector('button').setAttribute('aria-expanded', 'true');
            dialog.querySelector('button').focus();
            updateTimer();
        }
        function close(label) {
            if (!isOpen) return;
            track(label);
            isOpen = false;
            dialog.hidden = true;
            backdrop.classList.remove('visible');
            document.body.style.overflow = previousOverflow;
            inertElements.forEach(el => { el.inert = false; });
            inertElements = [];
            if (isToaster) {
                banner.hidden = false;
                banner.querySelector('button').setAttribute('aria-expanded', 'false');
                positionBanner();
                banner.querySelector('button').focus();
            } else if (previousFocus && previousFocus.isConnected) previousFocus.focus();
        }
        dialog.querySelector('.cro_icon_close').addEventListener('click', () => close(isToaster ? 'Click collapse' : 'Click X'));
        dialog.querySelector('.cro_bf-close').addEventListener('click', () => close('Click Remind me later'));
        dialog.querySelector('.cro_bf-cta').addEventListener('click', () => track('Click Show me the offers'));
        banner.querySelector('button').addEventListener('click', () => { track('Click expand'); open(); });
        banner.querySelector('a').addEventListener('click', () => track('Click collapsed banner'));
        backdrop.addEventListener('click', () => close(isToaster ? 'Click collapse backdrop' : 'Click backdrop'));
        dialog.addEventListener('keydown', event => {
            if (event.key === 'Escape') { event.preventDefault(); close('Press Escape'); }
            if (event.key !== 'Tab') return;
            const controls = Array.from(dialog.querySelectorAll('button, a[href]'));
            const first = controls[0], last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        });
        const timers = [dialog.querySelector('.cro_bf_countdown'), inPageBanner.querySelector('.cro_bf_countdown')];
        let lastValue = '';
        function updateTimer() {
            const hidden = config.timer !== true || !Number.isFinite(deadline);
            timers.forEach(timer => { timer.hidden = hidden; });
            if (hidden) return;
            const total = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
            const values = [Math.floor(total / 86400), Math.floor(total / 3600) % 24, Math.floor(total / 60) % 60, total % 60];
            const value = values.join(':');
            if (lastValue === value) return;
            lastValue = value;
            const labels = ['Days', 'Hours', 'Minutes', 'Seconds'];
            timers.forEach(timer => {
                timer.setAttribute('aria-label', values.map((n, i) => `${n} ${labels[i]}`).join(', '));
                timer.innerHTML = values.map((n, i) => `<span class="cro_bf_time-unit"><span class="cro_bf_digits">${String(n).padStart(2, '0').split('').map(digit => `<span>${digit}</span>`).join('')}</span><span class="cro_bf_time-label">${labels[i]}</span></span>`).join('<span class="cro_bf_separator" aria-hidden="true">:</span>');
            });
        }
        function positionBanner() {
            if (banner.hidden) return;
            const footer = document.querySelector('footer, [role="contentinfo"]');
            const offset = footer ? Math.max(0, window.innerHeight - footer.getBoundingClientRect().top) : 0;
            banner.style.bottom = `${offset}px`;
        }
        if (isToaster) {
            window.addEventListener('scroll', positionBanner, { passive: true });
            window.addEventListener('resize', positionBanner);
            open();
        } else {
            // Retain the original control's once-per-session, delayed presentation.
            let seen = false;
            try { seen = window.sessionStorage.getItem('cro_2477-banner-seen') === 'true'; } catch (_) { }
            if (!seen) {
                window.setTimeout(() => {
                    open();
                    try { window.sessionStorage.setItem('cro_2477-banner-seen', 'true'); } catch (_) { }
                }, 3000);
            }
        }
        updateTimer();
        window.setInterval(updateTimer, 1000);
    }
})(window, document);
}, "dependencies": []}, {"id": "77770AE8-C83C-4647-902A-D593EE05121A", "type": "append", "selector": "head", "value": "<style>.CSCRO-2477 .cro_bf_modal,\n.CSCRO-2477 .cro_bf_collapsed {\n  box-sizing: border-box;\n  background: #000;\n  color: #fff;\n  font-family: var(--mo-font-family, Arial, sans-serif);\n  z-index: 2147483647;\n}\n\n.CSCRO-2477 .cro_bf_modal[hidden],\n.CSCRO-2477 .cro_bf_collapsed[hidden],\n.CSCRO-2477 .cro_bf_countdown[hidden] {\n  display: none !important;\n}\n\n.CSCRO-2477 .cro_bf_modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 510px;\n  max-width: calc(100vw - 32px);\n  max-height: calc(100dvh - 40px);\n  overflow: auto;\n  border-radius: 8px;\n  text-align: center;\n}\n\n.CSCRO-2477 .cro_bf_modal:not(.cro_bf_toaster) {\n  border: 1px solid #ffffff;\n}\n\n.CSCRO-2477 .cro_bf_modal-body {\n  position: relative;\n  z-index: 1;\n  padding: 48px 24px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.CSCRO-2477 .cro_bf_modal h2 {\n  margin: 0;\n  max-width: 1020px;\n  font-size: 36px;\n  font-weight: 700;\n  line-height: 1.1;\n  color: #fff;\n}\n\n.CSCRO-2477 .cro_bf_modal-subtitle {\n  margin: 0;\n  font-size: 20px;\n  line-height: 1.4;\n}\n\n.CSCRO-2477 .cro-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgb(0 0 0 / 65%);\n  visibility: hidden;\n  z-index: 2147483646;\n}\n\n.CSCRO-2477 .cro-backdrop.visible {\n  visibility: visible;\n}\n\n.CSCRO-2477 .cro_icon_close,\n.CSCRO-2477 .cro_bf_expand {\n  position: absolute;\n  top: 4px;\n  right: 8px;\n  width: 44px;\n  height: 44px;\n  border: 0;\n  border-radius: 50%;\n  background: #000;\n  color: #fff;\n  font-size: 28px;\n  line-height: 1;\n  cursor: pointer;\n  z-index: 2;\n}\n\n.CSCRO-2477 .cro_bf_modal_cta-wrappper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n\n.CSCRO-2477 .cro_bf-cta {\n  box-sizing: border-box;\n  background: #ed0000;\n  border: 2px solid #ed0000;\n  min-width: 180px;\n  min-height: 44px;\n  padding: 10px 24px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  border-radius: 32px;\n  text-decoration: none;\n}\n\n.CSCRO-2477 .cro_bf-cta:hover {\n  background: #bb0a00;\n  border-color: #bb0a00;\n}\n\n.CSCRO-2477 .cro_bf-close {\n  background: transparent;\n  border: 0;\n  min-height: 44px;\n  padding: 8px 16px;\n  color: #fff;\n  font: inherit;\n  font-size: 16px;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.CSCRO-2477 .cro_bf_modal :is(button, a):focus-visible,\n.CSCRO-2477 .cro_bf_collapsed :is(button, a):focus-visible {\n  outline: 3px solid #fff;\n  outline-offset: 3px;\n  box-shadow: 0 0 0 6px #6200a0;\n}\n\n.CSCRO-2477 .cro_bf_artwork {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.CSCRO-2477 .cro_bf_toaster {\n  top: 40%;\n  bottom: 0;\n  left: 0;\n  transform: none;\n  width: 100%;\n  max-width: none;\n  border-radius: 16px 16px 0 0;\n  border: 1px solid #ffffff;\n  border-bottom: 0;\n  min-height: 0;\n  max-height: none;\n}\n\n.CSCRO-2477 .cro_bf_toaster .cro_icon_close {\n  top: 0;\n  left: 50%;\n  right: auto;\n  transform: translate(-50%, -50%);\n}\n\n/* Keep the collapse control within the scrollable panel's visible area. */\n.CSCRO-2477 .cro_bf_toaster {\n  overflow: visible;\n}\n\n.CSCRO-2477 .cro_bf_toaster .cro_bf_modal-body {\n  height: 100%;\n  max-height: 100%;\n  box-sizing: border-box;\n  overflow: auto;\n  padding: 56px 24px 24px;\n}\n\n.CSCRO-2477 .cro_bf_toaster h2 {\n  font-size: 60px;\n}\n\n.CSCRO-2477 .cro_bf_toaster>.cro_bf_artwork {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: min(50%, 820px);\n  max-height: 65%;\n  object-fit: contain;\n  object-position: bottom left;\n  pointer-events: none;\n}\n\n.CSCRO-2477 .cro_bf_countdown {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 5px;\n}\n\n.CSCRO-2477 .cro_bf_time-unit {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n\n.CSCRO-2477 .cro_bf_digits {\n  display: flex;\n  gap: 3px;\n}\n\n.CSCRO-2477 .cro_bf_digits>span {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 48px;\n  border-radius: 3px;\n  background: #fff;\n  color: #ed0000;\n  font-size: 32px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n\n.CSCRO-2477 .cro_bf_separator {\n  line-height: 34px;\n  font-size: 22px;\n}\n\n.CSCRO-2477 .cro_bf_time-label {\n  font-size: 14px;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\n.CSCRO-2477 .cro_bf_collapsed {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  min-height: 76px;\n  border-radius: 12px 12px 0 0;\n  padding: 16px max(24px, calc((100vw - 1120px) / 2));\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  background: linear-gradient(152deg, #000 11.39%, #930000 267.3%);\n}\n\n.CSCRO-2477 .cro_bf_collapsed-copy {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 16px;\n}\n\n.CSCRO-2477 .cro_bf-link {\n  color: #fff;\n  text-decoration: underline;\n}\n\n.CSCRO-2477 .cro_bf_expand {\n  top: -22px;\n  left: 50%;\n  right: auto;\n  transform: translateX(-50%);\n}\n\n.CSCRO-2477 .cro_bf_collapsed .cro_bf_artwork {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: auto;\n  height: 199px;\n  object-fit: contain;\n}\n\n.CSCRO-2477 .footer {\n  margin-top: 0;\n}\n\n.CSCRO-2477 .cro_bf_toaster .cro_icon_close,\n.CSCRO-2477 .cro_bf_collapsed .cro_bf_expand {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n\n.CSCRO-2477 .cro_bf_toaster .cro_icon_close svg,\n.CSCRO-2477 .cro_bf_collapsed .cro_bf_expand svg {\n  display: block;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n\n.CSCRO-2477 .cro_bf_footer-slot {\n  position: relative;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n@media (max-width: 36rem) {\n  .CSCRO-2477 .cro_bf_modal {\n    width: calc(100% - 1rem);\n  }\n\n  .CSCRO-2477 .cro_bf_modal-body {\n    padding: 48px 16px 16px;\n    gap: 16px;\n  }\n\n  .CSCRO-2477 .cro_bf_modal h2 {\n    font-size: 24px;\n  }\n\n  .CSCRO-2477 .cro_bf_modal-subtitle {\n    font-size: 16px;\n  }\n\n  .CSCRO-2477 .cro_bf_modal_cta-wrappper {\n    width: 100%;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster {\n    width: 100%;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_modal-body {\n    padding: 40px 16px 140px;\n  }\n\n  .CSCRO-2477 .cro_bf_digits>span {\n    width: 26px;\n    height: 32px;\n    font-size: 26px;\n  }\n\n  .CSCRO-2477 .cro_bf_collapsed {\n    padding: 24px 16px 12px;\n  }\n\n  .CSCRO-2477 .cro_bf_collapsed-copy-extra {\n    display: none;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_modal-body {\n    padding: 36px 20px 110px;\n    gap: 16px;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster h2 {\n    font-size: 22px;\n    line-height: 1.15;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_modal-subtitle {\n    font-size: 14px;\n    line-height: 1.4;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_digits>span {\n    width: 22px;\n    height: 28px;\n    font-size: 22px;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_separator {\n    line-height: 28px;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_time-label {\n    font-size: 12px;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster>.cro_bf_artwork {\n    width: 100%;\n    height: auto;\n    max-height: none;\n    object-fit: contain;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster>img.cro_bf_artwork {\n    left: -30%;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster>video.cro_bf_artwork {\n    left: 0%;\n  }\n\n  .CSCRO-2477 .cro_bf_collapsed .cro_bf_artwork {\n    height: auto;\n    width: 55%;\n    object-fit: contain;\n  }\n}\n\n/* V2 MP4 artwork spans the panel; v1 keeps its image sizing. */\n.CSCRO-2477 .cro_bf_toaster.cro_bf_video>.cro_bf_artwork {\n  width: 100%;\n  height: auto;\n  max-height: 100%;\n  object-fit: contain;\n  object-position: bottom left;\n}\n\n/* Control's in-page Black Friday banner. */\n.CSCRO-2477 .cro_bf_slimBanner {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  width: calc(100% - 32px);\n  max-width: 1020px;\n  margin: 24px auto;\n  padding: 16px 24px;\n  border-radius: 4px;\n  background: #000;\n  color: #fff;\n  font-family: var(--mo-font-family, Arial, sans-serif);\n}\n\n.CSCRO-2477 .cro_bf_slimBanner-icon {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 40px;\n  flex-shrink: 0;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner-icon svg {\n  position: absolute;\n  inset: auto 0 0;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner-icon>span {\n  z-index: 1;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner-copy {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 14px;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner-copy>span {\n  font-weight: 700;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner .cro_bf_countdown {\n  margin-left: auto;\n  flex-shrink: 0;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner .cro_bf_digits>span {\n  width: 20px;\n  height: 28px;\n  font-size: 22px;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner .cro_bf_separator {\n  line-height: 28px;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner .cro_bf_time-label {\n  font-size: 10px;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner a:focus-visible {\n  outline: 3px solid #fff;\n  outline-offset: 3px;\n}\n\n@media (max-width: 36rem) {\n  .CSCRO-2477 .cro_bf_slimBanner {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n    padding: 16px;\n  }\n\n  .CSCRO-2477 .cro_bf_slimBanner-icon {\n    display: none;\n  }\n\n  .CSCRO-2477 .cro_bf_slimBanner .cro_bf_countdown {\n    order: -1;\n    margin: 0;\n  }\n}\n.CSCRO-2477 .cro_bf_modal .cro_icon_close:focus-visible,\n.CSCRO-2477 .cro_bf_collapsed .cro_bf_expand:focus-visible {\n  outline: none;\n  box-shadow: none;\n}\n\n.CSCRO-2477 .cro_bf_toaster .cro_icon_close::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  box-sizing: border-box;\n  border: 1px solid #ffffff;\n  border-radius: 50%;\n  clip-path: inset(0 0 50% 0);\n  pointer-events: none;\n}</style>", "dependencies": []}]}]}, {"id": "5931027229573120", "name": "Variation #1", "actions": [{"viewId": "5516809309257728", "changes": [{"id": "6C186029-B84E-4033-90CF-632D98F1A155", "type": "append", "selector": "head", "value": "<style>.CSCRO-2477 .cro_bf_modal,\n.CSCRO-2477 .cro_bf_collapsed {\n  box-sizing: border-box;\n  background: #000;\n  color: #fff;\n  font-family: var(--mo-font-family, Arial, sans-serif);\n  z-index: 2147483647;\n}\n\n.CSCRO-2477 .cro_bf_modal[hidden],\n.CSCRO-2477 .cro_bf_collapsed[hidden],\n.CSCRO-2477 .cro_bf_countdown[hidden] {\n  display: none !important;\n}\n\n.CSCRO-2477 .cro_bf_modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 510px;\n  max-width: calc(100vw - 32px);\n  max-height: calc(100dvh - 40px);\n  overflow: auto;\n  border-radius: 8px;\n  text-align: center;\n}\n\n.CSCRO-2477 .cro_bf_modal:not(.cro_bf_toaster) {\n  border: 1px solid #ffffff;\n}\n\n.CSCRO-2477 .cro_bf_modal-body {\n  position: relative;\n  z-index: 1;\n  padding: 48px 24px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.CSCRO-2477 .cro_bf_modal h2 {\n  margin: 0;\n  max-width: 1020px;\n  font-size: 36px;\n  font-weight: 700;\n  line-height: 1.1;\n  color: #fff;\n}\n\n.CSCRO-2477 .cro_bf_modal-subtitle {\n  margin: 0;\n  font-size: 20px;\n  line-height: 1.4;\n}\n\n.CSCRO-2477 .cro-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgb(0 0 0 / 65%);\n  visibility: hidden;\n  z-index: 2147483646;\n}\n\n.CSCRO-2477 .cro-backdrop.visible {\n  visibility: visible;\n}\n\n.CSCRO-2477 .cro_icon_close,\n.CSCRO-2477 .cro_bf_expand {\n  position: absolute;\n  top: 4px;\n  right: 8px;\n  width: 44px;\n  height: 44px;\n  border: 0;\n  border-radius: 50%;\n  background: #000;\n  color: #fff;\n  font-size: 28px;\n  line-height: 1;\n  cursor: pointer;\n  z-index: 2;\n}\n\n.CSCRO-2477 .cro_bf_modal_cta-wrappper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n\n.CSCRO-2477 .cro_bf-cta {\n  box-sizing: border-box;\n  background: #ed0000;\n  border: 2px solid #ed0000;\n  min-width: 180px;\n  min-height: 44px;\n  padding: 10px 24px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  border-radius: 32px;\n  text-decoration: none;\n}\n\n.CSCRO-2477 .cro_bf-cta:hover {\n  background: #bb0a00;\n  border-color: #bb0a00;\n}\n\n.CSCRO-2477 .cro_bf-close {\n  background: transparent;\n  border: 0;\n  min-height: 44px;\n  padding: 8px 16px;\n  color: #fff;\n  font: inherit;\n  font-size: 16px;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.CSCRO-2477 .cro_bf_modal :is(button, a):focus-visible,\n.CSCRO-2477 .cro_bf_collapsed :is(button, a):focus-visible {\n  outline: 3px solid #fff;\n  outline-offset: 3px;\n  box-shadow: 0 0 0 6px #6200a0;\n}\n\n.CSCRO-2477 .cro_bf_artwork {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.CSCRO-2477 .cro_bf_toaster {\n  top: 40%;\n  bottom: 0;\n  left: 0;\n  transform: none;\n  width: 100%;\n  max-width: none;\n  border-radius: 16px 16px 0 0;\n  border: 1px solid #ffffff;\n  border-bottom: 0;\n  min-height: 0;\n  max-height: none;\n}\n\n.CSCRO-2477 .cro_bf_toaster .cro_icon_close {\n  top: 0;\n  left: 50%;\n  right: auto;\n  transform: translate(-50%, -50%);\n}\n\n/* Keep the collapse control within the scrollable panel's visible area. */\n.CSCRO-2477 .cro_bf_toaster {\n  overflow: visible;\n}\n\n.CSCRO-2477 .cro_bf_toaster .cro_bf_modal-body {\n  height: 100%;\n  max-height: 100%;\n  box-sizing: border-box;\n  overflow: auto;\n  padding: 56px 24px 24px;\n}\n\n.CSCRO-2477 .cro_bf_toaster h2 {\n  font-size: 60px;\n}\n\n.CSCRO-2477 .cro_bf_toaster>.cro_bf_artwork {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  max-height: 65%;\n  object-fit: contain;\n  object-position: bottom left;\n  pointer-events: none;\n}\n\n.CSCRO-2477 .cro_bf_countdown {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 5px;\n}\n\n.CSCRO-2477 .cro_bf_time-unit {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n\n.CSCRO-2477 .cro_bf_digits {\n  display: flex;\n  gap: 3px;\n}\n\n.CSCRO-2477 .cro_bf_digits>span {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 48px;\n  border-radius: 3px;\n  background: #fff;\n  color: #ed0000;\n  font-size: 32px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n\n.CSCRO-2477 .cro_bf_separator {\n  line-height: 34px;\n  font-size: 22px;\n}\n\n.CSCRO-2477 .cro_bf_time-label {\n  font-size: 14px;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\n.CSCRO-2477 .cro_bf_collapsed {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  min-height: 76px;\n  border-radius: 12px 12px 0 0;\n  padding: 16px max(24px, calc((100vw - 1120px) / 2));\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  background: linear-gradient(152deg, #000 11.39%, #930000 267.3%);\n}\n\n.CSCRO-2477 .cro_bf_collapsed-copy {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 16px;\n}\n\n.CSCRO-2477 .cro_bf-link {\n  color: #fff;\n  text-decoration: underline;\n}\n\n.CSCRO-2477 .cro_bf_expand {\n  top: -22px;\n  left: 50%;\n  right: auto;\n  transform: translateX(-50%);\n}\n\n.CSCRO-2477 .cro_bf_collapsed .cro_bf_artwork {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: auto;\n  height: 199px;\n  object-fit: contain;\n}\n\n.CSCRO-2477 .footer {\n  margin-top: 0;\n}\n\n.CSCRO-2477 .cro_bf_toaster .cro_icon_close,\n.CSCRO-2477 .cro_bf_collapsed .cro_bf_expand {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n\n.CSCRO-2477 .cro_bf_toaster .cro_icon_close svg,\n.CSCRO-2477 .cro_bf_collapsed .cro_bf_expand svg {\n  display: block;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n\n.CSCRO-2477 .cro_bf_footer-slot {\n  position: relative;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n@media (max-width: 36rem) {\n  .CSCRO-2477 .cro_bf_modal {\n    width: calc(100% - 1rem);\n  }\n\n  .CSCRO-2477 .cro_bf_modal-body {\n    padding: 48px 16px 16px;\n    gap: 16px;\n  }\n\n  .CSCRO-2477 .cro_bf_modal h2 {\n    font-size: 24px;\n  }\n\n  .CSCRO-2477 .cro_bf_modal-subtitle {\n    font-size: 16px;\n  }\n\n  .CSCRO-2477 .cro_bf_modal_cta-wrappper {\n    width: 100%;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster {\n    width: 100%;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_modal-body {\n    padding: 40px 16px 140px;\n  }\n\n  .CSCRO-2477 .cro_bf_digits>span {\n    width: 26px;\n    height: 32px;\n    font-size: 26px;\n  }\n\n  .CSCRO-2477 .cro_bf_collapsed {\n    padding: 24px 16px 12px;\n  }\n\n  .CSCRO-2477 .cro_bf_collapsed-copy-extra {\n    display: none;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_modal-body {\n    padding: 36px 20px 110px;\n    gap: 16px;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster h2 {\n    font-size: 22px;\n    line-height: 1.15;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_modal-subtitle {\n    font-size: 14px;\n    line-height: 1.4;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_digits>span {\n    width: 22px;\n    height: 28px;\n    font-size: 22px;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_separator {\n    line-height: 28px;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_time-label {\n    font-size: 12px;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster>.cro_bf_artwork {\n    width: 100%;\n    height: auto;\n    max-height: none;\n    object-fit: contain;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster>img.cro_bf_artwork {\n    left: -30%;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster>video.cro_bf_artwork {\n    left: 0%;\n  }\n\n  .CSCRO-2477 .cro_bf_collapsed .cro_bf_artwork {\n    height: auto;\n    width: 55%;\n    object-fit: contain;\n  }\n}\n\n/* V2 MP4 artwork spans the panel; v1 keeps its image sizing. */\n.CSCRO-2477 .cro_bf_toaster.cro_bf_video>.cro_bf_artwork {\n  width: 100%;\n  height: auto;\n  max-height: 100%;\n  object-fit: contain;\n  object-position: bottom left;\n}\n\n/* Control's in-page Black Friday banner. */\n.CSCRO-2477 .cro_bf_slimBanner {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  width: calc(100% - 32px);\n  max-width: 1020px;\n  margin: 24px auto;\n  padding: 16px 24px;\n  border-radius: 4px;\n  background: #000;\n  color: #fff;\n  font-family: var(--mo-font-family, Arial, sans-serif);\n}\n\n.CSCRO-2477 .cro_bf_slimBanner-icon {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 40px;\n  flex-shrink: 0;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner-icon svg {\n  position: absolute;\n  inset: auto 0 0;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner-icon>span {\n  z-index: 1;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner-copy {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 14px;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner-copy>span {\n  font-weight: 700;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner .cro_bf_countdown {\n  margin-left: auto;\n  flex-shrink: 0;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner .cro_bf_digits>span {\n  width: 20px;\n  height: 28px;\n  font-size: 22px;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner .cro_bf_separator {\n  line-height: 28px;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner .cro_bf_time-label {\n  font-size: 10px;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner a:focus-visible {\n  outline: 3px solid #fff;\n  outline-offset: 3px;\n}\n\n@media (max-width: 36rem) {\n  .CSCRO-2477 .cro_bf_slimBanner {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n    padding: 16px;\n  }\n\n  .CSCRO-2477 .cro_bf_slimBanner-icon {\n    display: none;\n  }\n\n  .CSCRO-2477 .cro_bf_slimBanner .cro_bf_countdown {\n    order: -1;\n    margin: 0;\n  }\n}\n.CSCRO-2477 .cro_bf_modal .cro_icon_close:focus-visible,\n.CSCRO-2477 .cro_bf_collapsed .cro_bf_expand:focus-visible {\n  outline: none;\n  box-shadow: none;\n}\n\n.CSCRO-2477 .cro_bf_toaster .cro_icon_close::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  box-sizing: border-box;\n  border: 1px solid #ffffff;\n  border-radius: 50%;\n  clip-path: inset(0 0 50% 0);\n  pointer-events: none;\n}\n\n/* Give Safari a dedicated layer for the inline video on its first paint. */\n.CSCRO-2477 .cro_bf_toaster.cro_bf_video > video.cro_bf_artwork {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}</style>", "dependencies": []}, {"id": "ED8E2E1C-5646-42CC-8C7A-953DF376ECBD", "type": "custom_code", "value": function($){(function (window, document) {
    'use strict';
    const storyName = 'CSCRO-2477';
    const experimentId = '6687134780751872';
    const isToaster = true;
    // Timer rule: true shows the countdown; false hides it.
    const config = Object.assign({
        timer: false,
        deadline: '2026-12-05T23:59:00+00:00',
        imageUrl: 'https://storyblok.cdn.vmo2digital.co.uk/f/253875/648x388/bf0238646b/2477-walrus-and-shaddow-red-2.png',
        imageUrlMobile: 'https://storyblok.cdn.vmo2digital.co.uk/f/253875/772x365/4899c227cf/2477-walrus-and-shaddow-red-3.png'
    }, window.cro2477Config);
    const deadline = Date.parse(config.deadline);
    let attempts = 0;
    const ready = window.setInterval(function () {
        if (++attempts >= 40) window.clearInterval(ready);
        if (!document.querySelector("div[data-cy='hero-banner']") || !window.sales_cro) return;
        window.clearInterval(ready);
        if (document.getElementById('cro-bf-dialog')) return;
        document.documentElement.classList.add(storyName);
        initialise();
    }, 500);

    function initialise() {
        const url = 'https://www.virginmedia.com/broadband/black-friday-deals';
        const chevron = direction => `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="${direction === 'up' ? 'M6 15L12 9L18 15' : 'M6 9L12 15L18 9'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        const track = label => window.sales_cro.fireGA4(experimentId, storyName, 'click', label);
        const backdrop = document.createElement('div');
        backdrop.className = 'cro-backdrop';
        const dialog = document.createElement('section');
        dialog.id = 'cro-bf-dialog';
        dialog.className = 'cro_bf_modal' + (isToaster ? ' cro_bf_toaster' : '');
        dialog.setAttribute('role', 'dialog');
        dialog.setAttribute('aria-modal', 'true');
        dialog.setAttribute('aria-labelledby', 'cro-bf-title');
        dialog.hidden = true;
        dialog.innerHTML = `
            <button type="button" class="cro_icon_close" aria-label="${isToaster ? 'Collapse Black Friday offers' : 'Close Black Friday offers'}">${chevron('down')}</button>
            <div class="cro_bf_modal-body">
                <h2 id="cro-bf-title">Our lowest ever prices on selected bundles</h2>
                <p class="cro_bf_modal-subtitle">Go big this Black Friday and bag yourself an offer</p>
                <div class="cro_bf_countdown" role="timer" aria-live="off" hidden></div>
                <div class="cro_bf_modal_cta-wrappper">
                    <a href="${url}" class="cro_bf-cta">Show me the offers</a>
                    <button type="button" class="cro_bf-close">Remind me later</button>
                </div>
            </div>`;
        const artwork = document.createElement('img');
        artwork.alt = '';
        artwork.className = 'cro_bf_artwork';
        dialog.append(artwork);
        const banner = document.createElement('aside');
        banner.className = 'cro_bf_collapsed';
        banner.hidden = true;
        banner.setAttribute('aria-label', 'Black Friday offers');
        banner.innerHTML = `<div class="cro_bf_collapsed-copy"><span>Treat yourself this Black Friday<span class="cro_bf_collapsed-copy-extra"> and bag yourself an offer</span></span><a href="${url}" class="cro_bf-link">Explore offers</a></div><button type="button" class="cro_bf_expand" aria-label="Expand Black Friday offers" aria-controls="cro-bf-dialog" aria-expanded="false">${chevron('up')}</button>`;
        const bannerArtwork = artwork.cloneNode();
        banner.append(bannerArtwork);
        const mobileArtwork = window.matchMedia('(max-width: 36rem)');
        function updateArtwork() {
            const imageUrl = mobileArtwork.matches && config.imageUrlMobile
                ? config.imageUrlMobile : config.imageUrl;
            artwork.src = imageUrl;
            bannerArtwork.src = imageUrl;
        }
        updateArtwork();
        mobileArtwork.addEventListener('change', updateArtwork);
        bannerArtwork.addEventListener('load', positionBanner);
        document.body.append(backdrop, dialog);
        const bannerHost = document.createElement('div');
        bannerHost.className = 'cro_bf_footer-slot';
        bannerHost.append(banner);
        if (isToaster) {
            const footer = document.querySelector('footer, [role="contentinfo"]');
            if (footer) footer.prepend(bannerHost);
            else document.body.append(bannerHost);
        }

        let previousFocus;
        let inertElements = [];
        let previousOverflow;
        let isOpen = false;
        let isClosing = false;
        let openingAnimation;
        function open(animate = true) {
            if (isOpen) return;
            isOpen = true;
            previousFocus = document.activeElement;
            banner.hidden = true;
            dialog.hidden = false;
            backdrop.classList.add('visible');
            previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            inertElements = Array.from(document.body.children)
                .filter(el => el !== dialog && el !== backdrop && el !== banner && !el.inert);
            inertElements.forEach(el => { el.inert = true; });
            banner.querySelector('button').setAttribute('aria-expanded', 'true');
            dialog.querySelector('button').focus();
            updateTimer();
            const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (animate && !reducedMotion && typeof dialog.animate === 'function') {
                openingAnimation = dialog.animate([
                    { transform: `translateY(${collapsedOffset()}px)` },
                    { transform: 'translateY(0)' }
                ], { duration: 350, easing: 'cubic-bezier(0, 0, 0.2, 1)' });
            }
        }
        function close(label) {
            if (!isOpen || isClosing) return;
            track(label);
            isClosing = true;
            // Reverse from the current position if collapse is selected during entry.
            const startTransform = openingAnimation && window.getComputedStyle
                ? window.getComputedStyle(dialog).transform : 'translateY(0)';
            if (openingAnimation) {
                openingAnimation.cancel();
                openingAnimation = null;
            }
            function finishClose() {
                isOpen = false;
                dialog.hidden = true;
                backdrop.classList.remove('visible');
                document.body.style.overflow = previousOverflow;
                inertElements.forEach(el => { el.inert = false; });
                inertElements = [];
                banner.hidden = false;
                banner.querySelector('button').setAttribute('aria-expanded', 'false');
                positionBanner();
                banner.querySelector('button').focus();
                isClosing = false;
            }
            const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (!reducedMotion && typeof dialog.animate === 'function') {
                const slide = dialog.animate([
                    { transform: startTransform },
                    { transform: `translateY(${collapsedOffset()}px)` }
                ], { duration: 350, easing: 'cubic-bezier(0.4, 0, 1, 1)' });
                // Keep focus trapped and the page locked until the toaster reaches the banner.
                slide.finished.then(finishClose, finishClose);
            } else {
                finishClose();
            }
        }
        dialog.querySelector('.cro_icon_close').addEventListener('click', () => close(isToaster ? 'Click collapse' : 'Click X'));
        dialog.querySelector('.cro_bf-close').addEventListener('click', () => close('Click Remind me later'));
        dialog.querySelector('.cro_bf-cta').addEventListener('click', () => track('Click Show me the offers'));
        banner.querySelector('button').addEventListener('click', () => { track('Click expand'); open(); });
        banner.querySelector('a').addEventListener('click', () => track('Click collapsed banner'));
        backdrop.addEventListener('click', () => close(isToaster ? 'Click collapse backdrop' : 'Click backdrop'));
        dialog.addEventListener('keydown', event => {
            if (event.key === 'Escape') { event.preventDefault(); close('Press Escape'); }
            if (event.key !== 'Tab') return;
            const controls = Array.from(dialog.querySelectorAll('button, a[href]'));
            const first = controls[0], last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        });
        const timer = dialog.querySelector('.cro_bf_countdown');
        let lastValue = '';
        function updateTimer() {
            timer.hidden = config.timer !== true || !Number.isFinite(deadline);
            if (timer.hidden) return;
            const total = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
            const values = [Math.floor(total / 86400), Math.floor(total / 3600) % 24, Math.floor(total / 60) % 60, total % 60];
            const value = values.join(':');
            if (lastValue === value) return;
            lastValue = value;
            const labels = ['Days', 'Hours', 'Minutes', 'Seconds'];
            timer.setAttribute('aria-label', values.map((n, i) => `${n} ${labels[i]}`).join(', '));
            timer.innerHTML = values.map((n, i) => `<span class="cro_bf_time-unit"><span class="cro_bf_digits">${String(n).padStart(2, '0').split('').map(digit => `<span>${digit}</span>`).join('')}</span><span class="cro_bf_time-label">${labels[i]}</span></span>`).join('<span class="cro_bf_separator" aria-hidden="true">:</span>');
        }
        function collapsedOffset() {
            // Measure the responsive banner without making it visible during the slide.
            const wasHidden = banner.hidden;
            const previousVisibility = banner.style.visibility;
            banner.style.visibility = 'hidden';
            banner.hidden = false;
            positionBanner();
            const offset = Math.max(0, banner.getBoundingClientRect().top - dialog.getBoundingClientRect().top);
            banner.hidden = wasHidden;
            banner.style.visibility = previousVisibility;
            return offset;
        }
        function positionBanner() {
            if (banner.hidden) return;
            const footer = document.querySelector('footer, [role="contentinfo"]');
            // Support footers inserted after the experiment starts.
            if (footer && bannerHost.parentElement !== footer) footer.prepend(bannerHost);
            const docked = footer && bannerHost.getBoundingClientRect().top <= window.innerHeight - banner.offsetHeight;
            banner.style.position = docked ? 'relative' : 'fixed';
            banner.style.bottom = docked ? 'auto' : '0px';
        }
        if (isToaster) {
            window.addEventListener('scroll', positionBanner, { passive: true });
            window.addEventListener('resize', positionBanner);
            // Start fully expanded on page load; animate subsequent reopening.
            open(false);
        } else {
            // Retain the original control's once-per-session, delayed presentation.
            let seen = false;
            try { seen = window.sessionStorage.getItem('cro_2477-banner-seen') === 'true'; } catch (_) { }
            if (!seen) {
                let checks = 0;
                const productsReady = window.setInterval(() => {
                    if (++checks >= 40) window.clearInterval(productsReady);
                    if (!document.querySelector('[data-product-id]')) return;
                    window.clearInterval(productsReady);
                    window.setTimeout(() => {
                        open();
                        try { window.sessionStorage.setItem('cro_2477-banner-seen', 'true'); } catch (_) { }
                    }, 3000);
                }, 500);
            }
        }
        window.setInterval(() => { if (isOpen) updateTimer(); }, 1000);
    }
})(window, document);
}, "dependencies": []}]}]}, {"id": "6476652627099648", "name": "Variation #2", "actions": [{"viewId": "5516809309257728", "changes": [{"id": "98E8F027-E69C-4DB3-8066-65F22ECCE90D", "type": "custom_code", "value": function($){(function (window, document) {
    "use strict";
    const storyName = "CSCRO-2477";
    const experimentId = "6687134780751872";
    const isToaster = true;
    // Timer rule: true shows the countdown; false hides it.
    const config = Object.assign(
        {
            timer: false,
            deadline: "2026-12-05T23:59:00+00:00",
            videoUrl:
                "https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/b491bea79b/2477-banner_walrus_full_width_desktop-1.mp4#t=0.001",
            videoUrlMobile:
                "https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/1585761148/2477-banner_walrus_left_side_desktop-1.mp4#t=0.001",
            imageUrlMobile:
                "https://storyblok.cdn.vmo2digital.co.uk/f/253875/772x365/4899c227cf/2477-walrus-and-shaddow-red-3.png",
        },
        window.cro2477Config
    );
    const deadline = Date.parse(config.deadline);
    let attempts = 0;
    const ready = window.setInterval(function () {
        if (++attempts >= 40) window.clearInterval(ready);
        if (
            !document.querySelector("div[data-cy='hero-banner']") ||
            !window.sales_cro
        )
            return;
        window.clearInterval(ready);
        if (document.getElementById("cro-bf-dialog")) return;
        document.documentElement.classList.add(storyName);
        initialise();
    }, 500);

    function initialise() {
        const url = "https://www.virginmedia.com/broadband/black-friday-deals";
        const chevron = (direction) =>
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="${direction === "up" ? "M6 15L12 9L18 15" : "M6 9L12 15L18 9"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        const track = (label) =>
            window.sales_cro.fireGA4(experimentId, storyName, "click", label);
        const backdrop = document.createElement("div");
        backdrop.className = "cro-backdrop";
        const dialog = document.createElement("section");
        dialog.id = "cro-bf-dialog";
        dialog.className =
            "cro_bf_modal cro_bf_video" + (isToaster ? " cro_bf_toaster" : "");
        dialog.setAttribute("role", "dialog");
        dialog.setAttribute("aria-modal", "true");
        dialog.setAttribute("aria-labelledby", "cro-bf-title");
        // The startup breakpoint determines whether the toaster opens or stays collapsed.
        dialog.hidden = true;
        dialog.innerHTML = `
            <button type="button" class="cro_icon_close" aria-label="${isToaster ? "Collapse Black Friday offers" : "Close Black Friday offers"}">${chevron("down")}</button>
            <div class="cro_bf_modal-body">
                <h2 id="cro-bf-title">Our lowest ever prices on selected bundles</h2>
                <p class="cro_bf_modal-subtitle">Go big this Black Friday and bag yourself an offer</p>
                <div class="cro_bf_countdown" role="timer" aria-live="off" hidden></div>
                <div class="cro_bf_modal_cta-wrappper">
                    <a href="${url}" class="cro_bf-cta">Show me the offers</a>
                    <button type="button" class="cro_bf-close">Remind me later</button>
                </div>
            </div>`;
        const mobileVideo = window.matchMedia("(max-width: 36rem)");
        const artwork = document.createElement("video");
        artwork.muted = true;
        artwork.defaultMuted = true;
        artwork.loop = true;
        artwork.playsInline = true;
        artwork.preload = "auto";
        artwork.autoplay = false;
        artwork.setAttribute("muted", "");
        artwork.setAttribute("playsinline", "");
        artwork.setAttribute("aria-hidden", "true");
        artwork.setAttribute("tabindex", "-1");
        artwork.className = "cro_bf_artwork";
        // Supply the source before attachment, independently of the modal opening sequence.
        artwork.src = getVideoSource();
        const videoWrapper = document.createElement("div");
        videoWrapper.className = "cro_bf_video-wrapper";
        videoWrapper.append(artwork);
        dialog.append(videoWrapper);
        const banner = document.createElement("aside");
        banner.className = "cro_bf_collapsed";
        banner.hidden = true;
        banner.setAttribute("aria-label", "Black Friday offers");
        banner.innerHTML = `<div class="cro_bf_collapsed-copy"><span>Treat yourself this Black Friday<span class="cro_bf_collapsed-copy-extra"> and bag yourself an offer</span></span><a href="${url}" class="cro_bf-link">Explore offers</a></div><button type="button" class="cro_bf_expand" aria-label="Expand Black Friday offers" aria-controls="cro-bf-dialog" aria-expanded="false">${chevron("up")}</button>`;
        const bannerArtwork = document.createElement("img");
        bannerArtwork.src = config.imageUrlMobile;
        bannerArtwork.alt = "";
        bannerArtwork.className = "cro_bf_artwork";
        banner.append(bannerArtwork);
        document.body.append(backdrop, dialog);
        const bannerHost = document.createElement("div");
        bannerHost.className = "cro_bf_footer-slot";
        bannerHost.append(banner);
        if (isToaster) {
            const footer = document.querySelector('footer, [role="contentinfo"]');
            if (footer) footer.prepend(bannerHost);
            else document.body.append(bannerHost);
        }

        let previousFocus;
        let inertElements = [];
        let previousOverflow;
        let isOpen = false;
        let playbackEnabled = false;
        let isClosing = false;
        let openingAnimation;
        let lastPlaybackError = "";
        function playVideo() {
            if (!playbackEnabled) return;
            artwork.muted = true;
            artwork.autoplay = true;
            try {
                const playback = artwork.play();
                if (playback && playback.catch) playback.catch(error => {
                    if (error.name !== "AbortError" && lastPlaybackError !== error.name) {
                        lastPlaybackError = error.name;
                        console.warn("CSCRO-2477 video playback:", error.name, error.message);
                    }
                });
            } catch (error) {
                console.warn("CSCRO-2477 video playback:", error.name, error.message);
            }
        }
        function getVideoSource() {
            const mobileSource = config.videoUrlMobile || config.videoUrmMobile || config.videoUrl;
            const source = mobileVideo.matches ? mobileSource : config.videoUrl;
            return source.split("#")[0] + "#t=0.001";
        }
        function updateVideo() {
            const expandedSource = getVideoSource();
            if (artwork.getAttribute("src") !== expandedSource) {
                artwork.src = expandedSource;
                artwork.load();
            }
            playVideo();
        }
        artwork.addEventListener("loadeddata", playVideo);
        artwork.addEventListener("canplay", playVideo);
        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "visible") updateVideo();
        });
        mobileVideo.addEventListener("change", updateVideo);
        bannerArtwork.addEventListener("load", positionBanner);
        function open(animate = true) {
            if (isOpen) return;
            isOpen = true;
            playbackEnabled = true;
            previousFocus = document.activeElement;
            banner.hidden = true;
            dialog.hidden = false;
            backdrop.classList.add("visible");
            previousOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            inertElements = Array.from(document.body.children).filter(
                (el) => el !== dialog && el !== backdrop && el !== banner && !el.inert
            );
            inertElements.forEach((el) => {
                el.inert = true;
            });
            banner.querySelector("button").setAttribute("aria-expanded", "true");
            dialog.querySelector("button").focus();
            updateTimer();
            updateVideo();
            // Start resource selection after the visible panel has completed layout.
            window.requestAnimationFrame(() => {
                playVideo();
            });
            const reducedMotion =
                window.matchMedia &&
                window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (animate && !reducedMotion && typeof dialog.animate === "function") {
                openingAnimation = dialog.animate(
                    [
                        { transform: `translateY(${collapsedOffset()}px)` },
                        { transform: "translateY(0)" },
                    ],
                    { duration: 350, easing: "cubic-bezier(0, 0, 0.2, 1)" }
                );
            }
        }
        function close(label) {
            if (!isOpen || isClosing) return;
            track(label);
            isClosing = true;
            // Reverse from the current position if collapse is selected during entry.
            const startTransform =
                openingAnimation && window.getComputedStyle
                    ? window.getComputedStyle(dialog).transform
                    : "translateY(0)";
            if (openingAnimation) {
                openingAnimation.cancel();
                openingAnimation = null;
            }
            function finishClose() {
                isOpen = false;
                dialog.hidden = true;
                backdrop.classList.remove("visible");
                document.body.style.overflow = previousOverflow;
                inertElements.forEach((el) => {
                    el.inert = false;
                });
                inertElements = [];
                banner.hidden = false;
                banner.querySelector("button").setAttribute("aria-expanded", "false");
                positionBanner();
                banner.querySelector("button").focus();
                isClosing = false;
            }
            const reducedMotion =
                window.matchMedia &&
                window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (!reducedMotion && typeof dialog.animate === "function") {
                const slide = dialog.animate(
                    [
                        { transform: startTransform },
                        { transform: `translateY(${collapsedOffset()}px)` },
                    ],
                    { duration: 350, easing: "cubic-bezier(0.4, 0, 1, 1)" }
                );
                // Keep focus trapped and the page locked until the toaster reaches the banner.
                slide.finished.then(finishClose, finishClose);
            } else {
                finishClose();
            }
        }
        dialog
            .querySelector(".cro_icon_close")
            .addEventListener("click", () =>
                close(isToaster ? "Click collapse" : "Click X")
            );
        dialog
            .querySelector(".cro_bf-close")
            .addEventListener("click", () => close("Click Remind me later"));
        dialog
            .querySelector(".cro_bf-cta")
            .addEventListener("click", () => track("Click Show me the offers"));
        banner.querySelector("button").addEventListener("click", () => {
            track("Click expand");
            open();
        });
        banner
            .querySelector("a")
            .addEventListener("click", () => track("Click collapsed banner"));
        backdrop.addEventListener("click", () =>
            close(isToaster ? "Click collapse backdrop" : "Click backdrop")
        );
        dialog.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                close("Press Escape");
            }
            if (event.key !== "Tab") return;
            const controls = Array.from(dialog.querySelectorAll("button, a[href]"));
            const first = controls[0],
                last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        });
        const timer = dialog.querySelector(".cro_bf_countdown");
        let lastValue = "";
        function updateTimer() {
            timer.hidden = config.timer !== true || !Number.isFinite(deadline);
            if (timer.hidden) return;
            const total = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
            const values = [
                Math.floor(total / 86400),
                Math.floor(total / 3600) % 24,
                Math.floor(total / 60) % 60,
                total % 60,
            ];
            const value = values.join(":");
            if (lastValue === value) return;
            lastValue = value;
            const labels = ["Days", "Hours", "Minutes", "Seconds"];
            timer.setAttribute(
                "aria-label",
                values.map((n, i) => `${n} ${labels[i]}`).join(", ")
            );
            timer.innerHTML = values
                .map(
                    (n, i) =>
                        `<span class="cro_bf_time-unit"><span class="cro_bf_digits">${String(
                            n
                        )
                            .padStart(2, "0")
                            .split("")
                            .map((digit) => `<span>${digit}</span>`)
                            .join(
                                ""
                            )}</span><span class="cro_bf_time-label">${labels[i]}</span></span>`
                )
                .join('<span class="cro_bf_separator" aria-hidden="true">:</span>');
        }
        function collapsedOffset() {
            // Measure the responsive banner without making it visible during the slide.
            const wasHidden = banner.hidden;
            const previousVisibility = banner.style.visibility;
            banner.style.visibility = "hidden";
            banner.hidden = false;
            positionBanner();
            const offset = Math.max(
                0,
                banner.getBoundingClientRect().top - dialog.getBoundingClientRect().top
            );
            banner.hidden = wasHidden;
            banner.style.visibility = previousVisibility;
            return offset;
        }
        function positionBanner() {
            if (banner.hidden) return;
            const footer = document.querySelector('footer, [role="contentinfo"]');
            // Support footers inserted after the experiment starts.
            if (footer && bannerHost.parentElement !== footer)
                footer.prepend(bannerHost);
            const docked =
                footer &&
                bannerHost.getBoundingClientRect().top <=
                window.innerHeight - banner.offsetHeight;
            banner.style.position = docked ? "relative" : "fixed";
            banner.style.bottom = docked ? "auto" : "0px";
        }
        if (isToaster) {
            window.addEventListener("scroll", positionBanner, { passive: true });
            window.addEventListener("resize", positionBanner);
            open(false);

        } else {
            // Retain the original control's once-per-session, delayed presentation.
            let seen = false;
            try {
                seen = window.sessionStorage.getItem("cro_2477-banner-seen") === "true";
            } catch (_) { }
            if (!seen) {
                let checks = 0;
                const productsReady = window.setInterval(() => {
                    if (++checks >= 40) window.clearInterval(productsReady);
                    if (!document.querySelector("[data-product-id]")) return;
                    window.clearInterval(productsReady);
                    window.setTimeout(() => {
                        open();
                        try {
                            window.sessionStorage.setItem("cro_2477-banner-seen", "true");
                        } catch (_) { }
                    }, 3000);
                }, 500);
            }
        }
        window.setInterval(() => {
            if (isOpen) updateTimer();
        }, 1000);
    }
})(window, document);
}, "dependencies": []}, {"id": "A52CC298-76F2-4EA6-8A35-FB4413CF6ADA", "type": "append", "selector": "head", "value": "<style>.CSCRO-2477 .cro_bf_modal,\n.CSCRO-2477 .cro_bf_collapsed {\n  box-sizing: border-box;\n  background: #000;\n  color: #fff;\n  font-family: var(--mo-font-family, Arial, sans-serif);\n  z-index: 2147483647;\n}\n\n.CSCRO-2477 .cro_bf_modal[hidden],\n.CSCRO-2477 .cro_bf_collapsed[hidden],\n.CSCRO-2477 .cro_bf_countdown[hidden] {\n  display: none !important;\n}\n\n.CSCRO-2477 .cro_bf_modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 510px;\n  max-width: calc(100vw - 32px);\n  max-height: calc(100dvh - 40px);\n  overflow: auto;\n  border-radius: 8px;\n  text-align: center;\n}\n\n.CSCRO-2477 .cro_bf_modal:not(.cro_bf_toaster) {\n  border: 1px solid #ffffff;\n}\n\n.CSCRO-2477 .cro_bf_modal-body {\n  position: relative;\n  z-index: 1;\n  padding: 48px 24px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.CSCRO-2477 .cro_bf_modal h2 {\n  margin: 0;\n  max-width: 1020px;\n  font-size: 36px;\n  font-weight: 700;\n  line-height: 1.1;\n  color: #fff;\n}\n\n.CSCRO-2477 .cro_bf_modal-subtitle {\n  margin: 0;\n  font-size: 20px;\n  line-height: 1.4;\n}\n\n.CSCRO-2477 .cro-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgb(0 0 0 / 65%);\n  visibility: hidden;\n  z-index: 2147483646;\n}\n\n.CSCRO-2477 .cro-backdrop.visible {\n  visibility: visible;\n}\n\n.CSCRO-2477 .cro_icon_close,\n.CSCRO-2477 .cro_bf_expand {\n  position: absolute;\n  top: 4px;\n  right: 8px;\n  width: 44px;\n  height: 44px;\n  border: 0;\n  border-radius: 50%;\n  background: #000;\n  color: #fff;\n  font-size: 28px;\n  line-height: 1;\n  cursor: pointer;\n  z-index: 2;\n}\n\n.CSCRO-2477 .cro_bf_modal_cta-wrappper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n\n.CSCRO-2477 .cro_bf-cta {\n  box-sizing: border-box;\n  background: #ed0000;\n  border: 2px solid #ed0000;\n  min-width: 180px;\n  min-height: 44px;\n  padding: 10px 24px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  border-radius: 32px;\n  text-decoration: none;\n}\n\n.CSCRO-2477 .cro_bf-cta:hover {\n  background: #bb0a00;\n  border-color: #bb0a00;\n}\n\n.CSCRO-2477 .cro_bf-close {\n  background: transparent;\n  border: 0;\n  min-height: 44px;\n  padding: 8px 16px;\n  color: #fff;\n  font: inherit;\n  font-size: 16px;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.CSCRO-2477 .cro_bf_modal :is(button, a):focus-visible,\n.CSCRO-2477 .cro_bf_collapsed :is(button, a):focus-visible {\n  outline: 3px solid #fff;\n  outline-offset: 3px;\n  box-shadow: 0 0 0 6px #6200a0;\n}\n\n.CSCRO-2477 .cro_bf_artwork {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.CSCRO-2477 .cro_bf_toaster {\n  top: 40%;\n  bottom: 0;\n  left: 0;\n  transform: none;\n  width: 100%;\n  max-width: none;\n  border-radius: 16px 16px 0 0;\n  border: 1px solid #ffffff;\n  border-bottom: 0;\n  min-height: 0;\n  max-height: none;\n}\n\n.CSCRO-2477 .cro_bf_toaster .cro_icon_close {\n  top: 0;\n  left: 50%;\n  right: auto;\n  transform: translate(-50%, -50%);\n}\n\n/* Keep the collapse control within the scrollable panel's visible area. */\n.CSCRO-2477 .cro_bf_toaster {\n  overflow: visible;\n}\n\n.CSCRO-2477 .cro_bf_toaster .cro_bf_modal-body {\n  height: 100%;\n  max-height: 100%;\n  box-sizing: border-box;\n  overflow: auto;\n  padding: 56px 24px 24px;\n}\n\n.CSCRO-2477 .cro_bf_toaster h2 {\n  font-size: 60px;\n}\n\n.CSCRO-2477 .cro_bf_toaster>.cro_bf_artwork,\n.CSCRO-2477 .cro_bf_toaster>.cro_bf_video-wrapper>.cro_bf_artwork {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  max-height: 65%;\n  object-fit: contain;\n  object-position: bottom left;\n  pointer-events: none;\n}\n\n.CSCRO-2477 .cro_bf_countdown {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 5px;\n}\n\n.CSCRO-2477 .cro_bf_time-unit {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n\n.CSCRO-2477 .cro_bf_digits {\n  display: flex;\n  gap: 3px;\n}\n\n.CSCRO-2477 .cro_bf_digits>span {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 48px;\n  border-radius: 3px;\n  background: #fff;\n  color: #ed0000;\n  font-size: 32px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n\n.CSCRO-2477 .cro_bf_separator {\n  line-height: 34px;\n  font-size: 22px;\n}\n\n.CSCRO-2477 .cro_bf_time-label {\n  font-size: 14px;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\n.CSCRO-2477 .cro_bf_collapsed {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  min-height: 76px;\n  border-radius: 12px 12px 0 0;\n  padding: 16px max(24px, calc((100vw - 1120px) / 2));\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  background: linear-gradient(152deg, #000 11.39%, #930000 267.3%);\n}\n\n.CSCRO-2477 .cro_bf_collapsed-copy {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 16px;\n}\n\n.CSCRO-2477 .cro_bf-link {\n  color: #fff;\n  text-decoration: underline;\n}\n\n.CSCRO-2477 .cro_bf_expand {\n  top: -22px;\n  left: 50%;\n  right: auto;\n  transform: translateX(-50%);\n}\n\n.CSCRO-2477 .cro_bf_collapsed .cro_bf_artwork {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: auto;\n  height: 199px;\n  object-fit: contain;\n}\n\n.CSCRO-2477 .footer {\n  margin-top: 0;\n}\n\n.CSCRO-2477 .cro_bf_toaster .cro_icon_close,\n.CSCRO-2477 .cro_bf_collapsed .cro_bf_expand {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n\n.CSCRO-2477 .cro_bf_toaster .cro_icon_close svg,\n.CSCRO-2477 .cro_bf_collapsed .cro_bf_expand svg {\n  display: block;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n\n.CSCRO-2477 .cro_bf_footer-slot {\n  position: relative;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n@media (max-width: 36rem) {\n  .CSCRO-2477 .cro_bf_modal {\n    width: calc(100% - 1rem);\n  }\n\n  .CSCRO-2477 .cro_bf_modal-body {\n    padding: 48px 16px 16px;\n    gap: 16px;\n  }\n\n  .CSCRO-2477 .cro_bf_modal h2 {\n    font-size: 24px;\n  }\n\n  .CSCRO-2477 .cro_bf_modal-subtitle {\n    font-size: 16px;\n  }\n\n  .CSCRO-2477 .cro_bf_modal_cta-wrappper {\n    width: 100%;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster {\n    width: 100%;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_modal-body {\n    padding: 40px 16px 140px;\n  }\n\n  .CSCRO-2477 .cro_bf_digits>span {\n    width: 26px;\n    height: 32px;\n    font-size: 26px;\n  }\n\n  .CSCRO-2477 .cro_bf_collapsed {\n    padding: 24px 16px 12px;\n  }\n\n  .CSCRO-2477 .cro_bf_collapsed-copy-extra {\n    display: none;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_modal-body {\n    padding: 36px 20px 110px;\n    gap: 16px;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster h2 {\n    font-size: 22px;\n    line-height: 1.15;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_modal-subtitle {\n    font-size: 14px;\n    line-height: 1.4;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_digits>span {\n    width: 22px;\n    height: 28px;\n    font-size: 22px;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_separator {\n    line-height: 28px;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster .cro_bf_time-label {\n    font-size: 12px;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster>.cro_bf_artwork,\n.CSCRO-2477 .cro_bf_toaster>.cro_bf_video-wrapper>.cro_bf_artwork {\n    width: 100%;\n    height: auto;\n    max-height: none;\n    object-fit: contain;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster>img.cro_bf_artwork {\n    left: -30%;\n  }\n\n  .CSCRO-2477 .cro_bf_toaster>.cro_bf_video-wrapper>video.cro_bf_artwork {\n    left: 0%;\n  }\n\n  .CSCRO-2477 .cro_bf_collapsed .cro_bf_artwork {\n    height: auto;\n    width: 55%;\n    object-fit: contain;\n  }\n}\n\n/* V2 MP4 artwork spans the panel; v1 keeps its image sizing. */\n.CSCRO-2477 .cro_bf_toaster.cro_bf_video>.cro_bf_video-wrapper>.cro_bf_artwork {\n  width: 100%;\n  height: auto;\n  max-height: 100%;\n  object-fit: cover;\n  object-position: bottom center;\n}\n\n/* Control's in-page Black Friday banner. */\n.CSCRO-2477 .cro_bf_slimBanner {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  width: calc(100% - 32px);\n  max-width: 1020px;\n  margin: 24px auto;\n  padding: 16px 24px;\n  border-radius: 4px;\n  background: #000;\n  color: #fff;\n  font-family: var(--mo-font-family, Arial, sans-serif);\n}\n\n.CSCRO-2477 .cro_bf_slimBanner-icon {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 40px;\n  flex-shrink: 0;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner-icon svg {\n  position: absolute;\n  inset: auto 0 0;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner-icon>span {\n  z-index: 1;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner-copy {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 14px;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner-copy>span {\n  font-weight: 700;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner .cro_bf_countdown {\n  margin-left: auto;\n  flex-shrink: 0;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner .cro_bf_digits>span {\n  width: 20px;\n  height: 28px;\n  font-size: 22px;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner .cro_bf_separator {\n  line-height: 28px;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner .cro_bf_time-label {\n  font-size: 10px;\n}\n\n.CSCRO-2477 .cro_bf_slimBanner a:focus-visible {\n  outline: 3px solid #fff;\n  outline-offset: 3px;\n}\n\n@media (max-width: 36rem) {\n  .CSCRO-2477 .cro_bf_slimBanner {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n    padding: 16px;\n  }\n\n  .CSCRO-2477 .cro_bf_slimBanner-icon {\n    display: none;\n  }\n\n  .CSCRO-2477 .cro_bf_slimBanner .cro_bf_countdown {\n    order: -1;\n    margin: 0;\n  }\n}\n.CSCRO-2477 .cro_bf_modal .cro_icon_close:focus-visible,\n.CSCRO-2477 .cro_bf_collapsed .cro_bf_expand:focus-visible {\n  outline: none;\n  box-shadow: none;\n}\n\n.CSCRO-2477 .cro_bf_toaster .cro_icon_close::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  box-sizing: border-box;\n  border: 1px solid #ffffff;\n  border-radius: 50%;\n  clip-path: inset(0 0 50% 0);\n  pointer-events: none;\n}\n\n/* Give Safari a dedicated layer for the inline video on its first paint. */\n.CSCRO-2477 .cro_bf_toaster.cro_bf_video > .cro_bf_video-wrapper > video.cro_bf_artwork {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.CSCRO-2477 .cro_bf_toaster.cro_bf_video > .cro_bf_video-wrapper {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  border-radius: inherit;\n  pointer-events: none;\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "4721826566242304", "endOfRange": 3334}, {"entityId": "5931027229573120", "endOfRange": 6667}, {"entityId": "6476652627099648", "endOfRange": 10000}], "name": "[A/B] CSCRO-2477 - BF overlay vs toaster vs animation", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5747584478740480"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5516809309257728"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5817737132376064", "name": "[A/B] CSCRO-2515 - Remove hero post-SVC Black Friday", "commitId": "6669913975160832", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "5303924979138560", "24661040520"], "audienceName": "Cookie consent [consentGroup],Mobile only", "changes": null, "id": "5411097816072192", "integrationSettings": null, "variations": [{"id": "6088767319048192", "name": "Control", "actions": []}, {"id": "5170305205796864", "name": "Variation #1", "actions": [{"viewId": "6116865114636288", "changes": [{"id": "32D5E991-E49F-4098-B8EB-21ACCA8F36DE", "type": "append", "selector": "head", "value": "<style>.CSCRO-2515.CSCRO-2515-v1 [data-testid=\"hero\"] {\n    display: none;\n}\n\n.CSCRO-2515.CSCRO-2515-v1 [data-cro-2515-availability-strip=\"true\"] {\n    box-sizing: border-box;\n    width: 100%;\n    min-height: 48px;\n    margin: var(--cro-2515-sticky-header-clearance, 0) 0 24px;\n    padding: 8px 16px;\n    color: var(--color-primary-fg, #ffffff);\n    background: var(--color-success-bg, #348437);\n}\n\n.CSCRO-2515.CSCRO-2515-v1\n    [data-cro-2515-breadcrumb-relocated=\"true\"].cro-2515-relocated-breadcrumbs {\n    max-width: 366px !important;\n    margin: 0 auto !important;\n    padding: 0 8px !important;\n}\n\n.CSCRO-2515.CSCRO-2515-v1\n    [data-cro-2515-breadcrumb-relocated=\"true\"].cro-2515-relocated-breadcrumbs,\n.CSCRO-2515.CSCRO-2515-v1\n    [data-cro-2515-breadcrumb-relocated=\"true\"].cro-2515-relocated-breadcrumbs * {\n    --cro-2515-breadcrumb-foreground: #fff;\n    --hero-color: var(--cro-2515-breadcrumb-foreground);\n\n    color: var(--cro-2515-breadcrumb-foreground) !important;\n    fill: var(--cro-2515-breadcrumb-foreground) !important;\n}\n\n.CSCRO-2515.CSCRO-2515-v1 .cro-2515-availability-strip__content {\n    display: flex;\n    flex-wrap: wrap;\n    column-gap: 24px;\n    align-items: center;\n    justify-content: center;\n    min-height: 32px;\n}\n\n.CSCRO-2515.CSCRO-2515-v1 .cro-2515-availability-strip__icon {\n    display: block;\n    width: 24px;\n    height: 24px;\n    flex: 0 0 auto;\n}\n\n.CSCRO-2515.CSCRO-2515-v1 .cro-2515-availability-strip__message {\n    margin: 0;\n    font-family: \"VM Circular Chat TT\", inherit;\n    font-size: 16px;\n    font-weight: 450;\n    line-height: 24px;\n    color: inherit;\n}\n\n.CSCRO-2515.CSCRO-2515-v1 .cro-2515-availability-strip__change-address {\n    padding: 0;\n    font-family: \"VM Circular Chat TT\", inherit;\n    font-size: 16px;\n    font-weight: 450;\n    line-height: 24px;\n    color: inherit;\n    text-decoration: underline;\n    background: transparent;\n    border: 0;\n    cursor: pointer;\n}\n\n.CSCRO-2515.CSCRO-2515-v1 .cro-2515-availability-strip__change-address:hover {\n    text-decoration: none;\n}\n\n.CSCRO-2515.CSCRO-2515-v1 .cro-2515-availability-strip__change-address:focus-visible {\n    outline: 2px solid currentcolor;\n    outline-offset: 3px;\n}\n\n@media screen and (min-width: 48rem) {\n    .CSCRO-2515.CSCRO-2515-v1\n    [data-cro-2515-breadcrumb-relocated=\"true\"].cro-2515-relocated-breadcrumbs {\n        max-width: 768px !important;\n        padding: 0 2rem !important;\n    }\n}\n\n@media screen and (min-width: 64rem) {\n    .CSCRO-2515.CSCRO-2515-v1\n    [data-cro-2515-breadcrumb-relocated=\"true\"].cro-2515-relocated-breadcrumbs {\n        max-width: 1038px !important;\n        padding: 0 8px !important;\n    }\n}\n\n@media (max-width: 767px) {\n    .CSCRO-2515.CSCRO-2515-v1 .cro-2515-availability-strip__content {\n        display: grid;\n        grid-template-columns: 24px minmax(0, 1fr);\n        column-gap: 16px;\n        justify-content: initial;\n    }\n\n    .CSCRO-2515.CSCRO-2515-v1 .cro-2515-availability-strip__change-address {\n        grid-column: 2;\n        justify-self: start;\n    }\n}</style>", "dependencies": []}, {"id": "B816A718-1C46-435F-A23E-A8D1FFEF6BE9", "type": "custom_code", "value": function($){((window, document) => {
    "use strict";

    var storyName = "CSCRO-2515";
    var experimentId = "5411097816072192";
    var heroSelector = "[data-testid='hero']";
    var productCardSelector = "[data-role='card'][data-cy='product-card-horizontal']";
    var breadcrumbsSelector = "[data-cy='breadcrumbs-section']";
    var headerSelector = "[data-cy='header']";
    var nativeSuccessSelector = "[data-testid='success-result'][data-cy='postcode-result-section']";
    var nativeSuccessCopySelector = "[data-cy='postcode-result-text']";
    var nativeChangeAddressSelector = "[data-cy='postcode-change-address-link'] button";
    var availabilityStripSelector = "[data-cro-2515-availability-strip]";
    var availabilityProxySelector = "[data-cro-2515-change-address]";
    var circleCheckIconSrc =
        "data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiBvdmVyZmxvdz0idmlzaWJsZSIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGlkPSJJY29uIiBkPSJNMTIgMS41QzE0Ljc4NDggMS41IDE3LjQ1NTUgMi42MDYyNSAxOS40MjQ2IDQuNTc1MzhDMjEuMzkzOCA2LjU0NDUxIDIyLjUgOS4yMTUyMyAyMi41IDEyQzIyLjUgMTQuNzg0OCAyMS4zOTM4IDE3LjQ1NTUgMTkuNDI0NiAxOS40MjQ2QzE3LjQ1NTUgMjEuMzkzOCAxNC43ODQ4IDIyLjUgMTIgMjIuNUM5LjIxNTIzIDIyLjUgNi41NDQ1MSAyMS4zOTM4IDQuNTc1MzggMTkuNDI0NkMyLjYwNjI1IDE3LjQ1NTUgMS41IDE0Ljc4NDggMS41IDEyQzEuNSA5LjIxNTIzIDIuNjA2MjUgNi41NDQ1MSA0LjU3NTM4IDQuNTc1MzhDNi41NDQ1MSAyLjYwNjI1IDkuMjE1MjMgMS41IDEyIDEuNVpNMTIgMjRDMTUuMTgyNiAyNCAxOC4yMzQ4IDIyLjczNTcgMjAuNDg1MyAyMC40ODUzQzIyLjczNTcgMTguMjM0OCAyNCAxNS4xODI2IDI0IDEyQzI0IDguODE3NCAyMi43MzU3IDUuNzY1MTYgMjAuNDg1MyAzLjUxNDcyQzE4LjIzNDggMS4yNjQyOCAxNS4xODI2IDAgMTIgMEM4LjgxNzQgMCA1Ljc2NTE2IDEuMjY0MjggMy41MTQ3MiAzLjUxNDcyQzEuMjY0MjggNS43NjUxNiAwIDguODE3NCAwIDEyQzAgMTUuMTgyNiAxLjI2NDI4IDE4LjIzNDggMy41MTQ3MiAyMC40ODUzQzUuNzY1MTYgMjIuNzM1NyA4LjgxNzQgMjQgMTIgMjRaTTE3LjAyOTcgOS41Mjk2OUMxNy4zMjAzIDkuMjM5MDYgMTcuMzIwMyA4Ljc2MDk0IDE3LjAyOTcgOC40NzAzMUMxNi43MzkxIDguMTc5NjkgMTYuMjYwOSA4LjE3OTY5IDE1Ljk3MDMgOC40NzAzMUwxMC41IDEzLjk0MDZMOC4wMjk2OSAxMS40NzAzQzcuNzM5MDYgMTEuMTc5NyA3LjI2MDk0IDExLjE3OTcgNi45NzAzMSAxMS40NzAzQzYuNjc5NjkgMTEuNzYwOSA2LjY3OTY5IDEyLjIzOTEgNi45NzAzMSAxMi41Mjk3TDkuOTcwMzEgMTUuNTI5N0MxMC4yNjA5IDE1LjgyMDMgMTAuNzM5MSAxNS44MjAzIDExLjAyOTcgMTUuNTI5N0wxNy4wMjk3IDkuNTI5NjlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";
    var relocatedAttribute = "data-cro-2515-breadcrumb-relocated";
    var relocatedClass = "cro-2515-relocated-breadcrumbs";
    var cloneAttribute = "data-cro-2515-breadcrumb-clone";
    var headerClearanceVariable = "--cro-2515-sticky-header-clearance";
    var pollTimeout = 20000;
    var remountObserver = null;
    var headerResizeObserver = null;
    var resetPollTimer = null;
    var observedHeader = null;
    var resetInProgress = false;
    var leftPostSvcAfterReset = false;
    var variantStarted = false;
    var changeAddressWired = false;
    var remountSyncQueued = false;

    function stopResetPoll() {
        if (resetPollTimer) {
            window.clearInterval(resetPollTimer);
            resetPollTimer = null;
        }
    }

    function startResetPoll() {
        var started;

        stopResetPoll();
        started = Date.now();
        resetPollTimer = window.setInterval(function () {
            syncAfterRemount();
            if (!resetInProgress || Date.now() - started >= 60000) {
                stopResetPoll();
            }
        }, 250);
    }

    function getSalesCro() {
        var sales_cro = window.sales_cro;
        return sales_cro && typeof sales_cro.waitUntil === "function" ? sales_cro : null;
    }

    function addRootClass(className) {
        if (!className || !document.documentElement) {
            return;
        }
        document.documentElement.classList.add(className);
    }

    function insertBefore(anchor, node) {
        if (!anchor || !node || typeof anchor.insertAdjacentElement !== "function") {
            return null;
        }
        try {
            return anchor.insertAdjacentElement("beforebegin", node);
        } catch (err) {
            return null;
        }
    }

    function clickNative(el) {
        var sales_cro = getSalesCro();
        if (sales_cro && typeof sales_cro.dispatchClick === "function") {
            sales_cro.dispatchClick(el);
            return;
        }
        el.click();
    }

    function registerTeardown(cleanup) {
        if (typeof cleanup !== "function") {
            return;
        }
        if (typeof window.registerMO === "function") {
            window.registerMO(storyName, { disconnect: cleanup });
        }
    }

    function waitUntilReady(predicate, callback, timeout) {
        var sales_cro = getSalesCro();
        var limit = typeof timeout === "number" ? timeout : 10000;

        if (sales_cro) {
            sales_cro.waitUntil(predicate, callback, limit);
            return;
        }

        var started = Date.now();
        var tick = function () {
            var value = false;
            try {
                value = typeof predicate === "function" ? predicate() : false;
            } catch (err) {
                value = false;
            }
            if (value) {
                if (typeof callback === "function") {
                    callback();
                }
                return;
            }
            if (Date.now() - started >= limit) {
                return;
            }
            window.requestAnimationFrame(tick);
        };
        window.requestAnimationFrame(tick);
    }

    function updateStripHeaderClearance(strip) {
        var header = document.querySelector(headerSelector);
        var headerHeight;

        if (!strip || !header) {
            return;
        }

        headerHeight = Math.ceil(header.getBoundingClientRect().height);
        strip.style.setProperty(headerClearanceVariable, headerHeight + "px");
    }

    function observeHeaderClearance() {
        var header = document.querySelector(headerSelector);

        if (!header || typeof window.ResizeObserver !== "function" || observedHeader === header) {
            return;
        }

        if (headerResizeObserver) {
            headerResizeObserver.disconnect();
        }

        observedHeader = header;
        headerResizeObserver = new window.ResizeObserver(function () {
            updateStripHeaderClearance(document.querySelector(availabilityStripSelector));
        });
        headerResizeObserver.observe(header);
        registerTeardown(function () {
            if (headerResizeObserver) {
                headerResizeObserver.disconnect();
                headerResizeObserver = null;
                observedHeader = null;
            }
        });
    }

    function realBreadcrumbs(hero) {
        if (!hero || typeof hero.querySelector !== "function") {
            return null;
        }
        return hero.querySelector(breadcrumbsSelector + ":not([" + cloneAttribute + "])");
    }

    function removeBreadcrumbClone() {
        var clones = document.querySelectorAll("[" + cloneAttribute + "]");
        var i;

        for (i = 0; i < clones.length; i += 1) {
            if (clones[i].parentNode) {
                clones[i].parentNode.removeChild(clones[i]);
            }
        }
    }

    // Hero is a client component. Moving its breadcrumb node out of the tree makes
    // the address-reset commit delete that node. Clone for the post-SVC position
    // and leave the React node inside the hero.
    function syncBreadcrumbClone(hero) {
        var real = realBreadcrumbs(hero);
        var clone = document.querySelector("[" + cloneAttribute + "]");
        var fresh;

        if (!hero || !hero.parentNode || !real || !hero.contains(real)) {
            return clone && clone.isConnected ? clone : null;
        }

        if (clone && clone.isConnected && hero.previousElementSibling === clone) {
            return clone;
        }

        fresh = real.cloneNode(true);
        fresh.setAttribute(cloneAttribute, "true");
        fresh.setAttribute(relocatedAttribute, "true");
        fresh.classList.add(relocatedClass);
        if (clone && clone.parentNode) {
            clone.parentNode.replaceChild(fresh, clone);
        }
        if (hero.previousElementSibling !== fresh) {
            insertBefore(hero, fresh);
        }
        return hero.previousElementSibling === fresh ? fresh : null;
    }

    function createAvailabilityStrip() {
        var strip = document.createElement("section");
        var content = document.createElement("div");
        var icon = document.createElement("img");
        var message = document.createElement("p");
        var changeAddress = document.createElement("button");

        strip.setAttribute("data-cro-2515-availability-strip", "true");
        content.className = "cro-2515-availability-strip__content";
        icon.classList.add("cro-2515-availability-strip__icon");
        icon.src = circleCheckIconSrc;
        icon.setAttribute("aria-hidden", "true");
        icon.alt = "";
        message.className = "cro-2515-availability-strip__message";
        message.setAttribute("data-cro-2515-availability-copy", "true");
        changeAddress.type = "button";
        changeAddress.className = "cro-2515-availability-strip__change-address";
        changeAddress.setAttribute("data-cro-2515-change-address", "true");
        changeAddress.textContent = "Change address";

        content.appendChild(icon);
        content.appendChild(message);
        content.appendChild(changeAddress);
        strip.appendChild(content);
        return strip;
    }

    function getNativeSuccessCopy() {
        var nativeSuccess = document.querySelector(nativeSuccessSelector);
        var nativeCopy = nativeSuccess && nativeSuccess.querySelector(nativeSuccessCopySelector);
        var text = nativeCopy && nativeCopy.textContent ? nativeCopy.textContent.trim() : "";
        return text ? text : "";
    }

    function hasNativeSuccess() {
        return !!getNativeSuccessCopy();
    }

    function isPostSvcReady() {
        return !!(
            document.querySelector(heroSelector) &&
            document.querySelector(productCardSelector) &&
            hasNativeSuccess()
        );
    }

    function suspendTreatmentForNativeReset() {
        var strip = document.querySelector(availabilityStripSelector);
        var hero = document.querySelector(heroSelector);

        resetInProgress = true;
        leftPostSvcAfterReset = false;
        document.documentElement.classList.remove(storyName + "-v1");
        document.documentElement.classList.remove(storyName);
        if (strip) {
            strip.remove();
        }
        removeBreadcrumbClone();

        if (hero) {
            hero.removeAttribute("aria-hidden");
            hero.style.removeProperty("display");
        }

        observeRemounts();
        startResetPoll();
    }

    function wireChangeAddressProxy() {
        var listener;

        if (changeAddressWired) {
            return;
        }

        changeAddressWired = true;
        listener = function (event) {
            var target = event && event.target;
            var match =
                target && typeof target.closest === "function"
                    ? target.closest(availabilityProxySelector)
                    : null;
            var nativeDriver;

            if (!match) {
                return;
            }

            nativeDriver = document.querySelector(nativeChangeAddressSelector);
            if (nativeDriver) {
                suspendTreatmentForNativeReset();
                clickNative(nativeDriver);
            }
        };
        document.addEventListener("click", listener);
        registerTeardown(function () {
            document.removeEventListener("click", listener);
        });
    }

    function syncAvailabilityStrip(hero) {
        var nativeCopyText = getNativeSuccessCopy();
        var clone = document.querySelector("[" + cloneAttribute + "]");
        var strip = document.querySelector(availabilityStripSelector);
        var message;
        var anchor;

        if (!nativeCopyText || !hero || !hero.parentNode) {
            return false;
        }

        if (!strip) {
            strip = createAvailabilityStrip();
        }

        anchor = clone && clone.isConnected ? clone : hero;
        if (anchor.previousElementSibling !== strip) {
            insertBefore(anchor, strip);
        }
        updateStripHeaderClearance(strip);

        message = strip.querySelector("[data-cro-2515-availability-copy]");
        if (message) {
            message.textContent = "Great news! " + nativeCopyText;
        }

        wireChangeAddressProxy();
        return true;
    }

    function applyVariant(hero) {
        if (!hero) {
            return false;
        }

        syncBreadcrumbClone(hero);

        if (!syncAvailabilityStrip(hero)) {
            return false;
        }

        addRootClass(storyName);
        addRootClass(storyName + "-v1");
        return document.documentElement.classList.contains(storyName + "-v1");
    }

    function syncAfterRemount() {
        var hero = document.querySelector(heroSelector);
        var postSvcReady = isPostSvcReady();
        var applied;

        remountSyncQueued = false;

        if (resetInProgress) {
            // #postcode stays mounted during success, so its presence cannot mean
            // the address form is active. Wait until the success copy leaves, then returns.
            if (!hasNativeSuccess()) {
                leftPostSvcAfterReset = true;
                removeBreadcrumbClone();
                return;
            }

            if (!leftPostSvcAfterReset || !postSvcReady) {
                return;
            }

            applied = applyVariant(hero);
            if (!applied) {
                // Keep polling — do not clear resetInProgress on a failed apply.
                return;
            }

            resetInProgress = false;
            stopResetPoll();
            return;
        }

        if (postSvcReady && !document.documentElement.classList.contains(storyName + "-v1")) {
            applyVariant(hero);
        }
    }

    function observeRemounts() {
        if (remountObserver || !document.body || typeof window.MutationObserver !== "function") {
            return;
        }

        remountObserver = new window.MutationObserver(function () {
            if (!remountSyncQueued) {
                remountSyncQueued = true;
                window.setTimeout(syncAfterRemount, 100);
            }
        });
        remountObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["style", "class", "hidden", "aria-hidden"]
        });
        registerTeardown(function () {
            if (remountObserver) {
                remountObserver.disconnect();
                remountObserver = null;
            }
            stopResetPoll();
        });
        observeHeaderClearance();
    }

    function tryMount() {
        var hero = document.querySelector(heroSelector);

        if (resetInProgress || !isPostSvcReady()) {
            return false;
        }

        try {
            if (!variantStarted) {
                variantStarted = true;
                console.log("Variant START -", storyName);
            }
            if (!applyVariant(hero)) {
                return false;
            }

            observeRemounts();
            return true;
        } catch (error) {
            console.log(storyName + " Error: " + error);
            addRootClass(storyName + "-error");
            return true;
        }
    }

    waitUntilReady(
        function () {
            return tryMount();
        },
        function () {},
        pollTimeout
    );
})(window, document);
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "6088767319048192", "endOfRange": 5000}, {"entityId": "5170305205796864", "endOfRange": 10000}], "name": "[A/B] CSCRO-2515 - Remove hero post-SVC Black Friday", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5817737132376064"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6116865114636288"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": [{"id": "FC6C9380-C9D7-40DC-9FDE-4CD65E1A1576", "type": "custom_code", "value": function($){// Wrap code in an IIFE
(function (window, document) {
    // Invoking strict mode
    'use strict';
    const storyNumber = "CSCRO-2185";
    const experimentId = "5963283702743040";
    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector("vm-basket-summary"),
            $ = window.$,
            sales_cro = window.sales_cro;

        const variant = function () {

            $(document).off("click.CSCRO2185OriginalCtas", "vm-basket-summary vm-basket-plan-details button").on("click.CSCRO2185OriginalCtas", "vm-basket-summary vm-basket-plan-details button", function (event) {
                if (!event.originalEvent) {
                    return;
                }

                const buttonText = $(this).text().replace(/\s+/g, " ").trim().toLowerCase();

                if (buttonText.includes("see all channels")) {
                    console.log("Click See all Channels");
                    sales_cro.fireGA4(experimentId, storyNumber, "click", "Click See all Channels");
                }

                if (buttonText.includes("about flex")) {
                    console.log("Click About Flex");
                    sales_cro.fireGA4(experimentId, storyNumber, "click", "Click About Flex");
                }
            });

            $(document).off("click.CSCRO2185NewCta", ".cro_see-all-channels").on("click.CSCRO2185NewCta", ".cro_see-all-channels", function () {
                const ctaText = $(this).text().replace(/\s+/g, " ").trim().toLowerCase();

                if (ctaText.includes("see all channels")) {
                    console.log("Click NEW See all Channels");
                    sales_cro.fireGA4(experimentId, storyNumber, "click", "Click NEW See all Channels");
                }

                if (ctaText.includes("see what's included")) {
                    console.log("Click NEW See what's included");
                    sales_cro.fireGA4(experimentId, storyNumber, "click", "Click NEW See what's included");
                }
            });

            $("vm-your-basket-shell .basket-details-wrapper .show-more__trigger").on('click', function () {
                console.log("Show details")
                sales_cro.fireGA4(experimentId, storyNumber, "click", "Show Package Details");
            })

        }

        // Only proceed if subject is found in DOM
        if (subject && typeof $ == "function" && sales_cro) {
            window.clearInterval($timerA);

            try {
                console.log('Variant START -', storyNumber + ' - events')
                document.documentElement.classList.add(storyNumber);
                variant();
            }
            catch (error) {
                console.log(`${storyNumber} Error: ${error}`);
                sales_cro.fireGA4(experimentId, storyNumber, "error", `Error: ${error}`);
                document.documentElement.classList.add(storyNumber + "-error");
            }
        }

    }, 500);
    setTimeout(function () {
        if ($timerA !== null) {
            clearInterval($timerA);
            if (typeof (error) === 'function') {
                error();
            }
        }
    }, 20000);
}(window, document));
}, "dependencies": []}], "id": "5853894174048256", "name": "[100%][no-track] CSCRO-2185 - TV Channels on the Basket page", "commitId": "4845760676626432", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "4579406786592768"], "audienceName": "2185 - product ids", "changes": null, "id": "5963283702743040", "integrationSettings": null, "variations": [{"id": "5138845402923008", "name": "Original", "actions": [{"viewId": "25437860573", "changes": []}]}, {"id": "4671055785099264", "name": "Variation #1", "actions": [{"viewId": "25437860573", "changes": [{"id": "C93882CF-52E8-42CE-A19A-F2D4FE6D3291", "type": "custom_code", "value": function($){// Wrap code in an IIFE
(function (window, document) {
    // Invoking strict mode
    'use strict';
    const storyNumber = "CSCRO-2185";
    const experimentId = "5963283702743040";
    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector("vm-basket-summary"),
            $ = window.$,
            sales_cro = window.sales_cro;

        const variant = function () {
            let checkoutEvent = window.dataLayer.filter((i) => {
                if (i.event !== undefined) return i.event == "ecom_event"
            });
            const product = checkoutEvent[checkoutEvent.length - 1].ecommerce.items[0], productId = product.bundle_id,
                urlPrefix = "https://storyblok.cdn.vmo2digital.co.uk",
                skyOneSrc = `${urlPrefix}/f/253875/224x224/a460f530f2/2185_sky-one.png`,
                skyCinemaSrc = `${urlPrefix}/f/253875/224x224/43bb736303/2185_sky-cinema.png`,
                skySportsSrc = `${urlPrefix}/f/253875/224x224/0a74c312c7/2185_sky-sports.png`,
                comedyCentralSrc = `${urlPrefix}/f/253875/224x224/502f2bd42a/2185_comedy-central.png`,
                skyAtlanticSrc = `${urlPrefix}/f/253875/224x224/5556023e3e/2185_sky-atlantic.png`,
                discoverySrc = `${urlPrefix}/f/253875/224x220/a41dba274d/2185_discover-channel.png`,
                nationalGeographicSrc = `${urlPrefix}/f/253875/224x224/6c0489317a/2185_national-geographic-channel.png`,
                skyWitnessSrc = `${urlPrefix}/f/253875/224x224/3979570d60/2185_sky-witness.png`,
                mtvSrc = `${urlPrefix}/f/253875/224x224/06b46f3b92/2185_mtv.png`,
                skySciFiSrc = `${urlPrefix}/f/253875/224x224/b4b969064c/2185_sky-sci-fi.png`,
                bbcOneSrc = `${urlPrefix}/f/253875/224x224/8aefafb26d/2185_bbc-one.png`,
                itvSrc = `${urlPrefix}/f/253875/224x224/2e1f8be297/2185_itv.png`,
                channel4Src = `${urlPrefix}/f/253875/224x224/4c7be90213/2185_channel-4.png`,
                iplayerSrc = `${urlPrefix}/f/253875/224x224/30dc144486/2185_iplayer.png`,
                skyOneLogo = { name: "sky-one", src: skyOneSrc },
                skyCinemaLogo = { name: "sky-cinema", src: skyCinemaSrc },
                skySportsLogo = { name: "sky-sports", src: skySportsSrc },
                comedyCentralLogo = { name: "comedy-central", src: comedyCentralSrc },
                skyAtlanticLogo = { name: "sky-atlantic", src: skyAtlanticSrc },
                discoveryLogo = { name: "discovery", src: discoverySrc },
                nationalGeographicLogo = { name: "national-geographic", src: nationalGeographicSrc },
                skyWitnessLogo = { name: "sky-witness", src: skyWitnessSrc },
                mtvLogo = { name: "mtv", src: mtvSrc },
                skySciFiLogo = { name: "sky-sci-fi", src: skySciFiSrc },
                bbcOneLogo = { name: "bbc-one", src: bbcOneSrc },
                itvLogo = { name: "itv", src: itvSrc },
                channel4Logo = { name: "channel-4", src: channel4Src },
                iplayerLogo = { name: "iplayer", src: iplayerSrc },
                channelLogoMap = [
                    {
                        name: "Entertainment bundle",
                        ids: ["6139", "6626"],
                        logos: [skyOneLogo, skyAtlanticLogo, discoveryLogo, mtvLogo, skyWitnessLogo]
                    },
                    {
                        name: "Cinema Bundle",
                        ids: ["6181", "6694"],
                        logos: [skyCinemaLogo, skyAtlanticLogo, skySciFiLogo, nationalGeographicLogo, discoveryLogo]
                    },
                    {
                        name: "Sport Bundle",
                        ids: ["6224", "6762"],
                        logos: [skySportsLogo, discoveryLogo, nationalGeographicLogo, skyAtlanticLogo, mtvLogo]
                    },
                    {
                        name: "Sport + Cinema Bundle",
                        ids: ["4684", "95306"],
                        logos: [skySportsLogo, skyCinemaLogo, skyAtlanticLogo, nationalGeographicLogo, mtvLogo]
                    },
                    {
                        name: "Max Volt bundle",
                        ids: ["95501", "96314"],
                        logos: [skySportsLogo, skyCinemaLogo, skyWitnessLogo, skyAtlanticLogo, discoveryLogo]
                    },
                    {
                        name: "Flex",
                        ids: ["5001", "5502"],
                        logos: [bbcOneLogo, itvLogo, channel4Logo, iplayerLogo]
                    }
                ],
                addonIcon = $("vm-basket-summary img[data-cy='Addon_icon']"),
                addonIconSrc = addonIcon.attr("src") || "",
                hasNetflixAddonIcon = addonIcon.length > 0 && addonIconSrc.toLowerCase().includes("netflix"),
                customiseSection = $("vm-basket-summary vo-section.customizeBtn-section"),
                broadbandSpeed = $("vm-basket-summary .product-description[data-cy='BroadbandSpeed']"),
                productTitleContainer = $("vm-basket-summary .product-images-compact-container"),
                matchedProduct = channelLogoMap.filter(function (bundle) {
                    return bundle.ids.includes(String(productId));
                })[0],
                channelLogos = matchedProduct ? matchedProduct.logos : [],
                tvChannelsText = $("vm-basket-summary vo-show-more .package-detail-content").filter(function () {
                    return $(this).text().toLowerCase().includes("tv channels");
                }).first().text().trim(),
                channelHeadingText = tvChannelsText ? `${tvChannelsText} included` : (["5001", "5502"].includes(String(productId)) ? "150+ TV channels + streaming apps" : "TV channels included"),
                ctaText = ["5001", "5502"].includes(String(productId)) ? "See what's included" : "See all channels",
                channelsMarkup = `
                    <div class="cro_channels-included__content">
                        <h3>${channelHeadingText}</h3>
                        <div class="cro_channels-included__logos">
                            ${channelLogos.map(function (logo, index) {
                    return `
                                    <div class="cro_channel-logo${index === 4 ? " cro_channel-logo--fifth" : ""}" data-logo-name="${logo.name}">
                                        <img src="${logo.src}" alt="Channel logo ${index + 1}">
                                    </div>
                                `;
                }).join("")}
                        </div>
                        <button type="button" class="cro_see-all-channels">${ctaText}
                            <span aria-hidden="true">
                                <svg _ngcontent-ng-c2261345053="" width="18" height="18" data-testid="icon" data-name="FasChevronDown" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2261345053="" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
                            </span>
                        </button>
                    </div>
                `;

            if (hasNetflixAddonIcon && broadbandSpeed.length > 0 && !broadbandSpeed.next(".cro_netflix-included").length) {
                broadbandSpeed.after(`
                    <div class="cro_netflix-included cro_desktop">
                        <p>Includes:</p>
                        <img class="cro_addon_image" src="${addonIconSrc}" alt="Netflix">
                    </div>
                `);
            }

            if (hasNetflixAddonIcon && productTitleContainer.length > 0 && !productTitleContainer.next(".cro_netflix-included").length) {
                productTitleContainer.after(`
                    <div class="cro_netflix-included cro_mobile">
                        <p>Includes:</p>
                        <img class="cro_addon_image" src="${addonIconSrc}" alt="Netflix">
                    </div>
                `);
            }

            if (customiseSection.length > 0 && !$(".cro_channels-included").length) {
                customiseSection.before(`
                    <div class="cro_channels-included">
                        ${channelsMarkup}
                    </div>
                `);
            }

            $(document).off("click.croSeeAllChannels", ".cro_see-all-channels").on("click.croSeeAllChannels", ".cro_see-all-channels", function () {
                if (["5001", "5502"].includes(String(productId))) {
                    $("vm-basket-summary vm-basket-plan-details button").filter(function () {
                        return $(this).text().toLowerCase().includes("about flex");
                    }).click();
                } else {
                    $("vm-basket-summary vm-basket-plan-details button").filter(function () {
                        return $(this).text().toLowerCase().includes("see all channels");
                    }).click();
                }
            });

            $(document).off("click.croChannelLogo", ".cro_channel-logo").on("click.croChannelLogo", ".cro_channel-logo", function () {
                console.log("click logos");
                console.log($(this).attr("data-logo-name"));
                sales_cro.fireGA4(experimentId, storyNumber, "click", `Click logos - ${$(this).attr("data-logo-name")}`);
            });


        }

        // Only proceed if subject is found in DOM
        if (subject && typeof $ == "function" && sales_cro) {
            window.clearInterval($timerA);

            try {
                console.log('Variant START -', storyNumber)
                document.documentElement.classList.add(storyNumber);
                variant();
            }
            catch (error) {
                console.log(`${storyNumber} Error: ${error}`);
                sales_cro.fireGA4(experimentId, storyNumber, "error", `Error: ${error}`);
                document.documentElement.classList.add(storyNumber + "-error");
            }
        }

    }, 500);
    setTimeout(function () {
        if ($timerA !== null) {
            clearInterval($timerA);
            if (typeof (error) === 'function') {
                error();
            }
        }
    }, 20000);
}(window, document));
}, "dependencies": [], "name": "", "isOpalManaged": false}, {"id": "47C0E615-EF6C-4112-A755-F7495EB97B7E", "type": "append", "selector": "head", "value": "<style>.CSCRO-2185 vm-basket-summary .addon-products,\n.CSCRO-2185 vo-vmo2-theme-provider .volt-new-new-product-container {\n    display: none;\n}\n\n.CSCRO-2185 .cro_mobile {\n    display: none;\n}\n\n.CSCRO-2185 .cro_desktop,\n.CSCRO-2185 vo-vmo2-theme-provider .cro_mobile {\n    display: flex;\n}\n\n.CSCRO-2185 .cro_channels-included {\n    padding: 1rem 0;\n    border-top: 1px solid #cccccc;\n    border-bottom: 1px solid #cccccc;\n}\n\n.CSCRO-2185 .cro_netflix-included {\n    align-items: center;\n    justify-content: center;\n    gap: 12px;\n    padding: 1rem 0;\n}\n\n.CSCRO-2185 .cro_netflix-included.cro_mobile {\n    border: none;\n    padding-top: 0;\n}\n\n.CSCRO-2185 .cro_netflix-included p {\n    margin: 0;\n    font-family: var(--mo-font-family);\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.2;\n}\n\n.CSCRO-2185 .cro_netflix-included img {\n    width: 132px;\n    height: auto;\n}\n\n.CSCRO-2185 .cro_channels-included__content h3 {\n    margin-bottom: 1rem;\n    font-family: var(--mo-font-family);\n    font-size: 1.25rem;\n    font-weight: 500;\n    text-align: center;\n}\n\n.CSCRO-2185 .cro_channels-included__logos {\n    display: flex;\n    align-items: stretch;\n    justify-content: center;\n    margin-bottom: 1rem;\n}\n\n.CSCRO-2185 .cro_channel-logo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: fit-content;\n    min-height: 4rem;\n    background: #ffffff;\n    border-radius: 5px;\n}\n\n.CSCRO-2185 .cro_channel-logo img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n}\n\n.CSCRO-2185 .cro_channel-logo--fifth {\n    display: none;\n}\n\n.CSCRO-2185 .cro_see-all-channels {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: .5rem;\n    padding: 0;\n    border: 0;\n    background: transparent;\n\n    font-family: var(--mo-font-family);\n    font-size: 1rem;\n    font-weight: 400;\n    cursor: pointer;\n    margin: 0 auto;\n}\n\n.CSCRO-2185 .cro_see-all-channels span {\n    rotate: -90deg;\n}\n\n.CSCRO-2185 vo-vmo2-theme-provider .cro_see-all-channels {\n    color: #0019a5;\n}\n\n.CSCRO-2185 vo-vm-theme-provider .cro_see-all-channels {\n    color: #5f2878;\n}\n\n.CSCRO-2185 vo-vmo2-theme-provider .cro_see-all-channels span svg {\n    fill: #0019a5;\n}\n\n.CSCRO-2185 vo-vm-theme-provider .cro_see-all-channels span svg {\n    fill: #5f2878;\n}\n\n\n\n@media (max-width: 767px) {\n    .CSCRO-2185 .cro_mobile {\n        display: flex;\n        margin-left: 80px;\n    }\n\n    .CSCRO-2185 .cro_desktop {\n        display: none;\n    }\n\n    .CSCRO-2185 .cro_channels-included {\n        margin: 12px 0 20px;\n    }\n\n    .CSCRO-2185 .cro_netflix-included p {\n        font-size: 16px;\n    }\n\n    .CSCRO-2185 .cro_netflix-included img {\n        width: 118px;\n    }\n\n    .CSCRO-2185 .cro_channels-included__content h3 {\n        font-size: 18px;\n    }\n\n    .CSCRO-2185 .cro_channel-logo--fifth {\n        display: flex;\n    }\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "4671055785099264", "endOfRange": 10000}], "name": "[100%][no-track] CSCRO-2185 - TV Channels on the Basket page", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5853894174048256"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["25437860573"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5904886817095680", "name": "[100%] CSCRO-2459 100% Alternative Comms Question Copy", "commitId": "6489049613991936", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "5303924979138560"], "audienceName": "Cookie consent [consentGroup]", "changes": null, "id": "4993399596515328", "integrationSettings": null, "variations": [{"id": "4832475979972608", "name": "Original", "actions": [{"viewId": "5098431635521536", "changes": []}]}, {"id": "5958375886815232", "name": "Variation #1", "actions": [{"viewId": "5098431635521536", "changes": [{"id": "1F136277-2812-4961-9E53-8DFC0E697E85", "type": "custom_code", "value": function($){((w) => {
    "use strict";

    const window = typeof unsafeWindow !== "undefined" ? unsafeWindow : w;
    const storyNumber = "CSCRO-2459";
    const experimentId = "4993399596515328";
    const sales_cro = window.sales_cro;
    const prefix = "cscro";
    const debug = document.cookie.includes("vmDEV");
    const imgRoot = "https://a.storyblok.com/f/253875";
    const dev = true;

    const utils = {
        waitUntil: (cond, cb, timeout = 10000) => {
            const start = Date.now();
            const check = () => {
                if (Date.now() - start > timeout) return;
                const el = typeof cond === 'string' ? document.querySelector(cond) : undefined;
                const ok = typeof cond === 'function' ? cond() : undefined;
                if (el) { cb(el); return; }
                if (ok) { cb(); return; }
                requestAnimationFrame(check);
            };
            requestAnimationFrame(check);
        },
        log: (msg, expTag = storyNumber) => {
            debug && console.log(`[CSCRO] ${storyNumber} -->`, msg);
        },
        dispatchClick: (el) => {
            ["mousedown", "mouseup", "click"].forEach(event =>
                el.dispatchEvent(new MouseEvent(event, { bubbles: true }))
            );
        },
        checkPageChanges: (target, cb, opts = {childList: true, subtree: true}) => {
            const debounce = (func, delay) => {
                let timeout;
        
                return (...args) => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => func(...args), delay)
                }
            }

            let observer;

            if(!dev) {
                observer = registerMO(storyNumber, new MutationObserver(
                    debounce(() => {
                        utils.log('Mutation');
                        cb();
                    }, 100)
                ));
            } else {
                observer = new MutationObserver(
                    debounce(() => {
                        utils.log('Mutation');
                        cb();
                    }, 100)
                )
            }
    
            observer.observe(target, opts);
        }
    }
    
    let path = window.location.pathname;

    const updateText = () => {
        let textHeading,
            subHeading,
            commOpts;

        utils.waitUntil(
            () => {
                textHeading = document.querySelector('[data-cy="communication-format__heading"]');
                subHeading = document.querySelector('[data-cy="communication-format__sub-heading"]');
                commOpts = document.querySelectorAll('[data-cy="require-communication__radio"] label > div > span > span');

                return textHeading && commOpts.length > 1
            },
            () => {
                if(document.querySelector(`.${prefix}-comm-heading`)) return;

                textHeading.classList.add(`${prefix}-comm-heading`);
                textHeading.innerText = "Communications preferences";

                subHeading.innerText = "Our default communication preference is email. We'll use the address provided to register you for eBilling."

                commOpts[0].innerText = "Email";
                commOpts[1].innerText = "Other"
            }
        )
    }

    const initVariation = () => {
        try {
            document.documentElement.classList.add(storyNumber);
            path = window.location.pathname;

            utils.log('Variant running');
            utils.log(path);

            updateText()
        } catch(err) {
            sales_cro.fireGA4(experimentId,storyNumber,"error",`Error: ${err}`);
            utils.log(err, storyNumber)
        }
    }

    utils.waitUntil(
        () => window.getAllAngularRootElements, 
        () => initVariation()
    );

    utils.waitUntil(
        'vm-root',
        (rootEl) => {
            utils.checkPageChanges(rootEl, initVariation);
        }
    );
})(window)
}, "dependencies": []}, {"id": "B485FF7A-CD39-48EB-8F44-C9D38FC35895", "type": "append", "selector": "head", "value": "<style>.CSCRO-2459 [data-cy=\"communication-format__footer\"]{\n    display: none;\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "5958375886815232", "endOfRange": 10000}], "name": "[100%] CSCRO-2459 100% Alternative Comms Question Copy", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5904886817095680"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5098431635521536"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6180114663211008", "name": "[100%][no-track]CSCRO-2476 Switch 5 times", "commitId": "5038304318455808", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5564159629197312", "integrationSettings": null, "variations": [{"id": "5686399582601216", "name": "Original", "actions": []}, {"id": "6201697142308864", "name": "Variation #1", "actions": [{"viewId": "6565574925352960", "changes": [{"id": "7C1553FB-5A59-4239-9A26-EFCF8CF88E2D", "type": "custom_code", "value": function($){(function (window, document) {
    'use strict';
    const storyName = "CSCRO-2476";
    const experimentId = "5564159629197312";
    let initialHideDone = false;
    let initialHiddenSpeeds = [];

    let $timerA = window.setInterval(function () {
        let subject = document.querySelector("body");

       
        // Only proceed if subject is found in DOM
        if (subject) {
            window.clearInterval($timerA);

            try {
                console.log('Variant START -', storyName)
                document.documentElement.classList.add(storyName);
                if(!localStorage.getItem('onlinesales-df-002')) localStorage.setItem('onlinesales-df-002','true');
            }
            catch (error) {
                console.log(`${storyName} Error: ${error}`);
                sales_cro.fireGA4(experimentId, storyName, "error", `Error: ${error}`);
                document.documentElement.classList.add(storyName + "-error");
            }
        }
    }, 500);
    setTimeout(function () {
        if ($timerA !== null) {
            clearInterval($timerA);
            if (typeof error === 'function') {
                error();
            }
        }
    }, 20000);
}(window, document));
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "6201697142308864", "endOfRange": 10000}], "name": "[100%][no-track]CSCRO-2476 Switch 5 times", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6180114663211008"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6565574925352960"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": [{"id": "E35F05F6-306D-444F-AC30-D8F762642A28", "type": "custom_code", "value": function($){console.log("in 2465 shared")
}, "dependencies": []}], "id": "6180789677719552", "name": "[100%]CSCRO-2465 Vertex DMCCA", "commitId": "6552645261852672", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4748078714978304", "integrationSettings": null, "variations": [{"id": "5559302809714688", "name": "Original", "actions": []}, {"id": "6424276071350272", "name": "Variation #1", "actions": [{"viewId": "5097976345919488", "changes": [{"id": "97822BDF-2C4C-4152-92C7-AA9887B077A2", "type": "custom_code", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subjectSelectorArray = ["[class*=VertexSearch_portal] [class*=VertexSearch_content]"],
            subjectRemainingToLoad = subjectSelectorArray.filter(subject=>{return document.querySelectorAll(subject).length===0}).length==0,
            sales_cro = window.sales_cro, 
            optimzly = window.optimizely,
            debug = false,
            vertexCardObserver,
            vertexCardNodes,
            vertexCardObserverConfig = { childList: true, subtree: true };

            const experimentId = "4748078714978304", storyNumber = "CSCRO-2465", 
            contractLengthMap = {
                9300 : 12,
                5300 : 12,
                9303 : 12,
                5303 : 12,
                9316 : 12,
                5316 : 12,
                9171 : 30,
                4860 : 30,
                4861 : 30,
                4862 : 30
            },
            modalHtml = `<div><div type="button" data-testid="modal-backdrop" class="_modal__backdrop_v1bh6_64" aria-hidden="true"></div><div class="_background--primary_zan7n_5 _background--relative_zan7n_140 _block_1wp42_1 _block--overflow-visible_1wp42_16 _block--width-fit-content_1wp42_32 _block--height-auto_1wp42_52 _flex_13vdb_1 _flex--column_13vdb_13 _box_qo0qh_1 _box--border_qo0qh_10 _modal_v1bh6_1" data-role="box" role="dialog" aria-modal="true" aria-label="modal" data-status="open" style="--border-radius: var(--border-radius-s); --height: auto; --width: fit-content;"><div class="_block_1wp42_1 _block--overflow-visible_1wp42_16 _block--width-auto_1wp42_28 _block--height-auto_1wp42_52 _flex_13vdb_1 _flex--row_13vdb_5 _flex--justify-between_13vdb_33 _flex--align-center_13vdb_53 _flex--gap-md_13vdb_69 _modal__header_v1bh6_35" style="--padding: var(--padding-m) 0; --margin: 0 var(--padding-m); --height: auto; --width: auto;"><h3 class="_type_rhfq_1 _type--color-inherit_rhfq_146 _type--size-T400_rhfq_65 _type--weight-regular_rhfq_84" id="modal-title" data-cy="modal-title" data-cs-override-id="modal-title-Ri56av5ubtb0">14-day cancellation rights</h3><button aria-label="Close modal" type="button" class="_modal__close-button_v1bh6_48" tabindex="0"><span class="_modal--visually-hidden_v1bh6_23">Close</span><span class="_icon_1gqbn_1 _icon--ratio-075_1gqbn_21 _icon--size-md_1gqbn_49" data-testid="icon-container"><span class="_icon__host_1gqbn_80" style="--icon-gradient-url: url(#_r_t_);"><svg data-testid="icon" data-name="FarXmark" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"></path></svg></span></span></button></div><div class="_background--relative_zan7n_140 _block_1wp42_1 _block--overflow-auto_1wp42_24 _block--width-auto_1wp42_28 _block--height-auto_1wp42_52 products-modal_modal-text__Xqv6L" data-cy="modal-content" data-cs-override-id="modal-content-Ri56av5ubtb1" style="--padding: var(--padding-m); --height: auto; --width: auto;"><div class="price_cancellation-info__AqIDG"><p>If you enter into a new consumer contract with us online, by email or by phone, you have a legal right under the Consumer Contracts Regulations to cancel the service within 14 days, for any reason and without paying any early cancellation charges.&nbsp;</p><p>A new consumer contract may arise, for example, where you:</p><ul><li><p>take out a new broadband, TV or phone service; or</p></li><li><p>add a new TV package or subscription mid‑term that creates a separate contractual commitment.</p><p></p></li></ul><p>The 14-day cooling-off period would normally start the day after the contract is entered into. For Virgin Media services, we apply a more generous 14-day cooling-off period. Your 14-day cooling-off period will start from the latest of the following events:</p><ol><li><p>the day after any Virgin Media equipment is delivered;</p></li><li><p>the Virgin Media service start date; and</p></li><li><p>the day on which you receive a copy of the Virgin Media terms and conditions relating to that service.</p><p></p></li></ol><p>This means you may have longer than the statutory minimum to decide whether to cancel.</p><p><b>Please note - by placing your order, you’re asking us to start providing your Virgin Media services as soon as possible, even if this is within your 14-day cooling-off period. You can still cancel during this period, but you may need to pay for any services we’ve already provided. If you keep other Virgin Media services, any discounts, offers or benefits linked to the cancelled service may no longer apply.</b></p><p><b><u>Other ways to cancel</u></b></p><p>Unless stated otherwise, you can cancel your contract at any time by giving us 30 days’ notice. If you cancel during your minimum term (which is usually 24 months for broadband, although you can find out details specific to your contract in your Contract Information and Contract Summary forms), an early disconnection fee may apply. After your minimum term ends, your contract will continue on a rolling monthly basis and you can cancel at any time without paying any early disconnection fees." </p><p>For details of all your rights and access to your contracts in other circumstances, including how to cancel your services, please refer to the latest Virgin Media terms and conditions (found here: <a target="_self" href="https://www.virginmedia.com/legal">https://www.virginmedia.com/legal</a>) or go to our help page (found here: <a target="_self" href="https://www.virginmedia.com/help/leaving">https://www.virginmedia.com/help/leaving</a>) </p></div><div class="_flex_13vdb_1 _flex--row_13vdb_5 _flex--justify-center_13vdb_29 _flex--align-center_13vdb_53"><button aria-label="Close modal" type="button" class="_modal__close-button_v1bh6_48 products-modal_modal-button__77tU9" tabindex="0" data-cy="modal-close-button" data-cs-override-id="modal-close-button-Ri56av5ubtb2">Ok</button></div></div></div></div>`,
            variant = ()=>{
                if (vertexCardObserver) {
                    vertexCardObserver.disconnect();
                }
                document.querySelector("html").removeAttribute("data-cscro2252-byo");
                document.querySelector("html").classList.remove("CSCRO-2252");
                document.querySelector("html").classList.remove("CSCRO-2252-v1");


                document.querySelectorAll("[data-cy='vertex-search-product-card']").forEach((vertexCard)=>{

                    //Add contract length element
                    const priceEl = vertexCard.querySelector("[class*=VertexSearchProductCard_pricing-info] > [class*=VertexSearchProductCard_price]");
                    if (!priceEl || priceEl.nextElementSibling && priceEl.nextElementSibling.classList.contains(storyNumber + "-contract-length")) {
                        return;
                    }
                    let cardID = vertexCard.getAttribute("data-product-id");
                    let contractLength = "24 month contract";
                    if (Object.prototype.hasOwnProperty.call(contractLengthMap, cardID)) {
                        contractLength = contractLengthMap[cardID] == 12 ? "12 month contract" : "30 day contract";
                    }
                    const contractLengthNode = document.createElement("div");
                    contractLengthNode.className = storyNumber + "-contract-length";
                    contractLengthNode.innerHTML = contractLength;
                    priceEl.insertAdjacentElement("afterend", contractLengthNode);

                    //Add Cancellation rights element
                    const cancellationRightsEl = document.querySelector("[data-cy='cancellation-info-link']");
                    const cancellationRightsNode = cancellationRightsEl.cloneNode(true);

                    cancellationRightsNode.className = storyNumber + "-cancellation-rights";
                    vertexCard.querySelector("."+storyNumber + "-contract-length").insertAdjacentElement("afterend",cancellationRightsNode);

                    vertexCard.querySelector("."+storyNumber+"-cancellation-rights").addEventListener("click",()=>{
                        log("vertex cancellation link clicked")
                        sales_cro.fireGA4(experimentId,storyNumber,"click","2465_cancellation");
                        sales_cro.fireOpti("2465_cancellation");

                        const containerDiv = document.createElement('div');
                        containerDiv.classList.add("cro-cancellation-modal");
                        containerDiv.setAttribute("data-focus-lock-disabled","false");
                        containerDiv.innerHTML = modalHtml;

                        document.querySelector("body").appendChild(containerDiv);

                        document.querySelectorAll(".cro-cancellation-modal button[class*=_modal__close-button],.cro-cancellation-modal [data-testid=modal-backdrop]").forEach((el)=>{
                            el. addEventListener("click",()=>{
                                document.querySelector(".cro-cancellation-modal").remove();
                            })
                        })
                       
                        /*
                        document.querySelector("div:not(.cro-mask.cro-hp-products)> [class*=vm-bundles-grid_grid-container_] [data-cy='cancellation-info-link'] button").click();
                        optimzly.get("utils").waitForElement("[class*=_modal__backdrop]").then(()=>{

                            document.querySelector("[class*=VertexSearch_content]").style.zIndex=1111111111;
                            document.querySelector("[class*=VertexSearch_backdrop]").style.zIndex=111111111;
                         //   document.querySelector("[class*=header-gradient_header-gradient]").style.zIndex=1;
                         //   document.querySelector("[class*=header_header-exposed]").style.zIndex=1;
                            document.querySelector("div[data-role=box][role=dialog][aria-label=modal]").style.zIndex="9999999999";
                            document.querySelector("[class*=_modal__backdrop]").style.zIndex="9999999999";
                            if(window.location.pathname == "/"){
                                let closestSection = document.querySelector("[class*=_modal__backdrop]").closest("div[class*=_section__content]");
                                let closestDiv = document.querySelector("[class*=_modal__backdrop]").closest("div[data-focus-lock-disabled=false]");
                                closestSection.prepend(closestDiv)

                                closestSection.querySelector("div[data-focus-lock-disabled=false] button[class*=_modal__close-button").addEventListener("click",(e)=>{
                                    e.preventDefault();
                                    document.querySelector("div[data-focus-lock-disabled=false]").remove();
                                })
                            }                            

                        })*/
                    })

                });

                if (vertexCardObserver && vertexCardNodes) {
                    vertexCardObserver.observe(vertexCardNodes, vertexCardObserverConfig);
                }
            },
            log = (msg) => {                
                if(debug) console.log( msg);
            }  ;
            
        // Only proceed if subject is found in DOM
        if( subjectRemainingToLoad && sales_cro && typeof $ == "function" && optimzly) {
            window.clearInterval($timerA);
            try{
                document.body.classList.add(storyNumber);
                console.log("in "+storyNumber);
                variant();

                //Start observing vertex cards
                vertexCardNodes = document.querySelector("[class*=VertexSearch_portal] [class*=VertexSearch_content]");

                const vertexCardObserverCallback = function(mutationsList, observer) {
                    for(const mutation of mutationsList) {
                        log(mutation.target.classList)                       
                        log("in mutation")
                        variant();
                    }
                };
                vertexCardObserver = window.registerMO(storyNumber, new MutationObserver(vertexCardObserverCallback));
                vertexCardObserver.observe(vertexCardNodes, vertexCardObserverConfig);

            }
            catch(error){
                console.log(`${storyNumber} Error: ${error}`);
                window.sales_cro.fireGA4(experimentId,storyNumber,"error",`Error: ${error}`);
                document.documentElement.classList.add(storyNumber+" - error");
            }
        }
    }, 500);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);
}(window, document));
}, "dependencies": []}, {"id": "BFD508F8-CFBD-48F6-8859-5CC2579367E9", "type": "append", "selector": "head", "value": "<style>.CSCRO-2465 .cro-cancellation-modal [aria-label=modal]{\n    width: fit-content;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    box-sizing: border-box;\n    position: fixed;\n    border: 1px solid var(--color-surface-outline);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 9999999999;\n    animation: _modalFadeIn_v1bh6_1 var(--mo-animation-duration-fast, .15s) forwards var(--mo-animation-timing);\n    max-width: calc(100vw - var(--padding-m) * 2);\n    max-height: 80vh;\n    --scrollbar-width : 0px;\n}\n\n@media (max-width: 48em) {\n    .CSCRO-2465 .cro-cancellation-modal [aria-label=modal]{\n        width: 100%;\n        max-height: 88vh;\n\n    }\n}\n\n.CSCRO-2465 .cro-cancellation-modal [data-testid=\"modal-backdrop\"] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: #000000bf;\n    z-index: 9999999999;\n    animation: _backdropFadeIn_v1bh6_1 var(--mo-animation-duration-fast, .15s) var(--mo-animation-timing);\n    border: 0;\n    padding: 0;\n    appearance: none;\n}\n\n.CSCRO-2465 .cro-cancellation-modal [aria-label=modal] [class*=_block]{\n    --margin: 0;\n    --border-radius: 0;\n    padding: var(--padding, 0);\n    margin: var(--margin, 0);\n    border-radius: var(--border-radius, 0);\n    overflow: auto;\n    width: auto;\n    height: auto;\n}\n\n\n.CSCRO-2465 .cro-cancellation-modal [aria-label=modal] [class*=modal__header]{\n    position: relative;\n    overflow: visible;\n    width: auto;\n    height: auto;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--padding-m, 16px);\n}\n.CSCRO-2465 .cro-cancellation-modal [aria-label=modal] [class*=modal__header]::after{\n    box-sizing: border-box;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    top: unset;\n    border-bottom: 1px solid;\n    opacity: .4;\n}\n\n.CSCRO-2465 .cro-cancellation-modal [aria-label=modal] [class*=modal__header] h3{\n    font-weight: var(--override-font-weight, var(--font-weight-regular));\n    font-size: var(--override-font-size, var(--font-size-400));\n    line-height: var(--override-line-height, var(--line-height-400));\n    font-family: var(--mo-font-family);\n    font-weight: var(--font-weight-regular);\n    padding: 0;\n    margin: 0;\n}\n\n.CSCRO-2465 .cro-cancellation-modal [aria-label=modal] [class*=modal__header] button{\n    box-sizing: border-box;\n    background: transparent;\n    color: inherit;\n    border: 0;\n    padding: 0;\n    margin: 0;\n    cursor: pointer;\n\n    \n}\n\n.CSCRO-2465 .cro-cancellation-modal [aria-label=modal] [class*=modal__header] button [class*=modal--visually-hidden]{\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: auto;\n    margin: 0;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n.CSCRO-2465 .cro-cancellation-modal [aria-label=modal] [class*=modal__header] button [class*=_icon]{\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    aspect-ratio: 1;\n    box-sizing: content-box;\n    vertical-align: middle;\n    width: 1em;\n    width: var(--icon-size);\n    height: 1em;\n    height: var(--icon-size);\n    font-size: calc(1em * var(--icon-ratio));\n    font-size: calc(var(--icon-size) * var(--icon-ratio));\n    --icon-ratio: .75;\n    --icon-size: 1.5rem;\n}\n\n\n.CSCRO-2465 .cro-cancellation-modal [aria-label=modal] [class*=price_cancellation-info]>p {\n    padding-bottom: var(--space-between-s);\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "6424276071350272", "endOfRange": 10000}], "name": "[100%]CSCRO-2465 Vertex DMCCA", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6180789677719552"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5097976345919488"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6232109380009984", "name": "[no-track][100%] CSCRO-2240 Hide Add an O2 SIM page for customise journey", "commitId": "5427278880964608", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "4714695303626752"], "audienceName": "GCP Customise CTA Journey", "changes": null, "id": "6259892181270528", "integrationSettings": null, "variations": [{"id": "4861266481643520", "name": "Original", "actions": [{"viewId": "29783000371", "changes": []}]}, {"id": "4921134685093888", "name": "Variation #1", "actions": [{"viewId": "29783000371", "changes": [{"id": "647ba379e7a043bc8fdf45f0e19c6af2", "type": "custom_code", "value": function($){(function (window, document) {
    'use strict';
    const storyName = "CSCRO-2240";
    const experimentId = "6259892181270528";
    let initialHideDone = false;
    let initialHiddenSpeeds = [];

    let $timerA = window.setInterval(function () {
        let subject = document.querySelector("body");

       
        // Only proceed if subject is found in DOM
        if (subject) {
            window.clearInterval($timerA);

            try {
                console.log('Variant START -', storyName)
                document.documentElement.classList.add(storyName);
                if(!localStorage.getItem('onlinesales-df-001')) localStorage.setItem('onlinesales-df-001','true');
            }
            catch (error) {
                console.log(`${storyName} Error: ${error}`);
                sales_cro.fireGA4(experimentId, storyName, "error", `Error: ${error}`);
                document.documentElement.classList.add(storyName + "-error");
            }
        }
    }, 500);
    setTimeout(function () {
        if ($timerA !== null) {
            clearInterval($timerA);
            if (typeof error === 'function') {
                error();
            }
        }
    }, 20000);
}(window, document));
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "4921134685093888", "endOfRange": 10000}], "name": "[no-track][100%] CSCRO-2240 Hide Add an O2 SIM page for customise journey", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6232109380009984"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["29783000371"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6478944740835328", "name": "[LIVE][A/B]CSCRO-2293 Early Life - Onboarding App Fake Door", "commitId": "4758810003243008", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4549411892625408", "integrationSettings": null, "variations": [{"id": "6036726284550144", "name": "Original", "actions": []}, {"id": "4873228334661632", "name": "Variation #1", "actions": [{"viewId": "5915994787414016", "changes": [{"id": "A0003757-7871-4E4F-9D67-54B8699B8EF9", "type": "custom_code", "value": function($){(() => {
    "use strict";
    const withTryCatchHandleError = (testId, fireGA) => {
        return childFunction => {
            return function() {
                try {
                    return childFunction.apply(this, arguments);
                } catch (error) {
                    console.log(`${testId} Error: ${error}`, `${testId} Stack: ${error.stack}`);
                    document.documentElement.classList.add(`${testId}-error`);
                    fireGA(`error`, `${error}`);
                }
            };
        };
    };
    const testId = "CRO-3843", experimentId = "4549411892625408", fireGA = (eventName, eventValue) => {
        if (sales_cro && "function" === typeof sales_cro.fireGA4) sales_cro.fireGA4(experimentId, testId, eventName, eventValue);
    }, utils = window["optimizely"].get("utils"), safeFunction = withTryCatchHandleError(testId, fireGA), variationName = "Variation #1";
    (() => {
        const handleBannerBtnClick = safeFunction(() => {
            const modal = document.createElement("div");
            modal.classList.add("cro-modal-container");
            modal.innerHTML = `
        <div class="cro-modal-background">
  <div class="cro-modal-margin">
    <div class="cro-modal">
      <div class="cro-modal-header">
        <p class="cro-modal-close">
          <img
            src="https://cdn.optimizely.com/img/22744560884/9467abcea12b46ac8333d3524914599a.svg"
            alt="Close modal"
          />
        </p>
      </div>
      <div class="cro-modal-body rating-view no-padding">
        <div class="modal-header">
          <p class="modal-title">We're here to make setup smooth</p>
          <p class="modal-text">
            Our new onboarding experience will ensure that you're supported
            through every step from order to setup.
          </p>
        </div>

        <div class="features">
          <div class="feature-card">
            <div class="icon">
              <img
                src="https://cdn.optimizely.com/img/22744560884/0c43ea8fd63548e7a8b6e6545cbf0c5c.svg"
                alt="Check your home sockets are ready"
              />
            </div>
            <p>Check your home sockets are ready</p>
          </div>
          <div class="feature-card">
            <div class="icon">
              <img
                src="https://cdn.optimizely.com/img/22744560884/ba1d1d748676447fa45d58a12b24392d.svg"
                alt="Track your order every step of the way"
              />
            </div>
            <p>Track your order every step of the way</p>
          </div>
          <div class="feature-card">
            <div class="icon">
              <img
                src="https://cdn.optimizely.com/img/22744560884/2785f9ba377649d786d28a5f1587f7cc.svg"
                alt="Follow guides to resolve problems"
              />
            </div>
            <p>Follow guides to resolve problems</p>
          </div>
        </div>

        <div class="feedback">
          <p>How appealing would an onboarding app be to you?</p>

          <div class="rating-group">
            <img
              id="1"
              class="radio-btn"
              alt="radio button for rating"
              src="https://cdn.optimizely.com/img/22744560884/99dbdab9c9134034997304e7bc64e86d.svg"
            />
            <img
              id="2"
              class="radio-btn"
              alt="radio button for rating"
              src="https://cdn.optimizely.com/img/22744560884/99dbdab9c9134034997304e7bc64e86d.svg"
            />
            <img
              id="3"
              class="radio-btn"
              alt="radio button for rating"
              src="https://cdn.optimizely.com/img/22744560884/99dbdab9c9134034997304e7bc64e86d.svg"
            />
            <img
              id="4"
              class="radio-btn"
              alt="radio button for rating"
              src="https://cdn.optimizely.com/img/22744560884/99dbdab9c9134034997304e7bc64e86d.svg"
            />
            <img
              id="5"
              class="radio-btn"
              alt="radio button for rating"
              src="https://cdn.optimizely.com/img/22744560884/99dbdab9c9134034997304e7bc64e86d.svg"
            />
          </div>

          <div class="rating-labels">
            <p>Not useful at all</p>
            <p>Very useful</p>
          </div>

          <button class="primary-standard submit-btn cro-hide">
            <span>Send feedback</span>
          </button>
        </div>
      </div>

      <div class="cro-modal-body submit-view cro-hide">
        <div class="modal-header">
          <p class="modal-title">Sorry, this app isn’t available just yet!</p>
          <p class="modal-text">
            We’re working on adding new features in the future and your feedback
            helps.
          </p>
        </div>
        <div class="thankyou"><p>Thank you for your patience</p></div>
        <button class="primary-standard close-btn">
          <span>Close</span>
        </button>
      </div>
    </div>
  </div>
</div>
    `;
            const removeCheckForAll = safeFunction(() => {
                const ratingGroup = modal.querySelectorAll(".rating-group img");
                ratingGroup && ratingGroup.length > 0 && ratingGroup.forEach(ele => {
                    ele.src = "https://cdn.optimizely.com/img/22744560884/99dbdab9c9134034997304e7bc64e86d.svg";
                    ele.classList.remove("checked");
                });
            }), changeModalView = safeFunction(() => {
                const ratingView = modal.querySelector(".rating-view"), submitView = modal.querySelector(".submit-view");
                ratingView && ratingView.classList.add("cro-hide");
                submitView && submitView.classList.remove("cro-hide");
                fireGA("info", "Thanks modal loaded");
            }), modalCloseButton = modal.querySelector(".cro-modal-close"), closeButton = (modalCloseButton && modalCloseButton.addEventListener("click", () => {
                const view = modal.querySelectorAll(".cro-modal-body"), activeView = view && view.length > 0 && Array.from(view).find(x => !x.classList.contains("cro-hide")), viewName = activeView && activeView.classList.contains("submit-view") ? "Thanks modal" : "Question modal";
                fireGA("click", `X - ${viewName}`);
                modal.remove();
            }), modal.querySelector(".close-btn")), ratingGroup = (closeButton && closeButton.addEventListener("click", () => {
                fireGA("click", `Close`);
                modal.remove();
            }), modal.querySelectorAll(".rating-group img")), submitBtn = (ratingGroup && ratingGroup.length > 0 && ratingGroup.forEach(ele => {
                ele.addEventListener("click", () => {
                    fireGA("click", `rating - ${ele.id}`);
                    removeCheckForAll();
                    ele.classList.add("checked");
                    ele.src = "https://cdn.optimizely.com/img/22744560884/56fec577b0314983b29874bf9a7e7242.svg";
                    submitBtn && submitBtn.classList.remove("cro-hide");
                });
            }), modal.querySelector(".submit-btn"));
            submitBtn && submitBtn.addEventListener("click", () => {
                window.localStorage.setItem("feedback-sent", "true");
                const checkedRating = ratingGroup && ratingGroup.length > 0 && Array.from(ratingGroup).find(ele => ele.classList.contains("checked")), ratingValue = checkedRating && checkedRating.id;
                fireGA("click", `Send feedback - rating ${ratingValue}`);
                hideBannerBtn();
                changeModalView();
            });
            fireGA("info", `Question modal loaded`);
            document.body.appendChild(modal);
        }), hideBannerBtn = safeFunction(() => {
            "true" === window.localStorage.getItem("feedback-sent") && utils.waitForElement(".onboarding-app-banner .banner-btn").then(ele => {
                ele.classList.add("cro-hide");
            });
        }), run = safeFunction(() => {
            document.documentElement.classList.add(testId);
            utils.waitForElement("vm-refer-friend-section").then(ele => {
                if (document.querySelector(".onboarding-app-banner")) return;
                fireGA(variationName, `active`);
                const banner = document.createElement("section");
                banner.classList.add("onboarding-app-banner");
                banner.setAttribute("aria-label", "Onboarding app");
                banner.innerHTML = `
        <img src="https://cdn.optimizely.com/img/22744560884/0690cadf280c4a7385f5e8014ac8c816.svg" alt="Decorative flare" class="flare flare-left">
        <img src="https://cdn.optimizely.com/img/22744560884/695d21dfc59940b3992c592ed5ca944f.svg" alt="Decorative flare" class="flare flare-mob-left">
        <img src="https://cdn.optimizely.com/img/22744560884/49165d3728bd484e9215a01df80bc109.svg" alt="Decorative flare" class="flare flare-right">
        <img src="https://cdn.optimizely.com/img/22744560884/edb22fb4e2354fbda25c6a67f4fd0c86.svg" alt="Decorative circle flare" class="flare flare-circle-left">
        <img src="https://cdn.optimizely.com/img/22744560884/1b20c65f5fee46e68838b7a97d8c1a2d.svg" alt="Decorative circle flare" class="flare flare-circle-right">

        <div class="banner-content">
          <div class="image-section">
            <img
              src="https://cdn.optimizely.com/img/22744560884/44b5b3562fe44b328227a99d5112594d.png"
              alt="Phone displaying the My Broadband Setup app"
            />
          </div>
          <div class="text-section">
            <p class="banner-title">Setup fast using our onboarding app</p>
            <p class="banner-text">
              Discover how to best prepare your home, track your order and learn how
              to setup your new equipment
            </p>
            <button class="banner-btn"><span>Learn more</span></button>
          </div>
        </div>
      `;
                const bannerBtn = banner.querySelector(".banner-btn");
                bannerBtn.addEventListener("click", () => {
                    fireGA("click", "Learn more");
                    handleBannerBtnClick();
                });
                ele.insertAdjacentElement("beforebegin", banner);
            });
        });
        let urlObserver, disconnectObserver;
        disconnectObserver = utils.observeSelector("vm-refer-friend-section", ele => {
            run();
            hideBannerBtn();
        });
        urlObserver = utils.onUrlChange(() => {
            if ("/buy/blast-off" === window.location.pathname) return;
            if ("function" === typeof disconnectObserver) disconnectObserver();
            if ("function" === typeof urlObserver) urlObserver();
        });
    })();
})();
}, "dependencies": []}, {"id": "C71BB8ED-5C07-43AC-8B0E-79542770F009", "type": "append", "selector": "head", "value": "<style>.CRO-3843 .cro-hide{display:none !important}.CRO-3843 .no-border{border:none !important}.CRO-3843 .no-border-bottom{border-bottom:none !important}.CRO-3843 .onboarding-app-banner{position:relative;background-color:#fff;border-radius:16px;padding:16px;box-shadow:0 8px 25px rgba(0,0,0,.1);overflow:hidden;max-width:980px;width:100%;padding-bottom:0}.CRO-3843 .banner-content{display:flex;flex-direction:row;align-items:center;position:relative;z-index:2}.CRO-3843 .image-section{flex:1 1 40%;text-align:end;align-self:end;margin-bottom:-4px}.CRO-3843 .image-section img{width:200px;height:auto}.CRO-3843 .text-section{flex:1 1 60%;display:flex;flex-direction:column;align-items:flex-start;gap:16px;margin-bottom:8px}.CRO-3843 .banner-title,.CRO-3843 .banner-text{margin:0;color:#000}.CRO-3843 .banner-title{font-family:\"VMMomentum\",Arial,Helvetica,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;font-size:20px;font-weight:900;line-height:1}.CRO-3843 .banner-text{max-width:347px;font-family:\"VMMomentum\",Arial,Helvetica,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;font-size:13px;font-weight:450;line-height:100%}.CRO-3843 .banner-btn{padding:8px 32px;height:48px;border-radius:32px;display:flex;align-items:center;justify-content:center;border:2px solid #ed0000;cursor:pointer;background:#ed0000;width:fit-content;min-width:230px;text-decoration:none}@media screen and (max-width: 767px){.CRO-3843 .banner-btn{width:100%}}.CRO-3843 .banner-btn span{font-size:16px;line-height:24px;font-weight:700;color:#fff;font-family:VMCircularChatPTT,Arial,Helvetica,sans-serif}.CRO-3843 .banner-btn{width:160px;min-width:160px;padding:8px 32px}.CRO-3843 .banner-btn span{font-family:\"VMMomentum\",Arial,Helvetica,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem}@media screen and (max-width: 767px){.CRO-3843 .banner-btn{width:160px}}.CRO-3843 .flare{position:absolute;z-index:1;opacity:.9;pointer-events:none}.CRO-3843 .flare-left{width:280px;top:0;left:0}.CRO-3843 .flare-mob-left{display:none}.CRO-3843 .flare-right{width:230px;bottom:0;right:-70px}.CRO-3843 .flare-circle-left{width:70px;left:3%;top:0;opacity:1}.CRO-3843 .flare-circle-right{width:37px;top:22px;right:62%}@media screen and (max-width: 500px){.CRO-3843 .banner-content{flex-direction:column;gap:1rem}.CRO-3843 .text-section{align-items:center;text-align:center;gap:1rem;margin-bottom:16px}.CRO-3843 .image-section{align-self:center}.CRO-3843 .text-section h2{font-size:2rem}.CRO-3843 .flare-left{display:none}.CRO-3843 .flare-mob-left{top:-4px;left:0;width:94%;display:block}.CRO-3843 .flare-right{width:250px;bottom:-90px;right:-100px}.CRO-3843 .flare-circle-left{width:50px;top:35%;left:89px;transform:rotate(90deg)}.CRO-3843 .flare-circle-right{width:45px;top:5%;right:105px}}.CRO-3843 .cro-modal-container{z-index:100}.CRO-3843 .cro-modal-container .cro-modal-background{position:fixed;z-index:999;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.7490196078)}.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin{max-width:700px;margin:auto;display:flex;align-items:center;justify-content:center;height:100%;padding:4rem;position:relative;overflow:hidden}@media screen and (max-width: 500px){.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin{max-width:45.75rem;padding:1rem}}.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin .cro-modal{position:relative;display:flex;flex-direction:column;align-items:flex-start;background-color:#fff;padding:1rem;border-radius:12px;max-height:75%;width:100%}.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin .cro-modal .cro-modal-header{padding-right:4px;display:flex;justify-content:end;position:relative;width:100%;background-color:#fff}.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin .cro-modal .cro-modal-header .cro-modal-close{display:block;width:1.5rem;height:1.5rem;color:#333;font-size:1.5rem;line-height:1.5rem;right:0;top:1rem;cursor:pointer}.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin .cro-modal .no-padding{padding-left:0 !important;padding-right:0 !important;padding-bottom:0 !important}.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin .cro-modal .cro-modal-body{overflow-y:auto;min-height:4.5rem;flex:1;width:100%}.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin .cro-modal .cro-modal-footer{border-top:#dbdbdb 1px solid;width:100%;align-items:center;justify-content:center;display:flex;position:relative;bottom:0;background-color:#fff;border-bottom-left-radius:8px;border-bottom-right-radius:8px}@media screen and (max-width: 500px){.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin .cro-modal .cro-modal-footer{flex-direction:column}}.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin .cro-modal .cro-modal-footer button{margin-top:1.5rem}.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin .cro-modal .cro-modal-footer button:last-of-type{margin-bottom:1.5rem}@media screen and (max-width: 500px){.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin .cro-modal .cro-modal-footer button{margin-top:1rem;margin-right:0}.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin .cro-modal .cro-modal-footer button:last-of-type{margin-bottom:1rem}}.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin .cro-modal button.primary-standard{padding:8px 32px;height:48px;border-radius:32px;display:flex;align-items:center;justify-content:center;border:2px solid #ed0000;cursor:pointer;background:#ed0000;width:fit-content;min-width:230px;text-decoration:none}@media screen and (max-width: 767px){.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin .cro-modal button.primary-standard{width:100%}}.CRO-3843 .cro-modal-container .cro-modal-background .cro-modal-margin .cro-modal button.primary-standard span{font-size:16px;line-height:24px;font-weight:700;color:#fff;font-family:VMCircularChatPTT,Arial,Helvetica,sans-serif}.CRO-3843 .modal-header{margin-top:1rem}.CRO-3843 .modal-header .modal-title{font-family:\"VMMomentum\",Arial,Helvetica,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;font-size:28px;font-weight:700;margin:0 0 16px 0;color:#333;text-align:center;line-height:2.5rem}.CRO-3843 .modal-header .modal-text{font-family:\"VMMomentum\",Arial,Helvetica,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;font-size:16px;font-weight:450;color:#676767;margin:0 auto 24px auto;max-width:450px;text-align:center;line-height:1.5}.CRO-3843 .features{display:flex;justify-content:space-between;gap:16px;margin-bottom:24px;margin-left:8px;margin-right:8px}@media screen and (max-width: 500px){.CRO-3843 .features{flex-direction:column;align-items:center}}.CRO-3843 .feature-card{flex:1;border:1px solid #dbdbdb;border-radius:4px;padding:8px 16px;text-align:center;background-color:#fff;box-shadow:4px 4px 12.1px 0px rgba(0,0,0,.1019607843);display:flex;flex-direction:column;gap:8px}@media screen and (max-width: 500px){.CRO-3843 .feature-card{width:80%}}.CRO-3843 .feature-card p{font-family:\"VMMomentum\",Arial,Helvetica,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;font-size:16px;color:#000;margin:0;font-weight:450}.CRO-3843 .feedback{border:1px solid #f2f2f2;padding:1rem;border-radius:8px;box-shadow:0px 4px 10.4px 0px rgba(0,0,0,.1019607843);display:flex;flex-direction:column;gap:10px}.CRO-3843 .feedback>p{font-family:\"VMMomentum\",Arial,Helvetica,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;font-size:16px;font-weight:500;color:#333;border-bottom:1px solid #dbdbdb;padding-bottom:1rem}.CRO-3843 .rating-group{display:flex;justify-content:space-between;margin:0 auto 0 auto;max-width:80%}.CRO-3843 .rating-group img{width:60px;height:60px;cursor:pointer}.CRO-3843 .rating-labels{font-family:\"VMMomentum\",Arial,Helvetica,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;justify-content:space-between;margin:0 auto;font-size:16px;color:#333;gap:5rem}.CRO-3843 .submit-btn{padding:8px 32px;height:48px;border-radius:32px;display:flex;align-items:center;justify-content:center;border:2px solid #ed0000;cursor:pointer;background:#ed0000;width:fit-content;min-width:230px;text-decoration:none}@media screen and (max-width: 767px){.CRO-3843 .submit-btn{width:100%}}.CRO-3843 .submit-btn span{font-size:16px;line-height:24px;font-weight:700;color:#fff;font-family:VMCircularChatPTT,Arial,Helvetica,sans-serif}.CRO-3843 .submit-btn{width:160px;min-width:160px;padding:8px 32px}.CRO-3843 .submit-btn span{font-family:\"VMMomentum\",Arial,Helvetica,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem}.CRO-3843 .submit-btn{margin:0 auto;margin-top:8px}.CRO-3843 .close-btn{width:100% !important;margin-top:24px}.CRO-3843 .thankyou{width:100%;padding:12px 16px;border-radius:4px;border:1px solid #ccc;background-color:#f8f8f8}.CRO-3843 .thankyou p{font-family:\"VMMomentum\",Arial,Helvetica,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#333;display:flex;justify-content:center}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "6036726284550144", "endOfRange": 5000}, {"entityId": "4873228334661632", "endOfRange": 10000}], "name": "[LIVE][A/B]CSCRO-2293 Early Life - Onboarding App Fake Door", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6478944740835328"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5915994787414016"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6677619635126272", "name": "[100%]CSCRO-2016 Switch link in mobile navigation - nextjs", "commitId": "5423276667699200", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "24661040520"], "audienceName": "Mobile only", "changes": null, "id": "4707547395915776", "integrationSettings": null, "variations": [{"id": "6026542623490048", "name": "Original", "actions": []}, {"id": "5866529959444480", "name": "Variation #1", "actions": [{"viewId": "4757193761751040", "changes": [{"id": "c29fda57c6bb4543ae4e0ac2d9a0dcd4", "type": "custom_code", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector("[class*=side-nav_sidenav__sections] > [class*=side-nav-section_sidenav__section]:nth-child(2) > ul > li:last-child"),
            $ = window.$,
            sales_cro = window.sales_cro,
            optimizely = window.optimizely;

            const experimentId = "4707547395915776", storyNumber = "CSCRO-2016";
            const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3654 5.94577C13.4783 3.21464 10.933 1.36571 8.06139 1.36647C7.71 1.35137 7.4329 1.0621 7.4329 0.710383C7.4329 0.358669 7.71 0.0693977 8.06139 0.0542934C11.4777 0.0544666 14.5108 2.24028 15.5917 5.48108C16.6726 8.72188 15.5589 12.2908 12.8267 14.3417L14.048 14.6627C14.3983 14.7551 14.6074 15.1139 14.5151 15.4642C14.4227 15.8145 14.0639 16.0236 13.7136 15.9313L11.0274 15.2225C10.72 15.1408 10.5156 14.8501 10.5428 14.5331L10.7887 11.6131C10.8153 11.2718 11.0995 11.0082 11.4418 11.0073C11.4608 11.0061 11.4798 11.0061 11.4987 11.0073C11.8594 11.0381 12.1268 11.3554 12.0961 11.7161L11.9555 13.3554C14.2795 11.6686 15.2525 8.6769 14.3654 5.94577ZM3.1701 1.66818L1.94879 1.34711C1.59614 1.25543 1.38458 0.895237 1.47626 0.542592C1.56793 0.189946 1.92813 -0.0216119 2.28077 0.0700619L4.96934 0.778857C5.27678 0.860608 5.48114 1.15131 5.45399 1.46827L5.20803 4.4028C5.17725 4.76381 4.85964 5.03151 4.49863 5.00073C4.13762 4.96995 3.86992 4.65234 3.9007 4.29133L4.04125 2.65201C1.71731 4.33882 0.744314 7.33052 1.63141 10.0616C2.51851 12.7928 5.06379 14.6417 7.93538 14.6409C8.28677 14.656 8.56387 14.9453 8.56387 15.297C8.56387 15.6488 8.28677 15.938 7.93538 15.9531C4.52041 15.9516 1.48911 13.7662 0.408458 10.5267C-0.672192 7.28725 0.439999 3.71966 3.1701 1.66818Z" fill="#ED0000"/>
</svg>`;
            
        // Only proceed if subject is found in DOM
        if(subject && sales_cro && typeof $ == "function") {
            window.clearInterval($timerA);
            try{
                $('body').addClass(storyNumber);
                console.log(`in ${storyNumber}`)

                if(!$(".menu-item-switch").length){
                     let clonedElement = $("[class*=side-nav_sidenav__sections] > [class*=side-nav-section_sidenav__section]:nth-child(2) > ul > li:last-child").clone().removeClass("cro-show-find-deal").addClass("menu-item-switch");
                    $("[class*=side-nav_sidenav__sections] > [class*=side-nav-section_sidenav__section]:nth-child(2) > ul > li:first-child").before(clonedElement);
                }
                
                
                    $(".menu-item-switch a").attr("href","#").removeClass("cro-hide-find-deal");
                    $(".menu-item-switch a span[class*=side-nav-panel_sidenav-panel__text]").text("Switch to us");
                    $(".menu-item-switch span[class*=_icon__host]").html(svgIcon);
                    
                    $(".menu-item-switch a").click((e)=>{
                        e.preventDefault();
                        sales_cro.fireGA4(experimentId,storyNumber,"click","switch to us")
                        document.location = "https://www.virginmedia.com/broadband/switch"
                    })
            }
            catch(error){
                console.log(`${storyNumber} Error: ${error}`);
                window.sales_cro.fireGA4(experimentId,storyNumber,"error",`Error: ${error}`);
                document.documentElement.classList.add(storyNumber+" - error");
            }          
           
        }

       
       
    }, 500);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);
}(window, document));
}, "dependencies": []}, {"id": "f27015e8c3e346a4bb9fb45108f4017b", "type": "append", "selector": "head", "value": "<style>.CSCRO-2016 .menu-item-switch a ,\n.CSCRO-2016 .menu-item-switch a *{\n    color: #ED0000!important;\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "5866529959444480", "endOfRange": 10000}], "name": "[100%]CSCRO-2016 Switch link in mobile navigation - nextjs", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6677619635126272"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["4757193761751040"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}], "groups": [], "audiences": [{"id": "23064800131", "name": "Journey: create-basket", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "var pageview = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"pageview\"});\nvar journey = pageview[0].page.journey;\nconsole.log(journey);\njourney==='create-basket';"}]]]}, {"id": "23197550032", "name": "optiqa = true", "conditions": ["and", ["or", ["or", {"match": "exact", "name": "optiqa", "type": "query", "value": "true"}], ["or", {"match": null, "name": null, "type": "code", "value": "window.sessionStorage.getItem('optiqa')!== undefined && window.sessionStorage.getItem('optiqa')== \"true\" "}], ["or", {"match": "exact", "name": "optiqa", "type": "cookies", "value": "true"}]]]}, {"id": "24661040520", "name": "Mobile only", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "device", "value": "iphone"}, {"match": null, "name": null, "type": "device", "value": "mobile"}]]]}, {"id": "29787670039", "name": "GCP journey : create-basket", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "var pageview = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"pageview\"});\nvar journey = pageview[0].page.journey;\nconsole.log(journey);\njourney==='create-basket';"}]]]}, {"id": "4579406786592768", "name": "2185 - product ids", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "let checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"ecom_event\"});\nif(checkoutEvent.length>0){\n    var productID = checkoutEvent[checkoutEvent.length-1].ecommerce.items[0].bundle_id;\n    productIdArray = [\"6139\", \"6626\", \"6181\", \"6694\", \"6224\", \"6762\", \"4684\", \"95306\", \"95501\", \"96314\", \"5001\", \"5502\"];\n    productIdArray.includes(productID)\n}\nelse false;"}]]]}, {"id": "4714695303626752", "name": "GCP Customise CTA Journey", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "let pageview = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"pageview\"});\nlet journey = pageview[0].page.journey;\nconsole.log(journey);\n\nlet ecom = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"ecom_event\"});\nlet basketSource = ecom[0].event_params.basket_source;\nconsole.log(basketSource);\njourney==='create-basket' && basketSource == \"plp_customise\";"}]]]}, {"id": "4721173056454656", "name": "GCP journey: quickCheckout", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "var pageview = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"pageview\"});\nvar journey = pageview[0].page.journey;\nconsole.log(journey);\njourney==='quickCheckout';"}]]]}, {"id": "4792873663594496", "name": "product 1010", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "let checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"ecom_event\"});\nif(checkoutEvent.length>0){\n    var productID = checkoutEvent[checkoutEvent.length-1].ecommerce.items[0].bundle_id;\n    productID==='1010' \n}\nelse false;"}]]]}, {"id": "4811655857569792", "name": "Not on Safari", "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": null, "type": "browser_version", "value": "safari"}]]]]}, {"id": "5179119351103488", "name": "Not on iphone", "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": null, "type": "device", "value": "iphone"}, {"match": null, "name": null, "type": "device", "value": "ipad"}]]]]}, {"id": "5303924979138560", "name": "Cookie consent [consentGroup]", "conditions": ["and", ["or", ["or", {"match": "substring", "name": "consentGroup", "type": "cookies", "value": "func:1"}]]]}, {"id": "6287211820220416", "name": "[2522] Product IDs 4302, 4301, 4009", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "let checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"ecom_event\"});\nif(checkoutEvent.length>0){\n    var productID = checkoutEvent[checkoutEvent.length-1].ecommerce.items[0].bundle_id;\n    productIdArray = ['4302', '4301', '4009'];\n    productIdArray.includes(productID)\n}\nelse false;"}]]]}, {"id": "6599250623070208", "name": "Existing O2 user with Volt product (No SIM)", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "var checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"ecom_event\"});\nvar pageviewEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"pageview\"});\nvar itemCategory = checkoutEvent[checkoutEvent.length-1].ecommerce.items[0].item_category3;\nvar itemName = checkoutEvent[checkoutEvent.length-1].ecommerce.items[0].item_name;\nvar isVoltWithoutSim = itemCategory.indexOf(\"sim\")==-1 || itemName.toLowerCase().indexOf(\"volt\")>-1;\n\nvar isExO2 = pageviewEvent[0].page.intent == \"existing o2\";\n\nisExO2 && isVoltWithoutSim;"}]]]}], "listTargetingKeys": [], "visitorAttributes": [], "visitorIdLocator": null, "integrationSettings": [], "views": [{"id": "25424090560", "category": "other", "apiName": "22886250866_gcp_review_basket_page__callback__userhasacceptedcoo", "name": "[GCP] Review basket page - callback - userHasAcceptedCookies [consentGroup]", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/your-basket"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
  var utils = window.optimizely.get('utils');
  const isCorrectLocation = window.location.href.indexOf("/buy/your-basket") > -1;

  utils.waitUntil(function() {
    if(isCorrectLocation){
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("consentGroup").indexOf("func:1") > -1;
          return functionalCookieHasBeenAccepted;
    }
    else{
      return true;
    }
  }).then(function(){
    activate();
  });
}
}, {"id": "25437860573", "category": "other", "apiName": "22886250866_gcp_review_basket_page__callback__ecom_event__userha", "name": "[GCP] Review basket page - callback - ecom event + pageview event + userHasAcceptedCookies [consentGroup]", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/your-basket"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
  var utils = window.optimizely.get('utils'); 
  let isCorrectLocation;
  utils.waitUntil(function() {
    isCorrectLocation = window.location.href.indexOf("/buy/your-basket") > -1 ;
    if(isCorrectLocation){
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("consentGroup").indexOf("func:1") > -1;
      let checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "ecom_event"}),
      pageviewEvent = dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "pageview"});
          return pageviewEvent.length > 0 && checkoutEvent.length > 0 && checkoutEvent[checkoutEvent.length-1].ecommerce.items.length>0 && functionalCookieHasBeenAccepted;
    }
    else{
      return true;
    }
  }).then(function(){
    //console.log("review basket page ecom callback active");
    activate();
  });
}
}, {"id": "26423360118", "category": "other", "apiName": "22886250866_black_friday_page__immediately", "name": "Black Friday page - immediately", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/black-friday-deals"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "26546980030", "category": "other", "apiName": "22886250866_gcp_payment_selection_page__callback__ecom_event__us", "name": "[GCP] Payment Selection page - callback - ecom event", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/payment-selection"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils'); 
    let isCorrectLocation;
    utils.waitUntil(function() {
      isCorrectLocation = window.location.pathname =="/buy/payment-selection";
      if(isCorrectLocation){
        let checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "ecom_event"});
            
        return checkoutEvent.length > 0 && checkoutEvent[checkoutEvent.length-1].ecommerce.items.length>0;
      }
      else{
        return true;
      }
    }).then(function(){
      activate();
    });
}
}, {"id": "29783000371", "category": "other", "apiName": "22886250866_gcp_speed_selection_page__callback__ecom_event__us_1", "name": "[GCP] Speed selection page - callback - ecom event + userHasAcceptedCookies [consentGroup]", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/speed-selection"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
  var utils = window.optimizely.get('utils'); 
  let isCorrectLocation;
  utils.waitUntil(function() {
    isCorrectLocation = window.location.href.indexOf("/buy/speed-selection") > -1 ;
    if(isCorrectLocation){
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("consentGroup").indexOf("func:1") > -1;
      let checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "ecom_event"});
          return checkoutEvent.length > 0 && checkoutEvent[checkoutEvent.length-1].ecommerce.items.length>0 && functionalCookieHasBeenAccepted;
    }
    else{
      return true;
    }
  }).then(function(){
    //console.log("speed selection page ecom callback active");
    activate();
  });
}
}, {"id": "4757193761751040", "category": "other", "apiName": "22886250866_url_targeting_for_copy_of_100cscro1809_switch_link_i", "name": "URL Targeting for [100%]CSCRO-2016 Switch link in mobile navigation - nextjs", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.virginmedia.com/broadband"}, {"match": "substring", "type": "url", "value": "https://www.virginmedia.com/tv"}, {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/landline"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "4777718642900992", "category": "other", "apiName": "22886250866_gcp_review_basket_page__callback__ecom_event", "name": "[GCP] Review basket page - callback - ecom event", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/your-basket"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils'); 
    let isCorrectLocation;
    utils.waitUntil(function() {
      isCorrectLocation = window.location.href.indexOf("/buy/your-basket") > -1 ;
      if(isCorrectLocation){
        let checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "ecom_event"});
            return checkoutEvent.length > 0 && checkoutEvent[checkoutEvent.length-1].ecommerce.items.length>0;
      }
      else{
        return true;
      }
    }).then(function(){
      //console.log("review basket page ecom callback active");
      activate();
    });
}
}, {"id": "4991726538981376", "category": "other", "apiName": "22886250866_url_targeting_for_copy_of_qanotrackabstats_accel_c_1", "name": "URL Targeting for [A/B][Stats Accel] CSCRO-2524 - Black Friday BB&TV creative", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/broadband/broadband-and-tv"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    void options;
    if (typeof activate !== "function") return;

    var utils = window.optimizely && window.optimizely.get && window.optimizely.get("utils");
    if (!utils || typeof utils.waitUntil !== "function") {
        activate();
        return;
    }

    utils
        .waitUntil(function () {
            return document.querySelector('[data-testid="hero-image"]');
        })
        .then(function () {
            activate();
        });
}
}, {"id": "5047442033868800", "category": "other", "apiName": "22886250866_gcp_success_page__url_changes", "name": "[GCP] Order success page - URL changes", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/blast-off"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "5049482862133248", "category": "other", "apiName": "22886250866_postsvcnextjs_broadband_sale_page__callback__product", "name": "[POST-SVC][nextjs] Broadband Sale page - callback + product cards loaded", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/sale"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
    const isCorrectLocation = window.location.href.indexOf("https://www.virginmedia.com/broadband/sale") > -1;
    utils.waitUntil(function() {
        if(isCorrectLocation){
            let domCondition = document.querySelectorAll("[class*='bundles-grid_grid-container']").length > 0;
            return domCondition;
        } else{
            return true;
        }
    }).then(function(){
        if(isCorrectLocation){
            utils.observeSelector("[data-role='card']", function(el) {
                activate();
                console.log("nextjs post svc page activated")
            }, {
            "timeout": 300000,
            "once": true,
            });
        }
    });
}
}, {"id": "5097976345919488", "category": "other", "apiName": "22886250866_url_targeting_for_qanotrack100cscro2465_vertex_dmcca", "name": "URL Targeting for [100%]CSCRO-2465 Vertex DMCCA", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.virginmedia.com/broadband"}, {"match": "substring", "type": "url", "value": "https://stg.red.vmo2digital.co.uk/broadband"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
    const isCorrectLocation = window.location.href.indexOf("/buy/") == -1;
    utils.waitUntil(function() {
        if(isCorrectLocation){
            let domCondition = document.querySelectorAll("[class*='bundles-grid_grid-container']").length > 0;
            return domCondition;
        } else{
            return true;
        }
    }).then(function(){
        if(isCorrectLocation){
            utils.observeSelector("[data-cy='product-card-horizontal']", function(el) {
                activate();
                console.log("nextjs post svc page activated")
            }, {
            "timeout": 300000,
            "once": true,
            });
        }
    });
}
}, {"id": "5098431635521536", "category": "other", "apiName": "22886250866_gcp_your_details_page__callback__ecom_event__userhas", "name": "[GCP] Your details page - callback - ecom event + userHasAcceptedCookies [consentGroup]", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/your-details"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils'); 
    let isCorrectLocation;
    utils.waitUntil(function() {
      isCorrectLocation = window.location.href.indexOf("/buy/your-details") > -1 ;
      if(isCorrectLocation){
        let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("consentGroup").indexOf("func:1") > -1;
        let checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "ecom_event"});
            return checkoutEvent.length > 0 && checkoutEvent[checkoutEvent.length-1].ecommerce.items.length>0 && functionalCookieHasBeenAccepted;
      }
      else{
        return true;
      }
    }).then(function(){
      activate();
    });
  }
}, {"id": "5296673644085248", "category": "other", "apiName": "22886250866_gcp_order_success_page__callback__ecom_event__cookie", "name": "[GCP] Order success page - callback - ecom event + cookies consent [consentGroup]", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/blast-off"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils'); 
    let isCorrectLocation;
    utils.waitUntil(function() {
      isCorrectLocation = window.location.href.indexOf("/buy/blast-off") > -1 ;
      if(isCorrectLocation){
        let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("consentGroup").indexOf("func:1") > -1;
        let checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "ecom_event"});
            return checkoutEvent.length > 0 && checkoutEvent[checkoutEvent.length-1].ecommerce.items.length>0 && functionalCookieHasBeenAccepted;
      }
      else{
            return true;
      }
    }).then(function(){
        activate();
    });
}
}, {"id": "5327977299312640", "category": "other", "apiName": "22886250866_url_targeting_for_copy_of_100_cscro1859_switch_bread", "name": "URL Targeting for [no-track][100%] CSCRO-1859 Switch Breadcrumb - nextjs", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/switch-cbo"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "5516809309257728", "category": "other", "apiName": "22886250866_url_targeting_for_qanotrackab_cscro2477__bf_overlay_", "name": "URL Targeting for [A/B] CSCRO-2477 - BF overlay vs toaster vs animation", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/cheap"}, {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/compare-deals"}, {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/tv/netflix"}, {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/fibre"}, {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/fibre/m100"}, {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/fibre/m200"}, {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/fibre/m350"}, {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/fibre/m500"}, {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/gaming"}, {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/no-upfront-cost"}, {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/gigabit"}, {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/speeds"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5559850269147136", "category": "other", "apiName": "22886250866_postsvcnextjs_broadband_only__callback__product_card", "name": "[POST-SVC][nextjs] Broadband only page - callback + product cards loaded", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/broadband-only"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
    const isCorrectLocation = window.location.href.indexOf("https://www.virginmedia.com/broadband/broadband-only") > -1;
    utils.waitUntil(function() {
        if(isCorrectLocation){
            let domCondition = document.querySelectorAll("[class*='bundles-grid_grid-container']").length > 0;
            return domCondition;
        } else{
            return true;
        }
    }).then(function(){
        if(isCorrectLocation){
            utils.observeSelector("[data-role='card']", function(el) {
                activate();
                console.log("nextjs post svc page activated")
            }, {
            "timeout": 300000,
            "once": true,
            });
        }
    });
}
}, {"id": "5561862308233216", "category": "other", "apiName": "22886250866_url_targeting_for_draftab_cscro2360__combined_instal", "name": "URL Targeting for [QA][no-track][A/B] CSCRO-2360 - Combined installation journey", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/your-basket"}, {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/installation"}, {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/installation/book-engineer"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    void options;
    var utils = window.optimizely.get("utils");
    utils.waitUntil(function () {
        var isCorrectLocation = window.location.href.indexOf("/buy/your-basket") > -1;
        if (isCorrectLocation) {
            var checkoutEvent = (window.dataLayer || []).filter(function (i) {
                if (i.event !== undefined) return i.event == "ecom_event";
            });
            var latest = checkoutEvent[checkoutEvent.length - 1];
            return (
                checkoutEvent.length > 0 &&
                latest.ecommerce &&
                latest.ecommerce.items &&
                latest.ecommerce.items.length > 0
            );
        }
        return true;
    }).then(function () {
        activate();
    });
}
}, {"id": "5698938490060800", "category": "other", "apiName": "22886250866_postsvcnextjs_broadband_deals_page__product_cards_lo", "name": "[POST-SVC][nextjs] Broadband deals page - callback + product cards loaded", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
    const isCorrectLocation = window.location.href.indexOf("https://www.virginmedia.com/broadband") > -1;
    utils.waitUntil(function() {
        if(isCorrectLocation){
            let domCondition = document.querySelectorAll("[class*='bundles-grid_grid-container']").length > 0;
            return domCondition;
        } else{
            return true;
        }
    }).then(function(){
        if(isCorrectLocation){
            utils.observeSelector("[data-cy='product-card-horizontal']", function(el) {
                activate();
                console.log("nextjs post svc page activated")
            }, {
            "timeout": 300000,
            "once": true,
            });
        }
    });
}
}, {"id": "5915994787414016", "category": "other", "apiName": "22886250866_url_targeting_for_liveabcro3843_early_life__onboardi", "name": "URL Targeting for [LIVE][A/B]CSCRO-2293 Early Life - Onboarding App Fake Door", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/blast-off"}]], "deactivationEnabled": true, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "6019604351287296", "category": "other", "apiName": "22886250866_gcp_installation__book_engineer_page__url_changes__c", "name": "[GCP] Installation + Book engineer page - URL Changes - Cookie consent [consentGroup]", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/installation/book-engineer"}, {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/installation"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  var functionalCookieHasBeenAccepted = window.sales_cro.getCookie("consentGroup").indexOf("func:1") > -1;
  return functionalCookieHasBeenAccepted;
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "6041522242584576", "category": "other", "apiName": "22886250866_url_targeting_for_copy_of_abbfcscro2024_your_order_i", "name": "URL Targeting for [A/B][BF]CSCRO-2496 Black Friday checkout timer", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.virginmedia.com/buy/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    const utils = window.optimizely.get("utils");
    const path = window.location.pathname;
    const pages = [
        "/buy/your-basket",
        "/buy/speed-selection",
        "/buy/add-o2-sim",
        "/buy/add-sim-details",
        "/buy/installation",
        "/buy/installation/book-engineer",
        "/buy/your-details",
        "/buy/switch-providers",
        "/buy/payment-selection",
        "/buy/payment",
        "/buy/credit-check",
 	      "/buy/direct-debit",
        "/buy/review-and-submit",
    ];

    if (!pages.includes(path)) return;

    utils
        .waitUntil(function () {
            let checkoutEvent = window.dataLayer.filter((i) => {
                if (i.event !== undefined) return i.event == "ecom_event";
            });

            return (
                checkoutEvent.length > 0 &&
                checkoutEvent[checkoutEvent.length - 1].ecommerce.items.length > 0
            );
        })
        .then(() => {
            if (pages.includes(path)) {
                activate();
            }
        });
}
}, {"id": "6105551386443776", "category": "other", "apiName": "22886250866_gcp_add_o2_sim_page_callback__ecom_event__no_cookie_", "name": "[GCP] Add O2 Sim page- callback - ecom event", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/add-o2-sim"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
      let isCorrectLocation = window.location.pathname === "/buy/add-o2-sim";
      utils.waitUntil(function() {
          if(isCorrectLocation){
              let domCondition = typeof window.getAllAngularRootElements === "function",
              checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "ecom_event"});
              return checkoutEvent.length > 0 && checkoutEvent[checkoutEvent.length-1].ecommerce.items.length>0 && domCondition;
          } else{
              return true;
          }
      }).then(function(){
          if(isCorrectLocation){
            activate();
          }
      });
    }
}, {"id": "6116865114636288", "category": "other", "apiName": "22886250866_post_svcnextjs_broadband__tv_page__callback__product", "name": "[POST SVC][nextjs] Black Friday deals page - callback + product cards loaded", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/black-friday-deals"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
    const isCorrectLocation = window.location.href.indexOf("https://www.virginmedia.com/broadband/black-friday-deals") > -1;
    utils.waitUntil(function() {
        if(isCorrectLocation){
            let domCondition = document.querySelectorAll("[class*='bundles-grid_grid-container']").length > 0;
            return domCondition;
        } else{
            return true;
        }
    }).then(function(){
        if(isCorrectLocation){
            utils.observeSelector("[data-role='card']", function(el) {
                activate();
                console.log("nextjs post svc page activated")
            }, {
            "timeout": 300000,
            "once": true,
            });
        }
    });
}
}, {"id": "6450020239540224", "category": "other", "apiName": "22886250866_url_targeting_for_qanotrackab_cscro2488_bf__hp_hero", "name": "URL Targeting for [A/B] CSCRO-2488 BF - HP Hero", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
    const isCorrectLocation = window.location.pathname == "/";
    utils.waitUntil(function() {
        if(isCorrectLocation){
            let domCondition = document.querySelectorAll("[class*='bundles-grid_grid-container']").length > 0;
            return domCondition;
        } else{
            return true;
        }
    }).then(function(){
        if(isCorrectLocation){
            utils.observeSelector('[data-cy="product-card-horizontal"]', function(el) {
                activate();
                console.log("nextjs post svc HP activated")
            }, {
            "timeout": 300000,
            "once": true,
            });
        }
    });
}
}, {"id": "6496865984708608", "category": "other", "apiName": "22886250866_url_targeting_for_qanotrackab_cscro2521__vertex_ai_v", "name": "URL Targeting for [A/B] CSCRO-2521 - Vertex AI V3", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "virginmedia.com/broadband"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    void options;

    var normalizePath = function (pathname) {
        return (pathname || "").replace(/\/$/, "") || "/";
    };

    // Ticket page targeting — broadband.
    var exactPaths = ["/broadband"];

    // Stella Next.js post-SVC: product cards first.
    var CARD_SELECTOR =
        "[data-cy='product-card-horizontal'], [data-testid='product-card']";
    var OBSERVE_SELECTOR = "[data-cy='product-card-horizontal'], [data-testid='product-card']";
    // Fallback: Vertex search OR post-SVC change-address (Control may hide Vertex).
    var FALLBACK_SELECTOR =
        "[data-testid='vertex-search-placeholder'], [data-cy='vertex-search-text-placeholder'], " +
        "[data-testid='success-result'], [data-testid='postcode-result']";
    var GRID_SELECTOR = "[class*='bundles-grid_grid-container']";
    var waitMs = 60000;
    var pollMs = 500;

    var isCorrectPath = function (pathname) {
        var path = normalizePath(pathname).toLowerCase();
        var i;
        if (path === "/" || path === "") {
            return true;
        }
        for (i = 0; i < exactPaths.length; i += 1) {
            if (path === exactPaths[i]) {
                return true;
            }
        }
        return false;
    };

    if (typeof activate !== "function") {
        return;
    }

    if (!isCorrectPath(window.location.pathname)) {
        return;
    }

    var activated = false;
    var pollTimer = null;

    var clearPoll = function () {
        if (pollTimer !== null) {
            window.clearInterval(pollTimer);
            pollTimer = null;
        }
    };

    var isCardReady = function () {
        return Boolean(document.querySelector(CARD_SELECTOR));
    };

    var isFallbackReady = function () {
        return Boolean(document.querySelector(FALLBACK_SELECTOR));
    };

    var isGridReady = function () {
        return document.querySelectorAll(GRID_SELECTOR).length > 0;
    };

    var hasPrerequisites = function () {
        return Boolean(document.body) && (isCardReady() || isFallbackReady());
    };

    var tryActivate = function () {
        if (activated) {
            return;
        }
        if (!isCorrectPath(window.location.pathname)) {
            return;
        }
        if (!hasPrerequisites()) {
            return;
        }

        activated = true;
        clearPoll();
        activate();
    };

    var runWhenCardsOrFallbackReady = function (utils) {
        if (activated) {
            return;
        }
        if (isCardReady() || isFallbackReady()) {
            tryActivate();
            return;
        }
        if (utils && typeof utils.observeSelector === "function") {
            utils.observeSelector(
                OBSERVE_SELECTOR,
                function () {
                    tryActivate();
                },
                { timeout: 300000, once: true }
            );
            // Also watch fallback anchors in case cards never mount (Vertex-only hero).
            utils.observeSelector(
                "[data-testid='vertex-search-placeholder'], [data-testid='postcode-result']",
                function () {
                    tryActivate();
                },
                { timeout: 300000, once: true }
            );
            return;
        }
        if (utils && typeof utils.waitForElement === "function") {
            utils.waitForElement(CARD_SELECTOR).then(function () {
                tryActivate();
            });
            utils.waitForElement(FALLBACK_SELECTOR).then(function () {
                tryActivate();
            });
            return;
        }
        tryActivate();
    };

    var optiUtils =
        window.optimizely && typeof window.optimizely.get === "function"
            ? window.optimizely.get("utils")
            : null;

    if (optiUtils && typeof optiUtils.waitUntil === "function") {
        optiUtils
            .waitUntil(function () {
                // Grid preferred (Stella / cro-vm-post-svc-activation); fall back to anchors.
                return isGridReady() || isCardReady() || isFallbackReady();
            })
            .then(function () {
                runWhenCardsOrFallbackReady(optiUtils);
            });
    } else {
        // Tampermonkey / pages without Optimizely utils API.
        if (hasPrerequisites()) {
            tryActivate();
        } else {
            var attempts = 0;
            pollTimer = window.setInterval(function () {
                attempts += 1;
                tryActivate();
                if (activated || attempts > waitMs / pollMs) {
                    clearPoll();
                }
            }, pollMs);
        }
    }

    // SPA path watch — re-arm when navigating between upper-funnel paths.
    var lastPath = normalizePath(window.location.pathname);
    window.setInterval(function () {
        var nextPath = normalizePath(window.location.pathname);
        if (nextPath === lastPath) {
            return;
        }
        lastPath = nextPath;
        if (!isCorrectPath(nextPath)) {
            activated = false;
            return;
        }
        activated = false;
        if (optiUtils && typeof optiUtils.waitUntil === "function") {
            optiUtils
                .waitUntil(function () {
                    return isGridReady() || isCardReady() || isFallbackReady();
                })
                .then(function () {
                    runWhenCardsOrFallbackReady(optiUtils);
                });
        } else {
            tryActivate();
        }
    }, pollMs);
}
}, {"id": "6565574925352960", "category": "other", "apiName": "22886250866_gcp_your_details_page__url_changes", "name": "[GCP] Your details page - URL Changes", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/your-details"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6665500023848960", "category": "other", "apiName": "22886250866_url_targeting_for_qanotrack100_cscro2450_hide_google", "name": "URL Targeting for [no-track][100%] CSCRO-2450 Hide Google Pay Option", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/buy/payment-selection"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6688962425651200", "category": "other", "apiName": "22886250866_post_svcnextjs_broadband_and_tv_page__callback__prod", "name": "[POST SVC][nextjs] Broadband and TV page - callback + product cards loaded", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.virginmedia.com/broadband/broadband-and-tv"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
    const isCorrectLocation = window.location.href.indexOf("https://www.virginmedia.com/broadband/broadband-and-tv") > -1;
    utils.waitUntil(function() {
        if(isCorrectLocation){
            let domCondition = document.querySelectorAll("[class*='bundles-grid_grid-container']").length > 0;
            return domCondition;
        } else{
            return true;
        }
    }).then(function(){
        if(isCorrectLocation){
            utils.observeSelector("[data-role='card']", function(el) {
                activate();
                console.log("nextjs post svc page activated")
            }, {
            "timeout": 300000,
            "once": true,
            });
        }
    });
}
}, {"id": "6748812356616192", "category": "other", "apiName": "22886250866_url_targeting_for_copy_of_qanotrackabstats_accel_csc", "name": "URL Targeting for [A/B][Stats Accel] CSCRO-2523 - Black Friday BB Only creative", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/broadband/broadband-only"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    void options;
    if (typeof activate !== "function") return;

    var utils = window.optimizely && window.optimizely.get && window.optimizely.get("utils");
    if (!utils || typeof utils.waitUntil !== "function") {
        activate();
        return;
    }

    utils
        .waitUntil(function () {
            return document.querySelector('[data-testid="hero-image"]');
        })
        .then(function () {
            activate();
        });
}
}], "events": [{"id": "23184750478", "viewId": null, "name": "Continue ctas from join review", "category": "other", "apiName": "continue_ctas_on_review_click", "eventType": "custom", "eventFilter": null}, {"id": "23347621521", "viewId": null, "name": "Existing O2 customer toastie cta clicks", "category": "other", "apiName": "989_existing_o2_toastie_click", "eventType": "custom", "eventFilter": null}, {"id": "23359600695", "viewId": null, "name": "Plan details clicked for upsell product", "category": "other", "apiName": "upsell_plan_details_clicked", "eventType": "custom", "eventFilter": null}, {"id": "23379141585", "viewId": null, "name": "Existing O2 customer toastie close icon click", "category": "other", "apiName": "989_existing_o2_toastie_close_click", "eventType": "custom", "eventFilter": null}, {"id": "23385402972", "viewId": null, "name": "[CSCRO-1044] - Clicks on the new top 4 FAQs", "category": "other", "apiName": "clicks_top_faqs", "eventType": "custom", "eventFilter": null}, {"id": "23408920010", "viewId": null, "name": "Click on upsell CTA [upsell test - join review]", "category": "other", "apiName": "clicked_upsell_cta", "eventType": "custom", "eventFilter": null}, {"id": "23416170767", "viewId": null, "name": "Filter interaction - 961", "category": "other", "apiName": "961_filter_interaction", "eventType": "custom", "eventFilter": null}, {"id": "23416181656", "viewId": null, "name": "Plan details clicked", "category": "other", "apiName": "plan_details_clicked", "eventType": "custom", "eventFilter": null}, {"id": "23464880114", "viewId": null, "name": "[CSCRO-1029] Priority modal opened", "category": "other", "apiName": "1029_priority_modal_opened", "eventType": "custom", "eventFilter": null}, {"id": "23468482736", "viewId": null, "name": "Clicks on info links - installationSelection", "category": "other", "apiName": "info_link_click", "eventType": "custom", "eventFilter": null}, {"id": "23481930098", "viewId": null, "name": "Product cards Select CTA", "category": "other", "apiName": "product_card_select_cta_clicked", "eventType": "custom", "eventFilter": null}, {"id": "23500151250", "viewId": null, "name": "[CSCRO-1072] DOB or security question errors displayed", "category": "other", "apiName": "dob_or_securityq_error_displayed", "eventType": "custom", "eventFilter": null}, {"id": "23528420243", "viewId": null, "name": "[CSCRO-679]Product card with social proof select cta clicked", "category": "other", "apiName": "product_card_with_social_proof_select_cta_clicked", "eventType": "custom", "eventFilter": null}, {"id": "23663200279", "viewId": null, "name": "[CSCRO-1040] Clicks on upsell CTA", "category": "other", "apiName": "1040_upsell_CTA_click", "eventType": "custom", "eventFilter": null}, {"id": "23664300192", "viewId": null, "name": "[CSCRO-1040] Clicks on Continue without", "category": "other", "apiName": "1040_continue_without_click", "eventType": "custom", "eventFilter": null}, {"id": "23669081124", "viewId": null, "name": "My Account Clicks [CSCRO-1064]", "category": "other", "apiName": "my_account_click_1064", "eventType": "custom", "eventFilter": null}, {"id": "23718280739", "viewId": null, "name": "PB - Continue to checkout", "category": "other", "apiName": "pb_continue_to_checkout", "eventType": "custom", "eventFilter": null}, {"id": "23728761342", "viewId": null, "name": "Open persistent basket", "category": "other", "apiName": "open_pb", "eventType": "custom", "eventFilter": null}, {"id": "23730360649", "viewId": null, "name": "[BB Builder] click on contract length tile", "category": "other", "apiName": "bb_builder_contract_length_tiles_click", "eventType": "custom", "eventFilter": null}, {"id": "23731831521", "viewId": null, "name": "[CSCRO-1085] Address Confirmed", "category": "other", "apiName": "Address_Confirmed", "eventType": "custom", "eventFilter": null}, {"id": "23743210528", "viewId": null, "name": "[CSCRO-1117] Forced open pb", "category": "other", "apiName": "forced_open_pb", "eventType": "custom", "eventFilter": null}, {"id": "23744050445", "viewId": null, "name": "[BB Builder] clicks on speed tiles", "category": "other", "apiName": "bb_builder_speed_tiles_click", "eventType": "custom", "eventFilter": null}, {"id": "23747080514", "viewId": null, "name": "[BB Builder]  clicks on add on tiles", "category": "other", "apiName": "bb_builder_add_on_tiles_click", "eventType": "custom", "eventFilter": null}, {"id": "23747652445", "viewId": null, "name": "[CSCRO-1085] Top Check Availability CTA Click", "category": "other", "apiName": "Top_Check_Availability", "eventType": "custom", "eventFilter": null}, {"id": "23780960354", "viewId": null, "name": "[CSCRO-1122 CSCRO-1096] Click on change link svc", "category": "other", "apiName": "svc_change_link_click", "eventType": "custom", "eventFilter": null}, {"id": "23795860006", "viewId": null, "name": "[CSCRO-1079] Filter Interaction", "category": "other", "apiName": "CSCRO_1079_filter_interaction", "eventType": "custom", "eventFilter": null}, {"id": "23814910142", "viewId": null, "name": "SVC - Address confirmed", "category": "other", "apiName": "svc_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "23973301223", "viewId": null, "name": "[BB Builder] clicks on checkout cta", "category": "other", "apiName": "bb_builder_checkout_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "23974150186", "viewId": null, "name": "[CSCRO-1112] Engaged with filter pre-svc", "category": "other", "apiName": "1112_engaged_want_to_see_filter_pre_svc", "eventType": "custom", "eventFilter": null}, {"id": "23979520126", "viewId": null, "name": "[CSCRO-1112] Engaged with I want to see filter ", "category": "other", "apiName": "1112_engaged_with_want_to_see_filter", "eventType": "custom", "eventFilter": null}, {"id": "24084470648", "viewId": null, "name": "[CSCRO-1074] Address confirmed", "category": "other", "apiName": "cscro_1074_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "24092111158", "viewId": null, "name": "[1147] BB Builder clicks on add on tiles", "category": "other", "apiName": "bb_builder_add_on_tiles_click_1147", "eventType": "custom", "eventFilter": null}, {"id": "24101910721", "viewId": null, "name": "[CSCRO-1149] Phone number entered", "category": "other", "apiName": "cscro_1149_phone_number_entered", "eventType": "custom", "eventFilter": null}, {"id": "24105160428", "viewId": null, "name": "[CSCRO-1074] SVC Initialised check", "category": "other", "apiName": "cscro_1074_initialise_check", "eventType": "custom", "eventFilter": null}, {"id": "24105471058", "viewId": null, "name": "[CSCRO-1149] Address confirmed", "category": "other", "apiName": "cscro_1149_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "24106540514", "viewId": null, "name": "[CSCRO-1097] Address Confirmed", "category": "other", "apiName": "cscro_1097_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "24156640225", "viewId": null, "name": "[1147] BB Builder click on contract length tiles", "category": "other", "apiName": "bb_builder_contract_length_tiles_click_1147", "eventType": "custom", "eventFilter": null}, {"id": "24164770712", "viewId": null, "name": "[CSCRO-1124] Clicks on Gig1 Fibre Broadband", "category": "other", "apiName": "1124_clicks_gig1_fibre_broadband", "eventType": "custom", "eventFilter": null}, {"id": "24172340749", "viewId": null, "name": "[CSCRO-1009] Volt Exit Intent Popup Shown", "category": "other", "apiName": "volt_exit_intent_shown", "eventType": "custom", "eventFilter": null}, {"id": "24173830231", "viewId": null, "name": "[1147] BB Builder clicks on speed tiles", "category": "other", "apiName": "bb_builder_speed_tiles_click_1147", "eventType": "custom", "eventFilter": null}, {"id": "24178150705", "viewId": null, "name": "User clicked on a current provider", "category": "other", "apiName": "current_provider_selected", "eventType": "custom", "eventFilter": null}, {"id": "24181040066", "viewId": null, "name": "[CSCRO-1097] Initialise check", "category": "other", "apiName": "cscro_1097_initialise_check", "eventType": "custom", "eventFilter": null}, {"id": "24188500262", "viewId": null, "name": "[1164] HP - VM account sections - click", "category": "other", "apiName": "1164_vm_account_sections_click_hp", "eventType": "custom", "eventFilter": null}, {"id": "24192410405", "viewId": null, "name": "[1121] TV Builder clicks on checkout cta", "category": "other", "apiName": "tv_builder_checkout_cta_click_1121", "eventType": "custom", "eventFilter": null}, {"id": "24195290668", "viewId": null, "name": "[CSCRO-1118] SVC initialised", "category": "other", "apiName": "svc_initialised_1118", "eventType": "custom", "eventFilter": null}, {"id": "24204450758", "viewId": null, "name": "[CSCRO-1154] Affiliate Exit Intent Shown", "category": "other", "apiName": "affiliate_exit_intent_shown", "eventType": "custom", "eventFilter": null}, {"id": "24210930105", "viewId": null, "name": "[1136] Clicks on Find out more", "category": "other", "apiName": "cscro_1136_find_more_click", "eventType": "custom", "eventFilter": null}, {"id": "24212520222", "viewId": null, "name": "[CSCRO-1118] SVC Address confirmed", "category": "other", "apiName": "svc_address_confirmed_1118", "eventType": "custom", "eventFilter": null}, {"id": "24214260348", "viewId": null, "name": "[CSCRO-1124]  Clicks on Our top deals", "category": "other", "apiName": "1124_clicks_top_deals", "eventType": "custom", "eventFilter": null}, {"id": "24216970074", "viewId": null, "name": "[1136] No thanks click", "category": "other", "apiName": "cscro_1136_no_thank_you_click", "eventType": "custom", "eventFilter": null}, {"id": "24235600144", "viewId": null, "name": "[1121] TV Builder click on tv package tile", "category": "other", "apiName": "tv_builder_tv_package_tiles_click_1121", "eventType": "custom", "eventFilter": null}, {"id": "24244310634", "viewId": null, "name": "[CSCRO-1175] SVC initialised", "category": "other", "apiName": "svc_initialised_1175", "eventType": "custom", "eventFilter": null}, {"id": "24262870020", "viewId": null, "name": "[CSCRO-1175] SVC Address confirmed", "category": "other", "apiName": "svc_address_confirmed_1175", "eventType": "custom", "eventFilter": null}, {"id": "24298440271", "viewId": null, "name": "[CSCRO-1162] Check your postcode click", "category": "other", "apiName": "1162_check_postcode_click", "eventType": "custom", "eventFilter": null}, {"id": "24300120437", "viewId": null, "name": "[CSCRO-1184] Upsell CTA Click", "category": "other", "apiName": "1184_upsell_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "24304500541", "viewId": null, "name": "[926] SVC Address Confirmed", "category": "other", "apiName": "svc_address_confirmed_926", "eventType": "custom", "eventFilter": null}, {"id": "24314991108", "viewId": null, "name": "[1139] Svc Address confirmed", "category": "other", "apiName": "1139_svc_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "24317540513", "viewId": null, "name": "[926] SVC Initialised", "category": "other", "apiName": "svc_initialised_926", "eventType": "custom", "eventFilter": null}, {"id": "24336060183", "viewId": null, "name": "[926] SVC Address Selected", "category": "other", "apiName": "svc_address_selected_926", "eventType": "custom", "eventFilter": null}, {"id": "24559952240", "viewId": null, "name": "[1180] Address Confirmed", "category": "other", "apiName": "1180_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "24584750756", "viewId": null, "name": "[1219] User selects already an o2 customer", "category": "other", "apiName": "1219_select_already_o2_customer", "eventType": "custom", "eventFilter": null}, {"id": "24606920233", "viewId": null, "name": "[1219] SVC Address Confirmed", "category": "other", "apiName": "1219_svc_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "24683250284", "viewId": null, "name": "[CSCRO-1203] Exit intent shown", "category": "other", "apiName": "1203_exit_intent_shown", "eventType": "custom", "eventFilter": null}, {"id": "24691570014", "viewId": null, "name": "[1220] User clicked on see tv channels", "category": "other", "apiName": "1220_tv_channels_click", "eventType": "custom", "eventFilter": null}, {"id": "24700670013", "viewId": null, "name": "[1167] Big Bundle CTA clicked", "category": "other", "apiName": "1167_big_bundle_selected", "eventType": "custom", "eventFilter": null}, {"id": "24708640073", "viewId": null, "name": "[1227] SVC address confirmed", "category": "other", "apiName": "svc_address_confirmed_1227", "eventType": "custom", "eventFilter": null}, {"id": "24710040013", "viewId": null, "name": "[1167] Close Modal Click", "category": "other", "apiName": "1167_close_modal_click", "eventType": "custom", "eventFilter": null}, {"id": "24710510009", "viewId": null, "name": "[1167] Clicked outside modal", "category": "other", "apiName": "1167_click_outside_modal", "eventType": "custom", "eventFilter": null}, {"id": "24714070170", "viewId": null, "name": "[1227] SVC initialised", "category": "other", "apiName": "svc_initialised_1227", "eventType": "custom", "eventFilter": null}, {"id": "24716220037", "viewId": null, "name": "1190 Need Help cta click - banner", "category": "other", "apiName": "1190_banner_click_need_help", "eventType": "custom", "eventFilter": null}, {"id": "24722250049", "viewId": null, "name": "1231 SVC address confirmed", "category": "other", "apiName": "1231_svc_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "24725580055", "viewId": null, "name": "1190 View My Account cta click - banner", "category": "other", "apiName": "1190_banner_click_my_account", "eventType": "custom", "eventFilter": null}, {"id": "24729380244", "viewId": null, "name": "[1232] Brand name bundle click", "category": "other", "apiName": "1232_bundle_click", "eventType": "custom", "eventFilter": null}, {"id": "24745050019", "viewId": null, "name": "1190 I want to browse click - banner", "category": "other", "apiName": "1190_banner_click_want_to_browse", "eventType": "custom", "eventFilter": null}, {"id": "24776110044", "viewId": null, "name": "[1197] User has filtered", "category": "other", "apiName": "1197_user_has_filtered", "eventType": "custom", "eventFilter": null}, {"id": "24785740059", "viewId": null, "name": "[1197] Filters interacted", "category": "other", "apiName": "1197_filter_interacted", "eventType": "custom", "eventFilter": null}, {"id": "24878820432", "viewId": null, "name": "663 Navigation item interaction", "category": "other", "apiName": "663_nav_interaction", "eventType": "custom", "eventFilter": null}, {"id": "24890980234", "viewId": null, "name": "1204 Address Confirmed", "category": "other", "apiName": "1204_Address_Confirmed", "eventType": "custom", "eventFilter": null}, {"id": "24892360081", "viewId": null, "name": "663 SEO tile click", "category": "other", "apiName": "663_seo_tile_click", "eventType": "custom", "eventFilter": null}, {"id": "24927480013", "viewId": null, "name": "663 Popular links click", "category": "other", "apiName": "663_popular_links_click", "eventType": "custom", "eventFilter": null}, {"id": "24936471018", "viewId": null, "name": "[1249] Contract length filter interaction", "category": "other", "apiName": "CSCRO_1249_filter_interaction", "eventType": "custom", "eventFilter": null}, {"id": "24968040404", "viewId": null, "name": "[1249] 24m contract length filter interaction", "category": "other", "apiName": "CSCRO_1249_24_filter_interaction", "eventType": "custom", "eventFilter": null}, {"id": "24970481081", "viewId": null, "name": "1215 Speed explained", "category": "other", "apiName": "1215_speed_explained", "eventType": "custom", "eventFilter": null}, {"id": "24976850008", "viewId": null, "name": "[1249] 18m contract length filter interaction", "category": "other", "apiName": "CSCRO_1249_18_filter_interaction", "eventType": "custom", "eventFilter": null}, {"id": "25138850416", "viewId": null, "name": "[1222] Previously viewed product select clicked", "category": "other", "apiName": "1222_previously_viewed_product_select_clicked", "eventType": "custom", "eventFilter": null}, {"id": "25220571191", "viewId": null, "name": "1309 - Click Plan Details", "category": "other", "apiName": "1309_click_plan_details", "eventType": "custom", "eventFilter": null}, {"id": "25222550693", "viewId": null, "name": "1290 address confirmed", "category": "other", "apiName": "1290_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "25222830190", "viewId": null, "name": "1256 - Click Choice Chips", "category": "other", "apiName": "1256_click_choice_chips", "eventType": "custom", "eventFilter": null}, {"id": "25225810447", "viewId": null, "name": "1300 - user clicked on ultimate volt select cta", "category": "other", "apiName": "1300_ultimate_voltproduct_card_select_cta_clicked", "eventType": "custom", "eventFilter": null}, {"id": "25249021507", "viewId": null, "name": "1287 Budget Filter Interaction", "category": "other", "apiName": "1287_budget_filter_interaction", "eventType": "custom", "eventFilter": null}, {"id": "25253200129", "viewId": null, "name": "1256 - Click Products tab", "category": "other", "apiName": "1256_click_products_tab", "eventType": "custom", "eventFilter": null}, {"id": "25255590117", "viewId": null, "name": "1256 - Click Speed Test tab", "category": "other", "apiName": "1256_click_speed_test_tab", "eventType": "custom", "eventFilter": null}, {"id": "25255650174", "viewId": null, "name": "1210 SVC Address Confirmed", "category": "other", "apiName": "1210_Address_Confirmed", "eventType": "custom", "eventFilter": null}, {"id": "25255661543", "viewId": null, "name": "1287 Deal Filter Interaction", "category": "other", "apiName": "1287_deal_filter_interaction", "eventType": "custom", "eventFilter": null}, {"id": "25261220999", "viewId": null, "name": "1280 sign in click", "category": "other", "apiName": "1280_sign_in_click", "eventType": "custom", "eventFilter": null}, {"id": "25284000723", "viewId": null, "name": "1309 - Click Select", "category": "other", "apiName": "1309_click_select", "eventType": "custom", "eventFilter": null}, {"id": "25295510705", "viewId": null, "name": "1297 Address Confirmed", "category": "other", "apiName": "1297_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "25542840563", "viewId": null, "name": "[CSCRO-1343] User clicked on an O2 cta", "category": "other", "apiName": "1343_o2_cta_clicked", "eventType": "custom", "eventFilter": null}, {"id": "25615730230", "viewId": null, "name": "[CSCRO-1343] User clicked on a giff gaff cta", "category": "other", "apiName": "1343_giffgaff_cta_clicked", "eventType": "custom", "eventFilter": null}, {"id": "25629040050", "viewId": null, "name": "[1258] continue without stream clicks", "category": "other", "apiName": "1258_continue_without_stream", "eventType": "custom", "eventFilter": null}, {"id": "25674060434", "viewId": null, "name": "[1339] SVC Completed", "category": "other", "apiName": "1339_Address_Confirmed", "eventType": "custom", "eventFilter": null}, {"id": "25943570206", "viewId": null, "name": "[1369] Continue without stream lick", "category": "other", "apiName": "1369_continue_without_stream", "eventType": "custom", "eventFilter": null}, {"id": "25974103192", "viewId": null, "name": "[1366] SVC - address confirmed", "category": "other", "apiName": "1366_svc_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "25979762357", "viewId": null, "name": "Average Wait Time - black friday cta click", "category": "other", "apiName": "Average Wait Time - black friday cta click", "eventType": "custom", "eventFilter": null}, {"id": "25986173124", "viewId": null, "name": "1352 Are you moving - sign in cta click", "category": "other", "apiName": "1352_are_you_moving_sign_in_click", "eventType": "custom", "eventFilter": null}, {"id": "25989493704", "viewId": null, "name": "Average Wait Time - flare dismissed", "category": "other", "apiName": "Average Wait Time - flare dismissed", "eventType": "custom", "eventFilter": null}, {"id": "26040052749", "viewId": null, "name": "Average Wait Time - close flare", "category": "other", "apiName": "Average Wait Time - close flare", "eventType": "custom", "eventFilter": null}, {"id": "26057570894", "viewId": null, "name": "Average Wait Time - open flare", "category": "other", "apiName": "Average Wait Time - open flare", "eventType": "custom", "eventFilter": null}, {"id": "26101342109", "viewId": null, "name": "CRO-935 black friday cta click", "category": "other", "apiName": "CRO-935 black friday cta click", "eventType": "custom", "eventFilter": null}, {"id": "26146540785", "viewId": null, "name": "1317 Post SVC CTA Click", "category": "other", "apiName": "1317_post_svc_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "26150820322", "viewId": null, "name": "1365 Select CTA Clicks", "category": "other", "apiName": "1365_select_cta", "eventType": "custom", "eventFilter": null}, {"id": "26159990669", "viewId": null, "name": "1362 Address Confirmed", "category": "other", "apiName": "1362_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "26160621584", "viewId": null, "name": "1370 Address Confirmed", "category": "other", "apiName": "1370_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "26163580878", "viewId": null, "name": "1361 Select CTA Clicks", "category": "other", "apiName": "1361_select_cta", "eventType": "custom", "eventFilter": null}, {"id": "26164370972", "viewId": null, "name": "1378 Clicked on phone number ", "category": "other", "apiName": "1378_clicked_phone_number", "eventType": "custom", "eventFilter": null}, {"id": "26248410081", "viewId": null, "name": "1317 Address Confirmed", "category": "other", "apiName": "1317_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "26324501515", "viewId": null, "name": "1347 - Click Plan Details", "category": "other", "apiName": "1347_click_plan_details", "eventType": "custom", "eventFilter": null}, {"id": "26329470325", "viewId": null, "name": "1401 Select CTA Clicks", "category": "other", "apiName": "1401_select_cta", "eventType": "custom", "eventFilter": null}, {"id": "26329500472", "viewId": null, "name": "1405 Address Confirmed", "category": "other", "apiName": "1405_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "26330090421", "viewId": null, "name": "1390 Click select on product cards", "category": "other", "apiName": "1390_click_select_product_cards", "eventType": "custom", "eventFilter": null}, {"id": "26349540853", "viewId": null, "name": "1405 post svc cta click", "category": "other", "apiName": "1405_post_svc_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "26354730717", "viewId": null, "name": "1402 Select CTA Clicked", "category": "other", "apiName": "1402_select_cta", "eventType": "custom", "eventFilter": null}, {"id": "26436330207", "viewId": null, "name": "1347 - Click Select", "category": "other", "apiName": "1347_click_select", "eventType": "custom", "eventFilter": null}, {"id": "26558290049", "viewId": null, "name": "1413 Continue Without Stream", "category": "other", "apiName": "1413_continue_without_stream", "eventType": "custom", "eventFilter": null}, {"id": "26735861777", "viewId": null, "name": "[1384] SVC Address Confirmed", "category": "other", "apiName": "1384_svc_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "26827140279", "viewId": null, "name": "1408 Address Confirmed", "category": "other", "apiName": "1408_Address_Confirmed", "eventType": "custom", "eventFilter": null}, {"id": "26900650343", "viewId": null, "name": "1416 Address Confirmed", "category": "other", "apiName": "1416_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "27226750020", "viewId": null, "name": "1435 Select CTA Clicked", "category": "other", "apiName": "1435_select_cta", "eventType": "custom", "eventFilter": null}, {"id": "27291860339", "viewId": null, "name": "1440 Continue Without Stream Clicks", "category": "other", "apiName": "1440_continue_without_stream", "eventType": "custom", "eventFilter": null}, {"id": "27438900260", "viewId": null, "name": "[1464] SVC Completed", "category": "other", "apiName": "1464_Address_Confirmed", "eventType": "custom", "eventFilter": null}, {"id": "27681380111", "viewId": null, "name": "1460 - Q1 Yes start survey", "category": "other", "apiName": "1460_q1_yes_start_survey", "eventType": "custom", "eventFilter": null}, {"id": "27722180294", "viewId": null, "name": "[1457] SVC Address Confirmed", "category": "other", "apiName": "1457_svc_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "27808530186", "viewId": null, "name": "1478 - Tv channel removed", "category": "other", "apiName": "1478_tv_channel_removed", "eventType": "custom", "eventFilter": null}, {"id": "27820660161", "viewId": null, "name": "1478 - Tv channel added", "category": "other", "apiName": "1478_tv_channel_added", "eventType": "custom", "eventFilter": null}, {"id": "27827760493", "viewId": null, "name": "1480 Select CTA Clicked", "category": "other", "apiName": "1480_select_cta", "eventType": "custom", "eventFilter": null}, {"id": "27833250461", "viewId": null, "name": "1476 Mega Volt Select CTA Clicked", "category": "other", "apiName": "1476_MegaVolt_Clicked", "eventType": "custom", "eventFilter": null}, {"id": "27930820112", "viewId": null, "name": "1483 - Add to basket", "category": "other", "apiName": "1483_add_to_basket", "eventType": "custom", "eventFilter": null}, {"id": "28094020225", "viewId": null, "name": "[CSCRO-1500] M250 Select CTA Clicks", "category": "other", "apiName": "M250_select_cta", "eventType": "custom", "eventFilter": null}, {"id": "28108250176", "viewId": null, "name": "[CSCRO-1500] Gig1 Select CTA Clicks", "category": "other", "apiName": "Gig1_select_cta", "eventType": "custom", "eventFilter": null}, {"id": "28131190278", "viewId": null, "name": "[CSCRO-1500] M500 Select CTA Clicks", "category": "other", "apiName": "M500_select_cta", "eventType": "custom", "eventFilter": null}, {"id": "28507140004", "viewId": null, "name": "[1517] SVC Address confirmed", "category": "other", "apiName": "1517_svc_address_confirmed", "eventType": "custom", "eventFilter": null}, {"id": "29377750247", "viewId": null, "name": "1558 Address Confirmed", "category": "other", "apiName": "1558_Address_Confirmed", "eventType": "custom", "eventFilter": null}, {"id": "29481970083", "viewId": null, "name": "1573 Bigger Sports M500 (4026) Add to Basket click", "category": "other", "apiName": "1573_4026_add_basket_cta", "eventType": "custom", "eventFilter": null}, {"id": "29507170025", "viewId": null, "name": "1573 Big M250 (4015) Add to Basket click", "category": "other", "apiName": "1573_4015_add_basket_cta", "eventType": "custom", "eventFilter": null}, {"id": "29511770027", "viewId": null, "name": "1573 Bigger M350 (4020) Add Basket Click", "category": "other", "apiName": "1573_4020_add_basket_cta", "eventType": "custom", "eventFilter": null}, {"id": "29553910203", "viewId": null, "name": "1574 M250(4301) Add basket CTA", "category": "other", "apiName": "1574_4301_add_basket_cta", "eventType": "custom", "eventFilter": null}, {"id": "29732200337", "viewId": null, "name": "1604 SVC completed", "category": "other", "apiName": "1604_svc_completed", "eventType": "custom", "eventFilter": null}, {"id": "29786940403", "viewId": null, "name": "1604 Add to basket CTA - students", "category": "other", "apiName": "1604_add_to_bag_cta_students", "eventType": "custom", "eventFilter": null}, {"id": "29823970282", "viewId": null, "name": "1592 M250 Add to basket CTA", "category": "other", "apiName": "1592_m250_add_to_basket", "eventType": "custom", "eventFilter": null}, {"id": "29824570116", "viewId": null, "name": "1592 Select this deal", "category": "other", "apiName": "1592_select_this_deal", "eventType": "custom", "eventFilter": null}, {"id": "29847020375", "viewId": null, "name": "1592 Add to basket CTA", "category": "other", "apiName": "1592_add_to_basket", "eventType": "custom", "eventFilter": null}, {"id": "29910850202", "viewId": null, "name": "1625 Add to basket CTA - students", "category": "other", "apiName": "1625_add_to_bag_cta_students", "eventType": "custom", "eventFilter": null}, {"id": "29963630014", "viewId": null, "name": "1625 SVC completed", "category": "other", "apiName": "1625_svc_completed", "eventType": "custom", "eventFilter": null}, {"id": "29967040731", "viewId": null, "name": "1620 How it works link", "category": "other", "apiName": "1620_how_it_works_link", "eventType": "custom", "eventFilter": null}, {"id": "29993220022", "viewId": null, "name": "1574 Gig1(4305) Add basket CTA", "category": "other", "apiName": "1574_4305_add_basket_cta", "eventType": "custom", "eventFilter": null}, {"id": "30027741015", "viewId": null, "name": "1639 M250 Add to basket", "category": "other", "apiName": "1639_m250_add_to_basket", "eventType": "custom", "eventFilter": null}, {"id": "30056490546", "viewId": null, "name": "1603 9300 product add to basket cta", "category": "other", "apiName": "1603_9300_add_basket_cta", "eventType": "custom", "eventFilter": null}, {"id": "30076730206", "viewId": null, "name": "1603 9301 product add to basket cta", "category": "other", "apiName": "1603_9301_add_basket_cta", "eventType": "custom", "eventFilter": null}, {"id": "30097280568", "viewId": null, "name": "1639 Add to basket CTA", "category": "other", "apiName": "1639_add_to_basket", "eventType": "custom", "eventFilter": null}, {"id": "30109140139", "viewId": null, "name": "1603 9302 product add to basket cta", "category": "other", "apiName": "1603_9302_add_basket_cta", "eventType": "custom", "eventFilter": null}, {"id": "30415830509", "viewId": null, "name": "1668 gpls CTA Clicks", "category": "other", "apiName": "1668_gpls_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "30449270425", "viewId": null, "name": "1676 GPLS CTA Clicks", "category": "other", "apiName": "1676_gpls_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "30527670017", "viewId": null, "name": "1675 gpls cta click", "category": "other", "apiName": "1675_gpls_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "4504413476225024", "viewId": null, "name": "2521 Click Search", "category": "other", "apiName": "2521_Click_Search", "eventType": "custom", "eventFilter": null}, {"id": "4680233331195904", "viewId": null, "name": "2491_Click_Search_Other", "category": "other", "apiName": "2491_Click_Search_Other", "eventType": "custom", "eventFilter": null}, {"id": "4702368485343232", "viewId": null, "name": "2521 Click Page Tile", "category": "other", "apiName": "2521_Click_Page_Tile", "eventType": "custom", "eventFilter": null}, {"id": "4723337851568128", "viewId": null, "name": "Open Persistent Basket", "category": "other", "apiName": "open_persistent_basket", "eventType": "custom", "eventFilter": null}, {"id": "4769696090685440", "viewId": null, "name": "2187_Click_Search_Landline", "category": "other", "apiName": "2187_Click_Search_Landline", "eventType": "custom", "eventFilter": null}, {"id": "4773382967787520", "viewId": null, "name": "CSCRO Data filter 30GB", "category": "other", "apiName": "cscro_data_filter_30gb", "eventType": "custom", "eventFilter": null}, {"id": "4796378877001728", "viewId": null, "name": "2360 Setup Carousel", "category": "other", "apiName": "2360_Setup_Carousel", "eventType": "custom", "eventFilter": null}, {"id": "4803969694826496", "viewId": null, "name": "2521 Click Search Broadband", "category": "other", "apiName": "2521_Click_Search_Broadband", "eventType": "custom", "eventFilter": null}, {"id": "4890967258431488", "viewId": null, "name": "1683 Banner More Info Link", "category": "other", "apiName": "1683_banner_more_info_link", "eventType": "custom", "eventFilter": null}, {"id": "4899392560300032", "viewId": null, "name": "2491_Click Search", "category": "other", "apiName": "2491_Click_Search", "eventType": "custom", "eventFilter": null}, {"id": "4906650549616640", "viewId": null, "name": "1635 vm tile click", "category": "other", "apiName": "1635_vm_tile_click", "eventType": "custom", "eventFilter": null}, {"id": "4944516759683072", "viewId": null, "name": "1683 More Info Link", "category": "other", "apiName": "1683_more_info_link", "eventType": "custom", "eventFilter": null}, {"id": "5011721434169344", "viewId": null, "name": "2238 Email Continue CTA Click", "category": "other", "apiName": "2238_email_continue_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "5034840827887616", "viewId": null, "name": "1721 Overlay cta deals", "category": "other", "apiName": "1721_overlay_cta_deals", "eventType": "custom", "eventFilter": null}, {"id": "5039461575163904", "viewId": null, "name": "1742 Bin Icon in breakdown clicked", "category": "other", "apiName": "1742_bin_icon_description", "eventType": "custom", "eventFilter": null}, {"id": "5096318620663808", "viewId": null, "name": "1741 Banner Remove item cta", "category": "other", "apiName": "1741_banner_remove_item_cta", "eventType": "custom", "eventFilter": null}, {"id": "5110999492067328", "viewId": null, "name": "2491_Click Submit Search", "category": "other", "apiName": "2491_Click_Submit_Search", "eventType": "custom", "eventFilter": null}, {"id": "5111541530361856", "viewId": null, "name": "2187_Click_Search_Other", "category": "other", "apiName": "2187_Click_Search_Other", "eventType": "custom", "eventFilter": null}, {"id": "5114719476908032", "viewId": null, "name": "1866 Add to basket", "category": "other", "apiName": "1866_add_to_basket", "eventType": "custom", "eventFilter": null}, {"id": "5132199549206528", "viewId": null, "name": "1635 add to basket", "category": "other", "apiName": "1635_add_to_basket", "eventType": "custom", "eventFilter": null}, {"id": "5132782356135936", "viewId": null, "name": "1683 Clicks on Bin Icon in Description", "category": "other", "apiName": "1683_bin_icon_description", "eventType": "custom", "eventFilter": null}, {"id": "5155894114123776", "viewId": null, "name": "2521 Click Search TV", "category": "other", "apiName": "2521_Click_Search_TV", "eventType": "custom", "eventFilter": null}, {"id": "5169869367279616", "viewId": null, "name": "2360 Progress Self install", "category": "other", "apiName": "2360_Progress_Self_install", "eventType": "custom", "eventFilter": null}, {"id": "5221583457878016", "viewId": null, "name": "2491_Click_Search_Broadband", "category": "other", "apiName": "2491_Click_Search_Broadband", "eventType": "custom", "eventFilter": null}, {"id": "5232729988530176", "viewId": null, "name": "CSCRO Sort Highest", "category": "other", "apiName": "cscro_sort_highest", "eventType": "custom", "eventFilter": null}, {"id": "5265318438764544", "viewId": null, "name": "2521 Click Search Landline", "category": "other", "apiName": "2521_Click_Search_Landline", "eventType": "custom", "eventFilter": null}, {"id": "5338269246816256", "viewId": null, "name": "2187_Click Search recommendation", "category": "other", "apiName": "2187_Click_Search_recommendation", "eventType": "custom", "eventFilter": null}, {"id": "5343051156029440", "viewId": null, "name": "2187_Click Search popular", "category": "other", "apiName": "2187_Click_Search_Popular", "eventType": "custom", "eventFilter": null}, {"id": "5429294250328064", "viewId": null, "name": "2491_Click_Page_Tile", "category": "other", "apiName": "2491_Click_Page_Tile", "eventType": "custom", "eventFilter": null}, {"id": "5467073699119104", "viewId": null, "name": "CSCRO Data filter Unlimited", "category": "other", "apiName": "cscro_data_filter_unlimited", "eventType": "custom", "eventFilter": null}, {"id": "5531838685380608", "viewId": null, "name": "CSCRO Data filter 125GB", "category": "other", "apiName": "cscro_data_filter_125gb", "eventType": "custom", "eventFilter": null}, {"id": "5536899002007552", "viewId": null, "name": "2187_Click_Page_Tile", "category": "other", "apiName": "2187_Click_Page_Tile", "eventType": "custom", "eventFilter": null}, {"id": "5632834526773248", "viewId": null, "name": "1741 Banner More info link", "category": "other", "apiName": "1741_banner_more_info_link", "eventType": "custom", "eventFilter": null}, {"id": "5681887566364672", "viewId": null, "name": "1722 gpls cta click", "category": "other", "apiName": "1722_gpls_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "5696323943399424", "viewId": null, "name": "2491_Click_Search_TV", "category": "other", "apiName": "2491_Click_Search_TV", "eventType": "custom", "eventFilter": null}, {"id": "5721864570404864", "viewId": null, "name": "2187_Click_Search_Home", "category": "other", "apiName": "2187_Click_Search_Home", "eventType": "custom", "eventFilter": null}, {"id": "5732883124453376", "viewId": null, "name": "2491_Click Search popular", "category": "other", "apiName": "2491_Click_Search_Popular", "eventType": "custom", "eventFilter": null}, {"id": "5803831502569472", "viewId": null, "name": "1721 Overlay cta close", "category": "other", "apiName": "1721_overlay_cta_close", "eventType": "custom", "eventFilter": null}, {"id": "5859353652101120", "viewId": null, "name": "1741 Breakdown More info link", "category": "other", "apiName": "1741_more_info_link", "eventType": "custom", "eventFilter": null}, {"id": "5861123767926784", "viewId": null, "name": "CSCRO Sort Lowest", "category": "other", "apiName": "cscro_sort_lowest", "eventType": "custom", "eventFilter": null}, {"id": "5873323570102272", "viewId": null, "name": "1721 Overlay X click", "category": "other", "apiName": "1721_overlay_x_click", "eventType": "custom", "eventFilter": null}, {"id": "6006123575115776", "viewId": null, "name": "2187_Click Search", "category": "other", "apiName": "2187_Click_Search", "eventType": "custom", "eventFilter": null}, {"id": "6040144193519616", "viewId": null, "name": "1683 Banner Remove Item CTA", "category": "other", "apiName": "1683_banner_remove_item_cta", "eventType": "custom", "eventFilter": null}, {"id": "6054403117940736", "viewId": null, "name": "2521 Click Search Popular", "category": "other", "apiName": "2521_Click_Search_Popular", "eventType": "custom", "eventFilter": null}, {"id": "6190560057229312", "viewId": null, "name": "2360 Progress Engineer install", "category": "other", "apiName": "2360_Progress_Engineer_install", "eventType": "custom", "eventFilter": null}, {"id": "6248203316625408", "viewId": null, "name": "2521 Click Search Other", "category": "other", "apiName": "2521_Click_Search_Other", "eventType": "custom", "eventFilter": null}, {"id": "6248877861371904", "viewId": null, "name": "2187_Click_Search_Broadband", "category": "other", "apiName": "2187_Click_Search_Broadband", "eventType": "custom", "eventFilter": null}, {"id": "6286862952693760", "viewId": null, "name": "1635 SVC Initialised", "category": "other", "apiName": "1635_svc_initialised", "eventType": "custom", "eventFilter": null}, {"id": "6347362921086976", "viewId": null, "name": "CSCRO Data filter 5GB", "category": "other", "apiName": "cscro_data_filter_5gb", "eventType": "custom", "eventFilter": null}, {"id": "6363752197521408", "viewId": null, "name": "2491_Click_Search_Landline", "category": "other", "apiName": "2491_Click_Search_Landline", "eventType": "custom", "eventFilter": null}, {"id": "6389705676161024", "viewId": null, "name": "1741 banner add offer cta", "category": "other", "apiName": "1741_banner_add_offer_cta", "eventType": "custom", "eventFilter": null}, {"id": "6399572728086528", "viewId": null, "name": "2491_Click_Search_Home", "category": "other", "apiName": "2491_Click_Search_Home", "eventType": "custom", "eventFilter": null}, {"id": "6411690676322304", "viewId": null, "name": "Continue button on Basket page", "category": "other", "apiName": "2252_continue_button_on_basket_page", "eventType": "custom", "eventFilter": null}, {"id": "6417091799023616", "viewId": null, "name": "2521 Click Submit Search", "category": "other", "apiName": "2521_Click_Submit_Search", "eventType": "custom", "eventFilter": null}, {"id": "6460425433251840", "viewId": null, "name": "1721 Flare click", "category": "other", "apiName": "1721_flare_click", "eventType": "custom", "eventFilter": null}, {"id": "6512807840055296", "viewId": null, "name": "CSCRO Sort Featured", "category": "other", "apiName": "cscro_sort_featured", "eventType": "custom", "eventFilter": null}, {"id": "6527455563874304", "viewId": null, "name": "2187_Click Submit Search", "category": "other", "apiName": "2187_Click_Submit_Search", "eventType": "custom", "eventFilter": null}, {"id": "6538223147548672", "viewId": null, "name": "CSCRO Hero clicks", "category": "other", "apiName": "cscro_hero_clicks", "eventType": "custom", "eventFilter": null}, {"id": "6555194157170688", "viewId": null, "name": "2491_Click Search recommendation", "category": "other", "apiName": "2491_Click_Search_recommendation", "eventType": "custom", "eventFilter": null}, {"id": "6557326975434752", "viewId": null, "name": "1683 Banner Add Offer CTA", "category": "other", "apiName": "1683_banner_add_offer_cta", "eventType": "custom", "eventFilter": null}, {"id": "6557365430910976", "viewId": null, "name": "2521 Click Search recommendation", "category": "other", "apiName": "2521_Click_Search_recommendation", "eventType": "custom", "eventFilter": null}, {"id": "6565597740269568", "viewId": null, "name": "1741 bin icon clicked", "category": "other", "apiName": "1741_bin_icon_description", "eventType": "custom", "eventFilter": null}, {"id": "6608840343420928", "viewId": null, "name": "1635 Address Confirmed", "category": "other", "apiName": "1635_Address_Confirmed", "eventType": "custom", "eventFilter": null}, {"id": "6638125288521728", "viewId": null, "name": "2210 Email Continue CTA Click", "category": "other", "apiName": "2210_email_continue_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "6652458422763520", "viewId": null, "name": "2521 Click Search Home", "category": "other", "apiName": "2521_Click_Search_Home", "eventType": "custom", "eventFilter": null}, {"id": "6715553438498816", "viewId": null, "name": "2187_Click_Search_TV", "category": "other", "apiName": "2187_Click_Search_TV", "eventType": "custom", "eventFilter": null}, {"id": "6730809764216832", "viewId": null, "name": "1742 More Info Link", "category": "other", "apiName": "1742_more_info_link", "eventType": "custom", "eventFilter": null}, {"id": "6740935420149760", "viewId": null, "name": "2465 Cancellation", "category": "other", "apiName": "2465_cancellation", "eventType": "custom", "eventFilter": null}], "dimensions": [{"id": "23190090350", "name": "Product category", "apiName": "productCategory", "segmentId": null}, {"id": "23191600549", "name": "Visitor Status", "apiName": "visitorStatus", "segmentId": null}, {"id": "23211470641", "name": "Installation Type", "apiName": "installationType", "segmentId": null}, {"id": "23213050672", "name": "Page Journey", "apiName": "pageJourney", "segmentId": null}, {"id": "23215050298", "name": "Stream attach", "apiName": "streamAttach", "segmentId": null}, {"id": "23421510994", "name": "Contract Length", "apiName": "contractLength", "segmentId": null}, {"id": "23922132075", "name": "Stream continue cta user decision", "apiName": "stream_continue_cta_user_decision", "segmentId": null}, {"id": "24343480618", "name": "Payment Type", "apiName": "paymentType", "segmentId": null}, {"id": "29237490044", "name": "Contentsquare Live Signal", "apiName": "ContentsquareLiveSignal", "segmentId": null}, {"id": "5880186063814656", "name": "Page URL Path", "apiName": "page_url_path", "segmentId": null}], "projectJS": function(){/**
 * IIFE to scope the refresh of the Optimizely snippet after the user interacts with the cookie consent banner
 * Events are attached to the cookie consent CTAs which close the banner.
 * Once the banner is closed the logic waits for the consentGroup cookie to exist (which is required for our Optimizely audiences).
 * Then the snippet is reactivated.
 */
// Test cookie consent - START//
(() => {
    // if(!window.sessionStorage.getItem('optiqa')) return;

    const runCookieConsentDetection = () => {
        try {
            console.log("in consent detection");
            const debug = false;
            const utils = window["optimizely"].get("utils");

            // Recursively check for cookie
            const waitForCookie = (cookieName, timeout, interval) => {
                return new Promise((resolve, reject) => {
                    const startTime = Date.now();

                    function checkCookie() {
                        const cookies = document.cookie.split(";");
                        for (const cookie of cookies) {
                            const [name, value] = cookie.trim().split("=");
                            if (name === cookieName) {
                                resolve(value);
                                return;
                            }
                        }
                        if (Date.now() - startTime >= timeout) {
                            reject(
                                new Error(
                                    `Timeout waiting for cookie '${cookieName}'`
                                )
                            );
                        } else {
                            setTimeout(checkCookie, interval);
                        }
                    }

                    checkCookie();
                });
            };

            // Activate Optimizely
            const activateOptimizely = () => {
                console.log('checking activate');
                // Wait for OptanonAlertBoxClosed to exist
                waitForCookie("consentGroup", 5000, 50)
                    .then(() => {
                        // ensures the optimizely object is defined globally
                        if (!debug) {
                            window["optimizely"] = window["optimizely"] || [];

                            // sends the activate push to the Optimizely snippet
                            window["optimizely"].push({
                                type: "activate",
                            });
                        }
                        if (debug) console.log("OPTIMIZELY ACTIVATED");
                    })
                    .catch((error) => {
                        console.error(error.message);
                    });
            };

            // Accept all cookies CTA
            utils
                .waitForElement(
                    "#cookiePrompt .cm-overlay-container .cm-overlay-bottom-button-container #privacy_pref_optin"
                )
                .then((acceptAllCookiesCTA) => {
                    acceptAllCookiesCTA.addEventListener(
                        "click",
                        activateOptimizely,
                        {
                            once: true,
                        }
                    );
                });

            // Accept essential cookies CTA
            utils
                .waitForElement(
                    "#cookiePrompt .cm-overlay-container .cm-overlay-bottom-button-container #privacy_pref_optout"
                )
                .then((acceptEssentialCookiesCTA) => {
                    acceptEssentialCookiesCTA.addEventListener(
                        "click",
                        activateOptimizely,
                        { once: true }
                    );
                });

            // Click on Open Cookie Jar CTA
            utils
                .waitForElement(
                    "#cookiePrompt .cm-overlay-container .cm-overlay-bottom-button-container #open_preferences"
                )
                .then((openCookieJarCTA) => {
                    openCookieJarCTA.addEventListener("click", () => {
                        // Accept all cookies CTA
                        utils
                            .waitForElement(
                                "#cookiePreferencesBanner .cm-overlay-inner-middle-container-content #acceptAll"
                            )
                            .then((acceptAllCookiesCTA) => {
                                acceptAllCookiesCTA.addEventListener(
                                    "click",
                                    activateOptimizely,
                                    { once: true }
                                );
                            });

                        // Accept essential cookies CTA
                        utils
                            .waitForElement(
                                "#cookiePreferencesBanner .cm-overlay-inner-middle-container-content #rejectAllBanner"
                            )
                            .then((acceptEssentialCookiesCTA) => {
                                acceptEssentialCookiesCTA.addEventListener(
                                    "click",
                                    activateOptimizely,
                                    { once: true }
                                );
                            });

                        // Save cookie setting CTA
                        utils
                            .waitForElement(
                                "#cookiePreferencesBanner .cm-overlay-inner-middle-container-content #preferences_prompt_submit"
                            )
                            .then((saveCookieSettingsCTA) => {
                                saveCookieSettingsCTA.addEventListener(
                                    "click",
                                    activateOptimizely,
                                    { once: true }
                                );
                            });
                    });
                });
        } catch (error) {
            console.log(error);
        }
    };
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
        type: "addListener",
        filter: {
            type: "lifecycle",
            name: "initialized",
        },
        handler: function (event) {
            runCookieConsentDetection();
        },
    });
})();

//Test cookie consent - END //

//Add common functions START
const sales_cro = {
    getActiveVariationObject: function (experimentId) {
        var state = window["optimizely"].get("state");
        const activeExperiments = state.getExperimentStates({
            "isActive": true
        });
        const experimentData = activeExperiments[experimentId];
        if (experimentData) {
            return experimentData["variation"];
        }
    },
    fireGA4: function (experimentID, storyNumber, eventName, eventValue) {
        //example storyNumber: 'CSCRO-1069'
        const variationInfo = window.sales_cro.getActiveVariationObject(experimentID);
        if (typeof variationInfo === "object" && Object.keys(variationInfo).length > 0) {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'optimizely_event',
                'event_name': 'optimizely_event',
                'optimizely_experiment': experimentID,
                'optimizely_experiment_name': storyNumber,
                'optimizely_variant': variationInfo.id,
                'optimizely_variant_name': variationInfo.name,
                'optimizely_event_name': eventName,
                'optimizely_event_value': eventValue,
            });
        }
    },
    fireGA: function (experimentID, eventLabel) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            "event": "siteInteraction",
            "eventCategory": "a/b testing",
            "eventAction": `cscro-${experimentID}`,
            "eventLabel": `${eventLabel}`,
            "eventValue": 1,
        });
    },
    fireOpti: function (eventName) {
        window.optimizely = window.optimizely || [];
        window["optimizely"].push({
            "type": "event",
            "eventName": eventName
        });
    },
    getCookie: function (cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    setCookie: function (name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(
                date.getTime() + days * 24 * 60 * 60 * 1000
            );
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie =
            name +
            "=" +
            encodeURIComponent(value) +
            expires +
            "; path=/";
    },
    deleteCookie: function (name) {
        document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
    createOptiSegment: function (attributesObject) {
        window.optimizely = window.optimizely || [];
        window.optimizely.push({
            "type": "user",
            "attributes": attributesObject
        });
    },
    waitUntil: (cond, cb, timeout = 10000) => {
        const start = Date.now();
        const check = () => {
            if (Date.now() - start > timeout) return;
            const el = typeof cond === 'string' ? document.querySelector(cond) : undefined;
            const ok = typeof cond === 'function' ? cond() : undefined;
            if (el) { cb(el); return; }
            if (ok) { cb(); return; }
            requestAnimationFrame(check);
        };
        requestAnimationFrame(check);
    },
    log: (msg, expTag = storyNumber) => {
        document.cookie.includes("vmDEV") && console.log(`[CSCRO] ${expTag} -->`, msg);
    },
    dispatchClick: (el) => {
        ["mousedown", "mouseup", "click"].forEach(event =>
            el.dispatchEvent(new MouseEvent(event, { bubbles: true }))
        );
    },
    checkPageChanges: (target, cb, dev, opts = { childList: true, subtree: true }, storyNumber) => {
        const debounce = (func, delay) => {
            let timeout;
            return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => func(...args), delay);
            };
        };

        const observer = new MutationObserver(
            debounce(() => {
                sales_cro.log('Mutation');
                cb();
            }, 100)
        );

        if (!dev) registerMO(storyNumber, observer);

        observer.observe(target, opts);
    }
};

window.sales_cro = sales_cro;
//Add common functions FINISH

window.localStorage.removeItem("_cp_service_provider");

if (window.location.href.indexOf("/buy") == -1) {
    window.sessionStorage.removeItem("seenAreYouMovingPage");
    window.sessionStorage.removeItem("boostData");
    window.sessionStorage.removeItem("seen_m250");
    window.sessionStorage.removeItem("boostedFromProductId");
    window.localStorage.removeItem("onlinesales-df-001");
}


// CSCRO-1596 - START
if ((window.location.href.indexOf("optiqa=true") > -1 || window.sessionStorage.getItem("optiqa") == "true")) {
    if (window.location.href.indexOf("/broadband/broadband-only") > -1 && window.sessionStorage.getItem("fromBBOnly") === null) {
        window.sessionStorage.setItem("fromBBOnly", "true");
    } else if (window.sessionStorage.getItem("fromBBOnly") !== null && window.location.href.indexOf("/buy") === -1) {
        window.sessionStorage.removeItem("fromBBOnly");
    }

    if (window.location.href.indexOf("/buy") === -1 && window.sessionStorage.getItem("continuedCheckout") !== null) {
        window.sessionStorage.removeItem("continuedCheckout");
    }
}
// CSCRO-1596 - END

//CSCRO-1377 - Start
window.sessionStorage.removeItem("shortlist");
//CSCRO-1377 - End

//CSCRO-1457 - Start
//if (window.location.href.indexOf("/broadband/packages") === -1 && window.location.href.indexOf("join") === -1 && //window.location.href.indexOf("buy") === -1 && window.sessionStorage.getItem("lastSelectedProduct_1457") !== null) {
//window.sessionStorage.removeItem("lastSelectedProduct_1457");
//}
//CSCRO-1457 - End

//CONDITION FOR 1222 - start
if (window.location.href.indexOf("join/checkout/success") > -1 || window.location.href.indexOf("buy/blast-off") > -1) {
    //if user purchase remove prev viewed
    window.localStorage.removeItem("previouslyViewedProductsObject");
}
//CONDITION FOR 1222 - end
if (window.location.href.indexOf("openbank=true") > -1) window.sessionStorage.setItem("openBank", "true");
if (window.location.href.indexOf("qa1166=true") > -1) window.sessionStorage.setItem("qa1166", "true");
//Add-Remove vmqa session storage and optiqa localstorage START

//Section 1: Managing QA query string
const url = window.location.href;

//CSCRO-1524 GCP v5 START
if (url.indexOf("gcpqa=true") > -1) {
    window.sessionStorage.setItem("gcpqa", "true");
} else if (url.indexOf("gcpqa=false") > -1 && window.sessionStorage.getItem("gcpqa") !== null) {
    window.sessionStorage.removeItem("gcpqa");
}
//CSCRO-1524 GCP v5 END

if (url.indexOf("vmqa=true") > -1) {
    window.localStorage.setItem("vmqa", "true");
} else if (url.indexOf("vmqa=false") > -1 && window.localStorage.getItem("vmqa") !== null) {
    window.localStorage.removeItem("vmqa");
}
if (url.indexOf("optiqa=true") > -1) {
    window.sessionStorage.setItem("optiqa", "true");
    sales_cro.setCookie("optiqa", "true", 1);
} else if (url.indexOf("optiqa=false") > -1 && window.sessionStorage.getItem("optiqa") !== null) {
    window.sessionStorage.removeItem("optiqa");
    sales_cro.deleteCookie("optiqa");
}
//Add-Remove vmqa session storage and optiqa localstorage FINISH

//Hold events for vmqa START
if ((window.location.href.indexOf("vmqa=true") > -1 || window.localStorage.getItem("vmqa") == "true")) {
    console.log("in disable tracking");
    window['optimizely'] = window['optimizely'] || [];
    window["optimizely"].push({
        "type": "disable",
        "scope": "tracking"
    });
}
//Hold events for vmqa FINISH

//DELETE JARVIS COOKIE FOR DYNAMIC MERCH - START
/*if(document.cookie.indexOf('_cp_jarvis') > -1){
    console.log("deleting cookie dm");
    sales_cro.deleteCookie("_cp_jarvis");
}*/
//DELETE JARVIS COOKIE FOR DYNAMIC MERCH - END

// Segments - START
// New vs Returning user.
if (url.indexOf("join/checkout/success") === -1) {
    (function (window) {
        'use strict';
        let timesInLoop = 0;
        let $timerNewReturningUser = window.setInterval(function () {
            if (window.optimizely !== undefined && window.optimizely.get("visitor") !== undefined) {
                window.clearInterval($timerNewReturningUser);
                const visitorStatusSegmentId = '23191600549';
                const visitorStatus = window.optimizely.get("visitor").first_session ? "new" : "returning";
                const currentVisitorStatus = (window.optimizely.get("visitor").custom !== undefined && window.optimizely.get("visitor").custom[visitorStatusSegmentId] !== undefined)
                    ? window.optimizely.get("visitor").custom[visitorStatusSegmentId].value
                    : "";
                if (visitorStatus !== currentVisitorStatus) {
                    window.sales_cro.createOptiSegment({ "visitorStatus": visitorStatus });
                }
            } else {
                timesInLoop += 1;
                if (timesInLoop > 60) {
                    window.clearInterval($timerNewReturningUser);
                }
            }
        }, 50);
    }(window));
}
//Code for pageJourney, productCategory and installationType segments.
const targetedPages = ['join/availability', 'join/are-you-moving', 'join/review', 'join/products', 'join/add-tv-stream', 'join/home-phone', 'join/installationSelection', 'join/installation/book-engineer', '/join/customer/details'];
var shouldCheckSegment = targetedPages.find((el) => url.includes(el));
if (url.indexOf("/join/") > -1 && shouldCheckSegment) {
    const userAttributesApiCode = {
        'pageJourney': "23213050672",
        'productCategory': '23190090350',
        'installationType': '23211470641',
        'contractLength': '23421510994'
    };
    (function (window) {
        'use strict';
        let timesInLoop = 0;
        let $timerSegments = window.setInterval(function () {
            var pageViewEvent = window.dataLayer.filter((i) => { if (i.event !== undefined) return i.event == "pageview"; });
            var checkoutEvent = window.dataLayer.filter((i) => { if (i.event !== undefined) return i.event == "checkout"; });
            let pollingEventCondition = (url.indexOf("/join/products") > -1 || url.indexOf("/join/are-you-moving") > -1) ? pageViewEvent.length > 0 : checkoutEvent.length > 0;
            if (pollingEventCondition && window.optimizely !== undefined && window.optimizely.get("visitor") !== undefined) {
                window.clearInterval($timerSegments);
                const pageJourney = pageViewEvent[0].page.journey;
                const currentpageJourney = (window.optimizely.get("visitor").custom !== undefined && window.optimizely.get("visitor").custom[userAttributesApiCode['pageJourney']] !== undefined)
                    ? window.optimizely.get("visitor").custom[userAttributesApiCode['pageJourney']].value
                    : "";
                if (pageJourney !== currentpageJourney) {
                    window.sales_cro.createOptiSegment({ "pageJourney": pageJourney });
                }

                if (checkoutEvent.length > 0) {
                    var productsArray = checkoutEvent[0].ecommerce.checkout.products;
                    if (window.location.href.indexOf("/join/customer/details") > -1) {
                        const installationType = productsArray[0].dimension1.indexOf("engineer installation") > -1
                            ? "engineer install"
                            : (productsArray[0].dimension1.indexOf("home delivery") > -1
                                ? "home delivery"
                                : (productsArray[0].dimension1.indexOf("click & collect") > -1
                                    ? "click & collect"
                                    : ""));
                        window.sales_cro.createOptiSegment({ "installationType": installationType });

                        const streamAttach = productsArray[0].dimension1.indexOf("tv 2.0") > -1 ? "stream attached" : "no stream attached";
                        window.sales_cro.createOptiSegment({ "streamAttach": streamAttach });
                    } else {
                        const productCategory = productsArray[0].category;
                        const contractLength = productsArray[0].dimension12;
                        const currentProductCategory = (window.optimizely.get("visitor").custom !== undefined && window.optimizely.get("visitor").custom[userAttributesApiCode['productCategory']] !== undefined)
                            ? window.optimizely.get("visitor").custom[userAttributesApiCode['productCategory']].value
                            : "";
                        const currentContractLength = (window.optimizely.get("visitor").custom !== undefined && window.optimizely.get("visitor").custom[userAttributesApiCode['contractLength']] !== undefined)
                            ? window.optimizely.get("visitor").custom[userAttributesApiCode['contractLength']].value
                            : "";
                        if (productCategory !== currentProductCategory && productCategory !== "") {
                            window.sales_cro.createOptiSegment({ "productCategory": productCategory });
                        }
                        if (contractLength !== currentContractLength && contractLength !== "") {
                            window.sales_cro.createOptiSegment({ "contractLength": contractLength });
                        }
                    }
                }
            } else {
                timesInLoop += 1;
                if (timesInLoop > 60) {
                    window.clearInterval($timerSegments);
                }
            }
        }, 50);
    }(window));
}


//PROD ENVIRONMENT
//GCP Page journey segment
if (url.indexOf("/buy/") > -1) {
    const userAttributesApiCode = {
        'pageJourney': "23213050672",
        'productCategory': '23190090350',
        'installationType': '23211470641',
        'contractLength': '23421510994'
    };
    (function (window) {
        'use strict';
        let timesInLoop = 0;
        let $timerSegments = window.setInterval(function () {
            if (window.optimizely !== undefined && window.optimizely.get("visitor") !== undefined) {
                window.clearInterval($timerSegments);
                const pageJourney = "gcp";
                const currentpageJourney = (window.optimizely.get("visitor").custom !== undefined && window.optimizely.get("visitor").custom[userAttributesApiCode['pageJourney']] !== undefined) ? window.optimizely.get("visitor").custom[userAttributesApiCode['pageJourney']].value : "";
                if (pageJourney !== currentpageJourney) {
                    window.sales_cro.createOptiSegment({ "pageJourney": pageJourney });
                }
            } else {
                timesInLoop += 1;
                if (timesInLoop > 60) {
                    window.clearInterval($timerSegments);
                }
            }
        }, 50);
    }(window));
}
//GCP Page journey segment END

// Page URL path attribute

window.optimizely = window.optimizely || [];
window.optimizely.push({
    type: "user",
    attributes: {
        page_url_path: window.location.pathname
    }
});

// Page URL path attribute END
// Segments - FINISH

// Global observer cleaner

(function () {
    const hasOptiqaParam = window.location.href.indexOf("optiqa=true") > -1;
    const hasOptiqaStorage = window.sessionStorage.getItem("optiqa") === "true";
    const hasOptiqaCookie = document.cookie.split(";").map(c => c.trim()).some(c => c === "optiqa=true");

    // if (!(hasOptiqaParam || hasOptiqaStorage || hasOptiqaCookie)) {
    //   return;
    // }

    if (window.croMOTeardownBooted) {
        return;
    }
    window.croMOTeardownBooted = true;

    const log = (...a) => console.log("[cro-mo]", ...a);

    window.croMORegistry = window.croMORegistry || new Map();

    window.croDisconnectOnUrlChange =
        window.croDisconnectOnUrlChange || new Set();

    let anonId = 0;
    const groupOf = (name) => (name || `anon-${++anonId}`);

    function ensureGroup(name) {
        if (!window.croMORegistry.has(name)) {
            window.croMORegistry.set(name, new Set());
            log(`create group "${name}"`);
        }
        return window.croMORegistry.get(name);
    }

    window.registerMO = function (name, mo) {
        if (mo === undefined && name && typeof name.disconnect === "function") {
            mo = name;
            name = undefined;
        }
        if (!mo || typeof mo.disconnect !== "function") {
            // log("registerMO called with a non-MutationObserver");
            return mo;
        }

        const group = groupOf(name);
        const set = ensureGroup(group);
        set.add(mo);
        log(`register MO in "${group}" (count=${set.size})`, mo);
        log(`registered observers in "${group}"`, Array.from(set));

        if (name) {
            window.croDisconnectOnUrlChange = window.croDisconnectOnUrlChange || new Set();
            if (!window.croDisconnectOnUrlChange.has(name)) {
                window.croDisconnectOnUrlChange.add(name);
                // log(`auto-added "${name}" to croDisconnectOnUrlChange`);
            }
        }

        return mo;
    };

    window.teardownMOGroup = function (name, options) {
        const opts = options || {};
        const set = window.croMORegistry.get(name);
        if (!set || !set.size) {
            // log(`teardown "${name}": nothing to disconnect`);
            return false;
        }
        log(`teardown "${name}" (${set.size} observers)`);
        set.forEach((mo) => {
            try {
                mo.disconnect();
                log(`disconnect MO from "${name}"`, mo);
            } catch (e) {
                console.warn("[cro-mo] disconnect error", e);
            }
        });
        window.croMORegistry.delete(name);
        if (!opts.skipCompleteLog) {
            log(`teardown "${name}" complete`);
        }
        return true;
    };

    function removeCSCROClassesOnUrlChange() {
        const removed = new Set();
        try {
            const targets = [document.documentElement, document.body];
            for (const el of targets) {
                if (!el || !el.classList) continue;
                for (const cls of Array.from(el.classList)) {
                    if (!/^CSCRO-/.test(cls)) continue;
                    el.classList.remove(cls);
                    removed.add(cls);
                    log(`remove class "${cls}" on URL change`);
                }
            }
        } catch (e) {
            // console.warn("[cro-mo] remove class error", e);
        }
        return removed;
    }

    function teardownConfiguredGroupsOnUrlChange() {
        const names = Array.from(window.croDisconnectOnUrlChange || []);

        const disconnected = new Set();
        names.forEach((n) => {
            if (window.teardownMOGroup(n, { skipCompleteLog: true })) {
                disconnected.add(n);
            }
        });

        const removedClasses = removeCSCROClassesOnUrlChange();

        names.forEach((n) => {
            if (disconnected.has(n) || removedClasses.has(n)) {
                log(`teardown "${n}" complete`);
            }
        });
    }

    (function startUrlChangeObserver() {
        if (window.croMOUrlWatchSetup) {
            // log("URL watcher already set up");
            return;
        }
        window.croMOUrlWatchSetup = true;

        let lastHref = location.href;
        log("URL watcher start:", lastHref);

        const onUrlChange = () => {
            if (location.href === lastHref) return;
            const from = lastHref;
            const to = location.href;
            lastHref = to;
            // log("URL changed:", { from, to });
            teardownConfiguredGroupsOnUrlChange();
        };

        ["pushState", "replaceState"].forEach((m) => {
            const orig = history[m];
            if (typeof orig === "function") {
                history[m] = function (...args) {
                    const ret = orig.apply(this, args);
                    // log(`history.${m} called`, args);
                    onUrlChange();
                    return ret;
                };
                // log(`patched history.${m}`);
            }
        });

        window.addEventListener("popstate", onUrlChange, { passive: true });
        // log("listening: popstate");

        window.addEventListener("hashchange", onUrlChange, { passive: true });
        // log("listening: hashchange");

    })();

})();

// Global observer cleaner - END
}, "interestGroups": [], "tagGroups": []},v=__webpack_require__(4860),h="initializeOptimizelyPreview";if(v.initGlobalStore(d),s.populateDirectiveData(),a.clientHasAlreadyInitialized())r.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(a.shouldBailForDesktopApp())r.log("Main / Disabling because of desktop app.");else if(a.conflictInObservingChanges())r.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(a.shouldLoadInnie())c.registerFunction("getProjectId",(function(){return d.projectId})),c.registerFunction("getAccountId",(function(){return d.accountId})),f.addScriptAsync("https://app.optimizely.com/js/innie.js"),r.log("Main / Disabling in favor of the editor client.");else if(a.shouldLoadEmbeddedEditor())r.log("Main / Loading embedded editor"),l.loadEmbeddedEditor("https://app.optimizely.com/dist/visual-editor/main.js");else if(a.shouldLoadPreview()){(a.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:d}),r.log("Main / Disabling in favor of the preview client."),__webpack_require__(9647).setupPreviewGlobal(),__webpack_require__(9647).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:d}),a.isSlave()||(c.registerFunction("getProjectId",(function(){return d.projectId})),f.addScriptSync("https://cdn.optimizely.com/js/preview2/22886250866.js"))}else if(a.shouldBootstrapDataForPreview()){c.registerFunction(h,(function(n){t(),c.unregisterFunction(h)}));var p=a.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:c.getFunction("getProjectId")();m=a.getProjectToken(),b=p,_=a.getPreviewLayerIds(),u="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",m).replace("__PROJECT_ID__",b).replace("__PREVIEW_LAYER_IDS__",_.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0);var g=a.getForceVariationIds();g&&g.length>0&&(u+="&optimizely_x="+g.join(",")),f.addScriptSync(u),__webpack_require__(9647).setupPreviewGlobal(),f.addScriptAsync("/dist/js/preview_ui.js")}else a.shouldBootstrapDataForEditor()?(c.registerFunction(h,(function(n){t(),c.unregisterFunction(h)})),f.addScriptAsync(window.optimizely_editor_data_endpoint)):a.shouldInitialize()&&t();var m,b,_;n.timeEnd("block");var y=n.now();n.setMark("optimizelyFinished",y,y)}}try{main()}catch(t){try{__webpack_require__(673).handleError(t)}catch(t){console.log(t)}}})();