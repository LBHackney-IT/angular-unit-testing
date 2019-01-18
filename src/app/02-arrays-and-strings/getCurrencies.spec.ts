import {getCurrencies} from './getCurrencies';

// Unit testing a function that returns an array of values.

describe('getCurrencies', () => {

	it('should return the supported currencies', () => {
		const result = getCurrencies();
		
		// In this test the order doesn't matter;
		// we're only interested in whether the result contains the values we're looking for.
		expect(result).toContain('USD');
		expect(result).toContain('AUD');
		expect(result).toContain('EUR');
	});
	
});