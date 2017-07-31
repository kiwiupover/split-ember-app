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

const podTemplates = function(app,tree,  name) {
  return new Funnel(tree, {
    include: app._podTemplatePatterns(),
    exclude: [ 'templates/**/*' ],
    destDir: name + '/',
    annotation: 'Funnel: Pod Templates'
  });
};


module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    storeConfigInMeta: false
  });

  app._concatFiles = function(tree, options) {
    if (options && options.annotation === 'Concat: App') {
      options.sourcemaps= {
        enabled: true
      }

      let keys = Object.keys(featureApps);
      
      Object.keys(featureApps).map(app=> {
        console.log('app-suffix', app-suffix);
      });


      let headerAppFiles = new WatchedDir(app._resolveLocal('headerapp'));

      let headerappTemplatesTree = templatesTree(app, headerAppFiles, 'split-app');

      let processTemplates = preprocessTemplates(new Funnel(headerappTemplatesTree, {
        srcDir: 'split-app/templates',
      }), {
        registry: app.registry,
        annotation: 'TreeMerger (pod & standard templates)'
      });

      let headerAppFilesBabel = new Babel(new Funnel(processTemplates, {
        include: ['**/*.js'],
        srcDir: '/',
        destDir: 'split-app',
        annotation: 'Funnel (headerapp)'
      }), this._prunedBabelOptions());

      let renameFolder = rename(headerAppFilesBabel, 'split-app', 'headerapp');

      let mergedFiles = mergeTrees([renameFolder, tree], {
        overwrite: true
      });

      let headerTree = new Funnel(mergedFiles, {
        include: [
          'split-app/helpers/**.*',
          'split-app/initializers/**.*',
          'split-app/instance-initializers/**.*',
          'split-app/services/**.*',
          'headerapp/templates/application.js',
          'headerapp/app.js',
          'headerapp/router.js',
          'headerapp/components/book-ends/*',
          'split-app/resolver.js',
          'vendor/ember-cli/app-prefix.js',
          'vendor/ember-cli/app-suffix.js',
          'vendor/ember-cli/app-config.js',
          'vendor/ember-cli/app-boot.js'
        ]
      });

      let debugHeaderTree = debug(headerTree, { name: 'd-debugHeaderTree'});

      let headerApp = concat(debugHeaderTree, {
        allowNone: true,
        outputFile: 'assets/headerapp.js',
        wrapInFunction: false,
        sourceMapConfig: { enabled: true },
        inputFiles: [
          'split-app' + '/**/*.js',
          'headerapp' + '/**/*.js'
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
