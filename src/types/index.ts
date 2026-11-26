
// 1. Student status using a union type
export type StudentStatus =
  | "Active"
  | "Inactive"
  | "Graduated";

// 2. Student interface
export interface Student {
  id: number;
  name: string;
  email: string;
  course: string;
  marks: number[];
  status: StudentStatus;
}

// 3. Course interface
export interface Course {
  id: number;
  title: string;
  duration: string;
  fee: number;
}

// 4. Teacher interface
export interface Teacher {
  id: number;
  name: string;
  email: string;
  subject: string;
}

// 5. Pick: create a student profile
export type StudentProfile = Pick<
  Student,
  "id" | "name" | "email"
>;

// 6. Omit: create a public student type
export type PublicStudent = Omit<
  Student,
  "email"
>;

// 7. Partial: create an update type
export type UpdateStudent = Partial<
  Student
>;

// 8. Generic API response interface
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  total: number;
}
