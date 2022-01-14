const $mentorRegForm = document.forms.mentorRegForm;
console.log($mentorRegForm);

$mentorRegForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  let formData = Object.fromEntries(new FormData($mentorRegForm)); // Currently empty
  console.log(formData);
  const response = await fetch('/mentor/register', {
    method: "POST",
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(formData)
  })
  if (response.ok) {
    const { id } = await response.json();
    window.location = `/mentor/${id}`;
  } else {
    console.log('err!');
  }
})
