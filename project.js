document.addEventListener("DOMContentLoaded", function () {
    const projectsList = document.getElementById("projects");
    const tasksList = document.getElementById("tasks");
    const newTaskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");

    // Sample projects and tasks data (you can load this data from a server in a real app)
    let projectsData = [
        { id: 1, name: "Project 1" },
        { id: 2, name: "Project 2" },
    ];

    let tasksData = [
        { id: 1, project_id: 1, name: "Task 1 for Project 1" },
        { id: 2, project_id: 1, name: "Task 2 for Project 1" },
        { id: 3, project_id: 2, name: "Task 1 for Project 2" },
    ];

    // Display projects and tasks
    function displayProjectsAndTasks() {
        // Clear existing lists
        projectsList.innerHTML = "";
        tasksList.innerHTML = "";

        // Display projects
        projectsData.forEach((project) => {
            const listItem = document.createElement("li");
            listItem.textContent = project.name;
            listItem.addEventListener("click", () => loadTasksForProject(project.id));
            projectsList.appendChild(listItem);
        });

        // Display tasks
        tasksData.forEach((task) => {
            const listItem = document.createElement("li");
            listItem.textContent = task.name;
            tasksList.appendChild(listItem);
        });
    }

    // Load tasks for a specific project
    function loadTasksForProject(projectId) {
        const projectTasks = tasksData.filter((task) => task.project_id === projectId);
        tasksList.innerHTML = "";
        projectTasks.forEach((task) => {
            const listItem = document.createElement("li");
            listItem.textContent = task.name;
            tasksList.appendChild(listItem);
        });
    }

    // Add a new task
    addTaskButton.addEventListener("click", () => {
        const newTaskName = newTaskInput.value.trim();
        if (newTaskName !== "") {
            const newTask = {
                id: tasksData.length + 1,
                project_id: 1, // You can update this to the selected project
                name: newTaskName,
            };
            tasksData.push(newTask);
            newTaskInput.value = "";
            displayProjectsAndTasks();
        }
    });

    // Initial display
    displayProjectsAndTasks();
});

