const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/mern_repo', { useNewUrlParser: true });
mongoose.Promise = Promise;
module.exports = mongoose;
  