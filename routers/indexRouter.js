const router = require('express').Router();
const sha256 = require('sha256');


const { Student, Mentor } = require('../db/models');


router.get('/', (req, res) => {
  res.render('index')
})

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/')
})



router.get('/signin', (req, res) => {
  res.render('signin')
})


router.post('/signin', async (req, res) => {
  
  const { email, password } = req.body
  console.log(email)
  const student = await Student.findOne({ where: { email } });
  console.log('=====>>>>>>>>>>>>>>>>>>>.',student)
  const mentor = await Mentor.findOne({ where: { email } });
try {
  if (student) {
    if (student.password === sha256(password)) {
      req.session.userName = student.name;
      req.session.userEmail = student.email;
      req.session.userId = student.id;
      res.redirect(`/student/${student.id}`)
    }
  } else if (mentor) {
    if (mentor.password === sha256(password)) {
      req.session.userName = mentor.name;
      req.session.userEmail = mentor.email;
      req.session.userId = mentor.id;
      res.redirect(`/mentor/${mentor.id}`)
    }
  } else {
    res.send('sorry email does not exist')
  }
  
} catch (error) {
  console.log(error)
}

})






module.exports = router;
