import { test, expect } from '@playwright/test';
module.exports.Homepage = class Homepage {
    constructor(page) {
        this.page = page;
        this.searchBox = page.locator("//input[@id='searchTxt']");
        this.searchIcon = page.locator("//span[@id='searchIcon']");
    }
}