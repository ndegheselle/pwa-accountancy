import{S as $e,i as qe,s as Fe,k as a,a as y,q as P,l,m as r,h as s,c as I,r as T,n as t,W as Ke,I as Re,b as be,E as e,Z as Oe,X as ze,F as he,u as ge,_ as je,C as Be,G as Ge,Y as We,w as Xe,T as Ye,y as Ze,N as He,z as Je,A as Qe,U as xe,g as es,d as ss,K as ts,B as as,D as ls}from"../chunks/index.05a8d8df.js";import{c as rs}from"../chunks/dialogs.850fb91d.js";import{d as ns}from"../chunks/index.69270f44.js";import{g as os,s as Ue}from"../chunks/subscriptions.67db3f66.js";import{g as is,S as cs}from"../chunks/helpers.de17de56.js";const ds=ns(is(()=>os()),o=>o||[]);function us(o){let c,i,u,v,d,f,h,R=o[0]?"Edit subscription":"Add subscription",O,Q,p,_,V,X,U,ie,S,z,B,N,ae,C,K,j,W,ce,x,w,M,m,$,Y,Z,ee,q,se,H,ue,J,E,te,G,oe,L,le=o[0]?"Edit":"Add",de,re,D;return{c(){c=a("div"),i=a("div"),u=y(),v=a("div"),d=a("div"),f=a("div"),h=a("span"),O=P(R),Q=y(),p=a("div"),_=a("div"),V=a("label"),X=P(`Name\r
                            `),U=a("input"),ie=y(),S=a("div"),z=a("div"),B=a("div"),N=a("label"),ae=P(`Price\r
                                `),C=a("input"),K=y(),j=a("div"),W=a("label"),ce=P("Due every"),x=y(),w=a("div"),M=a("div"),m=a("select"),$=a("option"),Y=P("Every month"),Z=a("option"),ee=P("Every quarter"),q=a("option"),se=P("Every semester"),H=a("option"),ue=P("Every year"),J=y(),E=a("footer"),te=a("button"),G=P("Cancel"),oe=y(),L=a("button"),de=P(le),this.h()},l(F){c=l(F,"DIV",{class:!0});var k=r(c);i=l(k,"DIV",{class:!0}),r(i).forEach(s),u=I(k),v=l(k,"DIV",{class:!0});var n=r(v);d=l(n,"DIV",{class:!0});var A=r(d);f=l(A,"DIV",{class:!0});var g=r(f);h=l(g,"SPAN",{class:!0});var b=r(h);O=T(b,R),b.forEach(s),Q=I(g),p=l(g,"DIV",{class:!0});var ne=r(p);_=l(ne,"DIV",{class:!0});var De=r(_);V=l(De,"LABEL",{class:!0});var ye=r(V);X=T(ye,`Name\r
                            `),U=l(ye,"INPUT",{class:!0,type:!0}),ye.forEach(s),De.forEach(s),ne.forEach(s),ie=I(g),S=l(g,"DIV",{class:!0});var pe=r(S);z=l(pe,"DIV",{class:!0});var Ae=r(z);B=l(Ae,"DIV",{class:!0});var Ve=r(B);N=l(Ve,"LABEL",{class:!0});var ve=r(N);ae=T(ve,`Price\r
                                `),C=l(ve,"INPUT",{class:!0,type:!0}),ve.forEach(s),Ve.forEach(s),Ae.forEach(s),K=I(pe),j=l(pe,"DIV",{class:!0});var _e=r(j);W=l(_e,"LABEL",{class:!0});var Ne=r(W);ce=T(Ne,"Due every"),Ne.forEach(s),x=I(_e),w=l(_e,"DIV",{class:!0});var me=r(w);M=l(me,"DIV",{class:!0});var we=r(M);m=l(we,"SELECT",{class:!0});var fe=r(m);$=l(fe,"OPTION",{});var Pe=r($);Y=T(Pe,"Every month"),Pe.forEach(s),Z=l(fe,"OPTION",{});var Te=r(Z);ee=T(Te,"Every quarter"),Te.forEach(s),q=l(fe,"OPTION",{});var ke=r(q);se=T(ke,"Every semester"),ke.forEach(s),H=l(fe,"OPTION",{});var Ie=r(H);ue=T(Ie,"Every year"),Ie.forEach(s),fe.forEach(s),we.forEach(s),me.forEach(s),_e.forEach(s),pe.forEach(s),g.forEach(s),J=I(A),E=l(A,"FOOTER",{class:!0});var Ee=r(E);te=l(Ee,"BUTTON",{class:!0,"aria-label":!0});var Se=r(te);G=T(Se,"Cancel"),Se.forEach(s),oe=I(Ee),L=l(Ee,"BUTTON",{class:!0});var Le=r(L);de=T(Le,le),Le.forEach(s),Ee.forEach(s),A.forEach(s),n.forEach(s),k.forEach(s),this.h()},h(){t(i,"class","modal-background"),t(h,"class","has-text-grey-lighter"),t(U,"class","input"),t(U,"type","text"),t(V,"class","label"),t(_,"class","control"),t(p,"class","field"),t(C,"class","input"),t(C,"type","number"),t(N,"class","label"),t(B,"class","control"),t(z,"class","field column"),t(W,"class","label mb-0"),$.__value=1,$.value=$.__value,Z.__value=3,Z.value=Z.__value,q.__value=6,q.value=q.__value,H.__value=12,H.value=H.__value,t(m,"class","is-fullwidth"),o[2].dueEvery===void 0&&Ke(()=>o[8].call(m)),t(M,"class","select is-fullwidth"),t(w,"class","control"),t(j,"class","field column"),t(S,"class","columns"),t(f,"class","p-4"),t(te,"class","button"),t(te,"aria-label","close"),t(L,"class","ml-1 button is-success"),t(E,"class","is-flex is-justify-content-flex-end p-2"),t(d,"class","box p-0"),t(v,"class","modal-content"),t(c,"class","modal"),Re(c,"is-active",o[1])},m(F,k){be(F,c,k),e(c,i),e(c,u),e(c,v),e(v,d),e(d,f),e(f,h),e(h,O),e(f,Q),e(f,p),e(p,_),e(_,V),e(V,X),e(V,U),Oe(U,o[2].name),e(f,ie),e(f,S),e(S,z),e(z,B),e(B,N),e(N,ae),e(N,C),Oe(C,o[2].price),e(S,K),e(S,j),e(j,W),e(W,ce),e(j,x),e(j,w),e(w,M),e(M,m),e(m,$),e($,Y),e(m,Z),e(Z,ee),e(m,q),e(q,se),e(m,H),e(H,ue),ze(m,o[2].dueEvery,!0),e(d,J),e(d,E),e(E,te),e(te,G),e(E,oe),e(E,L),e(L,de),re||(D=[he(U,"input",o[6]),he(C,"input",o[7]),he(m,"change",o[8]),he(L,"click",o[4]),he(c,"closing",o[3])],re=!0)},p(F,[k]){k&1&&R!==(R=F[0]?"Edit subscription":"Add subscription")&&ge(O,R),k&4&&U.value!==F[2].name&&Oe(U,F[2].name),k&4&&je(C.value)!==F[2].price&&Oe(C,F[2].price),k&4&&ze(m,F[2].dueEvery),k&1&&le!==(le=F[0]?"Edit":"Add")&&ge(de,le),k&2&&Re(c,"is-active",F[1])},i:Be,o:Be,d(F){F&&s(c),re=!1,Ge(D)}}}function ps(o,c,i){function u(){i(1,f=!1)}function v(){h.id?Ue.update(h):Ue.create(h),u()}let d=!1,f=!1,h={};const R={show(_){i(0,d=!!_),i(2,h=_||new cs),i(1,f=!0)}};function O(){h.name=this.value,i(2,h)}function Q(){h.price=je(this.value),i(2,h)}function p(){h.dueEvery=We(this),i(2,h)}return[d,f,h,u,v,R,O,Q,p]}class vs extends $e{constructor(c){super(),qe(this,c,ps,us,Fe,{modal:5})}get modal(){return this.$$.ctx[5]}}function Ce(o,c,i){const u=o.slice();return u[8]=c[i],u}function Me(o){let c,i,u,v,d,f,h,R=o[8].name+"",O,Q,p,_,V,X,U,ie,S,z,B,N,ae,C,K,j,W,ce,x,w,M=(o[8].price/o[8].dueEvery).toLocaleString(void 0,{currency:"EUR",style:"currency"})+"",m,$,Y,Z,ee,q,se;function H(){return o[5](o[8])}function ue(){return o[6](o[8])}return{c(){c=a("div"),i=a("div"),u=a("div"),v=a("div"),d=a("span"),f=a("i"),h=y(),O=P(R),Q=y(),p=a("div"),_=a("div"),V=a("button"),X=a("span"),U=a("i"),ie=y(),S=a("div"),z=a("div"),B=a("a"),N=a("i"),ae=P(" Edit subscription"),C=y(),K=a("a"),j=a("i"),W=P(` Delete\r
                                        subscription`),ce=y(),x=a("div"),w=a("span"),m=P(M),$=y(),Y=a("span"),Z=P("per month"),ee=y(),this.h()},l(J){c=l(J,"DIV",{class:!0});var E=r(c);i=l(E,"DIV",{class:!0});var te=r(i);u=l(te,"DIV",{class:!0});var G=r(u);v=l(G,"DIV",{class:!0});var oe=r(v);d=l(oe,"SPAN",{class:!0});var L=r(d);f=l(L,"I",{class:!0}),r(f).forEach(s),h=I(L),O=T(L,R),L.forEach(s),Q=I(oe),p=l(oe,"DIV",{class:!0});var le=r(p);_=l(le,"DIV",{class:!0});var de=r(_);V=l(de,"BUTTON",{class:!0,"aria-haspopup":!0});var re=r(V);X=l(re,"SPAN",{class:!0});var D=r(X);U=l(D,"I",{class:!0}),r(U).forEach(s),D.forEach(s),re.forEach(s),de.forEach(s),ie=I(le),S=l(le,"DIV",{class:!0,role:!0});var F=r(S);z=l(F,"DIV",{class:!0});var k=r(z);B=l(k,"A",{class:!0});var n=r(B);N=l(n,"I",{class:!0}),r(N).forEach(s),ae=T(n," Edit subscription"),n.forEach(s),C=I(k),K=l(k,"A",{class:!0});var A=r(K);j=l(A,"I",{class:!0}),r(j).forEach(s),W=T(A,` Delete\r
                                        subscription`),A.forEach(s),k.forEach(s),F.forEach(s),le.forEach(s),oe.forEach(s),ce=I(G),x=l(G,"DIV",{});var g=r(x);w=l(g,"SPAN",{class:!0});var b=r(w);m=T(b,M),b.forEach(s),$=I(g),Y=l(g,"SPAN",{class:!0});var ne=r(Y);Z=T(ne,"per month"),ne.forEach(s),g.forEach(s),G.forEach(s),te.forEach(s),ee=I(E),E.forEach(s),this.h()},h(){t(f,"class","fa-solid fa-dollar-sign has-text-grey-lighter"),t(d,"class","title is-size-4 subscription-title mb-0  svelte-1wsrubs"),t(U,"class","fa-solid fa-ellipsis-vertical"),t(X,"class","icon is-small"),t(V,"class","button is-small is-light"),t(V,"aria-haspopup","true"),t(_,"class","dropdown-trigger"),t(N,"class","fa-solid fa-file-pen mr-1"),t(B,"class","dropdown-item"),t(j,"class","fa-solid fa-trash mr-1"),t(K,"class","dropdown-item has-text-danger"),t(z,"class","dropdown-content"),t(S,"class","dropdown-menu"),t(S,"role","menu"),t(p,"class","dropdown is-right"),t(v,"class","flex-container"),t(w,"class","is-size-4 title mb-0 has-text-danger"),t(Y,"class","is-size-6 has-text-grey-lighter"),t(u,"class","is-fullwidth"),t(i,"class","box is-fullheight flex-container"),t(c,"class","column is-one-third")},m(J,E){be(J,c,E),e(c,i),e(i,u),e(u,v),e(v,d),e(d,f),e(d,h),e(d,O),e(v,Q),e(v,p),e(p,_),e(_,V),e(V,X),e(X,U),e(p,ie),e(p,S),e(S,z),e(z,B),e(B,N),e(B,ae),e(z,C),e(z,K),e(K,j),e(K,W),e(u,ce),e(u,x),e(x,w),e(w,m),e(x,$),e(x,Y),e(Y,Z),e(c,ee),q||(se=[he(B,"click",H),he(K,"click",ue)],q=!0)},p(J,E){o=J,E&1&&R!==(R=o[8].name+"")&&ge(O,R),E&1&&M!==(M=(o[8].price/o[8].dueEvery).toLocaleString(void 0,{currency:"EUR",style:"currency"})+"")&&ge(m,M)},d(J){J&&s(c),q=!1,Ge(se)}}}function fs(o){let c,i,u,v,d,f=o[2].number+"",h,R,O,Q,p,_,V,X=o[2].perMonth.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"",U,ie,S,z,B,N,ae,C=(o[2].perMonth*12).toLocaleString(void 0,{currency:"EUR",style:"currency"})+"",K,j,W,ce,x,w,M,m,$,Y,Z,ee,q,se,H,ue,J,E,te,G,oe,L,le,de,re=o[0],D=[];for(let n=0;n<re.length;n+=1)D[n]=Me(Ce(o,re,n));function F(n){o[7](n)}let k={};return o[1]!==void 0&&(k.modal=o[1]),G=new vs({props:k}),Xe.push(()=>Ye(G,"modal",F)),{c(){c=y(),i=a("div"),u=a("div"),v=a("span"),d=a("span"),h=P(f),R=y(),O=a("span"),Q=P("Subscriptions"),p=y(),_=a("span"),V=a("span"),U=P(X),ie=y(),S=a("span"),z=P("per month"),B=y(),N=a("span"),ae=a("span"),K=P(C),j=y(),W=a("span"),ce=P("per year"),x=y(),w=a("div"),M=a("div"),m=a("button"),$=a("span"),Y=a("i"),Z=y(),ee=a("div"),q=a("div"),se=a("a"),H=a("i"),ue=P(" Add subscription"),J=y(),E=a("div");for(let n=0;n<D.length;n+=1)D[n].c();te=y(),Ze(G.$$.fragment),this.h()},l(n){He("svelte-1herti2",document.head).forEach(s),c=I(n),i=l(n,"DIV",{class:!0});var g=r(i);u=l(g,"DIV",{class:!0});var b=r(u);v=l(b,"SPAN",{class:!0});var ne=r(v);d=l(ne,"SPAN",{class:!0});var De=r(d);h=T(De,f),De.forEach(s),R=I(ne),O=l(ne,"SPAN",{class:!0});var ye=r(O);Q=T(ye,"Subscriptions"),ye.forEach(s),ne.forEach(s),p=I(b),_=l(b,"SPAN",{class:!0});var pe=r(_);V=l(pe,"SPAN",{class:!0});var Ae=r(V);U=T(Ae,X),Ae.forEach(s),ie=I(pe),S=l(pe,"SPAN",{class:!0});var Ve=r(S);z=T(Ve,"per month"),Ve.forEach(s),pe.forEach(s),B=I(b),N=l(b,"SPAN",{class:!0});var ve=r(N);ae=l(ve,"SPAN",{class:!0});var _e=r(ae);K=T(_e,C),_e.forEach(s),j=I(ve),W=l(ve,"SPAN",{class:!0});var Ne=r(W);ce=T(Ne,"per year"),Ne.forEach(s),ve.forEach(s),b.forEach(s),x=I(g),w=l(g,"DIV",{class:!0});var me=r(w);M=l(me,"DIV",{class:!0});var we=r(M);m=l(we,"BUTTON",{class:!0,"aria-haspopup":!0});var fe=r(m);$=l(fe,"SPAN",{class:!0});var Pe=r($);Y=l(Pe,"I",{class:!0}),r(Y).forEach(s),Pe.forEach(s),fe.forEach(s),we.forEach(s),Z=I(me),ee=l(me,"DIV",{class:!0,role:!0});var Te=r(ee);q=l(Te,"DIV",{class:!0});var ke=r(q);se=l(ke,"A",{class:!0});var Ie=r(se);H=l(Ie,"I",{class:!0}),r(H).forEach(s),ue=T(Ie," Add subscription"),Ie.forEach(s),ke.forEach(s),Te.forEach(s),me.forEach(s),g.forEach(s),J=I(n),E=l(n,"DIV",{class:!0});var Ee=r(E);for(let Se=0;Se<D.length;Se+=1)D[Se].l(Ee);Ee.forEach(s),te=I(n),Je(G.$$.fragment,n),this.h()},h(){document.title="MePloutos - Subscriptions",t(d,"class","is-size-1 title mb-0"),t(O,"class","is-size-6 has-text-grey-lighter ml-2"),t(v,"class","text-header svelte-1wsrubs"),t(V,"class","title mb-0 has-text-danger"),t(S,"class","is-size-6 has-text-grey-lighter ml-2"),t(_,"class","text-header svelte-1wsrubs"),t(ae,"class","title mb-0 has-text-danger"),t(W,"class","is-size-6 has-text-grey-lighter ml-2"),t(N,"class","text-header svelte-1wsrubs"),t(u,"class","flex-container"),t(Y,"class","fa-solid fa-ellipsis-vertical"),t($,"class","icon is-small"),t(m,"class","button is-small is-light"),t(m,"aria-haspopup","true"),t(M,"class","dropdown-trigger"),t(H,"class","fa-solid fa-plus"),t(se,"class","dropdown-item"),t(q,"class","dropdown-content"),t(ee,"class","dropdown-menu"),t(ee,"role","menu"),t(w,"class","dropdown is-right my-auto ml-4"),t(i,"class","box is-flex"),t(E,"class","columns")},m(n,A){be(n,c,A),be(n,i,A),e(i,u),e(u,v),e(v,d),e(d,h),e(v,R),e(v,O),e(O,Q),e(u,p),e(u,_),e(_,V),e(V,U),e(_,ie),e(_,S),e(S,z),e(u,B),e(u,N),e(N,ae),e(ae,K),e(N,j),e(N,W),e(W,ce),e(i,x),e(i,w),e(w,M),e(M,m),e(m,$),e($,Y),e(w,Z),e(w,ee),e(ee,q),e(q,se),e(se,H),e(se,ue),be(n,J,A),be(n,E,A);for(let g=0;g<D.length;g+=1)D[g]&&D[g].m(E,null);be(n,te,A),Qe(G,n,A),L=!0,le||(de=he(se,"click",o[4]),le=!0)},p(n,[A]){if((!L||A&4)&&f!==(f=n[2].number+"")&&ge(h,f),(!L||A&4)&&X!==(X=n[2].perMonth.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"")&&ge(U,X),(!L||A&4)&&C!==(C=(n[2].perMonth*12).toLocaleString(void 0,{currency:"EUR",style:"currency"})+"")&&ge(K,C),A&11){re=n[0];let b;for(b=0;b<re.length;b+=1){const ne=Ce(n,re,b);D[b]?D[b].p(ne,A):(D[b]=Me(ne),D[b].c(),D[b].m(E,null))}for(;b<D.length;b+=1)D[b].d(1);D.length=re.length}const g={};!oe&&A&2&&(oe=!0,g.modal=n[1],xe(()=>oe=!1)),G.$set(g)},i(n){L||(es(G.$$.fragment,n),L=!0)},o(n){ss(G.$$.fragment,n),L=!1},d(n){n&&s(c),n&&s(i),n&&s(J),n&&s(E),ts(D,n),n&&s(te),as(G,n),le=!1,de()}}}function hs(o,c,i){let u,v;ls(o,ds,p=>i(0,v=p));let d=null;function f(p){rs.show(`Are you sure you want to delete the subscription '${p.name}' ?`,"Delete subscription","is-danger").then(_=>{_&&Ue.remove(p.id)})}const h=()=>d.show(),R=p=>d.show(p),O=p=>f(p);function Q(p){d=p,i(1,d)}return o.$$.update=()=>{o.$$.dirty&1&&i(2,u=Ue.getSubscriptionsRecap(v))},[v,d,u,f,h,R,O,Q]}class ys extends $e{constructor(c){super(),qe(this,c,hs,fs,Fe,{})}}export{ys as component};