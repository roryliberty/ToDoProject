const content = document.getElementById('content');
const page = document.createElement('div');
page.id = 'page'
content.appendChild(page);

function topNav() {
    const top = document.createElement('div');
    top.id = 'top';
    page.appendChild(top);

    const test = document.createElement('p');
    test.innerText = 'This is working';
    top.appendChild(test);

    return top;
}

function sideBar() {
    const side = document.createElement('div');
    side.id = 'side';
    page.appendChild(side);

    const test = document.createElement('p');
    test.innerText = 'This is working';
    side.appendChild(test);
}

function loadPage() {
    topNav();
    sideBar();
}

export default loadPage;