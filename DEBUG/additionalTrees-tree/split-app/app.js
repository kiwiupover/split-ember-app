define('split-app/app', ['exports', 'ember', 'split-app/resolver', 'ember-load-initializers', 'split-app/config/environment'], function (exports, _ember, _splitAppResolver, _emberLoadInitializers, _splitAppConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _splitAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _splitAppConfigEnvironment['default'].podModulePrefix,
    Resolver: _splitAppResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _splitAppConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});