import Ember from 'ember';

export default Ember.Controller.extend({
  deleteRecord(blog) {
    if (confirm(`Are you sure you want to delete this?`)) {
      blog.destroyRecord().then(() => {
        this.transitionToRoute(`index`);
      });
    }
  },

  saveComment(blog, username, content) {
    const comment = this.store.createRecord(`comment`, {username, content, blog});

    comment.save().then(() => {
      this.set(`newCommentContent`, '');
      this.set(`newCommentUsername`, '');
    });
  }
});
