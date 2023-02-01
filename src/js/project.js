class project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
    this.current;
  }
  setTitle(title) {
    this.title = title;
  }
}
export { project };
