function showPassword() {
  var input = document.getElementById("form-password");
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}
