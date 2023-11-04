/**
 * This script file is used to handle the learn more button
 * basically it guides the user to a random page inside the domain
 */

const learnMoreBtn = document.getElementById("btn-learn-more") as HTMLButtonElement

learnMoreBtn.addEventListener('click', () => {
  const pages = ['about', 'activities', 'location', 'history', 'people']
    .map( name => `/pages/${name}.html`)

  const randomPage = pages[Math.floor(Math.random() * pages.length)]

  window.location.href = randomPage

})