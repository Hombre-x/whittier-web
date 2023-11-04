

// Logo button
const logoButton = document.querySelector('.logo-container') as HTMLButtonElement
logoButton.addEventListener('click', () => {
    console.log('logo button clicked')
    window.location.href = '/index.html'
})
