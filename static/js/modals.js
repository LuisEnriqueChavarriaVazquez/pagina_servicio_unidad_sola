var myModal = document.getElementById('exampleModal')
var myInput = document.getElementById('inputModal')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

