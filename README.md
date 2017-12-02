# daburu-js-npm
This is a simple boiler-plate for an NPM module written in JavaScript.
In addition to the basics required to publish the module, it also
contains setup for unit testing with [Mocha](https://mochajs.org/),
[Chai](http://chaijs.com/), and [Istanbul](https://istanbul.js.org/).

After [setting up your npm account](https://docs.npmjs.com/getting-started/publishing-npm-packages)
and [.nprmc](https://docs.npmjs.com/files/npmrc) file, run the following
npm scripts:

```bash
npm install
npm publish
```

## eslint
This project includes an `.eslintrc.json` file and `eslint` is included as a development dependency.  You can lint the project manually by running the following npm script:

```bash
npm run lint
```

### Setting up the IDE to Use `tslint`
If you're using WebStorm, you may need to enable `eslint`.  You can do so by performing the following steps:

* * Hit `Ctrl+Alt+2` to open **Settings**.
* Under **Languages and Frameworks | Javascript | Code Quality Tools | ESLint** click the **Enable** checkbox.

### Spaces, or tabs?
The `eslint` configuration in this project assumes the use of tabs instead of spaces.  This may or may not be what you want.  You can change that preference by editing the [indent](https://eslint.org/docs/2.0.0/rules/indent) rule.

If you're using WebStorm, your default configuration may prefer spaces.  If so, perform the following steps:

* Hit `Ctrl+Alt+2` to open **Settings**.
* Under **Editor | Code Style | TypeScript** look at the **Tabs and Indent** tab.
* Check the **Use tab character** box.

## Running and Debugging Tests
As we mentioned above, the project includes a unit testing and code coverage frameworks.  There are a number of ways to run and debug the tests.

### Run the Tests with `npm`
You can run the test from an `npm` script like so:

```bash
npm run test
```

This will run the tests and produce a code coverage report.

### Runing Tests in WebStorm
This project uses [Mocha](https://mochajs.org/) and it just so happens that WebStorm has nice support for this platform.
 
 To run or debug a single test, you can simply *right-click* on a test file and run (or debug) it from the context menu.
 
 To create a run/debug configuration for all the tests, perform these steps:
 
 * From the main menu, go to **Run | Edit Configurations...** 
 * Click the *Add New Configuration* button (or hit `Alt+Insert`).
 * Select **Mocha** from the menu that appears.
 * The default options are typically fine, though you'll need to add a bit of information:
 	+ Select **All in directory**
 	+ **Test directory:** *the path to the test directory*
 	+ Check **Include subdirectories**
 	
 When you run a configuration using the *Run with Coverage* options, the IDE will produce a coverage report and mark up your code files coverage indicators.
 
