export default class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  get getId() {
    return this.id;
  }
  set setId(id) {
    this.id = id;
  }
  get getName() {
    return this.name;
  }
  set setId(name) {
    this.name = name;
  }
}

export const COURSE = "FrontEnd";
