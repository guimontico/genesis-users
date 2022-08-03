import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';

import { TextEncoder, TextDecoder } from "util";
(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;

import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

import { getByText } from '@testing-library/dom';


const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

// let dom
let container: HTMLElement
  
describe('Tesing Functions', () => {
    beforeEach(() => {
      const dom = new JSDOM(html, { runScripts: 'dangerously' })
      container = dom.window.document.body
    })

    it('Exibe o título H2', () => {
      expect(container.querySelector('h2')).not.toBeNull()
      expect(getByText(container, 'Todos os usuários')).toBeInTheDocument()
    })
    
})