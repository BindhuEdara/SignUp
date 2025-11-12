function signUp(userName) {
  let users = ["ram", "sita", "bindu", "naga"];
  for (let i = 0; i < users.length; i++){
    if (users[i] == userName) {
      return "user already registered, please login"
    }
  }
  users.push(userName)
  return "signUp successful, please Login"
}
console.log(signUp("bindu"));
console.log(signUp("raju"));


function login(userName, password) {
  
  let users = ["ram", "sita", "anita", "raju"];

  let userFound = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i] === userName) {
      userFound = true; // user exists
      break;
    }
  }

  if (!userFound) {
    return "User Not Found, Please Signup";
  }

  if (password === "Emp@123") {
    return "Login Successful...";
  } else {
    return "Wrong Password....";
  }
}

console.log(login("ram", "Emp@123"));
console.log(login("bindu", "Emp@123"));
