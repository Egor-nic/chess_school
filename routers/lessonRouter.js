const router = require('express').Router();




router.get('/register', (req, res) => {
  res.render('studentLessonRegister')
})

// router.post('/student/register/lesson', (req, res) => {
//   res.redirect(`/user/children/${student.id}`)
// })







module.exports = router;
