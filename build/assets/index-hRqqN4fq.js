import{a as n}from"./index-BFWXeEQt.js";import{V as i,v as o,I as r,W as e,O as a,H as s,D as d}from"./bootstrapTheme-BW9EO42N.js";var l=`
    .p-card {
        display: block;
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
        font-size: dt('card.subtitle.font.size');
        font-weight: dt('card.subtitle.font.weight');
    }
`,c={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},p=i.extend({name:"card",style:l,classes:c}),u={name:"BaseCard",extends:n,style:p,provide:function(){return{$pcCard:this,$parentInstance:this}}},f={name:"Card",extends:u,inheritAttrs:!1};function b(t,m,y,$,h,v){return o(),r("div",e({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(o(),r("div",e({key:0,class:t.cx("header")},t.ptm("header")),[a(t.$slots,"header")],16)):s("",!0),d("div",e({class:t.cx("body")},t.ptm("body")),[t.$slots.title||t.$slots.subtitle?(o(),r("div",e({key:0,class:t.cx("caption")},t.ptm("caption")),[t.$slots.title?(o(),r("div",e({key:0,class:t.cx("title")},t.ptm("title")),[a(t.$slots,"title")],16)):s("",!0),t.$slots.subtitle?(o(),r("div",e({key:1,class:t.cx("subtitle")},t.ptm("subtitle")),[a(t.$slots,"subtitle")],16)):s("",!0)],16)):s("",!0),d("div",e({class:t.cx("content")},t.ptm("content")),[a(t.$slots,"content")],16),t.$slots.footer?(o(),r("div",e({key:1,class:t.cx("footer")},t.ptm("footer")),[a(t.$slots,"footer")],16)):s("",!0)],16)],16)}f.render=b;export{f as s};
