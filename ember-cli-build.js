/*jshint node:true*/
/* global require, module */
const path = require('path');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const mergeTrees = require('broccoli-merge-trees');
const concat = require('broccoli-concat');
const Funnel = require('broccoli-funnel');
const Babel  = require('broccoli-babel-transpiler');
const WatchedDir = require('broccoli-source').WatchedDir;
const p = require('ember-cli-preprocess-registry/preprocessors');

const preprocessTemplates = p.preprocessTemplates;
const preprocessJs  = p.preprocessJs;

const debug = require('broccoli-stew').debug;
const rename = require('broccoli-stew').rename;
const map = require('broccoli-stew').map;

const featureApps = require('./config/feature-apps');

const _resolveLocal = function(projectRoot, to) {
  return path.join(projectRoot, to);
}

module.exports = function(defaults) {

  let headerapp = new WatchedDir(_resolveLocal(defaults.project.root, 'headerapp'));

  let headerAppTrees = new Funnel(headerapp);
  let debugheaderAppTrees = debug(headerAppTrees, { name: 'headerAppTrees' });

  let headerApp = new EmberApp(defaults, {
    trees: debugheaderAppTrees,
    name: 'headerapp',
    configPath: 'headerapp/config/environment',
    storeConfigInMeta: false
  });


  let headerAppJS = new Funnel(headerApp.toTree(), {
    include: ['assets/headerapp.*'],
    exclude: ['**/*.css']
  });


  let app = new EmberApp(defaults, {
    storeConfigInMeta: false
  });

  // app._concatFiles(tree, options) {
  //   options.sourceMapConfig = this.options.sourcemaps;
  //
  //   return concat(tree, options);
  // }

  app._concatFiles = function(tree, options) {
    if (options && options.annotation === 'Concat: App') {
      options.sourcemaps= {
        enabled: true
      }

      let debugvendorTrees = debug(tree, { name: 'vendorTrees' });

      return mergeTrees([
        tree,
        debugvendorTrees
      ], {
        overwrite: true,
        annotation: 'TreeMerger (featureApps)'
      });
    }

    return concat(tree, options);
  };

  let appTree = new Funnel(app.toTree());

  return mergeTrees([appTree, headerAppJS, debugheaderAppTrees], {
    overwrite: true
  });
};
