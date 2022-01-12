const router = require('express').Router();
const sha256 = require('sha256');

const { Mentor, Student } = require('../db/models');

router.get('/mentor/register', (req, res) => {
  res.render('mentorRegister')
})

router.post('/mentor/register', async (req, res) => {
  console.log(req.body)
  try {
    const { email, password, name, phone } = req.body;
    const newMentor = await Mentor.create({ email, name, phone, password: sha256(password) })
    req.session.userName = newMentor.name;
    req.session.userEmail = newMentor.email;
    req.session.userId = newMentor.id;
    res.redirect(`/user/mentor/${newMentor.id}`)

  } catch (error) {
    console.log(error)
  }
})


router.get('/student/register', (req, res) => {
  res.render('studentRegister')
})


router.post('/student/register', async (req, res) => {
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


router.get('/mentor/:id', async (req, res) => {
  const admin = await Mentor.findByPk(req.params.id)
  res.render('mentorPage', { admin })
})

router.get('/children/:id', async (req, res) => {
  const student = await Student.findByPk(req.params.id)
  res.render('studentPage', { student })
})


module.exports = router;
