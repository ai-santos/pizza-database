import express from 'express'

const router = express.Router()

/*Static files*/
router.get('/', (request, response) => {
  response.send('hello world')
})

module.export = router
