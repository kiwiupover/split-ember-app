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

      let headerAppFiles = new WatchedDir(app._resolveLocal('headerapp'));

      let templates = new Funnel(headerAppFiles, {
        include: ['**/template.hbs']
      });

      let processTemplates = preprocessTemplates(templates, {
        registry: app.registry,
        annotation: 'TreeMerger (pod & standard templates)'
      });

      let headerapptrees = mergeTrees([headerAppFiles, processTemplates], {
        overwrite: true
      });

      let headerAppFilesBabel = new Babel(new Funnel(headerapptrees, {
        srcDir: '/',
        destDir: 'headerapp',
        annotation: 'Funnel (headerapp)'
      }), this._prunedBabelOptions());


      let debugHeaderApp = debug(headerAppFilesBabel, { name: 'headerAppFilesBabel'});

      let mt  = mergeTrees([debugHeaderApp, tree]);

      let debugTree = debug(mt, { name: 'mt'});

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
        overwrite: true
      });

      let debugHeaderTree = debug(headerTree, { name: 'debugHeaderTree'});

      let headerApp = concat(debugHeaderTree, {
        allowNone: true,
        outputFile: 'assets/headerapp.js',
        wrapInFunction: false,
        sourceMapConfig: { enabled: true },
        inputFiles: [
          app.name + '/**/*.js',
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
