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
const mv = require('broccoli-stew').mv;

const featureApps = require('./config/feature-apps');

const _resolveLocal = function(projectRoot, to) {
  return path.join(projectRoot, to);
}

module.exports = function(defaults) {
  let headerapp = new WatchedDir(_resolveLocal(defaults.project.root, 'headerapp/app'));

  let appTrees = new WatchedDir(_resolveLocal(defaults.project.root, 'app'));

  let headerAppTrees = mergeTrees([appTrees, headerapp], {
    overwrite: true
  });

  let debugheaderAppTrees = debug(headerAppTrees, { name: 'headerAppTrees'});

  let headerApp = new EmberApp(defaults, {
    trees: debugheaderAppTrees,
    appTree: debugheaderAppTrees,
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

  let appTree = new Funnel(app.toTree());

  return mergeTrees([appTree, headerAppJS, debugheaderAppTrees], {
    overwrite: true
  });
};
