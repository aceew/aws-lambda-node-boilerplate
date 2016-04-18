import { HelloWorld } from './controllers/helloWorld';
import { Response } from './models/response';

/**
 * Lambda function handler
 * http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
 * @param  {object}  event  - Event object passed through to Lambda. Should be built in API gateway
 *                            mapping template with keys [operation, data].
 *                  operation  {string}  - Operation to complete, used to route entry points.
 *                  data  {object}  - All incoming params should be mapped inside of this.
 * @param  {object}  context  - Context object passed through to all Lambda calls.
 * @param  {Function}  callback  - Node callback function (error, data).
 * @return  {Function Call}  - Call to entry point function or straight to callback if no operation
 *                             was defined.
 */
function handler(event, context, callback) {
  const data = event.data;

  if (event.operation === 'getHelloWorld') {
    // require the start point for the operation, should be inside a controller
    const helloWorld = new HelloWorld(data);
    return helloWorld.get(callback);
  }

  return callback(new Response('error', 'No operation was specified.'));
}

export { handler };
