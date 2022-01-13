const router = require('express').Router();
const sha256 = require('sha256');

// const { checkUser } = require('../middelware/allmiddelware');
const { Student } = require('../db/models');




router.get('/register', (req, res) => {
  res.render('studentRegister')
})


router.post('/register', async (req, res) => {
  const { studentName, parentName, studentAge, phone, email, password } = req.body;
  const newStudent = await Student.create({ studentName, parentName, studentAge, phone, email, password: sha256(password) })
  console.log(newStudent)
  req.session.userName = newStudent.name;
  req.session.userEmail = newStudent.email;
  req.session.userId = newStudent.id;
  const student = {
    id: 7,
    studentName: 'test2',
    parentName: 'mama',
    studentAge: 21,
    phone: '123',
    email: 'test2@test',
  }
  res.json(student)
})



router.post('/edit/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id)
    await Student.update(req.body, { where: { id: req.params.id } });
    res.redirect(`/student/${student.id}`)

  } catch (error) {
    console.log(error)
  }
})



router.get('/edit/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id)
    res.render('edit', { student })

  } catch (error) {
    console.log(error)

  }
})


router.get('/:id', async (req, res) => {
  const student = await Student.findByPk(req.params.id)
  res.render('studentPage', { student })
})


module.exports = router;
