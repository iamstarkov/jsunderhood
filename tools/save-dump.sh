#!/bin/bash
set -e

echo "Saving new dump"

echo "Adding new files"
git add -A .

echo "Commiting changes"
git commit -m "save dump" || true

echo "Pushing to remote repo"
git push origin master &>/dev/null

[ $? -eq 0 ] && echo "New dump is pushed" && exit 0

exit 1
