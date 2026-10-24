export function createStudent(name, course) {
  return { name, course };
}

export function formatStudent(student) {
  return `${student.name} studies ${student.course}.`;
}
