

const formRegistr = document.getElementById("reg");
formRegistr.addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = {
    studentName : formRegistr.studentName.value,
    parentName : formRegistr.parentName.value,
    email : formRegistr.email.value,
    password : formRegistr.password.value,
    phone : formRegistr.phone.value,
    studentAge : formRegistr.studentAge.value
  }
  console.log(res)
  alert('123')
  const variable = await fetch('/student/register' ,{
    method:"POST",
    headers: {
      'Content-type' : 'application/json'
    },
    body : JSON.stringify(res)
  })
  if(variable.status === 200) {
    window.location.href='/'
  }
})
