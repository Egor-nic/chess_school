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
  const student = await Student.findOne({ where: { email } });
  const mentor = await Mentor.findOne({ where: { email } });
  try {
    if (student) {
      if (student.password === sha256(password)) {
        req.session.userName = student.name;
        req.session.userEmail = student.email;
        req.session.userId = student.id;
        res.json({ id: student.id }).sendStatus(200)
      }
    } else if (mentor) {
      if (mentor.password === sha256(password)) {
        req.session.userName = mentor.name;
        req.session.userEmail = mentor.email;
        req.session.userId = mentor.id;
        res.json({ id: mentor.id }).sendStatus(250)
      }
    } else {
      res.sendStatus(505)
    }

  } catch (error) {
    console.log(error)
  }

})



//test vanezzo


module.exports = router;
