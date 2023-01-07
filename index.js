const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggleBtn = document.querySelector('.theme-toggle-btn');
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeToggleBtn.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggleBtn.querySelector('span:nth-child(2)').classList.toggle('active');
});
