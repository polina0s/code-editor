import { Editor, OnMount } from '@monaco-editor/react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { api } from '../api';
import { ExecuteRequestBody } from '../api/api';
import { Language, SNIPPETS } from '../utils';
import { LanguageSelector } from './LanguageSelector';
import { Output } from './Output';

export const CodeEditor = () => {
  const [value, setValue] = useState<string | undefined>('');
  const [language, setLanguage] = useState<Language>('javascript');
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const onEditorMount: OnMount = (editor) => {
    editor.focus();
  };

  const onSelect = (language: 'javascript' | 'python') => {
    setLanguage(language);
    setValue(SNIPPETS[language]);
  };

  const mutation = useMutation({
    mutationFn: (data: ExecuteRequestBody) => {
      return api.execute(data);
    },
  });

  const handleRun = () => {
    mutation.mutate(
      { language, output: value },
      {
        onSuccess(data) {
          console.log(data);
        },
      }
    );
  };

  return (
    <Box>
      <Stack spacing={2} direction={mediumScreen ? 'column' : 'row'}>
        <Box width={mediumScreen ? '100%' : '50%'}>
          <Box
            sx={{
              height: 55,
              display: 'flex',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <LanguageSelector
              language={language}
              onChange={(e) => onSelect(e.target.value as Language)}
            />
            <LoadingButton
              variant="contained"
              color="success"
              size="large"
              loading={mutation.isPending}
              sx={{ mb: 1 }}
              onClick={handleRun}
            >
              RUN
            </LoadingButton>
          </Box>
          <Editor
            height="80vh"
            theme="vs-dark"
            language={language}
            defaultValue="// some comment"
            value={value}
            onMount={onEditorMount}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output>{mutation.data?.output || mutation.data?.error}</Output>
      </Stack>
    </Box>
  );
};
