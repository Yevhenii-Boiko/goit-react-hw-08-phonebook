import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';

export const AuthNav = () => {
  return (
    <div>
      <Container
        sx={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Log In</NavLink>
      </Container>
    </div>
  );
};
