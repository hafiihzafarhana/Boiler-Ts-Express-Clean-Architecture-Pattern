export class ApiError extends Error {
  public readonly errorCode: string;
  public readonly statusCode: number;

  constructor(message: string, errorCode: string, statusCode: number = 500) {
    super(message);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }
}
