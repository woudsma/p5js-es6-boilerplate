# p5.js + ES6 + npm boilerplate
This is a boilerplate (project template) aimed at beginners, containing the basic files and tools for developing with [p5.js](https://p5js.org/) + [ES6](https://codeburst.io/es6-tutorial-for-beginners-5f3c4e7960be) + [npm](https://www.npmjs.com/).  

[DEMO](https://p5js.omnio.studio)  
## Installation
##### Requirements
First: Download and install [Node.js](https://nodejs.org/en/).  
Second: Open your terminal and navigate to the the desired local directory where you want to store your project - for example:
```shell
cd /Users/woudsma/KABK/coding
# Or
cd ~/KABK/coding
# ~/ is your home directory, in my case /Users/woudsma
```
Show the current directory path: `pwd`  
List the files in the current directory: `ls`  
Quick tutorial: [25 Terminal Command For Beginners](https://www.youtube.com/watch?v=oStNbXzv7mE)

Then:  
Clone (a) repository from GitHub/Bitbucket/.. to the local directory, go into the directory and install the project dependencies (specified in `package.json`) using npm - for example:  
```shell
# git clone <repository> <project-name>
# cd <project-name>
# npm install

git clone https://github.com/woudsma/p5js-es6-boilerplate my-project
cd my-project
npm install
```
### Development
Start a local development server. Whenever you save a JavaScript file in the project, the `react-scipts` npm module re-compiles the code and reloads the browser page automatically. Use this while developing your project.  
```shell
# Make sure you are in the project folder
# cd /path/to/my-project
npm start
```
Starts a local development server which you can visit at `http://localhost:3000`  
### Production
Create an optimized production build from the code. These can be copied to any web host (e.g. via FTP), and will be able to run in most browsers.
```shell
# Make sure you are in the project folder
# cd /path/to/my-project
npm run build
```  
Creates a `/build` folder in the project directory, containing the static assets (`index.html`, `style.css`, `index.js`, etc.), which you can copy to any web host.

---
### What is p5.js?
p5.js is a JavaScript library which mimics the functionality of the [Processing](https://processing.org/) language. Most functions you know from Processing can also be used in p5.js. The difference with Processing is that instead of running a sketch as a standalone program on your computer, you can run sketches in a web page. A script written in Processing compiles to [Java](https://nl.wikipedia.org/wiki/Java_(programmeertaal) ([not to be confused with JavaScript](https://www.keycdn.com/support/difference-between-java-and-javascript/)). A script written in JavaScript with the p5.js library runs in a browser.
### What is ES6?
ES6 is the abbreviation of ECMAScript 6, later renamed to ECMAScript 2015 (ES2015). Fancy names, but it comes down to the modern version of JavaScript. Think of [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) as JavaScript. ES6 was released in 2015, but there have been updates in 2016 and 2017 as well (ES7, ES8, the latest version is referred to as ES.Next). You will find code examples / tutorials written in ES6, but a lot are also written in the 'older' version of JavaScript, which is referred to as ES5.  
[The difference between ES5 and ES6](https://codeburst.io/es5-vs-es6-with-example-code-9901fa0136fc).  

The problem today is that some browsers cannot understand some parts of ES6, which is a pain - because ES6 has great [syntax](https://www.w3schools.com/js/js_syntax.asp). You can import/export variables from/to other JavaScript files, import npm modules, etc. That is why we need to transpile ES6 to ES5 if we want our code to run in all browsers. This can be done manually on sites like [babeljs.io/repl](https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=MYewdgzgLgBAtgVwDZQJYAckE8YF4YAUAhgDQwBGAlHgHwxEwBUFAUC4ihtgQExk-UgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&lineWrap=false&presets=es2015%2Cstage-0%2Cstage-1%2Cstage-2%2Cstage-3&prettier=false&targets=&version=6.26.0&envVersion=) or programmatically with tools like [Babel](https://babeljs.io/).  
##### Give me a break
As web developers we don't want to think about this at all, and just write code which runs in every browser without errors.

That is why developing for the web using modern JavaScript today requires build/automation tools to take care of these issues. You can set up your own workflow, with tools like [Grunt](https://gruntjs.com/), [Gulp](https://gulpjs.com/), [Browserify](http://browserify.org/), [Webpack](https://webpack.js.org/), etc - which are all a pain to set up right.  
##### Using a boilerplate
A boilerplate takes care of these issues, depending on what you want to do or which frameworks/libraries you want to use. Want to create an app with a JavaScript UI framework like [React](https://reactjs.org/)? Use [create-react-app](https://github.com/facebook/create-react-app). Want to use p5.js with ES6? Use this boilerplate for example!  
### What is npm?
npm ([What is npm?](https://docs.npmjs.com/getting-started/what-is-npm)) is a package manager for the JavaScript programming language.
