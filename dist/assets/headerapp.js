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
define('split-app/components/header-nav/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("split-app/components/header-nav/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0cCxmkE3", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "split-app/components/header-nav/template.hbs" } });
});
define('split-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('split-app/router', ['exports', 'ember', 'split-app/config/environment'], function (exports, _ember, _splitAppConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _splitAppConfigEnvironment['default'].locationType,
    rootURL: _splitAppConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('details');
  });

  exports['default'] = Router;
});//# sourceMappingURL=headerapp.map
