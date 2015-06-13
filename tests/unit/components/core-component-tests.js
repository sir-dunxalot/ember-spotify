import formatUrl from '../../helpers/format-url';

export default function(context, assert, component, options) {
  const baseUrl = '//embed.spotify.com';
  const size = component.get('size');
  const theme = component.get('theme');
  const uri = 'spotify:track:3yn7NKed1z6eforU1VcjXf';
  const expectedSrc = formatUrl({ baseUrl, size, theme, uri });

  let element;

  assert.equal(component._state, 'preRender',
    'Should create the component instance');

  assert.equal(component.get('baseUrl'), baseUrl,
    'Should have the correct Spotify play button endpoint');

  assert.equal(size, options.size,
    'Should default to the compact layout');

  assert.equal(theme, options.theme,
    'Should default to the black theme');

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

}
