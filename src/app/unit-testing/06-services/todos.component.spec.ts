import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { from, of, empty, throwError } from 'rxjs';

// Unit testing a component's use of a service.

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
	  service = new TodoService(null); // we're not going to use the HttpClient.
	  component = new TodosComponent(service); // a stub, or fake instance of the TodoService.
  });

  it('should set todos property with the items returned from the server', () => {  
	  //
	  let todos = [1, 2, 3];
	  spyOn(service, 'getTodos').and.callFake(() => {
		  return of(todos);
		  // this should mimic an actual result from the service if we're testing the kind of data returned.
	  });
	  
	  component.ngOnInit();
	  
	  expect(component.todos.length).toBe(3);
	  expect(component.todos).toBe(todos);
  });
  
  it('should call the server to save the changes when a new todo item is added', () => {
	  // This is an interaction test.
	  let spy = spyOn(service, 'add').and.callFake(t => {
		  return empty(); // an empty result from an Observable.
	  });
	  
	  component.add();
	  
	  // test whether the method was called.
	  expect(spy).toHaveBeenCalled();
  });
  
  it('should add the new todo returned from the server', () => {
	  let todo = { id: 1 };
	  let spy = spyOn(service, 'add').and.returnValue(
		from([ todo ])
	  );
	  // We're using 'from' rather than 'of' in the above spy:
	  // see https://stackoverflow.com/a/46093191/4073160
	  
	  component.add();
	  
	  // test whether the method was called.
	  expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });
  
  it('should set the message property if server returns an error', () => {
	  let error = 'Error from the server';
	  let spy = spyOn(service, 'add').and.returnValue(
		throwError(error)
	  );
	  
	  component.add();
	  
	  // test whether the method was called.
	  expect(component.message).toBe(error);
  });
  
  it('should call the server to delete a todo item if the user confirms', () => {
	  spyOn(window, 'confirm').and.returnValue(true);
	  // prevents the confirm dialogue box appearing, automatically answering yes.
	  let spy = spyOn(service, 'delete').and.returnValue(empty());
	  
	  component.delete(1);
	  
	  expect(spy).toHaveBeenCalledWith(1);
  });
  
  it('should not call the server to delete a todo item if the user cancels', () => {
	  spyOn(window, 'confirm').and.returnValue(false);
	  // prevents the confirm dialogue box appearing, automatically answering no.
	  let spy = spyOn(service, 'delete').and.returnValue(empty());
	  
	  component.delete(1);
	  
	  expect(spy).not.toHaveBeenCalled();
  });
  
});