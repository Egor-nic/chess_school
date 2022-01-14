const router = require('express').Router();
const sha256 = require('sha256');

const { Mentor } = require('../db/models');


router.get('/register', (req, res) => {
  res.render('mentorRegister')
})

router.post('/register', async (req, res) => {
  const { email, password, name, phone } = req.body;
  try {
    const newMentor = await Mentor.create({ email, name, phone, password: sha256(password) })
    req.session.userName = newMentor.name;
    req.session.userEmail = newMentor.email;
    req.session.userId = newMentor.id;
    return res.json({id: newMentor.id}).sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})


router.put('/edit/:id', async (req, res) => {
  const { name,  password, email, phone } = req.body;
  console.log("________________", req.body)
  try {
    const editMentor = await Mentor.findByPk(req.params.id)
    await Mentor.update({ name, email, phone, password: sha256(password) }, { where: { id: req.params.id } });
    res.json({ id: editMentor.id })

  } catch (error) {
    res.sendStatus(500)
  }
})



router.get('/edit/:id', async (req, res) => {
  try {
    const mentor = await Mentor.findByPk(req.params.id)
    res.render('mentorEdit', { mentor })

  } catch (error) {
    console.log(error)

  }
})



router.get('/:id', async (req, res) => {
  const mentor = await Mentor.findByPk(req.params.id)
  res.render('mentorPage', { mentor })
})



module.exports = router;
