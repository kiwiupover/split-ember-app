define('split-app/router', ['exports', 'ember', 'split-app/config/environment'], function (exports, _ember, _splitAppConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: 'auto',
    rootURL: _splitAppConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('details');
  });

  exports['default'] = Router;
});