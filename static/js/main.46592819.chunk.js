(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,n,t){e.exports=t(40)},30:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(17),o=t.n(i),s=(t(30),t(22)),c=t(4),u=t(5),l=t(7),d=t(6),m=t(8),h=t(1),p=t(2);function f(){var e=Object(h.a)(["\n  font-family: 'Karla', sans-serif;\n  background: #131e29;\n  border: 1px solid #3c4c5e;\n  color: white;\n  text-align: center;\n  padding: 10px 15px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 0px 6px 6px 0px;\n  font-size: 1.5rem;\n  font-weight: 400;\n  transition: all 0.3s ease;\n  &:hover {\n    \n    border-color: #f29559;\n  }\n  &:active,\n  &:focus {\n    background: #3d383a;\n    border-color: #f29559;\n    outline: none;\n  }\n"]);return f=function(){return e},e}function g(){var e=Object(h.a)(["\n  background: #3c4c5e;\n  color: white;\n  padding: 10px 15px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n  font-size: 1.5rem;\n  font-weight: 400;\n"]);return g=function(){return e},e}function w(){var e=Object(h.a)(["\n  float: ",";\n  cursor: pointer;\n  padding: 10px 15px;\n  background: #131e29;\n  border: 1px solid #3c4c5e;\n  color: white;\n  padding: 10px 15px;\n  font-size: 1rem;\n  border-radius: 3px;\n  transition: all 0.3s ease;\n  margin-bottom: 10px;\n  letter-spacing: 1px;\n  &:hover {\n    background: #3d383a;\n    border-color: #f29559;\n  }\n  &:active,\n  &:focus {\n    outline: none;\n    border-color: #f29559;\n  }\n"]);return w=function(){return e},e}var b=p.a.button(w(),function(e){return e.left?"left":"right"}),x=p.a.h2(g()),v=p.a.input(f()),O=b;function y(){var e=Object(h.a)(["\n  font-size: 1.3rem;\n  @media screen and (max-width: 570px) {\n\n    font-size: 1rem;\n  }\n"]);return y=function(){return e},e}function E(){var e=Object(h.a)(["\n  background: #3c4c5e;\n  margin-bottom: 0px;\n  @media screen and (max-width: 370px) {\n    padding: 5px;\n    font-size: 0.9rem;\n  }\n"]);return E=function(){return e},e}function j(){var e=Object(h.a)(["\n  background: rgba(60, 76, 94, 0.5);\n  margin-right: auto;\n  border: none;\n  font-size: 1rem;\n  font-weight: 700;\n  padding: 5px 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  height: 50%;\n  span {\n    font-size: 0.8rem;\n    margin: 0 5px;\n    font-weight: normal;\n  }\n  @media screen and (max-width: 370px) {\n    padding: 5px;\n    font-size: 0.8rem;\n  }\n  @media screen and (max-width: 370px) {\n    font-size: 0.7rem;\n  }\n"]);return j=function(){return e},e}function k(){var e=Object(h.a)(["\n  margin: 0;\n  @media screen and (max-width: 370px) {\n    padding: 5px;\n    font-size: 0.9rem;\n  }\n"]);return k=function(){return e},e}function N(){var e=Object(h.a)(["\n  @media screen and (max-width: 570px) {\n    flex-basis: 100%!important;\n    font-size: 0.9rem!important;\n  }\n"]);return N=function(){return e},e}function S(){var e=Object(h.a)(["\n  width: 100%;\n"]);return S=function(){return e},e}var A=p.a.div(S()),C=p.a.li(N()),z=Object(p.a)(O)(k()),q=Object(p.a)(x)(j()),W=Object(p.a)(O)(E()),B=Object(p.a)(x)(y()),I=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={answerSelected:""},t.handleNext=function(){t.props.goNext()},t.handlePrev=function(){t.props.goPrev()},t.handleChange=function(e,n,a){t.setState({answerSelected:e}),t.props.handleResults(a,n)},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"componentWillMount",value:function(){var e=this.props.answerIndex;if(null!==e){var n=this.props.question.answers[e];this.setState({answerSelected:n})}}},{key:"render",value:function(){var e=this,n=this.props.question.answers,t=this.props.questionIndex,a=this.props.numberOfQuestions,i=t===a-1;return r.a.createElement(A,{className:"question-box"},r.a.createElement(B,null,this.props.question.question),r.a.createElement("form",null,r.a.createElement("ul",null,n.map(function(n,a){return r.a.createElement(C,{key:a,onClick:e.handleRadio},r.a.createElement("label",{className:"radio"},r.a.createElement("input",{type:"radio",name:"answers",checked:n===e.state.answerSelected,onChange:function(r){return e.handleChange(n,a,t)}}),r.a.createElement("span",null,n)))}))),r.a.createElement("div",{className:"row navigation"},r.a.createElement(z,{onClick:this.handlePrev,left:!0},"Previous"),r.a.createElement(q,null,t+1," ",r.a.createElement("span",null,"out of")," ",a),i?r.a.createElement(W,{onClick:this.handleNext},"Submit"):r.a.createElement(z,{onClick:this.handleNext},"Next")))}}]),n}(a.Component);function M(){var e=Object(h.a)(["\n  @media screen and (max-width: 540px) {\n    width: 200px;\n    font-size: 1rem;\n  }\n  @media screen and (max-width: 470px) {\n  font-size: 0.9rem;\n  }\n  @media screen and (max-width: 370px) {\n    width: 140px;\n  }\n  @media screen and (max-width: 320px) {\n    width: 100px;\n  }\n"]);return M=function(){return e},e}function Q(){var e=Object(h.a)(["\n  border-radius: 6px 0px 0px 6px;\n  margin: 0;\n  font-size: 1.2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media screen and (max-width: 640px) {\n    font-size: 0.9rem;\n  }\n  @media screen and (max-width: 370px) {\n    padding: 5px 10px;\n  }\n  @media screen and (max-width: 320px) {\n    padding: 5px 10px;\n    font-size: 0.8rem;\n  }\n  \n"]);return Q=function(){return e},e}var R=Object(p.a)(x)(Q()),P=Object(p.a)(v)(M()),F=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={name:""},t.handleName=function(e){var n=e.currentTarget.value;t.setState({name:n}),t.props.handleName(n)},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setState({name:this.props.name})}},{key:"render",value:function(){return r.a.createElement("div",{className:"row enter"},r.a.createElement(R,null,"Enter your name:"),r.a.createElement(P,{type:"text",name:"name",onChange:this.handleName,value:this.state.name}))}}]),n}(a.Component);t(34);function K(){var e=Object(h.a)(["\n  /* text-align: center; */\n  font-size: 1.3rem;\n  span.index {\n    background: rgba(19, 30, 41, 0.5);\n    padding: 0px 10px;\n    border-radius: 3px;\n    font-size: 1.2rem;\n  }\n  @media screen and (max-width: 570px) {\n    font-size: 1rem;\n    span.index{\n      font-size: 0.9rem;\n      padding: 0 5px;\n    }\n  }\n"]);return K=function(){return e},e}function L(){var e=Object(h.a)(["\n  background: rgba(60, 76, 94, 0.5);\n  margin-right: auto;\n  border: none;\n  font-size: 1.2rem;\n  padding: 5px 10px;\n"]);return L=function(){return e},e}function G(){var e=Object(h.a)(["\n  background: ","!important;\n  border: none;\n"]);return G=function(){return e},e}function H(){var e=Object(h.a)(["\n  width: 100%;\n  border-bottom: 1px solid #3c4c5e;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n"]);return H=function(){return e},e}var T=p.a.div(H()),J=p.a.li(G(),function(e){return e.isCorrectAnswer?"#00A640":""}),D=Object(p.a)(x)(L()),_=Object(p.a)(x)(K()),U=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={checked:"checked"},t.handleNothing=function(){t.setState({checked:"checked"})},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"componentWillMount",value:function(){this.setState({checked:"checked"})}},{key:"render",value:function(){var e=this,n=this.props.userChoices,t=this.props.questions;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null,"Results:"),t.map(function(t,a){return r.a.createElement(T,{className:"question-box recap",key:a},r.a.createElement(_,null,r.a.createElement("span",{className:"index"},a+1),r.a.createElement("span",null," ",t.question)),r.a.createElement("form",null,r.a.createElement("ul",null,t.answers.map(function(i,o){return r.a.createElement(J,{key:o,isCorrectAnswer:t.correctAnswer===o,className:n[a]&&n[a].answerIndex===o?"user-answer":""},r.a.createElement("label",{className:"radio recap"},r.a.createElement("input",{type:"radio",name:"answers",checked:n[a]&&n[a].answerIndex===o,onChange:e.handleNothing}),r.a.createElement("span",null)),r.a.createElement("span",null,i))}))))}))}}]),n}(a.Component);function Y(){var e=Object(h.a)(["\n  background: ",";\n  @media screen and (max-width: 570px) {\n    font-size: 1.2rem;\n  }\n"]);return Y=function(){return e},e}var Z=Object(p.a)(x)(Y(),function(e){return e.isPassed?"#00A640":"#ff1744"}),$=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).handleGoAgain=function(){t.props.goAgain()},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props.userScore,n=this.props.numberOfQuestions,t=e>n/2;return r.a.createElement("div",{className:"final"},r.a.createElement("div",{className:"container results"},r.a.createElement("div",{className:"row"},r.a.createElement(Z,{isPassed:t},"Your score is: ",e," out of ",n)),r.a.createElement(O,{onClick:this.handleGoAgain},"Start Again")),r.a.createElement("div",{className:"container recap"},r.a.createElement(U,{questions:this.props.questions,userChoices:this.props.userChoices})))}}]),n}(a.Component),V=(t(35),t(36),t(13)),X=t(20),ee=t(21);function ne(){var e=Object(h.a)(['\n  /* position: absolute; */\n  position: relative;\n  /* bottom: -50px; */\n  left: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-family: "Karla", sans-serif;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.08rem;\n  font-size: 0.8rem;\n  width: 100%;\n  @media screen and (max-width: 500px) {\n    font-size: 0.7rem;\n  }\n  & > *:not(:last-child) {\n    float: left;\n    vertical-align: middle;\n  }\n']);return ne=function(){return e},e}function te(){var e=Object(h.a)(["\n  color: inherit;\n  text-decoration: none;#61dafb\n"]);return te=function(){return e},e}var ae=p.a.a(te()),re=p.a.h3(ne()),ie=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(re,null,r.a.createElement("span",null,"Made with"," ",r.a.createElement(V.a,{icon:ee.a,pulse:!0,style:{color:"#f44336",opacity:"1"}})," ","by"," ",r.a.createElement(ae,{href:"http://imsolitude.github.io",style:{color:"rgba(255, 255, 255, 1)"},target:"_blank"},"muhammadj"),r.a.createElement(ae,{href:this.props.href,target:"_blank",style:{opacity:"1",float:"right"}},r.a.createElement(V.a,{icon:X.a,size:"2x",style:{color:"white"}}))))}}]),n}(a.Component),oe=[{question:"Who won the World Cup in 2010 ?",answers:["Spain","Brazil","United States","Netherlands"],correctAnswer:0},{question:"Currently in 2014 who is the highest paid athlete at 78.1 million ?",answers:["LeBron James","Tiger Woods","Roger Federer","Kobe Bryant"],correctAnswer:1},{question:"What sport would you be playing if you were using a mallet ?",answers:["Lacrosse ","Pool","Golf","Polo"],correctAnswer:3},{question:"In a standard 8-ball game of pool, how many balls are needed to play ?",answers:["16","8","9","15"],correctAnswer:0},{question:"How many strikes make a perfect game in bowling ?",answers:["11","10","12","13"],correctAnswer:2}];t(39);function se(){var e=Object(h.a)(["\n  font-size: 1.2rem;\n  padding: 5px 10px;\n"]);return se=function(){return e},e}function ce(){var e=Object(h.a)(['\n  font-family: "Karla", sans-serif;\n  padding: 10px 15px;\n  font-size: 1rem;\n  width: 284px;\n  border-radius: 0px 6px 6px 0px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: #131e29;\n  color: white;\n  -moz-appearance: none; /* Firefox */\n  -webkit-appearance: none; /* Safari and Chrome */\n  appearance: none;\n  background: #131e29 url("arrow-down.png") no-repeat;\n  background-position: 95% 50%;\n  transition: all 0.3s ease;\n  &:hover,\n  &:focus,\n  &:active {\n    outline: none;\n    border-color: #f29559;\n  }\n  @media screen and (max-width: 640px) {\n    font-size: 0.9rem;\n    width: 200px;\n  }\n']);return ce=function(){return e},e}function ue(){var e=Object(h.a)(["\n  border-radius: 6px 0px 0px 6px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  padding: 5px 10px;\n  justify-content: center;\n  @media screen and (max-width: 640px) {\n    font-size: 0.9rem;\n  }\n"]);return ue=function(){return e},e}function le(){var e=Object(h.a)([""]);return le=function(){return e},e}function de(){var e=Object(h.a)(["\n  font-size: 0.7rem;\n  font-weight: bold;\n  background: transparent;\n  margin: 0;\n  border: none;\n  padding: 0;\n  flex: 1 1 100%;\n  @media screen and (max-width: 540px) {\n    font-size: 0.6rem;\n    max-width: 120px;\n    word-break: break-all;\n  }\n"]);return de=function(){return e},e}function me(){var e=Object(h.a)(["\n  width: auto;\n  font-size: 0.7rem;\n  margin-left: 0.5rem;\n  @media screen and (max-width: 370px) {\n    font-size: 0.6rem;\n  }\n"]);return me=function(){return e},e}function he(){var e=Object(h.a)(["\n  width: 200px;\n  @media screen and (max-width: 470px) {\n    width: 120px;\n  }\n  @media screen and (max-width: 370px) {\n    width: 100px;\n  }\n"]);return he=function(){return e},e}var pe={Sports:oe,History:[{question:"Which movie is famous for the line 'Say hello to my little friend' ?",answers:["The Godfather","Scarface","American Gangster","Bugsy"],correctAnswer:1},{question:"In what year was the first Friday the 13th released ?",answers:["1980","1975","1985","1990"],correctAnswer:0},{question:"In this Nicolas Cage movie he can see two minutes into his future ?",answers:["The Wicker Man","Next","Knowing","Season of the Witch"],correctAnswer:1},{question:"Which movie starts with a police officer and his daughter touring the White House ?",answers:["Olympus Has Fallen","Air Force One","Murder at 1600","White House Down"],correctAnswer:3},{question:"Which is not an important rule to remember for a Mogwai ?",answers:["Never expose it to bright light","Never feed it after midnight","Never pet it","Never get it wet"],correctAnswer:2}],Geography:[{question:"Where is the Amazon Rainforest ?",answers:["South America","Africa","Asia","Australia"],correctAnswer:0},{question:"What is the captial of Jamaica ?",answers:["Portmore","Linstead","Kingston","Montego Bay"],correctAnswer:2},{question:"Which contry does not boarder the Black Sea ?",answers:["Turkey","Romania","Bulgaria","Hungary"],correctAnswer:3},{question:"Which is the longest river ?",answers:["Orange River","Nile","Congo River","Zambezi"],correctAnswer:1},{question:"Of the states listed, which is the largest in size ?",answers:["Montana","Colorado","California","New Mexico"],correctAnswer:2}],Kids:[{question:"What is the province that starts with the letter O?",answers:["Ontario","New Brunswick","Manitoba","Quebec"],correctAnswer:0},{question:"What province begins with the letter Q?",answers:["Ontario","New Brunswick","Nova Scotia","Quebec"],correctAnswer:3},{question:"Which of these provinces start with 'New'?",answers:["Ontario","New Brunswick","Quebec","Manitoba"],correctAnswer:1},{question:"Which of these begin with the word 'Man'?",answers:["Ontario","New Brunswick","Quebec","Manitoba"],correctAnswer:3},{question:"Which of these begin with the word 'Nova'?",answers:["Ontario","Nova Scotia","British Columbia","New Brunswick"],correctAnswer:1}]},fe=["Sports","History","Geography","Kids"],ge=p.a.img(he()),we=Object(p.a)(q)(me()),be=Object(p.a)(x)(de()),xe=Object(p.a)(O)(le()),ve=Object(p.a)(x)(ue()),Oe=p.a.select(ce()),ye=p.a.option(se()),Ee=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={name:"",category:oe,step:0,isLastStep:!1,userChoices:{},userScore:0,selected:{index:0,string:"Sports"}},t.goNext=function(){var e=t.state.step+1;e>t.state.numberOfQuestions?t.setState({isLastStep:!0}):t.setState({step:e})},t.goPrev=function(){var e=t.state.step-1;e<0||t.setState({step:e,isLastStep:!1})},t.goAgain=function(){t.setState({category:pe.Sports,step:0,userChoices:{},name:"",isLastStep:!1,userScore:0,selected:{index:0,string:"Sports"}})},t.handleResults=function(e,n){var a=t.state.category[e].correctAnswer===n,r=0,i=t.state.userChoices;i[e]={answerIndex:n,isCorrectAnswer:a},Object.keys(i).forEach(function(e){i[e].isCorrectAnswer&&r++}),t.setState({userChoices:i,userScore:r})},t.handleName=function(e){t.setState({name:e})},t.handleSelect=function(e){var n=e.currentTarget,a=Object(s.a)(n.childNodes).findIndex(function(e){return e.selected}),r=fe[a],i=n.value,o=pe[i];t.setState({category:o,selected:{index:a,string:r},userChoices:{}})},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"componentWillMount",value:function(){this.setState({category:pe.Sports,numberOfQuestions:this.state.category.length})}},{key:"render",value:function(e){var n,t=this,a=this.state.category,i=this.state.step;return 0===i?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row header"},r.a.createElement(ge,{src:"logo.png"}),r.a.createElement(we,null,this.state.selected.string),r.a.createElement("div",{className:"alignEnd"},r.a.createElement(be,null,"Welcome, ",this.state.name?"".concat(this.state.name,"."):""))),r.a.createElement("div",{className:"container welcome"},r.a.createElement(F,{handleName:this.handleName,name:this.state.name}),r.a.createElement("div",{className:"row categories"},r.a.createElement(ve,null,"Choose Category: "),r.a.createElement(Oe,{onChange:this.handleSelect,value:this.state.selected.string},fe.map(function(e,n){return r.a.createElement(ye,{key:n},e)}))),r.a.createElement(xe,{onClick:this.goNext},"Start Quiz")),r.a.createElement(ie,{href:"https://github.com/ImSolitude/Reactrivia"})):this.state.isLastStep?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row header"},r.a.createElement(ge,{src:"logo.png"})," ",r.a.createElement(we,null,this.state.selected.string),r.a.createElement("div",{className:"alignEnd"},r.a.createElement(be,null,"Welcome, ",this.state.name?"".concat(this.state.name,"."):""))),r.a.createElement($,{name:this.state.name,userScore:this.state.userScore,numberOfQuestions:this.state.numberOfQuestions,goAgain:this.goAgain,questions:this.state.category,userChoices:this.state.userChoices})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row header"},r.a.createElement(ge,{src:"logo.png"})," ",r.a.createElement(we,null,this.state.selected.string),r.a.createElement("div",{className:"alignEnd"},r.a.createElement(be,null,"Welcome, ",this.state.name?"".concat(this.state.name,"."):""))),r.a.createElement("div",{className:"container questions"},a.map(function(e,a){return i===a+1?(t.state.userChoices[a]&&(n=t.state.userChoices[a].answerIndex),r.a.createElement(I,{question:e,goNext:t.goNext,goPrev:t.goPrev,handleResults:t.handleResults,key:a,questionIndex:a,answerIndex:n,numberOfQuestions:t.state.numberOfQuestions,name:t.state.name})):""})),r.a.createElement(ie,{href:"https://github.com/ImSolitude/Reactrivia"}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.46592819.chunk.js.map