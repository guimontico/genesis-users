import { getByText, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { formValidation } from './formValidation';

  
  it('Valida o formulário', () => {
    let inputArray
    waitFor(() => {
        const form = document.querySelectorAll('#form input');
        inputArray = formValidation(form)
    })
    expect(inputArray).toBe(true)
  })

  it('error', () => {
    getByText(document.body, '/campo deve conter 3 caracteres ou mais/i')
  })