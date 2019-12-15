const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Movie = require('./movie');

mongoose
  .connect(
    'mongodb://localhost:27017/IMDB', { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get("/movie/year", (req, res, next) => {
  Movie.aggregate([
    {$group : { _id : "$year", AvgRank: { $avg: "$rank" }}}
  ]).then(documents => {
    res.status(200).json({
      message: 'succes',
      data: documents
    });
  });
});

app.get("/movie/bestmovies", (req, res, next) => {
  Movie.aggregate([{
    $match: { $and: [
      { year: { $gt: 1980, $lt: 2008 }},
      { rank: { $gte: 7 }}
    ]}}, { $sort : { rank : -1 }}
  ]).then(documents => {
    res.status(200).json({
      message: 'succes',
      data: documents
    });
  });
});

app.get("/movie/year/genres", (req, res, next) => {
  Movie.aggregate([
    {$group : {_id:{year:"$year",genres:"$genres"}, Avg:{$avg:"$rank"}}},
    {$sort:{"_id.year":1}}
  ]).then(documents => {
    res.status(200).json({
      message: 'succes',
      data: documents
    });
  });
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});