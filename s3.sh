#!/bin/sh

echo "Syncing images to S3."
s3cmd sync --acl-public --guess-mime-type --add-header "Cache-Control:public, max-age=31536000" --include='*.png' --exclude='*.html' --exclude='*.css' --exclude='*.js' -r ./build/ s3://timdouglas.co/

echo "Syncing HTML, CSS, JS to S3."
rm -rf build-gz;
cp -a build/ build-gz/;
find build-gz -type f | while read -r x; do gzip -9 -c "$x" > "$x.gz"; mv "$x.gz" "$x"; done;
s3cmd sync --acl-public --guess-mime-type --add-header "Cache-Control:public, max-age=31536000" --add-header "Content-Encoding: gzip" --exclude='*.png' --include='*.html' --include='*.css' --include='*.js' -r ./build-gz/ s3://timdouglas.co/
