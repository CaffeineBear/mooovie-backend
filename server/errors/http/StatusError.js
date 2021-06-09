export default class StatusError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.code = statusCode;
    this.name = 'StatusError';
  }
}
