(this.webpackJsonpaccountownerclient=this.webpackJsonpaccountownerclient||[]).push([[7],{263:function(e,t,n){"use strict";n.r(t);var r=n(41),a=n(1),l=n.n(a),c=n(9),o=n(46),u=n(50),i=n(96),s=n(66),m=n.n(s),d=function(e){return l.a.createElement(a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,e.owner.name),l.a.createElement("td",null,l.a.createElement(m.a,{format:"DD/MM/YYYY"},e.owner.dateOfBirth)),l.a.createElement("td",null,e.owner.address),l.a.createElement("td",null,l.a.createElement(c.a,{onClick:function(){return t=e.owner.id,void e.history.push("/ownerDetails/"+t);var t}},"Details")),l.a.createElement("td",null,l.a.createElement(c.a,{bsStyle:"success",onClick:function(){return t=e.owner.id,void e.history.push("/updateOwner/"+t);var t}},"Update")),l.a.createElement("td",null,l.a.createElement(c.a,{bsStyle:"danger",onClick:function(){return t=e.owner.id,void e.history.push("/deleteOwner/"+t);var t}},"Delete"))))};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.default=function(e){var t=Object(u.c)();Object(a.useEffect)((function(){t(i.c("/api/owner",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)))}),[t,e]);var n=[],s=Object(u.d)((function(e){return e.repository.data}));return s&&s.length>0&&(n=s.map((function(t){return l.a.createElement(d,Object.assign({key:t.id,owner:t},e))}))),l.a.createElement(a.Fragment,null,l.a.createElement(c.l,null,l.a.createElement(c.b,{mdOffset:10,md:2},l.a.createElement(o.Link,{to:"/createOwner"},"Create Owner"))),l.a.createElement("br",null),l.a.createElement(c.l,null,l.a.createElement(c.b,{md:12},l.a.createElement(c.m,{responsive:!0,striped:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Date of birth"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"Details"),l.a.createElement("th",null,"Update"),l.a.createElement("th",null,"Delete"))),l.a.createElement("tbody",null,n)))))}}}]);
//# sourceMappingURL=7.48f59316.chunk.js.map