import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { Paper } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '20px',
          borderRadius: 'none',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>{isLoading && 'Loading...'}</div>
        <ContactForm />
        <Filter />
        <ContactList />
      </Paper>
    </>
  );
}
