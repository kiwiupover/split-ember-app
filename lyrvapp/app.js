import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  rootElement: '#lyrv-app',
  modulePrefix: 'lyrvapp',
  podModulePrefix: 'lyrvapp',
  Resolver
});

loadInitializers(App, 'lyrvapp');

export default App;
