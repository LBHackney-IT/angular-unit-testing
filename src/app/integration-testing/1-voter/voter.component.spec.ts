import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {

	let component: VoterComponent;
	let fixture: ComponentFixture<VoterComponent>;
	
	beforeEach(() => {
		// This code will look very different if you generate a component using angular-cli.
		// The below code is all that's necessary in this case, because webpack (used by angular-cli)
		// compiles everything into one file; async() and .compileComponents() are for instances where
		// multiple files have to be loaded.
		
		// Create an instance of the VoterComponent.
		// Because this is an integration test, we want Angular to create the component.
		TestBed.configureTestingModule({
			declarations: [ VoterComponent ]
		});

		fixture = TestBed.createComponent(VoterComponent);
		// returns a ComponentFixture<VoterComponent> (a wrapper).
		component = fixture.componentInstance;
		
		// We have access to:
		// fixture.nativeElement
		// fixture.debugElement
	});

	it('should render total votes', () => {
		component.othersVote = 20;
		component.myVote = 1;
		
		// We MUST have the following line, which updates the component's bindings.
		fixture.detectChanges();
		
		let de = fixture.debugElement.query(By.css('.vote-count'));
		// returns the first element that matches the selector/predicate.
		// By.directive() for Angular components.
		
		let el: HTMLElement = de.nativeElement;
		
		expect(el.innerText).toContain('21');
		// The course recommends testing for THE EXISTENCE of a string, as opposed to the actual string.
		// I'm not sure about that...
	});
	
	it('should highlight the upvote button if I have upvoted', () => {
		// Testing the presence of a class on the upvote button.
		
		component.myVote = 1;
		fixture.detectChanges();
		
		let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

		// We don't need the native element here...
		// We can check which classes this component has, as shown below.
		expect(de.classes['highlighted']).toBeTruthy();
	});
	
	it('should increase total votes when I click the upvote button', () => {
		// Testing an event binding.
		
		// Simulate a button click on the upvote button.
		let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
		button.triggerEventHandler('click', null);

		expect(component.totalVotes).toBe(1);
		
		// NOTE: we're not testing the value displayed in the component for the total number of votes;
		// we've done so in a previous test.
	});
	
	// The course recommends having UNIT and INTEGRATION tests in different files:
	// - .unit.spec.ts for unit tests
	// - .spec.ts for integration tests.
});
