const nodemon = require('nodemon')

for (const PORT of [3001, 3002]) {
   nodemon({
      script: 'index.js',
      verbose: true,
      watch: [
         'index.js'
      ],
      env: Object.assign({}, process.env, { PORT: String(PORT) })
   })
}
