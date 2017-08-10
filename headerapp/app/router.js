import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: 'none',
  rootURL: config.rootURL
});

Router.map(function() {});

export default Router;
