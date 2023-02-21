const navClickContainer = document.querySelector('.nav-click-container')

const navContentContainer = document.querySelector('.nav-content-container')

const navClickBorder01 = document.querySelector('.nav-click-container .nav-click-border-1')
const navClickBorder02 = document.querySelector('.nav-click-container .nav-click-border-2')
const navClickBorder03 = document.querySelector('.nav-click-container .nav-click-border-3')

navClickContainer.addEventListener('click', function () {
  navContentContainer.classList.toggle('no-show')
  navClickBorder02.classList.toggle('no-show')
  navClickBorder01.classList.toggle('transform')
  navClickBorder03.classList.toggle('transform')
})