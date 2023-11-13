class Department {
  private name: string;
  private student: string[] = [];
  // If we dont initialize it to an empty array we will be asked by the compiler to initialize it in the constructor.
  // so, I initialized it with an empty array `[]` ;

  constructor(name: string) {
    this.name = name;
  }

  public printName(this: Department): void {
    console.log(`The department is ` + this.name);
  }

  public addStudent(studentName: string) {
    this.student.push(studentName);
  }

  public printStudentsList(){
    console.log(this.student);
  }
}

const department = new Department("ECE");
department.addStudent('sai');
department.addStudent('manikyam');
department.printStudentsList();
// department.printName();
