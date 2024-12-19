export type Language = 'javascript' | 'python';

export type ExecuteRequestBody = {
  language: Language;
  output?: string;
};

export type ExecuteResponseBody = {
  status: 'success' | 'error';
  output?: string;
  error?: string;
};
