import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'ember-progress',

  totalWidth: 900,

  completedWidth: function() {
    var completed = this.get('completed'),
        total = this.get('total'),
        totalWidth = this.get('totalWidth');

    return (completed / total) * totalWidth;
  }.property('totalWidth', 'completed', 'total')
});
