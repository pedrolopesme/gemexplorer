// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/sinon/lib/sinon.js',
      'app/bower_components/sinon/lib/sinon/assert.js',
      'app/bower_components/sinon/lib/sinon/call.js',
      'app/bower_components/sinon/lib/sinon/collection.js',
      'app/bower_components/sinon/lib/sinon/match.js',
      'app/bower_components/sinon/lib/sinon/sandbox.js',
      'app/bower_components/sinon/lib/sinon/spy.js',
      'app/bower_components/sinon/lib/sinon/stub.js',
      'app/bower_components/sinon/lib/sinon/test.js',
      'app/bower_components/sinon/lib/sinon/test_case.js',
      'app/bower_components/sinon/lib/sinon/mock.js',
      'app/bower_components/sinon/lib/sinon/**/*.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'app/libs/curl/xhr_facade.js',
      'app/libs/curl/curl.js',
      'app/libs/rubygems/routes.js',
      'app/libs/rubygems/client.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [process.env.TRAVIS ? 'PhantomJS' : 'Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

  });
};
