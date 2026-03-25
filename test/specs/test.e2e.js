import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.loginLoop(); 
    });

    it('should login with valid credentials', async () => {
        await LoginPage.falseLoop();
    })
});


