import Ember from 'ember';

export default Ember.Controller.extend({
  deleteRecord(blog) {
    if (confirm(`Are you sure you want to delete this?`)) {
      blog.destroyRecord().then(() => {
        this.transitionToRoute(`index`);
      });
    }
  },
});
