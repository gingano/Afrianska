'use strict'

const contactBodyForms = document.querySelector('.body__forms');

const contactName = contactBodyForms.querySelector('#full-name');
const contactEmail = contactBodyForms.querySelector('#email');
const contactMessage = contactBodyForms.querySelector('#message');

const allInputs = contactBodyForms.querySelectorAll('.forms__input')

contactBodyForms.addEventListener('submit', (event) => {
  event.preventDefault()

  let errors = contactBodyForms.querySelectorAll('.forms__error')
  if (errors.length > 0) {
    errors.forEach(error => error.remove())
  }

  let counter = 0;
  for (let i = 0; i < allInputs.length; i++) {
    if (!allInputs[i].value) {
      let error = document.createElement('span')
      error.className = 'forms__error'
      error.innerHTML = '* This field must be filled'

      allInputs[i].after(error)
      counter++
    }
  }

  if (contactName.value.length < 3) {
    let error = document.createElement('span')
    error.className = 'forms__error'
    error.innerHTML = '* Name must be longer than 3 characters'

    contactName.after(error)
  }
  
  if (contactName.value.split(' ').length < 2) {
    let error = document.createElement('span')
    error.className = 'forms__error'
    error.innerHTML = '* The name must be in the format "FirstName LastName". For example, "Tony Stark"'

    contactName.after(error)
  }

  if (contactEmail.value.indexOf("@") < 1 ||
      contactEmail.value.lastIndexOf(".") < contactEmail.value.indexOf("@") + 2 ||
      contactEmail.value.lastIndexOf(".") + 2 >= contactEmail.value.length) {
    let error = document.createElement('span')
    error.className = 'forms__error'
    error.innerHTML = '* Email must be valid. For example, "info@wikipedia.org."'

    contactEmail.after(error)
  }

  if (contactMessage.value.length < 20) {
    let error = document.createElement('span')
    error.className = 'forms__error'
    error.innerHTML = '* Message must be longer than 20 characters'

    contactMessage.after(error)
  }

  errors = contactBodyForms.querySelectorAll('.forms__error')
  if (errors.length === 0) {
    console.log('All fields is valid')
  }
})