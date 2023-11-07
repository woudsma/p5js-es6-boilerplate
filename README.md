# p5.js + ES6 + npm boilerplate

This is a boilerplate (project template) created for junior/beginner front-end developers.  
It containes the basic files and tools for developing a project with [ES6](https://codeburst.io/es6-tutorial-for-beginners-5f3c4e7960be), [npm](https://www.npmjs.com/) and the [p5.js](https://p5js.org/) library.

#### [DEMO](https://p5js-demo.omnio.studio/)

Summary:

- [Requirements](#requirements)
  - [Installation](#installation)
- [Usage](#usage)
  - [Development](#development)
  - [Production](#production)
- [What is p5.js?](#what-is-p5js)
- [What is ES6?](#what-is-es6)
- [What is npm?](#what-is-npm)

## Requirements

- Code editor like [VS Code](https://code.visualstudio.com) / [Sublime Text](https://www.sublimetext.com)
- Node.js + npm: [Node.js](https://nodejs.org/en/)

### Installation

Open your terminal and navigate to the the desired local directory where you want to store your project - for example:

```shell
cd /Users/woudsma/KABK/coding
# Or
cd ~/KABK/coding
# ~/ is your home directory, in my case /Users/woudsma
```

> Tips:  
> Show the current directory path: `pwd`  
> List the files in the current directory: `ls`  
> Quick tutorial: [25 Terminal Commands For Beginners](https://www.youtube.com/watch?v=oStNbXzv7mE)

Next, clone this repository from GitHub to a local directory, go into the directory and install the project dependencies using the `npm` command-line tool:

```shell
# git clone <repository> <project-name>
# cd <project-name>
# npm install

git clone https://github.com/woudsma/p5js-es6-boilerplate my-project
cd my-project
npm install
```

What this does: clone (download) the project from the online repository to a folder named `my-project` in the current working directory. Change directory (`cd`) to the newly created directory `my-project`. When inside this directory, run `npm install` to download and install the project dependencies. This will download the project dependencies (specified in `package.json`) to a folder named `node_modules` inside the project directory.

## Usage

### Development

Open the project folder in your code editor by dragging the folder icon onto the editor icon (macOS). Preferably do not open and edit single files, keep an overview of the project directory!

Start a local development server. Whenever you save a JavaScript file in the project, [esbuild](https://esbuild.github.io/) watches, re-compiles the code and reloads the browser page automatically. Use this while developing your project.

```shell
# Make sure you are in the project folder
# cd /path/to/my-project
npm start
```

Starts a local development server which you can visit at `http://127.0.0.1:3000`

> You can kill the development server process using the `Ctrl + c` key combination.  
> If you make changes to a file in the `public` folder, such as `index.html`, you'll have to manually refresh the page or restart the development server to see the changes.

### Production

Create an optimized production build from the code. The compiled HTML/CSS/JS can be copied to any web hosting provider (e.g. via FTP), and will be able to run in most browsers.

```shell
# Make sure you are in the project folder
# cd /path/to/my-project
npm run build
```

Creates a `build` folder in the project directory, containing the static assets (`index.html`, `style.css`, `index.js`, etc.), which you can copy to any web host.

> If you're familiar with [Docker](https://www.docker.com/products/docker-desktop/), you can use the included `Dockerfile` to create a new container for the project. It uses NGINX to serve the static files from the `build` folder. The server config file is `nginx.default.conf`. I'm using [Dokku](https://dokku.com/) to deploy the application to my server.
>
> ```shell
> # cd /path/to/my-project
> docker build -t p5js-demo .
> docker run --rm -it -p 5000:5000 p5js-demo
> # Server accessible on http://localhost:5000
> ```

## What is p5.js?

p5.js is a JavaScript library which mimics the functionality of the [Processing](https://processing.org/) language. Most functions you know from Processing can also be used in p5.js. The difference with Processing is that instead of running a sketch as a standalone program on your computer, you can run sketches in a web page. A script written in Processing compiles to [Java](<https://nl.wikipedia.org/wiki/Java_(programmeertaal)> "[not to be confused with JavaScript](https://www.keycdn.com/support/difference-between-java-and-javascript/"). A script written in JavaScript with the p5.js library runs in a browser.

## What is ES6?

ES6 is the abbreviation of ECMAScript 6, later renamed to ECMAScript 2015 (ES2015). Fancy names, but it comes down to the modern version of JavaScript. Think of [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) as JavaScript. ES6 was released in 2015, but there have been updates in 2016 and 2017 as well (ES7, ES8, the latest version is referred to as ES.Next). You will find code examples / tutorials written in ES6, but a lot are also written in the 'older' version of JavaScript, which is referred to as ES5.  
[The difference between ES5 and ES6](https://codeburst.io/es5-vs-es6-with-example-code-9901fa0136fc).

The problem today is that some browsers cannot understand some parts of ES6, which is a pain - because ES6 has great [syntax](https://www.w3schools.com/js/js_syntax.asp). You can import/export variables from/to other JavaScript files, import npm modules, etc. That is why we need to transpile ES6 to ES5 if we want our code to run in all browsers. This can be done manually on sites like [babeljs.io/repl](https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=MYewdgzgLgBAtgVwDZQJYAckE8YF4YAUAhgDQwBGAlHgHwxEwBUFAUC4ihtgQExk-UgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&lineWrap=false&presets=es2015%2Cstage-0%2Cstage-1%2Cstage-2%2Cstage-3&prettier=false&targets=&version=6.26.0&envVersion=) or programmatically with tools like [Babel](https://babeljs.io/).

##### Give me a break

As web developers we don't want to think about this at all, and just write code which runs in every browser without errors.

That is why developing for the web using modern JavaScript today requires build/automation tools to take care of these issues. You can set up your own workflow, with tools like [Grunt](https://gruntjs.com/), [Gulp](https://gulpjs.com/), [Browserify](http://browserify.org/), [Webpack](https://webpack.js.org/), etc - which are all a pain to set up right. These build tools can bundle your code and modules into a single JavaScript file, and you can set them up to [minify](https://jscompress.com/)/[uglify](https://www.uglifyjs.net/) your code for example.

##### Using a boilerplate

A boilerplate takes care of spending a lot of time preparing your workflow, depending on what you want to do or which frameworks/libraries you want to use. Want to create an app with a JavaScript UI framework like [React](https://reactjs.org/)? Use [create-react-app](https://github.com/facebook/create-react-app). Want to use p5.js with ES6? Use this boilerplate!

## What is npm?

npm ([What is npm?](https://docs.npmjs.com/getting-started/what-is-npm)) is a package manager for the JavaScript programming language. With npm, you can find and use open-source projects/libraries, like [p5.js](https://p5js.org/), [three.js](https://threejs.org/), [Preact](https://github.com/developit/preact), [D3.js](https://d3js.org/), and easily install smaller JavaScript modules like [hotkeys](https://github.com/jaywcjlove/hotkeys), [concaveman](https://github.com/mapbox/concaveman), [google-drive-spreadsheet](https://github.com/bgdavidx/google-drive-spreadsheet), etc.

To use a module/library listed on [npmjs.com](https://www.npmjs.com/) in your project, open a terminal window and make sure you are in the project directory:

```shell
cd /Users/woudsma/KABK/coding/my-p5js-sketch
```

Download and install the module from npm, and optionally save it to your `package.json` file as a project dependency:

```shell
npm install hotkeys-js --save
# Or
npm i hotkeys-js -S
```

The module (and the modules it depends on) gets downloaded and stored in the `node_modules` folder, inside the project directory. To save the module as a dependency of this project, use the `--save` (or `-S`) flag. This way `package.json` gets updated with the dependency. This is nice, because now you can store your source code in a repository without the entire `node_modules` folder. It is good practice not to keep `node_modules` inside your online repository (GitHub, Bitbucket/GitLab/..), because it usually contains a lot of files, this is unnecessary when we know which modules we have as project dependencies from the `package.json` file. The files/directories `git` needs to ignore when uploading to a online repository are mentioned in the `.gitignore` file. Try creating a repository for your project and uploading it to [Bitbucket](https://bitbucket.org/) (free private repositories). After cloning/downloading a project from a repository, you only need to run `npm install` to download all the dependencies to the `node_modules` folder again and get up and running.

Example: use a npm module in a JavaScript file using ES6 syntax:

```js
import hotkeys from "hotkeys-js";

// What is hotkeys?
// Read the docs: http://wangchujiang.com/hotkeys/
console.log(hotkeys);

hotkeys("f5", (event) => {
  event.preventDefault();
  alert("you pressed F5!");
});
```
