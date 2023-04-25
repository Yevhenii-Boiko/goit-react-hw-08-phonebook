import image from '../images/image.png';
import { Paper, Typography } from '@mui/material';

export default function Home() {
  return (
    <Paper
      sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h1" color="#3f51b5" fontWeight={700}>
        Phonebook
      </Typography>
    </Paper>
  );
}
