#! /usr/bin/env bash
#to run the develop mode 
#note: run from the root folder of the repository
export SECRET_KEY='django-insecure'
source pyenv/bin/activate
python manage.py runserver 8080 
