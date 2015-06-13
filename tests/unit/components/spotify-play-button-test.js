import Ember from 'ember';
import coreComponentTests from './core-component-tests';
import { moduleForComponent, test } from 'ember-qunit';

let component;

moduleForComponent('spotify-play-button', 'Unit | Component | spotify play button', {
  unit: true,

  setup() {
    component = this.subject();
  },

});

test('It has the core Spotify component functionality', function(assert) {
  const newView = 'coverart';

  let element;

  assert.expect(18);

  coreComponentTests(this, assert, component, {
    expectedBaseUrl: '//embed.spotify.com',
    expectedClassName: 'spotify-play-button',
    expectedSize: 'compact',
    expectedTheme: 'black',
  });

  Ember.run(function() {
    component.set('view', newView);
  });

  assert.ok(component.get('src').indexOf(newView) > -1,
    'Changing the view should update the SRC property');

  element = component.get('element');

  assert.ok(element.getAttribute('src').indexOf(newView) > -1,
    'Changing the view should update the SRC attribute');
});

test('It resizes based on size attribute', function(assert) {

  assert.equal(component.get('height'), 80,
    "Should have the default height with size='compact'");

  assert.equal(component.get('width'), 380,
    "Should have the default width with size='compact'");

  Ember.run(function() {
    component.set('size', 'large');
  });

  assert.equal(component.get('height'), 380,
    "Should have the new height with size='large'");

  assert.equal(component.get('width'), 380,
    "Should have the new width with size='large'");
});
