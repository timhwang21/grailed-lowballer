rm -rf dist
webpack
mkdir dist
mv background.bundle.js dist/background.bundle.js
mv content.bundle.js dist/content.bundle.js
cp manifest.json dist/manifest.json
cp -R static dist/static
zip -r -X dist dist
rm -rf dist
echo "Build complete."
