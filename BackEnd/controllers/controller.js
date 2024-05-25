const schemas = require('../models/Schema');
exports.getProjects = async (req, res) => {
  try {
    const note = await schemas.find({});
    res.status(200).json({
      status: 'success',
      length: note.length,
      data: note,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.createProjects = async (req, res) => {
  try {
    const note = await schemas.create(req.body);
    res.status(201).json({
      status: 'success',
      data: note,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};
