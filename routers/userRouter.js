const router = require('express').Router();
const { Mentor, Student } = require('../db/models');

router.get('/mentor/register', (req, res) => {
  res.render('mentorRegister')
})

router.post('/mentor/register', async (req, res) => {
  const { email, password, name, phone } = req.body;
  const newMentor = await Mentor.create(email, password, name, phone, sha256(password))
  req.session.name = name;
  req.session.user_id = user.id;
  res.redirect(`/user/mentor/${newMentor.id}`)
})


router.get('/student/register', (req, res) => {
  res.render('studentRegister')
})


router.post('/student/register', async (req, res) => {
  const { studentName, parentName, studentAge, phone, email, password } = req.body;
  const student = await student.create(studentName, parentName, studentAge, phone, email, sha256(password))
  req.session.name = name;
  req.session.user_id = user.id;
  res.redirect(`/user/children/${student.id}`)
})

router.get('/sign in', (req, res) => {
  res.render
})


// router.get('/student/register/lesson', (req, res) => {
//   res.render('studentLessonRegister')
// })

// router.post('/student/register/lesson', (req, res) => {
//   res.redirect(`/user/children/${student.id}`)
// })



router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/')
})


router.get('/user/mentor/:id', async (req, res) => {
  const admin = await Mentor.findByPk(req.params.id)
  res.render('mentorPage', { admin })
})

router.get('/user/children/:id', async (req, res) => {
  const student = await Student.findByPk(req.params.id)
  res.render('studentPage', { student })
})


module.exports = router;
