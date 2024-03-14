// index.js
import { initializePage } from './pageloader.js';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {about} from './about.js';
import {home} from './home.js';
import {serving} from './serving.js';

// Call the initializePage function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializePage();
  
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  const menu = document.querySelector('.fa-bars');
  menu.addEventListener('click', ()=>{
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  })

  const close = document.querySelector('.fa-x')
  close.addEventListener('click', ()=>{
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  })
  
  const buttons = document.querySelectorAll('button')

  buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      const clickedButton = event.target

      switch(clickedButton.textContent){
        case 'Home':
            home()
          break;
        
        case 'Menu':
            serving()
          break;  

        default:
          about();
      }
    })
  })
});
