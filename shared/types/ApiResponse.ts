// ApiResponse.ts
import { ApiError } from './ApiError';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errorCode?: string;
  statusCode?: number;
}

// Fungsi sukses tetap sama
export function createSuccessResponse<T>(data: T, message = 'Operation successful'): ApiResponse<T> {
  return {
    success: true,
    message,
    data
  };
}

// Fungsi error sekarang melempar ApiError
export function retrieveDataErrorResponse(message: string, errorCode: string, statusCode: number = 404): never {
  throw new ApiError(message, errorCode, statusCode);
}
