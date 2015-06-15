import Ember from 'ember';
import softAssert from '../utils/observers/soft-assert';

export default Ember.Mixin.create({
  allowTransparency: true,
  attributeBindings: [
    'allowTransparency:allowtransparency',
    'frameborder',
    'height',
    'src',
    'width',
  ],
  baseUrl: '//embed.spotify.com',
  classNameBindings: [
    'className',
    'displayClassName',
    'loaded',
  ],
  className: 'spotify-widget',
  frameborder: 0,
  loaded: false,
  tagName: 'iframe',
  theme: null,
  size: null,
  uri: null,

  displayClassName: Ember.computed('className', 'size', function() {
    return this.get('className') + '-' + this.get('size');
  }),

  src: Ember.computed('size', 'theme', 'uri', 'view', function() {
    const baseUrl = this.get('baseUrl');
    const size = this.get('size');
    const theme = this.get('theme');
    const uri = this.get('uri');
    const view = this.get('view');

    let src = `${baseUrl}/?uri=${uri}&size=${size}&theme=${theme}`;

    if (view) {
      src += `&view=${view}`;
    }

    return src;
  }),

  checkForUri: softAssert('uri'),

  watchForLoad: Ember.on('didInsertElement', function() {
    this.$().on('load', Ember.run.bind(this, this.set, 'loaded', true));
  }),

});
