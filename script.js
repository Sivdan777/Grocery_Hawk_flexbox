const mobileMenuBtn = document.querySelector('.mobile-open-btn')
const mobileMenu = document.querySelector('nav.mobile-menu')
const bodyEl = document.querySelector('body:not(.mobile-menu__left)')

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