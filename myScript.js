const toggleText = document.getElementsByClassName('toggle')[0]
const showText = document.getElementsByClassName('showme')[0]

toggleText.addEventListener('click', () => {
    showText.classList.toggle('active')
})

const  toggleButton= document.getElementsByClassName('toggle-btn')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show')
})