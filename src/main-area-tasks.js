// This toggles the home button
// I don't know why I need to declare the elements in each function instead of outside so I only
// have to do it once.
function homeButton() {
    const home = document.getElementById('home-btn');
    const week = document.getElementById('week-btn');
    const homeArea = document.getElementById('main');
    const weekArea = document.getElementById('week');

    if (home.name === 'inactive') {
        weekArea.style.zIndex = '0';
        week.name = 'inactive';
        homeArea.style.zIndex = '1';
        home.name = 'active';
    }
}
// This toggles the week button
function weekButton() {
    const home = document.getElementById('home-btn');
    const week = document.getElementById('week-btn');
    const homeArea = document.getElementById('main');
    const weekArea = document.getElementById('week');

    if (week.name === 'inactive') {
        homeArea.style.zIndex = '0';
        home.name = 'inactive';
        weekArea.style.zIndex = '1';
        week.name = 'active';
    }
}

export { homeButton, weekButton };