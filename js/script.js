function filterTasks() {
    const input = document.getElementById('taskSearch');
    const filter = input.value.toLowerCase();
    const grid = document.getElementById('taskGrid');
    const buttons = grid.getElementsByClassName('btn');

    for (let i = 0; i < buttons.length; i++) {
        let title = buttons[i].getElementsByClassName('btn-title')[0];
        let description = buttons[i].getElementsByClassName('btn-description')[0];
        if (title.innerHTML.toLowerCase().indexOf(filter) > -1 || description.innerHTML.toLowerCase().indexOf(filter) > -1) {
            buttons[i].style.display = "";
        } else {
            buttons[i].style.display = "none";
        }
    }
}

function handleMouseEnter() {
    isMouseOverSearchBar = true;
    const searchIcon = document.querySelector('.fas.fa-search');
    searchIcon.style.color = '#d077c5';
}

function handleMouseLeave() {
    isMouseOverSearchBar = false;
    const searchIcon = document.querySelector('.fas.fa-search');
    if (!searchBar.matches(':focus')) {
        searchIcon.style.color = '#51c366';
    }
}

const searchBar = document.getElementById('taskSearch');
searchBar.addEventListener('mouseenter', handleMouseEnter);
searchBar.addEventListener('mouseleave', handleMouseLeave);
