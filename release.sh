#!/usr/bin/env bash

set -e

args=("$@")
VERSION=${args[0]}
[ -z "$VERSION" ] && echo "Version not provided" && exit 1

echo "Update version on relevant files"
sed -i "s/\"version\":.*/\"version\": \"$VERSION\",/" package.json
sed -i "s/version.'BIRL .*/version('BIRL $VERSION')/" index.js

echo "Manually update CHANGELOG"
read -sn 1 -p "Press any key to continue..." && echo ""
nvim CHANGELOG.md

echo "Adding files to the release commit"
read -sn 1 -p "Press any key to continue..." && echo ""
git add -p
echo "Commiting version change"
git commit -m "UAAAAAAHHH SAIU DA JAULA A VERSÃO $VERSION, BIRL!!!"

echo "Tagging last commit with version"
read -sn 1 -p "Press any key to continue..." && echo ""
git tag "$VERSION"

echo "Upload git changes to remote"
git push
git push --tags

echo "Publishing package"
read -sn 1 -p "Press any key to continue..." && echo ""
npm publish --tag "birl-js@$VERSION"
npm dist-tag add "birl-js@$VERSION" latest

echo "Version $VERSION published"
