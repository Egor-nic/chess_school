console.log('check removeChild.js')

const removeChild = document.querySelector('.remChild');


removeChild.addEventListener('click', async(e) => {
  e.preventDefault();
  const delDiv = e.target.closest('div')
   
   let res = await fetch(`/student/${e.target.dataset.id}`, {
      method: "DELETE"
   })
   if(res.ok) {
    delDiv.remove()
   } else {
     alert('у вас нет прав')
   }
})
