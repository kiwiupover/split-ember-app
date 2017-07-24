/*jshint node:true*/
/* global require, module */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const mergeTrees = require('broccoli-merge-trees');
const concat = require('broccoli-concat');
const Funnel = require('broccoli-funnel');

const debug = require('broccoli-stew').debug;

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    storeConfigInMeta: false
  });

  app._concatFiles = function(tree, options) {
    if (options && options.annotation === 'Concat: App') {
      options.sourcemaps= {
        enabled: true
      }

      let debugTree = debug(tree, { name: 'debugTree'});

      let headerTree = new Funnel(debugTree, {
        include: [
          'split-app/helpers/**.*',
          'split-app/initializers/**.*',
          'split-app/instance-initializers/**.*',
          'split-app/services/**.*',
          'split-app/components/header-nav/*',
          'split-app/templates/application.*',
          'split-app/app.js',
          'split-app/resolver.js',
          'split-app/router.js',
          'vendor/ember-cli/app-prefix.js',
          'vendor/ember-cli/app-suffix.js',
          'vendor/ember-cli/app-config.js',
          'vendor/ember-cli/app-boot.js'
        ],
      });

      let debugHeaderTree = debug(headerTree, { name: 'debugHeaderTree'});

      let headerApp = concat(debugHeaderTree, {
        allowNone: true,
        outputFile: 'assets/headerapp.js',
        wrapInFunction: false,
        sourceMapConfig: { enabled: true },
        inputFiles: [app.name + '/**/*.js'],
        headerFiles: [
          'vendor/ember-cli/app-prefix.js'
        ],
        footerFiles: [
          'vendor/ember-cli/app-suffix.js',
          'vendor/ember-cli/app-config.js',
          'vendor/ember-cli/app-boot.js'
        ]
      });

      let splitApp = concat(tree, options);

      return mergeTrees([
        splitApp,
        headerApp
      ], {
        overwrite: true,
        annotation: 'TreeMerger (appAndDependencies)'
      });

    }
    return this.concatFiles(tree, options, 'SECRET_DEPRECATION_PREVENTION_SYMBOL');
  };

  return app.toTree();
};
