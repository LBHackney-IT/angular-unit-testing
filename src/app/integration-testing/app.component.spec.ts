/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
		imports: [
			RouterTestingModule.withRoutes([])
		],
		declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });
  
  it('should have a router outlet', () => {
	  // Testing for a router outlet (route output).
	  
	  let de = fixture.debugElement.query(By.directive(RouterOutlet));
	  
	  expect(de).not.toBeNull();
  });
  
  it('should have a link to todos page', () => {
	  // Testing for a specific router link.
	  
	  let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
		// all instances of the routerLink directive, because a matching one isn't necessarily
		// the first instance.
		
	  let index = debugElements.findIndex(de => de.properties['href'] === '/todos');
	  // NOT attributes!
	  
	  expect(index).toBeGreaterThan(-1);
  });
});
