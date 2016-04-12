import Ember from 'ember';

export default Ember.Controller.extend({
  saveBlog(title, content) {
    // Create a new record
    const blog = this.store.createRecord(`blog`, { title, content });

    // Save new record
    blog.save().then(() => {
      this.transitionToRoute(`detail`, blog.id);
    });
  },
});
