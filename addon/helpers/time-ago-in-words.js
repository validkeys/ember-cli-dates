import Ember from 'ember';

function timeAgoInWords(date) {
  return window.moment(date).fromNow();
}

export { timeAgoInWords };

export default Ember.Handlebars.makeBoundHelper(timeAgoInWords);
