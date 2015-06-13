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

  coreComponentTests(this, assert, component);

  element = component.get('element');

  assert.ok(element.className.indexOf('spotify-play-button') > 1,
    'Should render with the play button class name');
});
