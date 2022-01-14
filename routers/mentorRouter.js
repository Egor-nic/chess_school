const router = require('express').Router();
const sha256 = require('sha256');

const { User } = require('../db/models');


router.get('/register', (req, res) => {
  res.render('mentorRegister')
})

router.post('/register', async (req, res) => {
  const { email, password, name, phone } = req.body;
  try {
    const newMentor = await User.create({ email, name, phone, role_id: 1, password: sha256(password) })
    req.session.userName = newMentor.name;
    req.session.userEmail = newMentor.email;
    req.session.userId = newMentor.id;
    req.session.roleId = 1
    return res.json({id: newMentor.id}).sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})



router.get('/:id', async (req, res) => {
  const mentor = await User.findByPk(req.params.id)
  res.render('mentorPage', { mentor })
})



module.exports = router;
