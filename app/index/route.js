import Ember from 'ember';
import parseJson from '../parse-json';

export default Ember.Route.extend({
  model() {
    return fetch(`http://nashville-blog.herokuapp.com/blogs`)
      .then(parseJson);
  },
});
