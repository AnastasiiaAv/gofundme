class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get searchBtn() {return $('[class="show-for-large dropdown-lvl1-link"]');}
    get searchInputFld() {return $('[class="heading-3 js-search-input"]');}
    get palomaImg() {return $('[href="/f/Paloma-Zuluaga?qid=4e68fc16c57d36b3c01d354eb780b9b8"]');}
    get seeallresultLnk() {return $('[class="text-underline query-suggestion-link-text"]');}
    get categoriesLnk() {return $('[class="section-categories--open-for-large"]');}
    get visitcommunityBtn() {return $('[class="button hollow button--max-width--expanded box-shadow-none mb hrt--button-secondary"]');}
    get gofundmecommunityBtn() {return $('[class="dropdown-lvl2-link pl0"][href="https://community.gofundme.com/"]');}
    get communityPage() {return $('[class="heading heading-1 vanilla-1q4ht1k-typography-pageTitle-typography-pageTitle-typography-largeTitle-typography-largeTitle-banner-title"]');}
    get gofundmecommunityBtn() {return $('[class="dropdown-lvl2-link pl0"][href="https://community.gofundme.com/"]');}
    get medicalBtn() {return $('[class="cat-ico cat-ico--medical"]');}
    get memorialBtn() {return $('class="cat-ico cat-ico--memorial"');}
    get emergencyBtn() {return $('[class="cat-ico cat-ico--emergency"]');}
    get nonprofitBtn() {return $('class="cat-ico cat-ico--charity"');}
    get educationBtn() {return $('[class="cat-ico cat-ico--education"]');}
    get animalsBtn() {return $('[class="cat-ico cat-ico--animal"]');}
    get enviromentBtn() {return $('[class="cat-ico cat-ico--environment"]');}
    get businessBtn() {return $('[class="cat-ico cat-ico--business"]');}
    get animalsBtn() {return $('[class="cat-ico cat-ico--animal"]');}
    get categoryBtn() {return $('[class="heading-1"]');}
    get allcategoriesLnk() {return $('[property="name"]');}
    // Helper method to avoid code duplication

    navigateOnMenuItem(Text) {
        //loop through all of those buttons (item)
        const item = {};
        this.categoriesLnk.forEach(element => {
            item[element.getText()] = element;
        });
        //console.log(Object.keys(item)); -show me in terminal 
        item[Text].click();
    }
    }

module.exports = new Login();