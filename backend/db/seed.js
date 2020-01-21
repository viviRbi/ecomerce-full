
const Mern = require('../models/Mern');

const mernData = require('./mern.json');


Mern.deleteMany({}).then(() => {
  Mern.collection.insert(mernData)
    .then(myMern => {
      console.log(myMern)
    })
    .catch(err => {
      console.log(err)
    })
})
