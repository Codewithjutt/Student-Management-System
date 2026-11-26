
import {
  students,
  courses,
  teachers
} from "./data/students";

import {
  getData,
  calculateAverage,
  calculateGrade,
  updateStudent,
  getStudentProfile,
  getPublicStudent
} from "./utils/studentutils";

import { fetchData } from "./services/api";

import type { UpdateStudent } from "./types";

// 1. GENERIC FUNCTION TESTING

const studentData = getData(students);
const courseData = getData(courses);
const teacherData = getData(teachers);

console.log("Students:", studentData);
console.log("Courses:", courseData);
console.log("Teachers:", teacherData);

// 2. AVERAGE MARKS AND GRADES

students.forEach((student) => {
  const average = calculateAverage(student.marks);
  const grade = calculateGrade(average);

  console.log({
    name: student.name,
    average,
    grade
  });
});

// 3. UPDATE STUDENT USING PARTIAL

const updates: UpdateStudent = {
  name: "John Updated",
  marks: [95, 90, 88, 92]
};

const updatedStudent = updateStudent(
  students[0],
  updates
);

console.log("Updated Student:", updatedStudent);

// 4. STUDENT PROFILE USING PICK

const profile = getStudentProfile(students[0]);

console.log("Student Profile:", profile);

// 5. PUBLIC STUDENT USING OMIT

const publicStudent = getPublicStudent(students[0]);

console.log("Public Student:", publicStudent);

// 6. GENERIC API RESPONSES

async function main() {

  const studentResult = await fetchData(students);
  const courseResult = await fetchData(courses);
  const teacherResult = await fetchData(teachers);

  console.log("Student API:", studentResult);
  console.log("Course API:", courseResult);
  console.log("Teacher API:", teacherResult);

}

main();
