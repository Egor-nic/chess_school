const router = require('express').Router();
const { Admin, TestLesson, Student } = require('../db/models');


router.get('/', async (req, res) => {
  const admin = await Admin.findOne({ where: { id: 2 } })
  const students = await TestLesson.findAll()
  // console.log(admin)
  // console.log(students)
  res.render('adminPage', { admin, students })
})

router.get('/all/students', async (req, res) => {
  const allStudents = await Student.findAll();
  console.log(allStudents)
  res.render('allStudents', { allStudents });
})






module.exports = router;
