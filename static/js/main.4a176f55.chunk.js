(this["webpackJsonptool-do-list"]=this["webpackJsonptool-do-list"]||[]).push([[0],{122:function(t,e,n){},123:function(t,e,n){},132:function(t,e){},134:function(t,e){},144:function(t,e){},146:function(t,e){},173:function(t,e){},175:function(t,e){},176:function(t,e){},181:function(t,e){},183:function(t,e){},189:function(t,e){},191:function(t,e){},210:function(t,e){},222:function(t,e){},225:function(t,e){},231:function(t,e,n){"use strict";n.r(e);var s=n(5),a=n.n(s),c=n(116),i=n.n(c),o=(n(122),n(7)),r=n(8),l=n(10),d=n(9),u=(n(123),n(15)),j=n(0),b=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).closeForm=function(){s.props.getIsDidlayFrom()},s.onChange=function(t){var e=t.target.name,n=t.target.value;if("status"===e)n="true"===t.target.value;s.setState(Object(u.a)({},e,n))},s.onSubmit=function(t){t.preventDefault(),s.props.getdata(s.state),s.closeForm()},s.onClose=function(){s.setState({name:"",status:!0})},s.state={name:"",status:!0,id:""},s}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.taskEditing&&this.setState({id:this.props.taskEditing.id,name:this.props.taskEditing.name,status:this.props.taskEditing.status})}},{key:"componentWillReceiveProps",value:function(t){t&&t.taskEditing?this.setState({id:t.taskEditing.id,name:t.taskEditing.name,status:t.taskEditing.status}):t.taskEditing||this.setState({name:"",status:!0,id:""})}},{key:"render",value:function(){var t=this,e=this.state.id;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-header",children:Object(j.jsxs)("p",{children:[""==e?"Th\xeam C\xf4ng vi\u1ec7c":"C\u1eadp nh\u1eadt C\xf4ng vi\u1ec7c"," ",Object(j.jsx)("i",{className:"fas fa-times-circle",onClick:function(){return t.closeForm(!0)}})]})}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"T\xean:"}),Object(j.jsx)("input",{type:"text",className:"form-control",name:"name",id:"",placeholder:"",onChange:this.onChange,value:this.state.name})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Tr\u1ea1ng Th\xe1i:"}),Object(j.jsxs)("select",{className:"form-control",required:"required",name:"status",value:this.state.status,onChange:this.onChange,children:[Object(j.jsx)("option",{value:!0,children:"K\xedch Ho\u1ea1t"}),Object(j.jsx)("option",{value:!1,children:"\u1ea8n"})]})]}),Object(j.jsxs)("div",{className:"btn-group",children:[Object(j.jsxs)("button",{type:"submit",className:"btn btn-primary",children:[Object(j.jsx)("i",{className:"fa fa-save"}),"L\u01b0u L\u1ea1i"]}),Object(j.jsxs)("button",{type:"button",className:"btn btn-error",onClick:this.onClose,children:[Object(j.jsx)("i",{className:"fas fa-window-close"}),"H\u1ee7y B\u1ecf"]})]})]})})]})})}}]),n}(s.Component),h=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).onChange=function(t){var e=t.target.name,n=t.target.value;s.setState(Object(u.a)({},e,n))},s.onClick=function(){s.props.keywords(s.state)},s.state={keywords:""},s}return Object(r.a)(n,[{key:"render",value:function(){var t,e=this.state.keywords;return Object(j.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-6 col-xs-6",children:Object(j.jsx)("div",{className:"form-group",children:Object(j.jsxs)("div",{className:"input-group mt-2",children:[Object(j.jsx)("input",(t={type:"text",className:"form-control",name:"",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a ..."},Object(u.a)(t,"name","keywords"),Object(u.a)(t,"value",e),Object(u.a)(t,"onChange",this.onChange),t)),Object(j.jsx)("div",{className:"input-group-append",children:Object(j.jsxs)("button",{className:"btn btn-primary",type:"button",onClick:this.onClick,children:[Object(j.jsx)("i",{className:"far fa-search"}),"T\xecm Ki\u1ebfm"]})})]})})})}}]),n}(s.Component),m=n(61),p=n.n(m),f=n(117),O=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).sort=function(){var t=Object(f.a)(p.a.mark((function t(e,n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.setState({sortby:e,sortstatus:n});case 2:s.props.sort(s.state);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),s.state={sortby:"",sortstatus:-1},s}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-6 col-xs-6 mt-2",children:Object(j.jsxs)("div",{className:"btn-group",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-secondary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"S\u1eafp X\u1ebfp"}),Object(j.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[Object(j.jsx)("button",{className:"dropdown-item",type:"button",onClick:function(){t.sort("name",1)},children:Object(j.jsx)("a",{role:"button",children:Object(j.jsx)("span",{className:"fa fa-sort-alpha-asc pr-5",children:"T\xean A-Z"})})}),Object(j.jsx)("button",{className:"dropdown-item",type:"button",onClick:function(){t.sort("name",-1)},children:Object(j.jsx)("a",{role:"button",children:Object(j.jsx)("span",{className:"fa fa-sort-alpha-desc pr-5",children:"T\xean Z-A"})})}),Object(j.jsx)("button",{className:"dropdown-item",type:"button",onClick:function(){t.sort("status",1)},children:Object(j.jsx)("a",{role:"button",children:"Tr\u1ea1ng Th\xe1i K\xedch Ho\u1ea1t"})}),Object(j.jsx)("button",{className:"dropdown-item",type:"button",onClick:function(){t.sort("status",-1)},children:Object(j.jsx)("a",{role:"button",children:"Tr\u1ea1ng Th\xe1i \u1ea8n"})})]})]})})}}]),n}(s.Component),g=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(h,{keywords:this.props.keywords}),Object(j.jsx)(O,{sort:this.props.sort})]})}}]),n}(s.Component),x=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).onSpan=function(){s.props.onSpan(s.props.value.id)},s.onDelete=function(){s.props.onDelete(s.props.value.id)},s.onEditing=function(){s.props.onEditing(s.props.value.id)},s}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.value,n=t.index;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:n+1}),Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{className:"text-center",children:e.status?Object(j.jsx)("span",{className:"badge badge-success",onClick:this.onSpan,children:"Kich ho\u1ea1t"}):Object(j.jsx)("span",{onClick:this.onSpan,className:"badge badge-secondary",children:"\u1ea8n"})}),Object(j.jsxs)("td",{className:"text-center",children:[Object(j.jsxs)("button",{type:"button",className:"btn btn-warning",onClick:this.onEditing,children:[Object(j.jsx)("span",{className:"fa fa-pencil mr-5"}),"S\u1eeda"]}),"\xa0",Object(j.jsxs)("button",{type:"button",className:"btn btn-danger",onClick:this.onDelete,children:[Object(j.jsx)("span",{className:"fa fa-trash mr-5"}),"X\xf3a"]})]})]})}}]),n}(s.Component),v=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).onChange=function(t){var e=t.target.name,n=t.target.value;s.props.onFilter("filtername"==e?n:s.state.filtername,"filterStatus"==e?n:s.state.filterStatus),s.setState(Object(u.a)({},e,n))},s.state={filtername:"",filterStatus:-1},s}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.props.task.map((function(e,n){return Object(j.jsx)(x,{index:n,value:e,onSpan:t.props.onSpan,onDelete:t.props.onDelete,onEditing:t.props.onEditing},n)}));return Object(j.jsx)("div",{className:"row mt-15",children:Object(j.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:Object(j.jsxs)("table",{className:"table table-bordered table-hover",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"text-center",children:"STT"}),Object(j.jsx)("th",{className:"text-center",children:"T\xean"}),Object(j.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng Th\xe1i"}),Object(j.jsx)("th",{className:"text-center",children:"H\xe0nh \u0110\u1ed9ng"})]})}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",className:"form-control",name:"filtername",onChange:this.onChange,value:this.state.filtername})}),Object(j.jsx)("td",{children:Object(j.jsxs)("select",{className:"form-control",name:"filterStatus",onChange:this.onChange,children:[Object(j.jsx)("option",{value:-1,children:"T\u1ea5t C\u1ea3"}),Object(j.jsx)("option",{value:0,children:"\u1ea8n"}),Object(j.jsx)("option",{value:1,children:"K\xedch Ho\u1ea1t"})]})}),Object(j.jsx)("td",{})]}),e]})]})})})}}]),n}(s.Component),k=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(o.a)(this,s),(a=e.call(this,t)).getGender=function(){console.log("gendenr");var t=n(62),e=[{id:t.generate(),name:"H\u1ecdc l\u1eadp tr\xecnh Js",status:!1},{id:t.generate(),name:"H\u1ecdc l\u1eadp tr\xecnh ReactJs",status:!0},{id:t.generate(),name:"H\u1ecdc l\u1eadp tr\xecnh",status:!1}];a.setState({task:e}),localStorage.setItem("task",JSON.stringify(e))},a.addTask=function(){a.state.isDisplayForm&&null!==a.state.taskEditing?a.setState({isDisplayForm:!0,taskEditing:null}):a.setState({isDisplayForm:!0})},a.getIsDidlayFrom=function(){a.setState({isDisplayForm:!1})},a.getdata=function(t){var e=a.state.task,s=n(62);if(""===t.id)t.id=s.generate(),e.push(t);else{console.log(t.id);for(var c=0;c<e.length;c++)t.id===e[c].id&&(e[c]=t)}a.setState({task:e,taskEditing:null}),localStorage.setItem("task",JSON.stringify(e))},a.onSpan=function(t){for(var e=a.state.task,n=0;n<e.length;n++)e[n].id===t&&(e[n].status=!e[n].status,a.setState({task:e}));localStorage.setItem("task",JSON.stringify(e))},a.onDelete=function(t){for(var e=a.state.task,n=0;n<e.length;n++)e[n].id===t&&(e.splice(e[n],1),a.setState({task:e}));localStorage.setItem("task",JSON.stringify(e)),a.getIsDidlayFrom()},a.onEditing=function(t){a.addTask();for(var e=a.state.task,n=0;n<e.length;n++)if(e[n].id===t){var s=e[n];a.setState({taskEditing:s})}},a.onFilter=function(t,e){e=+e,t=t.toLowerCase();a.setState({fliter:{name:t,status:e}})},a.keywords=function(t){a.setState({keywords:t.keywords})},a.sort=function(t){a.setState({sortby:t.sortby,sortstatus:t.sortstatus})},a.state={task:[],isDisplayForm:!1,taskEditing:null,fliter:{name:"",status:-1},keyboard:"",sortby:"",sortstatus:-1},a}return Object(r.a)(s,[{key:"componentDidMount",value:function(){localStorage&&localStorage.getItem("task")&&this.setState({task:JSON.parse(localStorage.getItem("task"))})}},{key:"render",value:function(){console.log(this.state);var t=this.state,e=t.task,n=t.isDisplayForm,s=t.taskEditing,a=t.fliter,c=t.keywords,i=t.sortby,o=t.sortstatus;a&&(a.name&&(e=e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(a.name)}))),e=e.filter((function(t){return-1===a.status?t:t.status===(1===a.status)}))),c&&(e=e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(c.toLowerCase())}))),"name"===i?e.sort((function(t,e){return t.name>e.name?o:t.name<e.name?-o:0})):e.sort((function(t,e){return t.status<e.status?o:t.status>e.status?-o:0}));var r=n?Object(j.jsx)(b,{getIsDidlayFrom:this.getIsDidlayFrom,getdata:this.getdata,taskEditing:s}):"";return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Qu\u1ea3n L\xfd C\xf4ng Vi\u1ec7c"}),Object(j.jsxs)("div",{className:"row mt-5",children:[Object(j.jsx)("div",{className:n?"col-sm-4 col-md-4 col-lg-4 col-xs-4":"",children:r}),Object(j.jsxs)("div",{className:n?"col-sm-8 col-md-8 col-lg-8 col-xs-8":"col-sm-12 col-md-12 col-lg-12 col-xs-12",children:[Object(j.jsxs)("button",{type:"button",className:"btn btn-primary",name:"add",onClick:this.addTask,children:[Object(j.jsx)("i",{className:"fas fa-plus"}),"Th\xeam C\xf4ng vi\u1ec7c"]}),Object(j.jsx)("button",{type:"button",className:"btn btn-gender ml-2",name:"add",onClick:this.getGender,children:"GetGender"}),Object(j.jsx)(g,{keywords:this.keywords,sort:this.sort}),Object(j.jsx)(v,{task:e,onSpan:this.onSpan,onDelete:this.onDelete,onEditing:this.onEditing,onFilter:this.onFilter})]})]})]})}}]),s}(s.Component),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,232)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),s(t),a(t),c(t),i(t)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),y()}},[[231,1,2]]]);
//# sourceMappingURL=main.4a176f55.chunk.js.map