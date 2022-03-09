document.getElementById('menu-icon-container').addEventListener('click', () => {
    let menu = document.getElementsByClassName('menu-list')[0];
    let { display } = menu.style;

    menu.style.display = display=='block'?'none':'block';
})