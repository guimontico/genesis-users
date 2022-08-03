import { Users } from "../../model/User";

export function updateLocalStorage(users: Users){
  localStorage.setItem('users', JSON.stringify(users))
}

export async function getUsers(localStorageUsers: Users | null){
    // const localStorageUsers = JSON.parse(localStorage.getItem('users') || '{}')
    let users: Users = (localStorage
      .getItem('users') !== null 
      && localStorage
      .getItem('users') !== '[]')
      ? localStorageUsers 
      : await getUsersFromAPI();
    
    return users;
  }
  
  async function getUsersFromAPI() {
    const url = 'https://private-847f5-ivangenesis.apiary-mock.com/users'
  
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Não foi possível obter os dados')
      }
      const UsersData: Users = await response.json()
      return UsersData;
    } catch (error: any) {
      // alert(`Erro: ${error.message}`)
      return null;
    }
  }