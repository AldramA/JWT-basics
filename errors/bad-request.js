const CustomAPIError = require('./custom-error');
const { StatusCodes } = require('http-status-codes');

class BadRequst extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequst;
