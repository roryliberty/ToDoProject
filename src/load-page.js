const content = document.getElementById('content');

const page = document.createElement('div');
page.id = 'page'
content.appendChild(page);

function topNav() {
    const top = document.createElement('div');
    top.id = 'top';
    page.appendChild(top);

    const test = document.createElement('p');
    test.innerText = 'This is maybe working';
    top.appendChild(test);

    return top;
}

function sideBar() {
    const side = document.createElement('div');
    side.id = 'side';
    page.appendChild(side);

    const homeBtn = document.createElement('button');
    homeBtn.id = 'home-btn';
    const homeSpan = document.createTextNode('Home');
    homeBtn.appendChild(homeSpan);
    side.appendChild(homeBtn);

    const weekBtn = document.createElement('button');
    weekBtn.id=  'week-btn';
    const weekSpan = document.createTextNode('This Week');
    weekBtn.appendChild(weekSpan);
    side.appendChild(weekBtn);
}

function mainArea() {
    const main = document.createElement('div');
    main.id = 'main';
    page.appendChild(main);

    const test = document.createElement('p');
    test.id = 'test';
    test.innerText = 'This is working';
    main.appendChild(test);
}

function weekArea() {
    const week = document.createElement('div');
    week.id = 'week';
    page.appendChild(week);

    const test = document.createElement('p');
    test.id = 'test';
    test.innerText = 'This is working';
    week.appendChild(test);
}

function loadPage() {
    topNav();
    sideBar();
    mainArea();
    weekArea();
}

export default loadPage;