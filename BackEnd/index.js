const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const router = require('./routes/route');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router);
mongoose
  .connect(
    'mongodb+srv://portfolio:fawad7998@cluster0.kc02ks7.mongodb.net/projectdata?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log('Db is Connected');
  })
  .catch((err) => {
    console.log(err, 'db not connected');
  });

app.listen(6969, (port) => {
  console.log('Server Running on 6969');
});
