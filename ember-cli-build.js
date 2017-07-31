/*jshint node:true*/
/* global require, module */
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

const featureApps = require('./config/feature-apps');

const templatesTree = function(app, tree, name) {
  var trees = [];
  if (tree) {
    var standardTemplates = new Funnel(tree, {
      srcDir: '/',
      destDir: name + '/templates',
      annotation: 'Funnel: Templates'
    });

    trees.push(standardTemplates);
  }

  if (tree) {
    trees.push(podTemplates(app, tree, name));
  }

  return mergeTrees(trees.filter(Boolean), {
    annotation: 'TreeMerge (templates)'
  });
};

const podTemplates = function(app, tree, name) {
  return new Funnel(tree, {
    include: app._podTemplatePatterns(),
    exclude: [ 'templates/**/*' ],
    destDir: name + '/',
    annotation: 'Funnel: Pod Templates'
  });
};

const buildFeatureApps = function(feature, app, tree) {
  let featureAppFiles = new WatchedDir(app._resolveLocal(feature));
  let templates = templatesTree(app, featureAppFiles, 'split-app');
  let processTemplates = preprocessTemplates(new Funnel(templates, {
    srcDir: 'split-app/templates',
  }), {
    registry: app.registry,
    annotation: 'TreeMerger (pod & standard templates)'
  });

  let appFilesBabel = new Babel(new Funnel(processTemplates, {
    include: ['**/*.js'],
    srcDir: '/',
    destDir: 'split-app',
    annotation: 'Funnel (' + feature + ')'
  }), app._prunedBabelOptions());

  let featureFolder = rename(appFilesBabel, 'split-app', feature);
  let mergedFiles = mergeTrees([featureFolder, tree]);
  let headerTree = new Funnel(mergedFiles, {
    include: featureApps[feature]
  });

  return headerApp = concat(headerTree, {
    allowNone: true,
    outputFile: 'assets/' + feature + '.js',
    wrapInFunction: false,
    sourceMapConfig: { enabled: true },
    inputFiles: [
      'split-app' + '/**/*.js',
      feature + '/**/*.js'
    ],
    headerFiles: [
      'vendor/ember-cli/app-prefix.js'
    ],
    footerFiles: [
      'vendor/ember-cli/app-suffix.js',
      'vendor/ember-cli/app-config.js',
      'vendor/ember-cli/app-boot.js'
    ]
  });
}

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    storeConfigInMeta: false
  });

  app._concatFiles = function(tree, options) {
    if (options && options.annotation === 'Concat: App') {
      options.sourcemaps= {
        enabled: true
      }

      let splitApp = concat(tree, options);

      let builtFeatureApps = Object.keys(featureApps).map(feature => {
        return buildFeatureApps(feature, app, tree);
      });

      return mergeTrees([
        splitApp,
        mergeTrees(builtFeatureApps)
      ], {
        overwrite: true,
        annotation: 'TreeMerger (featureApps)'
      });

    }
    return this.concatFiles(tree, options, 'SECRET_DEPRECATION_PREVENTION_SYMBOL');
  };

  return app.toTree();
};
