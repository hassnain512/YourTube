class ApiResponse {
  constructor(statusCode, data, message = "success") {
    message = this.message;
    (statusCode = this.statusCode),
      (data = this.data),
      (success = statusCode < 400);
  }
}
export { ApiResponse };
