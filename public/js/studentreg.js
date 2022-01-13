const $regForm = document.forms.regForm;


$regForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  let formData = Object.fromEntries(new FormData($regForm)); // Currently empty
  // console.log(formData);
  const response = await fetch("/student/register", {
    method: "POST",
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify(formData)
  })
  if (response.ok) {
    const {id} = await response.json();
    window.location = `/student/${id}`;
  } else {
    console.log('err!');
  }
})


