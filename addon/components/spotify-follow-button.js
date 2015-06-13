/**
https://developer.spotify.com/technologies/widgets/spotify-follow-button/

@class component:spotify-follow-button
*/

import Ember from 'ember';
import SpotifyComponentMixin from '../mixins/spotify-component';
import layout from '../templates/components/spotify-follow-button';

export default Ember.Component.extend(
  SpotifyComponentMixin, {

  attributeBindings: [
    'scrolling',
    'style',
  ],
  baseUrl: '//embed.spotify.com/follow/1',
  className: 'spotify-follow-button',
  layout: layout,
  size: 'basic', // basic or detail
  scrolling: 'no',
  theme: 'dark', // dark or light

  setSize: Ember.on('init',
    Ember.observer('size', function() {
      let height, width;

      if (this.get('size') === 'basic') {
        height = 25;
        width = 200;
      } else {
        height = 56;
        width = 300;
      }

      this.setProperties({ height, width });
    })
  ),

});
