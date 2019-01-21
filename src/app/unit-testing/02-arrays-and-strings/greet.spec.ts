import {greet} from './greet';

// Unit testing a function that handles strings.

describe('greet', () => {

	it('should include the name in the message', () => {
		expect(greet('Drew')).toContain('Drew');
	});
	
});