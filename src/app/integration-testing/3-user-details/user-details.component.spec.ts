/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserDetailsComponent } from './user-details.component';
import { Observable, Subject, empty } from 'rxjs';

// TESTING ROUTES

// Creating a lightweight dummy implementation of Angular's Router class for testing.
// We don't want to use an actual Router for testing, as it's considered [re-]testing Angular's code
// as opposed to our own.
class RouterStub {
	navigate(params) {
	}
}

// We also want a dummy of the ActivatedRoute.
class ActivatedRouteStub {
	private subject = new Subject();
	// Subjects are Observables that can push new values.
	
	push(value) {
		this.subject.next(value);
	}
	
	get params() {
		// This is a read-only property.
		return this.subject.asObservable();
	}
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ UserDetailsComponent ],
			providers: [
				{ provide: Router, useClass: RouterStub },
				// replace Router instances with an instance of our RouterStub.
				{ provide: ActivatedRoute, useClass: ActivatedRouteStub }
				// replace ActivatedRoute instances with an instance of our ActivatedRouteStub.
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
  
  	it('should redirect the user to the users page after saving', () => {
		// Testing a route.
		
		let router: RouterStub = TestBed.get(Router); // RouterStub
		let spy = spyOn(router, 'navigate'); // we don't need .and.callFake() here, it's a stub!
		
		component.save();
		
		// Testing whether the router has been instructed to navigate to the users page.
		expect(spy).toHaveBeenCalledWith(['users']);
	});
	
	it('should navigate the user to the not found page when an inavlid user ID is passed', () => {
		// Testing a route with parameters.
		
		let router = TestBed.get(Router); // RouterStub
		let spy = spyOn(router, 'navigate');
		
		let route: ActivatedRouteStub = TestBed.get(ActivatedRoute); 
		route.push({ id: 0 });
		
		// Testing whether the router has been instructed to navigate to the not-found page.
		expect(spy).toHaveBeenCalledWith(['not-found']);
	});

});
