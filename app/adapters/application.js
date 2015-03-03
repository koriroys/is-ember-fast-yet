/*globals Firebase*/
import DS from "ember-data";

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://is-ember-fast-yet.firebaseio.com")
});
