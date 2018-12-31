import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'dashboard.index',
  model(params) {
    return params.app_name;
  }
});
