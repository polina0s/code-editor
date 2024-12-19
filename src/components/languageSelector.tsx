import {
  Box,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
} from '@mui/material';

import { Language } from '../utils/snippets';

const languages: Language[] = ['javascript', 'python'];

type LanguageSelectorProps = {
  language: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export const LanguageSelector = ({
  language,
  onChange,
}: LanguageSelectorProps) => {
  return (
    <Box sx={{ mb: 1, height: 55 }}>
      <FormControl sx={{ width: 200, mr: 2 }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Language
        </InputLabel>
        <NativeSelect
          defaultValue={language}
          inputProps={{
            name: 'language',
            id: 'uncontrolled-native',
          }}
          onChange={onChange}
        >
          {languages.map((language) => {
            return (
              <option key={language} value={language}>
                {language}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
      <Button variant="contained" color="success" size="large" sx={{ mb: 1 }}>
        Run
      </Button>
    </Box>
  );
};
