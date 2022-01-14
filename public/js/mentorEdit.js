console.log('check editMentor.js')


const $editFormMentor = document.forms.editFormMentor;

$editFormMentor.addEventListener('submit', async (e) => {
  e.preventDefault();

  let formData = Object.fromEntries(new FormData($editFormMentor));



  const res = await fetch(`/mentor/edit/${e.target.dataset.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(formData)
  })
  if (res.ok) {
    const { id } = await res.json();
    window.location = `/mentor/${id}`
  } else {
    console.log('errrr')
  }
})
