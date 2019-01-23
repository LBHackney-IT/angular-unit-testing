import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
	// How to structure a test...
	// - Arrange (set up components, services, functions etc.)
	// - Act     (perform actions to test)
	// - Assert  (check what we want to happen/not happen).
	  
	// Arrange
	let component: VoteComponent;
	
	// This callback is executed before all tests.
	beforeAll(() => {});

	// This callback is executed before each test.
	beforeEach(() => {
		component = new VoteComponent();
	});
	
	// This callback is executed after each test.
	afterEach(() => {});
	
	// This callback is executed after all tests.
	afterAll(() => {});

	it('should increment total votes when upvoted', () => {
		// Act
		component.upVote();

		// Assert
		expect(component.totalVotes).toBe(1);
	});
  
	it('should decrement total votes when downvoted', () => {  
		// Act
		component.downVote();
	
		// Assert
		expect(component.totalVotes).toBe(-1);
	});

});