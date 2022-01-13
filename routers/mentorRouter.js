const router = require('express').Router();
const sha256 = require('sha256');

const { Mentor } = require('../db/models');


router.get('/register', (req, res) => {
  res.render('mentorRegister')
})

router.post('/register', async (req, res) => {
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



router.get('/:id', async (req, res) => {
  const admin = await Mentor.findByPk(req.params.id)
  res.render('mentorPage', { admin })
})



module.exports = router;
