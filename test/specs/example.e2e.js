const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const {addStep} = require('@wdio/allure-reporter').default

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        addStep('Користувач відкриває сайт для логіну')
        await LoginPage.open()
        addStep('Заповнення логіну і паролю')

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        addStep('Перевірка на успішний логін')
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})


