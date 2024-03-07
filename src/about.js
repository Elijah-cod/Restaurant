export function about() {
    const content = document.getElementById ('content')
    content.classList.add('hidden')

    const menu = document.getElementById('serving')
    menu.classList.add('hidden')

    const about = document.getElementById('about')
    about.classList.remove('hidden')
}
  