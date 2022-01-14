// const $signinForm = document.forms.signinForm;
// console.log($signinForm);

// $signinForm.addEventListener('submit', async (e) => {
//   e.preventDefault();

<<<<<<< HEAD
//   let formData = Object.fromEntries(new FormData($signinForm));
//   // console.log(formData);
//   const response = await fetch("/signin", {
//     method: "POST",
//     headers: { 'Content-Type': 'application/json;charset=utf-8' },
//     body: JSON.stringify(formData)
//   })
//   if (response.status === Number(200)) {
//     console.log('222')
=======
  let formData = Object.fromEntries(new FormData($signinForm));
  // console.log(formData);
  const response = await fetch("/signin", {
    method: "POST",
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(formData)
  })
  if (response.status === 200) {
    console.log('222')
>>>>>>> 69770851a0ee329c7ba311bd28affa5de4c5a9cb

//     const { id } = await response.json();
//     console.log(id)

<<<<<<< HEAD
//     window.location = `/student/${id}`;
//   } else if (response.status === Number(250)) {
//     console.log('111')
//     const { id } = await response.json();
//     console.log(id)
//     window.location = `/mentor/${id}`;
//   } else {
//     console.log('login error');
//   }
// })
=======
    window.location = `/student/${id}`;
  } else if (response.status === 250) {
    console.log('111')
    const { id } = await response.json();
    console.log(id)
    window.location = `/mentor/${id}`;
  } else {
    console.log('login error');
  }
})
>>>>>>> 69770851a0ee329c7ba311bd28affa5de4c5a9cb
