function getParameterByName(e,s){s||(s=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var a=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=a.exec(s);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}function getNavbar(e){var s="";switch(e){case"professor":s='<ul><li><a onclick="loadClasses()">Classes</a></li><li><a onclick="loadExams()">Exam dates</a></li></ul>';break;case"referat":s='<ul><li><a onclick="loadStudents()">Students</a></li><li><a onclick="loadProfessors()">Professors</a></li><li><a onclick="loadClasses(\''+e+"')\">Classes</a></li><li><a onclick=\"loadRequests('"+e+"')\">Requests</a></li><li><a onclick=\"loadOrders('"+e+"')\">Orders</a></li></ul>";break;default:s="<ul><li><a onclick=\"loadClasses('"+e+'\')">Classes</a></li><li><a onclick="loadExams()">Exam dates</a></li><li><a onclick="loadRequests(\''+e+'\')">Requests</a></li><li><a onclick="loadIndex()">Index</a></li><li><a onclick="loadOrders(\''+e+"')\">Orders</a></li></ul>"}return s}function getOptions(e){for(var s="<option></option>",a=0;a<users.length;a++)users[a].role===e&&(s+='<option value="'+users[a].id+'">'+users[a].name+"</option>");return s}function updateOptions(e){if("professor"===e.role){var s=document.forms.addClass.classProfessor;s.innerHTML+='<option value="'+e.id+'">'+e.name+"</option>"}}function getClasses(){var e="";if(user.classes)for(var s=0;s<user.classes.length;s++)for(var a=0;a<classes.length;a++)if(user.classes[s].id===classes[a].id)if("professor"===user.role){e+='<div class="professor">',e+='<table class="fullWidth">',e+="<tr>",e+='<td width="80%"><h4>'+classes[a].name+"</h4></td>",e+='<td width="10%"><p>'+classes[a].enrolled.length+"</p></td>",e+='<td width="10%">';for(var r=0;r<classes[a].exams.length;r++)e+="<small>&emsp;"+classes[a].exams[r]+"</small><br />";e+="</td>",e+="</tr>",e+="</table>",e+="</div>"}else{var l=user.classes[s].mark?user.classes[s].mark:"";e+='<div class="student">',e+='<table class="fullWidth">',e+="<tr>",e+='<td width="80%"><h4>'+classes[a].name+"</h4>",e+="<small><u>Exam dates:</u></small><br />";for(var r=0;r<classes[a].exams.length;r++)e+="<small>&emsp;"+classes[a].exams[r]+"</small><br />";e+="</td>",e+='<td width="10%"><p>'+l+"</p></td>",e+="</td>",e+="</tr>",e+="</table>",e+="</div>"}return e}function getGeneral(){var e="";switch(user.role){case"referat":e='<div class="referat">',e+="<h3>Add student</h3>",e+='<form name="addStudent">',e+="<label>",e+="First name: ",e+='<input name="firstName" type="text" placeholder="First name" required/>',e+='</label><div class="spacer"></div>',e+="<label>",e+="Last Name: ",e+='<input name="lastName" type="text" placeholder="Last name" required/>',e+='</label><div class="spacer"></div>',e+='<a id="submit" class="submit" onclick="add(\'student\')">Add</a>',e+="</form>",e+="</div>",e+='<div class="referat">',e+="<h3>Add professor</h3>",e+='<form name="addProfessor">',e+="<label>",e+="First name: ",e+='<input name="firstName" type="text" placeholder="First name" required/>',e+='</label><div class="spacer"></div>',e+="<label>",e+="Last Name: ",e+='<input name="lastName" type="text" placeholder="Last name" required/>',e+='</label><div class="spacer"></div>',e+='<a id="submit" class="submit" onclick="add(\'professor\')">Add</a>',e+="</form>",e+="</div>",e+='<div class="referat">',e+="<h3>Add class</h3>",e+='<form name="addClass">',e+="<label>",e+="Class name: ",e+='<input name="className" type="text" placeholder="Class name" required/>',e+='</label><div class="spacer"></div>',e+="<label>",e+="Professor: ",e+='<select name="classProfessor">',e+=getOptions("professor"),e+="</select>",e+='</label><div class="spacer"></div>',e+='<a id="submit" class="submit" onclick="add(\'class\')">Add</a>',e+="</form>",e+="</div>";break;case"professor":e='<div class="professor">',e+='<table class="fullWidth">',e+="<tr>",e+='<th width="80%">Class name</th>',e+='<th width="10%">Students</th>',e+='<th width="10%">Exam dates</th>',e+="</tr>",e+="</table>",e+="</div>",e+=getClasses();break;default:e='<div class="student">',e+='<table class="fullWidth">',e+="<tr>",e+='<th width="90%">Class name</th>',e+='<th width="10%">Mark</th>',e+="</tr>",e+="</table>",e+="</div>",e+=getClasses()}return e}var users=[{id:1,username:"adrianj",name:"Adrian Jarc",password:"adrian1234",role:"student",enrolled:[{id:1,mark:6},{id:2}],requests:[],orders:[]},{id:2,username:"janezn",name:"Janez Novak",password:"novak4321",role:"professor",holding:[{id:1},{id:2}]},{id:3,username:"metak",name:"Meta Križman",password:"metkriz12",role:"referat"}],classes=[{id:1,name:"Spletno programiranje",exams:["12.2.2017 10.00","26.2.2017 10.00"],enrolled:[{id:1}]},{id:2,name:"Something",exams:["14.2.2017 10.00"],enrolled:[{id:1}]}],requests=[],orders=[],login=function(){for(var e=document.forms.loginForm.username.value,s=document.forms.loginForm.password.value,a=document.getElementById("submit"),r=document.getElementsByClassName("error"),l=!1,t=0;t<users.length;t++)e===users[t].username&&(l=!0,s===users[t].password?a.href="first.html?uname="+users[t].username:r[0].innerHTML="<p>You entered wrong password</p>");return l||(r[0].innerHTML="<p>You entered wrong username</p>"),!1},user,getData=function(){for(var e,s=getParameterByName("uname"),a=0;a<users.length;a++)if(users[a].username===s){e=getNavbar(users[a].role),user={id:users[a].id,name:users[a].name,role:users[a].role,classes:users[a].enrolled?users[a].enrolled:users[a].holding};break}document.getElementById("person").innerHTML="<p>Hello "+user.name+"</p>",document.getElementById("general").innerHTML=getGeneral(),document.getElementById("navbar").innerHTML=e},add=function(e){var s,a;switch(e){case"professor":s=document.forms.addProfessor.firstName.value,a=document.forms.addProfessor.lastName.value;var r=users.length+1;users.push({id:r,name:s+" "+a,username:s.toLowerCase()+a.toLowerCase().substring(0,1),password:a.toLowerCase()+"4321",role:e,holding:[]}),updateOptions({name:s+" "+a,id:r,role:e}),document.forms.addProfessor.lastName.value="",document.forms.addProfessor.firstName.value="";break;case"student":s=document.forms.addStudent.firstName.value,a=document.forms.addStudent.lastName.value,users.push({id:users.length+1,name:s+" "+a,username:s.toLowerCase()+a.toLowerCase().substring(0,1),password:s.toLowerCase()+"1234",role:e,enrolled:[],requests:[],orders:[]}),document.forms.addStudent.lastName.value="",document.forms.addStudent.firstName.value="";break;case"class":s=document.forms.addClass.className.value,a=document.forms.addClass.classProfessor.value;var l=classes.length+1;if(classes.push({id:l,name:s,exams:[],enrolled:[]}),a)for(var t=0;t<users.length;t++)if(users[t].id.toString()===a){users[t].holding.push({id:l});break}document.forms.addClass.className.value="",document.forms.addClass.classProfessor.value="";break;default:console.error("Unrecognized add")}};
