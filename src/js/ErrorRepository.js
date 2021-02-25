class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  translate(code) {
    const error = this.errors.get(code);

    if (error) {
      return error;
    } else {
      return 'Unknown error';
    }
  }
}
