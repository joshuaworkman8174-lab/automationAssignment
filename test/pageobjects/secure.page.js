import { $ } from '@wdio/globals'
import Page from './page.js';

class SecurePage extends Page {
    
    get showMeSomething () {
        return $('#shopping_cart_container > a')
    }
}

export default new SecurePage();
