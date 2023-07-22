tailwind.config = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'green': '#00ff00',
                'AlmostWhite': 'hsl(0, 0%, 98%)',
                'MediumGray': 'hsl(0, 0%, 41%)',
                'AlmostBlack': 'hsl(0, 0%, 8%)',
            }
        }
    }
}

const Links = document.querySelectorAll('.link')

Links.forEach(link => {
    link.addEventListener('click', () => {
        const dropdown = link.nextElementSibling
        const dropdownIcon = link.querySelector('img')
        dropdown.classList.toggle('active')
        dropdownIcon.style.transform = dropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)'
        dropdownIcon.style.transition = 'transform 0.3s ease-in-out'
    })
})

const OpenMenuIcon = document.querySelector('.open-menu-icon');
const CloseMenuIcon = document.querySelector('.close-menu-icon');
const MobileMenu = document.querySelector('.mobile-menu');


OpenMenuIcon.addEventListener('click', () => {
    MobileMenu.classList.add('open')
    document.body.style.backgroundColor = 'rgba(145, 124, 124, 0.5)';
    
    
})


CloseMenuIcon.addEventListener('click', () => {
    MobileMenu.classList.remove('open')
    document.body.style.backgroundColor = 'white';
})
