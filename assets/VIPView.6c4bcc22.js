import{d as m,r as c,u as _,c as a,F as g,a as h,b as v,e,o as p,w as n,v as o,f as y}from"./index.683d41f9.js";const f={class:"shipping-form-view"},b=e("h1",null,"Have jersey",-1),V={class:"shipping-form-container"},x={class:"shipping-form"},U={class:"form-group"},z=e("label",{for:"shipping-name"},"Name",-1),S={class:"form-group"},w=e("label",{for:"shipping-street-address1"},"Address1",-1),B={class:"form-group"},k=e("label",{for:"shipping-city"},"City",-1),C={class:"form-group"},D=e("label",{for:"shipping-state"},"State",-1),I={class:"form-group"},N=e("label",{for:"shipping-zip"},"Zip",-1),j={class:"form-group"},A=e("label",{for:"shipping-country"},"Country",-1),T=m({__name:"VIPView",setup(E){const{collection:l,doc:F,setDoc:H,addDoc:r}=y,t=c({name:"",address1:"",city:"",state:"",zip:"",country:""}),d=_(),u=()=>{console.log("HANDLE SUBMIT"),r(l("tester1"),t.value),Object.assign(t.value,{name:"",address1:"",city:"",state:"",zip:"",country:""})};return(L,s)=>(p(),a("div",f,[b,(p(!0),a(g,null,h(v(d).user.mi777Balance,M=>(p(),a("div",V,[e("form",x,[e("div",U,[z,n(e("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>t.value.name=i),type:"text",name:"shipping-name",id:"shipping-name"},null,512),[[o,t.value.name]])]),e("div",S,[w,n(e("input",{"onUpdate:modelValue":s[1]||(s[1]=i=>t.value.address1=i),type:"text",name:"shipping-street-address1",id:"shipping-street-address1"},null,512),[[o,t.value.address1]])]),e("div",B,[k,n(e("input",{"onUpdate:modelValue":s[2]||(s[2]=i=>t.value.city=i),type:"text",name:"shipping-city",id:"shipping-city"},null,512),[[o,t.value.city]])]),e("div",C,[D,n(e("input",{"onUpdate:modelValue":s[3]||(s[3]=i=>t.value.state=i),type:"text",name:"shipping-state",id:"shipping-state"},null,512),[[o,t.value.state]])]),e("div",I,[N,n(e("input",{"onUpdate:modelValue":s[4]||(s[4]=i=>t.value.zip=i),type:"text",name:"shipping-zip",id:"shipping-zip"},null,512),[[o,t.value.zip]])]),e("div",j,[A,n(e("input",{"onUpdate:modelValue":s[5]||(s[5]=i=>t.value.country=i),type:"text",name:"shipping-country",id:"shipping-country"},null,512),[[o,t.value.country]])]),e("div",{class:"form-group"},[e("input",{onClick:u,type:"button",name:"shipping-submit",id:"shipping-submit",value:"Submit"})])])]))),256))]))}});export{T as default};