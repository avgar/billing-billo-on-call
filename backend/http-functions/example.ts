import { ok, badRequest } from '@wix/serverless-api';

/**
 * Example HTTP function
 */
export function get_example(request: any) {
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
 */
export function post_example(request: any) {
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
  } catch (error: any) {
    return badRequest({ error: error.message });
  }
}
