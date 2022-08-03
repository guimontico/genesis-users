export function formValidation(form: NodeList) {
  var isValid = 0
  for (var i = 0; i < form.length; i++) {
    console.log(isValid)
    let inputElement = form[i] as HTMLInputElement
    switch (inputElement.id) {
      case 'inputName':
        if (inputElement.value.trim().length < 3) {
          setErrorFor(inputElement, 'Campo deve conter 3 caracteres ou mais')
          isValid += 1;
        } else setSuccessFor(inputElement)
        break;
      case 'inputCPF':
        if (inputElement.value.trim().length !== 11) {
          setErrorFor(inputElement, 'Campo deve conter 11 caracteres')
          isValid += 1;
        } else setSuccessFor(inputElement)
        break;
      case 'inputPhone':
        if (inputElement.value.trim().length !== 11) {
          setErrorFor(inputElement, 'Campo deve conter 11 caracteres')
          isValid += 1;
        } else setSuccessFor(inputElement)
        break;
      case 'inputMail':
        if (!inputElement.value.trim().toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )) {
          setErrorFor(inputElement, 'Campo de E-mail inválido')
          isValid += 1;
        } else setSuccessFor(inputElement)
        break;

      default:
        break;
    }
  }
  if (isValid > 0) {
    return false
  } else return true
}

export function setErrorFor(input: HTMLInputElement, message: string) {
  const formControl = input.parentElement;
  const small = formControl!.querySelector('small');
  
  small!.innerText = message;

  formControl!.className = 'form-control error'
}

export function setSuccessFor(input: HTMLInputElement) {
  const formControl = input.parentElement;
  const small = formControl!.querySelector('small');

  small!.innerText = '';

  formControl!.classList.remove('error');
}