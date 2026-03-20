import { browser } from '@wdio/globals'

export default class Webpage {

    open (path) {
        return browser.url(`https://www.saucedemo.com/`)
    }
}
