# AWS Lambda Node Boilerplate

A simple ES6 boilerplate for getting started with Lambda functions in node4.3 runtime.

Features:

- Written in ES6
- [Airbnb Javascript Style Guide] compliant
- Unit tests with [mocha] and [chai] and mocking with [sinon] for ES6 and ES5
- Code coverage with [istanbul] and [babel-istanbul]
- Transpiling with [Babel]
- Ability to deploy the transpiled lambda function to AWS using [node-lambda].

### Getting Started
Clone the project and delete the .git folder.
```sh
git clone --depth=1 --branch=master git://github.com/aceew/aws-lambda-node-boilerplate.git myNewRepo/
rm -rf myNewRepo/.git/
```
Development should take place in the `src/` directory following the directory structure within.

Be sure to run `npm install` inside the `src/` folder and inside the `build/` folder before trying to use any of the scripts or modules.

Code should be ES6 [Airbnb Javascript Style Guide] compliant and unit tests should be written for all functionality.

Before deploying to AWS functions must be transpiled down to ES5 to allow the code to run correctly. This is because node 4.3.2 does not fully support all new ES6 features.

### Scripts
Scripts available in the package.json

`npm run-script test` - Runs the unit and test script. Should be run in `src/` directory.

`npm run-script lint` - Lints against [Airbnb Javascript Style Guide]. Should be run in `src/` directory.

`npm run-script compile` - Transpiles ES6 code to ES5 from the `src/` directory to the `build/` directory. Should be run in the `src/` directory.

`npm run-script unit` - Runs unit test js files in `src/tests/`. Should be run in `src/` directory.

`npm run-script unit-es5` - Runs unit test js files in `build/tests`. Should be run in `build/` directory

`npm run-script node-lambda deploy` - Used for deploying already transpiled lambda functions to AWS. See [node-lambda] for parameters.

### Version
0.0.1

### Contributing
- Fork this repo.
- Branch your feature branch from master
- Complete your feature with tests
- Make sure your tests work
- Commit to your feature branch
- Create a PR back into master

Please make sure the contribution is compliant with the standards outlined in the rest of the repo.

As of yet no CI plan is set up for this project but I do plan on adding it.

License
----

MIT

[//]: # (References)
[Airbnb Javascript Style Guide]: <https://github.com/airbnb/javascript>
[mocha]: <https://mochajs.org/>
[chai]: <http://chaijs.com/>
[sinon]: <http://sinonjs.org/>
[istanbul]: <https://github.com/gotwarlost/istanbul>
[babel]: <https://babeljs.io/>
[babel-istanbul]: <https://github.com/jmcriffey/babel-istanbul>
[node-lambda]: <https://www.npmjs.com/package/node-lambda>
