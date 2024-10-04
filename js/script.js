function handleSearchInput() {
    // checkInput()
    filterTasks()
}

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

function setIconToPurple() {
    const searchIcon = document.getElementById('searchIcon');
    searchIcon.style.color = 'rgb(208, 119, 197)';
}

function resetIconColor() {
    const searchIcon = document.getElementById('searchIcon');
    searchIcon.style.color = 'rgb(81, 195, 102)';
}