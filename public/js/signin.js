const $signinForm = document.forms.signinForm;
console.log($signinForm);

$signinForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  let formData = Object.fromEntries(new FormData($signinForm));
  // console.log(formData);
  const response = await fetch("/signin", {
    method: "POST",
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(formData)
  })
  if (response.ok) {
    console.log('222')

    const { id, role_id } = await response.json();
    console.log(id)
    if (role_id === 2) {
    window.location = `/student/${id}`;
  }  else if (role_id === 1) {
    window.location = `/mentor/${id}`;
  }
  } else {
    console.log('login error');
  }
})
