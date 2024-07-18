const body = document.body;
const themeBtn = document.querySelector('.theme');
themeBtn.addEventListener('click', () => {
    body.classList.toggle('nightTheme');
})
// themeBtn.addEventListener('click', () => {
//     body.classList.remove('nightTheme');
// })