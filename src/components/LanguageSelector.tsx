import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';

import { Language } from '../utils';

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
    <Box>
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
