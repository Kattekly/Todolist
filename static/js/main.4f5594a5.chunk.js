(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{101:function(t,e,a){t.exports=a(131)},106:function(t,e,a){},107:function(t,e,a){},131:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(9),o=a.n(i);a(106),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(107);var c,s,l=a(174),u=a(175),d=a(176),f=a(167),p=a(133),m=a(170),b=a(178),h=a(179),v=a(177),k=a(15),g=a(29),j=a(8),E=a.n(j),O=a(21),C=a(82),y=a.n(C).a.create(Object(g.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"1cdd9f77-c60e-4af5-b194-659e4ebd5d41"}})),I=function(){return y.get("todo-lists")},x=function(t){return y.post("todo-lists",{title:t})},w=function(t){return y.delete("todo-lists/".concat(t))},T=function(t,e){return y.put("todo-lists/".concat(t),{title:e})},S=function(t){return y.get("todo-lists/".concat(t,"/tasks"))},A=function(t,e){return y.delete("todo-lists/".concat(t,"/tasks/").concat(e))},L=function(t,e){return y.post("todo-lists/".concat(t,"/tasks"),{title:e})},F=function(t,e,a){return y.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},W=function(t){return y.post("auth/login",t)},V=function(){return y.delete("auth/login")},P=function(){return y.get("auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(c||(c={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(s||(s={}));var N=function(t,e){t.messages.length?e($({error:t.messages[0]})):e($({error:"Some error occurred"})),e(_({status:"failed"}))},D=function(t,e){e($({error:t.message?t.message:"Some error occurred"})),e(_({status:"failed"}))},R=a(16),M=Object(R.b)("auth/login",function(){var t=Object(O.a)(E.a.mark((function t(e,a){var n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(_({status:"loading"})),t.next=3,W(e);case 3:if(n=t.sent,t.prev=4,0!==n.data.resultCode){t.next=9;break}a.dispatch(_({status:"succeeded"})),t.next=11;break;case 9:return N(n.data,a.dispatch),t.abrupt("return",a.rejectWithValue({errors:n.data.messages,fieldsErrors:n.data.fieldsErrors}));case 11:t.next=18;break;case 13:return t.prev=13,t.t0=t.catch(4),r=t.t0,D(r,a.dispatch),t.abrupt("return",a.rejectWithValue({errors:[r.message],fieldsErrors:void 0}));case 18:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e,a){return t.apply(this,arguments)}}()),z=Object(R.b)("auth/logout",function(){var t=Object(O.a)(E.a.mark((function t(e,a){var n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(_({status:"loading"})),t.next=3,V();case 3:if(n=t.sent,t.prev=4,0!==n.data.resultCode){t.next=9;break}a.dispatch(_({status:"succeeded"})),t.next=11;break;case 9:return N(n.data,a.dispatch),t.abrupt("return",a.rejectWithValue({}));case 11:t.next=18;break;case 13:return t.prev=13,t.t0=t.catch(4),r=t.t0,D(r,a.dispatch),t.abrupt("return",a.rejectWithValue({}));case 18:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e,a){return t.apply(this,arguments)}}()),q=Object(R.c)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value}},extraReducers:function(t){t.addCase(M.fulfilled,(function(t){t.isLoggedIn=!0})),t.addCase(z.fulfilled,(function(t){t.isLoggedIn=!1}))}}),B=q.reducer,H=q.actions.setIsLoggedInAC,U=Object(R.b)("app/initializeApp",function(){var t=Object(O.a)(E.a.mark((function t(e,a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,t.next=3,P();case 3:0===t.sent.data.resultCode&&n(H({value:!0}));case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),J=Object(R.c)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatusAC:function(t,e){t.status=e.payload.status},setAppErrorAC:function(t,e){t.error=e.payload.error}},extraReducers:function(t){t.addCase(U.fulfilled,(function(t){t.isInitialized=!0}))}}),K=J.reducer,Y=J.actions,$=Y.setAppErrorAC,_=Y.setAppStatusAC,G=Object(R.b)("todolist/fetchTodolists",function(){var t=Object(O.a)(E.a.mark((function t(e,a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(_({status:"loading"})),t.next=3,I();case 3:return n=t.sent,t.prev=4,a.dispatch(_({status:"succeeded"})),t.abrupt("return",{todolists:n.data});case 9:return t.prev=9,t.t0=t.catch(4),D(t.t0,a.dispatch),t.abrupt("return",a.rejectWithValue({}));case 13:case"end":return t.stop()}}),t,null,[[4,9]])})));return function(e,a){return t.apply(this,arguments)}}()),Q=Object(R.b)("todolist/removeTodolist",function(){var t=Object(O.a)(E.a.mark((function t(e,a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(_({status:"loading"})),a.dispatch(rt({id:e,status:"loading"})),t.next=4,w(e);case 4:return a.dispatch(_({status:"succeeded"})),t.abrupt("return",{id:e});case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),X=Object(R.b)("todolist/addTodolist",function(){var t=Object(O.a)(E.a.mark((function t(e,a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(_({status:"loading"})),t.next=3,x(e);case 3:return n=t.sent,a.dispatch(_({status:"succeeded"})),t.abrupt("return",{todolist:n.data.data.item});case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),Z=Object(R.b)("todolist/changeTodolistTitle",function(){var t=Object(O.a)(E.a.mark((function t(e,a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e.id,e.title);case 2:return t.abrupt("return",{id:e.id,title:e.title});case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),tt=Object(R.c)({name:"todolists",initialState:[],reducers:{changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].entityStatus=e.payload.status}},extraReducers:function(t){t.addCase(G.fulfilled,(function(t,e){return e.payload.todolists.map((function(t){return Object(g.a)(Object(g.a)({},t),{},{filter:"all",entityStatus:"idle"})}))})),t.addCase(Q.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)})),t.addCase(X.fulfilled,(function(t,e){t.unshift(Object(g.a)(Object(g.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))})),t.addCase(Z.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title}))}}),et=tt.reducer,at=tt.actions,nt=at.changeTodolistFilterAC,rt=at.changeTodolistEntityStatusAC,it=Object(R.b)("task/fetchTasks",function(){var t=Object(O.a)(E.a.mark((function t(e,a){var n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(_({status:"loading"})),t.next=3,S(e);case 3:return n=t.sent,r=n.data.items,a.dispatch(_({status:"succeeded"})),t.abrupt("return",{tasks:r,todolistId:e});case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),ot=Object(R.b)("task/removeTask",function(){var t=Object(O.a)(E.a.mark((function t(e,a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e.todolistId,e.taskId);case 2:return t.abrupt("return",{taskId:e.taskId,todolistId:e.todolistId});case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),ct=Object(R.b)("task/addTask",function(){var t=Object(O.a)(E.a.mark((function t(e,a){var n,r,i;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(_({status:"loading"})),t.next=3,L(e.todolistId,e.title);case 3:if(n=t.sent,t.prev=4,0!==n.data.resultCode){t.next=11;break}return r=n.data.data.item,a.dispatch(_({status:"succeeded"})),t.abrupt("return",r);case 11:return N(n.data,a.dispatch),t.abrupt("return",a.rejectWithValue({}));case 13:t.next=20;break;case 15:return t.prev=15,t.t0=t.catch(4),i=t.t0,D(i,a.dispatch),t.abrupt("return",a.rejectWithValue({}));case 20:case"end":return t.stop()}}),t,null,[[4,15]])})));return function(e,a){return t.apply(this,arguments)}}()),st=Object(R.b)("task/updateTask",function(){var t=Object(O.a)(E.a.mark((function t(e,a){var n,r,i,o;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.getState(),r=n.tasks[e.todolistId].find((function(t){return t.id===e.taskId}))){t.next=4;break}return t.abrupt("return",a.rejectWithValue("task not found in the state"));case 4:return i=Object(g.a)({deadline:r.deadline,description:r.description,priority:r.priority,startDate:r.startDate,title:r.title,status:r.status},e.model),t.next=7,F(e.todolistId,e.taskId,i);case 7:if(o=t.sent,t.prev=8,0!==o.data.resultCode){t.next=13;break}return t.abrupt("return",e);case 13:return N(o.data,a.dispatch),t.abrupt("return",a.rejectWithValue({}));case 15:t.next=21;break;case 17:return t.prev=17,t.t0=t.catch(8),D(t.t0,a.dispatch),t.abrupt("return",a.rejectWithValue({}));case 21:case"end":return t.stop()}}),t,null,[[8,17]])})));return function(e,a){return t.apply(this,arguments)}}()),lt=Object(R.c)({name:"tasks",initialState:{},reducers:{},extraReducers:function(t){t.addCase(X.fulfilled,(function(t,e){t[e.payload.todolist.id]=[]})),t.addCase(Q.fulfilled,(function(t,e){delete t[e.payload.id]})),t.addCase(G.fulfilled,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})),t.addCase(it.fulfilled,(function(t,e){t[e.payload.todolistId]=e.payload.tasks})),t.addCase(ot.fulfilled,(function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&a.splice(n,1)})),t.addCase(ct.fulfilled,(function(t,e){t[e.payload.todoListId].unshift(e.payload)})),t.addCase(st.fulfilled,(function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(g.a)(Object(g.a)({},a[n]),e.payload.model))}))}}).reducer,ut=a(171),dt=a(132),ft=a(47),pt=a(180),mt=a(168),bt=r.a.memo((function(t){var e=t.addItem,a=t.disabled,i=void 0!==a&&a;console.log("AddItemForm called");var o=Object(n.useState)(""),c=Object(ft.a)(o,2),s=c[0],l=c[1],u=Object(n.useState)(null),d=Object(ft.a)(u,2),p=d[0],m=d[1],b=function(){""!==s.trim()?(e(s),l("")):m("Title is required")};return r.a.createElement("div",null,r.a.createElement(pt.a,{variant:"outlined",disabled:i,error:!!p,value:s,onChange:function(t){l(t.currentTarget.value)},onKeyPress:function(t){null!==p&&m(null),13===t.charCode&&b()},label:"Title",helperText:p}),r.a.createElement(f.a,{color:"primary",onClick:b,disabled:i},r.a.createElement(mt.a,null)))})),ht=a(89),vt=r.a.memo((function(t){console.log("EditableSpan called");var e=Object(n.useState)(!1),a=Object(ft.a)(e,2),i=a[0],o=a[1],c=Object(n.useState)(t.value),s=Object(ft.a)(c,2),l=s[0],u=s[1];return i?r.a.createElement(pt.a,{value:l,onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.onChange(l)}}):r.a.createElement("span",{onDoubleClick:function(){o(!0),u(t.value)}},t.value)})),kt=a(169),gt=a(182),jt=r.a.memo((function(t){var e=Object(n.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(n.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?c.Completed:c.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return r.a.createElement("div",{key:t.task.id,className:t.task.status===c.Completed?"is-done":""},r.a.createElement(gt.a,{checked:t.task.status===c.Completed,color:"primary",onChange:a}),r.a.createElement(vt,{value:t.task.title,onChange:i}),r.a.createElement(f.a,{onClick:e},r.a.createElement(kt.a,null)))})),Et=r.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,i=Object(ht.a)(t,["demo"]);console.log("Todolist called");var o=Object(k.b)();Object(n.useEffect)((function(){if(!a){var t=it(i.todolist.id);o(t)}}),[]);var s=Object(n.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),l=Object(n.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),u=Object(n.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),d=Object(n.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),p=Object(n.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===c.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===c.Completed}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(vt,{value:i.todolist.title,onChange:l}),r.a.createElement(f.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus},r.a.createElement(kt.a,null))),r.a.createElement(bt,{addItem:s,disabled:"loading"===i.todolist.entityStatus}),r.a.createElement("div",null,b.map((function(t){return r.a.createElement(jt,{key:t.id,task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus})}))),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(m.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:u,color:"default"},"All"),r.a.createElement(m.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:d,color:"primary"},"Active"),r.a.createElement(m.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:p,color:"secondary"},"Completed")))})),Ot=a(14),Ct=function(t){var e=t.demo,a=void 0!==e&&e,i=Object(k.c)((function(t){return t.todolists})),o=Object(k.c)((function(t){return t.tasks})),c=Object(k.c)((function(t){return t.auth.isLoggedIn})),s=Object(k.b)();Object(n.useEffect)((function(){if(!a&&c){var t=G();s(t)}}),[]);var l=Object(n.useCallback)((function(t,e){var a=ot({taskId:t,todolistId:e});s(a)}),[]),u=Object(n.useCallback)((function(t,e){var a=ct({title:t,todolistId:e});s(a)}),[]),d=Object(n.useCallback)((function(t,e,a){var n=st({taskId:t,model:{status:e},todolistId:a});s(n)}),[]),f=Object(n.useCallback)((function(t,e,a){var n=st({taskId:t,model:{title:e},todolistId:a});s(n)}),[]),p=Object(n.useCallback)((function(t,e){var a=nt({id:e,filter:t});s(a)}),[]),m=Object(n.useCallback)((function(t){var e=Q(t);s(e)}),[]),b=Object(n.useCallback)((function(t,e){var a=Z({id:t,title:e});s(a)}),[]),h=Object(n.useCallback)((function(t){var e=X(t);s(e)}),[s]);return c?r.a.createElement(r.a.Fragment,null,r.a.createElement(ut.a,{container:!0,style:{padding:"20px"}},r.a.createElement(bt,{addItem:h})),r.a.createElement(ut.a,{container:!0,spacing:3},i.map((function(t){var e=o[t.id];return r.a.createElement(ut.a,{item:!0,key:t.id},r.a.createElement(dt.a,{style:{padding:"10px"}},r.a.createElement(Et,{todolist:t,tasks:e,removeTask:l,changeFilter:p,addTask:u,changeTaskStatus:d,removeTodolist:m,changeTaskTitle:f,changeTodolistTitle:b,demo:a})))})))):r.a.createElement(Ot.a,{to:"/login"})},yt=a(184),It=a(181);function xt(t){return r.a.createElement(It.a,Object.assign({elevation:6,variant:"filled"},t))}function wt(){var t=Object(k.c)((function(t){return t.app.error})),e=Object(k.b)(),a=function(t,a){"clickaway"!==a&&e($({error:null}))},n=null!==t;return r.a.createElement(yt.a,{open:n,autoHideDuration:6e3,onClose:a},r.a.createElement(xt,{onClose:a,severity:"error"},t))}var Tt=a(185),St=a(166),At=a(172),Lt=a(173),Ft=a(88),Wt=a(25),Vt=a(50),Pt=Object(Wt.c)({tasks:lt,todolists:et,app:K,auth:B}),Nt=Object(R.a)({reducer:Pt,middleware:function(t){return t().prepend(Vt.a)}});window.store=Nt;var Dt=function(){var t=Object(k.b)(),e=Object(k.c)((function(t){return t.auth.isLoggedIn})),a=Object(Ft.a)({validate:function(t){return t.email?t.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(){var e=Object(O.a)(E.a.mark((function e(a,n){var r,i,o,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(M(a));case 2:r=e.sent,M.rejected.match(r)&&(null===(i=r.payload)||void 0===i||null===(o=i.fieldsErrors)||void 0===o?void 0:o.length)&&(c=r.payload.fieldsErrors[0],n.setFieldError(c.field,c.error));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()});return e?r.a.createElement(Ot.a,{to:"/"}):r.a.createElement(ut.a,{container:!0,justify:"center"},r.a.createElement(ut.a,{item:!0,xs:4},r.a.createElement("form",{onSubmit:a.handleSubmit},r.a.createElement(Tt.a,null,r.a.createElement(St.a,null,r.a.createElement("p",null,"To log in get registered ",r.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),r.a.createElement("p",null,"or use common test account credentials:"),r.a.createElement("p",null," Email: free@samuraijs.com"),r.a.createElement("p",null,"Password: free")),r.a.createElement(At.a,null,r.a.createElement(pt.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?r.a.createElement("div",null,a.errors.email):null,r.a.createElement(pt.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?r.a.createElement("div",null,a.errors.password):null,r.a.createElement(Lt.a,{label:"Remember me",control:r.a.createElement(gt.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),r.a.createElement(m.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))};var Rt=function(t){var e=t.demo,a=void 0!==e&&e,i=Object(k.c)((function(t){return t.app.status})),o=Object(k.c)((function(t){return t.app.isInitialized})),c=Object(k.c)((function(t){return t.auth.isLoggedIn})),s=Object(k.b)();Object(n.useEffect)((function(){a||s(U())}),[]);var g=Object(n.useCallback)((function(){s(z())}),[]);return o?r.a.createElement("div",{className:"App"},r.a.createElement(wt,null),r.a.createElement(u.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(v.a,null)),r.a.createElement(p.a,{variant:"h6"},"News"),c&&r.a.createElement(m.a,{color:"inherit",onClick:g},"Log out")),"loading"===i&&r.a.createElement(b.a,null)),r.a.createElement(h.a,{fixed:!0},r.a.createElement(Ot.b,{exact:!0,path:"/",render:function(){return r.a.createElement(Ct,{demo:a})}}),r.a.createElement(Ot.b,{path:"/login",render:function(){return r.a.createElement(Dt,null)}}))):r.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},r.a.createElement(l.a,null))},Mt=a(49);o.a.render(r.a.createElement(k.a,{store:Nt},r.a.createElement(Mt.a,null,r.a.createElement(Rt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.4f5594a5.chunk.js.map