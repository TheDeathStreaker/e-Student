var login = function () {
  var uname = document.forms['loginForm']['username'].value;
  var pass = document.forms['loginForm']['password'].value;

  var link = document.getElementById('submit');

  var error = document.getElementsByClassName('error');

  var userFound = false;

  for (var i = 0; i < users.length; i++) {
    if (uname === users[i].username) {
      userFound = true;
      if (pass === users[i].password) {
          link.href = 'first.html?uname=' + users[i].username;
      } else {
        error[0].innerHTML = '<p>You entered wrong password</p>';
      }
    }
  }

  if(!userFound){
    error[0].innerHTML = '<p>You entered wrong username</p>';
  }

  return false;
}
