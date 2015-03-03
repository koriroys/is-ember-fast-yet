import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  answer: attr('string'),
  total: attr('number'),
  completed: attr('number')
});
