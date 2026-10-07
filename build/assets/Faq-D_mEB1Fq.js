import{_ as N}from"./SitePageHead-CetgRjeS.js";import{_ as K}from"./SiteLayout-B4s7L6AO.js";import{V as A,v as r,I as h,O as u,W as d,x as p,y as l,Z as D,$ as v,D as f,a1 as B,H as k,a2 as H,N as b,Y as E,z as s,A as i,C as T,K as g,M as C,G as w,F as q,s as y}from"./bootstrapTheme-Bla8eRLB.js";import{a as P,R as V,b as L,H as O,g as x,e as j,s as m}from"./index-xLbATEWA.js";import{h as U}from"./chevron-down-DYBQrBYf.js";import{h as W}from"./chevron-up-CzSjsYiF.js";import{s as z}from"./index-CXiZI8cq.js";var M=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        font-size: dt('accordion.header.font.size');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,R={root:"p-accordion p-component"},Y=A.extend({name:"accordion",style:M,classes:R}),G={name:"BaseAccordion",extends:P,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0}},style:Y,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},F={name:"Accordion",extends:G,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(n){this.d_value=n}},methods:{isItemActive:function(n){var t;return this.multiple?(t=this.d_value)===null||t===void 0?void 0:t.includes(n):this.d_value===n},updateValue:function(n){var t=this.isItemActive(n);this.multiple?t?this.d_value=this.d_value.filter(function(o){return o!==n}):this.d_value?this.d_value.push(n):this.d_value=[n]:this.d_value=t?null:n,this.$emit("update:value",this.d_value)}}};function Q(e,n,t,o,c,a){return r(),h("div",d({class:e.cx("root")},e.ptmi("root")),[u(e.$slots,"default")],16)}F.render=Q;var Z={root:"p-accordioncontent",contentWrapper:"p-accordioncontent-wrapper",content:"p-accordioncontent-content"},J=A.extend({name:"accordioncontent",classes:Z}),X={name:"BaseAccordionContent",extends:P,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:J,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},I={name:"AccordionContent",extends:X,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return d(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function ee(e,n,t,o,c,a){return e.asChild?u(e.$slots,"default",{class:b(e.cx("root")),active:a.$pcAccordionPanel.active,a11yAttrs:a.a11yAttrs},void 0,void 0,1):(r(),p(H,d({key:0,name:"p-collapsible"},e.ptm("transition",a.ptParams)),{default:l(function(){return[!a.$pcAccordion.lazy||a.$pcAccordionPanel.active?D((r(),p(v(e.as),d({key:0,class:e.cx("root")},a.attrs),{default:l(function(){return[f("div",d({class:e.cx("contentWrapper")},e.ptm("contentWrapper",a.ptParams)),[f("div",d({class:e.cx("content")},e.ptm("content",a.ptParams)),[u(e.$slots,"default")],16)],16)]}),_:3},16,["class"])),[[B,a.$pcAccordion.lazy?!0:a.$pcAccordionPanel.active]]):k("",!0)]}),_:3},16))}I.render=ee;var ne={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},ae=A.extend({name:"accordionheader",classes:ne}),te={name:"BaseAccordionHeader",extends:P,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:ae,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},S={name:"AccordionHeader",extends:te,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(n);break}},onArrowDownKey:function(n){var t=this.findNextPanel(this.findPanel(n.currentTarget));t?this.changeFocusedPanel(n,t):this.onHomeKey(n),n.preventDefault()},onArrowUpKey:function(n){var t=this.findPrevPanel(this.findPanel(n.currentTarget));t?this.changeFocusedPanel(n,t):this.onEndKey(n),n.preventDefault()},onHomeKey:function(n){var t=this.findFirstPanel();this.changeFocusedPanel(n,t),n.preventDefault()},onEndKey:function(n){var t=this.findLastPanel();this.changeFocusedPanel(n,t),n.preventDefault()},onEnterKey:function(n){this.changeActiveValue(),n.preventDefault()},findPanel:function(n){return n==null?void 0:n.closest('[data-pc-name="accordionpanel"]')},findHeader:function(n){return j(n,'[data-pc-name="accordionheader"]')},findNextPanel:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=t?n:n.nextElementSibling;return o?x(o,"data-p-disabled")?this.findNextPanel(o):this.findHeader(o):null},findPrevPanel:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=t?n:n.previousElementSibling;return o?x(o,"data-p-disabled")?this.findPrevPanel(o):this.findHeader(o):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(n,t){O(this.findHeader(t))}},computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return d(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return L({active:this.$pcAccordionPanel.active})}},components:{ChevronUp:W,ChevronDown:U},directives:{ripple:V}};function oe(e,n,t,o,c,a){var $=E("ripple");return e.asChild?u(e.$slots,"default",{class:b(e.cx("root")),active:a.$pcAccordionPanel.active,a11yAttrs:a.a11yAttrs,onClick:a.onClick},void 0,void 0,1):D((r(),p(v(e.as),d({key:0,"data-p":a.dataP,class:e.cx("root"),onClick:a.onClick},a.attrs),{default:l(function(){return[u(e.$slots,"default",{active:a.$pcAccordionPanel.active}),u(e.$slots,"toggleicon",{active:a.$pcAccordionPanel.active,class:b(e.cx("toggleicon"))},function(){return[a.$pcAccordionPanel.active?(r(),p(v(a.$pcAccordion.$slots.collapseicon?a.$pcAccordion.$slots.collapseicon:a.$pcAccordion.collapseIcon?"span":"ChevronUp"),d({key:0,class:[a.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",a.ptParams)),null,16,["class"])):(r(),p(v(a.$pcAccordion.$slots.expandicon?a.$pcAccordion.$slots.expandicon:a.$pcAccordion.expandIcon?"span":"ChevronDown"),d({key:1,class:[a.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",a.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[$]])}S.render=oe;var re={root:function(n){var t=n.instance,o=n.props;return["p-accordionpanel",{"p-accordionpanel-active":t.active,"p-disabled":o.disabled}]}},ce=A.extend({name:"accordionpanel",classes:re}),ie={name:"BaseAccordionPanel",extends:P,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:ce,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},_={name:"AccordionPanel",extends:ie,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return d(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function de(e,n,t,o,c,a){return e.asChild?u(e.$slots,"default",{class:b(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs},void 0,void 0,1):(r(),p(v(e.as),d({key:0,class:e.cx("root")},a.attrs),{default:l(function(){return[u(e.$slots,"default")]}),_:3},16,["class"]))}_.render=de;const se={class:"site-band site-band-paper"},le={class:"site-band-inner site-narrow"},ue={class:"site-accordion-title"},pe={key:0},he={key:1},fe={class:"site-actions"},we={__name:"Faq",setup(e){const n=[{value:"0",q:"Is drawing free?",a:"Yes. Plots, hang, numbering, gel, print, paperwork, and patch CSV stay free. Planned Extras cover the production end of the job once they are built. There is nothing to buy yet."},{value:"1",q:"Why is drawing free?",parts:[{text:"Because most people drawing a plot are doing it on a Sunday for a show with no budget for CAD. Putting lanterns on a page should not cost you anything. If it helps, tell another LD, or "},{link:{label:"put something in the pint pot",name:"donate"}},{text:"."}]},{value:"2",q:"Do I need an account?",a:"No. Hit Start drawing and open a sheet straight away. Make an account when you want the plot kept on Your plots."},{value:"3",q:"What can I put on the sheet?",a:"Place pipe, truss, and fixtures. Number them, add patch and plug-up as you go, then print the plot and paperwork from the drawing."},{value:"4",q:"So what would I be paying for?",a:"The work past the plot. Labels for soca, snakes, and universes. Rack drawings, looms and loom lists, distros with mains plans. Plug-up reports, MVR for the visualiser. Later, manufacturer symbols and GDTF types. Patch CSV is already built, so it stays on Free. If you are being paid to prep a rig, the rest is the part that saves you an evening."},{value:"5",q:"Are there manufacturer symbols?",a:"Not yet. You draw with generic stamps and name them on the sheet. Manufacturer symbols and GDTF types wait on planned Extras."},{value:"6",q:"How do I print or take paperwork?",a:"File → Print sheet for the white plan. File → Paperwork… makes one PDF with the gel pull, shop order, channel list and the rest."},{value:"7",q:"I already use my own logo on the title block. Do I lose it?",a:"Not if your account is already here once public sign-up has started. The custom logo, plus patch reports, move to Extras when it goes on sale, and every public account made before that day keeps them for free. New free accounts after that will not have them."},{value:"8",q:"Do I lose my plots?",a:"No. They stay with your other plots until you delete them, and PDF of the sheet stays free, so you can always walk away with your work."},{value:"9",q:"Is there a catch?",parts:[{text:"No adverts, no tracker on the sheet, and we do not sell your details. The "},{link:{label:"privacy page",name:"privacy"}},{text:" is short because there is not much to say."}]},{value:"10",q:"When do Extras go on sale?",a:"When the extras are built and worth the money, not before. The price will sit on the pricing page in plain English before anything is charged."},{value:"11",q:"Does it work on a phone?",a:"Phones keep the plot still so you can read Data and Options. Full drawing is for tablets and computers."}];return(t,o)=>(r(),p(K,null,{default:l(()=>[s(i(T),{title:"FAQ"}),s(N,{narrow:"",heading:"FAQ",lead:"Short answers for lighting designers getting a plot on paper."}),f("section",se,[f("div",le,[s(i(z),{class:"site-prose-card"},{content:l(()=>[s(i(F),{class:"site-accordion",value:["0"],multiple:""},{default:l(()=>[(r(),h(g,null,C(n,c=>s(i(_),{key:c.value,value:c.value},{default:l(()=>[s(i(S),null,{default:l(()=>[f("span",ue,w(c.q),1)]),_:2},1024),s(i(I),null,{default:l(()=>[c.a?(r(),h("p",pe,w(c.a),1)):c.parts?(r(),h("p",he,[(r(!0),h(g,null,C(c.parts,(a,$)=>(r(),h(g,{key:$},[a.text?(r(),h(g,{key:0},[q(w(a.text),1)],64)):a.link?(r(),p(i(m),{key:1,label:a.link.label,link:"",onClick:ve=>i(y).visit(t.route(a.link.name))},null,8,["label","onClick"])):k("",!0)],64))),128))])):k("",!0)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}),f("div",fe,[s(i(m),{label:"Start drawing",onClick:o[0]||(o[0]=c=>i(y).visit(t.route("draw")))}),s(i(m),{label:"Pricing",link:"",onClick:o[1]||(o[1]=c=>i(y).visit(t.route("pricing")))}),s(i(m),{label:"About",link:"",onClick:o[2]||(o[2]=c=>i(y).visit(t.route("about")))})])]),_:1})])])]),_:1}))}};export{we as default};
