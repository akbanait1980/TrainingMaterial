# Installation 

> node --version
> npm --version

> npm install <package_name>
> npm i <package_name>
> npm i <package_name>@<version>
> npm i <package_name> -g    // global


# Create a new react app
> npm i create-react-app 
> create-react-app --version
> create-react-app myapp
> cd myapp
> code .   // open vscode
> npm start

http://localhost:3000

or


> npx create-react-app myapp
> cd myapp
> code .   // open vscode
> npm start

# understand folder structure

package.json - this is an npm configuration file, it includes detail about your app (meta data)
               it include list of dependenices and some script

package-lock.json - this is an auto generate file that get update whenever npm does any opeartion

node_modules - this folder contain the depndencies sourec code require for react project
               > npm install     or     > npm update

public - this folder contain public assets of the app
         it also contain index.html where react will mount application root component

.gitignore - this file used by git to ignore file and folder while publishing source code into
             remote server

README.md - it provide documentation to read

src - source - it contain the application source code where you mostly create files

there 3 files which together form root / app component
App.css - style sheet
App.js - main js file
App.test.js - test case

index.css - global css file

index.js - it is main entry point of the app like main method

# Components in react
- in react a component represent a part of user intertace
- what ever is visible on the web browser it is a component
- component are reusable and make the app more module


# type of component
- class component - statefull component
- functional component - stateless component

state = data

before React 16.4 we can not use state in function component but after this version they come up
with new concept react Hook


state = maintain data within a component
props = inter communication between the compoent


















 

