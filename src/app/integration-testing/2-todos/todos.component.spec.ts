/* tslint:disable:no-unused-variable */
import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
	  imports: [ HttpClientModule ],
      declarations: [ TodosComponent ],
	  providers: [ TodoService ] // we require the TodoService for this test.
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges(); <- this would automatically call the component's ngOnInit().
  });

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should load todos from the server', fakeAsync(() => {
		// async() or fakeAsync() should be used when dealing with Promises in tests.
		
		// Obtain a reference to the service.
		let service = TestBed.get(TodoService);
		// This works if the service is provided (in providers[]) at the module level. These services are singletons.
				
		// For a service instance specific to a component, the service should be provided at the component level.
		// fixture.debugElement.injector.get(TodoService)
		
		let todos = [1, 2, 3];
		spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve(todos));
		
		// We wanted to set the spy on getTodos before updating the component.
		fixture.detectChanges();
		
		tick(); // simulates the passage of time.
		
		expect(component.todos.length).toBe(todos.length);
	}));
	
});
