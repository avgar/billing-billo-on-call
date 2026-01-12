import { ok, badRequest } from 'wix-http-functions';

/**
 * Example HTTP function
 *
 * @param {Object} request - The HTTP request object
 * @returns {Object} The HTTP response
 */
export function get_example(request) {
  const response = {
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      message: 'Hello from Wix Serverless!',
      timestamp: new Date().toISOString()
    }
  };

  return ok(response);
}

/**
 * Example POST function
 *
 * @param {Object} request - The HTTP request object
 * @returns {Object} The HTTP response
 */
export function post_example(request) {
  try {
    const body = request.body;

    if (!body) {
      return badRequest({ error: 'Request body is required' });
    }

    const response = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        message: 'Data received successfully',
        data: body,
        timestamp: new Date().toISOString()
      }
    };

    return ok(response);
  } catch (error) {
    return badRequest({ error: error.message });
  }
}
