
import { TodoService } from './todo.service'

export class TodosComponent { 
	todos: any[] = [];
	message: string; 

	constructor(private service: TodoService) {}

	ngOnInit() { 
		this.service.getTodos().subscribe(
			(t: any[]) => { this.todos = t; }
		);
	}

	add() { 
		var newTodo = { title: '... ' };
		this.service.add(newTodo).subscribe(
			(t: any) => { this.todos.push(t); },
			(err: string) => { this.message = err; }
		);
	}

	delete(id) {
		if (confirm('Are you sure?')) {
			this.service.delete(id).subscribe();
		}
	}  
}
