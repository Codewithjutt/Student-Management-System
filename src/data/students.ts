
import type {
  Student,
  Course,
  Teacher,
  ApiResponse
} from "../types";

// STUDENTS
export const students: Student[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    course: "Full Stack Development",
    marks: [85, 90, 78, 92],
    status: "Active"
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@gmail.com",
    course: "Data Science",
    marks: [92, 88, 95, 90],
    status: "Active"
  },
  {
    id: 3,
    name: "David Wilson",
    email: "david@gmail.com",
    course: "Web Development",
    marks: [65, 70, 72, 68],
    status: "Inactive"
  }
];

// COURSES
export const courses: Course[] = [
  {
    id: 101,
    title: "Full Stack Development",
    duration: "6 Months",
    fee: 1500
  },
  {
    id: 102,
    title: "Data Science",
    duration: "8 Months",
    fee: 2000
  },
  {
    id: 103,
    title: "Web Development",
    duration: "4 Months",
    fee: 1200
  }
];

// TEACHERS
export const teachers: Teacher[] = [
  {
    id: 201,
    name: "Michael Brown",
    email: "michael@gmail.com",
    subject: "React and TypeScript"
  },
  {
    id: 202,
    name: "Emily Johnson",
    email: "emily@gmail.com",
    subject: "Data Science"
  }
];

// GENERIC API RESPONSES
export const studentResponse: ApiResponse<Student[]> = {
  success: true,
  message: "Students fetched successfully",
  data: students,
  total: students.length
};

export const courseResponse: ApiResponse<Course[]> = {
  success: true,
  message: "Courses fetched successfully",
  data: courses,
  total: courses.length
};

export const teacherResponse: ApiResponse<Teacher[]> = {
  success: true,
  message: "Teachers fetched successfully",
  data: teachers,
  total: teachers.length
};
