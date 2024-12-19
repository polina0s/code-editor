import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

export const Output = ({ children }: React.PropsWithChildren) => {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box width={mediumScreen ? '100%' : '50%'}>
      <Typography variant="h5" sx={{ height: 55, mb: 2 }}>
        Description
      </Typography>
      <Box sx={{ height: '20vh', p: 2, mb: 2, border: '1px solid #333' }}>
        <Typography>Print &quot;Hello world&quot; to the console.</Typography>
      </Box>
      <Typography variant="h5" sx={{ height: 55, mb: 2 }}>
        Output
      </Typography>
      <Box sx={{ height: '40vh', p: 2, border: '1px solid #333' }}>
        {children}
      </Box>
    </Box>
  );
};
