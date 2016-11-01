const express = require('express')
const router = express.Router()

router.get( '/', ( request, response, next ) => {
  response.send("INDEX STUFF!")
})

module.exports = router
