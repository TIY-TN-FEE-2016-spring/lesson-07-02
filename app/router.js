import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function routes() {
  this.route(`detail`, { path: `/:id` });
  this.route(`new`);
});

export default Router;
