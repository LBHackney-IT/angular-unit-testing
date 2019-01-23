# angular-unit-testing

This repository serves as a demonstration of how to write test suites for an Angular project.

The code in this project follows this Udemy course:

https://www.udemy.com/testing-angular-apps/

*NOTE: the source code provided with this course was written for a much older version of Angular (version 2?).
The source code in this project was updated to use the most recent version of Angular (currently 7) and the necessary dependencies.*

If you have trouble running the code in future version, it might be simpler to create a new Angular project,
copy everything in the `src/app` folder into the new project, and update references and dependencies where necessary.

Writing test suites is generally recommended when starting a new project. However, the initial cost of writing test suites as well as the code can be high, and isn't recommended when a project has to be delivered quickly (e.g. for a *minimum viable product*).

## Setting up this project

- Node Package Manager (npm) should be installed.
- Clone this repository into a new folder.
- Inside the folder, run `npm install` (or `yarn install` if you prefer).

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Code coverage

`ng test --code-coverage`

You can see code coverage results on the generated `coverage/index.html` web page.

The course recommends aiming for at least **70%** code coverage, provided there's enough time (and budget!) to do so.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
