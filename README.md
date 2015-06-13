Ember-spotify [![Build Status](https://travis-ci.org/sir-dunxalot/ember-spotify.svg?branch=master)](https://travis-ci.org/sir-dunxalot/ember-spotify)
======

This addon adds components for Spotify's play button and follow button.

```
ember install ember-spotify
```

## Play button

[See Spotify docs](https://developer.spotify.com/technologies/widgets/spotify-play-button/)

```
{{spotify-play-button
  uri='spotify:track:3yn7NKed1z6eforU1VcjXf'
}}
```

This renders a widget with the class `.spotify-play-button`. Possible attributes:

- `uri` - The Spotify URI of any song, album, or playlist
- `size` - `'compact'` (default) or `'large'`
- `theme` - `'black'` (default) or `'white'`
- `view` - `'list'` (default) or `'coverart'`

## Follow button

[See Spotify docs](https://developer.spotify.com/technologies/widgets/spotify-follow-button/)

```
{{spotify-follow-button
  uri='spotify:user:spotify:playlist:1WlfPkuw7bRJpht6uYCC5B'
}}
```

This renders a widget with the class `.spotify-follow-button`. Possible attributes:

- `uri` - The Spotify URI of any artist or user profile page
- `size` - `'basic'` (default) or `'detail'`
- `theme` - `'dark'` (default) or `'light'`

## Styling

You can override the height and width of the components using CSS. Spotify places some limitation on the sizing. Please see the [Spotify docs](https://developer.spotify.com/technologies/widgets/) for more info.

## Development

- `git clone https://github.com/sir-dunxalot/ember-spotify.git`
- `ember s`
- `ember test` or `/tests` route
