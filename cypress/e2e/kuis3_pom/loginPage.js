class LoginPage {

  usernameField() {
    return cy.get('input[name="username"]')
  }

  passwordField() {
    return cy.get('input[name="password"]')
  }

  loginButton() {
    return cy.get('button[type="submit"]')
  }

  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  }

  login(username, password) {
    if (username) {
      this.usernameField().clear().type(username)
    }

    if (password) {
      this.passwordField().clear().type(password)
    }

    this.loginButton().click()
  }
}

export default LoginPage
