/// ///// Dependencies /////////
const Top = require('../models/topheadlines')


/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 *
 */
module.exports = function (app) {
  // Get all Pets findPetByShelterId
  app.get('/api/books', function (req, res) {
    Top.findAll()
      .then(function (dbTopics) {
        res.json(dbTopics)
      })
  })
 
  app.get('/api/findAll', function (req, res) {
    Top.findAll().then(function (dbExamples) {
      res.json(dbExamples)
    })
  })

// POST route for saving a new todo. You can create a todo using the data on req.body
app.post('/api/books', function (req, res) {
  Top.create(req.body)
    .then(results => {
      console.log(`
      *****
      Top.create():
      ${results}`)

      res.json(results)
    })
})

}
