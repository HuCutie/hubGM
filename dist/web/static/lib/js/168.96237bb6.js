"use strict";(self["webpackChunkvue3_template"]=self["webpackChunkvue3_template"]||[]).push([[168],{2910:function(a,e,t){t.d(e,{F:function(){return n}});var l=t(1036);const n=a=>l.s.confirm(a,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})},7028:function(a,e,t){t.r(e),t.d(e,{default:function(){return C}});var l=t(6768),n=t(144),r=t(9850),d=t(2900),o=t(618),u=t(920),i=t(4232),s=t(2910),c=t(9408);const g=a=>c.L.request({url:`/gm/roles/${a}/tasks`,method:"get"}),p=(a,e)=>c.L.request({url:`/gm/roles/${a}/tasks`,method:"put",data:e});var b=t(8515),f=t(9796);const k=(0,l.Lk)("span",{class:"text-warning sm"},"注：觉醒任务无法完成，需要手动，或者使用 觉醒秘籍",-1);var _=(0,l.pM)({__name:"TaskDetail",props:{data:{type:Array,required:!0,default:()=>[]},loading:{type:Boolean,required:!0,default:!1}},emits:["reloadTask"],setup(a,{expose:e,emit:t}){const r=(0,n.KR)([]),d=(0,n.KR)(null),o=a=>{r.value=a},u=async()=>{try{if(await(0,s.F)("是否批量完成任务？"),!d.value)return void(0,b.gJ)("未获取到角色ID");const a=(0,f.$v)(r.value,"play_1");await p(d.value,{ids:a}),(0,b.Jl)("批量更新成功！"),t("reloadTask")}catch(a){}},c=a=>{d.value=a},g=a=>0!==a.play_1_trigger;return e({setCharacNo:c}),(e,t)=>{const n=(0,l.g2)("el-row"),d=(0,l.g2)("el-button"),s=(0,l.g2)("el-table-column"),c=(0,l.g2)("el-table"),p=(0,l.gN)("loading");return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.bF)(n,null,{default:(0,l.k6)((()=>[k])),_:1}),(0,l.bF)(n,null,{default:(0,l.k6)((()=>[(0,l.bF)(d,{type:"primary",size:"small",onClick:u,disabled:!r.value.length},{default:(0,l.k6)((()=>[(0,l.eW)("批量完成 ")])),_:1},8,["disabled"])])),_:1}),(0,l.bo)(((0,l.uX)(),(0,l.Wv)(c,{data:a.data,ref:"tableRef",border:"",onSelectionChange:o},{default:(0,l.k6)((()=>[(0,l.bF)(s,{type:"selection",width:"55",selectable:g}),(0,l.bF)(s,{prop:"play_1",label:"任务ID",width:"180"}),(0,l.bF)(s,{prop:"play_1_trigger",label:"是否已完成",width:"180"},{default:(0,l.k6)((a=>[(0,l.Lk)("span",null,(0,i.v_)(a.row.play_1_trigger?"未完成":"已完成"),1)])),_:1}),(0,l.bF)(s,{prop:"charac_no",label:"角色编号"})])),_:1},8,["data"])),[[p,a.loading]])])}}});const v=_;var h=v,y=t(2731);const m={class:"tc-step-border"},F={class:"l"};var R=(0,l.pM)({__name:"index",setup(a){const e=(0,n.Kh)({data:[],loading:!1}),t=(0,n.Kh)({data:[],loading:!1}),i=(0,n.KR)(null),s=(0,n.KR)(null),c=()=>{e.data=[],t.data=[],s.value.resetCharacNo()},p=async a=>{c();try{e.loading=!0,e.data=await(0,y.O0)(a),e.loading=!1}catch(t){e.loading=!1}};let f=null;const k=async a=>{if(a){f=a;try{t.loading=!0,t.data=await g(a),i.value.setCharacNo(a),t.loading=!1}catch(e){t.loading=!1}}else(0,b.OW)("请选择角色")},_=()=>{k(f)};return(a,c)=>((0,l.uX)(),(0,l.CE)("div",null,[(0,l.bF)((0,n.R1)(r.A),{title:"任务清理"}),(0,l.Lk)("div",m,[(0,l.Lk)("div",F,[(0,l.bF)((0,n.R1)(d.A),{num:"1",title:"账号选择"},{default:(0,l.k6)((()=>[(0,l.bF)((0,n.R1)(o.A),{onSetUid:p})])),_:1}),(0,l.bF)((0,n.R1)(d.A),{num:"2",title:"角色选择"},{default:(0,l.k6)((()=>[(0,l.bF)((0,n.R1)(u.A),{ref_key:"roleTableRef",ref:s,loading:e.loading,data:e.data,onSetCharacNo:k},null,8,["loading","data"])])),_:1}),(0,l.bF)((0,n.R1)(d.A),{num:"3",title:"任务详情","is-last":""},{default:(0,l.k6)((()=>[(0,l.bF)((0,n.R1)(h),{ref_key:"taskRef",ref:i,loading:t.loading,data:t.data,onReloadTask:_},null,8,["loading","data"])])),_:1})])])]))}});const w=R;var C=w}}]);