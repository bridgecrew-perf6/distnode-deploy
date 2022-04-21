#!/bin/bash
wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
heroku plugins:install @heroku-cli/plugin-container-registry
heroku container:login
heroku container:push web --app cgeecode-distnode
heroku container:release web --app cgeecode-distnode
