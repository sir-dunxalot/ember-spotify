import Ember from 'ember';
import softAssert from '../utils/observes/soft-assert';

export default Ember.Mixin.create({
  allowtransparency: true,
  attributeBindings: [
    'allowtransparency',
    'dataTest',
    'frameborder',
    'height',
    'src',
    'width',
  ],
  baseUrl: '//embed.spotify.com',
  classNameBindings: [
    'className',
    'displayClassName'
  ],
  className: 'spotify-widget',
  dataTest: Ember.computed.oneWay('className'),
  frameborder: 0,
  tagName: 'iframe',
  theme: null,
  size: null,
  uri: null,

  displayClassName: Ember.computed('className', 'size', function() {
    return this.get('className') + '-' + this.get('size');
  }),

  src: Ember.computed('size', 'theme', 'uri', function() {
    const baseUrl = this.get('baseUrl');
    const size = this.get('size');
    const theme = this.get('theme');
    const uri = this.get('uri');

    return `${baseUrl}/?uri=${uri}&size=${size}&theme=${theme}`;
  }),

  checkForSize: softAssert('size'),
  checkForTheme: softAssert('theme'),
  checkForUri: softAssert('uri'),

});
