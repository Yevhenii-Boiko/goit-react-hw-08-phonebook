import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Container, IconButton } from '@mui/material';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container
      sx={{
        display: 'flex',
        borderRadius: 'none',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0',
      }}
    >
      <IconButton variant="contained">
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
      </IconButton>
      {isLoggedIn && (
        <IconButton variant="contained">
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        </IconButton>
      )}
    </Container>
  );
};
