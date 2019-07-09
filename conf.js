exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['practiseExercise.js'],
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function () {
        browser.manage().window().maximize();
    },
};