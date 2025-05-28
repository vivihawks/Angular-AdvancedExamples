===============================
        Angular Testing
===============================
Testing 
	- Black Box
		- E2E Testing - Tester's Job
			- Protractor(Angular's) + Selenium
			- Cypress <---<<<
	- White Box
		- Unit Testing - User's Job
			- Karma(Angular's) + Jasmine
			- Jest <---<<<
			- Mocha
=================================================
        Angular Jest
=================================================

---------------Step 1: Create Your Angular Project---------------

Use the Angular CLI to create a new Angular project:

ng new your-angular-project
cd your-angular-project

---------------Step 2: Uninstall all karma jasmine package---------------

Go to the Package.json file and remove all these packages

  "devDependencies": {
    "@angular-devkit/build-angular": "^14.2.13",
    "@angular/cli": "~14.2.13",
    "@angular/compiler-cli": "^14.2.0",
    "@types/jasmine": "~4.0.0", // ***remove***
    "jasmine-core": "~4.3.0", // ***remove***
    "karma": "~6.4.0", // ***remove***
    "karma-chrome-launcher": "~3.1.0", // ***remove***
    "karma-coverage": "~2.2.0", // ***remove***
    "karma-jasmine": "~5.1.0", // ***remove***
    "karma-jasmine-html-reporter": "~2.0.0", // ***remove***
    "typescript": "~4.7.2"
  }js

Command to remove karma and jasmine packages

npm uninstall @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter

---------------Step 3: Remove the test object from angular.json---------------
This removal prevents ng test from being executed

        //REMOVE THIS TEST OBJECT BELOW
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.spec.json",
            "karmaConfig": "karma.conf.js",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          }
        }
        // Delete Above test object

---------------Step 4: Delete karma.config.js file and test.ts file ---------------

In your angular application locate the karma.config.js file your angular project has these two files delete them.
Setting the Stage: Installing Dependencies

---------------Step 5: Install the required Jest dependencies using your preferred package manager---------------

npm install -D jest jest-preset-angular @types/jest


This step installs Jest and configures it seamlessly with jest-preset-angular.

You might get the following error when installing:

npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! While resolving: jest-setup-project@0.0.0
npm ERR! Found: @angular-devkit/build-angular@14.2.13
npm ERR! node_modules/@angular-devkit/build-angular
npm ERR!   dev @angular-devkit/build-angular@"^14.2.13" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer @angular-devkit/build-angular@">=15.0.0 <18.0.0" from jest-preset-angular@14.0.0
...
...

To fix the error you must run the following command:

npm install -D jest jest-preset-angular @types/jest --legacy-peer-deps
OR 
npm install -D jest jest-preset-angular @types/jest --force

---------------Step 6: Create a setup-jest.ts---------------

Create a file in the src folder "src/setup-jest.ts" This file will serve as the setup script for Jest:

// setup-jest.ts
import 'jest-preset-angular/setup-jest';


This file ensures that Jest is properly configured for your Angular project.

---------------Step 7: Integrate Jest into your project ---------------

Add the configuration in your package.json file:

  "jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/src/setup.jest.ts"
    ],
    "testPathIgnorePatterns": [
      "<rootDir>/node_modules/",
      "<rootDir>/dist/"
    ],
    "globals": {
      "ts-jest": {
        "tsConfig": "<rootDir>/tsconfig.spec.json",
        "stringifyContentPathRegex": "\\.html$"
      }
    }
  }

---------------Step 8: Update test scripts in package.json---------------

Change the “scripts” test command to as follows:

  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "jest", // change here to this 
    "test:watch": "jest --watch", // New (optional)
    "test:coverage": "jest --coverage" // new (optional)
  },
.......

---------------Step 9: TypeScript Configuration---------------

Update your tsconfig.spec.json file to ensure compatibility:

/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jest"  // New 
    ]
  },
  "files": [
    "src/test.ts", // REMOVE THIS 
    "src/setup-jest.ts", // NEW Add this so that the file will be found
    "src/polyfills.ts"
  ],
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}

---------------Step 10: Run the test case---------------

Use the following command to run Jest tests:

npm run test

This command will initiate Jest and execute your tests. Jest will look for test files matching the pattern specified in your Jest configuration (usually files with a .spec.ts extension).
Test Results

Observe the Results: Jest will run your tests and provide detailed feedback in the terminal. You’ll see information about test suites, individual test cases, and the overall test results.

    Green Checkmarks: Indicates passed tests.
    Red Crosses: Indicates failed tests.

Additionally, Jest may generate a coverage report, depending on your configuration. You can find the coverage report in the specified directory (e.g., coverage/your-angular-project).

---------------Step 11: Generate Jest Test cases---------------

Generate Jest Test cases using one of these
    1. VS Code Plugin Jest Test Gen
    OR
    2. https://ngentest.github.io/

=================================================
