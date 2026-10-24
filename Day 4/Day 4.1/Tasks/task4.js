import { createStudent } from "./task4-utils.js";
import { printStudentDetails } from "./task4-studentService.js";

const student = createStudent("Ravi", "JavaScript");
printStudentDetails(student);
