#!/bin/bash

PATH="$PATH:./node_modules/.bin"

echo "Starting deployment"

echo "Setting git username and email"
GH_USER="${GH_USER:-"tachikombie"}"
GH_USER_EMAIL=${GH_USER_EMAIL:-"iamstarkov+tachikombie@gmail.com"}
GH_USER_NAME=${GH_USER_NAME:-"Tachikoma Zombie"}
git config --global user.email "${GH_USER_EMAIL}"
git config --global user.name "${GH_USER_NAME}"
echo "User name: $(git config --global --get user.name)"
echo "User email: $(git config --global --get user.email)"

echo "Adding remote repo with credentials"
ORIGIN_URL=`git config --get remote.origin.url`
REPO=${ORIGIN_URL/\/\/github.com/\/\/$GH_USER:$GH_TOKEN@github.com}
git remote rm origin
git remote add origin ${REPO}
git checkout master || exit 1

echo "Saving dump"
npm run save || exit 1

echo "Deploying to GH pages"
npm run deploy || exit 1

exit 0
