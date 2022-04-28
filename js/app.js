const ThemeSwitcher =document.querySelector('.theme-switcher-toggle');
ThemeSwitcher.addEventListener('click',() => {
    document.querySelector('.theme-switcher').classList.toggle('open');
})

window.addEventListener('scroll',() => {
    if(document.querySelector('.theme-switcher').classList.contains('open')){
        document.querySelector('.theme-switcher').classList.remove('open');
    }
})

const ChangeTheme = document.querySelectorAll('.change-style');
function SetStyle(color){
    ChangeTheme.forEach((style) => {
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled')
        }else{
            style.setAttribute('disabled','true')
        }
    })
}

const DayNight = document.querySelector('.day-night-switch');

DayNight.addEventListener('click',() => {
    DayNight.querySelector('i').classList.toggle('fa-sun');
    DayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})

window.addEventListener('load',() => {
    if(document.body.classList.contains('dark')){
        DayNight.querySelector('i').classList.add('fa-sun');
    }else{
        DayNight.querySelector('i').classList.add('fa-moon');
    }
})
