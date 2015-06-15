import Ember from 'ember';
import SpotifyComponentMixin from 'ember-spotify/mixins/spotify-component';
import formatUrl from '../../helpers/format-url';
import { module, test } from 'qunit';

const SpotifyComponentObject = Ember.Object.extend(SpotifyComponentMixin);

let consumingClass;

module('Unit | Mixin | spotify component', {
  setup() {
    consumingClass = SpotifyComponentObject.create();
  }
});

test('Basic options', function(assert) {
  const newClassName = 'spotify-component';

  assert.equal(consumingClass.get('tagName'), 'iframe',
    'The tag name should be expected to be an iframe');

  assert.equal(consumingClass.get('frameborder'), 0,
    'The frameborder name should not be expected to appear');

  assert.strictEqual(consumingClass.get('loaded'), false,
    'Loaded should default to false');

  consumingClass.set('className', newClassName);

  assert.strictEqual(consumingClass.get('allowTransparency'), true,
    'allowtransparency should be expected to be true');
});

test('Can build iframe SRC attribute', function(assert) {
  const baseUrl = '//embed.spotify.com';
  const size = 'large';
  const theme = 'dark';
  const uri = 'spotify:track:3yn7NKed1z6eforU1VcjXf';
  const expectedSrc = formatUrl({ baseUrl, size, theme, uri });
  const newTheme = 'light';

  consumingClass.setProperties({ baseUrl, size, theme, uri });

  assert.equal(consumingClass.get('src'), expectedSrc,
    'SRC should update when options are set');

  consumingClass.set('theme', newTheme);

  assert.equal(consumingClass.get('src'), expectedSrc.replace(theme, newTheme),
    'SRC should update when option is changed');
});

test('Sets the correct class names', function(assert) {
  const expectedClassName = 'spotify-widget';
  const newClassName = 'spotify-component';
  const newSize = 'big';
  const size = 'small';

  consumingClass.set('size', size);

  assert.equal(consumingClass.get('displayClassName'), `${expectedClassName}-${size}`,
    'Should have the correct display class name by default');

  consumingClass.setProperties({
    className: newClassName,
    size: newSize,
  });

  assert.equal(consumingClass.get('displayClassName'), `${newClassName}-${newSize}`,
    'Should have the correct display class name after changing className and size');

});
