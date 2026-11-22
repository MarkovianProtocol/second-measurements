/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={3958:function(t,n,e){var i=e(2702)(),r=e(7002);t.exports=function(t,n){function e(n){if(!(this instanceof e))return new e(n);try{throw new Error(n)}catch(n){n.name=t,this.stack=n.stack}i&&this.stack&&(this.stack=r(this.stack,t,n)),this.message=n||"",this.name=t}return e.prototype=new(n||Error),e.prototype.constructor=e,e.prototype.inspect=function(){return this.message?"["+t+": "+this.message+"]":"["+t+"]"},e.prototype.name=t,e}},7002:function(t){"use strict";t.exports=function(t,n,e){var i=n;return e&&(i+=": "+e),t=i+t.slice(t.indexOf("\n"))}},2702:function(t){"use strict";t.exports=function(){var t=new Error("yep");return!!t.stack&&"Error: yep\n"===t.stack.substr(0,11)}},1375:function(t,n,e){t.exports=function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}var i=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,a=void 0,u=function(t,n){y[r]=t,y[r+1]=n,2===(r+=2)&&(a?a(w):I())};function c(t){a=t}function s(t){u=t}var f="undefined"!=typeof window?window:void 0,l=f||{},d=l.MutationObserver||l.WebKitMutationObserver,v="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){return function(){return process.nextTick(w)}}function g(){return void 0!==o?function(){o(w)}:_()}function m(){var t=0,n=new d(w),e=document.createTextNode("");return n.observe(e,{characterData:!0}),function(){e.data=t=++t%2}}function b(){var t=new MessageChannel;return t.port1.onmessage=w,function(){return t.port2.postMessage(0)}}function _(){var t=setTimeout;return function(){return t(w,1)}}var y=new Array(1e3);function w(){for(var t=0;t<r;t+=2)(0,y[t])(y[t+1]),y[t]=void 0,y[t+1]=void 0;r=0}function E(){try{var t=e(4118);return o=t.runOnLoop||t.runOnContext,g()}catch(t){return _()}}var I=void 0;function A(t,n){var e=arguments,i=this,r=new this.constructor(O);void 0===r[S]&&Q(r);var o,a=i._state;return a?(o=e[a-1],u((function(){return $(a,r,o,i._result)}))):G(i,r,t,n),r}function T(t){var n=this;if(t&&"object"==typeof t&&t.constructor===n)return t;var e=new n(O);return V(e,t),e}I=v?p():d?m():h?b():void 0===f?E():_();var S=Math.random().toString(36).substring(16);function O(){}var k=void 0,R=1,C=2,N=new H;function D(){return new TypeError("You cannot resolve a promise with itself")}function x(){return new TypeError("A promises callback cannot return that same promise.")}function j(t){try{return t.then}catch(t){return N.error=t,N}}function M(t,n,e,i){try{t.call(n,e,i)}catch(t){return t}}function P(t,n,e){u((function(t){var i=!1,r=M(e,n,(function(e){i||(i=!0,n!==e?V(t,e):z(t,e))}),(function(n){i||(i=!0,F(t,n))}),"Settle: "+(t._label||" unknown promise"));!i&&r&&(i=!0,F(t,r))}),t)}function L(t,n){n._state===R?z(t,n._result):n._state===C?F(t,n._result):G(n,void 0,(function(n){return V(t,n)}),(function(n){return F(t,n)}))}function U(t,e,i){e.constructor===t.constructor&&i===A&&e.constructor.resolve===T?L(t,e):i===N?(F(t,N.error),N.error=null):void 0===i?z(t,e):n(i)?P(t,e,i):z(t,e)}function V(n,e){n===e?F(n,D()):t(e)?U(n,e,j(e)):z(n,e)}function B(t){t._onerror&&t._onerror(t._result),q(t)}function z(t,n){t._state===k&&(t._result=n,t._state=R,0!==t._subscribers.length&&u(q,t))}function F(t,n){t._state===k&&(t._state=C,t._result=n,u(B,t))}function G(t,n,e,i){var r=t._subscribers,o=r.length;t._onerror=null,r[o]=n,r[o+R]=e,r[o+C]=i,0===o&&t._state&&u(q,t)}function q(t){var n=t._subscribers,e=t._state;if(0!==n.length){for(var i=void 0,r=void 0,o=t._result,a=0;a<n.length;a+=3)i=n[a],r=n[a+e],i?$(e,i,r,o):r(o);t._subscribers.length=0}}function H(){this.error=null}var Y=new H;function K(t,n){try{return t(n)}catch(t){return Y.error=t,Y}}function $(t,e,i,r){var o=n(i),a=void 0,u=void 0,c=void 0,s=void 0;if(o){if((a=K(i,r))===Y?(s=!0,u=a.error,a.error=null):c=!0,e===a)return void F(e,x())}else a=r,c=!0;e._state!==k||(o&&c?V(e,a):s?F(e,u):t===R?z(e,a):t===C&&F(e,a))}function W(t,n){try{n((function(n){V(t,n)}),(function(n){F(t,n)}))}catch(n){F(t,n)}}var X=0;function J(){return X++}function Q(t){t[S]=X++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Z(t,n){this._instanceConstructor=t,this.promise=new t(O),this.promise[S]||Q(this.promise),i(n)?(this._input=n,this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?z(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&z(this.promise,this._result))):F(this.promise,tt())}function tt(){return new Error("Array Methods must be provided an Array")}function nt(t){return new Z(this,t).promise}function et(t){var n=this;return i(t)?new n((function(e,i){for(var r=t.length,o=0;o<r;o++)n.resolve(t[o]).then(e,i)})):new n((function(t,n){return n(new TypeError("You must pass an array to race."))}))}function it(t){var n=new this(O);return F(n,t),n}function rt(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ot(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function at(t){this[S]=J(),this._result=this._state=void 0,this._subscribers=[],O!==t&&("function"!=typeof t&&rt(),this instanceof at?W(this,t):ot())}function ut(){var t=void 0;if(void 0!==e.g)t=e.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var i=null;try{i=Object.prototype.toString.call(n.resolve())}catch(t){}if("[object Promise]"===i&&!n.cast)return}t.Promise=at}return Z.prototype._enumerate=function(){for(var t=this.length,n=this._input,e=0;this._state===k&&e<t;e++)this._eachEntry(n[e],e)},Z.prototype._eachEntry=function(t,n){var e=this._instanceConstructor,i=e.resolve;if(i===T){var r=j(t);if(r===A&&t._state!==k)this._settledAt(t._state,n,t._result);else if("function"!=typeof r)this._remaining--,this._result[n]=t;else if(e===at){var o=new e(O);U(o,t,r),this._willSettleAt(o,n)}else this._willSettleAt(new e((function(n){return n(t)})),n)}else this._willSettleAt(i(t),n)},Z.prototype._settledAt=function(t,n,e){var i=this.promise;i._state===k&&(this._remaining--,t===C?F(i,e):this._result[n]=e),0===this._remaining&&z(i,this._result)},Z.prototype._willSettleAt=function(t,n){var e=this;G(t,void 0,(function(t){return e._settledAt(R,n,t)}),(function(t){return e._settledAt(C,n,t)}))},at.all=nt,at.race=et,at.resolve=T,at.reject=it,at._setScheduler=c,at._setAsap=s,at._asap=u,at.prototype={constructor:at,then:A,catch:function(t){return this.then(null,t)}},at.polyfill=ut,at.Promise=at,at}()},3826:function(t){"use strict";t.exports=function(t){var n,e={};if(!(t instanceof Object)||Array.isArray(t))throw new Error("keyMirror(...): Argument must be an object.");for(n in t)t.hasOwnProperty(n)&&(e[n]=n);return e}},2627:function(t){"use strict";t.exports=function(t,n,e,i){Object.defineProperty(t,n,{get:function(){var t=e.call(this);return Object.defineProperty(this,n,{value:t,enumerable:!!i,writable:!0}),t},set:function(t){return Object.defineProperty(this,n,{value:t,enumerable:!!i,writable:!0}),t},enumerable:!!i,configurable:!0})}},9891:function(t){"use strict";var n=Element.prototype,e=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;t.exports=function(t,n){if(e)return e.call(t,n);for(var i=t.parentNode.querySelectorAll(n),r=0;r<i.length;r++)if(i[r]==t)return!0;return!1}},5556:function(t){!function(){function n(t,n){var e,i,r,o,a,u,c,s;for(e=3&t.length,i=t.length-e,r=n,a=3432918353,u=461845907,s=0;s<i;)c=255&t.charCodeAt(s)|(255&t.charCodeAt(++s))<<8|(255&t.charCodeAt(++s))<<16|(255&t.charCodeAt(++s))<<24,++s,r=27492+(65535&(o=5*(65535&(r=(r^=c=(65535&(c=(c=(65535&c)*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295)<<13|r>>>19))+((5*(r>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16);switch(c=0,e){case 3:c^=(255&t.charCodeAt(s+2))<<16;case 2:c^=(255&t.charCodeAt(s+1))<<8;case 1:r^=c=(65535&(c=(c=(65535&(c^=255&t.charCodeAt(s)))*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295}return r^=t.length,r=2246822507*(65535&(r^=r>>>16))+((2246822507*(r>>>16)&65535)<<16)&4294967295,r=3266489909*(65535&(r^=r>>>13))+((3266489909*(r>>>16)&65535)<<16)&4294967295,(r^=r>>>16)>>>0}var e=n;e.v2=function(t,n){for(var e,i=t.length,r=n^i,o=0;i>=4;)e=1540483477*(65535&(e=255&t.charCodeAt(o)|(255&t.charCodeAt(++o))<<8|(255&t.charCodeAt(++o))<<16|(255&t.charCodeAt(++o))<<24))+((1540483477*(e>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^(e=1540483477*(65535&(e^=e>>>24))+((1540483477*(e>>>16)&65535)<<16)),i-=4,++o;switch(i){case 3:r^=(255&t.charCodeAt(o+2))<<16;case 2:r^=(255&t.charCodeAt(o+1))<<8;case 1:r=1540483477*(65535&(r^=255&t.charCodeAt(o)))+((1540483477*(r>>>16)&65535)<<16)}return r=1540483477*(65535&(r^=r>>>13))+((1540483477*(r>>>16)&65535)<<16),(r^=r>>>15)>>>0},e.v3=n,t.exports=e}()},1691:function(t,n,e){var i=e(5556).v3,r=Math.pow(2,32),o=function(t,n){return(i(t,n)>>>0)/r};t.exports={Seed:{IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},hashToHex:function(t,n){var e=i(t,n);return(e>>>16).toString(16)+(65535&e).toString(16)},hashToInt:function(t,n,e){return Math.floor(o(t,n)*e)},hashToReal:o,toByteString:function(t){var n=String.fromCharCode;return t.replace(/[\S\s]/gi,(function(t){t=t.charCodeAt(0);var e=n(255&t);return t>255&&(e=n(t>>>8&255)+e),t>65535&&(e=n(t>>>16)+e),e}))}}},8674:function(t,n,e){var i=e(8275).pick,r=e(2025).get("stores/audience_data"),o=e(7566),a=e(3111),u=e(2895),c=e(7474);function s(t){var n=["type","selector","attributes","value"],e=Object.assign({},t);return e.changeSet=t.changeSet.map((function(t){return i(c.dereferenceChangeId(t),n)})),e}n.emitLayerDecided=function(t){var n=(t.decisionTicket?t.decisionTicket.audienceIds:[]).map((function(t){return{id:t,name:r.get(t).name}})),e={type:a.TYPES.LIFECYCLE,name:"layerDecided",data:Object.assign(t,{audiences:n})},i=c.translateLayerEventToCampaignEvent(e);o.emit(e),o.emit(i)},n.emitViewActivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"viewActivated",data:t},e=c.translateViewActivatedToPageActivated(n);o.emit(n),o.emit(e)},n.emitViewsActivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"viewsActivated",data:t};o.emit(n)},n.emitCampaignsDecided=function(t){o.emit({type:a.TYPES.LIFECYCLE,name:"campaignsDecided",data:{pageIds:t}})},n.emitPageDeactivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"pageDeactivated",data:t};o.emit(n)},n.emitActivateEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activate"},!0)},n.emitActivatedEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activated"})},n.emitInitializedEvent=function(){var t={type:a.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),o.emit(t)},n.emitOriginsSyncedEvent=function(){var t={type:a.TYPES.LIFECYCLE,name:"originsSynced"};o.emit(t)},n.emitActionAppliedEvent=function(t){var n={type:t.type,campaignId:t.layerId,pageId:t.pageId,experimentId:t.experimentId,variationId:t.variationId};u.defineProperty(n,"changes",(function(){return s(t).changeSet}),"actionAppliedEvent");var e={type:a.TYPES.ACTION,name:"applied",data:n};o.emit(e)},n.emitActionsForDecisionAppliedEvent=function(t,n){var e={decision:t};u.defineProperty(e,"actions",(function(){return n.map(s)}),"appliedAllForDecisionEvent");var i={type:a.TYPES.ACTION,name:"appliedAllForDecision",data:e};o.emit(i)},n.emitSendEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"sendEvents"};o.emit(t)},n.emitMaybeSendEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"maybeSendEvents"};o.emit(t)},n.emitHoldEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"holdEvents"};o.emit(t)}},188:function(t,n,e){Object.defineProperty(n,"u",{value:!0});var i=e(8275),r=i.cloneDeep,o=i.isEqual,a=i.mapValues,u=i.pick,c=i.pickBy,s=e(9207),f=e(2895),l=e(7474),d=e(5686),v=e(3272);function h(t,n,e,i){var r=t.getLayerState(i),o=n.get(i),a=e.get();if(!r||!o)return a?{layer:{name:a.layerName,id:a.layerId,policy:a.layerPolicy,integrationStringVersion:a.integrationStringVersion},experiment:{name:a.experimentName,id:a.experimentId},variation:{name:a.variationName,id:a.variationId},isLayerHoldback:!1}:null;if(d.isSingleExperimentPolicy(o.policy)&&r.decision.isLayerHoldback)return null;var u,c,s=r.decision.experimentId,f=r.decision.variationId;return s&&f&&(u=o.experiments.find((function(t){return t.id===s})))&&(c=u.variations.find((function(t){return t.id===f})))?{layer:{name:o.name,id:o.id,policy:o.policy,integrationStringVersion:o.integrationStringVersion},experiment:{name:u.name,id:u.id},variation:{name:c.name,id:c.id},isLayerHoldback:r.decision.isLayerHoldback}:null}function p(t,n,e,i,r,a,c){var s=[],f=t.getLayerStates();c.onlySingleExperiments&&(f=f.filter((function(t){var e=n.get(t.layerId);return e&&d.isSingleExperimentPolicy(e.policy)})));var l=e.getActiveViewIds(),h=f.map((function(t){var e,i=!!t.decision.variationId,o=t.decisionActivationId&&t.decisionActivationId===r.getActivationId(),a=v.getExperimentAndVariation(),u=a?a.variationId:null,c=i&&t.decision.variationId===u,s=((null==(e=n.get(null==t?void 0:t.layerId))?void 0:e.viewIds)||[]).every((function(t){return!l.includes(t)}));return Object.assign(t,{isActive:i&&o&&!s||c,visitorRedirected:c})}));return(a?"function"==typeof a?h.filter(a):h.filter((function(t){return Object.keys(a).every((function(n){return o(t[n],a[n])}))})):h).forEach((function(t){var e=function(t,n,e,i){var r,o,a=t.layerId,c=n.get(a)||{},s=(c.experiments||[]).map((function(t){return u(t,["id","name"])}));if(!i&&c.decisionMetadata&&c.decisionMetadata.offerConsistency)return;var f={id:a,campaignName:c.name||null,experiment:null,audiences:[],allExperiments:s,variation:null,reason:t.decision.reason,isActive:!!t.isActive,visitorRedirected:t.visitorRedirected,isInCampaignHoldback:t.decision.isLayerHoldback};t.decision&&t.decision.experimentId&&(r=(c.experiments||[]).find((function(n){return n.id===t.decision.experimentId}))),r&&(f.experiment=u(r,["id","name","campaignName"])),r&&t.decision.variationId&&(o=r.variations.find((function(n){return n.id===t.decision.variationId}))),o&&(f.variation=u(o,["id","name"]));var l=(t.decisionTicket.audienceIds||[]).map((function(t){return u(e.get(t),["id","name"])}));return f.audiences=l,c.decisionMetadata&&c.decisionMetadata.offerConsistency&&(f.pageId=t.pageId),f}(t,n,i,c.includeOfferConsistency);e&&s.push(e)})),s}n.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(t,n,e,i,r,o,a,u,c){var s={},d={},v={},h={audiences:t.getAudiencesMap(),events:e.getEventsMap(),campaigns:s,pages:r.getPagesMap(),experiments:d,variations:v,projectId:c.getProjectId(),snippetId:c.getSnippetId(),accountId:c.getAccountId(),dcpServiceId:c.getDCPServiceId(),revision:c.getRevision(),clientName:n.getClientName(),clientVersion:n.getClientVersion()},p=l.dereferenceChangeId;return i.getAll().forEach((function(t){f.defineProperty(s,t.id,(function(){var n=Object.assign({},t);return f.defineProperty(n,"changes",(function(){return(t.changes||[]).map(p)}),"campaign"),f.defineProperty(n,"experiments",(function(){return(t.experiments||[]).map((function(t){return d[t.id]}))}),"campaign"),n}),"campaignMap","byId"),(t.experiments||[]).forEach((function(t){f.defineProperty(d,t.id,(function(){var n=Object.assign({},t);return f.defineProperty(n,"changes",(function(){return(t.changes||[]).map(p)}),"experiment"),f.defineProperty(n,"variations",(function(){return(t.variations||[]).map((function(t){return v[t.id]}))}),"experiment"),n}),"experimentMap","byId"),(t.variations||[]).forEach((function(t){f.defineProperty(v,t.id,(function(){var n=Object.assign({},t);return f.defineProperty(n,"actions",(function(){return(t.actions||[]).map((function(t){return Object.assign({},t,{changes:(t.changes||[]).map(p)})}))}),"variation"),n}),"variationMap","byId")}))}))})),h.groups=o.getGroupsMap(),h}],n.visitor=["stores/visitor",function(t){return r(t.getVisitorProfile())}],n.visitor_id=["stores/visitor_id",function(t){return{randomId:t.getRandomId()}}],n.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(t,n,i,r,o,f,l){return{getTrafficExclusionStats:function(){return e(4308).getStats()},getCampaignStates:function(e){var r={};return p(i,n,o,t,f,e,{includeOfferConsistency:!1}).forEach((function(t){r[t.id]=t})),r},getExperimentStates:function(e){var r=p(i,n,o,t,f,e,{includeOfferConsistency:!1,onlySingleExperiments:!0}),a=["audiences","variation","reason","visitorRedirected","isActive"];return r.reduce((function(t,n){var e=n.allExperiments[0];return t[e.id]=Object.assign({},u(n,a),{id:e.id,experimentName:e.name,isInExperimentHoldback:n.isInCampaignHoldback}),t}),{})},getCampaignStateLists:function(e){var r={};return p(i,n,o,t,f,e,{includeOfferConsistency:!0}).forEach((function(t){var n=t.id;r[n]||(r[n]=[]),r[n].push(t)})),r},getPageStates:function(t){var n=o.getAll(),e=Object.keys(n).reduce((function(t,e){var i=n[e],o=r.get(i.id);return t[i.id]=Object.assign({},u(o,["id","name","apiName","category","staticConditions","tags"]),u(i,["isActive","metadata"])),t[i.id].isActive=!!t[i.id].isActive,t}),{});return t?c(e,t):e},isGlobalHoldback:function(){return f.isGlobalHoldback()},getActivationId:function(){return f.getActivationId()},getVariationMap:function(){var t=i.getLayerStates(),e={};return t.forEach((function(t){var i=n.get(t.layerId);if(t.decision&&t.decision.experimentId&&(e[t.decision.experimentId]={id:t.decision.variationId,name:null,index:null},i)){var r=(i.experiments||[]).find((function(n){return n.id===t.decision.experimentId}));if(r&&t.decision.variationId)var o=r.variations.find((function(n){return n.id===t.decision.variationId})),a=r.variations.findIndex((function(n){return n.id===t.decision.variationId}));o&&(e[t.decision.experimentId]={id:t.decision.variationId,name:o.name,index:a})}})),e},getActiveExperimentIds:function(){var t={},n=this.getCampaignStateLists({isActive:!0});return Object.keys(n).forEach((function(e){n[e].forEach((function(n){t[n.experiment.id]=!0}))})),Object.keys(t)},getRedirectInfo:function(){var t=v.getExperimentAndVariation();return t&&(t.referrer=v.getReferrer()),t},getDecisionString:function(t){if(!t)throw new Error("Must pass a config to getDecisionString");t=Object.assign({maxLength:255,shouldCleanString:!1},t);var e=h(i,n,l,t.campaignId);return e?s.generateAnalyticsString(e.layer,e.experiment,e.variation,e.isLayerHoldback,t.maxLength,t.shouldCleanString):null},getDecisionObject:function(t){if(!t)throw new Error("Must pass a config to getDecisionObject");t=Object.assign({maxLength:255,shouldCleanString:!1},t);var e=h(i,n,l,t.campaignId);if(!e)return null;var r=s.formatNamesAndIdsForAnalytics(e.layer,e.experiment,e.variation,t.shouldCleanString),o=a(r.names,(function(n,e){return s.combineAndTruncateIdAndName(n,r.idStrings[e],t.maxLength)})),u={experiment:o.experiment,variation:o.variation};return d.isSingleExperimentPolicy(e.layer.policy)||Object.assign(u,{campaign:o.layer,holdback:e.isLayerHoldback}),u}}}],n.utils=e(2671).create(),n.jquery=["env/jquery",function(t){return t}],n.event_emitter=e(5547)},9445:function(t,n,e){var i=e(7852),r=e(9454),o="optimizelyDataApi";n.registerFunction=function(t,n){var e=r.getGlobal(o);e||(e={},r.setGlobal(o,e)),e[t]||(e[t]=n)},n.unregisterFunction=function(t){var n=r.getGlobal(o);n&&n[t]&&(n[t]=function(){i.log('Ignoring attempt to call "'+o+"."+t+'" which has been unregistered.')})},n.getFunction=function(t){return r.getGlobal(o)[t]}},3737:function(t,n,e){var i=e(8275).isObject,r=e(7852),o=e(188),a=e(2025),u=a.get("stores/plugins"),c=e(136),s=e(6592),f=e(409),l=[e(3770),e(6708),e(8197)],d=["clientMetadata","cookieDomain","disable","load","optOut","rum"];n.push=function(t,n){var e,o,a,u;if(!Array.isArray(t)&&i(t))u=void 0!==t.version?t.version:1,e=t.type,a=[t];else if(Array.isArray(t))u=0,e=t[0],a=t.slice(1);else{if("string"!=typeof t)return r.warn("API / Ignoring non-array/object/string argument:",t),!1;u=0,e=t,a=[]}if(l[u]&&(o=l[u][e]),n&&-1===d.indexOf(e))return r.debug("API / Ignoring non high priority function:",e,a),!1;if(!o)return r.warn('API / No function found for "'+e+'" (v'+u+") with arguments:",a),!1;r.log('API / Executing: "'+e,'" with arguments:',a);try{o.apply(null,a),f.dispatch(c.RECORD_API_USAGE,{methodName:u?"v"+u+"."+e:e})}catch(t){r.error(t)}return!0},n.get=function(t){r.log('API / Getting module: "'+t+'"');var n=o[t];if(n?Array.isArray(n)&&(n=a.evaluate(n)):n=u.getPlugin(s.PluginTypes.apiModules,t),n)return f.dispatch(c.RECORD_API_USAGE,{methodName:"get."+t}),n;r.warn('Module "'+t+'" not found.')}},2895:function(t,n,e){var i=e(2627),r=e(136),o=e(409),a=e(7852);n.defineProperty=function(t,n,e,u,c){i(t,n,(function(){var t=["prop",u,c||n].join(".");return a.debug('Evaluating getter: "'+t+'"'),o.dispatch(r.RECORD_API_USAGE,{methodName:t}),e()}),!0)}},3770:function(t,n,e){var i=e(6708);function r(t){var n,e={};if(t)if(o(t))n=Number(t);else{if("object"!=typeof t)throw new Error("tracker: Revenue argument "+t+"not a number.");if("revenue"in(e=Object.assign({},t))){if(!o(e.revenue))throw new Error("tracker: Revenue value "+e.revenue+"not a number.");n=Number(e.revenue),delete e.revenue}}return void 0!==n&&(e.revenue=n),e}function o(t){return"number"==typeof t||"string"==typeof t&&!isNaN(Number(t))&&Number(t).toString()==t}n.activateGeoDelayedExperiments=function(t,n){n||(n=t.lists?"odds":"cdn3"),i.dataFromSource({data:t,source:n})},n.activateSiteCatalyst=function(t){t&&t.sVariable&&i.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:t.sVariable}})},n.bucketVisitor=function(t,n){if(t&&n){var e={experimentId:String(t)};n>256?e.variationId=String(n):e.variationIndex=String(n),i.bucketVisitor(e)}},n.bucketUser=n.bucketVisitor,n.disable=function(t){i.disable({scope:t})},n.log=function(t){void 0===t&&(t=!0),i.log({level:t?"INFO":"OFF"})},n.optOut=function(t){void 0===t&&(t=!0),i.optOut({isOptOut:t})},n.setCookieDomain=function(t){i.cookieDomain({cookieDomain:t})},n.setCookieExpiration=function(t){i.cookieExpiration({cookieExpirationDays:t})},n.setDimensionValue=function(t,n){var e={};e[t]=n,i.user({attributes:e})},n.setUserId=function(t){i.user({userId:t})},n.setGA4UserId=function(t){i.ga4User({ga4UserId:t})},n.storeThirdPartyData=function(t,n){i.dataFromSource({source:t,data:n})},n.trackEvent=function(t,n){i.event({eventName:t,tags:r(n)})}},7474:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.omit,a=e(2025),u=e(3019),c=e(2895),s=a.get("stores/change_data");n.translateDecisionToCampaignDecision=function(t){return f(r(t),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},n.translateLayerEventToCampaignEvent=function(t){var e={};return c.defineProperty(e,"campaign",(function(){return function(t){var e=r(t);return e.changes&&(e.changes=e.changes.map(n.dereferenceChangeId)),e.experiments&&e.experiments.forEach((function(t){t.changes&&(t.changes=t.changes.map(n.dereferenceChangeId)),t.variations&&t.variations.forEach((function(t){t.actions&&t.actions.forEach((function(t){t.changes&&(t.changes=t.changes.map(n.dereferenceChangeId))}))}))})),e}(t.data.layer)}),"campaignEvent"),e.decisionTicket=t.data.decisionTicket,e.decision=this.translateDecisionToCampaignDecision(t.data.decision),e.audiences=t.data.audiences,{type:"lifecycle",name:"campaignDecided",data:e}},n.translateViewActivatedToPageActivated=function(t){return{type:"lifecycle",name:"pageActivated",data:{page:t.data.view}}},n.dereferenceChangeId=function(t){var n=s.getChange(t);return n?u.safeReference(n):t};var f=function(t,n){var e=o(t,Object.keys(n));return Object.keys(n).forEach((function(i){var r=n[i];e[r]=t[i]})),e}},2671:function(t,n,e){var i=e(6761).Promise,r=e(7796).o,o=e(1166).F,a=e(5504).M,u=e(3329).poll,c=e(9558).x,s=e(6726).a;n.create=function(){return{observeSelector:r,onUrlChange:o,persistHtml:a,poll:u,Promise:i,waitForElement:c,waitUntil:s}}},6643:function(t){t.exports={DEFAULT_INTERVAL:20}},7796:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.isObject,a=(e(136),e(2025)),u=a.get("stores/directive"),c=e(1019),s=e(4970),f=(e(6592),e(409),e(9899).generate),l=e(3329),d=e(9454),v=(a.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),h={},p=function(t){p=function(){if(!u.shouldObserveChangesIndefinitely())return function(t){var n=l.poll(m.bind(null,t));h[t].cancelObservation=function(){n(),delete h[t]}};var t,n=function(){t.disconnect(),Object.keys(h).forEach(m),t.observe(i,e)},e={attributes:!0,childList:!0,subtree:!0},i=c.getDocumentElement();return t=s.create(n),function(n){var o=h[n];t.observe(i,e),o.cancelObservation=function(){delete h[n],r(h)&&t.disconnect()}}}(),p(t)};function g(t){var n=h[t];n&&n.cancelObservation&&n.cancelObservation()}function m(t){if(h[t]){if(function(t){var n=t.options.timeout;if(null!==n)if("function"==typeof n)try{return n()}catch(t){}else if(Date.now()-t.startTime>n)return!0;return!1}(h[t]))return 0===h[t].matchedCount&&"function"==typeof h[t].options.onTimeout&&h[t].options.onTimeout(),void g(t);var n=c.querySelectorAll(h[t].selector);n.length&&(n.forEach((function(n){n.l&&n.l[t]||h[t].callbackQueue.push(n)})),function(t){for(;h[t]&&h[t].callbackQueue.length;){var n=h[t].callbackQueue.shift();if(b(n,t),h[t].matchedCount=h[t].matchedCount+1,h[t].callback(n),h[t]&&h[t].options.once)return void g(t)}}(t))}}function b(t,n){t.l||(t.l={}),t.l[n]=!0}n.o=function(t,n,e){if(!function(t){try{c.querySelector(t)}catch(t){return!1}return!0}(t))throw new Error("observeSelector expects a valid css selector as its first argument");if("function"!=typeof n)throw new Error("observeSelector expects a function as its second argument");if(e&&(!o(e)||"function"==typeof e))throw new Error("observeSelector expects an object as its third argument");var i=f();return e=Object.assign({},v,e||{}),h[i]={callback:n,callbackQueue:[],matchedCount:0,options:e,selector:t,startTime:Date.now()},p(i),d.setTimeout(m.bind(null,i),0),g.bind(null,i)}},1166:function(t,n,e){var i=e(9899).generate,r=e(9454),o={},a=!1,u=null,c=null,s=null,f=null;function l(){a&&(window.history.pushState===s&&(window.history.pushState=u),window.history.replaceState===f&&(window.history.replaceState=c),u=null,c=null,s=null,f=null,a=!1)}function d(){var t=r.getHref();Object.keys(o).forEach((function(n){var e=o[n];e&&e(t)}))}n.F=function(t){var n=i(),e=0===Object.keys(o).length;return o[n]=t,e&&(r.addEventListener("popstate",d),r.addEventListener("hashchange",d),a||(u=window.history.pushState,c=window.history.replaceState,window.history.pushState=function(t,n,e){u.apply(window.history,arguments),d()},s=window.history.pushState,window.history.replaceState=function(t,n,e){c.apply(window.history,arguments),d()},f=window.history.replaceState,a=!0)),function(){!function(t){delete o[t],0===Object.keys(o).length&&(r.removeEventListener("popstate",d),r.removeEventListener("hashchange",d),l())}(n)}}},5504:function(t,n,e){var i=e(1019),r=e(9899).generate,o=e(4970),a={before:"beforebegin",after:"afterend",first_child:"afterbegin",last_child:"beforeend"},u=Object.keys(a),c=[];function s(t,n,e){var i,r,o=[];if("beforebegin"===n)for(i=t.previousSibling,r=0;r<e&&i;r++)o.unshift(i),i=i.previousSibling;else if("afterend"===n)for(i=t.nextSibling,r=0;r<e&&i;r++)o.push(i),i=i.nextSibling;else if("afterbegin"===n)for(i=t.firstChild,r=0;r<e&&i;r++)o.push(i),i=i.nextSibling;else if("beforeend"===n)for(i=t.lastChild,r=0;r<e&&i;r++)o.unshift(i),i=i.previousSibling;return o}function f(t){return document.documentElement.contains(t)}n.M=function(t,n,e){if("string"!=typeof t||!t)throw new Error("persistHtml: html must be a non-empty string");if(!function(t){try{i.querySelector(t)}catch(t){return!1}return!0}(n))throw new Error("persistHtml: invalid CSS selector: "+n);if(e=null!=e?e:"before",-1===u.indexOf(e))throw new Error("persistHtml: placement must be one of: "+u.join(", "));var l=a[e],d=i.querySelector(n);if(!d)throw new Error('persistHtml: no element found for selector "'+n+'"');if(("beforebegin"===l||"afterend"===l)&&!d.parentElement)throw new Error('persistHtml: placement "'+e+'" requires the anchor element to have a parent');var v=function(t){var n=document.createElement("div");return n.innerHTML=t,n.childNodes.length}(t);if(0===v)throw new Error("persistHtml: html produces no DOM nodes");var h=function(t){var n=document.createElement("div");n.innerHTML=t;var e=[];return Array.prototype.forEach.call(n.childNodes,(function(t){if(t.nodeType===Node.ELEMENT_NODE){var n=r();e.push(n),t.setAttribute("data-optly-persist-id",n)}})),{taggedHtml:n.innerHTML,ids:e}}(t);d.insertAdjacentHTML(l,h.taggedHtml);var p,g=s(d,l,v),m=!1,b={childList:!0,subtree:!0},_=i.getDocumentElement();function y(){if(!m){m=!0,p.disconnect();var t=c.indexOf(y);-1!==t&&c.splice(t,1),g.forEach((function(t){f(t)&&t.parentNode&&t.parentNode.removeChild(t)}))}}return(p=o.create((function(){if(!m&&g.some((function(t){return!f(t)}))){var t=i.querySelector(n);!t||("beforebegin"===l||"afterend"===l)&&!t.parentElement||(p.disconnect(),g.forEach((function(t){f(t)&&t.parentNode&&t.parentNode.removeChild(t)})),m||(t.insertAdjacentHTML(l,h.taggedHtml),g=s(t,l,v)),m||p.observe(_,b))}}))).observe(_,b),c.push(y),y}},3329:function(t,n,e){e(136);var i=e(2025),r=(e(6592),e(409),e(9899).generate),o=e(9454),a=e(6643).DEFAULT_INTERVAL,u=(i.get("stores/rum"),{});function c(t){u[t]&&Object.keys(u[t].callbacks).forEach((function(n){u[t].callbacks[n].call(null)}))}function s(t,n){u[n]&&u[n].callbacks[t]&&(delete u[n].callbacks[t],0===Object.keys(u[n].callbacks).length&&(clearInterval(u[n].id),delete u[n]))}n.poll=function(t,n){"number"!=typeof n&&(n=a),u[n]||(u[n]={callbacks:{},id:o.setInterval(c.bind(null,n),n)});var e=r();return u[n].callbacks[e]=t,s.bind(null,e,n)},n.cancelAll=function(){Object.keys(u).forEach((function(t){var n=u[t];clearInterval(n.id),delete u[t]}))}},9558:function(t,n,e){var i=e(6761).Promise,r=e(7796).o;n.x=function(t){return new i((function(n,e){r(t,n,{once:!0})}))}},6726:function(t,n,e){var i=e(6761).Promise,r=e(3329).poll;n.a=function(t){return new i((function(n,e){if(t())n();else var i=r((function(){t()&&(i(),n())}))}))}},6708:function(t,n,e){var i=e(8275).omit,r=e(136),o=e(3737),a=e(188),u=e(9480),c=e(6592),s=e(8131),f=e(8674),l=e(5192),d=e(8130).v,v=e(8298),h=e(4214),p=(e(673),e(8851)),g=e(7566),m=e(409),b=e(192),_=e(2042),y=e(587),w=e(7852),E=e(9937),I=(e(5894),e(2348)),A=e(4285),T=e(2025),S=T.get("stores/dimension_data"),O=T.get("stores/view"),k=T.get("stores/view_data"),R=T.get("stores/visitor_id"),C=T.get("stores/layer_data"),N=T.get("stores/directive"),D=n.ApiListenerError=d("ApiListenerError");n.event=function(t){var n;switch(t.eventType){case"click":n=function(t){var n;return t.eventData&&(n=p.create(t.eventData.id,t.eventData.apiName,"click",t.eventData)),function(){var t=s.trackClickEvent(n);t?w.log("API / Tracking click event:",t):w.log("API / Not tracking click event:",t)}}(t);break;case"decision":n=function(t){var n=t.eventData,e=_.createLayerState(n.layerId,n.experimentId,n.variationId,n.isLayerHoldback,n.isLayerConcluded),i=_.createSingle(n.layerId,n.experimentId,n.variationId);return function(){_.recordLayerDecision(e.layerId,e.decisionTicket,e.decision),w.log("API / Tracking decision event:",e),s.trackDecisionEvent(e.decision,e.decisionTicket,i)}}(t);break;case"pageview":n=function(t){var n=I.create(t.eventData.id,t.eventData.apiName),e=I.createState(n.id);return function(){var t=s.trackViewActivation(n,e);t?w.log("API / Tracking pageview event:",t):w.log("API / Not tracking pageview event:",t)}}(t);break;default:n=function(t){var n;return t.eventId&&(n=p.create(t.eventId,t.eventName,"custom")),I.updateAllViewTags(),function(){s.trackCustomEvent(t.eventName,t.tags,n,t.properties)?w.log("API / Tracking custom event:",t.eventName,t.tags):w.log("API / Not tracking custom event:",t.eventName)}}(t)}R.getBucketingId()?n():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postActivate,cleanupFn:n})},n.clientMetadata=function(t){0},n.priorRedirectString=function(t){},n.microsnippetError=function(t){},n.rum=function(t){m.dispatch(r.SET_RUM_DATA,t.eventData)},n.initialViewStates=function(t){var n=Object.keys(t.states||{}).map((function(n){return{id:n,isActive:t.states[n]}}));I.registerViews(n)},n.page=function(t){var n=k.getByApiName(t.pageName);if(!n)throw new Error('Unknown page "'+t.pageName+'"');var e=!t.hasOwnProperty("isActive")||t.isActive,i=function(){e?I.activateViaAPI(n,t.tags):(I.deactivate(n),w.log("API / Deactivated Page",I.description(n)))};R.getBucketingId()?i():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postViewsActivated,cleanupFn:i})},n.tags=function(t){I.setGlobalTags(t.tags)},n.user=function(t){w.log("API / Setting visitor custom attributes:",t.attributes),Object.keys(t.attributes||{}).forEach((function(n){var e,i,r=t.attributes[n],o=n,a=S.getById(n)||S.getByApiName(n);a&&(o=a.id,e=a.apiName,i=a.segmentId||a.id);var u={id:i,value:r};e&&(u.name=e),x(o,u,!0)}))},n.ga4User=function(t){t.ga4UserId?(w.log("API / Setting ga4 user id in the global store:",t.ga4UserId),m.dispatch(r.SET_GA4_USER_ID,t)):w.error('API / Argument "ga4UserId" is missing')};var x=function(t,n,e){var i=[{key:e?["custom",t]:[t],value:n,metadata:{lastModified:v.now()}}],o=function(){m.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:i})};R.getBucketingId()?o():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:o})};n.optOut=function(t){var n=!t.hasOwnProperty("isOptOut")||t.isOptOut;h.setOptOut(n)},n.cookieExpiration=function(t){var n=t.cookieExpirationDays;n<90&&(w.error('Argument "cookieExpirationDays"=',n,"less than minimum days:",90,", setting to minimum."),n=90),w.log("API / Setting cookie age to",n,"days."),m.dispatch(r.SET_COOKIE_AGE,86400*n)},n.extendCookieLifetime=function(t){t=Object.assign({isEnabled:!0},t),w.log("API / Setting cookie automatic lifetime extension to",t.isEnabled),m.dispatch(r.SET_COOKIE_AUTO_REFRESH,t.isEnabled)},n.cookieDomain=function(t){w.log("API / Setting cookie domain to",t.cookieDomain),m.dispatch(r.SET_COOKIE_DOMAIN,t.cookieDomain)},n.disable=function(t){if(t.scope){if("tracking"!==t.scope)throw new Error('Unknown "scope" for disable: '+t.scope);w.log("API / Disabling tracking"),m.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else w.log("API / Disabling everything"),m.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},n.log=function(t){var n=t.level,e=t.match;void 0===n&&(n="INFO"),void 0===e&&(e=""),w.setLogMatcher(e),w.setLogLevel(n)},n.registerModule=function(t){var n="custom/"+t.moduleName;if(a[n]||o.get(n))throw new Error('Module name "'+n+'" is reserved. Will not be registered as plugin.');E.registerApiModule(n,t.module)},n.dataFromSource=function(t){var n=t.source;l.makeAsyncRequest(n),l.resolveRequest(n,t.data)},n.addListener=function(t){if("function"!=typeof t.handler)throw new Error("A handler function must be supplied");(t=i(t,["type"])).publicOnly=!0,t.emitErrors=!0;var n=t.handler;t.handler=function(t){try{return n(t)}catch(t){throw new D(t)}},g.on(t)},n.removeListener=function(t){if(!t.token)throw new Error("Must supply a token to removeListener");g.off(t.token)},n.load=function(t){t.data=Object.assign({},t.data),u.normalizeClientData(t.data),m.dispatch(r.DATA_LOADED,{data:t.data})},n.integrationSettings=function(t){if(!t.id)throw new Error("id is required");if(!t.settings)throw new Error("settings is required");m.dispatch(r.SET_INTEGRATION_SETTINGS,Object.assign({},t.settings,{id:t.id}))},n.loadEmbeddedEditor=function(){document.getElementById("optimizely-visual-editor-root")?w.warn("API / Visual editor is already loaded."):y.loadEmbeddedEditor("https://app.optimizely.com/dist/visual-editor/main.js")},n.bucketVisitor=function(t){if(!t.variationId&&void 0===t.variationIndex||t.variationId&&t.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!t.experimentId)throw new Error("An experimentId is required.");var n,e,i=t.campaignId;if(i){if(!(n=C.get(i)))throw new Error("Could not find layer "+i)}else if(!(i=(n=C.getLayerByExperimentId(t.experimentId)).id))throw new Error("Could not find layer for experiment "+t.experimentId);if(!(e=n.experiments.find((function(n){return n.id===t.experimentId}))))throw new Error("Could not find experiment "+t.experimentId+" in layer "+i);var r=t.variationId;if(void 0!==t.variationIndex){if(!(r=e.variations[t.variationIndex].id))throw new Error("Could not find variation at index "+t.variationIndex+" in experiment "+t.experimentId)}else if(!e.variations.find((function(t){return t.id===r})))throw new Error("Cound not find variation "+r+" in experiment "+t.experimentId);A.updateVariationIdMap(i,t.experimentId,r),R.getBucketingId()&&A.persistVariationIdMap(),A.updateContextualMabMap(i,t.experimentId,{variationId:r}),R.getBucketingId()&&A.persistContextualMabMap()},n.waitForOriginSync=function(t){if(!Array.isArray(t.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+b.stringify(t.canonicalOrigins));t.canonicalOrigins.forEach((function(t){if("string"!=typeof t)throw new Error("Each item in canonicalOrigins must be a string. Found type "+(void 0===t?"undefined":(n=t)&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n));var n})),m.dispatch(r.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:t.canonicalOrigins})},n.disableCrossOrigin=function(){w.log("API / cross origin tracking is DISABLED"),m.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0})},n.activate=function(){N.shouldActivate()?(O.getActiveViewStates().forEach((function(t){I.deactivate(k.get(t.id))})),m.dispatch(r.RESET_VIEW_STATES),f.emitActivateEvent()):w.debug("Not activating.")},n.sendEvents=function(){f.emitSendEvents()},n.holdEvents=function(){f.emitHoldEvents()}},8197:function(){},4860:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.flattenDeep,a=i.isEmpty,u=i.isObject,c=e(8130).v,s=n.ActivationCodeError=c("ActivationCodeError"),f=n.ProjectJSError=c("ProjectJSError"),l=e(8395),d=e(136),v=e(8131),h=e(8674),p=e(7595),g=e(8841),m=e(9480),b=e(8298),_=e(1035),y=e(2025),w=e(4214),E=e(1019),I=e(6592),A=e(7566),T=e(3111),S=e(8484),O=e(409),k=e(3672),R=e(2042),C=e(1353).DT,N=e(7852),D=e(3224),x=e(5010),j=e(9937),M=e(5385),P=e(6761).Promise,L=e(5467),U=e(5894),V=e(249),B=e(123),z=e(2348),F=e(4285),G=e(9454),q=(y=e(2025)).get("stores/session"),H=y.get("stores/audience_data"),Y=y.get("stores/action_data"),K=y.get("stores/cleanup"),$=y.get("stores/directive"),W=y.get("stores/global"),X=y.get("stores/group_data"),J=y.get("stores/layer_data"),Q=y.get("stores/layer"),Z=y.get("stores/pending_events"),tt=y.get("stores/plugins"),nt=y.get("stores/rum"),et=y.get("stores/visitor"),it=y.get("stores/view_data"),rt=y.get("stores/view"),ot=y.get("stores/visitor_id"),at=y.get("stores/visitor_bucketing"),ut=y.get("stores/xdomain"),ct=e(3737),st=e(673),ft=e(2594),lt=!1,dt=n;function vt(){h.emitActivateEvent()}function ht(t){st.handleError(t.data.error,t.data.metadata)}function pt(t,n){O.dispatch(d.SET_RUM_DATA,{data:{extras:{xdAttempt:t,xdError:n?n.toString():void 0}}})}function gt(t,n,e){t=t||[];var i=W.getGlobalHoldbackThreshold(),r=ot.getBucketingId();if(!r)throw new Error("bucketingId not set");var o,a=et.getVisitorProfile();n&&(o=at.getVariationIdMap()[n.id]);var u={bucketingId:r,visitorProfile:a,audiences:t,globalHoldback:i,preferredVariationMap:o,layer:n};return n&&e&&_.isPageIdRelevant(n)?e.map((function(t){return _.createTicket(Object.assign({},u,{pageId:t}))})):[_.createTicket(u)]}function mt(t,n){var e={};return t.forEach((function(t){Array.isArray(t)?Object.assign(e,mt(t,n)):u(t)&&n[t.type]&&(e[t.type]=!0)})),e}function bt(t){var n=[];return t.forEach((function(t){n.push(t.name,t)})),n}function _t(t){var n=K.getCleanupFns(t);if(n.length>0){for(;n.length>0;)n.shift()();O.dispatch(d.CLEAR_CLEANUP_FN,{lifecycle:t})}}n.initialize=function(t){return this.initGlobalStore(t.clientData),this.initializePlugins(t.plugins)},n.initGlobalStore=function(t){m.normalizeClientData(t),A.on({filter:{type:"error"},handler:ht}),O.dispatch(d.DATA_LOADED,{data:t}),N.log("Initialized with DATA:",t)},n.initializePlugins=function(t){if(Array.isArray(window.optimizely)&&(window.optimizely=window.optimizely.filter((function(t){var n=!0;return!ct.push(t,n)}))),w.setOptOut($.shouldOptOut()),!$.isDisabled()&&!$.shouldOptOut()){ft.queueBeacons(),E.isReady()?O.dispatch(d.SET_DOMCONTENTLOADED):E.addReadyHandler((function(){O.dispatch(d.SET_DOMCONTENTLOADED)})),x.time("projectJS");var e=W.getProjectJS();if("function"==typeof e)try{S.apply(e)}catch(t){N.error("Error while executing projectJS: ",t),g.emitError(new f(t))}x.timeEnd("projectJS"),(t||[]).forEach((function(t){try{t(j)}catch(t){g.emitInternalError(t)}})),(W.getPlugins()||[]).forEach((function(t){try{S.apply(t,[j])}catch(t){g.emitError(t)}})),U.load();var i=A.on({filter:{type:"lifecycle",name:"activated"},handler:function(){et.observe(F.persistVisitorProfile),Q.observe(F.persistLayerStates),q.observe(F.persistSessionState),Z.observe(D.schedulePersistPendingEvents),at.observe(F.persistVisitorBucketingStore),A.off(i)}});A.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:n.onViewsActivated}),A.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:n.onPageDeactivated}),n.initializeApi();var r=D.getPendingEvents();if(r&&(O.dispatch(d.LOAD_PENDING_EVENTS,{events:r}),D.retryPendingEvents(r)),A.on({filter:{type:"lifecycle",name:"activate"},handler:n.activate}),h.emitInitializedEvent(),!$.shouldActivate())return P.resolve();var o=[];if(ut.isDisabled())vt();else{var a=n.initializeXDomainStorage();if(o.push(a),Boolean(ut.getCanonicalOrigins())){var u=V.makeTimeoutPromise(1e3);P.race([a,u]).catch((function(t){N.error("Failed to initialize xDomain storage: ",t)})).then(vt).catch(st.handleError)}else vt()}return P.all(o)}N.log("Controller / Is disabled")},n.activate=function(){try{var t=[];N.log("Activated client"),_t(I.Lifecycle.preActivate);var n=!1;lt;var e=b.now();O.dispatch(d.ACTIVATE,{activationId:String(e),activationTimestamp:e});var i=it.getAll();z.registerViews(i,n),F.setId(F.getOrGenerateId()),t.push(v.trackPostRedirectDecisionEvent()),O.dispatch(d.MERGE_VARIATION_ID_MAP,{variationIdMap:F.getVariationIdMap()}),O.dispatch(d.MERGE_CONTEXTUAL_MAB_MAP,{contextualMabMap:F.getContextualMabMap()}),O.dispatch(d.SET_ODP_SEGMENTS,F.getOdpSegments()),O.dispatch(d.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:F.getPreferredLayerMap()}),_t(I.Lifecycle.postVisitorProfileLoad),t.push((s=tt.getAllPlugins(I.PluginTypes.visitorProfileProviders),f=et.getVisitorProfile(),F.populateEagerVisitorData(s,f)).then((function(){N.log("Populated visitor profile")})));var r=gt(),o=_.decideGlobal(r);N.log("Made global decision",r,"->",o),O.dispatch(d.RECORD_GLOBAL_DECISION,o);var a=v.trackClientActivation();a?N.log("Tracked activation event",a):N.log("Not tracking activation event");var u=dt.setUpViewActivation(i),c=[];return u.forEach((function(t){c=c.concat(z.activateMultiple([t]))})),_t(I.Lifecycle.postViewsActivated),rt.getActiveViewStates().length||h.emitCampaignsDecided([]),_t(I.Lifecycle.postActivate),h.emitActivatedEvent(),P.all(t).then((function(){A.emit({type:T.TYPES.LIFECYCLE,name:"activateDeferredDone"}),N.log("All immediate effects of activation resolved")}),g.emitError)}catch(t){return g.emitError(t),P.reject(t)}var s,f},dt.setUpViewActivation=function(t){var n=[];return t.forEach((function(t){"boolean"==typeof rt.getViewState(t.id).isActive&&z.isActivationTypeImmediate(t.activationType)?N.debug("Skipping page: already evaluated, presumably at the edge",z.description(t)):z.shouldTriggerImmediately(t.activationType)?n.push(t):t.activationType===I.ViewActivationTypes.callback?(N.debug("Setting up conditional activation for Page",z.description(t)),dt.activateViewOnCallback(t)):t.activationType===I.ViewActivationTypes.polling?(N.debug("Setting up polling activation for Page",z.description(t)),M.pollFor(S.apply.bind(null,t.activationCode),null,B.isTimedOut.bind(null,b.now())).then((function(){z.activateMultiple([t])})).catch((function(n){N.warn("Failed to activate view ",t,n)}))):t.activationType!==I.ViewActivationTypes.manual&&g.emitError(new Error("Unknown view activationType: "+t.activationType))})),n},dt.activateViewOnCallback=function(t){var n={pageId:t.id};Object.defineProperty(n,"isActive",{get:function(){return rt.isViewActive(t.id)}});try{S.apply(t.activationCode,[function(n){var e=Object.assign({},n,{pageName:t.apiName,type:"page"});ct.push(e)},n])}catch(n){var e=new s("("+n.toString()+") in activationCode for "+z.description(t));g.emitError(e,{originalError:n,userError:!0})}},n.onViewsActivated=function(t){var e,i=t.data.views,r=i.map((function(t){return t.id}));try{if(!ot.getBucketingId())throw new Error("View activated with no visitorId set");var o=function(t){var e=J.getAllByPageIds(t),i=$.getForceVariationIds(),r=$.getForceAudienceIds(),o=!a(i);o&&N.log("Force variations are in use. Disabling mutual exclusivity.");var u=o?{individual:e}:e.reduce((function(t,n){return n.groupId?t.groups[n.groupId]||(t.groups[n.groupId]=X.get(n.groupId)):t.individual.push(n),t}),{groups:{},individual:[]});if(N.log("Deciding Campaigns/Experiments for Page(s)",t),u.groups){var c=Object.keys(u.groups).map((function(t){return k.description(u.groups[t])})).join(", ");N.log("Groups:",c)}var s=u.individual.map(R.description).join(", ");N.log("Campaigns/Experiments not in Groups (by Campaign id):",s);var f=Object.keys(u.groups||{}).map((function(e){return function(t,e,i,r){try{var o=function(t){return{bucketingId:ot.getBucketingId(),preferredLayerId:at.getPreferredLayerMap()[t.id]}}(r),u=_.decideGroup(r,o);if(u.reason)return N.debug("Not activating Group",k.description(r),"; reason:",u.reason),nt.getSampleRum()&&O.dispatch(d.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:r.id}),P.resolve();var c=J.get(u.layerId);if(!c)return N.debug("Visitor was bucketed into a Campaign ("+u.layerId+") which is not in this snippet"),P.resolve();var s=(c.pageIds||[]).filter((function(t){return Array.isArray(i)&&i.includes(t)}));return a(s)?(N.debug("Not activating Group",k.description(r),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),P.resolve()):(nt.getSampleRum()&&O.dispatch(d.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:r.id}),n.decideAndExecuteLayerASAP(t,e,s,c))}catch(t){return N.error("Error getting decision for Group",k.description(r),"; ",t),P.reject(t)}}(i,r,t,u.groups[e])}))||[],l=u.individual.map((function(e){var o=(e.pageIds||[]).filter((function(n){return Array.isArray(t)&&t.includes(n)}));return n.decideAndExecuteLayerASAP(i,r,o,e)})),v=f.concat(l);return P.all(v).then((function(n){var e=n.filter((function(t){return!!t}));return N.log("All Campaigns/Experiments for Page(s) (by Campaign id)",t,"resolved:",e.map(R.description).join(", ")),e}))}(r).catch(g.emitError);return o.then((function(){h.emitCampaignsDecided(r)})),e=P.all(i.map((function(t){var n=function(){z.parseViewTags(t);var n=v.trackViewActivation(t);n?N.log("Tracked activation for Page",z.description(t),n):N.log("Not Tracking activation for Page",z.description(t))};return E.isReady()?P.resolve(n()):M.pollFor(E.isReady,1e3).then(n)}))),P.all([o,e])}catch(t){g.emitError(t)}},n.onPageDeactivated=function(t){var n=t.data.page;(Y.getAllActionIdsByPageId(n.id)||[]).forEach((function(t){var e=Y.getActionState(t);e&&(Object.keys(e).forEach((function(t){var i=e[t];if(i.cancel)try{i.cancel(),N.debug("Controller / Canceled change",t,"observation due to deactivation of page:",n)}catch(n){N.error("Controller / Error canceling change",t,"observation upon deactivation of page.",n)}if(n.undoOnDeactivation&&i.undo)try{i.undo(),N.debug("Controller / Undid change",t,"due to deactivation of page:",n)}catch(t){N.error("Controller / Error undoing change upon deactivation of page.",t)}})),O.dispatch(d.REMOVE_ACTION_STATE,{actionId:t}),N.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",n,t))}))},n.initializeApi=function(){var t={push:ct.push};t.get=ct.get;var n=window.optimizely;Array.isArray(n)&&n.forEach((function(n){t.push(n)})),t.data={note:"Obsolete, use optimizely.get('data') instead"},t.state={},window.optimizely=t},n.persistItemsWithId=function(t){return Object.keys(t).forEach((function(n){var e=t[n];F.checkKeyForVisitorId(n)&&C.setItem(n,e)})),t},n.initializeXDomainStorage=function(){var t=e(5292),i=!!F.getCurrentId(),r=!!i&&F.hasSomeData();i?r?N.log("xd / Existing visitor; has data on this origin"):N.log("xd / Existing visitor; new to this origin"):N.log("xd / New visitor");var o=W.getAccountId(),u="https://a23755061915.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+o+"."),c="/client_storage/a"+o+".html";t.subscribe((function(t,n){F.checkKeyForVisitorId(t)&&C.setItem(t,n)}));var s=t.fetchAll().then((function(n){if(!ot.getVisitorIdLocator()){var e=ut.getCanonicalOrigins();if(e){var i=t.getXDomainUserId(n,e);i&&(N.log("Syncing cross-origin visitor randomId:",i),F.maybePersistVisitorId({randomId:i}))}}return F.deleteOldForeignData(),n})).then(n.persistItemsWithId).then((function(t){if(F.loadForeignData(),i&&!r){var n=!a(t);N.debug("xd / Loaded foreign data? ",n),pt(n)}N.log("Loaded visitor data from foreign origins"),h.emitOriginsSyncedEvent()}),(function(t){throw i&&!r&&(N.debug("xd / Failed to load foreign data:",t),pt(!1,t)),t}));return P.all([t.load(u,c).catch((function(t){throw N.debug("xd / Failed to load iframe:",t),i&&!r&&pt(!1,t),t})),s.catch((function(t){N.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",t.message),N.debug("xd / Enqueuing sync to happen after visitorId set."),O.dispatch(d.ADD_CLEANUP_FN,{lifecycle:I.Lifecycle.postVisitorProfileLoad,cleanupFn:h.emitOriginsSyncedEvent})}))])},n.decideAndExecuteLayerASAP=function(t,e,i,u){return new P((function(c,s){try{!function(t,n,e,i,r){if(n.length||e.length)return void r(gt([],void 0,i));var u=R.relatedAudienceIds(t),c=u.reduce((function(t,n){var e=H.get(n);return e&&t.push(e),t}),[]),s=tt.getAllPlugins(I.PluginTypes.audienceMatchers);if(nt.getSampleRum()){var f={};if(c.forEach((function(t){Object.assign(f,mt(t.conditions,s))})),!a(f)){var l=Object.keys(f);O.dispatch(d.RECORD_AUDIENCE_USAGE,{audienceTypes:l,layerId:t.id})}}var v=function(t){N.debug("Audience list for extracting types",t);try{var n=new Set(o(t.map((function(t){return t.conditions}))).filter((function(t){return null!=t&&"string"!=typeof t})).map((function(t){return t.type})));return n.has("time_and_day")&&n.add("currentTimestamp"),N.debug("Extracted unique types from audiences",n),n}catch(t){return N.error("An error occurred while extracting types from audiences:",t),new Set}}(c),h=tt.getAllPlugins(I.PluginTypes.visitorProfileProviders),g=et.getVisitorProfile();F.populateLazyVisitorData(h,g,v),function(t,n,e,i){var r=t.reduce((function(t,e){return Object.assign(t,p.requiredAudienceFieldsForConditions(e.conditions,n))}),{}),o=Object.keys(r).reduce((function(t,n){var e=r[n];if(void 0===F.getAttribute(e)){var i=F.getPendingAttributeValue(e);void 0!==i&&t.push(i)}return t}),[]);if(0===o.length)return i();var u=[].concat(t),c=L.firstToResolve(o.map((function(t){return P.resolve(t).then((function(){var t=et.getVisitorProfile();if(u=u.filter((function(e){return void 0===p.isInAudience(t,e,n)})),!a(u))throw new Error("At least one audience is still pending")}))})));P.race([c,new P((function(t,n){G.setTimeout(n,e)}))]).then((function(){N.log("Activating Campaign after pending Audiences resolved",t),i()}),(function(){N.log("Activating Campaign after timeout on Audiences",t),i()}))}(c,s,R.getActivationTimeout(t),(function(){var n=gt(c,t,i);n.forEach((function(n){!function(t,n,e){var i=t.audienceIds.map(H.get.bind(H)).filter(Boolean),r=n.filter((function(n){return!t.audienceIds.includes(n.id)}));N.log("When deciding Campaign",R.description(e),"visitor is in audiences:",bt(i),"and not in audiences:",bt(r))}(n,c,t)})),r(n)}))}(u,t,e,i,(function(o){o.forEach((function(o){var c=o.pageId?[o.pageId]:i;N.debug("Deciding layer: ",u,"with decisionTicket: ",o,"and actionViewIds: ",c),function(t,e,i,o,u){var c=R.description(t);N.log("Activating Campaign",c,"on Page(s)",o),i.length&&(N.log("Applying force audienceIds:",i,"to Campaign",c),(u=r(u)).audienceIds=i);var s=n.decideLayer(t,u,e),f=!(!e.length&&!i.length),p=n.getActionsForDecision(t,s,f),g=function(t,n){return t.filter((function(t){return void 0===t.pageId||n.includes(t.pageId)}))}(p.actions,o);if(p.maybeExecute&&function(t,n,e,i){var r=R.description(n);N.log("Preparing actions",t,"for Campaign",r,"on Page(s)",i),t.forEach(l.prepareAction)}(g,t,0,o),o.forEach((function(){v.trackDecisionEvent(s,u,t)})),h.emitLayerDecided({layer:t,decisionTicket:u,decision:s}),s.error)throw s.error;if(nt.getSampleRum()){O.dispatch(d.RECORD_LAYER_POLICY_USAGE,{policy:t.policy,layerId:t.id});var m=function(t){var n={};return t.forEach((function(t){t.changeSet.forEach((function(t){n[t.type]||(n[t.type]=!0)}))})),n}(p.actions);O.dispatch(d.RECORD_CHANGE_TYPE_USAGE,{changeTypes:Object.keys(m),layerId:t.id}),a(t.integrationSettings)||O.dispatch(d.RECORD_INTEGRATION_USAGE,{integrations:R.getIntegrationTypes(t),layerId:t.id})}if(!_.isInCohort(s))return void N.log("Not activating Campaign: "+R.description(t)+"; not in the cohort because:",s.reason);p.maybeExecute&&function(t,n,e,i){var r=R.description(n);N.log("Executing actions",t,"for Campaign",r,"on Page(s)",i),P.all(t.map((function(t){return l.executePreparedAction(t).then(h.emitActionAppliedEvent.bind(null,t))}))).then((function(){N.log("All page actions for",e,"applied:",t),h.emitActionsForDecisionAppliedEvent(e,t)})).catch((function(t){N.warn("Error evaluating page actions for decision",e,"because:",t)}))}(g,t,s,o)}(u,t,e,c,o)})),c(u)}))}catch(t){N.error("Error getting decision for Campaign: "+R.description(u),t),s(t)}}))},n.decideLayer=function(t,n,e){var i;var r=R.description(t);i=e.length?_.getDummyLayerDecision(t,e):_.decideLayer(t,n),N.log("Recording decision for Campaign",r,n,"->",i),R.recordLayerDecision(t.id,n,i),i.variationId&&i.experimentId&&F.updateVariationIdMap(t.id,i.experimentId,i.variationId),t.groupId&&F.updatePreferredLayerMap(t.groupId,t.id);return i},n.getActionsForDecision=function(t,n,e){var i=R.description(t),r="NOT applying changes for Campaign",o={actions:[],maybeExecute:!1};if(o.actions=[].concat(Y.getLayerActions(n.layerId)||[],Y.getExperimentActions(n.experimentId)||[],Y.getExperimentVariationActions(n.experimentId,n.variationId)||[]),!e&&W.isGlobalHoldback())return N.log(r,i,"(visitor is in global holdback)"),o;if(n.isLayerHoldback)return N.log(r,i,"(visitor is in layer holdback)"),o;if(!n.experimentId||!n.variationId)return N.log(r,i,"(visitor is not eligible for any Experiments)"),o;return o.maybeExecute=!0,N.log("Got Actions for Campaign:",i,o.actions),o}},6546:function(t,n,e){var i=e(6761).Promise,r=e(8298),o=e(2025).get("stores/plugins"),a=e(6592),u=e(7852);n.create=function(t,n,e){var c={identifier:t.id,action:n,startTime:e||r.now()};try{var s=o.getPlugin(a.PluginTypes.changeAppliers,t.type);if(!s)throw new Error("Unrecognized change type "+t.type);return new s(t,c)}catch(t){return u.error("Change applier was never properly constructed:",t),{apply:function(){return i.reject(t)}}}}},8486:function(t){t.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}},9114:function(t,n,e){var i=e(8275).isEmpty,r=e(8486).CHANGE_DATA_KEY;function o(t,n){return[t,n].join("_")}n.getData=function(t,n,e){var i=o(n,e);return t[r]&&t[r][i]?t[r][i]:null},n.hasData=function(t){return Boolean(t&&t[r]&&!i(t[r]))},n.removeData=function(t,n,e){t[r]&&delete t[r][o(n,e)]},n.setData=function(t,n,e,i){if("object"!=typeof i)throw new Error("setData expects an object");t[r]||(t[r]={}),t[r][o(n,e)]=i}},8421:function(t,n,e){var i=e(3826);t.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",SRCSET:"srcset",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}},8395:function(t,n,e){var i=e(136),r=e(8841),o=e(5192),a=e(8130).v,u=e(8298),c=e(2025),s=e(409),f=e(7852),l=e(6761).Promise,d=e(7219),v=c.get("stores/global"),h=c.get("stores/action_data"),p=c.get("stores/change_data"),g=c.get("stores/session"),m=e(6546);e(123).initialize();var b=a("ActionError");function _(t,n,e){if(h.getActionState(n.id))if(void 0===h.getChangeApplier(t.id,n.id)){var r={changeId:t.id,actionId:n.id,changeApplier:m.create(t,n,e)};s.dispatch(i.SET_CHANGE_APPLIER,r)}else f.warn("Action / Attempted to prepare a change which is already being applied: ",t);else f.warn("Action / Attempted to prepare change for inactive action: ",n)}function y(t,n,e,i){if(!i.includes(n)){if(!t[String(n)]){var a=p.getChange(n);if(!a){var c="Change with id "+n+" is absent";return i.length&&(c+=" but listed as a dependency for "+i[i.length-1]),void f.warn(c)}t[String(n)]=new l((function(c){var s=(a.dependencies||[]).map((function(r){return y(t,r,e,i.concat([n]))}));if(a.src){var v="change_"+a.src,g=o.makeAsyncRequest(v,(function(){return d.addScriptAsync("https://cdn.optimizely.com/public/23755061915/data"+a.src,(function(){o.resolveRequest(v)}))})).then((function(){var t=p.getChange(a.id);t||r.emitError(new b("Failed to load async change from src: "+a.src)),_(t,e,u.now())}));s.push(g)}l.all(s).then((function(){var t=u.now(),i=h.getChangeApplier(n,e.id);return i?(f.debug("Action / Applying change:",a),i.apply().then((function(n){n?f.log(n):f.debug("Action / Applied change for the first time in "+(u.now()-t)+"ms:",a),c()}))):(f.debug("Action / Not applying change ",n," - No changeApplier found."),void c())})).catch((function(t){f.error("Action / Failed to apply change:",a,t),c()}))}))}return t[String(n)]}f.error("Change with id "+n+" has circular dependencies: "+i.concat(n))}n.prepareAction=function(t){f.debug("Action / Preparing:",t),s.dispatch(i.ACTION_EXECUTED,{actionId:t.id,sessionId:g.getSessionId(),layerId:t.layerId,pageId:t.pageId,timestamp:u.now(),activationId:v.getActivationId()});var n=u.now();t.changeSet.forEach((function(e){var r="object"==typeof e&&null!==e?e.id:e,o=p.getChange(r);o||(s.dispatch(i.ADD_CHANGE,e),o=p.getChange(r)),o.src||_(o,t,n)}))},n.executePreparedAction=function(t){f.debug("Action / Executing:",t);var n={},e=t.changeSet.map((function(e){var i="object"==typeof e&&null!==e?e.id:e;return y(n,i,t,[])}));return l.all(e).then((function(){f.debug("changes for action id="+t.id+" applied")}))}},123:function(t,n,e){var i=e(8486),r=e(2025).get("stores/directive");function o(){("interactive"===document.readyState||"complete"===document.readyState)&&(n.domReadyTime=Date.now())}n.domReadyTime=null,n.initialize=function(){o(),document.addEventListener("readystatechange",o,!0)},n.isTimedOut=function(t){var e=Date.now();if(!n.domReadyTime||!t)return!1;var o=Math.max(t,n.domReadyTime);return r.isEditor()&&(o=n.domReadyTime),!(e-o<i.SELECTOR_POLLING_MAX_TIME)}},8131:function(t,n,e){var i=e(8275),r=i.omit,o=i.pick,a=e(136),u=e(8841),c=e(8674),s=e(2575),f=e(8298),l=e(7871),d=e(2025),v=e(1019),h=e(6592),p=e(8421),g=e(5225),m=e(7566),b=e(3111),_=e(1320),y=e(409),w=e(2042),E=e(7852),I=(e(5010),e(6761).Promise),A=e(3272),T=e(5894),S=e(249),O=e(6938),k=e(9899),R=d.get("stores/client_metadata"),C=d.get("stores/global"),N=d.get("stores/session"),D=d.get("stores/view"),x=d.get("stores/plugins"),j=d.get("stores/layer"),M=d.get("stores/layer_data"),P=d.get("stores/observed_redirect"),L=d.get("stores/pending_redirect"),U=d.get("stores/visitor"),V=d.get("stores/directive"),B=d.get("stores/event_data"),z=d.get("stores/visitor_id");function F(t,n,e){return void 0===e&&(e=!1),Object.assign({},t,{isLayerHoldback:n,isLayerConcluded:e,isGlobalHoldback:!1,clientName:null!==t.clientName?t.clientName:l.NAME,integrationStringVersion:null!==t.integrationStringVersion?t.integrationStringVersion:1,anonymizeIP:null!==C.getAnonymizeIP()?C.getAnonymizeIP():void 0,activationId:C.getActivationId(),decisionTicketAudienceIds:[],sessionId:N.getSessionId(),activeViewStates:[],userFeatures:Y(U.getVisitorProfile()),layerStates:j.getLayerStatesForAnalytics()})}function G(t){var n=A.getReferrer()||v.getReferrer();return{eventId:k.generate(),timestamp:f.now(),revision:C.getRevision(),clientName:R.getClientName(),clientVersion:R.getClientVersion(),projectId:C.getProjectId(),accountId:C.getAccountId(),activationId:C.getActivationId(),sessionId:N.getSessionId(),isGlobalHoldback:C.isGlobalHoldback(),namespace:C.getNamespace(),referrer:n,visitorId:z.getRandomId(),activeViewStates:t.activeViewStates,layerStates:t.layerStates,userFeatures:Y(t.visitorProfile,!t.deferBehaviorFeatures)}}function q(t){var n,e;return t.pageId?(n=t.pageId,(e=D.getViewState(n))&&e.isActive?e.metadata:{}):{}}function H(){try{var t=M.getExperimentsMap()||{},n=[],i=Object.create(null);if(Object.keys(t).forEach((function(e){var r=t[e]&&t[e].experimentMetadata;(r&&r.cmabAttributes&&r.cmabAttributes.vbaAttributes||[]).forEach((function(t){t&&t.featureName&&!i[t.featureName]&&(i[t.featureName]=!0,n.push(t))}))})),!n.length)return[];var r=e(8620).getEvents();return e(5560).buildVbaFeatures(n,r,f.now()).map((function(t){return{id:t.id,name:t.id,type:t.type,value:t.value,shouldIndex:!0}}))}catch(t){E.warn("CMAB / VBA / Error building visitor behavior features",t)}return[]}function Y(t,n){void 0===n&&(n=!0);var e=x.getAllPlugins(h.PluginTypes.visitorProfileProviders),i=Object.values(e).filter((function(t){return!0===t.shouldTrack})),r={id:null,type:null,name:"",value:null,shouldIndex:!0},a=i.reduce((function(n,e){try{var i=e.provides,a=t[i],u=[];if(void 0!==a){null!==a&&"object"==typeof a?u=Object.keys(a).map((function(t){var n=a[t],e=null!==n&&"object"==typeof n?n:{value:n};return Object.assign({},{type:i,name:t},e)})):u.push({type:i,value:a});var c=u.map((function(t){return o(Object.assign({},r,t),Object.keys(r))})).filter((function(t){return!!t.value}));n=n.concat(c)}}catch(t){E.warn("Error evaluating userFeature against visitorProfile:",t)}return n}),[]);return n?a.concat(H()):a}function K(t){t&&t.userFeatures&&(t.userFeatures=t.userFeatures.concat(H()))}function $(t,n,e){var i=function(t,n){var e=[],i=x.getAllPlugins(h.PluginTypes.analyticsTrackers);return Object.keys(i).forEach((function(r){var o=i[r];if(o[t]&&(!n||!o[n]))try{e.push({name:r,hookFn:d.evaluate(o[t])})}catch(t){E.error(t)}})),e}(t,e);E.debug("Found "+i.length+" analytics integrations defining a "+t+" hook"),E.debug("Calling each with data: ",n),i.forEach((function(t){try{E.debug("Calling plugin: "+t.name),t.hookFn(n),E.debug("Called plugin: "+t.name)}catch(t){E.error(t)}}))}function W(t,n,e){var i=function(t,n){0;var e=[],i=x.getAllPlugins(h.PluginTypes.analyticsTrackers);return Object.keys(i).forEach((function(r){var o=i[r];n.includes(o[t])&&e.push({name:r,hookFn:o.trackLayerDecision})})),e}(t,n);E.debug("Found "+i.length+" analytics integrations  defining a trackLayerDecision "+t+" timing of "+n.join("|")),E.debug("Calling each with data: ",e),i.forEach((function(t){try{E.debug("Calling plugin: "+t.name),t.hookFn(e),E.debug("Called plugin: "+t.name)}catch(t){E.error(t)}}))}n.trackClientActivation=function(){if(!e(4308).shouldDrop()&&V.shouldSendTrackingData()){var t,n=(t=G({activeViewStates:[],visitorProfile:U.getVisitorProfile(),layerStates:j.getLayerStatesForAnalytics()}),Object.assign(t,{eventTags:{}}));return $("onClientActivation",n),n}},n.trackCustomEvent=function(t,n,i,o){if(!e(4308).shouldDrop()){n=n||{},o=o||{},i||(i=B.getByApiName(t));var a=function(t,n,e,i){var r=G({activeViewStates:D.getActiveViewStates(),visitorProfile:U.getVisitorProfile(),layerStates:j.getLayerStatesForAnalytics(),deferBehaviorFeatures:!0}),o=i&&i.pageId?q(i):D.getActiveViewTags(),a=Object.assign({},o,n),u=i&&i.category?i.category:g.OTHER;return Object.assign(r,{eventEntityId:i&&i.id,eventApiName:t,eventCategory:u,eventTags:a,eventProperties:e})}(t,n,o,i),c={name:t,type:_.CUSTOM,category:a.eventCategory,tags:r(a.eventTags,["revenue"])};if(void 0!==n.revenue&&(c.revenue=n.revenue),u.emitAnalyticsEvent({name:i?i.name||i.apiName:t,apiName:i?i.apiName:void 0,type:_.CUSTOM,properties:a.eventProperties,tags:r(a.eventTags,["revenue"]),category:a.eventCategory,metrics:c.revenue?{revenue:c.revenue}:{}},!V.shouldSendTrackingData()),V.shouldSendTrackingData())return s.addEvent(c),K(a),$("onCustomEvent",a),a}},n.trackDecisionEvent=function(t,n,i){if(!e(4308).shouldDrop()){i||(i=M.get(t.layerId));var r=k.generate();y.dispatch(a.RECORD_LAYER_DECISION_EVENT_ID,{layerId:t.layerId,pageId:n.pageId,decisionId:r});var o=t.experimentId?i.experiments.find((function(n){return n.id===t.experimentId})):null,u=function(t,n,e,i,r){var o=null,a=null,u=null;if(r&&(o=r.name||null,u=r.integrationSettings,n.variationId)){var c=r.variations.find((function(t){return t.id===n.variationId}));c&&(a=c.name||null)}var s=A.getReferrer()||v.getReferrer(),l={sessionId:N.getSessionId(),decisionTicketAudienceIds:e.audienceIds,visitorId:z.getRandomId(),decisionId:t,activationId:C.getActivationId(),namespace:C.getNamespace(),timestamp:f.now(),pageId:e.pageId||null,variationId:n.variationId,variationName:a,experimentId:n.experimentId,experimentName:o,layerId:n.layerId,layerName:i.name,layerPolicy:i.policy,accountId:C.getAccountId(),projectId:C.getProjectId(),revision:String(C.getRevision()),clientName:R.getClientName(),clientVersion:R.getClientVersion(),referrer:s,integrationStringVersion:i.integrationStringVersion||1,integrationSettings:Object.assign({},i.integrationSettings,u)};return l}(r,t,n,i,o),s=L.isExpectingRedirect(),l=L.getLayerId(),d=w.description(i);if(s&&l===i.id&&(T.persist(u,"COOKIE"),E.log("Relaying decision for redirect Campaign",d)),V.shouldSendTrackingData()){var h=F(u,t.isLayerHoldback,t.isLayerConcluded);if(s&&l===i.id){var g=O.TrackLayerDecisionTimingFlags.preRedirectPolicy;h.timing=g,W(g,[O.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],h),E.log("Called trackLayerDecision for redirect Campaign",d,h)}else{g=O.TrackLayerDecisionTimingFlags.nonRedirectPolicy;h.timing=g,W(g,[O.NonRedirectPolicies.TRACK_IMMEDIATELY],h),E.log("Called trackLayerDecision for non-redirect Campaign",d,h)}(function(t){return!(!t||!t.variations)&&t.variations.some((function(t){return!!t.actions&&t.actions.some((function(t){return!(!t||!t.changes)&&t.changes.some((function(t){return t.type===p.changeType.REDIRECT}))}))}))})(o)&&(y.dispatch(a.SET_TRACKER_USE_BEACON,!0),c.emitMaybeSendEvents(),y.dispatch(a.SET_TRACKER_USE_BEACON,!1))}else E.log("Analytics / Not tracking decision for Campaign",w.description(i))}},n.trackPostRedirectDecisionEvent=function(){if(e(4308).shouldDrop()||!V.shouldSendTrackingData()||P.hasTracked())return I.resolve();var t=P.get();if(!t)return I.resolve();var n=F(t,!1),i=O.TrackLayerDecisionTimingFlags.postRedirectPolicy;n.timing=i,W(i,[O.PostRedirectPolicies.TRACK_IMMEDIATELY],n);var r=new I((function(t){var n=m.on({filter:{type:b.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){t(),m.off(n)}})})),o=S.makeTimeoutPromise(1e3);return I.race([r,o]).then((function(){E.log("Calling trackers after successful sync")}),(function(t){E.warn("Calling trackers after failed sync:",t)})).then((function(){(n=F(t,!1)).timing=O.TrackLayerDecisionTimingFlags.postRedirectPolicy,W(O.TrackLayerDecisionTimingFlags.postRedirectPolicy,[O.PostRedirectPolicies.TRACK_AFTER_SYNC],n),y.dispatch(a.REGISTER_TRACKED_REDIRECT_DATA)})).catch((function(t){E.error("Error when calling trackers after sync:",t)}))},n.trackClickEvent=function(t){if(!e(4308).shouldDrop()){var n=function(t){var n=G({activeViewStates:D.getActiveViewStates(),visitorProfile:U.getVisitorProfile(),layerStates:j.getLayerStatesForAnalytics(),deferBehaviorFeatures:!0}),e=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector,i=t.apiName,r=t.category||g.OTHER,o=t.id,a=q(t);return Object.assign(n,{eventApiName:i,eventCategory:r,eventEntityId:o,eventTags:a,pageId:t.pageId,selector:e})}(t),i={name:t.apiName,type:t.eventType,category:n.eventCategory,tags:n.eventTags};if(u.emitAnalyticsEvent({name:t.name||t.apiName,apiName:t?t.apiName:void 0,type:t.eventType,category:n.eventCategory,tags:n.eventTags,metrics:{}},!V.shouldSendTrackingData()),V.shouldSendTrackingData())return s.addEvent(i),K(n),$("onClickEvent",n),n}},n.trackViewActivation=function(t,n){if(!e(4308).shouldDrop())if(n||(n=D.getViewState(t.id)),n.isActive){var i=function(t,n){var e=G({activeViewStates:D.getActiveViewStates(),visitorProfile:U.getVisitorProfile(),layerStates:j.getLayerStatesForAnalytics(),deferBehaviorFeatures:!0});return Object.assign(e,{pageId:t.id,pageApiName:t.apiName,viewCategory:t.category,eventTags:n.metadata})}(t,n);if(u.emitAnalyticsEvent({name:t.name||i.pageApiName,apiName:i.pageApiName,type:_.PAGEVIEW,category:i.viewCategory,tags:i.eventTags,metrics:{}},!V.shouldSendTrackingData()),V.shouldSendTrackingData())return s.addEvent({name:i.pageApiName,type:_.PAGEVIEW,category:i.viewCategory,tags:i.eventTags}),K(i),y.dispatch(a.TRACK_VIEW_ACTIVATED_EVENT,{pageId:t.id,eventData:i}),$("onPageActivated",i),i}else E.debug("Inactive view passed to `trackViewActivation`")}},5894:function(t,n,e){var i=e(136),r=e(6278),o=e(8841),a=e(2025),u=e(6592),c=e(409),s=e(7852),f=e(6938),l=a.get("stores/plugins"),d=".",v=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(t){return t.map(encodeURIComponent).join(",")},encodeValueString:function(t){return t},decodeValueString:function(t){return t},valueFromValueString:function(t){return t.split(",").map(r.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:function(t,n){var e=null;if(t){var i=l.getPlugin(u.PluginTypes.analyticsTrackers,n);if(i&&"function"==typeof i.serializeSettings)try{e=i.serializeSettings(t)}catch(t){s.warn("Analytics / Failed to persist integrationSettings for plugin:",n,t)}}return e},valueFromValueString:function(t,n){var e=null,i=l.getPlugin(u.PluginTypes.analyticsTrackers,n);if(i&&"function"==typeof i.deserializeSettings)try{e=i.deserializeSettings(t)}catch(t){s.warn("Analytics / Failed to persist integrationSettings for plugin:",n,t)}return e},isNullable:!0}],h={},p={};v.forEach((function(t){h[t.name]=t,p[t.relayName]=t})),n.persist=function(t,n){n===f.RedirectRelayMedia.COOKIE?function(t){try{var n=function(t){var n=[],e=Object.keys(t).reduce((function(e,i){var r=t[i],o=h[i];return o?(o.isMulti?Object.keys(r).forEach((function(t){var n=r[t];null!==(n=o.valueToValueString?o.valueToValueString(n,t):String(n))&&(n=(o.encodeValueString||encodeURIComponent)(n),e.push(encodeURIComponent(o.relayName+d+t)+"="+n))})):null!==r&&(r=(o.valueToValueString||String)(r),r=(o.encodeValueString||encodeURIComponent)(r),e.push(o.relayName+"="+r)),e):(n.push(i),e)}),[]);if(n.length)throw new Error("Relay / Don't know how to relay some fields: "+n);return e.sort(),e.join("&")}(t)}catch(t){return s.error("Relay / Error computing redirect relay cookie: ",t),void o.emitError(t)}s.debug("Relay / Setting redirect relay cookie:",n);try{r.set(u.COOKIES.REDIRECT,n,{maxAge:5,encodeValue:!1})}catch(t){s.error("Relay / Failed to set redirect relay cookie",t),o.emitError(t)}}(t):s.error("Relay / Unsupported redirect relay medium: "+n)},n.load=function(t){if(t||(t=function(){var t=r.get(u.COOKIES.REDIRECT,!1);if(t)return s.log("Relay / Found redirect cookie:",t),t}()),t){var n=function(t){var n={};return t.split("&").forEach((function(t){var e=t.split("=");if(2===e.length){var i=r.safeDecodeURIComponent(e[0]),a=p[i];if(a||(a=v.find((function(t){return t.isMulti&&0===i.indexOf(t.relayName+d)})))){var u=e[1];try{if(a.isMulti){n[a.name]=n[a.name]||{};var c=i.substring(a.relayName.length+1);u=(a.decodeValueString||r.safeDecodeURIComponent)(u),u=(a.valueFromValueString||function(t){return t})(u,c),n[a.name][c]=u}else u=(a.decodeValueString||r.safeDecodeURIComponent)(u),u=(a.valueFromValueString||function(t){return t})(u),n[a.name]=u}catch(n){return s.warn("Relay / Skipping segment due to decode or parse error:",t,n),void o.emitError(n)}}else s.warn("Relay / Skipping segment with unknown field identifier:",t,i)}else s.warn("Relay / Skipping invalid segment:",t)})),n}(t);if(n){var e=[];if(v.forEach((function(t){null!==n[t.name]&&void 0!==n[t.name]||(t.isNullable?n[t.name]=null:(delete n[t.name],e.push(t.name)))})),!e.length)return c.dispatch(i.LOAD_REDIRECT_DATA,n),c.dispatch(i.ADD_CLEANUP_FN,{lifecycle:u.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){var t,e;e=(t=n).pageId||void 0,c.dispatch(i.RECORD_LAYER_DECISION,{layerId:t.layerId,decision:{layerId:t.layerId,experimentId:t.experimentId,variationId:t.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:t.decisionTicketAudienceIds,bucketingId:t.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:e,activationId:t.activationId},sessionId:t.sessionId,activationId:t.activationId,timestamp:t.timestamp,revision:t.revision,namespace:t.namespace,pageId:e}),c.dispatch(i.RECORD_LAYER_DECISION_EVENT_ID,{layerId:t.layerId,pageId:e,decisionId:t.decisionId}),c.dispatch(i.ACTION_EXECUTED,{sessionId:t.sessionId,layerId:t.layerId,pageId:t.pageId,timestamp:t.timestamp,activationId:t.activationId})}}),n;s.error("Relay / Observed redirect data with missing fields:",e)}}}},8841:function(t,n,e){var i=e(7566);n.emitError=function(t,n,e){i.emit({type:"error",name:t.name||"Error",data:{error:t,metadata:n}},e||!1,!0)},n.emitInternalError=function(t,e){n.emitError(t,e,!0)},n.emitAnalyticsEvent=function(t,n){var e={type:"analytics",name:"trackEvent",data:t};i.emit(e,n)}},7595:function(t,n,e){var i=e(5421),r=e(8859),o=e(7852),a=e(4285);function u(t,n){var e="function"==typeof t?t(n):t;return"string"==typeof e&&(e=[e]),Array.isArray(e)?e:(o.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function c(t){return t.name?t.name+" ("+t.id+")":t.id}n.isInAudience=function(t,n,e){var a,s=function(t,n){return function(e){var i=e.type,a=n[i];if(!a)throw new Error("Audience / No matcher found for type="+i);if(a.fieldsNeeded)for(var c=u(a.fieldsNeeded,e),s=0;s<c.length;s++){var f=c[s];if(void 0===r.getFieldValue(t,f))return void o.debug("Audience / Required field",f,"for type",i,"has no value")}o.debug("Matching condition:",e,"to values:",t);var l=a.match(t,e);if(void 0!==l)return!!l}}(t,e);o.groupCollapsed("Checking audience",n.name,n.id,n),o.debug("Visitor Profile:",t);try{var f=i.evaluate(n.conditions,s)}catch(t){a=t,f=!1}return o.groupEnd(),a&&o.error("Audience / Error evaluating audience",c(n),":",a),o.log("Is "+(f?"in":"NOT in")+" audience:",c(n)),f},n.requiredAudienceFieldsForConditions=function t(n,e){var i={};return n.forEach((function(n){if(Array.isArray(n))Object.assign(i,t(n,e));else if(null!==n&&"object"==typeof n){var r=e[n.type];if(r)u(r.fieldsNeeded,n).forEach((function(t){i[a.serializeFieldKey(t)]=t}))}})),i}},1489:function(t,n){n.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},n.FIELDS_V0_2={name:n.FIELDS.NAME,time:n.FIELDS.TIME,type:n.FIELDS.TYPE,category:n.FIELDS.CATEGORY,tags:n.FIELDS.OPTIONS,session_index:n.FIELDS.SESSION_INDEX}},8487:function(t,n,e){var i=e(1489),r=e(8859).getFieldValue,o=e(1691);function a(t,n,e,r,o){this[i.FIELDS.NAME]=t,this[i.FIELDS.TYPE]=n,"string"==typeof e&&e.trim().length>0&&(this[i.FIELDS.CATEGORY]=e),r&&Object.keys(r).length>0&&(this[i.FIELDS.OPTIONS]=r),void 0!==o&&(this[i.FIELDS.REVENUE]=o)}function u(t,n,e,r){this.eventBase=t,this[i.FIELDS.TIME]=n,void 0!==e&&(this[i.FIELDS.SESSION_ID]=e),void 0!==r&&(this[i.FIELDS.SESSION_INDEX]=r)}n._=a,a.prototype.digest=function(){var t=function(t,n){return encodeURIComponent(t)+"="+encodeURIComponent(n)},n=[];if(n.push(t(i.FIELDS.NAME,this[i.FIELDS.NAME])),n.push(t(i.FIELDS.TYPE,this[i.FIELDS.TYPE])),this[i.FIELDS.CATEGORY]&&n.push(t(i.FIELDS.CATEGORY,this[i.FIELDS.CATEGORY])),this[i.FIELDS.REVENUE]&&n.push(t(i.FIELDS.REVENUE,this[i.FIELDS.REVENUE])),!this[i.FIELDS.OPTIONS])return n.join("&");var e=this[i.FIELDS.OPTIONS]||{},r=Object.keys(e).filter((function(t){return e.hasOwnProperty(t)}));r=r.sort();for(var o=0;o<r.length;o++)n.push(t(r[o],e[r[o]]));return n.join("&")},a.prototype.hash=function(){return this.hash_||(this.hash_=o.hashToHex(o.toByteString(this.digest()),o.Seed.BEHAVIOR_EVENT)),this.hash_},a.prototype.setHash=function(t){this.hash_=t},a.prototype.reHash=function(){this.hash_=null,this.hash()},a.prototype.equals=function(t){if(this.hash()!==t.hash()||this[i.FIELDS.NAME]!==t[i.FIELDS.NAME]||this[i.FIELDS.TYPE]!==t[i.FIELDS.TYPE]||this[i.FIELDS.CATEGORY]!==t[i.FIELDS.CATEGORY]||this[i.FIELDS.REVENUE]!==t[i.FIELDS.REVENUE])return!1;var n=this[i.FIELDS.OPTIONS]||{},e=t[i.FIELDS.OPTIONS]||{},r=Object.keys(n).filter((function(t){return n.hasOwnProperty(t)})),o=Object.keys(e).filter((function(t){return e.hasOwnProperty(t)}));if(r.length!==o.length)return!1;for(var a=0;a<r.length;a++){var u=r[a];if(!e.hasOwnProperty(u)||n[u]!==e[u])return!1}return!0},a.prototype.getValueOrDefault=function(t,n){var e=r(this,t);return void 0!==e?e:n},a.prototype.setFieldValue=function(t,n){t!==i.FIELDS.NAME&&t!==i.FIELDS.TYPE&&t!==i.FIELDS.CATEGORY&&t!==i.FIELDS.REVENUE&&t!==i.FIELDS.OPTIONS||(this[t]=n,this.reHash())},n.J=u,u.prototype.getValueOrDefault=function(t,n){if(0===t.length)return this;var e={};e[i.FIELDS.TIME]=this[i.FIELDS.TIME],e[i.FIELDS.SESSION_ID]=this[i.FIELDS.SESSION_ID],e[i.FIELDS.SESSION_INDEX]=this[i.FIELDS.SESSION_INDEX];var o=r(e,t);return void 0!==o?o:this.eventBase.getValueOrDefault(t,n)},u.prototype.setFieldValue=function(t,n){t===i.FIELDS.TIME||t===i.FIELDS.SESSION_ID||t===i.FIELDS.SESSION_INDEX?this[t]=n:this.eventBase.setFieldValue(t,n)};var c={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};u.prototype.readableEvent=function(){var t,n,e=function(t){return"string"==typeof t?'"'+t+'"':t},r=this,o=[];[i.FIELDS.NAME,i.FIELDS.TYPE,i.FIELDS.CATEGORY,i.FIELDS.REVENUE,i.FIELDS.SESSION_ID].forEach((function(i){t=c[i],void 0!==(n=r.getValueOrDefault([i]))&&o.push(t+": "+e(n))}));var a=[];if(t=c[i.FIELDS.OPTIONS],void 0!==(n=r.getValueOrDefault([i.FIELDS.OPTIONS]))&&(Object.keys(n).forEach((function(t){var i=n[t];a.push(t+": "+String(e(i)))})),o.push(t+": {\n\t\t"+a.join(",\n\t\t")+"\n\t}")),"number"==typeof(n=r.getValueOrDefault([i.FIELDS.TIME]))&&(n=e(new Date(n).toString())),void 0!==n){o.push("timestamp: "+n)}return"{\n\t"+o.join(",\n\t")+"\n}"},u.prototype.toObject=function(t){var n,e,r={},o=this;[i.FIELDS.NAME,i.FIELDS.TYPE,i.FIELDS.CATEGORY,i.FIELDS.REVENUE,i.FIELDS.OPTIONS,i.FIELDS.SESSION_INDEX].forEach((function(t){n=c[t],void 0!==(e=o.getValueOrDefault([t],t===i.FIELDS.OPTIONS?{}:void 0))&&(r[n]=e)}));var a=c[i.FIELDS.OPTIONS],u=c[i.FIELDS.REVENUE];if(t&&t.revenueAsTag&&r[u]&&(r[a]=r[a]||{},r[a][u]=r[u],delete r[u]),"number"==typeof(e=o.getValueOrDefault([i.FIELDS.TIME])))if(t&&t.timeAsTimestamp){r.timestamp=new Date(e)}else{r.time=e}return r}},2575:function(t,n,e){var i=e(4938);n.initializeStore=i.initialize,n.addEvent=i.addEvent,n.getEvents=i.getEvents,n.getEventCount=i.getEventCount},7269:function(t,n,e){var i=e(8487).J,r=e(8298),o=e(1489),a=e(8487)._;n.CURRENT_SESSION_INDEX=0;var u=18e5;function c(t,e){var i;i=n.isInSameSession(t,e)?t.getValueOrDefault([o.FIELDS.SESSION_ID]):e.getValueOrDefault([o.FIELDS.TIME]),e.setFieldValue(o.FIELDS.SESSION_ID,i)}function s(t,e,i){var r,a=t.getValueOrDefault([o.FIELDS.SESSION_INDEX]);r=n.isInSameSession(e,t)?a:i?a+1:a-1,e.setFieldValue(o.FIELDS.SESSION_INDEX,r)}n.isInSameSession=function(t,n){var e=t.getValueOrDefault([o.FIELDS.TIME],0),i=n.getValueOrDefault([o.FIELDS.TIME],0);return this.isTimestampInSameSession(e,i)},n.isTimestampInSameSession=function(t,n){return Math.abs(t-n)<u},n.updateSessionId=function(t,n){if(t){var e=t.getValueOrDefault([o.FIELDS.TIME]),r=t.getValueOrDefault([o.FIELDS.SESSION_ID]),u=n.getValueOrDefault([o.FIELDS.TIME]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?e:r,c(t=new i(new a("",""),e,r),n)}else n.setFieldValue(o.FIELDS.SESSION_ID,n.getValueOrDefault([o.FIELDS.TIME]))},n.updateSessionIndex=function(t,n){if(t){var e=t.getValueOrDefault([o.FIELDS.TIME]),r=t.getValueOrDefault([o.FIELDS.SESSION_INDEX]),u=n.getValueOrDefault([o.FIELDS.TIME]),c=t.getValueOrDefault([o.FIELDS.SESSION_ID]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?0:r,c="number"!=typeof c?e:c,s(t=new i(new a("",""),e,c,r),n,!1)}else n.setFieldValue(o.FIELDS.SESSION_INDEX,0)},n.sessionize=function(t){var e=t.length;if(0!==e){t[0].setFieldValue(o.FIELDS.SESSION_ID,t[0].getValueOrDefault([o.FIELDS.TIME]));for(var i=1;i<e;i++)c(t[i-1],t[i]);var a=n.CURRENT_SESSION_INDEX,f=t[e-1].getValueOrDefault([o.FIELDS.TIME]);r.now()-f>u&&(a+=1),t[e-1].setFieldValue(o.FIELDS.SESSION_INDEX,a);for(i=e-1;i>0;i--)s(t[i],t[i-1],!0)}},n.reindexIfNecessary=function(t,n,e){var i=function(t){for(var n=0;n<t.length;n++){var e=t[n].getValueOrDefault([o.FIELDS.SESSION_INDEX]);t[n].setFieldValue(o.FIELDS.SESSION_INDEX,e+1)}};-1===t.getValueOrDefault([o.FIELDS.SESSION_INDEX])&&(i(n),i(e))},n.sessionSortPredicate=function(t,n){return t[o.FIELDS.TIME]-n[o.FIELDS.TIME]},n.applyMigrations=function(t){return!1}},4938:function(t,n,e){var i=e(136),r=e(6278),o=e(8298),a=e(5225),u=e(409),c=e(7852),s=e(7269),f=e(4285),l=n,d=e(8487).J,v=e(1489),h=e(6592),p=e(8487)._,g=(s=e(7269),e(2025)),m=g.get("stores/visitor_events"),b=g.get("stores/visitor_events_manager"),_={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},y=1e3;function w(t){u.dispatch(i.SET_VISITOR_EVENTS,t)}function E(t){u.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:t})}function I(t){u.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:t})}function A(t){u.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:t})}function T(){return m.getEvents()}function S(){return b.getBaseMap()}function O(){return b.getEventQueue()}function k(){return b.getLastEvent()}function R(){var t=T().concat(O()),n=!1;return t.length>y&&(t=t.slice(-1e3),n=!0),w(t),I([]),n}n.initialize=function(t,n){if(!b.getInitialized()){l.I(t,n);var e=T();e.length>0&&A(e[e.length-1]);var r=O();r.length>0&&A(r[r.length-1]),u.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}},n.addEvent=function(t){c.debug("Behavior store: adding event",t);var n=l.A(t);A(n),I(O().concat(n)),s.reindexIfNecessary(k(),T(),O()),l.T(O()),n.t&&function(t){try{var n=Number(r.get(h.COOKIES.OPTIMIZELY_SESSION,!1));if(isNaN(n)||0!==n){var e=n?s.isTimestampInSameSession(t,n)?t:0:t;r.set(h.COOKIES.OPTIMIZELY_SESSION,e.toString(),{path:"/",encodeValue:!1},!0)}}catch(t){c.error("Error setting session cookie",t)}}(n.t)},n.getEvents=function(){return O().length>0&&(R()&&s.sessionize(T()),l.S(T()),l.T(O())),T()},n.getEventCount=function(){return O().length+T().length},l.I=function(t,n){l.O(t,n)&&(l.S(T()),l.T(O())),s.sessionize(T())},l.O=function(t,n){if(0===t.length&&0===n.length)return w([]),I([]),!1;var e=!1,i=t[0]||n[0];return _.EVENTBASE in i?(w(l.k(t)),I(l.k(n))):(e=!0,w(l.R(t)),I(l.R(n))),O().length>0&&(R(),e=!0),w(l._updateBaseMapAndMaybeDedupe(T())),l._migrateEventBasesAndUpdateStore()&&(e=!0),e},l.R=function(t){for(var n=[],e=0;e<t.length;e++){var i=t[e],r=l.N(i);n[e]=new d(r,i[v.FIELDS.TIME])}return n},l._migrateEventBasesAndUpdateStore=function(){var t=!1,n=l.D();return s.applyMigrations(n)&&(t=!0,E({}),w(l._updateBaseMapAndMaybeDedupe(T())),I(l._updateBaseMapAndMaybeDedupe(O()))),t},l.j=function(){return o.now()},l.A=function(t){var n,e=t.name,i=t.type||"default",r=t.category||a.OTHER,o=t.tags||{};t.revenue&&(n=t.revenue);var u=new p(e,i,r,o,n);u=l.P(u);var c=l.j(),f=new d(u,c,-1);return s.updateSessionId(k(),f),s.updateSessionIndex(k(),f),f},l._updateBaseMapAndMaybeDedupe=function(t){for(var n=0;n<t.length;n++)t[n].eventBase=l.P(t[n].eventBase);return t},l.S=function(t){var n=l.L(t);f.persistBehaviorEvents(n)},l.T=function(t){var n=l.L(t);f.persistBehaviorEventQueue(n)},l.U=function(){var t;b.getCleared()||(w([]),I([]),l.S(T()),l.T(O()),E({}),A(null),t=!0,u.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:t}))},l.P=function(t){var n=t.hash(),e=S(),i=e[n];if(void 0===i)return e[n]=[t],E(e),t;for(var r=0;r<i.length;r++)if(t.equals(i[r]))return i[r];return i.push(t),E(e),t},l.D=function(){var t=[],n=S();for(var e in n)!n.hasOwnProperty(e)||(t=t.concat(n[e]));return t},l.L=function(t){for(var n=function(t){var n={};n[v.FIELDS.NAME]=t.getValueOrDefault([v.FIELDS.NAME]),n[v.FIELDS.TYPE]=t.getValueOrDefault([v.FIELDS.TYPE]);var e=t.getValueOrDefault([v.FIELDS.CATEGORY]);void 0!==e&&(n[v.FIELDS.CATEGORY]=e);var i=t.getValueOrDefault([v.FIELDS.REVENUE]);void 0!==i&&(n[v.FIELDS.REVENUE]=i);var r=t.getValueOrDefault([v.FIELDS.OPTIONS]);return void 0!==r&&(n[v.FIELDS.OPTIONS]=r),n},e=_,i=[],r="_idx_",o=0;o<t.length;o++){var a,u,c=t[o],s=c.eventBase;if(s.hasOwnProperty(r)){a=i[s[r]];var f=c[v.FIELDS.TIME]-(a[e.TIMEBASE]||0);(u={})[e.DELTA]=f,u[e.INDEX]=o,a[e.TIMESTAMPS].push(u)}else(a={})[e.EVENTBASE]=n(c),a[e.HASH]=s.hash(),a[e.TIMEBASE]=c[v.FIELDS.TIME],(u={})[e.DELTA]=0,u[e.INDEX]=o,a[e.TIMESTAMPS]=[u],i.push(a),s[r]=i.length-1}for(o=0;o<t.length;o++)delete t[o].eventBase[r];return i},l.N=function(t,n){var e=new p(t[v.FIELDS.NAME],t[v.FIELDS.TYPE],t[v.FIELDS.CATEGORY],t[v.FIELDS.OPTIONS],t[v.FIELDS.REVENUE]);return void 0!==n&&e.setHash(n),e},l.k=function(t){for(var n=_,e=[],i=0;i<t.length;i++)for(var r=t[i],o=l.N(r[n.EVENTBASE],r[n.HASH]),a=r[n.TIMEBASE],u=r[n.TIMESTAMPS],c=0;c<u.length;c++){var s=u[c],f=new d(o,a+s[n.DELTA]);e[s[n.INDEX]]=f}return e},n.deserialize=function(t){return l.k(t)},n.mergeAllEvents=function(t){var n=[].concat.apply([],t);return n.sort(s.sessionSortPredicate),s.sessionize(n),n},n.MAX_EVENTS=y},136:function(t,n,e){var i=e(3826);t.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,SET_GA4_USER_ID:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,UPDATE_CONTEXTUAL_MAB_MAP:null,MERGE_CONTEXTUAL_MAB_MAP:null,SET_ODP_SEGMENTS:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,RESET_VIEW_STATES:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT:null,RECORD_VISITOR_ID_LOCATOR_USAGE:null,RECORD_VISITOR_ID_ERROR:null,RECORD_STICKY_BUCKETING_FEATURE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_USE_BEACON:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})},6592:function(t,n,e){var i=e(3826);n.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",OPTIMIZELY_SESSION:"optimizelySession",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},n.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},n.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},n.Lifecycle=i({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),n.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},n.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},n.PluginTypes=i({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),n.ResourceTimingAttributes=i({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),n.RUMPerformanceTimingAttributes=i({blockTime:null}),n.AttributionTypes=i({FIRST_TOUCH:null,LAST_TOUCH:null}),n.SandboxedFunctions=i({XMLHttpRequest:null}),n.PerformanceData=i({performance_marks:null,resource_timing:null,performance_timing:null}),n.PerformanceCounters=i({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),n.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely",CONTEXTUAL_MAB:"contextual_mab",ODP_SEGMENTS:"odp_segments"},n.AllStorageKeys=Object.assign({},n.StorageKeys,n.VisitorStorageKeys),n.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"},n.VisitorIdLocatorType={COOKIE:"cookie",JS_VARIABLE:"js",LOCALSTORAGE:"localStorage",QUERY:"query"},n.AllocationPolicyEnum={CMAB:"contextual-multi-arm-bandit",MIN_REGRET:"min-regret",MIN_TIME:"min-time",MANUAL:"manual"}},5225:function(t){t.exports={OTHER:"other"}},3111:function(t,n){n.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}},1320:function(t){t.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}},6938:function(t,n,e){var i=e(3826);n.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),n.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),n.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),n.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),n.RedirectRelayMedia=i({COOKIE:null})},9249:function(t,n,e){var i=e(1691),r=n.TOTAL_POINTS=1e4;n.bucketingNumber=function(t,n,e){return i.hashToInt(t+n,e,r)},n.isHoldback=function(t,e){return n.bucketingNumber(t,e.id,i.Seed.IGNORING)<(e.holdback||0)},n.chooseWeightedCandidate=function(t,e,r){for(var o=n.bucketingNumber(t,e,i.Seed.BUCKETING),a=0;a<r.length;a++)if(r[a].endOfRange>o)return r[a].entityId;throw new Error("Unable to choose candidate")}},571:function(t,n,e){var i=e(8275).isEmpty,r=e(136),o=e(9249),a=e(5421),u=e(7353).b,c=e(409),s=e(7852),f=e(2855);n.isValidExperiment=function(t,n){var e;return s.groupCollapsed("Decision / Evaluating audiences for experiment:",n,t),e=!n.audienceIds||a.evaluate(n.audienceIds,(function(n){return t.includes(n)})),s.groupEnd(),s.debug("Decision / Experiment",n,"is valid?",e),e},n.selectVariation=function(t,n,e,i,a){if(s.debug("Decision / Selecting variation for experiment:",t.id),!t.variations||0===t.variations.length)throw new u('No variations in selected experiment "'+t.id+'"');if(!t.weightDistributions&&t.variations.length>1)throw new u('On selected experiment "'+t.id+'", weightDistributions must be defined if # variations > 1');var l;if(t.bucketingStrategy&&"impression"===t.bucketingStrategy)if(1===t.variations.length)l=t.variations[0].id;else{var d=i;l=o.chooseWeightedCandidate(e+d,t.id,t.weightDistributions)}else if(l=1===t.variations.length?t.variations[0].id:o.chooseWeightedCandidate(e,t.id,t.weightDistributions),null==t?void 0:t.deployed)s.debug("Decision / Experiment is deployed. Skipping bucketing.");else if(a&&a[t.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",t.id);var v=a[t.id];if(!t.variations.find((function(t){return t.id===v})))return c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"stoppedVariation",id:t.id}),s.debug("Decision / Preferred variation:",v,"not found on experiment:",t.id,". Visitor not bucketed."),null;v!==l&&(c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredVariation",id:t.id}),l=v)}var h=f.processCmabExperiment(t,l);h&&(l=h);var p=t.variations.find((function(t){return t.id===l}));if(p)return s.debug("Decision / Selected variation:",p),p;throw new u('Unable to find selected variation: "'+l+'".')},n.getExperimentById=function(t,n){var e=t.experiments.find((function(t){return t.id===n}));if(e)return e;throw new u("Unable to find selected experiment.")},n.hasVariationActionsOnView=function(t,n){return s.debug("Decision / Checking variation:",t,"for actions on pageId:",n),!!(t.actions||[]).find((function(t){return t.pageId===n&&!i(t.changes)}))}},7353:function(t,n){function e(t){this.message=t}e.prototype=new Error,n.b=e},1035:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.pick,a=e(136),u=e(8841),c=e(7595),s=e(9249),f=e(571),l=e(7353).b,d=e(2025),v=e(6592),h=e(409),p=e(3672),g=e(2042),m=e(7852),b=(e(5010),e(5686)),_=d.get("stores/plugins"),y=d.get("stores/global"),w=d.get("stores/layer_data");function E(t){var n=_.getPlugin(v.PluginTypes.deciders,t);if(r(n))throw new Error("No deciders found for policy: "+t);return n}n.isPageIdRelevant=function(t){if(!t)return!1;var n=E(t.policy);return"function"==typeof n.includePageIdInDecisionTicket?n.includePageIdInDecisionTicket(t):!0===n.includePageIdInDecisionTicket},n.createTicket=function(t){var n,e,i,r=o(t,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return Object.assign(r,{audienceIds:(n=t.visitorProfile,e=t.audiences,i=_.getAllPlugins(v.PluginTypes.audienceMatchers),e.reduce((function(t,e){return c.isInAudience(n,e,i)&&t.push(e.id),t}),[])),activationId:y.getActivationId()}),r},n.decideGlobal=function(t){return{isGlobalHoldback:s.isHoldback(t.bucketingId,{id:null,holdback:t.globalHoldback})}},n.decideGroup=function(t,n){m.debug("Decision / Deciding layer for group: ",p.description(t));var e,i,r=n.preferredLayerId,o=!!r;try{(e=s.chooseWeightedCandidate(n.bucketingId,t.id,t.weightDistributions))&&"None"!==e||(i='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(t){i="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(o&&(m.debug("Decision / Using preferredLayerMap to select layer for group:",p.description(t)),r!==e&&(h.dispatch(a.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredLayer",id:t.id}),e=r)),i)return{layerId:null,reason:i};if(!t.weightDistributions.find((function(t){return t.entityId===e}))){var u="Visitor was"+(o?" sticky-":" non-sticky ")+"bucketed into a campaign ("+e+") which is not in the group";if(!o)throw new l(u);return{layerId:null,reason:u}}return{layerId:e}},n.decideLayer=function(t,n){var e,i;m.debug("Deciding: ",t,n);var o,a,c=E(t.policy),d={layerId:t.id,experimentId:null,variationId:null,isLayerHoldback:s.isHoldback(n.bucketingId,t),isLayerConcluded:!!t.concluded};if(r(t.experiments))throw new l("No experiments in layer.");try{if(c.decideLayer){m.debug("Decision / Using decider's custom decideLayer.");var v=c.decideLayer(t,n);e=v.experiment,i=v.variation}else m.debug("Decision / Using default decideLayer behavior."),e=c.selectExperiment(t,n.audienceIds,n.bucketingId),i=f.selectVariation(e,n.audienceIds,n.bucketingId,n.activationId,n.preferredVariationMap)}catch(t){o=t,(null!=(a=l)&&"undefined"!=typeof Symbol&&a[Symbol.hasInstance]?a[Symbol.hasInstance](o):o instanceof a)?d.reason=t.message:d.error=t}return d.experimentId=e?e.id:null,d.variationId=i?i.id:null,d.error&&(d.error.name="DecisionEngineError",u.emitError(d.error)),d},n.getDummyLayerDecision=function(t,n){var e,i=function(t,n){for(var e=0;e<t.experiments.length;e++)for(var i=0;i<t.experiments[e].variations.length;i++)if(n.indexOf(t.experiments[e].variations[i].id)>-1)return{experimentId:t.experiments[e].id,variationId:t.experiments[e].variations[i].id};return null}(t,n);return i?(m.log("Decision / Applying force variation:",i.variationId,"to Campaign",g.description(t)),e={layerId:t.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,isLayerConcluded:!1,reason:"force"}):(m.log("No variation matches ids:",n,"in Campaign",g.description(t)),e={layerId:t.id,variationId:null,experimentId:null,isLayerHoldback:!1,isLayerConcluded:!1,reason:"force"}),e},n.isInCohort=function(t){if(!t.experimentId||!t.variationId)return!1;var n=w.get(t.layerId);return!(b.isSingleExperimentPolicy(n.policy)&&t.isLayerHoldback)}},2025:function(t,n,e){var i=e(2328),r=e(409),o=e(3822),a=i.create(),u={action_data:e(5628),async_request:e(9021),audience_data:e(2500),change_data:e(7090),cleanup:e(2587),client_metadata:e(2814),cookie_options:e(6108),event_data:e(9034),event_emitter:e(4338),dimension_data:e(1862),directive:e(5798),global:e(2940),history:e(1459),integration_settings:e(4453),layer:e(2734),layer_data:e(9057),log:e(9809),observed_redirect:e(8338),pending_events:e(9738),performance:e(5501),plugins:e(4715),provider_status:e(8515),pending_redirect:e(6067),rum:e(4999),sandbox:e(9292),session:e(3799),tracker_optimizely:e(8950),ua_data:e(4184),view:e(90),view_data:e(749),visitor:e(2857),visitor_attribute_entity:e(6658),visitor_events:e(2725),visitor_events_manager:e(977),visitor_id:e(241),visitor_bucketing:e(7016),xdomain:e(227)};u.group_data=e(527),r.registerStores(u),Object.keys(u).forEach((function(t){a.register("stores/"+t,r.getStore(t))})),a.register("core/plugins/matchers/key_value",o),t.exports=a},4214:function(t,n,e){var i=e(136),r=e(8841),o=e(6278),a=e(8130).v,u=e(6592),c=e(409),s=e(7852),f=n.JSONParseError=a("JSONParseError"),l=e(6022),d=e(192),v=e(9454),h="optimizely_show_preview",p="optimizely_disable",g="optimizely_editor",m="optimizely_p13n",b="optimizely_x_audiences",_="optimizely_x",y="optimizely_show_preview",w="optimizely_opt_out",E="optimizely_token",I="optimizely_force_tracking",A="optimizely_embed_editor";n.populateDirectiveData=function(){var t,n,e,a,T,S,O,k,R;!function(){var t="OFF",n=l.getQueryParamValue("optimizely_log");if(n){var e=n.split(":");""!==e[0]&&(t=String(e[0]).toUpperCase()),void 0!==e[1]&&s.setLogMatch(e[1])}s.setLogLevel(t)}(),function(){var t=v.getUserAgent()||"";if("string"!=typeof t)return void s.warn("Directive / userAgent not a string");t=t.toLowerCase(),["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"].some((function(n){if(t.includes(n))return s.warn("Directive / Matches bot:",n),!0}))&&(s.log("Directive / Disabling tracking"),c.dispatch(i.LOAD_DIRECTIVE,{trackingDisabled:!0}))}(),t=window.optimizely?window.optimizely.initialized:void 0,n=Boolean("function"==typeof t?t():t),c.dispatch(i.LOAD_DIRECTIVE,{alreadyInitialized:n}),c.dispatch(i.LOAD_DIRECTIVE,{mutationObserverAPISupported:v.isMutationObserverAPISupported()}),function(){var t=o.get(u.COOKIES.OPT_OUT),n=l.getQueryParamValue(w),e="You have successfully opted out of Optimizely for this domain.",r="You are NOT opted out of Optimizely for this domain.";if("true"===n||"false"===n){var a="true"===n;c.dispatch(i.LOAD_DIRECTIVE,{shouldOptOut:a}),v.alert(a?e:r)}else t&&c.dispatch(i.LOAD_DIRECTIVE,{shouldOptOut:"true"===t})}(),function(){var t=!1,n=[h,p];n.push(g);for(var e=0;e<n.length;e++)if("true"===l.getQueryParamValue(n[e])){s.warn("Directive / Not activating because "+n[e]+" is set."),t=!0;break}c.dispatch(i.LOAD_DIRECTIVE,{disabled:t})}(),c.dispatch(i.LOAD_DIRECTIVE,{isEditor:!1}),c.dispatch(i.LOAD_DIRECTIVE,{isPreview:!1}),(e=l.getQueryParamValue(y))&&s.log("Directive / Is legacy preview mode"),c.dispatch(i.LOAD_DIRECTIVE,{isLegacyPreview:!!e}),c.dispatch(i.LOAD_DIRECTIVE,{isSlave:!1}),a=v.getGlobal("optlyDesktop"),(T=!(!a||void 0===a.p13nInner))&&s.log("Directive / Is running in desktop app editor"),c.dispatch(i.LOAD_DIRECTIVE,{isRunningInDesktopApp:T}),(S="true"===l.getQueryParamValue(m))&&s.log("Directive / Is running in editor"),c.dispatch(i.LOAD_DIRECTIVE,{isRunningInV2Editor:S}),function(){var t=!1,n=v.getGlobal("sessionStorage"),e=l.getQueryParamValue(A);t="true"===e,e&&n&&("true"===e?n.setItem(A,"true"):n.removeItem(A)),n&&"true"===n.getItem(A)&&(t=!0,s.log("Directive / Should mount embedded editor"));c.dispatch(i.LOAD_DIRECTIVE,{requestedEmbeddedEditor:t})}(),O=o.get(u.COOKIES.TOKEN)||null,k=l.getQueryParamValue(E)||O,c.dispatch(i.LOAD_DIRECTIVE,{projectToken:k}),function(){var t=o.get(u.COOKIES.PREVIEW),n=[],e=l.getQueryParamValue(b);if(e)n=o.safeDecodeURIComponent(e).split(",");else if(t)try{n=d.parse(t).forceAudienceIds}catch(n){var a=new f("Failed to parse previewCookie in registerForceAudienceIds: "+t),v={originalMessage:n.message,userError:!0};r.emitError(a,v)}n.length&&(s.log("Directive / Force Audience IDs:",n),c.dispatch(i.LOAD_DIRECTIVE,{forceAudienceIds:n}))}(),function(){var t=o.get(u.COOKIES.PREVIEW),n=[],e=l.getQueryParamValue(_);if(e)n=o.safeDecodeURIComponent(e).split(",");else if(t)try{n=d.parse(t).forceVariationIds}catch(n){var a=new f("Failed to parse previewCookie in registerForceVariationIds: "+t),v={originalMessage:n.message,userError:!0};r.emitError(a,v)}n.length&&(s.log("Directive / Force Variation IDs:",n),c.dispatch(i.LOAD_DIRECTIVE,{forceVariationIds:n}))}(),(R=l.getQueryParamValue(I))&&c.dispatch(i.LOAD_DIRECTIVE,{forceTracking:R})};n.setOptOut=function(t){t?(s.warn("Directive / Opting out"),o.set(u.COOKIES.OPT_OUT,"true",{maxAge:31536e4},!0)):o.remove(u.COOKIES.OPT_OUT),c.dispatch(i.LOAD_DIRECTIVE,{shouldOptOut:t})}},8298:function(t,n){n.now=function(){return+new Date}},7871:function(t,n){n.VERSION="0.261.0",n.NAME="js"},1019:function(t,n,e){var i=e(2025).get("stores/global");n.getDocumentElement=function(){return document.documentElement},n.getCookieString=function(){return document.cookie||""},n.setCookie=function(t){document.cookie=t},n.querySelector=function(t){return document.querySelector(t)},n.querySelectorAll=function(t){return document.querySelectorAll(t)},n.parseUri=function(t){var e=n.createElement("a");return e.href=t,e},n.childrenOf=function(t){return Array.prototype.slice.call(t.querySelectorAll("*"))},n.createElement=function(t){return document.createElement(t)},n.isReady=function(){return i.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},n.isLoaded=function(){return"complete"===document.readyState},n.addReadyHandler=function(t){return document.addEventListener("DOMContentLoaded",t),function(){n.removeReadyHandler(t)}},n.removeReadyHandler=function(t){return function(){document.removeEventListener("DOMContentLoaded",t)}},n.getReferrer=function(){return document.referrer},n.getReadyState=function(){return document.readyState},n.write=function(t){if("loading"!==n.getReadyState())throw new Error("Aborting attempt to write to already-loaded document");document.write(t)},n.appendToHead=function(t){return n.appendTo(document.head,t)},n.appendTo=function(t,n){t.appendChild(n)},n.addEventListener=function(t,n,e){return document.addEventListener(t,n,e),function(){document.removeEventListener(t,n,e)}},n.getCurrentScript=function(){if(document.currentScript)return document.currentScript},n.parentElement=function(t){for(var n=t.parentNode;n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;return n}},1353:function(t,n,e){var i,r,o="optimizely_data",a=e(8130).v,u=e(3908),c=e(9454),s=a("StorageError");try{r=c.getGlobal("localStorage")}catch(t){throw new s("Unable to read localStorage: "+t.toString())}if(!r)throw new s("localStorage is undefined");i=u.create(r,o),n.DT=i},4970:function(t,n,e){var i=e(318);n.create=function(t){return new(i.get("MutationObserver",MutationObserver))(t)},n.observe=function(t,n,e){t.observe(n,e)}},4049:function(t,n,e){var i=e(6761).Promise,r=e(9454);n.estimateStorage=function(){var t=r.getGlobal("navigator");try{return t.storage.estimate()}catch(t){return i.resolve({usage:null,quota:null})}}},5010:function(t,n,e){var i=e(136),r=e(8130).v,o=e(8298),a=e(409),u=e(9454),c=e(2025).get("stores/rum"),s="optimizely:",f=n.Error=r("PerformanceError");function l(){return u.getGlobal("performance")}n.time=function(t){if(c.getSampleRum()){var n=l();if(n&&n.mark){var e=s+t;n.clearMarks(e+"Begin"),n.mark(e+"Begin")}}},n.timeEnd=function(t){if(c.getSampleRum()){var n=l();if(n&&n.mark){var e=s+t,r=n.getEntriesByName(e+"Begin");if(0===r.length)throw new f("Called timeEnd without matching time: "+t);n.clearMarks(e+"End"),n.mark(e+"End");var o=t+"Time",u=n.getEntriesByName(e+"End")[0].startTime-r[0].startTime;a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:o,data:{startTime:Math.round(1e3*r[0].startTime)/1e3,duration:Math.round(1e3*u)/1e3}})}}},n.setMark=function(t,n,e){if(c.getSampleRum()){var r=l();if(r&&r.mark){var o=s+t;r.mark(o),a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:t,data:{startTime:Math.round(1e3*n)/1e3,duration:Math.round(1e3*e)/1e3}})}}},n.now=function(){var t=l();return t?t.now():o.now()}},318:function(t,n){n.get=function(t,n){try{var e=window.Zone;if(e&&"function"==typeof e.V){var i=window[e.V(t)];if("function"==typeof i)return i}}catch(t){}return n}},9454:function(t,n,e){var i=e(7852);n.getUserAgent=function(){return window.navigator.userAgent},n.getLocationSearch=function(){return window.location.search},n.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},n.getHref=function(){return window.location.href},n.getLocation=function(){return window.location},n.setLocation=function(t){window.location.replace(t)},n.setGlobal=function(t,n){window[t]=n},n.getGlobal=function(t){return window[t]},n.getGlobalByPath=function(t){for(var n=t.split("."),e=window;n.length;)try{e=e[n.shift()]}catch(n){throw i.error("Attempted to access nonexistent property. Path ",t),new Error("Attempted to access nonexistent property. Path "+t)}return e},n.addEventListener=function(){return window.addEventListener.apply(window,arguments)},n.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},n.isMutationObserverAPISupported=function(){return void 0!==window.MutationObserver},n.alert=function(t){alert(t)},n.setTimeout=function(t,n){return setTimeout((function(){try{t()}catch(t){i.warn("Deferred function threw error:",t)}}),n)},n.setInterval=function(t,n){return setInterval((function(){try{t()}catch(t){i.warn("Polling function threw error:",t)}}),n)}},8851:function(t,n){n.create=function(t,n,e,i){return Object.assign({category:"other"},i,{id:t,apiName:n,eventType:e})}},7566:function(t,n,e){var i=e(9899),r=e(136),o=e(8841),a=e(2025),u=e(409),c=e(7852),s=a.get("stores/event_emitter");n.on=function(t){return t.token||(t.token=i.generate()),u.dispatch(r.ADD_EMITTER_HANDLER,t),t.token},n.off=function(t){u.dispatch(r.REMOVE_EMITTER_HANDLER,{token:t})},n.emit=function(t,n,e){s.getHandlers(t,n).forEach((function(i){try{i.handler.call({$di:a},t)}catch(r){!e&&i.emitErrors?(c.error("Error in handler for event:",t,r),o.emitError(r,null,n)):c.warn("Suppressed error in handler for event:",t,r)}}))}},5547:function(t,n,e){var i=e(7566);n.on=function(t){return t.publicOnly=!0,i.on(t)},n.off=i.off,n.emit=function(t){i.emit(t)}},8484:function(__unused_webpack_module,exports,__webpack_require__){var createError=__webpack_require__(3958),di=__webpack_require__(2025),Logger=__webpack_require__(7852),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(t,n){n=(n=n||[]).concat(di.get("env/jquery"));try{return t.apply(void 0,n)}catch(e){throw Logger.warn("Error applying function",t,"with args:",n,e),new ExecError(e)}},exports.eval=function(str){try{return str="var $ = optimizely.get('jquery');"+str,eval(str)}catch(t){throw Logger.warn("Error executing JS:",str,t),new ExecError(t)}}},409:function(t,n,e){var i=e(3191);t.exports=i.create()},3672:function(t,n){n.description=function(t){var n=!!t.name?'"'+t.name+'" ':"",e=function(t){return(t.weightDistributions||[]).map((function(t){return t.entityId}))}(t).join(", ");return n+"(id "+t.id+", campaigns: "+e+")"}},2042:function(t,n,e){var i=e(8275).flattenDeep,r=e(136),o=e(8298),a=e(2025),u=e(409),c=a.get("stores/global"),s=a.get("stores/session");n.recordLayerDecision=function(t,n,e){return u.dispatch(r.RECORD_LAYER_DECISION,{layerId:t,decision:e,decisionTicket:n,sessionId:s.getSessionId(),activationId:c.getActivationId(),timestamp:o.now(),revision:c.getRevision(),namespace:c.getNamespace(),pageId:n.pageId}),e},n.relatedAudienceIds=function(t){var n={},e=["and","or","not"];return(t.experiments||[]).forEach((function(t){i(t.audienceIds).forEach((function(t){e.includes(t)||(n[t]=!0)}))})),Object.keys(n)},n.getActivationTimeout=function(t){var n=t.activation;return n&&null!==n.timeout&&void 0!==n.timeout?n.timeout:2e3},n.description=function(t){return(t.name?'"'+t.name+'" ':"")+"("+t.id+")"},n.createSingle=function(t,n,e){return{id:t,policy:"single_experiment",holdback:0,experiments:[{id:n||"",variations:[{id:e||"",actions:[]}],audienceIds:[]}],integrationStringVersion:1}},n.createLayerState=function(t,n,e,i,r){return void 0===i&&(i=!1),void 0===r&&(r=!1),{layerId:t,decision:{layerId:t,experimentId:n,variationId:e,isLayerHoldback:i||!1,isLayerConcluded:r||!1},decisionTicket:{audienceIds:[]}}},n.getIntegrationTypes=function(t){return Object.keys(Object.keys(t.integrationSettings).reduce((function(t,n){return Number.isNaN(Number(n))||(n="custom"),t[n]=1,t}),{}))}},2424:function(t,n){n.G=function(t,n){if(!n)return 0;for(var e=n.toString().split("."),i=t.toString().split("."),r=0;r<e.length;r++){if(void 0===i[r])return-1;if(isNaN(Number(i[r]))){if(i[r]!==e[r])return-1}else{if(Number(i[r])<Number(e[r]))return-1;if(Number(i[r])>Number(e[r]))return 1}}return 0}},5421:function(t,n,e){var i=e(192),r=e(7852),o="or",a="not";var u={};function c(t,n){var e;if(Array.isArray(t)){var a,c;"string"==typeof t[0]&&t[0]in u?(a=t[0],c=t.slice(1)):(a=o,c=t),r.groupCollapsed('Condition / Applying operator "'+a+'" with args',i.stringify(c));try{e=u[a](c,n),r.debug("Condition / Result:",e)}finally{r.groupEnd()}return e}return e=n(t),r.debug("Condition / Evaluated:",i.stringify(t),":",e),e}u["and"]=function(t,n){for(var e,i,r=0;r<t.length;r++){if(!1===(e=c(t[r],n)))return!1;void 0===e&&(i=!0)}if(!i)return!0},u[o]=function(t,n){for(var e,i=!1,r=0;r<t.length;r++){if(!0===(e=c(t[r],n)))return!0;void 0===e&&(i=!0)}if(!i)return!1},u[a]=function(t,n){if(1!==t.length)return!1;var e=c(t[0],n);return void 0!==e?!e:void 0},t.exports={evaluate:c}},4861:function(t,n,e){var i=e(6179);function r(t){return(t=(t||"").toLowerCase())in u?t:Object.keys(u).find((function(n){return u[n].includes(t)}))||"unknown"}function o(t,n,e){return n||("unknown"===t?"unknown":e?"mobile":"desktop_laptop")}n.parseUA=function(t){var n=new i(t),e=n.getBrowser(),u=n.getOS(),s=n.getDevice(),f=(u.name||"unknown").toLowerCase(),l=(e.name||"unknown").toLowerCase(),d=function(t){var n=/\b(iPad|iPhone)\d+,\d+/i.exec(t);return n?n[1].toLowerCase():null}(t),v="ipad"===d?"tablet":s.type,h=a(v,l,f);return{browser:{id:r(e.name),version:e.version},platform:{name:f,version:u.version},device:{model:c[s.model]||d||"unknown",type:o(l,v,h),isMobile:h}}};var a=function(t,n,e){if(["mobile","tablet"].includes(t)||["opera mini"].includes(n))return!0;return!!["android","blackberry","ios","windows phone"].includes(e)},u={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},c={iPhone:"iphone",iPad:"ipad"}},2328:function(t){function n(){this.B={}}n.prototype.register=function(t,n){if(1!==arguments.length){if(this.B[t])throw new Error("Module already registered for: "+t);this.B[t]=n}else{var e=this;Object.keys(t).forEach((function(n){var i=t[n];e.register(n,i)}))}},n.prototype.get=function(t){return this.B[t]},n.prototype.getModuleKeys=function(){var t=this.B;return Object.keys(t)},n.prototype.evaluate=function(t){var n=t.length,e=t.slice(0,n-1),i=t[n-1];if("function"!=typeof i)throw new Error("Evaluate must take a function as last element in array");var r=e.map(this.get,this);return i.apply(null,r)},n.prototype.reset=function(){this.B={}},t.exports={create:function(){return new n}}},4544:function(t,n,e){var i=e(8275).cloneDeep;function r(t,n,e){this.q=t,this.H=n,this.Y=0,this.K=!1,this.$={},Object.assign(this,e),this.W={},this.initialize&&this.initialize()}r.prototype.X=function(t,n){var e=this.$[t];e&&"function"==typeof e&&e.call(this,n,t)},r.prototype.Z=function(){return i(this.W)},r.prototype.on=function(t,n){this.$[t]=n.bind(this)},r.prototype.observe=function(t){return this.H.tt(this.q,t)},r.prototype.emitChange=function(){this.K=!0,this.Y++},r.prototype.hasChanges=function(){return this.K},r.prototype.resetChange=function(){this.K=!1},r.prototype.getStateId=function(){return this.Y},r.prototype.nt=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},t.exports=r},3191:function(t,n,e){var i=e(4544);function r(t){t=t||{},this.et={},this.it={},this.rt=0,this.ot=[],this.ut=[]}function o(t,n){return function(){var e=t.indexOf(n);-1!==e&&t.splice(e,1)}}r.prototype.registerStores=function(t){Object.keys(t).forEach((function(n){this.et[n]=new i(n,this,t[n])}),this)},r.prototype.getStore=function(t){return this.et[t]},r.prototype.dispatch=function(t,n){this.dispatchId++;var e=this;this.ot.forEach((function(i){i.call(e,t,n)}));var i=this.et;Object.keys(i).forEach((function(e){i[e].X(t,n)})),this.ut.forEach((function(i){i.call(e,t,n)})),Object.keys(i).forEach((function(t){var n=i[t];n.hasChanges()&&this.it[t]&&(n.resetChange(),this.it[t].forEach((function(t){t(n)})))}),this)},r.prototype.reset=function(){this.it={};var t=this.et;Object.keys(t).forEach((function(n){t[n].nt()}))},r.prototype.getState=function(){var t={},n=this.et;return Object.keys(n).forEach((function(e){t[e]=n[e].Z()})),t},r.prototype.onPreAction=function(t){var n=this.ot;return n.push(t),o(n,t)},r.prototype.onPostAction=function(t){var n=this.ut;return n.push(t),o(n,t)},r.prototype.tt=function(t,n){return this.it[t]||(this.it[t]=[]),this.it[t].push(n),o(this.it[t],n)},t.exports={create:function(t){return new r(t)}}},192:function(t,n){n.stringify=function(){var t=arguments;return function(t){var n,e,i=[Array.prototype],r=[];i.forEach((function(t){void 0!==t.toJSON&&(r.push(t.toJSON),delete t.toJSON)}));try{n=t()}catch(t){e=t}finally{r.forEach((function(t,n){i[n].toJSON=t}))}if(e)throw e;return n}((function(){return JSON.stringify.apply(null,t)}))},n.parse=JSON.parse},2973:function(t,n){n.hasMatch=function(t,n,e){var i=null!=e,r=null!=t;switch(n||(r?"exact":"exists")){case"exists":return i;case"exact":return i&&String(e)===t;case"substring":return i&&String(e).indexOf(t)>-1;case"regex":try{return!(!r||!i)&&new RegExp(t).test(String(e))}catch(t){}return!1;case"range":var o=t.split(":"),a=parseFloat(o[0]),u=parseFloat(o[1]),c=parseFloat(e);return c>=a&&c<=u;default:return!1}}},6761:function(t,n,e){t.exports=e(1375)},3908:function(t,n,e){var i=e(7852);function r(t,n){this.ct=t,this.st=n}r.prototype.ft=function(t){return[this.st,t].join("$$")},r.prototype.dt=function(t){return t.replace(this.st+"$$","")},r.prototype.setItem=function(t,n){try{this.ct.setItem(this.ft(t),n)}catch(n){i.warn("Failed to save",t,"to localStorage:",n)}},r.prototype.removeItem=function(t){this.ct.removeItem(this.ft(t))},r.prototype.getItem=function(t){var n=null;try{n=this.ct.getItem(this.ft(t))}catch(t){}return n},r.prototype.keys=function(){var t=this;return Object.keys(this.ct).filter((function(n){return n.includes(t.st)})).map((function(n){return t.dt(n)}))},r.prototype.allKeys=function(){return Object.keys(this.ct)},r.prototype.allValues=function(){return Object.values(this.ct)},t.exports={create:function(t,n){return new r(t,n)},mockStorage:{keys:function(){},getItem:function(t){},removeItem:function(t){},setItem:function(t,n){}}}},5975:function(t,n,e){var i=e(1019),r=e(7566),o=e(4970);n.createDOMChangedObserver=function(){var t=i.getDocumentElement(),n={type:"viewTrigger",name:"DOMChanged"},e=o.create((function(){r.emit(n,!0)}));o.observe(e,t,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}},3224:function(t,n,e){var i=e(8275).isEmpty,r=e(8841),o=e(6592),a=e(192),u=e(1353).DT,c=e(7852),s=e(6761),f=e(8260),l=e(2025).get("stores/pending_events"),d=o.StorageKeys.PENDING_EVENTS,v=!1;n.persistPendingEvents=function(){try{var t=l.getEventsString();u.setItem(d,t),e(5292).setItem(d,t)}catch(t){c.warn("PendingEvents / Unable to set localStorage key, error was: ",t),r.emitInternalError(t)}},n.flushPersistPendingEvents=function(){v&&(v=!1,n.persistPendingEvents())},n.schedulePersistPendingEvents=function(){v||(v=!0,s.resolve().then(n.flushPersistPendingEvents).catch((function(t){c.warn("PendingEvents / Unable to persist pending events, error was: ",t)})))},n.getPendingEvents=function(){try{return a.parse(u.getItem(d))}catch(t){return null}},n.retryPendingEvents=function(t){Object.keys(t).forEach((function(n){var e=t[n];f.retryableRequest(e.data,n,e.retryCount)})),i(t)||c.log("Retried pending events: ",t)}},9937:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(2025),a=e(6592),u=e(7566),c=e(409);n.registerApiModule=function(t,n){Array.isArray(n)&&(n=o.evaluate(n)),c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.apiModules,name:t,plugin:n})},n.registerDependency=function(t,n){o.get(t)||o.register(t,n)},n.registerVisitorProfileProvider=function(t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.visitorProfileProviders,name:t.provides,plugin:t})},n.registerViewProvider=function(t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewProviders,name:t.provides,plugin:t})},n.registerAudienceMatcher=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.audienceMatchers,name:t,plugin:n})},n.registerViewMatcher=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewMatchers,name:t,plugin:n})},n.registerAnalyticsTracker=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.analyticsTrackers,name:t,plugin:n})},n.registerViewTagLocator=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTagLocators,name:t,plugin:n})},n.registerAudiencePlugin=function(t){t.dependencies&&Object.keys(t.dependencies).forEach((function(e){var i=t.dependencies[e];n.registerDependency(e,i)}));var e,r,a="vendor."+t.vendor;e="string"==typeof t.provider?o.get(t.provider)(t.vendor):"function"==typeof t.provider?t.provider(t.vendor):i(t.provider),n.registerVisitorProfileProvider(Object.assign(e,{provides:a})),r="string"==typeof t.matcher?o.get(t.matcher):t.matcher;var u={fieldsNeeded:[a],match:function(t,n){return r(t[a],n)}};n.registerAudienceMatcher(a,u)};var s={};n.registerWidget=function(t){Array.isArray(t)&&(t=o.evaluate(t));var n=t.widgetId,e=s[n];e&&(u.off(e.showToken),u.off(e.hideToken));var i=u.on({filter:{type:"showWidget",name:n},handler:t.showFn}),r=u.on({filter:{type:"hideWidget",name:n},handler:t.hideFn});return s[n]={showToken:i,hideToken:r},s[n]},n.hasWidget=function(t){return Object.prototype.hasOwnProperty.call(s,t)},n.registerChangeApplier=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.changeAppliers,name:t,plugin:n})},n.registerDecider=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.deciders,name:t,plugin:n})},n.registerEventImplementation=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.eventImplementations,name:t,plugin:n})},n.registerViewTrigger=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTriggers,name:t,plugin:n})}},9207:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.mapValues,a=e(2025),u=":",c="holdback",s="treatment",f="",l=e(7852),d=e(5686);function v(t){return t.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}n.formatNamesAndIdsForAnalytics=function(t,n,e,i){var u={layer:t.name||f,experiment:n.name||f,variation:e.name||f};i&&(u=o(u,v));var c,s=!t.integrationStringVersion||1===t.integrationStringVersion;if(u.experiment===f&&s)if(c=n.audienceIds,r(c)||-1===["and","or","not"].indexOf(c[0])){var l=a.get("stores/audience_data");u.experiment=function(t,n){return r(n)?"everyone_else":n.reduce((function(n,e){var i=t.get(e);return i?n+v(i.name?i.name:i.id)+",":n}),"").slice(0,-1)}(l,n.audienceIds)}else u.experiment="Exp";return{names:u,idStrings:{layer:"("+v(t.id)+")",experiment:"("+v(n.id)+")",variation:"("+v(e.id)+")"}}},n.combineAndTruncateIdAndName=function(t,n,e){var i=e-n.length;if(i<0&&(l.warn("maxLength must be at least long enough to fit the entity ID, which is length"+n.length+". Defaulting to only use entity ID as name."),t=f),t===f)return n;if(t.length>i){var r=Math.min(t.length,i);return(t=t.substring(0,r))+n}return t+" "+n},n.generateAnalyticsString=function(t,e,i,r,o,a){return t.integrationStringVersion&&2===t.integrationStringVersion?function(t,e,i,r,o,a){if(d.isSingleExperimentPolicy(t.policy)&&r)return;var s=!d.isSingleExperimentPolicy(t.policy)&&r,f=n.formatNamesAndIdsForAnalytics(t,e,i,a),l=[f.names.experiment,f.names.variation],v=[f.idStrings.experiment,f.idStrings.variation];d.isSingleExperimentPolicy(t.policy)||(l.unshift(f.names.layer),v.unshift(f.idStrings.layer));var h=v.reduce((function(t,n){return t+n.length}),0),p=l.length-1+(s?1:0),g=h+1*p;if(s&&(g+=8),g>o)throw new Error("The analytics string size is too low to send the entity IDs.");for(var m=o-g,b=l.length,_=[],y=l.length-1;y>=0;y--){var w=l[y],E=Math.min(w.length,Math.floor(m/b));m-=E,b--,_.unshift(w.substring(0,E))}var I=_.map((function(t,n){return t+v[n]}));return s&&I.push(c),I.join(u)}(t,e,i,r,o,a):function(t,e,i,r,o,a){var f=r?c:s,l=3,v=n.formatNamesAndIdsForAnalytics(t,e,i,a),h=v.names,p=v.idStrings,g=Object.values(p).reduce((function(t,n){return t+n.length}),0);if(g+l+f.length>o)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var m=o-g-l-f.length,b={};b.variation=Math.min(h.variation.length,Math.floor(m/3)),m-=b.variation,b.experiment=Math.min(h.experiment.length,Math.floor(m/2)),m-=b.experiment,b.layer=m;var _={};Object.keys(h).forEach((function(t){var n=h[t];_[t]=n.substring(0,b[t])}));var y=[];return d.isSingleExperimentPolicy(t.policy)||y.push(_.layer+p.layer),(y=y.concat([_.experiment+p.experiment,_.variation+p.variation,f])).join(u)}(t,e,i,r,o,a)}},6582:function(t){t.exports=function(t,n){t=function(t){var n=t.split("?");if(n[1]){var i=n[1].split("#"),r=i[0],o=i.slice(1).join("#"),a=r.split("&"),u=[];return a.forEach((function(t){0!==t.indexOf(e)&&u.push(t)})),n[1]="",u.length>0&&(n[1]="?"+u.join("&")),o&&(n[1]+="#"+o),n.join("")}return t}(t);var i=n.value;switch(n.match){case"exact":return(t=o(t))===o(i);case"regex":try{return Boolean(t.match(i))}catch(t){}return!1;case"simple":return(t=r(t))===(i=r(i));case"substring":return t=o(t,!0),i=o(i,!0),-1!==t.indexOf(i);default:return!1}};var n=["www."],e="optimizely_",i=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"];function r(t){return o(function(t){var n=t.indexOf("?");return-1!==n&&(t=t.substring(0,n)),-1!==(n=t.indexOf("#"))&&(t=t.substring(0,n)),t}(t))}function o(t,e){t=(t=t.replace("/?","?")).toLowerCase().replace(/[/&?]+$/,"");var r=i.slice(0);e||(r=r.concat(n));for(var o=r.length,a=0;a<o;a++){var u=r[a],c=new RegExp("^"+u);t=t.replace(c,"")}return t}},3822:function(t,n,e){var i=e(8859).getFieldValue,r=e(2973);t.exports=function(t,n){var e=i(t,n.name.split("."));return Array.isArray(e)?e.some((function(t){return r.hasMatch(n.value,n.match,t)})):r.hasMatch(n.value,n.match,e)}},131:function(t,n,e){var i=e(5192),r=e(7219),o="cdn3";n.getIP=function(){return i.makeAsyncRequest(o,u).then((function(t){return t.ip}))},n.getIPDerivedGeolocation=function(){return i.makeAsyncRequest(o,u).then((function(t){return t.location}))};var a="//cdn3.optimizely.com/js/geo4.js";function u(){r.addScriptAsync(a,void 0,"script")}},5628:function(t,n,e){var i=e(136),r=e(3019),o=e(7852),a=e(8275).isEmpty;t.exports={initialize:function(){this.W={actions:{},actionState:{}},this.on(i.DATA_LOADED,this.vt),this.on(i.ACTION_EXECUTED,this.ht),this.on(i.SET_CHANGE_APPLIER,this.bt),this.on(i.REMOVE_ACTION_STATE,this._t)},vt:function(t){var n=this;a(t.data.layers)||(t.data.layers.forEach((function(t){var e;if(t.changes){var i="layerId:"+t.id;e={id:i,layerId:t.id,changeSet:t.changes,type:"layer"},r.deepFreeze(e),n.W.actions[i]=e}(t.experiments||[]).forEach((function(i){if(i.changes){var o="experimentId:"+i.id;e={id:o,layerId:t.id,experimentId:i.id,changeSet:i.changes,type:"experiment"},r.deepFreeze(e),n.W.actions[o]=e}(i.variations||[]).forEach((function(o){(o.actions||[]).forEach((function(a){var u=a.pageId||a.viewId,c=i.id+":"+o.id+":"+u;e={id:c,layerId:t.id,experimentId:i.id,variationId:o.id,pageId:u,changeSet:a.changes,type:"variation"},r.deepFreeze(e),n.W.actions[c]=e}))}))}))})),this.emitChange())},ht:function(t){var n=t.actionId;void 0===n||this.W.actionState[n]||(this.W.actionState[n]={})},bt:function(t){var n=t.actionId,e=t.changeId;this.W.actionState[n]?this.W.actionState[n][e]=t.changeApplier:o.warn("Action Data / Attempted to set changeApplier for inactive action: ",n)},_t:function(t){delete this.W.actionState[t.actionId]},get:function(t){return r.safeReference(this.W.actions[t])},getActionState:function(t){return r.safeReference(this.W.actionState[t])},getByChangeId:function(t){return Object.values(this.W.actions).find((function(n){return n.changeSet&&n.changeSet.some((function(n){return n.id===t}))}))},getAllActionIdsByPageId:function(t){return Object.values(this.W.actions).filter((function(n){return n.pageId===t})).map((function(t){return t.id}))},getChangeApplier:function(t,n){var e=this.W.actionState[n];if(e)return e[t]},getExperimentVariationActions:function(t,n){return r.safeReference(Object.values(this.W.actions).filter((function(e){return e.experimentId===t&&e.variationId===n})))},getLayerActions:function(t){return r.safeReference(Object.values(this.W.actions).filter((function(n){return n.id==="layerId:"+t})))},getExperimentActions:function(t){return r.safeReference(Object.values(this.W.actions).filter((function(n){return n.id==="experimentId:"+t})))},getAll:function(){return r.safeReference(Object.values(this.W.actions))}}},9021:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={},this.on(i.REGISTER_ASYNC_DEFERRED,this.yt),this.on(i.RESOLVE_DEFERRED,this.wt),this.on(i.REJECT_DEFERRED,this.Et)},getRequest:function(t){return this.W[t]},getPromise:function(t){var n=this.getRequest(t);if(n)return n.promise},yt:function(t){this.W[t.source]={promise:t.promise,resolver:t.resolver,rejecter:t.rejecter}},wt:function(t){var n=this.getRequest(t.source);if(!n)throw new Error("No request registered for source: "+t.source);n.resolver(t.resolveWith)},Et:function(t){var n=this.getRequest(t.source);if(!n)throw new Error("No request registered for source: "+t.source);if(!n.rejecter)throw new Error("No rejecter registered for source: "+t.source);n.rejecter(t.rejectWith)}}},2500:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.merge,a=e(136),u=e(3019);function c(t,n){return n||(n={}),t?(t.forEach((function(t){if("string"!=typeof t){if("object"==typeof t&&null!==t&&!Array.isArray(t)){var e=t.type,i=t.name||"_";n[e]||(n[e]={}),n[e][i]=!0}Array.isArray(t)&&c(t,n)}})),n):n}t.exports={initialize:function(){this.W={audiences:{},featuresNeeded:{}},this.on(a.DATA_LOADED,this.vt)},vt:function(t){if(!r(t.data.audiences)){var n=this;t.data.audiences.forEach((function(t){u.deepFreeze(t),o(n.W.featuresNeeded,c(t.conditions)),n.W.audiences[t.id]=t})),this.emitChange()}},getAll:function(){return u.safeReference(Object.values(this.W.audiences))},getFeaturesNeeded:function(t){return u.safeReference(this.W.featuresNeeded[t]||{})},getAudiencesMap:function(){return u.safeReference(this.W.audiences)},get:function(t){return u.safeReference(this.W.audiences[t])},getAudienceName:function(t){return Object.values(this.W.audiences).find((function(n){return n.id===t})).name||"Aud "+t}}},7090:function(t,n,e){var i=e(8275).isEmpty,r=e(136),o=e(3019);t.exports={initialize:function(){this.W={},this.on(r.ADD_CHANGE,this.It),this.on(r.DATA_LOADED,this.vt)},getChange:function(t){return this.W[t]},vt:function(t){if(!i(t.data.changes)){var n=this;t.data.changes.forEach((function(t){n.It(t)}))}},It:function(t){o.deepFreeze(t),this.W[t.id]=t,this.emitChange()}}},2587:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(6592);t.exports={initialize:function(){this.W={};var t=this;Object.keys(o.Lifecycle).forEach((function(n){var e=o.Lifecycle[n];t.W[e]=[]})),this.on(r.ADD_CLEANUP_FN,this.At),this.on(r.CLEAR_CLEANUP_FN,this.Tt)},getCleanupFns:function(t){return i(this.W[t])},At:function(t){this.W[t.lifecycle].push(t.cleanupFn),this.emitChange()},Tt:function(t){var n=this.W[t.lifecycle];if(t.cleanupFn){var e=n.indexOf(t.cleanupFn);e>-1&&(n.splice(e,1),this.emitChange())}else this.W[t.lifecycle]=[],this.emitChange()}}},2814:function(t,n,e){var i=e(136),r=e(7871);t.exports={initialize:function(){this.W={name:r.NAME,version:r.VERSION},this.on(i.SET_CLIENT_NAME,this.St),this.on(i.SET_CLIENT_VERSION,this.Ot)},getClientName:function(){return this.W.name},getClientVersion:function(){return this.W.version},St:function(t){t&&(this.W.name=t),this.emitChange()},Ot:function(t){t&&(this.W.version=t),this.emitChange()}}},6108:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={currentDomain:null,defaultAgeSeconds:15552e3,autoRefresh:true},this.on(i.SET_COOKIE_DOMAIN,this.kt),this.on(i.SET_COOKIE_AGE,this.Rt),this.on(i.SET_COOKIE_AUTO_REFRESH,this.Ct)},getCurrentDomain:function(){return this.W.currentDomain},getDefaultAgeInSeconds:function(){return this.W.defaultAgeSeconds},getAutoRefresh:function(){return this.W.autoRefresh},kt:function(t){this.W.currentDomain=t,this.emitChange()},Rt:function(t){this.W.defaultAgeSeconds=t,this.emitChange()},Ct:function(t){this.W.autoRefresh=t,this.emitChange()}}},1862:function(t,n,e){var i=e(136),r=e(3019),o=e(8275).isEmpty;t.exports={initialize:function(){this.W={},this.on(i.DATA_LOADED,this.vt)},vt:function(t){if(!o(t.data.dimensions)){var n=this;t.data.dimensions.forEach((function(t){r.deepFreeze(t),n.W[t.id]=t})),this.emitChange()}},getAll:function(){return r.safeReference(Object.values(this.W))},getById:function(t){return r.safeReference(this.W[t])},getByApiName:function(t){var n=Object.values(this.W);return r.safeReference(n.find((function(n){return n.apiName===t})))}}},5798:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(136);t.exports={initialize:function(){this.W={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1,requestedEmbeddedEditor:!1},this.on(a.LOAD_DIRECTIVE,this.Nt)},getAll:function(){return r(this.W)},conflictInObservingChanges:function(){return!this.W.mutationObserverAPISupported},isDisabled:function(){return this.W.disabled},isEditor:function(){return this.W.isEditor},clientHasAlreadyInitialized:function(){return this.W.alreadyInitialized},getForceAudienceIds:function(){return this.W.forceAudienceIds},getForceVariationIds:function(){return this.W.forceVariationIds},getPreviewLayerIds:function(){return this.W.previewLayerIds},getProjectToken:function(){return this.W.projectToken},getForceTracking:function(){return this.W.forceTracking},shouldActivate:function(){return!this.W.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.W.isPreview},shouldBootstrapDataForEditor:function(){return this.W.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.W.isPreview||this.W.isLegacyPreview||!this.getProjectToken()||this.W.isEditor)},shouldLoadEmbeddedEditor:function(){return this.W.requestedEmbeddedEditor&&!this.W.isEditor},shouldBailForDesktopApp:function(){return!this.W.isEditor&&this.W.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.W.isSlave&&!this.W.isEditor&&this.W.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return this.W.mutationObserverAPISupported},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.W.shouldOptOut},shouldSendTrackingData:function(){return!this.W.trackingDisabled&&(!!this.W.forceTracking||!this.W.isPreview&&o(this.getForceVariationIds())&&o(this.getForceAudienceIds()))},isSlave:function(){return this.W.isSlave},isRunningInDesktopApp:function(){return this.W.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.W.isRunningInV2Editor},Nt:function(t){Object.assign(this.W,t),this.emitChange()}}},9034:function(t,n,e){var i=e(136),r=e(3019),o=e(8275).isEmpty;t.exports={initialize:function(){this.W={},this.on(i.DATA_LOADED,this.vt)},getAll:function(){return r.safeReference(Object.values(this.W))},getEventsMap:function(){return r.safeReference(this.W)},get:function(t){return r.safeReference(this.W[t])},getByApiName:function(t){var n=Object.values(this.W);return r.safeReference(n.find((function(n){return n.apiName===t})))},getByPageId:function(t){var n=Object.values(this.W);return r.safeReference(n.filter((function(n){return n.pageId===t})))},vt:function(t){if(!o(t.data.events)){var n=this;t.data.events.forEach((function(t){t.pageId||(t.pageId=t.viewId),r.deepFreeze(t),n.W[t.id]=t})),this.emitChange()}}}},4338:function(t,n,e){var i=e(136);function r(t){var n=[];return t&&"object"==typeof t&&null!==t?(t.type&&n.push(t.type),n.push("|"),t.type&&t.name&&n.push(t.name),n.join("")):"|"}t.exports={initialize:function(){this.W={handlers:{}},this.on(i.ADD_EMITTER_HANDLER,this.Dt),this.on(i.REMOVE_EMITTER_HANDLER,this.xt)},getHandlers:function(t,n){var e=[null,{type:t.type},{type:t.type,name:t.name}],i=[],o=this;return e.forEach((function(t){var n=r(t),e=o.W.handlers[n];e&&(i=i.concat(e))})),n&&(i=i.filter((function(t){return!t.publicOnly}))),i},Dt:function(t){var n=r(t.filter);this.W.handlers[n]||(this.W.handlers[n]=[]),this.W.handlers[n].push({handler:t.handler,token:t.token,publicOnly:!!t.publicOnly,emitErrors:!!t.emitErrors}),this.emitChange()},xt:function(t){var n=!1,e=t.token;Object.keys(this.W.handlers).forEach(function(t){var i=this.W.handlers[t],r=i.filter((function(t){return t.token!==e}));r.length!==i.length&&(n=!0,this.W.handlers[t]=r)}.bind(this)),n&&this.emitChange()}}},2940:function(t,n,e){var i=e(136),r=e(3019);t.exports={initialize:function(){this.W={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{},ga4UserId:null,trafficExclusion:null},this.on(i.DATA_LOADED,this.jt),this.on(i.ACTIVATE,this.Mt),this.on(i.RECORD_GLOBAL_DECISION,this.Pt),this.on(i.SET_DOMCONTENTLOADED,this.Lt),this.on(i.SET_GA4_USER_ID,this.Ut)},getRevision:function(){return this.W.revision},getGlobalHoldbackThreshold:function(){return this.W.holdback},getProjectId:function(){return this.W.projectId},getSnippetId:function(){return this.W.snippetId},getAccountId:function(){return this.W.accountId},getNamespace:function(){return this.W.namespace},getActivationId:function(){return this.W.activationId},getActivationTimestamp:function(){return this.W.activationTimestamp},getAnonymizeIP:function(){return this.W.anonymizeIP},getTrafficExclusion:function(){return this.W.trafficExclusion},isGlobalHoldback:function(){return!!this.W.isGlobalHoldback},getListTargetingKeys:function(){return this.W.listTargetingKeys.slice()},getDCPServiceId:function(){return this.W.dcpServiceId},getDCPKeyfieldLocators:function(){return this.W.dcpKeyfieldLocators},getRecommenderServices:function(){return this.W.recommenderServices},getProjectJS:function(){return this.W.projectJS},getPlugins:function(){return this.W.plugins},getExperimental:function(){return r.safeReference(this.W.experimental)},getGA4UserId:function(){return this.W.ga4UserId},domContentLoadedHasFired:function(){return this.W.domContentLoaded},Mt:function(t){this.W.activationId=t.activationId,this.W.activationTimestamp=t.activationTimestamp,this.W.isGlobalHoldback=null},Pt:function(t){var n=t.isGlobalHoldback;if(null!==this.W.isGlobalHoldback&&this.W.isGlobalHoldback!==n)throw new Error("Attempted to change already set global holdback!");this.W.isGlobalHoldback=n,this.emitChange()},Ut:function(t){var n=t.ga4UserId;if(!n)throw new Error('Argument "payload.ga4UserId" is missing');this.W.ga4UserId=n,this.emitChange()},jt:function(t){var n=t.data,e={};if(["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental","ga4UserId","trafficExclusion"].forEach((function(t){t in n&&(e[t]=n[t])})),0!==Object.keys(e).length){Object.assign(this.W,{listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]},e),this.emitChange()}},Lt:function(){this.W.domContentLoaded=!0,this.emitChange()}}},527:function(t,n,e){var i=e(136),r=e(3019),o=e(8275).isEmpty;t.exports={initialize:function(){this.W={},this.on(i.DATA_LOADED,this.vt)},vt:function(t){if(!o(t.data.groups)){var n=this;t.data.groups.forEach((function(t){r.deepFreeze(t),n.W[t.id]=t})),this.emitChange()}},getAll:function(){return r.safeReference(Object.values(this.W))},getGroupsMap:function(){return r.safeReference(this.W)},get:function(t){return r.safeReference(this.W[t])}}},1459:function(t,n,e){var i=e(136),r=e(9454);t.exports={initialize:function(){this.W={originalPushState:null,originalReplaceState:null},this.on(i.ENSURE_ORIGINAL_PUSHSTATE,this.Vt),this.on(i.ENSURE_ORIGINAL_REPLACESTATE,this.Bt)},getOriginalPushState:function(){return this.W.originalPushState},getOriginalReplaceState:function(){return this.W.originalReplaceState},Vt:function(){this.W.originalPushState||(this.W.originalPushState=r.getGlobal("history").pushState.bind(r.getGlobal("history")))},Bt:function(){this.W.originalReplaceState||(this.W.originalReplaceState=r.getGlobal("history").replaceState.bind(r.getGlobal("history")))}}},4453:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(136);t.exports={initialize:function(){this.W={},this.on(a.DATA_LOADED,this.vt),this.on(a.SET_INTEGRATION_SETTINGS,this.zt)},vt:function(t){if(!o(t.data.integrationSettings)){var n=this;t.data.integrationSettings.forEach((function(t){n.W[t.id]=t})),this.emitChange()}},zt:function(t){var n=this.W[t.id];n?Object.assign(n,t):this.W[t.id]=t},getAll:function(){return r(Object.values(this.W))},get:function(t){return r(this.W[t])},getReference:function(t){return this.W[t]}}},2734:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(7852),a="*";t.exports={initialize:function(){this.W={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.Ft),this.on(r.RECORD_LAYER_DECISION,this.Gt),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.qt)},getLayerState:function(t,n){if(this.W[t]){var e=this.W[t];if(Object.keys(e).length>1&&!n)throw new Error("View Id must be specified when more than one layerState for layer.");return i(n?e[n]:e[a])}},getLayerStates:function(t){var n=this,e=function(e){var o=n.W[e];Object.keys(o).forEach((function(n){var e=o[n];(void 0===t||e.namespace===t)&&r.push(i(e))}))},r=[];for(var o in this.W)e(o);return r},getLayerStatesForAnalytics:function(){var t=this,n=function(n){var i=t.W[n];Object.keys(i).forEach((function(t){var n=i[t];e.push({layerId:n.layerId,decision:n.decision,decisionEventId:n.decisionEventId})}))},e=[];for(var i in this.W)n(i);return e},Ft:function(t){t.merge||(this.W={});var n=this;t.layerStates.forEach((function(t){var e=t.layerId;t.pageId||(t.pageId=t.viewId);var i=t.pageId||a,r=n.W[e];if(void 0===r)n.W[e]={},n.W[e][i]=t;else{var o=r[i];(!o||t.decisionTimestamp>(o.decisionTimestamp||0))&&(n.W[e][i]=t)}})),this.emitChange()},Gt:function(t){var n={layerId:t.layerId,revision:t.revision,namespace:t.namespace,pageId:t.pageId,decisionTicket:t.decisionTicket,decision:t.decision,decisionActivationId:t.activationId,decisionTimestamp:t.timestamp,decisionEventId:null},e=this.W[t.layerId]||{};t.pageId?(delete e[a],e[t.pageId]=n):(e={})[a]=n,this.W[t.layerId]=e,this.emitChange()},qt:function(t){var n=t.layerId,e=t.pageId||a;this.W[n]?this.W[n][e]?(this.W[n][e].decisionEventId=t.decisionId,this.emitChange()):o.warn("Not recording decision event: Layer state not found for view",e):o.warn("Not recording decision event: Campaign not registered",n)}}},9057:function(t,n,e){var i=e(136),r=e(3019),o=e(5686),a=e(8275).isEmpty;t.exports={initialize:function(){this.W={layers:{},experiments:{},variations:{}},this.on(i.DATA_LOADED,this.vt)},vt:function(t){if(!a(t.data.layers)){var n=this;(t.data.layers||[]).forEach((function(t){(t.experiments||[]).forEach((function(e){t.pageIds||(t.pageIds=t.viewIds),e.campaignName||o.isSingleExperimentPolicy(t.policy)?o.isSingleExperimentPolicy(t.policy)&&t.groupId&&(e.groupId=t.groupId):e.campaignName=t.name,(e.variations||[]).forEach((function(t){(t.actions||[]).forEach((function(t){t.pageId||(t.pageId=t.viewId)})),n.W.variations[t.id]=t})),n.W.experiments[e.id]=e})),r.deepFreeze(t),n.W.layers[t.id]=t})),this.emitChange()}},getAll:function(){return r.safeReference(Object.values(this.W.layers))},getCampaignsMap:function(){return r.safeReference(this.W.layers)},getExperimentsMap:function(){return r.safeReference(this.W.experiments)},getVariationsMap:function(){return r.safeReference(this.W.variations)},getCount:function(){return Object.keys(this.W.layers).length},getAllByPageIds:function(t){var n=this.W.layers;return r.safeReference(Object.keys(n).reduce((function(e,i){var r=n[i];return t.some((function(t){return(r.pageIds||[]).includes(t)}))&&e.push(r),e}),[]))},get:function(t){return r.safeReference(this.W.layers[t])},getLayerByExperimentId:function(t){var n,e=this.W.layers;return Object.keys(e).some((function(i){var r=e[i];return!!(r.experiments||[]).find((function(n){return n.id===t}))&&(n=r,!0)})),r.safeReference(n)},getExperimentByVariationId:function(t){var n,e=this.W.layers;return Object.keys(e).some((function(i){return(e[i].experiments||[]).some((function(e){return(e.variations||[]).find((function(n){return n.id===t}))&&(n=e),!!n}))})),r.safeReference(n)}}},9809:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={logs:[]},this.on(i.LOG,this.Ht)},getLogs:function(){return this.W.logs},Ht:function(t){this.W.logs.push(t),this.emitChange()},Z:function(){return this.W.logs.slice()}}},8338:function(t,n,e){var i=e(136),r=e(3019);t.exports={initialize:function(){this.W={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.Yt),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.Kt)},get:function(){return r.safeReference(this.W.data)},hasTracked:function(){return this.W.hasTracked},Yt:function(t){r.deepFreeze(t),this.W.data=t,this.W.hasTracked=!1,this.emitChange()},Kt:function(){this.W.hasTracked=!0}}},9738:function(t,n,e){var i=e(136),r=e(192);t.exports={initialize:function(){this.W={},this.on(i.SET_PENDING_EVENT,this.$t),this.on(i.REMOVE_PENDING_EVENT,this.Wt),this.on(i.LOAD_PENDING_EVENTS,this.Xt)},getEvents:function(){return this.W},getEventsString:function(){return r.stringify(this.W)},$t:function(t){Object.keys(this.W).length>=1e3&&this.Jt();var n=t.id,e=t.retryCount;this.W[n]&&this.W[n].retryCount===e||(this.W[n]={id:n,timeStamp:t.timeStamp,data:t.data,retryCount:e},this.emitChange())},Wt:function(t){delete this.W[t.id],this.emitChange()},Xt:function(t){this.W=t.events,this.Jt(),this.emitChange()},Jt:function(){for(var t=Object.values(this.W).sort((function(t,n){return t.timeStamp-n.timeStamp})),n=0;n<=t.length-1e3;n++)delete this.W[t[n].id];this.emitChange()}}},6067:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={layerId:null},this.on(i.ANNOUNCE_PENDING_REDIRECT,this.Yt)},isExpectingRedirect:function(){return"string"==typeof this.W.layerId},getLayerId:function(){return this.W.layerId},Yt:function(t){this.isExpectingRedirect()||(this.W.layerId=t.layerId,this.emitChange())}}},5501:function(t,n,e){var i=e(8275).mapValues,r=e(136),o=e(6592);t.exports={initialize:function(){this.W={},this.W[o.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Qt)},Qt:function(t){void 0===this.W[o.PerformanceData.performance_marks][t.name]&&(this.W[o.PerformanceData.performance_marks][t.name]=[]),this.W[o.PerformanceData.performance_marks][t.name].push(t.data),this.emitChange()},getMarks:function(){return i(this.W[o.PerformanceData.performance_marks],(function(t){return t.map((function(t){return[t.startTime,t.duration]}))}))},getDurationsFor:function(t){var n=this;return t.reduce((function(t,e){var i=n.W[o.PerformanceData.performance_marks][e];return i&&(t[e]=Math.round(i.reduce((function(t,n){return t+n.duration}),0))),t}),{})}}},4715:function(t,n,e){var i=e(8275).mapValues,r=e(136),o=e(6592),a=e(7852);t.exports={initialize:function(){this.W=i(o.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Zt)},Zt:function(t){var n=t.type,e=t.name,i=t.plugin;if(!n||!e)throw new Error("Missing information needed to register plugins: "+n+":"+e);if(!this.W[n])throw new Error("Invalid plugin type specified: "+n);this.W[n][e]=i,a.debug("Plugin Store: Registering Plugin :",t)},getAllPlugins:function(t){if(!t)return this.W;if(this.W[t])return this.W[t];throw new Error("Invalid plugin type: "+t)},getPlugin:function(t,n){if(!n||!t)throw new Error("Missing plugin parameters");return this.getAllPlugins(t)[n]||null}}},8515:function(t,n,e){var i=e(136),r=e(8859);t.exports={initialize:function(){this.W={},this.on(i.SET_VISITOR_ATTRIBUTE_PENDING,this.tn)},getPendingAttributeValue:function(t){return t=Array.isArray(t)?t.concat("pending"):[t,"pending"],r.getFieldValue(this.W,t)},tn:function(t){r.setFieldValue(this.W,t.key,{pending:t.pending}),this.emitChange()}}},4999:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=i.merge,u=e(136);t.exports={initialize:function(){this.W={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(u.SET_RUM_DATA,this.nn),this.on(u.RECORD_API_USAGE,this.en),this.on(u.INITIALIZE_CHANGE_METRICS,this.rn),this.on(u.RECORD_ACTIVATION_TYPE_USAGE,this.an),this.on(u.RECORD_AUDIENCE_USAGE,this.un),this.on(u.RECORD_CHANGE_MACROTASK_RATE,this.cn),this.on(u.RECORD_CHANGE_OVERHEATED,this.sn),this.on(u.RECORD_CHANGE_TYPE_USAGE,this.fn),this.on(u.RECORD_DOM_OBSERVATION_OCCURENCE,this.ln),this.on(u.RECORD_INTEGRATION_USAGE,this.dn),this.on(u.RECORD_LAYER_FEATURE_USAGE,this.vn),this.on(u.RECORD_LAYER_POLICY_USAGE,this.hn),this.on(u.RECORD_VIEW_FEATURE_USAGE,this.pn),this.on(u.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,this.gn),this.on(u.RECORD_VISITOR_ID_LOCATOR_USAGE,this.mn),this.on(u.RECORD_VISITOR_ID_ERROR,this.bn),this.on(u.RECORD_STICKY_BUCKETING_FEATURE,this._n)},nn:function(t){a(this.W,t),this.emitChange()},en:function(t){this.W.apis[t.methodName]||(this.W.apis[t.methodName]=0),this.W.apis[t.methodName]++,this.emitChange()},rn:function(){void 0===this.W.data.extras.changeMacrotaskRate&&(this.W.data.extras.changeMacrotaskRate=0),void 0===this.W.data.extras.numOverheatedChanges&&(this.W.data.extras.numOverheatedChanges=0)},cn:function(t){void 0===this.W.data.extras.changeMacrotaskRate&&(this.W.data.extras.changeMacrotaskRate=0),t.changeMacrotaskRate>this.W.data.extras.changeMacrotaskRate&&(this.W.data.extras.changeMacrotaskRate=t.changeMacrotaskRate),this.emitChange()},sn:function(){void 0===this.W.data.extras.numOverheatedChanges&&(this.W.data.extras.numOverheatedChanges=0),this.W.data.extras.numOverheatedChanges++,this.emitChange()},ln:function(t){this.W.DOMObservation[t.counterName]||(this.W.DOMObservation[t.counterName]=0),this.W.DOMObservation[t.counterName]++,this.emitChange()},yn:function(t,n,e){void 0===this.W.featuresNeeded[t]&&(this.W.featuresNeeded[t]={});var i=this.W.featuresNeeded[t];n.forEach((function(t){i[t]||(i[t]={}),i[t][e]||(i[t][e]=!0)}))},dn:function(t){this.yn("integrations",t.integrations,t.layerId)},fn:function(t){this.yn("changeTypes",t.changeTypes,t.layerId)},an:function(t){this.yn("activationTypes",[t.activationType],t.entityId),this.emitChange()},pn:function(t){this.yn("viewFeatures",t.featuresUsed,t.entityId),this.emitChange()},vn:function(t){this.yn("layerFeatures",[t.feature],t.entityId),this.emitChange()},hn:function(t){this.yn("policy",[t.policy],t.layerId),this.emitChange()},un:function(t){this.yn("audiences",t.audienceTypes,t.layerId),this.emitChange()},gn:function(t){this.W.data.extras.viewsInitiallyActivatedCount=t.viewsInitiallyActivatedCount,this.emitChange()},mn:function(t){this.yn("visitorIdLocatorType",[t.visitorIdLocatorType],t.entityId),this.emitChange()},bn:function(t){this.W.data.extras.errorCustomVisitorId=t.isError,this.emitChange()},_n:function(t){this.yn("stickyBucketing",[t.feature],t.id)},getSampleRum:function(){return this.W.inRumSample},getRumId:function(){return this.W.id},getRumHost:function(){return this.W.RumHost},getApiData:function(){return this.W.apis},getDOMObservationData:function(){return this.W.DOMObservation},getRumData:function(){return r(this.W.data)},getScriptSrc:function(){return this.W.src},getFeaturesNeededData:function(){var t=this.W.featuresNeeded,n={};return Object.keys(t).forEach((function(e){var i=t[e],r=Object.keys(i);o(r)||(n[e]={}),r.forEach((function(t){n[e][t]=Object.keys(i[t]).length}))})),n}}},9292:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.wn)},wn:function(t){if(!t.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.W.natives=t.sandboxedFunctions,this.W.initialized=!0,this.emitChange()},getAll:function(){return this.W.natives},get:function(t){if(!t)throw new Error("Missing name parameter");return this.W.natives[t]||null},isInitialized:function(){return this.W.initialized}}},3799:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(8298),a=e(9899);t.exports={initialize:function(){this.W={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.En),this.on(r.LOAD_SESSION_STATE,this.In)},getState:function(){return i(this.W)},getSessionId:function(){return this.W.sessionId},In:function(t){this.W.sessionId=t.sessionId,this.W.lastSessionTimestamp=t.lastSessionTimestamp,this.emitChange()},En:function(){var t=o.now(),n=this.W.lastSessionTimestamp;(!this.W.sessionId||t-n>18e5)&&(this.W.sessionId=a.generate()),this.W.lastSessionTimestamp=t,this.emitChange()}}},8950:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(136);t.exports={initialize:function(){this.An(),this.on(a.FINALIZE_BATCH_SNAPSHOT,this.Tn),this.on(a.REGISTER_PREVIOUS_BATCH,this.Sn),this.on(a.REGISTER_TRACKER_VISITOR,this.On),this.on(a.REGISTER_TRACKER_EVENT,this.kn),this.on(a.REGISTER_TRACKER_DECISION,this.Rn),this.on(a.RESET_TRACKER_EVENTS,this.Cn),this.on(a.RESET_TRACKER_STORE,this.An),this.on(a.RESET_TRACKER_PREVIOUS_BATCHES,this.Nn),this.on(a.SET_TRACKER_POLLING,this.Dn),this.on(a.SET_TRACKER_BATCHING,this.xn),this.on(a.SET_TRACKER_USE_BEACON,this.jn),this.on(a.SET_TRACKER_SEND_EVENTS,this.Mn),this.on(a.SET_TRACKER_PERSISTABLE_STATE,this.Pn),this.on(a.SET_TRACKER_DIRTY,this.Ln),this.on(a.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.Un)},getPersistableState:function(){return this.W.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.W.data,decisions:this.W.decisions,decisionEvents:this.W.decisionEvents,previousBatches:this.W.previousBatches}:{}:null},Pn:function(t){o(this.W.data)||o(t.data)||(this.Tn(),this.W.previousBatches.push(this.getEventBatch())),this.W.data=t.data||{},this.W.decisions=t.decisions||[],this.W.decisionEvents=t.decisionEvents||[],o(this.W.previousBatches)||o(t.previousBatches)?this.W.previousBatches=t.previousBatches||[]:this.W.previousBatches=this.W.previousBatches.concat(t.previousBatches),this.emitChange()},Ln:function(t){this.W.isDirty=t,this.emitChange()},kn:function(t){var n=this.Vn();(o(n.snapshots)||!o(this.W.decisionEvents))&&this.Bn(),this.zn().events.push(t.event),this.W.decisions=t.decisions,this.Ln(!0)},Rn:function(t){this.W.decisionEvents.push(t.decisionEvent),this.W.decisions=t.decisions,this.Ln(!0)},On:function(t){o(this.W.data)?this.W.data=t.data:this.Tn(),this.W.data.visitors.push(t.visitor),this.W.decisions=t.decisions,this.W.decisionEvents=[],this.Ln(!0)},Sn:function(t){this.W.previousBatches.push(t),this.Ln(!0)},An:function(){this.W={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Cn:function(){var t=this.Vn();this.W.data.visitors=[t],t.snapshots=[],this.Ln(!0)},Nn:function(){this.W.previousBatches=[],this.Ln(!0)},Dn:function(t){this.W.polling=t,this.emitChange()},xn:function(t){this.W.shouldBatch=t,this.emitChange()},jn:function(t){this.W.shouldUseBeacon=t,this.emitChange()},Mn:function(t){this.W.canSend=t,this.emitChange()},getEventBatch:function(){return r(this.W.data)},getPreviousBatches:function(){return r(this.W.previousBatches)},Fn:function(){return this.W.decisionEvents.slice()},Gn:function(){this.W.decisionEvents=[]},qn:function(){return this.W.decisions.slice()},isPolling:function(){return this.W.polling},shouldBatch:function(){return this.W.shouldBatch},shouldUseBeacon:function(){return this.W.shouldUseBeacon},zn:function(){var t=this.Vn(),n=t&&t.snapshots;return n&&n[n.length-1]},Vn:function(){var t=this.W.data.visitors;return t&&t[t.length-1]},Bn:function(){var t=this.Fn();this.Vn().snapshots.push({decisions:this.qn(),events:t}),this.Gn(),this.Ln(!0)},Tn:function(){this.W.decisionEvents.length>0&&this.Bn()},hasEventsToSend:function(){if(!o(this.W.decisionEvents))return!0;if(!o(this.W.data)&&(this.W.data.visitors||[]).some((function(t){return t.snapshots.length>0})))return!0;return!1},hasPreviousBatchesToSend:function(){return!o(this.W.previousBatches)},canSend:function(){return this.W.canSend},Un:function(t){var n=this.Vn();n&&(n.attributes=t.attributes)}}},4184:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(136);t.exports={initialize:function(){this.W={},this.on(a.SET_UA_DATA,this.vt)},vt:function(t){o(this.W)&&(this.W=t.data)},get:function(){return r(this.W)}}},90:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(7852),a={globalTags:{},viewStates:{},shouldBatch:!1};t.exports={initialize:function(){this.W=i(a),this.on(r.REGISTER_VIEWS,this.Hn),this.on(r.SET_VIEW_ACTIVE_STATE,this.Yn),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.Kn),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.$n),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.Wn),this.on(r.SET_GLOBAL_TAGS,this.Xn),this.on(r.RESET_VIEW_STATES,this.Jn),this.on(r.SET_VIEW_BATCHING,this.xn)},getAll:function(){var t={};for(var n in this.W.viewStates)t[n]=this.getViewState(n);return t},getActiveViewIds:function(){var t=this,n=this.W.viewStates;return Object.keys(n).reduce((function(n,e){return t.isViewActive(e)&&n.push(e),n}),[])},shouldBatch:function(){return this.W.shouldBatch},getViewState:function(t){var n=i(this.W.viewStates[t]),e=this.W.globalTags;return n.metadata=Object.assign({},n.parsedMetadata,e,n.userSuppliedMetadata),n},getActiveViewTags:function(){var t=this.getActiveViewStates().map((function(t){return t.metadata})),n=[{}].concat(t);return Object.assign.apply(Object,n)},getActivationEventId:function(t){return this.W.viewStates[t]?this.W.viewStates[t].activationEventId:null},getActiveViewStates:function(){var t=this,n=this.W.viewStates;return Object.keys(n).reduce((function(n,e){return t.isViewActive(e)&&n.push(t.getViewState(e)),n}),[])},isViewActive:function(t){var n=this.W.viewStates[t];return n||o.warn("No Page registered with id",t),!!n.isActive},getGlobalTags:function(){return i(this.W.globalTags)},Jn:function(){this.W.viewStates={},this.emitChange()},Hn:function(t){var n=t.forceClean||!1,e=this;t.views.forEach((function(t){var i=t.id;e.W.viewStates[i]={id:i,isActive:"boolean"!=typeof t.isActive||n?null:t.isActive,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}})),this.emitChange()},Yn:function(t){var n=t.view.id;if(!this.W.viewStates[n])throw new Error("No view exists with id "+n);this.W.viewStates[n].isActive=t.isActive,t.isActive?this.W.viewStates[n].activatedTimestamp=t.timestamp:(this.W.viewStates[n].parsedMetadata={},this.W.viewStates[n].userSuppliedMetadata={}),this.emitChange()},Kn:function(t){var n=t.pageId;if(!this.W.viewStates[n])throw new Error("No view exists with id "+n);Object.assign(this.W.viewStates[n].parsedMetadata,t.metadata),this.emitChange()},$n:function(t){var n=t.pageId;if(!this.W.viewStates[n])throw new Error("No view exists with id "+n);Object.assign(this.W.viewStates[n].userSuppliedMetadata,t.metadata),this.emitChange()},Wn:function(t){var n=t.pageId;this.W.viewStates[n]&&(this.W.viewStates[n].activationEventId=t.eventData.eventId,this.emitChange())},Xn:function(t){Object.assign(this.W.globalTags,t),this.emitChange()},xn:function(t){this.W.shouldBatch=t,this.emitChange()}}},749:function(t,n,e){var i=e(136),r=e(3019),o=e(8275).isEmpty;t.exports={initialize:function(){this.W={views:{},apiNamesToViews:{}},this.on(i.DATA_LOADED,this.vt)},getAll:function(){return r.safeReference(Object.values(this.W.views))},getPagesMap:function(){return r.safeReference(this.W.views)},get:function(t){return r.safeReference(this.W.views[t])},getByApiName:function(t){return r.safeReference(this.W.apiNamesToViews[t])},apiNameToId:function(t){var n=this.W.apiNamesToViews[t];if(n)return n.id},idToApiName:function(t){var n=this.W.views[t];if(n)return n.apiName},getNumberOfPages:function(){return Object.keys(this.W.views).length},getAllViewsForActivationType:function(t){var n=this.W.views;return Object.keys(n).map((function(t){return n[t]})).filter((function(n){return n.activationType===t}))},vt:function(t){if(!o(t.data.views)){var n=this;t.data.views.forEach((function(t){r.deepFreeze(t),n.W.views[t.id]=t,n.W.apiNamesToViews[t.apiName]=t})),this.emitChange()}}}},2857:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(8859);t.exports={initialize:function(){this.W={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.Qn),this.on(r.SET_VISITOR_ATTRIBUTES,this.Zn),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.te)},getVisitorProfile:function(){return this.W.profile},getVisitorProfileMetadata:function(){return this.W.metadata},getAttribute:function(t){var n=this.W.profile;return i(o.getFieldValue(n,t))},getAttributeMetadata:function(t){return i(this.W.metadata[t])},getVisitorIdFromAPI:function(){return this.W.visitorId},te:function(t){this.W.profile=t.profile,this.W.metadata=t.metadata,this.emitChange()},Zn:function(t){var n=this;t.attributes.forEach((function(t){var e=t.key;o.setFieldValue(n.W.profile,e,t.value),t.metadata&&Object.keys(t.metadata).forEach((function(i){var r=t.metadata[i];o.setFieldValue(n.W.metadata,e.concat(i),r)}))})),this.emitChange()},Qn:function(t){this.W.visitorId=t,this.emitChange()}}},6658:function(t,n,e){var i=e(136),r=e(8275).isEmpty;t.exports={initialize:function(){this.W={},this.on(i.DATA_LOADED,this.ne)},getCustomBehavioralAttributes:function(){var t=this.W;return Object.keys(t).reduce((function(n,e){var i=t[e];return i.rule_json&&n.push(i),n}),[])},getVisitorAttribute:function(t){var n=Object.values(this.W);if(t.datasourceId&&(n=n.filter((function(n){return n.dcp_datasource_id===String(t.datasourceId)}))),t.attributeName&&t.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(t.attributeId){var e=this.W[t.attributeId];if(!e)throw new Error("Unrecognized attribute ID: "+t.attributeId);return e}if(t.attributeName){var i=n.filter((function(n){return n.name===t.attributeName}));if(!i.length)throw new Error("Unrecognized attribute name: "+t.attributeName);if(i.length>1)throw new Error("Too many attributes with name: "+t.attributeName);return i[0]}throw new Error("Must specify attribute name or attribute ID")},ne:function(t){if(!r(t.data.visitorAttributes)){var n=this;t.data.visitorAttributes.forEach((function(t){n.W[t.id]=t})),this.emitChange()}}}},7016:function(t,n,e){Object.defineProperty(n,"u",{value:!0});var i=e(8275),r=i.cloneDeep,o=i.isEqual,a=e(136),u=e(192);t.exports={initialize:function(){this.W={variationIdMap:{},preferredLayerMap:{},contextualMabMap:{},odpSegments:{}},this.on(a.UPDATE_VARIATION_ID_MAP,this.ee),this.on(a.MERGE_VARIATION_ID_MAP,this.re),this.on(a.UPDATE_PREFERRED_LAYER_MAP,this.oe),this.on(a.MERGE_PREFERRED_LAYER_MAP,this.ae),this.on(a.UPDATE_CONTEXTUAL_MAB_MAP,this.ue),this.on(a.MERGE_CONTEXTUAL_MAB_MAP,this.ce),this.on(a.SET_ODP_SEGMENTS,this.se)},se:function(t){this.W.odpSegments=t,this.emitChange()},getOdpSegments:function(){return this.W.odpSegments},getContextualMabMap:function(){return r(this.W.contextualMabMap)},getContextualMabMapString:function(){return u.stringify(this.W.contextualMabMap)},ue:function(t){var n=this.W.contextualMabMap[t.layerId]||{};o(n[t.experimentId],t.variationData)||(n[t.experimentId]=t.variationData,this.W.contextualMabMap[t.layerId]=n,this.emitChange())},ce:function(t){var n=this.W.contextualMabMap;Object.keys(t.contextualMabMap).forEach((function(e){var i=t.contextualMabMap[e];n[e]||(n[e]={}),Object.keys(i).forEach((function(t){var r=i[t];n[e][t]||(n[e][t]=r)}))})),this.W.contextualMabMap=n,this.emitChange()},getVariationIdMap:function(){return r(this.W.variationIdMap)},getVariationIdMapString:function(){return u.stringify(this.W.variationIdMap)},ee:function(t){var n=this.W.variationIdMap[t.layerId]||{};n[t.experimentId]!==t.variationId&&(n[t.experimentId]=t.variationId,this.W.variationIdMap[t.layerId]=n,this.emitChange())},re:function(t){var n=this.getVariationIdMap(),e=t.variationIdMap;Object.keys(n||{}).forEach((function(t){var i=(n||{})[t];e[t]?Object.assign(e[t],i):e[t]=i})),this.W.variationIdMap=e,this.emitChange()},getPreferredLayerMap:function(){return r(this.W.preferredLayerMap)},getPreferredLayerMapString:function(){return u.stringify(this.W.preferredLayerMap)},getPreferredLayerId:function(t){return this.W.preferredLayerMap[t]},oe:function(t){this.W.preferredLayerMap[t.groupId]!==t.layerId&&(this.W.preferredLayerMap[t.groupId]=t.layerId,this.emitChange())},ae:function(t){var n=this.getPreferredLayerMap(),e=t.preferredLayerMap;Object.assign(e,n),this.W.preferredLayerMap=e,this.emitChange()}}},2725:function(t,n,e){var i=e(136);e(8487).J;t.exports={initialize:function(){this.W={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.vt),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.fe),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.le)},getEvents:function(){return this.W.events},getForeignEvents:function(){return this.W.foreignEvents},getForeignEventQueues:function(){return this.W.foreignEventQueues},vt:function(t){this.W.events=t,this.emitChange()},fe:function(t){this.W.foreignEvents[t.key]=t.value},le:function(t){this.W.foreignEventQueues[t.key]=t.value}}},977:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.de)},getBaseMap:function(){return this.W.baseMap},getEventQueue:function(){return this.W.eventQueue},getLastEvent:function(){return this.W.lastEvent},getCleared:function(){return this.W.cleared},getInitialized:function(){return this.W.initialized},de:function(t){this.W[t.key]=t.value}}},241:function(t,n,e){var i=e(8275).isEmpty,r=e(136);t.exports={initialize:function(){this.W={randomId:null,visitorIdLocator:null},this.on(r.SET_VISITOR_ID,this.vt),this.on(r.DATA_LOADED,this.ve)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.W.randomId},getVisitorIdLocator:function(){return this.W.visitorIdLocator},vt:function(t){Object.assign(this.W,t),this.emitChange()},ve:function(t){i(t.data.visitorIdLocator)||(this.W.visitorIdLocator=t.data.visitorIdLocator,this.emitChange())}}},227:function(t,n,e){var i=e(8275).cloneDeep,r=e(7852),o=e(136);t.exports={initialize:function(){this.W={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(o.XDOMAIN_SET_DEFAULT_FRAME,this.he),this.on(o.XDOMAIN_ADD_FRAME,this.pe),this.on(o.XDOMAIN_SET_MESSAGE,this.ge),this.on(o.XDOMAIN_ADD_SUBSCRIBER,this.me),this.on(o.XDOMAIN_SET_CANONICAL_ORIGINS,this.be),this.on(o.XDOMAIN_SET_DISABLED,this._e)},getMessages:function(){return i(this.W.messages)},getOffset:function(){return 0===this.W.messages.length?0:this.W.messages[0].data.id},getNextMessageId:function(){return this.W.messages.length+this.getOffset()},getMessageById:function(t){return this.W.messages[t-this.getOffset()]},getSubscribers:function(){return this.W.subscribers},getFrames:function(){return this.W.frames},getNextFrameId:function(){return this.W.frames.length},getDefaultFrame:function(){return this.W.defaultFrame},getCanonicalOrigins:function(){return i(this.W.canonicalOrigins)},isDisabled:function(){return this.W.disabled},he:function(t){this.W.defaultFrame=t},pe:function(t){this.W.frames.push(t)},ge:function(t){for(this.W.messages[t.messageId-this.getOffset()]=t.message;this.W.messages.length>1e3;){var n=this.W.messages.shift();r.debug("XDomainStorage: Cleared old message: "+n.data.id)}},me:function(t){this.W.subscribers.push(t.subscriber)},be:function(t){this.W.canonicalOrigins=t.canonicalOrigins},_e:function(t){this.W.disabled=t.disabled}}},9262:function(t,n){n.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},n.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},n.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}},9326:function(t,n,e){var i=e(8130).v;n.Error=i("TagError")},8612:function(t,n,e){var i=e(6592).PluginTypes,r=e(2025).get("stores/plugins");n.getTagValue=function(t){var e=r.getPlugin(i.viewTagLocators,t.locatorType);if(!e)throw new n.Error("No locator registered for tag locatorType: "+t.locatorType);return e(t)},n.enums=e(9262),n.Error=e(9326).Error},5192:function(t,n,e){var i=e(136),r=e(409),o=e(6761).Promise,a=e(2025).get("stores/async_request");n.makeAsyncRequest=function(t,n){var e,u,c=a.getPromise(t);if(c)return c;var s=new o((function(t,n){e=t,u=n}));return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:t,promise:s,resolver:e,rejecter:u}),n&&n(),s},n.resolveRequest=function(t,n){r.dispatch(i.RESOLVE_DEFERRED,{source:t,resolveWith:n})},n.rejectRequest=function(t,n){r.dispatch(i.REJECT_DEFERRED,{source:t,rejectWith:n})}},6022:function(t,n,e){var i=e(4618),r=e(9454);n.getLanguage=function(){return r.getNavigatorLanguage()},n.getQueryParams=i.getQueryParams,n.getQueryParamValue=i.getQueryParamValue,n.getUrl=function(){return r.getHref()}},6278:function(t,n,e){var i=e(8130).v,r=e(8298),o=e(1019),a=e(9454),u=e(136),c=e(2025),s=e(409),f=c.get("stores/cookie_options"),l=n.SetError=i("CookieSetError"),d=n.MismatchError=i("CookieMismatchError"),v=["co","com","net","org","edu","gov","mil","int","ac","com","net","org"];n.getAll=function(t){var e,i,r,a,u;void 0===t&&(t=!0),e=o.getCookieString().split(/\s*;\s*/);var c={};for(r=0;r<e.length;r++)if((a=(i=e[r]).indexOf("="))>0&&void 0===c[u=n.safeDecodeURIComponent(i.substring(0,a))]){var s=i.substring(a+1);t&&(s=n.safeDecodeURIComponent(s)),c[u]=s}return c},n.safeDecodeURIComponent=function(t){try{return decodeURIComponent(t)}catch(n){return t}},n.get=function(t,e){return n.getAll(e)[t]},n.set=function(t,e,i,c){!1!==c&&(c=!0);var g=[];if(void 0===(i=Object.assign({encodeValue:!0},i)).domain){var m=f.getCurrentDomain();m||(m=function(t,e){!1!==e&&(e=!0);for(var i,r,o=t.hostname.split("."),a=[],c=null,f=o.length-1;f>=0;f--)if(a.unshift(o[f]),i=a.join("."),!(o.length>1&&(1===a.length||2===a.length&&v.includes(a[0]))||h.includes(i))){r={domain:e?"."+i:i};try{n.set(p,Math.random().toString(),r),n.remove(p,r),c=r.domain;break}catch(t){}}return s.dispatch(u.SET_COOKIE_DOMAIN,c),c}(a.getLocation(),!0)),i.domain=m}if(i.domain&&g.push("domain="+i.domain),void 0===i.path&&(i.path="/"),i.path&&g.push("path="+i.path),void 0===i.expires){var b=void 0===i.maxAge?f.getDefaultAgeInSeconds():i.maxAge;i.expires=new Date(r.now()+1e3*b)}if(void 0!==i.expires&&g.push("expires="+i.expires.toUTCString()),i.secure&&g.push("secure"),o.setCookie(t+"="+(i.encodeValue?encodeURIComponent(e):e)+";"+g.join(";")),c){var _=i.encodeValue,y=n.get(t,_);if(y!==e){if(!y)throw new l('Failed to set cookie "'+t+'"');throw new d('Expected "'+e+'" for "'+t+'", got "'+y+'"')}}},n.remove=function(t,e){for(var i=a.getLocation().hostname.split("."),r=1===i.length?0:1;i.length>r&&(2!==i.length||!v.includes(i[0]));)n.set(t,null,Object.assign({},e,{domain:"."+i.join("."),expires:new Date(0)}),!1),i.shift()};var h=["optimizely.test"],p="optimizelyDomainTestCookie"},8130:function(t,n,e){var i=e(3958),r=i("InternalError");n.C=r,n.v=function(t){return i(t,r)}},8339:function(t,n,e){var i=e(6761).Promise;t.exports=function(){var t,n,e=new i((function(e,i){t=e,n=i}));return e.resolve=function(){return t.apply(null,Array.from(arguments)),e},e.reject=function(){return n.apply(null,Array.from(arguments)),e},e}},587:function(t,n,e){Object.defineProperty(n,"u",{value:!0}),n.getEditorConfig=d,n.getEditorScriptUrl=v,n.persistEditorParams=p,n.loadEmbeddedEditor=function(t){"function"!=typeof(null==window.optimizely?void 0:window.optimizely.push)&&(u.warn("EditorLoader / window.optimizely does not have a push method; it may have been overridden by page code. Resetting to ensure embedded editor compatibility."),window.optimizely=[]);p(),i.registerFunction("getAccountId",(function(){return o.get("stores/global").getAccountId()})),a.setOptOut(!1);var n=d(t),e=v(n);n.pullRequestId&&!isNaN(Number(n.pullRequestId))&&u.debug("Main / Loading editor pull request ID: "+n.pullRequestId),c.addScriptAsync(e)};var i=e(9445),r=e(6278),o=e(2025),a=e(4214),u=e(7852),c=e(7219),s=e(9454),f=["optimizely_project_id","optimizely_experiment_id","optimizely_section_id","optimizely_variation_id","optimizely_embed_editor","optimizely_use_shadow_dom","optimizely_page_id","optimizely_device_mode","optimizely_events_mode"],l=["optimizely_oauth_token","optimizely_token_expires_in"];function d(t){var n,e={true:"http://localhost:9888/main.js",http:"http://localhost:9888/main.js",https:"https://localhost:9888/main.js"},i=null==(n=r.get("useLocalBundle"))?void 0:n.toLowerCase(),o=r.get("optimizelyVePr");return{useLocalBundle:!!e[i],pullRequestId:o,mfeEntrypoint:e[i]?e[i]:t}}function v(t){var n=t.pullRequestId;return n&&!isNaN(Number(n))?"https://develrc-app.optimizely.com/dist/visual-editor/pull-request/"+n+"/main.js":t.mfeEntrypoint}function h(t){var n={};if(!t)return n;for(var e=t.split("&"),i=0;i<e.length;i++){var r=e[i].indexOf("=");if(-1!==r){var o=e[i].substring(0,r),a=e[i].substring(r+1);try{n[o]=decodeURIComponent(a)}catch(t){n[o]=a}}}return n}function p(){var t=s.getGlobal("sessionStorage");if(t){var n=s.getHref()||"",e=n.indexOf("?"),i=n.indexOf("#"),r=-1!==e?n.substring(e+1,-1!==i?i:void 0):"",o=-1!==i?n.substring(i+1):"";o=o.replace(/^#?\/*/,"");var a=h(r),c=h(o);f.forEach((function(n){a[n]&&t.setItem(n,a[n])})),l.forEach((function(n){c[n]&&t.setItem(n,c[n])})),u.log("EditorLoader / Persisted visual editor params to sessionStorage")}}},3019:function(t,n,e){var i=e(8275).cloneDeep;n.deepFreeze=function(t){},n.safeReference=function(t){return i(t)}},8275:function(t,n){function e(t,n){return null!=n&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](t):t instanceof n}Object.defineProperty(n,"u",{value:!0}),n.cloneDeep=function t(n,r,o){if(void 0===r&&(r=0),null==n)return n;if("object"!==(void 0===n?"undefined":i(n)))return n;if(r>100)throw new Error("cloneDeep: Maximum recursion depth exceeded");if(o||(o=new Map),o.has(n))return o.get(n);var a=Date,u=RegExp,c=Array;if(e(n,a)){return new a(n.getTime())}if(e(n,u)){var s=n,f="";return s.global&&(f+="g"),s.ignoreCase&&(f+="i"),s.multiline&&(f+="m"),s.unicode&&(f+="u"),s.sticky&&(f+="y"),new u(s.source,f)}if(c.isArray(n)){var l=n,d=[];o.set(n,d);for(var v=l.length,h=0;h<v;h++)d[h]=t(l[h],r+1,o);return d}var p=Object.getPrototypeOf(n),g=p&&p!==Object.prototype?Object.create(p):{};for(var m in o.set(n,g),n)Object.prototype.hasOwnProperty.call(n,m)&&(g[m]=t(n[m],r+1,o));return g},n.isEmpty=function(t){return null==t||("string"==typeof t||Array.isArray(t)?0===t.length:"object"==typeof t&&0===Object.keys(t).length)},n.isEqual=function t(n,r){if(n===r)return!0;if(null==n||null==r)return n===r;if((void 0===n?"undefined":i(n))!==(void 0===r?"undefined":i(r)))return!1;if("object"!=typeof n)return n===r;if(Array.isArray(n)&&Array.isArray(r)){if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!t(n[o],r[o]))return!1;return!0}if(Array.isArray(n)!==Array.isArray(r))return!1;if(e(n,Date)&&e(r,Date))return n.getTime()===r.getTime();if(e(n,RegExp)&&e(r,RegExp))return n.source===r.source&&n.global===r.global&&n.ignoreCase===r.ignoreCase&&n.multiline===r.multiline&&n.sticky===r.sticky&&n.unicode===r.unicode;var a=Object.keys(n),u=Object.keys(r);if(a.length!==u.length)return!1;for(var c=0;c<a.length;c++){var s=a[c];if(!Object.prototype.hasOwnProperty.call(r,s)||!t(n[s],r[s]))return!1}return!0},n.isObject=r,n.pick=function(t,n){var e={};if(null==t)return e;for(var i=0;i<n.length;i++){var r=n[i];Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},n.omit=function(t,n){var e={};if(null==t)return e;var i=new Set(n);for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&!i.has(r)&&(e[r]=t[r]);return e},n.merge=function t(n){for(var e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];if(!r(n))throw new TypeError("Target must be an object");for(var a=0;a<i.length;a++){var u=i[a];if(r(u))for(var c in u)if(Object.prototype.hasOwnProperty.call(u,c)){var s=u[c],f=n[c];if(void 0===s)continue;r(s)&&r(f)?n[c]=t({},f,s):n[c]=s}}return n},n.mapValues=function(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=n(t[i],i,t));return e},n.flatten=function(t){for(var n=[],e=0;e<t.length;e++){var i=t[e];if(Array.isArray(i))for(var r=0;r<i.length;r++)n.push(i[r]);else n.push(i)}return n},n.flattenDeep=function t(n){var e=[];if(null==n)return e;for(var i=0;i<n.length;i++){var r=n[i];if(Array.isArray(r))for(var o=t(r),a=0;a<o.length;a++)e.push(o[a]);else e.push(r)}return e},n.pickBy=o,n.omitBy=function(t,n){var e="function"==typeof n;return o(t,(function(t,i){return!(e?n(t,i):r(t)&&Object.keys(n).every((function(e){return t[e]===n[e]})))}))};var i=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function r(t){var n=void 0===t?"undefined":i(t);return null!=t&&("object"===n||"function"===n)}function o(t,n){var e=function(e){if(!Object.prototype.hasOwnProperty.call(t,e))return"continue";var a=t[e];(i?n(a,e):r(a)&&Object.keys(n).every((function(t){return a[t]===n[t]})))&&(o[e]=a)},i="function"==typeof n,o={};for(var a in t)e(a);return o}},8859:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.isObject;n.getFieldValue=function(t,n){Array.isArray(n)||(n=[n]);for(var e=t,i=0;i<n.length;i++){var r=n[i];if(!o(e)||!e.hasOwnProperty(r))return;e=e[r]}return e},n.setFieldValue=function(t,n,e){if(!Array.isArray(n)||r(n))throw new Error("Attempted to set an invalid key path: "+n);for(var i=t,a=0;a<n.length-1;a++){var u=n[a];o(i[u])||(i[u]={}),i=i[u]}i[n[n.length-1]]=e}},9295:function(t,n,e){var i=e(8275).isEmpty;n.create=function(t){if(i(t))return null;var n=document.createElement("a");return n.href=t,n}},7852:function(t,n,e){var i=e(136),r=e(8298),o=e(6592),a=e(409),u=e(192);function c(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=r.now()}c.prototype.ye=function(){return null!==this.logLevel},c.prototype.setLogLevel=function(t){var n=this.we(t);null===n?console.error("Unknown log level: "+t):this.logLevel!==n&&(this.log("Setting log level to "+n),this.logLevel=n,this.flush())},c.prototype.setLogMatcher=function(t){this.logMatcher="string"==typeof t?t:"",this.logGroup=0},c.prototype.shouldLog=function(t){return this.ye()&&this.logLevel>=t},c.prototype.matchesLogMessage=function(t,n){var e=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===t?this.logGroup++:"GROUPEND"===t&&this.logGroup--,!0;var i=n.some((function(t){if("string"!=typeof t)try{t=u.stringify(t)}catch(t){}return"string"==typeof t&&t.includes(e)}));return i&&"GROUPSTART"===t&&this.logGroup++,i},c.prototype.storeLog=function(t,n){var e={logLevel:t,logMessage:n};a.dispatch(i.LOG,e)},c.prototype.flush=function(){var t=e(2025).get("stores/log");this.logGroup=0;var n=t.getLogs(),i=this;n.forEach((function(t){i.Ee(t.logLevel,t.logMessage,!0)}))},c.prototype.Ee=function(t,n,e){var i,r=t;if(console)switch(t){case"GROUPSTART":i=console.groupCollapsed,r=o.LogLevel.DEBUG;break;case"GROUPEND":i=console.groupEnd,r=o.LogLevel.DEBUG;break;case o.LogLevel.ERROR:i=console.error;break;case o.LogLevel.WARN:i=console.warn;break;case o.LogLevel.DEBUG:i=console.debug;break;default:i=console.log}try{e||this.ye()&&!this.shouldLog(r)||(Array.isArray(n)&&"string"==typeof n[0]&&(n=this.Ie(n)),this.storeLog(t,n)),i&&this.shouldLog(r)&&this.matchesLogMessage(t,n)&&i.apply(console,n)}catch(t){console&&(console.error?console.error(t):console.log(t))}},c.prototype.debug=function(){this.Ee(o.LogLevel.DEBUG,[].slice.call(arguments))},c.prototype.log=function(){this.Ee(o.LogLevel.INFO,[].slice.call(arguments))},c.prototype.logAlways=function(){var t=this.Ie([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,t),this.storeLog(o.LogLevel.INFO,t)},c.prototype.warn=function(){this.Ee(o.LogLevel.WARN,[].slice.call(arguments))},c.prototype.error=function(t){var n=[].slice.call(arguments);1===n.length&&t.stack?(this.Ee(o.LogLevel.ERROR,[this.Ae(),t]),this.Ee(o.LogLevel.INFO,[t.stack])):this.Ee(o.LogLevel.ERROR,n)},c.prototype.groupCollapsed=function(){this.Ee("GROUPSTART",[].slice.call(arguments))},c.prototype.groupEnd=function(){this.Ee("GROUPEND",[].slice.call(arguments))},c.prototype.Ie=function(t){var n=this.Ae().toString();return n.length<6&&(n=("     "+n).slice(-6)),[n+"| Optly / "+t[0]].concat(t.slice(1))},c.prototype.Ae=function(){return this.timebase?r.now()-this.timebase:0},c.prototype.we=function(t){return t&&("TRUE"===(t=t.toUpperCase())&&(t="INFO"),"FALSE"===t&&(t="OFF"),"ALL"===t&&(t="DEBUG"),void 0!==o.LogLevel[t])?o.LogLevel[t]:null},t.exports=new c},6907:function(t,n,e){var i;i=e(9891),t.exports=i},5686:function(t,n){n.isSingleExperimentPolicy=function(t){return"single_experiment"===t||"multivariate"===t}},5385:function(t,n,e){var i=e(6761).Promise,r=e(9454);n.pollFor=function(t,n,e){var o,a;return"function"==typeof e?a=e:(o=e||100,a=function(){return--o<-1}),n=n||50,new i((function(e,i){!function o(){var u;if(!a()){try{var c=t();if(c)return e(c)}catch(t){u=t}return r.setTimeout(o,n)}i(u||new Error("Poll timed out"))}()}))}},5467:function(t,n,e){var i=e(6761).Promise;n.firstToResolve=function(t){return new i((function(n){t.forEach((function(t){i.resolve(t).then(n,(function(){}))}))}))}},4618:function(t,n,e){var i=e(9454);n.getQueryParams=function(){var t=i.getLocationSearch()||"";if(0===t.indexOf("?")&&(t=t.substring(1)),0===t.length)return[];for(var n=t.split("&"),e=[],r=0;r<n.length;r++){var o="",a="",u=n[r].split("=");u.length>0&&(o=u[0]),u.length>1&&(a=u[1]),e.push([o,a])}return e},n.getQueryParamValue=function(t){for(var e=n.getQueryParams(),i=0;i<e.length;i++)if(e[i][0]===t)return e[i][1]},n.queryStringFromMap=function(t){return Object.keys(t).map((function(n){return n+"="+t[n]})).join("&")}},1760:function(t,n,e){var i=e(7852),r=e(9454);function o(t){this.windowLength=t,this.count=0,this.listeners={},this.isIncrementingTick=!1}o.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),r.setTimeout(function(){this.isIncrementingTick=!1}.bind(this),0))},o.prototype.increment=function(){this.count+=1,(this.listeners[String(this.count)]||[]).forEach((function(t){t()})),r.setTimeout(this.decrement.bind(this),this.windowLength)},o.prototype.decrement=function(){this.count-=1,this.count<0&&(i.warn("Decremented down to negative count: ",this.count),this.count=0)},o.prototype.addListener=function(t,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(n)},t.exports=o},3272:function(t,n,e){var i=e(8275).pick,r=e(2025).get("stores/observed_redirect");n.getReferrer=function(){var t=r.get();return t?t.referrer:null},n.getExperimentAndVariation=function(){var t=r.get();return t&&"string"==typeof t.variationId?i(t,["experimentId","variationId"]):null}},9670:function(t,n,e){var i=e(8275).mapValues,r=e(136),o=e(8298),a=e(2025),u=e(1019),c=e(6592),s=e(409),f=e(7852),l=a.get("stores/sandbox"),d=e(9454);n.shouldSandbox=function(){return!1},n.get=function(t){if(!t)throw new Error("Name is required");if(n.shouldSandbox()){l.isInitialized()||v();var e=l.get(t);if(e)return e}return d.getGlobal(t)};var v=function(){try{var t="optimizely_"+o.now(),n=u.createElement("iframe");n.name=t,n.style.display="none",u.appendToHead(n);var e=n.contentWindow,a=n.contentDocument;a.write("<scr"),a.write("ipt></scr"),a.write("ipt>"),a.close();var l=i(c.SandboxedFunctions,(function(t){return e[t]}));s.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:l})}catch(t){f.warn("Unable to create a sandbox: ",t)}}},7219:function(t,n,e){var i=e(1019),r=e(7852),o=e(8260);n.addScriptAsync=function(t,n,e){var o,a=i.querySelector("head"),u=e?i.querySelector(e):null,c=i.createElement("script");(c.type="text/javascript",c.async=!0,c.src=t,n&&(c.onload=n),u)?(r.debug("Target element found for selector: "+e+", adding script before it."),null==(o=u.parentNode)||o.insertBefore(c,u)):(r.debug("Target element not found for selector: "+e+", adding script to HEAD instead."),a.insertBefore(c,a.firstChild));r.debug("Asynchronously requesting "+t)},n.addScriptSync=function(t,e){try{var a="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(-1!==t.indexOf('"'))return void r.error("Blocked attempt to load unsafe script: "+t);i.write("<scr"),i.write('ipt id="'+a+'" src="'+t+'"></scr'),i.write("ipt>");var u=i.querySelector("#"+a);if(!u)throw new Error("DocumentEnv.write failed to append script");u.onload=e,u.onerror=function(i){r.warn("Failed to load script ("+t+") synchronously:",i),n.addScriptAsync(t,e)}}catch(i){r.debug("DocumentEnv.write failed for "+t+": "+i.message);return o.request({url:t,async:!1,contentType:"text/plain",success:function(t){new Function(t.responseText)(),e&&e()}}).catch((function(i){r.error("Failed to load "+t+" via synchronous XHR: "+i.message),n.addScriptAsync(t,e)}))}}},249:function(t,n,e){var i=e(6761).Promise,r=e(9454);n.makeTimeoutPromise=function(t){return new i((function(n,e){r.setTimeout((function(){e(new Error("Timed out after "+t+" ms"))}),t)}))}},3498:function(t,n,e){var i=e(8275).isEmpty,r=e(4861),o=e(9454),a=e(136),u=e(2025),c=e(409),s=u.get("stores/ua_data");n.get=function(){var t=s.get();return i(t)&&(t=r.parseUA(o.getUserAgent()),c.dispatch(a.SET_UA_DATA,{data:t})),t}},327:function(t,n){n.guessDomain=function(t,n){if(!t)return"";try{return n?t.match(/:\/\/(.[^/]+)/)[1]:t.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]}catch(t){return""}}},9899:function(t,n){n.generate=function(){var t=new Uint8Array(16);crypto.getRandomValues(t),t[6]=15&t[6]|64,t[8]=63&t[8]|128;var n=Array.prototype.map.call(t,(function(t){return("0"+t.toString(16)).slice(-2)})).join("");return n.slice(0,8)+"-"+n.slice(8,12)+"-"+n.slice(12,16)+"-"+n.slice(16,20)+"-"+n.slice(20)}},5292:function(t,n,e){var i=e(6761).Promise,r=e(136),o=e(2025),a=e(409),u=e(8841),c=e(8130).v,s=e(8298),f=e(1019),l=e(192),d=e(5385),v=e(4285),h=e(9454),p=e(6592).VisitorStorageKeys,g=e(7852),m=o.get("stores/xdomain"),b=n.Error=c("XDomainStorageError");function _(t){var n;if(m.getFrames().find((function(n){return n.origin===t.origin}))){try{n=l.parse(t.data)}catch(n){return void g.debug("XDomain","Ignoring malformed message event:",t)}if("ERROR"===n.type)a.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0}),u.emitInternalError(new b("Xdomain Error: "+n.response));else if("SYNC"===n.type)m.getSubscribers().forEach((function(t){t(n.response.key,n.response.value)}));else{var e=m.getMessageById(n.id);if(!e){if(g.warn("XDomain","No stored message found for ID",n.id),"number"!=typeof n.id)u.emitInternalError(new b("Message ID is not a number: "+n.id));else{var i=m.getNextMessageId();n.id>=i?u.emitInternalError(new b("Message ID is greater than expected maximum ID ("+n.id+">"+i+")")):n.id<0?u.emitInternalError(new b("Message ID is < 0: "+n.id)):u.emitInternalError(new b("No stored message found for message ID: "+n.id))}return}if(!e.resolver)return void g.warn("XDomain","Message already resolved, ignoring:",n.id);e.resolver(n.response),a.dispatch(r.XDOMAIN_SET_MESSAGE,{messageId:n.id,message:{data:{id:n.id,type:e.data.type,key:e.data.key},startTime:e.startTime,endTime:s.now()}})}}else g.debug("XDomain","No frame found for origin: "+t.origin)}function y(t){return!(["GET","PUT"].includes(t.type)&&!t.key.includes(p.SESSION_STATE))}function w(t,n){return n||(n=m.getDefaultFrame()),new i((function(e){var i={data:Object.assign({},t,{id:m.getNextMessageId(),use_cookie:y(t)}),resolver:e};n?m.isDisabled()||E(i,n):a.dispatch(r.XDOMAIN_SET_MESSAGE,{messageId:i.data.id,message:i})}))}function E(t,n){var e=t.data;a.dispatch(r.XDOMAIN_SET_MESSAGE,{messageId:t.data.id,message:Object.assign({},t,{startTime:s.now()})}),n.target.postMessage(l.stringify(e),n.origin)}n.setItem=function(t,n,e){return w({type:"PUT",key:t,value:n},e)},n.getItem=function(t,n){return w({type:"GET",key:t},n)},n.fetchAll=function(t){return w({type:"GETALL"},t)},n.deleteData=function(t,n){return w({type:"DELETE",visitorId:t},n)},n.subscribe=function(t){a.dispatch(r.XDOMAIN_ADD_SUBSCRIBER,{subscriber:t})},n.loadIframe=function(t,n){return new i((function(e){var i=f.createElement("iframe");i.src=t+n,i.hidden=!0,i.setAttribute("tabindex","-1"),i.setAttribute("title","Optimizely Internal Frame"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var o={id:m.getNextFrameId(),target:i.contentWindow,origin:t,path:n};a.dispatch(r.XDOMAIN_ADD_FRAME,o),e(o)},f.appendTo(f.querySelector("body"),i)}))},n.getXDomainUserId=function(t,n){var e,i={},r=Object.keys(t);return n.forEach((function(t){i[t]=[],r.forEach((function(n){var r=v.getUserIdFromKey(n,t);!e&&r&&(e=r),r&&!i[t].includes(r)&&i[t].push(r)}))})),g.debug("XDomain: Found userIds:",i),e},n.load=function(t,e){h.addEventListener("message",_);return d.pollFor((function(){return!!f.querySelector("body")})).then((function(){return n.loadIframe(t,e)})).then((function(t){a.dispatch(r.XDOMAIN_SET_DEFAULT_FRAME,t),m.isDisabled()||m.getMessages().forEach((function(n){n.startTime||E(n,t)}))}))}},8260:function(t,n,e){var i=e(8275).isObject,r=e(136),o=e(8298),a=e(409),u=e(192),c=e(7852),s=e(6761).Promise,f=e(9670);n.isCORSSupported=function(){return"withCredentials"in new(f.get("XMLHttpRequest"))},n.request=function(t){return t=Object.assign({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},t),new s((function(e,r){if(!n.isCORSSupported())return r("CORS is not supported");var o=new(f.get("XMLHttpRequest"));o.onload=function(){t.success&&t.success(o),e(o)},o.onerror=function(){t.error&&t.error(o),r(o)},i(t.data)&&(t.data=u.stringify(t.data)),o.open(t.method,t.url,t.async),t.withCredentials&&(o.withCredentials=t.withCredentials),o.setRequestHeader("Content-Type",t.contentType),i(t.headers)&&Object.keys(t.headers).forEach((function(n){o.setRequestHeader(n,t.headers[n])})),o.send(t.data)}))},n.retryableRequest=function(t,e,i,u){if(!e)return s.reject(new Error("No id specified for request."));if(!n.isCORSSupported())return s.reject(new Error("CORS is not supported."));void 0===u&&(u=3),void 0===i&&(i=0);var f={id:e,timeStamp:o.now(),data:t,retryCount:i};return a.dispatch(r.SET_PENDING_EVENT,f),c.debug("Sending event ",e),n.request(t).then((function(t){return a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),t}),(function(t){throw f.retryCount>=u?(a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),c.warn("Event ",f," could not be sent after ",u," attempts.")):(f.retryCount++,a.dispatch(r.SET_PENDING_EVENT,f),c.debug("Event ",f," failed to send, with error ",t," It will be retried ",u-i," times.")),t}))},n.sendBeacon=function(t,e){if(!t.url||!t.data)return s.reject(new Error("Must provide required options"));if(navigator&&navigator.sendBeacon)try{var r=i(t.data)?u.stringify(t.data):t.data;if(navigator.sendBeacon(t.url,r))return s.resolve();throw new Error("Unable to sendBeacon")}catch(t){c.warn("sendBeacon failed: ",t)}return t=Object.assign({method:"POST"},t),n.request(t,e)}},2348:function(t,n,e){var i=e(8275).isEmpty,r=e(136),o=e(8674),a=e(5421),u=e(8298),c=e(2025),s=e(6592),f=e(1320),l=e(409),d=e(7852),v=e(8612),h=c.get("stores/event_data"),p=c.get("stores/plugins"),g=c.get("stores/rum"),m=c.get("stores/view"),b=c.get("stores/view_data");n.parseViewTags=function(t){var e=n.evaluateViewTags(t);n.setParsedViewTags(t.id,e)},n.updateAllViewTags=function(){m.getActiveViewStates().forEach((function(t){var e=b.get(t.id);n.parseViewTags(e)}))},n.evaluateViewTags=function(t){return t.tags?t.tags.reduce((function(t,n){try{t[n.apiName]=v.getTagValue(n)}catch(t){e=t,(null!=(i=v.Error)&&"undefined"!=typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](e):e instanceof i)?d.warn("Page / Ignoring unparseable tag",n,t):d.error(t)}var e,i;return t}),{}):{}},n.createViewTicket=function(){var t={},n=p.getAllPlugins(s.PluginTypes.viewProviders);return Object.keys(n).forEach((function(e){var i=n[e];t[i.provides]=c.evaluate(i.getter)})),t},n.registerViews=function(t,n){l.dispatch(r.REGISTER_VIEWS,{views:t,forceClean:n})},n.activateViaAPI=function(t,e){e&&n.setUserSuppliedViewTags(t.id,e),n.activateMultiple([t],e)},n.getViewsAndActivate=function(t){var e=b.getAllViewsForActivationType(t);n.activateMultiple(e)},n.activateMultiple=function(t,e){var a=[];return t.forEach((function(t){var i=m.getViewState(t.id),u=n.createViewTicket();if(i.isActive)if(t.deactivationEnabled)try{n.hasValidStaticConditions(t,u)||n.deactivate(t)}catch(e){d.error("Page / Error evaluating whether to deactivate page ",n.description(t),e)}else d.log("Not activating Page, already active ",n.description(t));else{try{if(!n.hasValidStaticConditions(t,u))return"boolean"!=typeof i.isActive&&n.setViewActiveState(t,!1),void d.log("Page / Failed to match page conditions for "+n.description(t),t.staticConditions)}catch(e){return"boolean"!=typeof i.isActive&&n.setViewActiveState(t,!1),void d.error("Page / Error evaluating whether to activate page ",n.description(t),e)}if(a.push(t),n.setViewActiveState(t,!0),d.log("Activated Page",n.description(t)),o.emitViewActivated({view:t,metadata:e}),g.getSampleRum()){var c=t.activationType||s.ViewActivationTypes.immediate;l.dispatch(r.RECORD_ACTIVATION_TYPE_USAGE,{activationType:c,entityId:t.id})}var f=h.getByPageId(t.id);n.toggleEventImplementations(f,!0)}})),i(a)||o.emitViewsActivated({views:a}),a},n.deactivate=function(t){if(m.getViewState(t.id).isActive){n.setViewActiveState(t,!1),d.log("Deactivated Page",n.description(t)),o.emitPageDeactivated({page:t});var e=h.getByPageId(t.id);n.toggleEventImplementations(e,!1)}else d.log("Not deactivating Page, already inactive ",n.description(t))},n.setViewActiveState=function(t,n){l.dispatch(r.SET_VIEW_ACTIVE_STATE,{view:t,timestamp:u.now(),isActive:n})},n.setGlobalTags=function(t){l.dispatch(r.SET_GLOBAL_TAGS,t)},n.setParsedViewTags=function(t,n){l.dispatch(r.UPDATE_PARSED_VIEW_METADATA,{pageId:t,metadata:n})},n.setUserSuppliedViewTags=function(t,n){l.dispatch(r.UPDATE_USER_SUPPLIED_METADATA,{pageId:t,metadata:n})},n.hasValidStaticConditions=function(t,n){var e={};if(i(t.staticConditions))return!0;var o=p.getAllPlugins(s.PluginTypes.viewMatchers);d.groupCollapsed("Page / Evaluating staticConditions:",t.staticConditions),d.debug("Matching to current value:",n);var u=a.evaluate(t.staticConditions,(function(t){var i=t.type,r=o[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r&&(e[t.type]||(e[t.type]=!0)),r.match(n,t)}));return d.groupEnd(),g.getSampleRum()&&u&&l.dispatch(r.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:Object.keys(e),entityId:t.id}),u},n.description=function(t){return'"'+t.name+'" ('+t.id+")"},n.toggleEventImplementations=function(t,n){t.forEach((function(t){if(t.eventType!==f.CUSTOM){var e=p.getPlugin(s.PluginTypes.eventImplementations,t.eventType);e?n?e.attach(t):e.detach(t):d.warn("No implementation found for event type:",t.eventType,"needed for event:",t)}}))},n.isActivationTypeImmediate=function(t){return t===s.ViewActivationTypes.immediate||!t},n.shouldTriggerImmediately=function(t){return t===s.ViewActivationTypes.DOMChanged||t===s.ViewActivationTypes.URLChanged||t===s.ViewActivationTypes.immediate||!t},n.create=function(t,n){return{id:t,apiName:n,category:"other"}},n.createState=function(t){return{id:t,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}}}},4285:function(t,n,e){Object.defineProperty(n,"u",{value:!0});var i,r=e(8275),o=(r.flattenDeep,r.isEmpty),a=r.omit,u=r.omitBy,c=e(409),s=e(136),f=e(2575),l=e(4938),d=e(6278),v=e(8298),h=e(2025),p=e(6592),g=e(192),m=e(8859),b=e(1353).DT,_=e(7852),y=e(6761).Promise,w=e(4618),E=e(6592).VisitorStorageKeys,I=e(9454);i=e(5292);var A=h.get("stores/cookie_options"),T=h.get("stores/global"),S=h.get("stores/layer"),O=h.get("stores/plugins"),k=h.get("stores/rum"),R=h.get("stores/session"),C=h.get("stores/visitor_id"),N=h.get("stores/visitor_bucketing"),D=h.get("stores/visitor"),x=h.get("stores/provider_status");function j(t){var n=L(t),e=b.getItem(n);return"string"==typeof e&&(e=B(e)),e}function M(t){var n;if(t.layerId)n=t;else{var e=t;n={layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}return n}function P(t,n,e){try{var r=L(t);e||(n=g.stringify(n));try{b.setItem(r,n)}catch(t){throw _.warn("Visitor / Unable to set localStorage key, error was:",t),new Error("Unable to set localStorage")}i.setItem(r,n)}catch(t){_.warn("Unable to persist visitor data:",t.message)}}function L(t){var e=C.getBucketingId();if(!e)throw new Error("Visitor bucketingId not set");var i=n.getNamespace();if(!i)throw new Error("Namespace is not set");return[e,i,t].join("$$")}function U(t,e){if(!C.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(V(t)){var i=n.getStorageKeyFromKey(t);if(Object.keys(E).some((function(t){return E[t]===i}))){var r=L(i);if(!(t.indexOf(r)<=0)&&(e=B(e)))if(i===E.EVENT_QUEUE)c.dispatch(s.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:t,value:l.deserialize(e)});else if(i===E.EVENTS)c.dispatch(s.SET_FOREIGN_VISITOR_EVENTS,{key:t,value:l.deserialize(e)});else if(i===E.LAYER_STATES)c.dispatch(s.LOAD_PERSISTED_LAYER_STATES,{layerStates:e.map(M),merge:!0});else if(i===E.VARIATION_MAP)c.dispatch(s.MERGE_VARIATION_ID_MAP,{variationIdMap:e});else if(i===E.CONTEXTUAL_MAB)c.dispatch(s.MERGE_CONTEXTUAL_MAB_MAP,{contextualMabMap:e});else if(i===E.VISITOR_PROFILE){var a=e;["custom"].forEach((function(t){var n=O.getPlugin(p.PluginTypes.visitorProfileProviders,t);if(n){if(a.profile&&a.metadata){var e=function(t,n,e){var i=D.getAttribute(n),r=D.getAttributeMetadata(n),a=t.profile[n],u=t.metadata[n];if(o(i))return{data:a,metadata:u};var c={};return Object.keys(a).forEach((function(t){var n,i,o=a[t];r&&r[t]&&(n=r[t].lastModified),u&&u[t]&&(i=u[t].lastModified),(e===p.AttributionTypes.FIRST_TOUCH&&n>=i||e===p.AttributionTypes.LAST_TOUCH&&i>=n||void 0===n&&i)&&(c.data=c.data||{},c.data[t]=o,i&&(c.metadata=c.metadata||{},c.metadata[t]=c.metadata[t]||{},c.metadata[t].lastModified=i))})),c}(a,t,n.attributionType);if(!o(e)){var i=[];Object.keys(e.data||{}).forEach((function(n){var r=e.data[n],o=e.metadata[n],a={key:[t,n],value:r,metadata:o};i.push(a)})),c.dispatch(s.SET_VISITOR_ATTRIBUTES,{attributes:i})}}}else _.debug("Attribute type",t,"not used by any audiences")}))}}}}function V(t){return t.split("$$")[0].indexOf("://")>0}function B(t){try{return g.parse(t)}catch(n){return _.debug("Failed to parse: ",t,n),null}}n.getOrGenerateId=function(){return{randomId:n.getCurrentId()||"oeu"+v.now()+"r"+Math.random()}},n.getCurrentId=function(){var t=C.getVisitorIdLocator();return D.getVisitorIdFromAPI()||(t?function(t){var n,e=t.name;switch(t.type){case p.VisitorIdLocatorType.COOKIE:n=d.get(e);break;case p.VisitorIdLocatorType.JS_VARIABLE:n=I.getGlobalByPath(e);break;case p.VisitorIdLocatorType.LOCALSTORAGE:try{n=I.getGlobal("localStorage").getItem(e)}catch(t){throw new Error("Unable to read localStorage: "+t.toString())}break;case p.VisitorIdLocatorType.QUERY:n=w.getQueryParamValue(e)}try{if(!n)throw _.error("Visitor / Customer provided visitor id cannot be found. Type:",t.type," Name:",e),new Error("Failure to obtain visitor id from "+t.type);if("string"!=typeof n&&"number"!=typeof n)throw _.error("Visitor / Customer provided visitor id is not a string or number. Type:",t.type," Name:",e," Id Type:",(i=n)&&"undefined"!=typeof Symbol&&i.constructor===Symbol?"symbol":typeof i),new Error("Customer provided visitor id is not a string or number")}catch(t){throw k.getSampleRum()&&c.dispatch(s.RECORD_VISITOR_ID_ERROR,{isError:!0}),t}var i;k.getSampleRum()&&(c.dispatch(s.RECORD_VISITOR_ID_ERROR,{isError:!1}),c.dispatch(s.RECORD_VISITOR_ID_LOCATOR_USAGE,{visitorIdLocatorType:t.type,entityId:n}));return String(n)}(t):d.get(p.COOKIES.VISITOR_ID))},n.hasSomeData=function(){return b.keys().length>0},n.setId=function(t){var e,r,o=C.getBucketingId();c.dispatch(s.SET_VISITOR_ID,t),C.getBucketingId()!==o&&(!function(){!function(t,n){0;f.initializeStore(t,n)}(j(E.EVENTS)||[],j(E.EVENT_QUEUE)||[]);var t=(e=E.LAYER_STATES,i=C.getBucketingId(),r=[],o=new RegExp(i+"\\$\\$([^$]+?)\\$\\$"+e),b.keys().forEach((function(t){var n=t.match(o);if(n){var e={namespace:n[1],userId:i,item:B(b.getItem(t))};r.push(e)}})),r);var e,i,r,o;t.forEach((function(t){t.item=(t.item||[]).map(M)})),u=t,l=[],u.forEach((function(t){t.item.forEach((function(n){n.namespace=t.namespace,l.push(n)}))})),v=l,c.dispatch(s.LOAD_PERSISTED_LAYER_STATES,{layerStates:v.filter((function(t){return!!t.decision}))}),d=j(E.SESSION_STATE)||{},d=Object.assign({lastSessionTimestamp:0,sessionId:null},d),c.dispatch(s.LOAD_SESSION_STATE,d),function(t){var n,e,i=O.getAllPlugins(p.PluginTypes.visitorProfileProviders),r=Object.keys(i||{}).map((function(t){return i[t]})).filter((function(t){return"function"==typeof t.restorer}));t.profile&&t.metadata?(n=t.profile,e=t.metadata):(n=t,e={});n=Object.keys(n||{}).reduce((function(t,e){var i=n[e],o=i,a=r.find((function(t){return t.provides===e}));return a&&(o=a.restorer(i)),t[e]=o,t}),{}),c.dispatch(s.LOAD_EXISTING_VISITOR_PROFILE,{profile:n,metadata:e})}(j(E.VISITOR_PROFILE)||{});var a=j(E.TRACKER_OPTIMIZELY);a&&(h=a,c.dispatch(s.SET_TRACKER_PERSISTABLE_STATE,h));var u,l;var d;var v;var h;n.loadForeignData(),n.removeLegacySessionStateCookies()}(),n.deleteOldLocalData(),i.deleteData(t));try{C.getVisitorIdLocator()||n.maybePersistVisitorId(t)}catch(t){if(_.error("Visitor / Unable to persist visitorId, disabling tracking"),c.dispatch(s.LOAD_DIRECTIVE,{trackingDisabled:!0}),e=t,null!=(r=d.MismatchError)&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](e):e instanceof r)throw _.error("Visitor / Cookie not set to correct value:",t),new Error("Cookie mismatch error while persisting visitorId");throw t}n.refreshSession()},n.getVariationIdMap=function(){return j(E.VARIATION_MAP)||{}},n.updateVariationIdMap=function(t,n,e){c.dispatch(s.UPDATE_VARIATION_ID_MAP,{layerId:t,experimentId:n,variationId:e})},n.persistVariationIdMap=function(){var t=N.getVariationIdMapString();P(E.VARIATION_MAP,t,!0)},n.getContextualMabMap=function(){return j(E.CONTEXTUAL_MAB)||{}},n.updateContextualMabMap=function(t,n,e){c.dispatch(s.UPDATE_CONTEXTUAL_MAB_MAP,{layerId:t,experimentId:n,variationData:e})},n.persistContextualMabMap=function(){var t=N.getContextualMabMapString();P(E.CONTEXTUAL_MAB,t,!0)},n.getOdpSegments=function(){return j(E.ODP_SEGMENTS)||{}},n.persistOdpSegments=function(t){P(E.ODP_SEGMENTS,t,!1)},n.getPreferredLayerMap=function(){return j(E.LAYER_MAP)||{}},n.updatePreferredLayerMap=function(t,n){c.dispatch(s.UPDATE_PREFERRED_LAYER_MAP,{groupId:t,layerId:n})},n.persistTrackerOptimizelyData=function(t){P(E.TRACKER_OPTIMIZELY,t)},n.refreshSession=function(){c.dispatch(s.REFRESH_SESSION)},n.populateEagerVisitorData=function(t,e){var i=Object.keys(t||{}).reduce((function(n,e){var i=t[e];return i.isLazy||n.push(i),n}),[]);return n.populateVisitorData(i,e)},n.populateLazyVisitorData=function(t,e,i){_.debug("Populating lazy visitor. List of all providers",t);var r=Object.keys(t||{}).reduce((function(n,e){var r=t[e];return r.isLazy&&i.has(r.provides)&&n.push(r),n}),[]);return _.debug("Filtered list of providers that are lazy and present in audiences",r),n.populateVisitorData(r,e)},n.populateVisitorData=function(t,n){n=n||{};var e=function(t){return function(t,n){var e=function(t,e){var i;n.attributionType&&(i=v.now()),c.dispatch(s.SET_VISITOR_ATTRIBUTES,{attributes:[{key:t,value:e,metadata:{lastModified:i}}]})};if(!n.getter)return;var i=n.provides;Array.isArray(i)||(i=[i]),!1;var r,o=n.isSticky&&void 0!==m.getFieldValue(t,i);if(o)return;try{var a=h.evaluate(n.getter);"function"==typeof a&&(a=a((function(){return m.getFieldValue(t,i)}),(function(t){e(i,t)}))),void 0!==a&&(n.isAsync?(r=a.then((function(t){e(i,t)}),(function(t){_.warn('Failed to evaluate provider for "'+n.provides+'"; error was:',t)})),c.dispatch(s.SET_VISITOR_ATTRIBUTE_PENDING,{key:i,pending:r})):e(i,a))}catch(t){_.warn('Failed to evaluate getter for provider for "'+n.provides+'"; error was: '+t.message)}return r}(n,t)},i=t.filter((function(t){return!0===t.isAsync})).map(e).filter(Boolean);return t.filter((function(t){return!t.isAsync})).forEach(e),i.length>0?y.all(i):y.resolve()},n.persistBehaviorEvents=function(t){P(E.EVENTS,t)},n.persistBehaviorEventQueue=function(t){P(E.EVENT_QUEUE,t)},n.getPersistedBehaviorEventCount=function(){var t=j(E.EVENTS)||[],n=j(E.EVENT_QUEUE)||[];return l.deserialize(t).length+l.deserialize(n).length},n.persistLayerStates=function(){var t=S.getLayerStates(n.getNamespace());t=t.map((function(t){return a(t,["namespace"])})),P(E.LAYER_STATES,t)},n.persistSessionState=function(){P(E.SESSION_STATE,R.getState())},n.persistVisitorProfile=function(){var t=function(){var t=D.getVisitorProfile(),n=D.getVisitorProfileMetadata(),e=O.getAllPlugins(p.PluginTypes.visitorProfileProviders);if(e){var i=Object.keys(e).reduce((function(t,n){var i=e[n];return i.provides&&(t[i.provides]=i),t}),{});t=u(t,(function(t,n){var e=i[n];return e&&e.isTransient}))}return{profile:t,metadata:n}}();P(E.VISITOR_PROFILE,t)},n.persistVisitorBucketingStore=function(){var t;n.persistVariationIdMap(),t=N.getPreferredLayerMapString(),P(E.LAYER_MAP,t,!0),n.persistContextualMabMap()},n.getUserIdFromKey=function(t,e){var i;return t.includes(e)&&t.includes("_")&&t.includes("$$")&&t.slice(t.indexOf("$$")).includes(n.getNamespace())&&(i=t.slice(t.indexOf("_")+1,t.indexOf("$$"))),i},n.maybePersistVisitorId=function(t){t.randomId&&(A.getAutoRefresh()||n.getCurrentId()!==t.randomId?(d.set(p.COOKIES.VISITOR_ID,t.randomId),_.log("Persisting visitorId:",t.randomId)):_.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},n.getAttribute=function(t){return D.getAttribute(t)},n.getPendingAttributeValue=function(t){return x.getPendingAttributeValue(t)},n.isForeignKey=V,n.checkKeyForVisitorId=function(t){var e=C.getBucketingId()||n.getCurrentId(),i=n.getIdFromKey(t);return!i||i===e},n.getIdFromKey=function(t){var e=t.split("$$")[0],i=n.getStorageKeyFromKey(t);if(Object.keys(p.StorageKeys).some((function(t){return p.StorageKeys[t]===i})))return null;var r=e.indexOf("_");return-1===r?e:e.substring(r+1)},n.getStorageKeyFromKey=function(t){var n,e=t.split("$$").pop();if(e.indexOf("://")>-1){var i=e.indexOf("_");n=e.substring(i+1)}else n=e;return Object.keys(p.AllStorageKeys).some((function(t){return p.AllStorageKeys[t]===n}))?n:null},n.deleteOldLocalData=function(){b.keys().forEach((function(t){n.isForeignKey(t)||n.checkKeyForVisitorId(t)||b.removeItem(t)}))},n.deleteOldForeignData=function(){b.keys().forEach((function(t){n.isForeignKey(t)&&b.removeItem(t)}))},n.loadForeignData=function(){b.keys().forEach((function(t){var n=b.getItem(t);n&&U(t,n)}))},n.getNamespace=function(){return T.getNamespace()},n.serializeFieldKey=function(t){return Array.isArray(t)?t.join("$$"):t},n.removeLegacySessionStateCookies=function(){var t=d.getAll();Object.keys(t).forEach((function(t){0===t.indexOf(p.COOKIES.SESSION_STATE+"$$")&&d.remove(t)}))}},9480:function(t,n,e){var i=e(6592);n.normalizeClientData=function(t){!t.listTargetingKeys&&t.listTargetingCookies&&(t.listTargetingKeys=t.listTargetingCookies.map((function(t){return{type:i.ListTargetingKeyTypes.COOKIE,key:t}})),delete t.listTargetingCookies)}},7786:function(t,n,e){e(2025).register("env/jquery",e(8138))},8138:function(t,n,e){var i,r=e(9454);try{i=$}catch(t){}var o=r.getGlobal("$");t.exports=i&&i!==o?i:o},673:function(t,n,e){e(8275).isEmpty,e(8130).C,e(8298);var i=e(2025),r=(e(1019),e(7852));e(9454),e(8260),i.get("stores/client_metadata"),i.get("stores/global");n.handleError=function(t,n){n?r.error("Uncaught error:",t,n):r.error("Uncaught error:",t)}},4439:function(t,n,e){var i=e(136),r=e(8841),o=e(8486),a=e(8130).v,u=e(9114),c=e(8339),s=e(2025).get("stores/directive"),f=e(1019),l=e(8421),d=e(409),v=e(7852),h=e(1760),p=e(123),g=e(2671).create(),m=1e3,b=10,_=a("ChangeOverheatError");function y(t,n){if(this.change=t,this.identifier=n.identifier,this.startTime=n.startTime,s.shouldObserveChangesIndefinitely()){d.dispatch(i.INITIALIZE_CHANGE_METRICS),this.rateMeter=new h(m);var e=null===b?Number.POSITIVE_INFINITY:b;this.rateMeter.addListener(e,function(){v.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),d.dispatch(i.RECORD_CHANGE_OVERHEATED),r.emitError(new _("Change "+this.identifier+" has overheated"),{layerId:n.action&&n.action.layerId,experimentId:n.action&&n.action.experimentId,variationId:n.action&&n.action.variationId,changeId:t.id,changeType:t.type,movingWindowMilliseconds:m,maxMacroTasksInMovingWindow:e})}.bind(this));for(var o=Math.min(e,50),a=0;a<=o;a++)this.rateMeter.addListener(a,function(t){return function(){d.dispatch(i.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:t})}}(a))}}y.prototype.numberOfRootNodes=function(t){var n=document.createElement("div");return n.innerHTML=t,n.childNodes.length},y.prototype.getSiblingElements=function(t,n,e){for(var i=t,r=[],o=0;o<n;o++)e?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},y.prototype.apply=function(){this.applyDeferred=c();try{if(!this.numberOfRootNodes(this.change.value))throw new Error("No DOM elements to be created for this change: "+this.change.value);var t=this.applyDeferred.reject.bind(this.applyDeferred,new Error("Unable to find selector.")),n={};s.shouldObserveChangesUntilTimeout()?n={timeout:p.isTimedOut.bind(null,this.startTime),onTimeout:t}:s.isEditor()&&g.waitUntil(p.isTimedOut.bind(null,this.startTime)).then(t,t),this.unobserveSelector=g.observeSelector(this.change.selector,this.maybeApplyToElement.bind(this),n);var e=f.querySelectorAll(this.change.selector),i=this;e.forEach((function(t){i.maybeApplyToElement(t)}))}catch(t){this.applyDeferred.reject(t)}return this.applyDeferred},y.prototype.maybeApplyToElement=function(t){var n=o.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(t.hasAttribute(n))return v.debug("Not applying AppendChange to element",t,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick(),this.applyOrReapplyToElement.bind(this,t,n)(),this.applyDeferred.resolve()},y.prototype.applyOrReapplyToElement=function(t,n){var e;switch(this.change.operator){case l.DOMInsertionType.AFTER:e=l.insertAdjacentHTMLType.AFTER_END;break;case l.DOMInsertionType.APPEND:e=l.insertAdjacentHTMLType.BEFORE_END;break;case l.DOMInsertionType.BEFORE:e=l.insertAdjacentHTMLType.BEFORE_BEGIN;break;case l.DOMInsertionType.PREPEND:e=l.insertAdjacentHTMLType.AFTER_BEGIN;break;default:e=l.insertAdjacentHTMLType.BEFORE_END}t.insertAdjacentHTML(e,this.change.value),t.setAttribute(n,""),u.setData(t,this.change.id,this.identifier,[]);var i,r,o=this.numberOfRootNodes(this.change.value)-1;e===l.insertAdjacentHTMLType.BEFORE_END?(i=t.lastChild,r=this.getSiblingElements(i,o,!1)):e===l.insertAdjacentHTMLType.AFTER_BEGIN?(i=t.firstChild,r=this.getSiblingElements(i,o,!0)):e===l.insertAdjacentHTMLType.BEFORE_BEGIN?(i=t.previousSibling,r=this.getSiblingElements(i,o,!1)):e===l.insertAdjacentHTMLType.AFTER_END&&(i=t.nextSibling,r=this.getSiblingElements(i,o,!0)),r.unshift(i);var a=this;r.forEach((function(t){var e=t.nodeType===Node.ELEMENT_NODE?t:f.parentElement(t);e.setAttribute(n,"");var i=u.getData(e,a.change.id,a.identifier)||[];i.push(t),u.setData(e,a.change.id,a.identifier,i),f.childrenOf(e).forEach((function(t){t.setAttribute(n,"")}))}))},y.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},t.exports=function(t){t.registerChangeApplier(l.changeType.APPEND,y)}},8636:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(8421);n.transformVisibilityAttributesToCSS=function(t){if(!t.attributes)return t;if(t.attributes[a.selectorChangeType.HIDE]||t.attributes[a.selectorChangeType.REMOVE]){var n=Object.assign({css:{}},r(t));return t.attributes[a.selectorChangeType.HIDE]&&(n.css.visibility="hidden",delete n.attributes[a.selectorChangeType.HIDE]),t.attributes[a.selectorChangeType.REMOVE]&&(n.css.display="none",delete n.attributes[a.selectorChangeType.REMOVE]),n}return t},n.createStylesFromChange=function(t,n){if(o(n.css))return n.attributes.style;var e="",i=n.attributes.style||"";return Object.keys(n.css).forEach((function(t){var r=n.css[t];new RegExp(t+"\\s?:").test(i)||(e+=t+":"+r+";")})),void 0===n.attributes.style?(t||"")+e:e+i}},6474:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(136),u=e(8841),c=e(8486),s=e(8130).v,f=e(9114),l=e(8339),d=e(2025).get("stores/directive"),v=e(1019),h=e(8421),p=e(409),g=e(7852),m=e(4970),b=(e(6761).Promise,e(1760)),_=e(123),y=e(9454),w=e(8636),E=e(2671).create(),I={attributes:!0,childList:!0,subtree:!0,characterData:!0},A=1e3,T=10,S=s("ChangeOverheatError");function O(t,n){if(this.change=r(t),this.change=w.transformVisibilityAttributesToCSS(this.change),this.identifier=n.identifier,this.startTime=n.startTime,this.disconnectObserverQueue=[],d.shouldObserveChangesIndefinitely()){p.dispatch(a.INITIALIZE_CHANGE_METRICS),this.rateMeter=new b(A);var e=null===T?Number.POSITIVE_INFINITY:T;this.rateMeter.addListener(e,function(){g.warn("AttributeChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),p.dispatch(a.RECORD_CHANGE_OVERHEATED),u.emitError(new S("Change "+this.identifier+" has overheated"),{layerId:n.action&&n.action.layerId,experimentId:n.action&&n.action.experimentId,variationId:n.action&&n.action.variationId,changeId:t.id,changeType:t.type,movingWindowMilliseconds:A,maxMacroTasksInMovingWindow:e})}.bind(this));for(var i=Math.min(e,50),o=0;o<=i;o++)this.rateMeter.addListener(o,function(t){return function(){p.dispatch(a.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:t})}}(o))}this.cancelled=!1}O.prototype.apply=function(){this.applyDeferred=l();try{if(o(this.change.attributes)&&o(this.change.css))return g.debug("Not applying empty AttributeChange"),this.applyDeferred.resolve(),this.applyDeferred;var t=this.applyDeferred.reject.bind(this.applyDeferred,new Error("Unable to find selector.")),n={};d.shouldObserveChangesUntilTimeout()?n={timeout:_.isTimedOut.bind(null,this.startTime),onTimeout:t}:d.isEditor()&&E.waitUntil(_.isTimedOut.bind(null,this.startTime)).then(t,t),this.unobserveSelector=E.observeSelector(this.change.selector,this.maybeApplyToElement.bind(this),n);var e=v.querySelectorAll(this.change.selector),i=this;e.forEach((function(t){i.maybeApplyToElement(t)}))}catch(t){this.applyDeferred.reject(t)}return this.applyDeferred},O.prototype.maybeApplyToElement=function(t){var n=c.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(t.hasAttribute(n))return g.debug("AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. "+t),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var e=this.applyOrReapplyToElement.bind(this,t,n);e(!1);var i=function(){var n=function(){this.cancelled||m.observe(r,t,I)}.bind(this);return y.setTimeout(n)}.bind(this),r=m.create(function(){this.rateMeter&&this.rateMeter.countCurrentTick(),r.disconnect(),e(!0),i()}.bind(this));i(),this.disconnectObserverQueue.push(r.disconnect.bind(r)),this.applyDeferred.resolve()},O.prototype.applyOrReapplyToElement=function(t,n,e){void 0===e&&(e=!1);var i={},r=this.change.attributes;Object.keys(r).forEach((function(e){var o=r[e];switch(e){case h.selectorChangeType.CLASS:void 0!==t.className&&(i[h.selectorChangeType.CLASS]=t.getAttribute("class")||"",t.setAttribute("class",o));break;case h.selectorChangeType.HREF:void 0!==t.getAttribute("href")&&(i[h.selectorChangeType.HREF]=t.getAttribute("href")||"",t.setAttribute("href",o));break;case h.selectorChangeType.HTML:void 0!==t.innerHTML&&(i[h.selectorChangeType.HTML]=t.innerHTML,t.innerHTML=o,v.childrenOf(t).forEach((function(t){t.setAttribute(n,"")})));break;case h.selectorChangeType.SRC:void 0!==t.src&&(i[h.selectorChangeType.SRCSET]=t.src,t.srcset=o);break;case h.selectorChangeType.SRCSET:void 0!==t.srcset&&(i[h.selectorChangeType.SRCSET]=t.srcset,t.srcset=o);break;case h.selectorChangeType.STYLE:break;case h.selectorChangeType.TEXT:void 0!==t.textContent&&(i[h.selectorChangeType.TEXT]=t.textContent,t.textContent=o);break;default:throw new Error("Unrecognized attribute: "+e)}}));var o=w.createStylesFromChange(t.style.cssText,this.change);"string"==typeof o&&(i[h.selectorChangeType.STYLE]=t.style.cssText,t.style.cssText=o),t.setAttribute(n,""),e&&f.hasData(t)||f.setData(t,this.change.id,this.identifier,i)},O.prototype.cancel=function(){this.cancelled=!0,this.unobserveSelector&&this.unobserveSelector(),this.disconnectObserverQueue.forEach((function(t){try{t()}catch(t){}}))},t.exports=function(t){t.registerChangeApplier(h.changeType.ATTRIBUTE,O)}},2636:function(t,n,e){var i=e(8339),r=e(8421),o=e(8484);function a(t,n){if("function"!=typeof t.value)throw new Error("Custom code must be a function");this.change=t}a.prototype.apply=function(){var t=i();try{o.apply(this.change.value),t.resolve()}catch(n){t.reject(n)}return t},t.exports=function(t){t.registerChangeApplier(r.changeType.CUSTOM_CODE,a)}},8663:function(t,n,e){var i=e(6761).Promise,r=e(136),o=e(6592),a=e(6278),u=e(1019),c=e(8421),s=e(409),f=e(9295),l=e(7852),d=e(9454);function v(t,n){if(this.change=t,this.config=n,this.reasonShouldNotRedirect=this._checkForReasonNotToRedirect(),!this.reasonShouldNotRedirect){if("string"!=typeof this.change.dest&&"function"!=typeof this.change.dest)throw new Error("Redirect destination is not a string or function");if("function"==typeof this.change.dest&&(this.change.dest=this.change.dest(),"string"!=typeof this.change.dest))throw new Error("Redirect destination function did not evaluate to a string");if(!this.config.action)throw new Error("Redirect changes require an action to be passed in the config.");s.dispatch(r.ANNOUNCE_PENDING_REDIRECT,{layerId:this.config.action.layerId})}}v.prototype.apply=function(){if(this.reasonShouldNotRedirect)return l.warn("Redirect change is not being applied because: "+this.reasonShouldNotRedirect),i.resolve(c.changeState.IGNORED);if(this.reasonInvalid)return l.error("Redirect change cannot be applied because:",this.reasonInvalid),i.reject(this.reasonInvalid);try{this.Te(this.Se())}catch(t){return i.reject(t)}return i.resolve(c.changeState.APPLIED)},v.prototype.Se=function(){var t=f.create(this.change.dest);if(this.change.preserveParameters){var n=d.getLocation().search;n&&(t.search?t.search+="&"+n.substr(1):t.search=n)}return t.toString()},v.prototype.Oe=function(){var t=u.createElement("style");t.setAttribute("type","text/css"),t.innerHTML="body{display:none;visibility:hidden;}",u.appendToHead(t)},v.prototype.Te=function(t){(!this.change.hasOwnProperty("hidePage")||this.change.hidePage)&&this.Oe(),d.setLocation(t)},v.prototype._checkForReasonNotToRedirect=function(){var t=a.get(o.COOKIES.REDIRECT);if(!this.change.allowAdditionalRedirect&&void 0!==t)return"Page was already redirected."},t.exports=function(t){t.registerChangeApplier(c.changeType.REDIRECT,v)}},3037:function(t,n,e){var i=e(571),r=e(7353).b,o={selectExperiment:function(t,n,e){if(t.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var o=t.experiments[0];if(!i.isValidExperiment(n,o))throw new r('Audience conditions failed for experiment: "'+o.id+'".');return o}};t.exports=function(t){t.registerDecider("single_experiment",o),t.registerDecider("multivariate",o)}},7544:function(t,n,e){var i=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},r=e(8841),o=e(8130).v,a=e(1019),u=e(6907),c=n.Error=o("ClickDelegateError");function s(t){this.handler=t,this.events=[],this.unlistenFn=null,this.clickHandler=function(t){var n=this;this.events.forEach((function(e){try{var o=e.config&&e.config.selector?e.config.selector:e.eventFilter.selector;(function(t,n,e){var o=t.target,a=0;for(;o;){var s;try{s=u(o,n)}catch(u){var f={typeofElementValue:void 0===o?"undefined":i(o),nodeName:o?o.nodeName:null,nodeType:o?o.nodeType:null,targetName:t&&t.target?t.target.nodeName:null,targetType:t&&t.target?t.target.nodeType:null,numParentsTraversed:a,selector:n,errorMessage:u.message,eventId:e.id};return r.emitError(new c("Unable to evaluate match for element"),f),!1}if(s)return!0;o=o.parentElement,a++}return!1})(t,o,e)&&n.handler(e)}catch(t){r.emitError(new c("Unable to handle click for selector"+o+":"+t.message))}}))}.bind(this)}s.prototype.listen=function(){this.unlistenFn=a.addEventListener("click",this.clickHandler,!0)},s.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},s.prototype.hasEvents=function(){return this.events.length>0},s.prototype.addEvent=function(t){this.events.push(t)},s.prototype.removeEvent=function(t){this.events=this.events.filter((function(n){return n.apiName!==t.apiName}))},t.exports=s},4680:function(t,n,e){var i=e(8131),r=e(7544),o=e(7852),a=e(2348);function u(t){return"apiName: "+t.apiName+", selector: "+t.eventFilter.selector}t.exports=function(t){var n=new r((function(t){a.updateAllViewTags(),i.trackClickEvent(t)?o.log("Tracking click event:",t):o.log("Not tracking click event:",t)}));t.registerEventImplementation("click",{attach:function(t){n.hasEvents()||n.listen(),n.addEvent(t),o.debug("Started listening for click event ("+u(t)+"):",t)},detach:function(t){n.removeEvent(t),n.hasEvents()||n.unlisten(),o.debug("Stopped listening for click event ("+u(t)+"):",t)}})}},6092:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.flatten,a=e(8620),u=e(2599),c=e(986);function s(t,n){var e=u.buildFromSpecV0_1(n);if(1!==e.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return c.execute(e[0],t)}function f(t,n){return t.map((function(t){return"function"==typeof t.toObject?t.toObject(n):t}))}function l(t,n){if(!t)return["Descriptor not defined"];var e=[];return t.count&&e.push('Unexpected "count" clause specified'),t.pick&&t.pick.modifier&&-1===n.indexOf(t.pick.modifier)&&e.push('Invalid "pick" modifier "'+t.pick.modifier+'"'),(t.filters||[]).forEach((function(t){void 0!==t.modifier&&e.push('Unexpected "filter" modifier "'+t.modifier+'"')})),e.length>0?e:void 0}function d(t,n){var e={revenueAsTag:!1,timeAsTimestamp:!0};if(void 0===n)return f(a.getEvents(t),e);if("number"==typeof n){if(n<=0)throw new Error("Count must be a positive integer, got "+n);return f(a.getEvents(t).slice(-n),e)}var i=l(n,Object.values(u.RECENCY_FILTERS));if(i)throw new Error(i.join("\n"));return f(s(a.getEvents(t),n),e)}function v(t,n){if(!(n=r(n)||{}).pick)throw new Error('No "pick" clause provided in query descriptor');if(!n.pick.name)throw new Error('No field name provided in "pick" clause');n.pick.modifier=n.pick.modifier||u.FREQUENCY_FILTERS.MOST_FREQUENT;var e=l(n,Object.values(u.FREQUENCY_FILTERS));if(e)throw new Error(e.join("\n"));return s(a.getEvents(t),n)}function h(t,n){var e=u.buildFromSpecV0_2(n),i=a.getEvents(t),r=f(c.execute(e,i),{revenueAsTag:!0,timeAsTimestamp:!1});return(n.pick||n.reduce&&"count"===n.reduce.aggregator)&&(r=o(r)),n.reduce&&(r=r[0]),r}t.exports=["stores/visitor_events",function(t){return{getEvents:d.bind(null,t),getByFrequency:v.bind(null,t),query:h.bind(null,t)}}]},6988:function(t,n,e){t.exports=function(t){t.registerApiModule("behavior",e(6092))}},1982:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(5937)),t.registerAudienceMatcher("behavior",e(2816))}},2816:function(t,n,e){var i=e(192),r=e(2599),o=e(986);t.exports={fieldsNeeded:["events"],match:function(t,n){var e=i.parse(n.value);return(void 0===e.version?[e]:r.buildFromSpecV0_1(e)).every((function(n){return o.isSatisfied(n,t.events)}))}}},5937:function(t,n,e){var i=e(8620);t.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}},9202:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(3377))}},3377:function(t,n,e){var i=e(4519),r=e(8620),o=e(192),a=e(2599);t.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(t,n){var e=t.getProjectId(),u=n.getCustomBehavioralAttributes(e).map((function(t){try{return{id:t.id,granularity:i.GRANULARITY.ALL,rule:a.buildFromSpecV0_2(o.parse(t.rule_json))}}catch(t){return}})).filter((function(t){return t})),c=r.getEvents();return i.evaluate(u,c)}]}},9401:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(725)),t.registerAudienceMatcher("first_session",e(2388))}},2388:function(t){t.exports={fieldsNeeded:["first_session"],match:function(t){return!!t.first_session}}},725:function(t,n,e){var i=e(1489),r=e(8620),o=e(8859).getFieldValue,a=e(7269).CURRENT_SESSION_INDEX;t.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var t=r.getEvents();if(t&&t.length>0){var n=t[0];return o(n,[i.FIELDS.SESSION_INDEX])===a}return!0}]}},4519:function(t,n,e){var i=e(7852),r={FIELDS:e(1489).FIELDS},o=e(2599),a=e(986);n.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},n.evaluate=function(t,e){var u={};if(0===e.length){for(var c=0;c<t.length;c++)u[t[c].id]=t[c].defaultValue;return u}var s=function(t){if(0===t.length)return[];for(var n=t.length-1,e=r.FIELDS.SESSION_ID,i=t[n][e];n>0&&i===t[n-1][e];)n--;return t.slice(n)}(e),f=function(t,n){if(0===t.length||n<=0)return[];var e=+new Date-n*o.MILLIS_IN_A_DAY;e-=e%o.MILLIS_IN_A_DAY;for(var i=t.length;i>0&&e<=t[i-1][r.FIELDS.TIME];)i--;return t.slice(i)}(e,60);for(c=0;c<t.length;c++){var l=t[c],d=e;l.granularity===n.GRANULARITY.CURRENT_SESSION?d=s:l.granularity===n.GRANULARITY.LAST_60_DAYS&&(d=f);try{var v=d;l.rule&&(v=a.execute(l.rule,d)),u[l.id]=l.defaultValue,1===v.length?u[l.id]=v[0][0]||l.defaultValue:i.debug("Behavior / Rule for",l.id,"returned",v.length,"results, expected 1")}catch(t){i.error("Behavior / Rule for",l.id,"failed with",t.message||"")}}return u}},8620:function(t,n,e){var i=e(4938),r=e(2025).get("stores/visitor_events");n.getEvents=function(){var t=i.getEvents(),n=[].concat.apply([],Object.values(r.getForeignEvents())),e=[].concat.apply([],Object.values(r.getForeignEventQueues())),o=i.mergeAllEvents([t,n,e]);return o.slice(o.length-1e3)}},2599:function(t,n,e){var i=n,r={FIELDS:e(1489).FIELDS,FIELDS_V0_2:e(1489).FIELDS_V0_2},o=e(192),a=e(7852),u=e(986);i.MILLIS_IN_A_DAY=864e5,i.aggregateField=function(t,n){return"string"==typeof n&&(n=[n]),n=n||u.DEFAULT_FIELD,[u.generateAlias(t,n)]},i.groupField=function(t){return"string"==typeof t&&(t=[t]),[(t=t||u.DEFAULT_FIELD).join(".")]};var c={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};function s(t){return t=(t||"").toString().trim(),c[t]||t}function f(t,n,e){var o={where:n};if(t.count&&(o.limit=t.count),t.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT){var a=i.getFieldKeyPathForSource(t.name,e),u=i.aggregate("count"),c=i.aggregateField("count"),s=i.groupField(a);return Object.assign(o,{select:[{field:s}],groupBy:i.groupBy([a]),aggregate:[u],orderBy:[{field:c,direction:"DESC"}]})}return Object.assign(o,{orderBy:[{field:[r.FIELDS.TIME],direction:"DESC"}]})}i.fieldComparison=function(t,n,e){return"string"==typeof n&&(n=[n]),"exists"===(t=s(t))?{op:t,args:[{field:n}]}:{op:t,args:[{field:n},{value:e}]}},i.relativeTimeComparison=function(t,n){return{op:s(t),args:[{op:"-",args:[{eval:"now"},{field:[r.FIELDS.TIME]}]},{value:n*i.MILLIS_IN_A_DAY}]}},i.rangeTimeComparison=function(t){return Array.isArray(t)?{op:"between",args:[{field:[r.FIELDS.TIME]},{value:[t[0]||+new Date(0),t[1]||+new Date]}]}:(a.error("Rule builder","rangeTimeComparison passed invalid range",t),null)},i.groupBy=function(t){for(var n=[],e=0;e<t.length;e++)n[e]={field:t[e]};return n},i.aggregate=function(t,n){return"string"==typeof n&&(n=[n]),{op:t,args:[{field:n=n||u.DEFAULT_FIELD}]}},i.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},i.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},i.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},i.getFieldKeyPathForSource=function(t,n){n=n||i.SOURCE_TYPES.BEHAVIOR;var e=[];return"string"==typeof t?(e=[t],n!==i.SOURCE_TYPES.BEHAVIOR||Object.values(r.FIELDS).includes(t)||(e=[r.FIELDS.OPTIONS,t])):e=t,e},i.buildFromSpecV0_1=function(t){if(!(t.action||t.filters&&0!==t.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+o.stringify(t));var n=i.fieldComparison("gt",r.FIELDS.TIME,0),e=[],u=[];if(t.action&&(u.push(i.fieldComparison("eq",r.FIELDS.NAME,t.action.value)),t.action.type&&u.push(i.fieldComparison("eq",r.FIELDS.TYPE,t.action.type))),t.time)if("last_days"===t.time.type)u.push(i.relativeTimeComparison("lte",t.time.days));else if("range"===t.time.type){var c=i.rangeTimeComparison([t.time.start,t.time.stop]);c&&u.push(c)}else a.error("Rule builder",'Audience spec has bad "time" type',t.time.type);if(n={op:"and",args:u},t.count&&e.push({where:i.fieldComparison(t.count.comparator,"0",t.count.value),from:{select:[{field:i.aggregateField("count")}],where:n,aggregate:[i.aggregate("count")]}}),t.filters&&t.filters.forEach((function(o){var a,c,s=i.getFieldKeyPathForSource(o.name,t.source);if(o.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT?(a=i.aggregate("count"),c=i.aggregateField("count")):o.modifier===i.RECENCY_FILTERS.MOST_RECENT&&(a=i.aggregate("max",r.FIELDS.TIME),c=i.aggregateField("max",r.FIELDS.TIME)),a){var f=s,l=i.groupField(f);e.push({where:i.fieldComparison(o.comparator,"0",o.value),from:{select:[{field:l}],where:n,groupBy:i.groupBy([f]),aggregate:[a],orderBy:[{field:c,direction:"DESC"}],limit:1}})}else u.push(i.fieldComparison(o.comparator,s,o.value))})),t.pick){if(e.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+o.stringify(t));return[f(t.pick,n,t.source)]}return e.length>0?e:[{where:n}]},i.buildFromSpecV0_2=function(t){!function(t){var n=[];if(void 0===t)throw new Error("rule is undefined");if("object"!=typeof t||null===t)throw new Error("rule is not an Object");"0.2"!==t.version&&n.push('version: not "0.2"'),t.filter&&(Array.isArray(t.filter)?t.filter.forEach((function(t,e){var r=i.validateFieldKeyPathV0_2(t.field,i.FieldPurpose.FILTER);r&&n.push("filter["+e+"]: "+r);var o=i.validateComparatorAndValue(t.comparator,t.value);o&&n.push("filter["+e+"]: "+o)})):n.push("filter: not an array"));var e=[],r=[];t.sort&&(t.reduce&&t.reduce.aggregator&&"nth"!==t.reduce.aggregator&&n.push("sort: superfluous because we can apply aggregator "+o.stringify(t.reduce.aggregator)+" to unsorted items"),Array.isArray(t.sort)?t.sort.forEach((function(t,a){var u=i.validateFieldKeyPathV0_2(t.field,i.FieldPurpose.SORT);u&&n.push("sort["+a+"]: "+u),t.field&&"frequency"===t.field[0]?e.push(t):r.push(t);var c=function(t){var n="direction "+(o.stringify(t)||String(t));if(!["ascending","descending"].includes(t))return n+' is not "ascending" or "descending"'}(t.direction);c&&n.push("sort["+a+"]: "+c)})):n.push("sort: not an array"),e.length&&r.length&&n.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),e.length&&!t.pick&&n.push('sort: sorting by ["frequency"] is impossible because no values have been picked'));if(t.pick){t.reduce&&"count"===t.reduce.aggregator&&n.push('pick: superfluous because we can apply aggregator "count" to raw events');var a=i.validateFieldKeyPathV0_2(t.pick.field);a&&n.push("pick: "+a)}if(t.reduce){var u=t.reduce.aggregator,c="aggregator "+(o.stringify(u)||String(u)),s=t.reduce.n,f="index "+(o.stringify(s)||String(s));["sum","avg","max","min","count","nth"].includes(u)||n.push("reduce: "+c+" is unknown"),["sum","avg","max","min"].includes(u)&&(t.pick||n.push("reduce: "+c+" is impossible to use because no values have been picked")),"nth"===u?(("number"!=typeof s||isNaN(s)||Math.floor(s)!==s||s<0)&&n.push("reduce: "+f+" is not a non-negative integer (mandated by "+c+")"),t.sort||n.push('reduce: aggregator "nth" is meaningless without a specific sort order')):void 0!==s&&n.push("reduce: "+f+" is defined (not mandated by "+c+")")}if(n.length)throw new Error(n.join("\n"))}(t);var n={where:{op:"and",args:(t.filter||[]).map((function(t){return"age"===t.field[0]?i.relativeTimeComparison(t.comparator||"eq",t.value/i.MILLIS_IN_A_DAY):i.fieldComparison(t.comparator||"eq",i.convertFieldKeyPathFromSpecV0_2(t.field),t.value)}))}};if(t.reduce&&"count"===t.reduce.aggregator)return Object.assign(n,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var e=[],r=[];if(t.sort&&(t.sort.forEach((function(t){["ascending","descending"].includes(t.direction)&&(["time","age"].includes(t.field[0])&&r.push(t),"frequency"===t.field[0]&&e.push(t))})),r.length&&!e.length&&(n.orderBy=r.map((function(t){return"time"===t.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===t.direction?"ASC":"DESC"}:"age"===t.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===t.direction?"DESC":"ASC"}:void 0})).filter((function(t){return t})))),t.pick&&t.pick.field){var a=i.convertFieldKeyPathFromSpecV0_2(t.pick.field);if(t.reduce&&["avg","max","min","sum"].includes(t.reduce.aggregator))return Object.assign(n,{aggregate:[{op:t.reduce.aggregator,args:[{field:a}]}],select:[{field:[u.generateAlias(t.reduce.aggregator,a)]}]});n=e.length?Object.assign(n,{groupBy:[{field:a}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===e[0].direction?"ASC":"DESC"}],select:[{field:[a.join(".")]}]}):Object.assign(n,{select:[{field:a}]})}if(t.reduce&&"nth"===t.reduce.aggregator){var c=t.reduce.n;if("number"==typeof c&&c>=0&&Number(c)===Math.floor(Number(c)))return Object.assign(n,{offset:c,limit:1})}return n},i.convertFieldKeyPathFromSpecV0_2=function(t){return"tags"===t[0]&&"revenue"===t[1]?["r"]:[r.FIELDS_V0_2[t[0]]].concat(t.slice(1))},i.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},i.validateFieldKeyPathV0_2=function(t,n){var e="field "+(o.stringify(t)||String(t));if(!Array.isArray(t)||!t.every((function(t){return"string"==typeof t})))return e+" is not an array of strings";if("tags"===t[0]&&t.length>2||"tags"!==t[0]&&t.length>1)return e+" includes too many strings";if("tags"===t[0]&&t.length<2)return e+" does not specify an exact tag";if(t.length<1)return e+" does not specify a top-level field";var a=Object.keys(r.FIELDS_V0_2),u=["age","frequency"];return n===i.FieldPurpose.FILTER&&(a.push("age"),u=["frequency"]),n===i.FieldPurpose.SORT&&(a=["time","age","frequency"],u=["name","type","category","tags"]),u.includes(t[0])?e+" is not supported here":a.includes(t[0])?void 0:e+" is unknown"},i.validateComparatorAndValue=function(t,n){var e="comparator "+(o.stringify(t)||String(t)),i="value "+(o.stringify(n)||String(n));if("string"!=typeof t&&void 0!==t)return e+" is not a string";switch(t){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if("number"!=typeof n)return i+" is not a number (mandated by "+e+")";break;case"in":if(!Array.isArray(n))return i+" is not an array (mandated by "+e+")";break;case"between":if(!(Array.isArray(n)&&2===n.length&&"number"==typeof n[0]&&"number"==typeof n[1]&&n[0]<=n[1]))return i+" is not a pair of increasing numbers (mandated by "+e+")";break;case"regex":if(!("string"==typeof n||Array.isArray(n)&&2===n.length&&"string"==typeof n[0]&&"string"==typeof n[1]))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+e+")";break;case"exists":if(void 0!==n)return i+" is not undefined (mandated by "+e+")";break;default:return e+" is unknown"}}},986:function(t,n,e){var i=e(6592),r=e(7852),o=r.log.bind(r),a=e(8298),u=e(8859).getFieldValue,c=e(192),s=function(t,n,e){if(t.getValueOrDefault)return t.getValueOrDefault(n,e);if(!Array.isArray(n))return e;var i=u(t,n);return void 0===i&&(i=e),i},f=function(t){return"string"==typeof t?t.trim().toLowerCase():t};n.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},n.DEFAULT_FIELD=["*"],n.booleanOperators={eq:function(t){var n=t.map(f);return n[0]==n[1]},is:function(t){return t[0]===t[1]},gt:function(t){return t[0]>t[1]},lt:function(t){return t[0]<t[1]},gte:function(t){return t[0]>=t[1]},lte:function(t){return t[0]<=t[1]},in:function(t){return(t[1]||[]).map(f).includes(f(t[0]))},between:function(t){return t[1][0]<=t[0]&&t[0]<=t[1][1]},contains:function(t){var n=t.map((function(t){return"string"==typeof t?t.toLowerCase():t}));return-1!==(n[0]||"").indexOf(n[1])},regex:function(t){try{var n,e;return"string"==typeof t[1]?(n=t[1],e="i"):(n=t[1][0]||"",e=t[1][1]||""),new RegExp(n,e).test(t[0])}catch(t){return r.error("Rules",'In operator "regex", error: '+(t.message||"invalid RegExp /"+[n,e].join("/"))),!1}},exists:function(t){return void 0!==t[0]},and:function(t){return t.every((function(t){return t}))},or:function(t){return t.some((function(t){return t}))},not:function(t){return!t[0]}},n.arithmeticOperators={"+":function(t){return(t[0]||0)+(t[1]||0)},"-":function(t){return(t[0]||0)-(t[1]||0)},"/":function(t){return(t[0]||0)/(t[1]||1)},"%":function(t){return(t[0]||0)%(t[1]||1)}},n.aggregateOperators={sum:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=s(e[o],i,0);return r},avg:function(t,e){if(0===e.length)return 0;for(var i=t[0]||n.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=s(e[o],i,0);return r/e.length},max:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,o=0;o<e.length;o++)r=Math.max(r,s(e[o],i,Number.NEGATIVE_INFINITY));return r},min:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,o=0;o<e.length;o++)r=Math.min(r,s(e[o],i,Number.POSITIVE_INFINITY));return r},count:function(t,n){return n.length}};var l={now:function(){return a.now()}},d=function(t,e){if(e.hasOwnProperty("value"))return e.value;if(e.hasOwnProperty("field"))return s(t,e.field);if(e.hasOwnProperty("eval"))return e.eval in l?l[e.eval]():void r.error("Rules","Unknown function: "+e.eval);if(e.op){var i,o=(i=e.op)in n.booleanOperators?n.booleanOperators[i]:i in n.arithmeticOperators?n.arithmeticOperators[i]:null;if(o){var a=d.bind(null,t);return o((e.args||[]).map((function(t){return a(t)})),t)}r.error("Rules","Unknown operator: "+e.op)}else r.error("Rules","No operator specified: "+c.stringify(e))};n.generateAlias=function(t,n){return"_"+t+"_"+n.join(".")};n.rewrite=function(t){var e=[],i={};function o(t,a){if(Array.isArray(t)&&("and"!==t[0]&&"or"!==t[0]&&"not"!==t[0]&&r.error("Rules","Unexpected operation "+t[0]+". Continuing optimistically."),t={op:t[0],args:t.slice(1)}),t.hasOwnProperty("field")||t.hasOwnProperty("value")||t.hasOwnProperty("eval"))return t;if(a&&t.op in n.aggregateOperators){var u=(t.args&&t.args[0]||{}).field||n.DEFAULT_FIELD,c=n.generateAlias(t.op,u);return c in i||(e.push({op:t.op,args:t.args}),i[c]=!0),{field:[c]}}for(var s=[],f=t.args||[],l=0;l<f.length;l++)s[l]=o(f[l],a);return{op:t.op,args:s}}var a={};t.hasOwnProperty(n.clause.WHERE)&&(a[n.clause.WHERE]=o(t[n.clause.WHERE],!1)),t.hasOwnProperty(n.clause.HAVING)&&(a[n.clause.HAVING]=o(t[n.clause.HAVING],!0)),(t.hasOwnProperty(n.clause.AGGREGATE)||e.length>0)&&(a[n.clause.AGGREGATE]=(t[n.clause.AGGREGATE]||[]).concat(e));for(var u=[n.clause.GROUP_BY,n.clause.ORDER_BY,n.clause.SELECT,n.clause.OFFSET,n.clause.LIMIT],c=0;c<u.length;c++)t.hasOwnProperty(u[c])&&(a[u[c]]=t[u[c]]);return t.hasOwnProperty(n.clause.FROM)&&(a[n.clause.FROM]=n.rewrite(t[n.clause.FROM])),a};var v=function(t,e){e=e||0;var i=[];if(t.hasOwnProperty(n.clause.WHERE)?t[n.clause.WHERE].op?t[n.clause.WHERE].op in n.booleanOperators||i.push("Non-boolean WHERE clause operator"):i.push("Missing WHERE clause operator"):i.push("Missing WHERE clause"),!t.hasOwnProperty(n.clause.HAVING)||(t[n.clause.HAVING].op?t[n.clause.HAVING].op in n.booleanOperators||i.push("Non-boolean HAVING clause operator"):i.push("Missing HAVING clause operator")),t.hasOwnProperty(n.clause.GROUP_BY)&&!t.hasOwnProperty(n.clause.AGGREGATE)&&i.push("No AGGREGATE clause specified with GROUP_BY clause"),t.hasOwnProperty(n.clause.SELECT)){var r=t[n.clause.SELECT];if(Array.isArray(r))for(var o=0;o<r.length;o++)r[o].op&&r[o].op in n.aggregateOperators&&i.push('In SELECT clause, aggregate operator "'+r[o].op+'" specified in selector at index '+o);else i.push("SELECT clause must be an array")}if(t.hasOwnProperty(n.clause.OFFSET)){var a=t[n.clause.OFFSET];("number"!=typeof a||Number(a)<0||Number(a)!==Math.floor(Number(a)))&&i.push("OFFSET must be a non-negative integer")}if(t.hasOwnProperty(n.clause.LIMIT)){var u=t[n.clause.LIMIT];("number"!=typeof u||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&i.push("LIMIT must be a non-negative integer")}return e>0&&(i=i.map((function(t){return"Sub-rule "+e+": "+t}))),t.hasOwnProperty(n.clause.FROM)&&(i=i.concat(v(t[n.clause.FROM],e+1))),i},h=function(t,e){var i,a,u,f=e;if(t.hasOwnProperty(n.clause.FROM)&&(r.debug("Evaluating FROM clause:",t[n.clause.FROM]),f=h(t[n.clause.FROM],f),r.debug("Results after FROM:",f)),r.debug("Evaluating WHERE clause:",t[n.clause.WHERE]),f=f.filter((function(e){return d(e,t[n.clause.WHERE])})),r.debug("Results after WHERE:",f),t.hasOwnProperty(n.clause.AGGREGATE)){r.debug("Evaluating AGGREGATE clause:",t[n.clause.AGGREGATE]);var l=function(t,n){var e={};if(void 0===t||!Array.isArray(t)||0===t.length)return e["*"]={fieldValues:{},events:n},e;for(var i=t.map((function(t){return t.field})),r=0;r<n.length;r++){for(var o=n[r],a=[],u={},f=0;f<i.length;f++){var l=i[f],d=s(o,l),v=l.join(".");u[v]=d,a.push(encodeURIComponent(v)+"="+encodeURIComponent(c.stringify(d)))}var h=a.join("&");e.hasOwnProperty(h)||(e[h]={fieldValues:u,events:[]}),e[h].events.push(o)}return e}(t[n.clause.GROUP_BY],f);f=function(t,n){var e=[];return Object.keys(t).forEach((function(i){var r=t[i],o=Object.assign({},r.fieldValues),a=n[i]||{};Object.assign(o,a),e.push(o)})),e}(l,(i=t[n.clause.AGGREGATE],a=l,u={},Object.keys(a).forEach((function(t){var e=a[t];u[t]={};for(var o=0;o<i.length;o++){var c=i[o],s=c.op;if(s in n.aggregateOperators){var f=(c.args&&c.args[0]||{}).field||n.DEFAULT_FIELD,l=n.generateAlias(s,f),d=n.aggregateOperators[s]([f],e.events);u[t][l]=d}else r.error("Rules","Unknown aggregate operator "+s)}})),u)),r.debug("Results after AGGREGATE:",f)}t.hasOwnProperty(n.clause.HAVING)&&(r.debug("Evaluating HAVING clause:",t[n.clause.HAVING]),f=f.filter((function(e){return d(e,t[n.clause.HAVING])})),r.debug("Results after HAVING:",f)),t.hasOwnProperty(n.clause.ORDER_BY)&&(r.debug("Evaluating ORDER_BY clause:",t[n.clause.ORDER_BY]),f=function(t,n){return Array.isArray(t)?0===t.length?n:n.sort((function(n,e){for(var i=0;i<t.length;i++){var r=t[i],o="ASC"===(r.direction||"ASC")?1:-1,a=r.field,u=s(n,a,0),c=s(e,a,0);if(u<c)return-o;if(u>c)return o}return 0})):(o("Rules","groupBy rule must be an array"),n)}(t[n.clause.ORDER_BY],f),r.debug("Results after ORDER_BY:",f));var v,p=0;return t.hasOwnProperty(n.clause.OFFSET)&&(r.debug("Evaluating OFFSET clause:",t[n.clause.OFFSET]),p=Number(t[n.clause.OFFSET])),t.hasOwnProperty(n.clause.LIMIT)&&(r.debug("Evaluating LIMIT clause:",t[n.clause.LIMIT]),v=p+Number(t[n.clause.LIMIT])),(p>0||void 0!==v)&&(f=f.slice(p,v),r.debug("Results after OFFSET/LIMIT:",f)),t.hasOwnProperty(n.clause.SELECT)&&(r.debug("Evaluating SELECT clause:",t[n.clause.SELECT]),f=function(t,n){return n.map((function(n){return t.map((function(t){return d(n,t)}))}))}(t[n.clause.SELECT],f),r.debug("Results after SELECT:",f)),f};n.execute=function(t,e){t=n.rewrite(t),r.shouldLog(i.LogLevel.DEBUG)&&r.groupCollapsed("Evaluating Behavioral Rule"),r.debug("Rule:",t,c.stringify(t)),r.debug("Events:",e);var o=v(t);if(o.length>0)throw new Error("Rule "+c.stringify(t)+" has violations: "+o.join("\n"));var a=h(t,e);return r.debug("Rule result:",a),r.shouldLog(i.LogLevel.DEBUG)&&r.groupEnd(),a},n.isSatisfied=function(t,e){try{return n.execute(t,e).length>0}catch(n){return r.error("Rules","Error "+n.toString()+" while evaluating rule "+c.stringify(t)),!1}}},9728:function(t,n,e){t.exports=function(t){t.registerDependency("sources/browser_id",e(4977)),t.registerVisitorProfileProvider(e(381)),t.registerVisitorProfileProvider(e(4138)),t.registerAudienceMatcher("browser_version",e(5374))}},5374:function(t,n,e){var i=e(2424).G;t.exports={fieldsNeeded:["browserVersion","browserId"],match:function(t,n){var e=n.value,r=t.browserId,o=t.browserVersion;if(0===e.indexOf(r)){var a=e.substr(r.length);return 0===i(o,a)}return!1}}},381:function(t){t.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(t){return t.getId()}]}},4138:function(t){t.exports={provides:"browserVersion",getter:["sources/browser_id",function(t){return t.getVersion()}]}},4977:function(t,n,e){var i=e(3498);n.getId=function(){return i.get().browser.id},n.getVersion=function(){return i.get().browser.version}},2163:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9298)),t.registerAudienceMatcher("campaign",e(7701))}},7701:function(t,n,e){var i=e(2973);t.exports={fieldsNeeded:["campaign"],match:function(t,n){return i.hasMatch(n.value,n.match,t.campaign)}}},9298:function(t,n,e){var i=e(6022);t.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}},8983:function(t,n,e){var i=e(192),r=e(8260),o=e(7852),a=e(4285),u=e(8264);n.getCmabPredictionUrl=function(){return"https://prediction.cmab.optimizely.com/predict"},n.getCmabPredictionUrlForExperiment=function(t){return t?n.getCmabPredictionUrl()+"/"+t:""},n.createPayload=function(t,n){var e=t.variations.map((function(t){return t.id})),i=u.getVisitorCmabAttributesForExperiment(t),r=u.getDcpCustomerIds(),o=u.getDcpServiceId();return{instances:[{visitorId:a.getCurrentId(),experimentId:t.id,cmabUUID:n,variationIds:e,attributes:i,dcpCustomerIds:r,dcpServiceId:o}]}},n.parseApiResponse=function(t){var n=null;try{n=i.parse(t)}catch(t){return o.error("CMAB API / Error parsing response:",t),null}return n&&n.predictions&&0!==n.predictions.length?n.predictions[0].variation_id.toString():(o.debug("CMAB API / No predictions found in API response",n),null)},n.validateVariationId=function(t,n){return t&&n.variations.find((function(n){return n.id===t}))?(o.debug("CMAB API / Variation ID:",t,"from API response found in experiment:",n.id),t):(o.debug("CMAB API / Variation ID:",t,"from API response not found in experiment:",n.id),null)},n.handleCmabApiResponse=function(t,e){if(200!==t.status)return o.error("CMAB API / API call failed with status:",t.status,t.statusText),null;o.debug("CMAB API / API call successful:",t.responseText);var i=n.parseApiResponse(t.responseText);return n.validateVariationId(i,e)},n.makeSyncApiCallWithXHR=function(t,e){o.debug("CMAB API / SYNC / Making a synchronous API call to get variation.");try{var r=n.createPayload(t,e),a=n.getCmabPredictionUrlForExperiment(t.id),u=new XMLHttpRequest;return u.open("POST",a,!1),u.send(i.stringify(r)),n.handleCmabApiResponse(u,t)}catch(t){return o.error("CMAB API / SYNC / API call encountered an error:",t),null}},n.makeAsyncApiCall=function(t,e){o.debug("CMAB API / ASYNC / Making an asynchronous API call to get variation.");var i=n.createPayload(t,e),a=n.getCmabPredictionUrlForExperiment(t.id);return r.request({url:a,contentType:"application/json",method:"POST",data:i})}},2855:function(t,n,e){var i=e(7852),r=e(8264),o=e(8983),a=e(4855);n.isCmabEnabled=function(){return!0},n.isExperimentSyncApiEnabled=function(t){return!0},n.defaultToSnippetBucketing=function(t,n,e){i.debug("CMAB / Defaulting to snippet bucketing with variation:",n,"for experiment:",t.id),r.setCmabVariationDataInVisitorStore(t,n,e)},n.processCmabExperiment=function(t,e){if(!n.isCmabEnabled())return i.debug("CMAB / Feature flag is disabled. Defaulting to snippet bucketing with variation:",e,"for experiment:",t.id),e;if(i.debug("CMAB / Feature flag is enabled. Processing CMAB for experiment:",t.id),r.activateTimeoutForNonBucketedCmabExperiments(t),!r.isCmabExperiment(t))return e;var u=r.getCmabVariationDataFromVisitorStore(t);if(!r.isCmabTimeout(t,u))return u.variationId;a.startCmabApiCallPerformanceTimer(t.id);var c=null,s=r.generateCmabUUID();if(n.isExperimentSyncApiEnabled(t))try{return(c=o.makeSyncApiCallWithXHR(t,s))?(r.setCmabVariationDataInVisitorStore(t,c,s),a.endCmabApiCallPerformanceTimer(t.id),c):(n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),e)}catch(r){return i.error("CMAB API / SYNC / API call failed with error:",r),n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),null}return o.makeAsyncApiCall(t,s).then((function(u){return(c=o.handleCmabApiResponse(u,t))?(i.debug("CMAB API / ASYNC / Variation:",c,"for experiment:",t.id),r.setCmabVariationDataInVisitorStore(t,c,s),a.endCmabApiCallPerformanceTimer(t.id),c):(n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),e)}),(function(r){return i.error("CMAB API / ASYNC / API call failed with error:",r),n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),null})),n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),e},n.getCmabUUIDAndUpdateSessionTimeout=function(t,n){var e=r.getCmabUUIDFromVisitorStore(t,n);return r.updateCmabTimeoutInVisitorStore(t,n),e}},4855:function(t,n,e){e(5010),e(7852);n.startCmabApiCallPerformanceTimer=function(t){0},n.endCmabApiCallPerformanceTimer=function(t){0}},8264:function(t,n,e){var i=e(8275),r=i.omit,o=i.omitBy,a=e(1691),u=e(192),c=e(2025),s=e(9899),f=e(4285),l=e(7852),d=e(6592),v=e(5914),h=c.get("stores/visitor"),p=c.get("stores/plugins"),g=c.get("stores/global"),m=c.get("stores/layer");n.generateCmabUUID=function(){return s.generate()},n.getCmabLayerIdFromExperiment=function(t){return t.experimentMetadata&&t.experimentMetadata.layerId||t.id},n.isCmabExperiment=function(t){var n=t.experimentMetadata&&t.experimentMetadata.allocationPolicy;return n?n===d.AllocationPolicyEnum.CMAB:(l.debug("No allocation policy found in metadata for experiment:",t.id),!1)},n.isVisitorInHoldback=function(t){if(g.isGlobalHoldback())return l.debug("CMAB / Visitor is in global holdback, no timeout"),!0;var e=n.getCmabLayerIdFromExperiment(t),i=m.getLayerState(e);return!!(i&&i.decision&&i.decision.isLayerHoldback)&&(l.debug("CMAB / Visitor is in layer holdback, no timeout"),!0)},n.isCmabTimeout=function(t,e){if(!n.isCmabVariationStorageDataValid(e))return l.debug("CMAB / Timeout CMAB Storage Variation Data is invalid"),!0;if(n.isVisitorInHoldback(t))return!1;var i=e.variationId;return t.variations.find((function(t){return t.id===i}))?n.hasSessionOrAbsoluteTimeoutOccurred(e)?(l.debug("CMAB / Timeout Session or absolute timeout occurred:",e.cmabUUID),!0):(l.debug("CMAB / No timeout happened for:",e.cmabUUID),!1):(l.debug("CMAB / Timeout Variation ID:",i,"not found in experiment:",t.id),!0)},n.hasSessionOrAbsoluteTimeoutOccurred=function(t){if(!n.isCmabVariationStorageDataValid(t))return l.debug("CMAB / Timeout CMAB Storage Variation Data is invalid"),!0;var e=(new Date).getTime();new Date(t.stSessionTimeout).getTime();return e-new Date(t.stAbsoluteTimeout).getTime()>864e5},n.isCmabVariationStorageDataValid=function(t){if(!t)return!1;for(var n=["variationId","visitorId","cmabUUID","stSessionTimeout","stAbsoluteTimeout","userAttributeHash"],e=0;e<n.length;e++){var i=n[e];if(!t[i])return l.debug("CMAB / Storage data not found: "+i+" is missing"),!1}return!0},n.activateTimeoutForNonBucketedCmabExperiments=function(t){var e=n.getCmabLayerIdFromExperiment(t),i=t.id;l.debug("CMAB / Visitor is bucketed into experiment id:",i+" from layer id:",e);var a=f.getContextualMabMap();if(a&&a[e]){var u=a[e];l.debug("CMAB / All CMAB experiments found for the layer id:",e,"are:",u),l.debug("CMAB / Excluding the currently bucketed experiment id: ",i," from all CMAB experiments found for the current layer id: ",e);var c=r(u,[i]);c=o(c,(function(t){return t.isTimeout})),l.debug("CMAB / Non-bucketed CMAB experiments which will be timed out:",c),Object.keys(c).forEach((function(t){var n=c[t];n.isTimeout=!0,f.updateContextualMabMap(e,t,n)})),f.persistContextualMabMap()}else l.debug("CMAB / No CMAB experiments found for the current layer id:",e)},n.getCmabUUIDFromVisitorStore=function(t,n){if(!n||!t)return null;var e=f.getContextualMabMap();return e&&e[t]&&e[t][n]?e[t][n].cmabUUID:null},n.updateCmabTimeoutInVisitorStore=function(t,e){var i;if(!e||!t)return null;var r=f.getContextualMabMap();if(null==r||null==(i=r[t])?void 0:i[e]){var o=r[t][e];o.isTimeout||n.hasSessionOrAbsoluteTimeoutOccurred(o)||(o.stSessionTimeout=(new Date).toISOString(),f.updateContextualMabMap(t,e,o),f.persistContextualMabMap())}},n.getCmabVariationDataFromVisitorStore=function(t){var e,i=n.getCmabLayerIdFromExperiment(t),r=f.getContextualMabMap();if(!(null==r||null==(e=r[i])?void 0:e[t.id]))return l.debug("CMAB / No CMAB store found for experiment:",t.id),null;l.debug("CMAB / CMAB store found for experiment:",t.id);var o=r[i][t.id];return l.debug("CMAB / Contextual MAB Variation Data:",o),o},n.setCmabVariationDataInVisitorStore=function(t,e,i){l.debug("CMAB / Setting CMAB store for experiment:",t.id+" with variation:",e+" and cmabUUID:",i);var r=(new Date).toISOString(),o=n.getCmabLayerIdFromExperiment(t),a=n.getVisitorAttributesHash(t),u={variationId:e,visitorId:f.getCurrentId(),cmabUUID:i,stSessionTimeout:r,stAbsoluteTimeout:r,userAttributeHash:a,isTimeout:!1};f.updateContextualMabMap(o,t.id,u),f.persistContextualMabMap()},n.getStringifiedValue=function(t){if("string"==typeof t)return t;var n="";try{n=u.stringify(t)}catch(n){l.error("CMAB / Failed to stringify value for attributes:",t,n)}return n},n.getVisitorCmabAttributesForExperiment=function(t,i){var r;void 0===i&&(i=!0);var o=[],a=p.getAllPlugins(d.PluginTypes.audienceMatchers);if(!(null==t||null==(r=t.experimentMetadata)?void 0:r.cmabAttributes))return o;var u=t.experimentMetadata.cmabAttributes,c=u.customAttributes,s=u.standardAttributes;if(c.forEach((function(t){var e,i=(null==(e=h.getAttribute(["custom",t.id]))?void 0:e.value)||"";i=n.getStringifiedValue(i),o.push({id:t.id,type:t.type,value:i,client_api_name:t.clientApiName})})),s.forEach((function(t){var e,i,r=(null==(e=a[t.id])||null==(i=e.fieldsNeeded)?void 0:i[0])||t.id,u=h.getAttribute(r)||"";u=n.getStringifiedValue(u),o.push({id:t.id,type:t.type,value:u})})),i){var f=e(5560),v=t.experimentMetadata.cmabAttributes.vbaAttributes;if(v&&v.length)try{var g=e(8620).getEvents();g.length>=e(4938).MAX_EVENTS&&l.warn("CMAB / VBA / Behavior store is full; counts may miss evicted events"),o=o.concat(f.buildVbaFeatures(v,g,e(8298).now()))}catch(t){l.warn("CMAB / VBA / Error building visitor behavior attributes",t)}}return l.debug("CMAB / Current Visitor CMAB Attributes for Experiment:",t.id,"are:",o),o},n.generateAttributesHash=function(t){return a.hashToHex(a.toByteString(u.stringify(t)),a.Seed.BEHAVIOR_EVENT)},n.getVisitorAttributesHash=function(t){var e=n.getVisitorCmabAttributesForExperiment(t,!1);return n.generateAttributesHash(e)},n.hasAttributesChanged=function(t,e){var i=n.getVisitorAttributesHash(t);return i!==e.userAttributeHash&&(l.debug("CMAB / User attributes hash has changed from:",e.userAttributeHash," to ",i),!0)},n.getDcpCustomerIds=function(){var t=g.getDCPKeyfieldLocators(),n=f.getCurrentId();return v.getCurrentAliases(t,n)},n.getDcpServiceId=function(){return g.getDCPServiceId()}},5560:function(t,n,e){var i=e(1489),r=e(7852),o=Object.freeze([]);function a(t,n){return t&&"function"==typeof t.getValueOrDefault?t.getValueOrDefault([n]):t&&t[n]}function u(t){return a(t,i.FIELDS.TYPE)}function c(t){return a(t,i.FIELDS.TIME)}function s(t,n){return(t||"")+"\n"+n}n.buildVbaFeatures=function(t,n,e){for(var f=function(t){for(var n=Object.create(null),e=0;e<t.length;e++){var r=a(t[e],i.FIELDS.NAME),o=c(t[e]);if("string"==typeof r&&"number"==typeof o)for(var f=u(t[e]),l=f?[s("",r),s(f,r)]:[s("",r)],d=0;d<l.length;d++)n[l[d]]||(n[l[d]]=[]),n[l[d]].push(o)}return n}(n||[]),l=[],d=0;d<t.length;d++){var v=t[d];if(v&&"string"==typeof v.featureName&&v.featureName){var h=v.vbaWindow;if("number"!=typeof h||!isFinite(h)||h%1!=0||h<=0)r.warn("CMAB / VBA / skipping",v.featureName,"with window:",v.vbaWindow);else{for(var p=e-864e5*h,g=f[s(v.vbaKind,v.id)]||o,m=0,b=0;b<g.length;b++)g[b]>p&&g[b]<=e&&m++;l.push({id:v.featureName,type:"visitor_behavior_attribute",value:m})}}else r.warn("CMAB / VBA / skipping attribute with no featureName:",v)}return l}},8252:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9102)),t.registerAudienceMatcher("cookies",e(2145))}},2145:function(t,n,e){var i=e(2973);t.exports={fieldsNeeded:["cookies"],match:function(t,n){var e=n.name,r=n.value,o=n.match,a=t.cookies[e];return i.hasMatch(r,o,a)}}},9102:function(t,n,e){var i=e(6278),r=e(2025).get("stores/audience_data");t.exports={provides:"cookies",isLazy:!0,getter:[function(){var t=i.getAll(),n=r.getFeaturesNeeded("cookies");return Object.keys(t).reduce((function(e,i){var r=t[i];return Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=r),e}),{})}]}},2085:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(5532));var n=e(4417);t.registerAudienceMatcher("custom_attribute",n),t.registerAudienceMatcher("custom_dimension",n)}},4417:function(t,n,e){var i=e(2973);n.match=function(t,n){var e;return t.custom&&(e=t.custom[n.name]),"object"==typeof e&&null!==e&&(e=e.value),i.hasMatch(n.value,n.match,e)}},5532:function(t,n,e){var i=e(6592),r=e(7852),o=e(2025).get("stores/dimension_data");t.exports={provides:"custom",attributionType:i.AttributionTypes.LAST_TOUCH,restorer:function(t){return Object.keys(t).reduce((function(n,e){var i=t[e],a=e,u=o.getByApiName(e),c=o.getById(e);return"object"!=typeof i||null===i?(r.error('Unable to restore custom attribute "'+e+'" because value is not an object'),n):(!i.id&&u&&(c=u,a=u.id,Object.assign(i,{id:c.segmentId||c.id})),!i.name&&c&&c.apiName&&(i.name=c.apiName),i.id||c||r.warn("Unable to determine ID for custom attribute:",e,"; segmentation is disabled."),n[a]=i,n)}),{})},shouldTrack:!0}},5914:function(t,n,e){var i=e(6022),r=e(6278),o=e(7852),a=e(9454),u="cookie",c="js_variable",s="query_param",f="uid";n.getCurrentAliases=function(t,n){var e={};return t.forEach((function(t){if(!t.is_optimizely){var l=t.dcp_datasource_id,d=t.type,v=t.name||"";if(l){var h=null;switch(d){case u:h=r.get(v);break;case c:try{h=a.getGlobal(v)}catch(t){o.warn("Failed getting global DCP keyfieldLocator:",v)}break;case s:h=i.getQueryParamValue(v);break;case f:h=n}("number"==typeof h||"string"==typeof h)&&(e[l]=h)}else o.error("DCP / No DCP datasource id specified")}})),e}},6591:function(t,n,e){t.exports=function(t){t.registerDependency("sources/device",e(8822)),t.registerVisitorProfileProvider(e(2422)),t.registerAudienceMatcher("device",e(1125))}},1125:function(t){t.exports={fieldsNeeded:["device"],match:function(t,n){return t.device===n.value}}},2422:function(t){t.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(t){return t.getDevice()}]}},8822:function(t,n,e){var i=e(3498);n.getDevice=function(){var t=i.get().device;return"unknown"!==t.model?t.model:"tablet"===t.type?"tablet":t.isMobile?"mobile":"desktop"}},2452:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(7726)),t.registerAudienceMatcher("device_type",e(9857))}},9857:function(t){t.exports={fieldsNeeded:["device_type"],match:function(t,n){return t.device_type===n.value}}},7726:function(t,n,e){var i=e(3498);t.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var t=i.get().device;switch(t.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return t.type;default:return"other"}}]}},39:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(8511)),t.registerAudienceMatcher("query",e(4127))}},4127:function(t,n,e){var i=e(2973);n.fieldsNeeded=["queryParams"],n.match=function(t,n){var e=t.queryParams.find((function(t){return t[0]===n.name}));return i.hasMatch(n.value,n.match,e?e[1]:null)}},8511:function(t,n,e){var i=e(6022);t.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}},6917:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9732)),t.registerAudienceMatcher("referrer",e(8881))}},8881:function(t,n,e){var i=e(6582);n.fieldsNeeded=["referrer"],n.match=function(t,n){return null!==t.referrer&&i(t.referrer,n)}},9732:function(t,n,e){var i=e(1019),r=e(3272);t.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var t=r.getReferrer()||i.getReferrer();return""===t&&(t=null),t}]}},945:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(3474)),t.registerAudienceMatcher("source_type",e(9007))}},9007:function(t,n,e){var i=e(2973);n.fieldsNeeded=["source_type"],n.match=function(t,n){return i.hasMatch(n.value,n.match,t.source_type)}},3474:function(t,n,e){var i=e(6022),r=e(1019),o=e(3272),a=e(327),u=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/","https://(www)?\\.google\\..*?/?$","https://search\\.yahoo\\..*?/?$","https://(www)?\\.bing\\..*?/?$"];t.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(t,n){var e,c=t(),s=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("utm_campaign")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var t=o.getReferrer()||r.getReferrer(),n=0;n<u.length;n++){var e=u[n];if(t.match(e))return"search"}return t&&a.guessDomain(t)!==a.guessDomain(i.getUrl())?"referral":"direct"}();e=s,(!c||"direct"!==e)&&n(s)}}]}},2819:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(1708)),t.registerVisitorProfileProvider(e(5435)),t.registerAudienceMatcher("time_and_day",e(2117))}},2117:function(t,n,e){var i=e(9665);n.fieldsNeeded=["currentTimestamp"],n.match=function(t,n){return i.test(n.value,new Date(t.currentTimestamp))}},1708:function(t,n,e){var i=e(8298);t.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}},5435:function(t){t.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}},9665:function(t,n){function e(t){var n=t.split(":");if(2!==n.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+t);return 60*parseInt(n[0],10)+parseInt(n[1],10)}n.test=function(t,n){var i=function(t){var n=t.split("_");if(3!==n.length)throw new Error("Invalid time and day string "+t);var e=n[2].split(",");return{start_time:n[0],end_time:n[1],days:e}}(t),r=e(i.start_time),o=e(i.end_time),a=60*n.getHours()+n.getMinutes(),u=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][n.getDay()];return a>=r&&a<=o&&i.days.includes(u)}},1823:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9078))}},9078:function(t){t.exports={provides:"visitorId",getter:["stores/visitor_id",function(t){return t.getRandomId()}]}},1592:function(t,n,e){var i,r=e(192),o=e(7852),a=e(5010),u=e(5385),c=e(6938),s=e(9454),f=e(7566),l=e(3111),d=e(6761),v=e(409),h=e(2025),p=e(136),g=h.get("stores/tracker_optimizely"),m=h.get("stores/rum"),b=h.get("stores/integration_settings"),_="google_analytics_4",y="gtag",w="dataLayer",E="optimizely_decision",I="experience_impression",A=[],T=function(){var t=g.canSend();if(o.debug("GA4 Integration: Got canSend:",t),t){for(var n=[];A.length>0;){o.debug("GA4 Integration: decisionEventQueue length:",A.length);var e=A.shift(),r=e.firstPartyData,a=e.customEventData;o.debug("GA4 Integration: calling track with decision data:",{firstPartyData:r,customEventData:a}),i?n.push(O(r,a).catch((function(t){o.warn("Tracker for GTM ",_,"failed:",t)}))):n.push(S(r,a).catch((function(t){o.warn("Tracker for ",_,"failed:",t)})))}return Promise.all(n)}return o.debug("GA4 Integration: Not sending events (holding)"),Promise.resolve()},S=function(t,n){return u.pollFor((function(){return function(t){var n=t.getGlobal(y);return n||null}(s)}),200,50).then((function(e){o.log("GA4 Integration: gtag finally exists, sending now."),m.getSampleRum()&&a.timeEnd("gtagReady"),o.debug("GA4 Integration: calling ga4 with data: "+r.stringify(t)),e("event",I,t),o.debug("GA4 Integration: calling ga4 with custom event data: "+r.stringify(n)),e("event",E,n)}))};var O=function(t,n){var e=s.getGlobal(w);o.debug("GA4 Integration: found dataLayer object "+e),e||(o.debug("GA4 Integration: dataLayer object "+w+" is empty, initializing it"),s.setGlobal(w,[]),e=s.getGlobal(w)),o.log("GA4 Integration: attempting push to "+w);try{var i=Object.assign({event:I},t);o.debug("GA4 Integration: pushing data to GTM: "+r.stringify(i)),e.push(i);var a=Object.assign({event:E},n);o.debug("GA4 Integration: pushing custom data to GTM: "+r.stringify(a)),e.push(a)}catch(t){o.warn("GA4 Integration: Push to "+w+" failed: "+t)}return Promise.resolve()},k={preRedirectPolicy:c.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:c.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:c.NonRedirectPolicies.TRACK_IMMEDIATELY,trackLayerDecision:function(t){var n=t.integrationSettings;if(!n||!n[_])return o.debug("GA4 Integration: did not find vendor "+_+" in integration settings, exiting"),d.resolve();if(!t.experimentId||!t.variationId)return o.debug("GA4 Integration: empty experiment or variation ID, exiting"),d.resolve();var e=b.get(_)||{};i="on"===e.global_is_use_gtm||"on"===n[_].is_using_gtm,o.debug("GA4 Integration: is using GTM: "+i);var r,a,u,c="equal_priority"===t.layerPolicy;return o.debug("GA4 Integration: is personalization campaign: "+c),c?(u="OPT-"+t.layerId+"("+t.layerName+")-"+t.experimentId+"("+t.experimentName+")-"+t.variationId+"("+t.variationName+")",a={Campaign:t.layerName+" ("+t.layerId+")",Variation:t.variationName+" ("+t.variationId+")",Holdback:t.isLayerHoldback}):(u="OPT-"+t.experimentId+"("+t.experimentName+")-"+t.variationId+"("+t.variationName+")",a={Experiment:t.experimentName+" ("+t.experimentId+")",Variation:t.variationName+" ("+t.variationId+")",Holdback:t.isLayerHoldback}),r={exp_variant_string:u,Holdback:t.isLayerHoldback},o.debug("GA4 Integration: pushing decision data to queue:",{firstPartyData:r,customEventData:a}),A.push({firstPartyData:r,customEventData:a}),T()},serializeSettings:r.stringify,deserializeSettings:r.parse};t.exports=function(t){t.registerAnalyticsTracker("google_analytics_4",k),f.on({filter:{type:l.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){v.dispatch(p.SET_TRACKER_SEND_EVENTS,!0),T()}}),f.on({filter:{type:l.TYPES.ANALYTICS,name:"maybeSendEvents"},handler:function(){T()}})}},2153:function(t,n,e){var i=e(192),r=e(7852),o=e(5385),a=e(3272),u=e(6938),c=e(9454),s="google_universal_analytics",f=e(9207);var l=function(t,n){return o.pollFor((function(){return function(t){var n=t.getGlobal("GoogleAnalyticsObject");return n?t.getGlobal(n):null}(c)}),200,50).then((function(e){var i=n.universal_analytics_tracker,r=i?i+".":"",o=n.universal_analytics_slot,u=a.getReferrer();u&&e(r+"set","referrer",u);var c={nonInteraction:!0};c["dimension"+o]=t,e(r+"send","event","Optimizely","Assigned To Campaign",c)}))},d={preRedirectPolicy:u.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:u.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:u.NonRedirectPolicies.TRACK_IMMEDIATELY,trackLayerDecision:function(t){var n=t.integrationSettings;if(n&&n[s]&&t.experimentId&&t.variationId){var e={id:t.layerId,name:t.layerName,policy:t.layerPolicy,integrationStringVersion:t.integrationStringVersion},i={id:t.experimentId,name:t.experimentName},o={id:t.variationId,name:t.variationName},a=t.isLayerHoldback,u=f.generateAnalyticsString(e,i,o,a,150,!0);if(u)return l(u,n[s]).catch((function(t){r.warn("Tracker for",s,"failed:",t)}))}},serializeSettings:i.stringify,deserializeSettings:i.parse};t.exports=function(t){t.registerAnalyticsTracker("google_universal_analytics",d)}},9807:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.omit,a=i.pick,u=e(8841),c=e(9899),s=e(136),f=e(8130).v,l=e(192),d=e(7852),v=e(6938),h=e(4285),p=e(9454),g=e(8260),m=e(2025),b=(e(1019),e(7566)),_=e(3111),y=e(409),w=m.get("stores/global"),E=m.get("stores/tracker_optimizely"),I=e(2855),A=n.Error=f("OptimizelyTrackerError"),T="client_activation",S="campaign_activated",O="view_activated",k={revenue:{validate:L,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:L,sanitize:Math.floor,excludeFeature:!0},value:{validate:L,sanitize:function(t){return t}}},R="AUTO",C=[function(){return function(t){V(function(t){var n=Object.assign({entity_id:t.pageId,key:t.pageApiName,timestamp:t.timestamp,uuid:t.eventId,type:O},j(t.eventTags));return n}(t),t.userFeatures,Q(t.layerStates))}}],N=[function(){return function(t){!function(t){var n=null!==w.getAnonymizeIP()?w.getAnonymizeIP():void 0,e={account_id:t.accountId,anonymize_ip:n,client_name:t.clientName,client_version:t.clientVersion,project_id:t.projectId,visitors:[]};e.revision=t.revision,e.enrich_decisions=!0;var i={session_id:z(t.sessionId),visitor_id:t.visitorId,attributes:[],snapshots:[]},r=Q(t.layerStates);y.dispatch(s.REGISTER_TRACKER_VISITOR,{data:e,visitor:i,decisions:r}),J()}(t),V(function(t){return{entity_id:null,type:T,uuid:t.eventId,timestamp:t.timestamp}}(t),t.userFeatures,Q(t.layerStates))}}],D=[function(){return function(t){var n;V((n=t,Object.assign({entity_id:n.eventEntityId,key:n.eventApiName,timestamp:n.timestamp,uuid:n.eventId,type:n.eventCategory,properties:M(n.eventProperties)},j(n.eventTags))),t.userFeatures,Q(t.layerStates))}}],x=[function(){return function(t){var n;V((n=t,Object.assign({entity_id:n.eventEntityId,key:n.eventApiName,timestamp:n.timestamp,uuid:n.eventId,type:n.eventCategory},j(n.eventTags))),t.userFeatures,Q(t.layerStates))}}];function j(t){var n=function(t,n,e){try{P(e),t[n]=e}catch(t){u.emitError(new A("Bad value for eventTags["+n+"]: "+t.message))}return t},e=Object.keys(k),i=o(t,e),r=a(t,e),c=Object.keys(i).reduce((function(t,e){return n(t,e,i[e])}),{}),s=Object.keys(r).reduce((function(t,e){var i=r[e],o=k[e];o.excludeFeature||n(c,e,i);try{o.validate(i),t[e]=o.sanitize(i),c[e]=t[e]}catch(t){u.emitError(new A("Bad value for eventMetrics["+e+"]: "+t.message))}return t}),{});return s.tags=c,s}function M(t){var n={},e={},i=0;for(var r in t){var o=t[r];"object"==typeof o&&null!==o?e[r]=o:i<15?(n[r]=o,i++):e[r]=o}return Object.keys(e).length>0&&d.log("Custom event properties dropped (complex values, or over the 15-property limit). The following properties were not pushed",e),n}function P(t){if(null==t)throw new Error("Feature value is null");if("object"==typeof t){var n;try{n=l.stringify(t)}catch(t){}throw new Error('Feature value is complex: "'+n)}}function L(t){if(null==t)throw new Error("Metric value is null");if("number"!=typeof t)throw new Error("Metric value is not numeric")}function U(t){return(t||[]).reduce((function(t,n){try{P(n.value),t.push({entity_id:n.id||null,key:n.name,type:n.type,value:n.value})}catch(t){d.warn("Error evaluating user feature",n,t)}return t}),[])}function V(t,n,e){y.dispatch(s.REGISTER_TRACKER_EVENT,{event:t,decisions:e}),B(n),J()}function B(t){var n=U(t);y.dispatch(s.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:n})}function z(t){return R}function F(){if(E.canSend()){var t=E.hasEventsToSend(),n=E.hasPreviousBatchesToSend();t||n?(n&&(E.getPreviousBatches().forEach(G),y.dispatch(s.RESET_TRACKER_PREVIOUS_BATCHES)),t&&(y.dispatch(s.FINALIZE_BATCH_SNAPSHOT),G(E.getEventBatch()),y.dispatch(s.RESET_TRACKER_EVENTS))):d.debug("Not sending events because there are no events to send")}else d.debug("Not sending events (holding)")}function G(t){d.debug("Sending ticket:",t);var n=c.generate(),e={url:"https://logx.optimizely.com/v1/events",method:"POST",data:q(t)};E.shouldUseBeacon()?g.sendBeacon(e,n):g.retryableRequest(e,n)}function q(t){return Object.assign({},a(t,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:t.visitors.map(H)})}function H(t){return{visitor_id:t.visitor_id,session_id:R,attributes:t.attributes.map(Y),snapshots:t.snapshots.map(K)}}function Y(t){return X(t,{entity_id:"e",key:"k",type:"t",value:"v"})}function K(t){var n=t.events;return n=function(t){var n=t.reduce((function(t,n){var e;if(t[e=n.type===O&&r(n.tags)&&r(a(n,Object.keys(k)))?n.type:n.uuid]){var i=t[e].timestamp;n.timestamp>i&&(i=n.timestamp),t[e]=Object.assign({},t[e],{key:t[e].key+"-"+(n.key||""),entity_id:t[e].entity_id+"-"+n.entity_id,timestamp:i})}else t[e]=n;return t}),{});return Object.values(n)}(n),{activationTimestamp:w.getActivationTimestamp(),decisions:t.decisions.map($),events:n.map(W)}}function $(t){var n=X(t,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"});return n.m=t.metadata?X(t.metadata,{cmab_uuid:"cmab_uuid"}):{},n}function W(t){return t.key===S&&(t.type=S,delete t.key),X(t,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",properties:"p",timestamp:"t",uuid:"u",value:"v",type:"y"})}function X(t,n){return Object.keys(t).reduce((function(e,i){var r=t[i];return i in n&&(e[n[i]||i]=r),e}),{})}function J(){if(E.shouldBatch()){if(!E.isPolling()){p.setTimeout((function t(){F(),E.isPolling()&&p.setTimeout(t,1e3)}),1e3),y.dispatch(s.SET_TRACKER_POLLING,!0),p.setTimeout((function(){y.dispatch(s.SET_TRACKER_BATCHING,!1),y.dispatch(s.SET_TRACKER_POLLING,!1)}),1e4)}}else F()}function Q(t){return t.map((function(t){var n=I.getCmabUUIDAndUpdateSessionTimeout(t.layerId,t.decision.experimentId),e=n?{cmab_uuid:n}:{};return{campaign_id:t.layerId,experiment_id:t.decision.experimentId,variation_id:t.decision.variationId,is_campaign_holdback:t.decision.isLayerHoldback,metadata:e}}))}function Z(){var t=E.getPersistableState();if(t)try{d.debug("Persisting pending batch:",t),h.persistTrackerOptimizelyData(t),y.dispatch(s.SET_TRACKER_DIRTY,!1)}catch(t){d.debug("Failed to persist pending batch:",t)}}var tt={trackLayerDecision:function(t){t.isLayerConcluded?d.debug("Layer is already concluded, skipping decision tracking"):t.timing===v.TrackLayerDecisionTimingFlags.postRedirectPolicy?function(t){var n=U(t.userFeatures),e={account_id:t.accountId,anonymize_ip:t.anonymizeIP,client_name:t.clientName,client_version:t.clientVersion,project_id:t.projectId,visitors:[{session_id:z(t.sessionId),visitor_id:t.visitorId,attributes:n,snapshots:[{decisions:[{campaign_id:t.layerId,experiment_id:t.experimentId,variation_id:t.variationId,is_campaign_holdback:t.isLayerHoldback}],events:[{uuid:t.decisionId,entity_id:t.layerId,timestamp:t.timestamp,type:S}]}]}]};y.dispatch(s.REGISTER_PREVIOUS_BATCH,e),J()}(t):function(t){var n={entity_id:t.layerId,type:S,uuid:t.decisionId,timestamp:t.timestamp};y.dispatch(s.REGISTER_TRACKER_DECISION,{decisionEvent:n,decisions:Q(t.layerStates)}),B(t.userFeatures),J()}(t)},preRedirectPolicy:v.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT,postRedirectPolicy:v.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:v.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:C,onClientActivation:N,onClickEvent:x,onCustomEvent:D};t.exports=function(t){t.registerAnalyticsTracker("optimizely",tt),b.on({filter:{type:_.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){y.dispatch(s.SET_TRACKER_SEND_EVENTS,!0),F()}}),b.on({filter:{type:_.TYPES.ANALYTICS,name:"maybeSendEvents"},handler:function(){F()}}),b.on({filter:{type:_.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){y.dispatch(s.SET_TRACKER_SEND_EVENTS,!1)}}),y.dispatch(s.SET_TRACKER_SEND_EVENTS,!0);var n=b.on({filter:{type:"lifecycle",name:"activated"},handler:function(){E.observe(Z),b.off(n)}})}},7763:function(t,n,e){var i=e(4886),r=e(5473);function o(t){if(!t||"string"!=typeof t.value)return{configured:!1,valid:!1,leg:null};var n=t.value.replace(/^\s+|\s+$/g,"");if(""===n||n.length<3)return{configured:!0,valid:!1,leg:null};var e=i.makeUaTest(n);return e?{configured:!0,valid:!0,leg:{value:n,test:e}}:{configured:!0,valid:!1,leg:null}}function a(t){if(!t)return{configured:!1,legs:[]};if("string"!=typeof t.value||""===t.value.replace(/^\s+|\s+$/g,""))return{configured:!0,legs:[]};for(var n=t.value.split(","),e=[],i=0;i<n.length;i++){var o=n[i].replace(/^\s+|\s+$/g,"");if(""!==o){var a=r.makeIpTest(o);a&&e.push({value:o,test:a})}}return{configured:!0,legs:e}}n.compile=function(t){var n=[];if(!t||!t.rules||!Array.isArray(t.rules))return n;for(var e=0;e<t.rules.length;e++){var i=t.rules[e];if(i){var r=String(e),u=o(i.user_agent),c=a(i.ip);if((u.configured||c.configured)&&(!u.configured||u.valid)){var s=u.configured?u.leg:null;if(c.configured){if(0===c.legs.length)continue;for(var f=0;f<c.legs.length;f++)n.push({id:r,ua:s,ip:c.legs[f]})}else n.push({id:r,ua:s,ip:null})}}}return n}},4308:function(t,n,e){var i=e(7763),r=e(4483),o=e(9454),a=e(2025),u=e(7566),c=e(3111),s=a.get("stores/directive"),f=a.get("stores/global"),l=null,d=!1,v=void 0,h=!1,p=!1;function g(){p&&(p=!1,u.emit({type:c.TYPES.ANALYTICS,name:"sendEvents"}))}function m(){return{enabled:!1,mode:"monitor",compiledRules:[],hasIpRules:!1,hasUaRules:!1,stats:r.createStats()}}function b(){return!!(s&&s.shouldBootstrapDataForPreview&&s.shouldBootstrapDataForPreview())}function _(){if(!d){try{var t=function(){try{return f&&f.getTrafficExclusion?f.getTrafficExclusion():void 0}catch(t){return}}();if(!t)return;d=!0,l=function(t){if(!t||"object"!=typeof t||!t.enabled)return m();for(var n="enforce"===t.mode?"enforce":"monitor",e=i.compile(t),o=!1,a=!1,u=0;u<e.length;u++)e[u].ip&&(o=!0),e[u].ua&&(a=!0);return{enabled:!0,mode:n,compiledRules:e,hasIpRules:o,hasUaRules:a,stats:r.createStats()}}(t)}catch(t){return d=!0,void(l=m())}try{l.enabled&&l.hasIpRules&&!b()&&function(){if(!p){p=!0,u.emit({type:c.TYPES.ANALYTICS,name:"holdEvents"});var t=y;o.setTimeout((function(){y===t&&g()}),2e3)}}()}catch(t){}}}n.evaluate=function(t,n){if(!l||!l.compiledRules)return{matched:!1,ruleId:void 0};for(var e=l.compiledRules,i=null!=n,r=0;r<e.length;r++){var o=e[r];if(o.ua||o.ip){var a=!o.ua||!!o.ua.test(t),u=!o.ip||i&&!!o.ip.test(n);if(a&&u)return{matched:!0,ruleId:o.id}}}return{matched:!1,ruleId:void 0}},n.shouldDrop=function(){try{if(_(),!l||!l.enabled||b()||!l.compiledRules.length)return!1;var t=o.getUserAgent();l.hasIpRules&&function(){if(h)return;h=!0;var t=y;try{var i=e(131).getIP();i&&"function"==typeof i.then&&i.then((function(i){if(y===t&&"string"==typeof i&&i&&(v=i,l&&l.enabled&&"enforce"===l.mode)){var a=o.getUserAgent(),u=n.evaluate(a,i);if(u.matched){r.recordMatch(l.stats,u.ruleId);try{var c=e(409),s=e(136);c.dispatch(s.RESET_TRACKER_EVENTS),c.dispatch(s.RESET_TRACKER_PREVIOUS_BATCHES)}catch(t){}}}g()}),(function(){g()}))}catch(t){}}();var i=l.hasIpRules?v:void 0;r.recordEvaluation(l.stats),l.hasUaRules&&("string"!=typeof t||!t)&&r.recordUnusableUa(l.stats),l.hasIpRules&&("string"!=typeof i||!i)&&r.recordUnresolvedIp(l.stats);var a=n.evaluate(t,i);return!!a.matched&&(r.recordMatch(l.stats,a.ruleId),"enforce"===l.mode)}catch(t){try{l&&r.recordThrew(l.stats)}catch(t){}return!1}};var y=0;n.config=function(){return _(),l},n.getStats=function(){if(_(),!l||!l.enabled)return null;var t=l.stats,n={};for(var e in t.perRuleHits)Object.prototype.hasOwnProperty.call(t.perRuleHits,e)&&(n[e]=t.perRuleHits[e]);for(var i=[],r=l.compiledRules,o=0;o<r.length;o++){var a=r[o];n[a.id]&&i.push({id:a.id,type:a.ua&&a.ip?"ua+ip":a.ua?"ua":"ip",ua:a.ua?a.ua.value:null,ip:a.ip?a.ip.value:null,drops:n[a.id]})}return{enabled:!0,mode:l.mode,evaluated:t.evaluated,matched:t.matched,unusableUa:t.unusableUa,unresolvedIp:t.unresolvedIp,threw:t.threw,perRuleHits:n,matchedRules:i}}},5473:function(t,n){function e(t){if(!/^\d{1,3}$/.test(t))return!1;var n=Number(t);return!(n>255||String(n)!==t)}n.anonymizeIp=function(t){if("string"==typeof t&&""!==t){var n=t.split(".");if(4===n.length){for(var i=0;i<4;i++)if(!e(n[i]))return;return n[0]+"."+n[1]+"."+n[2]+".0"}}},n.makeIpTest=function(t){if(!t||"string"!=typeof t)return null;var e=n.anonymizeIp(t);return void 0===e||e!==t?null:function(e){var i=n.anonymizeIp(e);return void 0!==i&&i===t}}},4886:function(t,n){n.makeUaTest=function(t){if(!t||"string"!=typeof t)return null;var n=t.toLowerCase();return function(t){return"string"==typeof t&&-1!==t.toLowerCase().indexOf(n)}}},4483:function(t,n){n.createStats=function(){return{evaluated:0,matched:0,unusableUa:0,unresolvedIp:0,threw:0,perRuleHits:{}}},n.recordEvaluation=function(t){t&&t.evaluated++},n.recordUnusableUa=function(t){t&&t.unusableUa++},n.recordUnresolvedIp=function(t){t&&t.unresolvedIp++},n.recordThrew=function(t){t&&t.threw++},n.recordMatch=function(t,n){t&&(t.matched++,t.perRuleHits[n]=(t.perRuleHits[n]||0)+1)}},4093:function(t,n,e){var i=e(1019),r={match:function(t,n){return!!i.querySelector(n.value)}};t.exports=function(t){t.registerViewMatcher("element_present",r)}},9820:function(t,n,e){t.exports=function(t){t.registerViewProvider(e(7568)),t.registerViewMatcher("url",e(683))}},683:function(t,n,e){var i=e(6582);t.exports={fieldsNeeded:["url"],match:function(t,n){return i(t.url,n)}}},7568:function(t,n,e){var i=e(6022);t.exports={provides:"url",getter:[function(){return i.getUrl()}]}},9721:function(t,n,e){var i=e(1019),r=e(6592),o=e(7566),a=e(5975),u=e(2348),c={token:void 0,setUpObserver:function(){a.createDOMChangedObserver(),this.token=o.on({filter:{type:"viewTrigger",name:"DOMChanged"},handler:function(){u.getViewsAndActivate(r.ViewActivationTypes.DOMChanged)}})},turnOffObserver:function(){o.off(this.token)}};t.exports=function(t){i.isReady()?c.setUpObserver():i.addReadyHandler(c.setUpObserver),t.registerViewTrigger("DOMChanged",c)}},8326:function(t,n,e){var i=e(136),r=e(2025),o=e(6592),a=e(7566),u=e(409),c=r.get("stores/history"),s=e(7852),f=e(6761).Promise,l=e(2348),d=e(9454);function v(t){a.emit({type:"viewTrigger",name:"URLChanged",data:{source:t,newURL:d.getHref()}},!0)}t.exports=function(t){var n;n=function(){var t=c.getOriginalPushState().apply(this,arguments);return f.resolve().then((function(){v("pushState")})).catch((function(t){s.error("Error while wrapPushState: ",t)})),t},u.dispatch(i.ENSURE_ORIGINAL_PUSHSTATE),d.getGlobal("history").pushState=n,function(){var t=function(){var t=c.getOriginalReplaceState().apply(this,arguments);return f.resolve().then((function(){v("replaceState")})).catch((function(t){s.error("Error while wrapReplaceState: ",t)})),t};u.dispatch(i.ENSURE_ORIGINAL_REPLACESTATE),d.getGlobal("history").replaceState=t}(),d.addEventListener("popstate",h,!1),d.addEventListener("hashchange",p,!1),a.on({filter:{type:"viewTrigger",name:"URLChanged"},handler:function(){l.getViewsAndActivate(o.ViewActivationTypes.URLChanged)}}),t.registerViewTrigger("URLChanged")};var h=v.bind(null,"popstate"),p=v.bind(null,"hashchange")},9647:function(t,n,e){var i=e(2025),r=e(7566),o=e(3111),a=e(9454),u=i.get("stores/directive"),c="optimizelyPreview",s=function(t){a.getGlobal(c).push(t)};n.initialize=function(t){u.isSlave()&&function(t){var n=!1;if(Array.isArray(window.optimizely)&&window.optimizely.forEach((function(e){Array.isArray(e)&&"verifyPreviewProject"===e[0]&&String(e[1])===t&&(n=!0)})),!n)throw new Error("Preview projectId: "+t+" does not match expected")}(t),r.on({filter:{type:o.TYPES.ANALYTICS,name:"trackEvent"},handler:s}),r.on({filter:{type:o.TYPES.LIFECYCLE,name:"viewActivated"},handler:s}),r.on({filter:{type:o.TYPES.LIFECYCLE,name:"layerDecided"},handler:s}),r.on({filter:{type:"error"},publicOnly:!0,handler:s})},n.setupPreviewGlobal=function(){a.getGlobal(c)||a.setGlobal(c,[])},n.pushToPreviewGlobal=function(t){s(t)}},2594:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.mapValues,a=i.pick,u=i.pickBy,c=e(9899),s=e(5192),f=e(2575),l=e(8298),d=e(1019),v=e(409),h=e(1353).DT,p=e(7852),g=e(4049),m=e(6761).Promise,b=e(4285),_=e(9454),y=e(8260),w=e(136),E=e(6592),I=e(2025),A=I.get("stores/async_request"),T=I.get("stores/client_metadata"),S=I.get("stores/global"),O=I.get("stores/rum"),k=I.get("stores/performance"),R=I.get("stores/xdomain"),C=I.get("stores/view_data"),N=e(3737),D="https://rum.optimizely.com/rum",x="1.0";function j(t){return r(t)?m.resolve():(n=function(){return y.request({url:D,method:"POST",data:t,withCredentials:!0}).then((function(t){return s.resolveRequest("RUM_FIRST_BEACON",t),t})).catch((function(t){throw p.error("POST to client-rum failed:",t),s.rejectRequest("RUM_FIRST_BEACON",t),t}))},(e=A.getPromise("RUM_FIRST_BEACON"))?e.then(n):s.makeAsyncRequest("RUM_FIRST_BEACON",n));var n,e}function M(){try{return!d.querySelector("body")}catch(t){return null}}function P(){var t=_.getGlobal("performance"),n=t?t.timing:{},e=k.getMarks()||{},i=O.getApiData(),r=O.getDOMObservationData(),o=N.get("state").getActiveExperimentIds(),a=O.getFeaturesNeededData(),u=d.parseUri(O.getScriptSrc()),c=O.getRumData()||{},s=c.extras||{};Object.assign(s,{apiCalls:i,DOMObservationData:r,paintTimings:U(),activeExperimentIds:o,numPages:C.getNumberOfPages(),snippet:{scheme:u.protocol.slice(0,-1),host:u.host,path:u.pathname},networkInfo:L(),experimental:S.getExperimental(),featuresNeeded:a,beacon:{cjsOnload:!0}});var f=_.getGlobal("Prototype");f&&void 0!==f.Version&&(s.prototypeJS=f.Version);var l=!1;l=!0;var v=R.getFrames();v.length&&(s.xdFramesLoaded=v.length);var m={id:O.getRumId(),v:x,project:S.getSnippetId()||S.getProjectId(),navigationTimings:n,userTimings:e,xd:l,apis:Object.keys(i),extras:s,sampleRate:c.sampleRate};(function(){var t=h.keys().map((function(t){var n=b.getStorageKeyFromKey(t);return n?{key:t,isForeign:b.isForeignKey(t),category:n,size:t.length+h.getItem(t).length}:null})).filter(Boolean),n=t.reduce((function(t,n){var e=n.key,i=b.getIdFromKey(e);return i?((n.isForeign?t.foreign:t.local)[i]=!0,t):t}),{local:{},foreign:{}}),e=t.filter((function(t){return!0===t.isForeign})).reduce((function(t,n){return t[n.key.split("_")[0]]=!0,t}),{}),i={local:0,foreign:0},r={local:{},foreign:{}};t.forEach((function(t){var n=t.isForeign?"foreign":"local";i[n]+=t.size,r[n][t.category]||(r[n][t.category]=0),r[n][t.category]+=t.size}));var o={numKeys:h.allKeys().length,sizeKeys:h.allKeys().toString().length,sizeValues:h.allValues().toString().length,idCounts:{local:Object.keys(n.local).length,foreign:Object.keys(n.foreign).length},foreignOriginCount:Object.keys(e).length,byteTotals:i,byteTotalsByCategory:r};return g.estimateStorage().then((function(t){return Object.assign(o,{storageEstimate:t})}))})().then((function(t){return j(Object.assign(m,{lsMetrics:t}))})).catch((function(t){p.warn("RUM / Error sending onload beacon:",t)}))}function L(){var t=_.getGlobal("navigator");if(t&&t.connection)return a(t.connection,["downlink","rtt","effectiveType"])}function U(){var t=_.getGlobal("performance");if(t)try{var n=t.getEntriesByType("paint");if(r(n))return;return n.reduce((function(t,n){return t[n.name]=Math.round(n.startTime),t}),{})}catch(t){return}}n.initialize=function(){var t,n=c.generate().replace(/-/g,"");t=Math.random()<.01;var e=function(){var t=d.getCurrentScript();if(t)return t.src}();v.dispatch(w.SET_RUM_DATA,{id:n,RumHost:D,inRumSample:t,src:e,data:{id:n,sync:M(),timebase:l.now(),sampleRate:.01,url:e,extras:{initialDOMState:d.getReadyState()}}})},n.queueBeacons=function(){return O.getSampleRum()?(function(){try{_.getGlobal("requestAnimationFrame")((function(){var t=O.getRumData().timebase;v.dispatch(w.SET_RUM_DATA,{data:{render:l.now()-(t||0)}})}))}catch(t){return}}(),d.isLoaded()?_.setTimeout(P,3e3):_.addEventListener("load",P),new m((function(t,n){_.setTimeout((function(){(function(){!function(){var t={id:O.getRumId(),v:x,account:S.getAccountId(),project:S.getSnippetId()||S.getProjectId(),snippet:S.getSnippetId(),revision:S.getRevision(),clientVersion:T.getClientVersion(),hasSlave:!1,wxhr:!0,extras:{}},n=b.getPersistedBehaviorEventCount(),e=f.getEventCount();t.numBehaviorEvents=e;var i=e-n;Object.assign(t.extras,{behaviorEventCountDiff:i,behaviorEventCountDecreased:i<0}),Object.assign(t,function(){var t=_.getGlobal("performance");if(!t)return;var n,e=O.getScriptSrc();try{if(e){p.debug("Using derived script src: ",e);var i=t.getEntriesByName(e);i.length>0&&(n=i[0])}if(!n){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;p.debug("Scanning resource timing entries with regex");var a=t.getEntriesByType("resource");n=a.find((function(t){return r.test(t.name)}))}if(n)return o(E.ResourceTimingAttributes,(function(t,e){var i=n[e];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===e?function(t){if(!t||!t.length)return[];for(var n=[],e=0;e<t.length;e++)try{var i=t[e];n.push({name:i.name,duration:i.duration,description:i.description})}catch(t){}return n}(i):void 0}))}catch(t){return}}(),k.getDurationsFor(Object.values(E.RUMPerformanceTimingAttributes))),v.dispatch(w.SET_RUM_DATA,{data:t})}();var t=O.getRumData(),n=k.getMarks()||{};return t.extras=t.extras||{},t.extras.beacon={cjsTimeout:!0},t.userTimings=n,j(t=u(t,(function(t){return void 0!==t})))})().then(t,n)}),3e3)})).catch((function(t){p.warn("RUM / Error sending data:",t)}))):m.resolve()}},6179:function(t,n,e){var i;!function(r,o){"use strict";var a="function",u="undefined",c="object",s="string",f="major",l="model",d="name",v="type",h="vendor",p="version",g="architecture",m="console",b="mobile",_="tablet",y="smarttv",w="wearable",E="embedded",I="Amazon",A="Apple",T="ASUS",S="BlackBerry",O="Browser",k="Chrome",R="Firefox",C="Google",N="Honor",D="Huawei",x="LG",j="Microsoft",M="Motorola",P="Nvidia",L="OnePlus",U="Opera",V="OPPO",B="Samsung",z="Sharp",F="Sony",G="Xiaomi",q="Zebra",H="Facebook",Y="Chromium OS",K="Mac OS",$=" Browser",W=function(t){for(var n={},e=0;e<t.length;e++)n[t[e].toUpperCase()]=t[e];return n},X=function(t,n){return typeof t===s&&-1!==J(n).indexOf(J(t))},J=function(t){return t.toLowerCase()},Q=function(t,n){if(typeof t===s)return t=t.replace(/^\s\s*/,""),typeof n===u?t:t.substring(0,500)},Z=function(t,n){for(var e,i,r,u,s,f,l=0;l<n.length&&!s;){var d=n[l],v=n[l+1];for(e=i=0;e<d.length&&!s&&d[e];)if(s=d[e++].exec(t))for(r=0;r<v.length;r++)f=s[++i],typeof(u=v[r])===c&&u.length>0?2===u.length?typeof u[1]==a?this[u[0]]=u[1].call(this,f):this[u[0]]=u[1]:3===u.length?typeof u[1]!==a||u[1].exec&&u[1].test?this[u[0]]=f?f.replace(u[1],u[2]):o:this[u[0]]=f?u[1].call(this,f,u[2]):o:4===u.length&&(this[u[0]]=f?u[3].call(this,f.replace(u[1],u[2])):o):this[u]=f||o;l+=2}},tt=function(t,n){for(var e in n)if(typeof n[e]===c&&n[e].length>0){for(var i=0;i<n[e].length;i++)if(X(n[e][i],t))return"?"===e?o:e}else if(X(n[e],t))return"?"===e?o:e;return n.hasOwnProperty("*")?n["*"]:t},nt={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},et={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,p],[/opios[\/ ]+([\w\.]+)/i],[p,[d,U+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[p,[d,U+" GX"]],[/\bopr\/([\w\.]+)/i],[p,[d,U]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[p,[d,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[p,[d,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,/(heytap|ovi|115)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[d,p],[/quark(?:pc)?\/([-\w\.]+)/i],[p,[d,"Quark"]],[/\bddg\/([\w\.]+)/i],[p,[d,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[d,"UC"+O]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[p,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[d,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[p,[d,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[p,[d,"Smart Lenovo "+O]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure "+O],p],[/\bfocus\/([\w\.]+)/i],[p,[d,R+" Focus"]],[/\bopt\/([\w\.]+)/i],[p,[d,U+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[d,U+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[d,"MIUI"+$]],[/fxios\/([\w\.-]+)/i],[p,[d,R]],[/\bqihoobrowser\/?([\w\.]*)/i],[p,[d,"360"]],[/\b(qq)\/([\w\.]+)/i],[[d,/(.+)/,"$1Browser"],p],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1"+$],p],[/samsungbrowser\/([\w\.]+)/i],[p,[d,B+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[p,[d,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[d,"Sogou Mobile"],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[d,p],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[d],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[p,d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,H],p],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[d,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[d,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[p,[d,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[d,k+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,k+" WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[d,"Android "+O]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,p],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[p,[d,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[p,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[p,tt,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[d,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],p],[/(wolvic|librewolf)\/([\w\.]+)/i],[d,p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[d,R+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[d,[p,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[d,[p,/master.|lts./,""]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[g,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[g,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[g,"arm"]],[/((ppc|powerpc)(64)?)( mac|;|\))/i],[[g,/ower/,"",J]],[/ sun4\w[;\)]/i],[[g,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],[[g,J]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[h,B],[v,_]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[l,[h,B],[v,b]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[l,[h,A],[v,b]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[h,A],[v,_]],[/(macintosh);/i],[l,[h,A]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[h,z],[v,b]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[l,[h,N],[v,_]],[/honor([-\w ]+)[;\)]/i],[l,[h,N],[v,b]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[l,[h,D],[v,_]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[l,[h,D],[v,b]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[l,/_/g," "],[h,G],[v,_]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,/ ([\w ]+) miui\/v?\d/i],[[l,/_/g," "],[h,G],[v,b]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[h,V],[v,b]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[l,[h,tt,{OnePlus:["304","403","203"],"*":V}],[v,_]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[h,"Vivo"],[v,b]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[l,[h,"Realme"],[v,b]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[h,M],[v,b]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[h,M],[v,_]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[h,x],[v,_]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[h,x],[v,b]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[l,[h,"Lenovo"],[v,_]],[/(nokia) (t[12][01])/i],[h,l,[v,_]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*))/i],[[l,/_/g," "],[v,b],[h,"Nokia"]],[/(pixel (c|tablet))\b/i],[l,[h,C],[v,_]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[h,C],[v,b]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[h,F],[v,b]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[h,F],[v,_]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[h,L],[v,b]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[h,I],[v,_]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[h,I],[v,b]],[/(playbook);[-\w\),; ]+(rim)/i],[l,h,[v,_]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[h,S],[v,b]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[h,T],[v,_]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[h,T],[v,b]],[/(nexus 9)/i],[l,[h,"HTC"],[v,_]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[h,[l,/_/g," "],[v,b]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[l,[h,"TCL"],[v,_]],[/(itel) ((\w+))/i],[[h,J],l,[v,tt,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[h,"Acer"],[v,_]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[h,"Meizu"],[v,b]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[l,[h,"Ulefone"],[v,b]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[l,[h,"Energizer"],[v,b]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[l,[h,"Cat"],[v,b]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[l,[h,"Smartfren"],[v,b]],[/droid.+; (a(?:015|06[35]|142p?))/i],[l,[h,"Nothing"],[v,b]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[l,[h,"Archos"],[v,_]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[l,[h,"Archos"],[v,b]],[/(imo) (tab \w+)/i,/(infinix) (x1101b?)/i],[h,l,[v,_]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (hmd|imo) ([\w ]+?)(?: bui|\))/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,/(oppo) ?([\w ]+) bui/i],[h,l,[v,b]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[h,l,[v,_]],[/(surface duo)/i],[l,[h,j],[v,_]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[h,"Fairphone"],[v,b]],[/(u304aa)/i],[l,[h,"AT&T"],[v,b]],[/\bsie-(\w*)/i],[l,[h,"Siemens"],[v,b]],[/\b(rct\w+) b/i],[l,[h,"RCA"],[v,_]],[/\b(venue[\d ]{2,7}) b/i],[l,[h,"Dell"],[v,_]],[/\b(q(?:mv|ta)\w+) b/i],[l,[h,"Verizon"],[v,_]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[h,"Barnes & Noble"],[v,_]],[/\b(tm\d{3}\w+) b/i],[l,[h,"NuVision"],[v,_]],[/\b(k88) b/i],[l,[h,"ZTE"],[v,_]],[/\b(nx\d{3}j) b/i],[l,[h,"ZTE"],[v,b]],[/\b(gen\d{3}) b.+49h/i],[l,[h,"Swiss"],[v,b]],[/\b(zur\d{3}) b/i],[l,[h,"Swiss"],[v,_]],[/\b((zeki)?tb.*\b) b/i],[l,[h,"Zeki"],[v,_]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[h,"Dragon Touch"],l,[v,_]],[/\b(ns-?\w{0,9}) b/i],[l,[h,"Insignia"],[v,_]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[h,"NextBook"],[v,_]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[h,"Voice"],l,[v,b]],[/\b(lvtel\-)?(v1[12]) b/i],[[h,"LvTel"],l,[v,b]],[/\b(ph-1) /i],[l,[h,"Essential"],[v,b]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[h,"Envizen"],[v,_]],[/\b(trio[-\w\. ]+) b/i],[l,[h,"MachSpeed"],[v,_]],[/\btu_(1491) b/i],[l,[h,"Rotor"],[v,_]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[l,[h,P],[v,_]],[/(sprint) (\w+)/i],[h,l,[v,b]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[h,j],[v,b]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[h,q],[v,_]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[h,q],[v,b]],[/smart-tv.+(samsung)/i],[h,[v,y]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[h,B],[v,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[h,x],[v,y]],[/(apple) ?tv/i],[h,[l,A+" TV"],[v,y]],[/crkey/i],[[l,k+"cast"],[h,C],[v,y]],[/droid.+aft(\w+)( bui|\))/i],[l,[h,I],[v,y]],[/(shield \w+ tv)/i],[l,[h,P],[v,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[l,[h,z],[v,y]],[/(bravia[\w ]+)( bui|\))/i],[l,[h,F],[v,y]],[/(mi(tv|box)-?\w+) bui/i],[l,[h,G],[v,y]],[/Hbbtv.*(technisat) (.*);/i],[h,l,[v,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[h,Q],[l,Q],[v,y]],[/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],[l,[v,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[v,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[h,l,[v,m]],[/droid.+; (shield)( bui|\))/i],[l,[h,P],[v,m]],[/(playstation \w+)/i],[l,[h,F],[v,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[h,j],[v,m]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[l,[h,B],[v,w]],[/((pebble))app/i,/(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[h,l,[v,w]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[l,[h,V],[v,w]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[l,[h,A],[v,w]],[/(opwwe\d{3})/i],[l,[h,L],[v,w]],[/(moto 360)/i],[l,[h,M],[v,w]],[/(smartwatch 3)/i],[l,[h,F],[v,w]],[/(g watch r)/i],[l,[h,x],[v,w]],[/droid.+; (wt63?0{2,3})\)/i],[l,[h,q],[v,w]],[/droid.+; (glass) \d/i],[l,[h,C],[v,w]],[/(pico) (4|neo3(?: link|pro)?)/i],[h,l,[v,w]],[/; (quest( \d| pro)?)/i],[l,[h,H],[v,w]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[h,[v,E]],[/(aeobc)\b/i],[l,[h,I],[v,E]],[/(homepod).+mac os/i],[l,[h,A],[v,E]],[/windows iot/i],[[v,E]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[l,[v,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[v,_]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[v,_]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[v,b]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[l,[h,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[d,"EdgeHTML"]],[/(arkweb)\/([\w\.]+)/i],[d,p],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[d,p],[/ladybird\//i],[[d,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,p],[/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],[d,[p,tt,nt]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[p,tt,nt],[d,"Windows"]],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,K],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[p,d],[/(ubuntu) ([\w\.]+) like android/i],[[d,/(.+)/,"$1 Touch"],p],[/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],[d,p],[/\(bb(10);/i],[p,[d,S]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[p,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[d,R+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[d,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[p,[d,"watchOS"]],[/crkey\/([\d\.]+)/i],[p,[d,k+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[d,Y],p],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,p],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[d,p]]},it=function(t,n){if(typeof t===c&&(n=t,t=o),!(this instanceof it))return new it(t,n).getResult();var e=typeof r!==u&&r.navigator?r.navigator:o,i=t||(e&&e.userAgent?e.userAgent:""),m=e&&e.userAgentData?e.userAgentData:o,y=n?function(t,n){var e={};for(var i in t)n[i]&&n[i].length%2==0?e[i]=n[i].concat(t[i]):e[i]=t[i];return e}(et,n):et,w=e&&e.userAgent==i;return this.getBrowser=function(){var t,n={};return n[d]=o,n[p]=o,Z.call(n,i,y.browser),n[f]=typeof(t=n[p])===s?t.replace(/[^\d\.]/g,"").split(".")[0]:o,w&&e&&e.brave&&typeof e.brave.isBrave==a&&(n[d]="Brave"),n},this.getCPU=function(){var t={};return t[g]=o,Z.call(t,i,y.cpu),t},this.getDevice=function(){var t={};return t[h]=o,t[l]=o,t[v]=o,Z.call(t,i,y.device),w&&!t[v]&&m&&m.mobile&&(t[v]=b),w&&"Macintosh"==t[l]&&e&&typeof e.standalone!==u&&e.maxTouchPoints&&e.maxTouchPoints>2&&(t[l]="iPad",t[v]=_),t},this.getEngine=function(){var t={};return t[d]=o,t[p]=o,Z.call(t,i,y.engine),t},this.getOS=function(){var t={};return t[d]=o,t[p]=o,Z.call(t,i,y.os),w&&!t[d]&&m&&m.platform&&"Unknown"!=m.platform&&(t[d]=m.platform.replace(/chrome os/i,Y).replace(/macos/i,K)),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(t){return i=typeof t===s&&t.length>500?Q(t,500):t,this},this.setUA(i),this};it.VERSION="1.0.41",it.BROWSER=W([d,p,f]),it.CPU=W([g]),it.DEVICE=W([l,h,v,m,b,y,_,w,E]),it.ENGINE=it.OS=W([d,p]),typeof n!==u?(t.exports&&(n=t.exports=it),n.UAParser=it):e.amdO?(i=function(){return it}.call(n,e,n,t))===o||(t.exports=i):typeof r!==u&&(r.UAParser=it);var rt=typeof r!==u&&(r.jQuery||r.Zepto);if(rt&&!rt.ua){var ot=new it;rt.ua=ot.getResult(),rt.ua.get=function(){return ot.getUA()},rt.ua.set=function(t){ot.setUA(t);var n=ot.getResult();for(var e in n)rt.ua[e]=n[e]}}}("object"==typeof window?window:this)},4118:function(){}},__webpack_module_cache__={};function __webpack_require__(t){var n=__webpack_module_cache__[t];if(void 0!==n)return n.exports;var e=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t].call(e.exports,e,e.exports,__webpack_require__),e.exports}__webpack_require__.amdO={},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();var __webpack_exports__={};function main(){var t=function(t){var n=[__webpack_require__(1823)];n.push(__webpack_require__(1982)),n.push(__webpack_require__(9202)),n.push(__webpack_require__(9401)),n.push(__webpack_require__(6988)),n.push(__webpack_require__(9728)),n.push(__webpack_require__(2163)),n.push(__webpack_require__(8252)),n.push(__webpack_require__(2085)),n.push(__webpack_require__(6591)),n.push(__webpack_require__(2452)),n.push(__webpack_require__(39)),n.push(__webpack_require__(6917)),n.push(__webpack_require__(945)),n.push(__webpack_require__(2819)),n.push(__webpack_require__(2153)),n.push(__webpack_require__(1592)),n.push(__webpack_require__(9807)),n.push(__webpack_require__(9820)),n.push(__webpack_require__(4093)),n.push(__webpack_require__(9721)),n.push(__webpack_require__(8326)),n.push(__webpack_require__(4680)),n.push(__webpack_require__(4439)),n.push(__webpack_require__(6474)),n.push(__webpack_require__(2636)),n.push(__webpack_require__(8663)),n.push(__webpack_require__(3037)),l.initializePlugins(n)};window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(2594).initialize();var n=__webpack_require__(5010);n.time("gtagReady");var e=__webpack_require__(7852),i=__webpack_require__(2025);__webpack_require__(7786);var r=i.get("stores/directive");i.get("stores/tracker_optimizely");if(!__webpack_require__(8260).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var o,a=__webpack_require__(9445),u=__webpack_require__(4214),c=__webpack_require__(7219),s=__webpack_require__(587),f={"accountId": "23755061915", "namespace": "23755061915", "revision": "11505", "anonymizeIP": true, "enableForceParameters": true, "experimental": {"trimPages": true}, "projectId": "23755061915", "layers": [{"changes": [{"id": "CBAB77E5-D1C3-46BA-9C81-41E4982112E4", "type": "custom_code", "value": function($){var utils = window.optimizely.get('utils');
utils.observeSelector('p[data-testid="Home+ - Smart Home-total"]', function(element) {

element.childNodes[0].remove();
  
}, {

  "once": false,

});
}, "dependencies": []}], "id": "25246960217", "name": "/homeplus/smart-home/ - Removed \"$\" from calculator", "commitId": "4943629303676928", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "25235940253", "integrationSettings": null, "variations": [{"id": "25257860178", "name": "Original", "actions": []}, {"id": "25243600292", "name": "Variation #1", "actions": [{"viewId": "25202900320", "changes": []}]}], "weightDistributions": [{"entityId": "25243600292", "endOfRange": 10000}], "name": "/homeplus/smart-home/ - Removed \"$\" from calculator", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "25246960217"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["25202900320"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "25270301375", "name": "/about/contact-us/ - Fixed spacing between icons mid-page", "commitId": "25296330750", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "25315020967", "integrationSettings": null, "variations": [{"id": "25283111641", "name": "Original", "actions": []}, {"id": "25249541413", "name": "Variation #1", "actions": [{"viewId": "25232851399", "changes": [{"id": "76E92108-06A5-4FC5-A231-2DC874A2AD31", "type": "append", "selector": "head", "value": "<style>div[data-testid=\"logos\"] {\n  text-align : center;\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "25249541413", "endOfRange": 10000}], "name": "/about/contact-us/ - Fixed spacing between icons mid-page", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "25270301375"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["25232851399"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "28212580515", "name": "ubreakifix.com/accessory-warranty - Copy Change", "commitId": "5038884977901568", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "28239310352", "integrationSettings": null, "variations": [{"id": "28307750036", "name": "Original", "actions": [{"viewId": "28194280742", "changes": [{"dependencies": [], "id": "D4D35DBA-B482-423C-96A2-AC9C1EFCF67B", "type": "custom_code", "value": function($){var utils = window.optimizely.get("utils");

function rewriteBrand(root) {
  var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  var node;
  while ((node = walker.nextNode())) {
    var value = node.nodeValue;
    if (!value) continue;
    var next = value
      .replace(/uBreakiFix(?! by Asurion)/g, "uBreakiFix by Asurion")
      .replace(/UBREAKIFIX(?! BY ASURION)/g, "UBREAKIFIX BY ASURION");
    if (next !== value) node.nodeValue = next;
  }
}

utils.observeSelector("h2, p", rewriteBrand);
}}, {"dependencies": [], "id": "A78FB866-BE09-4A0C-AE4E-298596CC11D8", "operator": "append", "selector": ".container", "type": "append", "value": "<br>\n<p>@ 2023 Asurion. Errors and Omissions Excepted. All Rights Reserved. Asurion is a registered trademark in the U.S. and other countries. Use of the Made for Apple badge means that an accessory has been designed to connect specifically to the Apple product(s) identified in the badge, and has been certified by the developer to meet Apple performance standards. Apple is not responsible for the operation of this device or its compliance with safety and regulatory standards. Please note that the use of this accessory with an Apple product may affect wireless performance. Apple, iPad, iPad Air. iPad Pro, iPad mini, iPhone, iPod touch and Lightning are trademarks of Apple Inc., registered in the U.S. and other countries. DuPont\u2122 and Kevlar\u00ae are trademarks or registered trademarks of affiliates of DuPont de Nemours, Inc. All other registered trademarks, trademarks, brand names or product names are the property of their respective owners.</p>"}]}]}], "weightDistributions": null, "name": "ubreakifix.com/accessory-warranty - Copy Change", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "28212580515"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["28194280742"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "29219640577", "name": "/applianceplus/ - [ASURC-68] - More Prominent Mobile CTAs", "commitId": "5522389048492032", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "25161221107"], "audienceName": "Mobile Devices", "changes": null, "id": "29227040794", "integrationSettings": null, "variations": [{"id": "29225330593", "name": "Original", "actions": []}, {"id": "29208890664", "name": "Variation #1", "actions": [{"viewId": "29208310612", "changes": [{"id": "DFB597A7-C394-4804-BA78-032D490E49FF", "type": "append", "selector": "head", "value": "<style>@media screen and (max-width: 1023px) {\n  #hero-cta-container a {\n    width:100% !important;\n  }\n  a[data-analytics-id*=\"Feature\"]{\n    width:100% !important;\n    padding-top:8px !important;\n    padding-bottom:8px !important;\n  }\n  a[data-analytics-id*=\"Intro\"]{\n  \twidth:100% !important;\n  }\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "29208890664", "endOfRange": 10000}], "name": "/applianceplus/ - [ASURC-68] - More Prominent Mobile CTAs", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "29219640577"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["29208310612"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "29223390017", "name": "/mobile-device-setup/verizon-client - Verizon Widget", "commitId": "4806666214965248", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "29230680055", "integrationSettings": null, "variations": [{"id": "29226410033", "name": "Original", "actions": []}, {"id": "29256050006", "name": "Variation #1", "actions": [{"viewId": "29246340042", "changes": [{"id": "18E60E6A-7B40-4F62-9A17-10387CAE103A", "type": "custom_code", "value": function($){var utils = window["optimizely"].get("utils");

utils.observeSelector('a[data-analytics-id="Hero | Device-Setup---Verizon-Client---Hero-button---Call"]', function(el) {
 console.log('widget code registered');
 el.addEventListener('click', (e) => {
   e.preventDefault();
   window['_si_widget']('expand')
 });
}, {
  "once": false
});

(function (w, d, s, o, f, a, js, fjs) {
  w[o] =
    w[o] ||
    function () {
      const [action, ...params] = arguments;
      (w[o].q = w[o].q || []).push([action, ...params]);
    };
  (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
  js.id = o;
  js.src = f;
  js.async = 1;
  w[o]('init', a);
  fjs.parentNode.insertBefore(js, fjs);
})(
  window,
  document,
  'script',
  '_si_widget',
  'https://app.widget-loader.service-initiation.asurion.com/widget-loader.js',
  {
    variant: 'verizon',
  }
);
}, "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {"href": "#", "html": "Get tech help now"}, "type": "attribute", "id": "6CB30BB8-C573-49E0-AF9D-340F4C3C028F", "selector": ".\\!inline-block"}]}]}], "weightDistributions": [{"entityId": "29256050006", "endOfRange": 10000}], "name": "/mobile-device-setup/verizon-client - Verizon Widget", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "29223390017"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["29246340042"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "29375190162", "name": "/connected-home-assessment/ - Typeform Quiz", "commitId": "4757916662628352", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"google_analytics_4": {"is_using_gtm": "on"}, "28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "29336160070", "integrationSettings": null, "variations": [{"id": "29349270144", "name": "Original", "actions": [{"viewId": "29343530169", "changes": [{"id": "0EC5DA1E-9145-4C5E-9AF5-045F51DF4831", "type": "custom_code", "value": function($){var utils = window["optimizely"].get("utils");
window.previousHeights = [];
window.formScreenChanged = false;
window.addEventListener(
  "message",
  (event) => {
    if (1 == 2) return;
    console.log({event:event});
    if (event.data.type && event.data.type == "form-screen-changed") {
      formScreenChanged = true;
      window.scroll({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
    if (!formScreenChanged && window.innerWidth > 840) {
    		  document.querySelector("#typeform-quiz").style.height = `${
        1000
      }px`;
			} else if (
      event.data.height &&
      event.data.height > 0 &&
      previousHeights[previousHeights.length - 1] != event.data.height &&
      previousHeights[previousHeights.length - 2] != event.data.height
    ) {
      console.log({height:event.data.height + 60});
			
       document.querySelector("#typeform-quiz").style.height = `${
        event.data.height + 60
      }px`;
      
     
    }
    previousHeights.push(event.data.height);
    previousHeights = previousHeights.slice(-5, previousHeights.length);
  },
  false
);

utils.observeSelector(
  "#typeform-quiz",
  function (el) {
    el.innerHTML =
      "<iframe src='https://asurion-care.typeform.com/connected-home' style='width:100%; height:100% !important;'>";
  },
  {
    once: false,
  }
);
}, "dependencies": []}, {"id": "8D20A4A7-EBB8-4F38-A09A-2E76F07810A2", "type": "append", "selector": "head", "value": "<style>[data-testid=\"scroll-triggered-banner\"]{\ndisplay:none;\n}\n#typeform-quiz{\n\tmax-width:unset;\n  padding:0;\n  height:100% ;\n}\n\n#gatsby-focus-wrapper{\nbackground-color:black;\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "/connected-home-assessment/ - Typeform Quiz", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "29375190162"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["29343530169"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "29611420185", "name": "/mobile-device-setup/verizon-client - Device Onboarding - Verizon - V2", "commitId": "5530527520784384", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "29621570138", "integrationSettings": null, "variations": [{"id": "29642220043", "name": "Original", "actions": [{"viewId": "29617960159", "changes": []}]}, {"id": "29584880236", "name": "Variation #1", "actions": [{"viewId": "29617960159", "changes": [{"id": "1C4D1363-2823-4CAF-921C-E3E1BE5BDB16", "type": "redirect", "dependencies": [], "dest": "http://www.asurion.com/mobile-device-setup/verizon-subscriber/", "preserveParameters": true, "allowAdditionalRedirect": false}]}]}], "weightDistributions": [{"entityId": "29584880236", "endOfRange": 10000}], "name": "/mobile-device-setup/verizon-client - Device Onboarding - Verizon - V2", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "29611420185"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["29617960159"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "29912490297", "name": "ubreakifix.com/device-tracking-view?code=* - Removed Pricing and Repair Timeline", "commitId": "5986373472092160", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "29956570080", "integrationSettings": null, "variations": [{"id": "29956200146", "name": "Original", "actions": [{"viewId": "29956200145", "changes": [{"id": "ba14c080f56744a7af9e8f7383944214", "type": "custom_code", "value": function($){var utils = window["optimizely"].get('utils');
utils.observeSelector(".pricing", function(el) {
  el.innerHTML = "";
}, {
  "once": false
});
utils.observeSelector(".status-timeline", function(el) {
  el.innerHTML = "";
}, {
  "once": false
});
}, "dependencies": []}, {"id": "23bd5c11d07441a28ca48df6bc3fecfb", "type": "append", "selector": "head", "value": "<style>.pricing, .status-timeline{\n\tdisplay:none;\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "ubreakifix.com/device-tracking-view?code=* - Removed Pricing and Repair Timeline", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "29912490297"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["29956200145"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "30298940013", "name": "/techcare/lw - Mobile Video Portrait Style Change", "commitId": "6136229834522624", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "30265940011", "integrationSettings": null, "variations": [{"id": "30283220014", "name": "Original", "actions": [{"viewId": "30287440037", "changes": [{"id": "7BF79EB3-B24B-4A6A-88B1-3861E154AE16", "type": "custom_code", "value": function($){var utils = window["optimizely"].get('utils');
window.ogSource = false;
utils.observeSelector('header', function(el) {
 function runChecks() {
  // Initialize the variable to store the browser width
	let browserWidth = window.innerWidth;
  var el = document.querySelector(".imgYT");
   if(!ogSource){
     ogSource = el.src;
   }
  var videoID = ogSource.split("/vi/")[1].split("/")[0];
  var source = el.parentElement.querySelector("source");
   var newImg = "https://images.ctfassets.net/16nm6vz43ids/6d7Jb8Zt1LUHosuaKdVhhG/ce5ab5e6c2400cf07db6d77aeb7d7648/techcare-lw.png";
    if (browserWidth < 700) {
        console.log("Small screen detected.");
        source.setAttribute("srcset",`
                        ${newImg},
                        ${newImg},
                        ${newImg}
                    `)
  
  el.src = newImg;
  el.setAttribute("srcset",	`${newImg} 1x,
                            ${newImg} 2x,
                            ${newImg} 3x`);
  el.setAttribute("width",320)
  el.setAttribute("height",513)
    }  else {
       
         source.setAttribute("srcset",`
                        https://i.ytimg.com/vi_webp/${videoID}/hqdefault.webp?w=480&amp;h=270 480w,
                        https://i.ytimg.com/vi_webp/${videoID}/sddefault.webp?w=768&amp;h=432 768w,
                        https://i.ytimg.com/vi_webp/${videoID}/maxresdefault.webp?w=1440&amp;h=810 1440w `)
  var newImg = "https://images.ctfassets.net/16nm6vz43ids/2APaD5lhZkGy48CrJzOHZ6/7ae2fd8f550a44f3583a2e285d8ff311/laptop-spill.png";
  el.src = "https://img.youtube.com/vi/7DXhLW3P96Y/hqdefault.jpg";
 
  el.setAttribute("srcset",	`https://img.youtube.com/vi/${videoID}/hqdefault.jpg 1x,
                            https://img.youtube.com/vi/${videoID}/sddefault.jpg 2x,
                            https://img.youtube.com/vi/${videoID}/maxresdefault.jpg 3x`);
  el.setAttribute("width",480)
  el.setAttribute("height",360)
    }
}

// Call runChecks every time the browser width is updated
window.addEventListener('resize', runChecks);
window.addEventListener("load", runChecks);
 
}, {
  "once": false,
});
}, "dependencies": []}, {"id": "86E1D5CA-921C-41B0-90DF-1B755F2F0B82", "type": "append", "selector": "head", "value": "<style>@media screen and (max-width: 699px) {\n  .youTubeSection{\n\t\tmax-height: 560px !important;\n\t}\n  .youTubeSection{\n\t\tpadding-bottom:177.78% !important;\n}\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "/techcare/lw - Mobile Video Portrait Style Change", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "30298940013"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["30287440037"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "4579968714276864", "name": "/microsoft/xbox/", "commitId": "6547549327196160", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"google_analytics_4": {}, "28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5646628405641216", "integrationSettings": null, "variations": [{"id": "4728110256488448", "name": "Original", "actions": [{"viewId": "5594146577055744", "changes": [{"id": "CBCC1603-D26B-4C58-B867-DD9E91FB676E", "type": "custom_code", "value": function($){var utils = window["optimizely"].get("utils");
var nowAvailable = '<span class="nowAvailable">Now Available</span>';
var cardHeadings = ["Call for backup", "Refresh your console", "Finish the mission"];

function findXboxBenefitCards() {
  return cardHeadings.map(function(heading) {
    return Array.prototype.find.call(
      document.querySelectorAll('[data-testid="image-text-block"]'),
      function(card) {
        var headline = card.querySelector("h3");
        return headline && headline.textContent.trim() === heading;
      }
    );
  });
}

utils.observeSelector('[data-testid="image-text-block"]', function() {
  if (document.getElementById("mainGrid")) {
    return;
  }

  var sections = findXboxBenefitCards();
  if (sections.some(function(section) { return !section; })) {
    return;
  }

  var grid = sections[0].parentElement;
  var container = grid && grid.parentElement;
  if (!grid || !container) {
    return;
  }

  container.id = "gridContainer";
  grid.id = "mainGrid";

  sections.forEach(function(section, index) {
    var sectionTextContainer = document.createElement("div");
    sectionTextContainer.id = "sectionContainer" + index;
    sectionTextContainer.className = "sectionContainer";
    section.appendChild(sectionTextContainer);

    Array.prototype.filter.call(section.children, function(child) {
      return /^(H3|P|SPAN)$/.test(child.tagName) && child !== sectionTextContainer;
    }).forEach(function(child) {
      sectionTextContainer.appendChild(child);
    });
  });

  document.getElementById("sectionContainer0").insertAdjacentHTML("afterbegin", nowAvailable);
  document.getElementById("sectionContainer1").insertAdjacentHTML("afterbegin", nowAvailable);

  var colA = document.createElement("div");
  colA.id = "colA";
  grid.insertAdjacentElement("afterbegin", colA);
  colA.append(sections[0]);
  colA.append(sections[1]);

  var colB = document.createElement("div");
  colB.id = "colB";
  colA.insertAdjacentElement("afterend", colB);
  colB.append(sections[2]);
}, {
  "once": false,
});
}, "dependencies": []}, {"id": "7577B4F0-B581-4650-BB59-E42A57711061", "type": "append", "selector": "head", "value": "<style>.nowAvailable{\n\tcolor:black;\n  background:#6EFAC3;\n  border-radius:4px;\n  font-size:12px;\n  padding:4px;\n  font-weight:400;\n  text-align:center;\n}\n\n@media screen and (min-width: 1024px) {\n\n#mainGrid{\n\tgrid-template-columns:1fr 1fr;\n}\n  \n}\n\n#gridContainer{\n  padding-top:0;\n  padding-bottom:0;\n  margin-bottom:4px;\n}\n\n#mainGrid{\n  display:grid;\n  padding:0;\n  grid-gap:6px;\n  background-color:white;\n  max-width:100%;\n}\n#mainGrid #colA,#mainGrid #colB{\n\tbackground-color:black;\n  display:grid;\n  gap:6px;\n}\n#mainGrid [data-testid=\"image-text-block\"]{\n  background-color:black;\n}\n#mainGrid [data-testid=\"image-text-block\"] img,\n#mainGrid [data-testid=\"image-text-block\"] picture,\n#mainGrid [data-testid=\"image-text-block\"] > div:first-child{\n  border-radius:0;\n}\n#mainGrid #colA > [data-testid=\"image-text-block\"]:nth-child(1){\n  display:grid;\n\tgrid-template-columns:1fr 1fr;\n}\n#mainGrid #colA > [data-testid=\"image-text-block\"]:nth-child(1) > div:first-child{\n  min-height:100%;\n}\n#mainGrid #colB > [data-testid=\"image-text-block\"]{\n\tdisplay:grid;\n  grid-template-rows:70% 30%;\n  height:100%;\n}\n\n#mainGrid #colB > [data-testid=\"image-text-block\"] img{\n  -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-size: cover;\n  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);\n  mask-repeat: no-repeat;\n  mask-size: cover;\n  max-height:100%;\n  width:100%;\n  height:100%;\n  object-fit:cover;\n}\n\n#mainGrid #colB > [data-testid=\"image-text-block\"] picture,\n#mainGrid #colB > [data-testid=\"image-text-block\"] > div:first-child{\n  height:100%;\n}\n\n#mainGrid #colA > [data-testid=\"image-text-block\"]:nth-child(2){\n  display:grid;\n\tgrid-template-columns:1fr 1fr;\n  grid-auto-flow: column;\n  direction: rtl;\n}\n#mainGrid #colA > [data-testid=\"image-text-block\"]:nth-child(2) > *{\n  direction:ltr;\n}\n#mainGrid #colA > [data-testid=\"image-text-block\"]:nth-child(2) > div:first-child{\n  min-height:100%;\n}\n#mainGrid h3 {\n\tfont-size:28px;\n}\n#sectionContainer0 {\n    align-content: center;\n    text-align: left;\n    padding-left: 24px;\n    padding-right: 16px;\n     margin-top:0;\n}\n#sectionContainer1{\n    align-content: center;\n    text-align: left;\n    margin-top:0;\n    padding-left: 24px;\n    padding-right: 16px;\n}\n#sectionContainer2 {\n    align-content: center;\n    text-align: left;\n    padding-left: 32px;\n    margin-top:-32px;\n}\n\n@media screen and (max-width: 1200px) {\n  #sectionContainer0,#sectionContainer1,#sectionContainer2 {\n    font-size: 0.9em;\n  }\n}\n@media screen and (max-width: 1050px) {\n  #sectionContainer0,#sectionContainer1,#sectionContainer2 {\n    font-size: 0.8em;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n\n#mainGrid{\n\tgrid-template-columns:1fr;\n}\n#mainGrid #colA,#mainGrid #colB{\n  display:block;\n}\n #mainGrid img{\n\twidth:100%;\n}\n  #mainGrid #colA > [data-testid=\"image-text-block\"]:nth-child(1){\n  \tgrid-template-columns:1fr;\n    border: 0;\n    border-bottom:3px solid white;\n  }\n  #mainGrid #colA > [data-testid=\"image-text-block\"]:nth-child(2){\n  \tgrid-template-columns:1fr;\n    grid-auto-flow: unset;\n    direction: unset;\n    border: 0;\n  }\n  #sectionContainer0,#sectionContainer1 {\n    padding:24px 32px 32px 16px;\n  }\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "/microsoft/xbox/", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4579968714276864"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5594146577055744"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": [{"dependencies": [], "id": "474314B3-962A-42C3-8544-BB2D54F45934", "selector": "head", "type": "append", "value": "<style>[data-aui=\"modal\"] [class*=\"Dialog__StyledContent\"] {\n  padding-bottom: 50px;\n}\n\n[data-aui=\"modal\"] [class*=\"Dialog__FlexBox\"] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  padding: 10px 0;\n  background: #fff;\n}\n\n[data-aui=\"modal\"] [class*=\"Dialog__FlexBox\"] button {\n  position: relative;\n  right: 15px;\n}\n\n\n/* Sticky footer: keep Sign Up label on one line (avoids wrap \u2264390px) */\n[class*=\"FooterWrapper\"] [data-testid=\"action\"] {\n  white-space: nowrap !important;\n}\n@media (max-width: 428px) and (min-width: 390px){\n\t[class*=\"FooterContent\"]{\n \t\tgap:12px !important; \n\t}\n  [class*=\"FooterContent\"] button{font-size:14px;}\n  [class*=\"LogoContainer\"] img {max-width:128px;}\n  [class*=\"PlanDescription\"] {font-size:14px;}\n}\n@media (max-width:389px){\n\n  [class*=\"FooterContent\"]{\n \t\tgap:8px !important; \n\t}\n  [class*=\"FooterContent\"] button{font-size:12px;}\n  [class*=\"LogoContainer\"] img {max-width:116px;}\n  [class*=\"PlanDescription\"] {font-size:12px;}\n}\n\nhtml.optly-hp-care-complete {\n  --optly-hp-blue: #0057b8;\n  --optly-hp-black: #000;\n  --optly-hp-border: #eeedf1;\n  --optly-hp-surface: #faf9fc;\n}\n\nhtml.optly-hp-care-complete .optly-hp-header-surface {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete header *:not(a):not(button) {\n  border-color: transparent !important;\n}\n\nhtml.optly-hp-care-complete header a:not(.optly-hp-claims-button):not(.optly-hp-header-signup),\nhtml.optly-hp-care-complete header button:not(.optly-hp-claims-button):not(.optly-hp-header-signup) {\n  border-color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete header .optly-hp-header-signin {\n  border: 1px solid #0f1114 !important;\n  border-color: #0f1114 !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-claims-button {\n  align-items: center !important;\n  background: var(--optly-hp-black) !important;\n  border: 1px solid var(--optly-hp-black) !important;\n  border-radius: 999px !important;\n  color: #fff !important;\n  display: inline-flex !important;\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  height: 40px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  margin-left: 12px !important;\n  padding: 0 24px !important;\n  text-decoration: none !important;\n  white-space: nowrap !important;\n}\n\nhtml.optly-hp-care-complete header .optly-hp-claims-button,\nhtml.optly-hp-care-complete header .optly-hp-claims-button *,\nhtml.optly-hp-care-complete header .optly-hp-header-signup,\nhtml.optly-hp-care-complete header .optly-hp-header-signup * {\n  background: var(--optly-hp-black) !important;\n  background-color: var(--optly-hp-black) !important;\n  color: #fff !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-header-signup {\n  align-items: center !important;\n  background: var(--optly-hp-black) !important;\n  border: 1px solid var(--optly-hp-black) !important;\n  border-radius: 999px !important;\n  color: #fff !important;\n  display: inline-flex !important;\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  height: 40px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  margin-left: 12px !important;\n  padding: 0 24px !important;\n  text-decoration: none !important;\n  white-space: nowrap !important;\n}\n\n\n@media (max-width: 1023px) {\n  #plancards {\n    padding-top: 0 !important;\n  }\n\n  #content-block {\n    gap: var(--aui-spacing-100) !important;\n  }\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-signup {\n  align-items: center !important;\n  background: #0c0e11 !important;\n  border: 1px solid #0c0e11 !important;\n  border-radius: 999px !important;\n  color: #fff !important;\n  cursor: pointer !important;\n  display: inline-flex !important;\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  height: 48px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  min-width: 182px !important;\n  padding: 0 24px !important;\n  text-align: center !important;\n  text-decoration: none !important;\n  vertical-align: middle !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-signup {\n  align-items: center !important;\n  background: #0c0e11 !important;\n  background-color: #0c0e11 !important;\n  border-color: #0c0e11 !important;\n  border-radius: 999px !important;\n  display: inline-flex !important;\n  height: 40px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  min-width: 120px !important;\n  padding: 0 24px !important;\n}\n\nhtml.optly-hp-care-complete #plancards + div {\n  text-align: center !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-section-pill,\nhtml.optly-hp-care-complete .optly-hp-section-pill * {\n  color: var(--optly-hp-blue) !important;\n}\n\nhtml.optly-hp-care-complete [data-testid=\"calculator\"] {\n  box-sizing: border-box !important;\n  display: grid !important;\n  max-width: 100% !important;\n  padding: 32px 0 0 !important;\n}\n\nhtml.optly-hp-care-complete [data-testid=\"calculator\"] .innerContainer {\n  background: var(--optly-hp-surface) !important;\n  border-radius: 16px !important;\n  box-sizing: border-box !important;\n  display: grid !important;\n  gap: 0 !important;\n  grid-template-columns: 1fr !important;\n  grid-template-rows: auto auto !important;\n  padding: 32px 0 0 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-full-header {\n  box-sizing: border-box !important;\n  display: block !important;\n  grid-column: 1 / -1 !important;\n  grid-row: 1 !important;\n  margin: 0 32px 24px !important;\n  padding: 0 !important;\n  text-align: left !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-left-header {\n  display: none !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-grid {\n  box-sizing: border-box !important;\n  display: grid !important;\n  gap: 18px !important;\n  grid-auto-columns: 146px !important;\n  grid-auto-flow: column !important;\n  grid-column: 1 / -1 !important;\n  grid-row: 2 !important;\n  grid-template-columns: none !important;\n  overflow-x: auto !important;\n  padding: 16px 0 20px 16px !important;\n  scroll-snap-type: x proximity !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block {\n  background: #fff !important;\n  border: 1.8px solid var(--optly-hp-border) !important;\n  border-radius: 7px !important;\n  box-sizing: border-box !important;\n  height: 185px !important;\n  max-width: 146px !important;\n  min-width: 146px !important;\n  scroll-snap-align: start !important;\n  width: 146px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block button {\n  align-items: center !important;\n  box-sizing: border-box !important;\n  height: 31px !important;\n  justify-content: center !important;\n  min-width: 31px !important;\n  padding: 0 !important;\n  width: 31px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block [class*=\"CalculatorBlockControlWrapper\"] {\n  align-items: center !important;\n  box-sizing: border-box !important;\n  display: flex !important;\n  gap: 8px !important;\n  height: 31px !important;\n  justify-content: center !important;\n  margin: 6px auto 8px !important;\n  max-width: 110px !important;\n  padding: 0 !important;\n  width: auto !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block input {\n  background: transparent !important;\n  background-color: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-sizing: border-box !important;\n  color: #0c0e11 !important;\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  height: 31px !important;\n  line-height: 31px !important;\n  margin: 0 !important;\n  min-width: 24px !important;\n  padding: 0 !important;\n  text-align: center !important;\n  width: 24px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-left-column {\n  background: #fff !important;\n  border-radius: 8px !important;\n  box-sizing: border-box !important;\n  margin: 0 32px 32px !important;\n  padding: 24px !important;\n  text-align: center !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-estimate {\n  background: transparent !important;\n  border-radius: 0 !important;\n  box-sizing: border-box !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  text-align: center !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-footnote {\n  display: block !important;\n  font-size: 11px !important;\n  line-height: 1.3 !important;\n  margin: 18px 0 0 !important;\n  padding: 0 !important;\n  text-align: left !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-total,\nhtml.optly-hp-care-complete [data-testid=\"HP Care Complete-total\"] {\n  background: none !important;\n  background-clip: border-box !important;\n  color: var(--optly-hp-blue) !important;\n  -webkit-background-clip: border-box !important;\n  -webkit-text-fill-color: var(--optly-hp-blue) !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan-card {\n  border-top: 1px solid #ddd !important;\n  margin-top: 18px !important;\n  padding: 18px 0 0 !important;\n  text-align: left !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-eyebrow {\n  color: #36393d !important;\n  font-size: 13px !important;\n  line-height: 1.25 !important;\n  margin: 0 0 2px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan {\n  color: #0f1114 !important;\n  font-size: 16px !important;\n  line-height: 1.2 !important;\n  margin: 0 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan strong {\n  color: #0f1114 !important;\n  font-weight: 700 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan [data-optly-hp-plan-price] {\n  color: #0f1114 !important;\n  font-size: 13px !important;\n  font-weight: 400 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-summary {\n  color: #555 !important;\n  font-size: 14px !important;\n  margin: 0 0 16px !important;\n}\n\n\nhtml.optly-hp-care-complete .optly-hp-review-card [class*=\"Comment\"] {\n  height: unset !important;\n}\n\n@media (min-width: 1024px) {\n  html.optly-hp-care-complete [data-testid=\"calculator\"] .innerContainer {\n    grid-template-columns: minmax(0, 534px) minmax(0, 627px) !important;\n    grid-template-rows: 268px 201px !important;\n    justify-content: center !important;\n    margin: 0 auto !important;\n    max-width: 1346px !important;\n    padding: 56px 72px 32px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-full-header {\n    grid-column: 1 !important;\n    grid-row: 1 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-grid {\n    align-self: end !important;\n    grid-column: 1 / -1 !important;\n    grid-row: 2 !important;\n    margin-top: 0 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-left-column {\n    grid-column: 2 !important;\n    grid-row: 1 !important;\n    height: 268px !important;\n    margin: 0 !important;\n    padding: 24px 35px 32px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-estimate {\n    display: block !important;\n    text-align: center !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-summary {\n    display: none !important;\n  }\n}\n\n@media (max-width: 1023px) {\n  html.optly-hp-care-complete .optly-hp-claims-button,\n  html.optly-hp-care-complete .optly-hp-header-signup {\n    height: 36px !important;\n    margin-left: 8px !important;\n    padding: 0 16px !important;\n  }\n\n  html.optly-hp-care-complete [data-testid=\"calculator\"] .innerContainer {\n    gap: 20px !important;\n    grid-template-rows: auto auto auto !important;\n    padding: 24px 16px !important;\n    width: 100% !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-full-header {\n    margin: 0 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-grid {\n    grid-auto-columns: 146px !important;\n    grid-template-columns: none !important;\n    padding: 0 0 14px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-left-column {\n    margin: 0 !important;\n    padding: 20px 16px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-estimate {\n    margin: 0 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-signup {\n    background: #0c0e11 !important;\n    border-color: #0c0e11 !important;\n    border-radius: 999px !important;\n    height: 40px !important;\n    min-width: 0 !important;\n    width: 100% !important;\n  }\n}</style>"}, {"dependencies": [], "id": "0409702E-C1D5-41D9-9C5D-41D9C316858D", "type": "custom_code", "value": function($){(function () {
  const RUNTIME_KEY = '__optlyHpCareCompleteRuntime';
  const existingRuntime = window[RUNTIME_KEY];

  if (existingRuntime && existingRuntime.scheduleApply) {
    existingRuntime.scheduleApply(0);
    return;
  }

  if (existingRuntime && existingRuntime.active) return;

  const runtime = window[RUNTIME_KEY] = { active: true };

  const CONFIG = {
    pagePaths: [
      '/program/hp-care-complete',
      '/program/hp-care-complete/',
      '/program/hp-care-complete-plp',
      '/program/hp-care-complete-plp/'
    ],
    plpPagePaths: [
      '/program/hp-care-complete-plp',
      '/program/hp-care-complete-plp/'
    ],
    rootClass: 'optly-hp-care-complete',
    claimsHref: '/claims/hp-care-complete/',
    signupHref: '/cart/hpcare/purchase/create?plan=HPBASE',
    selectors: {
      header: 'header',
      headerPrimaryButton: 'header [data-testid="primary-button"]',
      planRoot: '#plancards',
      planCard: '#plancards [class*="PlanCardContainer"]',
      planInner: '[class*="InnerContainer"]',
      planHeader: '[class*="Header"]',
      planActions: '[class*="ActionsContainer"]',
      calculator: '[data-testid="calculator"], #atc-calculator',
      calculatorTotal: '[data-testid="HP Care Complete-total"]',
      calcBlock: '[data-testid="calc-block"]',
      calcFullHeader: '[class*="CalculatorFullWidthHeader"]',
      calcGrid: '[class*="CalculatorGrid"]',
      calcLeftColumn: '[class*="CalculatorLeftColumn"]',
      calcLeftHeader: '[class*="CalculatorLeftColumnHeader"]',
      calcEstimateBlock: '[class*="CalculatorEstimateBlock"]',
      sectionPill: '.HeaderTag__Container-sc-466e89d9-0',
      reviewCard: '[data-testid="commentcard"]'
    },
    planMap: {
      individual: {
        label: 'HP Care Complete Individual',
        price: '$6.99/monthly + tax',
        selectorText: /for just you|individual/i
      },
      family: {
        label: 'HP Care Complete Family',
        price: '$17.99/monthly + tax',
        selectorText: /for more of your tech|for your household|family/i
      },
      wholeHome: {
        label: 'HP Care Complete Whole Home',
        price: '$24.99/monthly + tax',
        selectorText: /for nearly everything|for your connected home|whole home/i
      }
    }
  };

  const state = Object.assign(runtime, {
    documentObserver: null,
    calculatorObserver: null,
    resizeListener: false,
    scheduled: false
  });

  function isTargetPage() {
    return CONFIG.pagePaths.indexOf(window.location.pathname) !== -1;
  }

  function isPlpPage() {
    return CONFIG.plpPagePaths.indexOf(window.location.pathname) !== -1;
  }

  function text(el) {
    return (el && (el.innerText || el.textContent) || '').replace(/\s+/g, ' ').trim();
  }

  function setImportant(el, styles) {
    if (!el) return;
    Object.keys(styles).forEach((prop) => {
      if (styles[prop] == null) return;
      if (el.style.getPropertyValue(prop) === styles[prop] && el.style.getPropertyPriority(prop) === 'important') return;
      el.style.setProperty(prop, styles[prop], 'important');
    });
  }

  function setText(el, value) {
    if (!el || el.textContent === value) return;
    el.textContent = value;
  }

  function scheduleApply(delay) {
    if (state.scheduled) return;
    state.scheduled = true;
    window.setTimeout(() => {
      state.scheduled = false;
      applyChanges();
    }, delay || 100);
  }

  state.scheduleApply = scheduleApply;

  function addRootClass() {
    document.documentElement.classList.toggle(CONFIG.rootClass, isTargetPage());
  }

  function isFilledHeaderCta(el) {
    return !!(el && (el.closest('.optly-hp-claims-button') || el.closest('.optly-hp-header-signup')));
  }

  function applyWhiteHeader(header) {
    setImportant(header, {
      background: '#fff',
      'background-color': '#fff',
      color: '#0f1114',
      border: '0',
      'border-bottom': '1px solid #d8d8de',
      'box-shadow': '0 1px 0 rgba(15, 17, 20, 0.08)',
      outline: '0'
    });

    Array.from(header.querySelectorAll('*')).forEach((el) => {
      if (isFilledHeaderCta(el)) return;
      el.classList.add('optly-hp-header-surface');
      const isHeaderAction = /^(a|button)$/i.test(el.tagName);
      setImportant(el, {
        background: '#fff',
        'background-color': '#fff',
        color: '#0f1114',
        border: el.classList.contains('optly-hp-header-signin') ? '1px solid #0f1114' : undefined,
        'border-color': isHeaderAction ? '#0f1114' : 'transparent',
        'box-shadow': 'none',
        outline: '0'
      });
    });
  }

  function applyFilledHeaderCta(cta) {
    setImportant(cta, {
      background: '#000',
      'background-color': '#000',
      border: '1px solid #000',
      color: '#fff',
      display: 'inline-flex'
    });
  }

  function updateHeaderPlpSignup(header) {
    header.querySelectorAll('.optly-hp-claims-button').forEach((el) => el.remove());

    const signInActions = Array.from(header.querySelectorAll('a, button')).filter((el) => (
      !el.classList.contains('optly-hp-header-signup')
      && /sign in/i.test(text(el) + ' ' + (el.getAttribute('aria-label') || ''))
    ));

    if (signInActions.length === 0) {
      let cta = header.querySelector('.optly-hp-header-signup');
      if (!cta) {
        cta = document.createElement('a');
        header.appendChild(cta);
      }
      cta.classList.add('optly-hp-header-signup');
      cta.setAttribute('href', CONFIG.signupHref);
      cta.setAttribute('aria-label', 'Sign up');
      cta.textContent = 'Sign up';
      applyFilledHeaderCta(cta);
      applyWhiteHeader(header);
      return;
    }

    signInActions.forEach((signInAction) => {
      let cta = signInAction.previousElementSibling;
      if (!cta || !cta.classList.contains('optly-hp-header-signup')) {
        cta = document.createElement('a');
        signInAction.insertAdjacentElement('beforebegin', cta);
      }
      cta.classList.add('optly-hp-header-signup');
      cta.setAttribute('href', CONFIG.signupHref);
      cta.setAttribute('aria-label', 'Sign up');
      cta.textContent = 'Sign up';
      setImportant(signInAction, { display: 'none' });
      signInAction.setAttribute('aria-hidden', 'true');
      applyFilledHeaderCta(cta);
    });

    applyWhiteHeader(header);
  }

  function updateHeaderClaimsCta() {
    const header = document.querySelector(CONFIG.selectors.header);
    if (!header) return;

    if (isPlpPage()) {
      updateHeaderPlpSignup(header);
      return;
    }

    let cta = header.querySelector('.optly-hp-claims-button');
    const existingClaimLink = Array.from(header.querySelectorAll('a, button')).find((el) => (
      /claim/i.test(text(el) + ' ' + (el.getAttribute('href') || '') + ' ' + (el.getAttribute('aria-label') || ''))
    ));

    if (existingClaimLink && existingClaimLink !== cta) {
      if (existingClaimLink.tagName.toLowerCase() === 'a') {
        cta = existingClaimLink;
      } else {
        cta = document.createElement('a');
        existingClaimLink.insertAdjacentElement('afterend', cta);
      }
    }

    if (!cta) {
      const primaryButton = document.querySelector(CONFIG.selectors.headerPrimaryButton);
      const insertionTarget = primaryButton && (primaryButton.parentElement || primaryButton);
      cta = document.createElement('a');
      if (insertionTarget) {
        insertionTarget.insertAdjacentElement('afterend', cta);
      } else {
        header.appendChild(cta);
      }
    }

    cta.classList.add('optly-hp-claims-button');
    cta.setAttribute('href', CONFIG.claimsHref);
    cta.setAttribute('aria-label', 'Claims');
    cta.textContent = 'Claims';

    const signInAction = Array.from(header.querySelectorAll('a, button')).find((el) => (
      !el.closest('.optly-hp-claims-button')
      && /sign in/i.test(text(el) + ' ' + (el.getAttribute('aria-label') || ''))
    ));

    if (signInAction) {
      signInAction.classList.add('optly-hp-header-signin');
      setImportant(signInAction, {
        border: '1px solid #0f1114',
        'border-color': '#0f1114',
        color: '#0f1114'
      });
    }

    applyWhiteHeader(header);
    applyFilledHeaderCta(cta);
  }

  function markPlanCards() {
    // V2 intentionally leaves plan cards untagged so legacy card CSS cannot reapply.
  }

  function markSectionPills() {
    document.querySelectorAll(CONFIG.selectors.sectionPill).forEach((pill) => {
      pill.classList.add('optly-hp-section-pill');
    });
  }

  function markReviews() {
    document.querySelectorAll(CONFIG.selectors.reviewCard).forEach((card) => {
      card.classList.add('optly-hp-review-card');
    });
  }

  function wrapCalculator(calc) {
    if (!calc || calc.querySelector(':scope > .innerContainer')) return;

    const container = document.createElement('div');
    container.className = 'innerContainer optly-hp-calc-inner';
    Array.from(calc.classList).forEach((className) => container.classList.add(className));
    calc.className = '';

    while (calc.firstChild) {
      container.appendChild(calc.firstChild);
    }
    calc.appendChild(container);
  }

  function getCalculatorItems(calc) {
    return Array.from(calc.querySelectorAll('input')).map((input) => {
      const rawName = input.id || input.name || input.getAttribute('data-testid') || '';
      const value = Math.max(0, parseInt(input.value, 10) || 0);
      const block = input.closest(CONFIG.selectors.calcBlock);
      const normalized = `${rawName} ${text(block)}`.toLowerCase();
      let deviceType = 'other';

      if (normalized.includes('laptop') || normalized.includes('desktop')) {
        deviceType = 'computer';
      } else if (normalized.includes('monitor')) {
        deviceType = 'monitor';
      } else if (normalized.includes('printer')) {
        deviceType = 'printer';
      } else if (normalized.includes('headphone')) {
        deviceType = 'headphone';
      }

      return { input, rawName, value, deviceType };
    });
  }

  function getPlanTier(items) {
    const computerCount = items
      .filter((item) => item.deviceType === 'computer')
      .reduce((sum, item) => sum + item.value, 0);
    const peripheralCounts = ['monitor', 'printer', 'headphone'].map((deviceType) => (
      items
        .filter((item) => item.deviceType === deviceType)
        .reduce((sum, item) => sum + item.value, 0)
    ));
    const hasUnsupportedSelected = items.some((item) => item.deviceType === 'other' && item.value >= 1);
    const peripheralLimit = computerCount <= 1 ? 1 : computerCount;
    const exceedsPeripheralLimit = peripheralCounts.some((count) => count > peripheralLimit);

    if (hasUnsupportedSelected || exceedsPeripheralLimit) return 'wholeHome';
    if (computerCount <= 1) return 'individual';
    if (computerCount <= 3) return 'family';
    return 'wholeHome';
  }

  function getPlanButton(tier) {
    const config = CONFIG.planMap[tier] || CONFIG.planMap.individual;
    const cards = Array.from(document.querySelectorAll(CONFIG.selectors.planCard));
    const card = cards.find((candidate) => config.selectorText.test(text(candidate)));
    return card && Array.from(card.querySelectorAll('button, a')).find((el) => /sign up/i.test(text(el) + ' ' + (el.getAttribute('aria-label') || '')));
  }

  function ensureRecommendationCard(calc, totalEl) {
    let card = calc.querySelector('.optly-hp-calc-plan-card');
    if (card || !totalEl) return card;

    card = document.createElement('div');
    card.className = 'optly-hp-calc-plan-card';
    card.innerHTML = [
      '<p class="optly-hp-calc-eyebrow">For you, we recommend:</p>',
      '<p class="optly-hp-calc-plan"><strong data-optly-hp-plan-label>HP Care Complete Individual</strong> <span data-optly-hp-plan-price>$6.99/month + tax</span></p>',
      '<p class="optly-hp-calc-summary" data-optly-hp-plan-summary>Select your devices to find the right plan.</p>',
      '<button type="button" class="optly-hp-calc-signup">Sign up</button>'
    ].join('');

    totalEl.insertAdjacentElement('afterend', card);
    card.querySelector('.optly-hp-calc-signup').addEventListener('click', () => {
      const tier = calc.getAttribute('data-optly-hp-plan-tier') || 'individual';
      const planButton = getPlanButton(tier);
      if (planButton) {
        planButton.click();
      } else {
        const planRoot = document.querySelector(CONFIG.selectors.planRoot);
        if (planRoot) planRoot.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    return card;
  }

  function updateCalculatorRecommendation(calc) {
    const totalEl = calc.querySelector(CONFIG.selectors.calculatorTotal);
    if (!totalEl) return;

    const items = getCalculatorItems(calc);
    const tier = getPlanTier(items);
    const plan = CONFIG.planMap[tier] || CONFIG.planMap.individual;
    const selectedDeviceCount = items.reduce((sum, item) => sum + item.value, 0);
    const card = ensureRecommendationCard(calc, totalEl);

    if (calc.getAttribute('data-optly-hp-plan-tier') !== tier) {
      calc.setAttribute('data-optly-hp-plan-tier', tier);
    }
    totalEl.classList.add('optly-hp-calc-total');

    if (!card) return;
    const label = card.querySelector('[data-optly-hp-plan-label]');
    const price = card.querySelector('[data-optly-hp-plan-price]');
    const summary = card.querySelector('[data-optly-hp-plan-summary]');

    setText(label, plan.label);
    setText(price, plan.price);
    if (summary) {
      setText(summary, tier === 'wholeHome'
        ? 'Whole Home covers laptops, desktops, and eligible home tech.'
        : selectedDeviceCount === 0
          ? 'No devices are selected yet.'
          : `${selectedDeviceCount} eligible ${selectedDeviceCount === 1 ? 'device is' : 'devices are'} selected.`);
    }
  }

  function normalizeCalculatorStructure(calc, pieces) {
    const inner = calc && calc.querySelector(':scope > .innerContainer');
    if (!inner) return;

    [pieces.fullHeader, pieces.leftColumn, pieces.grid].forEach((piece) => {
      if (piece && piece.parentElement !== inner) {
        inner.appendChild(piece);
      }
    });

    const promoted = [pieces.fullHeader, pieces.leftColumn, pieces.grid].filter(Boolean);
    Array.from(inner.children).forEach((child) => {
      if (!promoted.includes(child)) {
        child.classList.add('optly-hp-calc-layout-pass-through');
        setImportant(child, {
          display: 'contents'
        });
      }
    });
  }

  function applyCalculatorLayout(calc, pieces) {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    const inner = calc.querySelector(':scope > .innerContainer');

    setImportant(calc, {
      'box-sizing': 'border-box',
      display: 'grid',
      'max-width': '100%',
      padding: '32px 0 0'
    });

    setImportant(inner, {
      background: '#faf9fc',
      'border-radius': '16px',
      'box-sizing': 'border-box',
      display: 'grid',
      gap: isDesktop ? '56px 41px' : '20px',
      margin: isDesktop ? '0 auto' : '0',
      'max-width': isDesktop ? '1346px' : '100%',
      width: '100%',
      padding: isDesktop ? '56px 72px 32px' : '24px 16px',
      'grid-template-columns': isDesktop ? 'minmax(0, 534px) minmax(0, 627px)' : '1fr',
      'grid-template-rows': isDesktop ? '268px 201px' : 'auto auto auto',
      'justify-content': isDesktop ? 'center' : 'stretch'
    });

    setImportant(pieces.fullHeader, {
      'box-sizing': 'border-box',
      display: 'block',
      'grid-column': isDesktop ? '1' : '1 / -1',
      'grid-row': '1',
      'align-self': isDesktop ? 'center' : 'auto',
      height: isDesktop ? '167px' : 'auto',
      'min-height': '0',
      'max-height': isDesktop ? '167px' : 'none',
      margin: '0',
      padding: '0',
      'text-align': 'left'
    });

    if (pieces.fullHeader) {
      const headerText = pieces.fullHeader.querySelector('[class*="CalculatorHeaderText"]') || pieces.fullHeader.firstElementChild;
      const subheaderText = pieces.fullHeader.querySelector('[class*="CalculatorSubheaderText"]') || pieces.fullHeader.children[1];

      setImportant(headerText, {
        margin: isDesktop ? '0 0 12px' : '0 0 10px',
        padding: '0',
        'font-size': isDesktop ? '48px' : '24px',
        'line-height': isDesktop ? '1' : '1.08'
      });

      setImportant(subheaderText, {
        margin: '0',
        padding: '0',
        'font-size': isDesktop ? '16px' : '12px',
        'line-height': isDesktop ? '1.35' : '1.35',
        'max-width': isDesktop ? '560px' : '100%'
      });

      setImportant(pieces.fullHeader.children[2], {
        margin: isDesktop ? '18px 0 0' : '12px 0 0',
        padding: '0',
        'font-size': isDesktop ? '11px' : '7px',
        'line-height': '1.35'
      });
    }

    setImportant(pieces.leftHeader, {
      display: 'none'
    });

    setImportant(pieces.grid, {
      'box-sizing': 'border-box',
      display: 'grid',
      gap: '18px',
      'grid-auto-flow': 'column',
      'grid-auto-columns': '146px',
      'grid-template-columns': 'none',
      'grid-column': isDesktop ? '1 / -1' : '1',
      'grid-row': '2',
      'align-self': isDesktop ? 'end' : 'auto',
      height: isDesktop ? '201px' : 'auto',
      margin: '0',
      overflow: 'auto hidden',
      'overflow-x': 'auto',
      padding: isDesktop ? '0 0 16px' : '0 0 14px',
      'scroll-snap-type': 'x proximity'
    });

    setImportant(pieces.leftColumn, {
      background: '#fff',
      'border-radius': '8px',
      'box-sizing': 'border-box',
      'box-shadow': isDesktop ? '0 2px 8px rgba(15, 17, 20, 0.08)' : 'none',
      'grid-column': isDesktop ? '2' : '1',
      'grid-row': isDesktop ? '1' : '3',
      height: isDesktop ? '268px' : 'auto',
      margin: '0',
      padding: isDesktop ? '24px 35px 32px' : '20px 16px',
      overflow: 'hidden',
      'text-align': 'center'
    });

    setImportant(pieces.estimateBlock, {
      background: 'transparent',
      'border-radius': '0',
      'box-sizing': 'border-box',
      display: 'block',
      margin: '0',
      padding: '0',
      'text-align': 'center'
    });

    if (pieces.estimateBlock) {
      const total = pieces.estimateBlock.querySelector(CONFIG.selectors.calculatorTotal);
      const label = pieces.estimateBlock.querySelector('[data-optly-hp-plan-label]');
      const price = pieces.estimateBlock.querySelector('[data-optly-hp-plan-price]');
      const summary = pieces.estimateBlock.querySelector('[data-optly-hp-plan-summary]');
      const signup = pieces.estimateBlock.querySelector('.optly-hp-calc-signup');
      const planCard = pieces.estimateBlock.querySelector('.optly-hp-calc-plan-card');

      setImportant(total, {
        background: 'none',
        'background-clip': 'border-box',
        color: 'var(--optly-hp-blue)',
        margin: '0 0 4px',
        padding: '0',
        'font-size': isDesktop ? '50px' : '30px',
        'line-height': '1.1',
        'font-weight': '700',
        'text-align': 'center',
        '-webkit-background-clip': 'border-box',
        '-webkit-text-fill-color': 'var(--optly-hp-blue)'
      });

      setImportant(planCard, {
        'box-sizing': 'border-box',
        margin: isDesktop ? '18px 0 0' : '16px 0 0',
        padding: isDesktop ? '18px 0 0' : '14px 0 0',
        'border-top': '1px solid #ddd',
        'border-left': '0',
        'text-align': 'left'
      });

      setImportant(label, {
        display: 'inline',
        'font-size': isDesktop ? '16px' : '12px',
        'line-height': '1.2',
        margin: '0',
        color: '#0f1114'
      });

      setImportant(price, {
        display: 'inline',
        'font-size': isDesktop ? '13px' : '10px',
        'line-height': '1.2',
        color: '#0f1114',
        'font-weight': '400'
      });

      setImportant(summary, {
        display: isDesktop ? 'none' : 'block',
        'font-size': isDesktop ? '10px' : '9px',
        'line-height': '1.25',
        margin: '0 0 10px'
      });

      setImportant(signup, {
        background: '#0c0e11',
        'background-color': '#0c0e11',
        border: '1px solid #0c0e11',
        'border-radius': '999px',
        color: '#fff',
        display: 'inline-flex',
        'align-items': 'center',
        height: '40px',
        'justify-content': 'center',
        'line-height': '1',
        'min-width': isDesktop ? '120px' : '0',
        width: isDesktop ? 'auto' : '100%',
        padding: '0 24px',
        margin: '8px 0 0',
        'text-align': 'center',
        'vertical-align': 'middle'
      });
    }

    if (pieces.leftColumn || pieces.fullHeader) {
      const footnoteSources = [
        pieces.leftColumn,
        pieces.fullHeader
      ].filter(Boolean);
      const footnote = footnoteSources.reduce((match, source) => (
        match || Array.from(source.children).find((child) => /total device value/i.test(text(child)))
      ), null);

      if (footnote) {
        footnote.classList.add('optly-hp-calc-footnote');
        if (pieces.fullHeader && footnote.parentElement !== pieces.fullHeader) {
          pieces.fullHeader.appendChild(footnote);
        }
        setImportant(footnote, {
          display: 'block',
          margin: isDesktop ? '18px 0 0' : '12px 0 0',
          padding: '0',
          'font-size': isDesktop ? '11px' : '7px',
          'line-height': '1.3'
        });
      }
    }
  }

  function applyCalculatorBlockLayout(block) {
    const content = block.querySelector('[class*="CalculatorBlockContent"]');
    const imageWrapper = block.querySelector('[class*="CalculatorBlockImageWrapper"]');
    const picture = block.querySelector('picture');
    const img = block.querySelector('img');
    const label = block.querySelector('[class*="CalculatorBlockLabel"]');
    const controls = block.querySelector('[class*="CalculatorBlockControlWrapper"]');
    const valueInput = controls && controls.querySelector('input');

    setImportant(block, {
      background: '#fff',
      border: '1.8px solid #eeedf1',
      'border-radius': '7px',
      'box-sizing': 'border-box',
      width: '146px',
      'min-width': '146px',
      height: '185px',
      'min-height': '185px',
      'max-height': '185px',
      'max-width': '146px',
      overflow: 'hidden',
      'scroll-snap-align': 'start'
    });

    setImportant(content, {
      display: 'flex',
      'flex-direction': 'column',
      height: '140px',
      padding: '0',
      margin: '0'
    });

    setImportant(imageWrapper, {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      height: '92px',
      width: '100%',
      padding: '8px 0 0',
      margin: '0'
    });

    setImportant(picture, {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      height: '72px',
      width: '100%',
      margin: '0 auto'
    });

    setImportant(img, {
      'max-height': '64px',
      'max-width': '86px',
      width: 'auto',
      height: 'auto',
      'object-fit': 'contain'
    });

    setImportant(label, {
      'font-size': '12px',
      'line-height': '1.2',
      margin: '0',
      padding: '0 8px',
      'min-height': '30px',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'text-align': 'center'
    });

    setImportant(controls, {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      gap: '8px',
      'box-sizing': 'border-box',
      height: '31px',
      width: 'auto',
      'max-width': '110px',
      margin: '6px auto 8px',
      padding: '0'
    });

    setImportant(valueInput, {
      background: 'transparent',
      'background-color': 'transparent',
      border: '0',
      'border-radius': '0',
      'box-sizing': 'border-box',
      color: '#0c0e11',
      'font-size': '16px',
      'font-weight': '700',
      height: '31px',
      'line-height': '31px',
      margin: '0',
      padding: '0',
      'text-align': 'center',
      width: '24px',
      'min-width': '24px'
    });
  }

  function initCalculator() {
    const calc = document.querySelector(CONFIG.selectors.calculator);
    if (!calc) return;

    if (calc.getAttribute('data-atc-calc') !== 'main') {
      calc.setAttribute('data-atc-calc', 'main');
    }
    wrapCalculator(calc);
    calc.classList.add('optly-hp-calculator');

    const fullHeader = calc.querySelector(CONFIG.selectors.calcFullHeader);
    const grid = calc.querySelector(CONFIG.selectors.calcGrid);
    const leftColumn = calc.querySelector(CONFIG.selectors.calcLeftColumn);
    const leftHeader = calc.querySelector(CONFIG.selectors.calcLeftHeader);
    const estimateBlock = calc.querySelector(CONFIG.selectors.calcEstimateBlock);

    if (fullHeader) fullHeader.classList.add('optly-hp-calc-full-header');
    if (grid) grid.classList.add('optly-hp-calc-grid');
    if (leftColumn) leftColumn.classList.add('optly-hp-calc-left-column');
    if (leftHeader) leftHeader.classList.add('optly-hp-calc-left-header');
    if (estimateBlock) estimateBlock.classList.add('optly-hp-calc-estimate');

    normalizeCalculatorStructure(calc, {
      fullHeader,
      grid,
      leftColumn,
      leftHeader,
      estimateBlock
    });

    applyCalculatorLayout(calc, {
      fullHeader,
      grid,
      leftColumn,
      leftHeader,
      estimateBlock
    });

    calc.querySelectorAll(CONFIG.selectors.calcBlock).forEach((block) => {
      block.classList.add('optly-hp-calc-block');
      applyCalculatorBlockLayout(block);
    });

    updateCalculatorRecommendation(calc);

    if (!calc.dataset.optlyHpListeners) {
      calc.addEventListener('input', () => scheduleApply(50), true);
      calc.addEventListener('change', () => scheduleApply(50), true);
      calc.addEventListener('click', () => scheduleApply(150), true);
      calc.dataset.optlyHpListeners = 'true';
    }

    if (!state.calculatorObserver) {
      state.calculatorObserver = new MutationObserver(() => scheduleApply(50));
      state.calculatorObserver.observe(calc, { childList: true, characterData: true, subtree: true, attributes: true, attributeFilter: ['value', 'aria-label', 'disabled'] });
    }
  }

  function applyChanges() {
    addRootClass();
    if (!isTargetPage()) return;

    updateHeaderClaimsCta();
    markPlanCards();
    markSectionPills();
    markReviews();
    initCalculator();
  }

  function watchDocument() {
    if (state.documentObserver) return;
    state.documentObserver = new MutationObserver(() => scheduleApply(100));
    state.documentObserver.observe(document.documentElement || document.body, { childList: true, subtree: true });
  }

  function watchResize() {
    if (state.resizeListener) return;
    state.resizeListener = true;
    window.addEventListener('resize', () => scheduleApply(50), true);
  }

  function patchHistoryForSpa() {
    ['pushState', 'replaceState'].forEach((fn) => {
      const original = history[fn];
      if (!original || original.__optlyHpPatched) return;
      history[fn] = function () {
        const result = original.apply(this, arguments);
        scheduleApply(0);
        return result;
      };
      history[fn].__optlyHpPatched = true;
    });
    window.addEventListener('popstate', () => scheduleApply(0), true);
  }

  patchHistoryForSpa();
  watchDocument();
  watchResize();
  applyChanges();
})();
}}], "id": "4600326146228224", "name": "[DO NOT ARCHIVE] /program/hp-care-complete/ - HP Care Complete", "commitId": "6275520164265984", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5141333984149504", "integrationSettings": null, "variations": [{"id": "4560699838431232", "name": "Original", "actions": []}], "weightDistributions": null, "name": "[DO NOT ARCHIVE] /program/hp-care-complete/ - HP Care Complete", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4600326146228224"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5535356095823872"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": [{"type": "custom_code", "value": function($){!function(){const e=["children","closeButton","closeOnBackdropClick","headlineText","lockPageScroll","onClick","onClose"];function a(e,a,t,i,n,r,o){try{var c=e[r](o),l=c.value}catch(e){return void t(e)}c.done?a(l):Promise.resolve(l).then(i,n)}function t(e){return function(){var t=this,i=arguments;return new Promise(function(n,r){var o=e.apply(t,i);function c(e){a(o,n,r,c,l,"next",e)}function l(e){a(o,n,r,c,l,"throw",e)}c(void 0)})}}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,i)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach(function(a){r(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function r(e,a,t){return(a=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,a||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(a))in e?Object.defineProperty(e,a,{"value":t,"enumerable":!0,"configurable":!0,"writable":!0}):e[a]=t,e}var o=window.CRO_PJS.utils.log.bind(window,"[asurc125]"),c=window.CRO_PJS.utils.error.bind(window,"[asurc125]"),l="asurc125",s=((e,a)=>e[a]||(e[a]={}))(window,"CRO_SHARED_6142225485135872"),d=(e=>(null===(e=window.CRO_PJS.params)||void 0===e?void 0:e.teardownEvent)||"spaPageEnd")(),u=(e,a=!0)=>(e&&window.addEventListener(d,()=>e instanceof Element?e.remove():e(),{"once":a}),e);var p=(()=>window.CRO_PJS)(),m=(()=>p.utils)(),h=(()=>m.observeSelector)(),f=(e,a={},t={})=>{window.optimizely.push({"type":"event","eventName":e,"tags":a,"properties":t})},_="https://images.ctfassets.net/by1tgtd3v7z1",v="Cover any one printer, monitor, mouse, keyboard, webcam, microphone, pair of headphones, earbuds, speaker, external hard drive, universal dock, multiport hub, router, and modem",b="Repairs, replacements, or reimbursements",g="Coverage limit up to $3K per claim, $5K per rolling 12 months",y="Tech support",w="Cancel anytime",P="Mechanical or electrical breakdowns and accidental damage from handling coverage for portable devices begin on Day 31 of your plan.",k="You can receive up to $3K per claim, $5K per rolling 12 months.",O="Yes, expert tech support is available via chat or phone, or at any uBreakiFix® by Asurion store during open hours.",S="Take advantage of $0 laptop cleanings and PC tune-ups at your local uBreakiFix by Asurion store.",C="asurion.com/legal/hp",L={"HPBASE":{"shortName":"Individual","imageDesktop":`${_}/7wf1pi5ylmrRBJaSpaw8GP/316263b9cf35b51634819ff830a8c7b1/hp-care-complete-individual-dialog-header-desktop.png`,"imageMobile":`${_}/71VaFTZxwAOKhdByY8Eta6/ae055d65ce7d9888d6d6918b3075d7a1/hp-care-complete-individual-dialog-header-mobile.png`,"mainFeatures":["Cover up to 1 HP computer, regardless of age",v,b,g,y,w],"subscriptionPrice":"$6.99/month + tax","additionalDeviceEligibility":"Device must be an HP computer, and registration is required.","serviceFees":"$0"},"HPFAMILY":{"shortName":"Family","imageDesktop":`${_}/5OsNM6k9deLQsSts5XM7QD/18777c9a605dac5729479c6fbbeaba6d/hp-care-complete-family-dialog-header-desktop.png`,"imageMobile":`${_}/34sshHm4PLBqiH0tWsQrbT/f270c54fdfd3d093822da06c6f82b901/hp-care-complete-family-dialog-header-mobile.png`,"mainFeatures":["Cover up to 3 PCs (at least 1 HP computer), regardless of age",v,b,g,y,w],"subscriptionPrice":"$17.99/month + tax","additionalDeviceEligibility":"One device must be an HP computer, then all other devices can be any manufacturer or age. Registration is required.","serviceFees":"$0"},"HPWHOLEHOME":{"shortName":"Whole Home","imageDesktop":`${_}/hf45HCmxrP96508B2yYS1/ec76d4b92c318cf3c28ac03218688b50/hp-care-complete-whole-home-dialog-header-desktop.png`,"imageMobile":`${_}/6oDDvlENFgHYIVA60Bz36b/eef71aff12684768e3c9a7f9c4d9d952/hp-care-complete-whole-home-dialog-header-mobile.png`,"mainFeatures":["Cover your HP computer and all PCs you own","Cover all eligible devices used for entertainment, gaming, or home office work",b,g,y,w],"subscriptionPrice":"$24.99/month + tax","additionalDeviceEligibility":"Devices can be any manufacturer or age, and no product registration is required.","serviceFees":"$0–$99"}},H="asurc125__dialog_eSFuo",E="asurc125__scrollLock_eSFuo",$="asurc125__closeBtn_eSFuo",N="asurc125__modalHeadline_eSFuo",x="asurc125__closeBtnText_eSFuo",F="asurc125__closeBtnIcon_eSFuo",R="asurc125__srOnly_eSFuo",D=["innerHTML","className","htmlFor"];function M(e,a,...t){return"function"==typeof e?e(a):function(e,a,...t){const i=document.createElement(e);let n=t;if(a){for(const e in a)if("style"===e&&"object"==typeof a[e])Object.assign(i.style,a[e]);else if(D.includes(e)&&e in i)i[e]=a[e];else if(e.startsWith("on")&&"function"==typeof a[e]){const t=e.slice(2).toLowerCase();i.addEventListener(t,a[e].bind(i))}else if("children"===e)n=Array.isArray(a.children)?a.children:[a.children];else{if("classList"===e)continue;i.setAttribute(e,a[e])}for(const e of a.classList||[])e&&i.classList.add(e)}for(const e of n.flat())if(e instanceof Element)i.append(e);else{if(!e)continue;i.append(document.createTextNode(String(e)))}return i}(e,a,...t)}function B({"children":e}){return e}var A=e=>{const a=e.target;if(!(a instanceof HTMLDialogElement))return;const{"top":t,"left":i,"width":n,"height":r}=a.getBoundingClientRect(),{"clientX":o,"clientY":c}=e;c>=t&&c<=t+r&&o>=i&&o<=i+n||a.close()},j=e=>{var a;e.currentTarget instanceof Element&&(null===(a=e.currentTarget.closest("dialog"))||void 0===a||a.close())},T=()=>M("button",{"classList":[$,"cro_modal__close_btn"],"children":[M("span",{"classList":[x,R],"children":"Close"})," ",M("span",{"aria-hidden":"true","class":F,"innerHTML":'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>'})]}),Q=a=>{let{"children":t,"closeButton":i=T(),"closeOnBackdropClick":r=!0,"headlineText":o,"lockPageScroll":c=!0,"onClick":l=A,"onClose":s=j}=a,d=function(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(-1!==a.indexOf(i))continue;t[i]=e[i]}return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],-1===a.indexOf(t)&&{}.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}(a,e);const u=Math.floor(1e4+9e4*Math.random());return i.addEventListener("click",function(e){s.call(this,e),j(e)}),M("dialog",n(n(n({},o?{"aria-labelledby":`cro_modal__headline__${u}`}:{}),{},{"classList":["cro_modal",H,c?E:void 0],"onMousedown":r?l:void 0},d),{},{"children":[i,o&&M("h2",{"id":`cro_modal__headline__${u}`,"classList":[N,"cro_modal__headline"],"children":o}),M(B,{"children":t})]}))},I="asurc125__planOverviewModal_7QekR",U="asurc125__planOverviewContent_7QekR",X="asurc125__planOverviewInner_7QekR",G="asurc125__image_7QekR",q="asurc125__sectionHeading_7QekR",Y="asurc125__featureList_7QekR",W="asurc125__featureItem_7QekR",J="asurc125__section_7QekR",K="asurc125__sectionBody_7QekR",z="asurc125__planOverviewFooter_7QekR",V=({"heading":e,"body":a})=>M("div",{"className":J,"children":[M("p",{"className":q,"children":e}),M("p",{"className":K,"children":a})]}),Z=({"shortName":e,"imageDesktop":a,"imageMobile":t,"mainFeatures":i,"subscriptionPrice":n,"additionalDeviceEligibility":r,"serviceFees":o})=>{const c=M("div",{"className":U,"children":[M("div",{"className":X,"children":[M("picture",{"children":[M("source",{"type":"image/webp","media":"(max-width: 767px)","srcset":`${t}?fm=webp&q=65&w=768`}),M("img",{"src":`${a}?fm=webp&q=65&w=1024`,"alt":`HP Care Complete ${e}`,"loading":"lazy","decoding":"async","className":G})]}),M("p",{"className":q,"children":"Main features"}),M("ul",{"className":Y,"children":i.map(e=>M("li",{"className":W,"children":e}))}),M(V,{"heading":"Subscription price","body":n}),M(V,{"heading":"Additional device eligibility","body":r}),M(V,{"heading":"Covered perils","body":P}),M(V,{"heading":"Claim limits","body":k}),M(V,{"heading":"Service fees","body":o}),M(V,{"heading":"24/7 tech support","body":O}),M(V,{"heading":"In-store services","body":S}),M(V,{"heading":"Terms and conditions","body":C})]}),M("div",{"className":z})]}),l=Q({"lockPageScroll":!0,"closeOnBackdropClick":!0,"headlineText":e,"children":c});return l.classList.add(I),l.setAttribute("data-aui","modal"),l},ee="asurc125__planSelect_eGXUa",ae="asurc125__deviceSelect_eGXUa",te="asurc125__deviceSelectInput_eGXUa",ie="asurc125__selectLabel_eGXUa",ne="asurc125__arrow_eGXUa",re="asurc125__dropdownList_eGXUa",oe="asurc125__open_eGXUa",ce="asurc125__dropdownItem_eGXUa",le="asurc125__viewDetailsButton_eGXUa",se="asurc125__planPrice_eGXUa",de=[{"value":"HPBASE","label":"HP Care Complete Individual - $6.99/mo.","price":"$6.99"},{"value":"HPFAMILY","label":"HP Care Complete Family - $17.99/mo.","price":"$17.99"},{"value":"HPWHOLEHOME","label":"HP Care Complete Whole Home - $24.99/mo.","price":"$24.99"}],ue=()=>{const e=new URLSearchParams(window.location.search).get("plan")||"HPBASE",a=de.find(a=>a.value===e)||de[0];document.addEventListener("click",e=>{const{"target":a}=e;if(!(a instanceof Node))return;const t=document.querySelectorAll("[class*=dropdownList]");for(const e of t){const t=e.closest("[class*=deviceSelect]");if(t&&!t.contains(a)){const a=t.querySelector("button");e.classList.remove(oe),a.setAttribute("aria-expanded","false")}}});const t=(e=>{const a=document.querySelector("[class*=planOverviewModal]");if(a)return a;const t=M(Z,n({},e));return document.body.append(t),u(t),t})(L[e]),i=a=>{f("asurc125_plan_dropdown_interaction"),a!==e&&f("asurc125_plan_changed",{},{"plan":a}),(e=>{const a=new URL(window.location.href);a.searchParams.set("plan",e),window.location.href=a.toString()})(a)};return M("div",{"className":ee,"children":[M("div",{"className":ae,"children":[M("button",{"type":"button","className":te,"aria-label":"Select plan","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":"hp-plan-list","onClick":e=>{const{"currentTarget":a}=e;if(!(a instanceof HTMLElement))return;const t=a.closest("button"),i=a.parentElement.querySelector("[class*='dropdownList']").classList.toggle(oe);t.setAttribute("aria-expanded",String(i)),f("asurc125_plan_dropdown_interaction")},"children":[M("span",{"className":ie,"children":[a.label.split(" - ")[0]," "]}),M("span",{"className":ne})]}),M("ul",{"id":"hp-plan-list","role":"listbox","className":re,"children":de.map(e=>M("li",{"aria-selected":e.value===a.value,"className":ce,"onClick":()=>i(e.value),"children":e.label}))})]}),M("button",{"onClick":()=>{t instanceof HTMLDialogElement&&t.showModal(),f("asurc125_clicks_view_plan_details_link")},"data-aui":"action","className":le,"data-analytics-id":`list | HP Care Complete ${a.label}: Dialog - View plan details - link`,"children":"View plan details"}),M("div",{"data-aui":"text","className":se,"children":a.price})]})},pe={"v1":"asurc125__v1_Fl7ti"};o("Revision #10");var me=e=>{h(`${e}:not([${l}-touched])`,e=>{const a=M(ue,{});e.setAttribute(`${l}-touched`,"true"),e.insertAdjacentElement("beforebegin",a),u(a)},{"once":!0})},he=function(){var e=t(function*(e){o(`Activating ${e}`),function(e,a){if(a)u(function(e,a){return e.classList.add(a),()=>{e.classList.remove(a)}}(e,a))}(document.documentElement,pe[e]),me("[data-testid='personal-info-header']"),me("[class*=Router__StyledSidePanelContainer] [class*='CartSummary__'] + div ul[data-aui='list']:first-of-type")});return function(a){return e.apply(this,arguments)}}(),fe=function(){var e=t(function*(){});return function(){return e.apply(this,arguments)}}();s.init=(e,a)=>{try{e?he(e,a):fe(a)}catch(e){c(e)}}}();
}, "id": "069da079-f411-4a6a-8e07-b98c8ae3ce94", "dependencies": []}, {"type": "append", "value": "<style>.asurc125__planOverviewModal_7QekR{padding:0!important;min-height:20rem;width:calc(100% - 2rem);max-height:80%;flex-direction:column;overflow:hidden!important;background:var(--aui-elevated-level-02);position:relative;border-radius:1rem!important}.asurc125__planOverviewModal_7QekR[open]{display:flex}@media(min-width:768px){.asurc125__planOverviewModal_7QekR{max-height:60%;width:calc(66.6667% - 37.3333px)!important}}@media(min-width:1280px){.asurc125__planOverviewModal_7QekR{width:calc(50% - 32px)!important}}.asurc125__planOverviewModal_7QekR h2{font-family:Apercu,Arial,sans-serif;font-size:1.5rem;font-weight:700;text-align:left;line-height:2rem;margin:0;flex:0 0 auto;background-color:var(--aui-elevated-level-03);padding:calc(var(--aui-spacing-100) + var(--aui-spacing-150)) var(--aui-spacing-150) calc(var(--aui-spacing-100) + var(--aui-spacing-150)) var(--aui-spacing-300);box-shadow:inset 0 0 1px 1px var(--aui-outline-soft)}.asurc125__planOverviewModal_7QekR button[class*=__closeBtn]{top:13px;right:var(--aui-spacing-150,.75rem);z-index:99;cursor:pointer;padding:4px!important}.asurc125__planOverviewModal_7QekR button[class*=__closeBtn] [class*=__closeBtnIcon]{position:relative;border-radius:var(--aui-border-radius-round);width:1.5rem;height:1.5rem;padding:var(--aui-spacing-100)}.asurc125__planOverviewModal_7QekR button[class*=__closeBtn] [class*=__closeBtnIcon] svg{display:none}.asurc125__planOverviewModal_7QekR button[class*=__closeBtn] [class*=__closeBtnIcon]:after,.asurc125__planOverviewModal_7QekR button[class*=__closeBtn] [class*=__closeBtnIcon]:before{content:\"\";position:absolute;top:50%;left:50%;width:1.125rem;height:2px;border-radius:1px;background:var(--aui-on-surface,#1a1c1e)}.asurc125__planOverviewModal_7QekR button[class*=__closeBtn] [class*=__closeBtnIcon]:before{transform:translate(-50%,-50%) rotate(45deg)}.asurc125__planOverviewModal_7QekR button[class*=__closeBtn] [class*=__closeBtnIcon]:after{transform:translate(-50%,-50%) rotate(-45deg)}.asurc125__planOverviewModal_7QekR button[class*=__closeBtn]:hover [class*=__closeBtnIcon]{background:#ebebeb;transition:.2s ease-in-out}.asurc125__planOverviewContent_7QekR{flex:1 1 auto;padding:0 var(--aui-spacing-300,1.5rem) var(--aui-spacing-300,1.5rem);overflow-y:auto!important}.asurc125__planOverviewInner_7QekR{padding-bottom:1.5rem}.asurc125__image_7QekR{display:block;width:100%;height:auto;border-radius:.5rem;margin:0 0 1.25rem;object-fit:cover}.asurc125__sectionHeading_7QekR{font-family:Apercu,Arial,sans-serif;font-size:1rem;font-weight:700;line-height:1.4;margin:0 0 .25rem}.asurc125__featureList_7QekR{list-style:none;margin:0 0 1.25rem;padding:0}.asurc125__featureItem_7QekR{font-family:Apercu,Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.4;position:relative;padding-left:1.25rem;margin-bottom:.5rem}.asurc125__featureItem_7QekR:before{content:\"\";position:absolute;left:.25rem;top:.6em;width:5px;height:5px;border-radius:50%;background:#1a1c1e}.asurc125__section_7QekR{margin-bottom:1.25rem}.asurc125__sectionBody_7QekR{font-family:Apercu,Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.4;margin:0;color:#1a1c1e}.asurc125__planOverviewFooter_7QekR{flex-shrink:0}.asurc125__v1_Fl7ti [class*=CartSummary__]+div ul[data-aui=list]:first-of-type{display:none!important}.asurc125__v1_Fl7ti #main-content>[class*=asurc125__planSelect]{margin-top:16px!important}@media(min-width:768px){.asurc125__v1_Fl7ti #main-content>[class*=asurc125__planSelect]{display:none!important}}@media(max-width:767px){.asurc125__v1_Fl7ti [class*=Router__StyledSidePanelContainer] [class*=asurc125__planSelect]{display:none!important}}.asurc125__v1_Fl7ti #main-content [data-testid=personal-info-header]{margin-top:8px!important;margin-bottom:24px!important}@media(min-width:768px){.asurc125__v1_Fl7ti #main-content [data-testid=personal-info-header]{margin-top:2rem!important;margin-bottom:2rem!important}}.asurc125__planSelect_eGXUa{position:relative;width:100%;display:flex;gap:10px;justify-content:space-between}.asurc125__deviceSelect_eGXUa{position:relative;flex:1 1 auto;min-width:0}.asurc125__deviceSelectInput_eGXUa{width:100%;height:36px;border-radius:8px;border:1px solid #c6c6ca;background:#fff;color:#5d5e61;padding:0 0 0 2px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:4px;font-size:14px;line-height:130%;outline:none!important}@media(min-width:320px){.asurc125__deviceSelectInput_eGXUa{padding:0 12px 0 18px}}.asurc125__deviceSelectInput_eGXUa:focus{border:2px solid #1a1c1e}.asurc125__deviceSelectInput_eGXUa[aria-expanded=true] [class*=arrow]{transform:rotate(180deg)}.asurc125__selectLabel_eGXUa{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.asurc125__arrow_eGXUa{width:24px;height:24px;flex-shrink:0;background-image:url(//cdn.optimizely.com/img/21017440049/d0df07c896f241a49f674bd020a00abd.svg);background-repeat:no-repeat;background-position:50%;transition:transform .35s ease}.asurc125__dropdownList_eGXUa{position:absolute;top:calc(100% + 4px);left:0;display:none;z-index:10;color:#fff;list-style:none;width:max-content;min-width:187px;margin-top:-12px;flex-direction:column;align-items:flex-start;padding:8px 0!important;gap:2px;overflow:hidden;box-sizing:border-box;border-radius:4px;border:.5px solid var(--Neutral-Black,#000);background:#606060}.asurc125__dropdownList_eGXUa.asurc125__open_eGXUa{display:flex}.asurc125__dropdownItem_eGXUa{cursor:pointer;color:var(--Neutral-White,#fff);font-family:Helvetica;font-size:14px;font-style:normal;font-weight:400;line-height:130%;display:flex;padding:4.5px 8px;align-items:center;align-self:stretch;white-space:nowrap}.asurc125__dropdownItem_eGXUa[aria-selected=true]:before{content:\"\";width:16px;height:16px;margin-right:2px;background-repeat:no-repeat;background-position:50%;background-image:url(//cdn.optimizely.com/img/21017440049/59b5f7beaeae4266abfdc02aa57f14a0.svg)}.asurc125__dropdownItem_eGXUa[aria-selected=false]:before{content:\"\";width:18px}.asurc125__dropdownItem_eGXUa:hover{background-color:#333}.asurc125__viewDetailsButton_eGXUa{background:none;border:none;cursor:pointer;color:#0057b8;font-size:14px;font-weight:400;flex:0 0 auto}.asurc125__planPrice_eGXUa,.asurc125__viewDetailsButton_eGXUa{height:36px;display:flex;align-items:center;white-space:nowrap}.asurc125__planPrice_eGXUa{color:#000;text-align:right;font-size:16px;font-weight:700;line-height:130%;justify-content:flex-end;min-width:56px;width:auto}body:has(.asurc125__dialog_eSFuo.asurc125__scrollLock_eSFuo[open]){overflow:hidden}.asurc125__dialog_eSFuo{border:0;padding:2rem;box-shadow:0 6px 10px 4px #00000026;min-width:200px;border-radius:.5rem;box-sizing:border-box}.asurc125__dialog_eSFuo::backdrop{background-color:#0009}.asurc125__closeBtn_eSFuo{position:absolute;right:0;top:0;display:flex;flex-direction:row;gap:4px;border:0;background:#0000;padding:10px;align-items:center}.asurc125__modalHeadline_eSFuo{margin-top:0}.asurc125__closeBtnIcon_eSFuo,.asurc125__closeBtnText_eSFuo{font-weight:700;font-family:sans-serif}.asurc125__closeBtnIcon_eSFuo{display:flex}.asurc125__srOnly_eSFuo{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}</style>", "id": "a3bd518a-9149-413d-8866-34d84e6a5794", "dependencies": [], "selector": "head"}], "id": "4835737095372800", "name": "[ASURC-125] HP Care Complete Enrollment Flow Plan Toggle", "commitId": "5719981076250624", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {"google_analytics_4": {}, "28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "6142225485135872", "integrationSettings": null, "variations": [{"id": "6525767943716864", "name": "v0: Control", "actions": [{"viewId": "6254114745614336", "changes": [{"type": "custom_code", "value": function($){!function(){var i=window.CRO_PJS.utils.error.bind(window,"[asurc125]"),n=((i,n)=>i[n]||(i[n]={}))(window,"CRO_SHARED_6142225485135872");try{n.init()}catch(n){i(n)}}();
}, "id": "f38efbc3-b5d7-43d9-a055-b60ee4196065", "dependencies": []}]}]}, {"id": "6202350860238848", "name": "v1: Plan Toggle", "actions": [{"viewId": "6254114745614336", "changes": [{"type": "custom_code", "value": function($){!function(){var n=window.CRO_PJS.utils.error.bind(window,"[asurc125]"),i=((n,i)=>n[i]||(n[i]={}))(window,"CRO_SHARED_6142225485135872");try{i.init("v1","hp-care-complete-enrollment-flow-step-1")}catch(i){n(i)}}();
}, "id": "13cfb749-21b4-4fc6-8f13-c1d5f2a848d4", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "6525767943716864", "endOfRange": 5000}, {"entityId": "6202350860238848", "endOfRange": 10000}], "name": "[ASURC-125] HP Care Complete Enrollment Flow Plan Toggle", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4835737095372800"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6254114745614336"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "6142225485135872", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "4997067028824064", "name": "/att/home-tech-protection/ib-enroll - Calculator", "commitId": "6127700224507904", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"google_analytics_4": {}, "28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4899843162767360", "integrationSettings": null, "variations": [{"id": "6487633247862784", "name": "ATT calculator", "actions": [{"viewId": "5930484889288704", "changes": [{"dependencies": [], "id": "7058a5dd-fd37-4647-bc4e-6a81962f6dd6", "selector": "head", "type": "append", "value": "<style>[data-testid=\"calculator\"]:not([data-testid=\"calculator\"][data-atc-calc='main']){\r\n  display:none !important;\r\n}\r\n[data-testid=\"calculator\"] {\r\n  display:grid !important;\r\n  padding:32px 0 0 0 !important;\r\n}\r\n/* Panel fill: Figma --aui-surface-variant on frame 14515:1443 */\r\n[data-testid=\"calculator\"] .innerContainer {\r\n  background:#faf9fc !important;\r\n  border-radius:16px !important;\r\n  width:unset !important;\r\n  padding:0 !important;\r\n}\r\n[data-testid=\"calculator\"] [class*='CalculatorEstimateBlock'] {\r\n  background-color: white !important;\r\n  grid-column: 3 / span 6 !important;\r\n  grid-row: 1 / span 12 !important;\r\n  padding: 0 !important;\r\n  margin: 32px !important;\r\n  border-radius: .375rem !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] [class*='CalculatorFullWidthHeader']{\r\n  display:grid !important;\r\n  grid-column: 1 / span 6 !important;\r\n  grid-row: 1 / span 1 !important;\r\n  text-align: left !important;\r\n  margin:32px 32px 16px 32px !important;\r\n}\r\n[data-testid=\"calculator\"] [class*='CalculatorLeftColumn'] {\r\n  grid-column: 7 / span 6 !important;\r\n  grid-row: 1 / span 1 !important;\r\n  padding:0 !important;\r\n  margin:0 !important;\r\n}\r\n[data-testid=\"calculator\"] [class*='CalculatorBlockImageWrapper'] {\r\n  height:6rem !important;\r\n  padding:var(--aui-spacing-150) !important;\r\n  margin:0 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] [class*='CalculatorEstimateHeader'],\r\n[data-testid=\"calculator\"] [class*='CalculatorLeftColumnHeader'] {\r\n  display:none !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] [class*='CalculatorGrid'] {\r\n  display: grid !important;\r\n  grid-gap: 0px !important;\r\n  padding: 16px 0 16px 16px !important;\r\n  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr)) !important;\r\n  grid-auto-flow: column !important;\r\n  grid-auto-columns: minmax(175px, 1fr) !important;\r\n  overflow-x: auto !important;\r\n  grid-column: 1 / span 12 !important;\r\n  grid-row: 2 / span 1 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .innerContainer [data-testid=\"calc-block\"]{\r\n  background:white !important;\r\n  max-width:146px !important;\r\n  border-radius: 7.133px !important;\r\n  border: 1.783px solid #EEEDF1 !important;\r\n}\r\n[data-testid=\"calculator\"] .innerContainer [data-testid=\"calc-block\"] [class*='text']{\r\n  padding:0 !important;\r\n  margin:0 !important;\r\n}\r\n[data-testid=\"calculator\"] .innerContainer [data-testid=\"calc-block\"] [class*='text']:not(button){\r\n  font-size:14px !important;\r\n  padding-bottom:8px !important;\r\n  font-weight:700 !important;\r\n  color:black !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .innerContainer [data-testid=\"calc-block\"] button {\r\n  width: 30.738px !important;\r\n  height: 30.738px !important;\r\n  background-color:#ffffff !important;\r\n  color:#1a1c1e !important;\r\n  border: 1px solid #eeedf1 !important;\r\n  border-radius: 50% !important;\r\n  padding:0 !important;\r\n}\r\n/* Compact per-tile count. Do not set color or display. The component hides this at zero. */\r\n[data-testid=\"calculator\"] .innerContainer [data-testid=\"calc-block\"] input {\r\n  width: 24px !important;\r\n  min-width: 24px !important;\r\n  max-width: 24px !important;\r\n  height: 31px !important;\r\n  margin: 0 !important;\r\n  padding: 0 !important;\r\n  background: transparent !important;\r\n  border: 0 !important;\r\n  border-radius: 0 !important;\r\n  box-shadow: none !important;\r\n  font-size: 16px !important;\r\n  font-weight: 700 !important;\r\n  line-height: 31px !important;\r\n  text-align: center !important;\r\n  color: black !important;\r\n  -webkit-appearance: none !important;\r\n  appearance: none !important;\r\n}\r\n[data-testid=\"calculator\"] .innerContainer [data-testid=\"calc-block\"] > div.items-center {\r\n  padding:8px 0 !important;\r\n}\r\n[data-testid=\"calculator\"] .innerContainer [data-testid=\"calc-block\"] > div:nth-child(2) {\r\n  padding:0 0 14px 0 !important;\r\n  margin:0 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .plan-card {\r\n  padding:0 24px 16px 24px !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .summary p {\r\n  font-size: 18px !important;\r\n  color: #1a1c1e !important;\r\n  margin: 0 !important;\r\n  padding: 0 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .summary p.att-total {\r\n  color: rgb(31, 89, 178) !important;\r\n  font-weight: 700 !important;\r\n  font-size: 72px !important;\r\n  line-height: 1 !important;\r\n  text-align: center !important;\r\n  padding: 16px 16px 0 16px !important;\r\n  margin: 0 !important;\r\n}\r\n[data-testid=\"calculator\"] .summary p.att-count {\r\n  color: #1a1c1e !important;\r\n  font-size: 18px !important;\r\n  font-weight: 400 !important;\r\n  text-align: center !important;\r\n  padding: 8px 16px 16px 16px !important;\r\n  margin: 0 !important;\r\n}\r\n[data-testid=\"calculator\"] .att-count strong {\r\n  font-weight: 700 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] hr {\r\n  border: none !important;\r\n  border-top: 1px solid #eeedf1 !important;\r\n  margin: 0 0 16px 0 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .recommendation {\r\n  display: flex !important;\r\n  justify-content: space-between !important;\r\n  align-items: center !important;\r\n  gap: 12px !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .subtitle {\r\n  color: #5d5e61 !important;\r\n  font-size: 13px !important;\r\n  margin:0 !important;\r\n  padding:0 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .plan {\r\n  font-size: 18px !important;\r\n  margin: 0 !important;\r\n  text-align:left !important;\r\n}\r\n[data-testid=\"calculator\"] .label {\r\n  color: #1a1c1e !important;\r\n  font-size: 18px !important;\r\n  font-weight: 700 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .recommendation .text{\r\n  padding:8px 0 !important;\r\n  text-align: left !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .price {\r\n  display: block !important;\r\n  font-weight: 400 !important;\r\n  font-size: 14px !important;\r\n  color: #1a1c1e !important;\r\n  margin: 0 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .signup-btn {\r\n  background-color: #0c0e11 !important;\r\n  color: #fff !important;\r\n  border: none !important;\r\n  border-radius: 160000px !important;\r\n  font-size: 16px !important;\r\n  cursor: pointer !important;\r\n  font-weight: 500 !important;\r\n  width:252px !important;\r\n  height:48px !important;\r\n  text-decoration: none !important;\r\n  display:grid !important;\r\n  place-content:center !important;\r\n  margin: 0 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] [data-testid*=\"-increment-button\"][disabled] {\r\n  opacity: 0.4 !important;\r\n  pointer-events: none !important;\r\n  cursor: not-allowed !important;\r\n  color:#1a1c1e !important;\r\n}\r\n\r\n/* Hide the unformatted Contentful total. .att-total mirrors it with a thousands separator. */\r\n[data-testid=\"calculator\"] p[data-testid$=\"-total\"] {\r\n  display: none !important;\r\n}\r\n\r\n/* Estimate block card (parent of total) */\r\n[data-testid=\"calculator\"] div:has(> p[data-testid=\"AT&T HomeTech Protection Calculator - Acquisition Page-total\"]) {\r\n  background-color: white !important;\r\n  border-radius: .375rem !important;\r\n  margin: 32px !important;\r\n  padding: 0 !important;\r\n}\r\n/* Grid of device blocks (when CalculatorGrid class is absent) */\r\n[data-testid=\"calculator\"] .innerContainer > .grid {\r\n  display: grid !important;\r\n  grid-gap: 0 !important;\r\n  padding: 16px 0 16px 16px !important;\r\n  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr)) !important;\r\n  grid-auto-flow: column !important;\r\n  grid-auto-columns: minmax(175px, 1fr) !important;\r\n  overflow-x: auto !important;\r\n}\r\n/* Image wrapper in new calc-block (span with image) */\r\n[data-testid=\"calculator\"] [data-testid=\"calc-block\"] > div:first-child > span {\r\n  height: 6rem !important;\r\n  padding: var(--aui-spacing-150, 0.75rem) !important;\r\n  margin: 0 !important;\r\n}\r\n[data-testid=\"calculator\"] div:has(> p[data-testid=\"AT&T HomeTech Protection Calculator - Acquisition Page-total\"]) .plan-card {\r\n  padding: 0 24px 16px 24px !important;\r\n}\r\n\r\n@media only screen and (max-width: 1023px) {\r\n  [data-testid=\"calculator\"] [class*='CalculatorFullWidthHeader'] {\r\n    grid-column: 1 / span 12 !important;\r\n    grid-row: 1 / span 1 !important;\r\n    margin:32px 24px 8px 24px !important;\r\n  }\r\n  [data-testid=\"calculator\"] [class*='CalculatorLeftColumn'] {\r\n    padding-top:16px !important;\r\n    grid-column: 1 / span 12 !important;\r\n    grid-row: 3 / span 1 !important;\r\n  }\r\n  [data-testid=\"calculator\"] [class*='CalculatorGrid'] {\r\n    grid-column: 1 / span 12 !important;\r\n    grid-row: 2 / span 1 !important;\r\n  }\r\n  [data-testid=\"calculator\"] .recommendation {\r\n    display: block !important;\r\n  }\r\n  [data-testid=\"calculator\"] .signup-btn {\r\n    width: 100% !important;\r\n    margin-top: 16px !important;\r\n  }\r\n  [data-testid=\"calculator\"] .subtitle {\r\n    margin: 0 0 4px 0 !important;\r\n  }\r\n  [data-testid=\"calculator\"] .plan {\r\n    margin-bottom: 0 !important;\r\n    text-align: center !important;\r\n  }\r\n  [data-testid=\"calculator\"] .recommendation .text {\r\n    text-align: center !important;\r\n  }\r\n  [data-testid=\"calculator\"] .summary p.att-total {\r\n    font-size: 48px !important;\r\n  }\r\n  [data-testid=\"calculator\"] div:has(> p[data-testid=\"AT&T HomeTech Protection Calculator - Acquisition Page-total\"]) {\r\n    margin: 32px 24px !important;\r\n  }\r\n  [data-testid=\"calculator\"] h2 {\r\n    line-height: 1.15 !important;\r\n  }\r\n}</style>"}, {"dependencies": [], "id": "ff3cf214-a02c-429e-b27a-1eeacdf110a2", "type": "custom_code", "value": function($){const SIGNUP_URL = 'https://www.signup.asurion.com/home-tech-protect/att/app/account-lookup';

const summaryTemplate = `<div class="plan-card">
    <div class="summary">
      <p class="att-total">$0</p>
      <p class="att-count"><strong class="purchaseCount">0</strong> <span class="deviceWord">devices</span></p>
    </div>
    <hr>
    <div class="recommendation">
      <div class="text">
        <p class="subtitle">For you, we recommend:</p>
        <p class="plan"><strong class="label">AT&T HomeTech Protection</strong></p>
        <p class="price">$25/month + tax</p>
      </div>
      <a class="signup-btn" href="${SIGNUP_URL}">Sign up</a>
    </div>
  </div>`;

const TOTAL_SELECTOR = 'p[data-testid="AT&T HomeTech Protection Calculator - Acquisition Page-total"]';
const CALCULATOR_SELECTOR = '[data-testid="calculator"]';

// --- Hydration-safe target internals ---
const origRemoveChild = Node.prototype.removeChild;
const origReplaceChild = Node.prototype.replaceChild;
const lockedEls = new Set();
let optlyWriting = false;

function lockInjectedCard(card) {
  if (!card || !card.parentNode || card.__atcLocked) return;
  const parent = card.parentNode;
  lockedEls.add(card);
  card.__atcLocked = true;

  if (parent.__atcParentLocked) return;
  parent.removeChild = function (child) {
    if (!optlyWriting && lockedEls.has(child)) return child;
    return origRemoveChild.call(this, child);
  };
  parent.replaceChild = function (newChild, oldChild) {
    if (!optlyWriting && lockedEls.has(oldChild)) return oldChild;
    return origReplaceChild.call(this, newChild, oldChild);
  };
  parent.__atcParentLocked = true;
}

function getCalculator() {
  return document.querySelector(CALCULATOR_SELECTOR);
}

function getPlanCard(totalElement) {
  return totalElement && totalElement.parentElement && totalElement.parentElement.querySelector('.plan-card');
}

function collectInputs() {
  const nodeList = document.querySelectorAll(`${CALCULATOR_SELECTOR} input`);
  const items = [];
  nodeList.forEach(input => {
    const id = input.id || input.name || 'unnamed';
    const val = Math.max(0, parseInt(input.value, 10) || 0);
    items.push({ input, id, val });
  });
  return items;
}

function formatTotal(totalElement) {
  const raw = totalElement ? totalElement.textContent : '';
  const amount = Number(String(raw).replace(/[^0-9]/g, '') || 0);
  return '$' + amount.toLocaleString('en-US');
}

function updateSummaryDisplay() {
  const totalElement = document.querySelector(TOTAL_SELECTOR);
  const planCard = getPlanCard(totalElement);
  if (!planCard) return;

  const summaryDiv = planCard.querySelector('.summary');
  if (!summaryDiv) return;

  const subtitle = planCard.querySelector('.subtitle');
  const label = planCard.querySelector('.label');
  const price = planCard.querySelector('.price');
  const signupBtn = planCard.querySelector('a.signup-btn');
  const attTotal = planCard.querySelector('.att-total');
  if (subtitle) subtitle.textContent = 'For you, we recommend:';
  if (label) label.textContent = 'AT&T HomeTech Protection';
  if (price) price.textContent = '$25/month + tax';
  if (signupBtn) {
    signupBtn.textContent = 'Sign up';
    signupBtn.setAttribute('href', SIGNUP_URL);
  }
  if (attTotal) attTotal.textContent = formatTotal(totalElement);

  const items = collectInputs();
  const totalPurchases = items.reduce((acc, it) => acc + it.val, 0);
  const purchaseCountEl = summaryDiv.querySelector('.purchaseCount');
  if (purchaseCountEl) purchaseCountEl.textContent = String(totalPurchases);
  const deviceWord = summaryDiv.querySelector('.deviceWord');
  if (deviceWord) deviceWord.textContent = totalPurchases === 1 ? 'device' : 'devices';

  return {
    calculatorState: items.reduce((acc, it) => {
      acc[it.id] = { count: it.val };
      return acc;
    }, {}),
    summary: { totalPurchases }
  };
}

// ======= CONFIGURE THIS =======
function applyChanges() {
  // ---------- CONFIG (all tunables live here) ----------
  const CONFIG = {
    SELECTORS: {
      CALCULATOR: CALCULATOR_SELECTOR,
      SUMMARY_INJECT_AFTER: TOTAL_SELECTOR,
      SUMMARY: '.summary',
      PURCHASE_COUNT: '.purchaseCount'
    },
    SUMMARY_TEMPLATE: summaryTemplate,
    STATIC_PLAN: {
      label: 'AT&T HomeTech Protection',
      price: '$25/month + tax',
      signupHref: SIGNUP_URL
    }
  };
  // -----------------------------------------------------

  function moveElements() {
    const priceElement = document.querySelector('[class*="CalculatorAsteriskPrice"]');
    const subheaderElement = document.querySelector('[class*="CalculatorSubheaderText"]');
    if (priceElement && subheaderElement && subheaderElement.parentNode) {
      subheaderElement.parentNode.insertBefore(priceElement, subheaderElement.nextSibling);
    }
  }

  function wrapChildrenInContainer(parent) {
    if (!(parent instanceof HTMLElement)) {
      return;
    }
    const existingContainer = parent.querySelector('.innerContainer');
    if (existingContainer) {
      return;
    }
    const container = document.createElement('div');
    container.classList.add('innerContainer');
    parent.classList.forEach(cls => container.classList.add(cls));
    parent.className = '';
    while (parent.firstChild) container.appendChild(parent.firstChild);
    parent.appendChild(container);
  }

  function injectSummary(cssSelector) {
    const totalElement = document.querySelector(cssSelector);
    if (!totalElement) return false;
    const existingPlanCard = totalElement.parentElement && totalElement.parentElement.querySelector('.plan-card');
    if (existingPlanCard) {
      lockInjectedCard(existingPlanCard);
      return true;
    }
    optlyWriting = true;
    try {
      totalElement.insertAdjacentHTML('afterend', CONFIG.SUMMARY_TEMPLATE);
    } finally {
      optlyWriting = false;
    }
    lockInjectedCard(getPlanCard(totalElement));
    return true;
  }

  let calculatorState = {};
  let summary = {};

  function updateCalculatorState() {
    const result = window.__atcUpdateSummaryDisplay();
    if (!result) return { calculatorState, summary };
    calculatorState = result.calculatorState;
    summary = result.summary;

    if (!Array.isArray(window.dataLayer)) {
      window.dataLayer = [];
    }
    window.dataLayer.push({
      event: 'plan_calculator_update',
      recommended_plan: 'ATTHTP',
      total_devices: summary.totalPurchases
    });

    return { calculatorState, summary };
  }

  function observeParagraphChanges() {
    const paragraphs = document.querySelectorAll(TOTAL_SELECTOR);
    const observer = new MutationObserver(() => {
      updateCalculatorState();
    });
    paragraphs.forEach(p => {
      observer.observe(p, { childList: true, characterData: true, subtree: true });
    });
  }

  function init() {
    const el = document.querySelector(CONFIG.SELECTORS.CALCULATOR);
    if (!el) return;
    el.setAttribute('data-atc-calc', 'main');
    wrapChildrenInContainer(el);
    moveElements();
    const injected = injectSummary(CONFIG.SELECTORS.SUMMARY_INJECT_AFTER);

    observeParagraphChanges();
    updateCalculatorState();
    return injected;
  }

  const el = document.querySelector(CONFIG.SELECTORS.CALCULATOR);
  if (el && el.getAttribute('data-atc-calc')) {
    injectSummary(CONFIG.SELECTORS.SUMMARY_INJECT_AFTER);
    updateCalculatorState();
    return Boolean(getPlanCard(document.querySelector(CONFIG.SELECTORS.SUMMARY_INJECT_AFTER)));
  } else {
    return init();
  }
}
// ======= END CONFIG =======

window.__atcUpdateSummaryDisplay = updateSummaryDisplay;

// --- Utilities ---
function safeApply() {
  try {
    return applyChanges();
  } catch (e) {
    return false;
  }
}

const watchForTarget = (() => {
  let observer;
  return () => {
    if (observer) return;
    observer = new MutationObserver((mutations) => {
      const onlyOurChanges = mutations.every((m) => {
        const target = m.target;
        return target && target.closest && target.closest('.plan-card');
      });
      if (onlyOurChanges) return;
      const totalElement = document.querySelector(TOTAL_SELECTOR);
      if (totalElement && !getPlanCard(totalElement)) {
        safeApply();
      }
    });
    observer.observe(document.documentElement || document.body, { childList: true, subtree: true });
  };
})();

(function patchHistoryForSpa() {
  const fire = () => {
    safeApply();
    watchForTarget();
  };
  ['pushState', 'replaceState'].forEach(fn => {
    const orig = history[fn];
    if (!orig || orig.__patched) return;
    history[fn] = function () { const res = orig.apply(this, arguments); fire(); return res; };
    history[fn].__patched = true;
  });
  window.addEventListener('popstate', fire, true);
})();

document.addEventListener('click', () => setTimeout(updateSummaryDisplay, 150), true);
document.addEventListener('input', () => setTimeout(updateSummaryDisplay, 150), true);
document.addEventListener('change', () => setTimeout(updateSummaryDisplay, 150), true);

safeApply();
watchForTarget();
}}]}]}], "weightDistributions": null, "name": "/att/home-tech-protection/ib-enroll - Calculator", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4997067028824064"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5930484889288704"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "4899843162767360", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": [{"id": "435E6942-9095-4689-A3EF-8E82E223924F", "type": "append", "selector": "head", "value": "<style>@media screen and (max-width: 900px) {\n  .uppercase p {\n  \tpadding: 0 1rem;\n  }\n  [data-testid=\"calculator\"] > div.grid{\n\t\tdisplay: grid;\n    grid-gap: 16px;\n    padding: 16px;\n    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));\n    grid-auto-flow: column;\n    grid-auto-columns: minmax(175px, 1fr);\n    overflow-x: auto;\n}\n  [data-testid=\"calc-block\"]{\n  \tbox-shadow: rgb(213, 214, 218) 0px 0px 0px 1px;\n  }\n}\n@media screen and (max-width: 450px) and (min-width: 430px) {\n  #homeplus-calculator > div.grid{\n\t\tdisplay: grid;\n    grid-gap: 16px;\n    padding: 16px;\n    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));\n    grid-auto-flow: column;\n    grid-auto-columns: minmax(170px, 1fr);\n    overflow-x: auto;\n}\n\n}\n\n\n@media screen and (min-width: 901px) {\n[data-testid=\"calculator\"] > div:nth-child(1) {\n  grid-area: text;\n}\n\n[data-testid=\"calculator\"] > div:nth-child(2) {\n  grid-area: items;\n\n}\n[data-testid=\"calculator\"] > div:nth-child(3) {\n  grid-area: sum;\n}\n\n[data-testid=\"calculator\"] {\n  grid-template-areas: \n    \"text text text text text text items items items items items items\"\n    \"sum sum sum sum sum sum items items items items items items\"\n    \". . . . . . items items items items items items\";\n}\n}</style>", "dependencies": []}], "id": "5017045725609984", "name": "/verizon/home-device-protect/calculator/ - Calculator Horizontal Scroll", "commitId": "5631537165631488", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"google_analytics_4": {}, "28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "6380994060615680", "integrationSettings": null, "variations": [{"id": "5351709577314304", "name": "Original", "actions": []}], "weightDistributions": null, "name": "/verizon/home-device-protect/calculator/ - Calculator Horizontal Scroll", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5017045725609984"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5273614388297728"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5027586821062656", "name": "/attmx/tier-*-poliza/ - Hero Style Change", "commitId": "6458521777078272", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4839114546085888", "integrationSettings": null, "variations": [{"id": "6225211826110464", "name": "Original", "actions": [{"viewId": "5534900657324032", "changes": [{"id": "2DBF2B22-9DC9-49FA-8044-550AF173AD89", "type": "append", "selector": "head", "value": "<style>@media screen and (min-width: 1024px) {\n  \n[data-analytics-id=\"Hero | ATT-Mexico--AT&T-Protecci\u00f3n-de-Equipo-Hero-Button-1\"],[data-analytics-id=\"Hero | ATT-Mexico--AT&T-Protecci\u00f3n-de-Equipo-Hero-Button-Tier-3\"]{\n\tbackground:#FFFFFF;\n  color:#000000;\n  border-color:#FFFFFF;\n}\n\na[data-analytics-id=\"Hero | ATT-Mexico--AT&T-Protecci\u00f3n-de-Equipo-Hero-Button-1\"]:hover,[data-analytics-id=\"Hero | ATT-Mexico--AT&T-Protecci\u00f3n-de-Equipo-Hero-Button-Tier-3\"]:hover{\n\n  color:#000000 !important;\n\n  background: rgb(230, 230, 235) !important;\n  border-color: rgb(230, 230, 235) !important;\n}\n\n\n\na[data-analytics-id=\"Hero | Desktop | smallCta-ATT-Mexico---Protecci\u00f3n-de-Equipo-AT&T\"],a[data-analytics-id=\"Hero | Desktop | smallCta-ATT-Mexico---AT&T-Protecci\u00f3n-de-Equipo-Hero\"]{\n\tcolor:#FFFFFF;\n\n}\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "/attmx/tier-*-poliza/ - Hero Style Change", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5027586821062656"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5534900657324032"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5053825120206848", "name": "/phone-insurance/", "commitId": "5927589315870720", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5635080626896896", "integrationSettings": null, "variations": [{"id": "6720491642159104", "name": "Original", "actions": [{"viewId": "6413036374720512", "changes": [{"id": "385D94BC-A091-41F2-8A2F-B32D733136CC", "type": "custom_code", "value": function($){var loadCount = 0;
var startTimes = [];
var endTimes = [];
var timeMeasureFromStart = performance.now();
var timeMeasureEnd;


let create = (url) => {
  return new Promise(function (resolve, reject) {
    let imported = document.createElement("script");
    imported.src = url;
    imported.async = false;
    imported.onload = () => {
      resolve(url);
    };
    imported.onerror = () => {
      reject(url);
    };
    document.head.appendChild(imported);
  });
};
let scripts = [
  "https://io.asurion.com/phoneinsurancescroller/cdn/ScrollMagic.min.js",
  "https://io.asurion.com/phoneinsurancescroller/cdn/animation.gsap.min.js",
  "https://io.asurion.com/phoneinsurancescroller/cdn/gsap.min.js" ,
      "https://io.asurion.com/phoneinsurancescroller/cdn/phone-insurance.js?111824789",
];
let promiseData = [];
scripts.forEach(function (url) {
  promiseData.push(create(url));
});
Promise.all(promiseData)
  .then(function () {
    var utils = window["optimizely"].get("utils");
    startTimes = [];
    endTimes = [];
		
    utils.observeSelector(
      "#tc_section_house_loader",
      function (el) {
         if (document.getElementById('phone-insurance-scroller-wrapper')) {
        	console.log('DOM already initialized.');
        	return;
    		}
        console.log("test: Step 1 Observing tc_section_house_loader");
        if(window.timeout2)
        clearTimeout(window.timeout2);

        startTimes.push(performance.now());
        loadCount = loadCount + 1;
				window.scrollLoaded = false;
        
        if (document.querySelector("#tc_section_house_loader")) {
          console.log("test: Step 2 scrollsection_addtodom()");
          scrollsection_addtodom("tc_section_house_loader");
        }
  
        endTimes.push(performance.now());
        var totalLoadTime = startTimes.reduce((t, s, i) => {
          return t + (endTimes[i] - s);
        }, 0);

        if (loadCount > 1) {
          timeMeasureEnd = performance.now();
        }
      },
      {
        once: false,

      }
    );
		utils.observeSelector("#phone-insurance-scroller-container",
      function (el) {
      console.log("test: Step 3 Observing phone insurance scroller container");
      if(window.timeout2)
        clearTimeout(window.timeout2);

window.timeout2 = setTimeout(function () {
          timeMeasureEnd = performance.now();
  				console.log("test: Step 4 scrollsection_scrollstuff()");
          scrollsection_scrollstuff();
         }, 3500);
  },
      {
        once: false,
      })


    }).catch(function (error) {
    console.log(error + " failed to load!");
  });
}, "dependencies": []}, {"id": "44C843E0-5A26-4A53-8A4B-9B58086787A3", "type": "append", "selector": "head", "value": "<style>sup{\n\ttop: 0;\n}\n#interactive-component-fallback,.carousel-root{\n\tdisplay:none;\n}\n\n@media screen and (min-width: 1400px) and (max-height: 720px) {\n  #phone-insurance-scroller-wrapper {\n    margin-top:40px;\n   }\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "/phone-insurance/", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5053825120206848"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6413036374720512"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5097964088066048", "name": "ubreakifix.com/locations/* - Spanish Top Level Banner", "commitId": "5215066304282624", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "6571378388762624", "integrationSettings": null, "variations": [{"id": "5044834000437248", "name": "Original", "actions": [{"viewId": "5660914041487360", "changes": [{"id": "50D13C91-6E38-4664-8C40-4B81978769F8", "type": "custom_code", "value": function($){var utils = window["optimizely"].get('utils');
// Create a new <style> element
console.log("test123");
const style = document.createElement('style');
style.type = 'text/css';

// Define the CSS you want to add
const css = `#bannerTop {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.5rem 1.5rem;
    min-height: 4.5rem;
    background-color: var(--aui-primary);
    
}
#bannerInner{
	display: grid; margin:auto; grid-template-columns: auto auto;
}
 #bannerInner{
	display: grid;
  margin:auto;
  grid-template-columns: auto;
 }
  @media screen and (min-width: 1024px) {
 {
     font-size: 1.5rem;
    line-height: 135%;
 }
 
  }
 @media screen and (max-width: 1023px) {
 [data-testid="scrollBannerBody"]{
    font-size: 1rem !important;
 }
 [data-testid="topBannerBody"] + a{padding: 0.25rem 1rem !important;}
 }
 @media screen and (max-width: 768px){
 [data-testid="topBannerBody"] + a{
     text-align: center;
    color: white;
    text-decoration: underline;
 }
 }
@media screen and (min-width: 768px){
  #bannerInner{
	display: grid;
  margin:auto;
  grid-template-columns: auto auto;
 }
 
 [data-testid="topBannerBody"] + a   {
    box-sizing: border-box;
    margin: 0px;
    border: 0px solid;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
    border-radius: 10rem;
    font-family: inherit;
    font-weight: 400;
    font-style: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-width: 2px;
    letter-spacing: 0px;
    width: auto;
    text-align: center;
    white-space: nowrap;
    background: rgb(255, 255, 255);
    border-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    height: auto;
    font-size: 1rem !important;
    line-height: 150% !important;
    flex-shrink: 0 !important;
    text-underline-position: under !important;
    padding: 0.625rem 1.5rem;
    margin-left: 1rem;
    }
}
[data-testid="topBannerBody"]{
    display: grid;
    align-items: center;
		text-align: center;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    border: 0px solid;
    color: #FFFFFF;
    font-size: 1.5rem;
    line-height: 135%;
    text-align: center;
    align-items: center;
    }
    
[data-testid="topBannerBody"] > div    {

    text-align: center;
    color: var(--aui-on-primary);

    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    border: 0px solid;
    -webkit-font-smoothing: antialiased;
    }
    
 
`

// For older versions of IE
if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

// Append the style element to the document head
document.head.appendChild(style);

utils.observeSelector("main", function(el) {
  var p = document.querySelector('[data-analytics-id="store-contact-block-phone-number"]');
  var n = "";
  if(p){
		n = p.innerText;
	}
  if(!document.querySelector("#bannerTop")){
   const banner = `<div id="bannerTop" data-analytics-id="TopBanner | Spanish Speaking STB" data-testid="top-banner" class=""><div id="bannerInner" class="elements__BannerInner-sc-2b391a9f-1 fwOtou"><div data-testid="topBannerBody" class="elements__BodyWrapper"><div><p><span style="font-weight:700">Hablas español?</span> Hablamos español y estamos listos para ayudarle.</p></div></div><a tabindex="0" href="tel:${n}" rel="noopener" target="_self" data-testid="cta" aria-label="Hablar con un experto" data-aui="link">Hablar con un experto</a></div></div>`;
	document.querySelector("main").insertAdjacentHTML('afterbegin',banner);
  }


}, {
  "once": false,
});
}, "dependencies": []}]}]}], "weightDistributions": null, "name": "ubreakifix.com/locations/* - Spanish Top Level Banner", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5097964088066048"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5660914041487360"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5151571709788160", "name": "/tech-tips/categories/press-release/ - Navigation & Search UI Text Replacement", "commitId": "5837598246043648", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5251328650248192", "integrationSettings": null, "variations": [{"id": "6515539858685952", "name": "Original", "actions": [{"viewId": "4735865532973056", "changes": [{"id": "9EB184B6-E505-45CB-BE50-0412AFA0039A", "type": "custom_code", "value": function($){// ======= CONFIGURE THIS =======
const TARGETS = [
    {
      name: 'backButton',
      selector: '[class*="BackButton"] [class*="BackButton"]',
      apply(el) {
        el.textContent = '< Back to newsroom';
        el.href = '/about/newsroom';
      },
    },
    {
      name: 'searchBoxPlaceholder',
      selector: '[class*="SearchBarContainer"] input',
      all: true,
      apply(el) {
        el.setAttribute('aria-label', 'Search press releases');
      },
    },
    {
      name: 'searchBoxLabel',
      selector: '[class*="SearchBarContainer"] input + label',
      all: true,
      apply(el) {
        el.textContent = 'Search press releases';
      },
    }
  ];
    
    function applyToElement(el, target) {
      if (el.dataset.optly === target.name) return;
      target.apply(el);
      el.dataset.optly = target.name;
    }

    function applyChanges() {
      for (const target of TARGETS) {
        try {
          if (target.all) {
            document.querySelectorAll(target.selector).forEach(el => applyToElement(el, target));
          } else {
            const el = document.querySelector(target.selector);
            if (el) applyToElement(el, target);
          }
        } catch (e) {
          console.error(`[Optimizely] error in target "${target.name}":`, e);
        }
      }
    }
    // ======= END CONFIG =======
    
    // --- Utilities ---
    const raf = cb => requestAnimationFrame(() => requestAnimationFrame(cb));
    const debounce = (fn, ms = 250) => {
      let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
    };
    const oncePerTick = (() => {
      let scheduled = false;
      return fn => {
        if (scheduled) return;
        scheduled = true;
        raf(() => { scheduled = false; fn(); });
      };
    })();
    
    const safeApply = debounce(() => {
      try {
        applyChanges();
      } catch (e) {
        console.error('[Optimizely] applyChanges error:', e);
      }
    }, 100);
    
    // --- React crash / hydration-mismatch detectors ---
    function isReactMinifiedError(e, codes = [418, 423]) {
      const msg = (e && (e.message || e.reason || '') || '').toString();
      return /Minified React error #\d+/.test(msg) &&
             codes.some(c => msg.includes(`#${c}`));
    }
    
    function isHydrationMismatch(e) {
      const msg = (e && (e.message || e.reason || '') || '').toString();
      return /Hydration failed|did not match|attributes.*differ|The server HTML/g.test(msg);
    }
    
    // --- Re-apply trigger after a crash ---
    let crashCount = 0;
    const MAX_RETRIES = 200;
    const RETRY_BACKOFF_MS = 100;
    
    function scheduleReapply() {
      if (crashCount >= MAX_RETRIES) return;
      const delay = RETRY_BACKOFF_MS * (crashCount + 1);
      crashCount += 1;
      setTimeout(() => oncePerTick(safeApply), delay);
    }
    
    // --- Observe DOM changes near likely React roots to re-apply when they flip ---
    const watchRoots = (() => {
      let observer;
      return () => {
        if (observer) return;
        observer = new MutationObserver(() => oncePerTick(safeApply));
        const roots = TARGETS
          .map(t => document.querySelector(t.selector))
          .filter(Boolean);
        roots.forEach(r => observer.observe(r, { childList: true, subtree: true }));
      };
    })();
    
    // --- Handle SPA route changes ---
    (function patchHistoryForSpa() {
      const fire = () => oncePerTick(safeApply);
      ['pushState', 'replaceState'].forEach(fn => {
        const orig = history[fn];
        if (!orig || orig.__patched) return;
        history[fn] = function() { const res = orig.apply(this, arguments); fire(); return res; };
        history[fn].__patched = true;
      });
      window.addEventListener('popstate', fire, true);
    })();
    
    // --- Global error listeners ---
    window.addEventListener('error', evt => {
      const err = evt.error || evt;
      if (isReactMinifiedError(err) || isHydrationMismatch(err)) scheduleReapply();
    }, true);
    
    window.addEventListener('unhandledrejection', evt => {
      const err = evt.reason || evt;
      if (isReactMinifiedError(err) || isHydrationMismatch(err)) scheduleReapply();
    }, true);
    
    // --- Watch for any target element appearing in DOM (SPA / dynamic load) ---
    const watchForTargets = (() => {
      let observer;
      return () => {
        if (observer) return;
        observer = new MutationObserver(() => {
          const anyFound = TARGETS.some(t => document.querySelector(t.selector));
          if (anyFound) oncePerTick(safeApply);
        });
        observer.observe(document.documentElement || document.body, { childList: true, subtree: true });
      };
    })();
    
    // --- Bootstrap ---
    watchForTargets();
    watchRoots();
    safeApply();
}, "dependencies": []}]}]}], "weightDistributions": null, "name": "/tech-tips/categories/press-release/ - Navigation & Search UI Text Replacement", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5151571709788160"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["4735865532973056"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5158110931714048", "name": "Amazon Enrollment MX", "commitId": "6001735896924160", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"google_analytics_4": {}, "28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4928851858423808", "integrationSettings": null, "variations": [{"id": "6336226741977088", "name": "Original", "actions": []}, {"id": "5587554618048512", "name": "Variation #1", "actions": [{"viewId": "5373380973559808", "changes": [{"css": {}, "dependencies": [], "attributes": {"style": "margin-top: 0;"}, "type": "attribute", "id": "F6B09894-144B-4220-A6A1-F2FDBE9005D1", "selector": "[data-testid=\"copy-block\"] > div:first-child > div:has(table)"}, {"css": {}, "dependencies": [], "attributes": {"style": "padding-top: 0;"}, "type": "attribute", "id": "71E595B0-3A06-42DF-8D82-2177D6FA5DB8", "selector": "[data-testid=\"intro\"]"}, {"css": {}, "dependencies": [], "attributes": {"remove": true}, "type": "attribute", "id": "D030F854-0822-447A-ACCE-9BE177595C86", "selector": "[data-testid=\"copy-block\"] > div:first-child > div:has(table) table th:first-child"}]}]}], "weightDistributions": [{"entityId": "5587554618048512", "endOfRange": 10000}], "name": "Amazon Enrollment MX", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5158110931714048"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5373380973559808"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5158641087545344", "name": "/open-enrollment/ - Scrolling Feature Component", "commitId": "5327437039403008", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "6467298362392576", "integrationSettings": null, "variations": [{"id": "6563071301255168", "name": "Original", "actions": [{"viewId": "5682540292341760", "changes": [{"id": "fb57cf6479fd4dadb8ab32609bc8176a", "type": "custom_code", "value": function($){var loadCount = 0;
var startTimes = [];
var endTimes = [];
var timeMeasureFromStart = performance.now();
var timeMeasureEnd;


let create = (url) => {
  return new Promise(function (resolve, reject) {
    let imported = document.createElement("script");
    imported.src = url;
    imported.async = false;
    imported.onload = () => {
      resolve(url);
    };
    imported.onerror = () => {
      reject(url);
    };
    document.head.appendChild(imported);
  });
};
let scripts = [
  "https://io.asurion.com/phoneinsurancescroller/cdn/ScrollMagic.min.js",
  "https://io.asurion.com/phoneinsurancescroller/cdn/animation.gsap.min.js",
  "https://io.asurion.com/phoneinsurancescroller/cdn/gsap.min.js" ,
      "https://io.asurion.com/phoneinsurancescroller/cdn/phone-insurance.js?1118789",
];
let promiseData = [];
scripts.forEach(function (url) {
  promiseData.push(create(url));
});
Promise.all(promiseData)
  .then(function () {
    var utils = window["optimizely"].get("utils");
    startTimes = [];
    endTimes = [];
		
    utils.observeSelector(
      "#tc_section_house_loader",
      function (el) {
         if (document.getElementById('phone-insurance-scroller-wrapper')) {
        	console.log('DOM already initialized.');
        	return;
    		}
        console.log("test: Step 1 Observing tc_section_house_loader");
        if(window.timeout2)
        clearTimeout(window.timeout2);

        startTimes.push(performance.now());
        loadCount = loadCount + 1;
				window.scrollLoaded = false;
        
        if (document.querySelector("#tc_section_house_loader")) {
          console.log("test: Step 2 scrollsection_addtodom()");
          scrollsection_addtodom("tc_section_house_loader");
        }
  
        endTimes.push(performance.now());
        var totalLoadTime = startTimes.reduce((t, s, i) => {
          return t + (endTimes[i] - s);
        }, 0);

        if (loadCount > 1) {
          timeMeasureEnd = performance.now();
        }
      },
      {
        once: false,

      }
    );
		utils.observeSelector("#phone-insurance-scroller-container",
      function (el) {
      console.log("test: Step 3 Observing phone insurance scroller container");
      if(window.timeout2)
        clearTimeout(window.timeout2);

window.timeout2 = setTimeout(function () {
          timeMeasureEnd = performance.now();
  				console.log("test: Step 4 scrollsection_scrollstuff()");
          scrollsection_scrollstuff();
         }, 3500);
  },
      {
        once: false,
      })


    }).catch(function (error) {
    console.log(error + " failed to load!");
  });
}, "dependencies": []}, {"id": "3ddb91dd355d4621977e710314557a6f", "type": "append", "selector": "head", "value": "<style>sup{\n\ttop: 0;\n}\n#interactive-component-fallback,.carousel-root{\n\tdisplay:none;\n}\n\n@media screen and (min-width: 1400px) and (max-height: 720px) {\n  #phone-insurance-scroller-wrapper {\n    margin-top:40px;\n   }\n}\n#content-block [data-testid=\"logo\"] a{\npadding:0;\nborder: 0;\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "/open-enrollment/ - Scrolling Feature Component", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5158641087545344"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5682540292341760"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": [{"id": "201E5C74-E33F-46BA-95BB-6043F3D0E351", "type": "custom_code", "value": function($){var utils = window["optimizely"].get('utils');

(function() {
  // Check if a node is a <style> element that contains "/*optly*/" in its text content.
  function matchesCriteria(node) {
    return node && node.tagName === 'STYLE' && node.textContent.includes("/*optly*/");
  }

  // Set up a MutationObserver on document.head to monitor added and removed style tags.
  function observeHead() {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        // Log any matching nodes that are added.
        mutation.addedNodes.forEach(node => {
          if (matchesCriteria(node)) {
            //console.log('Style element with "/*optly*/" added.');
          }
        });
        // Log any matching nodes that are removed.
        mutation.removedNodes.forEach(node => {
          if (matchesCriteria(node)) {
            window['optimizely'] = window['optimizely'] || [];
						window['optimizely'].push({
  						type: "event",
  						eventName: "optibugflagged",
  						tags: {}
						});
            //console.log('Style element with "/*optly*/" removed.');
          }
        });
      });
    });
    observer.observe(document.head, { childList: true });
  }

  // Initialize when the DOM is ready.
  function init() {
    observeHead();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
}, "dependencies": []}], "id": "5293492457439232", "name": "/about/newsroom/ - Gradient backgrounds", "commitId": "5502133747843072", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4781030062686208", "integrationSettings": null, "variations": [{"id": "5260920247549952", "name": "Variation #1", "actions": [{"viewId": "5471071453839360", "changes": [{"id": "91074838-FF67-4094-B802-6DA26291BB89", "type": "append", "selector": "head", "value": "<style>/*optly*/\n#main-content > div:nth-child(1){\n\tbackground: linear-gradient(105.7deg, #FBF2FF -0.59%, #EBF9FF 100%);\n  color:#000000;\n}\n#main-content > div:nth-child(1) p {\n  color:#000000;\n}\n\n#main-content > [class*='from-greyTransparent'] > div{\n\tbackground: linear-gradient(285.3deg, #FBF2FF 0%, #EBF9FF 100%);\n}\n\n#main-content > [class*='from-greyTransparent'] > div > div > div{\n\t  min-height: unset;\n    height: 100%;\n}\n#main-content > [class*='from-greyTransparent'] > div > div > div picture{\n\tdisplay:none;\n}\n#main-content > [class*='from-greyTransparent'] > div > div > div {\n\tbackground:url(https://images.ctfassets.net/16nm6vz43ids/4VJcuZQUYqyUvvYHiKUZ63/81ad80e8401a64af62439080ce5d9284/newsroom-media.png) center/contain no-repeat;\n}\n\n@media screen and (min-width: 439px) and (max-width:767px) {\n  #main-content p:nth-child(3) > span{\n \tleft:unset;\n \t--tw-translate-x: unset;\n }\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "/about/newsroom/ - Gradient backgrounds", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5293492457439232"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5471071453839360"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": [{"id": "dc5c1cc258014720b3fccc997a3613a2", "type": "append", "selector": "head", "value": "<style>@media screen and (min-width: 901px) {\n\n[data-testid=\"calculator\"] > div:nth-child(2) {\n  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;\n}\n\n}</style>", "dependencies": []}], "id": "5402562996731904", "name": "/verizon/home-device-protect/calculator/ - Desktop 4 columns", "commitId": "6585439872614400", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5403061280047104", "integrationSettings": null, "variations": [{"id": "4961147263123456", "name": "Original", "actions": []}], "weightDistributions": null, "name": "/verizon/home-device-protect/calculator/ - Desktop 4 columns", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5402562996731904"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5062198381248512"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": [{"dependencies": [], "id": "53417c1ae6674bebb24ad1e6942e3789", "selector": "head", "type": "append", "value": "<style>@media screen and (max-width: 900px) {\n  .uppercase p {\n  \tpadding: 0 1rem;\n  }\n  [data-testid=\"calculator\"] > [class*=\"CalculatorGrid\"]{\n\t\tdisplay: grid;\n    grid-gap: 16px;\n    padding: 16px;\n    grid-template-columns: none;\n    grid-auto-flow: column;\n    grid-auto-columns: minmax(175px, 1fr);\n    overflow-x: auto;\n}\n  [data-testid=\"calc-block\"]{\n  \tbox-shadow: rgb(213, 214, 218) 0px 0px 0px 1px;\n  }\n}\n@media screen and (min-width: 901px) {\n[data-testid=\"calculator\"] > div:nth-child(1) {\n  grid-area: text;\n}\n\n[data-testid=\"calculator\"] > div:nth-child(2) {\n  grid-area: items;\n}\n[data-testid=\"calculator\"] > div:nth-child(3) {\n  grid-area: sum;\n}\n\n[data-testid=\"calculator\"] {\n  grid-template-areas: \n    \"text text text text text text items items items items items items\"\n    \"sum sum sum sum sum sum items items items items items items\"\n    \". . . . . . items items items items items items\";\n}\n}</style>"}], "id": "5470322871238656", "name": "/partner/blue-stream-fiber/ - Calculator Mobile Horizontal Scroll", "commitId": "5219209850912768", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5129869135183872", "integrationSettings": null, "variations": [{"id": "5179677501816832", "name": "Original", "actions": []}], "weightDistributions": null, "name": "/partner/blue-stream-fiber/ - Calculator Mobile Horizontal Scroll", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5470322871238656"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6314747801370624"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5485124893016064", "name": "/amazon/complete-protect - Calculator", "commitId": "5892003509043200", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4671009446428672", "integrationSettings": null, "variations": [{"id": "4881449254387712", "name": "Original", "actions": [{"viewId": "5290355541671936", "changes": [{"id": "E08B0D81-E386-46C9-8F92-72B3C9D70F32", "type": "custom_code", "value": function($){// Path-based targeting (host-agnostic so stable/nonprod can promote to prod):
// - /amazon/complete-protect/calculator → dedicated calculator page
// - /amazon/complete-protect/           → main AMZCP page (embedded calc)
const IS_CALCULATOR_PAGE = location.pathname.includes('/complete-protect/calculator');

function markCalculatorPage() {
  if (!IS_CALCULATOR_PAGE) return;
  document.documentElement.setAttribute('data-amzcp-page', 'calculator');
  if (document.body) document.body.setAttribute('data-amzcp-page', 'calculator');
}
markCalculatorPage();

const AMAZON_SIGNUP_URL = 'https://www.amazon.com/dp/B07RZ3LSHM';

// Same recommendation treatment on both pages (matches www.asurion.com/amazon/complete-protect/)
const summaryTemplate = `<div class="plan-card">
    <div class="summary">
      <p><strong class="purchaseCount">0</strong> Amazon purchases</p>
    </div>
    <hr>
    <div class="recommendation">
      <div class="text">
        <p class="subtitle">Based on your purchases, we recommend:</p>
        <p class="plan"><strong class="label">Asurion Complete Protect</strong> <span class="price">$16.99</span><span class="per">/mo</span></p>
      </div>
      <a class="signup-btn" href="${AMAZON_SIGNUP_URL}">Sign up</a>
    </div>
  </div>`;

// The /calculator page renders the total with a different data-testid than the
// main complete-protect page. Everything else for the recommendation card is shared.
const TOTAL_TESTID = IS_CALCULATOR_PAGE
  ? 'Add up your Amazon purchases-total'
  : 'Amazon Complete Protect Calculator-total';
const TOTAL_SELECTOR = `p[data-testid="${TOTAL_TESTID}"]`;
const CALCULATOR_SELECTOR = '[data-testid="calculator"]';

// --- Hydration-safe target internals ---
const origRemoveChild = Node.prototype.removeChild;
const origReplaceChild = Node.prototype.replaceChild;
const lockedEls = new Set();
let optlyWriting = false;

function lockInjectedCard(card) {
  if (!card || !card.parentNode || card.__atcLocked) return;
  const parent = card.parentNode;
  lockedEls.add(card);
  card.__atcLocked = true;

  if (parent.__atcParentLocked) return;
  parent.removeChild = function (child) {
    if (!optlyWriting && lockedEls.has(child)) return child;
    return origRemoveChild.call(this, child);
  };
  parent.replaceChild = function (newChild, oldChild) {
    if (!optlyWriting && lockedEls.has(oldChild)) return oldChild;
    return origReplaceChild.call(this, newChild, oldChild);
  };
  parent.__atcParentLocked = true;
}

function getCalculator() {
  return document.querySelector(CALCULATOR_SELECTOR);
}

function getPlanCard(totalElement) {
  return totalElement && totalElement.parentElement && totalElement.parentElement.querySelector('.plan-card');
}

function collectInputs() {
  const nodeList = document.querySelectorAll(`${CALCULATOR_SELECTOR} input`);
  const items = [];
  nodeList.forEach(input => {
    const id = input.id || input.name || 'unnamed';
    const val = Math.max(0, parseInt(input.value, 10) || 0);
    items.push({ input, id, val });
  });
  return items;
}

function updateSummaryDisplay() {
  const totalElement = document.querySelector(TOTAL_SELECTOR);
  const planCard = getPlanCard(totalElement);
  if (!planCard) return;

  const summaryDiv = planCard.querySelector('.summary');
  if (!summaryDiv) return;

  const subtitle = planCard.querySelector('.subtitle');
  const label = planCard.querySelector('.label');
  const price = planCard.querySelector('.price');
  const per = planCard.querySelector('.per');
  const signupBtn = planCard.querySelector('a.signup-btn');
  if (subtitle) subtitle.textContent = 'Based on your purchases, we recommend:';
  if (label) label.textContent = 'Asurion Complete Protect';
  if (price) price.textContent = '$16.99';
  if (per) per.textContent = '/mo';
  if (signupBtn) {
    signupBtn.textContent = 'Sign up';
    signupBtn.setAttribute('href', AMAZON_SIGNUP_URL);
  }

  const items = collectInputs();
  const totalPurchases = items.reduce((acc, it) => acc + it.val, 0);
  const purchaseCountEl = summaryDiv.querySelector('.purchaseCount');
  if (purchaseCountEl) purchaseCountEl.textContent = String(totalPurchases);

  return {
    calculatorState: items.reduce((acc, it) => {
      acc[it.id] = { count: it.val };
      return acc;
    }, {}),
    summary: { totalPurchases }
  };
}

// ======= CONFIGURE THIS =======
function applyChanges() {
  markCalculatorPage();

  // ---------- CONFIG (all tunables live here) ----------
  const CONFIG = {
    SELECTORS: {
      CALCULATOR: CALCULATOR_SELECTOR,
      SUMMARY_INJECT_AFTER: TOTAL_SELECTOR,
      SUMMARY: '.summary',
      PURCHASE_COUNT: '.purchaseCount'
    },
    SUMMARY_TEMPLATE: summaryTemplate,
    STATIC_PLAN: {
      label: 'Asurion Complete Protect',
      price: '$16.99',
      signupHref: AMAZON_SIGNUP_URL
    }
  };
  // -----------------------------------------------------

  function moveElements() {
    const priceElement = document.querySelector('[class*="CalculatorAsteriskPrice"]');
    const subheaderElement = document.querySelector('[class*="CalculatorSubheaderText"]');
    if (priceElement && subheaderElement && subheaderElement.parentNode) {
      subheaderElement.parentNode.insertBefore(priceElement, subheaderElement.nextSibling);
    }
  }

  function wrapChildrenInContainer(parent) {
    if (!(parent instanceof HTMLElement)) {
      return;
    }
    const existingContainer = parent.querySelector('.innerContainer');
    if (existingContainer) {
      return;
    }
    const container = document.createElement('div');
    container.classList.add('innerContainer');
    parent.classList.forEach(cls => container.classList.add(cls));
    parent.className = '';
    while (parent.firstChild) container.appendChild(parent.firstChild);
    parent.appendChild(container);
  }

  function injectSummary(cssSelector) {
    const totalElement = document.querySelector(cssSelector);
    if (!totalElement) return false;
    const existingPlanCard = totalElement.parentElement && totalElement.parentElement.querySelector('.plan-card');
    if (existingPlanCard) {
      lockInjectedCard(existingPlanCard);
      return true;
    }
    optlyWriting = true;
    try {
      totalElement.insertAdjacentHTML('afterend', CONFIG.SUMMARY_TEMPLATE);
    } finally {
      optlyWriting = false;
    }
    lockInjectedCard(getPlanCard(totalElement));
    return true;
  }

  let calculatorState = {};
  let summary = {};

  function updateSummaryDisplay(summary) {
    const summaryDiv = document.querySelector(CONFIG.SELECTORS.SUMMARY);
    if (!summaryDiv) return;
    const planCard = summaryDiv.closest('.plan-card') || document;
    const subtitle = planCard.querySelector('.subtitle');
    const label = planCard.querySelector('.label');
    const price = planCard.querySelector('.price');
    const per = planCard.querySelector('.per');
    if (subtitle) subtitle.textContent = 'Based on your purchases, we recommend:';
    if (label) label.textContent = CONFIG.STATIC_PLAN.label;
    if (price) price.textContent = CONFIG.STATIC_PLAN.price;
    if (per) per.textContent = '/mo';
    const signupBtn = planCard.querySelector('a.signup-btn');
    if (signupBtn) {
      signupBtn.textContent = 'Sign up';
      signupBtn.setAttribute('href', CONFIG.STATIC_PLAN.signupHref);
    }
    const purchaseCountEl = summaryDiv.querySelector(CONFIG.SELECTORS.PURCHASE_COUNT);
    if (purchaseCountEl) {
      const newVal = String(summary.totalPurchases || 0);
      if (purchaseCountEl.textContent !== newVal) {
        purchaseCountEl.textContent = newVal;
      }
    }
  }

  function collectInputs() {
    const nodeList = document.querySelectorAll(`${CONFIG.SELECTORS.CALCULATOR} input`);
    const items = [];
    nodeList.forEach(input => {
      const id = input.id || input.name || 'unnamed';
      const val = Math.max(0, parseInt(input.value, 10) || 0);
      items.push({ input, id, val });
    });
    return items;
  }

  function updateCalculatorState() {
    const result = window.__atcUpdateSummaryDisplay();
    if (!result) return { calculatorState, summary };
    calculatorState = result.calculatorState;
    summary = result.summary;

    if (!Array.isArray(window.dataLayer)) {
      window.dataLayer = [];
    }
    window.dataLayer.push({
      event: 'plan_calculator_update',
      recommended_plan: 'AMZCP',
      total_purchases: summary.totalPurchases
    });

    return { calculatorState, summary };
  }

  function observeParagraphChanges() {
    const paragraphs = document.querySelectorAll(TOTAL_SELECTOR);
    const observer = new MutationObserver(() => {
      updateCalculatorState();
    });
    paragraphs.forEach(p => {
      observer.observe(p, { childList: true, characterData: true, subtree: true });
    });
  }

  function init() {
    const el = document.querySelector(CONFIG.SELECTORS.CALCULATOR);
    if (!el) return;
    el.setAttribute('data-atc-calc', 'main');
    wrapChildrenInContainer(el);
    moveElements();
    const injected = injectSummary(CONFIG.SELECTORS.SUMMARY_INJECT_AFTER);

    observeParagraphChanges();
    updateCalculatorState();
    return injected;
  }

  const el = document.querySelector(CONFIG.SELECTORS.CALCULATOR);
  if (el && el.getAttribute('data-atc-calc')) {
    injectSummary(CONFIG.SELECTORS.SUMMARY_INJECT_AFTER);
    updateCalculatorState();
    return Boolean(getPlanCard(document.querySelector(CONFIG.SELECTORS.SUMMARY_INJECT_AFTER)));
  } else {
    return init();
  }
}
// ======= END CONFIG =======

window.__atcUpdateSummaryDisplay = updateSummaryDisplay;

// --- Utilities ---
function safeApply() {
  try {
    return applyChanges();
  } catch (e) {
    return false;
  }
}

const watchForTarget = (() => {
  let observer;
  return () => {
    if (observer) return;
    observer = new MutationObserver((mutations) => {
      const onlyOurChanges = mutations.every((m) => {
        const target = m.target;
        return target && target.closest && target.closest('.plan-card');
      });
      if (onlyOurChanges) return;
      const totalElement = document.querySelector(TOTAL_SELECTOR);
      if (totalElement && !getPlanCard(totalElement)) {
        safeApply();
      }
    });
    observer.observe(document.documentElement || document.body, { childList: true, subtree: true });
  };
})();

(function patchHistoryForSpa() {
  const fire = () => {
    safeApply();
    watchForTarget();
  };
  ['pushState', 'replaceState'].forEach(fn => {
    const orig = history[fn];
    if (!orig || orig.__patched) return;
    history[fn] = function () { const res = orig.apply(this, arguments); fire(); return res; };
    history[fn].__patched = true;
  });
  window.addEventListener('popstate', fire, true);
})();

document.addEventListener('click', () => setTimeout(updateSummaryDisplay, 150), true);
document.addEventListener('input', () => setTimeout(updateSummaryDisplay, 150), true);
document.addEventListener('change', () => setTimeout(updateSummaryDisplay, 150), true);

safeApply();
watchForTarget();
}, "dependencies": []}, {"id": "5A9EB968-585B-4B78-A259-5BEEA3C2DE84", "type": "append", "selector": "head", "value": "<style>[data-testid=\"calculator\"]:not([data-testid=\"calculator\"][data-atc-calc='main']){\n  display:none !important;\n }\n [data-testid=\"calculator\"] {\n   display:grid !important;\n   padding:32px 0 0 0 !important;\n }\n [data-testid=\"calculator\"] .innerContainer {\n   background:#FAF9FC !important;\n   border-radius:16px !important;\n     width:unset !important;\n   padding:0 !important;\n }\n [class*='CalculatorEstimateTotal'] {\n   color:#1A1C1E !important;\n   font-weight:700 !important;\n   font-size:72px !important;\n   padding:16px 16px 0 16px !important;\n   margin:0 !important;\n }\n [class*='CalculatorEstimateBlock'] {\n     background-color: white !important;\n     grid-column: 3 / span 6 !important;\n     grid-row: 1 / span 12 !important;\n     padding: 0 !important;\n     margin: 0 !important;\n     border-radius: .375rem !important;\n     margin:32px !important;\n }\n \n [class*='CalculatorFullWidthHeader']{\n  display:grid !important;\n  grid-column: 1 / span 6 !important;\n  grid-row: 1 / span 1 !important;\n  text-align: left !important;\n   margin:32px 32px 16px 32px !important;\n }\n [class*='CalculatorLeftColumn'] {\n     grid-column: 7 / span 6 !important;\n     grid-row: 1 / span 1 !important;\n   padding:0 !important;\n   margin:0 !important;\n }\n [class*='CalculatorBlockImageWrapper'] {\n   height:6rem !important;\n   padding:var(--aui-spacing-150) !important;\n   margin:0 !important;\n }\n \n\n[data-testid=\"calculator\"] [class*='CalculatorEstimateHeader'],\n[data-testid=\"calculator\"] [class*='CalculatorLeftColumnHeader'] {\n     display:none !important;\n }\n\n[data-amzcp-page=\"calculator\"] [data-testid=\"calculator\"] [class*='CalculatorEstimateHeader'] {\n  display: block !important;\n  color: #1A1C1E !important;\n  font-size: 20px !important;\n  font-weight: 400 !important;\n  text-transform: none !important;\n  text-align: center !important;\n  padding: 16px 16px 0 16px !important;\n  margin: 0 !important;\n}\n \n\n [class*='CalculatorGrid'] {\n     display: grid !important;\n     grid-gap: 0px !important;\n     padding: 16px 0 16px 16px !important;\n     grid-template-columns: repeat(auto-fill, minmax(175px, 1fr)) !important;\n     grid-auto-flow: column !important;\n     grid-auto-columns: minmax(175px, 1fr) !important;\n     overflow-x: auto !important;\n     grid-column: 1 / span 12 !important;\n     grid-row: 2 / span 1 !important;\n }\n \n .innerContainer [data-testid=\"calc-block\"]{\n \n  background:white !important;\n  max-width:146px !important;\n  border-radius: 7.133px !important;\n  border: 1.783px solid #EEEDF1 !important;\n \n \n \n }\n .innerContainer [data-testid=\"calc-block\"] [class*='text']{\n  padding:0 !important;\n  margin:0 !important;\n \n }\n .innerContainer [data-testid=\"calc-block\"] [class*='text']:not(button){\n     font-size:14px !important;\n   padding-bottom:8px !important;\n   font-weight:700 !important;\n   color:black !important;\n }\n \n .innerContainer [data-testid=\"calc-block\"] button {\n     width: 30.738px !important;\n   height: 30.738px !important;\n   background-color:#EBD7FE !important;\n   color:black !important;\n   padding:0 !important;\n }\n .innerContainer [data-testid=\"calc-block\"] input[value=\"0\"] + button {\n   background-color:#F0F0F5 !important;\n   color:black !important;\n   outline:none !important;\n }\n \n .innerContainer [data-testid=\"calc-block\"] input {\n     width: 30.738px !important;\n   height: 30.738px !important;\n   display:none !important;\n }\n .innerContainer [data-testid=\"calc-block\"] > div.items-center {\n \n   padding:8px 0 !important;\n \n }\n .innerContainer [data-testid=\"calc-block\"] > div:nth-child(2) {\n     padding:0 0 14px 0 !important;\n   margin:0 !important;\n }\n \n \n .plan-card {\n  padding:0 24px 16px 24px !important;\n }\n \n .summary p {\n   font-size: 18px !important;\n   color: #222 !important;\n   margin: 0 !important;\n   padding-bottom:16px !important;\n }\n\n \n hr {\n   border: none !important;\n   border-top: 1px solid #ddd !important;\n   margin: 1rem 0 !important;\n }\n \n .recommendation {\n   display: flex !important;\n   justify-content: space-between !important;\n   align-items: center !important;\n   gap: 12px !important;\n \n }\n \n .subtitle {\n   color: #666 !important;\n   font-size: 15px !important;\n   margin:0 !important;\n   padding:0 !important;\n }\n \n .plan {\n   font-size: 20px !important;\n   margin: 0 !important;\n   text-align:left !important;\n }\n \n .recommendation .text{\n  padding:8px 0 !important;  \n   text-align: left !important;\n }\n \n .price {\n   font-weight: 500 !important;\n   font-size: 20px !important;\n   margin-left: 4px !important;\n }\n \n .per {\n   font-size: 16px !important;\n   color: #555 !important;\n }\n \n .signup-btn {\n   background-color: #8223D2 !important;\n   color: #fff !important;\n   border: none !important;\n   border-radius: 999px !important;\n \n   font-size: 16px !important;\n   cursor: pointer !important;\n   font-weight: 500 !important;\n   transition: background 0.2s ease !important;\n   width:182px !important;\n   height:48px !important;\n   text-decoration: none !important;\n   display:grid !important;\n   place-content:center !important;\n }\n \n\n[data-amzcp-page=\"calculator\"] [data-testid=\"calculator\"] .signup-btn {\n  width: 207px !important;\n}\n \n [data-testid*=\"-increment-button\"][disabled] {\n   opacity: 0.4 !important;\n   pointer-events: none !important;\n   cursor: not-allowed !important;\n   color:black !important;\n }     \n \n @media only screen and (max-width: 1023px) {\n [class*='CalculatorFullWidthHeader'] {\n     \n     grid-column: 1 / span 12 !important;\n     grid-row: 1 / span 1 !important;\n     margin:32px 24px 8px 24px !important;\n }\n   [class*='CalculatorLeftColumn'] {\n     padding-top:16px !important;\n     grid-column: 1 / span 12 !important;\n     grid-row: 3 / span 1 !important;\n \n }\n   [class*='CalculatorGrid'] {\n     grid-column: 1 / span 12 !important;\n     grid-row: 2 / span 1 !important;\n }\n   .recommendation {\n   display: block !important;\n \n }\n   .signup-btn {\n     margin:auto !important;\n   }\n .subtitle {\n   color: #666 !important;\n   font-size: 15px !important;\n   margin: 0 0 4px 0 !important;\n }\n \n .plan {\n   font-size: 20px !important;\n   margin-bottom:16px !important;\n   text-align:center !important;\n }\n .recommendation .text{\n \n   text-align: center !important;\n }\n \n }\n\n/* ========== Amazon Complete Protect layout ========== */\n/* Total display (matches both the main page testid and the /calculator page testid) */\n[data-testid=\"calculator\"] p[data-testid=\"Amazon Complete Protect Calculator-total\"],\n[data-testid=\"calculator\"] p[data-testid=\"Add up your Amazon purchases-total\"] {\n   color: #1A1C1E !important;\n   font-weight: 700 !important;\n   font-size: 72px !important;\n   padding: 16px 16px 0 16px !important;\n   margin: 0 !important;\n }\n/* Estimate block card (parent of total) */\n[data-testid=\"calculator\"] div:has(> p[data-testid=\"Amazon Complete Protect Calculator-total\"]),\n[data-testid=\"calculator\"] div:has(> p[data-testid=\"Add up your Amazon purchases-total\"]) {\n   background-color: white !important;\n   border-radius: .375rem !important;\n   margin: 32px !important;\n   padding: 0 !important;\n }\n /* Grid of device blocks (when CalculatorGrid class is absent) */\n [data-testid=\"calculator\"] .innerContainer > .grid {\n   display: grid !important;\n   grid-gap: 0 !important;\n   padding: 16px 0 16px 16px !important;\n   grid-template-columns: repeat(auto-fill, minmax(175px, 1fr)) !important;\n   grid-auto-flow: column !important;\n   grid-auto-columns: minmax(175px, 1fr) !important;\n   overflow-x: auto !important;\n }\n /* Image wrapper in new calc-block (span with image) */\n [data-testid=\"calc-block\"] > div:first-child > span {\n   height: 6rem !important;\n   padding: var(--aui-spacing-150, 0.75rem) !important;\n   margin: 0 !important;\n }\n/* Plan card: ensure it sits inside estimate card */\n[data-testid=\"calculator\"] div:has(> p[data-testid=\"Amazon Complete Protect Calculator-total\"]) .plan-card,\n[data-testid=\"calculator\"] div:has(> p[data-testid=\"Add up your Amazon purchases-total\"]) .plan-card {\n   padding: 0 24px 16px 24px !important;\n }\n @media only screen and (max-width: 1023px) {\n   [data-testid=\"calculator\"] p[data-testid=\"Amazon Complete Protect Calculator-total\"],\n   [data-testid=\"calculator\"] p[data-testid=\"Add up your Amazon purchases-total\"] {\n     font-size: 48px !important;\n   }\n   [data-testid=\"calculator\"] div:has(> p[data-testid=\"Amazon Complete Protect Calculator-total\"]),\n   [data-testid=\"calculator\"] div:has(> p[data-testid=\"Add up your Amazon purchases-total\"]) {\n     margin: 32px 24px !important;\n   }\n   [data-testid=\"calculator\"] h2{\n  \tline-height: 1.15 !important;\n   }\n }</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "/amazon/complete-protect - Calculator", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5485124893016064"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5290355541671936"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5501292102025216", "name": "/about/mediakit/ - Scrolling Logos", "commitId": "5032420408295424", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5223894391455744", "integrationSettings": null, "variations": [{"id": "5683653729058816", "name": "Original", "actions": [{"viewId": "4614982650822656", "changes": [{"id": "11d12e87e644441fb435a9ee8966f987", "type": "custom_code", "value": function($){// ======= CONFIGURE THIS =======
const CONFIG = {
  ROOT_SELECTOR: '#logos',
};

function findPrimaryLogoRow(root) {
  var rows = Array.from(root.querySelectorAll('div')).filter(function(node) {
    return node.querySelectorAll(':scope > [data-testid="logo"]').length >= 2;
  });
  if (!rows.length) return null;
  rows.sort(function(a, b) {
    return b.querySelectorAll(':scope > [data-testid="logo"]').length -
      a.querySelectorAll(':scope > [data-testid="logo"]').length;
  });
  return rows[0];
}

function hasStableMarquee(root) {
  var belt = root.querySelector('.logos-scroll-belt');
  if (!belt) return false;
  return belt.querySelectorAll(':scope > .logos-scroll-half').length === 2;
}

function cleanupLegacyDuplicates(root) {
  root.querySelectorAll('#logos2').forEach(function(node) { node.remove(); });
}

function removeSpacerAboveLogos(root) {
  var logosSection = root.closest('[data-testid="logos"]');
  if (!logosSection) return;
  var previous = logosSection.previousElementSibling;
  if (!previous) return;
  if (previous.getAttribute('data-testid') === 'spacer') {
    previous.remove();
  }
}

function normalizeRowClasses(row) {
  row.classList.remove('flex-wrap', 'justify-center', 'items-top', 'false');
  Array.from(row.classList).forEach(function(cls) {
    if (cls.indexOf('gap-y-') === 0) row.classList.remove(cls);
  });
}

function ensureRowLongEnough(row, outer) {
  var minWidth = outer.clientWidth * 1.25;
  var baseWidth = row.scrollWidth;
  row.dataset.baseSequenceWidth = String(baseWidth);
  var baseItems = Array.from(row.children);
  if (!baseItems.length) return;

  var guard = 0;
  while (row.scrollWidth < minWidth && guard < 8) {
    baseItems.forEach(function(item) {
      row.appendChild(item.cloneNode(true));
    });
    guard += 1;
  }
}

function syncMarqueeMetrics(belt) {
  if (!belt) return;
  var firstHalf = belt.querySelector('.logos-scroll-half');
  if (!firstHalf) return;
  var distance = firstHalf.getBoundingClientRect().width;
  if (!distance || !isFinite(distance)) return;
  var baseWidth = parseFloat(firstHalf.dataset.baseSequenceWidth || '0');
  if (!baseWidth || !isFinite(baseWidth)) {
    baseWidth = distance;
  }
  var isMobile = window.matchMedia('(max-width: 768px)').matches;
  var baseSeconds = isMobile ? 25 : 30;
  var pxPerSecond = baseWidth / baseSeconds;
  var durationSeconds = distance / pxPerSecond;
  belt.style.setProperty('--marquee-distance', distance + 'px');
  belt.style.setProperty('--marquee-duration', durationSeconds + 's');
}

function initMarquee(root) {
  if (hasStableMarquee(root)) return;

  cleanupLegacyDuplicates(root);
  removeSpacerAboveLogos(root);

  var row = findPrimaryLogoRow(root);
  if (!row) return;
  normalizeRowClasses(row);

  var outer = row.parentElement;
  if (!outer) return;

  outer.classList.add('logos-scroll-outer');
  ensureRowLongEnough(row, outer);

  var belt = document.createElement('div');
  belt.className = 'logos-scroll-belt';

  row.classList.add('logos-scroll-half');

  var clone = row.cloneNode(true);
  clone.classList.add('logos-scroll-half');
  clone.id = 'logos2';

  outer.replaceChild(belt, row);
  belt.appendChild(row);
  belt.appendChild(clone);
  syncMarqueeMetrics(belt);

  if (!belt.dataset.hoverBound) {
    belt.addEventListener('mouseenter', function() { belt.classList.add('pauseScrolling'); });
    belt.addEventListener('mouseleave', function() { belt.classList.remove('pauseScrolling'); });
    belt.dataset.hoverBound = '1';
  }
}

function applyChanges() {
  var root = document.querySelector(CONFIG.ROOT_SELECTOR);
  if (!root) return;
  initMarquee(root);
}

function resyncMarqueeAnimation() {
  var root = document.querySelector(CONFIG.ROOT_SELECTOR);
  if (!root || !hasStableMarquee(root)) return;
  var belt = root.querySelector('.logos-scroll-belt');
  if (!belt) return;
  syncMarqueeMetrics(belt);

  // Restart only the animation timeline so the seam stays clean after resize.
  belt.style.animation = 'none';
  void belt.offsetHeight;
  belt.style.animation = '';
}
// ======= END CONFIG =======

// --- Utilities ---
const raf = cb => requestAnimationFrame(() => requestAnimationFrame(cb));
const debounce = (fn, ms = 250) => {
  let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
};
const oncePerTick = (() => {
  let scheduled = false;
  return fn => {
    if (scheduled) return;
    scheduled = true;
    raf(() => { scheduled = false; fn(); });
  };
})();

const safeApply = debounce(() => {
  try {
    applyChanges();
  } catch (e) {
    console.error('[Optimizely] applyChanges error:', e);
  }
}, 100);

const safeResync = debounce(() => {
  try {
    resyncMarqueeAnimation();
  } catch (e) {
    console.error('[Optimizely] resync error:', e);
  }
}, 180);

// --- React crash / hydration-mismatch detectors ---
function isReactMinifiedError(e, codes = [418, 423]) {
  const msg = (e && (e.message || e.reason || '') || '').toString();
  return /Minified React error #\d+/.test(msg) &&
         codes.some(c => msg.includes(`#${c}`));
}

function isHydrationMismatch(e) {
  const msg = (e && (e.message || e.reason || '') || '').toString();
  return /Hydration failed|did not match|attributes.*differ|The server HTML/g.test(msg);
}

// --- Re-apply trigger after a crash ---
let crashCount = 0;
const MAX_RETRIES = 200;
const RETRY_BACKOFF_MS = 100;

function scheduleReapply() {
  if (crashCount >= MAX_RETRIES) return;
  const delay = RETRY_BACKOFF_MS * (crashCount + 1);
  crashCount += 1;
  setTimeout(() => oncePerTick(safeApply), delay);
}

// --- Observe DOM changes near likely React roots to re-apply when they flip ---
const watchRoots = (() => {
  let observer;
  return () => {
    if (observer) return;
    observer = new MutationObserver(() => oncePerTick(safeApply));
    const roots = [
      document.querySelector(CONFIG.ROOT_SELECTOR)
    ].filter(Boolean);
    roots.forEach(r => observer.observe(r, { childList: true, subtree: true }));
  };
})();

// --- Handle SPA route changes ---
(function patchHistoryForSpa() {
  const fire = () => oncePerTick(safeApply);
  ['pushState', 'replaceState'].forEach(fn => {
    const orig = history[fn];
    if (!orig || orig.__patched) return;
    history[fn] = function() { const res = orig.apply(this, arguments); fire(); return res; };
    history[fn].__patched = true;
  });
  window.addEventListener('popstate', fire, true);
})();

// --- Keep infinite seam stable only when crossing breakpoint ---
(function watchViewportChanges() {
  const mql = window.matchMedia('(max-width: 768px)');
  let wasMobile = mql.matches;
  const fire = () => oncePerTick(safeResync);

  function onViewportMaybeChanged() {
    const isMobile = mql.matches;
    if (isMobile === wasMobile) return;
    wasMobile = isMobile;
    fire();
  }

  // Fires only when crossing the breakpoint (desktop<->mobile).
  if (typeof mql.addEventListener === 'function') {
    mql.addEventListener('change', onViewportMaybeChanged);
  } else if (typeof mql.addListener === 'function') {
    mql.addListener(onViewportMaybeChanged);
  }

  // Fallback for environments that do not reliably emit mql "change".
  window.addEventListener('orientationchange', onViewportMaybeChanged, { passive: true });
})();

// --- Global error listeners ---
window.addEventListener('error', evt => {
  const err = evt.error || evt;
  if (isReactMinifiedError(err) || isHydrationMismatch(err)) scheduleReapply();
}, true);

window.addEventListener('unhandledrejection', evt => {
  const err = evt.reason || evt;
  if (isReactMinifiedError(err) || isHydrationMismatch(err)) scheduleReapply();
}, true);

// --- Watch for target element appearing in DOM (SPA / dynamic load) ---
const watchForTarget = (() => {
  let observer;
  return () => {
    if (observer) return;
    observer = new MutationObserver(() => {
      var root = document.querySelector(CONFIG.ROOT_SELECTOR);
      if (!root) return;
      // Only run when the marquee is absent to avoid mutation thrash/flicker.
      if (!hasStableMarquee(root)) oncePerTick(safeApply);
    });
    observer.observe(document.documentElement || document.body, { childList: true, subtree: true });
  };
})();

// --- Bootstrap ---
watchForTarget();
watchRoots();
safeApply();
}, "dependencies": []}, {"id": "361cdb925f864409868b539c1c63b43f", "type": "append", "selector": "head", "value": "<style>.logos-scroll-outer {\n\toverflow: hidden;\n}\n\n.logos-scroll-belt {\n\tdisplay: flex !important;\n\tflex-wrap: nowrap !important;\n\twidth: max-content;\n\tanimation: marquee-scroll var(--marquee-duration, 30s) linear infinite;\n\trow-gap: 0 !important;\n\twill-change: transform;\n}\n\n.logos-scroll-belt.pauseScrolling {\n\tanimation-play-state: paused;\n}\n\n.logos-scroll-belt > .logos-scroll-half {\n\tdisplay: flex !important;\n\tflex-wrap: nowrap !important;\n\tflex-shrink: 0;\n\twidth: max-content;\n\trow-gap: 0 !important;\n\tcolumn-gap: 0 !important;\n\talign-items: center;\n\tjustify-content: flex-start !important;\n}\n\n/* Remove utility padding only from the marquee container itself */\n#logos .logos-scroll-outer.pt-8 {\n\tpadding-top: 0 !important;\n}\n\n#logos .logos-scroll-outer.pb-12 {\n\tpadding-bottom: 0 !important;\n}\n\n#logos [data-testid=\"logo\"] {\n\twidth: 200px !important;\n\tmin-width: 0 !important;\n\tmax-width: none !important;\n\tflex-shrink: 0;\n\tpadding: 0 12px !important;\n\tbox-sizing: border-box;\n}\n\n@keyframes marquee-scroll {\n\t0%   { transform: translateX(0); }\n\t100% { transform: translateX(calc(-1 * var(--marquee-distance, 50%))); }\n}\n\n@media screen and (max-width: 768px) {\n\t#logos [class*=\"LogosContentBody\"] {\n\t\tmargin-bottom: 0 !important;\n\t}\n\n\t#logos [data-testid=\"logo\"] {\n\t\twidth: 150px !important;\n\t\tpadding: 0 8px !important;\n\t}\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "/about/mediakit/ - Scrolling Logos", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5501292102025216"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["4614982650822656"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": [{"id": "28E75998-9762-4454-8715-903BBD3E9D8B", "type": "append", "selector": "head", "value": "<style>main > [data-testid=\"copy-block\"]:first-child{\nmargin-bottom:32px;\n}\n\n\n/* Hide original image and show replacement via CSS */\nmain > [class*=\"FeatureNewContainer\"]:nth-child(2) picture img {\n  content: url('https://images.ctfassets.net/16nm6vz43ids/75BPBw7SS0ds3qjisbjuAH/cca16853797c5fad0ac1daea1e5d25a1/samsung-premier-support-center.png') !important;\n}\n\n/* For banner text - hide original, show replacement */\nmain > [data-testid=\"copy-block\"]:first-child p {\n  font-size: 0 !important;\n  color: transparent !important;\n}\n\nmain > [data-testid=\"copy-block\"]:first-child p::after {\n  content: 'Need a Samsung repair? Good news: This is a Samsung Premier Support Center. Stop by or schedule a fix today.';\n  font-size: 16px; /* restore original size */\n  color: var(--aui-on-neutral);\n}</style>", "dependencies": []}], "id": "5516742261211136", "name": "/locations/*location*/samsung-repair", "commitId": "5941468859203584", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "6631329056423936", "integrationSettings": null, "variations": [{"id": "6596879392178176", "name": "Original", "actions": [{"viewId": "5599554297397248", "changes": []}]}], "weightDistributions": null, "name": "/locations/*location*/samsung-repair", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5516742261211136"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5599554297397248"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5571273493839872", "name": "/stores/smb/ - Reformat Hero Video", "commitId": "6621743150792704", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4795238133268480", "integrationSettings": null, "variations": [{"id": "5726868767244288", "name": "Original", "actions": [{"viewId": "5729319247413248", "changes": [{"id": "40016E10-805B-4E72-9ED1-C37C500D61C8", "type": "append", "selector": "head", "value": "<style>#half-width-media-block{\n\tpadding-top:40px;\n  padding-right:40px;\n}\n\n#mobile-media-block-image{\n\tmax-height:unset !important;\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "/stores/smb/ - Reformat Hero Video", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5571273493839872"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5729319247413248"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5684667939028992", "name": "/program/hp-care-complete-warranty-expiration-enroll/ - HP enrollment updates", "commitId": "6688002599026688", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"google_analytics_4": {}, "28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4863942202228736", "integrationSettings": null, "variations": [{"id": "6271317085782016", "name": "HP enrollment updates", "actions": [{"viewId": "6379670218735616", "changes": [{"dependencies": [], "id": "450783f2-aa41-4d94-9675-60ca832be2c5", "selector": "head", "type": "append", "value": "<style>[data-aui=\"modal\"] [class*=\"Dialog__StyledContent\"] {\n  padding-bottom: 50px;\n}\n\n[data-aui=\"modal\"] [class*=\"Dialog__FlexBox\"] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  padding: 10px 0;\n  background: #fff;\n}\n\n[data-aui=\"modal\"] [class*=\"Dialog__FlexBox\"] button {\n  position: relative;\n  right: 15px;\n}\n\n\n/* Sticky footer: keep Sign Up label on one line (avoids wrap \u2264390px) */\n[class*=\"FooterWrapper\"] [data-testid=\"action\"] {\n  white-space: nowrap !important;\n}\n@media (max-width: 428px) and (min-width: 390px){\n\t[class*=\"FooterContent\"]{\n \t\tgap:12px !important; \n\t}\n  [class*=\"FooterContent\"] button{font-size:14px;}\n  [class*=\"LogoContainer\"] img {max-width:128px;}\n  [class*=\"PlanDescription\"] {font-size:14px;}\n}\n@media (max-width:389px){\n\n  [class*=\"FooterContent\"]{\n \t\tgap:8px !important; \n\t}\n  [class*=\"FooterContent\"] button{font-size:12px;}\n  [class*=\"LogoContainer\"] img {max-width:116px;}\n  [class*=\"PlanDescription\"] {font-size:12px;}\n}\n\nhtml.optly-hp-care-complete {\n  --optly-hp-blue: #0057b8;\n  --optly-hp-black: #000;\n  --optly-hp-border: #eeedf1;\n  --optly-hp-surface: #faf9fc;\n}\n\nhtml.optly-hp-care-complete header {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n  border: 0 !important;\n  border-bottom: 1px solid #d8d8de !important;\n  box-shadow: 0 1px 0 rgba(15, 17, 20, 0.08) !important;\n  z-index: 40 !important;\n}\n\nhtml.optly-hp-care-complete [class*=\"partner-dark\"] header,\nhtml.optly-hp-care-complete [class*=\"JoyfulLayout\"] header {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete header [class*=\"Container\"],\nhtml.optly-hp-care-complete header [class*=\"Header\"],\nhtml.optly-hp-care-complete header [class*=\"Nav\"],\nhtml.optly-hp-care-complete header [class*=\"Branding\"] {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-header-surface {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete header *:not(a):not(button) {\n  border-color: transparent !important;\n}\n\nhtml.optly-hp-care-complete header a:not(.optly-hp-claims-button):not(.optly-hp-header-signup),\nhtml.optly-hp-care-complete header button:not(.optly-hp-claims-button):not(.optly-hp-header-signup) {\n  border-color: #0f1114 !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete header [class*=\"PrimaryButton\"],\nhtml.optly-hp-care-complete header [class*=\"StyledPrimaryButton\"] {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete header .optly-hp-header-signin,\nhtml.optly-hp-care-complete header .optly-hp-claims-button {\n  align-items: center !important;\n  box-sizing: border-box !important;\n  border-radius: 999px !important;\n  display: inline-flex !important;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n  height: 40px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  min-width: 104px !important;\n  padding: 0 24px !important;\n  text-decoration: none !important;\n  white-space: nowrap !important;\n}\n\nhtml.optly-hp-care-complete header .optly-hp-header-signin {\n  background: #fff !important;\n  background-color: #fff !important;\n  border: 1px solid #0f1114 !important;\n  border-color: #0f1114 !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-claims-button {\n  align-items: center !important;\n  background: var(--optly-hp-black) !important;\n  border: 1px solid var(--optly-hp-black) !important;\n  border-radius: 999px !important;\n  color: #fff !important;\n  display: inline-flex !important;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n  height: 40px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  margin-left: 12px !important;\n  min-width: 104px !important;\n  padding: 0 24px !important;\n  text-decoration: none !important;\n  white-space: nowrap !important;\n}\n\nhtml.optly-hp-care-complete header .optly-hp-claims-button,\nhtml.optly-hp-care-complete header .optly-hp-claims-button *,\nhtml.optly-hp-care-complete header .optly-hp-header-signup,\nhtml.optly-hp-care-complete header .optly-hp-header-signup * {\n  background: var(--optly-hp-black) !important;\n  background-color: var(--optly-hp-black) !important;\n  color: #fff !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-header-signup {\n  align-items: center !important;\n  background: var(--optly-hp-black) !important;\n  border: 1px solid var(--optly-hp-black) !important;\n  border-radius: 999px !important;\n  color: #fff !important;\n  display: inline-flex !important;\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  height: 40px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  margin-left: 12px !important;\n  padding: 0 24px !important;\n  text-decoration: none !important;\n  white-space: nowrap !important;\n}\n\n\n@media (max-width: 1023px) {\n  #plancards {\n    padding-top: 0 !important;\n  }\n\n  #content-block {\n    gap: var(--aui-spacing-100) !important;\n  }\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-signup {\n  align-items: center !important;\n  background: #0c0e11 !important;\n  border: 1px solid #0c0e11 !important;\n  border-radius: 999px !important;\n  color: #fff !important;\n  cursor: pointer !important;\n  display: inline-flex !important;\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  height: 48px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  min-width: 182px !important;\n  padding: 0 24px !important;\n  text-align: center !important;\n  text-decoration: none !important;\n  vertical-align: middle !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-signup {\n  align-items: center !important;\n  background: #0c0e11 !important;\n  background-color: #0c0e11 !important;\n  border-color: #0c0e11 !important;\n  border-radius: 999px !important;\n  display: inline-flex !important;\n  height: 40px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  min-width: 120px !important;\n  padding: 0 24px !important;\n}\n\nhtml.optly-hp-care-complete #plancards + div {\n  text-align: center !important;\n}\n\nhtml.optly-hp-care-complete [data-testid=\"calculator\"] {\n  box-sizing: border-box !important;\n  display: grid !important;\n  max-width: 100% !important;\n  padding: 32px 0 0 !important;\n}\n\nhtml.optly-hp-care-complete [data-testid=\"calculator\"] .innerContainer {\n  background: var(--optly-hp-surface) !important;\n  border-radius: 16px !important;\n  box-sizing: border-box !important;\n  display: grid !important;\n  gap: 0 !important;\n  grid-template-columns: 1fr !important;\n  grid-template-rows: auto auto !important;\n  padding: 32px 0 0 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-full-header {\n  box-sizing: border-box !important;\n  display: block !important;\n  grid-column: 1 / -1 !important;\n  grid-row: 1 !important;\n  margin: 0 32px 24px !important;\n  padding: 0 !important;\n  text-align: left !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-left-header {\n  display: none !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-grid {\n  box-sizing: border-box !important;\n  display: grid !important;\n  gap: 18px !important;\n  grid-auto-columns: 146px !important;\n  grid-auto-flow: column !important;\n  grid-column: 1 / -1 !important;\n  grid-row: 2 !important;\n  grid-template-columns: none !important;\n  overflow-x: auto !important;\n  padding: 16px 0 20px 16px !important;\n  scroll-snap-type: x proximity !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block {\n  background: #fff !important;\n  border: 1.8px solid var(--optly-hp-border) !important;\n  border-radius: 7px !important;\n  box-sizing: border-box !important;\n  height: 185px !important;\n  max-width: 146px !important;\n  min-width: 146px !important;\n  scroll-snap-align: start !important;\n  width: 146px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block button {\n  align-items: center !important;\n  box-sizing: border-box !important;\n  height: 31px !important;\n  justify-content: center !important;\n  min-width: 31px !important;\n  padding: 0 !important;\n  width: 31px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block [class*=\"CalculatorBlockControlWrapper\"] {\n  align-items: center !important;\n  box-sizing: border-box !important;\n  display: flex !important;\n  gap: 8px !important;\n  height: 31px !important;\n  justify-content: center !important;\n  margin: 6px auto 8px !important;\n  max-width: 110px !important;\n  padding: 0 !important;\n  width: auto !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block input {\n  background: transparent !important;\n  background-color: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-sizing: border-box !important;\n  color: #0c0e11 !important;\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  height: 31px !important;\n  line-height: 31px !important;\n  margin: 0 !important;\n  min-width: 24px !important;\n  padding: 0 !important;\n  text-align: center !important;\n  width: 24px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-left-column {\n  background: #fff !important;\n  border-radius: 8px !important;\n  box-sizing: border-box !important;\n  margin: 0 32px 32px !important;\n  padding: 24px !important;\n  text-align: center !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-estimate {\n  background: transparent !important;\n  border-radius: 0 !important;\n  box-sizing: border-box !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  text-align: center !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-footnote {\n  display: block !important;\n  font-size: 11px !important;\n  line-height: 1.3 !important;\n  margin: 18px 0 0 !important;\n  padding: 0 !important;\n  text-align: left !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-total,\nhtml.optly-hp-care-complete [data-testid=\"HP Care Complete-total\"] {\n  background: none !important;\n  background-clip: border-box !important;\n  color: var(--optly-hp-blue) !important;\n  -webkit-background-clip: border-box !important;\n  -webkit-text-fill-color: var(--optly-hp-blue) !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan-card {\n  border-top: 1px solid #ddd !important;\n  margin-top: 18px !important;\n  padding: 18px 0 0 !important;\n  text-align: left !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-eyebrow {\n  color: #36393d !important;\n  font-size: 13px !important;\n  line-height: 1.25 !important;\n  margin: 0 0 2px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan {\n  color: #0f1114 !important;\n  font-size: 16px !important;\n  line-height: 1.2 !important;\n  margin: 0 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan strong {\n  color: #0f1114 !important;\n  font-weight: 700 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan [data-optly-hp-plan-price] {\n  color: #0f1114 !important;\n  font-size: 13px !important;\n  font-weight: 400 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-summary {\n  color: #555 !important;\n  font-size: 14px !important;\n  margin: 0 0 16px !important;\n}\n\n\nhtml.optly-hp-care-complete .optly-hp-review-card [class*=\"Comment\"] {\n  height: unset !important;\n}\n\n@media (min-width: 1024px) {\n  html.optly-hp-care-complete [data-testid=\"calculator\"] .innerContainer {\n    grid-template-columns: minmax(0, 534px) minmax(0, 627px) !important;\n    grid-template-rows: 268px 201px !important;\n    justify-content: center !important;\n    margin: 0 auto !important;\n    max-width: 1346px !important;\n    padding: 56px 72px 32px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-full-header {\n    grid-column: 1 !important;\n    grid-row: 1 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-grid {\n    align-self: end !important;\n    grid-column: 1 / -1 !important;\n    grid-row: 2 !important;\n    margin-top: 0 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-left-column {\n    grid-column: 2 !important;\n    grid-row: 1 !important;\n    height: 268px !important;\n    margin: 0 !important;\n    padding: 24px 35px 32px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-estimate {\n    display: block !important;\n    text-align: center !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-summary {\n    display: none !important;\n  }\n}\n\n@media (max-width: 1023px) {\n  html.optly-hp-care-complete header .optly-hp-header-signin,\n  html.optly-hp-care-complete header .optly-hp-claims-button,\n  html.optly-hp-care-complete .optly-hp-claims-button,\n  html.optly-hp-care-complete .optly-hp-header-signup {\n    height: 36px !important;\n    min-width: 88px !important;\n    padding: 0 16px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-claims-button,\n  html.optly-hp-care-complete .optly-hp-header-signup {\n    margin-left: 8px !important;\n  }\n\n  html.optly-hp-care-complete [data-testid=\"calculator\"] .innerContainer {\n    gap: 20px !important;\n    grid-template-rows: auto auto auto !important;\n    padding: 24px 16px !important;\n    width: 100% !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-full-header {\n    margin: 0 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-grid {\n    grid-auto-columns: 146px !important;\n    grid-template-columns: none !important;\n    padding: 0 0 14px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-left-column {\n    margin: 0 !important;\n    padding: 20px 16px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-estimate {\n    margin: 0 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-signup {\n    background: #0c0e11 !important;\n    border-color: #0c0e11 !important;\n    border-radius: 999px !important;\n    height: 40px !important;\n    min-width: 0 !important;\n    width: 100% !important;\n  }\n}\n\n/* Merged hero: hide the native CMS list until it is stable, then hand off. */\nhtml.optly-hp-hero-pending #content-block [class*=\"RichTextWrapper\"] {\n  display: none !important;\n}\n\nhtml.optly-hp-hero-pending #hero-cta-container {\n  margin-top: var(--optly-hp-hero-gap, 160px) !important;\n}\n\n/* Hero typography: native list plus the body portal overlay. */\nhtml.optly-hp-care-complete #content-block [class*=\"RichTextWrapper\"] ul,\nhtml.optly-hp-care-complete #content-block .optly-hp-hero-bullets ul,\nhtml.optly-hp-care-complete body > .optly-hp-hero-bullets ul {\n  margin: 0 !important;\n  padding-left: 24px !important;\n  list-style: disc !important;\n}\n\nhtml.optly-hp-care-complete #content-block [class*=\"RichTextWrapper\"] li,\nhtml.optly-hp-care-complete #content-block .optly-hp-hero-bullets li,\nhtml.optly-hp-care-complete body > .optly-hp-hero-bullets li {\n  padding: 4px 0 !important;\n  margin: 0 !important;\n}\n\nhtml.optly-hp-care-complete #content-block [class*=\"RichTextWrapper\"] li p,\nhtml.optly-hp-care-complete #content-block .optly-hp-hero-bullets li p,\nhtml.optly-hp-care-complete body > .optly-hp-hero-bullets li p {\n  font-size: 18px !important;\n  line-height: 1.3 !important;\n  font-weight: 400 !important;\n  margin: 0 !important;\n}\n\nhtml.optly-hp-care-complete body > .optly-hp-hero-bullets {\n  margin: 0 !important;\n  padding: 0 !important;\n  pointer-events: none !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete #content-block button.aui-action-flat[aria-label*=\"expanded plan options\"] {\n  font-size: 16px !important;\n  line-height: 1.5 !important;\n  padding: 8px 0 !important;\n}\n\nhtml.optly-hp-care-complete #content-block button.aui-action-flat[aria-label*=\"expanded plan options\"] span {\n  font-size: 16px !important;\n  line-height: 1.5 !important;\n  font-weight: 400 !important;\n  text-decoration: underline !important;\n}\n\nhtml.optly-hp-care-complete #content-block [class*=\"SubHeadline\"] {\n  font-size: 20px !important;\n  line-height: 1.3 !important;\n  margin-top: 0 !important;\n}\n\nhtml.optly-hp-care-complete #hero-cta-container {\n  gap: 24px !important;\n}\n\n@media (min-width: 1024px) {\n  html.optly-hp-care-complete #content-block h1 {\n    font-size: 48px !important;\n    line-height: 1.1 !important;\n    font-weight: 700 !important;\n  }\n}</style>"}, {"dependencies": [], "id": "858d2f9c-ab95-4001-b7b5-25d01b673463", "type": "custom_code", "value": function($){(function () {
  const RUNTIME_KEY = '__optlyHpCareCompleteEnrollRuntime';
  const existingRuntime = window[RUNTIME_KEY];

  if (existingRuntime && existingRuntime.scheduleApply) {
    if (existingRuntime.rewatch) existingRuntime.rewatch();
    existingRuntime.scheduleApply(0);
    return;
  }

  if (existingRuntime && existingRuntime.active) return;

  const runtime = window[RUNTIME_KEY] = { active: true };

  const CONFIG = {
    pagePaths: [
      '/program/hp-care-complete-warranty-expiration-enroll',
      '/program/hp-care-complete-warranty-expiration-enroll/',
      '/program/hp-care-complete-cp-expiration-enroll',
      '/program/hp-care-complete-cp-expiration-enroll/'
    ],
    plpPagePaths: [
      '/program/hp-care-complete-warranty-expiration-enroll',
      '/program/hp-care-complete-warranty-expiration-enroll/',
      '/program/hp-care-complete-cp-expiration-enroll',
      '/program/hp-care-complete-cp-expiration-enroll/'
    ],
    rootClass: 'optly-hp-care-complete',
    heroPendingClass: 'optly-hp-hero-pending',
    heroPagePaths: [],
    heroItems: [
      'Cover 1 HP computer and select PC accessories',
      '$0 repairs and hassle-free replacements',
      'Live tech support from HP experts',
      '$0 laptop cleanings and PC tune-ups',
      'No hidden fees, cancel anytime'
    ],
    claimsHref: '/claims/hp-care-complete/',
    signupHref: '/cart/hpcare/purchase/create?plan=HPBASE',
    selectors: {
      header: 'header',
      headerPrimaryButton: 'header [data-testid="primary-button"]',
      planRoot: '#plancards',
      planCard: '#plancards [class*="PlanCardContainer"]',
      planInner: '[class*="InnerContainer"]',
      planHeader: '[class*="Header"]',
      planActions: '[class*="ActionsContainer"]',
      calculator: '[data-testid="calculator"], #atc-calculator',
      calculatorTotal: '[data-testid="HP Care Complete-total"]',
      calcBlock: '[data-testid="calc-block"]',
      calcFullHeader: '[class*="CalculatorFullWidthHeader"]',
      calcGrid: '[class*="CalculatorGrid"]',
      calcLeftColumn: '[class*="CalculatorLeftColumn"]',
      calcLeftHeader: '[class*="CalculatorLeftColumnHeader"]',
      calcEstimateBlock: '[class*="CalculatorEstimateBlock"]',
      reviewCard: '[data-testid="commentcard"]'
    },
    planMap: {
      individual: {
        label: 'HP Care Complete Individual',
        price: '$6.99/monthly + tax',
        selectorText: /for just you|individual/i
      },
      family: {
        label: 'HP Care Complete Family',
        price: '$17.99/monthly + tax',
        selectorText: /for more of your tech|for your household|family/i
      },
      wholeHome: {
        label: 'HP Care Complete Whole Home',
        price: '$24.99/monthly + tax',
        selectorText: /for nearly everything|for your connected home|whole home/i
      }
    }
  };

  const state = Object.assign(runtime, {
    documentObserver: null,
    calculatorObserver: null,
    resizeListener: false,
    scheduled: false,
    hydrated: false,
    headerRaf: null,
    updatingHeader: false,
    reactRootChild: null,
    plpHydrationArmed: false,
    hero: {
      injectedList: null,
      nativeStableSince: 0,
      nativeFingerprint: '',
      recheckTimer: null,
      pumpRaf: null,
      positionRaf: null,
      pumping: false,
      handedOff: false
    }
  });

  function isTargetPage() {
    return CONFIG.pagePaths.indexOf(window.location.pathname) !== -1;
  }

  function isPlpPage() {
    return CONFIG.plpPagePaths.indexOf(window.location.pathname) !== -1;
  }

  function isHeroPage() {
    return CONFIG.heroPagePaths.indexOf(window.location.pathname) !== -1;
  }

  function text(el) {
    return (el && (el.innerText || el.textContent) || '').replace(/\s+/g, ' ').trim();
  }

  function setImportant(el, styles) {
    if (!el) return;
    Object.keys(styles).forEach((prop) => {
      if (styles[prop] == null) return;
      if (el.style.getPropertyValue(prop) === styles[prop] && el.style.getPropertyPriority(prop) === 'important') return;
      el.style.setProperty(prop, styles[prop], 'important');
    });
  }

  function setText(el, value) {
    if (!el || el.textContent === value) return;
    el.textContent = value;
  }

  function scheduleApply(delay) {
    if (state.scheduled) return;
    state.scheduled = true;
    window.setTimeout(() => {
      state.scheduled = false;
      applyChanges();
    }, delay || 100);
  }

  state.scheduleApply = scheduleApply;

  function addRootClass() {
    const root = document.documentElement;
    if (!root || !root.classList) return;
    root.classList.toggle(CONFIG.rootClass, isTargetPage());
  }

  function paintHeaderSurface(header) {
    if (!header) return;
    setImportant(header, {
      background: '#fff',
      'background-color': '#fff',
      color: '#0f1114',
      'z-index': '40'
    });
  }

  function noteReactRecook() {
    const root = document.getElementById('root');
    if (!root) return;
    const child = root.firstElementChild;
    if (!child) return;
    if (state.reactRootChild && child !== state.reactRootChild) {
      state.hydrated = true;
    }
    state.reactRootChild = child;
  }

  function armPlpHydration() {
    if (isHeroPage() || state.hydrated || state.plpHydrationArmed) return;
    state.plpHydrationArmed = true;
    const finish = () => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          if (isHeroPage() || state.hydrated) return;
          state.hydrated = true;
          applyChanges();
        });
      });
    };
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
  }

  function isHydrated() {
    if (state.hydrated) return true;
    noteReactRecook();
    if (findNativeHeroList()) {
      state.hydrated = true;
      return true;
    }
    return false;
  }

  function isLocallyDisplayed(el) {
    if (!el) return false;
    let node = el;
    while (node && node.nodeType === 1) {
      if (node.tagName === 'HEADER') break;
      const style = window.getComputedStyle(node);
      if (style.display === 'none') return false;
      node = node.parentElement;
    }
    return true;
  }

  function getSignInAction(header) {
    const actions = Array.from(header.querySelectorAll('a, button')).filter((el) => (
      !el.closest('.optly-hp-claims-button')
      && !el.classList.contains('optly-hp-header-signup')
      && /sign in/i.test(text(el) + ' ' + (el.getAttribute('aria-label') || ''))
    ));
    return actions.find(isLocallyDisplayed) || actions[0] || null;
  }

  function getClaimsInsertionTarget(signInAction) {
    if (!signInAction) return null;
    const action = signInAction.closest('[data-testid="primary-button"]') || signInAction;
    const parent = action.parentElement;
    if (!parent || parent.tagName === 'HEADER') return action;
    return parent;
  }

  function removeStaleHeaderPortals() {
    document.querySelectorAll('body > .optly-hp-header-actions-portal').forEach((el) => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
  }

  function applyFilledHeaderCta(cta) {
    setImportant(cta, {
      background: '#000',
      'background-color': '#000',
      border: '1px solid #000',
      color: '#fff',
      display: 'inline-flex'
    });
  }

  function paintHeaderLink(cta, className, href, label) {
    if (!cta) return;
    cta.classList.add(className);
    if (cta.getAttribute('href') !== href) cta.setAttribute('href', href);
    if (cta.getAttribute('aria-label') !== label) cta.setAttribute('aria-label', label);
    setText(cta, label);
    applyFilledHeaderCta(cta);
  }

  function updateHeaderPlpSignup(header) {
    header.querySelectorAll('.optly-hp-claims-button').forEach((el) => el.remove());

    const signInActions = Array.from(header.querySelectorAll('a, button')).filter((el) => (
      !el.classList.contains('optly-hp-header-signup')
      && /sign in/i.test(text(el) + ' ' + (el.getAttribute('aria-label') || ''))
    ));

    if (signInActions.length === 0) {
      let cta = header.querySelector('.optly-hp-header-signup');
      if (!cta) {
        cta = document.createElement('a');
        header.appendChild(cta);
      }
      paintHeaderLink(cta, 'optly-hp-header-signup', CONFIG.signupHref, 'Sign up');
      return;
    }

    signInActions.forEach((signInAction) => {
      let cta = signInAction.previousElementSibling;
      if (!cta || !cta.classList.contains('optly-hp-header-signup')) {
        cta = document.createElement('a');
        signInAction.insertAdjacentElement('beforebegin', cta);
      }
      paintHeaderLink(cta, 'optly-hp-header-signup', CONFIG.signupHref, 'Sign up');
      setImportant(signInAction, { display: 'none' });
      if (signInAction.getAttribute('aria-hidden') !== 'true') {
        signInAction.setAttribute('aria-hidden', 'true');
      }
    });
  }

  function updateHeaderClaimsCta() {
    if (state.updatingHeader) return;
    state.updatingHeader = true;
    try {
      removeStaleHeaderPortals();

      const header = document.querySelector(CONFIG.selectors.header);
      if (!header) return;

      if (isPlpPage()) {
        updateHeaderPlpSignup(header);
        return;
      }

      paintHeaderSurface(header);

      const signInAction = getSignInAction(header);
      if (signInAction) signInAction.classList.add('optly-hp-header-signin');

      const claimsButtons = Array.from(header.querySelectorAll('.optly-hp-claims-button'));
      let cta = claimsButtons[0] || null;
      const existingClaimLink = Array.from(header.querySelectorAll('a, button')).find((el) => (
        el !== cta
        && !el.classList.contains('optly-hp-header-signup')
        && /claim/i.test(text(el) + ' ' + (el.getAttribute('href') || '') + ' ' + (el.getAttribute('aria-label') || ''))
      ));

      if (!cta && existingClaimLink && existingClaimLink.tagName.toLowerCase() === 'a') {
        cta = existingClaimLink;
      }

      const insertionTarget = getClaimsInsertionTarget(signInAction)
        || document.querySelector(CONFIG.selectors.headerPrimaryButton)
        || header;

      if (!cta) {
        cta = document.createElement('a');
        if (insertionTarget === header) header.appendChild(cta);
        else insertionTarget.insertAdjacentElement('afterend', cta);
      } else if (insertionTarget !== header && cta.previousElementSibling !== insertionTarget) {
        insertionTarget.insertAdjacentElement('afterend', cta);
      }

      claimsButtons.forEach((el) => {
        if (el !== cta && el.parentNode) el.parentNode.removeChild(el);
      });

      cta.classList.add('optly-hp-claims-button');
      if (cta.getAttribute('href') !== CONFIG.claimsHref) cta.setAttribute('href', CONFIG.claimsHref);
      if (cta.getAttribute('aria-label') !== 'Claims') cta.setAttribute('aria-label', 'Claims');
      if (cta.textContent !== 'Claims') cta.textContent = 'Claims';
    } finally {
      Promise.resolve().then(() => {
        state.updatingHeader = false;
      });
    }
  }

  function markPlanCards() {
    // V2 intentionally leaves plan cards untagged so legacy card CSS cannot reapply.
  }

  function markReviews() {
    document.querySelectorAll(CONFIG.selectors.reviewCard).forEach((card) => {
      card.classList.add('optly-hp-review-card');
    });
  }

  function wrapCalculator(calc) {
    if (!calc || calc.querySelector(':scope > .innerContainer')) return;

    const container = document.createElement('div');
    container.className = 'innerContainer optly-hp-calc-inner';
    Array.from(calc.classList).forEach((className) => container.classList.add(className));
    calc.className = '';

    while (calc.firstChild) {
      container.appendChild(calc.firstChild);
    }
    calc.appendChild(container);
  }

  function getCalculatorItems(calc) {
    return Array.from(calc.querySelectorAll('input')).map((input) => {
      const rawName = input.id || input.name || input.getAttribute('data-testid') || '';
      const value = Math.max(0, parseInt(input.value, 10) || 0);
      const block = input.closest(CONFIG.selectors.calcBlock);
      const normalized = `${rawName} ${text(block)}`.toLowerCase();
      let deviceType = 'other';

      if (normalized.includes('laptop') || normalized.includes('desktop')) {
        deviceType = 'computer';
      } else if (normalized.includes('monitor')) {
        deviceType = 'monitor';
      } else if (normalized.includes('printer')) {
        deviceType = 'printer';
      } else if (normalized.includes('headphone')) {
        deviceType = 'headphone';
      }

      return { input, rawName, value, deviceType };
    });
  }

  function getPlanTier(items) {
    const computerCount = items
      .filter((item) => item.deviceType === 'computer')
      .reduce((sum, item) => sum + item.value, 0);
    const peripheralCounts = ['monitor', 'printer', 'headphone'].map((deviceType) => (
      items
        .filter((item) => item.deviceType === deviceType)
        .reduce((sum, item) => sum + item.value, 0)
    ));
    const hasUnsupportedSelected = items.some((item) => item.deviceType === 'other' && item.value >= 1);
    const peripheralLimit = computerCount <= 1 ? 1 : computerCount;
    const exceedsPeripheralLimit = peripheralCounts.some((count) => count > peripheralLimit);

    if (hasUnsupportedSelected || exceedsPeripheralLimit) return 'wholeHome';
    if (computerCount <= 1) return 'individual';
    if (computerCount <= 3) return 'family';
    return 'wholeHome';
  }

  function getPlanButton(tier) {
    const config = CONFIG.planMap[tier] || CONFIG.planMap.individual;
    const cards = Array.from(document.querySelectorAll(CONFIG.selectors.planCard));
    const card = cards.find((candidate) => config.selectorText.test(text(candidate)));
    return card && Array.from(card.querySelectorAll('button, a')).find((el) => /sign up/i.test(text(el) + ' ' + (el.getAttribute('aria-label') || '')));
  }

  function ensureRecommendationCard(calc, totalEl) {
    let card = calc.querySelector('.optly-hp-calc-plan-card');
    if (card || !totalEl) return card;

    card = document.createElement('div');
    card.className = 'optly-hp-calc-plan-card';
    card.innerHTML = [
      '<p class="optly-hp-calc-eyebrow">For you, we recommend:</p>',
      '<p class="optly-hp-calc-plan"><strong data-optly-hp-plan-label>HP Care Complete Individual</strong> <span data-optly-hp-plan-price>$6.99/month + tax</span></p>',
      '<p class="optly-hp-calc-summary" data-optly-hp-plan-summary>Select your devices to find the right plan.</p>',
      '<button type="button" class="optly-hp-calc-signup">Sign up</button>'
    ].join('');

    totalEl.insertAdjacentElement('afterend', card);
    card.querySelector('.optly-hp-calc-signup').addEventListener('click', () => {
      const tier = calc.getAttribute('data-optly-hp-plan-tier') || 'individual';
      const planButton = getPlanButton(tier);
      if (planButton) {
        planButton.click();
      } else {
        const planRoot = document.querySelector(CONFIG.selectors.planRoot);
        if (planRoot) planRoot.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    return card;
  }

  function updateCalculatorRecommendation(calc) {
    const totalEl = calc.querySelector(CONFIG.selectors.calculatorTotal);
    if (!totalEl) return;

    const items = getCalculatorItems(calc);
    const tier = getPlanTier(items);
    const plan = CONFIG.planMap[tier] || CONFIG.planMap.individual;
    const selectedDeviceCount = items.reduce((sum, item) => sum + item.value, 0);
    const card = ensureRecommendationCard(calc, totalEl);

    if (calc.getAttribute('data-optly-hp-plan-tier') !== tier) {
      calc.setAttribute('data-optly-hp-plan-tier', tier);
    }
    totalEl.classList.add('optly-hp-calc-total');

    if (!card) return;
    const label = card.querySelector('[data-optly-hp-plan-label]');
    const price = card.querySelector('[data-optly-hp-plan-price]');
    const summary = card.querySelector('[data-optly-hp-plan-summary]');

    setText(label, plan.label);
    setText(price, plan.price);
    if (summary) {
      setText(summary, tier === 'wholeHome'
        ? 'Whole Home covers laptops, desktops, and eligible home tech.'
        : selectedDeviceCount === 0
          ? 'No devices are selected yet.'
          : `${selectedDeviceCount} eligible ${selectedDeviceCount === 1 ? 'device is' : 'devices are'} selected.`);
    }
  }

  function normalizeCalculatorStructure(calc, pieces) {
    const inner = calc && calc.querySelector(':scope > .innerContainer');
    if (!inner) return;

    [pieces.fullHeader, pieces.leftColumn, pieces.grid].forEach((piece) => {
      if (piece && piece.parentElement !== inner) {
        inner.appendChild(piece);
      }
    });

    const promoted = [pieces.fullHeader, pieces.leftColumn, pieces.grid].filter(Boolean);
    Array.from(inner.children).forEach((child) => {
      if (!promoted.includes(child)) {
        child.classList.add('optly-hp-calc-layout-pass-through');
        setImportant(child, {
          display: 'contents'
        });
      }
    });
  }

  function applyCalculatorLayout(calc, pieces) {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    const inner = calc.querySelector(':scope > .innerContainer');

    setImportant(calc, {
      'box-sizing': 'border-box',
      display: 'grid',
      'max-width': '100%',
      padding: '32px 0 0'
    });

    setImportant(inner, {
      background: '#faf9fc',
      'border-radius': '16px',
      'box-sizing': 'border-box',
      display: 'grid',
      gap: isDesktop ? '56px 41px' : '20px',
      margin: isDesktop ? '0 auto' : '0',
      'max-width': isDesktop ? '1346px' : '100%',
      width: '100%',
      padding: isDesktop ? '56px 72px 32px' : '24px 16px',
      'grid-template-columns': isDesktop ? 'minmax(0, 534px) minmax(0, 627px)' : '1fr',
      'grid-template-rows': isDesktop ? '268px 201px' : 'auto auto auto',
      'justify-content': isDesktop ? 'center' : 'stretch'
    });

    setImportant(pieces.fullHeader, {
      'box-sizing': 'border-box',
      display: 'block',
      'grid-column': isDesktop ? '1' : '1 / -1',
      'grid-row': '1',
      'align-self': isDesktop ? 'center' : 'auto',
      height: isDesktop ? '167px' : 'auto',
      'min-height': '0',
      'max-height': isDesktop ? '167px' : 'none',
      margin: '0',
      padding: '0',
      'text-align': 'left'
    });

    if (pieces.fullHeader) {
      const headerText = pieces.fullHeader.querySelector('[class*="CalculatorHeaderText"]') || pieces.fullHeader.firstElementChild;
      const subheaderText = pieces.fullHeader.querySelector('[class*="CalculatorSubheaderText"]') || pieces.fullHeader.children[1];

      setImportant(headerText, {
        margin: isDesktop ? '0 0 12px' : '0 0 10px',
        padding: '0',
        'font-size': isDesktop ? '48px' : '24px',
        'line-height': isDesktop ? '1' : '1.08'
      });

      setImportant(subheaderText, {
        margin: '0',
        padding: '0',
        'font-size': isDesktop ? '16px' : '12px',
        'line-height': isDesktop ? '1.35' : '1.35',
        'max-width': isDesktop ? '560px' : '100%'
      });

      setImportant(pieces.fullHeader.children[2], {
        margin: isDesktop ? '18px 0 0' : '12px 0 0',
        padding: '0',
        'font-size': isDesktop ? '11px' : '7px',
        'line-height': '1.35'
      });
    }

    setImportant(pieces.leftHeader, {
      display: 'none'
    });

    setImportant(pieces.grid, {
      'box-sizing': 'border-box',
      display: 'grid',
      gap: '18px',
      'grid-auto-flow': 'column',
      'grid-auto-columns': '146px',
      'grid-template-columns': 'none',
      'grid-column': isDesktop ? '1 / -1' : '1',
      'grid-row': '2',
      'align-self': isDesktop ? 'end' : 'auto',
      height: isDesktop ? '201px' : 'auto',
      margin: '0',
      overflow: 'auto hidden',
      'overflow-x': 'auto',
      padding: isDesktop ? '0 0 16px' : '0 0 14px',
      'scroll-snap-type': 'x proximity'
    });

    setImportant(pieces.leftColumn, {
      background: '#fff',
      'border-radius': '8px',
      'box-sizing': 'border-box',
      'box-shadow': isDesktop ? '0 2px 8px rgba(15, 17, 20, 0.08)' : 'none',
      'grid-column': isDesktop ? '2' : '1',
      'grid-row': isDesktop ? '1' : '3',
      height: isDesktop ? '268px' : 'auto',
      margin: '0',
      padding: isDesktop ? '24px 35px 32px' : '20px 16px',
      overflow: 'hidden',
      'text-align': 'center'
    });

    setImportant(pieces.estimateBlock, {
      background: 'transparent',
      'border-radius': '0',
      'box-sizing': 'border-box',
      display: 'block',
      margin: '0',
      padding: '0',
      'text-align': 'center'
    });

    if (pieces.estimateBlock) {
      const total = pieces.estimateBlock.querySelector(CONFIG.selectors.calculatorTotal);
      const label = pieces.estimateBlock.querySelector('[data-optly-hp-plan-label]');
      const price = pieces.estimateBlock.querySelector('[data-optly-hp-plan-price]');
      const summary = pieces.estimateBlock.querySelector('[data-optly-hp-plan-summary]');
      const signup = pieces.estimateBlock.querySelector('.optly-hp-calc-signup');
      const planCard = pieces.estimateBlock.querySelector('.optly-hp-calc-plan-card');

      setImportant(total, {
        background: 'none',
        'background-clip': 'border-box',
        color: 'var(--optly-hp-blue)',
        margin: '0 0 4px',
        padding: '0',
        'font-size': isDesktop ? '50px' : '30px',
        'line-height': '1.1',
        'font-weight': '700',
        'text-align': 'center',
        '-webkit-background-clip': 'border-box',
        '-webkit-text-fill-color': 'var(--optly-hp-blue)'
      });

      setImportant(planCard, {
        'box-sizing': 'border-box',
        margin: isDesktop ? '18px 0 0' : '16px 0 0',
        padding: isDesktop ? '18px 0 0' : '14px 0 0',
        'border-top': '1px solid #ddd',
        'border-left': '0',
        'text-align': 'left'
      });

      setImportant(label, {
        display: 'inline',
        'font-size': isDesktop ? '16px' : '12px',
        'line-height': '1.2',
        margin: '0',
        color: '#0f1114'
      });

      setImportant(price, {
        display: 'inline',
        'font-size': isDesktop ? '13px' : '10px',
        'line-height': '1.2',
        color: '#0f1114',
        'font-weight': '400'
      });

      setImportant(summary, {
        display: isDesktop ? 'none' : 'block',
        'font-size': isDesktop ? '10px' : '9px',
        'line-height': '1.25',
        margin: '0 0 10px'
      });

      setImportant(signup, {
        background: '#0c0e11',
        'background-color': '#0c0e11',
        border: '1px solid #0c0e11',
        'border-radius': '999px',
        color: '#fff',
        display: 'inline-flex',
        'align-items': 'center',
        height: '40px',
        'justify-content': 'center',
        'line-height': '1',
        'min-width': isDesktop ? '120px' : '0',
        width: isDesktop ? 'auto' : '100%',
        padding: '0 24px',
        margin: '8px 0 0',
        'text-align': 'center',
        'vertical-align': 'middle'
      });
    }

    if (pieces.leftColumn || pieces.fullHeader) {
      const footnoteSources = [
        pieces.leftColumn,
        pieces.fullHeader
      ].filter(Boolean);
      const footnote = footnoteSources.reduce((match, source) => (
        match || Array.from(source.children).find((child) => /total device value/i.test(text(child)))
      ), null);

      if (footnote) {
        footnote.classList.add('optly-hp-calc-footnote');
        if (pieces.fullHeader && footnote.parentElement !== pieces.fullHeader) {
          pieces.fullHeader.appendChild(footnote);
        }
        setImportant(footnote, {
          display: 'block',
          margin: isDesktop ? '18px 0 0' : '12px 0 0',
          padding: '0',
          'font-size': isDesktop ? '11px' : '7px',
          'line-height': '1.3'
        });
      }
    }
  }

  function applyCalculatorBlockLayout(block) {
    const content = block.querySelector('[class*="CalculatorBlockContent"]');
    const imageWrapper = block.querySelector('[class*="CalculatorBlockImageWrapper"]');
    const picture = block.querySelector('picture');
    const img = block.querySelector('img');
    const label = block.querySelector('[class*="CalculatorBlockLabel"]');
    const controls = block.querySelector('[class*="CalculatorBlockControlWrapper"]');
    const valueInput = controls && controls.querySelector('input');

    setImportant(block, {
      background: '#fff',
      border: '1.8px solid #eeedf1',
      'border-radius': '7px',
      'box-sizing': 'border-box',
      width: '146px',
      'min-width': '146px',
      height: '185px',
      'min-height': '185px',
      'max-height': '185px',
      'max-width': '146px',
      overflow: 'hidden',
      'scroll-snap-align': 'start'
    });

    setImportant(content, {
      display: 'flex',
      'flex-direction': 'column',
      height: '140px',
      padding: '0',
      margin: '0'
    });

    setImportant(imageWrapper, {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      height: '92px',
      width: '100%',
      padding: '8px 0 0',
      margin: '0'
    });

    setImportant(picture, {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      height: '72px',
      width: '100%',
      margin: '0 auto'
    });

    setImportant(img, {
      'max-height': '64px',
      'max-width': '86px',
      width: 'auto',
      height: 'auto',
      'object-fit': 'contain'
    });

    setImportant(label, {
      'font-size': '12px',
      'line-height': '1.2',
      margin: '0',
      padding: '0 8px',
      'min-height': '30px',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'text-align': 'center'
    });

    setImportant(controls, {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      gap: '8px',
      'box-sizing': 'border-box',
      height: '31px',
      width: 'auto',
      'max-width': '110px',
      margin: '6px auto 8px',
      padding: '0'
    });

    setImportant(valueInput, {
      background: 'transparent',
      'background-color': 'transparent',
      border: '0',
      'border-radius': '0',
      'box-sizing': 'border-box',
      color: '#0c0e11',
      'font-size': '16px',
      'font-weight': '700',
      height: '31px',
      'line-height': '31px',
      margin: '0',
      padding: '0',
      'text-align': 'center',
      width: '24px',
      'min-width': '24px'
    });
  }

  function initCalculator() {
    const calc = document.querySelector(CONFIG.selectors.calculator);
    if (!calc) return;

    if (calc.getAttribute('data-atc-calc') !== 'main') {
      calc.setAttribute('data-atc-calc', 'main');
    }
    wrapCalculator(calc);
    calc.classList.add('optly-hp-calculator');

    const fullHeader = calc.querySelector(CONFIG.selectors.calcFullHeader);
    const grid = calc.querySelector(CONFIG.selectors.calcGrid);
    const leftColumn = calc.querySelector(CONFIG.selectors.calcLeftColumn);
    const leftHeader = calc.querySelector(CONFIG.selectors.calcLeftHeader);
    const estimateBlock = calc.querySelector(CONFIG.selectors.calcEstimateBlock);

    if (fullHeader) fullHeader.classList.add('optly-hp-calc-full-header');
    if (grid) grid.classList.add('optly-hp-calc-grid');
    if (leftColumn) leftColumn.classList.add('optly-hp-calc-left-column');
    if (leftHeader) leftHeader.classList.add('optly-hp-calc-left-header');
    if (estimateBlock) estimateBlock.classList.add('optly-hp-calc-estimate');

    normalizeCalculatorStructure(calc, {
      fullHeader,
      grid,
      leftColumn,
      leftHeader,
      estimateBlock
    });

    applyCalculatorLayout(calc, {
      fullHeader,
      grid,
      leftColumn,
      leftHeader,
      estimateBlock
    });

    calc.querySelectorAll(CONFIG.selectors.calcBlock).forEach((block) => {
      block.classList.add('optly-hp-calc-block');
      applyCalculatorBlockLayout(block);
    });

    updateCalculatorRecommendation(calc);

    if (!calc.dataset.optlyHpListeners) {
      calc.addEventListener('input', () => scheduleApply(50), true);
      calc.addEventListener('change', () => scheduleApply(50), true);
      calc.addEventListener('click', () => scheduleApply(150), true);
      calc.dataset.optlyHpListeners = 'true';
    }

    if (!state.calculatorObserver) {
      state.calculatorObserver = new MutationObserver(() => scheduleApply(50));
      state.calculatorObserver.observe(calc, { childList: true, characterData: true, subtree: true, attributes: true, attributeFilter: ['value', 'aria-label', 'disabled'] });
    }
  }

  function normalizeHeroText(value) {
    return (value || '').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function nativeListFingerprint(ul) {
    return normalizeHeroText(ul && ul.textContent);
  }

  function nativeListHasExpectedItems(ul) {
    const haystack = nativeListFingerprint(ul);
    if (!haystack) return false;
    return CONFIG.heroItems.every((item) => haystack.indexOf(normalizeHeroText(item)) !== -1);
  }

  function findNativeHeroList() {
    const block = document.querySelector('#content-block');
    if (!block) return null;
    const lists = Array.from(block.querySelectorAll('[class*="RichTextWrapper"] ul'));
    for (let i = 0; i < lists.length; i++) {
      const ul = lists[i];
      if (ul.closest('.optly-hp-hero-bullets')) continue;
      if (nativeListHasExpectedItems(ul)) return ul;
    }
    return null;
  }

  function createInjectedHeroList() {
    const wrap = document.createElement('div');
    wrap.className = 'optly-hp-hero-bullets';
    wrap.setAttribute('data-optly-hp-hero-portal', 'true');
    const ul = document.createElement('ul');
    CONFIG.heroItems.forEach((item) => {
      const li = document.createElement('li');
      const p = document.createElement('p');
      p.textContent = item;
      li.appendChild(p);
      ul.appendChild(li);
    });
    wrap.appendChild(ul);
    return wrap;
  }

  function connectedInjectedList() {
    return (state.hero.injectedList && state.hero.injectedList.isConnected) ? state.hero.injectedList : null;
  }

  function positionHeroPortal(list) {
    const block = document.querySelector('#content-block');
    if (!list || !block) return;

    const sub = block.querySelector('[class*="SubHeadline"]')
      || (block.querySelector('h1') && block.querySelector('h1').nextElementSibling);
    const ref = sub || block.querySelector('h1') || block;
    const refRect = ref.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft || 0;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

    list.style.position = 'absolute';
    list.style.left = Math.round(refRect.left + scrollX) + 'px';
    list.style.top = Math.round(refRect.bottom + scrollY + 8) + 'px';
    list.style.width = Math.round(Math.max(refRect.width, 240)) + 'px';
    list.style.zIndex = '3';
    list.style.boxSizing = 'border-box';
    list.style.pointerEvents = 'none';
    list.style.margin = '0';
    list.style.padding = '0';

    const gap = Math.max(list.offsetHeight + 16, 48);
    document.documentElement.style.setProperty('--optly-hp-hero-gap', gap + 'px');
  }

  function insertHeroPortal() {
    const list = (state.hero.injectedList && state.hero.injectedList.nodeType === 1)
      ? state.hero.injectedList
      : createInjectedHeroList();
    state.hero.injectedList = list;
    if (list.parentNode && list.parentNode !== document.body) {
      list.parentNode.removeChild(list);
    }
    if (list.parentNode !== document.body && document.body) {
      document.body.appendChild(list);
    }
    positionHeroPortal(list);
    if (!state.hero.positionRaf) {
      state.hero.positionRaf = window.requestAnimationFrame(() => {
        state.hero.positionRaf = null;
        if (state.hero.injectedList && !state.hero.handedOff) {
          positionHeroPortal(state.hero.injectedList);
        }
      });
    }
  }

  function resetHero() {
    if (state.hero.recheckTimer) {
      window.clearTimeout(state.hero.recheckTimer);
      state.hero.recheckTimer = null;
    }
    if (state.hero.pumpRaf) {
      window.cancelAnimationFrame(state.hero.pumpRaf);
      state.hero.pumpRaf = null;
    }
    if (state.hero.positionRaf) {
      window.cancelAnimationFrame(state.hero.positionRaf);
      state.hero.positionRaf = null;
    }
    state.hero.pumping = false;
    const list = state.hero.injectedList;
    if (list && list.parentNode) list.parentNode.removeChild(list);
    const root = document.documentElement;
    if (root && root.classList) root.classList.remove(CONFIG.heroPendingClass);
    if (root && root.style) root.style.removeProperty('--optly-hp-hero-gap');
    state.hero.injectedList = null;
    state.hero.nativeStableSince = 0;
    state.hero.nativeFingerprint = '';
    state.hero.handedOff = false;
  }

  function scheduleHeroRecheck() {
    if (state.hero.recheckTimer || state.hero.handedOff) return;
    state.hero.recheckTimer = window.setTimeout(() => {
      state.hero.recheckTimer = null;
      inspectHeroHandoff();
    }, 250);
  }

  function handoffToNative() {
    if (state.hero.handedOff) return;
    const list = state.hero.injectedList;
    if (list && list.parentNode) list.parentNode.removeChild(list);
    const root = document.documentElement;
    if (root && root.classList) root.classList.remove(CONFIG.heroPendingClass);
    if (root && root.style) root.style.removeProperty('--optly-hp-hero-gap');
    state.hero.injectedList = null;
    state.hero.handedOff = true;
    state.hero.nativeStableSince = 0;
    state.hero.nativeFingerprint = '';
    state.hydrated = true;
  }

  function inspectHeroHandoff() {
    if (state.hero.handedOff || !state.hero.injectedList) return;
    const native = findNativeHeroList();
    if (!native) {
      state.hero.nativeStableSince = 0;
      state.hero.nativeFingerprint = '';
      return;
    }
    const fingerprint = nativeListFingerprint(native);
    const now = Date.now();
    if (fingerprint !== state.hero.nativeFingerprint) {
      state.hero.nativeFingerprint = fingerprint;
      state.hero.nativeStableSince = now;
      scheduleHeroRecheck();
      return;
    }
    if (!state.hero.nativeStableSince) {
      state.hero.nativeStableSince = now;
      scheduleHeroRecheck();
      return;
    }
    if (now - state.hero.nativeStableSince < 250) {
      scheduleHeroRecheck();
      return;
    }
    handoffToNative();
  }

  function startHeroPump() {
    if (state.hero.pumping || state.hero.handedOff) return;
    state.hero.pumping = true;
    function tick() {
      applyHero();
      if (state.hero.handedOff) {
        state.hero.pumping = false;
        state.hero.pumpRaf = null;
        return;
      }
      state.hero.pumpRaf = window.requestAnimationFrame(tick);
    }
    tick();
  }

  function applyHero() {
    if (!isHeroPage()) {
      resetHero();
      return;
    }
    if (state.hero.handedOff) return;

    const root = document.documentElement;
    const block = document.querySelector('#content-block');
    if (!block) {
      startHeroPump();
      return;
    }

    const native = findNativeHeroList();
    const injected = connectedInjectedList();

    if (native && !injected) {
      if (root) root.classList.remove(CONFIG.heroPendingClass);
      if (root && root.style) root.style.removeProperty('--optly-hp-hero-gap');
      state.hero.injectedList = null;
      state.hero.handedOff = true;
      state.hydrated = true;
      return;
    }

    insertHeroPortal();
    if (root) root.classList.add(CONFIG.heroPendingClass);
    inspectHeroHandoff();
  }

  function applyInTreeChanges() {
    updateHeaderClaimsCta();
    markPlanCards();
    markReviews();
    initCalculator();
  }

  function scheduleHeaderRaf() {
    if (state.headerRaf) return;
    state.headerRaf = window.requestAnimationFrame(() => {
      state.headerRaf = null;
      if (!isTargetPage()) return;
      applyHero();
      updateHeaderClaimsCta();
      const list = connectedInjectedList();
      if (list) positionHeroPortal(list);
    });
  }

  function isOwnHeaderEdit(node) {
    if (!node) return false;
    if (node.nodeType !== 1) return isOwnHeaderEdit(node.parentElement);
    if (!node.classList) return false;
    return node.classList.contains('optly-hp-hero-bullets')
      || node.classList.contains('optly-hp-header-signup')
      || node.classList.contains('optly-hp-claims-button');
  }

  function mutationTouchesHeaderOrHero(mutation) {
    if (isOwnHeaderEdit(mutation.target)) return false;

    function interesting(node, allowQuery) {
      if (!node || node.nodeType !== 1) return false;
      if (node.classList && (
        node.classList.contains('optly-hp-hero-bullets')
        || node.classList.contains('optly-hp-header-signup')
        || node.classList.contains('optly-hp-claims-button')
      )) return false;
      if (node.id === 'content-block' || node.id === 'root' || node.tagName === 'HEADER') return true;
      const cls = String(node.className || '');
      if (cls.indexOf('JoyfulLayout') !== -1) return true;
      if (node !== document.body && node !== document.documentElement && node.closest) {
        if (node.closest('header') || node.closest('#content-block')) return true;
      }
      if (allowQuery && node.querySelector && node.tagName !== 'BODY' && node.tagName !== 'HTML') {
        if (node.querySelector('header') || node.querySelector('#content-block')) return true;
      }
      return false;
    }

    if (interesting(mutation.target, false)) return true;
    const lists = [mutation.addedNodes, mutation.removedNodes];
    for (let i = 0; i < lists.length; i++) {
      const list = lists[i];
      if (!list) continue;
      for (let j = 0; j < list.length; j++) {
        if (interesting(list[j], true)) return true;
      }
    }
    return false;
  }

  function applyChanges() {
    addRootClass();
    if (!isTargetPage()) {
      removeStaleHeaderPortals();
      resetHero();
      return;
    }

    if (isHeroPage()) {
      applyHero();
      startHeroPump();
    }
    updateHeaderClaimsCta();
    armPlpHydration();

    if (!isHydrated()) return;
    applyInTreeChanges();
  }

  function watchDocument() {
    const root = document.documentElement || document.body;
    if (!root || typeof root.nodeType !== 'number') return;
    if (state.documentObserver) {
      try { state.documentObserver.disconnect(); } catch (err) {}
    }
    state.documentObserver = new MutationObserver((mutations) => {
      noteReactRecook();
      if (findNativeHeroList()) state.hydrated = true;

      let headerOrHeroChanged = false;
      for (let i = 0; i < mutations.length; i++) {
        if (mutationTouchesHeaderOrHero(mutations[i])) {
          headerOrHeroChanged = true;
          break;
        }
      }

      if (headerOrHeroChanged) {
        updateHeaderClaimsCta();
        applyHero();
        scheduleHeaderRaf();
      }

      if (isHydrated()) scheduleApply(100);
    });
    state.documentObserver.observe(root, { childList: true, subtree: true });
  }

  state.rewatch = watchDocument;

  function watchResize() {
    if (state.resizeListener) return;
    state.resizeListener = true;
    window.addEventListener('resize', () => {
      if (isTargetPage()) updateHeaderClaimsCta();
      const list = connectedInjectedList();
      if (list) positionHeroPortal(list);
      if (state.hydrated) scheduleApply(50);
    }, true);
  }

  function patchHistoryForSpa() {
    ['pushState', 'replaceState'].forEach((fn) => {
      const original = history[fn];
      if (!original || original.__optlyHpPatched) return;
      history[fn] = function () {
        const result = original.apply(this, arguments);
        scheduleApply(0);
        return result;
      };
      history[fn].__optlyHpPatched = true;
    });
    window.addEventListener('popstate', () => scheduleApply(0), true);
  }

  patchHistoryForSpa();
  watchDocument();
  watchResize();
  applyChanges();
})();
}}]}]}], "weightDistributions": null, "name": "/program/hp-care-complete-warranty-expiration-enroll/ - HP enrollment updates", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5684667939028992"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6379670218735616"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "4863942202228736", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "5702802618449920", "name": "/ - Homepage Reduce Card Size on Mobile", "commitId": "4558644671414272", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "25161221107"], "audienceName": "Mobile Devices", "changes": null, "id": "6388446231527424", "integrationSettings": null, "variations": [{"id": "5028280353423360", "name": "Variation #2", "actions": [{"viewId": "5820156748759040", "changes": [{"id": "05ebfd9928364f418a3acf9118732ef8", "type": "append", "selector": "head", "value": "<style>@media (max-width: 399px) {\n  #job-card-container [data-testid=\"simple-cards-grid\"] {\n    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr)) !important;\n  }\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "/ - Homepage Reduce Card Size on Mobile", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5702802618449920"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5820156748759040"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6010402385952768", "name": "/protection-plans/asurion-home-tech-care - Calculator", "commitId": "5958382815805440", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"google_analytics_4": {}, "28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4982470280478720", "integrationSettings": null, "variations": [{"id": "6508186075660288", "name": "AHTC calculator", "actions": [{"viewId": "5882581105770496", "changes": [{"dependencies": [], "selector": "head", "type": "append", "value": "<style>[data-testid=\"calculator\"]:not([data-testid=\"calculator\"][data-atc-calc='main']){\r\n  display:none !important;\r\n}\r\n[data-testid=\"calculator\"] {\r\n  display:grid !important;\r\n  padding:32px 0 0 0 !important;\r\n}\r\n/* Panel fill: Figma --aui-surface-variant on frame 14358:15045 */\r\n[data-testid=\"calculator\"] .innerContainer {\r\n  background:#faf9fc !important;\r\n  border-radius:16px !important;\r\n  width:unset !important;\r\n  padding:0 !important;\r\n}\r\n[data-testid=\"calculator\"] [class*='CalculatorEstimateBlock'] {\r\n  background-color: white !important;\r\n  grid-column: 3 / span 6 !important;\r\n  grid-row: 1 / span 12 !important;\r\n  padding: 0 !important;\r\n  margin: 32px !important;\r\n  border-radius: .375rem !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] [class*='CalculatorFullWidthHeader']{\r\n  display:grid !important;\r\n  grid-column: 1 / span 6 !important;\r\n  grid-row: 1 / span 1 !important;\r\n  text-align: left !important;\r\n  margin:32px 32px 16px 32px !important;\r\n}\r\n[data-testid=\"calculator\"] [class*='CalculatorLeftColumn'] {\r\n  grid-column: 7 / span 6 !important;\r\n  grid-row: 1 / span 1 !important;\r\n  padding:0 !important;\r\n  margin:0 !important;\r\n}\r\n[data-testid=\"calculator\"] [class*='CalculatorBlockImageWrapper'] {\r\n  height:6rem !important;\r\n  padding:var(--aui-spacing-150) !important;\r\n  margin:0 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] [class*='CalculatorEstimateHeader'],\r\n[data-testid=\"calculator\"] [class*='CalculatorLeftColumnHeader'] {\r\n  display:none !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] [class*='CalculatorGrid'] {\r\n  display: grid !important;\r\n  grid-gap: 0px !important;\r\n  padding: 16px 0 16px 16px !important;\r\n  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr)) !important;\r\n  grid-auto-flow: column !important;\r\n  grid-auto-columns: minmax(175px, 1fr) !important;\r\n  overflow-x: auto !important;\r\n  grid-column: 1 / span 12 !important;\r\n  grid-row: 2 / span 1 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .innerContainer [data-testid=\"calc-block\"]{\r\n  background:white !important;\r\n  max-width:146px !important;\r\n  border-radius: 7.133px !important;\r\n  border: 1.783px solid #EEEDF1 !important;\r\n}\r\n[data-testid=\"calculator\"] .innerContainer [data-testid=\"calc-block\"] [class*='text']{\r\n  padding:0 !important;\r\n  margin:0 !important;\r\n}\r\n[data-testid=\"calculator\"] .innerContainer [data-testid=\"calc-block\"] [class*='text']:not(button){\r\n  font-size:14px !important;\r\n  padding-bottom:8px !important;\r\n  font-weight:700 !important;\r\n  color:black !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .innerContainer [data-testid=\"calc-block\"] button {\r\n  width: 30.738px !important;\r\n  height: 30.738px !important;\r\n  background-color:#ffffff !important;\r\n  color:#1a1c1e !important;\r\n  border: 1px solid #eeedf1 !important;\r\n  border-radius: 50% !important;\r\n  padding:0 !important;\r\n}\r\n/* Compact per-tile count. Do not set color or display. The component hides this at zero. */\r\n[data-testid=\"calculator\"] .innerContainer [data-testid=\"calc-block\"] input {\r\n  width: 24px !important;\r\n  min-width: 24px !important;\r\n  max-width: 24px !important;\r\n  height: 31px !important;\r\n  margin: 0 !important;\r\n  padding: 0 !important;\r\n  background: transparent !important;\r\n  border: 0 !important;\r\n  border-radius: 0 !important;\r\n  box-shadow: none !important;\r\n  font-size: 16px !important;\r\n  font-weight: 700 !important;\r\n  line-height: 31px !important;\r\n  text-align: center !important;\r\n  color: black !important;\r\n  -webkit-appearance: none !important;\r\n  appearance: none !important;\r\n}\r\n[data-testid=\"calculator\"] .innerContainer [data-testid=\"calc-block\"] > div.items-center {\r\n  padding:8px 0 !important;\r\n}\r\n[data-testid=\"calculator\"] .innerContainer [data-testid=\"calc-block\"] > div:nth-child(2) {\r\n  padding:0 0 14px 0 !important;\r\n  margin:0 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .plan-card {\r\n  padding:0 24px 24px 24px !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .summary p.ahtc-total {\r\n  color: rgb(31, 89, 178) !important;\r\n  font-weight: 700 !important;\r\n  font-size: 72px !important;\r\n  line-height: 1 !important;\r\n  text-align: center !important;\r\n  padding: 24px 16px 40px 16px !important;\r\n  margin: 0 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] hr {\r\n  border: none !important;\r\n  border-top: 1px solid #d5d6da !important;\r\n  margin: 0 0 16px 0 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .recommendation {\r\n  display: block !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .subtitle {\r\n  color: #5d5e61 !important;\r\n  font-size: 13px !important;\r\n  margin:0 0 2px 0 !important;\r\n  padding:0 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .plan {\r\n  font-size: 18px !important;\r\n  margin: 0 !important;\r\n  text-align:left !important;\r\n}\r\n[data-testid=\"calculator\"] .label {\r\n  color: #1a1c1e !important;\r\n  font-size: 18px !important;\r\n  font-weight: 700 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .recommendation .text{\r\n  padding:8px 0 !important;\r\n  text-align: left !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] .price {\r\n  display: inline !important;\r\n  font-weight: 400 !important;\r\n  font-size: 14px !important;\r\n  color: #1a1c1e !important;\r\n  margin: 0 !important;\r\n}\r\n\r\n[data-testid=\"calculator\"] [data-testid*=\"-increment-button\"][disabled] {\r\n  opacity: 0.4 !important;\r\n  pointer-events: none !important;\r\n  cursor: not-allowed !important;\r\n  color:#1a1c1e !important;\r\n}\r\n\r\n/* Hide the unformatted Contentful total. .ahtc-total mirrors it with a thousands separator. */\r\n[data-testid=\"calculator\"] p[data-testid$=\"-total\"] {\r\n  display: none !important;\r\n}\r\n\r\n/* Estimate block card (parent of total) */\r\n[data-testid=\"calculator\"] div:has(> p[data-testid=\"Asurion Home Tech Care-total\"]) {\r\n  background-color: white !important;\r\n  border-radius: .375rem !important;\r\n  margin: 32px !important;\r\n  padding: 0 !important;\r\n}\r\n/* Grid of device blocks (when CalculatorGrid class is absent) */\r\n[data-testid=\"calculator\"] .innerContainer > .grid {\r\n  display: grid !important;\r\n  grid-gap: 0 !important;\r\n  padding: 16px 0 16px 16px !important;\r\n  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr)) !important;\r\n  grid-auto-flow: column !important;\r\n  grid-auto-columns: minmax(175px, 1fr) !important;\r\n  overflow-x: auto !important;\r\n}\r\n/* Image wrapper in new calc-block (span with image) */\r\n[data-testid=\"calculator\"] [data-testid=\"calc-block\"] > div:first-child > span {\r\n  height: 6rem !important;\r\n  padding: var(--aui-spacing-150, 0.75rem) !important;\r\n  margin: 0 !important;\r\n}\r\n\r\n@media only screen and (max-width: 1023px) {\r\n  [data-testid=\"calculator\"] [class*='CalculatorFullWidthHeader'] {\r\n    grid-column: 1 / span 12 !important;\r\n    grid-row: 1 / span 1 !important;\r\n    margin:32px 24px 8px 24px !important;\r\n  }\r\n  [data-testid=\"calculator\"] [class*='CalculatorLeftColumn'] {\r\n    padding-top:16px !important;\r\n    grid-column: 1 / span 12 !important;\r\n    grid-row: 3 / span 1 !important;\r\n  }\r\n  [data-testid=\"calculator\"] [class*='CalculatorGrid'] {\r\n    grid-column: 1 / span 12 !important;\r\n    grid-row: 2 / span 1 !important;\r\n  }\r\n  [data-testid=\"calculator\"] .subtitle {\r\n    margin: 0 0 4px 0 !important;\r\n    font-size: 14px !important;\r\n  }\r\n  [data-testid=\"calculator\"] .plan {\r\n    margin-bottom: 0 !important;\r\n    text-align: center !important;\r\n  }\r\n  [data-testid=\"calculator\"] .recommendation .text {\r\n    text-align: center !important;\r\n  }\r\n  [data-testid=\"calculator\"] .price {\r\n    display: block !important;\r\n    font-size: 18px !important;\r\n  }\r\n  [data-testid=\"calculator\"] .summary p.ahtc-total {\r\n    font-size: 48px !important;\r\n    padding: 24px 16px 16px 16px !important;\r\n  }\r\n  [data-testid=\"calculator\"] div:has(> p[data-testid=\"Asurion Home Tech Care-total\"]) {\r\n    margin: 32px 24px !important;\r\n  }\r\n  [data-testid=\"calculator\"] h2 {\r\n    line-height: 1.15 !important;\r\n  }\r\n}</style>", "id": "7a45752d-a2f9-469f-a18e-5354a2729257"}, {"dependencies": [], "type": "custom_code", "value": function($){const PLAN_LABEL = 'Asurion Home Tech Care';
const PLAN_PRICE = '$24.99/mo + tax';

const summaryTemplate = `<div class="plan-card">
    <div class="summary">
      <p class="ahtc-total">$0</p>
    </div>
    <hr>
    <div class="recommendation">
      <div class="text">
        <p class="subtitle">For you, we recommend:</p>
        <p class="plan"><strong class="label">${PLAN_LABEL}</strong> <span class="price">${PLAN_PRICE}</span></p>
      </div>
    </div>
  </div>`;

const TOTAL_SELECTOR = 'p[data-testid="Asurion Home Tech Care-total"]';
const CALCULATOR_SELECTOR = '[data-testid="calculator"]';

// --- Hydration-safe target internals ---
const origRemoveChild = Node.prototype.removeChild;
const origReplaceChild = Node.prototype.replaceChild;
const lockedEls = new Set();
let optlyWriting = false;

function lockInjectedCard(card) {
  if (!card || !card.parentNode || card.__atcLocked) return;
  const parent = card.parentNode;
  lockedEls.add(card);
  card.__atcLocked = true;

  if (parent.__atcParentLocked) return;
  parent.removeChild = function (child) {
    if (!optlyWriting && lockedEls.has(child)) return child;
    return origRemoveChild.call(this, child);
  };
  parent.replaceChild = function (newChild, oldChild) {
    if (!optlyWriting && lockedEls.has(oldChild)) return oldChild;
    return origReplaceChild.call(this, newChild, oldChild);
  };
  parent.__atcParentLocked = true;
}

function getPlanCard(totalElement) {
  return totalElement && totalElement.parentElement && totalElement.parentElement.querySelector('.plan-card');
}

function collectInputs() {
  const nodeList = document.querySelectorAll(`${CALCULATOR_SELECTOR} input`);
  const items = [];
  nodeList.forEach(input => {
    const id = input.id || input.name || 'unnamed';
    const val = Math.max(0, parseInt(input.value, 10) || 0);
    items.push({ input, id, val });
  });
  return items;
}

function formatTotal(totalElement) {
  const raw = totalElement ? totalElement.textContent : '';
  const amount = Math.round(parseFloat(String(raw).replace(/[^0-9.]/g, '')) || 0);
  return '$' + amount.toLocaleString('en-US');
}

function updateSummaryDisplay() {
  const totalElement = document.querySelector(TOTAL_SELECTOR);
  const planCard = getPlanCard(totalElement);
  if (!planCard) return;

  const subtitle = planCard.querySelector('.subtitle');
  const label = planCard.querySelector('.label');
  const price = planCard.querySelector('.price');
  const ahtcTotal = planCard.querySelector('.ahtc-total');
  if (subtitle) subtitle.textContent = 'For you, we recommend:';
  if (label) label.textContent = PLAN_LABEL;
  if (price) price.textContent = PLAN_PRICE;
  if (ahtcTotal) ahtcTotal.textContent = formatTotal(totalElement);

  const items = collectInputs();
  const totalPurchases = items.reduce((acc, it) => acc + it.val, 0);

  return {
    calculatorState: items.reduce((acc, it) => {
      acc[it.id] = { count: it.val };
      return acc;
    }, {}),
    summary: { totalPurchases }
  };
}

// ======= CONFIGURE THIS =======
function applyChanges() {
  // ---------- CONFIG (all tunables live here) ----------
  const CONFIG = {
    SELECTORS: {
      CALCULATOR: CALCULATOR_SELECTOR,
      SUMMARY_INJECT_AFTER: TOTAL_SELECTOR
    },
    SUMMARY_TEMPLATE: summaryTemplate
  };
  // -----------------------------------------------------

  function moveElements() {
    const priceElement = document.querySelector('[class*="CalculatorAsteriskPrice"]');
    const subheaderElement = document.querySelector('[class*="CalculatorSubheaderText"]');
    if (priceElement && subheaderElement && subheaderElement.parentNode) {
      subheaderElement.parentNode.insertBefore(priceElement, subheaderElement.nextSibling);
    }
  }

  function wrapChildrenInContainer(parent) {
    if (!(parent instanceof HTMLElement)) {
      return;
    }
    const existingContainer = parent.querySelector('.innerContainer');
    if (existingContainer) {
      return;
    }
    const container = document.createElement('div');
    container.classList.add('innerContainer');
    parent.classList.forEach(cls => container.classList.add(cls));
    parent.className = '';
    while (parent.firstChild) container.appendChild(parent.firstChild);
    parent.appendChild(container);
  }

  function injectSummary(cssSelector) {
    const totalElement = document.querySelector(cssSelector);
    if (!totalElement) return false;
    const existingPlanCard = totalElement.parentElement && totalElement.parentElement.querySelector('.plan-card');
    if (existingPlanCard) {
      lockInjectedCard(existingPlanCard);
      return true;
    }
    optlyWriting = true;
    try {
      totalElement.insertAdjacentHTML('afterend', CONFIG.SUMMARY_TEMPLATE);
    } finally {
      optlyWriting = false;
    }
    lockInjectedCard(getPlanCard(totalElement));
    return true;
  }

  let calculatorState = {};
  let summary = {};

  function updateCalculatorState() {
    const result = window.__ahtcUpdateSummaryDisplay();
    if (!result) return { calculatorState, summary };
    calculatorState = result.calculatorState;
    summary = result.summary;

    if (!Array.isArray(window.dataLayer)) {
      window.dataLayer = [];
    }
    window.dataLayer.push({
      event: 'plan_calculator_update',
      recommended_plan: 'AHTC',
      total_devices: summary.totalPurchases
    });

    return { calculatorState, summary };
  }

  function observeParagraphChanges() {
    const paragraphs = document.querySelectorAll(TOTAL_SELECTOR);
    const observer = new MutationObserver(() => {
      updateCalculatorState();
    });
    paragraphs.forEach(p => {
      observer.observe(p, { childList: true, characterData: true, subtree: true });
    });
  }

  function init() {
    const el = document.querySelector(CONFIG.SELECTORS.CALCULATOR);
    if (!el) return;
    el.setAttribute('data-atc-calc', 'main');
    wrapChildrenInContainer(el);
    moveElements();
    const injected = injectSummary(CONFIG.SELECTORS.SUMMARY_INJECT_AFTER);

    observeParagraphChanges();
    updateCalculatorState();
    return injected;
  }

  const el = document.querySelector(CONFIG.SELECTORS.CALCULATOR);
  if (el && el.getAttribute('data-atc-calc')) {
    injectSummary(CONFIG.SELECTORS.SUMMARY_INJECT_AFTER);
    updateCalculatorState();
    return Boolean(getPlanCard(document.querySelector(CONFIG.SELECTORS.SUMMARY_INJECT_AFTER)));
  } else {
    return init();
  }
}
// ======= END CONFIG =======

window.__ahtcUpdateSummaryDisplay = updateSummaryDisplay;

// --- Utilities ---
function safeApply() {
  try {
    return applyChanges();
  } catch (e) {
    return false;
  }
}

const watchForTarget = (() => {
  let observer;
  return () => {
    if (observer) return;
    observer = new MutationObserver((mutations) => {
      const onlyOurChanges = mutations.every((m) => {
        const target = m.target;
        return target && target.closest && target.closest('.plan-card');
      });
      if (onlyOurChanges) return;
      const totalElement = document.querySelector(TOTAL_SELECTOR);
      if (totalElement && !getPlanCard(totalElement)) {
        safeApply();
      }
    });
    observer.observe(document.documentElement || document.body, { childList: true, subtree: true });
  };
})();

(function patchHistoryForSpa() {
  const fire = () => {
    safeApply();
    watchForTarget();
  };
  ['pushState', 'replaceState'].forEach(fn => {
    const orig = history[fn];
    if (!orig || orig.__patched) return;
    history[fn] = function () { const res = orig.apply(this, arguments); fire(); return res; };
    history[fn].__patched = true;
  });
  window.addEventListener('popstate', fire, true);
})();

document.addEventListener('click', () => setTimeout(updateSummaryDisplay, 150), true);
document.addEventListener('input', () => setTimeout(updateSummaryDisplay, 150), true);
document.addEventListener('change', () => setTimeout(updateSummaryDisplay, 150), true);

safeApply();
watchForTarget();
}, "id": "9327e2bc-a910-4bf5-905b-a27b8b350bed"}]}]}], "weightDistributions": null, "name": "/protection-plans/asurion-home-tech-care - Calculator", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6010402385952768"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5882581105770496"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "4982470280478720", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "6033378061844480", "name": "/program/hp-care-complete/ - merged personalization + hero", "commitId": "6448278764519424", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"google_analytics_4": {}, "28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5855662951890944", "integrationSettings": null, "variations": [{"id": "6580142783332352", "name": "Merged experience", "actions": [{"viewId": "5535356095823872", "changes": [{"dependencies": [], "id": "2af6a927-4e74-4f25-aa0a-8fc36c0571a3", "selector": "head", "type": "append", "value": "<style>[data-aui=\"modal\"] [class*=\"Dialog__StyledContent\"] {\n  padding-bottom: 50px;\n}\n\n[data-aui=\"modal\"] [class*=\"Dialog__FlexBox\"] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  padding: 10px 0;\n  background: #fff;\n}\n\n[data-aui=\"modal\"] [class*=\"Dialog__FlexBox\"] button {\n  position: relative;\n  right: 15px;\n}\n\n\n/* Sticky footer: keep Sign Up label on one line (avoids wrap \u2264390px) */\n[class*=\"FooterWrapper\"] [data-testid=\"action\"] {\n  white-space: nowrap !important;\n}\n@media (max-width: 428px) and (min-width: 390px){\n\t[class*=\"FooterContent\"]{\n \t\tgap:12px !important; \n\t}\n  [class*=\"FooterContent\"] button{font-size:14px;}\n  [class*=\"LogoContainer\"] img {max-width:128px;}\n  [class*=\"PlanDescription\"] {font-size:14px;}\n}\n@media (max-width:389px){\n\n  [class*=\"FooterContent\"]{\n \t\tgap:8px !important; \n\t}\n  [class*=\"FooterContent\"] button{font-size:12px;}\n  [class*=\"LogoContainer\"] img {max-width:116px;}\n  [class*=\"PlanDescription\"] {font-size:12px;}\n}\n\nhtml.optly-hp-care-complete {\n  --optly-hp-blue: #0057b8;\n  --optly-hp-black: #000;\n  --optly-hp-border: #eeedf1;\n  --optly-hp-surface: #faf9fc;\n}\n\nhtml.optly-hp-care-complete header {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n  border: 0 !important;\n  border-bottom: 1px solid #d8d8de !important;\n  box-shadow: 0 1px 0 rgba(15, 17, 20, 0.08) !important;\n  z-index: 40 !important;\n}\n\nhtml.optly-hp-care-complete [class*=\"partner-dark\"] header,\nhtml.optly-hp-care-complete [class*=\"JoyfulLayout\"] header {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete header [class*=\"Container\"],\nhtml.optly-hp-care-complete header [class*=\"Header\"],\nhtml.optly-hp-care-complete header [class*=\"Nav\"],\nhtml.optly-hp-care-complete header [class*=\"Branding\"] {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-header-surface {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete header *:not(a):not(button) {\n  border-color: transparent !important;\n}\n\nhtml.optly-hp-care-complete header a:not(.optly-hp-claims-button):not(.optly-hp-header-signup),\nhtml.optly-hp-care-complete header button:not(.optly-hp-claims-button):not(.optly-hp-header-signup) {\n  border-color: #0f1114 !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete header [class*=\"PrimaryButton\"],\nhtml.optly-hp-care-complete header [class*=\"StyledPrimaryButton\"] {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete header .optly-hp-header-signin,\nhtml.optly-hp-care-complete header .optly-hp-claims-button {\n  align-items: center !important;\n  box-sizing: border-box !important;\n  border-radius: 999px !important;\n  display: inline-flex !important;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n  height: 40px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  min-width: 104px !important;\n  padding: 0 24px !important;\n  text-decoration: none !important;\n  white-space: nowrap !important;\n}\n\nhtml.optly-hp-care-complete header .optly-hp-header-signin {\n  background: #fff !important;\n  background-color: #fff !important;\n  border: 1px solid #0f1114 !important;\n  border-color: #0f1114 !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-claims-button {\n  align-items: center !important;\n  background: var(--optly-hp-black) !important;\n  border: 1px solid var(--optly-hp-black) !important;\n  border-radius: 999px !important;\n  color: #fff !important;\n  display: inline-flex !important;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n  height: 40px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  margin-left: 12px !important;\n  min-width: 104px !important;\n  padding: 0 24px !important;\n  text-decoration: none !important;\n  white-space: nowrap !important;\n}\n\nhtml.optly-hp-care-complete header .optly-hp-claims-button,\nhtml.optly-hp-care-complete header .optly-hp-claims-button *,\nhtml.optly-hp-care-complete header .optly-hp-header-signup,\nhtml.optly-hp-care-complete header .optly-hp-header-signup * {\n  background: var(--optly-hp-black) !important;\n  background-color: var(--optly-hp-black) !important;\n  color: #fff !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-header-signup {\n  align-items: center !important;\n  background: var(--optly-hp-black) !important;\n  border: 1px solid var(--optly-hp-black) !important;\n  border-radius: 999px !important;\n  color: #fff !important;\n  display: inline-flex !important;\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  height: 40px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  margin-left: 12px !important;\n  padding: 0 24px !important;\n  text-decoration: none !important;\n  white-space: nowrap !important;\n}\n\n\n@media (max-width: 1023px) {\n  #plancards {\n    padding-top: 0 !important;\n  }\n\n  #content-block {\n    gap: var(--aui-spacing-100) !important;\n  }\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-signup {\n  align-items: center !important;\n  background: #0c0e11 !important;\n  border: 1px solid #0c0e11 !important;\n  border-radius: 999px !important;\n  color: #fff !important;\n  cursor: pointer !important;\n  display: inline-flex !important;\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  height: 48px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  min-width: 182px !important;\n  padding: 0 24px !important;\n  text-align: center !important;\n  text-decoration: none !important;\n  vertical-align: middle !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-signup {\n  align-items: center !important;\n  background: #0c0e11 !important;\n  background-color: #0c0e11 !important;\n  border-color: #0c0e11 !important;\n  border-radius: 999px !important;\n  display: inline-flex !important;\n  height: 40px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  min-width: 120px !important;\n  padding: 0 24px !important;\n}\n\nhtml.optly-hp-care-complete #plancards + div {\n  text-align: center !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-section-pill,\nhtml.optly-hp-care-complete .optly-hp-section-pill * {\n  color: var(--optly-hp-blue) !important;\n}\n\nhtml.optly-hp-care-complete [data-testid=\"calculator\"] {\n  box-sizing: border-box !important;\n  display: grid !important;\n  max-width: 100% !important;\n  padding: 32px 0 0 !important;\n}\n\nhtml.optly-hp-care-complete [data-testid=\"calculator\"] .innerContainer {\n  background: var(--optly-hp-surface) !important;\n  border-radius: 16px !important;\n  box-sizing: border-box !important;\n  display: grid !important;\n  gap: 0 !important;\n  grid-template-columns: 1fr !important;\n  grid-template-rows: auto auto !important;\n  padding: 32px 0 0 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-full-header {\n  box-sizing: border-box !important;\n  display: block !important;\n  grid-column: 1 / -1 !important;\n  grid-row: 1 !important;\n  margin: 0 32px 24px !important;\n  padding: 0 !important;\n  text-align: left !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-left-header {\n  display: none !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-grid {\n  box-sizing: border-box !important;\n  display: grid !important;\n  gap: 18px !important;\n  grid-auto-columns: 146px !important;\n  grid-auto-flow: column !important;\n  grid-column: 1 / -1 !important;\n  grid-row: 2 !important;\n  grid-template-columns: none !important;\n  overflow-x: auto !important;\n  padding: 16px 0 20px 16px !important;\n  scroll-snap-type: x proximity !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block {\n  background: #fff !important;\n  border: 1.8px solid var(--optly-hp-border) !important;\n  border-radius: 7px !important;\n  box-sizing: border-box !important;\n  height: 185px !important;\n  max-width: 146px !important;\n  min-width: 146px !important;\n  scroll-snap-align: start !important;\n  width: 146px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block button {\n  align-items: center !important;\n  box-sizing: border-box !important;\n  height: 31px !important;\n  justify-content: center !important;\n  min-width: 31px !important;\n  padding: 0 !important;\n  width: 31px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block [class*=\"CalculatorBlockControlWrapper\"] {\n  align-items: center !important;\n  box-sizing: border-box !important;\n  display: flex !important;\n  gap: 8px !important;\n  height: 31px !important;\n  justify-content: center !important;\n  margin: 6px auto 8px !important;\n  max-width: 110px !important;\n  padding: 0 !important;\n  width: auto !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block input {\n  background: transparent !important;\n  background-color: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-sizing: border-box !important;\n  color: #0c0e11 !important;\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  height: 31px !important;\n  line-height: 31px !important;\n  margin: 0 !important;\n  min-width: 24px !important;\n  padding: 0 !important;\n  text-align: center !important;\n  width: 24px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-left-column {\n  background: #fff !important;\n  border-radius: 8px !important;\n  box-sizing: border-box !important;\n  margin: 0 32px 32px !important;\n  padding: 24px !important;\n  text-align: center !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-estimate {\n  background: transparent !important;\n  border-radius: 0 !important;\n  box-sizing: border-box !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  text-align: center !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-footnote {\n  display: block !important;\n  font-size: 11px !important;\n  line-height: 1.3 !important;\n  margin: 18px 0 0 !important;\n  padding: 0 !important;\n  text-align: left !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-total,\nhtml.optly-hp-care-complete [data-testid=\"HP Care Complete-total\"] {\n  background: none !important;\n  background-clip: border-box !important;\n  color: var(--optly-hp-blue) !important;\n  -webkit-background-clip: border-box !important;\n  -webkit-text-fill-color: var(--optly-hp-blue) !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan-card {\n  border-top: 1px solid #ddd !important;\n  margin-top: 18px !important;\n  padding: 18px 0 0 !important;\n  text-align: left !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-eyebrow {\n  color: #36393d !important;\n  font-size: 13px !important;\n  line-height: 1.25 !important;\n  margin: 0 0 2px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan {\n  color: #0f1114 !important;\n  font-size: 16px !important;\n  line-height: 1.2 !important;\n  margin: 0 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan strong {\n  color: #0f1114 !important;\n  font-weight: 700 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan [data-optly-hp-plan-price] {\n  color: #0f1114 !important;\n  font-size: 13px !important;\n  font-weight: 400 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-summary {\n  color: #555 !important;\n  font-size: 14px !important;\n  margin: 0 0 16px !important;\n}\n\n\nhtml.optly-hp-care-complete .optly-hp-review-card [class*=\"Comment\"] {\n  height: unset !important;\n}\n\n@media (min-width: 1024px) {\n  html.optly-hp-care-complete [data-testid=\"calculator\"] .innerContainer {\n    grid-template-columns: minmax(0, 534px) minmax(0, 627px) !important;\n    grid-template-rows: 268px 201px !important;\n    justify-content: center !important;\n    margin: 0 auto !important;\n    max-width: 1346px !important;\n    padding: 56px 72px 32px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-full-header {\n    grid-column: 1 !important;\n    grid-row: 1 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-grid {\n    align-self: end !important;\n    grid-column: 1 / -1 !important;\n    grid-row: 2 !important;\n    margin-top: 0 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-left-column {\n    grid-column: 2 !important;\n    grid-row: 1 !important;\n    height: 268px !important;\n    margin: 0 !important;\n    padding: 24px 35px 32px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-estimate {\n    display: block !important;\n    text-align: center !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-summary {\n    display: none !important;\n  }\n}\n\n@media (max-width: 1023px) {\n  html.optly-hp-care-complete header .optly-hp-header-signin,\n  html.optly-hp-care-complete header .optly-hp-claims-button,\n  html.optly-hp-care-complete .optly-hp-claims-button,\n  html.optly-hp-care-complete .optly-hp-header-signup {\n    height: 36px !important;\n    min-width: 88px !important;\n    padding: 0 16px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-claims-button,\n  html.optly-hp-care-complete .optly-hp-header-signup {\n    margin-left: 8px !important;\n  }\n\n  html.optly-hp-care-complete [data-testid=\"calculator\"] .innerContainer {\n    gap: 20px !important;\n    grid-template-rows: auto auto auto !important;\n    padding: 24px 16px !important;\n    width: 100% !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-full-header {\n    margin: 0 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-grid {\n    grid-auto-columns: 146px !important;\n    grid-template-columns: none !important;\n    padding: 0 0 14px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-left-column {\n    margin: 0 !important;\n    padding: 20px 16px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-estimate {\n    margin: 0 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-signup {\n    background: #0c0e11 !important;\n    border-color: #0c0e11 !important;\n    border-radius: 999px !important;\n    height: 40px !important;\n    min-width: 0 !important;\n    width: 100% !important;\n  }\n}\n\n/* Merged hero: hide the native CMS list until it is stable, then hand off. */\nhtml.optly-hp-hero-pending #content-block [class*=\"RichTextWrapper\"] {\n  display: none !important;\n}\n\nhtml.optly-hp-hero-pending #hero-cta-container {\n  margin-top: var(--optly-hp-hero-gap, 160px) !important;\n}\n\n/* Hero typography: native list plus the body portal overlay. */\nhtml.optly-hp-care-complete #content-block [class*=\"RichTextWrapper\"] ul,\nhtml.optly-hp-care-complete #content-block .optly-hp-hero-bullets ul,\nhtml.optly-hp-care-complete body > .optly-hp-hero-bullets ul {\n  margin: 0 !important;\n  padding-left: 24px !important;\n  list-style: disc !important;\n}\n\nhtml.optly-hp-care-complete #content-block [class*=\"RichTextWrapper\"] li,\nhtml.optly-hp-care-complete #content-block .optly-hp-hero-bullets li,\nhtml.optly-hp-care-complete body > .optly-hp-hero-bullets li {\n  padding: 4px 0 !important;\n  margin: 0 !important;\n}\n\nhtml.optly-hp-care-complete #content-block [class*=\"RichTextWrapper\"] li p,\nhtml.optly-hp-care-complete #content-block .optly-hp-hero-bullets li p,\nhtml.optly-hp-care-complete body > .optly-hp-hero-bullets li p {\n  font-size: 18px !important;\n  line-height: 1.3 !important;\n  font-weight: 400 !important;\n  margin: 0 !important;\n}\n\nhtml.optly-hp-care-complete body > .optly-hp-hero-bullets {\n  margin: 0 !important;\n  padding: 0 !important;\n  pointer-events: none !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete #content-block button.aui-action-flat[aria-label*=\"expanded plan options\"] {\n  font-size: 16px !important;\n  line-height: 1.5 !important;\n  padding: 8px 0 !important;\n}\n\nhtml.optly-hp-care-complete #content-block button.aui-action-flat[aria-label*=\"expanded plan options\"] span {\n  font-size: 16px !important;\n  line-height: 1.5 !important;\n  font-weight: 400 !important;\n  text-decoration: underline !important;\n}\n\nhtml.optly-hp-care-complete #content-block [class*=\"SubHeadline\"] {\n  font-size: 20px !important;\n  line-height: 1.3 !important;\n  margin-top: 0 !important;\n}\n\nhtml.optly-hp-care-complete #hero-cta-container {\n  gap: 24px !important;\n}\n\n@media (min-width: 1024px) {\n  html.optly-hp-care-complete #content-block h1 {\n    font-size: 48px !important;\n    line-height: 1.1 !important;\n    font-weight: 700 !important;\n  }\n}</style>"}, {"dependencies": [], "id": "65e5bfdd-24ff-4ab2-ac5a-301af02a8669", "type": "custom_code", "value": function($){(function () {
  const RUNTIME_KEY = '__optlyHpCareCompleteMergedRuntime';
  const existingRuntime = window[RUNTIME_KEY];

  if (existingRuntime && existingRuntime.scheduleApply) {
    if (existingRuntime.rewatch) existingRuntime.rewatch();
    existingRuntime.scheduleApply(0);
    return;
  }

  if (existingRuntime && existingRuntime.active) return;

  const runtime = window[RUNTIME_KEY] = { active: true };

  const CONFIG = {
    pagePaths: [
      '/program/hp-care-complete',
      '/program/hp-care-complete/',
      '/program/hp-care-complete-plp',
      '/program/hp-care-complete-plp/'
    ],
    plpPagePaths: [
      '/program/hp-care-complete-plp',
      '/program/hp-care-complete-plp/'
    ],
    rootClass: 'optly-hp-care-complete',
    heroPendingClass: 'optly-hp-hero-pending',
    heroPagePaths: [
      '/program/hp-care-complete',
      '/program/hp-care-complete/'
    ],
    heroItems: [
      'Cover 1 HP computer and select PC accessories',
      '$0 repairs and hassle-free replacements',
      'Live tech support from HP experts',
      '$0 laptop cleanings and PC tune-ups',
      'No hidden fees, cancel anytime'
    ],
    claimsHref: '/claims/hp-care-complete/',
    signupHref: '/cart/hpcare/purchase/create?plan=HPBASE',
    selectors: {
      header: 'header',
      headerPrimaryButton: 'header [data-testid="primary-button"]',
      planRoot: '#plancards',
      planCard: '#plancards [class*="PlanCardContainer"]',
      planInner: '[class*="InnerContainer"]',
      planHeader: '[class*="Header"]',
      planActions: '[class*="ActionsContainer"]',
      calculator: '[data-testid="calculator"], #atc-calculator',
      calculatorTotal: '[data-testid="HP Care Complete-total"]',
      calcBlock: '[data-testid="calc-block"]',
      calcFullHeader: '[class*="CalculatorFullWidthHeader"]',
      calcGrid: '[class*="CalculatorGrid"]',
      calcLeftColumn: '[class*="CalculatorLeftColumn"]',
      calcLeftHeader: '[class*="CalculatorLeftColumnHeader"]',
      calcEstimateBlock: '[class*="CalculatorEstimateBlock"]',
      sectionPill: '.HeaderTag__Container-sc-466e89d9-0',
      reviewCard: '[data-testid="commentcard"]'
    },
    planMap: {
      individual: {
        label: 'HP Care Complete Individual',
        price: '$6.99/monthly + tax',
        selectorText: /for just you|individual/i
      },
      family: {
        label: 'HP Care Complete Family',
        price: '$17.99/monthly + tax',
        selectorText: /for more of your tech|for your household|family/i
      },
      wholeHome: {
        label: 'HP Care Complete Whole Home',
        price: '$24.99/monthly + tax',
        selectorText: /for nearly everything|for your connected home|whole home/i
      }
    }
  };

  const state = Object.assign(runtime, {
    documentObserver: null,
    calculatorObserver: null,
    resizeListener: false,
    scheduled: false,
    hydrated: false,
    headerRaf: null,
    updatingHeader: false,
    reactRootChild: null,
    plpHydrationArmed: false,
    hero: {
      injectedList: null,
      nativeStableSince: 0,
      nativeFingerprint: '',
      recheckTimer: null,
      pumpRaf: null,
      positionRaf: null,
      pumping: false,
      handedOff: false
    }
  });

  function isTargetPage() {
    return CONFIG.pagePaths.indexOf(window.location.pathname) !== -1;
  }

  function isPlpPage() {
    return CONFIG.plpPagePaths.indexOf(window.location.pathname) !== -1;
  }

  function isHeroPage() {
    return CONFIG.heroPagePaths.indexOf(window.location.pathname) !== -1;
  }

  function text(el) {
    return (el && (el.innerText || el.textContent) || '').replace(/\s+/g, ' ').trim();
  }

  function setImportant(el, styles) {
    if (!el) return;
    Object.keys(styles).forEach((prop) => {
      if (styles[prop] == null) return;
      if (el.style.getPropertyValue(prop) === styles[prop] && el.style.getPropertyPriority(prop) === 'important') return;
      el.style.setProperty(prop, styles[prop], 'important');
    });
  }

  function setText(el, value) {
    if (!el || el.textContent === value) return;
    el.textContent = value;
  }

  function scheduleApply(delay) {
    if (state.scheduled) return;
    state.scheduled = true;
    window.setTimeout(() => {
      state.scheduled = false;
      applyChanges();
    }, delay || 100);
  }

  state.scheduleApply = scheduleApply;

  function addRootClass() {
    const root = document.documentElement;
    if (!root || !root.classList) return;
    root.classList.toggle(CONFIG.rootClass, isTargetPage());
  }

  function paintHeaderSurface(header) {
    if (!header) return;
    setImportant(header, {
      background: '#fff',
      'background-color': '#fff',
      color: '#0f1114',
      'z-index': '40'
    });
  }

  function noteReactRecook() {
    const root = document.getElementById('root');
    if (!root) return;
    const child = root.firstElementChild;
    if (!child) return;
    if (state.reactRootChild && child !== state.reactRootChild) {
      state.hydrated = true;
    }
    state.reactRootChild = child;
  }

  function armPlpHydration() {
    if (isHeroPage() || state.hydrated || state.plpHydrationArmed) return;
    state.plpHydrationArmed = true;
    const finish = () => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          if (isHeroPage() || state.hydrated) return;
          state.hydrated = true;
          applyChanges();
        });
      });
    };
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
  }

  function isHydrated() {
    if (state.hydrated) return true;
    noteReactRecook();
    if (findNativeHeroList()) {
      state.hydrated = true;
      return true;
    }
    return false;
  }

  function isLocallyDisplayed(el) {
    if (!el) return false;
    let node = el;
    while (node && node.nodeType === 1) {
      if (node.tagName === 'HEADER') break;
      const style = window.getComputedStyle(node);
      if (style.display === 'none') return false;
      node = node.parentElement;
    }
    return true;
  }

  function getSignInAction(header) {
    const actions = Array.from(header.querySelectorAll('a, button')).filter((el) => (
      !el.closest('.optly-hp-claims-button')
      && !el.classList.contains('optly-hp-header-signup')
      && /sign in/i.test(text(el) + ' ' + (el.getAttribute('aria-label') || ''))
    ));
    return actions.find(isLocallyDisplayed) || actions[0] || null;
  }

  function getClaimsInsertionTarget(signInAction) {
    if (!signInAction) return null;
    const action = signInAction.closest('[data-testid="primary-button"]') || signInAction;
    const parent = action.parentElement;
    if (!parent || parent.tagName === 'HEADER') return action;
    return parent;
  }

  function removeStaleHeaderPortals() {
    document.querySelectorAll('body > .optly-hp-header-actions-portal').forEach((el) => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
  }

  function applyFilledHeaderCta(cta) {
    setImportant(cta, {
      background: '#000',
      'background-color': '#000',
      border: '1px solid #000',
      color: '#fff',
      display: 'inline-flex'
    });
  }

  function paintHeaderLink(cta, className, href, label) {
    if (!cta) return;
    cta.classList.add(className);
    if (cta.getAttribute('href') !== href) cta.setAttribute('href', href);
    if (cta.getAttribute('aria-label') !== label) cta.setAttribute('aria-label', label);
    setText(cta, label);
    applyFilledHeaderCta(cta);
  }

  function updateHeaderPlpSignup(header) {
    header.querySelectorAll('.optly-hp-claims-button').forEach((el) => el.remove());

    const signInActions = Array.from(header.querySelectorAll('a, button')).filter((el) => (
      !el.classList.contains('optly-hp-header-signup')
      && /sign in/i.test(text(el) + ' ' + (el.getAttribute('aria-label') || ''))
    ));

    if (signInActions.length === 0) {
      let cta = header.querySelector('.optly-hp-header-signup');
      if (!cta) {
        cta = document.createElement('a');
        header.appendChild(cta);
      }
      paintHeaderLink(cta, 'optly-hp-header-signup', CONFIG.signupHref, 'Sign up');
      return;
    }

    signInActions.forEach((signInAction) => {
      let cta = signInAction.previousElementSibling;
      if (!cta || !cta.classList.contains('optly-hp-header-signup')) {
        cta = document.createElement('a');
        signInAction.insertAdjacentElement('beforebegin', cta);
      }
      paintHeaderLink(cta, 'optly-hp-header-signup', CONFIG.signupHref, 'Sign up');
      setImportant(signInAction, { display: 'none' });
      if (signInAction.getAttribute('aria-hidden') !== 'true') {
        signInAction.setAttribute('aria-hidden', 'true');
      }
    });
  }

  function updateHeaderClaimsCta() {
    if (state.updatingHeader) return;
    state.updatingHeader = true;
    try {
      removeStaleHeaderPortals();

      const header = document.querySelector(CONFIG.selectors.header);
      if (!header) return;

      if (isPlpPage()) {
        updateHeaderPlpSignup(header);
        return;
      }

      paintHeaderSurface(header);

      const signInAction = getSignInAction(header);
      if (signInAction) signInAction.classList.add('optly-hp-header-signin');

      const claimsButtons = Array.from(header.querySelectorAll('.optly-hp-claims-button'));
      let cta = claimsButtons[0] || null;
      const existingClaimLink = Array.from(header.querySelectorAll('a, button')).find((el) => (
        el !== cta
        && !el.classList.contains('optly-hp-header-signup')
        && /claim/i.test(text(el) + ' ' + (el.getAttribute('href') || '') + ' ' + (el.getAttribute('aria-label') || ''))
      ));

      if (!cta && existingClaimLink && existingClaimLink.tagName.toLowerCase() === 'a') {
        cta = existingClaimLink;
      }

      const insertionTarget = getClaimsInsertionTarget(signInAction)
        || document.querySelector(CONFIG.selectors.headerPrimaryButton)
        || header;

      if (!cta) {
        cta = document.createElement('a');
        if (insertionTarget === header) header.appendChild(cta);
        else insertionTarget.insertAdjacentElement('afterend', cta);
      } else if (insertionTarget !== header && cta.previousElementSibling !== insertionTarget) {
        insertionTarget.insertAdjacentElement('afterend', cta);
      }

      claimsButtons.forEach((el) => {
        if (el !== cta && el.parentNode) el.parentNode.removeChild(el);
      });

      cta.classList.add('optly-hp-claims-button');
      if (cta.getAttribute('href') !== CONFIG.claimsHref) cta.setAttribute('href', CONFIG.claimsHref);
      if (cta.getAttribute('aria-label') !== 'Claims') cta.setAttribute('aria-label', 'Claims');
      if (cta.textContent !== 'Claims') cta.textContent = 'Claims';
    } finally {
      Promise.resolve().then(() => {
        state.updatingHeader = false;
      });
    }
  }

  function markPlanCards() {
    // V2 intentionally leaves plan cards untagged so legacy card CSS cannot reapply.
  }

  function markSectionPills() {
    document.querySelectorAll(CONFIG.selectors.sectionPill).forEach((pill) => {
      pill.classList.add('optly-hp-section-pill');
    });
  }

  function markReviews() {
    document.querySelectorAll(CONFIG.selectors.reviewCard).forEach((card) => {
      card.classList.add('optly-hp-review-card');
    });
  }

  function wrapCalculator(calc) {
    if (!calc || calc.querySelector(':scope > .innerContainer')) return;

    const container = document.createElement('div');
    container.className = 'innerContainer optly-hp-calc-inner';
    Array.from(calc.classList).forEach((className) => container.classList.add(className));
    calc.className = '';

    while (calc.firstChild) {
      container.appendChild(calc.firstChild);
    }
    calc.appendChild(container);
  }

  function getCalculatorItems(calc) {
    return Array.from(calc.querySelectorAll('input')).map((input) => {
      const rawName = input.id || input.name || input.getAttribute('data-testid') || '';
      const value = Math.max(0, parseInt(input.value, 10) || 0);
      const block = input.closest(CONFIG.selectors.calcBlock);
      const normalized = `${rawName} ${text(block)}`.toLowerCase();
      let deviceType = 'other';

      if (normalized.includes('laptop') || normalized.includes('desktop')) {
        deviceType = 'computer';
      } else if (normalized.includes('monitor')) {
        deviceType = 'monitor';
      } else if (normalized.includes('printer')) {
        deviceType = 'printer';
      } else if (normalized.includes('headphone')) {
        deviceType = 'headphone';
      }

      return { input, rawName, value, deviceType };
    });
  }

  function getPlanTier(items) {
    const computerCount = items
      .filter((item) => item.deviceType === 'computer')
      .reduce((sum, item) => sum + item.value, 0);
    const peripheralCounts = ['monitor', 'printer', 'headphone'].map((deviceType) => (
      items
        .filter((item) => item.deviceType === deviceType)
        .reduce((sum, item) => sum + item.value, 0)
    ));
    const hasUnsupportedSelected = items.some((item) => item.deviceType === 'other' && item.value >= 1);
    const peripheralLimit = computerCount <= 1 ? 1 : computerCount;
    const exceedsPeripheralLimit = peripheralCounts.some((count) => count > peripheralLimit);

    if (hasUnsupportedSelected || exceedsPeripheralLimit) return 'wholeHome';
    if (computerCount <= 1) return 'individual';
    if (computerCount <= 3) return 'family';
    return 'wholeHome';
  }

  function getPlanButton(tier) {
    const config = CONFIG.planMap[tier] || CONFIG.planMap.individual;
    const cards = Array.from(document.querySelectorAll(CONFIG.selectors.planCard));
    const card = cards.find((candidate) => config.selectorText.test(text(candidate)));
    return card && Array.from(card.querySelectorAll('button, a')).find((el) => /sign up/i.test(text(el) + ' ' + (el.getAttribute('aria-label') || '')));
  }

  function ensureRecommendationCard(calc, totalEl) {
    let card = calc.querySelector('.optly-hp-calc-plan-card');
    if (card || !totalEl) return card;

    card = document.createElement('div');
    card.className = 'optly-hp-calc-plan-card';
    card.innerHTML = [
      '<p class="optly-hp-calc-eyebrow">For you, we recommend:</p>',
      '<p class="optly-hp-calc-plan"><strong data-optly-hp-plan-label>HP Care Complete Individual</strong> <span data-optly-hp-plan-price>$6.99/month + tax</span></p>',
      '<p class="optly-hp-calc-summary" data-optly-hp-plan-summary>Select your devices to find the right plan.</p>',
      '<button type="button" class="optly-hp-calc-signup">Sign up</button>'
    ].join('');

    totalEl.insertAdjacentElement('afterend', card);
    card.querySelector('.optly-hp-calc-signup').addEventListener('click', () => {
      const tier = calc.getAttribute('data-optly-hp-plan-tier') || 'individual';
      const planButton = getPlanButton(tier);
      if (planButton) {
        planButton.click();
      } else {
        const planRoot = document.querySelector(CONFIG.selectors.planRoot);
        if (planRoot) planRoot.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    return card;
  }

  function updateCalculatorRecommendation(calc) {
    const totalEl = calc.querySelector(CONFIG.selectors.calculatorTotal);
    if (!totalEl) return;

    const items = getCalculatorItems(calc);
    const tier = getPlanTier(items);
    const plan = CONFIG.planMap[tier] || CONFIG.planMap.individual;
    const selectedDeviceCount = items.reduce((sum, item) => sum + item.value, 0);
    const card = ensureRecommendationCard(calc, totalEl);

    if (calc.getAttribute('data-optly-hp-plan-tier') !== tier) {
      calc.setAttribute('data-optly-hp-plan-tier', tier);
    }
    totalEl.classList.add('optly-hp-calc-total');

    if (!card) return;
    const label = card.querySelector('[data-optly-hp-plan-label]');
    const price = card.querySelector('[data-optly-hp-plan-price]');
    const summary = card.querySelector('[data-optly-hp-plan-summary]');

    setText(label, plan.label);
    setText(price, plan.price);
    if (summary) {
      setText(summary, tier === 'wholeHome'
        ? 'Whole Home covers laptops, desktops, and eligible home tech.'
        : selectedDeviceCount === 0
          ? 'No devices are selected yet.'
          : `${selectedDeviceCount} eligible ${selectedDeviceCount === 1 ? 'device is' : 'devices are'} selected.`);
    }
  }

  function normalizeCalculatorStructure(calc, pieces) {
    const inner = calc && calc.querySelector(':scope > .innerContainer');
    if (!inner) return;

    [pieces.fullHeader, pieces.leftColumn, pieces.grid].forEach((piece) => {
      if (piece && piece.parentElement !== inner) {
        inner.appendChild(piece);
      }
    });

    const promoted = [pieces.fullHeader, pieces.leftColumn, pieces.grid].filter(Boolean);
    Array.from(inner.children).forEach((child) => {
      if (!promoted.includes(child)) {
        child.classList.add('optly-hp-calc-layout-pass-through');
        setImportant(child, {
          display: 'contents'
        });
      }
    });
  }

  function applyCalculatorLayout(calc, pieces) {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    const inner = calc.querySelector(':scope > .innerContainer');

    setImportant(calc, {
      'box-sizing': 'border-box',
      display: 'grid',
      'max-width': '100%',
      padding: '32px 0 0'
    });

    setImportant(inner, {
      background: '#faf9fc',
      'border-radius': '16px',
      'box-sizing': 'border-box',
      display: 'grid',
      gap: isDesktop ? '56px 41px' : '20px',
      margin: isDesktop ? '0 auto' : '0',
      'max-width': isDesktop ? '1346px' : '100%',
      width: '100%',
      padding: isDesktop ? '56px 72px 32px' : '24px 16px',
      'grid-template-columns': isDesktop ? 'minmax(0, 534px) minmax(0, 627px)' : '1fr',
      'grid-template-rows': isDesktop ? '268px 201px' : 'auto auto auto',
      'justify-content': isDesktop ? 'center' : 'stretch'
    });

    setImportant(pieces.fullHeader, {
      'box-sizing': 'border-box',
      display: 'block',
      'grid-column': isDesktop ? '1' : '1 / -1',
      'grid-row': '1',
      'align-self': isDesktop ? 'center' : 'auto',
      height: isDesktop ? '167px' : 'auto',
      'min-height': '0',
      'max-height': isDesktop ? '167px' : 'none',
      margin: '0',
      padding: '0',
      'text-align': 'left'
    });

    if (pieces.fullHeader) {
      const headerText = pieces.fullHeader.querySelector('[class*="CalculatorHeaderText"]') || pieces.fullHeader.firstElementChild;
      const subheaderText = pieces.fullHeader.querySelector('[class*="CalculatorSubheaderText"]') || pieces.fullHeader.children[1];

      setImportant(headerText, {
        margin: isDesktop ? '0 0 12px' : '0 0 10px',
        padding: '0',
        'font-size': isDesktop ? '48px' : '24px',
        'line-height': isDesktop ? '1' : '1.08'
      });

      setImportant(subheaderText, {
        margin: '0',
        padding: '0',
        'font-size': isDesktop ? '16px' : '12px',
        'line-height': isDesktop ? '1.35' : '1.35',
        'max-width': isDesktop ? '560px' : '100%'
      });

      setImportant(pieces.fullHeader.children[2], {
        margin: isDesktop ? '18px 0 0' : '12px 0 0',
        padding: '0',
        'font-size': isDesktop ? '11px' : '7px',
        'line-height': '1.35'
      });
    }

    setImportant(pieces.leftHeader, {
      display: 'none'
    });

    setImportant(pieces.grid, {
      'box-sizing': 'border-box',
      display: 'grid',
      gap: '18px',
      'grid-auto-flow': 'column',
      'grid-auto-columns': '146px',
      'grid-template-columns': 'none',
      'grid-column': isDesktop ? '1 / -1' : '1',
      'grid-row': '2',
      'align-self': isDesktop ? 'end' : 'auto',
      height: isDesktop ? '201px' : 'auto',
      margin: '0',
      overflow: 'auto hidden',
      'overflow-x': 'auto',
      padding: isDesktop ? '0 0 16px' : '0 0 14px',
      'scroll-snap-type': 'x proximity'
    });

    setImportant(pieces.leftColumn, {
      background: '#fff',
      'border-radius': '8px',
      'box-sizing': 'border-box',
      'box-shadow': isDesktop ? '0 2px 8px rgba(15, 17, 20, 0.08)' : 'none',
      'grid-column': isDesktop ? '2' : '1',
      'grid-row': isDesktop ? '1' : '3',
      height: isDesktop ? '268px' : 'auto',
      margin: '0',
      padding: isDesktop ? '24px 35px 32px' : '20px 16px',
      overflow: 'hidden',
      'text-align': 'center'
    });

    setImportant(pieces.estimateBlock, {
      background: 'transparent',
      'border-radius': '0',
      'box-sizing': 'border-box',
      display: 'block',
      margin: '0',
      padding: '0',
      'text-align': 'center'
    });

    if (pieces.estimateBlock) {
      const total = pieces.estimateBlock.querySelector(CONFIG.selectors.calculatorTotal);
      const label = pieces.estimateBlock.querySelector('[data-optly-hp-plan-label]');
      const price = pieces.estimateBlock.querySelector('[data-optly-hp-plan-price]');
      const summary = pieces.estimateBlock.querySelector('[data-optly-hp-plan-summary]');
      const signup = pieces.estimateBlock.querySelector('.optly-hp-calc-signup');
      const planCard = pieces.estimateBlock.querySelector('.optly-hp-calc-plan-card');

      setImportant(total, {
        background: 'none',
        'background-clip': 'border-box',
        color: 'var(--optly-hp-blue)',
        margin: '0 0 4px',
        padding: '0',
        'font-size': isDesktop ? '50px' : '30px',
        'line-height': '1.1',
        'font-weight': '700',
        'text-align': 'center',
        '-webkit-background-clip': 'border-box',
        '-webkit-text-fill-color': 'var(--optly-hp-blue)'
      });

      setImportant(planCard, {
        'box-sizing': 'border-box',
        margin: isDesktop ? '18px 0 0' : '16px 0 0',
        padding: isDesktop ? '18px 0 0' : '14px 0 0',
        'border-top': '1px solid #ddd',
        'border-left': '0',
        'text-align': 'left'
      });

      setImportant(label, {
        display: 'inline',
        'font-size': isDesktop ? '16px' : '12px',
        'line-height': '1.2',
        margin: '0',
        color: '#0f1114'
      });

      setImportant(price, {
        display: 'inline',
        'font-size': isDesktop ? '13px' : '10px',
        'line-height': '1.2',
        color: '#0f1114',
        'font-weight': '400'
      });

      setImportant(summary, {
        display: isDesktop ? 'none' : 'block',
        'font-size': isDesktop ? '10px' : '9px',
        'line-height': '1.25',
        margin: '0 0 10px'
      });

      setImportant(signup, {
        background: '#0c0e11',
        'background-color': '#0c0e11',
        border: '1px solid #0c0e11',
        'border-radius': '999px',
        color: '#fff',
        display: 'inline-flex',
        'align-items': 'center',
        height: '40px',
        'justify-content': 'center',
        'line-height': '1',
        'min-width': isDesktop ? '120px' : '0',
        width: isDesktop ? 'auto' : '100%',
        padding: '0 24px',
        margin: '8px 0 0',
        'text-align': 'center',
        'vertical-align': 'middle'
      });
    }

    if (pieces.leftColumn || pieces.fullHeader) {
      const footnoteSources = [
        pieces.leftColumn,
        pieces.fullHeader
      ].filter(Boolean);
      const footnote = footnoteSources.reduce((match, source) => (
        match || Array.from(source.children).find((child) => /total device value/i.test(text(child)))
      ), null);

      if (footnote) {
        footnote.classList.add('optly-hp-calc-footnote');
        if (pieces.fullHeader && footnote.parentElement !== pieces.fullHeader) {
          pieces.fullHeader.appendChild(footnote);
        }
        setImportant(footnote, {
          display: 'block',
          margin: isDesktop ? '18px 0 0' : '12px 0 0',
          padding: '0',
          'font-size': isDesktop ? '11px' : '7px',
          'line-height': '1.3'
        });
      }
    }
  }

  function applyCalculatorBlockLayout(block) {
    const content = block.querySelector('[class*="CalculatorBlockContent"]');
    const imageWrapper = block.querySelector('[class*="CalculatorBlockImageWrapper"]');
    const picture = block.querySelector('picture');
    const img = block.querySelector('img');
    const label = block.querySelector('[class*="CalculatorBlockLabel"]');
    const controls = block.querySelector('[class*="CalculatorBlockControlWrapper"]');
    const valueInput = controls && controls.querySelector('input');

    setImportant(block, {
      background: '#fff',
      border: '1.8px solid #eeedf1',
      'border-radius': '7px',
      'box-sizing': 'border-box',
      width: '146px',
      'min-width': '146px',
      height: '185px',
      'min-height': '185px',
      'max-height': '185px',
      'max-width': '146px',
      overflow: 'hidden',
      'scroll-snap-align': 'start'
    });

    setImportant(content, {
      display: 'flex',
      'flex-direction': 'column',
      height: '140px',
      padding: '0',
      margin: '0'
    });

    setImportant(imageWrapper, {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      height: '92px',
      width: '100%',
      padding: '8px 0 0',
      margin: '0'
    });

    setImportant(picture, {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      height: '72px',
      width: '100%',
      margin: '0 auto'
    });

    setImportant(img, {
      'max-height': '64px',
      'max-width': '86px',
      width: 'auto',
      height: 'auto',
      'object-fit': 'contain'
    });

    setImportant(label, {
      'font-size': '12px',
      'line-height': '1.2',
      margin: '0',
      padding: '0 8px',
      'min-height': '30px',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'text-align': 'center'
    });

    setImportant(controls, {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      gap: '8px',
      'box-sizing': 'border-box',
      height: '31px',
      width: 'auto',
      'max-width': '110px',
      margin: '6px auto 8px',
      padding: '0'
    });

    setImportant(valueInput, {
      background: 'transparent',
      'background-color': 'transparent',
      border: '0',
      'border-radius': '0',
      'box-sizing': 'border-box',
      color: '#0c0e11',
      'font-size': '16px',
      'font-weight': '700',
      height: '31px',
      'line-height': '31px',
      margin: '0',
      padding: '0',
      'text-align': 'center',
      width: '24px',
      'min-width': '24px'
    });
  }

  function initCalculator() {
    const calc = document.querySelector(CONFIG.selectors.calculator);
    if (!calc) return;

    if (calc.getAttribute('data-atc-calc') !== 'main') {
      calc.setAttribute('data-atc-calc', 'main');
    }
    wrapCalculator(calc);
    calc.classList.add('optly-hp-calculator');

    const fullHeader = calc.querySelector(CONFIG.selectors.calcFullHeader);
    const grid = calc.querySelector(CONFIG.selectors.calcGrid);
    const leftColumn = calc.querySelector(CONFIG.selectors.calcLeftColumn);
    const leftHeader = calc.querySelector(CONFIG.selectors.calcLeftHeader);
    const estimateBlock = calc.querySelector(CONFIG.selectors.calcEstimateBlock);

    if (fullHeader) fullHeader.classList.add('optly-hp-calc-full-header');
    if (grid) grid.classList.add('optly-hp-calc-grid');
    if (leftColumn) leftColumn.classList.add('optly-hp-calc-left-column');
    if (leftHeader) leftHeader.classList.add('optly-hp-calc-left-header');
    if (estimateBlock) estimateBlock.classList.add('optly-hp-calc-estimate');

    normalizeCalculatorStructure(calc, {
      fullHeader,
      grid,
      leftColumn,
      leftHeader,
      estimateBlock
    });

    applyCalculatorLayout(calc, {
      fullHeader,
      grid,
      leftColumn,
      leftHeader,
      estimateBlock
    });

    calc.querySelectorAll(CONFIG.selectors.calcBlock).forEach((block) => {
      block.classList.add('optly-hp-calc-block');
      applyCalculatorBlockLayout(block);
    });

    updateCalculatorRecommendation(calc);

    if (!calc.dataset.optlyHpListeners) {
      calc.addEventListener('input', () => scheduleApply(50), true);
      calc.addEventListener('change', () => scheduleApply(50), true);
      calc.addEventListener('click', () => scheduleApply(150), true);
      calc.dataset.optlyHpListeners = 'true';
    }

    if (!state.calculatorObserver) {
      state.calculatorObserver = new MutationObserver(() => scheduleApply(50));
      state.calculatorObserver.observe(calc, { childList: true, characterData: true, subtree: true, attributes: true, attributeFilter: ['value', 'aria-label', 'disabled'] });
    }
  }

  function normalizeHeroText(value) {
    return (value || '').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function nativeListFingerprint(ul) {
    return normalizeHeroText(ul && ul.textContent);
  }

  function nativeListHasExpectedItems(ul) {
    const haystack = nativeListFingerprint(ul);
    if (!haystack) return false;
    return CONFIG.heroItems.every((item) => haystack.indexOf(normalizeHeroText(item)) !== -1);
  }

  function findNativeHeroList() {
    const block = document.querySelector('#content-block');
    if (!block) return null;
    const lists = Array.from(block.querySelectorAll('[class*="RichTextWrapper"] ul'));
    for (let i = 0; i < lists.length; i++) {
      const ul = lists[i];
      if (ul.closest('.optly-hp-hero-bullets')) continue;
      if (nativeListHasExpectedItems(ul)) return ul;
    }
    return null;
  }

  function createInjectedHeroList() {
    const wrap = document.createElement('div');
    wrap.className = 'optly-hp-hero-bullets';
    wrap.setAttribute('data-optly-hp-hero-portal', 'true');
    const ul = document.createElement('ul');
    CONFIG.heroItems.forEach((item) => {
      const li = document.createElement('li');
      const p = document.createElement('p');
      p.textContent = item;
      li.appendChild(p);
      ul.appendChild(li);
    });
    wrap.appendChild(ul);
    return wrap;
  }

  function connectedInjectedList() {
    return (state.hero.injectedList && state.hero.injectedList.isConnected) ? state.hero.injectedList : null;
  }

  function positionHeroPortal(list) {
    const block = document.querySelector('#content-block');
    if (!list || !block) return;

    const sub = block.querySelector('[class*="SubHeadline"]')
      || (block.querySelector('h1') && block.querySelector('h1').nextElementSibling);
    const ref = sub || block.querySelector('h1') || block;
    const refRect = ref.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft || 0;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

    list.style.position = 'absolute';
    list.style.left = Math.round(refRect.left + scrollX) + 'px';
    list.style.top = Math.round(refRect.bottom + scrollY + 8) + 'px';
    list.style.width = Math.round(Math.max(refRect.width, 240)) + 'px';
    list.style.zIndex = '3';
    list.style.boxSizing = 'border-box';
    list.style.pointerEvents = 'none';
    list.style.margin = '0';
    list.style.padding = '0';

    const gap = Math.max(list.offsetHeight + 16, 48);
    document.documentElement.style.setProperty('--optly-hp-hero-gap', gap + 'px');
  }

  function insertHeroPortal() {
    const list = (state.hero.injectedList && state.hero.injectedList.nodeType === 1)
      ? state.hero.injectedList
      : createInjectedHeroList();
    state.hero.injectedList = list;
    if (list.parentNode && list.parentNode !== document.body) {
      list.parentNode.removeChild(list);
    }
    if (list.parentNode !== document.body && document.body) {
      document.body.appendChild(list);
    }
    positionHeroPortal(list);
    if (!state.hero.positionRaf) {
      state.hero.positionRaf = window.requestAnimationFrame(() => {
        state.hero.positionRaf = null;
        if (state.hero.injectedList && !state.hero.handedOff) {
          positionHeroPortal(state.hero.injectedList);
        }
      });
    }
  }

  function resetHero() {
    if (state.hero.recheckTimer) {
      window.clearTimeout(state.hero.recheckTimer);
      state.hero.recheckTimer = null;
    }
    if (state.hero.pumpRaf) {
      window.cancelAnimationFrame(state.hero.pumpRaf);
      state.hero.pumpRaf = null;
    }
    if (state.hero.positionRaf) {
      window.cancelAnimationFrame(state.hero.positionRaf);
      state.hero.positionRaf = null;
    }
    state.hero.pumping = false;
    const list = state.hero.injectedList;
    if (list && list.parentNode) list.parentNode.removeChild(list);
    const root = document.documentElement;
    if (root && root.classList) root.classList.remove(CONFIG.heroPendingClass);
    if (root && root.style) root.style.removeProperty('--optly-hp-hero-gap');
    state.hero.injectedList = null;
    state.hero.nativeStableSince = 0;
    state.hero.nativeFingerprint = '';
    state.hero.handedOff = false;
  }

  function scheduleHeroRecheck() {
    if (state.hero.recheckTimer || state.hero.handedOff) return;
    state.hero.recheckTimer = window.setTimeout(() => {
      state.hero.recheckTimer = null;
      inspectHeroHandoff();
    }, 250);
  }

  function handoffToNative() {
    if (state.hero.handedOff) return;
    const list = state.hero.injectedList;
    if (list && list.parentNode) list.parentNode.removeChild(list);
    const root = document.documentElement;
    if (root && root.classList) root.classList.remove(CONFIG.heroPendingClass);
    if (root && root.style) root.style.removeProperty('--optly-hp-hero-gap');
    state.hero.injectedList = null;
    state.hero.handedOff = true;
    state.hero.nativeStableSince = 0;
    state.hero.nativeFingerprint = '';
    state.hydrated = true;
  }

  function inspectHeroHandoff() {
    if (state.hero.handedOff || !state.hero.injectedList) return;
    const native = findNativeHeroList();
    if (!native) {
      state.hero.nativeStableSince = 0;
      state.hero.nativeFingerprint = '';
      return;
    }
    const fingerprint = nativeListFingerprint(native);
    const now = Date.now();
    if (fingerprint !== state.hero.nativeFingerprint) {
      state.hero.nativeFingerprint = fingerprint;
      state.hero.nativeStableSince = now;
      scheduleHeroRecheck();
      return;
    }
    if (!state.hero.nativeStableSince) {
      state.hero.nativeStableSince = now;
      scheduleHeroRecheck();
      return;
    }
    if (now - state.hero.nativeStableSince < 250) {
      scheduleHeroRecheck();
      return;
    }
    handoffToNative();
  }

  function startHeroPump() {
    if (state.hero.pumping || state.hero.handedOff) return;
    state.hero.pumping = true;
    function tick() {
      applyHero();
      if (state.hero.handedOff) {
        state.hero.pumping = false;
        state.hero.pumpRaf = null;
        return;
      }
      state.hero.pumpRaf = window.requestAnimationFrame(tick);
    }
    tick();
  }

  function applyHero() {
    if (!isHeroPage()) {
      resetHero();
      return;
    }
    if (state.hero.handedOff) return;

    const root = document.documentElement;
    const block = document.querySelector('#content-block');
    if (!block) {
      startHeroPump();
      return;
    }

    const native = findNativeHeroList();
    const injected = connectedInjectedList();

    if (native && !injected) {
      if (root) root.classList.remove(CONFIG.heroPendingClass);
      if (root && root.style) root.style.removeProperty('--optly-hp-hero-gap');
      state.hero.injectedList = null;
      state.hero.handedOff = true;
      state.hydrated = true;
      return;
    }

    insertHeroPortal();
    if (root) root.classList.add(CONFIG.heroPendingClass);
    inspectHeroHandoff();
  }

  function applyInTreeChanges() {
    updateHeaderClaimsCta();
    markPlanCards();
    markSectionPills();
    markReviews();
    initCalculator();
  }

  function scheduleHeaderRaf() {
    if (state.headerRaf) return;
    state.headerRaf = window.requestAnimationFrame(() => {
      state.headerRaf = null;
      if (!isTargetPage()) return;
      applyHero();
      updateHeaderClaimsCta();
      const list = connectedInjectedList();
      if (list) positionHeroPortal(list);
    });
  }

  function isOwnHeaderEdit(node) {
    if (!node) return false;
    if (node.nodeType !== 1) return isOwnHeaderEdit(node.parentElement);
    if (!node.classList) return false;
    return node.classList.contains('optly-hp-hero-bullets')
      || node.classList.contains('optly-hp-header-signup')
      || node.classList.contains('optly-hp-claims-button');
  }

  function mutationTouchesHeaderOrHero(mutation) {
    if (isOwnHeaderEdit(mutation.target)) return false;

    function interesting(node, allowQuery) {
      if (!node || node.nodeType !== 1) return false;
      if (node.classList && (
        node.classList.contains('optly-hp-hero-bullets')
        || node.classList.contains('optly-hp-header-signup')
        || node.classList.contains('optly-hp-claims-button')
      )) return false;
      if (node.id === 'content-block' || node.id === 'root' || node.tagName === 'HEADER') return true;
      const cls = String(node.className || '');
      if (cls.indexOf('JoyfulLayout') !== -1) return true;
      if (node !== document.body && node !== document.documentElement && node.closest) {
        if (node.closest('header') || node.closest('#content-block')) return true;
      }
      if (allowQuery && node.querySelector && node.tagName !== 'BODY' && node.tagName !== 'HTML') {
        if (node.querySelector('header') || node.querySelector('#content-block')) return true;
      }
      return false;
    }

    if (interesting(mutation.target, false)) return true;
    const lists = [mutation.addedNodes, mutation.removedNodes];
    for (let i = 0; i < lists.length; i++) {
      const list = lists[i];
      if (!list) continue;
      for (let j = 0; j < list.length; j++) {
        if (interesting(list[j], true)) return true;
      }
    }
    return false;
  }

  function applyChanges() {
    addRootClass();
    if (!isTargetPage()) {
      removeStaleHeaderPortals();
      resetHero();
      return;
    }

    if (isHeroPage()) {
      applyHero();
      startHeroPump();
    }
    updateHeaderClaimsCta();
    armPlpHydration();

    if (!isHydrated()) return;
    applyInTreeChanges();
  }

  function watchDocument() {
    const root = document.documentElement || document.body;
    if (!root || typeof root.nodeType !== 'number') return;
    if (state.documentObserver) {
      try { state.documentObserver.disconnect(); } catch (err) {}
    }
    state.documentObserver = new MutationObserver((mutations) => {
      noteReactRecook();
      if (findNativeHeroList()) state.hydrated = true;

      let headerOrHeroChanged = false;
      for (let i = 0; i < mutations.length; i++) {
        if (mutationTouchesHeaderOrHero(mutations[i])) {
          headerOrHeroChanged = true;
          break;
        }
      }

      if (headerOrHeroChanged) {
        updateHeaderClaimsCta();
        applyHero();
        scheduleHeaderRaf();
      }

      if (isHydrated()) scheduleApply(100);
    });
    state.documentObserver.observe(root, { childList: true, subtree: true });
  }

  state.rewatch = watchDocument;

  function watchResize() {
    if (state.resizeListener) return;
    state.resizeListener = true;
    window.addEventListener('resize', () => {
      if (isTargetPage()) updateHeaderClaimsCta();
      const list = connectedInjectedList();
      if (list) positionHeroPortal(list);
      if (state.hydrated) scheduleApply(50);
    }, true);
  }

  function patchHistoryForSpa() {
    ['pushState', 'replaceState'].forEach((fn) => {
      const original = history[fn];
      if (!original || original.__optlyHpPatched) return;
      history[fn] = function () {
        const result = original.apply(this, arguments);
        scheduleApply(0);
        return result;
      };
      history[fn].__optlyHpPatched = true;
    });
    window.addEventListener('popstate', () => scheduleApply(0), true);
  }

  patchHistoryForSpa();
  watchDocument();
  watchResize();
  applyChanges();
})();
}}]}]}], "weightDistributions": null, "name": "/program/hp-care-complete/ - merged personalization + hero", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6033378061844480"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5535356095823872"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "5855662951890944", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "6046533930450944", "name": "/homeplus + sub nav - 2 Step Home+ Flow", "commitId": "6682178294120448", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4995898862731264", "integrationSettings": null, "variations": [{"id": "5937316938645504", "name": "Original", "actions": [{"viewId": "5446940423356416", "changes": []}]}, {"id": "6403273746284544", "name": "Variation #1", "actions": [{"viewId": "5446940423356416", "changes": [{"id": "D4C5C391-2F79-495A-8999-467D649D0792", "type": "custom_code", "value": function($){var flowB = "/home-plus/asurion/steps/personal-info";
var flowA = "/home-plus/asurion/app/personal-info";
document.addEventListener('click', function(event) {
    const target = event.target.closest('a[href]');
    if (target && target.href.indexOf(flowA) > -1) {
        event.preventDefault(); // Prevent the default link behavior
        // Replace the href value or redirect as needed
        window.location.href = target.href.replace(flowA,flowB);
    }
});
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "6403273746284544", "endOfRange": 10000}], "name": "/homeplus + sub nav - 2 Step Home+ Flow", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6046533930450944"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5446940423356416"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6047976313847808", "name": "/dashboard/?mxclient=amazon - My Account - Amazon banner test", "commitId": "6538062220492800", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"google_analytics_4": {}, "28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "5990917136449536"], "audienceName": "MX Client - Amazon", "changes": null, "id": "6107408863330304", "integrationSettings": null, "variations": [{"id": "5319070166286336", "name": "Variation #1", "actions": [{"viewId": "6312680114356224", "changes": [{"id": "12A16AA2-A01E-439E-A37F-D85B86A17E05", "type": "custom_code", "value": function($){// AMZCP My Account upsell - Variation C / PDP creative
// Creative-only update. Keeps the live AUI card and CTA in place.
(function () {
  const OPTLY_ID = 'amzcp-upsell-variation-c';
  const AMAZON_PLAN_URL = 'https://www.amazon.com/stores/page/7AD6ACDA-1207-45D4-8FFB-1A8CED7DC18F?channel=prtl_otp_lupp';

  // Prefer stable app-owned test IDs over generated styled-component classes.
  // These were verified on the logged-in preview dashboard.
  const CARD_SELECTOR = '[data-testid="account-upsell-banner"]';
  const CTA_SELECTOR = '[data-testid="account-upsell-banner-learn-more"]';
  const IMAGE_SLOT_SELECTOR = '[class*="UpsellBannerCard__Image"]';
  const CENTERED_TEXT_SELECTOR = '[data-aui="text"][class*="UpsellBannerCard__CenteredText"]';
  const SUBHEADING_SELECTOR = '[class*="UpsellBannerCard__Subheading"] p';
  const CTA_LABEL_SELECTOR = '[data-aui="action"] > span';

  const TARGET_TEXT = 'Asurion Complete Protect';
  const SUBHEADING_TEXT = 'Cover eligible past and future Amazon purchases in one plan. Start today and get 50% off your first month.';
  const PRICE_TEXT = '$16.99/mo after, plus tax. Cancel anytime.';
  const DESKTOP_IMAGE = 'https://images.ctfassets.net/16nm6vz43ids/5G2RoRhI0onwh2nxi54LIc/5402978427282ab818bb9430ac936f97/acp-variant-a-desktop.png';
  const MOBILE_IMAGE = 'https://images.ctfassets.net/16nm6vz43ids/7tbYfUufGzGeJydXhY2qOH/88e02db68f24107f7048e0db961573a8/acp-variant-b-mobile.png';

  function startMetricTracking() {
    const CONFIG = {
      REQUIRED_PATHS: ['/dashboard', '/dashboard/services','/my-devices'],
      TARGETS: [
        {
          selector: 'button[data-analytics-id="global-nav-claims-cta"]',
          events: ['amzcp_myaccount_header_claims_cta_click', 'amzcp_myaccount_claims_start_click']
        },
        {
          selector: '[data-testid="side-menu-link-JoyfulHomeAccountNavigationLink"]',
          events: ['amzcp_myaccount_side_nav_account_click']
        },
        {
          selector: '[data-testid="side-menu-link-JoyfulHomeClaimsNavigationLink"]',
          events: ['amzcp_myaccount_side_nav_claims_click', 'amzcp_myaccount_claims_start_click']
        },
        {
          selector: '[data-testid="side-menu-link-JoyfulHomeServicesNavigationLink"]',
          events: ['amzcp_myaccount_side_nav_services_click']
        },
        {
          selector: '[data-testid="account-upsell-banner"] button[data-testid="account-upsell-banner-learn-more"]',
          events: ['amzcp_myaccount_upsell_card_cta_click'],
          redirectUrl: AMAZON_PLAN_URL
        },
        {
          selector: '[data-testid="account-plan-card"]',
          events: ['amzcp_myaccount_protected_products_card_click']
        },
        {
          selector: '[data-testid="account-list-item-0-ask-a-question"] button[data-aui="list-item"]',
          opensWidgetFromAsk: true
        },
        {
          selector: '[data-testid="widget-floating-action-button"]',
          iframeFallback: true
        }
      ]
    };
    const boundAttribute = 'data-optly-amzcp-metric-bound';

    function fireOptimizelyEvent(eventName) {
      // Query params are allowed, but metrics should only count on /dashboard.
      const normalizedPath = window.location.pathname.replace(/\/$/, '');
      if (CONFIG.REQUIRED_PATHS.indexOf(normalizedPath) === -1) {
        return;
      }

      window.optimizely = window.optimizely || [];
      window.optimizely.push({
        type: 'event',
        eventName
      });
    }

    function fireTargetEvents(target) {
      if (!target.events) return;
      target.events.forEach(fireOptimizelyEvent);
    }

    function bindDelegatedClick() {
      if (document.documentElement.getAttribute(boundAttribute) === 'document') {
        return;
      }

      document.documentElement.setAttribute(boundAttribute, 'document');
      document.addEventListener('click', event => {
        CONFIG.TARGETS.forEach(target => {
          let matched = null;

          if (event.target && event.target.closest) {
            matched = event.target.closest(target.selector);
          }

          if (!matched) return;

          fireTargetEvents(target);

          if (target.redirectUrl) {
            event.preventDefault();
            event.stopImmediatePropagation();
            window.open(target.redirectUrl, '_blank', 'noopener');
          }
        });
      }, true);
    }

    function handleWidgetDataLayerEvent(data) {
      const extraData = (data && (data.ExtraData || data.extraData)) || {};
      const analyticsId = extraData['data-analytics-id'];
      const isWidgetEvent = data && data.Scope === 'SIMPLR_CHAT';
      const isOpenEvent = isWidgetEvent
        && (data.event || data.Name) === 'Widget_View'
        && analyticsId === 'SupportWindow';

      if (isOpenEvent) {
        fireOptimizelyEvent('amzcp_myaccount_support_chat_start_click');
      }
    }

    function bindDataLayerWidgetState() {
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.forEach(data => {
        handleWidgetDataLayerEvent(data);
      });

      if (window.dataLayer.__optlyAmzcpWidgetStateBound) return;

      window.dataLayer.__optlyAmzcpWidgetStateBound = true;

      window.dataLayer.push = new Proxy(window.dataLayer.push, {
        apply(target, thisArg, args) {
          const result = Reflect.apply(target, thisArg, args);

          args.forEach(data => {
            handleWidgetDataLayerEvent(data);
          });

          return result;
        }
      });
    }

    bindDelegatedClick();
    bindDataLayerWidgetState();
  }

  function normalizeText(value) {
    return (value || '').replace(/\s+/g, ' ').trim();
  }

  function setText(el, text) {
    // Avoid rewriting identical text on every MutationObserver tick.
    if (el && normalizeText(el.textContent) !== text) {
      el.textContent = text;
    }
  }

  function updateImageSlot(imageSlot) {
    // Idempotency guard: once the art is present, do not touch the image slot again.
    if (imageSlot.querySelector(`.${OPTLY_ID}-art`)) return;

    imageSlot.innerHTML = `
      <div class="${OPTLY_ID}-art">
        <picture>
          <source media="(max-width: 767px)" srcset="${MOBILE_IMAGE}">
          <img
            class="${OPTLY_ID}-image"
            src="${DESKTOP_IMAGE}"
            alt="Best value Asurion Complete Protect"
          >
        </picture>
      </div>
    `;
  }

  function applyChanges() {
    // Fail closed if the exact app-owned selector is not present. Avoid copy-
    // based matching because other experiences may contain similar ACP content.
    const host = document.querySelector(CARD_SELECTOR);
    if (!host) return;

    // The CTA wrapper contains the real AUI button. Keep that wrapper in place
    // so existing click handlers, tracking, and route behavior remain owned by the app.
    const cta = host.querySelector(CTA_SELECTOR);
    if (!cta) return;

    const centeredText = host.querySelectorAll(CENTERED_TEXT_SELECTOR);
    const title = centeredText[0] || null;
    const price = centeredText[1] || null;
    const subheading = host.querySelector(SUBHEADING_SELECTOR);
    const ctaLabel = cta.querySelector(CTA_LABEL_SELECTOR);

    // CSS is supplied separately in variation-c-pdp.css. These classes scope
    // that CSS to the tested card only.
    host.classList.add(`${OPTLY_ID}-host`, OPTLY_ID);
    host.dataset.optlyAmzcpUpsell = OPTLY_ID;

    // This is the only area where we replace markup. The root card and content
    // container stay intact; the original image asset is swapped for variation art.
    const imageSlot = host.querySelector(IMAGE_SLOT_SELECTOR);
    if (imageSlot) updateImageSlot(imageSlot);

    setText(title, TARGET_TEXT);
    setText(subheading, SUBHEADING_TEXT);
    setText(price, PRICE_TEXT);

    setText(ctaLabel, 'Start protection');
    cta.setAttribute('data-optly-preserved-cta', 'true');
  }

  let scheduled = false;

  function scheduleApply() {
    if (scheduled) return;

    scheduled = true;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scheduled = false;

        try {
          applyChanges();
        } catch (error) {}
      });
    });
  }

  (function patchHistoryForSpa() {
    // My Account is a React SPA. Route changes can replace the card after the
    // initial Optimizely execution, so schedule a re-apply after history updates.
    ['pushState', 'replaceState'].forEach(method => {
      const original = history[method];
      if (!original || original.__optlyAmzcpPatched) return;
      history[method] = function () {
        const result = original.apply(this, arguments);
        scheduleApply();
        return result;
      };
      history[method].__optlyAmzcpPatched = true;
    });
    window.addEventListener('popstate', scheduleApply, true);
  })();

  // My Account can render or replace this section after Optimizely first runs.
  // Observe app-driven DOM updates and schedule a single near-term re-apply.
  new MutationObserver(scheduleApply).observe(document.documentElement || document.body, {
    childList: true,
    subtree: true,
  });

  scheduleApply();
  startMetricTracking();
})();
}, "dependencies": []}, {"dependencies": [], "id": "C9F94965-27DF-4BEA-A47A-26377F942373", "selector": "head", "type": "append", "value": "<style>/* Variation C / PDP creative.\r\n   The JS adds .amzcp-upsell-variation-c to the existing AUI simple card. */\r\n.amzcp-upsell-variation-c-host,\r\n.amzcp-upsell-variation-c {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Scope all visual overrides to the tested upsell card only. */\r\n.amzcp-upsell-variation-c {\r\n  overflow: hidden !important;\r\n  border: 1px solid #c6c6ca !important;\r\n  border-radius: 8px !important;\r\n  background: linear-gradient(256deg, #ff5070 14%, #8223d2 103%) !important;\r\n  color: #fff !important;\r\n  font-family: \"Apercu Pro\", Apercu, Arial, sans-serif !important;\r\n  text-align: center !important;\r\n}\r\n\r\n/* The live image slot is a styled-component, so use a partial class match here.\r\n   The root card and CTA continue to use stable app-owned data-testid selectors. */\r\n.amzcp-upsell-variation-c [class*=\"UpsellBannerCard__Image\"] {\r\n  position: relative !important;\r\n  display: flex !important;\r\n  box-sizing: border-box !important;\r\n  width: 100% !important;\r\n  max-width: none !important;\r\n  min-height: 104px !important;\r\n  height: 104px !important;\r\n  align-items: center !important;\r\n  justify-content: center !important;\r\n  background: transparent !important;\r\n}\r\n\r\n/* Contentful creative inserted into the existing image slot. */\r\n.amzcp-upsell-variation-c-art {\r\n  position: relative;\r\n  display: flex;\r\n  width: 100%;\r\n  min-height: 104px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.amzcp-upsell-variation-c-image {\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 440px;\r\n  height: auto;\r\n  max-height: 104px;\r\n  object-fit: contain;\r\n}\r\n\r\n/* Keep the AUI content wrapper, but let this treatment own the card surface. */\r\n.amzcp-upsell-variation-c [class*=\"UpsellBannerCard__Content\"] {\r\n  background: transparent !important;\r\n  padding-top: 12px !important;\r\n}\r\n\r\n/* Text colors are scoped to the active treatment class. */\r\n.amzcp-upsell-variation-c [data-aui=\"text\"],\r\n.amzcp-upsell-variation-c [class*=\"UpsellBannerCard__Subheading\"] p {\r\n  color: #fff !important;\r\n}\r\n\r\n.amzcp-upsell-variation-c [class*=\"UpsellBannerCard__Subheading\"] p {\r\n  max-width: 520px;\r\n  margin: 0 auto;\r\n  font-size: 14px;\r\n  line-height: 1.3;\r\n}\r\n\r\n/* Preserve the existing CTA markup and behavior; only restyle the wrapper/button. */\r\n.amzcp-upsell-variation-c [data-testid=\"account-upsell-banner-learn-more\"] {\r\n  display: flex !important;\r\n  justify-content: center !important;\r\n}\r\n\r\n.amzcp-upsell-variation-c [data-testid=\"account-upsell-banner-learn-more\"],\r\n.amzcp-upsell-variation-c [data-testid=\"account-upsell-banner-learn-more\"] button,\r\n.amzcp-upsell-variation-c [data-testid=\"account-upsell-banner-learn-more\"] a,\r\n.amzcp-upsell-variation-c [data-testid=\"account-upsell-banner-learn-more\"] [data-aui=\"action\"],\r\n.amzcp-upsell-variation-c [data-testid=\"account-upsell-banner-learn-more\"] [role=\"button\"] {\r\n  min-width: 132px !important;\r\n  border-radius: 999px !important;\r\n  background: #fff !important;\r\n  color: #252629 !important;\r\n  font-family: \"Apercu Pro\", Apercu, Arial, sans-serif !important;\r\n  font-size: 14px !important;\r\n  font-weight: 400 !important;\r\n}\r\n\r\n.amzcp-upsell-variation-c [data-testid=\"account-upsell-banner-learn-more\"] span {\r\n  color: #252629 !important;\r\n}</style>"}]}]}], "weightDistributions": null, "name": "/dashboard/?mxclient=amazon - My Account - Amazon banner test", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6047976313847808"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6312680114356224"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6076279431102464", "name": "/protection-plans/compare-plans/", "commitId": "6551374406615040", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "6475398679101440", "integrationSettings": null, "variations": [{"id": "6580645627953152", "name": "Original", "actions": [{"viewId": "5272692543193088", "changes": [{"id": "D71775B9-E2CF-4724-8354-C106535C4FA1", "type": "custom_code", "value": function($){var loadCount = 0;


        let create = (url) => { 
            return new Promise(function(resolve, reject) {
            
           let imported = document.createElement('script'); 
                imported.src = url; 
                imported.async = false; 
                imported.onload = () => { 
                    resolve(url); 
                }; 
                imported.onerror = () => { 
                    reject(url); 
                }; 
                document.head.appendChild(imported); 
          }); 
        }; 
        let scripts = [
        "https://io.asurion.com/techcarehomemvp/cdn/ScrollMagic.min.js",
         "https://io.asurion.com/techcarehomemvp/cdn/gsap.min.js",
        "https://io.asurion.com/techcarehomemvp/cdn/animation.gsap.min.js"]; 
        let promiseData = []; 
        scripts.forEach(function(url) { 
            promiseData.push(create(url)); 
        }); 
        Promise.all(promiseData).then(function() { 
       // Define some globals
// Define some globals
const techcarehouse_path = "https://io.asurion.com/techcarehomemvp/cdn"; // no trailing slash
//const techcarehouse_path = "cdn"; // no trailing slash
let scrollLoaded = false;
console.log("tc-3.5")

function addTechCareHouseToDOM(domId){
		scrollLoaded = false;
    //console.log("appending tech care house");
    var parent = document.getElementById(domId);

    // clear container
    techcarehouse_empty(parent);

    // add some styles (remove parent styles already there)
    parent.style.padding = 0;
    parent.style.maxWidth = "100%";
    parent.style.textAlign = "left";

  

    // Add stuff
    // containers and high-level blocks
    var techcarehouse_wrapper = parent.appendChild(document.createElement("div"));
    techcarehouse_wrapper.setAttribute("id", "techcare-house-wrapper");
    var techcarehouse_container = techcarehouse_wrapper.appendChild(document.createElement("div"));
    techcarehouse_container.setAttribute("id", "techcare-house-container");
    // story flow :)
    var techcarehouse_textcolumn = techcarehouse_container.appendChild(document.createElement("div"));
    techcarehouse_textcolumn.setAttribute("id", "techcare-house-textcolumn");

    // section 1
    var techcarehouse_section1 = techcarehouse_textcolumn.appendChild(document.createElement("section"));
    techcarehouse_section1.setAttribute("id", "techcare-house-section1");
    var techcarehouse_section1_title = techcarehouse_section1.appendChild(document.createElement("p"));
    techcarehouse_section1_title.classList.add("techcare-house-section-title");
    techcarehouse_section1_title.innerText = 'Does tech keep your home running?';
    var techcarehouse_section1_body = techcarehouse_section1.appendChild(document.createElement("p"));
    techcarehouse_section1_body.classList.add("techcare-house-section-body");
    techcarehouse_section1_body.innerText = "If you answered yes, you're not alone. The average household in America has over $18,000 worth of tech and appliances to make life easier.";
    var techcarehouse_section1_figure = techcarehouse_section1.appendChild(document.createElement("figure"));
    techcarehouse_section1_figure.classList.add("techcare-house-section-figure");
    var techcarehouse_section1_img = techcarehouse_section1_figure.appendChild(document.createElement("img"));
    techcarehouse_section1_img.classList.add("techcare-house-section-img");
    techcarehouse_section1_img.setAttribute("src", techcarehouse_path+"/img/step1-loop.gif");
    techcarehouse_section1_img.setAttribute("alt", "Illustration showing common examples of home technology, including TVs, a washer and dryer, an oven, a dishwasher, a laptop, a monitor, a printer, a security camera and a smart lock.");
    techcarehouse_section1_img.setAttribute("srcset", techcarehouse_path+"/img/step1-loop-514.gif 514w, " + techcarehouse_path+"/img/step1-loop.gif 1028w");
    techcarehouse_section1_img.setAttribute("sizes", "(max-width: 600px) 512px, 1028px");
    // section 2
    var techcarehouse_section2 = techcarehouse_textcolumn.appendChild(document.createElement("section"));
    techcarehouse_section2.setAttribute("id", "techcare-house-section2");
    var techcarehouse_section2_title = techcarehouse_section2.appendChild(document.createElement("p"));
    techcarehouse_section2_title.classList.add("techcare-house-section-title");
    techcarehouse_section2_title.innerText = 'But sometimes, life happens';
    var techcarehouse_section2_body = techcarehouse_section2.appendChild(document.createElement("p"));
    techcarehouse_section2_body.classList.add("techcare-house-section-body");
    techcarehouse_section2_body.innerText = 'Laptop shuts down before a big presentation? Washer leaking? One tech or appliance glitch could easily disrupt your day or break your budget.';
    var techcarehouse_section2_figure = techcarehouse_section2.appendChild(document.createElement("figure"));
    techcarehouse_section2_figure.classList.add("techcare-house-section-figure");
    var techcarehouse_section2_img = techcarehouse_section2_figure.appendChild(document.createElement("img"));
    techcarehouse_section2_img.classList.add("techcare-house-section-img");
    techcarehouse_section2_img.setAttribute("src", techcarehouse_path+"/img/step2-loop.gif");
    techcarehouse_section2_img.setAttribute("alt", "Illustration showing the outline of a house and examples of what could go wrong with the home technology inside, including a cracked laptop screen, a network error, an issue calibrating a smart lock, a washer leak, and a security alert that an email address is on the dark web.");
    techcarehouse_section2_img.setAttribute("srcset", techcarehouse_path+"/img/step2-loop-514.gif 514w, " + techcarehouse_path+"/img/step2-loop.gif 1028w");
    techcarehouse_section2_img.setAttribute("sizes", "(max-width: 600px) 512px, 1028px");
    // section 3
    var techcarehouse_section3 = techcarehouse_textcolumn.appendChild(document.createElement("section"));
    techcarehouse_section3.setAttribute("id", "techcare-house-section3");
    var techcarehouse_section3_title = techcarehouse_section3.appendChild(document.createElement("p"));
    techcarehouse_section3_title.classList.add("techcare-house-section-title");
    techcarehouse_section3_title.innerText = 'Meet tech care that out-cares all the rest';
    var techcarehouse_section3_body = techcarehouse_section3.appendChild(document.createElement("p"));
    techcarehouse_section3_body.classList.add("techcare-house-section-body");
    techcarehouse_section3_body.innerText = "Tech and appliance protection. Fast, quality fixes. Hands-on help. It's care that keeps your life running.";

    var techcarehouse_section3_figure = techcarehouse_section3.appendChild(document.createElement("figure"));
    techcarehouse_section3_figure.classList.add("techcare-house-section-figure");
    var techcarehouse_section3_img = techcarehouse_section3_figure.appendChild(document.createElement("img"));
    techcarehouse_section3_img.classList.add("techcare-house-section-img");
    techcarehouse_section3_img.setAttribute("src", techcarehouse_path+"/img/step3-loop.gif");
    techcarehouse_section3_img.setAttribute("alt", "Illustration showing the outline of a house and examples of resolutions to potential issues with the home technology inside, including no-hassle replacements, 24/7 expert help, expert setup, fast quality repairs, and digital security monitoring");
    techcarehouse_section3_img.setAttribute("srcset", techcarehouse_path+"/img/step3-loop-514.gif 514w, " + techcarehouse_path+"/img/step3-loop.gif 1028w");
    techcarehouse_section3_img.setAttribute("sizes", "(max-width: 600px) 512px, 1028px");
    // motion column
    var techcarehouse_motioncolumn = techcarehouse_container.appendChild(document.createElement("div"));
    techcarehouse_motioncolumn.setAttribute("id", "techcare-house-motioncolumn");
    var techcarehouse_motionfigure = techcarehouse_motioncolumn.appendChild(document.createElement("figure"));
    var techcarehouse_motionfigure_img = techcarehouse_motionfigure.appendChild(document.createElement("img"));
    techcarehouse_motionfigure_img.setAttribute("src", techcarehouse_path+"/img/skeleton-loader-514x358.gif");
    techcarehouse_motionfigure_img.setAttribute("alt", "A series of animated illustration Illustration showing common examples of home technology; including TVs, a washer and dryer, an oven, a dishwasher, a laptop, a monitor, a printer, a security camera and a smart lock; along with common problems, including including a cracked laptop screen, a network error, an issue calibrating a smart lock, a washer leak, and a security alert that an email address is on the dark web; and concluding with ways Asurion can help, including no-hassle replacements, 24/7 expert help, expert setup, fast quality repairs, and digital security monitoring.");
}
function techCareHouseScrollStuff(){
    // only want to add scrollstuff at the right breakpoint
    techcarehouse_checkmq("(min-width: 1200px)", loadScrollStuff);
}
window.loadScrollStuff = function(){
  try{
    if(scrollLoaded === false){
        //console.log("loading scroll stuff");
        
        let preloadedImageCache = []; // for all the BG animation frame/scroll swapping
        
        function preload(imageURLs, callback) {
            let theseImages = [];
            let loadCount = 0;
            for (let i = 0; i < imageURLs.length; i++) {
                let img = new Image();
                img.onload = function() {
                    theseImages[i] = img;
                    preloadedImageCache.push(img);
                    loadCount ++;
                    if(loadCount === imageURLs.length){
                        callback(theseImages);
                    }
                }
                img.src = imageURLs[i];
            }
        }
        
        let controller = new ScrollMagic.Controller({container: "html"});
        let element = document.getElementById("techcare-house-container");
        let scrollDuration = element.offsetHeight - window.innerHeight;
        // https://scrollmagic.io/docs/ScrollMagic.Scene.html#duration
        function durationCallback () {
            return scrollDuration;
        }
        let enterScene = new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: "onLeave",
            duration: durationCallback
        })
        .setPin("#techcare-house-motioncolumn figure", {pushFollowers: false})
        .addTo(controller);
        
        // change duration if window is resized
        // https://bencentra.com/code/2015/02/27/optimizing-window-resize.html
        var delay = 250,
        timeout = false;
        function changeDuration(){
            scrollDuration = element.offsetHeight - window.innerHeight;
        }
        window.addEventListener('resize', function() {
            // clear the timeout
            clearTimeout(timeout);
            // start timing for event "completion"
            timeout = setTimeout(changeDuration, delay);
        });
        
        /* Define some tweens */

        function createTweenScene(triggerEl, uniqueSelector, imgPath, sequenceName, start, end, ext, gifForStart, gifForComplete, immediateRender, callback){
            // Define images
            let imageURLs = [];
            const startNumber = parseInt(start);
            const endNumber = parseInt(end);
            // stick the start GIF into the list
            if(gifForStart){
                imageURLs.push(imgPath + "/" + gifForStart);
            }
            for(let i=startNumber; i<=endNumber; i++){
                let currentStringName = i.toString().padStart(5, '0');
                imageURLs.push(
                    imgPath + "/" + sequenceName + "/" + currentStringName + "." + ext
                );
            }
            // stick the end GIF into the list
            imageURLs.push(imgPath + "/" + gifForComplete);
            // and save the preloaded images to use in the following code
            preload(imageURLs, function(preloadedImages){
                //console.log("in preload function");
                let imgElement = document.querySelector(uniqueSelector);
                // TweenMax can tween any property of any object. We use this object to cycle through the array
                let obj = {curImg: 0};
                let tween = gsap.to(obj,
                    {
                        curImg: preloadedImages.length - 1,	// animate propery curImg to number of images
                        roundProps: "curImg",           // only integers so it can be used as an array index
                        immediateRender: immediateRender,			// load first image automatically
                        ease: Linear.easeNone,      // show every image the same ammount of time,
                        duration: 2,
                        onUpdate: function () {
                            imgElement.src = preloadedImages[obj.curImg].src; // set the image source
                        }
                    }
                );
                //return tween;
                let scene = new ScrollMagic.Scene({
                    triggerElement: triggerEl,
                    triggerHook: "onEnter"
                })
                .setTween(tween)
                .addTo(controller);
                //console.log("scene added");
              	try{
                callback();
                }catch(e){console.log({"callbackError":e})}
            });
        }
        //just a hacky way to chain these in order
        //using callbacks into callbacks
        createTweenScene(
            "#techcare-house-section1 p.techcare-house-section-body",
            "#techcare-house-motioncolumn img",techcarehouse_path+"/img",
            "step1-sequence",
            27, 27, "jpg", null, "step1-loop.gif", true,
            function(){
                createTweenScene(
                    "#techcare-house-section1 p.techcare-house-section-body",
                    "#techcare-house-motioncolumn img",techcarehouse_path+"/img",
                    "step1-sequence",
                    27, 27, "jpg", "step1-loop.gif", "step1-loop.gif", false,
                    function(){
                        createTweenScene(
                            "#techcare-house-section2 p.techcare-house-section-body",
                            "#techcare-house-motioncolumn img",techcarehouse_path+"/img",
                            "step2-sequence",
                            0, 18, "jpg", "step1-loop.gif", "step2-loop.gif", false,
                            function(){
                                createTweenScene(
                                    "#techcare-house-section3 p.techcare-house-section-body",
                                    "#techcare-house-motioncolumn img",techcarehouse_path+"/img",
                                    "step3-sequence",
                                    0, 10, "jpg", "step2-loop.gif", "step3-loop.gif", false);
                                    scrollLoaded = true;
                            }
                        );
                    }
                );
            }
        );
    }
    }catch(e){console.log({scrollStuffError:e})};
}

      var utils = window["optimizely"].get('utils');
	
       utils.observeSelector("#tech-care-house-loader,#tc_section_house_loader", function(el) {
         if(window.myTimeout){
   				clearTimeout(window.myTimeout);
  			 }
        
         loadCount = loadCount + 1;
         
         if(document.querySelector("#tc_section_house_loader")){
         	addTechCareHouseToDOM("tc_section_house_loader");
         }
         if(document.querySelector("#tech-care-house-loader")){
         	addTechCareHouseToDOM("tech-care-house-loader");
         }
         window.loaderTimeout = setTimeout(techCareHouseScrollStuff, 500);
         }, {
  				"once": false
				});


        }).catch(function(error) { 
            console.log(error + ' failed to load!'); 
        });

(function(){
  try{
   var ids = new Set([]);
   document.addEventListener("scroll", function(){

   function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    // Only completely visible elements return true:
    // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    //Partially visible elements return true:
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
   }
   document.querySelectorAll('[id*="tc_section"]').forEach(function(el){
       if(isScrolledIntoView(el)){
           //trigger only once
           if(!ids.has(el.id)){
             ids.add(el.id);
              window.dataLayer = window.dataLayer || [];
    					window.dataLayer.push({
        				event: 'viewed_section',
        				section_id: el.id
    					});
           }
       }
   })
});
  } catch(e){console.log(e)};
})()

/*///// HELPER FUNCTIONS /////*/
function techcarehouse_checkmq(queryString, truecallback, falsecallback){
    let mql = window.matchMedia(queryString);
    mediaqueryresponse(mql); // check now
    mql.addEventListener("change", mediaqueryresponse) // attach listener function to listen in on state changes
    // http://www.javascriptkit.com/dhtmltutors/cssmediaqueries4.shtml
    // https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
    function mediaqueryresponse(mql){
        if (mql.matches){ // if media query matches
            //console.log("The condition " + mql.media + " has been met")
            if(truecallback){truecallback()};
        } else {
            //console.log("Condition not met yet")
            if(falsecallback){falsecallback()};
        }
    }
}
function techcarehouse_empty(node){
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
}
}, "dependencies": []}, {"id": "6C2D3F8A-D445-457D-B5EC-31B40756B922", "type": "append", "selector": "head", "value": "<style>#interactive-component-fallback{\n\tdisplay:none;\n}\n#techcare-house-container {\n            font-family: 'Apercu Pro', ui-sans-serif, system-ui, sans-serif;\n            -webkit-text-size-adjust: 100%;\n            font-feature-settings: normal;\n            font-variation-settings: normal;\n            -webkit-font-smoothing: antialiased; /* This is the one that makes all the difference on the font lightness */\n            -moz-osx-font-smoothing: grayscale;\n            font-size: 16px;\n            box-sizing: border-box;\n            padding:0;\n            display:flex;\n            max-width:1440px;\n            margin:auto;\n        }\n\n        #techcare-house-container *, #techcare-house-container *:before, #techcare-house-container *:after {\n            box-sizing: inherit;\n        }\n\n        #techcare-house-container *:focus { outline: none; }\n        #techcare-house-motioncolumn { display:none; }\n        #techcare-house-textcolumn { padding: 0; }\n        #techcare-house-container section {\n            margin: 0;\n            padding: 1.25rem 1.5rem;\n            align-items: flex-start;\n        }\n        #techcare-house-container section#techcare-house-section0 {\n            background: linear-gradient(133deg, #FBF2FF -14.26%, #EBF9FF 18.85%, #FFF 51.31%);\n            padding-top:2.5rem;\n        }\n        #techcare-house-container section:last-of-type { margin-bottom: 0;}\n\n        #techcare-house-container a { color: inherit; }\n\n        .techcare-house-section-title {\n            font-size:2rem;\n            font-weight:700;\n            line-height:115%;\n            display: block;\n            margin:0 0 1rem;\n        }\n        #techcare-house-section0 .techcare-house-section-title {\n            font-size:2.5rem;\n        }\n        p.techcare-house-section-body {\n            font-size:1.25rem;\n            font-weight:300;\n            line-height:130%;\n            color:#6E767D;\n            margin:0;\n        }\n\n        #techcare-house-section0 p.techcare-house-section-body { color:#000; }\n\n        .text-gradient {\n            color:#8223D2;\n            background: linear-gradient(90deg, #8223D2 16.94%, #4A68F9 50.19%);\n            -webkit-background-clip: text;\n            background-clip: text;\n            -webkit-text-fill-color: transparent;\n        }\n\n        #techcare-house-container figure {\n            margin:0;\n            padding:0;\n            width:100%;\n        }\n        #techcare-house-container img {\n            width: 100%;\n            height: auto;\n            aspect-ratio: 1028/715;\n            margin-top: 1.5rem;\n            mix-blend-mode: multiply;\n        }\n\n        #techcare-house-textcolumn section a {\n            padding: .75rem 1.75rem;\n            background: #8223D2;\n            border-radius: 99rem;\n            color: #fff;\n            font-weight: 400;\n            line-height: 150%;\n            text-decoration: none;\n            margin:2rem 0 1.5rem;\n            display: inline-block;\n        }\n\n        #techcare-house-motioncolumn {\n            padding-right: 2em;\n        }\n\n\n\n        /* ==========================================================================\n        Media Queries\n        ========================================================================== */\n\n        @media only screen and (min-width: 768px) {\n\n            #techcare-house-container section { padding: 3rem 12%; }\n\n            #techcare-house-container section#techcare-house-section0 { padding-top:5rem; }\n\n            p.techcare-house-section-title { font-size:2.5rem; }\n\n            #techcare-house-section0 .techcare-house-section-title {\n                font-size:3.75rem;\n                font-weight:700;\n                line-height:105%;\n                display: block;\n                margin:0 0 1.5rem;\n            }\n            \n            #techcare-house-section0 p.techcare-house-section-body {\n                font-size:1.5rem;\n                font-weight:300;\n                line-height:130%;\n            }\n            \n        }\n\n        @media only screen and (min-width: 1200px) {\n\n            #techcare-house-wrapper {\n                background: linear-gradient(133deg, #FBF2FF 0%, #EBF9FF 7%, #FFF 20%);\n            }\n\n            #techcare-house-container {\n                position:relative;\n            }\n            \n            #techcare-house-textcolumn section {\n                height: 100vh;\n                display: flex;\n                justify-content: center;\n                flex-direction: column;\n                margin:0;\n            }\n\n            #techcare-house-textcolumn figure { display:none; }\n            #techcare-house-textcolumn {\n                width: 40%;\n            }\n\n            #techcare-house-container section#techcare-house-section0 {\n                background: transparent;\n            }\n\n            #techcare-house-motioncolumn {\n                width:60%;\n                display:block;\n                flex:1 1 auto;\n                position:relative;\n            }\n\n            #techcare-house-motioncolumn figure {\n                height: 100vh;\n                /* background-color: bisque;  for test only */\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n            }\n\n            #techcare-house-container img { margin-top: 0; }\n        }</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "/protection-plans/compare-plans/", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6076279431102464"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5272692543193088"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": [{"type": "custom_code", "value": function($){!function(){var t=window.CRO_PJS.utils.log.bind(window,"[asurc93]"),e=window.CRO_PJS.utils.error.bind(window,"[asurc93]"),n=(t=>(null===(t=window.CRO_PJS.params)||void 0===t?void 0:t.teardownEvent)||"spaPageEnd")();function o(t,e){if(e)return((t,e=!0)=>(t&&window.addEventListener(n,()=>t instanceof Element?t.remove():t(),{"once":e}),t))(function(t,e){return t.classList.add(e),()=>{t.classList.remove(e)}}(t,e))}var a=(()=>window.CRO_PJS)(),i=(()=>a.utils)(),s=(()=>i.observeSelector)(),r=(()=>i.waitForElement)(),c=(()=>i.waitUntil)(),l=(t="#root")=>(t=>r(t))(t).then(t=>c(()=>Object.keys(t).some(t=>t.startsWith("__reactContainer$")||t.startsWith("_reactRootContainer")))),d={"v1":"asurc93__v1_-88cF"};t("Revision #44");var u="cro-cart-summary-clone",m="additional-active",v=null,_=e=>{t(`Activating ${e}`),s(".asurion-light button img",t=>{t.src="//cdn.optimizely.com/img/23755061915/2258c8cee34c43a7a2d7fdf8d1cfc598.svg",t.alt="Asurion Tech Care logo",t.classList.add("cro-atc-logo")});const n=()=>{const t=document.querySelector('[class*="CartSummary__Container"]:not(.cro-cart-clone)'),e=document.querySelector('[data-testid="personal-info-header"]');t&&e&&((t,e)=>{const n=document.getElementById(u);n&&n.remove(),v&&(v.disconnect(),v=null);const o=t.cloneNode(!0);o.id=u,o.classList.remove("cro-cart-original"),o.classList.add("cro-cart-clone"),t.classList.add("cro-cart-original"),e.insertAdjacentElement("beforebegin",o);const a=(t,e)=>{if(t.nodeType!==Node.TEXT_NODE){if(t.nodeType===Node.ELEMENT_NODE){const n=t,o=e;for(const t of Array.from(o.attributes))"id"===t.name||t.name.startsWith("cro-")||n.getAttribute(t.name)===t.value||n.setAttribute(t.name,t.value);const i=Array.from(t.childNodes),s=Array.from(e.childNodes);if(i.length!==s.length)return void(n.innerHTML=o.innerHTML);for(const[t,e]of i.entries())a(e,s[t])}}else t.textContent!==e.textContent&&(t.textContent=e.textContent)};let i=!1;o.addEventListener("click",e=>{const n=e.target.closest("button");if(!n)return;const a=o.querySelectorAll("button"),i=Array.from(a).indexOf(n);if(i>=0){const e=t.querySelectorAll("button")[i];null==e||e.click()}}),(v=new MutationObserver(()=>{i||(i=!0,requestAnimationFrame(()=>{i=!1,a(o,t);const e=t.querySelector('[class*="AddOn__ListItem"]');o.classList.toggle(m,!!e),t.classList.toggle(m,!!e)}))})).observe(t,{"childList":!0,"subtree":!0,"characterData":!0,"attributes":!1});const s=t.querySelector('[class*="AddOn__ListItem"]');o.classList.toggle(m,!!s),t.classList.toggle(m,!!s)})(t,e)};s('[class*="CartSummary__Container"]',n),s('[data-testid="personal-info-header"]',t=>{t.textContent="Sign up (step 1 of 2)",n()}),s('[data-testid="pay-and-review-header"]',t=>{t.textContent="Sign up (step 2 of 2)"}),s('[class*="CartSummary__Desktop"] div ul:first-child[data-aui="list"]',t=>{var e;null===(e=t.querySelector("li"))||void 0===e||e.classList.add("cro-atc-shield")}),s('[data-aui="text"].fs-mask',t=>{const e=(t.textContent||"").split(", ").map(t=>t.trim()),n=e.findIndex(t=>t.startsWith("("));if(n>=3){const o=e[0],a=e[1],i=e.slice(2,n).join(", "),s=e[n],r=e.slice(n+1).join(", ");t.innerHTML=[o,a,i,s,r].filter(Boolean).join("<br>")}}),s('[class*="elements__StyledList"][data-aui="list"]',t=>{t.classList.add("cro-atc-monthly-cost")}),s('[class*="elements__StyledDivider"][data-aui="divider"]',t=>{t.classList.add("cro-atc-divider")}),s('[class*="EditableField__Row"]>span',t=>{var e,n,o;const a=document.querySelector('[class*="CartSummary__Container"]');if(!a)return;const i=(null===(e=a.querySelector('[class*="PlanItem__ListItem"] span[data-aui="text"]'))||void 0===e||null===(e=e.textContent)||void 0===e?void 0:e.trim())||"",s=(null===(n=a.querySelector('[data-testid="addon-stepper-quantity"]'))||void 0===n||null===(n=n.textContent)||void 0===n?void 0:n.trim())||"0",r=(null===(o=a.querySelector('[class*="Cost__CostListItem"] span[data-aui="text"] span'))||void 0===o||null===(o=o.textContent)||void 0===o?void 0:o.trim())||"",c=[];i&&c.push(i),s&&"0"!==s&&c.push(`${s} add-on${"1"!==s?"s":""}`);let l=c.join(" + ");r&&(l+=` - ${r}/mo`),l&&(t.textContent=l)})};s('header nav[aria-label="Mobile Header Navigation"]',t=>{var e;null===(e=t.parentElement)||void 0===e||e.classList.add("cro-atc-header")}),((t,e)=>t[e]||(t[e]={}))(window,"CRO_SHARED_5489292932284416").init=(t,n)=>{try{!function(t){"v0"!==t&&(o(document.documentElement,d[t]),l().then(()=>{_(t)}).catch(e))}(t)}catch(t){e(t)}}}();
}, "id": "19088929445e438383a93d7a62c1abe1", "dependencies": []}, {"type": "append", "value": "<style>.asurc93__v1_-88cF .cro-cart-clone{display:block}.asurc93__v1_-88cF .cro-cart-clone *{animation:none!important}.asurc93__v1_-88cF .cro-cart-clone.additional-active .cro-atc-monthly-cost,.asurc93__v1_-88cF .cro-cart-original.additional-active .cro-atc-monthly-cost{display:block}.asurc93__v1_-88cF .cro-atc-divider,.asurc93__v1_-88cF .cro-atc-monthly-cost,.asurc93__v1_-88cF .cro-cart-original{display:none}.asurc93__v1_-88cF .cro-atc-header{padding:12px 0 0}@media(min-width:769px){.asurc93__v1_-88cF .cro-cart-clone{display:none}.asurc93__v1_-88cF .cro-cart-original{display:block}}@media(max-width:768px){.asurc93__v1_-88cF .cro-atc-logo{height:auto;max-width:189px}.asurc93__v1_-88cF .cro-atc-divider,.asurc93__v1_-88cF .cro-atc-monthly-cost,.asurc93__v1_-88cF .cro-atc-shield{display:none}.asurc93__v1_-88cF .device-selection-section,.asurc93__v1_-88cF [class*=deviceSelection],.asurc93__v1_-88cF [data-testid*=device]{margin-top:0;padding-bottom:16px;padding-top:16px}.asurc93__v1_-88cF .device-selection-section>div:first-child,.asurc93__v1_-88cF [class*=deviceSelection]>div:first-child,.asurc93__v1_-88cF [data-testid*=device]>div:first-child{margin-top:0;padding-top:0}.asurc93__v1_-88cF [class*=form],.asurc93__v1_-88cF form{margin-top:8px}.asurc93__v1_-88cF [class*=form] input,.asurc93__v1_-88cF [class*=form] select,.asurc93__v1_-88cF [class*=form] textarea,.asurc93__v1_-88cF form input,.asurc93__v1_-88cF form select,.asurc93__v1_-88cF form textarea{margin-bottom:12px}.asurc93__v1_-88cF main{padding-top:0}.asurc93__v1_-88cF [class*=label],.asurc93__v1_-88cF [class*=shield],.asurc93__v1_-88cF [class*=techCare],.asurc93__v1_-88cF svg[class*=shield]{display:none}}@media(min-width:769px){.asurc93__v1_-88cF .cro-atc-logo{height:auto;max-width:250px}}</style>", "id": "2b2870d93ba44c61a0488adabd0cab7c", "dependencies": [], "selector": "head"}], "id": "6202793258647552", "name": "ATC Enrollment Layout Update", "commitId": "4805504770244608", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "5408589649543168"], "audienceName": "Does not have store_id", "changes": null, "id": "5362458949320704", "integrationSettings": null, "variations": [{"id": "5775661244088320", "name": "v1: Updated Layout", "actions": [{"viewId": "5910022383730688", "changes": [{"type": "custom_code", "value": function($){!function(){var i=((i,n)=>i[n]||(i[n]={}))(window,"CRO_SHARED_5489292932284416"),n=window.CRO_PJS.utils.error.bind(window,"[asurc93]");try{i.init("v1","tech-care-sign-up-page-1")}catch(i){n(i)}}();
}, "id": "4bcc53ffc6c0446ebd5675e07de94a0f", "dependencies": []}]}, {"viewId": "5394840897191936", "changes": [{"type": "custom_code", "value": function($){!function(){var i=((i,n)=>i[n]||(i[n]={}))(window,"CRO_SHARED_5489292932284416"),n=window.CRO_PJS.utils.error.bind(window,"[asurc93]");try{i.init("v1","tech-care-sign-up-page-2")}catch(i){n(i)}}();
}, "id": "4223ed24b86347a18805d94cd2a07332", "dependencies": []}]}]}], "weightDistributions": null, "name": "ATC Enrollment Layout Update", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6202793258647552"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5394840897191936", "5910022383730688"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6408395842912256", "name": "protecaomovel.com.br/brasil/ - What's App Integration", "commitId": "4875632442605568", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5777083431911424", "integrationSettings": null, "variations": [{"id": "4613256917024768", "name": "Original", "actions": [{"viewId": "4515846421217280", "changes": [{"id": "772e8645232b4a6bbfb72f22c106eff5", "type": "custom_code", "value": function($){// Claro Brasil — "Proteção Móvel" (protecaomovel-br) WhatsApp FAB
// Adds a fixed-position WhatsApp floating action button to the bottom-right
// of every page. Idempotent, SPA-safe, and self-healing if React re-renders
// wipe it out.
//
// Target site: https://www.protecaomovel.com.br/brasil/
// Destination: WhatsApp chat at +55 11 99969 4684

// ======= CONFIGURE THIS =======
const CONFIG = {
  PHONE: '5511999694684',
  ARIA_LABEL: 'Iniciar chat via WhatsApp',
  BUTTON_ID: 'asurion-claro-whatsapp-brasil-fab',
  STYLE_ID: 'asurion-claro-whatsapp-brasil-fab-style',
};
// ======= END CONFIG =======

const CSS = `
#${CONFIG.BUTTON_ID} {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 2147483000;
  margin: 0;
  padding: 0;
  line-height: 0;
  pointer-events: auto;
}
#${CONFIG.BUTTON_ID} a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
#${CONFIG.BUTTON_ID} a:hover,
#${CONFIG.BUTTON_ID} a:focus-visible {
  transform: scale(1.08);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  outline: none;
}
#${CONFIG.BUTTON_ID} a:focus-visible {
  box-shadow: 0 0 0 3px rgba(37, 211, 102, 0.45), 0 6px 18px rgba(0, 0, 0, 0.3);
}
#${CONFIG.BUTTON_ID} svg {
  width: 32px;
  height: 32px;
  fill: #ffffff;
  display: block;
}
@media (max-width: 480px) {
  #${CONFIG.BUTTON_ID} {
    bottom: 16px;
    right: 16px;
  }
  #${CONFIG.BUTTON_ID} a {
    width: 56px;
    height: 56px;
  }
  #${CONFIG.BUTTON_ID} svg {
    width: 28px;
    height: 28px;
  }
}
@media (prefers-reduced-motion: reduce) {
  #${CONFIG.BUTTON_ID} a { transition: none; }
  #${CONFIG.BUTTON_ID} a:hover,
  #${CONFIG.BUTTON_ID} a:focus-visible { transform: none; }
}
`;

const SVG = `
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.489-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.854l-.485-.289-5.04 1.188 1.213-4.907-.317-.503A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.631-.199-.897.199-.266.398-1.031 1.294-1.264 1.56-.233.266-.465.299-.863.1-.398-.199-1.681-.619-3.203-1.975-1.184-1.054-1.983-2.356-2.216-2.754-.233-.398-.025-.613.175-.811.18-.179.398-.465.597-.698.199-.233.266-.398.398-.664.133-.266.067-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.778-.653-.673-.897-.685l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.395 1.362-1.395 3.322s1.428 3.853 1.628 4.119c.199.266 2.81 4.291 6.808 6.018.951.411 1.693.656 2.272.839.955.303 1.824.26 2.511.158.766-.114 2.354-.962 2.687-1.891.333-.929.333-1.726.233-1.891-.1-.166-.365-.266-.763-.465z"/>
</svg>`;

function injectStyle() {
  if (document.getElementById(CONFIG.STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = CONFIG.STYLE_ID;
  style.textContent = CSS;
  (document.head || document.documentElement).appendChild(style);
}

function injectButton() {
  if (!document.body) return false;
  if (document.getElementById(CONFIG.BUTTON_ID)) return true;

  const wrap = document.createElement('div');
  wrap.id = CONFIG.BUTTON_ID;
  wrap.innerHTML = `
    <a href="https://api.whatsapp.com/send?phone=${CONFIG.PHONE}"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="${CONFIG.ARIA_LABEL}">
      ${SVG}
    </a>
  `;
  document.body.appendChild(wrap);
  return true;
}

function applyChanges() {
  injectStyle();
  injectButton();
}

// --- Utilities ---
const raf = cb => requestAnimationFrame(() => requestAnimationFrame(cb));
const oncePerTick = (() => {
  let scheduled = false;
  return fn => {
    if (scheduled) return;
    scheduled = true;
    raf(() => { scheduled = false; fn(); });
  };
})();

const safeApply = () => {
  try {
    applyChanges();
  } catch (e) {
    console.error('[Optimizely][claro-whatsapp-brasil] apply error:', e);
  }
};

// --- Watch for removal / React re-renders and re-inject ---
const watchDom = (() => {
  let observer;
  return () => {
    if (observer) return;
    observer = new MutationObserver(() => {
      if (!document.getElementById(CONFIG.BUTTON_ID) ||
          !document.getElementById(CONFIG.STYLE_ID)) {
        oncePerTick(safeApply);
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  };
})();

// --- Handle SPA route changes ---
(function patchHistoryForSpa() {
  const fire = () => oncePerTick(safeApply);
  ['pushState', 'replaceState'].forEach(fn => {
    const orig = history[fn];
    if (!orig || orig.__claroWaBrPatched) return;
    history[fn] = function () { const res = orig.apply(this, arguments); fire(); return res; };
    history[fn].__claroWaBrPatched = true;
  });
  window.addEventListener('popstate', fire, true);
})();

// --- Bootstrap ---
if (document.body) {
  safeApply();
} else {
  document.addEventListener('DOMContentLoaded', safeApply, { once: true });
}
watchDom();
}, "dependencies": []}]}]}], "weightDistributions": null, "name": "protecaomovel.com.br/brasil/ - What's App Integration", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6408395842912256"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["4515846421217280"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6418787432398848", "name": "/techsupport/verizon-customer-testimonials/", "commitId": "5492100993646592", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"google_analytics_4": {}, "28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5463062182887424", "integrationSettings": null, "variations": [{"id": "5539303464370176", "name": "Original", "actions": []}, {"id": "5045911470997504", "name": "Variation #1", "actions": [{"viewId": "6121201228054528", "changes": [{"id": "7497DEA7-41E8-4F3D-A716-EF20F3E7DEB0", "type": "append", "selector": "head", "value": "<style>div[data-testid=\"image-text-block\"] a {\n    cursor: pointer;\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "5045911470997504", "endOfRange": 10000}], "name": "/techsupport/verizon-customer-testimonials/", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6418787432398848"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6121201228054528"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6580486011617280", "name": "/program/hp-care-complete-cp-expiration-enroll/ - HP enrollment updates", "commitId": "5888118895673344", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"google_analytics_4": {}, "28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5800109949059072", "integrationSettings": null, "variations": [{"id": "5905918146117632", "name": "HP enrollment updates", "actions": [{"viewId": "4673961739419648", "changes": [{"dependencies": [], "id": "ba01933b-dab7-417c-a16d-f886577e731f", "selector": "head", "type": "append", "value": "<style>[data-aui=\"modal\"] [class*=\"Dialog__StyledContent\"] {\n  padding-bottom: 50px;\n}\n\n[data-aui=\"modal\"] [class*=\"Dialog__FlexBox\"] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  padding: 10px 0;\n  background: #fff;\n}\n\n[data-aui=\"modal\"] [class*=\"Dialog__FlexBox\"] button {\n  position: relative;\n  right: 15px;\n}\n\n\n/* Sticky footer: keep Sign Up label on one line (avoids wrap \u2264390px) */\n[class*=\"FooterWrapper\"] [data-testid=\"action\"] {\n  white-space: nowrap !important;\n}\n@media (max-width: 428px) and (min-width: 390px){\n\t[class*=\"FooterContent\"]{\n \t\tgap:12px !important; \n\t}\n  [class*=\"FooterContent\"] button{font-size:14px;}\n  [class*=\"LogoContainer\"] img {max-width:128px;}\n  [class*=\"PlanDescription\"] {font-size:14px;}\n}\n@media (max-width:389px){\n\n  [class*=\"FooterContent\"]{\n \t\tgap:8px !important; \n\t}\n  [class*=\"FooterContent\"] button{font-size:12px;}\n  [class*=\"LogoContainer\"] img {max-width:116px;}\n  [class*=\"PlanDescription\"] {font-size:12px;}\n}\n\nhtml.optly-hp-care-complete {\n  --optly-hp-blue: #0057b8;\n  --optly-hp-black: #000;\n  --optly-hp-border: #eeedf1;\n  --optly-hp-surface: #faf9fc;\n}\n\nhtml.optly-hp-care-complete header {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n  border: 0 !important;\n  border-bottom: 1px solid #d8d8de !important;\n  box-shadow: 0 1px 0 rgba(15, 17, 20, 0.08) !important;\n  z-index: 40 !important;\n}\n\nhtml.optly-hp-care-complete [class*=\"partner-dark\"] header,\nhtml.optly-hp-care-complete [class*=\"JoyfulLayout\"] header {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete header [class*=\"Container\"],\nhtml.optly-hp-care-complete header [class*=\"Header\"],\nhtml.optly-hp-care-complete header [class*=\"Nav\"],\nhtml.optly-hp-care-complete header [class*=\"Branding\"] {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-header-surface {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete header *:not(a):not(button) {\n  border-color: transparent !important;\n}\n\nhtml.optly-hp-care-complete header a:not(.optly-hp-claims-button):not(.optly-hp-header-signup),\nhtml.optly-hp-care-complete header button:not(.optly-hp-claims-button):not(.optly-hp-header-signup) {\n  border-color: #0f1114 !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete header [class*=\"PrimaryButton\"],\nhtml.optly-hp-care-complete header [class*=\"StyledPrimaryButton\"] {\n  background: #fff !important;\n  background-color: #fff !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete header .optly-hp-header-signin,\nhtml.optly-hp-care-complete header .optly-hp-claims-button {\n  align-items: center !important;\n  box-sizing: border-box !important;\n  border-radius: 999px !important;\n  display: inline-flex !important;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n  height: 40px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  min-width: 104px !important;\n  padding: 0 24px !important;\n  text-decoration: none !important;\n  white-space: nowrap !important;\n}\n\nhtml.optly-hp-care-complete header .optly-hp-header-signin {\n  background: #fff !important;\n  background-color: #fff !important;\n  border: 1px solid #0f1114 !important;\n  border-color: #0f1114 !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-claims-button {\n  align-items: center !important;\n  background: var(--optly-hp-black) !important;\n  border: 1px solid var(--optly-hp-black) !important;\n  border-radius: 999px !important;\n  color: #fff !important;\n  display: inline-flex !important;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n  height: 40px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  margin-left: 12px !important;\n  min-width: 104px !important;\n  padding: 0 24px !important;\n  text-decoration: none !important;\n  white-space: nowrap !important;\n}\n\nhtml.optly-hp-care-complete header .optly-hp-claims-button,\nhtml.optly-hp-care-complete header .optly-hp-claims-button *,\nhtml.optly-hp-care-complete header .optly-hp-header-signup,\nhtml.optly-hp-care-complete header .optly-hp-header-signup * {\n  background: var(--optly-hp-black) !important;\n  background-color: var(--optly-hp-black) !important;\n  color: #fff !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-header-signup {\n  align-items: center !important;\n  background: var(--optly-hp-black) !important;\n  border: 1px solid var(--optly-hp-black) !important;\n  border-radius: 999px !important;\n  color: #fff !important;\n  display: inline-flex !important;\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  height: 40px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  margin-left: 12px !important;\n  padding: 0 24px !important;\n  text-decoration: none !important;\n  white-space: nowrap !important;\n}\n\n\n@media (max-width: 1023px) {\n  #plancards {\n    padding-top: 0 !important;\n  }\n\n  #content-block {\n    gap: var(--aui-spacing-100) !important;\n  }\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-signup {\n  align-items: center !important;\n  background: #0c0e11 !important;\n  border: 1px solid #0c0e11 !important;\n  border-radius: 999px !important;\n  color: #fff !important;\n  cursor: pointer !important;\n  display: inline-flex !important;\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  height: 48px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  min-width: 182px !important;\n  padding: 0 24px !important;\n  text-align: center !important;\n  text-decoration: none !important;\n  vertical-align: middle !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-signup {\n  align-items: center !important;\n  background: #0c0e11 !important;\n  background-color: #0c0e11 !important;\n  border-color: #0c0e11 !important;\n  border-radius: 999px !important;\n  display: inline-flex !important;\n  height: 40px !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  min-width: 120px !important;\n  padding: 0 24px !important;\n}\n\nhtml.optly-hp-care-complete #plancards + div {\n  text-align: center !important;\n}\n\nhtml.optly-hp-care-complete [data-testid=\"calculator\"] {\n  box-sizing: border-box !important;\n  display: grid !important;\n  max-width: 100% !important;\n  padding: 32px 0 0 !important;\n}\n\nhtml.optly-hp-care-complete [data-testid=\"calculator\"] .innerContainer {\n  background: var(--optly-hp-surface) !important;\n  border-radius: 16px !important;\n  box-sizing: border-box !important;\n  display: grid !important;\n  gap: 0 !important;\n  grid-template-columns: 1fr !important;\n  grid-template-rows: auto auto !important;\n  padding: 32px 0 0 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-full-header {\n  box-sizing: border-box !important;\n  display: block !important;\n  grid-column: 1 / -1 !important;\n  grid-row: 1 !important;\n  margin: 0 32px 24px !important;\n  padding: 0 !important;\n  text-align: left !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-left-header {\n  display: none !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-grid {\n  box-sizing: border-box !important;\n  display: grid !important;\n  gap: 18px !important;\n  grid-auto-columns: 146px !important;\n  grid-auto-flow: column !important;\n  grid-column: 1 / -1 !important;\n  grid-row: 2 !important;\n  grid-template-columns: none !important;\n  overflow-x: auto !important;\n  padding: 16px 0 20px 16px !important;\n  scroll-snap-type: x proximity !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block {\n  background: #fff !important;\n  border: 1.8px solid var(--optly-hp-border) !important;\n  border-radius: 7px !important;\n  box-sizing: border-box !important;\n  height: 185px !important;\n  max-width: 146px !important;\n  min-width: 146px !important;\n  scroll-snap-align: start !important;\n  width: 146px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block button {\n  align-items: center !important;\n  box-sizing: border-box !important;\n  height: 31px !important;\n  justify-content: center !important;\n  min-width: 31px !important;\n  padding: 0 !important;\n  width: 31px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block [class*=\"CalculatorBlockControlWrapper\"] {\n  align-items: center !important;\n  box-sizing: border-box !important;\n  display: flex !important;\n  gap: 8px !important;\n  height: 31px !important;\n  justify-content: center !important;\n  margin: 6px auto 8px !important;\n  max-width: 110px !important;\n  padding: 0 !important;\n  width: auto !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-block input {\n  background: transparent !important;\n  background-color: transparent !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  box-sizing: border-box !important;\n  color: #0c0e11 !important;\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  height: 31px !important;\n  line-height: 31px !important;\n  margin: 0 !important;\n  min-width: 24px !important;\n  padding: 0 !important;\n  text-align: center !important;\n  width: 24px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-left-column {\n  background: #fff !important;\n  border-radius: 8px !important;\n  box-sizing: border-box !important;\n  margin: 0 32px 32px !important;\n  padding: 24px !important;\n  text-align: center !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-estimate {\n  background: transparent !important;\n  border-radius: 0 !important;\n  box-sizing: border-box !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  text-align: center !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-footnote {\n  display: block !important;\n  font-size: 11px !important;\n  line-height: 1.3 !important;\n  margin: 18px 0 0 !important;\n  padding: 0 !important;\n  text-align: left !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-total,\nhtml.optly-hp-care-complete [data-testid=\"HP Care Complete-total\"] {\n  background: none !important;\n  background-clip: border-box !important;\n  color: var(--optly-hp-blue) !important;\n  -webkit-background-clip: border-box !important;\n  -webkit-text-fill-color: var(--optly-hp-blue) !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan-card {\n  border-top: 1px solid #ddd !important;\n  margin-top: 18px !important;\n  padding: 18px 0 0 !important;\n  text-align: left !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-eyebrow {\n  color: #36393d !important;\n  font-size: 13px !important;\n  line-height: 1.25 !important;\n  margin: 0 0 2px !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan {\n  color: #0f1114 !important;\n  font-size: 16px !important;\n  line-height: 1.2 !important;\n  margin: 0 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan strong {\n  color: #0f1114 !important;\n  font-weight: 700 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-plan [data-optly-hp-plan-price] {\n  color: #0f1114 !important;\n  font-size: 13px !important;\n  font-weight: 400 !important;\n}\n\nhtml.optly-hp-care-complete .optly-hp-calc-summary {\n  color: #555 !important;\n  font-size: 14px !important;\n  margin: 0 0 16px !important;\n}\n\n\nhtml.optly-hp-care-complete .optly-hp-review-card [class*=\"Comment\"] {\n  height: unset !important;\n}\n\n@media (min-width: 1024px) {\n  html.optly-hp-care-complete [data-testid=\"calculator\"] .innerContainer {\n    grid-template-columns: minmax(0, 534px) minmax(0, 627px) !important;\n    grid-template-rows: 268px 201px !important;\n    justify-content: center !important;\n    margin: 0 auto !important;\n    max-width: 1346px !important;\n    padding: 56px 72px 32px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-full-header {\n    grid-column: 1 !important;\n    grid-row: 1 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-grid {\n    align-self: end !important;\n    grid-column: 1 / -1 !important;\n    grid-row: 2 !important;\n    margin-top: 0 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-left-column {\n    grid-column: 2 !important;\n    grid-row: 1 !important;\n    height: 268px !important;\n    margin: 0 !important;\n    padding: 24px 35px 32px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-estimate {\n    display: block !important;\n    text-align: center !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-summary {\n    display: none !important;\n  }\n}\n\n@media (max-width: 1023px) {\n  html.optly-hp-care-complete header .optly-hp-header-signin,\n  html.optly-hp-care-complete header .optly-hp-claims-button,\n  html.optly-hp-care-complete .optly-hp-claims-button,\n  html.optly-hp-care-complete .optly-hp-header-signup {\n    height: 36px !important;\n    min-width: 88px !important;\n    padding: 0 16px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-claims-button,\n  html.optly-hp-care-complete .optly-hp-header-signup {\n    margin-left: 8px !important;\n  }\n\n  html.optly-hp-care-complete [data-testid=\"calculator\"] .innerContainer {\n    gap: 20px !important;\n    grid-template-rows: auto auto auto !important;\n    padding: 24px 16px !important;\n    width: 100% !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-full-header {\n    margin: 0 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-grid {\n    grid-auto-columns: 146px !important;\n    grid-template-columns: none !important;\n    padding: 0 0 14px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-left-column {\n    margin: 0 !important;\n    padding: 20px 16px !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-estimate {\n    margin: 0 !important;\n  }\n\n  html.optly-hp-care-complete .optly-hp-calc-signup {\n    background: #0c0e11 !important;\n    border-color: #0c0e11 !important;\n    border-radius: 999px !important;\n    height: 40px !important;\n    min-width: 0 !important;\n    width: 100% !important;\n  }\n}\n\n/* Merged hero: hide the native CMS list until it is stable, then hand off. */\nhtml.optly-hp-hero-pending #content-block [class*=\"RichTextWrapper\"] {\n  display: none !important;\n}\n\nhtml.optly-hp-hero-pending #hero-cta-container {\n  margin-top: var(--optly-hp-hero-gap, 160px) !important;\n}\n\n/* Hero typography: native list plus the body portal overlay. */\nhtml.optly-hp-care-complete #content-block [class*=\"RichTextWrapper\"] ul,\nhtml.optly-hp-care-complete #content-block .optly-hp-hero-bullets ul,\nhtml.optly-hp-care-complete body > .optly-hp-hero-bullets ul {\n  margin: 0 !important;\n  padding-left: 24px !important;\n  list-style: disc !important;\n}\n\nhtml.optly-hp-care-complete #content-block [class*=\"RichTextWrapper\"] li,\nhtml.optly-hp-care-complete #content-block .optly-hp-hero-bullets li,\nhtml.optly-hp-care-complete body > .optly-hp-hero-bullets li {\n  padding: 4px 0 !important;\n  margin: 0 !important;\n}\n\nhtml.optly-hp-care-complete #content-block [class*=\"RichTextWrapper\"] li p,\nhtml.optly-hp-care-complete #content-block .optly-hp-hero-bullets li p,\nhtml.optly-hp-care-complete body > .optly-hp-hero-bullets li p {\n  font-size: 18px !important;\n  line-height: 1.3 !important;\n  font-weight: 400 !important;\n  margin: 0 !important;\n}\n\nhtml.optly-hp-care-complete body > .optly-hp-hero-bullets {\n  margin: 0 !important;\n  padding: 0 !important;\n  pointer-events: none !important;\n  color: #0f1114 !important;\n}\n\nhtml.optly-hp-care-complete #content-block button.aui-action-flat[aria-label*=\"expanded plan options\"] {\n  font-size: 16px !important;\n  line-height: 1.5 !important;\n  padding: 8px 0 !important;\n}\n\nhtml.optly-hp-care-complete #content-block button.aui-action-flat[aria-label*=\"expanded plan options\"] span {\n  font-size: 16px !important;\n  line-height: 1.5 !important;\n  font-weight: 400 !important;\n  text-decoration: underline !important;\n}\n\nhtml.optly-hp-care-complete #content-block [class*=\"SubHeadline\"] {\n  font-size: 20px !important;\n  line-height: 1.3 !important;\n  margin-top: 0 !important;\n}\n\nhtml.optly-hp-care-complete #hero-cta-container {\n  gap: 24px !important;\n}\n\n@media (min-width: 1024px) {\n  html.optly-hp-care-complete #content-block h1 {\n    font-size: 48px !important;\n    line-height: 1.1 !important;\n    font-weight: 700 !important;\n  }\n}</style>"}, {"dependencies": [], "id": "d65d336a-e1ba-49ee-a23d-b14303d44347", "type": "custom_code", "value": function($){(function () {
  const RUNTIME_KEY = '__optlyHpCareCompleteEnrollRuntime';
  const existingRuntime = window[RUNTIME_KEY];

  if (existingRuntime && existingRuntime.scheduleApply) {
    if (existingRuntime.rewatch) existingRuntime.rewatch();
    existingRuntime.scheduleApply(0);
    return;
  }

  if (existingRuntime && existingRuntime.active) return;

  const runtime = window[RUNTIME_KEY] = { active: true };

  const CONFIG = {
    pagePaths: [
      '/program/hp-care-complete-warranty-expiration-enroll',
      '/program/hp-care-complete-warranty-expiration-enroll/',
      '/program/hp-care-complete-cp-expiration-enroll',
      '/program/hp-care-complete-cp-expiration-enroll/'
    ],
    plpPagePaths: [
      '/program/hp-care-complete-warranty-expiration-enroll',
      '/program/hp-care-complete-warranty-expiration-enroll/',
      '/program/hp-care-complete-cp-expiration-enroll',
      '/program/hp-care-complete-cp-expiration-enroll/'
    ],
    rootClass: 'optly-hp-care-complete',
    heroPendingClass: 'optly-hp-hero-pending',
    heroPagePaths: [],
    heroItems: [
      'Cover 1 HP computer and select PC accessories',
      '$0 repairs and hassle-free replacements',
      'Live tech support from HP experts',
      '$0 laptop cleanings and PC tune-ups',
      'No hidden fees, cancel anytime'
    ],
    claimsHref: '/claims/hp-care-complete/',
    signupHref: '/cart/hpcare/purchase/create?plan=HPBASE',
    selectors: {
      header: 'header',
      headerPrimaryButton: 'header [data-testid="primary-button"]',
      planRoot: '#plancards',
      planCard: '#plancards [class*="PlanCardContainer"]',
      planInner: '[class*="InnerContainer"]',
      planHeader: '[class*="Header"]',
      planActions: '[class*="ActionsContainer"]',
      calculator: '[data-testid="calculator"], #atc-calculator',
      calculatorTotal: '[data-testid="HP Care Complete-total"]',
      calcBlock: '[data-testid="calc-block"]',
      calcFullHeader: '[class*="CalculatorFullWidthHeader"]',
      calcGrid: '[class*="CalculatorGrid"]',
      calcLeftColumn: '[class*="CalculatorLeftColumn"]',
      calcLeftHeader: '[class*="CalculatorLeftColumnHeader"]',
      calcEstimateBlock: '[class*="CalculatorEstimateBlock"]',
      reviewCard: '[data-testid="commentcard"]'
    },
    planMap: {
      individual: {
        label: 'HP Care Complete Individual',
        price: '$6.99/monthly + tax',
        selectorText: /for just you|individual/i
      },
      family: {
        label: 'HP Care Complete Family',
        price: '$17.99/monthly + tax',
        selectorText: /for more of your tech|for your household|family/i
      },
      wholeHome: {
        label: 'HP Care Complete Whole Home',
        price: '$24.99/monthly + tax',
        selectorText: /for nearly everything|for your connected home|whole home/i
      }
    }
  };

  const state = Object.assign(runtime, {
    documentObserver: null,
    calculatorObserver: null,
    resizeListener: false,
    scheduled: false,
    hydrated: false,
    headerRaf: null,
    updatingHeader: false,
    reactRootChild: null,
    plpHydrationArmed: false,
    hero: {
      injectedList: null,
      nativeStableSince: 0,
      nativeFingerprint: '',
      recheckTimer: null,
      pumpRaf: null,
      positionRaf: null,
      pumping: false,
      handedOff: false
    }
  });

  function isTargetPage() {
    return CONFIG.pagePaths.indexOf(window.location.pathname) !== -1;
  }

  function isPlpPage() {
    return CONFIG.plpPagePaths.indexOf(window.location.pathname) !== -1;
  }

  function isHeroPage() {
    return CONFIG.heroPagePaths.indexOf(window.location.pathname) !== -1;
  }

  function text(el) {
    return (el && (el.innerText || el.textContent) || '').replace(/\s+/g, ' ').trim();
  }

  function setImportant(el, styles) {
    if (!el) return;
    Object.keys(styles).forEach((prop) => {
      if (styles[prop] == null) return;
      if (el.style.getPropertyValue(prop) === styles[prop] && el.style.getPropertyPriority(prop) === 'important') return;
      el.style.setProperty(prop, styles[prop], 'important');
    });
  }

  function setText(el, value) {
    if (!el || el.textContent === value) return;
    el.textContent = value;
  }

  function scheduleApply(delay) {
    if (state.scheduled) return;
    state.scheduled = true;
    window.setTimeout(() => {
      state.scheduled = false;
      applyChanges();
    }, delay || 100);
  }

  state.scheduleApply = scheduleApply;

  function addRootClass() {
    const root = document.documentElement;
    if (!root || !root.classList) return;
    root.classList.toggle(CONFIG.rootClass, isTargetPage());
  }

  function paintHeaderSurface(header) {
    if (!header) return;
    setImportant(header, {
      background: '#fff',
      'background-color': '#fff',
      color: '#0f1114',
      'z-index': '40'
    });
  }

  function noteReactRecook() {
    const root = document.getElementById('root');
    if (!root) return;
    const child = root.firstElementChild;
    if (!child) return;
    if (state.reactRootChild && child !== state.reactRootChild) {
      state.hydrated = true;
    }
    state.reactRootChild = child;
  }

  function armPlpHydration() {
    if (isHeroPage() || state.hydrated || state.plpHydrationArmed) return;
    state.plpHydrationArmed = true;
    const finish = () => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          if (isHeroPage() || state.hydrated) return;
          state.hydrated = true;
          applyChanges();
        });
      });
    };
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
  }

  function isHydrated() {
    if (state.hydrated) return true;
    noteReactRecook();
    if (findNativeHeroList()) {
      state.hydrated = true;
      return true;
    }
    return false;
  }

  function isLocallyDisplayed(el) {
    if (!el) return false;
    let node = el;
    while (node && node.nodeType === 1) {
      if (node.tagName === 'HEADER') break;
      const style = window.getComputedStyle(node);
      if (style.display === 'none') return false;
      node = node.parentElement;
    }
    return true;
  }

  function getSignInAction(header) {
    const actions = Array.from(header.querySelectorAll('a, button')).filter((el) => (
      !el.closest('.optly-hp-claims-button')
      && !el.classList.contains('optly-hp-header-signup')
      && /sign in/i.test(text(el) + ' ' + (el.getAttribute('aria-label') || ''))
    ));
    return actions.find(isLocallyDisplayed) || actions[0] || null;
  }

  function getClaimsInsertionTarget(signInAction) {
    if (!signInAction) return null;
    const action = signInAction.closest('[data-testid="primary-button"]') || signInAction;
    const parent = action.parentElement;
    if (!parent || parent.tagName === 'HEADER') return action;
    return parent;
  }

  function removeStaleHeaderPortals() {
    document.querySelectorAll('body > .optly-hp-header-actions-portal').forEach((el) => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
  }

  function applyFilledHeaderCta(cta) {
    setImportant(cta, {
      background: '#000',
      'background-color': '#000',
      border: '1px solid #000',
      color: '#fff',
      display: 'inline-flex'
    });
  }

  function paintHeaderLink(cta, className, href, label) {
    if (!cta) return;
    cta.classList.add(className);
    if (cta.getAttribute('href') !== href) cta.setAttribute('href', href);
    if (cta.getAttribute('aria-label') !== label) cta.setAttribute('aria-label', label);
    setText(cta, label);
    applyFilledHeaderCta(cta);
  }

  function updateHeaderPlpSignup(header) {
    header.querySelectorAll('.optly-hp-claims-button').forEach((el) => el.remove());

    const signInActions = Array.from(header.querySelectorAll('a, button')).filter((el) => (
      !el.classList.contains('optly-hp-header-signup')
      && /sign in/i.test(text(el) + ' ' + (el.getAttribute('aria-label') || ''))
    ));

    if (signInActions.length === 0) {
      let cta = header.querySelector('.optly-hp-header-signup');
      if (!cta) {
        cta = document.createElement('a');
        header.appendChild(cta);
      }
      paintHeaderLink(cta, 'optly-hp-header-signup', CONFIG.signupHref, 'Sign up');
      return;
    }

    signInActions.forEach((signInAction) => {
      let cta = signInAction.previousElementSibling;
      if (!cta || !cta.classList.contains('optly-hp-header-signup')) {
        cta = document.createElement('a');
        signInAction.insertAdjacentElement('beforebegin', cta);
      }
      paintHeaderLink(cta, 'optly-hp-header-signup', CONFIG.signupHref, 'Sign up');
      setImportant(signInAction, { display: 'none' });
      if (signInAction.getAttribute('aria-hidden') !== 'true') {
        signInAction.setAttribute('aria-hidden', 'true');
      }
    });
  }

  function updateHeaderClaimsCta() {
    if (state.updatingHeader) return;
    state.updatingHeader = true;
    try {
      removeStaleHeaderPortals();

      const header = document.querySelector(CONFIG.selectors.header);
      if (!header) return;

      if (isPlpPage()) {
        updateHeaderPlpSignup(header);
        return;
      }

      paintHeaderSurface(header);

      const signInAction = getSignInAction(header);
      if (signInAction) signInAction.classList.add('optly-hp-header-signin');

      const claimsButtons = Array.from(header.querySelectorAll('.optly-hp-claims-button'));
      let cta = claimsButtons[0] || null;
      const existingClaimLink = Array.from(header.querySelectorAll('a, button')).find((el) => (
        el !== cta
        && !el.classList.contains('optly-hp-header-signup')
        && /claim/i.test(text(el) + ' ' + (el.getAttribute('href') || '') + ' ' + (el.getAttribute('aria-label') || ''))
      ));

      if (!cta && existingClaimLink && existingClaimLink.tagName.toLowerCase() === 'a') {
        cta = existingClaimLink;
      }

      const insertionTarget = getClaimsInsertionTarget(signInAction)
        || document.querySelector(CONFIG.selectors.headerPrimaryButton)
        || header;

      if (!cta) {
        cta = document.createElement('a');
        if (insertionTarget === header) header.appendChild(cta);
        else insertionTarget.insertAdjacentElement('afterend', cta);
      } else if (insertionTarget !== header && cta.previousElementSibling !== insertionTarget) {
        insertionTarget.insertAdjacentElement('afterend', cta);
      }

      claimsButtons.forEach((el) => {
        if (el !== cta && el.parentNode) el.parentNode.removeChild(el);
      });

      cta.classList.add('optly-hp-claims-button');
      if (cta.getAttribute('href') !== CONFIG.claimsHref) cta.setAttribute('href', CONFIG.claimsHref);
      if (cta.getAttribute('aria-label') !== 'Claims') cta.setAttribute('aria-label', 'Claims');
      if (cta.textContent !== 'Claims') cta.textContent = 'Claims';
    } finally {
      Promise.resolve().then(() => {
        state.updatingHeader = false;
      });
    }
  }

  function markPlanCards() {
    // V2 intentionally leaves plan cards untagged so legacy card CSS cannot reapply.
  }

  function markReviews() {
    document.querySelectorAll(CONFIG.selectors.reviewCard).forEach((card) => {
      card.classList.add('optly-hp-review-card');
    });
  }

  function wrapCalculator(calc) {
    if (!calc || calc.querySelector(':scope > .innerContainer')) return;

    const container = document.createElement('div');
    container.className = 'innerContainer optly-hp-calc-inner';
    Array.from(calc.classList).forEach((className) => container.classList.add(className));
    calc.className = '';

    while (calc.firstChild) {
      container.appendChild(calc.firstChild);
    }
    calc.appendChild(container);
  }

  function getCalculatorItems(calc) {
    return Array.from(calc.querySelectorAll('input')).map((input) => {
      const rawName = input.id || input.name || input.getAttribute('data-testid') || '';
      const value = Math.max(0, parseInt(input.value, 10) || 0);
      const block = input.closest(CONFIG.selectors.calcBlock);
      const normalized = `${rawName} ${text(block)}`.toLowerCase();
      let deviceType = 'other';

      if (normalized.includes('laptop') || normalized.includes('desktop')) {
        deviceType = 'computer';
      } else if (normalized.includes('monitor')) {
        deviceType = 'monitor';
      } else if (normalized.includes('printer')) {
        deviceType = 'printer';
      } else if (normalized.includes('headphone')) {
        deviceType = 'headphone';
      }

      return { input, rawName, value, deviceType };
    });
  }

  function getPlanTier(items) {
    const computerCount = items
      .filter((item) => item.deviceType === 'computer')
      .reduce((sum, item) => sum + item.value, 0);
    const peripheralCounts = ['monitor', 'printer', 'headphone'].map((deviceType) => (
      items
        .filter((item) => item.deviceType === deviceType)
        .reduce((sum, item) => sum + item.value, 0)
    ));
    const hasUnsupportedSelected = items.some((item) => item.deviceType === 'other' && item.value >= 1);
    const peripheralLimit = computerCount <= 1 ? 1 : computerCount;
    const exceedsPeripheralLimit = peripheralCounts.some((count) => count > peripheralLimit);

    if (hasUnsupportedSelected || exceedsPeripheralLimit) return 'wholeHome';
    if (computerCount <= 1) return 'individual';
    if (computerCount <= 3) return 'family';
    return 'wholeHome';
  }

  function getPlanButton(tier) {
    const config = CONFIG.planMap[tier] || CONFIG.planMap.individual;
    const cards = Array.from(document.querySelectorAll(CONFIG.selectors.planCard));
    const card = cards.find((candidate) => config.selectorText.test(text(candidate)));
    return card && Array.from(card.querySelectorAll('button, a')).find((el) => /sign up/i.test(text(el) + ' ' + (el.getAttribute('aria-label') || '')));
  }

  function ensureRecommendationCard(calc, totalEl) {
    let card = calc.querySelector('.optly-hp-calc-plan-card');
    if (card || !totalEl) return card;

    card = document.createElement('div');
    card.className = 'optly-hp-calc-plan-card';
    card.innerHTML = [
      '<p class="optly-hp-calc-eyebrow">For you, we recommend:</p>',
      '<p class="optly-hp-calc-plan"><strong data-optly-hp-plan-label>HP Care Complete Individual</strong> <span data-optly-hp-plan-price>$6.99/month + tax</span></p>',
      '<p class="optly-hp-calc-summary" data-optly-hp-plan-summary>Select your devices to find the right plan.</p>',
      '<button type="button" class="optly-hp-calc-signup">Sign up</button>'
    ].join('');

    totalEl.insertAdjacentElement('afterend', card);
    card.querySelector('.optly-hp-calc-signup').addEventListener('click', () => {
      const tier = calc.getAttribute('data-optly-hp-plan-tier') || 'individual';
      const planButton = getPlanButton(tier);
      if (planButton) {
        planButton.click();
      } else {
        const planRoot = document.querySelector(CONFIG.selectors.planRoot);
        if (planRoot) planRoot.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    return card;
  }

  function updateCalculatorRecommendation(calc) {
    const totalEl = calc.querySelector(CONFIG.selectors.calculatorTotal);
    if (!totalEl) return;

    const items = getCalculatorItems(calc);
    const tier = getPlanTier(items);
    const plan = CONFIG.planMap[tier] || CONFIG.planMap.individual;
    const selectedDeviceCount = items.reduce((sum, item) => sum + item.value, 0);
    const card = ensureRecommendationCard(calc, totalEl);

    if (calc.getAttribute('data-optly-hp-plan-tier') !== tier) {
      calc.setAttribute('data-optly-hp-plan-tier', tier);
    }
    totalEl.classList.add('optly-hp-calc-total');

    if (!card) return;
    const label = card.querySelector('[data-optly-hp-plan-label]');
    const price = card.querySelector('[data-optly-hp-plan-price]');
    const summary = card.querySelector('[data-optly-hp-plan-summary]');

    setText(label, plan.label);
    setText(price, plan.price);
    if (summary) {
      setText(summary, tier === 'wholeHome'
        ? 'Whole Home covers laptops, desktops, and eligible home tech.'
        : selectedDeviceCount === 0
          ? 'No devices are selected yet.'
          : `${selectedDeviceCount} eligible ${selectedDeviceCount === 1 ? 'device is' : 'devices are'} selected.`);
    }
  }

  function normalizeCalculatorStructure(calc, pieces) {
    const inner = calc && calc.querySelector(':scope > .innerContainer');
    if (!inner) return;

    [pieces.fullHeader, pieces.leftColumn, pieces.grid].forEach((piece) => {
      if (piece && piece.parentElement !== inner) {
        inner.appendChild(piece);
      }
    });

    const promoted = [pieces.fullHeader, pieces.leftColumn, pieces.grid].filter(Boolean);
    Array.from(inner.children).forEach((child) => {
      if (!promoted.includes(child)) {
        child.classList.add('optly-hp-calc-layout-pass-through');
        setImportant(child, {
          display: 'contents'
        });
      }
    });
  }

  function applyCalculatorLayout(calc, pieces) {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    const inner = calc.querySelector(':scope > .innerContainer');

    setImportant(calc, {
      'box-sizing': 'border-box',
      display: 'grid',
      'max-width': '100%',
      padding: '32px 0 0'
    });

    setImportant(inner, {
      background: '#faf9fc',
      'border-radius': '16px',
      'box-sizing': 'border-box',
      display: 'grid',
      gap: isDesktop ? '56px 41px' : '20px',
      margin: isDesktop ? '0 auto' : '0',
      'max-width': isDesktop ? '1346px' : '100%',
      width: '100%',
      padding: isDesktop ? '56px 72px 32px' : '24px 16px',
      'grid-template-columns': isDesktop ? 'minmax(0, 534px) minmax(0, 627px)' : '1fr',
      'grid-template-rows': isDesktop ? '268px 201px' : 'auto auto auto',
      'justify-content': isDesktop ? 'center' : 'stretch'
    });

    setImportant(pieces.fullHeader, {
      'box-sizing': 'border-box',
      display: 'block',
      'grid-column': isDesktop ? '1' : '1 / -1',
      'grid-row': '1',
      'align-self': isDesktop ? 'center' : 'auto',
      height: isDesktop ? '167px' : 'auto',
      'min-height': '0',
      'max-height': isDesktop ? '167px' : 'none',
      margin: '0',
      padding: '0',
      'text-align': 'left'
    });

    if (pieces.fullHeader) {
      const headerText = pieces.fullHeader.querySelector('[class*="CalculatorHeaderText"]') || pieces.fullHeader.firstElementChild;
      const subheaderText = pieces.fullHeader.querySelector('[class*="CalculatorSubheaderText"]') || pieces.fullHeader.children[1];

      setImportant(headerText, {
        margin: isDesktop ? '0 0 12px' : '0 0 10px',
        padding: '0',
        'font-size': isDesktop ? '48px' : '24px',
        'line-height': isDesktop ? '1' : '1.08'
      });

      setImportant(subheaderText, {
        margin: '0',
        padding: '0',
        'font-size': isDesktop ? '16px' : '12px',
        'line-height': isDesktop ? '1.35' : '1.35',
        'max-width': isDesktop ? '560px' : '100%'
      });

      setImportant(pieces.fullHeader.children[2], {
        margin: isDesktop ? '18px 0 0' : '12px 0 0',
        padding: '0',
        'font-size': isDesktop ? '11px' : '7px',
        'line-height': '1.35'
      });
    }

    setImportant(pieces.leftHeader, {
      display: 'none'
    });

    setImportant(pieces.grid, {
      'box-sizing': 'border-box',
      display: 'grid',
      gap: '18px',
      'grid-auto-flow': 'column',
      'grid-auto-columns': '146px',
      'grid-template-columns': 'none',
      'grid-column': isDesktop ? '1 / -1' : '1',
      'grid-row': '2',
      'align-self': isDesktop ? 'end' : 'auto',
      height: isDesktop ? '201px' : 'auto',
      margin: '0',
      overflow: 'auto hidden',
      'overflow-x': 'auto',
      padding: isDesktop ? '0 0 16px' : '0 0 14px',
      'scroll-snap-type': 'x proximity'
    });

    setImportant(pieces.leftColumn, {
      background: '#fff',
      'border-radius': '8px',
      'box-sizing': 'border-box',
      'box-shadow': isDesktop ? '0 2px 8px rgba(15, 17, 20, 0.08)' : 'none',
      'grid-column': isDesktop ? '2' : '1',
      'grid-row': isDesktop ? '1' : '3',
      height: isDesktop ? '268px' : 'auto',
      margin: '0',
      padding: isDesktop ? '24px 35px 32px' : '20px 16px',
      overflow: 'hidden',
      'text-align': 'center'
    });

    setImportant(pieces.estimateBlock, {
      background: 'transparent',
      'border-radius': '0',
      'box-sizing': 'border-box',
      display: 'block',
      margin: '0',
      padding: '0',
      'text-align': 'center'
    });

    if (pieces.estimateBlock) {
      const total = pieces.estimateBlock.querySelector(CONFIG.selectors.calculatorTotal);
      const label = pieces.estimateBlock.querySelector('[data-optly-hp-plan-label]');
      const price = pieces.estimateBlock.querySelector('[data-optly-hp-plan-price]');
      const summary = pieces.estimateBlock.querySelector('[data-optly-hp-plan-summary]');
      const signup = pieces.estimateBlock.querySelector('.optly-hp-calc-signup');
      const planCard = pieces.estimateBlock.querySelector('.optly-hp-calc-plan-card');

      setImportant(total, {
        background: 'none',
        'background-clip': 'border-box',
        color: 'var(--optly-hp-blue)',
        margin: '0 0 4px',
        padding: '0',
        'font-size': isDesktop ? '50px' : '30px',
        'line-height': '1.1',
        'font-weight': '700',
        'text-align': 'center',
        '-webkit-background-clip': 'border-box',
        '-webkit-text-fill-color': 'var(--optly-hp-blue)'
      });

      setImportant(planCard, {
        'box-sizing': 'border-box',
        margin: isDesktop ? '18px 0 0' : '16px 0 0',
        padding: isDesktop ? '18px 0 0' : '14px 0 0',
        'border-top': '1px solid #ddd',
        'border-left': '0',
        'text-align': 'left'
      });

      setImportant(label, {
        display: 'inline',
        'font-size': isDesktop ? '16px' : '12px',
        'line-height': '1.2',
        margin: '0',
        color: '#0f1114'
      });

      setImportant(price, {
        display: 'inline',
        'font-size': isDesktop ? '13px' : '10px',
        'line-height': '1.2',
        color: '#0f1114',
        'font-weight': '400'
      });

      setImportant(summary, {
        display: isDesktop ? 'none' : 'block',
        'font-size': isDesktop ? '10px' : '9px',
        'line-height': '1.25',
        margin: '0 0 10px'
      });

      setImportant(signup, {
        background: '#0c0e11',
        'background-color': '#0c0e11',
        border: '1px solid #0c0e11',
        'border-radius': '999px',
        color: '#fff',
        display: 'inline-flex',
        'align-items': 'center',
        height: '40px',
        'justify-content': 'center',
        'line-height': '1',
        'min-width': isDesktop ? '120px' : '0',
        width: isDesktop ? 'auto' : '100%',
        padding: '0 24px',
        margin: '8px 0 0',
        'text-align': 'center',
        'vertical-align': 'middle'
      });
    }

    if (pieces.leftColumn || pieces.fullHeader) {
      const footnoteSources = [
        pieces.leftColumn,
        pieces.fullHeader
      ].filter(Boolean);
      const footnote = footnoteSources.reduce((match, source) => (
        match || Array.from(source.children).find((child) => /total device value/i.test(text(child)))
      ), null);

      if (footnote) {
        footnote.classList.add('optly-hp-calc-footnote');
        if (pieces.fullHeader && footnote.parentElement !== pieces.fullHeader) {
          pieces.fullHeader.appendChild(footnote);
        }
        setImportant(footnote, {
          display: 'block',
          margin: isDesktop ? '18px 0 0' : '12px 0 0',
          padding: '0',
          'font-size': isDesktop ? '11px' : '7px',
          'line-height': '1.3'
        });
      }
    }
  }

  function applyCalculatorBlockLayout(block) {
    const content = block.querySelector('[class*="CalculatorBlockContent"]');
    const imageWrapper = block.querySelector('[class*="CalculatorBlockImageWrapper"]');
    const picture = block.querySelector('picture');
    const img = block.querySelector('img');
    const label = block.querySelector('[class*="CalculatorBlockLabel"]');
    const controls = block.querySelector('[class*="CalculatorBlockControlWrapper"]');
    const valueInput = controls && controls.querySelector('input');

    setImportant(block, {
      background: '#fff',
      border: '1.8px solid #eeedf1',
      'border-radius': '7px',
      'box-sizing': 'border-box',
      width: '146px',
      'min-width': '146px',
      height: '185px',
      'min-height': '185px',
      'max-height': '185px',
      'max-width': '146px',
      overflow: 'hidden',
      'scroll-snap-align': 'start'
    });

    setImportant(content, {
      display: 'flex',
      'flex-direction': 'column',
      height: '140px',
      padding: '0',
      margin: '0'
    });

    setImportant(imageWrapper, {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      height: '92px',
      width: '100%',
      padding: '8px 0 0',
      margin: '0'
    });

    setImportant(picture, {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      height: '72px',
      width: '100%',
      margin: '0 auto'
    });

    setImportant(img, {
      'max-height': '64px',
      'max-width': '86px',
      width: 'auto',
      height: 'auto',
      'object-fit': 'contain'
    });

    setImportant(label, {
      'font-size': '12px',
      'line-height': '1.2',
      margin: '0',
      padding: '0 8px',
      'min-height': '30px',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'text-align': 'center'
    });

    setImportant(controls, {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      gap: '8px',
      'box-sizing': 'border-box',
      height: '31px',
      width: 'auto',
      'max-width': '110px',
      margin: '6px auto 8px',
      padding: '0'
    });

    setImportant(valueInput, {
      background: 'transparent',
      'background-color': 'transparent',
      border: '0',
      'border-radius': '0',
      'box-sizing': 'border-box',
      color: '#0c0e11',
      'font-size': '16px',
      'font-weight': '700',
      height: '31px',
      'line-height': '31px',
      margin: '0',
      padding: '0',
      'text-align': 'center',
      width: '24px',
      'min-width': '24px'
    });
  }

  function initCalculator() {
    const calc = document.querySelector(CONFIG.selectors.calculator);
    if (!calc) return;

    if (calc.getAttribute('data-atc-calc') !== 'main') {
      calc.setAttribute('data-atc-calc', 'main');
    }
    wrapCalculator(calc);
    calc.classList.add('optly-hp-calculator');

    const fullHeader = calc.querySelector(CONFIG.selectors.calcFullHeader);
    const grid = calc.querySelector(CONFIG.selectors.calcGrid);
    const leftColumn = calc.querySelector(CONFIG.selectors.calcLeftColumn);
    const leftHeader = calc.querySelector(CONFIG.selectors.calcLeftHeader);
    const estimateBlock = calc.querySelector(CONFIG.selectors.calcEstimateBlock);

    if (fullHeader) fullHeader.classList.add('optly-hp-calc-full-header');
    if (grid) grid.classList.add('optly-hp-calc-grid');
    if (leftColumn) leftColumn.classList.add('optly-hp-calc-left-column');
    if (leftHeader) leftHeader.classList.add('optly-hp-calc-left-header');
    if (estimateBlock) estimateBlock.classList.add('optly-hp-calc-estimate');

    normalizeCalculatorStructure(calc, {
      fullHeader,
      grid,
      leftColumn,
      leftHeader,
      estimateBlock
    });

    applyCalculatorLayout(calc, {
      fullHeader,
      grid,
      leftColumn,
      leftHeader,
      estimateBlock
    });

    calc.querySelectorAll(CONFIG.selectors.calcBlock).forEach((block) => {
      block.classList.add('optly-hp-calc-block');
      applyCalculatorBlockLayout(block);
    });

    updateCalculatorRecommendation(calc);

    if (!calc.dataset.optlyHpListeners) {
      calc.addEventListener('input', () => scheduleApply(50), true);
      calc.addEventListener('change', () => scheduleApply(50), true);
      calc.addEventListener('click', () => scheduleApply(150), true);
      calc.dataset.optlyHpListeners = 'true';
    }

    if (!state.calculatorObserver) {
      state.calculatorObserver = new MutationObserver(() => scheduleApply(50));
      state.calculatorObserver.observe(calc, { childList: true, characterData: true, subtree: true, attributes: true, attributeFilter: ['value', 'aria-label', 'disabled'] });
    }
  }

  function normalizeHeroText(value) {
    return (value || '').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function nativeListFingerprint(ul) {
    return normalizeHeroText(ul && ul.textContent);
  }

  function nativeListHasExpectedItems(ul) {
    const haystack = nativeListFingerprint(ul);
    if (!haystack) return false;
    return CONFIG.heroItems.every((item) => haystack.indexOf(normalizeHeroText(item)) !== -1);
  }

  function findNativeHeroList() {
    const block = document.querySelector('#content-block');
    if (!block) return null;
    const lists = Array.from(block.querySelectorAll('[class*="RichTextWrapper"] ul'));
    for (let i = 0; i < lists.length; i++) {
      const ul = lists[i];
      if (ul.closest('.optly-hp-hero-bullets')) continue;
      if (nativeListHasExpectedItems(ul)) return ul;
    }
    return null;
  }

  function createInjectedHeroList() {
    const wrap = document.createElement('div');
    wrap.className = 'optly-hp-hero-bullets';
    wrap.setAttribute('data-optly-hp-hero-portal', 'true');
    const ul = document.createElement('ul');
    CONFIG.heroItems.forEach((item) => {
      const li = document.createElement('li');
      const p = document.createElement('p');
      p.textContent = item;
      li.appendChild(p);
      ul.appendChild(li);
    });
    wrap.appendChild(ul);
    return wrap;
  }

  function connectedInjectedList() {
    return (state.hero.injectedList && state.hero.injectedList.isConnected) ? state.hero.injectedList : null;
  }

  function positionHeroPortal(list) {
    const block = document.querySelector('#content-block');
    if (!list || !block) return;

    const sub = block.querySelector('[class*="SubHeadline"]')
      || (block.querySelector('h1') && block.querySelector('h1').nextElementSibling);
    const ref = sub || block.querySelector('h1') || block;
    const refRect = ref.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft || 0;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

    list.style.position = 'absolute';
    list.style.left = Math.round(refRect.left + scrollX) + 'px';
    list.style.top = Math.round(refRect.bottom + scrollY + 8) + 'px';
    list.style.width = Math.round(Math.max(refRect.width, 240)) + 'px';
    list.style.zIndex = '3';
    list.style.boxSizing = 'border-box';
    list.style.pointerEvents = 'none';
    list.style.margin = '0';
    list.style.padding = '0';

    const gap = Math.max(list.offsetHeight + 16, 48);
    document.documentElement.style.setProperty('--optly-hp-hero-gap', gap + 'px');
  }

  function insertHeroPortal() {
    const list = (state.hero.injectedList && state.hero.injectedList.nodeType === 1)
      ? state.hero.injectedList
      : createInjectedHeroList();
    state.hero.injectedList = list;
    if (list.parentNode && list.parentNode !== document.body) {
      list.parentNode.removeChild(list);
    }
    if (list.parentNode !== document.body && document.body) {
      document.body.appendChild(list);
    }
    positionHeroPortal(list);
    if (!state.hero.positionRaf) {
      state.hero.positionRaf = window.requestAnimationFrame(() => {
        state.hero.positionRaf = null;
        if (state.hero.injectedList && !state.hero.handedOff) {
          positionHeroPortal(state.hero.injectedList);
        }
      });
    }
  }

  function resetHero() {
    if (state.hero.recheckTimer) {
      window.clearTimeout(state.hero.recheckTimer);
      state.hero.recheckTimer = null;
    }
    if (state.hero.pumpRaf) {
      window.cancelAnimationFrame(state.hero.pumpRaf);
      state.hero.pumpRaf = null;
    }
    if (state.hero.positionRaf) {
      window.cancelAnimationFrame(state.hero.positionRaf);
      state.hero.positionRaf = null;
    }
    state.hero.pumping = false;
    const list = state.hero.injectedList;
    if (list && list.parentNode) list.parentNode.removeChild(list);
    const root = document.documentElement;
    if (root && root.classList) root.classList.remove(CONFIG.heroPendingClass);
    if (root && root.style) root.style.removeProperty('--optly-hp-hero-gap');
    state.hero.injectedList = null;
    state.hero.nativeStableSince = 0;
    state.hero.nativeFingerprint = '';
    state.hero.handedOff = false;
  }

  function scheduleHeroRecheck() {
    if (state.hero.recheckTimer || state.hero.handedOff) return;
    state.hero.recheckTimer = window.setTimeout(() => {
      state.hero.recheckTimer = null;
      inspectHeroHandoff();
    }, 250);
  }

  function handoffToNative() {
    if (state.hero.handedOff) return;
    const list = state.hero.injectedList;
    if (list && list.parentNode) list.parentNode.removeChild(list);
    const root = document.documentElement;
    if (root && root.classList) root.classList.remove(CONFIG.heroPendingClass);
    if (root && root.style) root.style.removeProperty('--optly-hp-hero-gap');
    state.hero.injectedList = null;
    state.hero.handedOff = true;
    state.hero.nativeStableSince = 0;
    state.hero.nativeFingerprint = '';
    state.hydrated = true;
  }

  function inspectHeroHandoff() {
    if (state.hero.handedOff || !state.hero.injectedList) return;
    const native = findNativeHeroList();
    if (!native) {
      state.hero.nativeStableSince = 0;
      state.hero.nativeFingerprint = '';
      return;
    }
    const fingerprint = nativeListFingerprint(native);
    const now = Date.now();
    if (fingerprint !== state.hero.nativeFingerprint) {
      state.hero.nativeFingerprint = fingerprint;
      state.hero.nativeStableSince = now;
      scheduleHeroRecheck();
      return;
    }
    if (!state.hero.nativeStableSince) {
      state.hero.nativeStableSince = now;
      scheduleHeroRecheck();
      return;
    }
    if (now - state.hero.nativeStableSince < 250) {
      scheduleHeroRecheck();
      return;
    }
    handoffToNative();
  }

  function startHeroPump() {
    if (state.hero.pumping || state.hero.handedOff) return;
    state.hero.pumping = true;
    function tick() {
      applyHero();
      if (state.hero.handedOff) {
        state.hero.pumping = false;
        state.hero.pumpRaf = null;
        return;
      }
      state.hero.pumpRaf = window.requestAnimationFrame(tick);
    }
    tick();
  }

  function applyHero() {
    if (!isHeroPage()) {
      resetHero();
      return;
    }
    if (state.hero.handedOff) return;

    const root = document.documentElement;
    const block = document.querySelector('#content-block');
    if (!block) {
      startHeroPump();
      return;
    }

    const native = findNativeHeroList();
    const injected = connectedInjectedList();

    if (native && !injected) {
      if (root) root.classList.remove(CONFIG.heroPendingClass);
      if (root && root.style) root.style.removeProperty('--optly-hp-hero-gap');
      state.hero.injectedList = null;
      state.hero.handedOff = true;
      state.hydrated = true;
      return;
    }

    insertHeroPortal();
    if (root) root.classList.add(CONFIG.heroPendingClass);
    inspectHeroHandoff();
  }

  function applyInTreeChanges() {
    updateHeaderClaimsCta();
    markPlanCards();
    markReviews();
    initCalculator();
  }

  function scheduleHeaderRaf() {
    if (state.headerRaf) return;
    state.headerRaf = window.requestAnimationFrame(() => {
      state.headerRaf = null;
      if (!isTargetPage()) return;
      applyHero();
      updateHeaderClaimsCta();
      const list = connectedInjectedList();
      if (list) positionHeroPortal(list);
    });
  }

  function isOwnHeaderEdit(node) {
    if (!node) return false;
    if (node.nodeType !== 1) return isOwnHeaderEdit(node.parentElement);
    if (!node.classList) return false;
    return node.classList.contains('optly-hp-hero-bullets')
      || node.classList.contains('optly-hp-header-signup')
      || node.classList.contains('optly-hp-claims-button');
  }

  function mutationTouchesHeaderOrHero(mutation) {
    if (isOwnHeaderEdit(mutation.target)) return false;

    function interesting(node, allowQuery) {
      if (!node || node.nodeType !== 1) return false;
      if (node.classList && (
        node.classList.contains('optly-hp-hero-bullets')
        || node.classList.contains('optly-hp-header-signup')
        || node.classList.contains('optly-hp-claims-button')
      )) return false;
      if (node.id === 'content-block' || node.id === 'root' || node.tagName === 'HEADER') return true;
      const cls = String(node.className || '');
      if (cls.indexOf('JoyfulLayout') !== -1) return true;
      if (node !== document.body && node !== document.documentElement && node.closest) {
        if (node.closest('header') || node.closest('#content-block')) return true;
      }
      if (allowQuery && node.querySelector && node.tagName !== 'BODY' && node.tagName !== 'HTML') {
        if (node.querySelector('header') || node.querySelector('#content-block')) return true;
      }
      return false;
    }

    if (interesting(mutation.target, false)) return true;
    const lists = [mutation.addedNodes, mutation.removedNodes];
    for (let i = 0; i < lists.length; i++) {
      const list = lists[i];
      if (!list) continue;
      for (let j = 0; j < list.length; j++) {
        if (interesting(list[j], true)) return true;
      }
    }
    return false;
  }

  function applyChanges() {
    addRootClass();
    if (!isTargetPage()) {
      removeStaleHeaderPortals();
      resetHero();
      return;
    }

    if (isHeroPage()) {
      applyHero();
      startHeroPump();
    }
    updateHeaderClaimsCta();
    armPlpHydration();

    if (!isHydrated()) return;
    applyInTreeChanges();
  }

  function watchDocument() {
    const root = document.documentElement || document.body;
    if (!root || typeof root.nodeType !== 'number') return;
    if (state.documentObserver) {
      try { state.documentObserver.disconnect(); } catch (err) {}
    }
    state.documentObserver = new MutationObserver((mutations) => {
      noteReactRecook();
      if (findNativeHeroList()) state.hydrated = true;

      let headerOrHeroChanged = false;
      for (let i = 0; i < mutations.length; i++) {
        if (mutationTouchesHeaderOrHero(mutations[i])) {
          headerOrHeroChanged = true;
          break;
        }
      }

      if (headerOrHeroChanged) {
        updateHeaderClaimsCta();
        applyHero();
        scheduleHeaderRaf();
      }

      if (isHydrated()) scheduleApply(100);
    });
    state.documentObserver.observe(root, { childList: true, subtree: true });
  }

  state.rewatch = watchDocument;

  function watchResize() {
    if (state.resizeListener) return;
    state.resizeListener = true;
    window.addEventListener('resize', () => {
      if (isTargetPage()) updateHeaderClaimsCta();
      const list = connectedInjectedList();
      if (list) positionHeroPortal(list);
      if (state.hydrated) scheduleApply(50);
    }, true);
  }

  function patchHistoryForSpa() {
    ['pushState', 'replaceState'].forEach((fn) => {
      const original = history[fn];
      if (!original || original.__optlyHpPatched) return;
      history[fn] = function () {
        const result = original.apply(this, arguments);
        scheduleApply(0);
        return result;
      };
      history[fn].__optlyHpPatched = true;
    });
    window.addEventListener('popstate', () => scheduleApply(0), true);
  }

  patchHistoryForSpa();
  watchDocument();
  watchResize();
  applyChanges();
})();
}}]}]}], "weightDistributions": null, "name": "/program/hp-care-complete-cp-expiration-enroll/ - HP enrollment updates", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6580486011617280"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["4673961739419648"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "5800109949059072", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": [{"id": "86E9B8CA-A3E9-485B-B285-A53E84048205", "type": "append", "selector": "head", "value": "<style>#plancards{\n padding-top:0 !important;\n}</style>", "dependencies": []}], "id": "6744500991688704", "name": "/techcare - Card Padding Adjustment", "commitId": "5970802764414976", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5942503493337088", "integrationSettings": null, "variations": [{"id": "6722673431019520", "name": "Original", "actions": [{"viewId": "4816603586494464", "changes": []}]}], "weightDistributions": null, "name": "/techcare - Card Padding Adjustment", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6744500991688704"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["4816603586494464"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6751265028308992", "name": "claroup.co/segurocelular-co/ - What's App Integration", "commitId": "5315169027358720", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"google_analytics_4": {}, "28945410017": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5566587822931968", "integrationSettings": null, "variations": [{"id": "4889106929418240", "name": "Original", "actions": [{"viewId": "6729944810651648", "changes": [{"id": "8B95E251-6348-4DD6-A471-19A5151FEE7C", "type": "custom_code", "value": function($){// Claro Colombia — "Up" program (segurocelular-co) WhatsApp FAB
// Adds a fixed-position WhatsApp floating action button to the bottom-right
// of every page. Idempotent, SPA-safe, and self-healing if React re-renders
// wipe it out.
//
// Target site: https://www.claroup.co/segurocelular-co/
// Destination: WhatsApp chat at +57 310 893 6555

// ======= CONFIGURE THIS =======
const CONFIG = {
  PHONE: '573108936555',
  ARIA_LABEL: 'Chatea con nosotros por WhatsApp',
  BUTTON_ID: 'asurion-claro-whatsapp-fab',
  STYLE_ID: 'asurion-claro-whatsapp-fab-style',
};
// ======= END CONFIG =======

const CSS = `
#${CONFIG.BUTTON_ID} {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 2147483000;
  margin: 0;
  padding: 0;
  line-height: 0;
  pointer-events: auto;
}
#${CONFIG.BUTTON_ID} a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
#${CONFIG.BUTTON_ID} a:hover,
#${CONFIG.BUTTON_ID} a:focus-visible {
  transform: scale(1.08);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  outline: none;
}
#${CONFIG.BUTTON_ID} a:focus-visible {
  box-shadow: 0 0 0 3px rgba(37, 211, 102, 0.45), 0 6px 18px rgba(0, 0, 0, 0.3);
}
#${CONFIG.BUTTON_ID} svg {
  width: 32px;
  height: 32px;
  fill: #ffffff;
  display: block;
}
@media (max-width: 480px) {
  #${CONFIG.BUTTON_ID} {
    bottom: 16px;
    right: 16px;
  }
  #${CONFIG.BUTTON_ID} a {
    width: 56px;
    height: 56px;
  }
  #${CONFIG.BUTTON_ID} svg {
    width: 28px;
    height: 28px;
  }
}
@media (prefers-reduced-motion: reduce) {
  #${CONFIG.BUTTON_ID} a { transition: none; }
  #${CONFIG.BUTTON_ID} a:hover,
  #${CONFIG.BUTTON_ID} a:focus-visible { transform: none; }
}
`;

const SVG = `
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.489-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.854l-.485-.289-5.04 1.188 1.213-4.907-.317-.503A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.631-.199-.897.199-.266.398-1.031 1.294-1.264 1.56-.233.266-.465.299-.863.1-.398-.199-1.681-.619-3.203-1.975-1.184-1.054-1.983-2.356-2.216-2.754-.233-.398-.025-.613.175-.811.18-.179.398-.465.597-.698.199-.233.266-.398.398-.664.133-.266.067-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.778-.653-.673-.897-.685l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.395 1.362-1.395 3.322s1.428 3.853 1.628 4.119c.199.266 2.81 4.291 6.808 6.018.951.411 1.693.656 2.272.839.955.303 1.824.26 2.511.158.766-.114 2.354-.962 2.687-1.891.333-.929.333-1.726.233-1.891-.1-.166-.365-.266-.763-.465z"/>
</svg>`;

function injectStyle() {
  if (document.getElementById(CONFIG.STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = CONFIG.STYLE_ID;
  style.textContent = CSS;
  (document.head || document.documentElement).appendChild(style);
}

function injectButton() {
  if (!document.body) return false;
  if (document.getElementById(CONFIG.BUTTON_ID)) return true;

  const wrap = document.createElement('div');
  wrap.id = CONFIG.BUTTON_ID;
  wrap.innerHTML = `
    <a href="https://api.whatsapp.com/send?phone=${CONFIG.PHONE}"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="${CONFIG.ARIA_LABEL}">
      ${SVG}
    </a>
  `;
  document.body.appendChild(wrap);
  return true;
}

function applyChanges() {
  injectStyle();
  injectButton();
}

// --- Utilities ---
const raf = cb => requestAnimationFrame(() => requestAnimationFrame(cb));
const oncePerTick = (() => {
  let scheduled = false;
  return fn => {
    if (scheduled) return;
    scheduled = true;
    raf(() => { scheduled = false; fn(); });
  };
})();

const safeApply = () => {
  try {
    applyChanges();
  } catch (e) {
    console.error('[Optimizely][claro-whatsapp] apply error:', e);
  }
};

// --- Watch for removal / React re-renders and re-inject ---
const watchDom = (() => {
  let observer;
  return () => {
    if (observer) return;
    observer = new MutationObserver(() => {
      if (!document.getElementById(CONFIG.BUTTON_ID) ||
          !document.getElementById(CONFIG.STYLE_ID)) {
        oncePerTick(safeApply);
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  };
})();

// --- Handle SPA route changes ---
(function patchHistoryForSpa() {
  const fire = () => oncePerTick(safeApply);
  ['pushState', 'replaceState'].forEach(fn => {
    const orig = history[fn];
    if (!orig || orig.__claroWaPatched) return;
    history[fn] = function () { const res = orig.apply(this, arguments); fire(); return res; };
    history[fn].__claroWaPatched = true;
  });
  window.addEventListener('popstate', fire, true);
})();

// --- Bootstrap ---
if (document.body) {
  safeApply();
} else {
  document.addEventListener('DOMContentLoaded', safeApply, { once: true });
}
watchDom();
}, "dependencies": []}]}]}], "weightDistributions": null, "name": "claroup.co/segurocelular-co/ - What's App Integration", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6751265028308992"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6729944810651648"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}], "groups": [], "audiences": [{"id": "25161221107", "name": "Mobile Devices", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "device", "value": "iphone"}, {"match": null, "name": null, "type": "device", "value": "mobile"}]]]}, {"id": "5408589649543168", "name": "Does not have store_id", "conditions": ["and", ["or", ["not", ["or", {"match": "exists", "name": "store_id", "type": "query", "value": null}]]]]}, {"id": "5990917136449536", "name": "MX Client - Amazon", "conditions": ["and", ["or", ["or", {"match": "exact", "name": "_osp_p", "type": "cookies", "value": "amazon"}]]]}], "listTargetingKeys": [], "visitorAttributes": [], "visitorIdLocator": null, "integrationSettings": [{"id": "google_analytics_4", "global_is_use_gtm": "on"}, {"id": "google_universal_analytics"}], "views": [{"id": "24990560583", "category": "other", "apiName": "23755061915_asurion__homepage_prod", "name": "Asurion - Homepage (prod)", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25134630100", "category": "other", "apiName": "23755061915_asurion_repair_scheduler_book_repair", "name": "Asurion Repair Scheduler: Book Repair", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://my.asurion.com/tech-care/repairs"}, {"match": "substring", "type": "url", "value": "https://my.asurion.com/tech-care/repairs?"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25144250437", "category": "other", "apiName": "23755061915_store_pages", "name": "Store Pages", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "ubreakifix.com/locations/"}, {"match": "substring", "type": "url", "value": "https://www.asurion.com/repairs/tech/locations/"}], ["not", ["or", {"match": "simple", "type": "url", "value": "ubreakifix.com/locations"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25152000479", "category": "other", "apiName": "23755061915_ubreakifix_sitewide", "name": "uBreakiFix Sitewide", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.ubreakifix.com"}, {"match": "substring", "type": "url", "value": "https://ubreakifix.com"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25188320008", "category": "other", "apiName": "23755061915_asurion_repair_scheduler", "name": "Asurion Repair Scheduler", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://my.asurion.com/tech-care/repairs"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25202900320", "category": "other", "apiName": "23755061915_url_targeting_for_homeplussmarthome__removed__from_c", "name": "URL Targeting for /homeplus/smart-home/ - Removed \"$\" from calculator", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/homeplus/smart-home/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25232851399", "category": "other", "apiName": "23755061915_url_targeting_for_aboutcontactus__fixed_spacing_betw", "name": "URL Targeting for /about/contact-us/ - Fixed spacing between icons mid-page", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/about/contact-us/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25481340207", "category": "other", "apiName": "23755061915_asurion_location_pages", "name": "Asurion Location Pages", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.asurion.com/repairs/tech/locations/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25750821068", "category": "other", "apiName": "pjs_funnel_appointment_time", "name": "[PJS] Funnel - Appointment Time", "staticConditions": null, "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "25762110747", "category": "other", "apiName": "pjs_funnel_confirmation", "name": "[PJS] Funnel - Confirmation", "staticConditions": null, "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "25763951020", "category": "other", "apiName": "pjs_funnel_customer_details", "name": "[PJS] Funnel - Customer Details", "staticConditions": null, "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "25769380895", "category": "other", "apiName": "pjs_funnel_zip_code", "name": "[PJS] Funnel - Zip Code", "staticConditions": null, "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "25772060974", "category": "other", "apiName": "pjs_funnel_device_details", "name": "[PJS] Funnel - Device Details", "staticConditions": null, "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "25795270758", "category": "other", "apiName": "pjs_funnel_delivery_selection", "name": "[PJS] Funnel - Delivery Selection", "staticConditions": null, "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "25820690136", "category": "other", "apiName": "pjs_funnel_damage_type", "name": "[PJS] Funnel - Damage Type", "staticConditions": null, "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "25838470062", "category": "other", "apiName": "pjs_funnel_device_type", "name": "[PJS] Funnel - Device Type", "staticConditions": null, "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "25849450073", "category": "other", "apiName": "23755061915_find_your_location", "name": "Find Your Location", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://ubreakifix.com/locations"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "27311230891", "category": "other", "apiName": "23755061915_applianceplus", "name": "/applianceplus", "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.asurion.com/applianceplus/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "28166070417", "category": "other", "apiName": "23755061915_appliance_plus_funnel__step_three__payment", "name": "Appliance Plus Funnel - Step Three - Payment", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/appliance-plus/asurion/app/payment"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "28170320463", "category": "other", "apiName": "23755061915_appliance_plus_affiliate_funnel__step_four__program_", "name": "Appliance Plus Affiliate Funnel - Step Four - Program Info", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/appliance-plus/asurion/affiliate/program-info"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "28187420417", "category": "other", "apiName": "23755061915_appliance_plus_affiliate_funnel__step_three__payment", "name": "Appliance Plus Affiliate Funnel - Step Three - Payment", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/appliance-plus/asurion/affiliate/payment"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "28190190320", "category": "other", "apiName": "23755061915_appliance_plus_funnel__step_five__review", "name": "Appliance Plus Funnel - Step Five - Review", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/appliance-plus/asurion/app/review"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "28194280742", "category": "other", "apiName": "23755061915_url_targeting_for_ubreakifixcomaccessorywarranty__co", "name": "URL Targeting for ubreakifix.com/accessory-warranty - Copy Change", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/accessory-warranty"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "28194870442", "category": "other", "apiName": "23755061915_entertainment_plus_funnel__step_five__review", "name": "Entertainment Plus Funnel - Step Five - Review", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/home-entertainment/asurion/app/review"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "28219190293", "category": "other", "apiName": "23755061915_home_plus_funnel__step_three__payment", "name": "Home Plus Funnel - Step Three - Payment", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/home-plus/asurion/app/payment"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "28224090300", "category": "other", "apiName": "23755061915_appliance_plus_affiliate_funnel__step_five__review", "name": "Appliance Plus Affiliate Funnel - Step Five - Review", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/appliance-plus/asurion/affiliate/review"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "28230860276", "category": "other", "apiName": "23755061915_appliance_plus_funnel__step_four__program_info", "name": "Appliance Plus Funnel - Step Four - Program Info", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/appliance-plus/asurion/app/program-info"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "28258260051", "category": "other", "apiName": "23755061915_home_plus_funnel__step_two__account_details", "name": "Home Plus Funnel - Step Two - Account Details", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/home-plus/asurion/app/account-details"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "28267980180", "category": "other", "apiName": "23755061915_appliance_plus_affiliate_funnel__step_two__account_d", "name": "Appliance Plus Affiliate Funnel - Step Two - Account Details", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/appliance-plus/asurion/affiliate/account-details"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "28282500055", "category": "other", "apiName": "23755061915_home_plus_funnel__step_four__program_info", "name": "Home Plus Funnel - Step Four - Program Info", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/home-plus/asurion/app/program-info"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "28285060089", "category": "other", "apiName": "23755061915_appliance_plus_funnel__step_two__account_details", "name": "Appliance Plus Funnel - Step Two - Account Details", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/appliance-plus/asurion/app/account-details"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "28301260029", "category": "other", "apiName": "23755061915_home_plus_funnel__step_five__review", "name": "Home Plus Funnel - Step Five - Review", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/home-plus/asurion/app/review"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "28309130035", "category": "other", "apiName": "23755061915_entertainment_plus_funnel__step_four__program_info", "name": "Entertainment Plus Funnel - Step Four - Program Info", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/home-entertainment/asurion/app/program-info"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "28319000006", "category": "other", "apiName": "23755061915_entertainment_plus_funnel__step_two__account_details", "name": "Entertainment Plus Funnel - Step Two - Account Details", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/home-entertainment/asurion/app/account-details"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "28323050004", "category": "other", "apiName": "23755061915_entertainment_plus_funnel__step_three__payment", "name": "Entertainment Plus Funnel - Step Three - Payment", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.signup.asurion.com/home-entertainment/asurion/app/payment"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "29208310612", "category": "other", "apiName": "23755061915_url_targeting_for_applianceplus__asurc68__more_promi", "name": "URL Targeting for /applianceplus/ - [ASURC-68] - More Prominent Mobile CTAs", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/applianceplus/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "29246340042", "category": "other", "apiName": "23755061915_httpswwwasurioncommobiledevicesetupverizonclient", "name": "https://www.asurion.com/mobile-device-setup/verizon-client", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/mobile-device-setup/verizon-client"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "29343530169", "category": "other", "apiName": "23755061915_url_targeting_for_preview__typeform_sandbox", "name": "URL Targeting for /connected-home-assessment/ - Typeform Quiz", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://preview-prod.mobilityweb.prd.aws.asurion.net/connected-home-assessment/"}, {"match": "simple", "type": "url", "value": "https://www.asurion.com/connected-home-assessment/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "29617960159", "category": "other", "apiName": "23755061915_url_targeting_for_device_onboarding__verizon__v2", "name": "URL Targeting for /mobile-device-setup/verizon-client - Device Onboarding - Verizon - V2", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "www.asurion.com/mobile-device-setup/verizon-client"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "29956200145", "category": "other", "apiName": "23755061915_url_targeting_for_copy_of_devicetrackingviewcode", "name": "URL Targeting for ubreakifix.com/device-tracking-view?code=* - Removed Pricing and Repair Timeline", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://ubreakifix.com/device-tracking-view?code="}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "30287440037", "category": "other", "apiName": "23755061915_url_targeting_for_techcarelw__mobile_video_portrait_", "name": "URL Targeting for /techcare/lw - Mobile Video Portrait Style Change", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://preview-prod.mobilityweb.prd.aws.asurion.net/techcare/lw"}, {"match": "simple", "type": "url", "value": "https://www.asurion.com/techcare/lw/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "4515846421217280", "category": "other", "apiName": "23755061915_url_targeting_for_copy_of_claroupcosegurocelularco__", "name": "URL Targeting for protecaomovel.com.br/brasil/ - What's App Integration", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.protecaomovel.com.br/brasil/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "4614982650822656", "category": "other", "apiName": "23755061915_url_targeting_for_copy_of_previewhomepluscro1sandbox", "name": "URL Targeting for /about/mediakit/ - Scrolling Logos", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/about/mediakit/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "4673961739419648", "category": "other", "apiName": "23755061915_url_targeting_for_programhpcarecompletecpexpiratio_1", "name": "URL Targeting for /program/hp-care-complete-cp-expiration-enroll/ - HP enrollment updates", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/program/hp-care-complete-cp-expiration-enroll/"}, {"match": "simple", "type": "url", "value": "https://adotcom.stable.platform.asurion53.com/program/hp-care-complete-cp-expiration-enroll/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "4735865532973056", "category": "other", "apiName": "23755061915_url_targeting_for_techtipscategoriespressrelease__na", "name": "URL Targeting for /tech-tips/categories/press-release/ - Navigation & Search UI Text Replacement", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/tech-tips/categories/press-release/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "4816603586494464", "category": "other", "apiName": "23755061915_url_targeting_for_techcare__card_padding_adjustment", "name": "URL Targeting for /techcare - Card Padding Adjustment", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/techcare/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5062198381248512", "category": "other", "apiName": "23755061915_url_targeting_for_copy_of_verizonhomedeviceprotectca", "name": "URL Targeting for /verizon/home-device-protect/calculator/ - Desktop 4 columns", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://preview-prod.mobilityweb.prd.aws.asurion.net/verizon/home-device-protect/calculator/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5180121588432896", "category": "other", "apiName": "23755061915_url_targeting_for_protectionplansasurionhometechcare", "name": "URL Targeting for /protection-plans/asurion-home-tech-care - Calculator", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://adotcom.stable.platform.asurion53.com/protection-plans/asurion-home-tech-care"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5272692543193088", "category": "other", "apiName": "23755061915_url_targeting_for_protectionplanscompareplans_1", "name": "URL Targeting for /protection-plans/compare-plans/", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://preview-prod.mobilityweb.prd.aws.asurion.net/protection-plans/compare-plans/"}, {"match": "simple", "type": "url", "value": "https://www.asurion.com/protection-plans/compare-plans/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5273614388297728", "category": "other", "apiName": "23755061915_url_targeting_for_verizonhomedeviceprotectcalculator", "name": "URL Targeting for /verizon/home-device-protect/calculator/ - Calculator Horizontal Scroll", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/verizon/home-device-protect/calculator/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5290355541671936", "category": "other", "apiName": "23755061915_url_targeting_for_amazoncompleteprotect__calculator", "name": "URL Targeting for /amazon/complete-protect - Calculator", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/amazon/complete-protect/"}, {"match": "simple", "type": "url", "value": "https://adotcom.stable.platform.asurion53.com/amazon/complete-protect/calculator/"}, {"match": "simple", "type": "url", "value": "https://www.asurion.com/amazon/complete-protect/calculator/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5373380973559808", "category": "other", "apiName": "23755061915_url_targeting_for_amazon_enrollment_mx", "name": "URL Targeting for Amazon Enrollment MX", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/amazon/complete-protect/sign-up/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5394840897191936", "category": "other", "apiName": "23755061915_tech_care__sign_up_page_2", "name": "Tech Care | Sign Up Page 2", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/techcare/purchase/enroll"}], ["not", ["or", {"match": "substring", "type": "url", "value": "store_id="}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
  // Check if storeId does NOT exist in sessionStorage
  if (!sessionStorage.getItem('store_id')) {
    activate();
  }
}
}, {"id": "5446940423356416", "category": "other", "apiName": "23755061915_url_targeting_for_homeplus__sub_nav__2_step_home_flo", "name": "URL Targeting for /homeplus + sub nav - 2 Step Home+ Flow", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/homeplus/"}, {"match": "simple", "type": "url", "value": "https://www.asurion.com/homeplus/compare-plans/"}, {"match": "simple", "type": "url", "value": "https://www.asurion.com/homeplus/whats-covered/"}, {"match": "simple", "type": "url", "value": "https://www.asurion.com/homeplus/faq/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5471071453839360", "category": "other", "apiName": "23755061915_url_targeting_for_aboutnewsroom__gradient_background", "name": "URL Targeting for /about/newsroom/ - Gradient backgrounds", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/about/newsroom/"}], ["not", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/about/newsroom/tech-lifestyle-report/"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5534900657324032", "category": "other", "apiName": "23755061915_url_targeting_for_attmxtierpoliza__hero_style_change", "name": "URL Targeting for /attmx/tier-*-poliza/ - Hero Style Change", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/attmx/tier-3-poliza/"}, {"match": "substring", "type": "url", "value": "/attmx/tier-5-poliza/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5535356095823872", "category": "other", "apiName": "23755061915_url_targeting_for_programhpcarecomplete__hp_care_com", "name": "URL Targeting for [DO NOT ARCHIVE] /program/hp-care-complete/ - HP Care Complete", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/program/hp-care-complete/"}, {"match": "simple", "type": "url", "value": "https://adotcom.stable.platform.asurion53.com/program/hp-care-complete/"}, {"match": "simple", "type": "url", "value": "https://www.asurion.com/program/hp-care-complete-plp/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5594146577055744", "category": "other", "apiName": "23755061915_url_targeting_for_microsoftxbox", "name": "URL Targeting for /microsoft/xbox/", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/partner/xbox/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5599554297397248", "category": "other", "apiName": "23755061915_url_targeting_for_locationslocationsamsungrepair", "name": "URL Targeting for /locations/*location*/samsung-repair", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/miamilakes/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/seattle/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/littleton/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/fayetteville/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/summerlin/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/ankeny/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/batonrouge/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/miamisburg/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/sanrafael/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/koreatown/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/uptownminneapolis/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/sparks/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/northwestomaha/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/champaign/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/tukwila/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/millplain/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/kissimmee/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/citybaselanding/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/greece/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/jeffersontown/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/kearny/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/fortwayne/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/quailsprings/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/fredericksburg/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/lakeland/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/sherwood/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/cupertino/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/tucker/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/norridge/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/westdesmoines/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/cerritos/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/kapolei/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/cheltenham/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/greenbay/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/phoenix/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/moorestown/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/eastwichita/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/robinson/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/victor/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/superstitionsprings/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/schererville/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/wardparkway/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/joplin/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/amherst/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/beaumont/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/southlake/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/wilmingtonde/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/ofallonmo/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/brick/samsung-repair"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/locations/rockwall/samsung-repair"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5660914041487360", "category": "other", "apiName": "23755061915_url_targeting_for_ubreakifixcomlocations__spanish_co", "name": "URL Targeting for ubreakifix.com/locations/* - Spanish Top Level Banner", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.ubreakifix.com/locations/"}, {"match": "substring", "type": "url", "value": "https://stable.ubif.platform.asurion53.com/locations/"}], ["or", {"match": "substring", "type": "url", "value": "sanjuan"}, {"match": "substring", "type": "url", "value": "kendall"}, {"match": "substring", "type": "url", "value": "eastorlando"}, {"match": "substring", "type": "url", "value": "northaustin"}, {"match": "substring", "type": "url", "value": "atlanta"}, {"match": "substring", "type": "url", "value": "tampa"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5682540292341760", "category": "other", "apiName": "23755061915_url_targeting_for_copy_of_phoneinsurance", "name": "URL Targeting for /open-enrollment/ - Scrolling Feature Component", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://preview-prod.mobilityweb.prd.aws.asurion.net/open-enrollment/"}, {"match": "simple", "type": "url", "value": "https://www.asurion.com/open-enrollment/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5729319247413248", "category": "other", "apiName": "23755061915_url_targeting_for_storessmb", "name": "URL Targeting for /stores/smb/ - Reformat Hero Video", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/stores/smb/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5820156748759040", "category": "other", "apiName": "23755061915_url_targeting_for_copy_of___homepage_card_test", "name": "URL Targeting for / - Homepage Reduce Card Size on Mobile", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5882581105770496", "category": "other", "apiName": "23755061915_url_targeting_for_protectionplansasurionhometechca_1", "name": "URL Targeting for /protection-plans/asurion-home-tech-care - Calculator", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://adotcom.stable.platform.asurion53.com/protection-plans/asurion-home-tech-care"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5910022383730688", "category": "other", "apiName": "23755061915_tech_care__sign_up_page_1", "name": "Tech Care | Sign Up Page 1", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/techcare/purchase/create/"}], ["not", ["or", {"match": "substring", "type": "url", "value": "store_id="}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
  // Check if storeId does NOT exist in sessionStorage
  if (!sessionStorage.getItem('store_id')) {
    activate();
  }
}
}, {"id": "5930484889288704", "category": "other", "apiName": "23755061915_url_targeting_for_atthometechprotectionibenroll__c_1", "name": "URL Targeting for /att/home-tech-protection/ib-enroll - Calculator", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://adotcom.stable.platform.asurion53.com/att/home-tech-protection/ib-enroll"}, {"match": "simple", "type": "url", "value": "https://www.asurion.com/att/home-tech-protection/ib-enroll/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6121201228054528", "category": "other", "apiName": "23755061915_url_targeting_for_techsupportverizoncustomertestimon", "name": "URL Targeting for /techsupport/verizon-customer-testimonials/", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/techsupport/verizon-customer-testimonials/"}, {"match": "simple", "type": "url", "value": "https://adotcom.stable.platform.asurion53.com/techsupport/verizon-customer-testimonials"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6254114745614336", "category": "other", "apiName": "23755061915_hp_care_complete_enrollment_flow_step_1", "name": "HP Care Complete | Enrollment Flow | Step 1", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/cart/hpcare/purchase/create/"}], ["or", {"match": "substring", "type": "url", "value": "plan=HPBASE"}, {"match": "substring", "type": "url", "value": "plan=HPFAMILY"}, {"match": "substring", "type": "url", "value": "plan=HPWHOLEHOME"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6312680114356224", "category": "other", "apiName": "23755061915_url_targeting_for_dashboardmxclientamazon__my_accoun", "name": "URL Targeting for /dashboard/?mxclient=amazon - My Account - Amazon banner test", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/dashboard/"}], ["or", {"type": "element_present", "value": "[data-testid=\"account-upsell-banner\"]"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "6314747801370624", "category": "other", "apiName": "23755061915_url_targeting_for_copy_of_applianceplus__calculator_", "name": "URL Targeting for /partner/blue-stream-fiber/ - Calculator Mobile Horizontal Scroll", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/partner/blue-stream-fiber/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6379670218735616", "category": "other", "apiName": "23755061915_url_targeting_for_programhpcarecompletewarrantyexp_1", "name": "URL Targeting for /program/hp-care-complete-warranty-expiration-enroll/ - HP enrollment updates", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/program/hp-care-complete-warranty-expiration-enroll/"}, {"match": "simple", "type": "url", "value": "https://adotcom.stable.platform.asurion53.com/program/hp-care-complete-warranty-expiration-enroll/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6413036374720512", "category": "other", "apiName": "23755061915_url_targeting_for_phoneinsurance", "name": "URL Targeting for /phone-insurance/", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://preview-prod.mobilityweb.prd.aws.asurion.net/phone-insurance/"}, {"match": "simple", "type": "url", "value": "https://www.asurion.com/phone-insurance/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6435652225466368", "category": "other", "apiName": "23755061915_ubif__job_details__repair_options", "name": "UBIF - Job Details - Repair Options", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/pages/smartphone-repair-options"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/pages/iphone-repair-options"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/pages/samsung-galaxy-repair-options"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/pages/google-pixel-repair-options"}, {"match": "simple", "type": "url", "value": "https://www.ubreakifix.com/pages/motorola-smartphone-repair-options"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6636744792080384", "category": "other", "apiName": "23755061915_hp_care_complete__enrollment_flow__step_2", "name": "HP Care Complete | Enrollment Flow | Step 2", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.asurion.com/cart/hpcare/purchase/enroll"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6729944810651648", "category": "other", "apiName": "23755061915_url_targeting_for_claroupcosegurocelularco__whats_ap", "name": "URL Targeting for claroup.co/segurocelular-co/ - What's App Integration", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.claroup.co/segurocelular-co/"}, {"match": "simple", "type": "url", "value": "https://www.claroup.co/segurocelular-co/renovacion-anticipada/"}, {"match": "simple", "type": "url", "value": "https://www.claroup.co/segurocelular-co/privacy-policy/"}, {"match": "simple", "type": "url", "value": "https://www.claroup.co/segurocelular-co/terminos-y-condiciones/"}, {"match": "simple", "type": "url", "value": "https://www.claroup.co/segurocelular-co/reparaciondepantalla/"}, {"match": "simple", "type": "url", "value": "https://www.claroup.co/segurocelular-co/aviso-importante/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}], "events": [{"id": "24956682272", "viewId": "24990560583", "name": "Claims Button Click", "category": "other", "apiName": "23755061915_claims_button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-analytics-id=\"global-nav-claims-cta\"]"}}, {"id": "25079350344", "viewId": null, "name": "Find a tech repair store", "category": "other", "apiName": "homepage-find-store", "eventType": "custom", "eventFilter": null}, {"id": "25176260389", "viewId": "25144250437", "name": "[Store Pages] All Funnel Entries", "category": "other", "apiName": "23755061915_aggregate_funnel_entries_from_store_pages", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[href*=\"new.ubreakifix.com\"], [href*=\"my.asurion.com\"]"}}, {"id": "25183010365", "viewId": "25152000479", "name": "[UBIF Sitewide] All Funnel Entries", "category": "other", "apiName": "23755061915_all_aggregate_funnel_entries_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[href*=\"new.ubreakifix.com\"], [href*=\"my.asurion.com\"]"}}, {"id": "25195950054", "viewId": "25188320008", "name": "Asurion Repair Scheduler: Book Repair", "category": "other", "apiName": "23755061915_asurion_repair_scheduler_book_repair", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "button[aria-label=\"Book now\"]"}}, {"id": "25224571767", "viewId": null, "name": "appliance plus funnel entry", "category": "other", "apiName": "appliance_plus_funnel_entry", "eventType": "custom", "eventFilter": null}, {"id": "25229690782", "viewId": null, "name": "home plus funnel entry", "category": "other", "apiName": "home_plus_funnel_entry", "eventType": "custom", "eventFilter": null}, {"id": "25239621047", "viewId": null, "name": "my asurion funnel completion", "category": "other", "apiName": "my_asurion_funnel_completion", "eventType": "custom", "eventFilter": null}, {"id": "25245101115", "viewId": null, "name": "[PJS] Asurion Tech Repairs | Device Repair Click", "category": "other", "apiName": "pjs_asurion_device_repair_click", "eventType": "custom", "eventFilter": null}, {"id": "25287920467", "viewId": null, "name": "entertainment plus funnel entry", "category": "other", "apiName": "entertainment_plus_funnel_entry", "eventType": "custom", "eventFilter": null}, {"id": "25299810464", "viewId": null, "name": "entertainment plus funnel completion", "category": "other", "apiName": "entertainment_plus_funnel_completion", "eventType": "custom", "eventFilter": null}, {"id": "25306960430", "viewId": null, "name": "my asurion funnel entry", "category": "other", "apiName": "my_asurion_funnel_entry", "eventType": "custom", "eventFilter": null}, {"id": "25326980052", "viewId": null, "name": "home plus funnel completion", "category": "other", "apiName": "home_plus_funnel_completion", "eventType": "custom", "eventFilter": null}, {"id": "25343910369", "viewId": null, "name": "appliance plus funnel completion", "category": "other", "apiName": "appliance_plus_funnel_completion", "eventType": "custom", "eventFilter": null}, {"id": "25406710525", "viewId": null, "name": "appliance plus affiliates funnel entry", "category": "other", "apiName": "appliance_plus_affiliates_funnel_entry", "eventType": "custom", "eventFilter": null}, {"id": "25428380492", "viewId": null, "name": "[ASURC-1] Start a Claim Click", "category": "other", "apiName": "asurc1_start_a_claim_click", "eventType": "custom", "eventFilter": null}, {"id": "25431850860", "viewId": "25481340207", "name": "[Asurion Location Pages] Phone Number Click", "category": "other", "apiName": "23755061915_asurion_location_page_phone_number_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-testid=\"store-details\"] a[href*=\"tel\"]"}}, {"id": "25441400671", "viewId": "25481340207", "name": "[Asurion Location Pages] Device Repair Card Click", "category": "other", "apiName": "23755061915_asurion_location_page_repair_card_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-testid=\"store-repair-options\"] > a"}}, {"id": "25443230298", "viewId": null, "name": "appliance plus affiliates funnel completion", "category": "other", "apiName": "appliance_plus_affiliates_funnel_completion", "eventType": "custom", "eventFilter": null}, {"id": "25458560150", "viewId": "25481340207", "name": "[Asurion Location Pages] Schedule a Repair Nav/Sticky CTA Click", "category": "other", "apiName": "23755061915_asurion_location_page_schedule_a_repair_hero_cta_cli", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#top-nav-schedule-a-repair-button-with-location, #store-page-details-schedule-repair-bottom"}}, {"id": "25468400018", "viewId": null, "name": "[ASURC-1] Call Now CTA Click", "category": "other", "apiName": "asurc1_call_now_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "25491620049", "viewId": "25481340207", "name": "[Asurion Location Pages] Address/Get Directions CTA Click", "category": "other", "apiName": "23755061915_asurion_location_page_address_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-testid=\"store-details\"] a[href*=\"maps\"]:not([aria-label=\"view map\" i])"}}, {"id": "25785040801", "viewId": null, "name": "[Opty][PJS] Visit Page: Funnel - Confirmation", "category": "other", "apiName": "pjs_funnel_confirmation", "eventType": "custom", "eventFilter": null}, {"id": "25849280133", "viewId": "25849450073", "name": "User Expands State", "category": "other", "apiName": "23755061915_user_expands_state", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".panel-heading a"}}, {"id": "25849450074", "viewId": "25849450073", "name": "Clicks: \"View Store\" On Any Store", "category": "other", "apiName": "23755061915_clicks_view_store_on_any_store", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "A.gtm-store-btn"}}, {"id": "25975863614", "viewId": null, "name": "my asurion devicetype step", "category": "other", "apiName": "my_asurion_devicetype_step", "eventType": "custom", "eventFilter": null}, {"id": "25982283041", "viewId": null, "name": "my asurion customerDetails step", "category": "other", "apiName": "my_asurion_customerDetails_step", "eventType": "custom", "eventFilter": null}, {"id": "25995141178", "viewId": "25849450073", "name": "[UBIF-491] ZIP Search - Phone Number Click", "category": "other", "apiName": "23755061915_ubif491_zip_search__phone_number_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".store-list-item .gtm-call-btn"}}, {"id": "25995583952", "viewId": null, "name": "my asurion damageType step", "category": "other", "apiName": "my_asurion_damageType_step", "eventType": "custom", "eventFilter": null}, {"id": "26001412493", "viewId": null, "name": "my asurion deviceDetails step", "category": "other", "apiName": "my_asurion_deviceDetails_step", "eventType": "custom", "eventFilter": null}, {"id": "26003272454", "viewId": null, "name": "/repairs/appliance/pmlp/ - CTA Schedule Repair", "category": "other", "apiName": "repairs_appliance_pmlp_cta_schedule_repair", "eventType": "custom", "eventFilter": null}, {"id": "26005244514", "viewId": null, "name": "my asurion deliverySelection step", "category": "other", "apiName": "my_asurion_deliverySelection_step", "eventType": "custom", "eventFilter": null}, {"id": "26022832138", "viewId": null, "name": "Location Mobile Sticky Footer CTA Directions", "category": "other", "apiName": "repairs_tech_locations_mobile_sticky_footer_cta_directions", "eventType": "custom", "eventFilter": null}, {"id": "26030312459", "viewId": null, "name": "my asurion zipcode step", "category": "other", "apiName": "my_asurion_zipcode_step", "eventType": "custom", "eventFilter": null}, {"id": "26048301185", "viewId": null, "name": "Location Mobile Sticky Footer CTA Call", "category": "other", "apiName": "repairs_tech_locations_mobile_sticky_footer_cta_call", "eventType": "custom", "eventFilter": null}, {"id": "26107930004", "viewId": null, "name": "Location Mobile Sticky Footer CTA Book", "category": "other", "apiName": "repairs_tech_locations_mobile_sticky_footer_cta_book", "eventType": "custom", "eventFilter": null}, {"id": "26134760147", "viewId": null, "name": "Location Page CTA Any", "category": "other", "apiName": "repairs_tech_locations_cta", "eventType": "custom", "eventFilter": null}, {"id": "26156190137", "viewId": null, "name": "Location Page CTA Directions", "category": "other", "apiName": "repairs_tech_locations_cta_directions", "eventType": "custom", "eventFilter": null}, {"id": "26161950239", "viewId": null, "name": "Location Page CTA Call", "category": "other", "apiName": "repairs_tech_locations_cta_call", "eventType": "custom", "eventFilter": null}, {"id": "26166620098", "viewId": null, "name": "Location Page CTA Book", "category": "other", "apiName": "repairs_tech_locations_cta_book", "eventType": "custom", "eventFilter": null}, {"id": "26173201664", "viewId": null, "name": "Claims Initiations", "category": "other", "apiName": "claims_initiations", "eventType": "custom", "eventFilter": null}, {"id": "26279530244", "viewId": "24990560583", "name": "Explore Plans Hero CTA", "category": "other", "apiName": "23755061915_explore_plans_hero_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-analytics-id*=\"Explore-plans\"]"}}, {"id": "26352780589", "viewId": null, "name": "[PJS] User Enters ZIP - Location page", "category": "other", "apiName": "pjs_locations_user_enters_zip", "eventType": "custom", "eventFilter": null}, {"id": "27286010991", "viewId": null, "name": "[ASRUC-19] Clicks: Image/Carousel", "category": "other", "apiName": "asurc19_clicks_image_carousel", "eventType": "custom", "eventFilter": null}, {"id": "27296230322", "viewId": null, "name": "Tracked Element Click", "category": "other", "apiName": "trackedElementClick", "eventType": "custom", "eventFilter": null}, {"id": "27390580011", "viewId": "24990560583", "name": "Fix It Bar Button Click", "category": "other", "apiName": "23755061915_fix_it_bar_button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fixitbar-container .submit-button"}}, {"id": "27492140181", "viewId": null, "name": "click_mid_ad_button", "category": "other", "apiName": "click_mid_ad_button", "eventType": "custom", "eventFilter": null}, {"id": "27691680234", "viewId": "27311230891", "name": "/applianceplus See What's Covered", "category": "other", "apiName": "23755061915_applianceplus_see_whats_covered", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[href*=\"applianceplus/whats-covered\"]"}}, {"id": "27698550185", "viewId": "27311230891", "name": "/applianceplus Enrollment Flow Entry", "category": "other", "apiName": "23755061915_applianceplus_enrollment_flow_entry", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[href*=\"enroll.asurion.com/appliance-plus-affiliates/\"]"}}, {"id": "27707050297", "viewId": "27311230891", "name": "/applianceplus Start A Claim Hero CTA", "category": "other", "apiName": "23755061915_applianceplus_start_a_claim_hero_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-analytics-id=\"Hero | Appliance+---File-a-claim-in-Hero\"]"}}, {"id": "27710790097", "viewId": "27311230891", "name": "/applianceplus Click to Call", "category": "other", "apiName": "23755061915_applianceplus_click_to_call", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[href*=\"tel:\"]"}}, {"id": "27733590238", "viewId": "27311230891", "name": "/applianceplus Global Nav Claims CTA", "category": "other", "apiName": "23755061915_applianceplus_global_nav_claims_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-analytics-id=\"global-nav-claims-cta\"]"}}, {"id": "27750790011", "viewId": "27311230891", "name": "/applianceplus Start a claim", "category": "other", "apiName": "23755061915_applianceplus_start_a_claim", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[href*=\"/claims/applianceplus/\"]"}}, {"id": "28221650519", "viewId": null, "name": "[ASURC-27] Clicks/Swipes Through Carousel", "category": "other", "apiName": "asurc27_carousel_change", "eventType": "custom", "eventFilter": null}, {"id": "28346560845", "viewId": null, "name": "/ - Logo Click /protection-plans/", "category": "other", "apiName": "logo_click_protection_plans", "eventType": "custom", "eventFilter": null}, {"id": "28350861220", "viewId": null, "name": "/ - Logo Click /claims/", "category": "other", "apiName": "logo_click_claims", "eventType": "custom", "eventFilter": null}, {"id": "28352480975", "viewId": null, "name": "/ - Logo Click /repairs/tech/", "category": "other", "apiName": "logo_click_repairs_tech", "eventType": "custom", "eventFilter": null}, {"id": "28361510868", "viewId": null, "name": "/ - Logo Click /tech-help/", "category": "other", "apiName": "logo_click_tech_help", "eventType": "custom", "eventFilter": null}, {"id": "28373241559", "viewId": null, "name": "/claims/ - search input focused", "category": "other", "apiName": "claims_search_input_focused", "eventType": "custom", "eventFilter": null}, {"id": "28454190395", "viewId": null, "name": "/claims/ - Search Option Selected", "category": "other", "apiName": "claims_search_option_selected", "eventType": "custom", "eventFilter": null}, {"id": "28464700054", "viewId": null, "name": "/ - Logos Component Item Click", "category": "other", "apiName": "logos_component_item_click", "eventType": "custom", "eventFilter": null}, {"id": "28483480021", "viewId": null, "name": "widget opened", "category": "other", "apiName": "widget_opened", "eventType": "custom", "eventFilter": null}, {"id": "28507650037", "viewId": null, "name": "support_clicked", "category": "other", "apiName": "support_clicked", "eventType": "custom", "eventFilter": null}, {"id": "28791461141", "viewId": null, "name": "Trust Pilot Widget Click", "category": "other", "apiName": "trust_pilot_widget_click", "eventType": "custom", "eventFilter": null}, {"id": "28805880448", "viewId": "25481340207", "name": "[Asurion Location Pages] Start a Claim Hero CTA Click", "category": "other", "apiName": "23755061915_asurion_location_pages_start_a_claim_hero_cta_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-testid=\"store-details\"] a[href*=\"claims\"]"}}, {"id": "28815490388", "viewId": null, "name": "[ASURC-37] Call Store CTA Click", "category": "other", "apiName": "asurc37_call_store_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "28852910205", "viewId": null, "name": "[ASURC-37] Directions CTA Click", "category": "other", "apiName": "asurc37_directions_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "28886790133", "viewId": null, "name": "[ASURC-37] Schedule Repair CTA Click", "category": "other", "apiName": "asurc37_schedule_repair_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "28953690028", "viewId": null, "name": "Article Ad CTA Click", "category": "other", "apiName": "article_ad_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "28982360524", "viewId": "25152000479", "name": "[UBIF Sitewide] Funnel Entry", "category": "other", "apiName": "23755061915_ubif_sitewide_funnel_entry", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[href*=\"my.asurion\"]"}}, {"id": "29005900437", "viewId": null, "name": "/claims/ - More Info Click", "category": "other", "apiName": "claims_more_info_click", "eventType": "custom", "eventFilter": null}, {"id": "29279650420", "viewId": null, "name": "Tech Tips End Cap Ad Click", "category": "other", "apiName": "tech_tips_end_cap_ad_click", "eventType": "custom", "eventFilter": null}, {"id": "29285370390", "viewId": null, "name": "Tech Tips Scroll Banner Click", "category": "other", "apiName": "tech_tips_scroll_banner_click", "eventType": "custom", "eventFilter": null}, {"id": "29292480043", "viewId": null, "name": "Tech Tips Mid Article Ad Click", "category": "other", "apiName": "tech_tips_mid_article_ad_click", "eventType": "custom", "eventFilter": null}, {"id": "29586700687", "viewId": null, "name": "verizon_sub_nav_click", "category": "other", "apiName": "verizon_sub_nav_click", "eventType": "custom", "eventFilter": null}, {"id": "29592640068", "viewId": null, "name": "claims_provider_verizon", "category": "other", "apiName": "claims_provider_verizon", "eventType": "custom", "eventFilter": null}, {"id": "29614580042", "viewId": null, "name": "claims_provider_att_htp", "category": "other", "apiName": "claims_provider_att_hdp", "eventType": "custom", "eventFilter": null}, {"id": "29617880086", "viewId": null, "name": "claims_subnav_how_to_claim", "category": "other", "apiName": "claims_subnav_how_to_claim", "eventType": "custom", "eventFilter": null}, {"id": "29624240068", "viewId": null, "name": "claims_subnav_how_to_send", "category": "other", "apiName": "claims_subnav_how_to_send", "eventType": "custom", "eventFilter": null}, {"id": "29627270115", "viewId": null, "name": "claims_subnav_faq", "category": "other", "apiName": "claims_subnav_faq", "eventType": "custom", "eventFilter": null}, {"id": "29635010060", "viewId": null, "name": "claims_provider_att", "category": "other", "apiName": "claims_provider_att", "eventType": "custom", "eventFilter": null}, {"id": "29643940016", "viewId": null, "name": "claims_subnav_ratings", "category": "other", "apiName": "claims_subnav_ratings", "eventType": "custom", "eventFilter": null}, {"id": "29647340055", "viewId": null, "name": "claims_provider_verizon_hdp", "category": "other", "apiName": "claims_provider_verizon_hdp", "eventType": "custom", "eventFilter": null}, {"id": "29888970140", "viewId": null, "name": "calculator_increment_button_click", "category": "other", "apiName": "calculator_increment_button_click", "eventType": "custom", "eventFilter": null}, {"id": "29946860026", "viewId": null, "name": "start_claim", "category": "other", "apiName": "start_claim", "eventType": "custom", "eventFilter": null}, {"id": "29966560041", "viewId": null, "name": "track_claim", "category": "other", "apiName": "track_claim", "eventType": "custom", "eventFilter": null}, {"id": "30043660679", "viewId": null, "name": "find_a_store", "category": "other", "apiName": "find_a_store", "eventType": "custom", "eventFilter": null}, {"id": "30068530926", "viewId": null, "name": "device_click", "category": "other", "apiName": "device_click", "eventType": "custom", "eventFilter": null}, {"id": "30074560469", "viewId": null, "name": "pixel_device_click", "category": "other", "apiName": "pixel_device_click", "eventType": "custom", "eventFilter": null}, {"id": "30096140015", "viewId": null, "name": "Amazon Complete Protect CTA Click", "category": "other", "apiName": "amazon_complete_protect_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "30130010571", "viewId": null, "name": "iphone_device_click", "category": "other", "apiName": "iphone_device_click", "eventType": "custom", "eventFilter": null}, {"id": "30163970643", "viewId": null, "name": "techcare_tech_tips_article_click", "category": "other", "apiName": "techcare_tech_tips_article_click", "eventType": "custom", "eventFilter": null}, {"id": "30184080930", "viewId": null, "name": "techcare_calculator_increment_button_click", "category": "other", "apiName": "techcare_calculator_increment_button_click", "eventType": "custom", "eventFilter": null}, {"id": "30226410122", "viewId": null, "name": "techcare_find_your_partner_click", "category": "other", "apiName": "techcare_find_your_partner_click", "eventType": "custom", "eventFilter": null}, {"id": "30231710167", "viewId": null, "name": "techcare_chat_widget_open", "category": "other", "apiName": "techcare_chat_widget_open", "eventType": "custom", "eventFilter": null}, {"id": "30255570030", "viewId": null, "name": "techcare_logo_click", "category": "other", "apiName": "techcare_logo_click", "eventType": "custom", "eventFilter": null}, {"id": "30268620132", "viewId": null, "name": "techcare_quiz_cta_click", "category": "other", "apiName": "techcare_quiz_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "4509582710538240", "viewId": "25152000479", "name": "UBIF Sitewide Get Directions", "category": "other", "apiName": "23755061915_ubif_sitewide_get_directions", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[href*='/maps/search/'],a[href*='maps.google.com']"}}, {"id": "4522614975102976", "viewId": null, "name": "chat_opened_total", "category": "other", "apiName": "chat_opened_total", "eventType": "custom", "eventFilter": null}, {"id": "4537008056434688", "viewId": null, "name": "globalnav-funnel-entry-cta-click", "category": "other", "apiName": "globalnav-funnel-entry-cta-click", "eventType": "custom", "eventFilter": null}, {"id": "4619536796745728", "viewId": null, "name": "[PJS][ASURC-112] ATC2 Funnel Entry", "category": "other", "apiName": "pjs_asurc112_atc2_funnel_entry", "eventType": "custom", "eventFilter": null}, {"id": "4625835957682176", "viewId": null, "name": "mid ad article click", "category": "other", "apiName": "mid_ad_article_click", "eventType": "custom", "eventFilter": null}, {"id": "4644651135664128", "viewId": null, "name": "Speak to Asurion UI CTA Click", "category": "other", "apiName": "speak_to_asurion_ui_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "4651448739299328", "viewId": null, "name": "[PJS][ASURC-112] ATC5 ONLY Step 1 Continue Click", "category": "other", "apiName": "pjs_asurc112_atc5_only_step_1_continue_click", "eventType": "custom", "eventFilter": null}, {"id": "4705585501831168", "viewId": "24990560583", "name": "Card | Home tech care plans", "category": "other", "apiName": "23755061915_card__home_tech_care_plans", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-analytics-id='Simple Card | Home tech care plans']"}}, {"id": "4732015191261184", "viewId": null, "name": "hero-logo-tablet-funnel-entry-cta-click", "category": "other", "apiName": "hero-logo-tablet-funnel-entry-cta-click", "eventType": "custom", "eventFilter": null}, {"id": "4748455164248064", "viewId": "5910022383730688", "name": "Tech Care | Sign Up Page 1 | Adds Device", "category": "other", "apiName": "23755061915_tech_care__sign_up_page_1__adds_device", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "button[data-testid=\"add-on-card-action\"]"}}, {"id": "4801064635990016", "viewId": null, "name": "[ASURC-122] Notification Banner Impression", "category": "other", "apiName": "asurc122_notification_banner_impression", "eventType": "custom", "eventFilter": null}, {"id": "4844564842807296", "viewId": null, "name": "globalnav-store-locator-cta-click", "category": "other", "apiName": "globalnav-store-locator-cta-click", "eventType": "custom", "eventFilter": null}, {"id": "4853515902779392", "viewId": null, "name": "[ASURC-80] User Interacts with FAC (Floating Module)", "category": "other", "apiName": "asurc80_user_interacts_with_fac_floating_module", "eventType": "custom", "eventFilter": null}, {"id": "4880515283550208", "viewId": null, "name": "Digioh Impression", "category": "other", "apiName": "digioh_impression", "eventType": "custom", "eventFilter": null}, {"id": "4900821104590848", "viewId": null, "name": "chatbot_cta_click", "category": "other", "apiName": "chatbot_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "4906044451717120", "viewId": "24990560583", "name": "Asurion HP | Hamburger Menu Opens", "category": "other", "apiName": "23755061915_asurion_hp__hamburger_menu_opens", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "button:has([data-icon-name=\"hamburger-menu\"])"}}, {"id": "4908123660484608", "viewId": null, "name": "atc_addon_complete", "category": "other", "apiName": "atc_addon_complete", "eventType": "custom", "eventFilter": null}, {"id": "4918917123014656", "viewId": null, "name": "[ASURC-116] Clicks \"View Plan Details\" link", "category": "other", "apiName": "asurc116_clicks_view_plan_details_link", "eventType": "custom", "eventFilter": null}, {"id": "4980076322750464", "viewId": null, "name": "[PJS] HP Care Complete | Enrollment Flow | Step 1 | Continue Click", "category": "other", "apiName": "pjs_hp_care_complete_step_1_continue_click", "eventType": "custom", "eventFilter": null}, {"id": "4982991928164352", "viewId": null, "name": "AMZCP My Account Upsell Card CTA Click", "category": "other", "apiName": "amzcp_myaccount_upsell_card_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "4983419159969792", "viewId": "6435652225466368", "name": "[jdp] Buy a refurbished phone", "category": "other", "apiName": "23755061915_buy_a_refurbished_phone", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[data-analytics-id*=\"Simple Card\"]:nth-child(4)"}}, {"id": "5005935677014016", "viewId": null, "name": "[PJS][ASURC-114] HomePlus Sign Up Continue (Cross-Funnel)", "category": "other", "apiName": "asurc114_homeplus_sign_up_continue_cross_funnel", "eventType": "custom", "eventFilter": null}, {"id": "5019906769420288", "viewId": null, "name": "AMZCP My Account Support Chat Start Click", "category": "other", "apiName": "amzcp_myaccount_support_chat_start_click", "eventType": "custom", "eventFilter": null}, {"id": "5020680048082944", "viewId": null, "name": "valueprops_checkbox_toggle", "category": "other", "apiName": "valueprops_checkbox_toggle", "eventType": "custom", "eventFilter": null}, {"id": "5036550749159424", "viewId": null, "name": "oow_scheduler_funnel_entry", "category": "other", "apiName": "oow_scheduler_funnel_entry", "eventType": "custom", "eventFilter": null}, {"id": "5036573591339008", "viewId": null, "name": "AMZCP My Account Protected Products Card Click", "category": "other", "apiName": "amzcp_myaccount_protected_products_card_click", "eventType": "custom", "eventFilter": null}, {"id": "5066808135254016", "viewId": null, "name": "chat_widget_text_input", "category": "other", "apiName": "chat_widget_text_input", "eventType": "custom", "eventFilter": null}, {"id": "5071209960833024", "viewId": "24990560583", "name": "Card | Start a claim", "category": "other", "apiName": "23755061915_start_a_claim", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-analytics-id='Simple Card | Start a claim']"}}, {"id": "5073050969309184", "viewId": null, "name": "Video Click", "category": "other", "apiName": "video_click", "eventType": "custom", "eventFilter": null}, {"id": "5106506402627584", "viewId": null, "name": "[ASURC-122] \"Allow Notifications\" Click", "category": "other", "apiName": "asurc122_allow_notifications_click", "eventType": "custom", "eventFilter": null}, {"id": "5113869471842304", "viewId": null, "name": "[ASURC-80] User Submits Chat Entry", "category": "other", "apiName": "asurc80_user_interacts_with_chat_input_feature", "eventType": "custom", "eventFilter": null}, {"id": "5131177057583104", "viewId": null, "name": "[PJS][ASURC-112] ATC2 ONLY Continue Click (Funnel Complete)", "category": "other", "apiName": "pjs_asurc112_atc2_only_continue_click_funnel_complete", "eventType": "custom", "eventFilter": null}, {"id": "5135276826165248", "viewId": null, "name": "expert_call_cta_click", "category": "other", "apiName": "expert_call_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "5175060843986944", "viewId": "6435652225466368", "name": "[jdp] Book an expert repair", "category": "other", "apiName": "23755061915_book_an_expert_repair", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[data-analytics-id*=\"Simple Card | Scheduler\"]"}}, {"id": "5222410845159424", "viewId": null, "name": "book_repair", "category": "other", "apiName": "book_repair", "eventType": "custom", "eventFilter": null}, {"id": "5241768824799232", "viewId": null, "name": "call_store", "category": "other", "apiName": "call_store", "eventType": "custom", "eventFilter": null}, {"id": "5256269429211136", "viewId": null, "name": "hpcare_funnel_entry", "category": "other", "apiName": "hpcare_funnel_entry", "eventType": "custom", "eventFilter": null}, {"id": "5277103545909248", "viewId": null, "name": "oow_scheduler_damageType_step", "category": "other", "apiName": "oow_scheduler_damageType_step", "eventType": "custom", "eventFilter": null}, {"id": "5302028547653632", "viewId": null, "name": "[ASURC-125] Plan Changed", "category": "other", "apiName": "asurc125_plan_changed", "eventType": "custom", "eventFilter": null}, {"id": "5334502537428992", "viewId": null, "name": "atc_funnel_complete", "category": "other", "apiName": "atc_funnel_complete", "eventType": "custom", "eventFilter": null}, {"id": "5346857000370176", "viewId": null, "name": "[ASURC-122] Modal Dismissal", "category": "other", "apiName": "asurc122_modal_dismissal", "eventType": "custom", "eventFilter": null}, {"id": "5347117275807744", "viewId": null, "name": "ATC2 Calculator Sign Up Clicks Custom", "category": "other", "apiName": "atc2_calculator_sign_up_clicks_custom", "eventType": "custom", "eventFilter": null}, {"id": "5356618162896896", "viewId": null, "name": "appointment-banner-checkbox-confirmed", "category": "other", "apiName": "appointment-banner-checkbox-confirmed", "eventType": "custom", "eventFilter": null}, {"id": "5363703374151680", "viewId": null, "name": "oow_scheduler_funnel_completion", "category": "other", "apiName": "oow_scheduler_funnel_completion", "eventType": "custom", "eventFilter": null}, {"id": "5382409760276480", "viewId": null, "name": "[ASURC-116] Plan Dropdown Interaction", "category": "other", "apiName": "asurc116_plan_dropdown_interaction", "eventType": "custom", "eventFilter": null}, {"id": "5386265726550016", "viewId": null, "name": "get_estimate", "category": "other", "apiName": "get_estimate", "eventType": "custom", "eventFilter": null}, {"id": "5395623327825920", "viewId": null, "name": "AMZCP My Account Side Nav Services Click", "category": "other", "apiName": "amzcp_myaccount_side_nav_services_click", "eventType": "custom", "eventFilter": null}, {"id": "5453796927602688", "viewId": null, "name": "Verizon Onboarding Scheduler Event", "category": "other", "apiName": "verizon_onboarding_scheduler_event", "eventType": "custom", "eventFilter": null}, {"id": "5458107661287424", "viewId": "24990560583", "name": "Card | Tech installations", "category": "other", "apiName": "23755061915_card__tech_installations", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-analytics-id='Simple Card | Tech installations']"}}, {"id": "5509439755649024", "viewId": "24990560583", "name": "Card | Tech recycling", "category": "other", "apiName": "23755061915_card__tech_recycling", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-analytics-id='Simple Card | Tech recycling']"}}, {"id": "5512122935803904", "viewId": null, "name": "hero-logo-device-funnel-entry-cta-click", "category": "other", "apiName": "hero-logo-device-funnel-entry-cta-click", "eventType": "custom", "eventFilter": null}, {"id": "5516638183751680", "viewId": null, "name": "get_directions", "category": "other", "apiName": "get_directions", "eventType": "custom", "eventFilter": null}, {"id": "5531290372407296", "viewId": null, "name": "[PJS][ASRUC-112] ATC2/ATC5 Continue Click (Cross-Funnel)", "category": "other", "apiName": "pjs_asruc112_atc2_atc5_continue_click_cross_funnel", "eventType": "custom", "eventFilter": null}, {"id": "5568804252549120", "viewId": "5910022383730688", "name": "Tech Care | Sign Up Page 1 | Form Engagement", "category": "other", "apiName": "23755061915_tech_care__sign_up_page_1__form_engagement", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#create-account-form input, #create-continue-btn"}}, {"id": "5610131405144064", "viewId": null, "name": "supernav-store-locator-cta-click", "category": "other", "apiName": "supernav-store-locator-cta-click", "eventType": "custom", "eventFilter": null}, {"id": "5612641100496896", "viewId": null, "name": "Verizon Onboarding Hero TFN Event", "category": "other", "apiName": "verizon_onboarding_hero_tfn_event", "eventType": "custom", "eventFilter": null}, {"id": "5694399686901760", "viewId": null, "name": "hero-logo-phone-funnel-entry-cta-click", "category": "other", "apiName": "hero-logo-phone-funnel-entry-cta-click", "eventType": "custom", "eventFilter": null}, {"id": "5699505211834368", "viewId": "24990560583", "name": "Card | Get AT&T Protect Advantage", "category": "other", "apiName": "23755061915_card__get_att_protect_advantage", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-analytics-id='Simple Card | Get AT&T Protect Advantage']"}}, {"id": "5706726096240640", "viewId": null, "name": "AMZCP My Account Header Claims CTA Click", "category": "other", "apiName": "amzcp_myaccount_header_claims_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "5774062845165568", "viewId": "6435652225466368", "name": "[jdp] Call for a repair estimate", "category": "other", "apiName": "23755061915_call_for_a_repair_estimate", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[data-analytics-id*=\"Simple Card\"]:nth-child(2)"}}, {"id": "5801196514967552", "viewId": null, "name": "intro-section-store-locator-cta-click", "category": "other", "apiName": "intro-section-store-locator-cta-click", "eventType": "custom", "eventFilter": null}, {"id": "5803193259524096", "viewId": null, "name": "checkbox_clicked", "category": "other", "apiName": "checkbox_clicked", "eventType": "custom", "eventFilter": null}, {"id": "5806618084900864", "viewId": null, "name": "oow_scheduler_deliverySelection_step", "category": "other", "apiName": "oow_scheduler_deliverySelection_step", "eventType": "custom", "eventFilter": null}, {"id": "5813578758881280", "viewId": null, "name": "Click to Call UBIF Scheduler Confirmation Step", "category": "other", "apiName": "click_to_call_ubif_scheduler_confirmation_step", "eventType": "custom", "eventFilter": null}, {"id": "5830287750332416", "viewId": null, "name": "oow_scheduler_zipcode_step", "category": "other", "apiName": "oow_scheduler_zipcode_step", "eventType": "custom", "eventFilter": null}, {"id": "5863052084510720", "viewId": null, "name": "Get Estimate Total Clicks", "category": "other", "apiName": "get_estimate_total_clicks", "eventType": "custom", "eventFilter": null}, {"id": "5883380860977152", "viewId": null, "name": "oow_scheduler_deviceDetails_step", "category": "other", "apiName": "oow_scheduler_deviceDetails_step", "eventType": "custom", "eventFilter": null}, {"id": "5887354475380736", "viewId": null, "name": "[UBIF][ASURC-120] Geolocation Success", "category": "other", "apiName": "ubif_asurc120_geolocation_success", "eventType": "custom", "eventFilter": null}, {"id": "5891999409111040", "viewId": null, "name": "AMZCP My Account Side Nav Claims Click", "category": "other", "apiName": "amzcp_myaccount_side_nav_claims_click", "eventType": "custom", "eventFilter": null}, {"id": "5910965053554688", "viewId": null, "name": "oow_scheduler_deviceType_step", "category": "other", "apiName": "oow_scheduler_deviceType_step", "eventType": "custom", "eventFilter": null}, {"id": "5923609361776640", "viewId": null, "name": "[UBIF][ASURC-120] Use Current Location Click", "category": "other", "apiName": "ubif_asurc120_use_current_location_click", "eventType": "custom", "eventFilter": null}, {"id": "5956442834862080", "viewId": null, "name": "sticky_footer", "category": "other", "apiName": "sticky_footer", "eventType": "custom", "eventFilter": null}, {"id": "5970696325562368", "viewId": null, "name": "hero-text-otherdevice-funnel-entry-cta-click", "category": "other", "apiName": "hero-text-otherdevice-funnel-entry-cta-click", "eventType": "custom", "eventFilter": null}, {"id": "5972472474894336", "viewId": null, "name": "oow_scheduler_customerDetails_step", "category": "other", "apiName": "oow_scheduler_customerDetails_step", "eventType": "custom", "eventFilter": null}, {"id": "6037602344632320", "viewId": null, "name": "Verizon Onboarding TFN event", "category": "other", "apiName": "verizon_onboarding_tfn_event", "eventType": "custom", "eventFilter": null}, {"id": "6038115203153920", "viewId": null, "name": "[UBIF][ASURC-120] Geolocation Denial or Error", "category": "other", "apiName": "ubif_asurc120_geolocation_denial_or_error", "eventType": "custom", "eventFilter": null}, {"id": "6056972810715136", "viewId": null, "name": "checkbox_checked", "category": "other", "apiName": "checkbox_checked", "eventType": "custom", "eventFilter": null}, {"id": "6090877982998528", "viewId": null, "name": "store-locator-cta-click", "category": "other", "apiName": "store-locator-cta-click", "eventType": "custom", "eventFilter": null}, {"id": "6097479844757504", "viewId": null, "name": "[ASURC-122] Notification Permission Denied", "category": "other", "apiName": "asurc122_notification_permission_denied", "eventType": "custom", "eventFilter": null}, {"id": "6141897400385536", "viewId": "6435652225466368", "name": "[jdp] Store Locator (Option 2 or 3)", "category": "other", "apiName": "23755061915_store_location_options_2__3", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[data-analytics-id*=\"Simple Card\"]:nth-child(3),a[data-analytics-id*=\"Simple Card\"]:nth-child(2)"}}, {"id": "6142668682559488", "viewId": null, "name": "checkbox_unchecked", "category": "other", "apiName": "checkbox_unchecked", "eventType": "custom", "eventFilter": null}, {"id": "6160979029917696", "viewId": null, "name": "hero-logo-gameconsole-funnel-entry-cta-click", "category": "other", "apiName": "hero-logo-gameconsole-funnel-entry-cta-click", "eventType": "custom", "eventFilter": null}, {"id": "6162796803522560", "viewId": null, "name": "Scheduler Click", "category": "other", "apiName": "scheduler_click", "eventType": "custom", "eventFilter": null}, {"id": "6176497841471488", "viewId": null, "name": "AMZCP My Account Claims Start Click", "category": "other", "apiName": "amzcp_myaccount_claims_start_click", "eventType": "custom", "eventFilter": null}, {"id": "6180584985198592", "viewId": null, "name": "Verizon Onboarding _ Bot events", "category": "other", "apiName": "verizon_onboarding___bot_events", "eventType": "custom", "eventFilter": null}, {"id": "6227726885978112", "viewId": null, "name": "[ASURC-95] Clicks \"Check out now\" Banner CTA", "category": "other", "apiName": "asurc95_clicks_check_out_now__banner_cta", "eventType": "custom", "eventFilter": null}, {"id": "6293478800359424", "viewId": "24990560583", "name": "Card | Screen repair", "category": "other", "apiName": "23755061915_card__screen_repair", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-analytics-id='Simple Card | Screen repair']"}}, {"id": "6302945956855808", "viewId": null, "name": "[ASRUC-106] Asurion HP | Hero Engagement", "category": "other", "apiName": "asruc106_asurion_hp_hero_engagement", "eventType": "custom", "eventFilter": null}, {"id": "6304935617232896", "viewId": null, "name": "AMZCP My Account Support Ask A Question Click", "category": "other", "apiName": "amzcp_myaccount_support_ask_question_click", "eventType": "custom", "eventFilter": null}, {"id": "6347848111882240", "viewId": null, "name": "[ASURC-125] Clicks \"View Plan Details\" link", "category": "other", "apiName": "asurc125_clicks_view_plan_details_link", "eventType": "custom", "eventFilter": null}, {"id": "6399416228118528", "viewId": null, "name": "chat_icon_open", "category": "other", "apiName": "chat_icon_open", "eventType": "custom", "eventFilter": null}, {"id": "6411809695989760", "viewId": null, "name": "Digioh Error", "category": "other", "apiName": "digioh_error", "eventType": "custom", "eventFilter": null}, {"id": "6439413136228352", "viewId": null, "name": "Verizon Onboarding Hero Bot Event", "category": "other", "apiName": "verizon_onboarding_hero_bot_event", "eventType": "custom", "eventFilter": null}, {"id": "6442454006628352", "viewId": null, "name": "hero-logo-computer-funnel-entry-cta-click", "category": "other", "apiName": "hero-logo-computer-funnel-entry-cta-click", "eventType": "custom", "eventFilter": null}, {"id": "6451878796460032", "viewId": null, "name": "AMZCP My Account Side Nav Account Click", "category": "other", "apiName": "amzcp_myaccount_side_nav_account_click", "eventType": "custom", "eventFilter": null}, {"id": "6460532893417472", "viewId": null, "name": "[ASURC-125] Plan Dropdown Interaction", "category": "other", "apiName": "asurc125_plan_dropdown_interaction", "eventType": "custom", "eventFilter": null}, {"id": "6461540207951872", "viewId": "6435652225466368", "name": "[jdp] Troubleshoot at your local store", "category": "other", "apiName": "23755061915_troubleshoot_at_your_local_store", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[data-analytics-id*=\"Simple Card\"]:nth-child(3)"}}, {"id": "6487335664091136", "viewId": null, "name": "AMZCP My Account Widget Floating Action Button Click", "category": "other", "apiName": "amzcp_myaccount_widget_floating_action_button_click", "eventType": "custom", "eventFilter": null}, {"id": "6506421542453248", "viewId": null, "name": "atc_funnel_entry", "category": "other", "apiName": "atc_funnel_entry", "eventType": "custom", "eventFilter": null}, {"id": "6542844014362624", "viewId": null, "name": "[ASURC-80] User Interacts with Chat Feature", "category": "other", "apiName": "asurc80_user_interacts_with_chat_feature", "eventType": "custom", "eventFilter": null}, {"id": "6555905729232896", "viewId": null, "name": "hpcare_funnel_complete", "category": "other", "apiName": "hpcare_funnel_complete", "eventType": "custom", "eventFilter": null}, {"id": "6560933296734208", "viewId": null, "name": "optibugflagged", "category": "other", "apiName": "optibugflagged", "eventType": "custom", "eventFilter": null}, {"id": "6566266895335424", "viewId": null, "name": "Digioh Submission", "category": "other", "apiName": "digioh_submission", "eventType": "custom", "eventFilter": null}, {"id": "6653827936419840", "viewId": null, "name": "funnel-entry-cta-click", "category": "other", "apiName": "funnel-entry-cta-click", "eventType": "custom", "eventFilter": null}, {"id": "6660923163672576", "viewId": null, "name": "chat_widget_button_click", "category": "other", "apiName": "chat_widget_button_click", "eventType": "custom", "eventFilter": null}, {"id": "6711241945645056", "viewId": null, "name": "[ASURC-122] Notification Permission Granted", "category": "other", "apiName": "asurc122_notification_permission_granted", "eventType": "custom", "eventFilter": null}, {"id": "6744454481051648", "viewId": null, "name": "repair_cta_button_click", "category": "other", "apiName": "repair_cta_button_click", "eventType": "custom", "eventFilter": null}], "dimensions": [], "projectJS": function(){/***************************************************************************
 * Version: 3.01                                                           *
 * Updated: Wed, 14 Oct 2026 18:27:06 GMT                                  *
 * Boilerplate: default                                                    *
 * Modules:                                                                *
 * - holdEvents                         {b2f8ebd971eb3118ba1125ec6a68dfae} *
 * - spa/history-state-change           {3f223d5bb1d71abf7ad985674e153d9e} *
 * - tech-care-plan-tracking            {238b03d00725a9edffcc34b2d7984a12} *
 * - asurc-112-114-signup-continue      {ee59314c6f5bca82ac61e9a5d8cfd519} *
 * - hp-care-complete-enrollment-events {40ebd43d7f8b174a5dbd94120bb63eda} *
 * Contact engineering@crometrics.com for support.                         *
 ***************************************************************************/
!function(){var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,n,o)=>n in t?e(t,n,{"enumerable":!0,"configurable":!0,"writable":!0,"value":o}):t[n]=o,a=(e,a)=>{for(var c in a||(a={}))n.call(a,c)&&i(e,c,a[c]);if(t)for(var c of t(a))o.call(a,c)&&i(e,c,a[c]);return e};function c(e){let t=e.split(".");return t.length<=2?e:(t=t.slice(-3),["co","com"].includes(t[1])?t.join("."):t.slice(-2).join("."))}function r(e,t,{"duration":n,"domain":o=c(window.location.hostname),"sameSite":i="Lax","secure":a=!1}={}){let r,s="".concat(e,"=").concat(t,"; Path=/");if(n instanceof Date)r=n;else if(n>0){const e=60*n*60*1e3;r=new Date,r.setTime(r.getTime()+e)}r&&(s+="; Expires=".concat(r.toUTCString())),o&&(s+="; Domain=".concat(o)),s+="; SameSite=".concat(i),(a||"none"===i.toLowerCase())&&(s+="; Secure;"),document.cookie=s}function s(e){const t="".concat(e,"="),n=document.cookie.split(";");for(const e of n){const n=e.trim();if(0===n.indexOf(t))return n.substring(t.length,n.length)}return null}function d(e,{"domain":t=window.location.hostname.split(".").slice(-2).join(".")}={}){let n="".concat(e,"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/");t&&(n+="; domain=".concat(t)),document.cookie=n}var l=(e,t=window.location.search)=>new URLSearchParams(t).get(e),u=function(...e){},p=e=>console[e].bind(window,"%c[PJS]","color:white;background:#12659d;"),w=e=>console[e].bind(window,"%c[cro]","color:white;background:#ff590b;"),m={"teardownEvent":"crometrics.teardown","activationEvent":"crometrics.activated","croModeParam":"cro_mode","croModeDomain":void 0,"croModeDuration":1},h=(e,t)=>(n,o,i={})=>{const{"undoEvent":a=t}=i,c=e(n,o,i);return a&&window.addEventListener(a,c,{"once":!0}),()=>{a&&window.removeEventListener(a,c),c()}},_=(e,t)=>(n,o=t)=>new Promise(t=>{const i=e(n,t,{"once":!0});o&&window.addEventListener(o,i,{"once":!0})}),g=e=>{const t=a(a({},m),e),n={"params":t,"disabled":!1,"mode":void 0,"log":u,"debug":u,"error":p("error"),"utils":{"cookie":{"set":r,"get":s,"del":d},"getParam":l,"log":u,"debug":u,"error":w("error")},"exports":{},"setMode"(e,o){const{"croModeParam":i,"croModeDuration":c,"croModeDomain":s}=t;n.mode=((e,t,n)=>{if(t&&/^[\w-]+$/.test(t))return r(e,t,n),console.log('Cro Metrics "'.concat(t,'" mode enabled.')),t;d(e,n),console.log("Cro Metrics logging and qa modes disabled.")})(i,e,a({"duration":c,"domain":s},o)),void 0!==n.mode?(n.log=p("info"),n.debug=p("debug"),n.utils.log=w("info"),n.utils.debug=w("debug")):n.log=n.utils.log=n.debug=n.utils.debug=u}},o=(i=t.croModeParam,l(i)||s(i)||void 0||n.mode);var i;return o&&n.setMode(o),n};!function(e,t){if(window.CRO_PJS)return;window.optimizely=window.optimizely||[];const n=window.CRO_PJS=g(t);var o;document.body&&n.log("Nonstandard snippet loading detected! See https://support.crometrics.com/engineering/why-to-not-use-async-snippet-installations for details."),o=()=>{const t=window.optimizely.get("utils"),{"revision":o}=window.optimizely.get("data");n.log("Optimizely revision: ".concat(o));const{"teardownEvent":i}=n.params;var a;Object.assign(n.utils,(({"observeSelector":e,"waitUntil":t},n)=>({"observeSelector":h(e,n),"waitForElement":_(e,n),"waitUntil":t}))(t,i)),a=e=>{n.log("Metric fired: ".concat(e.name," <").concat(e.apiName,">"),e.tags,e.properties)},window.optimizely.push({"type":"addListener","filter":{"type":"analytics","name":"trackEvent"},"handler":e=>{e.data.id=e.data.id||e.data.apiName,a(e.data)}});try{e(n)}catch(e){"killswitch"!==e&&n.error(e),n.disabled=!0,window.optimizely.push({"type":"disable"}),n.log("Optimizely has been disabled.")}},window.optimizely.initialized?o():window.optimizely.push({"type":"addListener","filter":{"type":"lifecycle","name":"initialized"},"handler":o}),(e=>{window.optimizely.push({"type":"addListener","filter":{"type":"lifecycle","name":"activated"},"handler":e})})(()=>{n.debug('Dispatching "'.concat(n.params.activationEvent,'" window event.')),window.dispatchEvent(new CustomEvent(n.params.activationEvent))})}(function(e){var t=e.log.bind(window,"[project]"),n=e.debug.bind(window,"[oli/spa]");function o(e,t,n){const o=e[t];e[t]=function(...e){const t="function"==typeof o&&o.apply(this,e);try{n(...e)}catch(e){console.error(e)}return t}}var i=(()=>{var e;return(null==(e=window.CRO_PJS.params)?void 0:e.teardownEvent)||"spaPageEnd"})(),a=e=>{let t=window.location.href;const i=o=>{o.replace(/(#|#!\/?)$/,"")!==t&&(n("SPA transition: ".concat(t," -> ").concat(o)),e(o,t),t=o)},a=e=>{e&&i("string"==typeof e?new URL(e,location.href).href:String(e))};o(window.history,"pushState",(e,t,n)=>a(n)),o(window.history,"replaceState",(e,t,n)=>a(n)),window.addEventListener("popstate",()=>{i(window.location.href)})},c=(e,t)=>{window.optimizely.push({"type":"addListener","filter":{"type":"lifecycle","name":"pageActivated"},"handler":n=>{t&&n.data.page.id!==String(t)||e(n.data)}})},r=()=>{window.optimizely.push({"type":"activate"})},s=(e,t={},n={})=>{window.optimizely.push({"type":"event","eventName":e,"tags":t,"properties":n})};var d=e.log.bind(window,"[tech-care-plan-tracking]"),l="dataLayer",u=(e,{"dataLayerKey":t=l,"withPastData":n=!0}={})=>((e=l)=>new Promise(t=>{!function n(){return window[e]&&"function"==typeof window[e].push?t(window[e]):setTimeout(n,50)}()}))(t).then(t=>{if(n)for(const n of t)e(n);!function(e,t,n){const o=e[t];e[t]=function(...e){try{n(...e)}catch(e){console.error(e)}return"function"==typeof o&&o.apply(this,e)}}(t,"push",e)}),p=(e,t="crometrics:datalayer")=>((e,t,n={"passive":!0})=>{const o=e=>t(e.detail,e);return window.addEventListener(e,o,n),()=>{window.removeEventListener(e,o)}})(t,e),w=(()=>window.CRO_PJS)(),m=(()=>w.utils)(),h=(()=>m.cookie.set)(),_=(()=>m.cookie.del)();var g=e.debug.bind(window,"[asurc-112-114-signup-continue]");var f=e.debug.bind(window,"[hp-care-complete-enrollment-events]");t("Revision v2");var v=(t,n,o)=>{try{return n(o)}catch(n){e.error("[".concat(t,"]"),n)}};v("shouldHoldEvents",()=>!document.URL.includes("//www.asurion.com/program/ubreakifix-membership/")&&(document.URL.includes("//www.asurion.com")||document.URL.includes("//www.ubreakifix.com")))&&v("holdEvents",()=>{window.optimizely.push({"type":"holdEvents"})},{}),v("spa/history-state-change",function(){a((e=>{let t;return()=>{n('Dispatching "'.concat(i,'" window event.')),window.dispatchEvent(new CustomEvent(i)),clearTimeout(t),t=setTimeout(e)}})(r))},{}),v("tech-care-plan-tracking",function(){c(()=>{const e=((e,t=window.location.search)=>new URLSearchParams(t).get(e))("plan");d("Tech Care Plan: ".concat(e)),h("pjs_tech_care_plan",e,{"duration":720})},"5910022383730688"),p(e=>{"funnel_end"===e.event&&_("pjs_tech_care_plan")}),p(e=>{"funnel_stop"===e.event&&_("pjs_tech_care_plan")})},{}),v("asurc-112-114-signup-continue",function(){c(()=>{g("Tech Care | Sign Up Page 1 Activated");const e=new URL(window.location.href).searchParams.get("from");"homeplus"===e&&u(e=>{"funnel_continue"===e.event&&s("asurc114_homeplus_sign_up_continue_cross_funnel")}),"atc2"===e&&u(e=>{"funnel_continue"===e.event&&(s("pjs_asurc112_atc5_only_step_1_continue_click"),s("pjs_asruc112_atc2_atc5_continue_click_cross_funnel"))})},5910022383730688),c(()=>{g("Homeplus Activated"),u(e=>{"digioh_box_submit"===e[1]&&s("asurc114_homeplus_sign_up_continue_cross_funnel")})},4616165717180416),c(()=>{g("ATC2 Landing Page Activated"),u(e=>{"digioh_box_display"===e[1]&&s("pjs_asurc112_atc2_funnel_entry"),"digioh_box_submit"===e[1]&&(s("pjs_asurc112_atc2_only_continue_click_funnel_complete"),s("pjs_asruc112_atc2_atc5_continue_click_cross_funnel"))})},4994165990227968)},{}),v("hp-care-complete-enrollment-events",function(){let e=!1;c(()=>{e||(e=!0,f("HP Care Complete | Enrollment Flow | Step 1 activated"),u(e=>{"funnel_continue"===e.event&&s("pjs_hp_care_complete_step_1_continue_click")}))},"6254114745614336")},{})},{})}();
}, "plugins": [function(PluginManager) {
  
  PluginManager.registerAnalyticsTracker('28945410017', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['28945410017'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        (function () {
 function _fs() { return window[window['_fs_namespace']]; }
 utils = window.optimizely.get('utils');
 utils.waitUntil(function () {
   return typeof _fs() === 'function';
 }).then(function () {
   var campaignStates = window.optimizely.get('state').getCampaignStates({ isActive: true });
   for (var campaignId in campaignStates) {
     var c = campaignStates[campaignId];
     if (c.isInCampaignHoldback !== true) {
       var payload = {};
       payload.campaign = {};
       payload.campaign.id_str = campaignId;
       payload.campaign.name_str = c.campaignName;
       if (c.experiment) {
         payload.experiment = {};
         payload.experiment.id_str = c.experiment.id;
         payload.experiment.name_str = c.experiment.name;
       }
       if (c.variation) {
         payload.variation = {};
         payload.variation.id_str = c.variation.id;
         payload.variation.name_str = c.variation.name;
       }
       _fs().event('Experiment', payload, 'Optimizely');
     }
   }
 });
})();
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
}
], "interestGroups": [], "tagGroups": []},l=__webpack_require__(4860),d="initializeOptimizelyPreview";if(l.initGlobalStore(f),u.populateDirectiveData(),r.clientHasAlreadyInitialized())e.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(r.shouldBailForDesktopApp())e.log("Main / Disabling because of desktop app.");else if(r.conflictInObservingChanges())e.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(r.shouldLoadInnie())a.registerFunction("getProjectId",(function(){return f.projectId})),a.registerFunction("getAccountId",(function(){return f.accountId})),c.addScriptAsync("https://app.optimizely.com/js/innie.js"),e.log("Main / Disabling in favor of the editor client.");else if(r.shouldLoadEmbeddedEditor())e.log("Main / Loading embedded editor"),s.loadEmbeddedEditor("https://app.optimizely.com/dist/visual-editor/main.js");else if(r.shouldLoadPreview()){(r.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:f}),e.log("Main / Disabling in favor of the preview client."),__webpack_require__(9647).setupPreviewGlobal(),__webpack_require__(9647).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:f}),r.isSlave()||(a.registerFunction("getProjectId",(function(){return f.projectId})),c.addScriptSync("https://cdn.optimizely.com/js/preview2/23755061915.js"))}else if(r.shouldBootstrapDataForPreview()){a.registerFunction(d,(function(n){t(),a.unregisterFunction(d)}));var v=r.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:a.getFunction("getProjectId")();p=r.getProjectToken(),g=v,m=r.getPreviewLayerIds(),o="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",p).replace("__PROJECT_ID__",g).replace("__PREVIEW_LAYER_IDS__",m.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0);var h=r.getForceVariationIds();h&&h.length>0&&(o+="&optimizely_x="+h.join(",")),c.addScriptSync(o),__webpack_require__(9647).setupPreviewGlobal(),c.addScriptAsync("/dist/js/preview_ui.js")}else r.shouldBootstrapDataForEditor()?(a.registerFunction(d,(function(n){t(),a.unregisterFunction(d)})),c.addScriptAsync(window.optimizely_editor_data_endpoint)):r.shouldInitialize()&&t();var p,g,m;n.timeEnd("block");var b=n.now();n.setMark("optimizelyFinished",b,b)}}try{main()}catch(t){try{__webpack_require__(673).handleError(t)}catch(t){console.log(t)}}})();