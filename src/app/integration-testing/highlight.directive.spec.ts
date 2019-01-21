/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core'; 

// Testing attribute directives.

// This is a host (dummy) component, created for the purpose for this test.
@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent { 
}

describe('HighlightDirective', () => {
	let fixture: ComponentFixture<DirectiveHostComponent>;
  
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				DirectiveHostComponent,
				HighlightDirective
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DirectiveHostComponent);
		fixture.detectChanges(); 
	});
	
	// testing the component WITH a highlight value.
	it('should highlight the first element with cyan', () => {
		let de = fixture.debugElement.queryAll(By.css('p'))[0];
		
		expect(de.nativeElement.style.backgroundColor).toBe('cyan');
	});
	
	// testing the component WITHOUT a highlight value.
	
	/*
	it('should highlight the second element with yellow', () => {
		let de = fixture.debugElement.queryAll(By.css('p'))[1];
		
		expect(de.nativeElement.style.backgroundColor).toBe('yellow');
	});
	// This test is too specific, and will break if we change the default colour.
	*/
	
	it('should highlight the second element with the default colour', () => {		
		let de = fixture.debugElement.queryAll(By.css('p'))[1];
		
		// Obtain a reference to the HighlightDirective instance from the debugElement.
		let directive = de.injector.get(HighlightDirective);
		
		// We can now obtain the directive's default colour.
		expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
	});
	
});
