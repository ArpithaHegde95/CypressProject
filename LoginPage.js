class LoginPage
{
    txtUserName="input[placeholder='Enter your active Email ID / Username']";
    txtPassword="input[placeholder='Enter your password']";
    btnSignIn="#login_Layer";
    btnLogin="button[type='submit']";
    Message=".nI-gNb-sb__placeholder";
    setUserName(userName)
    {
        cy.get(this.txtUserName).type(userName)
    }
    setPassword(password)
    {
        cy.get(this.txtPassword).type(password)
    }
    
    clickSubmit()
    {
        cy.get(this.btnSignIn).click()
    }
    clickLogin()
    {
        cy.get(this.btnLogin).click()
    }
    verifyText()
    {
        cy.get(this.Message).should('have.text','Search jobs here')
    }
}
export default LoginPage