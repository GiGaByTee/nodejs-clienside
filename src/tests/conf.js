exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ['todo-spec.js'],
    specs: ['e2e/index.spect.js'],
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    }
};

//chrome option for headless mode
// args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]