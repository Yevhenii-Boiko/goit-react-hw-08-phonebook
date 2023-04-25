import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Toaster, toast } from 'react-hot-toast';
import { Button, Container, Paper, TextField } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    if (
      form.elements.name.value === '' ||
      form.elements.email.value === '' ||
      form.elements.password.value === ''
    ) {
      form.reset();
      return toast.error('Fill in data');
    }

    if (form.elements.password.value.length < 7) {
      form.elements.password.value = '';
      return toast.error('Password should be more than 7 symbols');
    }

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />
      <Paper
        sx={{
          display: 'flex',
          borderRadius: 'none',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '60px',
          paddingBottom: '600px',
        }}
      >
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              border: '1px solid gray',
              borderRadius: '4px',
              padding: '10px',
              width: '350px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <label>
              <TextField
                label="Username"
                variant="outlined"
                type="text"
                name="name"
              />
            </label>
            <label>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                name="email"
              />
            </label>
            <label>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                name="password"
              />
            </label>
            <Button variant="contained" type="submit">
              Register
            </Button>
          </Container>
        </form>
      </Paper>
    </>
  );
};
