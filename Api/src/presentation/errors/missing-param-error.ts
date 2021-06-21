export class MissingParamError extends Error {
  constructor(param: String) {
    super(`The param ${param} is missing`);
    this.name = 'MissingParamError';
  }
}
