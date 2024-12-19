import { ExecuteRequestBody, ExecuteResponseBody } from '../utils';

class Api {
  async execute(requestBody: ExecuteRequestBody) {
    const response = await fetch('/api/execute', {
      method: 'POST',
      body: JSON.stringify(requestBody),
    });
    const json: ExecuteResponseBody = await response.json();

    return json;
  }
}

export const api = new Api();
