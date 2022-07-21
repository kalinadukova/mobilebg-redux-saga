export function loginValidation(username, password) {
  if (username === "" || password === "") {
    return "All fields must be field!";
  }

  if (username.length < 6) {
    return "Username must be at least 6 characters!";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters!";
  }
}
