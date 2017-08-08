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

// const templatesTree = function(app, tree, name) {
//   var trees = [];
//   if (tree) {
//     var standardTemplates = new Funnel(tree, {
//       srcDir: '/',
//       destDir: name + '/templates',
//       annotation: 'Funnel: Templates'
//     });
//
//     trees.push(standardTemplates);
//   }
//
//   if (tree) {
//     trees.push(podTemplates(app, tree, name));
//   }
//
//   return mergeTrees(trees.filter(Boolean), {
//     annotation: 'TreeMerge (templates)'
//   });
// };

// const podTemplates = function(app, tree, name) {
//   return new Funnel(tree, {
//     include: app._podTemplatePatterns(),
//     exclude: [ 'templates/**/*' ],
//     destDir: name + '/',
//     annotation: 'Funnel: Pod Templates'
//   });
// };

// const buildFeatureApps = function(feature, app, tree) {
//   let featureAppFiles = new WatchedDir(app._resolveLocal(feature));
//   let templates = templatesTree(app, featureAppFiles, 'split-app');
//   let processTemplates = preprocessTemplates(new Funnel(templates, {
//     srcDir: 'split-app/templates',
//   }), {
//     registry: app.registry,
//     annotation: 'TreeMerger (pod & standard templates)'
//   });
//
//   let appFilesBabel = new Babel(new Funnel(processTemplates, {
//     include: ['**/*.js'],
//     srcDir: '/',
//     destDir: feature,
//     annotation: 'Funnel (' + feature + ')'
//   }), app._prunedBabelOptions());
//
//   let updatedConfig = map(tree, 'vendor/ember-cli/app-config.js', function(content, relativePath) {
//     debugger;
//     let newContent = content.replace(/split-app/i/g, feature);
//
//     return newContent;
//   });
//
//   // let featureFolder = rename(appFilesBabel, 'split-app', feature);
//   let mergedFiles = mergeTrees([appFilesBabel, tree, updatedConfig], {overwrite: true});
//   let featureTree = new Funnel(mergedFiles, {
//     include: featureApps[feature]
//   });
//
//
//   let concatFeatureApp =  concat(featureTree, {
//     allowNone: true,
//     outputFile: 'assets/' + feature + '.js',
//     wrapInFunction: false,
//     sourceMapConfig: { enabled: true },
//     inputFiles: [
//       'split-app' + '/**/*.js',
//       feature + '/**/*.js'
//     ],
//     headerFiles: [
//       'vendor/ember-cli/app-prefix.js'
//     ],
//     footerFiles: [
//       'vendor/ember-cli/app-suffix.js',
//       'vendor/ember-cli/app-config.js',
//       'vendor/ember-cli/app-boot.js'
//     ]
//   });
//
//   return concatFeatureApp;
// }
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

  debugger;

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


  // let featureFolder = rename(debugvendorTrees, 'split-app', feature);


  return mergeTrees([appTree, headerAppJS], {
    overwrite: true
  });
};


// app._concatFiles = function(tree, options) {
//   if (options && options.annotation === 'Concat: App') {
//     options.sourcemaps= {
//       enabled: true
//     }
//
//     let splitApp = concat(tree, options);
//
//     let builtFeatureApps = Object.keys(featureApps).map(feature => {
//       return buildFeatureApps(feature, app, tree);
//     });
//
//     return mergeTrees([
//       splitApp,
//       mergeTrees(builtFeatureApps)
//     ], {
//       overwrite: true,
//       annotation: 'TreeMerger (featureApps)'
//     });
//
//   }
//   return this.concatFiles(tree, options, 'SECRET_DEPRECATION_PREVENTION_SYMBOL');
// };
