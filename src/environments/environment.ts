// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: "AIzaSyDoIOj8lwhWe1YtPUZldxzRcQ50X8Qekg0",
    authDomain: "aviation-max.firebaseapp.com",
    databaseURL: "https://aviation-max.firebaseio.com",
    projectId: "aviation-max",
    storageBucket: "aviation-max.appspot.com",
    messagingSenderId: "1017340492467",
    appId: "1:1017340492467:web:496ecf030abcefd0698ec6"
  },


  debug: true,
  log: {
    auth: false,
    store: false,
  },

  smartadmin: {
    api: null,
    db: 'smartadmin-angular'
  }

};
