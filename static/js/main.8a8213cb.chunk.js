(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var n,c=s(6),i=s.n(c),o=s(5),r=s(7),a=s(8),l=s(2),u=(s(13),s(14),s(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(n||(n={}));var d=function(){var e=Object(l.useState)({sortType:n.NONE,isReversed:!1}),t=Object(r.a)(e,2),s=t[0],c=t[1],i=function(e,t){var s=t.sortType,c=t.isReversed,i=Object(a.a)(e);switch(s){case n.ALPHABET:i.sort();break;case n.LENGTH:i.sort((function(e,t){return e.length-t.length}))}return c&&i.reverse(),i}(b,s);return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:"button is-info is-light ".concat(s.sortType===n.ALPHABET?"is-active":""),onClick:function(){c({sortType:n.ALPHABET,isReversed:!1})},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:"button is-success is-light ".concat(s.sortType===n.LENGTH?"is-active":""),onClick:function(){c({sortType:n.LENGTH,isReversed:!1})},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:"button is-warning is-light ".concat(s.isReversed?"is-active":""),onClick:function(){c(Object(o.a)(Object(o.a)({},s),{},{isReversed:!s.isReversed}))},children:"Reverse"}),s.sortType!==n.NONE&&Object(u.jsx)("button",{type:"button",className:"button is-danger",onClick:function(){c({sortType:n.NONE,isReversed:!1})},children:"Reset"})]}),Object(u.jsx)("ul",{children:i.map((function(e){return Object(u.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})};i.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8a8213cb.chunk.js.map