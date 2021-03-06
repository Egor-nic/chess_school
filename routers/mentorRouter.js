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
    return res.json({id: newMentor.id})
  } catch (error) {
    res.sendStatus(500)
  }
})


router.put('/edit/:id', async (req, res) => {
  const { name,  password, email, phone } = req.body;
  console.log("________________", req.body)
  try {
    const editMentor = await User.findByPk(req.params.id)
    await User.update({ name, email, phone, password: sha256(password) }, { where: { id: req.params.id } });
    res.json({ id: editMentor.id, role_id: editMentor.role_id})

  } catch (error) {
    res.sendStatus(500)
  }
})



router.get('/edit/:id', async (req, res) => {
  try {
    const mentor = await User.findByPk(req.params.id)
    res.render('mentorEdit', { mentor })

  } catch (error) {
    console.log(error)

  }
})



router.get('/:id', async (req, res) => {
  const mentor = await User.findByPk(req.params.id)
  res.render('mentorPage', { mentor })
})



module.exports = router;
