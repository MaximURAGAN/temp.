const burger = document.querySelector('.burger')
const menu = document.querySelector('.header-menu')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})

menu.querySelectorAll('.nav-menu a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
        burger.classList.remove('active')
        menu.classList.remove('active')
    })
})

document.querySelectorAll('.btn-block5[aria-controls]').forEach((button) => {
    const answer = document.getElementById(button.getAttribute('aria-controls'))
    const icon = button.querySelector('img')

    button.addEventListener('click', () => {
        const expanded = answer.inert

        answer.inert = !expanded
        button.setAttribute('aria-expanded', String(expanded))
        icon.src = expanded ? './img/minus.svg' : './img/plus.svg'
    })
})

