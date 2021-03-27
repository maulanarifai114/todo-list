const TodoApp = require('../models').TodoApp

exports.get = async (req, res) => {
  try {
    const task = await TodoApp.findOne({ where: { id: req.body.id } })
    res.json(task)
  } catch (err) {
    res.status(500).json({ err })
  }
}
