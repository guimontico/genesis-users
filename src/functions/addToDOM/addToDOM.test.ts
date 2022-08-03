import {
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  waitFor,
} from '@testing-library/dom'
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom/extend-expect'

  function getExampleDOM() {
    const div = document.createElement('div')
    div.innerHTML = `
    <li>
      <div class="imgItem"></div>
        <div class="flexContent">
            <div class="textItem"></div>
            <button class="deleteIcon"></button>
        </div>
    </li>
    `
    const button = div.querySelector('button')
    const divParent = div.querySelector('.textItem')
    button!.addEventListener('click', () => {
      setTimeout(() => {
        const printedUsernameContainer = document.createElement('div')
        printedUsernameContainer.classList.add('textItem')
        printedUsernameContainer.innerHTML = `
        <div data-testid="printed-username">
        <span>name: My name 3</span><span>cpf: 45486737688</span>
        </div>
        `
        divParent!.appendChild(printedUsernameContainer)
      }, Math.floor(Math.random() * 200))
    })
    return div
  }


  it('renders a heading element', async () => {
    const container = getExampleDOM()
    let cpf = '45486737688'

    getByText(container, 'Print Username').click()

    await waitFor(() =>
      expect(queryByTestId(container, 'printed-username')).toBeTruthy()
    )

    expect(getByTestId(container, 'printed-username')).toHaveTextContent(
      cpf
    )
    expect(container).toMatchSnapshot()
  })
  