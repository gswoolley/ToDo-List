import { toDo } from "./toDo";
import { project } from "./project";
import {
  createProject,
  createToDo,
  addToDo,
  addProject,
  removeToDo,
} from "./logic";
let module = require("./main.js");

let displayController = (() => {
  //container for project objects
  let projects = [];

  //default project:
  let defaultProject = createProject("Misc Tasks");
  defaultProject.current = true;
  addProject(defaultProject, projects);

  //function that takes form data and saves it to a toDo object
  function modalSaveTask() {
    const form = document.getElementById("addTask");
    form.addEventListener("submit", (event) => {
      // handle the form data
      let title = form.elements["task-title"].value;
      let dueDate = form.elements["task-date"].value;
      const newTask = createToDo(title, dueDate);
      //console.log(newTask, "being added to", isCurrentProject());
      addToDo(isCurrentProject(), newTask);
      displayTasks();
      form.reset();
      event.preventDefault();
    });
  }
  //function that takes form data and saves it to a project object
  function modalSaveProject() {
    const form = document.getElementById("addProject");
    form.addEventListener("submit", (event) => {
      // handle the form data
      let title = form.elements["project-title"].value;
      const newProject = createProject(title);
      addProject(newProject, projects);
      displayProjects();
      form.reset();
      event.preventDefault();
    });
  }

  //function that displays all projects in the project list via dropdown menu
  function displayProjects() {
    let projectContainer = document.querySelector("body > ul > li > ul");
    projectContainer.innerHTML = "";
    projects.forEach((element, index) => {
      let project = document.createElement("LI");
      let title = document.createElement("div");
      title.className = "dropdown-item";
      title.innerText = element.title;
      project.appendChild(title);
      title.setAttribute("data-index", index);
      projectContainer.appendChild(project);
    });
    setCurrentProject();
  }

  //sets current project
  function setCurrentProject() {
    //set all projects.current to false so no multiple projects are current, sets clicked project to be current project
    //FIGURE OUT WHERE TO PUT THIS:
    let projectTitle = document.querySelector("body > ul > div");
    let projectNodeList = document.querySelector(
      "body > ul > li > ul"
    ).childNodes;
    projectNodeList.forEach((element) => {
      element.addEventListener("click", (event) => {
        projects.forEach((project) => {
          project.current = false;
        });
        console.log("clicked", event.target);
        //console log the project object that was clicked
        projects[event.target.dataset.index].current = true;
        console.log(projects);
        console.log(projects[event.target.dataset.index]);
        projectTitle.innerHTML = `<h1>${isCurrentProject().title}</h1>`;
        displayTasks();
      });
    });
  }

  function isCurrentProject() {
    let myProject;
    projects.forEach((project) => {
      if (project.current) {
        myProject = project;
      }
    });
    return myProject;
  }

  function displayTasks() {
    let taskContainer = document.querySelector(
      "body > ul > div.task.container"
    );
    taskContainer.innerHTML = "";
    isCurrentProject().tasks.forEach((task, index) => {
      console.log(task);
      let task1 = document.createElement("div");
      task1.className = "card w-50";

      let task1Body = document.createElement("div");
      task1Body.className = "card-body";

      let task1Header = document.createElement("h5");
      task1Header.className = "card-title";
      task1Header.innerText = `${task.dueDate}`;

      let task1Text = document.createElement("p");
      task1Text.className = "card-text";
      task1Text.innerText = `${task.title}`;

      let closeButton = document.createElement("button");
      closeButton.className = "del btn-close";

      task1.setAttribute("data-index", index);

      task1Body.appendChild(task1Header);
      task1Body.appendChild(task1Text);
      task1Body.appendChild(closeButton);

      task1.appendChild(task1Body);
      taskContainer.appendChild(task1);
    });

    function deleteTask() {}
    const deleteButtons = document.querySelectorAll(".del");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        let delTask = this.closest("div.card");
        console.log(delTask);
        let taskIndex = delTask.dataset.index;
        isCurrentProject().tasks.pop(taskIndex);
        delTask.remove();
      });
    });
  }

  //TODO: Delete project, task, rest of dom methods

  return {
    modalSaveTask,
    modalSaveProject,
    displayProjects,
    setCurrentProject,
    isCurrentProject,
    displayTasks,
  };
})();

export { displayController };
