yarn compile
cp manifest.json build/manifest.json
cp -R static build/static
zip -r -X build build
rm -rf build
echo "Build complete."