function login(username: string, password: string) {
  if (username == "admin" && password == "admin") {
    return true;
  } else {
    return false;
  }
}
login("admin", "admin");
