import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance | iframe loading', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /iframe-loading', function(assert) {
  let numberOfLoads = 0;

  assert.expect(3);

  visit('/');

  andThen(function() {
    Ember.$('iframe').on('load', function(event) {
      const src = event.target.src;

      assert.ok(src.indexOf('embed.spotify.com/') > -1,
        'Loaded URL should be to the spotify embed API');

      numberOfLoads++;
    });

    Ember.Test.registerWaiter(function() {
      return numberOfLoads === 2;
    });
  });

  andThen(function() {
    assert.equal(numberOfLoads, 2,
      'Both component iframes should load');
  });

});
