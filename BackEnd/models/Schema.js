const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  ProjectTitle: { type: String, require: true },
  Projectdescription: { type: String, require: true },
  GithubLink: { type: String, require: true },
  VercelLink: { type: String, require: true },
  ImageUrl: { type: String, require: true },
});

const schemas = mongoose.model('portfolioData', schema);

module.exports = schemas;
