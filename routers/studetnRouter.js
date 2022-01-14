const router = require('express').Router();
const sha256 = require('sha256');

// const { checkUser } = require('../middelware/allmiddelware');
const { Student } = require('../db/models');




router.get('/register', (req, res) => {
  res.render('studentRegister')
})


router.post('/register', async (req, res) => {
  const { studentName, parentName, studentAge, phone, email, password } = req.body;

  try {
    const newStudent = await Student.create({ studentName, parentName, studentAge, phone, email, password: sha256(password) })
    req.session.userName = newStudent.name;
    req.session.userEmail = newStudent.email;
    req.session.userId = newStudent.id;
    return res.json({ id: newStudent.id }).sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})



router.put('/edit/:id', async (req, res) => {
  const { studentName, parentName, studentAge, password, email, phone } = req.body;
  console.log("________________", req.body)
  try {
    const editStudent = await Student.findByPk(req.params.id)
    await Student.update({ studentName, parentName, studentAge, email, phone, password: sha256(password) }, { where: { id: req.params.id } });
    res.json({ id: editStudent.id })

  } catch (error) {
    res.sendStatus(500)
  }
})



router.get('/edit/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id)
    res.render('studentEdit', { student })

  } catch (error) {
    console.log(error)

  }
})


router.get('/:id', async (req, res) => {
  const student = await Student.findByPk(req.params.id)
  res.render('studentPage', { student })
})


module.exports = router;
