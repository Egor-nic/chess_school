const router = require('express').Router();




router.get('/register', (req, res) => {
  res.render('studentLessonRegister')
})

router.post('/register', (req, res) => {
  res.send('Спасибо мы перезвоним')
})







module.exports = router;
