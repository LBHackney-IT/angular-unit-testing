import { VoteComponent } from './vote.component'; 

// Unit testing a component's emitted event.

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
	  let totalVotes = null;
	  component.voteChanged.subscribe(tv => totalVotes = tv);
	  component.upVote();
	  
	  expect(totalVotes).not.toBeNull();
	  // this is too generic...
	  
	  expect(totalVotes).toBe(1);
	  // this is better.
  });
});