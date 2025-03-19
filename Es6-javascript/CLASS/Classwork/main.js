import { Classroom } from "./classroom.js";


const myClassroom = new Classroom();

myClassroom.addStudents("Lateefat", 22, 51);
myClassroom.addStudents("Ridwon", 17, 61);
myClassroom.addStudents("Muheez", 18, 50);
myClassroom.addStudents("soliu", 190, 41);
myClassroom.addStudents("dolu", 20, 1);

const filteredResult= myClassroom.filterStudentGradeAndName();

const MapResult = myClassroom.getMappedResult();

console.log(filteredResult)
console.log(MapResult)