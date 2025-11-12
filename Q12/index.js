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
