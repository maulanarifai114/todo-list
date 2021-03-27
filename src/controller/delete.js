const TodoApp = require('../models').TodoApp

exports.deleteapi = async (req, res) => {
  try {
    const taskTodo = await TodoApp.destroy({ where: { id: req.body.id } })
    res.json({ msg: 'Berhasil Delete Data' })
  } catch (err) {
    res.status(500).json({ err })
  }
}
