import { toDo } from "./toDo";
import { project } from "./project";
import _ from "lodash";

export function createProject(title) {
  return new project(title);
}

export function createToDo(title, dueDate) {
  return new toDo(title, dueDate);
}
export function addProject(project, array) {
  array.push(project);
}

export function addToDo(project, toDo) {
  project.tasks.push(toDo);
}

//removes toDo from a project's toDo list based on the title of the project
//may need to change this because neeeds to delete based off of the DOM element
export function removeToDo(project, toDoTitle) {
  let someArray = _.reject(project.tasks, function (el) {
    return el.title === toDoTitle;
  });
  project.tasks = someArray;
}
