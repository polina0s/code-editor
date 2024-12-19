import { delay, http, HttpResponse, PathParams } from 'msw';

import { ExecuteRequestBody } from '../utils';

export const handlers = [
  http.post<PathParams, ExecuteRequestBody>(
    '/api/execute',
    async ({ request }) => {
      await delay();

      const requestBody = await request.json();

      if (
        requestBody?.language === 'javascript' &&
        requestBody?.output === 'console.log("Hello World")'
      ) {
        return HttpResponse.json({
          status: 'success',
          output: 'Hello, world!\n',
        });
      } else if (
        requestBody?.language === 'python' &&
        requestBody?.output === 'print("Hello World!")'
      ) {
        return HttpResponse.json({
          status: 'success',
          output: 'Hello, world!\n',
        });
      } else {
        return HttpResponse.json({
          status: 'error',
          error: 'SyntaxError: Unexpected token',
        });
      }
    }
  ),
];
