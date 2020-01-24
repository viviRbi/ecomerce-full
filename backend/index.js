const express = require('express')
const parser = require('body-parser');
const cors = require('cors')

const app = express();


app.use(cors())
app.use(parser.json());

const mernRouter = require('./routes/mern');
app.use("/mern", mernRouter);


app.listen(5000, () => console.log('listening on port 5000')); 