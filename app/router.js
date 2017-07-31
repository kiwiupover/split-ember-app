import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: 'auto',
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('details');
});

export default Router;
