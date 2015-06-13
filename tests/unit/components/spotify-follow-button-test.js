import coreComponentTests from './core-component-tests';
import { moduleForComponent, test } from 'ember-qunit';

let component;

moduleForComponent('spotify-follow-button', 'Unit | Component | spotify follow button', {
  unit: true,

  setup() {
    component = this.subject();
  },

});

test('It has the core Spotify component functionality', function(assert) {
  assert.expect(16);

  coreComponentTests(this, assert, component, {
    expectedBaseUrl: '//embed.spotify.com/follow/1',
    expectedClassName: 'spotify-follow-button',
    expectedSize: 'basic',
    expectedTheme: 'dark',
  });
});

test('It resizes based on size attribute', function(assert) {

  assert.equal(component.get('height'), 25,
    "Should have the default height with size='compact'");

  assert.equal(component.get('width'), 200,
    "Should have the default width with size='compact'");

  component.set('size', 'detail');

  assert.equal(component.get('height'), 56,
    "Should have the new height with size='large'");

  assert.equal(component.get('width'), 300,
    "Should have the new width with size='large'");
});
