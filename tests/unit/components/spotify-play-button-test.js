import coreComponentTests from './core-component-tests';
import { moduleForComponent, test } from 'ember-qunit';

let component;

moduleForComponent('spotify-play-button', 'Unit | Component | spotify play button', {
  unit: true,

  setup() {
    component = this.subject();
  },

});

test('It renders with the correct SRC attribute', function(assert) {
  let element;

  assert.expect(11);

  coreComponentTests(this, assert, component, {
    size: 'compact',
    theme: 'black',
  });

  element = component.get('element');

  assert.ok(element.className.indexOf('spotify-play-button') > 1,
    'Should render with the play button class name');
});

test('It resizes based on size attribute', function(assert) {

  assert.equal(component.get('height'), 80,
    "Should have the default height with size='compact'");

  assert.equal(component.get('width'), 380,
    "Should have the default width with size='compact'");

  component.set('size', 'large');

  assert.equal(component.get('height'), 380,
    "Should have the new height with size='large'");

  assert.equal(component.get('width'), 380,
    "Should have the new width with size='large'");
});
