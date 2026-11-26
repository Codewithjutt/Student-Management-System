
import type {
  Student,
  UpdateStudent,
  StudentProfile,
  PublicStudent
} from "../types";

// 1. GENERIC FUNCTION
export function getData<T>(data: T): T {
  return data;
}

// 2. CALCULATE AVERAGE MARKS
export function calculateAverage(
  marks: number[]
): number {
  if (marks.length === 0) return 0;

  const total = marks.reduce(
    (sum, mark) => sum + mark,
    0
  );

  return Number((total / marks.length).toFixed(2));
}

// 3. DETERMINE STUDENT GRADE
export function calculateGrade(
  average: number
): string {
  if (average >= 90) return "A+";
  if (average >= 80) return "A";
  if (average >= 70) return "B";
  if (average >= 60) return "C";
  if (average >= 50) return "D";

  return "F";
}

// 4. UPDATE STUDENT USING PARTIAL
export function updateStudent(
  student: Student,
  updates: UpdateStudent
): Student {
  return {
    ...student,
    ...updates
  };
}

// 5. CREATE STUDENT PROFILE USING PICK
export function getStudentProfile(
  student: Student
): StudentProfile {
  return {
    id: student.id,
    name: student.name,
    email: student.email
  };
}

// 6. CREATE PUBLIC STUDENT USING OMIT
export function getPublicStudent(
  student: Student
): PublicStudent {
  const { email, ...publicStudent } = student;

  return publicStudent;
}
