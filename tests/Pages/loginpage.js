import{Locators} from '../Locators/Locators.js';
import{page} from '@playwright/test';


export class LoginPage
{


    constructor(page)
    {
        this.page = page;
    }
     
    async login(username, password) {
        // implement login steps here, e.g.:
         await this.page.fill(Locators.userNameInput, username);
         await this.page.fill(Locators.passwordInput, password);
         await this.page.click(Locators.loginButton);
    }


}
