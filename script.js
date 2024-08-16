const mobileMenuBtn = document.querySelector('.mobile-open-btn')
const mobileMenu = document.querySelector('nav.mobile-menu')
const bodyEl = document.querySelector('body:not(.mobile-menu__left)')
const topBar = document.querySelector('.topBar')
const topBar__closeBtn = document.querySelector('.topBar__close-btn')

const openMobileMenu = () => {
  mobileMenu.classList.remove('hide')
}

const closeMobileMenu = (e) => {
  if(e.target.classList.contains('mobile-menu')) {
    mobileMenu.classList.add('hide')
  }
  // console.log(e)
  // bodyEl.style.backgroundColor = 'green'
  // mobileMenu.style.backgroundColor = 'green'
}

mobileMenuBtn.addEventListener('click', openMobileMenu)

bodyEl.addEventListener('click', closeMobileMenu)

topBar__closeBtn.addEventListener('click', () => {
  topBar.style.transition = 'all 3.5s ease'
  topBar.style.display = 'none'
})

// window.location.addEventListener('reload', () => {
//   alert('hello')
// })

window.scrollTo({
  top: 0,
  behavior: "smooth",
});