const router = require('express').Router();
const sha256 = require('sha256');

// const { checkUser } = require('../middelware/allmiddelware');
const { Student, User, Children } = require('../db/models');




router.get('/register', (req, res) => {
  res.render('studentRegister')
})


router.post('/register', async (req, res) => {
  const { name, phone, email, password } = req.body;

  try {
    const newStudent = await User.create({ name, phone, email, role_id: 2, password: sha256(password) })
    req.session.userName = newStudent.name;
    req.session.userEmail = newStudent.email;
    req.session.userId = newStudent.id;
    req.session.roleId = 2;
    return res.json({ id: newStudent.id }).sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})



router.put('/edit/:id', async (req, res) => {
  const { name, email, phone, password } = req.body
  try {
    const editStudent = await User.findByPk(req.params.id)
    await User.update({name, email, phone, password: sha256(password) }, { where: { id: req.params.id } });
    res.json({ id: editStudent.id, role_id: editStudent.role_id }).sendStatus(200)

  } catch (error) {
    res.sendStatus(500)
  }
})

router.get('/children/:id', async (req, res) => {
  const student = await User.findByPk(req.params.id)
  console.log(student)
  res.render('childrenRegister', { student })
})

router.post('/children', async (req, res) => {
  const { name, age } = req.body
  try {
    const user = await User.findByPk(req.params.id)
    console.log(user)
    const newChildren = await Children.create({ name, age, user_id: req.session.userId })
    console.log(newChildren)
    res.redirect(`/student/${newChildren.user_id}`)

  } catch (err) {
    console.log(err)
  }


})


router.get('/edit/:id', async (req, res) => {
  try {
    const student = await User.findByPk(req.params.id)
    res.render('edit', { student })

  } catch (error) {
    console.log(error)

  }
})


router.get('/:id', async (req, res) => {
  const student = await User.findByPk(req.params.id)
  res.render('studentPage', { student })
})


module.exports = router;
