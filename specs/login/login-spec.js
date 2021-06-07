const LoginPage = require('../../page_objects/login/login-page');
const { expect } = require('chai');

describe('Login', () => {
    afterEach(() => {
        browser.deleteCookies();
    });
    it('should be able to see fundraisers by location', () => {
        browser.url('./')
        LoginPage.searchBtn.click();
        LoginPage.searchInputFld.waitForDisplayed();
        LoginPage.searchInputFld.setValue('Brooklyn');
        LoginPage.seeallresultLnk.waitForDisplayed();
    })
    it('should be able to visit community page', () => {
        browser.url('./')
        LoginPage.visitcommunityBtn.click();
    })
    it('should be able to see fundraising categories', () => {
        browser.url('./')
        LoginPage.searchBtn.waitForDisplayed();
        LoginPage.medicalBtn.click();
        LoginPage.allcategoriesLnk.click();
        LoginPage.categoryBtn.waitForDisplayed();
    })
});
