const  toggleButton= document.getElementsByClassName('toggle-btn')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show')
})