import{S as Be,i as Oe,s as Ce,k as a,a as P,q as R,l,m as n,h as t,c as k,r as B,n as s,I as ke,b as De,E as e,X as Se,F as _e,u as me,Y as ye,C as Te,G as ze,w as $e,Q as qe,y as Fe,z as Ge,A as je,R as Ke,g as Me,d as Qe,K as Xe,B as Ye,D as He}from"../chunks/index.14546b91.js";import{c as Je}from"../chunks/dialogs.1c3bad3e.js";import{d as We}from"../chunks/index.9e8dd097.js";import{g as Ze,i as Ne}from"../chunks/investments.cc9c4ab9.js";import{g as xe,I as es,p as ss}from"../chunks/helpers.de17de56.js";const ts=We(xe(()=>Ze()),r=>r||[]);function Ue(r){let i,c,v,_,u,f,h;return{c(){i=a("div"),c=a("div"),v=a("label"),_=R(`Actual value\r
                            `),u=a("input"),this.h()},l(m){i=l(m,"DIV",{class:!0});var A=n(i);c=l(A,"DIV",{class:!0});var j=n(c);v=l(j,"LABEL",{class:!0});var d=n(v);_=B(d,`Actual value\r
                            `),u=l(d,"INPUT",{class:!0,type:!0}),d.forEach(t),j.forEach(t),A.forEach(t),this.h()},h(){s(u,"class","input"),s(u,"type","number"),s(v,"class","label"),s(c,"class","control"),s(i,"class","field")},m(m,A){De(m,i,A),e(i,c),e(c,v),e(v,_),e(v,u),Se(u,r[2].actualValue),f||(h=_e(u,"input",r[9]),f=!0)},p(m,A){A&4&&ye(u.value)!==m[2].actualValue&&Se(u,m[2].actualValue)},d(m){m&&t(i),f=!1,h()}}}function as(r){let i,c,v,_,u,f,h,m=r[0]?"Edit subscription":"Add subscription",A,j,d,b,V,J,$,Z,T,O,q,C,te,K,Y,U,X,F,G,L,x,H,ee,E,z,re,ie,N,W=r[0]?"Edit":"Add",M,ae,Q,w=r[0]&&Ue(r);return{c(){i=a("div"),c=a("div"),v=P(),_=a("div"),u=a("div"),f=a("div"),h=a("span"),A=R(m),j=P(),d=a("div"),b=a("div"),V=a("label"),J=R(`Name\r
                            `),$=a("input"),Z=P(),T=a("div"),O=a("div"),q=a("div"),C=a("label"),te=R(`Initial investment\r
                                `),K=a("input"),Y=P(),U=a("div"),X=a("div"),F=a("label"),G=R(`Start date\r
                            `),L=a("input"),H=P(),w&&w.c(),ee=P(),E=a("footer"),z=a("button"),re=R("Cancel"),ie=P(),N=a("button"),M=R(W),this.h()},l(g){i=l(g,"DIV",{class:!0});var D=n(i);c=l(D,"DIV",{class:!0}),n(c).forEach(t),v=k(D),_=l(D,"DIV",{class:!0});var I=n(_);u=l(I,"DIV",{class:!0});var ce=n(u);f=l(ce,"DIV",{class:!0});var se=n(f);h=l(se,"SPAN",{class:!0});var o=n(h);A=B(o,m),o.forEach(t),j=k(se),d=l(se,"DIV",{class:!0});var S=n(d);b=l(S,"DIV",{class:!0});var y=n(b);V=l(y,"LABEL",{class:!0});var p=n(V);J=B(p,`Name\r
                            `),$=l(p,"INPUT",{class:!0,type:!0}),p.forEach(t),y.forEach(t),S.forEach(t),Z=k(se),T=l(se,"DIV",{class:!0});var le=n(T);O=l(le,"DIV",{class:!0});var ue=n(O);q=l(ue,"DIV",{class:!0});var oe=n(q);C=l(oe,"LABEL",{class:!0});var ne=n(C);te=B(ne,`Initial investment\r
                                `),K=l(ne,"INPUT",{class:!0,type:!0}),ne.forEach(t),oe.forEach(t),ue.forEach(t),Y=k(le),U=l(le,"DIV",{class:!0});var de=n(U);X=l(de,"DIV",{class:!0});var ve=n(X);F=l(ve,"LABEL",{class:!0});var he=n(F);G=B(he,`Start date\r
                            `),L=l(he,"INPUT",{class:!0,type:!0}),he.forEach(t),ve.forEach(t),de.forEach(t),le.forEach(t),H=k(se),w&&w.l(se),se.forEach(t),ee=k(ce),E=l(ce,"FOOTER",{class:!0});var fe=n(E);z=l(fe,"BUTTON",{class:!0,"aria-label":!0});var Ee=n(z);re=B(Ee,"Cancel"),Ee.forEach(t),ie=k(fe),N=l(fe,"BUTTON",{class:!0});var pe=n(N);M=B(pe,W),pe.forEach(t),fe.forEach(t),ce.forEach(t),I.forEach(t),D.forEach(t),this.h()},h(){var g;s(c,"class","modal-background"),s(h,"class","has-text-grey-lighter"),s($,"class","input"),s($,"type","text"),s(V,"class","label"),s(b,"class","control"),s(d,"class","field"),s(K,"class","input"),s(K,"type","number"),s(C,"class","label"),s(q,"class","control"),s(O,"class","field column mb-0"),s(L,"class","input"),s(L,"type","date"),L.value=x=(g=r[2].startDate)==null?void 0:g.toISOString().split("T")[0],s(F,"class","label"),s(X,"class","control"),s(U,"class","field column"),s(T,"class","columns mb-0"),s(f,"class","p-4"),s(z,"class","button"),s(z,"aria-label","close"),s(N,"class","ml-1 button is-success"),s(E,"class","is-flex is-justify-content-flex-end p-2"),s(u,"class","box p-0"),s(_,"class","modal-content"),s(i,"class","modal"),ke(i,"is-active",r[1])},m(g,D){De(g,i,D),e(i,c),e(i,v),e(i,_),e(_,u),e(u,f),e(f,h),e(h,A),e(f,j),e(f,d),e(d,b),e(b,V),e(V,J),e(V,$),Se($,r[2].name),e(f,Z),e(f,T),e(T,O),e(O,q),e(q,C),e(C,te),e(C,K),Se(K,r[2].investedValue),e(T,Y),e(T,U),e(U,X),e(X,F),e(F,G),e(F,L),e(f,H),w&&w.m(f,null),e(u,ee),e(u,E),e(E,z),e(z,re),e(E,ie),e(E,N),e(N,M),ae||(Q=[_e($,"input",r[6]),_e(K,"input",r[7]),_e(L,"change",r[8]),_e(N,"click",r[4]),_e(i,"closing",r[3])],ae=!0)},p(g,[D]){var I;D&1&&m!==(m=g[0]?"Edit subscription":"Add subscription")&&me(A,m),D&4&&$.value!==g[2].name&&Se($,g[2].name),D&4&&ye(K.value)!==g[2].investedValue&&Se(K,g[2].investedValue),D&4&&x!==(x=(I=g[2].startDate)==null?void 0:I.toISOString().split("T")[0])&&(L.value=x),g[0]?w?w.p(g,D):(w=Ue(g),w.c(),w.m(f,null)):w&&(w.d(1),w=null),D&1&&W!==(W=g[0]?"Edit":"Add")&&me(M,W),D&2&&ke(i,"is-active",g[1])},i:Te,o:Te,d(g){g&&t(i),w&&w.d(),ae=!1,ze(Q)}}}function ls(r,i,c){function v(){c(1,f=!1)}function _(){h.id?Ne.update(h):Ne.create(h),v()}let u=!1,f=!1,h={};const m={show(V){c(0,u=!!V),c(2,h=V||new es),c(1,f=!0)}};function A(){h.name=this.value,c(2,h)}function j(){h.investedValue=ye(this.value),c(2,h)}const d=V=>c(2,h.startDate=ss(V.target.value),h);function b(){h.actualValue=ye(this.value),c(2,h)}return[u,f,h,v,_,m,A,j,d,b]}class ns extends Be{constructor(i){super(),Oe(this,i,ls,as,Ce,{modal:5})}get modal(){return this.$$.ctx[5]}}function Le(r,i,c){const v=r.slice();return v[8]=i[c],v}function Re(r){let i,c,v,_,u,f,h,m=r[8].name+"",A,j,d,b,V,J,$,Z,T,O,q,C,te,K,Y,U,X,F,G,L,x=r[8].actualValue.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"",H,ee,E,z,re,ie,N=be(r[8])*100/r[8].investedValue+"",W,M,ae,Q=be(r[8]).toLocaleString(void 0,{currency:"EUR",style:"currency"})+"",w,g,D,I,ce,se;function o(){return r[5](r[8])}function S(){return r[6](r[8])}return{c(){i=a("div"),c=a("div"),v=a("div"),_=a("div"),u=a("span"),f=a("i"),h=P(),A=R(m),j=P(),d=a("div"),b=a("div"),V=a("button"),J=a("span"),$=a("i"),Z=P(),T=a("div"),O=a("div"),q=a("a"),C=a("i"),te=R(` Edit\r
                                        investment`),K=P(),Y=a("a"),U=a("i"),X=R(` Delete\r
                                        investment`),F=P(),G=a("div"),L=a("span"),H=R(x),ee=P(),E=a("span"),z=a("i"),ie=P(),W=R(N),M=R("% ("),ae=a("span"),w=R(Q),g=R(")"),I=P(),this.h()},l(y){i=l(y,"DIV",{class:!0});var p=n(i);c=l(p,"DIV",{class:!0});var le=n(c);v=l(le,"DIV",{class:!0});var ue=n(v);_=l(ue,"DIV",{class:!0});var oe=n(_);u=l(oe,"SPAN",{class:!0});var ne=n(u);f=l(ne,"I",{class:!0}),n(f).forEach(t),h=k(ne),A=B(ne,m),ne.forEach(t),j=k(oe),d=l(oe,"DIV",{class:!0});var de=n(d);b=l(de,"DIV",{class:!0});var ve=n(b);V=l(ve,"BUTTON",{class:!0,"aria-haspopup":!0});var he=n(V);J=l(he,"SPAN",{class:!0});var fe=n(J);$=l(fe,"I",{class:!0}),n($).forEach(t),fe.forEach(t),he.forEach(t),ve.forEach(t),Z=k(de),T=l(de,"DIV",{class:!0,role:!0});var Ee=n(T);O=l(Ee,"DIV",{class:!0});var pe=n(O);q=l(pe,"A",{class:!0});var we=n(q);C=l(we,"I",{class:!0}),n(C).forEach(t),te=B(we,` Edit\r
                                        investment`),we.forEach(t),K=k(pe),Y=l(pe,"A",{class:!0});var ge=n(Y);U=l(ge,"I",{class:!0}),n(U).forEach(t),X=B(ge,` Delete\r
                                        investment`),ge.forEach(t),pe.forEach(t),Ee.forEach(t),de.forEach(t),oe.forEach(t),F=k(ue),G=l(ue,"DIV",{class:!0});var Ie=n(G);L=l(Ie,"SPAN",{class:!0});var Ae=n(L);H=B(Ae,x),Ae.forEach(t),ee=k(Ie),E=l(Ie,"SPAN",{class:!0});var Ve=n(E);z=l(Ve,"I",{class:!0}),n(z).forEach(t),ie=k(Ve),W=B(Ve,N),M=B(Ve,"% ("),ae=l(Ve,"SPAN",{});var Pe=n(ae);w=B(Pe,Q),Pe.forEach(t),g=B(Ve,")"),Ve.forEach(t),Ie.forEach(t),ue.forEach(t),le.forEach(t),I=k(p),p.forEach(t),this.h()},h(){s(f,"class","fa-solid fa-chart-line has-text-grey-lighter"),s(u,"class","title is-size-4 subscription-title mb-0 svelte-1wsrubs"),s($,"class","fa-solid fa-ellipsis-vertical"),s(J,"class","icon is-small"),s(V,"class","button is-small is-light"),s(V,"aria-haspopup","true"),s(b,"class","dropdown-trigger"),s(C,"class","fa-solid fa-file-pen mr-1"),s(q,"class","dropdown-item"),s(U,"class","fa-solid fa-trash mr-1"),s(Y,"class","dropdown-item has-text-danger"),s(O,"class","dropdown-content"),s(T,"class","dropdown-menu"),s(T,"role","menu"),s(d,"class","dropdown is-right"),s(_,"class","flex-container"),s(L,"class","is-size-4 title mb-0"),s(z,"class",re="fa-solid fa-arrow-trend-"+(be(r[8])<0?"down":"up")),s(E,"class",D=be(r[8])<0?"has-text-danger":"has-text-success"),s(G,"class","flex-container"),s(v,"class","is-fullwidth"),s(c,"class","box is-fullheight flex-container"),s(i,"class","column is-half")},m(y,p){De(y,i,p),e(i,c),e(c,v),e(v,_),e(_,u),e(u,f),e(u,h),e(u,A),e(_,j),e(_,d),e(d,b),e(b,V),e(V,J),e(J,$),e(d,Z),e(d,T),e(T,O),e(O,q),e(q,C),e(q,te),e(O,K),e(O,Y),e(Y,U),e(Y,X),e(v,F),e(v,G),e(G,L),e(L,H),e(G,ee),e(G,E),e(E,z),e(E,ie),e(E,W),e(E,M),e(E,ae),e(ae,w),e(E,g),e(i,I),ce||(se=[_e(q,"click",o),_e(Y,"click",S)],ce=!0)},p(y,p){r=y,p&1&&m!==(m=r[8].name+"")&&me(A,m),p&1&&x!==(x=r[8].actualValue.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"")&&me(H,x),p&1&&re!==(re="fa-solid fa-arrow-trend-"+(be(r[8])<0?"down":"up"))&&s(z,"class",re),p&1&&N!==(N=be(r[8])*100/r[8].investedValue+"")&&me(W,N),p&1&&Q!==(Q=be(r[8]).toLocaleString(void 0,{currency:"EUR",style:"currency"})+"")&&me(w,Q),p&1&&D!==(D=be(r[8])<0?"has-text-danger":"has-text-success")&&s(E,"class",D)},d(y){y&&t(i),ce=!1,ze(se)}}}function rs(r){let i,c,v,_,u=r[2].number+"",f,h,m,A,j,d,b,V=r[2].percentage+"",J,$,Z,T,O,q,C,te=r[2].total.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"",K,Y,U,X,F,G,L,x,H,ee,E,z,re,ie,N,W,M,ae,Q,w,g,D=r[0],I=[];for(let o=0;o<D.length;o+=1)I[o]=Re(Le(r,D,o));function ce(o){r[7](o)}let se={};return r[1]!==void 0&&(se.modal=r[1]),M=new ns({props:se}),$e.push(()=>qe(M,"modal",ce)),{c(){i=a("div"),c=a("div"),v=a("span"),_=a("span"),f=R(u),h=P(),m=a("span"),A=R("Investments"),j=P(),d=a("span"),b=a("span"),J=R(V),$=R(" %"),Z=a("i"),q=P(),C=a("span"),K=R(te),Y=P(),U=a("div"),X=a("div"),F=a("button"),G=a("span"),L=a("i"),x=P(),H=a("div"),ee=a("div"),E=a("a"),z=a("i"),re=R(" Add investment"),ie=P(),N=a("div");for(let o=0;o<I.length;o+=1)I[o].c();W=P(),Fe(M.$$.fragment),this.h()},l(o){i=l(o,"DIV",{class:!0});var S=n(i);c=l(S,"DIV",{class:!0});var y=n(c);v=l(y,"SPAN",{class:!0});var p=n(v);_=l(p,"SPAN",{class:!0});var le=n(_);f=B(le,u),le.forEach(t),h=k(p),m=l(p,"SPAN",{class:!0});var ue=n(m);A=B(ue,"Investments"),ue.forEach(t),p.forEach(t),j=k(y),d=l(y,"SPAN",{});var oe=n(d);b=l(oe,"SPAN",{class:!0});var ne=n(b);J=B(ne,V),$=B(ne," %"),Z=l(ne,"I",{class:!0}),n(Z).forEach(t),ne.forEach(t),q=k(oe),C=l(oe,"SPAN",{class:!0});var de=n(C);K=B(de,te),de.forEach(t),oe.forEach(t),y.forEach(t),Y=k(S),U=l(S,"DIV",{class:!0});var ve=n(U);X=l(ve,"DIV",{class:!0});var he=n(X);F=l(he,"BUTTON",{class:!0,"aria-haspopup":!0});var fe=n(F);G=l(fe,"SPAN",{class:!0});var Ee=n(G);L=l(Ee,"I",{class:!0}),n(L).forEach(t),Ee.forEach(t),fe.forEach(t),he.forEach(t),x=k(ve),H=l(ve,"DIV",{class:!0,role:!0});var pe=n(H);ee=l(pe,"DIV",{class:!0});var we=n(ee);E=l(we,"A",{class:!0});var ge=n(E);z=l(ge,"I",{class:!0}),n(z).forEach(t),re=B(ge," Add investment"),ge.forEach(t),we.forEach(t),pe.forEach(t),ve.forEach(t),S.forEach(t),ie=k(o),N=l(o,"DIV",{class:!0});var Ie=n(N);for(let Ae=0;Ae<I.length;Ae+=1)I[Ae].l(Ie);Ie.forEach(t),W=k(o),Ge(M.$$.fragment,o),this.h()},h(){s(_,"class","is-size-1 title mb-0"),s(m,"class","is-size-6 has-text-grey-lighter ml-2"),s(v,"class","text-header svelte-1wsrubs"),s(Z,"class",T="fa-solid fa-arrow-trend-"+(r[2].percentage<0?"down":"up")),s(b,"class",O="mr-4 subtitle is-4 "+(r[2].percentage<0?"has-text-danger":"has-text-success")),s(C,"class","title is-spaced"),s(c,"class","flex-container"),s(L,"class","fa-solid fa-ellipsis-vertical"),s(G,"class","icon is-small"),s(F,"class","button is-small is-light"),s(F,"aria-haspopup","true"),s(X,"class","dropdown-trigger"),s(z,"class","fa-solid fa-plus"),s(E,"class","dropdown-item"),s(ee,"class","dropdown-content"),s(H,"class","dropdown-menu"),s(H,"role","menu"),s(U,"class","dropdown is-right my-auto ml-4"),s(i,"class","box is-flex"),s(N,"class","columns")},m(o,S){De(o,i,S),e(i,c),e(c,v),e(v,_),e(_,f),e(v,h),e(v,m),e(m,A),e(c,j),e(c,d),e(d,b),e(b,J),e(b,$),e(b,Z),e(d,q),e(d,C),e(C,K),e(i,Y),e(i,U),e(U,X),e(X,F),e(F,G),e(G,L),e(U,x),e(U,H),e(H,ee),e(ee,E),e(E,z),e(E,re),De(o,ie,S),De(o,N,S);for(let y=0;y<I.length;y+=1)I[y]&&I[y].m(N,null);De(o,W,S),je(M,o,S),Q=!0,w||(g=_e(E,"click",r[4]),w=!0)},p(o,[S]){if((!Q||S&4)&&u!==(u=o[2].number+"")&&me(f,u),(!Q||S&4)&&V!==(V=o[2].percentage+"")&&me(J,V),(!Q||S&4&&T!==(T="fa-solid fa-arrow-trend-"+(o[2].percentage<0?"down":"up")))&&s(Z,"class",T),(!Q||S&4&&O!==(O="mr-4 subtitle is-4 "+(o[2].percentage<0?"has-text-danger":"has-text-success")))&&s(b,"class",O),(!Q||S&4)&&te!==(te=o[2].total.toLocaleString(void 0,{currency:"EUR",style:"currency"})+"")&&me(K,te),S&11){D=o[0];let p;for(p=0;p<D.length;p+=1){const le=Le(o,D,p);I[p]?I[p].p(le,S):(I[p]=Re(le),I[p].c(),I[p].m(N,null))}for(;p<I.length;p+=1)I[p].d(1);I.length=D.length}const y={};!ae&&S&2&&(ae=!0,y.modal=o[1],Ke(()=>ae=!1)),M.$set(y)},i(o){Q||(Me(M.$$.fragment,o),Q=!0)},o(o){Qe(M.$$.fragment,o),Q=!1},d(o){o&&t(i),o&&t(ie),o&&t(N),Xe(I,o),o&&t(W),Ye(M,o),w=!1,g()}}}function be(r){return r.actualValue-r.investedValue}function is(r,i,c){let v,_;He(r,ts,d=>c(0,_=d));let u=null;function f(d){Je.show(`Are you sure you want to delete the investment '${d.name}' ?`,"Delete investment","is-danger").then(b=>{b&&Ne.remove(d.id)})}const h=()=>u.show(),m=d=>u.show(d),A=d=>f(d);function j(d){u=d,c(1,u)}return r.$$.update=()=>{r.$$.dirty&1&&c(2,v=Ne.getInvestmentsRecap(_))},[_,u,v,f,h,m,A,j]}class fs extends Be{constructor(i){super(),Oe(this,i,is,rs,Ce,{})}}export{fs as component};