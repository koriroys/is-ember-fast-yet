import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'ember-progress',

  didInsertElement: function() {
    var resize = () => {
      this.$().addClass('disable-animating');
      this.$().addClass('remove-animating');
    };

    this.$(window).on('resize', resize);
    resize();
  },

  failing: function() {
    return this.get('total') - this.get('completed');
  }.property('completed', 'total'),

  completedPercent: function() {
    var completed = this.get('completed'),
        total = this.get('total');

    return (completed / total) * 100;
  }.property('totalWidth', 'completed', 'total')
});
