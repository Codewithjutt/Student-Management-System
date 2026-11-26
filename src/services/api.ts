
import type { ApiResponse } from "../types";

// GENERIC API RESPONSE FUNCTION
export function createApiResponse<T>(
  data: T,
  message: string
): ApiResponse<T> {
  return {
    success: true,
    message,
    data,
    total: Array.isArray(data) ? data.length : 1
  };
}

// GENERIC DATA FETCHING FUNCTION
export async function fetchData<T>(
  data: T
): Promise<ApiResponse<T>> {

  return createApiResponse(
    data,
    "Data fetched successfully"
  );
}
