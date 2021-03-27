const TodoApp = require('../models').TodoApp

exports.put = async (req, res) => {
  try {
    const task = await TodoApp.update(
      { task: req.body.task },
      { where: { id: req.body.id } }
    )
    res.json({ msg: 'Berhasil Update Data' })
  } catch (err) {
    res.status(500).json({ err })
  }
}
