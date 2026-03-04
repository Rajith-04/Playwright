import { test, expect } from '@playwright/test';
module.exports.login = class login{
    constructor(page){
        this.page = page;
        this.ok=page.locator("//button[text()='OK']");
        this.okGotIt=page.locator("//button[text()='Ok, Got it']");
        this.signInButton=page.getByRole('button', { name: 'Sign in with sdi-logo' });
        this.username = page.locator("//input[@name='userName']");
        this.password = page.locator("//input[@name='password']");
        this.loginButton = page.locator("//a[@id='loginSubmit']");
    }
    async launchUrl(){
        await this.page.goto('/');
    }
    async clickOk(){
        await this.ok.click();
    }
    async clickOkGotIt(){
        await this.okGotIt.click();
    }
    async clickSignInButton(){
        await this.signInButton.click();
    }
    async enterUsername(){
        await this.username.click();
         await this.username.fill("Rajithsuper");
    }
    async enterPassword(){
        await this.password.click();
         await this.password.fill("15SDI20");
    }
    async clickLoginButton(){
        await this.loginButton.click();
    }
}