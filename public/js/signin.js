// const $signinForm = document.forms.signinForm;
// console.log($signinForm);

// $signinForm.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   let formData = Object.fromEntries(new FormData($signinForm));
//   // console.log(formData);
//   const response = await fetch("/signin", {
//     method: "POST",
//     headers: { 'Content-Type': 'application/json;charset=utf-8' },
//     body: JSON.stringify(formData)
//   })
//   if (response.status === Number(200)) {
//     console.log('222')

//     const { id } = await response.json();
//     console.log(id)

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
