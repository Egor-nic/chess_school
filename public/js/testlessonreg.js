const $testLessonRegForm = document.forms.testLessonRegForm;
// console.log($testLessonRegForm);
$testLessonRegForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const myFormData = Object.fromEntries(new FormData($testLessonRegForm));

  const res = await fetch('/lesson/register', {
    method:'POST',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify(myFormData)
  })

  if (res.ok) {
    window.location = '/';
    alert(' Спасибо, с вами свяжутся')
   }

  // console.log('---->>>', myFormData);
})


