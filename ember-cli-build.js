/*jshint node:true*/
/* global require, module */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const mergeTrees = require('broccoli-merge-trees');
const concat = require('broccoli-concat');
const Funnel = require('broccoli-funnel');

const debug = require('broccoli-stew').debug;

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app._concatFiles = function(tree, options) {
    if (options && options.annotation === 'Concat: App') {
      options.sourcemaps= {
        enabled: true
      }

      let headerTree = new Funnel(tree, {
        include: [
          'split-app/components/header-nav/*',
          'split-app/app.js',
          'split-app/resolver.js',
          'split-app/router.js'
        ],
      });

      let headerApp = concat(headerTree, {
        allowNone: true,
        outputFile: 'assets/headerapp.js',
        wrapInFunction: false,
        sourceMapConfig: { enabled: true }
      });

      let splitApp = this.concatFiles(tree, options, 'SECRET_DEPRECATION_PREVENTION_SYMBOL', { name: 'additionalTrees-tree' });

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
