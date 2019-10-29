# Aviation Max

[live](https://smartadmin-angular.firebaseapp.com) demo

## AOT Note
Starting from version 0.4.5 we are supporting AOT builds.  
 
use `ng build --prod` to run AOT build
 
if you'll get `FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory` use `npm run build:aot2` or increase node memory heep size even more (check `package.json` `scripts` section for details) 


## Prerequisites

Make sure latest [angular-cli] installed globally. Follow [update-how-to](https://github.com/angular/angular-cli#updating-angular-cli)  

This project has dependencies that require **Node 4.x.x and NPM 3.x.x**.

For Windows users [git-bash](https://git-scm.com/downloads) is perfect **terminal**-window to manage nodejs projects. [1]
 
 
## Installation

1. Download and unpack
2. Run `npm i`. This may take a while. It may even *freeze* a bit on final steps - be patient. 
  * Also Remember, that npm on installing project dependencies may try to rebuild some modules (i.e *gyp*) and show scary red errors on that rebuild fails. Don't panic. If your `npm install` ends with long tree of project dependencies - then you are going right way. Nevermind deprecation WARNs. 

3. To run in local dev server run
  * `ng serve`
  
4. Point your browser to [http://localhost:4200](http://localhost:4200)

#### tip 
quick way to speed up builds when testing 
* exclude whole template parts from compilation by commenting them in `src/app/app.routing.ts` 




# Angular CLI readme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



