import { User, Users } from "../../model/User";
import { updateLocalStorage } from "../getUsers/getUsers";
import { openModal } from "../modalActions/modalActions";

export function addUsersIntoDOM(users: Users) {
    let listNames = document.querySelector('#names');
    if (listNames) {
      listNames.innerHTML = "";
      let ul = document.createElement('ul');
      ul.setAttribute('data-testid','user-list')
      for (let i = 0; i < users!.length; i++) {
        let currentItem = users![i];
        let li = document.createElement('li');
        let avatar = createUserAvatar();
        let content = createContent(currentItem);
        let button = createDeleteButton(users, i);
        
        li.appendChild(avatar);
  
        let data = document.createElement('div');
        data.classList.add('flexContent');
  
        data.appendChild(content);
        data.appendChild(button);
  
        li.append(data)
  
        ul.appendChild(li);
      }
      listNames.appendChild(ul);
    }
    return listNames;
}

export function createUserAvatar() {
  var img = document.createElement('div');
  img.classList.add('imgItem');
  return img;
}

export function createContent(currentUser: User) {
  let updateRegister = true;
  let inputName = document.getElementById("inputName") as HTMLInputElement;
  let inputCPF = document.getElementById("inputCPF") as HTMLInputElement;
  let inputPhone = document.getElementById("inputPhone") as HTMLInputElement;
  let inputMail = document.getElementById("inputMail") as HTMLInputElement;
  let content = document.createElement('div');
  let contentName = document.createElement('span');
  let contentCPF = document.createElement('span');
  let contentPhone = document.createElement('span');
  let contentMail = document.createElement('span');
  content.classList.add('textItem');
  contentName.textContent = `name: ${currentUser.name}`;
  contentCPF.textContent = `cpf: ${currentUser.cpf}`;
  contentPhone.textContent = `Phone: ${currentUser.phone}`;
  contentMail.textContent = `E-mail: ${currentUser.email}`;
  content.append(contentName, contentCPF, contentPhone, contentMail)

  content.addEventListener('click', () => {
    openModal(updateRegister)
    
    inputName!.value = currentUser!.name;
    inputCPF!.value = currentUser!.cpf;
    inputPhone!.value = currentUser!.phone;
    inputMail!.value = currentUser!.email;
  });
  return content;
}

export function createDeleteButton(users: Users, index: number) {
  var del = document.createElement('button');
  del.classList.add('deleteIcon');
  del.addEventListener('click', () => {
    users = users!.filter((_, i) => i !== index);
    addUsersIntoDOM(users);
    updateLocalStorage(users);
  });
  return del;
}