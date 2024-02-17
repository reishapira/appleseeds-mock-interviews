export class UserAuthenticator {
  constructor() {
    this.users = new Map() // For simplicity, using a Map to store user data
    this.isAuthenticatedUser = false
  }

  registerUser(username, password) {
    if (!this.isPasswordStrong(password)) {
      throw new Error('Weak password. Please choose a stronger password.')
    }

    if (this.users.has(username)) {
      return false // User with the same username already exists
    }

    this.users.set(username, password)
    return true // User registered successfully
  }

  isUserRegistered(username) {
    return this.users.has(username)
  }

  loginUser(username, password) {
    if (this.users.get(username) === password) {
      this.isAuthenticatedUser = true
      return true // User login successful
    }
    return false // Incorrect credentials
  }

  isAuthenticated() {
    return this.isAuthenticatedUser
  }

  logoutUser() {
    this.isAuthenticatedUser = false
  }

  deleteUser(username) {
    if (!this.users.has(username)) {
      throw new Error(`User was not found.`)
    }

    this.users.delete(username)
  }

  isPasswordStrong(password) {
    // Implement password strength validation logic here
    // Return true if the password meets the strength requirements, otherwise return false
    // Example: Minimum length of 8 characters, at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    return passwordRegex.test(password)
  }
}
