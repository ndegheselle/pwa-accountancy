import{d as r,u as o}from"./helpers.de17de56.js";function b(){return r.subscriptions.toArray()}function i(t){return r.subscriptions.add(t)}function c(t){return r.subscriptions.update(t.id,t)}function a(t){return r.subscriptions.delete(t)}function p(t){const n={number:0,totalAnnual:0,perMonth:0};if((t==null?void 0:t.length)===0)return n;for(const e of t){n.number+=1;let u=e.price/e.dueEvery;n.totalAnnual+=u*12,n.perMonth+=u}return n}function s(t){return t.id=o(),i(t)}function d(t){return c(t)}function f(t){return a(t)}const m={getSubscriptionsRecap:p,create:s,update:d,remove:f};export{b as g,m as s};