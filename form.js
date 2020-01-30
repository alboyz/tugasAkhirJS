function buat_login() {
  var elem = document.getElementById("X");
  elem.parentElement.removeChild(elem);
  var p = document.createElement("h1");
  p.className = "tulisan_login";
  p.innerHTML = "Silahkan Mendaftar";
  var element = document.getElementsByTagName("DIV")[0];
  element.appendChild(p);
  var form = document.createElement("FORM");
  element.appendChild(form);
  // Nama User
  var label = document.createElement("LABEL");
  label.innerHTML = "Nama User";
  form.appendChild(label);
  var inputNamaUser = document.createElement("INPUT");
  inputNamaUser.type = "text";
  inputNamaUser.name = "NamaUser";
  inputNamaUser.className = "form_login";
  inputNamaUser.placeholder = "Nama User..";
  form.appendChild(inputNamaUser);

  // Nomor HP
  var labelHP = document.createElement("LABEL");
  labelHP.innerHTML = "Nomor Handphone";
  form.appendChild(labelHP);
  var nomorHP = document.createElement("INPUT");
  nomorHP.type = "text";
  nomorHP.name = "Nomor Handphone :";
  nomorHP.className = "form_login";
  nomorHP.placeholder = "Nomor Handphone..";
  form.appendChild(nomorHP);

  // User Name atau Email
  var labelUsername = document.createElement("LABEL");
  labelUsername.innerHTML = "Username Atau Email";
  form.appendChild(labelUsername);
  var user = document.createElement("INPUT");
  user.type = "text";
  user.name = "username";
  user.className = "form_login";
  user.placeholder = "Username atau Email..";
  form.appendChild(user);

  //password
  var pass = document.createElement("LABEL");
  pass.innerHTML = "Password";
  form.appendChild(pass);
  var pswd = document.createElement("INPUT");
  pswd.type = "password";
  pswd.name = "password";
  pswd.className = "form_login";
  pswd.placeholder = "Password";
  form.appendChild(pswd);

  //tombol
  var tombol = document.createElement("INPUT");
  tombol.type = "submit";
  tombol.className = "tombol_login";
  form.appendChild(tombol);
}
