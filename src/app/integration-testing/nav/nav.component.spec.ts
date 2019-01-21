import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
	let component: NavComponent;
	let fixture: ComponentFixture<NavComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule.withRoutes([]) ],
			declarations: [ NavComponent ]
		})
		.compileComponents();
	}));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
