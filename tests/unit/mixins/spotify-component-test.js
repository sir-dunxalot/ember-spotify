import Ember from 'ember';
import SpotifyComponentMixin from '../../../mixins/spotify-component';
import { module, test } from 'qunit';

module('Unit | Mixin | spotify component');

// Replace this with your real tests.
test('it works', function(assert) {
  var SpotifyComponentObject = Ember.Object.extend(SpotifyComponentMixin);
  var subject = SpotifyComponentObject.create();
  assert.ok(subject);
});
