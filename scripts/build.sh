webpack
mkdir build
mv index.js build/index.js
cp manifest.json build/manifest.json
cp -R static build/static
zip -r -X build build
rm -rf build
echo "Build complete."