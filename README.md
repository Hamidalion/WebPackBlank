# WebPackBlank

 - Install Node.JS 12.18
 - To configure the environment, the following commands were executed:

```
npm init
.editorconfig
npm install --save-dev eslint                                       https://eslint.org/
./node_modules/.bin/eslint --init   or   npx eslint --init
npx install-peerdeps --dev eslint-config-airbnb-base                https://www.npmjs.com/package/eslint-config-airbnb-base
npm i webpack webpack-cli --save-dev                                https://webpack.js.org/
    add in package.json new script "lint": "eslint"
    in .eslintrc.json exchange "es2021": true on es6
    create webpack.config.js and paste property from                https://webpack.js.org/
create .eslintignore and added ignoring files
npm install --save-dev html-webpack-plugin                          https://webpack.js.org/plugins/html-webpack-plugin/
    add settings of html-webpack-plugin to use date index.html
    npm install --save-dev clean-webpack-plugin                     https://www.npmjs.com/package/clean-webpack-plugin/

```
