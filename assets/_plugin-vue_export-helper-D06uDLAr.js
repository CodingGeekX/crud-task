import{af as xt,r as _,o as xe,w as T,c as h,a7 as Ct,g as V,i as _e,n as I,$ as wt,a4 as qt,S as Ze,C as Xe,D as Pe,Z as Ye,_ as St,h as b,y as N,W as ge,q as Ce,ag as Re,k as we,a as kt,ah as _t,a0 as Je,v as Ae,B as Bt,a6 as Be,A as Et,l as te,m as $t,ai as Ft,aj as Pt}from"./index-CuY54Jlx.js";import{Q as He,m as Tt,h as G,v as Rt,n as he,o as et}from"./QBtn-BCZP-88Z.js";import{d as tt,a as ot,u as nt,b as lt,e as it,f as at,g as At,i as Ht,c as Mt,m as Vt,s as Dt,l as Lt}from"./QLayout-CXZVwSl7.js";import{a as ce}from"./axios-upsvKRUO.js";let qe,de=0;const $=new Array(256);for(let e=0;e<256;e++)$[e]=(e+256).toString(16).substring(1);const zt=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const o=new Uint8Array(t);return e.getRandomValues(o),o}}return t=>{const o=[];for(let n=t;n>0;n--)o.push(Math.floor(Math.random()*256));return o}})(),Me=4096;function Ee(){(qe===void 0||de+16>Me)&&(de=0,qe=zt(Me));const e=Array.prototype.slice.call(qe,de,de+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,$[e[0]]+$[e[1]]+$[e[2]]+$[e[3]]+"-"+$[e[4]]+$[e[5]]+"-"+$[e[6]]+$[e[7]]+"-"+$[e[8]]+$[e[9]]+"-"+$[e[10]]+$[e[11]]+$[e[12]]+$[e[13]]+$[e[14]]+$[e[15]]}function Wt(e){return e??null}function Ve(e,t){return e??(t===!0?`f_${Ee()}`:null)}function Ot({getValue:e,required:t=!0}={}){if(xt.value===!0){const o=e!==void 0?_(Wt(e())):_(null);return t===!0&&o.value===null&&xe(()=>{o.value=`f_${Ee()}`}),e!==void 0&&T(e,n=>{o.value=Ve(n,t)}),o}return e!==void 0?h(()=>Ve(e(),t)):_(`f_${Ee()}`)}const De=/^on[A-Z]/;function It(){const{attrs:e,vnode:t}=V(),o={listeners:_({}),attributes:_({})};function n(){const i={},a={};for(const l in e)l!=="class"&&l!=="style"&&De.test(l)===!1&&(i[l]=e[l]);for(const l in t.props)De.test(l)===!0&&(a[l]=t.props[l]);o.attributes.value=i,o.listeners.value=a}return Ct(n),n(),o}function Qt({validate:e,resetValidation:t,requiresQForm:o}){const n=_e(wt,!1);if(n!==!1){const{props:i,proxy:a}=V();Object.assign(a,{validate:e,resetValidation:t}),T(()=>i.disable,l=>{l===!0?(typeof t=="function"&&t(),n.unbindComponent(a)):n.bindComponent(a)}),xe(()=>{i.disable!==!0&&n.bindComponent(a)}),I(()=>{i.disable!==!0&&n.unbindComponent(a)})}else o===!0&&console.error("Parent QForm not found on useFormChild()!")}const Le=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ze=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,We=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,fe=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ve=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,Se={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Le.test(e),hexaColor:e=>ze.test(e),hexOrHexaColor:e=>We.test(e),rgbColor:e=>fe.test(e),rgbaColor:e=>ve.test(e),rgbOrRgbaColor:e=>fe.test(e)||ve.test(e),hexOrRgbColor:e=>Le.test(e)||fe.test(e),hexaOrRgbaColor:e=>ze.test(e)||ve.test(e),anyColor:e=>We.test(e)||fe.test(e)||ve.test(e)},Kt=[!0,!1,"ondemand"],Ut={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Kt.includes(e)}};function jt(e,t){const{props:o,proxy:n}=V(),i=_(!1),a=_(null),l=_(!1);Qt({validate:R,resetValidation:v});let u=0,c;const d=h(()=>o.rules!==void 0&&o.rules!==null&&o.rules.length!==0),f=h(()=>o.disable!==!0&&d.value===!0&&t.value===!1),C=h(()=>o.error===!0||i.value===!0),S=h(()=>typeof o.errorMessage=="string"&&o.errorMessage.length!==0?o.errorMessage:a.value);T(()=>o.modelValue,()=>{l.value=!0,f.value===!0&&o.lazyRules===!1&&F()});function s(){o.lazyRules!=="ondemand"&&f.value===!0&&l.value===!0&&F()}T(()=>o.reactiveRules,P=>{P===!0?c===void 0&&(c=T(()=>o.rules,s,{immediate:!0,deep:!0})):c!==void 0&&(c(),c=void 0)},{immediate:!0}),T(()=>o.lazyRules,s),T(e,P=>{P===!0?l.value=!0:f.value===!0&&o.lazyRules!=="ondemand"&&F()});function v(){u++,t.value=!1,l.value=!1,i.value=!1,a.value=null,F.cancel()}function R(P=o.modelValue){if(o.disable===!0||d.value===!1)return!0;const A=++u,B=t.value!==!0?()=>{l.value=!0}:()=>{},E=(q,y)=>{q===!0&&B(),i.value=q,a.value=y||null,t.value=!1},w=[];for(let q=0;q<o.rules.length;q++){const y=o.rules[q];let x;if(typeof y=="function"?x=y(P,Se):typeof y=="string"&&Se[y]!==void 0&&(x=Se[y](P)),x===!1||typeof x=="string")return E(!0,x),!1;x!==!0&&x!==void 0&&w.push(x)}return w.length===0?(E(!1),!0):(t.value=!0,Promise.all(w).then(q=>{if(q===void 0||Array.isArray(q)===!1||q.length===0)return A===u&&E(!1),!0;const y=q.find(x=>x===!1||typeof x=="string");return A===u&&E(y!==void 0,y),y===void 0},q=>(A===u&&(console.error(q),E(!0)),!1)))}const F=qt(R,0);return I(()=>{c!==void 0&&c(),F.cancel()}),Object.assign(n,{resetValidation:v,validate:R}),Ze(n,"hasError",()=>C.value),{isDirtyModel:l,hasRules:d,hasError:C,errorMessage:S,validate:R,resetValidation:v}}let Z=[],ae=[];function rt(e){ae=ae.filter(t=>t!==e)}function Nt(e){rt(e),ae.push(e)}function Oe(e){rt(e),ae.length===0&&Z.length!==0&&(Z[Z.length-1](),Z=[])}function Te(e){ae.length===0?e():Z.push(e)}function Gt(e){Z=Z.filter(t=>t!==e)}function Zt(e){return e!=null&&(""+e).length!==0}const Xt={...ot,...Ut,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},_o={...Xt,maxlength:[Number,String]},Bo=["update:modelValue","clear","focus","blur"];function Eo({requiredForAttr:e=!0,tagProp:t,changeEvent:o=!1}={}){const{props:n,proxy:i}=V(),a=tt(n,i.$q),l=Ot({required:e,getValue:()=>n.for});return{requiredForAttr:e,changeEvent:o,tag:t===!0?h(()=>n.tag):{value:"label"},isDark:a,editable:h(()=>n.disable!==!0&&n.readonly!==!0),innerLoading:_(!1),focused:_(!1),hasPopupOpen:!1,splitAttrs:It(),targetUid:l,rootRef:_(null),targetRef:_(null),controlRef:_(null)}}function $o(e){const{props:t,emit:o,slots:n,attrs:i,proxy:a}=V(),{$q:l}=a;let u=null;e.hasValue===void 0&&(e.hasValue=h(()=>Zt(t.modelValue))),e.emitValue===void 0&&(e.emitValue=r=>{o("update:modelValue",r)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:H,onFocusout:Q}),Object.assign(e,{clearValue:D,onControlFocusin:H,onControlFocusout:Q,focus:y}),e.computedCounter===void 0&&(e.computedCounter=h(()=>{if(t.counter!==!1){const r=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,g=t.maxlength!==void 0?t.maxlength:t.maxValues;return r+(g!==void 0?" / "+g:"")}}));const{isDirtyModel:c,hasRules:d,hasError:f,errorMessage:C,resetValidation:S}=jt(e.focused,e.innerLoading),s=e.floatingLabel!==void 0?h(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):h(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),v=h(()=>t.bottomSlots===!0||t.hint!==void 0||d.value===!0||t.counter===!0||t.error!==null),R=h(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),F=h(()=>`q-field row no-wrap items-start q-field--${R.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(s.value===!0?" q-field--float":"")+(A.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(f.value===!0?" q-field--error":"")+(f.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&v.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),P=h(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(f.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),A=h(()=>t.labelSlot===!0||t.label!==void 0),B=h(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&f.value!==!0?` text-${t.labelColor}`:"")),E=h(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:s.value,modelValue:t.modelValue,emitValue:e.emitValue})),w=h(()=>{const r={};return e.targetUid.value&&(r.for=e.targetUid.value),t.disable===!0&&(r["aria-disabled"]="true"),r});function q(){const r=document.activeElement;let g=e.targetRef!==void 0&&e.targetRef.value;g&&(r===null||r.id!==e.targetUid.value)&&(g.hasAttribute("tabindex")===!0||(g=g.querySelector("[tabindex]")),g&&g!==r&&g.focus({preventScroll:!0}))}function y(){Te(q)}function x(){Gt(q);const r=document.activeElement;r!==null&&e.rootRef.value.contains(r)&&r.blur()}function H(r){u!==null&&(clearTimeout(u),u=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,o("focus",r))}function Q(r,g){u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,o("blur",r)),g!==void 0&&g())})}function D(r){Xe(r),l.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),o("update:modelValue",null),e.changeEvent===!0&&o("change",null),o("clear",t.modelValue),Pe(()=>{const g=c.value;S(),c.value=g})}function L(r){[13,32].includes(r.keyCode)&&D(r)}function K(){const r=[];return n.prepend!==void 0&&r.push(b("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:N},n.prepend())),r.push(b("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},ee())),f.value===!0&&t.noErrorIcon===!1&&r.push(z("error",[b(He,{name:l.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?r.push(z("inner-loading-append",n.loading!==void 0?n.loading():[b(Tt,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&r.push(z("inner-clearable-append",[b(He,{class:"q-field__focusable-action",name:t.clearIcon||l.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":l.lang.label.clear,onKeyup:L,onClick:D})])),n.append!==void 0&&r.push(b("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:N},n.append())),e.getInnerAppend!==void 0&&r.push(z("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&r.push(e.getControlChild()),r}function ee(){const r=[];return t.prefix!==void 0&&t.prefix!==null&&r.push(b("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&r.push(e.getShadowControl()),e.getControl!==void 0?r.push(e.getControl()):n.rawControl!==void 0?r.push(n.rawControl()):n.control!==void 0&&r.push(b("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},n.control(E.value))),A.value===!0&&r.push(b("div",{class:B.value},G(n.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&r.push(b("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),r.concat(G(n.default))}function le(){let r,g;f.value===!0?C.value!==null?(r=[b("div",{role:"alert"},C.value)],g=`q--slot-error-${C.value}`):(r=G(n.error),g="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(r=[b("div",t.hint)],g=`q--slot-hint-${t.hint}`):(r=G(n.hint),g="q--slot-hint"));const U=t.counter===!0||n.counter!==void 0;if(t.hideBottomSpace===!0&&U===!1&&r===void 0)return;const W=b("div",{key:g,class:"q-field__messages col"},r);return b("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:N},[t.hideBottomSpace===!0?W:b(ge,{name:"q-transition--field-message"},()=>W),U===!0?b("div",{class:"q-field__counter"},n.counter!==void 0?n.counter():e.computedCounter.value):null])}function z(r,g){return g===null?null:b("div",{key:r,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},g)}let M=!1;return Ye(()=>{M=!0}),St(()=>{M===!0&&t.autofocus===!0&&a.focus()}),t.autofocus===!0&&xe(()=>{a.focus()}),I(()=>{u!==null&&clearTimeout(u)}),Object.assign(a,{focus:y,blur:x}),function(){const g=e.getControl===void 0&&n.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...w.value}:w.value;return b(e.tag.value,{ref:e.rootRef,class:[F.value,i.class],style:i.style,...g},[n.before!==void 0?b("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:N},n.before()):null,b("div",{class:"q-field__inner relative-position col self-stretch"},[b("div",{ref:e.controlRef,class:P.value,tabindex:-1,...e.controlEvents},K()),v.value===!0?le():null]),n.after!==void 0?b("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:N},n.after()):null])}}const Fo={name:String};function Po(e){return h(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function To(e={}){return(t,o,n)=>{t[o](b("input",{class:"hidden"+(n||""),...e.value}))}}function Ro(e){return h(()=>e.name||e.for)}const Yt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Jt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,eo=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,to=/[a-z0-9_ -]$/i;function Ao(e){return function(o){if(o.type==="compositionend"||o.type==="change"){if(o.target.qComposing!==!0)return;o.target.qComposing=!1,e(o)}else o.type==="compositionupdate"&&o.target.qComposing!==!0&&typeof o.data=="string"&&(Ce.is.firefox===!0?to.test(o.data)===!1:Yt.test(o.data)===!0||Jt.test(o.data)===!0||eo.test(o.data)===!0)===!0&&(o.target.qComposing=!0)}}function ut(){let e;const t=V();function o(){e=void 0}return Ye(o),I(o),{removeTick:o,registerTick(n){e=n,Pe(()=>{e===n&&(Rt(t)===!1&&e(),e=void 0)})}}}const st={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function ct(e,t=()=>{},o=()=>{}){return{transitionProps:h(()=>{const n=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:h(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let oo=1,no=document.body;function lo(e,t){const o=document.createElement("div");if(o.id=t!==void 0?`q-portal--${t}--${oo++}`:e,Re.globalNodes!==void 0){const n=Re.globalNodes.class;n!==void 0&&(o.className=n)}return no.appendChild(o),o}function io(e){e.remove()}const oe=[];function Ho(e){return oe.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function dt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return he(e)}else if(e.__qPortal===!0){const o=he(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=he(e)}while(e!=null)}function Mo(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=dt(e,t);continue}e.hide(t)}e=he(e)}}const ao=we({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function ro(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function ft(e,t,o,n){const i=_(!1),a=_(!1);let l=null;const u={},c=n==="dialog"&&ro(e);function d(C){if(C===!0){Oe(u),a.value=!0;return}a.value=!1,i.value===!1&&(c===!1&&l===null&&(l=lo(!1,n)),i.value=!0,oe.push(e.proxy),Nt(u))}function f(C){if(a.value=!1,C!==!0)return;Oe(u),i.value=!1;const S=oe.indexOf(e.proxy);S!==-1&&oe.splice(S,1),l!==null&&(io(l),l=null)}return kt(()=>{f(!0)}),e.proxy.__qPortal=!0,Ze(e.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:f,portalIsActive:i,portalIsAccessible:a,renderPortal:()=>c===!0?o():i.value===!0?[b(_t,{to:l},b(ao,o))]:void 0}}const X=[];let ne;function uo(e){ne=e.keyCode===27}function so(){ne===!0&&(ne=!1)}function co(e){ne===!0&&(ne=!1,Je(e,27)===!0&&X[X.length-1](e))}function vt(e){window[e]("keydown",uo),window[e]("blur",so),window[e]("keyup",co),ne=!1}function mt(e){Ce.is.desktop===!0&&(X.push(e),X.length===1&&vt("addEventListener"))}function pe(e){const t=X.indexOf(e);t!==-1&&(X.splice(t,1),X.length===0&&vt("removeEventListener"))}const Y=[];function ht(e){Y[Y.length-1](e)}function gt(e){Ce.is.desktop===!0&&(Y.push(e),Y.length===1&&document.body.addEventListener("focusin",ht))}function $e(e){const t=Y.indexOf(e);t!==-1&&(Y.splice(t,1),Y.length===0&&document.body.removeEventListener("focusin",ht))}let me=0;const fo={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Ie={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},Vo=we({name:"QDialog",inheritAttrs:!1,props:{...nt,...st,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>["standard","top","bottom","left","right"].includes(e)}},emits:[...lt,"shake","click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){const i=V(),a=_(null),l=_(!1),u=_(!1);let c=null,d=null,f,C;const S=h(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:s}=Ht(),{registerTimeout:v}=it(),{registerTick:R,removeTick:F}=ut(),{transitionProps:P,transitionStyle:A}=ct(e,()=>Ie[e.position][0],()=>Ie[e.position][1]),B=h(()=>A.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:E,hidePortal:w,portalIsAccessible:q,renderPortal:y}=ft(i,a,se,"dialog"),{hide:x}=at({showing:l,hideOnRouteChange:S,handleShow:le,handleHide:z,processOnMount:!0}),{addToHistory:H,removeFromHistory:Q}=At(l,x,S),D=h(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${fo[e.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),L=h(()=>l.value===!0&&e.seamless!==!0),K=h(()=>e.autoClose===!0?{onClick:re}:{}),ee=h(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${L.value===!0?"modal":"seamless"}`,n.class]);T(()=>e.maximized,p=>{l.value===!0&&W(p)}),T(L,p=>{s(p),p===!0?(gt(ie),mt(g)):($e(ie),pe(g))});function le(p){H(),d=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,W(e.maximized),E(),u.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),R(M)):F(),v(()=>{if(i.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:k,bottom:O}=document.activeElement.getBoundingClientRect(),{innerHeight:m}=window,j=window.visualViewport!==void 0?window.visualViewport.height:m;k>0&&O>j/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-j,O>=m?1/0:Math.ceil(document.scrollingElement.scrollTop+O-j/2))),document.activeElement.scrollIntoView()}C=!0,a.value.click(),C=!1}E(!0),u.value=!1,o("show",p)},e.transitionDuration)}function z(p){F(),Q(),U(!0),u.value=!0,w(),d!==null&&(((p&&p.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),v(()=>{w(!0),u.value=!1,o("hide",p)},e.transitionDuration)}function M(p){Te(()=>{let k=a.value;if(k!==null){if(p!==void 0){const O=k.querySelector(p);if(O!==null){O.focus({preventScroll:!0});return}}k.contains(document.activeElement)!==!0&&(k=k.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||k.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||k.querySelector("[autofocus], [data-autofocus]")||k,k.focus({preventScroll:!0}))}})}function r(p){p&&typeof p.focus=="function"?p.focus({preventScroll:!0}):M(),o("shake");const k=a.value;k!==null&&(k.classList.remove("q-animate--scale"),k.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,a.value!==null&&(k.classList.remove("q-animate--scale"),M())},170))}function g(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&r():(o("escapeKey"),x()))}function U(p){c!==null&&(clearTimeout(c),c=null),(p===!0||l.value===!0)&&(W(!1),e.seamless!==!0&&(s(!1),$e(ie),pe(g))),p!==!0&&(d=null)}function W(p){p===!0?f!==!0&&(me<1&&document.body.classList.add("q-body--dialog"),me++,f=!0):f===!0&&(me<2&&document.body.classList.remove("q-body--dialog"),me--,f=!1)}function re(p){C!==!0&&(x(p),o("click",p))}function ue(p){e.persistent!==!0&&e.noBackdropDismiss!==!0?x(p):e.noShake!==!0&&r()}function ie(p){e.allowFocusOutside!==!0&&q.value===!0&&et(a.value,p.target)!==!0&&M('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:M,shake:r,__updateRefocusTarget(p){d=p||null}}),I(U);function se(){return b("div",{role:"dialog","aria-modal":L.value===!0?"true":"false",...n,class:ee.value},[b(ge,{name:"q-transition--fade",appear:!0},()=>L.value===!0?b("div",{class:"q-dialog__backdrop fixed-full",style:B.value,"aria-hidden":"true",tabindex:-1,onClick:ue}):null),b(ge,P.value,()=>l.value===!0?b("div",{ref:a,class:D.value,style:A.value,tabindex:-1,...K.value},G(t.default)):null)])}return y}}),vo={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},mo={...vo,contextMenu:Boolean};function ho({showing:e,avoidEmit:t,configureAnchorEl:o}){const{props:n,proxy:i,emit:a}=V(),l=_(null);let u=null;function c(s){return l.value===null?!1:s===void 0||s.touches===void 0||s.touches.length<=1}const d={};o===void 0&&(Object.assign(d,{hide(s){i.hide(s)},toggle(s){i.toggle(s),s.qAnchorHandled=!0},toggleKey(s){Je(s,13)===!0&&d.toggle(s)},contextClick(s){i.hide(s),N(s),Pe(()=>{i.show(s),s.qAnchorHandled=!0})},prevent:N,mobileTouch(s){if(d.mobileCleanup(s),c(s)!==!0)return;i.hide(s),l.value.classList.add("non-selectable");const v=s.target;Ae(d,"anchor",[[v,"touchmove","mobileCleanup","passive"],[v,"touchend","mobileCleanup","passive"],[v,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),u=setTimeout(()=>{u=null,i.show(s),s.qAnchorHandled=!0},300)},mobileCleanup(s){l.value.classList.remove("non-selectable"),u!==null&&(clearTimeout(u),u=null),e.value===!0&&s!==void 0&&Mt()}}),o=function(s=n.contextMenu){if(n.noParentEvent===!0||l.value===null)return;let v;s===!0?i.$q.platform.is.mobile===!0?v=[[l.value,"touchstart","mobileTouch","passive"]]:v=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:v=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],Ae(d,"anchor",v)});function f(){Bt(d,"anchor")}function C(s){for(l.value=s;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;o()}function S(){if(n.target===!1||n.target===""||i.$el.parentNode===null)l.value=null;else if(n.target===!0)C(i.$el.parentNode);else{let s=n.target;if(typeof n.target=="string")try{s=document.querySelector(n.target)}catch{s=void 0}s!=null?(l.value=s.$el||s,o()):(l.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return T(()=>n.contextMenu,s=>{l.value!==null&&(f(),o(s))}),T(()=>n.target,()=>{l.value!==null&&f(),S()}),T(()=>n.noParentEvent,s=>{l.value!==null&&(s===!0?f():o())}),xe(()=>{S(),t!==!0&&n.modelValue===!0&&l.value===null&&a("update:modelValue",!1)}),I(()=>{u!==null&&clearTimeout(u),f()}),{anchorEl:l,canShow:c,anchorEvents:d}}function go(e,t){const o=_(null);let n;function i(u,c){const d=`${c!==void 0?"add":"remove"}EventListener`,f=c!==void 0?c:n;u!==window&&u[d]("scroll",f,Be.passive),window[d]("scroll",f,Be.passive),n=c}function a(){o.value!==null&&(i(o.value),o.value=null)}const l=T(()=>e.noParentEvent,()=>{o.value!==null&&(a(),t())});return I(l),{localScrollTarget:o,unconfigureScrollTarget:a,changeScrollEvent:i}}const{notPassiveCapture:be}=Be,J=[];function ye(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let o=oe.length-1;for(;o>=0;){const n=oe[o].$;if(n.type.name==="QTooltip"){o--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;o--}for(let n=J.length-1;n>=0;n--){const i=J[n];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function po(e){J.push(e),J.length===1&&(document.addEventListener("mousedown",ye,be),document.addEventListener("touchstart",ye,be))}function Qe(e){const t=J.findIndex(o=>o===e);t!==-1&&(J.splice(t,1),J.length===0&&(document.removeEventListener("mousedown",ye,be),document.removeEventListener("touchstart",ye,be)))}let Ke,Ue;function je(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function bo(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Fe={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Fe[`${e}#ltr`]=e,Fe[`${e}#rtl`]=e});function Ne(e,t){const o=e.split(" ");return{vertical:o[0],horizontal:Fe[`${o[1]}#${t===!0?"rtl":"ltr"}`]}}function yo(e,t){let{top:o,left:n,right:i,bottom:a,width:l,height:u}=e.getBoundingClientRect();return t!==void 0&&(o-=t[1],n-=t[0],a+=t[1],i+=t[0],l+=t[0],u+=t[1]),{top:o,bottom:a,height:u,left:n,right:i,width:l,middle:n+(i-n)/2,center:o+(a-o)/2}}function xo(e,t,o){let{top:n,left:i}=e.getBoundingClientRect();return n+=t.top,i+=t.left,o!==void 0&&(n+=o[1],i+=o[0]),{top:n,bottom:n+1,height:1,left:i,right:i+1,width:1,middle:i,center:n}}function Co(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function Ge(e,t,o,n){return{top:e[o.vertical]-t[n.vertical],left:e[o.horizontal]-t[n.horizontal]}}function pt(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{pt(e,t+1)},10);return}const{targetEl:o,offset:n,anchorEl:i,anchorOrigin:a,selfOrigin:l,absoluteOffset:u,fit:c,cover:d,maxHeight:f,maxWidth:C}=e;if(Ce.is.ios===!0&&window.visualViewport!==void 0){const q=document.body.style,{offsetLeft:y,offsetTop:x}=window.visualViewport;y!==Ke&&(q.setProperty("--q-pe-left",y+"px"),Ke=y),x!==Ue&&(q.setProperty("--q-pe-top",x+"px"),Ue=x)}const{scrollLeft:S,scrollTop:s}=o,v=u===void 0?yo(i,d===!0?[0,0]:n):xo(i,u,n);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:C,maxHeight:f,visibility:"visible"});const{offsetWidth:R,offsetHeight:F}=o,{elWidth:P,elHeight:A}=c===!0||d===!0?{elWidth:Math.max(v.width,R),elHeight:d===!0?Math.max(v.height,F):F}:{elWidth:R,elHeight:F};let B={maxWidth:C,maxHeight:f};(c===!0||d===!0)&&(B.minWidth=v.width+"px",d===!0&&(B.minHeight=v.height+"px")),Object.assign(o.style,B);const E=Co(P,A);let w=Ge(v,E,a,l);if(u===void 0||n===void 0)ke(w,v,E,a,l);else{const{top:q,left:y}=w;ke(w,v,E,a,l);let x=!1;if(w.top!==q){x=!0;const H=2*n[1];v.center=v.top-=H,v.bottom-=H+2}if(w.left!==y){x=!0;const H=2*n[0];v.middle=v.left-=H,v.right-=H+2}x===!0&&(w=Ge(v,E,a,l),ke(w,v,E,a,l))}B={top:w.top+"px",left:w.left+"px"},w.maxHeight!==void 0&&(B.maxHeight=w.maxHeight+"px",v.height>w.maxHeight&&(B.minHeight=B.maxHeight)),w.maxWidth!==void 0&&(B.maxWidth=w.maxWidth+"px",v.width>w.maxWidth&&(B.minWidth=B.maxWidth)),Object.assign(o.style,B),o.scrollTop!==s&&(o.scrollTop=s),o.scrollLeft!==S&&(o.scrollLeft=S)}function ke(e,t,o,n,i){const a=o.bottom,l=o.right,u=Vt(),c=window.innerHeight-u,d=document.body.clientWidth;if(e.top<0||e.top+a>c)if(i.vertical==="center")e.top=t[n.vertical]>c/2?Math.max(0,c-a):0,e.maxHeight=Math.min(a,c);else if(t[n.vertical]>c/2){const f=Math.min(c,n.vertical==="center"?t.center:n.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(a,f),e.top=Math.max(0,f-a)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(a,c-e.top);if(e.left<0||e.left+l>d)if(e.maxWidth=Math.min(l,d),i.horizontal==="middle")e.left=t[n.horizontal]>d/2?Math.max(0,d-l):0;else if(t[n.horizontal]>d/2){const f=Math.min(d,n.horizontal==="middle"?t.middle:n.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(l,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(l,d-e.left)}const Do=we({name:"QMenu",inheritAttrs:!1,props:{...mo,...nt,...ot,...st,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:je},self:{type:String,validator:je},offset:{type:Array,validator:bo},scrollTarget:Dt,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...lt,"click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){let i=null,a,l,u;const c=V(),{proxy:d}=c,{$q:f}=d,C=_(null),S=_(!1),s=h(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),v=tt(e,f),{registerTick:R,removeTick:F}=ut(),{registerTimeout:P}=it(),{transitionProps:A,transitionStyle:B}=ct(e),{localScrollTarget:E,changeScrollEvent:w,unconfigureScrollTarget:q}=go(e,ue),{anchorEl:y,canShow:x}=ho({showing:S}),{hide:H}=at({showing:S,canShow:x,handleShow:U,handleHide:W,hideOnRouteChange:s,processOnMount:!0}),{showPortal:Q,hidePortal:D,renderPortal:L}=ft(c,C,O,"menu"),K={anchorEl:y,innerRef:C,onClickOutside(m){if(e.persistent!==!0&&S.value===!0)return H(m),(m.type==="touchstart"||m.target.classList.contains("q-dialog__backdrop"))&&Xe(m),!0}},ee=h(()=>Ne(e.anchor||(e.cover===!0?"center middle":"bottom start"),f.lang.rtl)),le=h(()=>e.cover===!0?ee.value:Ne(e.self||"top start",f.lang.rtl)),z=h(()=>(e.square===!0?" q-menu--square":"")+(v.value===!0?" q-menu--dark q-dark":"")),M=h(()=>e.autoClose===!0?{onClick:ie}:{}),r=h(()=>S.value===!0&&e.persistent!==!0);T(r,m=>{m===!0?(mt(p),po(K)):(pe(p),Qe(K))});function g(){Te(()=>{let m=C.value;m&&m.contains(document.activeElement)!==!0&&(m=m.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||m.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||m.querySelector("[autofocus], [data-autofocus]")||m,m.focus({preventScroll:!0}))})}function U(m){if(i=e.noRefocus===!1?document.activeElement:null,gt(se),Q(),ue(),a=void 0,m!==void 0&&(e.touchPosition||e.contextMenu)){const j=Et(m);if(j.left!==void 0){const{top:bt,left:yt}=y.value.getBoundingClientRect();a={left:j.left-yt,top:j.top-bt}}}l===void 0&&(l=T(()=>f.screen.width+"|"+f.screen.height+"|"+e.self+"|"+e.anchor+"|"+f.lang.rtl,k)),e.noFocus!==!0&&document.activeElement.blur(),R(()=>{k(),e.noFocus!==!0&&g()}),P(()=>{f.platform.is.ios===!0&&(u=e.autoClose,C.value.click()),k(),Q(!0),o("show",m)},e.transitionDuration)}function W(m){F(),D(),re(!0),i!==null&&(m===void 0||m.qClickOutside!==!0)&&(((m&&m.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),P(()=>{D(!0),o("hide",m)},e.transitionDuration)}function re(m){a=void 0,l!==void 0&&(l(),l=void 0),(m===!0||S.value===!0)&&($e(se),q(),Qe(K),pe(p)),m!==!0&&(i=null)}function ue(){(y.value!==null||e.scrollTarget!==void 0)&&(E.value=Lt(y.value,e.scrollTarget),w(E.value,k))}function ie(m){u!==!0?(dt(d,m),o("click",m)):u=!1}function se(m){r.value===!0&&e.noFocus!==!0&&et(C.value,m.target)!==!0&&g()}function p(m){o("escapeKey"),H(m)}function k(){pt({targetEl:C.value,offset:e.offset,anchorEl:y.value,anchorOrigin:ee.value,selfOrigin:le.value,absoluteOffset:a,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function O(){return b(ge,A.value,()=>S.value===!0?b("div",{role:"menu",...n,ref:C,tabindex:-1,class:["q-menu q-position-engine scroll"+z.value,n.class],style:[n.style,B.value],...M.value},G(t.default)):null)}return I(re),Object.assign(d,{focus:g,updatePosition:k}),L}}),Lo=we({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:o}}=V(),n=_e($t,te);if(n===te)return console.error("QPage needs to be a deep child of QLayout"),te;if(_e(Ft,te)===te)return console.error("QPage needs to be child of QPageContainer"),te;const a=h(()=>{const u=(n.header.space===!0?n.header.size:0)+(n.footer.space===!0?n.footer.size:0);if(typeof e.styleFn=="function"){const c=n.isContainer.value===!0?n.containerHeight.value:o.screen.height;return e.styleFn(u,c)}return{minHeight:n.isContainer.value===!0?n.containerHeight.value-u+"px":o.screen.height===0?u!==0?`calc(100vh - ${u}px)`:"100vh":o.screen.height-u+"px"}}),l=h(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>b("main",{class:l.value,style:a.value},G(t.default))}}),zo=Pt("UserStore",{state:()=>({users:[],loading:!1,error:null,currentUser:null}),actions:{async fetchUsers(){this.loading=!0;try{const e=await ce.get("http://crud.42web.io/Backend/api/users");this.users=e.data}catch(e){this.error=e.message}finally{this.loading=!1}},async addUser(e){this.loading=!0;try{const t=await ce.post("http://crud.42web.io/Backend/api/user",e);this.users.push(t.data)}catch(t){this.error=t.message}finally{this.loading=!1}},async updateUser(e,t){this.loading=!0;try{const o=await ce.put(`http://crud.42web.io/Backend/api/user/${e}`,t),n=this.users.findIndex(i=>i.id===e);n!==-1&&(this.users[n]=o.data)}catch(o){this.error=o.message}finally{this.loading=!1}},async deleteUser(e){this.loading=!0;try{await ce.delete(`http://crud.42web.io/Backend/api/user/${e}`),this.users=this.users.filter(t=>t.id!==e)}catch(t){this.error=t.message}finally{this.loading=!1}},setCurrentUser(e){this.currentUser=e}}}),Wo=(e,t)=>{const o=e.__vccOpts||e;for(const[n,i]of t)o[n]=i;return o};export{Vo as Q,Wo as _,Fo as a,Bo as b,Ro as c,Eo as d,$o as e,Zt as f,Te as g,Ao as h,Po as i,To as j,mo as k,ho as l,Do as m,Ho as n,Mo as o,zo as p,Lo as q,_o as u};