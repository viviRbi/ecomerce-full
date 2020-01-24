const Mern = require("../models/Mern");
let mernController = {
  get: (req, res) => {
    Mern.find({}).then(mern => res.json(mern));
  },
  post: (req, res) => {
    Mern.create(req.body).then(() => res.redirect(303, "/mern"));
  },
  put: (req, res) => {
    Mern.findOneAndUpdate({ _id: req.params.id }, req.body).then(() => {
      Mern.find().then(mern => res.json(mern)).then(() => res.redirect(303, "/mern"))
    });
  },
  delete: (req, res) => {
    Mern.deleteOne({ _id: req.params.id }).then(() => {
      Mern.find().then(mern => res.json(mern)).then(() => res.redirect(303, "/mern"))
    });
  }
};
module.exports = mernController;