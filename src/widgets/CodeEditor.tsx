import { Editor, OnMount } from '@monaco-editor/react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { api } from '../api';
import { DescriptionBlock } from '../components';
import { LanguageSelector } from '../components/LanguageSelector';
import { Output } from '../components/Output';
import { ExecuteRequestBody, Language, SNIPPETS } from '../utils';

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
    mutation.mutate({ language, output: value?.trim() });
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Stack
        height={'100%'}
        spacing={2}
        direction={mediumScreen ? 'column' : 'row'}
      >
        <Box width={mediumScreen ? '100%' : '50%'} sx={{ height: '100%' }}>
          <DescriptionBlock />
        </Box>
        <Box
          width={mediumScreen ? '100%' : '50%'}
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <Box
            sx={{
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
              onClick={handleRun}
            >
              RUN
            </LoadingButton>
          </Box>
          <Box sx={{ mb: 2, flex: 1 }}>
            <Editor
              theme="vs-dark"
              language={language}
              defaultValue="// some comment"
              value={value}
              onMount={onEditorMount}
              onChange={(value) => setValue(value)}
            />
          </Box>
          <Output>{mutation.data?.output ?? mutation.data?.error}</Output>
        </Box>
      </Stack>
    </Box>
  );
};
