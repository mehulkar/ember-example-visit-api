# ember-example-visit-api

Repro:

## Normal use case

1. Start the server `npm start`
1. Boot the app at the `foo` route by visiting it opening it directly: `open localhost:4200/foo`
1. In JS console, look at `window.history.length`, it should be `1`.

## Disabled Autoboot case

1. Start the server: `npm run start:manual` (This is implemented specially with in this app)
1. Boot the app and let the manual boot take you to `/foo`: `open localhost:4200`
1. In JS console, look at `window.history.length`, and notice that it's `2`. An extra entry has been pushed into history.
