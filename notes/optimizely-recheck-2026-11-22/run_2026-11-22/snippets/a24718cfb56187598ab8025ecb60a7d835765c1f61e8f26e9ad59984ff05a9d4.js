/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={3958:function(t,n,e){var i=e(2702)(),r=e(7002);t.exports=function(t,n){function e(n){if(!(this instanceof e))return new e(n);try{throw new Error(n)}catch(n){n.name=t,this.stack=n.stack}i&&this.stack&&(this.stack=r(this.stack,t,n)),this.message=n||"",this.name=t}return e.prototype=new(n||Error),e.prototype.constructor=e,e.prototype.inspect=function(){return this.message?"["+t+": "+this.message+"]":"["+t+"]"},e.prototype.name=t,e}},7002:function(t){"use strict";t.exports=function(t,n,e){var i=n;return e&&(i+=": "+e),t=i+t.slice(t.indexOf("\n"))}},2702:function(t){"use strict";t.exports=function(){var t=new Error("yep");return!!t.stack&&"Error: yep\n"===t.stack.substr(0,11)}},1375:function(t,n,e){t.exports=function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}var i=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,u=void 0,a=function(t,n){w[r]=t,w[r+1]=n,2===(r+=2)&&(u?u(_):I())};function c(t){u=t}function s(t){a=t}var f="undefined"!=typeof window?window:void 0,l=f||{},d=l.MutationObserver||l.WebKitMutationObserver,v="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){return function(){return process.nextTick(_)}}function g(){return void 0!==o?function(){o(_)}:y()}function m(){var t=0,n=new d(_),e=document.createTextNode("");return n.observe(e,{characterData:!0}),function(){e.data=t=++t%2}}function b(){var t=new MessageChannel;return t.port1.onmessage=_,function(){return t.port2.postMessage(0)}}function y(){var t=setTimeout;return function(){return t(_,1)}}var w=new Array(1e3);function _(){for(var t=0;t<r;t+=2)(0,w[t])(w[t+1]),w[t]=void 0,w[t+1]=void 0;r=0}function E(){try{var t=e(4118);return o=t.runOnLoop||t.runOnContext,g()}catch(t){return y()}}var I=void 0;function A(t,n){var e=arguments,i=this,r=new this.constructor(T);void 0===r[k]&&Q(r);var o,u=i._state;return u?(o=e[u-1],a((function(){return W(u,r,o,i._result)}))):q(i,r,t,n),r}function S(t){var n=this;if(t&&"object"==typeof t&&t.constructor===n)return t;var e=new n(T);return V(e,t),e}I=v?p():d?m():h?b():void 0===f?E():y();var k=Math.random().toString(36).substring(16);function T(){}var O=void 0,R=1,x=2,N=new H;function C(){return new TypeError("You cannot resolve a promise with itself")}function D(){return new TypeError("A promises callback cannot return that same promise.")}function j(t){try{return t.then}catch(t){return N.error=t,N}}function M(t,n,e,i){try{t.call(n,e,i)}catch(t){return t}}function P(t,n,e){a((function(t){var i=!1,r=M(e,n,(function(e){i||(i=!0,n!==e?V(t,e):z(t,e))}),(function(n){i||(i=!0,F(t,n))}),"Settle: "+(t._label||" unknown promise"));!i&&r&&(i=!0,F(t,r))}),t)}function L(t,n){n._state===R?z(t,n._result):n._state===x?F(t,n._result):q(n,void 0,(function(n){return V(t,n)}),(function(n){return F(t,n)}))}function U(t,e,i){e.constructor===t.constructor&&i===A&&e.constructor.resolve===S?L(t,e):i===N?(F(t,N.error),N.error=null):void 0===i?z(t,e):n(i)?P(t,e,i):z(t,e)}function V(n,e){n===e?F(n,C()):t(e)?U(n,e,j(e)):z(n,e)}function B(t){t._onerror&&t._onerror(t._result),G(t)}function z(t,n){t._state===O&&(t._result=n,t._state=R,0!==t._subscribers.length&&a(G,t))}function F(t,n){t._state===O&&(t._state=x,t._result=n,a(B,t))}function q(t,n,e,i){var r=t._subscribers,o=r.length;t._onerror=null,r[o]=n,r[o+R]=e,r[o+x]=i,0===o&&t._state&&a(G,t)}function G(t){var n=t._subscribers,e=t._state;if(0!==n.length){for(var i=void 0,r=void 0,o=t._result,u=0;u<n.length;u+=3)i=n[u],r=n[u+e],i?W(e,i,r,o):r(o);t._subscribers.length=0}}function H(){this.error=null}var $=new H;function Y(t,n){try{return t(n)}catch(t){return $.error=t,$}}function W(t,e,i,r){var o=n(i),u=void 0,a=void 0,c=void 0,s=void 0;if(o){if((u=Y(i,r))===$?(s=!0,a=u.error,u.error=null):c=!0,e===u)return void F(e,D())}else u=r,c=!0;e._state!==O||(o&&c?V(e,u):s?F(e,a):t===R?z(e,u):t===x&&F(e,u))}function K(t,n){try{n((function(n){V(t,n)}),(function(n){F(t,n)}))}catch(n){F(t,n)}}var X=0;function J(){return X++}function Q(t){t[k]=X++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Z(t,n){this._instanceConstructor=t,this.promise=new t(T),this.promise[k]||Q(this.promise),i(n)?(this._input=n,this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?z(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&z(this.promise,this._result))):F(this.promise,tt())}function tt(){return new Error("Array Methods must be provided an Array")}function nt(t){return new Z(this,t).promise}function et(t){var n=this;return i(t)?new n((function(e,i){for(var r=t.length,o=0;o<r;o++)n.resolve(t[o]).then(e,i)})):new n((function(t,n){return n(new TypeError("You must pass an array to race."))}))}function it(t){var n=new this(T);return F(n,t),n}function rt(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ot(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function ut(t){this[k]=J(),this._result=this._state=void 0,this._subscribers=[],T!==t&&("function"!=typeof t&&rt(),this instanceof ut?K(this,t):ot())}function at(){var t=void 0;if(void 0!==e.g)t=e.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var i=null;try{i=Object.prototype.toString.call(n.resolve())}catch(t){}if("[object Promise]"===i&&!n.cast)return}t.Promise=ut}return Z.prototype._enumerate=function(){for(var t=this.length,n=this._input,e=0;this._state===O&&e<t;e++)this._eachEntry(n[e],e)},Z.prototype._eachEntry=function(t,n){var e=this._instanceConstructor,i=e.resolve;if(i===S){var r=j(t);if(r===A&&t._state!==O)this._settledAt(t._state,n,t._result);else if("function"!=typeof r)this._remaining--,this._result[n]=t;else if(e===ut){var o=new e(T);U(o,t,r),this._willSettleAt(o,n)}else this._willSettleAt(new e((function(n){return n(t)})),n)}else this._willSettleAt(i(t),n)},Z.prototype._settledAt=function(t,n,e){var i=this.promise;i._state===O&&(this._remaining--,t===x?F(i,e):this._result[n]=e),0===this._remaining&&z(i,this._result)},Z.prototype._willSettleAt=function(t,n){var e=this;q(t,void 0,(function(t){return e._settledAt(R,n,t)}),(function(t){return e._settledAt(x,n,t)}))},ut.all=nt,ut.race=et,ut.resolve=S,ut.reject=it,ut._setScheduler=c,ut._setAsap=s,ut._asap=a,ut.prototype={constructor:ut,then:A,catch:function(t){return this.then(null,t)}},ut.polyfill=at,ut.Promise=ut,ut}()},3826:function(t){"use strict";t.exports=function(t){var n,e={};if(!(t instanceof Object)||Array.isArray(t))throw new Error("keyMirror(...): Argument must be an object.");for(n in t)t.hasOwnProperty(n)&&(e[n]=n);return e}},2627:function(t){"use strict";t.exports=function(t,n,e,i){Object.defineProperty(t,n,{get:function(){var t=e.call(this);return Object.defineProperty(this,n,{value:t,enumerable:!!i,writable:!0}),t},set:function(t){return Object.defineProperty(this,n,{value:t,enumerable:!!i,writable:!0}),t},enumerable:!!i,configurable:!0})}},9891:function(t){"use strict";var n=Element.prototype,e=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;t.exports=function(t,n){if(e)return e.call(t,n);for(var i=t.parentNode.querySelectorAll(n),r=0;r<i.length;r++)if(i[r]==t)return!0;return!1}},5556:function(t){!function(){function n(t,n){var e,i,r,o,u,a,c,s;for(e=3&t.length,i=t.length-e,r=n,u=3432918353,a=461845907,s=0;s<i;)c=255&t.charCodeAt(s)|(255&t.charCodeAt(++s))<<8|(255&t.charCodeAt(++s))<<16|(255&t.charCodeAt(++s))<<24,++s,r=27492+(65535&(o=5*(65535&(r=(r^=c=(65535&(c=(c=(65535&c)*u+(((c>>>16)*u&65535)<<16)&4294967295)<<15|c>>>17))*a+(((c>>>16)*a&65535)<<16)&4294967295)<<13|r>>>19))+((5*(r>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16);switch(c=0,e){case 3:c^=(255&t.charCodeAt(s+2))<<16;case 2:c^=(255&t.charCodeAt(s+1))<<8;case 1:r^=c=(65535&(c=(c=(65535&(c^=255&t.charCodeAt(s)))*u+(((c>>>16)*u&65535)<<16)&4294967295)<<15|c>>>17))*a+(((c>>>16)*a&65535)<<16)&4294967295}return r^=t.length,r=2246822507*(65535&(r^=r>>>16))+((2246822507*(r>>>16)&65535)<<16)&4294967295,r=3266489909*(65535&(r^=r>>>13))+((3266489909*(r>>>16)&65535)<<16)&4294967295,(r^=r>>>16)>>>0}var e=n;e.v2=function(t,n){for(var e,i=t.length,r=n^i,o=0;i>=4;)e=1540483477*(65535&(e=255&t.charCodeAt(o)|(255&t.charCodeAt(++o))<<8|(255&t.charCodeAt(++o))<<16|(255&t.charCodeAt(++o))<<24))+((1540483477*(e>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^(e=1540483477*(65535&(e^=e>>>24))+((1540483477*(e>>>16)&65535)<<16)),i-=4,++o;switch(i){case 3:r^=(255&t.charCodeAt(o+2))<<16;case 2:r^=(255&t.charCodeAt(o+1))<<8;case 1:r=1540483477*(65535&(r^=255&t.charCodeAt(o)))+((1540483477*(r>>>16)&65535)<<16)}return r=1540483477*(65535&(r^=r>>>13))+((1540483477*(r>>>16)&65535)<<16),(r^=r>>>15)>>>0},e.v3=n,t.exports=e}()},1691:function(t,n,e){var i=e(5556).v3,r=Math.pow(2,32),o=function(t,n){return(i(t,n)>>>0)/r};t.exports={Seed:{IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},hashToHex:function(t,n){var e=i(t,n);return(e>>>16).toString(16)+(65535&e).toString(16)},hashToInt:function(t,n,e){return Math.floor(o(t,n)*e)},hashToReal:o,toByteString:function(t){var n=String.fromCharCode;return t.replace(/[\S\s]/gi,(function(t){t=t.charCodeAt(0);var e=n(255&t);return t>255&&(e=n(t>>>8&255)+e),t>65535&&(e=n(t>>>16)+e),e}))}}},8674:function(t,n,e){var i=e(8275).pick,r=e(2025).get("stores/audience_data"),o=e(7566),u=e(3111),a=e(2895),c=e(7474);function s(t){var n=["type","selector","attributes","value"],e=Object.assign({},t);return e.changeSet=t.changeSet.map((function(t){return i(c.dereferenceChangeId(t),n)})),e}n.emitLayerDecided=function(t){var n=(t.decisionTicket?t.decisionTicket.audienceIds:[]).map((function(t){return{id:t,name:r.get(t).name}})),e={type:u.TYPES.LIFECYCLE,name:"layerDecided",data:Object.assign(t,{audiences:n})},i=c.translateLayerEventToCampaignEvent(e);o.emit(e),o.emit(i)},n.emitViewActivated=function(t){var n={type:u.TYPES.LIFECYCLE,name:"viewActivated",data:t},e=c.translateViewActivatedToPageActivated(n);o.emit(n),o.emit(e)},n.emitViewsActivated=function(t){var n={type:u.TYPES.LIFECYCLE,name:"viewsActivated",data:t};o.emit(n)},n.emitCampaignsDecided=function(t){o.emit({type:u.TYPES.LIFECYCLE,name:"campaignsDecided",data:{pageIds:t}})},n.emitPageDeactivated=function(t){var n={type:u.TYPES.LIFECYCLE,name:"pageDeactivated",data:t};o.emit(n)},n.emitActivateEvent=function(){o.emit({type:u.TYPES.LIFECYCLE,name:"activate"},!0)},n.emitActivatedEvent=function(){o.emit({type:u.TYPES.LIFECYCLE,name:"activated"})},n.emitInitializedEvent=function(){var t={type:u.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),o.emit(t)},n.emitOriginsSyncedEvent=function(){var t={type:u.TYPES.LIFECYCLE,name:"originsSynced"};o.emit(t)},n.emitActionAppliedEvent=function(t){var n={type:t.type,campaignId:t.layerId,pageId:t.pageId,experimentId:t.experimentId,variationId:t.variationId};a.defineProperty(n,"changes",(function(){return s(t).changeSet}),"actionAppliedEvent");var e={type:u.TYPES.ACTION,name:"applied",data:n};o.emit(e)},n.emitActionsForDecisionAppliedEvent=function(t,n){var e={decision:t};a.defineProperty(e,"actions",(function(){return n.map(s)}),"appliedAllForDecisionEvent");var i={type:u.TYPES.ACTION,name:"appliedAllForDecision",data:e};o.emit(i)},n.emitSendEvents=function(){var t={type:u.TYPES.ANALYTICS,name:"sendEvents"};o.emit(t)},n.emitMaybeSendEvents=function(){var t={type:u.TYPES.ANALYTICS,name:"maybeSendEvents"};o.emit(t)},n.emitHoldEvents=function(){var t={type:u.TYPES.ANALYTICS,name:"holdEvents"};o.emit(t)}},188:function(t,n,e){Object.defineProperty(n,"u",{value:!0});var i=e(8275),r=i.cloneDeep,o=i.isEqual,u=i.mapValues,a=i.pick,c=i.pickBy,s=e(9207),f=e(2895),l=e(7474),d=e(5686),v=e(3272);function h(t,n,e,i){var r=t.getLayerState(i),o=n.get(i),u=e.get();if(!r||!o)return u?{layer:{name:u.layerName,id:u.layerId,policy:u.layerPolicy,integrationStringVersion:u.integrationStringVersion},experiment:{name:u.experimentName,id:u.experimentId},variation:{name:u.variationName,id:u.variationId},isLayerHoldback:!1}:null;if(d.isSingleExperimentPolicy(o.policy)&&r.decision.isLayerHoldback)return null;var a,c,s=r.decision.experimentId,f=r.decision.variationId;return s&&f&&(a=o.experiments.find((function(t){return t.id===s})))&&(c=a.variations.find((function(t){return t.id===f})))?{layer:{name:o.name,id:o.id,policy:o.policy,integrationStringVersion:o.integrationStringVersion},experiment:{name:a.name,id:a.id},variation:{name:c.name,id:c.id},isLayerHoldback:r.decision.isLayerHoldback}:null}function p(t,n,e,i,r,u,c){var s=[],f=t.getLayerStates();c.onlySingleExperiments&&(f=f.filter((function(t){var e=n.get(t.layerId);return e&&d.isSingleExperimentPolicy(e.policy)})));var l=e.getActiveViewIds(),h=f.map((function(t){var e,i=!!t.decision.variationId,o=t.decisionActivationId&&t.decisionActivationId===r.getActivationId(),u=v.getExperimentAndVariation(),a=u?u.variationId:null,c=i&&t.decision.variationId===a,s=((null==(e=n.get(null==t?void 0:t.layerId))?void 0:e.viewIds)||[]).every((function(t){return!l.includes(t)}));return Object.assign(t,{isActive:i&&o&&!s||c,visitorRedirected:c})}));return(u?"function"==typeof u?h.filter(u):h.filter((function(t){return Object.keys(u).every((function(n){return o(t[n],u[n])}))})):h).forEach((function(t){var e=function(t,n,e,i){var r,o,u=t.layerId,c=n.get(u)||{},s=(c.experiments||[]).map((function(t){return a(t,["id","name"])}));if(!i&&c.decisionMetadata&&c.decisionMetadata.offerConsistency)return;var f={id:u,campaignName:c.name||null,experiment:null,audiences:[],allExperiments:s,variation:null,reason:t.decision.reason,isActive:!!t.isActive,visitorRedirected:t.visitorRedirected,isInCampaignHoldback:t.decision.isLayerHoldback};t.decision&&t.decision.experimentId&&(r=(c.experiments||[]).find((function(n){return n.id===t.decision.experimentId}))),r&&(f.experiment=a(r,["id","name","campaignName"])),r&&t.decision.variationId&&(o=r.variations.find((function(n){return n.id===t.decision.variationId}))),o&&(f.variation=a(o,["id","name"]));var l=(t.decisionTicket.audienceIds||[]).map((function(t){return a(e.get(t),["id","name"])}));return f.audiences=l,c.decisionMetadata&&c.decisionMetadata.offerConsistency&&(f.pageId=t.pageId),f}(t,n,i,c.includeOfferConsistency);e&&s.push(e)})),s}n.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(t,n,e,i,r,o,u,a,c){var s={},d={},v={},h={audiences:t.getAudiencesMap(),events:e.getEventsMap(),campaigns:s,pages:r.getPagesMap(),experiments:d,variations:v,projectId:c.getProjectId(),snippetId:c.getSnippetId(),accountId:c.getAccountId(),dcpServiceId:c.getDCPServiceId(),revision:c.getRevision(),clientName:n.getClientName(),clientVersion:n.getClientVersion()},p=l.dereferenceChangeId;return i.getAll().forEach((function(t){f.defineProperty(s,t.id,(function(){var n=Object.assign({},t);return f.defineProperty(n,"changes",(function(){return(t.changes||[]).map(p)}),"campaign"),f.defineProperty(n,"experiments",(function(){return(t.experiments||[]).map((function(t){return d[t.id]}))}),"campaign"),n}),"campaignMap","byId"),(t.experiments||[]).forEach((function(t){f.defineProperty(d,t.id,(function(){var n=Object.assign({},t);return f.defineProperty(n,"changes",(function(){return(t.changes||[]).map(p)}),"experiment"),f.defineProperty(n,"variations",(function(){return(t.variations||[]).map((function(t){return v[t.id]}))}),"experiment"),n}),"experimentMap","byId"),(t.variations||[]).forEach((function(t){f.defineProperty(v,t.id,(function(){var n=Object.assign({},t);return f.defineProperty(n,"actions",(function(){return(t.actions||[]).map((function(t){return Object.assign({},t,{changes:(t.changes||[]).map(p)})}))}),"variation"),n}),"variationMap","byId")}))}))})),h.groups=o.getGroupsMap(),h}],n.visitor=["stores/visitor",function(t){return r(t.getVisitorProfile())}],n.visitor_id=["stores/visitor_id",function(t){return{randomId:t.getRandomId()}}],n.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(t,n,i,r,o,f,l){return{getTrafficExclusionStats:function(){return e(4308).getStats()},getCampaignStates:function(e){var r={};return p(i,n,o,t,f,e,{includeOfferConsistency:!1}).forEach((function(t){r[t.id]=t})),r},getExperimentStates:function(e){var r=p(i,n,o,t,f,e,{includeOfferConsistency:!1,onlySingleExperiments:!0}),u=["audiences","variation","reason","visitorRedirected","isActive"];return r.reduce((function(t,n){var e=n.allExperiments[0];return t[e.id]=Object.assign({},a(n,u),{id:e.id,experimentName:e.name,isInExperimentHoldback:n.isInCampaignHoldback}),t}),{})},getCampaignStateLists:function(e){var r={};return p(i,n,o,t,f,e,{includeOfferConsistency:!0}).forEach((function(t){var n=t.id;r[n]||(r[n]=[]),r[n].push(t)})),r},getPageStates:function(t){var n=o.getAll(),e=Object.keys(n).reduce((function(t,e){var i=n[e],o=r.get(i.id);return t[i.id]=Object.assign({},a(o,["id","name","apiName","category","staticConditions","tags"]),a(i,["isActive","metadata"])),t[i.id].isActive=!!t[i.id].isActive,t}),{});return t?c(e,t):e},isGlobalHoldback:function(){return f.isGlobalHoldback()},getActivationId:function(){return f.getActivationId()},getVariationMap:function(){var t=i.getLayerStates(),e={};return t.forEach((function(t){var i=n.get(t.layerId);if(t.decision&&t.decision.experimentId&&(e[t.decision.experimentId]={id:t.decision.variationId,name:null,index:null},i)){var r=(i.experiments||[]).find((function(n){return n.id===t.decision.experimentId}));if(r&&t.decision.variationId)var o=r.variations.find((function(n){return n.id===t.decision.variationId})),u=r.variations.findIndex((function(n){return n.id===t.decision.variationId}));o&&(e[t.decision.experimentId]={id:t.decision.variationId,name:o.name,index:u})}})),e},getActiveExperimentIds:function(){var t={},n=this.getCampaignStateLists({isActive:!0});return Object.keys(n).forEach((function(e){n[e].forEach((function(n){t[n.experiment.id]=!0}))})),Object.keys(t)},getRedirectInfo:function(){var t=v.getExperimentAndVariation();return t&&(t.referrer=v.getReferrer()),t},getDecisionString:function(t){if(!t)throw new Error("Must pass a config to getDecisionString");t=Object.assign({maxLength:255,shouldCleanString:!1},t);var e=h(i,n,l,t.campaignId);return e?s.generateAnalyticsString(e.layer,e.experiment,e.variation,e.isLayerHoldback,t.maxLength,t.shouldCleanString):null},getDecisionObject:function(t){if(!t)throw new Error("Must pass a config to getDecisionObject");t=Object.assign({maxLength:255,shouldCleanString:!1},t);var e=h(i,n,l,t.campaignId);if(!e)return null;var r=s.formatNamesAndIdsForAnalytics(e.layer,e.experiment,e.variation,t.shouldCleanString),o=u(r.names,(function(n,e){return s.combineAndTruncateIdAndName(n,r.idStrings[e],t.maxLength)})),a={experiment:o.experiment,variation:o.variation};return d.isSingleExperimentPolicy(e.layer.policy)||Object.assign(a,{campaign:o.layer,holdback:e.isLayerHoldback}),a}}}],n.utils=e(2671).create(),n.jquery=["env/jquery",function(t){return t}],n.event_emitter=e(5547)},9445:function(t,n,e){var i=e(7852),r=e(9454),o="optimizelyDataApi";n.registerFunction=function(t,n){var e=r.getGlobal(o);e||(e={},r.setGlobal(o,e)),e[t]||(e[t]=n)},n.unregisterFunction=function(t){var n=r.getGlobal(o);n&&n[t]&&(n[t]=function(){i.log('Ignoring attempt to call "'+o+"."+t+'" which has been unregistered.')})},n.getFunction=function(t){return r.getGlobal(o)[t]}},3737:function(t,n,e){var i=e(8275).isObject,r=e(7852),o=e(188),u=e(2025),a=u.get("stores/plugins"),c=e(136),s=e(6592),f=e(409),l=[e(3770),e(6708),e(8197)],d=["clientMetadata","cookieDomain","disable","load","optOut","rum"];n.push=function(t,n){var e,o,u,a;if(!Array.isArray(t)&&i(t))a=void 0!==t.version?t.version:1,e=t.type,u=[t];else if(Array.isArray(t))a=0,e=t[0],u=t.slice(1);else{if("string"!=typeof t)return r.warn("API / Ignoring non-array/object/string argument:",t),!1;a=0,e=t,u=[]}if(l[a]&&(o=l[a][e]),n&&-1===d.indexOf(e))return r.debug("API / Ignoring non high priority function:",e,u),!1;if(!o)return r.warn('API / No function found for "'+e+'" (v'+a+") with arguments:",u),!1;r.log('API / Executing: "'+e,'" with arguments:',u);try{o.apply(null,u),f.dispatch(c.RECORD_API_USAGE,{methodName:a?"v"+a+"."+e:e})}catch(t){r.error(t)}return!0},n.get=function(t){r.log('API / Getting module: "'+t+'"');var n=o[t];if(n?Array.isArray(n)&&(n=u.evaluate(n)):n=a.getPlugin(s.PluginTypes.apiModules,t),n)return f.dispatch(c.RECORD_API_USAGE,{methodName:"get."+t}),n;r.warn('Module "'+t+'" not found.')}},2895:function(t,n,e){var i=e(2627),r=e(136),o=e(409),u=e(7852);n.defineProperty=function(t,n,e,a,c){i(t,n,(function(){var t=["prop",a,c||n].join(".");return u.debug('Evaluating getter: "'+t+'"'),o.dispatch(r.RECORD_API_USAGE,{methodName:t}),e()}),!0)}},3770:function(t,n,e){var i=e(6708);function r(t){var n,e={};if(t)if(o(t))n=Number(t);else{if("object"!=typeof t)throw new Error("tracker: Revenue argument "+t+"not a number.");if("revenue"in(e=Object.assign({},t))){if(!o(e.revenue))throw new Error("tracker: Revenue value "+e.revenue+"not a number.");n=Number(e.revenue),delete e.revenue}}return void 0!==n&&(e.revenue=n),e}function o(t){return"number"==typeof t||"string"==typeof t&&!isNaN(Number(t))&&Number(t).toString()==t}n.activateGeoDelayedExperiments=function(t,n){n||(n=t.lists?"odds":"cdn3"),i.dataFromSource({data:t,source:n})},n.activateSiteCatalyst=function(t){t&&t.sVariable&&i.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:t.sVariable}})},n.bucketVisitor=function(t,n){if(t&&n){var e={experimentId:String(t)};n>256?e.variationId=String(n):e.variationIndex=String(n),i.bucketVisitor(e)}},n.bucketUser=n.bucketVisitor,n.disable=function(t){i.disable({scope:t})},n.log=function(t){void 0===t&&(t=!0),i.log({level:t?"INFO":"OFF"})},n.optOut=function(t){void 0===t&&(t=!0),i.optOut({isOptOut:t})},n.setCookieDomain=function(t){i.cookieDomain({cookieDomain:t})},n.setCookieExpiration=function(t){i.cookieExpiration({cookieExpirationDays:t})},n.setDimensionValue=function(t,n){var e={};e[t]=n,i.user({attributes:e})},n.setUserId=function(t){i.user({userId:t})},n.setGA4UserId=function(t){i.ga4User({ga4UserId:t})},n.storeThirdPartyData=function(t,n){i.dataFromSource({source:t,data:n})},n.trackEvent=function(t,n){i.event({eventName:t,tags:r(n)})}},7474:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.omit,u=e(2025),a=e(3019),c=e(2895),s=u.get("stores/change_data");n.translateDecisionToCampaignDecision=function(t){return f(r(t),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},n.translateLayerEventToCampaignEvent=function(t){var e={};return c.defineProperty(e,"campaign",(function(){return function(t){var e=r(t);return e.changes&&(e.changes=e.changes.map(n.dereferenceChangeId)),e.experiments&&e.experiments.forEach((function(t){t.changes&&(t.changes=t.changes.map(n.dereferenceChangeId)),t.variations&&t.variations.forEach((function(t){t.actions&&t.actions.forEach((function(t){t.changes&&(t.changes=t.changes.map(n.dereferenceChangeId))}))}))})),e}(t.data.layer)}),"campaignEvent"),e.decisionTicket=t.data.decisionTicket,e.decision=this.translateDecisionToCampaignDecision(t.data.decision),e.audiences=t.data.audiences,{type:"lifecycle",name:"campaignDecided",data:e}},n.translateViewActivatedToPageActivated=function(t){return{type:"lifecycle",name:"pageActivated",data:{page:t.data.view}}},n.dereferenceChangeId=function(t){var n=s.getChange(t);return n?a.safeReference(n):t};var f=function(t,n){var e=o(t,Object.keys(n));return Object.keys(n).forEach((function(i){var r=n[i];e[r]=t[i]})),e}},2671:function(t,n,e){var i=e(6761).Promise,r=e(7796).o,o=e(1166).F,u=e(5504).M,a=e(3329).poll,c=e(9558).x,s=e(6726).a;n.create=function(){return{observeSelector:r,onUrlChange:o,persistHtml:u,poll:a,Promise:i,waitForElement:c,waitUntil:s}}},6643:function(t){t.exports={DEFAULT_INTERVAL:20}},7796:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.isObject,u=(e(136),e(2025)),a=u.get("stores/directive"),c=e(1019),s=e(4970),f=(e(6592),e(409),e(9899).generate),l=e(3329),d=e(9454),v=(u.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),h={},p=function(t){p=function(){if(!a.shouldObserveChangesIndefinitely())return function(t){var n=l.poll(m.bind(null,t));h[t].cancelObservation=function(){n(),delete h[t]}};var t,n=function(){t.disconnect(),Object.keys(h).forEach(m),t.observe(i,e)},e={attributes:!0,childList:!0,subtree:!0},i=c.getDocumentElement();return t=s.create(n),function(n){var o=h[n];t.observe(i,e),o.cancelObservation=function(){delete h[n],r(h)&&t.disconnect()}}}(),p(t)};function g(t){var n=h[t];n&&n.cancelObservation&&n.cancelObservation()}function m(t){if(h[t]){if(function(t){var n=t.options.timeout;if(null!==n)if("function"==typeof n)try{return n()}catch(t){}else if(Date.now()-t.startTime>n)return!0;return!1}(h[t]))return 0===h[t].matchedCount&&"function"==typeof h[t].options.onTimeout&&h[t].options.onTimeout(),void g(t);var n=c.querySelectorAll(h[t].selector);n.length&&(n.forEach((function(n){n.l&&n.l[t]||h[t].callbackQueue.push(n)})),function(t){for(;h[t]&&h[t].callbackQueue.length;){var n=h[t].callbackQueue.shift();if(b(n,t),h[t].matchedCount=h[t].matchedCount+1,h[t].callback(n),h[t]&&h[t].options.once)return void g(t)}}(t))}}function b(t,n){t.l||(t.l={}),t.l[n]=!0}n.o=function(t,n,e){if(!function(t){try{c.querySelector(t)}catch(t){return!1}return!0}(t))throw new Error("observeSelector expects a valid css selector as its first argument");if("function"!=typeof n)throw new Error("observeSelector expects a function as its second argument");if(e&&(!o(e)||"function"==typeof e))throw new Error("observeSelector expects an object as its third argument");var i=f();return e=Object.assign({},v,e||{}),h[i]={callback:n,callbackQueue:[],matchedCount:0,options:e,selector:t,startTime:Date.now()},p(i),d.setTimeout(m.bind(null,i),0),g.bind(null,i)}},1166:function(t,n,e){var i=e(9899).generate,r=e(9454),o={},u=!1,a=null,c=null,s=null,f=null;function l(){u&&(window.history.pushState===s&&(window.history.pushState=a),window.history.replaceState===f&&(window.history.replaceState=c),a=null,c=null,s=null,f=null,u=!1)}function d(){var t=r.getHref();Object.keys(o).forEach((function(n){var e=o[n];e&&e(t)}))}n.F=function(t){var n=i(),e=0===Object.keys(o).length;return o[n]=t,e&&(r.addEventListener("popstate",d),r.addEventListener("hashchange",d),u||(a=window.history.pushState,c=window.history.replaceState,window.history.pushState=function(t,n,e){a.apply(window.history,arguments),d()},s=window.history.pushState,window.history.replaceState=function(t,n,e){c.apply(window.history,arguments),d()},f=window.history.replaceState,u=!0)),function(){!function(t){delete o[t],0===Object.keys(o).length&&(r.removeEventListener("popstate",d),r.removeEventListener("hashchange",d),l())}(n)}}},5504:function(t,n,e){var i=e(1019),r=e(9899).generate,o=e(4970),u={before:"beforebegin",after:"afterend",first_child:"afterbegin",last_child:"beforeend"},a=Object.keys(u),c=[];function s(t,n,e){var i,r,o=[];if("beforebegin"===n)for(i=t.previousSibling,r=0;r<e&&i;r++)o.unshift(i),i=i.previousSibling;else if("afterend"===n)for(i=t.nextSibling,r=0;r<e&&i;r++)o.push(i),i=i.nextSibling;else if("afterbegin"===n)for(i=t.firstChild,r=0;r<e&&i;r++)o.push(i),i=i.nextSibling;else if("beforeend"===n)for(i=t.lastChild,r=0;r<e&&i;r++)o.unshift(i),i=i.previousSibling;return o}function f(t){return document.documentElement.contains(t)}n.M=function(t,n,e){if("string"!=typeof t||!t)throw new Error("persistHtml: html must be a non-empty string");if(!function(t){try{i.querySelector(t)}catch(t){return!1}return!0}(n))throw new Error("persistHtml: invalid CSS selector: "+n);if(e=null!=e?e:"before",-1===a.indexOf(e))throw new Error("persistHtml: placement must be one of: "+a.join(", "));var l=u[e],d=i.querySelector(n);if(!d)throw new Error('persistHtml: no element found for selector "'+n+'"');if(("beforebegin"===l||"afterend"===l)&&!d.parentElement)throw new Error('persistHtml: placement "'+e+'" requires the anchor element to have a parent');var v=function(t){var n=document.createElement("div");return n.innerHTML=t,n.childNodes.length}(t);if(0===v)throw new Error("persistHtml: html produces no DOM nodes");var h=function(t){var n=document.createElement("div");n.innerHTML=t;var e=[];return Array.prototype.forEach.call(n.childNodes,(function(t){if(t.nodeType===Node.ELEMENT_NODE){var n=r();e.push(n),t.setAttribute("data-optly-persist-id",n)}})),{taggedHtml:n.innerHTML,ids:e}}(t);d.insertAdjacentHTML(l,h.taggedHtml);var p,g=s(d,l,v),m=!1,b={childList:!0,subtree:!0},y=i.getDocumentElement();function w(){if(!m){m=!0,p.disconnect();var t=c.indexOf(w);-1!==t&&c.splice(t,1),g.forEach((function(t){f(t)&&t.parentNode&&t.parentNode.removeChild(t)}))}}return(p=o.create((function(){if(!m&&g.some((function(t){return!f(t)}))){var t=i.querySelector(n);!t||("beforebegin"===l||"afterend"===l)&&!t.parentElement||(p.disconnect(),g.forEach((function(t){f(t)&&t.parentNode&&t.parentNode.removeChild(t)})),m||(t.insertAdjacentHTML(l,h.taggedHtml),g=s(t,l,v)),m||p.observe(y,b))}}))).observe(y,b),c.push(w),w}},3329:function(t,n,e){e(136);var i=e(2025),r=(e(6592),e(409),e(9899).generate),o=e(9454),u=e(6643).DEFAULT_INTERVAL,a=(i.get("stores/rum"),{});function c(t){a[t]&&Object.keys(a[t].callbacks).forEach((function(n){a[t].callbacks[n].call(null)}))}function s(t,n){a[n]&&a[n].callbacks[t]&&(delete a[n].callbacks[t],0===Object.keys(a[n].callbacks).length&&(clearInterval(a[n].id),delete a[n]))}n.poll=function(t,n){"number"!=typeof n&&(n=u),a[n]||(a[n]={callbacks:{},id:o.setInterval(c.bind(null,n),n)});var e=r();return a[n].callbacks[e]=t,s.bind(null,e,n)},n.cancelAll=function(){Object.keys(a).forEach((function(t){var n=a[t];clearInterval(n.id),delete a[t]}))}},9558:function(t,n,e){var i=e(6761).Promise,r=e(7796).o;n.x=function(t){return new i((function(n,e){r(t,n,{once:!0})}))}},6726:function(t,n,e){var i=e(6761).Promise,r=e(3329).poll;n.a=function(t){return new i((function(n,e){if(t())n();else var i=r((function(){t()&&(i(),n())}))}))}},6708:function(t,n,e){var i=e(8275).omit,r=e(136),o=e(3737),u=e(188),a=e(9480),c=e(6592),s=e(8131),f=e(8674),l=e(5192),d=e(8130).v,v=e(8298),h=e(4214),p=(e(673),e(8851)),g=e(7566),m=e(409),b=e(192),y=e(2042),w=e(587),_=e(7852),E=e(9937),I=(e(5894),e(2348)),A=e(4285),S=e(2025),k=S.get("stores/dimension_data"),T=S.get("stores/view"),O=S.get("stores/view_data"),R=S.get("stores/visitor_id"),x=S.get("stores/layer_data"),N=S.get("stores/directive"),C=n.ApiListenerError=d("ApiListenerError");n.event=function(t){var n;switch(t.eventType){case"click":n=function(t){var n;return t.eventData&&(n=p.create(t.eventData.id,t.eventData.apiName,"click",t.eventData)),function(){var t=s.trackClickEvent(n);t?_.log("API / Tracking click event:",t):_.log("API / Not tracking click event:",t)}}(t);break;case"decision":n=function(t){var n=t.eventData,e=y.createLayerState(n.layerId,n.experimentId,n.variationId,n.isLayerHoldback,n.isLayerConcluded),i=y.createSingle(n.layerId,n.experimentId,n.variationId);return function(){y.recordLayerDecision(e.layerId,e.decisionTicket,e.decision),_.log("API / Tracking decision event:",e),s.trackDecisionEvent(e.decision,e.decisionTicket,i)}}(t);break;case"pageview":n=function(t){var n=I.create(t.eventData.id,t.eventData.apiName),e=I.createState(n.id);return function(){var t=s.trackViewActivation(n,e);t?_.log("API / Tracking pageview event:",t):_.log("API / Not tracking pageview event:",t)}}(t);break;default:n=function(t){var n;return t.eventId&&(n=p.create(t.eventId,t.eventName,"custom")),I.updateAllViewTags(),function(){s.trackCustomEvent(t.eventName,t.tags,n,t.properties)?_.log("API / Tracking custom event:",t.eventName,t.tags):_.log("API / Not tracking custom event:",t.eventName)}}(t)}R.getBucketingId()?n():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postActivate,cleanupFn:n})},n.clientMetadata=function(t){0},n.priorRedirectString=function(t){},n.microsnippetError=function(t){},n.rum=function(t){m.dispatch(r.SET_RUM_DATA,t.eventData)},n.initialViewStates=function(t){var n=Object.keys(t.states||{}).map((function(n){return{id:n,isActive:t.states[n]}}));I.registerViews(n)},n.page=function(t){var n=O.getByApiName(t.pageName);if(!n)throw new Error('Unknown page "'+t.pageName+'"');var e=!t.hasOwnProperty("isActive")||t.isActive,i=function(){e?I.activateViaAPI(n,t.tags):(I.deactivate(n),_.log("API / Deactivated Page",I.description(n)))};R.getBucketingId()?i():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postViewsActivated,cleanupFn:i})},n.tags=function(t){I.setGlobalTags(t.tags)},n.user=function(t){_.log("API / Setting visitor custom attributes:",t.attributes),Object.keys(t.attributes||{}).forEach((function(n){var e,i,r=t.attributes[n],o=n,u=k.getById(n)||k.getByApiName(n);u&&(o=u.id,e=u.apiName,i=u.segmentId||u.id);var a={id:i,value:r};e&&(a.name=e),D(o,a,!0)}))},n.ga4User=function(t){t.ga4UserId?(_.log("API / Setting ga4 user id in the global store:",t.ga4UserId),m.dispatch(r.SET_GA4_USER_ID,t)):_.error('API / Argument "ga4UserId" is missing')};var D=function(t,n,e){var i=[{key:e?["custom",t]:[t],value:n,metadata:{lastModified:v.now()}}],o=function(){m.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:i})};R.getBucketingId()?o():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:o})};n.optOut=function(t){var n=!t.hasOwnProperty("isOptOut")||t.isOptOut;h.setOptOut(n)},n.cookieExpiration=function(t){var n=t.cookieExpirationDays;n<90&&(_.error('Argument "cookieExpirationDays"=',n,"less than minimum days:",90,", setting to minimum."),n=90),_.log("API / Setting cookie age to",n,"days."),m.dispatch(r.SET_COOKIE_AGE,86400*n)},n.extendCookieLifetime=function(t){t=Object.assign({isEnabled:!0},t),_.log("API / Setting cookie automatic lifetime extension to",t.isEnabled),m.dispatch(r.SET_COOKIE_AUTO_REFRESH,t.isEnabled)},n.cookieDomain=function(t){_.log("API / Setting cookie domain to",t.cookieDomain),m.dispatch(r.SET_COOKIE_DOMAIN,t.cookieDomain)},n.disable=function(t){if(t.scope){if("tracking"!==t.scope)throw new Error('Unknown "scope" for disable: '+t.scope);_.log("API / Disabling tracking"),m.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else _.log("API / Disabling everything"),m.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},n.log=function(t){var n=t.level,e=t.match;void 0===n&&(n="INFO"),void 0===e&&(e=""),_.setLogMatcher(e),_.setLogLevel(n)},n.registerModule=function(t){var n="custom/"+t.moduleName;if(u[n]||o.get(n))throw new Error('Module name "'+n+'" is reserved. Will not be registered as plugin.');E.registerApiModule(n,t.module)},n.dataFromSource=function(t){var n=t.source;l.makeAsyncRequest(n),l.resolveRequest(n,t.data)},n.addListener=function(t){if("function"!=typeof t.handler)throw new Error("A handler function must be supplied");(t=i(t,["type"])).publicOnly=!0,t.emitErrors=!0;var n=t.handler;t.handler=function(t){try{return n(t)}catch(t){throw new C(t)}},g.on(t)},n.removeListener=function(t){if(!t.token)throw new Error("Must supply a token to removeListener");g.off(t.token)},n.load=function(t){t.data=Object.assign({},t.data),a.normalizeClientData(t.data),m.dispatch(r.DATA_LOADED,{data:t.data})},n.integrationSettings=function(t){if(!t.id)throw new Error("id is required");if(!t.settings)throw new Error("settings is required");m.dispatch(r.SET_INTEGRATION_SETTINGS,Object.assign({},t.settings,{id:t.id}))},n.loadEmbeddedEditor=function(){document.getElementById("optimizely-visual-editor-root")?_.warn("API / Visual editor is already loaded."):w.loadEmbeddedEditor("https://app.optimizely.com/dist/visual-editor/main.js")},n.bucketVisitor=function(t){if(!t.variationId&&void 0===t.variationIndex||t.variationId&&t.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!t.experimentId)throw new Error("An experimentId is required.");var n,e,i=t.campaignId;if(i){if(!(n=x.get(i)))throw new Error("Could not find layer "+i)}else if(!(i=(n=x.getLayerByExperimentId(t.experimentId)).id))throw new Error("Could not find layer for experiment "+t.experimentId);if(!(e=n.experiments.find((function(n){return n.id===t.experimentId}))))throw new Error("Could not find experiment "+t.experimentId+" in layer "+i);var r=t.variationId;if(void 0!==t.variationIndex){if(!(r=e.variations[t.variationIndex].id))throw new Error("Could not find variation at index "+t.variationIndex+" in experiment "+t.experimentId)}else if(!e.variations.find((function(t){return t.id===r})))throw new Error("Cound not find variation "+r+" in experiment "+t.experimentId);A.updateVariationIdMap(i,t.experimentId,r),R.getBucketingId()&&A.persistVariationIdMap(),A.updateContextualMabMap(i,t.experimentId,{variationId:r}),R.getBucketingId()&&A.persistContextualMabMap()},n.waitForOriginSync=function(t){if(!Array.isArray(t.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+b.stringify(t.canonicalOrigins));t.canonicalOrigins.forEach((function(t){if("string"!=typeof t)throw new Error("Each item in canonicalOrigins must be a string. Found type "+(void 0===t?"undefined":(n=t)&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n));var n})),m.dispatch(r.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:t.canonicalOrigins})},n.disableCrossOrigin=function(){_.log("API / cross origin tracking is DISABLED"),m.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0})},n.activate=function(){N.shouldActivate()?(T.getActiveViewStates().forEach((function(t){I.deactivate(O.get(t.id))})),m.dispatch(r.RESET_VIEW_STATES),f.emitActivateEvent()):_.debug("Not activating.")},n.sendEvents=function(){f.emitSendEvents()},n.holdEvents=function(){f.emitHoldEvents()}},8197:function(){},4860:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.flattenDeep,u=i.isEmpty,a=i.isObject,c=e(8130).v,s=n.ActivationCodeError=c("ActivationCodeError"),f=n.ProjectJSError=c("ProjectJSError"),l=e(8395),d=e(136),v=e(8131),h=e(8674),p=e(7595),g=e(8841),m=e(9480),b=e(8298),y=e(1035),w=e(2025),_=e(4214),E=e(1019),I=e(6592),A=e(7566),S=e(3111),k=e(8484),T=e(409),O=e(3672),R=e(2042),x=e(1353).DT,N=e(7852),C=e(3224),D=e(5010),j=e(9937),M=e(5385),P=e(6761).Promise,L=e(5467),U=e(5894),V=e(249),B=e(123),z=e(2348),F=e(4285),q=e(9454),G=(w=e(2025)).get("stores/session"),H=w.get("stores/audience_data"),$=w.get("stores/action_data"),Y=w.get("stores/cleanup"),W=w.get("stores/directive"),K=w.get("stores/global"),X=w.get("stores/group_data"),J=w.get("stores/layer_data"),Q=w.get("stores/layer"),Z=w.get("stores/pending_events"),tt=w.get("stores/plugins"),nt=w.get("stores/rum"),et=w.get("stores/visitor"),it=w.get("stores/view_data"),rt=w.get("stores/view"),ot=w.get("stores/visitor_id"),ut=w.get("stores/visitor_bucketing"),at=w.get("stores/xdomain"),ct=e(3737),st=e(673),ft=e(2594),lt=!1,dt=n;function vt(){h.emitActivateEvent()}function ht(t){st.handleError(t.data.error,t.data.metadata)}function pt(t,n){T.dispatch(d.SET_RUM_DATA,{data:{extras:{xdAttempt:t,xdError:n?n.toString():void 0}}})}function gt(t,n,e){t=t||[];var i=K.getGlobalHoldbackThreshold(),r=ot.getBucketingId();if(!r)throw new Error("bucketingId not set");var o,u=et.getVisitorProfile();n&&(o=ut.getVariationIdMap()[n.id]);var a={bucketingId:r,visitorProfile:u,audiences:t,globalHoldback:i,preferredVariationMap:o,layer:n};return n&&e&&y.isPageIdRelevant(n)?e.map((function(t){return y.createTicket(Object.assign({},a,{pageId:t}))})):[y.createTicket(a)]}function mt(t,n){var e={};return t.forEach((function(t){Array.isArray(t)?Object.assign(e,mt(t,n)):a(t)&&n[t.type]&&(e[t.type]=!0)})),e}function bt(t){var n=[];return t.forEach((function(t){n.push(t.name,t)})),n}function yt(t){var n=Y.getCleanupFns(t);if(n.length>0){for(;n.length>0;)n.shift()();T.dispatch(d.CLEAR_CLEANUP_FN,{lifecycle:t})}}n.initialize=function(t){return this.initGlobalStore(t.clientData),this.initializePlugins(t.plugins)},n.initGlobalStore=function(t){m.normalizeClientData(t),A.on({filter:{type:"error"},handler:ht}),T.dispatch(d.DATA_LOADED,{data:t}),N.log("Initialized with DATA:",t)},n.initializePlugins=function(t){if(Array.isArray(window.optimizely)&&(window.optimizely=window.optimizely.filter((function(t){var n=!0;return!ct.push(t,n)}))),_.setOptOut(W.shouldOptOut()),!W.isDisabled()&&!W.shouldOptOut()){ft.queueBeacons(),E.isReady()?T.dispatch(d.SET_DOMCONTENTLOADED):E.addReadyHandler((function(){T.dispatch(d.SET_DOMCONTENTLOADED)})),D.time("projectJS");var e=K.getProjectJS();if("function"==typeof e)try{k.apply(e)}catch(t){N.error("Error while executing projectJS: ",t),g.emitError(new f(t))}D.timeEnd("projectJS"),(t||[]).forEach((function(t){try{t(j)}catch(t){g.emitInternalError(t)}})),(K.getPlugins()||[]).forEach((function(t){try{k.apply(t,[j])}catch(t){g.emitError(t)}})),U.load();var i=A.on({filter:{type:"lifecycle",name:"activated"},handler:function(){et.observe(F.persistVisitorProfile),Q.observe(F.persistLayerStates),G.observe(F.persistSessionState),Z.observe(C.schedulePersistPendingEvents),ut.observe(F.persistVisitorBucketingStore),A.off(i)}});A.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:n.onViewsActivated}),A.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:n.onPageDeactivated}),n.initializeApi();var r=C.getPendingEvents();if(r&&(T.dispatch(d.LOAD_PENDING_EVENTS,{events:r}),C.retryPendingEvents(r)),A.on({filter:{type:"lifecycle",name:"activate"},handler:n.activate}),h.emitInitializedEvent(),!W.shouldActivate())return P.resolve();var o=[];if(at.isDisabled())vt();else{var u=n.initializeXDomainStorage();if(o.push(u),Boolean(at.getCanonicalOrigins())){var a=V.makeTimeoutPromise(1e3);P.race([u,a]).catch((function(t){N.error("Failed to initialize xDomain storage: ",t)})).then(vt).catch(st.handleError)}else vt()}return P.all(o)}N.log("Controller / Is disabled")},n.activate=function(){try{var t=[];N.log("Activated client"),yt(I.Lifecycle.preActivate);var n=!1;lt;var e=b.now();T.dispatch(d.ACTIVATE,{activationId:String(e),activationTimestamp:e});var i=it.getAll();z.registerViews(i,n),F.setId(F.getOrGenerateId()),t.push(v.trackPostRedirectDecisionEvent()),T.dispatch(d.MERGE_VARIATION_ID_MAP,{variationIdMap:F.getVariationIdMap()}),T.dispatch(d.MERGE_CONTEXTUAL_MAB_MAP,{contextualMabMap:F.getContextualMabMap()}),T.dispatch(d.SET_ODP_SEGMENTS,F.getOdpSegments()),T.dispatch(d.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:F.getPreferredLayerMap()}),yt(I.Lifecycle.postVisitorProfileLoad),t.push((s=tt.getAllPlugins(I.PluginTypes.visitorProfileProviders),f=et.getVisitorProfile(),F.populateEagerVisitorData(s,f)).then((function(){N.log("Populated visitor profile")})));var r=gt(),o=y.decideGlobal(r);N.log("Made global decision",r,"->",o),T.dispatch(d.RECORD_GLOBAL_DECISION,o);var u=v.trackClientActivation();u?N.log("Tracked activation event",u):N.log("Not tracking activation event");var a=dt.setUpViewActivation(i),c=[];return a.forEach((function(t){c=c.concat(z.activateMultiple([t]))})),yt(I.Lifecycle.postViewsActivated),rt.getActiveViewStates().length||h.emitCampaignsDecided([]),yt(I.Lifecycle.postActivate),h.emitActivatedEvent(),P.all(t).then((function(){A.emit({type:S.TYPES.LIFECYCLE,name:"activateDeferredDone"}),N.log("All immediate effects of activation resolved")}),g.emitError)}catch(t){return g.emitError(t),P.reject(t)}var s,f},dt.setUpViewActivation=function(t){var n=[];return t.forEach((function(t){"boolean"==typeof rt.getViewState(t.id).isActive&&z.isActivationTypeImmediate(t.activationType)?N.debug("Skipping page: already evaluated, presumably at the edge",z.description(t)):z.shouldTriggerImmediately(t.activationType)?n.push(t):t.activationType===I.ViewActivationTypes.callback?(N.debug("Setting up conditional activation for Page",z.description(t)),dt.activateViewOnCallback(t)):t.activationType===I.ViewActivationTypes.polling?(N.debug("Setting up polling activation for Page",z.description(t)),M.pollFor(k.apply.bind(null,t.activationCode),null,B.isTimedOut.bind(null,b.now())).then((function(){z.activateMultiple([t])})).catch((function(n){N.warn("Failed to activate view ",t,n)}))):t.activationType!==I.ViewActivationTypes.manual&&g.emitError(new Error("Unknown view activationType: "+t.activationType))})),n},dt.activateViewOnCallback=function(t){var n={pageId:t.id};Object.defineProperty(n,"isActive",{get:function(){return rt.isViewActive(t.id)}});try{k.apply(t.activationCode,[function(n){var e=Object.assign({},n,{pageName:t.apiName,type:"page"});ct.push(e)},n])}catch(n){var e=new s("("+n.toString()+") in activationCode for "+z.description(t));g.emitError(e,{originalError:n,userError:!0})}},n.onViewsActivated=function(t){var e,i=t.data.views,r=i.map((function(t){return t.id}));try{if(!ot.getBucketingId())throw new Error("View activated with no visitorId set");var o=function(t){var e=J.getAllByPageIds(t),i=W.getForceVariationIds(),r=W.getForceAudienceIds(),o=!u(i);o&&N.log("Force variations are in use. Disabling mutual exclusivity.");var a=o?{individual:e}:e.reduce((function(t,n){return n.groupId?t.groups[n.groupId]||(t.groups[n.groupId]=X.get(n.groupId)):t.individual.push(n),t}),{groups:{},individual:[]});if(N.log("Deciding Campaigns/Experiments for Page(s)",t),a.groups){var c=Object.keys(a.groups).map((function(t){return O.description(a.groups[t])})).join(", ");N.log("Groups:",c)}var s=a.individual.map(R.description).join(", ");N.log("Campaigns/Experiments not in Groups (by Campaign id):",s);var f=Object.keys(a.groups||{}).map((function(e){return function(t,e,i,r){try{var o=function(t){return{bucketingId:ot.getBucketingId(),preferredLayerId:ut.getPreferredLayerMap()[t.id]}}(r),a=y.decideGroup(r,o);if(a.reason)return N.debug("Not activating Group",O.description(r),"; reason:",a.reason),nt.getSampleRum()&&T.dispatch(d.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:r.id}),P.resolve();var c=J.get(a.layerId);if(!c)return N.debug("Visitor was bucketed into a Campaign ("+a.layerId+") which is not in this snippet"),P.resolve();var s=(c.pageIds||[]).filter((function(t){return Array.isArray(i)&&i.includes(t)}));return u(s)?(N.debug("Not activating Group",O.description(r),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),P.resolve()):(nt.getSampleRum()&&T.dispatch(d.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:r.id}),n.decideAndExecuteLayerASAP(t,e,s,c))}catch(t){return N.error("Error getting decision for Group",O.description(r),"; ",t),P.reject(t)}}(i,r,t,a.groups[e])}))||[],l=a.individual.map((function(e){var o=(e.pageIds||[]).filter((function(n){return Array.isArray(t)&&t.includes(n)}));return n.decideAndExecuteLayerASAP(i,r,o,e)})),v=f.concat(l);return P.all(v).then((function(n){var e=n.filter((function(t){return!!t}));return N.log("All Campaigns/Experiments for Page(s) (by Campaign id)",t,"resolved:",e.map(R.description).join(", ")),e}))}(r).catch(g.emitError);return o.then((function(){h.emitCampaignsDecided(r)})),e=P.all(i.map((function(t){var n=function(){z.parseViewTags(t);var n=v.trackViewActivation(t);n?N.log("Tracked activation for Page",z.description(t),n):N.log("Not Tracking activation for Page",z.description(t))};return E.isReady()?P.resolve(n()):M.pollFor(E.isReady,1e3).then(n)}))),P.all([o,e])}catch(t){g.emitError(t)}},n.onPageDeactivated=function(t){var n=t.data.page;($.getAllActionIdsByPageId(n.id)||[]).forEach((function(t){var e=$.getActionState(t);e&&(Object.keys(e).forEach((function(t){var i=e[t];if(i.cancel)try{i.cancel(),N.debug("Controller / Canceled change",t,"observation due to deactivation of page:",n)}catch(n){N.error("Controller / Error canceling change",t,"observation upon deactivation of page.",n)}if(n.undoOnDeactivation&&i.undo)try{i.undo(),N.debug("Controller / Undid change",t,"due to deactivation of page:",n)}catch(t){N.error("Controller / Error undoing change upon deactivation of page.",t)}})),T.dispatch(d.REMOVE_ACTION_STATE,{actionId:t}),N.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",n,t))}))},n.initializeApi=function(){var t={push:ct.push};t.get=ct.get;var n=window.optimizely;Array.isArray(n)&&n.forEach((function(n){t.push(n)})),t.data={note:"Obsolete, use optimizely.get('data') instead"},t.state={},window.optimizely=t},n.persistItemsWithId=function(t){return Object.keys(t).forEach((function(n){var e=t[n];F.checkKeyForVisitorId(n)&&x.setItem(n,e)})),t},n.initializeXDomainStorage=function(){var t=e(5292),i=!!F.getCurrentId(),r=!!i&&F.hasSomeData();i?r?N.log("xd / Existing visitor; has data on this origin"):N.log("xd / Existing visitor; new to this origin"):N.log("xd / New visitor");var o=K.getAccountId(),a="https://a10453949094.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+o+"."),c="/client_storage/a"+o+".html";t.subscribe((function(t,n){F.checkKeyForVisitorId(t)&&x.setItem(t,n)}));var s=t.fetchAll().then((function(n){if(!ot.getVisitorIdLocator()){var e=at.getCanonicalOrigins();if(e){var i=t.getXDomainUserId(n,e);i&&(N.log("Syncing cross-origin visitor randomId:",i),F.maybePersistVisitorId({randomId:i}))}}return F.deleteOldForeignData(),n})).then(n.persistItemsWithId).then((function(t){if(F.loadForeignData(),i&&!r){var n=!u(t);N.debug("xd / Loaded foreign data? ",n),pt(n)}N.log("Loaded visitor data from foreign origins"),h.emitOriginsSyncedEvent()}),(function(t){throw i&&!r&&(N.debug("xd / Failed to load foreign data:",t),pt(!1,t)),t}));return P.all([t.load(a,c).catch((function(t){throw N.debug("xd / Failed to load iframe:",t),i&&!r&&pt(!1,t),t})),s.catch((function(t){N.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",t.message),N.debug("xd / Enqueuing sync to happen after visitorId set."),T.dispatch(d.ADD_CLEANUP_FN,{lifecycle:I.Lifecycle.postVisitorProfileLoad,cleanupFn:h.emitOriginsSyncedEvent})}))])},n.decideAndExecuteLayerASAP=function(t,e,i,a){return new P((function(c,s){try{!function(t,n,e,i,r){if(n.length||e.length)return void r(gt([],void 0,i));var a=R.relatedAudienceIds(t),c=a.reduce((function(t,n){var e=H.get(n);return e&&t.push(e),t}),[]),s=tt.getAllPlugins(I.PluginTypes.audienceMatchers);if(nt.getSampleRum()){var f={};if(c.forEach((function(t){Object.assign(f,mt(t.conditions,s))})),!u(f)){var l=Object.keys(f);T.dispatch(d.RECORD_AUDIENCE_USAGE,{audienceTypes:l,layerId:t.id})}}var v=function(t){N.debug("Audience list for extracting types",t);try{var n=new Set(o(t.map((function(t){return t.conditions}))).filter((function(t){return null!=t&&"string"!=typeof t})).map((function(t){return t.type})));return n.has("time_and_day")&&n.add("currentTimestamp"),N.debug("Extracted unique types from audiences",n),n}catch(t){return N.error("An error occurred while extracting types from audiences:",t),new Set}}(c),h=tt.getAllPlugins(I.PluginTypes.visitorProfileProviders),g=et.getVisitorProfile();F.populateLazyVisitorData(h,g,v),function(t,n,e,i){var r=t.reduce((function(t,e){return Object.assign(t,p.requiredAudienceFieldsForConditions(e.conditions,n))}),{}),o=Object.keys(r).reduce((function(t,n){var e=r[n];if(void 0===F.getAttribute(e)){var i=F.getPendingAttributeValue(e);void 0!==i&&t.push(i)}return t}),[]);if(0===o.length)return i();var a=[].concat(t),c=L.firstToResolve(o.map((function(t){return P.resolve(t).then((function(){var t=et.getVisitorProfile();if(a=a.filter((function(e){return void 0===p.isInAudience(t,e,n)})),!u(a))throw new Error("At least one audience is still pending")}))})));P.race([c,new P((function(t,n){q.setTimeout(n,e)}))]).then((function(){N.log("Activating Campaign after pending Audiences resolved",t),i()}),(function(){N.log("Activating Campaign after timeout on Audiences",t),i()}))}(c,s,R.getActivationTimeout(t),(function(){var n=gt(c,t,i);n.forEach((function(n){!function(t,n,e){var i=t.audienceIds.map(H.get.bind(H)).filter(Boolean),r=n.filter((function(n){return!t.audienceIds.includes(n.id)}));N.log("When deciding Campaign",R.description(e),"visitor is in audiences:",bt(i),"and not in audiences:",bt(r))}(n,c,t)})),r(n)}))}(a,t,e,i,(function(o){o.forEach((function(o){var c=o.pageId?[o.pageId]:i;N.debug("Deciding layer: ",a,"with decisionTicket: ",o,"and actionViewIds: ",c),function(t,e,i,o,a){var c=R.description(t);N.log("Activating Campaign",c,"on Page(s)",o),i.length&&(N.log("Applying force audienceIds:",i,"to Campaign",c),(a=r(a)).audienceIds=i);var s=n.decideLayer(t,a,e),f=!(!e.length&&!i.length),p=n.getActionsForDecision(t,s,f),g=function(t,n){return t.filter((function(t){return void 0===t.pageId||n.includes(t.pageId)}))}(p.actions,o);if(p.maybeExecute&&function(t,n,e,i){var r=R.description(n);N.log("Preparing actions",t,"for Campaign",r,"on Page(s)",i),t.forEach(l.prepareAction)}(g,t,0,o),o.forEach((function(){v.trackDecisionEvent(s,a,t)})),h.emitLayerDecided({layer:t,decisionTicket:a,decision:s}),s.error)throw s.error;if(nt.getSampleRum()){T.dispatch(d.RECORD_LAYER_POLICY_USAGE,{policy:t.policy,layerId:t.id});var m=function(t){var n={};return t.forEach((function(t){t.changeSet.forEach((function(t){n[t.type]||(n[t.type]=!0)}))})),n}(p.actions);T.dispatch(d.RECORD_CHANGE_TYPE_USAGE,{changeTypes:Object.keys(m),layerId:t.id}),u(t.integrationSettings)||T.dispatch(d.RECORD_INTEGRATION_USAGE,{integrations:R.getIntegrationTypes(t),layerId:t.id})}if(!y.isInCohort(s))return void N.log("Not activating Campaign: "+R.description(t)+"; not in the cohort because:",s.reason);p.maybeExecute&&function(t,n,e,i){var r=R.description(n);N.log("Executing actions",t,"for Campaign",r,"on Page(s)",i),P.all(t.map((function(t){return l.executePreparedAction(t).then(h.emitActionAppliedEvent.bind(null,t))}))).then((function(){N.log("All page actions for",e,"applied:",t),h.emitActionsForDecisionAppliedEvent(e,t)})).catch((function(t){N.warn("Error evaluating page actions for decision",e,"because:",t)}))}(g,t,s,o)}(a,t,e,c,o)})),c(a)}))}catch(t){N.error("Error getting decision for Campaign: "+R.description(a),t),s(t)}}))},n.decideLayer=function(t,n,e){var i;var r=R.description(t);i=e.length?y.getDummyLayerDecision(t,e):y.decideLayer(t,n),N.log("Recording decision for Campaign",r,n,"->",i),R.recordLayerDecision(t.id,n,i),i.variationId&&i.experimentId&&F.updateVariationIdMap(t.id,i.experimentId,i.variationId),t.groupId&&F.updatePreferredLayerMap(t.groupId,t.id);return i},n.getActionsForDecision=function(t,n,e){var i=R.description(t),r="NOT applying changes for Campaign",o={actions:[],maybeExecute:!1};if(o.actions=[].concat($.getLayerActions(n.layerId)||[],$.getExperimentActions(n.experimentId)||[],$.getExperimentVariationActions(n.experimentId,n.variationId)||[]),!e&&K.isGlobalHoldback())return N.log(r,i,"(visitor is in global holdback)"),o;if(n.isLayerHoldback)return N.log(r,i,"(visitor is in layer holdback)"),o;if(!n.experimentId||!n.variationId)return N.log(r,i,"(visitor is not eligible for any Experiments)"),o;return o.maybeExecute=!0,N.log("Got Actions for Campaign:",i,o.actions),o}},6546:function(t,n,e){var i=e(6761).Promise,r=e(8298),o=e(2025).get("stores/plugins"),u=e(6592),a=e(7852);n.create=function(t,n,e){var c={identifier:t.id,action:n,startTime:e||r.now()};try{var s=o.getPlugin(u.PluginTypes.changeAppliers,t.type);if(!s)throw new Error("Unrecognized change type "+t.type);return new s(t,c)}catch(t){return a.error("Change applier was never properly constructed:",t),{apply:function(){return i.reject(t)}}}}},8486:function(t){t.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}},9114:function(t,n,e){var i=e(8275).isEmpty,r=e(8486).CHANGE_DATA_KEY;function o(t,n){return[t,n].join("_")}n.getData=function(t,n,e){var i=o(n,e);return t[r]&&t[r][i]?t[r][i]:null},n.hasData=function(t){return Boolean(t&&t[r]&&!i(t[r]))},n.removeData=function(t,n,e){t[r]&&delete t[r][o(n,e)]},n.setData=function(t,n,e,i){if("object"!=typeof i)throw new Error("setData expects an object");t[r]||(t[r]={}),t[r][o(n,e)]=i}},8421:function(t,n,e){var i=e(3826);t.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",SRCSET:"srcset",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}},8395:function(t,n,e){var i=e(136),r=e(8841),o=e(5192),u=e(8130).v,a=e(8298),c=e(2025),s=e(409),f=e(7852),l=e(6761).Promise,d=e(7219),v=c.get("stores/global"),h=c.get("stores/action_data"),p=c.get("stores/change_data"),g=c.get("stores/session"),m=e(6546);e(123).initialize();var b=u("ActionError");function y(t,n,e){if(h.getActionState(n.id))if(void 0===h.getChangeApplier(t.id,n.id)){var r={changeId:t.id,actionId:n.id,changeApplier:m.create(t,n,e)};s.dispatch(i.SET_CHANGE_APPLIER,r)}else f.warn("Action / Attempted to prepare a change which is already being applied: ",t);else f.warn("Action / Attempted to prepare change for inactive action: ",n)}function w(t,n,e,i){if(!i.includes(n)){if(!t[String(n)]){var u=p.getChange(n);if(!u){var c="Change with id "+n+" is absent";return i.length&&(c+=" but listed as a dependency for "+i[i.length-1]),void f.warn(c)}t[String(n)]=new l((function(c){var s=(u.dependencies||[]).map((function(r){return w(t,r,e,i.concat([n]))}));if(u.src){var v="change_"+u.src,g=o.makeAsyncRequest(v,(function(){return d.addScriptAsync("https://cdn.optimizely.com/public/10453949094/data"+u.src,(function(){o.resolveRequest(v)}))})).then((function(){var t=p.getChange(u.id);t||r.emitError(new b("Failed to load async change from src: "+u.src)),y(t,e,a.now())}));s.push(g)}l.all(s).then((function(){var t=a.now(),i=h.getChangeApplier(n,e.id);return i?(f.debug("Action / Applying change:",u),i.apply().then((function(n){n?f.log(n):f.debug("Action / Applied change for the first time in "+(a.now()-t)+"ms:",u),c()}))):(f.debug("Action / Not applying change ",n," - No changeApplier found."),void c())})).catch((function(t){f.error("Action / Failed to apply change:",u,t),c()}))}))}return t[String(n)]}f.error("Change with id "+n+" has circular dependencies: "+i.concat(n))}n.prepareAction=function(t){f.debug("Action / Preparing:",t),s.dispatch(i.ACTION_EXECUTED,{actionId:t.id,sessionId:g.getSessionId(),layerId:t.layerId,pageId:t.pageId,timestamp:a.now(),activationId:v.getActivationId()});var n=a.now();t.changeSet.forEach((function(e){var r="object"==typeof e&&null!==e?e.id:e,o=p.getChange(r);o||(s.dispatch(i.ADD_CHANGE,e),o=p.getChange(r)),o.src||y(o,t,n)}))},n.executePreparedAction=function(t){f.debug("Action / Executing:",t);var n={},e=t.changeSet.map((function(e){var i="object"==typeof e&&null!==e?e.id:e;return w(n,i,t,[])}));return l.all(e).then((function(){f.debug("changes for action id="+t.id+" applied")}))}},123:function(t,n,e){var i=e(8486),r=e(2025).get("stores/directive");function o(){("interactive"===document.readyState||"complete"===document.readyState)&&(n.domReadyTime=Date.now())}n.domReadyTime=null,n.initialize=function(){o(),document.addEventListener("readystatechange",o,!0)},n.isTimedOut=function(t){var e=Date.now();if(!n.domReadyTime||!t)return!1;var o=Math.max(t,n.domReadyTime);return r.isEditor()&&(o=n.domReadyTime),!(e-o<i.SELECTOR_POLLING_MAX_TIME)}},8131:function(t,n,e){var i=e(8275),r=i.omit,o=i.pick,u=e(136),a=e(8841),c=e(8674),s=e(2575),f=e(8298),l=e(7871),d=e(2025),v=e(1019),h=e(6592),p=e(8421),g=e(5225),m=e(7566),b=e(3111),y=e(1320),w=e(409),_=e(2042),E=e(7852),I=(e(5010),e(6761).Promise),A=e(3272),S=e(5894),k=e(249),T=e(6938),O=e(9899),R=d.get("stores/client_metadata"),x=d.get("stores/global"),N=d.get("stores/session"),C=d.get("stores/view"),D=d.get("stores/plugins"),j=d.get("stores/layer"),M=d.get("stores/layer_data"),P=d.get("stores/observed_redirect"),L=d.get("stores/pending_redirect"),U=d.get("stores/visitor"),V=d.get("stores/directive"),B=d.get("stores/event_data"),z=d.get("stores/visitor_id");function F(t,n,e){return void 0===e&&(e=!1),Object.assign({},t,{isLayerHoldback:n,isLayerConcluded:e,isGlobalHoldback:!1,clientName:null!==t.clientName?t.clientName:l.NAME,integrationStringVersion:null!==t.integrationStringVersion?t.integrationStringVersion:1,anonymizeIP:null!==x.getAnonymizeIP()?x.getAnonymizeIP():void 0,activationId:x.getActivationId(),decisionTicketAudienceIds:[],sessionId:N.getSessionId(),activeViewStates:[],userFeatures:$(U.getVisitorProfile()),layerStates:j.getLayerStatesForAnalytics()})}function q(t){var n=A.getReferrer()||v.getReferrer();return{eventId:O.generate(),timestamp:f.now(),revision:x.getRevision(),clientName:R.getClientName(),clientVersion:R.getClientVersion(),projectId:x.getProjectId(),accountId:x.getAccountId(),activationId:x.getActivationId(),sessionId:N.getSessionId(),isGlobalHoldback:x.isGlobalHoldback(),namespace:x.getNamespace(),referrer:n,visitorId:z.getRandomId(),activeViewStates:t.activeViewStates,layerStates:t.layerStates,userFeatures:$(t.visitorProfile,!t.deferBehaviorFeatures)}}function G(t){var n,e;return t.pageId?(n=t.pageId,(e=C.getViewState(n))&&e.isActive?e.metadata:{}):{}}function H(){try{var t=M.getExperimentsMap()||{},n=[],i=Object.create(null);if(Object.keys(t).forEach((function(e){var r=t[e]&&t[e].experimentMetadata;(r&&r.cmabAttributes&&r.cmabAttributes.vbaAttributes||[]).forEach((function(t){t&&t.featureName&&!i[t.featureName]&&(i[t.featureName]=!0,n.push(t))}))})),!n.length)return[];var r=e(8620).getEvents();return e(5560).buildVbaFeatures(n,r,f.now()).map((function(t){return{id:t.id,name:t.id,type:t.type,value:t.value,shouldIndex:!0}}))}catch(t){E.warn("CMAB / VBA / Error building visitor behavior features",t)}return[]}function $(t,n){void 0===n&&(n=!0);var e=D.getAllPlugins(h.PluginTypes.visitorProfileProviders),i=Object.values(e).filter((function(t){return!0===t.shouldTrack})),r={id:null,type:null,name:"",value:null,shouldIndex:!0},u=i.reduce((function(n,e){try{var i=e.provides,u=t[i],a=[];if(void 0!==u){null!==u&&"object"==typeof u?a=Object.keys(u).map((function(t){var n=u[t],e=null!==n&&"object"==typeof n?n:{value:n};return Object.assign({},{type:i,name:t},e)})):a.push({type:i,value:u});var c=a.map((function(t){return o(Object.assign({},r,t),Object.keys(r))})).filter((function(t){return!!t.value}));n=n.concat(c)}}catch(t){E.warn("Error evaluating userFeature against visitorProfile:",t)}return n}),[]);return n?u.concat(H()):u}function Y(t){t&&t.userFeatures&&(t.userFeatures=t.userFeatures.concat(H()))}function W(t,n,e){var i=function(t,n){var e=[],i=D.getAllPlugins(h.PluginTypes.analyticsTrackers);return Object.keys(i).forEach((function(r){var o=i[r];if(o[t]&&(!n||!o[n]))try{e.push({name:r,hookFn:d.evaluate(o[t])})}catch(t){E.error(t)}})),e}(t,e);E.debug("Found "+i.length+" analytics integrations defining a "+t+" hook"),E.debug("Calling each with data: ",n),i.forEach((function(t){try{E.debug("Calling plugin: "+t.name),t.hookFn(n),E.debug("Called plugin: "+t.name)}catch(t){E.error(t)}}))}function K(t,n,e){var i=function(t,n){0;var e=[],i=D.getAllPlugins(h.PluginTypes.analyticsTrackers);return Object.keys(i).forEach((function(r){var o=i[r];n.includes(o[t])&&e.push({name:r,hookFn:o.trackLayerDecision})})),e}(t,n);E.debug("Found "+i.length+" analytics integrations  defining a trackLayerDecision "+t+" timing of "+n.join("|")),E.debug("Calling each with data: ",e),i.forEach((function(t){try{E.debug("Calling plugin: "+t.name),t.hookFn(e),E.debug("Called plugin: "+t.name)}catch(t){E.error(t)}}))}n.trackClientActivation=function(){if(!e(4308).shouldDrop()&&V.shouldSendTrackingData()){var t,n=(t=q({activeViewStates:[],visitorProfile:U.getVisitorProfile(),layerStates:j.getLayerStatesForAnalytics()}),Object.assign(t,{eventTags:{}}));return W("onClientActivation",n),n}},n.trackCustomEvent=function(t,n,i,o){if(!e(4308).shouldDrop()){n=n||{},o=o||{},i||(i=B.getByApiName(t));var u=function(t,n,e,i){var r=q({activeViewStates:C.getActiveViewStates(),visitorProfile:U.getVisitorProfile(),layerStates:j.getLayerStatesForAnalytics(),deferBehaviorFeatures:!0}),o=i&&i.pageId?G(i):C.getActiveViewTags(),u=Object.assign({},o,n),a=i&&i.category?i.category:g.OTHER;return Object.assign(r,{eventEntityId:i&&i.id,eventApiName:t,eventCategory:a,eventTags:u,eventProperties:e})}(t,n,o,i),c={name:t,type:y.CUSTOM,category:u.eventCategory,tags:r(u.eventTags,["revenue"])};if(void 0!==n.revenue&&(c.revenue=n.revenue),a.emitAnalyticsEvent({name:i?i.name||i.apiName:t,apiName:i?i.apiName:void 0,type:y.CUSTOM,properties:u.eventProperties,tags:r(u.eventTags,["revenue"]),category:u.eventCategory,metrics:c.revenue?{revenue:c.revenue}:{}},!V.shouldSendTrackingData()),V.shouldSendTrackingData())return s.addEvent(c),Y(u),W("onCustomEvent",u),u}},n.trackDecisionEvent=function(t,n,i){if(!e(4308).shouldDrop()){i||(i=M.get(t.layerId));var r=O.generate();w.dispatch(u.RECORD_LAYER_DECISION_EVENT_ID,{layerId:t.layerId,pageId:n.pageId,decisionId:r});var o=t.experimentId?i.experiments.find((function(n){return n.id===t.experimentId})):null,a=function(t,n,e,i,r){var o=null,u=null,a=null;if(r&&(o=r.name||null,a=r.integrationSettings,n.variationId)){var c=r.variations.find((function(t){return t.id===n.variationId}));c&&(u=c.name||null)}var s=A.getReferrer()||v.getReferrer(),l={sessionId:N.getSessionId(),decisionTicketAudienceIds:e.audienceIds,visitorId:z.getRandomId(),decisionId:t,activationId:x.getActivationId(),namespace:x.getNamespace(),timestamp:f.now(),pageId:e.pageId||null,variationId:n.variationId,variationName:u,experimentId:n.experimentId,experimentName:o,layerId:n.layerId,layerName:i.name,layerPolicy:i.policy,accountId:x.getAccountId(),projectId:x.getProjectId(),revision:String(x.getRevision()),clientName:R.getClientName(),clientVersion:R.getClientVersion(),referrer:s,integrationStringVersion:i.integrationStringVersion||1,integrationSettings:Object.assign({},i.integrationSettings,a)};return l}(r,t,n,i,o),s=L.isExpectingRedirect(),l=L.getLayerId(),d=_.description(i);if(s&&l===i.id&&(S.persist(a,"COOKIE"),E.log("Relaying decision for redirect Campaign",d)),V.shouldSendTrackingData()){var h=F(a,t.isLayerHoldback,t.isLayerConcluded);if(s&&l===i.id){var g=T.TrackLayerDecisionTimingFlags.preRedirectPolicy;h.timing=g,K(g,[T.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],h),E.log("Called trackLayerDecision for redirect Campaign",d,h)}else{g=T.TrackLayerDecisionTimingFlags.nonRedirectPolicy;h.timing=g,K(g,[T.NonRedirectPolicies.TRACK_IMMEDIATELY],h),E.log("Called trackLayerDecision for non-redirect Campaign",d,h)}(function(t){return!(!t||!t.variations)&&t.variations.some((function(t){return!!t.actions&&t.actions.some((function(t){return!(!t||!t.changes)&&t.changes.some((function(t){return t.type===p.changeType.REDIRECT}))}))}))})(o)&&(w.dispatch(u.SET_TRACKER_USE_BEACON,!0),c.emitMaybeSendEvents(),w.dispatch(u.SET_TRACKER_USE_BEACON,!1))}else E.log("Analytics / Not tracking decision for Campaign",_.description(i))}},n.trackPostRedirectDecisionEvent=function(){if(e(4308).shouldDrop()||!V.shouldSendTrackingData()||P.hasTracked())return I.resolve();var t=P.get();if(!t)return I.resolve();var n=F(t,!1),i=T.TrackLayerDecisionTimingFlags.postRedirectPolicy;n.timing=i,K(i,[T.PostRedirectPolicies.TRACK_IMMEDIATELY],n);var r=new I((function(t){var n=m.on({filter:{type:b.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){t(),m.off(n)}})})),o=k.makeTimeoutPromise(1e3);return I.race([r,o]).then((function(){E.log("Calling trackers after successful sync")}),(function(t){E.warn("Calling trackers after failed sync:",t)})).then((function(){(n=F(t,!1)).timing=T.TrackLayerDecisionTimingFlags.postRedirectPolicy,K(T.TrackLayerDecisionTimingFlags.postRedirectPolicy,[T.PostRedirectPolicies.TRACK_AFTER_SYNC],n),w.dispatch(u.REGISTER_TRACKED_REDIRECT_DATA)})).catch((function(t){E.error("Error when calling trackers after sync:",t)}))},n.trackClickEvent=function(t){if(!e(4308).shouldDrop()){var n=function(t){var n=q({activeViewStates:C.getActiveViewStates(),visitorProfile:U.getVisitorProfile(),layerStates:j.getLayerStatesForAnalytics(),deferBehaviorFeatures:!0}),e=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector,i=t.apiName,r=t.category||g.OTHER,o=t.id,u=G(t);return Object.assign(n,{eventApiName:i,eventCategory:r,eventEntityId:o,eventTags:u,pageId:t.pageId,selector:e})}(t),i={name:t.apiName,type:t.eventType,category:n.eventCategory,tags:n.eventTags};if(a.emitAnalyticsEvent({name:t.name||t.apiName,apiName:t?t.apiName:void 0,type:t.eventType,category:n.eventCategory,tags:n.eventTags,metrics:{}},!V.shouldSendTrackingData()),V.shouldSendTrackingData())return s.addEvent(i),Y(n),W("onClickEvent",n),n}},n.trackViewActivation=function(t,n){if(!e(4308).shouldDrop())if(n||(n=C.getViewState(t.id)),n.isActive){var i=function(t,n){var e=q({activeViewStates:C.getActiveViewStates(),visitorProfile:U.getVisitorProfile(),layerStates:j.getLayerStatesForAnalytics(),deferBehaviorFeatures:!0});return Object.assign(e,{pageId:t.id,pageApiName:t.apiName,viewCategory:t.category,eventTags:n.metadata})}(t,n);if(a.emitAnalyticsEvent({name:t.name||i.pageApiName,apiName:i.pageApiName,type:y.PAGEVIEW,category:i.viewCategory,tags:i.eventTags,metrics:{}},!V.shouldSendTrackingData()),V.shouldSendTrackingData())return s.addEvent({name:i.pageApiName,type:y.PAGEVIEW,category:i.viewCategory,tags:i.eventTags}),Y(i),w.dispatch(u.TRACK_VIEW_ACTIVATED_EVENT,{pageId:t.id,eventData:i}),W("onPageActivated",i),i}else E.debug("Inactive view passed to `trackViewActivation`")}},5894:function(t,n,e){var i=e(136),r=e(6278),o=e(8841),u=e(2025),a=e(6592),c=e(409),s=e(7852),f=e(6938),l=u.get("stores/plugins"),d=".",v=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(t){return t.map(encodeURIComponent).join(",")},encodeValueString:function(t){return t},decodeValueString:function(t){return t},valueFromValueString:function(t){return t.split(",").map(r.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:function(t,n){var e=null;if(t){var i=l.getPlugin(a.PluginTypes.analyticsTrackers,n);if(i&&"function"==typeof i.serializeSettings)try{e=i.serializeSettings(t)}catch(t){s.warn("Analytics / Failed to persist integrationSettings for plugin:",n,t)}}return e},valueFromValueString:function(t,n){var e=null,i=l.getPlugin(a.PluginTypes.analyticsTrackers,n);if(i&&"function"==typeof i.deserializeSettings)try{e=i.deserializeSettings(t)}catch(t){s.warn("Analytics / Failed to persist integrationSettings for plugin:",n,t)}return e},isNullable:!0}],h={},p={};v.forEach((function(t){h[t.name]=t,p[t.relayName]=t})),n.persist=function(t,n){n===f.RedirectRelayMedia.COOKIE?function(t){try{var n=function(t){var n=[],e=Object.keys(t).reduce((function(e,i){var r=t[i],o=h[i];return o?(o.isMulti?Object.keys(r).forEach((function(t){var n=r[t];null!==(n=o.valueToValueString?o.valueToValueString(n,t):String(n))&&(n=(o.encodeValueString||encodeURIComponent)(n),e.push(encodeURIComponent(o.relayName+d+t)+"="+n))})):null!==r&&(r=(o.valueToValueString||String)(r),r=(o.encodeValueString||encodeURIComponent)(r),e.push(o.relayName+"="+r)),e):(n.push(i),e)}),[]);if(n.length)throw new Error("Relay / Don't know how to relay some fields: "+n);return e.sort(),e.join("&")}(t)}catch(t){return s.error("Relay / Error computing redirect relay cookie: ",t),void o.emitError(t)}s.debug("Relay / Setting redirect relay cookie:",n);try{r.set(a.COOKIES.REDIRECT,n,{maxAge:5,encodeValue:!1})}catch(t){s.error("Relay / Failed to set redirect relay cookie",t),o.emitError(t)}}(t):s.error("Relay / Unsupported redirect relay medium: "+n)},n.load=function(t){if(t||(t=function(){var t=r.get(a.COOKIES.REDIRECT,!1);if(t)return s.log("Relay / Found redirect cookie:",t),t}()),t){var n=function(t){var n={};return t.split("&").forEach((function(t){var e=t.split("=");if(2===e.length){var i=r.safeDecodeURIComponent(e[0]),u=p[i];if(u||(u=v.find((function(t){return t.isMulti&&0===i.indexOf(t.relayName+d)})))){var a=e[1];try{if(u.isMulti){n[u.name]=n[u.name]||{};var c=i.substring(u.relayName.length+1);a=(u.decodeValueString||r.safeDecodeURIComponent)(a),a=(u.valueFromValueString||function(t){return t})(a,c),n[u.name][c]=a}else a=(u.decodeValueString||r.safeDecodeURIComponent)(a),a=(u.valueFromValueString||function(t){return t})(a),n[u.name]=a}catch(n){return s.warn("Relay / Skipping segment due to decode or parse error:",t,n),void o.emitError(n)}}else s.warn("Relay / Skipping segment with unknown field identifier:",t,i)}else s.warn("Relay / Skipping invalid segment:",t)})),n}(t);if(n){var e=[];if(v.forEach((function(t){null!==n[t.name]&&void 0!==n[t.name]||(t.isNullable?n[t.name]=null:(delete n[t.name],e.push(t.name)))})),!e.length)return c.dispatch(i.LOAD_REDIRECT_DATA,n),c.dispatch(i.ADD_CLEANUP_FN,{lifecycle:a.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){var t,e;e=(t=n).pageId||void 0,c.dispatch(i.RECORD_LAYER_DECISION,{layerId:t.layerId,decision:{layerId:t.layerId,experimentId:t.experimentId,variationId:t.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:t.decisionTicketAudienceIds,bucketingId:t.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:e,activationId:t.activationId},sessionId:t.sessionId,activationId:t.activationId,timestamp:t.timestamp,revision:t.revision,namespace:t.namespace,pageId:e}),c.dispatch(i.RECORD_LAYER_DECISION_EVENT_ID,{layerId:t.layerId,pageId:e,decisionId:t.decisionId}),c.dispatch(i.ACTION_EXECUTED,{sessionId:t.sessionId,layerId:t.layerId,pageId:t.pageId,timestamp:t.timestamp,activationId:t.activationId})}}),n;s.error("Relay / Observed redirect data with missing fields:",e)}}}},8841:function(t,n,e){var i=e(7566);n.emitError=function(t,n,e){i.emit({type:"error",name:t.name||"Error",data:{error:t,metadata:n}},e||!1,!0)},n.emitInternalError=function(t,e){n.emitError(t,e,!0)},n.emitAnalyticsEvent=function(t,n){var e={type:"analytics",name:"trackEvent",data:t};i.emit(e,n)}},7595:function(t,n,e){var i=e(5421),r=e(8859),o=e(7852),u=e(4285);function a(t,n){var e="function"==typeof t?t(n):t;return"string"==typeof e&&(e=[e]),Array.isArray(e)?e:(o.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function c(t){return t.name?t.name+" ("+t.id+")":t.id}n.isInAudience=function(t,n,e){var u,s=function(t,n){return function(e){var i=e.type,u=n[i];if(!u)throw new Error("Audience / No matcher found for type="+i);if(u.fieldsNeeded)for(var c=a(u.fieldsNeeded,e),s=0;s<c.length;s++){var f=c[s];if(void 0===r.getFieldValue(t,f))return void o.debug("Audience / Required field",f,"for type",i,"has no value")}o.debug("Matching condition:",e,"to values:",t);var l=u.match(t,e);if(void 0!==l)return!!l}}(t,e);o.groupCollapsed("Checking audience",n.name,n.id,n),o.debug("Visitor Profile:",t);try{var f=i.evaluate(n.conditions,s)}catch(t){u=t,f=!1}return o.groupEnd(),u&&o.error("Audience / Error evaluating audience",c(n),":",u),o.log("Is "+(f?"in":"NOT in")+" audience:",c(n)),f},n.requiredAudienceFieldsForConditions=function t(n,e){var i={};return n.forEach((function(n){if(Array.isArray(n))Object.assign(i,t(n,e));else if(null!==n&&"object"==typeof n){var r=e[n.type];if(r)a(r.fieldsNeeded,n).forEach((function(t){i[u.serializeFieldKey(t)]=t}))}})),i}},1489:function(t,n){n.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},n.FIELDS_V0_2={name:n.FIELDS.NAME,time:n.FIELDS.TIME,type:n.FIELDS.TYPE,category:n.FIELDS.CATEGORY,tags:n.FIELDS.OPTIONS,session_index:n.FIELDS.SESSION_INDEX}},8487:function(t,n,e){var i=e(1489),r=e(8859).getFieldValue,o=e(1691);function u(t,n,e,r,o){this[i.FIELDS.NAME]=t,this[i.FIELDS.TYPE]=n,"string"==typeof e&&e.trim().length>0&&(this[i.FIELDS.CATEGORY]=e),r&&Object.keys(r).length>0&&(this[i.FIELDS.OPTIONS]=r),void 0!==o&&(this[i.FIELDS.REVENUE]=o)}function a(t,n,e,r){this.eventBase=t,this[i.FIELDS.TIME]=n,void 0!==e&&(this[i.FIELDS.SESSION_ID]=e),void 0!==r&&(this[i.FIELDS.SESSION_INDEX]=r)}n._=u,u.prototype.digest=function(){var t=function(t,n){return encodeURIComponent(t)+"="+encodeURIComponent(n)},n=[];if(n.push(t(i.FIELDS.NAME,this[i.FIELDS.NAME])),n.push(t(i.FIELDS.TYPE,this[i.FIELDS.TYPE])),this[i.FIELDS.CATEGORY]&&n.push(t(i.FIELDS.CATEGORY,this[i.FIELDS.CATEGORY])),this[i.FIELDS.REVENUE]&&n.push(t(i.FIELDS.REVENUE,this[i.FIELDS.REVENUE])),!this[i.FIELDS.OPTIONS])return n.join("&");var e=this[i.FIELDS.OPTIONS]||{},r=Object.keys(e).filter((function(t){return e.hasOwnProperty(t)}));r=r.sort();for(var o=0;o<r.length;o++)n.push(t(r[o],e[r[o]]));return n.join("&")},u.prototype.hash=function(){return this.hash_||(this.hash_=o.hashToHex(o.toByteString(this.digest()),o.Seed.BEHAVIOR_EVENT)),this.hash_},u.prototype.setHash=function(t){this.hash_=t},u.prototype.reHash=function(){this.hash_=null,this.hash()},u.prototype.equals=function(t){if(this.hash()!==t.hash()||this[i.FIELDS.NAME]!==t[i.FIELDS.NAME]||this[i.FIELDS.TYPE]!==t[i.FIELDS.TYPE]||this[i.FIELDS.CATEGORY]!==t[i.FIELDS.CATEGORY]||this[i.FIELDS.REVENUE]!==t[i.FIELDS.REVENUE])return!1;var n=this[i.FIELDS.OPTIONS]||{},e=t[i.FIELDS.OPTIONS]||{},r=Object.keys(n).filter((function(t){return n.hasOwnProperty(t)})),o=Object.keys(e).filter((function(t){return e.hasOwnProperty(t)}));if(r.length!==o.length)return!1;for(var u=0;u<r.length;u++){var a=r[u];if(!e.hasOwnProperty(a)||n[a]!==e[a])return!1}return!0},u.prototype.getValueOrDefault=function(t,n){var e=r(this,t);return void 0!==e?e:n},u.prototype.setFieldValue=function(t,n){t!==i.FIELDS.NAME&&t!==i.FIELDS.TYPE&&t!==i.FIELDS.CATEGORY&&t!==i.FIELDS.REVENUE&&t!==i.FIELDS.OPTIONS||(this[t]=n,this.reHash())},n.J=a,a.prototype.getValueOrDefault=function(t,n){if(0===t.length)return this;var e={};e[i.FIELDS.TIME]=this[i.FIELDS.TIME],e[i.FIELDS.SESSION_ID]=this[i.FIELDS.SESSION_ID],e[i.FIELDS.SESSION_INDEX]=this[i.FIELDS.SESSION_INDEX];var o=r(e,t);return void 0!==o?o:this.eventBase.getValueOrDefault(t,n)},a.prototype.setFieldValue=function(t,n){t===i.FIELDS.TIME||t===i.FIELDS.SESSION_ID||t===i.FIELDS.SESSION_INDEX?this[t]=n:this.eventBase.setFieldValue(t,n)};var c={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};a.prototype.readableEvent=function(){var t,n,e=function(t){return"string"==typeof t?'"'+t+'"':t},r=this,o=[];[i.FIELDS.NAME,i.FIELDS.TYPE,i.FIELDS.CATEGORY,i.FIELDS.REVENUE,i.FIELDS.SESSION_ID].forEach((function(i){t=c[i],void 0!==(n=r.getValueOrDefault([i]))&&o.push(t+": "+e(n))}));var u=[];if(t=c[i.FIELDS.OPTIONS],void 0!==(n=r.getValueOrDefault([i.FIELDS.OPTIONS]))&&(Object.keys(n).forEach((function(t){var i=n[t];u.push(t+": "+String(e(i)))})),o.push(t+": {\n\t\t"+u.join(",\n\t\t")+"\n\t}")),"number"==typeof(n=r.getValueOrDefault([i.FIELDS.TIME]))&&(n=e(new Date(n).toString())),void 0!==n){o.push("timestamp: "+n)}return"{\n\t"+o.join(",\n\t")+"\n}"},a.prototype.toObject=function(t){var n,e,r={},o=this;[i.FIELDS.NAME,i.FIELDS.TYPE,i.FIELDS.CATEGORY,i.FIELDS.REVENUE,i.FIELDS.OPTIONS,i.FIELDS.SESSION_INDEX].forEach((function(t){n=c[t],void 0!==(e=o.getValueOrDefault([t],t===i.FIELDS.OPTIONS?{}:void 0))&&(r[n]=e)}));var u=c[i.FIELDS.OPTIONS],a=c[i.FIELDS.REVENUE];if(t&&t.revenueAsTag&&r[a]&&(r[u]=r[u]||{},r[u][a]=r[a],delete r[a]),"number"==typeof(e=o.getValueOrDefault([i.FIELDS.TIME])))if(t&&t.timeAsTimestamp){r.timestamp=new Date(e)}else{r.time=e}return r}},2575:function(t,n,e){var i=e(4938);n.initializeStore=i.initialize,n.addEvent=i.addEvent,n.getEvents=i.getEvents,n.getEventCount=i.getEventCount},7269:function(t,n,e){var i=e(8487).J,r=e(8298),o=e(1489),u=e(8487)._;n.CURRENT_SESSION_INDEX=0;var a=18e5;function c(t,e){var i;i=n.isInSameSession(t,e)?t.getValueOrDefault([o.FIELDS.SESSION_ID]):e.getValueOrDefault([o.FIELDS.TIME]),e.setFieldValue(o.FIELDS.SESSION_ID,i)}function s(t,e,i){var r,u=t.getValueOrDefault([o.FIELDS.SESSION_INDEX]);r=n.isInSameSession(e,t)?u:i?u+1:u-1,e.setFieldValue(o.FIELDS.SESSION_INDEX,r)}n.isInSameSession=function(t,n){var e=t.getValueOrDefault([o.FIELDS.TIME],0),i=n.getValueOrDefault([o.FIELDS.TIME],0);return this.isTimestampInSameSession(e,i)},n.isTimestampInSameSession=function(t,n){return Math.abs(t-n)<a},n.updateSessionId=function(t,n){if(t){var e=t.getValueOrDefault([o.FIELDS.TIME]),r=t.getValueOrDefault([o.FIELDS.SESSION_ID]),a=n.getValueOrDefault([o.FIELDS.TIME]);e="number"!=typeof e?a-36e5:e,r="number"!=typeof r?e:r,c(t=new i(new u("",""),e,r),n)}else n.setFieldValue(o.FIELDS.SESSION_ID,n.getValueOrDefault([o.FIELDS.TIME]))},n.updateSessionIndex=function(t,n){if(t){var e=t.getValueOrDefault([o.FIELDS.TIME]),r=t.getValueOrDefault([o.FIELDS.SESSION_INDEX]),a=n.getValueOrDefault([o.FIELDS.TIME]),c=t.getValueOrDefault([o.FIELDS.SESSION_ID]);e="number"!=typeof e?a-36e5:e,r="number"!=typeof r?0:r,c="number"!=typeof c?e:c,s(t=new i(new u("",""),e,c,r),n,!1)}else n.setFieldValue(o.FIELDS.SESSION_INDEX,0)},n.sessionize=function(t){var e=t.length;if(0!==e){t[0].setFieldValue(o.FIELDS.SESSION_ID,t[0].getValueOrDefault([o.FIELDS.TIME]));for(var i=1;i<e;i++)c(t[i-1],t[i]);var u=n.CURRENT_SESSION_INDEX,f=t[e-1].getValueOrDefault([o.FIELDS.TIME]);r.now()-f>a&&(u+=1),t[e-1].setFieldValue(o.FIELDS.SESSION_INDEX,u);for(i=e-1;i>0;i--)s(t[i],t[i-1],!0)}},n.reindexIfNecessary=function(t,n,e){var i=function(t){for(var n=0;n<t.length;n++){var e=t[n].getValueOrDefault([o.FIELDS.SESSION_INDEX]);t[n].setFieldValue(o.FIELDS.SESSION_INDEX,e+1)}};-1===t.getValueOrDefault([o.FIELDS.SESSION_INDEX])&&(i(n),i(e))},n.sessionSortPredicate=function(t,n){return t[o.FIELDS.TIME]-n[o.FIELDS.TIME]},n.applyMigrations=function(t){return!1}},4938:function(t,n,e){var i=e(136),r=e(6278),o=e(8298),u=e(5225),a=e(409),c=e(7852),s=e(7269),f=e(4285),l=n,d=e(8487).J,v=e(1489),h=e(6592),p=e(8487)._,g=(s=e(7269),e(2025)),m=g.get("stores/visitor_events"),b=g.get("stores/visitor_events_manager"),y={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},w=1e3;function _(t){a.dispatch(i.SET_VISITOR_EVENTS,t)}function E(t){a.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:t})}function I(t){a.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:t})}function A(t){a.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:t})}function S(){return m.getEvents()}function k(){return b.getBaseMap()}function T(){return b.getEventQueue()}function O(){return b.getLastEvent()}function R(){var t=S().concat(T()),n=!1;return t.length>w&&(t=t.slice(-1e3),n=!0),_(t),I([]),n}n.initialize=function(t,n){if(!b.getInitialized()){l.I(t,n);var e=S();e.length>0&&A(e[e.length-1]);var r=T();r.length>0&&A(r[r.length-1]),a.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}},n.addEvent=function(t){c.debug("Behavior store: adding event",t);var n=l.A(t);A(n),I(T().concat(n)),s.reindexIfNecessary(O(),S(),T()),l.S(T()),n.t&&function(t){try{var n=Number(r.get(h.COOKIES.OPTIMIZELY_SESSION,!1));if(isNaN(n)||0!==n){var e=n?s.isTimestampInSameSession(t,n)?t:0:t;r.set(h.COOKIES.OPTIMIZELY_SESSION,e.toString(),{path:"/",encodeValue:!1},!0)}}catch(t){c.error("Error setting session cookie",t)}}(n.t)},n.getEvents=function(){return T().length>0&&(R()&&s.sessionize(S()),l.k(S()),l.S(T())),S()},n.getEventCount=function(){return T().length+S().length},l.I=function(t,n){l.T(t,n)&&(l.k(S()),l.S(T())),s.sessionize(S())},l.T=function(t,n){if(0===t.length&&0===n.length)return _([]),I([]),!1;var e=!1,i=t[0]||n[0];return y.EVENTBASE in i?(_(l.O(t)),I(l.O(n))):(e=!0,_(l.R(t)),I(l.R(n))),T().length>0&&(R(),e=!0),_(l._updateBaseMapAndMaybeDedupe(S())),l._migrateEventBasesAndUpdateStore()&&(e=!0),e},l.R=function(t){for(var n=[],e=0;e<t.length;e++){var i=t[e],r=l.N(i);n[e]=new d(r,i[v.FIELDS.TIME])}return n},l._migrateEventBasesAndUpdateStore=function(){var t=!1,n=l.D();return s.applyMigrations(n)&&(t=!0,E({}),_(l._updateBaseMapAndMaybeDedupe(S())),I(l._updateBaseMapAndMaybeDedupe(T()))),t},l.j=function(){return o.now()},l.A=function(t){var n,e=t.name,i=t.type||"default",r=t.category||u.OTHER,o=t.tags||{};t.revenue&&(n=t.revenue);var a=new p(e,i,r,o,n);a=l.P(a);var c=l.j(),f=new d(a,c,-1);return s.updateSessionId(O(),f),s.updateSessionIndex(O(),f),f},l._updateBaseMapAndMaybeDedupe=function(t){for(var n=0;n<t.length;n++)t[n].eventBase=l.P(t[n].eventBase);return t},l.k=function(t){var n=l.L(t);f.persistBehaviorEvents(n)},l.S=function(t){var n=l.L(t);f.persistBehaviorEventQueue(n)},l.U=function(){var t;b.getCleared()||(_([]),I([]),l.k(S()),l.S(T()),E({}),A(null),t=!0,a.dispatch(i.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:t}))},l.P=function(t){var n=t.hash(),e=k(),i=e[n];if(void 0===i)return e[n]=[t],E(e),t;for(var r=0;r<i.length;r++)if(t.equals(i[r]))return i[r];return i.push(t),E(e),t},l.D=function(){var t=[],n=k();for(var e in n)!n.hasOwnProperty(e)||(t=t.concat(n[e]));return t},l.L=function(t){for(var n=function(t){var n={};n[v.FIELDS.NAME]=t.getValueOrDefault([v.FIELDS.NAME]),n[v.FIELDS.TYPE]=t.getValueOrDefault([v.FIELDS.TYPE]);var e=t.getValueOrDefault([v.FIELDS.CATEGORY]);void 0!==e&&(n[v.FIELDS.CATEGORY]=e);var i=t.getValueOrDefault([v.FIELDS.REVENUE]);void 0!==i&&(n[v.FIELDS.REVENUE]=i);var r=t.getValueOrDefault([v.FIELDS.OPTIONS]);return void 0!==r&&(n[v.FIELDS.OPTIONS]=r),n},e=y,i=[],r="_idx_",o=0;o<t.length;o++){var u,a,c=t[o],s=c.eventBase;if(s.hasOwnProperty(r)){u=i[s[r]];var f=c[v.FIELDS.TIME]-(u[e.TIMEBASE]||0);(a={})[e.DELTA]=f,a[e.INDEX]=o,u[e.TIMESTAMPS].push(a)}else(u={})[e.EVENTBASE]=n(c),u[e.HASH]=s.hash(),u[e.TIMEBASE]=c[v.FIELDS.TIME],(a={})[e.DELTA]=0,a[e.INDEX]=o,u[e.TIMESTAMPS]=[a],i.push(u),s[r]=i.length-1}for(o=0;o<t.length;o++)delete t[o].eventBase[r];return i},l.N=function(t,n){var e=new p(t[v.FIELDS.NAME],t[v.FIELDS.TYPE],t[v.FIELDS.CATEGORY],t[v.FIELDS.OPTIONS],t[v.FIELDS.REVENUE]);return void 0!==n&&e.setHash(n),e},l.O=function(t){for(var n=y,e=[],i=0;i<t.length;i++)for(var r=t[i],o=l.N(r[n.EVENTBASE],r[n.HASH]),u=r[n.TIMEBASE],a=r[n.TIMESTAMPS],c=0;c<a.length;c++){var s=a[c],f=new d(o,u+s[n.DELTA]);e[s[n.INDEX]]=f}return e},n.deserialize=function(t){return l.O(t)},n.mergeAllEvents=function(t){var n=[].concat.apply([],t);return n.sort(s.sessionSortPredicate),s.sessionize(n),n},n.MAX_EVENTS=w},136:function(t,n,e){var i=e(3826);t.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,SET_GA4_USER_ID:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,UPDATE_CONTEXTUAL_MAB_MAP:null,MERGE_CONTEXTUAL_MAB_MAP:null,SET_ODP_SEGMENTS:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,RESET_VIEW_STATES:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT:null,RECORD_VISITOR_ID_LOCATOR_USAGE:null,RECORD_VISITOR_ID_ERROR:null,RECORD_STICKY_BUCKETING_FEATURE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_USE_BEACON:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})},6592:function(t,n,e){var i=e(3826);n.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",OPTIMIZELY_SESSION:"optimizelySession",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},n.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},n.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},n.Lifecycle=i({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),n.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},n.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},n.PluginTypes=i({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),n.ResourceTimingAttributes=i({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),n.RUMPerformanceTimingAttributes=i({blockTime:null}),n.AttributionTypes=i({FIRST_TOUCH:null,LAST_TOUCH:null}),n.SandboxedFunctions=i({XMLHttpRequest:null}),n.PerformanceData=i({performance_marks:null,resource_timing:null,performance_timing:null}),n.PerformanceCounters=i({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),n.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely",CONTEXTUAL_MAB:"contextual_mab",ODP_SEGMENTS:"odp_segments"},n.AllStorageKeys=Object.assign({},n.StorageKeys,n.VisitorStorageKeys),n.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"},n.VisitorIdLocatorType={COOKIE:"cookie",JS_VARIABLE:"js",LOCALSTORAGE:"localStorage",QUERY:"query"},n.AllocationPolicyEnum={CMAB:"contextual-multi-arm-bandit",MIN_REGRET:"min-regret",MIN_TIME:"min-time",MANUAL:"manual"}},5225:function(t){t.exports={OTHER:"other"}},3111:function(t,n){n.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}},1320:function(t){t.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}},6938:function(t,n,e){var i=e(3826);n.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),n.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),n.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),n.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),n.RedirectRelayMedia=i({COOKIE:null})},9249:function(t,n,e){var i=e(1691),r=n.TOTAL_POINTS=1e4;n.bucketingNumber=function(t,n,e){return i.hashToInt(t+n,e,r)},n.isHoldback=function(t,e){return n.bucketingNumber(t,e.id,i.Seed.IGNORING)<(e.holdback||0)},n.chooseWeightedCandidate=function(t,e,r){for(var o=n.bucketingNumber(t,e,i.Seed.BUCKETING),u=0;u<r.length;u++)if(r[u].endOfRange>o)return r[u].entityId;throw new Error("Unable to choose candidate")}},571:function(t,n,e){var i=e(8275).isEmpty,r=e(136),o=e(9249),u=e(5421),a=e(7353).b,c=e(409),s=e(7852),f=e(2855);n.isValidExperiment=function(t,n){var e;return s.groupCollapsed("Decision / Evaluating audiences for experiment:",n,t),e=!n.audienceIds||u.evaluate(n.audienceIds,(function(n){return t.includes(n)})),s.groupEnd(),s.debug("Decision / Experiment",n,"is valid?",e),e},n.selectVariation=function(t,n,e,i,u){if(s.debug("Decision / Selecting variation for experiment:",t.id),!t.variations||0===t.variations.length)throw new a('No variations in selected experiment "'+t.id+'"');if(!t.weightDistributions&&t.variations.length>1)throw new a('On selected experiment "'+t.id+'", weightDistributions must be defined if # variations > 1');var l;if(t.bucketingStrategy&&"impression"===t.bucketingStrategy)if(1===t.variations.length)l=t.variations[0].id;else{var d=i;l=o.chooseWeightedCandidate(e+d,t.id,t.weightDistributions)}else if(l=1===t.variations.length?t.variations[0].id:o.chooseWeightedCandidate(e,t.id,t.weightDistributions),null==t?void 0:t.deployed)s.debug("Decision / Experiment is deployed. Skipping bucketing.");else if(u&&u[t.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",t.id);var v=u[t.id];if(!t.variations.find((function(t){return t.id===v})))return c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"stoppedVariation",id:t.id}),s.debug("Decision / Preferred variation:",v,"not found on experiment:",t.id,". Visitor not bucketed."),null;v!==l&&(c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredVariation",id:t.id}),l=v)}var h=f.processCmabExperiment(t,l);h&&(l=h);var p=t.variations.find((function(t){return t.id===l}));if(p)return s.debug("Decision / Selected variation:",p),p;throw new a('Unable to find selected variation: "'+l+'".')},n.getExperimentById=function(t,n){var e=t.experiments.find((function(t){return t.id===n}));if(e)return e;throw new a("Unable to find selected experiment.")},n.hasVariationActionsOnView=function(t,n){return s.debug("Decision / Checking variation:",t,"for actions on pageId:",n),!!(t.actions||[]).find((function(t){return t.pageId===n&&!i(t.changes)}))}},7353:function(t,n){function e(t){this.message=t}e.prototype=new Error,n.b=e},1035:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.pick,u=e(136),a=e(8841),c=e(7595),s=e(9249),f=e(571),l=e(7353).b,d=e(2025),v=e(6592),h=e(409),p=e(3672),g=e(2042),m=e(7852),b=(e(5010),e(5686)),y=d.get("stores/plugins"),w=d.get("stores/global"),_=d.get("stores/layer_data");function E(t){var n=y.getPlugin(v.PluginTypes.deciders,t);if(r(n))throw new Error("No deciders found for policy: "+t);return n}n.isPageIdRelevant=function(t){if(!t)return!1;var n=E(t.policy);return"function"==typeof n.includePageIdInDecisionTicket?n.includePageIdInDecisionTicket(t):!0===n.includePageIdInDecisionTicket},n.createTicket=function(t){var n,e,i,r=o(t,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return Object.assign(r,{audienceIds:(n=t.visitorProfile,e=t.audiences,i=y.getAllPlugins(v.PluginTypes.audienceMatchers),e.reduce((function(t,e){return c.isInAudience(n,e,i)&&t.push(e.id),t}),[])),activationId:w.getActivationId()}),r},n.decideGlobal=function(t){return{isGlobalHoldback:s.isHoldback(t.bucketingId,{id:null,holdback:t.globalHoldback})}},n.decideGroup=function(t,n){m.debug("Decision / Deciding layer for group: ",p.description(t));var e,i,r=n.preferredLayerId,o=!!r;try{(e=s.chooseWeightedCandidate(n.bucketingId,t.id,t.weightDistributions))&&"None"!==e||(i='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(t){i="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(o&&(m.debug("Decision / Using preferredLayerMap to select layer for group:",p.description(t)),r!==e&&(h.dispatch(u.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredLayer",id:t.id}),e=r)),i)return{layerId:null,reason:i};if(!t.weightDistributions.find((function(t){return t.entityId===e}))){var a="Visitor was"+(o?" sticky-":" non-sticky ")+"bucketed into a campaign ("+e+") which is not in the group";if(!o)throw new l(a);return{layerId:null,reason:a}}return{layerId:e}},n.decideLayer=function(t,n){var e,i;m.debug("Deciding: ",t,n);var o,u,c=E(t.policy),d={layerId:t.id,experimentId:null,variationId:null,isLayerHoldback:s.isHoldback(n.bucketingId,t),isLayerConcluded:!!t.concluded};if(r(t.experiments))throw new l("No experiments in layer.");try{if(c.decideLayer){m.debug("Decision / Using decider's custom decideLayer.");var v=c.decideLayer(t,n);e=v.experiment,i=v.variation}else m.debug("Decision / Using default decideLayer behavior."),e=c.selectExperiment(t,n.audienceIds,n.bucketingId),i=f.selectVariation(e,n.audienceIds,n.bucketingId,n.activationId,n.preferredVariationMap)}catch(t){o=t,(null!=(u=l)&&"undefined"!=typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](o):o instanceof u)?d.reason=t.message:d.error=t}return d.experimentId=e?e.id:null,d.variationId=i?i.id:null,d.error&&(d.error.name="DecisionEngineError",a.emitError(d.error)),d},n.getDummyLayerDecision=function(t,n){var e,i=function(t,n){for(var e=0;e<t.experiments.length;e++)for(var i=0;i<t.experiments[e].variations.length;i++)if(n.indexOf(t.experiments[e].variations[i].id)>-1)return{experimentId:t.experiments[e].id,variationId:t.experiments[e].variations[i].id};return null}(t,n);return i?(m.log("Decision / Applying force variation:",i.variationId,"to Campaign",g.description(t)),e={layerId:t.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,isLayerConcluded:!1,reason:"force"}):(m.log("No variation matches ids:",n,"in Campaign",g.description(t)),e={layerId:t.id,variationId:null,experimentId:null,isLayerHoldback:!1,isLayerConcluded:!1,reason:"force"}),e},n.isInCohort=function(t){if(!t.experimentId||!t.variationId)return!1;var n=_.get(t.layerId);return!(b.isSingleExperimentPolicy(n.policy)&&t.isLayerHoldback)}},2025:function(t,n,e){var i=e(2328),r=e(409),o=e(3822),u=i.create(),a={action_data:e(5628),async_request:e(9021),audience_data:e(2500),change_data:e(7090),cleanup:e(2587),client_metadata:e(2814),cookie_options:e(6108),event_data:e(9034),event_emitter:e(4338),dimension_data:e(1862),directive:e(5798),global:e(2940),history:e(1459),integration_settings:e(4453),layer:e(2734),layer_data:e(9057),log:e(9809),observed_redirect:e(8338),pending_events:e(9738),performance:e(5501),plugins:e(4715),provider_status:e(8515),pending_redirect:e(6067),rum:e(4999),sandbox:e(9292),session:e(3799),tracker_optimizely:e(8950),ua_data:e(4184),view:e(90),view_data:e(749),visitor:e(2857),visitor_attribute_entity:e(6658),visitor_events:e(2725),visitor_events_manager:e(977),visitor_id:e(241),visitor_bucketing:e(7016),xdomain:e(227)};a.group_data=e(527),r.registerStores(a),Object.keys(a).forEach((function(t){u.register("stores/"+t,r.getStore(t))})),u.register("core/plugins/matchers/key_value",o),t.exports=u},4214:function(t,n,e){var i=e(136),r=e(8841),o=e(6278),u=e(8130).v,a=e(6592),c=e(409),s=e(7852),f=n.JSONParseError=u("JSONParseError"),l=e(6022),d=e(192),v=e(9454),h="optimizely_show_preview",p="optimizely_disable",g="optimizely_editor",m="optimizely_p13n",b="optimizely_x_audiences",y="optimizely_x",w="optimizely_show_preview",_="optimizely_opt_out",E="optimizely_token",I="optimizely_force_tracking",A="optimizely_embed_editor";n.populateDirectiveData=function(){var t,n,e,u,S,k,T,O,R;!function(){var t="OFF",n=l.getQueryParamValue("optimizely_log");if(n){var e=n.split(":");""!==e[0]&&(t=String(e[0]).toUpperCase()),void 0!==e[1]&&s.setLogMatch(e[1])}s.setLogLevel(t)}(),function(){var t=v.getUserAgent()||"";if("string"!=typeof t)return void s.warn("Directive / userAgent not a string");t=t.toLowerCase(),["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"].some((function(n){if(t.includes(n))return s.warn("Directive / Matches bot:",n),!0}))&&(s.log("Directive / Disabling tracking"),c.dispatch(i.LOAD_DIRECTIVE,{trackingDisabled:!0}))}(),t=window.optimizely?window.optimizely.initialized:void 0,n=Boolean("function"==typeof t?t():t),c.dispatch(i.LOAD_DIRECTIVE,{alreadyInitialized:n}),c.dispatch(i.LOAD_DIRECTIVE,{mutationObserverAPISupported:v.isMutationObserverAPISupported()}),function(){var t=o.get(a.COOKIES.OPT_OUT),n=l.getQueryParamValue(_),e="You have successfully opted out of Optimizely for this domain.",r="You are NOT opted out of Optimizely for this domain.";if("true"===n||"false"===n){var u="true"===n;c.dispatch(i.LOAD_DIRECTIVE,{shouldOptOut:u}),v.alert(u?e:r)}else t&&c.dispatch(i.LOAD_DIRECTIVE,{shouldOptOut:"true"===t})}(),function(){var t=!1,n=[h,p];n.push(g);for(var e=0;e<n.length;e++)if("true"===l.getQueryParamValue(n[e])){s.warn("Directive / Not activating because "+n[e]+" is set."),t=!0;break}c.dispatch(i.LOAD_DIRECTIVE,{disabled:t})}(),c.dispatch(i.LOAD_DIRECTIVE,{isEditor:!1}),c.dispatch(i.LOAD_DIRECTIVE,{isPreview:!1}),(e=l.getQueryParamValue(w))&&s.log("Directive / Is legacy preview mode"),c.dispatch(i.LOAD_DIRECTIVE,{isLegacyPreview:!!e}),c.dispatch(i.LOAD_DIRECTIVE,{isSlave:!1}),u=v.getGlobal("optlyDesktop"),(S=!(!u||void 0===u.p13nInner))&&s.log("Directive / Is running in desktop app editor"),c.dispatch(i.LOAD_DIRECTIVE,{isRunningInDesktopApp:S}),(k="true"===l.getQueryParamValue(m))&&s.log("Directive / Is running in editor"),c.dispatch(i.LOAD_DIRECTIVE,{isRunningInV2Editor:k}),function(){var t=!1,n=v.getGlobal("sessionStorage"),e=l.getQueryParamValue(A);t="true"===e,e&&n&&("true"===e?n.setItem(A,"true"):n.removeItem(A)),n&&"true"===n.getItem(A)&&(t=!0,s.log("Directive / Should mount embedded editor"));c.dispatch(i.LOAD_DIRECTIVE,{requestedEmbeddedEditor:t})}(),T=o.get(a.COOKIES.TOKEN)||null,O=l.getQueryParamValue(E)||T,c.dispatch(i.LOAD_DIRECTIVE,{projectToken:O}),function(){var t=o.get(a.COOKIES.PREVIEW),n=[],e=l.getQueryParamValue(b);if(e)n=o.safeDecodeURIComponent(e).split(",");else if(t)try{n=d.parse(t).forceAudienceIds}catch(n){var u=new f("Failed to parse previewCookie in registerForceAudienceIds: "+t),v={originalMessage:n.message,userError:!0};r.emitError(u,v)}n.length&&(s.log("Directive / Force Audience IDs:",n),c.dispatch(i.LOAD_DIRECTIVE,{forceAudienceIds:n}))}(),function(){var t=o.get(a.COOKIES.PREVIEW),n=[],e=l.getQueryParamValue(y);if(e)n=o.safeDecodeURIComponent(e).split(",");else if(t)try{n=d.parse(t).forceVariationIds}catch(n){var u=new f("Failed to parse previewCookie in registerForceVariationIds: "+t),v={originalMessage:n.message,userError:!0};r.emitError(u,v)}n.length&&(s.log("Directive / Force Variation IDs:",n),c.dispatch(i.LOAD_DIRECTIVE,{forceVariationIds:n}))}(),(R=l.getQueryParamValue(I))&&c.dispatch(i.LOAD_DIRECTIVE,{forceTracking:R})};n.setOptOut=function(t){t?(s.warn("Directive / Opting out"),o.set(a.COOKIES.OPT_OUT,"true",{maxAge:31536e4},!0)):o.remove(a.COOKIES.OPT_OUT),c.dispatch(i.LOAD_DIRECTIVE,{shouldOptOut:t})}},8298:function(t,n){n.now=function(){return+new Date}},7871:function(t,n){n.VERSION="0.261.0",n.NAME="js"},1019:function(t,n,e){var i=e(2025).get("stores/global");n.getDocumentElement=function(){return document.documentElement},n.getCookieString=function(){return document.cookie||""},n.setCookie=function(t){document.cookie=t},n.querySelector=function(t){return document.querySelector(t)},n.querySelectorAll=function(t){return document.querySelectorAll(t)},n.parseUri=function(t){var e=n.createElement("a");return e.href=t,e},n.childrenOf=function(t){return Array.prototype.slice.call(t.querySelectorAll("*"))},n.createElement=function(t){return document.createElement(t)},n.isReady=function(){return i.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},n.isLoaded=function(){return"complete"===document.readyState},n.addReadyHandler=function(t){return document.addEventListener("DOMContentLoaded",t),function(){n.removeReadyHandler(t)}},n.removeReadyHandler=function(t){return function(){document.removeEventListener("DOMContentLoaded",t)}},n.getReferrer=function(){return document.referrer},n.getReadyState=function(){return document.readyState},n.write=function(t){if("loading"!==n.getReadyState())throw new Error("Aborting attempt to write to already-loaded document");document.write(t)},n.appendToHead=function(t){return n.appendTo(document.head,t)},n.appendTo=function(t,n){t.appendChild(n)},n.addEventListener=function(t,n,e){return document.addEventListener(t,n,e),function(){document.removeEventListener(t,n,e)}},n.getCurrentScript=function(){if(document.currentScript)return document.currentScript},n.parentElement=function(t){for(var n=t.parentNode;n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;return n}},1353:function(t,n,e){var i,r,o="optimizely_data",u=e(8130).v,a=e(3908),c=e(9454),s=u("StorageError");try{r=c.getGlobal("localStorage")}catch(t){throw new s("Unable to read localStorage: "+t.toString())}if(!r)throw new s("localStorage is undefined");i=a.create(r,o),n.DT=i},4970:function(t,n,e){var i=e(318);n.create=function(t){return new(i.get("MutationObserver",MutationObserver))(t)},n.observe=function(t,n,e){t.observe(n,e)}},4049:function(t,n,e){var i=e(6761).Promise,r=e(9454);n.estimateStorage=function(){var t=r.getGlobal("navigator");try{return t.storage.estimate()}catch(t){return i.resolve({usage:null,quota:null})}}},5010:function(t,n,e){var i=e(136),r=e(8130).v,o=e(8298),u=e(409),a=e(9454),c=e(2025).get("stores/rum"),s="optimizely:",f=n.Error=r("PerformanceError");function l(){return a.getGlobal("performance")}n.time=function(t){if(c.getSampleRum()){var n=l();if(n&&n.mark){var e=s+t;n.clearMarks(e+"Begin"),n.mark(e+"Begin")}}},n.timeEnd=function(t){if(c.getSampleRum()){var n=l();if(n&&n.mark){var e=s+t,r=n.getEntriesByName(e+"Begin");if(0===r.length)throw new f("Called timeEnd without matching time: "+t);n.clearMarks(e+"End"),n.mark(e+"End");var o=t+"Time",a=n.getEntriesByName(e+"End")[0].startTime-r[0].startTime;u.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:o,data:{startTime:Math.round(1e3*r[0].startTime)/1e3,duration:Math.round(1e3*a)/1e3}})}}},n.setMark=function(t,n,e){if(c.getSampleRum()){var r=l();if(r&&r.mark){var o=s+t;r.mark(o),u.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:t,data:{startTime:Math.round(1e3*n)/1e3,duration:Math.round(1e3*e)/1e3}})}}},n.now=function(){var t=l();return t?t.now():o.now()}},318:function(t,n){n.get=function(t,n){try{var e=window.Zone;if(e&&"function"==typeof e.V){var i=window[e.V(t)];if("function"==typeof i)return i}}catch(t){}return n}},9454:function(t,n,e){var i=e(7852);n.getUserAgent=function(){return window.navigator.userAgent},n.getLocationSearch=function(){return window.location.search},n.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},n.getHref=function(){return window.location.href},n.getLocation=function(){return window.location},n.setLocation=function(t){window.location.replace(t)},n.setGlobal=function(t,n){window[t]=n},n.getGlobal=function(t){return window[t]},n.getGlobalByPath=function(t){for(var n=t.split("."),e=window;n.length;)try{e=e[n.shift()]}catch(n){throw i.error("Attempted to access nonexistent property. Path ",t),new Error("Attempted to access nonexistent property. Path "+t)}return e},n.addEventListener=function(){return window.addEventListener.apply(window,arguments)},n.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},n.isMutationObserverAPISupported=function(){return void 0!==window.MutationObserver},n.alert=function(t){alert(t)},n.setTimeout=function(t,n){return setTimeout((function(){try{t()}catch(t){i.warn("Deferred function threw error:",t)}}),n)},n.setInterval=function(t,n){return setInterval((function(){try{t()}catch(t){i.warn("Polling function threw error:",t)}}),n)}},8851:function(t,n){n.create=function(t,n,e,i){return Object.assign({category:"other"},i,{id:t,apiName:n,eventType:e})}},7566:function(t,n,e){var i=e(9899),r=e(136),o=e(8841),u=e(2025),a=e(409),c=e(7852),s=u.get("stores/event_emitter");n.on=function(t){return t.token||(t.token=i.generate()),a.dispatch(r.ADD_EMITTER_HANDLER,t),t.token},n.off=function(t){a.dispatch(r.REMOVE_EMITTER_HANDLER,{token:t})},n.emit=function(t,n,e){s.getHandlers(t,n).forEach((function(i){try{i.handler.call({$di:u},t)}catch(r){!e&&i.emitErrors?(c.error("Error in handler for event:",t,r),o.emitError(r,null,n)):c.warn("Suppressed error in handler for event:",t,r)}}))}},5547:function(t,n,e){var i=e(7566);n.on=function(t){return t.publicOnly=!0,i.on(t)},n.off=i.off,n.emit=function(t){i.emit(t)}},8484:function(__unused_webpack_module,exports,__webpack_require__){var createError=__webpack_require__(3958),di=__webpack_require__(2025),Logger=__webpack_require__(7852),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(t,n){n=(n=n||[]).concat(di.get("env/jquery"));try{return t.apply(void 0,n)}catch(e){throw Logger.warn("Error applying function",t,"with args:",n,e),new ExecError(e)}},exports.eval=function(str){try{return str="var $ = optimizely.get('jquery');"+str,eval(str)}catch(t){throw Logger.warn("Error executing JS:",str,t),new ExecError(t)}}},409:function(t,n,e){var i=e(3191);t.exports=i.create()},3672:function(t,n){n.description=function(t){var n=!!t.name?'"'+t.name+'" ':"",e=function(t){return(t.weightDistributions||[]).map((function(t){return t.entityId}))}(t).join(", ");return n+"(id "+t.id+", campaigns: "+e+")"}},2042:function(t,n,e){var i=e(8275).flattenDeep,r=e(136),o=e(8298),u=e(2025),a=e(409),c=u.get("stores/global"),s=u.get("stores/session");n.recordLayerDecision=function(t,n,e){return a.dispatch(r.RECORD_LAYER_DECISION,{layerId:t,decision:e,decisionTicket:n,sessionId:s.getSessionId(),activationId:c.getActivationId(),timestamp:o.now(),revision:c.getRevision(),namespace:c.getNamespace(),pageId:n.pageId}),e},n.relatedAudienceIds=function(t){var n={},e=["and","or","not"];return(t.experiments||[]).forEach((function(t){i(t.audienceIds).forEach((function(t){e.includes(t)||(n[t]=!0)}))})),Object.keys(n)},n.getActivationTimeout=function(t){var n=t.activation;return n&&null!==n.timeout&&void 0!==n.timeout?n.timeout:2e3},n.description=function(t){return(t.name?'"'+t.name+'" ':"")+"("+t.id+")"},n.createSingle=function(t,n,e){return{id:t,policy:"single_experiment",holdback:0,experiments:[{id:n||"",variations:[{id:e||"",actions:[]}],audienceIds:[]}],integrationStringVersion:1}},n.createLayerState=function(t,n,e,i,r){return void 0===i&&(i=!1),void 0===r&&(r=!1),{layerId:t,decision:{layerId:t,experimentId:n,variationId:e,isLayerHoldback:i||!1,isLayerConcluded:r||!1},decisionTicket:{audienceIds:[]}}},n.getIntegrationTypes=function(t){return Object.keys(Object.keys(t.integrationSettings).reduce((function(t,n){return Number.isNaN(Number(n))||(n="custom"),t[n]=1,t}),{}))}},2424:function(t,n){n.G=function(t,n){if(!n)return 0;for(var e=n.toString().split("."),i=t.toString().split("."),r=0;r<e.length;r++){if(void 0===i[r])return-1;if(isNaN(Number(i[r]))){if(i[r]!==e[r])return-1}else{if(Number(i[r])<Number(e[r]))return-1;if(Number(i[r])>Number(e[r]))return 1}}return 0}},5421:function(t,n,e){var i=e(192),r=e(7852),o="or",u="not";var a={};function c(t,n){var e;if(Array.isArray(t)){var u,c;"string"==typeof t[0]&&t[0]in a?(u=t[0],c=t.slice(1)):(u=o,c=t),r.groupCollapsed('Condition / Applying operator "'+u+'" with args',i.stringify(c));try{e=a[u](c,n),r.debug("Condition / Result:",e)}finally{r.groupEnd()}return e}return e=n(t),r.debug("Condition / Evaluated:",i.stringify(t),":",e),e}a["and"]=function(t,n){for(var e,i,r=0;r<t.length;r++){if(!1===(e=c(t[r],n)))return!1;void 0===e&&(i=!0)}if(!i)return!0},a[o]=function(t,n){for(var e,i=!1,r=0;r<t.length;r++){if(!0===(e=c(t[r],n)))return!0;void 0===e&&(i=!0)}if(!i)return!1},a[u]=function(t,n){if(1!==t.length)return!1;var e=c(t[0],n);return void 0!==e?!e:void 0},t.exports={evaluate:c}},4861:function(t,n,e){var i=e(6179);function r(t){return(t=(t||"").toLowerCase())in a?t:Object.keys(a).find((function(n){return a[n].includes(t)}))||"unknown"}function o(t,n,e){return n||("unknown"===t?"unknown":e?"mobile":"desktop_laptop")}n.parseUA=function(t){var n=new i(t),e=n.getBrowser(),a=n.getOS(),s=n.getDevice(),f=(a.name||"unknown").toLowerCase(),l=(e.name||"unknown").toLowerCase(),d=function(t){var n=/\b(iPad|iPhone)\d+,\d+/i.exec(t);return n?n[1].toLowerCase():null}(t),v="ipad"===d?"tablet":s.type,h=u(v,l,f);return{browser:{id:r(e.name),version:e.version},platform:{name:f,version:a.version},device:{model:c[s.model]||d||"unknown",type:o(l,v,h),isMobile:h}}};var u=function(t,n,e){if(["mobile","tablet"].includes(t)||["opera mini"].includes(n))return!0;return!!["android","blackberry","ios","windows phone"].includes(e)},a={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},c={iPhone:"iphone",iPad:"ipad"}},2328:function(t){function n(){this.B={}}n.prototype.register=function(t,n){if(1!==arguments.length){if(this.B[t])throw new Error("Module already registered for: "+t);this.B[t]=n}else{var e=this;Object.keys(t).forEach((function(n){var i=t[n];e.register(n,i)}))}},n.prototype.get=function(t){return this.B[t]},n.prototype.getModuleKeys=function(){var t=this.B;return Object.keys(t)},n.prototype.evaluate=function(t){var n=t.length,e=t.slice(0,n-1),i=t[n-1];if("function"!=typeof i)throw new Error("Evaluate must take a function as last element in array");var r=e.map(this.get,this);return i.apply(null,r)},n.prototype.reset=function(){this.B={}},t.exports={create:function(){return new n}}},4544:function(t,n,e){var i=e(8275).cloneDeep;function r(t,n,e){this.q=t,this.H=n,this.Y=0,this.W=!1,this.K={},Object.assign(this,e),this.X={},this.initialize&&this.initialize()}r.prototype.Z=function(t,n){var e=this.K[t];e&&"function"==typeof e&&e.call(this,n,t)},r.prototype.tt=function(){return i(this.X)},r.prototype.on=function(t,n){this.K[t]=n.bind(this)},r.prototype.observe=function(t){return this.H.nt(this.q,t)},r.prototype.emitChange=function(){this.W=!0,this.Y++},r.prototype.hasChanges=function(){return this.W},r.prototype.resetChange=function(){this.W=!1},r.prototype.getStateId=function(){return this.Y},r.prototype.et=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},t.exports=r},3191:function(t,n,e){var i=e(4544);function r(t){t=t||{},this.it={},this.rt={},this.ot=0,this.ut=[],this.ct=[]}function o(t,n){return function(){var e=t.indexOf(n);-1!==e&&t.splice(e,1)}}r.prototype.registerStores=function(t){Object.keys(t).forEach((function(n){this.it[n]=new i(n,this,t[n])}),this)},r.prototype.getStore=function(t){return this.it[t]},r.prototype.dispatch=function(t,n){this.dispatchId++;var e=this;this.ut.forEach((function(i){i.call(e,t,n)}));var i=this.it;Object.keys(i).forEach((function(e){i[e].Z(t,n)})),this.ct.forEach((function(i){i.call(e,t,n)})),Object.keys(i).forEach((function(t){var n=i[t];n.hasChanges()&&this.rt[t]&&(n.resetChange(),this.rt[t].forEach((function(t){t(n)})))}),this)},r.prototype.reset=function(){this.rt={};var t=this.it;Object.keys(t).forEach((function(n){t[n].et()}))},r.prototype.getState=function(){var t={},n=this.it;return Object.keys(n).forEach((function(e){t[e]=n[e].tt()})),t},r.prototype.onPreAction=function(t){var n=this.ut;return n.push(t),o(n,t)},r.prototype.onPostAction=function(t){var n=this.ct;return n.push(t),o(n,t)},r.prototype.nt=function(t,n){return this.rt[t]||(this.rt[t]=[]),this.rt[t].push(n),o(this.rt[t],n)},t.exports={create:function(t){return new r(t)}}},192:function(t,n){n.stringify=function(){var t=arguments;return function(t){var n,e,i=[Array.prototype],r=[];i.forEach((function(t){void 0!==t.toJSON&&(r.push(t.toJSON),delete t.toJSON)}));try{n=t()}catch(t){e=t}finally{r.forEach((function(t,n){i[n].toJSON=t}))}if(e)throw e;return n}((function(){return JSON.stringify.apply(null,t)}))},n.parse=JSON.parse},2973:function(t,n){n.hasMatch=function(t,n,e){var i=null!=e,r=null!=t;switch(n||(r?"exact":"exists")){case"exists":return i;case"exact":return i&&String(e)===t;case"substring":return i&&String(e).indexOf(t)>-1;case"regex":try{return!(!r||!i)&&new RegExp(t).test(String(e))}catch(t){}return!1;case"range":var o=t.split(":"),u=parseFloat(o[0]),a=parseFloat(o[1]),c=parseFloat(e);return c>=u&&c<=a;default:return!1}}},6761:function(t,n,e){t.exports=e(1375)},3908:function(t,n,e){var i=e(7852);function r(t,n){this.st=t,this.ft=n}r.prototype.dt=function(t){return[this.ft,t].join("$$")},r.prototype.vt=function(t){return t.replace(this.ft+"$$","")},r.prototype.setItem=function(t,n){try{this.st.setItem(this.dt(t),n)}catch(n){i.warn("Failed to save",t,"to localStorage:",n)}},r.prototype.removeItem=function(t){this.st.removeItem(this.dt(t))},r.prototype.getItem=function(t){var n=null;try{n=this.st.getItem(this.dt(t))}catch(t){}return n},r.prototype.keys=function(){var t=this;return Object.keys(this.st).filter((function(n){return n.includes(t.ft)})).map((function(n){return t.vt(n)}))},r.prototype.allKeys=function(){return Object.keys(this.st)},r.prototype.allValues=function(){return Object.values(this.st)},t.exports={create:function(t,n){return new r(t,n)},mockStorage:{keys:function(){},getItem:function(t){},removeItem:function(t){},setItem:function(t,n){}}}},5975:function(t,n,e){var i=e(1019),r=e(7566),o=e(4970);n.createDOMChangedObserver=function(){var t=i.getDocumentElement(),n={type:"viewTrigger",name:"DOMChanged"},e=o.create((function(){r.emit(n,!0)}));o.observe(e,t,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}},3224:function(t,n,e){var i=e(8275).isEmpty,r=e(8841),o=e(6592),u=e(192),a=e(1353).DT,c=e(7852),s=e(6761),f=e(8260),l=e(2025).get("stores/pending_events"),d=o.StorageKeys.PENDING_EVENTS,v=!1;n.persistPendingEvents=function(){try{var t=l.getEventsString();a.setItem(d,t),e(5292).setItem(d,t)}catch(t){c.warn("PendingEvents / Unable to set localStorage key, error was: ",t),r.emitInternalError(t)}},n.flushPersistPendingEvents=function(){v&&(v=!1,n.persistPendingEvents())},n.schedulePersistPendingEvents=function(){v||(v=!0,s.resolve().then(n.flushPersistPendingEvents).catch((function(t){c.warn("PendingEvents / Unable to persist pending events, error was: ",t)})))},n.getPendingEvents=function(){try{return u.parse(a.getItem(d))}catch(t){return null}},n.retryPendingEvents=function(t){Object.keys(t).forEach((function(n){var e=t[n];f.retryableRequest(e.data,n,e.retryCount)})),i(t)||c.log("Retried pending events: ",t)}},9937:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(2025),u=e(6592),a=e(7566),c=e(409);n.registerApiModule=function(t,n){Array.isArray(n)&&(n=o.evaluate(n)),c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.apiModules,name:t,plugin:n})},n.registerDependency=function(t,n){o.get(t)||o.register(t,n)},n.registerVisitorProfileProvider=function(t){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.visitorProfileProviders,name:t.provides,plugin:t})},n.registerViewProvider=function(t){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.viewProviders,name:t.provides,plugin:t})},n.registerAudienceMatcher=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.audienceMatchers,name:t,plugin:n})},n.registerViewMatcher=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.viewMatchers,name:t,plugin:n})},n.registerAnalyticsTracker=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.analyticsTrackers,name:t,plugin:n})},n.registerViewTagLocator=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.viewTagLocators,name:t,plugin:n})},n.registerAudiencePlugin=function(t){t.dependencies&&Object.keys(t.dependencies).forEach((function(e){var i=t.dependencies[e];n.registerDependency(e,i)}));var e,r,u="vendor."+t.vendor;e="string"==typeof t.provider?o.get(t.provider)(t.vendor):"function"==typeof t.provider?t.provider(t.vendor):i(t.provider),n.registerVisitorProfileProvider(Object.assign(e,{provides:u})),r="string"==typeof t.matcher?o.get(t.matcher):t.matcher;var a={fieldsNeeded:[u],match:function(t,n){return r(t[u],n)}};n.registerAudienceMatcher(u,a)};var s={};n.registerWidget=function(t){Array.isArray(t)&&(t=o.evaluate(t));var n=t.widgetId,e=s[n];e&&(a.off(e.showToken),a.off(e.hideToken));var i=a.on({filter:{type:"showWidget",name:n},handler:t.showFn}),r=a.on({filter:{type:"hideWidget",name:n},handler:t.hideFn});return s[n]={showToken:i,hideToken:r},s[n]},n.hasWidget=function(t){return Object.prototype.hasOwnProperty.call(s,t)},n.registerChangeApplier=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.changeAppliers,name:t,plugin:n})},n.registerDecider=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.deciders,name:t,plugin:n})},n.registerEventImplementation=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.eventImplementations,name:t,plugin:n})},n.registerViewTrigger=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:u.PluginTypes.viewTriggers,name:t,plugin:n})}},9207:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.mapValues,u=e(2025),a=":",c="holdback",s="treatment",f="",l=e(7852),d=e(5686);function v(t){return t.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}n.formatNamesAndIdsForAnalytics=function(t,n,e,i){var a={layer:t.name||f,experiment:n.name||f,variation:e.name||f};i&&(a=o(a,v));var c,s=!t.integrationStringVersion||1===t.integrationStringVersion;if(a.experiment===f&&s)if(c=n.audienceIds,r(c)||-1===["and","or","not"].indexOf(c[0])){var l=u.get("stores/audience_data");a.experiment=function(t,n){return r(n)?"everyone_else":n.reduce((function(n,e){var i=t.get(e);return i?n+v(i.name?i.name:i.id)+",":n}),"").slice(0,-1)}(l,n.audienceIds)}else a.experiment="Exp";return{names:a,idStrings:{layer:"("+v(t.id)+")",experiment:"("+v(n.id)+")",variation:"("+v(e.id)+")"}}},n.combineAndTruncateIdAndName=function(t,n,e){var i=e-n.length;if(i<0&&(l.warn("maxLength must be at least long enough to fit the entity ID, which is length"+n.length+". Defaulting to only use entity ID as name."),t=f),t===f)return n;if(t.length>i){var r=Math.min(t.length,i);return(t=t.substring(0,r))+n}return t+" "+n},n.generateAnalyticsString=function(t,e,i,r,o,u){return t.integrationStringVersion&&2===t.integrationStringVersion?function(t,e,i,r,o,u){if(d.isSingleExperimentPolicy(t.policy)&&r)return;var s=!d.isSingleExperimentPolicy(t.policy)&&r,f=n.formatNamesAndIdsForAnalytics(t,e,i,u),l=[f.names.experiment,f.names.variation],v=[f.idStrings.experiment,f.idStrings.variation];d.isSingleExperimentPolicy(t.policy)||(l.unshift(f.names.layer),v.unshift(f.idStrings.layer));var h=v.reduce((function(t,n){return t+n.length}),0),p=l.length-1+(s?1:0),g=h+1*p;if(s&&(g+=8),g>o)throw new Error("The analytics string size is too low to send the entity IDs.");for(var m=o-g,b=l.length,y=[],w=l.length-1;w>=0;w--){var _=l[w],E=Math.min(_.length,Math.floor(m/b));m-=E,b--,y.unshift(_.substring(0,E))}var I=y.map((function(t,n){return t+v[n]}));return s&&I.push(c),I.join(a)}(t,e,i,r,o,u):function(t,e,i,r,o,u){var f=r?c:s,l=3,v=n.formatNamesAndIdsForAnalytics(t,e,i,u),h=v.names,p=v.idStrings,g=Object.values(p).reduce((function(t,n){return t+n.length}),0);if(g+l+f.length>o)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var m=o-g-l-f.length,b={};b.variation=Math.min(h.variation.length,Math.floor(m/3)),m-=b.variation,b.experiment=Math.min(h.experiment.length,Math.floor(m/2)),m-=b.experiment,b.layer=m;var y={};Object.keys(h).forEach((function(t){var n=h[t];y[t]=n.substring(0,b[t])}));var w=[];return d.isSingleExperimentPolicy(t.policy)||w.push(y.layer+p.layer),(w=w.concat([y.experiment+p.experiment,y.variation+p.variation,f])).join(a)}(t,e,i,r,o,u)}},6582:function(t){t.exports=function(t,n){t=function(t){var n=t.split("?");if(n[1]){var i=n[1].split("#"),r=i[0],o=i.slice(1).join("#"),u=r.split("&"),a=[];return u.forEach((function(t){0!==t.indexOf(e)&&a.push(t)})),n[1]="",a.length>0&&(n[1]="?"+a.join("&")),o&&(n[1]+="#"+o),n.join("")}return t}(t);var i=n.value;switch(n.match){case"exact":return(t=o(t))===o(i);case"regex":try{return Boolean(t.match(i))}catch(t){}return!1;case"simple":return(t=r(t))===(i=r(i));case"substring":return t=o(t,!0),i=o(i,!0),-1!==t.indexOf(i);default:return!1}};var n=["www."],e="optimizely_",i=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"];function r(t){return o(function(t){var n=t.indexOf("?");return-1!==n&&(t=t.substring(0,n)),-1!==(n=t.indexOf("#"))&&(t=t.substring(0,n)),t}(t))}function o(t,e){t=(t=t.replace("/?","?")).toLowerCase().replace(/[/&?]+$/,"");var r=i.slice(0);e||(r=r.concat(n));for(var o=r.length,u=0;u<o;u++){var a=r[u],c=new RegExp("^"+a);t=t.replace(c,"")}return t}},3822:function(t,n,e){var i=e(8859).getFieldValue,r=e(2973);t.exports=function(t,n){var e=i(t,n.name.split("."));return Array.isArray(e)?e.some((function(t){return r.hasMatch(n.value,n.match,t)})):r.hasMatch(n.value,n.match,e)}},131:function(t,n,e){var i=e(5192),r=e(7219),o="cdn3";n.getIP=function(){return i.makeAsyncRequest(o,a).then((function(t){return t.ip}))},n.getIPDerivedGeolocation=function(){return i.makeAsyncRequest(o,a).then((function(t){return t.location}))};var u="//cdn3.optimizely.com/js/geo4.js";function a(){r.addScriptAsync(u,void 0,"script")}},5628:function(t,n,e){var i=e(136),r=e(3019),o=e(7852),u=e(8275).isEmpty;t.exports={initialize:function(){this.X={actions:{},actionState:{}},this.on(i.DATA_LOADED,this.ht),this.on(i.ACTION_EXECUTED,this.bt),this.on(i.SET_CHANGE_APPLIER,this.yt),this.on(i.REMOVE_ACTION_STATE,this.wt)},ht:function(t){var n=this;u(t.data.layers)||(t.data.layers.forEach((function(t){var e;if(t.changes){var i="layerId:"+t.id;e={id:i,layerId:t.id,changeSet:t.changes,type:"layer"},r.deepFreeze(e),n.X.actions[i]=e}(t.experiments||[]).forEach((function(i){if(i.changes){var o="experimentId:"+i.id;e={id:o,layerId:t.id,experimentId:i.id,changeSet:i.changes,type:"experiment"},r.deepFreeze(e),n.X.actions[o]=e}(i.variations||[]).forEach((function(o){(o.actions||[]).forEach((function(u){var a=u.pageId||u.viewId,c=i.id+":"+o.id+":"+a;e={id:c,layerId:t.id,experimentId:i.id,variationId:o.id,pageId:a,changeSet:u.changes,type:"variation"},r.deepFreeze(e),n.X.actions[c]=e}))}))}))})),this.emitChange())},bt:function(t){var n=t.actionId;void 0===n||this.X.actionState[n]||(this.X.actionState[n]={})},yt:function(t){var n=t.actionId,e=t.changeId;this.X.actionState[n]?this.X.actionState[n][e]=t.changeApplier:o.warn("Action Data / Attempted to set changeApplier for inactive action: ",n)},wt:function(t){delete this.X.actionState[t.actionId]},get:function(t){return r.safeReference(this.X.actions[t])},getActionState:function(t){return r.safeReference(this.X.actionState[t])},getByChangeId:function(t){return Object.values(this.X.actions).find((function(n){return n.changeSet&&n.changeSet.some((function(n){return n.id===t}))}))},getAllActionIdsByPageId:function(t){return Object.values(this.X.actions).filter((function(n){return n.pageId===t})).map((function(t){return t.id}))},getChangeApplier:function(t,n){var e=this.X.actionState[n];if(e)return e[t]},getExperimentVariationActions:function(t,n){return r.safeReference(Object.values(this.X.actions).filter((function(e){return e.experimentId===t&&e.variationId===n})))},getLayerActions:function(t){return r.safeReference(Object.values(this.X.actions).filter((function(n){return n.id==="layerId:"+t})))},getExperimentActions:function(t){return r.safeReference(Object.values(this.X.actions).filter((function(n){return n.id==="experimentId:"+t})))},getAll:function(){return r.safeReference(Object.values(this.X.actions))}}},9021:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.X={},this.on(i.REGISTER_ASYNC_DEFERRED,this._t),this.on(i.RESOLVE_DEFERRED,this.Et),this.on(i.REJECT_DEFERRED,this.It)},getRequest:function(t){return this.X[t]},getPromise:function(t){var n=this.getRequest(t);if(n)return n.promise},_t:function(t){this.X[t.source]={promise:t.promise,resolver:t.resolver,rejecter:t.rejecter}},Et:function(t){var n=this.getRequest(t.source);if(!n)throw new Error("No request registered for source: "+t.source);n.resolver(t.resolveWith)},It:function(t){var n=this.getRequest(t.source);if(!n)throw new Error("No request registered for source: "+t.source);if(!n.rejecter)throw new Error("No rejecter registered for source: "+t.source);n.rejecter(t.rejectWith)}}},2500:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.merge,u=e(136),a=e(3019);function c(t,n){return n||(n={}),t?(t.forEach((function(t){if("string"!=typeof t){if("object"==typeof t&&null!==t&&!Array.isArray(t)){var e=t.type,i=t.name||"_";n[e]||(n[e]={}),n[e][i]=!0}Array.isArray(t)&&c(t,n)}})),n):n}t.exports={initialize:function(){this.X={audiences:{},featuresNeeded:{}},this.on(u.DATA_LOADED,this.ht)},ht:function(t){if(!r(t.data.audiences)){var n=this;t.data.audiences.forEach((function(t){a.deepFreeze(t),o(n.X.featuresNeeded,c(t.conditions)),n.X.audiences[t.id]=t})),this.emitChange()}},getAll:function(){return a.safeReference(Object.values(this.X.audiences))},getFeaturesNeeded:function(t){return a.safeReference(this.X.featuresNeeded[t]||{})},getAudiencesMap:function(){return a.safeReference(this.X.audiences)},get:function(t){return a.safeReference(this.X.audiences[t])},getAudienceName:function(t){return Object.values(this.X.audiences).find((function(n){return n.id===t})).name||"Aud "+t}}},7090:function(t,n,e){var i=e(8275).isEmpty,r=e(136),o=e(3019);t.exports={initialize:function(){this.X={},this.on(r.ADD_CHANGE,this.At),this.on(r.DATA_LOADED,this.ht)},getChange:function(t){return this.X[t]},ht:function(t){if(!i(t.data.changes)){var n=this;t.data.changes.forEach((function(t){n.At(t)}))}},At:function(t){o.deepFreeze(t),this.X[t.id]=t,this.emitChange()}}},2587:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(6592);t.exports={initialize:function(){this.X={};var t=this;Object.keys(o.Lifecycle).forEach((function(n){var e=o.Lifecycle[n];t.X[e]=[]})),this.on(r.ADD_CLEANUP_FN,this.St),this.on(r.CLEAR_CLEANUP_FN,this.kt)},getCleanupFns:function(t){return i(this.X[t])},St:function(t){this.X[t.lifecycle].push(t.cleanupFn),this.emitChange()},kt:function(t){var n=this.X[t.lifecycle];if(t.cleanupFn){var e=n.indexOf(t.cleanupFn);e>-1&&(n.splice(e,1),this.emitChange())}else this.X[t.lifecycle]=[],this.emitChange()}}},2814:function(t,n,e){var i=e(136),r=e(7871);t.exports={initialize:function(){this.X={name:r.NAME,version:r.VERSION},this.on(i.SET_CLIENT_NAME,this.Tt),this.on(i.SET_CLIENT_VERSION,this.Ot)},getClientName:function(){return this.X.name},getClientVersion:function(){return this.X.version},Tt:function(t){t&&(this.X.name=t),this.emitChange()},Ot:function(t){t&&(this.X.version=t),this.emitChange()}}},6108:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.X={currentDomain:null,defaultAgeSeconds:15552e3,autoRefresh:true},this.on(i.SET_COOKIE_DOMAIN,this.Rt),this.on(i.SET_COOKIE_AGE,this.xt),this.on(i.SET_COOKIE_AUTO_REFRESH,this.Nt)},getCurrentDomain:function(){return this.X.currentDomain},getDefaultAgeInSeconds:function(){return this.X.defaultAgeSeconds},getAutoRefresh:function(){return this.X.autoRefresh},Rt:function(t){this.X.currentDomain=t,this.emitChange()},xt:function(t){this.X.defaultAgeSeconds=t,this.emitChange()},Nt:function(t){this.X.autoRefresh=t,this.emitChange()}}},1862:function(t,n,e){var i=e(136),r=e(3019),o=e(8275).isEmpty;t.exports={initialize:function(){this.X={},this.on(i.DATA_LOADED,this.ht)},ht:function(t){if(!o(t.data.dimensions)){var n=this;t.data.dimensions.forEach((function(t){r.deepFreeze(t),n.X[t.id]=t})),this.emitChange()}},getAll:function(){return r.safeReference(Object.values(this.X))},getById:function(t){return r.safeReference(this.X[t])},getByApiName:function(t){var n=Object.values(this.X);return r.safeReference(n.find((function(n){return n.apiName===t})))}}},5798:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,u=e(136);t.exports={initialize:function(){this.X={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1,requestedEmbeddedEditor:!1},this.on(u.LOAD_DIRECTIVE,this.Ct)},getAll:function(){return r(this.X)},conflictInObservingChanges:function(){return!this.X.mutationObserverAPISupported},isDisabled:function(){return this.X.disabled},isEditor:function(){return this.X.isEditor},clientHasAlreadyInitialized:function(){return this.X.alreadyInitialized},getForceAudienceIds:function(){return this.X.forceAudienceIds},getForceVariationIds:function(){return this.X.forceVariationIds},getPreviewLayerIds:function(){return this.X.previewLayerIds},getProjectToken:function(){return this.X.projectToken},getForceTracking:function(){return this.X.forceTracking},shouldActivate:function(){return!this.X.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.X.isPreview},shouldBootstrapDataForEditor:function(){return this.X.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.X.isPreview||this.X.isLegacyPreview||!this.getProjectToken()||this.X.isEditor)},shouldLoadEmbeddedEditor:function(){return this.X.requestedEmbeddedEditor&&!this.X.isEditor},shouldBailForDesktopApp:function(){return!this.X.isEditor&&this.X.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.X.isSlave&&!this.X.isEditor&&this.X.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return this.X.mutationObserverAPISupported},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.X.shouldOptOut},shouldSendTrackingData:function(){return!this.X.trackingDisabled&&(!!this.X.forceTracking||!this.X.isPreview&&o(this.getForceVariationIds())&&o(this.getForceAudienceIds()))},isSlave:function(){return this.X.isSlave},isRunningInDesktopApp:function(){return this.X.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.X.isRunningInV2Editor},Ct:function(t){Object.assign(this.X,t),this.emitChange()}}},9034:function(t,n,e){var i=e(136),r=e(3019),o=e(8275).isEmpty;t.exports={initialize:function(){this.X={},this.on(i.DATA_LOADED,this.ht)},getAll:function(){return r.safeReference(Object.values(this.X))},getEventsMap:function(){return r.safeReference(this.X)},get:function(t){return r.safeReference(this.X[t])},getByApiName:function(t){var n=Object.values(this.X);return r.safeReference(n.find((function(n){return n.apiName===t})))},getByPageId:function(t){var n=Object.values(this.X);return r.safeReference(n.filter((function(n){return n.pageId===t})))},ht:function(t){if(!o(t.data.events)){var n=this;t.data.events.forEach((function(t){t.pageId||(t.pageId=t.viewId),r.deepFreeze(t),n.X[t.id]=t})),this.emitChange()}}}},4338:function(t,n,e){var i=e(136);function r(t){var n=[];return t&&"object"==typeof t&&null!==t?(t.type&&n.push(t.type),n.push("|"),t.type&&t.name&&n.push(t.name),n.join("")):"|"}t.exports={initialize:function(){this.X={handlers:{}},this.on(i.ADD_EMITTER_HANDLER,this.Dt),this.on(i.REMOVE_EMITTER_HANDLER,this.jt)},getHandlers:function(t,n){var e=[null,{type:t.type},{type:t.type,name:t.name}],i=[],o=this;return e.forEach((function(t){var n=r(t),e=o.X.handlers[n];e&&(i=i.concat(e))})),n&&(i=i.filter((function(t){return!t.publicOnly}))),i},Dt:function(t){var n=r(t.filter);this.X.handlers[n]||(this.X.handlers[n]=[]),this.X.handlers[n].push({handler:t.handler,token:t.token,publicOnly:!!t.publicOnly,emitErrors:!!t.emitErrors}),this.emitChange()},jt:function(t){var n=!1,e=t.token;Object.keys(this.X.handlers).forEach(function(t){var i=this.X.handlers[t],r=i.filter((function(t){return t.token!==e}));r.length!==i.length&&(n=!0,this.X.handlers[t]=r)}.bind(this)),n&&this.emitChange()}}},2940:function(t,n,e){var i=e(136),r=e(3019);t.exports={initialize:function(){this.X={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{},ga4UserId:null,trafficExclusion:null},this.on(i.DATA_LOADED,this.Mt),this.on(i.ACTIVATE,this.Pt),this.on(i.RECORD_GLOBAL_DECISION,this.Lt),this.on(i.SET_DOMCONTENTLOADED,this.Ut),this.on(i.SET_GA4_USER_ID,this.Vt)},getRevision:function(){return this.X.revision},getGlobalHoldbackThreshold:function(){return this.X.holdback},getProjectId:function(){return this.X.projectId},getSnippetId:function(){return this.X.snippetId},getAccountId:function(){return this.X.accountId},getNamespace:function(){return this.X.namespace},getActivationId:function(){return this.X.activationId},getActivationTimestamp:function(){return this.X.activationTimestamp},getAnonymizeIP:function(){return this.X.anonymizeIP},getTrafficExclusion:function(){return this.X.trafficExclusion},isGlobalHoldback:function(){return!!this.X.isGlobalHoldback},getListTargetingKeys:function(){return this.X.listTargetingKeys.slice()},getDCPServiceId:function(){return this.X.dcpServiceId},getDCPKeyfieldLocators:function(){return this.X.dcpKeyfieldLocators},getRecommenderServices:function(){return this.X.recommenderServices},getProjectJS:function(){return this.X.projectJS},getPlugins:function(){return this.X.plugins},getExperimental:function(){return r.safeReference(this.X.experimental)},getGA4UserId:function(){return this.X.ga4UserId},domContentLoadedHasFired:function(){return this.X.domContentLoaded},Pt:function(t){this.X.activationId=t.activationId,this.X.activationTimestamp=t.activationTimestamp,this.X.isGlobalHoldback=null},Lt:function(t){var n=t.isGlobalHoldback;if(null!==this.X.isGlobalHoldback&&this.X.isGlobalHoldback!==n)throw new Error("Attempted to change already set global holdback!");this.X.isGlobalHoldback=n,this.emitChange()},Vt:function(t){var n=t.ga4UserId;if(!n)throw new Error('Argument "payload.ga4UserId" is missing');this.X.ga4UserId=n,this.emitChange()},Mt:function(t){var n=t.data,e={};if(["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental","ga4UserId","trafficExclusion"].forEach((function(t){t in n&&(e[t]=n[t])})),0!==Object.keys(e).length){Object.assign(this.X,{listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]},e),this.emitChange()}},Ut:function(){this.X.domContentLoaded=!0,this.emitChange()}}},527:function(t,n,e){var i=e(136),r=e(3019),o=e(8275).isEmpty;t.exports={initialize:function(){this.X={},this.on(i.DATA_LOADED,this.ht)},ht:function(t){if(!o(t.data.groups)){var n=this;t.data.groups.forEach((function(t){r.deepFreeze(t),n.X[t.id]=t})),this.emitChange()}},getAll:function(){return r.safeReference(Object.values(this.X))},getGroupsMap:function(){return r.safeReference(this.X)},get:function(t){return r.safeReference(this.X[t])}}},1459:function(t,n,e){var i=e(136),r=e(9454);t.exports={initialize:function(){this.X={originalPushState:null,originalReplaceState:null},this.on(i.ENSURE_ORIGINAL_PUSHSTATE,this.Bt),this.on(i.ENSURE_ORIGINAL_REPLACESTATE,this.zt)},getOriginalPushState:function(){return this.X.originalPushState},getOriginalReplaceState:function(){return this.X.originalReplaceState},Bt:function(){this.X.originalPushState||(this.X.originalPushState=r.getGlobal("history").pushState.bind(r.getGlobal("history")))},zt:function(){this.X.originalReplaceState||(this.X.originalReplaceState=r.getGlobal("history").replaceState.bind(r.getGlobal("history")))}}},4453:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,u=e(136);t.exports={initialize:function(){this.X={},this.on(u.DATA_LOADED,this.ht),this.on(u.SET_INTEGRATION_SETTINGS,this.Ft)},ht:function(t){if(!o(t.data.integrationSettings)){var n=this;t.data.integrationSettings.forEach((function(t){n.X[t.id]=t})),this.emitChange()}},Ft:function(t){var n=this.X[t.id];n?Object.assign(n,t):this.X[t.id]=t},getAll:function(){return r(Object.values(this.X))},get:function(t){return r(this.X[t])},getReference:function(t){return this.X[t]}}},2734:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(7852),u="*";t.exports={initialize:function(){this.X={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.qt),this.on(r.RECORD_LAYER_DECISION,this.Gt),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.Ht)},getLayerState:function(t,n){if(this.X[t]){var e=this.X[t];if(Object.keys(e).length>1&&!n)throw new Error("View Id must be specified when more than one layerState for layer.");return i(n?e[n]:e[u])}},getLayerStates:function(t){var n=this,e=function(e){var o=n.X[e];Object.keys(o).forEach((function(n){var e=o[n];(void 0===t||e.namespace===t)&&r.push(i(e))}))},r=[];for(var o in this.X)e(o);return r},getLayerStatesForAnalytics:function(){var t=this,n=function(n){var i=t.X[n];Object.keys(i).forEach((function(t){var n=i[t];e.push({layerId:n.layerId,decision:n.decision,decisionEventId:n.decisionEventId})}))},e=[];for(var i in this.X)n(i);return e},qt:function(t){t.merge||(this.X={});var n=this;t.layerStates.forEach((function(t){var e=t.layerId;t.pageId||(t.pageId=t.viewId);var i=t.pageId||u,r=n.X[e];if(void 0===r)n.X[e]={},n.X[e][i]=t;else{var o=r[i];(!o||t.decisionTimestamp>(o.decisionTimestamp||0))&&(n.X[e][i]=t)}})),this.emitChange()},Gt:function(t){var n={layerId:t.layerId,revision:t.revision,namespace:t.namespace,pageId:t.pageId,decisionTicket:t.decisionTicket,decision:t.decision,decisionActivationId:t.activationId,decisionTimestamp:t.timestamp,decisionEventId:null},e=this.X[t.layerId]||{};t.pageId?(delete e[u],e[t.pageId]=n):(e={})[u]=n,this.X[t.layerId]=e,this.emitChange()},Ht:function(t){var n=t.layerId,e=t.pageId||u;this.X[n]?this.X[n][e]?(this.X[n][e].decisionEventId=t.decisionId,this.emitChange()):o.warn("Not recording decision event: Layer state not found for view",e):o.warn("Not recording decision event: Campaign not registered",n)}}},9057:function(t,n,e){var i=e(136),r=e(3019),o=e(5686),u=e(8275).isEmpty;t.exports={initialize:function(){this.X={layers:{},experiments:{},variations:{}},this.on(i.DATA_LOADED,this.ht)},ht:function(t){if(!u(t.data.layers)){var n=this;(t.data.layers||[]).forEach((function(t){(t.experiments||[]).forEach((function(e){t.pageIds||(t.pageIds=t.viewIds),e.campaignName||o.isSingleExperimentPolicy(t.policy)?o.isSingleExperimentPolicy(t.policy)&&t.groupId&&(e.groupId=t.groupId):e.campaignName=t.name,(e.variations||[]).forEach((function(t){(t.actions||[]).forEach((function(t){t.pageId||(t.pageId=t.viewId)})),n.X.variations[t.id]=t})),n.X.experiments[e.id]=e})),r.deepFreeze(t),n.X.layers[t.id]=t})),this.emitChange()}},getAll:function(){return r.safeReference(Object.values(this.X.layers))},getCampaignsMap:function(){return r.safeReference(this.X.layers)},getExperimentsMap:function(){return r.safeReference(this.X.experiments)},getVariationsMap:function(){return r.safeReference(this.X.variations)},getCount:function(){return Object.keys(this.X.layers).length},getAllByPageIds:function(t){var n=this.X.layers;return r.safeReference(Object.keys(n).reduce((function(e,i){var r=n[i];return t.some((function(t){return(r.pageIds||[]).includes(t)}))&&e.push(r),e}),[]))},get:function(t){return r.safeReference(this.X.layers[t])},getLayerByExperimentId:function(t){var n,e=this.X.layers;return Object.keys(e).some((function(i){var r=e[i];return!!(r.experiments||[]).find((function(n){return n.id===t}))&&(n=r,!0)})),r.safeReference(n)},getExperimentByVariationId:function(t){var n,e=this.X.layers;return Object.keys(e).some((function(i){return(e[i].experiments||[]).some((function(e){return(e.variations||[]).find((function(n){return n.id===t}))&&(n=e),!!n}))})),r.safeReference(n)}}},9809:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.X={logs:[]},this.on(i.LOG,this.$t)},getLogs:function(){return this.X.logs},$t:function(t){this.X.logs.push(t),this.emitChange()},tt:function(){return this.X.logs.slice()}}},8338:function(t,n,e){var i=e(136),r=e(3019);t.exports={initialize:function(){this.X={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.Yt),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.Wt)},get:function(){return r.safeReference(this.X.data)},hasTracked:function(){return this.X.hasTracked},Yt:function(t){r.deepFreeze(t),this.X.data=t,this.X.hasTracked=!1,this.emitChange()},Wt:function(){this.X.hasTracked=!0}}},9738:function(t,n,e){var i=e(136),r=e(192);t.exports={initialize:function(){this.X={},this.on(i.SET_PENDING_EVENT,this.Kt),this.on(i.REMOVE_PENDING_EVENT,this.Xt),this.on(i.LOAD_PENDING_EVENTS,this.Jt)},getEvents:function(){return this.X},getEventsString:function(){return r.stringify(this.X)},Kt:function(t){Object.keys(this.X).length>=1e3&&this.Qt();var n=t.id,e=t.retryCount;this.X[n]&&this.X[n].retryCount===e||(this.X[n]={id:n,timeStamp:t.timeStamp,data:t.data,retryCount:e},this.emitChange())},Xt:function(t){delete this.X[t.id],this.emitChange()},Jt:function(t){this.X=t.events,this.Qt(),this.emitChange()},Qt:function(){for(var t=Object.values(this.X).sort((function(t,n){return t.timeStamp-n.timeStamp})),n=0;n<=t.length-1e3;n++)delete this.X[t[n].id];this.emitChange()}}},6067:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.X={layerId:null},this.on(i.ANNOUNCE_PENDING_REDIRECT,this.Yt)},isExpectingRedirect:function(){return"string"==typeof this.X.layerId},getLayerId:function(){return this.X.layerId},Yt:function(t){this.isExpectingRedirect()||(this.X.layerId=t.layerId,this.emitChange())}}},5501:function(t,n,e){var i=e(8275).mapValues,r=e(136),o=e(6592);t.exports={initialize:function(){this.X={},this.X[o.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Zt)},Zt:function(t){void 0===this.X[o.PerformanceData.performance_marks][t.name]&&(this.X[o.PerformanceData.performance_marks][t.name]=[]),this.X[o.PerformanceData.performance_marks][t.name].push(t.data),this.emitChange()},getMarks:function(){return i(this.X[o.PerformanceData.performance_marks],(function(t){return t.map((function(t){return[t.startTime,t.duration]}))}))},getDurationsFor:function(t){var n=this;return t.reduce((function(t,e){var i=n.X[o.PerformanceData.performance_marks][e];return i&&(t[e]=Math.round(i.reduce((function(t,n){return t+n.duration}),0))),t}),{})}}},4715:function(t,n,e){var i=e(8275).mapValues,r=e(136),o=e(6592),u=e(7852);t.exports={initialize:function(){this.X=i(o.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.tn)},tn:function(t){var n=t.type,e=t.name,i=t.plugin;if(!n||!e)throw new Error("Missing information needed to register plugins: "+n+":"+e);if(!this.X[n])throw new Error("Invalid plugin type specified: "+n);this.X[n][e]=i,u.debug("Plugin Store: Registering Plugin :",t)},getAllPlugins:function(t){if(!t)return this.X;if(this.X[t])return this.X[t];throw new Error("Invalid plugin type: "+t)},getPlugin:function(t,n){if(!n||!t)throw new Error("Missing plugin parameters");return this.getAllPlugins(t)[n]||null}}},8515:function(t,n,e){var i=e(136),r=e(8859);t.exports={initialize:function(){this.X={},this.on(i.SET_VISITOR_ATTRIBUTE_PENDING,this.nn)},getPendingAttributeValue:function(t){return t=Array.isArray(t)?t.concat("pending"):[t,"pending"],r.getFieldValue(this.X,t)},nn:function(t){r.setFieldValue(this.X,t.key,{pending:t.pending}),this.emitChange()}}},4999:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,u=i.merge,a=e(136);t.exports={initialize:function(){this.X={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(a.SET_RUM_DATA,this.en),this.on(a.RECORD_API_USAGE,this.rn),this.on(a.INITIALIZE_CHANGE_METRICS,this.un),this.on(a.RECORD_ACTIVATION_TYPE_USAGE,this.an),this.on(a.RECORD_AUDIENCE_USAGE,this.cn),this.on(a.RECORD_CHANGE_MACROTASK_RATE,this.sn),this.on(a.RECORD_CHANGE_OVERHEATED,this.ln),this.on(a.RECORD_CHANGE_TYPE_USAGE,this.dn),this.on(a.RECORD_DOM_OBSERVATION_OCCURENCE,this.vn),this.on(a.RECORD_INTEGRATION_USAGE,this.hn),this.on(a.RECORD_LAYER_FEATURE_USAGE,this.pn),this.on(a.RECORD_LAYER_POLICY_USAGE,this.gn),this.on(a.RECORD_VIEW_FEATURE_USAGE,this.mn),this.on(a.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,this.bn),this.on(a.RECORD_VISITOR_ID_LOCATOR_USAGE,this.yn),this.on(a.RECORD_VISITOR_ID_ERROR,this.wn),this.on(a.RECORD_STICKY_BUCKETING_FEATURE,this._n)},en:function(t){u(this.X,t),this.emitChange()},rn:function(t){this.X.apis[t.methodName]||(this.X.apis[t.methodName]=0),this.X.apis[t.methodName]++,this.emitChange()},un:function(){void 0===this.X.data.extras.changeMacrotaskRate&&(this.X.data.extras.changeMacrotaskRate=0),void 0===this.X.data.extras.numOverheatedChanges&&(this.X.data.extras.numOverheatedChanges=0)},sn:function(t){void 0===this.X.data.extras.changeMacrotaskRate&&(this.X.data.extras.changeMacrotaskRate=0),t.changeMacrotaskRate>this.X.data.extras.changeMacrotaskRate&&(this.X.data.extras.changeMacrotaskRate=t.changeMacrotaskRate),this.emitChange()},ln:function(){void 0===this.X.data.extras.numOverheatedChanges&&(this.X.data.extras.numOverheatedChanges=0),this.X.data.extras.numOverheatedChanges++,this.emitChange()},vn:function(t){this.X.DOMObservation[t.counterName]||(this.X.DOMObservation[t.counterName]=0),this.X.DOMObservation[t.counterName]++,this.emitChange()},En:function(t,n,e){void 0===this.X.featuresNeeded[t]&&(this.X.featuresNeeded[t]={});var i=this.X.featuresNeeded[t];n.forEach((function(t){i[t]||(i[t]={}),i[t][e]||(i[t][e]=!0)}))},hn:function(t){this.En("integrations",t.integrations,t.layerId)},dn:function(t){this.En("changeTypes",t.changeTypes,t.layerId)},an:function(t){this.En("activationTypes",[t.activationType],t.entityId),this.emitChange()},mn:function(t){this.En("viewFeatures",t.featuresUsed,t.entityId),this.emitChange()},pn:function(t){this.En("layerFeatures",[t.feature],t.entityId),this.emitChange()},gn:function(t){this.En("policy",[t.policy],t.layerId),this.emitChange()},cn:function(t){this.En("audiences",t.audienceTypes,t.layerId),this.emitChange()},bn:function(t){this.X.data.extras.viewsInitiallyActivatedCount=t.viewsInitiallyActivatedCount,this.emitChange()},yn:function(t){this.En("visitorIdLocatorType",[t.visitorIdLocatorType],t.entityId),this.emitChange()},wn:function(t){this.X.data.extras.errorCustomVisitorId=t.isError,this.emitChange()},_n:function(t){this.En("stickyBucketing",[t.feature],t.id)},getSampleRum:function(){return this.X.inRumSample},getRumId:function(){return this.X.id},getRumHost:function(){return this.X.RumHost},getApiData:function(){return this.X.apis},getDOMObservationData:function(){return this.X.DOMObservation},getRumData:function(){return r(this.X.data)},getScriptSrc:function(){return this.X.src},getFeaturesNeededData:function(){var t=this.X.featuresNeeded,n={};return Object.keys(t).forEach((function(e){var i=t[e],r=Object.keys(i);o(r)||(n[e]={}),r.forEach((function(t){n[e][t]=Object.keys(i[t]).length}))})),n}}},9292:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.X={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.In)},In:function(t){if(!t.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.X.natives=t.sandboxedFunctions,this.X.initialized=!0,this.emitChange()},getAll:function(){return this.X.natives},get:function(t){if(!t)throw new Error("Missing name parameter");return this.X.natives[t]||null},isInitialized:function(){return this.X.initialized}}},3799:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(8298),u=e(9899);t.exports={initialize:function(){this.X={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.An),this.on(r.LOAD_SESSION_STATE,this.Sn)},getState:function(){return i(this.X)},getSessionId:function(){return this.X.sessionId},Sn:function(t){this.X.sessionId=t.sessionId,this.X.lastSessionTimestamp=t.lastSessionTimestamp,this.emitChange()},An:function(){var t=o.now(),n=this.X.lastSessionTimestamp;(!this.X.sessionId||t-n>18e5)&&(this.X.sessionId=u.generate()),this.X.lastSessionTimestamp=t,this.emitChange()}}},8950:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,u=e(136);t.exports={initialize:function(){this.kn(),this.on(u.FINALIZE_BATCH_SNAPSHOT,this.Tn),this.on(u.REGISTER_PREVIOUS_BATCH,this.On),this.on(u.REGISTER_TRACKER_VISITOR,this.Rn),this.on(u.REGISTER_TRACKER_EVENT,this.xn),this.on(u.REGISTER_TRACKER_DECISION,this.Nn),this.on(u.RESET_TRACKER_EVENTS,this.Cn),this.on(u.RESET_TRACKER_STORE,this.kn),this.on(u.RESET_TRACKER_PREVIOUS_BATCHES,this.Dn),this.on(u.SET_TRACKER_POLLING,this.jn),this.on(u.SET_TRACKER_BATCHING,this.Mn),this.on(u.SET_TRACKER_USE_BEACON,this.Pn),this.on(u.SET_TRACKER_SEND_EVENTS,this.Ln),this.on(u.SET_TRACKER_PERSISTABLE_STATE,this.Un),this.on(u.SET_TRACKER_DIRTY,this.Vn),this.on(u.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.Bn)},getPersistableState:function(){return this.X.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.X.data,decisions:this.X.decisions,decisionEvents:this.X.decisionEvents,previousBatches:this.X.previousBatches}:{}:null},Un:function(t){o(this.X.data)||o(t.data)||(this.Tn(),this.X.previousBatches.push(this.getEventBatch())),this.X.data=t.data||{},this.X.decisions=t.decisions||[],this.X.decisionEvents=t.decisionEvents||[],o(this.X.previousBatches)||o(t.previousBatches)?this.X.previousBatches=t.previousBatches||[]:this.X.previousBatches=this.X.previousBatches.concat(t.previousBatches),this.emitChange()},Vn:function(t){this.X.isDirty=t,this.emitChange()},xn:function(t){var n=this.zn();(o(n.snapshots)||!o(this.X.decisionEvents))&&this.Fn(),this.qn().events.push(t.event),this.X.decisions=t.decisions,this.Vn(!0)},Nn:function(t){this.X.decisionEvents.push(t.decisionEvent),this.X.decisions=t.decisions,this.Vn(!0)},Rn:function(t){o(this.X.data)?this.X.data=t.data:this.Tn(),this.X.data.visitors.push(t.visitor),this.X.decisions=t.decisions,this.X.decisionEvents=[],this.Vn(!0)},On:function(t){this.X.previousBatches.push(t),this.Vn(!0)},kn:function(){this.X={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Cn:function(){var t=this.zn();this.X.data.visitors=[t],t.snapshots=[],this.Vn(!0)},Dn:function(){this.X.previousBatches=[],this.Vn(!0)},jn:function(t){this.X.polling=t,this.emitChange()},Mn:function(t){this.X.shouldBatch=t,this.emitChange()},Pn:function(t){this.X.shouldUseBeacon=t,this.emitChange()},Ln:function(t){this.X.canSend=t,this.emitChange()},getEventBatch:function(){return r(this.X.data)},getPreviousBatches:function(){return r(this.X.previousBatches)},Gn:function(){return this.X.decisionEvents.slice()},Hn:function(){this.X.decisionEvents=[]},$n:function(){return this.X.decisions.slice()},isPolling:function(){return this.X.polling},shouldBatch:function(){return this.X.shouldBatch},shouldUseBeacon:function(){return this.X.shouldUseBeacon},qn:function(){var t=this.zn(),n=t&&t.snapshots;return n&&n[n.length-1]},zn:function(){var t=this.X.data.visitors;return t&&t[t.length-1]},Fn:function(){var t=this.Gn();this.zn().snapshots.push({decisions:this.$n(),events:t}),this.Hn(),this.Vn(!0)},Tn:function(){this.X.decisionEvents.length>0&&this.Fn()},hasEventsToSend:function(){if(!o(this.X.decisionEvents))return!0;if(!o(this.X.data)&&(this.X.data.visitors||[]).some((function(t){return t.snapshots.length>0})))return!0;return!1},hasPreviousBatchesToSend:function(){return!o(this.X.previousBatches)},canSend:function(){return this.X.canSend},Bn:function(t){var n=this.zn();n&&(n.attributes=t.attributes)}}},4184:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,u=e(136);t.exports={initialize:function(){this.X={},this.on(u.SET_UA_DATA,this.ht)},ht:function(t){o(this.X)&&(this.X=t.data)},get:function(){return r(this.X)}}},90:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(7852),u={globalTags:{},viewStates:{},shouldBatch:!1};t.exports={initialize:function(){this.X=i(u),this.on(r.REGISTER_VIEWS,this.Yn),this.on(r.SET_VIEW_ACTIVE_STATE,this.Wn),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.Kn),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.Xn),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.Jn),this.on(r.SET_GLOBAL_TAGS,this.Qn),this.on(r.RESET_VIEW_STATES,this.Zn),this.on(r.SET_VIEW_BATCHING,this.Mn)},getAll:function(){var t={};for(var n in this.X.viewStates)t[n]=this.getViewState(n);return t},getActiveViewIds:function(){var t=this,n=this.X.viewStates;return Object.keys(n).reduce((function(n,e){return t.isViewActive(e)&&n.push(e),n}),[])},shouldBatch:function(){return this.X.shouldBatch},getViewState:function(t){var n=i(this.X.viewStates[t]),e=this.X.globalTags;return n.metadata=Object.assign({},n.parsedMetadata,e,n.userSuppliedMetadata),n},getActiveViewTags:function(){var t=this.getActiveViewStates().map((function(t){return t.metadata})),n=[{}].concat(t);return Object.assign.apply(Object,n)},getActivationEventId:function(t){return this.X.viewStates[t]?this.X.viewStates[t].activationEventId:null},getActiveViewStates:function(){var t=this,n=this.X.viewStates;return Object.keys(n).reduce((function(n,e){return t.isViewActive(e)&&n.push(t.getViewState(e)),n}),[])},isViewActive:function(t){var n=this.X.viewStates[t];return n||o.warn("No Page registered with id",t),!!n.isActive},getGlobalTags:function(){return i(this.X.globalTags)},Zn:function(){this.X.viewStates={},this.emitChange()},Yn:function(t){var n=t.forceClean||!1,e=this;t.views.forEach((function(t){var i=t.id;e.X.viewStates[i]={id:i,isActive:"boolean"!=typeof t.isActive||n?null:t.isActive,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}})),this.emitChange()},Wn:function(t){var n=t.view.id;if(!this.X.viewStates[n])throw new Error("No view exists with id "+n);this.X.viewStates[n].isActive=t.isActive,t.isActive?this.X.viewStates[n].activatedTimestamp=t.timestamp:(this.X.viewStates[n].parsedMetadata={},this.X.viewStates[n].userSuppliedMetadata={}),this.emitChange()},Kn:function(t){var n=t.pageId;if(!this.X.viewStates[n])throw new Error("No view exists with id "+n);Object.assign(this.X.viewStates[n].parsedMetadata,t.metadata),this.emitChange()},Xn:function(t){var n=t.pageId;if(!this.X.viewStates[n])throw new Error("No view exists with id "+n);Object.assign(this.X.viewStates[n].userSuppliedMetadata,t.metadata),this.emitChange()},Jn:function(t){var n=t.pageId;this.X.viewStates[n]&&(this.X.viewStates[n].activationEventId=t.eventData.eventId,this.emitChange())},Qn:function(t){Object.assign(this.X.globalTags,t),this.emitChange()},Mn:function(t){this.X.shouldBatch=t,this.emitChange()}}},749:function(t,n,e){var i=e(136),r=e(3019),o=e(8275).isEmpty;t.exports={initialize:function(){this.X={views:{},apiNamesToViews:{}},this.on(i.DATA_LOADED,this.ht)},getAll:function(){return r.safeReference(Object.values(this.X.views))},getPagesMap:function(){return r.safeReference(this.X.views)},get:function(t){return r.safeReference(this.X.views[t])},getByApiName:function(t){return r.safeReference(this.X.apiNamesToViews[t])},apiNameToId:function(t){var n=this.X.apiNamesToViews[t];if(n)return n.id},idToApiName:function(t){var n=this.X.views[t];if(n)return n.apiName},getNumberOfPages:function(){return Object.keys(this.X.views).length},getAllViewsForActivationType:function(t){var n=this.X.views;return Object.keys(n).map((function(t){return n[t]})).filter((function(n){return n.activationType===t}))},ht:function(t){if(!o(t.data.views)){var n=this;t.data.views.forEach((function(t){r.deepFreeze(t),n.X.views[t.id]=t,n.X.apiNamesToViews[t.apiName]=t})),this.emitChange()}}}},2857:function(t,n,e){var i=e(8275).cloneDeep,r=e(136),o=e(8859);t.exports={initialize:function(){this.X={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.te),this.on(r.SET_VISITOR_ATTRIBUTES,this.ne),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.ee)},getVisitorProfile:function(){return this.X.profile},getVisitorProfileMetadata:function(){return this.X.metadata},getAttribute:function(t){var n=this.X.profile;return i(o.getFieldValue(n,t))},getAttributeMetadata:function(t){return i(this.X.metadata[t])},getVisitorIdFromAPI:function(){return this.X.visitorId},ee:function(t){this.X.profile=t.profile,this.X.metadata=t.metadata,this.emitChange()},ne:function(t){var n=this;t.attributes.forEach((function(t){var e=t.key;o.setFieldValue(n.X.profile,e,t.value),t.metadata&&Object.keys(t.metadata).forEach((function(i){var r=t.metadata[i];o.setFieldValue(n.X.metadata,e.concat(i),r)}))})),this.emitChange()},te:function(t){this.X.visitorId=t,this.emitChange()}}},6658:function(t,n,e){var i=e(136),r=e(8275).isEmpty;t.exports={initialize:function(){this.X={},this.on(i.DATA_LOADED,this.re)},getCustomBehavioralAttributes:function(){var t=this.X;return Object.keys(t).reduce((function(n,e){var i=t[e];return i.rule_json&&n.push(i),n}),[])},getVisitorAttribute:function(t){var n=Object.values(this.X);if(t.datasourceId&&(n=n.filter((function(n){return n.dcp_datasource_id===String(t.datasourceId)}))),t.attributeName&&t.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(t.attributeId){var e=this.X[t.attributeId];if(!e)throw new Error("Unrecognized attribute ID: "+t.attributeId);return e}if(t.attributeName){var i=n.filter((function(n){return n.name===t.attributeName}));if(!i.length)throw new Error("Unrecognized attribute name: "+t.attributeName);if(i.length>1)throw new Error("Too many attributes with name: "+t.attributeName);return i[0]}throw new Error("Must specify attribute name or attribute ID")},re:function(t){if(!r(t.data.visitorAttributes)){var n=this;t.data.visitorAttributes.forEach((function(t){n.X[t.id]=t})),this.emitChange()}}}},7016:function(t,n,e){Object.defineProperty(n,"u",{value:!0});var i=e(8275),r=i.cloneDeep,o=i.isEqual,u=e(136),a=e(192);t.exports={initialize:function(){this.X={variationIdMap:{},preferredLayerMap:{},contextualMabMap:{},odpSegments:{}},this.on(u.UPDATE_VARIATION_ID_MAP,this.oe),this.on(u.MERGE_VARIATION_ID_MAP,this.ue),this.on(u.UPDATE_PREFERRED_LAYER_MAP,this.ae),this.on(u.MERGE_PREFERRED_LAYER_MAP,this.ce),this.on(u.UPDATE_CONTEXTUAL_MAB_MAP,this.se),this.on(u.MERGE_CONTEXTUAL_MAB_MAP,this.fe),this.on(u.SET_ODP_SEGMENTS,this.le)},le:function(t){this.X.odpSegments=t,this.emitChange()},getOdpSegments:function(){return this.X.odpSegments},getContextualMabMap:function(){return r(this.X.contextualMabMap)},getContextualMabMapString:function(){return a.stringify(this.X.contextualMabMap)},se:function(t){var n=this.X.contextualMabMap[t.layerId]||{};o(n[t.experimentId],t.variationData)||(n[t.experimentId]=t.variationData,this.X.contextualMabMap[t.layerId]=n,this.emitChange())},fe:function(t){var n=this.X.contextualMabMap;Object.keys(t.contextualMabMap).forEach((function(e){var i=t.contextualMabMap[e];n[e]||(n[e]={}),Object.keys(i).forEach((function(t){var r=i[t];n[e][t]||(n[e][t]=r)}))})),this.X.contextualMabMap=n,this.emitChange()},getVariationIdMap:function(){return r(this.X.variationIdMap)},getVariationIdMapString:function(){return a.stringify(this.X.variationIdMap)},oe:function(t){var n=this.X.variationIdMap[t.layerId]||{};n[t.experimentId]!==t.variationId&&(n[t.experimentId]=t.variationId,this.X.variationIdMap[t.layerId]=n,this.emitChange())},ue:function(t){var n=this.getVariationIdMap(),e=t.variationIdMap;Object.keys(n||{}).forEach((function(t){var i=(n||{})[t];e[t]?Object.assign(e[t],i):e[t]=i})),this.X.variationIdMap=e,this.emitChange()},getPreferredLayerMap:function(){return r(this.X.preferredLayerMap)},getPreferredLayerMapString:function(){return a.stringify(this.X.preferredLayerMap)},getPreferredLayerId:function(t){return this.X.preferredLayerMap[t]},ae:function(t){this.X.preferredLayerMap[t.groupId]!==t.layerId&&(this.X.preferredLayerMap[t.groupId]=t.layerId,this.emitChange())},ce:function(t){var n=this.getPreferredLayerMap(),e=t.preferredLayerMap;Object.assign(e,n),this.X.preferredLayerMap=e,this.emitChange()}}},2725:function(t,n,e){var i=e(136);e(8487).J;t.exports={initialize:function(){this.X={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.ht),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.de),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.ve)},getEvents:function(){return this.X.events},getForeignEvents:function(){return this.X.foreignEvents},getForeignEventQueues:function(){return this.X.foreignEventQueues},ht:function(t){this.X.events=t,this.emitChange()},de:function(t){this.X.foreignEvents[t.key]=t.value},ve:function(t){this.X.foreignEventQueues[t.key]=t.value}}},977:function(t,n,e){var i=e(136);t.exports={initialize:function(){this.X={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.he)},getBaseMap:function(){return this.X.baseMap},getEventQueue:function(){return this.X.eventQueue},getLastEvent:function(){return this.X.lastEvent},getCleared:function(){return this.X.cleared},getInitialized:function(){return this.X.initialized},he:function(t){this.X[t.key]=t.value}}},241:function(t,n,e){var i=e(8275).isEmpty,r=e(136);t.exports={initialize:function(){this.X={randomId:null,visitorIdLocator:null},this.on(r.SET_VISITOR_ID,this.ht),this.on(r.DATA_LOADED,this.pe)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.X.randomId},getVisitorIdLocator:function(){return this.X.visitorIdLocator},ht:function(t){Object.assign(this.X,t),this.emitChange()},pe:function(t){i(t.data.visitorIdLocator)||(this.X.visitorIdLocator=t.data.visitorIdLocator,this.emitChange())}}},227:function(t,n,e){var i=e(8275).cloneDeep,r=e(7852),o=e(136);t.exports={initialize:function(){this.X={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(o.XDOMAIN_SET_DEFAULT_FRAME,this.ge),this.on(o.XDOMAIN_ADD_FRAME,this.me),this.on(o.XDOMAIN_SET_MESSAGE,this.be),this.on(o.XDOMAIN_ADD_SUBSCRIBER,this.ye),this.on(o.XDOMAIN_SET_CANONICAL_ORIGINS,this.we),this.on(o.XDOMAIN_SET_DISABLED,this._e)},getMessages:function(){return i(this.X.messages)},getOffset:function(){return 0===this.X.messages.length?0:this.X.messages[0].data.id},getNextMessageId:function(){return this.X.messages.length+this.getOffset()},getMessageById:function(t){return this.X.messages[t-this.getOffset()]},getSubscribers:function(){return this.X.subscribers},getFrames:function(){return this.X.frames},getNextFrameId:function(){return this.X.frames.length},getDefaultFrame:function(){return this.X.defaultFrame},getCanonicalOrigins:function(){return i(this.X.canonicalOrigins)},isDisabled:function(){return this.X.disabled},ge:function(t){this.X.defaultFrame=t},me:function(t){this.X.frames.push(t)},be:function(t){for(this.X.messages[t.messageId-this.getOffset()]=t.message;this.X.messages.length>1e3;){var n=this.X.messages.shift();r.debug("XDomainStorage: Cleared old message: "+n.data.id)}},ye:function(t){this.X.subscribers.push(t.subscriber)},we:function(t){this.X.canonicalOrigins=t.canonicalOrigins},_e:function(t){this.X.disabled=t.disabled}}},9262:function(t,n){n.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},n.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},n.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}},9326:function(t,n,e){var i=e(8130).v;n.Error=i("TagError")},8612:function(t,n,e){var i=e(6592).PluginTypes,r=e(2025).get("stores/plugins");n.getTagValue=function(t){var e=r.getPlugin(i.viewTagLocators,t.locatorType);if(!e)throw new n.Error("No locator registered for tag locatorType: "+t.locatorType);return e(t)},n.enums=e(9262),n.Error=e(9326).Error},7088:function(t,n,e){var i=e(9262),r=e(9326).Error;function o(t,n,e){var i=new RegExp("^\\s*([+-]?)\\s*((\\d+)((?:\\"+n+"\\d{3})+)?)(?:\\"+e+"(\\d+))?\\s*$"),r=t.match(i);if(!r)return NaN;var o=r[3],u=r[4],a=r[5];if(u&&!a&&o.length>3&&4===u.length||!u&&o.length<=3&&a&&3===a.length)return NaN;var c=r[1],s=r[2].replace(new RegExp("\\"+n,"g"),"");return Number(c+s+(a?"."+a:""))}function u(t){var n=o(t=String(t),",",".");return isNaN(n)&&(n=o(t,".",",")),n}t.exports=function(t,n){var e;switch(t){case i.valueType.STRING:return n?String(n):"";case i.valueType.NUMBER:if(e=u(n),isNaN(e))throw new r('"'+n+'" cannot be parsed as a number');return e;case i.valueType.CURRENCY:if(e=u(e=String(n).replace(/^[^\d\,\.\-]*/g,"").replace(/[^\d\,\.\-]*$/g,"")),isNaN(e))throw new r('"'+n+'" cannot be parsed as currency');return Math.round(100*e)}throw new r("Unknown ViewTag type: "+t)}},5192:function(t,n,e){var i=e(136),r=e(409),o=e(6761).Promise,u=e(2025).get("stores/async_request");n.makeAsyncRequest=function(t,n){var e,a,c=u.getPromise(t);if(c)return c;var s=new o((function(t,n){e=t,a=n}));return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:t,promise:s,resolver:e,rejecter:a}),n&&n(),s},n.resolveRequest=function(t,n){r.dispatch(i.RESOLVE_DEFERRED,{source:t,resolveWith:n})},n.rejectRequest=function(t,n){r.dispatch(i.REJECT_DEFERRED,{source:t,rejectWith:n})}},6022:function(t,n,e){var i=e(4618),r=e(9454);n.getLanguage=function(){return r.getNavigatorLanguage()},n.getQueryParams=i.getQueryParams,n.getQueryParamValue=i.getQueryParamValue,n.getUrl=function(){return r.getHref()}},6278:function(t,n,e){var i=e(8130).v,r=e(8298),o=e(1019),u=e(9454),a=e(136),c=e(2025),s=e(409),f=c.get("stores/cookie_options"),l=n.SetError=i("CookieSetError"),d=n.MismatchError=i("CookieMismatchError"),v=["co","com","net","org","edu","gov","mil","int","ac","com","net","org"];n.getAll=function(t){var e,i,r,u,a;void 0===t&&(t=!0),e=o.getCookieString().split(/\s*;\s*/);var c={};for(r=0;r<e.length;r++)if((u=(i=e[r]).indexOf("="))>0&&void 0===c[a=n.safeDecodeURIComponent(i.substring(0,u))]){var s=i.substring(u+1);t&&(s=n.safeDecodeURIComponent(s)),c[a]=s}return c},n.safeDecodeURIComponent=function(t){try{return decodeURIComponent(t)}catch(n){return t}},n.get=function(t,e){return n.getAll(e)[t]},n.set=function(t,e,i,c){!1!==c&&(c=!0);var g=[];if(void 0===(i=Object.assign({encodeValue:!0},i)).domain){var m=f.getCurrentDomain();m||(m=function(t,e){!1!==e&&(e=!0);for(var i,r,o=t.hostname.split("."),u=[],c=null,f=o.length-1;f>=0;f--)if(u.unshift(o[f]),i=u.join("."),!(o.length>1&&(1===u.length||2===u.length&&v.includes(u[0]))||h.includes(i))){r={domain:e?"."+i:i};try{n.set(p,Math.random().toString(),r),n.remove(p,r),c=r.domain;break}catch(t){}}return s.dispatch(a.SET_COOKIE_DOMAIN,c),c}(u.getLocation(),!0)),i.domain=m}if(i.domain&&g.push("domain="+i.domain),void 0===i.path&&(i.path="/"),i.path&&g.push("path="+i.path),void 0===i.expires){var b=void 0===i.maxAge?f.getDefaultAgeInSeconds():i.maxAge;i.expires=new Date(r.now()+1e3*b)}if(void 0!==i.expires&&g.push("expires="+i.expires.toUTCString()),i.secure&&g.push("secure"),o.setCookie(t+"="+(i.encodeValue?encodeURIComponent(e):e)+";"+g.join(";")),c){var y=i.encodeValue,w=n.get(t,y);if(w!==e){if(!w)throw new l('Failed to set cookie "'+t+'"');throw new d('Expected "'+e+'" for "'+t+'", got "'+w+'"')}}},n.remove=function(t,e){for(var i=u.getLocation().hostname.split("."),r=1===i.length?0:1;i.length>r&&(2!==i.length||!v.includes(i[0]));)n.set(t,null,Object.assign({},e,{domain:"."+i.join("."),expires:new Date(0)}),!1),i.shift()};var h=["optimizely.test"],p="optimizelyDomainTestCookie"},8130:function(t,n,e){var i=e(3958),r=i("InternalError");n.C=r,n.v=function(t){return i(t,r)}},8339:function(t,n,e){var i=e(6761).Promise;t.exports=function(){var t,n,e=new i((function(e,i){t=e,n=i}));return e.resolve=function(){return t.apply(null,Array.from(arguments)),e},e.reject=function(){return n.apply(null,Array.from(arguments)),e},e}},587:function(t,n,e){Object.defineProperty(n,"u",{value:!0}),n.getEditorConfig=d,n.getEditorScriptUrl=v,n.persistEditorParams=p,n.loadEmbeddedEditor=function(t){"function"!=typeof(null==window.optimizely?void 0:window.optimizely.push)&&(a.warn("EditorLoader / window.optimizely does not have a push method; it may have been overridden by page code. Resetting to ensure embedded editor compatibility."),window.optimizely=[]);p(),i.registerFunction("getAccountId",(function(){return o.get("stores/global").getAccountId()})),u.setOptOut(!1);var n=d(t),e=v(n);n.pullRequestId&&!isNaN(Number(n.pullRequestId))&&a.debug("Main / Loading editor pull request ID: "+n.pullRequestId),c.addScriptAsync(e)};var i=e(9445),r=e(6278),o=e(2025),u=e(4214),a=e(7852),c=e(7219),s=e(9454),f=["optimizely_project_id","optimizely_experiment_id","optimizely_section_id","optimizely_variation_id","optimizely_embed_editor","optimizely_use_shadow_dom","optimizely_page_id","optimizely_device_mode","optimizely_events_mode"],l=["optimizely_oauth_token","optimizely_token_expires_in"];function d(t){var n,e={true:"http://localhost:9888/main.js",http:"http://localhost:9888/main.js",https:"https://localhost:9888/main.js"},i=null==(n=r.get("useLocalBundle"))?void 0:n.toLowerCase(),o=r.get("optimizelyVePr");return{useLocalBundle:!!e[i],pullRequestId:o,mfeEntrypoint:e[i]?e[i]:t}}function v(t){var n=t.pullRequestId;return n&&!isNaN(Number(n))?"https://develrc-app.optimizely.com/dist/visual-editor/pull-request/"+n+"/main.js":t.mfeEntrypoint}function h(t){var n={};if(!t)return n;for(var e=t.split("&"),i=0;i<e.length;i++){var r=e[i].indexOf("=");if(-1!==r){var o=e[i].substring(0,r),u=e[i].substring(r+1);try{n[o]=decodeURIComponent(u)}catch(t){n[o]=u}}}return n}function p(){var t=s.getGlobal("sessionStorage");if(t){var n=s.getHref()||"",e=n.indexOf("?"),i=n.indexOf("#"),r=-1!==e?n.substring(e+1,-1!==i?i:void 0):"",o=-1!==i?n.substring(i+1):"";o=o.replace(/^#?\/*/,"");var u=h(r),c=h(o);f.forEach((function(n){u[n]&&t.setItem(n,u[n])})),l.forEach((function(n){c[n]&&t.setItem(n,c[n])})),a.log("EditorLoader / Persisted visual editor params to sessionStorage")}}},3019:function(t,n,e){var i=e(8275).cloneDeep;n.deepFreeze=function(t){},n.safeReference=function(t){return i(t)}},8275:function(t,n){function e(t,n){return null!=n&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](t):t instanceof n}Object.defineProperty(n,"u",{value:!0}),n.cloneDeep=function t(n,r,o){if(void 0===r&&(r=0),null==n)return n;if("object"!==(void 0===n?"undefined":i(n)))return n;if(r>100)throw new Error("cloneDeep: Maximum recursion depth exceeded");if(o||(o=new Map),o.has(n))return o.get(n);var u=Date,a=RegExp,c=Array;if(e(n,u)){return new u(n.getTime())}if(e(n,a)){var s=n,f="";return s.global&&(f+="g"),s.ignoreCase&&(f+="i"),s.multiline&&(f+="m"),s.unicode&&(f+="u"),s.sticky&&(f+="y"),new a(s.source,f)}if(c.isArray(n)){var l=n,d=[];o.set(n,d);for(var v=l.length,h=0;h<v;h++)d[h]=t(l[h],r+1,o);return d}var p=Object.getPrototypeOf(n),g=p&&p!==Object.prototype?Object.create(p):{};for(var m in o.set(n,g),n)Object.prototype.hasOwnProperty.call(n,m)&&(g[m]=t(n[m],r+1,o));return g},n.isEmpty=function(t){return null==t||("string"==typeof t||Array.isArray(t)?0===t.length:"object"==typeof t&&0===Object.keys(t).length)},n.isEqual=function t(n,r){if(n===r)return!0;if(null==n||null==r)return n===r;if((void 0===n?"undefined":i(n))!==(void 0===r?"undefined":i(r)))return!1;if("object"!=typeof n)return n===r;if(Array.isArray(n)&&Array.isArray(r)){if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!t(n[o],r[o]))return!1;return!0}if(Array.isArray(n)!==Array.isArray(r))return!1;if(e(n,Date)&&e(r,Date))return n.getTime()===r.getTime();if(e(n,RegExp)&&e(r,RegExp))return n.source===r.source&&n.global===r.global&&n.ignoreCase===r.ignoreCase&&n.multiline===r.multiline&&n.sticky===r.sticky&&n.unicode===r.unicode;var u=Object.keys(n),a=Object.keys(r);if(u.length!==a.length)return!1;for(var c=0;c<u.length;c++){var s=u[c];if(!Object.prototype.hasOwnProperty.call(r,s)||!t(n[s],r[s]))return!1}return!0},n.isObject=r,n.pick=function(t,n){var e={};if(null==t)return e;for(var i=0;i<n.length;i++){var r=n[i];Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},n.omit=function(t,n){var e={};if(null==t)return e;var i=new Set(n);for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&!i.has(r)&&(e[r]=t[r]);return e},n.merge=function t(n){for(var e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];if(!r(n))throw new TypeError("Target must be an object");for(var u=0;u<i.length;u++){var a=i[u];if(r(a))for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var s=a[c],f=n[c];if(void 0===s)continue;r(s)&&r(f)?n[c]=t({},f,s):n[c]=s}}return n},n.mapValues=function(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=n(t[i],i,t));return e},n.flatten=function(t){for(var n=[],e=0;e<t.length;e++){var i=t[e];if(Array.isArray(i))for(var r=0;r<i.length;r++)n.push(i[r]);else n.push(i)}return n},n.flattenDeep=function t(n){var e=[];if(null==n)return e;for(var i=0;i<n.length;i++){var r=n[i];if(Array.isArray(r))for(var o=t(r),u=0;u<o.length;u++)e.push(o[u]);else e.push(r)}return e},n.pickBy=o,n.omitBy=function(t,n){var e="function"==typeof n;return o(t,(function(t,i){return!(e?n(t,i):r(t)&&Object.keys(n).every((function(e){return t[e]===n[e]})))}))};var i=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function r(t){var n=void 0===t?"undefined":i(t);return null!=t&&("object"===n||"function"===n)}function o(t,n){var e=function(e){if(!Object.prototype.hasOwnProperty.call(t,e))return"continue";var u=t[e];(i?n(u,e):r(u)&&Object.keys(n).every((function(t){return u[t]===n[t]})))&&(o[e]=u)},i="function"==typeof n,o={};for(var u in t)e(u);return o}},8859:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.isObject;n.getFieldValue=function(t,n){Array.isArray(n)||(n=[n]);for(var e=t,i=0;i<n.length;i++){var r=n[i];if(!o(e)||!e.hasOwnProperty(r))return;e=e[r]}return e},n.setFieldValue=function(t,n,e){if(!Array.isArray(n)||r(n))throw new Error("Attempted to set an invalid key path: "+n);for(var i=t,u=0;u<n.length-1;u++){var a=n[u];o(i[a])||(i[a]={}),i=i[a]}i[n[n.length-1]]=e}},9295:function(t,n,e){var i=e(8275).isEmpty;n.create=function(t){if(i(t))return null;var n=document.createElement("a");return n.href=t,n}},7852:function(t,n,e){var i=e(136),r=e(8298),o=e(6592),u=e(409),a=e(192);function c(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=r.now()}c.prototype.Ee=function(){return null!==this.logLevel},c.prototype.setLogLevel=function(t){var n=this.Ie(t);null===n?console.error("Unknown log level: "+t):this.logLevel!==n&&(this.log("Setting log level to "+n),this.logLevel=n,this.flush())},c.prototype.setLogMatcher=function(t){this.logMatcher="string"==typeof t?t:"",this.logGroup=0},c.prototype.shouldLog=function(t){return this.Ee()&&this.logLevel>=t},c.prototype.matchesLogMessage=function(t,n){var e=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===t?this.logGroup++:"GROUPEND"===t&&this.logGroup--,!0;var i=n.some((function(t){if("string"!=typeof t)try{t=a.stringify(t)}catch(t){}return"string"==typeof t&&t.includes(e)}));return i&&"GROUPSTART"===t&&this.logGroup++,i},c.prototype.storeLog=function(t,n){var e={logLevel:t,logMessage:n};u.dispatch(i.LOG,e)},c.prototype.flush=function(){var t=e(2025).get("stores/log");this.logGroup=0;var n=t.getLogs(),i=this;n.forEach((function(t){i.Ae(t.logLevel,t.logMessage,!0)}))},c.prototype.Ae=function(t,n,e){var i,r=t;if(console)switch(t){case"GROUPSTART":i=console.groupCollapsed,r=o.LogLevel.DEBUG;break;case"GROUPEND":i=console.groupEnd,r=o.LogLevel.DEBUG;break;case o.LogLevel.ERROR:i=console.error;break;case o.LogLevel.WARN:i=console.warn;break;case o.LogLevel.DEBUG:i=console.debug;break;default:i=console.log}try{e||this.Ee()&&!this.shouldLog(r)||(Array.isArray(n)&&"string"==typeof n[0]&&(n=this.Se(n)),this.storeLog(t,n)),i&&this.shouldLog(r)&&this.matchesLogMessage(t,n)&&i.apply(console,n)}catch(t){console&&(console.error?console.error(t):console.log(t))}},c.prototype.debug=function(){this.Ae(o.LogLevel.DEBUG,[].slice.call(arguments))},c.prototype.log=function(){this.Ae(o.LogLevel.INFO,[].slice.call(arguments))},c.prototype.logAlways=function(){var t=this.Se([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,t),this.storeLog(o.LogLevel.INFO,t)},c.prototype.warn=function(){this.Ae(o.LogLevel.WARN,[].slice.call(arguments))},c.prototype.error=function(t){var n=[].slice.call(arguments);1===n.length&&t.stack?(this.Ae(o.LogLevel.ERROR,[this.ke(),t]),this.Ae(o.LogLevel.INFO,[t.stack])):this.Ae(o.LogLevel.ERROR,n)},c.prototype.groupCollapsed=function(){this.Ae("GROUPSTART",[].slice.call(arguments))},c.prototype.groupEnd=function(){this.Ae("GROUPEND",[].slice.call(arguments))},c.prototype.Se=function(t){var n=this.ke().toString();return n.length<6&&(n=("     "+n).slice(-6)),[n+"| Optly / "+t[0]].concat(t.slice(1))},c.prototype.ke=function(){return this.timebase?r.now()-this.timebase:0},c.prototype.Ie=function(t){return t&&("TRUE"===(t=t.toUpperCase())&&(t="INFO"),"FALSE"===t&&(t="OFF"),"ALL"===t&&(t="DEBUG"),void 0!==o.LogLevel[t])?o.LogLevel[t]:null},t.exports=new c},6907:function(t,n,e){var i;i=e(9891),t.exports=i},5686:function(t,n){n.isSingleExperimentPolicy=function(t){return"single_experiment"===t||"multivariate"===t}},5385:function(t,n,e){var i=e(6761).Promise,r=e(9454);n.pollFor=function(t,n,e){var o,u;return"function"==typeof e?u=e:(o=e||100,u=function(){return--o<-1}),n=n||50,new i((function(e,i){!function o(){var a;if(!u()){try{var c=t();if(c)return e(c)}catch(t){a=t}return r.setTimeout(o,n)}i(a||new Error("Poll timed out"))}()}))}},5467:function(t,n,e){var i=e(6761).Promise;n.firstToResolve=function(t){return new i((function(n){t.forEach((function(t){i.resolve(t).then(n,(function(){}))}))}))}},4618:function(t,n,e){var i=e(9454);n.getQueryParams=function(){var t=i.getLocationSearch()||"";if(0===t.indexOf("?")&&(t=t.substring(1)),0===t.length)return[];for(var n=t.split("&"),e=[],r=0;r<n.length;r++){var o="",u="",a=n[r].split("=");a.length>0&&(o=a[0]),a.length>1&&(u=a[1]),e.push([o,u])}return e},n.getQueryParamValue=function(t){for(var e=n.getQueryParams(),i=0;i<e.length;i++)if(e[i][0]===t)return e[i][1]},n.queryStringFromMap=function(t){return Object.keys(t).map((function(n){return n+"="+t[n]})).join("&")}},1760:function(t,n,e){var i=e(7852),r=e(9454);function o(t){this.windowLength=t,this.count=0,this.listeners={},this.isIncrementingTick=!1}o.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),r.setTimeout(function(){this.isIncrementingTick=!1}.bind(this),0))},o.prototype.increment=function(){this.count+=1,(this.listeners[String(this.count)]||[]).forEach((function(t){t()})),r.setTimeout(this.decrement.bind(this),this.windowLength)},o.prototype.decrement=function(){this.count-=1,this.count<0&&(i.warn("Decremented down to negative count: ",this.count),this.count=0)},o.prototype.addListener=function(t,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(n)},t.exports=o},3272:function(t,n,e){var i=e(8275).pick,r=e(2025).get("stores/observed_redirect");n.getReferrer=function(){var t=r.get();return t?t.referrer:null},n.getExperimentAndVariation=function(){var t=r.get();return t&&"string"==typeof t.variationId?i(t,["experimentId","variationId"]):null}},9670:function(t,n,e){var i=e(8275).mapValues,r=e(136),o=e(8298),u=e(2025),a=e(1019),c=e(6592),s=e(409),f=e(7852),l=u.get("stores/sandbox"),d=e(9454);n.shouldSandbox=function(){return!1},n.get=function(t){if(!t)throw new Error("Name is required");if(n.shouldSandbox()){l.isInitialized()||v();var e=l.get(t);if(e)return e}return d.getGlobal(t)};var v=function(){try{var t="optimizely_"+o.now(),n=a.createElement("iframe");n.name=t,n.style.display="none",a.appendToHead(n);var e=n.contentWindow,u=n.contentDocument;u.write("<scr"),u.write("ipt></scr"),u.write("ipt>"),u.close();var l=i(c.SandboxedFunctions,(function(t){return e[t]}));s.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:l})}catch(t){f.warn("Unable to create a sandbox: ",t)}}},7219:function(t,n,e){var i=e(1019),r=e(7852),o=e(8260);n.addScriptAsync=function(t,n,e){var o,u=i.querySelector("head"),a=e?i.querySelector(e):null,c=i.createElement("script");(c.type="text/javascript",c.async=!0,c.src=t,n&&(c.onload=n),a)?(r.debug("Target element found for selector: "+e+", adding script before it."),null==(o=a.parentNode)||o.insertBefore(c,a)):(r.debug("Target element not found for selector: "+e+", adding script to HEAD instead."),u.insertBefore(c,u.firstChild));r.debug("Asynchronously requesting "+t)},n.addScriptSync=function(t,e){try{var u="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(-1!==t.indexOf('"'))return void r.error("Blocked attempt to load unsafe script: "+t);i.write("<scr"),i.write('ipt id="'+u+'" src="'+t+'"></scr'),i.write("ipt>");var a=i.querySelector("#"+u);if(!a)throw new Error("DocumentEnv.write failed to append script");a.onload=e,a.onerror=function(i){r.warn("Failed to load script ("+t+") synchronously:",i),n.addScriptAsync(t,e)}}catch(i){r.debug("DocumentEnv.write failed for "+t+": "+i.message);return o.request({url:t,async:!1,contentType:"text/plain",success:function(t){new Function(t.responseText)(),e&&e()}}).catch((function(i){r.error("Failed to load "+t+" via synchronous XHR: "+i.message),n.addScriptAsync(t,e)}))}}},249:function(t,n,e){var i=e(6761).Promise,r=e(9454);n.makeTimeoutPromise=function(t){return new i((function(n,e){r.setTimeout((function(){e(new Error("Timed out after "+t+" ms"))}),t)}))}},3498:function(t,n,e){var i=e(8275).isEmpty,r=e(4861),o=e(9454),u=e(136),a=e(2025),c=e(409),s=a.get("stores/ua_data");n.get=function(){var t=s.get();return i(t)&&(t=r.parseUA(o.getUserAgent()),c.dispatch(u.SET_UA_DATA,{data:t})),t}},327:function(t,n){n.guessDomain=function(t,n){if(!t)return"";try{return n?t.match(/:\/\/(.[^/]+)/)[1]:t.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]}catch(t){return""}}},9899:function(t,n){n.generate=function(){var t=new Uint8Array(16);crypto.getRandomValues(t),t[6]=15&t[6]|64,t[8]=63&t[8]|128;var n=Array.prototype.map.call(t,(function(t){return("0"+t.toString(16)).slice(-2)})).join("");return n.slice(0,8)+"-"+n.slice(8,12)+"-"+n.slice(12,16)+"-"+n.slice(16,20)+"-"+n.slice(20)}},5292:function(t,n,e){var i=e(6761).Promise,r=e(136),o=e(2025),u=e(409),a=e(8841),c=e(8130).v,s=e(8298),f=e(1019),l=e(192),d=e(5385),v=e(4285),h=e(9454),p=e(6592).VisitorStorageKeys,g=e(7852),m=o.get("stores/xdomain"),b=n.Error=c("XDomainStorageError");function y(t){var n;if(m.getFrames().find((function(n){return n.origin===t.origin}))){try{n=l.parse(t.data)}catch(n){return void g.debug("XDomain","Ignoring malformed message event:",t)}if("ERROR"===n.type)u.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0}),a.emitInternalError(new b("Xdomain Error: "+n.response));else if("SYNC"===n.type)m.getSubscribers().forEach((function(t){t(n.response.key,n.response.value)}));else{var e=m.getMessageById(n.id);if(!e){if(g.warn("XDomain","No stored message found for ID",n.id),"number"!=typeof n.id)a.emitInternalError(new b("Message ID is not a number: "+n.id));else{var i=m.getNextMessageId();n.id>=i?a.emitInternalError(new b("Message ID is greater than expected maximum ID ("+n.id+">"+i+")")):n.id<0?a.emitInternalError(new b("Message ID is < 0: "+n.id)):a.emitInternalError(new b("No stored message found for message ID: "+n.id))}return}if(!e.resolver)return void g.warn("XDomain","Message already resolved, ignoring:",n.id);e.resolver(n.response),u.dispatch(r.XDOMAIN_SET_MESSAGE,{messageId:n.id,message:{data:{id:n.id,type:e.data.type,key:e.data.key},startTime:e.startTime,endTime:s.now()}})}}else g.debug("XDomain","No frame found for origin: "+t.origin)}function w(t){return!(["GET","PUT"].includes(t.type)&&!t.key.includes(p.SESSION_STATE))}function _(t,n){return n||(n=m.getDefaultFrame()),new i((function(e){var i={data:Object.assign({},t,{id:m.getNextMessageId(),use_cookie:w(t)}),resolver:e};n?m.isDisabled()||E(i,n):u.dispatch(r.XDOMAIN_SET_MESSAGE,{messageId:i.data.id,message:i})}))}function E(t,n){var e=t.data;u.dispatch(r.XDOMAIN_SET_MESSAGE,{messageId:t.data.id,message:Object.assign({},t,{startTime:s.now()})}),n.target.postMessage(l.stringify(e),n.origin)}n.setItem=function(t,n,e){return _({type:"PUT",key:t,value:n},e)},n.getItem=function(t,n){return _({type:"GET",key:t},n)},n.fetchAll=function(t){return _({type:"GETALL"},t)},n.deleteData=function(t,n){return _({type:"DELETE",visitorId:t},n)},n.subscribe=function(t){u.dispatch(r.XDOMAIN_ADD_SUBSCRIBER,{subscriber:t})},n.loadIframe=function(t,n){return new i((function(e){var i=f.createElement("iframe");i.src=t+n,i.hidden=!0,i.setAttribute("tabindex","-1"),i.setAttribute("title","Optimizely Internal Frame"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var o={id:m.getNextFrameId(),target:i.contentWindow,origin:t,path:n};u.dispatch(r.XDOMAIN_ADD_FRAME,o),e(o)},f.appendTo(f.querySelector("body"),i)}))},n.getXDomainUserId=function(t,n){var e,i={},r=Object.keys(t);return n.forEach((function(t){i[t]=[],r.forEach((function(n){var r=v.getUserIdFromKey(n,t);!e&&r&&(e=r),r&&!i[t].includes(r)&&i[t].push(r)}))})),g.debug("XDomain: Found userIds:",i),e},n.load=function(t,e){h.addEventListener("message",y);return d.pollFor((function(){return!!f.querySelector("body")})).then((function(){return n.loadIframe(t,e)})).then((function(t){u.dispatch(r.XDOMAIN_SET_DEFAULT_FRAME,t),m.isDisabled()||m.getMessages().forEach((function(n){n.startTime||E(n,t)}))}))}},8260:function(t,n,e){var i=e(8275).isObject,r=e(136),o=e(8298),u=e(409),a=e(192),c=e(7852),s=e(6761).Promise,f=e(9670);n.isCORSSupported=function(){return"withCredentials"in new(f.get("XMLHttpRequest"))},n.request=function(t){return t=Object.assign({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},t),new s((function(e,r){if(!n.isCORSSupported())return r("CORS is not supported");var o=new(f.get("XMLHttpRequest"));o.onload=function(){t.success&&t.success(o),e(o)},o.onerror=function(){t.error&&t.error(o),r(o)},i(t.data)&&(t.data=a.stringify(t.data)),o.open(t.method,t.url,t.async),t.withCredentials&&(o.withCredentials=t.withCredentials),o.setRequestHeader("Content-Type",t.contentType),i(t.headers)&&Object.keys(t.headers).forEach((function(n){o.setRequestHeader(n,t.headers[n])})),o.send(t.data)}))},n.retryableRequest=function(t,e,i,a){if(!e)return s.reject(new Error("No id specified for request."));if(!n.isCORSSupported())return s.reject(new Error("CORS is not supported."));void 0===a&&(a=3),void 0===i&&(i=0);var f={id:e,timeStamp:o.now(),data:t,retryCount:i};return u.dispatch(r.SET_PENDING_EVENT,f),c.debug("Sending event ",e),n.request(t).then((function(t){return u.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),t}),(function(t){throw f.retryCount>=a?(u.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),c.warn("Event ",f," could not be sent after ",a," attempts.")):(f.retryCount++,u.dispatch(r.SET_PENDING_EVENT,f),c.debug("Event ",f," failed to send, with error ",t," It will be retried ",a-i," times.")),t}))},n.sendBeacon=function(t,e){if(!t.url||!t.data)return s.reject(new Error("Must provide required options"));if(navigator&&navigator.sendBeacon)try{var r=i(t.data)?a.stringify(t.data):t.data;if(navigator.sendBeacon(t.url,r))return s.resolve();throw new Error("Unable to sendBeacon")}catch(t){c.warn("sendBeacon failed: ",t)}return t=Object.assign({method:"POST"},t),n.request(t,e)}},2348:function(t,n,e){var i=e(8275).isEmpty,r=e(136),o=e(8674),u=e(5421),a=e(8298),c=e(2025),s=e(6592),f=e(1320),l=e(409),d=e(7852),v=e(8612),h=c.get("stores/event_data"),p=c.get("stores/plugins"),g=c.get("stores/rum"),m=c.get("stores/view"),b=c.get("stores/view_data");n.parseViewTags=function(t){var e=n.evaluateViewTags(t);n.setParsedViewTags(t.id,e)},n.updateAllViewTags=function(){m.getActiveViewStates().forEach((function(t){var e=b.get(t.id);n.parseViewTags(e)}))},n.evaluateViewTags=function(t){return t.tags?t.tags.reduce((function(t,n){try{t[n.apiName]=v.getTagValue(n)}catch(t){e=t,(null!=(i=v.Error)&&"undefined"!=typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](e):e instanceof i)?d.warn("Page / Ignoring unparseable tag",n,t):d.error(t)}var e,i;return t}),{}):{}},n.createViewTicket=function(){var t={},n=p.getAllPlugins(s.PluginTypes.viewProviders);return Object.keys(n).forEach((function(e){var i=n[e];t[i.provides]=c.evaluate(i.getter)})),t},n.registerViews=function(t,n){l.dispatch(r.REGISTER_VIEWS,{views:t,forceClean:n})},n.activateViaAPI=function(t,e){e&&n.setUserSuppliedViewTags(t.id,e),n.activateMultiple([t],e)},n.getViewsAndActivate=function(t){var e=b.getAllViewsForActivationType(t);n.activateMultiple(e)},n.activateMultiple=function(t,e){var u=[];return t.forEach((function(t){var i=m.getViewState(t.id),a=n.createViewTicket();if(i.isActive)if(t.deactivationEnabled)try{n.hasValidStaticConditions(t,a)||n.deactivate(t)}catch(e){d.error("Page / Error evaluating whether to deactivate page ",n.description(t),e)}else d.log("Not activating Page, already active ",n.description(t));else{try{if(!n.hasValidStaticConditions(t,a))return"boolean"!=typeof i.isActive&&n.setViewActiveState(t,!1),void d.log("Page / Failed to match page conditions for "+n.description(t),t.staticConditions)}catch(e){return"boolean"!=typeof i.isActive&&n.setViewActiveState(t,!1),void d.error("Page / Error evaluating whether to activate page ",n.description(t),e)}if(u.push(t),n.setViewActiveState(t,!0),d.log("Activated Page",n.description(t)),o.emitViewActivated({view:t,metadata:e}),g.getSampleRum()){var c=t.activationType||s.ViewActivationTypes.immediate;l.dispatch(r.RECORD_ACTIVATION_TYPE_USAGE,{activationType:c,entityId:t.id})}var f=h.getByPageId(t.id);n.toggleEventImplementations(f,!0)}})),i(u)||o.emitViewsActivated({views:u}),u},n.deactivate=function(t){if(m.getViewState(t.id).isActive){n.setViewActiveState(t,!1),d.log("Deactivated Page",n.description(t)),o.emitPageDeactivated({page:t});var e=h.getByPageId(t.id);n.toggleEventImplementations(e,!1)}else d.log("Not deactivating Page, already inactive ",n.description(t))},n.setViewActiveState=function(t,n){l.dispatch(r.SET_VIEW_ACTIVE_STATE,{view:t,timestamp:a.now(),isActive:n})},n.setGlobalTags=function(t){l.dispatch(r.SET_GLOBAL_TAGS,t)},n.setParsedViewTags=function(t,n){l.dispatch(r.UPDATE_PARSED_VIEW_METADATA,{pageId:t,metadata:n})},n.setUserSuppliedViewTags=function(t,n){l.dispatch(r.UPDATE_USER_SUPPLIED_METADATA,{pageId:t,metadata:n})},n.hasValidStaticConditions=function(t,n){var e={};if(i(t.staticConditions))return!0;var o=p.getAllPlugins(s.PluginTypes.viewMatchers);d.groupCollapsed("Page / Evaluating staticConditions:",t.staticConditions),d.debug("Matching to current value:",n);var a=u.evaluate(t.staticConditions,(function(t){var i=t.type,r=o[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r&&(e[t.type]||(e[t.type]=!0)),r.match(n,t)}));return d.groupEnd(),g.getSampleRum()&&a&&l.dispatch(r.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:Object.keys(e),entityId:t.id}),a},n.description=function(t){return'"'+t.name+'" ('+t.id+")"},n.toggleEventImplementations=function(t,n){t.forEach((function(t){if(t.eventType!==f.CUSTOM){var e=p.getPlugin(s.PluginTypes.eventImplementations,t.eventType);e?n?e.attach(t):e.detach(t):d.warn("No implementation found for event type:",t.eventType,"needed for event:",t)}}))},n.isActivationTypeImmediate=function(t){return t===s.ViewActivationTypes.immediate||!t},n.shouldTriggerImmediately=function(t){return t===s.ViewActivationTypes.DOMChanged||t===s.ViewActivationTypes.URLChanged||t===s.ViewActivationTypes.immediate||!t},n.create=function(t,n){return{id:t,apiName:n,category:"other"}},n.createState=function(t){return{id:t,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}}}},4285:function(t,n,e){Object.defineProperty(n,"u",{value:!0});var i,r=e(8275),o=(r.flattenDeep,r.isEmpty),u=r.omit,a=r.omitBy,c=e(409),s=e(136),f=e(2575),l=e(4938),d=e(6278),v=e(8298),h=e(2025),p=e(6592),g=e(192),m=e(8859),b=e(1353).DT,y=e(7852),w=e(6761).Promise,_=e(4618),E=e(6592).VisitorStorageKeys,I=e(9454);i=e(5292);var A=h.get("stores/cookie_options"),S=h.get("stores/global"),k=h.get("stores/layer"),T=h.get("stores/plugins"),O=h.get("stores/rum"),R=h.get("stores/session"),x=h.get("stores/visitor_id"),N=h.get("stores/visitor_bucketing"),C=h.get("stores/visitor"),D=h.get("stores/provider_status");function j(t){var n=L(t),e=b.getItem(n);return"string"==typeof e&&(e=B(e)),e}function M(t){var n;if(t.layerId)n=t;else{var e=t;n={layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}return n}function P(t,n,e){try{var r=L(t);e||(n=g.stringify(n));try{b.setItem(r,n)}catch(t){throw y.warn("Visitor / Unable to set localStorage key, error was:",t),new Error("Unable to set localStorage")}i.setItem(r,n)}catch(t){y.warn("Unable to persist visitor data:",t.message)}}function L(t){var e=x.getBucketingId();if(!e)throw new Error("Visitor bucketingId not set");var i=n.getNamespace();if(!i)throw new Error("Namespace is not set");return[e,i,t].join("$$")}function U(t,e){if(!x.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(V(t)){var i=n.getStorageKeyFromKey(t);if(Object.keys(E).some((function(t){return E[t]===i}))){var r=L(i);if(!(t.indexOf(r)<=0)&&(e=B(e)))if(i===E.EVENT_QUEUE)c.dispatch(s.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:t,value:l.deserialize(e)});else if(i===E.EVENTS)c.dispatch(s.SET_FOREIGN_VISITOR_EVENTS,{key:t,value:l.deserialize(e)});else if(i===E.LAYER_STATES)c.dispatch(s.LOAD_PERSISTED_LAYER_STATES,{layerStates:e.map(M),merge:!0});else if(i===E.VARIATION_MAP)c.dispatch(s.MERGE_VARIATION_ID_MAP,{variationIdMap:e});else if(i===E.CONTEXTUAL_MAB)c.dispatch(s.MERGE_CONTEXTUAL_MAB_MAP,{contextualMabMap:e});else if(i===E.VISITOR_PROFILE){var u=e;["custom"].forEach((function(t){var n=T.getPlugin(p.PluginTypes.visitorProfileProviders,t);if(n){if(u.profile&&u.metadata){var e=function(t,n,e){var i=C.getAttribute(n),r=C.getAttributeMetadata(n),u=t.profile[n],a=t.metadata[n];if(o(i))return{data:u,metadata:a};var c={};return Object.keys(u).forEach((function(t){var n,i,o=u[t];r&&r[t]&&(n=r[t].lastModified),a&&a[t]&&(i=a[t].lastModified),(e===p.AttributionTypes.FIRST_TOUCH&&n>=i||e===p.AttributionTypes.LAST_TOUCH&&i>=n||void 0===n&&i)&&(c.data=c.data||{},c.data[t]=o,i&&(c.metadata=c.metadata||{},c.metadata[t]=c.metadata[t]||{},c.metadata[t].lastModified=i))})),c}(u,t,n.attributionType);if(!o(e)){var i=[];Object.keys(e.data||{}).forEach((function(n){var r=e.data[n],o=e.metadata[n],u={key:[t,n],value:r,metadata:o};i.push(u)})),c.dispatch(s.SET_VISITOR_ATTRIBUTES,{attributes:i})}}}else y.debug("Attribute type",t,"not used by any audiences")}))}}}}function V(t){return t.split("$$")[0].indexOf("://")>0}function B(t){try{return g.parse(t)}catch(n){return y.debug("Failed to parse: ",t,n),null}}n.getOrGenerateId=function(){return{randomId:n.getCurrentId()||"oeu"+v.now()+"r"+Math.random()}},n.getCurrentId=function(){var t=x.getVisitorIdLocator();return C.getVisitorIdFromAPI()||(t?function(t){var n,e=t.name;switch(t.type){case p.VisitorIdLocatorType.COOKIE:n=d.get(e);break;case p.VisitorIdLocatorType.JS_VARIABLE:n=I.getGlobalByPath(e);break;case p.VisitorIdLocatorType.LOCALSTORAGE:try{n=I.getGlobal("localStorage").getItem(e)}catch(t){throw new Error("Unable to read localStorage: "+t.toString())}break;case p.VisitorIdLocatorType.QUERY:n=_.getQueryParamValue(e)}try{if(!n)throw y.error("Visitor / Customer provided visitor id cannot be found. Type:",t.type," Name:",e),new Error("Failure to obtain visitor id from "+t.type);if("string"!=typeof n&&"number"!=typeof n)throw y.error("Visitor / Customer provided visitor id is not a string or number. Type:",t.type," Name:",e," Id Type:",(i=n)&&"undefined"!=typeof Symbol&&i.constructor===Symbol?"symbol":typeof i),new Error("Customer provided visitor id is not a string or number")}catch(t){throw O.getSampleRum()&&c.dispatch(s.RECORD_VISITOR_ID_ERROR,{isError:!0}),t}var i;O.getSampleRum()&&(c.dispatch(s.RECORD_VISITOR_ID_ERROR,{isError:!1}),c.dispatch(s.RECORD_VISITOR_ID_LOCATOR_USAGE,{visitorIdLocatorType:t.type,entityId:n}));return String(n)}(t):d.get(p.COOKIES.VISITOR_ID))},n.hasSomeData=function(){return b.keys().length>0},n.setId=function(t){var e,r,o=x.getBucketingId();c.dispatch(s.SET_VISITOR_ID,t),x.getBucketingId()!==o&&(!function(){!function(t,n){0;f.initializeStore(t,n)}(j(E.EVENTS)||[],j(E.EVENT_QUEUE)||[]);var t=(e=E.LAYER_STATES,i=x.getBucketingId(),r=[],o=new RegExp(i+"\\$\\$([^$]+?)\\$\\$"+e),b.keys().forEach((function(t){var n=t.match(o);if(n){var e={namespace:n[1],userId:i,item:B(b.getItem(t))};r.push(e)}})),r);var e,i,r,o;t.forEach((function(t){t.item=(t.item||[]).map(M)})),a=t,l=[],a.forEach((function(t){t.item.forEach((function(n){n.namespace=t.namespace,l.push(n)}))})),v=l,c.dispatch(s.LOAD_PERSISTED_LAYER_STATES,{layerStates:v.filter((function(t){return!!t.decision}))}),d=j(E.SESSION_STATE)||{},d=Object.assign({lastSessionTimestamp:0,sessionId:null},d),c.dispatch(s.LOAD_SESSION_STATE,d),function(t){var n,e,i=T.getAllPlugins(p.PluginTypes.visitorProfileProviders),r=Object.keys(i||{}).map((function(t){return i[t]})).filter((function(t){return"function"==typeof t.restorer}));t.profile&&t.metadata?(n=t.profile,e=t.metadata):(n=t,e={});n=Object.keys(n||{}).reduce((function(t,e){var i=n[e],o=i,u=r.find((function(t){return t.provides===e}));return u&&(o=u.restorer(i)),t[e]=o,t}),{}),c.dispatch(s.LOAD_EXISTING_VISITOR_PROFILE,{profile:n,metadata:e})}(j(E.VISITOR_PROFILE)||{});var u=j(E.TRACKER_OPTIMIZELY);u&&(h=u,c.dispatch(s.SET_TRACKER_PERSISTABLE_STATE,h));var a,l;var d;var v;var h;n.loadForeignData(),n.removeLegacySessionStateCookies()}(),n.deleteOldLocalData(),i.deleteData(t));try{x.getVisitorIdLocator()||n.maybePersistVisitorId(t)}catch(t){if(y.error("Visitor / Unable to persist visitorId, disabling tracking"),c.dispatch(s.LOAD_DIRECTIVE,{trackingDisabled:!0}),e=t,null!=(r=d.MismatchError)&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](e):e instanceof r)throw y.error("Visitor / Cookie not set to correct value:",t),new Error("Cookie mismatch error while persisting visitorId");throw t}n.refreshSession()},n.getVariationIdMap=function(){return j(E.VARIATION_MAP)||{}},n.updateVariationIdMap=function(t,n,e){c.dispatch(s.UPDATE_VARIATION_ID_MAP,{layerId:t,experimentId:n,variationId:e})},n.persistVariationIdMap=function(){var t=N.getVariationIdMapString();P(E.VARIATION_MAP,t,!0)},n.getContextualMabMap=function(){return j(E.CONTEXTUAL_MAB)||{}},n.updateContextualMabMap=function(t,n,e){c.dispatch(s.UPDATE_CONTEXTUAL_MAB_MAP,{layerId:t,experimentId:n,variationData:e})},n.persistContextualMabMap=function(){var t=N.getContextualMabMapString();P(E.CONTEXTUAL_MAB,t,!0)},n.getOdpSegments=function(){return j(E.ODP_SEGMENTS)||{}},n.persistOdpSegments=function(t){P(E.ODP_SEGMENTS,t,!1)},n.getPreferredLayerMap=function(){return j(E.LAYER_MAP)||{}},n.updatePreferredLayerMap=function(t,n){c.dispatch(s.UPDATE_PREFERRED_LAYER_MAP,{groupId:t,layerId:n})},n.persistTrackerOptimizelyData=function(t){P(E.TRACKER_OPTIMIZELY,t)},n.refreshSession=function(){c.dispatch(s.REFRESH_SESSION)},n.populateEagerVisitorData=function(t,e){var i=Object.keys(t||{}).reduce((function(n,e){var i=t[e];return i.isLazy||n.push(i),n}),[]);return n.populateVisitorData(i,e)},n.populateLazyVisitorData=function(t,e,i){y.debug("Populating lazy visitor. List of all providers",t);var r=Object.keys(t||{}).reduce((function(n,e){var r=t[e];return r.isLazy&&i.has(r.provides)&&n.push(r),n}),[]);return y.debug("Filtered list of providers that are lazy and present in audiences",r),n.populateVisitorData(r,e)},n.populateVisitorData=function(t,n){n=n||{};var e=function(t){return function(t,n){var e=function(t,e){var i;n.attributionType&&(i=v.now()),c.dispatch(s.SET_VISITOR_ATTRIBUTES,{attributes:[{key:t,value:e,metadata:{lastModified:i}}]})};if(!n.getter)return;var i=n.provides;Array.isArray(i)||(i=[i]),!1;var r,o=n.isSticky&&void 0!==m.getFieldValue(t,i);if(o)return;try{var u=h.evaluate(n.getter);"function"==typeof u&&(u=u((function(){return m.getFieldValue(t,i)}),(function(t){e(i,t)}))),void 0!==u&&(n.isAsync?(r=u.then((function(t){e(i,t)}),(function(t){y.warn('Failed to evaluate provider for "'+n.provides+'"; error was:',t)})),c.dispatch(s.SET_VISITOR_ATTRIBUTE_PENDING,{key:i,pending:r})):e(i,u))}catch(t){y.warn('Failed to evaluate getter for provider for "'+n.provides+'"; error was: '+t.message)}return r}(n,t)},i=t.filter((function(t){return!0===t.isAsync})).map(e).filter(Boolean);return t.filter((function(t){return!t.isAsync})).forEach(e),i.length>0?w.all(i):w.resolve()},n.persistBehaviorEvents=function(t){P(E.EVENTS,t)},n.persistBehaviorEventQueue=function(t){P(E.EVENT_QUEUE,t)},n.getPersistedBehaviorEventCount=function(){var t=j(E.EVENTS)||[],n=j(E.EVENT_QUEUE)||[];return l.deserialize(t).length+l.deserialize(n).length},n.persistLayerStates=function(){var t=k.getLayerStates(n.getNamespace());t=t.map((function(t){return u(t,["namespace"])})),P(E.LAYER_STATES,t)},n.persistSessionState=function(){P(E.SESSION_STATE,R.getState())},n.persistVisitorProfile=function(){var t=function(){var t=C.getVisitorProfile(),n=C.getVisitorProfileMetadata(),e=T.getAllPlugins(p.PluginTypes.visitorProfileProviders);if(e){var i=Object.keys(e).reduce((function(t,n){var i=e[n];return i.provides&&(t[i.provides]=i),t}),{});t=a(t,(function(t,n){var e=i[n];return e&&e.isTransient}))}return{profile:t,metadata:n}}();P(E.VISITOR_PROFILE,t)},n.persistVisitorBucketingStore=function(){var t;n.persistVariationIdMap(),t=N.getPreferredLayerMapString(),P(E.LAYER_MAP,t,!0),n.persistContextualMabMap()},n.getUserIdFromKey=function(t,e){var i;return t.includes(e)&&t.includes("_")&&t.includes("$$")&&t.slice(t.indexOf("$$")).includes(n.getNamespace())&&(i=t.slice(t.indexOf("_")+1,t.indexOf("$$"))),i},n.maybePersistVisitorId=function(t){t.randomId&&(A.getAutoRefresh()||n.getCurrentId()!==t.randomId?(d.set(p.COOKIES.VISITOR_ID,t.randomId),y.log("Persisting visitorId:",t.randomId)):y.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},n.getAttribute=function(t){return C.getAttribute(t)},n.getPendingAttributeValue=function(t){return D.getPendingAttributeValue(t)},n.isForeignKey=V,n.checkKeyForVisitorId=function(t){var e=x.getBucketingId()||n.getCurrentId(),i=n.getIdFromKey(t);return!i||i===e},n.getIdFromKey=function(t){var e=t.split("$$")[0],i=n.getStorageKeyFromKey(t);if(Object.keys(p.StorageKeys).some((function(t){return p.StorageKeys[t]===i})))return null;var r=e.indexOf("_");return-1===r?e:e.substring(r+1)},n.getStorageKeyFromKey=function(t){var n,e=t.split("$$").pop();if(e.indexOf("://")>-1){var i=e.indexOf("_");n=e.substring(i+1)}else n=e;return Object.keys(p.AllStorageKeys).some((function(t){return p.AllStorageKeys[t]===n}))?n:null},n.deleteOldLocalData=function(){b.keys().forEach((function(t){n.isForeignKey(t)||n.checkKeyForVisitorId(t)||b.removeItem(t)}))},n.deleteOldForeignData=function(){b.keys().forEach((function(t){n.isForeignKey(t)&&b.removeItem(t)}))},n.loadForeignData=function(){b.keys().forEach((function(t){var n=b.getItem(t);n&&U(t,n)}))},n.getNamespace=function(){return S.getNamespace()},n.serializeFieldKey=function(t){return Array.isArray(t)?t.join("$$"):t},n.removeLegacySessionStateCookies=function(){var t=d.getAll();Object.keys(t).forEach((function(t){0===t.indexOf(p.COOKIES.SESSION_STATE+"$$")&&d.remove(t)}))}},9480:function(t,n,e){var i=e(6592);n.normalizeClientData=function(t){!t.listTargetingKeys&&t.listTargetingCookies&&(t.listTargetingKeys=t.listTargetingCookies.map((function(t){return{type:i.ListTargetingKeyTypes.COOKIE,key:t}})),delete t.listTargetingCookies)}},7786:function(t,n,e){e(2025).register("env/jquery",e(8138))},8138:function(t,n,e){e(9454);t.exports=e(3371)},673:function(t,n,e){e(8275).isEmpty,e(8130).C,e(8298);var i=e(2025),r=(e(1019),e(7852));e(9454),e(8260),i.get("stores/client_metadata"),i.get("stores/global");n.handleError=function(t,n){n?r.error("Uncaught error:",t,n):r.error("Uncaught error:",t)}},4439:function(t,n,e){var i=e(136),r=e(8841),o=e(8486),u=e(8130).v,a=e(9114),c=e(8339),s=e(2025).get("stores/directive"),f=e(1019),l=e(8421),d=e(409),v=e(7852),h=e(1760),p=e(123),g=e(2671).create(),m=1e3,b=10,y=u("ChangeOverheatError");function w(t,n){if(this.change=t,this.identifier=n.identifier,this.startTime=n.startTime,s.shouldObserveChangesIndefinitely()){d.dispatch(i.INITIALIZE_CHANGE_METRICS),this.rateMeter=new h(m);var e=null===b?Number.POSITIVE_INFINITY:b;this.rateMeter.addListener(e,function(){v.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),d.dispatch(i.RECORD_CHANGE_OVERHEATED),r.emitError(new y("Change "+this.identifier+" has overheated"),{layerId:n.action&&n.action.layerId,experimentId:n.action&&n.action.experimentId,variationId:n.action&&n.action.variationId,changeId:t.id,changeType:t.type,movingWindowMilliseconds:m,maxMacroTasksInMovingWindow:e})}.bind(this));for(var o=Math.min(e,50),u=0;u<=o;u++)this.rateMeter.addListener(u,function(t){return function(){d.dispatch(i.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:t})}}(u))}}w.prototype.numberOfRootNodes=function(t){var n=document.createElement("div");return n.innerHTML=t,n.childNodes.length},w.prototype.getSiblingElements=function(t,n,e){for(var i=t,r=[],o=0;o<n;o++)e?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},w.prototype.apply=function(){this.applyDeferred=c();try{if(!this.numberOfRootNodes(this.change.value))throw new Error("No DOM elements to be created for this change: "+this.change.value);var t=this.applyDeferred.reject.bind(this.applyDeferred,new Error("Unable to find selector.")),n={};s.shouldObserveChangesUntilTimeout()?n={timeout:p.isTimedOut.bind(null,this.startTime),onTimeout:t}:s.isEditor()&&g.waitUntil(p.isTimedOut.bind(null,this.startTime)).then(t,t),this.unobserveSelector=g.observeSelector(this.change.selector,this.maybeApplyToElement.bind(this),n);var e=f.querySelectorAll(this.change.selector),i=this;e.forEach((function(t){i.maybeApplyToElement(t)}))}catch(t){this.applyDeferred.reject(t)}return this.applyDeferred},w.prototype.maybeApplyToElement=function(t){var n=o.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(t.hasAttribute(n))return v.debug("Not applying AppendChange to element",t,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick(),this.applyOrReapplyToElement.bind(this,t,n)(),this.applyDeferred.resolve()},w.prototype.applyOrReapplyToElement=function(t,n){var e;switch(this.change.operator){case l.DOMInsertionType.AFTER:e=l.insertAdjacentHTMLType.AFTER_END;break;case l.DOMInsertionType.APPEND:e=l.insertAdjacentHTMLType.BEFORE_END;break;case l.DOMInsertionType.BEFORE:e=l.insertAdjacentHTMLType.BEFORE_BEGIN;break;case l.DOMInsertionType.PREPEND:e=l.insertAdjacentHTMLType.AFTER_BEGIN;break;default:e=l.insertAdjacentHTMLType.BEFORE_END}t.insertAdjacentHTML(e,this.change.value),t.setAttribute(n,""),a.setData(t,this.change.id,this.identifier,[]);var i,r,o=this.numberOfRootNodes(this.change.value)-1;e===l.insertAdjacentHTMLType.BEFORE_END?(i=t.lastChild,r=this.getSiblingElements(i,o,!1)):e===l.insertAdjacentHTMLType.AFTER_BEGIN?(i=t.firstChild,r=this.getSiblingElements(i,o,!0)):e===l.insertAdjacentHTMLType.BEFORE_BEGIN?(i=t.previousSibling,r=this.getSiblingElements(i,o,!1)):e===l.insertAdjacentHTMLType.AFTER_END&&(i=t.nextSibling,r=this.getSiblingElements(i,o,!0)),r.unshift(i);var u=this;r.forEach((function(t){var e=t.nodeType===Node.ELEMENT_NODE?t:f.parentElement(t);e.setAttribute(n,"");var i=a.getData(e,u.change.id,u.identifier)||[];i.push(t),a.setData(e,u.change.id,u.identifier,i),f.childrenOf(e).forEach((function(t){t.setAttribute(n,"")}))}))},w.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},w.prototype.undo=function(){var t=o.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id,n=f.querySelectorAll("["+t+"]"),e=this;return n.forEach((function(n){(a.getData(n,e.change.id,e.identifier)||[]).forEach((function(t){t.parentNode.removeChild(t)})),n.removeAttribute(t),a.removeData(n,e.change.id,e.identifier),f.childrenOf(n).forEach((function(n){n.removeAttribute(t)}))})),c().resolve(l.changeState.UNAPPLIED)},t.exports=function(t){t.registerChangeApplier(l.changeType.APPEND,w)}},8636:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,u=e(8421);n.transformVisibilityAttributesToCSS=function(t){if(!t.attributes)return t;if(t.attributes[u.selectorChangeType.HIDE]||t.attributes[u.selectorChangeType.REMOVE]){var n=Object.assign({css:{}},r(t));return t.attributes[u.selectorChangeType.HIDE]&&(n.css.visibility="hidden",delete n.attributes[u.selectorChangeType.HIDE]),t.attributes[u.selectorChangeType.REMOVE]&&(n.css.display="none",delete n.attributes[u.selectorChangeType.REMOVE]),n}return t},n.createStylesFromChange=function(t,n){if(o(n.css))return n.attributes.style;var e="",i=n.attributes.style||"";return Object.keys(n.css).forEach((function(t){var r=n.css[t];new RegExp(t+"\\s?:").test(i)||(e+=t+":"+r+";")})),void 0===n.attributes.style?(t||"")+e:e+i}},6474:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.isEmpty,u=e(136),a=e(8841),c=e(8486),s=e(8130).v,f=e(9114),l=e(8339),d=e(2025).get("stores/directive"),v=e(1019),h=e(8421),p=e(409),g=e(7852),m=e(4970),b=(e(6761).Promise,e(1760)),y=e(123),w=e(9454),_=e(8636),E=e(2671).create(),I={attributes:!0,childList:!0,subtree:!0,characterData:!0},A=1e3,S=10,k=s("ChangeOverheatError");function T(t,n){if(this.change=r(t),this.change=_.transformVisibilityAttributesToCSS(this.change),this.identifier=n.identifier,this.startTime=n.startTime,this.disconnectObserverQueue=[],d.shouldObserveChangesIndefinitely()){p.dispatch(u.INITIALIZE_CHANGE_METRICS),this.rateMeter=new b(A);var e=null===S?Number.POSITIVE_INFINITY:S;this.rateMeter.addListener(e,function(){g.warn("AttributeChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),p.dispatch(u.RECORD_CHANGE_OVERHEATED),a.emitError(new k("Change "+this.identifier+" has overheated"),{layerId:n.action&&n.action.layerId,experimentId:n.action&&n.action.experimentId,variationId:n.action&&n.action.variationId,changeId:t.id,changeType:t.type,movingWindowMilliseconds:A,maxMacroTasksInMovingWindow:e})}.bind(this));for(var i=Math.min(e,50),o=0;o<=i;o++)this.rateMeter.addListener(o,function(t){return function(){p.dispatch(u.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:t})}}(o))}this.cancelled=!1}T.prototype.apply=function(){this.applyDeferred=l();try{if(o(this.change.attributes)&&o(this.change.css))return g.debug("Not applying empty AttributeChange"),this.applyDeferred.resolve(),this.applyDeferred;var t=this.applyDeferred.reject.bind(this.applyDeferred,new Error("Unable to find selector.")),n={};d.shouldObserveChangesUntilTimeout()?n={timeout:y.isTimedOut.bind(null,this.startTime),onTimeout:t}:d.isEditor()&&E.waitUntil(y.isTimedOut.bind(null,this.startTime)).then(t,t),this.unobserveSelector=E.observeSelector(this.change.selector,this.maybeApplyToElement.bind(this),n);var e=v.querySelectorAll(this.change.selector),i=this;e.forEach((function(t){i.maybeApplyToElement(t)}))}catch(t){this.applyDeferred.reject(t)}return this.applyDeferred},T.prototype.maybeApplyToElement=function(t){var n=c.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(t.hasAttribute(n))return g.debug("AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. "+t),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var e=this.applyOrReapplyToElement.bind(this,t,n);e(!1);var i=function(){var n=function(){this.cancelled||m.observe(r,t,I)}.bind(this);return w.setTimeout(n)}.bind(this),r=m.create(function(){this.rateMeter&&this.rateMeter.countCurrentTick(),r.disconnect(),e(!0),i()}.bind(this));i(),this.disconnectObserverQueue.push(r.disconnect.bind(r)),this.applyDeferred.resolve()},T.prototype.applyOrReapplyToElement=function(t,n,e){void 0===e&&(e=!1);var i={},r=this.change.attributes;Object.keys(r).forEach((function(e){var o=r[e];switch(e){case h.selectorChangeType.CLASS:void 0!==t.className&&(i[h.selectorChangeType.CLASS]=t.getAttribute("class")||"",t.setAttribute("class",o));break;case h.selectorChangeType.HREF:void 0!==t.getAttribute("href")&&(i[h.selectorChangeType.HREF]=t.getAttribute("href")||"",t.setAttribute("href",o));break;case h.selectorChangeType.HTML:void 0!==t.innerHTML&&(i[h.selectorChangeType.HTML]=t.innerHTML,t.innerHTML=o,v.childrenOf(t).forEach((function(t){t.setAttribute(n,"")})));break;case h.selectorChangeType.SRC:void 0!==t.src&&(i[h.selectorChangeType.SRCSET]=t.src,t.srcset=o);break;case h.selectorChangeType.SRCSET:void 0!==t.srcset&&(i[h.selectorChangeType.SRCSET]=t.srcset,t.srcset=o);break;case h.selectorChangeType.STYLE:break;case h.selectorChangeType.TEXT:void 0!==t.textContent&&(i[h.selectorChangeType.TEXT]=t.textContent,t.textContent=o);break;default:throw new Error("Unrecognized attribute: "+e)}}));var o=_.createStylesFromChange(t.style.cssText,this.change);"string"==typeof o&&(i[h.selectorChangeType.STYLE]=t.style.cssText,t.style.cssText=o),t.setAttribute(n,""),e&&f.hasData(t)||f.setData(t,this.change.id,this.identifier,i)},T.prototype.cancel=function(){this.cancelled=!0,this.unobserveSelector&&this.unobserveSelector(),this.disconnectObserverQueue.forEach((function(t){try{t()}catch(t){}}))},T.prototype.undo=function(){var t=v.querySelectorAll("["+c.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id+"]"),n=this;return t.forEach((function(t){var e=f.getData(t,n.change.id,n.identifier);e&&Object.keys(e).forEach((function(n){var i=e[n];switch(n){case h.selectorChangeType.CLASS:t.setAttribute("class",i);break;case h.selectorChangeType.HREF:t.setAttribute("href",i);break;case h.selectorChangeType.HTML:t.innerHTML=i;break;case h.selectorChangeType.SRC:case h.selectorChangeType.SRCSET:t.srcset=i;break;case h.selectorChangeType.STYLE:t.style.cssText=i;break;case h.selectorChangeType.TEXT:t.textContent=i;break;case h.selectorChangeType.HIDE:t.style.visibility=i;break;case h.selectorChangeType.REMOVE:t.style.display=i;break;default:throw new Error("Unrecognized attribute: "+n)}})),t.removeAttribute(c.CHANGE_ID_ATTRIBUTE_PREFIX+n.change.id),f.removeData(t,n.change.id,n.identifier)})),l().resolve(h.changeState.UNAPPLIED)},t.exports=function(t){t.registerChangeApplier(h.changeType.ATTRIBUTE,T)}},2636:function(t,n,e){var i=e(8339),r=e(8421),o=e(8484);function u(t,n){if("function"!=typeof t.value)throw new Error("Custom code must be a function");this.change=t}u.prototype.apply=function(){var t=i();try{o.apply(this.change.value),t.resolve()}catch(n){t.reject(n)}return t},u.prototype.undo=function(){return i().resolve(r.changeState.IGNORED)},t.exports=function(t){t.registerChangeApplier(r.changeType.CUSTOM_CODE,u)}},8663:function(t,n,e){var i=e(6761).Promise,r=e(136),o=e(6592),u=e(6278),a=e(1019),c=e(8421),s=e(409),f=e(9295),l=e(7852),d=e(9454);function v(t,n){if(this.change=t,this.config=n,this.reasonShouldNotRedirect=this._checkForReasonNotToRedirect(),!this.reasonShouldNotRedirect){if("string"!=typeof this.change.dest&&"function"!=typeof this.change.dest)throw new Error("Redirect destination is not a string or function");if("function"==typeof this.change.dest&&(this.change.dest=this.change.dest(),"string"!=typeof this.change.dest))throw new Error("Redirect destination function did not evaluate to a string");if(!this.config.action)throw new Error("Redirect changes require an action to be passed in the config.");s.dispatch(r.ANNOUNCE_PENDING_REDIRECT,{layerId:this.config.action.layerId})}}v.prototype.apply=function(){if(this.reasonShouldNotRedirect)return l.warn("Redirect change is not being applied because: "+this.reasonShouldNotRedirect),i.resolve(c.changeState.IGNORED);if(this.reasonInvalid)return l.error("Redirect change cannot be applied because:",this.reasonInvalid),i.reject(this.reasonInvalid);try{this.Te(this.Oe())}catch(t){return i.reject(t)}return i.resolve(c.changeState.APPLIED)},v.prototype.Oe=function(){var t=f.create(this.change.dest);if(this.change.preserveParameters){var n=d.getLocation().search;n&&(t.search?t.search+="&"+n.substr(1):t.search=n)}return t.toString()},v.prototype.Re=function(){var t=a.createElement("style");t.setAttribute("type","text/css"),t.innerHTML="body{display:none;visibility:hidden;}",a.appendToHead(t)},v.prototype.Te=function(t){(!this.change.hasOwnProperty("hidePage")||this.change.hidePage)&&this.Re(),d.setLocation(t)},v.prototype._checkForReasonNotToRedirect=function(){var t=u.get(o.COOKIES.REDIRECT);if(!this.change.allowAdditionalRedirect&&void 0!==t)return"Page was already redirected."},v.prototype.undo=function(){return i.resolve(c.changeState.IGNORED)},t.exports=function(t){t.registerChangeApplier(c.changeType.REDIRECT,v)}},9659:function(t,n,e){var i=e(8339),r=e(8421),o=e(5547);e(9937);function u(t,n){this.change=Object.assign({},t),this.identifier=n.identifier}u.prototype.apply=function(){var t={type:"showWidget",name:this.change.widget_id,data:this.change};return o.emit(t),i().resolve(r.changeState.APPLIED)},u.prototype.undo=function(){return o.emit({type:"hideWidget",name:this.change.widget_id,data:this.change}),i().resolve(r.changeState.UNAPPLIED)},t.exports=function(t){t.registerChangeApplier(r.changeType.WIDGET,u)}},8016:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.pick,u=e(9249),a=e(571),c=e(7353).b,s=e(7852),f={decideLayer:function(t,n){if(!t.decisionMetadata||!t.decisionMetadata.experimentPriorities)throw new c("No decisionMetadata.experimentPriorities on layer.");for(var e=t.decisionMetadata.experimentPriorities.length,i=0;i<e;i++){var r=l(t,n.audienceIds,n.bucketingId,i);if(r){var o=a.selectVariation(r,n.audienceIds,n.bucketingId,n.activationId,n.preferredVariationMap);if(!t.decisionMetadata.offerConsistency||a.hasVariationActionsOnView(o,n.pageId))return{experiment:r,variation:o}}}throw new c("No eligible experiment and variation found.")},includePageIdInDecisionTicket:function(t){return!(!t.decisionMetadata||!t.decisionMetadata.offerConsistency)}};function l(t,n,e,i){var f,l,d=t.decisionMetadata.experimentPriorities[i],v=null==(f=t.decisionMetadata)?void 0:f.experimentWeights,h=(d||[]).reduce((function(e,i){var r=a.getExperimentById(t,i.entityId);return a.isValidExperiment(n,r)&&e.push(i.entityId),e}),[]);if(!r(h)){var p,g=(d||[]).filter((function(t){return null===t.endOfRange}));if(g&&g.length===d.length){if(p=function(t){for(var n=[],e=Math.round(1e4/t.length),i=0;i<t.length;i++)n.push({entityId:t[i],endOfRange:e*(i+1)});return n[n.length-1].endOfRange=1e4,n}(h),!r(v))try{p=function(t,n){var e=0,i=Object.values(n).reduce((function(t,n){return t+n}),0);if(i>1e4)throw new c("Weight distribution is invalid. Total weights: "+i);return t.map((function(r,o){var u=n[r];if("number"!=typeof u)throw new c("Weight distribution for Experiment ID "+r+" not found.");return i<1e4&&(u=o===t.length-1?1e4-e:Math.floor(n[r]/i*1e4)),{entityId:r,endOfRange:e+=u}}))}(h,o(v,h))}catch(t){s.warn("Decider / Could not allocate user-defined weights",t)}}else{if(0!==g.length)throw new c("You must specify weights for all or none of the experiments in each priority layer.");p=function(t,n){for(var e=[],i=[],o=0,u=0;u<n.length;u++){var a=0;t.indexOf(n[u].entityId)>=0&&(o+=a=0===u?n[0].endOfRange:n[u].endOfRange-n[u-1].endOfRange,i.push({entityId:n[u].entityId,points:a}))}if(r(e))for(var c=0,s=0;s<i.length;s++){var f=Math.round(1e4*i[s].points/o)+c;e.push({entityId:i[s].entityId,endOfRange:f}),c=f}return e[e.length-1].endOfRange=1e4,e}(h,d)}if(l=u.chooseWeightedCandidate(e,t.id,p)){var m=a.getExperimentById(t,l);if(m)return m}}}t.exports=function(t){t.registerDecider("equal_priority",f)}},3037:function(t,n,e){var i=e(571),r=e(7353).b,o={selectExperiment:function(t,n,e){if(t.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var o=t.experiments[0];if(!i.isValidExperiment(n,o))throw new r('Audience conditions failed for experiment: "'+o.id+'".');return o}};t.exports=function(t){t.registerDecider("single_experiment",o),t.registerDecider("multivariate",o)}},7544:function(t,n,e){var i=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},r=e(8841),o=e(8130).v,u=e(1019),a=e(6907),c=n.Error=o("ClickDelegateError");function s(t){this.handler=t,this.events=[],this.unlistenFn=null,this.clickHandler=function(t){var n=this;this.events.forEach((function(e){try{var o=e.config&&e.config.selector?e.config.selector:e.eventFilter.selector;(function(t,n,e){var o=t.target,u=0;for(;o;){var s;try{s=a(o,n)}catch(a){var f={typeofElementValue:void 0===o?"undefined":i(o),nodeName:o?o.nodeName:null,nodeType:o?o.nodeType:null,targetName:t&&t.target?t.target.nodeName:null,targetType:t&&t.target?t.target.nodeType:null,numParentsTraversed:u,selector:n,errorMessage:a.message,eventId:e.id};return r.emitError(new c("Unable to evaluate match for element"),f),!1}if(s)return!0;o=o.parentElement,u++}return!1})(t,o,e)&&n.handler(e)}catch(t){r.emitError(new c("Unable to handle click for selector"+o+":"+t.message))}}))}.bind(this)}s.prototype.listen=function(){this.unlistenFn=u.addEventListener("click",this.clickHandler,!0)},s.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},s.prototype.hasEvents=function(){return this.events.length>0},s.prototype.addEvent=function(t){this.events.push(t)},s.prototype.removeEvent=function(t){this.events=this.events.filter((function(n){return n.apiName!==t.apiName}))},t.exports=s},4680:function(t,n,e){var i=e(8131),r=e(7544),o=e(7852),u=e(2348);function a(t){return"apiName: "+t.apiName+", selector: "+t.eventFilter.selector}t.exports=function(t){var n=new r((function(t){u.updateAllViewTags(),i.trackClickEvent(t)?o.log("Tracking click event:",t):o.log("Not tracking click event:",t)}));t.registerEventImplementation("click",{attach:function(t){n.hasEvents()||n.listen(),n.addEvent(t),o.debug("Started listening for click event ("+a(t)+"):",t)},detach:function(t){n.removeEvent(t),n.hasEvents()||n.unlisten(),o.debug("Stopped listening for click event ("+a(t)+"):",t)}})}},6092:function(t,n,e){var i=e(8275),r=i.cloneDeep,o=i.flatten,u=e(8620),a=e(2599),c=e(986);function s(t,n){var e=a.buildFromSpecV0_1(n);if(1!==e.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return c.execute(e[0],t)}function f(t,n){return t.map((function(t){return"function"==typeof t.toObject?t.toObject(n):t}))}function l(t,n){if(!t)return["Descriptor not defined"];var e=[];return t.count&&e.push('Unexpected "count" clause specified'),t.pick&&t.pick.modifier&&-1===n.indexOf(t.pick.modifier)&&e.push('Invalid "pick" modifier "'+t.pick.modifier+'"'),(t.filters||[]).forEach((function(t){void 0!==t.modifier&&e.push('Unexpected "filter" modifier "'+t.modifier+'"')})),e.length>0?e:void 0}function d(t,n){var e={revenueAsTag:!1,timeAsTimestamp:!0};if(void 0===n)return f(u.getEvents(t),e);if("number"==typeof n){if(n<=0)throw new Error("Count must be a positive integer, got "+n);return f(u.getEvents(t).slice(-n),e)}var i=l(n,Object.values(a.RECENCY_FILTERS));if(i)throw new Error(i.join("\n"));return f(s(u.getEvents(t),n),e)}function v(t,n){if(!(n=r(n)||{}).pick)throw new Error('No "pick" clause provided in query descriptor');if(!n.pick.name)throw new Error('No field name provided in "pick" clause');n.pick.modifier=n.pick.modifier||a.FREQUENCY_FILTERS.MOST_FREQUENT;var e=l(n,Object.values(a.FREQUENCY_FILTERS));if(e)throw new Error(e.join("\n"));return s(u.getEvents(t),n)}function h(t,n){var e=a.buildFromSpecV0_2(n),i=u.getEvents(t),r=f(c.execute(e,i),{revenueAsTag:!0,timeAsTimestamp:!1});return(n.pick||n.reduce&&"count"===n.reduce.aggregator)&&(r=o(r)),n.reduce&&(r=r[0]),r}t.exports=["stores/visitor_events",function(t){return{getEvents:d.bind(null,t),getByFrequency:v.bind(null,t),query:h.bind(null,t)}}]},6988:function(t,n,e){t.exports=function(t){t.registerApiModule("behavior",e(6092))}},1982:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(5937)),t.registerAudienceMatcher("behavior",e(2816))}},2816:function(t,n,e){var i=e(192),r=e(2599),o=e(986);t.exports={fieldsNeeded:["events"],match:function(t,n){var e=i.parse(n.value);return(void 0===e.version?[e]:r.buildFromSpecV0_1(e)).every((function(n){return o.isSatisfied(n,t.events)}))}}},5937:function(t,n,e){var i=e(8620);t.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}},9202:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(3377))}},3377:function(t,n,e){var i=e(4519),r=e(8620),o=e(192),u=e(2599);t.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(t,n){var e=t.getProjectId(),a=n.getCustomBehavioralAttributes(e).map((function(t){try{return{id:t.id,granularity:i.GRANULARITY.ALL,rule:u.buildFromSpecV0_2(o.parse(t.rule_json))}}catch(t){return}})).filter((function(t){return t})),c=r.getEvents();return i.evaluate(a,c)}]}},9401:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(725)),t.registerAudienceMatcher("first_session",e(2388))}},2388:function(t){t.exports={fieldsNeeded:["first_session"],match:function(t){return!!t.first_session}}},725:function(t,n,e){var i=e(1489),r=e(8620),o=e(8859).getFieldValue,u=e(7269).CURRENT_SESSION_INDEX;t.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var t=r.getEvents();if(t&&t.length>0){var n=t[0];return o(n,[i.FIELDS.SESSION_INDEX])===u}return!0}]}},4519:function(t,n,e){var i=e(7852),r={FIELDS:e(1489).FIELDS},o=e(2599),u=e(986);n.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},n.evaluate=function(t,e){var a={};if(0===e.length){for(var c=0;c<t.length;c++)a[t[c].id]=t[c].defaultValue;return a}var s=function(t){if(0===t.length)return[];for(var n=t.length-1,e=r.FIELDS.SESSION_ID,i=t[n][e];n>0&&i===t[n-1][e];)n--;return t.slice(n)}(e),f=function(t,n){if(0===t.length||n<=0)return[];var e=+new Date-n*o.MILLIS_IN_A_DAY;e-=e%o.MILLIS_IN_A_DAY;for(var i=t.length;i>0&&e<=t[i-1][r.FIELDS.TIME];)i--;return t.slice(i)}(e,60);for(c=0;c<t.length;c++){var l=t[c],d=e;l.granularity===n.GRANULARITY.CURRENT_SESSION?d=s:l.granularity===n.GRANULARITY.LAST_60_DAYS&&(d=f);try{var v=d;l.rule&&(v=u.execute(l.rule,d)),a[l.id]=l.defaultValue,1===v.length?a[l.id]=v[0][0]||l.defaultValue:i.debug("Behavior / Rule for",l.id,"returned",v.length,"results, expected 1")}catch(t){i.error("Behavior / Rule for",l.id,"failed with",t.message||"")}}return a}},8620:function(t,n,e){var i=e(4938),r=e(2025).get("stores/visitor_events");n.getEvents=function(){var t=i.getEvents(),n=[].concat.apply([],Object.values(r.getForeignEvents())),e=[].concat.apply([],Object.values(r.getForeignEventQueues())),o=i.mergeAllEvents([t,n,e]);return o.slice(o.length-1e3)}},2599:function(t,n,e){var i=n,r={FIELDS:e(1489).FIELDS,FIELDS_V0_2:e(1489).FIELDS_V0_2},o=e(192),u=e(7852),a=e(986);i.MILLIS_IN_A_DAY=864e5,i.aggregateField=function(t,n){return"string"==typeof n&&(n=[n]),n=n||a.DEFAULT_FIELD,[a.generateAlias(t,n)]},i.groupField=function(t){return"string"==typeof t&&(t=[t]),[(t=t||a.DEFAULT_FIELD).join(".")]};var c={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};function s(t){return t=(t||"").toString().trim(),c[t]||t}function f(t,n,e){var o={where:n};if(t.count&&(o.limit=t.count),t.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT){var u=i.getFieldKeyPathForSource(t.name,e),a=i.aggregate("count"),c=i.aggregateField("count"),s=i.groupField(u);return Object.assign(o,{select:[{field:s}],groupBy:i.groupBy([u]),aggregate:[a],orderBy:[{field:c,direction:"DESC"}]})}return Object.assign(o,{orderBy:[{field:[r.FIELDS.TIME],direction:"DESC"}]})}i.fieldComparison=function(t,n,e){return"string"==typeof n&&(n=[n]),"exists"===(t=s(t))?{op:t,args:[{field:n}]}:{op:t,args:[{field:n},{value:e}]}},i.relativeTimeComparison=function(t,n){return{op:s(t),args:[{op:"-",args:[{eval:"now"},{field:[r.FIELDS.TIME]}]},{value:n*i.MILLIS_IN_A_DAY}]}},i.rangeTimeComparison=function(t){return Array.isArray(t)?{op:"between",args:[{field:[r.FIELDS.TIME]},{value:[t[0]||+new Date(0),t[1]||+new Date]}]}:(u.error("Rule builder","rangeTimeComparison passed invalid range",t),null)},i.groupBy=function(t){for(var n=[],e=0;e<t.length;e++)n[e]={field:t[e]};return n},i.aggregate=function(t,n){return"string"==typeof n&&(n=[n]),{op:t,args:[{field:n=n||a.DEFAULT_FIELD}]}},i.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},i.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},i.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},i.getFieldKeyPathForSource=function(t,n){n=n||i.SOURCE_TYPES.BEHAVIOR;var e=[];return"string"==typeof t?(e=[t],n!==i.SOURCE_TYPES.BEHAVIOR||Object.values(r.FIELDS).includes(t)||(e=[r.FIELDS.OPTIONS,t])):e=t,e},i.buildFromSpecV0_1=function(t){if(!(t.action||t.filters&&0!==t.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+o.stringify(t));var n=i.fieldComparison("gt",r.FIELDS.TIME,0),e=[],a=[];if(t.action&&(a.push(i.fieldComparison("eq",r.FIELDS.NAME,t.action.value)),t.action.type&&a.push(i.fieldComparison("eq",r.FIELDS.TYPE,t.action.type))),t.time)if("last_days"===t.time.type)a.push(i.relativeTimeComparison("lte",t.time.days));else if("range"===t.time.type){var c=i.rangeTimeComparison([t.time.start,t.time.stop]);c&&a.push(c)}else u.error("Rule builder",'Audience spec has bad "time" type',t.time.type);if(n={op:"and",args:a},t.count&&e.push({where:i.fieldComparison(t.count.comparator,"0",t.count.value),from:{select:[{field:i.aggregateField("count")}],where:n,aggregate:[i.aggregate("count")]}}),t.filters&&t.filters.forEach((function(o){var u,c,s=i.getFieldKeyPathForSource(o.name,t.source);if(o.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT?(u=i.aggregate("count"),c=i.aggregateField("count")):o.modifier===i.RECENCY_FILTERS.MOST_RECENT&&(u=i.aggregate("max",r.FIELDS.TIME),c=i.aggregateField("max",r.FIELDS.TIME)),u){var f=s,l=i.groupField(f);e.push({where:i.fieldComparison(o.comparator,"0",o.value),from:{select:[{field:l}],where:n,groupBy:i.groupBy([f]),aggregate:[u],orderBy:[{field:c,direction:"DESC"}],limit:1}})}else a.push(i.fieldComparison(o.comparator,s,o.value))})),t.pick){if(e.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+o.stringify(t));return[f(t.pick,n,t.source)]}return e.length>0?e:[{where:n}]},i.buildFromSpecV0_2=function(t){!function(t){var n=[];if(void 0===t)throw new Error("rule is undefined");if("object"!=typeof t||null===t)throw new Error("rule is not an Object");"0.2"!==t.version&&n.push('version: not "0.2"'),t.filter&&(Array.isArray(t.filter)?t.filter.forEach((function(t,e){var r=i.validateFieldKeyPathV0_2(t.field,i.FieldPurpose.FILTER);r&&n.push("filter["+e+"]: "+r);var o=i.validateComparatorAndValue(t.comparator,t.value);o&&n.push("filter["+e+"]: "+o)})):n.push("filter: not an array"));var e=[],r=[];t.sort&&(t.reduce&&t.reduce.aggregator&&"nth"!==t.reduce.aggregator&&n.push("sort: superfluous because we can apply aggregator "+o.stringify(t.reduce.aggregator)+" to unsorted items"),Array.isArray(t.sort)?t.sort.forEach((function(t,u){var a=i.validateFieldKeyPathV0_2(t.field,i.FieldPurpose.SORT);a&&n.push("sort["+u+"]: "+a),t.field&&"frequency"===t.field[0]?e.push(t):r.push(t);var c=function(t){var n="direction "+(o.stringify(t)||String(t));if(!["ascending","descending"].includes(t))return n+' is not "ascending" or "descending"'}(t.direction);c&&n.push("sort["+u+"]: "+c)})):n.push("sort: not an array"),e.length&&r.length&&n.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),e.length&&!t.pick&&n.push('sort: sorting by ["frequency"] is impossible because no values have been picked'));if(t.pick){t.reduce&&"count"===t.reduce.aggregator&&n.push('pick: superfluous because we can apply aggregator "count" to raw events');var u=i.validateFieldKeyPathV0_2(t.pick.field);u&&n.push("pick: "+u)}if(t.reduce){var a=t.reduce.aggregator,c="aggregator "+(o.stringify(a)||String(a)),s=t.reduce.n,f="index "+(o.stringify(s)||String(s));["sum","avg","max","min","count","nth"].includes(a)||n.push("reduce: "+c+" is unknown"),["sum","avg","max","min"].includes(a)&&(t.pick||n.push("reduce: "+c+" is impossible to use because no values have been picked")),"nth"===a?(("number"!=typeof s||isNaN(s)||Math.floor(s)!==s||s<0)&&n.push("reduce: "+f+" is not a non-negative integer (mandated by "+c+")"),t.sort||n.push('reduce: aggregator "nth" is meaningless without a specific sort order')):void 0!==s&&n.push("reduce: "+f+" is defined (not mandated by "+c+")")}if(n.length)throw new Error(n.join("\n"))}(t);var n={where:{op:"and",args:(t.filter||[]).map((function(t){return"age"===t.field[0]?i.relativeTimeComparison(t.comparator||"eq",t.value/i.MILLIS_IN_A_DAY):i.fieldComparison(t.comparator||"eq",i.convertFieldKeyPathFromSpecV0_2(t.field),t.value)}))}};if(t.reduce&&"count"===t.reduce.aggregator)return Object.assign(n,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var e=[],r=[];if(t.sort&&(t.sort.forEach((function(t){["ascending","descending"].includes(t.direction)&&(["time","age"].includes(t.field[0])&&r.push(t),"frequency"===t.field[0]&&e.push(t))})),r.length&&!e.length&&(n.orderBy=r.map((function(t){return"time"===t.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===t.direction?"ASC":"DESC"}:"age"===t.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===t.direction?"DESC":"ASC"}:void 0})).filter((function(t){return t})))),t.pick&&t.pick.field){var u=i.convertFieldKeyPathFromSpecV0_2(t.pick.field);if(t.reduce&&["avg","max","min","sum"].includes(t.reduce.aggregator))return Object.assign(n,{aggregate:[{op:t.reduce.aggregator,args:[{field:u}]}],select:[{field:[a.generateAlias(t.reduce.aggregator,u)]}]});n=e.length?Object.assign(n,{groupBy:[{field:u}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===e[0].direction?"ASC":"DESC"}],select:[{field:[u.join(".")]}]}):Object.assign(n,{select:[{field:u}]})}if(t.reduce&&"nth"===t.reduce.aggregator){var c=t.reduce.n;if("number"==typeof c&&c>=0&&Number(c)===Math.floor(Number(c)))return Object.assign(n,{offset:c,limit:1})}return n},i.convertFieldKeyPathFromSpecV0_2=function(t){return"tags"===t[0]&&"revenue"===t[1]?["r"]:[r.FIELDS_V0_2[t[0]]].concat(t.slice(1))},i.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},i.validateFieldKeyPathV0_2=function(t,n){var e="field "+(o.stringify(t)||String(t));if(!Array.isArray(t)||!t.every((function(t){return"string"==typeof t})))return e+" is not an array of strings";if("tags"===t[0]&&t.length>2||"tags"!==t[0]&&t.length>1)return e+" includes too many strings";if("tags"===t[0]&&t.length<2)return e+" does not specify an exact tag";if(t.length<1)return e+" does not specify a top-level field";var u=Object.keys(r.FIELDS_V0_2),a=["age","frequency"];return n===i.FieldPurpose.FILTER&&(u.push("age"),a=["frequency"]),n===i.FieldPurpose.SORT&&(u=["time","age","frequency"],a=["name","type","category","tags"]),a.includes(t[0])?e+" is not supported here":u.includes(t[0])?void 0:e+" is unknown"},i.validateComparatorAndValue=function(t,n){var e="comparator "+(o.stringify(t)||String(t)),i="value "+(o.stringify(n)||String(n));if("string"!=typeof t&&void 0!==t)return e+" is not a string";switch(t){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if("number"!=typeof n)return i+" is not a number (mandated by "+e+")";break;case"in":if(!Array.isArray(n))return i+" is not an array (mandated by "+e+")";break;case"between":if(!(Array.isArray(n)&&2===n.length&&"number"==typeof n[0]&&"number"==typeof n[1]&&n[0]<=n[1]))return i+" is not a pair of increasing numbers (mandated by "+e+")";break;case"regex":if(!("string"==typeof n||Array.isArray(n)&&2===n.length&&"string"==typeof n[0]&&"string"==typeof n[1]))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+e+")";break;case"exists":if(void 0!==n)return i+" is not undefined (mandated by "+e+")";break;default:return e+" is unknown"}}},986:function(t,n,e){var i=e(6592),r=e(7852),o=r.log.bind(r),u=e(8298),a=e(8859).getFieldValue,c=e(192),s=function(t,n,e){if(t.getValueOrDefault)return t.getValueOrDefault(n,e);if(!Array.isArray(n))return e;var i=a(t,n);return void 0===i&&(i=e),i},f=function(t){return"string"==typeof t?t.trim().toLowerCase():t};n.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},n.DEFAULT_FIELD=["*"],n.booleanOperators={eq:function(t){var n=t.map(f);return n[0]==n[1]},is:function(t){return t[0]===t[1]},gt:function(t){return t[0]>t[1]},lt:function(t){return t[0]<t[1]},gte:function(t){return t[0]>=t[1]},lte:function(t){return t[0]<=t[1]},in:function(t){return(t[1]||[]).map(f).includes(f(t[0]))},between:function(t){return t[1][0]<=t[0]&&t[0]<=t[1][1]},contains:function(t){var n=t.map((function(t){return"string"==typeof t?t.toLowerCase():t}));return-1!==(n[0]||"").indexOf(n[1])},regex:function(t){try{var n,e;return"string"==typeof t[1]?(n=t[1],e="i"):(n=t[1][0]||"",e=t[1][1]||""),new RegExp(n,e).test(t[0])}catch(t){return r.error("Rules",'In operator "regex", error: '+(t.message||"invalid RegExp /"+[n,e].join("/"))),!1}},exists:function(t){return void 0!==t[0]},and:function(t){return t.every((function(t){return t}))},or:function(t){return t.some((function(t){return t}))},not:function(t){return!t[0]}},n.arithmeticOperators={"+":function(t){return(t[0]||0)+(t[1]||0)},"-":function(t){return(t[0]||0)-(t[1]||0)},"/":function(t){return(t[0]||0)/(t[1]||1)},"%":function(t){return(t[0]||0)%(t[1]||1)}},n.aggregateOperators={sum:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=s(e[o],i,0);return r},avg:function(t,e){if(0===e.length)return 0;for(var i=t[0]||n.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=s(e[o],i,0);return r/e.length},max:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,o=0;o<e.length;o++)r=Math.max(r,s(e[o],i,Number.NEGATIVE_INFINITY));return r},min:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,o=0;o<e.length;o++)r=Math.min(r,s(e[o],i,Number.POSITIVE_INFINITY));return r},count:function(t,n){return n.length}};var l={now:function(){return u.now()}},d=function(t,e){if(e.hasOwnProperty("value"))return e.value;if(e.hasOwnProperty("field"))return s(t,e.field);if(e.hasOwnProperty("eval"))return e.eval in l?l[e.eval]():void r.error("Rules","Unknown function: "+e.eval);if(e.op){var i,o=(i=e.op)in n.booleanOperators?n.booleanOperators[i]:i in n.arithmeticOperators?n.arithmeticOperators[i]:null;if(o){var u=d.bind(null,t);return o((e.args||[]).map((function(t){return u(t)})),t)}r.error("Rules","Unknown operator: "+e.op)}else r.error("Rules","No operator specified: "+c.stringify(e))};n.generateAlias=function(t,n){return"_"+t+"_"+n.join(".")};n.rewrite=function(t){var e=[],i={};function o(t,u){if(Array.isArray(t)&&("and"!==t[0]&&"or"!==t[0]&&"not"!==t[0]&&r.error("Rules","Unexpected operation "+t[0]+". Continuing optimistically."),t={op:t[0],args:t.slice(1)}),t.hasOwnProperty("field")||t.hasOwnProperty("value")||t.hasOwnProperty("eval"))return t;if(u&&t.op in n.aggregateOperators){var a=(t.args&&t.args[0]||{}).field||n.DEFAULT_FIELD,c=n.generateAlias(t.op,a);return c in i||(e.push({op:t.op,args:t.args}),i[c]=!0),{field:[c]}}for(var s=[],f=t.args||[],l=0;l<f.length;l++)s[l]=o(f[l],u);return{op:t.op,args:s}}var u={};t.hasOwnProperty(n.clause.WHERE)&&(u[n.clause.WHERE]=o(t[n.clause.WHERE],!1)),t.hasOwnProperty(n.clause.HAVING)&&(u[n.clause.HAVING]=o(t[n.clause.HAVING],!0)),(t.hasOwnProperty(n.clause.AGGREGATE)||e.length>0)&&(u[n.clause.AGGREGATE]=(t[n.clause.AGGREGATE]||[]).concat(e));for(var a=[n.clause.GROUP_BY,n.clause.ORDER_BY,n.clause.SELECT,n.clause.OFFSET,n.clause.LIMIT],c=0;c<a.length;c++)t.hasOwnProperty(a[c])&&(u[a[c]]=t[a[c]]);return t.hasOwnProperty(n.clause.FROM)&&(u[n.clause.FROM]=n.rewrite(t[n.clause.FROM])),u};var v=function(t,e){e=e||0;var i=[];if(t.hasOwnProperty(n.clause.WHERE)?t[n.clause.WHERE].op?t[n.clause.WHERE].op in n.booleanOperators||i.push("Non-boolean WHERE clause operator"):i.push("Missing WHERE clause operator"):i.push("Missing WHERE clause"),!t.hasOwnProperty(n.clause.HAVING)||(t[n.clause.HAVING].op?t[n.clause.HAVING].op in n.booleanOperators||i.push("Non-boolean HAVING clause operator"):i.push("Missing HAVING clause operator")),t.hasOwnProperty(n.clause.GROUP_BY)&&!t.hasOwnProperty(n.clause.AGGREGATE)&&i.push("No AGGREGATE clause specified with GROUP_BY clause"),t.hasOwnProperty(n.clause.SELECT)){var r=t[n.clause.SELECT];if(Array.isArray(r))for(var o=0;o<r.length;o++)r[o].op&&r[o].op in n.aggregateOperators&&i.push('In SELECT clause, aggregate operator "'+r[o].op+'" specified in selector at index '+o);else i.push("SELECT clause must be an array")}if(t.hasOwnProperty(n.clause.OFFSET)){var u=t[n.clause.OFFSET];("number"!=typeof u||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&i.push("OFFSET must be a non-negative integer")}if(t.hasOwnProperty(n.clause.LIMIT)){var a=t[n.clause.LIMIT];("number"!=typeof a||Number(a)<0||Number(a)!==Math.floor(Number(a)))&&i.push("LIMIT must be a non-negative integer")}return e>0&&(i=i.map((function(t){return"Sub-rule "+e+": "+t}))),t.hasOwnProperty(n.clause.FROM)&&(i=i.concat(v(t[n.clause.FROM],e+1))),i},h=function(t,e){var i,u,a,f=e;if(t.hasOwnProperty(n.clause.FROM)&&(r.debug("Evaluating FROM clause:",t[n.clause.FROM]),f=h(t[n.clause.FROM],f),r.debug("Results after FROM:",f)),r.debug("Evaluating WHERE clause:",t[n.clause.WHERE]),f=f.filter((function(e){return d(e,t[n.clause.WHERE])})),r.debug("Results after WHERE:",f),t.hasOwnProperty(n.clause.AGGREGATE)){r.debug("Evaluating AGGREGATE clause:",t[n.clause.AGGREGATE]);var l=function(t,n){var e={};if(void 0===t||!Array.isArray(t)||0===t.length)return e["*"]={fieldValues:{},events:n},e;for(var i=t.map((function(t){return t.field})),r=0;r<n.length;r++){for(var o=n[r],u=[],a={},f=0;f<i.length;f++){var l=i[f],d=s(o,l),v=l.join(".");a[v]=d,u.push(encodeURIComponent(v)+"="+encodeURIComponent(c.stringify(d)))}var h=u.join("&");e.hasOwnProperty(h)||(e[h]={fieldValues:a,events:[]}),e[h].events.push(o)}return e}(t[n.clause.GROUP_BY],f);f=function(t,n){var e=[];return Object.keys(t).forEach((function(i){var r=t[i],o=Object.assign({},r.fieldValues),u=n[i]||{};Object.assign(o,u),e.push(o)})),e}(l,(i=t[n.clause.AGGREGATE],u=l,a={},Object.keys(u).forEach((function(t){var e=u[t];a[t]={};for(var o=0;o<i.length;o++){var c=i[o],s=c.op;if(s in n.aggregateOperators){var f=(c.args&&c.args[0]||{}).field||n.DEFAULT_FIELD,l=n.generateAlias(s,f),d=n.aggregateOperators[s]([f],e.events);a[t][l]=d}else r.error("Rules","Unknown aggregate operator "+s)}})),a)),r.debug("Results after AGGREGATE:",f)}t.hasOwnProperty(n.clause.HAVING)&&(r.debug("Evaluating HAVING clause:",t[n.clause.HAVING]),f=f.filter((function(e){return d(e,t[n.clause.HAVING])})),r.debug("Results after HAVING:",f)),t.hasOwnProperty(n.clause.ORDER_BY)&&(r.debug("Evaluating ORDER_BY clause:",t[n.clause.ORDER_BY]),f=function(t,n){return Array.isArray(t)?0===t.length?n:n.sort((function(n,e){for(var i=0;i<t.length;i++){var r=t[i],o="ASC"===(r.direction||"ASC")?1:-1,u=r.field,a=s(n,u,0),c=s(e,u,0);if(a<c)return-o;if(a>c)return o}return 0})):(o("Rules","groupBy rule must be an array"),n)}(t[n.clause.ORDER_BY],f),r.debug("Results after ORDER_BY:",f));var v,p=0;return t.hasOwnProperty(n.clause.OFFSET)&&(r.debug("Evaluating OFFSET clause:",t[n.clause.OFFSET]),p=Number(t[n.clause.OFFSET])),t.hasOwnProperty(n.clause.LIMIT)&&(r.debug("Evaluating LIMIT clause:",t[n.clause.LIMIT]),v=p+Number(t[n.clause.LIMIT])),(p>0||void 0!==v)&&(f=f.slice(p,v),r.debug("Results after OFFSET/LIMIT:",f)),t.hasOwnProperty(n.clause.SELECT)&&(r.debug("Evaluating SELECT clause:",t[n.clause.SELECT]),f=function(t,n){return n.map((function(n){return t.map((function(t){return d(n,t)}))}))}(t[n.clause.SELECT],f),r.debug("Results after SELECT:",f)),f};n.execute=function(t,e){t=n.rewrite(t),r.shouldLog(i.LogLevel.DEBUG)&&r.groupCollapsed("Evaluating Behavioral Rule"),r.debug("Rule:",t,c.stringify(t)),r.debug("Events:",e);var o=v(t);if(o.length>0)throw new Error("Rule "+c.stringify(t)+" has violations: "+o.join("\n"));var u=h(t,e);return r.debug("Rule result:",u),r.shouldLog(i.LogLevel.DEBUG)&&r.groupEnd(),u},n.isSatisfied=function(t,e){try{return n.execute(t,e).length>0}catch(n){return r.error("Rules","Error "+n.toString()+" while evaluating rule "+c.stringify(t)),!1}}},9728:function(t,n,e){t.exports=function(t){t.registerDependency("sources/browser_id",e(4977)),t.registerVisitorProfileProvider(e(381)),t.registerVisitorProfileProvider(e(4138)),t.registerAudienceMatcher("browser_version",e(5374))}},5374:function(t,n,e){var i=e(2424).G;t.exports={fieldsNeeded:["browserVersion","browserId"],match:function(t,n){var e=n.value,r=t.browserId,o=t.browserVersion;if(0===e.indexOf(r)){var u=e.substr(r.length);return 0===i(o,u)}return!1}}},381:function(t){t.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(t){return t.getId()}]}},4138:function(t){t.exports={provides:"browserVersion",getter:["sources/browser_id",function(t){return t.getVersion()}]}},4977:function(t,n,e){var i=e(3498);n.getId=function(){return i.get().browser.id},n.getVersion=function(){return i.get().browser.version}},2163:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9298)),t.registerAudienceMatcher("campaign",e(7701))}},7701:function(t,n,e){var i=e(2973);t.exports={fieldsNeeded:["campaign"],match:function(t,n){return i.hasMatch(n.value,n.match,t.campaign)}}},9298:function(t,n,e){var i=e(6022);t.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}},8983:function(t,n,e){var i=e(192),r=e(8260),o=e(7852),u=e(4285),a=e(8264);n.getCmabPredictionUrl=function(){return"https://prediction.cmab.optimizely.com/predict"},n.getCmabPredictionUrlForExperiment=function(t){return t?n.getCmabPredictionUrl()+"/"+t:""},n.createPayload=function(t,n){var e=t.variations.map((function(t){return t.id})),i=a.getVisitorCmabAttributesForExperiment(t),r=a.getDcpCustomerIds(),o=a.getDcpServiceId();return{instances:[{visitorId:u.getCurrentId(),experimentId:t.id,cmabUUID:n,variationIds:e,attributes:i,dcpCustomerIds:r,dcpServiceId:o}]}},n.parseApiResponse=function(t){var n=null;try{n=i.parse(t)}catch(t){return o.error("CMAB API / Error parsing response:",t),null}return n&&n.predictions&&0!==n.predictions.length?n.predictions[0].variation_id.toString():(o.debug("CMAB API / No predictions found in API response",n),null)},n.validateVariationId=function(t,n){return t&&n.variations.find((function(n){return n.id===t}))?(o.debug("CMAB API / Variation ID:",t,"from API response found in experiment:",n.id),t):(o.debug("CMAB API / Variation ID:",t,"from API response not found in experiment:",n.id),null)},n.handleCmabApiResponse=function(t,e){if(200!==t.status)return o.error("CMAB API / API call failed with status:",t.status,t.statusText),null;o.debug("CMAB API / API call successful:",t.responseText);var i=n.parseApiResponse(t.responseText);return n.validateVariationId(i,e)},n.makeSyncApiCallWithXHR=function(t,e){o.debug("CMAB API / SYNC / Making a synchronous API call to get variation.");try{var r=n.createPayload(t,e),u=n.getCmabPredictionUrlForExperiment(t.id),a=new XMLHttpRequest;return a.open("POST",u,!1),a.send(i.stringify(r)),n.handleCmabApiResponse(a,t)}catch(t){return o.error("CMAB API / SYNC / API call encountered an error:",t),null}},n.makeAsyncApiCall=function(t,e){o.debug("CMAB API / ASYNC / Making an asynchronous API call to get variation.");var i=n.createPayload(t,e),u=n.getCmabPredictionUrlForExperiment(t.id);return r.request({url:u,contentType:"application/json",method:"POST",data:i})}},2855:function(t,n,e){var i=e(7852),r=e(8264),o=e(8983),u=e(4855);n.isCmabEnabled=function(){return!0},n.isExperimentSyncApiEnabled=function(t){return!0},n.defaultToSnippetBucketing=function(t,n,e){i.debug("CMAB / Defaulting to snippet bucketing with variation:",n,"for experiment:",t.id),r.setCmabVariationDataInVisitorStore(t,n,e)},n.processCmabExperiment=function(t,e){if(!n.isCmabEnabled())return i.debug("CMAB / Feature flag is disabled. Defaulting to snippet bucketing with variation:",e,"for experiment:",t.id),e;if(i.debug("CMAB / Feature flag is enabled. Processing CMAB for experiment:",t.id),r.activateTimeoutForNonBucketedCmabExperiments(t),!r.isCmabExperiment(t))return e;var a=r.getCmabVariationDataFromVisitorStore(t);if(!r.isCmabTimeout(t,a))return a.variationId;u.startCmabApiCallPerformanceTimer(t.id);var c=null,s=r.generateCmabUUID();if(n.isExperimentSyncApiEnabled(t))try{return(c=o.makeSyncApiCallWithXHR(t,s))?(r.setCmabVariationDataInVisitorStore(t,c,s),u.endCmabApiCallPerformanceTimer(t.id),c):(n.defaultToSnippetBucketing(t,e,s),u.endCmabApiCallPerformanceTimer(t.id),e)}catch(r){return i.error("CMAB API / SYNC / API call failed with error:",r),n.defaultToSnippetBucketing(t,e,s),u.endCmabApiCallPerformanceTimer(t.id),null}return o.makeAsyncApiCall(t,s).then((function(a){return(c=o.handleCmabApiResponse(a,t))?(i.debug("CMAB API / ASYNC / Variation:",c,"for experiment:",t.id),r.setCmabVariationDataInVisitorStore(t,c,s),u.endCmabApiCallPerformanceTimer(t.id),c):(n.defaultToSnippetBucketing(t,e,s),u.endCmabApiCallPerformanceTimer(t.id),e)}),(function(r){return i.error("CMAB API / ASYNC / API call failed with error:",r),n.defaultToSnippetBucketing(t,e,s),u.endCmabApiCallPerformanceTimer(t.id),null})),n.defaultToSnippetBucketing(t,e,s),u.endCmabApiCallPerformanceTimer(t.id),e},n.getCmabUUIDAndUpdateSessionTimeout=function(t,n){var e=r.getCmabUUIDFromVisitorStore(t,n);return r.updateCmabTimeoutInVisitorStore(t,n),e}},4855:function(t,n,e){e(5010),e(7852);n.startCmabApiCallPerformanceTimer=function(t){0},n.endCmabApiCallPerformanceTimer=function(t){0}},8264:function(t,n,e){var i=e(8275),r=i.omit,o=i.omitBy,u=e(1691),a=e(192),c=e(2025),s=e(9899),f=e(4285),l=e(7852),d=e(6592),v=e(5914),h=c.get("stores/visitor"),p=c.get("stores/plugins"),g=c.get("stores/global"),m=c.get("stores/layer");n.generateCmabUUID=function(){return s.generate()},n.getCmabLayerIdFromExperiment=function(t){return t.experimentMetadata&&t.experimentMetadata.layerId||t.id},n.isCmabExperiment=function(t){var n=t.experimentMetadata&&t.experimentMetadata.allocationPolicy;return n?n===d.AllocationPolicyEnum.CMAB:(l.debug("No allocation policy found in metadata for experiment:",t.id),!1)},n.isVisitorInHoldback=function(t){if(g.isGlobalHoldback())return l.debug("CMAB / Visitor is in global holdback, no timeout"),!0;var e=n.getCmabLayerIdFromExperiment(t),i=m.getLayerState(e);return!!(i&&i.decision&&i.decision.isLayerHoldback)&&(l.debug("CMAB / Visitor is in layer holdback, no timeout"),!0)},n.isCmabTimeout=function(t,e){if(!n.isCmabVariationStorageDataValid(e))return l.debug("CMAB / Timeout CMAB Storage Variation Data is invalid"),!0;if(n.isVisitorInHoldback(t))return!1;var i=e.variationId;return t.variations.find((function(t){return t.id===i}))?n.hasSessionOrAbsoluteTimeoutOccurred(e)?(l.debug("CMAB / Timeout Session or absolute timeout occurred:",e.cmabUUID),!0):(l.debug("CMAB / No timeout happened for:",e.cmabUUID),!1):(l.debug("CMAB / Timeout Variation ID:",i,"not found in experiment:",t.id),!0)},n.hasSessionOrAbsoluteTimeoutOccurred=function(t){if(!n.isCmabVariationStorageDataValid(t))return l.debug("CMAB / Timeout CMAB Storage Variation Data is invalid"),!0;var e=(new Date).getTime();new Date(t.stSessionTimeout).getTime();return e-new Date(t.stAbsoluteTimeout).getTime()>864e5},n.isCmabVariationStorageDataValid=function(t){if(!t)return!1;for(var n=["variationId","visitorId","cmabUUID","stSessionTimeout","stAbsoluteTimeout","userAttributeHash"],e=0;e<n.length;e++){var i=n[e];if(!t[i])return l.debug("CMAB / Storage data not found: "+i+" is missing"),!1}return!0},n.activateTimeoutForNonBucketedCmabExperiments=function(t){var e=n.getCmabLayerIdFromExperiment(t),i=t.id;l.debug("CMAB / Visitor is bucketed into experiment id:",i+" from layer id:",e);var u=f.getContextualMabMap();if(u&&u[e]){var a=u[e];l.debug("CMAB / All CMAB experiments found for the layer id:",e,"are:",a),l.debug("CMAB / Excluding the currently bucketed experiment id: ",i," from all CMAB experiments found for the current layer id: ",e);var c=r(a,[i]);c=o(c,(function(t){return t.isTimeout})),l.debug("CMAB / Non-bucketed CMAB experiments which will be timed out:",c),Object.keys(c).forEach((function(t){var n=c[t];n.isTimeout=!0,f.updateContextualMabMap(e,t,n)})),f.persistContextualMabMap()}else l.debug("CMAB / No CMAB experiments found for the current layer id:",e)},n.getCmabUUIDFromVisitorStore=function(t,n){if(!n||!t)return null;var e=f.getContextualMabMap();return e&&e[t]&&e[t][n]?e[t][n].cmabUUID:null},n.updateCmabTimeoutInVisitorStore=function(t,e){var i;if(!e||!t)return null;var r=f.getContextualMabMap();if(null==r||null==(i=r[t])?void 0:i[e]){var o=r[t][e];o.isTimeout||n.hasSessionOrAbsoluteTimeoutOccurred(o)||(o.stSessionTimeout=(new Date).toISOString(),f.updateContextualMabMap(t,e,o),f.persistContextualMabMap())}},n.getCmabVariationDataFromVisitorStore=function(t){var e,i=n.getCmabLayerIdFromExperiment(t),r=f.getContextualMabMap();if(!(null==r||null==(e=r[i])?void 0:e[t.id]))return l.debug("CMAB / No CMAB store found for experiment:",t.id),null;l.debug("CMAB / CMAB store found for experiment:",t.id);var o=r[i][t.id];return l.debug("CMAB / Contextual MAB Variation Data:",o),o},n.setCmabVariationDataInVisitorStore=function(t,e,i){l.debug("CMAB / Setting CMAB store for experiment:",t.id+" with variation:",e+" and cmabUUID:",i);var r=(new Date).toISOString(),o=n.getCmabLayerIdFromExperiment(t),u=n.getVisitorAttributesHash(t),a={variationId:e,visitorId:f.getCurrentId(),cmabUUID:i,stSessionTimeout:r,stAbsoluteTimeout:r,userAttributeHash:u,isTimeout:!1};f.updateContextualMabMap(o,t.id,a),f.persistContextualMabMap()},n.getStringifiedValue=function(t){if("string"==typeof t)return t;var n="";try{n=a.stringify(t)}catch(n){l.error("CMAB / Failed to stringify value for attributes:",t,n)}return n},n.getVisitorCmabAttributesForExperiment=function(t,i){var r;void 0===i&&(i=!0);var o=[],u=p.getAllPlugins(d.PluginTypes.audienceMatchers);if(!(null==t||null==(r=t.experimentMetadata)?void 0:r.cmabAttributes))return o;var a=t.experimentMetadata.cmabAttributes,c=a.customAttributes,s=a.standardAttributes;if(c.forEach((function(t){var e,i=(null==(e=h.getAttribute(["custom",t.id]))?void 0:e.value)||"";i=n.getStringifiedValue(i),o.push({id:t.id,type:t.type,value:i,client_api_name:t.clientApiName})})),s.forEach((function(t){var e,i,r=(null==(e=u[t.id])||null==(i=e.fieldsNeeded)?void 0:i[0])||t.id,a=h.getAttribute(r)||"";a=n.getStringifiedValue(a),o.push({id:t.id,type:t.type,value:a})})),i){var f=e(5560),v=t.experimentMetadata.cmabAttributes.vbaAttributes;if(v&&v.length)try{var g=e(8620).getEvents();g.length>=e(4938).MAX_EVENTS&&l.warn("CMAB / VBA / Behavior store is full; counts may miss evicted events"),o=o.concat(f.buildVbaFeatures(v,g,e(8298).now()))}catch(t){l.warn("CMAB / VBA / Error building visitor behavior attributes",t)}}return l.debug("CMAB / Current Visitor CMAB Attributes for Experiment:",t.id,"are:",o),o},n.generateAttributesHash=function(t){return u.hashToHex(u.toByteString(a.stringify(t)),u.Seed.BEHAVIOR_EVENT)},n.getVisitorAttributesHash=function(t){var e=n.getVisitorCmabAttributesForExperiment(t,!1);return n.generateAttributesHash(e)},n.hasAttributesChanged=function(t,e){var i=n.getVisitorAttributesHash(t);return i!==e.userAttributeHash&&(l.debug("CMAB / User attributes hash has changed from:",e.userAttributeHash," to ",i),!0)},n.getDcpCustomerIds=function(){var t=g.getDCPKeyfieldLocators(),n=f.getCurrentId();return v.getCurrentAliases(t,n)},n.getDcpServiceId=function(){return g.getDCPServiceId()}},5560:function(t,n,e){var i=e(1489),r=e(7852),o=Object.freeze([]);function u(t,n){return t&&"function"==typeof t.getValueOrDefault?t.getValueOrDefault([n]):t&&t[n]}function a(t){return u(t,i.FIELDS.NAME)}function c(t){return u(t,i.FIELDS.TYPE)}function s(t){return u(t,i.FIELDS.TIME)}function f(t,n){return(t||"")+"\n"+n}n.buildVbaFeatures=function(t,n,e){for(var i=function(t){for(var n=Object.create(null),e=0;e<t.length;e++){var i=a(t[e]),r=s(t[e]);if("string"==typeof i&&"number"==typeof r)for(var o=c(t[e]),u=o?[f("",i),f(o,i)]:[f("",i)],l=0;l<u.length;l++)n[u[l]]||(n[u[l]]=[]),n[u[l]].push(r)}return n}(n||[]),u=[],l=0;l<t.length;l++){var d=t[l];if(d&&"string"==typeof d.featureName&&d.featureName){var v=d.vbaWindow;if("number"!=typeof v||!isFinite(v)||v%1!=0||v<=0)r.warn("CMAB / VBA / skipping",d.featureName,"with window:",d.vbaWindow);else{for(var h=e-864e5*v,p=i[f(d.vbaKind,d.id)]||o,g=0,m=0;m<p.length;m++)p[m]>h&&p[m]<=e&&g++;u.push({id:d.featureName,type:"visitor_behavior_attribute",value:g})}}else r.warn("CMAB / VBA / skipping attribute with no featureName:",d)}return u}},8252:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9102)),t.registerAudienceMatcher("cookies",e(2145))}},2145:function(t,n,e){var i=e(2973);t.exports={fieldsNeeded:["cookies"],match:function(t,n){var e=n.name,r=n.value,o=n.match,u=t.cookies[e];return i.hasMatch(r,o,u)}}},9102:function(t,n,e){var i=e(6278),r=e(2025).get("stores/audience_data");t.exports={provides:"cookies",isLazy:!0,getter:[function(){var t=i.getAll(),n=r.getFeaturesNeeded("cookies");return Object.keys(t).reduce((function(e,i){var r=t[i];return Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=r),e}),{})}]}},2085:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(5532));var n=e(4417);t.registerAudienceMatcher("custom_attribute",n),t.registerAudienceMatcher("custom_dimension",n)}},4417:function(t,n,e){var i=e(2973);n.match=function(t,n){var e;return t.custom&&(e=t.custom[n.name]),"object"==typeof e&&null!==e&&(e=e.value),i.hasMatch(n.value,n.match,e)}},5532:function(t,n,e){var i=e(6592),r=e(7852),o=e(2025).get("stores/dimension_data");t.exports={provides:"custom",attributionType:i.AttributionTypes.LAST_TOUCH,restorer:function(t){return Object.keys(t).reduce((function(n,e){var i=t[e],u=e,a=o.getByApiName(e),c=o.getById(e);return"object"!=typeof i||null===i?(r.error('Unable to restore custom attribute "'+e+'" because value is not an object'),n):(!i.id&&a&&(c=a,u=a.id,Object.assign(i,{id:c.segmentId||c.id})),!i.name&&c&&c.apiName&&(i.name=c.apiName),i.id||c||r.warn("Unable to determine ID for custom attribute:",e,"; segmentation is disabled."),n[u]=i,n)}),{})},shouldTrack:!0}},5914:function(t,n,e){var i=e(6022),r=e(6278),o=e(7852),u=e(9454),a="cookie",c="js_variable",s="query_param",f="uid";n.getCurrentAliases=function(t,n){var e={};return t.forEach((function(t){if(!t.is_optimizely){var l=t.dcp_datasource_id,d=t.type,v=t.name||"";if(l){var h=null;switch(d){case a:h=r.get(v);break;case c:try{h=u.getGlobal(v)}catch(t){o.warn("Failed getting global DCP keyfieldLocator:",v)}break;case s:h=i.getQueryParamValue(v);break;case f:h=n}("number"==typeof h||"string"==typeof h)&&(e[l]=h)}else o.error("DCP / No DCP datasource id specified")}})),e}},6591:function(t,n,e){t.exports=function(t){t.registerDependency("sources/device",e(8822)),t.registerVisitorProfileProvider(e(2422)),t.registerAudienceMatcher("device",e(1125))}},1125:function(t){t.exports={fieldsNeeded:["device"],match:function(t,n){return t.device===n.value}}},2422:function(t){t.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(t){return t.getDevice()}]}},8822:function(t,n,e){var i=e(3498);n.getDevice=function(){var t=i.get().device;return"unknown"!==t.model?t.model:"tablet"===t.type?"tablet":t.isMobile?"mobile":"desktop"}},2452:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(7726)),t.registerAudienceMatcher("device_type",e(9857))}},9857:function(t){t.exports={fieldsNeeded:["device_type"],match:function(t,n){return t.device_type===n.value}}},7726:function(t,n,e){var i=e(3498);t.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var t=i.get().device;switch(t.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return t.type;default:return"other"}}]}},39:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(8511)),t.registerAudienceMatcher("query",e(4127))}},4127:function(t,n,e){var i=e(2973);n.fieldsNeeded=["queryParams"],n.match=function(t,n){var e=t.queryParams.find((function(t){return t[0]===n.name}));return i.hasMatch(n.value,n.match,e?e[1]:null)}},8511:function(t,n,e){var i=e(6022);t.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}},722:function(t,n,e){function i(t,n){return null!=n&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](t):t instanceof n}var r=e(8275),o=r.isEmpty,u=r.merge,a=e(192),c=e(7852),s=e(6761).Promise,f=e(8260),l=1,d=2,v="itemMetadata",h="recos";function p(t){return t===d}function g(t,n){if(!function(t){return t===l}(n))return h in t?a.parse(t[h]):(c.warn('recommender / Expected key "recos" not found'),[]);var e=new RegExp("^reco(\\d+)$");return Object.keys(t).reduce((function(n,i){var r=i.match(e);if(r){var o=a.parse(t[i]);o&&"object"==typeof o&&null!==o&&(n[r[1]]=o)}return n}),[]).filter((function(t){return void 0!==t}))}function m(t,n){return[t,encodeURIComponent(n)].join("/")}function b(t,n){var e=function(t,n,e){if(!Array.isArray(t)||o(t))throw new Error("No "+e+"s available");var i;if(n){if(!(i=t.find((function(t){return t.id===n}))))throw new Error("No "+e+" found with specified id "+n)}else{if(t.length>1)throw new Error("No "+e+" id specified when there are more than one available.");i=t[0]}return i},i=e(t.getRecommenderServices(),n&&n.recommenderServiceId,"recommender service");return i.idTagName||(i.idTagName="id"),{recommenderService:i,recommender:e(i.recommenders,n&&n.recommenderId,"recommender")}}function y(t){return a.parse(t).data}function w(t,n){return f.request({url:m(t,n)}).then((function(t){var n=y(t.response),e={};return v in n&&(e=a.parse(n[v])),e}))}function _(t,n,e,r){var o=!(!r||!r.fetchWithMetadata),a=r&&r.overrideServingUrl||n.servingUrl;return f.request({url:m(a,e)}).then((function(n){var e=[],a=y(n.response);return e=g(a,t.serviceVersion),o&&p(t.serviceVersion)?E(t,e.map((function(n){return n[t.idTagName]})),r).then((function(t){return t=t.map((function(t){return i(t,Error)&&(t={}),delete t.__proto__,t})),u(e,t)})):e}))}function E(t,n,e){var i=e&&e.overrideCatalogUrl||t.catalogUrl;return"string"==typeof n?w(i,n):s.all(n.map((function(t){return w(i,t).catch((function(n){return c.warn("recommender / Failed to get recommendations for item:",t,n),n}))})))}function I(t,n,e){var i=b(t,e);return _(i.recommenderService,i.recommender,n,{overrideServingUrl:e&&e.overrideServingUrl,overrideCatalogUrl:e&&e.overrideCatalogUrl,fetchWithMetadata:!0})}function A(t,n,e){var i=b(t,e),r=i.recommenderService,o=i.recommender;if(!p(r.serviceVersion))throw new Error("Recommender service "+r.id+" serves self-contained recos. Use `fetchRecommendations` API call");return _(r,o,n,{overrideServingUrl:e&&e.overrideServingUrl,fetchWithMetadata:!1})}function S(t,n,e){var i=b(t,e).recommenderService;if(!p(i.serviceVersion))throw new Error("Recommender service "+i.id+" serves self-contained recos. Use `fetchRecommendations` API call");return Array.isArray(n)&&n.length>20?s.reject("Cannot fetch more than 20 items"):E(i,n,e)}function k(t,n,e,i){return new T(t,n,e,i)}function T(t,n,e,i){this.recommenderSettings=n;var r=b(t,n);this.recommenderService=r.recommenderService,this.recommender=r.recommender,this.targetId=e,i&&(this.preFilter=i.preFilter,this.canonicalize=i.canonicalize,this.postFilter=i.postFilter),this._globalStore=t,this.reset()}function O(){var t={recosNoMeta:[],recosNoMetaOffset:0,recos:[],recosOffset:0};return c.debug("recommender / fetching recommended items for",this.targetId,"from recommender",this.recommender.id),p(this.recommenderService.serviceVersion)?A(this._globalStore,this.targetId,this.recommenderSettings).then(function(n){return t.recosNoMeta=this.preFilter?n.filter(this.preFilter):n,t}.bind(this)):I(this._globalStore,this.targetId,this.recommenderSettings).then(function(n){var e=n;return this.preFilter&&(e=e.filter(this.preFilter)),this.canonicalize&&(e=e.map(this.canonicalize)),this.postFilter&&(e=e.filter(this.postFilter)),t.recos=e,t}.bind(this))}function R(t){var n=t.numNeeded,e=t.buffer,r=e.recosNoMeta.length-e.recosNoMetaOffset;if(n<=0||r<=0)return s.resolve(t);var o=Math.max(n,5),a=e.recosNoMeta.slice(e.recosNoMetaOffset,e.recosNoMetaOffset+o),f=this,l=a.map((function(t){return t[f.recommenderService.idTagName]}));e.recosNoMetaOffset+=l.length;var d=t.recosSoFar;return c.debug("recommender / fetching metadata for",l,"from recommender",this.recommender.id),S(this._globalStore,l,this.recommenderSettings).then(function(r){r=r.map((function(t){return i(t,Error)?{}:t}));var o=u(a,r);this.canonicalize&&(o=o.map(this.canonicalize)),this.postFilter&&(o=o.filter(this.postFilter)),e.recos=o;var c=e.recos.slice(0,n);return e.recosOffset=c.length,t.recosSoFar=d.concat(c),t.numNeeded-=c.length,t.numNeeded>0?R.call(this,t):t}.bind(this))}T.prototype.reset=function(){this._bufferPromise=null},T.prototype.next=function(t){var n=Math.floor("number"!=typeof t?1:t);if(n<=0)throw new Error("Invalid argument "+t+". Must be positive integer");this._bufferPromise||(this._bufferPromise=O.call(this));var e=this._bufferPromise.then(function(t){var e=[];return t.recos.length-t.recosOffset>0&&(e=t.recos.slice(t.recosOffset,t.recosOffset+n),t.recosOffset+=e.length,n-=e.length),n<=0?{result:e,buffer:t}:R.call(this,{buffer:t,recosSoFar:e,numNeeded:n}).then((function(t){return{result:t.recosSoFar,buffer:t.buffer}}))}.bind(this));return this._bufferPromise=e.then((function(t){return t.buffer})),e.then((function(t){return t.result}))},t.exports=["stores/global",function(t){return{fetchRecommendations:I.bind(null,t),fetchRecommendedItems:A.bind(null,t),fetchItemMetadata:S.bind(null,t),getRecommendationsFetcher:k.bind(null,t)}}]},1230:function(t,n,e){t.exports=function(t){t.registerApiModule("recommender",e(722))}},6917:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9732)),t.registerAudienceMatcher("referrer",e(8881))}},8881:function(t,n,e){var i=e(6582);n.fieldsNeeded=["referrer"],n.match=function(t,n){return null!==t.referrer&&i(t.referrer,n)}},9732:function(t,n,e){var i=e(1019),r=e(3272);t.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var t=r.getReferrer()||i.getReferrer();return""===t&&(t=null),t}]}},945:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(3474)),t.registerAudienceMatcher("source_type",e(9007))}},9007:function(t,n,e){var i=e(2973);n.fieldsNeeded=["source_type"],n.match=function(t,n){return i.hasMatch(n.value,n.match,t.source_type)}},3474:function(t,n,e){var i=e(6022),r=e(1019),o=e(3272),u=e(327),a=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/","https://(www)?\\.google\\..*?/?$","https://search\\.yahoo\\..*?/?$","https://(www)?\\.bing\\..*?/?$"];t.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(t,n){var e,c=t(),s=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("utm_campaign")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var t=o.getReferrer()||r.getReferrer(),n=0;n<a.length;n++){var e=a[n];if(t.match(e))return"search"}return t&&u.guessDomain(t)!==u.guessDomain(i.getUrl())?"referral":"direct"}();e=s,(!c||"direct"!==e)&&n(s)}}]}},7076:function(t,n,e){var i=e(7852),r=e(9454),o="tealium";o="tealium";var u=e(192),a={provider:{getter:[function(){var t={audiences:[],badges:[]},n=function(t){try{return t.getGlobal("localStorage").getItem("tealium_va")}catch(t){i.warn("Error reading from local storage for "+o,":",t)}}(r);if(n)try{var e=u.parse(n);return e.audiences&&(t.audiences=Object.keys(e.audiences)),e.badges&&(t.badges=Object.keys(e.badges)),t}catch(t){i.warn("Error parsing local storage data for "+o,":",t)}}]},matcher:e(3822),vendor:o};t.exports=function(t){t.registerAudiencePlugin(a)}},2819:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(1708)),t.registerVisitorProfileProvider(e(5435)),t.registerAudienceMatcher("time_and_day",e(2117))}},2117:function(t,n,e){var i=e(9665);n.fieldsNeeded=["currentTimestamp"],n.match=function(t,n){return i.test(n.value,new Date(t.currentTimestamp))}},1708:function(t,n,e){var i=e(8298);t.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}},5435:function(t){t.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}},9665:function(t,n){function e(t){var n=t.split(":");if(2!==n.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+t);return 60*parseInt(n[0],10)+parseInt(n[1],10)}n.test=function(t,n){var i=function(t){var n=t.split("_");if(3!==n.length)throw new Error("Invalid time and day string "+t);var e=n[2].split(",");return{start_time:n[0],end_time:n[1],days:e}}(t),r=e(i.start_time),o=e(i.end_time),u=60*n.getHours()+n.getMinutes(),a=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][n.getDay()];return u>=r&&u<=o&&i.days.includes(a)}},1823:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9078))}},9078:function(t){t.exports={provides:"visitorId",getter:["stores/visitor_id",function(t){return t.getRandomId()}]}},2757:function(t,n,e){var i=e(192),r=e(7852),o=e(5385),u=e(3272),a=e(6938),c=e(9454),s="adobe_analytics",f="optimizelyLayerEvent",l="OptimizelyLayerDecision",d=e(2025),v=e(9207),h=d.get("stores/integration_settings");var p=function(t,n){var e;return o.pollFor((function(){var t=h.getReference(s);return e=Object.assign({},t,n),r.debug("Adobe Analytics Integration: getting Adobe Analytics object using settings "+e),function(t,n){if(n.sVariableReference)return n.sVariableReference||null;var e=n.sVariable?n.sVariable:"s";return t.getGlobal(e)}(c,e)}),200,50).then((function(n){var i,o,a=e.site_catalyst_eVar||null,c=e.site_catalyst_prop||null;a&&(i="eVar"+a),c&&(o="prop"+c),function(t){["events","linkTrackEvents","linkTrackVars"].forEach((function(n){"string"!=typeof t[n]&&(t[n]="")}))}(n);var s=n.linkTrackVars.split(",");r.debug("Adobe Analytics Integration: got linkTrackVars "+s),i&&(t=t.substring(0,255),n[i]=t,r.debug("Adobe Analytics Integration: set adobeAnalyticsObject eVar "+i+" to "+t),-1===s.indexOf(i)&&s.push(i)),o&&(n[o]=t,r.debug("Adobe Analytics Integration: set adobeAnalyticsObject sProp "+o+" to "+t),-1===s.indexOf(o)&&s.push(o));var d=u.getReferrer();if(d&&(n.referrer=d),-1===n.linkTrackVars.indexOf("events")&&s.push("events"),n.linkTrackVars=s.filter((function(t){return t})).join(","),-1===n.linkTrackEvents.indexOf(f)){var v=n.linkTrackEvents.split(",");v.push(f),n.linkTrackEvents=v.filter((function(t){return t})).join(","),r.debug("Adobe Analytics Integration: setting linkTrackEvents "+n.linkTrackEvents)}if(-1===n.events.indexOf(f)){var h=n.events.split(",");h.push(f),n.events=h.filter((function(t){return t})).join(","),r.debug("Adobe Analytics Integration: setting events "+n.events)}r.debug("Adobe Analytics Integration: making link tracking call with "+l),n.tl(!0,"o",l)}))},g={preRedirectPolicy:a.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:a.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:a.NonRedirectPolicies.TRACK_IMMEDIATELY,trackLayerDecision:function(t){var n=t.integrationSettings;if(n&&n[s])if(t.experimentId&&t.variationId){var e={id:t.layerId,name:t.layerName,policy:t.layerPolicy,integrationStringVersion:t.integrationStringVersion},i={id:t.experimentId,name:t.experimentName},o={id:t.variationId,name:t.variationName},u=t.isLayerHoldback,a=v.generateAnalyticsString(e,i,o,u,255,!0);if(a)return p(a,n[s]).catch((function(t){r.warn("Tracker for",s,"failed:",t)}))}else r.debug("Adobe Analytics Integration: empty experiment or variation ID, exiting");else r.debug("Adobe Analytics Integration: did not find vendor "+s+" in integration settings, exiting")},serializeSettings:i.stringify,deserializeSettings:i.parse};t.exports=function(t){t.registerAnalyticsTracker("adobe_analytics",g)}},9807:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.omit,u=i.pick,a=e(8841),c=e(9899),s=e(136),f=e(8130).v,l=e(192),d=e(7852),v=e(6938),h=e(4285),p=e(9454),g=e(8260),m=e(2025),b=(e(1019),e(7566)),y=e(3111),w=e(409),_=m.get("stores/global"),E=m.get("stores/tracker_optimizely"),I=e(2855),A=n.Error=f("OptimizelyTrackerError"),S="client_activation",k="campaign_activated",T="view_activated",O={revenue:{validate:L,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:L,sanitize:Math.floor,excludeFeature:!0},value:{validate:L,sanitize:function(t){return t}}},R="AUTO",x=[function(){return function(t){V(function(t){var n=Object.assign({entity_id:t.pageId,key:t.pageApiName,timestamp:t.timestamp,uuid:t.eventId,type:T},j(t.eventTags));return n}(t),t.userFeatures,Q(t.layerStates))}}],N=[function(){return function(t){!function(t){var n=null!==_.getAnonymizeIP()?_.getAnonymizeIP():void 0,e={account_id:t.accountId,anonymize_ip:n,client_name:t.clientName,client_version:t.clientVersion,project_id:t.projectId,visitors:[]};e.revision=t.revision,e.enrich_decisions=!0;var i={session_id:z(t.sessionId),visitor_id:t.visitorId,attributes:[],snapshots:[]},r=Q(t.layerStates);w.dispatch(s.REGISTER_TRACKER_VISITOR,{data:e,visitor:i,decisions:r}),J()}(t),V(function(t){return{entity_id:null,type:S,uuid:t.eventId,timestamp:t.timestamp}}(t),t.userFeatures,Q(t.layerStates))}}],C=[function(){return function(t){var n;V((n=t,Object.assign({entity_id:n.eventEntityId,key:n.eventApiName,timestamp:n.timestamp,uuid:n.eventId,type:n.eventCategory,properties:M(n.eventProperties)},j(n.eventTags))),t.userFeatures,Q(t.layerStates))}}],D=[function(){return function(t){var n;V((n=t,Object.assign({entity_id:n.eventEntityId,key:n.eventApiName,timestamp:n.timestamp,uuid:n.eventId,type:n.eventCategory},j(n.eventTags))),t.userFeatures,Q(t.layerStates))}}];function j(t){var n=function(t,n,e){try{P(e),t[n]=e}catch(t){a.emitError(new A("Bad value for eventTags["+n+"]: "+t.message))}return t},e=Object.keys(O),i=o(t,e),r=u(t,e),c=Object.keys(i).reduce((function(t,e){return n(t,e,i[e])}),{}),s=Object.keys(r).reduce((function(t,e){var i=r[e],o=O[e];o.excludeFeature||n(c,e,i);try{o.validate(i),t[e]=o.sanitize(i),c[e]=t[e]}catch(t){a.emitError(new A("Bad value for eventMetrics["+e+"]: "+t.message))}return t}),{});return s.tags=c,s}function M(t){var n={},e={},i=0;for(var r in t){var o=t[r];"object"==typeof o&&null!==o?e[r]=o:i<15?(n[r]=o,i++):e[r]=o}return Object.keys(e).length>0&&d.log("Custom event properties dropped (complex values, or over the 15-property limit). The following properties were not pushed",e),n}function P(t){if(null==t)throw new Error("Feature value is null");if("object"==typeof t){var n;try{n=l.stringify(t)}catch(t){}throw new Error('Feature value is complex: "'+n)}}function L(t){if(null==t)throw new Error("Metric value is null");if("number"!=typeof t)throw new Error("Metric value is not numeric")}function U(t){return(t||[]).reduce((function(t,n){try{P(n.value),t.push({entity_id:n.id||null,key:n.name,type:n.type,value:n.value})}catch(t){d.warn("Error evaluating user feature",n,t)}return t}),[])}function V(t,n,e){w.dispatch(s.REGISTER_TRACKER_EVENT,{event:t,decisions:e}),B(n),J()}function B(t){var n=U(t);w.dispatch(s.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:n})}function z(t){return R}function F(){if(E.canSend()){var t=E.hasEventsToSend(),n=E.hasPreviousBatchesToSend();t||n?(n&&(E.getPreviousBatches().forEach(q),w.dispatch(s.RESET_TRACKER_PREVIOUS_BATCHES)),t&&(w.dispatch(s.FINALIZE_BATCH_SNAPSHOT),q(E.getEventBatch()),w.dispatch(s.RESET_TRACKER_EVENTS))):d.debug("Not sending events because there are no events to send")}else d.debug("Not sending events (holding)")}function q(t){d.debug("Sending ticket:",t);var n=c.generate(),e={url:"https://logx.optimizely.com/v1/events",method:"POST",data:G(t)};E.shouldUseBeacon()?g.sendBeacon(e,n):g.retryableRequest(e,n)}function G(t){return Object.assign({},u(t,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:t.visitors.map(H)})}function H(t){return{visitor_id:t.visitor_id,session_id:R,attributes:t.attributes.map($),snapshots:t.snapshots.map(Y)}}function $(t){return X(t,{entity_id:"e",key:"k",type:"t",value:"v"})}function Y(t){var n=t.events;return n=function(t){var n=t.reduce((function(t,n){var e;if(t[e=n.type===T&&r(n.tags)&&r(u(n,Object.keys(O)))?n.type:n.uuid]){var i=t[e].timestamp;n.timestamp>i&&(i=n.timestamp),t[e]=Object.assign({},t[e],{key:t[e].key+"-"+(n.key||""),entity_id:t[e].entity_id+"-"+n.entity_id,timestamp:i})}else t[e]=n;return t}),{});return Object.values(n)}(n),{activationTimestamp:_.getActivationTimestamp(),decisions:t.decisions.map(W),events:n.map(K)}}function W(t){var n=X(t,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"});return n.m=t.metadata?X(t.metadata,{cmab_uuid:"cmab_uuid"}):{},n}function K(t){return t.key===k&&(t.type=k,delete t.key),X(t,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",properties:"p",timestamp:"t",uuid:"u",value:"v",type:"y"})}function X(t,n){return Object.keys(t).reduce((function(e,i){var r=t[i];return i in n&&(e[n[i]||i]=r),e}),{})}function J(){if(E.shouldBatch()){if(!E.isPolling()){p.setTimeout((function t(){F(),E.isPolling()&&p.setTimeout(t,1e3)}),1e3),w.dispatch(s.SET_TRACKER_POLLING,!0),p.setTimeout((function(){w.dispatch(s.SET_TRACKER_BATCHING,!1),w.dispatch(s.SET_TRACKER_POLLING,!1)}),1e4)}}else F()}function Q(t){return t.map((function(t){var n=I.getCmabUUIDAndUpdateSessionTimeout(t.layerId,t.decision.experimentId),e=n?{cmab_uuid:n}:{};return{campaign_id:t.layerId,experiment_id:t.decision.experimentId,variation_id:t.decision.variationId,is_campaign_holdback:t.decision.isLayerHoldback,metadata:e}}))}function Z(){var t=E.getPersistableState();if(t)try{d.debug("Persisting pending batch:",t),h.persistTrackerOptimizelyData(t),w.dispatch(s.SET_TRACKER_DIRTY,!1)}catch(t){d.debug("Failed to persist pending batch:",t)}}var tt={trackLayerDecision:function(t){t.isLayerConcluded?d.debug("Layer is already concluded, skipping decision tracking"):t.timing===v.TrackLayerDecisionTimingFlags.postRedirectPolicy?function(t){var n=U(t.userFeatures),e={account_id:t.accountId,anonymize_ip:t.anonymizeIP,client_name:t.clientName,client_version:t.clientVersion,project_id:t.projectId,visitors:[{session_id:z(t.sessionId),visitor_id:t.visitorId,attributes:n,snapshots:[{decisions:[{campaign_id:t.layerId,experiment_id:t.experimentId,variation_id:t.variationId,is_campaign_holdback:t.isLayerHoldback}],events:[{uuid:t.decisionId,entity_id:t.layerId,timestamp:t.timestamp,type:k}]}]}]};w.dispatch(s.REGISTER_PREVIOUS_BATCH,e),J()}(t):function(t){var n={entity_id:t.layerId,type:k,uuid:t.decisionId,timestamp:t.timestamp};w.dispatch(s.REGISTER_TRACKER_DECISION,{decisionEvent:n,decisions:Q(t.layerStates)}),B(t.userFeatures),J()}(t)},preRedirectPolicy:v.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT,postRedirectPolicy:v.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:v.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:x,onClientActivation:N,onClickEvent:D,onCustomEvent:C};t.exports=function(t){t.registerAnalyticsTracker("optimizely",tt),b.on({filter:{type:y.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){w.dispatch(s.SET_TRACKER_SEND_EVENTS,!0),F()}}),b.on({filter:{type:y.TYPES.ANALYTICS,name:"maybeSendEvents"},handler:function(){F()}}),b.on({filter:{type:y.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){w.dispatch(s.SET_TRACKER_SEND_EVENTS,!1)}}),w.dispatch(s.SET_TRACKER_SEND_EVENTS,!0);var n=b.on({filter:{type:"lifecycle",name:"activated"},handler:function(){E.observe(Z),b.off(n)}})}},7763:function(t,n,e){var i=e(4886),r=e(5473);function o(t){if(!t||"string"!=typeof t.value)return{configured:!1,valid:!1,leg:null};var n=t.value.replace(/^\s+|\s+$/g,"");if(""===n||n.length<3)return{configured:!0,valid:!1,leg:null};var e=i.makeUaTest(n);return e?{configured:!0,valid:!0,leg:{value:n,test:e}}:{configured:!0,valid:!1,leg:null}}function u(t){if(!t)return{configured:!1,legs:[]};if("string"!=typeof t.value||""===t.value.replace(/^\s+|\s+$/g,""))return{configured:!0,legs:[]};for(var n=t.value.split(","),e=[],i=0;i<n.length;i++){var o=n[i].replace(/^\s+|\s+$/g,"");if(""!==o){var u=r.makeIpTest(o);u&&e.push({value:o,test:u})}}return{configured:!0,legs:e}}n.compile=function(t){var n=[];if(!t||!t.rules||!Array.isArray(t.rules))return n;for(var e=0;e<t.rules.length;e++){var i=t.rules[e];if(i){var r=String(e),a=o(i.user_agent),c=u(i.ip);if((a.configured||c.configured)&&(!a.configured||a.valid)){var s=a.configured?a.leg:null;if(c.configured){if(0===c.legs.length)continue;for(var f=0;f<c.legs.length;f++)n.push({id:r,ua:s,ip:c.legs[f]})}else n.push({id:r,ua:s,ip:null})}}}return n}},4308:function(t,n,e){var i=e(7763),r=e(4483),o=e(9454),u=e(2025),a=e(7566),c=e(3111),s=u.get("stores/directive"),f=u.get("stores/global"),l=null,d=!1,v=void 0,h=!1,p=!1;function g(){p&&(p=!1,a.emit({type:c.TYPES.ANALYTICS,name:"sendEvents"}))}function m(){return{enabled:!1,mode:"monitor",compiledRules:[],hasIpRules:!1,hasUaRules:!1,stats:r.createStats()}}function b(){return!!(s&&s.shouldBootstrapDataForPreview&&s.shouldBootstrapDataForPreview())}function y(){if(!d){try{var t=function(){try{return f&&f.getTrafficExclusion?f.getTrafficExclusion():void 0}catch(t){return}}();if(!t)return;d=!0,l=function(t){if(!t||"object"!=typeof t||!t.enabled)return m();for(var n="enforce"===t.mode?"enforce":"monitor",e=i.compile(t),o=!1,u=!1,a=0;a<e.length;a++)e[a].ip&&(o=!0),e[a].ua&&(u=!0);return{enabled:!0,mode:n,compiledRules:e,hasIpRules:o,hasUaRules:u,stats:r.createStats()}}(t)}catch(t){return d=!0,void(l=m())}try{l.enabled&&l.hasIpRules&&!b()&&function(){if(!p){p=!0,a.emit({type:c.TYPES.ANALYTICS,name:"holdEvents"});var t=w;o.setTimeout((function(){w===t&&g()}),2e3)}}()}catch(t){}}}n.evaluate=function(t,n){if(!l||!l.compiledRules)return{matched:!1,ruleId:void 0};for(var e=l.compiledRules,i=null!=n,r=0;r<e.length;r++){var o=e[r];if(o.ua||o.ip){var u=!o.ua||!!o.ua.test(t),a=!o.ip||i&&!!o.ip.test(n);if(u&&a)return{matched:!0,ruleId:o.id}}}return{matched:!1,ruleId:void 0}},n.shouldDrop=function(){try{if(y(),!l||!l.enabled||b()||!l.compiledRules.length)return!1;var t=o.getUserAgent();l.hasIpRules&&function(){if(h)return;h=!0;var t=w;try{var i=e(131).getIP();i&&"function"==typeof i.then&&i.then((function(i){if(w===t&&"string"==typeof i&&i&&(v=i,l&&l.enabled&&"enforce"===l.mode)){var u=o.getUserAgent(),a=n.evaluate(u,i);if(a.matched){r.recordMatch(l.stats,a.ruleId);try{var c=e(409),s=e(136);c.dispatch(s.RESET_TRACKER_EVENTS),c.dispatch(s.RESET_TRACKER_PREVIOUS_BATCHES)}catch(t){}}}g()}),(function(){g()}))}catch(t){}}();var i=l.hasIpRules?v:void 0;r.recordEvaluation(l.stats),l.hasUaRules&&("string"!=typeof t||!t)&&r.recordUnusableUa(l.stats),l.hasIpRules&&("string"!=typeof i||!i)&&r.recordUnresolvedIp(l.stats);var u=n.evaluate(t,i);return!!u.matched&&(r.recordMatch(l.stats,u.ruleId),"enforce"===l.mode)}catch(t){try{l&&r.recordThrew(l.stats)}catch(t){}return!1}};var w=0;n.config=function(){return y(),l},n.getStats=function(){if(y(),!l||!l.enabled)return null;var t=l.stats,n={};for(var e in t.perRuleHits)Object.prototype.hasOwnProperty.call(t.perRuleHits,e)&&(n[e]=t.perRuleHits[e]);for(var i=[],r=l.compiledRules,o=0;o<r.length;o++){var u=r[o];n[u.id]&&i.push({id:u.id,type:u.ua&&u.ip?"ua+ip":u.ua?"ua":"ip",ua:u.ua?u.ua.value:null,ip:u.ip?u.ip.value:null,drops:n[u.id]})}return{enabled:!0,mode:l.mode,evaluated:t.evaluated,matched:t.matched,unusableUa:t.unusableUa,unresolvedIp:t.unresolvedIp,threw:t.threw,perRuleHits:n,matchedRules:i}}},5473:function(t,n){function e(t){if(!/^\d{1,3}$/.test(t))return!1;var n=Number(t);return!(n>255||String(n)!==t)}n.anonymizeIp=function(t){if("string"==typeof t&&""!==t){var n=t.split(".");if(4===n.length){for(var i=0;i<4;i++)if(!e(n[i]))return;return n[0]+"."+n[1]+"."+n[2]+".0"}}},n.makeIpTest=function(t){if(!t||"string"!=typeof t)return null;var e=n.anonymizeIp(t);return void 0===e||e!==t?null:function(e){var i=n.anonymizeIp(e);return void 0!==i&&i===t}}},4886:function(t,n){n.makeUaTest=function(t){if(!t||"string"!=typeof t)return null;var n=t.toLowerCase();return function(t){return"string"==typeof t&&-1!==t.toLowerCase().indexOf(n)}}},4483:function(t,n){n.createStats=function(){return{evaluated:0,matched:0,unusableUa:0,unresolvedIp:0,threw:0,perRuleHits:{}}},n.recordEvaluation=function(t){t&&t.evaluated++},n.recordUnusableUa=function(t){t&&t.unusableUa++},n.recordUnresolvedIp=function(t){t&&t.unresolvedIp++},n.recordThrew=function(t){t&&t.threw++},n.recordMatch=function(t,n){t&&(t.matched++,t.perRuleHits[n]=(t.perRuleHits[n]||0)+1)}},9016:function(t,n,e){var i=e(8484),r={match:function(t,n){return i.apply(n.value)}};t.exports=function(t){t.registerViewMatcher("custom_code",r)}},4093:function(t,n,e){var i=e(1019),r={match:function(t,n){return!!i.querySelector(n.value)}};t.exports=function(t){t.registerViewMatcher("element_present",r)}},9820:function(t,n,e){t.exports=function(t){t.registerViewProvider(e(7568)),t.registerViewMatcher("url",e(683))}},683:function(t,n,e){var i=e(6582);t.exports={fieldsNeeded:["url"],match:function(t,n){return i(t.url,n)}}},7568:function(t,n,e){var i=e(6022);t.exports={provides:"url",getter:[function(){return i.getUrl()}]}},525:function(t,n,e){var i=e(3682),r=e(8484);t.exports=function(t,n){var e=t.locator;if("function"==typeof e){var o=r.apply(e,n);return i(t.valueType,o)}return null}},3682:function(t,n,e){var i=e(8612).enums,r=e(8612).Error;t.exports=function(t,n){if(null==n)return n;var e=n;switch(t){case i.valueType.STRING:"string"!=typeof n&&(e=String(n));break;case i.valueType.NUMBER:if(e=Number(n),isNaN(e))throw new r(n+" is not a number");break;case i.valueType.CURRENCY:if(e=Number(n),isNaN(e)||Math.floor(e)!==e)throw new r(n+" cannot be parsed as currency (must be an integer)");break;default:throw new r("Unknown ViewTag type: "+t)}return e}},1229:function(t,n,e){var i=e(8612).enums.locatorType;t.exports=function(t){t.registerViewTagLocator(i.JAVASCRIPT,e(525))}},9806:function(t,n,e){var i=e(1019),r=e(9262).nodeNames,o=e(7088);t.exports=function(t){var n,e=t.locator,u=i.querySelectorAll(e);if(u.length>0){var a=u[0];switch(a.nodeName){case r.INPUT:case r.SELECT:n=a.value.trim();break;default:n=(u[0].innerText||u[0].textContent).trim().replace(/\s+/g," ")}}return o(t.valueType,n)}},5391:function(t,n,e){var i=e(8612).enums.locatorType;t.exports=function(t){t.registerViewTagLocator(i.CSS_SELECTOR,e(9806))}},9721:function(t,n,e){var i=e(1019),r=e(6592),o=e(7566),u=e(5975),a=e(2348),c={token:void 0,setUpObserver:function(){u.createDOMChangedObserver(),this.token=o.on({filter:{type:"viewTrigger",name:"DOMChanged"},handler:function(){a.getViewsAndActivate(r.ViewActivationTypes.DOMChanged)}})},turnOffObserver:function(){o.off(this.token)}};t.exports=function(t){i.isReady()?c.setUpObserver():i.addReadyHandler(c.setUpObserver),t.registerViewTrigger("DOMChanged",c)}},8326:function(t,n,e){var i=e(136),r=e(2025),o=e(6592),u=e(7566),a=e(409),c=r.get("stores/history"),s=e(7852),f=e(6761).Promise,l=e(2348),d=e(9454);function v(t){u.emit({type:"viewTrigger",name:"URLChanged",data:{source:t,newURL:d.getHref()}},!0)}t.exports=function(t){var n;n=function(){var t=c.getOriginalPushState().apply(this,arguments);return f.resolve().then((function(){v("pushState")})).catch((function(t){s.error("Error while wrapPushState: ",t)})),t},a.dispatch(i.ENSURE_ORIGINAL_PUSHSTATE),d.getGlobal("history").pushState=n,function(){var t=function(){var t=c.getOriginalReplaceState().apply(this,arguments);return f.resolve().then((function(){v("replaceState")})).catch((function(t){s.error("Error while wrapReplaceState: ",t)})),t};a.dispatch(i.ENSURE_ORIGINAL_REPLACESTATE),d.getGlobal("history").replaceState=t}(),d.addEventListener("popstate",h,!1),d.addEventListener("hashchange",p,!1),u.on({filter:{type:"viewTrigger",name:"URLChanged"},handler:function(){l.getViewsAndActivate(o.ViewActivationTypes.URLChanged)}}),t.registerViewTrigger("URLChanged")};var h=v.bind(null,"popstate"),p=v.bind(null,"hashchange")},9647:function(t,n,e){var i=e(2025),r=e(7566),o=e(3111),u=e(9454),a=i.get("stores/directive"),c="optimizelyPreview",s=function(t){u.getGlobal(c).push(t)};n.initialize=function(t){a.isSlave()&&function(t){var n=!1;if(Array.isArray(window.optimizely)&&window.optimizely.forEach((function(e){Array.isArray(e)&&"verifyPreviewProject"===e[0]&&String(e[1])===t&&(n=!0)})),!n)throw new Error("Preview projectId: "+t+" does not match expected")}(t),r.on({filter:{type:o.TYPES.ANALYTICS,name:"trackEvent"},handler:s}),r.on({filter:{type:o.TYPES.LIFECYCLE,name:"viewActivated"},handler:s}),r.on({filter:{type:o.TYPES.LIFECYCLE,name:"layerDecided"},handler:s}),r.on({filter:{type:"error"},publicOnly:!0,handler:s})},n.setupPreviewGlobal=function(){u.getGlobal(c)||u.setGlobal(c,[])},n.pushToPreviewGlobal=function(t){s(t)}},2594:function(t,n,e){var i=e(8275),r=i.isEmpty,o=i.mapValues,u=i.pick,a=i.pickBy,c=e(9899),s=e(5192),f=e(2575),l=e(8298),d=e(1019),v=e(409),h=e(1353).DT,p=e(7852),g=e(4049),m=e(6761).Promise,b=e(4285),y=e(9454),w=e(8260),_=e(136),E=e(6592),I=e(2025),A=I.get("stores/async_request"),S=I.get("stores/client_metadata"),k=I.get("stores/global"),T=I.get("stores/rum"),O=I.get("stores/performance"),R=I.get("stores/xdomain"),x=I.get("stores/view_data"),N=e(3737),C="https://rum.optimizely.com/rum",D="1.0";function j(t){return r(t)?m.resolve():(n=function(){return w.request({url:C,method:"POST",data:t,withCredentials:!0}).then((function(t){return s.resolveRequest("RUM_FIRST_BEACON",t),t})).catch((function(t){throw p.error("POST to client-rum failed:",t),s.rejectRequest("RUM_FIRST_BEACON",t),t}))},(e=A.getPromise("RUM_FIRST_BEACON"))?e.then(n):s.makeAsyncRequest("RUM_FIRST_BEACON",n));var n,e}function M(){try{return!d.querySelector("body")}catch(t){return null}}function P(){var t=y.getGlobal("performance"),n=t?t.timing:{},e=O.getMarks()||{},i=T.getApiData(),r=T.getDOMObservationData(),o=N.get("state").getActiveExperimentIds(),u=T.getFeaturesNeededData(),a=d.parseUri(T.getScriptSrc()),c=T.getRumData()||{},s=c.extras||{};Object.assign(s,{apiCalls:i,DOMObservationData:r,paintTimings:U(),activeExperimentIds:o,numPages:x.getNumberOfPages(),snippet:{scheme:a.protocol.slice(0,-1),host:a.host,path:a.pathname},networkInfo:L(),experimental:k.getExperimental(),featuresNeeded:u,beacon:{cjsOnload:!0}});var f=y.getGlobal("Prototype");f&&void 0!==f.Version&&(s.prototypeJS=f.Version);var l=!1;l=!0;var v=R.getFrames();v.length&&(s.xdFramesLoaded=v.length);var m={id:T.getRumId(),v:D,project:k.getSnippetId()||k.getProjectId(),navigationTimings:n,userTimings:e,xd:l,apis:Object.keys(i),extras:s,sampleRate:c.sampleRate};(function(){var t=h.keys().map((function(t){var n=b.getStorageKeyFromKey(t);return n?{key:t,isForeign:b.isForeignKey(t),category:n,size:t.length+h.getItem(t).length}:null})).filter(Boolean),n=t.reduce((function(t,n){var e=n.key,i=b.getIdFromKey(e);return i?((n.isForeign?t.foreign:t.local)[i]=!0,t):t}),{local:{},foreign:{}}),e=t.filter((function(t){return!0===t.isForeign})).reduce((function(t,n){return t[n.key.split("_")[0]]=!0,t}),{}),i={local:0,foreign:0},r={local:{},foreign:{}};t.forEach((function(t){var n=t.isForeign?"foreign":"local";i[n]+=t.size,r[n][t.category]||(r[n][t.category]=0),r[n][t.category]+=t.size}));var o={numKeys:h.allKeys().length,sizeKeys:h.allKeys().toString().length,sizeValues:h.allValues().toString().length,idCounts:{local:Object.keys(n.local).length,foreign:Object.keys(n.foreign).length},foreignOriginCount:Object.keys(e).length,byteTotals:i,byteTotalsByCategory:r};return g.estimateStorage().then((function(t){return Object.assign(o,{storageEstimate:t})}))})().then((function(t){return j(Object.assign(m,{lsMetrics:t}))})).catch((function(t){p.warn("RUM / Error sending onload beacon:",t)}))}function L(){var t=y.getGlobal("navigator");if(t&&t.connection)return u(t.connection,["downlink","rtt","effectiveType"])}function U(){var t=y.getGlobal("performance");if(t)try{var n=t.getEntriesByType("paint");if(r(n))return;return n.reduce((function(t,n){return t[n.name]=Math.round(n.startTime),t}),{})}catch(t){return}}n.initialize=function(){var t,n=c.generate().replace(/-/g,"");t=Math.random()<.01;var e=function(){var t=d.getCurrentScript();if(t)return t.src}();v.dispatch(_.SET_RUM_DATA,{id:n,RumHost:C,inRumSample:t,src:e,data:{id:n,sync:M(),timebase:l.now(),sampleRate:.01,url:e,extras:{initialDOMState:d.getReadyState()}}})},n.queueBeacons=function(){return T.getSampleRum()?(function(){try{y.getGlobal("requestAnimationFrame")((function(){var t=T.getRumData().timebase;v.dispatch(_.SET_RUM_DATA,{data:{render:l.now()-(t||0)}})}))}catch(t){return}}(),d.isLoaded()?y.setTimeout(P,3e3):y.addEventListener("load",P),new m((function(t,n){y.setTimeout((function(){(function(){!function(){var t={id:T.getRumId(),v:D,account:k.getAccountId(),project:k.getSnippetId()||k.getProjectId(),snippet:k.getSnippetId(),revision:k.getRevision(),clientVersion:S.getClientVersion(),hasSlave:!1,wxhr:!0,extras:{}},n=b.getPersistedBehaviorEventCount(),e=f.getEventCount();t.numBehaviorEvents=e;var i=e-n;Object.assign(t.extras,{behaviorEventCountDiff:i,behaviorEventCountDecreased:i<0}),Object.assign(t,function(){var t=y.getGlobal("performance");if(!t)return;var n,e=T.getScriptSrc();try{if(e){p.debug("Using derived script src: ",e);var i=t.getEntriesByName(e);i.length>0&&(n=i[0])}if(!n){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;p.debug("Scanning resource timing entries with regex");var u=t.getEntriesByType("resource");n=u.find((function(t){return r.test(t.name)}))}if(n)return o(E.ResourceTimingAttributes,(function(t,e){var i=n[e];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===e?function(t){if(!t||!t.length)return[];for(var n=[],e=0;e<t.length;e++)try{var i=t[e];n.push({name:i.name,duration:i.duration,description:i.description})}catch(t){}return n}(i):void 0}))}catch(t){return}}(),O.getDurationsFor(Object.values(E.RUMPerformanceTimingAttributes))),v.dispatch(_.SET_RUM_DATA,{data:t})}();var t=T.getRumData(),n=O.getMarks()||{};return t.extras=t.extras||{},t.extras.beacon={cjsTimeout:!0},t.userTimings=n,j(t=a(t,(function(t){return void 0!==t})))})().then(t,n)}),3e3)})).catch((function(t){p.warn("RUM / Error sending data:",t)}))):m.resolve()}},6179:function(t,n,e){var i;!function(r,o){"use strict";var u="function",a="undefined",c="object",s="string",f="major",l="model",d="name",v="type",h="vendor",p="version",g="architecture",m="console",b="mobile",y="tablet",w="smarttv",_="wearable",E="embedded",I="Amazon",A="Apple",S="ASUS",k="BlackBerry",T="Browser",O="Chrome",R="Firefox",x="Google",N="Honor",C="Huawei",D="LG",j="Microsoft",M="Motorola",P="Nvidia",L="OnePlus",U="Opera",V="OPPO",B="Samsung",z="Sharp",F="Sony",q="Xiaomi",G="Zebra",H="Facebook",$="Chromium OS",Y="Mac OS",W=" Browser",K=function(t){for(var n={},e=0;e<t.length;e++)n[t[e].toUpperCase()]=t[e];return n},X=function(t,n){return typeof t===s&&-1!==J(n).indexOf(J(t))},J=function(t){return t.toLowerCase()},Q=function(t,n){if(typeof t===s)return t=t.replace(/^\s\s*/,""),typeof n===a?t:t.substring(0,500)},Z=function(t,n){for(var e,i,r,a,s,f,l=0;l<n.length&&!s;){var d=n[l],v=n[l+1];for(e=i=0;e<d.length&&!s&&d[e];)if(s=d[e++].exec(t))for(r=0;r<v.length;r++)f=s[++i],typeof(a=v[r])===c&&a.length>0?2===a.length?typeof a[1]==u?this[a[0]]=a[1].call(this,f):this[a[0]]=a[1]:3===a.length?typeof a[1]!==u||a[1].exec&&a[1].test?this[a[0]]=f?f.replace(a[1],a[2]):o:this[a[0]]=f?a[1].call(this,f,a[2]):o:4===a.length&&(this[a[0]]=f?a[3].call(this,f.replace(a[1],a[2])):o):this[a]=f||o;l+=2}},tt=function(t,n){for(var e in n)if(typeof n[e]===c&&n[e].length>0){for(var i=0;i<n[e].length;i++)if(X(n[e][i],t))return"?"===e?o:e}else if(X(n[e],t))return"?"===e?o:e;return n.hasOwnProperty("*")?n["*"]:t},nt={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},et={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,p],[/opios[\/ ]+([\w\.]+)/i],[p,[d,U+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[p,[d,U+" GX"]],[/\bopr\/([\w\.]+)/i],[p,[d,U]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[p,[d,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[p,[d,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,/(heytap|ovi|115)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[d,p],[/quark(?:pc)?\/([-\w\.]+)/i],[p,[d,"Quark"]],[/\bddg\/([\w\.]+)/i],[p,[d,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[d,"UC"+T]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[p,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[d,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[p,[d,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[p,[d,"Smart Lenovo "+T]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure "+T],p],[/\bfocus\/([\w\.]+)/i],[p,[d,R+" Focus"]],[/\bopt\/([\w\.]+)/i],[p,[d,U+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[d,U+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[d,"MIUI"+W]],[/fxios\/([\w\.-]+)/i],[p,[d,R]],[/\bqihoobrowser\/?([\w\.]*)/i],[p,[d,"360"]],[/\b(qq)\/([\w\.]+)/i],[[d,/(.+)/,"$1Browser"],p],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1"+W],p],[/samsungbrowser\/([\w\.]+)/i],[p,[d,B+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[p,[d,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[d,"Sogou Mobile"],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[d,p],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[d],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[p,d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,H],p],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[d,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[d,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[p,[d,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[d,O+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,O+" WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[d,"Android "+T]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,p],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[p,[d,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[p,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[p,tt,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[d,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],p],[/(wolvic|librewolf)\/([\w\.]+)/i],[d,p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[d,R+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[d,[p,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[d,[p,/master.|lts./,""]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[g,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[g,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[g,"arm"]],[/((ppc|powerpc)(64)?)( mac|;|\))/i],[[g,/ower/,"",J]],[/ sun4\w[;\)]/i],[[g,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],[[g,J]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[h,B],[v,y]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[l,[h,B],[v,b]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[l,[h,A],[v,b]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[h,A],[v,y]],[/(macintosh);/i],[l,[h,A]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[h,z],[v,b]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[l,[h,N],[v,y]],[/honor([-\w ]+)[;\)]/i],[l,[h,N],[v,b]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[l,[h,C],[v,y]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[l,[h,C],[v,b]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[l,/_/g," "],[h,q],[v,y]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,/ ([\w ]+) miui\/v?\d/i],[[l,/_/g," "],[h,q],[v,b]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[h,V],[v,b]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[l,[h,tt,{OnePlus:["304","403","203"],"*":V}],[v,y]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[h,"Vivo"],[v,b]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[l,[h,"Realme"],[v,b]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[h,M],[v,b]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[h,M],[v,y]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[h,D],[v,y]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[h,D],[v,b]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[l,[h,"Lenovo"],[v,y]],[/(nokia) (t[12][01])/i],[h,l,[v,y]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*))/i],[[l,/_/g," "],[v,b],[h,"Nokia"]],[/(pixel (c|tablet))\b/i],[l,[h,x],[v,y]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[h,x],[v,b]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[h,F],[v,b]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[h,F],[v,y]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[h,L],[v,b]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[h,I],[v,y]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[h,I],[v,b]],[/(playbook);[-\w\),; ]+(rim)/i],[l,h,[v,y]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[h,k],[v,b]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[h,S],[v,y]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[h,S],[v,b]],[/(nexus 9)/i],[l,[h,"HTC"],[v,y]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[h,[l,/_/g," "],[v,b]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[l,[h,"TCL"],[v,y]],[/(itel) ((\w+))/i],[[h,J],l,[v,tt,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[h,"Acer"],[v,y]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[h,"Meizu"],[v,b]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[l,[h,"Ulefone"],[v,b]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[l,[h,"Energizer"],[v,b]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[l,[h,"Cat"],[v,b]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[l,[h,"Smartfren"],[v,b]],[/droid.+; (a(?:015|06[35]|142p?))/i],[l,[h,"Nothing"],[v,b]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[l,[h,"Archos"],[v,y]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[l,[h,"Archos"],[v,b]],[/(imo) (tab \w+)/i,/(infinix) (x1101b?)/i],[h,l,[v,y]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (hmd|imo) ([\w ]+?)(?: bui|\))/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,/(oppo) ?([\w ]+) bui/i],[h,l,[v,b]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[h,l,[v,y]],[/(surface duo)/i],[l,[h,j],[v,y]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[h,"Fairphone"],[v,b]],[/(u304aa)/i],[l,[h,"AT&T"],[v,b]],[/\bsie-(\w*)/i],[l,[h,"Siemens"],[v,b]],[/\b(rct\w+) b/i],[l,[h,"RCA"],[v,y]],[/\b(venue[\d ]{2,7}) b/i],[l,[h,"Dell"],[v,y]],[/\b(q(?:mv|ta)\w+) b/i],[l,[h,"Verizon"],[v,y]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[h,"Barnes & Noble"],[v,y]],[/\b(tm\d{3}\w+) b/i],[l,[h,"NuVision"],[v,y]],[/\b(k88) b/i],[l,[h,"ZTE"],[v,y]],[/\b(nx\d{3}j) b/i],[l,[h,"ZTE"],[v,b]],[/\b(gen\d{3}) b.+49h/i],[l,[h,"Swiss"],[v,b]],[/\b(zur\d{3}) b/i],[l,[h,"Swiss"],[v,y]],[/\b((zeki)?tb.*\b) b/i],[l,[h,"Zeki"],[v,y]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[h,"Dragon Touch"],l,[v,y]],[/\b(ns-?\w{0,9}) b/i],[l,[h,"Insignia"],[v,y]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[h,"NextBook"],[v,y]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[h,"Voice"],l,[v,b]],[/\b(lvtel\-)?(v1[12]) b/i],[[h,"LvTel"],l,[v,b]],[/\b(ph-1) /i],[l,[h,"Essential"],[v,b]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[h,"Envizen"],[v,y]],[/\b(trio[-\w\. ]+) b/i],[l,[h,"MachSpeed"],[v,y]],[/\btu_(1491) b/i],[l,[h,"Rotor"],[v,y]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[l,[h,P],[v,y]],[/(sprint) (\w+)/i],[h,l,[v,b]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[h,j],[v,b]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[h,G],[v,y]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[h,G],[v,b]],[/smart-tv.+(samsung)/i],[h,[v,w]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[h,B],[v,w]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[h,D],[v,w]],[/(apple) ?tv/i],[h,[l,A+" TV"],[v,w]],[/crkey/i],[[l,O+"cast"],[h,x],[v,w]],[/droid.+aft(\w+)( bui|\))/i],[l,[h,I],[v,w]],[/(shield \w+ tv)/i],[l,[h,P],[v,w]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[l,[h,z],[v,w]],[/(bravia[\w ]+)( bui|\))/i],[l,[h,F],[v,w]],[/(mi(tv|box)-?\w+) bui/i],[l,[h,q],[v,w]],[/Hbbtv.*(technisat) (.*);/i],[h,l,[v,w]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[h,Q],[l,Q],[v,w]],[/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],[l,[v,w]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[v,w]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[h,l,[v,m]],[/droid.+; (shield)( bui|\))/i],[l,[h,P],[v,m]],[/(playstation \w+)/i],[l,[h,F],[v,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[h,j],[v,m]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[l,[h,B],[v,_]],[/((pebble))app/i,/(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[h,l,[v,_]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[l,[h,V],[v,_]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[l,[h,A],[v,_]],[/(opwwe\d{3})/i],[l,[h,L],[v,_]],[/(moto 360)/i],[l,[h,M],[v,_]],[/(smartwatch 3)/i],[l,[h,F],[v,_]],[/(g watch r)/i],[l,[h,D],[v,_]],[/droid.+; (wt63?0{2,3})\)/i],[l,[h,G],[v,_]],[/droid.+; (glass) \d/i],[l,[h,x],[v,_]],[/(pico) (4|neo3(?: link|pro)?)/i],[h,l,[v,_]],[/; (quest( \d| pro)?)/i],[l,[h,H],[v,_]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[h,[v,E]],[/(aeobc)\b/i],[l,[h,I],[v,E]],[/(homepod).+mac os/i],[l,[h,A],[v,E]],[/windows iot/i],[[v,E]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[l,[v,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[v,y]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[v,y]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[v,b]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[l,[h,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[d,"EdgeHTML"]],[/(arkweb)\/([\w\.]+)/i],[d,p],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[d,p],[/ladybird\//i],[[d,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,p],[/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],[d,[p,tt,nt]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[p,tt,nt],[d,"Windows"]],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,Y],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[p,d],[/(ubuntu) ([\w\.]+) like android/i],[[d,/(.+)/,"$1 Touch"],p],[/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],[d,p],[/\(bb(10);/i],[p,[d,k]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[p,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[d,R+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[d,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[p,[d,"watchOS"]],[/crkey\/([\d\.]+)/i],[p,[d,O+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[d,$],p],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,p],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[d,p]]},it=function(t,n){if(typeof t===c&&(n=t,t=o),!(this instanceof it))return new it(t,n).getResult();var e=typeof r!==a&&r.navigator?r.navigator:o,i=t||(e&&e.userAgent?e.userAgent:""),m=e&&e.userAgentData?e.userAgentData:o,w=n?function(t,n){var e={};for(var i in t)n[i]&&n[i].length%2==0?e[i]=n[i].concat(t[i]):e[i]=t[i];return e}(et,n):et,_=e&&e.userAgent==i;return this.getBrowser=function(){var t,n={};return n[d]=o,n[p]=o,Z.call(n,i,w.browser),n[f]=typeof(t=n[p])===s?t.replace(/[^\d\.]/g,"").split(".")[0]:o,_&&e&&e.brave&&typeof e.brave.isBrave==u&&(n[d]="Brave"),n},this.getCPU=function(){var t={};return t[g]=o,Z.call(t,i,w.cpu),t},this.getDevice=function(){var t={};return t[h]=o,t[l]=o,t[v]=o,Z.call(t,i,w.device),_&&!t[v]&&m&&m.mobile&&(t[v]=b),_&&"Macintosh"==t[l]&&e&&typeof e.standalone!==a&&e.maxTouchPoints&&e.maxTouchPoints>2&&(t[l]="iPad",t[v]=y),t},this.getEngine=function(){var t={};return t[d]=o,t[p]=o,Z.call(t,i,w.engine),t},this.getOS=function(){var t={};return t[d]=o,t[p]=o,Z.call(t,i,w.os),_&&!t[d]&&m&&m.platform&&"Unknown"!=m.platform&&(t[d]=m.platform.replace(/chrome os/i,$).replace(/macos/i,Y)),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(t){return i=typeof t===s&&t.length>500?Q(t,500):t,this},this.setUA(i),this};it.VERSION="1.0.41",it.BROWSER=K([d,p,f]),it.CPU=K([g]),it.DEVICE=K([l,h,v,m,b,w,y,_,E]),it.ENGINE=it.OS=K([d,p]),typeof n!==a?(t.exports&&(n=t.exports=it),n.UAParser=it):e.amdO?(i=function(){return it}.call(n,e,n,t))===o||(t.exports=i):typeof r!==a&&(r.UAParser=it);var rt=typeof r!==a&&(r.jQuery||r.Zepto);if(rt&&!rt.ua){var ot=new it;rt.ua=ot.getResult(),rt.ua.get=function(){return ot.getUA()},rt.ua.set=function(t){ot.setUA(t);var n=ot.getResult();for(var e in n)rt.ua[e]=n[e]}}}("object"==typeof window?window:this)},3371:function(t,n){var e,i,r;i="undefined"!=typeof window?window:this,r=function(i,r){var o=[],u=o.slice,a=o.concat,c=o.push,s=o.indexOf,f={},l=f.toString,d=f.hasOwnProperty,v={},h="1.11.3 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-deprecated,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-offset,-dimensions",p=function(t,n){return new p.fn.init(t,n)},g=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,m=/^-ms-/,b=/-([\da-z])/gi,y=function(t,n){return n.toUpperCase()};function w(t){var n="length"in t&&t.length,e=p.type(t);return"function"!==e&&!p.isWindow(t)&&(!(1!==t.nodeType||!n)||"array"===e||0===n||"number"==typeof n&&n>0&&n-1 in t)}p.fn=p.prototype={jquery:h,constructor:p,selector:"",length:0,toArray:function(){return u.call(this)},get:function(t){return null!=t?t<0?this[t+this.length]:this[t]:u.call(this)},pushStack:function(t){var n=p.merge(this.constructor(),t);return n.prevObject=this,n.context=this.context,n},each:function(t,n){return p.each(this,t,n)},map:function(t){return this.pushStack(p.map(this,(function(n,e){return t.call(n,e,n)})))},slice:function(){return this.pushStack(u.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var n=this.length,e=+t+(t<0?n:0);return this.pushStack(e>=0&&e<n?[this[e]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:c,sort:o.sort,splice:o.splice},p.extend=p.fn.extend=function(){var t,n,e,i,r,o,u=arguments[0]||{},a=1,c=arguments.length,s=!1;for("boolean"==typeof u&&(s=u,u=arguments[a]||{},a++),"object"==typeof u||p.isFunction(u)||(u={}),a===c&&(u=this,a--);a<c;a++)if(null!=(r=arguments[a]))for(i in r)t=u[i],u!==(e=r[i])&&(s&&e&&(p.isPlainObject(e)||(n=p.isArray(e)))?(n?(n=!1,o=t&&p.isArray(t)?t:[]):o=t&&p.isPlainObject(t)?t:{},u[i]=p.extend(s,o,e)):void 0!==e&&(u[i]=e));return u},p.extend({expando:"jQuery"+(h+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===p.type(t)},isArray:Array.isArray||function(t){return"array"===p.type(t)},isWindow:function(t){return null!=t&&t==t.window},isNumeric:function(t){return!p.isArray(t)&&t-parseFloat(t)+1>=0},isEmptyObject:function(t){var n;for(n in t)return!1;return!0},isPlainObject:function(t){var n;if(!t||"object"!==p.type(t)||t.nodeType||p.isWindow(t))return!1;try{if(t.constructor&&!d.call(t,"constructor")&&!d.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}if(v.ownLast)for(n in t)return d.call(t,n);for(n in t);return void 0===n||d.call(t,n)},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?f[l.call(t)]||"object":typeof t},globalEval:function(t){t&&p.trim(t)&&(i.execScript||function(t){i.eval.call(i,t)})(t)},camelCase:function(t){return t.replace(m,"ms-").replace(b,y)},nodeName:function(t,n){return t.nodeName&&t.nodeName.toLowerCase()===n.toLowerCase()},each:function(t,n,e){var i=0,r=t.length,o=w(t);if(e){if(o)for(;i<r&&!1!==n.apply(t[i],e);i++);else for(i in t)if(!1===n.apply(t[i],e))break}else if(o)for(;i<r&&!1!==n.call(t[i],i,t[i]);i++);else for(i in t)if(!1===n.call(t[i],i,t[i]))break;return t},trim:function(t){return null==t?"":(t+"").replace(g,"")},makeArray:function(t,n){var e=n||[];return null!=t&&(w(Object(t))?p.merge(e,"string"==typeof t?[t]:t):c.call(e,t)),e},inArray:function(t,n,e){var i;if(n){if(s)return s.call(n,t,e);for(i=n.length,e=e?e<0?Math.max(0,i+e):e:0;e<i;e++)if(e in n&&n[e]===t)return e}return-1},merge:function(t,n){for(var e=+n.length,i=0,r=t.length;i<e;)t[r++]=n[i++];if(e!=e)for(;void 0!==n[i];)t[r++]=n[i++];return t.length=r,t},grep:function(t,n,e){for(var i=[],r=0,o=t.length,u=!e;r<o;r++)!n(t[r],r)!==u&&i.push(t[r]);return i},map:function(t,n,e){var i,r=0,o=t.length,u=[];if(w(t))for(;r<o;r++)null!=(i=n(t[r],r,e))&&u.push(i);else for(r in t)null!=(i=n(t[r],r,e))&&u.push(i);return a.apply([],u)},guid:1,proxy:function(t,n){var e,i,r;if("string"==typeof n&&(r=t[n],n=t,t=r),p.isFunction(t))return e=u.call(arguments,2),i=function(){return t.apply(n||this,e.concat(u.call(arguments)))},i.guid=t.guid=t.guid||p.guid++,i},now:function(){return+new Date},support:v}),p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),(function(t,n){f["[object "+n+"]"]=n.toLowerCase()}));var _=function(t){var n,e,i,r,o,u,a,c,s,f,l,d,v,h,p,g,m,b,y,w="sizzle"+1*new Date,_=t.document,E=0,I=0,A=ut(),S=ut(),k=ut(),T=function(t,n){return t===n&&(l=!0),0},O=1<<31,R={}.hasOwnProperty,x=[],N=x.pop,C=x.push,D=x.push,j=x.slice,M=function(t,n){for(var e=0,i=t.length;e<i;e++)if(t[e]===n)return e;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",U="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",V=U.replace("w","w#"),B="\\["+L+"*("+U+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+V+"))|)"+L+"*\\]",z=":("+U+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+B+")*)|.*)\\)|)",F=new RegExp(L+"+","g"),q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),G=new RegExp("^"+L+"*,"+L+"*"),H=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),$=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),Y=new RegExp(z),W=new RegExp("^"+V+"$"),K={ID:new RegExp("^#("+U+")"),CLASS:new RegExp("^\\.("+U+")"),TAG:new RegExp("^("+U.replace("w","w*")+")"),ATTR:new RegExp("^"+B),PSEUDO:new RegExp("^"+z),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tt=/[+~]/,nt=/'|\\/g,et=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),it=function(t,n,e){var i="0x"+n-65536;return i!=i||e?n:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},rt=function(){d()};try{D.apply(x=j.call(_.childNodes),_.childNodes),x[_.childNodes.length].nodeType}catch(t){D={apply:x.length?function(t,n){C.apply(t,j.call(n))}:function(t,n){for(var e=t.length,i=0;t[e++]=n[i++];);t.length=e-1}}}function ot(t,n,i,r){var o,a,s,f,l,h,m,b,E,I;if((n?n.ownerDocument||n:_)!==v&&d(n),i=i||[],f=(n=n||v).nodeType,"string"!=typeof t||!t||1!==f&&9!==f&&11!==f)return i;if(!r&&p){if(11!==f&&(o=Z.exec(t)))if(s=o[1]){if(9===f){if(!(a=n.getElementById(s))||!a.parentNode)return i;if(a.id===s)return i.push(a),i}else if(n.ownerDocument&&(a=n.ownerDocument.getElementById(s))&&y(n,a)&&a.id===s)return i.push(a),i}else{if(o[2])return D.apply(i,n.getElementsByTagName(t)),i;if((s=o[3])&&e.getElementsByClassName)return D.apply(i,n.getElementsByClassName(s)),i}if(e.qsa&&(!g||!g.test(t))){if(b=m=w,E=n,I=1!==f&&t,1===f&&"object"!==n.nodeName.toLowerCase()){for(h=u(t),(m=n.getAttribute("id"))?b=m.replace(nt,"\\$&"):n.setAttribute("id",b),b="[id='"+b+"'] ",l=h.length;l--;)h[l]=b+gt(h[l]);E=tt.test(t)&&ht(n.parentNode)||n,I=h.join(",")}if(I)try{return D.apply(i,E.querySelectorAll(I)),i}catch(t){}finally{m||n.removeAttribute("id")}}}return c(t.replace(q,"$1"),n,i,r)}function ut(){var t=[];return function n(e,r){return t.push(e+" ")>i.cacheLength&&delete n[t.shift()],n[e+" "]=r}}function at(t){return t[w]=!0,t}function ct(t){var n=v.createElement("div");try{return!!t(n)}catch(t){return!1}finally{n.parentNode&&n.parentNode.removeChild(n),n=null}}function st(t,n){for(var e=t.split("|"),r=t.length;r--;)i.attrHandle[e[r]]=n}function ft(t,n){var e=n&&t,i=e&&1===t.nodeType&&1===n.nodeType&&(~n.sourceIndex||O)-(~t.sourceIndex||O);if(i)return i;if(e)for(;e=e.nextSibling;)if(e===n)return-1;return t?1:-1}function lt(t){return function(n){return"input"===n.nodeName.toLowerCase()&&n.type===t}}function dt(t){return function(n){var e=n.nodeName.toLowerCase();return("input"===e||"button"===e)&&n.type===t}}function vt(t){return at((function(n){return n=+n,at((function(e,i){for(var r,o=t([],e.length,n),u=o.length;u--;)e[r=o[u]]&&(e[r]=!(i[r]=e[r]))}))}))}function ht(t){return t&&void 0!==t.getElementsByTagName&&t}for(n in e=ot.support={},o=ot.isXML=function(t){var n=t&&(t.ownerDocument||t).documentElement;return!!n&&"HTML"!==n.nodeName},d=ot.setDocument=function(t){var n,r,u=t?t.ownerDocument||t:_;return u!==v&&9===u.nodeType&&u.documentElement?(v=u,h=u.documentElement,(r=u.defaultView)&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",rt,!1):r.attachEvent&&r.attachEvent("onunload",rt)),p=!o(u),e.attributes=ct((function(t){return t.className="i",!t.getAttribute("className")})),e.getElementsByTagName=ct((function(t){return t.appendChild(u.createComment("")),!t.getElementsByTagName("*").length})),e.getElementsByClassName=Q.test(u.getElementsByClassName),e.getById=ct((function(t){return h.appendChild(t).id=w,!u.getElementsByName||!u.getElementsByName(w).length})),e.getById?(i.find.ID=function(t,n){if(void 0!==n.getElementById&&p){var e=n.getElementById(t);return e&&e.parentNode?[e]:[]}},i.filter.ID=function(t){var n=t.replace(et,it);return function(t){return t.getAttribute("id")===n}}):(delete i.find.ID,i.filter.ID=function(t){var n=t.replace(et,it);return function(t){var e=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return e&&e.value===n}}),i.find.TAG=e.getElementsByTagName?function(t,n){return void 0!==n.getElementsByTagName?n.getElementsByTagName(t):e.qsa?n.querySelectorAll(t):void 0}:function(t,n){var e,i=[],r=0,o=n.getElementsByTagName(t);if("*"===t){for(;e=o[r++];)1===e.nodeType&&i.push(e);return i}return o},i.find.CLASS=e.getElementsByClassName&&function(t,n){if(p)return n.getElementsByClassName(t)},m=[],g=[],(e.qsa=Q.test(u.querySelectorAll))&&(ct((function(t){h.appendChild(t).innerHTML="<a id='"+w+"'></a><select id='"+w+"-\f]' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+L+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||g.push("\\["+L+"*(?:value|"+P+")"),t.querySelectorAll("[id~="+w+"-]").length||g.push("~="),t.querySelectorAll(":checked").length||g.push(":checked"),t.querySelectorAll("a#"+w+"+*").length||g.push(".#.+[+~]")})),ct((function(t){var n=u.createElement("input");n.setAttribute("type","hidden"),t.appendChild(n).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&g.push("name"+L+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),g.push(",.*:")}))),(e.matchesSelector=Q.test(b=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ct((function(t){e.disconnectedMatch=b.call(t,"div"),b.call(t,"[s!='']:x"),m.push("!=",z)})),g=g.length&&new RegExp(g.join("|")),m=m.length&&new RegExp(m.join("|")),n=Q.test(h.compareDocumentPosition),y=n||Q.test(h.contains)?function(t,n){var e=9===t.nodeType?t.documentElement:t,i=n&&n.parentNode;return t===i||!(!i||1!==i.nodeType||!(e.contains?e.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,n){if(n)for(;n=n.parentNode;)if(n===t)return!0;return!1},T=n?function(t,n){if(t===n)return l=!0,0;var i=!t.compareDocumentPosition-!n.compareDocumentPosition;return i||(1&(i=(t.ownerDocument||t)===(n.ownerDocument||n)?t.compareDocumentPosition(n):1)||!e.sortDetached&&n.compareDocumentPosition(t)===i?t===u||t.ownerDocument===_&&y(_,t)?-1:n===u||n.ownerDocument===_&&y(_,n)?1:f?M(f,t)-M(f,n):0:4&i?-1:1)}:function(t,n){if(t===n)return l=!0,0;var e,i=0,r=t.parentNode,o=n.parentNode,a=[t],c=[n];if(!r||!o)return t===u?-1:n===u?1:r?-1:o?1:f?M(f,t)-M(f,n):0;if(r===o)return ft(t,n);for(e=t;e=e.parentNode;)a.unshift(e);for(e=n;e=e.parentNode;)c.unshift(e);for(;a[i]===c[i];)i++;return i?ft(a[i],c[i]):a[i]===_?-1:c[i]===_?1:0},u):v},ot.matches=function(t,n){return ot(t,null,null,n)},ot.matchesSelector=function(t,n){if((t.ownerDocument||t)!==v&&d(t),n=n.replace($,"='$1']"),e.matchesSelector&&p&&(!m||!m.test(n))&&(!g||!g.test(n)))try{var i=b.call(t,n);if(i||e.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(t){}return ot(n,v,null,[t]).length>0},ot.contains=function(t,n){return(t.ownerDocument||t)!==v&&d(t),y(t,n)},ot.attr=function(t,n){(t.ownerDocument||t)!==v&&d(t);var r=i.attrHandle[n.toLowerCase()],o=r&&R.call(i.attrHandle,n.toLowerCase())?r(t,n,!p):void 0;return void 0!==o?o:e.attributes||!p?t.getAttribute(n):(o=t.getAttributeNode(n))&&o.specified?o.value:null},ot.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},ot.uniqueSort=function(t){var n,i=[],r=0,o=0;if(l=!e.detectDuplicates,f=!e.sortStable&&t.slice(0),t.sort(T),l){for(;n=t[o++];)n===t[o]&&(r=i.push(o));for(;r--;)t.splice(i[r],1)}return f=null,t},r=ot.getText=function(t){var n,e="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)e+=r(t)}else if(3===o||4===o)return t.nodeValue}else for(;n=t[i++];)e+=r(n);return e},i=ot.selectors={cacheLength:50,createPseudo:at,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(et,it),t[3]=(t[3]||t[4]||t[5]||"").replace(et,it),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||ot.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&ot.error(t[0]),t},PSEUDO:function(t){var n,e=!t[6]&&t[2];return K.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":e&&Y.test(e)&&(n=u(e,!0))&&(n=e.indexOf(")",e.length-n)-e.length)&&(t[0]=t[0].slice(0,n),t[2]=e.slice(0,n)),t.slice(0,3))}},filter:{TAG:function(t){var n=t.replace(et,it).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===n}},CLASS:function(t){var n=A[t+" "];return n||(n=new RegExp("(^|"+L+")"+t+"("+L+"|$)"))&&A(t,(function(t){return n.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")}))},ATTR:function(t,n,e){return function(i){var r=ot.attr(i,t);return null==r?"!="===n:!n||(r+="","="===n?r===e:"!="===n?r!==e:"^="===n?e&&0===r.indexOf(e):"*="===n?e&&r.indexOf(e)>-1:"$="===n?e&&r.slice(-e.length)===e:"~="===n?(" "+r.replace(F," ")+" ").indexOf(e)>-1:"|="===n&&(r===e||r.slice(0,e.length+1)===e+"-"))}},CHILD:function(t,n,e,i,r){var o="nth"!==t.slice(0,3),u="last"!==t.slice(-4),a="of-type"===n;return 1===i&&0===r?function(t){return!!t.parentNode}:function(n,e,c){var s,f,l,d,v,h,p=o!==u?"nextSibling":"previousSibling",g=n.parentNode,m=a&&n.nodeName.toLowerCase(),b=!c&&!a;if(g){if(o){for(;p;){for(l=n;l=l[p];)if(a?l.nodeName.toLowerCase()===m:1===l.nodeType)return!1;h=p="only"===t&&!h&&"nextSibling"}return!0}if(h=[u?g.firstChild:g.lastChild],u&&b){for(v=(s=(f=g[w]||(g[w]={}))[t]||[])[0]===E&&s[1],d=s[0]===E&&s[2],l=v&&g.childNodes[v];l=++v&&l&&l[p]||(d=v=0)||h.pop();)if(1===l.nodeType&&++d&&l===n){f[t]=[E,v,d];break}}else if(b&&(s=(n[w]||(n[w]={}))[t])&&s[0]===E)d=s[1];else for(;(l=++v&&l&&l[p]||(d=v=0)||h.pop())&&((a?l.nodeName.toLowerCase()!==m:1!==l.nodeType)||!++d||(b&&((l[w]||(l[w]={}))[t]=[E,d]),l!==n)););return(d-=r)===i||d%i==0&&d/i>=0}}},PSEUDO:function(t,n){var e,r=i.pseudos[t]||i.setFilters[t.toLowerCase()]||ot.error("unsupported pseudo: "+t);return r[w]?r(n):r.length>1?(e=[t,t,"",n],i.setFilters.hasOwnProperty(t.toLowerCase())?at((function(t,e){for(var i,o=r(t,n),u=o.length;u--;)t[i=M(t,o[u])]=!(e[i]=o[u])})):function(t){return r(t,0,e)}):r}},pseudos:{not:at((function(t){var n=[],e=[],i=a(t.replace(q,"$1"));return i[w]?at((function(t,n,e,r){for(var o,u=i(t,null,r,[]),a=t.length;a--;)(o=u[a])&&(t[a]=!(n[a]=o))})):function(t,r,o){return n[0]=t,i(n,null,o,e),n[0]=null,!e.pop()}})),has:at((function(t){return function(n){return ot(t,n).length>0}})),contains:at((function(t){return t=t.replace(et,it),function(n){return(n.textContent||n.innerText||r(n)).indexOf(t)>-1}})),lang:at((function(t){return W.test(t||"")||ot.error("unsupported lang: "+t),t=t.replace(et,it).toLowerCase(),function(n){var e;do{if(e=p?n.lang:n.getAttribute("xml:lang")||n.getAttribute("lang"))return(e=e.toLowerCase())===t||0===e.indexOf(t+"-")}while((n=n.parentNode)&&1===n.nodeType);return!1}})),target:function(n){var e=t.location&&t.location.hash;return e&&e.slice(1)===n.id},root:function(t){return t===h},focus:function(t){return t===v.activeElement&&(!v.hasFocus||v.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return!1===t.disabled},disabled:function(t){return!0===t.disabled},checked:function(t){var n=t.nodeName.toLowerCase();return"input"===n&&!!t.checked||"option"===n&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!i.pseudos.empty(t)},header:function(t){return J.test(t.nodeName)},input:function(t){return X.test(t.nodeName)},button:function(t){var n=t.nodeName.toLowerCase();return"input"===n&&"button"===t.type||"button"===n},text:function(t){var n;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(n=t.getAttribute("type"))||"text"===n.toLowerCase())},first:vt((function(){return[0]})),last:vt((function(t,n){return[n-1]})),eq:vt((function(t,n,e){return[e<0?e+n:e]})),even:vt((function(t,n){for(var e=0;e<n;e+=2)t.push(e);return t})),odd:vt((function(t,n){for(var e=1;e<n;e+=2)t.push(e);return t})),lt:vt((function(t,n,e){for(var i=e<0?e+n:e;--i>=0;)t.push(i);return t})),gt:vt((function(t,n,e){for(var i=e<0?e+n:e;++i<n;)t.push(i);return t}))}},i.pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=dt(n);function pt(){}function gt(t){for(var n=0,e=t.length,i="";n<e;n++)i+=t[n].value;return i}function mt(t,n,e){var i=n.dir,r=e&&"parentNode"===i,o=I++;return n.first?function(n,e,o){for(;n=n[i];)if(1===n.nodeType||r)return t(n,e,o)}:function(n,e,u){var a,c,s=[E,o];if(u){for(;n=n[i];)if((1===n.nodeType||r)&&t(n,e,u))return!0}else for(;n=n[i];)if(1===n.nodeType||r){if((a=(c=n[w]||(n[w]={}))[i])&&a[0]===E&&a[1]===o)return s[2]=a[2];if(c[i]=s,s[2]=t(n,e,u))return!0}}}function bt(t){return t.length>1?function(n,e,i){for(var r=t.length;r--;)if(!t[r](n,e,i))return!1;return!0}:t[0]}function yt(t,n,e,i,r){for(var o,u=[],a=0,c=t.length,s=null!=n;a<c;a++)(o=t[a])&&(e&&!e(o,i,r)||(u.push(o),s&&n.push(a)));return u}function wt(t,n,e,i,r,o){return i&&!i[w]&&(i=wt(i)),r&&!r[w]&&(r=wt(r,o)),at((function(o,u,a,c){var s,f,l,d=[],v=[],h=u.length,p=o||function(t,n,e){for(var i=0,r=n.length;i<r;i++)ot(t,n[i],e);return e}(n||"*",a.nodeType?[a]:a,[]),g=!t||!o&&n?p:yt(p,d,t,a,c),m=e?r||(o?t:h||i)?[]:u:g;if(e&&e(g,m,a,c),i)for(s=yt(m,v),i(s,[],a,c),f=s.length;f--;)(l=s[f])&&(m[v[f]]=!(g[v[f]]=l));if(o){if(r||t){if(r){for(s=[],f=m.length;f--;)(l=m[f])&&s.push(g[f]=l);r(null,m=[],s,c)}for(f=m.length;f--;)(l=m[f])&&(s=r?M(o,l):d[f])>-1&&(o[s]=!(u[s]=l))}}else m=yt(m===u?m.splice(h,m.length):m),r?r(null,u,m,c):D.apply(u,m)}))}function _t(t){for(var n,e,r,o=t.length,u=i.relative[t[0].type],a=u||i.relative[" "],c=u?1:0,f=mt((function(t){return t===n}),a,!0),l=mt((function(t){return M(n,t)>-1}),a,!0),d=[function(t,e,i){var r=!u&&(i||e!==s)||((n=e).nodeType?f(t,e,i):l(t,e,i));return n=null,r}];c<o;c++)if(e=i.relative[t[c].type])d=[mt(bt(d),e)];else{if((e=i.filter[t[c].type].apply(null,t[c].matches))[w]){for(r=++c;r<o&&!i.relative[t[r].type];r++);return wt(c>1&&bt(d),c>1&&gt(t.slice(0,c-1).concat({value:" "===t[c-2].type?"*":""})).replace(q,"$1"),e,c<r&&_t(t.slice(c,r)),r<o&&_t(t=t.slice(r)),r<o&&gt(t))}d.push(e)}return bt(d)}return pt.prototype=i.filters=i.pseudos,i.setFilters=new pt,u=ot.tokenize=function(t,n){var e,r,o,u,a,c,s,f=S[t+" "];if(f)return n?0:f.slice(0);for(a=t,c=[],s=i.preFilter;a;){for(u in e&&!(r=G.exec(a))||(r&&(a=a.slice(r[0].length)||a),c.push(o=[])),e=!1,(r=H.exec(a))&&(e=r.shift(),o.push({value:e,type:r[0].replace(q," ")}),a=a.slice(e.length)),i.filter)!(r=K[u].exec(a))||s[u]&&!(r=s[u](r))||(e=r.shift(),o.push({value:e,type:u,matches:r}),a=a.slice(e.length));if(!e)break}return n?a.length:a?ot.error(t):S(t,c).slice(0)},a=ot.compile=function(t,n){var e,r=[],o=[],a=k[t+" "];if(!a){for(n||(n=u(t)),e=n.length;e--;)(a=_t(n[e]))[w]?r.push(a):o.push(a);a=k(t,function(t,n){var e=n.length>0,r=t.length>0,o=function(o,u,a,c,f){var l,d,h,p=0,g="0",m=o&&[],b=[],y=s,w=o||r&&i.find.TAG("*",f),_=E+=null==y?1:Math.random()||.1,I=w.length;for(f&&(s=u!==v&&u);g!==I&&null!=(l=w[g]);g++){if(r&&l){for(d=0;h=t[d++];)if(h(l,u,a)){c.push(l);break}f&&(E=_)}e&&((l=!h&&l)&&p--,o&&m.push(l))}if(p+=g,e&&g!==p){for(d=0;h=n[d++];)h(m,b,u,a);if(o){if(p>0)for(;g--;)m[g]||b[g]||(b[g]=N.call(c));b=yt(b)}D.apply(c,b),f&&!o&&b.length>0&&p+n.length>1&&ot.uniqueSort(c)}return f&&(E=_,s=y),m};return e?at(o):o}(o,r)),a.selector=t}return a},c=ot.select=function(t,n,r,o){var c,s,f,l,d,v="function"==typeof t&&t,h=!o&&u(t=v.selector||t);if(r=r||[],1===h.length){if((s=h[0]=h[0].slice(0)).length>2&&"ID"===(f=s[0]).type&&e.getById&&9===n.nodeType&&p&&i.relative[s[1].type]){if(!(n=(i.find.ID(f.matches[0].replace(et,it),n)||[])[0]))return r;v&&(n=n.parentNode),t=t.slice(s.shift().value.length)}for(c=K.needsContext.test(t)?0:s.length;c--&&(f=s[c],!i.relative[l=f.type]);)if((d=i.find[l])&&(o=d(f.matches[0].replace(et,it),tt.test(s[0].type)&&ht(n.parentNode)||n))){if(s.splice(c,1),!(t=o.length&&gt(s)))return D.apply(r,o),r;break}}return(v||a(t,h))(o,n,!p,r,tt.test(t)&&ht(n.parentNode)||n),r},e.sortStable=w.split("").sort(T).join("")===w,e.detectDuplicates=!!l,d(),e.sortDetached=ct((function(t){return 1&t.compareDocumentPosition(v.createElement("div"))})),ct((function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")}))||st("type|href|height|width",(function(t,n,e){if(!e)return t.getAttribute(n,"type"===n.toLowerCase()?1:2)})),e.attributes&&ct((function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")}))||st("value",(function(t,n,e){if(!e&&"input"===t.nodeName.toLowerCase())return t.defaultValue})),ct((function(t){return null==t.getAttribute("disabled")}))||st(P,(function(t,n,e){var i;if(!e)return!0===t[n]?n.toLowerCase():(i=t.getAttributeNode(n))&&i.specified?i.value:null})),ot}(i);p.find=_,p.expr=_.selectors,p.expr[":"]=p.expr.pseudos,p.unique=_.uniqueSort,p.text=_.getText,p.isXMLDoc=_.isXML,p.contains=_.contains;var E=p.expr.match.needsContext,I=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,A=/^.[^:#\[\.,]*$/;function S(t,n,e){if(p.isFunction(n))return p.grep(t,(function(t,i){return!!n.call(t,i,t)!==e}));if(n.nodeType)return p.grep(t,(function(t){return t===n!==e}));if("string"==typeof n){if(A.test(n))return p.filter(n,t,e);n=p.filter(n,t)}return p.grep(t,(function(t){return p.inArray(t,n)>=0!==e}))}p.filter=function(t,n,e){var i=n[0];return e&&(t=":not("+t+")"),1===n.length&&1===i.nodeType?p.find.matchesSelector(i,t)?[i]:[]:p.find.matches(t,p.grep(n,(function(t){return 1===t.nodeType})))},p.fn.extend({find:function(t){var n,e=[],i=this,r=i.length;if("string"!=typeof t)return this.pushStack(p(t).filter((function(){for(n=0;n<r;n++)if(p.contains(i[n],this))return!0})));for(n=0;n<r;n++)p.find(t,i[n],e);return(e=this.pushStack(r>1?p.unique(e):e)).selector=this.selector?this.selector+" "+t:t,e},filter:function(t){return this.pushStack(S(this,t||[],!1))},not:function(t){return this.pushStack(S(this,t||[],!0))},is:function(t){return!!S(this,"string"==typeof t&&E.test(t)?p(t):t||[],!1).length}});var k,T=i.document,O=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(p.fn.init=function(t,n){var e,i;if(!t)return this;if("string"==typeof t){if(!(e="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:O.exec(t))||!e[1]&&n)return!n||n.jquery?(n||k).find(t):this.constructor(n).find(t);if(e[1]){if(n=n instanceof p?n[0]:n,p.merge(this,p.parseHTML(e[1],n&&n.nodeType?n.ownerDocument||n:T,!0)),I.test(e[1])&&p.isPlainObject(n))for(e in n)p.isFunction(this[e])?this[e](n[e]):this.attr(e,n[e]);return this}if((i=T.getElementById(e[2]))&&i.parentNode){if(i.id!==e[2])return k.find(t);this.length=1,this[0]=i}return this.context=T,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):p.isFunction(t)?void 0!==k.ready?k.ready(t):t(p):(void 0!==t.selector&&(this.selector=t.selector,this.context=t.context),p.makeArray(t,this))}).prototype=p.fn,k=p(T);var R=/^(?:parents|prev(?:Until|All))/,x={children:!0,contents:!0,next:!0,prev:!0};function N(t,n){do{t=t[n]}while(t&&1!==t.nodeType);return t}p.extend({dir:function(t,n,e){for(var i=[],r=t[n];r&&9!==r.nodeType&&(void 0===e||1!==r.nodeType||!p(r).is(e));)1===r.nodeType&&i.push(r),r=r[n];return i},sibling:function(t,n){for(var e=[];t;t=t.nextSibling)1===t.nodeType&&t!==n&&e.push(t);return e}}),p.fn.extend({has:function(t){var n,e=p(t,this),i=e.length;return this.filter((function(){for(n=0;n<i;n++)if(p.contains(this,e[n]))return!0}))},closest:function(t,n){for(var e,i=0,r=this.length,o=[],u=E.test(t)||"string"!=typeof t?p(t,n||this.context):0;i<r;i++)for(e=this[i];e&&e!==n;e=e.parentNode)if(e.nodeType<11&&(u?u.index(e)>-1:1===e.nodeType&&p.find.matchesSelector(e,t))){o.push(e);break}return this.pushStack(o.length>1?p.unique(o):o)},index:function(t){return t?"string"==typeof t?p.inArray(this[0],p(t)):p.inArray(t.jquery?t[0]:t,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,n){return this.pushStack(p.unique(p.merge(this.get(),p(t,n))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),p.each({parent:function(t){var n=t.parentNode;return n&&11!==n.nodeType?n:null},parents:function(t){return p.dir(t,"parentNode")},parentsUntil:function(t,n,e){return p.dir(t,"parentNode",e)},next:function(t){return N(t,"nextSibling")},prev:function(t){return N(t,"previousSibling")},nextAll:function(t){return p.dir(t,"nextSibling")},prevAll:function(t){return p.dir(t,"previousSibling")},nextUntil:function(t,n,e){return p.dir(t,"nextSibling",e)},prevUntil:function(t,n,e){return p.dir(t,"previousSibling",e)},siblings:function(t){return p.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return p.sibling(t.firstChild)},contents:function(t){return p.nodeName(t,"iframe")?t.contentDocument||t.contentWindow.document:p.merge([],t.childNodes)}},(function(t,n){p.fn[t]=function(e,i){var r=p.map(this,n,e);return"Until"!==t.slice(-5)&&(i=e),i&&"string"==typeof i&&(r=p.filter(i,r)),this.length>1&&(x[t]||(r=p.unique(r)),R.test(t)&&(r=r.reverse())),this.pushStack(r)}}));var C,D=/\S+/g,j={};function M(){T.addEventListener?(T.removeEventListener("DOMContentLoaded",P,!1),i.removeEventListener("load",P,!1)):(T.detachEvent("onreadystatechange",P),i.detachEvent("onload",P))}function P(){(T.addEventListener||"load"===event.type||"complete"===T.readyState)&&(M(),p.ready())}p.Callbacks=function(t){t="string"==typeof t?j[t]||function(t){var n=j[t]={};return p.each(t.match(D)||[],(function(t,e){n[e]=!0})),n}(t):p.extend({},t);var n,e,i,r,o,u,a=[],c=!t.once&&[],s=function(l){for(e=t.memory&&l,i=!0,o=u||0,u=0,r=a.length,n=!0;a&&o<r;o++)if(!1===a[o].apply(l[0],l[1])&&t.stopOnFalse){e=!1;break}n=!1,a&&(c?c.length&&s(c.shift()):e?a=[]:f.disable())},f={add:function(){if(a){var i=a.length;!function n(e){p.each(e,(function(e,i){var r=p.type(i);"function"===r?t.unique&&f.has(i)||a.push(i):i&&i.length&&"string"!==r&&n(i)}))}(arguments),n?r=a.length:e&&(u=i,s(e))}return this},remove:function(){return a&&p.each(arguments,(function(t,e){for(var i;(i=p.inArray(e,a,i))>-1;)a.splice(i,1),n&&(i<=r&&r--,i<=o&&o--)})),this},has:function(t){return t?p.inArray(t,a)>-1:!(!a||!a.length)},empty:function(){return a=[],r=0,this},disable:function(){return a=c=e=void 0,this},disabled:function(){return!a},lock:function(){return c=void 0,e||f.disable(),this},locked:function(){return!c},fireWith:function(t,e){return!a||i&&!c||(e=[t,(e=e||[]).slice?e.slice():e],n?c.push(e):s(e)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!i}};return f},p.extend({Deferred:function(t){var n=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],e="pending",i={state:function(){return e},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var t=arguments;return p.Deferred((function(e){p.each(n,(function(n,o){var u=p.isFunction(t[n])&&t[n];r[o[1]]((function(){var t=u&&u.apply(this,arguments);t&&p.isFunction(t.promise)?t.promise().done(e.resolve).fail(e.reject).progress(e.notify):e[o[0]+"With"](this===i?e.promise():this,u?[t]:arguments)}))})),t=null})).promise()},promise:function(t){return null!=t?p.extend(t,i):i}},r={};return i.pipe=i.then,p.each(n,(function(t,o){var u=o[2],a=o[3];i[o[1]]=u.add,a&&u.add((function(){e=a}),n[1^t][2].disable,n[2][2].lock),r[o[0]]=function(){return r[o[0]+"With"](this===r?i:this,arguments),this},r[o[0]+"With"]=u.fireWith})),i.promise(r),t&&t.call(r,r),r},when:function(t){var n,e,i,r=0,o=u.call(arguments),a=o.length,c=1!==a||t&&p.isFunction(t.promise)?a:0,s=1===c?t:p.Deferred(),f=function(t,e,i){return function(r){e[t]=this,i[t]=arguments.length>1?u.call(arguments):r,i===n?s.notifyWith(e,i):--c||s.resolveWith(e,i)}};if(a>1)for(n=new Array(a),e=new Array(a),i=new Array(a);r<a;r++)o[r]&&p.isFunction(o[r].promise)?o[r].promise().done(f(r,i,o)).fail(s.reject).progress(f(r,e,n)):--c;return c||s.resolveWith(i,o),s.promise()}}),p.fn.ready=function(t){return p.ready.promise().done(t),this},p.extend({isReady:!1,readyWait:1,holdReady:function(t){t?p.readyWait++:p.ready(!0)},ready:function(t){if(!(!0===t?--p.readyWait:p.isReady)){if(!T.body)return setTimeout(p.ready);p.isReady=!0,!0!==t&&--p.readyWait>0||(C.resolveWith(T,[p]),p.fn.triggerHandler&&(p(T).triggerHandler("ready"),p(T).off("ready")))}}}),p.ready.promise=function(t){if(!C)if(C=p.Deferred(),"complete"===T.readyState)setTimeout(p.ready);else if(T.addEventListener)T.addEventListener("DOMContentLoaded",P,!1),i.addEventListener("load",P,!1);else{T.attachEvent("onreadystatechange",P),i.attachEvent("onload",P);var n=!1;try{n=null==i.frameElement&&T.documentElement}catch(t){}n&&n.doScroll&&function t(){if(!p.isReady){try{n.doScroll("left")}catch(n){return setTimeout(t,50)}M(),p.ready()}}()}return C.promise(t)};var L,U="undefined";for(L in p(v))break;v.ownLast="0"!==L,v.inlineBlockNeedsLayout=!1,p((function(){var t,n,e,i;(e=T.getElementsByTagName("body")[0])&&e.style&&(n=T.createElement("div"),(i=T.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",e.appendChild(i).appendChild(n),typeof n.style.zoom!==U&&(n.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",v.inlineBlockNeedsLayout=t=3===n.offsetWidth,t&&(e.style.zoom=1)),e.removeChild(i))})),function(){var t=T.createElement("div");if(null==v.deleteExpando){v.deleteExpando=!0;try{delete t.test}catch(t){v.deleteExpando=!1}}t=null}(),p.acceptData=function(t){var n=p.noData[(t.nodeName+" ").toLowerCase()],e=+t.nodeType||1;return(1===e||9===e)&&(!n||!0!==n&&t.getAttribute("classid")===n)};var V=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,B=/([A-Z])/g;function z(t,n,e){if(void 0===e&&1===t.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if("string"==typeof(e=t.getAttribute(i))){try{e="true"===e||"false"!==e&&("null"===e?null:+e+""===e?+e:V.test(e)?p.parseJSON(e):e)}catch(t){}p.data(t,n,e)}else e=void 0}return e}function F(t){var n;for(n in t)if(("data"!==n||!p.isEmptyObject(t[n]))&&"toJSON"!==n)return!1;return!0}function q(t,n,e,i){if(p.acceptData(t)){var r,u,a=p.expando,c=t.nodeType,s=c?p.cache:t,f=c?t[a]:t[a]&&a;if(f&&s[f]&&(i||s[f].data)||void 0!==e||"string"!=typeof n)return f||(f=c?t[a]=o.pop()||p.guid++:a),s[f]||(s[f]=c?{}:{toJSON:p.noop}),"object"!=typeof n&&"function"!=typeof n||(i?s[f]=p.extend(s[f],n):s[f].data=p.extend(s[f].data,n)),u=s[f],i||(u.data||(u.data={}),u=u.data),void 0!==e&&(u[p.camelCase(n)]=e),"string"==typeof n?null==(r=u[n])&&(r=u[p.camelCase(n)]):r=u,r}}function G(t,n,e){if(p.acceptData(t)){var i,r,o=t.nodeType,u=o?p.cache:t,a=o?t[p.expando]:p.expando;if(u[a]){if(n&&(i=e?u[a]:u[a].data)){r=(n=p.isArray(n)?n.concat(p.map(n,p.camelCase)):n in i||(n=p.camelCase(n))in i?[n]:n.split(" ")).length;for(;r--;)delete i[n[r]];if(e?!F(i):!p.isEmptyObject(i))return}(e||(delete u[a].data,F(u[a])))&&(o?p.cleanData([t],!0):v.deleteExpando||u!=u.window?delete u[a]:u[a]=null)}}}p.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(t){return!!(t=t.nodeType?p.cache[t[p.expando]]:t[p.expando])&&!F(t)},data:function(t,n,e){return q(t,n,e)},removeData:function(t,n){return G(t,n)},_data:function(t,n,e){return q(t,n,e,!0)},_removeData:function(t,n){return G(t,n,!0)}}),p.fn.extend({data:function(t,n){var e,i,r,o=this[0],u=o&&o.attributes;if(void 0===t){if(this.length&&(r=p.data(o),1===o.nodeType&&!p._data(o,"parsedAttrs"))){for(e=u.length;e--;)u[e]&&0===(i=u[e].name).indexOf("data-")&&z(o,i=p.camelCase(i.slice(5)),r[i]);p._data(o,"parsedAttrs",!0)}return r}return"object"==typeof t?this.each((function(){p.data(this,t)})):arguments.length>1?this.each((function(){p.data(this,t,n)})):o?z(o,t,p.data(o,t)):void 0},removeData:function(t){return this.each((function(){p.removeData(this,t)}))}}),p.extend({queue:function(t,n,e){var i;if(t)return n=(n||"fx")+"queue",i=p._data(t,n),e&&(!i||p.isArray(e)?i=p._data(t,n,p.makeArray(e)):i.push(e)),i||[]},dequeue:function(t,n){n=n||"fx";var e=p.queue(t,n),i=e.length,r=e.shift(),o=p._queueHooks(t,n);"inprogress"===r&&(r=e.shift(),i--),r&&("fx"===n&&e.unshift("inprogress"),delete o.stop,r.call(t,(function(){p.dequeue(t,n)}),o)),!i&&o&&o.empty.fire()},_queueHooks:function(t,n){var e=n+"queueHooks";return p._data(t,e)||p._data(t,e,{empty:p.Callbacks("once memory").add((function(){p._removeData(t,n+"queue"),p._removeData(t,e)}))})}}),p.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?p.queue(this[0],t):void 0===n?this:this.each((function(){var e=p.queue(this,t,n);p._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&p.dequeue(this,t)}))},dequeue:function(t){return this.each((function(){p.dequeue(this,t)}))},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,n){var e,i=1,r=p.Deferred(),o=this,u=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof t&&(n=t,t=void 0),t=t||"fx";u--;)(e=p._data(o[u],t+"queueHooks"))&&e.empty&&(i++,e.empty.add(a));return a(),r.promise(n)}});var H=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,$=["Top","Right","Bottom","Left"],Y=function(t,n){return t=n||t,"none"===p.css(t,"display")||!p.contains(t.ownerDocument,t)},W=p.access=function(t,n,e,i,r,o,u){var a=0,c=t.length,s=null==e;if("object"===p.type(e))for(a in r=!0,e)p.access(t,n,a,e[a],!0,o,u);else if(void 0!==i&&(r=!0,p.isFunction(i)||(u=!0),s&&(u?(n.call(t,i),n=null):(s=n,n=function(t,n,e){return s.call(p(t),e)})),n))for(;a<c;a++)n(t[a],e,u?i:i.call(t[a],a,n(t[a],e)));return r?t:s?n.call(t):c?n(t[0],e):o},K=/^(?:checkbox|radio)$/i;!function(){var t=T.createElement("input"),n=T.createElement("div"),e=T.createDocumentFragment();if(n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",v.leadingWhitespace=3===n.firstChild.nodeType,v.tbody=!n.getElementsByTagName("tbody").length,v.htmlSerialize=!!n.getElementsByTagName("link").length,v.html5Clone="<:nav></:nav>"!==T.createElement("nav").cloneNode(!0).outerHTML,t.type="checkbox",t.checked=!0,e.appendChild(t),v.appendChecked=t.checked,n.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!n.cloneNode(!0).lastChild.defaultValue,e.appendChild(n),n.innerHTML="<input type='radio' checked='checked' name='t'/>",v.checkClone=n.cloneNode(!0).cloneNode(!0).lastChild.checked,v.noCloneEvent=!0,n.attachEvent&&(n.attachEvent("onclick",(function(){v.noCloneEvent=!1})),n.cloneNode(!0).click()),null==v.deleteExpando){v.deleteExpando=!0;try{delete n.test}catch(t){v.deleteExpando=!1}}}(),function(){var t,n,e=T.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(v[t+"Bubbles"]=n in i)||(e.setAttribute(n,"t"),v[t+"Bubbles"]=!1===e.attributes[n].expando);e=null}();var X=/^(?:input|select|textarea)$/i,J=/^key/,Q=/^(?:mouse|pointer|contextmenu)|click/,Z=/^(?:focusinfocus|focusoutblur)$/,tt=/^([^.]*)(?:\.(.+)|)$/;function nt(){return!0}function et(){return!1}function it(){try{return T.activeElement}catch(t){}}function rt(t){var n=ot.split("|"),e=t.createDocumentFragment();if(e.createElement)for(;n.length;)e.createElement(n.pop());return e}p.event={global:{},add:function(t,n,e,i,r){var o,u,a,c,s,f,l,d,v,h,g,m=p._data(t);if(m){for(e.handler&&(e=(c=e).handler,r=c.selector),e.guid||(e.guid=p.guid++),(u=m.events)||(u=m.events={}),(f=m.handle)||(f=m.handle=function(t){return typeof p===U||t&&p.event.triggered===t.type?void 0:p.event.dispatch.apply(f.elem,arguments)},f.elem=t),a=(n=(n||"").match(D)||[""]).length;a--;)v=g=(o=tt.exec(n[a])||[])[1],h=(o[2]||"").split(".").sort(),v&&(s=p.event.special[v]||{},v=(r?s.delegateType:s.bindType)||v,s=p.event.special[v]||{},l=p.extend({type:v,origType:g,data:i,handler:e,guid:e.guid,selector:r,needsContext:r&&p.expr.match.needsContext.test(r),namespace:h.join(".")},c),(d=u[v])||((d=u[v]=[]).delegateCount=0,s.setup&&!1!==s.setup.call(t,i,h,f)||(t.addEventListener?t.addEventListener(v,f,!1):t.attachEvent&&t.attachEvent("on"+v,f))),s.add&&(s.add.call(t,l),l.handler.guid||(l.handler.guid=e.guid)),r?d.splice(d.delegateCount++,0,l):d.push(l),p.event.global[v]=!0);t=null}},remove:function(t,n,e,i,r){var o,u,a,c,s,f,l,d,v,h,g,m=p.hasData(t)&&p._data(t);if(m&&(f=m.events)){for(s=(n=(n||"").match(D)||[""]).length;s--;)if(v=g=(a=tt.exec(n[s])||[])[1],h=(a[2]||"").split(".").sort(),v){for(l=p.event.special[v]||{},d=f[v=(i?l.delegateType:l.bindType)||v]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),c=o=d.length;o--;)u=d[o],!r&&g!==u.origType||e&&e.guid!==u.guid||a&&!a.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(d.splice(o,1),u.selector&&d.delegateCount--,l.remove&&l.remove.call(t,u));c&&!d.length&&(l.teardown&&!1!==l.teardown.call(t,h,m.handle)||p.removeEvent(t,v,m.handle),delete f[v])}else for(v in f)p.event.remove(t,v+n[s],e,i,!0);p.isEmptyObject(f)&&(delete m.handle,p._removeData(t,"events"))}},trigger:function(t,n,e,r){var o,u,a,c,s,f,l,v=[e||T],h=d.call(t,"type")?t.type:t,g=d.call(t,"namespace")?t.namespace.split("."):[];if(a=f=e=e||T,3!==e.nodeType&&8!==e.nodeType&&!Z.test(h+p.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),u=h.indexOf(":")<0&&"on"+h,(t=t[p.expando]?t:new p.Event(h,"object"==typeof t&&t)).isTrigger=r?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=e),n=null==n?[t]:p.makeArray(n,[t]),s=p.event.special[h]||{},r||!s.trigger||!1!==s.trigger.apply(e,n))){if(!r&&!s.noBubble&&!p.isWindow(e)){for(c=s.delegateType||h,Z.test(c+h)||(a=a.parentNode);a;a=a.parentNode)v.push(a),f=a;f===(e.ownerDocument||T)&&v.push(f.defaultView||f.parentWindow||i)}for(l=0;(a=v[l++])&&!t.isPropagationStopped();)t.type=l>1?c:s.bindType||h,(o=(p._data(a,"events")||{})[t.type]&&p._data(a,"handle"))&&o.apply(a,n),(o=u&&a[u])&&o.apply&&p.acceptData(a)&&(t.result=o.apply(a,n),!1===t.result&&t.preventDefault());if(t.type=h,!r&&!t.isDefaultPrevented()&&(!s._default||!1===s._default.apply(v.pop(),n))&&p.acceptData(e)&&u&&e[h]&&!p.isWindow(e)){(f=e[u])&&(e[u]=null),p.event.triggered=h;try{e[h]()}catch(t){}p.event.triggered=void 0,f&&(e[u]=f)}return t.result}},dispatch:function(t){t=p.event.fix(t);var n,e,i,r,o,a,c=u.call(arguments),s=(p._data(this,"events")||{})[t.type]||[],f=p.event.special[t.type]||{};if(c[0]=t,t.delegateTarget=this,!f.preDispatch||!1!==f.preDispatch.call(this,t)){for(a=p.event.handlers.call(this,t,s),n=0;(r=a[n++])&&!t.isPropagationStopped();)for(t.currentTarget=r.elem,o=0;(i=r.handlers[o++])&&!t.isImmediatePropagationStopped();)t.namespace_re&&!t.namespace_re.test(i.namespace)||(t.handleObj=i,t.data=i.data,void 0!==(e=((p.event.special[i.origType]||{}).handle||i.handler).apply(r.elem,c))&&!1===(t.result=e)&&(t.preventDefault(),t.stopPropagation()));return f.postDispatch&&f.postDispatch.call(this,t),t.result}},handlers:function(t,n){var e,i,r,o,u=[],a=n.delegateCount,c=t.target;if(a&&c.nodeType&&(!t.button||"click"!==t.type))for(;c!=this;c=c.parentNode||this)if(1===c.nodeType&&(!0!==c.disabled||"click"!==t.type)){for(r=[],o=0;o<a;o++)void 0===r[e=(i=n[o]).selector+" "]&&(r[e]=i.needsContext?p(e,this).index(c)>=0:p.find(e,this,null,[c]).length),r[e]&&r.push(i);r.length&&u.push({elem:c,handlers:r})}return a<n.length&&u.push({elem:this,handlers:n.slice(a)}),u},fix:function(t){if(t[p.expando])return t;var n,e,i,r=t.type,o=t,u=this.fixHooks[r];for(u||(this.fixHooks[r]=u=Q.test(r)?this.mouseHooks:J.test(r)?this.keyHooks:{}),i=u.props?this.props.concat(u.props):this.props,t=new p.Event(o),n=i.length;n--;)t[e=i[n]]=o[e];return t.target||(t.target=o.srcElement||T),3===t.target.nodeType&&(t.target=t.target.parentNode),t.metaKey=!!t.metaKey,u.filter?u.filter(t,o):t},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,n){return null==t.which&&(t.which=null!=n.charCode?n.charCode:n.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,n){var e,i,r,o=n.button,u=n.fromElement;return null==t.pageX&&null!=n.clientX&&(r=(i=t.target.ownerDocument||T).documentElement,e=i.body,t.pageX=n.clientX+(r&&r.scrollLeft||e&&e.scrollLeft||0)-(r&&r.clientLeft||e&&e.clientLeft||0),t.pageY=n.clientY+(r&&r.scrollTop||e&&e.scrollTop||0)-(r&&r.clientTop||e&&e.clientTop||0)),!t.relatedTarget&&u&&(t.relatedTarget=u===t.target?n.toElement:u),t.which||void 0===o||(t.which=1&o?1:2&o?3:4&o?2:0),t}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==it()&&this.focus)try{return this.focus(),!1}catch(t){}},delegateType:"focusin"},blur:{trigger:function(){if(this===it()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(p.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(t){return p.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}},simulate:function(t,n,e,i){var r=p.extend(new p.Event,e,{type:t,isSimulated:!0,originalEvent:{}});i?p.event.trigger(r,null,n):p.event.dispatch.call(n,r),r.isDefaultPrevented()&&e.preventDefault()}},p.removeEvent=T.removeEventListener?function(t,n,e){t.removeEventListener&&t.removeEventListener(n,e,!1)}:function(t,n,e){var i="on"+n;t.detachEvent&&(typeof t[i]===U&&(t[i]=null),t.detachEvent(i,e))},p.Event=function(t,n){if(!(this instanceof p.Event))return new p.Event(t,n);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?nt:et):this.type=t,n&&p.extend(this,n),this.timeStamp=t&&t.timeStamp||p.now(),this[p.expando]=!0},p.Event.prototype={isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=nt,t&&(t.preventDefault?t.preventDefault():t.returnValue=!1)},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=nt,t&&(t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0)},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=nt,t&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),this.stopPropagation()}},p.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(t,n){p.event.special[t]={delegateType:n,bindType:n,handle:function(t){var e,i=t.relatedTarget,r=t.handleObj;return i&&(i===this||p.contains(this,i))||(t.type=r.origType,e=r.handler.apply(this,arguments),t.type=n),e}}})),v.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",(function(t){var n=t.target,e=p.nodeName(n,"input")||p.nodeName(n,"button")?n.form:void 0;e&&!p._data(e,"submitBubbles")&&(p.event.add(e,"submit._submit",(function(t){t._submit_bubble=!0})),p._data(e,"submitBubbles",!0))}))},postDispatch:function(t){t._submit_bubble&&(delete t._submit_bubble,this.parentNode&&!t.isTrigger&&p.event.simulate("submit",this.parentNode,t,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),v.changeBubbles||(p.event.special.change={setup:function(){if(X.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(p.event.add(this,"propertychange._change",(function(t){"checked"===t.originalEvent.propertyName&&(this._just_changed=!0)})),p.event.add(this,"click._change",(function(t){this._just_changed&&!t.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,t,!0)}))),!1;p.event.add(this,"beforeactivate._change",(function(t){var n=t.target;X.test(n.nodeName)&&!p._data(n,"changeBubbles")&&(p.event.add(n,"change._change",(function(t){!this.parentNode||t.isSimulated||t.isTrigger||p.event.simulate("change",this.parentNode,t,!0)})),p._data(n,"changeBubbles",!0))}))},handle:function(t){var n=t.target;if(this!==n||t.isSimulated||t.isTrigger||"radio"!==n.type&&"checkbox"!==n.type)return t.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!X.test(this.nodeName)}}),v.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},(function(t,n){var e=function(t){p.event.simulate(n,t.target,p.event.fix(t),!0)};p.event.special[n]={setup:function(){var i=this.ownerDocument||this,r=p._data(i,n);r||i.addEventListener(t,e,!0),p._data(i,n,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=p._data(i,n)-1;r?p._data(i,n,r):(i.removeEventListener(t,e,!0),p._removeData(i,n))}}})),p.fn.extend({on:function(t,n,e,i,r){var o,u;if("object"==typeof t){for(o in"string"!=typeof n&&(e=e||n,n=void 0),t)this.on(o,n,e,t[o],r);return this}if(null==e&&null==i?(i=n,e=n=void 0):null==i&&("string"==typeof n?(i=e,e=void 0):(i=e,e=n,n=void 0)),!1===i)i=et;else if(!i)return this;return 1===r&&(u=i,i=function(t){return p().off(t),u.apply(this,arguments)},i.guid=u.guid||(u.guid=p.guid++)),this.each((function(){p.event.add(this,t,i,e,n)}))},one:function(t,n,e,i){return this.on(t,n,e,i,1)},off:function(t,n,e){var i,r;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,p(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof t){for(r in t)this.off(r,n,t[r]);return this}return!1!==n&&"function"!=typeof n||(e=n,n=void 0),!1===e&&(e=et),this.each((function(){p.event.remove(this,t,e,n)}))},trigger:function(t,n){return this.each((function(){p.event.trigger(t,n,this)}))},triggerHandler:function(t,n){var e=this[0];if(e)return p.event.trigger(t,n,e,!0)}});var ot="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ut=/ jQuery\d+="(?:null|\d+)"/g,at=new RegExp("<(?:"+ot+")[\\s/>]","i"),ct=/^\s+/,st=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ft=/<([\w:]+)/,lt=/<tbody/i,dt=/<|&#?\w+;/,vt=/<(?:script|style|link)/i,ht=/checked\s*(?:[^=]|=\s*.checked.)/i,pt=/^$|\/(?:java|ecma)script/i,gt=/^true\/(.*)/,mt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,bt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:v.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},yt=rt(T).appendChild(T.createElement("div"));function wt(t,n){var e,i,r=0,o=typeof t.getElementsByTagName!==U?t.getElementsByTagName(n||"*"):typeof t.querySelectorAll!==U?t.querySelectorAll(n||"*"):void 0;if(!o)for(o=[],e=t.childNodes||t;null!=(i=e[r]);r++)!n||p.nodeName(i,n)?o.push(i):p.merge(o,wt(i,n));return void 0===n||n&&p.nodeName(t,n)?p.merge([t],o):o}function _t(t){K.test(t.type)&&(t.defaultChecked=t.checked)}function Et(t,n){return p.nodeName(t,"table")&&p.nodeName(11!==n.nodeType?n:n.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function It(t){return t.type=(null!==p.find.attr(t,"type"))+"/"+t.type,t}function At(t){var n=gt.exec(t.type);return n?t.type=n[1]:t.removeAttribute("type"),t}function St(t,n){for(var e,i=0;null!=(e=t[i]);i++)p._data(e,"globalEval",!n||p._data(n[i],"globalEval"))}function kt(t,n){if(1===n.nodeType&&p.hasData(t)){var e,i,r,o=p._data(t),u=p._data(n,o),a=o.events;if(a)for(e in delete u.handle,u.events={},a)for(i=0,r=a[e].length;i<r;i++)p.event.add(n,e,a[e][i]);u.data&&(u.data=p.extend({},u.data))}}function Tt(t,n){var e,i,r;if(1===n.nodeType){if(e=n.nodeName.toLowerCase(),!v.noCloneEvent&&n[p.expando]){for(i in(r=p._data(n)).events)p.removeEvent(n,i,r.handle);n.removeAttribute(p.expando)}"script"===e&&n.text!==t.text?(It(n).text=t.text,At(n)):"object"===e?(n.parentNode&&(n.outerHTML=t.outerHTML),v.html5Clone&&t.innerHTML&&!p.trim(n.innerHTML)&&(n.innerHTML=t.innerHTML)):"input"===e&&K.test(t.type)?(n.defaultChecked=n.checked=t.checked,n.value!==t.value&&(n.value=t.value)):"option"===e?n.defaultSelected=n.selected=t.defaultSelected:"input"!==e&&"textarea"!==e||(n.defaultValue=t.defaultValue)}}bt.optgroup=bt.option,bt.tbody=bt.tfoot=bt.colgroup=bt.caption=bt.thead,bt.th=bt.td,p.extend({clone:function(t,n,e){var i,r,o,u,a,c=p.contains(t.ownerDocument,t);if(v.html5Clone||p.isXMLDoc(t)||!at.test("<"+t.nodeName+">")?o=t.cloneNode(!0):(yt.innerHTML=t.outerHTML,yt.removeChild(o=yt.firstChild)),!(v.noCloneEvent&&v.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||p.isXMLDoc(t)))for(i=wt(o),a=wt(t),u=0;null!=(r=a[u]);++u)i[u]&&Tt(r,i[u]);if(n)if(e)for(a=a||wt(t),i=i||wt(o),u=0;null!=(r=a[u]);u++)kt(r,i[u]);else kt(t,o);return(i=wt(o,"script")).length>0&&St(i,!c&&wt(t,"script")),i=a=r=null,o},buildFragment:function(t,n,e,i){for(var r,o,u,a,c,s,f,l=t.length,d=rt(n),h=[],g=0;g<l;g++)if((o=t[g])||0===o)if("object"===p.type(o))p.merge(h,o.nodeType?[o]:o);else if(dt.test(o)){for(a=a||d.appendChild(n.createElement("div")),c=(ft.exec(o)||["",""])[1].toLowerCase(),f=bt[c]||bt._default,a.innerHTML=f[1]+o.replace(st,"<$1></$2>")+f[2],r=f[0];r--;)a=a.lastChild;if(!v.leadingWhitespace&&ct.test(o)&&h.push(n.createTextNode(ct.exec(o)[0])),!v.tbody)for(r=(o="table"!==c||lt.test(o)?"<table>"!==f[1]||lt.test(o)?0:a:a.firstChild)&&o.childNodes.length;r--;)p.nodeName(s=o.childNodes[r],"tbody")&&!s.childNodes.length&&o.removeChild(s);for(p.merge(h,a.childNodes),a.textContent="";a.firstChild;)a.removeChild(a.firstChild);a=d.lastChild}else h.push(n.createTextNode(o));for(a&&d.removeChild(a),v.appendChecked||p.grep(wt(h,"input"),_t),g=0;o=h[g++];)if((!i||-1===p.inArray(o,i))&&(u=p.contains(o.ownerDocument,o),a=wt(d.appendChild(o),"script"),u&&St(a),e))for(r=0;o=a[r++];)pt.test(o.type||"")&&e.push(o);return a=null,d},cleanData:function(t,n){for(var e,i,r,u,a=0,c=p.expando,s=p.cache,f=v.deleteExpando,l=p.event.special;null!=(e=t[a]);a++)if((n||p.acceptData(e))&&(u=(r=e[c])&&s[r])){if(u.events)for(i in u.events)l[i]?p.event.remove(e,i):p.removeEvent(e,i,u.handle);s[r]&&(delete s[r],f?delete e[c]:typeof e.removeAttribute!==U?e.removeAttribute(c):e[c]=null,o.push(r))}}}),p.fn.extend({text:function(t){return W(this,(function(t){return void 0===t?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||T).createTextNode(t))}),null,t,arguments.length)},append:function(){return this.domManip(arguments,(function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Et(this,t).appendChild(t)}))},prepend:function(){return this.domManip(arguments,(function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var n=Et(this,t);n.insertBefore(t,n.firstChild)}}))},before:function(){return this.domManip(arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this)}))},after:function(){return this.domManip(arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)}))},remove:function(t,n){for(var e,i=t?p.filter(t,this):this,r=0;null!=(e=i[r]);r++)n||1!==e.nodeType||p.cleanData(wt(e)),e.parentNode&&(n&&p.contains(e.ownerDocument,e)&&St(wt(e,"script")),e.parentNode.removeChild(e));return this},empty:function(){for(var t,n=0;null!=(t=this[n]);n++){for(1===t.nodeType&&p.cleanData(wt(t,!1));t.firstChild;)t.removeChild(t.firstChild);t.options&&p.nodeName(t,"select")&&(t.options.length=0)}return this},clone:function(t,n){return t=null!=t&&t,n=null==n?t:n,this.map((function(){return p.clone(this,t,n)}))},html:function(t){return W(this,(function(t){var n=this[0]||{},e=0,i=this.length;if(void 0===t)return 1===n.nodeType?n.innerHTML.replace(ut,""):void 0;if("string"==typeof t&&!vt.test(t)&&(v.htmlSerialize||!at.test(t))&&(v.leadingWhitespace||!ct.test(t))&&!bt[(ft.exec(t)||["",""])[1].toLowerCase()]){t=t.replace(st,"<$1></$2>");try{for(;e<i;e++)1===(n=this[e]||{}).nodeType&&(p.cleanData(wt(n,!1)),n.innerHTML=t);n=0}catch(t){}}n&&this.empty().append(t)}),null,t,arguments.length)},replaceWith:function(){var t=arguments[0];return this.domManip(arguments,(function(n){t=this.parentNode,p.cleanData(wt(this)),t&&t.replaceChild(n,this)})),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(t){return this.remove(t,!0)},domManip:function(t,n){t=a.apply([],t);var e,i,r,o,u,c,s=0,f=this.length,l=this,d=f-1,h=t[0],g=p.isFunction(h);if(g||f>1&&"string"==typeof h&&!v.checkClone&&ht.test(h))return this.each((function(e){var i=l.eq(e);g&&(t[0]=h.call(this,e,i.html())),i.domManip(t,n)}));if(f&&(e=(c=p.buildFragment(t,this[0].ownerDocument,!1,this)).firstChild,1===c.childNodes.length&&(c=e),e)){for(r=(o=p.map(wt(c,"script"),It)).length;s<f;s++)i=c,s!==d&&(i=p.clone(i,!0,!0),r&&p.merge(o,wt(i,"script"))),n.call(this[s],i,s);if(r)for(u=o[o.length-1].ownerDocument,p.map(o,At),s=0;s<r;s++)i=o[s],pt.test(i.type||"")&&!p._data(i,"globalEval")&&p.contains(u,i)&&(i.src?p._evalUrl&&p._evalUrl(i.src):p.globalEval((i.text||i.textContent||i.innerHTML||"").replace(mt,"")));c=e=null}return this}}),p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(t,n){p.fn[t]=function(t){for(var e,i=0,r=[],o=p(t),u=o.length-1;i<=u;i++)e=i===u?this:this.clone(!0),p(o[i])[n](e),c.apply(r,e.get());return this.pushStack(r)}}));var Ot,Rt={};function xt(t,n){var e,r=p(n.createElement(t)).appendTo(n.body),o=i.getDefaultComputedStyle&&(e=i.getDefaultComputedStyle(r[0]))?e.display:p.css(r[0],"display");return r.detach(),o}function Nt(t){var n=T,e=Rt[t];return e||("none"!==(e=xt(t,n))&&e||((n=((Ot=(Ot||p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(n.documentElement))[0].contentWindow||Ot[0].contentDocument).document).write(),n.close(),e=xt(t,n),Ot.detach()),Rt[t]=e),e}var Ct,Dt,jt=/^margin/,Mt=new RegExp("^("+H+")(?!px)[a-z%]+$","i"),Pt=/^(top|right|bottom|left)$/;i.getComputedStyle?(Ct=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):i.getComputedStyle(t,null)},Dt=function(t,n,e){var i,r,o,u,a=t.style;return u=(e=e||Ct(t))?e.getPropertyValue(n)||e[n]:void 0,e&&(""!==u||p.contains(t.ownerDocument,t)||(u=p.style(t,n)),Mt.test(u)&&jt.test(n)&&(i=a.width,r=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=u,u=e.width,a.width=i,a.minWidth=r,a.maxWidth=o)),void 0===u?u:u+""}):T.documentElement.currentStyle&&(Ct=function(t){return t.currentStyle},Dt=function(t,n,e){var i,r,o,u,a=t.style;return null==(u=(e=e||Ct(t))?e[n]:void 0)&&a&&a[n]&&(u=a[n]),Mt.test(u)&&!Pt.test(n)&&(i=a.left,(o=(r=t.runtimeStyle)&&r.left)&&(r.left=t.currentStyle.left),a.left="fontSize"===n?"1em":u,u=a.pixelLeft+"px",a.left=i,o&&(r.left=o)),void 0===u?u:u+""||"auto"}),function(){var t,n,e,r,o,u,a;function c(){var t,n,e,c;(n=T.getElementsByTagName("body")[0])&&n.style&&(t=T.createElement("div"),(e=T.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(e).appendChild(t),t.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",r=o=!1,a=!0,i.getComputedStyle&&(r="1%"!==(i.getComputedStyle(t,null)||{}).top,o="4px"===(i.getComputedStyle(t,null)||{width:"4px"}).width,(c=t.appendChild(T.createElement("div"))).style.cssText=t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",t.style.width="1px",a=!parseFloat((i.getComputedStyle(c,null)||{}).marginRight),t.removeChild(c)),t.innerHTML="<table><tr><td></td><td>t</td></tr></table>",(c=t.getElementsByTagName("td"))[0].style.cssText="margin:0;border:0;padding:0;display:none",(u=0===c[0].offsetHeight)&&(c[0].style.display="",c[1].style.display="none",u=0===c[0].offsetHeight),n.removeChild(e))}(t=T.createElement("div")).innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",(n=(e=t.getElementsByTagName("a")[0])&&e.style)&&(n.cssText="float:left;opacity:.5",v.opacity="0.5"===n.opacity,v.cssFloat=!!n.cssFloat,t.style.backgroundClip="content-box",t.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===t.style.backgroundClip,v.boxSizing=""===n.boxSizing||""===n.MozBoxSizing||""===n.WebkitBoxSizing,p.extend(v,{reliableHiddenOffsets:function(){return null==u&&c(),u},boxSizingReliable:function(){return null==o&&c(),o},pixelPosition:function(){return null==r&&c(),r},reliableMarginRight:function(){return null==a&&c(),a}}))}(),p.swap=function(t,n,e,i){var r,o,u={};for(o in n)u[o]=t.style[o],t.style[o]=n[o];for(o in r=e.apply(t,i||[]),n)t.style[o]=u[o];return r};var Lt,Ut,Vt,Bt,zt,Ft,qt,Gt=/alpha\([^)]*\)/i,Ht=/opacity\s*=\s*([^)]*)/,$t=/^(none|table(?!-c[ea]).+)/,Yt=new RegExp("^("+H+")(.*)$","i"),Wt=new RegExp("^([+-])=("+H+")","i"),Kt={position:"absolute",visibility:"hidden",display:"block"},Xt={letterSpacing:"0",fontWeight:"400"},Jt=["Webkit","O","Moz","ms"];function Qt(t,n){if(n in t)return n;for(var e=n.charAt(0).toUpperCase()+n.slice(1),i=n,r=Jt.length;r--;)if((n=Jt[r]+e)in t)return n;return i}function Zt(t,n){for(var e,i,r,o=[],u=0,a=t.length;u<a;u++)(i=t[u]).style&&(o[u]=p._data(i,"olddisplay"),e=i.style.display,n?(o[u]||"none"!==e||(i.style.display=""),""===i.style.display&&Y(i)&&(o[u]=p._data(i,"olddisplay",Nt(i.nodeName)))):(r=Y(i),(e&&"none"!==e||!r)&&p._data(i,"olddisplay",r?e:p.css(i,"display"))));for(u=0;u<a;u++)(i=t[u]).style&&(n&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=n?o[u]||"":"none"));return t}function tn(t,n,e){var i=Yt.exec(n);return i?Math.max(0,i[1]-(e||0))+(i[2]||"px"):n}function nn(t,n,e,i,r){for(var o=e===(i?"border":"content")?4:"width"===n?1:0,u=0;o<4;o+=2)"margin"===e&&(u+=p.css(t,e+$[o],!0,r)),i?("content"===e&&(u-=p.css(t,"padding"+$[o],!0,r)),"margin"!==e&&(u-=p.css(t,"border"+$[o]+"Width",!0,r))):(u+=p.css(t,"padding"+$[o],!0,r),"padding"!==e&&(u+=p.css(t,"border"+$[o]+"Width",!0,r)));return u}function en(t,n,e){var i=!0,r="width"===n?t.offsetWidth:t.offsetHeight,o=Ct(t),u=v.boxSizing&&"border-box"===p.css(t,"boxSizing",!1,o);if(r<=0||null==r){if(((r=Dt(t,n,o))<0||null==r)&&(r=t.style[n]),Mt.test(r))return r;i=u&&(v.boxSizingReliable()||r===t.style[n]),r=parseFloat(r)||0}return r+nn(t,n,e||(u?"border":"content"),i,o)+"px"}p.extend({cssHooks:{opacity:{get:function(t,n){if(n){var e=Dt(t,"opacity");return""===e?"1":e}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:v.cssFloat?"cssFloat":"styleFloat"},style:function(t,n,e,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var r,o,u,a=p.camelCase(n),c=t.style;if(n=p.cssProps[a]||(p.cssProps[a]=Qt(c,a)),u=p.cssHooks[n]||p.cssHooks[a],void 0===e)return u&&"get"in u&&void 0!==(r=u.get(t,!1,i))?r:c[n];if("string"==(o=typeof e)&&(r=Wt.exec(e))&&(e=(r[1]+1)*r[2]+parseFloat(p.css(t,n)),o="number"),null!=e&&e==e&&("number"!==o||p.cssNumber[a]||(e+="px"),v.clearCloneStyle||""!==e||0!==n.indexOf("background")||(c[n]="inherit"),!u||!("set"in u)||void 0!==(e=u.set(t,e,i))))try{c[n]=e}catch(t){}}},css:function(t,n,e,i){var r,o,u,a=p.camelCase(n);return n=p.cssProps[a]||(p.cssProps[a]=Qt(t.style,a)),(u=p.cssHooks[n]||p.cssHooks[a])&&"get"in u&&(o=u.get(t,!0,e)),void 0===o&&(o=Dt(t,n,i)),"normal"===o&&n in Xt&&(o=Xt[n]),""===e||e?(r=parseFloat(o),!0===e||p.isNumeric(r)?r||0:o):o}}),p.each(["height","width"],(function(t,n){p.cssHooks[n]={get:function(t,e,i){if(e)return $t.test(p.css(t,"display"))&&0===t.offsetWidth?p.swap(t,Kt,(function(){return en(t,n,i)})):en(t,n,i)},set:function(t,e,i){var r=i&&Ct(t);return tn(0,e,i?nn(t,n,i,v.boxSizing&&"border-box"===p.css(t,"boxSizing",!1,r),r):0)}}})),v.opacity||(p.cssHooks.opacity={get:function(t,n){return Ht.test((n&&t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":n?"1":""},set:function(t,n){var e=t.style,i=t.currentStyle,r=p.isNumeric(n)?"alpha(opacity="+100*n+")":"",o=i&&i.filter||e.filter||"";e.zoom=1,(n>=1||""===n)&&""===p.trim(o.replace(Gt,""))&&e.removeAttribute&&(e.removeAttribute("filter"),""===n||i&&!i.filter)||(e.filter=Gt.test(o)?o.replace(Gt,r):o+" "+r)}}),p.cssHooks.marginRight=(Lt=v.reliableMarginRight,Ut=function(t,n){if(n)return p.swap(t,{display:"inline-block"},Dt,[t,"marginRight"])},{get:function(){var t=Lt();if(null!=t){if(!t)return(this.get=Ut).apply(this,arguments);delete this.get}}}),p.each({margin:"",padding:"",border:"Width"},(function(t,n){p.cssHooks[t+n]={expand:function(e){for(var i=0,r={},o="string"==typeof e?e.split(" "):[e];i<4;i++)r[t+$[i]+n]=o[i]||o[i-2]||o[0];return r}},jt.test(t)||(p.cssHooks[t+n].set=tn)})),p.fn.extend({css:function(t,n){return W(this,(function(t,n,e){var i,r,o={},u=0;if(p.isArray(n)){for(i=Ct(t),r=n.length;u<r;u++)o[n[u]]=p.css(t,n[u],!1,i);return o}return void 0!==e?p.style(t,n,e):p.css(t,n)}),t,n,arguments.length>1)},show:function(){return Zt(this,!0)},hide:function(){return Zt(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each((function(){Y(this)?p(this).show():p(this).hide()}))}}),p.fn.delay=function(t,n){return t=p.fx&&p.fx.speeds[t]||t,n=n||"fx",this.queue(n,(function(n,e){var i=setTimeout(n,t);e.stop=function(){clearTimeout(i)}}))},(Bt=T.createElement("div")).setAttribute("className","t"),Bt.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",Ft=Bt.getElementsByTagName("a")[0],qt=(zt=T.createElement("select")).appendChild(T.createElement("option")),Vt=Bt.getElementsByTagName("input")[0],Ft.style.cssText="top:1px",v.getSetAttribute="t"!==Bt.className,v.style=/top/.test(Ft.getAttribute("style")),v.hrefNormalized="/a"===Ft.getAttribute("href"),v.checkOn=!!Vt.value,v.optSelected=qt.selected,v.enctype=!!T.createElement("form").enctype,zt.disabled=!0,v.optDisabled=!qt.disabled,(Vt=T.createElement("input")).setAttribute("value",""),v.input=""===Vt.getAttribute("value"),Vt.value="t",Vt.setAttribute("type","radio"),v.radioValue="t"===Vt.value;var rn=/\r/g;p.fn.extend({val:function(t){var n,e,i,r=this[0];return arguments.length?(i=p.isFunction(t),this.each((function(e){var r;1===this.nodeType&&(null==(r=i?t.call(this,e,p(this).val()):t)?r="":"number"==typeof r?r+="":p.isArray(r)&&(r=p.map(r,(function(t){return null==t?"":t+""}))),(n=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()])&&"set"in n&&void 0!==n.set(this,r,"value")||(this.value=r))}))):r?(n=p.valHooks[r.type]||p.valHooks[r.nodeName.toLowerCase()])&&"get"in n&&void 0!==(e=n.get(r,"value"))?e:"string"==typeof(e=r.value)?e.replace(rn,""):null==e?"":e:void 0}}),p.extend({valHooks:{option:{get:function(t){var n=p.find.attr(t,"value");return null!=n?n:p.trim(p.text(t))}},select:{get:function(t){for(var n,e,i=t.options,r=t.selectedIndex,o="select-one"===t.type||r<0,u=o?null:[],a=o?r+1:i.length,c=r<0?a:o?r:0;c<a;c++)if(((e=i[c]).selected||c===r)&&(v.optDisabled?!e.disabled:null===e.getAttribute("disabled"))&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){if(n=p(e).val(),o)return n;u.push(n)}return u},set:function(t,n){for(var e,i,r=t.options,o=p.makeArray(n),u=r.length;u--;)if(i=r[u],p.inArray(p.valHooks.option.get(i),o)>=0)try{i.selected=e=!0}catch(t){i.scrollHeight}else i.selected=!1;return e||(t.selectedIndex=-1),r}}}}),p.each(["radio","checkbox"],(function(){p.valHooks[this]={set:function(t,n){if(p.isArray(n))return t.checked=p.inArray(p(t).val(),n)>=0}},v.checkOn||(p.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}));var on,un,an=p.expr.attrHandle,cn=/^(?:checked|selected)$/i,sn=v.getSetAttribute,fn=v.input;p.fn.extend({attr:function(t,n){return W(this,p.attr,t,n,arguments.length>1)},removeAttr:function(t){return this.each((function(){p.removeAttr(this,t)}))}}),p.extend({attr:function(t,n,e){var i,r,o=t.nodeType;if(t&&3!==o&&8!==o&&2!==o)return typeof t.getAttribute===U?p.prop(t,n,e):(1===o&&p.isXMLDoc(t)||(n=n.toLowerCase(),i=p.attrHooks[n]||(p.expr.match.bool.test(n)?un:on)),void 0===e?i&&"get"in i&&null!==(r=i.get(t,n))?r:null==(r=p.find.attr(t,n))?void 0:r:null!==e?i&&"set"in i&&void 0!==(r=i.set(t,e,n))?r:(t.setAttribute(n,e+""),e):void p.removeAttr(t,n))},removeAttr:function(t,n){var e,i,r=0,o=n&&n.match(D);if(o&&1===t.nodeType)for(;e=o[r++];)i=p.propFix[e]||e,p.expr.match.bool.test(e)?fn&&sn||!cn.test(e)?t[i]=!1:t[p.camelCase("default-"+e)]=t[i]=!1:p.attr(t,e,""),t.removeAttribute(sn?e:i)},attrHooks:{type:{set:function(t,n){if(!v.radioValue&&"radio"===n&&p.nodeName(t,"input")){var e=t.value;return t.setAttribute("type",n),e&&(t.value=e),n}}}}}),un={set:function(t,n,e){return!1===n?p.removeAttr(t,e):fn&&sn||!cn.test(e)?t.setAttribute(!sn&&p.propFix[e]||e,e):t[p.camelCase("default-"+e)]=t[e]=!0,e}},p.each(p.expr.match.bool.source.match(/\w+/g),(function(t,n){var e=an[n]||p.find.attr;an[n]=fn&&sn||!cn.test(n)?function(t,n,i){var r,o;return i||(o=an[n],an[n]=r,r=null!=e(t,n,i)?n.toLowerCase():null,an[n]=o),r}:function(t,n,e){if(!e)return t[p.camelCase("default-"+n)]?n.toLowerCase():null}})),fn&&sn||(p.attrHooks.value={set:function(t,n,e){if(!p.nodeName(t,"input"))return on&&on.set(t,n,e);t.defaultValue=n}}),sn||(on={set:function(t,n,e){var i=t.getAttributeNode(e);if(i||t.setAttributeNode(i=t.ownerDocument.createAttribute(e)),i.value=n+="","value"===e||n===t.getAttribute(e))return n}},an.id=an.name=an.coords=function(t,n,e){var i;if(!e)return(i=t.getAttributeNode(n))&&""!==i.value?i.value:null},p.valHooks.button={get:function(t,n){var e=t.getAttributeNode(n);if(e&&e.specified)return e.value},set:on.set},p.attrHooks.contenteditable={set:function(t,n,e){on.set(t,""!==n&&n,e)}},p.each(["width","height"],(function(t,n){p.attrHooks[n]={set:function(t,e){if(""===e)return t.setAttribute(n,"auto"),e}}}))),v.style||(p.attrHooks.style={get:function(t){return t.style.cssText||void 0},set:function(t,n){return t.style.cssText=n+""}});var ln=/^(?:input|select|textarea|button|object)$/i,dn=/^(?:a|area)$/i;p.fn.extend({prop:function(t,n){return W(this,p.prop,t,n,arguments.length>1)},removeProp:function(t){return t=p.propFix[t]||t,this.each((function(){try{this[t]=void 0,delete this[t]}catch(t){}}))}}),p.extend({propFix:{for:"htmlFor",class:"className"},prop:function(t,n,e){var i,r,o=t.nodeType;if(t&&3!==o&&8!==o&&2!==o)return(1!==o||!p.isXMLDoc(t))&&(n=p.propFix[n]||n,r=p.propHooks[n]),void 0!==e?r&&"set"in r&&void 0!==(i=r.set(t,e,n))?i:t[n]=e:r&&"get"in r&&null!==(i=r.get(t,n))?i:t[n]},propHooks:{tabIndex:{get:function(t){var n=p.find.attr(t,"tabindex");return n?parseInt(n,10):ln.test(t.nodeName)||dn.test(t.nodeName)&&t.href?0:-1}}}}),v.hrefNormalized||p.each(["href","src"],(function(t,n){p.propHooks[n]={get:function(t){return t.getAttribute(n,4)}}})),v.optSelected||(p.propHooks.selected={get:function(t){var n=t.parentNode;return n&&(n.selectedIndex,n.parentNode&&n.parentNode.selectedIndex),null}}),p.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){p.propFix[this.toLowerCase()]=this})),v.enctype||(p.propFix.enctype="encoding");var vn=/[\t\r\n\f]/g;p.fn.extend({addClass:function(t){var n,e,i,r,o,u,a=0,c=this.length,s="string"==typeof t&&t;if(p.isFunction(t))return this.each((function(n){p(this).addClass(t.call(this,n,this.className))}));if(s)for(n=(t||"").match(D)||[];a<c;a++)if(i=1===(e=this[a]).nodeType&&(e.className?(" "+e.className+" ").replace(vn," "):" ")){for(o=0;r=n[o++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");u=p.trim(i),e.className!==u&&(e.className=u)}return this},removeClass:function(t){var n,e,i,r,o,u,a=0,c=this.length,s=0===arguments.length||"string"==typeof t&&t;if(p.isFunction(t))return this.each((function(n){p(this).removeClass(t.call(this,n,this.className))}));if(s)for(n=(t||"").match(D)||[];a<c;a++)if(i=1===(e=this[a]).nodeType&&(e.className?(" "+e.className+" ").replace(vn," "):"")){for(o=0;r=n[o++];)for(;i.indexOf(" "+r+" ")>=0;)i=i.replace(" "+r+" "," ");u=t?p.trim(i):"",e.className!==u&&(e.className=u)}return this},toggleClass:function(t,n){var e=typeof t;return"boolean"==typeof n&&"string"===e?n?this.addClass(t):this.removeClass(t):p.isFunction(t)?this.each((function(e){p(this).toggleClass(t.call(this,e,this.className,n),n)})):this.each((function(){if("string"===e)for(var n,i=0,r=p(this),o=t.match(D)||[];n=o[i++];)r.hasClass(n)?r.removeClass(n):r.addClass(n);else e!==U&&"boolean"!==e||(this.className&&p._data(this,"__className__",this.className),this.className=this.className||!1===t?"":p._data(this,"__className__")||"")}))},hasClass:function(t){for(var n=" "+t+" ",e=0,i=this.length;e<i;e++)if(1===this[e].nodeType&&(" "+this[e].className+" ").replace(vn," ").indexOf(n)>=0)return!0;return!1}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),(function(t,n){p.fn[n]=function(t,e){return arguments.length>0?this.on(n,null,t,e):this.trigger(n)}})),p.fn.extend({hover:function(t,n){return this.mouseenter(t).mouseleave(n||t)},bind:function(t,n,e){return this.on(t,null,n,e)},unbind:function(t,n){return this.off(t,null,n)},delegate:function(t,n,e,i){return this.on(n,t,e,i)},undelegate:function(t,n,e){return 1===arguments.length?this.off(t,"**"):this.off(n,t||"**",e)}}),p.fn.extend({wrapAll:function(t){if(p.isFunction(t))return this.each((function(n){p(this).wrapAll(t.call(this,n))}));if(this[0]){var n=p(t,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&n.insertBefore(this[0]),n.map((function(){for(var t=this;t.firstChild&&1===t.firstChild.nodeType;)t=t.firstChild;return t})).append(this)}return this},wrapInner:function(t){return p.isFunction(t)?this.each((function(n){p(this).wrapInner(t.call(this,n))})):this.each((function(){var n=p(this),e=n.contents();e.length?e.wrapAll(t):n.append(t)}))},wrap:function(t){var n=p.isFunction(t);return this.each((function(e){p(this).wrapAll(n?t.call(this,e):t)}))},unwrap:function(){return this.parent().each((function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)})).end()}}),p.expr.filters.hidden=function(t){return t.offsetWidth<=0&&t.offsetHeight<=0||!v.reliableHiddenOffsets()&&"none"===(t.style&&t.style.display||p.css(t,"display"))},p.expr.filters.visible=function(t){return!p.expr.filters.hidden(t)};var hn=/%20/g,pn=/\[\]$/,gn=/\r?\n/g,mn=/^(?:submit|button|image|reset|file)$/i,bn=/^(?:input|select|textarea|keygen)/i;function yn(t,n,e,i){var r;if(p.isArray(n))p.each(n,(function(n,r){e||pn.test(t)?i(t,r):yn(t+"["+("object"==typeof r?n:"")+"]",r,e,i)}));else if(e||"object"!==p.type(n))i(t,n);else for(r in n)yn(t+"["+r+"]",n[r],e,i)}p.param=function(t,n){var e,i=[],r=function(t,n){n=p.isFunction(n)?n():null==n?"":n,i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(n)};if(void 0===n&&(n=p.ajaxSettings&&p.ajaxSettings.traditional),p.isArray(t)||t.jquery&&!p.isPlainObject(t))p.each(t,(function(){r(this.name,this.value)}));else for(e in t)yn(e,t[e],n,r);return i.join("&").replace(hn,"+")},p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var t=p.prop(this,"elements");return t?p.makeArray(t):this})).filter((function(){var t=this.type;return this.name&&!p(this).is(":disabled")&&bn.test(this.nodeName)&&!mn.test(t)&&(this.checked||!K.test(t))})).map((function(t,n){var e=p(this).val();return null==e?null:p.isArray(e)?p.map(e,(function(t){return{name:n.name,value:t.replace(gn,"\r\n")}})):{name:n.name,value:e.replace(gn,"\r\n")}})).get()}}),p.parseHTML=function(t,n,e){if(!t||"string"!=typeof t)return null;"boolean"==typeof n&&(e=n,n=!1),n=n||T;var i=I.exec(t),r=!e&&[];return i?[n.createElement(i[1])]:(i=p.buildFragment([t],n,r),r&&r.length&&p(r).remove(),p.merge([],i.childNodes))},void 0===(e=function(){return p}.apply(n,[]))||(t.exports=e);var wn=i.jQuery,_n=i.$;return p.noConflict=function(t){return i.$===p&&(i.$=_n),t&&i.jQuery===p&&(i.jQuery=wn),p},typeof r===U&&(i.jQuery=i.$=p),p},"object"==typeof t.exports?t.exports=i.document?r(i,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return r(t)}:r(i)},4118:function(){}},__webpack_module_cache__={};function __webpack_require__(t){var n=__webpack_module_cache__[t];if(void 0!==n)return n.exports;var e=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t].call(e.exports,e,e.exports,__webpack_require__),e.exports}__webpack_require__.amdO={},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();var __webpack_exports__={};function main(){var t=function(t){var n=[__webpack_require__(1823)];n.push(__webpack_require__(1982)),n.push(__webpack_require__(9202)),n.push(__webpack_require__(9401)),n.push(__webpack_require__(6988)),n.push(__webpack_require__(9728)),n.push(__webpack_require__(2163)),n.push(__webpack_require__(8252)),n.push(__webpack_require__(2085)),n.push(__webpack_require__(6591)),n.push(__webpack_require__(2452)),n.push(__webpack_require__(39)),n.push(__webpack_require__(6917)),n.push(__webpack_require__(945)),n.push(__webpack_require__(2819)),n.push(__webpack_require__(7076)),n.push(__webpack_require__(2757)),n.push(__webpack_require__(9807)),n.push(__webpack_require__(9820)),n.push(__webpack_require__(9016)),n.push(__webpack_require__(4093)),n.push(__webpack_require__(9721)),n.push(__webpack_require__(8326)),n.push(__webpack_require__(5391)),n.push(__webpack_require__(1229)),n.push(__webpack_require__(4680)),n.push(__webpack_require__(1230)),n.push(__webpack_require__(4439)),n.push(__webpack_require__(6474)),n.push(__webpack_require__(2636)),n.push(__webpack_require__(8663)),n.push(__webpack_require__(9659)),n.push(__webpack_require__(8016)),n.push(__webpack_require__(3037)),l.initializePlugins(n)};window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(2594).initialize();var n=__webpack_require__(5010);n.time("gtagReady");var e=__webpack_require__(7852),i=__webpack_require__(2025);__webpack_require__(7786);var r=i.get("stores/directive");i.get("stores/tracker_optimizely");if(!__webpack_require__(8260).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var o,u=__webpack_require__(9445),a=__webpack_require__(4214),c=__webpack_require__(7219),s=__webpack_require__(587),f={"accountId": "10453949094", "namespace": "10453949094", "revision": "39561", "anonymizeIP": true, "enableForceParameters": true, "experimental": {"trimPages": false}, "projectId": "10453949094", "layers": [{"changes": null, "id": "4523888569221120", "name": null, "commitId": "6435806213046272", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": null, "changes": null, "id": "6626092054740992", "integrationSettings": null, "variations": [{"id": "5242735903375360", "name": null, "actions": [{"viewId": "6524007996981248", "changes": [{"config": {"cta_url_paidsearch": "", "secondary_cta_text": "", "secondary_cta_url": "", "secondary_cta_type": "apply", "cta_intro_heading": "", "cta_intro_text": "", "column_header_background": "#c7d6e5", "column_header_color": "#101d2c", "perks_heading_text": "Key benefits:", "target_card_index": "1", "apply_redesign": "true", "column_label_text": "Most popular", "column_label_font_weight": "bold", "column_header_text": "Atmos\u2122 Rewards \u2028Ascent Visa Signature\u00ae\u00a0Card", "card_image": "//cdn.optimizely.com/img/10453949094/2f1ab808abb64c988e7087be35755113.jpg", "header_pre_text": "Limited-time online offer", "header_main_text": "Earn 70,000 bonus points", "header_sub_text": "$99 Companion Fare", "header_fine_text": "(plus taxes and fees from $23) after spending $2,500 or more on purchases within the first 90 days of account opening.", "perks_markup": "<ul>\n    <li class=\"always-visible\">Save up to $90 per person roundtrip with a free checked bag and preferred boarding for you and up to six guests on the same reservation</li>\n    <li class=\"always-visible\">Earn 3 points for every $1 spent on eligible Alaska Airlines and Hawaiian Airlines purchases</li>\n    <li class=\"always-visible\">Annual Companion Fare\n      <ul>\n        <li>Celebrate your account anniversary and receive a $99 Companion Fare (plus taxes and fees from $23) every year that you spend at least $6,000 on purchases with your card. Valid on Alaska Airlines and Hawaiian Airlines flights within North America, including the State of Hawaii, when booked on AlaskaAir.com</li>\n      </ul>\n    </li>\n    <li>$100 off an annual Alaska Lounge+ Membership purchased with your card</li>\n    <li>Earn one status point for every $3 spent on purchases</li>\n    <li>Earn 2 points for every $1 spent on eligible gas, EV charging station, cable, streaming services and local transit (including rideshare) purchases</li>\n    <li>Earn 1 point for every $1 spent on all other purchases</li>\n    <li>20% back on all Alaska Airlines and Hawaiian Airlines inflight purchases when you pay with your qualifying card</li>\n    <li>No foreign transaction fees\u2020</li>\n  </ul>", "cta_text": "Apply now", "cta_url_seonavdirect": "https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-icai?requesttype=C&campaignid=4081103&productoffercode=JN&genericvariables=861~Ascent_SEOMPLPApplyNowCntrl", "cta_type": "apply"}, "dependencies": [], "id": "56af4601-6f28-458c-bdf9-4646659de443", "name": "Multicard Landing Page Redesigned Card Item (Product Showcase) v2", "type": "widget", "widget_id": "4891865160351744"}, {"config": {"cta_url_paidsearch": "", "secondary_cta_text": "", "secondary_cta_url": "", "secondary_cta_type": "apply", "cta_intro_heading": "", "cta_intro_text": "", "column_header_background": "#101d2c", "column_header_color": "#faf9f5", "perks_heading_text": "Key benefits:", "target_card_index": "2", "apply_redesign": "true", "column_label_text": "Global benefits", "column_label_font_weight": "lighter", "column_header_text": "Atmos\u2122 Rewards \u2028SUMMIT VISA INFINITE\u00ae CARD", "card_image": "//cdn.optimizely.com/img/10453949094/2fc7f0263fa1445980fae9650848ad7f.jpg", "header_pre_text": "Limited-time online offer", "header_main_text": "Earn 80,000 bonus points", "header_sub_text": "25K Global Companion Award", "header_fine_text": "after spending $4,000 or more on purchases within the first 90 days of account opening.", "perks_markup": "<ul>\n    <li class=\"always-visible\">Fastest path to status with 1 status point per $2 spent on purchases</li>\n    <li class=\"always-visible\">3 points for every $1 spent on eligible foreign purchases</li>\n    <li class=\"always-visible\">8 Alaska Lounge passes (a $500+ value) and 8 Wi-Fi passes (a $60+ value) every year (2 per calendar quarter). Each pass is valid for your entire travel day and includes entry for up to two accompanying children</li>\n    <li>Save up to $90 per person roundtrip with a free checked bag and preferred boarding for you and up to six guests on the same reservation</li>\n    <li>Receive an exclusive signature cocktail or elevated bar offering every time you visit an Alaska Lounge location (through 2027)</li>\n    <li>Up to a $120 Airport Security Statement Credit every four years in connection with the TSA PreCheck\u00ae or Global Entry trusted traveler programs</li>\n    <li>Same-day confirmed change fee waiver for Alaska flights (excluding Saver fare)</li>\n    <li>Partner award booking fee waiver \u2014 Save up to $25 per person on every roundtrip flight. For a family of four, that\u2019s $100 in savings</li>\n    <li>Travel delay protection \u2014 receive a $50 voucher for a same-day cancellation or delays of 2+ hours good for a meal or drink on us at the airport. This benefit applies to Alaska Airlines flights canceled or delayed for any reason</li>\n    <li>Introducing the Global Companion Award: This new award unlocks extraordinary value when redeeming points for two. Available exclusively to Atmos Rewards Summit Visa Infinite\u00ae cardholders, the Global Companion Award covers a companion\u2019s ticket when booking award travel for two people on the same itinerary, up to a set number of points</li>\n    <li>Expanded global reach to 1,000+ destinations worldwide, plus more ways to earn and redeem points, with Alaska Airlines, Hawaiian Airlines, oneworld\u00ae Alliance member airlines and our global partners</li>\n    <li>No foreign transaction fees\u2020 </li>\n    <li>3 points for every $1 spent on eligible dining, foreign transaction, Alaska Airlines and Hawaiian Airlines purchases. 1 point per $1 spent on all other purchases. 10% rewards bonus on all points earned from card purchases if you have an eligible Bank of America\u00ae account. For example, that means for every $100 spent on dining purchases, you could earn 330 points</li>\n    <li>Fastest path to status with 1 status point per $2 spent on purchases, and beginning with your first card anniversary, 10,000 status points awarded annually. These benefits combined offer the fastest path to status. $20,000 in purchases earns Atmos Silver (oneworld\u00ae Ruby), while $60,000 in purchases yields Atmos Gold (oneworld\u00ae Sapphire)</li>\n    <li>20% back on all Alaska Airlines and Hawaiian Airlines inflight purchases when you pay with your qualifying card</li>\n    <li>Share your accumulated points with up to 10 additional Atmos Rewards members</li>\n    <li>Transfer to select hotel partner programs \u2014 including Marriott Bonvoy, I Prefer Hotel Rewards, Wyndham Rewards\u00ae, Shangri-La Circle, and limited-time partner IHG One Rewards. With these five transfer partners, covering over 25,000 hotels worldwide, the Summit card makes your points even more rewarding</li>\n  </ul>", "cta_text": "Apply now", "cta_url_seonavdirect": "https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-icai?requesttype=C&campaignid=4081128&productoffercode=HH&genericvariables=861~Summit_SEOMPLPApplyNowCntrl", "cta_type": "apply"}, "dependencies": [], "id": "c2408504-f850-4b9f-a1cd-789a67ebe1bb", "name": "Multicard Landing Page Redesigned Card Item (Product Showcase) v2", "type": "widget", "widget_id": "4891865160351744"}, {"config": {"cta_url_paidsearch": "", "secondary_cta_text": "", "secondary_cta_url": "", "secondary_cta_type": "apply", "cta_intro_heading": "", "cta_intro_text": "", "column_header_background": "#616b75", "column_header_color": "#faf9f5", "perks_heading_text": "Key benefits:", "target_card_index": "3", "apply_redesign": "true", "column_label_text": "For businesses", "column_label_font_weight": "lighter", "column_header_text": "Atmos\u2122 Rewards \u2028VISA\u00ae BUSINESS CARD", "card_image": "//cdn.optimizely.com/img/10453949094/97a04e4956e34c4baf9b912ba98ae9c8.jpg", "header_pre_text": "Limited-time online offer", "header_main_text": "Earn 90,000 bonus points", "header_sub_text": "", "header_fine_text": "after spending $6,000 or more on purchases within the first 90 days of account opening.", "perks_markup": "<ul>\n    <li class=\"always-visible\">Earn 10+ points per $1 spent on eligible Atmos for Business purchases. By selecting Price Paid earn and achieving Platinum or Titanium status, this can reach 20+ points per $1 spent on flights booked on the Atmos\u2122 for Business website.</li>\n    <li class=\"always-visible\">Earn one status point for every $3 spent on purchases</li>\n    <li class=\"always-visible\">Receive four Alaska Lounge passes every calendar year (one per quarter), valid for your entire travel day.</li>\n    <li>Free checked bag for any cardholder and up to 6 guests on the same reservation when you pay for your flight with your card</li>\n    <li>Preferred boarding to get to your seat quicker when you pay for your flight with your card</li>\n    <li>Pay no change fee for same-day confirmed flight changes and receive a $50 electronic voucher for cancellations or delays of two hours or more.</li>\n    <li>Earn 3 points for every $1 spent on eligible Alaska Airlines and Hawaiian Airlines purchases.</li>\n    <li>Earn 2 points for every $1 spent on eligible dining purchases.</li>\n    <li>Earn 1 point for every $1 spent on all other purchases.</li>\n    <li>Earn a 10,000 Status Points Award and a 50% Global Flight Discount Code after you spend $100,000 on purchases and earn these rewards again after you spend $200,000 on purchases each card anniversary year.</li>\n    <li>20% back on all Alaska Airlines and Hawaiian Airlines inflight purchases when you pay with your new card</li>\n    <li>10% rewards bonus on all points earned from card purchases if you have an eligible Bank of America\u00ae account.</li>\n    <li>No foreign transaction fees\u2020</li>\n  </ul>", "cta_text": "Apply now", "cta_url_seonavdirect": "https://secure.bankofamerica.com/applynow/initialize-workflow.go?requesttype=BCC&campaignid=4081883&productoffercode=6T&mktg_track=ATLP", "cta_type": "apply", "annual_fee_text": "$195\u2020"}, "dependencies": [], "id": "662d4c1b-f6e9-43dc-b9a8-b0945c5ee81a", "name": "Multicard Landing Page Redesigned Card Item (Product Showcase) v2", "type": "widget", "widget_id": "4891865160351744"}, {"dependencies": [], "id": "02495106-802a-4a6f-a644-269931bd6c41", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            setTimeout(check, 100);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            setTimeout(check, 100);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                setTimeout(waitForShadowRoot, 100);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // LOGGING
  // silent unless the page has window.optlyConsole: a clean console copied at document start by the debug
  // userscript, or a recorder the test scripts add (rest-api-scripts/browser.js LOG_TRAP). real visitors have
  // neither, so nothing reaches the page's patched console (Quantum Metric, AppDynamics)
  const EXPERIMENT = '1639263 multicard dual cta / original'; // tags this variation's lines
  const pushLog = (level, msg) => {
    const out = window.optlyConsole;
    if (out && typeof out[level] === 'function') out[level](`[${EXPERIMENT}]`, msg);
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // EXPERIMENT
  // the page headline matches (same in both arms) the card offers (the cards themselves are the v2 extension's instances)
  // 30 s: on a throttled phone the hero renders ~11 s after the snippet runs; 10 s gave up too early
  getShadowElements([
    { selector: 'borealis-atmos-hero-content', hasShadow: true },
    { selector: '.atmos-hero-content', hasShadow: false },
    { selector: 'h1.display-lg', hasShadow: false },
  ], 30000)
  .then(([borealisHeroContent, heroContent, heroTitle]) => {
    heroTitle.textContent = 'Limited-time online offer: Earn up to 90,000 bonus points with Atmos™ Rewards Visa® cards';
    log('headline set');
  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}]}]}, {"id": "6485570422046720", "name": null, "actions": [{"viewId": "6524007996981248", "changes": [{"dependencies": [], "id": "222a50ca-2371-408f-b19a-4d16c4d04ca6", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            setTimeout(check, 100);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            setTimeout(check, 100);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                setTimeout(waitForShadowRoot, 100);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // LOGGING
  // silent unless the page has window.optlyConsole: a clean console copied at document start by the debug
  // userscript, or a recorder the test scripts add (rest-api-scripts/browser.js LOG_TRAP). real visitors have
  // neither, so nothing reaches the page's patched console (Quantum Metric, AppDynamics)
  const EXPERIMENT = '1639263 multicard dual cta / variation-1'; // tags this variation's lines
  const pushLog = (level, msg) => {
    const out = window.optlyConsole;
    if (out && typeof out[level] === 'function') out[level](`[${EXPERIMENT}]`, msg);
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // EXPERIMENT
  // the page headline matches (same in both arms) the card offers (the cards themselves are the v2 extension's instances)
  // 30 s: on a throttled phone the hero renders ~11 s after the snippet runs; 10 s gave up too early
  getShadowElements([
    { selector: 'borealis-atmos-hero-content', hasShadow: true },
    { selector: '.atmos-hero-content', hasShadow: false },
    { selector: 'h1.display-lg', hasShadow: false },
  ], 30000)
  .then(([borealisHeroContent, heroContent, heroTitle]) => {
    heroTitle.textContent = 'Limited-time online offer: Earn up to 90,000 bonus points with Atmos™ Rewards Visa® cards';
    log('headline set');
  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}, {"config": {"header_fine_text": "(plus taxes and fees from $23) after spending $2,500 or more on purchases within the first 90 days of account opening.", "cta_intro_heading": "See if you pre-qualify.", "column_label_text": "Most popular", "header_main_text": "Earn 70,000 bonus points", "perks_markup": "<ul>\n    <li class=\"always-visible\">Save up to $90 per person roundtrip with a free checked bag and preferred boarding for you and up to six guests on the same reservation</li>\n    <li class=\"always-visible\">Earn 3 points for every $1 spent on eligible Alaska Airlines and Hawaiian Airlines purchases</li>\n    <li class=\"always-visible\">Annual Companion Fare\n      <ul>\n        <li>Celebrate your account anniversary and receive a $99 Companion Fare (plus taxes and fees from $23) every year that you spend at least $6,000 on purchases with your card. Valid on Alaska Airlines and Hawaiian Airlines flights within North America, including the State of Hawaii, when booked on AlaskaAir.com</li>\n      </ul>\n    </li>\n    <li>$100 off an annual Alaska Lounge+ Membership purchased with your card</li>\n    <li>Earn one status point for every $3 spent on purchases</li>\n    <li>Earn 2 points for every $1 spent on eligible gas, EV charging station, cable, streaming services and local transit (including rideshare) purchases</li>\n    <li>Earn 1 point for every $1 spent on all other purchases</li>\n    <li>20% back on all Alaska Airlines and Hawaiian Airlines inflight purchases when you pay with your qualifying card</li>\n    <li>No foreign transaction fees\u2020</li>\n  </ul>", "apply_redesign": "true", "perks_heading_text": "Key benefits:", "annual_fee_text": "", "secondary_cta_text": "Apply now", "cta_type": "prequal", "card_image": "//cdn.optimizely.com/img/10453949094/2f1ab808abb64c988e7087be35755113.jpg", "cta_url_seonavdirect": "https://secure.bankofamerica.com/apply-now-services/cards-prequal/initialize-prequal?requesttype=CCAPQ&campaignid=4081103&productoffercode=JN&appflow=ICAI&locale=en_US&lobchannelcode=ASK003&genericvariables=861~AscentDualCTAPQTest", "cta_intro_text": "It takes 30 seconds and your credit score is not impacted.", "target_card_index": "1", "cta_url_paidsearch": "", "secondary_cta_type": "apply", "column_label_font_weight": "bold", "secondary_cta_url": "https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-icai?requesttype=C&campaignid=4081103&productoffercode=JN&genericvariables=861~Ascent_DualCTAANTest", "column_header_text": "Atmos\u2122 Rewards \u2028Ascent Visa Signature\u00ae\u00a0Card", "column_header_background": "#c7d6e5", "column_header_color": "#101d2c", "header_pre_text": "Limited-time online offer", "cta_text": "Pre-Qualify Now", "header_sub_text": "$99 Companion Fare"}, "dependencies": [], "id": "1350ab20-59da-4213-bd87-4ee8cf5141b8", "name": "Multicard Landing Page Redesigned Card Item (Product Showcase) v2", "type": "widget", "widget_id": "4891865160351744"}, {"config": {"header_fine_text": "after spending $4,000 or more on purchases within the first 90 days of account opening.", "cta_intro_heading": "See if you pre-qualify.", "column_label_text": "Global benefits", "header_main_text": "Earn 80,000 bonus points", "perks_markup": "<ul>\n    <li class=\"always-visible\">Fastest path to status with 1 status point per $2 spent on purchases</li>\n    <li class=\"always-visible\">3 points for every $1 spent on eligible foreign purchases</li>\n    <li class=\"always-visible\">8 Alaska Lounge passes (a $500+ value) and 8 Wi-Fi passes (a $60+ value) every year (2 per calendar quarter). Each pass is valid for your entire travel day and includes entry for up to two accompanying children</li>\n    <li>Save up to $90 per person roundtrip with a free checked bag and preferred boarding for you and up to six guests on the same reservation</li>\n    <li>Receive an exclusive signature cocktail or elevated bar offering every time you visit an Alaska Lounge location (through 2027)</li>\n    <li>Up to a $120 Airport Security Statement Credit every four years in connection with the TSA PreCheck\u00ae or Global Entry trusted traveler programs</li>\n    <li>Same-day confirmed change fee waiver for Alaska flights (excluding Saver fare)</li>\n    <li>Partner award booking fee waiver \u2014 Save up to $25 per person on every roundtrip flight. For a family of four, that\u2019s $100 in savings</li>\n    <li>Travel delay protection \u2014 receive a $50 voucher for a same-day cancellation or delays of 2+ hours good for a meal or drink on us at the airport. This benefit applies to Alaska Airlines flights canceled or delayed for any reason</li>\n    <li>Introducing the Global Companion Award: This new award unlocks extraordinary value when redeeming points for two. Available exclusively to Atmos Rewards Summit Visa Infinite\u00ae cardholders, the Global Companion Award covers a companion\u2019s ticket when booking award travel for two people on the same itinerary, up to a set number of points</li>\n    <li>Expanded global reach to 1,000+ destinations worldwide, plus more ways to earn and redeem points, with Alaska Airlines, Hawaiian Airlines, oneworld\u00ae Alliance member airlines and our global partners</li>\n    <li>No foreign transaction fees\u2020 </li>\n    <li>3 points for every $1 spent on eligible dining, foreign transaction, Alaska Airlines and Hawaiian Airlines purchases. 1 point per $1 spent on all other purchases. 10% rewards bonus on all points earned from card purchases if you have an eligible Bank of America\u00ae account. For example, that means for every $100 spent on dining purchases, you could earn 330 points</li>\n    <li>Fastest path to status with 1 status point per $2 spent on purchases, and beginning with your first card anniversary, 10,000 status points awarded annually. These benefits combined offer the fastest path to status. $20,000 in purchases earns Atmos Silver (oneworld\u00ae Ruby), while $60,000 in purchases yields Atmos Gold (oneworld\u00ae Sapphire)</li>\n    <li>20% back on all Alaska Airlines and Hawaiian Airlines inflight purchases when you pay with your qualifying card</li>\n    <li>Share your accumulated points with up to 10 additional Atmos Rewards members</li>\n    <li>Transfer to select hotel partner programs \u2014 including Marriott Bonvoy, I Prefer Hotel Rewards, Wyndham Rewards\u00ae, Shangri-La Circle, and limited-time partner IHG One Rewards. With these five transfer partners, covering over 25,000 hotels worldwide, the Summit card makes your points even more rewarding</li>\n  </ul>", "apply_redesign": "true", "perks_heading_text": "Key benefits:", "annual_fee_text": "", "secondary_cta_text": "Apply now", "cta_type": "prequal", "card_image": "//cdn.optimizely.com/img/10453949094/2fc7f0263fa1445980fae9650848ad7f.jpg", "cta_url_seonavdirect": "https://secure.bankofamerica.com/apply-now-services/cards-prequal/initialize-prequal?requesttype=CCAPQ&campaignid=4081128&productoffercode=HH&appflow=ICAI&locale=en_US&lobchannelcode=ASK002&genericvariables=861~SummitDualCTAPQTest", "cta_intro_text": "It takes 30 seconds and your credit score is not impacted.", "target_card_index": "2", "cta_url_paidsearch": "", "secondary_cta_type": "apply", "column_label_font_weight": "lighter", "secondary_cta_url": "https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-icai?requesttype=C&campaignid=4081128&productoffercode=HH&genericvariables=861~Summit_DualCTAANTest", "column_header_text": "Atmos\u2122 Rewards \u2028SUMMIT VISA INFINITE\u00ae CARD", "column_header_background": "#101d2c", "column_header_color": "#faf9f5", "header_pre_text": "Limited-time online offer", "cta_text": "Pre-Qualify Now", "header_sub_text": "25K Global Companion Award"}, "dependencies": [], "id": "27a42dcc-7b01-4aac-9b1b-6624fe38d736", "name": "Multicard Landing Page Redesigned Card Item (Product Showcase) v2", "type": "widget", "widget_id": "4891865160351744"}, {"config": {"header_fine_text": "after spending $6,000 or more on purchases within the first 90 days of account opening.", "cta_intro_heading": "", "column_label_text": "For businesses", "header_main_text": "Earn 90,000 bonus points", "perks_markup": "<ul>\n    <li class=\"always-visible\">Earn 10+ points per $1 spent on eligible Atmos for Business purchases. By selecting Price Paid earn and achieving Platinum or Titanium status, this can reach 20+ points per $1 spent on flights booked on the Atmos\u2122 for Business website.</li>\n    <li class=\"always-visible\">Earn one status point for every $3 spent on purchases</li>\n    <li class=\"always-visible\">Receive four Alaska Lounge passes every calendar year (one per quarter), valid for your entire travel day.</li>\n    <li>Free checked bag for any cardholder and up to 6 guests on the same reservation when you pay for your flight with your card</li>\n    <li>Preferred boarding to get to your seat quicker when you pay for your flight with your card</li>\n    <li>Pay no change fee for same-day confirmed flight changes and receive a $50 electronic voucher for cancellations or delays of two hours or more.</li>\n    <li>Earn 3 points for every $1 spent on eligible Alaska Airlines and Hawaiian Airlines purchases.</li>\n    <li>Earn 2 points for every $1 spent on eligible dining purchases.</li>\n    <li>Earn 1 point for every $1 spent on all other purchases.</li>\n    <li>Earn a 10,000 Status Points Award and a 50% Global Flight Discount Code after you spend $100,000 on purchases and earn these rewards again after you spend $200,000 on purchases each card anniversary year.</li>\n    <li>20% back on all Alaska Airlines and Hawaiian Airlines inflight purchases when you pay with your new card</li>\n    <li>10% rewards bonus on all points earned from card purchases if you have an eligible Bank of America\u00ae account.</li>\n    <li>No foreign transaction fees\u2020</li>\n  </ul>", "apply_redesign": "true", "perks_heading_text": "Key benefits:", "annual_fee_text": "$195\u2020", "secondary_cta_text": "", "cta_type": "apply", "card_image": "//cdn.optimizely.com/img/10453949094/97a04e4956e34c4baf9b912ba98ae9c8.jpg", "cta_url_seonavdirect": "https://secure.bankofamerica.com/applynow/initialize-workflow.go?requesttype=BCC&campaignid=4081883&productoffercode=6T&mktg_track=ATLP", "cta_intro_text": "", "target_card_index": "3", "cta_url_paidsearch": "", "secondary_cta_type": "apply", "column_label_font_weight": "lighter", "secondary_cta_url": "", "column_header_text": "Atmos\u2122 Rewards \u2028VISA\u00ae BUSINESS CARD", "column_header_background": "#616b75", "column_header_color": "#faf9f5", "header_pre_text": "Limited-time online offer", "cta_text": "Apply now", "header_sub_text": ""}, "dependencies": [], "id": "40ea9e2c-fb07-4844-983b-0f42602c211f", "name": "Multicard Landing Page Redesigned Card Item (Product Showcase) v2", "type": "widget", "widget_id": "4891865160351744"}]}]}], "weightDistributions": [{"entityId": "5242735903375360", "endOfRange": 5000}, {"entityId": "6485570422046720", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4523888569221120"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6524007996981248"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "6626092054740992", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "4637222656278528", "name": null, "commitId": "6508768245055488", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "10680034899"], "audienceName": null, "changes": null, "id": "5018187798937600", "integrationSettings": null, "variations": [{"id": "5454520572968960", "name": null, "actions": []}, {"id": "6425562682490880", "name": null, "actions": [{"viewId": "6708291923869696", "changes": [{"config": {"cta_url": "https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-icai?requesttype=C&campaignid=4081095&productoffercode=V8&genericvariables=861~ASAscentHomepagetile11.18", "fine_print_text": "Offers vary elsewhere.\u200b Residents of the US and its territories only. See full disclosure for details.\u200b", "brand": "as", "background_image_desktop": "//cdn.optimizely.com/img/10453949094/245cc3937a3c4ee38c36aba07ebd294d.jpg", "badge_text": "LIMITED-TIME ONLINE OFFER", "card_image": "//cdn.optimizely.com/img/10453949094/bbc52e28e5184f1592673d978e5ecea0.png", "description_text": "Earn 70,000 bonus points and a $99 Companion Fare (plus taxes and fees from $23) after qualifying purchases. Plus, save up to $90 per person roundtrip with a free checked bag and preferred boarding for you and up to six guests on the same reservation when you pay for your flight with your card.  See if you pre-qualify. It takes 30 seconds and your credit score is not impacted.", "bonus_string": "Earn 70,000", "background_image_mobile": "//cdn.optimizely.com/img/10453949094/412892d06a394612ae56fcf78b094c03.png", "cta_text": "Pre-Qualify Now", "subheader_text": "bonus points + Get a free checked bag"}, "dependencies": [], "name": "Atmos Card Full Bleed Verbose Banner v1.0.0", "type": "widget", "id": "1ce40e86-ae9a-490d-8396-9dcdd54fbeb8", "widget_id": "5689411847847936"}]}]}], "weightDistributions": [{"entityId": "6425562682490880", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4637222656278528"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6708291923869696"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "5018187798937600", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "4752674128658432", "name": null, "commitId": "5648533255094272", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "6245261633126400"], "audienceName": null, "changes": null, "id": "6194066864472064", "integrationSettings": null, "variations": [{"id": "6397997146177536", "name": null, "actions": [{"viewId": "5624797403545600", "changes": [{"config": {"cta_url": "", "background_image_title": "", "mode": "track", "cta_title": "", "body_text": "", "background_image": "", "headline_text": "", "cta_new_window": "no", "custom_event_name": "booking_widget_borealis_card_concise_cta_click"}, "dependencies": [], "id": "7874c278-1a3f-4bae-8ff3-68905b75b13e", "name": "Borealis Card Concise Replacement (Booking Widget) v3", "type": "widget", "widget_id": "5670436967546880"}]}]}, {"id": "6097055632850944", "name": null, "actions": [{"viewId": "5624797403545600", "changes": [{"config": {"cta_url": "/trips?lid=premium-class", "background_image_title": "Premium Class", "mode": "replace", "cta_title": "Premium Experience", "body_text": "Starting at $15 one way, experience industry-leading legroom, early boarding, and complimentary cocktails, beer and wine.", "background_image": "//cdn.optimizely.com/img/10453949094/3c587400b7854bda8b06111c7ee80332.jpg", "headline_text": "You deserve a Premium experience", "cta_new_window": "no", "custom_event_name": "booking_widget_borealis_card_concise_cta_click"}, "dependencies": [], "id": "11d5f771-20ae-41c8-89bc-2dfacfa89da9", "name": "Borealis Card Concise Replacement (Booking Widget) v3", "type": "widget", "widget_id": "5670436967546880"}]}]}], "weightDistributions": [{"entityId": "6397997146177536", "endOfRange": 5000}, {"entityId": "6097055632850944", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4752674128658432"}, "deployed": false}, {"audienceIds": null, "audienceName": null, "changes": null, "id": "6306547595214848", "integrationSettings": null, "variations": [{"id": "4660226266234880", "name": null, "actions": [{"viewId": "5624797403545600", "changes": [{"config": {"cta_url": "", "background_image_title": "", "mode": "track", "cta_title": "", "body_text": "", "background_image": "", "headline_text": "", "cta_new_window": "no", "custom_event_name": "booking_widget_borealis_card_concise_cta_click"}, "dependencies": [], "id": "c0d8602d-929b-4797-a132-1a56f0cbb233", "name": "Borealis Card Concise Replacement (Booking Widget) v3", "type": "widget", "widget_id": "5670436967546880"}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4752674128658432"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["5624797403545600"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "6194066864472064", "endOfRange": null}], [{"entityId": "6306547595214848", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "4870243892330496", "name": null, "commitId": "6529078776299520", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": null, "changes": null, "id": "5348072291565568", "integrationSettings": null, "variations": [{"id": "5691158255370240", "name": null, "actions": [{"viewId": "5866916823171072", "changes": []}]}, {"id": "5510516209090560", "name": null, "actions": [{"viewId": "5866916823171072", "changes": [{"dependencies": [], "id": "d2be8902-3a11-4132-8599-0c3c73ff3f54", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // utag data layer checker
  const waitForUniversalDataObject = (properties, maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {
      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const intervalId = setInterval(() => {

        if (typeof window.utag_data !== 'undefined') {
          if (properties && properties.length > 0) {
            const allPropsExist = properties.every(prop =>
              window.utag_data.hasOwnProperty(prop) &&
              window.utag_data[prop] !== undefined
            );
            if (allPropsExist) {
              clearInterval(intervalId);
              resolve(window.utag_data);
            }
          } else {
            clearInterval(intervalId);
            resolve(window.utag_data);
          }
        }

        attempts++;
        if (attempts >= maxAttempts) {
          clearInterval(intervalId);
          reject(new Error('Timeout'));
        }
      }, interval);
    });
  };

  // element finder
  const waitForElementToExist = (selector, timeoutDuration) => {
    return new Promise((resolve, reject) => {
      const rootDocEl = document.documentElement;
      const element = rootDocEl.querySelector(selector);

      if (element) {
        log(selector + ' found (via query selector)');
        resolve(element);
        return;
      }

      const observer = new MutationObserver(mutations => {
        const targetElement = rootDocEl.querySelector(selector);
        if (targetElement) {
          observer.disconnect();
          clearTimeout(timeoutHandle);
          log(selector + ' found (via observation)');
          resolve(targetElement);
        }
      });
      observer.observe(rootDocEl, { childList: true, subtree: true });

      const timeoutHandle = setTimeout(() => {
        observer.disconnect();
        reject(new Error('Timeout waiting for element: ' + selector));
      }, timeoutDuration);
    });
  };

  // element stability checker
  const waitForStableElement = (selector, stableTime = 3000) => {
    return new Promise((resolve) => {
      const element = document.querySelector(selector);
      let timeoutId;

      const observer = new MutationObserver(() => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          observer.disconnect();
          resolve(element);
        }, stableTime);
      });

      observer.observe(element, {
        attributes: true,
        attributeFilter: ['href'],
        childList: true,
        subtree: true
      });

      // Kick off the initial timeout
      timeoutId = setTimeout(() => {
        observer.disconnect();
        resolve(element);
      }, stableTime);
    });
  };

  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            setTimeout(check, 100);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            setTimeout(check, 100);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                setTimeout(waitForShadowRoot, 100);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // node finder
  const findAllNodesMatchingSelector = (node, selector) => {
    let matches = [];

    // self
    if (node.matches && node.matches(selector)) {
      matches.push(node);
    }

    // descendants
    let children = node.children || [];
    for (let child of children) {
      matches.push(...findAllNodesMatchingSelector(child, selector));
    }
    return matches;
  }

  const scanMutationsForSelector = (selector, callback) => {
    return (mutations, observer) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          const selectors = findAllNodesMatchingSelector(node, selector);
          if (selectors.length > 0) {
            callback(selectors);
          }
        });
      });
    }
  };

  // LOGGING
  // silent unless the page has window.optlyConsole: a clean console copied at document start by the debug
  // userscript, or a recorder the test scripts add (rest-api-scripts/browser.js LOG_TRAP). real visitors have
  // neither, so nothing reaches the page's patched console (shopping app, Quantum Metric, AppDynamics)
  const EXPERIMENT = 'third-party-banner-legacy / variation-1'; // tags this variation's lines
  const pushLog = (level, msg) => {
    const out = window.optlyConsole;
    if (out && typeof out[level] === 'function') out[level](`[${EXPERIMENT}]`, msg);
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // EXPERIMENT
  Promise.all([
    waitForOptimizely(10000),
    waitForElementToExist('body', 10000),
    getShadowElements([
      { selector: '.confirmed-reservation-header', hasShadow: false },
    ]),
  ])
  .then(([optly, body, [confirmationHeader]]) => {

    // per-brand copy and links
    const isHA = /hawaiianairlines\.com$/.test(window.location.hostname);
    const brand = isHA
      ? {
          name: 'Hawaiian Airlines',
          staysURL: 'https://hawaiian.poweredbygps.com/Hotels?MDPCID=hawaiian-us.tpd.brand.airconfpage.static.hotel',
          carRentalURL: 'https://www.hawaiianairlines.com/content/ha/car-rental?ptid=191.2'
        }
      : {
          name: 'Alaska Airlines',
          staysURL: 'https://vacations.alaskaair.com/Hotels?MDPCID=AlaskaVacations-en_us.dps.alaskavacations.confirmationtop-hotel_launch.hotel/',
          carRentalURL: 'https://www.alaskaair.com/content/car-rental?ptid=184.2'
        };

    const bannerMarkup = `
      <section class="cc-promo-section" id="confThirdPartyBanner" aria-label="More ways to save with ${brand.name}">

        <div class="cc-more-grid">

          <article class="cc-more-card">
            <div class="cc-more-card__image-wrap">
              <img src="https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/bltef4222899fe507f8/Rentalcarimage" alt="Photo of an SUV driving towards a mountain" width="403" height="120" loading="lazy">
            </div>
            <h3 class="cc-more-card__headline">Hello, savings.</h3>
            <p class="cc-more-card__body">Book car rentals with up to 35% off and 1,250 points with Avis &amp; Budget.</p>
            <div class="cc-more-card__cta-wrap">
              <a class="cc-more-card__cta" href="${brand.carRentalURL}" id="bookRentalCar">
                Rent now
              </a>
            </div>
          </article>

          <article class="cc-more-card">
            <div class="cc-more-card__image-wrap">
              <img src="https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blta259808a8d04cb6e/hotels" alt="Photo of a hotel with a swimming pool and palm trees" width="403" height="120" loading="lazy">
            </div>
            <h3 class="cc-more-card__headline">Book a stay.</h3>
            <p class="cc-more-card__body">Earn or redeem points at almost a million properties worldwide.</p>
            <div class="cc-more-card__cta-wrap">
              <a class="cc-more-card__cta" href="${brand.staysURL}" id="bookStay">
                Book a stay
              </a>
            </div>
          </article>

          <article class="cc-more-card">
            <div class="cc-more-card__image-wrap">
              <img src="https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/bltf2b9de689bb377e7/lyft" alt="Three friends getting into a ride-share car" width="403" height="120" loading="lazy">
            </div>
            <h3 class="cc-more-card__headline">Hail a ride.</h3>
            <p class="cc-more-card__body">Link your Atmos™ Rewards and Lyft accounts to earn points on every ride.</p>
            <div class="cc-more-card__cta-wrap">
              <a class="cc-more-card__cta" href="https://www.alaskalyft.com/start" rel="noopener noreferrer" id="bookRideshare" aria-label="Link accounts — Atmos Rewards and Lyft (opens in new tab)">
                Link accounts
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                </svg>
              </a>
            </div>
          </article>

        </div><!-- /.cc-more-cards -->

      </section><!-- /.cc-more -->
    `;

    confirmationHeader.insertAdjacentHTML('afterend', bannerMarkup);

    // custom conversion events: any CTA (primary) plus one per CTA; keys must match events in the Optimizely project
    const anyClickEvent = 'conf-third-party-banner-click-any';
    const clickEvents = {
      bookStay: 'conf-third-party-banner-click-hotel',
      bookRentalCar: 'conf-third-party-banner-click-car',
      bookRideshare: 'conf-third-party-banner-click-lyft'
    };
    const banner = document.getElementById('confThirdPartyBanner');

    // keep our CTA URLs: a page script rewrites car-rental links to a prefilled vendor deeplink after load.
    // an href that still starts with our URL (e.g. GA's _gl linker param appended) is left alone
    const intendedURLs = new Map(
      Array.from(banner.querySelectorAll('.cc-more-card__cta')).map(a => [a, a.getAttribute('href')])
    );
    const restoreURL = (a) => {
      const url = intendedURLs.get(a);
      if (!url) return;
      const href = a.getAttribute('href') || '';
      if (href.indexOf(url) !== 0) {
        a.setAttribute('href', url);
        log('restored ' + a.id + ' href');
      }
    };
    new MutationObserver((mutations) => mutations.forEach(m => restoreURL(m.target)))
      .observe(banner, { attributes: true, attributeFilter: ['href'], subtree: true });
    // last check before any other click handler sees it
    window.addEventListener('click', (e) => {
      const cta = e.target.closest && e.target.closest('#confThirdPartyBanner .cc-more-card__cta');
      if (cta) restoreURL(cta);
    }, true);

    banner.addEventListener('click', (e) => {
      const cta = e.target.closest('.cc-more-card__cta');
      if (!cta || !clickEvents[cta.id]) return;
      [anyClickEvent, clickEvents[cta.id]].forEach((eventName) => {
        optly.push({ type: 'event', eventName });
        log('event pushed: ' + eventName);
      });
    });

  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}, {"id": "11bc0042-4fe8-4e5f-b04c-d4b6019dae40", "type": "append", "selector": "head", "value": "<style>.cc-promo-section {\n  font-family: var(--ds-basic-type-family-body, \"AS Circular\", system-ui, sans-serif);\n  color: var(--ds-basic-color-texticon-default, #2a2a2a);\n  background: var(--ds-basic-color-page-background-default, #ffffff);\n  max-width: 1264px;\n  margin: 0 auto;\n}\n\n/* \u2500\u2500\u2500 Three-up \"more ways\" row (Book a stay / Rent now / Link accounts) \u2500\u2500\u2500 */\n.cc-promo-section .cc-more-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  padding: 0 0 32px;\n}\n\n.cc-promo-section .cc-more-card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  border: 1px solid var(--ds-basic-color-border-subtle, #dddddd);\n  border-radius: 6px;\n  overflow: hidden;\n  padding-bottom: 16px;\n}\n\n.cc-promo-section .cc-more-card__image-wrap {\n  overflow: hidden;\n  aspect-ratio: 403 / 160;\n}\n\n.cc-promo-section .cc-more-card__image-wrap img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.cc-promo-section .cc-more-card__headline {\n  font-family: inherit;\n  font-size: 1.25rem; /* 20px */\n  font-weight: 300;\n  line-height: var(--ds-basic-type-line-height-heading, 1.3);\n  color: var(--ds-basic-color-texticon-default, #2a2a2a);\n  margin: 0;\n  padding: 0 16px;\n}\n\n.cc-promo-section .cc-more-card__body {\n  font-size: 1rem;\n  font-weight: 200;\n  line-height: var(--ds-basic-type-line-height-body, 1.625rem);\n  color: var(--ds-basic-color-texticon-muted, #666767);\n  margin: 0;\n  padding: 0 16px;\n}\n\n/* push the CTA to the bottom of the card so buttons line up when body copy wraps to different lengths */\n.cc-promo-section .cc-more-card__cta-wrap {\n  margin-top: auto;\n  padding-top: 4px;\n  padding: 0 16px;\n}\n\n/* Secondary CTA button (legacy site `.btn.btn-secondary` style); AS blue on both brands */\n.cc-promo-section .cc-more-card__cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 24px;\n  line-height: 20px;\n  background: #ffffff;\n  border: 2px solid #2774ae;\n  color: #2774ae;\n  font-family: inherit;\n  font-size: 14px;\n  /* not bold: the site only ships Latin AS Circular at 300/450, its heavier faces are CJK-only (Noto JP/KR),\n     so bold Latin text falls back to Times, or renders blank on iOS devices */\n  font-weight: 450;\n  -webkit-font-smoothing: antialiased;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;\n}\n\n.cc-promo-section .cc-more-card__cta:hover,\n.cc-promo-section .cc-more-card__cta:focus-visible {\n  background: #f2f2f2;\n  border-color: #00274a;\n  color: #00274a;\n  text-decoration: none;\n  outline: 2px solid #01426a;\n  outline-offset: 2px;\n}\n\n.cc-promo-section .cc-more-card__cta svg {\n  width: 20px;\n  height: 20px;\n  fill: currentColor;\n  flex-shrink: 0;\n}\n\n/* \u2500\u2500\u2500 Responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n@media (max-width: 900px) {\n  .cc-promo-section .cc-more-grid {\n    grid-template-columns: 1fr;\n  }\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "5510516209090560", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4870243892330496"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5866916823171072"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "5348072291565568", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "4958925101989888", "name": null, "commitId": "4836652449792000", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": null, "changes": null, "id": "4735246493548544", "integrationSettings": null, "variations": [{"id": "5260190818238464", "name": null, "actions": [{"viewId": "6093637476417536", "changes": [{"dependencies": [], "id": "97ea9c75-6841-42b2-92be-90c542029675", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            requestAnimationFrame(check);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            requestAnimationFrame(check);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                requestAnimationFrame(waitForShadowRoot);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // LOGGING
  // silent unless the page has window.optlyConsole: a clean console copied at document start by the debug
  // userscript, or a recorder the test scripts add (rest-api-scripts/browser.js LOG_TRAP). real visitors have
  // neither, so nothing reaches the page's patched console (shopping app, Quantum Metric, AppDynamics)
  const EXPERIMENT = '1670034-deals-page-redirect-v4 / original'; // tags this variation's lines
  const pushLog = (level, msg) => {
    const out = window.optlyConsole;
    if (out && typeof out[level] === 'function') out[level](`[${EXPERIMENT}]`, msg);
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // TRACKING
  // custom events; each must exist in optimizely (project "AlaskaAir.com") to count as a metric
  const track = (eventName, tags) => {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({ type: 'event', eventName: eventName, tags: tags });
    log(`event ${eventName} ${JSON.stringify(tags)}`);
  };

  // match on the tag (auro-button-<version>), the auro-button attribute is only set by the component's own first update
  const isAuroButton = (el) => !!el.tagName && el.tagName.toLowerCase().indexOf('auro-button') === 0;
  const isElement = (node) => !!node && node.nodeType === 1;

  // desktop table header id -> deals-sort sort_by (same values as the variant page's sort dropdown)
  const SORT_COLUMNS = {
    'col-from': 'departure',
    'col-to': 'destination',
    'col-date': 'travel_dates',
    'col-fare': 'fare_class',
    'col-price': 'price'
  };

  // one delegated click listener on the deal list shadow root covers the CTA buttons, the money/points toggle
  // and the sortable headers (desktop table / mobile cards). rows are re-rendered by "show more",
  // sorting and filtering, so per-element listeners would be lost; delegation is not
  const attachListTracking = (root) => {
    root.addEventListener('click', (e) => {
      const path = e.composedPath();

      // deal CTA ("Choose dates"): the auro-button in a table row or stacked mobile card
      const cta = path.find((n) => isElement(n) && isAuroButton(n) && n.getRootNode() === root);
      if (cta) {
        const layout = cta.closest('.desktop-table') ? 'desktop' : cta.closest('.mobile-cards') ? 'mobile' : 'unknown';
        track('deals-cta-click', { cta_text: cta.textContent.trim(), layout: layout });
        return;
      }

      // payment toggle (money/points)
      const toggle = path.find((n) => isElement(n) && n.classList.contains('payment-toggle'));
      if (toggle) {
        setTimeout(() => {
          const active = toggle.querySelector('.active');
          track('deals-payment-toggle', { option: active ? active.textContent.trim().toLowerCase() : 'unknown' });
        }, 0);
        return;
      }

      // sorting: every sortable column header of the desktop table, the destination/price headers of the mobile
      // cards. a header click sorts ascending, a second click on the same header descending (.sort-icon.rotated)
      const header = path.find((n) => isElement(n) && (n.classList.contains('sortable') || n.classList.contains('mobile-header-flight') || n.classList.contains('mobile-header-price')));
      if (header) {
        const sortBy = SORT_COLUMNS[header.id] || (header.classList.contains('mobile-header-flight') ? 'destination' : header.classList.contains('mobile-header-price') ? 'price' : null);
        if (!sortBy) return;
        setTimeout(() => {
          const sortIcon = header.querySelector('.sort-icon');
          const sortDirection = sortIcon && sortIcon.classList.contains('rotated') ? 'desc' : 'asc';
          track('deals-sort', { sort_by: sortBy, sort_direction: sortDirection, layout: header.closest('.desktop-table') ? 'desktop' : 'mobile' });
        }, 0);
      }
    });
    log('tracking clicks on borealis-flight-deal-list');
  };

  // fare class filter checkboxes live in the filter drawer, a sibling of the deal list inside borealis-flight-deals
  const attachFilterTracking = () => {
    getShadowElements([
      { selector: 'borealis-flight-deals[data-testid="borealis-flight-deals"]', hasShadow: true },
      { selector: 'borealis-flight-list-search', hasShadow: true },
      { selector: 'borealis-map-filter-drawer', hasShadow: true },
      { selector: 'auro-drawer-*', hasShadow: false },
      { selector: 'borealis-filter-checkbox-radio', hasShadow: false },
      { selector: 'auro-checkbox-group', hasShadow: true },
    ], 30000)
    .then(([,,,,, filterCheckboxGroup]) => {
      filterCheckboxGroup.addEventListener('change', (e) => {
        const target = e.target;
        setTimeout(() => {
          const checkbox = target.closest('auro-checkbox');
          if (!checkbox) return;
          // current auro-checkbox exposes value/checked as properties; older builds reflected them as attributes
          const filter = checkbox.value || checkbox.getAttribute('value') || checkbox.textContent.trim().split(/\s+/)[0].toLowerCase();
          const checked = typeof checkbox.checked === 'boolean' ? checkbox.checked : checkbox.hasAttribute('checked');
          track('deals-filter-fareclass', { filter: filter, checked: checked });
        }, 0);
      });
      log('tracking fare class filter changes');
    })
    .catch((error) => {
      logerr(error);
    });
  };

  // EXPERIMENT
  // original (control): the current deals page, tracking only. this code sits on the experiment's "control" page;
  // the path check is a second guard so it can never track on the variant page
  if (!/^\/content\/deals\/flights\/?$/.test(window.location.pathname)) {
    log(`not the control page (${window.location.pathname}); no tracking`);
    return;
  }

  const watchedRoots = [];
  const watchList = (list) => {
    if (!list) return;
    if (!list.shadowRoot) {
      // Lit attaches the shadow root on connect; give it a frame if we got here first
      requestAnimationFrame(() => watchList(list));
      return;
    }
    const root = list.shadowRoot;
    if (watchedRoots.indexOf(root) !== -1) return;
    watchedRoots.push(root);
    attachListTracking(root);
    log('watching borealis-flight-deal-list');
  };

  getShadowElements([
    { selector: 'borealis-flight-deals[data-testid="borealis-flight-deals"]', hasShadow: true },
  ], 30000)
  .then(([flightDeals]) => {
    const root = flightDeals.shadowRoot;
    const findList = () => watchList(root.querySelector('borealis-flight-deal-list'));
    findList();
    // the list itself appears once the deals have loaded and may be re-created by view changes
    new MutationObserver(findList).observe(root, { childList: true, subtree: true });
    attachFilterTracking();
  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}]}]}, {"id": "6439474081562624", "name": null, "actions": [{"viewId": "6093637476417536", "changes": [{"dependencies": [], "id": "3ce02495-3ee8-4588-9fb8-9f076bd3456d", "type": "redirect", "dest": "https://www.alaskaair.com/content/deals/flights/variant", "preserveParameters": true, "allowAdditionalRedirect": false}]}, {"viewId": "5685894118637568", "changes": [{"dependencies": [], "id": "d86d8cf2-7b4d-4549-ba51-68b079f19e24", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // element checker
  const waitForElementToExist = (selector, timeoutDuration) => {
    return new Promise((resolve, reject) => {
      const rootDocEl = document.documentElement;
      const element = rootDocEl.querySelector(selector);

      if (element) {
        log(selector + ' found (via query selector)');
        resolve(element);
        return;
      }

      const observer = new MutationObserver(mutations => {
        const targetElement = rootDocEl.querySelector(selector);
        if (targetElement) {
          observer.disconnect();
          clearTimeout(timeoutHandle);
          log(selector + ' found (via observation)');
          resolve(targetElement);
        }
      });
      observer.observe(rootDocEl, { childList: true, subtree: true });

      const timeoutHandle = setTimeout(() => {
        observer.disconnect();
        reject(new Error('Timeout waiting for element: ' + selector));
      }, timeoutDuration);
    });
  };

  // LOGGING
  // silent unless the page has window.optlyConsole: a clean console copied at document start by the debug
  // userscript, or a recorder the test scripts add (rest-api-scripts/browser.js LOG_TRAP). real visitors have
  // neither, so nothing reaches the page's patched console (shopping app, Quantum Metric, AppDynamics)
  const EXPERIMENT = '1670034-deals-page-redirect-v4 / variation-1'; // tags this variation's lines
  const pushLog = (level, msg) => {
    const out = window.optlyConsole;
    if (out && typeof out[level] === 'function') out[level](`[${EXPERIMENT}]`, msg);
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // TRACKING
  // custom events; each must exist in optimizely (project "AlaskaAir.com") to count as a metric. tags match the
  // control page's (original.js) so the arms compare like for like
  const track = (eventName, tags) => {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({ type: 'event', eventName: eventName, tags: tags });
    log(`event ${eventName} ${JSON.stringify(tags)}`);
  };

  // the variant page is a React app with CSS-module class names: "<Component>_<name>__<build hash>". match on the
  // stable "<Component>_<name>__" prefix only; the hash changes with every site build
  const cls = (name) => `[class*="${name}__"]`;
  const text = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim() : '');

  // same breakpoint as the control page's deal list (desktop table above 800px, mobile cards at 800px and below)
  const layout = () => (window.matchMedia('(max-width: 800px)').matches ? 'mobile' : 'desktop');

  // "Sort:" dropdown option label -> deals-sort tags (same sort_by values as the control's column headers)
  const SORT_OPTIONS = [
    { re: /lowest price/i, sort_by: 'price', sort_direction: 'asc' },
    { re: /highest price/i, sort_by: 'price', sort_direction: 'desc' },
    { re: /travel dates/i, sort_by: 'travel_dates', sort_direction: 'asc' },
    { re: /departure/i, sort_by: 'departure', sort_direction: 'asc' },
    { re: /destination/i, sort_by: 'destination', sort_direction: 'asc' },
    { re: /fare class/i, sort_by: 'fare_class', sort_direction: 'asc' }
  ];

  // clicks: deal CTA, money/points toggle, list/cards view toggle. one listener on the deals container instead of one
  // per button: React rebuilds the rows on every sort, filter, "show more" and list/cards switch, so per-element
  // listeners would be lost. capture phase, so it runs before any handler inside the container can stop the event
  const onClick = (e) => {
    const target = e.target instanceof Element ? e.target : null;
    if (!target) return;

    // deal CTA ("Choose dates"): a link in a list row (DealRow) or a card (DealCard)
    const cta = target.closest(`a${cls('DealRow_Action')}, a${cls('DealCard_Action')}`);
    if (cta) {
      track('deals-cta-click', {
        cta_text: text(cta).replace(/\s*→\s*$/, ''),
        layout: layout(),
        view: cta.matches(cls('DealCard_Action')) ? 'cards' : 'list'
      });
      return;
    }

    // money/points toggle; only a click that changes the selection counts
    const paymentButton = target.closest(`${cls('PaymentToggle_Toggle')} button`);
    if (paymentButton) {
      if (paymentButton.getAttribute('aria-pressed') !== 'true') track('deals-payment-toggle', { option: text(paymentButton).toLowerCase() });
      return;
    }

    // list/cards view toggle (variant page only); only a click that changes the view counts
    const viewButton = target.closest(`${cls('ViewToggle_ViewToggle')} button`);
    if (viewButton) {
      if (viewButton.getAttribute('aria-pressed') !== 'true') {
        track('deals-list-cards-toggle', { view: /card/i.test(viewButton.getAttribute('aria-label') || '') ? 'cards' : 'list' });
      }
    }
  };

  // changes: the sort dropdown's radios and the fare class checkboxes in the "Filter deals" panel, which only exist
  // while their panel is open (rendered inside the deals container). `change` only fires when the selection actually
  // changes, so re-picking the current sort is not counted
  const onChange = (e) => {
    const input = e.target instanceof HTMLInputElement ? e.target : null;
    if (!input) return;
    const label = text(input.closest('label') && input.closest('label').querySelector(cls('FilterBar_OptionLabel')));

    if (input.type === 'radio' && input.name === 'flight-deals-sort') {
      const option = SORT_OPTIONS.filter((o) => o.re.test(label))[0];
      if (!option) {
        logerr(`unknown sort option "${label}"`);
        return;
      }
      track('deals-sort', { sort_by: option.sort_by, sort_direction: option.sort_direction, layout: layout() });
      return;
    }

    if (input.type === 'checkbox') {
      const section = input.closest(cls('FilterBar_Section'));
      const heading = section && section.querySelector(cls('FilterBar_SectionHeader'));
      if (!/fare class/i.test(text(heading))) return;
      // "First class" / "Premium" / "Main" / "Saver" -> first / premium / main / saver, the control's filter values
      track('deals-filter-fareclass', { filter: label.split(' ')[0].toLowerCase(), checked: input.checked });
    }
  };

  // EXPERIMENT
  // variation #1: optimizely redirects the control page here (the redirect change sits on the experiment's
  // "control" page). this code sits on the "variant" page and only tracks; the path check is a second guard
  if (!/^\/content\/deals\/flights\/variant\/?$/.test(window.location.pathname)) {
    log(`not the variant page (${window.location.pathname}); no tracking`);
    return;
  }

  // the deals container (toolbar, sort/filter panels, deal list in both views) is rendered once and kept through
  // every sort, filter and view change
  waitForElementToExist('section[class*="FlightDealsNorthstar_Wrapper__"]', 30000)
  .then((deals) => {
    deals.addEventListener('click', onClick, true);
    deals.addEventListener('change', onChange, true);
    log('tracking deals interactions on the variant page');
  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}]}]}], "weightDistributions": [{"entityId": "5260190818238464", "endOfRange": 5000}, {"entityId": "6439474081562624", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4958925101989888"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5685894118637568", "6093637476417536"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "4735246493548544", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "4984257691516928", "name": null, "commitId": "5516679990476800", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "11692073740"], "audienceName": null, "changes": null, "id": "6299355471151104", "integrationSettings": null, "variations": [{"id": "5173455564308480", "name": null, "actions": [{"viewId": "6438676861812736", "changes": []}]}, {"id": "6028364106956800", "name": null, "actions": [{"viewId": "6438676861812736", "changes": [{"config": {"dialog_background_image": "//cdn.optimizely.com/img/10453949094/6ecbcb519a8043e78e933766d320cbe0.png", "perk_one_icon": "https://cdn.optimizely.com/img/10453949094/518849c2702d4388b2a736f252d21701.svg", "cta_button_fine_print": "See if you pre-qualify. It takes 30 seconds and your credit score is not impacted.", "brand": "ha", "cookie_max_age": 7776000, "perk_three_icon": "https://cdn.optimizely.com/img/10453949094/fdaa4313d38d4a19b52ba3d5fe1e55fc.svg", "cta_button_text": "Pre-Qualify Now", "card_image": "https://cdn.optimizely.com/img/10453949094/d2dede6e09534e4ebd2e3aa1d906e77f.png", "pre_title_text": "Earn", "perk_two_text": "Save up to $90 per person roundtrip with a free checked bag and preferred boarding for you and up to six guests on the same reservation", "post_title_text": "+ Get a free checked bag", "title_text": "70,000 bonus points", "cancel_button_text": "No, thanks", "cookie_id": "20260916", "card_image_alt_text": "Atmos Rewards Visa Card", "perk_one_text": "Earn a $99 Companion Fare (plus taxes and fees from $23)", "cta_button_link": "https://secure.bankofamerica.com/apply-now-services/cards-prequal/initialize-prequal?requesttype=CCAPQ&campaignid=4081095&productoffercode=V8&appflow=ICAI&locale=en_US&lobchannelcode=ASK004&genericvariables=861~HAAscentOverlayPQ11.18", "bottom_fine_print": "Online-only. Offer varies elsewhere.", "perk_two_icon": "https://cdn.optimizely.com/img/10453949094/7e9b9a95f47143cfaf05fb9cb3173d36.svg", "cta_button_sr_only_text": "for the Atmos Rewards Card", "perk_three_text": "Earn 3 points for every $1 spent on eligible Alaska Airlines and Hawaiian Airlines purchases"}, "dependencies": [], "name": "Atmos Card Homepage Modal v1.0.0", "type": "widget", "id": "8b3cac50-e15d-45b2-b04f-842b2f6e024d", "widget_id": "5786410731438080"}]}]}], "weightDistributions": [{"entityId": "6028364106956800", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4984257691516928"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6438676861812736"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "6299355471151104", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "5014375747026944", "name": null, "commitId": "5825391334522880", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": null, "changes": null, "id": "6140275653869568", "integrationSettings": null, "variations": [{"id": "5812125992484864", "name": null, "actions": [{"viewId": "6520505082052608", "changes": []}]}, {"id": "5122715894415360", "name": null, "actions": [{"viewId": "6520505082052608", "changes": [{"dependencies": [], "id": "23083e18-9eb6-4aa5-9d35-aae1527bd80c", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // utag data layer checker
  const waitForUniversalDataObject = (properties, maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {
      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const intervalId = setInterval(() => {

        if (typeof window.utag_data !== 'undefined') {
          if (properties && properties.length > 0) {
            const allPropsExist = properties.every(prop =>
              window.utag_data.hasOwnProperty(prop) &&
              window.utag_data[prop] !== undefined
            );
            if (allPropsExist) {
              clearInterval(intervalId);
              resolve(window.utag_data);
            }
          } else {
            clearInterval(intervalId);
            resolve(window.utag_data);
          }
        }

        attempts++;
        if (attempts >= maxAttempts) {
          clearInterval(intervalId);
          reject(new Error('Timeout'));
        }
      }, interval);
    });
  };

  // element finder
  const waitForElementToExist = (selector, timeoutDuration) => {
    return new Promise((resolve, reject) => {
      const rootDocEl = document.documentElement;
      const element = rootDocEl.querySelector(selector);

      if (element) {
        log(selector + ' found (via query selector)');
        resolve(element);
        return;
      }

      const observer = new MutationObserver(mutations => {
        const targetElement = rootDocEl.querySelector(selector);
        if (targetElement) {
          observer.disconnect();
          clearTimeout(timeoutHandle);
          log(selector + ' found (via observation)');
          resolve(targetElement);
        }
      });
      observer.observe(rootDocEl, { childList: true, subtree: true });

      const timeoutHandle = setTimeout(() => {
        observer.disconnect();
        reject(new Error('Timeout waiting for element: ' + selector));
      }, timeoutDuration);
    });
  };

  // element stability checker
  const waitForStableElement = (selector, stableTime = 3000) => {
    return new Promise((resolve) => {
      const element = document.querySelector(selector);
      let timeoutId;

      const observer = new MutationObserver(() => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          observer.disconnect();
          resolve(element);
        }, stableTime);
      });

      observer.observe(element, {
        attributes: true,
        attributeFilter: ['href'],
        childList: true,
        subtree: true
      });

      // Kick off the initial timeout
      timeoutId = setTimeout(() => {
        observer.disconnect();
        resolve(element);
      }, stableTime);
    });
  };

  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            setTimeout(check, 100);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            setTimeout(check, 100);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                setTimeout(waitForShadowRoot, 100);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // node finder
  const findAllNodesMatchingSelector = (node, selector) => {
    let matches = [];

    // self
    if (node.matches && node.matches(selector)) {
      matches.push(node);
    }

    // descendants
    let children = node.children || [];
    for (let child of children) {
      matches.push(...findAllNodesMatchingSelector(child, selector));
    }
    return matches;
  }

  const scanMutationsForSelector = (selector, callback) => {
    return (mutations, observer) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          const selectors = findAllNodesMatchingSelector(node, selector);
          if (selectors.length > 0) {
            callback(selectors);
          }
        });
      });
    }
  };

  // LOGGING
  // silent unless the page has window.optlyConsole: a clean console copied at document start by the debug
  // userscript, or a recorder the test scripts add (rest-api-scripts/browser.js LOG_TRAP). real visitors have
  // neither, so nothing reaches the page's patched console (shopping app, Quantum Metric, AppDynamics)
  const EXPERIMENT = 'third-party-banner-legacy / variation-1'; // tags this variation's lines
  const pushLog = (level, msg) => {
    const out = window.optlyConsole;
    if (out && typeof out[level] === 'function') out[level](`[${EXPERIMENT}]`, msg);
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // EXPERIMENT
  Promise.all([
    waitForOptimizely(10000),
    waitForElementToExist('body', 10000),
    getShadowElements([
      { selector: '.confirmed-reservation-header', hasShadow: false },
    ]),
  ])
  .then(([optly, body, [confirmationHeader]]) => {

    // per-brand copy and links
    const isHA = /hawaiianairlines\.com$/.test(window.location.hostname);
    const brand = isHA
      ? {
          name: 'Hawaiian Airlines',
          staysURL: 'https://hawaiian.poweredbygps.com/Hotels?MDPCID=hawaiian-us.tpd.brand.airconfpage.static.hotel',
          carRentalURL: 'https://www.hawaiianairlines.com/content/ha/car-rental?ptid=191.2'
        }
      : {
          name: 'Alaska Airlines',
          staysURL: 'https://vacations.alaskaair.com/Hotels?MDPCID=AlaskaVacations-en_us.dps.alaskavacations.confirmationtop-hotel_launch.hotel/',
          carRentalURL: 'https://www.alaskaair.com/content/car-rental?ptid=184.2'
        };

    const bannerMarkup = `
      <section class="cc-promo-section" id="confThirdPartyBanner" aria-label="More ways to save with ${brand.name}">

        <div class="cc-more-grid">

          <article class="cc-more-card">
            <div class="cc-more-card__image-wrap">
              <img src="https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/bltef4222899fe507f8/Rentalcarimage" alt="Photo of an SUV driving towards a mountain" width="403" height="120" loading="lazy">
            </div>
            <h3 class="cc-more-card__headline">Hello, savings.</h3>
            <p class="cc-more-card__body">Book car rentals with up to 35% off and 1,250 points with Avis &amp; Budget.</p>
            <div class="cc-more-card__cta-wrap">
              <a class="cc-more-card__cta" href="${brand.carRentalURL}" id="bookRentalCar">
                Rent now
              </a>
            </div>
          </article>

          <article class="cc-more-card">
            <div class="cc-more-card__image-wrap">
              <img src="https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blta259808a8d04cb6e/hotels" alt="Photo of a hotel with a swimming pool and palm trees" width="403" height="120" loading="lazy">
            </div>
            <h3 class="cc-more-card__headline">Book a stay.</h3>
            <p class="cc-more-card__body">Earn or redeem points at almost a million properties worldwide.</p>
            <div class="cc-more-card__cta-wrap">
              <a class="cc-more-card__cta" href="${brand.staysURL}" id="bookStay">
                Book a stay
              </a>
            </div>
          </article>

          <article class="cc-more-card">
            <div class="cc-more-card__image-wrap">
              <img src="https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/bltf2b9de689bb377e7/lyft" alt="Three friends getting into a ride-share car" width="403" height="120" loading="lazy">
            </div>
            <h3 class="cc-more-card__headline">Hail a ride.</h3>
            <p class="cc-more-card__body">Link your Atmos™ Rewards and Lyft accounts to earn points on every ride.</p>
            <div class="cc-more-card__cta-wrap">
              <a class="cc-more-card__cta" href="https://www.alaskalyft.com/start" rel="noopener noreferrer" id="bookRideshare" aria-label="Link accounts — Atmos Rewards and Lyft (opens in new tab)">
                Link accounts
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                </svg>
              </a>
            </div>
          </article>

        </div><!-- /.cc-more-cards -->

      </section><!-- /.cc-more -->
    `;

    confirmationHeader.insertAdjacentHTML('afterend', bannerMarkup);

    // custom conversion events: any CTA (primary) plus one per CTA; keys must match events in the Optimizely project
    const anyClickEvent = 'conf-third-party-banner-click-any';
    const clickEvents = {
      bookStay: 'conf-third-party-banner-click-hotel',
      bookRentalCar: 'conf-third-party-banner-click-car',
      bookRideshare: 'conf-third-party-banner-click-lyft'
    };
    const banner = document.getElementById('confThirdPartyBanner');

    // keep our CTA URLs: a page script rewrites car-rental links to a prefilled vendor deeplink after load.
    // an href that still starts with our URL (e.g. GA's _gl linker param appended) is left alone
    const intendedURLs = new Map(
      Array.from(banner.querySelectorAll('.cc-more-card__cta')).map(a => [a, a.getAttribute('href')])
    );
    const restoreURL = (a) => {
      const url = intendedURLs.get(a);
      if (!url) return;
      const href = a.getAttribute('href') || '';
      if (href.indexOf(url) !== 0) {
        a.setAttribute('href', url);
        log('restored ' + a.id + ' href');
      }
    };
    new MutationObserver((mutations) => mutations.forEach(m => restoreURL(m.target)))
      .observe(banner, { attributes: true, attributeFilter: ['href'], subtree: true });
    // last check before any other click handler sees it
    window.addEventListener('click', (e) => {
      const cta = e.target.closest && e.target.closest('#confThirdPartyBanner .cc-more-card__cta');
      if (cta) restoreURL(cta);
    }, true);

    banner.addEventListener('click', (e) => {
      const cta = e.target.closest('.cc-more-card__cta');
      if (!cta || !clickEvents[cta.id]) return;
      [anyClickEvent, clickEvents[cta.id]].forEach((eventName) => {
        optly.push({ type: 'event', eventName });
        log('event pushed: ' + eventName);
      });
    });

  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}, {"id": "2f2173cd-ed09-40c5-a8b9-58349cb404d4", "type": "append", "selector": "head", "value": "<style>.cc-promo-section {\n  font-family: var(--ds-basic-type-family-body, \"AS Circular\", system-ui, sans-serif);\n  color: var(--ds-basic-color-texticon-default, #2a2a2a);\n  background: var(--ds-basic-color-page-background-default, #ffffff);\n  max-width: 1264px;\n  margin: 0 auto;\n}\n\n/* \u2500\u2500\u2500 Three-up \"more ways\" row (Book a stay / Rent now / Link accounts) \u2500\u2500\u2500 */\n.cc-promo-section .cc-more-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  padding: 0 0 32px;\n}\n\n.cc-promo-section .cc-more-card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  border: 1px solid var(--ds-basic-color-border-subtle, #dddddd);\n  border-radius: 6px;\n  overflow: hidden;\n  padding-bottom: 16px;\n}\n\n.cc-promo-section .cc-more-card__image-wrap {\n  overflow: hidden;\n  aspect-ratio: 403 / 160;\n}\n\n.cc-promo-section .cc-more-card__image-wrap img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.cc-promo-section .cc-more-card__headline {\n  font-family: inherit;\n  font-size: 1.25rem; /* 20px */\n  font-weight: 300;\n  line-height: var(--ds-basic-type-line-height-heading, 1.3);\n  color: var(--ds-basic-color-texticon-default, #2a2a2a);\n  margin: 0;\n  padding: 0 16px;\n}\n\n.cc-promo-section .cc-more-card__body {\n  font-size: 1rem;\n  font-weight: 200;\n  line-height: var(--ds-basic-type-line-height-body, 1.625rem);\n  color: var(--ds-basic-color-texticon-muted, #666767);\n  margin: 0;\n  padding: 0 16px;\n}\n\n/* push the CTA to the bottom of the card so buttons line up when body copy wraps to different lengths */\n.cc-promo-section .cc-more-card__cta-wrap {\n  margin-top: auto;\n  padding-top: 4px;\n  padding: 0 16px;\n}\n\n/* Secondary CTA button (legacy site `.btn.btn-secondary` style); AS blue on both brands */\n.cc-promo-section .cc-more-card__cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 24px;\n  line-height: 20px;\n  background: #ffffff;\n  border: 2px solid #2774ae;\n  color: #2774ae;\n  font-family: inherit;\n  font-size: 14px;\n  /* not bold: the site only ships Latin AS Circular at 300/450, its heavier faces are CJK-only (Noto JP/KR),\n     so bold Latin text falls back to Times, or renders blank on iOS devices */\n  font-weight: 450;\n  -webkit-font-smoothing: antialiased;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;\n}\n\n.cc-promo-section .cc-more-card__cta:hover,\n.cc-promo-section .cc-more-card__cta:focus-visible {\n  background: #f2f2f2;\n  border-color: #00274a;\n  color: #00274a;\n  text-decoration: none;\n  outline: 2px solid #01426a;\n  outline-offset: 2px;\n}\n\n.cc-promo-section .cc-more-card__cta svg {\n  width: 20px;\n  height: 20px;\n  fill: currentColor;\n  flex-shrink: 0;\n}\n\n/* \u2500\u2500\u2500 Responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n@media (max-width: 900px) {\n  .cc-promo-section .cc-more-grid {\n    grid-template-columns: 1fr;\n  }\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "5122715894415360", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5014375747026944"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6520505082052608"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "6140275653869568", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "5047300664328192", "name": null, "commitId": "5798206573903872", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "11692073740"], "audienceName": null, "changes": null, "id": "5648034619457536", "integrationSettings": null, "variations": [{"id": "6249640822046720", "name": null, "actions": [{"viewId": "6394546005737472", "changes": []}]}, {"id": "4522134712614912", "name": null, "actions": [{"viewId": "6394546005737472", "changes": [{"config": {"dialog_background_image": "//cdn.optimizely.com/img/10453949094/fcb112c5a6f54a0bac788d085f1c0102.png", "perk_one_icon": "https://cdn.optimizely.com/img/10453949094/518849c2702d4388b2a736f252d21701.svg", "cta_button_fine_print": "See if you pre-qualify. It takes 30 seconds and your credit score is not impacted.", "brand": "as", "cookie_max_age": 7776000, "perk_three_icon": "https://cdn.optimizely.com/img/10453949094/fdaa4313d38d4a19b52ba3d5fe1e55fc.svg", "cta_button_text": "Pre-Qualify Now", "card_image": "https://cdn.optimizely.com/img/10453949094/d2dede6e09534e4ebd2e3aa1d906e77f.png", "pre_title_text": "Earn", "perk_two_text": "Save up to $90 per person roundtrip with a free checked bag and preferred boarding for you and up to six guests on the same reservation", "post_title_text": "+ Get a free checked bag", "title_text": "70,000 bonus points", "cancel_button_text": "No, thanks", "cookie_id": "20260916", "card_image_alt_text": "Atmos Rewards Visa Card", "perk_one_text": "Earn a $99 Companion Fare (plus taxes and fees from $23)", "cta_button_link": "https://secure.bankofamerica.com/apply-now-services/cards-prequal/initialize-prequal?requesttype=CCAPQ&campaignid=4081095&productoffercode=V8&appflow=USA&locale=en_US&lobchannelcode=ASK003&genericvariables=861~AscentOverlayPQ11.18", "bottom_fine_print": "Online-only. Offer varies elsewhere.", "perk_two_icon": "https://cdn.optimizely.com/img/10453949094/7e9b9a95f47143cfaf05fb9cb3173d36.svg", "cta_button_sr_only_text": "for the Atmos Rewards Card", "perk_three_text": "Earn 3 points for every $1 spent on eligible Alaska Airlines and Hawaiian Airlines purchases"}, "dependencies": [], "name": "Atmos Card Homepage Modal v1.0.0", "type": "widget", "id": "d83d2bf2-0208-4b09-96dc-c8fe52b258e2", "widget_id": "5786410731438080"}]}]}], "weightDistributions": [{"entityId": "4522134712614912", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5047300664328192"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6394546005737472"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "5648034619457536", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "5213014849224704", "name": null, "commitId": "6715909805441024", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "10680034899"], "audienceName": null, "changes": null, "id": "4962346330750976", "integrationSettings": null, "variations": [{"id": "6310544685137920", "name": null, "actions": [{"viewId": "5565482665771008", "changes": [{"id": "9CE064E4-62AD-49D1-9AE7-CC35CE773E0A", "src": "/actions/d8d354a0a8a2377d4125cf39b5864b18960be3d3602368b112013338bd5e1f89.js", "dependencies": [], "type": "attribute"}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5213014849224704"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5565482665771008"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5370714218299392", "name": null, "commitId": "6627396416176128", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "6437458569592832", "11692073740"], "audienceName": null, "changes": null, "id": "4667026776522752", "integrationSettings": null, "variations": [{"id": "6496614125142016", "name": null, "actions": [{"viewId": "6058696189411328", "changes": [{"dependencies": [], "id": "ce6bb971-e7d1-4dd9-8f56-cbfa026bbfee", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            requestAnimationFrame(check);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            requestAnimationFrame(check);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                requestAnimationFrame(waitForShadowRoot);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // LOGGING
  // silent buffer shared by every variation on the page; inspect in DevTools by evaluating:  optlyLogs
  // (copy(optlyLogs) puts it on the clipboard as JSON; a Live Expression on optlyLogs.at(-1) watches it live)
  const EXPERIMENT = 'signin-toast-v4 / original';
  const logs = (window.optlyLogs = window.optlyLogs || []);
  const pushLog = (level, msg) => {
    const entry = { t: Math.round(performance.now()), exp: EXPERIMENT, level: level, msg: msg };
    if (msg instanceof Error) entry.text = msg.stack || msg.message;
    logs.push(entry);
    if (logs.length > 100) logs.shift();
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // cookie helpers
  const cookieExists = (cookieName) => {
    return document.cookie.split('; ').some(cookie => cookie.startsWith(cookieName + '='));
  };

  const setCookie = (cookieName, value, maxAgeDays) => {
    const maxAgeSeconds = maxAgeDays * 24 * 60 * 60;
    document.cookie = cookieName + '=' + value + '; max-age=' + maxAgeSeconds + '; path=/; SameSite=Lax';
  };

  // EXPERIMENT
  // set once the toast has been shown so the visitor only ever sees the offer once
  const toastShownCookie = 'signin-toast-shown';
  const toastShownCookieDays = 7;

  Promise.all([
    waitForOptimizely(10000),
    getShadowElements([
      { selector: 'body', hasShadow: false },
      { selector: 'borealis-header', hasShadow: true },
      { selector: 'borealis-prompt', hasShadow: true },
    ]),
  ])
  .then(([optly, [body, borealisHeader, borealisPrompt]]) => {

    // visitor has already seen the toast on a previous visit; don't show it again
    if (cookieExists(toastShownCookie)) {
      log('toast already shown, exiting');
      return;
    }

    const newStyles = new CSSStyleSheet();
    newStyles.replaceSync(`
      borealis-prompt {
        transition: opacity 0.5s ease;
      }

      @media (min-width: 770px) {
        borealis-prompt {
          top: 12px !important;
        }
      }
    `);

    borealisHeader.shadowRoot.adoptedStyleSheets = [
      ...borealisHeader.shadowRoot.adoptedStyleSheets,
      newStyles
    ];

    const displayToast = () => {
      borealisHeader.data.prompt_data.show = true;
      borealisHeader.update();

      setCookie(toastShownCookie, '1', toastShownCookieDays);

      window.optimizely.push({
        type: 'event',
        eventName: 'signin_toast_display',
      });

      getShadowElements([
        { selector: 'body', hasShadow: false },
        { selector: 'borealis-header', hasShadow: true },
        { selector: 'borealis-prompt', hasShadow: true },
        { selector: '.toast-actions', hasShadow: false },
      ])
      .then(([body, borealisHeader, borealisPrompt, toastActions]) => {
        // the header component binds the dialog's aria-label to prompt_data.title, which the site leaves empty,
        // so screen readers announce an unnamed dialog (Lighthouse: aria-dialog-name). name it with the toast copy;
        // setting prompt_data.title instead would render a visible heading
        const dialog = borealisPrompt.shadowRoot.querySelector('.prompt[role="dialog"]');
        if (dialog && !dialog.getAttribute('aria-label')) {
          const promptData = borealisHeader.data && borealisHeader.data.prompt_data;
          dialog.setAttribute('aria-label', (promptData && promptData.content) || 'Sign in for a personalized experience.');
        }

        const primaryButton = toastActions.querySelector('.action-button[variant="primary"]');
        const secondaryButton = toastActions.querySelector('.action-button[variant="secondary"]');

        primaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_primary_click',
          });
        });

        secondaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_secondary_click',
          });
        });
      })
      .catch((error) => {
        logerr(error);
      });
    };

    const hideToast = () => {
      borealisPrompt.style.opacity = '0';
      setTimeout(() => {
        borealisHeader.data.prompt_data.show = false;
        borealisHeader.update();
      }, 500);
    };

    setTimeout(() => {
      displayToast();
    }, 2000);

  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}]}]}, {"id": "6487650796830720", "name": null, "actions": [{"viewId": "6058696189411328", "changes": [{"dependencies": [], "id": "56f6c139-cd4b-4a52-97e5-5915ef68ac0e", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            requestAnimationFrame(check);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            requestAnimationFrame(check);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                requestAnimationFrame(waitForShadowRoot);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // LOGGING
  // silent buffer shared by every variation on the page; inspect in DevTools by evaluating:  optlyLogs
  // (copy(optlyLogs) puts it on the clipboard as JSON; a Live Expression on optlyLogs.at(-1) watches it live)
  const EXPERIMENT = 'signin-toast-v4 / variation-1';
  const logs = (window.optlyLogs = window.optlyLogs || []);
  const pushLog = (level, msg) => {
    const entry = { t: Math.round(performance.now()), exp: EXPERIMENT, level: level, msg: msg };
    if (msg instanceof Error) entry.text = msg.stack || msg.message;
    logs.push(entry);
    if (logs.length > 100) logs.shift();
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // cookie helpers
  const cookieExists = (cookieName) => {
    return document.cookie.split('; ').some(cookie => cookie.startsWith(cookieName + '='));
  };

  const setCookie = (cookieName, value, maxAgeDays) => {
    const maxAgeSeconds = maxAgeDays * 24 * 60 * 60;
    document.cookie = cookieName + '=' + value + '; max-age=' + maxAgeSeconds + '; path=/; SameSite=Lax';
  };

  // EXPERIMENT
  // set once the toast has been shown so the visitor only ever sees the offer once
  const toastShownCookie = 'signin-toast-shown';
  const toastShownCookieDays = 7;

  Promise.all([
    waitForOptimizely(10000),
    getShadowElements([
      { selector: 'body', hasShadow: false },
      { selector: 'borealis-header', hasShadow: true },
      { selector: 'borealis-prompt', hasShadow: true },
    ]),
  ])
  .then(([optly, [body, borealisHeader, borealisPrompt]]) => {

    // visitor has already seen the toast on a previous visit; don't show it again
    if (cookieExists(toastShownCookie)) {
      log('toast already shown, exiting');
      return;
    }

    const newStyles = new CSSStyleSheet();
    newStyles.replaceSync(`
      borealis-prompt {
        transition: opacity 0.5s ease;
      }

      @media (min-width: 770px) {
        borealis-prompt {
          top: 12px !important;
        }
      }
    `);

    borealisHeader.shadowRoot.adoptedStyleSheets = [
      ...borealisHeader.shadowRoot.adoptedStyleSheets,
      newStyles
    ];

    const displayToast = () => {
      borealisHeader.data.prompt_data.show = true;
      borealisHeader.update();

      setCookie(toastShownCookie, '1', toastShownCookieDays);

      window.optimizely.push({
        type: 'event',
        eventName: 'signin_toast_display',
      });

      getShadowElements([
        { selector: 'body', hasShadow: false },
        { selector: 'borealis-header', hasShadow: true },
        { selector: 'borealis-prompt', hasShadow: true },
        { selector: '.toast-actions', hasShadow: false },
      ])
      .then(([body, borealisHeader, borealisPrompt, toastActions]) => {
        // the header component binds the dialog's aria-label to prompt_data.title, which the site leaves empty,
        // so screen readers announce an unnamed dialog (Lighthouse: aria-dialog-name). name it with the toast copy;
        // setting prompt_data.title instead would render a visible heading
        const dialog = borealisPrompt.shadowRoot.querySelector('.prompt[role="dialog"]');
        if (dialog && !dialog.getAttribute('aria-label')) {
          const promptData = borealisHeader.data && borealisHeader.data.prompt_data;
          dialog.setAttribute('aria-label', (promptData && promptData.content) || 'Sign in for a personalized experience.');
        }

        const primaryButton = toastActions.querySelector('.action-button[variant="primary"]');
        const secondaryButton = toastActions.querySelector('.action-button[variant="secondary"]');

        primaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_primary_click',
          });
        });

        secondaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_secondary_click',
          });
        });
      })
      .catch((error) => {
        logerr(error);
      });
    };

    const hideToast = () => {
      borealisPrompt.style.opacity = '0';
      setTimeout(() => {
        borealisHeader.data.prompt_data.show = false;
        borealisHeader.update();
      }, 500);
    };

    setTimeout(() => {
      displayToast();
    }, 2000);

    setTimeout(() => {
      hideToast();
    }, 14000); // 14-2=12 seconds after displaying

  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}]}]}], "weightDistributions": [{"entityId": "6496614125142016", "endOfRange": 5000}, {"entityId": "6487650796830720", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5370714218299392"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6058696189411328"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "4667026776522752", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "5411214082179072", "name": null, "commitId": "5376179379634176", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "6437458569592832", "11692073740"], "audienceName": null, "changes": null, "id": "6217718628614144", "integrationSettings": null, "variations": [{"id": "6379649767309312", "name": null, "actions": [{"viewId": "5974164035600384", "changes": [{"dependencies": [], "id": "b4300f24-a491-433e-84f7-0ba6a75d236e", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            requestAnimationFrame(check);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            requestAnimationFrame(check);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                requestAnimationFrame(waitForShadowRoot);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // LOGGING
  // silent buffer shared by every variation on the page; inspect in DevTools by evaluating:  optlyLogs
  // (copy(optlyLogs) puts it on the clipboard as JSON; a Live Expression on optlyLogs.at(-1) watches it live)
  const EXPERIMENT = 'signin-toast-v4 / original';
  const logs = (window.optlyLogs = window.optlyLogs || []);
  const pushLog = (level, msg) => {
    const entry = { t: Math.round(performance.now()), exp: EXPERIMENT, level: level, msg: msg };
    if (msg instanceof Error) entry.text = msg.stack || msg.message;
    logs.push(entry);
    if (logs.length > 100) logs.shift();
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // cookie helpers
  const cookieExists = (cookieName) => {
    return document.cookie.split('; ').some(cookie => cookie.startsWith(cookieName + '='));
  };

  const setCookie = (cookieName, value, maxAgeDays) => {
    const maxAgeSeconds = maxAgeDays * 24 * 60 * 60;
    document.cookie = cookieName + '=' + value + '; max-age=' + maxAgeSeconds + '; path=/; SameSite=Lax';
  };

  // EXPERIMENT
  // set once the toast has been shown so the visitor only ever sees the offer once
  const toastShownCookie = 'signin-toast-shown';
  const toastShownCookieDays = 7;

  Promise.all([
    waitForOptimizely(10000),
    getShadowElements([
      { selector: 'body', hasShadow: false },
      { selector: 'borealis-header', hasShadow: true },
      { selector: 'borealis-prompt', hasShadow: true },
    ]),
  ])
  .then(([optly, [body, borealisHeader, borealisPrompt]]) => {

    // visitor has already seen the toast on a previous visit; don't show it again
    if (cookieExists(toastShownCookie)) {
      log('toast already shown, exiting');
      return;
    }

    const newStyles = new CSSStyleSheet();
    newStyles.replaceSync(`
      borealis-prompt {
        transition: opacity 0.5s ease;
      }

      @media (min-width: 770px) {
        borealis-prompt {
          top: 12px !important;
        }
      }
    `);

    borealisHeader.shadowRoot.adoptedStyleSheets = [
      ...borealisHeader.shadowRoot.adoptedStyleSheets,
      newStyles
    ];

    const displayToast = () => {
      borealisHeader.data.prompt_data.show = true;
      borealisHeader.update();

      setCookie(toastShownCookie, '1', toastShownCookieDays);

      window.optimizely.push({
        type: 'event',
        eventName: 'signin_toast_display',
      });

      getShadowElements([
        { selector: 'body', hasShadow: false },
        { selector: 'borealis-header', hasShadow: true },
        { selector: 'borealis-prompt', hasShadow: true },
        { selector: '.toast-actions', hasShadow: false },
      ])
      .then(([body, borealisHeader, borealisPrompt, toastActions]) => {
        // the header component binds the dialog's aria-label to prompt_data.title, which the site leaves empty,
        // so screen readers announce an unnamed dialog (Lighthouse: aria-dialog-name). name it with the toast copy;
        // setting prompt_data.title instead would render a visible heading
        const dialog = borealisPrompt.shadowRoot.querySelector('.prompt[role="dialog"]');
        if (dialog && !dialog.getAttribute('aria-label')) {
          const promptData = borealisHeader.data && borealisHeader.data.prompt_data;
          dialog.setAttribute('aria-label', (promptData && promptData.content) || 'Sign in for a personalized experience.');
        }

        const primaryButton = toastActions.querySelector('.action-button[variant="primary"]');
        const secondaryButton = toastActions.querySelector('.action-button[variant="secondary"]');

        primaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_primary_click',
          });
        });

        secondaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_secondary_click',
          });
        });
      })
      .catch((error) => {
        logerr(error);
      });
    };

    const hideToast = () => {
      borealisPrompt.style.opacity = '0';
      setTimeout(() => {
        borealisHeader.data.prompt_data.show = false;
        borealisHeader.update();
      }, 500);
    };

    setTimeout(() => {
      displayToast();
    }, 2000);

  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}]}]}, {"id": "6654322841223168", "name": null, "actions": [{"viewId": "5974164035600384", "changes": [{"dependencies": [], "id": "448ec112-70e7-4907-ae53-04d003118577", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            requestAnimationFrame(check);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            requestAnimationFrame(check);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                requestAnimationFrame(waitForShadowRoot);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // LOGGING
  // silent buffer shared by every variation on the page; inspect in DevTools by evaluating:  optlyLogs
  // (copy(optlyLogs) puts it on the clipboard as JSON; a Live Expression on optlyLogs.at(-1) watches it live)
  const EXPERIMENT = 'signin-toast-v4 / variation-1';
  const logs = (window.optlyLogs = window.optlyLogs || []);
  const pushLog = (level, msg) => {
    const entry = { t: Math.round(performance.now()), exp: EXPERIMENT, level: level, msg: msg };
    if (msg instanceof Error) entry.text = msg.stack || msg.message;
    logs.push(entry);
    if (logs.length > 100) logs.shift();
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // cookie helpers
  const cookieExists = (cookieName) => {
    return document.cookie.split('; ').some(cookie => cookie.startsWith(cookieName + '='));
  };

  const setCookie = (cookieName, value, maxAgeDays) => {
    const maxAgeSeconds = maxAgeDays * 24 * 60 * 60;
    document.cookie = cookieName + '=' + value + '; max-age=' + maxAgeSeconds + '; path=/; SameSite=Lax';
  };

  // EXPERIMENT
  // set once the toast has been shown so the visitor only ever sees the offer once
  const toastShownCookie = 'signin-toast-shown';
  const toastShownCookieDays = 7;

  Promise.all([
    waitForOptimizely(10000),
    getShadowElements([
      { selector: 'body', hasShadow: false },
      { selector: 'borealis-header', hasShadow: true },
      { selector: 'borealis-prompt', hasShadow: true },
    ]),
  ])
  .then(([optly, [body, borealisHeader, borealisPrompt]]) => {

    // visitor has already seen the toast on a previous visit; don't show it again
    if (cookieExists(toastShownCookie)) {
      log('toast already shown, exiting');
      return;
    }

    const newStyles = new CSSStyleSheet();
    newStyles.replaceSync(`
      borealis-prompt {
        transition: opacity 0.5s ease;
      }

      @media (min-width: 770px) {
        borealis-prompt {
          top: 12px !important;
        }
      }
    `);

    borealisHeader.shadowRoot.adoptedStyleSheets = [
      ...borealisHeader.shadowRoot.adoptedStyleSheets,
      newStyles
    ];

    const displayToast = () => {
      borealisHeader.data.prompt_data.show = true;
      borealisHeader.update();

      setCookie(toastShownCookie, '1', toastShownCookieDays);

      window.optimizely.push({
        type: 'event',
        eventName: 'signin_toast_display',
      });

      getShadowElements([
        { selector: 'body', hasShadow: false },
        { selector: 'borealis-header', hasShadow: true },
        { selector: 'borealis-prompt', hasShadow: true },
        { selector: '.toast-actions', hasShadow: false },
      ])
      .then(([body, borealisHeader, borealisPrompt, toastActions]) => {
        // the header component binds the dialog's aria-label to prompt_data.title, which the site leaves empty,
        // so screen readers announce an unnamed dialog (Lighthouse: aria-dialog-name). name it with the toast copy;
        // setting prompt_data.title instead would render a visible heading
        const dialog = borealisPrompt.shadowRoot.querySelector('.prompt[role="dialog"]');
        if (dialog && !dialog.getAttribute('aria-label')) {
          const promptData = borealisHeader.data && borealisHeader.data.prompt_data;
          dialog.setAttribute('aria-label', (promptData && promptData.content) || 'Sign in for a personalized experience.');
        }

        const primaryButton = toastActions.querySelector('.action-button[variant="primary"]');
        const secondaryButton = toastActions.querySelector('.action-button[variant="secondary"]');

        primaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_primary_click',
          });
        });

        secondaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_secondary_click',
          });
        });
      })
      .catch((error) => {
        logerr(error);
      });
    };

    const hideToast = () => {
      borealisPrompt.style.opacity = '0';
      setTimeout(() => {
        borealisHeader.data.prompt_data.show = false;
        borealisHeader.update();
      }, 500);
    };

    setTimeout(() => {
      displayToast();
    }, 2000);

    setTimeout(() => {
      hideToast();
    }, 14000); // 14-2=12 seconds after displaying

  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}]}]}], "weightDistributions": [{"entityId": "6379649767309312", "endOfRange": 5000}, {"entityId": "6654322841223168", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5411214082179072"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5974164035600384"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "6217718628614144", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "5735630829780992", "name": null, "commitId": "6192723328237568", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "6160439871012864"], "audienceName": null, "changes": null, "id": "4873411095166976", "integrationSettings": null, "variations": [{"id": "5999311002009600", "name": null, "actions": []}, {"id": "4902710019883008", "name": null, "actions": [{"viewId": "4554635418009600", "changes": []}]}], "weightDistributions": [{"entityId": "5999311002009600", "endOfRange": 5000}, {"entityId": "4902710019883008", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5735630829780992"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["4554635418009600"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5796561987305472", "name": null, "commitId": "4896841836265472", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "10680034899"], "audienceName": null, "changes": null, "id": "5429462811017216", "integrationSettings": null, "variations": [{"id": "5949214352474112", "name": null, "actions": [{"viewId": "5627132506800128", "changes": [{"dependencies": [], "id": "26de1c86-9721-426b-9766-8b79feb78b9d", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // original/unpatched functions (ignore vendor monkeypatches and polyfills in this scope)
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.documentElement.appendChild(iframe);
  const Promise = iframe.contentWindow.Promise;
  const console = iframe.contentWindow.console;

  // inject auro asset
  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-hyperlink@latest/+esm';
  document.head.appendChild(script);

  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            setTimeout(check, 100);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            setTimeout(check, 100);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                setTimeout(waitForShadowRoot, 100);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // quiet logs
  const log = (msg) => {
    if (localStorage.getItem('view_quiet_logs') === 'true') {
      console.log(msg);
    }
  };

  const logerr = (msg) => {
    if (localStorage.getItem('view_quiet_logs') === 'true') {
      console.error(msg);
    }
  };

  // EXPERIMENT
  Promise.all([
    waitForOptimizely(10000),
    getShadowElements([
      { selector: '[data-renderid="ExpandedBookingWidget"]', hasShadow: false },
    ]),
    customElements.whenDefined('auro-hyperlink'),
  ])
  .then(([optly, [bookingWidget]]) => {

    // TRACKING

    // watch scroll position and fire once the bottom of the booking widget
    const scrollThresholdPx = 150;
    if ('IntersectionObserver' in window) {
      const bookingWidgetScrollObserver = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (!entry) return;

        const isPastThreshold = !entry.isIntersecting && entry.boundingClientRect.bottom <= scrollThresholdPx;
        if (!isPastThreshold) return;

        optly.push({
          type: 'event',
          eventName: 'below_fold_content_scrolled_into_view',
        });

        bookingWidgetScrollObserver.disconnect();
      }, { rootMargin: `-${scrollThresholdPx}px 0px 0px 0px`, threshold: 0 });

      bookingWidgetScrollObserver.observe(bookingWidget);
    }

    // custom event for Alaska Vacations teaser card
    vacationCardLink.addEventListener('click', () => {
      optly.push({
        type: 'event',
        eventName: 'journey_grid_alaska_vacations_clicked',
      });
    });

  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}]}]}, {"id": "5992412764438528", "name": null, "actions": [{"viewId": "5627132506800128", "changes": [{"dependencies": [], "id": "2ebc42cb-1d66-4b44-9af6-2c5f5cec7355", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // original/unpatched functions (ignore vendor monkeypatches and polyfills in this scope)
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.documentElement.appendChild(iframe);
  const Promise = iframe.contentWindow.Promise;
  const console = iframe.contentWindow.console;

  // inject auro asset
  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-hyperlink@latest/+esm';
  document.head.appendChild(script);

  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            setTimeout(check, 100);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            setTimeout(check, 100);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                setTimeout(waitForShadowRoot, 100);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // quiet logs
  const log = (msg) => {
    if (localStorage.getItem('view_quiet_logs') === 'true') {
      console.log(msg);
    }
  };

  const logerr = (msg) => {
    if (localStorage.getItem('view_quiet_logs') === 'true') {
      console.error(msg);
    }
  };

  const setupCarousel = (carouselElement, carouselConfig = {}, optly) => {
    if (!carouselElement) return;

    const trackCarouselNavEvent = (eventName, tags) => {
      if (!optly) return;
      optly.push(tags ? { type: 'event', eventName, tags } : { type: 'event', eventName });
    };

    carouselElement.style.setProperty('--autoplay-interval', `${carouselConfig.autoplayInterval}ms`);
    carouselElement.style.setProperty('--slide-transition-duration', `${Number(carouselConfig.slideTransitionDuration)}ms`);
    carouselElement.style.setProperty('--slide-transition-easing', carouselConfig.slideTransitionEasing);

    const cardsTrack = carouselElement.querySelector('.cards');
    const viewport = carouselElement.querySelector('.viewport');
    const pagination = carouselElement.querySelector('.pagination');
    const pageDots = Array.from(carouselElement.querySelectorAll('.page-dot'));
    const playButton = carouselElement.querySelector('#play-button');
    const liveRegion = carouselElement.querySelector('.carousel-live-region');

    if (!cardsTrack || pageDots.length === 0) return;

    const realSlides = Array.from(cardsTrack.querySelectorAll('.carousel-card'));
    if (realSlides.length === 0) return;

    const realSlideCount = realSlides.length;
    const shouldWrapVisually = realSlideCount > 1;
    const edgeCloneCount = shouldWrapVisually ? Math.min(2, realSlideCount) : 0;

    for (let i = 0; i < realSlides.length; i++) {
      realSlides[i].setAttribute('data-real-index', String(i));
    }

    // `auro-hyperlink` renders its actual anchor inside a shadow root, so tabindex="-1"
    // on the host element alone does not stop that internal anchor from being tabbed to.
    // Include it explicitly and pair tabindex with `inert` (which does reach into shadow DOM)
    // so out-of-view slide CTAs are truly removed from the tab order.
    const FOCUSABLE_SELECTOR = 'a, button, input, select, textarea, auro-hyperlink, [tabindex]';

    const createEdgeClone = (slide, cloneLabel) => {
      const clone = slide.cloneNode(true);
      clone.classList.add('is-clone');
      clone.removeAttribute('id');
      clone.setAttribute('aria-hidden', 'true');
      clone.setAttribute('data-clone', cloneLabel);

      const focusableElements = clone.querySelectorAll(FOCUSABLE_SELECTOR);
      for (const element of focusableElements) {
        element.setAttribute('tabindex', '-1');
        element.inert = true;
      }

      return clone;
    };

    if (shouldWrapVisually) {
      const leadingSlides = realSlides.slice(-edgeCloneCount);
      const trailingSlides = realSlides.slice(0, edgeCloneCount);

      for (let i = leadingSlides.length - 1; i >= 0; i--) {
        const slide = leadingSlides[i];
        cardsTrack.insertBefore(createEdgeClone(slide, 'leading'), cardsTrack.firstChild);
      }

      for (const slide of trailingSlides) {
        cardsTrack.appendChild(createEdgeClone(slide, 'trailing'));
      }
    }

    let currentIndex = 0;
    let trackIndex = shouldWrapVisually ? edgeCloneCount : 0;
    let autoplayTimerId = null;
    let shouldResumeAutoplayOnFocusLeave = false;
    let shouldResumeAutoplayOnTouchEnd = false;
    let isCarouselInView = false;
    const prefersReducedMotion = typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let isAutoplayEnabled = prefersReducedMotion
      ? false
      : (typeof carouselConfig.autoplayOnInit !== 'undefined' ? carouselConfig.autoplayOnInit : true);

    const updatePlayButtonState = () => {
      if (!playButton) return;

      const isAutoplaying = Boolean(autoplayTimerId);
      playButton.setAttribute('data-state', isAutoplaying ? 'pause' : 'play');
      playButton.setAttribute('aria-pressed', isAutoplaying ? 'true' : 'false');
      playButton.setAttribute('aria-label', isAutoplaying ? 'Pause carousel' : 'Play carousel');
    };

    // Screen reader users can't control auto-rotation the way they can a manual
    // next/previous action, so the live region must go quiet while rotating and
    // only announce slide changes once rotation is stopped (APG carousel pattern).
    const updateLiveRegionMode = () => {
      if (!liveRegion) return;
      liveRegion.setAttribute('aria-live', autoplayTimerId ? 'off' : 'polite');
    };

    const updateSlideA11y = () => {
      for (let i = 0; i < realSlides.length; i++) {
        const isActive = i === currentIndex;
        const slide = realSlides[i];
        slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');

        const focusableInSlide = slide.querySelectorAll(FOCUSABLE_SELECTOR);
        for (const element of focusableInSlide) {
          if (isActive) {
            const originalTabindex = element.getAttribute('data-carousel-original-tabindex');
            if (originalTabindex === null) {
              element.removeAttribute('tabindex');
            } else {
              element.setAttribute('tabindex', originalTabindex);
            }
            element.inert = false;
            continue;
          }

          if (!element.hasAttribute('data-carousel-original-tabindex')) {
            const existingTabindex = element.getAttribute('tabindex');
            if (existingTabindex === null) {
              element.setAttribute('data-carousel-original-tabindex', '');
            } else {
              element.setAttribute('data-carousel-original-tabindex', existingTabindex);
            }
          }

          // Setting `inert` on a focused element (e.g. an autoplay tick deactivating
          // the slide the user just tabbed into) forces the browser to blur it. If we
          // don't redirect focus ourselves first, it falls back to <body> and the next
          // Tab press restarts from the top of the page instead of continuing naturally.
          if (viewport && document.activeElement === element) {
            viewport.focus();
          }

          element.setAttribute('tabindex', '-1');
          element.inert = true;
        }
      }
    };

    const updatePeekClasses = () => {
      const trackSlides = Array.from(cardsTrack.querySelectorAll('.carousel-card'));

      for (const slide of trackSlides) {
        slide.classList.remove('is-current-track', 'is-peek');
      }

      const currentTrackSlide = trackSlides[trackIndex];
      if (currentTrackSlide) {
        currentTrackSlide.classList.add('is-current-track');
      }

      const previousTrackSlide = trackSlides[trackIndex - 1];
      if (previousTrackSlide) {
        previousTrackSlide.classList.add('is-peek');
      }

      const nextTrackSlide = trackSlides[trackIndex + 1];
      if (nextTrackSlide) {
        nextTrackSlide.classList.add('is-peek');
      }
    };

    const updatePageDotA11y = () => {
      for (let i = 0; i < pageDots.length; i++) {
        const isActive = i === currentIndex;
        pageDots[i].setAttribute('tabindex', isActive ? '0' : '-1');
      }
    };

    // Builds the full spoken summary for a slide (title, description, fine print)
    // so screen reader users get the complete card content in one announcement,
    // whether that's read via the live region or via aria-describedby on focus.
    const getSlideSummaryText = (index) => {
      const activeSlide = realSlides[index];
      if (!activeSlide) return '';

      const getText = (selector) => {
        const el = activeSlide.querySelector(selector);
        return el ? el.textContent.trim() : '';
      };

      const title = getText('.title');
      const description = getText('.description');
      const finePrint = getText('.fine-print');

      const parts = [`Slide ${index + 1} of ${realSlideCount}`, title, description, finePrint].filter(Boolean);
      return parts.join('. ');
    };

    const updateSlideSummary = () => {
      if (!liveRegion) return;
      liveRegion.textContent = getSlideSummaryText(currentIndex);
    };

    const navigateToSlide = (index, options = {}) => {
      const { animate = true, userInitiated = false } = options;
      goToSlide(index, animate);

      if (userInitiated) {
        updateSlideSummary();

        if (autoplayTimerId) {
          stopAutoplay();
          startAutoplay();
        }
      }
    };

    const updateProgressAnimation = () => {
      carouselElement.classList.remove('is-autoplaying');
      if (!autoplayTimerId) return;

      // force reflow so the active dot progress animation restarts from 0
      void carouselElement.offsetWidth;
      carouselElement.classList.add('is-autoplaying');
    };

    const getSlideOffset = () => {
      const firstSlide = cardsTrack.querySelector('.carousel-card');
      if (!firstSlide) return 0;

      const cardsTrackStyles = window.getComputedStyle(cardsTrack);
      const gap = parseFloat(cardsTrackStyles.columnGap || cardsTrackStyles.gap || '0');
      return firstSlide.getBoundingClientRect().width + gap;
    };

    const render = (animate = true) => {
      cardsTrack.classList.toggle('no-transition', !animate);

      const offset = getSlideOffset() * trackIndex;
      cardsTrack.style.transform = `translate3d(${-offset}px, 0, 0)`;

      for (let i = 0; i < pageDots.length; i++) {
        const isActive = i === currentIndex;
        pageDots[i].classList.toggle('is-active', isActive);
        pageDots[i].setAttribute('aria-selected', isActive ? 'true' : 'false');
      }

      updatePeekClasses();
      updatePageDotA11y();
      updateSlideA11y();
      updateSlideSummary();
    };

    const goToSlide = (index, animate = true) => {
      if (realSlideCount === 0) return;

      const wrappedIndex = (index + realSlideCount) % realSlideCount;
      const previousIndex = currentIndex;
      currentIndex = wrappedIndex;

      if (!shouldWrapVisually) {
        trackIndex = wrappedIndex;
        render(animate);
        return;
      }

      if (previousIndex === realSlideCount - 1 && wrappedIndex === 0) {
        trackIndex = realSlideCount + edgeCloneCount;
      } else if (previousIndex === 0 && wrappedIndex === realSlideCount - 1) {
        trackIndex = edgeCloneCount - 1;
      } else {
        trackIndex = wrappedIndex + edgeCloneCount;
      }

      render(animate);
    };

    const nextSlide = () => {
      goToSlide(currentIndex + 1);
      updateProgressAnimation();
    };

    const syncFromCloneIfNeeded = () => {
      if (!shouldWrapVisually) return;

      if (trackIndex < edgeCloneCount) {
        trackIndex += realSlideCount;
        render(false);
        return;
      }

      if (trackIndex >= realSlideCount + edgeCloneCount) {
        trackIndex -= realSlideCount;
        render(false);
      }
    };

    const startAutoplay = () => {
      if (autoplayTimerId || pageDots.length < 2) return;
      if (!isAutoplayEnabled || !isCarouselInView) return;

      autoplayTimerId = setInterval(nextSlide, carouselConfig.autoplayInterval || 5000);
      updatePlayButtonState();
      updateLiveRegionMode();

      updateProgressAnimation();
    };

    const stopAutoplay = () => {
      if (autoplayTimerId) {
        clearInterval(autoplayTimerId);
        autoplayTimerId = null;
      }
      updatePlayButtonState();
      updateLiveRegionMode();

      updateProgressAnimation();
    };

    for (let i = 0; i < pageDots.length; i++) {
      pageDots[i].addEventListener('click', () => {
        const currentSlideIndex = currentIndex + 1;
        navigateToSlide(i, { userInitiated: true });
        trackCarouselNavEvent('homepage_carousel_dot_clicked', {
          current_slide_index: currentSlideIndex,
          dot_index: i + 1,
        });
      });

      pageDots[i].addEventListener('keydown', (event) => {
        let nextIndex = null;

        if (event.key === 'ArrowRight') {
          nextIndex = (i + 1) % realSlideCount;
        } else if (event.key === 'ArrowLeft') {
          nextIndex = (i - 1 + realSlideCount) % realSlideCount;
        } else if (event.key === 'Home') {
          nextIndex = 0;
        } else if (event.key === 'End') {
          nextIndex = realSlideCount - 1;
        }

        if (nextIndex === null) return;

        event.preventDefault();
        navigateToSlide(nextIndex, { userInitiated: true });
        pageDots[nextIndex].focus();
      });
    }

    if (viewport) {
      let touchStartX = 0;
      let touchStartY = 0;
      let touchCurrentX = 0;
      let touchCurrentY = 0;

      viewport.addEventListener('focusin', (event) => {
        const focusedElement = event.target;
        if (!(focusedElement instanceof HTMLElement)) return;

        // Pause autoplay for keyboard-style focus, not pointer/click focus.
        if (!focusedElement.matches(':focus-visible')) return;

        shouldResumeAutoplayOnFocusLeave = Boolean(autoplayTimerId);
        stopAutoplay();
      });

      viewport.addEventListener('focusout', (event) => {
        if (!viewport.contains(event.relatedTarget) && shouldResumeAutoplayOnFocusLeave) {
          shouldResumeAutoplayOnFocusLeave = false;
          startAutoplay();
        }
      });

      viewport.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          navigateToSlide(currentIndex + 1, { userInitiated: true });
          return;
        }

        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          navigateToSlide(currentIndex - 1, { userInitiated: true });
          return;
        }

        if (event.key === 'Home') {
          event.preventDefault();
          navigateToSlide(0, { userInitiated: true });
          return;
        }

        if (event.key === 'End') {
          event.preventDefault();
          navigateToSlide(realSlideCount - 1, { userInitiated: true });
        }
      });

      viewport.addEventListener('touchstart', (event) => {
        if (event.touches.length !== 1) return;

        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
        touchCurrentX = touchStartX;
        touchCurrentY = touchStartY;

        // Touch contact pauses autoplay for the same reason keyboard focus does: a
        // rotation mid-gesture would yank the slide out from under the user's
        // finger and desync the live region from what they're interacting with.
        shouldResumeAutoplayOnTouchEnd = Boolean(autoplayTimerId);
        stopAutoplay();
      }, { passive: true });

      viewport.addEventListener('touchmove', (event) => {
        if (event.touches.length !== 1) return;

        touchCurrentX = event.touches[0].clientX;
        touchCurrentY = event.touches[0].clientY;
      }, { passive: true });

      const endTouch = () => {
        const deltaX = touchCurrentX - touchStartX;
        const deltaY = touchCurrentY - touchStartY;
        const horizontalThreshold = 40;
        const didSwipe = Math.abs(deltaX) >= horizontalThreshold && Math.abs(deltaX) > Math.abs(deltaY);

        if (didSwipe) {
          const direction = deltaX < 0 ? 'forward' : 'backward';
          const slideIndex = currentIndex + 1;
          navigateToSlide(currentIndex + (direction === 'forward' ? 1 : -1), { userInitiated: true });
          trackCarouselNavEvent('homepage_carousel_swiped', { slide_index: slideIndex, direction });
        }

        if (!shouldResumeAutoplayOnTouchEnd) return;
        shouldResumeAutoplayOnTouchEnd = false;

        if (didSwipe) {
          // Resuming immediately would flip the live region back to aria-live="off"
          // in the same tick as the swipe announcement, likely swallowing it before
          // VoiceOver reads it. Give it a beat, same reasoning as staying quiet
          // while rotating.
          window.setTimeout(startAutoplay, 1000);
          return;
        }

        startAutoplay();
      };

      viewport.addEventListener('touchend', endTouch, { passive: true });
      viewport.addEventListener('touchcancel', endTouch, { passive: true });
    }

    cardsTrack.addEventListener('transitionend', (event) => {
      if (event.propertyName !== 'transform') return;
      syncFromCloneIfNeeded();
    });

    cardsTrack.addEventListener('click', (event) => {
      const clickedCard = event.target.closest('.carousel-card');
      if (!clickedCard || !cardsTrack.contains(clickedCard)) return;

      // Real clicks on the CTA (or any other focusable control) are left alone here;
      // those already navigate natively and are tracked by the dedicated CTA click
      // listener set up outside setupCarousel.
      if (event.target.closest('a, button, input, select, textarea, auro-hyperlink, [role="button"], [role="link"]')) {
        return;
      }

      if (clickedCard.classList.contains('is-peek')) {
        const targetIndex = Number(clickedCard.getAttribute('data-real-index'));
        if (Number.isNaN(targetIndex) || targetIndex === currentIndex) return;

        const trackSlides = Array.from(cardsTrack.querySelectorAll('.carousel-card'));
        const direction = trackSlides.indexOf(clickedCard) < trackIndex ? 'backward' : 'forward';
        const slideIndex = currentIndex + 1;

        navigateToSlide(targetIndex, { userInitiated: true });

        trackCarouselNavEvent('homepage_carousel_slide_traversed', {
          slide_index: slideIndex,
          direction,
        });
        return;
      }

      // whole-card click-through to the CTA destination for  active slide
      if (clickedCard.classList.contains('is-clone')) return;

      const ctaHref = clickedCard.getAttribute('data-cta-href');
      if (!ctaHref) return;

      const slideIndex = Number(clickedCard.getAttribute('data-real-index'));
      const ctaTarget = clickedCard.getAttribute('data-cta-target') || '_self';

      trackCarouselNavEvent('homepage_carousel_cta_clicked', {
        slide_index: Number.isNaN(slideIndex) ? null : slideIndex + 1,
        button_url: ctaHref,
      });

      if (ctaTarget === '_blank') {
        window.open(ctaHref, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = ctaHref;
      }
    });

    if (playButton) {
      playButton.addEventListener('click', () => {
        if (isAutoplayEnabled) {
          isAutoplayEnabled = false;
          stopAutoplay();
          trackCarouselNavEvent('homepage_carousel_play_pause_clicked', { action: 'pause' });
          return;
        }

        isAutoplayEnabled = true;
        startAutoplay();
        trackCarouselNavEvent('homepage_carousel_play_pause_clicked', { action: 'play' });
      });
    }

    if (pagination) {
      pagination.addEventListener('keydown', (event) => {
        if (event.key !== 'Home' && event.key !== 'End') return;

        const activeEl = document.activeElement;
        if (!pagination.contains(activeEl)) return;

        event.preventDefault();
        const targetIndex = event.key === 'Home' ? 0 : realSlideCount - 1;
        navigateToSlide(targetIndex, { userInitiated: true });
        pageDots[targetIndex].focus();
      });
    }

    window.addEventListener('resize', () => {
      render(false);
    });

    for (let i = 0; i < realSlides.length; i++) {
      realSlides[i].setAttribute('role', 'group');
      realSlides[i].setAttribute('aria-roledescription', 'slide');
      // Per the APG carousel pattern, the label should not repeat the word "slide"
      // since aria-roledescription already announces it (e.g. "slide, 1 of 6").
      realSlides[i].setAttribute('aria-label', `${i + 1} of ${realSlideCount}`);
    }

    updatePlayButtonState();
    render(false);

    // Run autoplay only while the carousel is visible in the viewport.
    if ('IntersectionObserver' in window) {
      const visibilityObserver = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (!entry) return;

        isCarouselInView = entry.isIntersecting;
        if (!isCarouselInView) {
          stopAutoplay();
          return;
        }

        startAutoplay();
      }, { threshold: 0.25 });

      visibilityObserver.observe(carouselElement);
    } else {
      isCarouselInView = true;
    }

    if (carouselConfig.initializedClassName) {
      carouselElement.classList.add(carouselConfig.initializedClassName);
    }

    if (isAutoplayEnabled) {
      startAutoplay();
    }
  };

  // EXPERIMENT
  Promise.all([
    waitForOptimizely(10000),
    getShadowElements([
      { selector: '[data-renderid="ExpandedBookingWidget"]', hasShadow: false },
      { selector: 'borealis-expanded-booking-widget', hasShadow: true },
    ]),
    customElements.whenDefined('auro-hyperlink'),
  ])
  .then(([optly, [bookingWidget]]) => {

    const carouselConfig = {
      showPlayButton: true,
      autoplayOnInit: true,
      autoplayInterval: 10000,
      slideTransitionDuration: 800,
      slideTransitionEasing: 'ease-in-out',
      initializedClassName: 'initialized',
    };

    const cardData = [
      {
        title: 'Stretch out, settle in',
        description: 'Elevate your journey with thoughtful amenities and more room to unwind in Premium Class, First Class or the Suites experience.',
        imageSrc: '//cdn.optimizely.com/img/10453949094/0409eeefdec6470b86ba5b29adcb2c21.jpg', // 2x: //cdn.optimizely.com/img/10453949094/4594c596c81b41c9a319a55c4cdb0d14.jpg
        imageAlt: 'Image Alt Text', // TODO
        ctaText: 'Discover premium seating',
        ctaHref: 'https://www.alaskaair.com/content/travel-info/flight-experience/premium-class',
        ctaTarget: '_self',
      },
      {
        title: 'Save on your next escape',
        description: 'Find great fares to places you love or seek out fresh adventures in new destinations, for less.',
        imageSrc: '//cdn.optimizely.com/img/10453949094/87fd29ae121c4be9a279f4a9835f449a.jpg', // 2x: //cdn.optimizely.com/img/10453949094/7734eea8ee0f47a6bb92e2e8669a9df9.jpg
        imageAlt: 'Image Alt Text', // TODO
        ctaText: 'Explore flight deals',
        ctaHref: 'https://www.alaskaair.com/content/deals/flights/sale',
        ctaTarget: '_self',
      },
      {
        title: 'All your travel, together',
        description: 'Find hotels, rental cars, cruises and vacation packages for every adventure, all in one place — plus, enjoy exclusive Atmos™ Rewards member benefits.',
        imageSrc: '//cdn.optimizely.com/img/10453949094/2729691df79344cda503b7c00f53d8dd.jpg', // 2x: //cdn.optimizely.com/img/10453949094/44f5540bbd544bc3abf648fdbb731e8e.jpg
        imageAlt: 'Image Alt Text', // TODO
        ctaText: 'Plan your trip',
        ctaHref: 'https://vacations.alaskaair.com/',
        ctaTarget: '_blank',
      },
      {
        title: 'Take off with up to 100,000 bonus points*',
        description: 'Apply now for an Atmos™ Rewards Visa® card with limited-time bonus offers.',
        finePrint: '*After qualifying purchases. Must apply here for this offer. Offers vary elsewhere. Residents of the US and its territories only. See full disclosure for details.',
        imageSrc: '//cdn.optimizely.com/img/10453949094/428b27eba6b5406f882df3a3b7090099.jpg', // 2x: //cdn.optimizely.com/img/10453949094/4d1b6a5e79954f8fb8325f557ea8fe70.jpg
        imageAlt: 'Image Alt Text', // TODO
        ctaText: 'Find your card',
        ctaHref: 'https://www.alaskaair.com/atmosrewards/content/credit-cards',
        ctaTarget: '_self',
      },
      {
        title: 'Join Atmos™ Rewards for $25 on your next flight*',
        description: 'Unlock more rewards, more often, as you earn points traveling to 1,000+ global destinations with over 30 airline partners, including the oneworld® Alliance.',
        finePrint: '*Restrictions apply.',
        imageSrc: '//cdn.optimizely.com/img/10453949094/c08d626d0ba7478f81d58b50df5176ea.jpg', // 2x: //cdn.optimizely.com/img/10453949094/9862782b8fac4b33a650c8a191b9596f.jpg
        imageAlt: 'Image Alt Text', // TODO
        ctaText: 'Join for free',
        ctaHref: 'https://www.alaskaair.com/atmosrewards/enroll',
        ctaTarget: '_self',
      },
    ];

    const buildCarouselMarkup = (cards, carouselOptions = {}) => {
      let cardsMarkup = '';
      let paginationDotsMarkup = '';
      let cardIndex = 0;

      const hasValue = (value) => {
        if (value === null || value === undefined) return false;
        return String(value).trim() !== '';
      };

      const renderableCardCount = cards.filter((card) => {
        if (!card || typeof card !== 'object') return false;
        return hasValue(card.imageSrc);
      }).length;

      for (const card of cards) {
        if (!card || typeof card !== 'object') {
          continue;
        }

        const hasImage = hasValue(card.imageSrc);
        const hasPromoImage = hasValue(card.promoImageSrc);
        const hasTitle = hasValue(card.title);
        const hasDescription = hasValue(card.description);
        const hasFinePrint = hasValue(card.finePrint);
        const hasCta = hasValue(card.ctaText) && hasValue(card.ctaHref);

        const detailsMarkup = `
          ${hasPromoImage ? `<div class="promo-image"><img src="${card.promoImageSrc}" alt="${hasValue(card.promoImageAlt) ? card.promoImageAlt : ''}"/></div>` : ''}
          ${hasTitle ? `<h4 class="title">${card.title}</h4>` : ''}
          ${hasDescription ? `<div class="description">${card.description}</div>` : ''}
          ${hasFinePrint ? `<div class="fine-print">${card.finePrint}</div>` : ''}
        `;

        const hasDetails = detailsMarkup.replace(/\s/g, '') !== '';
        const ctaTarget = hasValue(card.ctaTarget) ? card.ctaTarget : '_self';

        const foregroundMarkup = `
          ${hasDetails ? `<div class="details">${detailsMarkup}</div>` : ''}
          ${hasCta ? `
            <div class="cta">
              <auro-hyperlink
                href="${card.ctaHref}"
                type="cta"
                variant="primary"
                ondark="true"
                shape="pill"
                target="${ctaTarget}"
              >
                ${card.ctaText}
              </auro-hyperlink>
            </div>
          ` : ''}
        `;

        if (!hasImage) {
          continue;
        }

        cardsMarkup += `
          <div class="carousel-card" id="carousel-slide-${cardIndex}"${hasCta ? ` data-cta-href="${card.ctaHref}" data-cta-target="${ctaTarget}"` : ''}>
            ${hasImage ? `<div class="image-wrapper"><img src="${card.imageSrc}" alt="${hasValue(card.imageAlt) ? card.imageAlt : ''}" /></div>` : ''}
            ${foregroundMarkup.replace(/\s/g, '') !== '' ? `<div class="foreground-contents">${foregroundMarkup}</div>` : ''}
          </div>
        `;

        paginationDotsMarkup += `
          <button
            class="page-dot${cardIndex === 0 ? ' is-active' : ''}"
            type="button"
            role="tab"
            aria-label="Go to slide ${cardIndex + 1}"
            aria-selected="${cardIndex === 0 ? 'true' : 'false'}"
            aria-controls="carousel-slide-${cardIndex}"
            tabindex="${cardIndex === 0 ? '0' : '-1'}"
          ></button>
        `;
        cardIndex += 1;
      }

      return `
        <div id="custom-carousel" role="region" aria-roledescription="carousel" aria-labelledby="carousel-title">
          <h3 id="carousel-title" class="carousel-title">Current deals and offers</h3>
          <div class="viewport" tabindex="0" aria-label="Carousel slides" aria-controls="carousel-slides" aria-describedby="carousel-live-region" role="group">
            <div id="carousel-slides" class="cards" aria-live="off">${cardsMarkup}</div>
          </div>
          <div class="pagination" role="tablist" aria-label="Carousel controls">
            <button id="play-button" class="${carouselOptions.showPlayButton === false ? 'is-hidden' : ''}" data-state="play" type="button" aria-label="Play carousel" aria-pressed="false">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="play ico_squareLarge" aria-hidden="true" focusable="false" viewBox="0 0 24 24" part="svg" slot="svg">
                <path fill-rule="evenodd" d="m6.977 1.02.348.163 15.555 8.889c1.369.782 1.483 2.656.342 3.62l-.342.239-15.555 8.888c-1.368.782-3.044-.07-3.293-1.547L4 20.89V3.112C4 1.537 5.57.505 6.977 1.021" clip-rule="evenodd"></path>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="pause ico_squareLarge" aria-hidden="true" focusable="false" viewBox="0 0 24 24" part="svg" slot="svg">
                <path fill-rule="evenodd" d="M6 .5A1.5 1.5 0 0 1 7.5 2v20a1.5 1.5 0 0 1-3 0V2A1.5 1.5 0 0 1 6 .5m12 0A1.5 1.5 0 0 1 19.5 2v20a1.5 1.5 0 0 1-3 0V2A1.5 1.5 0 0 1 18 .5" clip-rule="evenodd"></path>
              </svg>
            </button>
            ${paginationDotsMarkup}
          </div>
          <div id="carousel-live-region" class="carousel-live-region" aria-live="polite" aria-atomic="true" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">Slide 1 of ${renderableCardCount}</div>
        </div>
      `;
    };

    const carouselMarkup = buildCarouselMarkup(cardData, carouselConfig);
    bookingWidget.insertAdjacentHTML('afterend', carouselMarkup);
    setupCarousel(bookingWidget.nextElementSibling, carouselConfig, optly);



    // TRACKING

    // watch scroll position and fire once the bottom of the booking widget
    const scrollThresholdPx = 150;
    if ('IntersectionObserver' in window) {
      const bookingWidgetScrollObserver = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (!entry) return;

        const isPastThreshold = !entry.isIntersecting && entry.boundingClientRect.bottom <= scrollThresholdPx;
        if (!isPastThreshold) return;

        optly.push({
          type: 'event',
          eventName: 'homepage_carousel_below_fold_content_in_view',
        });

        bookingWidgetScrollObserver.disconnect();
      }, { rootMargin: `-${scrollThresholdPx}px 0px 0px 0px`, threshold: 0 });

      bookingWidgetScrollObserver.observe(bookingWidget);
    }

    // custom event for carousel card CTA button clicks
    const customCarousel = document.getElementById('custom-carousel');
    const carouselCardsTrack = customCarousel ? customCarousel.querySelector('.cards') : null;

    carouselCardsTrack.addEventListener('click', (e) => {
      const ctaLink = e.target.closest('auro-hyperlink');
      if (!ctaLink) return;

      const card = ctaLink.closest('.carousel-card');
      if (!card || card.classList.contains('is-clone')) return;

      const slideIndex = Number(card.getAttribute('data-real-index'));

      optly.push({
        type: 'event',
        eventName: 'homepage_carousel_cta_clicked',
        tags: {
          slide_index: Number.isNaN(slideIndex) ? null : slideIndex + 1,
          button_url: ctaLink.getAttribute('href') || '',
        },
      });
    });

  })
  .catch((error) => {
    logerr(error);
  });

  // guardrail tracking (separate in case any of these selectors change)
  Promise.all([
    waitForOptimizely(10000),
    getShadowElements([
      { selector: '#more-ways-to-elevate-your-journey-grid-of-teaser-cards', hasShadow: false },
      { selector: 'borealis-grid', hasShadow: true },
      { selector: 'borealis-teaser-card[aria-label*="vacation" i]', hasShadow: true },
      { selector: 'a.teaser-card-container', hasShadow: false },
    ]),
  ])
  .then(([optly, [, , , vacationCardLink]]) => {
    if (!vacationCardLink || typeof vacationCardLink.addEventListener !== 'function') {
      return;
    }

    vacationCardLink.addEventListener('click', () => {
      optly.push({
        type: 'event',
        eventName: 'homepage_carousel_journey_grid_alaska_vacations_clicked',
      });
    });
  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}, {"dependencies": [], "id": "1d999b4a-e5fd-45a3-9aa8-6d49dc7267f4", "selector": "head", "type": "append", "value": "<style>#custom-carousel {\n  max-width: var(--ds-grid-breakpoint-xl);\n  margin: 40px auto;\n  padding: 0 var(--ds-grid-gutter-sm, 1rem);\n  overflow: visible;\n}\n\n#custom-carousel.initialized ~ #non-cardholders-banner,\n#custom-carousel.initialized ~ #cardholders-banner,\n#custom-carousel.initialized ~ #download-the-app,\n#custom-carousel.initialized ~ [id^=\"join-and-save-offer\"] {\n  display: none; /* hide large section banners when carousel is initialized */\n}\n\n#custom-carousel .carousel-title {\n  margin-bottom: var(--ds-size-400);\n  font-size: 38px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 130%;\n  color: var(--ds-basic-color-texticon-default);\n  font-feature-settings: 'liga' off;\n}\n\n#custom-carousel .viewport {\n  overflow: visible;\n  margin-bottom: 40px;\n}\n\n#custom-carousel .cards {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  transform: translate3d(0, 0, 0);\n  transition: transform var(--slide-transition-duration, 800ms) var(--slide-transition-easing, ease);\n  will-change: transform;\n}\n\n#custom-carousel .cards.no-transition {\n  transition: none;\n}\n\n#custom-carousel .cards .carousel-card {\n  flex: 0 0 100%;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  height: 540px;\n  border-radius: 32px;\n  cursor: default;\n}\n\n#custom-carousel .cards .carousel-card.is-peek {\n  cursor: pointer;\n  opacity: 0.5;\n}\n\n#custom-carousel .cards .carousel-card[data-cta-href]:not(.is-peek) {\n  cursor: pointer;\n}\n\n#custom-carousel .cards .carousel-card .image-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n#custom-carousel .cards .carousel-card .image-wrapper img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n#custom-carousel .cards .carousel-card .image-wrapper::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.85) 100%);\n}\n\n#custom-carousel .cards .carousel-card .foreground-contents {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 20px;\n  padding: var(--ds-size-800);\n}\n\n#custom-carousel .cards .carousel-card .foreground-contents .details {\n  flex: 0 1 75%;\n  color: var(--ds-basic-color-texticon-inverse);\n  font-feature-settings: 'liga' off;\n}\n\n#custom-carousel .cards .carousel-card .foreground-contents .details .promo-image {\n  max-width: 40%;\n  margin-bottom: var(--ds-size-200);\n}\n\n#custom-carousel .cards .carousel-card .foreground-contents .details .promo-image img {\n  width: 100%;\n  height: auto;\n}\n\n#custom-carousel .cards .carousel-card .foreground-contents .details .title {\n  margin-bottom: var(--ds-size-100);\n  font-family: var(--type-Heading-Family, \"AS Circular\");\n  font-size: var(--Heading-Large-Size, 36px);\n  font-style: normal;\n  font-weight: 300;\n  line-height: 130%;\n}\n\n#custom-carousel .cards .carousel-card .foreground-contents .details .description {\n  margin-bottom: var(--ds-size-50);\n  font-family: var(--type-Body-Family, \"AS Circular\");\n  font-size: var(--Body-Default-Size, 16px);\n  font-style: normal;\n  font-weight: 450;\n  line-height: var(--Body-Default-Line-Height, 24px);\n}\n\n#custom-carousel .cards .carousel-card .foreground-contents .details .fine-print {\n  font-family: var(--type-Body-Family, \"AS Circular\");\n  font-size: var(--Body-Default-Size, 12px);\n  font-style: normal;\n  font-weight: 300;\n  line-height: var(--Body-Default-Line-Height, 18px);\n}\n\n#custom-carousel .cards .carousel-card .foreground-contents .cta {\n  flex: 1 0 25%;\n  text-align: right;\n}\n\n#custom-carousel .pagination {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 16px;\n}\n\n#custom-carousel .pagination #play-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: var(--ds-advanced-color-button-primary-background);\n  cursor: pointer;\n  border: none;\n}\n\n#custom-carousel .pagination #play-button.is-hidden {\n  display: none;\n}\n\n#custom-carousel .pagination #play-button[data-state=\"play\"] svg.pause {\n  display: none;\n}\n\n#custom-carousel .pagination #play-button[data-state=\"pause\"] svg.play {\n  display: none;\n}\n\n#custom-carousel .pagination #play-button svg {\n  width: 18px;\n  height: 18px;\n  fill: var(--ds-advanced-color-button-primary-text);\n}\n\n#custom-carousel .pagination .page-dot {\n  appearance: none;\n  border: none;\n  padding: 0;\n  width: 12px;\n  height: 12px;\n  border-radius: 999px;\n  background-color: #C1D4DF;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  transition: width 220ms ease, background-color 220ms ease;\n}\n\n#custom-carousel .pagination .page-dot.is-active {\n  width: 52px;\n  background-color: #C1D4DF;\n}\n\n#custom-carousel .pagination .page-dot::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  background-color: var(--ds-advanced-color-button-primary-background);\n  transform: scaleX(0);\n  transform-origin: left center;\n}\n\n#custom-carousel .pagination .page-dot.is-active::after {\n  transform: scaleX(1);\n}\n\n#custom-carousel.is-autoplaying .pagination .page-dot.is-active::after {\n  animation: active-dot-progress var(--autoplay-interval, 5000ms) linear forwards;\n}\n\n@keyframes active-dot-progress {\n  from {\n    transform: scaleX(0);\n  }\n  to {\n    transform: scaleX(1);\n  }\n}\n\n@media (max-width: 631px) {\n\n  #custom-carousel {\n    padding: 0 1.5rem 0 var(--ds-grid-gutter-sm, 1rem);\n  }\n\n  #custom-carousel .carousel-title {\n    margin-bottom: var(--ds-size-400);\n    font-size: 28px;\n  }\n\n  #custom-carousel .cards {\n    gap: 6px;\n  }\n\n  #custom-carousel .cards .carousel-card {\n    height: 480px;\n  }\n\n  #custom-carousel .cards .carousel-card .foreground-contents {\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-end;\n    padding: var(--ds-size-300);\n  }\n\n  #custom-carousel .cards .carousel-card .foreground-contents .details {\n    flex: 0 0 100%;\n  }\n\n  #custom-carousel .cards .carousel-card .foreground-contents .details .promo-image {\n    max-width: 100%;\n  }\n\n  #custom-carousel .cards .carousel-card .foreground-contents .details .title {\n    font-size: var(--Heading-Large-Size, 28px);\n  }\n\n  #custom-carousel .cards .carousel-card .foreground-contents .details .description {\n    font-size: var(--Body-Default-Size, 16px);\n  }\n\n  #custom-carousel .cards .carousel-card .foreground-contents .details .fine-print {\n    font-size: var(--Body-Default-Size, 14px);\n  }\n\n  #custom-carousel .cards .carousel-card .foreground-contents .cta {\n    flex: 0 0 100%;\n    text-align: left;\n  }\n}\n\n@media screen and (min-width: 1232px) {\n\n  #custom-carousel {\n    padding: 0;\n  }\n}\n\n@media screen and (min-width: 1280px) {\n\n  #custom-carousel .cards {\n    gap: 16px;\n  }\n}\n\n/* fade peek effect for wide viewports */\n@media screen and (min-width: 1600px) {\n\n  #custom-carousel .viewport {\n    --peek-solid-distance: 80px;\n    --peek-fade-length: 100px;\n    --peek-total-distance: calc(var(--peek-solid-distance) + var(--peek-fade-length));\n\n    margin-left: calc(var(--peek-total-distance) * -1);\n    margin-right: calc(var(--peek-total-distance) * -1);\n    padding-left: var(--peek-total-distance);\n    padding-right: var(--peek-total-distance);\n    overflow: hidden;\n\n    -webkit-mask-image: linear-gradient(\n      to right,\n      transparent 0,\n      #000 var(--peek-fade-length),\n      #000 calc(100% - var(--peek-fade-length)),\n      transparent 100%\n    );\n    mask-image: linear-gradient(\n      to right,\n      transparent 0,\n      #000 var(--peek-fade-length),\n      #000 calc(100% - var(--peek-fade-length)),\n      transparent 100%\n    );\n  }\n}</style>"}]}]}], "weightDistributions": [{"entityId": "5992412764438528", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5796561987305472"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5627132506800128"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5889234614091776", "name": null, "commitId": "6518407024082944", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "11692073740"], "audienceName": null, "changes": null, "id": "4698390741647360", "integrationSettings": null, "variations": [{"id": "4787509132001280", "name": null, "actions": [{"viewId": "4579237275893760", "changes": []}]}, {"id": "5684965969494016", "name": null, "actions": [{"viewId": "4579237275893760", "changes": [{"config": {"cta_url": "https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-card?requesttype=ICAO&campaignid=4081080&genericvariables=861~ASAscentShopcartPage11.18", "perk_one_icon": "minicard", "badge": "LIMITED TIME ONLINE OFFER", "terms": "<strong>Must apply here for this offer.</strong> Offer varies elsewhere.<span class=\"desktop-only\">*After spending $2,500 or more on purchases in the first 90 days of account opening. Card available to use instantly if approved and activated with an account number.</span>", "perk_one_smalltext": "", "card_image": "https://cdn.optimizely.com/img/10453949094/fc62007dfae84161b5f2ccbb2c1b4b77.png", "perk_two_smalltext": "(for you and up to 6 companions)", "perk_two_text": "Free checked bag and priority boarding benefit", "headline": "40,000 bonus points + $300 statement credit", "card_image_alt": "Atmos\u2122 Rewards Ascent Visa Signature\u00ae Card by Bank of America", "perk_one_text": "Earn 3 points for every $1 spent on eligible Alaska Airlines and Hawaiian Airlines purchases\u200b", "cta_text": "Apply Now and Get An Instant Response", "perk_two_icon": "bag"}, "dependencies": [], "id": "9ae600aa9e264a4c81ac84da76e1c145", "name": "Atmos Card Cart Offer", "type": "widget", "widget_id": "5432804899553280"}]}]}], "weightDistributions": [{"entityId": "5684965969494016", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5889234614091776"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["4579237275893760"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5897700430839808", "name": null, "commitId": "5537794787901440", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": null, "changes": null, "id": "5082438731300864", "integrationSettings": null, "variations": [{"id": "6084280286183424", "name": null, "actions": [{"viewId": "5535847942979584", "changes": [{"config": {"cta_url": "", "background_image_title": "", "mode": "track", "cta_title": "", "body_text": "", "background_image": "", "headline_text": "", "cta_new_window": "no", "custom_event_name": "booking_widget_borealis_card_concise_cta_click"}, "dependencies": [], "id": "9ed73882-b29d-415b-96c5-7cf9ff6f9c56", "name": "Borealis Card Concise Replacement (Booking Widget) v3", "type": "widget", "widget_id": "5670436967546880"}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5897700430839808"}, "deployed": false}, {"audienceIds": ["and", "6245261633126400"], "audienceName": null, "changes": null, "id": "5594825913794560", "integrationSettings": null, "variations": [{"id": "4742732587991040", "name": null, "actions": [{"viewId": "5535847942979584", "changes": [{"config": {"cta_url": "", "background_image_title": "", "mode": "track", "cta_title": "", "body_text": "", "background_image": "", "headline_text": "", "cta_new_window": "no", "custom_event_name": "booking_widget_borealis_card_concise_cta_click"}, "dependencies": [], "id": "275361ab-db0c-4440-8d9a-1a80996f06bd", "name": "Borealis Card Concise Replacement (Booking Widget) v3", "type": "widget", "widget_id": "5670436967546880"}]}]}, {"id": "6094942508941312", "name": null, "actions": [{"viewId": "5535847942979584", "changes": [{"config": {"cta_url": "/trips?lid=premium-class", "background_image_title": "Premium Class", "mode": "replace", "cta_title": "Upgrade to Premium Class", "body_text": "Starting at $15 one way, experience industry-leading legroom, early boarding, complimentary cocktails, beer, and wine, and an enhanced snack basket on long-haul flights.", "background_image": "//cdn.optimizely.com/img/10453949094/f12f75e0d0144fb99a2a0b8216a1d06d.jpg", "headline_text": "Upgrade to Premium Class today", "cta_new_window": "no", "custom_event_name": "booking_widget_borealis_card_concise_cta_click"}, "dependencies": [], "id": "02230272-ef4b-4bdd-b1f6-20c1af32cb28", "name": "Borealis Card Concise Replacement (Booking Widget) v3", "type": "widget", "widget_id": "5670436967546880"}]}]}], "weightDistributions": [{"entityId": "6094942508941312", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5897700430839808"}, "deployed": false}], "policy": "equal_priority", "viewIds": ["5535847942979584"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "5594825913794560", "endOfRange": null}], [{"entityId": "5082438731300864", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "5944851101908992", "name": null, "commitId": "5513678647197696", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "6160439871012864"], "audienceName": null, "changes": null, "id": "5600394439557120", "integrationSettings": null, "variations": [{"id": "6132854504030208", "name": null, "actions": []}, {"id": "5845630092836864", "name": null, "actions": [{"viewId": "4589858713239552", "changes": []}]}], "weightDistributions": [{"entityId": "6132854504030208", "endOfRange": 5000}, {"entityId": "5845630092836864", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5944851101908992"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["4589858713239552"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6206845902127104", "name": null, "commitId": "6631122266750976", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "11855623289"], "audienceName": null, "changes": null, "id": "5098658272641024", "integrationSettings": null, "variations": [{"id": "5972333540671488", "name": null, "actions": [{"viewId": "5643895948705792", "changes": []}]}, {"id": "5313783084613632", "name": null, "actions": [{"viewId": "5643895948705792", "changes": [{"config": {"dialog_background_image": "//cdn.optimizely.com/img/10453949094/1188b051829e4a6d9c085d22ac9f557f.png", "perk_one_icon": "https://cdn.optimizely.com/img/10453949094/518849c2702d4388b2a736f252d21701.svg", "cta_button_fine_print": "See if you pre-qualify. It takes 30 seconds and your credit score is not impacted.", "brand": "ha", "cookie_max_age": 7776000, "perk_three_icon": "https://cdn.optimizely.com/img/10453949094/fdaa4313d38d4a19b52ba3d5fe1e55fc.svg", "cta_button_text": "Pre-Qualify Now", "card_image": "https://cdn.optimizely.com/img/10453949094/d2dede6e09534e4ebd2e3aa1d906e77f.png", "pre_title_text": "Earn", "perk_two_text": "Save up to $90 per person roundtrip with a free checked bag and preferred boarding for you and up to six guests on the same reservation", "post_title_text": "+ Get a free checked bag", "title_text": "70,000 bonus points", "cancel_button_text": "No, thanks", "cookie_id": "20260916", "card_image_alt_text": "Atmos Rewards Visa Card", "perk_one_text": "Earn a $99 Companion Fare (plus taxes and fees from $23)", "cta_button_link": "https://secure.bankofamerica.com/apply-now-services/cards-prequal/initialize-prequal?requesttype=CCAPQ&campaignid=4081095&productoffercode=V8&appflow=ICAI&locale=en_US&lobchannelcode=ASK004&genericvariables=861~HAAscentOverlayPQ11.18", "bottom_fine_print": "Online-only. Offer varies elsewhere.", "perk_two_icon": "https://cdn.optimizely.com/img/10453949094/7e9b9a95f47143cfaf05fb9cb3173d36.svg", "cta_button_sr_only_text": "for the Atmos Rewards Card", "perk_three_text": "Earn 3 points for every $1 spent on eligible Alaska Airlines and Hawaiian Airlines purchases"}, "dependencies": [], "name": "Atmos Card Homepage Modal v1.0.0", "type": "widget", "id": "04ba48aa-f306-48f3-bef6-c74ba9b69d96", "widget_id": "5786410731438080"}]}]}], "weightDistributions": [{"entityId": "5313783084613632", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6206845902127104"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5643895948705792"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "5098658272641024", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "6234618049855488", "name": null, "commitId": "4862763713953792", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "6437458569592832", "11855623289"], "audienceName": null, "changes": null, "id": "5422422554312704", "integrationSettings": null, "variations": [{"id": "6153504304136192", "name": null, "actions": [{"viewId": "6423797786476544", "changes": [{"dependencies": [], "id": "2ee00e86-ec51-4964-a529-debdc94db641", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            requestAnimationFrame(check);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            requestAnimationFrame(check);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                requestAnimationFrame(waitForShadowRoot);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // LOGGING
  // silent buffer shared by every variation on the page; inspect in DevTools by evaluating:  optlyLogs
  // (copy(optlyLogs) puts it on the clipboard as JSON; a Live Expression on optlyLogs.at(-1) watches it live)
  const EXPERIMENT = 'signin-toast-v4 / original';
  const logs = (window.optlyLogs = window.optlyLogs || []);
  const pushLog = (level, msg) => {
    const entry = { t: Math.round(performance.now()), exp: EXPERIMENT, level: level, msg: msg };
    if (msg instanceof Error) entry.text = msg.stack || msg.message;
    logs.push(entry);
    if (logs.length > 100) logs.shift();
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // cookie helpers
  const cookieExists = (cookieName) => {
    return document.cookie.split('; ').some(cookie => cookie.startsWith(cookieName + '='));
  };

  const setCookie = (cookieName, value, maxAgeDays) => {
    const maxAgeSeconds = maxAgeDays * 24 * 60 * 60;
    document.cookie = cookieName + '=' + value + '; max-age=' + maxAgeSeconds + '; path=/; SameSite=Lax';
  };

  // EXPERIMENT
  // set once the toast has been shown so the visitor only ever sees the offer once
  const toastShownCookie = 'signin-toast-shown';
  const toastShownCookieDays = 7;

  Promise.all([
    waitForOptimizely(10000),
    getShadowElements([
      { selector: 'body', hasShadow: false },
      { selector: 'borealis-header', hasShadow: true },
      { selector: 'borealis-prompt', hasShadow: true },
    ]),
  ])
  .then(([optly, [body, borealisHeader, borealisPrompt]]) => {

    // visitor has already seen the toast on a previous visit; don't show it again
    if (cookieExists(toastShownCookie)) {
      log('toast already shown, exiting');
      return;
    }

    const newStyles = new CSSStyleSheet();
    newStyles.replaceSync(`
      borealis-prompt {
        transition: opacity 0.5s ease;
      }

      @media (min-width: 770px) {
        borealis-prompt {
          top: 12px !important;
        }
      }
    `);

    borealisHeader.shadowRoot.adoptedStyleSheets = [
      ...borealisHeader.shadowRoot.adoptedStyleSheets,
      newStyles
    ];

    const displayToast = () => {
      borealisHeader.data.prompt_data.show = true;
      borealisHeader.update();

      setCookie(toastShownCookie, '1', toastShownCookieDays);

      window.optimizely.push({
        type: 'event',
        eventName: 'signin_toast_display',
      });

      getShadowElements([
        { selector: 'body', hasShadow: false },
        { selector: 'borealis-header', hasShadow: true },
        { selector: 'borealis-prompt', hasShadow: true },
        { selector: '.toast-actions', hasShadow: false },
      ])
      .then(([body, borealisHeader, borealisPrompt, toastActions]) => {
        // the header component binds the dialog's aria-label to prompt_data.title, which the site leaves empty,
        // so screen readers announce an unnamed dialog (Lighthouse: aria-dialog-name). name it with the toast copy;
        // setting prompt_data.title instead would render a visible heading
        const dialog = borealisPrompt.shadowRoot.querySelector('.prompt[role="dialog"]');
        if (dialog && !dialog.getAttribute('aria-label')) {
          const promptData = borealisHeader.data && borealisHeader.data.prompt_data;
          dialog.setAttribute('aria-label', (promptData && promptData.content) || 'Sign in for a personalized experience.');
        }

        const primaryButton = toastActions.querySelector('.action-button[variant="primary"]');
        const secondaryButton = toastActions.querySelector('.action-button[variant="secondary"]');

        primaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_primary_click',
          });
        });

        secondaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_secondary_click',
          });
        });
      })
      .catch((error) => {
        logerr(error);
      });
    };

    const hideToast = () => {
      borealisPrompt.style.opacity = '0';
      setTimeout(() => {
        borealisHeader.data.prompt_data.show = false;
        borealisHeader.update();
      }, 500);
    };

    setTimeout(() => {
      displayToast();
    }, 2000);

  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}]}]}, {"id": "5107062684778496", "name": null, "actions": [{"viewId": "6423797786476544", "changes": [{"dependencies": [], "id": "644659ad-0f5d-4bf6-b147-85000bbb0818", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            requestAnimationFrame(check);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            requestAnimationFrame(check);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                requestAnimationFrame(waitForShadowRoot);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // LOGGING
  // silent buffer shared by every variation on the page; inspect in DevTools by evaluating:  optlyLogs
  // (copy(optlyLogs) puts it on the clipboard as JSON; a Live Expression on optlyLogs.at(-1) watches it live)
  const EXPERIMENT = 'signin-toast-v4 / variation-1';
  const logs = (window.optlyLogs = window.optlyLogs || []);
  const pushLog = (level, msg) => {
    const entry = { t: Math.round(performance.now()), exp: EXPERIMENT, level: level, msg: msg };
    if (msg instanceof Error) entry.text = msg.stack || msg.message;
    logs.push(entry);
    if (logs.length > 100) logs.shift();
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // cookie helpers
  const cookieExists = (cookieName) => {
    return document.cookie.split('; ').some(cookie => cookie.startsWith(cookieName + '='));
  };

  const setCookie = (cookieName, value, maxAgeDays) => {
    const maxAgeSeconds = maxAgeDays * 24 * 60 * 60;
    document.cookie = cookieName + '=' + value + '; max-age=' + maxAgeSeconds + '; path=/; SameSite=Lax';
  };

  // EXPERIMENT
  // set once the toast has been shown so the visitor only ever sees the offer once
  const toastShownCookie = 'signin-toast-shown';
  const toastShownCookieDays = 7;

  Promise.all([
    waitForOptimizely(10000),
    getShadowElements([
      { selector: 'body', hasShadow: false },
      { selector: 'borealis-header', hasShadow: true },
      { selector: 'borealis-prompt', hasShadow: true },
    ]),
  ])
  .then(([optly, [body, borealisHeader, borealisPrompt]]) => {

    // visitor has already seen the toast on a previous visit; don't show it again
    if (cookieExists(toastShownCookie)) {
      log('toast already shown, exiting');
      return;
    }

    const newStyles = new CSSStyleSheet();
    newStyles.replaceSync(`
      borealis-prompt {
        transition: opacity 0.5s ease;
      }

      @media (min-width: 770px) {
        borealis-prompt {
          top: 12px !important;
        }
      }
    `);

    borealisHeader.shadowRoot.adoptedStyleSheets = [
      ...borealisHeader.shadowRoot.adoptedStyleSheets,
      newStyles
    ];

    const displayToast = () => {
      borealisHeader.data.prompt_data.show = true;
      borealisHeader.update();

      setCookie(toastShownCookie, '1', toastShownCookieDays);

      window.optimizely.push({
        type: 'event',
        eventName: 'signin_toast_display',
      });

      getShadowElements([
        { selector: 'body', hasShadow: false },
        { selector: 'borealis-header', hasShadow: true },
        { selector: 'borealis-prompt', hasShadow: true },
        { selector: '.toast-actions', hasShadow: false },
      ])
      .then(([body, borealisHeader, borealisPrompt, toastActions]) => {
        // the header component binds the dialog's aria-label to prompt_data.title, which the site leaves empty,
        // so screen readers announce an unnamed dialog (Lighthouse: aria-dialog-name). name it with the toast copy;
        // setting prompt_data.title instead would render a visible heading
        const dialog = borealisPrompt.shadowRoot.querySelector('.prompt[role="dialog"]');
        if (dialog && !dialog.getAttribute('aria-label')) {
          const promptData = borealisHeader.data && borealisHeader.data.prompt_data;
          dialog.setAttribute('aria-label', (promptData && promptData.content) || 'Sign in for a personalized experience.');
        }

        const primaryButton = toastActions.querySelector('.action-button[variant="primary"]');
        const secondaryButton = toastActions.querySelector('.action-button[variant="secondary"]');

        primaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_primary_click',
          });
        });

        secondaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_secondary_click',
          });
        });
      })
      .catch((error) => {
        logerr(error);
      });
    };

    const hideToast = () => {
      borealisPrompt.style.opacity = '0';
      setTimeout(() => {
        borealisHeader.data.prompt_data.show = false;
        borealisHeader.update();
      }, 500);
    };

    setTimeout(() => {
      displayToast();
    }, 2000);

    setTimeout(() => {
      hideToast();
    }, 14000); // 14-2=12 seconds after displaying

  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}]}]}], "weightDistributions": [{"entityId": "6153504304136192", "endOfRange": 5000}, {"entityId": "5107062684778496", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6234618049855488"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6423797786476544"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "5422422554312704", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "6440880979050496", "name": null, "commitId": "6494997164326912", "groupId": null, "holdback": 8000, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": null, "changes": null, "id": "5287475766099968", "integrationSettings": null, "variations": [{"id": "5885867789647872", "name": null, "actions": [{"viewId": "6407431467565056", "changes": [{"id": "174882A9-3CC3-4E39-9C3F-D9D0B0D26256", "type": "redirect", "dependencies": [], "dest": "https://www.alaskaair.com/content/about-us/help-contact?fb1234", "preserveParameters": false, "allowAdditionalRedirect": false}]}]}, {"id": "5322917836226560", "name": null, "actions": [{"viewId": "6407431467565056", "changes": [{"id": "E52B7280-1A4B-44F8-8937-E71584B03170", "type": "redirect", "dependencies": [], "dest": "http://www.alaskaair.com/content/about-us/help-contact?cr1234", "preserveParameters": false, "allowAdditionalRedirect": false}]}]}], "weightDistributions": [{"entityId": "5885867789647872", "endOfRange": 5000}, {"entityId": "5322917836226560", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6440880979050496"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6407431467565056"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6575586091466752", "name": null, "commitId": "6676097587216384", "groupId": null, "holdback": null, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "6437458569592832", "11855623289"], "audienceName": null, "changes": null, "id": "6290965655191552", "integrationSettings": null, "variations": [{"id": "4692598340714496", "name": null, "actions": [{"viewId": "5449686184624128", "changes": [{"dependencies": [], "id": "dda7b166-5eba-4d01-82cc-0d992cbb5b81", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            requestAnimationFrame(check);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            requestAnimationFrame(check);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                requestAnimationFrame(waitForShadowRoot);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // LOGGING
  // silent buffer shared by every variation on the page; inspect in DevTools by evaluating:  optlyLogs
  // (copy(optlyLogs) puts it on the clipboard as JSON; a Live Expression on optlyLogs.at(-1) watches it live)
  const EXPERIMENT = 'signin-toast-v4 / original';
  const logs = (window.optlyLogs = window.optlyLogs || []);
  const pushLog = (level, msg) => {
    const entry = { t: Math.round(performance.now()), exp: EXPERIMENT, level: level, msg: msg };
    if (msg instanceof Error) entry.text = msg.stack || msg.message;
    logs.push(entry);
    if (logs.length > 100) logs.shift();
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // cookie helpers
  const cookieExists = (cookieName) => {
    return document.cookie.split('; ').some(cookie => cookie.startsWith(cookieName + '='));
  };

  const setCookie = (cookieName, value, maxAgeDays) => {
    const maxAgeSeconds = maxAgeDays * 24 * 60 * 60;
    document.cookie = cookieName + '=' + value + '; max-age=' + maxAgeSeconds + '; path=/; SameSite=Lax';
  };

  // EXPERIMENT
  // set once the toast has been shown so the visitor only ever sees the offer once
  const toastShownCookie = 'signin-toast-shown';
  const toastShownCookieDays = 7;

  Promise.all([
    waitForOptimizely(10000),
    getShadowElements([
      { selector: 'body', hasShadow: false },
      { selector: 'borealis-header', hasShadow: true },
      { selector: 'borealis-prompt', hasShadow: true },
    ]),
  ])
  .then(([optly, [body, borealisHeader, borealisPrompt]]) => {

    // visitor has already seen the toast on a previous visit; don't show it again
    if (cookieExists(toastShownCookie)) {
      log('toast already shown, exiting');
      return;
    }

    const newStyles = new CSSStyleSheet();
    newStyles.replaceSync(`
      borealis-prompt {
        transition: opacity 0.5s ease;
      }

      @media (min-width: 770px) {
        borealis-prompt {
          top: 12px !important;
        }
      }
    `);

    borealisHeader.shadowRoot.adoptedStyleSheets = [
      ...borealisHeader.shadowRoot.adoptedStyleSheets,
      newStyles
    ];

    const displayToast = () => {
      borealisHeader.data.prompt_data.show = true;
      borealisHeader.update();

      setCookie(toastShownCookie, '1', toastShownCookieDays);

      window.optimizely.push({
        type: 'event',
        eventName: 'signin_toast_display',
      });

      getShadowElements([
        { selector: 'body', hasShadow: false },
        { selector: 'borealis-header', hasShadow: true },
        { selector: 'borealis-prompt', hasShadow: true },
        { selector: '.toast-actions', hasShadow: false },
      ])
      .then(([body, borealisHeader, borealisPrompt, toastActions]) => {
        // the header component binds the dialog's aria-label to prompt_data.title, which the site leaves empty,
        // so screen readers announce an unnamed dialog (Lighthouse: aria-dialog-name). name it with the toast copy;
        // setting prompt_data.title instead would render a visible heading
        const dialog = borealisPrompt.shadowRoot.querySelector('.prompt[role="dialog"]');
        if (dialog && !dialog.getAttribute('aria-label')) {
          const promptData = borealisHeader.data && borealisHeader.data.prompt_data;
          dialog.setAttribute('aria-label', (promptData && promptData.content) || 'Sign in for a personalized experience.');
        }

        const primaryButton = toastActions.querySelector('.action-button[variant="primary"]');
        const secondaryButton = toastActions.querySelector('.action-button[variant="secondary"]');

        primaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_primary_click',
          });
        });

        secondaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_secondary_click',
          });
        });
      })
      .catch((error) => {
        logerr(error);
      });
    };

    const hideToast = () => {
      borealisPrompt.style.opacity = '0';
      setTimeout(() => {
        borealisHeader.data.prompt_data.show = false;
        borealisHeader.update();
      }, 500);
    };

    setTimeout(() => {
      displayToast();
    }, 2000);

  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}]}]}, {"id": "5782556954591232", "name": null, "actions": [{"viewId": "5449686184624128", "changes": [{"dependencies": [], "id": "e7468398-6b6e-41e0-ad5c-799ae48c4f48", "type": "custom_code", "value": function($){((window) => {
  // TOOLS AND DEPENDENCIES
  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            requestAnimationFrame(check);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            requestAnimationFrame(check);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                requestAnimationFrame(waitForShadowRoot);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // LOGGING
  // silent buffer shared by every variation on the page; inspect in DevTools by evaluating:  optlyLogs
  // (copy(optlyLogs) puts it on the clipboard as JSON; a Live Expression on optlyLogs.at(-1) watches it live)
  const EXPERIMENT = 'signin-toast-v4 / variation-1';
  const logs = (window.optlyLogs = window.optlyLogs || []);
  const pushLog = (level, msg) => {
    const entry = { t: Math.round(performance.now()), exp: EXPERIMENT, level: level, msg: msg };
    if (msg instanceof Error) entry.text = msg.stack || msg.message;
    logs.push(entry);
    if (logs.length > 100) logs.shift();
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // cookie helpers
  const cookieExists = (cookieName) => {
    return document.cookie.split('; ').some(cookie => cookie.startsWith(cookieName + '='));
  };

  const setCookie = (cookieName, value, maxAgeDays) => {
    const maxAgeSeconds = maxAgeDays * 24 * 60 * 60;
    document.cookie = cookieName + '=' + value + '; max-age=' + maxAgeSeconds + '; path=/; SameSite=Lax';
  };

  // EXPERIMENT
  // set once the toast has been shown so the visitor only ever sees the offer once
  const toastShownCookie = 'signin-toast-shown';
  const toastShownCookieDays = 7;

  Promise.all([
    waitForOptimizely(10000),
    getShadowElements([
      { selector: 'body', hasShadow: false },
      { selector: 'borealis-header', hasShadow: true },
      { selector: 'borealis-prompt', hasShadow: true },
    ]),
  ])
  .then(([optly, [body, borealisHeader, borealisPrompt]]) => {

    // visitor has already seen the toast on a previous visit; don't show it again
    if (cookieExists(toastShownCookie)) {
      log('toast already shown, exiting');
      return;
    }

    const newStyles = new CSSStyleSheet();
    newStyles.replaceSync(`
      borealis-prompt {
        transition: opacity 0.5s ease;
      }

      @media (min-width: 770px) {
        borealis-prompt {
          top: 12px !important;
        }
      }
    `);

    borealisHeader.shadowRoot.adoptedStyleSheets = [
      ...borealisHeader.shadowRoot.adoptedStyleSheets,
      newStyles
    ];

    const displayToast = () => {
      borealisHeader.data.prompt_data.show = true;
      borealisHeader.update();

      setCookie(toastShownCookie, '1', toastShownCookieDays);

      window.optimizely.push({
        type: 'event',
        eventName: 'signin_toast_display',
      });

      getShadowElements([
        { selector: 'body', hasShadow: false },
        { selector: 'borealis-header', hasShadow: true },
        { selector: 'borealis-prompt', hasShadow: true },
        { selector: '.toast-actions', hasShadow: false },
      ])
      .then(([body, borealisHeader, borealisPrompt, toastActions]) => {
        // the header component binds the dialog's aria-label to prompt_data.title, which the site leaves empty,
        // so screen readers announce an unnamed dialog (Lighthouse: aria-dialog-name). name it with the toast copy;
        // setting prompt_data.title instead would render a visible heading
        const dialog = borealisPrompt.shadowRoot.querySelector('.prompt[role="dialog"]');
        if (dialog && !dialog.getAttribute('aria-label')) {
          const promptData = borealisHeader.data && borealisHeader.data.prompt_data;
          dialog.setAttribute('aria-label', (promptData && promptData.content) || 'Sign in for a personalized experience.');
        }

        const primaryButton = toastActions.querySelector('.action-button[variant="primary"]');
        const secondaryButton = toastActions.querySelector('.action-button[variant="secondary"]');

        primaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_primary_click',
          });
        });

        secondaryButton.addEventListener('click', () => {
          window.optimizely.push({
            type: 'event',
            eventName: 'signin_toast_secondary_click',
          });
        });
      })
      .catch((error) => {
        logerr(error);
      });
    };

    const hideToast = () => {
      borealisPrompt.style.opacity = '0';
      setTimeout(() => {
        borealisHeader.data.prompt_data.show = false;
        borealisHeader.update();
      }, 500);
    };

    setTimeout(() => {
      displayToast();
    }, 2000);

    setTimeout(() => {
      hideToast();
    }, 14000); // 14-2=12 seconds after displaying

  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
}}]}]}], "weightDistributions": [{"entityId": "4692598340714496", "endOfRange": 5000}, {"entityId": "5782556954591232", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6575586091466752"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5449686184624128"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "6290965655191552", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}, {"changes": null, "id": "6683293955915776", "name": null, "commitId": "4573659791097856", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18982362608": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "11855623289"], "audienceName": null, "changes": null, "id": "6029885162913792", "integrationSettings": null, "variations": [{"id": "5445103655845888", "name": null, "actions": [{"viewId": "5594251931680768", "changes": []}]}, {"id": "6571003562688512", "name": null, "actions": [{"viewId": "5594251931680768", "changes": [{"config": {"dialog_background_image": "//cdn.optimizely.com/img/10453949094/fcb112c5a6f54a0bac788d085f1c0102.png", "perk_one_icon": "https://cdn.optimizely.com/img/10453949094/518849c2702d4388b2a736f252d21701.svg", "cta_button_fine_print": "See if you pre-qualify. It takes 30 seconds and your credit score is not impacted.", "brand": "as", "cookie_max_age": 7776000, "perk_three_icon": "https://cdn.optimizely.com/img/10453949094/fdaa4313d38d4a19b52ba3d5fe1e55fc.svg", "cta_button_text": "Pre-Qualify Now", "card_image": "https://cdn.optimizely.com/img/10453949094/d2dede6e09534e4ebd2e3aa1d906e77f.png", "pre_title_text": "Earn", "perk_two_text": "Save up to $90 per person roundtrip with a free checked bag and preferred boarding for you and up to six guests on the same reservation", "post_title_text": "+ Get a free checked bag", "title_text": "70,000 bonus points", "cancel_button_text": "No, thanks", "cookie_id": "20260916", "card_image_alt_text": "Atmos Rewards Visa Card", "perk_one_text": "Earn a $99 Companion Fare (plus taxes and fees from $23)", "cta_button_link": "https://secure.bankofamerica.com/apply-now-services/cards-prequal/initialize-prequal?requesttype=CCAPQ&campaignid=4081095&productoffercode=V8&appflow=USA&locale=en_US&lobchannelcode=ASK003&genericvariables=861~AscentOverlayPQ11.18", "bottom_fine_print": "Online-only. Offer varies elsewhere.", "perk_two_icon": "https://cdn.optimizely.com/img/10453949094/7e9b9a95f47143cfaf05fb9cb3173d36.svg", "cta_button_sr_only_text": "for the Atmos Rewards Card", "perk_three_text": "Earn 3 points for every $1 spent on eligible Alaska Airlines and Hawaiian Airlines purchases"}, "dependencies": [], "name": "Atmos Card Homepage Modal v1.0.0", "type": "widget", "id": "be5202ac-89be-4679-83a0-6556055ed39f", "widget_id": "5786410731438080"}]}]}], "weightDistributions": [{"entityId": "6571003562688512", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6683293955915776"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5594251931680768"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "6029885162913792", "endOfRange": null}]], "experimentWeights": null, "offerConsistency": null}, "concluded": false}], "groups": [], "audiences": [{"id": "10680034899", "name": null, "conditions": ["and", ["or", ["or", {"match": "exact", "name": "optly_alaskaair_test", "type": "cookies", "value": "true"}], ["or", {"match": "exact", "name": "optly_alaskaair_test", "type": "query", "value": "true"}]]]}, {"id": "11692073740", "name": null, "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": null, "type": "device", "value": "iphone"}, {"match": null, "name": null, "type": "device", "value": "mobile"}]]]]}, {"id": "11855623289", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "device", "value": "mobile"}, {"match": null, "name": null, "type": "device", "value": "iphone"}]]]}, {"id": "6160439871012864", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": "audiences", "type": "vendor.tealium", "value": "alaska_main_144"}]]]}, {"id": "6245261633126400", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": "audiences", "type": "vendor.tealium", "value": "alaska_main_1151"}]]]}, {"id": "6437458569592832", "name": null, "conditions": ["and", ["or", ["not", ["or", {"match": "exists", "name": "as_pers", "type": "cookies", "value": ""}]], ["not", ["or", {"match": "exists", "name": "as%5Fpers", "type": "cookies", "value": ""}]]]]}], "listTargetingKeys": [], "visitorAttributes": [{"id": "14740270040", "datatype": "datetime", "dcp_datasource_id": "14734220788"}], "visitorIdLocator": null, "dcpServiceId": "14476500714", "dcpKeyfieldLocators": [{"dcp_datasource_id": "14490160675", "is_optimizely": true, "type": "uid", "name": ""}, {"dcp_datasource_id": "14734220788", "is_optimizely": false, "type": "js_variable", "name": "optlyDCPid"}, {"dcp_datasource_id": "27830120361", "is_optimizely": false, "type": "cookie", "name": "optimizelyEndUserId"}], "integrationSettings": [{"id": "adobe_analytics"}, {"id": "tealium", "dataFetchMethod": "custom_javascript", "functions": {
  fetchData: function() {
    var data = {audiences: [], badges: []};
    if (localStorage.getItem("tealium_va")) {
      try {
        var visData = JSON.parse(localStorage.getItem('tealium_va'));
        if (visData.audiences) {
          for (var id in visData.audiences) {
            if (visData.audiences.hasOwnProperty(id)) {
              data.audiences.push(id);
            }
          }
        }
        if (visData.badges) {
          var badges = visData.badges;
          for (var id in badges) {
            if (badges.hasOwnProperty(id) && badges[id]) {
              data.badges.push(id);
            }
          }
        }
        window["optimizely"].push(["storeThirdPartyData", "tealium", data]);
      } catch (e) {}
    }
  }
}
}], "views": [{"id": "10518584033", "category": "other", "apiName": "10453949094_all_pages", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "https://www.alaskaair.com*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
  // Look for object with timeout
  var startTime = new Date().getTime();
  var lookForObject = setInterval(function() {
    if (new Date().getTime() - startTime > 10000) {
      clearInterval(lookForObject);
    } else {
      try {
        var foundBanner = document.querySelector('.product__graphic-detail[src*="planes"]');
        var foundPartial = false;
        document.querySelectorAll('cms-partial[personalized="true"]').forEach(partial => {
          const img = partial.shadowRoot.querySelector('img.product__graphic-detail');
          if (img) {
            foundPartial = true;
          }
        });
        if (foundBanner || foundPartial) {
          clearInterval(lookForObject);
          options.isActive && activate({ isActive: false });
          activate();
        }
      } catch (error) {
        // Ignore the error and continue
      }
    }
  }, 50);
}
}, {"id": "10520222828", "category": "other", "apiName": "10453949094_url_targeting_for_header_stylebutton", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "http://www.alaskaair.com"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/"}, {"match": "simple", "type": "url", "value": "https://alaskaair.convertlanguage.com/alaskaair/enes/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10520986552", "category": "other", "apiName": "10453949094_nav__change_click", "name": null, "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.alaskaair.com/booking/reservation-lookup?lid=nav:info-viewChange"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10554046304", "category": "other", "apiName": "10453949094_checkout__seat_map_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/travelers"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "seat_map__flight_details", "locator": "#seatmap-tab-item-0 > h3", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "seat_map__return_flight_details", "locator": "#seatmap-tab-item-1 > h3", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "flight_3_details", "locator": "#seatmap-tab-item-2 > h3", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "seat_map__flight_4_details", "locator": "#seatmap-tab-item-3 > h3:nth-of-type(1)", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "seat_selection_description", "locator": ".seat-description", "locatorType": "css_selector", "valueType": "string"}], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 15000) {
            clearInterval(lookForObject);
        } else {
            if (window.utag && window.utag.data) {
                clearInterval(lookForObject);
                activate();
            }
        }
    }, 25);
}
}, {"id": "10557021145", "category": "other", "apiName": "10453949094_checkout_pages", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "*www.alaskaair.com/booking*"}, {"match": "simple", "type": "url", "value": "*www.alaskaair.com/booking?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10557764685", "category": "other", "apiName": "10453949094_content__flight_deals", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/deals/flights?"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "10558814777", "category": "other", "apiName": "10453949094_shopping__price_list", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Flights/Price"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/Shopping/Flights/Price*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/Shopping/Flights/Price?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10559524133", "category": "other", "apiName": "10453949094_content__destination_pages", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/where-we-fly"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/where-we-fly*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/where-we-fly?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10560302348", "category": "other", "apiName": "10453949094_shopping_pages", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "*www.alaskaair.com/Shopping*"}, {"match": "simple", "type": "url", "value": "*www.alaskaair.com/shopping*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10562343061", "category": "other", "apiName": "10453949094_flight_calendar_pageviews", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/shopping/flights"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Flights/ShopCalendar"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 15000) {
            clearInterval(lookForObject);
        } else {
            if (window.utag && window.utag.data) {
                clearInterval(lookForObject);
                activate();
            }
        }
    }, 25);
}
}, {"id": "10564192079", "category": "other", "apiName": "10453949094_checkout__payment_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/addons"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/payment"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Booking/Seats/SelectSeats"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/travelers"}], ["or", {"type": "element_present", "value": "#tripInsuranceContainer"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered.
 * It should return true when the page is ready to activate.
 *
 * Editor now supports ES6 compliant code. Note that adding ES6
 * specific code to an experiment will break for users running
 * ES5-only browsers as code entered is not transpiled down to ES5.
 */

function jsCondition() {
  return !!document.querySelector('#tripInsuranceContainer');
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed", "activationCode": function callbackFn(activate, options) {
    var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 15000) {
            clearInterval(lookForObject);
        } else {
            if (window.utag && window.utag.data) {
                clearInterval(lookForObject);
                activate();
            }
        }
    }, 25);
}
}, {"id": "10564204483", "category": "other", "apiName": "10453949094_shopping__flight_matrix", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Flights/Shop"}, {"match": "substring", "type": "url", "value": "*www.alaskaair.com/Shopping/Flights/Schedule*"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Flights/PriceDisplay"}, {"match": "substring", "type": "url", "value": "https://www.alaskaair.com/Shopping/Flights/ScheduleShoulder"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Flights/ShopUMNR"}], ["not", ["or", {"match": "regex", "type": "url", "value": "www.alaskaair.com/search*"}]]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [{"category": "other", "apiName": "departure_date", "locator": "#Shoulder03 > .Month", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "return_date", "locator": "#Shoulder13 > .Month", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "origindestination_pair", "locator": ".Itinerary", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "destination_city", "locator": "#toCity", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "origin_city", "locator": "#fromCity", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "favorite_destination", "locator": "#divCities > div:nth-of-type(2) .right", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "passenger_search_count", "locator": "#adultCount", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "favorite_origin_city", "locator": "#divCities > div:nth-of-type(1) .right", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "child_passenger_search_count", "locator": "#numChildren", "locatorType": "css_selector", "valueType": "string"}], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 15000) {
            clearInterval(lookForObject);
        } else {
            if (window.utag && window.utag.data) {
                clearInterval(lookForObject);
                activate();
            }
        }
    }, 25);
}
}, {"id": "10573688655", "category": "other", "apiName": "10453949094_chekcout__add_ons_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Booking/Seats/SelectSeats"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/travelers"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10577265303", "category": "other", "apiName": "10453949094_shopping__cart_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "www.alaskaair.com/Shopping/Cart/AddFlight"}, {"match": "regex", "type": "url", "value": "www.alaskaair.com\\/shopping\\/cart*"}, {"match": "regex", "type": "url", "value": "www.alaskaair.com\\/Shopping\\/Cart\\/SwapPrice?"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 15000) {
            clearInterval(lookForObject);
        } else {
            if (window.utag && window.utag.data) {
                clearInterval(lookForObject);
                activate();
            }
        }
    }, 25);
}
}, {"id": "10587380193", "category": "other", "apiName": "10453949094_cart_views", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/shopping/cart"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationCode": 
function callbackFn(activate, options) {
   var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 10000) {
            clearInterval(lookForObject);
        } else {
            if (document.querySelector('.empty-cart-text-container')) {
                activate();
                clearInterval(lookForObject);
            }
        }
    }, 50);
}
}, {"id": "10597072554", "category": "other", "apiName": "10453949094_shopping__planbook_page", "name": null, "staticConditions": ["or", ["or", {"match": "regex", "type": "url", "value": "*www.alaskaair.com/planbook*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/planbook?*"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/planbook"}], ["or", {"match": "regex", "type": "url", "value": "https://alaskaair.convertlanguage.com/alaskaair/enes/planbook?*"}, {"match": "regex", "type": "url", "value": "https://alaskaair.convertlanguage.com/alaskaair/enes/planbook*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10601152321", "category": "other", "apiName": "10453949094_checkout__signin_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Booking/SignIn"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10603832667", "category": "other", "apiName": "10453949094_content__alaska_airlines_visa_landing_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/credit-card/visa-signature"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/credit-card/visa-signature*"}, {"match": "simple", "type": "url", "value": "*www.alaskaair.com/content/credit-card/visa-signature?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10611175715", "category": "other", "apiName": "10453949094_day_of_travel__checkin_pages", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://webselfservice.alaskaair.com/checkinweb/default.aspx"}, {"match": "regex", "type": "url", "value": "*webselfservice.alaskaair.com/checkinweb*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10614772588", "category": "other", "apiName": "10453949094_myaccount_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/www2/ssl/myalaskaair/myalaskaair.aspx"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/www2/ssl/myalaskaair/myalaskaair.aspx*"}], ["or", {"match": "simple", "type": "url", "value": "https://alaskaair.convertlanguage.com/alaskaair/enes/www2/ssl/myalaskaair/MyAlaskaAir.aspx"}, {"match": "regex", "type": "url", "value": "https://alaskaair.convertlanguage.com/alaskaair/enes/www2/ssl/myalaskaair/myalaskaair.aspx?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10621311595", "category": "other", "apiName": "10453949094_loyalty__mileage_plan_signup_form", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/enroll"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10622014626", "category": "other", "apiName": "10453949094_content__premium_class_information_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/travel-info/flight-experience/premium-class"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/travel-info/flight-experience/premium-class*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/travel-info/flight-experience/premium-class?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10624701842", "category": "other", "apiName": "10453949094_loyalty__member_benefits_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/mileage-plan"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan*"}, {"match": "simple", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10628294653", "category": "other", "apiName": "10453949094_content__first_class_information_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/travel-info/flight-experience/first-class"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10649460857", "category": "other", "apiName": "10453949094_mp_member_login", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/www2/ssl/myalaskaair/myalaskaair.aspx?CurrentForm=UCMyAccountActivity"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10653351948", "category": "other", "apiName": "10453949094_alpha__all_pages", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "*alpha15.alaskaair.com*"}, {"match": "regex", "type": "url", "value": "*alpha15.alaskaair.com?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10676781045", "category": "other", "apiName": "10453949094_flight_deals_nav_link_click", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/deals/flights?lid=nav:explore-flights&int=AS_NAV_Explore_DealsFlights_-prodID:FareSales"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/deals/flights?lid=nav:explore-flights&int=AS_NAV_Explore_DealsFlights_-prodID:FareSales"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10677093524", "category": "other", "apiName": "10453949094_shopping__default_flight_matrix_page", "name": null, "staticConditions": ["or", ["or", {"match": "regex", "type": "url", "value": "https://www.alaskaair.com/Shopping/Flights/ScheduleShoulder/*"}], ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Flights/Shop"}], ["or", {"match": "regex", "type": "url", "value": "https://www.alaskaair.com/Shopping/Flights/ShopUpgrade*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "10701400161", "category": "other", "apiName": "10453949094_web_checkin__boarding_pass", "name": null, "staticConditions": ["or", ["or", {"match": "regex", "type": "url", "value": "*webselfservice.alaskaair.com/checkinweb/CommandRouter.aspx*"}, {"match": "regex", "type": "url", "value": "*webselfservice.alaskaair.com/checkinweb/CommandRouter.aspx?*"}, {"match": "regex", "type": "url", "value": "*webselfservice.alaskaair.com/checkinweb/DisplayPNR.aspx*"}, {"match": "regex", "type": "url", "value": "*webselfservice.alaskaair.com/checkinweb/DisplayPNR.aspx?*"}, {"match": "simple", "type": "url", "value": "https://webselfservice.alaskaair.com/checkinweb/CommandRouter.aspx?cmd=CheckInTransaction"}, {"match": "regex", "type": "url", "value": "*webselfservice.alaskaair.com/checkinweb/CommandRouter.aspx?cmd=CheckInTransaction"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10727852242", "category": "other", "apiName": "10453949094_trip_protection_faq_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/gifts-and-products/travel-insurance/trip-protection-faq"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/gifts-and-products/travel-insurance/trip-protection-faq*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/gifts-and-products/travel-insurance/trip-protection-faq?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10731972033", "category": "other", "apiName": "10453949094_checkout__mow_confirmation", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/booking/confirmation"}], ["or", {"type": "element_present", "value": ".server-msg-error"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "passengers", "locator": ".cardheadlabeltaxes > b", "locatorType": "css_selector", "valueType": "currency"}, {"category": "other", "apiName": "revenue", "locator": function($){var baseString = document.querySelector('#base-fare-total').innerHTML;

return parseInt(baseString.replace(/\D/g,''));
}, "locatorType": "javascript", "valueType": "number"}, {"category": "other", "apiName": "mow_product_string", "locator": function($){var tagValue = "TAG_VALUE"; 
return tagValue;
}, "locatorType": "javascript", "valueType": "string"}, {"category": "other", "apiName": "error_code", "locator": ".server-msg-error", "locatorType": "css_selector", "valueType": "string"}], "activationType": "dom_changed"}, {"id": "10738300916", "category": "other", "apiName": "10453949094_mow_booking_signin", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/booking/signin"}, {"match": "regex", "type": "url", "value": "*m.alaskaair.com/booking/signin"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10739301092", "category": "other", "apiName": "10453949094_mow_home_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "m.alaskaair.com"}, {"match": "regex", "type": "url", "value": "*m.alaskaair.com"}, {"match": "regex", "type": "url", "value": "*m.alaskaair.com?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10740071449", "category": "other", "apiName": "10453949094_mow_mp_signin_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/account/signin"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10744792375", "category": "other", "apiName": "10453949094_mow_pnr_page", "name": null, "staticConditions": ["or", ["or", {"match": "regex", "type": "url", "value": "*m.alaskaair.com/Reservations/Details"}, {"match": "regex", "type": "url", "value": "*m.alaskaair.com/Reservations/Details*"}, {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/Reservations/Details"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10753950985", "category": "other", "apiName": "10453949094_mow_payment_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/booking/payment"}], ["or", {"type": "element_present", "value": ".server-msg-error"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "10764570182", "category": "other", "apiName": "10453949094_mow_myaccount_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/account"}, {"match": "regex", "type": "url", "value": "*m.alaskaair.com/account*"}, {"match": "regex", "type": "url", "value": "*m.alaskaair.com/account?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10819038429", "category": "other", "apiName": "10453949094_airline_partners_landing_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/mileage-plan/how-to-earn-miles/airline-partners"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan/how-to-earn-miles/airline-partners*"}, {"match": "simple", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan/how-to-earn-miles/airline-partners?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10823894880", "category": "other", "apiName": "10453949094_financial_partners_landing_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/mileage-plan/how-to-earn-miles/financial-partners"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan/how-to-earn-miles/financial-partners*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan/how-to-earn-miles/financial-partners?*"}, {"match": "regex", "type": "url", "value": "alaskaair.convertlanguage.com/alaskaair/enes/content/mileage-plan/how-to-earn-miles/financial-partners*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10843610207", "category": "other", "apiName": "10453949094_mileage_plan_landing_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/mileage-plan/how-to-earn-miles"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan/how-to-earn-miles*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan/how-to-earn-miles?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10847200044", "category": "other", "apiName": "10453949094_everyday_partners_landing_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/mileage-plan/how-to-earn-miles/everyday-partners"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan/how-to-earn-miles/everyday-partners*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan/how-to-earn-miles/everyday-partners?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10873482609", "category": "other", "apiName": "10453949094_content__apply_for_credit_card_landing_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/mileage-plan/how-to-earn-miles/financial-partners"}, {"match": "regex", "type": "url", "value": "https://www.alaskaair.com/content/mileage-plan/how-to-earn-miles/financial-partners*"}, {"match": "regex", "type": "url", "value": "https://www.alaskaair.com/content/mileage-plan/how-to-earn-miles/financial-partners?*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan/how-to-earn-miles/financial-partners*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan/how-to-earn-miles/financial-partners?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10928120805", "category": "other", "apiName": "10453949094_checkout_pages_1", "name": null, "staticConditions": ["or", ["or", {"match": "regex", "type": "url", "value": "*www.alaskaair.com/Booking*"}, {"match": "simple", "type": "url", "value": "*www.alaskaair.com/Booking/*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10939840690", "category": "other", "apiName": "10453949094_day_of_travel__mow_checkin_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/checkin"}, {"match": "regex", "type": "url", "value": "*m.alaskaair.com/checkin*"}, {"match": "regex", "type": "url", "value": "*m.alaskaair.com/checkin*"}, {"match": "regex", "type": "url", "value": "*m.alaskaair.com/checkin?*"}, {"match": "regex", "type": "url", "value": "*m.alaskaair.com/checkin/*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "10943970528", "category": "other", "apiName": "10453949094_day_of_travel__view_pnr_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/Reservations/Details"}, {"match": "regex", "type": "url", "value": "*m.alaskaair.com/Reservations/Details"}, {"match": "regex", "type": "url", "value": "*m.alaskaair.com/Reservations/Details*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11086000316", "category": "other", "apiName": "10453949094_mow_contact_us_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/contact"}, {"match": "regex", "type": "url", "value": "*m.alaskaair.com/contact*"}, {"match": "regex", "type": "url", "value": "*m.alaskaair.com/contact?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11111070353", "category": "other", "apiName": "10453949094_contact_us_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/about-us/contact-us/phone-numbers"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/about-us/contact-us/phone-numbers*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/about-us/contact-us/phone-numbers?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11367800015", "category": "other", "apiName": "10453949094_loyalty__mileage_plan_join_form", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/account/join-mileage-plan"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/account/join-mileage-plan*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/account/join-mileage-plan?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11407060577", "category": "other", "apiName": "10453949094_content__flights_to_hawaii_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/cities/flights-to/flights-to-hawaii"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/cities/flights-to/flights-to-hawaii*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/cities/flights-to/flights-to-hawaii?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11473971008", "category": "other", "apiName": "10453949094_loyalty__mileage_plan_deals", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/mileage-plan/use-miles/deals"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan/use-miles/deals*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan/use-miles/deals?*"}], ["or", {"match": "simple", "type": "url", "value": "https://alaskaair.convertlanguage.com/alaskaair/enes/content/mileage-plan/use-miles/deals"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11475873255", "category": "other", "apiName": "10453949094_gift_certificate_sales_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/certificates/ssl/GiftCertificateStart.aspx"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/certificates/ssl/GiftCertificateStart.aspx*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/certificates/ssl/GiftCertificateStart.aspx?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11498492780", "category": "other", "apiName": "10453949094_loyalty__club_49_landing_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/mileage-plan/club-49"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan/club-49*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/mileage-plan/club-49?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11502452375", "category": "other", "apiName": "10453949094_content__baggage_info", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/travel-info/baggage/overview"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/travel-info/baggage/overview*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/travel-info/baggage/overview?*"}], ["or", {"match": "simple", "type": "url", "value": "https://alaskaair.convertlanguage.com/alaskaair/enes/content/travel-info/baggage/overview"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11580341517", "category": "other", "apiName": "10453949094_all_pages__mp_dropdown_open", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "https://www.alaskaair.com*"}, {"match": "regex", "type": "url", "value": "https://alaskaair.convertlanguage.com*"}, {"match": "regex", "type": "url", "value": "https://webselfservice.alaskaair.com/checkinweb*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function trigger(activate, options) {
  var utils = window.optimizely.get('utils');

  utils.waitForElement('#navMileagePlan').then(function(buttonElement) {
    buttonElement.addEventListener('click', activate);
  });
}
}, {"id": "11691831760", "category": "other", "apiName": "10453949094_shopping__planbook_spanish", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://alaskaair.convertlanguage.com/alaskaair/enes/planbook"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11699941491", "category": "other", "apiName": "10453949094_content__baggage_info_spanish", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://alaskaair.convertlanguage.com/alaskaair/enes/content/travel-info/baggage/overview"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11711331229", "category": "other", "apiName": "10453949094_all_pages__spanish", "name": null, "staticConditions": ["or", ["or", {"match": "regex", "type": "url", "value": "*alaskaair.convertlanguage.com*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11716761631", "category": "other", "apiName": "10453949094_loyalty__mileage_plan_deals_spanish_block", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://alaskaair.convertlanguage.com/alaskaair/enes/content/mileage-plan/use-miles/deals"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11719241339", "category": "other", "apiName": "10453949094_loyalty__myaccount_page_spanish", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://alaskaair.convertlanguage.com/alaskaair/enes/www2/ssl/myalaskaair/myalaskaair.aspx"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11720692358", "category": "other", "apiName": "10453949094_loyalty__mileage_plan_partners_spanish", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://alaskaair.convertlanguage.com/alaskaair/enes/content/mileage-plan/how-to-earn-miles/financial-partners"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11734190224", "category": "other", "apiName": "10453949094_home_page__spanish", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://alaskaair.convertlanguage.com/alaskaair/enes/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11787770337", "category": "other", "apiName": "10453949094_shopping__flight_matrix_miles_shopping", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Flights/Shop"}], ["or", {"type": "element_present", "value": "#ShoppingForm > div.navLinks > table > tbody > tr > td:nth-child(2)"}]], "deactivationEnabled": true, "undoOnDeactivation": false, "tags": []}, {"id": "11795575473", "category": "other", "apiName": "10453949094_loyalty__club_49_registration_form", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/RegistrationPromo/Club49Registration/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "11879450545", "category": "other", "apiName": "10453949094_loyalty__easybiz_login_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://easybiz.alaskaair.com/signin"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "12016244792", "category": "other", "apiName": "10453949094_loyalty__my_trips", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/trips"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "12107822182", "category": "other", "apiName": "10453949094_day_of_travel__web_checkin_pages", "name": null, "staticConditions": ["or", ["or", {"match": "regex", "type": "url", "value": "*webselfservice.alaskaair.com/checkinweb/default.aspx*"}, {"match": "regex", "type": "url", "value": "*webselfservice.alaskaair.com/checkinweb/default.aspx?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "12201087981", "category": "other", "apiName": "10453949094_shopping__mow_flight_matrix", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/shopping/flights"}, {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/shopping/flightsshoulder"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "12357301982", "category": "other", "apiName": "10453949094_checkout__signin_page_w_not_enough_miles_modal", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/checkout"}], ["or", {"type": "element_present", "value": "#errorTextSummaryId"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "12825750640", "category": "other", "apiName": "10453949094_winter_sale_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/deals/flights/winter-sale"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "12839890272", "category": "other", "apiName": "10453949094_loyalty__credit_card_sem_landing_page", "name": null, "staticConditions": ["or", ["or", {"match": "regex", "type": "url", "value": "alaskaair.com\\/content\\/credit-card\\/visa-signature\\?semid"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "12862700645", "category": "other", "apiName": "10453949094_loyalty__seo_credit_card_landing_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "www.alaskaair.com/content/credit-card/visa-signature"}], ["not", ["or", {"match": "regex", "type": "url", "value": "*www.alaskaair.com/content/credit-card/visa-signature?semid=*"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "12930390186", "category": "other", "apiName": "10453949094_shopping__cart_page__saver_upsell", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "cart_upsell_success", "locator": ".saver-upsell-section", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "cabin_type", "locator": ".cabin-large-bold", "locatorType": "css_selector", "valueType": "string"}]}, {"id": "12988310346", "category": "other", "apiName": "10453949094_checkout__request_services_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/travelers"}], ["or", {"type": "element_present", "value": "#ssrTitle"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "12990720242", "category": "other", "apiName": "10453949094_checkout__travelers_information_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/checkout"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/travelers"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Booking/SignIn"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "12998280258", "category": "other", "apiName": "first_class_upsell_cta_text", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return !!document.querySelector('saver-to-main-single-upsell');
}
}], ["or", {"type": "element_present", "value": "saver-to-main-single-upsell"}], ["not", ["or", {"match": "substring", "type": "url", "value": "&meta="}]]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "13360520231", "category": "other", "apiName": "10453949094_shopping__cart_pgae_w_top_up", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "www.alaskaair.com/Shopping/Cart/AddFlight"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com\\/Shopping\\/Cart\\/AddFlight*"}, {"match": "regex", "type": "url", "value": "*www.alaskaair.com\\/Shopping\\/Cart\\/AddFlight?*"}, {"match": "regex", "type": "url", "value": "www.alaskaair.com\\/shopping\\/cart*"}, {"match": "regex", "type": "url", "value": "www.alaskaair.com\\/shopping\\/cart?*"}, {"match": "simple", "type": "url", "value": "www.alaskaair.com\\/Shopping\\/Cart\\/SwapPrice?"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "13379740149", "category": "other", "apiName": "10453949094_checkout__confirmation_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/reservation"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/payment"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/checkout"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/reservation-lookup?"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "fare_information", "locator": function($){var tagValue = "TAG_VALUE"; 
return tagValue;
}, "locatorType": "javascript", "valueType": "string"}, {"category": "other", "apiName": "revenue_utag_data", "locator": function($){var products = window.utag_data.products; 
return products;
}, "locatorType": "javascript", "valueType": "string"}, {"category": "other", "apiName": "payment_summary", "locator": "#PriceSummaryPanel strong", "locatorType": "css_selector", "valueType": "string"}], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 15000) {
            clearInterval(lookForObject);
        } else {
            if (window.utag && window.utag.data) {
                clearInterval(lookForObject);
                activate();
            }
        }
    }, 25);
}
}, {"id": "13641360094", "category": "other", "apiName": "10453949094_search_results_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/search#stq="}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "13667390517", "category": "other", "apiName": "10453949094_temp_new_home_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://preview.alaskaair.com/content/homepage/homepage-new-static"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "13830900068", "category": "other", "apiName": "10453949094_preview_home_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://preview.alaskaair.com/content/homepage/homepage-new"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "13852890246", "category": "other", "apiName": "10453949094_shopping_cart__saver_upsell__optly_callback", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/AddFlight"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": 
function callbackFn(activate, options) {
   var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 10000) {
            clearInterval(lookForObject);
        } else {
            if (document.getElementById('upgrade-to-main')) {
                activate();
                clearInterval(lookForObject);
            }
        }
    }, 50);
}
}, {"id": "14195380043", "category": "other", "apiName": "10453949094_confirmation_page__ancillary_swap", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/payment"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/reservation/"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/reservation-lookup"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "destination_city", "locator": "table.clear td:nth-of-type(3)", "locatorType": "css_selector", "valueType": "string"}], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
  
  var utils = window.optimizely.get('utils');
  utils.waitForElement('#carAdSection > car-component-container').then(function(buttonElement) {

var today = new Date();
var departureDate = new Date (JSON.parse(document.querySelector('#carAdSection > car-component-container').getAttribute('trip-info')).flight.legs[0].departure.datetime);
var oneDay = 24*60*60*1000;
var diffDays = Math.round(Math.abs((today.getTime() - departureDate.getTime())/(oneDay)));

    if(diffDays >=  21 ){
      activate();
    }

  });
}
}, {"id": "14219770474", "category": "other", "apiName": "10453949094_content__flights_from_the_east_coast", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/cities/flights-from/east-coast"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "14629510215", "category": "other", "apiName": "10453949094_all_pages__responsive_menu_open", "name": null, "staticConditions": ["or", ["or", {"match": "regex", "type": "url", "value": "https://www.alaskaair.com*"}, {"match": "regex", "type": "url", "value": "https://alaskaair.convertlanguage.com*"}, {"match": "simple", "type": "url", "value": "https://webselfservice.alaskaair.com/checkinweb*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function trigger(activate, options) {
  var utils = window.optimizely.get('utils');

  utils.waitForElement('#hf-nav-mobile-toggle').then(function(buttonElement) {
    buttonElement.addEventListener('click', activate);
  });
}
}, {"id": "15552401743", "category": "other", "apiName": "10453949094_test_landing_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "15556970544", "category": "other", "apiName": "10453949094_add_flight__flight_summary__pricedif_logic", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/AddFlight"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return window.hasFCUpsell;
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "main_to_first_percentage_difference", "locator": function($){var node = document.querySelector('.upsell-section');
  var nodePrice = node.dataset.maintofirstpercentagedifference;
return nodePrice;
}, "locatorType": "javascript", "valueType": "string"}, {"category": "other", "apiName": "main_to_first_price_difference", "locator": function($){var node = document.querySelector('.upsell-section');
  var nodePrice = node.dataset.maintofirstpricedifference;
return nodePrice;
}, "locatorType": "javascript", "valueType": "string"}, {"category": "other", "apiName": "price_matrix_selection", "locator": function($){var tagValue = "TAG_VALUE"; 
return tagValue;
}, "locatorType": "javascript", "valueType": "string"}], "activationCode": /**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://developers.optimizely.com/x/solutions/javascript/topics/dynamic-websites/index.html#polling
 */

function pollingFn() {
  return document.querySelector('#firstClassUpsell') !== null;
}
}, {"id": "15752811181", "category": "other", "apiName": "10453949094_cartier", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/shopping/cart"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "15897590470", "category": "other", "apiName": "10453949094_deals_page_alternate_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/deals/flights?t=v1"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "16040770229", "category": "other", "apiName": "10453949094_view_pnr__reservation_lookup", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/reservation-lookup"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/reservationlookup"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/reservation-lookup"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "16383180349", "category": "other", "apiName": "10453949094_mow_payment_page_2", "name": null, "staticConditions": ["or", ["or", {"type": "element_present", "value": "#visa-checkout-button > img,.v-button"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "16482890244", "category": "other", "apiName": "10453949094_hybrid_homepage_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https:alaskaair.com/homepage"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com?travel1_test"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "16534280501", "category": "other", "apiName": "10453949094_home_page_for_redirect1", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "http://www.alaskaair.com?travel1_test"}, {"match": "simple", "type": "url", "value": "http://www.alaskaair.com"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "16547640220", "category": "other", "apiName": "10453949094_home_pagefor_redirect2_no_booking", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "http://www.alaskaair.com"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com"}, {"match": "simple", "type": "url", "value": "https://alaskaair.convertlanguage.com/alaskaair/enes/"}], ["not", ["or", {"match": "exact", "type": "url", "value": "http://www.alaskaair.com?notravel2_test"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "16634060290", "category": "other", "apiName": "10453949094_hybrid_redirect_no_booking", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "http://www.alaskaair.com/"}, {"match": "simple", "type": "url", "value": "http://www.alaskaair.com/?notravel2_test"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "16871870583", "category": "other", "apiName": "10453949094_demo_homepage", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "16907590499", "category": "other", "apiName": "10453949094_deals_redirect_v2__hybrid_page_content_flight_deals", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/deals/flights"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "17023520673", "category": "other", "apiName": "10453949094_mobile_homepage", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "17263860706", "category": "other", "apiName": "10453949094_cart_page_meta_upsell_saver", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/AddNewFlight?*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "number_of_passengers", "locator": ".rowDiv h4", "locatorType": "css_selector", "valueType": "currency"}, {"category": "other", "apiName": "price_for_saver", "locator": ".rowDiv > .totalPrice", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "saver_to_main_upsell_price", "locator": function($){var tagValue = "TAG_VALUE"; 
return tagValue;
}, "locatorType": "javascript", "valueType": "string"}, {"category": "other", "apiName": "saver_upsell_incremental_price", "locator": function($){var element = document.querySelector('saver-to-main-dual-upsell');

var meta_price = element.getAttribute('price');

return meta_price;
}, "locatorType": "javascript", "valueType": "string"}, {"category": "other", "apiName": "upsell_on_control", "locator": ".upgrade-amount", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "selection", "locator": ".cabin-large-bold", "locatorType": "css_selector", "valueType": "string"}], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 15000) {
            clearInterval(lookForObject);
        } else {
            if (window.utag && window.utag.data) {
                clearInterval(lookForObject);
                activate();
            }
        }
    }, 25);
}
}, {"id": "17266250953", "category": "other", "apiName": "10453949094_url_targeting_for_mow_fc_upsell", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "www.alaskaair.com"}], ["or", {"type": "custom_code", "value": function callbackFn(activate, options) {
    var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 15000) {
            clearInterval(lookForObject);
        } else {
            if (window.utag && window.utag.data) {
                clearInterval(lookForObject);
                activate();
            }
        }
    }, 25);
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "fc_upsell_difference", "locator": "strong", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "_number_of_passengers", "locator": ".total-text", "locatorType": "css_selector", "valueType": "currency"}, {"category": "other", "apiName": "total_price", "locator": ".total-price", "locatorType": "css_selector", "valueType": "string"}], "activationType": "url_changed"}, {"id": "17267824399", "category": "other", "apiName": "10453949094_url_targeting_for_cart_upsell_non_meta", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/AddFlight?"}, {"match": "simple", "type": "url", "value": "www.alaskaair.com/Shopping/Cart/AddFlight"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/shopping/cart?lid=nav:cart&int=AS_NAV_CART_-prodID:ShoppingBooking"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/AddNewFlight?"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "main_cabin_price", "locator": ".rowDiv > .totalPrice", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "passengers", "locator": ".rowDiv h4", "locatorType": "css_selector", "valueType": "currency"}, {"category": "other", "apiName": "control_upsell_price", "locator": ".upgrade-amount", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "ftype3", "locator": "tr:nth-of-type(7) .cabin-large-bold", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "ftype4", "locator": "tr:nth-of-type(12) .cabin-large-bold", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "flight_type_2nd", "locator": "tr:nth-of-type(4) .cabin-large-bold", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "ftype1", "locator": "tr:nth-of-type(1) .cabin-large-bold", "locatorType": "css_selector", "valueType": "string"}], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 15000) {
            clearInterval(lookForObject);
        } else {
            if (window.utag && window.utag.data) {
                clearInterval(lookForObject);
                activate();
            }
        }
    }, 25);
}
}, {"id": "17287154297", "category": "other", "apiName": "10453949094_url_for_cart_upsell_success_message", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/AddMainUpsellFlightForSaver?"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 15000) {
            clearInterval(lookForObject);
        } else {
            if (window.utag && window.utag.data) {
                clearInterval(lookForObject);
                activate();
            }
        }
    }, 25);
}
}, {"id": "17422201225", "category": "other", "apiName": "10453949094_confirmation_page_scrape", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/payment"}], ["or", {"type": "element_present", "value": ".confirmCodeWrap"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "final_paid", "locator": ".header1 > .amount", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "flight_type_2", "locator": "tr:nth-of-type(4) .cabin-large-bold", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "flight_type_1", "locator": "tr:nth-of-type(1) .cabin-large-bold", "locatorType": "css_selector", "valueType": "string"}], "activationType": "dom_changed"}, {"id": "17489330016", "category": "other", "apiName": "10453949094_mow_cart_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/shopping/summary"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "upsell_price", "locator": ".total-price", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "flight_number", "locator": ".optionHeaderFltNum", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "date_of_flight", "locator": ".summary__option-caption > span:nth-of-type(1)", "locatorType": "css_selector", "valueType": "string"}, {"category": "other", "apiName": "saver_upsell_price", "locator": function($){return document.querySelector('#firstSaverUpsell').getAttribute('price');
}, "locatorType": "javascript", "valueType": "string"}, {"category": "other", "apiName": "passengers", "locator": ".total-text", "locatorType": "css_selector", "valueType": "currency"}, {"category": "other", "apiName": "saver", "locator": ".summary__option-caption__fare-family", "locatorType": "css_selector", "valueType": "string"}], "activationType": "polling", "activationCode": /**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://developers.optimizely.com/x/solutions/javascript/topics/dynamic-websites/index.html#polling
 */

function pollingFn() {
  return document.querySelector('.summary__option-caption__fare-family').innerHTML.toLowerCase() === 'saver';
}
}, {"id": "17841420684", "category": "other", "apiName": "10453949094_covid_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Flights/Shop"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/AddFlight?"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/AddNewFlight?"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "17842020376", "category": "other", "apiName": "10453949094_mow_cart_page_covid", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/shopping/summary"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "17853311143", "category": "other", "apiName": "10453949094_cart_upsell_success_message_main_to_fc", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/AddFirstUpsellFlightForMain?"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 15000) {
            clearInterval(lookForObject);
        } else {
            if (window.utag && window.utag.data) {
                clearInterval(lookForObject);
                activate();
            }
        }
    }, 25);
}
}, {"id": "17935044883", "category": "other", "apiName": "10453949094_change_seats_1", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/seats/ChangeSeats"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 15000) {
            clearInterval(lookForObject);
        } else {
            if (window.utag && window.utag.data) {
                clearInterval(lookForObject);
                activate();
            }
        }
    }, 25);
}
}, {"id": "17979430752", "category": "other", "apiName": "10453949094_change_seats_2", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/seats/ChangeSeatsConfirm"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 15000) {
            clearInterval(lookForObject);
        } else {
            if (window.utag && window.utag.data) {
                clearInterval(lookForObject);
                activate();
            }
        }
    }, 25);
}
}, {"id": "18116950272", "category": "other", "apiName": "10453949094_mow_payment_page__with_apple_pay", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/booking/payment"}], ["or", {"type": "element_present", "value": "#apple-pay"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "18163582001", "category": "other", "apiName": "10453949094_mow_payment_page__with_apple_pay_and_no_visa_checkou", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/booking/payment"}, {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/booking/confirmation"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return !document.querySelector('#visa-src-div');
}
}], ["or", {"type": "element_present", "value": "#apple-pay"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "18180031450", "category": "other", "apiName": "10453949094_mow_payment_page__with_apple_pay_and_visa_checkout", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/booking/payment"}, {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/booking/confirmation"}], ["or", {"type": "element_present", "value": "#visa-src-div"}], ["or", {"type": "element_present", "value": "#apple-pay"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "18183640646", "category": "other", "apiName": "10453949094_cart_page_with_uplift", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/AddFlight?"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/AddNewFlight?"}], ["or", {"type": "element_present", "value": ".up_from_cart_pill"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  return parseInt(document.querySelector('.totalPrice').innerText.replace(/\D/g, '')) / 100 > 300;
}
}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "18210721712", "category": "other", "apiName": "10453949094_payment_page_wuplift", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/travelers"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "18585772058", "category": "other", "apiName": "10453949094_preview_seat_map", "name": null, "staticConditions": ["or", ["or", {"type": "element_present", "value": "#seatsui2 > .preview"}]], "deactivationEnabled": true, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "number_of_segments", "locator": function($){var tagValue = document.querySelector("#seatsui2 > div > div.main-content > div.top-content > div.tabs > div").children.length; 
return tagValue;
}, "locatorType": "javascript", "valueType": "number"}], "activationType": "dom_changed"}, {"id": "18603392262", "category": "other", "apiName": "10453949094_interactive_seat_map", "name": null, "staticConditions": ["or", ["or", {"type": "element_present", "value": "#seatsui2 > .selectable"}]], "deactivationEnabled": true, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "number_of_seat_passengers", "locator": function($){var tagValue = document.querySelector(".content .passenger").children.length; 
return tagValue;
}, "locatorType": "javascript", "valueType": "number"}, {"category": "other", "apiName": "number_of_seat_segments", "locator": function($){var tagValue = document.querySelector("#seatsui2 > div > div.main-content > div.top-content > div.tabs > div").children.length; 
return tagValue;
}, "locatorType": "javascript", "valueType": "number"}], "activationType": "dom_changed", "activationCode": function callbackFn(activate, options) {
    var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 15000) {
            clearInterval(lookForObject);
        } else {
            if (window.utag && window.utag.data) {
                clearInterval(lookForObject);
                activate();
            }
        }
    }, 25);
}
}, {"id": "18652161301", "category": "other", "apiName": "10453949094_mow_confirmation_metric_testing", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/booking/confirmation"}], ["or", {"type": "element_present", "value": ".server-msg-success"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "18734030458", "category": "other", "apiName": "10453949094_2_day_sale", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/?WFAnywhere"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "18769730571", "category": "other", "apiName": "10453949094_2_day_care_sale_page", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/retaincontent/sc9/content/homepage-staging"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "18862521256", "category": "other", "apiName": "10453949094_iframe_widget", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/deals/flightformlet?lid=nav:explore-flights&INT-_AS_NAV_-prodID:FareSales"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "19183580418", "category": "other", "apiName": "10453949094__pet_policy", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/travel-info/policies/pets-traveling-with-pets?lid=nav:info-pets"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "20057571869", "category": "other", "apiName": "10453949094_trip_protection_faq_page_1", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/gifts-and-products/travel-insurance?lid=nav:book-tripProtection&int=AS_NAV_Book_TripInsurance_-prodID:Ancillary"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "20356451409", "category": "other", "apiName": "10453949094_everymundo_deals_page_bot_widget", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/en/flight-deals"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "20369470240", "category": "other", "apiName": "10453949094_everymundo_deals_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/en/flight-search"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "20915180128", "category": "other", "apiName": "10453949094_main_cabin_product_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/travel-info/flight-experience/main-cabin"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21125531168", "category": "other", "apiName": "10453949094_first_class_meta_targeting", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/AddNewFlight?"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/shopping/cart/?"}], ["or", {"match": "substring", "type": "url", "value": "&meta="}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21828910228", "category": "other", "apiName": "10453949094_route_map_price_display", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/oneworld/route-map"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22017505618", "category": "other", "apiName": "10453949094_home_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "www.alaskaair.com"}], ["not", ["or", {"match": "exact", "type": "url", "value": "https://www.alaskaair.com/?SITE_PREF=full&cid=mobsite-home&lid=footer%3AfullSite"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22042661185", "category": "other", "apiName": "10453949094_url_targeting_for_copy_of_car__hotel_banner_on_pla_3", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/planbook?lid=nav:book-flights&int=AS_NAV_Book_Flights_-prodID:ShoppingBooking"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22584081197", "category": "other", "apiName": "10453949094_change_seats_form", "name": null, "staticConditions": ["or", ["or", {"match": "simple", "type": "url", "value": "alaskaair.com/seats/ChangeSeatsForm"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "22588630593", "category": "other", "apiName": "10453949094_upgrade_to_premium_class", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/seats"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22800761677", "category": "other", "apiName": "10453949094_microsite", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/search/results"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "23478360826", "category": "other", "apiName": "10453949094_mow_qa", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://mow-qa.alaskaair.com/booking/confirmation"}, {"match": "simple", "type": "url", "value": "https://mow-qa.alaskaair.com/booking/payment"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "error_msg", "locator": ".server-msg-error", "locatorType": "css_selector", "valueType": "string"}], "activationType": "dom_changed"}, {"id": "25216120019", "category": "other", "apiName": "10453949094_latin_sales_page_flight_deals", "name": null, "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.alaskaair.com/content/deals/flights/sale?int=AS_HomePage_HERO%7C%7C20232208-latin%7C%7C-prodID:FareSale"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25228890987", "category": "other", "apiName": "10453949094_url_targeting_for_copy_of_copy_of_prod_car__hotel__1", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/planbook?lid=nav:book-flights&int=AS_NAV_Book_Flights_-prodID:ShoppingBooking"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25741390021", "category": "other", "apiName": "10453949094_sale_deal_page", "name": null, "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.alaskaair.com/content/deals/flights/sale?int=AS_HomePage_HERO%7C%7C20230310-flash%7C%7C-prodID:FareSale"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "26140660524", "category": "other", "apiName": "10453949094_new_cart", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.alaskaair.com/search/cart?"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
    var startTime = new Date().getTime();
    var lookForObject = setInterval(function() {

        if (new Date().getTime() - startTime > 15000) {
            clearInterval(lookForObject);
        } else {
            if (window.utag && window.utag.data) {
                clearInterval(lookForObject);
                activate();
            }
        }
    }, 25);
}
}, {"id": "26191071171", "category": "other", "apiName": "10453949094_nav_new_deals_page", "name": null, "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.alaskaair.com/content/deals/flights?lid=nav:explore-flights&int=AS_NAV_Explore_DealsFlights_-prodID:FareSales"}, {"match": "exact", "type": "url", "value": "https://www.alaskaair.com/content/deals/flights?saver-and-main-and-miles&lid=nav:explore-flights&int=AS_NAV_Explore_DealsFlights_-prodID:FareSales"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/deals/flights?int=AS_HomePage?"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "26278440069", "category": "other", "apiName": "10453949094_new_deals_page", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "https://www.alaskaair.com/content/deals/*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "27739320485", "category": "other", "apiName": "10453949094_qa_price_engine", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/legal/terms-conditions/contest-rules/test-page"}], ["or", {"type": "element_present", "value": "#SCmerch__Footer__One, .avatar-fallback"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "27908020027", "category": "other", "apiName": "10453949094_test_page_rec", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/retaincontent/sc9/content/examples/marnels-page"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "28232630254", "category": "other", "apiName": "10453949094_my_account_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/account/overview"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "28471890528", "category": "other", "apiName": "10453949094_firewords_fwt4", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/?fwt4"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "28493440142", "category": "other", "apiName": "10453949094_fireworks_fwt2", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/?fwt2"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "28493920092", "category": "other", "apiName": "10453949094_fireworks_fwt3", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/?fwt3"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "28513740070", "category": "other", "apiName": "10453949094_fireworks_fwt1", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/?fwt1"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "28673200094", "category": "other", "apiName": "10453949094_my_account_page_price_drop", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/account/overview"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
  // Look for object with timeout
  var startTime = new Date().getTime();
  var lookForObject = setInterval(function() {
    if (new Date().getTime() - startTime > 10000) {
      clearInterval(lookForObject);
    } else {
      try {
        var foundBanner = document.querySelector("#root > div > main > section.mp-additional-info > div.mp-deals > cms-partial").shadowRoot.querySelector("div > article > div.merchandising__img > div > div > div.product__offer-detail");
        if (foundBanner) {
          clearInterval(lookForObject);
          options.isActive && activate({ isActive: false });
          activate();
        }
      } catch (error) {
        // Ignore the error and continue
      }
    }
  }, 50);
}
}, {"id": "28803840790", "category": "other", "apiName": "10453949094_hp_sales_targeting_1", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com"}], ["or", {"type": "element_present", "value": ".sale-copy"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "28805430716", "category": "other", "apiName": "10453949094_lyft_tracking", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/account/overview"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "28921370004", "category": "other", "apiName": "10453949094_home_page_ai", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://alaskaair.com"}], ["not", ["or", {"match": "regex", "type": "url", "value": "^.*try-ai"}, {"match": "regex", "type": "url", "value": "^.*fwt1"}, {"match": "regex", "type": "url", "value": "^.*fwt2"}, {"match": "regex", "type": "url", "value": "^.*fwt3"}, {"match": "regex", "type": "url", "value": "^.*fwt4"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "28933050010", "category": "other", "apiName": "10453949094_ai_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/?try-ai"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "28947620093", "category": "other", "apiName": "10453949094_hp_sales_targeting", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com"}], ["or", {"type": "element_present", "value": ".sale-copy"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "29004920037", "category": "other", "apiName": "10453949094_all_pages_nav_bar", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "https://www.alaskaair.com*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "29338730259", "category": "other", "apiName": "10453949094_loyalty__new_mileage_plan_signup_form", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/enroll"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "29548130210", "category": "other", "apiName": "10453949094_tropical_sale", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/deals/flights/sale?int=AS_HomePage_HERO%7C%7C20240611-sale%7C%7C-prodID:FlightDeals"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "29772450471", "category": "other", "apiName": "10453949094_mow_flight_search", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://m.alaskaair.com/shopping/flights"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "29962080414", "category": "other", "apiName": "10453949094_url_targeting_for_copy_of_unmr_benefits", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Flights/Shop"}], ["or", {"type": "element_present", "value": "#UMNRLearnMore"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "30075130696", "category": "other", "apiName": "10453949094_footer__all_pages", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "https://www.alaskaair.com/*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
  var startTime = new Date().getTime();
  var lookForObject = setInterval(function() {
    if (new Date().getTime() - startTime > 10000) {
      clearInterval(lookForObject);
    } else {
      try {
        var foundElement = document.querySelector("#SCmerch__Footer__One");
        if (foundElement) {
          clearInterval(lookForObject);
          options.isActive && activate({ isActive: false });
          activate();
        }
      } catch (error) {
      }
    }
  }, 50);
}
}, {"id": "30101080318", "category": "other", "apiName": "10453949094_all_pages_footer", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "https://www.alaskaair.com/*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": /**
 * Optimizely Callback Function
 * @param {Function} activate - Call this function to activate the page.
 * @param {Object} options - An object containing Page information.
 */
function callbackFn(activate, options) {
  var utils = window.optimizely.get('utils');
  
  // Target element selector
  var targetSelector = '#SCmerch__Footer__One';

  utils.waitForElement(targetSelector).then(function(targetElement) {
    // If the target element is found, activate the experiment
    if (targetElement) {
      console.log('Target element found. Activating experiment.');
      activate();
    } else {
      console.log('Target element not found. Experiment not activated.');
    }
  }).catch(function(error) {
    console.error('Error while waiting for target element:', error);
  });
}
}, {"id": "30237120013", "category": "other", "apiName": "10453949094_hp_pdx20_8_14_20248_15_2024", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://alaskaair.com"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
  var startTime = new Date().getTime();
  var lookForObject = setInterval(function() {
    if (new Date().getTime() - startTime > 10000) {
      clearInterval(lookForObject);
    } else {
      try {
        var pdxSaleElement = document.querySelector(".copy-headline");
        if (pdxSaleElement && pdxSaleElement.textContent.trim() === "20% off PDX flights") {
          clearInterval(lookForObject);
          options.isActive && activate({ isActive: false });
          activate();
        }
      } catch (error) {
        // Ignore the error and continue
      }
    }
  }, 50);
}
}, {"id": "30325700541", "category": "other", "apiName": "10453949094_homepage__everymundo", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "www.alaskaair.com"}], ["not", ["or", {"match": "exact", "type": "url", "value": "https://www.alaskaair.com/?SITE_PREF=full&cid=mobsite-home&lid=footer%3AfullSite"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "30408000953", "category": "other", "apiName": "10453949094_welcome_to_mileage_plan", "name": null, "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.alaskaair.com/account/overview?isNewMember=true&showNewMemberModal=true"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "new_mileage_plan_signup_success", "locator": "span.heading", "locatorType": "css_selector", "valueType": "string"}]}, {"id": "4554635418009600", "category": "other", "apiName": "10453949094_url_targeting_for_copy_of_copy_of_copy_of_qatest_aud", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/travel-info/flight-experience"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "4579237275893760", "category": "other", "apiName": "10453949094_url_targeting_for_copy_of_prod_atmos_card_shopping_1", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/search/cart"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  function getCookie(name) {
    var prefix = name + '=';
    var cookie = document.cookie.split('; ').find(function(entry) {
      return entry.indexOf(prefix) === 0;
    });

    return cookie ? cookie.slice(prefix.length) : null;
  }

  var aspersCookie = getCookie('as_pers') || getCookie('as%5Fpers');

  var userAgentContainsHA = navigator.userAgent.indexOf('renderingContext.rootTheme.hawaiian') !== -1;

  var isDesktop = window.innerWidth >= 1024;

  return (aspersCookie === null || aspersCookie === '0') && !userAgentContainsHA && isDesktop;
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "4589858713239552", "category": "other", "apiName": "10453949094_url_targeting_for_copy_of_qatest_audiencestream_poc_", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "4938349341835264", "category": "other", "apiName": "10453949094_classic_booking_seatmap", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/travelers"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5028295738130432", "category": "other", "apiName": "10453949094_classic_seatmap_rendered", "name": null, "staticConditions": ["and", ["or", {"type": "element_present", "value": "#seatsui2 > .selectable .segment.not-preview .cabin-wrapper"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "5101135845916672", "category": "other", "apiName": "10453949094_navbook_flights", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/search/?lid=nav:book-flights&int=AS_NAV_Book_Flights_-prodID:ShoppingBooking"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5138343827079168", "category": "other", "apiName": "10453949094_global_getaways_landing_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/mileage-plan/global-escapes"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5151840472399872", "category": "other", "apiName": "10453949094_classic_booking_seatmap_and_seatmap_element_rendered", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/travelers"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5169124934942720", "category": "other", "apiName": "10453949094_short_enroll_form", "name": null, "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.alaskaair.com/enroll/shortform"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5182858881400832", "category": "other", "apiName": "10453949094_url_targeting_for_global_getaways_awards_sale", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://alaskaair.com"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
  var startTime = new Date().getTime();
  var lookForObject = setInterval(function() {
    if (new Date().getTime() - startTime > 10000) {
      clearInterval(lookForObject);
    } else {
      try {
        var awardSaleElement = document.querySelector(".cp-hphero-headline");
        if (awardSaleElement.textContent.trim().includes("The wild is calling")) { 
          clearInterval(lookForObject);
          options.isActive && activate({ isActive: false });
          activate();
        }
      } catch (error) {
        // Ignore the error and continue
      }
    }
  }, 50);
  }
}, {"id": "5317179348877312", "category": "other", "apiName": "10453949094_flights_to_hawaii__everymundo_lp", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/en/flights-to-hawaii"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5338093184614400", "category": "other", "apiName": "10453949094_deals_cart_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/Shopping/Cart/checkout"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5400244687470592", "category": "other", "apiName": "10453949094_atmos_rewards", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/atmosrewards"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5429861372657664", "category": "other", "apiName": "10453949094_everymundo_lp_with_destinations_widget", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/en/find-flights"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [{"category": "other", "apiName": "destination_widget_visible", "locator": ".grid-container", "locatorType": "css_selector", "valueType": "string"}]}, {"id": "5449686184624128", "category": "other", "apiName": "10453949094_url_targeting_for_signin_toast_v4__as__mobile", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/atmosrewards"}], ["or", {"type": "custom_code", "value": function jsCondition() {

  // the credit card modal offer changes during this experiment. each modal sets its own dismissed
  // cookie, suffixed with the modal's launch date (YYYYMMDD). add new launch dates here as they're scheduled
  const modalLaunchDates = [
    '20260916',
    '20261021',
    '20261118',
  ];

  // signed-in users have an as_pers cookie (sometimes URL-encoded); never activate for them
  const authCookies = ['as_pers', 'as%5Fpers'];

  // today's date as YYYYMMDD in UTC. UTC is deliberately used instead of the visitor's local time
  // so this rule switches to the new modal's cookie several hours BEFORE a US-timezone modal launch,
  // never after. that guarantees a visitor is never shown the new modal and the toast at the same time,
  // at the cost of a short activation dip the evening before each launch date
  const now = new Date();
  const today = String(now.getUTCFullYear())
    + String(now.getUTCMonth() + 1).padStart(2, '0')
    + String(now.getUTCDate()).padStart(2, '0');

  // user must have dismissed the most recent credit card modal, i.e. the latest one whose launch
  // date is today or earlier. once a new modal launches, the previous modal's cookie no longer counts
  const activeModalDate = modalLaunchDates.filter(date => date <= today).sort().pop();
  if (!activeModalDate) {
    return false;
  }

  const dismissedCookie = 'atmos-card-modal-dismissed-' + activeModalDate;

  const cookieNames = document.cookie.split('; ').map(cookie => cookie.split('=')[0]);

  const hasDismissedCookie = cookieNames.includes(dismissedCookie);
  const hasAuthCookie = cookieNames.some(name => authCookies.includes(name));

  return hasDismissedCookie && !hasAuthCookie;
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5449920182747136", "category": "other", "apiName": "10453949094_cruises", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/deals/cruises"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5535847942979584", "category": "other", "apiName": "10453949094_url_targeting_for_homepage_hero_upcoming_trip_upse_1", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://qa.alaskaair.com"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5565482665771008", "category": "other", "apiName": "10453949094_search_root", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/search/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5594251931680768", "category": "other", "apiName": "10453949094_url_targeting_for_1118_offer_swap_atmos_card_homep_2", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  const cta = document.querySelector('#non-cardholders-banner borealis-verbose-promo-banner').shadowRoot.querySelector('.cta-button');
  const applyLinkExists = cta.href.includes('secure.bankofamerica.com/apply-now-services');
  return applyLinkExists;
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "5608400533323776", "category": "other", "apiName": "10453949094_tile_mp_button_hp_ca__hi", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "alaskaair.com"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
  var startTime = new Date().getTime();
  var lookForObject = setInterval(function() {
    if (new Date().getTime() - startTime > 10000) {
      clearInterval(lookForObject);
    } else {
      try {
        var mileagePlan = document.querySelector(".joinsave-header");
        if (mileagePlan.textContent.trim().includes("Get $50 off your next flight.")) { 
          clearInterval(lookForObject);
          options.isActive && activate({ isActive: false });
          activate();
        }
      } catch (error) {
        // Ignore the error and continue
      }
    }
  }, 50);
  }
}, {"id": "5624797403545600", "category": "other", "apiName": "10453949094_url_targeting_for_homepage_hero_upcoming_trip_upse_2", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://qa.hawaiianairlines.com"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5627132506800128", "category": "other", "apiName": "10453949094_url_targeting_for_homepage_carousel", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://test.alaskaair.com"}, {"match": "simple", "type": "url", "value": "https://qacert.alaskaair.com"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5638630740328448", "category": "other", "apiName": "10453949094_flights_to_japan__everymundo_lp", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/en/flights-to-japan"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5643895948705792", "category": "other", "apiName": "10453949094_url_targeting_for_1118_offer_swap_atmos_card_homepag", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.hawaiianairlines.com/"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  const cta = document.querySelector('#non-cardholders-banner borealis-verbose-promo-banner').shadowRoot.querySelector('.cta-button');
  const applyLinkExists = cta.href.includes('secure.bankofamerica.com/apply-now-services');
  return applyLinkExists;
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "5659070426775552", "category": "other", "apiName": "10453949094_saver_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/travel-info/flight-experience/saver?lid=nav:saver-fare"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5685894118637568", "category": "other", "apiName": "10453949094_new_deals_page_redirect_v4__as__variant", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/deals/flights/variant"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5730154014572544", "category": "other", "apiName": "10453949094_unmr_new_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/search/umnr"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5838948417667072", "category": "other", "apiName": "10453949094_everymundo_lp", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/en/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5866916823171072", "category": "other", "apiName": "10453949094_url_targeting_for_thirdparty_banner_legacy__as", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/booking/reservation-lookup"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5928970932191232", "category": "other", "apiName": "10453949094_flights_to_south_korea__everymundo_lp", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/en/flights-to-south-korea"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5974164035600384", "category": "other", "apiName": "10453949094_url_targeting_for_signin_toast_v4__as__desktop", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com"}, {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/atmosrewards"}], ["or", {"type": "custom_code", "value": function jsCondition() {

  // the credit card modal offer changes during this experiment. each modal sets its own dismissed
  // cookie, suffixed with the modal's launch date (YYYYMMDD). add new launch dates here as they're scheduled
  const modalLaunchDates = [
    '20260916',
    '20261021',
    '20261118',
  ];

  // signed-in users have an as_pers cookie (sometimes URL-encoded); never activate for them
  const authCookies = ['as_pers', 'as%5Fpers'];

  // today's date as YYYYMMDD in UTC. UTC is deliberately used instead of the visitor's local time
  // so this rule switches to the new modal's cookie several hours BEFORE a US-timezone modal launch,
  // never after. that guarantees a visitor is never shown the new modal and the toast at the same time,
  // at the cost of a short activation dip the evening before each launch date
  const now = new Date();
  const today = String(now.getUTCFullYear())
    + String(now.getUTCMonth() + 1).padStart(2, '0')
    + String(now.getUTCDate()).padStart(2, '0');

  // user must have dismissed the most recent credit card modal, i.e. the latest one whose launch
  // date is today or earlier. once a new modal launches, the previous modal's cookie no longer counts
  const activeModalDate = modalLaunchDates.filter(date => date <= today).sort().pop();
  if (!activeModalDate) {
    return false;
  }

  const dismissedCookie = 'atmos-card-modal-dismissed-' + activeModalDate;

  const cookieNames = document.cookie.split('; ').map(cookie => cookie.split('=')[0]);

  const hasDismissedCookie = cookieNames.includes(dismissedCookie);
  const hasAuthCookie = cookieNames.some(name => authCookies.includes(name));

  return hasDismissedCookie && !hasAuthCookie;
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6058696189411328", "category": "other", "apiName": "10453949094_url_targeting_for_signin_toast_v4__ha__desktop", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.hawaiianairlines.com"}, {"match": "simple", "type": "url", "value": "https://www.hawaiianairlines.com/atmosrewards"}], ["or", {"type": "custom_code", "value": function jsCondition() {

  // the credit card modal offer changes during this experiment. each modal sets its own dismissed
  // cookie, suffixed with the modal's launch date (YYYYMMDD). add new launch dates here as they're scheduled
  const modalLaunchDates = [
    '20260916',
    '20261021',
    '20261118',
  ];

  // signed-in users have an as_pers cookie (sometimes URL-encoded); never activate for them
  const authCookies = ['as_pers', 'as%5Fpers'];

  // today's date as YYYYMMDD in UTC. UTC is deliberately used instead of the visitor's local time
  // so this rule switches to the new modal's cookie several hours BEFORE a US-timezone modal launch,
  // never after. that guarantees a visitor is never shown the new modal and the toast at the same time,
  // at the cost of a short activation dip the evening before each launch date
  const now = new Date();
  const today = String(now.getUTCFullYear())
    + String(now.getUTCMonth() + 1).padStart(2, '0')
    + String(now.getUTCDate()).padStart(2, '0');

  // user must have dismissed the most recent credit card modal, i.e. the latest one whose launch
  // date is today or earlier. once a new modal launches, the previous modal's cookie no longer counts
  const activeModalDate = modalLaunchDates.filter(date => date <= today).sort().pop();
  if (!activeModalDate) {
    return false;
  }

  const dismissedCookie = 'atmos-card-modal-dismissed-' + activeModalDate;

  const cookieNames = document.cookie.split('; ').map(cookie => cookie.split('=')[0]);

  const hasDismissedCookie = cookieNames.includes(dismissedCookie);
  const hasAuthCookie = cookieNames.some(name => authCookies.includes(name));

  return hasDismissedCookie && !hasAuthCookie;
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6093637476417536", "category": "other", "apiName": "10453949094_new_deals_page_redirect_v4__as__control", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/deals/flights"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6131141955026944", "category": "other", "apiName": "10453949094_atmos_rewards_new_member_enrollment", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/atmosrewards/account/overview"}], ["or", {"match": "substring", "type": "url", "value": "isNewMember=true"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6144345338806272", "category": "other", "apiName": "10453949094_flights_to_east_coast__everymundo_lp", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/en/flights-to-east-coast"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6147389401071616", "category": "other", "apiName": "10453949094_tile_mp_button_hp", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "alaskaair.com"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
  var startTime = new Date().getTime();
  var lookForObject = setInterval(function() {
    if (new Date().getTime() - startTime > 10000) {
      clearInterval(lookForObject);
    } else {
      try {
        var mileagePlan = document.querySelector(".joinsave-header");
        if (mileagePlan.textContent.trim().includes("Get $25 off your next flight.")) { 
          clearInterval(lookForObject);
          options.isActive && activate({ isActive: false });
          activate();
        }
      } catch (error) {
        // Ignore the error and continue
      }
    }
  }, 50);
  }
}, {"id": "6163912157036544", "category": "other", "apiName": "10453949094_help_center_chatbot", "name": null, "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.alaskaair.com/content/about-us/help-contact?fb1234"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6218947658252288", "category": "other", "apiName": "10453949094_stays_landing_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/deals/stays?MDPCID=AlaskaVacations-EN_US.DPS.AlaskaVacations.Navbar-Hotel_Launch.HOTEL"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6281087853264896", "category": "other", "apiName": "10453949094_cruises_atmos_rewards", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/atmosrewards/content/cruises"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6394546005737472", "category": "other", "apiName": "10453949094_url_targeting_for_1118_offer_swap_atmos_card_homep_3", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  const cta = document.querySelector('#non-cardholders-banner borealis-verbose-promo-banner').shadowRoot.querySelector('.cta-button');
  const applyLinkExists = cta.href.includes('secure.bankofamerica.com/apply-now-services');
  return applyLinkExists;
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "6407431467565056", "category": "other", "apiName": "10453949094_help_center_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/content/about-us/help-contact"}], ["not", ["or", {"match": "exact", "type": "url", "value": "https://www.alaskaair.com/content/about-us/help-contact?fb1234"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6423797786476544", "category": "other", "apiName": "10453949094_url_targeting_for_signin_toast_v4__ha__mobile", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.hawaiianairlines.com"}, {"match": "simple", "type": "url", "value": "https://www.hawaiianairlines.com/atmosrewards"}], ["or", {"type": "custom_code", "value": function jsCondition() {

  // the credit card modal offer changes during this experiment. each modal sets its own dismissed
  // cookie, suffixed with the modal's launch date (YYYYMMDD). add new launch dates here as they're scheduled
  const modalLaunchDates = [
    '20260916',
    '20261021',
    '20261118',
  ];

  // signed-in users have an as_pers cookie (sometimes URL-encoded); never activate for them
  const authCookies = ['as_pers', 'as%5Fpers'];

  // today's date as YYYYMMDD in UTC. UTC is deliberately used instead of the visitor's local time
  // so this rule switches to the new modal's cookie several hours BEFORE a US-timezone modal launch,
  // never after. that guarantees a visitor is never shown the new modal and the toast at the same time,
  // at the cost of a short activation dip the evening before each launch date
  const now = new Date();
  const today = String(now.getUTCFullYear())
    + String(now.getUTCMonth() + 1).padStart(2, '0')
    + String(now.getUTCDate()).padStart(2, '0');

  // user must have dismissed the most recent credit card modal, i.e. the latest one whose launch
  // date is today or earlier. once a new modal launches, the previous modal's cookie no longer counts
  const activeModalDate = modalLaunchDates.filter(date => date <= today).sort().pop();
  if (!activeModalDate) {
    return false;
  }

  const dismissedCookie = 'atmos-card-modal-dismissed-' + activeModalDate;

  const cookieNames = document.cookie.split('; ').map(cookie => cookie.split('=')[0]);

  const hasDismissedCookie = cookieNames.includes(dismissedCookie);
  const hasAuthCookie = cookieNames.some(name => authCookies.includes(name));

  return hasDismissedCookie && !hasAuthCookie;
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6438676861812736", "category": "other", "apiName": "10453949094_url_targeting_for_1118_offer_swap_atmos_card_homep_1", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.hawaiianairlines.com/"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  const cta = document.querySelector('#non-cardholders-banner borealis-verbose-promo-banner').shadowRoot.querySelector('.cta-button');
  const applyLinkExists = cta.href.includes('secure.bankofamerica.com/apply-now-services');
  return applyLinkExists;
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "6468165291474944", "category": "other", "apiName": "10453949094_legacy_planbook", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/planbook?classicview=true"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6520505082052608", "category": "other", "apiName": "10453949094_url_targeting_for_thirdparty_banner_legacy__ha", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.hawaiianairlines.com/booking/reservation-lookup"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6524007996981248", "category": "other", "apiName": "10453949094_url_targeting_for_atmos_multicard_prequalify_vs_appl", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/atmosrewards/content/credit-cards"}], ["or", {"type": "custom_code", "value": // same exclusions as the offer-swap experiments this replaces: paid-media campaign traffic (utm_term), the
// card-specific tier links and paid search (semid) keep the page as it is
function jsCondition() {
  return !/[?&](utm_term=(metcc26|pincc26|snapcc26|ttdcc26|ytcc26|infcc26|lyfcc26)|tier=(ascent|summit|business)|semid=)/i.test(window.location.search);
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6649666444460032", "category": "other", "apiName": "10453949094_flights_to_mexico__everymundo_lp", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/en/flights-to-mexico"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6708291923869696", "category": "other", "apiName": "10453949094_url_targeting_for_1118_offer_swap_atmos_card_full__1", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://qa.alaskaair.com"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  const cta = document.querySelector('borealis-verbose-promo-banner').shadowRoot.querySelector('.cta-button');
  const applyLinkExists = cta.href.includes('secure.bankofamerica.com/apply-now-services');
  return applyLinkExists;
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "6733950882676736", "category": "other", "apiName": "10453949094_flights_to_california__everymundo_lp", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.alaskaair.com/en/flights-to-california"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}], "events": [{"id": "10512061133", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_formlet_find_flights_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#findFlights"}}, {"id": "10527303547", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_header_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#hf-nav"}}, {"id": "10555880507", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_home_page_cc_ad_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".card-banner--footer > .btn-ghost-blue"}}, {"id": "10557590353", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_hero_offer_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".hero-offer"}}, {"id": "10558596828", "viewId": "10564204483", "name": null, "category": "other", "apiName": "10453949094_clicked_add_to_cart", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#ContinueButton"}}, {"id": "10561458451", "viewId": "10518584033", "name": null, "category": "other", "apiName": "10453949094_footer_credit_card_ad_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#footerCreditCard-US"}}, {"id": "10575719759", "viewId": "10564192079", "name": null, "category": "other", "apiName": "10453949094_flight_booking", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#PurchaseButton"}}, {"id": "10587350307", "viewId": "10557764685", "name": null, "category": "other", "apiName": "10453949094_flight_deals_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#results"}}, {"id": "10619301985", "viewId": "10621311595", "name": null, "category": "other", "apiName": "10453949094_mileage_plan_signup", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#joinNowButton"}}, {"id": "10652400475", "viewId": "10518584033", "name": null, "category": "other", "apiName": "10453949094_trip_insurance_faq_nav_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#menuBook > div:nth-child(4) > ul > li:nth-child(2)"}}, {"id": "10653460258", "viewId": "10518584033", "name": null, "category": "other", "apiName": "10453949094_trip_insurance_nav_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#menuBook > div:nth-child(4) > ul > li:nth-child(1)"}}, {"id": "10676011408", "viewId": "10564204483", "name": null, "category": "other", "apiName": "10453949094_mileage_fare_type_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".upgrade-filter-options > div:nth-of-type(2)"}}, {"id": "10676573197", "viewId": "10564204483", "name": null, "category": "other", "apiName": "10453949094_mvp_fare_type_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".upgrade-filter-options > div:nth-of-type(3)"}}, {"id": "10676891517", "viewId": "10564204483", "name": null, "category": "other", "apiName": "10453949094_mvp_gold_75k_fare_type_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".upgrade-filter-options > div:nth-of-type(5)"}}, {"id": "10677043329", "viewId": "10564204483", "name": null, "category": "other", "apiName": "10453949094_no_preference_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".upgrade-filter-options > div:nth-of-type(1)"}}, {"id": "10678312759", "viewId": "10564204483", "name": null, "category": "other", "apiName": "10453949094_upgrade_fare_type_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#UpgradeFilter"}}, {"id": "10679972537", "viewId": "10564204483", "name": null, "category": "other", "apiName": "10453949094_mvp_gold_guest_fare_type_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".upgrade-filter-options > div:nth-of-type(6)"}}, {"id": "10680932554", "viewId": "10564204483", "name": null, "category": "other", "apiName": "10453949094_mvp_gold_fare_type_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".upgrade-filter-options > div:nth-of-type(4)"}}, {"id": "10682233435", "viewId": "10597072554", "name": null, "category": "other", "apiName": "10453949094_upgrade_type_selector", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#fareType"}}, {"id": "10684513724", "viewId": "10597072554", "name": null, "category": "other", "apiName": "10453949094_find_flights_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#findFlights"}}, {"id": "10697755728", "viewId": "10701400161", "name": null, "category": "other", "apiName": "10453949094_boarding_pass_print_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#EarnMilesBtn"}}, {"id": "10697820197", "viewId": "10557764685", "name": null, "category": "other", "apiName": "10453949094_flight_deals_button_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ":nth-of-type(2) .btn-secondary"}}, {"id": "10699047683", "viewId": "10564204483", "name": null, "category": "other", "apiName": "10453949094_matrix_find_flights_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#findFlights"}}, {"id": "10730084503", "viewId": "10738300916", "name": null, "category": "other", "apiName": "10453949094_mow_booking_signin_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "input.last"}}, {"id": "10733032624", "viewId": "10739301092", "name": null, "category": "other", "apiName": "10453949094_mow_home_page_my_account_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".main-nav > li:nth-of-type(4)"}}, {"id": "10742894314", "viewId": "10739301092", "name": null, "category": "other", "apiName": "10453949094_mow_home_page_sign_in_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#signin-footer-in"}}, {"id": "10744752054", "viewId": "10738300916", "name": null, "category": "other", "apiName": "10453949094_mow_booking_guest_button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".secondary"}}, {"id": "10745635184", "viewId": "10739301092", "name": null, "category": "other", "apiName": "10453949094_mow_home_page_trips_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#main > ul > li:nth-child(5)"}}, {"id": "10747041774", "viewId": "10739301092", "name": null, "category": "other", "apiName": "10453949094_mow_home_page_checkin_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#main > ul > li:nth-child(2)"}}, {"id": "10747622335", "viewId": "10739301092", "name": null, "category": "other", "apiName": "10453949094_mow_home_page_flights_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#main > ul > li:nth-child(3)"}}, {"id": "10748700961", "viewId": "10744792375", "name": null, "category": "other", "apiName": "10453949094_mow_pnr_awaiting_seats_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#flight-details-box > div > ol > li > div.optionDetail.center > a:nth-child(2)"}}, {"id": "10750681099", "viewId": "10744792375", "name": null, "category": "other", "apiName": "10453949094_mow_pnr_page_upgrade_request_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#flight-details-box > div > ol > li > div.optionDetail.center > a:nth-child(3)"}}, {"id": "10753021207", "viewId": "10753950985", "name": null, "category": "other", "apiName": "10453949094_mow_booking_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#paybtn"}}, {"id": "10753481501", "viewId": "10739301092", "name": null, "category": "other", "apiName": "10453949094_mow_home_page_book_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#booklink"}}, {"id": "10759761045", "viewId": "10739301092", "name": null, "category": "other", "apiName": "10453949094_mow_credit_card_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#main > ul > li:nth-child(8)"}}, {"id": "10795760824", "viewId": "10731972033", "name": null, "category": "other", "apiName": "10453949094_mow_confirmation_hotel_deals_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#main > ul > li:nth-child(1)"}}, {"id": "10801682121", "viewId": "10731972033", "name": null, "category": "other", "apiName": "10453949094_mow_confirmation_car_deals_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#main > ul > li:nth-child(2)"}}, {"id": "10821914350", "viewId": "10843610207", "name": null, "category": "other", "apiName": "10453949094_mp_landing_page__6_slot_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content > div:nth-child(4) > div > div:nth-child(2)"}}, {"id": "10842540266", "viewId": "10843610207", "name": null, "category": "other", "apiName": "10453949094_mp_landing_page__3_slot_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content > div:nth-child(3) > div > div:nth-child(1)"}}, {"id": "10844052137", "viewId": "10564192079", "name": null, "category": "other", "apiName": "10453949094_trip_protection_remove_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".remove-link"}}, {"id": "10844061721", "viewId": "10564192079", "name": null, "category": "other", "apiName": "10453949094_trip_protection_decline_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".radiolist > div:nth-of-type(2)"}}, {"id": "10844520441", "viewId": "10843610207", "name": null, "category": "other", "apiName": "10453949094_mp_landing_page__2_slot_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content > div:nth-child(2) > div > div:nth-child(2)"}}, {"id": "10846542714", "viewId": "10564192079", "name": null, "category": "other", "apiName": "10453949094_trip_protection_add_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".radiolist > div:nth-of-type(1)"}}, {"id": "10855185299", "viewId": "10597072554", "name": null, "category": "other", "apiName": "10453949094_discount_code_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#discountCode"}}, {"id": "10869052300", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_home_formlet_click__manage_trip", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#tab-manage"}}, {"id": "10875292823", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_home_formlet_click__hotels", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#tab-hotels"}}, {"id": "10875822446", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_home_formlet_click__book", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#tab-booking"}}, {"id": "10883910158", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_home_formlet_click__flight_status", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#tab-status"}}, {"id": "10887600178", "viewId": "10518584033", "name": null, "category": "other", "apiName": "10453949094_ask_jenn_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#ask-jenn-li"}}, {"id": "10888323010", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_all_search_options_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".cta-row a:nth-of-type(1)"}}, {"id": "10888632420", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_home_formlet_click__flights", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#tab-flights"}}, {"id": "10894662266", "viewId": "10873482609", "name": null, "category": "other", "apiName": "10453949094_business_credit_card_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "._\\39 ea890e4-b305-42b3-8caa-d6d35e90d19b .btn-ghost-blue"}}, {"id": "10894714006", "viewId": "10873482609", "name": null, "category": "other", "apiName": "10453949094_consumer_credit_card_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "._adf0b378-74ba-45f8-a58b-f2830a8139ee .btn-ghost-blue"}}, {"id": "10898302807", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_home_formlet_click__cars", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#tab-cars"}}, {"id": "10903700614", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_home_formlet_click__packages", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#tab-vacations"}}, {"id": "10906321753", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_home_formlet_click__check_in", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#tab-check-in"}}, {"id": "10920530638", "viewId": "10873482609", "name": null, "category": "other", "apiName": "10453949094_canadian_credit_card_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "._\\39 1de5e02-6a21-48f3-8db3-7a14001e6dcb .btn-ghost-blue"}}, {"id": "10936030353", "viewId": "10943970528", "name": null, "category": "other", "apiName": "10453949094_flight_details_awaiting_seats_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a:nth-of-type(2)"}}, {"id": "10936030355", "viewId": "10939840690", "name": null, "category": "other", "apiName": "10453949094_mow_checkin_awaiting_seats_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".divided a:nth-of-type(1)"}}, {"id": "10939690472", "viewId": "10939840690", "name": null, "category": "other", "apiName": "10453949094_mow_checkin_upgrade_requests_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a:nth-of-type(2)"}}, {"id": "10941610726", "viewId": "10943970528", "name": null, "category": "other", "apiName": "10453949094_upgrade_requests_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a:nth-of-type(3)"}}, {"id": "10943770499", "viewId": "10943970528", "name": null, "category": "other", "apiName": "10453949094_flight_details_click_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".optionDetail.center > a:nth-of-type(1)"}}, {"id": "10953521182", "viewId": "10939840690", "name": null, "category": "other", "apiName": "10453949094_mow_checkin_continue_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".button"}}, {"id": "10964340588", "viewId": "10943970528", "name": null, "category": "other", "apiName": "10453949094_flight_details_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".drop-head"}}, {"id": "10978180369", "viewId": "10939840690", "name": null, "category": "other", "apiName": "10453949094_mow_checkin_view_boarding_pass_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "div:nth-of-type(4) > .button-link"}}, {"id": "11077995936", "viewId": "10614772588", "name": null, "category": "other", "apiName": "10453949094_myaccount_credit_card_ad_click_3", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#has-boa-card"}}, {"id": "11191766685", "viewId": "10573688655", "name": null, "category": "other", "apiName": "10453949094_trip_protection_decline_click__addons_page", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#agaTripInsuranceBlock > div:nth-child(2) > div.radiolist > div:nth-child(4)"}}, {"id": "11212337524", "viewId": "10573688655", "name": null, "category": "other", "apiName": "10453949094_trip_prtoection_accept_click__add_ons_page", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#agaTripInsuranceBlock > div:nth-child(2) > div.radiolist > div:nth-child(1)"}}, {"id": "11401581130", "viewId": "11407060577", "name": null, "category": "other", "apiName": "10453949094_flights_to_hawaii__view_dates_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#results > div .btn-deals"}}, {"id": "11748121920", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_mobile_flight_deals_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".visible-xs"}}, {"id": "11787715878", "viewId": "11795575473", "name": null, "category": "other", "apiName": "10453949094_club_49_register_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#REGISTER"}}, {"id": "11801064478", "viewId": "11879450545", "name": null, "category": "other", "apiName": "10453949094_easybiz_login_credit_card_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#div2ColumnRight"}}, {"id": "11919990099", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_responsive_flight_deals_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".hero-merch"}}, {"id": "12101877959", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_destination_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".image-tiles"}}, {"id": "12109549578", "viewId": "12016244792", "name": null, "category": "other", "apiName": "10453949094_my_trips_car_rental_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#divTiles > div:nth-of-type(1) > div:nth-of-type(2) img"}}, {"id": "12116935978", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_ad_tile_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content > div:nth-of-type(6)"}}, {"id": "12124668479", "viewId": "12201087981", "name": null, "category": "other", "apiName": "10453949094_legend_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#fareTypesLink"}}, {"id": "12179564183", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_mileage_plan_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "._d096338f-e4e9-4d03-9d8c-32181b0c27f5"}}, {"id": "12217384490", "viewId": "11580341517", "name": null, "category": "other", "apiName": "10453949094_header_nav_credit_card_click_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#navBOAVisa"}}, {"id": "12236157475", "viewId": "10564204483", "name": null, "category": "other", "apiName": "10453949094_saver_fare_selection", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".saver-fare"}}, {"id": "12391334171", "viewId": "10564204483", "name": null, "category": "other", "apiName": "10453949094_fare_comparison_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".compare-fare-type-anchor"}}, {"id": "12821880254", "viewId": "12825750640", "name": null, "category": "other", "apiName": "10453949094_fare_deal_saver_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fdsm-saver"}}, {"id": "12848530315", "viewId": "12825750640", "name": null, "category": "other", "apiName": "10453949094_fare_deal_main_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fdsm-main"}}, {"id": "12851650272", "viewId": "12839890272", "name": null, "category": "other", "apiName": "10453949094_credit_card_search_page_apply_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#desktopbutton"}}, {"id": "12884440009", "viewId": "12862700645", "name": null, "category": "other", "apiName": "10453949094_credit_card_search_page_apply_click_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#desktopbutton"}}, {"id": "12913380254", "viewId": "12930390186", "name": null, "category": "other", "apiName": "10453949094_upgrade_to_main_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#upgrade-to-main"}}, {"id": "12936230155", "viewId": "12930390186", "name": null, "category": "other", "apiName": "10453949094_cart_continue_button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#Submit1"}}, {"id": "13020720080", "viewId": "12998280258", "name": null, "category": "other", "apiName": "10453949094_upgrade_to_main_click_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#upgrade-to-main"}}, {"id": "13022370276", "viewId": "12998280258", "name": null, "category": "other", "apiName": "10453949094_cart_next_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#checkoutContainer"}}, {"id": "13025500185", "viewId": "12990720242", "name": null, "category": "other", "apiName": "10453949094_service_request_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#_requestServices0, #_requestServices1, #_requestServices2, #_requestServices3, #_requestServices4, #_requestServices5, #_requestServices6"}}, {"id": "13381780469", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_smart_block__origin_car_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".ct-flex-col-4 .ct-products-card-list"}}, {"id": "13403670154", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_alaska_airlines_hotels__see_all_hotels_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".hotels-header a"}}, {"id": "13413790058", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_smart_block__destination_car_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".ct-flex-col-8 .ct-products-card-list"}}, {"id": "13415070221", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_alaska_airlines_hotels__destination_hotel_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".hotels-container > div:nth-of-type(1) > div:nth-of-type(2)"}}, {"id": "13617900445", "viewId": "10518584033", "name": null, "category": "other", "apiName": "10453949094_header_search_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#txtSearch"}}, {"id": "13629330317", "viewId": "10518584033", "name": null, "category": "other", "apiName": "10453949094_header_checkin_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#menuCheckin [name='CheckinBtn']"}}, {"id": "13640510264", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_home_formlet_flight_status_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#submitFlightStatus"}}, {"id": "13646410403", "viewId": "10518584033", "name": null, "category": "other", "apiName": "10453949094_header_manage_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".menu-col-7 .submitPNR.menu-btn-btn-block"}}, {"id": "13658280055", "viewId": "10518584033", "name": null, "category": "other", "apiName": "10453949094_header_flight_status_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#navFlightStatus"}}, {"id": "13665940287", "viewId": "10564204483", "name": null, "category": "other", "apiName": "10453949094_flight_matrix_upsell__continue_with_saver_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#ContinueWithSaverButton"}}, {"id": "13683020422", "viewId": "10564204483", "name": null, "category": "other", "apiName": "10453949094_flight_matrix_upsell__select_main_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#SelectMainButton"}}, {"id": "13754710406", "viewId": "10557764685", "name": null, "category": "other", "apiName": "10453949094_main_deals_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fdsm-main"}}, {"id": "13761320021", "viewId": "10557764685", "name": null, "category": "other", "apiName": "10453949094_flight_search_formlet_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#flightsFormletIframe"}}, {"id": "13768430193", "viewId": "10557764685", "name": null, "category": "other", "apiName": "10453949094_saver_deals_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fdsm-saver"}}, {"id": "14101510399", "viewId": "10554046304", "name": null, "category": "other", "apiName": "10453949094_premium_class_seat_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".seat-available.seat-premium"}}, {"id": "14184170746", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_home_page_tile_3_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#brand-campaign-seasonal-food-choices .btn-ghost-blue"}}, {"id": "14186300192", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_home_page_tile_1_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#brand-campaign-most-movies > div > a"}}, {"id": "14202090380", "viewId": "14219770474", "name": null, "category": "other", "apiName": "10453949094_flights_from_the_east_coast_main_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fdsm-main"}}, {"id": "14205851005", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_tile_2_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#brand-campaign-blog > div > a"}}, {"id": "14208040269", "viewId": "14219770474", "name": null, "category": "other", "apiName": "10453949094_flights_from_east_coast_flight_deals_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fdsm-pricebox"}}, {"id": "14213900417", "viewId": "14219770474", "name": null, "category": "other", "apiName": "10453949094_flights_from_the_east_coast_saver_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fdsm-saver"}}, {"id": "14441310126", "viewId": "10597072554", "name": null, "category": "other", "apiName": "10453949094_planbook_credit_card_click_2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-40k-offer--US-NonHolder > .panel"}}, {"id": "15560750004", "viewId": "15552401743", "name": null, "category": "other", "apiName": "10453949094_credit_card_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".card-banner--footer > .btn-ghost-blue"}}, {"id": "15603860757", "viewId": "15556970544", "name": null, "category": "other", "apiName": "10453949094_upgrade_to_fc", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#upgrade-to-main"}}, {"id": "16474910843", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_v_h_3", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#discountHotelsContainer div:nth-of-type(3) > .hotel-btn"}}, {"id": "16484860422", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_c_h_4", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#hotelsContainer div:nth-of-type(4) > .hotel-btn"}}, {"id": "16490560231", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_v_h_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#discountHotelsContainer div:nth-of-type(1) > .hotel-btn"}}, {"id": "16494220705", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_c_h_2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#hotelsContainer div:nth-of-type(2) > .hotel-btn"}}, {"id": "16504790284", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_v_h_4", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#discountHotelsContainer div:nth-of-type(4) > .hotel-btn"}}, {"id": "16504830095", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_v_h_2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#discountHotelsContainer div:nth-of-type(2) > .hotel-btn"}}, {"id": "16516180036", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_c_h_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#hotelsContainer div:nth-of-type(1) > .hotel-btn"}}, {"id": "16528310018", "viewId": "16482890244", "name": null, "category": "other", "apiName": "10453949094_flight_deals_click__redirect_page", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".card-banner--footer > .btn-ghost-blue"}}, {"id": "16529700032", "viewId": "16482890244", "name": null, "category": "other", "apiName": "10453949094_credit_card_redirect_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".hero-offer--limited-time > .btn-white"}}, {"id": "16530650349", "viewId": "16040770229", "name": null, "category": "other", "apiName": "10453949094_v_h_2_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#discountHotelsContainer div:nth-of-type(2) > .hotel-btn"}}, {"id": "16536680254", "viewId": "16040770229", "name": null, "category": "other", "apiName": "10453949094_v_h_3_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#discountHotelsContainer div:nth-of-type(3) > .hotel-btn"}}, {"id": "16540060290", "viewId": "16040770229", "name": null, "category": "other", "apiName": "10453949094_v_h_1_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#discountHotelsContainer div:nth-of-type(1) > .hotel-btn"}}, {"id": "16541250009", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_c_h_3", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#hotelsContainer div:nth-of-type(3) > .hotel-btn"}}, {"id": "16549290441", "viewId": "16040770229", "name": null, "category": "other", "apiName": "10453949094_v_h_4_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#discountHotelsContainer div:nth-of-type(4) > .hotel-btn"}}, {"id": "16614670631", "viewId": "16040770229", "name": null, "category": "other", "apiName": "10453949094_v_see_all_hotels_pnr", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#discountHotelsContainer .hotels-header a"}}, {"id": "16614750551", "viewId": "16040770229", "name": null, "category": "other", "apiName": "10453949094_c_h_2_pnr", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#hotelsContainer div:nth-of-type(2) > .hotel-btn"}}, {"id": "16628080394", "viewId": "16634060290", "name": null, "category": "other", "apiName": "10453949094_control_cc_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content > div:nth-child(1) > div.jumbotron.desktop-hero.sc-module.homepage-heroimage._9cc8cd68-f398-486a-ad90-3aeec9874c4d > div.container > div > div.col-sm-5.col-md-6 > div > a > div > span.hero-offer--limited-time > a"}}, {"id": "16628090136", "viewId": "16634060290", "name": null, "category": "other", "apiName": "10453949094_vairant_tile1_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#tile-wifi > div > div.contain.buttons > p > a"}}, {"id": "16631010908", "viewId": "16482890244", "name": null, "category": "other", "apiName": "10453949094_flight_deals_click_homepage_redirect", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#cc-fridays > div > div.card-banner--copy.col-sm-9.col-md-8 > div > div.card-banner--footer > a"}}, {"id": "16631100542", "viewId": "16482890244", "name": null, "category": "other", "apiName": "10453949094_credit_card_click_booked_flight__redirect", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content > div:nth-child(1) > div.jumbotron.desktop-hero.sc-module.homepage-heroimage._9cc8cd68-f398-486a-ad90-3aeec9874c4d > div.container > div > div.col-sm-5.col-md-6 > div > a > div > span.hero-offer--limited-time > a"}}, {"id": "16632210302", "viewId": "16534280501", "name": null, "category": "other", "apiName": "10453949094_v_fd_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".card-banner--footer > .btn-ghost-blue"}}, {"id": "16633910220", "viewId": "16040770229", "name": null, "category": "other", "apiName": "10453949094_c_see_all_hotels_pnr", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#hotelsContainer .hotels-header a"}}, {"id": "16634270123", "viewId": "16534280501", "name": null, "category": "other", "apiName": "10453949094_v_t3_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "._e18a40ac-0ace-474b-94b9-a4c5919ede64 .btn-ghost-blue"}}, {"id": "16641430374", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_c_see_all_conf", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#hotelsContainer .hotels-header a"}}, {"id": "16643380209", "viewId": "16040770229", "name": null, "category": "other", "apiName": "10453949094_c_h_3_pnr", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#hotelsContainer div:nth-of-type(3) > .hotel-btn"}}, {"id": "16644930496", "viewId": "16040770229", "name": null, "category": "other", "apiName": "10453949094_c_h_4_pnr", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#hotelsContainer div:nth-of-type(4) > .hotel-btn"}}, {"id": "16650960298", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_v_see_all_hotels", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#discountHotelsContainer .hotels-header a"}}, {"id": "16651000328", "viewId": "16534280501", "name": null, "category": "other", "apiName": "10453949094_v1_cc_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".hero-offer--limited-time > .btn-white"}}, {"id": "16651320376", "viewId": "16534280501", "name": null, "category": "other", "apiName": "10453949094_v_t1_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#tile-wifi .btn-ghost-blue"}}, {"id": "16652940342", "viewId": "16040770229", "name": null, "category": "other", "apiName": "10453949094_c_h_1_pnr", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#hotelsContainer div:nth-of-type(1) > .hotel-btn"}}, {"id": "16659150618", "viewId": "16634060290", "name": null, "category": "other", "apiName": "10453949094_variant_tile3_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content > div.container-hero.three-tiles > div:nth-child(3) > div > div > div > div > div.contain.buttons > p > a"}}, {"id": "16663180058", "viewId": "16634060290", "name": null, "category": "other", "apiName": "10453949094_variant_flightdeal_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#cc-fridays > div > div.card-banner--copy.col-sm-9.col-md-8 > div > div.card-banner--footer > a"}}, {"id": "16846304125", "viewId": null, "name": null, "category": "other", "apiName": "conf_page", "eventType": "custom", "eventFilter": null}, {"id": "16859454869", "viewId": "10554046304", "name": null, "category": "other", "apiName": "10453949094_fc_seat_selection", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".row-1 > div:nth-of-type(1),.row-1 > div:nth-of-type(2),.row-1 > div:nth-of-type(4),.row-1 > div:nth-of-type(5),.row-2 > div:nth-of-type(1),.row-2 > div:nth-of-type(2),.row-2 > div:nth-of-type(4),.row-2 > div:nth-of-type(5),.row-3 > div:nth-of-type(1),.row-3 > div:nth-of-type(2),.row-3 > div:nth-of-type(4),.row-3 > div:nth-of-type(5)"}}, {"id": "16896870356", "viewId": "16907590499", "name": null, "category": "other", "apiName": "10453949094_hybrid__flight_deals_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fdsm-pricebox"}}, {"id": "16908170638", "viewId": null, "name": null, "category": "other", "apiName": "conf_page_deals_exp", "eventType": "custom", "eventFilter": null}, {"id": "17266243466", "viewId": "17263860706", "name": null, "category": "other", "apiName": "10453949094_upsell_click_for_meta_upgrade", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "saver-to-main-single-upsell"}}, {"id": "17439741294", "viewId": "17267824399", "name": null, "category": "other", "apiName": "10453949094_upsell_to_main_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".hyperlink hyperlink--cta,#upgrade-to-main"}}, {"id": "17708460178", "viewId": null, "name": null, "category": "other", "apiName": "initial_saver_upsell_click", "eventType": "custom", "eventFilter": null}, {"id": "17714450489", "viewId": null, "name": null, "category": "other", "apiName": "overlay_saver_upsell_click", "eventType": "custom", "eventFilter": null}, {"id": "17739270297", "viewId": null, "name": null, "category": "other", "apiName": "second_chance_upsell_click", "eventType": "custom", "eventFilter": null}, {"id": "17758862015", "viewId": null, "name": null, "category": "other", "apiName": "fcUpsellIncrementalRevenue", "eventType": "custom", "eventFilter": null}, {"id": "17776781123", "viewId": null, "name": null, "category": "other", "apiName": "confirmedPurchasePassengerCount", "eventType": "custom", "eventFilter": null}, {"id": "17783624719", "viewId": null, "name": null, "category": "other", "apiName": "confirmedMainClassTripPurchase", "eventType": "custom", "eventFilter": null}, {"id": "17791103341", "viewId": null, "name": null, "category": "other", "apiName": "confirmedSaverClassTripPurchase", "eventType": "custom", "eventFilter": null}, {"id": "17794220182", "viewId": null, "name": null, "category": "other", "apiName": "baseFareTotal", "eventType": "custom", "eventFilter": null}, {"id": "17805302344", "viewId": null, "name": null, "category": "other", "apiName": "confirmedFirstClassTripPurchase", "eventType": "custom", "eventFilter": null}, {"id": "17810211673", "viewId": null, "name": null, "category": "other", "apiName": "covidSeeFullTermsClickPay", "eventType": "custom", "eventFilter": null}, {"id": "17827401805", "viewId": null, "name": null, "category": "other", "apiName": "covidSeeFullTermsClickMow", "eventType": "custom", "eventFilter": null}, {"id": "17834450390", "viewId": null, "name": null, "category": "other", "apiName": "covidSeeFullTermsClick", "eventType": "custom", "eventFilter": null}, {"id": "18118922124", "viewId": "10564192079", "name": null, "category": "other", "apiName": "10453949094_trip_no", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "div:nth-of-type(3) > #TripInsurance_AWP_LabelButton"}}, {"id": "18122843442", "viewId": "18116950272", "name": null, "category": "other", "apiName": "10453949094_apple_pay_click_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#pay-with-credit-card"}}, {"id": "18143241100", "viewId": "18116950272", "name": null, "category": "other", "apiName": "10453949094_apple_pay_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#apple-pay"}}, {"id": "18145871136", "viewId": "18116950272", "name": null, "category": "other", "apiName": "10453949094_credit_card_option", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#pay-with-credit-card"}}, {"id": "18153944340", "viewId": "10753950985", "name": null, "category": "other", "apiName": "10453949094_pay_with_credit_card", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#pay-with-credit-card"}}, {"id": "18564553350", "viewId": "18603392262", "name": null, "category": "other", "apiName": "10453949094_seat_map_nlc_link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#seatNotificationNLCLink"}}, {"id": "18572712765", "viewId": "18603392262", "name": null, "category": "other", "apiName": "10453949094_covid_message_link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#covidMessageLink"}}, {"id": "18572723521", "viewId": "18603392262", "name": null, "category": "other", "apiName": "10453949094_seat_segment_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".segment-container > .tab"}}, {"id": "18576302097", "viewId": "18603392262", "name": null, "category": "other", "apiName": "10453949094_skip_seat_selection", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#SkipSeatsButton"}}, {"id": "18576703093", "viewId": "18603392262", "name": null, "category": "other", "apiName": "10453949094_save_seat_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#SaveSeatsButton"}}, {"id": "18578494100", "viewId": "18603392262", "name": null, "category": "other", "apiName": "10453949094_seat_map_legend_nlc_link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#seatMapLegendNLCLink"}}, {"id": "18584003213", "viewId": "18603392262", "name": null, "category": "other", "apiName": "10453949094_toggle_seat_legend", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".chevron > img"}}, {"id": "18741210944", "viewId": "18734030458", "name": null, "category": "other", "apiName": "10453949094_book_now_sale_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".jsx-1841228334.black > ods-hyperlink:nth-of-type(1)"}}, {"id": "20338671057", "viewId": "20369470240", "name": null, "category": "other", "apiName": "10453949094_flight_search_widget_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".btn-cta"}}, {"id": "20369651399", "viewId": "20356451409", "name": null, "category": "other", "apiName": "10453949094_em_bot_search_widget_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".btn-cta"}}, {"id": "20498553253", "viewId": null, "name": null, "category": "other", "apiName": "matrix_pageLoadedTiming", "eventType": "custom", "eventFilter": null}, {"id": "20529992789", "viewId": null, "name": null, "category": "other", "apiName": "matrix_domInteractiveTiming", "eventType": "custom", "eventFilter": null}, {"id": "20741743203", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_car_top_bottom_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#carAdSection, .cards li:nth-of-type(2) a"}}, {"id": "20771262077", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_hotel_top_bottom_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#hotelsContainer, .cards li:nth-of-type(1) a"}}, {"id": "21510310559", "viewId": "16040770229", "name": null, "category": "other", "apiName": "10453949094_hotel_top_bottom_click_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#hotelsContainer, .cards li:nth-of-type(1) a"}}, {"id": "21549280769", "viewId": "16040770229", "name": null, "category": "other", "apiName": "10453949094_car_top_bottom_click_viewpnr", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#carAdSection, .cards li:nth-of-type(2) a"}}, {"id": "21840730096", "viewId": "21828910228", "name": null, "category": "other", "apiName": "10453949094_route_map_price_display_book_now_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#fareItemCard-1657841053365_02576299664505388 > div > div.fr-mt-3 > button"}}, {"id": "22025637664", "viewId": null, "name": null, "category": "other", "apiName": "debug_T1P3_ViewPNR", "eventType": "custom", "eventFilter": null}, {"id": "22378763263", "viewId": null, "name": null, "category": "other", "apiName": "t1_refundable_main", "eventType": "custom", "eventFilter": null}, {"id": "25259121346", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_hp_hero_find_flight_deals_box__46heLmH6SM7gRrruT9eXd", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".HomepageHero_HomepageHero__LowestFlightDealText__Uixeb > auro-hyperlink:nth-of-type(1)"}}, {"id": "27173800078", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_deals_nonhero_click_RPV5BaWWT2n7H6sHTZBRh", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".Banner_Banner__Children__jpMxa > auro-hyperlink:nth-of-type(1)"}}, {"id": "27178070044", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_cc_click_XXtWoFxZs3WpdoN5nAvMv", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".jsx-2799788661.white auro-hyperlink"}}, {"id": "27187830050", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_cc_click_XXtWoFxZs3WpdoN5nAvMv_MRsD3kfsi4aHbpHoofRYv", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".jsx-2799788661.white auro-hyperlink"}}, {"id": "27197440053", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_deals_nonhero_click_RPV5BaWWT2_TwTs5nLy3QDkGTyzXgGvv", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".Banner_Banner__Children__jpMxa > auro-hyperlink:nth-of-type(1)"}}, {"id": "27455561288", "viewId": "22800761677", "name": null, "category": "other", "apiName": "10453949094_microsite_footer_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".offer-content > hf-auro-hyperlink"}}, {"id": "27472251531", "viewId": "26278440069", "name": null, "category": "other", "apiName": "10453949094_deals_footer_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[name='chevron-right'] .ico_squareLarge"}}, {"id": "27492730740", "viewId": "10562343061", "name": null, "category": "other", "apiName": "10453949094_calendar_learn_more_click_E3VBBEBnPGRDESmQbUk6o", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".option-1 hf-auro-hyperlink"}}, {"id": "27493590625", "viewId": "17263860706", "name": null, "category": "other", "apiName": "10453949094_addnewflight_banner_click_BudMwm2nJBJ55Qaq3YW4i", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".option-1 .hyperlink--secondary"}}, {"id": "27553530118", "viewId": "26278440069", "name": null, "category": "other", "apiName": "10453949094_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".hyperlink--cta.hyperlink--secondary"}}, {"id": "27587230982", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_hp_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".offer-content .hyperlink--secondary"}}, {"id": "27607950233", "viewId": "26140660524", "name": null, "category": "other", "apiName": "10453949094_new_cart_banner_click_SGkJMxSmmgeYTQfRXSvjR", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".option-1 hf-auro-hyperlink"}}, {"id": "27613470203", "viewId": "22800761677", "name": null, "category": "other", "apiName": "10453949094_flight_search_banner_click_LXumDw4BTzpYMsCjgyncs", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".option-1 hf-auro-hyperlink"}}, {"id": "27638050139", "viewId": "10577265303", "name": null, "category": "other", "apiName": "10453949094_old_cart_banner_click_N8kLABfZHLrPp1KesLs5s", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".option-1 hf-auro-hyperlink"}}, {"id": "27656860009", "viewId": "10564204483", "name": null, "category": "other", "apiName": "10453949094_matrix_banner_click_AJYewLazLhqFkjTerF9Tx", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".option-1 hf-auro-hyperlink"}}, {"id": "27695730037", "viewId": null, "name": null, "category": "other", "apiName": "clickOnFireworkButton_KT", "eventType": "custom", "eventFilter": null}, {"id": "28248760068", "viewId": "10518584033", "name": null, "category": "other", "apiName": "10453949094_cta_click_GKhU2bjMuH1o7pJbWd61d", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#SCmerch__Footer__One .product__cta"}}, {"id": "28284470004", "viewId": "10518584033", "name": null, "category": "other", "apiName": "10453949094_cta_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#SCmerch__Footer__One .product__cta"}}, {"id": "28362091690", "viewId": null, "name": null, "category": "other", "apiName": "fireworks_tracking", "eventType": "custom", "eventFilter": null}, {"id": "28375680477", "viewId": "10518584033", "name": null, "category": "other", "apiName": "10453949094_cta_click_GKhU2bjMuH1o7pJbWd61_UV932aNC3wXmUMoQ4Dwb1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#SCmerch__Footer__One .product__cta"}}, {"id": "28563890027", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_tile_2_click_2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".jsx-3352243459.FeatureCard_FeatureCard__Footer__MlC4O > auro-hyperlink"}}, {"id": "28605170026", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_tile_3_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".jsx-3676045514.FeatureCard_FeatureCard__Footer__MlC4O > auro-hyperlink"}}, {"id": "28614810894", "viewId": null, "name": null, "category": "other", "apiName": "made_purchase_event", "eventType": "custom", "eventFilter": null}, {"id": "28675860528", "viewId": "22800761677", "name": null, "category": "other", "apiName": "10453949094_flight_search_banner_click_LXu_6i9AxVfsVV8Wdd2XntUom", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".option-1 hf-auro-hyperlink"}}, {"id": "28687270445", "viewId": "22800761677", "name": null, "category": "other", "apiName": "10453949094_microsite_footer_click_NTgL7excE4JVkxRGnW68u", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".offer-content > hf-auro-hyperlink"}}, {"id": "28696300423", "viewId": "10577265303", "name": null, "category": "other", "apiName": "10453949094_old_cart_banner_click_N8kLABfZ_9S4w5Nnd43UMUhndM1YMH", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".option-1 hf-auro-hyperlink"}}, {"id": "28710350390", "viewId": "17263860706", "name": null, "category": "other", "apiName": "10453949094_addnewflight_banner_click_BudM_ChuMdSW874X2F7eoocpa6", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".option-1 .hyperlink--secondary"}}, {"id": "28717720490", "viewId": "10562343061", "name": null, "category": "other", "apiName": "10453949094_calendar_learn_more_click_E3VB_9rfdBEenT3hQA2C9b4yBB", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".option-1 hf-auro-hyperlink"}}, {"id": "28719670466", "viewId": "26140660524", "name": null, "category": "other", "apiName": "10453949094_new_cart_banner_click_SGkJMxSm_TqTBy3NZedPHGAbagzhEh", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".option-1 hf-auro-hyperlink"}}, {"id": "28719880431", "viewId": "10564204483", "name": null, "category": "other", "apiName": "10453949094_matrix_banner_click_AJYewLazLh_4ZhXsbyBMMNscpUGdUfWN", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".option-1 hf-auro-hyperlink"}}, {"id": "28723360514", "viewId": "26278440069", "name": null, "category": "other", "apiName": "10453949094_deals_footer_click_SCxKA54NGb7okESZxf6Rd", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[name='chevron-right'] .ico_squareLarge"}}, {"id": "28736300243", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_hp_click_6oynWh8d7yssYVVXP1uxn", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".offer-content .hyperlink--secondary"}}, {"id": "28794200355", "viewId": "28933050010", "name": null, "category": "other", "apiName": "10453949094_try_it_now_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".jsx-773940490.black .hyperlink--cta.hyperlink--secondary"}}, {"id": "28809100491", "viewId": "28921370004", "name": null, "category": "other", "apiName": "10453949094_find_flight_deals_now", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".HomepageHero_HomepageHero__LowestFlightDealText__Uixeb .hyperlink--cta.hyperlink--secondary"}}, {"id": "28882420298", "viewId": null, "name": null, "category": "other", "apiName": "lyft_shadow_banner", "eventType": "custom", "eventFilter": null}, {"id": "28882940152", "viewId": "28232630254", "name": null, "category": "other", "apiName": "10453949094_ckicj", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".hyperlink--cta.hyperlink--secondary"}}, {"id": "28977810783", "viewId": "28673200094", "name": null, "category": "other", "apiName": "10453949094_click_event_lyft_YGCym5EnG8tUWUNude29Z", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".hyperlink--cta.hyperlink--secondary"}}, {"id": "28994020237", "viewId": "10518584033", "name": null, "category": "other", "apiName": "10453949094_footer_click_event", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".offer-content > hf-auro-hyperlink"}}, {"id": "29051570313", "viewId": "10518584033", "name": null, "category": "other", "apiName": "10453949094_cta_click_7pzbqYonUTzTd4sz8r2RT", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#SCmerch__Footer__One .product__cta"}}, {"id": "29216080021", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_tile_2_click_2_GthNLVdXWR8W5TbKFARGb", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".jsx-3352243459.FeatureCard_FeatureCard__Footer__MlC4O > auro-hyperlink"}}, {"id": "29238210040", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_tile_3_click_UcAsdnBxYuLY7hasQaXVw", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".jsx-3676045514.FeatureCard_FeatureCard__Footer__MlC4O > auro-hyperlink"}}, {"id": "29252720308", "viewId": null, "name": null, "category": "other", "apiName": "optimizely_user_id_empty", "eventType": "custom", "eventFilter": null}, {"id": "29269660204", "viewId": null, "name": null, "category": "other", "apiName": "time_delayed_optimizely_user_id_empty_v2", "eventType": "custom", "eventFilter": null}, {"id": "29270980413", "viewId": null, "name": null, "category": "other", "apiName": "optimizely_user_id_not_empty", "eventType": "custom", "eventFilter": null}, {"id": "29271410377", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_find_flight_deals_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".HomepageHero_HomepageHero__LowestFlightDealText__83wxY > auro-hyperlink:nth-of-type(1)"}}, {"id": "29280380253", "viewId": null, "name": null, "category": "other", "apiName": "optimizely_user_id_not_empty_v2", "eventType": "custom", "eventFilter": null}, {"id": "29304280086", "viewId": null, "name": null, "category": "other", "apiName": "time_delayed_optimizely_user_id_not_empty_v2", "eventType": "custom", "eventFilter": null}, {"id": "29310010043", "viewId": null, "name": null, "category": "other", "apiName": "optimizely_user_id_empty_v2", "eventType": "custom", "eventFilter": null}, {"id": "29326370391", "viewId": null, "name": null, "category": "other", "apiName": "vacations_nav_bar_clicks", "eventType": "custom", "eventFilter": null}, {"id": "29430620545", "viewId": null, "name": null, "category": "other", "apiName": "eSIM_clicks", "eventType": "custom", "eventFilter": null}, {"id": "29437020230", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_sign_in_click_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".sign-in-border"}}, {"id": "29445960963", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_sign_in_button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#sign-in-btn"}}, {"id": "29453250147", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_sign_in_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".navbar-greeting-name.focus-underline"}}, {"id": "29479420507", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_booklyft", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#bookRideshare"}}, {"id": "29541350100", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_bookrentalcar", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#bookRentalCar"}}, {"id": "29555210012", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_bookstay", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#bookStay"}}, {"id": "29559040370", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_sign_up_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-sign-up-help"}}, {"id": "29820010791", "viewId": null, "name": null, "category": "other", "apiName": "myAccount_PCUpsellBanner", "eventType": "custom", "eventFilter": null}, {"id": "29841840526", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_book_a_stay_click_UzYfVaaYBXqf_LSrYtd9hNbTmyixy2RUPo", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#bookStay"}}, {"id": "29841840527", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_flight_pass_var_clicks_TnvExn4_559rQXFzHp5uN89nx8zJ4", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#bookRideshare"}}, {"id": "29841860523", "viewId": "25228890987", "name": null, "category": "other", "apiName": "10453949094_hotel_click_2_29fHvWrsiKDGaaVu_WUuSa1j9hxvJWrm6YYBMY", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#bookStay"}}, {"id": "29842580458", "viewId": "25228890987", "name": null, "category": "other", "apiName": "10453949094_car_click_planbook_FsmhKnQVxfW_4Eyn3knzvJJnpY9VnwLLR", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#bookRentalCar"}}, {"id": "29847240684", "viewId": "25228890987", "name": null, "category": "other", "apiName": "10453949094_rides_click_planbook_QQ4fZWcjq_GTRAnJzvTQeeiFwcAgXHn", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#bookRideshare"}}, {"id": "29854590132", "viewId": "25228890987", "name": null, "category": "other", "apiName": "10453949094_cms_partial_click_VosuFsRTvBxY_JMv3V2JbfoZLPrWrvU187", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "cms-partial"}}, {"id": "29885650091", "viewId": null, "name": null, "category": "other", "apiName": "myAccount_PriceDropBannerClicks", "eventType": "custom", "eventFilter": null}, {"id": "29887480017", "viewId": null, "name": null, "category": "other", "apiName": "myAccount_LyftBannerClicks", "eventType": "custom", "eventFilter": null}, {"id": "29957920150", "viewId": null, "name": null, "category": "other", "apiName": "cars_nav_bar_clicks", "eventType": "custom", "eventFilter": null}, {"id": "30048930533", "viewId": null, "name": null, "category": "other", "apiName": "third_triwidget_clicks_on_confirmation_page", "eventType": "custom", "eventFilter": null}, {"id": "30058630142", "viewId": null, "name": null, "category": "other", "apiName": "made_pc_upgrade_event", "eventType": "custom", "eventFilter": null}, {"id": "30067100552", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_click_event_for_offercontent___AgEMU8RoiryBMsWCC7fya", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".offer-content > hf-auro-hyperlink"}}, {"id": "30072730196", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_homepage_hero_cta_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".HomepageHero_HomepageHero__LowestFlightDealText__83wxY auro-hyperlink"}}, {"id": "30089331604", "viewId": null, "name": null, "category": "other", "apiName": "gen_ai_nav_clicks", "eventType": "custom", "eventFilter": null}, {"id": "30093892030", "viewId": null, "name": null, "category": "other", "apiName": "gen_ai_homepage_hero_clicks", "eventType": "custom", "eventFilter": null}, {"id": "30113320213", "viewId": null, "name": null, "category": "other", "apiName": "alaska_access_footer_placement_click_tracker", "eventType": "custom", "eventFilter": null}, {"id": "30140180519", "viewId": null, "name": null, "category": "other", "apiName": "SAF_5_percent_reduction", "eventType": "custom", "eventFilter": null}, {"id": "30158900270", "viewId": null, "name": null, "category": "other", "apiName": "SAF_opt_out", "eventType": "custom", "eventFilter": null}, {"id": "30177450210", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_homepage_hero_cta_clicks_QizhLBZfNKLiCjQdF8Z6S", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".HomepageHero_HomepageHero__LowestFlightDealText__83wxY auro-hyperlink"}}, {"id": "30180940153", "viewId": null, "name": null, "category": "other", "apiName": "gen_ai_homepage_cta_clicks", "eventType": "custom", "eventFilter": null}, {"id": "30191740420", "viewId": null, "name": null, "category": "other", "apiName": "homepage_cta_button_text_custom_event_capture", "eventType": "custom", "eventFilter": null}, {"id": "30193611126", "viewId": null, "name": null, "category": "other", "apiName": "user_saw_genai", "eventType": "custom", "eventFilter": null}, {"id": "30198200192", "viewId": null, "name": null, "category": "other", "apiName": "SAF_10_percent_reduction", "eventType": "custom", "eventFilter": null}, {"id": "30204890110", "viewId": null, "name": null, "category": "other", "apiName": "pdx_20_cta_clicks", "eventType": "custom", "eventFilter": null}, {"id": "30215800157", "viewId": null, "name": null, "category": "other", "apiName": "SAF_20_percent_reduction", "eventType": "custom", "eventFilter": null}, {"id": "30227460257", "viewId": null, "name": null, "category": "other", "apiName": "is_qm_active", "eventType": "custom", "eventFilter": null}, {"id": "30243390048", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_homepage_hero_cta_clicks_JjvUNB9RqRKUK1xawWD3F", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".HomepageHero_HomepageHero__LowestFlightDealText__83wxY auro-hyperlink"}}, {"id": "30305830604", "viewId": null, "name": null, "category": "other", "apiName": "datesEligibleValidation", "eventType": "custom", "eventFilter": null}, {"id": "30307130108", "viewId": null, "name": null, "category": "other", "apiName": "screenwidth_below_960px", "eventType": "custom", "eventFilter": null}, {"id": "30307360214", "viewId": null, "name": null, "category": "other", "apiName": "date_validation", "eventType": "custom", "eventFilter": null}, {"id": "30338750207", "viewId": "29962080414", "name": null, "category": "other", "apiName": "10453949094_unmr_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#_continue"}}, {"id": "30350050299", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_unmr_clicked_continue_FHbSp46LokZBeMexSG8gh", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#_continue"}}, {"id": "30375650082", "viewId": null, "name": null, "category": "other", "apiName": "everymundo", "eventType": "custom", "eventFilter": null}, {"id": "30470720260", "viewId": null, "name": null, "category": "other", "apiName": "mileage_plan_sign_up_error", "eventType": "custom", "eventFilter": null}, {"id": "30497400150", "viewId": null, "name": null, "category": "other", "apiName": "mileage_plan_welcome_message", "eventType": "custom", "eventFilter": null}, {"id": "30519390085", "viewId": null, "name": null, "category": "other", "apiName": "mileage_plan_sign_up_button_click", "eventType": "custom", "eventFilter": null}, {"id": "4537634584788992", "viewId": "6147389401071616", "name": null, "category": "other", "apiName": "10453949094_1st_tile", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".jsx-131302590.FeatureCard_FeatureCard__Footer__bkKvF"}}, {"id": "4561384625668096", "viewId": "5638630740328448", "name": null, "category": "other", "apiName": "10453949094_search_button_in_book_now_modal__japan", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".md\\:justify-start.justify-end .fc-booking-search-button"}}, {"id": "4566537294577664", "viewId": "5429861372657664", "name": null, "category": "other", "apiName": "10453949094_flights_to_japan_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".grid-container > div:nth-of-type(3) .img-responsive"}}, {"id": "4640815234940928", "viewId": "5169124934942720", "name": null, "category": "other", "apiName": "10453949094_first_name_field_click_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "input[name='firstName']"}}, {"id": "4642285078446080", "viewId": null, "name": null, "category": "other", "apiName": "clicked_mileage_plan_banner", "eventType": "custom", "eventFilter": null}, {"id": "4682563797647360", "viewId": null, "name": null, "category": "other", "apiName": "atmos_card_multicard_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "4691454493196288", "viewId": "5138343827079168", "name": null, "category": "other", "apiName": "10453949094_lets_go__iceland", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "div:nth-of-type(4) cp-cell:nth-of-type(3) > auro-hyperlink"}}, {"id": "4701547448238080", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_continue", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#submitUMNRRequest"}}, {"id": "4701554675023872", "viewId": "29338730259", "name": null, "category": "other", "apiName": "10453949094_first_name_field_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "input[name='firstName']"}}, {"id": "4704679490224128", "viewId": null, "name": null, "category": "other", "apiName": "ha_homepage_personalized_brand_message_click", "eventType": "custom", "eventFilter": null}, {"id": "4706966879076352", "viewId": null, "name": null, "category": "other", "apiName": "booking_widget_tab_cruises", "eventType": "custom", "eventFilter": null}, {"id": "4743105446936576", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_ancillary_tab__cruises", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "borealis-expanded-booking-widget #auro-tab-5"}}, {"id": "4756999125073920", "viewId": "5449920182747136", "name": null, "category": "other", "apiName": "10453949094_search_now", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".cp-extra-copy-padding > auro-hyperlink"}}, {"id": "4799626511908864", "viewId": "6733950882676736", "name": null, "category": "other", "apiName": "10453949094_search_button_in_book_now_modal__ca", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".md\\:justify-start.justify-end .fc-booking-search-button"}}, {"id": "4820523438309376", "viewId": null, "name": null, "category": "other", "apiName": "atmos_card_multicard_ascent_apply_click", "eventType": "custom", "eventFilter": null}, {"id": "4827113866395648", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_ancillary_tab__cars", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "borealis-expanded-booking-widget #auro-tab-2"}}, {"id": "4838200236572672", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_rent_now_click_FdEwrBoC9Nrhn3K_7vvYAuyDzkcEnMkkca3HY", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#bookRentalCar"}}, {"id": "4841761613283328", "viewId": "6218947658252288", "name": null, "category": "other", "apiName": "10453949094_search_hotels_click_KRdss63GNB_JN8QmLBtCMNPwF5Er3spj", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "button.btn-blue"}}, {"id": "4888584973451264", "viewId": null, "name": null, "category": "other", "apiName": "atmos_card_modal_apply_now", "eventType": "custom", "eventFilter": null}, {"id": "4910820058988544", "viewId": null, "name": null, "category": "other", "apiName": "conf-third-party-banner-click-lyft", "eventType": "custom", "eventFilter": null}, {"id": "4914400151207936", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_ancillary_tab__flights", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "borealis-expanded-booking-widget #auro-tab-1"}}, {"id": "4920369887313920", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_ancillary_tab__packages", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "borealis-expanded-booking-widget #auro-tab-4"}}, {"id": "4937633424474112", "viewId": "6733950882676736", "name": null, "category": "other", "apiName": "10453949094_flights_to_california_search_button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fc-booking-search-button"}}, {"id": "4938210829139968", "viewId": "5928970932191232", "name": null, "category": "other", "apiName": "10453949094_search_button_in_book_now_modal_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".md\\:justify-start.justify-end .fc-booking-search-button"}}, {"id": "4943820316475392", "viewId": null, "name": null, "category": "other", "apiName": "deals-price-sort", "eventType": "custom", "eventFilter": null}, {"id": "4969953439252480", "viewId": null, "name": null, "category": "other", "apiName": "loyalty_program_form_error", "eventType": "custom", "eventFilter": null}, {"id": "4993280776601600", "viewId": null, "name": null, "category": "other", "apiName": "triwidget_car_rentals_click", "eventType": "custom", "eventFilter": null}, {"id": "5005910569910272", "viewId": null, "name": null, "category": "other", "apiName": "loyalty_program_form_submit", "eventType": "custom", "eventFilter": null}, {"id": "5011093253259264", "viewId": "5928970932191232", "name": null, "category": "other", "apiName": "10453949094_flights_to_south_korea_search_button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fc-booking-search-button"}}, {"id": "5032409930924032", "viewId": "6649666444460032", "name": null, "category": "other", "apiName": "10453949094_search_button_in_book_now_modal__mexico", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".md\\:justify-start .fc-booking-search-button"}}, {"id": "5048799641468928", "viewId": null, "name": null, "category": "other", "apiName": "conf-third-party-banner-click-any", "eventType": "custom", "eventFilter": null}, {"id": "5053584711090176", "viewId": "6468165291474944", "name": null, "category": "other", "apiName": "10453949094_yes_planbook", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#umnrYes"}}, {"id": "5056188073639936", "viewId": null, "name": null, "category": "other", "apiName": "deals_page_saver_clicks", "eventType": "custom", "eventFilter": null}, {"id": "5089738529439744", "viewId": "26140660524", "name": null, "category": "other", "apiName": "10453949094_continue_as_guest_PGBWyTfdJktbfcjsSHVhC", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".tablet-right .auro-button--secondary"}}, {"id": "5096313639927808", "viewId": null, "name": null, "category": "other", "apiName": "homepage_carousel_slide_traversed", "eventType": "custom", "eventFilter": null}, {"id": "5101748734394368", "viewId": "6218947658252288", "name": null, "category": "other", "apiName": "10453949094_bundle_your_trip", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".OneCol_OneCol__KhIwB > div:nth-of-type(1) auro-hyperlink"}}, {"id": "5117827835756544", "viewId": null, "name": null, "category": "other", "apiName": "homepage_carousel_journey_grid_alaska_vacations_clicked", "eventType": "custom", "eventFilter": null}, {"id": "5125150828396544", "viewId": "6407431467565056", "name": null, "category": "other", "apiName": "10453949094_chat_bubble_click_control", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#five9-maximize-button"}}, {"id": "5129487247998976", "viewId": "5429861372657664", "name": null, "category": "other", "apiName": "10453949094_flights_to_south_korea_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "div:nth-of-type(5) .img-responsive"}}, {"id": "5150110363942912", "viewId": null, "name": null, "category": "other", "apiName": "atmos_card_account_overview_primary", "eventType": "custom", "eventFilter": null}, {"id": "5175865173082112", "viewId": null, "name": null, "category": "other", "apiName": "continue_cart", "eventType": "custom", "eventFilter": null}, {"id": "5178761470017536", "viewId": null, "name": null, "category": "other", "apiName": "booking_widget_borealis_card_concise_cta_click", "eventType": "custom", "eventFilter": null}, {"id": "5179805126098944", "viewId": "5449920182747136", "name": null, "category": "other", "apiName": "10453949094_book_cruises_SXxeVGo2QZptbxe3UhS8r", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "section.LX-XX_LXXX__ContentItems__WVPo_ > div:nth-of-type(2) .hyperlink--cta"}}, {"id": "5202500767186944", "viewId": null, "name": null, "category": "other", "apiName": "homepage_carousel_play_pause_clicked", "eventType": "custom", "eventFilter": null}, {"id": "5214750754209792", "viewId": null, "name": null, "category": "other", "apiName": "cruises__atmos_rewards__custom_cta", "eventType": "custom", "eventFilter": null}, {"id": "5215103700697088", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_hero_cta_text", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".HomepageHeroUCM_HomepageHeroUCM__LowestFlightDealText__jjjok > auro-hyperlink:nth-of-type(1)"}}, {"id": "5231121764450304", "viewId": "6468165291474944", "name": null, "category": "other", "apiName": "10453949094_no_planbook", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#umnrNo"}}, {"id": "5265246420467712", "viewId": "6407431467565056", "name": null, "category": "other", "apiName": "10453949094_expand", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#five9-popout-button"}}, {"id": "5273971906576384", "viewId": null, "name": null, "category": "other", "apiName": "dealsClicked", "eventType": "custom", "eventFilter": null}, {"id": "5296651590434816", "viewId": "5449920182747136", "name": null, "category": "other", "apiName": "10453949094_book_cruises", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "section.LX-XX_LXXX__ContentItems__WVPo_ > div:nth-of-type(2) .hyperlink--cta"}}, {"id": "5302760996864000", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_cc_apply_now_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".cc-content > auro-hyperlink"}}, {"id": "5306522901676032", "viewId": "5138343827079168", "name": null, "category": "other", "apiName": "10453949094_lets_go__australia", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "cp-cell:nth-of-type(5) > auro-hyperlink"}}, {"id": "5322549383397376", "viewId": null, "name": null, "category": "other", "apiName": "loyalty_program_form_input_focused", "eventType": "custom", "eventFilter": null}, {"id": "5359454659543040", "viewId": null, "name": null, "category": "other", "apiName": "atmos_card_multicard_ascent_prequal_click", "eventType": "custom", "eventFilter": null}, {"id": "5383473391730688", "viewId": null, "name": null, "category": "other", "apiName": "atmos_card_multicard_summit_apply_click", "eventType": "custom", "eventFilter": null}, {"id": "5409239833772032", "viewId": null, "name": null, "category": "other", "apiName": "atmos_visa_apply_button_secondary_custom", "eventType": "custom", "eventFilter": null}, {"id": "5410745639239680", "viewId": null, "name": null, "category": "other", "apiName": "deals-filter-fareclass", "eventType": "custom", "eventFilter": null}, {"id": "5419531150032896", "viewId": "6218947658252288", "name": null, "category": "other", "apiName": "10453949094_book_your_stay_link_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".OneCol_OneCol__KhIwB > div:nth-of-type(2) auro-hyperlink"}}, {"id": "5422578901188608", "viewId": null, "name": null, "category": "other", "apiName": "deals-sort", "eventType": "custom", "eventFilter": null}, {"id": "5436192057982976", "viewId": "6407431467565056", "name": null, "category": "other", "apiName": "10453949094_minimize", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#five9-minimize-icon"}}, {"id": "5465198958477312", "viewId": "5449920182747136", "name": null, "category": "other", "apiName": "10453949094_mediterranean_book_now", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "auro-card:nth-of-type(7) .hyperlink"}}, {"id": "5476352653000704", "viewId": "6163912157036544", "name": null, "category": "other", "apiName": "10453949094_bubble_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bubble"}}, {"id": "5492596210925568", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_homepage_hero_cta_clicks_CmzrW9yTdVKqBN61mTWXA", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".HomepageHero_HomepageHero__LowestFlightDealText__83wxY auro-hyperlink"}}, {"id": "5508877851557888", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_book_a_stay_click_UzYfVaaYBXqf_Ceg4fANuqGQ369HHPy6VX", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#bookStay"}}, {"id": "5515505367252992", "viewId": null, "name": null, "category": "other", "apiName": "atmos_visa_cart_offer_apply_button_click", "eventType": "custom", "eventFilter": null}, {"id": "5520033254735872", "viewId": null, "name": null, "category": "other", "apiName": "atmos_visa_apply_button_custom", "eventType": "custom", "eventFilter": null}, {"id": "5522495281823744", "viewId": "5182858881400832", "name": null, "category": "other", "apiName": "10453949094_book_now_awards_sale", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".HomepageHero_HomepageHero__LowestFlightDealText__83wxY > auro-hyperlink"}}, {"id": "5523136221806592", "viewId": "5449920182747136", "name": null, "category": "other", "apiName": "10453949094_celebrity_book_now", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "auro-card:nth-of-type(1) .hyperlink"}}, {"id": "5539249338974208", "viewId": null, "name": null, "category": "other", "apiName": "atmos_card_multicard_summit_prequal_click", "eventType": "custom", "eventFilter": null}, {"id": "5547184301539328", "viewId": null, "name": null, "category": "other", "apiName": "signin_toast_display", "eventType": "custom", "eventFilter": null}, {"id": "5576918766977024", "viewId": "6218947658252288", "name": null, "category": "other", "apiName": "10453949094_bundle_your_trip_USn8s3dZyUA8c_Wn1BJ3zBHCrvByUVvBEJD", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".OneCol_OneCol__KhIwB > div:nth-of-type(1) auro-hyperlink"}}, {"id": "5584006985547776", "viewId": null, "name": null, "category": "other", "apiName": "booking_widget_tab_hotels", "eventType": "custom", "eventFilter": null}, {"id": "5590852918050816", "viewId": null, "name": null, "category": "other", "apiName": "homepage_carousel_below_fold_content_in_view", "eventType": "custom", "eventFilter": null}, {"id": "5624003004465152", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_ancillary_tab__hotels", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "borealis-expanded-booking-widget #auro-tab-3"}}, {"id": "5627646902534144", "viewId": "5138343827079168", "name": null, "category": "other", "apiName": "10453949094_lets_go__uzbekistan", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "cp-cell:nth-of-type(6) > auro-hyperlink"}}, {"id": "5644010233004032", "viewId": null, "name": null, "category": "other", "apiName": "clicked_4_ways_to_fly_footer", "eventType": "custom", "eventFilter": null}, {"id": "5649879389700096", "viewId": null, "name": null, "category": "other", "apiName": "deals_page_miles_clicks", "eventType": "custom", "eventFilter": null}, {"id": "5652688482861056", "viewId": "26140660524", "name": null, "category": "other", "apiName": "10453949094_sign_in_and_checkout_Mk3m3jY2i8z8kfuaoFnsv", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".tablet-right > auro-button:nth-of-type(1) > .util_insetLg--squish"}}, {"id": "5653225492185088", "viewId": "6144345338806272", "name": null, "category": "other", "apiName": "10453949094_search_button_in_book_now_modal", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".md\\:justify-start.justify-end .fc-booking-search-button"}}, {"id": "5734242454339584", "viewId": "5449920182747136", "name": null, "category": "other", "apiName": "10453949094_alaska_book_now", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "auro-card:nth-of-type(2) .hyperlink"}}, {"id": "5741760536641536", "viewId": null, "name": null, "category": "other", "apiName": "deals-list-cards-toggle", "eventType": "custom", "eventFilter": null}, {"id": "5760709032673280", "viewId": "29338730259", "name": null, "category": "other", "apiName": "10453949094_join_mileage_plan__button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#stretch-button > .auroButton"}}, {"id": "5763159806443520", "viewId": "6218947658252288", "name": null, "category": "other", "apiName": "10453949094_book_your_stay_link_click_7TDZNPRBri94dyBvLUX4z", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".OneCol_OneCol__KhIwB > div:nth-of-type(2) auro-hyperlink"}}, {"id": "5766134968877056", "viewId": "5449920182747136", "name": null, "category": "other", "apiName": "10453949094_royal_caribbean_book_now", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".mobile-flip auro-hyperlink"}}, {"id": "5778244203446272", "viewId": null, "name": null, "category": "other", "apiName": "conf-third-party-banner-click-car", "eventType": "custom", "eventFilter": null}, {"id": "5821138018762752", "viewId": null, "name": null, "category": "other", "apiName": "deals-payment-toggle", "eventType": "custom", "eventFilter": null}, {"id": "5824665684279296", "viewId": "26140660524", "name": null, "category": "other", "apiName": "10453949094_continue_to_checkout", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".tablet-right .util_insetLg--squish"}}, {"id": "5851439260499968", "viewId": "5138343827079168", "name": null, "category": "other", "apiName": "10453949094_global_getaways__buy_miles", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".grid-banner > cp-cell:nth-of-type(1) auro-hyperlink"}}, {"id": "5868222218502144", "viewId": null, "name": null, "category": "other", "apiName": "booking_widget_tab_flights", "eventType": "custom", "eventFilter": null}, {"id": "5907292374171648", "viewId": "5169124934942720", "name": null, "category": "other", "apiName": "10453949094_join_mileage_plan_button_click__short_form", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#stretch-button > .auroButton"}}, {"id": "5917248829784064", "viewId": "5138343827079168", "name": null, "category": "other", "apiName": "10453949094_lets_go__canada", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "cp-cell:nth-of-type(4) > auro-hyperlink"}}, {"id": "5931609703055360", "viewId": "5317179348877312", "name": null, "category": "other", "apiName": "10453949094_book_now_click_in_modal", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".md\\:justify-start .fc-booking-search-button"}}, {"id": "5936111095119872", "viewId": null, "name": null, "category": "convert", "apiName": "deals-cta-click", "eventType": "custom", "eventFilter": null}, {"id": "5945032700592128", "viewId": "6281087853264896", "name": null, "category": "other", "apiName": "10453949094_cruises_atmos_rewards_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "auro-hyperlink[cta][primary] .hyperlink--cta"}}, {"id": "5948102056607744", "viewId": null, "name": null, "category": "other", "apiName": "atmos_visa_cart_offer_rendered", "eventType": "custom", "eventFilter": null}, {"id": "5951054244741120", "viewId": "5317179348877312", "name": null, "category": "other", "apiName": "10453949094_search_button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fc-booking-search-button"}}, {"id": "5960764566011904", "viewId": "5138343827079168", "name": null, "category": "other", "apiName": "10453949094_global_getaways__lets_go_somewhere", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".grid-full-width auro-hyperlink"}}, {"id": "5969461916729344", "viewId": "26140660524", "name": null, "category": "other", "apiName": "10453949094_continue_to_checkout_HJ8eSXBjLpKyjzX64vL57", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".tablet-right .util_insetLg--squish"}}, {"id": "5976558435827712", "viewId": "5449920182747136", "name": null, "category": "other", "apiName": "10453949094_hawaii_book_now", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "auro-card:nth-of-type(5) .hyperlink"}}, {"id": "5984386261188608", "viewId": "5429861372657664", "name": null, "category": "other", "apiName": "10453949094_flights_to_hawaii_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".grid-container > div:nth-of-type(1) .img-responsive"}}, {"id": "5994765611696128", "viewId": null, "name": null, "category": "other", "apiName": "atmos_visa_modal_dismissed", "eventType": "custom", "eventFilter": null}, {"id": "6011613996646400", "viewId": null, "name": null, "category": "other", "apiName": "booking_widget_tab_cars", "eventType": "custom", "eventFilter": null}, {"id": "6023955543228416", "viewId": null, "name": null, "category": "other", "apiName": "atmos_rewards_custom_cta", "eventType": "custom", "eventFilter": null}, {"id": "6037979817312256", "viewId": null, "name": null, "category": "other", "apiName": "homepage_carousel_cta_clicked", "eventType": "custom", "eventFilter": null}, {"id": "6060323971530752", "viewId": "5138343827079168", "name": null, "category": "other", "apiName": "10453949094_lets_go__ireland", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "div:nth-of-type(4) cp-cell:nth-of-type(1) > auro-hyperlink"}}, {"id": "6086742023864320", "viewId": null, "name": null, "category": "other", "apiName": "homepage_carousel_swiped", "eventType": "custom", "eventFilter": null}, {"id": "6116825799852032", "viewId": null, "name": null, "category": "other", "apiName": "triwidget_hotels_click", "eventType": "custom", "eventFilter": null}, {"id": "6127480386355200", "viewId": null, "name": null, "category": "other", "apiName": "signin_toast_secondary_click", "eventType": "custom", "eventFilter": null}, {"id": "6150406288441344", "viewId": "26140660524", "name": null, "category": "other", "apiName": "10453949094_sign_in_and_checkout", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".tablet-right > auro-button:nth-of-type(1) > .util_insetLg--squish"}}, {"id": "6152168993456128", "viewId": null, "name": null, "category": "other", "apiName": "triwidget_lyft_click", "eventType": "custom", "eventFilter": null}, {"id": "6166190637187072", "viewId": "5449920182747136", "name": null, "category": "other", "apiName": "10453949094_alaska_book_now_2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "auro-card:nth-of-type(6) .hyperlink"}}, {"id": "6167080840462336", "viewId": null, "name": null, "category": "other", "apiName": "atmos_card_account_overview_secondary", "eventType": "custom", "eventFilter": null}, {"id": "6173409378304000", "viewId": null, "name": null, "category": "other", "apiName": "dealclicked", "eventType": "custom", "eventFilter": null}, {"id": "6180041021718528", "viewId": null, "name": null, "category": "other", "apiName": "signin_toast_primary_click", "eventType": "custom", "eventFilter": null}, {"id": "6184135253819392", "viewId": null, "name": null, "category": "other", "apiName": "packages_nav_bar_clicks", "eventType": "custom", "eventFilter": null}, {"id": "6199041428553728", "viewId": "5429861372657664", "name": null, "category": "other", "apiName": "10453949094_flights_to_mexico_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "div:nth-of-type(4) .img-responsive"}}, {"id": "6205075236847616", "viewId": "10520222828", "name": null, "category": "other", "apiName": "10453949094_atmos_visa_apply_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a.auro-button[variant=\"primary\"]"}}, {"id": "6223005131472896", "viewId": "6144345338806272", "name": null, "category": "other", "apiName": "10453949094_flights_to_east_coast_search_button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fc-booking-search-button"}}, {"id": "6245878965469184", "viewId": null, "name": null, "category": "other", "apiName": "clicked_pricedrop_footer", "eventType": "custom", "eventFilter": null}, {"id": "6258033412538368", "viewId": "5449920182747136", "name": null, "category": "other", "apiName": "10453949094_europe_book_now", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "auro-card:nth-of-type(3) .hyperlink"}}, {"id": "6266300532523008", "viewId": "6649666444460032", "name": null, "category": "other", "apiName": "10453949094_flights_to_mexico_search_button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fc-booking-search-button"}}, {"id": "6275549294231552", "viewId": null, "name": null, "category": "other", "apiName": "nav_menu_clicked_on_stays", "eventType": "custom", "eventFilter": null}, {"id": "6322571184963584", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_no", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#umnrNo"}}, {"id": "6333527661740032", "viewId": "13379740149", "name": null, "category": "other", "apiName": "10453949094_flight_pass_var_clicks_TnvExn4_XmwvCRJHNx8UaL2RTQt9i", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#bookRideshare"}}, {"id": "6338944464322560", "viewId": null, "name": null, "category": "other", "apiName": "city_drop_down_clicked", "eventType": "custom", "eventFilter": null}, {"id": "6359370695442432", "viewId": null, "name": null, "category": "other", "apiName": "submenu_vacation_package_link_click", "eventType": "custom", "eventFilter": null}, {"id": "6359413221490688", "viewId": null, "name": null, "category": "other", "apiName": "dealsSorted", "eventType": "custom", "eventFilter": null}, {"id": "6369461870002176", "viewId": null, "name": null, "category": "other", "apiName": "homepage_carousel_dot_clicked", "eventType": "custom", "eventFilter": null}, {"id": "6388776914649088", "viewId": "5138343827079168", "name": null, "category": "other", "apiName": "10453949094_lets_go__vietnam", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "div:nth-of-type(4) cp-cell:nth-of-type(2) > auro-hyperlink"}}, {"id": "6397413355683840", "viewId": "6468165291474944", "name": null, "category": "other", "apiName": "10453949094_continue_planbook", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#submitUMNRRequest"}}, {"id": "6432061901242368", "viewId": null, "name": null, "category": "other", "apiName": "atmos_visa_modal_displayed", "eventType": "custom", "eventFilter": null}, {"id": "6457364153368576", "viewId": "5449920182747136", "name": null, "category": "other", "apiName": "10453949094_terms_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".four-col auro-hyperlink"}}, {"id": "6466748303015936", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_find_flight_deals_cta_EqwatBdKe5hgPs5AxgGwM", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".HomepageHero_HomepageHero__LowestFlightDealText__83wxY > auro-hyperlink:nth-of-type(1)"}}, {"id": "6499527723581440", "viewId": null, "name": null, "category": "other", "apiName": "conf-third-party-banner-click-hotel", "eventType": "custom", "eventFilter": null}, {"id": "6531476301283328", "viewId": null, "name": null, "category": "other", "apiName": "booking_widget_vacation_package_tab_click", "eventType": "custom", "eventFilter": null}, {"id": "6542051072802816", "viewId": "5429861372657664", "name": null, "category": "other", "apiName": "10453949094_flights_to_east_coast_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "div:nth-of-type(6) .img-responsive"}}, {"id": "6571535800991744", "viewId": "6218947658252288", "name": null, "category": "other", "apiName": "10453949094_search_hotels_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "button.btn-blue"}}, {"id": "6588403102253056", "viewId": "5449920182747136", "name": null, "category": "other", "apiName": "10453949094_caribbean_book_now", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "auro-card:nth-of-type(4) .hyperlink"}}, {"id": "6600871048380416", "viewId": null, "name": null, "category": "other", "apiName": "clicked_pricedrop_banner", "eventType": "custom", "eventFilter": null}, {"id": "6617870315028480", "viewId": "5638630740328448", "name": null, "category": "other", "apiName": "10453949094_flights_to_japan_search_button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fc-booking-search-button"}}, {"id": "6631299423666176", "viewId": "6163912157036544", "name": null, "category": "other", "apiName": "10453949094_try_ask_as", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".util_insetLg--squish"}}, {"id": "6672351115345920", "viewId": null, "name": null, "category": "other", "apiName": "clicked_4_ways_to_fly_myaccount_footer", "eventType": "custom", "eventFilter": null}, {"id": "6675865342312448", "viewId": "5838948417667072", "name": null, "category": "other", "apiName": "10453949094_lp_control_search_button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fc-booking-search-button"}}, {"id": "6679271524007936", "viewId": "22017505618", "name": null, "category": "other", "apiName": "10453949094_yes", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#umnrYes"}}, {"id": "6689369860341760", "viewId": "5429861372657664", "name": null, "category": "other", "apiName": "10453949094_flights_to_california_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".grid-container > div:nth-of-type(2) .img-responsive"}}, {"id": "6698846317707264", "viewId": null, "name": null, "category": "other", "apiName": "atmos_card_multicard_business_apply_click", "eventType": "custom", "eventFilter": null}, {"id": "6711383648108544", "viewId": "5429861372657664", "name": null, "category": "other", "apiName": "10453949094_lp_variant_search_button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fc-booking-search-button"}}, {"id": "6715490689613824", "viewId": "26140660524", "name": null, "category": "other", "apiName": "10453949094_continue_as_guest", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".tablet-right .auro-button--secondary"}}, {"id": "6734296736595968", "viewId": null, "name": null, "category": "other", "apiName": "booking_widget_tab_packages", "eventType": "custom", "eventFilter": null}], "dimensions": [{"id": "10554984962", "name": null, "apiName": "membership_level", "segmentId": null}, {"id": "11357774421", "name": null, "apiName": "origin_city", "segmentId": null}, {"id": "11357954348", "name": null, "apiName": "cp.geo", "segmentId": null}, {"id": "11372813205", "name": null, "apiName": "program_preferences", "segmentId": null}, {"id": "11372813224", "name": null, "apiName": "departure_date", "segmentId": null}, {"id": "11376892328", "name": null, "apiName": "return_date", "segmentId": null}, {"id": "11382485525", "name": null, "apiName": "cp.MemberMpBalance", "segmentId": null}, {"id": "11384663081", "name": null, "apiName": "shop_upgrades", "segmentId": null}, {"id": "11384784975", "name": null, "apiName": "to_departure", "segmentId": null}, {"id": "11388284215", "name": null, "apiName": "of_passengers", "segmentId": null}, {"id": "11388284221", "name": null, "apiName": "travel_preferences", "segmentId": null}, {"id": "11390452898", "name": null, "apiName": "city_pair", "segmentId": null}, {"id": "11392374262", "name": null, "apiName": "destination_city", "segmentId": null}, {"id": "11394143400", "name": null, "apiName": "flight_type", "segmentId": null}, {"id": "16277030697", "name": null, "apiName": "adobeid", "segmentId": null}, {"id": "16834665672", "name": null, "apiName": "click_main", "segmentId": null}, {"id": "16868362151", "name": null, "apiName": "pc_seats_click", "segmentId": null}, {"id": "16917360963", "name": null, "apiName": "click_flight_deals", "segmentId": null}, {"id": "19845971438", "name": null, "apiName": "payment_type", "segmentId": null}, {"id": "20043981386", "name": null, "apiName": "trip_type", "segmentId": null}, {"id": "20060109134", "name": null, "apiName": "booking_type", "segmentId": null}, {"id": "20902392547", "name": null, "apiName": "platform", "segmentId": null}], "projectJS": function(){window.optimizelyDecisionData = [];
window["optimizely"] = window["optimizely"] || [];

function purchaseConfirmed() { 
	return window.location.href.indexOf('www.alaskaair.com/booking/payment') > -1;
}

// getCookie helper function will retrieve data from specified cookie as long as it exists. If it does not, it will return 'undefined'
var getCookie = function(name) {
	var match = document.cookie.match(name+'=([^;]*)');
 	return match ? match[1] : undefined;
};

// createCookie will create a new cookie
var createCookie = function(name, value, days) {
  var expires;
  if (days) {
  	var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
};

// Code for adding membership_value to custom attribute
setTimeout(function() {
  if (window.utag_data !== undefined && window.utag_data.membership_level !== undefined) {
    window["optimizely"].push({
      "type": "user",
      "attributes": {
        "membership_level": window.utag_data.membership_level,
        "flight_type": window.utag_data.search_type,
        "of_passengers": window.utag_data.of_passengers,
        "origin_city": window.utag_data.origin_city,
        "destination_city": window.utag_data.destination_city,
        "travel_preferences": window.utag_data.travel_preferences,
        "program_preferences": window.utag_data.program_preferences,
        "cp.MemberMPBalance": window.utag_data['cp.MemberMpBalance'],
        "city_pair": window.utag_data.city_pair,
        "shop_upgrades": window.utag_data.shop_upgrades,
        "departure_date": window.utag_data.departure_date,
        "cp.geo": window.utag_data['cp.geo'],
        "return_date": window.utag_data.return_date,
        "to_departure": window.utag_data.to_departure
      }
    }); 
  } else {
  }
}, 1000);


setTimeout(function() {
  if (typeof window.s != 'undefined' && typeof window.s.marketingCloudVisitorID != 'undefined') {
    window["optimizely"].push({
      "type": "user",
      "attributes": {
        "adobeid": window.s.marketingCloudVisitorID
      }
    }); 
  } else {
  }
}, 2000);

// Code below for Tealium <> Adobe integration
// Cookie where decision data string is stored
var cookieName = "optlyAdobeData";

// Data string containing stored campaign data
var storedData = getCookie(cookieName);

var currentData = "";

var completeDataString = "";

setTimeout(function() {
    currentData = optimizelyDecisionData.toString();

    var re = new RegExp(".*" + currentData + ".*");

    // If no existing cookie, create one
    if (storedData === undefined) {
            completeDataString = currentData;
        } else {
            completeDataString = storedData + currentData;
        }

    // If current data already stored, ignore it
    if (storedData !== undefined && 
        re.test(storedData)) {
        return;
    } else {
        createCookie(cookieName, completeDataString, 100);
    }

}, 1000);

// Code for Upgrade to Main TODO: - save for now, revisit later, temp removal? remove onActivated. I don't think we use conf_page_deals_exp custom event for anything
function onActivated(event) {
    if (purchaseConfirmed()){
      // Look for object with timeout
  
      var startTime = new Date().getTime();
      var lookForObject = setInterval(function() {
  
          if (new Date().getTime() - startTime > 15000) {
              clearInterval(lookForObject);
          } else {
              if (window.utag && window.utag.data && window.utag.data.products) {
                  clearInterval(lookForObject);
                  window.optimizely.push({
                      type: "event",
                      eventName: "conf_page_deals_exp",
                      tags: {
                          products_string: window.utag.data.products
  
                      }
                  });
              }
          }
      }, 100);
    }
  }
  // TODO: remove handler for onActivated
  window["optimizely"].push({
    type: "addListener",
    filter: {
      type: "lifecycle",
      name: "activated"
    },
    handler: onActivated
  });
  
// Booking Payment Page Purchase Tracking - made_purchase_event
(function() {
    // Helper functions
    const Utils = {
      waitForUtagData: function(callback, attempts = 0) {
        const maxAttempts = 20;
        const interval = 500;
        if (window.utag && window.utag.data) {
          callback();
        } else if (attempts < maxAttempts) {
          setTimeout(() => Utils.waitForUtagData(callback, attempts + 1), interval);
        }
      },
  
      fireOptimizelyEvent: function(eventName, tags) {
        try {
          window['optimizely'] = window['optimizely'] || [];
          window['optimizely'].push({
            type: 'event',
            eventName: eventName,
            tags: tags
          });
        } catch (error) {
        }
      },
  
      getUtagData: function() {
        return window.utag && window.utag.data;
      }
    };
  
    const currentUrl = window.location.href;
  
    // Check if the current URL matches the booking payment page
    if (/^https:\/\/www\.alaskaair\.com\/booking\/payment/.test(currentUrl)) {
      Utils.waitForUtagData(() => {
        document.addEventListener('DOMContentLoaded', function() {
          try {
            const utagData = Utils.getUtagData();
            if (utagData && utagData.page_name === 'booking:reservation') {
              const PNR = utagData.customer_pnr;
              const productStringSubtotal = utagData.productStringSubtotal;
              const productsString = utagData.products;
  
              const confirmationCodeElement = document.querySelector('.confirmed-reservation-header h2');
              const scrapedPNR = confirmationCodeElement ? confirmationCodeElement.textContent.trim() : '';
  
              if (productsString && productsString.includes('Revenue')) {
                const revenue = parseInt(parseFloat(productStringSubtotal) * 100);
  
                const storedPNR = localStorage.getItem('PNR');
  
                if (!storedPNR || storedPNR !== PNR) {
                  localStorage.setItem('PNR', PNR);
  
                  // Fire Optimizely event
                  Utils.fireOptimizelyEvent('made_purchase_event', {
                    revenue: revenue,
                    pnr_tealium: PNR,
                    pnr_pagescraped: scrapedPNR
                  });
                } 
              } 
            }
          } catch (error) {
            console.dir('Error tracking purchase event.:', error);
          }
        });
      });
    }
  })();

// Optimizely Project-Level Experiments
// (function () {
//   // Check if the test cookie is set - Comment out this code block when production ready
//   if (document.cookie.indexOf('optly_alaskaair_test=true') === -1) {
//     // Test cookie not set, do not execute code
//     return;
//   }

//   // Helper functions
//   const Utils = {
//     setCookie(name, value, days) {
//       try {
//         let expires = '';
//         if (days !== undefined) {
//           const date = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
//           expires = `; expires=${date.toUTCString()}`;
//         }
//         document.cookie = `${name}=${value || ''}${expires}; path=/`;
//       } catch (error) {
//         Utils.logError('Error setting cookie:', error);
//       }
//     },

//     getCookie(name) {
//       try {
//         const nameEQ = `${name}=`;
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//           const c = cookies[i].trim();
//           if (c.indexOf(nameEQ) === 0) {
//             return c.substring(nameEQ.length);
//           }
//         }
//         return null;
//       } catch (error) {
//         Utils.logError('Error getting cookie:', error);
//         return null;
//       }
//     },

//     log(message, data) {
//       // Only log messages if QA mode (tester cookie) is active
//       if (Utils.isQAMode()) {
//         if (data) {
//           console.dir({ message, data });
//         } else {
//           console.dir(message);
//         }
//       }
//     },

//     logError(message, error) {
//       console.error(message, error);
//       if (Utils.isQAMode()) {
//         console.dir({ message, error });
//       }
//     },

//     isQAMode() {
//       return Utils.getCookie('optly_alaskaair_test') === 'true';
//     },

//     waitForUtagData(callback, attempts = 0) {
//       const maxAttempts = 20;
//       const interval = 500;
//       if (window.utag && window.utag.data) {
//         callback();
//       } else if (attempts < maxAttempts) {
//         setTimeout(() => {
//           Utils.waitForUtagData(callback, attempts + 1);
//         }, interval);
//       } else {
//         Utils.logError(`Failed to load utag data after ${maxAttempts} attempts`);
//       }
//     },

//     waitForElements(selector, maxAttempts = 10, interval = 500) {
//       return new Promise((resolve, reject) => {
//         let attempts = 0;
//         const check = function () {
//           const elements = document.querySelectorAll(selector);
//           if (elements.length > 0) {
//             resolve(elements);
//           } else if (attempts < maxAttempts) {
//             attempts++;
//             setTimeout(check, interval);
//           } else {
//             reject(`Elements not found: ${selector}`);
//           }
//         };
//         check();
//       });
//     },

//     fireOptimizelyEvent(eventName, tags) {
//       try {
//         window.optimizely = window.optimizely || [];
//         window.optimizely.push({
//           type: 'event',
//           eventName,
//           tags,
//         });
//         Utils.log('Optimizely event fired:', { eventName, tags });
//       } catch (error) {
//         Utils.logError('Error firing Optimizely event', error);
//       }
//     },

//     getUtagValue(key) {
//       return window.utag && window.utag.data ? window.utag.data[key] : null;
//     },

//     getUtagData() {
//       return window.utag && window.utag.data ? window.utag.data : null;
//     },
//   };

//   // Flow Manager to track user's progression through a series of specified pages
//   const FlowManager = {
//     getFlowStage() {
//       return parseInt(Utils.getCookie('flowStage') || '0', 10);
//     },
//     setFlowStage(stage) {
//       Utils.setCookie('flowStage', stage.toString(), 1);
//     },
//     resetFlow() {
//       Utils.setCookie('flowStage', '0', 1);
//     },
//   };

//   // Eligibility check functions
//   const EligibilityChecks = {
//     checkOriginDestinationEligibility(originCode, destCode) {
//       const eligibleCodes = ['SEA', 'PDX'];
//       const isOriginEligible = eligibleCodes.includes(originCode);
//       const isDestEligible = eligibleCodes.includes(destCode);
//       const result = isOriginEligible || isDestEligible;

//       Utils.setCookie('originDestEligible', result.toString(), 1);
//       Utils.log('Origin/Destination Eligibility Check Result:', result);

//       return result;
//     },
//   };

//   // Configuration object
//   const config = [
//     // Part 1: Deals page check - Setup event listeners on Saver cabin selection
//     {
//       urlPattern: /^https:\/\/www\.alaskaair\.com\/content\/deals\/flights\?lid=/,
//       execute() {
//         // Do not reset flow when on deals page to allow navigating back
//         Utils.log('On Deals page.');

//         Utils.waitForElements(
//           '.FareTiles_PriceBox__cR5wf.FareTiles_RevenueBoxLink__UQ5jO.FareTiles_Saver__Kgmb0',
//           20,
//           500
//         )
//           .then((saverElements) => {
//             Utils.log('Saver cabin elements found:', saverElements);

//             saverElements.forEach((element) => {
//               element.addEventListener('click', () => {
//                 // Set flowStage to 1 when Saver cabin is clicked
//                 FlowManager.setFlowStage(1);
//                 Utils.log('Flow stage set to 1 after clicking Saver cabin on deals page.');

//                 // Find the closest FareTile parent
//                 const fareTile = element.closest('.FareTiles_FareTile__11pJ1');
//                 if (!fareTile) {
//                   Utils.logError('FareTile parent not found for clicked saver element.', null);
//                   return;
//                 }

//                 // Extract origin and destination codes from aria-label
//                 const originDestDiv = fareTile.querySelector('.FareTiles_OriginDestination__QRjk4 [aria-label]');
//                 if (!originDestDiv) {
//                   Utils.logError('Origin/Destination div with aria-label not found.', null);
//                   return;
//                 }

//                 const ariaLabel = originDestDiv.getAttribute('aria-label');
//                 if (!ariaLabel) {
//                   Utils.logError('aria-label attribute not found on origin/destination div.', null);
//                   return;
//                 }

//                 // Example aria-label: "From Seattle (SEA) to Atlanta (ATL). Purchase by October 10, 2024."
//                 const regex = /From .*?\((\w{3})\) to .*?\((\w{3})\)/;
//                 const match = ariaLabel.match(regex);
//                 if (!match || match.length < 3) {
//                   Utils.logError('Could not parse origin and destination codes from aria-label.', ariaLabel);
//                   return;
//                 }

//                 const originCode = match[1];
//                 const destCode = match[2];

//                 Utils.log('Saver cabin clicked. Origin:', originCode, 'Destination:', destCode);

//                 const isEligible = EligibilityChecks.checkOriginDestinationEligibility(originCode, destCode);

//                 if (isEligible) {
//                   // Set eligibility cookie
//                   Utils.setCookie('userEligible', 'true', 1);
//                   Utils.log('User is eligible based on route.');

//                   // Fire Optimizely event
//                   // Utils.fireOptimizelyEvent('saver_cabin_selected_eligible', {
//                   //   origin: originCode,
//                   //   destination: destCode,
//                   // });
//                 } else {
//                   // Set eligibility cookie
//                   Utils.setCookie('userEligible', 'false', 1);
//                   Utils.log('User is not eligible based on route.');
//                 }
//               });
//             });

//             Utils.log('Event listeners attached to all Saver cabin selections.');
//           })
//           .catch((error) => {
//             Utils.logError('Error setting up Saver cabin event listeners:', error);
//           });
//       },
//     },
//     // Part 1.5: Flight options page - Check flow stage
//     {
//       urlPattern: /^https:\/\/www\.alaskaair\.com\/shopping\/flights/,
//       execute() {
//         const flowStage = FlowManager.getFlowStage();
//         Utils.log('On Flight Options page. Current flowStage:', flowStage);

//         if (flowStage >= 1) {
//           // User is in flow, set flowStage to 2
//           FlowManager.setFlowStage(2);
//           Utils.log('Flow stage set to 2 on flight options page.');
//         } else {
//           // User didn't come from expected flow, reset flow
//           FlowManager.resetFlow();
//           Utils.log('Flow stage reset on flight options page due to flowStage:', flowStage);
//         }
//       },
//     },
//     // Part 2: Price display page - Check flow stage
//     {
//       urlPattern: /^https:\/\/www\.alaskaair\.com\/Shopping\/Flights\/PriceDisplay/,
//       execute() {
//         const flowStage = FlowManager.getFlowStage();
//         Utils.log('On Price Display page. Current flowStage:', flowStage);

//         if (flowStage >= 2) {
//           // User is in flow, set flowStage to 3
//           FlowManager.setFlowStage(3);
//           Utils.log('Flow stage set to 3 on price display page.');
//         } else {
//           // User didn't come from expected flow, reset flow
//           FlowManager.resetFlow();
//           Utils.log('Flow stage reset on price display page due to flowStage:', flowStage);
//         }
//       },
//     },
//     // Part 3: Cart Page Check - Ensure all selected cabins are Saver
//     {
//       urlPattern:
//         /^(https:\/\/www\.alaskaair\.com\/Shopping\/Cart\/SubmitCartBypass|https:\/\/www\.alaskaair\.com\/Booking\/SignIn|https:\/\/www\.alaskaair\.com\/Shopping\/Cart\/AddFlight|https:\/\/www\.alaskaair\.com\/Shopping\/Cart)/,
//       execute() {
//         const flowStage = FlowManager.getFlowStage();
//         Utils.log('On Cart page. Current flowStage:', flowStage);

//         if (flowStage >= 3) {
//           // User is in flow, set flowStage to 4
//           FlowManager.setFlowStage(4);
//           Utils.log('Flow stage set to 4 on cart page.');

//           setTimeout(() => {
//             Utils.waitForUtagData(() => {
//               Utils.waitForElements('.cabin-large-bold', 20, 500)
//                 .then((cabinClassElements) => {
//                   Utils.log('Cabin class elements found in cart:', cabinClassElements);

//                   let allSaver = true; // Flag to check if all flights are Saver

//                   cabinClassElements.forEach((cabinElement) => {
//                     const cabinClassText = cabinElement.textContent.trim();
//                     const cabinName = cabinClassText.split('\n')[0].trim();

//                     Utils.log('Cabin name found:', cabinName);

//                     if (cabinName !== 'Saver') {
//                       allSaver = false;
//                     }
//                   });

//                   Utils.setCookie('part2Eligible', allSaver.toString(), 1);
//                   Utils.log('Check Result:', allSaver);

//                   // Fire Optimizely event based on eligibility
//                   const eventName = allSaver ? 'part2Eligible' : 'not_part2Eligible';
//                   // Utils.fireOptimizelyEvent(eventName, {
//                   //   eligible: allSaver,
//                   //   totalFlights: cabinClassElements.length,
//                   // });
//                 })
//                 .catch((error) => {
//                   Utils.logError('Error in checking Saver cabins in cart:', error);
//                 });
//             });
//           }, 1000); // 1 second delay to ensure Utag data is loaded
//         } else {
//           // User didn't come from expected flow, reset flow
//           FlowManager.resetFlow();
//           Utils.log('Flow stage reset on cart page due to flowStage:', flowStage);
//         }
//       },
//     },
//   ];

//   // Main execution function
//   function executeConfig() {
//     try {
//       const currentUrl = window.location.href;
//       let matched = false; // Flag to track if current URL matches any pattern

//       config.forEach((pageConfig) => {
//         if (pageConfig.urlPattern.test(currentUrl)) {
//           matched = true; // Set flag if a match is found
//           Utils.log('Executing configuration for page:', currentUrl);
//           pageConfig.execute();
//         }
//       });

//       if (!matched) {
//         // Current URL does not match any of the expected URL patterns
//         FlowManager.resetFlow();
//         Utils.setCookie('userEligible', '', -1); // Delete the 'userEligible' cookie
//         Utils.setCookie('part2Eligible', '', -1); // Delete the 'part2Eligible' cookie
//         Utils.log('Flow and eligibility cookies reset due to navigation to unexpected page:', currentUrl);
//       }
//     } catch (error) {
//       Utils.logError('Error in executeConfig', error);
//     }
//   }

//   executeConfig();

//   // Listen for URL changes (single-page applications)
//   window.addEventListener('popstate', executeConfig);
//   window.addEventListener('hashchange', executeConfig);
// })();
}, "plugins": [function(PluginManager) {
  var Hogan=function(t){function r(e){if(n[e])return n[e].exports;var i=n[e]={exports:{},id:e,loaded:!1};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}var n={};return r.m=t,r.c=n,r.p="",r(0)}([function(t,r){function n(t){this.r=t,this.buf=""}function e(t,r){var n;if(r&&"object"==typeof r)if(void 0!==r[t])n=r[t];return n}function i(t){return String(null===t||void 0===t?"":t)}function o(t){return t=i(t),p.test(t)?t.replace(u,"&amp;").replace(f,"&lt;").replace(c,"&gt;").replace(l,"&#39;").replace(a,"&quot;"):t}t.exports=n,n.prototype={r:function(t,r,n){return""},v:o,t:i,render:function(t,r,n){return this.ri([t],r||{},n)},ri:function(t,r,n){return this.r(t,r,n)},rs:function(t,r,n){var e=t[t.length-1];if(!s(e))return void n(t,r,this);for(var i=0;i<e.length;i++)t.push(e[i]),n(t,r,this),t.pop()},s:function(t,r,n,e,i,o,u){var f;if(s(t)&&0===t.length)return!1;if(f=!!t,!e&&f&&r)r.push("object"==typeof t?t:r[r.length-1]);return f},d:function(t,r,n,i){var o,u=t.split("."),f=this.f(u[0],r,n,i),c=null;if("."===t&&s(r[r.length-2]))f=r[r.length-1];else for(var l=1;l<u.length;l++)if(o=e(u[l],f),void 0!==o)c=f,f=o;else f="";if(i&&!f)return!1;if(!i&&"function"==typeof f)r.push(c),f=this.mv(f,r,n),r.pop();return f},f:function(t,r,n,i){for(var o=!1,u=null,f=!1,c=r.length-1;c>=0;c--)if(u=r[c],o=e(t,u),void 0!==o){f=!0;break}if(!f)return i?!1:"";if(!i&&"function"==typeof o)o=this.mv(o,r,n);return o},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},mv:function(t,r,n){var e=r[r.length-1],o=t.call(e);if("function"==typeof o)return this.ct(i(o.call(e)),e,n);else return o}};var u=/&/g,f=/</g,c=/>/g,l=/'/g,a=/"/g,p=/[&<>"']/,s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}]);
  PluginManager.registerAnalyticsTracker('18982362608', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['18982362608'];
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
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

var decisionString = window.optimizely.get('state').getDecisionString({
    campaignId: campaignId,
    shouldCleanString: true 
  });
  var redirectInfo = window.optimizely.get('state').getRedirectInfo();
  
  // Public Methods
  var tealiumIntegrator = {
    campaignDecisions: {},

    populateTracker: function(utag_data) {
      try {
        var decisions = this.campaignDecisions;
        for (var allocation in decisions) {
          utag_data[allocation] = this.campaignDecisions[allocation];
        }
      }
      catch (ex) {
        console.warn("Optimizely campaign attribution failed with error: " + ex);
      }
      this.campaignDecisions = {};
    },
    assignCampaigns: function(utag_data) {
      if (!!redirectInfo) utag_data.referrer = redirectInfo.referrer;
      this.populateTracker(utag_data);
    },
  };
  
  if (!window.optimizely.get("custom/tealiumIntegrator")) {
    window.optimizely.push({
      type: "registerModule",
      moduleName: "tealiumIntegrator",
      module: tealiumIntegrator
    });
  }
  
  // Failing Audiences returns `null`, failing Traffic Allocation returns `undefined` for decisionString.
  if (!!decisionString) {
    window.optimizely.get("custom/tealiumIntegrator").campaignDecisions["optimizelyCampaignDecisions"] = decisionString;
  }
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
PluginManager.registerAnalyticsTracker('19046782223', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['19046782223'];
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
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */
var esIntString = window.optimizely.get('state').getDecisionString({
  campaignId: campaignId,
  shouldCleanString: true
});

if(!!esIntString){

  (function(es){
    setTimeout(function ulink(){
      if(typeof window.utag != "undefined"){
        window.utag.link({"optimizelyCampaignDecisions" : es});
      }else{
          setTimeout(ulink,100);
      }
    }, 100);
  })(esIntString);
}
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    

PluginManager.registerWidget({
      widgetId: '4891865160351744',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "4891865160351744";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"target_card_index","default_value":"1"},{"name":"apply_redesign","default_value":"true"},{"name":"cta_text","default_value":""},{"name":"cta_url_seonavdirect","default_value":""},{"name":"cta_url_paidsearch","default_value":""},{"name":"cta_type","default_value":"apply"},{"name":"secondary_cta_text","default_value":""},{"name":"secondary_cta_url","default_value":""},{"name":"secondary_cta_type","default_value":"apply"},{"name":"cta_intro_heading","default_value":""},{"name":"cta_intro_text","default_value":""},{"name":"column_label_text","default_value":""},{"name":"column_label_font_weight","default_value":"lighter"},{"name":"column_header_text","default_value":""},{"name":"column_header_background","default_value":""},{"name":"column_header_color","default_value":""},{"name":"card_image","default_value":""},{"name":"header_pre_text","default_value":""},{"name":"header_main_text","default_value":""},{"name":"header_sub_text","default_value":""},{"name":"header_fine_text","default_value":""},{"name":"perks_heading_text","default_value":""},{"name":"annual_fee_text","default_value":""},{"name":"perks_markup","default_value":""}];
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
widget._styleTag.id = 'widget-css-4891865160351744';
widget._styleTag.innerHTML = '#optly-redesign {}/* ::part() rules — pierce shadow DOM without adoptedStyleSheets */#optly-redesign::part(card-item-container) {  gap: 20px;}#optly-redesign::part(card-cta) {}#optly-redesign::part(column-label) {  align-self: center;  color: var(--ds-basic-color-texticon-default);  font-feature-settings: "liga" off;  font-family: var(--type-Body-Family, "AS Circular");  font-size: var(--Body-Small-Size, 14px);  font-style: normal;  line-height: var(--Body-Small-Line-Height, 20px);}#optly-redesign::part(column-label lighter) {  font-weight: 300;}#optly-redesign::part(column-label normal) {  font-weight: 400;}#optly-redesign::part(column-label bold) {  font-weight: 700;}#optly-redesign::part(card-item-container-inner) {  overflow: hidden;  border-radius: 24px;  border: 1px solid var(--ds-basic-color-border-subtle);  background: var(--ds-basic-color-surface-default);}#optly-redesign::part(column-header) {  display: flex;  margin: 0;  padding: 20px 24px 16px 24px;  flex-direction: column;  justify-content: center;  align-items: center;  text-align: center;  gap: var(--ds-size-400);  align-self: stretch;  background: var(--optly-column-header-bg, #101D2C);  color: var(--optly-column-header-color, var(--ds-basic-color-texticon-inverse));  font-feature-settings: "liga" off;  font-family: var(--type-Accent-Family, "AS Circular");  font-size: var(--Accent-XX-Small-Size, 14px);  font-style: normal;  font-weight: 450;  line-height: 120%;  letter-spacing: 1.4px;  text-transform: uppercase;}#optly-redesign::part(card-image-container) {  aspect-ratio: 790 / 496;  width: 100%;  margin-bottom: 20px;  background-size: cover;  background-position: center;  background-repeat: no-repeat;}#optly-redesign::part(card-item-heading-wrapper) {  padding: 0 24px;}#optly-redesign::part(header-pre-text) {  margin-bottom: 15px;  color: var(--ds-basic-color-texticon-default);  text-align: center;  font-feature-settings: "liga" off;  font-family: var(--type-Body-Family, "AS Circular");  font-size: var(--Body-X-Small-Size, 12px);  font-style: normal;  font-weight: 700;  line-height: var(--Body-X-Small-Line-Height, 16px);  text-transform: uppercase;}#optly-redesign::part(header-main-text) {  color: #101D2C;  text-align: center;  font-feature-settings: "liga" off;  font-family: var(--type-Body-Family, "AS Circular");  font-size: 24px;  font-style: normal;  font-weight: 700;  line-height: var(--Body-Large-Line-Height, 26px);}#optly-redesign::part(header-plus-symbol) {  color: #101D2C;  text-align: center;  font-feature-settings: "liga" off;  font-family: var(--type-Heading-Family, "AS Circular");  font-size: var(--Heading-Small-Size, 24px);  font-style: normal;  font-weight: 300;  line-height: 100%;}#optly-redesign::part(header-sub-text) {  margin-bottom: 15px;  color: #101D2C;  text-align: center;  font-feature-settings: "liga" off;  font-family: var(--type-Body-Family, "AS Circular");  font-size: 16px;  font-style: normal;  font-weight: 450;  line-height: var(--Body-Large-Line-Height, 26px);}#optly-redesign::part(header-disclaimer-text) {  margin-bottom: 20px;  color: #101D2C;  text-align: center;  font-feature-settings: "liga" off;  font-family: var(--type-Body-Family, "AS Circular");  font-size: var(--Body-X-Small-Size, 12px);  font-style: normal;  font-weight: 450;  line-height: var(--Body-X-Small-Line-Height, 16px);}#optly-redesign::part(cta-link) {  color: var(--ds-basic-color-texticon-inverse);  background: var(--ds-basic-color-surface-inverse);}borealis-product-showcase::part(card-perks-list) {  margin: 0 24px;  padding: 0;}borealis-product-showcase::part(perk-item) {  padding-left: 30px;  list-style: none;  background: transparent url(https://cdn.optimizely.com/img/10453949094/be88636ed295407cb3abe540a40a823a.svg) no-repeat left top;  color: var(--ds-basic-color-texticon-default);  font-feature-settings: "liga" off;  font-family: var(--type-Body-Family, "AS Circular");  font-size: 14px;  font-style: normal;  font-weight: 450;  line-height: var(--Body-Default-Line-Height, 24px);}borealis-product-showcase::part(perk-sublist) {  list-style: disc;  padding-left: 20px;}borealis-product-showcase::part(perk-subitem) {}borealis-product-showcase::part(card-perks-list-toggle) {  display: inline-flex;  align-items: center;  gap: 4px;  align-self: flex-start;  margin: 0 24px;  color: var(--ds-basic-color-texticon-default);  font-feature-settings: "liga" off;  font-family: var(--type-Body-Family, "AS Circular");  font-size: var(--Body-Default-Size, 16px);  font-style: normal;  font-weight: 450;  line-height: var(--Body-Default-Line-Height, 24px);  text-decoration-line: underline;  text-decoration-style: solid;  text-decoration-skip-ink: auto;  text-decoration-thickness: auto;  text-underline-offset: auto;  text-underline-position: from-font;}borealis-product-showcase::part(toggle-arrow) {  /* v2: the icon points up; down while collapsed, up once expanded (Figma) */  transform: rotate(180deg);  display: inline-block;  width: 16px;  height: 16px;  background: transparent url(https://cdn.optimizely.com/img/10453949094/b0b67dd5cfbb492fb894dacf6fca680c.svg) no-repeat center center;  background-size: contain;  transition: transform 0.2s ease;}borealis-product-showcase::part(toggle-arrow expanded) {  transform: none;}#optly-redesign::part(card-price-container) {  align-items: flex-start;  margin: 0 24px 24px 24px;}#optly-redesign::part(card-price-text) {  color: var(--ds-basic-color-texticon-default);  font-feature-settings: "liga" off;  font-family: var(--type-Body-Family, "AS Circular");  font-size: 14px;  font-style: normal;  font-weight: 450;  line-height: var(--Body-Default-Line-Height, 24px);}#optly-redesign::part(card-price-label) {  font-weight: 700;}#optly-redesign::part(card-disclaimer-text) {  color: var(--ds-basic-color-texticon-default);  font-feature-settings: "liga" off;  font-family: var(--type-Body-Family, "AS Circular");  font-size: 12px;  font-style: normal;  font-weight: 450;  line-height: normal;}/* v2: CTA group (intro copy, primary + optional secondary CTA) */#optly-redesign::part(card-button-container) {  display: flex;  flex-direction: column;  gap: var(--ds-size-200, 16px);}/* the card wrapper is a flex column with a 24px gap: pull the copy up toward the fine print and down onto the CTAs */#optly-redesign::part(cta-intro) {  margin: -12px 24px -12px 24px;  color: var(--ds-basic-color-texticon-default);  text-align: center;  font-feature-settings: "liga" off;  font-family: var(--type-Body-Family, "AS Circular");}/* bold like the other bold copy here (header, pre-text, Annual fee); AS Circular has no Latin bold face, so check   these on a real iPhone (CLAUDE.md: weights above 450 can draw nothing there) */#optly-redesign::part(cta-intro-heading) {  margin: 0;  font-size: var(--Body-X-Small-Size, 12px);  font-style: normal;  font-weight: 700;  line-height: var(--Body-X-Small-Line-Height, 16px);}#optly-redesign::part(cta-intro-text) {  margin: 0;  font-size: var(--Body-2X-Small-Size, 10px);  font-style: normal;  font-weight: 450;  line-height: var(--Body-2X-Small-Line-Height, 14px);}#optly-redesign::part(cta-link-secondary) {  color: var(--ds-basic-color-texticon-default);  background: var(--ds-basic-color-surface-default);  border-color: var(--ds-basic-color-texticon-default);}/* v2: perks label + divider lines (only when perks_heading_text is set) */#optly-redesign::part(card-perks-heading) {  align-self: stretch;  margin: 0 24px;  text-align: left;  padding-top: 24px;  border-top: 1px solid var(--ds-basic-color-border-divider, #e9e6d9);  color: var(--ds-basic-color-texticon-default);  font-feature-settings: "liga" off;  font-family: var(--type-Body-Family, "AS Circular");  font-size: 14px;  font-style: normal;  font-weight: 700;  line-height: var(--Body-Small-Line-Height, 20px);}#optly-redesign::part(divided) {  padding-top: 24px;  border-top: 1px solid var(--ds-basic-color-border-divider, #e9e6d9);}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        ((window) => {
  // TOOLS AND DEPENDENCIES
  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            setTimeout(check, 100);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            setTimeout(check, 100);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                setTimeout(waitForShadowRoot, 100);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // LOGGING
  // silent unless the page has window.optlyConsole: a clean console copied at document start by the debug
  // userscript, or a recorder the test scripts add (rest-api-scripts/browser.js LOG_TRAP). real visitors have
  // neither, so nothing reaches the page's patched console (Quantum Metric, AppDynamics)
  const EXPERIMENT = `multicard card item v2 / card ${extension.target_card_index}`; // tags this instance's lines
  const pushLog = (level, msg) => {
    const out = window.optlyConsole;
    if (out && typeof out[level] === 'function') out[level](`[${EXPERIMENT}]`, msg);
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // v2 (from v1 "Multicard Landing Page Redesigned Card Item (Product Showcase)", 5281055746293760):
  // - optional second CTA (secondary_cta_*), drawn as an outline button under the first
  // - optional copy above the CTAs (cta_intro_heading / cta_intro_text)
  // - every CTA click pushes atmos_card_multicard_cta_click with card_type + cta_type tags, plus a per-CTA event
  //   atmos_card_multicard_<card>_<cta>_click so each CTA can be its own Optimizely metric
  // - CTAs get an accessible name that includes the card name (several cards share the same button text)
  // - waits up to 30 s for the cards (v1: 10 s, too short on slow phones)
  // - cta_url_paidsearch is optional: semid visitors fall back to cta_url_seonavdirect when it is empty
  // - Show more is announced as a button with aria-expanded (v1: a bare link with no state)
  // - optional perks label with divider lines (perks_heading_text), Show more chevron pointing down while collapsed
  // - per-card header colors (column_header_background / column_header_color); U+2028 in the header text breaks the line

  const cardTypeNames = ['', 'ascent', 'summit', 'business']; // 0, 1, 2, 3
  const cardType = cardTypeNames[extension.target_card_index] || `card${extension.target_card_index}`;

  // single spaces only: the header text uses U+2028 to break the line in the card header (\s matches it)
  const cardName = (extension.column_header_text || '').replace(/\s+/g, ' ').trim();

  const params = new URLSearchParams(window.location.search);
  const primaryUrl = params.has('semid') && extension.cta_url_paidsearch
    ? extension.cta_url_paidsearch
    : extension.cta_url_seonavdirect;

  const hasSecondary = !!(extension.secondary_cta_text && extension.secondary_cta_url);
  const hasIntro = !!(extension.cta_intro_heading || extension.cta_intro_text);

  // resolves with el.shadowRoot once the (cloned) custom element has rendered
  const waitForShadowRoot = (el, timeout = 10000) => new Promise((resolve, reject) => {
    const start = Date.now();
    const check = () => {
      if (el.shadowRoot) return resolve(el.shadowRoot);
      if (Date.now() - start > timeout) return reject(new Error(`Timeout waiting for shadowRoot on ${el.tagName}`));
      setTimeout(check, 50);
    };
    check();
  });

  // auro-hyperlink moves a host aria-label to its inner <a> only when it first renders: a clone (secondary) labelled
  // before insertion gets it that way; the page's already-rendered CTA gets it on its inner link (anchor) directly
  const setLink = (link, text, url, anchor) => {
    const label = cardName ? `${text}, ${cardName}` : text;
    link.textContent = text;
    link.href = url;
    if (anchor) {
      link.removeAttribute('aria-label');
      anchor.setAttribute('aria-label', label);
    } else {
      link.setAttribute('aria-label', label);
    }
  };

  // clicks inside the link's shadow DOM reach the host (composed), so one listener per host covers mouse and keyboard
  const trackClicks = (optly, link, ctaType) => {
    if (link.getAttribute('data-optly-cta')) return;
    link.setAttribute('data-optly-cta', ctaType);
    link.addEventListener('click', () => {
      optly.push({
        type: 'event',
        eventName: 'atmos_card_multicard_cta_click',
        tags: { card_type: cardType, cta_type: ctaType }
      });
      optly.push({
        type: 'event',
        eventName: `atmos_card_multicard_${cardType}_${ctaType}_click`
      });
      log(`${cardType} ${ctaType} click`);
    });
  };

  // EXPERIMENT
  // 30 s, not 10: on a throttled phone the cards render ~11 s after the snippet runs (Lighthouse mobile, 2026-11-06),
  // and a 10 s wait gave up before they existed, leaving the bucketed visitor on the unchanged page
  const WAIT_MS = 30000;
  Promise.all([
    waitForOptimizely(WAIT_MS),
    getShadowElements([
      { selector: 'borealis-product-showcase', hasShadow: true },
      { selector: `.card-item-container:nth-child(${extension.target_card_index})`, hasShadow: false },
      { selector: 'auro-hyperlink-*', hasShadow: true },
      { selector: 'auro-hyperlink-button', hasShadow: true },
      { selector: 'a.auro-button', hasShadow: false },
    ], WAIT_MS),
  ])
  .then(([optly, [showcase, cardItemContainer, auroHyperlink, auroHyperlinkButton, auroButton]]) => {

    // update CTAs (regardless)
    const buttonContainer = auroHyperlink.parentElement;
    setLink(auroHyperlink, extension.cta_text, primaryUrl, auroButton);
    trackClicks(optly, auroHyperlink, extension.cta_type || 'apply');

    let secondary = buttonContainer.querySelector('.optly-secondary-cta');
    if (hasSecondary && !secondary) {
      secondary = auroHyperlink.cloneNode(false);
      secondary.removeAttribute('data-optly-cta');
      secondary.classList.add('optly-secondary-cta');
      secondary.setAttribute('variant', 'secondary');
      auroHyperlink.after(secondary);
    }
    if (secondary) {
      setLink(secondary, extension.secondary_cta_text, extension.secondary_cta_url);
      trackClicks(optly, secondary, extension.secondary_cta_type || 'apply');
    }

    const isIntro = (el) => !!(el && el.classList.contains('cta-intro'));
    if (hasIntro && !isIntro(buttonContainer.previousElementSibling)) {
      buttonContainer.insertAdjacentHTML('beforebegin', `
        <div class="cta-intro" part="cta-intro">
          <p class="cta-intro-heading" part="cta-intro-heading"></p>
          <p class="cta-intro-text" part="cta-intro-text"></p>
        </div>
      `);
    }
    const intro = buttonContainer.previousElementSibling;
    if (isIntro(intro)) {
      intro.querySelector('.cta-intro-heading').textContent = extension.cta_intro_heading || '';
      intro.querySelector('.cta-intro-text').textContent = extension.cta_intro_text || '';
    }

    log(`CTAs set: ${extension.cta_text}${secondary ? ` + ${extension.secondary_cta_text}` : ''}`);

    // update style/interface (optional)
    if (extension.apply_redesign !== 'true') return;
    showcase.id = 'optly-redesign';

    const isDesktopViewport = () => window.matchMedia('(min-width: 963px)').matches;

    const setPerksExpandedState = (container, expanded) => {
      container.querySelectorAll('.card-perks-list > li:not(.always-visible)')
        .forEach(li => li.hidden = !expanded);

      const toggle = container.querySelector('.card-perks-list-toggle');
      if (!toggle) return;

      toggle.firstChild.textContent = expanded ? 'Show less' : 'Show more';
      toggle.setAttribute('data-expanded', String(expanded));
      toggle.setAttribute('aria-expanded', String(expanded));
      toggle.querySelector('.toggle-arrow').part.toggle('expanded', expanded);
    };

    const getAllPerksContainers = () => {
      const root = showcase.shadowRoot || showcase;
      return Array.from(root.querySelectorAll('.card-item-container'))
        .filter(container => container.querySelector('.card-perks-list-toggle'));
    };

    const setStructure = () => {
      // expose existing parts for external CSS via ::part()
      cardItemContainer.setAttribute('part', 'card-item-container');
      buttonContainer.setAttribute('part', 'card-button-container');
      auroHyperlink.setAttribute('part', 'card-cta');
      auroHyperlink.setAttribute('exportparts', 'cta-link');
      auroHyperlinkButton.setAttribute('exportparts', 'link: cta-link');

      // wrap existing card contents in inner div (column-label stays outside)
      const cardInner = document.createElement('div');
      cardInner.className = 'card-item-container-inner';
      cardInner.setAttribute('part', 'card-item-container-inner');

      // move all existing contents into the new inner wrapper
      cardInner.append(...cardItemContainer.childNodes);
      cardItemContainer.appendChild(cardInner);

      // insert new elements and content
      cardItemContainer.insertAdjacentHTML('afterbegin', `
        <div class="column-label" part="column-label"></div>
      `);

      cardInner.insertAdjacentHTML('afterbegin', `
        <h2 class="column-header" part="column-header"></h2>
      `);

      const cardImageContainer = cardInner.querySelector('.card-image-container');
      cardImageContainer.setAttribute('part', 'card-image-container');
      cardImageContainer.querySelector('picture').remove();

      const cardHeadingWrapper = cardInner.querySelector('.card-item-heading-wrapper');
      cardHeadingWrapper.setAttribute('part', 'card-item-heading-wrapper');
      cardHeadingWrapper.innerHTML = `
        <div class="header-pre-text" part="header-pre-text"></div>
        <div class="header-main-text" part="header-main-text"></div>
        <div class="header-plus-symbol" part="header-plus-symbol">+</div>
        <div class="header-sub-text" part="header-sub-text"></div>
        <div class="header-disclaimer-text" part="header-disclaimer-text"></div>
      `;

      // remove unneeded content
      cardInner.querySelector('.card-body-copy').remove();
      cardInner.querySelector('.card-name').remove();

      // insert new perks list
      const priceContainer = cardInner.querySelector('.card-price-container');
      priceContainer.insertAdjacentHTML('beforebegin', `
        <p class="card-perks-heading" part="card-perks-heading" hidden></p>
        <ul class="card-perks-list" part="card-perks-list" id="optly-perks-${extension.target_card_index}"></ul>
        <a class="card-perks-list-toggle" part="card-perks-list-toggle" href="#" role="button" aria-expanded="false" aria-controls="optly-perks-${extension.target_card_index}">Show more<span class="toggle-arrow" part="toggle-arrow" aria-hidden="true"></span></a>
      `);

      // perks list toggle (delegate). it is a link styled as text, so it says it is a button and whether the list is open
      // (aria-expanded): screen readers otherwise heard "link, Show more" with no state (v1)
      cardItemContainer.addEventListener('keydown', (e) => {
        if (e.key !== ' ' || !e.target.closest('.card-perks-list-toggle')) return;
        e.preventDefault();
        e.target.closest('.card-perks-list-toggle').click();
      });
      cardItemContainer.addEventListener('click', (e) => {
        const toggle = e.target.closest('.card-perks-list-toggle');
        if (!toggle) return;
        e.preventDefault();
        const isExpanded = toggle.getAttribute('data-expanded') === 'true';
        const shouldExpand = !isExpanded;

        if (isDesktopViewport()) {
          getAllPerksContainers().forEach(container => {
            setPerksExpandedState(container, shouldExpand);
          });
          return;
        }

        setPerksExpandedState(cardItemContainer, shouldExpand);
      });

      // update pricing elements
      const cardPriceContainer = cardInner.querySelector('.card-price-container');
      cardPriceContainer.setAttribute('part', 'card-price-container');

      const cardPriceText = cardInner.querySelector('.card-price-text');
      cardPriceText.setAttribute('part', 'card-price-text');
      cardPriceText.innerHTML = cardPriceText.textContent.replace(
        /^(Annual fee:)\s*/,
        '<span class="card-price-label" part="card-price-label">$1</span> '
      );

      const cardDisclaimerText = cardInner.querySelector('.card-disclaimer-text');
      cardDisclaimerText.setAttribute('part', 'card-disclaimer-text');
    };

    // the secondary CTA renders its own shadow DOM after insertion; export its link as cta-link-secondary
    const setSecondaryParts = () => {
      if (!secondary) return Promise.resolve();
      secondary.setAttribute('part', 'card-cta card-cta-secondary');
      secondary.setAttribute('exportparts', 'cta-link: cta-link-secondary');
      return waitForShadowRoot(secondary)
        .then((root) => {
          const start = Date.now();
          return new Promise((resolve, reject) => {
            const check = () => {
              const button = root.querySelector('auro-hyperlink-button');
              if (button) {
                button.setAttribute('exportparts', 'link: cta-link');
                return resolve();
              }
              if (Date.now() - start > 10000) return reject(new Error('Timeout waiting for secondary auro-hyperlink-button'));
              setTimeout(check, 50);
            };
            check();
          });
        });
    };

    // header text: U+2028 in the field breaks the line (Figma: "Atmos™ Rewards" / card name); colors per card
    const setHeader = (el) => {
      el.textContent = '';
      (extension.column_header_text || '').split('\u2028').forEach((line, i) => {
        if (i) el.appendChild(document.createElement('br'));
        el.appendChild(document.createTextNode(line.trim()));
      });
      if (extension.column_header_background) el.style.setProperty('--optly-column-header-bg', extension.column_header_background);
      if (extension.column_header_color) el.style.setProperty('--optly-column-header-color', extension.column_header_color);
    };

    const setContent = () => {
      const columnLabel = cardItemContainer.querySelector('.column-label');
      columnLabel.setAttribute('part', `column-label ${extension.column_label_font_weight}`);

      const fieldMap = [
        ['.column-label',           el => el.textContent = extension.column_label_text],
        ['.column-header',          el => setHeader(el)],
        ['.card-image-container',   el => el.style.backgroundImage = `url(${extension.card_image})`],
        ['.header-pre-text',        el => el.textContent = extension.header_pre_text],
        ['.header-main-text',       el => el.innerHTML = extension.header_main_text],
        ['.header-sub-text',        el => el.textContent = extension.header_sub_text],
        ['.header-plus-symbol',     el => el.hidden = !extension.header_sub_text],
        ['.header-disclaimer-text', el => el.innerHTML = extension.header_fine_text],
      ];

      fieldMap.forEach(([selector, apply]) => {
        const el = cardItemContainer.querySelector(selector);
        if (el) apply(el);
      });

      // optional label over the perks; with it, divider lines above the label and above the annual fee (Figma)
      const perksHeading = cardItemContainer.querySelector('.card-perks-heading');
      if (perksHeading) {
        perksHeading.textContent = extension.perks_heading_text || '';
        perksHeading.hidden = !extension.perks_heading_text;
        const price = cardItemContainer.querySelector('.card-price-container');
        if (price) price.setAttribute('part', extension.perks_heading_text ? 'card-price-container divided' : 'card-price-container');
      }

      // optional annual fee override (plain text after the "Annual fee:" label); empty leaves the page's own
      const priceText = cardItemContainer.querySelector('.card-price-text');
      if (priceText && extension.annual_fee_text) {
        const label = document.createElement('span');
        label.className = 'card-price-label';
        label.setAttribute('part', 'card-price-label');
        label.textContent = 'Annual fee:';
        priceText.replaceChildren(label, document.createTextNode(` ${extension.annual_fee_text}`));
      }

      const perksList = cardItemContainer.querySelector('.card-perks-list');
      if (perksList) {
        const doc = new DOMParser().parseFromString(extension.perks_markup, 'text/html');
        const sourceList = doc.querySelector('ul');
        if (sourceList) {
          perksList.innerHTML = sourceList.innerHTML;
          perksList.querySelectorAll(':scope > li').forEach(li => {
            li.setAttribute('part', 'perk-item');
            li.querySelectorAll('ul').forEach(sub => sub.setAttribute('part', 'perk-sublist'));
            li.querySelectorAll('li').forEach(sub => sub.setAttribute('part', 'perk-subitem'));
          });
          perksList.querySelectorAll(':scope > li:not(.always-visible)').forEach(li => {
            li.hidden = true;
          });
        }
      }
    };

    // apply changes
    if (!cardItemContainer.querySelector('.card-item-container-inner')) {
      setStructure();
    }

    setContent();
    log('redesign applied');
    return setSecondaryParts();
  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "4891865160351744";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"target_card_index","default_value":"1"},{"name":"apply_redesign","default_value":"true"},{"name":"cta_text","default_value":""},{"name":"cta_url_seonavdirect","default_value":""},{"name":"cta_url_paidsearch","default_value":""},{"name":"cta_type","default_value":"apply"},{"name":"secondary_cta_text","default_value":""},{"name":"secondary_cta_url","default_value":""},{"name":"secondary_cta_type","default_value":"apply"},{"name":"cta_intro_heading","default_value":""},{"name":"cta_intro_text","default_value":""},{"name":"column_label_text","default_value":""},{"name":"column_label_font_weight","default_value":"lighter"},{"name":"column_header_text","default_value":""},{"name":"column_header_background","default_value":""},{"name":"column_header_color","default_value":""},{"name":"card_image","default_value":""},{"name":"header_pre_text","default_value":""},{"name":"header_main_text","default_value":""},{"name":"header_sub_text","default_value":""},{"name":"header_fine_text","default_value":""},{"name":"perks_heading_text","default_value":""},{"name":"annual_fee_text","default_value":""},{"name":"perks_markup","default_value":""}];
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
        widget._styleTag = document.getElementById('widget-css-4891865160351744');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        
      },
    });

PluginManager.registerWidget({
      widgetId: '5432804899553280',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "5432804899553280";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"headline","default_value":""},{"name":"badge","default_value":""},{"name":"card_image","default_value":""},{"name":"card_image_alt","default_value":""},{"name":"perk_one_icon","default_value":"companion"},{"name":"perk_one_text","default_value":""},{"name":"perk_one_smalltext","default_value":""},{"name":"perk_two_icon","default_value":"companion"},{"name":"perk_two_text","default_value":""},{"name":"perk_two_smalltext","default_value":""},{"name":"cta_url","default_value":""},{"name":"cta_text","default_value":""},{"name":"terms","default_value":""}];
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
widget._styleTag.id = 'widget-css-5432804899553280';
widget._styleTag.innerHTML = '@media screen {  .container.mobile {    height: auto !important;  }  .container.mobile .pullup[aria-expanded="false"] ~ #drawers-content {    flex: 1 1 48px;  }  .container.mobile .pullup[aria-expanded="true"] ~ #drawers-content {    flex: 1 1 auto;  }  .container.mobile .pullup[aria-expanded="true"] ~ #drawers-content::before {    display: none;  }  #atmos-card-offer-wrapper {    margin-top: 24px;    padding: 24px;    border-radius: 6px;    background: #EBFAFD;  }  .container.mobile #atmos-card-offer-wrapper {    padding: 16px;    border-radius: 6px;    background: #EBFAFD;    margin-top: 0;    margin-left: var(--ds-size-200);    margin-right: var(--ds-size-200);    margin-bottom: var(--ds-size-200);  }  #atmos-card-offer-wrapper .offer-highlight {    display: flex;    flex-direction: row;    align-items: flex-start;    justify-content: space-between;    gap: 20px;    margin-bottom: 20px;  }  #atmos-card-offer-wrapper .offer-highlight .headline {    font-family: var(--type-Heading-Family, "AS Circular");    font-size: var(--Heading-2X-Small-Size, 18px);    color: var(--ds-basic-color-surface-inverse-subtle, rgb(40, 117, 181));    line-height: 130%;    font-weight: 700;  }  #atmos-card-offer-wrapper .offer-highlight .badge {    display: inline-block;    margin-top: 5px;    padding: var(--ds-size-50) var(--ds-size-150) var(--ds-size-50) var(--ds-size-100);    border-radius: 12px;    background: var(--ds-basic-color-surface-inverse-subtle, rgb(40, 117, 181));    color: var(--ds-basic-color-texticon-inverse);    font-family: var(--type-Body-Family, "AS Circular");    font-size: var(--Body-X-Small-Size, 12px);    font-style: normal;    font-weight: 450;    line-height: var(--Body-X-Small-Line-Height, 16px);    text-transform: uppercase;  }  #atmos-card-offer-wrapper .card {    flex: 0 0 118px;    height: 74px;  }  #atmos-card-offer-wrapper .card img {    width: 100%;    height: auto;    object-fit: contain;  }  #atmos-card-offer-wrapper .perks {    display: flex;    flex-direction: column;    gap: 8px;    margin-bottom: 8px;  }  #atmos-card-offer-wrapper .perks .perk {    flex: 1 1 50%;    display: flex;    flex-direction: row;    align-items: flex-start;    gap: 8px;    margin-bottom: 8px;  }  #atmos-card-offer-wrapper .perks .perk .icon {    flex: 0 0 24px;    height: 24px;    background-size: contain;    background-position: 50% 50%;    background-repeat: no-repeat;  }  #atmos-card-offer-wrapper .perks .perk .icon.bag {    background-image: url("https://cdn.optimizely.com/img/10453949094/da053098917344d4bdc0928483df47ed.svg");  }  #atmos-card-offer-wrapper .perks .perk .icon.companion {    background-image: url("https://cdn.optimizely.com/img/10453949094/ebecb15c9b39467ebf6592731499f714.svg");  }  #atmos-card-offer-wrapper .perks .perk .icon.minicard {    background-image: url("https://cdn.optimizely.com/img/10453949094/47858e592c67449a997a9371d4d80d0f.svg");  }  #atmos-card-offer-wrapper .perks .perk .detail {    line-height: 1.4;  }  #atmos-card-offer-wrapper .perks .perk .detail :first-child {    color: var(--ds-basic-color-texticon-accent1);    font-size: .9rem;  }  #atmos-card-offer-wrapper .perks .perk .detail :last-child {    color: var(--ds-basic-color-texticon-muted);    font-size: .75rem;  }  #atmos-card-offer-wrapper a.cta {    display: flex;    align-items: center;    justify-content: center;    margin-top: 12px;    padding: 12px;    border: 1px solid #01426A;    border-radius: 6px;    font-size: 1rem;    color: #01426A;    background: #fff;  }  #atmos-card-offer-wrapper .terms {    margin-top: 12px;    font-size: .65rem;    color: #676767;    line-height: 1.4;  }  #atmos-card-offer-wrapper .desktop-only {    display: none;  }}@media screen and (min-width: 1024px) {  #atmos-card-offer-wrapper .desktop-only {    display: block;  }}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        ((window) => {
  // original/unpatched functions (locally ignore vendor monkeypatches and polyfills)
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.documentElement.appendChild(iframe);
  const Promise = iframe.contentWindow.Promise;
  const console = iframe.contentWindow.console;

  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {
      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // element finder
  const waitForElementToExist = (selector, timeoutDuration = 10000) => {
    return new Promise((resolve, reject) => {
      const element = document.querySelector(selector);

      if (element) {
        log(selector + ' found (via query selector)');
        resolve(element);
        return;
      }

      const observer = new MutationObserver(mutations => {
        const targetElement = document.querySelector(selector);
        if (targetElement) {
          observer.disconnect();
          clearTimeout(timeoutHandle);
          log(selector + ' found (via observation)');
          resolve(targetElement);
        }
      });
      observer.observe(document, { childList: true, subtree: true });

      const timeoutHandle = setTimeout(() => {
        observer.disconnect();
        reject(new Error('Timeout waiting for element: ' + selector));
      }, timeoutDuration);
    });
  };

  const waitForStableElement = (selector, stableTime = 3000) => {
    return new Promise((resolve) => {
      const element = document.querySelector(selector);
      let timeoutId;

      const observer = new MutationObserver(() => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          observer.disconnect();
          resolve(element);
        }, stableTime);
      });

      observer.observe(element, {
        attributes: true,
        attributeFilter: ['href'],
        childList: true,
        subtree: true
      });

      // Kick off the initial timeout
      timeoutId = setTimeout(() => {
        observer.disconnect();
        resolve(element);
      }, stableTime);
    });
  };

  // quiet logs
  const log = (msg) => {
    if (localStorage.getItem('view_quiet_logs') === 'true') {
      console.log(msg);
    }
  };

  const logerr = (msg) => {
    if (localStorage.getItem('view_quiet_logs') === 'true') {
      console.error(msg);
    }
  };

  const DESKTOP_BREAKPOINT = 1024;
  const isDesktop = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`).matches;
  const insertionSelector = isDesktop ? '.page-container .price-container .totals-container' : '.container.mobile .footer';

  // EXPERIMENT
  Promise.all([
    waitForOptimizely(10000),
    waitForElementToExist('body', 10000),
    waitForElementToExist(insertionSelector, 10000),
  ])
  .then(() => waitForStableElement(insertionSelector, 1000))
  .then((insertionElement) => {

    // guard against duplicate injection if old markup is somehow still present
    if (document.querySelector('#atmos-card-offer-wrapper')) return;

    // new offer
    const newOfferMarkup = '' +
      '<div id="atmos-card-offer-wrapper">' +
        '<div id="atmos-card-offer-wrapper-inner">' +

          '<div id="offer-content">' +

            '<div class="offer-highlight">' +
              '<div class="offer">' +
                '<h2 id="atmos-offer-headline" class="headline">' + extension.headline + '</h2>' +
                '<div id="atmos-offer-badge" class="badge">' + extension.badge + '</div>' +
              '</div>' +

              '<div class="card"><img src="' + extension.card_image + '" alt="' + extension.card_image_alt + '" tabindex="0" /></div>' +
            '</div>' +

            '<div id="atmos-offer-perks" class="perks desktop-only" role="region" tabindex="0" aria-labelledby="atmos-offer-headline atmos-offer-badge" aria-describedby="atmos-offer-terms">' +

              '<div class="perk">' +
                '<div class="icon ' + extension.perk_one_icon + '"></div>' +
                '<div class="detail">' +
                  '<div>' + extension.perk_one_text + '</div>' +
                  '<div>' + extension.perk_one_smalltext + '</div>' +
                '</div>' +
              '</div>' +

              '<div class="perk">' +
                '<div class="icon ' + extension.perk_two_icon + '"></div>' +
                '<div class="detail">' +
                  '<div>' + extension.perk_two_text + '</div>' +
                  '<div>' + extension.perk_two_smalltext + '</div>' +
                '</div>' +
              '</div>' +

            '</div>' +

            '<a href="' + extension.cta_url + '" class="cta" target="_blank">' + extension.cta_text + '</a>' +

            '<div id="atmos-offer-terms" class="terms">' + extension.terms + '</div>' +
          '</div>' +

        '</div>' +
      '</div>';

    // set new HTML
    insertionElement.insertAdjacentHTML('afterend', newOfferMarkup);

    // custom events
    window.optimizely.push({
      type: 'event',
      eventName: 'atmos_visa_cart_offer_rendered',
    });

    const bofaUpsellAnchor = document.querySelector('#atmos-card-offer-wrapper .cta');
    bofaUpsellAnchor.addEventListener('click', (e) => {
      window.optimizely.push({
        type: 'event',
        eventName: 'atmos_visa_cart_offer_apply_button_click',
      });
    });

    // deactivate page on navigating away from cart, since the SPA doesn't unload
    (function watchForCartExit(onLeave) {
      const isCartPage = () => location.pathname === '/search/cart';
      let wasOnCart = isCartPage();

      const check = () => {
        const nowOnCart = isCartPage();
        if (wasOnCart && !nowOnCart) {
          onLeave();
        }
        wasOnCart = nowOnCart;
      };

      setInterval(check, 200);
    })(() => {
      window['optimizely'].push({ type: 'page', pageName: '10453949094_url_targeting_atmos_card_shopping_cart_offer', isActive: false });
    });

  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "5432804899553280";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"headline","default_value":""},{"name":"badge","default_value":""},{"name":"card_image","default_value":""},{"name":"card_image_alt","default_value":""},{"name":"perk_one_icon","default_value":"companion"},{"name":"perk_one_text","default_value":""},{"name":"perk_one_smalltext","default_value":""},{"name":"perk_two_icon","default_value":"companion"},{"name":"perk_two_text","default_value":""},{"name":"perk_two_smalltext","default_value":""},{"name":"cta_url","default_value":""},{"name":"cta_text","default_value":""},{"name":"terms","default_value":""}];
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
        widget._styleTag = document.getElementById('widget-css-5432804899553280');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        
      },
    });

PluginManager.registerWidget({
      widgetId: '5670436967546880',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "5670436967546880";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"mode","default_value":"replace"},{"name":"headline_text","default_value":"Headline"},{"name":"body_text","default_value":"Body copy"},{"name":"background_image","default_value":""},{"name":"background_image_title","default_value":""},{"name":"cta_url","default_value":""},{"name":"cta_title","default_value":""},{"name":"cta_new_window","default_value":"no"},{"name":"custom_event_name","default_value":"booking_widget_borealis_card_concise_cta_click"}];
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
        
        // Borealis Card Concise Replacement (Booking Widget) v3: apply_js of the optimizely extension (fields: see the
// test payload below). replaces the content of the homepage booking widget's merchandising card
// (borealis-slotted-booking-widget [slot="merchandising-one"] borealis-card-concise), or only tracks its clicks
//
// v3 vs v2: targets borealis-slotted-booking-widget (v2 looked for borealis-expanded-booking-widget, which the
// homepage no longer renders as of 2026-11-02), no hidden-iframe Promise/console (doubled mobile CLS), opt-in
// optlyConsole logging, `mode` field ("track" leaves the card as it is and only attaches click tracking, for
// control groups), one click rule in both modes (any link in the card whose click the card doesn't cancel),
// re-applies content that arrived before the override, waits for the card's custom element to be defined (v2 failed
// when the snippet found the card first), clears the replaced entry's leftovers (subheadline, fine print, second
// link), `cta_new_window` field, click event tag `cta_url` (the clicked link's absolute URL), closed-card headline
// pinned on the card's cardPreviewData instead of its layout elements (v2's layout patch was lost on re-render, so a
// touch-capable laptop showed the original headline again after its first mouse click)
((window) => {
  // TOOLS AND DEPENDENCIES
  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // element checker (light DOM)
  const waitForElement = (selector, timeout = 10000, interval = 100) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();

      const check = () => {
        const el = document.querySelector(selector);
        if (el) return resolve(el);
        if (Date.now() - startTime > timeout) {
          return reject(new Error(`Timeout waiting for ${selector}`));
        }
        setTimeout(check, interval);
      };

      check();
    });
  };

  // LOGGING
  // silent unless the page has window.optlyConsole: a clean console copied at document start by the debug
  // userscript, or a recorder the test scripts add (rest-api-scripts/browser.js LOG_TRAP). real visitors have
  // neither, so nothing reaches the page's patched console (shopping app, Quantum Metric, AppDynamics)
  const EXPERIMENT = 'borealis-booking-widget-concise-card-replacement v3'; // tags this extension's lines
  const pushLog = (level, msg) => {
    const out = window.optlyConsole;
    if (out && typeof out[level] === 'function') out[level](`[${EXPERIMENT}]`, msg);
  };
  const log = (msg) => pushLog('log', msg);
  const logerr = (msg) => pushLog('error', msg);

  // test experiment payload (optimizely provides `extension` with the fields; uncomment to run as plain code)
  // const extension = {
  //   mode: 'replace',
  //   headline_text: 'Upgrade to Premium Class today',
  //   body_text: 'Starting at $15 one way, experience industry-leading legroom, early boarding, complimentary cocktails, beer, and wine, and an enhanced snack basket on long-haul flights.',
  //   background_image: 'https://cdn.optimizely.com/img/10453949094/<image>.jpg',
  //   background_image_title: 'Premium Class',
  //   cta_url: 'https://www.alaskaair.com/trips?lid=premium-class',
  //   cta_title: 'Upgrade now',
  //   cta_new_window: 'no',
  //   custom_event_name: 'booking_widget_borealis_card_concise_cta_click'
  // };

  const CARD = 'borealis-slotted-booking-widget [slot="merchandising-one"] borealis-card-concise';
  const replace = extension.mode !== 'track';

  // the entry the card renders, with this instance's content swapped in. fields the template doesn't manage but
  // the replaced entry may carry (CC offer vs brand campaign) are emptied so nothing of it shows through
  const withContent = (value) => {
    const v = value || {};
    return Object.assign({}, v, {
      action: Object.assign({}, v.action, {
        link: { href: extension.cta_url, title: extension.cta_title },
        open_new_window: extension.cta_new_window === 'yes',
        link_2: { href: '', title: '' },
        open_new_window2: false,
      }),
      headline: Object.assign({}, v.headline, { large: extension.headline_text, small: extension.headline_text }),
      subheadline: { large: '', small: '' },
      description: Object.assign({}, v.description, { large: extension.body_text, small: extension.body_text }),
      fineprint: Object.assign({}, v.fineprint, { large: '', small: '' }),
      media: Object.assign({}, v.media, {
        primary: Object.assign({}, v.media && v.media.primary, {
          title: extension.background_image_title,
          url: extension.background_image,
        }),
      }),
    });
  };

  // route every future cardData assignment on `el` through `transform`, then re-apply the current value
  // (content that arrived before the override would otherwise stay until the next render)
  const overrideCardData = (el, transform) => {
    const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), 'cardData');
    if (!descriptor || !descriptor.set) throw new Error(`cardData setter not found on ${el.tagName.toLowerCase()}`);
    Object.defineProperty(el, 'cardData', {
      get: descriptor.get.bind(el),
      set: function(value) {
        descriptor.set.call(this, transform(value));
      },
      configurable: true,
    });
    const current = descriptor.get.call(el);
    if (current) el.cardData = current;
  };

  // the closed card's headline comes from cardPreviewData, a plain (non-reactive) field the card builds once from the
  // original entry on first render and binds to a new layout element whenever it re-renders its wrapper (e.g. when a
  // touch-capable laptop switches from tap mode to hover mode on the first mouse click). keep it on our headline
  const pinPreviewHeadline = (el) => {
    const pin = (value) => Object.assign({}, value, {
      headline: Object.assign({}, value && value.headline, { large: extension.headline_text, small: extension.headline_text }),
    });
    let current = pin(el.cardPreviewData);
    Object.defineProperty(el, 'cardPreviewData', {
      get: () => current,
      set: (value) => { current = pin(value); },
      configurable: true,
    });
  };

  // the closed card's "+" button (touchscreens) sits 4px from the headline, which crowds a headline that wraps near it.
  // the button is the card's own element, slotted into the layout, so a stylesheet on the card reaches it without
  // touching the layout component: 12px more = 16px, the design's --ds-size-200 step
  const spaceOpenButton = (el) => {
    const css = '.card-concise-content-preview [slot="headline-button"] { margin-left: var(--ds-size-150, 12px); }';
    const root = el.shadowRoot;
    if (root.adoptedStyleSheets && typeof CSSStyleSheet === 'function' && 'replaceSync' in CSSStyleSheet.prototype) {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(css);
      root.adoptedStyleSheets = root.adoptedStyleSheets.concat([sheet]);
    } else {
      const style = document.createElement('style');
      style.textContent = css;
      root.appendChild(style);
    }
  };

  // EXPERIMENT
  Promise.all([
    // 15 s: on a throttled mobile load (4x CPU, slow 4G) the card rendered at ~7.5 s on 2026-11-02, too close to 10 s
    waitForOptimizely(15000),
    waitForElement(CARD, 15000),
  ])
  .then(([optly, cardConcise]) => {

    // tracking (both modes): a click on any link in the card that the card lets through. on touchscreens the
    // first tap only opens the card's content and is cancelled, so it doesn't count
    cardConcise.addEventListener('click', (e) => {
      if (e.defaultPrevented) return;
      const anchor = e.composedPath().find(
        (el) => el.tagName && el.tagName.toLowerCase() === 'a' && el.href
      );
      if (!anchor) return;
      // cta_url: where the clicked link goes (absolute), so reports can tell the card's content apart
      optly.push({
        type: 'event',
        eventName: extension.custom_event_name,
        tags: { cta_url: anchor.href },
      });
      log(`click tracked: ${anchor.href}`);
    });
    log(`tracking attached (${replace ? 'replace' : 'track'} mode)`);

    if (!replace) return null;

    // the snippet can find the card before its custom element is defined (about 1 load in 5 on 2026-11-02): it has
    // no cardData setter until then, and the upgrade would drop an override set on the bare element
    return Promise.all([
      customElements.whenDefined('borealis-card-concise'),
      customElements.whenDefined('borealis-card-default-layout'),
    ])
    .then(() => {
      overrideCardData(cardConcise, withContent);
      pinPreviewHeadline(cardConcise);
      spaceOpenButton(cardConcise);
      cardConcise.requestUpdate();
      return cardConcise.updateComplete;
    })
    .then(() => {
      log('card content set');
    });

  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "5670436967546880";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"mode","default_value":"replace"},{"name":"headline_text","default_value":"Headline"},{"name":"body_text","default_value":"Body copy"},{"name":"background_image","default_value":""},{"name":"background_image_title","default_value":""},{"name":"cta_url","default_value":""},{"name":"cta_title","default_value":""},{"name":"cta_new_window","default_value":"no"},{"name":"custom_event_name","default_value":"booking_widget_borealis_card_concise_cta_click"}];
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
        
        
      },
    });

PluginManager.registerWidget({
      widgetId: '5689411847847936',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "5689411847847936";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"brand","default_value":"as"},{"name":"background_image_desktop","default_value":"//cdn.optimizely.com/img/10453949094/d00eaa5ee3f64b63a8ff93c9e819aabd.jpg"},{"name":"background_image_mobile","default_value":"//cdn.optimizely.com/img/10453949094/7aaad8acf06341d79d06bfdacaccdf53.jpg"},{"name":"card_image","default_value":"//cdn.optimizely.com/img/10453949094/d7d2611dfb79414cbada89429e17b3fa.png"},{"name":"bonus_string","default_value":"<s>50,000</s> 70,000"},{"name":"subheader_text","default_value":"Bonus Points + Get a free checked bag"},{"name":"description_text","default_value":"Earn 70,000 bonus points and a $99 Companion Fare (plus taxes and fees from $23) after qualifying purchases. Plus, save up to $90 per person roundtrip with a free checked bag and preferred boarding for you and up to six guests on the same reservation when you pay for your flight with your card."},{"name":"fine_print_text","default_value":"Must apply here for this offer. Offers vary elsewhere.<br>Residents of the US and its territories only. See full disclosure for details."},{"name":"badge_text","default_value":"LIMITED-TIME ONLINE OFFER"},{"name":"cta_text","default_value":"Apply Now"},{"name":"cta_url","default_value":"#"}];
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
        
        ((window) => {
  // TOOLS AND DEPENDENCIES
  // original/unpatched functions (ignore vendor monkeypatches and polyfills in this scope)
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.documentElement.appendChild(iframe);
  const Promise = iframe.contentWindow.Promise;
  const console = iframe.contentWindow.console;

  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // shadow element traverser
  const getShadowElements = (path, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const elements = [];
      let isComplete = false;

      const traverse = (index) => {
        if (isComplete) return;

        if (index >= path.length) {
          isComplete = true;
          resolve(elements.map(e => e.el));
          return;
        }

        const { selector, hasShadow } = path[index];
        const prevElement = elements[elements.length - 1];

        const check = () => {
          if (isComplete) return;

          if (Date.now() - startTime > timeout) {
            isComplete = true;
            reject(new Error(`Timeout waiting for ${selector}`));
            return;
          }

          const searchRoot = index === 0
            ? document
            : prevElement.hasShadow
              ? prevElement.el.shadowRoot
              : prevElement.el;

          if (!searchRoot) {
            requestAnimationFrame(check);
            return;
          }

          let nextElement;
          if (selector.includes('*') && !/\[.*\*/.test(selector)) {
            const prefix = selector.replace('*', '');
            nextElement = Array.from(searchRoot.querySelectorAll('*'))
              .find(el => el.tagName.toLowerCase().startsWith(prefix.toLowerCase()));
          } else {
            nextElement = searchRoot.querySelector(selector);
          }

          if (!nextElement) {
            requestAnimationFrame(check);
            return;
          }

          if (hasShadow) {
            const waitForShadowRoot = () => {
              if (isComplete) return;
              if (Date.now() - startTime > timeout) {
                isComplete = true;
                reject(new Error(`Timeout waiting for shadowRoot on ${selector}`));
                return;
              }
              if (nextElement.shadowRoot) {
                elements.push({ el: nextElement, hasShadow });
                traverse(index + 1);
              } else {
                requestAnimationFrame(waitForShadowRoot);
              }
            };
            waitForShadowRoot();
          } else {
            elements.push({ el: nextElement, hasShadow });
            traverse(index + 1);
          }
        };

        check();
      };

      traverse(0);
    });
  };

  // quiet logs
  const log = (msg) => {
    if (localStorage.getItem('view_quiet_logs') === 'true') {
      console.log(msg);
    }
  };

  const logerr = (msg) => {
    if (localStorage.getItem('view_quiet_logs') === 'true') {
      console.error(msg);
    }
  };

  // EXPERIMENT
  Promise.all([
    waitForOptimizely(10000),
    getShadowElements([
      { selector: 'body', hasShadow: false },
      { selector: '#non-cardholders-banner', hasShadow: false },
      { selector: 'borealis-verbose-promo-banner', hasShadow: true },
      { selector: 'auro-header-*', hasShadow: true },
      { selector: 'h2.heading', hasShadow: false },
    ]),

    getShadowElements([
      { selector: 'body', hasShadow: false },
      { selector: '#non-cardholders-banner', hasShadow: false },
      { selector: 'borealis-verbose-promo-banner', hasShadow: true },
      { selector: 'auro-hyperlink-*', hasShadow: true },
      { selector: 'auro-hyperlink-button', hasShadow: true },
      { selector: 'a.auro-button', hasShadow: false },
    ]),
  ])
  .then(([
    optly,
    [body, ncBanner, verboseBanner, header, heading],
    [body2, ncBanner2, verboseBanner2, auroHyperlink, auroHyperlinkButton, link]
  ]) => {



    // set styles
    const newStyles = new CSSStyleSheet();
    newStyles.replaceSync(`
      .headline { color: #fff !important; }

      .image-caption {
        z-index: 1;
        position: absolute;
        right: 24px;
        top: 24px;
        background: rgba(0, 0, 0, .4);
        padding: 4px 8px;
        border-radius: 4px;
        color: white;
        font-size: 12px;
      }

      .image-wrapper {
        min-height: unset;
      }

      .image-wrapper picture {
        display: flex;
        justify-content: center;
      }

      .image-wrapper picture .centered-image {
        max-width: 80%;
        width: auto;
        height: auto;
        aspect-ratio: 459 / 344;
      }

      .container { position: relative; }

      .container .verbose-promo-banner {
        background-image: url(${extension.background_image_desktop});
        background-size: cover;
        background-position-x: 60%;
      }

      .container .verbose-promo-banner:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 24px;
      }

      .container .verbose-promo-banner > .content {
        z-index: 1;
        background: transparent;
      }

      .verbose-promo-banner .content .info .subheader {
        font-size: var(--Heading-Medium-Size, 28px);
        font-weight: 300;
        line-height: 1.2;
      }

      .verbose-promo-banner[data-brand="ha"] .content .info .subheader {
        font-weight: 500;
      }

      .verbose-promo-banner .content .info .description { color: var(--ds-basic-color-texticon-default); }

      .verbose-promo-banner .content .info .badge {
        position: static;
        width: fit-content;
        border-radius: 8px !important;
      }

      .verbose-promo-banner .content .info .bonus { color: var(--ds-basic-color-texticon-default); font-size: var(--Display-Medium-Size, 56px); }
      .verbose-promo-banner .content .info .bonus s { font-size: var(--Display-X-Small-Size, 38px); }
      .verbose-promo-banner .fineprint { color: var(--ds-basic-color-texticon-default); }

      .verbose-promo-banner[data-brand="ha"] .content .info .bonus {
        font-family: "Chronicle Display", serif;
      }

      @media screen and (max-width: 832px) {
        .container .verbose-promo-banner {
          background-image: url(${extension.background_image_mobile});
        }

        .container .verbose-promo-banner > .content {
          position: relative;
          padding-top: 0;
        }
      }
    `);

    verboseBanner.shadowRoot.adoptedStyleSheets = [
      ...verboseBanner.shadowRoot.adoptedStyleSheets,
      newStyles
    ];

    // add brand
    verboseBanner.shadowRoot.querySelector('.verbose-promo-banner').dataset.brand = extension.brand;

    // remove bg images from inner elements
    const bgPicture = verboseBanner.shadowRoot.querySelector('.image-wrapper > figure picture');
    bgPicture.remove();

    // set content
    heading.classList.remove('heading-md');
    heading.classList.add('heading-lg');

    header.innerHTML = `<span class="bonus">${extension.bonus_string}</span>`;

    header.insertAdjacentHTML('afterend', '<div class="subheader">' + extension.subheader_text + '</div>');

    const description = header.nextElementSibling.nextElementSibling;
    description.innerHTML = extension.description_text;

    auroHyperlink.href = extension.cta_url;
    link.href = extension.cta_url;
    auroHyperlinkButton.buttonhref = extension.cta_url;

    auroHyperlink.textContent = extension.cta_text;

    const finePrint = auroHyperlink.nextElementSibling;
    finePrint.innerHTML = extension.fine_print_text;

    // foreground image
    const pictureSource = verboseBanner.shadowRoot.querySelector('.image-wrapper > picture source');
    pictureSource.remove();

    const pictureImage = verboseBanner.shadowRoot.querySelector('.image-wrapper > picture img');
    pictureImage.src = extension.card_image;

    // move badge
    const badge = verboseBanner.shadowRoot.querySelector('.badge');
    badge.textContent = extension.badge_text;
    const badgeHTML = badge.outerHTML;
    badge.remove();

    const contentInfo = verboseBanner.shadowRoot.querySelector('.verbose-promo-banner .content .info');
    contentInfo.insertAdjacentHTML('afterbegin', badgeHTML);

    // tracking event
    link.addEventListener('click', (e) => {
      window.optimizely.push({
        type: 'event',
        eventName: 'atmos_visa_apply_button_custom',
      });
    }, {
      once: true,
    });

  })
  .catch((error) => {
    logerr(error);
  });
})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "5689411847847936";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"brand","default_value":"as"},{"name":"background_image_desktop","default_value":"//cdn.optimizely.com/img/10453949094/d00eaa5ee3f64b63a8ff93c9e819aabd.jpg"},{"name":"background_image_mobile","default_value":"//cdn.optimizely.com/img/10453949094/7aaad8acf06341d79d06bfdacaccdf53.jpg"},{"name":"card_image","default_value":"//cdn.optimizely.com/img/10453949094/d7d2611dfb79414cbada89429e17b3fa.png"},{"name":"bonus_string","default_value":"<s>50,000</s> 70,000"},{"name":"subheader_text","default_value":"Bonus Points + Get a free checked bag"},{"name":"description_text","default_value":"Earn 70,000 bonus points and a $99 Companion Fare (plus taxes and fees from $23) after qualifying purchases. Plus, save up to $90 per person roundtrip with a free checked bag and preferred boarding for you and up to six guests on the same reservation when you pay for your flight with your card."},{"name":"fine_print_text","default_value":"Must apply here for this offer. Offers vary elsewhere.<br>Residents of the US and its territories only. See full disclosure for details."},{"name":"badge_text","default_value":"LIMITED-TIME ONLINE OFFER"},{"name":"cta_text","default_value":"Apply Now"},{"name":"cta_url","default_value":"#"}];
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
        
        
      },
    });

PluginManager.registerWidget({
      widgetId: '5786410731438080',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "5786410731438080";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"brand","default_value":"as"},{"name":"dialog_background_image","default_value":"//cdn.optimizely.com/img/10453949094/f52235b647f34e949670af6de0a40f7d.png"},{"name":"cookie_id","default_value":"0"},{"name":"cookie_max_age","default_value":7776000},{"name":"pre_title_text","default_value":"Pre-Title Text"},{"name":"title_text","default_value":"Title Text"},{"name":"post_title_text","default_value":"Post-title Text"},{"name":"card_image","default_value":"https://cdn.optimizely.com/img/10453949094/d2dede6e09534e4ebd2e3aa1d906e77f.png"},{"name":"card_image_alt_text","default_value":"Atmos Rewards Visa Card"},{"name":"perk_one_icon","default_value":"https://cdn.optimizely.com/img/10453949094/518849c2702d4388b2a736f252d21701.svg"},{"name":"perk_one_text","default_value":"Perk one..."},{"name":"perk_two_icon","default_value":"https://cdn.optimizely.com/img/10453949094/7e9b9a95f47143cfaf05fb9cb3173d36.svg"},{"name":"perk_two_text","default_value":"Perk two..."},{"name":"perk_three_icon","default_value":"https://cdn.optimizely.com/img/10453949094/fdaa4313d38d4a19b52ba3d5fe1e55fc.svg"},{"name":"perk_three_text","default_value":"Perk three..."},{"name":"cta_button_text","default_value":"Apply Now"},{"name":"cta_button_sr_only_text","default_value":"for the Atmos Rewards Card"},{"name":"cta_button_link","default_value":"#"},{"name":"cta_button_fine_print","default_value":"CTA fine print"},{"name":"cancel_button_text","default_value":"No, thanks"},{"name":"bottom_fine_print","default_value":"Online-only. Offer varies elsewhere."}];
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
widget._styleTag.id = 'widget-css-5786410731438080';
widget._styleTag.innerHTML = '#atmos-modal .tout {  margin-bottom: 10px;  padding: 30px 0 15px 0;}#atmos-modal .tout .points-offer {  margin-bottom: 30px;  color: var(--ds-basic-color-texticon-default);  text-align: center;  font-feature-settings: "liga" off;  font-style: normal;  font-weight: 300;  line-height: 130%;}#atmos-modal .tout .points-offer div {  font-size: var(--Heading-Small-Size, 24px);  line-height: 110%;}#atmos-modal .tout .points-offer div.small {  font-size: var(--Heading-Small-Size, 24px);}#atmos-modal .tout .points-offer div.large {  font-size: 44px;  margin-bottom: 5px;}@media screen and (max-width: 576px) {  #atmos-modal .tout .points-offer div.large {    font-size: 36px;  }}#atmos-modal .tout .card-image {  display: block;  width: auto;  height: 120px;  margin: 0 auto;}#atmos-modal ul.perks {  margin: 0 0 30px 0;  padding: 0;}#atmos-modal ul.perks li {  padding-left: 50px;  margin-bottom: 16px;  background-position: left center;  background-repeat: no-repeat;}#atmos-modal auro-hyperlink-button {  display: block;  width: fit-content;  margin: 0 auto 5px auto;}#atmos-modal p {  color: var(--ds-basic-color-texticon-default);  text-align: center;  font-feature-settings: "liga" off;  font-family: var(--type-Body-Family, "AS Circular");  font-size: var(--Body-Large-Size, 18px);  font-style: normal;  font-weight: 450;  line-height: var(--Body-Large-Line-Height, 26px);}#atmos-modal p.minor {  margin-bottom: 0;  color: var(--ds-basic-color-texticon-muted);  font-size: var(--Body-XX-Small-Size, 10px);  line-height: var(--Body-XX-Small-Line-Height, 14px);}#atmos-modal .pre-qual-details {  color: var(--ds-basic-color-texticon-muted);  text-align: center;  font-feature-settings: "liga" off;  font-size: var(--Body-XX-Small-Size, 10px);  font-style: normal;  line-height: var(--Body-XX-Small-Line-Height, 14px);}#atmos-modal[data-brand="ha"] .tout .points-offer {  font-family: var(--type-Display-Family, "Chronicle Display");}#atmos-modal[data-brand="ha"] .tout .points-offer div.small {  font-family: var(--type-Heading-Family, "Slate Pro");}#atmos-modal[data-brand="ha"] p.minor {  font-family: var(--type-Body-Family, "Slate Pro");}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        ((window) => {
  // inject auro asset
  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-dialog@3.1.8/+esm';
  document.head.appendChild(script);

  // optimizely checker
  const waitForOptimizely = (maxWaitTime, interval = 200) => {
    return new Promise((resolve, reject) => {

      const maxAttempts = Math.ceil(maxWaitTime / interval);
      let attempts = 0;

      const checkOptimizelyObjects = () => {
        if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get === 'function') {
          return resolve(window.optimizely);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          return reject(new Error('Timeout waiting for Optimizely to load'));
        }

        setTimeout(checkOptimizelyObjects, interval);
      };

      checkOptimizelyObjects();
    });
  };

  // element finder
  const waitForElementToExist = (selector, timeoutDuration) => {
    return new Promise((resolve, reject) => {
      const rootDocEl = document.documentElement;
      const element = rootDocEl.querySelector(selector);

      if (element) {
        log(selector + ' found (via query selector)');
        resolve(element);
        return;
      }

      const observer = new MutationObserver(mutations => {
        const targetElement = rootDocEl.querySelector(selector);
        if (targetElement) {
          observer.disconnect();
          clearTimeout(timeoutHandle);
          log(selector + ' found (via observation)');
          resolve(targetElement);
        }
      });
      observer.observe(rootDocEl, { childList: true, subtree: true });

      const timeoutHandle = setTimeout(() => {
        observer.disconnect();
        reject(new Error('Timeout waiting for element: ' + selector));
      }, timeoutDuration);
    });
  };

  // quiet logs
  const log = (msg) => {
    if (localStorage.getItem('view_quiet_logs') === 'true') {
      console.log(msg);
    }
  };

  const logerr = (msg) => {
    if (localStorage.getItem('view_quiet_logs') === 'true') {
      console.error(msg);
    }
  };

  // cookie checker
  const cookieExists = (cookieName) => {
    return document.cookie.split('; ').some(cookie => cookie.startsWith(cookieName + '='));
  };

  // EXPERIMENT
  Promise.all([
    waitForOptimizely(10000),
    waitForElementToExist('body', 10000),
    // waitForElementToExist('borealis-expanded-booking-widget', 10000),
    customElements.whenDefined('auro-dialog'),
  ])
  .then(([
    optly,
    body,
    // borealisBookingWidget,
    customElAuroDialog
  ]) => {

    // custom conversion events: guardrails
    // const tabEvents = {
    //   'auro-tab-1': 'booking_widget_tab_flights',
    //   'auro-tab-2': 'booking_widget_tab_cars',
    //   'auro-tab-3': 'booking_widget_tab_hotels',
    //   'auro-tab-4': 'booking_widget_tab_packages',
    //   'auro-tab-5': 'booking_widget_tab_cruises',
    // }

    // document.body.addEventListener('click', (e) => {
    //   const path = e.composedPath();
    //   const matched = path.find(el => tabEvents[el.id]);
    //   if (matched) {
    //     window.optimizely.push({
    //       type: 'event',
    //       eventName: tabEvents[matched.id],
    //     });
    //   }
    // }, true);

    // check if display cookie is already set
    const displayCookieName = `atmos-card-modal-displayed-${extension.cookie_id}`;
    const dismissCookieName = `atmos-card-modal-dismissed-${extension.cookie_id}`;

    if (cookieExists(displayCookieName)) {
      log('display cookie found, skipping modal display');
      return;
    }

    // set cookie
    document.cookie = displayCookieName + '=true; max-age=' + extension.cookie_max_age + '; path=/';

    // insert dialog
    const dialog = document.createElement('auro-dialog');
    dialog.id = 'atmos-modal';
    dialog.dataset.brand = `${extension.brand}`;
    dialog.innerHTML = `
      <div slot="header"></div>
      <div slot="content">
        <div class="tout">
          <div class="points-offer">
            <div class="small">${extension.pre_title_text}</div>
            <div class="large">${extension.title_text}</div>
            <div class="small">${extension.post_title_text}</div>
          </div>
          <img class="card-image" src="${extension.card_image}" alt="${extension.card_image_alt_text}" />
        </div>
        <ul class="perks">
          <li style="background-image: url('${extension.perk_one_icon}');">${extension.perk_one_text}</li>
          <li style="background-image: url('${extension.perk_two_icon}');">${extension.perk_two_text}</li>
          <li style="background-image: url('${extension.perk_three_icon}');">${extension.perk_three_text}</li>
        </ul>
        <auro-hyperlink-button variant="primary" shape="pill" size="md">${extension.cta_button_text} <span class="sr-only">${extension.cta_button_sr_only_text}</span></auro-hyperlink-button>
        <p class="pre-qual-details">${extension.cta_button_fine_print}</p>
        <auro-hyperlink-button variant="ghost" shape="pill" size="md">${extension.cancel_button_text}</auro-hyperlink-button>
        <p class="minor">${extension.bottom_fine_print}</p>
      </div>
    `;
    document.body.prepend(dialog);

    // set shadow styles
    const newStyles = new CSSStyleSheet();
    newStyles.replaceSync(`
      .dialog {
        top: 20px;
        bottom: unset;
        max-width: 480px;
        max-height: unset !important;
        margin: 0 auto;
        padding: 0 32px 32px 32px;
        background: url('${extension.dialog_background_image}');
        background-color: #fff;
        background-size: auto 240px;;
        background-repeat: no-repeat;
        background-position: center top;
      }

      .dialog-header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding-top: 0;
      }
    `);

    dialog.shadowRoot.adoptedStyleSheets = [
      ...dialog.shadowRoot.adoptedStyleSheets,
      newStyles
    ];

    // disconnect modal click-to-close behavior
    dialog.handleOverlayClick = null;

    // trigger modal to display
    dialog.open = true;
    window.optimizely.push({
      type: 'event',
      eventName: 'atmos_visa_modal_displayed',
    });

    // custom conversion events: display, dismiss, click CTA
    const buttonCTA = dialog.querySelector('auro-hyperlink-button[variant="primary"]');
    const buttonNo = dialog.querySelector('auro-hyperlink-button[variant="ghost"]');

    buttonCTA.addEventListener('click', (e) => {
      document.querySelector('#atmos-modal').remove(); // remove manually so that toggle event doesn't trigger
      document.cookie = dismissCookieName + '=true; max-age=' + (60 * 60 * 24 * 90) + '; path=/';
      window.optimizely.push({
        type: 'event',
        eventName: 'atmos_card_modal_apply_now',
      });
      window.open(extension.cta_button_link, '_blank').focus();
    });

    buttonNo.addEventListener('click', (e) => {
      dialog.open = false;
    });

    dialog.addEventListener('toggle', () => {
      if (!dialog.open) {
        document.cookie = dismissCookieName + '=true; max-age=' + (60 * 60 * 24 * 90) + '; path=/';
        window.optimizely.push({
          type: 'event',
          eventName: 'atmos_visa_modal_dismissed',
        });
      }
    });
  })
  .catch((error) => {
    logerr(error);
  });



})(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window);
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "5786410731438080";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"brand","default_value":"as"},{"name":"dialog_background_image","default_value":"//cdn.optimizely.com/img/10453949094/f52235b647f34e949670af6de0a40f7d.png"},{"name":"cookie_id","default_value":"0"},{"name":"cookie_max_age","default_value":7776000},{"name":"pre_title_text","default_value":"Pre-Title Text"},{"name":"title_text","default_value":"Title Text"},{"name":"post_title_text","default_value":"Post-title Text"},{"name":"card_image","default_value":"https://cdn.optimizely.com/img/10453949094/d2dede6e09534e4ebd2e3aa1d906e77f.png"},{"name":"card_image_alt_text","default_value":"Atmos Rewards Visa Card"},{"name":"perk_one_icon","default_value":"https://cdn.optimizely.com/img/10453949094/518849c2702d4388b2a736f252d21701.svg"},{"name":"perk_one_text","default_value":"Perk one..."},{"name":"perk_two_icon","default_value":"https://cdn.optimizely.com/img/10453949094/7e9b9a95f47143cfaf05fb9cb3173d36.svg"},{"name":"perk_two_text","default_value":"Perk two..."},{"name":"perk_three_icon","default_value":"https://cdn.optimizely.com/img/10453949094/fdaa4313d38d4a19b52ba3d5fe1e55fc.svg"},{"name":"perk_three_text","default_value":"Perk three..."},{"name":"cta_button_text","default_value":"Apply Now"},{"name":"cta_button_sr_only_text","default_value":"for the Atmos Rewards Card"},{"name":"cta_button_link","default_value":"#"},{"name":"cta_button_fine_print","default_value":"CTA fine print"},{"name":"cancel_button_text","default_value":"No, thanks"},{"name":"bottom_fine_print","default_value":"Online-only. Offer varies elsewhere."}];
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
        widget._styleTag = document.getElementById('widget-css-5786410731438080');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        
      },
    });
}
], "interestGroups": [], "tagGroups": []},l=__webpack_require__(4860),d="initializeOptimizelyPreview";if(l.initGlobalStore(f),a.populateDirectiveData(),r.clientHasAlreadyInitialized())e.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(r.shouldBailForDesktopApp())e.log("Main / Disabling because of desktop app.");else if(r.conflictInObservingChanges())e.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(r.shouldLoadInnie())u.registerFunction("getProjectId",(function(){return f.projectId})),u.registerFunction("getAccountId",(function(){return f.accountId})),c.addScriptAsync("https://app.optimizely.com/js/innie.js"),e.log("Main / Disabling in favor of the editor client.");else if(r.shouldLoadEmbeddedEditor())e.log("Main / Loading embedded editor"),s.loadEmbeddedEditor("https://app.optimizely.com/dist/visual-editor/main.js");else if(r.shouldLoadPreview()){(r.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:f}),e.log("Main / Disabling in favor of the preview client."),__webpack_require__(9647).setupPreviewGlobal(),__webpack_require__(9647).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:f}),r.isSlave()||(u.registerFunction("getProjectId",(function(){return f.projectId})),c.addScriptSync("https://cdn.optimizely.com/js/preview2/10453949094.js"))}else if(r.shouldBootstrapDataForPreview()){u.registerFunction(d,(function(n){t(),u.unregisterFunction(d)}));var v=r.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:u.getFunction("getProjectId")();p=r.getProjectToken(),g=v,m=r.getPreviewLayerIds(),o="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",p).replace("__PROJECT_ID__",g).replace("__PREVIEW_LAYER_IDS__",m.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0);var h=r.getForceVariationIds();h&&h.length>0&&(o+="&optimizely_x="+h.join(",")),c.addScriptSync(o),__webpack_require__(9647).setupPreviewGlobal(),c.addScriptAsync("/dist/js/preview_ui.js")}else r.shouldBootstrapDataForEditor()?(u.registerFunction(d,(function(n){t(),u.unregisterFunction(d)})),c.addScriptAsync(window.optimizely_editor_data_endpoint)):r.shouldInitialize()&&t();var p,g,m;n.timeEnd("block");var b=n.now();n.setMark("optimizelyFinished",b,b)}}try{main()}catch(t){try{__webpack_require__(673).handleError(t)}catch(t){console.log(t)}}})();