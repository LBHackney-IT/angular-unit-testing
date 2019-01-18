import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
	// How to structure a test...
	  
	// Arrange
	let component: VoteComponent;
	
	// (before all tests)
	beforeAll(() => {});

	// (before each test)
	beforeEach(() => {
		component = new VoteComponent();
	});
	
	// (after each test)
	afterEach(() => {});
	
	// (after all tests)
	afterAll(() => {});

	it('should increment total votes when upvoted', () => {
		// Act
		component.upVote();

		// Assert
		expect(component.totalVotes).toBe(1);
	});
  
  it('should decrement total votes when downvoted', () => {  
	  component.downVote();
	 
	  expect(component.totalVotes).toBe(-1);
  });

});