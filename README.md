# Grailed Lowballer

This is mainly a joke. But PRs welcome.

## Development

To install the extension in developer mode:

1. `yarn start` to bundle
2. In Chrome, navigate to `chrome://extensions/`
3. Click "Load unpacked extension..." and select this directory

To bundle the extension for release:

1. Update version number in `manifest.json`
2. `yarn build`
3. In Chrome developer dashboard, upload `build.zip`