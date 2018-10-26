to start dev Server

> yarn run dev-Server

to start the test

> yarn test -- --watch

to build node-module and new yarn.lock

> yarn install

to create node_modules for Production
devDependencies will NOT be installed.
> yarn install --production

to build production

> yarn run build:prod

to build production

> yarn run build:dev

to start server.js

node server/server.js


Deploy to heroku

>git status
>git add .
>git commit -m "   "
>git push
>git push heroku master

generate dist bundle.js you have to re run This will
create the bundle and style files.
> yarn run build:prod
