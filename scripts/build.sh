webpack
cp manifest.json dist/manifest.json
cp -R static dist/static
zip -r -X dist dist
rm -rf dist
echo "Build complete."
