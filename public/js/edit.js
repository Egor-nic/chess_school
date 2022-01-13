console.log('check edit.js')


const $editForm = document.forms.editForm;

$editForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  let formData = Object.fromEntries(new FormData($editForm));



  const res = await fetch(`/student/edit/${e.target.dataset.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(formData)
  })
  if (res.ok) {
    const { id } = await res.json();
    window.location = `/student/${id}`
  } else {
    console.oog('errrr')
  }
})
