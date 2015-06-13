/**
https://developer.spotify.com/technologies/widgets/spotify-play-button/

@class component:spotify-play-button
*/

import Ember from 'ember';
import SpotifyComponentMixin from '../mixins/spotify-component';
import layout from '../templates/components/spotify-play-button';

export default Ember.Component.extend(
  SpotifyComponentMixin, {

  className: 'spotify-play-button',
  layout: layout,
  size: 'compact', // compact or large (only affects styling when size is large)
  theme: 'black', // black or white (only affects styling when size is large)
  view: 'list', // list or coverart (only affects styling when size is large)

  setSize: Ember.on('init',
    Ember.observer('size', function() {
      let height, width;

      if (this.get('size') === 'large') {
        height = 380;
        width = 380;
      } else {
        height = 80;
        width = 380;
      }

      this.setProperties({ height, width });
    })
  ),
});
