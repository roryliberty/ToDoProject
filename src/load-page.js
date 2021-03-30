import { homeButton, weekButton } from './main-area-tasks.js';

function loadPage() {
    const content = document.getElementById('content');

    // container for the page elements
    const page = document.createElement('div');
    page.id = 'page'
    content.appendChild(page);

    // top section
    const top = document.createElement('div');
    top.id = 'top';
    page.appendChild(top);

    // side-bar
    const side = document.createElement('div');
    side.id = 'side';
    page.appendChild(side);

        const homeBtn = document.createElement('button');
        homeBtn.id = 'home-btn';
        homeBtn.name = 'inactive';
        homeBtn.addEventListener('click', homeButton);
        const homeSpan = document.createTextNode('Home');
        homeBtn.appendChild(homeSpan);
        side.appendChild(homeBtn);

        const weekBtn = document.createElement('button');
        weekBtn.id=  'week-btn';
        weekBtn.name = 'active';
        weekBtn.addEventListener('click', weekButton);
        const weekSpan = document.createTextNode('This Week');
        weekBtn.appendChild(weekSpan);
        side.appendChild(weekBtn);

    // main area
    const main = document.createElement('div');
    main.id = 'main';
    page.appendChild(main);

        const addTaskButton = document.createElement('button');
        const TaskButtonSpan = document.createTextNode('Add Task');
        addTaskButton.id = 'add-task-btn';
        addTaskButton.appendChild(TaskButtonSpan);
        main.appendChild(addTaskButton);

        const taskContainer = document.createElement('div');
        taskContainer.id = 'task-container';
        main.appendChild(taskContainer);

            const taskNameText = document.createElement('h3');
            taskNameText.textContent = 'Task Name';
            taskContainer.appendChild(taskNameText);

            const taskNameEntry = document.createElement('input');
            taskNameEntry.type = 'text';
            taskNameEntry.id = 'name-entry';
            taskContainer.appendChild(taskNameEntry);

            const taskDateText = document.createElement('h3');
            taskDateText.textContent = 'Date Due';
            taskContainer.appendChild(taskDateText);

            const taskDateEntry = document.createElement('input');
            taskDateEntry.type = 'date';
            taskDateEntry.id = 'due-date';
            taskContainer.appendChild(taskDateEntry);

            const priorityText = document.createElement('h3');
            priorityText.textContent = 'Priority';
            taskContainer.appendChild(priorityText);

            const prioritySelection = document.createElement('select');
            prioritySelection.id = 'priority-select';
            taskContainer.appendChild(prioritySelection);

                const lowPriority = document.createElement('option');
                lowPriority.value = 'low';
                const lowPriorityText = document.createTextNode('Low');
                lowPriority.appendChild(lowPriorityText);
                prioritySelection.appendChild(lowPriority);

                const mediumPriority = document.createElement('option');
                mediumPriority.value = 'medium';
                const mediumPriorityText = document.createTextNode('Medium');
                mediumPriority.appendChild(mediumPriorityText);
                prioritySelection.appendChild(mediumPriority);

                const highPriority = document.createElement('option');
                highPriority.value = 'high';
                const highPriorityText = document.createTextNode('High');
                highPriority.appendChild(highPriorityText);
                prioritySelection.appendChild(highPriority);

            const submitButton = document.createElement('input');
            submitButton.type = 'submit';
            submitButton.id = 'submit';
            taskContainer.appendChild(submitButton);

    // week area
    const week = document.createElement('div');
    week.id = 'week';
    page.appendChild(week);
}

export default loadPage;

