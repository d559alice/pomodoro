(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"19f5":function(e,a,t){},"26d3":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"overflow-auto",attrs:{id:"settings"}},[t("b-table",{attrs:{items:e.items,fields:e.fields,id:"my-table","per-page":e.perPage,"current-page":e.currentPage,small:""},on:{"row-clicked":e.selectAlarm},scopedSlots:e._u([{key:"cell(preview)",fn:function(e){return[t("audio",{attrs:{controls:"",src:"./alarms/"+e.item.file}})]}},{key:"cell(select)",fn:function(a){return[a.item.file==e.alarm?t("font-awesome-icon",{attrs:{icon:["fas","check"]}}):e._e()]}}])}),t("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"my-table",id:"pagination",align:"center"},model:{value:e.currentPage,callback:function(a){e.currentPage=a},expression:"currentPage"}})],1)},r=[],l={data:function(){return{perPage:4,currentPage:1,items:[{name:"鬧鈴01",file:"alarm_01.mp3"},{name:"鬧鈴02",file:"alarm_02.wav"},{name:"鬧鈴03",file:"alarm_03.wav"},{name:"bird",file:"bird.wav"},{name:"cat",file:"cat.wav"},{name:"chicken",file:"chicken.mp3"},{name:"cow",file:"cow.wav"},{name:"dog",file:"dog.wav"}],fields:[{key:"name",label:"名稱"},{key:"preview",label:"預覽"},{key:"select",label:"選擇"}]}},computed:{alarm:function(){return this.$store.getters.alarm},rows:function(){return this.items.length}},methods:{selectAlarm:function(e){this.$store.commit("selectAlarm",e.file)}}},i=l,c=(t("b04a"),t("2877")),s=Object(c["a"])(i,n,r,!1,null,null,null);a["default"]=s.exports},b04a:function(e,a,t){"use strict";var n=t("19f5"),r=t.n(n);r.a}}]);
//# sourceMappingURL=settings.41848d65.js.map