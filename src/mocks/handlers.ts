import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/api/execute', () => {
    return HttpResponse.json({
      status: 'success',
      output: 'Hello, world!\n',
    });
  }),
];
