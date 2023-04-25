import { NavLink } from 'react-router-dom';
import { Container, IconButton } from '@mui/material';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <Container
        sx={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <IconButton variant="contained">
          <NavLink className={css.link} to="/register">
            Register
          </NavLink>
        </IconButton>
        <IconButton variant="contained">
          <NavLink className={css.link} to="/login">
            Log In
          </NavLink>
        </IconButton>
      </Container>
    </div>
  );
};
