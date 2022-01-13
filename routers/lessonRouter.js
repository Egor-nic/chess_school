const router = require('express').Router();
const { testLesson } = require('../db/models');






router.get('/register', (req, res) => {
  res.render('studentLessonRegister')
})

router.post('/register', async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const newEntriy = await testLesson.create({ name, email, phone });
    res.json({ id: newEntriy.id }).sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }

})







module.exports = router;
