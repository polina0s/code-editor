import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';

import { Language } from '../utils';

const languages: Language[] = ['javascript', 'python'];

type LanguageSelectorProps = {
  language: Language;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export const LanguageSelector = ({
  language,
  onChange,
}: LanguageSelectorProps) => {
  return (
    <Box sx={{ height: '51px' }}>
      <FormControl sx={{ width: 150, mr: 4 }}>
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
    </Box>
  );
};
