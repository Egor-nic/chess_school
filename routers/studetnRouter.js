const router = require('express').Router();
const sha256 = require('sha256');

const { Student } = require('../db/models');




router.get('/register', (req, res) => {
  res.render('studentRegister')
})


router.post('/register', async (req, res) => {
  console.log(req.body)
  const { studentName, parentName, studentAge, phone, email, password } = req.body;
  const student = await Student.create({ studentName, parentName, studentAge, phone, email, password: sha256(password) })
  req.session.userName = student.name;
  req.session.userEmail = student.email;
  req.session.userId = student.id;
  res.redirect(`/student/${student.id}`)
})


router.get('/edit', (req, res) => {
  res.render('edit')
})





router.get('/:id', async (req, res) => {
  const student = await Student.findByPk(req.params.id)
  res.render('studentPage', { student })
})


module.exports = router;
