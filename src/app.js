const hamburgerButton = document.getElementById('dropdown')
const navList = document.getElementById('items')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)