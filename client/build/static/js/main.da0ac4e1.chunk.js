(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{73:function(e,t,n){},80:function(e,t){},82:function(e,t){},97:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(12),r=n.n(s),i=n(44),o=n.n(i),l=n(55),j=n(17),d=n(18),u="SET_PROCESSING",b="SET_RESULT",O="RESET",h=function(e,t){switch(t.type){case u:return Object(d.a)(Object(d.a)({},e),{},{processing:!0});case O:return Object(d.a)(Object(d.a)({},e),{},{processing:!1});case b:return Object(d.a)(Object(d.a)({},e),{},{processing:!1,result:t.payload});default:return e}},x=Object(c.createContext)(),f=n(2),m=function(e){var t=Object(c.useReducer)(h,{processing:!1,result:null,data:null}),n=Object(j.a)(t,2),a=n[0],s=n[1],r=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var c,a,s,r,l,j,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),c=/\S+@\S+\.\S+/,a=[],s=[],r=null,t.forEach((function(e){c.test(e.data[n])&&a.push(e.data[n])})),e.next=8,fetch("https://correct-email.herokuapp.com/email/filter",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emails:a})});case 8:return l=e.sent,e.next=11,l.json();case 11:(j=e.sent)&&(t.forEach((function(e,t){0===t&&(r=e.data),-1!==j.msg.indexOf(e.data[n])&&s.push(e.data)})),m(),u=[],s.forEach((function(e){var t={};e.forEach((function(e,n){t[r[n]]=e})),u.push(t)})),d({data:s,emailIndex:n,noOfCorrectEmails:j.msg.length,noOfWrongEmails:j.wrongEmails.length,csv:u}));case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){s({type:u})},d=function(e){s({type:b,payload:e})},m=function(){s({type:O})};return Object(f.jsx)(x.Provider,{value:{processing:a.processing,result:a.result,process:r},children:e.children})},p=(n(73),n(113)),g=n(38),v=n(120),y=n(45),E=n.n(y),S=Object(v.a)({nav:{boxShadow:"0 1px 1px #f5f5f5 ",marginBottom:50,padding:10,textAlign:"center",color:"white"}}),w=function(){var e=S(),t=Object(c.useState)(1),n=Object(j.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){s(1)}),[a]),Object(f.jsx)("div",{className:e.nav,children:Object(f.jsx)(p.a,{children:a?Object(f.jsxs)(E.a,{avgTypingDelay:50,cursor:{show:!0,blink:!0,element:"",hideWhenDone:!1,hideWhenDoneDelay:1e3},onTypingDone:function(){return s(0)},children:[Object(f.jsx)(g.a,{variant:"h4",children:"Email Verify"}),Object(f.jsx)(E.a.Backspace,{count:11,delay:800})]}):""})})},C=n(119),k=n(121),N=n(117),D=function(){return Object(f.jsxs)("div",{className:"lds-roller",children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{})]})},T=n(114),B=n(115),R=n(116),H=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(g.a,{align:"center",variant:"h5",children:"Hints"}),Object(f.jsxs)(T.a,{children:[Object(f.jsx)(B.a,{children:Object(f.jsx)(R.a,{primary:"1. Upload CSV format file "})}),Object(f.jsx)(B.a,{children:Object(f.jsx)(R.a,{primary:"2. Emails must be in 1 column (You may include unlimited columns of other data)."})}),Object(f.jsx)(B.a,{children:Object(f.jsx)(R.a,{primary:"3. When finished uploading, you may analyze or clean your list."})})]})]})},I=n(37),A=Object(v.a)({result:{background:"transparent",color:"white"}}),F=function(e){var t=e.result,n=A();return Object(f.jsxs)(c.Fragment,{children:[Object(f.jsx)(g.a,{style:{color:"#bdbdbd"},children:"Here are you verify emails"}),Object(f.jsx)("br",{}),Object(f.jsx)(k.a,{className:n.result,children:Object(f.jsxs)(g.a,{variant:"h6",children:[t.noOfCorrectEmails," emails verfied"]})}),Object(f.jsx)(I.a,{data:t.csv,type:"button",filename:"verifiedEmails",style:{background:"#f5f5f5",padding:10,margin:"10px 0",cursor:"pointer","&:focus":{outline:0}},children:"Download CSV"})]})},P=Object(v.a)({card:{minHeight:"82vh",maxHeight:"82vh",background:"transparent",color:"#f5f5f5","@media (max-width:780px)":{maxHeight:"82vh",height:"fit-content"}},spinner:{padding:25,marginBottom:5,display:"flex",alignItems:"center",flexDirection:"column"}}),V=function(){var e=P(),t=Object(c.useContext)(x),n=t.processing,a=t.downloading,s=t.uploading,r=t.result;return Object(f.jsx)(k.a,{elevation:2,className:e.card,children:Object(f.jsx)(N.a,{children:Object(f.jsx)(p.a,{className:e.spinner,children:!r||n?Object(f.jsxs)(c.Fragment,{children:[Object(f.jsx)(H,{}),(s||n||a)&&Object(f.jsx)(D,{}),s&&Object(f.jsx)(g.a,{children:"uploading ..."}),n&&Object(f.jsx)(g.a,{children:"processing ..."}),a&&Object(f.jsx)(g.a,{children:"downloading results ..."})]}):Object(f.jsx)(F,{result:r})})})})},W=n(46),J=n.n(W),L=n(118),U=n(62),Y=n.n(U),_=Object(v.a)({uploadBtn:{marginTop:15,width:"fit-content"}}),z=function(){var e=_(),t=Object(c.useState)(null),n=Object(j.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)({status:!1,msg:null}),i=Object(j.a)(r,2),o=i[0],l=i[1],d=Object(c.useContext)(x),u=d.processing,b=d.process;return Object(f.jsxs)(p.a,{children:[o.status&&Object(f.jsx)(g.a,{variant:"h6",style:{color:"#f5f5f5"},children:o.msg}),Object(f.jsx)(I.b,{onDrop:function(e){s(e)},onError:function(e,t,n,c){console.log(e)},addRemoveButton:!0,removeButtonColor:"#659cef",onRemoveFile:function(e){s(e)},children:Object(f.jsx)("span",{style:{padding:"50px 0",color:"#f5f5f5"},children:"Drop CSV file here or click to upload."})}),Object(f.jsx)(L.a,{variant:"contained",color:"default",className:e.uploadBtn,endIcon:Object(f.jsx)(Y.a,{style:{color:"black"}}),onClick:function(){var e=-1!==a[0].data.indexOf("email")?a[0].data.indexOf("email"):-1!==a[0].data.indexOf("emails")?a[0].data.indexOf("emails"):-1;a?-1===e?l({status:!0,msg:"File must contain a column containing emails or email"}):(l({status:!1,msg:null}),b(a,e)):l({status:!0,msg:"Please upload a file"})},disabled:!a||0===a.length||u,children:"ANALYZE & CLEAN"})]})},G=function(){return Object(f.jsxs)(C.a,{container:!0,children:[Object(f.jsx)(C.a,{item:!0,xs:12,sm:6,children:Object(f.jsx)(J.a,{children:Object(f.jsx)(z,{})})}),Object(f.jsx)(C.a,{item:!0,xs:12,sm:6,children:Object(f.jsx)(J.a,{children:Object(f.jsx)(V,{})})})]})};var M=function(){return Object(f.jsxs)(m,{children:[Object(f.jsx)(w,{}),Object(f.jsx)(p.a,{children:Object(f.jsx)(G,{})})]})};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(M,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.da0ac4e1.chunk.js.map