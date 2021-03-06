# Searo Project Task

A simple search application based on the provided wireframes and UI, this application uses the public REST API [restcountries.eu](https://restcountries.eu) which allows the search by country name.

This is a link to the project [demo](http://boldhand.com/searo/)

## Features
  * The search is using a public REST API with JavaScript.
  * Displaying partial search results in a list beneath the search field.
  * The application is responsive.
  * No plugins used.
  * Very subtle animation to add a better user experience using CSS3.

## Languages and Tools
* This project is build using validated and semantic **HTML5**, **SCSS** compiled to **CSS** and **JS ES5**.

* **npm scripts** is used as the building tool for: 
  * preprocessing SCSS files to CSS and adding source map for easier debugging.
  * Adding CSS3 vendor prefixes.
  * Linting JS and HTML.
  * Minifying for production the CSS, JS, HTML and images (the Searo logo and search icon svg files).
  * Creating a live server and watching file changes during production.

* The **VS Code editor** for the production.

## Browser support
This application is tested on the browsers Chrome, Safari, Firefox and Internet Explorer 10 and edge. 
The application is tested on android and IOS devices in addition to Windows and Mac desktop.

## Project Folder Structure
    .
    ├── UI
    ├── UX
    ├── builds                  # The Main Project folder.
    │   ├── development         # Use for viewing the code, Source files for the developing process.
    │   │   ├── css
    │   │   ├── images
    │   │   ├── js
    │   │   ├── scss
    │   │   └── index.html
    │   └── production          # Use for deployment, all files and images are compressed and minified.
    │       ├── css
    │       ├── images
    │       ├── js
    │       └── index.html
    ├── .gitignore              # Specifies intentionally untracked files to ignore on github
    ├── .editorconfig           # Maintain consistent coding styles between editors, check editorconfig.org if editor plugin needed.
    ├── .README.md              # About this project and documentation.
    ├── favicon.ico             # browser tab icon.
    └── package.json            # Includes the npm scripts and dependencies for development.

## usage
* For direct production and deployment use the folder **builds > production**
* For developing and/or viewing the written HTML, SCSS, CSS and JS code navigate to the folder **builds > development**

#### HTML
##### Generated HTML for the search suggestions
```html
<ul id="suggestions">
  <li>Country Name</li>
  <li>Country Name</li>
</ul>
```
##### Generated HTML for the history results
```html
<ul id="history">
  <li>
    <h2>Country Name</h2>
    <time>2017-04-11 07:44</time>
    <button class="remove-item"></button>
  </li>
  <li>
    <h2>Country Name</h2>
    <time>2017-04-11 07:44</time>
    <button class="remove-item"></button>
  </li>
</ul>
```
##### For old versions of Internet Explorer (Older than ie 10)
```html
<!--[if lt IE 10]>
  <p class="browserupgrade">You are using an outdated browser. Please upgrade your browser to improve your experience.</p>
<![endif]-->
```
#### CSS
The partials folder contains all the scss particals that are imported into the main.scss which is then compiled to css, I'm using partials to split the app styles into modules for simplicity.
```scss
@import 'partials/variables';
@import 'partials/normalize';
@import 'partials/global';
@import 'partials/header';
@import 'partials/searchbox';
@import 'partials/suggestions';
@import 'partials/history';
@import 'partials/animations';
@import 'partials/media-queries';
```
##### Favicon added to the directory root
I'm only using the basic favicon.ico file not all different devices Favicons for simplicity.

## Instructions for development

1. Clone or Download the project.

2. Install **node.js** and **npm** from nodejs.org (Note: npm is already packaged with the node installation).

4. to check that Node.js and npm are properly installed run the commands `node -v` and `npm -v` in the Terminal or Command Prompt on Windows, you should get the version number.

5. In the Terminal or Command Prompt, Navigate to the project directory using the command `cd` followed by the directory path.

6. run the command `npm install` to download all needed dependencies for development and production, the dependency folders and files will be downloaded to the project directory in a created folder node_modules.

6. To start developing run the command `npm start`, for final production and deploying run the command `npm run build`, a folder production will be created containing all production minified files.
