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

  assert.expect(7);

  visit('/');

  andThen(function() {
    const iframes = Ember.A(Ember.$('iframe').filter('[class*="spotify"]'));

    iframes.each(function(i, iframe) {
      assert.ok(iframe.className.indexOf('loaded') === -1,
        'Iframes should not have a .loaded class before loading');
    });

    iframes.on('load', function(event) {
      const iframe = event.target;
      const src = iframe.src;

      assert.ok(src.indexOf('embed.spotify.com/') > -1,
        'Loaded URL should be to the spotify embed API');

      assert.ok(iframe.className.indexOf('loaded') > -1,
        'Iframes should have a .loaded class after loading');

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
