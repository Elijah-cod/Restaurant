export function home() {
    const content = document.getElementById ('content')
    content.classList.remove('hidden')

    const about = document.getElementById('about')
    about.classList.add('hidden')

    const menu = document.getElementById('serving')
    menu.classList.add('hidden')
}