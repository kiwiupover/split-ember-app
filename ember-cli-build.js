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

      let otherApp = concat(headerTree, {
        allowNone: true,
        outputFile: 'assets/headerapp.js',
        wrapInFunction: false,
        sourceMapConfig: { enabled: true }
      });

      let debugOtherApp = debug(otherApp, { name: 'otherApp-tree' });

      let debugTrees = debug(tree, { name: 'additionalTrees-tree' })
      return mergeTrees([
        this.concatFiles(debugTrees, options, 'SECRET_DEPRECATION_PREVENTION_SYMBOL'),
        otherApp,
      ], {
        overwrite: true,
        annotation: 'TreeMerger (appAndDependencies)'
      });

    }
    return this.concatFiles(tree, options, 'SECRET_DEPRECATION_PREVENTION_SYMBOL');
  };


  // app._concatFiles = function(tree, options) {
  //   console.log('asjfdlaskjf');
  //   if (options && options.annotation === 'Concat: App') {
  //     options.sourcemaps= {
  //       enabled: true
  //     }
  //
  //     console.log('options', options);
  //
  //     // var allFeatureFiles = _allFeatureFilesToStripFromApp(app, tree);
  //     //
  //     // // Exclude modules that should be removed from the build.
  //     // var appTree = funnel(tree, {
  //     //   exclude: allFeatureFiles
  //     // });
  //
  //     // Concat the main app files.
  //     // let concattedAppTree = concat(app, options);
  //     //
  //     // let debugconcattedAppTree = debug(concattedAppTree, {name: 'concattedAppTree'})
  //     //
  //     // let concattedFeaturesTree = _buildStripedBuildsFiles(app, tree, originalConcatFiles);
  //     //
  //     // let debugconcattedFeaturesTree = debug(concattedFeaturesTree, { name: 'concattedFeaturesTree' })
  //     //
  //     // return mergeTrees([concattedAppTree, debugconcattedFeaturesTree].filter(Boolean));
  //   }
  //
  //   // return originalConcatFiles.apply(this, arguments);
  // };

  // app.toTree = function(additionalTrees) {
  //   let debugTrees = debug(additionalTrees, { name: 'additionalTrees-tree' });
  //   let tree = mergeTrees(this.toArray().concat(debugTrees || []), {
  //     overwrite: true,
  //     annotation: 'TreeMerger (allTrees)'
  //   });
  //
  //   return app.addonPostprocessTree('all', tree);
  // };

  return app.toTree();
};
