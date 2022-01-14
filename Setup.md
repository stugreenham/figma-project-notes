1. Create your package.json file by running the following
  npm init
2. Install dependancies by running the following
  npm install --save-dev css-loader html-webpack-inline-source-plugin@beta html-webpack-plugin style-loader ts-loader typescript url-loader webpack webpack-cli
3. Grab the api typings by running
  npm install --save-dev @figma/plugin-typings

To watch the folder
  npx webpack --mode=development --watch

To build for production
  npx webpack --mode=production