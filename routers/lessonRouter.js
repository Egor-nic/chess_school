const router = require('express').Router();
const { TestLesson } = require('../db/models');






router.get('/playgame', (req, res) => {
  res.render('chessGamePage')
})


router.get('/register', (req, res) => {
  res.render('studentLessonRegister')
})

router.post('/register', async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const newEntriy = await TestLesson.create({ name, email, phone });
    res.redirect('/admin')
  } catch (error) {
    res.send('sorry')
  }


})







module.exports = router;
