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
        browser.debug();
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
        browser.debug();
        LoginPage.categoryBtn.waitForDisplayed();
    })
    it.only('should be able to switch between menu items', () => {
        browser.url('./')
        LoginPage.navigateOnMenuItem('Medical');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/medical-fundraising');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Memorial');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/memorial-fundraising');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Emergency');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/emergency-fundraising');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Nonprofit');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/charity-fundraising');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Education');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/education-fundraising');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Animals');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/animal-fundraiser');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Environment');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/environment-fundraising');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Business');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/business-fundraiser');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Community');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/community-fundraiser');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Competition');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/competition-fundraiser');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Creative');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/creative-fundraiser');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Event');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/event-fundraiser');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Faith');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/faith-fundraiser');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Family');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/family-fundraiser');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Sports');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/sports-fundraiser');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Travel');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/travel-fundraiser');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Volunteer');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/volunteer-fundraiser');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
        browser.url('./')
        LoginPage.navigateOnMenuItem('Wishes');
        browser.waitUntil(() => {
            return browser.getUrl().includes('/wishes-fundraiser');
        }, { timeout: 10000, timeoutMsg: '"Hello "' });
    });
});
