import LoginPage from "../PageObjects/LoginPage.js"
const jsonData=require('../fixtures/TestData.json')
describe("LinkedInProjectDemo",()=>
{
        jsonData.forEach((data)=>{
        it("Login to Naukri account and verifing the text in search box ",()=>
            {
                cy.visit("https://www.naukri.com",{ headers: { "Accept-Encoding": "gzip, deflate" } })
               
                    const ln=new LoginPage()
                    ln.clickSubmit()
                    ln.setUserName(data.userName)
                    ln.setPassword(data.password)
                    ln.clickLogin()
                    cy.wait(5000)
                    ln.verifyText()
            })
    })     
})