import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  rootElement: '#ember-app',
  modulePrefix: 'headerapp',
  podModulePrefix: 'headerapp',
  Resolver
});

loadInitializers(App, 'headerapp');

export default App;
