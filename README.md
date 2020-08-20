Steps to create this boilerplate as like below:

You can use common js modular pattern (used by Node js internal) and ES6 modular pattern as well.

Some workflow tools - webpack, gulp, grunt etc.

Webpack is to fix the issues as like huge coding on one file, debugging issue, multiple scripts (single responsibility principal), multiple request handling in index.html file, bandwidth loss, slowing the application

Webpack- module bundler (bundle multiple js file to single file)
https://webpack.js.org/

Main file - main.js/app.js/script.js (anyone)
Dependency file - UI.js, Store.js, weather.js, or any related js file (altogether)

Babel - Convert the latest code into the older version code so that both of old and modern browsers can read the code and execute well

JavaScript compiler - (next generation code to ES5)
https://babeljs.io/

How to install webpack on project folder
https://webpack.js.org/guides/getting-started/
npm init -y
npm install webpack webpack-cli --save-dev

Install babel under webpack
https://webpack.js.org/loaders/
https://webpack.js.org/loaders/babel-loader/
npm install -D babel-loader @babel/core @babel/preset-env webpack - (webpack (not needed))

babel documentation
https://babeljs.io/docs/en/babel-preset-env
@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).
Latest code is transformed to ES5 or any old version code

create index.html
Create src folder -> index.js
create webpack.config.js (name must be)
Use js common modular pattern
require path
....
webpack generates build folder automatically

Method 1. Babel loaders - write some rules on webpack.config.js
https://webpack.js.org/loaders/babel-loader/#usage
for multiple script js files loading and converting next generation code into ES5

Method 2. For async await converting support, use polyfill
https://webpack.js.org/guides/shimming/#loading-polyfills

Method 3. For server creating use webpack dev server
https://webpack.js.org/guides/development/#using-webpack-dev-server
https://webpack.js.org/configuration/dev-server/#devserverpublicpath-
