import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Button, Container, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '14px',
        padding: '0',
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          color: '#fff',
        }}
      >
        Welcome, {user.email}
      </Typography>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Container>
  );
};
