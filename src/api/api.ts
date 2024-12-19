import { Language } from '../utils';

type ExecuteRequestBody = {
  language: Language;
  output: string;
};

type ExecuteResponseBody = {
  status: 'success' | 'error';
  output?: string;
  error?: string;
};

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
