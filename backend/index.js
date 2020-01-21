const express = require('express')
const parser = require('body-parser');
const app = express();
const cors = require('cors')


app.use(cors())
app.use(parser.json());
const mernRouter = require('./routes/mern');
app.use("/mern", mernRouter);


app.listen(5000, () => console.log('listening on port 5000')); 