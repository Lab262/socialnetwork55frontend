/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: '55-lab-social-network-web-front-end',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

     pace: {

    // addon-specific options to configure theme
    theme: 'corner-indicator',
    color: 'black',

    // pace-specific options
    // learn more on http://github.hubspot.com/pace/#configuration
    //           and https://github.com/HubSpot/pace/blob/master/pace.coffee#L1-L72
    catchupTime: 50,
    initialRate: .01,
    minTime: 100,
    ghostTime: 50,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: true,
    restartOnPushState: true,
    restartOnRequestAfter: 500,
    target: 'body',
    elements: {
      checkInterval: 100,
      selectors: ['body', '.ember-view']
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
      trackWebSockets: true,
      ignoreURLs: []
    }
  },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      "applicationId": "myAppId",
      "restApiId": "",
      "host": "http://localhost:1337/parse",
      "namespace": ""
    }
  };

  if (environment === 'development') {
    ENV.apiBaseUrl = 'http://localhost:1337/parse'
    ENV.appId = 'myAppId'

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';
    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiBaseUrl = 'https://leituradebolso-production.herokuapp.com/api'
    ENV.appId = '11412;lkl;sakdl;asd'
  }

  ENV['ember-simple-auth'] = {
   routeAfterAuthentication: 'user-edit',
   routeIfAlreadyAuthenticated: 'user-edit',
   authenticationRoute: 'login'
}
ENV['simple-auth'] = {
   // We use cookies to easy single sign on between server
   store: 'simple-auth-session-store:cookie',
   crossOriginWhitelist: ['*'],
 };
  return ENV;
};
