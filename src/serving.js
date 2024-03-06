export function serving() {
    const content = document.getElementById ('content')
    content.classList.add('hidden')

    const about = document.getElementById('about')
    about.classList.add('hidden')

    const menu = document.getElementById('serving')
    menu.classList.remove('hidden')
}