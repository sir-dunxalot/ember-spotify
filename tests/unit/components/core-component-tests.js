import Ember from 'ember';
import formatUrl from '../../helpers/format-url';

export default function(context, assert, component,
  { expectedBaseUrl, expectedClassName, expectedSize, expectedTheme }) {
  const size = component.get('size');
  const theme = component.get('theme');
  const uri = 'spotify:track:3yn7NKed1z6eforU1VcjXf';
  const expectedDisplayClassName = `${expectedClassName}-${expectedSize}`;
  const expectedSrc = formatUrl({ baseUrl: expectedBaseUrl, size, theme, uri });
  const newBaseUrl = '//embed.spotify.com/fake';
  const newClassName = 'spotify-thing';
  const newSize = 'tiny';
  const newTheme = 'gold';
  const newUri = 'spotify:track:2Rvhjn78vg0rnuBHCdtz9P';

  let classNames, element, newSrc;

  assert.equal(component._state, 'preRender',
    'Should create the component instance');

  assert.equal(component.get('baseUrl'), expectedBaseUrl,
    'Should have the correct Spotify play button endpoint');

  assert.equal(size, expectedSize,
    'Should default to the compact layout');

  assert.equal(theme, expectedTheme,
    'Should default to the black theme');

  assert.equal(component.get('className'), expectedClassName,
    'Should have the correct class name');

  assert.equal(component.get('displayClassName'), expectedDisplayClassName,
    'Should have the correct display class name');

  component.set('uri', uri);

  assert.equal(component.get('src'), expectedSrc,
    'Should have the correct SRC including default values');

  context.render();

  assert.equal(component._state, 'inDOM',
    'Should render the component to the page');

  element = component.get('element');

  assert.equal(element.tagName.toLowerCase(), 'iframe',
    'Should render as an iframe');

  assert.equal(element.getAttribute('src'), expectedSrc,
    'Should render with the previously set SRC');

  assert.equal(element.getAttribute('frameborder'), 0,
    'Should render with no frameborder');

  assert.equal(element.getAttribute('allowtransparency'), 'true',
    'Should render with the ability to allow a transparent iframe');

  Ember.run(function() {
    component.setProperties({
      className: newClassName,
      size: newSize
    });
  });

  classNames = element.className;

  assert.ok(classNames.indexOf(newClassName) > -1,
    'Should have the new class name');

  assert.ok(classNames.indexOf(`${newClassName}-${newSize}`) > -1,
    'Should have the new display class name');

  newSrc = formatUrl({
    baseUrl: expectedBaseUrl,
    size: newSize,
    theme,
    uri
  });

  assert.equal(element.getAttribute('src'), newSrc,
    'Should render with the new SRC after changing the size');

  Ember.run(function() {
    component.setProperties({
      baseUrl: newBaseUrl,
      theme: newTheme,
      uri: newUri,
    });
  });

  newSrc = formatUrl({
    baseUrl: newBaseUrl,
    size: newSize,
    theme: newTheme,
    uri: newUri
  });

  assert.equal(element.getAttribute('src'), newSrc,
    'Should render with the new SRC after changing the attributes');

}
