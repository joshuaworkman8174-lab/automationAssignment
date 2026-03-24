import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import securePage from '../pageobjects/secure.page.js'
import loginPage from '../pageobjects/login.page.js'


 describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await loginLoop(); 
    });
});

const usernameList = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user']

async function loginLoop() {
            for (let i = 0; i < usernameList.length; i++) {
                const username = usernameList[i]
                const password = 'secret_sauce'
                await LoginPage.open();
                await LoginPage.login(username,password);
            }
        }


describe('Swag Labs sign in should function', () => {
    it('should login with valid credentials', async () => {
        await falseLoop();
    })
})

async function falseLoop() {
    for (let i = 0; i < usernameList.length; i++) {
        const username = usernameList[i]
        const password = 'nonsense'
        await LoginPage.open();
        await LoginPage.login(username, password);
    }
}


