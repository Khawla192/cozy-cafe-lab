const titleElement = document.querySelector('#main-title')
titleElement.textContent = 'Welcome to the Cozy Cafe'

const bodyElement = document.querySelector('body')
bodyElement.style.backgroundColor = 'bisque'

const paragraphElement = document.querySelector('p#quote-of-the-day')
paragraphElement.textContent = 'Life happens, coffee helps.'

const highlighTtitleElement = document.querySelectorAll('h1.highlight-title')
highlighTtitleElement.forEach(element => {
    element.style.fontStyle = 'italic'
})

const ulPastMenuItemsElements = document.getElementById('past-menu-items')
const newMenuElement = document.createElement('li')
newMenuElement.textContent = 'Rose Cake'
ulPastMenuItemsElements.appendChild(newMenuElement)

const ulCafeSpecialtiesElement = document.getElementById('cafe-specialties')
const newCafe = document.createElement('li')
newCafe.textContent = 'Karak Tea'
ulCafeSpecialtiesElement.appendChild(newCafe)

const blogSectionElement = document.getElementById('blogs')

const newBlogPostElement = document.createElement('div')
newBlogPostElement.classList.add('blog-post')
blogSectionElement.appendChild(newBlogPostElement)

const h3Element = document.createElement('h3')
h3Element.textContent = 'Karak Tea Tasting Event'
newBlogPostElement.appendChild(h3Element)

const imgElement = document.createElement('img')
imgElement.src = 'https://img.freepik.com/premium-photo/one-serving-karak-tea-with-milk_908985-100526.jpg'
imgElement.alt = 'Photo'
imgElement.style.width = '30vh'
newBlogPostElement.appendChild(imgElement)

const pElement = document.createElement('p')
pElement.textContent = 'We host a delightful Karak Tea tasting event, where guests enjoyed a rich blend of tea and spices in a cozy atmosphere.'
newBlogPostElement.appendChild(pElement)

const fishTacosElement = document.getElementById('fish-taco')
ulPastMenuItemsElements.removeChild(fishTacosElement);