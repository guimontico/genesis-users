var modal = document.querySelector("#modal");
var fade = document.querySelector("#fade");

export function checkModal (e: Event) {
    const target = e.target as HTMLInputElement
    const inputName = document.getElementById("inputName") as HTMLInputElement;
    const inputCPF = document.getElementById("inputCPF") as HTMLInputElement;
    const inputPhone = document.getElementById("inputPhone") as HTMLInputElement;
    const inputMail = document.getElementById("inputMail") as HTMLInputElement;
    if (target?.id == 'open-modal') {
      inputName.value = ''
      inputCPF.value = ''
      inputPhone.value = ''
      inputMail.value = ''
      let updateRegister = false;
      openModal(updateRegister)
    } else if (target?.id == 'close-modal') {
      closeModal()
    }
  };

export function openModal (updateRegister: boolean) {
    let inputUserButton = document.querySelector("#inputUserButton");
    let updateUserButton = document.querySelector("#updateUserButton");
    if (inputUserButton && updateUserButton) {
      if (updateRegister) {
        inputUserButton.classList.add("hide")
        updateUserButton.classList.remove("hide");
      } else {
        inputUserButton.classList.remove("hide")
        updateUserButton.classList.add("hide")
      } 
    }
    if (modal && fade) {
      modal.classList.toggle("hide");
      fade.classList.toggle("hide");
    }
  }

export function closeModal () {
    modal!.classList.toggle("hide");
    fade!.classList.toggle("hide");
}

export function modalLooping(userExists: boolean){
    let inputUserButton = document.querySelector("#inputUserButton");
    let updateUserButton = document.querySelector("#updateUserButton");
    const button = (userExists) ? updateUserButton : inputUserButton
    button!.classList.add("button--loading");
    setTimeout(() => {
      closeModal()
      button!.classList.remove("button--loading");
    }, 1000);
  }