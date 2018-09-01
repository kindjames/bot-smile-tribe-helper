#!/bin/bash

# Was project name specified?
if [[ -z "$1" ]]; then
  echo -n "Heroku app name, e.g. 'iv-bot-xxxxxx': "
  read app
else
  app=$1
fi

heroku create $app --region=eu
heroku addons:create papertrail:choklad --app=$app

heroku config:set TELEGRAM_TOKEN=246118046237714 --app=$app
heroku config:set URL=https://$app.herokuapp.com/ --app=$app

heroku git:remote -a $app
git push heroku
