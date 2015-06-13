import Ember from 'ember';
import SpotifyComponentMixin from '../mixins/spotify-component';
import layout from '../templates/components/spotify-follow-button';

export default Ember.Component.extend(
  SpotifyComponentMixin, {

  attributeBindings: [
    'scrolling',
    'style',
  ],
  className: 'spotify-follow-button',
  layout: layout,
  size: 'basic', // basic or detail
  scrolling: 'no',
  theme: 'dark', // dark or light

});
