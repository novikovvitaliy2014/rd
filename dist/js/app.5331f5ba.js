(function(e){function t(t){for(var s,n,o=t[0],c=t[1],l=t[2],d=0,m=[];d<o.length;d++)n=o[d],i[n]&&m.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},i={app:0},r=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/aw/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0cfb":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=a("ce5b"),r=a.n(i),n=(a("db4d"),a("bf40"),a("c0a4")),o=a.n(n);s["default"].use(r.a,{theme:{primary:o.a.green.darken1,secondary:o.a.green.lighten4,warning:"#FFF"}});var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("app-header"),a("router-view"),a("app-footer")],1)},l=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[a("div",{staticClass:"header__top"},[a("router-link",{attrs:{to:"/"}},[a("logo")],1),a("nav",[a("ul",[a("router-link",{attrs:{to:"/users",tag:"li"}},[e._v("\n        Users\n        ")]),a("router-link",{attrs:{to:"/",tag:"li"}},[e._v("\n        Courses\n        ")])],1)])],1)])},d=[],m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logo"},[a("a",{staticClass:"logo__link",attrs:{href:"#"}},[e._v("Test for You")])])}],g=a("2877"),f={},v=Object(g["a"])(f,m,h,!1,null,null,null),p=v.exports,b={components:{Logo:p}},C=b,S=Object(g["a"])(C,u,d,!1,null,null,null),x=S.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer__content"},[a("router-link",{attrs:{to:"/"}},[a("logo")],1)],1)])},P=[],k={components:{Logo:p}},w=k,y=Object(g["a"])(w,_,P,!1,null,null,null),O=y.exports,A={components:{"app-header":x,"app-footer":O}},E=A,N=(a("cf25"),Object(g["a"])(E,c,l,!1,null,null,null)),I=N.exports,U=a("f499"),j=a.n(U),R=(a("7f7f"),a("7514"),a("2f62")),L=[{name:"Tom Johns",email:"1@mail.com",status:"Active"},{name:"Lee Smith",email:"2@mail.com",status:"Active"},{name:"Julie Orlando",email:"3@mail.com",status:"inActive"},{name:"Robert Ericsson",email:"4@mail.com",status:"inActive"},{name:"Tom Johns",email:"5@mail.com",status:"Active"},{name:"Lee Smith",email:"6@mail.com",status:"Active"},{name:"Julie Orlando",email:"7@mail.com",status:"inActive"},{name:"Robert Ericsson",email:"8@mail.com",status:"inActive"},{name:"Tom Johns",email:"9@mail.com",status:"Active"},{name:"Lee Smith",email:"10@mail.com",status:"Active"},{name:"Julie Orlando",email:"11@mail.com",status:"inActive"},{name:"Robert Ericsson",email:"12@mail.com",status:"inActive"},{name:"Lee Smith",email:"13@mail.com",status:"Active"},{name:"Julie Orlando",email:"14@mail.com",status:"inActive"},{name:"Robert Ericsson",email:"15@mail.com",status:"inActive"},{name:"Robert Ericsson",email:"16@mail.com",status:"inActive"}],$=[{name:"Python Base",code:2457755},{name:"Python Base",code:1577755},{name:"Jawa Base",code:20888},{name:"Vue Base",code:200669},{name:"Jawa Base",code:22115},{name:"PHP Base",code:245757},{name:"PHP Base",code:157776},{name:"React Base",code:20088},{name:"Jawa Base",code:20066},{name:"JawaScript Base",code:2211},{name:"Python Base",code:24567},{name:"Python Base",code:1577},{name:"Jawa Base",code:200888},{name:"Jawa Base",code:200664},{name:"Jawa Base",code:221311}],D={courses:[]},J={setDataCourses:function(e){var t=JSON.parse(localStorage.getItem("storage_courses"));e.courses=t||$},updateCourse:function(e,t){var a=e.courses.find(function(e){return e.code===t.code});t.name&&(a.name=t.name),t.email&&(a.code=t.code),localStorage.setItem("storage_courses",j()(e.courses))},addCoursesData:function(e,t){e.courses.splice(0,0,t),localStorage.setItem("storage_courses",j()(e.courses))}},T={initDataCourses:function(e){var t=e.commit;t("setDataCourses",$)},updateCoursesData:function(e,t){var a=e.commit;a("updateCourse",t)},addCoursesData:function(e,t){var a=e.commit;a("addCoursesData",t)}},B={getCourses:function(e){return e.courses}},F={state:D,actions:T,mutations:J,getters:B};s["default"].use(R["a"]);var Z=new R["a"].Store({state:{users:[]},mutations:{setData:function(e){var t=JSON.parse(localStorage.getItem("storage_update"));e.users=t||L},updateUser:function(e,t){var a=e.users.find(function(e){return e.email===t.email});t.name&&(a.name=t.name),t.email&&(a.email=t.email),t.status&&(a.status=t.status),localStorage.setItem("storage_update",j()(e.users))},addUsersData:function(e,t){e.users.splice(0,0,t),localStorage.setItem("storage_update",j()(e.users))}},actions:{initData:function(e){var t=e.commit;t("setData",L)},updateUsersData:function(e,t){var a=e.commit;a("updateUser",t)},addUsersData:function(e,t){var a=e.commit;a("addUsersData",t)}},getters:{getUsers:function(e){return e.users}},modules:{courses:F}}),M=Z,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"courses"},[a("h1",[e._v("courses")]),a("div",{staticClass:"search"},[a("v-text-field",{staticClass:"lightgrey",attrs:{label:"Case unsensitive search","prepend-icon":"search",light:"",flat:"","solo-inverted":"","hide-details":""},on:{input:e.searchResults},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}})],1),a("section",{staticClass:"settings"},[a("app-dialog-courses",{on:{upgradeCourses:e.changePagination}}),a("div",{staticClass:"select-pages"},[a("v-select",{attrs:{items:e.items,label:"Select the items quantity"},on:{input:e.changePagination},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),a("section",{staticClass:"settings"},[a("div",{staticClass:"settings__select"},[a("v-select",{attrs:{items:e.itemsSort,label:"Sort by alphabet"},on:{change:e.sortAlphabet},model:{value:e.selectedSort,callback:function(t){e.selectedSort=t},expression:"selectedSort"}})],1),a("div",{staticClass:"settings__select"},[a("v-select",{attrs:{items:e.itemsCode,label:"Sort by Code"},on:{change:e.sortCode},model:{value:e.selectedStatus,callback:function(t){e.selectedStatus=t},expression:"selectedStatus"}})],1)]),a("section",{staticClass:"table"},e._l(e.coursesPage,function(t,s){return a("div",{key:t.code},[a("div",{staticClass:"course__row"},[a("div",{staticClass:"course__cell"},[e._v(e._s(t.name))]),a("div",{staticClass:"course__cell"},[e._v(e._s(t.code))]),a("div",{staticClass:"course__buttons"},[a("app-dialog-edit-courses",{attrs:{course:t}}),a("v-icon",{staticClass:"delete-icon",attrs:{color:"green"},on:{click:function(t){return e.deleteCourse(s)}}},[e._v("fas fa-trash-alt")])],1)])])}),0),a("v-pagination",{staticClass:"pagination",attrs:{length:e.totalPages,circle:"","total-visible":5},on:{input:e.changePagination},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)},H=[],V=(a("96cf"),a("3b8d")),Y=(a("55dd"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{staticClass:"dialog",attrs:{row:"","justify-start":""}},[a("v-dialog",{attrs:{"max-width":"350px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-btn",e._g({staticClass:"add-button",attrs:{small:"",dark:"",color:"green"},on:{click:e.clearFields}},s),[e._v("Add Course\n      ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Course Profile")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Course name",rules:e.nameRules},model:{value:e.addName,callback:function(t){e.addName=t},expression:"addName"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Course code",rules:e.nameRules},model:{value:e.addCode,callback:function(t){e.addCode=t},expression:"addCode"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),a("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:e.onSaveAdd}},[e._v("Save")])],1)],1)],1)],1)}),z=[],G={data:function(){return{dialog:!1,addName:"",addCode:"",nameRules:[function(e){return!!e||"Enter your name"},function(e){return e&&e.length>=3||"Name must be at least 3 characters"}]}},methods:{onSaveAdd:function(){""!==this.addName.trim()&&""!==this.addCode.trim()&&(this.dialog=!1,this.$store.dispatch("addCoursesData",{name:this.addName,code:this.addCode}),this.$emit("upgradeCourses"))},clearFields:function(){this.addName="",this.addCode=""}}},K=G,Q=Object(g["a"])(K,Y,z,!1,null,null,null),W=Q.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{"max-width":"350px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-icon",e._g({staticClass:"add-button",attrs:{color:"green"},on:{click:e.clearFields}},s),[e._v("edit\n      ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Edit Course")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Course name"},model:{value:e.editedName,callback:function(t){e.editedName=t},expression:"editedName"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Code"},model:{value:e.editedCode,callback:function(t){e.editedCode=t},expression:"editedCode"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),a("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:e.onSaveEdit}},[e._v("Save")])],1)],1)],1)],1)},ee=[],te={props:{course:{type:Object}},data:function(){return{coursesStorage:[],dialog:!1,editedName:this.course.name,editedCode:this.course.code}},methods:{checkField:function(){""!==this.editedName.trim()&&""!==this.editedCode.trim()&&(this.dialog=!1)},editCourse:function(){this.course.name=this.editedName,this.course.code=this.editedCode},ugradeStorage:function(){this.$store.dispatch("updateCoursesData",{name:this.editedName,code:this.editedCode})},onSaveEdit:function(){var e=Object(V["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.checkField();case 3:return e.next=5,this.editCourse();case 5:return e.next=7,this.ugradeStorage();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));function t(){return e.apply(this,arguments)}return t}()}},ae=te,se=Object(g["a"])(ae,X,ee,!1,null,null,null),ie=se.exports,re={components:{"app-dialog-courses":W,"app-dialog-edit-courses":ie},data:function(){return{courses:[],coursesPage:[],perPage:5,items:[5,7,20],itemsSort:["A-Z","Z-A"],itemsCode:["increase","decrease"],page:1,firstItemOnPage:0,lastItemOnPage:4,totalPages:1,coursesStorage:[],stateUsers:[],filterText:"",selectedStatus:"",selectedSort:""}},computed:{changeAlphabet:function(){return"A-Z"===this.selectedSort?this.coursesStorage.sort(function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:-1}):"Z-A"===this.selectedSort?this.coursesStorage.sort(function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?1:-1}):void 0},changeCode:function(){return"increase"===this.selectedStatus?this.coursesStorage.sort(function(e,t){return e.code>t.code?1:-1}):"decrease"===this.selectedStatus?this.coursesStorage.sort(function(e,t){return e.code<t.code?1:-1}):void 0},getCourses:function(){return this.$store.getters.getCourses},searchUsers:function(){var e=this.filterText;return this.coursesStorage.filter(function(t){return""===e||t.name.toLowerCase().indexOf(e.toLowerCase())>-1})}},methods:{sortAlphabet:function(){this.coursesPage=this.changeAlphabet,this.changePagination()},sortCode:function(){this.coursesPage=this.changeCode,this.changePagination()},searchResults:function(){this.coursesPage=this.searchUsers},countPages:function(){this.totalPages=Math.ceil(this.coursesStorage.length/this.perPage),this.page>this.totalPages?this.page=this.totalPages:this.page},pageItems:function(){1===this.page?this.firstItemOnPage=0:this.firstItemOnPage=(this.page-1)*this.perPage,this.page==this.totalPages?this.lastItemOnPage=this.coursesStorage.length-1:this.lastItemOnPage=this.firstItemOnPage+this.perPage-1},listPerPage:function(){this.coursesPage=[];for(var e=this.firstItemOnPage;e<=this.lastItemOnPage;e++)this.coursesPage.push(this.coursesStorage[e])},changePagination:function(){var e=Object(V["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.countPages();case 3:return e.next=5,this.pageItems();case 5:return e.next=7,this.listPerPage();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));function t(){return e.apply(this,arguments)}return t}(),deleteCourse:function(e){this.coursesStorage.splice(e,1),localStorage.setItem("storage_courses",j()(this.coursesStorage)),this.changePagination()}},created:function(){this.$store.dispatch("initDataCourses"),this.coursesStorage=this.getCourses},mounted:function(){this.changePagination()}},ne=re,oe=Object(g["a"])(ne,q,H,!1,null,null,null),ce=oe.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"users"},[a("h1",[e._v("Users")]),a("div",{staticClass:"search"},[a("v-text-field",{staticClass:"lightgrey",attrs:{label:"Case unsensitive search","prepend-icon":"search",light:"",flat:"","solo-inverted":"","hide-details":"",clearable:"","clear-icon":"mdi-close-circle-outline"},on:{input:e.searchResults},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}})],1),a("section",{staticClass:"settings"},[a("app-dialog-users",{on:{upgradeUsers:e.changePagination}}),a("div",{staticClass:"select-pages"},[a("v-select",{attrs:{items:e.items,label:"Select the items quantity"},on:{input:e.changePagination},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),a("section",{staticClass:"settings"},[a("div",{staticClass:"settings__select"},[a("v-select",{attrs:{items:e.itemsSort,label:"Sort by alphabet"},on:{change:e.sortAlphabet},model:{value:e.selectedSort,callback:function(t){e.selectedSort=t},expression:"selectedSort"}})],1),a("div",{staticClass:"settings__select"},[a("v-select",{attrs:{items:e.itemsActivity,label:"Sort by activity"},on:{change:e.sortStatus},model:{value:e.selectedStatus,callback:function(t){e.selectedStatus=t},expression:"selectedStatus"}})],1)]),a("section",{staticClass:"table"},e._l(e.usersPage,function(t,s){return a("div",{key:t.email},[a("div",{staticClass:"user__row"},[a("div",{staticClass:"user__cell"},[e._v(e._s(t.name))]),a("div",{staticClass:"user__cell"},[e._v(e._s(t.email))]),a("div",{staticClass:"user__cell"},[e._v(e._s(t.status))]),a("div",{staticClass:"user__buttons"},[a("app-dialog-edit-users",{attrs:{user:t}}),a("v-icon",{staticClass:"delete-icon",attrs:{color:"green"},on:{click:function(t){return e.deleteUser(s)}}},[e._v("fas fa-trash-alt")])],1)])])}),0),a("v-pagination",{staticClass:"pagination",attrs:{length:e.totalPages,circle:"","total-visible":5},on:{input:e.changePagination},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)},ue=[],de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{staticClass:"dialog",attrs:{row:"","justify-start":""}},[a("v-dialog",{attrs:{"max-width":"350px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-btn",e._g({staticClass:"add-button",attrs:{small:"",dark:"",color:"green"},on:{click:e.clearFields}},s),[e._v("Add User\n      ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("User Profile")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Full name*",rules:e.nameRules},model:{value:e.addName,callback:function(t){e.addName=t},expression:"addName"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Email*",type:"email",rules:e.emailRules},model:{value:e.addEmail,callback:function(t){e.addEmail=t},expression:"addEmail"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-select",{attrs:{items:["Active","inActive"],label:"Activation"},model:{value:e.addStatus,callback:function(t){e.addStatus=t},expression:"addStatus"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),a("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:e.onSaveAdd}},[e._v("Save")])],1)],1)],1)],1)},me=[],he={data:function(){return{dialog:!1,addName:"",addEmail:"",addStatus:"",emailRules:[function(e){return!!e||"Enter your email"},function(e){return/.+@.+/.test(e)||"Enter a valid email address"},function(e){return e&&e.length>=4||"Enter a valid email address"}],nameRules:[function(e){return!!e||"Enter your name"},function(e){return e&&e.length>=3||"Name must be at least 3 characters"}]}},methods:{onSaveAdd:function(){""!==this.addName.trim()&&""!==this.addEmail.trim()&&""!==this.addStatus&&(this.dialog=!1,this.$store.dispatch("addUsersData",{name:this.addName,email:this.addEmail,status:this.addStatus}),this.$emit("upgradeUsers"))},clearFields:function(){this.addName="",this.addEmail="",this.addStatus=""}}},ge=he,fe=Object(g["a"])(ge,de,me,!1,null,null,null),ve=fe.exports,pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{"max-width":"350px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-icon",e._g({staticClass:"add-button",attrs:{color:"green"},on:{click:e.clearFields}},s),[e._v("edit\n      ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("User Profile")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Full name"},model:{value:e.editedName,callback:function(t){e.editedName=t},expression:"editedName"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Email"},model:{value:e.editedEmail,callback:function(t){e.editedEmail=t},expression:"editedEmail"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-select",{attrs:{items:["Active","inActive"],label:"Activation"},model:{value:e.editedStatus,callback:function(t){e.editedStatus=t},expression:"editedStatus"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),a("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:e.onSaveEdit}},[e._v("Save")])],1)],1)],1)],1)},be=[],Ce={props:{user:{type:Object}},data:function(){return{usersStorage:[],dialog:!1,editedName:this.user.name,editedEmail:this.user.email,editedStatus:this.user.status}},methods:{checkField:function(){""!==this.editedName.trim()&&""!==this.editedEmail.trim()&&""!==this.editedStatus&&(this.dialog=!1)},editUser:function(){this.user.name=this.editedName,this.user.email=this.editedEmail,this.user.status=this.editedStatus},ugradeStorage:function(){this.$store.dispatch("updateUsersData",{name:this.editedName,email:this.editedEmail,status:this.editedStatus})},onSaveEdit:function(){var e=Object(V["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.checkField();case 3:return e.next=5,this.editUser();case 5:return e.next=7,this.ugradeStorage();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));function t(){return e.apply(this,arguments)}return t}()}},Se=Ce,xe=Object(g["a"])(Se,pe,be,!1,null,null,null),_e=xe.exports,Pe={components:{"app-dialog-users":ve,"app-dialog-edit-users":_e},data:function(){return{users:[],usersPage:[],perPage:5,items:[5,7,20],itemsActivity:["Active first","inActive first"],itemsSort:["A-Z","Z-A"],page:1,firstItemOnPage:0,lastItemOnPage:4,totalPages:1,usersStorage:[],stateUsers:[],filterText:"",selectedStatus:"",selectedSort:""}},computed:{changeAlphabet:function(){return"A-Z"===this.selectedSort?this.usersStorage.sort(function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:-1}):"Z-A"===this.selectedSort?this.usersStorage.sort(function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?1:-1}):void 0},changeStatus:function(){return"Active first"===this.selectedStatus?this.usersStorage.sort(function(e,t){return e.status.toLowerCase()>t.status.toLowerCase()?1:-1}):"inActive first"===this.selectedStatus?this.usersStorage.sort(function(e,t){return e.status.toLowerCase()<t.status.toLowerCase()?1:-1}):void 0},getUsers:function(){return this.$store.getters.getUsers},searchUsers:function(){var e=this.filterText;return this.usersStorage.filter(function(t){return""===e||t.name.toLowerCase().indexOf(e.toLowerCase())>-1})}},methods:{sortAlphabet:function(){this.usersPage=this.changeAlphabet,this.changePagination()},sortStatus:function(){this.usersPage=this.changeStatus,this.changePagination()},searchResults:function(){this.usersPage=this.searchUsers},countPages:function(){this.totalPages=Math.ceil(this.usersStorage.length/this.perPage),this.page>this.totalPages?this.page=this.totalPages:this.page},pageItems:function(){1===this.page?this.firstItemOnPage=0:this.firstItemOnPage=(this.page-1)*this.perPage,this.page==this.totalPages?this.lastItemOnPage=this.usersStorage.length-1:this.lastItemOnPage=this.firstItemOnPage+this.perPage-1},listPerPage:function(){this.usersPage=[];for(var e=this.firstItemOnPage;e<=this.lastItemOnPage;e++)this.usersPage.push(this.usersStorage[e])},changePagination:function(){var e=Object(V["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.countPages();case 3:return e.next=5,this.pageItems();case 5:return e.next=7,this.listPerPage();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));function t(){return e.apply(this,arguments)}return t}(),deleteUser:function(e){this.usersStorage.splice(e,1),localStorage.setItem("storage_update",j()(this.usersStorage)),this.changePagination()}},created:function(){this.$store.dispatch("initData"),this.usersStorage=this.getUsers},mounted:function(){this.changePagination()}},ke=Pe,we=Object(g["a"])(ke,le,ue,!1,null,null,null),ye=we.exports,Oe=a("8c4f");s["default"].use(Oe["a"]);var Ae=[{path:"/",component:ce},{path:"/users",component:ye}],Ee=new Oe["a"]({mode:"history",base:"/aw/",routes:Ae}),Ne=Ee;a("d5e8"),a("d1e7"),a("15f5");s["default"].config.productionTip=!1,s["default"].use(r.a),new s["default"]({store:M,router:Ne,render:function(e){return e(I)}}).$mount("#app")},cf25:function(e,t,a){"use strict";var s=a("0cfb"),i=a.n(s);i.a}});
//# sourceMappingURL=app.5331f5ba.js.map