const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  ProjectTitle: { type: String, require: true },
  Projectdescription: { type: String, require: true },
  GithubLink: { type: String, require: true },
  VercelLink: { type: String, require: true },
  ImageUrl: {
    type: String,
    require: true,
    default:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
  },
});

const schemas = mongoose.model('portfolioData', schema);

module.exports = schemas;
