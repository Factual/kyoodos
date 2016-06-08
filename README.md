# using node v5.10+

`npm install`

# your pg table probably needs to be updated ... 
`node src/db/init-db.js`

# run supervisor on slackbot
`node_modules/.bin/supervisor src/slackbot.js`

# run supervisor on server
`node_modules/.bin/supervisor src/server.js`

# run react dev server
`node_modules/.bin/webpack-dev-server --progress`

# build react
`NODE_ENV=production node_modules/.bin/webpack -p --progress --colors`

