// index.js
import { initializePage } from './pageloader.js';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { greet } from './about.js';

// Call the initializePage function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializePage();

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
  
  greet()
});
