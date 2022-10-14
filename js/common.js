
const sidebar_open_button = document.getElementById('sidebar_open');
const sidebar_close_button = document.getElementById('sidebar_close');
const sidebar = document.getElementById('sidebar')


sidebar_open_button.addEventListener('click',()=>{
    sidebar.style.right = '0px';
})

sidebar_close_button.addEventListener('click',()=>{
    sidebar.style.right = '-350px';
})