# angular-unit-testing

This repository serves as a demonstration of how to write test suites for an Angular project.

The code in this project follows this Udemy course:

https://www.udemy.com/testing-angular-apps/

NOTE: the source code provided with this course was written for a much older version of Angular (version 2?).
The source code in this project was updated to use the most recent version of Angular (currently 7) and the necessary dependencies.
If you have trouble running the code in future version, it might be simpler to create a new Angular project,
copy everything in the `src/app` folder into the new project, and update references and dependencies where necessary.

## Setting up this project

- Node Package Manager (npm) should be installed.
- Clone this repository into a new folder.
- Inside the folder, run `npm install` (or `yarn install` if you prefer).

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
