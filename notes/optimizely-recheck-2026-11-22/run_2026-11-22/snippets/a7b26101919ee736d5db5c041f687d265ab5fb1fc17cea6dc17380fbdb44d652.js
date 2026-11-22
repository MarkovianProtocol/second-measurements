/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={3958:function(t,n,e){var i=e(2702)(),r=e(7002);t.exports=function(t,n){function e(n){if(!(this instanceof e))return new e(n);try{throw new Error(n)}catch(n){n.name=t,this.stack=n.stack}i&&this.stack&&(this.stack=r(this.stack,t,n)),this.message=n||"",this.name=t}return e.prototype=new(n||Error),e.prototype.constructor=e,e.prototype.inspect=function(){return this.message?"["+t+": "+this.message+"]":"["+t+"]"},e.prototype.name=t,e}},7002:function(t){"use strict";t.exports=function(t,n,e){var i=n;return e&&(i+=": "+e),t=i+t.slice(t.indexOf("\n"))}},2702:function(t){"use strict";t.exports=function(){var t=new Error("yep");return!!t.stack&&"Error: yep\n"===t.stack.substr(0,11)}},1375:function(t,n,e){t.exports=function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}var i=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,a=void 0,u=function(t,n){y[r]=t,y[r+1]=n,2===(r+=2)&&(a?a(w):I())};function c(t){a=t}function s(t){u=t}var f="undefined"!=typeof window?window:void 0,l=f||{},d=l.MutationObserver||l.WebKitMutationObserver,v="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){return function(){return process.nextTick(w)}}function g(){return void 0!==o?function(){o(w)}:_()}function m(){var t=0,n=new d(w),e=document.createTextNode("");return n.observe(e,{characterData:!0}),function(){e.data=t=++t%2}}function b(){var t=new MessageChannel;return t.port1.onmessage=w,function(){return t.port2.postMessage(0)}}function _(){var t=setTimeout;return function(){return t(w,1)}}var y=new Array(1e3);function w(){for(var t=0;t<r;t+=2)(0,y[t])(y[t+1]),y[t]=void 0,y[t+1]=void 0;r=0}function E(){try{var t=e(4118);return o=t.runOnLoop||t.runOnContext,g()}catch(t){return _()}}var I=void 0;function A(t,n){var e=arguments,i=this,r=new this.constructor(S);void 0===r[O]&&Q(r);var o,a=i._state;return a?(o=e[a-1],u((function(){return $(a,r,o,i._result)}))):q(i,r,t,n),r}function T(t){var n=this;if(t&&"object"==typeof t&&t.constructor===n)return t;var e=new n(S);return V(e,t),e}I=v?p():d?m():h?b():void 0===f?E():_();var O=Math.random().toString(36).substring(16);function S(){}var k=void 0,R=1,C=2,N=new H;function D(){return new TypeError("You cannot resolve a promise with itself")}function x(){return new TypeError("A promises callback cannot return that same promise.")}function j(t){try{return t.then}catch(t){return N.error=t,N}}function M(t,n,e,i){try{t.call(n,e,i)}catch(t){return t}}function P(t,n,e){u((function(t){var i=!1,r=M(e,n,(function(e){i||(i=!0,n!==e?V(t,e):F(t,e))}),(function(n){i||(i=!0,z(t,n))}),"Settle: "+(t._label||" unknown promise"));!i&&r&&(i=!0,z(t,r))}),t)}function L(t,n){n._state===R?F(t,n._result):n._state===C?z(t,n._result):q(n,void 0,(function(n){return V(t,n)}),(function(n){return z(t,n)}))}function U(t,e,i){e.constructor===t.constructor&&i===A&&e.constructor.resolve===T?L(t,e):i===N?(z(t,N.error),N.error=null):void 0===i?F(t,e):n(i)?P(t,e,i):F(t,e)}function V(n,e){n===e?z(n,D()):t(e)?U(n,e,j(e)):F(n,e)}function B(t){t._onerror&&t._onerror(t._result),G(t)}function F(t,n){t._state===k&&(t._result=n,t._state=R,0!==t._subscribers.length&&u(G,t))}function z(t,n){t._state===k&&(t._state=C,t._result=n,u(B,t))}function q(t,n,e,i){var r=t._subscribers,o=r.length;t._onerror=null,r[o]=n,r[o+R]=e,r[o+C]=i,0===o&&t._state&&u(G,t)}function G(t){var n=t._subscribers,e=t._state;if(0!==n.length){for(var i=void 0,r=void 0,o=t._result,a=0;a<n.length;a+=3)i=n[a],r=n[a+e],i?$(e,i,r,o):r(o);t._subscribers.length=0}}function H(){this.error=null}var Y=new H;function K(t,n){try{return t(n)}catch(t){return Y.error=t,Y}}function $(t,e,i,r){var o=n(i),a=void 0,u=void 0,c=void 0,s=void 0;if(o){if((a=K(i,r))===Y?(s=!0,u=a.error,a.error=null):c=!0,e===a)return void z(e,x())}else a=r,c=!0;e._state!==k||(o&&c?V(e,a):s?z(e,u):t===R?F(e,a):t===C&&z(e,a))}function W(t,n){try{n((function(n){V(t,n)}),(function(n){z(t,n)}))}catch(n){z(t,n)}}var X=0;function J(){return X++}function Q(t){t[O]=X++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Z(t,n){this._instanceConstructor=t,this.promise=new t(S),this.promise[O]||Q(this.promise),i(n)?(this._input=n,this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?F(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&F(this.promise,this._result))):z(this.promise,tt())}function tt(){return new Error("Array Methods must be provided an Array")}function nt(t){return new Z(this,t).promise}function et(t){var n=this;return i(t)?new n((function(e,i){for(var r=t.length,o=0;o<r;o++)n.resolve(t[o]).then(e,i)})):new n((function(t,n){return n(new TypeError("You must pass an array to race."))}))}function it(t){var n=new this(S);return z(n,t),n}function rt(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ot(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function at(t){this[O]=J(),this._result=this._state=void 0,this._subscribers=[],S!==t&&("function"!=typeof t&&rt(),this instanceof at?W(this,t):ot())}function ut(){var t=void 0;if(void 0!==e.g)t=e.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var i=null;try{i=Object.prototype.toString.call(n.resolve())}catch(t){}if("[object Promise]"===i&&!n.cast)return}t.Promise=at}return Z.prototype._enumerate=function(){for(var t=this.length,n=this._input,e=0;this._state===k&&e<t;e++)this._eachEntry(n[e],e)},Z.prototype._eachEntry=function(t,n){var e=this._instanceConstructor,i=e.resolve;if(i===T){var r=j(t);if(r===A&&t._state!==k)this._settledAt(t._state,n,t._result);else if("function"!=typeof r)this._remaining--,this._result[n]=t;else if(e===at){var o=new e(S);U(o,t,r),this._willSettleAt(o,n)}else this._willSettleAt(new e((function(n){return n(t)})),n)}else this._willSettleAt(i(t),n)},Z.prototype._settledAt=function(t,n,e){var i=this.promise;i._state===k&&(this._remaining--,t===C?z(i,e):this._result[n]=e),0===this._remaining&&F(i,this._result)},Z.prototype._willSettleAt=function(t,n){var e=this;q(t,void 0,(function(t){return e._settledAt(R,n,t)}),(function(t){return e._settledAt(C,n,t)}))},at.all=nt,at.race=et,at.resolve=T,at.reject=it,at._setScheduler=c,at._setAsap=s,at._asap=u,at.prototype={constructor:at,then:A,catch:function(t){return this.then(null,t)}},at.polyfill=ut,at.Promise=at,at}()},3826:function(t){"use strict";t.exports=function(t){var n,e={};if(!(t instanceof Object)||Array.isArray(t))throw new Error("keyMirror(...): Argument must be an object.");for(n in t)t.hasOwnProperty(n)&&(e[n]=n);return e}},2627:function(t){"use strict";t.exports=function(t,n,e,i){Object.defineProperty(t,n,{get:function(){var t=e.call(this);return Object.defineProperty(this,n,{value:t,enumerable:!!i,writable:!0}),t},set:function(t){return Object.defineProperty(this,n,{value:t,enumerable:!!i,writable:!0}),t},enumerable:!!i,configurable:!0})}},9891:function(t){"use strict";var n=Element.prototype,e=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;t.exports=function(t,n){if(e)return e.call(t,n);for(var i=t.parentNode.querySelectorAll(n),r=0;r<i.length;r++)if(i[r]==t)return!0;return!1}},5556:function(t){!function(){function n(t,n){var e,i,r,o,a,u,c,s;for(e=3&t.length,i=t.length-e,r=n,a=3432918353,u=461845907,s=0;s<i;)c=255&t.charCodeAt(s)|(255&t.charCodeAt(++s))<<8|(255&t.charCodeAt(++s))<<16|(255&t.charCodeAt(++s))<<24,++s,r=27492+(65535&(o=5*(65535&(r=(r^=c=(65535&(c=(c=(65535&c)*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295)<<13|r>>>19))+((5*(r>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16);switch(c=0,e){case 3:c^=(255&t.charCodeAt(s+2))<<16;case 2:c^=(255&t.charCodeAt(s+1))<<8;case 1:r^=c=(65535&(c=(c=(65535&(c^=255&t.charCodeAt(s)))*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295}return r^=t.length,r=2246822507*(65535&(r^=r>>>16))+((2246822507*(r>>>16)&65535)<<16)&4294967295,r=3266489909*(65535&(r^=r>>>13))+((3266489909*(r>>>16)&65535)<<16)&4294967295,(r^=r>>>16)>>>0}var e=n;e.v2=function(t,n){for(var e,i=t.length,r=n^i,o=0;i>=4;)e=1540483477*(65535&(e=255&t.charCodeAt(o)|(255&t.charCodeAt(++o))<<8|(255&t.charCodeAt(++o))<<16|(255&t.charCodeAt(++o))<<24))+((1540483477*(e>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^(e=1540483477*(65535&(e^=e>>>24))+((1540483477*(e>>>16)&65535)<<16)),i-=4,++o;switch(i){case 3:r^=(255&t.charCodeAt(o+2))<<16;case 2:r^=(255&t.charCodeAt(o+1))<<8;case 1:r=1540483477*(65535&(r^=255&t.charCodeAt(o)))+((1540483477*(r>>>16)&65535)<<16)}return r=1540483477*(65535&(r^=r>>>13))+((1540483477*(r>>>16)&65535)<<16),(r^=r>>>15)>>>0},e.v3=n,t.exports=e}()},1691:function(t,n,e){var i=e(5556).v3,r=Math.pow(2,32),o=function(t,n){return(i(t,n)>>>0)/r};t.exports={Seed:{IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},hashToHex:function(t,n){var e=i(t,n);return(e>>>16).toString(16)+(65535&e).toString(16)},hashToInt:function(t,n,e){return Math.floor(o(t,n)*e)},hashToReal:o,toByteString:function(t){var n=String.fromCharCode;return t.replace(/[\S\s]/gi,(function(t){t=t.charCodeAt(0);var e=n(255&t);return t>255&&(e=n(t>>>8&255)+e),t>65535&&(e=n(t>>>16)+e),e}))}}},8674:function(t,n,e){var i=e(8275).pick,r=e(2025).get("stores/audience_data"),o=e(7566),a=e(3111),u=e(2895),c=e(7474);function s(t){var n=["type","selector","attributes","value"],e=Object.assign({},t);return e.changeSet=t.changeSet.map((function(t){return i(c.dereferenceChangeId(t),n)})),e}n.emitLayerDecided=function(t){var n=(t.decisionTicket?t.decisionTicket.audienceIds:[]).map((function(t){return{id:t,name:r.get(t).name}})),e={type:a.TYPES.LIFECYCLE,name:"layerDecided",data:Object.assign(t,{audiences:n})},i=c.translateLayerEventToCampaignEvent(e);o.emit(e),o.emit(i)},n.emitViewActivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"viewActivated",data:t},e=c.translateViewActivatedToPageActivated(n);o.emit(n),o.emit(e)},n.emitViewsActivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"viewsActivated",data:t};o.emit(n)},n.emitCampaignsDecided=function(t){o.emit({type:a.TYPES.LIFECYCLE,name:"campaignsDecided",data:{pageIds:t}})},n.emitPageDeactivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"pageDeactivated",data:t};o.emit(n)},n.emitActivateEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activate"},!0)},n.emitActivatedEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activated"})},n.emitInitializedEvent=function(){var t={type:a.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),o.emit(t)},n.emitOriginsSyncedEvent=function(){var t={type:a.TYPES.LIFECYCLE,name:"originsSynced"};o.emit(t)},n.emitActionAppliedEvent=function(t){var n={type:t.type,campaignId:t.layerId,pageId:t.pageId,experimentId:t.experimentId,variationId:t.variationId};u.defineProperty(n,"changes",(function(){return s(t).changeSet}),"actionAppliedEvent");var e={type:a.TYPES.ACTION,name:"applied",data:n};o.emit(e)},n.emitActionsForDecisionAppliedEvent=function(t,n){var e={decision:t};u.defineProperty(e,"actions",(function(){return n.map(s)}),"appliedAllForDecisionEvent");var i={type:a.TYPES.ACTION,name:"appliedAllForDecision",data:e};o.emit(i)},n.emitSendEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"sendEvents"};o.emit(t)},n.emitMaybeSendEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"maybeSendEvents"};o.emit(t)},n.emitHoldEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"holdEvents"};o.emit(t)}},188:function(t,n,e){Object.defineProperty(n,"u",{value:!0});var i=e(8275),r=i.cloneDeep,o=i.isEqual,a=i.mapValues,u=i.pick,c=i.pickBy,s=e(9207),f=e(2895),l=e(7474),d=e(5686),v=e(3272);function h(t,n,e,i){var r=t.getLayerState(i),o=n.get(i),a=e.get();if(!r||!o)return a?{layer:{name:a.layerName,id:a.layerId,policy:a.layerPolicy,integrationStringVersion:a.integrationStringVersion},experiment:{name:a.experimentName,id:a.experimentId},variation:{name:a.variationName,id:a.variationId},isLayerHoldback:!1}:null;if(d.isSingleExperimentPolicy(o.policy)&&r.decision.isLayerHoldback)return null;var u,c,s=r.decision.experimentId,f=r.decision.variationId;return s&&f&&(u=o.experiments.find((function(t){return t.id===s})))&&(c=u.variations.find((function(t){return t.id===f})))?{layer:{name:o.name,id:o.id,policy:o.policy,integrationStringVersion:o.integrationStringVersion},experiment:{name:u.name,id:u.id},variation:{name:c.name,id:c.id},isLayerHoldback:r.decision.isLayerHoldback}:null}function p(t,n,e,i,r,a,c){var s=[],f=t.getLayerStates();c.onlySingleExperiments&&(f=f.filter((function(t){var e=n.get(t.layerId);return e&&d.isSingleExperimentPolicy(e.policy)})));var l=e.getActiveViewIds(),h=f.map((function(t){var e,i=!!t.decision.variationId,o=t.decisionActivationId&&t.decisionActivationId===r.getActivationId(),a=v.getExperimentAndVariation(),u=a?a.variationId:null,c=i&&t.decision.variationId===u,s=((null==(e=n.get(null==t?void 0:t.layerId))?void 0:e.viewIds)||[]).every((function(t){return!l.includes(t)}));return Object.assign(t,{isActive:i&&o&&!s||c,visitorRedirected:c})}));return(a?"function"==typeof a?h.filter(a):h.filter((function(t){return Object.keys(a).every((function(n){return o(t[n],a[n])}))})):h).forEach((function(t){var e=function(t,n,e,i){var r,o,a=t.layerId,c=n.get(a)||{},s=(c.experiments||[]).map((function(t){return u(t,["id","name"])}));if(!i&&c.decisionMetadata&&c.decisionMetadata.offerConsistency)return;var f={id:a,campaignName:c.name||null,experiment:null,audiences:[],allExperiments:s,variation:null,reason:t.decision.reason,isActive:!!t.isActive,visitorRedirected:t.visitorRedirected,isInCampaignHoldback:t.decision.isLayerHoldback};t.decision&&t.decision.experimentId&&(r=(c.experiments||[]).find((function(n){return n.id===t.decision.experimentId}))),r&&(f.experiment=u(r,["id","name","campaignName"])),r&&t.decision.variationId&&(o=r.variations.find((function(n){return n.id===t.decision.variationId}))),o&&(f.variation=u(o,["id","name"]));var l=(t.decisionTicket.audienceIds||[]).map((function(t){return u(e.get(t),["id","name"])}));return f.audiences=l,c.decisionMetadata&&c.decisionMetadata.offerConsistency&&(f.pageId=t.pageId),f}(t,n,i,c.includeOfferConsistency);e&&s.push(e)})),s}n.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(t,n,e,i,r,o,a,u,c){var s={},d={},v={},h={audiences:t.getAudiencesMap(),events:e.getEventsMap(),campaigns:s,pages:r.getPagesMap(),experiments:d,variations:v,projectId:c.getProjectId(),snippetId:c.getSnippetId(),accountId:c.getAccountId(),dcpServiceId:c.getDCPServiceId(),revision:c.getRevision(),clientName:n.getClientName(),clientVersion:n.getClientVersion()},p=l.dereferenceChangeId;return i.getAll().forEach((function(t){f.defineProperty(s,t.id,(function(){var n=Object.assign({},t);return f.defineProperty(n,"changes",(function(){return(t.changes||[]).map(p)}),"campaign"),f.defineProperty(n,"experiments",(function(){return(t.experiments||[]).map((function(t){return d[t.id]}))}),"campaign"),n}),"campaignMap","byId"),(t.experiments||[]).forEach((function(t){f.defineProperty(d,t.id,(function(){var n=Object.assign({},t);return f.defineProperty(n,"changes",(function(){return(t.changes||[]).map(p)}),"experiment"),f.defineProperty(n,"variations",(function(){return(t.variations||[]).map((function(t){return v[t.id]}))}),"experiment"),n}),"experimentMap","byId"),(t.variations||[]).forEach((function(t){f.defineProperty(v,t.id,(function(){var n=Object.assign({},t);return f.defineProperty(n,"actions",(function(){return(t.actions||[]).map((function(t){return Object.assign({},t,{changes:(t.changes||[]).map(p)})}))}),"variation"),n}),"variationMap","byId")}))}))})),h}],n.visitor=["stores/visitor",function(t){return r(t.getVisitorProfile())}],n.visitor_id=["stores/visitor_id",function(t){return{randomId:t.getRandomId()}}],n.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(t,n,i,r,o,f,l){return{getTrafficExclusionStats:function(){return e(4308).getStats()},getCampaignStates:function(e){var r={};return p(i,n,o,t,f,e,{includeOfferConsistency:!1}).forEach((function(t){r[t.id]=t})),r},getExperimentStates:function(e){var r=p(i,n,o,t,f,e,{includeOfferConsistency:!1,onlySingleExperiments:!0}),a=["audiences","variation","reason","visitorRedirected","isActive"];return r.reduce((function(t,n){var e=n.allExperiments[0];return t[e.id]=Object.assign({},u(n,a),{id:e.id,experimentName:e.name,isInExperimentHoldback:n.isInCampaignHoldback}),t}),{})},getCampaignStateLists:function(e){var r={};return p(i,n,o,t,f,e,{includeOfferConsistency:!0}).forEach((function(t){var n=t.id;r[n]||(r[n]=[]),r[n].push(t)})),r},getPageStates:function(t){var n=o.getAll(),e=Object.keys(n).reduce((function(t,e){var i=n[e],o=r.get(i.id);return t[i.id]=Object.assign({},u(o,["id","name","apiName","category","staticConditions","tags"]),u(i,["isActive","metadata"])),t[i.id].isActive=!!t[i.id].isActive,t}),{});return t?c(e,t):e},isGlobalHoldback:function(){return f.isGlobalHoldback()},getActivationId:function(){return f.getActivationId()},getVariationMap:function(){var t=i.getLayerStates(),e={};return t.forEach((function(t){var i=n.get(t.layerId);if(t.decision&&t.decision.experimentId&&(e[t.decision.experimentId]={id:t.decision.variationId,name:null,index:null},i)){var r=(i.experiments||[]).find((function(n){return n.id===t.decision.experimentId}));if(r&&t.decision.variationId)var o=r.variations.find((function(n){return n.id===t.decision.variationId})),a=r.variations.findIndex((function(n){return n.id===t.decision.variationId}));o&&(e[t.decision.experimentId]={id:t.decision.variationId,name:o.name,index:a})}})),e},getActiveExperimentIds:function(){var t={},n=this.getCampaignStateLists({isActive:!0});return Object.keys(n).forEach((function(e){n[e].forEach((function(n){t[n.experiment.id]=!0}))})),Object.keys(t)},getRedirectInfo:function(){var t=v.getExperimentAndVariation();return t&&(t.referrer=v.getReferrer()),t},getDecisionString:function(t){if(!t)throw new Error("Must pass a config to getDecisionString");t=Object.assign({maxLength:255,shouldCleanString:!1},t);var e=h(i,n,l,t.campaignId);return e?s.generateAnalyticsString(e.layer,e.experiment,e.variation,e.isLayerHoldback,t.maxLength,t.shouldCleanString):null},getDecisionObject:function(t){if(!t)throw new Error("Must pass a config to getDecisionObject");t=Object.assign({maxLength:255,shouldCleanString:!1},t);var e=h(i,n,l,t.campaignId);if(!e)return null;var r=s.formatNamesAndIdsForAnalytics(e.layer,e.experiment,e.variation,t.shouldCleanString),o=a(r.names,(function(n,e){return s.combineAndTruncateIdAndName(n,r.idStrings[e],t.maxLength)})),u={experiment:o.experiment,variation:o.variation};return d.isSingleExperimentPolicy(e.layer.policy)||Object.assign(u,{campaign:o.layer,holdback:e.isLayerHoldback}),u}}}],n.utils=e(2671).create(),n.jquery=["env/jquery",function(t){return t}],n.event_emitter=e(5547)},9445:function(t,n,e){var i=e(7852),r=e(9454),o="optimizelyDataApi";n.registerFunction=function(t,n){var e=r.getGlobal(o);e||(e={},r.setGlobal(o,e)),e[t]||(e[t]=n)},n.unregisterFunction=function(t){var n=r.getGlobal(o);n&&n[t]&&(n[t]=function(){i.log('Ignoring attempt to call "'+o+"."+t+'" which has been unregistered.')})},n.getFunction=function(t){return r.getGlobal(o)[t]}},3737:function(t,n,e){var i=e(8275).isObject,r=e(7852),o=e(188),a=e(2025),u=a.get("stores/plugins"),c=e(136),s=e(6592),f=e(409),l=[e(3770),e(6708),e(8197)],d=["clientMetadata","cookieDomain","disable","load","optOut","rum"];n.push=function(t,n){var e,o,a,u;if(!Array.isArray(t)&&i(t))u=void 0!==t.version?t.version:1,e=t.type,a=[t];else if(Array.isArray(t))u=0,e=t[0],a=t.slice(1);else{if("string"!=typeof t)return r.warn("API / Ignoring non-array/object/string argument:",t),!1;u=0,e=t,a=[]}if(l[u]&&(o=l[u][e]),n&&-1===d.indexOf(e))return r.debug("API / Ignoring non high priority function:",e,a),!1;if(!o)return r.warn('API / No function found for "'+e+'" (v'+u+") with arguments:",a),!1;r.log('API / Executing: "'+e,'" with arguments:',a);try{o.apply(null,a),f.dispatch(c.RECORD_API_USAGE,{methodName:u?"v"+u+"."+e:e})}catch(t){r.error(t)}return!0},n.get=function(t){r.log('API / Getting module: "'+t+'"');var n=o[t];if(n?Array.isArray(n)&&(n=a.evaluate(n)):n=u.getPlugin(s.PluginTypes.apiModules,t),n)return f.dispatch(c.RECORD_API_USAGE,{methodName:"get."+t}),n;r.warn('Module "'+t+'" not found.')}},2895:function(t,n,e){var i=e(2627),r=e(136),o=e(409),a=e(7852);n.defineProperty=function(t,n,e,u,c){i(t,n,(function(){var t=["prop",u,c||n].join(".");return a.debug('Evaluating getter: "'+t+'"'),o.dispatch(r.RECORD_API_USAGE,{methodName:t}),e()}),!0)}},3770:function(t,n,e){var i=e(6708);function r(t){var n,e={};if(t)if(o(t))n=Number(t);else{if("object"!=typeof t)throw new Error("tracker: Revenue argument "+t+"not a number.");if("revenue"in(e=Object.assign({},t))){if(!o(e.revenue))throw new Error("tracker: Revenue value "+e.revenue+"not a number.");n=Number(e.revenue),delete e.revenue}}return void 0!==n&&(e.revenue=n),e}function o(t){return"number"==typeof t||"string"==typeof t&&!isNaN(Number(t))&&Number(t).toString()==t}n.activateGeoDelayedExperiments=function(t,n){n||(n=t.lists?"odds":"cdn3"),i.dataFromSource({data:t,source:n})},n.activateSiteCatalyst=function(t){t&&t.sVariable&&i.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:t.sVariable}})},n.bucketVisitor=function(t,n){if(t&&n){var e={experimentId:String(t)};n>256?e.variationId=String(n):e.variationIndex=String(n),i.bucketVisitor(e)}},n.bucketUser=n.bucketVisitor,n.disable=function(t){i.disable({scope:t})},n.log=function(t){void 0===t&&(t=!0),i.log({level:t?"INFO":"OFF"})},n.optOut=function(t){void 0===t&&(t=!0),i.optOut({isOptOut:t})},n.setCookieDomain=function(t){i.cookieDomain({cookieDomain:t})},n.setCookieExpiration=function(t){i.cookieExpiration({cookieExpirationDays:t})},n.setDimensionValue=function(t,n){var e={};e[t]=n,i.user({attributes:e})},n.setUserId=function(t){i.user({userId:t})},n.setGA4UserId=function(t){i.ga4User({ga4UserId:t})},n.storeThirdPartyData=function(t,n){i.dataFromSource({source:t,data:n})},n.trackEvent=function(t,n){i.event({eventName:t,tags:r(n)})}},7474:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.omit,a=e(2025),u=e(3019),c=e(2895),s=a.get("stores/change_data");n.translateDecisionToCampaignDecision=function(t){return f(r(t),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},n.translateLayerEventToCampaignEvent=function(t){var e={};return c.defineProperty(e,"campaign",(function(){return function(t){var e=r(t);return e.changes&&(e.changes=e.changes.map(n.dereferenceChangeId)),e.experiments&&e.experiments.forEach((function(t){t.changes&&(t.changes=t.changes.map(n.dereferenceChangeId)),t.variations&&t.variations.forEach((function(t){t.actions&&t.actions.forEach((function(t){t.changes&&(t.changes=t.changes.map(n.dereferenceChangeId))}))}))})),e}(t.data.layer)}),"campaignEvent"),e.decisionTicket=t.data.decisionTicket,e.decision=this.translateDecisionToCampaignDecision(t.data.decision),e.audiences=t.data.audiences,{type:"lifecycle",name:"campaignDecided",data:e}},n.translateViewActivatedToPageActivated=function(t){return{type:"lifecycle",name:"pageActivated",data:{page:t.data.view}}},n.dereferenceChangeId=function(t){var n=s.getChange(t);return n?u.safeReference(n):t};var f=function(t,n){var e=o(t,Object.keys(n));return Object.keys(n).forEach((function(i){var r=n[i];e[r]=t[i]})),e}},2671:function(t,n,e){var i=e(6761).Promise,r=e(7796).o,o=e(1166).F,a=e(5504).M,u=e(3329).poll,c=e(9558).x,s=e(6726).a;n.create=function(){return{observeSelector:r,onUrlChange:o,persistHtml:a,poll:u,Promise:i,waitForElement:c,waitUntil:s}}},6643:function(t){t.exports={DEFAULT_INTERVAL:20}},7796:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.isObject,a=(e(136),e(2025)),u=a.get("stores/directive"),c=e(1019),s=e(4970),f=(e(6592),e(409),e(9899).generate),l=e(3329),d=e(9454),v=(a.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),h={},p=function(t){p=function(){if(!u.shouldObserveChangesIndefinitely())return function(t){var n=l.poll(m.bind(null,t));h[t].cancelObservation=function(){n(),delete h[t]}};var t,n=function(){t.disconnect(),Object.keys(h).forEach(m),t.observe(i,e)},e={attributes:!0,childList:!0,subtree:!0},i=c.getDocumentElement();return t=s.create(n),function(n){var o=h[n];t.observe(i,e),o.cancelObservation=function(){delete h[n],r(h)&&t.disconnect()}}}(),p(t)};function g(t){var n=h[t];n&&n.cancelObservation&&n.cancelObservation()}function m(t){if(h[t]){if(function(t){var n=t.options.timeout;if(null!==n)if("function"==typeof n)try{return n()}catch(t){}else if(Date.now()-t.startTime>n)return!0;return!1}(h[t]))return 0===h[t].matchedCount&&"function"==typeof h[t].options.onTimeout&&h[t].options.onTimeout(),void g(t);var n=c.querySelectorAll(h[t].selector);n.length&&(n.forEach((function(n){n.l&&n.l[t]||h[t].callbackQueue.push(n)})),function(t){for(;h[t]&&h[t].callbackQueue.length;){var n=h[t].callbackQueue.shift();if(b(n,t),h[t].matchedCount=h[t].matchedCount+1,h[t].callback(n),h[t]&&h[t].options.once)return void g(t)}}(t))}}function b(t,n){t.l||(t.l={}),t.l[n]=!0}n.o=function(t,n,e){if(!function(t){try{c.querySelector(t)}catch(t){return!1}return!0}(t))throw new Error("observeSelector expects a valid css selector as its first argument");if("function"!=typeof n)throw new Error("observeSelector expects a function as its second argument");if(e&&(!o(e)||"function"==typeof e))throw new Error("observeSelector expects an object as its third argument");var i=f();return e=Object.assign({},v,e||{}),h[i]={callback:n,callbackQueue:[],matchedCount:0,options:e,selector:t,startTime:Date.now()},p(i),d.setTimeout(m.bind(null,i),0),g.bind(null,i)}},1166:function(t,n,e){var i=e(9899).generate,r=e(9454),o={},a=!1,u=null,c=null,s=null,f=null;function l(){a&&(window.history.pushState===s&&(window.history.pushState=u),window.history.replaceState===f&&(window.history.replaceState=c),u=null,c=null,s=null,f=null,a=!1)}function d(){var t=r.getHref();Object.keys(o).forEach((function(n){var e=o[n];e&&e(t)}))}n.F=function(t){var n=i(),e=0===Object.keys(o).length;return o[n]=t,e&&(r.addEventListener("popstate",d),r.addEventListener("hashchange",d),a||(u=window.history.pushState,c=window.history.replaceState,window.history.pushState=function(t,n,e){u.apply(window.history,arguments),d()},s=window.history.pushState,window.history.replaceState=function(t,n,e){c.apply(window.history,arguments),d()},f=window.history.replaceState,a=!0)),function(){!function(t){delete o[t],0===Object.keys(o).length&&(r.removeEventListener("popstate",d),r.removeEventListener("hashchange",d),l())}(n)}}},5504:function(t,n,e){var i=e(1019),r=e(9899).generate,o=e(4970),a={before:"beforebegin",after:"afterend",first_child:"afterbegin",last_child:"beforeend"},u=Object.keys(a),c=[];function s(t,n,e){var i,r,o=[];if("beforebegin"===n)for(i=t.previousSibling,r=0;r<e&&i;r++)o.unshift(i),i=i.previousSibling;else if("afterend"===n)for(i=t.nextSibling,r=0;r<e&&i;r++)o.push(i),i=i.nextSibling;else if("afterbegin"===n)for(i=t.firstChild,r=0;r<e&&i;r++)o.push(i),i=i.nextSibling;else if("beforeend"===n)for(i=t.lastChild,r=0;r<e&&i;r++)o.unshift(i),i=i.previousSibling;return o}function f(t){return document.documentElement.contains(t)}n.M=function(t,n,e){if("string"!=typeof t||!t)throw new Error("persistHtml: html must be a non-empty string");if(!function(t){try{i.querySelector(t)}catch(t){return!1}return!0}(n))throw new Error("persistHtml: invalid CSS selector: "+n);if(e=null!=e?e:"before",-1===u.indexOf(e))throw new Error("persistHtml: placement must be one of: "+u.join(", "));var l=a[e],d=i.querySelector(n);if(!d)throw new Error('persistHtml: no element found for selector "'+n+'"');if(("beforebegin"===l||"afterend"===l)&&!d.parentElement)throw new Error('persistHtml: placement "'+e+'" requires the anchor element to have a parent');var v=function(t){var n=document.createElement("div");return n.innerHTML=t,n.childNodes.length}(t);if(0===v)throw new Error("persistHtml: html produces no DOM nodes");var h=function(t){var n=document.createElement("div");n.innerHTML=t;var e=[];return Array.prototype.forEach.call(n.childNodes,(function(t){if(t.nodeType===Node.ELEMENT_NODE){var n=r();e.push(n),t.setAttribute("data-optly-persist-id",n)}})),{taggedHtml:n.innerHTML,ids:e}}(t);d.insertAdjacentHTML(l,h.taggedHtml);var p,g=s(d,l,v),m=!1,b={childList:!0,subtree:!0},_=i.getDocumentElement();function y(){if(!m){m=!0,p.disconnect();var t=c.indexOf(y);-1!==t&&c.splice(t,1),g.forEach((function(t){f(t)&&t.parentNode&&t.parentNode.removeChild(t)}))}}return(p=o.create((function(){if(!m&&g.some((function(t){return!f(t)}))){var t=i.querySelector(n);!t||("beforebegin"===l||"afterend"===l)&&!t.parentElement||(p.disconnect(),g.forEach((function(t){f(t)&&t.parentNode&&t.parentNode.removeChild(t)})),m||(t.insertAdjacentHTML(l,h.taggedHtml),g=s(t,l,v)),m||p.observe(_,b))}}))).observe(_,b),c.push(y),y}},3329:function(t,n,e){e(136);var i=e(2025),r=(e(6592),e(409),e(9899).generate),o=e(9454),a=e(6643).DEFAULT_INTERVAL,u=(i.get("stores/rum"),{});function c(t){u[t]&&Object.keys(u[t].callbacks).forEach((function(n){u[t].callbacks[n].call(null)}))}function s(t,n){u[n]&&u[n].callbacks[t]&&(delete u[n].callbacks[t],0===Object.keys(u[n].callbacks).length&&(clearInterval(u[n].id),delete u[n]))}n.poll=function(t,n){"number"!=typeof n&&(n=a),u[n]||(u[n]={callbacks:{},id:o.setInterval(c.bind(null,n),n)});var e=r();return u[n].callbacks[e]=t,s.bind(null,e,n)},n.cancelAll=function(){Object.keys(u).forEach((function(t){var n=u[t];clearInterval(n.id),delete u[t]}))}},9558:function(t,n,e){var i=e(6761).Promise,r=e(7796).o;n.x=function(t){return new i((function(n,e){r(t,n,{once:!0})}))}},6726:function(t,n,e){var i=e(6761).Promise,r=e(3329).poll;n.a=function(t){return new i((function(n,e){if(t())n();else var i=r((function(){t()&&(i(),n())}))}))}},6708:function(t,n,e){var i=e(8275).omit,r=e(136),o=e(3737),a=e(188),u=e(9480),c=e(6592),s=e(8131),f=e(8674),l=e(5192),d=e(8130).v,v=e(8298),h=e(4214),p=(e(673),e(8851)),g=e(7566),m=e(409),b=e(192),_=e(2042),y=e(587),w=e(7852),E=e(9937),I=(e(5894),e(2348)),A=e(4285),T=e(2025),O=T.get("stores/dimension_data"),S=T.get("stores/view"),k=T.get("stores/view_data"),R=T.get("stores/visitor_id"),C=T.get("stores/layer_data"),N=T.get("stores/directive"),D=n.ApiListenerError=d("ApiListenerError");n.event=function(t){var n;switch(t.eventType){case"click":n=function(t){var n;return t.eventData&&(n=p.create(t.eventData.id,t.eventData.apiName,"click",t.eventData)),function(){var t=s.trackClickEvent(n);t?w.log("API / Tracking click event:",t):w.log("API / Not tracking click event:",t)}}(t);break;case"decision":n=function(t){var n=t.eventData,e=_.createLayerState(n.layerId,n.experimentId,n.variationId,n.isLayerHoldback,n.isLayerConcluded),i=_.createSingle(n.layerId,n.experimentId,n.variationId);return function(){_.recordLayerDecision(e.layerId,e.decisionTicket,e.decision),w.log("API / Tracking decision event:",e),s.trackDecisionEvent(e.decision,e.decisionTicket,i)}}(t);break;case"pageview":n=function(t){var n=I.create(t.eventData.id,t.eventData.apiName),e=I.createState(n.id);return function(){var t=s.trackViewActivation(n,e);t?w.log("API / Tracking pageview event:",t):w.log("API / Not tracking pageview event:",t)}}(t);break;default:n=function(t){var n;return t.eventId&&(n=p.create(t.eventId,t.eventName,"custom")),I.updateAllViewTags(),function(){s.trackCustomEvent(t.eventName,t.tags,n,t.properties)?w.log("API / Tracking custom event:",t.eventName,t.tags):w.log("API / Not tracking custom event:",t.eventName)}}(t)}R.getBucketingId()?n():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postActivate,cleanupFn:n})},n.clientMetadata=function(t){0},n.priorRedirectString=function(t){},n.microsnippetError=function(t){},n.rum=function(t){m.dispatch(r.SET_RUM_DATA,t.eventData)},n.initialViewStates=function(t){var n=Object.keys(t.states||{}).map((function(n){return{id:n,isActive:t.states[n]}}));I.registerViews(n)},n.page=function(t){var n=k.getByApiName(t.pageName);if(!n)throw new Error('Unknown page "'+t.pageName+'"');var e=!t.hasOwnProperty("isActive")||t.isActive,i=function(){e?I.activateViaAPI(n,t.tags):(I.deactivate(n),w.log("API / Deactivated Page",I.description(n)))};R.getBucketingId()?i():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postViewsActivated,cleanupFn:i})},n.tags=function(t){I.setGlobalTags(t.tags)},n.user=function(t){w.log("API / Setting visitor custom attributes:",t.attributes),Object.keys(t.attributes||{}).forEach((function(n){var e,i,r=t.attributes[n],o=n,a=O.getById(n)||O.getByApiName(n);a&&(o=a.id,e=a.apiName,i=a.segmentId||a.id);var u={id:i,value:r};e&&(u.name=e),x(o,u,!0)}))},n.ga4User=function(t){t.ga4UserId?(w.log("API / Setting ga4 user id in the global store:",t.ga4UserId),m.dispatch(r.SET_GA4_USER_ID,t)):w.error('API / Argument "ga4UserId" is missing')};var x=function(t,n,e){var i=[{key:e?["custom",t]:[t],value:n,metadata:{lastModified:v.now()}}],o=function(){m.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:i})};R.getBucketingId()?o():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:o})};n.optOut=function(t){var n=!t.hasOwnProperty("isOptOut")||t.isOptOut;h.setOptOut(n)},n.cookieExpiration=function(t){var n=t.cookieExpirationDays;n<90&&(w.error('Argument "cookieExpirationDays"=',n,"less than minimum days:",90,", setting to minimum."),n=90),w.log("API / Setting cookie age to",n,"days."),m.dispatch(r.SET_COOKIE_AGE,86400*n)},n.extendCookieLifetime=function(t){t=Object.assign({isEnabled:!0},t),w.log("API / Setting cookie automatic lifetime extension to",t.isEnabled),m.dispatch(r.SET_COOKIE_AUTO_REFRESH,t.isEnabled)},n.cookieDomain=function(t){w.log("API / Setting cookie domain to",t.cookieDomain),m.dispatch(r.SET_COOKIE_DOMAIN,t.cookieDomain)},n.disable=function(t){if(t.scope){if("tracking"!==t.scope)throw new Error('Unknown "scope" for disable: '+t.scope);w.log("API / Disabling tracking"),m.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else w.log("API / Disabling everything"),m.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},n.log=function(t){var n=t.level,e=t.match;void 0===n&&(n="INFO"),void 0===e&&(e=""),w.setLogMatcher(e),w.setLogLevel(n)},n.registerModule=function(t){var n="custom/"+t.moduleName;if(a[n]||o.get(n))throw new Error('Module name "'+n+'" is reserved. Will not be registered as plugin.');E.registerApiModule(n,t.module)},n.dataFromSource=function(t){var n=t.source;l.makeAsyncRequest(n),l.resolveRequest(n,t.data)},n.addListener=function(t){if("function"!=typeof t.handler)throw new Error("A handler function must be supplied");(t=i(t,["type"])).publicOnly=!0,t.emitErrors=!0;var n=t.handler;t.handler=function(t){try{return n(t)}catch(t){throw new D(t)}},g.on(t)},n.removeListener=function(t){if(!t.token)throw new Error("Must supply a token to removeListener");g.off(t.token)},n.load=function(t){t.data=Object.assign({},t.data),u.normalizeClientData(t.data),m.dispatch(r.DATA_LOADED,{data:t.data})},n.integrationSettings=function(t){if(!t.id)throw new Error("id is required");if(!t.settings)throw new Error("settings is required");m.dispatch(r.SET_INTEGRATION_SETTINGS,Object.assign({},t.settings,{id:t.id}))},n.loadEmbeddedEditor=function(){document.getElementById("optimizely-visual-editor-root")?w.warn("API / Visual editor is already loaded."):y.loadEmbeddedEditor("https://app.optimizely.com/dist/visual-editor/main.js")},n.bucketVisitor=function(t){if(!t.variationId&&void 0===t.variationIndex||t.variationId&&t.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!t.experimentId)throw new Error("An experimentId is required.");var n,e,i=t.campaignId;if(i){if(!(n=C.get(i)))throw new Error("Could not find layer "+i)}else if(!(i=(n=C.getLayerByExperimentId(t.experimentId)).id))throw new Error("Could not find layer for experiment "+t.experimentId);if(!(e=n.experiments.find((function(n){return n.id===t.experimentId}))))throw new Error("Could not find experiment "+t.experimentId+" in layer "+i);var r=t.variationId;if(void 0!==t.variationIndex){if(!(r=e.variations[t.variationIndex].id))throw new Error("Could not find variation at index "+t.variationIndex+" in experiment "+t.experimentId)}else if(!e.variations.find((function(t){return t.id===r})))throw new Error("Cound not find variation "+r+" in experiment "+t.experimentId);A.updateVariationIdMap(i,t.experimentId,r),R.getBucketingId()&&A.persistVariationIdMap(),A.updateContextualMabMap(i,t.experimentId,{variationId:r}),R.getBucketingId()&&A.persistContextualMabMap()},n.waitForOriginSync=function(t){if(!Array.isArray(t.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+b.stringify(t.canonicalOrigins));t.canonicalOrigins.forEach((function(t){if("string"!=typeof t)throw new Error("Each item in canonicalOrigins must be a string. Found type "+(void 0===t?"undefined":(n=t)&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n));var n})),m.dispatch(r.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:t.canonicalOrigins})},n.disableCrossOrigin=function(){w.log("API / cross origin tracking is DISABLED"),m.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0})},n.activate=function(){N.shouldActivate()?(S.getActiveViewStates().forEach((function(t){I.deactivate(k.get(t.id))})),m.dispatch(r.RESET_VIEW_STATES),f.emitActivateEvent()):w.debug("Not activating.")},n.sendEvents=function(){f.emitSendEvents()},n.holdEvents=function(){f.emitHoldEvents()}},8197:function(){},4860:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.flattenDeep,a=i.isEmpty,u=i.isObject,c=e(8130).v,s=n.ActivationCodeError=c("ActivationCodeError"),f=n.ProjectJSError=c("ProjectJSError"),l=e(8395),d=e(136),v=e(8131),h=e(8674),p=e(7595),g=e(8841),m=e(9480),b=e(8298),_=e(1035),y=e(2025),w=e(4214),E=e(1019),I=e(6592),A=e(7566),T=e(3111),O=e(8484),S=e(409),k=(e(3672),e(2042)),R=e(1353).DT,C=e(7852),N=e(3224),D=e(5010),x=e(9937),j=e(5385),M=e(6761).Promise,P=e(5467),L=e(5894),U=(e(249),e(123)),V=e(2348),B=e(4285),F=e(9454),z=(y=e(2025)).get("stores/session"),q=y.get("stores/audience_data"),G=y.get("stores/action_data"),H=y.get("stores/cleanup"),Y=y.get("stores/directive"),K=y.get("stores/global"),$=(y.get("stores/group_data"),y.get("stores/layer_data")),W=y.get("stores/layer"),X=y.get("stores/pending_events"),J=y.get("stores/plugins"),Q=y.get("stores/rum"),Z=y.get("stores/visitor"),tt=y.get("stores/view_data"),nt=y.get("stores/view"),et=y.get("stores/visitor_id"),it=y.get("stores/visitor_bucketing"),rt=y.get("stores/xdomain"),ot=e(3737),at=e(673),ut=e(2594),ct=!1,st=n;function ft(t){at.handleError(t.data.error,t.data.metadata)}function lt(t,n){S.dispatch(d.SET_RUM_DATA,{data:{extras:{xdAttempt:t,xdError:n?n.toString():void 0}}})}function dt(t,n,e){t=t||[];var i=K.getGlobalHoldbackThreshold(),r=et.getBucketingId();if(!r)throw new Error("bucketingId not set");var o,a=Z.getVisitorProfile();n&&(o=it.getVariationIdMap()[n.id]);var u={bucketingId:r,visitorProfile:a,audiences:t,globalHoldback:i,preferredVariationMap:o,layer:n};return n&&e&&_.isPageIdRelevant(n)?e.map((function(t){return _.createTicket(Object.assign({},u,{pageId:t}))})):[_.createTicket(u)]}function vt(t,n){var e={};return t.forEach((function(t){Array.isArray(t)?Object.assign(e,vt(t,n)):u(t)&&n[t.type]&&(e[t.type]=!0)})),e}function ht(t){var n=[];return t.forEach((function(t){n.push(t.name,t)})),n}function pt(t){var n=H.getCleanupFns(t);if(n.length>0){for(;n.length>0;)n.shift()();S.dispatch(d.CLEAR_CLEANUP_FN,{lifecycle:t})}}n.initialize=function(t){return this.initGlobalStore(t.clientData),this.initializePlugins(t.plugins)},n.initGlobalStore=function(t){m.normalizeClientData(t),A.on({filter:{type:"error"},handler:ft}),S.dispatch(d.DATA_LOADED,{data:t}),C.log("Initialized with DATA:",t)},n.initializePlugins=function(t){if(Array.isArray(window.optimizely)&&(window.optimizely=window.optimizely.filter((function(t){var n=!0;return!ot.push(t,n)}))),w.setOptOut(Y.shouldOptOut()),!Y.isDisabled()&&!Y.shouldOptOut()){ut.queueBeacons(),E.isReady()?S.dispatch(d.SET_DOMCONTENTLOADED):E.addReadyHandler((function(){S.dispatch(d.SET_DOMCONTENTLOADED)})),D.time("projectJS");var e=K.getProjectJS();if("function"==typeof e)try{O.apply(e)}catch(t){C.error("Error while executing projectJS: ",t),g.emitError(new f(t))}D.timeEnd("projectJS"),(t||[]).forEach((function(t){try{t(x)}catch(t){g.emitInternalError(t)}})),(K.getPlugins()||[]).forEach((function(t){try{O.apply(t,[x])}catch(t){g.emitError(t)}})),L.load();var i=A.on({filter:{type:"lifecycle",name:"activated"},handler:function(){Z.observe(B.persistVisitorProfile),W.observe(B.persistLayerStates),z.observe(B.persistSessionState),X.observe(N.schedulePersistPendingEvents),it.observe(B.persistVisitorBucketingStore),A.off(i)}});A.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:n.onViewsActivated}),A.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:n.onPageDeactivated}),n.initializeApi();var r=N.getPendingEvents();if(r&&(S.dispatch(d.LOAD_PENDING_EVENTS,{events:r}),N.retryPendingEvents(r)),A.on({filter:{type:"lifecycle",name:"activate"},handler:n.activate}),h.emitInitializedEvent(),!Y.shouldActivate())return M.resolve();return function(){!1;var t=null;"number"==typeof t&&0===$.getCount()?(C.log("Activating after delay of",t,"ms because no Experiments are running"),S.dispatch(d.SET_RUM_DATA,{data:{activateDfd:!0}}),F.setTimeout(h.emitActivateEvent,t)):h.emitActivateEvent()}(),M.all([])}C.log("Controller / Is disabled")},n.activate=function(){try{var t=[];C.log("Activated client"),pt(I.Lifecycle.preActivate);var n=!1;ct;var e=b.now();S.dispatch(d.ACTIVATE,{activationId:String(e),activationTimestamp:e});var i=tt.getAll();V.registerViews(i,n),B.setId(B.getOrGenerateId()),t.push(v.trackPostRedirectDecisionEvent()),S.dispatch(d.MERGE_VARIATION_ID_MAP,{variationIdMap:B.getVariationIdMap()}),S.dispatch(d.MERGE_CONTEXTUAL_MAB_MAP,{contextualMabMap:B.getContextualMabMap()}),S.dispatch(d.SET_ODP_SEGMENTS,B.getOdpSegments()),pt(I.Lifecycle.postVisitorProfileLoad),t.push((s=J.getAllPlugins(I.PluginTypes.visitorProfileProviders),f=Z.getVisitorProfile(),B.populateEagerVisitorData(s,f)).then((function(){C.log("Populated visitor profile")})));var r=dt(),o=_.decideGlobal(r);C.log("Made global decision",r,"->",o),S.dispatch(d.RECORD_GLOBAL_DECISION,o);var a=v.trackClientActivation();a?C.log("Tracked activation event",a):C.log("Not tracking activation event");var u=st.setUpViewActivation(i),c=[];return u.forEach((function(t){c=c.concat(V.activateMultiple([t]))})),pt(I.Lifecycle.postViewsActivated),nt.getActiveViewStates().length||h.emitCampaignsDecided([]),pt(I.Lifecycle.postActivate),h.emitActivatedEvent(),M.all(t).then((function(){A.emit({type:T.TYPES.LIFECYCLE,name:"activateDeferredDone"}),C.log("All immediate effects of activation resolved")}),g.emitError)}catch(t){return g.emitError(t),M.reject(t)}var s,f},st.setUpViewActivation=function(t){var n=[];return t.forEach((function(t){"boolean"==typeof nt.getViewState(t.id).isActive&&V.isActivationTypeImmediate(t.activationType)?C.debug("Skipping page: already evaluated, presumably at the edge",V.description(t)):V.shouldTriggerImmediately(t.activationType)?n.push(t):t.activationType===I.ViewActivationTypes.callback?(C.debug("Setting up conditional activation for Page",V.description(t)),st.activateViewOnCallback(t)):t.activationType===I.ViewActivationTypes.polling?(C.debug("Setting up polling activation for Page",V.description(t)),j.pollFor(O.apply.bind(null,t.activationCode),null,U.isTimedOut.bind(null,b.now())).then((function(){V.activateMultiple([t])})).catch((function(n){C.warn("Failed to activate view ",t,n)}))):t.activationType!==I.ViewActivationTypes.manual&&g.emitError(new Error("Unknown view activationType: "+t.activationType))})),n},st.activateViewOnCallback=function(t){var n={pageId:t.id};Object.defineProperty(n,"isActive",{get:function(){return nt.isViewActive(t.id)}});try{O.apply(t.activationCode,[function(n){var e=Object.assign({},n,{pageName:t.apiName,type:"page"});ot.push(e)},n])}catch(n){var e=new s("("+n.toString()+") in activationCode for "+V.description(t));g.emitError(e,{originalError:n,userError:!0})}},n.onViewsActivated=function(t){var e,i=t.data.views,r=i.map((function(t){return t.id}));try{if(!et.getBucketingId())throw new Error("View activated with no visitorId set");var o=function(t){var e=$.getAllByPageIds(t),i=Y.getForceVariationIds(),r=Y.getForceAudienceIds();!a(i)&&C.log("Force variations are in use. Disabling mutual exclusivity.");var o={individual:e};C.log("Deciding Campaigns/Experiments for Page(s)",t),!1;var u=o.individual.map(k.description).join(", ");C.log("Campaigns/Experiments not in Groups (by Campaign id):",u);var c=[],s=o.individual.map((function(e){var o=(e.pageIds||[]).filter((function(n){return Array.isArray(t)&&t.includes(n)}));return n.decideAndExecuteLayerASAP(i,r,o,e)})),f=c.concat(s);return M.all(f).then((function(n){var e=n.filter((function(t){return!!t}));return C.log("All Campaigns/Experiments for Page(s) (by Campaign id)",t,"resolved:",e.map(k.description).join(", ")),e}))}(r).catch(g.emitError);return o.then((function(){h.emitCampaignsDecided(r)})),e=M.all(i.map((function(t){var n=function(){V.parseViewTags(t);var n=v.trackViewActivation(t);n?C.log("Tracked activation for Page",V.description(t),n):C.log("Not Tracking activation for Page",V.description(t))};return E.isReady()?M.resolve(n()):j.pollFor(E.isReady,1e3).then(n)}))),M.all([o,e])}catch(t){g.emitError(t)}},n.onPageDeactivated=function(t){var n=t.data.page;(G.getAllActionIdsByPageId(n.id)||[]).forEach((function(t){var e=G.getActionState(t);e&&(Object.keys(e).forEach((function(t){var i=e[t];if(i.cancel)try{i.cancel(),C.debug("Controller / Canceled change",t,"observation due to deactivation of page:",n)}catch(n){C.error("Controller / Error canceling change",t,"observation upon deactivation of page.",n)}if(n.undoOnDeactivation&&i.undo)try{i.undo(),C.debug("Controller / Undid change",t,"due to deactivation of page:",n)}catch(t){C.error("Controller / Error undoing change upon deactivation of page.",t)}})),S.dispatch(d.REMOVE_ACTION_STATE,{actionId:t}),C.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",n,t))}))},n.initializeApi=function(){var t={push:ot.push};t.get=ot.get;var n=window.optimizely;Array.isArray(n)&&n.forEach((function(n){t.push(n)})),t.data={note:"Obsolete, use optimizely.get('data') instead"},t.state={},window.optimizely=t},n.persistItemsWithId=function(t){return Object.keys(t).forEach((function(n){var e=t[n];B.checkKeyForVisitorId(n)&&R.setItem(n,e)})),t},n.initializeXDomainStorage=function(){var t=e(5292),i=!!B.getCurrentId(),r=!!i&&B.hasSomeData();i?r?C.log("xd / Existing visitor; has data on this origin"):C.log("xd / Existing visitor; new to this origin"):C.log("xd / New visitor");var o=K.getAccountId(),u="https://__SUBDOMAIN__cdn.optimizely.com".replace("__SUBDOMAIN__","a"+o+"."),c="/client_storage/a"+o+".html";t.subscribe((function(t,n){B.checkKeyForVisitorId(t)&&R.setItem(t,n)}));var s=t.fetchAll().then((function(n){if(!et.getVisitorIdLocator()){var e=rt.getCanonicalOrigins();if(e){var i=t.getXDomainUserId(n,e);i&&(C.log("Syncing cross-origin visitor randomId:",i),B.maybePersistVisitorId({randomId:i}))}}return B.deleteOldForeignData(),n})).then(n.persistItemsWithId).then((function(t){if(B.loadForeignData(),i&&!r){var n=!a(t);C.debug("xd / Loaded foreign data? ",n),lt(n)}C.log("Loaded visitor data from foreign origins"),h.emitOriginsSyncedEvent()}),(function(t){throw i&&!r&&(C.debug("xd / Failed to load foreign data:",t),lt(!1,t)),t}));return M.all([t.load(u,c).catch((function(t){throw C.debug("xd / Failed to load iframe:",t),i&&!r&&lt(!1,t),t})),s.catch((function(t){C.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",t.message),C.debug("xd / Enqueuing sync to happen after visitorId set."),S.dispatch(d.ADD_CLEANUP_FN,{lifecycle:I.Lifecycle.postVisitorProfileLoad,cleanupFn:h.emitOriginsSyncedEvent})}))])},n.decideAndExecuteLayerASAP=function(t,e,i,u){return new M((function(c,s){try{!function(t,n,e,i,r){if(n.length||e.length)return void r(dt([],void 0,i));var u=k.relatedAudienceIds(t),c=u.reduce((function(t,n){var e=q.get(n);return e&&t.push(e),t}),[]),s=J.getAllPlugins(I.PluginTypes.audienceMatchers);if(Q.getSampleRum()){var f={};if(c.forEach((function(t){Object.assign(f,vt(t.conditions,s))})),!a(f)){var l=Object.keys(f);S.dispatch(d.RECORD_AUDIENCE_USAGE,{audienceTypes:l,layerId:t.id})}}var v=function(t){C.debug("Audience list for extracting types",t);try{var n=new Set(o(t.map((function(t){return t.conditions}))).filter((function(t){return null!=t&&"string"!=typeof t})).map((function(t){return t.type})));return n.has("time_and_day")&&n.add("currentTimestamp"),C.debug("Extracted unique types from audiences",n),n}catch(t){return C.error("An error occurred while extracting types from audiences:",t),new Set}}(c),h=J.getAllPlugins(I.PluginTypes.visitorProfileProviders),g=Z.getVisitorProfile();B.populateLazyVisitorData(h,g,v),function(t,n,e,i){var r=t.reduce((function(t,e){return Object.assign(t,p.requiredAudienceFieldsForConditions(e.conditions,n))}),{}),o=Object.keys(r).reduce((function(t,n){var e=r[n];if(void 0===B.getAttribute(e)){var i=B.getPendingAttributeValue(e);void 0!==i&&t.push(i)}return t}),[]);if(0===o.length)return i();var u=[].concat(t),c=P.firstToResolve(o.map((function(t){return M.resolve(t).then((function(){var t=Z.getVisitorProfile();if(u=u.filter((function(e){return void 0===p.isInAudience(t,e,n)})),!a(u))throw new Error("At least one audience is still pending")}))})));M.race([c,new M((function(t,n){F.setTimeout(n,e)}))]).then((function(){C.log("Activating Campaign after pending Audiences resolved",t),i()}),(function(){C.log("Activating Campaign after timeout on Audiences",t),i()}))}(c,s,k.getActivationTimeout(t),(function(){var n=dt(c,t,i);n.forEach((function(n){!function(t,n,e){var i=t.audienceIds.map(q.get.bind(q)).filter(Boolean),r=n.filter((function(n){return!t.audienceIds.includes(n.id)}));C.log("When deciding Campaign",k.description(e),"visitor is in audiences:",ht(i),"and not in audiences:",ht(r))}(n,c,t)})),r(n)}))}(u,t,e,i,(function(o){o.forEach((function(o){var c=o.pageId?[o.pageId]:i;C.debug("Deciding layer: ",u,"with decisionTicket: ",o,"and actionViewIds: ",c),function(t,e,i,o,u){var c=k.description(t);C.log("Activating Campaign",c,"on Page(s)",o),i.length&&(C.log("Applying force audienceIds:",i,"to Campaign",c),(u=r(u)).audienceIds=i);var s=n.decideLayer(t,u,e),f=!(!e.length&&!i.length),p=n.getActionsForDecision(t,s,f),g=function(t,n){return t.filter((function(t){return void 0===t.pageId||n.includes(t.pageId)}))}(p.actions,o);if(p.maybeExecute&&function(t,n,e,i){var r=k.description(n);C.log("Preparing actions",t,"for Campaign",r,"on Page(s)",i),t.forEach(l.prepareAction)}(g,t,0,o),o.forEach((function(){v.trackDecisionEvent(s,u,t)})),h.emitLayerDecided({layer:t,decisionTicket:u,decision:s}),s.error)throw s.error;if(Q.getSampleRum()){S.dispatch(d.RECORD_LAYER_POLICY_USAGE,{policy:t.policy,layerId:t.id});var m=function(t){var n={};return t.forEach((function(t){t.changeSet.forEach((function(t){n[t.type]||(n[t.type]=!0)}))})),n}(p.actions);S.dispatch(d.RECORD_CHANGE_TYPE_USAGE,{changeTypes:Object.keys(m),layerId:t.id}),a(t.integrationSettings)||S.dispatch(d.RECORD_INTEGRATION_USAGE,{integrations:k.getIntegrationTypes(t),layerId:t.id})}if(!_.isInCohort(s))return void C.log("Not activating Campaign: "+k.description(t)+"; not in the cohort because:",s.reason);p.maybeExecute&&function(t,n,e,i){var r=k.description(n);C.log("Executing actions",t,"for Campaign",r,"on Page(s)",i),M.all(t.map((function(t){return l.executePreparedAction(t).then(h.emitActionAppliedEvent.bind(null,t))}))).then((function(){C.log("All page actions for",e,"applied:",t),h.emitActionsForDecisionAppliedEvent(e,t)})).catch((function(t){C.warn("Error evaluating page actions for decision",e,"because:",t)}))}(g,t,s,o)}(u,t,e,c,o)})),c(u)}))}catch(t){C.error("Error getting decision for Campaign: "+k.description(u),t),s(t)}}))},n.decideLayer=function(t,n,e){var i;var r=k.description(t);i=e.length?_.getDummyLayerDecision(t,e):_.decideLayer(t,n),C.log("Recording decision for Campaign",r,n,"->",i),k.recordLayerDecision(t.id,n,i),i.variationId&&i.experimentId&&B.updateVariationIdMap(t.id,i.experimentId,i.variationId);return i},n.getActionsForDecision=function(t,n,e){var i=k.description(t),r="NOT applying changes for Campaign",o={actions:[],maybeExecute:!1};if(o.actions=[].concat(G.getLayerActions(n.layerId)||[],G.getExperimentActions(n.experimentId)||[],G.getExperimentVariationActions(n.experimentId,n.variationId)||[]),!e&&K.isGlobalHoldback())return C.log(r,i,"(visitor is in global holdback)"),o;if(n.isLayerHoldback)return C.log(r,i,"(visitor is in layer holdback)"),o;if(!n.experimentId||!n.variationId)return C.log(r,i,"(visitor is not eligible for any Experiments)"),o;return o.maybeExecute=!0,C.log("Got Actions for Campaign:",i,o.actions),o}},6546:function(t,n,e){var i=e(6761).Promise,r=e(8298),o=e(2025).get("stores/plugins"),a=e(6592),u=e(7852);n.create=function(t,n,e){var c={identifier:t.id,action:n,startTime:e||r.now()};try{var s=o.getPlugin(a.PluginTypes.changeAppliers,t.type);if(!s)throw new Error("Unrecognized change type "+t.type);return new s(t,c)}catch(t){return u.error("Change applier was never properly constructed:",t),{apply:function(){return i.reject(t)}}}}},8486:function(t){t.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}},9114:function(t,n,e){var i=e(8275).isEmpty,r=e(8486).CHANGE_DATA_KEY;function o(t,n){return[t,n].join("_")}n.getData=function(t,n,e){var i=o(n,e);return t[r]&&t[r][i]?t[r][i]:null},n.hasData=function(t){return Boolean(t&&t[r]&&!i(t[r]))},n.removeData=function(t,n,e){t[r]&&delete t[r][o(n,e)]},n.setData=function(t,n,e,i){if("object"!=typeof i)throw new Error("setData expects an object");t[r]||(t[r]={}),t[r][o(n,e)]=i}},8421:function(t,n,e){var i=e(3826);t.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",SRCSET:"srcset",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}},8395:function(t,n,e){var i=e(136),r=e(8841),o=e(5192),a=e(8130).v,u=e(8298),c=e(2025),s=e(409),f=e(7852),l=e(6761).Promise,d=e(7219),v=c.get("stores/global"),h=c.get("stores/action_data"),p=c.get("stores/change_data"),g=c.get("stores/session"),m=e(6546);e(123).initialize();var b=a("ActionError");function _(t,n,e){if(h.getActionState(n.id))if(void 0===h.getChangeApplier(t.id,n.id)){var r={changeId:t.id,actionId:n.id,changeApplier:m.create(t,n,e)};s.dispatch(i.SET_CHANGE_APPLIER,r)}else f.warn("Action / Attempted to prepare a change which is already being applied: ",t);else f.warn("Action / Attempted to prepare change for inactive action: ",n)}function y(t,n,e,i){if(!i.includes(n)){if(!t[String(n)]){var a=p.getChange(n);if(!a){var c="Change with id "+n+" is absent";return i.length&&(c+=" but listed as a dependency for "+i[i.length-1]),void f.warn(c)}t[String(n)]=new l((function(c){var s=(a.dependencies||[]).map((function(r){return y(t,r,e,i.concat([n]))}));if(a.src){var v="change_"+a.src,g=o.makeAsyncRequest(v,(function(){return d.addScriptAsync("https://cdn.optimizely.com/public/8209600003/data"+a.src,(function(){o.resolveRequest(v)}))})).then((function(){var t=p.getChange(a.id);t||r.emitError(new b("Failed to load async change from src: "+a.src)),_(t,e,u.now())}));s.push(g)}l.all(s).then((function(){var t=u.now(),i=h.getChangeApplier(n,e.id);return i?(f.debug("Action / Applying change:",a),i.apply().then((function(n){n?f.log(n):f.debug("Action / Applied change for the first time in "+(u.now()-t)+"ms:",a),c()}))):(f.debug("Action / Not applying change ",n," - No changeApplier found."),void c())})).catch((function(t){f.error("Action / Failed to apply change:",a,t),c()}))}))}return t[String(n)]}f.error("Change with id "+n+" has circular dependencies: "+i.concat(n))}n.prepareAction=function(t){f.debug("Action / Preparing:",t),s.dispatch(i.ACTION_EXECUTED,{actionId:t.id,sessionId:g.getSessionId(),layerId:t.layerId,pageId:t.pageId,timestamp:u.now(),activationId:v.getActivationId()});var n=u.now();t.changeSet.forEach((function(e){var r="object"==typeof e&&null!==e?e.id:e,o=p.getChange(r);o||(s.dispatch(i.ADD_CHANGE,e),o=p.getChange(r)),o.src||_(o,t,n)}))},n.executePreparedAction=function(t){f.debug("Action / Executing:",t);var n={},e=t.changeSet.map((function(e){var i="object"==typeof e&&null!==e?e.id:e;return y(n,i,t,[])}));return l.all(e).then((function(){f.debug("changes for action id="+t.id+" applied")}))}},123:function(t,n,e){var i=e(8486),r=e(2025).get("stores/directive");function o(){("interactive"===document.readyState||"complete"===document.readyState)&&(n.domReadyTime=Date.now())}n.domReadyTime=null,n.initialize=function(){o(),document.addEventListener("readystatechange",o,!0)},n.isTimedOut=function(t){var e=Date.now();if(!n.domReadyTime||!t)return!1;var o=Math.max(t,n.domReadyTime);return r.isEditor()&&(o=n.domReadyTime),!(e-o<i.SELECTOR_POLLING_MAX_TIME)}},8131:function(t,n,e){var i=e(8275),r=i.omit,o=i.pick,a=e(136),u=e(8841),c=e(8674),s=e(2575),f=e(8298),l=e(7871),d=e(2025),v=e(1019),h=e(6592),p=e(8421),g=e(5225),m=(e(7566),e(3111),e(1320)),b=e(409),_=e(2042),y=e(7852),w=(e(5010),e(6761).Promise),E=e(3272),I=e(5894),A=(e(249),e(6938)),T=e(9899),O=d.get("stores/client_metadata"),S=d.get("stores/global"),k=d.get("stores/session"),R=d.get("stores/view"),C=d.get("stores/plugins"),N=d.get("stores/layer"),D=d.get("stores/layer_data"),x=d.get("stores/observed_redirect"),j=d.get("stores/pending_redirect"),M=d.get("stores/visitor"),P=d.get("stores/directive"),L=d.get("stores/event_data"),U=d.get("stores/visitor_id");function V(t,n,e){return void 0===e&&(e=!1),Object.assign({},t,{isLayerHoldback:n,isLayerConcluded:e,isGlobalHoldback:!1,clientName:null!==t.clientName?t.clientName:l.NAME,integrationStringVersion:null!==t.integrationStringVersion?t.integrationStringVersion:1,anonymizeIP:null!==S.getAnonymizeIP()?S.getAnonymizeIP():void 0,activationId:S.getActivationId(),decisionTicketAudienceIds:[],sessionId:k.getSessionId(),activeViewStates:[],userFeatures:q(M.getVisitorProfile()),layerStates:N.getLayerStatesForAnalytics()})}function B(t){var n=E.getReferrer()||v.getReferrer();return{eventId:T.generate(),timestamp:f.now(),revision:S.getRevision(),clientName:O.getClientName(),clientVersion:O.getClientVersion(),projectId:S.getProjectId(),accountId:S.getAccountId(),activationId:S.getActivationId(),sessionId:k.getSessionId(),isGlobalHoldback:S.isGlobalHoldback(),namespace:S.getNamespace(),referrer:n,visitorId:U.getRandomId(),activeViewStates:t.activeViewStates,layerStates:t.layerStates,userFeatures:q(t.visitorProfile,!t.deferBehaviorFeatures)}}function F(t){var n,e;return t.pageId?(n=t.pageId,(e=R.getViewState(n))&&e.isActive?e.metadata:{}):{}}function z(){try{var t=D.getExperimentsMap()||{},n=[],i=Object.create(null);if(Object.keys(t).forEach((function(e){var r=t[e]&&t[e].experimentMetadata;(r&&r.cmabAttributes&&r.cmabAttributes.vbaAttributes||[]).forEach((function(t){t&&t.featureName&&!i[t.featureName]&&(i[t.featureName]=!0,n.push(t))}))})),!n.length)return[];var r=e(8620).getEvents();return e(5560).buildVbaFeatures(n,r,f.now()).map((function(t){return{id:t.id,name:t.id,type:t.type,value:t.value,shouldIndex:!0}}))}catch(t){y.warn("CMAB / VBA / Error building visitor behavior features",t)}return[]}function q(t,n){void 0===n&&(n=!0);var e=C.getAllPlugins(h.PluginTypes.visitorProfileProviders),i=Object.values(e).filter((function(t){return!0===t.shouldTrack})),r={id:null,type:null,name:"",value:null,shouldIndex:!0},a=i.reduce((function(n,e){try{var i=e.provides,a=t[i],u=[];if(void 0!==a){null!==a&&"object"==typeof a?u=Object.keys(a).map((function(t){var n=a[t],e=null!==n&&"object"==typeof n?n:{value:n};return Object.assign({},{type:i,name:t},e)})):u.push({type:i,value:a});var c=u.map((function(t){return o(Object.assign({},r,t),Object.keys(r))})).filter((function(t){return!!t.value}));n=n.concat(c)}}catch(t){y.warn("Error evaluating userFeature against visitorProfile:",t)}return n}),[]);return n?a.concat(z()):a}function G(t){t&&t.userFeatures&&(t.userFeatures=t.userFeatures.concat(z()))}function H(t,n,e){var i=function(t,n){var e=[],i=C.getAllPlugins(h.PluginTypes.analyticsTrackers);return Object.keys(i).forEach((function(r){var o=i[r];if(o[t]&&(!n||!o[n]))try{e.push({name:r,hookFn:d.evaluate(o[t])})}catch(t){y.error(t)}})),e}(t,e);y.debug("Found "+i.length+" analytics integrations defining a "+t+" hook"),y.debug("Calling each with data: ",n),i.forEach((function(t){try{y.debug("Calling plugin: "+t.name),t.hookFn(n),y.debug("Called plugin: "+t.name)}catch(t){y.error(t)}}))}function Y(t,n,e){var i=function(t,n){0;var e=[],i=C.getAllPlugins(h.PluginTypes.analyticsTrackers);return Object.keys(i).forEach((function(r){var o=i[r];n.includes(o[t])&&e.push({name:r,hookFn:o.trackLayerDecision})})),e}(t,n);y.debug("Found "+i.length+" analytics integrations  defining a trackLayerDecision "+t+" timing of "+n.join("|")),y.debug("Calling each with data: ",e),i.forEach((function(t){try{y.debug("Calling plugin: "+t.name),t.hookFn(e),y.debug("Called plugin: "+t.name)}catch(t){y.error(t)}}))}n.trackClientActivation=function(){if(!e(4308).shouldDrop()&&P.shouldSendTrackingData()){var t,n=(t=B({activeViewStates:[],visitorProfile:M.getVisitorProfile(),layerStates:N.getLayerStatesForAnalytics()}),Object.assign(t,{eventTags:{}}));return H("onClientActivation",n),n}},n.trackCustomEvent=function(t,n,i,o){if(!e(4308).shouldDrop()){n=n||{},o=o||{},i||(i=L.getByApiName(t));var a=function(t,n,e,i){var r=B({activeViewStates:R.getActiveViewStates(),visitorProfile:M.getVisitorProfile(),layerStates:N.getLayerStatesForAnalytics(),deferBehaviorFeatures:!0}),o=i&&i.pageId?F(i):R.getActiveViewTags(),a=Object.assign({},o,n),u=i&&i.category?i.category:g.OTHER;return Object.assign(r,{eventEntityId:i&&i.id,eventApiName:t,eventCategory:u,eventTags:a,eventProperties:e})}(t,n,o,i),c={name:t,type:m.CUSTOM,category:a.eventCategory,tags:r(a.eventTags,["revenue"])};if(void 0!==n.revenue&&(c.revenue=n.revenue),u.emitAnalyticsEvent({name:i?i.name||i.apiName:t,apiName:i?i.apiName:void 0,type:m.CUSTOM,properties:a.eventProperties,tags:r(a.eventTags,["revenue"]),category:a.eventCategory,metrics:c.revenue?{revenue:c.revenue}:{}},!P.shouldSendTrackingData()),P.shouldSendTrackingData())return s.addEvent(c),G(a),H("onCustomEvent",a),a}},n.trackDecisionEvent=function(t,n,i){if(!e(4308).shouldDrop()){i||(i=D.get(t.layerId));var r=T.generate();b.dispatch(a.RECORD_LAYER_DECISION_EVENT_ID,{layerId:t.layerId,pageId:n.pageId,decisionId:r});var o=t.experimentId?i.experiments.find((function(n){return n.id===t.experimentId})):null,u=function(t,n,e,i,r){var o=null,a=null,u=null;if(r&&(o=r.name||null,u=r.integrationSettings,n.variationId)){var c=r.variations.find((function(t){return t.id===n.variationId}));c&&(a=c.name||null)}var s=E.getReferrer()||v.getReferrer(),l={sessionId:k.getSessionId(),decisionTicketAudienceIds:e.audienceIds,visitorId:U.getRandomId(),decisionId:t,activationId:S.getActivationId(),namespace:S.getNamespace(),timestamp:f.now(),pageId:e.pageId||null,variationId:n.variationId,variationName:a,experimentId:n.experimentId,experimentName:o,layerId:n.layerId,layerName:i.name,layerPolicy:i.policy,accountId:S.getAccountId(),projectId:S.getProjectId(),revision:String(S.getRevision()),clientName:O.getClientName(),clientVersion:O.getClientVersion(),referrer:s,integrationStringVersion:i.integrationStringVersion||1,integrationSettings:Object.assign({},i.integrationSettings,u)};return l}(r,t,n,i,o),s=j.isExpectingRedirect(),l=j.getLayerId(),d=_.description(i);if(s&&l===i.id&&(I.persist(u,"COOKIE"),y.log("Relaying decision for redirect Campaign",d)),P.shouldSendTrackingData()){var h=V(u,t.isLayerHoldback,t.isLayerConcluded);if(s&&l===i.id){var g=A.TrackLayerDecisionTimingFlags.preRedirectPolicy;h.timing=g,Y(g,[A.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],h),y.log("Called trackLayerDecision for redirect Campaign",d,h)}else{g=A.TrackLayerDecisionTimingFlags.nonRedirectPolicy;h.timing=g,Y(g,[A.NonRedirectPolicies.TRACK_IMMEDIATELY],h),y.log("Called trackLayerDecision for non-redirect Campaign",d,h)}(function(t){return!(!t||!t.variations)&&t.variations.some((function(t){return!!t.actions&&t.actions.some((function(t){return!(!t||!t.changes)&&t.changes.some((function(t){return t.type===p.changeType.REDIRECT}))}))}))})(o)&&(b.dispatch(a.SET_TRACKER_USE_BEACON,!0),c.emitMaybeSendEvents(),b.dispatch(a.SET_TRACKER_USE_BEACON,!1))}else y.log("Analytics / Not tracking decision for Campaign",_.description(i))}},n.trackPostRedirectDecisionEvent=function(){if(e(4308).shouldDrop()||!P.shouldSendTrackingData()||x.hasTracked())return w.resolve();var t=x.get();if(!t)return w.resolve();var n=V(t,!1),i=A.TrackLayerDecisionTimingFlags.postRedirectPolicy;return n.timing=i,Y(i,[A.PostRedirectPolicies.TRACK_IMMEDIATELY],n),Y(A.TrackLayerDecisionTimingFlags.postRedirectPolicy,[A.PostRedirectPolicies.TRACK_AFTER_SYNC],n),b.dispatch(a.REGISTER_TRACKED_REDIRECT_DATA),w.resolve()},n.trackClickEvent=function(t){if(!e(4308).shouldDrop()){var n=function(t){var n=B({activeViewStates:R.getActiveViewStates(),visitorProfile:M.getVisitorProfile(),layerStates:N.getLayerStatesForAnalytics(),deferBehaviorFeatures:!0}),e=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector,i=t.apiName,r=t.category||g.OTHER,o=t.id,a=F(t);return Object.assign(n,{eventApiName:i,eventCategory:r,eventEntityId:o,eventTags:a,pageId:t.pageId,selector:e})}(t),i={name:t.apiName,type:t.eventType,category:n.eventCategory,tags:n.eventTags};if(u.emitAnalyticsEvent({name:t.name||t.apiName,apiName:t?t.apiName:void 0,type:t.eventType,category:n.eventCategory,tags:n.eventTags,metrics:{}},!P.shouldSendTrackingData()),P.shouldSendTrackingData())return s.addEvent(i),G(n),H("onClickEvent",n),n}},n.trackViewActivation=function(t,n){if(!e(4308).shouldDrop())if(n||(n=R.getViewState(t.id)),n.isActive){var i=function(t,n){var e=B({activeViewStates:R.getActiveViewStates(),visitorProfile:M.getVisitorProfile(),layerStates:N.getLayerStatesForAnalytics(),deferBehaviorFeatures:!0});return Object.assign(e,{pageId:t.id,pageApiName:t.apiName,viewCategory:t.category,eventTags:n.metadata})}(t,n);if(u.emitAnalyticsEvent({name:t.name||i.pageApiName,apiName:i.pageApiName,type:m.PAGEVIEW,category:i.viewCategory,tags:i.eventTags,metrics:{}},!P.shouldSendTrackingData()),P.shouldSendTrackingData())return s.addEvent({name:i.pageApiName,type:m.PAGEVIEW,category:i.viewCategory,tags:i.eventTags}),G(i),b.dispatch(a.TRACK_VIEW_ACTIVATED_EVENT,{pageId:t.id,eventData:i}),H("onPageActivated",i),i}else y.debug("Inactive view passed to `trackViewActivation`")}},5894:function(t,n,e){var i=e(136),r=e(6278),o=e(8841),a=e(2025),u=e(6592),c=e(409),s=e(7852),f=e(6938),l=a.get("stores/plugins"),d=".",v=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(t){return t.map(encodeURIComponent).join(",")},encodeValueString:function(t){return t},decodeValueString:function(t){return t},valueFromValueString:function(t){return t.split(",").map(r.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:function(t,n){var e=null;if(t){var i=l.getPlugin(u.PluginTypes.analyticsTrackers,n);if(i&&"function"==typeof i.serializeSettings)try{e=i.serializeSettings(t)}catch(t){s.warn("Analytics / Failed to persist integrationSettings for plugin:",n,t)}}return e},valueFromValueString:function(t,n){var e=null,i=l.getPlugin(u.PluginTypes.analyticsTrackers,n);if(i&&"function"==typeof i.deserializeSettings)try{e=i.deserializeSettings(t)}catch(t){s.warn("Analytics / Failed to persist integrationSettings for plugin:",n,t)}return e},isNullable:!0}],h={},p={};v.forEach((function(t){h[t.name]=t,p[t.relayName]=t})),n.persist=function(t,n){n===f.RedirectRelayMedia.COOKIE?function(t){try{var n=function(t){var n=[],e=Object.keys(t).reduce((function(e,i){var r=t[i],o=h[i];return o?(o.isMulti?Object.keys(r).forEach((function(t){var n=r[t];null!==(n=o.valueToValueString?o.valueToValueString(n,t):String(n))&&(n=(o.encodeValueString||encodeURIComponent)(n),e.push(encodeURIComponent(o.relayName+d+t)+"="+n))})):null!==r&&(r=(o.valueToValueString||String)(r),r=(o.encodeValueString||encodeURIComponent)(r),e.push(o.relayName+"="+r)),e):(n.push(i),e)}),[]);if(n.length)throw new Error("Relay / Don't know how to relay some fields: "+n);return e.sort(),e.join("&")}(t)}catch(t){return s.error("Relay / Error computing redirect relay cookie: ",t),void o.emitError(t)}s.debug("Relay / Setting redirect relay cookie:",n);try{r.set(u.COOKIES.REDIRECT,n,{maxAge:5,encodeValue:!1})}catch(t){s.error("Relay / Failed to set redirect relay cookie",t),o.emitError(t)}}(t):s.error("Relay / Unsupported redirect relay medium: "+n)},n.load=function(t){if(t||(t=function(){var t=r.get(u.COOKIES.REDIRECT,!1);if(t)return s.log("Relay / Found redirect cookie:",t),t}()),t){var n=function(t){var n={};return t.split("&").forEach((function(t){var e=t.split("=");if(2===e.length){var i=r.safeDecodeURIComponent(e[0]),a=p[i];if(a||(a=v.find((function(t){return t.isMulti&&0===i.indexOf(t.relayName+d)})))){var u=e[1];try{if(a.isMulti){n[a.name]=n[a.name]||{};var c=i.substring(a.relayName.length+1);u=(a.decodeValueString||r.safeDecodeURIComponent)(u),u=(a.valueFromValueString||function(t){return t})(u,c),n[a.name][c]=u}else u=(a.decodeValueString||r.safeDecodeURIComponent)(u),u=(a.valueFromValueString||function(t){return t})(u),n[a.name]=u}catch(n){return s.warn("Relay / Skipping segment due to decode or parse error:",t,n),void o.emitError(n)}}else s.warn("Relay / Skipping segment with unknown field identifier:",t,i)}else s.warn("Relay / Skipping invalid segment:",t)})),n}(t);if(n){var e=[];if(v.forEach((function(t){null!==n[t.name]&&void 0!==n[t.name]||(t.isNullable?n[t.name]=null:(delete n[t.name],e.push(t.name)))})),!e.length)return c.dispatch(i.LOAD_REDIRECT_DATA,n),c.dispatch(i.ADD_CLEANUP_FN,{lifecycle:u.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){var t,e;e=(t=n).pageId||void 0,c.dispatch(i.RECORD_LAYER_DECISION,{layerId:t.layerId,decision:{layerId:t.layerId,experimentId:t.experimentId,variationId:t.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:t.decisionTicketAudienceIds,bucketingId:t.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:e,activationId:t.activationId},sessionId:t.sessionId,activationId:t.activationId,timestamp:t.timestamp,revision:t.revision,namespace:t.namespace,pageId:e}),c.dispatch(i.RECORD_LAYER_DECISION_EVENT_ID,{layerId:t.layerId,pageId:e,decisionId:t.decisionId}),c.dispatch(i.ACTION_EXECUTED,{sessionId:t.sessionId,layerId:t.layerId,pageId:t.pageId,timestamp:t.timestamp,activationId:t.activationId})}}),n;s.error("Relay / Observed redirect data with missing fields:",e)}}}},8841:function(t,n,e){var i=e(7566);n.emitError=function(t,n,e){i.emit({type:"error",name:t.name||"Error",data:{error:t,metadata:n}},e||!1,!0)},n.emitInternalError=function(t,e){n.emitError(t,e,!0)},n.emitAnalyticsEvent=function(t,n){var e={type:"analytics",name:"trackEvent",data:t};i.emit(e,n)}},7595:function(t,n,e){var i=e(5421),r=e(8859),o=e(7852),a=e(4285);function u(t,n){var e="function"==typeof t?t(n):t;return"string"==typeof e&&(e=[e]),Array.isArray(e)?e:(o.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function c(t){return t.name?t.name+" ("+t.id+")":t.id}n.isInAudience=function(t,n,e){var a,s=function(t,n){return function(e){var i=e.type,a=n[i];if(!a)throw new Error("Audience / No matcher found for type="+i);if(a.fieldsNeeded)for(var c=u(a.fieldsNeeded,e),s=0;s<c.length;s++){var f=c[s];if(void 0===r.getFieldValue(t,f))return void o.debug("Audience / Required field",f,"for type",i,"has no value")}o.debug("Matching condition:",e,"to values:",t);var l=a.match(t,e);if(void 0!==l)return!!l}}(t,e);o.groupCollapsed("Checking audience",n.name,n.id,n),o.debug("Visitor Profile:",t);try{var f=i.evaluate(n.conditions,s)}catch(t){a=t,f=!1}return o.groupEnd(),a&&o.error("Audience / Error evaluating audience",c(n),":",a),o.log("Is "+(f?"in":"NOT in")+" audience:",c(n)),f},n.requiredAudienceFieldsForConditions=function t(n,e){var i={};return n.forEach((function(n){if(Array.isArray(n))Object.assign(i,t(n,e));else if(null!==n&&"object"==typeof n){var r=e[n.type];if(r)u(r.fieldsNeeded,n).forEach((function(t){i[a.serializeFieldKey(t)]=t}))}})),i}},1489:function(t,n){n.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},n.FIELDS_V0_2={name:n.FIELDS.NAME,time:n.FIELDS.TIME,type:n.FIELDS.TYPE,category:n.FIELDS.CATEGORY,tags:n.FIELDS.OPTIONS,session_index:n.FIELDS.SESSION_INDEX}},8487:function(t,n,e){var i=e(1489),r=e(8859).getFieldValue,o=e(1691);function a(t,n,e,r,o){this[i.FIELDS.NAME]=t,this[i.FIELDS.TYPE]=n,"string"==typeof e&&e.trim().length>0&&(this[i.FIELDS.CATEGORY]=e),r&&Object.keys(r).length>0&&(this[i.FIELDS.OPTIONS]=r),void 0!==o&&(this[i.FIELDS.REVENUE]=o)}function u(t,n,e,r){this.eventBase=t,this[i.FIELDS.TIME]=n,void 0!==e&&(this[i.FIELDS.SESSION_ID]=e),void 0!==r&&(this[i.FIELDS.SESSION_INDEX]=r)}n._=a,a.prototype.digest=function(){var t=function(t,n){return encodeURIComponent(t)+"="+encodeURIComponent(n)},n=[];if(n.push(t(i.FIELDS.NAME,this[i.FIELDS.NAME])),n.push(t(i.FIELDS.TYPE,this[i.FIELDS.TYPE])),this[i.FIELDS.CATEGORY]&&n.push(t(i.FIELDS.CATEGORY,this[i.FIELDS.CATEGORY])),this[i.FIELDS.REVENUE]&&n.push(t(i.FIELDS.REVENUE,this[i.FIELDS.REVENUE])),!this[i.FIELDS.OPTIONS])return n.join("&");var e=this[i.FIELDS.OPTIONS]||{},r=Object.keys(e).filter((function(t){return e.hasOwnProperty(t)}));r=r.sort();for(var o=0;o<r.length;o++)n.push(t(r[o],e[r[o]]));return n.join("&")},a.prototype.hash=function(){return this.hash_||(this.hash_=o.hashToHex(o.toByteString(this.digest()),o.Seed.BEHAVIOR_EVENT)),this.hash_},a.prototype.setHash=function(t){this.hash_=t},a.prototype.reHash=function(){this.hash_=null,this.hash()},a.prototype.equals=function(t){if(this.hash()!==t.hash()||this[i.FIELDS.NAME]!==t[i.FIELDS.NAME]||this[i.FIELDS.TYPE]!==t[i.FIELDS.TYPE]||this[i.FIELDS.CATEGORY]!==t[i.FIELDS.CATEGORY]||this[i.FIELDS.REVENUE]!==t[i.FIELDS.REVENUE])return!1;var n=this[i.FIELDS.OPTIONS]||{},e=t[i.FIELDS.OPTIONS]||{},r=Object.keys(n).filter((function(t){return n.hasOwnProperty(t)})),o=Object.keys(e).filter((function(t){return e.hasOwnProperty(t)}));if(r.length!==o.length)return!1;for(var a=0;a<r.length;a++){var u=r[a];if(!e.hasOwnProperty(u)||n[u]!==e[u])return!1}return!0},a.prototype.getValueOrDefault=function(t,n){var e=r(this,t);return void 0!==e?e:n},a.prototype.setFieldValue=function(t,n){t!==i.FIELDS.NAME&&t!==i.FIELDS.TYPE&&t!==i.FIELDS.CATEGORY&&t!==i.FIELDS.REVENUE&&t!==i.FIELDS.OPTIONS||(this[t]=n,this.reHash())},n.J=u,u.prototype.getValueOrDefault=function(t,n){if(0===t.length)return this;var e={};e[i.FIELDS.TIME]=this[i.FIELDS.TIME],e[i.FIELDS.SESSION_ID]=this[i.FIELDS.SESSION_ID],e[i.FIELDS.SESSION_INDEX]=this[i.FIELDS.SESSION_INDEX];var o=r(e,t);return void 0!==o?o:this.eventBase.getValueOrDefault(t,n)},u.prototype.setFieldValue=function(t,n){t===i.FIELDS.TIME||t===i.FIELDS.SESSION_ID||t===i.FIELDS.SESSION_INDEX?this[t]=n:this.eventBase.setFieldValue(t,n)};var c={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};u.prototype.readableEvent=function(){var t,n,e=function(t){return"string"==typeof t?'"'+t+'"':t},r=this,o=[];[i.FIELDS.NAME,i.FIELDS.TYPE,i.FIELDS.CATEGORY,i.FIELDS.REVENUE,i.FIELDS.SESSION_ID].forEach((function(i){t=c[i],void 0!==(n=r.getValueOrDefault([i]))&&o.push(t+": "+e(n))}));var a=[];if(t=c[i.FIELDS.OPTIONS],void 0!==(n=r.getValueOrDefault([i.FIELDS.OPTIONS]))&&(Object.keys(n).forEach((function(t){var i=n[t];a.push(t+": "+String(e(i)))})),o.push(t+": {\n\t\t"+a.join(",\n\t\t")+"\n\t}")),"number"==typeof(n=r.getValueOrDefault([i.FIELDS.TIME]))&&(n=e(new Date(n).toString())),void 0!==n){o.push("timestamp: "+n)}return"{\n\t"+o.join(",\n\t")+"\n}"},u.prototype.toObject=function(t){var n,e,r={},o=this;[i.FIELDS.NAME,i.FIELDS.TYPE,i.FIELDS.CATEGORY,i.FIELDS.REVENUE,i.FIELDS.OPTIONS,i.FIELDS.SESSION_INDEX].forEach((function(t){n=c[t],void 0!==(e=o.getValueOrDefault([t],t===i.FIELDS.OPTIONS?{}:void 0))&&(r[n]=e)}));var a=c[i.FIELDS.OPTIONS],u=c[i.FIELDS.REVENUE];if(t&&t.revenueAsTag&&r[u]&&(r[a]=r[a]||{},r[a][u]=r[u],delete r[u]),"number"==typeof(e=o.getValueOrDefault([i.FIELDS.TIME])))if(t&&t.timeAsTimestamp){r.timestamp=new Date(e)}else{r.time=e}return r}},2575:function(t,n,e){var i=e(4938);n.initializeStore=i.initialize,n.addEvent=i.addEvent,n.getEvents=i.getEvents,n.getEventCount=i.getEventCount},7269:function(t,n,e){var i=e(8487).J,r=e(8298),o=e(1489),a=e(8487)._;n.CURRENT_SESSION_INDEX=0;var u=18e5;function c(t,e){var i;i=n.isInSameSession(t,e)?t.getValueOrDefault([o.FIELDS.SESSION_ID]):e.getValueOrDefault([o.FIELDS.TIME]),e.setFieldValue(o.FIELDS.SESSION_ID,i)}function s(t,e,i){var r,a=t.getValueOrDefault([o.FIELDS.SESSION_INDEX]);r=n.isInSameSession(e,t)?a:i?a+1:a-1,e.setFieldValue(o.FIELDS.SESSION_INDEX,r)}n.isInSameSession=function(t,n){var e=t.getValueOrDefault([o.FIELDS.TIME],0),i=n.getValueOrDefault([o.FIELDS.TIME],0);return this.isTimestampInSameSession(e,i)},n.isTimestampInSameSession=function(t,n){return Math.abs(t-n)<u},n.updateSessionId=function(t,n){if(t){var e=t.getValueOrDefault([o.FIELDS.TIME]),r=t.getValueOrDefault([o.FIELDS.SESSION_ID]),u=n.getValueOrDefault([o.FIELDS.TIME]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?e:r,c(t=new i(new a("",""),e,r),n)}else n.setFieldValue(o.FIELDS.SESSION_ID,n.getValueOrDefault([o.FIELDS.TIME]))},n.updateSessionIndex=function(t,n){if(t){var e=t.getValueOrDefault([o.FIELDS.TIME]),r=t.getValueOrDefault([o.FIELDS.SESSION_INDEX]),u=n.getValueOrDefault([o.FIELDS.TIME]),c=t.getValueOrDefault([o.FIELDS.SESSION_ID]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?0:r,c="number"!=typeof c?e:c,s(t=new i(new a("",""),e,c,r),n,!1)}else n.setFieldValue(o.FIELDS.SESSION_INDEX,0)},n.sessionize=function(t){var e=t.length;if(0!==e){t[0].setFieldValue(o.FIELDS.SESSION_ID,t[0].getValueOrDefault([o.FIELDS.TIME]));for(var i=1;i<e;i++)c(t[i-1],t[i]);var a=n.CURRENT_SESSION_INDEX,f=t[e-1].getValueOrDefault([o.FIELDS.TIME]);r.now()-f>u&&(a+=1),t[e-1].setFieldValue(o.FIELDS.SESSION_INDEX,a);for(i=e-1;i>0;i--)s(t[i],t[i-1],!0)}},n.reindexIfNecessary=function(t,n,e){var i=function(t){for(var n=0;n<t.length;n++){var e=t[n].getValueOrDefault([o.FIELDS.SESSION_INDEX]);t[n].setFieldValue(o.FIELDS.SESSION_INDEX,e+1)}};-1===t.getValueOrDefault([o.FIELDS.SESSION_INDEX])&&(i(n),i(e))},n.sessionSortPredicate=function(t,n){return t[o.FIELDS.TIME]-n[o.FIELDS.TIME]},n.applyMigrations=function(t){return!1}},4938:function(t,n,e){var i=e(136),r=e(6278),o=e(8298),a=e(5225),u=e(409),c=e(7852),s=e(7269),f=e(4285),l=n,d=e(8487).J,v=e(1489),h=e(6592),p=e(8487)._,g=(s=e(7269),e(2025)),m=g.get("stores/visitor_events"),b=g.get("stores/visitor_events_manager"),_={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},y=1e3;function w(t){u.dispatch(i.SET_VISITOR_EVENTS,t)}function E(t){u.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:t})}function I(t){u.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:t})}function A(t){u.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:t})}function T(){return m.getEvents()}function O(){return b.getBaseMap()}function S(){return b.getEventQueue()}function k(){return b.getLastEvent()}function R(){var t=T().concat(S()),n=!1;return t.length>y&&(t=t.slice(-1e3),n=!0),w(t),I([]),n}n.initialize=function(t,n){if(!b.getInitialized()){l.I(t,n);var e=T();e.length>0&&A(e[e.length-1]);var r=S();r.length>0&&A(r[r.length-1]),u.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}},n.addEvent=function(t){c.debug("Behavior store: adding event",t);var n=l.A(t);A(n),I(S().concat(n)),s.reindexIfNecessary(k(),T(),S()),l.T(S()),n.t&&function(t){try{var n=Number(r.get(h.COOKIES.OPTIMIZELY_SESSION,!1));if(isNaN(n)||0!==n){var e=n?s.isTimestampInSameSession(t,n)?t:0:t;r.set(h.COOKIES.OPTIMIZELY_SESSION,e.toString(),{path:"/",encodeValue:!1},!0)}}catch(t){c.error("Error setting session cookie",t)}}(n.t)},n.getEvents=function(){return S().length>0&&(R()&&s.sessionize(T()),l.O(T()),l.T(S())),T()},n.getEventCount=function(){return S().length+T().length},l.I=function(t,n){l.S(t,n)&&(l.O(T()),l.T(S())),s.sessionize(T())},l.S=function(t,n){if(0===t.length&&0===n.length)return w([]),I([]),!1;var e=!1,i=t[0]||n[0];return _.EVENTBASE in i?(w(l.k(t)),I(l.k(n))):(e=!0,w(l.R(t)),I(l.R(n))),S().length>0&&(R(),e=!0),w(l._updateBaseMapAndMaybeDedupe(T())),l._migrateEventBasesAndUpdateStore()&&(e=!0),e},l.R=function(t){for(var n=[],e=0;e<t.length;e++){var i=t[e],r=l.N(i);n[e]=new d(r,i[v.FIELDS.TIME])}return n},l._migrateEventBasesAndUpdateStore=function(){var t=!1,n=l.D();return s.applyMigrations(n)&&(t=!0,E({}),w(l._updateBaseMapAndMaybeDedupe(T())),I(l._updateBaseMapAndMaybeDedupe(S()))),t},l.j=function(){return o.now()},l.A=function(t){var n,e=t.name,i=t.type||"default",r=t.category||a.OTHER,o=t.tags||{};t.revenue&&(n=t.revenue);var u=new p(e,i,r,o,n);u=l.P(u);var c=l.j(),f=new d(u,c,-1);return s.updateSessionId(k(),f),s.updateSessionIndex(k(),f),f},l._updateBaseMapAndMaybeDedupe=function(t){for(var n=0;n<t.length;n++)t[n].eventBase=l.P(t[n].eventBase);return t},l.O=function(t){var n=l.L(t);f.persistBehaviorEvents(n)},l.T=function(t){var n=l.L(t);f.persistBehaviorEventQueue(n)},l.U=function(){var t;b.getCleared()||(w([]),I([]),l.O(T()),l.T(S()),E({}),A(null),t=!0,u.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:t}))},l.P=function(t){var n=t.hash(),e=O(),i=e[n];if(void 0===i)return e[n]=[t],E(e),t;for(var r=0;r<i.length;r++)if(t.equals(i[r]))return i[r];return i.push(t),E(e),t},l.D=function(){var t=[],n=O();for(var e in n)!n.hasOwnProperty(e)||(t=t.concat(n[e]));return t},l.L=function(t){for(var n=function(t){var n={};n[v.FIELDS.NAME]=t.getValueOrDefault([v.FIELDS.NAME]),n[v.FIELDS.TYPE]=t.getValueOrDefault([v.FIELDS.TYPE]);var e=t.getValueOrDefault([v.FIELDS.CATEGORY]);void 0!==e&&(n[v.FIELDS.CATEGORY]=e);var i=t.getValueOrDefault([v.FIELDS.REVENUE]);void 0!==i&&(n[v.FIELDS.REVENUE]=i);var r=t.getValueOrDefault([v.FIELDS.OPTIONS]);return void 0!==r&&(n[v.FIELDS.OPTIONS]=r),n},e=_,i=[],r="_idx_",o=0;o<t.length;o++){var a,u,c=t[o],s=c.eventBase;if(s.hasOwnProperty(r)){a=i[s[r]];var f=c[v.FIELDS.TIME]-(a[e.TIMEBASE]||0);(u={})[e.DELTA]=f,u[e.INDEX]=o,a[e.TIMESTAMPS].push(u)}else(a={})[e.EVENTBASE]=n(c),a[e.HASH]=s.hash(),a[e.TIMEBASE]=c[v.FIELDS.TIME],(u={})[e.DELTA]=0,u[e.INDEX]=o,a[e.TIMESTAMPS]=[u],i.push(a),s[r]=i.length-1}for(o=0;o<t.length;o++)delete t[o].eventBase[r];return i},l.N=function(t,n){var e=new p(t[v.FIELDS.NAME],t[v.FIELDS.TYPE],t[v.FIELDS.CATEGORY],t[v.FIELDS.OPTIONS],t[v.FIELDS.REVENUE]);return void 0!==n&&e.setHash(n),e},l.k=function(t){for(var n=_,e=[],i=0;i<t.length;i++)for(var r=t[i],o=l.N(r[n.EVENTBASE],r[n.HASH]),a=r[n.TIMEBASE],u=r[n.TIMESTAMPS],c=0;c<u.length;c++){var s=u[c],f=new d(o,a+s[n.DELTA]);e[s[n.INDEX]]=f}return e},n.deserialize=function(t){return l.k(t)},n.mergeAllEvents=function(t){var n=[].concat.apply([],t);return n.sort(s.sessionSortPredicate),s.sessionize(n),n},n.MAX_EVENTS=y},136:function(t,n,e){var i=e(3826);t.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,SET_GA4_USER_ID:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,UPDATE_CONTEXTUAL_MAB_MAP:null,MERGE_CONTEXTUAL_MAB_MAP:null,SET_ODP_SEGMENTS:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,RESET_VIEW_STATES:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT:null,RECORD_VISITOR_ID_LOCATOR_USAGE:null,RECORD_VISITOR_ID_ERROR:null,RECORD_STICKY_BUCKETING_FEATURE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_USE_BEACON:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})},6592:function(t,n,e){var i=e(3826);n.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",OPTIMIZELY_SESSION:"optimizelySession",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},n.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},n.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},n.Lifecycle=i({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),n.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},n.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},n.PluginTypes=i({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),n.ResourceTimingAttributes=i({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),n.RUMPerformanceTimingAttributes=i({blockTime:null}),n.AttributionTypes=i({FIRST_TOUCH:null,LAST_TOUCH:null}),n.SandboxedFunctions=i({XMLHttpRequest:null}),n.PerformanceData=i({performance_marks:null,resource_timing:null,performance_timing:null}),n.PerformanceCounters=i({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),n.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely",CONTEXTUAL_MAB:"contextual_mab",ODP_SEGMENTS:"odp_segments"},n.AllStorageKeys=Object.assign({},n.StorageKeys,n.VisitorStorageKeys),n.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"},n.VisitorIdLocatorType={COOKIE:"cookie",JS_VARIABLE:"js",LOCALSTORAGE:"localStorage",QUERY:"query"},n.AllocationPolicyEnum={CMAB:"contextual-multi-arm-bandit",MIN_REGRET:"min-regret",MIN_TIME:"min-time",MANUAL:"manual"}},5225:function(t){t.exports={OTHER:"other"}},3111:function(t,n){n.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}},1320:function(t){t.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}},6938:function(t,n,e){var i=e(3826);n.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),n.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),n.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),n.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),n.RedirectRelayMedia=i({COOKIE:null})},9249:function(t,n,e){var i=e(1691),r=n.TOTAL_POINTS=1e4;n.bucketingNumber=function(t,n,e){return i.hashToInt(t+n,e,r)},n.isHoldback=function(t,e){return n.bucketingNumber(t,e.id,i.Seed.IGNORING)<(e.holdback||0)},n.chooseWeightedCandidate=function(t,e,r){for(var o=n.bucketingNumber(t,e,i.Seed.BUCKETING),a=0;a<r.length;a++)if(r[a].endOfRange>o)return r[a].entityId;throw new Error("Unable to choose candidate")}},571:function(t,n,e){var i=e(8275).isEmpty,r=e(136),o=e(9249),a=e(5421),u=e(7353).b,c=e(409),s=e(7852),f=e(2855);n.isValidExperiment=function(t,n){var e;return s.groupCollapsed("Decision / Evaluating audiences for experiment:",n,t),e=!n.audienceIds||a.evaluate(n.audienceIds,(function(n){return t.includes(n)})),s.groupEnd(),s.debug("Decision / Experiment",n,"is valid?",e),e},n.selectVariation=function(t,n,e,i,a){if(s.debug("Decision / Selecting variation for experiment:",t.id),!t.variations||0===t.variations.length)throw new u('No variations in selected experiment "'+t.id+'"');if(!t.weightDistributions&&t.variations.length>1)throw new u('On selected experiment "'+t.id+'", weightDistributions must be defined if # variations > 1');var l;if(t.bucketingStrategy&&"impression"===t.bucketingStrategy)if(1===t.variations.length)l=t.variations[0].id;else{var d=i;l=o.chooseWeightedCandidate(e+d,t.id,t.weightDistributions)}else if(l=1===t.variations.length?t.variations[0].id:o.chooseWeightedCandidate(e,t.id,t.weightDistributions),null==t?void 0:t.deployed)s.debug("Decision / Experiment is deployed. Skipping bucketing.");else if(a&&a[t.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",t.id);var v=a[t.id];if(!t.variations.find((function(t){return t.id===v})))return c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"stoppedVariation",id:t.id}),s.debug("Decision / Preferred variation:",v,"not found on experiment:",t.id,". Visitor not bucketed."),null;v!==l&&(c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredVariation",id:t.id}),l=v)}var h=f.processCmabExperiment(t,l);h&&(l=h);var p=t.variations.find((function(t){return t.id===l}));if(p)return s.debug("Decision / Selected variation:",p),p;throw new u('Unable to find selected variation: "'+l+'".')},n.getExperimentById=function(t,n){var e=t.experiments.find((function(t){return t.id===n}));if(e)return e;throw new u("Unable to find selected experiment.")},n.hasVariationActionsOnView=function(t,n){return s.debug("Decision / Checking variation:",t,"for actions on pageId:",n),!!(t.actions||[]).find((function(t){return t.pageId===n&&!i(t.changes)}))}},7353:function(t,n){function e(t){this.message=t}e.prototype=new Error,n.b=e},1035:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.pick,a=(e(136),e(8841)),u=e(7595),c=e(9249),s=e(571),f=e(7353).b,l=e(2025),d=e(6592),v=(e(409),e(3672),e(2042)),h=e(7852),p=(e(5010),e(5686)),g=l.get("stores/plugins"),m=l.get("stores/global"),b=l.get("stores/layer_data");function _(t){var n=g.getPlugin(d.PluginTypes.deciders,t);if(r(n))throw new Error("No deciders found for policy: "+t);return n}n.isPageIdRelevant=function(t){if(!t)return!1;var n=_(t.policy);return"function"==typeof n.includePageIdInDecisionTicket?n.includePageIdInDecisionTicket(t):!0===n.includePageIdInDecisionTicket},n.createTicket=function(t){var n,e,i,r=o(t,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return Object.assign(r,{audienceIds:(n=t.visitorProfile,e=t.audiences,i=g.getAllPlugins(d.PluginTypes.audienceMatchers),e.reduce((function(t,e){return u.isInAudience(n,e,i)&&t.push(e.id),t}),[])),activationId:m.getActivationId()}),r},n.decideGlobal=function(t){return{isGlobalHoldback:c.isHoldback(t.bucketingId,{id:null,holdback:t.globalHoldback})}},n.decideLayer=function(t,n){var e,i;h.debug("Deciding: ",t,n);var o,u,l=_(t.policy),d={layerId:t.id,experimentId:null,variationId:null,isLayerHoldback:c.isHoldback(n.bucketingId,t),isLayerConcluded:!!t.concluded};if(r(t.experiments))throw new f("No experiments in layer.");try{if(l.decideLayer){h.debug("Decision / Using decider's custom decideLayer.");var v=l.decideLayer(t,n);e=v.experiment,i=v.variation}else h.debug("Decision / Using default decideLayer behavior."),e=l.selectExperiment(t,n.audienceIds,n.bucketingId),i=s.selectVariation(e,n.audienceIds,n.bucketingId,n.activationId,n.preferredVariationMap)}catch(t){o=t,(null!=(u=f)&&"undefined"!=typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](o):o instanceof u)?d.reason=t.message:d.error=t}return d.experimentId=e?e.id:null,d.variationId=i?i.id:null,d.error&&(d.error.name="DecisionEngineError",a.emitError(d.error)),d},n.getDummyLayerDecision=function(t,n){var e,i=function(t,n){for(var e=0;e<t.experiments.length;e++)for(var i=0;i<t.experiments[e].variations.length;i++)if(n.indexOf(t.experiments[e].variations[i].id)>-1)return{experimentId:t.experiments[e].id,variationId:t.experiments[e].variations[i].id};return null}(t,n);return i?(h.log("Decision / Applying force variation:",i.variationId,"to Campaign",v.description(t)),e={layerId:t.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,isLayerConcluded:!1,reason:"force"}):(h.log("No variation matches ids:",n,"in Campaign",v.description(t)),e={layerId:t.id,variationId:null,experimentId:null,isLayerHoldback:!1,isLayerConcluded:!1,reason:"force"}),e},n.isInCohort=function(t){if(!t.experimentId||!t.variationId)return!1;var n=b.get(t.layerId);return!(p.isSingleExperimentPolicy(n.policy)&&t.isLayerHoldback)}},2025:function(t,n,e){var i=e(2328),r=e(409),o=e(3822),a=i.create(),u={action_data:e(5628),async_request:e(9021),audience_data:e(2500),change_data:e(7090),cleanup:e(2587),client_metadata:e(2814),cookie_options:e(6108),event_data:e(9034),event_emitter:e(4338),dimension_data:e(1862),directive:e(5798),global:e(2940),history:e(1459),integration_settings:e(4453),layer:e(2734),layer_data:e(9057),log:e(9809),observed_redirect:e(8338),pending_events:e(9738),performance:e(5501),plugins:e(4715),provider_status:e(8515),pending_redirect:e(6067),rum:e(4999),sandbox:e(9292),session:e(3799),tracker_optimizely:e(8950),ua_data:e(4184),view:e(90),view_data:e(749),visitor:e(2857),visitor_attribute_entity:e(6658),visitor_events:e(2725),visitor_events_manager:e(977),visitor_id:e(241),visitor_bucketing:e(7016),xdomain:e(227)};r.registerStores(u),Object.keys(u).forEach((function(t){a.register("stores/"+t,r.getStore(t))})),a.register("core/plugins/matchers/key_value",o),t.exports=a},4214:function(t,n,e){var i=e(136),r=e(8841),o=e(6278),a=e(8130).v,u=e(6592),c=e(409),s=e(7852),f=n.JSONParseError=a("JSONParseError"),l=e(6022),d=e(192),v=e(9454),h="optimizely_show_preview",p="optimizely_disable",g="optimizely_editor",m="optimizely_p13n",b="optimizely_x_audiences",_="optimizely_x",y="optimizely_show_preview",w="optimizely_opt_out",E="optimizely_token",I="optimizely_force_tracking",A="optimizely_embed_editor";n.populateDirectiveData=function(){var t,n,e,a,T,O,S,k,R;!function(){var t="OFF",n=l.getQueryParamValue("optimizely_log");if(n){var e=n.split(":");""!==e[0]&&(t=String(e[0]).toUpperCase()),void 0!==e[1]&&s.setLogMatch(e[1])}s.setLogLevel(t)}(),function(){var t=v.getUserAgent()||"";if("string"!=typeof t)return void s.warn("Directive / userAgent not a string");t=t.toLowerCase(),["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"].some((function(n){if(t.includes(n))return s.warn("Directive / Matches bot:",n),!0}))&&(s.log("Directive / Disabling tracking"),c.dispatch(i.LOAD_DIRECTIVE,{trackingDisabled:!0}))}(),t=window.optimizely?window.optimizely.initialized:void 0,n=Boolean("function"==typeof t?t():t),c.dispatch(i.LOAD_DIRECTIVE,{alreadyInitialized:n}),c.dispatch(i.LOAD_DIRECTIVE,{mutationObserverAPISupported:v.isMutationObserverAPISupported()}),function(){var t=o.get(u.COOKIES.OPT_OUT),n=l.getQueryParamValue(w),e="You have successfully opted out of Optimizely for this domain.",r="You are NOT opted out of Optimizely for this domain.";if("true"===n||"false"===n){var a="true"===n;c.dispatch(i.LOAD_DIRECTIVE,{shouldOptOut:a}),v.alert(a?e:r)}else t&&c.dispatch(i.LOAD_DIRECTIVE,{shouldOptOut:"true"===t})}(),function(){var t=!1,n=[h,p];n.push(g);for(var e=0;e<n.length;e++)if("true"===l.getQueryParamValue(n[e])){s.warn("Directive / Not activating because "+n[e]+" is set."),t=!0;break}c.dispatch(i.LOAD_DIRECTIVE,{disabled:t})}(),c.dispatch(i.LOAD_DIRECTIVE,{isEditor:!1}),c.dispatch(i.LOAD_DIRECTIVE,{isPreview:!1}),(e=l.getQueryParamValue(y))&&s.log("Directive / Is legacy preview mode"),c.dispatch(i.LOAD_DIRECTIVE,{isLegacyPreview:!!e}),c.dispatch(i.LOAD_DIRECTIVE,{isSlave:!1}),a=v.getGlobal("optlyDesktop"),(T=!(!a||void 0===a.p13nInner))&&s.log("Directive / Is running in desktop app editor"),c.dispatch(i.LOAD_DIRECTIVE,{isRunningInDesktopApp:T}),(O="true"===l.getQueryParamValue(m))&&s.log("Directive / Is running in editor"),c.dispatch(i.LOAD_DIRECTIVE,{isRunningInV2Editor:O}),function(){var t=!1,n=v.getGlobal("sessionStorage"),e=l.getQueryParamValue(A);t="true"===e,e&&n&&("true"===e?n.setItem(A,"true"):n.removeItem(A)),n&&"true"===n.getItem(A)&&(t=!0,s.log("Directive / Should mount embedded editor"));c.dispatch(i.LOAD_DIRECTIVE,{requestedEmbeddedEditor:t})}(),S=o.get(u.COOKIES.TOKEN)||null,k=l.getQueryParamValue(E)||S,c.dispatch(i.LOAD_DIRECTIVE,{projectToken:k}),function(){var t=o.get(u.COOKIES.PREVIEW),n=[],e=l.getQueryParamValue(b);if(e)n=o.safeDecodeURIComponent(e).split(",");else if(t)try{n=d.parse(t).forceAudienceIds}catch(n){var i=new f("Failed to parse previewCookie in registerForceAudienceIds: "+t),a={originalMessage:n.message,userError:!0};r.emitError(i,a)}n.length&&s.warn("Directive / Force parameters disabled - ignoring force audience IDs.")}(),function(){var t=o.get(u.COOKIES.PREVIEW),n=[],e=l.getQueryParamValue(_);if(e)n=o.safeDecodeURIComponent(e).split(",");else if(t)try{n=d.parse(t).forceVariationIds}catch(n){var i=new f("Failed to parse previewCookie in registerForceVariationIds: "+t),a={originalMessage:n.message,userError:!0};r.emitError(i,a)}n.length&&s.warn("Directive / Force parameters disabled - ignoring force variation IDs.")}(),(R=l.getQueryParamValue(I))&&c.dispatch(i.LOAD_DIRECTIVE,{forceTracking:R})};n.setOptOut=function(t){t?(s.warn("Directive / Opting out"),o.set(u.COOKIES.OPT_OUT,"true",{maxAge:31536e4},!0)):o.remove(u.COOKIES.OPT_OUT),c.dispatch(i.LOAD_DIRECTIVE,{shouldOptOut:t})}},8298:function(t,n){n.now=function(){return+new Date}},7871:function(t,n){n.VERSION="0.261.0",n.NAME="js"},1019:function(t,n,e){var i=e(2025).get("stores/global");n.getDocumentElement=function(){return document.documentElement},n.getCookieString=function(){return document.cookie||""},n.setCookie=function(t){document.cookie=t},n.querySelector=function(t){return document.querySelector(t)},n.querySelectorAll=function(t){return document.querySelectorAll(t)},n.parseUri=function(t){var e=n.createElement("a");return e.href=t,e},n.childrenOf=function(t){return Array.prototype.slice.call(t.querySelectorAll("*"))},n.createElement=function(t){return document.createElement(t)},n.isReady=function(){return i.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},n.isLoaded=function(){return"complete"===document.readyState},n.addReadyHandler=function(t){return document.addEventListener("DOMContentLoaded",t),function(){n.removeReadyHandler(t)}},n.removeReadyHandler=function(t){return function(){document.removeEventListener("DOMContentLoaded",t)}},n.getReferrer=function(){return document.referrer},n.getReadyState=function(){return document.readyState},n.write=function(t){if("loading"!==n.getReadyState())throw new Error("Aborting attempt to write to already-loaded document");document.write(t)},n.appendToHead=function(t){return n.appendTo(document.head,t)},n.appendTo=function(t,n){t.appendChild(n)},n.addEventListener=function(t,n,e){return document.addEventListener(t,n,e),function(){document.removeEventListener(t,n,e)}},n.getCurrentScript=function(){if(document.currentScript)return document.currentScript},n.parentElement=function(t){for(var n=t.parentNode;n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;return n}},1353:function(t,n,e){var i,r,o="optimizely_data",a=e(8130).v,u=e(3908),c=e(9454),s=a("StorageError");try{r=c.getGlobal("localStorage")}catch(t){throw new s("Unable to read localStorage: "+t.toString())}if(!r)throw new s("localStorage is undefined");i=u.create(r,o),n.DT=i},4970:function(t,n,e){var i=e(318);n.create=function(t){return new(i.get("MutationObserver",MutationObserver))(t)},n.observe=function(t,n,e){t.observe(n,e)}},4049:function(t,n,e){var i=e(6761).Promise,r=e(9454);n.estimateStorage=function(){var t=r.getGlobal("navigator");try{return t.storage.estimate()}catch(t){return i.resolve({usage:null,quota:null})}}},5010:function(t,n,e){var i=e(136),r=e(8130).v,o=e(8298),a=e(409),u=e(9454),c=e(2025).get("stores/rum"),s="optimizely:",f=n.Error=r("PerformanceError");function l(){return u.getGlobal("performance")}n.time=function(t){if(c.getSampleRum()){var n=l();if(n&&n.mark){var e=s+t;n.clearMarks(e+"Begin"),n.mark(e+"Begin")}}},n.timeEnd=function(t){if(c.getSampleRum()){var n=l();if(n&&n.mark){var e=s+t,r=n.getEntriesByName(e+"Begin");if(0===r.length)throw new f("Called timeEnd without matching time: "+t);n.clearMarks(e+"End"),n.mark(e+"End");var o=t+"Time",u=n.getEntriesByName(e+"End")[0].startTime-r[0].startTime;a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:o,data:{startTime:Math.round(1e3*r[0].startTime)/1e3,duration:Math.round(1e3*u)/1e3}})}}},n.setMark=function(t,n,e){if(c.getSampleRum()){var r=l();if(r&&r.mark){var o=s+t;r.mark(o),a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:t,data:{startTime:Math.round(1e3*n)/1e3,duration:Math.round(1e3*e)/1e3}})}}},n.now=function(){var t=l();return t?t.now():o.now()}},318:function(t,n){n.get=function(t,n){try{var e=window.Zone;if(e&&"function"==typeof e.V){var i=window[e.V(t)];if("function"==typeof i)return i}}catch(t){}return n}},9454:function(t,n,e){var i=e(7852);n.getUserAgent=function(){return window.navigator.userAgent},n.getLocationSearch=function(){return window.location.search},n.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},n.getHref=function(){return window.location.href},n.getLocation=function(){return window.location},n.setLocation=function(t){window.location.replace(t)},n.setGlobal=function(t,n){window[t]=n},n.getGlobal=function(t){return window[t]},n.getGlobalByPath=function(t){for(var n=t.split("."),e=window;n.length;)try{e=e[n.shift()]}catch(n){throw i.error("Attempted to access nonexistent property. Path ",t),new Error("Attempted to access nonexistent property. Path "+t)}return e},n.addEventListener=function(){return window.addEventListener.apply(window,arguments)},n.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},n.isMutationObserverAPISupported=function(){return void 0!==window.MutationObserver},n.alert=function(t){alert(t)},n.setTimeout=function(t,n){return setTimeout((function(){try{t()}catch(t){i.warn("Deferred function threw error:",t)}}),n)},n.setInterval=function(t,n){return setInterval((function(){try{t()}catch(t){i.warn("Polling function threw error:",t)}}),n)}},8851:function(t,n){n.create=function(t,n,e,i){return Object.assign({category:"other"},i,{id:t,apiName:n,eventType:e})}},7566:function(t,n,e){var i=e(9899),r=e(136),o=e(8841),a=e(2025),u=e(409),c=e(7852),s=a.get("stores/event_emitter");n.on=function(t){return t.token||(t.token=i.generate()),u.dispatch(r.ADD_EMITTER_HANDLER,t),t.token},n.off=function(t){u.dispatch(r.REMOVE_EMITTER_HANDLER,{token:t})},n.emit=function(t,n,e){s.getHandlers(t,n).forEach((function(i){try{i.handler.call({$di:a},t)}catch(r){!e&&i.emitErrors?(c.error("Error in handler for event:",t,r),o.emitError(r,null,n)):c.warn("Suppressed error in handler for event:",t,r)}}))}},5547:function(t,n,e){var i=e(7566);n.on=function(t){return t.publicOnly=!0,i.on(t)},n.off=i.off,n.emit=function(t){i.emit(t)}},8484:function(__unused_webpack_module,exports,__webpack_require__){var createError=__webpack_require__(3958),di=__webpack_require__(2025),Logger=__webpack_require__(7852),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(t,n){n=(n=n||[]).concat(di.get("env/jquery"));try{return t.apply(void 0,n)}catch(e){throw Logger.warn("Error applying function",t,"with args:",n,e),new ExecError(e)}},exports.eval=function(str){try{return str="var $ = optimizely.get('jquery');"+str,eval(str)}catch(t){throw Logger.warn("Error executing JS:",str,t),new ExecError(t)}}},409:function(t,n,e){var i=e(3191);t.exports=i.create()},3672:function(t,n){n.description=function(t){var n=!!t.name?'"'+t.name+'" ':"",e=function(t){return(t.weightDistributions||[]).map((function(t){return t.entityId}))}(t).join(", ");return n+"(id "+t.id+", campaigns: "+e+")"}},2042:function(t,n,e){var i=e(8275).flattenDeep,r=e(136),o=e(8298),a=e(2025),u=e(409),c=a.get("stores/global"),s=a.get("stores/session");n.recordLayerDecision=function(t,n,e){return u.dispatch(r.RECORD_LAYER_DECISION,{layerId:t,decision:e,decisionTicket:n,sessionId:s.getSessionId(),activationId:c.getActivationId(),timestamp:o.now(),revision:c.getRevision(),namespace:c.getNamespace(),pageId:n.pageId}),e},n.relatedAudienceIds=function(t){var n={},e=["and","or","not"];return(t.experiments||[]).forEach((function(t){i(t.audienceIds).forEach((function(t){e.includes(t)||(n[t]=!0)}))})),Object.keys(n)},n.getActivationTimeout=function(t){var n=t.activation;return n&&null!==n.timeout&&void 0!==n.timeout?n.timeout:2e3},n.description=function(t){return(t.name?'"'+t.name+'" ':"")+"("+t.id+")"},n.createSingle=function(t,n,e){return{id:t,policy:"single_experiment",holdback:0,experiments:[{id:n||"",variations:[{id:e||"",actions:[]}],audienceIds:[]}],integrationStringVersion:1}},n.createLayerState=function(t,n,e,i,r){return void 0===i&&(i=!1),void 0===r&&(r=!1),{layerId:t,decision:{layerId:t,experimentId:n,variationId:e,isLayerHoldback:i||!1,isLayerConcluded:r||!1},decisionTicket:{audienceIds:[]}}},n.getIntegrationTypes=function(t){return Object.keys(Object.keys(t.integrationSettings).reduce((function(t,n){return Number.isNaN(Number(n))||(n="custom"),t[n]=1,t}),{}))}},2424:function(t,n){n.G=function(t,n){if(!n)return 0;for(var e=n.toString().split("."),i=t.toString().split("."),r=0;r<e.length;r++){if(void 0===i[r])return-1;if(isNaN(Number(i[r]))){if(i[r]!==e[r])return-1}else{if(Number(i[r])<Number(e[r]))return-1;if(Number(i[r])>Number(e[r]))return 1}}return 0}},5421:function(t,n,e){var i=e(192),r=e(7852),o="or",a="not";var u={};function c(t,n){var e;if(Array.isArray(t)){var a,c;"string"==typeof t[0]&&t[0]in u?(a=t[0],c=t.slice(1)):(a=o,c=t),r.groupCollapsed('Condition / Applying operator "'+a+'" with args',i.stringify(c));try{e=u[a](c,n),r.debug("Condition / Result:",e)}finally{r.groupEnd()}return e}return e=n(t),r.debug("Condition / Evaluated:",i.stringify(t),":",e),e}u["and"]=function(t,n){for(var e,i,r=0;r<t.length;r++){if(!1===(e=c(t[r],n)))return!1;void 0===e&&(i=!0)}if(!i)return!0},u[o]=function(t,n){for(var e,i=!1,r=0;r<t.length;r++){if(!0===(e=c(t[r],n)))return!0;void 0===e&&(i=!0)}if(!i)return!1},u[a]=function(t,n){if(1!==t.length)return!1;var e=c(t[0],n);return void 0!==e?!e:void 0},t.exports={evaluate:c}},4861:function(t,n,e){var i=e(6179);function r(t){return(t=(t||"").toLowerCase())in u?t:Object.keys(u).find((function(n){return u[n].includes(t)}))||"unknown"}function o(t,n,e){return n||("unknown"===t?"unknown":e?"mobile":"desktop_laptop")}n.parseUA=function(t){var n=new i(t),e=n.getBrowser(),u=n.getOS(),s=n.getDevice(),f=(u.name||"unknown").toLowerCase(),l=(e.name||"unknown").toLowerCase(),d=function(t){var n=/\b(iPad|iPhone)\d+,\d+/i.exec(t);return n?n[1].toLowerCase():null}(t),v="ipad"===d?"tablet":s.type,h=a(v,l,f);return{browser:{id:r(e.name),version:e.version},platform:{name:f,version:u.version},device:{model:c[s.model]||d||"unknown",type:o(l,v,h),isMobile:h}}};var a=function(t,n,e){if(["mobile","tablet"].includes(t)||["opera mini"].includes(n))return!0;return!!["android","blackberry","ios","windows phone"].includes(e)},u={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},c={iPhone:"iphone",iPad:"ipad"}},2328:function(t){function n(){this.B={}}n.prototype.register=function(t,n){if(1!==arguments.length){if(this.B[t])throw new Error("Module already registered for: "+t);this.B[t]=n}else{var e=this;Object.keys(t).forEach((function(n){var i=t[n];e.register(n,i)}))}},n.prototype.get=function(t){return this.B[t]},n.prototype.getModuleKeys=function(){var t=this.B;return Object.keys(t)},n.prototype.evaluate=function(t){var n=t.length,e=t.slice(0,n-1),i=t[n-1];if("function"!=typeof i)throw new Error("Evaluate must take a function as last element in array");var r=e.map(this.get,this);return i.apply(null,r)},n.prototype.reset=function(){this.B={}},t.exports={create:function(){return new n}}},4544:function(t,n,e){var i=e(8275).cloneDeep;function r(t,n,e){this.q=t,this.H=n,this.Y=0,this.K=!1,this.$={},Object.assign(this,e),this.W={},this.initialize&&this.initialize()}r.prototype.X=function(t,n){var e=this.$[t];e&&"function"==typeof e&&e.call(this,n,t)},r.prototype.Z=function(){return i(this.W)},r.prototype.on=function(t,n){this.$[t]=n.bind(this)},r.prototype.observe=function(t){return this.H.tt(this.q,t)},r.prototype.emitChange=function(){this.K=!0,this.Y++},r.prototype.hasChanges=function(){return this.K},r.prototype.resetChange=function(){this.K=!1},r.prototype.getStateId=function(){return this.Y},r.prototype.nt=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},t.exports=r},3191:function(t,n,e){var i=e(4544);function r(t){t=t||{},this.et={},this.it={},this.rt=0,this.ot=[],this.ut=[]}function o(t,n){return function(){var e=t.indexOf(n);-1!==e&&t.splice(e,1)}}r.prototype.registerStores=function(t){Object.keys(t).forEach((function(n){this.et[n]=new i(n,this,t[n])}),this)},r.prototype.getStore=function(t){return this.et[t]},r.prototype.dispatch=function(t,n){this.dispatchId++;var e=this;this.ot.forEach((function(i){i.call(e,t,n)}));var i=this.et;Object.keys(i).forEach((function(e){i[e].X(t,n)})),this.ut.forEach((function(i){i.call(e,t,n)})),Object.keys(i).forEach((function(t){var n=i[t];n.hasChanges()&&this.it[t]&&(n.resetChange(),this.it[t].forEach((function(t){t(n)})))}),this)},r.prototype.reset=function(){this.it={};var t=this.et;Object.keys(t).forEach((function(n){t[n].nt()}))},r.prototype.getState=function(){var t={},n=this.et;return Object.keys(n).forEach((function(e){t[e]=n[e].Z()})),t},r.prototype.onPreAction=function(t){var n=this.ot;return n.push(t),o(n,t)},r.prototype.onPostAction=function(t){var n=this.ut;return n.push(t),o(n,t)},r.prototype.tt=function(t,n){return this.it[t]||(this.it[t]=[]),this.it[t].push(n),o(this.it[t],n)},t.exports={create:function(t){return new r(t)}}},192:function(t,n){n.stringify=function(){var t=arguments;return function(t){var n,e,i=[Array.prototype],r=[];i.forEach((function(t){void 0!==t.toJSON&&(r.push(t.toJSON),delete t.toJSON)}));try{n=t()}catch(t){e=t}finally{r.forEach((function(t,n){i[n].toJSON=t}))}if(e)throw e;return n}((function(){return JSON.stringify.apply(null,t)}))},n.parse=JSON.parse},2973:function(t,n){n.hasMatch=function(t,n,e){var i=null!=e,r=null!=t;switch(n||(r?"exact":"exists")){case"exists":return i;case"exact":return i&&String(e)===t;case"substring":return i&&String(e).indexOf(t)>-1;case"regex":try{return!(!r||!i)&&new RegExp(t).test(String(e))}catch(t){}return!1;case"range":var o=t.split(":"),a=parseFloat(o[0]),u=parseFloat(o[1]),c=parseFloat(e);return c>=a&&c<=u;default:return!1}}},6761:function(t,n,e){t.exports=e(1375)},3908:function(t,n,e){var i=e(7852);function r(t,n){this.ct=t,this.st=n}r.prototype.ft=function(t){return[this.st,t].join("$$")},r.prototype.dt=function(t){return t.replace(this.st+"$$","")},r.prototype.setItem=function(t,n){try{this.ct.setItem(this.ft(t),n)}catch(n){i.warn("Failed to save",t,"to localStorage:",n)}},r.prototype.removeItem=function(t){this.ct.removeItem(this.ft(t))},r.prototype.getItem=function(t){var n=null;try{n=this.ct.getItem(this.ft(t))}catch(t){}return n},r.prototype.keys=function(){var t=this;return Object.keys(this.ct).filter((function(n){return n.includes(t.st)})).map((function(n){return t.dt(n)}))},r.prototype.allKeys=function(){return Object.keys(this.ct)},r.prototype.allValues=function(){return Object.values(this.ct)},t.exports={create:function(t,n){return new r(t,n)},mockStorage:{keys:function(){},getItem:function(t){},removeItem:function(t){},setItem:function(t,n){}}}},5975:function(t,n,e){var i=e(1019),r=e(7566),o=e(4970);n.createDOMChangedObserver=function(){var t=i.getDocumentElement(),n={type:"viewTrigger",name:"DOMChanged"},e=o.create((function(){r.emit(n,!0)}));o.observe(e,t,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}},3224:function(t,n,e){var i=e(8275).isEmpty,r=e(8841),o=e(6592),a=e(192),u=e(1353).DT,c=e(7852),s=e(6761),f=e(8260),l=e(2025).get("stores/pending_events"),d=o.StorageKeys.PENDING_EVENTS,v=!1;n.persistPendingEvents=function(){try{var t=l.getEventsString();u.setItem(d,t)}catch(t){c.warn("PendingEvents / Unable to set localStorage key, error was: ",t),r.emitInternalError(t)}},n.flushPersistPendingEvents=function(){v&&(v=!1,n.persistPendingEvents())},n.schedulePersistPendingEvents=function(){v||(v=!0,s.resolve().then(n.flushPersistPendingEvents).catch((function(t){c.warn("PendingEvents / Unable to persist pending events, error was: ",t)})))},n.getPendingEvents=function(){try{return a.parse(u.getItem(d))}catch(t){return null}},n.retryPendingEvents=function(t){Object.keys(t).forEach((function(n){var e=t[n];f.retryableRequest(e.data,n,e.retryCount)})),i(t)||c.log("Retried pending events: ",t)}},9937:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(2025),a=e(6592),u=e(7566),c=e(409);n.registerApiModule=function(t,n){Array.isArray(n)&&(n=o.evaluate(n)),c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.apiModules,name:t,plugin:n})},n.registerDependency=function(t,n){o.get(t)||o.register(t,n)},n.registerVisitorProfileProvider=function(t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.visitorProfileProviders,name:t.provides,plugin:t})},n.registerViewProvider=function(t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewProviders,name:t.provides,plugin:t})},n.registerAudienceMatcher=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.audienceMatchers,name:t,plugin:n})},n.registerViewMatcher=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewMatchers,name:t,plugin:n})},n.registerAnalyticsTracker=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.analyticsTrackers,name:t,plugin:n})},n.registerViewTagLocator=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTagLocators,name:t,plugin:n})},n.registerAudiencePlugin=function(t){t.dependencies&&Object.keys(t.dependencies).forEach((function(e){var i=t.dependencies[e];n.registerDependency(e,i)}));var e,r,a="vendor."+t.vendor;e="string"==typeof t.provider?o.get(t.provider)(t.vendor):"function"==typeof t.provider?t.provider(t.vendor):i(t.provider),n.registerVisitorProfileProvider(Object.assign(e,{provides:a})),r="string"==typeof t.matcher?o.get(t.matcher):t.matcher;var u={fieldsNeeded:[a],match:function(t,n){return r(t[a],n)}};n.registerAudienceMatcher(a,u)};var s={};n.registerWidget=function(t){Array.isArray(t)&&(t=o.evaluate(t));var n=t.widgetId,e=s[n];e&&(u.off(e.showToken),u.off(e.hideToken));var i=u.on({filter:{type:"showWidget",name:n},handler:t.showFn}),r=u.on({filter:{type:"hideWidget",name:n},handler:t.hideFn});return s[n]={showToken:i,hideToken:r},s[n]},n.hasWidget=function(t){return Object.prototype.hasOwnProperty.call(s,t)},n.registerChangeApplier=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.changeAppliers,name:t,plugin:n})},n.registerDecider=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.deciders,name:t,plugin:n})},n.registerEventImplementation=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.eventImplementations,name:t,plugin:n})},n.registerViewTrigger=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTriggers,name:t,plugin:n})}},9207:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.mapValues,a=e(2025),u=":",c="holdback",s="treatment",f="",l=e(7852),d=e(5686);function v(t){return t.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}n.formatNamesAndIdsForAnalytics=function(t,n,e,i){var u={layer:t.name||f,experiment:n.name||f,variation:e.name||f};i&&(u=o(u,v));var c,s=!t.integrationStringVersion||1===t.integrationStringVersion;if(u.experiment===f&&s)if(c=n.audienceIds,r(c)||-1===["and","or","not"].indexOf(c[0])){var l=a.get("stores/audience_data");u.experiment=function(t,n){return r(n)?"everyone_else":n.reduce((function(n,e){var i=t.get(e);return i?n+v(i.name?i.name:i.id)+",":n}),"").slice(0,-1)}(l,n.audienceIds)}else u.experiment="Exp";return{names:u,idStrings:{layer:"("+v(t.id)+")",experiment:"("+v(n.id)+")",variation:"("+v(e.id)+")"}}},n.combineAndTruncateIdAndName=function(t,n,e){var i=e-n.length;if(i<0&&(l.warn("maxLength must be at least long enough to fit the entity ID, which is length"+n.length+". Defaulting to only use entity ID as name."),t=f),t===f)return n;if(t.length>i){var r=Math.min(t.length,i);return(t=t.substring(0,r))+n}return t+" "+n},n.generateAnalyticsString=function(t,e,i,r,o,a){return t.integrationStringVersion&&2===t.integrationStringVersion?function(t,e,i,r,o,a){if(d.isSingleExperimentPolicy(t.policy)&&r)return;var s=!d.isSingleExperimentPolicy(t.policy)&&r,f=n.formatNamesAndIdsForAnalytics(t,e,i,a),l=[f.names.experiment,f.names.variation],v=[f.idStrings.experiment,f.idStrings.variation];d.isSingleExperimentPolicy(t.policy)||(l.unshift(f.names.layer),v.unshift(f.idStrings.layer));var h=v.reduce((function(t,n){return t+n.length}),0),p=l.length-1+(s?1:0),g=h+1*p;if(s&&(g+=8),g>o)throw new Error("The analytics string size is too low to send the entity IDs.");for(var m=o-g,b=l.length,_=[],y=l.length-1;y>=0;y--){var w=l[y],E=Math.min(w.length,Math.floor(m/b));m-=E,b--,_.unshift(w.substring(0,E))}var I=_.map((function(t,n){return t+v[n]}));return s&&I.push(c),I.join(u)}(t,e,i,r,o,a):function(t,e,i,r,o,a){var f=r?c:s,l=3,v=n.formatNamesAndIdsForAnalytics(t,e,i,a),h=v.names,p=v.idStrings,g=Object.values(p).reduce((function(t,n){return t+n.length}),0);if(g+l+f.length>o)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var m=o-g-l-f.length,b={};b.variation=Math.min(h.variation.length,Math.floor(m/3)),m-=b.variation,b.experiment=Math.min(h.experiment.length,Math.floor(m/2)),m-=b.experiment,b.layer=m;var _={};Object.keys(h).forEach((function(t){var n=h[t];_[t]=n.substring(0,b[t])}));var y=[];return d.isSingleExperimentPolicy(t.policy)||y.push(_.layer+p.layer),(y=y.concat([_.experiment+p.experiment,_.variation+p.variation,f])).join(u)}(t,e,i,r,o,a)}},6582:function(t){t.exports=function(t,n){t=function(t){var n=t.split("?");if(n[1]){var i=n[1].split("#"),r=i[0],o=i.slice(1).join("#"),a=r.split("&"),u=[];return a.forEach((function(t){0!==t.indexOf(e)&&u.push(t)})),n[1]="",u.length>0&&(n[1]="?"+u.join("&")),o&&(n[1]+="#"+o),n.join("")}return t}(t);var i=n.value;switch(n.match){case"exact":return(t=o(t))===o(i);case"regex":try{return Boolean(t.match(i))}catch(t){}return!1;case"simple":return(t=r(t))===(i=r(i));case"substring":return t=o(t,!0),i=o(i,!0),-1!==t.indexOf(i);default:return!1}};var n=["www."],e="optimizely_",i=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"];function r(t){return o(function(t){var n=t.indexOf("?");return-1!==n&&(t=t.substring(0,n)),-1!==(n=t.indexOf("#"))&&(t=t.substring(0,n)),t}(t))}function o(t,e){t=(t=t.replace("/?","?")).toLowerCase().replace(/[/&?]+$/,"");var r=i.slice(0);e||(r=r.concat(n));for(var o=r.length,a=0;a<o;a++){var u=r[a],c=new RegExp("^"+u);t=t.replace(c,"")}return t}},3822:function(t,n,e){var i=e(8859).getFieldValue,r=e(2973);t.exports=function(t,n){var e=i(t,n.name.split("."));return Array.isArray(e)?e.some((function(t){return r.hasMatch(n.value,n.match,t)})):r.hasMatch(n.value,n.match,e)}},131:function(t,n,e){var i=e(5192),r=e(7219),o="cdn3";n.getIP=function(){return i.makeAsyncRequest(o,u).then((function(t){return t.ip}))},n.getIPDerivedGeolocation=function(){return i.makeAsyncRequest(o,u).then((function(t){return t.location}))};var a="//cdn3.optimizely.com/js/geo4.js";function u(){r.addScriptAsync(a,void 0,"script")}},5628:function(t,n,e){var i=e(136),r=e(3019),o=e(7852),a=e(8275).isEmpty;t.exports={initialize:function(){this.W={actions:{},actionState:{}},this.on(i.DATA_LOADED,this.vt),this.on(i.ACTION_EXECUTED,this.ht),this.on(i.SET_CHANGE_APPLIER,this.bt),this.on(i.REMOVE_ACTION_STATE,this._t)},vt:function(t){var n=this;a(t.data.layers)||(t.data.layers.forEach((function(t){var e;if(t.changes){var i="layerId:"+t.id;e={id:i,layerId:t.id,changeSet:t.changes,type:"layer"},r.deepFreeze(e),n.W.actions[i]=e}(t.experiments||[]).forEach((function(i){if(i.changes){var o="experimentId:"+i.id;e={id:o,layerId:t.id,experimentId:i.id,changeSet:i.changes,type:"experiment"},r.deepFreeze(e),n.W.actions[o]=e}(i.variations||[]).forEach((function(o){(o.actions||[]).forEach((function(a){var u=a.pageId||a.viewId,c=i.id+":"+o.id+":"+u;e={id:c,layerId:t.id,experimentId:i.id,variationId:o.id,pageId:u,changeSet:a.changes,type:"variation"},r.deepFreeze(e),n.W.actions[c]=e}))}))}))})),this.emitChange())},ht:function(t){var n=t.actionId;void 0===n||this.W.actionState[n]||(this.W.actionState[n]={})},bt:function(t){var n=t.actionId,e=t.changeId;this.W.actionState[n]?this.W.actionState[n][e]=t.changeApplier:o.warn("Action Data / Attempted to set changeApplier for inactive action: ",n)},_t:function(t){delete this.W.actionState[t.actionId]},get:function(t){return r.safeReference(this.W.actions[t])},getActionState:function(t){return r.safeReference(this.W.actionState[t])},getByChangeId:function(t){return Object.values(this.W.actions).find((function(n){return n.changeSet&&n.changeSet.some((function(n){return n.id===t}))}))},getAllActionIdsByPageId:function(t){return Object.values(this.W.actions).filter((function(n){return n.pageId===t})).map((function(t){return t.id}))},getChangeApplier:function(t,n){var e=this.W.actionState[n];if(e)return e[t]},getExperimentVariationActions:function(t,n){return r.safeReference(Object.values(this.W.actions).filter((function(e){return e.experimentId===t&&e.variationId===n})))},getLayerActions:function(t){return r.safeReference(Object.values(this.W.actions).filter((function(n){return n.id==="layerId:"+t})))},getExperimentActions:function(t){return r.safeReference(Object.values(this.W.actions).filter((function(n){return n.id==="experimentId:"+t})))},getAll:function(){return r.safeReference(Object.values(this.W.actions))}}},9021:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={},this.on(i.REGISTER_ASYNC_DEFERRED,this.yt),this.on(i.RESOLVE_DEFERRED,this.wt),this.on(i.REJECT_DEFERRED,this.Et)},getRequest:function(t){return this.W[t]},getPromise:function(t){var n=this.getRequest(t);if(n)return n.promise},yt:function(t){this.W[t.source]={promise:t.promise,resolver:t.resolver,rejecter:t.rejecter}},wt:function(t){var n=this.getRequest(t.source);if(!n)throw new Error("No request registered for source: "+t.source);n.resolver(t.resolveWith)},Et:function(t){var n=this.getRequest(t.source);if(!n)throw new Error("No request registered for source: "+t.source);if(!n.rejecter)throw new Error("No rejecter registered for source: "+t.source);n.rejecter(t.rejectWith)}}},2500:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.merge,a=e(136),u=e(3019);function c(t,n){return n||(n={}),t?(t.forEach((function(t){if("string"!=typeof t){if("object"==typeof t&&null!==t&&!Array.isArray(t)){var e=t.type,i=t.name||"_";n[e]||(n[e]={}),n[e][i]=!0}Array.isArray(t)&&c(t,n)}})),n):n}t.exports={initialize:function(){this.W={audiences:{},featuresNeeded:{}},this.on(a.DATA_LOADED,this.vt)},vt:function(t){if(!r(t.data.audiences)){var n=this;t.data.audiences.forEach((function(t){u.deepFreeze(t),o(n.W.featuresNeeded,c(t.conditions)),n.W.audiences[t.id]=t})),this.emitChange()}},getAll:function(){return u.safeReference(Object.values(this.W.audiences))},getFeaturesNeeded:function(t){return u.safeReference(this.W.featuresNeeded[t]||{})},getAudiencesMap:function(){return u.safeReference(this.W.audiences)},get:function(t){return u.safeReference(this.W.audiences[t])},getAudienceName:function(t){return Object.values(this.W.audiences).find((function(n){return n.id===t})).name||"Aud "+t}}},7090:function(t,n,e){var i=e(8275).isEmpty,r=e(136),o=e(3019);t.exports={initialize:function(){this.W={},this.on(r.ADD_CHANGE,this.It),this.on(r.DATA_LOADED,this.vt)},getChange:function(t){return this.W[t]},vt:function(t){if(!i(t.data.changes)){var n=this;t.data.changes.forEach((function(t){n.It(t)}))}},It:function(t){o.deepFreeze(t),this.W[t.id]=t,this.emitChange()}}},2587:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(6592);t.exports={initialize:function(){this.W={};var t=this;Object.keys(o.Lifecycle).forEach((function(n){var e=o.Lifecycle[n];t.W[e]=[]})),this.on(r.ADD_CLEANUP_FN,this.At),this.on(r.CLEAR_CLEANUP_FN,this.Tt)},getCleanupFns:function(t){return i(this.W[t])},At:function(t){this.W[t.lifecycle].push(t.cleanupFn),this.emitChange()},Tt:function(t){var n=this.W[t.lifecycle];if(t.cleanupFn){var e=n.indexOf(t.cleanupFn);e>-1&&(n.splice(e,1),this.emitChange())}else this.W[t.lifecycle]=[],this.emitChange()}}},2814:function(t,n,e){var i=e(136),r=e(7871);t.exports={initialize:function(){this.W={name:r.NAME,version:r.VERSION},this.on(i.SET_CLIENT_NAME,this.Ot),this.on(i.SET_CLIENT_VERSION,this.St)},getClientName:function(){return this.W.name},getClientVersion:function(){return this.W.version},Ot:function(t){t&&(this.W.name=t),this.emitChange()},St:function(t){t&&(this.W.version=t),this.emitChange()}}},6108:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={currentDomain:null,defaultAgeSeconds:15552e3,autoRefresh:true},this.on(i.SET_COOKIE_DOMAIN,this.kt),this.on(i.SET_COOKIE_AGE,this.Rt),this.on(i.SET_COOKIE_AUTO_REFRESH,this.Ct)},getCurrentDomain:function(){return this.W.currentDomain},getDefaultAgeInSeconds:function(){return this.W.defaultAgeSeconds},getAutoRefresh:function(){return this.W.autoRefresh},kt:function(t){this.W.currentDomain=t,this.emitChange()},Rt:function(t){this.W.defaultAgeSeconds=t,this.emitChange()},Ct:function(t){this.W.autoRefresh=t,this.emitChange()}}},1862:function(t,n,e){var i=e(136),r=e(3019),o=e(8275).isEmpty;t.exports={initialize:function(){this.W={},this.on(i.DATA_LOADED,this.vt)},vt:function(t){if(!o(t.data.dimensions)){var n=this;t.data.dimensions.forEach((function(t){r.deepFreeze(t),n.W[t.id]=t})),this.emitChange()}},getAll:function(){return r.safeReference(Object.values(this.W))},getById:function(t){return r.safeReference(this.W[t])},getByApiName:function(t){var n=Object.values(this.W);return r.safeReference(n.find((function(n){return n.apiName===t})))}}},5798:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(136);t.exports={initialize:function(){this.W={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1,requestedEmbeddedEditor:!1},this.on(a.LOAD_DIRECTIVE,this.Nt)},getAll:function(){return r(this.W)},conflictInObservingChanges:function(){return!this.W.mutationObserverAPISupported},isDisabled:function(){return this.W.disabled},isEditor:function(){return this.W.isEditor},clientHasAlreadyInitialized:function(){return this.W.alreadyInitialized},getForceAudienceIds:function(){return this.W.forceAudienceIds},getForceVariationIds:function(){return this.W.forceVariationIds},getPreviewLayerIds:function(){return this.W.previewLayerIds},getProjectToken:function(){return this.W.projectToken},getForceTracking:function(){return this.W.forceTracking},shouldActivate:function(){return!this.W.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.W.isPreview},shouldBootstrapDataForEditor:function(){return this.W.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.W.isPreview||this.W.isLegacyPreview||!this.getProjectToken()||this.W.isEditor)},shouldLoadEmbeddedEditor:function(){return this.W.requestedEmbeddedEditor&&!this.W.isEditor},shouldBailForDesktopApp:function(){return!this.W.isEditor&&this.W.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.W.isSlave&&!this.W.isEditor&&this.W.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return this.W.mutationObserverAPISupported},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.W.shouldOptOut},shouldSendTrackingData:function(){return!this.W.trackingDisabled&&(!!this.W.forceTracking||!this.W.isPreview&&o(this.getForceVariationIds())&&o(this.getForceAudienceIds()))},isSlave:function(){return this.W.isSlave},isRunningInDesktopApp:function(){return this.W.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.W.isRunningInV2Editor},Nt:function(t){Object.assign(this.W,t),this.emitChange()}}},9034:function(t,n,e){var i=e(136),r=e(3019),o=e(8275).isEmpty;t.exports={initialize:function(){this.W={},this.on(i.DATA_LOADED,this.vt)},getAll:function(){return r.safeReference(Object.values(this.W))},getEventsMap:function(){return r.safeReference(this.W)},get:function(t){return r.safeReference(this.W[t])},getByApiName:function(t){var n=Object.values(this.W);return r.safeReference(n.find((function(n){return n.apiName===t})))},getByPageId:function(t){var n=Object.values(this.W);return r.safeReference(n.filter((function(n){return n.pageId===t})))},vt:function(t){if(!o(t.data.events)){var n=this;t.data.events.forEach((function(t){t.pageId||(t.pageId=t.viewId),r.deepFreeze(t),n.W[t.id]=t})),this.emitChange()}}}},4338:function(t,n,e){var i=e(136);function r(t){var n=[];return t&&"object"==typeof t&&null!==t?(t.type&&n.push(t.type),n.push("|"),t.type&&t.name&&n.push(t.name),n.join("")):"|"}t.exports={initialize:function(){this.W={handlers:{}},this.on(i.ADD_EMITTER_HANDLER,this.Dt),this.on(i.REMOVE_EMITTER_HANDLER,this.xt)},getHandlers:function(t,n){var e=[null,{type:t.type},{type:t.type,name:t.name}],i=[],o=this;return e.forEach((function(t){var n=r(t),e=o.W.handlers[n];e&&(i=i.concat(e))})),n&&(i=i.filter((function(t){return!t.publicOnly}))),i},Dt:function(t){var n=r(t.filter);this.W.handlers[n]||(this.W.handlers[n]=[]),this.W.handlers[n].push({handler:t.handler,token:t.token,publicOnly:!!t.publicOnly,emitErrors:!!t.emitErrors}),this.emitChange()},xt:function(t){var n=!1,e=t.token;Object.keys(this.W.handlers).forEach(function(t){var i=this.W.handlers[t],r=i.filter((function(t){return t.token!==e}));r.length!==i.length&&(n=!0,this.W.handlers[t]=r)}.bind(this)),n&&this.emitChange()}}},2940:function(t,n,e){var i=e(136),r=e(3019);t.exports={initialize:function(){this.W={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{},ga4UserId:null,trafficExclusion:null},this.on(i.DATA_LOADED,this.jt),this.on(i.ACTIVATE,this.Mt),this.on(i.RECORD_GLOBAL_DECISION,this.Pt),this.on(i.SET_DOMCONTENTLOADED,this.Lt),this.on(i.SET_GA4_USER_ID,this.Ut)},getRevision:function(){return this.W.revision},getGlobalHoldbackThreshold:function(){return this.W.holdback},getProjectId:function(){return this.W.projectId},getSnippetId:function(){return this.W.snippetId},getAccountId:function(){return this.W.accountId},getNamespace:function(){return this.W.namespace},getActivationId:function(){return this.W.activationId},getActivationTimestamp:function(){return this.W.activationTimestamp},getAnonymizeIP:function(){return this.W.anonymizeIP},getTrafficExclusion:function(){return this.W.trafficExclusion},isGlobalHoldback:function(){return!!this.W.isGlobalHoldback},getListTargetingKeys:function(){return this.W.listTargetingKeys.slice()},getDCPServiceId:function(){return this.W.dcpServiceId},getDCPKeyfieldLocators:function(){return this.W.dcpKeyfieldLocators},getRecommenderServices:function(){return this.W.recommenderServices},getProjectJS:function(){return this.W.projectJS},getPlugins:function(){return this.W.plugins},getExperimental:function(){return r.safeReference(this.W.experimental)},getGA4UserId:function(){return this.W.ga4UserId},domContentLoadedHasFired:function(){return this.W.domContentLoaded},Mt:function(t){this.W.activationId=t.activationId,this.W.activationTimestamp=t.activationTimestamp,this.W.isGlobalHoldback=null},Pt:function(t){var n=t.isGlobalHoldback;if(null!==this.W.isGlobalHoldback&&this.W.isGlobalHoldback!==n)throw new Error("Attempted to change already set global holdback!");this.W.isGlobalHoldback=n,this.emitChange()},Ut:function(t){var n=t.ga4UserId;if(!n)throw new Error('Argument "payload.ga4UserId" is missing');this.W.ga4UserId=n,this.emitChange()},jt:function(t){var n=t.data,e={};if(["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental","ga4UserId","trafficExclusion"].forEach((function(t){t in n&&(e[t]=n[t])})),0!==Object.keys(e).length){Object.assign(this.W,{listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]},e),this.emitChange()}},Lt:function(){this.W.domContentLoaded=!0,this.emitChange()}}},1459:function(t,n,e){var i=e(136),r=e(9454);t.exports={initialize:function(){this.W={originalPushState:null,originalReplaceState:null},this.on(i.ENSURE_ORIGINAL_PUSHSTATE,this.Vt),this.on(i.ENSURE_ORIGINAL_REPLACESTATE,this.Bt)},getOriginalPushState:function(){return this.W.originalPushState},getOriginalReplaceState:function(){return this.W.originalReplaceState},Vt:function(){this.W.originalPushState||(this.W.originalPushState=r.getGlobal("history").pushState.bind(r.getGlobal("history")))},Bt:function(){this.W.originalReplaceState||(this.W.originalReplaceState=r.getGlobal("history").replaceState.bind(r.getGlobal("history")))}}},4453:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(136);t.exports={initialize:function(){this.W={},this.on(a.DATA_LOADED,this.vt),this.on(a.SET_INTEGRATION_SETTINGS,this.Ft)},vt:function(t){if(!o(t.data.integrationSettings)){var n=this;t.data.integrationSettings.forEach((function(t){n.W[t.id]=t})),this.emitChange()}},Ft:function(t){var n=this.W[t.id];n?Object.assign(n,t):this.W[t.id]=t},getAll:function(){return r(Object.values(this.W))},get:function(t){return r(this.W[t])},getReference:function(t){return this.W[t]}}},2734:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(7852),a="*";t.exports={initialize:function(){this.W={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.zt),this.on(r.RECORD_LAYER_DECISION,this.qt),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.Gt)},getLayerState:function(t,n){if(this.W[t]){var e=this.W[t];if(Object.keys(e).length>1&&!n)throw new Error("View Id must be specified when more than one layerState for layer.");return i(n?e[n]:e[a])}},getLayerStates:function(t){var n=this,e=function(e){var o=n.W[e];Object.keys(o).forEach((function(n){var e=o[n];(void 0===t||e.namespace===t)&&r.push(i(e))}))},r=[];for(var o in this.W)e(o);return r},getLayerStatesForAnalytics:function(){var t=this,n=function(n){var i=t.W[n];Object.keys(i).forEach((function(t){var n=i[t];e.push({layerId:n.layerId,decision:n.decision,decisionEventId:n.decisionEventId})}))},e=[];for(var i in this.W)n(i);return e},zt:function(t){t.merge||(this.W={});var n=this;t.layerStates.forEach((function(t){var e=t.layerId;t.pageId||(t.pageId=t.viewId);var i=t.pageId||a,r=n.W[e];if(void 0===r)n.W[e]={},n.W[e][i]=t;else{var o=r[i];(!o||t.decisionTimestamp>(o.decisionTimestamp||0))&&(n.W[e][i]=t)}})),this.emitChange()},qt:function(t){var n={layerId:t.layerId,revision:t.revision,namespace:t.namespace,pageId:t.pageId,decisionTicket:t.decisionTicket,decision:t.decision,decisionActivationId:t.activationId,decisionTimestamp:t.timestamp,decisionEventId:null},e=this.W[t.layerId]||{};t.pageId?(delete e[a],e[t.pageId]=n):(e={})[a]=n,this.W[t.layerId]=e,this.emitChange()},Gt:function(t){var n=t.layerId,e=t.pageId||a;this.W[n]?this.W[n][e]?(this.W[n][e].decisionEventId=t.decisionId,this.emitChange()):o.warn("Not recording decision event: Layer state not found for view",e):o.warn("Not recording decision event: Campaign not registered",n)}}},9057:function(t,n,e){var i=e(136),r=e(3019),o=e(5686),a=e(8275).isEmpty;t.exports={initialize:function(){this.W={layers:{},experiments:{},variations:{}},this.on(i.DATA_LOADED,this.vt)},vt:function(t){if(!a(t.data.layers)){var n=this;(t.data.layers||[]).forEach((function(t){(t.experiments||[]).forEach((function(e){t.pageIds||(t.pageIds=t.viewIds),e.campaignName||o.isSingleExperimentPolicy(t.policy)?o.isSingleExperimentPolicy(t.policy):e.campaignName=t.name,(e.variations||[]).forEach((function(t){(t.actions||[]).forEach((function(t){t.pageId||(t.pageId=t.viewId)})),n.W.variations[t.id]=t})),n.W.experiments[e.id]=e})),r.deepFreeze(t),n.W.layers[t.id]=t})),this.emitChange()}},getAll:function(){return r.safeReference(Object.values(this.W.layers))},getCampaignsMap:function(){return r.safeReference(this.W.layers)},getExperimentsMap:function(){return r.safeReference(this.W.experiments)},getVariationsMap:function(){return r.safeReference(this.W.variations)},getCount:function(){return Object.keys(this.W.layers).length},getAllByPageIds:function(t){var n=this.W.layers;return r.safeReference(Object.keys(n).reduce((function(e,i){var r=n[i];return t.some((function(t){return(r.pageIds||[]).includes(t)}))&&e.push(r),e}),[]))},get:function(t){return r.safeReference(this.W.layers[t])},getLayerByExperimentId:function(t){var n,e=this.W.layers;return Object.keys(e).some((function(i){var r=e[i];return!!(r.experiments||[]).find((function(n){return n.id===t}))&&(n=r,!0)})),r.safeReference(n)},getExperimentByVariationId:function(t){var n,e=this.W.layers;return Object.keys(e).some((function(i){return(e[i].experiments||[]).some((function(e){return(e.variations||[]).find((function(n){return n.id===t}))&&(n=e),!!n}))})),r.safeReference(n)}}},9809:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={logs:[]},this.on(i.LOG,this.Ht)},getLogs:function(){return this.W.logs},Ht:function(t){this.W.logs.push(t),this.emitChange()},Z:function(){return this.W.logs.slice()}}},8338:function(t,n,e){var i=e(136),r=e(3019);t.exports={initialize:function(){this.W={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.Yt),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.Kt)},get:function(){return r.safeReference(this.W.data)},hasTracked:function(){return this.W.hasTracked},Yt:function(t){r.deepFreeze(t),this.W.data=t,this.W.hasTracked=!1,this.emitChange()},Kt:function(){this.W.hasTracked=!0}}},9738:function(t,n,e){var i=e(136),r=e(192);t.exports={initialize:function(){this.W={},this.on(i.SET_PENDING_EVENT,this.$t),this.on(i.REMOVE_PENDING_EVENT,this.Wt),this.on(i.LOAD_PENDING_EVENTS,this.Xt)},getEvents:function(){return this.W},getEventsString:function(){return r.stringify(this.W)},$t:function(t){Object.keys(this.W).length>=1e3&&this.Jt();var n=t.id,e=t.retryCount;this.W[n]&&this.W[n].retryCount===e||(this.W[n]={id:n,timeStamp:t.timeStamp,data:t.data,retryCount:e},this.emitChange())},Wt:function(t){delete this.W[t.id],this.emitChange()},Xt:function(t){this.W=t.events,this.Jt(),this.emitChange()},Jt:function(){for(var t=Object.values(this.W).sort((function(t,n){return t.timeStamp-n.timeStamp})),n=0;n<=t.length-1e3;n++)delete this.W[t[n].id];this.emitChange()}}},6067:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={layerId:null},this.on(i.ANNOUNCE_PENDING_REDIRECT,this.Yt)},isExpectingRedirect:function(){return"string"==typeof this.W.layerId},getLayerId:function(){return this.W.layerId},Yt:function(t){this.isExpectingRedirect()||(this.W.layerId=t.layerId,this.emitChange())}}},5501:function(t,n,e){var i=e(8275).mapValues,r=e(136),o=e(6592);t.exports={initialize:function(){this.W={},this.W[o.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Qt)},Qt:function(t){void 0===this.W[o.PerformanceData.performance_marks][t.name]&&(this.W[o.PerformanceData.performance_marks][t.name]=[]),this.W[o.PerformanceData.performance_marks][t.name].push(t.data),this.emitChange()},getMarks:function(){return i(this.W[o.PerformanceData.performance_marks],(function(t){return t.map((function(t){return[t.startTime,t.duration]}))}))},getDurationsFor:function(t){var n=this;return t.reduce((function(t,e){var i=n.W[o.PerformanceData.performance_marks][e];return i&&(t[e]=Math.round(i.reduce((function(t,n){return t+n.duration}),0))),t}),{})}}},4715:function(t,n,e){var i=e(8275).mapValues,r=e(136),o=e(6592),a=e(7852);t.exports={initialize:function(){this.W=i(o.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Zt)},Zt:function(t){var n=t.type,e=t.name,i=t.plugin;if(!n||!e)throw new Error("Missing information needed to register plugins: "+n+":"+e);if(!this.W[n])throw new Error("Invalid plugin type specified: "+n);this.W[n][e]=i,a.debug("Plugin Store: Registering Plugin :",t)},getAllPlugins:function(t){if(!t)return this.W;if(this.W[t])return this.W[t];throw new Error("Invalid plugin type: "+t)},getPlugin:function(t,n){if(!n||!t)throw new Error("Missing plugin parameters");return this.getAllPlugins(t)[n]||null}}},8515:function(t,n,e){var i=e(136),r=e(8859);t.exports={initialize:function(){this.W={},this.on(i.SET_VISITOR_ATTRIBUTE_PENDING,this.tn)},getPendingAttributeValue:function(t){return t=Array.isArray(t)?t.concat("pending"):[t,"pending"],r.getFieldValue(this.W,t)},tn:function(t){r.setFieldValue(this.W,t.key,{pending:t.pending}),this.emitChange()}}},4999:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=i.merge,u=e(136);t.exports={initialize:function(){this.W={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(u.SET_RUM_DATA,this.nn),this.on(u.RECORD_API_USAGE,this.en),this.on(u.INITIALIZE_CHANGE_METRICS,this.rn),this.on(u.RECORD_ACTIVATION_TYPE_USAGE,this.an),this.on(u.RECORD_AUDIENCE_USAGE,this.un),this.on(u.RECORD_CHANGE_MACROTASK_RATE,this.cn),this.on(u.RECORD_CHANGE_OVERHEATED,this.sn),this.on(u.RECORD_CHANGE_TYPE_USAGE,this.fn),this.on(u.RECORD_DOM_OBSERVATION_OCCURENCE,this.ln),this.on(u.RECORD_INTEGRATION_USAGE,this.dn),this.on(u.RECORD_LAYER_FEATURE_USAGE,this.vn),this.on(u.RECORD_LAYER_POLICY_USAGE,this.hn),this.on(u.RECORD_VIEW_FEATURE_USAGE,this.pn),this.on(u.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,this.gn),this.on(u.RECORD_VISITOR_ID_LOCATOR_USAGE,this.mn),this.on(u.RECORD_VISITOR_ID_ERROR,this.bn),this.on(u.RECORD_STICKY_BUCKETING_FEATURE,this._n)},nn:function(t){a(this.W,t),this.emitChange()},en:function(t){this.W.apis[t.methodName]||(this.W.apis[t.methodName]=0),this.W.apis[t.methodName]++,this.emitChange()},rn:function(){void 0===this.W.data.extras.changeMacrotaskRate&&(this.W.data.extras.changeMacrotaskRate=0),void 0===this.W.data.extras.numOverheatedChanges&&(this.W.data.extras.numOverheatedChanges=0)},cn:function(t){void 0===this.W.data.extras.changeMacrotaskRate&&(this.W.data.extras.changeMacrotaskRate=0),t.changeMacrotaskRate>this.W.data.extras.changeMacrotaskRate&&(this.W.data.extras.changeMacrotaskRate=t.changeMacrotaskRate),this.emitChange()},sn:function(){void 0===this.W.data.extras.numOverheatedChanges&&(this.W.data.extras.numOverheatedChanges=0),this.W.data.extras.numOverheatedChanges++,this.emitChange()},ln:function(t){this.W.DOMObservation[t.counterName]||(this.W.DOMObservation[t.counterName]=0),this.W.DOMObservation[t.counterName]++,this.emitChange()},yn:function(t,n,e){void 0===this.W.featuresNeeded[t]&&(this.W.featuresNeeded[t]={});var i=this.W.featuresNeeded[t];n.forEach((function(t){i[t]||(i[t]={}),i[t][e]||(i[t][e]=!0)}))},dn:function(t){this.yn("integrations",t.integrations,t.layerId)},fn:function(t){this.yn("changeTypes",t.changeTypes,t.layerId)},an:function(t){this.yn("activationTypes",[t.activationType],t.entityId),this.emitChange()},pn:function(t){this.yn("viewFeatures",t.featuresUsed,t.entityId),this.emitChange()},vn:function(t){this.yn("layerFeatures",[t.feature],t.entityId),this.emitChange()},hn:function(t){this.yn("policy",[t.policy],t.layerId),this.emitChange()},un:function(t){this.yn("audiences",t.audienceTypes,t.layerId),this.emitChange()},gn:function(t){this.W.data.extras.viewsInitiallyActivatedCount=t.viewsInitiallyActivatedCount,this.emitChange()},mn:function(t){this.yn("visitorIdLocatorType",[t.visitorIdLocatorType],t.entityId),this.emitChange()},bn:function(t){this.W.data.extras.errorCustomVisitorId=t.isError,this.emitChange()},_n:function(t){this.yn("stickyBucketing",[t.feature],t.id)},getSampleRum:function(){return this.W.inRumSample},getRumId:function(){return this.W.id},getRumHost:function(){return this.W.RumHost},getApiData:function(){return this.W.apis},getDOMObservationData:function(){return this.W.DOMObservation},getRumData:function(){return r(this.W.data)},getScriptSrc:function(){return this.W.src},getFeaturesNeededData:function(){var t=this.W.featuresNeeded,n={};return Object.keys(t).forEach((function(e){var i=t[e],r=Object.keys(i);o(r)||(n[e]={}),r.forEach((function(t){n[e][t]=Object.keys(i[t]).length}))})),n}}},9292:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.wn)},wn:function(t){if(!t.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.W.natives=t.sandboxedFunctions,this.W.initialized=!0,this.emitChange()},getAll:function(){return this.W.natives},get:function(t){if(!t)throw new Error("Missing name parameter");return this.W.natives[t]||null},isInitialized:function(){return this.W.initialized}}},3799:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(8298),a=e(9899);t.exports={initialize:function(){this.W={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.En),this.on(r.LOAD_SESSION_STATE,this.In)},getState:function(){return i(this.W)},getSessionId:function(){return this.W.sessionId},In:function(t){this.W.sessionId=t.sessionId,this.W.lastSessionTimestamp=t.lastSessionTimestamp,this.emitChange()},En:function(){var t=o.now(),n=this.W.lastSessionTimestamp;(!this.W.sessionId||t-n>18e5)&&(this.W.sessionId=a.generate()),this.W.lastSessionTimestamp=t,this.emitChange()}}},8950:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(136);t.exports={initialize:function(){this.An(),this.on(a.FINALIZE_BATCH_SNAPSHOT,this.Tn),this.on(a.REGISTER_PREVIOUS_BATCH,this.On),this.on(a.REGISTER_TRACKER_VISITOR,this.Sn),this.on(a.REGISTER_TRACKER_EVENT,this.kn),this.on(a.REGISTER_TRACKER_DECISION,this.Rn),this.on(a.RESET_TRACKER_EVENTS,this.Cn),this.on(a.RESET_TRACKER_STORE,this.An),this.on(a.RESET_TRACKER_PREVIOUS_BATCHES,this.Nn),this.on(a.SET_TRACKER_POLLING,this.Dn),this.on(a.SET_TRACKER_BATCHING,this.xn),this.on(a.SET_TRACKER_USE_BEACON,this.jn),this.on(a.SET_TRACKER_SEND_EVENTS,this.Mn),this.on(a.SET_TRACKER_PERSISTABLE_STATE,this.Pn),this.on(a.SET_TRACKER_DIRTY,this.Ln),this.on(a.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.Un)},getPersistableState:function(){return this.W.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.W.data,decisions:this.W.decisions,decisionEvents:this.W.decisionEvents,previousBatches:this.W.previousBatches}:{}:null},Pn:function(t){o(this.W.data)||o(t.data)||(this.Tn(),this.W.previousBatches.push(this.getEventBatch())),this.W.data=t.data||{},this.W.decisions=t.decisions||[],this.W.decisionEvents=t.decisionEvents||[],o(this.W.previousBatches)||o(t.previousBatches)?this.W.previousBatches=t.previousBatches||[]:this.W.previousBatches=this.W.previousBatches.concat(t.previousBatches),this.emitChange()},Ln:function(t){this.W.isDirty=t,this.emitChange()},kn:function(t){var n=this.Vn();(o(n.snapshots)||!o(this.W.decisionEvents))&&this.Bn(),this.Fn().events.push(t.event),this.W.decisions=t.decisions,this.Ln(!0)},Rn:function(t){this.W.decisionEvents.push(t.decisionEvent),this.W.decisions=t.decisions,this.Ln(!0)},Sn:function(t){o(this.W.data)?this.W.data=t.data:this.Tn(),this.W.data.visitors.push(t.visitor),this.W.decisions=t.decisions,this.W.decisionEvents=[],this.Ln(!0)},On:function(t){this.W.previousBatches.push(t),this.Ln(!0)},An:function(){this.W={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Cn:function(){var t=this.Vn();this.W.data.visitors=[t],t.snapshots=[],this.Ln(!0)},Nn:function(){this.W.previousBatches=[],this.Ln(!0)},Dn:function(t){this.W.polling=t,this.emitChange()},xn:function(t){this.W.shouldBatch=t,this.emitChange()},jn:function(t){this.W.shouldUseBeacon=t,this.emitChange()},Mn:function(t){this.W.canSend=t,this.emitChange()},getEventBatch:function(){return r(this.W.data)},getPreviousBatches:function(){return r(this.W.previousBatches)},zn:function(){return this.W.decisionEvents.slice()},qn:function(){this.W.decisionEvents=[]},Gn:function(){return this.W.decisions.slice()},isPolling:function(){return this.W.polling},shouldBatch:function(){return this.W.shouldBatch},shouldUseBeacon:function(){return this.W.shouldUseBeacon},Fn:function(){var t=this.Vn(),n=t&&t.snapshots;return n&&n[n.length-1]},Vn:function(){var t=this.W.data.visitors;return t&&t[t.length-1]},Bn:function(){var t=this.zn();this.Vn().snapshots.push({decisions:this.Gn(),events:t}),this.qn(),this.Ln(!0)},Tn:function(){this.W.decisionEvents.length>0&&this.Bn()},hasEventsToSend:function(){if(!o(this.W.decisionEvents))return!0;if(!o(this.W.data)&&(this.W.data.visitors||[]).some((function(t){return t.snapshots.length>0})))return!0;return!1},hasPreviousBatchesToSend:function(){return!o(this.W.previousBatches)},canSend:function(){return this.W.canSend},Un:function(t){var n=this.Vn();n&&(n.attributes=t.attributes)}}},4184:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(136);t.exports={initialize:function(){this.W={},this.on(a.SET_UA_DATA,this.vt)},vt:function(t){o(this.W)&&(this.W=t.data)},get:function(){return r(this.W)}}},90:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(7852),a={globalTags:{},viewStates:{},shouldBatch:!1};t.exports={initialize:function(){this.W=i(a),this.on(r.REGISTER_VIEWS,this.Hn),this.on(r.SET_VIEW_ACTIVE_STATE,this.Yn),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.Kn),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.$n),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.Wn),this.on(r.SET_GLOBAL_TAGS,this.Xn),this.on(r.RESET_VIEW_STATES,this.Jn),this.on(r.SET_VIEW_BATCHING,this.xn)},getAll:function(){var t={};for(var n in this.W.viewStates)t[n]=this.getViewState(n);return t},getActiveViewIds:function(){var t=this,n=this.W.viewStates;return Object.keys(n).reduce((function(n,e){return t.isViewActive(e)&&n.push(e),n}),[])},shouldBatch:function(){return this.W.shouldBatch},getViewState:function(t){var n=i(this.W.viewStates[t]),e=this.W.globalTags;return n.metadata=Object.assign({},n.parsedMetadata,e,n.userSuppliedMetadata),n},getActiveViewTags:function(){var t=this.getActiveViewStates().map((function(t){return t.metadata})),n=[{}].concat(t);return Object.assign.apply(Object,n)},getActivationEventId:function(t){return this.W.viewStates[t]?this.W.viewStates[t].activationEventId:null},getActiveViewStates:function(){var t=this,n=this.W.viewStates;return Object.keys(n).reduce((function(n,e){return t.isViewActive(e)&&n.push(t.getViewState(e)),n}),[])},isViewActive:function(t){var n=this.W.viewStates[t];return n||o.warn("No Page registered with id",t),!!n.isActive},getGlobalTags:function(){return i(this.W.globalTags)},Jn:function(){this.W.viewStates={},this.emitChange()},Hn:function(t){var n=t.forceClean||!1,e=this;t.views.forEach((function(t){var i=t.id;e.W.viewStates[i]={id:i,isActive:"boolean"!=typeof t.isActive||n?null:t.isActive,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}})),this.emitChange()},Yn:function(t){var n=t.view.id;if(!this.W.viewStates[n])throw new Error("No view exists with id "+n);this.W.viewStates[n].isActive=t.isActive,t.isActive?this.W.viewStates[n].activatedTimestamp=t.timestamp:(this.W.viewStates[n].parsedMetadata={},this.W.viewStates[n].userSuppliedMetadata={}),this.emitChange()},Kn:function(t){var n=t.pageId;if(!this.W.viewStates[n])throw new Error("No view exists with id "+n);Object.assign(this.W.viewStates[n].parsedMetadata,t.metadata),this.emitChange()},$n:function(t){var n=t.pageId;if(!this.W.viewStates[n])throw new Error("No view exists with id "+n);Object.assign(this.W.viewStates[n].userSuppliedMetadata,t.metadata),this.emitChange()},Wn:function(t){var n=t.pageId;this.W.viewStates[n]&&(this.W.viewStates[n].activationEventId=t.eventData.eventId,this.emitChange())},Xn:function(t){Object.assign(this.W.globalTags,t),this.emitChange()},xn:function(t){this.W.shouldBatch=t,this.emitChange()}}},749:function(t,n,e){var i=e(136),r=e(3019),o=e(8275).isEmpty;t.exports={initialize:function(){this.W={views:{},apiNamesToViews:{}},this.on(i.DATA_LOADED,this.vt)},getAll:function(){return r.safeReference(Object.values(this.W.views))},getPagesMap:function(){return r.safeReference(this.W.views)},get:function(t){return r.safeReference(this.W.views[t])},getByApiName:function(t){return r.safeReference(this.W.apiNamesToViews[t])},apiNameToId:function(t){var n=this.W.apiNamesToViews[t];if(n)return n.id},idToApiName:function(t){var n=this.W.views[t];if(n)return n.apiName},getNumberOfPages:function(){return Object.keys(this.W.views).length},getAllViewsForActivationType:function(t){var n=this.W.views;return Object.keys(n).map((function(t){return n[t]})).filter((function(n){return n.activationType===t}))},vt:function(t){if(!o(t.data.views)){var n=this;t.data.views.forEach((function(t){r.deepFreeze(t),n.W.views[t.id]=t,n.W.apiNamesToViews[t.apiName]=t})),this.emitChange()}}}},2857:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(8859);t.exports={initialize:function(){this.W={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.Qn),this.on(r.SET_VISITOR_ATTRIBUTES,this.Zn),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.te)},getVisitorProfile:function(){return this.W.profile},getVisitorProfileMetadata:function(){return this.W.metadata},getAttribute:function(t){var n=this.W.profile;return i(o.getFieldValue(n,t))},getAttributeMetadata:function(t){return i(this.W.metadata[t])},getVisitorIdFromAPI:function(){return this.W.visitorId},te:function(t){this.W.profile=t.profile,this.W.metadata=t.metadata,this.emitChange()},Zn:function(t){var n=this;t.attributes.forEach((function(t){var e=t.key;o.setFieldValue(n.W.profile,e,t.value),t.metadata&&Object.keys(t.metadata).forEach((function(i){var r=t.metadata[i];o.setFieldValue(n.W.metadata,e.concat(i),r)}))})),this.emitChange()},Qn:function(t){this.W.visitorId=t,this.emitChange()}}},6658:function(t,n,e){var i=e(136),r=e(8275).isEmpty;t.exports={initialize:function(){this.W={},this.on(i.DATA_LOADED,this.ne)},getCustomBehavioralAttributes:function(){var t=this.W;return Object.keys(t).reduce((function(n,e){var i=t[e];return i.rule_json&&n.push(i),n}),[])},getVisitorAttribute:function(t){var n=Object.values(this.W);if(t.datasourceId&&(n=n.filter((function(n){return n.dcp_datasource_id===String(t.datasourceId)}))),t.attributeName&&t.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(t.attributeId){var e=this.W[t.attributeId];if(!e)throw new Error("Unrecognized attribute ID: "+t.attributeId);return e}if(t.attributeName){var i=n.filter((function(n){return n.name===t.attributeName}));if(!i.length)throw new Error("Unrecognized attribute name: "+t.attributeName);if(i.length>1)throw new Error("Too many attributes with name: "+t.attributeName);return i[0]}throw new Error("Must specify attribute name or attribute ID")},ne:function(t){if(!r(t.data.visitorAttributes)){var n=this;t.data.visitorAttributes.forEach((function(t){n.W[t.id]=t})),this.emitChange()}}}},7016:function(t,n,e){Object.defineProperty(n,"u",{value:!0});var i=e(8275),r=i.cloneDeep,o=i.isEqual,a=e(136),u=e(192);t.exports={initialize:function(){this.W={variationIdMap:{},preferredLayerMap:{},contextualMabMap:{},odpSegments:{}},this.on(a.UPDATE_VARIATION_ID_MAP,this.ee),this.on(a.MERGE_VARIATION_ID_MAP,this.re),this.on(a.UPDATE_PREFERRED_LAYER_MAP,this.oe),this.on(a.MERGE_PREFERRED_LAYER_MAP,this.ae),this.on(a.UPDATE_CONTEXTUAL_MAB_MAP,this.ue),this.on(a.MERGE_CONTEXTUAL_MAB_MAP,this.ce),this.on(a.SET_ODP_SEGMENTS,this.se)},se:function(t){this.W.odpSegments=t,this.emitChange()},getOdpSegments:function(){return this.W.odpSegments},getContextualMabMap:function(){return r(this.W.contextualMabMap)},getContextualMabMapString:function(){return u.stringify(this.W.contextualMabMap)},ue:function(t){var n=this.W.contextualMabMap[t.layerId]||{};o(n[t.experimentId],t.variationData)||(n[t.experimentId]=t.variationData,this.W.contextualMabMap[t.layerId]=n,this.emitChange())},ce:function(t){var n=this.W.contextualMabMap;Object.keys(t.contextualMabMap).forEach((function(e){var i=t.contextualMabMap[e];n[e]||(n[e]={}),Object.keys(i).forEach((function(t){var r=i[t];n[e][t]||(n[e][t]=r)}))})),this.W.contextualMabMap=n,this.emitChange()},getVariationIdMap:function(){return r(this.W.variationIdMap)},getVariationIdMapString:function(){return u.stringify(this.W.variationIdMap)},ee:function(t){var n=this.W.variationIdMap[t.layerId]||{};n[t.experimentId]!==t.variationId&&(n[t.experimentId]=t.variationId,this.W.variationIdMap[t.layerId]=n,this.emitChange())},re:function(t){var n=this.getVariationIdMap(),e=t.variationIdMap;Object.keys(n||{}).forEach((function(t){var i=(n||{})[t];e[t]?Object.assign(e[t],i):e[t]=i})),this.W.variationIdMap=e,this.emitChange()},getPreferredLayerMap:function(){return r(this.W.preferredLayerMap)},getPreferredLayerMapString:function(){return u.stringify(this.W.preferredLayerMap)},getPreferredLayerId:function(t){return this.W.preferredLayerMap[t]},oe:function(t){this.W.preferredLayerMap[t.groupId]!==t.layerId&&(this.W.preferredLayerMap[t.groupId]=t.layerId,this.emitChange())},ae:function(t){var n=this.getPreferredLayerMap(),e=t.preferredLayerMap;Object.assign(e,n),this.W.preferredLayerMap=e,this.emitChange()}}},2725:function(t,n,e){var i=e(136);e(8487).J;t.exports={initialize:function(){this.W={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.vt),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.fe),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.le)},getEvents:function(){return this.W.events},getForeignEvents:function(){return this.W.foreignEvents},getForeignEventQueues:function(){return this.W.foreignEventQueues},vt:function(t){this.W.events=t,this.emitChange()},fe:function(t){this.W.foreignEvents[t.key]=t.value},le:function(t){this.W.foreignEventQueues[t.key]=t.value}}},977:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.W={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.de)},getBaseMap:function(){return this.W.baseMap},getEventQueue:function(){return this.W.eventQueue},getLastEvent:function(){return this.W.lastEvent},getCleared:function(){return this.W.cleared},getInitialized:function(){return this.W.initialized},de:function(t){this.W[t.key]=t.value}}},241:function(t,n,e){var i=e(8275).isEmpty,r=e(136);t.exports={initialize:function(){this.W={randomId:null,visitorIdLocator:null},this.on(r.SET_VISITOR_ID,this.vt),this.on(r.DATA_LOADED,this.ve)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.W.randomId},getVisitorIdLocator:function(){return this.W.visitorIdLocator},vt:function(t){Object.assign(this.W,t),this.emitChange()},ve:function(t){i(t.data.visitorIdLocator)||(this.W.visitorIdLocator=t.data.visitorIdLocator,this.emitChange())}}},227:function(t,n,e){var i=e(8275).cloneDeep,r=e(7852),o=e(136);t.exports={initialize:function(){this.W={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(o.XDOMAIN_SET_DEFAULT_FRAME,this.he),this.on(o.XDOMAIN_ADD_FRAME,this.pe),this.on(o.XDOMAIN_SET_MESSAGE,this.ge),this.on(o.XDOMAIN_ADD_SUBSCRIBER,this.me),this.on(o.XDOMAIN_SET_CANONICAL_ORIGINS,this.be),this.on(o.XDOMAIN_SET_DISABLED,this._e)},getMessages:function(){return i(this.W.messages)},getOffset:function(){return 0===this.W.messages.length?0:this.W.messages[0].data.id},getNextMessageId:function(){return this.W.messages.length+this.getOffset()},getMessageById:function(t){return this.W.messages[t-this.getOffset()]},getSubscribers:function(){return this.W.subscribers},getFrames:function(){return this.W.frames},getNextFrameId:function(){return this.W.frames.length},getDefaultFrame:function(){return this.W.defaultFrame},getCanonicalOrigins:function(){return i(this.W.canonicalOrigins)},isDisabled:function(){return this.W.disabled},he:function(t){this.W.defaultFrame=t},pe:function(t){this.W.frames.push(t)},ge:function(t){for(this.W.messages[t.messageId-this.getOffset()]=t.message;this.W.messages.length>1e3;){var n=this.W.messages.shift();r.debug("XDomainStorage: Cleared old message: "+n.data.id)}},me:function(t){this.W.subscribers.push(t.subscriber)},be:function(t){this.W.canonicalOrigins=t.canonicalOrigins},_e:function(t){this.W.disabled=t.disabled}}},9262:function(t,n){n.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},n.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},n.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}},9326:function(t,n,e){var i=e(8130).v;n.Error=i("TagError")},8612:function(t,n,e){var i=e(6592).PluginTypes,r=e(2025).get("stores/plugins");n.getTagValue=function(t){var e=r.getPlugin(i.viewTagLocators,t.locatorType);if(!e)throw new n.Error("No locator registered for tag locatorType: "+t.locatorType);return e(t)},n.enums=e(9262),n.Error=e(9326).Error},5192:function(t,n,e){var i=e(136),r=e(409),o=e(6761).Promise,a=e(2025).get("stores/async_request");n.makeAsyncRequest=function(t,n){var e,u,c=a.getPromise(t);if(c)return c;var s=new o((function(t,n){e=t,u=n}));return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:t,promise:s,resolver:e,rejecter:u}),n&&n(),s},n.resolveRequest=function(t,n){r.dispatch(i.RESOLVE_DEFERRED,{source:t,resolveWith:n})},n.rejectRequest=function(t,n){r.dispatch(i.REJECT_DEFERRED,{source:t,rejectWith:n})}},6022:function(t,n,e){var i=e(4618),r=e(9454);n.getLanguage=function(){return r.getNavigatorLanguage()},n.getQueryParams=i.getQueryParams,n.getQueryParamValue=i.getQueryParamValue,n.getUrl=function(){return r.getHref()}},6278:function(t,n,e){var i=e(8130).v,r=e(8298),o=e(1019),a=e(9454),u=e(136),c=e(2025),s=e(409),f=c.get("stores/cookie_options"),l=n.SetError=i("CookieSetError"),d=n.MismatchError=i("CookieMismatchError"),v=["co","com","net","org","edu","gov","mil","int","ac","com","net","org"];n.getAll=function(t){var e,i,r,a,u;void 0===t&&(t=!0),e=o.getCookieString().split(/\s*;\s*/);var c={};for(r=0;r<e.length;r++)if((a=(i=e[r]).indexOf("="))>0&&void 0===c[u=n.safeDecodeURIComponent(i.substring(0,a))]){var s=i.substring(a+1);t&&(s=n.safeDecodeURIComponent(s)),c[u]=s}return c},n.safeDecodeURIComponent=function(t){try{return decodeURIComponent(t)}catch(n){return t}},n.get=function(t,e){return n.getAll(e)[t]},n.set=function(t,e,i,c){!1!==c&&(c=!0);var g=[];if(void 0===(i=Object.assign({encodeValue:!0},i)).domain){var m=f.getCurrentDomain();m||(m=function(t,e){!1!==e&&(e=!0);for(var i,r,o=t.hostname.split("."),a=[],c=null,f=o.length-1;f>=0;f--)if(a.unshift(o[f]),i=a.join("."),!(o.length>1&&(1===a.length||2===a.length&&v.includes(a[0]))||h.includes(i))){r={domain:e?"."+i:i};try{n.set(p,Math.random().toString(),r),n.remove(p,r),c=r.domain;break}catch(t){}}return s.dispatch(u.SET_COOKIE_DOMAIN,c),c}(a.getLocation(),!0)),i.domain=m}if(i.domain&&g.push("domain="+i.domain),void 0===i.path&&(i.path="/"),i.path&&g.push("path="+i.path),void 0===i.expires){var b=void 0===i.maxAge?f.getDefaultAgeInSeconds():i.maxAge;i.expires=new Date(r.now()+1e3*b)}if(void 0!==i.expires&&g.push("expires="+i.expires.toUTCString()),i.secure&&g.push("secure"),o.setCookie(t+"="+(i.encodeValue?encodeURIComponent(e):e)+";"+g.join(";")),c){var _=i.encodeValue,y=n.get(t,_);if(y!==e){if(!y)throw new l('Failed to set cookie "'+t+'"');throw new d('Expected "'+e+'" for "'+t+'", got "'+y+'"')}}},n.remove=function(t,e){for(var i=a.getLocation().hostname.split("."),r=1===i.length?0:1;i.length>r&&(2!==i.length||!v.includes(i[0]));)n.set(t,null,Object.assign({},e,{domain:"."+i.join("."),expires:new Date(0)}),!1),i.shift()};var h=["optimizely.test"],p="optimizelyDomainTestCookie"},8130:function(t,n,e){var i=e(3958),r=i("InternalError");n.C=r,n.v=function(t){return i(t,r)}},8339:function(t,n,e){var i=e(6761).Promise;t.exports=function(){var t,n,e=new i((function(e,i){t=e,n=i}));return e.resolve=function(){return t.apply(null,Array.from(arguments)),e},e.reject=function(){return n.apply(null,Array.from(arguments)),e},e}},587:function(t,n,e){Object.defineProperty(n,"u",{value:!0}),n.getEditorConfig=d,n.getEditorScriptUrl=v,n.persistEditorParams=p,n.loadEmbeddedEditor=function(t){"function"!=typeof(null==window.optimizely?void 0:window.optimizely.push)&&(u.warn("EditorLoader / window.optimizely does not have a push method; it may have been overridden by page code. Resetting to ensure embedded editor compatibility."),window.optimizely=[]);p(),i.registerFunction("getAccountId",(function(){return o.get("stores/global").getAccountId()})),a.setOptOut(!1);var n=d(t),e=v(n);n.pullRequestId&&!isNaN(Number(n.pullRequestId))&&u.debug("Main / Loading editor pull request ID: "+n.pullRequestId),c.addScriptAsync(e)};var i=e(9445),r=e(6278),o=e(2025),a=e(4214),u=e(7852),c=e(7219),s=e(9454),f=["optimizely_project_id","optimizely_experiment_id","optimizely_section_id","optimizely_variation_id","optimizely_embed_editor","optimizely_use_shadow_dom","optimizely_page_id","optimizely_device_mode","optimizely_events_mode"],l=["optimizely_oauth_token","optimizely_token_expires_in"];function d(t){var n,e={true:"http://localhost:9888/main.js",http:"http://localhost:9888/main.js",https:"https://localhost:9888/main.js"},i=null==(n=r.get("useLocalBundle"))?void 0:n.toLowerCase(),o=r.get("optimizelyVePr");return{useLocalBundle:!!e[i],pullRequestId:o,mfeEntrypoint:e[i]?e[i]:t}}function v(t){var n=t.pullRequestId;return n&&!isNaN(Number(n))?"https://develrc-app.optimizely.com/dist/visual-editor/pull-request/"+n+"/main.js":t.mfeEntrypoint}function h(t){var n={};if(!t)return n;for(var e=t.split("&"),i=0;i<e.length;i++){var r=e[i].indexOf("=");if(-1!==r){var o=e[i].substring(0,r),a=e[i].substring(r+1);try{n[o]=decodeURIComponent(a)}catch(t){n[o]=a}}}return n}function p(){var t=s.getGlobal("sessionStorage");if(t){var n=s.getHref()||"",e=n.indexOf("?"),i=n.indexOf("#"),r=-1!==e?n.substring(e+1,-1!==i?i:void 0):"",o=-1!==i?n.substring(i+1):"";o=o.replace(/^#?\/*/,"");var a=h(r),c=h(o);f.forEach((function(n){a[n]&&t.setItem(n,a[n])})),l.forEach((function(n){c[n]&&t.setItem(n,c[n])})),u.log("EditorLoader / Persisted visual editor params to sessionStorage")}}},3019:function(t,n,e){var i=e(8275).cloneDeep;n.deepFreeze=function(t){},n.safeReference=function(t){return i(t)}},8275:function(t,n){function e(t,n){return null!=n&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](t):t instanceof n}Object.defineProperty(n,"u",{value:!0}),n.cloneDeep=function t(n,r,o){if(void 0===r&&(r=0),null==n)return n;if("object"!==(void 0===n?"undefined":i(n)))return n;if(r>100)throw new Error("cloneDeep: Maximum recursion depth exceeded");if(o||(o=new Map),o.has(n))return o.get(n);var a=Date,u=RegExp,c=Array;if(e(n,a)){return new a(n.getTime())}if(e(n,u)){var s=n,f="";return s.global&&(f+="g"),s.ignoreCase&&(f+="i"),s.multiline&&(f+="m"),s.unicode&&(f+="u"),s.sticky&&(f+="y"),new u(s.source,f)}if(c.isArray(n)){var l=n,d=[];o.set(n,d);for(var v=l.length,h=0;h<v;h++)d[h]=t(l[h],r+1,o);return d}var p=Object.getPrototypeOf(n),g=p&&p!==Object.prototype?Object.create(p):{};for(var m in o.set(n,g),n)Object.prototype.hasOwnProperty.call(n,m)&&(g[m]=t(n[m],r+1,o));return g},n.isEmpty=function(t){return null==t||("string"==typeof t||Array.isArray(t)?0===t.length:"object"==typeof t&&0===Object.keys(t).length)},n.isEqual=function t(n,r){if(n===r)return!0;if(null==n||null==r)return n===r;if((void 0===n?"undefined":i(n))!==(void 0===r?"undefined":i(r)))return!1;if("object"!=typeof n)return n===r;if(Array.isArray(n)&&Array.isArray(r)){if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!t(n[o],r[o]))return!1;return!0}if(Array.isArray(n)!==Array.isArray(r))return!1;if(e(n,Date)&&e(r,Date))return n.getTime()===r.getTime();if(e(n,RegExp)&&e(r,RegExp))return n.source===r.source&&n.global===r.global&&n.ignoreCase===r.ignoreCase&&n.multiline===r.multiline&&n.sticky===r.sticky&&n.unicode===r.unicode;var a=Object.keys(n),u=Object.keys(r);if(a.length!==u.length)return!1;for(var c=0;c<a.length;c++){var s=a[c];if(!Object.prototype.hasOwnProperty.call(r,s)||!t(n[s],r[s]))return!1}return!0},n.isObject=r,n.pick=function(t,n){var e={};if(null==t)return e;for(var i=0;i<n.length;i++){var r=n[i];Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},n.omit=function(t,n){var e={};if(null==t)return e;var i=new Set(n);for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&!i.has(r)&&(e[r]=t[r]);return e},n.merge=function t(n){for(var e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];if(!r(n))throw new TypeError("Target must be an object");for(var a=0;a<i.length;a++){var u=i[a];if(r(u))for(var c in u)if(Object.prototype.hasOwnProperty.call(u,c)){var s=u[c],f=n[c];if(void 0===s)continue;r(s)&&r(f)?n[c]=t({},f,s):n[c]=s}}return n},n.mapValues=function(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=n(t[i],i,t));return e},n.flatten=function(t){for(var n=[],e=0;e<t.length;e++){var i=t[e];if(Array.isArray(i))for(var r=0;r<i.length;r++)n.push(i[r]);else n.push(i)}return n},n.flattenDeep=function t(n){var e=[];if(null==n)return e;for(var i=0;i<n.length;i++){var r=n[i];if(Array.isArray(r))for(var o=t(r),a=0;a<o.length;a++)e.push(o[a]);else e.push(r)}return e},n.pickBy=o,n.omitBy=function(t,n){var e="function"==typeof n;return o(t,(function(t,i){return!(e?n(t,i):r(t)&&Object.keys(n).every((function(e){return t[e]===n[e]})))}))};var i=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function r(t){var n=void 0===t?"undefined":i(t);return null!=t&&("object"===n||"function"===n)}function o(t,n){var e=function(e){if(!Object.prototype.hasOwnProperty.call(t,e))return"continue";var a=t[e];(i?n(a,e):r(a)&&Object.keys(n).every((function(t){return a[t]===n[t]})))&&(o[e]=a)},i="function"==typeof n,o={};for(var a in t)e(a);return o}},8859:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.isObject;n.getFieldValue=function(t,n){Array.isArray(n)||(n=[n]);for(var e=t,i=0;i<n.length;i++){var r=n[i];if(!o(e)||!e.hasOwnProperty(r))return;e=e[r]}return e},n.setFieldValue=function(t,n,e){if(!Array.isArray(n)||r(n))throw new Error("Attempted to set an invalid key path: "+n);for(var i=t,a=0;a<n.length-1;a++){var u=n[a];o(i[u])||(i[u]={}),i=i[u]}i[n[n.length-1]]=e}},7852:function(t,n,e){var i=e(136),r=e(8298),o=e(6592),a=e(409),u=e(192);function c(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=r.now()}c.prototype.ye=function(){return null!==this.logLevel},c.prototype.setLogLevel=function(t){var n=this.we(t);null===n?console.error("Unknown log level: "+t):this.logLevel!==n&&(this.log("Setting log level to "+n),this.logLevel=n,this.flush())},c.prototype.setLogMatcher=function(t){this.logMatcher="string"==typeof t?t:"",this.logGroup=0},c.prototype.shouldLog=function(t){return this.ye()&&this.logLevel>=t},c.prototype.matchesLogMessage=function(t,n){var e=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===t?this.logGroup++:"GROUPEND"===t&&this.logGroup--,!0;var i=n.some((function(t){if("string"!=typeof t)try{t=u.stringify(t)}catch(t){}return"string"==typeof t&&t.includes(e)}));return i&&"GROUPSTART"===t&&this.logGroup++,i},c.prototype.storeLog=function(t,n){var e={logLevel:t,logMessage:n};a.dispatch(i.LOG,e)},c.prototype.flush=function(){var t=e(2025).get("stores/log");this.logGroup=0;var n=t.getLogs(),i=this;n.forEach((function(t){i.Ee(t.logLevel,t.logMessage,!0)}))},c.prototype.Ee=function(t,n,e){var i,r=t;if(console)switch(t){case"GROUPSTART":i=console.groupCollapsed,r=o.LogLevel.DEBUG;break;case"GROUPEND":i=console.groupEnd,r=o.LogLevel.DEBUG;break;case o.LogLevel.ERROR:i=console.error;break;case o.LogLevel.WARN:i=console.warn;break;case o.LogLevel.DEBUG:i=console.debug;break;default:i=console.log}try{e||this.ye()&&!this.shouldLog(r)||(Array.isArray(n)&&"string"==typeof n[0]&&(n=this.Ie(n)),this.storeLog(t,n)),i&&this.shouldLog(r)&&this.matchesLogMessage(t,n)&&i.apply(console,n)}catch(t){console&&(console.error?console.error(t):console.log(t))}},c.prototype.debug=function(){this.Ee(o.LogLevel.DEBUG,[].slice.call(arguments))},c.prototype.log=function(){this.Ee(o.LogLevel.INFO,[].slice.call(arguments))},c.prototype.logAlways=function(){var t=this.Ie([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,t),this.storeLog(o.LogLevel.INFO,t)},c.prototype.warn=function(){this.Ee(o.LogLevel.WARN,[].slice.call(arguments))},c.prototype.error=function(t){var n=[].slice.call(arguments);1===n.length&&t.stack?(this.Ee(o.LogLevel.ERROR,[this.Ae(),t]),this.Ee(o.LogLevel.INFO,[t.stack])):this.Ee(o.LogLevel.ERROR,n)},c.prototype.groupCollapsed=function(){this.Ee("GROUPSTART",[].slice.call(arguments))},c.prototype.groupEnd=function(){this.Ee("GROUPEND",[].slice.call(arguments))},c.prototype.Ie=function(t){var n=this.Ae().toString();return n.length<6&&(n=("     "+n).slice(-6)),[n+"| Optly / "+t[0]].concat(t.slice(1))},c.prototype.Ae=function(){return this.timebase?r.now()-this.timebase:0},c.prototype.we=function(t){return t&&("TRUE"===(t=t.toUpperCase())&&(t="INFO"),"FALSE"===t&&(t="OFF"),"ALL"===t&&(t="DEBUG"),void 0!==o.LogLevel[t])?o.LogLevel[t]:null},t.exports=new c},6907:function(t,n,e){var i;i=e(9891),t.exports=i},5686:function(t,n){n.isSingleExperimentPolicy=function(t){return"single_experiment"===t||"multivariate"===t}},5385:function(t,n,e){var i=e(6761).Promise,r=e(9454);n.pollFor=function(t,n,e){var o,a;return"function"==typeof e?a=e:(o=e||100,a=function(){return--o<-1}),n=n||50,new i((function(e,i){!function o(){var u;if(!a()){try{var c=t();if(c)return e(c)}catch(t){u=t}return r.setTimeout(o,n)}i(u||new Error("Poll timed out"))}()}))}},5467:function(t,n,e){var i=e(6761).Promise;n.firstToResolve=function(t){return new i((function(n){t.forEach((function(t){i.resolve(t).then(n,(function(){}))}))}))}},4618:function(t,n,e){var i=e(9454);n.getQueryParams=function(){var t=i.getLocationSearch()||"";if(0===t.indexOf("?")&&(t=t.substring(1)),0===t.length)return[];for(var n=t.split("&"),e=[],r=0;r<n.length;r++){var o="",a="",u=n[r].split("=");u.length>0&&(o=u[0]),u.length>1&&(a=u[1]),e.push([o,a])}return e},n.getQueryParamValue=function(t){for(var e=n.getQueryParams(),i=0;i<e.length;i++)if(e[i][0]===t)return e[i][1]},n.queryStringFromMap=function(t){return Object.keys(t).map((function(n){return n+"="+t[n]})).join("&")}},1760:function(t,n,e){var i=e(7852),r=e(9454);function o(t){this.windowLength=t,this.count=0,this.listeners={},this.isIncrementingTick=!1}o.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),r.setTimeout(function(){this.isIncrementingTick=!1}.bind(this),0))},o.prototype.increment=function(){this.count+=1,(this.listeners[String(this.count)]||[]).forEach((function(t){t()})),r.setTimeout(this.decrement.bind(this),this.windowLength)},o.prototype.decrement=function(){this.count-=1,this.count<0&&(i.warn("Decremented down to negative count: ",this.count),this.count=0)},o.prototype.addListener=function(t,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(n)},t.exports=o},3272:function(t,n,e){var i=e(8275).pick,r=e(2025).get("stores/observed_redirect");n.getReferrer=function(){var t=r.get();return t?t.referrer:null},n.getExperimentAndVariation=function(){var t=r.get();return t&&"string"==typeof t.variationId?i(t,["experimentId","variationId"]):null}},9670:function(t,n,e){var i=e(8275).mapValues,r=e(136),o=e(8298),a=e(2025),u=e(1019),c=e(6592),s=e(409),f=e(7852),l=a.get("stores/sandbox"),d=e(9454);n.shouldSandbox=function(){return!1},n.get=function(t){if(!t)throw new Error("Name is required");if(n.shouldSandbox()){l.isInitialized()||v();var e=l.get(t);if(e)return e}return d.getGlobal(t)};var v=function(){try{var t="optimizely_"+o.now(),n=u.createElement("iframe");n.name=t,n.style.display="none",u.appendToHead(n);var e=n.contentWindow,a=n.contentDocument;a.write("<scr"),a.write("ipt></scr"),a.write("ipt>"),a.close();var l=i(c.SandboxedFunctions,(function(t){return e[t]}));s.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:l})}catch(t){f.warn("Unable to create a sandbox: ",t)}}},7219:function(t,n,e){var i=e(1019),r=e(7852),o=e(8260);n.addScriptAsync=function(t,n,e){var o,a=i.querySelector("head"),u=e?i.querySelector(e):null,c=i.createElement("script");(c.type="text/javascript",c.async=!0,c.src=t,n&&(c.onload=n),u)?(r.debug("Target element found for selector: "+e+", adding script before it."),null==(o=u.parentNode)||o.insertBefore(c,u)):(r.debug("Target element not found for selector: "+e+", adding script to HEAD instead."),a.insertBefore(c,a.firstChild));r.debug("Asynchronously requesting "+t)},n.addScriptSync=function(t,e){try{var a="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(-1!==t.indexOf('"'))return void r.error("Blocked attempt to load unsafe script: "+t);i.write("<scr"),i.write('ipt id="'+a+'" src="'+t+'"></scr'),i.write("ipt>");var u=i.querySelector("#"+a);if(!u)throw new Error("DocumentEnv.write failed to append script");u.onload=e,u.onerror=function(i){r.warn("Failed to load script ("+t+") synchronously:",i),n.addScriptAsync(t,e)}}catch(i){r.debug("DocumentEnv.write failed for "+t+": "+i.message);return o.request({url:t,async:!1,contentType:"text/plain",success:function(t){new Function(t.responseText)(),e&&e()}}).catch((function(i){r.error("Failed to load "+t+" via synchronous XHR: "+i.message),n.addScriptAsync(t,e)}))}}},249:function(t,n,e){var i=e(6761).Promise,r=e(9454);n.makeTimeoutPromise=function(t){return new i((function(n,e){r.setTimeout((function(){e(new Error("Timed out after "+t+" ms"))}),t)}))}},3498:function(t,n,e){var i=e(8275).isEmpty,r=e(4861),o=e(9454),a=e(136),u=e(2025),c=e(409),s=u.get("stores/ua_data");n.get=function(){var t=s.get();return i(t)&&(t=r.parseUA(o.getUserAgent()),c.dispatch(a.SET_UA_DATA,{data:t})),t}},327:function(t,n){n.guessDomain=function(t,n){if(!t)return"";try{return n?t.match(/:\/\/(.[^/]+)/)[1]:t.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]}catch(t){return""}}},9899:function(t,n){n.generate=function(){var t=new Uint8Array(16);crypto.getRandomValues(t),t[6]=15&t[6]|64,t[8]=63&t[8]|128;var n=Array.prototype.map.call(t,(function(t){return("0"+t.toString(16)).slice(-2)})).join("");return n.slice(0,8)+"-"+n.slice(8,12)+"-"+n.slice(12,16)+"-"+n.slice(16,20)+"-"+n.slice(20)}},5292:function(t,n,e){var i=e(6761).Promise,r=e(136),o=e(2025),a=e(409),u=e(8841),c=e(8130).v,s=e(8298),f=e(1019),l=e(192),d=e(5385),v=e(4285),h=e(9454),p=e(6592).VisitorStorageKeys,g=e(7852),m=o.get("stores/xdomain"),b=n.Error=c("XDomainStorageError");function _(t){var n;if(m.getFrames().find((function(n){return n.origin===t.origin}))){try{n=l.parse(t.data)}catch(n){return void g.debug("XDomain","Ignoring malformed message event:",t)}if("ERROR"===n.type)a.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0}),u.emitInternalError(new b("Xdomain Error: "+n.response));else if("SYNC"===n.type)m.getSubscribers().forEach((function(t){t(n.response.key,n.response.value)}));else{var e=m.getMessageById(n.id);if(!e){if(g.warn("XDomain","No stored message found for ID",n.id),"number"!=typeof n.id)u.emitInternalError(new b("Message ID is not a number: "+n.id));else{var i=m.getNextMessageId();n.id>=i?u.emitInternalError(new b("Message ID is greater than expected maximum ID ("+n.id+">"+i+")")):n.id<0?u.emitInternalError(new b("Message ID is < 0: "+n.id)):u.emitInternalError(new b("No stored message found for message ID: "+n.id))}return}if(!e.resolver)return void g.warn("XDomain","Message already resolved, ignoring:",n.id);e.resolver(n.response),a.dispatch(r.XDOMAIN_SET_MESSAGE,{messageId:n.id,message:{data:{id:n.id,type:e.data.type,key:e.data.key},startTime:e.startTime,endTime:s.now()}})}}else g.debug("XDomain","No frame found for origin: "+t.origin)}function y(t){return!(["GET","PUT"].includes(t.type)&&!t.key.includes(p.SESSION_STATE))}function w(t,n){return n||(n=m.getDefaultFrame()),new i((function(e){var i={data:Object.assign({},t,{id:m.getNextMessageId(),use_cookie:y(t)}),resolver:e};n?m.isDisabled()||E(i,n):a.dispatch(r.XDOMAIN_SET_MESSAGE,{messageId:i.data.id,message:i})}))}function E(t,n){var e=t.data;a.dispatch(r.XDOMAIN_SET_MESSAGE,{messageId:t.data.id,message:Object.assign({},t,{startTime:s.now()})}),n.target.postMessage(l.stringify(e),n.origin)}n.setItem=function(t,n,e){return w({type:"PUT",key:t,value:n},e)},n.getItem=function(t,n){return w({type:"GET",key:t},n)},n.fetchAll=function(t){return w({type:"GETALL"},t)},n.deleteData=function(t,n){return w({type:"DELETE",visitorId:t},n)},n.subscribe=function(t){a.dispatch(r.XDOMAIN_ADD_SUBSCRIBER,{subscriber:t})},n.loadIframe=function(t,n){return new i((function(e){var i=f.createElement("iframe");i.src=t+n,i.hidden=!0,i.setAttribute("tabindex","-1"),i.setAttribute("title","Optimizely Internal Frame"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var o={id:m.getNextFrameId(),target:i.contentWindow,origin:t,path:n};a.dispatch(r.XDOMAIN_ADD_FRAME,o),e(o)},f.appendTo(f.querySelector("body"),i)}))},n.getXDomainUserId=function(t,n){var e,i={},r=Object.keys(t);return n.forEach((function(t){i[t]=[],r.forEach((function(n){var r=v.getUserIdFromKey(n,t);!e&&r&&(e=r),r&&!i[t].includes(r)&&i[t].push(r)}))})),g.debug("XDomain: Found userIds:",i),e},n.load=function(t,e){h.addEventListener("message",_);return d.pollFor((function(){return!!f.querySelector("body")})).then((function(){return n.loadIframe(t,e)})).then((function(t){a.dispatch(r.XDOMAIN_SET_DEFAULT_FRAME,t),m.isDisabled()||m.getMessages().forEach((function(n){n.startTime||E(n,t)}))}))}},8260:function(t,n,e){var i=e(8275).isObject,r=e(136),o=e(8298),a=e(409),u=e(192),c=e(7852),s=e(6761).Promise,f=e(9670);n.isCORSSupported=function(){return"withCredentials"in new(f.get("XMLHttpRequest"))},n.request=function(t){return t=Object.assign({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},t),new s((function(e,r){if(!n.isCORSSupported())return r("CORS is not supported");var o=new(f.get("XMLHttpRequest"));o.onload=function(){t.success&&t.success(o),e(o)},o.onerror=function(){t.error&&t.error(o),r(o)},i(t.data)&&(t.data=u.stringify(t.data)),o.open(t.method,t.url,t.async),t.withCredentials&&(o.withCredentials=t.withCredentials),o.setRequestHeader("Content-Type",t.contentType),i(t.headers)&&Object.keys(t.headers).forEach((function(n){o.setRequestHeader(n,t.headers[n])})),o.send(t.data)}))},n.retryableRequest=function(t,e,i,u){if(!e)return s.reject(new Error("No id specified for request."));if(!n.isCORSSupported())return s.reject(new Error("CORS is not supported."));void 0===u&&(u=3),void 0===i&&(i=0);var f={id:e,timeStamp:o.now(),data:t,retryCount:i};return a.dispatch(r.SET_PENDING_EVENT,f),c.debug("Sending event ",e),n.request(t).then((function(t){return a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),t}),(function(t){throw f.retryCount>=u?(a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),c.warn("Event ",f," could not be sent after ",u," attempts.")):(f.retryCount++,a.dispatch(r.SET_PENDING_EVENT,f),c.debug("Event ",f," failed to send, with error ",t," It will be retried ",u-i," times.")),t}))},n.sendBeacon=function(t,e){if(!t.url||!t.data)return s.reject(new Error("Must provide required options"));if(navigator&&navigator.sendBeacon)try{var r=i(t.data)?u.stringify(t.data):t.data;if(navigator.sendBeacon(t.url,r))return s.resolve();throw new Error("Unable to sendBeacon")}catch(t){c.warn("sendBeacon failed: ",t)}return t=Object.assign({method:"POST"},t),n.request(t,e)}},2348:function(t,n,e){var i=e(8275).isEmpty,r=e(136),o=e(8674),a=e(5421),u=e(8298),c=e(2025),s=e(6592),f=e(1320),l=e(409),d=e(7852),v=e(8612),h=c.get("stores/event_data"),p=c.get("stores/plugins"),g=c.get("stores/rum"),m=c.get("stores/view"),b=c.get("stores/view_data");n.parseViewTags=function(t){var e=n.evaluateViewTags(t);n.setParsedViewTags(t.id,e)},n.updateAllViewTags=function(){m.getActiveViewStates().forEach((function(t){var e=b.get(t.id);n.parseViewTags(e)}))},n.evaluateViewTags=function(t){return t.tags?t.tags.reduce((function(t,n){try{t[n.apiName]=v.getTagValue(n)}catch(t){e=t,(null!=(i=v.Error)&&"undefined"!=typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](e):e instanceof i)?d.warn("Page / Ignoring unparseable tag",n,t):d.error(t)}var e,i;return t}),{}):{}},n.createViewTicket=function(){var t={},n=p.getAllPlugins(s.PluginTypes.viewProviders);return Object.keys(n).forEach((function(e){var i=n[e];t[i.provides]=c.evaluate(i.getter)})),t},n.registerViews=function(t,n){l.dispatch(r.REGISTER_VIEWS,{views:t,forceClean:n})},n.activateViaAPI=function(t,e){e&&n.setUserSuppliedViewTags(t.id,e),n.activateMultiple([t],e)},n.getViewsAndActivate=function(t){var e=b.getAllViewsForActivationType(t);n.activateMultiple(e)},n.activateMultiple=function(t,e){var a=[];return t.forEach((function(t){var i=m.getViewState(t.id),u=n.createViewTicket();if(i.isActive)if(t.deactivationEnabled)try{n.hasValidStaticConditions(t,u)||n.deactivate(t)}catch(e){d.error("Page / Error evaluating whether to deactivate page ",n.description(t),e)}else d.log("Not activating Page, already active ",n.description(t));else{try{if(!n.hasValidStaticConditions(t,u))return"boolean"!=typeof i.isActive&&n.setViewActiveState(t,!1),void d.log("Page / Failed to match page conditions for "+n.description(t),t.staticConditions)}catch(e){return"boolean"!=typeof i.isActive&&n.setViewActiveState(t,!1),void d.error("Page / Error evaluating whether to activate page ",n.description(t),e)}if(a.push(t),n.setViewActiveState(t,!0),d.log("Activated Page",n.description(t)),o.emitViewActivated({view:t,metadata:e}),g.getSampleRum()){var c=t.activationType||s.ViewActivationTypes.immediate;l.dispatch(r.RECORD_ACTIVATION_TYPE_USAGE,{activationType:c,entityId:t.id})}var f=h.getByPageId(t.id);n.toggleEventImplementations(f,!0)}})),i(a)||o.emitViewsActivated({views:a}),a},n.deactivate=function(t){if(m.getViewState(t.id).isActive){n.setViewActiveState(t,!1),d.log("Deactivated Page",n.description(t)),o.emitPageDeactivated({page:t});var e=h.getByPageId(t.id);n.toggleEventImplementations(e,!1)}else d.log("Not deactivating Page, already inactive ",n.description(t))},n.setViewActiveState=function(t,n){l.dispatch(r.SET_VIEW_ACTIVE_STATE,{view:t,timestamp:u.now(),isActive:n})},n.setGlobalTags=function(t){l.dispatch(r.SET_GLOBAL_TAGS,t)},n.setParsedViewTags=function(t,n){l.dispatch(r.UPDATE_PARSED_VIEW_METADATA,{pageId:t,metadata:n})},n.setUserSuppliedViewTags=function(t,n){l.dispatch(r.UPDATE_USER_SUPPLIED_METADATA,{pageId:t,metadata:n})},n.hasValidStaticConditions=function(t,n){var e={};if(i(t.staticConditions))return!0;var o=p.getAllPlugins(s.PluginTypes.viewMatchers);d.groupCollapsed("Page / Evaluating staticConditions:",t.staticConditions),d.debug("Matching to current value:",n);var u=a.evaluate(t.staticConditions,(function(t){var i=t.type,r=o[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r&&(e[t.type]||(e[t.type]=!0)),r.match(n,t)}));return d.groupEnd(),g.getSampleRum()&&u&&l.dispatch(r.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:Object.keys(e),entityId:t.id}),u},n.description=function(t){return'"'+t.name+'" ('+t.id+")"},n.toggleEventImplementations=function(t,n){t.forEach((function(t){if(t.eventType!==f.CUSTOM){var e=p.getPlugin(s.PluginTypes.eventImplementations,t.eventType);e?n?e.attach(t):e.detach(t):d.warn("No implementation found for event type:",t.eventType,"needed for event:",t)}}))},n.isActivationTypeImmediate=function(t){return t===s.ViewActivationTypes.immediate||!t},n.shouldTriggerImmediately=function(t){return t===s.ViewActivationTypes.DOMChanged||t===s.ViewActivationTypes.URLChanged||t===s.ViewActivationTypes.immediate||!t},n.create=function(t,n){return{id:t,apiName:n,category:"other"}},n.createState=function(t){return{id:t,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}}}},4285:function(t,n,e){Object.defineProperty(n,"u",{value:!0});var i=e(8275),r=(i.flattenDeep,i.isEmpty),o=i.omit,a=i.omitBy,u=e(409),c=e(136),s=e(2575),f=e(4938),l=e(6278),d=e(8298),v=e(2025),h=e(6592),p=e(192),g=e(8859),m=e(1353).DT,b=e(7852),_=e(6761).Promise,y=e(4618),w=e(6592).VisitorStorageKeys,E=e(9454),I=v.get("stores/cookie_options"),A=v.get("stores/global"),T=v.get("stores/layer"),O=v.get("stores/plugins"),S=v.get("stores/rum"),k=v.get("stores/session"),R=v.get("stores/visitor_id"),C=v.get("stores/visitor_bucketing"),N=v.get("stores/visitor"),D=v.get("stores/provider_status");function x(t){var n=P(t),e=m.getItem(n);return"string"==typeof e&&(e=V(e)),e}function j(t){var n;if(t.layerId)n=t;else{var e=t;n={layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}return n}function M(t,n,e){try{var i=P(t);e||(n=p.stringify(n));try{m.setItem(i,n)}catch(t){throw b.warn("Visitor / Unable to set localStorage key, error was:",t),new Error("Unable to set localStorage")}}catch(t){b.warn("Unable to persist visitor data:",t.message)}}function P(t){var e=R.getBucketingId();if(!e)throw new Error("Visitor bucketingId not set");var i=n.getNamespace();if(!i)throw new Error("Namespace is not set");return[e,i,t].join("$$")}function L(t,e){if(!R.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(U(t)){var i=n.getStorageKeyFromKey(t);if(Object.keys(w).some((function(t){return w[t]===i}))){var o=P(i);if(!(t.indexOf(o)<=0)&&(e=V(e)))if(i===w.EVENT_QUEUE)u.dispatch(c.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:t,value:f.deserialize(e)});else if(i===w.EVENTS)u.dispatch(c.SET_FOREIGN_VISITOR_EVENTS,{key:t,value:f.deserialize(e)});else if(i===w.LAYER_STATES)u.dispatch(c.LOAD_PERSISTED_LAYER_STATES,{layerStates:e.map(j),merge:!0});else if(i===w.VARIATION_MAP)u.dispatch(c.MERGE_VARIATION_ID_MAP,{variationIdMap:e});else if(i===w.CONTEXTUAL_MAB)u.dispatch(c.MERGE_CONTEXTUAL_MAB_MAP,{contextualMabMap:e});else if(i===w.VISITOR_PROFILE){var a=e;["custom"].forEach((function(t){var n=O.getPlugin(h.PluginTypes.visitorProfileProviders,t);if(n){if(a.profile&&a.metadata){var e=function(t,n,e){var i=N.getAttribute(n),o=N.getAttributeMetadata(n),a=t.profile[n],u=t.metadata[n];if(r(i))return{data:a,metadata:u};var c={};return Object.keys(a).forEach((function(t){var n,i,r=a[t];o&&o[t]&&(n=o[t].lastModified),u&&u[t]&&(i=u[t].lastModified),(e===h.AttributionTypes.FIRST_TOUCH&&n>=i||e===h.AttributionTypes.LAST_TOUCH&&i>=n||void 0===n&&i)&&(c.data=c.data||{},c.data[t]=r,i&&(c.metadata=c.metadata||{},c.metadata[t]=c.metadata[t]||{},c.metadata[t].lastModified=i))})),c}(a,t,n.attributionType);if(!r(e)){var i=[];Object.keys(e.data||{}).forEach((function(n){var r=e.data[n],o=e.metadata[n],a={key:[t,n],value:r,metadata:o};i.push(a)})),u.dispatch(c.SET_VISITOR_ATTRIBUTES,{attributes:i})}}}else b.debug("Attribute type",t,"not used by any audiences")}))}}}}function U(t){return t.split("$$")[0].indexOf("://")>0}function V(t){try{return p.parse(t)}catch(n){return b.debug("Failed to parse: ",t,n),null}}n.getOrGenerateId=function(){return{randomId:n.getCurrentId()||"oeu"+d.now()+"r"+Math.random()}},n.getCurrentId=function(){var t=R.getVisitorIdLocator();return N.getVisitorIdFromAPI()||(t?function(t){var n,e=t.name;switch(t.type){case h.VisitorIdLocatorType.COOKIE:n=l.get(e);break;case h.VisitorIdLocatorType.JS_VARIABLE:n=E.getGlobalByPath(e);break;case h.VisitorIdLocatorType.LOCALSTORAGE:try{n=E.getGlobal("localStorage").getItem(e)}catch(t){throw new Error("Unable to read localStorage: "+t.toString())}break;case h.VisitorIdLocatorType.QUERY:n=y.getQueryParamValue(e)}try{if(!n)throw b.error("Visitor / Customer provided visitor id cannot be found. Type:",t.type," Name:",e),new Error("Failure to obtain visitor id from "+t.type);if("string"!=typeof n&&"number"!=typeof n)throw b.error("Visitor / Customer provided visitor id is not a string or number. Type:",t.type," Name:",e," Id Type:",(i=n)&&"undefined"!=typeof Symbol&&i.constructor===Symbol?"symbol":typeof i),new Error("Customer provided visitor id is not a string or number")}catch(t){throw S.getSampleRum()&&u.dispatch(c.RECORD_VISITOR_ID_ERROR,{isError:!0}),t}var i;S.getSampleRum()&&(u.dispatch(c.RECORD_VISITOR_ID_ERROR,{isError:!1}),u.dispatch(c.RECORD_VISITOR_ID_LOCATOR_USAGE,{visitorIdLocatorType:t.type,entityId:n}));return String(n)}(t):l.get(h.COOKIES.VISITOR_ID))},n.hasSomeData=function(){return m.keys().length>0},n.setId=function(t){var e,i,r=R.getBucketingId();u.dispatch(c.SET_VISITOR_ID,t),R.getBucketingId()!==r&&(!function(){!function(t,n){0;s.initializeStore(t,n)}(x(w.EVENTS)||[],x(w.EVENT_QUEUE)||[]);var t=(e=w.LAYER_STATES,i=R.getBucketingId(),r=[],o=new RegExp(i+"\\$\\$([^$]+?)\\$\\$"+e),m.keys().forEach((function(t){var n=t.match(o);if(n){var e={namespace:n[1],userId:i,item:V(m.getItem(t))};r.push(e)}})),r);var e,i,r,o;t.forEach((function(t){t.item=(t.item||[]).map(j)})),f=t,l=[],f.forEach((function(t){t.item.forEach((function(n){n.namespace=t.namespace,l.push(n)}))})),v=l,u.dispatch(c.LOAD_PERSISTED_LAYER_STATES,{layerStates:v.filter((function(t){return!!t.decision}))}),d=x(w.SESSION_STATE)||{},d=Object.assign({lastSessionTimestamp:0,sessionId:null},d),u.dispatch(c.LOAD_SESSION_STATE,d),function(t){var n,e,i=O.getAllPlugins(h.PluginTypes.visitorProfileProviders),r=Object.keys(i||{}).map((function(t){return i[t]})).filter((function(t){return"function"==typeof t.restorer}));t.profile&&t.metadata?(n=t.profile,e=t.metadata):(n=t,e={});n=Object.keys(n||{}).reduce((function(t,e){var i=n[e],o=i,a=r.find((function(t){return t.provides===e}));return a&&(o=a.restorer(i)),t[e]=o,t}),{}),u.dispatch(c.LOAD_EXISTING_VISITOR_PROFILE,{profile:n,metadata:e})}(x(w.VISITOR_PROFILE)||{});var a=x(w.TRACKER_OPTIMIZELY);a&&(p=a,u.dispatch(c.SET_TRACKER_PERSISTABLE_STATE,p));var f,l;var d;var v;var p;n.loadForeignData(),n.removeLegacySessionStateCookies()}(),n.deleteOldLocalData());try{R.getVisitorIdLocator()||n.maybePersistVisitorId(t)}catch(t){if(b.error("Visitor / Unable to persist visitorId, disabling tracking"),u.dispatch(c.LOAD_DIRECTIVE,{trackingDisabled:!0}),e=t,null!=(i=l.MismatchError)&&"undefined"!=typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](e):e instanceof i)throw b.error("Visitor / Cookie not set to correct value:",t),new Error("Cookie mismatch error while persisting visitorId");throw t}n.refreshSession()},n.getVariationIdMap=function(){return x(w.VARIATION_MAP)||{}},n.updateVariationIdMap=function(t,n,e){u.dispatch(c.UPDATE_VARIATION_ID_MAP,{layerId:t,experimentId:n,variationId:e})},n.persistVariationIdMap=function(){var t=C.getVariationIdMapString();M(w.VARIATION_MAP,t,!0)},n.getContextualMabMap=function(){return x(w.CONTEXTUAL_MAB)||{}},n.updateContextualMabMap=function(t,n,e){u.dispatch(c.UPDATE_CONTEXTUAL_MAB_MAP,{layerId:t,experimentId:n,variationData:e})},n.persistContextualMabMap=function(){var t=C.getContextualMabMapString();M(w.CONTEXTUAL_MAB,t,!0)},n.getOdpSegments=function(){return x(w.ODP_SEGMENTS)||{}},n.persistOdpSegments=function(t){M(w.ODP_SEGMENTS,t,!1)},n.persistTrackerOptimizelyData=function(t){M(w.TRACKER_OPTIMIZELY,t)},n.refreshSession=function(){u.dispatch(c.REFRESH_SESSION)},n.populateEagerVisitorData=function(t,e){var i=Object.keys(t||{}).reduce((function(n,e){var i=t[e];return i.isLazy||n.push(i),n}),[]);return n.populateVisitorData(i,e)},n.populateLazyVisitorData=function(t,e,i){b.debug("Populating lazy visitor. List of all providers",t);var r=Object.keys(t||{}).reduce((function(n,e){var r=t[e];return r.isLazy&&i.has(r.provides)&&n.push(r),n}),[]);return b.debug("Filtered list of providers that are lazy and present in audiences",r),n.populateVisitorData(r,e)},n.populateVisitorData=function(t,n){n=n||{};var e=function(t){return function(t,n){var e=function(t,e){var i;n.attributionType&&(i=d.now()),u.dispatch(c.SET_VISITOR_ATTRIBUTES,{attributes:[{key:t,value:e,metadata:{lastModified:i}}]})};if(!n.getter)return;var i=n.provides;Array.isArray(i)||(i=[i]),!1;var r,o=n.isSticky&&void 0!==g.getFieldValue(t,i);if(o)return;try{var a=v.evaluate(n.getter);"function"==typeof a&&(a=a((function(){return g.getFieldValue(t,i)}),(function(t){e(i,t)}))),void 0!==a&&(n.isAsync?(r=a.then((function(t){e(i,t)}),(function(t){b.warn('Failed to evaluate provider for "'+n.provides+'"; error was:',t)})),u.dispatch(c.SET_VISITOR_ATTRIBUTE_PENDING,{key:i,pending:r})):e(i,a))}catch(t){b.warn('Failed to evaluate getter for provider for "'+n.provides+'"; error was: '+t.message)}return r}(n,t)},i=t.filter((function(t){return!0===t.isAsync})).map(e).filter(Boolean);return t.filter((function(t){return!t.isAsync})).forEach(e),i.length>0?_.all(i):_.resolve()},n.persistBehaviorEvents=function(t){M(w.EVENTS,t)},n.persistBehaviorEventQueue=function(t){M(w.EVENT_QUEUE,t)},n.getPersistedBehaviorEventCount=function(){var t=x(w.EVENTS)||[],n=x(w.EVENT_QUEUE)||[];return f.deserialize(t).length+f.deserialize(n).length},n.persistLayerStates=function(){var t=T.getLayerStates(n.getNamespace());t=t.map((function(t){return o(t,["namespace"])})),M(w.LAYER_STATES,t)},n.persistSessionState=function(){M(w.SESSION_STATE,k.getState())},n.persistVisitorProfile=function(){var t=function(){var t=N.getVisitorProfile(),n=N.getVisitorProfileMetadata(),e=O.getAllPlugins(h.PluginTypes.visitorProfileProviders);if(e){var i=Object.keys(e).reduce((function(t,n){var i=e[n];return i.provides&&(t[i.provides]=i),t}),{});t=a(t,(function(t,n){var e=i[n];return e&&e.isTransient}))}return{profile:t,metadata:n}}();M(w.VISITOR_PROFILE,t)},n.persistVisitorBucketingStore=function(){n.persistVariationIdMap(),n.persistContextualMabMap()},n.getUserIdFromKey=function(t,e){var i;return t.includes(e)&&t.includes("_")&&t.includes("$$")&&t.slice(t.indexOf("$$")).includes(n.getNamespace())&&(i=t.slice(t.indexOf("_")+1,t.indexOf("$$"))),i},n.maybePersistVisitorId=function(t){t.randomId&&(I.getAutoRefresh()||n.getCurrentId()!==t.randomId?(l.set(h.COOKIES.VISITOR_ID,t.randomId),b.log("Persisting visitorId:",t.randomId)):b.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},n.getAttribute=function(t){return N.getAttribute(t)},n.getPendingAttributeValue=function(t){return D.getPendingAttributeValue(t)},n.isForeignKey=U,n.checkKeyForVisitorId=function(t){var e=R.getBucketingId()||n.getCurrentId(),i=n.getIdFromKey(t);return!i||i===e},n.getIdFromKey=function(t){var e=t.split("$$")[0],i=n.getStorageKeyFromKey(t);if(Object.keys(h.StorageKeys).some((function(t){return h.StorageKeys[t]===i})))return null;var r=e.indexOf("_");return-1===r?e:e.substring(r+1)},n.getStorageKeyFromKey=function(t){var n,e=t.split("$$").pop();if(e.indexOf("://")>-1){var i=e.indexOf("_");n=e.substring(i+1)}else n=e;return Object.keys(h.AllStorageKeys).some((function(t){return h.AllStorageKeys[t]===n}))?n:null},n.deleteOldLocalData=function(){m.keys().forEach((function(t){n.isForeignKey(t)||n.checkKeyForVisitorId(t)||m.removeItem(t)}))},n.deleteOldForeignData=function(){m.keys().forEach((function(t){n.isForeignKey(t)&&m.removeItem(t)}))},n.loadForeignData=function(){m.keys().forEach((function(t){var n=m.getItem(t);n&&L(t,n)}))},n.getNamespace=function(){return A.getNamespace()},n.serializeFieldKey=function(t){return Array.isArray(t)?t.join("$$"):t},n.removeLegacySessionStateCookies=function(){var t=l.getAll();Object.keys(t).forEach((function(t){0===t.indexOf(h.COOKIES.SESSION_STATE+"$$")&&l.remove(t)}))}},9480:function(t,n,e){var i=e(6592);n.normalizeClientData=function(t){!t.listTargetingKeys&&t.listTargetingCookies&&(t.listTargetingKeys=t.listTargetingCookies.map((function(t){return{type:i.ListTargetingKeyTypes.COOKIE,key:t}})),delete t.listTargetingCookies)}},7786:function(t,n,e){e(2025).register("env/jquery",e(8138))},8138:function(t,n,e){var i,r=e(9454);try{i=$}catch(t){}var o=r.getGlobal("$");t.exports=i&&i!==o?i:o},673:function(t,n,e){e(8275).isEmpty,e(8130).C,e(8298);var i=e(2025),r=(e(1019),e(7852));e(9454),e(8260),i.get("stores/client_metadata"),i.get("stores/global");n.handleError=function(t,n){n?r.error("Uncaught error:",t,n):r.error("Uncaught error:",t)}},4439:function(t,n,e){var i=e(136),r=e(8841),o=e(8486),a=e(8130).v,u=e(9114),c=e(8339),s=e(2025).get("stores/directive"),f=e(1019),l=e(8421),d=e(409),v=e(7852),h=e(1760),p=e(123),g=e(2671).create(),m=1e3,b=10,_=a("ChangeOverheatError");function y(t,n){if(this.change=t,this.identifier=n.identifier,this.startTime=n.startTime,s.shouldObserveChangesIndefinitely()){d.dispatch(i.INITIALIZE_CHANGE_METRICS),this.rateMeter=new h(m);var e=null===b?Number.POSITIVE_INFINITY:b;this.rateMeter.addListener(e,function(){v.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),d.dispatch(i.RECORD_CHANGE_OVERHEATED),r.emitError(new _("Change "+this.identifier+" has overheated"),{layerId:n.action&&n.action.layerId,experimentId:n.action&&n.action.experimentId,variationId:n.action&&n.action.variationId,changeId:t.id,changeType:t.type,movingWindowMilliseconds:m,maxMacroTasksInMovingWindow:e})}.bind(this));for(var o=Math.min(e,50),a=0;a<=o;a++)this.rateMeter.addListener(a,function(t){return function(){d.dispatch(i.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:t})}}(a))}}y.prototype.numberOfRootNodes=function(t){var n=document.createElement("div");return n.innerHTML=t,n.childNodes.length},y.prototype.getSiblingElements=function(t,n,e){for(var i=t,r=[],o=0;o<n;o++)e?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},y.prototype.apply=function(){this.applyDeferred=c();try{if(!this.numberOfRootNodes(this.change.value))throw new Error("No DOM elements to be created for this change: "+this.change.value);var t=this.applyDeferred.reject.bind(this.applyDeferred,new Error("Unable to find selector.")),n={};s.shouldObserveChangesUntilTimeout()?n={timeout:p.isTimedOut.bind(null,this.startTime),onTimeout:t}:s.isEditor()&&g.waitUntil(p.isTimedOut.bind(null,this.startTime)).then(t,t),this.unobserveSelector=g.observeSelector(this.change.selector,this.maybeApplyToElement.bind(this),n);var e=f.querySelectorAll(this.change.selector),i=this;e.forEach((function(t){i.maybeApplyToElement(t)}))}catch(t){this.applyDeferred.reject(t)}return this.applyDeferred},y.prototype.maybeApplyToElement=function(t){var n=o.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(t.hasAttribute(n))return v.debug("Not applying AppendChange to element",t,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick(),this.applyOrReapplyToElement.bind(this,t,n)(),this.applyDeferred.resolve()},y.prototype.applyOrReapplyToElement=function(t,n){var e;switch(this.change.operator){case l.DOMInsertionType.AFTER:e=l.insertAdjacentHTMLType.AFTER_END;break;case l.DOMInsertionType.APPEND:e=l.insertAdjacentHTMLType.BEFORE_END;break;case l.DOMInsertionType.BEFORE:e=l.insertAdjacentHTMLType.BEFORE_BEGIN;break;case l.DOMInsertionType.PREPEND:e=l.insertAdjacentHTMLType.AFTER_BEGIN;break;default:e=l.insertAdjacentHTMLType.BEFORE_END}t.insertAdjacentHTML(e,this.change.value),t.setAttribute(n,""),u.setData(t,this.change.id,this.identifier,[]);var i,r,o=this.numberOfRootNodes(this.change.value)-1;e===l.insertAdjacentHTMLType.BEFORE_END?(i=t.lastChild,r=this.getSiblingElements(i,o,!1)):e===l.insertAdjacentHTMLType.AFTER_BEGIN?(i=t.firstChild,r=this.getSiblingElements(i,o,!0)):e===l.insertAdjacentHTMLType.BEFORE_BEGIN?(i=t.previousSibling,r=this.getSiblingElements(i,o,!1)):e===l.insertAdjacentHTMLType.AFTER_END&&(i=t.nextSibling,r=this.getSiblingElements(i,o,!0)),r.unshift(i);var a=this;r.forEach((function(t){var e=t.nodeType===Node.ELEMENT_NODE?t:f.parentElement(t);e.setAttribute(n,"");var i=u.getData(e,a.change.id,a.identifier)||[];i.push(t),u.setData(e,a.change.id,a.identifier,i),f.childrenOf(e).forEach((function(t){t.setAttribute(n,"")}))}))},y.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},y.prototype.undo=function(){var t=o.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id,n=f.querySelectorAll("["+t+"]"),e=this;return n.forEach((function(n){(u.getData(n,e.change.id,e.identifier)||[]).forEach((function(t){t.parentNode.removeChild(t)})),n.removeAttribute(t),u.removeData(n,e.change.id,e.identifier),f.childrenOf(n).forEach((function(n){n.removeAttribute(t)}))})),c().resolve(l.changeState.UNAPPLIED)},t.exports=function(t){t.registerChangeApplier(l.changeType.APPEND,y)}},8636:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(8421);n.transformVisibilityAttributesToCSS=function(t){if(!t.attributes)return t;if(t.attributes[a.selectorChangeType.HIDE]||t.attributes[a.selectorChangeType.REMOVE]){var n=Object.assign({css:{}},r(t));return t.attributes[a.selectorChangeType.HIDE]&&(n.css.visibility="hidden",delete n.attributes[a.selectorChangeType.HIDE]),t.attributes[a.selectorChangeType.REMOVE]&&(n.css.display="none",delete n.attributes[a.selectorChangeType.REMOVE]),n}return t},n.createStylesFromChange=function(t,n){if(o(n.css))return n.attributes.style;var e="",i=n.attributes.style||"";return Object.keys(n.css).forEach((function(t){var r=n.css[t];new RegExp(t+"\\s?:").test(i)||(e+=t+":"+r+";")})),void 0===n.attributes.style?(t||"")+e:e+i}},6474:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,a=e(136),u=e(8841),c=e(8486),s=e(8130).v,f=e(9114),l=e(8339),d=e(2025).get("stores/directive"),v=e(1019),h=e(8421),p=e(409),g=e(7852),m=e(4970),b=(e(6761).Promise,e(1760)),_=e(123),y=e(9454),w=e(8636),E=e(2671).create(),I={attributes:!0,childList:!0,subtree:!0,characterData:!0},A=1e3,T=10,O=s("ChangeOverheatError");function S(t,n){if(this.change=r(t),this.change=w.transformVisibilityAttributesToCSS(this.change),this.identifier=n.identifier,this.startTime=n.startTime,this.disconnectObserverQueue=[],d.shouldObserveChangesIndefinitely()){p.dispatch(a.INITIALIZE_CHANGE_METRICS),this.rateMeter=new b(A);var e=null===T?Number.POSITIVE_INFINITY:T;this.rateMeter.addListener(e,function(){g.warn("AttributeChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),p.dispatch(a.RECORD_CHANGE_OVERHEATED),u.emitError(new O("Change "+this.identifier+" has overheated"),{layerId:n.action&&n.action.layerId,experimentId:n.action&&n.action.experimentId,variationId:n.action&&n.action.variationId,changeId:t.id,changeType:t.type,movingWindowMilliseconds:A,maxMacroTasksInMovingWindow:e})}.bind(this));for(var i=Math.min(e,50),o=0;o<=i;o++)this.rateMeter.addListener(o,function(t){return function(){p.dispatch(a.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:t})}}(o))}this.cancelled=!1}S.prototype.apply=function(){this.applyDeferred=l();try{if(o(this.change.attributes)&&o(this.change.css))return g.debug("Not applying empty AttributeChange"),this.applyDeferred.resolve(),this.applyDeferred;var t=this.applyDeferred.reject.bind(this.applyDeferred,new Error("Unable to find selector.")),n={};d.shouldObserveChangesUntilTimeout()?n={timeout:_.isTimedOut.bind(null,this.startTime),onTimeout:t}:d.isEditor()&&E.waitUntil(_.isTimedOut.bind(null,this.startTime)).then(t,t),this.unobserveSelector=E.observeSelector(this.change.selector,this.maybeApplyToElement.bind(this),n);var e=v.querySelectorAll(this.change.selector),i=this;e.forEach((function(t){i.maybeApplyToElement(t)}))}catch(t){this.applyDeferred.reject(t)}return this.applyDeferred},S.prototype.maybeApplyToElement=function(t){var n=c.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(t.hasAttribute(n))return g.debug("AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. "+t),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var e=this.applyOrReapplyToElement.bind(this,t,n);e(!1);var i=function(){var n=function(){this.cancelled||m.observe(r,t,I)}.bind(this);return y.setTimeout(n)}.bind(this),r=m.create(function(){this.rateMeter&&this.rateMeter.countCurrentTick(),r.disconnect(),e(!0),i()}.bind(this));i(),this.disconnectObserverQueue.push(r.disconnect.bind(r)),this.applyDeferred.resolve()},S.prototype.applyOrReapplyToElement=function(t,n,e){void 0===e&&(e=!1);var i={},r=this.change.attributes;Object.keys(r).forEach((function(e){var o=r[e];switch(e){case h.selectorChangeType.CLASS:void 0!==t.className&&(i[h.selectorChangeType.CLASS]=t.getAttribute("class")||"",t.setAttribute("class",o));break;case h.selectorChangeType.HREF:void 0!==t.getAttribute("href")&&(i[h.selectorChangeType.HREF]=t.getAttribute("href")||"",t.setAttribute("href",o));break;case h.selectorChangeType.HTML:void 0!==t.innerHTML&&(i[h.selectorChangeType.HTML]=t.innerHTML,t.innerHTML=o,v.childrenOf(t).forEach((function(t){t.setAttribute(n,"")})));break;case h.selectorChangeType.SRC:void 0!==t.src&&(i[h.selectorChangeType.SRCSET]=t.src,t.srcset=o);break;case h.selectorChangeType.SRCSET:void 0!==t.srcset&&(i[h.selectorChangeType.SRCSET]=t.srcset,t.srcset=o);break;case h.selectorChangeType.STYLE:break;case h.selectorChangeType.TEXT:void 0!==t.textContent&&(i[h.selectorChangeType.TEXT]=t.textContent,t.textContent=o);break;default:throw new Error("Unrecognized attribute: "+e)}}));var o=w.createStylesFromChange(t.style.cssText,this.change);"string"==typeof o&&(i[h.selectorChangeType.STYLE]=t.style.cssText,t.style.cssText=o),t.setAttribute(n,""),e&&f.hasData(t)||f.setData(t,this.change.id,this.identifier,i)},S.prototype.cancel=function(){this.cancelled=!0,this.unobserveSelector&&this.unobserveSelector(),this.disconnectObserverQueue.forEach((function(t){try{t()}catch(t){}}))},S.prototype.undo=function(){var t=v.querySelectorAll("["+c.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id+"]"),n=this;return t.forEach((function(t){var e=f.getData(t,n.change.id,n.identifier);e&&Object.keys(e).forEach((function(n){var i=e[n];switch(n){case h.selectorChangeType.CLASS:t.setAttribute("class",i);break;case h.selectorChangeType.HREF:t.setAttribute("href",i);break;case h.selectorChangeType.HTML:t.innerHTML=i;break;case h.selectorChangeType.SRC:case h.selectorChangeType.SRCSET:t.srcset=i;break;case h.selectorChangeType.STYLE:t.style.cssText=i;break;case h.selectorChangeType.TEXT:t.textContent=i;break;case h.selectorChangeType.HIDE:t.style.visibility=i;break;case h.selectorChangeType.REMOVE:t.style.display=i;break;default:throw new Error("Unrecognized attribute: "+n)}})),t.removeAttribute(c.CHANGE_ID_ATTRIBUTE_PREFIX+n.change.id),f.removeData(t,n.change.id,n.identifier)})),l().resolve(h.changeState.UNAPPLIED)},t.exports=function(t){t.registerChangeApplier(h.changeType.ATTRIBUTE,S)}},2636:function(t,n,e){var i=e(8339),r=e(8421),o=e(8484);function a(t,n){if("function"!=typeof t.value)throw new Error("Custom code must be a function");this.change=t}a.prototype.apply=function(){var t=i();try{o.apply(this.change.value),t.resolve()}catch(n){t.reject(n)}return t},a.prototype.undo=function(){return i().resolve(r.changeState.IGNORED)},t.exports=function(t){t.registerChangeApplier(r.changeType.CUSTOM_CODE,a)}},2978:function(t,n,e){var i=e(136),r=e(8841),o=e(8486),a=e(8130).v,u=e(9114),c=e(8339),s=e(2025).get("stores/directive"),f=e(1019),l=e(8421),d=e(409),v=e(7852),h=e(4970),p=e(6761).Promise,g=e(1760),m=e(123),b=e(9454),_=e(2671).create(),y={attributes:!1,childList:!0,subtree:!1,characterData:!1},w=1e3,E=10,I=a("ChangeOverheatError");function A(t,n){if(this.change=t,this.identifier=n.identifier,this.startTime=n.startTime,this.disconnectObserverQueue=[],s.shouldObserveChangesIndefinitely()){d.dispatch(i.INITIALIZE_CHANGE_METRICS),this.rateMeter=new g(w);var e=null===E?Number.POSITIVE_INFINITY:E;this.rateMeter.addListener(e,function(){v.warn("RearrangeChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),d.dispatch(i.RECORD_CHANGE_OVERHEATED),r.emitError(new I("Change "+this.identifier+" has overheated"),{layerId:n.action&&n.action.layerId,experimentId:n.action&&n.action.experimentId,variationId:n.action&&n.action.variationId,changeId:t.id,changeType:t.type,movingWindowMilliseconds:w,maxMacroTasksInMovingWindow:e})}.bind(this));for(var o=Math.min(e,50),a=0;a<=o;a++)this.rateMeter.addListener(a,function(t){return function(){d.dispatch(i.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:t})}}(a))}this.cancelled=!1}A.prototype.apply=function(){this.applyDeferred=c();try{var t=f.querySelector(this.change.selector),n=f.querySelector(this.change.insertSelector);if(t&&n)v.debug("RearrangeChange",this,"both selectors found, applying change"),this.maybeApplyToElement();else{var e=c(),i=c(),r=this.applyDeferred.reject.bind(this.applyDeferred,new Error("Unable to find source element")),o=this.applyDeferred.reject.bind(this.applyDeferred,new Error("Unable to find destination element")),a={once:!0},u={once:!0};s.shouldObserveChangesUntilTimeout()?(a=Object.assign(a,{timeout:m.isTimedOut.bind(null,this.startTime),onTimeout:r}),u=Object.assign(u,{timeout:m.isTimedOut.bind(null,this.startTime),onTimeout:o})):s.isEditor()&&(_.waitUntil(m.isTimedOut.bind(null,this.startTime)).then(r,r),_.waitUntil(m.isTimedOut.bind(null,this.startTime)).then(o,o));var l=_.observeSelector(this.change.selector,e.resolve,a),d=_.observeSelector(this.change.insertSelector,i.resolve,u);this.unobserveSelector=function(){l(),d()},p.all([e,i]).then(this.maybeApplyToElement.bind(this),this.applyDeferred.reject)}}catch(t){this.applyDeferred.reject(t)}return this.applyDeferred},A.prototype.maybeApplyToElement=function(){var t;switch(this.rateMeter&&this.rateMeter.countCurrentTick(),this.change.operator){case l.DOMInsertionType.BEFORE:case l.DOMInsertionType.AFTER:t=f.querySelector(this.change.insertSelector).parentNode;break;case l.DOMInsertionType.PREPEND:case l.DOMInsertionType.APPEND:t=f.querySelector(this.change.insertSelector)}v.debug("RearrangeChange",this,"element to observe for reapplication:",t);var n=this.applyOrReapplyToElement.bind(this);n(!1);var e=function(){var n=function(){this.cancelled||h.observe(i,t,y)}.bind(this);return b.setTimeout(n)}.bind(this),i=h.create(function(){this.rateMeter&&this.rateMeter.countCurrentTick(),i.disconnect(),n(!0),e()}.bind(this));e(),this.disconnectObserverQueue.push(i.disconnect.bind(i)),this.applyDeferred.resolve()},A.prototype.applyOrReapplyToElement=function(t){void 0===t&&(t=!1);var n=f.querySelectorAll(this.change.selector),e=this;n.forEach((function(n){if(!u.getData(n,e.change.id,e.identifier)){var i={undoElement:n.previousSibling,undoType:l.DOMInsertionType.AFTER};n.parentNode.firstChild===n&&(i.undoElement=n.parentNode,i.undoType=l.DOMInsertionType.PREPEND);var r=f.querySelector(e.change.insertSelector),a=r.parentNode,c=n.parentNode.removeChild(n);switch(i.element=c,e.change.operator){case l.DOMInsertionType.BEFORE:a.insertBefore(c,r);break;case l.DOMInsertionType.AFTER:a.insertBefore(c,r.nextSibling);break;case l.DOMInsertionType.PREPEND:var s=r.firstChild;r.insertBefore(c,s);break;case l.DOMInsertionType.APPEND:r.appendChild(c)}c.setAttribute(o.CHANGE_ID_ATTRIBUTE_PREFIX+e.change.id,""),t&&u.hasData(c)||u.setData(c,e.change.id,e.identifier,i)}}))},A.prototype.cancel=function(){this.cancelled=!0,this.unobserveSelector&&this.unobserveSelector(),this.disconnectObserverQueue.forEach((function(t){try{t()}catch(t){}}))},A.prototype.undo=function(){var t=f.querySelectorAll("["+o.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id+"]"),n=this;return t.forEach((function(t){var e=u.getData(t,n.change.id,n.identifier),i=e.element.parentNode.removeChild(e.element),r=e.undoElement,a=r.parentNode;switch(e.undoType){case l.DOMInsertionType.AFTER:a.insertBefore(i,r.nextSibling);break;case l.DOMInsertionType.PREPEND:var c=r.firstChild;r.insertBefore(i,c)}t.removeAttribute(o.CHANGE_ID_ATTRIBUTE_PREFIX+n.change.id),u.removeData(t,n.change.id,n.identifier)})),c().resolve(l.changeState.UNAPPLIED)},t.exports=function(t){t.registerChangeApplier(l.changeType.REARRANGE,A)}},9659:function(t,n,e){var i=e(8339),r=e(8421),o=e(5547);e(9937);function a(t,n){this.change=Object.assign({},t),this.identifier=n.identifier}a.prototype.apply=function(){var t={type:"showWidget",name:this.change.widget_id,data:this.change};return o.emit(t),i().resolve(r.changeState.APPLIED)},a.prototype.undo=function(){return o.emit({type:"hideWidget",name:this.change.widget_id,data:this.change}),i().resolve(r.changeState.UNAPPLIED)},t.exports=function(t){t.registerChangeApplier(r.changeType.WIDGET,a)}},8016:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.pick,a=e(9249),u=e(571),c=e(7353).b,s=e(7852),f={decideLayer:function(t,n){if(!t.decisionMetadata||!t.decisionMetadata.experimentPriorities)throw new c("No decisionMetadata.experimentPriorities on layer.");for(var e=t.decisionMetadata.experimentPriorities.length,i=0;i<e;i++){var r=l(t,n.audienceIds,n.bucketingId,i);if(r){var o=u.selectVariation(r,n.audienceIds,n.bucketingId,n.activationId,n.preferredVariationMap);if(!t.decisionMetadata.offerConsistency||u.hasVariationActionsOnView(o,n.pageId))return{experiment:r,variation:o}}}throw new c("No eligible experiment and variation found.")},includePageIdInDecisionTicket:function(t){return!(!t.decisionMetadata||!t.decisionMetadata.offerConsistency)}};function l(t,n,e,i){var f,l,d=t.decisionMetadata.experimentPriorities[i],v=null==(f=t.decisionMetadata)?void 0:f.experimentWeights,h=(d||[]).reduce((function(e,i){var r=u.getExperimentById(t,i.entityId);return u.isValidExperiment(n,r)&&e.push(i.entityId),e}),[]);if(!r(h)){var p,g=(d||[]).filter((function(t){return null===t.endOfRange}));if(g&&g.length===d.length){if(p=function(t){for(var n=[],e=Math.round(1e4/t.length),i=0;i<t.length;i++)n.push({entityId:t[i],endOfRange:e*(i+1)});return n[n.length-1].endOfRange=1e4,n}(h),!r(v))try{p=function(t,n){var e=0,i=Object.values(n).reduce((function(t,n){return t+n}),0);if(i>1e4)throw new c("Weight distribution is invalid. Total weights: "+i);return t.map((function(r,o){var a=n[r];if("number"!=typeof a)throw new c("Weight distribution for Experiment ID "+r+" not found.");return i<1e4&&(a=o===t.length-1?1e4-e:Math.floor(n[r]/i*1e4)),{entityId:r,endOfRange:e+=a}}))}(h,o(v,h))}catch(t){s.warn("Decider / Could not allocate user-defined weights",t)}}else{if(0!==g.length)throw new c("You must specify weights for all or none of the experiments in each priority layer.");p=function(t,n){for(var e=[],i=[],o=0,a=0;a<n.length;a++){var u=0;t.indexOf(n[a].entityId)>=0&&(o+=u=0===a?n[0].endOfRange:n[a].endOfRange-n[a-1].endOfRange,i.push({entityId:n[a].entityId,points:u}))}if(r(e))for(var c=0,s=0;s<i.length;s++){var f=Math.round(1e4*i[s].points/o)+c;e.push({entityId:i[s].entityId,endOfRange:f}),c=f}return e[e.length-1].endOfRange=1e4,e}(h,d)}if(l=a.chooseWeightedCandidate(e,t.id,p)){var m=u.getExperimentById(t,l);if(m)return m}}}t.exports=function(t){t.registerDecider("equal_priority",f)}},3037:function(t,n,e){var i=e(571),r=e(7353).b,o={selectExperiment:function(t,n,e){if(t.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var o=t.experiments[0];if(!i.isValidExperiment(n,o))throw new r('Audience conditions failed for experiment: "'+o.id+'".');return o}};t.exports=function(t){t.registerDecider("single_experiment",o),t.registerDecider("multivariate",o)}},7544:function(t,n,e){var i=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},r=e(8841),o=e(8130).v,a=e(1019),u=e(6907),c=n.Error=o("ClickDelegateError");function s(t){this.handler=t,this.events=[],this.unlistenFn=null,this.clickHandler=function(t){var n=this;this.events.forEach((function(e){try{var o=e.config&&e.config.selector?e.config.selector:e.eventFilter.selector;(function(t,n,e){var o=t.target,a=0;for(;o;){var s;try{s=u(o,n)}catch(u){var f={typeofElementValue:void 0===o?"undefined":i(o),nodeName:o?o.nodeName:null,nodeType:o?o.nodeType:null,targetName:t&&t.target?t.target.nodeName:null,targetType:t&&t.target?t.target.nodeType:null,numParentsTraversed:a,selector:n,errorMessage:u.message,eventId:e.id};return r.emitError(new c("Unable to evaluate match for element"),f),!1}if(s)return!0;o=o.parentElement,a++}return!1})(t,o,e)&&n.handler(e)}catch(t){r.emitError(new c("Unable to handle click for selector"+o+":"+t.message))}}))}.bind(this)}s.prototype.listen=function(){this.unlistenFn=a.addEventListener("click",this.clickHandler,!0)},s.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},s.prototype.hasEvents=function(){return this.events.length>0},s.prototype.addEvent=function(t){this.events.push(t)},s.prototype.removeEvent=function(t){this.events=this.events.filter((function(n){return n.apiName!==t.apiName}))},t.exports=s},4680:function(t,n,e){var i=e(8131),r=e(7544),o=e(7852),a=e(2348);function u(t){return"apiName: "+t.apiName+", selector: "+t.eventFilter.selector}t.exports=function(t){var n=new r((function(t){a.updateAllViewTags(),i.trackClickEvent(t)?o.log("Tracking click event:",t):o.log("Not tracking click event:",t)}));t.registerEventImplementation("click",{attach:function(t){n.hasEvents()||n.listen(),n.addEvent(t),o.debug("Started listening for click event ("+u(t)+"):",t)},detach:function(t){n.removeEvent(t),n.hasEvents()||n.unlisten(),o.debug("Stopped listening for click event ("+u(t)+"):",t)}})}},6092:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.flatten,a=e(8620),u=e(2599),c=e(986);function s(t,n){var e=u.buildFromSpecV0_1(n);if(1!==e.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return c.execute(e[0],t)}function f(t,n){return t.map((function(t){return"function"==typeof t.toObject?t.toObject(n):t}))}function l(t,n){if(!t)return["Descriptor not defined"];var e=[];return t.count&&e.push('Unexpected "count" clause specified'),t.pick&&t.pick.modifier&&-1===n.indexOf(t.pick.modifier)&&e.push('Invalid "pick" modifier "'+t.pick.modifier+'"'),(t.filters||[]).forEach((function(t){void 0!==t.modifier&&e.push('Unexpected "filter" modifier "'+t.modifier+'"')})),e.length>0?e:void 0}function d(t,n){var e={revenueAsTag:!1,timeAsTimestamp:!0};if(void 0===n)return f(a.getEvents(t),e);if("number"==typeof n){if(n<=0)throw new Error("Count must be a positive integer, got "+n);return f(a.getEvents(t).slice(-n),e)}var i=l(n,Object.values(u.RECENCY_FILTERS));if(i)throw new Error(i.join("\n"));return f(s(a.getEvents(t),n),e)}function v(t,n){if(!(n=r(n)||{}).pick)throw new Error('No "pick" clause provided in query descriptor');if(!n.pick.name)throw new Error('No field name provided in "pick" clause');n.pick.modifier=n.pick.modifier||u.FREQUENCY_FILTERS.MOST_FREQUENT;var e=l(n,Object.values(u.FREQUENCY_FILTERS));if(e)throw new Error(e.join("\n"));return s(a.getEvents(t),n)}function h(t,n){var e=u.buildFromSpecV0_2(n),i=a.getEvents(t),r=f(c.execute(e,i),{revenueAsTag:!0,timeAsTimestamp:!1});return(n.pick||n.reduce&&"count"===n.reduce.aggregator)&&(r=o(r)),n.reduce&&(r=r[0]),r}t.exports=["stores/visitor_events",function(t){return{getEvents:d.bind(null,t),getByFrequency:v.bind(null,t),query:h.bind(null,t)}}]},6988:function(t,n,e){t.exports=function(t){t.registerApiModule("behavior",e(6092))}},1982:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(5937)),t.registerAudienceMatcher("behavior",e(2816))}},2816:function(t,n,e){var i=e(192),r=e(2599),o=e(986);t.exports={fieldsNeeded:["events"],match:function(t,n){var e=i.parse(n.value);return(void 0===e.version?[e]:r.buildFromSpecV0_1(e)).every((function(n){return o.isSatisfied(n,t.events)}))}}},5937:function(t,n,e){var i=e(8620);t.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}},9202:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(3377))}},3377:function(t,n,e){var i=e(4519),r=e(8620),o=e(192),a=e(2599);t.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(t,n){var e=t.getProjectId(),u=n.getCustomBehavioralAttributes(e).map((function(t){try{return{id:t.id,granularity:i.GRANULARITY.ALL,rule:a.buildFromSpecV0_2(o.parse(t.rule_json))}}catch(t){return}})).filter((function(t){return t})),c=r.getEvents();return i.evaluate(u,c)}]}},9401:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(725)),t.registerAudienceMatcher("first_session",e(2388))}},2388:function(t){t.exports={fieldsNeeded:["first_session"],match:function(t){return!!t.first_session}}},725:function(t,n,e){var i=e(1489),r=e(8620),o=e(8859).getFieldValue,a=e(7269).CURRENT_SESSION_INDEX;t.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var t=r.getEvents();if(t&&t.length>0){var n=t[0];return o(n,[i.FIELDS.SESSION_INDEX])===a}return!0}]}},4519:function(t,n,e){var i=e(7852),r={FIELDS:e(1489).FIELDS},o=e(2599),a=e(986);n.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},n.evaluate=function(t,e){var u={};if(0===e.length){for(var c=0;c<t.length;c++)u[t[c].id]=t[c].defaultValue;return u}var s=function(t){if(0===t.length)return[];for(var n=t.length-1,e=r.FIELDS.SESSION_ID,i=t[n][e];n>0&&i===t[n-1][e];)n--;return t.slice(n)}(e),f=function(t,n){if(0===t.length||n<=0)return[];var e=+new Date-n*o.MILLIS_IN_A_DAY;e-=e%o.MILLIS_IN_A_DAY;for(var i=t.length;i>0&&e<=t[i-1][r.FIELDS.TIME];)i--;return t.slice(i)}(e,60);for(c=0;c<t.length;c++){var l=t[c],d=e;l.granularity===n.GRANULARITY.CURRENT_SESSION?d=s:l.granularity===n.GRANULARITY.LAST_60_DAYS&&(d=f);try{var v=d;l.rule&&(v=a.execute(l.rule,d)),u[l.id]=l.defaultValue,1===v.length?u[l.id]=v[0][0]||l.defaultValue:i.debug("Behavior / Rule for",l.id,"returned",v.length,"results, expected 1")}catch(t){i.error("Behavior / Rule for",l.id,"failed with",t.message||"")}}return u}},8620:function(t,n,e){var i=e(4938),r=e(2025).get("stores/visitor_events");n.getEvents=function(){var t=i.getEvents(),n=[].concat.apply([],Object.values(r.getForeignEvents())),e=[].concat.apply([],Object.values(r.getForeignEventQueues())),o=i.mergeAllEvents([t,n,e]);return o.slice(o.length-1e3)}},2599:function(t,n,e){var i=n,r={FIELDS:e(1489).FIELDS,FIELDS_V0_2:e(1489).FIELDS_V0_2},o=e(192),a=e(7852),u=e(986);i.MILLIS_IN_A_DAY=864e5,i.aggregateField=function(t,n){return"string"==typeof n&&(n=[n]),n=n||u.DEFAULT_FIELD,[u.generateAlias(t,n)]},i.groupField=function(t){return"string"==typeof t&&(t=[t]),[(t=t||u.DEFAULT_FIELD).join(".")]};var c={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};function s(t){return t=(t||"").toString().trim(),c[t]||t}function f(t,n,e){var o={where:n};if(t.count&&(o.limit=t.count),t.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT){var a=i.getFieldKeyPathForSource(t.name,e),u=i.aggregate("count"),c=i.aggregateField("count"),s=i.groupField(a);return Object.assign(o,{select:[{field:s}],groupBy:i.groupBy([a]),aggregate:[u],orderBy:[{field:c,direction:"DESC"}]})}return Object.assign(o,{orderBy:[{field:[r.FIELDS.TIME],direction:"DESC"}]})}i.fieldComparison=function(t,n,e){return"string"==typeof n&&(n=[n]),"exists"===(t=s(t))?{op:t,args:[{field:n}]}:{op:t,args:[{field:n},{value:e}]}},i.relativeTimeComparison=function(t,n){return{op:s(t),args:[{op:"-",args:[{eval:"now"},{field:[r.FIELDS.TIME]}]},{value:n*i.MILLIS_IN_A_DAY}]}},i.rangeTimeComparison=function(t){return Array.isArray(t)?{op:"between",args:[{field:[r.FIELDS.TIME]},{value:[t[0]||+new Date(0),t[1]||+new Date]}]}:(a.error("Rule builder","rangeTimeComparison passed invalid range",t),null)},i.groupBy=function(t){for(var n=[],e=0;e<t.length;e++)n[e]={field:t[e]};return n},i.aggregate=function(t,n){return"string"==typeof n&&(n=[n]),{op:t,args:[{field:n=n||u.DEFAULT_FIELD}]}},i.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},i.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},i.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},i.getFieldKeyPathForSource=function(t,n){n=n||i.SOURCE_TYPES.BEHAVIOR;var e=[];return"string"==typeof t?(e=[t],n!==i.SOURCE_TYPES.BEHAVIOR||Object.values(r.FIELDS).includes(t)||(e=[r.FIELDS.OPTIONS,t])):e=t,e},i.buildFromSpecV0_1=function(t){if(!(t.action||t.filters&&0!==t.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+o.stringify(t));var n=i.fieldComparison("gt",r.FIELDS.TIME,0),e=[],u=[];if(t.action&&(u.push(i.fieldComparison("eq",r.FIELDS.NAME,t.action.value)),t.action.type&&u.push(i.fieldComparison("eq",r.FIELDS.TYPE,t.action.type))),t.time)if("last_days"===t.time.type)u.push(i.relativeTimeComparison("lte",t.time.days));else if("range"===t.time.type){var c=i.rangeTimeComparison([t.time.start,t.time.stop]);c&&u.push(c)}else a.error("Rule builder",'Audience spec has bad "time" type',t.time.type);if(n={op:"and",args:u},t.count&&e.push({where:i.fieldComparison(t.count.comparator,"0",t.count.value),from:{select:[{field:i.aggregateField("count")}],where:n,aggregate:[i.aggregate("count")]}}),t.filters&&t.filters.forEach((function(o){var a,c,s=i.getFieldKeyPathForSource(o.name,t.source);if(o.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT?(a=i.aggregate("count"),c=i.aggregateField("count")):o.modifier===i.RECENCY_FILTERS.MOST_RECENT&&(a=i.aggregate("max",r.FIELDS.TIME),c=i.aggregateField("max",r.FIELDS.TIME)),a){var f=s,l=i.groupField(f);e.push({where:i.fieldComparison(o.comparator,"0",o.value),from:{select:[{field:l}],where:n,groupBy:i.groupBy([f]),aggregate:[a],orderBy:[{field:c,direction:"DESC"}],limit:1}})}else u.push(i.fieldComparison(o.comparator,s,o.value))})),t.pick){if(e.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+o.stringify(t));return[f(t.pick,n,t.source)]}return e.length>0?e:[{where:n}]},i.buildFromSpecV0_2=function(t){!function(t){var n=[];if(void 0===t)throw new Error("rule is undefined");if("object"!=typeof t||null===t)throw new Error("rule is not an Object");"0.2"!==t.version&&n.push('version: not "0.2"'),t.filter&&(Array.isArray(t.filter)?t.filter.forEach((function(t,e){var r=i.validateFieldKeyPathV0_2(t.field,i.FieldPurpose.FILTER);r&&n.push("filter["+e+"]: "+r);var o=i.validateComparatorAndValue(t.comparator,t.value);o&&n.push("filter["+e+"]: "+o)})):n.push("filter: not an array"));var e=[],r=[];t.sort&&(t.reduce&&t.reduce.aggregator&&"nth"!==t.reduce.aggregator&&n.push("sort: superfluous because we can apply aggregator "+o.stringify(t.reduce.aggregator)+" to unsorted items"),Array.isArray(t.sort)?t.sort.forEach((function(t,a){var u=i.validateFieldKeyPathV0_2(t.field,i.FieldPurpose.SORT);u&&n.push("sort["+a+"]: "+u),t.field&&"frequency"===t.field[0]?e.push(t):r.push(t);var c=function(t){var n="direction "+(o.stringify(t)||String(t));if(!["ascending","descending"].includes(t))return n+' is not "ascending" or "descending"'}(t.direction);c&&n.push("sort["+a+"]: "+c)})):n.push("sort: not an array"),e.length&&r.length&&n.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),e.length&&!t.pick&&n.push('sort: sorting by ["frequency"] is impossible because no values have been picked'));if(t.pick){t.reduce&&"count"===t.reduce.aggregator&&n.push('pick: superfluous because we can apply aggregator "count" to raw events');var a=i.validateFieldKeyPathV0_2(t.pick.field);a&&n.push("pick: "+a)}if(t.reduce){var u=t.reduce.aggregator,c="aggregator "+(o.stringify(u)||String(u)),s=t.reduce.n,f="index "+(o.stringify(s)||String(s));["sum","avg","max","min","count","nth"].includes(u)||n.push("reduce: "+c+" is unknown"),["sum","avg","max","min"].includes(u)&&(t.pick||n.push("reduce: "+c+" is impossible to use because no values have been picked")),"nth"===u?(("number"!=typeof s||isNaN(s)||Math.floor(s)!==s||s<0)&&n.push("reduce: "+f+" is not a non-negative integer (mandated by "+c+")"),t.sort||n.push('reduce: aggregator "nth" is meaningless without a specific sort order')):void 0!==s&&n.push("reduce: "+f+" is defined (not mandated by "+c+")")}if(n.length)throw new Error(n.join("\n"))}(t);var n={where:{op:"and",args:(t.filter||[]).map((function(t){return"age"===t.field[0]?i.relativeTimeComparison(t.comparator||"eq",t.value/i.MILLIS_IN_A_DAY):i.fieldComparison(t.comparator||"eq",i.convertFieldKeyPathFromSpecV0_2(t.field),t.value)}))}};if(t.reduce&&"count"===t.reduce.aggregator)return Object.assign(n,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var e=[],r=[];if(t.sort&&(t.sort.forEach((function(t){["ascending","descending"].includes(t.direction)&&(["time","age"].includes(t.field[0])&&r.push(t),"frequency"===t.field[0]&&e.push(t))})),r.length&&!e.length&&(n.orderBy=r.map((function(t){return"time"===t.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===t.direction?"ASC":"DESC"}:"age"===t.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===t.direction?"DESC":"ASC"}:void 0})).filter((function(t){return t})))),t.pick&&t.pick.field){var a=i.convertFieldKeyPathFromSpecV0_2(t.pick.field);if(t.reduce&&["avg","max","min","sum"].includes(t.reduce.aggregator))return Object.assign(n,{aggregate:[{op:t.reduce.aggregator,args:[{field:a}]}],select:[{field:[u.generateAlias(t.reduce.aggregator,a)]}]});n=e.length?Object.assign(n,{groupBy:[{field:a}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===e[0].direction?"ASC":"DESC"}],select:[{field:[a.join(".")]}]}):Object.assign(n,{select:[{field:a}]})}if(t.reduce&&"nth"===t.reduce.aggregator){var c=t.reduce.n;if("number"==typeof c&&c>=0&&Number(c)===Math.floor(Number(c)))return Object.assign(n,{offset:c,limit:1})}return n},i.convertFieldKeyPathFromSpecV0_2=function(t){return"tags"===t[0]&&"revenue"===t[1]?["r"]:[r.FIELDS_V0_2[t[0]]].concat(t.slice(1))},i.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},i.validateFieldKeyPathV0_2=function(t,n){var e="field "+(o.stringify(t)||String(t));if(!Array.isArray(t)||!t.every((function(t){return"string"==typeof t})))return e+" is not an array of strings";if("tags"===t[0]&&t.length>2||"tags"!==t[0]&&t.length>1)return e+" includes too many strings";if("tags"===t[0]&&t.length<2)return e+" does not specify an exact tag";if(t.length<1)return e+" does not specify a top-level field";var a=Object.keys(r.FIELDS_V0_2),u=["age","frequency"];return n===i.FieldPurpose.FILTER&&(a.push("age"),u=["frequency"]),n===i.FieldPurpose.SORT&&(a=["time","age","frequency"],u=["name","type","category","tags"]),u.includes(t[0])?e+" is not supported here":a.includes(t[0])?void 0:e+" is unknown"},i.validateComparatorAndValue=function(t,n){var e="comparator "+(o.stringify(t)||String(t)),i="value "+(o.stringify(n)||String(n));if("string"!=typeof t&&void 0!==t)return e+" is not a string";switch(t){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if("number"!=typeof n)return i+" is not a number (mandated by "+e+")";break;case"in":if(!Array.isArray(n))return i+" is not an array (mandated by "+e+")";break;case"between":if(!(Array.isArray(n)&&2===n.length&&"number"==typeof n[0]&&"number"==typeof n[1]&&n[0]<=n[1]))return i+" is not a pair of increasing numbers (mandated by "+e+")";break;case"regex":if(!("string"==typeof n||Array.isArray(n)&&2===n.length&&"string"==typeof n[0]&&"string"==typeof n[1]))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+e+")";break;case"exists":if(void 0!==n)return i+" is not undefined (mandated by "+e+")";break;default:return e+" is unknown"}}},986:function(t,n,e){var i=e(6592),r=e(7852),o=r.log.bind(r),a=e(8298),u=e(8859).getFieldValue,c=e(192),s=function(t,n,e){if(t.getValueOrDefault)return t.getValueOrDefault(n,e);if(!Array.isArray(n))return e;var i=u(t,n);return void 0===i&&(i=e),i},f=function(t){return"string"==typeof t?t.trim().toLowerCase():t};n.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},n.DEFAULT_FIELD=["*"],n.booleanOperators={eq:function(t){var n=t.map(f);return n[0]==n[1]},is:function(t){return t[0]===t[1]},gt:function(t){return t[0]>t[1]},lt:function(t){return t[0]<t[1]},gte:function(t){return t[0]>=t[1]},lte:function(t){return t[0]<=t[1]},in:function(t){return(t[1]||[]).map(f).includes(f(t[0]))},between:function(t){return t[1][0]<=t[0]&&t[0]<=t[1][1]},contains:function(t){var n=t.map((function(t){return"string"==typeof t?t.toLowerCase():t}));return-1!==(n[0]||"").indexOf(n[1])},regex:function(t){try{var n,e;return"string"==typeof t[1]?(n=t[1],e="i"):(n=t[1][0]||"",e=t[1][1]||""),new RegExp(n,e).test(t[0])}catch(t){return r.error("Rules",'In operator "regex", error: '+(t.message||"invalid RegExp /"+[n,e].join("/"))),!1}},exists:function(t){return void 0!==t[0]},and:function(t){return t.every((function(t){return t}))},or:function(t){return t.some((function(t){return t}))},not:function(t){return!t[0]}},n.arithmeticOperators={"+":function(t){return(t[0]||0)+(t[1]||0)},"-":function(t){return(t[0]||0)-(t[1]||0)},"/":function(t){return(t[0]||0)/(t[1]||1)},"%":function(t){return(t[0]||0)%(t[1]||1)}},n.aggregateOperators={sum:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=s(e[o],i,0);return r},avg:function(t,e){if(0===e.length)return 0;for(var i=t[0]||n.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=s(e[o],i,0);return r/e.length},max:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,o=0;o<e.length;o++)r=Math.max(r,s(e[o],i,Number.NEGATIVE_INFINITY));return r},min:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,o=0;o<e.length;o++)r=Math.min(r,s(e[o],i,Number.POSITIVE_INFINITY));return r},count:function(t,n){return n.length}};var l={now:function(){return a.now()}},d=function(t,e){if(e.hasOwnProperty("value"))return e.value;if(e.hasOwnProperty("field"))return s(t,e.field);if(e.hasOwnProperty("eval"))return e.eval in l?l[e.eval]():void r.error("Rules","Unknown function: "+e.eval);if(e.op){var i,o=(i=e.op)in n.booleanOperators?n.booleanOperators[i]:i in n.arithmeticOperators?n.arithmeticOperators[i]:null;if(o){var a=d.bind(null,t);return o((e.args||[]).map((function(t){return a(t)})),t)}r.error("Rules","Unknown operator: "+e.op)}else r.error("Rules","No operator specified: "+c.stringify(e))};n.generateAlias=function(t,n){return"_"+t+"_"+n.join(".")};n.rewrite=function(t){var e=[],i={};function o(t,a){if(Array.isArray(t)&&("and"!==t[0]&&"or"!==t[0]&&"not"!==t[0]&&r.error("Rules","Unexpected operation "+t[0]+". Continuing optimistically."),t={op:t[0],args:t.slice(1)}),t.hasOwnProperty("field")||t.hasOwnProperty("value")||t.hasOwnProperty("eval"))return t;if(a&&t.op in n.aggregateOperators){var u=(t.args&&t.args[0]||{}).field||n.DEFAULT_FIELD,c=n.generateAlias(t.op,u);return c in i||(e.push({op:t.op,args:t.args}),i[c]=!0),{field:[c]}}for(var s=[],f=t.args||[],l=0;l<f.length;l++)s[l]=o(f[l],a);return{op:t.op,args:s}}var a={};t.hasOwnProperty(n.clause.WHERE)&&(a[n.clause.WHERE]=o(t[n.clause.WHERE],!1)),t.hasOwnProperty(n.clause.HAVING)&&(a[n.clause.HAVING]=o(t[n.clause.HAVING],!0)),(t.hasOwnProperty(n.clause.AGGREGATE)||e.length>0)&&(a[n.clause.AGGREGATE]=(t[n.clause.AGGREGATE]||[]).concat(e));for(var u=[n.clause.GROUP_BY,n.clause.ORDER_BY,n.clause.SELECT,n.clause.OFFSET,n.clause.LIMIT],c=0;c<u.length;c++)t.hasOwnProperty(u[c])&&(a[u[c]]=t[u[c]]);return t.hasOwnProperty(n.clause.FROM)&&(a[n.clause.FROM]=n.rewrite(t[n.clause.FROM])),a};var v=function(t,e){e=e||0;var i=[];if(t.hasOwnProperty(n.clause.WHERE)?t[n.clause.WHERE].op?t[n.clause.WHERE].op in n.booleanOperators||i.push("Non-boolean WHERE clause operator"):i.push("Missing WHERE clause operator"):i.push("Missing WHERE clause"),!t.hasOwnProperty(n.clause.HAVING)||(t[n.clause.HAVING].op?t[n.clause.HAVING].op in n.booleanOperators||i.push("Non-boolean HAVING clause operator"):i.push("Missing HAVING clause operator")),t.hasOwnProperty(n.clause.GROUP_BY)&&!t.hasOwnProperty(n.clause.AGGREGATE)&&i.push("No AGGREGATE clause specified with GROUP_BY clause"),t.hasOwnProperty(n.clause.SELECT)){var r=t[n.clause.SELECT];if(Array.isArray(r))for(var o=0;o<r.length;o++)r[o].op&&r[o].op in n.aggregateOperators&&i.push('In SELECT clause, aggregate operator "'+r[o].op+'" specified in selector at index '+o);else i.push("SELECT clause must be an array")}if(t.hasOwnProperty(n.clause.OFFSET)){var a=t[n.clause.OFFSET];("number"!=typeof a||Number(a)<0||Number(a)!==Math.floor(Number(a)))&&i.push("OFFSET must be a non-negative integer")}if(t.hasOwnProperty(n.clause.LIMIT)){var u=t[n.clause.LIMIT];("number"!=typeof u||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&i.push("LIMIT must be a non-negative integer")}return e>0&&(i=i.map((function(t){return"Sub-rule "+e+": "+t}))),t.hasOwnProperty(n.clause.FROM)&&(i=i.concat(v(t[n.clause.FROM],e+1))),i},h=function(t,e){var i,a,u,f=e;if(t.hasOwnProperty(n.clause.FROM)&&(r.debug("Evaluating FROM clause:",t[n.clause.FROM]),f=h(t[n.clause.FROM],f),r.debug("Results after FROM:",f)),r.debug("Evaluating WHERE clause:",t[n.clause.WHERE]),f=f.filter((function(e){return d(e,t[n.clause.WHERE])})),r.debug("Results after WHERE:",f),t.hasOwnProperty(n.clause.AGGREGATE)){r.debug("Evaluating AGGREGATE clause:",t[n.clause.AGGREGATE]);var l=function(t,n){var e={};if(void 0===t||!Array.isArray(t)||0===t.length)return e["*"]={fieldValues:{},events:n},e;for(var i=t.map((function(t){return t.field})),r=0;r<n.length;r++){for(var o=n[r],a=[],u={},f=0;f<i.length;f++){var l=i[f],d=s(o,l),v=l.join(".");u[v]=d,a.push(encodeURIComponent(v)+"="+encodeURIComponent(c.stringify(d)))}var h=a.join("&");e.hasOwnProperty(h)||(e[h]={fieldValues:u,events:[]}),e[h].events.push(o)}return e}(t[n.clause.GROUP_BY],f);f=function(t,n){var e=[];return Object.keys(t).forEach((function(i){var r=t[i],o=Object.assign({},r.fieldValues),a=n[i]||{};Object.assign(o,a),e.push(o)})),e}(l,(i=t[n.clause.AGGREGATE],a=l,u={},Object.keys(a).forEach((function(t){var e=a[t];u[t]={};for(var o=0;o<i.length;o++){var c=i[o],s=c.op;if(s in n.aggregateOperators){var f=(c.args&&c.args[0]||{}).field||n.DEFAULT_FIELD,l=n.generateAlias(s,f),d=n.aggregateOperators[s]([f],e.events);u[t][l]=d}else r.error("Rules","Unknown aggregate operator "+s)}})),u)),r.debug("Results after AGGREGATE:",f)}t.hasOwnProperty(n.clause.HAVING)&&(r.debug("Evaluating HAVING clause:",t[n.clause.HAVING]),f=f.filter((function(e){return d(e,t[n.clause.HAVING])})),r.debug("Results after HAVING:",f)),t.hasOwnProperty(n.clause.ORDER_BY)&&(r.debug("Evaluating ORDER_BY clause:",t[n.clause.ORDER_BY]),f=function(t,n){return Array.isArray(t)?0===t.length?n:n.sort((function(n,e){for(var i=0;i<t.length;i++){var r=t[i],o="ASC"===(r.direction||"ASC")?1:-1,a=r.field,u=s(n,a,0),c=s(e,a,0);if(u<c)return-o;if(u>c)return o}return 0})):(o("Rules","groupBy rule must be an array"),n)}(t[n.clause.ORDER_BY],f),r.debug("Results after ORDER_BY:",f));var v,p=0;return t.hasOwnProperty(n.clause.OFFSET)&&(r.debug("Evaluating OFFSET clause:",t[n.clause.OFFSET]),p=Number(t[n.clause.OFFSET])),t.hasOwnProperty(n.clause.LIMIT)&&(r.debug("Evaluating LIMIT clause:",t[n.clause.LIMIT]),v=p+Number(t[n.clause.LIMIT])),(p>0||void 0!==v)&&(f=f.slice(p,v),r.debug("Results after OFFSET/LIMIT:",f)),t.hasOwnProperty(n.clause.SELECT)&&(r.debug("Evaluating SELECT clause:",t[n.clause.SELECT]),f=function(t,n){return n.map((function(n){return t.map((function(t){return d(n,t)}))}))}(t[n.clause.SELECT],f),r.debug("Results after SELECT:",f)),f};n.execute=function(t,e){t=n.rewrite(t),r.shouldLog(i.LogLevel.DEBUG)&&r.groupCollapsed("Evaluating Behavioral Rule"),r.debug("Rule:",t,c.stringify(t)),r.debug("Events:",e);var o=v(t);if(o.length>0)throw new Error("Rule "+c.stringify(t)+" has violations: "+o.join("\n"));var a=h(t,e);return r.debug("Rule result:",a),r.shouldLog(i.LogLevel.DEBUG)&&r.groupEnd(),a},n.isSatisfied=function(t,e){try{return n.execute(t,e).length>0}catch(n){return r.error("Rules","Error "+n.toString()+" while evaluating rule "+c.stringify(t)),!1}}},9728:function(t,n,e){t.exports=function(t){t.registerDependency("sources/browser_id",e(4977)),t.registerVisitorProfileProvider(e(381)),t.registerVisitorProfileProvider(e(4138)),t.registerAudienceMatcher("browser_version",e(5374))}},5374:function(t,n,e){var i=e(2424).G;t.exports={fieldsNeeded:["browserVersion","browserId"],match:function(t,n){var e=n.value,r=t.browserId,o=t.browserVersion;if(0===e.indexOf(r)){var a=e.substr(r.length);return 0===i(o,a)}return!1}}},381:function(t){t.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(t){return t.getId()}]}},4138:function(t){t.exports={provides:"browserVersion",getter:["sources/browser_id",function(t){return t.getVersion()}]}},4977:function(t,n,e){var i=e(3498);n.getId=function(){return i.get().browser.id},n.getVersion=function(){return i.get().browser.version}},2163:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9298)),t.registerAudienceMatcher("campaign",e(7701))}},7701:function(t,n,e){var i=e(2973);t.exports={fieldsNeeded:["campaign"],match:function(t,n){return i.hasMatch(n.value,n.match,t.campaign)}}},9298:function(t,n,e){var i=e(6022);t.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}},8983:function(t,n,e){var i=e(192),r=e(8260),o=e(7852),a=e(4285),u=e(8264);n.getCmabPredictionUrl=function(){return"https://prediction.cmab.optimizely.com/predict"},n.getCmabPredictionUrlForExperiment=function(t){return t?n.getCmabPredictionUrl()+"/"+t:""},n.createPayload=function(t,n){var e=t.variations.map((function(t){return t.id})),i=u.getVisitorCmabAttributesForExperiment(t),r=u.getDcpCustomerIds(),o=u.getDcpServiceId();return{instances:[{visitorId:a.getCurrentId(),experimentId:t.id,cmabUUID:n,variationIds:e,attributes:i,dcpCustomerIds:r,dcpServiceId:o}]}},n.parseApiResponse=function(t){var n=null;try{n=i.parse(t)}catch(t){return o.error("CMAB API / Error parsing response:",t),null}return n&&n.predictions&&0!==n.predictions.length?n.predictions[0].variation_id.toString():(o.debug("CMAB API / No predictions found in API response",n),null)},n.validateVariationId=function(t,n){return t&&n.variations.find((function(n){return n.id===t}))?(o.debug("CMAB API / Variation ID:",t,"from API response found in experiment:",n.id),t):(o.debug("CMAB API / Variation ID:",t,"from API response not found in experiment:",n.id),null)},n.handleCmabApiResponse=function(t,e){if(200!==t.status)return o.error("CMAB API / API call failed with status:",t.status,t.statusText),null;o.debug("CMAB API / API call successful:",t.responseText);var i=n.parseApiResponse(t.responseText);return n.validateVariationId(i,e)},n.makeSyncApiCallWithXHR=function(t,e){o.debug("CMAB API / SYNC / Making a synchronous API call to get variation.");try{var r=n.createPayload(t,e),a=n.getCmabPredictionUrlForExperiment(t.id),u=new XMLHttpRequest;return u.open("POST",a,!1),u.send(i.stringify(r)),n.handleCmabApiResponse(u,t)}catch(t){return o.error("CMAB API / SYNC / API call encountered an error:",t),null}},n.makeAsyncApiCall=function(t,e){o.debug("CMAB API / ASYNC / Making an asynchronous API call to get variation.");var i=n.createPayload(t,e),a=n.getCmabPredictionUrlForExperiment(t.id);return r.request({url:a,contentType:"application/json",method:"POST",data:i})}},2855:function(t,n,e){var i=e(7852),r=e(8264),o=e(8983),a=e(4855);n.isCmabEnabled=function(){return!0},n.isExperimentSyncApiEnabled=function(t){return!0},n.defaultToSnippetBucketing=function(t,n,e){i.debug("CMAB / Defaulting to snippet bucketing with variation:",n,"for experiment:",t.id),r.setCmabVariationDataInVisitorStore(t,n,e)},n.processCmabExperiment=function(t,e){if(!n.isCmabEnabled())return i.debug("CMAB / Feature flag is disabled. Defaulting to snippet bucketing with variation:",e,"for experiment:",t.id),e;if(i.debug("CMAB / Feature flag is enabled. Processing CMAB for experiment:",t.id),r.activateTimeoutForNonBucketedCmabExperiments(t),!r.isCmabExperiment(t))return e;var u=r.getCmabVariationDataFromVisitorStore(t);if(!r.isCmabTimeout(t,u))return u.variationId;a.startCmabApiCallPerformanceTimer(t.id);var c=null,s=r.generateCmabUUID();if(n.isExperimentSyncApiEnabled(t))try{return(c=o.makeSyncApiCallWithXHR(t,s))?(r.setCmabVariationDataInVisitorStore(t,c,s),a.endCmabApiCallPerformanceTimer(t.id),c):(n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),e)}catch(r){return i.error("CMAB API / SYNC / API call failed with error:",r),n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),null}return o.makeAsyncApiCall(t,s).then((function(u){return(c=o.handleCmabApiResponse(u,t))?(i.debug("CMAB API / ASYNC / Variation:",c,"for experiment:",t.id),r.setCmabVariationDataInVisitorStore(t,c,s),a.endCmabApiCallPerformanceTimer(t.id),c):(n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),e)}),(function(r){return i.error("CMAB API / ASYNC / API call failed with error:",r),n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),null})),n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),e},n.getCmabUUIDAndUpdateSessionTimeout=function(t,n){var e=r.getCmabUUIDFromVisitorStore(t,n);return r.updateCmabTimeoutInVisitorStore(t,n),e}},4855:function(t,n,e){e(5010),e(7852);n.startCmabApiCallPerformanceTimer=function(t){0},n.endCmabApiCallPerformanceTimer=function(t){0}},8264:function(t,n,e){var i=e(8275),r=i.omit,o=i.omitBy,a=e(1691),u=e(192),c=e(2025),s=e(9899),f=e(4285),l=e(7852),d=e(6592),v=e(5914),h=c.get("stores/visitor"),p=c.get("stores/plugins"),g=c.get("stores/global"),m=c.get("stores/layer");n.generateCmabUUID=function(){return s.generate()},n.getCmabLayerIdFromExperiment=function(t){return t.experimentMetadata&&t.experimentMetadata.layerId||t.id},n.isCmabExperiment=function(t){var n=t.experimentMetadata&&t.experimentMetadata.allocationPolicy;return n?n===d.AllocationPolicyEnum.CMAB:(l.debug("No allocation policy found in metadata for experiment:",t.id),!1)},n.isVisitorInHoldback=function(t){if(g.isGlobalHoldback())return l.debug("CMAB / Visitor is in global holdback, no timeout"),!0;var e=n.getCmabLayerIdFromExperiment(t),i=m.getLayerState(e);return!!(i&&i.decision&&i.decision.isLayerHoldback)&&(l.debug("CMAB / Visitor is in layer holdback, no timeout"),!0)},n.isCmabTimeout=function(t,e){if(!n.isCmabVariationStorageDataValid(e))return l.debug("CMAB / Timeout CMAB Storage Variation Data is invalid"),!0;if(n.isVisitorInHoldback(t))return!1;var i=e.variationId;return t.variations.find((function(t){return t.id===i}))?n.hasSessionOrAbsoluteTimeoutOccurred(e)?(l.debug("CMAB / Timeout Session or absolute timeout occurred:",e.cmabUUID),!0):(l.debug("CMAB / No timeout happened for:",e.cmabUUID),!1):(l.debug("CMAB / Timeout Variation ID:",i,"not found in experiment:",t.id),!0)},n.hasSessionOrAbsoluteTimeoutOccurred=function(t){if(!n.isCmabVariationStorageDataValid(t))return l.debug("CMAB / Timeout CMAB Storage Variation Data is invalid"),!0;var e=(new Date).getTime();new Date(t.stSessionTimeout).getTime();return e-new Date(t.stAbsoluteTimeout).getTime()>864e5},n.isCmabVariationStorageDataValid=function(t){if(!t)return!1;for(var n=["variationId","visitorId","cmabUUID","stSessionTimeout","stAbsoluteTimeout","userAttributeHash"],e=0;e<n.length;e++){var i=n[e];if(!t[i])return l.debug("CMAB / Storage data not found: "+i+" is missing"),!1}return!0},n.activateTimeoutForNonBucketedCmabExperiments=function(t){var e=n.getCmabLayerIdFromExperiment(t),i=t.id;l.debug("CMAB / Visitor is bucketed into experiment id:",i+" from layer id:",e);var a=f.getContextualMabMap();if(a&&a[e]){var u=a[e];l.debug("CMAB / All CMAB experiments found for the layer id:",e,"are:",u),l.debug("CMAB / Excluding the currently bucketed experiment id: ",i," from all CMAB experiments found for the current layer id: ",e);var c=r(u,[i]);c=o(c,(function(t){return t.isTimeout})),l.debug("CMAB / Non-bucketed CMAB experiments which will be timed out:",c),Object.keys(c).forEach((function(t){var n=c[t];n.isTimeout=!0,f.updateContextualMabMap(e,t,n)})),f.persistContextualMabMap()}else l.debug("CMAB / No CMAB experiments found for the current layer id:",e)},n.getCmabUUIDFromVisitorStore=function(t,n){if(!n||!t)return null;var e=f.getContextualMabMap();return e&&e[t]&&e[t][n]?e[t][n].cmabUUID:null},n.updateCmabTimeoutInVisitorStore=function(t,e){var i;if(!e||!t)return null;var r=f.getContextualMabMap();if(null==r||null==(i=r[t])?void 0:i[e]){var o=r[t][e];o.isTimeout||n.hasSessionOrAbsoluteTimeoutOccurred(o)||(o.stSessionTimeout=(new Date).toISOString(),f.updateContextualMabMap(t,e,o),f.persistContextualMabMap())}},n.getCmabVariationDataFromVisitorStore=function(t){var e,i=n.getCmabLayerIdFromExperiment(t),r=f.getContextualMabMap();if(!(null==r||null==(e=r[i])?void 0:e[t.id]))return l.debug("CMAB / No CMAB store found for experiment:",t.id),null;l.debug("CMAB / CMAB store found for experiment:",t.id);var o=r[i][t.id];return l.debug("CMAB / Contextual MAB Variation Data:",o),o},n.setCmabVariationDataInVisitorStore=function(t,e,i){l.debug("CMAB / Setting CMAB store for experiment:",t.id+" with variation:",e+" and cmabUUID:",i);var r=(new Date).toISOString(),o=n.getCmabLayerIdFromExperiment(t),a=n.getVisitorAttributesHash(t),u={variationId:e,visitorId:f.getCurrentId(),cmabUUID:i,stSessionTimeout:r,stAbsoluteTimeout:r,userAttributeHash:a,isTimeout:!1};f.updateContextualMabMap(o,t.id,u),f.persistContextualMabMap()},n.getStringifiedValue=function(t){if("string"==typeof t)return t;var n="";try{n=u.stringify(t)}catch(n){l.error("CMAB / Failed to stringify value for attributes:",t,n)}return n},n.getVisitorCmabAttributesForExperiment=function(t,i){var r;void 0===i&&(i=!0);var o=[],a=p.getAllPlugins(d.PluginTypes.audienceMatchers);if(!(null==t||null==(r=t.experimentMetadata)?void 0:r.cmabAttributes))return o;var u=t.experimentMetadata.cmabAttributes,c=u.customAttributes,s=u.standardAttributes;if(c.forEach((function(t){var e,i=(null==(e=h.getAttribute(["custom",t.id]))?void 0:e.value)||"";i=n.getStringifiedValue(i),o.push({id:t.id,type:t.type,value:i,client_api_name:t.clientApiName})})),s.forEach((function(t){var e,i,r=(null==(e=a[t.id])||null==(i=e.fieldsNeeded)?void 0:i[0])||t.id,u=h.getAttribute(r)||"";u=n.getStringifiedValue(u),o.push({id:t.id,type:t.type,value:u})})),i){var f=e(5560),v=t.experimentMetadata.cmabAttributes.vbaAttributes;if(v&&v.length)try{var g=e(8620).getEvents();g.length>=e(4938).MAX_EVENTS&&l.warn("CMAB / VBA / Behavior store is full; counts may miss evicted events"),o=o.concat(f.buildVbaFeatures(v,g,e(8298).now()))}catch(t){l.warn("CMAB / VBA / Error building visitor behavior attributes",t)}}return l.debug("CMAB / Current Visitor CMAB Attributes for Experiment:",t.id,"are:",o),o},n.generateAttributesHash=function(t){return a.hashToHex(a.toByteString(u.stringify(t)),a.Seed.BEHAVIOR_EVENT)},n.getVisitorAttributesHash=function(t){var e=n.getVisitorCmabAttributesForExperiment(t,!1);return n.generateAttributesHash(e)},n.hasAttributesChanged=function(t,e){var i=n.getVisitorAttributesHash(t);return i!==e.userAttributeHash&&(l.debug("CMAB / User attributes hash has changed from:",e.userAttributeHash," to ",i),!0)},n.getDcpCustomerIds=function(){var t=g.getDCPKeyfieldLocators(),n=f.getCurrentId();return v.getCurrentAliases(t,n)},n.getDcpServiceId=function(){return g.getDCPServiceId()}},5560:function(t,n,e){var i=e(1489),r=e(7852),o=Object.freeze([]);function a(t,n){return t&&"function"==typeof t.getValueOrDefault?t.getValueOrDefault([n]):t&&t[n]}function u(t){return a(t,i.FIELDS.TYPE)}function c(t){return a(t,i.FIELDS.TIME)}function s(t,n){return(t||"")+"\n"+n}n.buildVbaFeatures=function(t,n,e){for(var f=function(t){for(var n=Object.create(null),e=0;e<t.length;e++){var r=a(t[e],i.FIELDS.NAME),o=c(t[e]);if("string"==typeof r&&"number"==typeof o)for(var f=u(t[e]),l=f?[s("",r),s(f,r)]:[s("",r)],d=0;d<l.length;d++)n[l[d]]||(n[l[d]]=[]),n[l[d]].push(o)}return n}(n||[]),l=[],d=0;d<t.length;d++){var v=t[d];if(v&&"string"==typeof v.featureName&&v.featureName){var h=v.vbaWindow;if("number"!=typeof h||!isFinite(h)||h%1!=0||h<=0)r.warn("CMAB / VBA / skipping",v.featureName,"with window:",v.vbaWindow);else{for(var p=e-864e5*h,g=f[s(v.vbaKind,v.id)]||o,m=0,b=0;b<g.length;b++)g[b]>p&&g[b]<=e&&m++;l.push({id:v.featureName,type:"visitor_behavior_attribute",value:m})}}else r.warn("CMAB / VBA / skipping attribute with no featureName:",v)}return l}},9004:function(t,n,e){t.exports=function(t){t.registerAudienceMatcher("code",e(8937))}},8937:function(t,n,e){var i=e(8484);n.fieldsNeeded=[],n.match=function(t,n){if(void 0===n.value)return!0;if("function"==typeof n.value)try{return Boolean(i.apply(n.value))}catch(t){return!1}else try{return Boolean(i.eval(n.value))}catch(t){return!1}}},2085:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(5532));var n=e(4417);t.registerAudienceMatcher("custom_attribute",n),t.registerAudienceMatcher("custom_dimension",n)}},4417:function(t,n,e){var i=e(2973);n.match=function(t,n){var e;return t.custom&&(e=t.custom[n.name]),"object"==typeof e&&null!==e&&(e=e.value),i.hasMatch(n.value,n.match,e)}},5532:function(t,n,e){var i=e(6592),r=e(7852),o=e(2025).get("stores/dimension_data");t.exports={provides:"custom",attributionType:i.AttributionTypes.LAST_TOUCH,restorer:function(t){return Object.keys(t).reduce((function(n,e){var i=t[e],a=e,u=o.getByApiName(e),c=o.getById(e);return"object"!=typeof i||null===i?(r.error('Unable to restore custom attribute "'+e+'" because value is not an object'),n):(!i.id&&u&&(c=u,a=u.id,Object.assign(i,{id:c.segmentId||c.id})),!i.name&&c&&c.apiName&&(i.name=c.apiName),i.id||c||r.warn("Unable to determine ID for custom attribute:",e,"; segmentation is disabled."),n[a]=i,n)}),{})},shouldTrack:!0}},5914:function(t,n,e){var i=e(6022),r=e(6278),o=e(7852),a=e(9454),u="cookie",c="js_variable",s="query_param",f="uid";n.getCurrentAliases=function(t,n){var e={};return t.forEach((function(t){if(!t.is_optimizely){var l=t.dcp_datasource_id,d=t.type,v=t.name||"";if(l){var h=null;switch(d){case u:h=r.get(v);break;case c:try{h=a.getGlobal(v)}catch(t){o.warn("Failed getting global DCP keyfieldLocator:",v)}break;case s:h=i.getQueryParamValue(v);break;case f:h=n}("number"==typeof h||"string"==typeof h)&&(e[l]=h)}else o.error("DCP / No DCP datasource id specified")}})),e}},6591:function(t,n,e){t.exports=function(t){t.registerDependency("sources/device",e(8822)),t.registerVisitorProfileProvider(e(2422)),t.registerAudienceMatcher("device",e(1125))}},1125:function(t){t.exports={fieldsNeeded:["device"],match:function(t,n){return t.device===n.value}}},2422:function(t){t.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(t){return t.getDevice()}]}},8822:function(t,n,e){var i=e(3498);n.getDevice=function(){var t=i.get().device;return"unknown"!==t.model?t.model:"tablet"===t.type?"tablet":t.isMobile?"mobile":"desktop"}},2452:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(7726)),t.registerAudienceMatcher("device_type",e(9857))}},9857:function(t){t.exports={fieldsNeeded:["device_type"],match:function(t,n){return t.device_type===n.value}}},7726:function(t,n,e){var i=e(3498);t.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var t=i.get().device;switch(t.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return t.type;default:return"other"}}]}},4969:function(t,n,e){t.exports=function(t){t.registerDependency("sources/odds",e(8322)),t.registerVisitorProfileProvider(e(7465)),t.registerAudienceMatcher("list",e(2777))}},2777:function(t,n,e){var i=e(2973);n.fieldsNeeded=["lists"],n.match=function(t,n){var e=(t.lists||{}).values;if(!e)return!1;var r=e[n.name];return!1===r&&(r=null),i.hasMatch(n.value,n.match,r)}},7465:function(t,n,e){var i=e(6278),r=e(6592),o=e(7852),a=e(4618),u=e(9454);t.exports={provides:"lists",isAsync:!0,getter:["stores/global","sources/odds",function(t,n){return function(e,c){var s=t.getListTargetingKeys(),f=(e()||{}).metadata||{},l=s.reduce((function(t,n){var e=function(t){var n,e=!1;switch(t.type){case r.ListTargetingKeyTypes.QUERY:n=a.getQueryParamValue(t.key),e=!0;break;case r.ListTargetingKeyTypes.COOKIE:n=i.get(t.key,!1),e=!0;break;case r.ListTargetingKeyTypes.JS_VARIABLE:null!=(n=u.getGlobal(t.key))&&"string"!=typeof n&&"boolean"!=typeof n&&"number"!=typeof n&&(o.warn("List locator value must be string, bool, or Number. Omitting value for",t.key),n=void 0);break;default:throw new Error("Unknown list targeting key type: "+t.type)}if(null==n)return;if(n=String(n),e||(n=encodeURIComponent(n)),n.length>100)return void o.warn("Withholding overlong value for",t.name,"(type: "+t.type+")");return n}(n),s=[n.type,n.key].join("_");return f[s]!==e&&c(void 0),e&&(t[s]=e),t}),{});return n.fetchListMemberships(t.getProjectId(),l)}}]}},8322:function(t,n,e){var i=e(5192),r=e(8130).v,o=e(192),a=e(6761).Promise,u=e(4618),c=e(8260),s=n.Error=r("ListTargetingError");function f(t){return c.request({url:t}).then((function(n){i.resolveRequest(t,o.parse(n.responseText))})).catch(i.rejectRequest.bind(null,t))}n.fetchListMemberships=function(t,e){var r=function(t,e){if(null===n.ODDS_URL)return null;var i={project:t};return Object.keys(e).forEach((function(t){var n=e[t];i[encodeURIComponent(t)]=n})),n.ODDS_URL+"?"+u.queryStringFromMap(i)}(t,e);return r?i.makeAsyncRequest(r,f.bind(null,r)).then((function(t){return{values:t.lists,metadata:e}}),(function(t){throw new s("Error getting data: "+(t.statusText||"Could not contact server"))})):a.reject(new s("Unknown list targeting endpoint"))},n.ODDS_URL="https://tapi.optimizely.com/api/js/odds/project/22220670139"},39:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(8511)),t.registerAudienceMatcher("query",e(4127))}},4127:function(t,n,e){var i=e(2973);n.fieldsNeeded=["queryParams"],n.match=function(t,n){var e=t.queryParams.find((function(t){return t[0]===n.name}));return i.hasMatch(n.value,n.match,e?e[1]:null)}},8511:function(t,n,e){var i=e(6022);t.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}},6917:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9732)),t.registerAudienceMatcher("referrer",e(8881))}},8881:function(t,n,e){var i=e(6582);n.fieldsNeeded=["referrer"],n.match=function(t,n){return null!==t.referrer&&i(t.referrer,n)}},9732:function(t,n,e){var i=e(1019),r=e(3272);t.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var t=r.getReferrer()||i.getReferrer();return""===t&&(t=null),t}]}},945:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(3474)),t.registerAudienceMatcher("source_type",e(9007))}},9007:function(t,n,e){var i=e(2973);n.fieldsNeeded=["source_type"],n.match=function(t,n){return i.hasMatch(n.value,n.match,t.source_type)}},3474:function(t,n,e){var i=e(6022),r=e(1019),o=e(3272),a=e(327),u=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/","https://(www)?\\.google\\..*?/?$","https://search\\.yahoo\\..*?/?$","https://(www)?\\.bing\\..*?/?$"];t.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(t,n){var e,c=t(),s=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("utm_campaign")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var t=o.getReferrer()||r.getReferrer(),n=0;n<u.length;n++){var e=u[n];if(t.match(e))return"search"}return t&&a.guessDomain(t)!==a.guessDomain(i.getUrl())?"referral":"direct"}();e=s,(!c||"direct"!==e)&&n(s)}}]}},2819:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(1708)),t.registerVisitorProfileProvider(e(5435)),t.registerAudienceMatcher("time_and_day",e(2117))}},2117:function(t,n,e){var i=e(9665);n.fieldsNeeded=["currentTimestamp"],n.match=function(t,n){return i.test(n.value,new Date(t.currentTimestamp))}},1708:function(t,n,e){var i=e(8298);t.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}},5435:function(t){t.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}},9665:function(t,n){function e(t){var n=t.split(":");if(2!==n.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+t);return 60*parseInt(n[0],10)+parseInt(n[1],10)}n.test=function(t,n){var i=function(t){var n=t.split("_");if(3!==n.length)throw new Error("Invalid time and day string "+t);var e=n[2].split(",");return{start_time:n[0],end_time:n[1],days:e}}(t),r=e(i.start_time),o=e(i.end_time),a=60*n.getHours()+n.getMinutes(),u=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][n.getDay()];return a>=r&&a<=o&&i.days.includes(u)}},1823:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9078))}},9078:function(t){t.exports={provides:"visitorId",getter:["stores/visitor_id",function(t){return t.getRandomId()}]}},9807:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.omit,a=i.pick,u=e(8841),c=e(9899),s=e(136),f=e(8130).v,l=e(192),d=e(7852),v=e(6938),h=e(4285),p=e(9454),g=e(8260),m=e(2025),b=(e(1019),e(7566)),_=e(3111),y=e(409),w=m.get("stores/global"),E=m.get("stores/tracker_optimizely"),I=e(2855),A=n.Error=f("OptimizelyTrackerError"),T="client_activation",O="campaign_activated",S="view_activated",k={revenue:{validate:L,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:L,sanitize:Math.floor,excludeFeature:!0},value:{validate:L,sanitize:function(t){return t}}},R="AUTO",C=[function(){return function(t){V(function(t){var n=Object.assign({entity_id:t.pageId,key:t.pageApiName,timestamp:t.timestamp,uuid:t.eventId,type:S},j(t.eventTags));return n}(t),t.userFeatures,Q(t.layerStates))}}],N=[function(){return function(t){!function(t){var n=null!==w.getAnonymizeIP()?w.getAnonymizeIP():void 0,e={account_id:t.accountId,anonymize_ip:n,client_name:t.clientName,client_version:t.clientVersion,project_id:t.projectId,visitors:[]};e.revision=t.revision,e.enrich_decisions=!0;var i={session_id:F(t.sessionId),visitor_id:t.visitorId,attributes:[],snapshots:[]},r=Q(t.layerStates);y.dispatch(s.REGISTER_TRACKER_VISITOR,{data:e,visitor:i,decisions:r}),J()}(t),V(function(t){return{entity_id:null,type:T,uuid:t.eventId,timestamp:t.timestamp}}(t),t.userFeatures,Q(t.layerStates))}}],D=[function(){return function(t){var n;V((n=t,Object.assign({entity_id:n.eventEntityId,key:n.eventApiName,timestamp:n.timestamp,uuid:n.eventId,type:n.eventCategory,properties:M(n.eventProperties)},j(n.eventTags))),t.userFeatures,Q(t.layerStates))}}],x=[function(){return function(t){var n;V((n=t,Object.assign({entity_id:n.eventEntityId,key:n.eventApiName,timestamp:n.timestamp,uuid:n.eventId,type:n.eventCategory},j(n.eventTags))),t.userFeatures,Q(t.layerStates))}}];function j(t){var n=function(t,n,e){try{P(e),t[n]=e}catch(t){u.emitError(new A("Bad value for eventTags["+n+"]: "+t.message))}return t},e=Object.keys(k),i=o(t,e),r=a(t,e),c=Object.keys(i).reduce((function(t,e){return n(t,e,i[e])}),{}),s=Object.keys(r).reduce((function(t,e){var i=r[e],o=k[e];o.excludeFeature||n(c,e,i);try{o.validate(i),t[e]=o.sanitize(i),c[e]=t[e]}catch(t){u.emitError(new A("Bad value for eventMetrics["+e+"]: "+t.message))}return t}),{});return s.tags=c,s}function M(t){var n={},e={},i=0;for(var r in t){var o=t[r];"object"==typeof o&&null!==o?e[r]=o:i<15?(n[r]=o,i++):e[r]=o}return Object.keys(e).length>0&&d.log("Custom event properties dropped (complex values, or over the 15-property limit). The following properties were not pushed",e),n}function P(t){if(null==t)throw new Error("Feature value is null");if("object"==typeof t){var n;try{n=l.stringify(t)}catch(t){}throw new Error('Feature value is complex: "'+n)}}function L(t){if(null==t)throw new Error("Metric value is null");if("number"!=typeof t)throw new Error("Metric value is not numeric")}function U(t){return(t||[]).reduce((function(t,n){try{P(n.value),t.push({entity_id:n.id||null,key:n.name,type:n.type,value:n.value})}catch(t){d.warn("Error evaluating user feature",n,t)}return t}),[])}function V(t,n,e){y.dispatch(s.REGISTER_TRACKER_EVENT,{event:t,decisions:e}),B(n),J()}function B(t){var n=U(t);y.dispatch(s.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:n})}function F(t){return R}function z(){if(E.canSend()){var t=E.hasEventsToSend(),n=E.hasPreviousBatchesToSend();t||n?(n&&(E.getPreviousBatches().forEach(q),y.dispatch(s.RESET_TRACKER_PREVIOUS_BATCHES)),t&&(y.dispatch(s.FINALIZE_BATCH_SNAPSHOT),q(E.getEventBatch()),y.dispatch(s.RESET_TRACKER_EVENTS))):d.debug("Not sending events because there are no events to send")}else d.debug("Not sending events (holding)")}function q(t){d.debug("Sending ticket:",t);var n=c.generate(),e={url:"https://logx.optimizely.com/v1/events",method:"POST",data:G(t)};E.shouldUseBeacon()?g.sendBeacon(e,n):g.retryableRequest(e,n)}function G(t){return Object.assign({},a(t,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:t.visitors.map(H)})}function H(t){return{visitor_id:t.visitor_id,session_id:R,attributes:t.attributes.map(Y),snapshots:t.snapshots.map(K)}}function Y(t){return X(t,{entity_id:"e",key:"k",type:"t",value:"v"})}function K(t){var n=t.events;return n=function(t){var n=t.reduce((function(t,n){var e;if(t[e=n.type===S&&r(n.tags)&&r(a(n,Object.keys(k)))?n.type:n.uuid]){var i=t[e].timestamp;n.timestamp>i&&(i=n.timestamp),t[e]=Object.assign({},t[e],{key:t[e].key+"-"+(n.key||""),entity_id:t[e].entity_id+"-"+n.entity_id,timestamp:i})}else t[e]=n;return t}),{});return Object.values(n)}(n),{activationTimestamp:w.getActivationTimestamp(),decisions:t.decisions.map($),events:n.map(W)}}function $(t){var n=X(t,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"});return n.m=t.metadata?X(t.metadata,{cmab_uuid:"cmab_uuid"}):{},n}function W(t){return t.key===O&&(t.type=O,delete t.key),X(t,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",properties:"p",timestamp:"t",uuid:"u",value:"v",type:"y"})}function X(t,n){return Object.keys(t).reduce((function(e,i){var r=t[i];return i in n&&(e[n[i]||i]=r),e}),{})}function J(){if(E.shouldBatch()){if(!E.isPolling()){p.setTimeout((function t(){z(),E.isPolling()&&p.setTimeout(t,1e3)}),1e3),y.dispatch(s.SET_TRACKER_POLLING,!0),p.setTimeout((function(){y.dispatch(s.SET_TRACKER_BATCHING,!1),y.dispatch(s.SET_TRACKER_POLLING,!1)}),1e4)}}else z()}function Q(t){return t.map((function(t){var n=I.getCmabUUIDAndUpdateSessionTimeout(t.layerId,t.decision.experimentId),e=n?{cmab_uuid:n}:{};return{campaign_id:t.layerId,experiment_id:t.decision.experimentId,variation_id:t.decision.variationId,is_campaign_holdback:t.decision.isLayerHoldback,metadata:e}}))}function Z(){var t=E.getPersistableState();if(t)try{d.debug("Persisting pending batch:",t),h.persistTrackerOptimizelyData(t),y.dispatch(s.SET_TRACKER_DIRTY,!1)}catch(t){d.debug("Failed to persist pending batch:",t)}}var tt={trackLayerDecision:function(t){t.isLayerConcluded?d.debug("Layer is already concluded, skipping decision tracking"):t.timing===v.TrackLayerDecisionTimingFlags.postRedirectPolicy?function(t){var n=U(t.userFeatures),e={account_id:t.accountId,anonymize_ip:t.anonymizeIP,client_name:t.clientName,client_version:t.clientVersion,project_id:t.projectId,visitors:[{session_id:F(t.sessionId),visitor_id:t.visitorId,attributes:n,snapshots:[{decisions:[{campaign_id:t.layerId,experiment_id:t.experimentId,variation_id:t.variationId,is_campaign_holdback:t.isLayerHoldback}],events:[{uuid:t.decisionId,entity_id:t.layerId,timestamp:t.timestamp,type:O}]}]}]};y.dispatch(s.REGISTER_PREVIOUS_BATCH,e),J()}(t):function(t){var n={entity_id:t.layerId,type:O,uuid:t.decisionId,timestamp:t.timestamp};y.dispatch(s.REGISTER_TRACKER_DECISION,{decisionEvent:n,decisions:Q(t.layerStates)}),B(t.userFeatures),J()}(t)},preRedirectPolicy:v.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT,postRedirectPolicy:v.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:v.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:C,onClientActivation:N,onClickEvent:x,onCustomEvent:D};t.exports=function(t){t.registerAnalyticsTracker("optimizely",tt),b.on({filter:{type:_.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){y.dispatch(s.SET_TRACKER_SEND_EVENTS,!0),z()}}),b.on({filter:{type:_.TYPES.ANALYTICS,name:"maybeSendEvents"},handler:function(){z()}}),b.on({filter:{type:_.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){y.dispatch(s.SET_TRACKER_SEND_EVENTS,!1)}}),y.dispatch(s.SET_TRACKER_SEND_EVENTS,!0);var n=b.on({filter:{type:"lifecycle",name:"activated"},handler:function(){E.observe(Z),b.off(n)}})}},7763:function(t,n,e){var i=e(4886),r=e(5473);function o(t){if(!t||"string"!=typeof t.value)return{configured:!1,valid:!1,leg:null};var n=t.value.replace(/^\s+|\s+$/g,"");if(""===n||n.length<3)return{configured:!0,valid:!1,leg:null};var e=i.makeUaTest(n);return e?{configured:!0,valid:!0,leg:{value:n,test:e}}:{configured:!0,valid:!1,leg:null}}function a(t){if(!t)return{configured:!1,legs:[]};if("string"!=typeof t.value||""===t.value.replace(/^\s+|\s+$/g,""))return{configured:!0,legs:[]};for(var n=t.value.split(","),e=[],i=0;i<n.length;i++){var o=n[i].replace(/^\s+|\s+$/g,"");if(""!==o){var a=r.makeIpTest(o);a&&e.push({value:o,test:a})}}return{configured:!0,legs:e}}n.compile=function(t){var n=[];if(!t||!t.rules||!Array.isArray(t.rules))return n;for(var e=0;e<t.rules.length;e++){var i=t.rules[e];if(i){var r=String(e),u=o(i.user_agent),c=a(i.ip);if((u.configured||c.configured)&&(!u.configured||u.valid)){var s=u.configured?u.leg:null;if(c.configured){if(0===c.legs.length)continue;for(var f=0;f<c.legs.length;f++)n.push({id:r,ua:s,ip:c.legs[f]})}else n.push({id:r,ua:s,ip:null})}}}return n}},4308:function(t,n,e){var i=e(7763),r=e(4483),o=e(9454),a=e(2025),u=e(7566),c=e(3111),s=a.get("stores/directive"),f=a.get("stores/global"),l=null,d=!1,v=void 0,h=!1,p=!1;function g(){p&&(p=!1,u.emit({type:c.TYPES.ANALYTICS,name:"sendEvents"}))}function m(){return{enabled:!1,mode:"monitor",compiledRules:[],hasIpRules:!1,hasUaRules:!1,stats:r.createStats()}}function b(){return!!(s&&s.shouldBootstrapDataForPreview&&s.shouldBootstrapDataForPreview())}function _(){if(!d){try{var t=function(){try{return f&&f.getTrafficExclusion?f.getTrafficExclusion():void 0}catch(t){return}}();if(!t)return;d=!0,l=function(t){if(!t||"object"!=typeof t||!t.enabled)return m();for(var n="enforce"===t.mode?"enforce":"monitor",e=i.compile(t),o=!1,a=!1,u=0;u<e.length;u++)e[u].ip&&(o=!0),e[u].ua&&(a=!0);return{enabled:!0,mode:n,compiledRules:e,hasIpRules:o,hasUaRules:a,stats:r.createStats()}}(t)}catch(t){return d=!0,void(l=m())}try{l.enabled&&l.hasIpRules&&!b()&&function(){if(!p){p=!0,u.emit({type:c.TYPES.ANALYTICS,name:"holdEvents"});var t=y;o.setTimeout((function(){y===t&&g()}),2e3)}}()}catch(t){}}}n.evaluate=function(t,n){if(!l||!l.compiledRules)return{matched:!1,ruleId:void 0};for(var e=l.compiledRules,i=null!=n,r=0;r<e.length;r++){var o=e[r];if(o.ua||o.ip){var a=!o.ua||!!o.ua.test(t),u=!o.ip||i&&!!o.ip.test(n);if(a&&u)return{matched:!0,ruleId:o.id}}}return{matched:!1,ruleId:void 0}},n.shouldDrop=function(){try{if(_(),!l||!l.enabled||b()||!l.compiledRules.length)return!1;var t=o.getUserAgent();l.hasIpRules&&function(){if(h)return;h=!0;var t=y;try{var i=e(131).getIP();i&&"function"==typeof i.then&&i.then((function(i){if(y===t&&"string"==typeof i&&i&&(v=i,l&&l.enabled&&"enforce"===l.mode)){var a=o.getUserAgent(),u=n.evaluate(a,i);if(u.matched){r.recordMatch(l.stats,u.ruleId);try{var c=e(409),s=e(136);c.dispatch(s.RESET_TRACKER_EVENTS),c.dispatch(s.RESET_TRACKER_PREVIOUS_BATCHES)}catch(t){}}}g()}),(function(){g()}))}catch(t){}}();var i=l.hasIpRules?v:void 0;r.recordEvaluation(l.stats),l.hasUaRules&&("string"!=typeof t||!t)&&r.recordUnusableUa(l.stats),l.hasIpRules&&("string"!=typeof i||!i)&&r.recordUnresolvedIp(l.stats);var a=n.evaluate(t,i);return!!a.matched&&(r.recordMatch(l.stats,a.ruleId),"enforce"===l.mode)}catch(t){try{l&&r.recordThrew(l.stats)}catch(t){}return!1}};var y=0;n.config=function(){return _(),l},n.getStats=function(){if(_(),!l||!l.enabled)return null;var t=l.stats,n={};for(var e in t.perRuleHits)Object.prototype.hasOwnProperty.call(t.perRuleHits,e)&&(n[e]=t.perRuleHits[e]);for(var i=[],r=l.compiledRules,o=0;o<r.length;o++){var a=r[o];n[a.id]&&i.push({id:a.id,type:a.ua&&a.ip?"ua+ip":a.ua?"ua":"ip",ua:a.ua?a.ua.value:null,ip:a.ip?a.ip.value:null,drops:n[a.id]})}return{enabled:!0,mode:l.mode,evaluated:t.evaluated,matched:t.matched,unusableUa:t.unusableUa,unresolvedIp:t.unresolvedIp,threw:t.threw,perRuleHits:n,matchedRules:i}}},5473:function(t,n){function e(t){if(!/^\d{1,3}$/.test(t))return!1;var n=Number(t);return!(n>255||String(n)!==t)}n.anonymizeIp=function(t){if("string"==typeof t&&""!==t){var n=t.split(".");if(4===n.length){for(var i=0;i<4;i++)if(!e(n[i]))return;return n[0]+"."+n[1]+"."+n[2]+".0"}}},n.makeIpTest=function(t){if(!t||"string"!=typeof t)return null;var e=n.anonymizeIp(t);return void 0===e||e!==t?null:function(e){var i=n.anonymizeIp(e);return void 0!==i&&i===t}}},4886:function(t,n){n.makeUaTest=function(t){if(!t||"string"!=typeof t)return null;var n=t.toLowerCase();return function(t){return"string"==typeof t&&-1!==t.toLowerCase().indexOf(n)}}},4483:function(t,n){n.createStats=function(){return{evaluated:0,matched:0,unusableUa:0,unresolvedIp:0,threw:0,perRuleHits:{}}},n.recordEvaluation=function(t){t&&t.evaluated++},n.recordUnusableUa=function(t){t&&t.unusableUa++},n.recordUnresolvedIp=function(t){t&&t.unresolvedIp++},n.recordThrew=function(t){t&&t.threw++},n.recordMatch=function(t,n){t&&(t.matched++,t.perRuleHits[n]=(t.perRuleHits[n]||0)+1)}},4093:function(t,n,e){var i=e(1019),r={match:function(t,n){return!!i.querySelector(n.value)}};t.exports=function(t){t.registerViewMatcher("element_present",r)}},9820:function(t,n,e){t.exports=function(t){t.registerViewProvider(e(7568)),t.registerViewMatcher("url",e(683))}},683:function(t,n,e){var i=e(6582);t.exports={fieldsNeeded:["url"],match:function(t,n){return i(t.url,n)}}},7568:function(t,n,e){var i=e(6022);t.exports={provides:"url",getter:[function(){return i.getUrl()}]}},9721:function(t,n,e){var i=e(1019),r=e(6592),o=e(7566),a=e(5975),u=e(2348),c={token:void 0,setUpObserver:function(){a.createDOMChangedObserver(),this.token=o.on({filter:{type:"viewTrigger",name:"DOMChanged"},handler:function(){u.getViewsAndActivate(r.ViewActivationTypes.DOMChanged)}})},turnOffObserver:function(){o.off(this.token)}};t.exports=function(t){i.isReady()?c.setUpObserver():i.addReadyHandler(c.setUpObserver),t.registerViewTrigger("DOMChanged",c)}},8326:function(t,n,e){var i=e(136),r=e(2025),o=e(6592),a=e(7566),u=e(409),c=r.get("stores/history"),s=e(7852),f=e(6761).Promise,l=e(2348),d=e(9454);function v(t){a.emit({type:"viewTrigger",name:"URLChanged",data:{source:t,newURL:d.getHref()}},!0)}t.exports=function(t){var n;n=function(){var t=c.getOriginalPushState().apply(this,arguments);return f.resolve().then((function(){v("pushState")})).catch((function(t){s.error("Error while wrapPushState: ",t)})),t},u.dispatch(i.ENSURE_ORIGINAL_PUSHSTATE),d.getGlobal("history").pushState=n,function(){var t=function(){var t=c.getOriginalReplaceState().apply(this,arguments);return f.resolve().then((function(){v("replaceState")})).catch((function(t){s.error("Error while wrapReplaceState: ",t)})),t};u.dispatch(i.ENSURE_ORIGINAL_REPLACESTATE),d.getGlobal("history").replaceState=t}(),d.addEventListener("popstate",h,!1),d.addEventListener("hashchange",p,!1),a.on({filter:{type:"viewTrigger",name:"URLChanged"},handler:function(){l.getViewsAndActivate(o.ViewActivationTypes.URLChanged)}}),t.registerViewTrigger("URLChanged")};var h=v.bind(null,"popstate"),p=v.bind(null,"hashchange")},9647:function(t,n,e){var i=e(2025),r=e(7566),o=e(3111),a=e(9454),u=i.get("stores/directive"),c="optimizelyPreview",s=function(t){a.getGlobal(c).push(t)};n.initialize=function(t){u.isSlave()&&function(t){var n=!1;if(Array.isArray(window.optimizely)&&window.optimizely.forEach((function(e){Array.isArray(e)&&"verifyPreviewProject"===e[0]&&String(e[1])===t&&(n=!0)})),!n)throw new Error("Preview projectId: "+t+" does not match expected")}(t),r.on({filter:{type:o.TYPES.ANALYTICS,name:"trackEvent"},handler:s}),r.on({filter:{type:o.TYPES.LIFECYCLE,name:"viewActivated"},handler:s}),r.on({filter:{type:o.TYPES.LIFECYCLE,name:"layerDecided"},handler:s}),r.on({filter:{type:"error"},publicOnly:!0,handler:s})},n.setupPreviewGlobal=function(){a.getGlobal(c)||a.setGlobal(c,[])},n.pushToPreviewGlobal=function(t){s(t)}},2594:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.mapValues,a=i.pick,u=i.pickBy,c=e(9899),s=e(5192),f=e(2575),l=e(8298),d=e(1019),v=e(409),h=e(1353).DT,p=e(7852),g=e(4049),m=e(6761).Promise,b=e(4285),_=e(9454),y=e(8260),w=e(136),E=e(6592),I=e(2025),A=I.get("stores/async_request"),T=I.get("stores/client_metadata"),O=I.get("stores/global"),S=I.get("stores/rum"),k=I.get("stores/performance"),R=(I.get("stores/xdomain"),I.get("stores/view_data")),C=e(3737),N="https://rum.optimizely.com/rum",D="1.0";function x(t){return r(t)?m.resolve():(n=function(){return y.request({url:N,method:"POST",data:t,withCredentials:!0}).then((function(t){return s.resolveRequest("RUM_FIRST_BEACON",t),t})).catch((function(t){throw p.error("POST to client-rum failed:",t),s.rejectRequest("RUM_FIRST_BEACON",t),t}))},(e=A.getPromise("RUM_FIRST_BEACON"))?e.then(n):s.makeAsyncRequest("RUM_FIRST_BEACON",n));var n,e}function j(){try{return!d.querySelector("body")}catch(t){return null}}function M(){var t=_.getGlobal("performance"),n=t?t.timing:{},e=k.getMarks()||{},i=S.getApiData(),r=S.getDOMObservationData(),o=C.get("state").getActiveExperimentIds(),a=S.getFeaturesNeededData(),u=d.parseUri(S.getScriptSrc()),c=S.getRumData()||{},s=c.extras||{};Object.assign(s,{apiCalls:i,DOMObservationData:r,paintTimings:L(),activeExperimentIds:o,numPages:R.getNumberOfPages(),snippet:{scheme:u.protocol.slice(0,-1),host:u.host,path:u.pathname},networkInfo:P(),experimental:O.getExperimental(),featuresNeeded:a,beacon:{cjsOnload:!0}});var f=_.getGlobal("Prototype");f&&void 0!==f.Version&&(s.prototypeJS=f.Version);var l={id:S.getRumId(),v:D,project:O.getSnippetId()||O.getProjectId(),navigationTimings:n,userTimings:e,xd:!1,apis:Object.keys(i),extras:s,sampleRate:c.sampleRate};(function(){var t=h.keys().map((function(t){var n=b.getStorageKeyFromKey(t);return n?{key:t,isForeign:b.isForeignKey(t),category:n,size:t.length+h.getItem(t).length}:null})).filter(Boolean),n=t.reduce((function(t,n){var e=n.key,i=b.getIdFromKey(e);return i?((n.isForeign?t.foreign:t.local)[i]=!0,t):t}),{local:{},foreign:{}}),e=t.filter((function(t){return!0===t.isForeign})).reduce((function(t,n){return t[n.key.split("_")[0]]=!0,t}),{}),i={local:0,foreign:0},r={local:{},foreign:{}};t.forEach((function(t){var n=t.isForeign?"foreign":"local";i[n]+=t.size,r[n][t.category]||(r[n][t.category]=0),r[n][t.category]+=t.size}));var o={numKeys:h.allKeys().length,sizeKeys:h.allKeys().toString().length,sizeValues:h.allValues().toString().length,idCounts:{local:Object.keys(n.local).length,foreign:Object.keys(n.foreign).length},foreignOriginCount:Object.keys(e).length,byteTotals:i,byteTotalsByCategory:r};return g.estimateStorage().then((function(t){return Object.assign(o,{storageEstimate:t})}))})().then((function(t){return x(Object.assign(l,{lsMetrics:t}))})).catch((function(t){p.warn("RUM / Error sending onload beacon:",t)}))}function P(){var t=_.getGlobal("navigator");if(t&&t.connection)return a(t.connection,["downlink","rtt","effectiveType"])}function L(){var t=_.getGlobal("performance");if(t)try{var n=t.getEntriesByType("paint");if(r(n))return;return n.reduce((function(t,n){return t[n.name]=Math.round(n.startTime),t}),{})}catch(t){return}}n.initialize=function(){var t,n=c.generate().replace(/-/g,"");t=Math.random()<.01;var e=function(){var t=d.getCurrentScript();if(t)return t.src}();v.dispatch(w.SET_RUM_DATA,{id:n,RumHost:N,inRumSample:t,src:e,data:{id:n,sync:j(),timebase:l.now(),sampleRate:.01,url:e,extras:{initialDOMState:d.getReadyState()}}})},n.queueBeacons=function(){return S.getSampleRum()?(function(){try{_.getGlobal("requestAnimationFrame")((function(){var t=S.getRumData().timebase;v.dispatch(w.SET_RUM_DATA,{data:{render:l.now()-(t||0)}})}))}catch(t){return}}(),d.isLoaded()?_.setTimeout(M,3e3):_.addEventListener("load",M),new m((function(t,n){_.setTimeout((function(){(function(){!function(){var t={id:S.getRumId(),v:D,account:O.getAccountId(),project:O.getSnippetId()||O.getProjectId(),snippet:O.getSnippetId(),revision:O.getRevision(),clientVersion:T.getClientVersion(),hasSlave:!1,wxhr:!0,extras:{}},n=b.getPersistedBehaviorEventCount(),e=f.getEventCount();t.numBehaviorEvents=e;var i=e-n;Object.assign(t.extras,{behaviorEventCountDiff:i,behaviorEventCountDecreased:i<0}),Object.assign(t,function(){var t=_.getGlobal("performance");if(!t)return;var n,e=S.getScriptSrc();try{if(e){p.debug("Using derived script src: ",e);var i=t.getEntriesByName(e);i.length>0&&(n=i[0])}if(!n){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;p.debug("Scanning resource timing entries with regex");var a=t.getEntriesByType("resource");n=a.find((function(t){return r.test(t.name)}))}if(n)return o(E.ResourceTimingAttributes,(function(t,e){var i=n[e];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===e?function(t){if(!t||!t.length)return[];for(var n=[],e=0;e<t.length;e++)try{var i=t[e];n.push({name:i.name,duration:i.duration,description:i.description})}catch(t){}return n}(i):void 0}))}catch(t){return}}(),k.getDurationsFor(Object.values(E.RUMPerformanceTimingAttributes))),v.dispatch(w.SET_RUM_DATA,{data:t})}();var t=S.getRumData(),n=k.getMarks()||{};return t.extras=t.extras||{},t.extras.beacon={cjsTimeout:!0},t.userTimings=n,x(t=u(t,(function(t){return void 0!==t})))})().then(t,n)}),3e3)})).catch((function(t){p.warn("RUM / Error sending data:",t)}))):m.resolve()}},6179:function(t,n,e){var i;!function(r,o){"use strict";var a="function",u="undefined",c="object",s="string",f="major",l="model",d="name",v="type",h="vendor",p="version",g="architecture",m="console",b="mobile",_="tablet",y="smarttv",w="wearable",E="embedded",I="Amazon",A="Apple",T="ASUS",O="BlackBerry",S="Browser",k="Chrome",R="Firefox",C="Google",N="Honor",D="Huawei",x="LG",j="Microsoft",M="Motorola",P="Nvidia",L="OnePlus",U="Opera",V="OPPO",B="Samsung",F="Sharp",z="Sony",q="Xiaomi",G="Zebra",H="Facebook",Y="Chromium OS",K="Mac OS",$=" Browser",W=function(t){for(var n={},e=0;e<t.length;e++)n[t[e].toUpperCase()]=t[e];return n},X=function(t,n){return typeof t===s&&-1!==J(n).indexOf(J(t))},J=function(t){return t.toLowerCase()},Q=function(t,n){if(typeof t===s)return t=t.replace(/^\s\s*/,""),typeof n===u?t:t.substring(0,500)},Z=function(t,n){for(var e,i,r,u,s,f,l=0;l<n.length&&!s;){var d=n[l],v=n[l+1];for(e=i=0;e<d.length&&!s&&d[e];)if(s=d[e++].exec(t))for(r=0;r<v.length;r++)f=s[++i],typeof(u=v[r])===c&&u.length>0?2===u.length?typeof u[1]==a?this[u[0]]=u[1].call(this,f):this[u[0]]=u[1]:3===u.length?typeof u[1]!==a||u[1].exec&&u[1].test?this[u[0]]=f?f.replace(u[1],u[2]):o:this[u[0]]=f?u[1].call(this,f,u[2]):o:4===u.length&&(this[u[0]]=f?u[3].call(this,f.replace(u[1],u[2])):o):this[u]=f||o;l+=2}},tt=function(t,n){for(var e in n)if(typeof n[e]===c&&n[e].length>0){for(var i=0;i<n[e].length;i++)if(X(n[e][i],t))return"?"===e?o:e}else if(X(n[e],t))return"?"===e?o:e;return n.hasOwnProperty("*")?n["*"]:t},nt={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},et={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,p],[/opios[\/ ]+([\w\.]+)/i],[p,[d,U+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[p,[d,U+" GX"]],[/\bopr\/([\w\.]+)/i],[p,[d,U]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[p,[d,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[p,[d,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,/(heytap|ovi|115)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[d,p],[/quark(?:pc)?\/([-\w\.]+)/i],[p,[d,"Quark"]],[/\bddg\/([\w\.]+)/i],[p,[d,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[d,"UC"+S]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[p,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[d,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[p,[d,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[p,[d,"Smart Lenovo "+S]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure "+S],p],[/\bfocus\/([\w\.]+)/i],[p,[d,R+" Focus"]],[/\bopt\/([\w\.]+)/i],[p,[d,U+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[d,U+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[d,"MIUI"+$]],[/fxios\/([\w\.-]+)/i],[p,[d,R]],[/\bqihoobrowser\/?([\w\.]*)/i],[p,[d,"360"]],[/\b(qq)\/([\w\.]+)/i],[[d,/(.+)/,"$1Browser"],p],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1"+$],p],[/samsungbrowser\/([\w\.]+)/i],[p,[d,B+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[p,[d,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[d,"Sogou Mobile"],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[d,p],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[d],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[p,d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,H],p],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[d,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[d,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[p,[d,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[d,k+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,k+" WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[d,"Android "+S]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,p],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[p,[d,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[p,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[p,tt,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[d,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],p],[/(wolvic|librewolf)\/([\w\.]+)/i],[d,p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[d,R+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[d,[p,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[d,[p,/master.|lts./,""]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[g,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[g,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[g,"arm"]],[/((ppc|powerpc)(64)?)( mac|;|\))/i],[[g,/ower/,"",J]],[/ sun4\w[;\)]/i],[[g,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],[[g,J]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[h,B],[v,_]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[l,[h,B],[v,b]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[l,[h,A],[v,b]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[h,A],[v,_]],[/(macintosh);/i],[l,[h,A]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[h,F],[v,b]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[l,[h,N],[v,_]],[/honor([-\w ]+)[;\)]/i],[l,[h,N],[v,b]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[l,[h,D],[v,_]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[l,[h,D],[v,b]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[l,/_/g," "],[h,q],[v,_]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,/ ([\w ]+) miui\/v?\d/i],[[l,/_/g," "],[h,q],[v,b]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[h,V],[v,b]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[l,[h,tt,{OnePlus:["304","403","203"],"*":V}],[v,_]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[h,"Vivo"],[v,b]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[l,[h,"Realme"],[v,b]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[h,M],[v,b]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[h,M],[v,_]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[h,x],[v,_]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[h,x],[v,b]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[l,[h,"Lenovo"],[v,_]],[/(nokia) (t[12][01])/i],[h,l,[v,_]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*))/i],[[l,/_/g," "],[v,b],[h,"Nokia"]],[/(pixel (c|tablet))\b/i],[l,[h,C],[v,_]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[h,C],[v,b]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[h,z],[v,b]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[h,z],[v,_]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[h,L],[v,b]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[h,I],[v,_]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[h,I],[v,b]],[/(playbook);[-\w\),; ]+(rim)/i],[l,h,[v,_]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[h,O],[v,b]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[h,T],[v,_]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[h,T],[v,b]],[/(nexus 9)/i],[l,[h,"HTC"],[v,_]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[h,[l,/_/g," "],[v,b]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[l,[h,"TCL"],[v,_]],[/(itel) ((\w+))/i],[[h,J],l,[v,tt,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[h,"Acer"],[v,_]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[h,"Meizu"],[v,b]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[l,[h,"Ulefone"],[v,b]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[l,[h,"Energizer"],[v,b]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[l,[h,"Cat"],[v,b]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[l,[h,"Smartfren"],[v,b]],[/droid.+; (a(?:015|06[35]|142p?))/i],[l,[h,"Nothing"],[v,b]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[l,[h,"Archos"],[v,_]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[l,[h,"Archos"],[v,b]],[/(imo) (tab \w+)/i,/(infinix) (x1101b?)/i],[h,l,[v,_]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (hmd|imo) ([\w ]+?)(?: bui|\))/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,/(oppo) ?([\w ]+) bui/i],[h,l,[v,b]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[h,l,[v,_]],[/(surface duo)/i],[l,[h,j],[v,_]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[h,"Fairphone"],[v,b]],[/(u304aa)/i],[l,[h,"AT&T"],[v,b]],[/\bsie-(\w*)/i],[l,[h,"Siemens"],[v,b]],[/\b(rct\w+) b/i],[l,[h,"RCA"],[v,_]],[/\b(venue[\d ]{2,7}) b/i],[l,[h,"Dell"],[v,_]],[/\b(q(?:mv|ta)\w+) b/i],[l,[h,"Verizon"],[v,_]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[h,"Barnes & Noble"],[v,_]],[/\b(tm\d{3}\w+) b/i],[l,[h,"NuVision"],[v,_]],[/\b(k88) b/i],[l,[h,"ZTE"],[v,_]],[/\b(nx\d{3}j) b/i],[l,[h,"ZTE"],[v,b]],[/\b(gen\d{3}) b.+49h/i],[l,[h,"Swiss"],[v,b]],[/\b(zur\d{3}) b/i],[l,[h,"Swiss"],[v,_]],[/\b((zeki)?tb.*\b) b/i],[l,[h,"Zeki"],[v,_]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[h,"Dragon Touch"],l,[v,_]],[/\b(ns-?\w{0,9}) b/i],[l,[h,"Insignia"],[v,_]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[h,"NextBook"],[v,_]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[h,"Voice"],l,[v,b]],[/\b(lvtel\-)?(v1[12]) b/i],[[h,"LvTel"],l,[v,b]],[/\b(ph-1) /i],[l,[h,"Essential"],[v,b]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[h,"Envizen"],[v,_]],[/\b(trio[-\w\. ]+) b/i],[l,[h,"MachSpeed"],[v,_]],[/\btu_(1491) b/i],[l,[h,"Rotor"],[v,_]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[l,[h,P],[v,_]],[/(sprint) (\w+)/i],[h,l,[v,b]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[h,j],[v,b]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[h,G],[v,_]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[h,G],[v,b]],[/smart-tv.+(samsung)/i],[h,[v,y]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[h,B],[v,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[h,x],[v,y]],[/(apple) ?tv/i],[h,[l,A+" TV"],[v,y]],[/crkey/i],[[l,k+"cast"],[h,C],[v,y]],[/droid.+aft(\w+)( bui|\))/i],[l,[h,I],[v,y]],[/(shield \w+ tv)/i],[l,[h,P],[v,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[l,[h,F],[v,y]],[/(bravia[\w ]+)( bui|\))/i],[l,[h,z],[v,y]],[/(mi(tv|box)-?\w+) bui/i],[l,[h,q],[v,y]],[/Hbbtv.*(technisat) (.*);/i],[h,l,[v,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[h,Q],[l,Q],[v,y]],[/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],[l,[v,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[v,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[h,l,[v,m]],[/droid.+; (shield)( bui|\))/i],[l,[h,P],[v,m]],[/(playstation \w+)/i],[l,[h,z],[v,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[h,j],[v,m]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[l,[h,B],[v,w]],[/((pebble))app/i,/(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[h,l,[v,w]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[l,[h,V],[v,w]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[l,[h,A],[v,w]],[/(opwwe\d{3})/i],[l,[h,L],[v,w]],[/(moto 360)/i],[l,[h,M],[v,w]],[/(smartwatch 3)/i],[l,[h,z],[v,w]],[/(g watch r)/i],[l,[h,x],[v,w]],[/droid.+; (wt63?0{2,3})\)/i],[l,[h,G],[v,w]],[/droid.+; (glass) \d/i],[l,[h,C],[v,w]],[/(pico) (4|neo3(?: link|pro)?)/i],[h,l,[v,w]],[/; (quest( \d| pro)?)/i],[l,[h,H],[v,w]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[h,[v,E]],[/(aeobc)\b/i],[l,[h,I],[v,E]],[/(homepod).+mac os/i],[l,[h,A],[v,E]],[/windows iot/i],[[v,E]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[l,[v,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[v,_]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[v,_]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[v,b]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[l,[h,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[d,"EdgeHTML"]],[/(arkweb)\/([\w\.]+)/i],[d,p],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[d,p],[/ladybird\//i],[[d,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,p],[/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],[d,[p,tt,nt]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[p,tt,nt],[d,"Windows"]],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,K],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[p,d],[/(ubuntu) ([\w\.]+) like android/i],[[d,/(.+)/,"$1 Touch"],p],[/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],[d,p],[/\(bb(10);/i],[p,[d,O]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[p,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[d,R+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[d,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[p,[d,"watchOS"]],[/crkey\/([\d\.]+)/i],[p,[d,k+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[d,Y],p],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,p],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[d,p]]},it=function(t,n){if(typeof t===c&&(n=t,t=o),!(this instanceof it))return new it(t,n).getResult();var e=typeof r!==u&&r.navigator?r.navigator:o,i=t||(e&&e.userAgent?e.userAgent:""),m=e&&e.userAgentData?e.userAgentData:o,y=n?function(t,n){var e={};for(var i in t)n[i]&&n[i].length%2==0?e[i]=n[i].concat(t[i]):e[i]=t[i];return e}(et,n):et,w=e&&e.userAgent==i;return this.getBrowser=function(){var t,n={};return n[d]=o,n[p]=o,Z.call(n,i,y.browser),n[f]=typeof(t=n[p])===s?t.replace(/[^\d\.]/g,"").split(".")[0]:o,w&&e&&e.brave&&typeof e.brave.isBrave==a&&(n[d]="Brave"),n},this.getCPU=function(){var t={};return t[g]=o,Z.call(t,i,y.cpu),t},this.getDevice=function(){var t={};return t[h]=o,t[l]=o,t[v]=o,Z.call(t,i,y.device),w&&!t[v]&&m&&m.mobile&&(t[v]=b),w&&"Macintosh"==t[l]&&e&&typeof e.standalone!==u&&e.maxTouchPoints&&e.maxTouchPoints>2&&(t[l]="iPad",t[v]=_),t},this.getEngine=function(){var t={};return t[d]=o,t[p]=o,Z.call(t,i,y.engine),t},this.getOS=function(){var t={};return t[d]=o,t[p]=o,Z.call(t,i,y.os),w&&!t[d]&&m&&m.platform&&"Unknown"!=m.platform&&(t[d]=m.platform.replace(/chrome os/i,Y).replace(/macos/i,K)),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(t){return i=typeof t===s&&t.length>500?Q(t,500):t,this},this.setUA(i),this};it.VERSION="1.0.41",it.BROWSER=W([d,p,f]),it.CPU=W([g]),it.DEVICE=W([l,h,v,m,b,y,_,w,E]),it.ENGINE=it.OS=W([d,p]),typeof n!==u?(t.exports&&(n=t.exports=it),n.UAParser=it):e.amdO?(i=function(){return it}.call(n,e,n,t))===o||(t.exports=i):typeof r!==u&&(r.UAParser=it);var rt=typeof r!==u&&(r.jQuery||r.Zepto);if(rt&&!rt.ua){var ot=new it;rt.ua=ot.getResult(),rt.ua.get=function(){return ot.getUA()},rt.ua.set=function(t){ot.setUA(t);var n=ot.getResult();for(var e in n)rt.ua[e]=n[e]}}}("object"==typeof window?window:this)},4118:function(){}},__webpack_module_cache__={};function __webpack_require__(t){var n=__webpack_module_cache__[t];if(void 0!==n)return n.exports;var e=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t].call(e.exports,e,e.exports,__webpack_require__),e.exports}__webpack_require__.amdO={},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();var __webpack_exports__={};function main(){var t=function(t){var n=[__webpack_require__(1823)];n.push(__webpack_require__(1982)),n.push(__webpack_require__(9202)),n.push(__webpack_require__(9401)),n.push(__webpack_require__(6988)),n.push(__webpack_require__(9728)),n.push(__webpack_require__(2163)),n.push(__webpack_require__(9004)),n.push(__webpack_require__(2085)),n.push(__webpack_require__(6591)),n.push(__webpack_require__(2452)),n.push(__webpack_require__(4969)),n.push(__webpack_require__(39)),n.push(__webpack_require__(6917)),n.push(__webpack_require__(945)),n.push(__webpack_require__(2819)),n.push(__webpack_require__(9807)),n.push(__webpack_require__(9820)),n.push(__webpack_require__(4093)),n.push(__webpack_require__(9721)),n.push(__webpack_require__(8326)),n.push(__webpack_require__(4680)),n.push(__webpack_require__(4439)),n.push(__webpack_require__(6474)),n.push(__webpack_require__(2636)),n.push(__webpack_require__(2978)),n.push(__webpack_require__(9659)),n.push(__webpack_require__(8016)),n.push(__webpack_require__(3037)),l.initializePlugins(n)};window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(2594).initialize();var n=__webpack_require__(5010);n.time("gtagReady");var e=__webpack_require__(7852),i=__webpack_require__(2025);__webpack_require__(7786);var r=i.get("stores/directive");i.get("stores/tracker_optimizely");if(!__webpack_require__(8260).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var o,a=__webpack_require__(9445),u=__webpack_require__(4214),c=__webpack_require__(7219),s=__webpack_require__(587),f={"accountId": "8209600003", "namespace": "22220670139", "revision": "6435", "anonymizeIP": true, "enableForceParameters": false, "experimental": {"trimPages": true}, "projectId": "22220670139", "layers": [{"changes": null, "id": "24298770612", "name": "Practice Perks Enrollment ", "commitId": "24567250053", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "24304100670", "integrationSettings": null, "variations": [{"id": "24319940634", "name": "Variation #1", "actions": [{"viewId": "24344750379", "changes": [{"id": "2D7FB92E-36C9-4EF8-B43D-FAA104024B21", "type": "append", "selector": "head", "value": "<style>.covetrus-mei-container .btn.btn-outline-primary{\n\tdisplay:none;\n}</style>", "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {"html": "<h4 class=\"mb-6\" style=\"font-size: 2rem;\">Welcome to Practice Perks!</h4>\n    <div class=\"d-flex flex-wrap\" style=\"gap: 1rem;\">\n        <button style=\"text-transform: none;\" onclick=\"document.getElementById('not-enrolled').scrollIntoView()\" class=\"btn btn-primary\">Enroll</button>\n        <button style=\"text-transform: none;\" onclick=\"document.getElementById('enrolled').scrollIntoView()\" class=\"btn btn-primary\">View My Dashboard</button>\n    </div>"}, "type": "attribute", "id": "3013823D-AEB1-43DB-8745-A16C2F0B4B28", "selector": "covetrus-mei > div > div:nth-child(1)"}, {"css": {}, "dependencies": [], "attributes": {"html": "<div style=\"position: relative;top: -8rem;\" id=\"not-enrolled\"></div>\n    <section class=\"mt-5\">\n      <style>\n        @media screen and (min-width:992px) {\n          .custom-content .row>.col-lg:last-child {\n    \n            padding-left: 50px;\n          }\n        }\n    \n        .custom-content>h1 {\n    \n          color: var(--cx-color-primary);\n        }\n    \n        .custom-content h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          font-family: \"Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n          color: var(--cx-color-primary);\n          font-weight: 600;\n        }\n    \n        .img-fluid {\n          max-width: 100%;\n          height: auto;\n        }\n      </style>\n\n      <style>\n        .sign-container {\n          display: flex;\n        }\n    \n        .info-list li {\n          list-style: none;\n          align-items: flex-start;\n          display: flex;\n        }\n    \n        .info-list li > div {\n          border: 2px solid #fff;\n          border-radius: 100%;\n          padding: 0px 7px;\n          display: block;\n          text-align: center;\n          margin-right: 10px;\n          background-color: var(--cx-color-primary);\n          color: #fff;\n          font-weight: bold;\n        }\n    \n        .sm-p-x {\n          padding: .5em 0;\n        }\n    \n        .mar-0 {\n          margin: 0;\n        }\n    \n        .txt-center {\n          text-align: center;\n        }\n    \n        .bg-teal {\n          background-color: #06b9bc;\n        }\n    \n        .bg-pink {\n          background-color: #e2375d;\n        }\n    \n        .bg-llime {\n          background-color: #dcf0ec;\n        }\n    \n        .txt-white {\n          color: white;\n        }\n    \n        .red-prices p {\n          padding: 1em;\n          background-color: #e2375d;\n          margin: .2em;\n          color: white;\n        }\n    \n        .c-table {\n          display: grid;\n          gap: .2em;\n          grid-template-columns: repeat(6, minmax(5em, 1fr));\n          grid-template-rows: auto;\n          grid-template-areas:\n            \". . date date date date\"\n            \"blank blank key key key key\"\n            \"blank blank key key key key\"\n            \"blank blank key key key key\"\n            \"blank blank tcost-1 tcost-2 tcost-3 tcost-4\"\n            \"med cost1 cost2 cost3 cost4 cost5\"\n            \"med cost6 cost7 cost8 cost9 cost10\"\n            \"med cost11 cost12 cost13 cost14 cost15\"\n            \"med cost16 cost17 cost18 cost19 cost20\";\n          overflow: auto;\n          font-family: muli, sans-serif !important;\n          font-weight: 700;\n          line-height: 1.3em;\n          margin-bottom: 3em;\n    \n        }\n    \n        .date {\n          grid-area: date;\n          text-align: center;\n          align-self: center;\n          background-color: #021660;\n          color: white;\n          padding: 1em 0;\n          font-weight: bolder;\n        }\n    \n        h3.date {\n          font-family: muli, sans-serif !important;\n          text-transform: none !important;\n        }\n    \n        .blank {\n          grid-area: blank;\n        }\n    \n        .key {\n          grid-area: key;\n          background-color: #06b9bc;\n        }\n    \n        .key h3,\n        .key p {\n          text-align: center;\n          color: white;\n          margin: .4em 0;\n        }\n    \n        .key h3 {\n          font-weight: bolder;\n          font-family: muli, sans-serif !important;\n          padding-top: .3em !important;\n          text-transform: none !important;\n        }\n    \n        .and {\n          grid-area: and;\n          text-align: end;\n          background-color: #021660;\n          color: white;\n          margin: 0;\n        }\n    \n        .cost {\n          grid-area: cost;\n        }\n    \n        .tcost-1 {\n          grid-area: tcost-1;\n        }\n    \n        .tcost-2 {\n          grid-area: tcost-2;\n        }\n    \n        .tcost-3 {\n          grid-area: tcost-3;\n        }\n    \n        .tcost-4 {\n          grid-area: tcost-4;\n        }\n    \n        .rcost {\n          grid-area: rcost;\n          text-align: center;\n          color: white;\n        }\n    \n        .rcost p {\n          background-color: #e2375d;\n          padding: .7em;\n          margin: .10em;\n        }\n    \n        .med {\n          grid-area: med;\n          text-align: center;\n          background-color: #e2375d;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          color: white;\n        }\n    \n        .cost1 {\n          grid-area: cost1;\n        }\n    \n        .cost2 {\n          grid-area: cost2;\n        }\n    \n        .cost3 {\n          grid-area: cost3;\n        }\n    \n        .cost4 {\n          grid-area: cost4;\n        }\n    \n        .cost5 {\n          grid-area: cost5;\n        }\n    \n        .cost6 {\n          grid-area: cost6;\n        }\n    \n        .cost7 {\n          grid-area: cost7;\n        }\n    \n        .cost8 {\n          grid-area: cost8;\n        }\n    \n        .cost9 {\n          grid-area: cost9;\n        }\n    \n        .cost10 {\n          grid-area: cost10;\n        }\n    \n        .cost11 {\n          grid-area: cost11;\n        }\n    \n        .cost12 {\n          grid-area: cost12;\n        }\n    \n        .cost13 {\n          grid-area: cost13;\n        }\n    \n        .cost14 {\n          grid-area: cost14;\n        }\n    \n        .cost15 {\n          grid-area: cost15;\n        }\n    \n        .cost16 {\n          grid-area: cost16;\n        }\n    \n        .cost17 {\n          grid-area: cost17;\n        }\n    \n        .cost18 {\n          grid-area: cost18;\n        }\n    \n        .cost19 {\n          grid-area: cost19;\n        }\n    \n        .cost20 {\n          grid-area: cost20;\n        }\n      </style>\n    \n      <section class=\"custom-content\">\n        <h4 style=\"text-align: center;\" data-uw-rm-heading=\"level\" role=\"heading\" aria-level=\"3\" class=\"mt-4\">A COVETRUS\n          PROGRAM\n          DESIGNED TO <em>REWARD</em> YOUR PRACTICE\n        </h4>\n        <h4>\n          Join Practice Perks today and you'll be on your way to earning rewards. By partnering with Covetrus, you can\n          apply your earnings towards a catalog of more than 10,000 reward items. Use our handy grid below to know\n          exactly\n          what you need to purchase to earn rewards!\n        </h4><br role=\"presentation\" data-uw-rm-sr=\"\">\n        <h1 role=\"heading\" aria-level=\"2\" data-uw-rm-heading=\"level\">How it works:</h1>\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-12 px-5\">\n            <img\n              src='https://api.mycovetrus.com//medias/arrows-white-200px-01-01.jpg?context=bWFzdGVyfHJvb3R8Mzg3OTh8aW1hZ2UvanBlZ3xoZGMvaDU0Lzg5MDY1NDI2NDUyNzgvYXJyb3dzX3doaXRlXzIwMHB4LTAxLTAxLmpwZ3wyYWY0N2RmZWQzZDdhYzAyYzJjMjA2YmE5YTE3MGMyZjRhZDkwYTAzNTE0MGNjOTU3M2FmYjU0Nzg3M2YxN2Ni'\n              alt='' class='img-fluid mb-5' width='100'>\n            <p class=\"h4\">\n              Grow your medical/surgical supplies\n            </p>\n            <p>\n              Grow your quarterly medical/surgical purchases versus previous year. Medical/surgical does not include\n              equipment purchases.\n            </p>\n          </div>\n          <div class=\"col-lg-6 col-12 px-5\">\n            <img\n              src='https://api.mycovetrus.com//medias/boxes-2ct-200px-01.jpg?context=bWFzdGVyfHJvb3R8NjUwMjB8aW1hZ2UvanBlZ3xoNGQvaDRhLzg5MDY1NDI5NzI5NTgvYm94ZXNfMmN0LTIwMHB4LTAxLmpwZ3wyNjllY2IxOWM0MjRiNmEzYzVhNWZhMWQxNDEwYzU4ZjNhMDA5ODExOGI5ODdkMzBjNjI2Zjg2NzlhY2NkYjJm'\n              alt='' class='img-fluid mb-5' width='100'>\n            <p class=\"h4\">\n              Purchase key products\n            </p>\n            <p>\n              Each quarter, you can mix and match these product purchases to your preference!\n            </p>\n          </div>\n          <div class=\"col-lg-6 col-12 px-5\">\n            <img\n              src='https://api.mycovetrus.com//medias/website-progress-200px-01.jpg?context=bWFzdGVyfHJvb3R8NDExNzB8aW1hZ2UvanBlZ3xoNmQvaDAzLzg5MDY1NDMxMDQwMzAvd2Vic2l0ZV9wcm9ncmVzc18yMDBweC0wMS5qcGd8OWU2M2FkNjk3NDllYjUwZjljNmQ4NGI0MGY0M2QxNTgyNWVhNDhkYjQ4YTE2NTkwODQxMzFlMGEwMWVhNzEwOA'\n              alt='' class='img-fluid mb-5' width='100'>\n            <p class=\"h4\">\n              Track your progress\n            </p>\n            <p>\n              Use your own personal dashboard to see how you are progressing.\n            </p>\n          </div>\n          <div class=\"col-lg-6 col-12 px-5\">\n            <img\n              src='https://api.mycovetrus.com//medias/gift-2ct-200px-01.jpg?context=bWFzdGVyfHJvb3R8NjIxMDc0fGltYWdlL2pwZWd8aDFiL2gwNC84OTA2NTQzMTY5NTY2L2dpZnRfMmN0LTIwMHB4LTAxLmpwZ3xhMjBmYmY4NzgxYzAyZmZlN2Y4OGVhYjYxYzMwZjI3NWNhZmM0ZWRhOWFkYTgwZmU5MDc0OGVhYmFhODVmOTY3'\n              alt='' class='img-fluid mb-5' width='100'>\n            <p class=\"h4\">\n              Earn practice rewards\n            </p>\n            <p>\n              Use the dollars you have earned to redeem items for your practice. Spend your dollars as soon as you earn them or bank them to add to future quarters' earnings.\n            </p>\n          </div>\n        </div>\n      </section>\n    \n    \n    \n      <p>\n        <em>Corporate groups are not eligible for this program. For eligibility status, contact your Covetrus\n          representative.</em>\n      </p>\n    \n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg\">\n            <section style=\"margin:1em;\">\n              <div class=\"c-table\">\n                <div class=\"blank\"></div>\n                <div class=\"key\">\n                  <h3>Purchase Key Products</h3>\n                  <p>Office-Use Compounding, all Covetrus Brand, KRUUSE, Ethicon, Veterinary Instrumentation, and Human\n                    Pharmaceuticals</p>\n                </div>\n                <div class=\"blank sm-p-x\"\n                  style=\"align-self:end;margin-left:auto;text-align:end;color:white;width:50%;background-color:#021660;\">\n                  <p style=\"padding-right:1em;margin:0;font-weight:bolder;\">AND</p>\n                </div>\n                <p class=\"tcost-1 sm-p-x mar-0 txt-center bg-teal txt-white\">$1,000</p>\n                <p class=\"tcost-2 sm-p-x mar-0 txt-center bg-teal txt-white\">$3,000</p>\n                <p class=\"tcost-3 sm-p-x mar-0 txt-center bg-teal txt-white\">$5,000</p>\n                <p class=\"tcost-4 sm-p-x mar-0 txt-center bg-teal txt-white\">$7,000</p>\n                <div class=\"med\">\n                  <p>Grow Medical/<br />Surgical<br />Supplies</p>\n                </div>\n                <p class=\"cost1 sm-p-x mar-0 txt-center bg-pink txt-white\">$750</p>\n                <p class=\"cost2 sm-p-x mar-0 txt-center bg-llime\">$50</p>\n                <p class=\"cost3 sm-p-x mar-0 txt-center bg-llime\">$75</p>\n                <p class=\"cost4 sm-p-x mar-0 txt-center bg-llime\">$100</p>\n                <p class=\"cost5 sm-p-x mar-0 txt-center bg-llime\">$150</p>\n                <p class=\"cost6 sm-p-x mar-0 txt-center bg-pink txt-white\">$1,200</p>\n                <p class=\"cost7 sm-p-x mar-0 txt-center bg-llime\">$75</p>\n                <p class=\"cost8 sm-p-x mar-0 txt-center bg-llime\">$125</p>\n                <p class=\"cost9 sm-p-x mar-0 txt-center bg-llime\">$175</p>\n                <p class=\"cost10 sm-p-x mar-0 txt-center bg-llime\">$250</p>\n                <p class=\"cost11 sm-p-x mar-0 txt-center bg-pink txt-white\">$2,500</p>\n                <p class=\"cost12 sm-p-x mar-0 txt-center bg-llime\">$150</p>\n                <p class=\"cost13 sm-p-x mar-0 txt-center bg-llime\">$225</p>\n                <p class=\"cost14 sm-p-x mar-0 txt-center bg-llime\">$300</p>\n                <p class=\"cost15 sm-p-x mar-0 txt-center bg-llime\">$400</p>\n                <p class=\"cost16 sm-p-x mar-0 txt-center bg-pink txt-white\">$5,000</p>\n                <p class=\"cost17 sm-p-x mar-0 txt-center bg-llime\">$275</p>\n                <p class=\"cost18 sm-p-x mar-0 txt-center bg-llime\">$375</p>\n                <p class=\"cost19 sm-p-x mar-0 txt-center bg-llime\">$475</p>\n                <p class=\"cost20 sm-p-x mar-0 txt-center bg-llime\">$600</p>\n              </div>\n            </section>\n          </div>\n          <div class=\"col-lg\">\n            <h2>Enrolling is easy and fast!</h2>\n            <div class=\"sign-container\">\n              <ul class=\"info-list\">\n                <li>\n                  <div>1</div>Select \"Access Program\" at the bottom of this page\n                </li>\n                <li>\n                  <div>2</div>Enroll in the program\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n      <p>\n        To qualify, all orders must be placed during the current quarter. Earned funds will be available to apply towards\n        award items. Covetrus reserves the right to discontinue this promotional program at any time. All applicable\n        federal, state, and local taxes are the sole responsibility of the practice. Other terms and conditions may apply.\n        Participating in a promotional program (e.g., points, discount redemptions or other special awards) is only\n        permissible in accordance with promotional program rules. By participating in such promotional program, you agree\n        that, to your knowledge, your veterinary practice complies with all program requirements. Veterinary practices are\n        not eligible to participate in this promotional program if they are affiliated with or a part of a municipal, state,\n        or federal government agency or corporate group, or located outside of the United States.\n      </p>\n    </section>\n    <hr>\n    <div style=\"position: relative;top: -8rem;\" id=\"enrolled\"></div>\n    <section class=\"mt-5\">\n      <p class=\"h4\">\n        Access your program activity at any time by following the below steps!\n      </p>\n      <ol>\n        <li>Select \u2018Access Program\u2019 at the bottom of the page</li>\n        <li>View dashboard</li>\n      </ol>\n    </section>"}, "type": "attribute", "id": "83011EDF-77EC-4356-BFB7-F687480D5046", "selector": "covetrus-mei > div > div:nth-child(2)"}]}]}], "weightDistributions": null, "name": "Everyone", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "24298770612"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["24344750379"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "24304100670", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "24417391341", "name": "Purchase History Search messaging  ", "commitId": "24455430677", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "24452120291", "integrationSettings": null, "variations": [{"id": "24484950150", "name": "Variation #1", "actions": [{"viewId": "24382581079", "changes": [{"id": "4762C0DF-5083-4A68-A1E7-13795DE1734C", "type": "custom_code", "value": function($){window.optimizely = window.optimizely || [];
const utils = window.optimizely.get("utils");

const loadingAnimation = document.createElement('div');
loadingAnimation.classList.add('lds-ring');
loadingAnimation.innerHTML = "<div></div><div></div><div></div><div></div>"

utils.waitForElement('.resp-table-row.p-history-title').then((tableHeader) => {
    tableHeader.after(loadingAnimation)
})

utils.waitForElement('covetrus-purchase-history-item').then((tableItem) => {
    loadingAnimation.remove()
})
}, "dependencies": []}, {"id": "790995D7-9A41-4598-9853-CEC18D3F7D01", "type": "append", "selector": "head", "value": "<style>.lds-ring {\n            display: table-row;\n            position: relative;\n            width: 80px;\n            height: 80px;\n        }\n    \n        .lds-ring div {\n            box-sizing: border-box;\n            display: block;\n            position: absolute;\n            left: 43%;\n            width: 64px;\n            height: 64px;\n            margin: 8px;\n            border: 8px solid #021660;\n            border-radius: 50%;\n            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n            border-color: #021660 transparent transparent transparent;\n        }\n    \n        .lds-ring div:nth-child(1) {\n            animation-delay: -0.45s;\n        }\n    \n        .lds-ring div:nth-child(2) {\n            animation-delay: -0.3s;\n        }\n    \n        .lds-ring div:nth-child(3) {\n            animation-delay: -0.15s;\n        }\n    \n        @keyframes lds-ring {\n            0% {\n                transform: rotate(0deg);\n            }\n    \n            100% {\n                transform: rotate(360deg);\n            }\n        }</style>", "dependencies": []}, {"id": "959CFAFF-E614-465D-9A23-A3630FBBFA20", "type": "append", "dependencies": [], "selector": ".purchase-history-search form", "value": "<p class=\"mt-2\">\n (only shows past 12 months)\n</p>", "operator": "after"}]}]}], "weightDistributions": null, "name": "Everyone", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "24417391341"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["24382581079"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "24452120291", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "24423090639", "name": "Payments Management - Hit Button once", "commitId": "24374790915", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "24380220795", "integrationSettings": null, "variations": [{"id": "24428080016", "name": "Variation #1", "actions": [{"viewId": "24411760300", "changes": [{"id": "B64A9B07-B192-4B9F-8668-356184F9485D", "type": "custom_code", "value": function($){window.optimizely = window.optimizely || [];
const utils = window.optimizely.get("utils");

utils.waitForElement(".alert.alert-info .message").then((OptimizelyMessage) =>{
    OptimizelyMessage.innerHTML = 'Click the "Make a Payment" button only <b>once</b> to avoid duplicate charges.<br><br> Please note: Payments made before 2:30 pm EST will post to your account next business day otherwise your payment will be posted to your account in two (2) business days.';
    console.warn('reset message');
});

utils.waitForElement(".payments-header button:nth-child(2)").then((CreditButton) =>{
    CreditButton.addEventListener('click', () => {
        const OptimizelyMessage = document.querySelector('.alert.alert-info .message');
        OptimizelyMessage.innerHTML = 'Click the "Pay" button only <b>once</b> to avoid duplicate charges.<br><br> Please note: Payments made before 2:30 pm EST will post to your account next business day otherwise your payment will be posted to your account in two (2) business days.';
    });
});

utils.waitForElement(".payments-header button:nth-child(1)").then((ACHButton) =>{
    ACHButton.addEventListener('click', () => {
        const OptimizelyMessage = document.querySelector('.alert.alert-info .message');
        OptimizelyMessage.innerHTML = 'Click the "Make a Payment" button only <b>once</b> to avoid duplicate charges.<br><br> Please note: Payments made before 2:30 pm EST will post to your account next business day otherwise your payment will be posted to your account in two (2) business days.';
    });
});
}, "dependencies": []}]}]}], "weightDistributions": null, "name": "Everyone", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "24423090639"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["24411760300"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "24380220795", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "24690180024", "name": "Self-Registration | Privacy Disclaimer", "commitId": "24838160107", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "24695960045", "integrationSettings": null, "variations": [{"id": "24692980578", "name": "Variation #1", "actions": [{"viewId": "24566322323", "changes": [{"id": "AE86FFEC-6922-44C7-BCB7-704BE68EAE40", "src": "/actions/9e9229c590b55b44852aa81444435312e40964395d1ea50a00b74260c756f7c7.js", "dependencies": [], "type": "custom_code"}]}]}], "weightDistributions": null, "name": "Everyone", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "24690180024"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["24566322323"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "24695960045", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "24776040384", "name": "Returns Drawer HTML Fix", "commitId": "24774920085", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "24758700362", "integrationSettings": null, "variations": [{"id": "24780110274", "name": "Variation #1", "actions": [{"viewId": "24776040383", "changes": [{"id": "C928E2C9-7C4C-4CEC-A3D9-D98FD7AD5529", "type": "custom_code", "value": function($){window.optimizely = window.optimizely || [];

const utils = window.optimizely.get("utils");

utils.waitForElement('#popover-container > div.popover-elements > p').then((returnDrawer) => {
  // take the text and parse it as html
    returnDrawer.innerHTML = returnDrawer.innerText;
})
}, "dependencies": []}]}]}], "weightDistributions": null, "name": "Everyone", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "24776040384"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["24776040383"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "24758700362", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "26715280157", "name": "Contact From Prefill Script", "commitId": "27566900585", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "26647430503", "integrationSettings": null, "variations": [{"id": "26585850664", "name": "Variation #1", "actions": [{"viewId": "27675650009", "changes": [{"id": "9CFD4B66-4C0A-45E1-9AD0-79840A1ACA6E", "type": "custom_code", "value": function($){window.optimizely = window.optimizely || [];
const utils = window.optimizely.get("utils");

function waitForObject(objectName, intervalTime, maxAttempts) {
    return new Promise((resolve, reject) => {
        let attempts = 0;
        const interval = setInterval(() => {
            attempts++;
            if (window[objectName] && "myCovetrus_loba_number" in pendo.getSerializedMetadata().visitor) {
                clearInterval(interval);
                resolve(window[objectName]);
            } else if (attempts === maxAttempts) {
                clearInterval(interval);
                reject(new Error(`Object "${objectName}" not found after ${maxAttempts} attempts`));
            }
        }, intervalTime);
    });
}


utils.observeSelector("#JotFormIFrame-220903781539056", (contactForm) => {
    waitForObject('pendo', 700, 5)
        .then((object) => {
            // Do something with the object once it's available
            const { id, myCovetrus_loba_number = "" } = object.getSerializedMetadata().visitor;
            const email = id ? atob(id) : "";

            contactForm.src += `?email=${email}&shiptoSequence=${myCovetrus_loba_number}`
        })
        .catch((error) => {
            console.error(error.message);
        });
});
}, "dependencies": []}]}]}], "weightDistributions": null, "name": "Contact From Prefill Script", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "26715280157"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["27675650009"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "26717381198", "name": "QA myCovetrus Test after snippet change", "commitId": "26830970011", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "25782700838"], "audienceName": "myCovetrus QA User Audience", "changes": null, "id": "26625542089", "integrationSettings": null, "variations": [{"id": "26604991580", "name": "Variation #1", "actions": [{"viewId": "26821730006", "changes": [{"css": {}, "dependencies": [], "attributes": {"html": "Optimizely Test"}, "type": "attribute", "id": "98557454821e4144a9cd2161ef6f177f", "selector": "body > app-root > main > cx-page-layout > cx-page-slot.CVTHeroBannerSlot.has-components > cms-banner:nth-child(1) > div:nth-child(1) > div > cms-content-canvas > div > div > div:nth-child(1) > div.h1"}]}]}], "weightDistributions": null, "name": "QA myCovetrus Test after snippet change", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "26717381198"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["26821730006"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "26977760756", "name": "Search Bib Scaling Test - stage/QA ", "commitId": "27083710495", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "26923761385", "integrationSettings": null, "variations": [{"id": "26996960753", "name": "Variation #2", "actions": [{"viewId": "26963110877", "changes": [{"id": "2568747C-4A9E-4CFF-A159-E0090B126FB6", "type": "append", "selector": "head", "value": "<style>@media screen and (max-height: 780px) and (min-height: 500px) and (min-width: 768px) and (orientation: landscape){\n\t #results .products div.title {\n\t\t font-size: 12px !important;\n\t}\n  #results{\n  \tmax-height: calc(100vh - 100px) !important;\n  }\n}</style>", "dependencies": []}]}]}, {"id": "26916491467", "name": "Variation #3", "actions": [{"viewId": "26963110877", "changes": [{"id": "09C3ADC1-7D4B-4020-BC50-8349BC031987", "type": "append", "selector": "head", "value": "<style>@media screen and (min-height: 400px) and (min-width: 768px) and (orientation: landscape){\n\t #results .products div.title {\n\t\t font-size: 12px !important;\n\t}\n  #results{\n  \tmax-height: calc(100vh - 100px) !important;\n    grid-template-columns: 0.4fr 1fr;\n    padding-top: 15px;\n    padding-bottom: 5px !important;\n    zoom: 0.75;\n  }\n\n   #results #product-image-container {\n\t\t width: 4rem;\n     height: 4rem;\n\t}\n  #results .suggestions{\n    margin:0px;\n    margin-left: 20px;\n    padding: 0px;\n    margin-top: 12px;\n  }\n  #results .categories-brands-container{\n    margin:0px;\n    margin-left: 20px;\n  }\n  #results #product-name{\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    line-clamp: 1;\n    -webkit-box-orient: vertical;\n  }\n  #results .products{\n    padding: 0 12px;\n    margin: 0;\n  }\n  .results-bg-layer{\n    top: 65px;\n  }\n  #results .top-search-bib{\n    margin: 0;\n  }\n #results .top-search-bib .title{\n    margin: 0;\n    margin-bottom:0;\n  }\n  #results .grid-component{\n    margin:8px 0px\n  }\n  #results .flex-grow-1{\n    order: 1;\n    margin-left:30px;\n  }\n  #results .plp-list-action-buttons{\n    color: #fff;\n    background-color: #1474e5;\n    border: 1px solid #1474e5;\n    margin-top:0px;\n    font-size:15\n  }\n  \n  .results-container .res-relative{\n    position: relative !important;\n  }\n  \n}</style>", "dependencies": []}]}]}, {"id": "27109100551", "name": "Control (No Changes) ", "actions": [{"viewId": "26963110877", "changes": [{"id": "07B7669D-E225-4872-9313-B5C9DD65FE24", "type": "append", "selector": "head", "value": "<style>#results .flex-grow-1{\n    order: 1;\n    margin-left:30px;\n  }\n  #results .plp-list-action-buttons{\n    color: #fff;\n    background-color: #1474e5;\n    border: 1px solid #1474e5;\n    margin-top:0px;\n    font-size:15\n  }</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "26916491467", "endOfRange": 5000}, {"entityId": "27109100551", "endOfRange": 10000}], "name": "Search Bib Scaling Test - stage/QA ", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "26977760756"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["26963110877"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "27672150010", "name": "SearchBib Fix", "commitId": "28279050070", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "27593710631", "integrationSettings": null, "variations": [{"id": "27444441360", "name": "Original", "actions": [{"viewId": "27584540470", "changes": [{"id": "76CCED67-08D6-4F34-B339-CCB703B20912", "type": "append", "selector": "head", "value": "<style>covetrus-search-box .hideAddToCart covetrus-stock-messages{\n\tdisplay: none;\n}\n\ncovetrus-search-box .hideAddToCart .column2{\n\t    grid-column-start: 2 !important;\n\t    grid-column-end: 4 !important;\n}\n\ncovetrus-search-box cvet-product covetrus-add-to-cart{\n\tz-index: 1;\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "SearchBib Fix", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "27672150010"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["27584540470"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "28850420030", "name": "T55: SRP Scaling", "commitId": "29891100132", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23476472300", "29241920428"], "audienceName": "Desktop Only,LP test", "changes": null, "id": "28869160020", "integrationSettings": null, "variations": [{"id": "28826730082", "name": "Variation 1 - Smaller Search Results ", "actions": [{"viewId": "28875510006", "changes": [{"id": "5CFC0B10-F889-4699-AB56-733A8186710D", "src": "/actions/ea34a81c41f120b6923bb5a2acab19691187b0d405fc3d543c64123e861c7c29.js", "dependencies": [], "type": "custom_code"}, {"id": "ffe50ca91d69447ebec0c497a11e7b4b", "type": "append", "selector": "head", "value": "<style>.hideAddToCart covetrus-product-savings{\ndisplay: none !important;\n}\n.SearchResultsListSlot.has-components * cvet-product .grid-component #product-name {\n    font-weight: 700;\n    font-size: 1rem;\n    cursor: pointer;\n    color: #000;\n    grid-column: 2;\n}\n.SearchResultsListSlot.has-components * cvet-product .grid-component #product-price {\n    font-size: 1.5rem;\n    font-weight: var(--cx-font-weight-bold);\n    min-width: max-content;\n    margin-left: .625rem;\n    grid-area: 1 / 3 / 5 / 4;\n    grid-column: 3;\n}\n.SearchResultsListSlot.has-components * cvet-product .grid-component #product-subtitle, cvet-product .grid-component #product-case-quantity {\n    color: #6e6e6e;\n    font-family: Mulish, sans-serif;\n    font-size: .65rem;\n    font-weight: 400;\n    line-height: .8rem; \n    margin: 3px 0;\n}\n.SearchResultsListSlot.has-components * cvet-product .grid-component .main-left {\n    grid-row-end: 5;\n    grid-row-start: 2;\n    position: relative;\n    height: 7.75rem;\n}\n.SearchResultsListSlot.has-components * cvet-product .grid-component #product-image-container cx-media {\n  width:70%\n}\n.SearchResultsListSlot.has-components * cvet-product .grid-component {\n    display: grid;\n    grid-template-columns: 10rem 1fr auto;\n    grid-template-rows: repeat(20, auto);\n  min-height:9.5 rem;\n}\n.SearchResultsListSlot.has-components * covetrus-product-list-item cvet-product #product-image-container {\n    width: 9rem;\n    height: 9rem;\n}\n.SearchResultsListSlot.has-components * .stock-level-message-wrapper {\n    display: inline-flex;\n    padding-top: .25rem;\n}\n.SearchResultsListSlot.has-components * cvet-product .grid-component covetrus-product-messages.prodMessageStock, cvet-product .grid-component covetrus-product-messages.prodMessageLegal, cvet-product .grid-component covetrus-product-messages.prodMessageInfo {\n    grid-column-start: 1;\n    display: grid;\n    grid-column-end: 2;\n    margin-top: -8px;\n    margin-bottom: .25rem;\n      padding-right: 5px;\n\n}\n.SearchResultsListSlot.has-components * cvet-product .grid-component .bottom covetrus-add-to-cart {\n    width: -moz-fit-content;\n    width: fit-content;\n    margin-left: auto;\n    margin-top: -30px;\n    justify-content: flex-start !important;\n}\n.SearchResultsListSlot.has-components * cvet-product .grid-component .image-circles {\n    position: absolute;\n    /* bottom: 0; */\n    left: .325rem;\n    bottom: -15px;\n}\n.SearchResultsListSlot.has-components * covetrus-promotion-message .promotion-message-line-1-view {\n    color: #008556;\n    font-size: .75rem;\n    margin-top: -30px;\n    margin-bottom: 20px;\n}</style>", "dependencies": []}]}]}, {"id": "28840030125", "name": "Control - Larger Search Results ", "actions": [{"viewId": "28875510006", "changes": [{"id": "873a448b00b2444d93dfc5ee9c14a4fc", "type": "append", "selector": "head", "value": "<style>#results .flex-grow-1{\n    order: 1;\n    margin-left:30px;\n  }\n  #results .plp-list-action-buttons{\n    color: #fff;\n    background-color: #1474e5;\n    border: 1px solid #1474e5;\n    margin-top:0px;\n    font-size:15\n  }</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "28826730082", "endOfRange": 10000}], "name": "T55: SRP Scaling", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "28850420030"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["28875510006"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "4521535866667008", "name": "Banner | Pharmacy Product Search | Everyone", "commitId": "5558482873614336", "groupId": null, "holdback": 500, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4838984583479296", "integrationSettings": null, "variations": [{"id": "5408509628514304", "name": "Variation #1", "actions": [{"viewId": "5904140197429248", "changes": [{"id": "E0DE8485-EDE9-4E8C-9BD8-17FE23E9E7F7", "type": "append", "dependencies": [], "name": "", "isOpalManaged": false, "selector": "head", "value": "<style>#content-banner-container {\r\n\r\n    background: url('https://cdn.optimizely.com/img/8209600003/371769e2f76b4c99ac6eccabc4f269a9.svg');\r\n    background-size: cover;\r\n    /* background-position: -900px center; */\r\n    background-position: -600px center; /* for pharmacy Zoetis Nov. 26 */\r\n}\r\n\r\n#content-banner-container h2 {\r\n\r\n    color: #021660;\r\n    font-weight: 600\r\n}\r\n\r\n#content-banner-container>div>span:first-of-type {\r\n\r\n    font-size: clamp(1rem, 2vw, 16px);\r\n    display: inline-block;\r\n    color: #000000;\r\n    font-weight: 600;\r\n    max-width: 630px;\r\n    /* max-width: 525px; for para Zoetis Nov. 26 */\r\n}\r\n\r\n/* #content-banner-container>div>span:last-of-type {\r\n\r\n    color: #000000;\r\n    font-size: .5rem;\r\n} */\r\n\r\n#content-banner-container img {\r\n\r\n    display: none;\r\n    object-fit: cover;\r\n    object-position: center;\r\n    width: 100%;\r\n}\r\n\r\n.content-details-link {\r\n\r\n    text-decoration: underline;\r\n    display: inline;\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n\r\n    #content-banner-container {\r\n\r\n        background-position: inherit;\r\n    }\r\n\r\n    /* #content-banner-container > div > span:first-of-type {\r\n\r\n            max-width: 630px;\r\n        } */\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n\r\n    #content-banner-container>div>span:first-of-type {\r\n\r\n        max-width: 560px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n\r\n    #content-banner-container {\r\n\r\n        background: inherit;\r\n        background-color: #e8f7ff;\r\n    }\r\n\r\n    #content-banner-container img {\r\n\r\n        display: block;\r\n    }\r\n\r\n    /* #content-banner-container > div > span:first-of-type {\r\n\r\n            max-width: 590px;\r\n        } */\r\n}\r\n\r\n@media screen and (min-width: 501px) {\r\n\r\n    #content-banner-container>div>.btn {\r\n\r\n        width: fit-content;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n\r\n    #content-banner-container>div>span:first-of-type {\r\n\r\n        font-size: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 375px) {\r\n\r\n    #content-banner-container>div {\r\n\r\n        padding: .75rem;\r\n    }\r\n}</style>"}, {"id": "95295D5F-553A-4785-A9F0-A670624565C2", "type": "append", "dependencies": [], "name": "Pharmacy banner", "isOpalManaged": false, "selector": ".BottomHeaderSlot", "value": "<section id=\"content-banner-container\">\r\n    <img src=\"https://cdn.optimizely.com/img/8209600003/686e353cc4d84d23ac526a9ab665e4a3.svg\" />\r\n    <div class=\"px-md-7 py-md-7 px-sm-4 py-sm-4\">\r\n        <h2>Zoetis pharmaceuticals, all in one place</h2>\r\n        <span>Keep your practice stocked and ready with trusted formulations across dermatology, pain management, behavior needs, and more.</span><br>\r\n        <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/CVT-NA/en/USD/c/PHAR?query=:relevance:allCategories:PHAR:manufacturerNameFacet:Zoetis&utm_medium%3Dweb%20=&utm_source=search_banner&utm_campaign=Zoetis_pharma_banner_Q426\" id=\"content-banner-CTA\" class=\"btn btn-primary px-8 mt-5\">Shop Zoetis</a>\r\n    </div>\r\n</section>", "operator": "before"}]}]}], "weightDistributions": null, "name": "Everyone", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4521535866667008"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["5904140197429248"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "4838984583479296", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "4583709165223936", "name": "Covetrus Savings Dashboard", "commitId": "6252722731614208", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5068839981940736", "integrationSettings": null, "variations": [{"id": "6748495592292352", "name": "Variation #1", "actions": [{"viewId": "5048709403115520", "changes": [{"id": "2BFAF335-4669-48B5-9D95-C72CF939E56E", "type": "custom_code", "value": function($){var utils = window.optimizely.get("utils");
utils.waitForElement('.saving-title').then(function(element) {
    
    console.log('Element exists:', element);
    
    let savingsText = document.querySelector('.saving-amount');
    if (!savingsText.textContent.includes(',')) {

      let savingsNumber = Number((savingsText.textContent).substring(2));
      savingsText.textContent = "$" + String(Number((savingsText.textContent).substring(2)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
      // console.log('savings detected');
      console.log(savingsNumber);
      if (savingsNumber < 500) {
      
        document.querySelector('cvet-potential-savings').style.setProperty('display', 'none', 'important');
      }
  
      console.log('savings dashboard loaded');
    }
});
}, "dependencies": [], "name": ""}, {"id": "88E833CB-8377-4D36-8D11-DDE4FBE21AAC", "type": "append", "selector": "head", "value": "<style>cvet-potential-savings {\n \n  /* display: none !important; */\n  padding: 2rem 0px 0px !important;\n}\n\ncvet-potential-savings .saving-title {\n\n  color: #021660 !important;\n  font-weight: 800 !important;\n}\n\ncvet-potential-savings .saving-amount {\n\n  margin: 0 20px 0 8px;\n}\n\ncvet-potential-savings > .body-container {\n\n  border: .0625rem solid #E8E8E8;\n  border-radius: .25rem;\n  padding: 1.5rem !important;\n}\n\ncvet-potential-savings > .body-container > .center-container {\n\n  column-gap: 0 !important;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\ncvet-potential-savings > .body-container > .center-container button > div{\n\n  line-height: 2.5rem !important;\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "Everyone", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4583709165223936"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["5048709403115520"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "5068839981940736", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": [{"id": "f59202f0c9cc4f20a9f43b3ca05b9652", "type": "custom_code", "value": function($){(function() {
  // --- CONFIG ---
  var PEERIUS_POLL_INTERVAL = 100;
  var PEERIUS_POLL_TIMEOUT  = 15000; // increase if Peerius is slow

  // If this variation runs multiple times for preview/editor, you can exit early:
  // (optional) if (window.__OPTIMIZELY_EDITOR_PREVIEW) return;

  // Handle bfcache: allow re-run after a bfcache restore
  window.addEventListener('pageshow', function(evt) {
    if (evt && evt.persisted) {
      delete window.__peeriusExperimentReactivated;
      delete window.__peeriusExperimentExternalGuard;
    }
  });

  // Return Promise that resolves with Peerius id when it becomes available
  function waitForPeeriusId(timeoutMs) {
    timeoutMs = timeoutMs || PEERIUS_POLL_TIMEOUT;
    return new Promise(function(resolve, reject) {
      function check() {
        try {
          return !!(window.PeeriusCallbacks &&
                    window.PeeriusCallbacks.track &&
                    window.PeeriusCallbacks.track.user &&
                    (window.PeeriusCallbacks.track.user.id != null));
        } catch (e) {
          return false;
        }
      }

      if (check()) {
        resolve(window.PeeriusCallbacks.track.user.id);
        return;
      }

      var elapsed = 0;
      var iv = setInterval(function() {
        elapsed += PEERIUS_POLL_INTERVAL;
        if (check()) {
          clearInterval(iv);
          resolve(window.PeeriusCallbacks.track.user.id);
          return;
        }
        if (elapsed >= timeoutMs) {
          clearInterval(iv);
          reject(new Error('Peerius id timeout'));
        }
      }, PEERIUS_POLL_INTERVAL);
    });
  }

  // Main flow (we are inside a variation, so this runs only for assigned users)
  // NOTE: the in-memory guard ensures this happens only once per page load
  if (window.__peeriusExperimentReactivated) {
    // already handled for this page lifetime
    return;
  }

  waitForPeeriusId().then(function(id) {
    // assign the attribute
    try {
      window.userAttribute = id;
      console.log('[Variation] assigned window.userAttribute =', id);
    } catch (e) {
      console.warn('[Variation] failed to assign userAttribute', e);
    }

    // Protect against recursion: set in-memory guard immediately
    window.__peeriusExperimentReactivated = true;

    // External guard (prevent multiple activates being scheduled)
    if (window.__peeriusExperimentExternalGuard) return;
    window.__peeriusExperimentExternalGuard = true;

    // Schedule activate asynchronously (outside current activation call stack)
    setTimeout(function() {
      try {
        if (window.optimizely && typeof window.optimizely.push === 'function') {
          window.optimizely.push({ type: 'activate' });
          console.log('[Variation] requested optimizely.activate');
        } else {
          console.warn('[Variation] optimizely.push not available; cannot activate');
          // (Optional) you might dispatch an event for a shared handler:
          // window.dispatchEvent(new CustomEvent('myPeeriusReady'));
        }
      } catch (e) {
        console.warn('[Variation] error pushing activate', e);
      }
    }, 0);

  }).catch(function(err) {
    console.warn('[Variation] Peerius ID did not appear in time:', err && err.message);
  });

})();


// fix for picture source of paid ad being overwritten by myCovetrus
// document.querySelector('.paid-ad-2 picture source').setAttribute('media', 'min-width: AD');
}, "dependencies": []}], "id": "4704246426238976", "name": "November 2026 Monthly Homepage Updates", "commitId": "5701781102002176", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "5465227825774592"], "audienceName": "VetSuite Homepage Nov 2026", "changes": null, "id": "4677050592657408", "integrationSettings": null, "variations": [{"id": "5155635308789760", "name": "Variation #1", "actions": [{"viewId": "22529500951", "changes": [{"id": "A5E2854C-096F-43A5-B74A-3923388295B7", "type": "widget", "dependencies": [], "name": "Carousel", "widget_id": "30318900008", "config": {"headline_1": "The Holiday Stock-Up is here!", "image_1_title": "", "button_3_text": "Shop pimobendan", "headline_2": "Don't miss 4% back on equipment!", "image_2_title": "", "copy_1": "Explore limited-time savings on supplies, medications, and more <br> to help prepare your practice for the busy season ahead.", "button_2_text": "Enroll now", "image_3_title": "", "headline_3": "A new way to meet your rebate goal", "copy_2": "Reach $4,000 in qualifying purchases by November 30<br>to earn 4% back before it drops to 3%.</b><br><font size=\"1\">Exclusions, terms, and conditions may apply. Click <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/promotions\" style=\"position: relative;width: fit-content;display: inline-block;text-decoration: underline;\">here</a> for more details.</font>", "button_1_text": "Shop deals", "copy_3": "Make every dollar count and shop the first FDA-approved generic pimobendan<br>chewable tablets for dogs, brought to you by Covetrus<sup>\u00ae</sup> brand.", "image_1": "//cdn.optimizely.com/img/8209600003/60563288802346e48cd784983bb49353.png", "image_2": "//cdn.optimizely.com/img/8209600003/9f15b6e1a9cd40edb0fd41c250ebf613.png", "image_3": "//cdn.optimizely.com/img/8209600003/02f4d81026754e8fbc6d1ebc7d7677da.png", "mobile_image_1": "//cdn.optimizely.com/img/8209600003/50bc5863aaeb412b8e05d901263f2e91.png", "mobile_image_2": "//cdn.optimizely.com/img/8209600003/ba6e8b0e80cd4c52bae8699f0f47c82a.png", "mobile_image_3": "//cdn.optimizely.com/img/8209600003/c35aee8e3f924633bc1b3adf4e915cb5.png", "button_3_link": "https://www.mycovetrus.com/CVT-NA/en/USD/product/086259/Pimobendan-Chewable-Tablets,-5.0-mg-50-Count-Bottle?utm_medium=web&utm_source=banner&utm_campaign=VS3_Pimo_Nov26", "button_2_link": "https://www.mycovetrus.com/CVT-NA/en/USD/year-end-equipment-promo?utm_medium=web&utm_source=banner&utm_campaign=year_end_equipment_promo?utm_medium=web&utm_source=banner&utm_campaign=VS2_YearEndEquipment_Nov26", "button_1_link": "https://www.mycovetrus.com/CVT-NA/en/USD/savings-event/?utm_medium=web&utm_source=banner&utm_campaign=VS1A_PracticeSavingsEvent_Nov26", "image_1_alt": "", "image_2_alt": "", "image_3_alt": ""}, "isOpalManaged": false}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/086259/Pimobendan-Chewable-Tablets,-5.0-mg-50-Count-Bottle?utm_medium=web&utm_source=banner&utm_campaign=VS3_Pimo_Nov26", "html": "Shop pimobendan", "style": "text-transform: none;"}, "type": "attribute", "id": "BBC3CC72-1BD3-49AB-86EC-7372F743AC1B", "selector": ".carousel-cta-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/savings-event/?utm_medium=web&utm_source=banner&utm_campaign=VS1A_PracticeSavingsEvent_Nov26", "html": "Shop deals", "style": "text-transform: none;"}, "type": "attribute", "id": "FA01FB9A-4A34-4680-880D-87F3D52A1B9C", "selector": ".carousel-cta-1"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/year-end-equipment-promo?utm_medium=web&utm_source=banner&utm_campaign=year_end_equipment_promo?utm_medium=web&utm_source=banner&utm_campaign=VS2_YearEndEquipment_Nov26", "html": "Enroll now", "style": "text-transform: none;"}, "type": "attribute", "id": "857FDC87-D6C7-46D3-9F89-7612F0E721D4", "selector": ".carousel-cta-2"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Shop Now", "srcset": "//cdn.optimizely.com/img/8209600003/8f9066f48ead4d1781fa9bda488089bb.png"}, "type": "attribute", "id": "0B665AC2-EAF0-4A9C-9852-C215615EC878", "selector": ".cona-ad-1 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://covetrusambassador.referralrock.com/v2/1?utm_medium=web&utm_source=cona_ad&utm_campaign=VS1_AmbassadorProgram_Nov26", "html": "Get started", "style": "text-transform: none;"}, "type": "attribute", "id": "C4555937-BBDF-48C9-BB52-758348D33416", "selector": ".cona-ad-1 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<div class=\"cms card media mx-0 my-0 w-auto mx-md-7 my-7 btn-width-100 paid-ad-2 optimizely-image card-xxs text-center px-0 py-0\">\n  <div class=\"media d-flex\">\n    <cx-media class=\"is-initialized\">\n      <img loading=\"null\" alt=\"Paid Ad 2- Norbrook (1).jpg\" title=\"Paid Ad 2- Norbrook (1).jpg\" src=\"https://api.mycovetrus.com/medias/sys_master/images/h9f/h70/33924656398366/Paid Ad 2- Norbrook (1)/Paid-Ad-2-Norbrook-1-.jpg\" srcset=\"//cdn.optimizely.com/img/8209600003/a970c7f12c244c039e21dfdd8bd63dcc.png\" data-uw-rm-alt=\"QU\" data-optly-84e694c1d1154155b743e58fb3bd52fa=\"\">\n      \n    </cx-media>\n  </div>\n  <div class=\"body d-flex\">\n    <cms-simple-card>\n      <div class=\"cms card simple d-flex flex-column justify-content-between mx-0 my-0 w-auto card-xxs text-center px-0 py-0\">\n        <div id=\"float-child\">\n          <div>\n            <cms-cta>\n              <div>\n                <cx-generic-link>\n                  <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/search/glandex?autoSuggestionEnabled=true&amp;view=list?utm_medium=web&amp;utm_source=paid_ad&amp;utm_campaign=S2_glandex_May26\" tabindex=\"0\" class=\"mx-0 my-0 w-auto btn btn-primary\" title=\"Latest promotions and discounts 2 - CTA 2\" data-uw-rm-brl=\"PR\" data-uw-original-href=\"https://www.mycovetrus.com/CVT-NA/en/USD/search/glandex?autoSuggestionEnabled=true&amp;view=list?utm_medium=web&amp;utm_source=paid_ad&amp;utm_campaign=S2_glandex_May26\" data-optly-e1d5c34c607c43d3a5ef234c0e688ee5=\"\">\n                    Shop Now\n                  </a>\n                </cx-generic-link>\n              </div>\n            </cms-cta>\n          </div>\n          <div>\n          </div>\n        </div>\n      </div>\n    </cms-simple-card>\n  </div>\n</div>", "srcset": "//cdn.optimizely.com/img/8209600003/1b5927ba605240978da1bac7e830fa75.png"}, "type": "attribute", "id": "E7C6E03E-F563-4B8F-9B64-E0A202922DDF", "selector": ".cona-ad-2 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/PHAR-CPD?query=:relevance:allCategories:PHAR-CPD:form:Soft%20Chews?utm_medium=web&utm_source=cona_ad&utm_campaign=VS2_Compounding_June26", "html": "SHOP SOFT CHEWS"}, "type": "attribute", "id": "3D228672-040D-489B-8152-B1813C21FC8A", "selector": ".cona-ad-2 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/084209/Valleylab-FT10-Animal-Health-Energy-Platform--Each?utm_medium=web&utm_source=paid_ad&utm_campaign=S1_MedtronicFT10_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "C25ECC25-7658-48B8-92C7-14BF7C99B2BE", "selector": ".paid-ad-1 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/5542fa857afb4de08903dae80af2f3ee.jpg"}, "type": "attribute", "id": "5AECE9ED-C5E6-493B-9CFA-60F0787D7BBD", "selector": ".paid-ad-1 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/a970c7f12c244c039e21dfdd8bd63dcc.png"}, "type": "attribute", "id": "7D89706B-2E50-4AD1-AF44-27C95A1635EC", "selector": ".paid-ad-2 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/search/glandex?autoSuggestionEnabled=true&view=list?utm_medium=web&utm_source=paid_ad&utm_campaign=S2_glandex_May26"}, "type": "attribute", "id": "40902858-8FB3-40EC-A055-BA3D423B5652", "selector": ".paid-ad-2 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Explore Your Savings", "srcset": "//cdn.optimizely.com/img/8209600003/7d72c9e69da9497ba3fe71042bd565ca.png"}, "type": "attribute", "id": "AE0CDFDB-65AA-4F84-BD8E-7DE861E65BDD", "selector": ".feature-product-1 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/2b9c6abc35fc4067ad7a93044b5aeb78.png"}, "type": "attribute", "id": "E08431F1-C583-414A-ACAB-18701EA1E35E", "selector": ".feature-product-2 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/ce2c81dd4811485682ceab838fa6766b.png"}, "type": "attribute", "id": "19E6F3BF-37F7-46B7-A84A-D3FE693EECA8", "selector": ".feature-product-3 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/071125b342d14a35ab8ad59fd31014f0.png"}, "type": "attribute", "id": "28562F2D-4AA7-4BA7-8E9D-F6AD3144224E", "selector": ".feature-product-4 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Hard Pack Syringes <br> with Needle"}, "type": "attribute", "id": "EACC0B1B-020E-47D9-A962-F0184FE54FC2", "selector": ".feature-product-1 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Prednisolone (from <br>Acetate) Soft Chew"}, "type": "attribute", "id": "724B861F-5DB6-4E70-822F-9BE7045CAF80", "selector": ".feature-product-2 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "NEW! Maropitant <br>Chewable Tablets"}, "type": "attribute", "id": "628C8273-E11F-4961-8197-012B828DC884", "selector": ".feature-product-3 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "CeraSoothe<sup>\u00ae</sup> KET <br>Antiseptic Flush"}, "type": "attribute", "id": "7DA2CCD7-AD5B-4730-A1E2-42362BC2E772", "selector": ".feature-product-4 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/19377?utm_medium=web&utm_source=featured_product&utm_campaign=VS1_PRN_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "0D6A9B02-F6F5-49F5-8633-90F6C1CCC4FC", "selector": ".feature-product-1 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/19407?utm_medium=web&utm_source=featured_product&utm_campaign=VS2_Vetoquinol_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "3986651F-15F0-44DF-A20F-320CB05C153C", "selector": ".feature-product-2 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/19437?utm_medium=web&utm_source=featured_product&utm_campaign=VS3_Midmark_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "D896AC8D-0309-4E62-B539-EC805F4AB45E", "selector": ".feature-product-3 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/19403?utm_medium=web&utm_source=featured_product&utm_campaign=VS4_Bionet_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "6B1FCA20-5CA4-4CA6-8AB6-9B5940014DB1", "selector": ".feature-product-4 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/a4a095617fa547b0b97edc596383b23c.jpg"}, "type": "attribute", "id": "E0048C5E-ACE4-4BDA-8E0A-6865369630D8", "selector": ".cms-container.card-box.w-100.my-5 div:nth-of-type(2) img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/087005/Purina-Pro-Plan-Veterinary-Supplements-Diarrhea-Response-Kits,-FortiFlora-for-Cats--?utm_medium=web&utm_source=paid_ad&utm_campaign=S2_Purina_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "14865C47-8223-4F28-85ED-E249CC64EDD7", "selector": ".cms-container.card-box.w-100.my-5 > .cards-wrapper > div:nth-of-type(2) .my-0.btn-primary.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/20039?utm_medium=web&utm_source=cona_ad&utm_campaign=VS2_Buy11Get1_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "C6882793-22E0-4C47-B5A2-4AF1EA222823", "selector": ".cona-ad-2 > div:nth-of-type(2) .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/0cd415cffd6246febde8e858fceda691.png"}, "type": "attribute", "id": "CEE363B0-96FF-4638-81AC-D11E22753135", "selector": ".cona-ad-2 > div:nth-of-type(1) > cx-media:nth-of-type(1) > img:nth-of-type(1)"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Exclusive VetSuite<sup>\u00ae</sup> Savings"}, "type": "attribute", "id": "2933345D-5D57-433C-87A7-074649C0A6DE", "selector": ".mt-6 b"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Covetrus<sup>\u00ae</sup>\nBrand Products"}, "type": "attribute", "id": "EAA38E59-6BD0-42C8-BD55-3F70AAFB15D5", "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper > div:nth-of-type(2) b.text-cvet-blue"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Covetrus\n\nCompounding Pharmacies"}, "type": "attribute", "id": "7585A069-7566-42AA-A0BD-D530942A6388", "selector": ".cms-container.card-box.w-100.bg-none.my-0 div:nth-of-type(3) b.text-cvet-blue"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<b>4% back\n<br>on PRN</b>\n<br>Stock up on eligible products\n<br>to claim your rebate."}, "type": "attribute", "id": "9E12CC43-2FCA-4FEA-8BBE-897474FD5640", "selector": ".feature-product-1 .paragraph"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Explore products", "style": "text-transform: none;"}, "type": "attribute", "id": "4DA65DA4-4C3C-4D37-B970-EB710AA7C120", "selector": ".mx-auto"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "77F8B56D-DDB3-48CF-A38E-36F0A2CEF88D", "selector": ".slide.active > div:nth-of-type(1) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"style": "text-transform: none;"}, "type": "attribute", "id": "E60BB3BD-FDA4-4B93-B9DF-57461C240AC9", "selector": ".cards-wrapper > div:nth-of-type(1) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "5E84A985-9774-4F10-89DC-7135ECC81A99", "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper > div:nth-of-type(2) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Explore products", "style": "text-transform: none;"}, "type": "attribute", "id": "A519171F-D14D-42B5-A76D-AE89EF81E237", "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper > div:nth-of-type(3) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "A37A504F-EF5E-4886-8682-D9FCFB1777D8", "selector": ".my-9.cms-container .my-0.btn-primary.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "C8BFFEFF-8432-4BA3-93C3-A0D97464D5CB", "selector": ".my-9.cms-container > .cards-wrapper > div:nth-of-type(2) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "45245E01-698B-4DA4-8050-0BF745945448", "selector": ".fg-black .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "ADF3110B-4C91-4E4F-9024-40A8B4F5645E", "selector": ".slide.active > div:nth-of-type(2) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "65BF75F9-7B37-481C-B761-C51AD362A1E1", "selector": ".slide.active > div:nth-of-type(3) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "102C8C9B-1308-4BE3-A086-52EBC77B4D08", "selector": ".slide.active > div:nth-of-type(4) .btn-login"}, {"id": "F8F31BBE-47F3-4D82-B41E-2232857F455A", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".feature-product-2 .paragraph", "attributes": {"html": "<b>10% back\n<br>on Vetoquinol</b>\n<br>Save on select medications\n<br>and supplements.\n"}, "css": {}}, {"id": "E68B6C8A-FB6E-4B0D-AE2F-87E900617EA8", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".feature-product-3 .paragraph", "attributes": {"html": "<b>5% back on\n<br>Synthesis<sup>\u00ae</sup></b>\n<br>Upgrade your practice\n<br>with new cabinetry for less."}, "css": {}}, {"id": "AB008460-F83B-4E7A-AF4F-634FCADEE506", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".feature-product-4 .paragraph", "attributes": {"html": "<b>Get $150 back\n<br>on Bionet</b>\n<br>Save on BrioVet\n<br>Multiparameter Monitors."}, "css": {}}]}]}], "weightDistributions": null, "name": "VetSuite Homepage - Practice Savings Event", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4704246426238976"}, "deployed": false}, {"audienceIds": ["and", "6674878252711936"], "audienceName": "Standard Target Ad Nov 2026", "changes": null, "id": "4721112376934400", "integrationSettings": null, "variations": [{"id": "6081045739601920", "name": "Variation #1", "actions": [{"viewId": "22529500951", "changes": [{"id": "B694BE91-EC99-4DB4-AA7E-35076BD87403", "type": "widget", "dependencies": [], "name": "Carousel", "widget_id": "30318900008", "config": {"headline_1": "The Holiday Stock-Up is here!", "image_1_title": "", "button_3_text": "Claim yours", "headline_2": "Don't miss 3% back on equipment!", "image_2_title": "", "copy_1": "Explore limited-time savings on supplies, medications, and more <br> to help prepare your practice for the busy season ahead.", "button_2_text": "Enroll now", "image_3_title": "", "headline_3": "New product perks", "copy_2": "Reach $4,000 in qualifying purchases by November 30<br>to earn 3% back before it drops to 2%.<br><font size=\"1\">Exclusions, terms, and conditions may apply. Click <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/promotions\" style=\"position: relative;width: fit-content;display: inline-block;text-decoration: underline;\">here</a> for more details.</font>", "button_1_text": "Shop deals", "copy_3": "Buy new Covetrus<sup>\u00ae</sup> brand Florfinasone<sup>\u2122</sup> Otic Solution and get a <b> box of exam<br>gloves on us  \u2014 PLUS Oakley safety glasses </b> when you order 10+! <br><font size=\"1\">Exclusions, terms, and conditions may apply. While supplies last. Limit one per customer. Click <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/promotions\" style=\"position: relative;width: fit-content;display: inline-block;text-decoration: underline;\">here</a> for more details.</font>", "image_1": "//cdn.optimizely.com/img/8209600003/da1a4b9a39a843f5bf344819ce77cf49.png", "image_2": "//cdn.optimizely.com/img/8209600003/81dfb83afbf24eb396921314ea1c7711.png", "image_3": "//cdn.optimizely.com/img/8209600003/b61d83d440374479b132b625a62d2418.png", "mobile_image_1": "//cdn.optimizely.com/img/8209600003/bfbe91019cd5419c9d41a812ffcb3f57.png", "mobile_image_2": "//cdn.optimizely.com/img/8209600003/53d6bef4893e43de8e49cc6ba84a8005.png", "mobile_image_3": "//cdn.optimizely.com/img/8209600003/73ccbc6712804632a3a7f7ef67b371a4.png", "button_3_link": "https://www.mycovetrus.com/CVT-NA/en/USD/c/20062?utm_medium=web&utm_source=banner&utm_campaign=S3_Florfinasone_Nov26", "button_2_link": "https://www.mycovetrus.com/CVT-NA/en/USD/year-end-equipment-promo?utm_medium=web&utm_source=banner&utm_campaign=year_end_equipment_promo?utm_medium=web&utm_source=banner&utm_campaign=S2_YearEndEquipment_Nov26", "button_1_link": "https://www.mycovetrus.com/CVT-NA/en/USD/savings-event/?utm_medium=web&utm_source=banner&utm_campaign=S1A_PracticeSavingsEvent_Nov26", "image_1_alt": "", "image_2_alt": "", "image_3_alt": ""}, "isOpalManaged": false}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/20062?utm_medium=web&utm_source=banner&utm_campaign=S3_Florfinasone_Nov26", "html": "Claim yours", "style": "text-transform: none;"}, "type": "attribute", "id": "6B51BA60-CBDE-41EC-90D4-10E52847F38F", "selector": ".carousel-cta-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/savings-event/?utm_medium=web&utm_source=banner&utm_campaign=S1A_PracticeSavingsEvent_Nov26", "html": "Shop deals", "style": "text-transform: none;"}, "type": "attribute", "id": "BE46919C-6D25-421C-85C2-3836E90DC5F5", "selector": ".carousel-cta-1"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/year-end-equipment-promo?utm_medium=web&utm_source=banner&utm_campaign=year_end_equipment_promo?utm_medium=web&utm_source=banner&utm_campaign=S2_YearEndEquipment_Nov26", "html": "Enroll now", "style": "text-transform: none;"}, "type": "attribute", "id": "FA800AE3-68CE-4811-BB3E-603194B9CF84", "selector": ".carousel-cta-2"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/8283186e94914206915b50b131ac88ea.png"}, "type": "attribute", "id": "DD0E04C7-EC7E-4539-9464-EDD6C2E38A01", "selector": ".cona-ad-1 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/20067?utm_medium=web&utm_source=target_ad&utm_campaign=S1_ZoetisInclinic_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "AB83CE20-77F9-4F7F-94C6-25930D240927", "selector": ".cona-ad-1 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/4f3ca094915541f8be9dc6b1360dd8ee.png"}, "type": "attribute", "id": "0AF72C88-F84E-47EE-B73C-1C17144A1754", "selector": ".cona-ad-2 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/PHAR-CPD?query=:relevance:allCategories:PHAR-CPD:categoryFacet:Covetrus%20Compounding:form:Soft%20Chews&3Futm_medium%3Dweb=&utm_source=cona_ad&utm_campaign=S2_CMPDSoftChews_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "511ED711-5911-4211-AF15-332A2423A31E", "selector": ".cona-ad-2 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/084209/Valleylab-FT10-Animal-Health-Energy-Platform--Each?utm_medium=web&utm_source=paid_ad&utm_campaign=S1_MedtronicFT10_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "E33FF4A5-896D-439C-A621-029547D755A4", "selector": ".paid-ad-1 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/ef56435396c74caaa3947e3a25721d75.jpg"}, "type": "attribute", "id": "36E197F2-4259-462D-B441-789EF57912A0", "selector": ".paid-ad-1 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/521c55e4db4a468eaad06e7603cd247c.jpg"}, "type": "attribute", "id": "829261F2-73B5-4D5B-AB7F-00B49F402FBD", "selector": ".paid-ad-2 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/087005/Purina-Pro-Plan-Veterinary-Supplements-Diarrhea-Response-Kits,-FortiFlora-for-Cats--?utm_medium=web&utm_source=paid_ad&utm_campaign=S2_Purina_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "2BE897B6-3A82-479F-8825-E34F4F126AF3", "selector": ".paid-ad-2 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<div class=\"media d-flex\">\n  <cx-media class=\"is-initialized\">\n    <img loading=\"lazy\" alt=\"Image (83).jpg\" title=\"Image (83).jpg\" src=\"https://api.mycovetrus.com/medias/sys_master/images/h85/h0b/33924605280286/Image (83)/Image-83-.jpg\" srcset=\"//cdn.optimizely.com/img/8209600003/66d375c671e0443790478d11ca6544ea.png\" data-uw-rm-alt=\"QU\" data-optly-9ebaee101a4c49a7a8077f43f9fbb0a5=\"\">\n      <b data-optly-e9e00f611fd84e849e87ff769d87e6af=\"\" data-optly-9ebaee101a4c49a7a8077f43f9fbb0a5=\"\">\n        Hard Pack Syringes\n        <br data-optly-e9e00f611fd84e849e87ff769d87e6af=\"\" data-optly-9ebaee101a4c49a7a8077f43f9fbb0a5=\"\">\n        <br>\n        <br data-optly-9ebaee101a4c49a7a8077f43f9fbb0a5=\"\">\n        <br>\n        with Needle\n      </b>\n      <br data-optly-e9e00f611fd84e849e87ff769d87e6af=\"\" data-optly-9ebaee101a4c49a7a8077f43f9fbb0a5=\"\">\n      <br>\n      <br data-optly-9ebaee101a4c49a7a8077f43f9fbb0a5=\"\">\n      <br>\n      Sterile, rigid syringes for convenient everyday use.\n    \n  </cx-media>\n</div>\n<div class=\"body d-flex\">\n  <cms-simple-card>\n    <div class=\"cms card simple d-flex flex-column justify-content-between mx-0 my-0 w-auto card-md text-center px-3 py-0 mt-5\">\n      <div class=\"paragraph\">\n        <p data-optly-af59875c229342e2a54c9c49e32f95cf=\"\">\n          <b data-optly-af59875c229342e2a54c9c49e32f95cf=\"\">\n            TruFel\u2122 Ultra\n            <br data-optly-af59875c229342e2a54c9c49e32f95cf=\"\">\n            <br>\n            HC2P Vaccine\n          </b>\n          <br data-optly-af59875c229342e2a54c9c49e32f95cf=\"\">\n          <br>\n          AutoShip and save\n          <br data-optly-af59875c229342e2a54c9c49e32f95cf=\"\">\n          <br>\n          on qualifying\n          <br data-optly-af59875c229342e2a54c9c49e32f95cf=\"\">\n          <br>\n          purchases.\n        </p>\n      </div>\n      <div id=\"float-child\">\n        <div>\n          <cms-cta>\n            <div>\n              <cx-generic-link>\n                <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/product/058236/TruFel-Ultra-HC2P-Hybrid-Vaccine-25-x-1-Dose-Box?utm_medium=web&amp;utm_source=featured_product&amp;utm_campaign=S1_Trucan_Aug26\" tabindex=\"0\" class=\"mx-4 my-0 w-auto btn btn-primary mt-auto\" title=\"Homepage 3.0 - Featured Products CTA 1\" data-uw-rm-brl=\"PR\" data-uw-original-href=\"https://www.mycovetrus.com/CVT-NA/en/USD/product/058236/TruFel-Ultra-HC2P-Hybrid-Vaccine-25-x-1-Dose-Box?utm_medium=web&amp;utm_source=featured_product&amp;utm_campaign=S1_Trucan_Aug26\" data-optly-62c7d57cf91748189ca05625920c765a=\"\">\n                  Shop Now\n                </a>\n              </cx-generic-link>\n            </div>\n          </cms-cta>\n        </div>\n        <div>\n        </div>\n      </div>\n    </div>\n  </cms-simple-card>\n</div>", "srcset": "//cdn.optimizely.com/img/8209600003/66d375c671e0443790478d11ca6544ea.png"}, "type": "attribute", "id": "947DA67C-2AC9-496F-8F56-CFA375C91202", "selector": ".feature-product-1 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/f641cf41b26c43148cf012978bf2c071.png"}, "type": "attribute", "id": "DC9456E8-2431-46A8-9451-7E2FC42B0339", "selector": ".feature-product-2 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/1f89a2cd55be495fb010b958190d895b.png"}, "type": "attribute", "id": "5C51B992-7192-4A4D-B2E0-1411588D0C70", "selector": ".feature-product-3 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/437fb2d983f24070bcd7e2853d0b267e.png"}, "type": "attribute", "id": "98262F33-B803-412E-B079-CB7D62EDE2A5", "selector": ".feature-product-4 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Nobivac<sup>\u00ae</sup><br>Lyme Vaccine\n"}, "type": "attribute", "id": "B1379881-90AD-460D-86E5-8FECDCF9018D", "selector": ".feature-product-1 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<b>TruFel\u2122 Ultra\n<br>HC2P Vaccine</b>\n<br>AutoShip and save\n<br>on qualifying\n<br>purchases."}, "type": "attribute", "id": "4EF74647-7B82-43AF-BB45-1F3E877F93A5", "selector": ".feature-product-1 p"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Prednisolone (from <br>Acetate) Soft Chew"}, "type": "attribute", "id": "3F20DA5E-AC39-4C49-AA8D-9D692DDFF878", "selector": ".feature-product-2 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<b>Covetrus<sup>\u00ae</sup>\n<br>Anesthesia Systems</b>\n<br>Precise control from\n<br>induction to recovery."}, "type": "attribute", "id": "028E6962-0669-4375-A195-2A7324990C18", "selector": ".feature-product-2 p"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "NEW! Maropitant <br>Chewable Tablets"}, "type": "attribute", "id": "E22EB80C-5B05-4FED-A7A3-6BB4D17DA2D9", "selector": ".feature-product-3 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<b>Koalin & Pectin Digestive\n<br>Support Oral Paste</b>\n<br>Soothes the stomach\n<br>and balances gut flora."}, "type": "attribute", "id": "24F60A29-8CC3-4F5C-8F8C-2290E106B3C8", "selector": ".feature-product-3 p"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "CeraSoothe<sup>\u00ae</sup> KET <br>Antiseptic Flush"}, "type": "attribute", "id": "D9C12DB1-B956-4AFA-91B4-D14657B4AEAC", "selector": ".feature-product-4 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<b>Maropitant Citrate\n<br>Chewable Tablets</b>\n<br>Beef-flavored and\n<br>scored for easy dosing."}, "type": "attribute", "id": "3F3DCF64-F503-4FD2-B8AC-9952A47C070F", "selector": ".feature-product-4 p"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/058236/TruFel-Ultra-HC2P-Hybrid-Vaccine-25-x-1-Dose-Box?utm_medium=web&utm_source=featured_product&utm_campaign=S1_Trucan_Aug26"}, "type": "attribute", "id": "574DA999-D00B-40A0-8026-9179A0BD98CD", "selector": ".feature-product-1 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/EQUI-E07-201?utm_medium=web&utm_source=featured_product&utm_campaign=S2_AnesthesiaSystems_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "03ED4EC9-29CE-488D-9C3E-15C25F7F437F", "selector": ".feature-product-2 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/search/Kp%20paste%20?autoSuggestionEnabled=true&view=list?utm_medium=web&utm_source=featured_product&utm_campaign=S3_KPPaste_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "230A5DA7-4BA1-4F28-92EF-E6B4BB9355F1", "selector": ".feature-product-3 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/086238/Maropitant-Citrate-Chewable-Tablets-for-Dogs,-16-mg-4-Count-Blister-Pack?utm_medium=web&utm_source=featured_product&utm_campaign=S4_Maropitant_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "C6E7A231-E636-4E9E-8930-2B7DC2FB76A6", "selector": ".feature-product-4 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Covetrus<sup>\u00ae</sup> \n\nBrand Products"}, "type": "attribute", "id": "525B3E1A-0269-490B-AAC4-46858FAB0B2E", "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper > div:nth-of-type(2) b.text-cvet-blue"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Covetrus\n\nCompounding Pharmacies"}, "type": "attribute", "id": "1218D91A-3189-4CB9-A428-9F90FDFDA323", "selector": ".cms-container.card-box.w-100.bg-none.my-0 div:nth-of-type(3) b.text-cvet-blue"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/1052e43efb344259870fd76177aa80d6.png"}, "type": "attribute", "id": "34D75CE0-71E1-471D-9643-17C686C37335", "selector": ".feature-product-1 > div:nth-of-type(1) > cx-media:nth-of-type(1) > img:nth-of-type(1)"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Featured products & insights"}, "type": "attribute", "id": "BAEC04CE-9541-4603-845C-AF4B4C15A79F", "selector": ".mt-6 b"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "173A64E1-2659-47FA-AB46-6B28A1A256EA", "selector": ".mx-auto"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"style": "text-transform: none;"}, "type": "attribute", "id": "60A456D1-2F40-4C22-8374-37AA65C543C9", "selector": ".cards-wrapper > div:nth-of-type(1) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "357DEA57-BF50-4C4E-B22A-72C97FFB94D4", "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper > div:nth-of-type(2) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Explore products", "style": "text-transform: none;"}, "type": "attribute", "id": "7A0490A0-8240-4DDE-B707-A872AC5F6B43", "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper > div:nth-of-type(3) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "0DA58F1E-0A5E-45F8-94B8-983A95E3D431", "selector": ".my-9.cms-container .my-0.btn-primary.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "C0058660-395E-4FF8-972D-6257B2B2C69C", "selector": ".my-9.cms-container > .cards-wrapper > div:nth-of-type(2) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "31E1790E-8A99-4A30-BD4A-CF240EEA75BE", "selector": ".fg-black .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "E2C5784B-AD50-4A74-A1B3-0FDCFE5F0F14", "selector": ".slide.active > div:nth-of-type(1) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "ACB4AD0F-A225-4D13-BF00-4F71083FF9EA", "selector": ".slide.active > div:nth-of-type(3) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "4D01C750-63AB-44BA-82CA-2AAF131DAAF2", "selector": ".slide.active > div:nth-of-type(4) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "EFBAF71D-B38F-406B-91C9-132C6A4E011D", "selector": ".slide.active > div:nth-of-type(2) .btn-login"}, {"css": {}, "isOpalManaged": true, "dependencies": [], "name": "", "attributes": {"remove": true}, "type": "attribute", "id": "9CE92F74-7717-4A04-8395-66446037D537", "selector": ".slide1 p.content > b:first-of-type + br"}, {"css": {}, "isOpalManaged": true, "dependencies": [], "name": "", "attributes": {"style": "display: inline-block; margin-top: 6px"}, "type": "attribute", "id": "BD092988-2FBF-4403-8768-FFA947CCDEF7", "selector": ".slide1 p.content > b:nth-of-type(2)"}, {"css": {}, "isOpalManaged": true, "dependencies": [], "name": "", "attributes": {"remove": true}, "type": "attribute", "id": "80428F45-4514-4AE2-8A4F-DBECC7CAF025", "selector": ".carousel-panel .slides > .slide:first-child .mobile-text-content p.content > b:first-of-type + br"}, {"css": {}, "isOpalManaged": true, "dependencies": [], "name": "", "attributes": {"style": "display: inline-block; margin-top: 6px"}, "type": "attribute", "id": "1E90E1B5-5696-4764-B7B0-8266259A00AE", "selector": ".carousel-panel .slides > .slide:first-child .mobile-text-content p.content > b:nth-of-type(2)"}, {"id": "9103158A-6D34-407B-9F41-7CFD2634888E", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".feature-product-1 .paragraph", "attributes": {"html": "<b>YuMove<sup>\u00ae</sup>\n<br>Hip & Joint Health</b>\n<br>Eases stiff joints\n<br>and supports mobility."}, "css": {}}]}]}], "weightDistributions": null, "name": "Standard Target Ad - Zoetis - Practice Savings Event", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4704246426238976"}, "deployed": false}, {"audienceIds": ["and", "5992211723059200"], "audienceName": "VetSuite Target Ad Nov 2026", "changes": null, "id": "5383817928638464", "integrationSettings": null, "variations": [{"id": "4657247437979648", "name": "Variation #1", "actions": [{"viewId": "22529500951", "changes": [{"id": "C4C8F6CA-1720-4192-A75F-37A8616A10DD", "type": "widget", "dependencies": [], "name": "Carousel", "widget_id": "30318900008", "config": {"headline_1": "The Holiday Stock-Up is here!", "image_1_title": "", "button_3_text": "Shop pimobendan", "headline_2": "Don't miss 4% back on equipment!", "image_2_title": "", "copy_1": "Explore limited-time savings on supplies, medications, and more <br> to help prepare your practice for the busy season ahead.", "button_2_text": "Enroll now", "image_3_title": "", "headline_3": "A new way to meet your rebate goal", "copy_2": "Reach $4,000 in qualifying purchases by November 30<br>to earn 4% back before it drops to 3%.</b><br><font size=\"1\">Exclusions, terms, and conditions may apply. Click <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/promotions\" style=\"position: relative;width: fit-content;display: inline-block;text-decoration: underline;\">here</a> for more details.</font>", "button_1_text": "Shop deals", "copy_3": "Make every dollar count and shop the first FDA-approved generic pimobendan<br>chewable tablets for dogs, brought to you by Covetrus<sup>\u00ae</sup> brand.", "image_1": "//cdn.optimizely.com/img/8209600003/a31ded21996a4f87b535abcb436ebcfe.png", "image_2": "//cdn.optimizely.com/img/8209600003/9f15b6e1a9cd40edb0fd41c250ebf613.png", "image_3": "//cdn.optimizely.com/img/8209600003/02f4d81026754e8fbc6d1ebc7d7677da.png", "mobile_image_1": "//cdn.optimizely.com/img/8209600003/6fe27df8d1314f9880f5760088b59ea3.png", "mobile_image_2": "//cdn.optimizely.com/img/8209600003/ba6e8b0e80cd4c52bae8699f0f47c82a.png", "mobile_image_3": "//cdn.optimizely.com/img/8209600003/c35aee8e3f924633bc1b3adf4e915cb5.png", "button_3_link": "https://www.mycovetrus.com/CVT-NA/en/USD/product/086259/Pimobendan-Chewable-Tablets,-5.0-mg-50-Count-Bottle?utm_medium=web&utm_source=banner&utm_campaign=VS3_Pimo_Nov26", "button_2_link": "https://www.mycovetrus.com/CVT-NA/en/USD/year-end-equipment-promo?utm_medium=web&utm_source=banner&utm_campaign=year_end_equipment_promo?utm_medium=web&utm_source=banner&utm_campaign=VS2_YearEndEquipment_Nov26", "button_1_link": "https://www.mycovetrus.com/CVT-NA/en/USD/savings-event/?utm_medium=web&utm_source=banner&utm_campaign=VS1A_PracticeSavingsEvent_Nov26", "image_1_alt": "", "image_2_alt": "", "image_3_alt": ""}, "isOpalManaged": false}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/086259/Pimobendan-Chewable-Tablets,-5.0-mg-50-Count-Bottle?utm_medium=web&utm_source=banner&utm_campaign=VS3_Pimo_Nov26", "html": "Shop pimobendan", "style": "text-transform: none;"}, "type": "attribute", "id": "C53A98F7-3A64-4B11-8E08-EB7FB437F14A", "selector": ".carousel-cta-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/savings-event/?utm_medium=web&utm_source=banner&utm_campaign=VS1A_PracticeSavingsEvent_Nov26", "html": "Shop deals", "style": "text-transform: none;"}, "type": "attribute", "id": "48E2359E-4764-451F-940E-424DC3B96D5D", "selector": ".carousel-cta-1"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/year-end-equipment-promo?utm_medium=web&utm_source=banner&utm_campaign=year_end_equipment_promo?utm_medium=web&utm_source=banner&utm_campaign=VS2_YearEndEquipment_Nov26", "html": "Enroll now", "style": "text-transform: none;"}, "type": "attribute", "id": "06FB7E57-6861-49A1-A0D4-2BDC0A101FDF", "selector": ".carousel-cta-2"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Shop Now", "srcset": "//cdn.optimizely.com/img/8209600003/5c30591cea2c4ff99c938a241d051709.png"}, "type": "attribute", "id": "16C23987-AAD5-4CEE-91E6-CDAA194A415A", "selector": ".cona-ad-1 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/20048?utm_medium=web&utm_source=target_ad&utm_campaign=VS1_Zoetis_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "14D2EE1F-C376-47E0-84C2-42A7268ADAE9", "selector": ".cona-ad-1 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<div class=\"cms card media mx-0 my-0 w-auto mx-md-7 my-7 btn-width-100 paid-ad-2 optimizely-image card-xxs text-center px-0 py-0\">\n  <div class=\"media d-flex\">\n    <cx-media class=\"is-initialized\">\n      <img loading=\"null\" alt=\"Paid Ad 2- Norbrook (1).jpg\" title=\"Paid Ad 2- Norbrook (1).jpg\" src=\"https://api.mycovetrus.com/medias/sys_master/images/h9f/h70/33924656398366/Paid Ad 2- Norbrook (1)/Paid-Ad-2-Norbrook-1-.jpg\" srcset=\"//cdn.optimizely.com/img/8209600003/a970c7f12c244c039e21dfdd8bd63dcc.png\" data-uw-rm-alt=\"QU\" data-optly-84e694c1d1154155b743e58fb3bd52fa=\"\">\n      \n    </cx-media>\n  </div>\n  <div class=\"body d-flex\">\n    <cms-simple-card>\n      <div class=\"cms card simple d-flex flex-column justify-content-between mx-0 my-0 w-auto card-xxs text-center px-0 py-0\">\n        <div id=\"float-child\">\n          <div>\n            <cms-cta>\n              <div>\n                <cx-generic-link>\n                  <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/search/glandex?autoSuggestionEnabled=true&amp;view=list?utm_medium=web&amp;utm_source=paid_ad&amp;utm_campaign=S2_glandex_May26\" tabindex=\"0\" class=\"mx-0 my-0 w-auto btn btn-primary\" title=\"Latest promotions and discounts 2 - CTA 2\" data-uw-rm-brl=\"PR\" data-uw-original-href=\"https://www.mycovetrus.com/CVT-NA/en/USD/search/glandex?autoSuggestionEnabled=true&amp;view=list?utm_medium=web&amp;utm_source=paid_ad&amp;utm_campaign=S2_glandex_May26\" data-optly-e1d5c34c607c43d3a5ef234c0e688ee5=\"\">\n                    Shop Now\n                  </a>\n                </cx-generic-link>\n              </div>\n            </cms-cta>\n          </div>\n          <div>\n          </div>\n        </div>\n      </div>\n    </cms-simple-card>\n  </div>\n</div>", "srcset": "//cdn.optimizely.com/img/8209600003/1b5927ba605240978da1bac7e830fa75.png"}, "type": "attribute", "id": "194CE3F9-EDB9-492F-99C3-F37E6360D4D5", "selector": ".cona-ad-2 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/PHAR-CPD?query=:relevance:allCategories:PHAR-CPD:form:Soft%20Chews?utm_medium=web&utm_source=cona_ad&utm_campaign=VS2_Compounding_June26", "html": "SHOP SOFT CHEWS"}, "type": "attribute", "id": "C7CA4879-D284-40BD-8C79-FA415D744AFB", "selector": ".cona-ad-2 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/084209/Valleylab-FT10-Animal-Health-Energy-Platform--Each?utm_medium=web&utm_source=paid_ad&utm_campaign=S1_MedtronicFT10_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "716320E0-70B0-47EF-A0DB-B2C51DB4A5E0", "selector": ".paid-ad-1 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/5542fa857afb4de08903dae80af2f3ee.jpg"}, "type": "attribute", "id": "86A03013-BCCB-4752-A218-8B21A086F568", "selector": ".paid-ad-1 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/a970c7f12c244c039e21dfdd8bd63dcc.png"}, "type": "attribute", "id": "57AE2328-86CC-4C33-9EA1-560899742FD5", "selector": ".paid-ad-2 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/search/glandex?autoSuggestionEnabled=true&view=list?utm_medium=web&utm_source=paid_ad&utm_campaign=S2_glandex_May26"}, "type": "attribute", "id": "B8D880F1-E2E2-40EC-9B81-2C0C4C25973E", "selector": ".paid-ad-2 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Explore Your Savings", "srcset": "//cdn.optimizely.com/img/8209600003/7d72c9e69da9497ba3fe71042bd565ca.png"}, "type": "attribute", "id": "6AE01805-80F7-4263-95B2-CFB182D3E040", "selector": ".feature-product-1 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/2b9c6abc35fc4067ad7a93044b5aeb78.png"}, "type": "attribute", "id": "DC003918-704F-44A8-A61A-EC0200B0B62D", "selector": ".feature-product-2 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/ce2c81dd4811485682ceab838fa6766b.png"}, "type": "attribute", "id": "A69D7BA3-482C-4C00-81D4-0E78446B7BDC", "selector": ".feature-product-3 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/071125b342d14a35ab8ad59fd31014f0.png"}, "type": "attribute", "id": "FC600421-0E1F-4F00-84AA-5B19BB7A8421", "selector": ".feature-product-4 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Hard Pack Syringes <br> with Needle"}, "type": "attribute", "id": "D074711A-15C7-4598-B01F-59B748ED5DD1", "selector": ".feature-product-1 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<b>10% back\n<br>on Vetoquinol</b>\n<br>Save on eligible\n<br>pharmaceuticals\n<br>and supplements."}, "type": "attribute", "id": "80ED9BFF-ABDC-4824-BAE1-CF611344833A", "selector": ".feature-product-1 p"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Prednisolone (from <br>Acetate) Soft Chew"}, "type": "attribute", "id": "D824B02C-4C31-432E-8EFC-AB0F4AC12938", "selector": ".feature-product-2 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "NEW! Maropitant <br>Chewable Tablets"}, "type": "attribute", "id": "52214BB7-4AB2-4B20-ACBB-B2E5474923BC", "selector": ".feature-product-3 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "CeraSoothe<sup>\u00ae</sup> KET <br>Antiseptic Flush"}, "type": "attribute", "id": "576EADC6-D94C-4AA5-8164-A358C2C90C88", "selector": ".feature-product-4 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/19377?utm_medium=web&utm_source=featured_product&utm_campaign=VS1_PRN_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "0C246FDB-D949-4D7A-96F8-C61A2CDD49DE", "selector": ".feature-product-1 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/19407?utm_medium=web&utm_source=featured_product&utm_campaign=VS2_Vetoquinol_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "624FE236-661A-49EC-B6EF-B1A1F7D7849B", "selector": ".feature-product-2 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/19437?utm_medium=web&utm_source=featured_product&utm_campaign=VS3_Midmark_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "9A1E3705-DB9B-4E25-BBBB-686494212AD7", "selector": ".feature-product-3 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/19403?utm_medium=web&utm_source=featured_product&utm_campaign=VS4_Bionet_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "9E8FF440-4A24-462A-8DB0-F6518B44BA0F", "selector": ".feature-product-4 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/a4a095617fa547b0b97edc596383b23c.jpg"}, "type": "attribute", "id": "0F0DE3A6-48F2-465A-B9D7-318E5B22AD58", "selector": ".cms-container.card-box.w-100.my-5 div:nth-of-type(2) img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/087005/Purina-Pro-Plan-Veterinary-Supplements-Diarrhea-Response-Kits,-FortiFlora-for-Cats--?utm_medium=web&utm_source=paid_ad&utm_campaign=S2_Purina_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "E1CED6D9-42B8-4EB4-9503-2C40EEFADC95", "selector": ".cms-container.card-box.w-100.my-5 > .cards-wrapper > div:nth-of-type(2) .my-0.btn-primary.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/20039?utm_medium=web&utm_source=cona_ad&utm_campaign=VS2_Buy11Get1_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "CEAADF06-DEF4-429C-8E80-7C8F94BE185B", "selector": ".cona-ad-2 > div:nth-of-type(2) .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/0cd415cffd6246febde8e858fceda691.png"}, "type": "attribute", "id": "F389D056-2517-4BB7-B2C8-1A5B5C0E0C8E", "selector": ".cona-ad-2 > div:nth-of-type(1) > cx-media:nth-of-type(1) > img:nth-of-type(1)"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Exclusive VetSuite<sup>\u00ae</sup> Savings"}, "type": "attribute", "id": "05A8C3CB-9F32-4412-924A-66AA3AA0312A", "selector": ".mt-6 b"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Covetrus<sup>\u00ae</sup>\nBrand Products"}, "type": "attribute", "id": "3FC98663-F57A-4CB0-9943-744F1C8843CB", "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper > div:nth-of-type(2) b.text-cvet-blue"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Covetrus\n\nCompounding Pharmacies"}, "type": "attribute", "id": "03E6BCF5-1777-460E-A070-6C28D4E28D1E", "selector": ".cms-container.card-box.w-100.bg-none.my-0 div:nth-of-type(3) b.text-cvet-blue"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<b>4% back\n<br>on PRN</b>\n<br>Stock up on eligible products\n<br>to claim your rebate."}, "type": "attribute", "id": "297184D9-98BA-4162-90A5-1A7BC07374DA", "selector": ".feature-product-1 .paragraph"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Explore products", "style": "text-transform: none;"}, "type": "attribute", "id": "A6DE34F2-B8FC-46A8-BF08-E88129996F7A", "selector": ".mx-auto"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "6E5518DD-6D9E-4A5D-858A-FEA3D1D787E4", "selector": ".slide.active > div:nth-of-type(1) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"style": "text-transform: none;"}, "type": "attribute", "id": "CF7C5ADC-8FA8-4DAF-8600-AEECB355F0D3", "selector": ".cards-wrapper > div:nth-of-type(1) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "A14A0743-210A-4536-AEBA-C79757631B36", "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper > div:nth-of-type(2) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Explore products", "style": "text-transform: none;"}, "type": "attribute", "id": "379E3D22-2A3E-4BD5-BE43-1B807D621925", "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper > div:nth-of-type(3) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "6C1D6C4E-01EC-4890-8396-376A9F579160", "selector": ".my-9.cms-container .my-0.btn-primary.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "E494BDC1-5133-4FC6-A62F-858477B61F60", "selector": ".my-9.cms-container > .cards-wrapper > div:nth-of-type(2) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "CDD03AA8-FB67-49E3-BFD0-08EC94A8F5E3", "selector": ".fg-black .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "30D60A9C-EE19-41A4-BE0E-1BCE9A7CE31D", "selector": ".slide.active > div:nth-of-type(2) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "1A769D2C-D370-4BA0-A31C-0285340B2C1A", "selector": ".slide.active > div:nth-of-type(3) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "3BC836C1-CCCA-4E90-AC20-51936AEABA41", "selector": ".slide.active > div:nth-of-type(4) .btn-login"}, {"id": "740A0D15-9C59-499F-90FA-03FE7C15D5BA", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".feature-product-2 .paragraph", "attributes": {"html": "<b>10% back\n<br>on Vetoquinol</b>\n<br>Save on select medications\n<br>and supplements."}, "css": {}}, {"id": "65BFDAC4-A2E3-4D1E-B719-CF9170D42BB9", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".feature-product-3 .paragraph", "attributes": {"html": "<b>5% back on\n<br>Synthesis<sup>\u00ae</sup></b>\n<br>Upgrade your practice\n<br>with new cabinetry for less."}, "css": {}}, {"id": "BD450413-470D-42C2-B4D7-953AF7240555", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".feature-product-4 .paragraph", "attributes": {"html": "<b>Get $150 back\n<br>on Bionet</b>\n<br>Save on BrioVet\n<br>Multiparameter Monitors."}, "css": {}}]}]}], "weightDistributions": null, "name": "VetSuite Target Ad - Zoetis - Practice Savings Event", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4704246426238976"}, "deployed": false}, {"audienceIds": ["and", "6665010280136704"], "audienceName": "Standard Homepage Nov 2026", "changes": null, "id": "6093302888398848", "integrationSettings": null, "variations": [{"id": "5905091532685312", "name": "Variation #1", "actions": [{"viewId": "22529500951", "changes": [{"id": "D7A9B1BE-2479-4118-B032-5425563A9748", "type": "widget", "dependencies": [], "name": "Carousel", "widget_id": "30318900008", "config": {"headline_1": "The Holiday Stock-Up is here!", "image_1_title": "", "button_3_text": "Claim yours", "headline_2": "Don't miss 3% back on equipment!", "image_2_title": "", "copy_1": "Explore limited-time savings on supplies, medications, and more <br> to help prepare your practice for the busy season ahead.", "button_2_text": "Enroll now", "image_3_title": "", "headline_3": "New product perks", "copy_2": "Reach $4,000 in qualifying purchases by November 30<br>to earn 3% back before it drops to 2%.<br><font size=\"1\">Exclusions, terms, and conditions may apply. Click <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/promotions\" style=\"position: relative;width: fit-content;display: inline-block;text-decoration: underline;\">here</a> for more details.</font>", "button_1_text": "Shop deals", "copy_3": "Buy new Covetrus<sup>\u00ae</sup> brand Florfinasone<sup>\u2122</sup> Otic Solution and get a <b> box of exam<br>gloves on us  \u2014 PLUS Oakley safety glasses </b> when you order 10+! <br><font size=\"1\">Exclusions, terms, and conditions may apply. While supplies last. Limit one per customer. Click <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/promotions\" style=\"position: relative;width: fit-content;display: inline-block;text-decoration: underline;\">here</a> for more details.</font>", "image_1": "//cdn.optimizely.com/img/8209600003/1da97febbf384d47bf864704b1aea73e.png", "image_2": "//cdn.optimizely.com/img/8209600003/81dfb83afbf24eb396921314ea1c7711.png", "image_3": "//cdn.optimizely.com/img/8209600003/b61d83d440374479b132b625a62d2418.png", "mobile_image_1": "//cdn.optimizely.com/img/8209600003/4d8a77e6df914f94b2292698c863f9da.png", "mobile_image_2": "//cdn.optimizely.com/img/8209600003/53d6bef4893e43de8e49cc6ba84a8005.png", "mobile_image_3": "//cdn.optimizely.com/img/8209600003/73ccbc6712804632a3a7f7ef67b371a4.png", "button_3_link": "https://www.mycovetrus.com/CVT-NA/en/USD/c/20062?utm_medium=web&utm_source=banner&utm_campaign=S3_Florfinasone_Nov26", "button_2_link": "https://www.mycovetrus.com/CVT-NA/en/USD/year-end-equipment-promo?utm_medium=web&utm_source=banner&utm_campaign=year_end_equipment_promo?utm_medium=web&utm_source=banner&utm_campaign=S2_YearEndEquipment_Nov26", "button_1_link": "https://www.mycovetrus.com/CVT-NA/en/USD/savings-event/?utm_medium=web&utm_source=banner&utm_campaign=S1A_PracticeSavingsEvent_Nov26", "image_1_alt": "", "image_2_alt": "", "image_3_alt": ""}, "isOpalManaged": false}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/20062?utm_medium=web&utm_source=banner&utm_campaign=S3_Florfinasone_Nov26", "html": "Claim yours", "style": "text-transform: none;"}, "type": "attribute", "id": "4681CD5C-FCD9-450E-9ADA-04FB7F707916", "selector": ".carousel-cta-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/savings-event/?utm_medium=web&utm_source=banner&utm_campaign=S1A_PracticeSavingsEvent_Nov26", "html": "Shop deals", "style": "text-transform: none;"}, "type": "attribute", "id": "F3C2B0C9-50CC-44FD-A894-77807C2F8245", "selector": ".carousel-cta-1"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/year-end-equipment-promo?utm_medium=web&utm_source=banner&utm_campaign=year_end_equipment_promo?utm_medium=web&utm_source=banner&utm_campaign=S2_YearEndEquipment_Nov26", "html": "Enroll now", "style": "text-transform: none;"}, "type": "attribute", "id": "49C0CDC9-303D-4EC3-AA58-DB443DE4D5F1", "selector": ".carousel-cta-2"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/4e02fa50179f4bb69fb0a0a85e943df0.png"}, "type": "attribute", "id": "DD750C08-8EBE-4596-BBB5-E2BCA1932061", "selector": ".cona-ad-1 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/20039?utm_medium=web&utm_source=cona_ad&utm_campaign=S1_Buy11Get1_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "1C8A90A6-707A-4AA6-A623-B6DD77B63EFD", "selector": ".cona-ad-1 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/4f3ca094915541f8be9dc6b1360dd8ee.png"}, "type": "attribute", "id": "C5D0EAB8-E28B-4DCB-AAF2-4235DC4A600B", "selector": ".cona-ad-2 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/PHAR-CPD?query=:relevance:allCategories:PHAR-CPD:categoryFacet:Covetrus%20Compounding:form:Soft%20Chews&3Futm_medium%3Dweb=&utm_source=cona_ad&utm_campaign=S2_CMPDSoftChews_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "F695C1A6-FFFD-4A91-9263-BA7FB1B2905E", "selector": ".cona-ad-2 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/084209/Valleylab-FT10-Animal-Health-Energy-Platform--Each?utm_medium=web&utm_source=paid_ad&utm_campaign=S1_MedtronicFT10_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "DF2F7037-5F75-4CAD-BA00-9DBFDA784CE6", "selector": ".paid-ad-1 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/ef56435396c74caaa3947e3a25721d75.jpg"}, "type": "attribute", "id": "0CF3854D-A06B-4F12-BE9B-28DA33B621CA", "selector": ".paid-ad-1 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/521c55e4db4a468eaad06e7603cd247c.jpg"}, "type": "attribute", "id": "DEBE09FF-6BD1-4FE3-9B87-CDFD019D72E7", "selector": ".paid-ad-2 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/087005/Purina-Pro-Plan-Veterinary-Supplements-Diarrhea-Response-Kits,-FortiFlora-for-Cats--?utm_medium=web&utm_source=paid_ad&utm_campaign=S2_Purina_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "18CD3E7B-F797-44B5-9D4C-1557882E8770", "selector": ".paid-ad-2 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<div class=\"media d-flex\">\n  <cx-media class=\"is-initialized\">\n    <img loading=\"lazy\" alt=\"Image (83).jpg\" title=\"Image (83).jpg\" src=\"https://api.mycovetrus.com/medias/sys_master/images/h85/h0b/33924605280286/Image (83)/Image-83-.jpg\" srcset=\"//cdn.optimizely.com/img/8209600003/66d375c671e0443790478d11ca6544ea.png\" data-uw-rm-alt=\"QU\" data-optly-9ebaee101a4c49a7a8077f43f9fbb0a5=\"\">\n      <b data-optly-e9e00f611fd84e849e87ff769d87e6af=\"\" data-optly-9ebaee101a4c49a7a8077f43f9fbb0a5=\"\">\n        Hard Pack Syringes\n        <br data-optly-e9e00f611fd84e849e87ff769d87e6af=\"\" data-optly-9ebaee101a4c49a7a8077f43f9fbb0a5=\"\">\n        <br>\n        <br data-optly-9ebaee101a4c49a7a8077f43f9fbb0a5=\"\">\n        <br>\n        with Needle\n      </b>\n      <br data-optly-e9e00f611fd84e849e87ff769d87e6af=\"\" data-optly-9ebaee101a4c49a7a8077f43f9fbb0a5=\"\">\n      <br>\n      <br data-optly-9ebaee101a4c49a7a8077f43f9fbb0a5=\"\">\n      <br>\n      Sterile, rigid syringes for convenient everyday use.\n    \n  </cx-media>\n</div>\n<div class=\"body d-flex\">\n  <cms-simple-card>\n    <div class=\"cms card simple d-flex flex-column justify-content-between mx-0 my-0 w-auto card-md text-center px-3 py-0 mt-5\">\n      <div class=\"paragraph\">\n        <p data-optly-af59875c229342e2a54c9c49e32f95cf=\"\">\n          <b data-optly-af59875c229342e2a54c9c49e32f95cf=\"\">\n            TruFel\u2122 Ultra\n            <br data-optly-af59875c229342e2a54c9c49e32f95cf=\"\">\n            <br>\n            HC2P Vaccine\n          </b>\n          <br data-optly-af59875c229342e2a54c9c49e32f95cf=\"\">\n          <br>\n          AutoShip and save\n          <br data-optly-af59875c229342e2a54c9c49e32f95cf=\"\">\n          <br>\n          on qualifying\n          <br data-optly-af59875c229342e2a54c9c49e32f95cf=\"\">\n          <br>\n          purchases.\n        </p>\n      </div>\n      <div id=\"float-child\">\n        <div>\n          <cms-cta>\n            <div>\n              <cx-generic-link>\n                <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/product/058236/TruFel-Ultra-HC2P-Hybrid-Vaccine-25-x-1-Dose-Box?utm_medium=web&amp;utm_source=featured_product&amp;utm_campaign=S1_Trucan_Aug26\" tabindex=\"0\" class=\"mx-4 my-0 w-auto btn btn-primary mt-auto\" title=\"Homepage 3.0 - Featured Products CTA 1\" data-uw-rm-brl=\"PR\" data-uw-original-href=\"https://www.mycovetrus.com/CVT-NA/en/USD/product/058236/TruFel-Ultra-HC2P-Hybrid-Vaccine-25-x-1-Dose-Box?utm_medium=web&amp;utm_source=featured_product&amp;utm_campaign=S1_Trucan_Aug26\" data-optly-62c7d57cf91748189ca05625920c765a=\"\">\n                  Shop Now\n                </a>\n              </cx-generic-link>\n            </div>\n          </cms-cta>\n        </div>\n        <div>\n        </div>\n      </div>\n    </div>\n  </cms-simple-card>\n</div>", "srcset": "//cdn.optimizely.com/img/8209600003/66d375c671e0443790478d11ca6544ea.png"}, "type": "attribute", "id": "60547A09-FA11-49D9-A179-F0954FB15976", "selector": ".feature-product-1 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/f641cf41b26c43148cf012978bf2c071.png"}, "type": "attribute", "id": "E2E1C1A2-1FB7-4777-91E6-5CC14D7AB7D4", "selector": ".feature-product-2 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/1f89a2cd55be495fb010b958190d895b.png"}, "type": "attribute", "id": "5DDF4A7F-EB9D-4074-BBB9-A3DFD8B5CDE1", "selector": ".feature-product-3 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/437fb2d983f24070bcd7e2853d0b267e.png"}, "type": "attribute", "id": "A6A1CF54-75DD-43F9-B63B-32C8B0E01432", "selector": ".feature-product-4 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Nobivac<sup>\u00ae</sup><br>Lyme Vaccine\n"}, "type": "attribute", "id": "86EA3636-818D-4AD0-881F-4F71836ED6F7", "selector": ".feature-product-1 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<b>TruFel\u2122 Ultra\n<br>HC2P Vaccine</b>\n<br>AutoShip and save\n<br>on qualifying\n<br>purchases."}, "type": "attribute", "id": "0159C4B5-F836-482F-AF25-E4BC2A03179D", "selector": ".feature-product-1 p"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Prednisolone (from <br>Acetate) Soft Chew"}, "type": "attribute", "id": "6375F021-C4D7-4642-A42D-28EEC502B9BB", "selector": ".feature-product-2 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<b>Covetrus<sup>\u00ae</sup>\n<br>Anesthesia Systems</b>\n<br>Precise control from\n<br>induction to recovery."}, "type": "attribute", "id": "4B1826A0-C973-45CB-8960-26DFEE3DA8F8", "selector": ".feature-product-2 p"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "NEW! Maropitant <br>Chewable Tablets"}, "type": "attribute", "id": "470D1763-2926-4B35-83EE-0D4BC4DA2439", "selector": ".feature-product-3 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<b>Koalin & Pectin Digestive\n<br>Support Oral Paste</b>\n<br>Soothes the stomach\n<br>and balances gut flora."}, "type": "attribute", "id": "7D932821-9024-43A7-AA8B-B81B219E6D61", "selector": ".feature-product-3 p"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "CeraSoothe<sup>\u00ae</sup> KET <br>Antiseptic Flush"}, "type": "attribute", "id": "A3A60993-4998-4539-BB3A-F97782B2F262", "selector": ".feature-product-4 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<b>Maropitant Citrate\n<br>Chewable Tablets</b>\n<br>Beef-flavored and\n<br>scored for easy dosing."}, "type": "attribute", "id": "3CECB8BA-A316-4D70-BD9E-5FEFBAFD6DC8", "selector": ".feature-product-4 p"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/058236/TruFel-Ultra-HC2P-Hybrid-Vaccine-25-x-1-Dose-Box?utm_medium=web&utm_source=featured_product&utm_campaign=S1_Trucan_Aug26"}, "type": "attribute", "id": "EFBDE1C0-518E-40B2-9E10-56AF1C2000C9", "selector": ".feature-product-1 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/EQUI-E07-201?utm_medium=web&utm_source=featured_product&utm_campaign=S2_AnesthesiaSystems_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "2539264E-368B-4144-A431-73AC2380FE09", "selector": ".feature-product-2 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/search/Kp%20paste%20?autoSuggestionEnabled=true&view=list?utm_medium=web&utm_source=featured_product&utm_campaign=S3_KPPaste_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "E666A71C-9BD7-4B9E-92C6-F492C681ADEB", "selector": ".feature-product-3 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/086238/Maropitant-Citrate-Chewable-Tablets-for-Dogs,-16-mg-4-Count-Blister-Pack?utm_medium=web&utm_source=featured_product&utm_campaign=S4_Maropitant_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "0689BFE9-85D1-44BB-845D-AF30D8DB5AF6", "selector": ".feature-product-4 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Covetrus<sup>\u00ae</sup> \n\nBrand Products"}, "type": "attribute", "id": "BB0EA4DD-FF2A-4BF4-9AD7-21FBEDB44A24", "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper > div:nth-of-type(2) b.text-cvet-blue"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Covetrus\n\nCompounding Pharmacies"}, "type": "attribute", "id": "EA2D80C7-AE23-415C-B1FB-DE8FDE92249C", "selector": ".cms-container.card-box.w-100.bg-none.my-0 div:nth-of-type(3) b.text-cvet-blue"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/1052e43efb344259870fd76177aa80d6.png"}, "type": "attribute", "id": "1A14E49D-C56D-4014-902F-512DB4967C66", "selector": ".feature-product-1 > div:nth-of-type(1) > cx-media:nth-of-type(1) > img:nth-of-type(1)"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "<b>YuMove<sup>\u00ae</sup>\n<br>Hip & Joint Health</b>\n<br>Eases stiff joints\n<br>and supports mobility."}, "type": "attribute", "id": "65CAE5A3-AA2B-45C3-A0C3-ECBCEB8EF3F1", "selector": ".feature-product-1 > div:nth-of-type(2) p"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/083026/YuMOVE-MVS-Hip-&-Joint-Health-Large-Dog-Soft-Chews-70-Count-Jar?utm_medium=web&utm_source=featured_product&utm_campaign=S1_VetniqueEnterprise_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "E8AD3233-51B3-48B6-9967-1FEB69012C7E", "selector": ".feature-product-1 > div:nth-of-type(2) .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Featured products & insights"}, "type": "attribute", "id": "247D1561-FA41-4DD0-B812-89C6985D42A7", "selector": ".mt-6 b"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "C98A5DF1-5DC5-4501-9772-146BA5C838E7", "selector": ".mx-auto"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"style": "text-transform: none;"}, "type": "attribute", "id": "717C45E7-0C6A-40A2-A039-B242422BF7DA", "selector": ".cards-wrapper > div:nth-of-type(1) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "84ABD8B3-8BFE-4958-98FB-922D383C0BC0", "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper > div:nth-of-type(2) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Explore products", "style": "text-transform: none;"}, "type": "attribute", "id": "9F80187A-F07B-49BB-BCB0-A8A3DC734367", "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper > div:nth-of-type(3) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "FF42DB7D-7F9E-4AC8-BA1B-EF86B981EE99", "selector": ".my-9.cms-container .my-0.btn-primary.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "207483E6-A5AC-478A-9E77-11AFA03ECB94", "selector": ".my-9.cms-container > .cards-wrapper > div:nth-of-type(2) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "D6B3A343-F01E-4AA9-8574-6349DCDC8CD7", "selector": ".fg-black .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "F884B0FB-E9EF-47D3-A37E-A0617FEBCBD7", "selector": ".slide.active > div:nth-of-type(1) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "A03D9C60-0F2C-4628-9A83-1B771BC44719", "selector": ".slide.active > div:nth-of-type(3) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "00BBBBD3-3B6D-4E4C-AC93-D89F5AD2ABC4", "selector": ".slide.active > div:nth-of-type(4) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "4D0C2D2D-0EE8-4EE1-A386-75643BA2ECAE", "selector": ".slide.active > div:nth-of-type(2) .btn-login"}, {"css": {}, "isOpalManaged": true, "dependencies": [], "name": "", "attributes": {"remove": true}, "type": "attribute", "id": "04E70417-5C0C-4CFA-9CA2-51FEDC72EE3E", "selector": ".slide1 p.content > b:first-of-type + br"}, {"css": {}, "isOpalManaged": true, "dependencies": [], "name": "", "attributes": {"style": "display: inline-block; margin-top: 6px"}, "type": "attribute", "id": "48E4BA8C-02FD-459C-8609-24D510F83F37", "selector": ".slide1 p.content > b:nth-of-type(2)"}, {"css": {}, "isOpalManaged": true, "dependencies": [], "name": "", "attributes": {"remove": true}, "type": "attribute", "id": "CBEE6679-7CF0-4F2E-8BC3-1D714BAC3EC9", "selector": ".carousel-panel .slides > .slide:first-child .mobile-text-content p.content > b:first-of-type + br"}, {"css": {}, "isOpalManaged": true, "dependencies": [], "name": "", "attributes": {"style": "display: inline-block; margin-top: 6px"}, "type": "attribute", "id": "0E272816-EE3D-45E5-BC82-89E0D1978C78", "selector": ".carousel-panel .slides > .slide:first-child .mobile-text-content p.content > b:nth-of-type(2)"}, {"id": "237929E4-0C53-4569-8131-EE9B9F837640", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".feature-product-1 .paragraph", "attributes": {"html": "<b>YuMove<sup>\u00ae</sup>\n<br>Hip & Joint Health</b>\n<br>Eases stiff joints\n<br>and supports mobility."}, "css": {}}, {"id": "57032D16-74F6-4B32-A790-1D3DAFEFF9C4", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".feature-product-2 .paragraph", "attributes": {"html": "<b>Covetrus<sup>\u00ae</sup>\n<br>Anesthesia Systems</b>\n<br>Precise control from\n<br>induction to recovery."}, "css": {}}, {"id": "BFDE4C13-3D71-4AFD-9F35-7A0E1AA554D5", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".feature-product-3 .paragraph", "attributes": {"html": "<b>Koalin & Pectin Digestive\n<br>Support Oral Paste</b>\n<br>Soothes the stomach\n<br>and balances gut flora."}, "css": {}}, {"id": "AD6780A7-B474-40AC-AFE8-20A43CC54690", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".feature-product-4 .paragraph", "attributes": {"html": "<b>Maropitant Citrate\n<br>Chewable Tablets</b>\n<br>Beef-flavored and\n<br>scored for easy dosing.\n"}, "css": {}}]}]}], "weightDistributions": null, "name": "Standard Homepage - Practice Savings Event", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4704246426238976"}, "deployed": false}, {"audienceIds": ["and", "5844886660841472"], "audienceName": "Equine Homepage Nov 2026", "changes": null, "id": "6527508160446464", "integrationSettings": null, "variations": [{"id": "5401608253603840", "name": "Variation #1", "actions": [{"viewId": "22529500951", "changes": [{"id": "0877EC1E-607E-4DEC-AE94-A1E39800547F", "type": "append", "dependencies": [], "name": "", "isOpalManaged": false, "selector": "head", "value": "<style>.card-grid .simple.card-md.justify-content-between {\n    justify-content: flex-start !important;\n    gap: 8px;\n}</style>"}, {"id": "4EB841C4-D11B-4334-BA62-BFC3270A02A5", "type": "custom_code", "dependencies": [], "name": "", "isOpalManaged": true, "value": function($){// Added via Opal
var utils = window.optimizely.get('utils');
utils.waitForElement('.card-grid .simple.card-md').then(function() {
  var cards = document.querySelectorAll('.card-grid .simple.card-md');
  cards.forEach(function(card) {
    card.style.setProperty('justify-content', 'flex-start', 'important');
    card.style.setProperty('gap', '16px', 'important');
    card.style.setProperty('height', 'auto', 'important');
  });
});
}}, {"id": "14777CA9-C615-4169-8119-627A273119D7", "type": "widget", "dependencies": [], "name": "Carousel", "widget_id": "30318900008", "config": {"headline_1": "The Holiday Stock-Up is here!", "image_1_title": "", "button_3_text": "Shop now", "headline_2": "Early savings on top Covetrus<sup>\u00ae</sup> brands", "image_2_title": "", "copy_1": "Explore limited-time savings on supplies, medications, and more <br> to help prepare your practice for the busy season ahead.", "button_2_text": "Save now", "image_3_title": "", "headline_3": "Save on Zoetis equine products", "copy_2": "Don't wait until Black Friday \u2014  buy 11 eligible products,<br><b>get 1 FREE</b> across categories!<br> <font size=\"1\">Exclusions, terms, and conditions may apply. Click <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/promotions\" style=\"position: relative;width: fit-content;display: inline-block;text-decoration: underline;\">here</a> for more details.</font>", "button_1_text": "Shop deals", "copy_3": "The Zoetis AAEP promotion is here! Start earning rebates on eligible equine<br>vaccines, parasiticides, and more.<br><font size=\"1\">Exclusions, terms, and conditions may apply. Click <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/promotions\" style=\"position: relative;width: fit-content;display: inline-block;text-decoration: underline;\">here</a> for more details.</font>", "image_1": "//cdn.optimizely.com/img/8209600003/ca762b2eeb9d4985a0a553712ec3156d.png", "image_2": "//cdn.optimizely.com/img/8209600003/d25c78f566374d81a4484158ea74b74d.png", "image_3": "//cdn.optimizely.com/img/8209600003/f53b15aefd284a6c9007d10c788f691c.png", "mobile_image_1": "//cdn.optimizely.com/img/8209600003/b3fe4bed058443c098032653fabee4b0.png", "mobile_image_2": "//cdn.optimizely.com/img/8209600003/9a03a12c93b247209af497c33f616c61.png", "mobile_image_3": "//cdn.optimizely.com/img/8209600003/8adddf19151a47a994adedd72f5da0cb.png", "button_3_link": "https://www.mycovetrus.com/CVT-NA/en/USD/c/20059?utm_medium=web&utm_source=banner&utm_campaign=EQ3_ZoetisAAEP_Nov26", "button_2_link": "https://www.mycovetrus.com/CVT-NA/en/USD/c/20039?utm_medium=web&utm_source=banner&utm_campaign=EQ2_CVBAAEP_Nov26", "button_1_link": "https://www.mycovetrus.com/CVT-NA/en/USD/savings-event/?utm_medium=web&utm_source=banner&utm_campaign=EQ1A_PracticeSavingsEvent_Nov26", "image_1_alt": "", "image_2_alt": "", "image_3_alt": ""}, "isOpalManaged": false}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/20059?utm_medium=web&utm_source=banner&utm_campaign=EQ3_ZoetisAAEP_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "B9F2197A-0021-4612-8A83-6AE513EFF163", "selector": ".carousel-cta-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/20039?utm_medium=web&utm_source=banner&utm_campaign=EQ2_CVBAAEP_Nov26", "html": "Save now", "style": "text-transform: none;"}, "type": "attribute", "id": "649626E1-15BA-4CEE-8390-5ECFF9DF1F67", "selector": ".carousel-cta-2"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/b2db0509ffac4af8a7bd49b80d908419.png"}, "type": "attribute", "id": "574FB419-0DCA-4F78-B739-A3EB0C03B383", "selector": ".cona-ad-1 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/19699?utm_medium=web&utm_source=cona_ad&utm_campaign=EQ1_Ethicon_Nov26", "html": "Claim yours", "style": "text-transform: none;"}, "type": "attribute", "id": "ED78B498-D894-4B04-99A4-41B8B38EE86E", "selector": ".cona-ad-1 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/c069c03fa73e4940ac2790d6c55918c5.png"}, "type": "attribute", "id": "4BC3EF54-0C11-4574-8B2D-36DE55C40126", "selector": ".cona-ad-2 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/20043?utm_medium=web&utm_source=cona_ad&utm_campaign=EQ2_Nutramax_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "1CFEA88F-E1EE-4598-86E6-8B7C621A975B", "selector": ".cona-ad-2 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/084209/Valleylab-FT10-Animal-Health-Energy-Platform--Each?utm_medium=web&utm_source=paid_ad&utm_campaign=S1_MedtronicFT10_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "36511A99-B41E-4ABD-98A8-27B722CDF2E2", "selector": ".paid-ad-1 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/d827785b5268458181ff44041a5d0ca7.jpg"}, "type": "attribute", "id": "A9E3BF42-E14C-4CAC-8A2C-1C9B97BBD126", "selector": ".paid-ad-1 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/24950a092d5a46b490f1dd897f2ceac4.jpg"}, "type": "attribute", "id": "8C7F2BCF-6236-4A81-8F37-AA66D6105FD3", "selector": ".paid-ad-2 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/product/087005/Purina-Pro-Plan-Veterinary-Supplements-Diarrhea-Response-Kits,-FortiFlora-for-Cats--?utm_medium=web&utm_source=paid_ad&utm_campaign=S2_Purina_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "21660A42-1B45-4884-A726-CB5466E41CC8", "selector": ".paid-ad-2 .btn-primary.my-0.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/db00f8cceecc47f0bb044f0a5326fad3.png"}, "type": "attribute", "id": "0FBF78BE-8CE5-48C0-8986-887F94F2DE28", "selector": ".feature-product-1 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/f5491142af2a4fae933804b3edb1557c.png"}, "type": "attribute", "id": "B39E6CEC-422F-4272-B7B3-A721A92B3A66", "selector": ".feature-product-2 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/e2b4dd264a5c4a44860047412c84a31b.png"}, "type": "attribute", "id": "DDFDB526-57EC-4C2C-932D-CC41A3B63B25", "selector": ".feature-product-3 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/11e728ec331c4a6e8b87525edaf9f30b.png"}, "type": "attribute", "id": "52DDF13E-3332-4D09-8DB9-70EF92286CCF", "selector": ".feature-product-4 img"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Prascend<sup>\u00ae</sup>\nTablets"}, "type": "attribute", "id": "C0CF8D1B-CF11-4C43-82CE-DBFF25D45605", "selector": ".feature-product-1 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "GastroGard<sup>\u00ae</sup> Oral Paste"}, "type": "attribute", "id": "A06FF833-3550-4911-89A5-5F28B7DA361E", "selector": ".feature-product-2 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "CeraSoothe CHX+KET "}, "type": "attribute", "id": "D765D4AB-809F-4876-8BA9-8B26028AF0FC", "selector": ".feature-product-3 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Adequan i.m.<sup>\u00ae</sup> Injection"}, "type": "attribute", "id": "8D21476A-6547-4984-A2B0-EC7049A39D1B", "selector": ".feature-product-4 strong"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/20025?utm_medium=web&utm_source=featured_product&utm_campaign=EQ1_PRNAAEP_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "591EFAF1-AEF8-47A2-9BBA-FDD5C8E03CA9", "selector": ".feature-product-1 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/10001?utm_medium=web&utm_source=featured_product&utm_campaign=EQ2_Vetoquinol_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "38581B0C-51D5-4910-869A-46866858DE36", "selector": ".feature-product-2 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/SURG-E06-192?utm_medium=web&utm_source=featured_product&utm_campaign=EQ3_IVLines_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "5CD1F433-D58C-4C79-B753-9D6B986929D6", "selector": ".feature-product-3 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/search/firocoxib?query=firocoxib:relevance:manufacturerNameFacet:Covetrus:type:Equine&3Futm_medium%3Dweb=&utm_source=featured_product&utm_campaign=EQ4_Firocoxib_Nov26", "html": "Shop now", "style": "text-transform: none;"}, "type": "attribute", "id": "B5F92206-87A5-46EE-8012-C6574F8C0D34", "selector": ".feature-product-4 .mx-4"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "AAEP offer\n<br>10% back on PRN"}, "type": "attribute", "id": "565E4B6F-F5F3-499B-9419-EBDAEBAA2484", "selector": ".feature-product-1 b"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Vetoquinol\n<br>AAEP promo"}, "type": "attribute", "id": "C1902EA3-10DA-4FCF-929D-A355D5571B42", "selector": ".feature-product-2 b"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Shop Covetrus<sup>\u00ae</sup> brand\n<br>firocoxib"}, "type": "attribute", "id": "997EC46D-268D-48C6-B872-9F3943407395", "selector": ".feature-product-4 b"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Shop deals", "style": "text-transform: none;"}, "type": "attribute", "id": "D9364AD9-9E3C-48E8-AF8A-D73AC59A0BF5", "selector": "a.carousel-cta-1"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Covetrus<sup>\u00ae</sup>\nBrand Products"}, "type": "attribute", "id": "770C6442-F456-4BD7-B485-C7E5BBF18665", "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper > div:nth-of-type(2) b.text-cvet-blue"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Covetrus\n\nCompounding Pharmacies"}, "type": "attribute", "id": "DA5F6F4B-9253-4031-8EE3-7423BECC5F2F", "selector": ".cms-container.card-box.w-100.bg-none.my-0 div:nth-of-type(3) b.text-cvet-blue"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Featured products & insights"}, "type": "attribute", "id": "4FCE3DB9-6C13-4237-B09C-79E7F3763231", "selector": ".mt-6 b"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "6023C756-CC25-4B96-B86C-523296779052", "selector": ".mx-auto"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"style": "text-transform: none;"}, "type": "attribute", "id": "EB22A48A-AECA-4628-BD28-03D1A7C60458", "selector": ".cards-wrapper > div:nth-of-type(1) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "2D43D9F6-7D83-4C82-B9C7-79ABCF0FDD1B", "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper > div:nth-of-type(2) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Explore products", "style": "text-transform: none;"}, "type": "attribute", "id": "914B9E13-949E-424C-A1F0-B254CF4E2CC7", "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper > div:nth-of-type(3) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "917117EC-C1B8-47B8-9E5B-2A06E34B8A9D", "selector": ".my-9.cms-container .my-0.btn-primary.mx-0"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "EED0B662-8521-4E84-8C61-41B5313D2C04", "selector": ".my-9.cms-container > .cards-wrapper > div:nth-of-type(2) .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Learn more", "style": "text-transform: none;"}, "type": "attribute", "id": "A180E73B-FD64-4D92-AE8E-4914531E3664", "selector": ".fg-black .my-3"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "936EC499-6505-4A18-9592-1BB7FF1BC1D8", "selector": ".slide.active > div:nth-of-type(1) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "01C2201D-142B-4999-A644-69552216655B", "selector": ".slide.active > div:nth-of-type(2) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "E738C863-1B80-46B4-ADD5-881542D470FE", "selector": ".slide.active > div:nth-of-type(3) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Login to view pricing", "style": "text-transform: none;"}, "type": "attribute", "id": "B71EC6B3-8A28-405D-8288-A1D837CF67F2", "selector": ".slide.active > div:nth-of-type(4) .btn-login"}, {"css": {}, "isOpalManaged": false, "dependencies": [], "name": "", "attributes": {"html": "Stock up on\n<br>IV lines"}, "type": "attribute", "id": "385A321B-F6FE-4D9A-8C14-6FC614883F82", "selector": ".feature-product-3 b"}, {"id": "BAFE7852-DEF8-4430-90F4-48462B185A4C", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".feature-product-1 .paragraph", "attributes": {"html": "<b>AAEP offer\n<br>10% back on PRN"}, "css": {}}, {"id": "EB4D9C7A-A476-4FBE-8863-4D80A72897F4", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".feature-product-2 .paragraph", "attributes": {"html": "<b>Vetoquinol\n<br>AAEP promo"}, "css": {}}, {"id": "DD6543C7-9FD0-4431-B21F-22299997265E", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".feature-product-3 .paragraph", "attributes": {"html": "<b>Stock up on\n<br>IV lines"}, "css": {}}, {"id": "4EBDFB48-CF20-44C4-8716-BEFB729FFA47", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".feature-product-4 .paragraph", "attributes": {"html": "<b>Shop Covetrus<sup>\u00ae</sup> brand\n<br>firocoxib"}, "css": {}}]}]}], "weightDistributions": null, "name": "Equine Homepage - Practice Savings Event", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4704246426238976"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["22529500951"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "5383817928638464", "endOfRange": null}], [{"entityId": "4677050592657408", "endOfRange": null}], [{"entityId": "6527508160446464", "endOfRange": null}], [{"entityId": "4721112376934400", "endOfRange": null}], [{"entityId": "6093302888398848", "endOfRange": null}]], "experimentWeights": {"4609318689964032": 333, "6500049897652224": 10000, "6511259426750464": 343, "5875165710516224": 333, "5670254448214016": 333, "5880477377101824": 333, "6654533563056128": 333, "5036052446969856": 333, "6161952353812480": 333, "6584164818878464": 333, "5107304494792704": 333, "5317527423680512": 333, "6091583609634816": 333, "4677050592657408": 10000, "6667781356126208": 333, "4784008700100608": 10000, "6302689842167808": 333, "4627087774973952": 333, "5830146333081600": 10000, "6527508160446464": 10000, "4825829518082048": 333, "5948309473329152": 333, "5383817928638464": 10000, "6472858560364544": 333, "6613719159930880": 10000, "6650012271116288": 333, "6021214865457152": 333, "5735218596806656": 333, "5487696141877248": 10000, "6613596048719872": 333, "6191383583653888": 333, "4985721402949632": 333, "5739739888746496": 333, "5172268643385344": 333, "6438115663937536": 333, "6298168550227968": 333, "4721112376934400": 10000, "5190037728395264": 333, "5593690733805568": 333, "6093302888398848": 10000}, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "4955684784046080", "name": "Banner | Para Product Search | Everyone", "commitId": "5765163712774144", "groupId": null, "holdback": 500, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5574914713845760", "integrationSettings": null, "variations": [{"id": "6087454099243008", "name": "Variation #1", "actions": [{"viewId": "6731166342971392", "changes": [{"id": "D2DCF8B4-EC1B-4482-B1B6-47D44118C378", "type": "append", "dependencies": [], "name": "", "isOpalManaged": false, "selector": "head", "value": "<style>#content-banner-container {\r\n\r\n    background: url('https://cdn.optimizely.com/img/8209600003/22827d4c53ac4e218e67eaa9e83ee224.svg');\r\n    background-size: cover;\r\n    /* background-position: -900px center; */\r\n    background-position: -775px center; /* for para Zoetis Nov. 26*/\r\n}\r\n\r\n#content-banner-container h2 {\r\n\r\n    color: #021660;\r\n    font-weight: 600\r\n}\r\n\r\n#content-banner-container>div>span:first-of-type {\r\n\r\n    font-size: clamp(1rem, 2vw, 16px);\r\n    display: inline-block;\r\n    color: #000000;\r\n    font-weight: 600;\r\n    /* max-width: 630px; */\r\n    max-width: 525px; /* for para Zoetis Nov. 26*/\r\n}\r\n\r\n#content-banner-container>div>span:last-of-type {\r\n\r\n    color: #000000;\r\n    font-size: .5rem;\r\n}\r\n\r\n#content-banner-container img {\r\n\r\n    display: none;\r\n    object-fit: cover;\r\n    object-position: center;\r\n    width: 100%;\r\n}\r\n\r\n.content-details-link {\r\n\r\n    text-decoration: underline;\r\n    display: inline;\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n\r\n    #content-banner-container {\r\n\r\n        background-position: inherit;\r\n    }\r\n\r\n    /* #content-banner-container > div > span:first-of-type {\r\n\r\n            max-width: 630px;\r\n        } */\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n\r\n    #content-banner-container>div>span:first-of-type {\r\n\r\n        max-width: 560px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n\r\n    #content-banner-container {\r\n\r\n        background: inherit;\r\n        background-color: #e8f7ff;\r\n    }\r\n\r\n    #content-banner-container img {\r\n\r\n        display: block;\r\n    }\r\n\r\n    /* #content-banner-container > div > span:first-of-type {\r\n\r\n            max-width: 590px;\r\n        } */\r\n}\r\n\r\n@media screen and (min-width: 501px) {\r\n\r\n    #content-banner-container>div>.btn {\r\n\r\n        width: fit-content;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n\r\n    #content-banner-container>div>span:first-of-type {\r\n\r\n        font-size: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 375px) {\r\n\r\n    #content-banner-container>div {\r\n\r\n        padding: .75rem;\r\n    }\r\n}</style>"}, {"id": "DB52A56D-5177-4DBA-8268-5287171C19D4", "type": "append", "dependencies": [], "name": "Para banner", "isOpalManaged": false, "selector": ".BottomHeaderSlot", "value": "<section id=\"content-banner-container\">\r\n    <img src=\"https://cdn.optimizely.com/img/8209600003/17ef995fd1394fd99f21adb66abe0fb4.svg\" />\r\n    <div class=\"px-md-7 py-md-7 px-sm-4 py-sm-4\">\r\n        <h2>Protect against parasites with Zoetis</h2>\r\n        <span>Equip your practice with Simparica Trio<sup>&reg;</sup> and Revolution<sup>&reg;</sup> Plus to help guard pets from fleas, ticks, and heartworm disease.</span><br>\r\n        <span>Visit <a href=\"https://www.zoetisus.com/content/_assets/docs/vmips/package-inserts/simparica-trio-prescribing-information.pdf\" class=\"content-details-link\" target=\"_blank\" id=\"zoetis-simparica-link\">Simparica Trio</a> and <a id=\"zoetis-revolution-link\" href=\"https://www.zoetisus.com/content/_assets/docs/vmips/package-inserts/revolution-plus-prescribing-information.pdf\" class=\"content-details-link\" target=\"_blank\">Revolution Plus</a> pages for product and safety information.</span><br>\r\n        <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/CVT-NA/en/USD/CVT-NA/en/USD/c/PARA?query=:relevance:allCategories:PARA:manufacturerNameFacet:Zoetis&utm_medium%3Dweb%20=&utm_source=search_banner&utm_campaign=Zoetis_para_banner_Q426\" id=\"content-banner-CTA\" class=\"btn btn-primary px-8 mt-5\">Shop Zoetis</a>\r\n    </div>\r\n</section>", "operator": "before"}]}]}], "weightDistributions": null, "name": "Everyone", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4955684784046080"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["6731166342971392"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "5574914713845760", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "5052913853136896", "name": "Compounding Landing Page", "commitId": "6498566114377728", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4555730183782400", "integrationSettings": null, "variations": [{"id": "5431340493963264", "name": "Variation #1", "actions": [{"viewId": "4836086455730176", "changes": [{"css": {}, "dependencies": [], "name": "", "attributes": {"href": "https://www.mycovetrus.com/CVT-NA/en/USD/c/PHAR-CPD", "html": "Shop Compounding", "style": "color: #021660;\ntext-align: center;\nwidth: 100%;\ntext-decoration: underline;"}, "type": "attribute", "id": "09134968-715E-4AFB-881F-B37D1289DE59", "selector": "cms-card-box:nth-of-type(1) a"}, {"css": {}, "dependencies": [], "name": "", "attributes": {"html": "<strong style=\"font-weight:800\" data-optly-e691d387-06f5-421a-9631-ec574db7ed40=\"\" data-optly-198e8050-8af4-4c15-9f22-e7782f838c92=\"\">\n  With 8+ dose forms, 18+ flavor options, and consistent 1-3 day shipping\n</strong>\n<span style=\"color:black\">most orders, we\u2019re here to help you prescribe with confidence \u2014\u00a0because easier dosing means happier patients and healthier outcomes.</span>\n<br data-optly-198e8050-8af4-4c15-9f22-e7782f838c92=\"\">\n</br>\n<br data-optly-198e8050-8af4-4c15-9f22-e7782f838c92=\"\">\n</br>\n<a style=\"color: rgb(2, 22, 96);width: 100%; text-decoration: underline;\" href=\"https://www.mycovetrus.com/CVT-NA/en/USD/c/PHAR-CPD\" data-uw-rm-brl=\"PR\" data-uw-original-href=\"https://www.mycovetrus.com/CVT-NA/en/USD/c/PHAR-CPD\" data-optly-09134968-715e-4afb-881f-b37d1289de59=\"\" data-optly-198e8050-8af4-4c15-9f22-e7782f838c92=\"\">\n  Shop Compounding\n</a>", "style": "text-align: center;\ncolor: #021660;"}, "type": "attribute", "id": "E691D387-06F5-421A-9631-EC574DB7ED40", "selector": "p.px-7"}, {"css": {}, "dependencies": [], "name": "", "attributes": {"html": "Personalized, pet-friendly medications<br>\r\nwhen your patients need them.", "style": "text-align: center;\nfont-family: 'Mulish';"}, "type": "attribute", "id": "10717B91-B4E0-4AD9-879A-1E0993AF7328", "selector": "cms-card-box:nth-of-type(1) h1"}, {"css": {}, "dependencies": [], "name": "", "attributes": {"html": "Fluoxetine Soft Chews"}, "type": "attribute", "id": "201C0FF7-18BF-42E3-A7D8-5E8D173F39D5", "selector": "article:nth-of-type(1) strong"}, {"css": {}, "dependencies": [], "name": "", "attributes": {"html": "<strong data-optly-201c0ff7-18bf-42e3-a7d8-5e8d173f39d5=\"\" data-optly-e5291aac-241a-492e-a553-7ce6cdc136b7=\"\">\n  Fluoxetine Soft Chews\n</strong>\nHelp promote calm<br>behavior in dogs and cats.\n<br data-optly-e5291aac-241a-492e-a553-7ce6cdc136b7=\"\">\nNow in a tasty tuna flavor!\n<a href=\"https://vrxpro.covetrus.com/\" class=\"btn btn-primary\" data-uw-rm-brl=\"PR\" data-uw-original-href=\"https://vrxpro.covetrus.com/\" data-optly-e5291aac-241a-492e-a553-7ce6cdc136b7=\"\">\n  Prescribe Now\n</a>"}, "type": "attribute", "id": "E5291AAC-241A-492E-A553-7CE6CDC136B7", "selector": "article:nth-of-type(1) > div"}, {"css": {}, "dependencies": [], "name": "", "attributes": {"html": "Methimazole Soft Chews"}, "type": "attribute", "id": "6535F521-A964-40B3-B419-E9F1DE477BAD", "selector": "article:nth-of-type(2) strong"}, {"css": {}, "dependencies": [], "name": "", "attributes": {"html": "<strong data-optly-6535f521-a964-40b3-b419-e9f1de477bad=\"\">\n  Methimazole Soft Chews\n</strong>\nHelp manage feline<br>\nhyperthyroidism. Now in<br> \na tasty tuna flavor!\n<a href=\"https://vrxpro.covetrus.com/\" class=\"btn btn-primary\" data-uw-rm-brl=\"PR\" data-uw-original-href=\"https://vrxpro.covetrus.com/\">\n  Prescribe Now\n</a>"}, "type": "attribute", "id": "38333FE5-F280-4078-A294-9118E97F1B0F", "selector": "article:nth-of-type(2) > div"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "BB2B4018-E6B7-4BF0-89B6-17CE7645FE10", "selector": "article:nth-of-type(1) a.btn-primary"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "73930A95-E4F7-43C5-BCF9-C8BB28BC7B46", "selector": "article:nth-of-type(2) a.btn-primary"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "3D48E8E8-D7FC-4027-A28F-CAAE9E92B690", "selector": "article:nth-of-type(3) a.btn-primary"}, {"id": "639A1C90-0A70-4677-9D5E-07264FED1FB6", "type": "attribute", "dependencies": [], "name": "", "selector": "article:nth-of-type(2) > img", "attributes": {"src": "//cdn.optimizely.com/img/8209600003/5f75205a51164c0faa122d5edf7b9efa.jpg", "style": "max-width: 250px;\nmargin: 0 auto;\npadding-top: 24px;"}, "css": {}}, {"id": "A008AD85-4C27-4AB2-98C1-E063F3201451", "type": "attribute", "dependencies": [], "name": "", "selector": "article:nth-of-type(1) > img", "attributes": {"src": "//cdn.optimizely.com/img/8209600003/9508cda3cef84b97ba7de8dd8a02b5f5.jpg", "style": "max-width: 250px;\nmargin: 0 auto;\npadding-top: 24px;"}, "css": {}}, {"id": "F9AABC48-941F-40D0-8D19-9BFEAE9E98F2", "type": "attribute", "dependencies": [], "name": "", "selector": "article:nth-of-type(3) > img", "attributes": {"srcset": "//cdn.optimizely.com/img/8209600003/0bda86859cc14fdfa7a37302a430adeb.jpg", "style": "max-width: 250px;\nmargin: 0 auto;\npadding-top: 24px;"}, "css": {}}, {"id": "55ACCA29-1BD0-41D9-B484-C8A395FC0C22", "type": "attribute", "dependencies": [], "name": "", "selector": "cms-card-box:nth-of-type(1) .cards-wrapper", "attributes": {"style": "background-color: #E8F7FF;"}, "css": {}}, {"id": "198E8050-8AF4-4C15-9F22-E7782F838C92", "type": "attribute", "dependencies": [], "name": "", "selector": ".paragraph-component.my-5 > div", "attributes": {"html": "<h1 class=\"px-7 pb-6\" style=\"font-family: Mulish;\" data-optly-10717b91-b4e0-4ad9-879a-1e0993af7328=\"\" data-optly-198e8050-8af4-4c15-9f22-e7782f838c92=\"\">\n  Personalized, pet-friendly medications\n  <br>\n  when your patients need them.\n</h1>\n<p class=\"px-7\" style=\" color: rgb(2, 22, 96);\" data-optly-e691d387-06f5-421a-9631-ec574db7ed40=\"\" data-optly-198e8050-8af4-4c15-9f22-e7782f838c92=\"\">\n  <strong style=\"font-weight:800\" data-optly-e691d387-06f5-421a-9631-ec574db7ed40=\"\" data-optly-198e8050-8af4-4c15-9f22-e7782f838c92=\"\">\n    With 8+ dose forms, 18+ flavor options, and consistent 1-3 day shipping\n  </strong>\n  on most orders, we\u2019re here to help you prescribe with confidence \u2014\u00a0because easier dosing means happier patients and healthier outcomes.\n  <br><br>\n  <a style=\"color: rgb(2, 22, 96);width: 100%; text-decoration: underline;\" href=\"https://www.mycovetrus.com/CVT-NA/en/USD/c/PHAR-CPD\" data-uw-rm-brl=\"PR\" data-uw-original-href=\"https://www.mycovetrus.com/CVT-NA/en/USD/c/PHAR-CPD\" data-optly-09134968-715e-4afb-881f-b37d1289de59=\"\" data-optly-198e8050-8af4-4c15-9f22-e7782f838c92=\"\">\n    Shop Compounding\n  </a>\n</p>"}, "css": {}}, {"id": "B5D12EBF-166A-4223-B9AF-C0F4C07F1059", "type": "attribute", "dependencies": [], "name": "", "selector": "cms-card-box:nth-of-type(1) .card-wrap.mx-0.my-5", "attributes": {"html": "<covetrus-paragraph class=\"paragraph-component\">\n  <div class=\"paragraph-component mx-0 my-5 w-auto\">\n    <div style=\"display: flex; flex-direction: column;\" data-optly-198e8050-8af4-4c15-9f22-e7782f838c92=\"\">\n      <h1 class=\"px-7 pb-6\" style=\"font-family: Mulish;\" data-optly-10717b91-b4e0-4ad9-879a-1e0993af7328=\"\" data-optly-198e8050-8af4-4c15-9f22-e7782f838c92=\"\">\n        Personalized, pet-friendly medications\n        <br>\n        when your patients need them.\n      </h1>\n      <p class=\"px-7\" style=\" color: rgb(2, 22, 96);\" data-optly-e691d387-06f5-421a-9631-ec574db7ed40=\"\" data-optly-198e8050-8af4-4c15-9f22-e7782f838c92=\"\">\n        <strong style=\"font-weight:800\" data-optly-e691d387-06f5-421a-9631-ec574db7ed40=\"\" data-optly-198e8050-8af4-4c15-9f22-e7782f838c92=\"\">\n          With 8+ dose forms, 18+ flavor options, and consistent 1-3 day shipping\n        </strong>\n        <span style=\"color:black\">on most orders, we\u2019re here to help you prescribe with confidence \u2014\u00a0because easier dosing means happier patients and healthier outcomes.</span>\n        <br>\n        <br>\n        <a style=\"color: rgb(2, 22, 96);width: 100%; text-decoration: underline;\" href=\"https://www.mycovetrus.com/CVT-NA/en/USD/c/PHAR-CPD\" data-uw-rm-brl=\"PR\" data-uw-original-href=\"https://www.mycovetrus.com/CVT-NA/en/USD/c/PHAR-CPD\" data-optly-09134968-715e-4afb-881f-b37d1289de59=\"\" data-optly-198e8050-8af4-4c15-9f22-e7782f838c92=\"\">\n          Shop Compounding\n        </a>\n      </p>\n    </div>\n  </div>\n</covetrus-paragraph>"}, "css": {}}]}]}], "weightDistributions": null, "name": "Everyone", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5052913853136896"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["4836086455730176"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "4555730183782400", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "5500644592189440", "name": "Optimizely Tech Support (Copy of TEST copy T34: SRP Recommendations ROLLOUT) ", "commitId": "5038468412735488", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23476472300"], "audienceName": "Desktop Only", "changes": null, "id": "6733483463671808", "integrationSettings": null, "variations": [{"id": "5802725932793856", "name": "Original - No SRP Recommendations", "actions": [{"viewId": "6217525301084160", "changes": [{"css": {}, "dependencies": [], "attributes": {"remove": true}, "type": "attribute", "id": "7753bb117a8d4f908585dda057e08819", "selector": "body > app-root > main > cx-page-layout > cx-page-slot.RecommendedProductsSlot.has-components > cvet-carousel-recommended"}]}]}, {"id": "4546759719387136", "name": "Variation #1 - Smaller recs top of page FINAL - original 4 across", "actions": [{"viewId": "6217525301084160", "changes": [{"id": "196bb71db19a4c1a85dd9073c4d68ded", "type": "custom_code", "value": function($){window.optimizely = window.optimizely || [];
var utils = window.optimizely.get("utils");

let title = '<covetrus-paragraph class="paragraph-component"><div class="paragraph-component mx-0 my-6 w-auto"><h2 class="h2 text-cvet-blue"><b>Product Spotlights</b></h2></covetrus-paragraph>';

var style = document.createElement("style");
utils.waitForElement(".RecommendedProductsSlot").then(function (el) {
  // product-carousel-wrap
  //console.warn('1');

  utils.waitForElement('covetrus-quick-access').then(function (insert_point) {
  	//console.warn(insert_point);
  	// put the code here
    
    insert_point.insertAdjacentElement('afterend', el);
    
    insert_point.insertAdjacentHTML('afterend', title);
    
	setTimeout(() => { 
  	document.querySelector('body').click();
  	}, "2500");
  }); 
});
}, "dependencies": []}, {"id": "930f5bff6f9548c6b4285cc486f93b1f", "type": "append", "selector": "head", "value": "<style>cvet-carousel-recommended {width:100% !important}\n#cvet-carousel-container * div.image-circles {display:none !important;}\n#cvet-carousel-container * cvet-product .dis-column.grid-component .header {\n    display: flex;\n    grid-row: 1; /* Set the grid row to 1 */\n    grid-column: 1 / span 4; /* Span all 4 columns */\n    \n    width: auto;\n    font-size: 12px;\n  position: absolute;\n    top: 4px;\n    width: 90%;\n}\n\n#cvet-carousel-container * cvet-product .product-purchase-history {\n    \n     box-shadow: none; \n     margin-bottom: 0; \n     padding: 2px 5px;\n    width: 100%;\n}\n#cvet-carousel-container * cvet-product .product-purchase-history svg{\n  height:1.1rem;\n  width:1.1rem;\n  display:none;\n}\n#cvet-carousel-container * cvet-product * .info-cont {\n\n    margin-left: -10px;\n    font-size: 9x;}\n#cvet-carousel-container * cvet-product > div { grid-template-columns: 1fr 1fr;}\n\n\n#cvet-carousel-container * .grid-component.dis-column {\n  /*display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr; /* Two columns */\n  /*gap: 10px; /* Adjust the gap between columns as needed */\n  /*grid-template-rows: min-content; /* Set the height of the first row to fit its content */\n  /*grid-template-areas: \n    \"main-left column2\"; /* Define areas for main-left and column2 */\n  /*gap: 10px; /* Adjust the gap between columns as needed */\n /* overflow: hidden;*/\n    display: grid;\n    grid-template-columns: 40% 60%;\n    gap: 10px;\n    grid-template-areas: \"main-left main-left main-left main-left\"\n                         \"column2 column2 column2 column2\";\n    overflow: hidden;\n\n}\n\n#cvet-carousel-container * .main-left {\n  grid-column: 1; /* Place in the first column */\n  grid-row:2;\n  max-height:110px;\n  margin-top:8px;\n}\n\n#cvet-carousel-container * .column2 {\n  grid-column: 2; /* Place in the second column */\n  grid-row:2;\n  margin-top:8px;\n}\n#cvet-carousel-container * .column3 {\n  grid-column: 1 !important; /* Place in the second column */\n  grid-row:3 !important;\n}\n\n#cvet-carousel-container * .bottom {\n    grid-row: 3 !important;\n    grid-column: 2;\n    display: flex;\n    flex-direction: column;\n  max-height:50px;\n}\n\n#cvet-carousel-container * .cvet-item-counter {\n    width: 40px;height:40px;\n}\n#cvet-carousel-container * #add-to-cart-btn {font-size:14px;margin: 0;\n    height: 100%;\n    padding: 5px !important;\n    line-height: 14px;\n    width: 90%;}\n\n/* Optionally hide the header */\n#cvet-carousel-container * .header {\n  display: none;\n}\n#cvet-carousel-container * cms-product-carousel-items cvet-product .column2{min-height:100px !important}\n#cvet-carousel-container * .carousel-panel {max-height:330px;min-height:225px;overflow:hidden;}\n#cvet-carousel-container * .price-value {font-size:20px;}\n#cvet-carousel-container * #product-rating {display:none !important;}\n#cvet-carousel-container * .listing .cvet-item-counter, #cvet-carousel-container * .add-to-basket {height:1.8rem;}\n#cvet-carousel-container * cvet-product .dis-column #product-image-container {height:90px;width:80px;}\n\n#cvet-carousel-container * covetrus-stock-messages {display:block;width:100%;min-width:120px;\n}\n#cvet-carousel-container * cvet-product .grid-component #product-subtitle {font-size:10px;}\n#cvet-carousel-container * cvet-product .grid-component #product-name {font-size:12px !important;width:96%;}\n#cvet-carousel-container * .listing .cvet-item-counter .item-counter {width:2.5rem;}\n#cvet-carousel-container * .listing .quantity {padding-right:.25rem;}\n#cvet-carousel-container * .cvet-product-detail .item-wrapper {max-height:220px; min-height:215px;padding.5rem;}\n#cvet-carousel-container * .cvet-product-detail {\n    min-height: 100px;\n    height: 100%;\n    max-height: 200px;\n}\n.cvet-carousel-container .indicators {display:none;}\n.cvet-carousel-container .indicators>button[disabled] button { background-color:#008556;}\n#cvet-carousel-container * .stock-level-message-wrapper {position:absolute;}\n.container-title-sorting {margin-top:40px;}\n#cvet-carousel-container * .loginForPricing {\n font-size: 10px;\n    font-weight: 700;\n    line-height: 2rem;\n  padding: 0 5px 0 0;\n  border-radius:0;\n}\n@media (max-width:972px) {\n#cvet-carousel-container * .loginForPricing {\n    line-height: 1.2rem;\n  padding: 0 0.25rem; }\n}\n@media (max-width:1050px){\n  #cvet-carousel-container * #add-to-cart-btn {\n    font-size: 12px;\n    line-height: .7rem;\n}\n  \n}\n@media (max-width:800px){\n  .product-carousel-wrap {display:none;}\n}</style>", "dependencies": []}, {"css": {"position": "relative"}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "1fe280439657452791674ff08f7fe59f", "selector": "cvet-carousel-recommended"}, {"id": "1fe280439657452791674ff08f7fe59f-rearrange", "type": "rearrange", "selector": "cvet-carousel-recommended", "insertSelector": "covetrus-product-list-header", "operator": "before", "dependencies": ["1fe280439657452791674ff08f7fe59f"]}]}]}, {"id": "6094390048325632", "name": "Variation #2 - Removing White Space + Scaling Even More - 3 across", "actions": [{"viewId": "6217525301084160", "changes": [{"id": "9462f82d146045a89cef5ed35c4c799f", "src": "/actions/1c3bcef19bb8b48cbb09f39835c0fcc5eb70c9af9e79aa36b9a56db14759fe61.js", "dependencies": [], "type": "custom_code"}, {"id": "f3f7411870804f7dae12feb62b5fd32a", "type": "append", "selector": "head", "value": "<style>cvet-carousel-recommended {width:100% !important}\n#cvet-carousel-container * div.image-circles {display:none !important;}\n#cvet-carousel-container * cvet-product .dis-column.grid-component .header {\n    display: flex;\n    grid-row: 1; /* Set the grid row to 1 */\n    grid-column: 1 / span 4; /* Span all 4 columns */\n    \n    width: auto;\n    font-size: 10px;\n  position: absolute;\n    top: 4px;\n    width: 90%;\n}\n.cvet-carousel-container .arrows-container {margin-top:-10px;}\n\n#cvet-carousel-container * cvet-product .product-purchase-history {\n    \n     box-shadow: none; \n     margin-bottom: 0; \n     padding: 2px 5px;\n    width: 100%;\n}\n#cvet-carousel-container * cvet-product .product-purchase-history svg{\n  height:1.1rem;\n  width:1.1rem;\n  display:none;\n}\n#cvet-carousel-container * cvet-product * .info-cont {\n\n    margin-left: -10px;\n    font-size: 9x;}\n#cvet-carousel-container * cvet-product > div { grid-template-columns: 1fr 1fr;}\n\n\n#cvet-carousel-container * .grid-component.dis-column {\n  /*display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr; /* Two columns */\n  /*gap: 10px; /* Adjust the gap between columns as needed */\n  /*grid-template-rows: min-content; /* Set the height of the first row to fit its content */\n  /*grid-template-areas: \n    \"main-left column2\"; /* Define areas for main-left and column2 */\n  /*gap: 10px; /* Adjust the gap between columns as needed */\n /* overflow: hidden;*/\n    display: grid;\n    grid-template-columns: 40% 60%;\n    gap: 10px;\n    grid-template-areas: \"main-left main-left main-left main-left\"\n                         \"column2 column2 column2 column2\";\n    overflow: hidden;\n\n}\n\n#cvet-carousel-container * .main-left {\n  grid-column: 1; /* Place in the first column */\n  grid-row:2;\n  max-height:110px;\n  margin-top:8px;\n}\n\n#cvet-carousel-container * .column2 {\n  grid-column: 2; /* Place in the second column */\n  grid-row:2;\n  margin-top:8px;\n}\n#cvet-carousel-container * .column3 {\n  grid-column: 1 !important; /* Place in the second column */\n  grid-row:3 !important;\n}\n\n#cvet-carousel-container * .bottom {\n    grid-row: 3 !important;\n    grid-column: 2;\n    display: flex;\n    flex-direction: column;\n  max-height:50px;\n}\n\n#cvet-carousel-container * .cvet-item-counter {\n    width: 40px;height:40px;\n}\n#cvet-carousel-container * #add-to-cart-btn {font-size:14px;margin: 0;\n    height: 100%;\n    padding: 5px !important;\n    line-height: 14px;\n    width: 90%;}\n\n/* Optionally hide the header */\n#cvet-carousel-container * .header {\n  display: none;\n}\n#cvet-carousel-container * cms-product-carousel-items cvet-product .column2{min-height:50px !important}\n#cvet-carousel-container * .carousel-panel {max-height:205px;min-height:200px;overflow:hidden;}\n#cvet-carousel-container * .price-value {font-size:15px;}\n#cvet-carousel-container * #product-rating {display:none !important;}\n#cvet-carousel-container * .listing .cvet-item-counter, #cvet-carousel-container * .add-to-basket {height:1.7rem;}\n#cvet-carousel-container * cvet-product .dis-column #product-image-container {height:60px;width:80px;}\n\n#cvet-carousel-container * covetrus-stock-messages {display:block;width:100%;min-width:120px;\n}\n#cvet-carousel-container * cvet-product .grid-component #product-subtitle {font-size:10px;}\n#cvet-carousel-container * cvet-product .grid-component #product-name {\n    font-size: 12px !important;\n    width: 96%;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n}\n#cvet-carousel-container * .listing .cvet-item-counter .item-counter {width:2.5rem;}\n#cvet-carousel-container * .listing .quantity {padding-right:.25rem;}\n#cvet-carousel-container * .cvet-product-detail .item-wrapper {max-height:200px; min-height:175px;padding.5rem;}\n#cvet-carousel-container * .cvet-product-detail {\n    min-height: 100px;\n    height: 100%;\n    max-height: 200px;\n}\n.cvet-carousel-container .indicators {display:none;}\n.cvet-carousel-container .indicators>button[disabled] button { background-color:#008556;}\n#cvet-carousel-container * .stock-level-message-wrapper {position:absolute;}\n.container-title-sorting {margin-top:40px;}\n#cvet-carousel-container * .loginForPricing {\n font-size: 10px;\n    font-weight: 700;\n    line-height: 2rem;\n  padding: 0 5px 0 0;\n  border-radius:0;\n}\n@media (max-width:972px) {\n#cvet-carousel-container * .loginForPricing {\n    line-height: 1.2rem;\n  padding: 0 0.25rem; }\n}\n@media (max-width:1050px){\n  #cvet-carousel-container * #add-to-cart-btn {\n    font-size: 12px;\n    line-height: .7rem;\n}\n  \n}\n@media (max-width:800px){\n  .product-carousel-wrap {display:none;}\n}\n\n/*close the gap between recomendations and results\"*/\n@media (min-width:801px){\n  .SearchResultsListPageTemplate .covetrus-product-list-header {\n    width: 100%;\n    padding-top: 0px;\n    margin-top: -30px;\n}\n}\n\ncvet-carousel-recommended .h2.text-cvet-blue { font-size:1.6rem;}</style>", "dependencies": []}, {"css": {"position": "relative"}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "8229b345bc6d4dd0bc434ea1ad8f1cd9", "selector": "cvet-carousel-recommended"}, {"id": "8229b345bc6d4dd0bc434ea1ad8f1cd9-rearrange", "type": "rearrange", "selector": "cvet-carousel-recommended", "insertSelector": "covetrus-product-list-header", "operator": "before", "dependencies": ["8229b345bc6d4dd0bc434ea1ad8f1cd9"]}, {"css": {}, "dependencies": ["8229b345bc6d4dd0bc434ea1ad8f1cd9-rearrange"], "attributes": {"class": "carousel-panel size-3"}, "type": "attribute", "id": "d1fa0efe8e9043a79acaf835ec96dc4c", "selector": ".size-4"}, {"css": {}, "dependencies": [], "attributes": {"hide": true}, "type": "attribute", "id": "6ca8ec26fc4047f69c5fab07a2080837", "selector": "#cvet-carousel-container > div > div.arrows-container"}, {"id": "058EA12A-13C3-4BF0-A8C2-D3129078F46A", "type": "append", "dependencies": [], "selector": "covetrus-product-list-header", "value": "<h1>OPTIMIZELY TEST</H1>", "operator": "before"}]}]}, {"id": "6141563234418688", "name": "TEST No changes ", "actions": []}, {"id": "5167769997017088", "name": "Simple Test", "actions": [{"viewId": "6217525301084160", "changes": [{"id": "CC3B90F5-3B05-4FE3-9E8F-9900A13032B5", "src": "/actions/a9e52f9b0b7ce9ce4160785db5bb409b060464aa7cf8d4ea4ab851657089d53f.js", "dependencies": [], "type": "insert_html"}]}]}, {"id": "6107921762222080", "name": "OPTIMIZELY TECH SUPPORT (Variation #2 - Removing White Space + Scaling Even More - 3 across)", "actions": [{"viewId": "6217525301084160", "changes": [{"id": "63DB19C0-164D-4E12-B9E6-D331B418D5CB", "src": "/actions/07cc8dc2f84b2e0d383b3ed9f70df4fe1f40ce345bb76826ac2a84727bc9600b.js", "dependencies": [], "type": "custom_code"}, {"id": "971005DD-E921-43F7-8ACF-ED27AEE85057", "type": "append", "selector": "head", "value": "<style>cvet-carousel-recommended {width:100% !important}\n#cvet-carousel-container * div.image-circles {display:none !important;}\n#cvet-carousel-container * cvet-product .dis-column.grid-component .header {\n    display: flex;\n    grid-row: 1; /* Set the grid row to 1 */\n    grid-column: 1 / span 4; /* Span all 4 columns */\n    \n    width: auto;\n    font-size: 10px;\n  position: absolute;\n    top: 4px;\n    width: 90%;\n}\n.cvet-carousel-container .arrows-container {margin-top:-10px;}\n\n#cvet-carousel-container * cvet-product .product-purchase-history {\n    \n     box-shadow: none; \n     margin-bottom: 0; \n     padding: 2px 5px;\n    width: 100%;\n}\n#cvet-carousel-container * cvet-product .product-purchase-history svg{\n  height:1.1rem;\n  width:1.1rem;\n  display:none;\n}\n#cvet-carousel-container * cvet-product * .info-cont {\n\n    margin-left: -10px;\n    font-size: 9x;}\n#cvet-carousel-container * cvet-product > div { grid-template-columns: 1fr 1fr;}\n\n\n#cvet-carousel-container * .grid-component.dis-column {\n  /*display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr; /* Two columns */\n  /*gap: 10px; /* Adjust the gap between columns as needed */\n  /*grid-template-rows: min-content; /* Set the height of the first row to fit its content */\n  /*grid-template-areas: \n    \"main-left column2\"; /* Define areas for main-left and column2 */\n  /*gap: 10px; /* Adjust the gap between columns as needed */\n /* overflow: hidden;*/\n    display: grid;\n    grid-template-columns: 40% 60%;\n    gap: 10px;\n    grid-template-areas: \"main-left main-left main-left main-left\"\n                         \"column2 column2 column2 column2\";\n    overflow: hidden;\n\n}\n\n#cvet-carousel-container * .main-left {\n  grid-column: 1; /* Place in the first column */\n  grid-row:2;\n  max-height:110px;\n  margin-top:8px;\n}\n\n#cvet-carousel-container * .column2 {\n  grid-column: 2; /* Place in the second column */\n  grid-row:2;\n  margin-top:8px;\n}\n#cvet-carousel-container * .column3 {\n  grid-column: 1 !important; /* Place in the second column */\n  grid-row:3 !important;\n}\n\n#cvet-carousel-container * .bottom {\n    grid-row: 3 !important;\n    grid-column: 2;\n    display: flex;\n    flex-direction: column;\n  max-height:50px;\n}\n\n#cvet-carousel-container * .cvet-item-counter {\n    width: 40px;height:40px;\n}\n#cvet-carousel-container * #add-to-cart-btn {font-size:14px;margin: 0;\n    height: 100%;\n    padding: 5px !important;\n    line-height: 14px;\n    width: 90%;}\n\n/* Optionally hide the header */\n#cvet-carousel-container * .header {\n  display: none;\n}\n#cvet-carousel-container * cms-product-carousel-items cvet-product .column2{min-height:50px !important}\n#cvet-carousel-container * .carousel-panel {max-height:205px;min-height:200px;overflow:hidden;}\n#cvet-carousel-container * .price-value {font-size:15px;}\n#cvet-carousel-container * #product-rating {display:none !important;}\n#cvet-carousel-container * .listing .cvet-item-counter, #cvet-carousel-container * .add-to-basket {height:1.7rem;}\n#cvet-carousel-container * cvet-product .dis-column #product-image-container {height:60px;width:80px;}\n\n#cvet-carousel-container * covetrus-stock-messages {display:block;width:100%;min-width:120px;\n}\n#cvet-carousel-container * cvet-product .grid-component #product-subtitle {font-size:10px;}\n#cvet-carousel-container * cvet-product .grid-component #product-name {\n    font-size: 12px !important;\n    width: 96%;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n}\n#cvet-carousel-container * .listing .cvet-item-counter .item-counter {width:2.5rem;}\n#cvet-carousel-container * .listing .quantity {padding-right:.25rem;}\n#cvet-carousel-container * .cvet-product-detail .item-wrapper {max-height:200px; min-height:175px;padding.5rem;}\n#cvet-carousel-container * .cvet-product-detail {\n    min-height: 100px;\n    height: 100%;\n    max-height: 200px;\n}\n.cvet-carousel-container .indicators {display:none;}\n.cvet-carousel-container .indicators>button[disabled] button { background-color:#008556;}\n#cvet-carousel-container * .stock-level-message-wrapper {position:absolute;}\n.container-title-sorting {margin-top:40px;}\n#cvet-carousel-container * .loginForPricing {\n font-size: 10px;\n    font-weight: 700;\n    line-height: 2rem;\n  padding: 0 5px 0 0;\n  border-radius:0;\n}\n@media (max-width:972px) {\n#cvet-carousel-container * .loginForPricing {\n    line-height: 1.2rem;\n  padding: 0 0.25rem; }\n}\n@media (max-width:1050px){\n  #cvet-carousel-container * #add-to-cart-btn {\n    font-size: 12px;\n    line-height: .7rem;\n}\n  \n}\n@media (max-width:800px){\n  .product-carousel-wrap {display:none;}\n}\n\n/*close the gap between recomendations and results\"*/\n@media (min-width:801px){\n  .SearchResultsListPageTemplate .covetrus-product-list-header {\n    width: 100%;\n    padding-top: 0px;\n    margin-top: -30px;\n}\n}\n\ncvet-carousel-recommended .h2.text-cvet-blue { font-size:1.6rem;}</style>", "dependencies": []}, {"css": {"position": "relative"}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "6F2F002A-7CF0-45E4-B626-95433C46909A", "selector": "cvet-carousel-recommended"}, {"id": "6F2F002A-7CF0-45E4-B626-95433C46909A-rearrange", "type": "rearrange", "selector": "cvet-carousel-recommended", "insertSelector": "covetrus-product-list-header", "operator": "before", "dependencies": ["6F2F002A-7CF0-45E4-B626-95433C46909A"]}, {"css": {}, "dependencies": ["6F2F002A-7CF0-45E4-B626-95433C46909A-rearrange"], "attributes": {"class": "carousel-panel size-3"}, "type": "attribute", "id": "AAFF5385-3051-4F78-91B8-0CA5A04C07DA", "selector": ".size-4"}, {"css": {}, "dependencies": [], "attributes": {"hide": true}, "type": "attribute", "id": "CA24EDEC-C7CA-4581-AFE0-31C1781DAE48", "selector": "#cvet-carousel-container > div > div.arrows-container"}]}]}], "weightDistributions": [{"entityId": "6107921762222080", "endOfRange": 10000}], "name": "Optimizely Tech Support (Copy of TEST copy T34: SRP Recommendations ROLLOUT) ", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5500644592189440"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6217525301084160"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5525878722002944", "name": "VetSuite Promos Ethicon (PSI Only Audience)", "commitId": "5822285689389056", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "4950259470696448"], "audienceName": "PSIvet Ethicon Pendo - October 2025", "changes": null, "id": "4643653180719104", "integrationSettings": null, "variations": [{"id": "6572104670248960", "name": "Original", "actions": []}, {"id": "5428648514158592", "name": "Variation #1", "actions": [{"viewId": "6255851363631104", "changes": [{"css": {}, "dependencies": [], "name": "", "attributes": {"html": "<div class=\"card-wrap mx-5 my-5 w-100\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\" data-optly-2955510d-25d2-4318-9d08-c123b4f62b08=\"\">\n  <cms-simple-card data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\" data-optly-2955510d-25d2-4318-9d08-c123b4f62b08=\"\">\n    <div class=\"cms card simple d-flex flex-column justify-content-between my-5 w-100 card-sm px-5 py-5 left-margin-fix ff-mulish\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\" data-optly-2955510d-25d2-4318-9d08-c123b4f62b08=\"\">\n      <div class=\"h3\" style=\"margin-right:-24px;\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\" data-optly-2955510d-25d2-4318-9d08-c123b4f62b08=\"\">\n        Receive 3% back on all Nutramax<sup>&reg;</sup> purchases<sup>1</sup>\n      </div>\n      <div class=\"paragraph\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\" data-optly-2955510d-25d2-4318-9d08-c123b4f62b08=\"\">\n        <p data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\" data-optly-2955510d-25d2-4318-9d08-c123b4f62b08=\"\">\n          Nutramax brings exclusive savings for VetSuite<sup>&reg;</sup> members. Their portfolio includes a variety of science-backed supplements \u2014 including their Proviable<sup>&reg;</sup>, Dasuqiun<sup>&reg;</sup>, and Denamarin<sup>&reg;</sup> product lines \u2014 giving clinics the opportunity to offer solutions in practice and through home delivery.\n        </p>\n      </div>\n      <div id=\"float-child\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\" data-optly-2955510d-25d2-4318-9d08-c123b4f62b08=\"\">\n        <div data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\" data-optly-2955510d-25d2-4318-9d08-c123b4f62b08=\"\">\n          <cms-cta data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\" data-optly-2955510d-25d2-4318-9d08-c123b4f62b08=\"\">\n            <div data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\" data-optly-2955510d-25d2-4318-9d08-c123b4f62b08=\"\">\n              <cx-generic-link data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\" data-optly-2955510d-25d2-4318-9d08-c123b4f62b08=\"\">\n                <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/c/19454\" tabindex=\"0\" class=\"mx-0 my-5 w-auto btn btn-primary\" title=\"vetsuite promos - text left image right color background - top header - paragraph - cta\" data-uw-rm-brl=\"PR\" data-uw-original-href=\"https://www.mycovetrus.com/CVT-NA/en/USD/c/19454\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\" data-optly-2955510d-25d2-4318-9d08-c123b4f62b08=\"\">\n                  Shop Now\n                </a>\n              </cx-generic-link>\n            </div>\n          </cms-cta>\n        </div>\n        <div data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\" data-optly-2955510d-25d2-4318-9d08-c123b4f62b08=\"\">\n        </div>\n      </div>\n    </div>\n  </cms-simple-card>\n</div>\n<div class=\"card-wrap mx-7 my-5 w-100\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n  <cms-media-card data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n    <div class=\"cms card media my-5 w-100\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n      <div class=\"media d-flex\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n        <cx-media class=\"is-initialized\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n          <img loading=\"null\" alt=\"Group 633281.png\" title=\"Group 633281.png\" src=\"https://api.mycovetrus.com//medias/sys_master/images/h57/h7d/34584204279838/Group 633281/Group-633281.png\" srcset=\"https://api.mycovetrus.com//medias/sys_master/images/h57/h7d/34584204279838/Group 633281/Group-633281.png 1140w\" data-uw-rm-alt-original=\"Group 633281.png\" data-uw-rm-alt=\"QU\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n          </img>\n        </cx-media>\n      </div>\n      <div class=\"body d-flex\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n        <cms-simple-card data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n        </cms-simple-card>\n      </div>\n    </div>\n  </cms-media-card>\n</div>"}, "type": "attribute", "id": "CDD8DA3D-5943-4A6E-A10D-ABE5E2B2E0C7", "selector": "cms-card-box:nth-of-type(3) .cards-wrapper"}, {"css": {}, "dependencies": [], "name": "", "attributes": {"html": "<cms-simple-card data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n  <div class=\"cms card simple d-flex flex-column justify-content-between my-5 w-100 card-sm px-5 py-5 left-margin-fix ff-mulish\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n    <div class=\"h3\" style=\"margin-right:-24px;\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n      Receive 3% back on all Nutramax\n      <sup data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n        \u00ae\n      </sup>\n      purchases\n      <sup data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n        1\n      </sup>\n    </div>\n    <div class=\"paragraph\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n      <p data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n        Nutramax brings exclusive savings for VetSuite\n        <sup data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n          \u00ae\n        </sup>\n        members. Their portfolio includes a variety of science-backed supplements \u2014 including their Proviable\n        <sup data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n          \u00ae\n        </sup>\n        , Dasuqiun\n        <sup data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n          \u00ae\n        </sup>\n        , and Denamarin\n        <sup data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n          \u00ae\n        </sup>\n        product lines \u2014 giving clinics the opportunity to offer solutions in practice and through home delivery.\n      </p>\n    </div>\n    <div id=\"float-child\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n      <div data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n        <cms-cta data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n          <div data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n            <cx-generic-link data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n              <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/c/19454\" tabindex=\"0\" class=\"mx-0 my-5 w-auto btn btn-primary\" title=\"vetsuite promos - text left image right color background - top header - paragraph - cta\" data-uw-rm-brl=\"PR\" data-uw-original-href=\"https://www.mycovetrus.com/CVT-NA/en/USD/c/19454\" data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n                Shop Now\n              </a>\n            </cx-generic-link>\n          </div>\n        </cms-cta>\n      </div>\n      <div data-optly-cdd8da3d-5943-4a6e-a10d-abe5e2b2e0c7=\"\">\n      </div>\n    </div>\n  </div>\n</cms-simple-card>"}, "type": "attribute", "id": "2955510D-25D2-4318-9D08-C123B4F62B08", "selector": "cms-card-box:nth-of-type(3) .card-wrap.mx-5"}, {"id": "BD0B6ED3-FDB4-4E84-82E1-B5E0B0618C99", "type": "append", "dependencies": [], "name": "", "selector": "cms-card-box:nth-of-type(2)", "value": "<cms-card-box data-smartedit-catalog-version-uuid=\"CVT-NA-ContentCatalog/Staged\"\r\n  data-smartedit-component-type=\"CmsCardBox\" data-smartedit-component-id=\"cmsitem_00178003\" class=\"smartEditComponent\"\r\n  data-smartedit-component-uuid=\"eyJpdGVtSWQiOiJjbXNpdGVtXzAwMTc4MDAzIiwiY2F0YWxvZ0lkIjoiQ1ZULU5BLUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJTdGFnZWQifQ==\"\r\n  data-smartedit-element-uuid=\"8a690843-9e4d-473d-bf55-a03e00f4241f\"\r\n  data-smart-edit-component-process-status=\"removeComponent\">\r\n  <div class=\"cms-container card-box mx-5 my-5 w-auto bg-primary-1 w-100 color-background quarterly-promo-top-header\">\r\n    <!---->\r\n    <div class=\"cards-wrapper\">\r\n      <div class=\"card-wrap mx-5 my-5 w-100\" data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n        <cms-simple-card data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n          <div class=\"cms card simple d-flex flex-column justify-content-between my-5 w-100 card-sm px-5 py-5 left-margin-fix ff-mulish\" data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n            <div class=\"h3\" data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n              Save 20% on qualifying orders of ETHICON\r\n              <sup data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n                \u2122\r\n              </sup>\r\n              sutures\r\n            </div>\r\n            <div class=\"paragraph\" data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n              <p data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n                Johnson & Johnson has long supported veterinary surgery with products like Ethicon sutures \u2014 a global leader in wound closure. With ongoing innovation in medical technology, their vision is to expand access to advanced surgical solutions for practices of all sizes.\r\n              </p>\r\n            </div>\r\n            <div id=\"float-child\" data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n              <div data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n                <cms-cta data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n                  <div data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n                    <cx-generic-link data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n                      <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/c/19503\" tabindex=\"0\" class=\"mx-0 my-5 w-auto btn btn-primary\" title=\"vetsuite promos - text left image right color background - top header - paragraph - cta\" data-uw-rm-brl=\"PR\" data-uw-original-href=\"https://www.mycovetrus.com/CVT-NA/en/USD/c/19503\" data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n                        Shop Now\r\n                      </a>\r\n                    </cx-generic-link>\r\n                  </div>\r\n                </cms-cta>\r\n              </div>\r\n              <div data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n              </div>\r\n              <covetrus-paragraph class=\"paragraph-component\" data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n                <div class=\"paragraph-component mx-0 my-5 w-auto\" style=\"font-size: 10px;\" data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n                  Offer valid 10/1/25-12/31/25 for PSIvet\r\n                  <sup data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n                    \u00ae\r\n                  </sup>\r\n                  members only. Eligible members will receive a 20% discount off list price on qualifying Ethicon suture products purchased exclusively through Covetrus\r\n                  <sup data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n                    \u00ae\r\n                  </sup>\r\n                  . Discount is applied to the everyday price at checkout. Covetrus reserves the right to modify or cancel this promotion at any time without notice. Void where prohibited. Promotional offerings are not a reward for, or in exchange for, any past, present, or future business. Trademarks are the property of their respective owners.\r\n                  <p data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n                  </p>\r\n                </div>\r\n              </covetrus-paragraph>\r\n            </div>\r\n          </div>\r\n        </cms-simple-card>\r\n      </div>\r\n      <div class=\"card-wrap mx-7 my-7 w-100 align-self-start\" data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n        <cms-media-card data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n          <div class=\"cms card media my-5 w-100\" data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n            <div class=\"media d-flex\" data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n              <cx-media class=\"is-initialized\" data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n                <img loading=\"null\" alt=\"ethicon-vetsuite-promos\" title=\"ethicon-vetsuite-promos\" src=\"https://api.mycovetrus.com/medias/sys_master/Resources_Images/h12/h62/35052990922782/vetsuite_promos_ethicon_psi_only/vetsuite-promos-ethicon-psi-only.png\" srcset=\"https://api.mycovetrus.com/medias/sys_master/Resources_Images/h12/h62/35052990922782/vetsuite_promos_ethicon_psi_only/vetsuite-promos-ethicon-psi-only.png 1140w\" data-uw-rm-alt-original=\"ethicon-vetsuite-promos\" data-uw-rm-alt=\"QU\" data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n                </img>\r\n              </cx-media>\r\n            </div>\r\n            <div class=\"body d-flex\" data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n              <cms-simple-card data-optly-776ab768-5a8a-4a58-8d2d-21cd380cb94a=\"\" data-optly-3ded4fb6-b5a8-4ab3-a4d0-25600aea1a37=\"\">\r\n              </cms-simple-card>\r\n            </div>\r\n          </div>\r\n        </cms-media-card>\r\n      </div>\r\n    </div><!---->\r\n  </div>\r\n</cms-card-box>", "operator": "before"}, {"id": "7CB36CEB-DD09-4189-875F-DD19DE1B8819", "type": "attribute", "dependencies": [], "name": "", "selector": "cms-card-box:nth-of-type(4) .cards-wrapper", "attributes": {"html": "&nbsp;"}, "css": {}}]}]}], "weightDistributions": [{"entityId": "5428648514158592", "endOfRange": 10000}], "name": "VetSuite Promos Ethicon (PSI Only Audience)", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5525878722002944"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6255851363631104"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5708807836270592", "name": "Banner | Vaccines Product Search | Everyone", "commitId": "5795398504153088", "groupId": null, "holdback": 500, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "6659687288930304", "integrationSettings": null, "variations": [{"id": "5899654439632896", "name": "Variation #1", "actions": [{"viewId": "6584686422523904", "changes": [{"id": "D292E1D7-DC94-48A3-8BAF-40F59D9B9BEC", "type": "append", "dependencies": [], "name": "", "isOpalManaged": false, "selector": "head", "value": "<style>#content-banner-container {\r\n\r\n    background: url('https://cdn.optimizely.com/img/8209600003/90bcab6c493848fda54b20012e95fc25.svg');\r\n    background-size: cover;\r\n    /* background-position: -900px center; */\r\n    background-position: -450px center; /* for Vaccines Zoetis Nov. 26 */\r\n}\r\n\r\n#content-banner-container h2 {\r\n\r\n    color: #021660;\r\n    font-weight: 600\r\n}\r\n\r\n#content-banner-container>div>span:first-of-type {\r\n\r\n    font-size: clamp(.75rem, 2vw, 14px);\r\n    display: inline-block;\r\n    color: #000000;\r\n    font-weight: 600;\r\n    max-width: 630px;\r\n    /* max-width: 525px; for para Zoetis Nov. 26 */\r\n}\r\n\r\n/* #content-banner-container>div>span:last-of-type {\r\n\r\n    color: #000000;\r\n    font-size: .5rem;\r\n} */\r\n\r\n#content-banner-container img {\r\n\r\n    display: none;\r\n    object-fit: cover;\r\n    object-position: center;\r\n    width: 100%;\r\n}\r\n\r\n.content-details-link {\r\n\r\n    text-decoration: underline;\r\n    display: inline;\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n\r\n    #content-banner-container {\r\n\r\n        background-position: inherit;\r\n    }\r\n\r\n    /* #content-banner-container > div > span:first-of-type {\r\n\r\n            max-width: 630px;\r\n        } */\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n\r\n    #content-banner-container>div>span:first-of-type {\r\n\r\n        max-width: 560px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n\r\n    #content-banner-container {\r\n\r\n        background: inherit;\r\n        background-color: #e8f7ff;\r\n    }\r\n\r\n    #content-banner-container img {\r\n\r\n        display: block;\r\n    }\r\n\r\n    /* #content-banner-container > div > span:first-of-type {\r\n\r\n            max-width: 590px;\r\n        } */\r\n}\r\n\r\n@media screen and (min-width: 501px) {\r\n\r\n    #content-banner-container>div>.btn {\r\n\r\n        width: fit-content;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n\r\n    #content-banner-container>div>span:first-of-type {\r\n\r\n        font-size: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 375px) {\r\n\r\n    #content-banner-container>div {\r\n\r\n        padding: .75rem;\r\n    }\r\n}</style>"}, {"id": "AB9A8627-B7A0-4C13-97FA-A205BA9812AE", "type": "append", "dependencies": [], "name": "Vaccines banner", "isOpalManaged": false, "selector": ".BottomHeaderSlot", "value": "<section id=\"content-banner-container\">\r\n    <img src=\"https://cdn.optimizely.com/img/8209600003/97530d6341ce40e7a7a2bcf25ede0eac.svg\" />\r\n    <div class=\"px-md-7 py-md-7 px-sm-4 py-sm-4\">\r\n        <h2>Arm them with Vanguard<sup>&reg;</sup></h2>\r\n        <span>Hold the line against disease with the full range of Zoetis vaccines for dogs and cats.</span><br>\r\n        <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/search/Vanguard?query=Vanguard:relevance:manufacturerNameFacet:Zoetis&utm_medium%3Dweb%20=&utm_source=search_banner&utm_campaign=Zoetis_vaccines_banner_Q426\" id=\"content-banner-CTA\" class=\"btn btn-primary px-8 mt-5\">Shop Zoetis</a>\r\n    </div>\r\n</section>", "operator": "before"}]}]}], "weightDistributions": null, "name": "Everyone", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5708807836270592"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["6584686422523904"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "6659687288930304", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": [{"id": "BAF43D08-D571-47FE-8838-4114ED5840F6", "type": "custom_code", "value": function($){(function() {
  // --- CONFIG ---
  var PEERIUS_POLL_INTERVAL = 100;
  var PEERIUS_POLL_TIMEOUT  = 3000; // increase if Peerius is slow

  // If this variation runs multiple times for preview/editor, you can exit early:
  // (optional) if (window.__OPTIMIZELY_EDITOR_PREVIEW) return;

  // Handle bfcache: allow re-run after a bfcache restore
  window.addEventListener('pageshow', function(evt) {
    if (evt && evt.persisted) {
      delete window.__peeriusExperimentReactivated;
      delete window.__peeriusExperimentExternalGuard;
    }
  });

  // Return Promise that resolves with Peerius id when it becomes available
  function waitForPeeriusId(timeoutMs) {
    timeoutMs = timeoutMs || PEERIUS_POLL_TIMEOUT;
    return new Promise(function(resolve, reject) {
      function check() {
        try {
          return !!(window.PeeriusCallbacks &&
                    window.PeeriusCallbacks.track &&
                    window.PeeriusCallbacks.track.user &&
                    (window.PeeriusCallbacks.track.user.id != null));
        } catch (e) {
          return false;
        }
      }

      if (check()) {
        resolve(window.PeeriusCallbacks.track.user.id);
        return;
      }

      var elapsed = 0;
      var iv = setInterval(function() {
        elapsed += PEERIUS_POLL_INTERVAL;
        if (check()) {
          clearInterval(iv);
          resolve(window.PeeriusCallbacks.track.user.id);
          return;
        }
        if (elapsed >= timeoutMs) {
          clearInterval(iv);
          reject(new Error('Peerius id timeout'));
        }
      }, PEERIUS_POLL_INTERVAL);
    });
  }

  // Main flow (we are inside a variation, so this runs only for assigned users)
  // NOTE: the in-memory guard ensures this happens only once per page load
  if (window.__peeriusExperimentReactivated) {
    // already handled for this page lifetime
    return;
  }

  waitForPeeriusId().then(function(id) {
    // assign the attribute
    try {
      window.userAttribute = id;
      console.log('[Variation] assigned window.userAttribute =', id);
    } catch (e) {
      console.warn('[Variation] failed to assign userAttribute', e);
    }

    // Protect against recursion: set in-memory guard immediately
    window.__peeriusExperimentReactivated = true;

    // External guard (prevent multiple activates being scheduled)
    if (window.__peeriusExperimentExternalGuard) return;
    window.__peeriusExperimentExternalGuard = true;

    // Schedule activate asynchronously (outside current activation call stack)
    setTimeout(function() {
      try {
        if (window.optimizely && typeof window.optimizely.push === 'function') {
          window.optimizely.push({ type: 'activate' });
          console.log('[Variation] requested optimizely.activate');
        } else {
          console.warn('[Variation] optimizely.push not available; cannot activate');
          // (Optional) you might dispatch an event for a shared handler:
          // window.dispatchEvent(new CustomEvent('myPeeriusReady'));
        }
      } catch (e) {
        console.warn('[Variation] error pushing activate', e);
      }
    }, 0);

  }).catch(function(err) {
    console.warn('[Variation] Peerius ID did not appear in time:', err && err.message);
    const LOBAencoded = localStorage.getItem("selectedLobaUid");
    const LOBAdecoded = window.atob(LOBAencoded);
    const LOBAID = LOBAdecoded.split("||")[1];
    window.userAttribute = LOBAID;
    console.log('activating LOBA!');
    window.optimizely.push({ type: 'activate' });
  });

})();
}, "dependencies": []}], "id": "5875126724984832", "name": "TEST - Homepage Carousel", "commitId": "6037086575263744", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4697489740136448", "integrationSettings": null, "variations": [{"id": "6515119899803648", "name": "Variation #1 - Carousel", "actions": [{"viewId": "4855861877669888", "changes": [{"id": "DDE0222E-965A-40CA-A037-CD3509BE61E4", "type": "widget", "dependencies": [], "name": "TEST HOME - Carousel", "config": {"image_1": "//cdn.optimizely.com/img/8209600003/2a8d99086ad749d59c5ef4a57b487b0b.jpg", "mobile_image_1": "//cdn.optimizely.com/img/8209600003/c09bb1a6e9af4047910b2f8767c02b8f.jpg", "image_1_alt": "", "image_1_title": "", "headline_1": "DEFAULT EXPERIMENT Covetrus", "copy_1": "DEFAULT EXPERIMENT Covetrus", "button_1_text": "Shop Now", "button_1_link": "", "image_2": "//cdn.optimizely.com/img/8209600003/acc8f61a8f154eb4a6be6cdc5fce5e2c.jpg", "mobile_image_2": "//cdn.optimizely.com/img/8209600003/7e7b56c37e9d4069bdc3c834436c4c23.jpg", "image_2_alt": "", "image_2_title": "", "headline_2": "", "copy_2": "", "button_2_text": "Shop Now", "button_2_link": "", "image_3": "//cdn.optimizely.com/img/8209600003/1da7abdf9aaf4bd5a0d91432db9426a4.jpg", "mobile_image_3": "//cdn.optimizely.com/img/8209600003/913b0656db9d4d08b0ee97e0ca7e0dfa.jpg", "image_3_alt": "", "image_3_title": "", "headline_3": "", "copy_3": "", "button_3_text": "Shop Now", "button_3_link": ""}, "widget_id": "30229710036"}]}]}], "weightDistributions": null, "name": "Default Experience", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5875126724984832"}, "deployed": false}, {"audienceIds": ["and", "27721010150"], "audienceName": "ISR TEST ACCOUNT ONLY", "changes": null, "id": "6648643755704320", "integrationSettings": null, "variations": [{"id": "5522743848861696", "name": "Variation #1 - Carousel", "actions": [{"viewId": "4855861877669888", "changes": [{"id": "D678EB4A-F8AE-4221-9699-2A428D3FE7FB", "type": "widget", "dependencies": [], "name": "TEST HOME - Carousel", "config": {"image_1": "//cdn.optimizely.com/img/8209600003/2a8d99086ad749d59c5ef4a57b487b0b.jpg", "mobile_image_1": "//cdn.optimizely.com/img/8209600003/c09bb1a6e9af4047910b2f8767c02b8f.jpg", "image_1_alt": "", "image_1_title": "", "headline_1": "ISR TEST", "copy_1": "ISR TEST", "button_1_text": "Shop Now", "button_1_link": "", "image_2": "//cdn.optimizely.com/img/8209600003/acc8f61a8f154eb4a6be6cdc5fce5e2c.jpg", "mobile_image_2": "//cdn.optimizely.com/img/8209600003/7e7b56c37e9d4069bdc3c834436c4c23.jpg", "image_2_alt": "", "image_2_title": "", "headline_2": "", "copy_2": "", "button_2_text": "Shop Now", "button_2_link": "", "image_3": "//cdn.optimizely.com/img/8209600003/1da7abdf9aaf4bd5a0d91432db9426a4.jpg", "mobile_image_3": "//cdn.optimizely.com/img/8209600003/913b0656db9d4d08b0ee97e0ca7e0dfa.jpg", "image_3_alt": "", "image_3_title": "", "headline_3": "", "copy_3": "", "button_3_text": "Shop Now", "button_3_link": ""}, "widget_id": "30229710036"}]}]}], "weightDistributions": null, "name": "ISR Template Test", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5875126724984832"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["4855861877669888"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "6648643755704320", "endOfRange": null}], [{"entityId": "4697489740136448", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "6334656069500928", "name": "AutoShip (manager, landing page and PLP pages)", "commitId": "5973730875146240", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5893974708191232", "integrationSettings": null, "variations": [{"id": "4801297111580672", "name": "Variation #1", "actions": [{"viewId": "6753712337584128", "changes": [{"id": "2D76E2E2-8981-4FDF-B616-CD3ECBECADED", "type": "append", "dependencies": [], "name": "", "isOpalManaged": false, "selector": "head", "value": "<style>/* .BodyContent.has-components {\r\n\r\n        height: initial !important;\r\n    } */\r\n\r\n    #plp-autoship-header {\r\n\r\n        background:url('//cdn.optimizely.com/img/8209600003/7893c3be5da04d4eb7b3e5bd661cb77e.png');\r\n        /* display:grid; */\r\n        grid-template-columns:1fr 1fr;\r\n        align-items:center;\r\n        justify-items:center;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        background-position: calc(50% - 125px);\r\n        display:none;\r\n    }\r\n\r\n    #plp-autoship-header.autoship-manager {\r\n\r\n        display: grid;\r\n    }\r\n\r\n    #plp-autoship-header > div {\r\n\r\n        margin:24px;\r\n    }\r\n\r\n    #plp-autoship-header > div > h2 {\r\n\r\n        font-family:'Mulish';\r\n        color:#000000;\r\n        font-weight:800;\r\n    }\r\n\r\n    #plp-autoship-header > div > div {\r\n\r\n        color:#000000;\r\n    }\r\n\r\n    #plp-autoship-header > div > h2 {\r\n\r\n        font-size: 1.375rem;\r\n    }\r\n\r\n    #plp-autoship-header > div > h2 > span {\r\n\r\n        color:#0055e7;\r\n    }\r\n\r\n    #plp-autoship-header > div > div > div a {\r\n\r\n        display:inline-block !important;\r\n        /* font-size: .75rem; */\r\n        padding: 0 0.5rem;\r\n        margin-bottom: 12px !important;\r\n    }\r\n\r\n    /* @media screen and (min-width:992px) {\r\n\r\n        #plp-autoship-header.autoship-manager {\r\n\r\n            grid-template-columns: 1.25fr 1fr;\r\n            background-position: calc(50% - 32px) calc(50% + 10px) !important;\r\n            margin-bottom: 24px;\r\n            display: grid;\r\n        }\r\n\r\n        #plp-autoship-header.autoship-manager > div {\r\n\r\n            margin: 16px 0 0 45px !important;\r\n        }\r\n\r\n        #plp-autoship-header.autoship-manager > div > h2+div {\r\n\r\n            font-size: .75rem;\r\n        }\r\n    } */\r\n\r\n    @media screen and (max-width:991px) {\r\n        \r\n        #plp-autoship-header {\r\n\r\n            grid-template-columns: 1fr;\r\n            background: inherit;\r\n            background-color: #e8f6ff;\r\n            font-size: .9rem !important;\r\n        }\r\n\r\n        #plp-autoship-header > div {\r\n\r\n            margin: 12px 12px 0 12px;\r\n        }\r\n    }</style>"}, {"id": "CA5CE92F-B5BA-40F4-9CE6-102BBF450177", "type": "custom_code", "dependencies": [], "name": "", "isOpalManaged": false, "value": function($){(function () {
        window.optimizely = window.optimizely || [];
        var utils = window.optimizely.get && window.optimizely.get("utils");

        var TAG = "[OPTLY AUTOSHIP VAR]";
        var TARGET_SELECTOR = "#plp-autoship-header";
        var CLASS_NAME = "autoship-manager";

        var CTA_SELECTOR = ".autoship-header-btn";
        var CTA_TARGET_HREF =
            "https://www.mycovetrus.com/CVT-NA/en/USD/my-account/favorites-list-detail/Monthly%2520AutoShip%2520Recommendations";
        var CTA_TARGET_TEXT = "View Recommendations";

        var CTA_PATH_PREFIX = "/CVT-NA/en/USD/autoship";
        var BANNER_PATH_PREFIXES = [
            "/CVT-NA/en/USD/my-account/autoship-manager",
            "/CVT-NA/en/USD/product/082390/",
            "/CVT-NA/en/USD/search/082390",
            "/CVT-NA/en/USD/product/075249/",
            "/CVT-NA/en/USD/search/075249",
            "/CVT-NA/en/USD/product/071136/",
            "/CVT-NA/en/USD/search/071136",
            "/CVT-NA/en/USD/product/008901/",
            "/CVT-NA/en/USD/search/008901",
            "/CVT-NA/en/USD/product/029405/",
            "/CVT-NA/en/USD/search/029405",
            "/CVT-NA/en/USD/product/011842/",
            "/CVT-NA/en/USD/search/011842",
            "/CVT-NA/en/USD/product/042966/",
            "/CVT-NA/en/USD/search/042966",
            "/CVT-NA/en/USD/product/014619/",
            "/CVT-NA/en/USD/search/014619",
            "/CVT-NA/en/USD/product/072960/",
            "/CVT-NA/en/USD/search/072960",
            "/CVT-NA/en/USD/product/073403/",
            "/CVT-NA/en/USD/search/073403",
            "/CVT-NA/en/USD/product/055481/",
            "/CVT-NA/en/USD/search/055481",
            "/CVT-NA/en/USD/product/042006/",
            "/CVT-NA/en/USD/search/042006",
            "/CVT-NA/en/USD/product/077942/",
            "/CVT-NA/en/USD/search/077942"
        ];

        window.__optlyAutoship = window.__optlyAutoship || {
            started: false,
            lastPath: null,
            bodyObserver: null,
            debounceT: null,
            pathPoll: null
        };

        window.__optlyAutoshipCTA = window.__optlyAutoshipCTA || {
            origHref: null,
            origText: null,
            appliedForPath: null,
            observer: null,
            pollHandle: null,
            pollAttempts: 0
        };

        function currentPath() {
            return location.pathname || "";
        }

        function isAutoshipPath() {
            return currentPath().startsWith(CTA_PATH_PREFIX);
        }

        function isBannerEligible() {
            var p = currentPath();
            return BANNER_PATH_PREFIXES.some(function (x) {
            return p.startsWith(x);
            });
        }

        function waitForElement(selector, timeoutMs) {
            timeoutMs = typeof timeoutMs === "number" ? timeoutMs : 2000;
            return new Promise(function (resolve) {
            if (!selector) return resolve(null);

            var el = document.querySelector(selector);
            if (el) return resolve(el);

            if (utils && utils.waitForElement) {
                try {
                utils
                    .waitForElement(selector)
                    .then(function (found) {
                    resolve(found || null);
                    })
                    .catch(function () {
                    resolve(null);
                    });
                return;
                } catch (e) {}
            }

            var start = Date.now();
            var iv = setInterval(function () {
                var nowEl = document.querySelector(selector);
                if (nowEl) {
                clearInterval(iv);
                return resolve(nowEl);
                }
                if (Date.now() - start > timeoutMs) {
                clearInterval(iv);
                return resolve(null);
                }
            }, 50);
            });
        }

        function addClass(el) {
            if (!el) return;
            try {
            if (!el.classList.contains(CLASS_NAME)) el.classList.add(CLASS_NAME);
            } catch (e) {}
        }

        function removeClassIfPresent() {
            var el = document.querySelector(TARGET_SELECTOR);
            if (!el) return;
            try {
            if (el.classList.contains(CLASS_NAME)) el.classList.remove(CLASS_NAME);
            } catch (e) {}
        }

        function stopCtaPollRetries() {
            try {
            if (window.__optlyAutoshipCTA.pollHandle) {
                clearInterval(window.__optlyAutoshipCTA.pollHandle);
                window.__optlyAutoshipCTA.pollHandle = null;
            }
            window.__optlyAutoshipCTA.pollAttempts = 0;
            } catch (e) {}
        }

        function startCtaPollRetries() {
            stopCtaPollRetries();

            var POLL_INTERVAL = 100;
            var MAX_DURATION = 4000;
            var attempts = 0;
            var maxAttempts = Math.ceil(MAX_DURATION / POLL_INTERVAL);
            window.__optlyAutoshipCTA.pollAttempts = 0;

            var handle = setInterval(function () {
            attempts++;
            window.__optlyAutoshipCTA.pollAttempts = attempts;

            if (!isAutoshipPath()) {
                stopCtaPollRetries();
                return;
            }

            var el = document.querySelector(CTA_SELECTOR);
            if (!el) {
                if (attempts >= maxAttempts) stopCtaPollRetries();
                return;
            }

            var currentHref = el.getAttribute("href") || "";
            var currentText = (el.textContent || "").trim();

            if (currentHref !== CTA_TARGET_HREF || currentText !== CTA_TARGET_TEXT) {
                try {
                el.setAttribute("href", CTA_TARGET_HREF);
                el.textContent = CTA_TARGET_TEXT;
                } catch (e) {}
            }

            if (attempts >= maxAttempts) stopCtaPollRetries();
            }, POLL_INTERVAL);

            window.__optlyAutoshipCTA.pollHandle = handle;
        }

        function applyCtaChange() {
            if (!isAutoshipPath()) return;

            waitForElement(CTA_SELECTOR, 2000)
            .then(function (cta) {
                if (!cta) return;
                if (!isAutoshipPath()) return;

                if (window.__optlyAutoshipCTA.origHref === null) {
                try {
                    window.__optlyAutoshipCTA.origHref = cta.getAttribute("href") || "";
                } catch (e) {}
                }
                if (window.__optlyAutoshipCTA.origText === null) {
                try {
                    window.__optlyAutoshipCTA.origText = (cta.textContent || "").trim();
                } catch (e) {}
                }

                try {
                cta.setAttribute("href", CTA_TARGET_HREF);
                cta.textContent = CTA_TARGET_TEXT;
                window.__optlyAutoshipCTA.appliedForPath = currentPath();
                } catch (e) {}

                try {
                if (window.__optlyAutoshipCTA.observer) {
                    try {
                    window.__optlyAutoshipCTA.observer.disconnect();
                    } catch (e) {}
                    window.__optlyAutoshipCTA.observer = null;
                }

                var obs = new MutationObserver(function () {
                    if (!isAutoshipPath()) return;
                    var current = document.querySelector(CTA_SELECTOR);
                    if (!current) return;

                    var href = current.getAttribute("href") || "";
                    var text = (current.textContent || "").trim();

                    if (href !== CTA_TARGET_HREF || text !== CTA_TARGET_TEXT) {
                    try {
                        current.setAttribute("href", CTA_TARGET_HREF);
                        current.textContent = CTA_TARGET_TEXT;
                    } catch (e) {}
                    }
                });

                obs.observe(cta, {
                    attributes: true,
                    attributeFilter: ["href"],
                    childList: true,
                    characterData: true,
                    subtree: true
                });

                window.__optlyAutoshipCTA.observer = obs;
                } catch (e) {}

                startCtaPollRetries();
            })
            .catch(function () {});
        }

        function revertCtaChange() {
            if (!window.__optlyAutoshipCTA.appliedForPath) return;
            window.__optlyAutoshipCTA.appliedForPath = null;

            try {
            if (window.__optlyAutoshipCTA.observer) window.__optlyAutoshipCTA.observer.disconnect();
            window.__optlyAutoshipCTA.observer = null;
            } catch (e) {}

            stopCtaPollRetries();

            var cta = document.querySelector(CTA_SELECTOR);
            if (!cta) return;

            try {
            if (window.__optlyAutoshipCTA.origHref !== null) {
                cta.setAttribute("href", window.__optlyAutoshipCTA.origHref);
            } else {
                cta.removeAttribute("href");
            }
            if (window.__optlyAutoshipCTA.origText !== null) {
                cta.textContent = window.__optlyAutoshipCTA.origText;
            }
            } catch (e) {}
        }

        function applyBannerWhenReady() {
            if (!isBannerEligible()) return;

            waitForElement(TARGET_SELECTOR, 2000)
            .then(function (el) {
                if (!isBannerEligible()) return;
                addClass(el);
            })
            .catch(function () {});
        }

        function evaluate() {
            if (isAutoshipPath()) applyCtaChange();
            else revertCtaChange();

            if (isBannerEligible()) applyBannerWhenReady();
            else removeClassIfPresent();
        }

        function debouncedEvaluate() {
            clearTimeout(window.__optlyAutoship.debounceT);
            window.__optlyAutoship.debounceT = setTimeout(function () {
            evaluate();
            }, 50);
        }

        function installUrlWatcher() {
            if (window.__optlyAutoship.urlWatcherInstalled) return;
            window.__optlyAutoship.urlWatcherInstalled = true;

            var _push = history.pushState;
            var _replace = history.replaceState;

            history.pushState = function () {
            var ret = _push.apply(this, arguments);
            setTimeout(function () {
                debouncedEvaluate();
            }, 0);
            return ret;
            };

            history.replaceState = function () {
            var ret = _replace.apply(this, arguments);
            setTimeout(function () {
                debouncedEvaluate();
            }, 0);
            return ret;
            };

            window.addEventListener("popstate", function () {
            setTimeout(function () {
                debouncedEvaluate();
            }, 0);
            });

            window.addEventListener("hashchange", function () {
            setTimeout(function () {
                debouncedEvaluate();
            }, 0);
            });

            if (!window.__optlyAutoship.pathPoll) {
            window.__optlyAutoship.lastPath = currentPath();
            window.__optlyAutoship.pathPoll = setInterval(function () {
                var p = currentPath();
                if (p !== window.__optlyAutoship.lastPath) {
                window.__optlyAutoship.lastPath = p;
                debouncedEvaluate();
                }
            }, 250);
            }
        }

        function installDomWatcher() {
            if (window.__optlyAutoship.bodyObserver) return;

            try {
            window.__optlyAutoship.bodyObserver = new MutationObserver(function () {
                debouncedEvaluate();
            });
            window.__optlyAutoship.bodyObserver.observe(document.body || document.documentElement, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ["class"]
            });
            } catch (e) {}
        }

        function start() {
            if (window.__optlyAutoship.started) return;
            window.__optlyAutoship.started = true;

            var login = document.querySelector(".login-container");
            var loginPromise =
            login ? Promise.resolve(login) : (utils && utils.waitForElement ? utils.waitForElement(".login-container") : waitForElement(".login-container", 4000));

            loginPromise
            .then(function () {
                evaluate();
                setTimeout(evaluate, 0);
                setTimeout(evaluate, 50);
                installUrlWatcher();
                installDomWatcher();
                console.log(TAG, "installed and activating");
            })
            .catch(function () {
                evaluate();
                installUrlWatcher();
                installDomWatcher();
                console.log(TAG, "installed and activating");
            });
        }

        start();
    })();
}}, {"id": "8EBE2D9C-E387-48F2-AE61-498F70090848", "type": "append", "dependencies": [], "name": "PLP Banner", "isOpalManaged": false, "selector": "app-root > header", "value": "<div id=\"plp-autoship-header\">\r\n    <div>\r\n        <h2>Unlock savings <span>on repeat!</span></h2>\r\n        <div>\r\n            AutoShip simplifies reordering with scheduled deliveries and built-in discounts \u2014 so you can stay stocked for less, without the stress.\r\n            <div class=\"cta-wrap d-flex flex-column\"><cms-cta><div><cx-generic-link><a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/my-account/favorites-list-detail/Monthly%2520AutoShip%2520Recommendations\" tabindex=\"0\" class=\"mx-0 my-5 w-auto btn btn-primary btn-fit autoship-header-btn-opt\" title=\"Autoship - text left image right color background - header - card 1 - CTA\" data-uw-rm-brl=\"PR\" data-uw-original-href=\"https://www.mycovetrus.com/CVT-NA/en/USD/my-account/favorites-list-detail/Monthly%2520AutoShip%2520Recommendations\">View Recommendations</a></cx-generic-link></div></cms-cta></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n", "operator": "after", "attributes": {}}]}]}], "weightDistributions": null, "name": "Everyone", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6334656069500928"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["6753712337584128"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "5893974708191232", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "6361409991213056", "name": "Nutramax's Dasuquin Advanced Product Search Banner", "commitId": "5081777098719232", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "6545319618412544", "integrationSettings": null, "variations": [{"id": "6217675286773760", "name": "Variation #1", "actions": [{"viewId": "5694338353594368", "changes": [{"id": "cd9970a79f574f72926daecf42a065f2", "type": "append", "dependencies": [], "name": "", "isOpalManaged": false, "selector": "head", "value": "<style>#dasuquin-banner-container {\r\n\r\n        background: url(//cdn.optimizely.com/img/8209600003/d148d6ac2293403b9e0d320797cc22aa.svg);\r\n        background-size: cover;\r\n        background-position: -300px center;\r\n        max-height: 200px;\r\n    }\r\n\r\n    #dasuquin-banner-container h2 {\r\n\r\n        color:#021660;\r\n        font-weight:600\r\n    }\r\n\r\n    #dasuquin-banner-container > div > span:first-of-type {\r\n\r\n        font-size: clamp(1rem, 1.75vw, 18px);\r\n        display: inline-block;\r\n        color: #000000;\r\n        font-weight: 600;\r\n        max-width: 635px;\r\n    }\r\n\r\n    #dasuquin-banner-container img {\r\n\r\n        display: none;\r\n        object-fit: cover;\r\n        object-position: center;\r\n    }\r\n\r\n    #dasuquin-details-link {\r\n\r\n        text-decoration: underline;\r\n        display: inline;\r\n    }\r\n\r\n    @media screen and (max-width: 770px) {\r\n\r\n        #dasuquin-banner-container {\r\n\r\n            background-position:inherit;\r\n        }\r\n    }\r\n\r\n    @media screen and (max-width: 767px) {\r\n        \r\n        #dasuquin-banner-container {\r\n\r\n            background: inherit;\r\n            background-color: #e8f7ff;\r\n            max-height: inherit;\r\n        }\r\n\r\n        #dasuquin-banner-container img {\r\n\r\n            display: block;\r\n            margin: 0 auto;\r\n        }\r\n    }\r\n\r\n    @media screen and (min-width: 501px) {\r\n        \r\n        #dasuquin-banner-container > div > .btn {\r\n\r\n            width:fit-content;\r\n        }\r\n    }\r\n\r\n    @media screen and (max-width: 500px) {\r\n\r\n        #dasuquin-banner-container > div > span:first-of-type {\r\n\r\n            font-size: 1rem;\r\n        }\r\n    }\r\n\r\n    @media screen and (max-width: 375px) {\r\n\r\n        #dasuquin-banner-container > div {\r\n\r\n            padding: .75rem;\r\n        }\r\n    }</style>"}, {"id": "8ed7fcff72b449df8adcbf64064ff5c7", "type": "append", "dependencies": [], "name": "Para banner", "isOpalManaged": false, "selector": ".BottomHeaderSlot", "value": "<section id=\"dasuquin-banner-container\" class=\"mb-4\">\r\n    <img src=\"//cdn.optimizely.com/img/8209600003/c0e3d13361b449ca99907429f162f5ff.svg\" />\r\n    <div class=\"px-md-7 pb-md-7 px-sm-4 py-sm-4\">\r\n        <h2>Dasuquin<sup>&reg;</sup> Advanced Product Transition</h2>\r\n        <span>Nutramax<sup>&reg;</sup> Dasuquin Advanced products are being transitioned to Dasuquin Advanced with ESM. Explore innovative solutions for joint health.</span><br>\r\n        <a href=\"https://www.mycovetrus.com/CVT-NA/en/USD/c/19806\" id=\"dasuquin-banner-CTA\" class=\"btn btn-primary px-8 mt-5\">Shop Now</a>\r\n    </div>\r\n</section>", "operator": "before", "attributes": {}}]}]}], "weightDistributions": null, "name": "Everyone", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6361409991213056"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["5694338353594368"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "6545319618412544", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "6498666668621824", "name": "ORIGINAL Search Issues Popup", "commitId": "5586020981276672", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5406985705750528", "integrationSettings": null, "variations": [{"id": "4842517665939456", "name": "Variation #1", "actions": [{"viewId": "6589830621036544", "changes": [{"id": "9b394ec7b5b34f6592e43b8d237b22aa", "type": "append", "selector": "head", "value": "<style>.img-responsive{\n    max-width: 100%;\n    height: auto;\n}\n\n#dialogCloseButton{\n    cursor: pointer;\n    display: block;\n    margin-left: auto;\n    outline: none;\n    border: none;\n    background: none;\n    color: red;\n}\n\n#optimizelySearchPopUp{   \n    border: none;\n    outline: none;\n    background: none;\n    margin: 0;\n    width: 100%;\n}\n\n.searchTriggerText{\n    text-decoration: underline;\n    color:#021660;\n    cursor: pointer;\n}\n\n.jotFormWrapper{\n    max-width: 50rem;\n    margin: auto;\n    background-color: white;\n    padding: 1rem;\n}</style>", "dependencies": []}, {"id": "da6a9602813d4c6f92fece00f2b98139", "type": "custom_code", "value": function($){window.optimizely = window.optimizely || [];
const utils = window.optimizely.get("utils");

// promise-based function that waits for element to exist within the document body
function waitForElement(selector) {
    return new Promise((resolve) => {
        const observer = new MutationObserver((mutations, observer) => {
            const element = document.querySelector(selector);
            if (element) {
                observer.disconnect();
                resolve(element);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}

// User initially activates search function
waitForElement('.searchTriggerText').then((element) => {
    
    // console.log('Element exists:', element);
    console.log('initial trigger');
    beginJotformConnection();
    startInterval();
});

function startInterval() {
    let currentUrl = window.location.href;
    let intervalID = setInterval(function() {
      if (window.location.href !== currentUrl) {
        console.log('URL changed (polling):', window.location.href);
    
        if (window.location.href.indexOf("search") > -1) {
    
            console.log('user is performing search');
            currentUrl = window.location.href;
        
            waitForElement('.searchTriggerText').then((element) => {
        
                console.log('jotform connection triggered');
                beginJotformConnection();
            });
        }
        else {
    
            console.log('no longer searching');
            clearInterval(intervalID);
            startInterval();
        }
      }
    }, 100); // Check every 100 milliseconds
}

function openClosePopup(element,openPopup = true){
    const popup = document.querySelector(element);
    if(openPopup){
       return popup.showModal();
    }
    return popup.close();
}

function isBase64(value) {
    // Regular expression to match Base64 format
    const base64Regex = /^(?:[A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;

    return base64Regex.test(value);
}

// grab the term that was suggested
function getMispelledTerm() {
    //possible locations for term
    const resultsForSearchTerm = document.querySelector(".title-search-page-bold").innerText.trim().replace(/[“"”]/g,"");
    const searchSubText = document.querySelector(".title-search-text-small");

    //if SearchSubText.innerText contains "instead of"
    if (searchSubText && searchSubText.innerText.includes("instead of")) {
        const searchSubTextTerm = searchSubText.querySelector("u").innerText;
       return searchSubTextTerm;
    }
    //else return resultsForSearchTerm search value
    return resultsForSearchTerm;
}

// adding user and product information into Jotform 
function populateJotform() {
    const jotForm = document.getElementById("JotFormIFrame-232493512726154");
    const { id = "user not logged in", myCovetrus_acb_name = "user not logged in", myCovetrus_loba_number = "user not logged in" } = pendo.getSerializedMetadata().visitor;
    console.log('isBase64(id)', isBase64(id));
    const username = isBase64(id) ? atob(id) : "user not logged in";


    function addStringToQueryParam(iframeElement, paramName, paramValue) {
        const src = iframeElement.getAttribute('src');
        if (src) {
            const url = new URL(src);
            const searchParams = new URLSearchParams(url.search);

            // Add or update the query parameter
            searchParams.set(paramName, paramValue);

            // Update the iframe's src attribute with the modified URL including the new parameter
            url.search = searchParams.toString();
            iframeElement.setAttribute('src', url.toString());
        }
    }

    addStringToQueryParam(jotForm,"username",username);
    addStringToQueryParam(jotForm, "accountSequence", myCovetrus_loba_number);
    addStringToQueryParam(jotForm, "practiceName", myCovetrus_acb_name);
    addStringToQueryParam(jotForm, "whatWas23", getMispelledTerm());
}

// begin Jotform connection to HTML items injected
function beginJotformConnection() {

    // add event listener for text
    utils.waitForElement(".searchTriggerText").then((text) => {
        text.addEventListener('click', () => {
            openClosePopup('#optimizelySearchPopUp');
            populateJotform();
        });
    });
    // add event listener for x
    utils.waitForElement("#dialogCloseButton").then((closeButton) => {
        closeButton.addEventListener('click', () => {
            openClosePopup('#optimizelySearchPopUp',false);
        });
    });
    // add event listener for dialog modal 
    utils.waitForElement("#optimizelySearchPopUp").then((popup) => {
        popup.addEventListener('click', () => {
            openClosePopup('#optimizelySearchPopUp', false);
        });
    });
    
    utils.waitForElement("#JotFormIFrame-232493512726154").then((popup) => {
        var ifr = document.getElementById("JotFormIFrame-232493512726154");
        if (ifr) {
            var src = ifr.src;
            src = src.replace('form', 'covetrus')
            // console.log(src.replace('form', 'covetrus'))
            var iframeParams = [];
            if (window.location.href && window.location.href.indexOf("?") > -1) {
                iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
            }
            if (src && src.indexOf("?") > -1) {
                iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
                src = src.substr(0, src.indexOf("?"));
            }
            iframeParams.push("isIframeEmbed=1");
            ifr.src = src + "?" + iframeParams.join('&');
        }
        window.handleIFrameMessage = function (e) {
            if (typeof e.data === 'object') { return; }
            var args = e.data.split(":");
            if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
            if (!iframe) { return; }
            switch (args[0]) {
                case "scrollIntoView":
                    iframe.scrollIntoView();
                    break;
                case "setHeight":
                    iframe.style.height = args[1] + "px";
                    if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) {
                        iframe.style.minHeight = args[1] + "px";
                    }
                    break;
                case "collapseErrorPage":
                    if (iframe.clientHeight > window.innerHeight) {
                        iframe.style.height = window.innerHeight + "px";
                    }
                    break;
                case "reloadPage":
                    window.location.reload();
                    break;
                case "loadScript":
                    if (!window.isPermitted(e.origin, ['covetrus.jotform.com,','jotform.com', 'jotform.pro'])) { break; }
                    var src = args[1];
                    if (args.length > 3) {
                        src = args[1] + ':' + args[2];
                    }
                    var script = document.createElement('script');
                    script.src = src;
                    script.type = 'text/javascript';
                    document.body.appendChild(script);
                    break;
                case "exitFullscreen":
                    if (window.document.exitFullscreen) window.document.exitFullscreen();
                    else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen();
                    else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen();
                    else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen();
                    else if (window.document.msExitFullscreen) window.document.msExitFullscreen();
                    break;
            }
            var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
            if (isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
                var urls = { "docurl": encodeURIComponent(document.URL), "referrer": encodeURIComponent(document.referrer) };
                iframe.contentWindow.postMessage(JSON.stringify({ "type": "urls", "value": urls }), "*");
            }
        };
        window.isPermitted = function (originUrl, whitelisted_domains) {
            var url = document.createElement('a');
            url.href = originUrl;
            var hostname = url.hostname;
            var result = false;
            if (typeof hostname !== 'undefined') {
                whitelisted_domains.forEach(function (element) {
                    if (hostname.slice((-1 * element.length - 1)) === '.'.concat(element) || hostname === element) {
                        result = true;
                    }
                });
                return result;
            }
        };
        if (window.addEventListener) {
            window.addEventListener("message", handleIFrameMessage, false);
        } else if (window.attachEvent) {
            window.attachEvent("onmessage", handleIFrameMessage);
        }
    });
}


/* // close the popup on form submission
window.addEventListener('message', (message) => {
    if (message.data.action === "submission-completed") {
        openClosePopup('#optimizelySearchPopUp', false);
    }
}); */
}, "dependencies": []}, {"id": "204d8aabaedf4220bab6ec7dc84d975e", "type": "append", "dependencies": [], "selector": "covetrus-product-list > .cx-page", "value": "<section>\n  <p>\n    <strong>Not seeing the items you expected?</strong> It could be a licensing or account visibility issue.<br>\n    <strong>Start a Chat with us</strong> \u2014 our team can review your access and help you find what you need.<br>\n    Have feedback about your search experience? <span class=\"searchTriggerText\" id=\"openFeedbackForm\">Share it with us here</span>.\n  </p>\n  <dialog id=\"optimizelySearchPopUp\">\n    <div class=\"jotFormWrapper\"> <button id=\"dialogCloseButton\"> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\"\n          height=\"30\" fill=\"currentColor\" class=\"bi bi-x\" viewBox=\"0 0 16 16\">\n          <path\n            d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\" />\n        </svg> </button> <iframe id=\"JotFormIFrame-232493512726154\" title=\"myCovetrus Search Feedback Form\"\n        onload=\"window.parent.scrollTo(0,0)\" allowtransparency=\"true\" allowfullscreen=\"true\"\n        allow=\"geolocation; microphone; camera\" src=\"https://form.jotform.com/232493512726154\" frameborder=\"0\"\n        style=\"min-width:100%;max-width:100%;height:539px;border:none;\" scrolling=\"no\"> </iframe> </div>\n  </dialog>\n</section>", "operator": "before", "name": "", "attributes": {}}]}]}], "weightDistributions": null, "name": "ORIGINAL Search Issues Popup", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6498666668621824"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6589830621036544"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6632354152710144", "name": "[RPX] Satisfaction Guarantee Badge", "commitId": "5040138674241536", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5077129314959360", "integrationSettings": null, "variations": [{"id": "5457380285087744", "name": "Original", "actions": []}, {"id": "5010536736227328", "name": "Variation #1", "actions": [{"viewId": "6479211792171008", "changes": [{"id": "43C17738-981E-4247-AB76-C65C250E3828", "type": "custom_code", "value": function($){const utils = optimizely.get("utils");

const listOfTargetProducts = [
  "074760",
  "002501",
  "062551",
  "062553",
  "062554",
  "062552",
  "062555",
  "002584",
  "080605",
  "080606",
  "072365",
  "072366",
  "072367",
  "072368",
  "072369",
  "072370",
  "072371",
  "072372",
  "072373",
  "072374",
  "072375",
  "072376",
  "072377",
  "072378",
  "072379",
  "072380",
  "072381",
  "072382",
  "020642",
  "030181",
  "030182",
  "073124",
  "073122",
  "073121",
  "073123",
  "083646",
  "014676",
  "014678",
  "014677",
  "014619",
  "006913",
  "012696",
  "071879",
  "071883",
  "071880",
  "071882",
  "071881",
  "071884",
  "074300",
  "074298",
  "074299",
  "074301",
  "074743",
  "075249",
  "080511",
  "080512",
  "080513",
  "080514",
  "080515",
  "080516",
  "082199",
  "082200",
  "003605",
  "005612",
  "003574",
  "071139",
  "073091",
  "073099",
  "073106",
  "073108",
  "073102",
  "073116",
  "073118",
  "073092",
  "073098",
  "073101",
  "073107",
  "073109",
  "073120",
  "073100",
  "073103",
  "073117",
  "004830",
  "002526",
  "077515",
  "077516",
  "077517",
  "069167",
  "070654",
  "005498",
  "002489",
  "005554",
  "028846",
  "028847",
  "032688",
  "032689",
  "013286",
  "013287",
  "003718",
  "034771",
  "006368",
  "017358",
  "059150",
  "049755",
  "049756",
  "059149",
  "002476",
  "072663",
  "072661",
  "072662",
  "072664",
  "074735",
  "075063",
  "074738",
  "075060",
  "074741",
  "075059",
  "075058",
  "074740",
  "075066",
  "074739",
  "075061",
  "074736",
  "075065",
  "075064",
  "075062",
  "074737",
  "074742",
  "077856",
  "077857",
  "077858",
  "077859",
  "077860",
  "077861",
  "081929",
  "081930",
  "081931",
  "081932",
  "082671",
  "082672",
  "082775",
  "082776",
  "082777",
  "082778",
  "082779",
  "082780",
  "084725",
  "011023",
  "002524",
  "083882",
  "083883",
  "002515",
  "007404",
  "080657",
  "080658",
  "080659",
  "081195",
  "081213",
  "007080",
  "002522",
  "055481",
  "002521",
  "055479",
  "012186",
  "002498",
  "020071",
  "054466",
  "071141",
  "071142",
  "011842",
  "002463",
  "002556",
  "002558",
  "037750",
  "069174",
  "069175",
  "069169",
  "069177",
  "069168",
  "069170",
  "069181",
  "069172",
  "069176",
  "069179",
  "084596",
  "071207",
  "071208",
  "071206",
  "071205",
  "061035",
  "003845",
  "003847",
  "028869",
  "072960",
  "081975",
  "082124",
  "083639",
  "083640",
  "083641",
  "083642",
  "004692",
  "041091",
  "041093",
  "041090",
  "041092",
  "058597",
  "029405",
  "069325",
  "029404",
  "059333",
  "002468",
  "014583",
  "083479",
  "084168",
  "084176",
  "083536",
  "083537",
  "083538",
  "083539",
  "083650",
  "083651",
  "083652",
  "083653",
  "075004",
  "075007",
  "075005",
  "075003",
  "075006",
  "075002",
  "074163",
  "044217",
  "083104",
  "083105",
  "006375",
  "035392",
  "006374",
  "035338",
  "035393",
  "054760",
  "054761",
  "022709",
  "056946",
  "056947",
  "056945",
  "074930",
  "074931",
  "074932",
  "002518",
  "058596",
  "031264",
  "021164",
  "031895",
  "070644",
  "019902",
  "075521",
  "075522",
  "075589",
  "075590",
  "012346",
  "012347",
  "018905",
  "018906",
  "018907",
  "012344",
  "012349",
  "012357",
  "015522",
  "012343",
  "012345",
  "012350",
  "015523",
  "012348",
  "012351",
  "012352",
  "018904",
  "018909",
  "033879",
  "033880",
  "033861",
  "006379",
  "018918",
  "015521",
  "018912",
  "018914",
  "012358",
  "018911",
  "023728",
  "023730",
  "015520",
  "018910",
  "018913",
  "023729",
  "041875",
  "041874",
  "041876",
  "012330",
  "012332",
  "012334",
  "012337",
  "012341",
  "012331",
  "012339",
  "012340",
  "012333",
  "012335",
  "012338",
  "012336",
  "012355",
  "012356",
  "018897",
  "018899",
  "018900",
  "033857",
  "012353",
  "012354",
  "003092",
  "071215",
  "074182",
  "074178",
  "074181",
  "074184",
  "074180",
  "074183",
  "082803",
  "072033",
  "072034",
  "072035",
  "072036",
  "072037",
  "072038",
  "072039",
  "072040",
  "072041",
  "072042",
  "072043",
  "072044",
  "072045",
  "072046",
  "072047",
  "077593",
  "049341",
  "049342",
  "083397",
  "019935",
  "017586",
  "017598",
  "018358",
  "018369",
  "017587",
  "017597",
  "017599",
  "018372",
  "067004",
  "017593",
  "017595",
  "017596",
  "018371",
  "018376",
  "067002",
  "067008",
  "067010",
  "067011",
  "066994",
  "066999",
  "067001",
  "067003",
  "067009",
  "067021",
  "067041",
  "069303",
  "067015",
  "067017",
  "067018",
  "067020",
  "067024",
  "067027",
  "067029",
  "067013",
  "067025",
  "067036",
  "017588",
  "017590",
  "066993",
  "066995",
  "067005",
  "067012",
  "067022",
  "067031",
  "069311",
  "070646",
  "084626",
  "077708",
  "082430",
  "071148",
  "071147",
  "071149",
  "032284",
  "049335",
  "049337",
  "049336",
  "073742",
  "081279",
  "070279",
  "070281",
  "070270",
  "070278",
  "070269",
  "070277",
  "070280",
  "070271",
  "070256",
  "070274",
  "070276",
  "070258",
  "070260",
  "070255",
  "070259",
  "070275",
  "070253",
  "070254",
  "070273",
  "070262",
  "070257",
  "070266",
  "070265",
  "070267",
  "070268",
  "070252",
  "072025",
  "072027",
  "072028",
  "072029",
  "072031",
  "072100",
  "072101",
  "072102",
  "072026",
  "072106",
  "072103",
  "072104",
  "072105",
  "072030",
  "004018",
  "060764",
  "060768",
  "060769",
  "060759",
  "060760",
  "060758",
  "060761",
  "060767",
  "060770",
  "060757",
  "060763",
  "060762",
  "060765",
  "062386",
  "062387",
  "062390",
  "062383",
  "062391",
  "062379",
  "062381",
  "062382",
  "062389",
  "062380",
  "062384",
  "062385",
  "062388",
  "062392",
  "074080",
  "074076",
  "074078",
  "074079",
  "074075",
  "074077",
  "074081",
  "072830",
  "072833",
  "072836",
  "072835",
  "072832",
  "072834",
  "072838",
  "072831",
  "072837",
  "077777",
  "077778",
  "077779",
  "077780",
  "083918",
  "083919",
  "083920",
  "083921",
  "083922",
  "083923",
  "083924",
  "083926",
  "083927",
  "083928",
  "083929",
  "083931",
  "083933",
  "083934",
  "083935",
  "083970",
  "083971",
  "083972",
  "083973",
  "083974",
  "083975",
  "083976",
  "083977",
  "083978",
  "084049",
  "084050",
  "084051",
  "084052",
  "084053",
  "084054",
  "084055",
  "084056",
  "084057",
  "084058",
  "084059",
  "084060",
  "084061",
  "084062",
  "084063",
  "084064",
  "084065",
  "084066",
  "084067",
  "084068",
  "084069",
  "084070",
  "084071",
  "084072",
  "084073",
  "084074",
  "074177",
  "074176",
  "075020",
  "075023",
  "075022",
  "075021",
  "071210",
  "071136",
  "071137",
  "071124",
  "071131",
  "071135",
  "071138",
  "071132",
  "071133",
  "071134",
  "071128",
  "071129",
  "071130",
  "071119",
  "071120",
  "071123",
  "071122",
  "071121",
  "071126",
  "071127",
  "071125",
  "071558",
  "071559",
  "071560",
  "071561",
  "074013",
  "074011",
  "074012",
  "074014",
  "074010",
  "074345",
  "074348",
  "074344",
  "074346",
  "074347",
  "074349",
  "075758",
  "075759",
  "075760",
  "075761",
  "075762",
  "075763",
  "075764",
  "075765",
  "075766",
  "075767",
  "006565",
  "073944",
  "029905",
  "048705",
  "005164",
  "083203",
  "083204",
  "073864",
  "073867",
  "073863",
  "073865",
  "073866",
  "056199",
  "056200",
  "071957",
  "073741",
  "083274",
  "080927",
  "080928",
  "083275",
  "058333",
  "058346",
  "058349",
  "058350",
  "058356",
  "058357",
  "058358",
  "058360",
  "058365",
  "058366",
  "058367",
  "058368",
  "058372",
  "058373",
  "058378",
  "058381",
  "058382",
  "058386",
  "058389",
  "058390",
  "058392",
  "058395",
  "058396",
  "058397",
  "058407",
  "058408",
  "058411",
  "058420",
  "058424",
  "058428",
  "058434",
  "058435",
  "058444",
  "058445",
  "058448",
  "058453",
  "058330",
  "058331",
  "058332",
  "058339",
  "058341",
  "058353",
  "058354",
  "058355",
  "058363",
  "058364",
  "058369",
  "058377",
  "058383",
  "058384",
  "058385",
  "058398",
  "058399",
  "058403",
  "058404",
  "058406",
  "058418",
  "058419",
  "058423",
  "058431",
  "058433",
  "058436",
  "058438",
  "058439",
  "058443",
  "058447",
  "058451",
  "058452",
  "058334",
  "058335",
  "058336",
  "058342",
  "058344",
  "058347",
  "058351",
  "058361",
  "058371",
  "058374",
  "058380",
  "058387",
  "058393",
  "058400",
  "058401",
  "058405",
  "058410",
  "058413",
  "058414",
  "058416",
  "058426",
  "058427",
  "058432",
  "058441",
  "058442",
  "058446",
  "058449",
  "058337",
  "058338",
  "058340",
  "058343",
  "058345",
  "058348",
  "058352",
  "058359",
  "058362",
  "058370",
  "058375",
  "058376",
  "058379",
  "058388",
  "058391",
  "058394",
  "058402",
  "058409",
  "058412",
  "058415",
  "058417",
  "058421",
  "058422",
  "058425",
  "058429",
  "058430",
  "058437",
  "058440",
  "058450",
  "050845",
  "050839",
  "050844",
  "051061",
  "050841",
  "050840",
  "050842",
  "050843",
  "007321",
  "007320",
  "007322",
  "007319",
  "007323",
  "007325",
  "033133",
  "073004",
  "073005",
  "073006",
  "073007",
  "073008",
  "073009",
  "073010",
  "073011",
  "073012",
  "073013",
  "073014",
  "071214",
  "071217",
  "071216",
  "082386",
  "082387",
  "082388",
  "082389",
  "082390",
  "082391",
  "082392",
  "082393",
  "083506",
  "031477",
  "020720",
  "041974",
  "020718",
  "020719",
  "020370",
  "023679",
  "058569",
  "058573",
  "058574",
  "058575",
  "058570",
  "058571",
  "058572",
  "074085",
  "083435",
  "083436",
  "083437",
  "083438",
  "083439",
  "083440",
  "029211",
  "029213",
  "029209",
  "029210",
  "029260",
  "031996",
  "029208",
  "029259",
  "029261",
  "029258",
  "029262",
  "033902",
  "034272",
  "033903",
  "033905",
  "033900",
  "034897",
  "038727",
  "041223",
  "056925",
  "029271",
  "033901",
  "033904",
  "029207",
  "071928",
  "034271",
  "034902",
  "056926",
  "029222",
  "029217",
  "029236",
  "029237",
  "029239",
  "029244",
  "029246",
  "029216",
  "029219",
  "029221",
  "029249",
  "029255",
  "029256",
  "029263",
  "029264",
  "029274",
  "029275",
  "029276",
  "029283",
  "029292",
  "029294",
  "032000",
  "032002",
  "029220",
  "029235",
  "029241",
  "029242",
  "029247",
  "029251",
  "029252",
  "029257",
  "029265",
  "029272",
  "029277",
  "029240",
  "029243",
  "029248",
  "029250",
  "029253",
  "029254",
  "029268",
  "029270",
  "029279",
  "029280",
  "029282",
  "029291",
  "031995",
  "032003",
  "033906",
  "033916",
  "033917",
  "034273",
  "034369",
  "034891",
  "034896",
  "034899",
  "029278",
  "029285",
  "029288",
  "029289",
  "031997",
  "032001",
  "032004",
  "033909",
  "033912",
  "033915",
  "033896",
  "033898",
  "033907",
  "033910",
  "033914",
  "034275",
  "034466",
  "034890",
  "034893",
  "038728",
  "039008",
  "041182",
  "041217",
  "045102",
  "045107",
  "045109",
  "045112",
  "048132",
  "056711",
  "056922",
  "057456",
  "057457",
  "034370",
  "034895",
  "038725",
  "041177",
  "041178",
  "041213",
  "041216",
  "041220",
  "045104",
  "045105",
  "057460",
  "057462",
  "057463",
  "059032",
  "059035",
  "059036",
  "059040",
  "059048",
  "038729",
  "040965",
  "040966",
  "041181",
  "041221",
  "041222",
  "045103",
  "045106",
  "045110",
  "056697",
  "056699",
  "056701",
  "056704",
  "056708",
  "056712",
  "062375",
  "056703",
  "056707",
  "056709",
  "056713",
  "056904",
  "056905",
  "056912",
  "056913",
  "056907",
  "056919",
  "057455",
  "057465",
  "056914",
  "056915",
  "056918",
  "056923",
  "057458",
  "057464",
  "059033",
  "059037",
  "059041",
  "059044",
  "059038",
  "059039",
  "059042",
  "059047",
  "062372",
  "029238",
  "029245",
  "029266",
  "029269",
  "029290",
  "029293",
  "031999",
  "033899",
  "033911",
  "033913",
  "034269",
  "034274",
  "034276",
  "034892",
  "034894",
  "038724",
  "039009",
  "039010",
  "041180",
  "041211",
  "041212",
  "041214",
  "041215",
  "041218",
  "041219",
  "045101",
  "045111",
  "056705",
  "056706",
  "056906",
  "056916",
  "057459",
  "057461",
  "059034",
  "059043",
  "059045",
  "059046",
  "059049",
  "062373",
  "062374",
  "062376",
  "029218",
  "029287",
  "029286",
  "055478",
  "055482",
  "075285",
  "075286",
  "003366",
  "021634",
  "021636",
  "022873",
  "021633",
  "021635",
  "029321",
  "004357",
  "004358",
  "004356",
  "082143",
  "082144",
  "082145",
  "082710",
  "083413",
  "083414",
  "083415",
  "083416",
  "071046",
  "071048",
  "071047",
  "005740",
  "011116",
  "015621",
  "073521",
  "073519",
  "073520",
  "034789",
  "034792",
  "034794",
  "034790",
  "034787",
  "034788",
  "034791",
  "034795",
  "018162",
  "018168",
  "018169",
  "018171",
  "018173",
  "018174",
  "018175",
  "024221",
  "024223",
  "024224",
  "024225",
  "038964",
  "018163",
  "018164",
  "018167",
  "018176",
  "024211",
  "024214",
  "024215",
  "024220",
  "024222",
  "038958",
  "038959",
  "038960",
  "038966",
  "018165",
  "018172",
  "024218",
  "038962",
  "018166",
  "018170",
  "024212",
  "024213",
  "024216",
  "024217",
  "024219",
  "038961",
  "038965",
  "074366",
  "074369",
  "074365",
  "074368",
  "074367",
  "058312",
  "058313",
  "058314",
  "058315",
  "058316",
  "058317",
  "082139",
  "082140",
  "082141",
  "082142",
  "024176",
  "072491",
  "072492",
  "072493",
  "072494",
  "072495",
  "072496",
  "072497",
  "072894",
  "072895",
  "072896",
];

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .satisfaction-badge {
    position: absolute;
    right: 10px;
    top: .625rem;
  }
`;
document.head.appendChild(styleSheet);

const badge = `<img src="//cdn.optimizely.com/img/8209600003/c1c3a118167b4d62a5fea7d8d48972dc.svg" height="50" class="satisfaction-badge">`;

utils.observeSelector("covetrus-product-list-item", function (product) {
  if (listOfTargetProducts.includes(product.querySelector("#product-subtitle").childNodes[0].textContent.trim()) || listOfTargetProducts.includes(product.querySelector("#product-subtitle").childNodes[0].textContent.trim().slice(7, 13))) {
    product.querySelector(".image-actions").insertAdjacentHTML("afterend", badge);
  }
});
}, "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "F171A7A0-3781-4042-8C28-307CFA1A3FF0", "selector": "#product-name, #product-image-container"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "3CE3AC24-8EF5-4D14-88CB-9A4F8863C4FE", "selector": "#add-to-cart-btn"}]}]}], "weightDistributions": [{"entityId": "5457380285087744", "endOfRange": 5000}, {"entityId": "5010536736227328", "endOfRange": 10000}], "name": "[RPX] Satisfaction Guarantee Badge", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6632354152710144"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6479211792171008"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6705965697859584", "name": "Top Feline Office Use ", "commitId": "5519855005204480", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "4958063526936576", "integrationSettings": null, "variations": [{"id": "5708030877106176", "name": "Variation #1", "actions": [{"viewId": "6189834939662336", "changes": [{"id": "D8D1AF37-FC7C-455F-A5F9-0DBD3F1C61D5", "type": "append", "dependencies": [], "name": "", "isOpalManaged": false, "selector": "head", "value": "<style>#topfeline-banner {\r\n\r\n        // display:none;\r\n        flex-basis:100%;\r\n    }\r\n\r\n    #topfeline-banner.showbanner, #topfeline-source-link.showbanner {\r\n\r\n        display: initial;\r\n    }\r\n\r\n    #topfeline-banner > div {\r\n\r\n        background-color:#E8F7FF;\r\n        color:#021660;\r\n        display:grid;\r\n        justify-content: center;\r\n    }\r\n\r\n    #topfeline-banner > div > span:first-of-type {\r\n\r\n        font-family:'Mulish';\r\n        text-transform: uppercase;\r\n        font-weight: 700;\r\n        color:#000000;\r\n    }\r\n\r\n    #topfeline-banner > div > span:last-of-type {\r\n\r\n        color:#000000;\r\n        font-weight:600;\r\n    }\r\n    \r\n    #topfeline-banner > div > h2 {\r\n\r\n        margin:0;\r\n        font-family:'Mulish';\r\n        font-weight:800;\r\n        margin-bottom:0;\r\n        font-size: clamp(28px, 4vw, 50px);\r\n    }\r\n\r\n    #topfeline-banner > div > h5 {\r\n\r\n        font-family:'Mulish';\r\n        font-weight:800;\r\n        margin-bottom:0;\r\n    }\r\n\r\n    #topfeline-source-link {\r\n\r\n        font-size:10px;\r\n        display:block;\r\n        margin-top:24px;\r\n        font-style:italic;\r\n    }\r\n\r\n    #topfeline-source-link > a {\r\n\r\n        text-decoration:underline;\r\n    }</style>"}, {"id": "3705DF00-C063-4161-BFC5-EBAD58C2EB2B", "type": "append", "dependencies": [], "name": "banner", "selector": ".level-0", "value": "<div id=\"topfeline-banner\" class=\"mb-6\">\r\n    <div class=\"mt-4 py-4 px-4\">\r\n        <span>Treatment plans only work when patients can follow them.</span>\r\n        <h2 class=\"mt-4\">35% of cat owners</h2>\r\n        <h5>don't complete medication courses due to dosing challenges.</h5><br>\r\n        <span>Expore feline-friendly compounds to help keep care on track</span>\r\n    </div>\r\n</div>", "operator": "after", "attributes": {}, "isOpalManaged": false}, {"id": "B5D7F650-9FCD-4C2F-9024-1206A78F769E", "type": "append", "dependencies": [], "name": "source text", "isOpalManaged": false, "selector": "footer", "value": "<span id=\"topfeline-source-link\">*Source: <a href=\"https://pubmed.ncbi.nlm.nih.gov/35343808/\" target=\"_blank\">https://pubmed.ncbi.nlm.nih.gov/35343808</a></span>", "operator": "before", "attributes": {}}]}]}], "weightDistributions": null, "name": "Everyone", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6705965697859584"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["6189834939662336"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "4958063526936576", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "6726994291851264", "name": "Homepage Hide Rows", "commitId": "4697933092749312", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "5980519446347776", "integrationSettings": null, "variations": [{"id": "4854619539505152", "name": "Original", "actions": [{"viewId": "22529500951", "changes": []}]}, {"id": "5282018311798784", "name": "Hide Rows", "actions": [{"viewId": "22529500951", "changes": [{"id": "9B9C6B72-44BA-4CF0-BD70-5582C2F35D91", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": ".cms-container.card-box.w-100.bg-none.my-0 > .cards-wrapper", "attributes": {"remove": true}, "css": {}}, {"id": "FDE413C2-7B06-424A-98AF-9B1FD1014410", "type": "attribute", "dependencies": [], "name": "", "isOpalManaged": false, "selector": "cms-card-box:nth-of-type(4)", "attributes": {"remove": true}, "css": {}}]}]}], "weightDistributions": [{"entityId": "4854619539505152", "endOfRange": 5000}, {"entityId": "5282018311798784", "endOfRange": 10000}], "name": "Homepage Hide Rows", "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6726994291851264"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["22529500951"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}], "groups": [], "audiences": [{"id": "23476472300", "name": "Desktop Only", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "device", "value": "desktop"}]]]}, {"id": "25782700838", "name": "myCovetrus QA User Audience", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": " \"116500-002,1000-000,940280-001,104620-001,665980-002,665980-000,819400-009,104620-001,978000-P20\".split(',').includes(PeeriusCallbacks.track.user.id) \n"}]]]}, {"id": "27721010150", "name": "ISR TEST ACCOUNT ONLY", "conditions": ["and", ["or", ["or", {"match": null, "name": "ISR_TEST_ACCOUNT_ONLY", "type": "list", "value": null}]]]}, {"id": "29241920428", "name": "LP test", "conditions": ["and", ["or", ["or", {"match": "exact", "name": "utm_campaign", "type": "query", "value": "lp_test"}]]]}, {"id": "4950259470696448", "name": "PSIvet Ethicon Pendo - October 2025", "conditions": ["and", ["or", ["or", {"match": null, "name": "PSIvet-Ethicon-Pendo-October-2025", "type": "list", "value": null}]]]}, {"id": "5465227825774592", "name": "VetSuite Homepage Nov 2026", "conditions": ["and", ["or", ["or", {"match": null, "name": "VetSuite_Homepage_Nov2026", "type": "list", "value": null}]]]}, {"id": "5844886660841472", "name": "Equine Homepage Nov 2026", "conditions": ["and", ["or", ["or", {"match": null, "name": "Equine_Homepage_Nov2026", "type": "list", "value": null}]]]}, {"id": "5992211723059200", "name": "VetSuite Target Ad Nov 2026", "conditions": ["and", ["or", ["or", {"match": null, "name": "Standard_Target_Ad_Nov2026", "type": "list", "value": null}]], ["or", ["or", {"match": null, "name": "VetSuite_Homepage_Nov2026", "type": "list", "value": null}]]]}, {"id": "6665010280136704", "name": "Standard Homepage Nov 2026", "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": "Equine_Homepage_Nov2026", "type": "list", "value": null}]], ["not", ["or", {"match": null, "name": "VetSuite_Homepage_Nov2026", "type": "list", "value": null}]], ["not", ["or", {"match": null, "name": "Standard_Target_Ad_Nov2026", "type": "list", "value": null}]]]]}, {"id": "6674878252711936", "name": "Standard Target Ad Nov 2026", "conditions": ["and", ["or", ["or", {"match": null, "name": "Standard_Target_Ad_Nov2026", "type": "list", "value": null}]]]}], "listTargetingKeys": [{"type": "j", "key": "userAttribute"}, {"type": "j", "key": "userAttribute"}, {"type": "j", "key": "userAttribute"}, {"type": "j", "key": "userAttribute"}, {"type": "j", "key": "userAttribute"}], "visitorAttributes": [], "visitorIdLocator": null, "dcpServiceId": "18369960239", "dcpKeyfieldLocators": [{"dcp_datasource_id": "5463655060340736", "is_optimizely": true, "type": "uid", "name": ""}], "integrationSettings": [], "views": [{"id": "22416411547", "category": "other", "apiName": "22220670139_order_confirmation_page", "name": "Order Confirmation Page", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/order-confirmation"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "22452110265", "category": "other", "apiName": "22220670139_cart_page", "name": "Cart Page", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/cart"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "22529500951", "category": "other", "apiName": "22220670139_home_page", "name": "Home Page", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/"}]], "deactivationEnabled": true, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "22568600570", "category": "other", "apiName": "22220670139_registration_page", "name": "Registration Page", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/register"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "22649012626", "category": "other", "apiName": "22220670139_order_confirmation_stage", "name": "Order Confirmation: Stage", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://stage-b2bna.covetrus.io/CVT-NA/en/USD/order-confirmation"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "22666040182", "category": "other", "apiName": "22220670139_plp_covetrus_brand_all_drilldowns", "name": "PLP: Covetrus Brand Top Level", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/c/COVE"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "23191831009", "category": "other", "apiName": "22220670139_checkout_page", "name": "Checkout Page", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/checkout"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "24344750379", "category": "other", "apiName": "22220670139_url_targeting_for_practice_perks_enrollment_", "name": "URL Targeting for Practice Perks Enrollment ", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/my-account/rewards"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "24380221479", "category": "other", "apiName": "22220670139_sitewide", "name": "Sitewide", "staticConditions": null, "deactivationEnabled": true, "undoOnDeactivation": true, "tags": []}, {"id": "24382581079", "category": "other", "apiName": "22220670139_url_targeting_for_purchase_history_search_messaging_", "name": "My Account - Purchase History  ", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/my-account/purchase-history"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "24411760300", "category": "other", "apiName": "22220670139_url_targeting_for_payments_management__hit_button_on", "name": "My Account - Payments Management", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/my-account/payments-management"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "24438710430", "category": "other", "apiName": "22220670139_search_results_page_srp_", "name": "Search Results Page (SRP) ", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/search"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "24566322323", "category": "other", "apiName": "22220670139_url_targeting_for_selfregistration__privacy_disclaim", "name": "URL Targeting for Self-Registration | Privacy Disclaimer", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/self-register"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "24776040383", "category": "other", "apiName": "22220670139_url_targeting_for_returns_drawer_html_fix", "name": "URL Targeting for Returns Drawer HTML Fix", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/my-account/returns"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "26821730006", "category": "other", "apiName": "22220670139_url_targeting_for_copy_of_qa_mycovetrus_test", "name": "URL Targeting for QA myCovetrus Test after snippet change", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://qa-b2bna.covetrus.io/CVT-NA/en/USD/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "26963110877", "category": "other", "apiName": "22220670139_url_targeting_for_searc_bib_scaling_test", "name": "URL Targeting for Search Bib Scaling Test - stage/QA ", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://qa-b2bna.covetrus.io/CVT-NA/en/USD/"}, {"match": "simple", "type": "url", "value": "https://stage-b2bna.covetrus.io/CVT-NA/en/USD/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "27332810077", "category": "other", "apiName": "22220670139_staging_homepage", "name": "Staging Homepage", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/homepage-3.0-staged"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "27584540470", "category": "other", "apiName": "22220670139_url_targeting_for_searchbib_fix", "name": "URL Targeting for SearchBib Fix", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://stage-b2bna.covetrus.io/CVT-NA/en/USD/"}, {"match": "substring", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "27675650009", "category": "other", "apiName": "22220670139_contact_us_page", "name": "Contact Us Page", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/contact-us"}]], "deactivationEnabled": true, "undoOnDeactivation": false, "tags": []}, {"id": "28875510006", "category": "other", "apiName": "22220670139_url_targeting_for_copy_of_search_bib_scaling_test__p", "name": "URL Targeting for T55: SRP Scaling", "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "\\/CVT-NA\\/en\\/USD\\/search\\/.*"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "4836086455730176", "category": "other", "apiName": "22220670139_url_targeting_for_compounding_landing_page", "name": "URL Targeting for Compounding Landing Page", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/compounding"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "4847854355742720", "category": "other", "apiName": "22220670139_autoship_landing_page", "name": "AutoShip landing page", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/autoship"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "4855861877669888", "category": "other", "apiName": "22220670139_url_targeting_for_test__homepage_carousel", "name": "URL Targeting for TEST - Homepage Carousel", "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/homepage-3.0-staged"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "5048709403115520", "category": "other", "apiName": "22220670139_url_targeting_for_hidden_covetrus_savings_dashboard", "name": "URL Targeting for Covetrus Savings Dashboard", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5694338353594368", "category": "other", "apiName": "22220670139_url_targeting_for_nutramax", "name": "URL Targeting for Nutramax's Dasuquin Advanced Product Search Banner", "staticConditions": ["or", ["or", {"match": "exact", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/search/dasuquin%20advanced?autoSuggestionEnabled=true&view=list"}, {"match": "regex", "type": "url", "value": "\\/(search|product)\\/081210"}, {"match": "regex", "type": "url", "value": "\\/(search|product)\\/080938"}, {"match": "regex", "type": "url", "value": "\\/(search|product)\\/081211"}, {"match": "regex", "type": "url", "value": "\\/(search|product)\\/080938"}, {"match": "regex", "type": "url", "value": "\\/(search|product)\\/077864"}, {"match": "regex", "type": "url", "value": "\\/(search|product)\\/070826"}, {"match": "regex", "type": "url", "value": "\\/(search|product)\\/070825"}, {"match": "regex", "type": "url", "value": "\\/(search|product)\\/058064"}, {"match": "regex", "type": "url", "value": "\\/(search|product)\\/058063"}, {"match": "regex", "type": "url", "value": "\\/(search|product)\\/059489"}, {"match": "regex", "type": "url", "value": "\\/(search|product)\\/059488"}, {"match": "regex", "type": "url", "value": "\\/(search|product)\\/059490"}, {"match": "regex", "type": "url", "value": "\\/(search|product)\\/055283"}, {"match": "regex", "type": "url", "value": "\\/(search|product)\\/055282"}, {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/search/dasuquin"}, {"match": "exact", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/search/dasuquin%20esm?autoSuggestionEnabled=true&view=list%3Futm_medium%3Dweb&utm_source=featured_product&utm_campaign=S4_dasuquin_Mar26"}, {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/search/dasaquin"}, {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/search/Nutramax"}, {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/search/Nutrumax"}, {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/search/Nutramax%20advanced"}, {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/search/dasuquin%20esm"}, {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/search/"}, {"match": "simple", "type": "url", "value": "Nutrumax%20advanced"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "5904140197429248", "category": "other", "apiName": "22220670139_pharmacy_product_search_page", "name": "Pharmacy product search page", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/c/PHAR-PHA"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "6189834939662336", "category": "other", "apiName": "22220670139_url_targeting_for_top_feline_office_use_", "name": "URL Targeting for Top Feline Office Use ", "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/c/OUP_TopFeline"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "6217525301084160", "category": "other", "apiName": "22220670139_url_targeting_for_copy_of_test_copy_t34_srp_recomm_2", "name": "URL Targeting for Optimizely Tech Support (Copy of TEST copy T34: SRP Recommendations ROLLOUT) ", "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "\\/CVT-NA\\/en\\/USD\\/search\\/.*"}]], "deactivationEnabled": true, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "6255851363631104", "category": "other", "apiName": "22220670139_url_targeting_for_copy_of_shawns_test", "name": "URL Targeting for VetSuite Promos Ethicon (PSI Only Audience)", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/vetsuite-promos"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6433332238483456", "category": "other", "apiName": "22220670139_autoship_top_10_product_pages", "name": "AutoShip Top 10 product pages", "staticConditions": ["or", ["or", {"match": "substring", "type": "url", "value": "/product/082390/"}], ["or", {"match": "substring", "type": "url", "value": "/product/075249/"}], ["or", {"match": "substring", "type": "url", "value": "/product/071136/"}], ["or", {"match": "substring", "type": "url", "value": "/product/008901/"}], ["or", {"match": "substring", "type": "url", "value": "/product/029405/"}], ["or", {"match": "substring", "type": "url", "value": "/product/011842/"}], ["or", {"match": "substring", "type": "url", "value": "/product/042966/"}], ["or", {"match": "substring", "type": "url", "value": "/product/014619/"}], ["or", {"match": "substring", "type": "url", "value": "/product/072960/"}], ["or", {"match": "substring", "type": "url", "value": "/product/073403/"}], ["or", {"match": "substring", "type": "url", "value": "/product/055481/"}], ["or", {"match": "substring", "type": "url", "value": "/product/042006/"}], ["or", {"match": "substring", "type": "url", "value": "/product/077942/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "6477596607643648", "category": "other", "apiName": "22220670139_autoship_manager", "name": "AutoShip Manager", "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/my-account/autoship-manager"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6479211792171008", "category": "other", "apiName": "22220670139_plp_pages", "name": "PLP Pages", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/"}], ["or", {"type": "element_present", "value": ".product-list-container"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
  const utils = optimizely.get("utils");

  const listOfTargetProducts = [
    "074760",
    "002501",
    "062551",
    "062553",
    "062554",
    "062552",
    "062555",
    "002584",
    "080605",
    "080606",
    "072365",
    "072366",
    "072367",
    "072368",
    "072369",
    "072370",
    "072371",
    "072372",
    "072373",
    "072374",
    "072375",
    "072376",
    "072377",
    "072378",
    "072379",
    "072380",
    "072381",
    "072382",
    "020642",
    "030181",
    "030182",
    "073124",
    "073122",
    "073121",
    "073123",
    "083646",
    "014676",
    "014678",
    "014677",
    "014619",
    "006913",
    "012696",
    "071879",
    "071883",
    "071880",
    "071882",
    "071881",
    "071884",
    "074300",
    "074298",
    "074299",
    "074301",
    "074743",
    "075249",
    "080511",
    "080512",
    "080513",
    "080514",
    "080515",
    "080516",
    "082199",
    "082200",
    "003605",
    "005612",
    "003574",
    "071139",
    "073091",
    "073099",
    "073106",
    "073108",
    "073102",
    "073116",
    "073118",
    "073092",
    "073098",
    "073101",
    "073107",
    "073109",
    "073120",
    "073100",
    "073103",
    "073117",
    "004830",
    "002526",
    "077515",
    "077516",
    "077517",
    "069167",
    "070654",
    "005498",
    "002489",
    "005554",
    "028846",
    "028847",
    "032688",
    "032689",
    "013286",
    "013287",
    "003718",
    "034771",
    "006368",
    "017358",
    "059150",
    "049755",
    "049756",
    "059149",
    "002476",
    "072663",
    "072661",
    "072662",
    "072664",
    "074735",
    "075063",
    "074738",
    "075060",
    "074741",
    "075059",
    "075058",
    "074740",
    "075066",
    "074739",
    "075061",
    "074736",
    "075065",
    "075064",
    "075062",
    "074737",
    "074742",
    "077856",
    "077857",
    "077858",
    "077859",
    "077860",
    "077861",
    "081929",
    "081930",
    "081931",
    "081932",
    "082671",
    "082672",
    "082775",
    "082776",
    "082777",
    "082778",
    "082779",
    "082780",
    "084725",
    "011023",
    "002524",
    "083882",
    "083883",
    "002515",
    "007404",
    "080657",
    "080658",
    "080659",
    "081195",
    "081213",
    "007080",
    "002522",
    "055481",
    "002521",
    "055479",
    "012186",
    "002498",
    "020071",
    "054466",
    "071141",
    "071142",
    "011842",
    "002463",
    "002556",
    "002558",
    "037750",
    "069174",
    "069175",
    "069169",
    "069177",
    "069168",
    "069170",
    "069181",
    "069172",
    "069176",
    "069179",
    "084596",
    "071207",
    "071208",
    "071206",
    "071205",
    "061035",
    "003845",
    "003847",
    "028869",
    "072960",
    "081975",
    "082124",
    "083639",
    "083640",
    "083641",
    "083642",
    "004692",
    "041091",
    "041093",
    "041090",
    "041092",
    "058597",
    "029405",
    "069325",
    "029404",
    "059333",
    "002468",
    "014583",
    "083479",
    "084168",
    "084176",
    "083536",
    "083537",
    "083538",
    "083539",
    "083650",
    "083651",
    "083652",
    "083653",
    "075004",
    "075007",
    "075005",
    "075003",
    "075006",
    "075002",
    "074163",
    "044217",
    "083104",
    "083105",
    "006375",
    "035392",
    "006374",
    "035338",
    "035393",
    "054760",
    "054761",
    "022709",
    "056946",
    "056947",
    "056945",
    "074930",
    "074931",
    "074932",
    "002518",
    "058596",
    "031264",
    "021164",
    "031895",
    "070644",
    "019902",
    "075521",
    "075522",
    "075589",
    "075590",
    "012346",
    "012347",
    "018905",
    "018906",
    "018907",
    "012344",
    "012349",
    "012357",
    "015522",
    "012343",
    "012345",
    "012350",
    "015523",
    "012348",
    "012351",
    "012352",
    "018904",
    "018909",
    "033879",
    "033880",
    "033861",
    "006379",
    "018918",
    "015521",
    "018912",
    "018914",
    "012358",
    "018911",
    "023728",
    "023730",
    "015520",
    "018910",
    "018913",
    "023729",
    "041875",
    "041874",
    "041876",
    "012330",
    "012332",
    "012334",
    "012337",
    "012341",
    "012331",
    "012339",
    "012340",
    "012333",
    "012335",
    "012338",
    "012336",
    "012355",
    "012356",
    "018897",
    "018899",
    "018900",
    "033857",
    "012353",
    "012354",
    "003092",
    "071215",
    "074182",
    "074178",
    "074181",
    "074184",
    "074180",
    "074183",
    "082803",
    "072033",
    "072034",
    "072035",
    "072036",
    "072037",
    "072038",
    "072039",
    "072040",
    "072041",
    "072042",
    "072043",
    "072044",
    "072045",
    "072046",
    "072047",
    "077593",
    "049341",
    "049342",
    "083397",
    "019935",
    "017586",
    "017598",
    "018358",
    "018369",
    "017587",
    "017597",
    "017599",
    "018372",
    "067004",
    "017593",
    "017595",
    "017596",
    "018371",
    "018376",
    "067002",
    "067008",
    "067010",
    "067011",
    "066994",
    "066999",
    "067001",
    "067003",
    "067009",
    "067021",
    "067041",
    "069303",
    "067015",
    "067017",
    "067018",
    "067020",
    "067024",
    "067027",
    "067029",
    "067013",
    "067025",
    "067036",
    "017588",
    "017590",
    "066993",
    "066995",
    "067005",
    "067012",
    "067022",
    "067031",
    "069311",
    "070646",
    "084626",
    "077708",
    "082430",
    "071148",
    "071147",
    "071149",
    "032284",
    "049335",
    "049337",
    "049336",
    "073742",
    "081279",
    "070279",
    "070281",
    "070270",
    "070278",
    "070269",
    "070277",
    "070280",
    "070271",
    "070256",
    "070274",
    "070276",
    "070258",
    "070260",
    "070255",
    "070259",
    "070275",
    "070253",
    "070254",
    "070273",
    "070262",
    "070257",
    "070266",
    "070265",
    "070267",
    "070268",
    "070252",
    "072025",
    "072027",
    "072028",
    "072029",
    "072031",
    "072100",
    "072101",
    "072102",
    "072026",
    "072106",
    "072103",
    "072104",
    "072105",
    "072030",
    "004018",
    "060764",
    "060768",
    "060769",
    "060759",
    "060760",
    "060758",
    "060761",
    "060767",
    "060770",
    "060757",
    "060763",
    "060762",
    "060765",
    "062386",
    "062387",
    "062390",
    "062383",
    "062391",
    "062379",
    "062381",
    "062382",
    "062389",
    "062380",
    "062384",
    "062385",
    "062388",
    "062392",
    "074080",
    "074076",
    "074078",
    "074079",
    "074075",
    "074077",
    "074081",
    "072830",
    "072833",
    "072836",
    "072835",
    "072832",
    "072834",
    "072838",
    "072831",
    "072837",
    "077777",
    "077778",
    "077779",
    "077780",
    "083918",
    "083919",
    "083920",
    "083921",
    "083922",
    "083923",
    "083924",
    "083926",
    "083927",
    "083928",
    "083929",
    "083931",
    "083933",
    "083934",
    "083935",
    "083970",
    "083971",
    "083972",
    "083973",
    "083974",
    "083975",
    "083976",
    "083977",
    "083978",
    "084049",
    "084050",
    "084051",
    "084052",
    "084053",
    "084054",
    "084055",
    "084056",
    "084057",
    "084058",
    "084059",
    "084060",
    "084061",
    "084062",
    "084063",
    "084064",
    "084065",
    "084066",
    "084067",
    "084068",
    "084069",
    "084070",
    "084071",
    "084072",
    "084073",
    "084074",
    "074177",
    "074176",
    "075020",
    "075023",
    "075022",
    "075021",
    "071210",
    "071136",
    "071137",
    "071124",
    "071131",
    "071135",
    "071138",
    "071132",
    "071133",
    "071134",
    "071128",
    "071129",
    "071130",
    "071119",
    "071120",
    "071123",
    "071122",
    "071121",
    "071126",
    "071127",
    "071125",
    "071558",
    "071559",
    "071560",
    "071561",
    "074013",
    "074011",
    "074012",
    "074014",
    "074010",
    "074345",
    "074348",
    "074344",
    "074346",
    "074347",
    "074349",
    "075758",
    "075759",
    "075760",
    "075761",
    "075762",
    "075763",
    "075764",
    "075765",
    "075766",
    "075767",
    "006565",
    "073944",
    "029905",
    "048705",
    "005164",
    "083203",
    "083204",
    "073864",
    "073867",
    "073863",
    "073865",
    "073866",
    "056199",
    "056200",
    "071957",
    "073741",
    "083274",
    "080927",
    "080928",
    "083275",
    "058333",
    "058346",
    "058349",
    "058350",
    "058356",
    "058357",
    "058358",
    "058360",
    "058365",
    "058366",
    "058367",
    "058368",
    "058372",
    "058373",
    "058378",
    "058381",
    "058382",
    "058386",
    "058389",
    "058390",
    "058392",
    "058395",
    "058396",
    "058397",
    "058407",
    "058408",
    "058411",
    "058420",
    "058424",
    "058428",
    "058434",
    "058435",
    "058444",
    "058445",
    "058448",
    "058453",
    "058330",
    "058331",
    "058332",
    "058339",
    "058341",
    "058353",
    "058354",
    "058355",
    "058363",
    "058364",
    "058369",
    "058377",
    "058383",
    "058384",
    "058385",
    "058398",
    "058399",
    "058403",
    "058404",
    "058406",
    "058418",
    "058419",
    "058423",
    "058431",
    "058433",
    "058436",
    "058438",
    "058439",
    "058443",
    "058447",
    "058451",
    "058452",
    "058334",
    "058335",
    "058336",
    "058342",
    "058344",
    "058347",
    "058351",
    "058361",
    "058371",
    "058374",
    "058380",
    "058387",
    "058393",
    "058400",
    "058401",
    "058405",
    "058410",
    "058413",
    "058414",
    "058416",
    "058426",
    "058427",
    "058432",
    "058441",
    "058442",
    "058446",
    "058449",
    "058337",
    "058338",
    "058340",
    "058343",
    "058345",
    "058348",
    "058352",
    "058359",
    "058362",
    "058370",
    "058375",
    "058376",
    "058379",
    "058388",
    "058391",
    "058394",
    "058402",
    "058409",
    "058412",
    "058415",
    "058417",
    "058421",
    "058422",
    "058425",
    "058429",
    "058430",
    "058437",
    "058440",
    "058450",
    "050845",
    "050839",
    "050844",
    "051061",
    "050841",
    "050840",
    "050842",
    "050843",
    "007321",
    "007320",
    "007322",
    "007319",
    "007323",
    "007325",
    "033133",
    "073004",
    "073005",
    "073006",
    "073007",
    "073008",
    "073009",
    "073010",
    "073011",
    "073012",
    "073013",
    "073014",
    "071214",
    "071217",
    "071216",
    "082386",
    "082387",
    "082388",
    "082389",
    "082390",
    "082391",
    "082392",
    "082393",
    "083506",
    "031477",
    "020720",
    "041974",
    "020718",
    "020719",
    "020370",
    "023679",
    "058569",
    "058573",
    "058574",
    "058575",
    "058570",
    "058571",
    "058572",
    "074085",
    "083435",
    "083436",
    "083437",
    "083438",
    "083439",
    "083440",
    "029211",
    "029213",
    "029209",
    "029210",
    "029260",
    "031996",
    "029208",
    "029259",
    "029261",
    "029258",
    "029262",
    "033902",
    "034272",
    "033903",
    "033905",
    "033900",
    "034897",
    "038727",
    "041223",
    "056925",
    "029271",
    "033901",
    "033904",
    "029207",
    "071928",
    "034271",
    "034902",
    "056926",
    "029222",
    "029217",
    "029236",
    "029237",
    "029239",
    "029244",
    "029246",
    "029216",
    "029219",
    "029221",
    "029249",
    "029255",
    "029256",
    "029263",
    "029264",
    "029274",
    "029275",
    "029276",
    "029283",
    "029292",
    "029294",
    "032000",
    "032002",
    "029220",
    "029235",
    "029241",
    "029242",
    "029247",
    "029251",
    "029252",
    "029257",
    "029265",
    "029272",
    "029277",
    "029240",
    "029243",
    "029248",
    "029250",
    "029253",
    "029254",
    "029268",
    "029270",
    "029279",
    "029280",
    "029282",
    "029291",
    "031995",
    "032003",
    "033906",
    "033916",
    "033917",
    "034273",
    "034369",
    "034891",
    "034896",
    "034899",
    "029278",
    "029285",
    "029288",
    "029289",
    "031997",
    "032001",
    "032004",
    "033909",
    "033912",
    "033915",
    "033896",
    "033898",
    "033907",
    "033910",
    "033914",
    "034275",
    "034466",
    "034890",
    "034893",
    "038728",
    "039008",
    "041182",
    "041217",
    "045102",
    "045107",
    "045109",
    "045112",
    "048132",
    "056711",
    "056922",
    "057456",
    "057457",
    "034370",
    "034895",
    "038725",
    "041177",
    "041178",
    "041213",
    "041216",
    "041220",
    "045104",
    "045105",
    "057460",
    "057462",
    "057463",
    "059032",
    "059035",
    "059036",
    "059040",
    "059048",
    "038729",
    "040965",
    "040966",
    "041181",
    "041221",
    "041222",
    "045103",
    "045106",
    "045110",
    "056697",
    "056699",
    "056701",
    "056704",
    "056708",
    "056712",
    "062375",
    "056703",
    "056707",
    "056709",
    "056713",
    "056904",
    "056905",
    "056912",
    "056913",
    "056907",
    "056919",
    "057455",
    "057465",
    "056914",
    "056915",
    "056918",
    "056923",
    "057458",
    "057464",
    "059033",
    "059037",
    "059041",
    "059044",
    "059038",
    "059039",
    "059042",
    "059047",
    "062372",
    "029238",
    "029245",
    "029266",
    "029269",
    "029290",
    "029293",
    "031999",
    "033899",
    "033911",
    "033913",
    "034269",
    "034274",
    "034276",
    "034892",
    "034894",
    "038724",
    "039009",
    "039010",
    "041180",
    "041211",
    "041212",
    "041214",
    "041215",
    "041218",
    "041219",
    "045101",
    "045111",
    "056705",
    "056706",
    "056906",
    "056916",
    "057459",
    "057461",
    "059034",
    "059043",
    "059045",
    "059046",
    "059049",
    "062373",
    "062374",
    "062376",
    "029218",
    "029287",
    "029286",
    "055478",
    "055482",
    "075285",
    "075286",
    "003366",
    "021634",
    "021636",
    "022873",
    "021633",
    "021635",
    "029321",
    "004357",
    "004358",
    "004356",
    "082143",
    "082144",
    "082145",
    "082710",
    "083413",
    "083414",
    "083415",
    "083416",
    "071046",
    "071048",
    "071047",
    "005740",
    "011116",
    "015621",
    "073521",
    "073519",
    "073520",
    "034789",
    "034792",
    "034794",
    "034790",
    "034787",
    "034788",
    "034791",
    "034795",
    "018162",
    "018168",
    "018169",
    "018171",
    "018173",
    "018174",
    "018175",
    "024221",
    "024223",
    "024224",
    "024225",
    "038964",
    "018163",
    "018164",
    "018167",
    "018176",
    "024211",
    "024214",
    "024215",
    "024220",
    "024222",
    "038958",
    "038959",
    "038960",
    "038966",
    "018165",
    "018172",
    "024218",
    "038962",
    "018166",
    "018170",
    "024212",
    "024213",
    "024216",
    "024217",
    "024219",
    "038961",
    "038965",
    "074366",
    "074369",
    "074365",
    "074368",
    "074367",
    "058312",
    "058313",
    "058314",
    "058315",
    "058316",
    "058317",
    "082139",
    "082140",
    "082141",
    "082142",
    "024176",
    "072491",
    "072492",
    "072493",
    "072494",
    "072495",
    "072496",
    "072497",
    "072894",
    "072895",
    "072896",
  ];

  utils.observeSelector("covetrus-product-list-item", function (product) {
    if (listOfTargetProducts.includes(product.querySelector("#product-subtitle").childNodes[0].textContent.trim()) || listOfTargetProducts.includes(product.querySelector("#product-subtitle").childNodes[0].textContent.trim().slice(7, 13))) {
      activate();
    }
  });
}
}, {"id": "6584686422523904", "category": "other", "apiName": "22220670139_vaccines_product_search_page", "name": "Vaccines product search page", "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/CVT-NA/en/USD/c/VACC"}], ["or", {"match": "exact", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/CVT-NA/en/USD/c/VACC"}], ["or", {"match": "regex", "type": "url", "value": "\\/c\\/VACC(\\?|$|#|\\/)"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "6589830621036544", "category": "other", "apiName": "22220670139_url_targeting_for_copy_of_search_issues_popup_1", "name": "URL Targeting for ORIGINAL Search Issues Popup", "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "\\/CVT-NA\\/en\\/USD\\/search\\/.*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "6731166342971392", "category": "other", "apiName": "22220670139_parasiticides_product_search_page", "name": "Parasiticides product search page", "staticConditions": ["or", ["or", {"match": "exact", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/CVT-NA/en/USD/CVT-NA/en/USD/c/PARA"}], ["or", {"match": "simple", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/CVT-NA/en/USD/CVT-NA/en/USD/c/PARA"}], ["or", {"match": "regex", "type": "url", "value": "\\/c\\/PARA(\\?|$|#|\\/)"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "6753712337584128", "category": "other", "apiName": "22220670139_url_targeting_for_promotions_page__autoship", "name": "URL Targeting for AutoShip (manager, landing page and PLP pages)", "staticConditions": ["or", ["or", {"match": "exact", "type": "url", "value": "https://www.mycovetrus.com/CVT-NA/en/USD/autoship"}], ["or", {"match": "substring", "type": "url", "value": "/product/082390/"}], ["or", {"match": "substring", "type": "url", "value": "/product/075249"}], ["or", {"match": "substring", "type": "url", "value": "/product/071136"}], ["or", {"match": "substring", "type": "url", "value": "/product/008901"}], ["or", {"match": "substring", "type": "url", "value": "/product/029405"}], ["or", {"match": "substring", "type": "url", "value": "/product/011842"}], ["or", {"match": "substring", "type": "url", "value": "/product/042966"}], ["or", {"match": "substring", "type": "url", "value": "/product/014619"}], ["or", {"match": "substring", "type": "url", "value": "/product/072960"}], ["or", {"match": "substring", "type": "url", "value": "/product/073403"}], ["or", {"match": "substring", "type": "url", "value": "/product/055481"}], ["or", {"match": "substring", "type": "url", "value": "/product/042006"}], ["or", {"match": "substring", "type": "url", "value": "/product/077942"}], ["or", {"match": "substring", "type": "url", "value": "/search/082390"}], ["or", {"match": "substring", "type": "url", "value": "/search/075249"}], ["or", {"match": "substring", "type": "url", "value": "/search/071136"}], ["or", {"match": "substring", "type": "url", "value": "/search/008901"}], ["or", {"match": "substring", "type": "url", "value": "/search/029405"}], ["or", {"match": "substring", "type": "url", "value": "/search/011842"}], ["or", {"match": "substring", "type": "url", "value": "/search/042966"}], ["or", {"match": "substring", "type": "url", "value": "/search/014619"}], ["or", {"match": "substring", "type": "url", "value": "/search/072960"}], ["or", {"match": "substring", "type": "url", "value": "/search/073403"}], ["or", {"match": "substring", "type": "url", "value": "/search/055481"}], ["or", {"match": "substring", "type": "url", "value": "/search/042006"}], ["or", {"match": "substring", "type": "url", "value": "/search/077942"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function(activate) {

    var ELIGIBLE_PATHS = [
        "/CVT-NA/en/USD/autoship",
        "/CVT-NA/en/USD/product/082390/",
        "/CVT-NA/en/USD/search/082390",
        "/CVT-NA/en/USD/product/075249/",
        "/CVT-NA/en/USD/search/075249",
        "/CVT-NA/en/USD/product/071136/",
        "/CVT-NA/en/USD/search/071136",
        "/CVT-NA/en/USD/product/008901/",
        "/CVT-NA/en/USD/search/008901",
        "/CVT-NA/en/USD/product/029405/",
        "/CVT-NA/en/USD/search/029405",
        "/CVT-NA/en/USD/product/011842/",
        "/CVT-NA/en/USD/search/011842",
        "/CVT-NA/en/USD/product/042966/",
        "/CVT-NA/en/USD/search/042966",
        "/CVT-NA/en/USD/product/014619/",
        "/CVT-NA/en/USD/search/014619",
        "/CVT-NA/en/USD/product/072960/",
        "/CVT-NA/en/USD/search/072960",
        "/CVT-NA/en/USD/product/073403/",
        "/CVT-NA/en/USD/search/073403",
        "/CVT-NA/en/USD/product/055481/",
        "/CVT-NA/en/USD/search/055481",
        "/CVT-NA/en/USD/product/042006/",
        "/CVT-NA/en/USD/search/042006",
        "/CVT-NA/en/USD/product/077942/",
        "/CVT-NA/en/USD/search/077942"
    ];

    const TAG = "[OPTLY MULTI-URL CALLBACK]";
    const DEDUPE_MS = 1000;

    window.__optlyMultiUrl = window.__optlyMultiUrl || {
        lastUrl: null,
        lastTs: 0,
        patchedHistory: false,
        installed: false
    };

    function currentUrl() {
        return location.pathname + location.search + location.hash;
    }

    function isEligible() {
        return ELIGIBLE_PATHS.some(function(p) {
        return location.pathname.startsWith(p);
        });
    }

    function tryActivate(reason) {
        if (!isEligible()) return;

        const url = currentUrl();
        const now = Date.now();

        // Prevent rapid duplicate activations
        if (
        window.__optlyMultiUrl.lastUrl === url &&
        (now - window.__optlyMultiUrl.lastTs) < DEDUPE_MS
        ) {
        return;
        }

        window.__optlyMultiUrl.lastUrl = url;
        window.__optlyMultiUrl.lastTs = now;

        console.log(TAG, "ACTIVATING", { reason: reason, url: url });
        activate();
    }

    function installOnce() {
        if (window.__optlyMultiUrl.installed) return;
        window.__optlyMultiUrl.installed = true;

        // Back / forward navigation
        window.addEventListener("popstate", function() {
        setTimeout(function(){ tryActivate("popstate"); }, 0);
        });

        // Hash routing
        window.addEventListener("hashchange", function() {
        setTimeout(function(){ tryActivate("hashchange"); }, 0);
        });

        // Patch History API for SPA routing
        if (!window.__optlyMultiUrl.patchedHistory) {
        window.__optlyMultiUrl.patchedHistory = true;

        var _push = history.pushState;
        var _replace = history.replaceState;

        history.pushState = function() {
            var ret = _push.apply(this, arguments);
            setTimeout(function(){ tryActivate("pushState"); }, 0);
            return ret;
        };

        history.replaceState = function() {
            var ret = _replace.apply(this, arguments);
            setTimeout(function(){ tryActivate("replaceState"); }, 0);
            return ret;
        };
        }

        console.log(TAG, "Installed. Watching paths:", ELIGIBLE_PATHS);
    }

    installOnce();

    // Initial load / reload / deep link
    tryActivate("initial");
    }
}], "events": [{"id": "22514411252", "viewId": "22529500951", "name": "Login Button Click - Nav ", "category": "other", "apiName": "22220670139_login_btn", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".outlined-account-normal > svg"}}, {"id": "22597111309", "viewId": null, "name": "Overall Revenue", "category": "other", "apiName": "trackRevenue", "eventType": "custom", "eventFilter": null}, {"id": "22623911693", "viewId": "22529500951", "name": "Sign In Button Click (pop-out) ", "category": "other", "apiName": "22220670139_sign_in_button_click_popout_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".btn-lg"}}, {"id": "22626071985", "viewId": null, "name": "Overall Revenue Production", "category": "other", "apiName": "trackRevenueProduction", "eventType": "custom", "eventFilter": null}, {"id": "23716180643", "viewId": "22529500951", "name": "Home Hero: Shop Now CTA Click ", "category": "other", "apiName": "22220670139_home_hero_shop_now_cta_click_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a.mt-5"}}, {"id": "23722290688", "viewId": "22529500951", "name": "HomeDash: Order History Click (Block 2) ", "category": "other", "apiName": "22220670139_homedash_order_history_click_block_2_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "body > app-root > main > cx-page-layout > cx-page-slot.CVTHeroBannerSlot.has-components > covetrus-quick-access > div > div:nth-child(2)"}}, {"id": "23728351332", "viewId": "22529500951", "name": "HomeDash: Saved Cards Click (Block 4) ", "category": "other", "apiName": "22220670139_homedash_saved_cards_click_block_4_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "body > app-root > main > cx-page-layout > cx-page-slot.CVTHeroBannerSlot.has-components > covetrus-quick-access > div > div:nth-child(4)"}}, {"id": "23732550965", "viewId": "22529500951", "name": "HomeDash: My Profile Click (Block 1) ", "category": "other", "apiName": "22220670139_homedash_my_profile_click_block_1_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "body > app-root > main > cx-page-layout > cx-page-slot.CVTHeroBannerSlot.has-components > covetrus-quick-access > div > div:nth-child(1)"}}, {"id": "23742140255", "viewId": "22529500951", "name": "HomeDash: Favorites Click (block 3) ", "category": "other", "apiName": "22220670139_homedash_favorites_click_block_3_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "body > app-root > main > cx-page-layout > cx-page-slot.CVTHeroBannerSlot.has-components > covetrus-quick-access > div > div:nth-child(3)"}}, {"id": "23849590138", "viewId": "22529500951", "name": "Homepage: You Might Like section clicks", "category": "other", "apiName": "22220670139_homepage_you_might_like_section_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".p-lg-5"}}, {"id": "24109040220", "viewId": "22529500951", "name": "Homepage Dashboard (all 4) ", "category": "other", "apiName": "22220670139_homepage_dashboard_all_4_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".qa-container"}}, {"id": "24199231462", "viewId": "22529500951", "name": "\"Enter Now\" Homepage CTA Click - 5.17.23", "category": "other", "apiName": "22220670139_enter_now_homepage_cta_click__51723", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".hero-banner .cta-wrap.mt-5"}}, {"id": "24374501465", "viewId": "24380221479", "name": "Search -  Purchase History Link", "category": "other", "apiName": "22220670139_search___purchase_history_link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".categories-brands-container > div:nth-of-type(2) a"}}, {"id": "24432220008", "viewId": "22529500951", "name": "Home Hero CTA: Enter Now - 6.1.23", "category": "other", "apiName": "22220670139_home_hero_cta_enter_now__6123", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".hero-banner .btn-outline-primary"}}, {"id": "24459470350", "viewId": "24438710430", "name": "Add to Cart Button Click (Any Page) ", "category": "other", "apiName": "22220670139_add_to_cart_srp", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#add-to-cart-btn"}}, {"id": "25233751254", "viewId": "22452110265", "name": "\"Secure Checkout\" Button Click", "category": "other", "apiName": "22220670139_secure_checkout_button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".btn-success"}}, {"id": "26256210536", "viewId": "24380221479", "name": "See All Products CTA Click", "category": "other", "apiName": "22220670139_see_all_products_cta_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#results > div.products > div.d-flex.top-search-bib > a"}}, {"id": "26315950011", "viewId": "24380221479", "name": "Add to Cart - Sitewide ", "category": "other", "apiName": "22220670139_add_to_cart_recs_widget_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#add-to-cart-btn"}}, {"id": "27452340038", "viewId": "24438710430", "name": "Click on Feedback Link (Control Version) ", "category": "other", "apiName": "22220670139_click_on_feedback_link_control_version_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "body > app-root > main > cx-page-layout > cx-page-slot.SearchResultsListSlot.has-components > covetrus-product-list > section > p"}}, {"id": "27465000089", "viewId": "24438710430", "name": "Click on Purchase History Link on SRP ", "category": "other", "apiName": "22220670139_click_on_purchase_history_link_on_srp_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "body > app-root > main > cx-page-layout > cx-page-slot.SearchResultsListSlot.has-components > covetrus-product-list > section > p > a > u"}}, {"id": "27467660090", "viewId": "24438710430", "name": "Click on Feedback Link", "category": "other", "apiName": "22220670139_click_on_feedback_link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "body > app-root > main > cx-page-layout > cx-page-slot.SearchResultsListSlot.has-components > covetrus-product-list > section > p > p"}}, {"id": "27477080309", "viewId": "22529500951", "name": "CTA Button 2", "category": "other", "apiName": "22220670139_cta_button_2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".hero-banner .optimizely-hero-banner-btn"}}, {"id": "27658970015", "viewId": "22529500951", "name": "CTA Button 1 QZUhbjzEeysN2R91BBLTE", "category": "other", "apiName": "22220670139_cta_button_1_QZUhbjzEeysN2R91BBLTE", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".CVTHeroBannerSlot :is(.hero-banner, .banner-mobile) .cta-wrap cx-generic-link"}}, {"id": "29226820293", "viewId": "24380221479", "name": "Optimizely widget click sitewide", "category": "other", "apiName": "22220670139_optimizely_widget_click_sitewide", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "body > app-root > main > cx-page-layout > cx-page-slot.CVTHeroBannerSlot.has-components > cx-page-slot > cvet-carousel-recommended"}}, {"id": "4540223003033600", "viewId": "6479211792171008", "name": "PLP to PDP click", "category": "other", "apiName": "22220670139_plp_to_pdp_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#product-name, #product-image-container"}}, {"id": "4545570017116160", "viewId": "22529500951", "name": "Homepage Banner 1 MRLR8F64U8JE6PFsF23Mv Uj 3JNQWyUnoeHp5um3xYvK9", "category": "other", "apiName": "22220670139_banner1_1_MRLR8F64U8JE6PFsF23M_3JNQWyUnoeHp5um3xYvK9", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-1"}}, {"id": "4635751176994816", "viewId": "22529500951", "name": "Homepage Banner 1 MRLR8F64U8JE6PFsF23Mv Uj Jn9f33Vf16Fcbnvx7kpHY", "category": "other", "apiName": "22220670139_banner1_1_MRLR8F64U8JE6PFsF23M_Jn9f33Vf16Fcbnvx7kpHY", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-1"}}, {"id": "4646583269064704", "viewId": "22529500951", "name": "Homepage Banner 3 YGJ8TmzdPoUyo3YsEDpFj Le EpZ1bWBhbPzXKofk7SdSm", "category": "other", "apiName": "22220670139_banner3_1_YGJ8TmzdPoUyo3YsEDpF_EpZ1bWBhbPzXKofk7SdSm", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-3"}}, {"id": "4674161650434048", "viewId": "24380221479", "name": "Dental banner January 2026 - Shop Now CTA", "category": "other", "apiName": "22220670139_dental_banner_january_2026__shop_now_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#dental-banner-CTA"}}, {"id": "4681981888299008", "viewId": "24380221479", "name": "Dental banner January 2026 - T&C details link", "category": "other", "apiName": "22220670139_dental_banner_january_2026__tc_details_link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#dental-details-link"}}, {"id": "4697835661164544", "viewId": "22529500951", "name": "Homepage Banner 3 YGJ8TmzdPoUyo3YsEDpFj", "category": "other", "apiName": "22220670139_banner3_1_YGJ8TmzdPoUyo3YsEDpFj", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-3"}}, {"id": "4773608654897152", "viewId": "24380221479", "name": "AutoShip and Save Mobile Nav Item", "category": "other", "apiName": "22220670139_autoship_and_save_mobile_nav_item", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".autoship-nav-item-mobile"}}, {"id": "4780118399254528", "viewId": "6584686422523904", "name": "Vaccines Content Banner CTA - Nov. '26", "category": "other", "apiName": "22220670139_vaccines_content_banner_cta__nov_26", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content-banner-CTA"}}, {"id": "4785102557806592", "viewId": "22529500951", "name": "Homepage Banner 2 MZs9pU1QopeA3msPfyQGW 7H UBP7VtfJhrWrEPznuJKMx", "category": "other", "apiName": "22220670139_banner2_1_MZs9pU1QopeA3msPfyQG_UBP7VtfJhrWrEPznuJKMx", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-2"}}, {"id": "4808437905752064", "viewId": "22452110265", "name": "AutoShip Banner CTA", "category": "other", "apiName": "22220670139_autoship_banner_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".autoship-learn"}}, {"id": "4808575697027072", "viewId": "24380221479", "name": "Live Chat", "category": "other", "apiName": "22220670139_live_chat", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#embeddedMessagingConversationButton"}}, {"id": "4858010359562240", "viewId": "22529500951", "name": "Homepage Banner 2 MZs9pU1QopeA3msPfyQGW", "category": "other", "apiName": "22220670139_banner2_1_MZs9pU1QopeA3msPfyQGW", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-2"}}, {"id": "4862401332379648", "viewId": "24380221479", "name": "AutoShip and Save Desktop Nav Item", "category": "other", "apiName": "22220670139_autoship_and_save_desktop_nav_item", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".autoship-nav-item-desktop"}}, {"id": "4881807255011328", "viewId": "6479211792171008", "name": "PLP Add to Cart", "category": "other", "apiName": "22220670139_plp_add_to_cart", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#add-to-cart-btn"}}, {"id": "4882159272460288", "viewId": "5904140197429248", "name": "Pharmacy Content Banner CTA - Nov. '26", "category": "other", "apiName": "22220670139_pharmacy_content_banner_cta__nov_26", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content-banner-CTA"}}, {"id": "4907615939985408", "viewId": "4836086455730176", "name": "Compounding landing page - what's new CTA 2", "category": "other", "apiName": "22220670139_compounding_landing_page__whats_new_cta_2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "article:nth-of-type(2) a.btn-primary"}}, {"id": "4925777383260160", "viewId": "6731166342971392", "name": "Para Content Banner CTA - Nov. '26", "category": "other", "apiName": "22220670139_para_content_banner_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content-banner-CTA"}}, {"id": "4937508635541504", "viewId": "22529500951", "name": "Featured Product 1", "category": "other", "apiName": "22220670139_featured_product_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".feature-product-1 .mx-4"}}, {"id": "5140048811655168", "viewId": "22529500951", "name": "Paid Ad - 1", "category": "other", "apiName": "22220670139_paid_ad_1_2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".paid-ad-1 .btn-primary.my-0.mx-0"}}, {"id": "5304709999755264", "viewId": "22529500951", "name": "Homepage Banner 2 MZs9pU1QopeA3msPfyQGW 7H DNuoRGaZwDs84fXic5pCL", "category": "other", "apiName": "22220670139_banner2_1_MZs9pU1QopeA3msPfyQG_DNuoRGaZwDs84fXic5pCL", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-2"}}, {"id": "5349416459042816", "viewId": "22529500951", "name": "Homepage Banner 2 MZs9pU1QopeA3msPfyQGW 7H BztfKrmGZAZb5Q8fHWY7u", "category": "other", "apiName": "22220670139_banner2_1_MZs9pU1QopeA3msPfyQG_BztfKrmGZAZb5Q8fHWY7u", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-2"}}, {"id": "5357004531695616", "viewId": null, "name": "AutoShip Nav CTA \u2192 Cart", "category": "other", "apiName": "autoship_nav_cta_then_cart", "eventType": "custom", "eventFilter": null}, {"id": "5432943154298880", "viewId": "24380221479", "name": "Dasuquin Banner CTA", "category": "other", "apiName": "22220670139_dasuquin_banner_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#dasuquin-banner-CTA"}}, {"id": "5445363350372352", "viewId": "22529500951", "name": "Homepage Banner 1 MRLR8F64U8JE6PFsF23Mv Uj Snmb42ckFAaPKvPFcp3tW", "category": "other", "apiName": "22220670139_banner1_1_MRLR8F64U8JE6PFsF23M_Snmb42ckFAaPKvPFcp3tW", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-1"}}, {"id": "5453743620096000", "viewId": "22529500951", "name": "Homepage Banner 2 MZs9pU1QopeA3msPfyQGW 7H Qw4igqtFF2Rt97wo1H4q5", "category": "other", "apiName": "22220670139_banner2_1_MZs9pU1QopeA3msPfyQG_Qw4igqtFF2Rt97wo1H4q5", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-2"}}, {"id": "5455590036602880", "viewId": "22529500951", "name": "Homepage Banner 3 YGJ8TmzdPoUyo3YsEDpFj Le 7T8MjdahnZHTVT29ov9gb", "category": "other", "apiName": "22220670139_banner3_1_YGJ8TmzdPoUyo3YsEDpF_7T8MjdahnZHTVT29ov9gb", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-3"}}, {"id": "5478178460794880", "viewId": "22529500951", "name": "Homepage compounding CTA", "category": "other", "apiName": "22220670139_compounding_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".hp-compounding-cta"}}, {"id": "5532243951616000", "viewId": "22529500951", "name": "Paid Ad - 2", "category": "other", "apiName": "22220670139_paid_ad__2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".paid-ad-2 .btn-primary.my-0.mx-0"}}, {"id": "5578868996702208", "viewId": "4836086455730176", "name": "Compounding landing page - what's new CTA 3", "category": "other", "apiName": "22220670139_compounding_landing_page__whats_new_cta_3", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "article:nth-of-type(3) a.btn-primary"}}, {"id": "5607005249863680", "viewId": null, "name": "Autoship Nav CTA \u2192 Checkout", "category": "other", "apiName": "autoship_nav_cta_then_checkout", "eventType": "custom", "eventFilter": null}, {"id": "5617425052336128", "viewId": "4847854355742720", "name": "AutoShip CTA - logged out", "category": "other", "apiName": "22220670139_autoship_landing_page__logged_out", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".autoship-header-btn"}}, {"id": "5627191002660864", "viewId": "4836086455730176", "name": "Compounding landing page - what's new CTA 1", "category": "other", "apiName": "22220670139_compounding_landing_page__whats_new_cta_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "article:nth-of-type(1) a.btn-primary"}}, {"id": "5632601793232896", "viewId": "24438710430", "name": "SRP: Facet Click (Facet Search or Refinement) ", "category": "other", "apiName": "22220670139_srp_facet_click_facet_search_or_refinement_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "body > app-root > main > cx-page-layout > cx-page-slot.ProductLeftRefinements.has-components"}}, {"id": "5642090156130304", "viewId": "22529500951", "name": "CONA Ad #2", "category": "other", "apiName": "22220670139_cona_ad_2_2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".cona-ad-2 .btn-primary.my-0.mx-0"}}, {"id": "5899259774500864", "viewId": "22452110265", "name": "AutoShip Explore Recommendations CTA", "category": "other", "apiName": "22220670139_autoship_explore_recommendations", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".explore-recs"}}, {"id": "5951729424924672", "viewId": "22529500951", "name": "Homepage Banner 3 YGJ8TmzdPoUyo3YsEDpFj Le WnENF81oRYNMC2mj2dKvN", "category": "other", "apiName": "22220670139_banner3_1_YGJ8TmzdPoUyo3YsEDpF_WnENF81oRYNMC2mj2dKvN", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-3"}}, {"id": "5970436467458048", "viewId": "4847854355742720", "name": "AutoShip CTA - logged In", "category": "other", "apiName": "22220670139_autoship_cta__logged_in", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".autoship-header-btn-logged-in"}}, {"id": "5975920442343424", "viewId": "6731166342971392", "name": "Zoetis Revolution Link", "category": "other", "apiName": "22220670139_zoetis_revolution_link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#zoetis-revolution-link"}}, {"id": "6051824734568448", "viewId": "22529500951", "name": "Homepage Banner 3", "category": "other", "apiName": "22220670139_banner3_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-3"}}, {"id": "6063298794225664", "viewId": "24380221479", "name": "AutoShip CTA - Banner clicks", "category": "other", "apiName": "22220670139_autoship_cta__banner_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".autoship-header-btn-opt"}}, {"id": "6153117482352640", "viewId": "22529500951", "name": "Homepage Banner 1 MRLR8F64U8JE6PFsF23Mv", "category": "other", "apiName": "22220670139_banner1_1_MRLR8F64U8JE6PFsF23Mv", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-1"}}, {"id": "6221543152287744", "viewId": "22529500951", "name": "Featured Product 2", "category": "other", "apiName": "22220670139_fp", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".feature-product-2 .mx-4"}}, {"id": "6233289864773632", "viewId": "22529500951", "name": "Homepage Banner 3 YGJ8TmzdPoUyo3YsEDpFj Le GmZpnFNKqX76iT5jXephZ", "category": "other", "apiName": "22220670139_banner3_1_YGJ8TmzdPoUyo3YsEDpF_GmZpnFNKqX76iT5jXephZ", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-3"}}, {"id": "6333273207472128", "viewId": "22529500951", "name": "Homepage Banner 3 YGJ8TmzdPoUyo3YsEDpFj Le JtVnGtgXjhNBGGUL3RWgx", "category": "other", "apiName": "22220670139_banner3_1_YGJ8TmzdPoUyo3YsEDpF_JtVnGtgXjhNBGGUL3RWgx", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-3"}}, {"id": "6368572805480448", "viewId": "22529500951", "name": "Homepage Banner 1 MRLR8F64U8JE6PFsF23Mv UjUYKnZwXpa9sHjrAoXpx", "category": "other", "apiName": "22220670139_banner1_1_MRLR8F64U8JE6PFsF23M_UjUYKnZwXpa9sHjrAoXpx", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-1"}}, {"id": "6379556905418752", "viewId": "6731166342971392", "name": "Zoetis Simparica Link", "category": "other", "apiName": "22220670139_zoetis_simparica_link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#zoetis-simparica-link"}}, {"id": "6432828341092352", "viewId": "22529500951", "name": "Homepage Banner 1 MRLR8F64U8JE6PFsF23Mv Uj EZQtsbbtQSe1zLyxPM8ZR", "category": "other", "apiName": "22220670139_banner1_1_MRLR8F64U8JE6PFsF23M_EZQtsbbtQSe1zLyxPM8ZR", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-1"}}, {"id": "6457699433447424", "viewId": "4836086455730176", "name": "Compounding landing page - header CTA", "category": "other", "apiName": "22220670139_compounding_landing_page__header_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "cms-card-box:nth-of-type(1) a"}}, {"id": "6489821711958016", "viewId": "22529500951", "name": "Homepage Banner 3 YGJ8TmzdPoUyo3YsEDpFj LeQeooLPhx6a4vGR1J71j", "category": "other", "apiName": "22220670139_banner3_1_YGJ8TmzdPoUyo3YsEDpF_LeQeooLPhx6a4vGR1J71j", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-3"}}, {"id": "6504208271147008", "viewId": "22529500951", "name": "CONA Ad #1", "category": "other", "apiName": "22220670139_cona_ad_1_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".cona-ad-1 .btn-primary.my-0.mx-0"}}, {"id": "6543064810913792", "viewId": "22529500951", "name": "Homepage Banner 2 MZs9pU1QopeA3msPfyQGW 7HSZqizkc1GehYgUjtk5m", "category": "other", "apiName": "22220670139_banner2_1_MZs9pU1QopeA3msPfyQG_7HSZqizkc1GehYgUjtk5m", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-2"}}, {"id": "6550898122424320", "viewId": "22529500951", "name": "Featured Product 3", "category": "other", "apiName": "22220670139_featured_product_3", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".feature-product-3 .mx-4"}}, {"id": "6558275947200512", "viewId": "22529500951", "name": "Homepage Banner 2 MZs9pU1QopeA3msPfyQGW 7H BfCDosEWX2q3gkkdjzSeW", "category": "other", "apiName": "22220670139_banner2_1_MZs9pU1QopeA3msPfyQG_BfCDosEWX2q3gkkdjzSeW", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-2"}}, {"id": "6595767555588096", "viewId": "22529500951", "name": "Homepage Banner 2 MZs9pU1QopeA3msPfyQGW 7H 59EiNLFmyBTJ18dDMVB9s", "category": "other", "apiName": "22220670139_banner2_1_MZs9pU1QopeA3msPfyQG_59EiNLFmyBTJ18dDMVB9s", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-2"}}, {"id": "6640967088865280", "viewId": "22529500951", "name": "Homepage Banner 1", "category": "other", "apiName": "22220670139_banner1_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-1"}}, {"id": "6644744500019200", "viewId": "22529500951", "name": "Homepage Banner 2", "category": "other", "apiName": "22220670139_banner2_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-2"}}, {"id": "6644967884455936", "viewId": "24438710430", "name": "Search Issues Popup - Feedback CTA", "category": "other", "apiName": "22220670139_search_results_feedback_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#openFeedbackForm"}}, {"id": "6678236856320000", "viewId": "22529500951", "name": "Featured Product 4", "category": "other", "apiName": "22220670139_featured_product_4", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".feature-product-4 .mx-4"}}, {"id": "6725621378711552", "viewId": "22529500951", "name": "Homepage Banner 3 YGJ8TmzdPoUyo3YsEDpFj Le XTeU5SzN2h7adNsJcUzMs", "category": "other", "apiName": "22220670139_banner3_1_YGJ8TmzdPoUyo3YsEDpF_XTeU5SzN2h7adNsJcUzMs", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".carousel-cta-3"}}], "dimensions": [{"id": "26622972404", "name": "Subscriber Status", "apiName": "25836820028", "segmentId": null}], "projectJS": function(){window.userAttribute = window.PeeriusCallbacks.track.user.id;
window.userEmail = localStorage.userUid;
}, "plugins": [function(PluginManager) {
  var Hogan=function(t){function r(e){if(n[e])return n[e].exports;var i=n[e]={exports:{},id:e,loaded:!1};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}var n={};return r.m=t,r.c=n,r.p="",r(0)}([function(t,r){function n(t){this.r=t,this.buf=""}function e(t,r){var n;if(r&&"object"==typeof r)if(void 0!==r[t])n=r[t];return n}function i(t){return String(null===t||void 0===t?"":t)}function o(t){return t=i(t),p.test(t)?t.replace(u,"&amp;").replace(f,"&lt;").replace(c,"&gt;").replace(l,"&#39;").replace(a,"&quot;"):t}t.exports=n,n.prototype={r:function(t,r,n){return""},v:o,t:i,render:function(t,r,n){return this.ri([t],r||{},n)},ri:function(t,r,n){return this.r(t,r,n)},rs:function(t,r,n){var e=t[t.length-1];if(!s(e))return void n(t,r,this);for(var i=0;i<e.length;i++)t.push(e[i]),n(t,r,this),t.pop()},s:function(t,r,n,e,i,o,u){var f;if(s(t)&&0===t.length)return!1;if(f=!!t,!e&&f&&r)r.push("object"==typeof t?t:r[r.length-1]);return f},d:function(t,r,n,i){var o,u=t.split("."),f=this.f(u[0],r,n,i),c=null;if("."===t&&s(r[r.length-2]))f=r[r.length-1];else for(var l=1;l<u.length;l++)if(o=e(u[l],f),void 0!==o)c=f,f=o;else f="";if(i&&!f)return!1;if(!i&&"function"==typeof f)r.push(c),f=this.mv(f,r,n),r.pop();return f},f:function(t,r,n,i){for(var o=!1,u=null,f=!1,c=r.length-1;c>=0;c--)if(u=r[c],o=e(t,u),void 0!==o){f=!0;break}if(!f)return i?!1:"";if(!i&&"function"==typeof o)o=this.mv(o,r,n);return o},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},mv:function(t,r,n){var e=r[r.length-1],o=t.call(e);if("function"==typeof o)return this.ct(i(o.call(e)),e,n);else return o}};var u=/&/g,f=/</g,c=/>/g,l=/'/g,a=/"/g,p=/[&<>"']/,s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}]);
  
PluginManager.registerWidget({
      widgetId: '30229710036',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<cx-banner-carousel class=\"FADE-theme desktop-view\"><cx-carousel itemwidth=\"100%\" class=\"inline-navigation\">");t.b("\n" + i);t.b("  <div class=\"carousel-panel size-1\"><button class=\"previous\" aria-label=\"Previous slide\"");t.b("\n" + i);t.b("      title=\"Previous slide\"><cx-icon class=\"cx-icon caret-left flip-at-rtl\">");t.b("\n" + i);t.b("        <!-- <svg>");t.b("\n" + i);t.b("          <use xlink:href=\"./assets/icons/filled-icons-sprite.svg#caret-left\"></use>");t.b("\n" + i);t.b("        </svg> -->");t.b("\n" + i);t.b("        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-left\" viewBox=\"0 0 17 16\">");t.b("\n" + i);t.b("          <path fill-rule=\"evenodd\" d=\"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0\"/>");t.b("\n" + i);t.b("        </svg>");t.b("\n" + i);t.b("      </cx-icon></button>");t.b("\n" + i);t.b("    <div class=\"slides\">");t.b("\n" + i);t.b("      <div class=\"slide slide1 active\">");t.b("\n" + i);t.b("        <div class=\"item active\"><cx-banner class=\"custom-carousel-slide-container\">");t.b("\n" + i);t.b("            <div class=\"no-link\">");t.b("\n" + i);t.b("              <p class=\"headline\">");t.b(t.t(t.d("widget.headline_1",c,p,0)));t.b("</p><cx-media class=\"is-initialized\"><img loading=\"null\" alt=\"");t.b(t.v(t.d("widget.image_1_alt",c,p,0)));t.b("\" title=\"");t.b(t.v(t.d("widget.image_1_title",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("widget.image_1",c,p,0)));t.b("\"></cx-media>");t.b("\n" + i);t.b("              <p class=\"content\">");t.b(t.t(t.d("widget.copy_1",c,p,0)));t.b(" <a href=\"");t.b(t.v(t.d("widget.button_1_link",c,p,0)));t.b("\" class=\"btn btn-primary carousel-cta-1 ");t.b(t.v(t.d("widget.btn1NewTab",c,p,0)));t.b(" carousel-CTA\">");t.b(t.v(t.d("widget.button_1_text",c,p,0)));t.b("</a></p>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("          </cx-banner></div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"slide slide2\">");t.b("\n" + i);t.b("        <div class=\"item\"><cx-banner class=\"custom-carousel-slide-container\">");t.b("\n" + i);t.b("            <div class=\"no-link\">");t.b("\n" + i);t.b("              <p class=\"headline\">");t.b(t.t(t.d("widget.headline_2",c,p,0)));t.b("</p><cx-media class=\"is-initialized\"><img loading=\"null\" alt=\"");t.b(t.v(t.d("widget.image_2_alt",c,p,0)));t.b("\" title=\"");t.b(t.v(t.d("widget.image_2_title",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("widget.image_2",c,p,0)));t.b("\"></cx-media>");t.b("\n" + i);t.b("              <p class=\"content\">");t.b(t.t(t.d("widget.copy_2",c,p,0)));t.b(" <a href=\"");t.b(t.v(t.d("widget.button_2_link",c,p,0)));t.b("\" class=\"btn btn-primary carousel-cta-2 ");t.b(t.v(t.d("widget.btn2NewTab",c,p,0)));t.b(" carousel-CTA\">");t.b(t.v(t.d("widget.button_2_text",c,p,0)));t.b("</a></p>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("          </cx-banner></div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"slide slide3\">");t.b("\n" + i);t.b("        <div class=\"item\"><cx-banner class=\"custom-carousel-slide-container\">");t.b("\n" + i);t.b("            <div class=\"no-link\">");t.b("\n" + i);t.b("              <p class=\"headline\">");t.b(t.t(t.d("widget.headline_3",c,p,0)));t.b("</p><cx-media class=\"is-initialized\"><img loading=\"null\" alt=\"");t.b(t.v(t.d("widget.image_3_alt",c,p,0)));t.b("\" title=\"");t.b(t.v(t.d("widget.image_3_title",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("widget.image_3",c,p,0)));t.b("\"></cx-media>");t.b("\n" + i);t.b("              <p class=\"content\">");t.b(t.t(t.d("widget.copy_3",c,p,0)));t.b(" <a href=\"");t.b(t.v(t.d("widget.button_3_link",c,p,0)));t.b("\" class=\"btn btn-primary carousel-cta-3 ");t.b(t.v(t.d("widget.btn3NewTab",c,p,0)));t.b(" carousel-CTA\">");t.b(t.v(t.d("widget.button_3_text",c,p,0)));t.b("</a></p>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("          </cx-banner></div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div><button tabindex=\"-1\" class=\"next\" aria-label=\"Next slide\" title=\"Next slide\"><cx-icon");t.b("\n" + i);t.b("        class=\"cx-icon caret-right flip-at-rtl\">");t.b("\n" + i);t.b("        <!-- <svg>");t.b("\n" + i);t.b("          <use xlink:href=\"./assets/icons/filled-icons-sprite.svg#caret-right\"></use>");t.b("\n" + i);t.b("        </svg> -->");t.b("\n" + i);t.b("        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-right\" viewBox=\"0 0 15 16\">");t.b("\n" + i);t.b("          <path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708\"/>");t.b("\n" + i);t.b("        </svg>");t.b("\n" + i);t.b("      </cx-icon></button>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</cx-carousel></cx-banner-carousel>");t.b("\n");t.b("\n");t.b("\n");t.b("\n" + i);t.b("<cx-banner-carousel class=\"FADE-theme mobile-view\">");t.b("\n" + i);t.b("  <cx-carousel itemwidth=\"100%\" class=\"inline-navigation\">");t.b("\n" + i);t.b("    <div class=\"carousel-panel size-1\">");t.b("\n" + i);t.b("      <div class=\"slides\">");t.b("\n" + i);t.b("        <div class=\"slide active\">");t.b("\n" + i);t.b("          <div class=\"item active\"><cx-banner class=\"custom-carousel-slide-container\">");t.b("\n" + i);t.b("            <div class=\"no-link\">");t.b("\n" + i);t.b("              <cx-media class=\"is-initialized\">");t.b("\n" + i);t.b("                <img loading=\"null\" alt=\"");t.b(t.v(t.d("widget.image_1_alt",c,p,0)));t.b("\" title=\"");t.b(t.v(t.d("widget.image_1_title",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("widget.mobile_image_1",c,p,0)));t.b("\">");t.b("\n" + i);t.b("              </cx-media>");t.b("\n" + i);t.b("              </div>");t.b("\n" + i);t.b("              <div class=\"mobile-text-content\">");t.b("\n" + i);t.b("                <p class=\"headline\">");t.b(t.t(t.d("widget.headline_1",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("                <p class=\"content\">");t.b(t.t(t.d("widget.copy_1",c,p,0)));t.b(" <a href=\"");t.b(t.v(t.d("widget.button_1_link",c,p,0)));t.b("\" class=\"btn btn-primary mobile-carousel-cta-1 ");t.b(t.v(t.d("widget.btn1NewTab",c,p,0)));t.b(" carousel-CTA\">");t.b(t.v(t.d("widget.button_1_text",c,p,0)));t.b("</a></p>");t.b("\n" + i);t.b("              </div>");t.b("\n" + i);t.b("            </cx-banner></div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <div class=\"slide\">");t.b("\n" + i);t.b("          <div class=\"item\"><cx-banner class=\"custom-carousel-slide-container\">");t.b("\n" + i);t.b("              <div class=\"no-link\">");t.b("\n" + i);t.b("                <cx-media class=\"is-initialized\">");t.b("\n" + i);t.b("                  <img loading=\"null\" alt=\"");t.b(t.v(t.d("widget.image_2_alt",c,p,0)));t.b("\" title=\"");t.b(t.v(t.d("widget.image_2_title",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("widget.mobile_image_2",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                </cx-media>");t.b("\n" + i);t.b("              </div>");t.b("\n" + i);t.b("              <div class=\"mobile-text-content\">");t.b("\n" + i);t.b("                <p class=\"headline\">");t.b(t.t(t.d("widget.headline_2",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("                <p class=\"content\">");t.b(t.t(t.d("widget.copy_2",c,p,0)));t.b(" <a href=\"");t.b(t.v(t.d("widget.button_2_link",c,p,0)));t.b("\" class=\"btn btn-primary mobile-carousel-cta-2 ");t.b(t.v(t.d("widget.btn2NewTab",c,p,0)));t.b(" carousel-CTA\">");t.b(t.v(t.d("widget.button_2_text",c,p,0)));t.b("</a></p>");t.b("\n" + i);t.b("              </div>");t.b("\n" + i);t.b("            </cx-banner></div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <div class=\"slide\">");t.b("\n" + i);t.b("          <div class=\"item\"><cx-banner class=\"custom-carousel-slide-container\">");t.b("\n" + i);t.b("              <div class=\"no-link\">");t.b("\n" + i);t.b("                <cx-media class=\"is-initialized\"><img loading=\"null\" alt=\"");t.b(t.v(t.d("widget.image_3_alt",c,p,0)));t.b("\" title=\"");t.b(t.v(t.d("widget.image_3_title",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("widget.mobile_image_3",c,p,0)));t.b("\"></cx-media>");t.b("\n" + i);t.b("              </div>");t.b("\n" + i);t.b("              <div class=\"mobile-text-content\">");t.b("\n" + i);t.b("                <p class=\"headline\">");t.b(t.t(t.d("widget.headline_3",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("                <p class=\"content\">");t.b(t.t(t.d("widget.copy_3",c,p,0)));t.b(" <a href=\"");t.b(t.v(t.d("widget.button_3_link",c,p,0)));t.b("\" class=\"btn btn-primary mobile-carousel-cta-3 ");t.b(t.v(t.d("widget.btn3NewTab",c,p,0)));t.b(" carousel-CTA\">");t.b(t.v(t.d("widget.button_3_text",c,p,0)));t.b("</a></p>");t.b("\n" + i);t.b("              </div>");t.b("\n" + i);t.b("            </cx-banner></div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"indicators\">");t.b("\n" + i);t.b("      <button tabindex=\"-1\" disabled=\"\" aria-current=\"true\" aria-label=\"Slide 1\" title=\"Slide 1\"><cx-icon aria-hidden=\"true\" class=\"cx-icon ellipse\"><svg><use xlink:href=\"./assets/icons/filled-icons-sprite.svg#ellipse\"></use></svg></cx-icon></button>");t.b("\n" + i);t.b("      <button tabindex=\"-1\" aria-current=\"false\" aria-label=\"Slide 2\" title=\"Slide 2\"><cx-icon aria-hidden=\"true\" class=\"cx-icon ellipse\"><svg><use xlink:href=\"./assets/icons/filled-icons-sprite.svg#ellipse\"></use></svg></cx-icon></button>");t.b("\n" + i);t.b("      <button tabindex=\"-1\" aria-current=\"false\" aria-label=\"Slide 3\" title=\"Slide 3\"><cx-icon aria-hidden=\"true\" class=\"cx-icon ellipse\"><svg><use xlink:href=\"./assets/icons/filled-icons-sprite.svg#ellipse\"></use></svg></cx-icon></button>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </cx-carousel>");t.b("\n" + i);t.b("</cx-banner-carousel>");return t.fl(); })
        widget.$id = "30229710036";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"image_1","default_value":"//cdn.optimizely.com/img/8209600003/2a8d99086ad749d59c5ef4a57b487b0b.jpg"},{"name":"mobile_image_1","default_value":"//cdn.optimizely.com/img/8209600003/c09bb1a6e9af4047910b2f8767c02b8f.jpg"},{"name":"image_1_alt","default_value":""},{"name":"image_1_title","default_value":""},{"name":"headline_1","default_value":"Covetrus"},{"name":"copy_1","default_value":""},{"name":"button_1_text","default_value":"Shop Now"},{"name":"button_1_link","default_value":""},{"name":"image_2","default_value":"//cdn.optimizely.com/img/8209600003/acc8f61a8f154eb4a6be6cdc5fce5e2c.jpg"},{"name":"mobile_image_2","default_value":"//cdn.optimizely.com/img/8209600003/7e7b56c37e9d4069bdc3c834436c4c23.jpg"},{"name":"image_2_alt","default_value":""},{"name":"image_2_title","default_value":""},{"name":"headline_2","default_value":""},{"name":"copy_2","default_value":""},{"name":"button_2_text","default_value":"Shop Now"},{"name":"button_2_link","default_value":""},{"name":"image_3","default_value":"//cdn.optimizely.com/img/8209600003/1da7abdf9aaf4bd5a0d91432db9426a4.jpg"},{"name":"mobile_image_3","default_value":"//cdn.optimizely.com/img/8209600003/913b0656db9d4d08b0ee97e0ca7e0dfa.jpg"},{"name":"image_3_alt","default_value":""},{"name":"image_3_title","default_value":""},{"name":"headline_3","default_value":""},{"name":"copy_3","default_value":""},{"name":"button_3_text","default_value":"Shop Now"},{"name":"button_3_link","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-30229710036';
widget._styleTag.innerHTML = '.carousel-panel > button:focus {   box-shadow: none;}covetrus-quick-access {    z-index: 100;    }    /* headline styles for both desktop and mobile */    cx-banner.custom-carousel-slide-container .headline {    text-align: left;    color: var(--cx-color-primary);    font-family: Newzald;    line-height: 1.2222222222;    margin-bottom: .5rem;    font-size: calc(1.35rem + 1.2vw);    text-shadow: none;    margin-top: 15px;    }    /* desktop only */    .desktop-view cx-banner.custom-carousel-slide-container .headline {     /* max-width: calc(var(--cx-page-width-max) - 18%); */    /* max-width: 750px; */    max-width: 800px;    font-size: 2rem;    }    /* content styles for both desktop and mobile */    cx-banner.custom-carousel-slide-container .content {    text-align: left;    margin-bottom: 1.5rem;    font-family: Mulish, sans-serif;    color: #191919;    font-size: 1rem;    text-shadow: none;    line-height: 1.6;    margin-top: 0px;    }    /* desktop only */    .desktop-view cx-banner.custom-carousel-slide-container .content {    /* max-width: calc(var(--cx-page-width-max) / 2); */    max-width: 800px;    top: 75px;    }    /* desktop only */    .desktop-view cx-banner.custom-carousel-slide-container .headline, .desktop-view cx-banner.custom-carousel-slide-container .content {    margin-left: calc((100vw - 1086px) / 2);    padding-left: 0px !important;    }    cx-banner.custom-carousel-slide-container .content > a:not(.carousel-CTA) {        display: inline-block;        position: initial;        width: initial !important;        text-decoration: underline;    }    cx-banner.custom-carousel-slide-container .content > a.carousel-CTA {    margin-top: 24px;    width: fit-content;    padding: 0 30px;    height: auto !important;    position: initial !important;    }    cx-banner-carousel.FADE-theme > cx-carousel {    width: 100vw !important;    margin-left: calc(-50vw + 50%) !important;    margin-right: -50vw !important;    display: block;    }    cx-banner-carousel.FADE-theme > cx-carousel cx-banner p {    padding-top: 0;    }    cx-icon > svg.bi-chevron-left, cx-icon > svg.bi-chevron-right {    height: 40px;    width: 40px;    stroke: #1474e5;    stroke-width: 1.5px;    background-color: white;    border-radius: 50%;    padding: 10px;    border: solid 1px #1474e5;    }    .mobile-text-content > p {    margin-left: initial;    padding: 0 5vw !important;    text-align: center !important;    position: relative;    }    @media screen and (min-width: 1680px) {    cx-page-layout.LandingPage2Template cx-page-slot.CVTHeroBannerSlot cms-banner:first-of-type .cms.banner {      max-width: none !important;      /*margin-left: calc(-50vw + 50%) !important;*/        margin-right: -50vw !important;        background-color: transparent;    }    cx-banner-carousel.FADE-theme > cx-carousel {        width: 90vw !important;        max-width: 1600px !important;        min-width: var(--cx-page-width-max);        /*margin: 0 auto !important;*/      margin-bottom: 24px;    }    cx-banner.custom-carousel-slide-container .headline, cx-banner.custom-carousel-slide-container .content {       margin-left: calc(17% - 10px) !important;    }    }    @media screen and (min-width: 1400px) {    /* desktop only */    /* .desktop-view cx-banner.custom-carousel-slide-container .headline {             min-width: 825px;    } */    cx-banner.custom-carousel-slide-container .headline {      margin-top: 50px;    }    cx-banner.custom-carousel-slide-container .content {      margin-top: 30px;    }    /*.extended-content {      margin-top: 75px !important;    }*/    }    @media screen and (min-width: 1200px) and (max-width: 1399px) {    cx-banner.custom-carousel-slide-container .headline {      font-size: 1.5rem;      padding-left: 5vw !important;    }    cx-banner.custom-carousel-slide-container .content {      padding-left: 5vw !important;      margin-top: -10px !important;    }    /* cx-banner.custom-carousel-slide-container .content.extended-content {      margin-top: 35px !important;    } */    }    /* Hide mobile view */    @media screen and (min-width: 1200px) {    /* default mobile view in myCovetrus, do not display */    .FADE-theme.mobile-view {    display: none;    }    cx-banner-carousel .inline-navigation .indicators {    display: none;    }    }    /* Quick Access tablet/mobile view, hide desktop view */    @media screen and (max-width: 1199px) {    .FADE-theme.desktop-view {      display: none;    }    covetrus-quick-access > .qa-container.flex-md-row {      margin: 2.5rem 0;      flex-direction: column !important;    }    covetrus-quick-access > .qa-container > .qa-card {      margin: 0;      margin-bottom: 1.5rem;    }    .cms.banner {      background-color: transparent;      display: contents;      overflow: inherit;    }    .mobile-text-content > p > a {      width: 50% !important;      margin: 1.5rem auto;    }    cx-banner-carousel .inline-navigation .indicators {      margin-top: 0;    }    cx-carousel .indicators button .cx-icon {      padding: 2px;      border: 2px solid var(--cx-color-primary);    }    cx-carousel .indicators button .cx-icon > svg {      height: 1rem;      width: 1rem;    }    }    @media screen and (max-width: 768px) {    .cms.banner {      display: block !important;    }    .banner-mobile {      display: none !important;    }   }';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var utils = window.optimizely.get("utils");
let currentUrl = window.location.href;
const range = document.createRange();
var html = widget.$html;
const fragment = range.createContextualFragment(html);

function startInterval() {
    let intervalID = setInterval(function() {
      if (window.location.href !== currentUrl) {
        /* console.log('URL changed (polling):', window.location.href);
        console.log('CurrentURL: ' + currentUrl); */

        currentUrl = window.location.href;
    
        // user navigated back to home
        if (currentUrl === "https://www.mycovetrus.com/CVT-NA/en/USD/homepage-3.0-staged") {
    
            // start the carousel again
            console.log('URL BACK TO HOMEPAGE');
            test();
            /* console.log('URL BACK: ' + window.location.href);
            clearInterval(intervalID);
            startInterval(); */
        }
        else {

            console.log('URL changed to: ' + currentUrl);
            clearInterval(intervalID);
            startInterval();
        }
      }
    }, 100); // Check every 100 milliseconds
}


/* utils.waitForElement('.CVTHeroBannerSlot').then(function(element) {
  /* var html = widget.$html;
  console.log(html);

  const banner = element.querySelector('cms-banner cms-content-canvas'); */

utils.waitForElement('cms-banner cms-content-canvas').then(function(element) {
  /* var html = widget.$html;
  console.log(html); */

  if(window.location.href === "https://www.mycovetrus.com/CVT-NA/en/USD/homepage-3.0-staged" || window.location.href.includes('https://www.mycovetrus.com/CVT-NA/en/USD/homepage-3.0-staged?')) {

    const banner = document.querySelector('cms-banner cms-content-canvas');
    let carouselSlides;
    let carouselIndex = [0, 1, 2]; // array keeping track of index of slides position
    let rotationDirectionForward = true; // direction for slides to rotate
  
    console.log(banner);
    
    // remove default banner element and replace with custom HTML banner
    while (banner.firstChild) {
      banner.removeChild(banner.firstChild);
    }
    banner.insertAdjacentHTML('afterbegin', html);
    
    console.log(banner);
    
    console.log('carousel loaded');
    startInterval();
    
    /*try {
      const CTA_2_test1 = document.querySelector('.mobile-carousel-cta-2');
      const CTA_2_test2 = widget.button_2_link;
      console.log(CTA_2_test1.href, CTA_2_test2);
    } catch (error) {
      console.log("wrong syntax");
    }*/
  
    // initial timer start
    let timePause = 5000;
    let theTimer = setInterval(rotateSlides, timePause);
  
  
    
    
    const carouselCTAS = document.querySelectorAll('.carousel-CTA');
    const currentUrl = window.location.hostname;
    console.log(carouselCTAS);
    let CTACOUNT = carouselCTAS.length/2;
    // console.log(CTACOUNT);
    carouselCTAS.forEach((link, index) => {
  
        if (CTACOUNT > 0) {

          console.log(link.href,CTACOUNT, index);
          console.log(link.href);
          link.href=carouselCTAS[index+CTACOUNT];
          CTACOUNT--;
        }
        // console.log(currentUrl, link.hostname);
        // console.log(currentUrl === link.hostname);
  
        if (currentUrl !== link.hostname) {
  
            console.log('external link detected')
            link.setAttribute('target', '_blank'); // Set the target attribute to "_blank"
        }
    });
  
    /* const allLinks = document.querySelectorAll('.btn.external');
    allLinks.forEach(link => {
      link.setAttribute('target', '_blank'); // Set the target attribute to "_blank"
    }); */
  
    // indicator buttons visible on tablet/mobile viewports, accessible after Optimizely loads custom HTML
    const slideIndicators = element.querySelectorAll('.mobile-view .indicators > button');
    slideIndicators.forEach((element, index) => {
      
      element.addEventListener('click', function() {
  
        clearInterval(theTimer);
        rotateSlides(index);
        theTimer = setInterval(rotateSlides, timePause);
        // console.log('element ' + index + ' was clicked');
      });
    });
  
  
    // on desktop viewport, event listeners for rotation backward/forward on button clicks
    document.querySelector('button.previous').addEventListener('click', function(e) {
  
      rotateBackward();
    });
  
    document.querySelector('button.next').addEventListener('click', function(e) {
  
      rotateForward();
    });
  
  
    // detect swipe direction
    const carouselSwipeArea = element.querySelector('.mobile-view > cx-carousel > .carousel-panel');
    let touchStartX = 0;
    let touchEndX = 0;
  
    // on tablet/mobile viewport, event listeners for rotation backward/forward on swipe direction
    carouselSwipeArea.addEventListener('touchstart', function(e) {
  
      touchStartX = e.touches[0].clientX;
    });
  
    carouselSwipeArea.addEventListener('touchend', function(e) {
  
      touchEndX = e.changedTouches[0].clientX;
      const distanceX = touchEndX - touchStartX;
  
      if (Math.abs(distanceX) > 50) { // Adjust the threshold as needed
  
        if (distanceX > 0) {
          
          rotateBackward();
          // console.log('Swiped right');
        } else {
          
          rotateForward();
          // console.log('Swiped left');
        }
      }
    });
  
  
    // detect what viewport is loaded on user's device, and adjust which version of the rotating banner will be modified by the slide rotation action
    let viewport = window.matchMedia("(min-width: 1200px)")
  
    if (viewport.matches) {
  
      carouselSlides = document.querySelectorAll('.desktop-view cx-carousel .slides > .slide');
    } else {
  
      carouselSlides = document.querySelectorAll('.mobile-view cx-carousel .slides > .slide');
    }
  
  
    // rotate slides one position in reverse
    function rotateBackward() {
  
      rotationDirectionForward = false;
      clearInterval(theTimer);
      rotateSlides();
      theTimer = setInterval(rotateSlides, timePause);
    }
  
    // rotate slides one position forward
    function rotateForward() {
  
      clearInterval(theTimer);
      rotateSlides();
      theTimer = setInterval(rotateSlides, timePause);
    }
  
    
    // swap classes to initiate slide rotation behavior, based on boolean of whether the slide should be going forward or backward
    function rotateSlides(currentSlideIndex = null) {
  
      // if auto-rotation OR if clicking an indicator that is not at the current index (clicking the indicator that is already active), then run the rotation function
      if (currentSlideIndex == null || currentSlideIndex != carouselIndex[0]) {
  
        clearInterval()
        carouselSlides[carouselIndex[0]].classList.remove('active');
        carouselSlides[carouselIndex[0]].childNodes[1].classList.remove('active');
        slideIndicators[carouselIndex[0]].ariaCurrent = 'false';
        slideIndicators[carouselIndex[0]].disabled = false;
  
        if (currentSlideIndex == null) {
  
          if (rotationDirectionForward) {
    
            carouselIndex.push(carouselIndex.shift());
          }
          else {
    
            carouselIndex.unshift(carouselIndex.pop());
          }
        }
        else {
  
          while (carouselIndex[0] != currentSlideIndex) {
  
            carouselIndex.push(carouselIndex.shift());
          }
        }
  
        carouselSlides[carouselIndex[0]].classList.add('active');
        carouselSlides[carouselIndex[0]].childNodes[1].classList.add('active');
        slideIndicators[carouselIndex[0]].ariaCurrent = 'true';
        slideIndicators[carouselIndex[0]].disabled = true;
  
        rotationDirectionForward = true;
      }
    }
  }

});


function test() {

  // on homepage or on homepage with parameters
  if(window.location.href === "https://www.mycovetrus.com/CVT-NA/en/USD/homepage-3.0-staged" || window.location.href.includes('https://www.mycovetrus.com/CVT-NA/en/USD/homepage-3.0-staged?')) {

    console.log(document.querySelector('.CVTHeroBannerSlot'));
    console.log('TESTING 9/17');
  
    waitForBannerElement('cms-banner cms-content-canvas').then((element) => {
          
      console.log('banner found!');
      const banner = document.querySelector('cms-banner cms-content-canvas');
      
      let carouselSlides;
      let carouselIndex = [0, 1, 2]; // array keeping track of index of slides position
      let rotationDirectionForward = true; // direction for slides to rotate
    
      console.log('carousel loaded');
      startInterval();
    
      // initial timer start
      let timePause = 5000;
      let theTimer = setInterval(rotateSlides, timePause);
    
    
      // remove default banner element and replace with custom HTML banner
      while (banner.firstChild) {
        banner.removeChild(banner.firstChild);
      }
      banner.appendChild(fragment);
      // banner.insertAdjacentHTML('afterbegin', html);
      
      const carouselCTAS = document.querySelectorAll('.carousel-CTA');
      const currentUrl = window.location.hostname;
      carouselCTAS.forEach(link => {
    
          // console.log(currentUrl, link.hostname);
          // console.log(currentUrl === link.hostname);
    
          if (currentUrl !== link.hostname) {
    
              console.log('external link detected')
              link.setAttribute('target', '_blank'); // Set the target attribute to "_blank"
          }
      });
    
      /* const allLinks = document.querySelectorAll('.btn.external');
      allLinks.forEach(link => {
        link.setAttribute('target', '_blank'); // Set the target attribute to "_blank"
      }); */
    
      // indicator buttons visible on tablet/mobile viewports, accessible after Optimizely loads custom HTML
      const slideIndicators = element.querySelectorAll('.mobile-view .indicators > button');
      slideIndicators.forEach((element, index) => {
        
        element.addEventListener('click', function() {
    
          clearInterval(theTimer);
          rotateSlides(index);
          theTimer = setInterval(rotateSlides, timePause);
          // console.log('element ' + index + ' was clicked');
        });
      });
    
    
      // on desktop viewport, event listeners for rotation backward/forward on button clicks
      document.querySelector('button.previous').addEventListener('click', function(e) {
    
        rotateBackward();
      });
    
      document.querySelector('button.next').addEventListener('click', function(e) {
    
        rotateForward();
      });
    
    
      // detect swipe direction
      const carouselSwipeArea = element.querySelector('.mobile-view > cx-carousel > .carousel-panel');
      let touchStartX = 0;
      let touchEndX = 0;
    
      // on tablet/mobile viewport, event listeners for rotation backward/forward on swipe direction
      carouselSwipeArea.addEventListener('touchstart', function(e) {
    
        touchStartX = e.touches[0].clientX;
      });
    
      carouselSwipeArea.addEventListener('touchend', function(e) {
    
        touchEndX = e.changedTouches[0].clientX;
        const distanceX = touchEndX - touchStartX;
    
        if (Math.abs(distanceX) > 50) { // Adjust the threshold as needed
    
          if (distanceX > 0) {
            
            rotateBackward();
            // console.log('Swiped right');
          } else {
            
            rotateForward();
            // console.log('Swiped left');
          }
        }
      });
    
    
      // detect what viewport is loaded on user's device, and adjust which version of the rotating banner will be modified by the slide rotation action
      let viewport = window.matchMedia("(min-width: 1200px)")
    
      if (viewport.matches) {
    
        carouselSlides = document.querySelectorAll('.desktop-view cx-carousel .slides > .slide');
      } else {
    
        carouselSlides = document.querySelectorAll('.mobile-view cx-carousel .slides > .slide');
      }
    
    
      // rotate slides one position in reverse
      function rotateBackward() {
    
        rotationDirectionForward = false;
        clearInterval(theTimer);
        rotateSlides();
        theTimer = setInterval(rotateSlides, timePause);
      }
    
      // rotate slides one position forward
      function rotateForward() {
    
        clearInterval(theTimer);
        rotateSlides();
        theTimer = setInterval(rotateSlides, timePause);
      }
    
      
      // swap classes to initiate slide rotation behavior, based on boolean of whether the slide should be going forward or backward
      function rotateSlides(currentSlideIndex = null) {
    
        // if auto-rotation OR if clicking an indicator that is not at the current index (clicking the indicator that is already active), then run the rotation function
        if (currentSlideIndex == null || currentSlideIndex != carouselIndex[0]) {
    
          clearInterval()
          carouselSlides[carouselIndex[0]].classList.remove('active');
          carouselSlides[carouselIndex[0]].childNodes[1].classList.remove('active');
          slideIndicators[carouselIndex[0]].ariaCurrent = 'false';
          slideIndicators[carouselIndex[0]].disabled = false;
    
          if (currentSlideIndex == null) {
    
            if (rotationDirectionForward) {
      
              carouselIndex.push(carouselIndex.shift());
            }
            else {
      
              carouselIndex.unshift(carouselIndex.pop());
            }
          }
          else {
    
            while (carouselIndex[0] != currentSlideIndex) {
    
              carouselIndex.push(carouselIndex.shift());
            }
          }
    
          carouselSlides[carouselIndex[0]].classList.add('active');
          carouselSlides[carouselIndex[0]].childNodes[1].classList.add('active');
          slideIndicators[carouselIndex[0]].ariaCurrent = 'true';
          slideIndicators[carouselIndex[0]].disabled = true;
    
          rotationDirectionForward = true;
        }
      }
    
      startInterval();
    });
  }

}

function waitForBannerElement(selector) {
    return new Promise((resolve) => {
        const observer = new MutationObserver((mutations, observer) => {
            const element = document.querySelector(selector);
            if (element) {
                observer.disconnect();
                resolve(element);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "30229710036";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"image_1","default_value":"//cdn.optimizely.com/img/8209600003/2a8d99086ad749d59c5ef4a57b487b0b.jpg"},{"name":"mobile_image_1","default_value":"//cdn.optimizely.com/img/8209600003/c09bb1a6e9af4047910b2f8767c02b8f.jpg"},{"name":"image_1_alt","default_value":""},{"name":"image_1_title","default_value":""},{"name":"headline_1","default_value":"Covetrus"},{"name":"copy_1","default_value":""},{"name":"button_1_text","default_value":"Shop Now"},{"name":"button_1_link","default_value":""},{"name":"image_2","default_value":"//cdn.optimizely.com/img/8209600003/acc8f61a8f154eb4a6be6cdc5fce5e2c.jpg"},{"name":"mobile_image_2","default_value":"//cdn.optimizely.com/img/8209600003/7e7b56c37e9d4069bdc3c834436c4c23.jpg"},{"name":"image_2_alt","default_value":""},{"name":"image_2_title","default_value":""},{"name":"headline_2","default_value":""},{"name":"copy_2","default_value":""},{"name":"button_2_text","default_value":"Shop Now"},{"name":"button_2_link","default_value":""},{"name":"image_3","default_value":"//cdn.optimizely.com/img/8209600003/1da7abdf9aaf4bd5a0d91432db9426a4.jpg"},{"name":"mobile_image_3","default_value":"//cdn.optimizely.com/img/8209600003/913b0656db9d4d08b0ee97e0ca7e0dfa.jpg"},{"name":"image_3_alt","default_value":""},{"name":"image_3_title","default_value":""},{"name":"headline_3","default_value":""},{"name":"copy_3","default_value":""},{"name":"button_3_text","default_value":"Shop Now"},{"name":"button_3_link","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-30229710036');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        
      },
    });

PluginManager.registerWidget({
      widgetId: '30318900008',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<cx-banner-carousel class=\"FADE-theme desktop-view\"><cx-carousel itemwidth=\"100%\" class=\"inline-navigation\">");t.b("\n" + i);t.b("  <div class=\"carousel-panel size-1\"><button class=\"previous\" aria-label=\"Previous slide\"");t.b("\n" + i);t.b("      title=\"Previous slide\"><cx-icon class=\"cx-icon caret-left flip-at-rtl\">");t.b("\n" + i);t.b("        <!-- <svg>");t.b("\n" + i);t.b("          <use xlink:href=\"./assets/icons/filled-icons-sprite.svg#caret-left\"></use>");t.b("\n" + i);t.b("        </svg> -->");t.b("\n" + i);t.b("        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-left\" viewBox=\"0 0 17 16\">");t.b("\n" + i);t.b("          <path fill-rule=\"evenodd\" d=\"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0\"/>");t.b("\n" + i);t.b("        </svg>");t.b("\n" + i);t.b("      </cx-icon></button>");t.b("\n" + i);t.b("    <div class=\"slides\">");t.b("\n" + i);t.b("      <div class=\"slide slide1 active\">");t.b("\n" + i);t.b("        <div class=\"item active\"><cx-banner class=\"custom-carousel-slide-container\">");t.b("\n" + i);t.b("            <div class=\"no-link\">");t.b("\n" + i);t.b("              <p class=\"headline\">");t.b(t.t(t.d("widget.headline_1",c,p,0)));t.b("</p><cx-media class=\"is-initialized\"><img loading=\"null\" alt=\"");t.b(t.v(t.d("widget.image_1_alt",c,p,0)));t.b("\" title=\"");t.b(t.v(t.d("widget.image_1_title",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("widget.image_1",c,p,0)));t.b("\"></cx-media>");t.b("\n" + i);t.b("              <p class=\"content\">");t.b(t.t(t.d("widget.copy_1",c,p,0)));t.b(" <a href=\"");t.b(t.v(t.d("widget.button_1_link",c,p,0)));t.b("\" class=\"btn btn-primary carousel-cta-1 ");t.b(t.v(t.d("widget.btn1NewTab",c,p,0)));t.b(" carousel-CTA\">");t.b(t.v(t.d("widget.button_1_text",c,p,0)));t.b("</a></p>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("          </cx-banner></div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"slide slide2\">");t.b("\n" + i);t.b("        <div class=\"item\"><cx-banner class=\"custom-carousel-slide-container\">");t.b("\n" + i);t.b("            <div class=\"no-link\">");t.b("\n" + i);t.b("              <p class=\"headline\">");t.b(t.t(t.d("widget.headline_2",c,p,0)));t.b("</p><cx-media class=\"is-initialized\"><img loading=\"null\" alt=\"");t.b(t.v(t.d("widget.image_2_alt",c,p,0)));t.b("\" title=\"");t.b(t.v(t.d("widget.image_2_title",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("widget.image_2",c,p,0)));t.b("\"></cx-media>");t.b("\n" + i);t.b("              <p class=\"content\">");t.b(t.t(t.d("widget.copy_2",c,p,0)));t.b(" <a href=\"");t.b(t.v(t.d("widget.button_2_link",c,p,0)));t.b("\" class=\"btn btn-primary carousel-cta-2 ");t.b(t.v(t.d("widget.btn2NewTab",c,p,0)));t.b(" carousel-CTA\">");t.b(t.v(t.d("widget.button_2_text",c,p,0)));t.b("</a></p>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("          </cx-banner></div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"slide slide3\">");t.b("\n" + i);t.b("        <div class=\"item\"><cx-banner class=\"custom-carousel-slide-container\">");t.b("\n" + i);t.b("            <div class=\"no-link\">");t.b("\n" + i);t.b("              <p class=\"headline\">");t.b(t.t(t.d("widget.headline_3",c,p,0)));t.b("</p><cx-media class=\"is-initialized\"><img loading=\"null\" alt=\"");t.b(t.v(t.d("widget.image_3_alt",c,p,0)));t.b("\" title=\"");t.b(t.v(t.d("widget.image_3_title",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("widget.image_3",c,p,0)));t.b("\"></cx-media>");t.b("\n" + i);t.b("              <p class=\"content\">");t.b(t.t(t.d("widget.copy_3",c,p,0)));t.b(" <a href=\"");t.b(t.v(t.d("widget.button_3_link",c,p,0)));t.b("\" class=\"btn btn-primary carousel-cta-3 ");t.b(t.v(t.d("widget.btn3NewTab",c,p,0)));t.b(" carousel-CTA\">");t.b(t.v(t.d("widget.button_3_text",c,p,0)));t.b("</a></p>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("          </cx-banner></div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div><button tabindex=\"-1\" class=\"next\" aria-label=\"Next slide\" title=\"Next slide\"><cx-icon");t.b("\n" + i);t.b("        class=\"cx-icon caret-right flip-at-rtl\">");t.b("\n" + i);t.b("        <!-- <svg>");t.b("\n" + i);t.b("          <use xlink:href=\"./assets/icons/filled-icons-sprite.svg#caret-right\"></use>");t.b("\n" + i);t.b("        </svg> -->");t.b("\n" + i);t.b("        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-right\" viewBox=\"0 0 15 16\">");t.b("\n" + i);t.b("          <path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708\"/>");t.b("\n" + i);t.b("        </svg>");t.b("\n" + i);t.b("      </cx-icon></button>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</cx-carousel></cx-banner-carousel>");t.b("\n");t.b("\n");t.b("\n");t.b("\n" + i);t.b("<cx-banner-carousel class=\"FADE-theme mobile-view\">");t.b("\n" + i);t.b("  <cx-carousel itemwidth=\"100%\" class=\"inline-navigation\">");t.b("\n" + i);t.b("    <div class=\"carousel-panel size-1\">");t.b("\n" + i);t.b("      <div class=\"slides\">");t.b("\n" + i);t.b("        <div class=\"slide active\">");t.b("\n" + i);t.b("          <div class=\"item active\"><cx-banner class=\"custom-carousel-slide-container\">");t.b("\n" + i);t.b("            <div class=\"no-link\">");t.b("\n" + i);t.b("              <cx-media class=\"is-initialized\">");t.b("\n" + i);t.b("                <img loading=\"null\" alt=\"");t.b(t.v(t.d("widget.image_1_alt",c,p,0)));t.b("\" title=\"");t.b(t.v(t.d("widget.image_1_title",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("widget.mobile_image_1",c,p,0)));t.b("\">");t.b("\n" + i);t.b("              </cx-media>");t.b("\n" + i);t.b("              </div>");t.b("\n" + i);t.b("              <div class=\"mobile-text-content\">");t.b("\n" + i);t.b("                <p class=\"headline\">");t.b(t.t(t.d("widget.headline_1",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("                <p class=\"content\">");t.b(t.t(t.d("widget.copy_1",c,p,0)));t.b(" <a href=\"");t.b(t.v(t.d("widget.button_1_link",c,p,0)));t.b("\" class=\"btn btn-primary mobile-carousel-cta-1 ");t.b(t.v(t.d("widget.btn1NewTab",c,p,0)));t.b(" carousel-CTA\">");t.b(t.v(t.d("widget.button_1_text",c,p,0)));t.b("</a></p>");t.b("\n" + i);t.b("              </div>");t.b("\n" + i);t.b("            </cx-banner></div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <div class=\"slide\">");t.b("\n" + i);t.b("          <div class=\"item\"><cx-banner class=\"custom-carousel-slide-container\">");t.b("\n" + i);t.b("              <div class=\"no-link\">");t.b("\n" + i);t.b("                <cx-media class=\"is-initialized\">");t.b("\n" + i);t.b("                  <img loading=\"null\" alt=\"");t.b(t.v(t.d("widget.image_2_alt",c,p,0)));t.b("\" title=\"");t.b(t.v(t.d("widget.image_2_title",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("widget.mobile_image_2",c,p,0)));t.b("\">");t.b("\n" + i);t.b("                </cx-media>");t.b("\n" + i);t.b("              </div>");t.b("\n" + i);t.b("              <div class=\"mobile-text-content\">");t.b("\n" + i);t.b("                <p class=\"headline\">");t.b(t.t(t.d("widget.headline_2",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("                <p class=\"content\">");t.b(t.t(t.d("widget.copy_2",c,p,0)));t.b(" <a href=\"");t.b(t.v(t.d("widget.button_2_link",c,p,0)));t.b("\" class=\"btn btn-primary mobile-carousel-cta-2 ");t.b(t.v(t.d("widget.btn2NewTab",c,p,0)));t.b(" carousel-CTA\">");t.b(t.v(t.d("widget.button_2_text",c,p,0)));t.b("</a></p>");t.b("\n" + i);t.b("              </div>");t.b("\n" + i);t.b("            </cx-banner></div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <div class=\"slide\">");t.b("\n" + i);t.b("          <div class=\"item\"><cx-banner class=\"custom-carousel-slide-container\">");t.b("\n" + i);t.b("              <div class=\"no-link\">");t.b("\n" + i);t.b("                <cx-media class=\"is-initialized\"><img loading=\"null\" alt=\"");t.b(t.v(t.d("widget.image_3_alt",c,p,0)));t.b("\" title=\"");t.b(t.v(t.d("widget.image_3_title",c,p,0)));t.b("\" src=\"");t.b(t.v(t.d("widget.mobile_image_3",c,p,0)));t.b("\"></cx-media>");t.b("\n" + i);t.b("              </div>");t.b("\n" + i);t.b("              <div class=\"mobile-text-content\">");t.b("\n" + i);t.b("                <p class=\"headline\">");t.b(t.t(t.d("widget.headline_3",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("                <p class=\"content\">");t.b(t.t(t.d("widget.copy_3",c,p,0)));t.b(" <a href=\"");t.b(t.v(t.d("widget.button_3_link",c,p,0)));t.b("\" class=\"btn btn-primary mobile-carousel-cta-3 ");t.b(t.v(t.d("widget.btn3NewTab",c,p,0)));t.b(" carousel-CTA\">");t.b(t.v(t.d("widget.button_3_text",c,p,0)));t.b("</a></p>");t.b("\n" + i);t.b("              </div>");t.b("\n" + i);t.b("            </cx-banner></div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"indicators\">");t.b("\n" + i);t.b("      <button tabindex=\"-1\" disabled=\"\" aria-current=\"true\" aria-label=\"Slide 1\" title=\"Slide 1\"><cx-icon aria-hidden=\"true\" class=\"cx-icon ellipse\"><svg><use xlink:href=\"./assets/icons/filled-icons-sprite.svg#ellipse\"></use></svg></cx-icon></button>");t.b("\n" + i);t.b("      <button tabindex=\"-1\" aria-current=\"false\" aria-label=\"Slide 2\" title=\"Slide 2\"><cx-icon aria-hidden=\"true\" class=\"cx-icon ellipse\"><svg><use xlink:href=\"./assets/icons/filled-icons-sprite.svg#ellipse\"></use></svg></cx-icon></button>");t.b("\n" + i);t.b("      <button tabindex=\"-1\" aria-current=\"false\" aria-label=\"Slide 3\" title=\"Slide 3\"><cx-icon aria-hidden=\"true\" class=\"cx-icon ellipse\"><svg><use xlink:href=\"./assets/icons/filled-icons-sprite.svg#ellipse\"></use></svg></cx-icon></button>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </cx-carousel>");t.b("\n" + i);t.b("</cx-banner-carousel>");return t.fl(); })
        widget.$id = "30318900008";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"image_1","default_value":"//cdn.optimizely.com/img/8209600003/2a8d99086ad749d59c5ef4a57b487b0b.jpg"},{"name":"mobile_image_1","default_value":"//cdn.optimizely.com/img/8209600003/c09bb1a6e9af4047910b2f8767c02b8f.jpg"},{"name":"image_1_alt","default_value":""},{"name":"image_1_title","default_value":""},{"name":"headline_1","default_value":"Covetrus"},{"name":"copy_1","default_value":""},{"name":"button_1_text","default_value":"Shop Now"},{"name":"button_1_link","default_value":""},{"name":"image_2","default_value":"//cdn.optimizely.com/img/8209600003/acc8f61a8f154eb4a6be6cdc5fce5e2c.jpg"},{"name":"mobile_image_2","default_value":"//cdn.optimizely.com/img/8209600003/7e7b56c37e9d4069bdc3c834436c4c23.jpg"},{"name":"image_2_alt","default_value":""},{"name":"image_2_title","default_value":""},{"name":"headline_2","default_value":""},{"name":"copy_2","default_value":""},{"name":"button_2_text","default_value":"Shop Now"},{"name":"button_2_link","default_value":""},{"name":"image_3","default_value":"//cdn.optimizely.com/img/8209600003/1da7abdf9aaf4bd5a0d91432db9426a4.jpg"},{"name":"mobile_image_3","default_value":"//cdn.optimizely.com/img/8209600003/913b0656db9d4d08b0ee97e0ca7e0dfa.jpg"},{"name":"image_3_alt","default_value":""},{"name":"image_3_title","default_value":""},{"name":"headline_3","default_value":""},{"name":"copy_3","default_value":""},{"name":"button_3_text","default_value":"Shop Now"},{"name":"button_3_link","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-30318900008';
widget._styleTag.innerHTML = '.carousel-panel > button:focus {   box-shadow: none;}covetrus-quick-access {    z-index: 100;    }    /* headline styles for both desktop and mobile */    cx-banner.custom-carousel-slide-container .headline {    text-align: left;    color: var(--cx-color-primary);    font-family: Newzald;    line-height: 1.2222222222;    margin-bottom: .5rem;    font-size: calc(1.35rem + 1.2vw);    text-shadow: none;    margin-top: 15px;    }    /* desktop only */    .desktop-view cx-banner.custom-carousel-slide-container .headline {     /* max-width: calc(var(--cx-page-width-max) - 18%); */    /* max-width: 750px; */    max-width: 800px;    font-size: 2rem;    }    /* content styles for both desktop and mobile */    cx-banner.custom-carousel-slide-container .content {    text-align: left;    margin-bottom: 1.5rem;    font-family: Mulish, sans-serif;    color: #191919;    font-size: 1rem;    text-shadow: none;    line-height: 1.6;    margin-top: 0px;    }    /* desktop only */    .desktop-view cx-banner.custom-carousel-slide-container .content {    /* max-width: calc(var(--cx-page-width-max) / 2); */    max-width: 800px;    top: 75px;    }    /* desktop only */    .desktop-view cx-banner.custom-carousel-slide-container .headline, .desktop-view cx-banner.custom-carousel-slide-container .content {    margin-left: calc((100vw - 1086px) / 2);    padding-left: 0px !important;    }    cx-banner.custom-carousel-slide-container .content > a:not(.carousel-CTA) {        display: inline-block;        position: initial;        width: initial !important;        text-decoration: underline;    }    cx-banner.custom-carousel-slide-container .content > a.carousel-CTA {    margin-top: 24px;    width: fit-content;    padding: 0 30px;    height: auto !important;    position: initial !important;    }    cx-banner-carousel.FADE-theme > cx-carousel {    width: 100vw !important;    margin-left: calc(-50vw + 50%) !important;    margin-right: -50vw !important;    display: block;    }    cx-banner-carousel.FADE-theme > cx-carousel cx-banner p {    padding-top: 0;    }    cx-icon > svg.bi-chevron-left, cx-icon > svg.bi-chevron-right {    height: 40px;    width: 40px;    stroke: #1474e5;    stroke-width: 1.5px;    background-color: white;    border-radius: 50%;    padding: 10px;    border: solid 1px #1474e5;    }    .mobile-text-content > p {    margin-left: initial;    padding: 0 5vw !important;    text-align: center !important;    position: relative;    }    @media screen and (min-width: 1680px) {    cx-page-layout.LandingPage2Template cx-page-slot.CVTHeroBannerSlot cms-banner:first-of-type .cms.banner {      max-width: none !important;      /*margin-left: calc(-50vw + 50%) !important;*/        margin-right: -50vw !important;        background-color: transparent;    }    cx-banner-carousel.FADE-theme > cx-carousel {        width: 90vw !important;        max-width: 1600px !important;        min-width: var(--cx-page-width-max);        /*margin: 0 auto !important;*/      margin-bottom: 24px;    }    cx-banner.custom-carousel-slide-container .headline, cx-banner.custom-carousel-slide-container .content {       margin-left: calc(17% - 10px) !important;    }    }    @media screen and (min-width: 1400px) {    /* desktop only */    /* .desktop-view cx-banner.custom-carousel-slide-container .headline {             min-width: 825px;    } */    cx-banner.custom-carousel-slide-container .headline {      margin-top: 50px;    }    cx-banner.custom-carousel-slide-container .content {      margin-top: 30px;    }    /*.extended-content {      margin-top: 75px !important;    }*/    }    @media screen and (min-width: 1200px) and (max-width: 1399px) {    cx-banner.custom-carousel-slide-container .headline {      font-size: 1.5rem;      padding-left: 5vw !important;    }    cx-banner.custom-carousel-slide-container .content {      padding-left: 5vw !important;      margin-top: -10px !important;    }    /* cx-banner.custom-carousel-slide-container .content.extended-content {      margin-top: 35px !important;    } */    }    /* Hide mobile view */    @media screen and (min-width: 1200px) {    /* default mobile view in myCovetrus, do not display */    .FADE-theme.mobile-view {    display: none;    }    cx-banner-carousel .inline-navigation .indicators {    display: none;    }    }    /* Quick Access tablet/mobile view, hide desktop view */    @media screen and (max-width: 1199px) {    .FADE-theme.desktop-view {      display: none;    }    covetrus-quick-access > .qa-container.flex-md-row {      margin: 2.5rem 0;      flex-direction: column !important;    }    covetrus-quick-access > .qa-container > .qa-card {      margin: 0;      margin-bottom: 1.5rem;    }    .cms.banner {      background-color: transparent;      display: contents;      overflow: inherit;    }    .mobile-text-content > p > a {      width: 50% !important;      margin: 1.5rem auto;    }    cx-banner-carousel .inline-navigation .indicators {      margin-top: 0;    }    cx-carousel .indicators button .cx-icon {      padding: 2px;      border: 2px solid var(--cx-color-primary);    }    cx-carousel .indicators button .cx-icon > svg {      height: 1rem;      width: 1rem;    }    }    @media screen and (max-width: 768px) {    .cms.banner {      display: block !important;    }    .banner-mobile {      display: none !important;    }   }';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var utils = window.optimizely.get("utils");
let currentUrl = window.location.href;
const range = document.createRange();
var html = widget.$html;
const fragment = range.createContextualFragment(html);

function startInterval() {
    let intervalID = setInterval(function() {
      if (window.location.href !== currentUrl) {
        /* console.log('URL changed (polling):', window.location.href);
        console.log('CurrentURL: ' + currentUrl); */

        currentUrl = window.location.href;
    
        // user navigated back to home
        if (currentUrl === "https://www.mycovetrus.com/CVT-NA/en/USD/") {
    
            // start the carousel again
            console.log('URL BACK TO HOMEPAGE');
            test();
            /* console.log('URL BACK: ' + window.location.href);
            clearInterval(intervalID);
            startInterval(); */
        }
        else {

            console.log('URL changed to: ' + currentUrl);
            clearInterval(intervalID);
            startInterval();
        }
      }
    }, 100); // Check every 100 milliseconds
}


/* utils.waitForElement('.CVTHeroBannerSlot').then(function(element) {
  /* var html = widget.$html;
  console.log(html);

  const banner = element.querySelector('cms-banner cms-content-canvas'); */

utils.waitForElement('cms-banner cms-content-canvas').then(function(element) {
  /* var html = widget.$html;
  console.log(html); */

  if(window.location.href === "https://www.mycovetrus.com/CVT-NA/en/USD/" || window.location.href.includes('https://www.mycovetrus.com/CVT-NA/en/USD/?')) {

    const banner = document.querySelector('cms-banner cms-content-canvas');
    let carouselSlides;
    let carouselIndex = [0, 1, 2]; // array keeping track of index of slides position
    let rotationDirectionForward = true; // direction for slides to rotate
  
    console.log(banner);
    
    // remove default banner element and replace with custom HTML banner
    while (banner.firstChild) {
      banner.removeChild(banner.firstChild);
    }
    banner.insertAdjacentHTML('afterbegin', html);
    
    console.log(banner);
    
    console.log('carousel loaded');
    startInterval();
    
    /*try {
      const CTA_2_test1 = document.querySelector('.mobile-carousel-cta-2');
      const CTA_2_test2 = widget.button_2_link;
      console.log(CTA_2_test1.href, CTA_2_test2);
    } catch (error) {
      console.log("wrong syntax");
    }*/
  
    // initial timer start
    let timePause = 5000;
    let theTimer = setInterval(rotateSlides, timePause);
  
  
    
    
    const carouselCTAS = document.querySelectorAll('.carousel-CTA');
    const currentUrl = window.location.hostname;
    console.log(carouselCTAS);
    let CTACOUNT = carouselCTAS.length/2;
    // console.log(CTACOUNT);
    carouselCTAS.forEach((link, index) => {
  
        if (CTACOUNT > 0) {

          console.log(link.href,CTACOUNT, index);
          console.log(link.href);
          link.href=carouselCTAS[index+CTACOUNT];
          CTACOUNT--;
        }
        // console.log(currentUrl, link.hostname);
        // console.log(currentUrl === link.hostname);
  
        if (currentUrl !== link.hostname) {
  
            console.log('external link detected')
            link.setAttribute('target', '_blank'); // Set the target attribute to "_blank"
        }
    });
  
    /* const allLinks = document.querySelectorAll('.btn.external');
    allLinks.forEach(link => {
      link.setAttribute('target', '_blank'); // Set the target attribute to "_blank"
    }); */
  
    // indicator buttons visible on tablet/mobile viewports, accessible after Optimizely loads custom HTML
    const slideIndicators = element.querySelectorAll('.mobile-view .indicators > button');
    slideIndicators.forEach((element, index) => {
      
      element.addEventListener('click', function() {
  
        clearInterval(theTimer);
        rotateSlides(index);
        theTimer = setInterval(rotateSlides, timePause);
        // console.log('element ' + index + ' was clicked');
      });
    });
  
  
    // on desktop viewport, event listeners for rotation backward/forward on button clicks
    document.querySelector('button.previous').addEventListener('click', function(e) {
  
      rotateBackward();
    });
  
    document.querySelector('button.next').addEventListener('click', function(e) {
  
      rotateForward();
    });
  
  
    // detect swipe direction
    const carouselSwipeArea = element.querySelector('.mobile-view > cx-carousel > .carousel-panel');
    let touchStartX = 0;
    let touchEndX = 0;
  
    // on tablet/mobile viewport, event listeners for rotation backward/forward on swipe direction
    carouselSwipeArea.addEventListener('touchstart', function(e) {
  
      touchStartX = e.touches[0].clientX;
    });
  
    carouselSwipeArea.addEventListener('touchend', function(e) {
  
      touchEndX = e.changedTouches[0].clientX;
      const distanceX = touchEndX - touchStartX;
  
      if (Math.abs(distanceX) > 50) { // Adjust the threshold as needed
  
        if (distanceX > 0) {
          
          rotateBackward();
          // console.log('Swiped right');
        } else {
          
          rotateForward();
          // console.log('Swiped left');
        }
      }
    });
  
  
    // detect what viewport is loaded on user's device, and adjust which version of the rotating banner will be modified by the slide rotation action
    let viewport = window.matchMedia("(min-width: 1200px)")
  
    if (viewport.matches) {
  
      carouselSlides = document.querySelectorAll('.desktop-view cx-carousel .slides > .slide');
    } else {
  
      carouselSlides = document.querySelectorAll('.mobile-view cx-carousel .slides > .slide');
    }
  
  
    // rotate slides one position in reverse
    function rotateBackward() {
  
      rotationDirectionForward = false;
      clearInterval(theTimer);
      rotateSlides();
      theTimer = setInterval(rotateSlides, timePause);
    }
  
    // rotate slides one position forward
    function rotateForward() {
  
      clearInterval(theTimer);
      rotateSlides();
      theTimer = setInterval(rotateSlides, timePause);
    }
  
    
    // swap classes to initiate slide rotation behavior, based on boolean of whether the slide should be going forward or backward
    function rotateSlides(currentSlideIndex = null) {
  
      // if auto-rotation OR if clicking an indicator that is not at the current index (clicking the indicator that is already active), then run the rotation function
      if (currentSlideIndex == null || currentSlideIndex != carouselIndex[0]) {
  
        clearInterval()
        carouselSlides[carouselIndex[0]].classList.remove('active');
        carouselSlides[carouselIndex[0]].childNodes[1].classList.remove('active');
        slideIndicators[carouselIndex[0]].ariaCurrent = 'false';
        slideIndicators[carouselIndex[0]].disabled = false;
  
        if (currentSlideIndex == null) {
  
          if (rotationDirectionForward) {
    
            carouselIndex.push(carouselIndex.shift());
          }
          else {
    
            carouselIndex.unshift(carouselIndex.pop());
          }
        }
        else {
  
          while (carouselIndex[0] != currentSlideIndex) {
  
            carouselIndex.push(carouselIndex.shift());
          }
        }
  
        carouselSlides[carouselIndex[0]].classList.add('active');
        carouselSlides[carouselIndex[0]].childNodes[1].classList.add('active');
        slideIndicators[carouselIndex[0]].ariaCurrent = 'true';
        slideIndicators[carouselIndex[0]].disabled = true;
  
        rotationDirectionForward = true;
      }
    }
  }

});


function test() {

  // on homepage or on homepage with parameters
  if(window.location.href === "https://www.mycovetrus.com/CVT-NA/en/USD/" || window.location.href.includes('https://www.mycovetrus.com/CVT-NA/en/USD/?')) {

    console.log(document.querySelector('.CVTHeroBannerSlot'));
    console.log('TESTING 9/17');
  
    waitForBannerElement('cms-banner cms-content-canvas').then((element) => {
          
      console.log('banner found!');
      const banner = document.querySelector('cms-banner cms-content-canvas');
      
      let carouselSlides;
      let carouselIndex = [0, 1, 2]; // array keeping track of index of slides position
      let rotationDirectionForward = true; // direction for slides to rotate
    
      console.log('carousel loaded');
      startInterval();
    
      // initial timer start
      let timePause = 5000;
      let theTimer = setInterval(rotateSlides, timePause);
    
    
      // remove default banner element and replace with custom HTML banner
      while (banner.firstChild) {
        banner.removeChild(banner.firstChild);
      }
      banner.appendChild(fragment);
      // banner.insertAdjacentHTML('afterbegin', html);
      
      const carouselCTAS = document.querySelectorAll('.carousel-CTA');
      const currentUrl = window.location.hostname;
      carouselCTAS.forEach(link => {
    
          // console.log(currentUrl, link.hostname);
          // console.log(currentUrl === link.hostname);
    
          if (currentUrl !== link.hostname) {
    
              console.log('external link detected')
              link.setAttribute('target', '_blank'); // Set the target attribute to "_blank"
          }
      });
    
      /* const allLinks = document.querySelectorAll('.btn.external');
      allLinks.forEach(link => {
        link.setAttribute('target', '_blank'); // Set the target attribute to "_blank"
      }); */
    
      // indicator buttons visible on tablet/mobile viewports, accessible after Optimizely loads custom HTML
      const slideIndicators = element.querySelectorAll('.mobile-view .indicators > button');
      slideIndicators.forEach((element, index) => {
        
        element.addEventListener('click', function() {
    
          clearInterval(theTimer);
          rotateSlides(index);
          theTimer = setInterval(rotateSlides, timePause);
          // console.log('element ' + index + ' was clicked');
        });
      });
    
    
      // on desktop viewport, event listeners for rotation backward/forward on button clicks
      document.querySelector('button.previous').addEventListener('click', function(e) {
    
        rotateBackward();
      });
    
      document.querySelector('button.next').addEventListener('click', function(e) {
    
        rotateForward();
      });
    
    
      // detect swipe direction
      const carouselSwipeArea = element.querySelector('.mobile-view > cx-carousel > .carousel-panel');
      let touchStartX = 0;
      let touchEndX = 0;
    
      // on tablet/mobile viewport, event listeners for rotation backward/forward on swipe direction
      carouselSwipeArea.addEventListener('touchstart', function(e) {
    
        touchStartX = e.touches[0].clientX;
      });
    
      carouselSwipeArea.addEventListener('touchend', function(e) {
    
        touchEndX = e.changedTouches[0].clientX;
        const distanceX = touchEndX - touchStartX;
    
        if (Math.abs(distanceX) > 50) { // Adjust the threshold as needed
    
          if (distanceX > 0) {
            
            rotateBackward();
            // console.log('Swiped right');
          } else {
            
            rotateForward();
            // console.log('Swiped left');
          }
        }
      });
    
    
      // detect what viewport is loaded on user's device, and adjust which version of the rotating banner will be modified by the slide rotation action
      let viewport = window.matchMedia("(min-width: 1200px)")
    
      if (viewport.matches) {
    
        carouselSlides = document.querySelectorAll('.desktop-view cx-carousel .slides > .slide');
      } else {
    
        carouselSlides = document.querySelectorAll('.mobile-view cx-carousel .slides > .slide');
      }
    
    
      // rotate slides one position in reverse
      function rotateBackward() {
    
        rotationDirectionForward = false;
        clearInterval(theTimer);
        rotateSlides();
        theTimer = setInterval(rotateSlides, timePause);
      }
    
      // rotate slides one position forward
      function rotateForward() {
    
        clearInterval(theTimer);
        rotateSlides();
        theTimer = setInterval(rotateSlides, timePause);
      }
    
      
      // swap classes to initiate slide rotation behavior, based on boolean of whether the slide should be going forward or backward
      function rotateSlides(currentSlideIndex = null) {
    
        // if auto-rotation OR if clicking an indicator that is not at the current index (clicking the indicator that is already active), then run the rotation function
        if (currentSlideIndex == null || currentSlideIndex != carouselIndex[0]) {
    
          clearInterval()
          carouselSlides[carouselIndex[0]].classList.remove('active');
          carouselSlides[carouselIndex[0]].childNodes[1].classList.remove('active');
          slideIndicators[carouselIndex[0]].ariaCurrent = 'false';
          slideIndicators[carouselIndex[0]].disabled = false;
    
          if (currentSlideIndex == null) {
    
            if (rotationDirectionForward) {
      
              carouselIndex.push(carouselIndex.shift());
            }
            else {
      
              carouselIndex.unshift(carouselIndex.pop());
            }
          }
          else {
    
            while (carouselIndex[0] != currentSlideIndex) {
    
              carouselIndex.push(carouselIndex.shift());
            }
          }
    
          carouselSlides[carouselIndex[0]].classList.add('active');
          carouselSlides[carouselIndex[0]].childNodes[1].classList.add('active');
          slideIndicators[carouselIndex[0]].ariaCurrent = 'true';
          slideIndicators[carouselIndex[0]].disabled = true;
    
          rotationDirectionForward = true;
        }
      }
    
      startInterval();
    });
  }

}

function waitForBannerElement(selector) {
    return new Promise((resolve) => {
        const observer = new MutationObserver((mutations, observer) => {
            const element = document.querySelector(selector);
            if (element) {
                observer.disconnect();
                resolve(element);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "30318900008";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"image_1","default_value":"//cdn.optimizely.com/img/8209600003/2a8d99086ad749d59c5ef4a57b487b0b.jpg"},{"name":"mobile_image_1","default_value":"//cdn.optimizely.com/img/8209600003/c09bb1a6e9af4047910b2f8767c02b8f.jpg"},{"name":"image_1_alt","default_value":""},{"name":"image_1_title","default_value":""},{"name":"headline_1","default_value":"Covetrus"},{"name":"copy_1","default_value":""},{"name":"button_1_text","default_value":"Shop Now"},{"name":"button_1_link","default_value":""},{"name":"image_2","default_value":"//cdn.optimizely.com/img/8209600003/acc8f61a8f154eb4a6be6cdc5fce5e2c.jpg"},{"name":"mobile_image_2","default_value":"//cdn.optimizely.com/img/8209600003/7e7b56c37e9d4069bdc3c834436c4c23.jpg"},{"name":"image_2_alt","default_value":""},{"name":"image_2_title","default_value":""},{"name":"headline_2","default_value":""},{"name":"copy_2","default_value":""},{"name":"button_2_text","default_value":"Shop Now"},{"name":"button_2_link","default_value":""},{"name":"image_3","default_value":"//cdn.optimizely.com/img/8209600003/1da7abdf9aaf4bd5a0d91432db9426a4.jpg"},{"name":"mobile_image_3","default_value":"//cdn.optimizely.com/img/8209600003/913b0656db9d4d08b0ee97e0ca7e0dfa.jpg"},{"name":"image_3_alt","default_value":""},{"name":"image_3_title","default_value":""},{"name":"headline_3","default_value":""},{"name":"copy_3","default_value":""},{"name":"button_3_text","default_value":"Shop Now"},{"name":"button_3_link","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-30318900008');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        
      },
    });
}
], "interestGroups": [], "tagGroups": []},l=__webpack_require__(4860),d="initializeOptimizelyPreview";if(l.initGlobalStore(f),u.populateDirectiveData(),r.clientHasAlreadyInitialized())e.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(r.shouldBailForDesktopApp())e.log("Main / Disabling because of desktop app.");else if(r.conflictInObservingChanges())e.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(r.shouldLoadInnie())a.registerFunction("getProjectId",(function(){return f.projectId})),a.registerFunction("getAccountId",(function(){return f.accountId})),c.addScriptAsync("https://app.optimizely.com/js/innie.js"),e.log("Main / Disabling in favor of the editor client.");else if(r.shouldLoadEmbeddedEditor())e.log("Main / Loading embedded editor"),s.loadEmbeddedEditor("https://app.optimizely.com/dist/visual-editor/main.js");else if(r.shouldLoadPreview()){(r.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:f}),e.log("Main / Disabling in favor of the preview client."),__webpack_require__(9647).setupPreviewGlobal(),__webpack_require__(9647).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:f}),r.isSlave()||(a.registerFunction("getProjectId",(function(){return f.projectId})),c.addScriptSync("https://cdn.optimizely.com/js/preview2/22220670139.js"))}else if(r.shouldBootstrapDataForPreview()){a.registerFunction(d,(function(n){t(),a.unregisterFunction(d)}));var v=r.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:a.getFunction("getProjectId")();p=r.getProjectToken(),g=v,m=r.getPreviewLayerIds(),o="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",p).replace("__PROJECT_ID__",g).replace("__PREVIEW_LAYER_IDS__",m.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0);var h=r.getForceVariationIds();h&&h.length>0&&(o+="&optimizely_x="+h.join(",")),c.addScriptSync(o),__webpack_require__(9647).setupPreviewGlobal(),c.addScriptAsync("/dist/js/preview_ui.js")}else r.shouldBootstrapDataForEditor()?(a.registerFunction(d,(function(n){t(),a.unregisterFunction(d)})),c.addScriptAsync(window.optimizely_editor_data_endpoint)):r.shouldInitialize()&&t();var p,g,m;n.timeEnd("block");var b=n.now();n.setMark("optimizelyFinished",b,b)}}try{main()}catch(t){try{__webpack_require__(673).handleError(t)}catch(t){console.log(t)}}})();