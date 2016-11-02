import express from 'express'

const router = express.Router()

/*Static files*/
router.get('/', (request, response) => {
  response.render('index')
})

module.exports = router
