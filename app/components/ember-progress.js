import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'ember-progress',

  didInsertElement: function() {
    var resize = () => {
      this.$().addClass('disable-animating');
      this.set('totalWidth', $(this.element.parentNode).width() * 0.8);
      this.$().addClass('remove-animating');
    };


    this.$(window).on('resize', resize);
    resize();
  },

  completedWidth: function() {
    var completed = this.get('completed'),
        total = this.get('total'),
        totalWidth = this.get('totalWidth');

    return (completed / total) * totalWidth;
  }.property('totalWidth', 'completed', 'total')
});
