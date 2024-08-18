const mobileMenuBtn = document.querySelector('.mobile-open-btn')
const mobileMenu = document.querySelector('nav.mobile-menu')
const bodyEl = document.querySelector('body:not(.mobile-menu__left)')
const topBar = document.querySelector('.topBar')
const topBar__closeBtn = document.querySelector('.topBar__close-btn')
const popularProductsLink = document.querySelector('#popular-products__link')
const popularProducts = document.querySelector('#popular-products')
const popularCategoriesLink = document.querySelector('#popular-categories__link')
const popularCategories = document.querySelector('#popular-categories')
const popularStoresLink = document.querySelector('#popular-stores__link')
const popularStores = document.querySelector('#popular-stores')

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

popularCategories.style.display = 'none'
popularStores.style.display = 'none'

popularProductsLink.addEventListener('click', (e) => {
  popularProducts.style.display = 'grid'
  e.target.classList.add('underlined')
  popularCategoriesLink.children[0].classList.remove('underlined')
  popularStoresLink.children[0].classList.remove('underlined')
  popularCategories.style.display = 'none'
  popularStores.style.display = 'none'
})

popularCategoriesLink.addEventListener('click', (e) => {
  popularCategories.style.display = 'grid'
  e.target.classList.add('underlined')
  popularProductsLink.children[0].classList.remove('underlined')
  popularStoresLink.children[0].classList.remove('underlined')
  popularProducts.style.display = 'none'
  popularStores.style.display = 'none'
})

popularStoresLink.addEventListener('click', (e) => {
  popularStores.style.display = 'grid'
  e.target.classList.add('underlined')
  popularProductsLink.children[0].classList.remove('underlined')
  popularCategoriesLink.children[0].classList.remove('underlined')
  popularProducts.style.display = 'none'
  popularCategories.style.display = 'none'
})

