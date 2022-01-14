const router = require('express').Router();
const { Admin, TestLesson, User } = require('../db/models');


router.get('/', async (req, res) => {
  const admin = await Admin.findOne();
  const students = await TestLesson.findAll()
  // console.log(admin)
  // console.log(students)
  res.render('adminPage', { admin, students })
})

router.get('/all/students', async (req, res) => {
  const allStudents = await User.findAll();
  console.log(allStudents)
  res.render('allStudents', { allStudents });
})






module.exports = router;
