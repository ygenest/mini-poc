var db = require('../db')
var Postit = db.model('Postit', {
  username: { type: String, required: true },
  contenu:     { type: String, required: true },
  date:     { type: Date,   required: true, default: Date.now }
})

module.exports = Postit
