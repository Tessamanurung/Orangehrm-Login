import LoginPage from './loginPage'
import { loginData } from './loginData'

describe('Login OrangeHRM - POM Version', () => {

  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visit()
    loginPage.usernameField().should('be.visible')
  })

  it('TC-LGN-01 Login valid', () => {

    loginPage.login(
      loginData.valid.username,
      loginData.valid.password
    )

    cy.url().should('include', 'dashboard')
  })

  it('TC-LGN-02 Username salah', () => {

    loginPage.login(
      loginData.wrongUsername.username,
      loginData.wrongUsername.password
    )

    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC-LGN-03 Password salah', () => {

    loginPage.login(
      loginData.wrongPassword.username,
      loginData.wrongPassword.password
    )

    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC-LGN-04 Username kosong', () => {

    loginPage.login(
      loginData.emptyUsername.username,
      loginData.emptyUsername.password
    )

    cy.get('.oxd-input-field-error-message')
      .should('contain', 'Required')
  })

  it('TC-LGN-05 Password kosong', () => {

    loginPage.login(
      loginData.emptyPassword.username,
      loginData.emptyPassword.password
    )

    cy.get('.oxd-input-field-error-message')
      .should('contain', 'Required')
  })

})
