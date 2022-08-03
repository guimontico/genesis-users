import { addUsersIntoDOM } from './functions/addToDOM/addToDOM';
import { formValidation } from './functions/formValidation/formValidation';
import { getUsers, updateLocalStorage } from './functions/getUsers/getUsers';
import { checkModal, modalLooping } from './functions/modalActions/modalActions';
import { Users } from './model/User';

export function preventFormSubmit() {
  var form = document.querySelector('form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}

export async function submitNewUser(){
  const inputName = document.getElementById("inputName") as HTMLInputElement;
  const inputCPF = document.getElementById("inputCPF") as HTMLInputElement;
  const inputPhone = document.getElementById("inputPhone") as HTMLInputElement;
  const inputMail = document.getElementById("inputMail") as HTMLInputElement;
  
  const form = document.querySelectorAll('#form input');
  const isValid = formValidation(form)
  const localStorageUsers = JSON.parse(localStorage.getItem('users') || '{}')
  let users: Users = await getUsers(localStorageUsers);

  if (isValid !== true) {
    return
  }
  if (users) {
    const userExists = users.some((user: { cpf: string; }) => user.cpf === inputCPF.value);

    if (userExists) {
      users = users.map(user =>
        user.cpf === inputCPF.value
        ? { ...user, 
          name: inputName.value, 
          phone: inputPhone.value, 
          email: inputMail.value, 
        }
        : user
        );
        modalLooping(userExists);
        updateLocalStorage(users)
        addUsersIntoDOM(users)
    } else {
      const newUser = {
        name: inputName.value.trim(),
        cpf: inputCPF.value.trim(),
        phone: inputPhone.value.trim(),
        email: inputMail.value.trim(),
      }
      modalLooping(userExists)
      users.push(newUser)
      updateLocalStorage(users)
      addUsersIntoDOM(users)
    }
    return
  }
  return
}

export default class AdminTS {
  formInputUser = document.querySelector('#form')
  openModalButton = document.querySelector("#open-modal");
  closeModalButton = document.querySelector("#close-modal");
  inputUserButton = document.querySelector("#inputUserButton");
  fade = document.querySelector("#fade");

  constructor() {
    this.onInit();
    [this.openModalButton, this.inputUserButton, this.fade, this.closeModalButton]
    .forEach((el) => {
      if (el !== null) {
        el!.addEventListener("click", (e) => checkModal(e));
      }
    });
    if (this.formInputUser !== null) {
      this.formInputUser.addEventListener("submit", () => submitNewUser());
    }
  }

  async onInit(){
    const localStorageUsers = JSON.parse(localStorage.getItem('users') || '{}')
    const users = await getUsers(localStorageUsers);
    updateLocalStorage(users)
    addUsersIntoDOM(users)
    preventFormSubmit();
  }
}

// start the app
new AdminTS();