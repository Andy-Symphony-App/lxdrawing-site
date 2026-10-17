import{_ as N}from"./SitePageHead-CdGXmNVV.js";import{_ as B}from"./SiteLayout-BC3f0SDm.js";import{V as k,v as r,I as l,O as h,W as c,x as f,y as u,Z as I,$ as v,D as y,a1 as H,H as D,a2 as T,N as A,Y as E,z as s,A as i,C as V,K as g,M as C,G as m,F as Y,s as b}from"./bootstrapTheme-CDZX5pn1.js";import{a as P,R as U,b as W,H as O,g as x,e as j,s as w}from"./index-B9pO6wRM.js";import{h as L}from"./chevron-down-CppiwqfN.js";import{h as z}from"./chevron-up-CCN2epj3.js";import{s as G}from"./index-BhJUyy9z.js";var R=`
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
`,M={root:"p-accordion p-component"},Z=k.extend({name:"accordion",style:R,classes:M}),J={name:"BaseAccordion",extends:P,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0}},style:Z,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},S={name:"Accordion",extends:J,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(a){this.d_value=a}},methods:{isItemActive:function(a){var o;return this.multiple?(o=this.d_value)===null||o===void 0?void 0:o.includes(a):this.d_value===a},updateValue:function(a){var o=this.isItemActive(a);this.multiple?o?this.d_value=this.d_value.filter(function(t){return t!==a}):this.d_value?this.d_value.push(a):this.d_value=[a]:this.d_value=o?null:a,this.$emit("update:value",this.d_value)}}};function Q(e,a,o,t,d,n){return r(),l("div",c({class:e.cx("root")},e.ptmi("root")),[h(e.$slots,"default")],16)}S.render=Q;var X={root:"p-accordioncontent",contentWrapper:"p-accordioncontent-wrapper",content:"p-accordioncontent-content"},ee=k.extend({name:"accordioncontent",classes:X}),ae={name:"BaseAccordionContent",extends:P,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:ee,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},_={name:"AccordionContent",extends:ae,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return c(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function ne(e,a,o,t,d,n){return e.asChild?h(e.$slots,"default",{class:A(e.cx("root")),active:n.$pcAccordionPanel.active,a11yAttrs:n.a11yAttrs},void 0,void 0,1):(r(),f(T,c({key:0,name:"p-collapsible"},e.ptm("transition",n.ptParams)),{default:u(function(){return[!n.$pcAccordion.lazy||n.$pcAccordionPanel.active?I((r(),f(v(e.as),c({key:0,class:e.cx("root")},n.attrs),{default:u(function(){return[y("div",c({class:e.cx("contentWrapper")},e.ptm("contentWrapper",n.ptParams)),[y("div",c({class:e.cx("content")},e.ptm("content",n.ptParams)),[h(e.$slots,"default")],16)],16)]}),_:3},16,["class"])),[[H,n.$pcAccordion.lazy?!0:n.$pcAccordionPanel.active]]):D("",!0)]}),_:3},16))}_.render=ne;var oe={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},te=k.extend({name:"accordionheader",classes:oe}),re={name:"BaseAccordionHeader",extends:P,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:te,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},F={name:"AccordionHeader",extends:re,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(a){switch(a.code){case"ArrowDown":this.onArrowDownKey(a);break;case"ArrowUp":this.onArrowUpKey(a);break;case"Home":this.onHomeKey(a);break;case"End":this.onEndKey(a);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(a);break}},onArrowDownKey:function(a){var o=this.findNextPanel(this.findPanel(a.currentTarget));o?this.changeFocusedPanel(a,o):this.onHomeKey(a),a.preventDefault()},onArrowUpKey:function(a){var o=this.findPrevPanel(this.findPanel(a.currentTarget));o?this.changeFocusedPanel(a,o):this.onEndKey(a),a.preventDefault()},onHomeKey:function(a){var o=this.findFirstPanel();this.changeFocusedPanel(a,o),a.preventDefault()},onEndKey:function(a){var o=this.findLastPanel();this.changeFocusedPanel(a,o),a.preventDefault()},onEnterKey:function(a){this.changeActiveValue(),a.preventDefault()},findPanel:function(a){return a==null?void 0:a.closest('[data-pc-name="accordionpanel"]')},findHeader:function(a){return j(a,'[data-pc-name="accordionheader"]')},findNextPanel:function(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=o?a:a.nextElementSibling;return t?x(t,"data-p-disabled")?this.findNextPanel(t):this.findHeader(t):null},findPrevPanel:function(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=o?a:a.previousElementSibling;return t?x(t,"data-p-disabled")?this.findPrevPanel(t):this.findHeader(t):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(a,o){O(this.findHeader(o))}},computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return c(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return W({active:this.$pcAccordionPanel.active})}},components:{ChevronUp:z,ChevronDown:L},directives:{ripple:U}};function ie(e,a,o,t,d,n){var $=E("ripple");return e.asChild?h(e.$slots,"default",{class:A(e.cx("root")),active:n.$pcAccordionPanel.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick},void 0,void 0,1):I((r(),f(v(e.as),c({key:0,"data-p":n.dataP,class:e.cx("root"),onClick:n.onClick},n.attrs),{default:u(function(){return[h(e.$slots,"default",{active:n.$pcAccordionPanel.active}),h(e.$slots,"toggleicon",{active:n.$pcAccordionPanel.active,class:A(e.cx("toggleicon"))},function(){return[n.$pcAccordionPanel.active?(r(),f(v(n.$pcAccordion.$slots.collapseicon?n.$pcAccordion.$slots.collapseicon:n.$pcAccordion.collapseIcon?"span":"ChevronUp"),c({key:0,class:[n.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",n.ptParams)),null,16,["class"])):(r(),f(v(n.$pcAccordion.$slots.expandicon?n.$pcAccordion.$slots.expandicon:n.$pcAccordion.expandIcon?"span":"ChevronDown"),c({key:1,class:[n.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",n.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[$]])}F.render=ie;var ce={root:function(a){var o=a.instance,t=a.props;return["p-accordionpanel",{"p-accordionpanel-active":o.active,"p-disabled":t.disabled}]}},de=k.extend({name:"accordionpanel",classes:ce}),se={name:"BaseAccordionPanel",extends:P,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:de,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},q={name:"AccordionPanel",extends:se,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return c(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function le(e,a,o,t,d,n){return e.asChild?h(e.$slots,"default",{class:A(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs},void 0,void 0,1):(r(),f(v(e.as),c({key:0,class:e.cx("root")},n.attrs),{default:u(function(){return[h(e.$slots,"default")]}),_:3},16,["class"]))}q.render=le;const ue={class:"site-band site-band-paper"},pe={class:"site-band-inner site-narrow"},he={class:"site-accordion-title"},fe={key:0},ge={key:1},ye=["href"],ve={class:"site-actions"},xe={__name:"Faq",setup(e){const a=[{value:"0",q:"Is drawing free?",paragraphs:["Yes. Drawing, hanging, numbering, gel, printing, paperwork, and patch CSVs are all free. Planned Extras will cover more of the production workflow once they are ready. There is nothing to buy yet.",[{text:"Symphony Draw takes a fair bit of time and effort to build. If you find it useful and would like to help keep it going, "},{link:{label:"you can make a donation",name:"donate"}},{text:". Donations are entirely optional and do not unlock extra features."}]]},{value:"1",q:"Why is drawing free?",paragraphs:["Because the drawing is the bit everyone needs. You should be able to make a plot, finish the paperwork, and come back to an old job without finding it locked behind a subscription.","If Symphony Draw makes money, the plan is for that to come from optional Extras around the drawing, not by making the drawing tools deliberately frustrating."]},{value:"2",q:"Do I need an account?",paragraphs:["Not to try it. You can start drawing straight away. A guest plot stays while you are drawing in this browser, and for about two hours after you stop. If you do not keep it on an account, we delete it after 30 days without a change.","Create an account or sign in if you want to keep what you have drawn and open it again later."]},{value:"3",q:"What can I put on the sheet?",paragraphs:["Fixtures, lighting positions, venue plans, dimensions, notes, and a title block. You can also add your own logo and upload SVG symbols to your User library.","The aim is to give you enough to make a clear, useful lighting plot without turning the page into a flight simulator."]},{value:"4",q:"So what would I be paying for?",paragraphs:["Nothing at the moment.","The planned Extras are for the production work that happens around a plot. They will be optional additions, not a fee for opening, editing, or printing your drawings. We will explain exactly what is included and what it costs before anything goes on sale."]},{value:"5",q:"Are there manufacturer symbols?",paragraphs:["The built-in library uses clear, generic symbols for common fixture types rather than trying to copy a particular manufacturer’s drawings.","You can upload your own SVG symbols and keep them in your User library. If you have made something that might be useful to other people, you can also choose to add it to the Public library."]},{value:"6",q:"How do I print a plot or take the paperwork with me?",paragraphs:["Open File → Paperwork…. From there you can create a PDF of the plot and its paperwork. Patch information can also be exported as a CSV.","It is worth exporting important jobs occasionally so that your only copy is not sitting in an online account."]},{value:"7",q:"I already use my own logo on the title block. Do I lose it?",paragraphs:["No. Your logo is saved inside the plot with the rest of the drawing. It is not put on a separate public URL."]},{value:"8",q:"Who can see my plots?",paragraphs:["Your plots are private to your account. Venue plans, logos, and other material saved inside them are not added to a public gallery.","You can choose to add an uploaded symbol to the Public library. That shares the symbol, not the plot it came from."]},{value:"9",q:"Do I lose my plots if I stop using Symphony Draw?",paragraphs:["Plots saved to your account stay there unless you delete them or delete your account.","A guest plot is not saved to an account. It stays while you are drawing in this browser, and for about two hours after you stop. If you never keep it, we delete it after 30 days without a change. Sign in and keep it if it matters."]},{value:"10",q:"Can I use it for paid work?",paragraphs:["Yes. The free drawing tools can be used for professional, educational, or personal work."]},{value:"11",q:"Does Symphony Draw check that my rig is safe?",paragraphs:["No. It draws what you tell it to draw.","Check the positions, weights, loads, power, addresses, cabling, and paperwork before anything goes in the air or gets plugged in. Symphony Draw is a drawing tool, not an engineering calculation or safety check."]},{value:"12",q:"Is there a catch?",paragraphs:["No adverts, no selling your details, and no deliberately useless free version.","There may eventually be paid Extras, but they will be optional. Donations are welcome too, but you do not get a worse drawing tool if you never donate."]},{value:"13",q:"When do Extras go on sale?",paragraphs:["When they are useful enough to charge for. There is no date yet, and we would rather not announce one and then rush something unfinished out of the door."]},{value:"14",q:"Does it work on a phone?",paragraphs:["Yes, but a phone screen is still a fairly miserable place to draw a lighting plot.","The phone version is for checking a plot while you are on the move and making simple data changes. For drawing and moving things around on the sheet, use a laptop, desktop, or larger tablet."]},{value:"15",q:"Can I delete my account and plots?",paragraphs:["Yes. You can delete your account from your profile. Your saved plots go with it, so export anything you want to keep first."]},{value:"16",q:"Where do I report a bug or ask for a fixture?",paragraphs:[[{text:"Email "},{href:"mailto:support@symphony-app.com",label:"support@symphony-app.com"},{text:". A screenshot and a quick description of what you were doing are usually more helpful than a very polite essay."}]]}];return(o,t)=>(r(),f(B,null,{default:u(()=>[s(i(V),{title:"Frequently asked questions"}),s(N,{narrow:"",heading:"Frequently asked questions",lead:"Short answers for lighting designers getting a plot on paper."}),y("section",ue,[y("div",pe,[s(i(G),{class:"site-prose-card"},{content:u(()=>[s(i(S),{class:"site-accordion",value:["0"],multiple:""},{default:u(()=>[(r(),l(g,null,C(a,d=>s(i(q),{key:d.value,value:d.value},{default:u(()=>[s(i(F),null,{default:u(()=>[y("span",he,m(d.q),1)]),_:2},1024),s(i(_),null,{default:u(()=>[(r(!0),l(g,null,C(d.paragraphs,(n,$)=>(r(),l(g,{key:$},[typeof n=="string"?(r(),l("p",fe,m(n),1)):(r(),l("p",ge,[(r(!0),l(g,null,C(n,(p,K)=>(r(),l(g,{key:K},[p.text?(r(),l(g,{key:0},[Y(m(p.text),1)],64)):p.link?(r(),f(i(w),{key:1,label:p.link.label,link:"",onClick:me=>i(b).visit(o.route(p.link.name))},null,8,["label","onClick"])):p.href?(r(),l("a",{key:2,href:p.href},m(p.label),9,ye)):D("",!0)],64))),128))]))],64))),128))]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}),y("div",ve,[s(i(w),{label:"Start drawing",onClick:t[0]||(t[0]=d=>i(b).visit(o.route("draw")))}),s(i(w),{label:"Pricing",link:"",onClick:t[1]||(t[1]=d=>i(b).visit(o.route("pricing")))}),s(i(w),{label:"About",link:"",onClick:t[2]||(t[2]=d=>i(b).visit(o.route("about")))})])]),_:1})])])]),_:1}))}};export{xe as default};
