/** Class used for generating a standard response object http://labs.omniti.com/labs/jsend */
class Response {
  /**
   * Construct the response object and return it
   * @param  {string}  status  - Should be either success, fail or error.
   * @param  {object/string}  data  - Response data to send back to the user
   * @return  {object}  - JSend formatted response object
   */
  constructor(status, data) {
    this.status = status;
    this.data = data;
    return this;
  }
}

export { Response };
