# Ember-spotify

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

- `uri` - The Spotify URI of any artist or user profile page
- `size` - `'basic'` (default) or `'detail'`
- `theme` - `'dark'` (default) or `'light'`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Development

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
