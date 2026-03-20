import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    get enterUsername () {
        return $('#user-name');
    }

    get person1Password () {
        return $('#password');
    }

    get loginButton () {
        return $('#login-button');
    }

    async login (username, password) {
        await this.enterUsername.setValue(username);
        await this.person1Password.setValue(password);
        await this.loginButton.click ();
    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();