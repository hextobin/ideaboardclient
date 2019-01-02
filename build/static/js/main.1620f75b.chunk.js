(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){e.exports=a(274)},132:function(e,t,a){},137:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(20),c=a.n(o),l=(a(132),a(22)),r=a(23),d=a(25),s=a(24),u=a(26),p=(a(134),a(137),a(49)),h=a(31),f=a.n(h),m=a(278),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).handleClick=function(){a.props.onClick(a.props.idea.id)},a.handleDelete=function(){a.props.onDelete(a.props.idea.id)},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,{className:"card-tile"},i.a.createElement(m.a.Content,null,i.a.createElement("div",null,i.a.createElement("button",{className:"card-delete",onClick:this.handleDelete},"Delete")),i.a.createElement(m.a.Header,{onClick:this.handleClick},this.props.idea.title),i.a.createElement(m.a.Description,{onClick:this.handleClick},this.props.idea.body)))}}]),t}(n.Component),I=a(51),v=a.n(I),g=a(117),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(s.a)(t).call(this,e))).handleInput=function(e){a.props.resetNotification(),a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e={title:a.state.title,body:a.state.body};f.a.put("https://quiet-taiga-10596.herokuapp.com/api/v1/ideas/".concat(a.props.idea.id),{idea:e}).then(function(e){a.props.updateIdea(e.data)}).catch(function(e){return console.log(e)})},a.handleClickOutside=function(e){a.props.resetId()},a.state={title:a.props.idea.title,body:a.props.idea.body},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,{className:"card-tile"},i.a.createElement(m.a.Content,null,i.a.createElement("form",null,i.a.createElement(m.a.Header,null,i.a.createElement("input",{type:"text",name:"title",placeholder:"Enter a Title",value:this.state.title,onChange:this.handleInput,ref:this.props.titleRef})),i.a.createElement(m.a.Description,null,i.a.createElement("textarea",{name:"body",placeholder:"Describe Your Idea",value:this.state.body,onChange:this.handleInput})),i.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Save"))))}}]),t}(n.Component),k=Object(g.a)(E),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(s.a)(t).call(this,e))).addNewIdea=function(){a.resetNotification(),f.a.post("https://quiet-taiga-10596.herokuapp.com/api/v1/ideas",{idea:{title:"",body:""}}).then(function(e){var t=v()(a.state.ideas,{$splice:[[0,0,e.data]]});a.setState({ideas:t,editingIdeaId:e.data.id})}).catch(function(e){return console.log(e)})},a.updateIdea=function(e){var t=a.state.ideas.findIndex(function(t){return t.id===e.id}),n=v()(a.state.ideas,Object(p.a)({},t,{$set:e}));console.log(e),a.setState({ideas:n,notification:"All Changes Saved",editingIdeaId:null})},a.resetEditingIdeadId=function(){a.setState({editingIdeaId:null})},a.resetNotification=function(){a.setState({notification:""})},a.enableEditing=function(e){a.setState({editingIdeaId:e},function(){a.title.focus()})},a.deleteIdea=function(e){f.a.delete("https://quiet-taiga-10596.herokuapp.com/api/v1/ideas/".concat(e)).then(function(t){var n=a.state.ideas.findIndex(function(t){return t.id===e}),i=v()(a.state.ideas,{$splice:[[n,1]]});a.setState({ideas:i})}).catch(function(e){return console.log(e)})},a.state={ideas:[],editingIdeaId:null,notification:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;f()("https://quiet-taiga-10596.herokuapp.com/api/v1/ideas.json").then(function(t){e.setState({ideas:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:"newIdeaButton",onClick:this.addNewIdea},"New Idea"),i.a.createElement("span",{className:"notification"},this.state.notification),i.a.createElement("div",null,this.state.ideas.map(function(t){return e.state.editingIdeaId===t.id?i.a.createElement(k,{idea:t,key:t.id,updateIdea:e.updateIdea,resetNotification:e.resetNotification,titleRef:function(t){return e.title=t},resetId:e.resetEditingIdeadId}):i.a.createElement(b,{onClick:e.enableEditing,idea:t,key:t.id,onDelete:e.deleteIdea})})))}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"App-header"},i.a.createElement("h1",null,"Drello-Put Your Ideas Together")),i.a.createElement(j,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[127,2,1]]]);
//# sourceMappingURL=main.1620f75b.chunk.js.map