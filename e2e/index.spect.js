"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Football Test Suite', function () {
    describe('home page', function () {
        beforeAll(function () {
            protractor_1.browser.get("http://localhost:3004/");
        });
        it('should have right title', function () {
            protractor_1.browser.getTitle()
                .then(function (title) {
                expect(title).toEqual('CDP Project');
            });
        });
    });
});
//# sourceMappingURL=index.spect.js.map