const router = require('express').Router();
const sha256 = require('sha256');

const { Student } = require('../db/models');




router.get('/register', (req, res) => {
  res.render('studentRegister')
})


router.post('/register', async (req, res) => {
  const { studentName, parentName, studentAge, phone, email, password } = req.body;
  const student = await Student.create({ studentName, parentName, studentAge, phone, email, password: sha256(password) })
  req.session.userName = student.name;
  req.session.userEmail = student.email;
  req.session.userId = student.id;
  res.redirect(`/user/children/${student.id}`)
})

// router.get('/sign in', (req, res) => {
//   // res.render
// })


// router.get('/student/register/lesson', (req, res) => {
//   res.render('studentLessonRegister')
// })

// router.post('/student/register/lesson', (req, res) => {
//   res.redirect(`/user/children/${student.id}`)
// })



// router.get('/logout', (req, res) => {
//   req.session.destroy();
//   res.redirect('/')
// })




router.get('/student/:id', async (req, res) => {
  const student = await Student.findByPk(req.params.id)
  res.render('studentPage', { student })
})


module.exports = router;
