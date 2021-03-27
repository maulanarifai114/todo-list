const TodoApp = require('../models').TodoApp

exports.post = async (req, res) => {
  // console.log(req.body.task)
  const task = req.body.task
  try {
    const taskTodo = await TodoApp.create({ task })
    res.json({ msg: 'Berhasil Create Data' })
  } catch (err) {
    res.status(500).json({ err })
  }
}
