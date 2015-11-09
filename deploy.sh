#!/usr/bin/env bash

echo "set git environment"
git config --global user.email "iamstarkov+tachikombie@gmail.com"
git config --global user.name "Tachikoma Zombie"
git remote rm origin
git remote add origin https://tachikombie:${GITHUB_TOKEN}@github.com/iamstarkov/jsunderhood.git
git checkout master

echo "run update"
babel-node update

echo "save dump"
git add dump
git commit -m 'save dump \n [ci skip]'
git push origin master &>/dev/null

echo "build'n'deploy"
npm run deploy

return 0
