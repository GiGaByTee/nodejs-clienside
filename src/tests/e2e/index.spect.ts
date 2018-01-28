import { by, browser, element } from 'protractor';

describe('Football Test Suite', () => {
	
	describe('home page', () => {
		beforeAll(() => {
			browser.get("http://localhost:3004/");
		});
		
		it('should have right title', () => {
			browser.getTitle()
				.then((title: string) => {
					expect(title).toEqual('CDP Project');
				});
		})
		
	})
})