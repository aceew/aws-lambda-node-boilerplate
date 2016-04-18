import { Response } from '../models/response';

/**
 * Class HelloWorld.
 * Functions in here should be samll manageable units of code.
 */
class HelloWorld {
  /**
   * HelloWorld Constructor.
   * @param  {object}  data  - Inital data object passed into the class.
   * @return {object}  - Current object.
   */
  constructor(data) {
    this.data = data;
    return this;
  }

  /**
   * Concatenates the values in an array.
   * @param  {array}  strings  - Array of strings to concatenate.
   * @return  {string}  - Concatenated string to return.
   */
  concat(strings) {
    if (!Array.isArray(strings)) {
      throw new Response('error', 'An array was not specified');
    }

    if (strings.length < 1) {
      throw new Response('error', 'Array contained no values');
    }

    let stringToReturn = '';
    strings.forEach((str) => {
      stringToReturn += str;
    });

    return stringToReturn;
  }

  /**
   * Entry point for operation getHelloWorld. Gets the value of this.data.message.
   * @param  {Function}  callback  - Node callback function.
   * @see  {string/array}  this.data.message  - String to return.
   * @return  {Function Call}  - Callback to return data to the user.
   */
  get(callback) {
    let err;
    let response;

    const message = this.data.message;

    if (!message) {
      err = new Response('error', 'No message specified');
      return callback(err);
    }

    if (Array.isArray(message)) {
      try {
        response = new Response('success', this.concat(message));
      } catch (e) {
        err = e;
        return callback(err);
      }
    }

    if (typeof message === 'string') {
      response = new Response('success', message);
    }

    if (!response) {
      err = new Response('error', 'Message must be an array or string');
    }

    return callback(err, response);
  }
}

export { HelloWorld };
