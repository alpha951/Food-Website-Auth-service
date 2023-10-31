function login(username: string, password: string) {
  if (username == "admin" && password == "admin") {
    return true;
  } else {
    return false;
  }
}

let ans: boolean = login("admin", "admin");

console.log(ans);
