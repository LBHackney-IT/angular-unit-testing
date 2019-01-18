// A simple test suite for the presence of routes.

import { routes } from './app.routes';
import { UsersComponent } from './users/users.component';

describe('routes', () => {
	
	// These tests should have the same pattern, and be kept in alphabetical order.
	
	it('should contain a route for /users', () => {
		expect(routes).toContain({ path: 'users', component: UsersComponent });
		// i.e. testing the route exists, and is associated with the UsersComponent.
	});
	
});