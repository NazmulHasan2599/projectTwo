const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

       tabs.forEach(t =>{
        t.classList.remove('filter-tab-active')
       }) 
       tab.classList.add('filter-tab-active')
    })
})

// ---------------- Dark light theme

const themeBtn = document.getElementById('theme__button')
const body = document.querySelector('body')

themeBtn.addEventListener('click', ()=>{
    body.classList.toggle('dark-theme')
})

// ------------ Scrollreveal 

let sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 500} )
sr.reveal(`.profile__profession`, {delay: 600} )
sr.reveal(`.profile__social`, {delay: 600} )
sr.reveal(`.profile__info__group`, {interval: 100, delay: 700} )
sr.reveal(`.profile__buttons`, {delay: 700} )
sr.reveal(`.filters`, {delay: 700} )
sr.reveal(`.footer__copy`, {interval: 200, delay: 700} )
