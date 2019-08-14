
module.exports = {
    '@tags': ['google'],
    '@disabled': true,
    'Google advanced search test': function (browser) {
        const page = browser.page.googleAdvancedSearch();
        page
            .navigate()
            .setQuery('Elon Musk')
            .selectFilter('@languageDropdown', 'lang_it')
            .selectFilter('@lastUpdateDropdown', 'm')
            .pause(1000)
            .search()
            .pause(1000);

        const resultsPageQuerySelector = `#searchform input[name="q"][value="Elon Musk"]`;
        const resultsPageLanguageSelector = '[aria-label="Search Italian pages"]';
        const resultsPagelastUpdateSelector = '[aria-label="Past month"]';

        browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input');
        browser.assert.containsText(resultsPageLanguageSelector, 'Search Italian pages', 'UI: Language is set to Italian');
        browser.assert.containsText(resultsPagelastUpdateSelector, 'Past month', 'UI: Last update is set to Past Month');
        browser.saveScreenshot('tests_output/google.png');

        browser.end();
    }
};