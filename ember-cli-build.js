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

const templatesTree = function(app, name) {

  var trees = [];
  if (app.trees.templates) {
    var standardTemplates = new Funnel(app.trees.templates, {
      srcDir: '/',
      destDir: name + '/templates',
      annotation: 'Funnel: Templates'
    });

    trees.push(standardTemplates);
  }

  if (app.trees.app) {
    trees.push(podTemplates(app, name));
  }

  return mergeTrees(trees.filter(Boolean), {
    annotation: 'TreeMerge (templates)'
  });
};

const podTemplates = function(app, name) {
  return new Funnel(app.trees.app, {
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

      let headerAppFiles = new WatchedDir(app._resolveLocal('headerapp'));

      let headerappTemplatesTree = templatesTree(app, 'headerapp');
      let debugheaderappTemplatesTree = debug(headerappTemplatesTree, { name: 'headerappTemplatesTree'});

      let processTemplates = preprocessTemplates(new Funnel(debugheaderappTemplatesTree, {
        srcDir: 'headerapp',
      }), {
        registry: app.registry,
        annotation: 'TreeMerger (pod & standard templates)'
      });

      let debugApp = debug(processTemplates, { name: 'processTemplates'});

      let headerapptrees = mergeTrees([headerAppFiles, debugApp], {
        overwrite: true
      });

      let headerAppFilesBabel = new Babel(new Funnel(headerapptrees, {
        include: ['**/*.js'],
        srcDir: '/',
        destDir: 'headerapp',
        annotation: 'Funnel (headerapp)'
      }), this._prunedBabelOptions());


      let debugHeaderApp = debug(headerAppFilesBabel, { name: 'headerAppFilesBabel'});

      let mt = mergeTrees([debugHeaderApp, tree], {
        overwrite: true
      });

      let debugTree = debug(mt, { name: 'mt'});

      let headerTree = new Funnel(debugTree, {
        include: [
          'split-app/helpers/**.*',
          'split-app/initializers/**.*',
          'split-app/instance-initializers/**.*',
          'split-app/services/**.*',
          'split-app/components/header-nav/*',
          'split-app/templates/application.*',
          'headerapp/app.js',
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
