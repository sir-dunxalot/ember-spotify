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
});
