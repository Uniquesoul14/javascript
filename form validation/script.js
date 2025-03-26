const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const conPassword = document.getElementById("con_password");
let error = document.getElementById("error");
const signUp = document.getElementById("signUp");

signUp.addEventListener("click", () => {
  validateFun();
});

function validateFun() {
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const conPasswordValue = conPassword.value.trim();

  if (userNameValue == "" || userNameValue == null) {
    error.innerHTML = "Please Enter full name";
  } else if (emailValue == "") {
    error.innerHTML = "Please enter valid Email";
  } else if (passwordValue == null || passwordValue == "") {
    {
      error.innerHTML = "Enter valid Password";
    }
  } else if (passwordValue !== conPasswordValue) {
    error.innerHTML = "Password and Confirm Password doesn't match!";
  } else {
    error.innerHTML = " ";
  }


}

// function nameValidateCheck() {
//   let array = "0123456789";
//   let userNameValue;

//   for (i = 0; i < userNameValue.length; i++) {
//     for (j = 0; j < array.length; j++) {
//       if (userNameValue[i] == array[j]) {
//         return ;
//       } else {
//         return "";
//       }
//     }
//   }
// }
