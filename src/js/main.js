// Import our custom CSS
import "../scss/styles.scss";
import _ from "lodash";
import * as bootstrap from "bootstrap";
import { toDo } from "./toDo";
import { project } from "./project";
import { displayController } from "./display";
import {
  createProject,
  createToDo,
  addToDo,
  addProject,
  removeToDo,
} from "./logic";

//List of all projects
let projects = [];

//loop through all projects, if project contains 'Current' attrribute, then add task to project

//DOM manipulation methods:
displayController.modalSaveTask();
displayController.modalSaveProject();
displayController.displayProjects();
displayController.isCurrentProject();
//displayController.currentProject();

/*
//Create a new project
let project1 = createProject("January ToDos");
project1.current = true;
addProject(project1, projects);

//Create tasks for the project
const toDo1 = createToDo("haircut", "jan 20");
let toDo2 = createToDo("groceries", "jan 3");
addToDo(project1, toDo1);
addToDo(project1, toDo2);
removeToDo(project1, toDo1);
console.log(project1);
removeToDo(project1, "haircut");
console.log("Removed haircut from project");
console.log(project1);
*/
