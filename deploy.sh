#! /usr/bin/env bash
#info:complete script to build and deploy the app
#note:run the script from the root folder of the repository

#to build the frontend.
BASE_DIR1='siteApp'
rm -r static
rm -r templates/
cd src_frontend
npm run build
mv build ../.
cd ../
mkdir -p templates/${BASE_DIR1}/
mv build/index.html templates/${BASE_DIR1}/.
mv build/*.* build/static/.
mkdir -p static/
mv build/static/* static/   
rm -r build
#make sure appropriate gcloud project is already selected in the config
gcloud app deploy