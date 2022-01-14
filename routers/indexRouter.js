const router = require('express').Router();
const sha256 = require('sha256');


const { Student, User, Role } = require('../db/models');


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
  //const student = await Student.findOne({ where: { email } });
  const mentor = await User.findOne({ where: { email }, includes: Role }, { raw: true });
  console.log("====>>>> MENTOR", mentor)
  try {
    if (mentor.role_id === 1) {
      if (mentor.password === sha256(password)) {
        req.session.userName = mentor.name;
        req.session.userEmail = mentor.email;
        req.session.userId = mentor.id;
        req.session.roleId = mentor.role_id
        res.json({ id: mentor.id, role_id: mentor.role_id }).sendStatus(200)
      }
    }
    else if (mentor.role_id === 2) {
      if (mentor.password === sha256(password)) {
        req.session.userName = mentor.name;
        req.session.userEmail = mentor.email;
        req.session.userId = mentor.id;
        res.json({ id: mentor.id , role_id: mentor.role_id}).sendStatus(250)
      }
    } 
    else {
      res.sendStatus(505)
    }

  } catch (error) {
    console.log(error)
  }

})

router.get('/chooseRegister', (req, res) => {
  res.render('chooseRegister')
})



module.exports = router;
