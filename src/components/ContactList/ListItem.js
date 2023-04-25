import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { MdDelete } from 'react-icons/md';
import { Item, ItemWrapper, Text } from './ListItem.styled';
import { Button } from '@mui/material';

export const ListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <ItemWrapper>
        <Text>{name}:</Text>
        <Text>{number}</Text>

        <Button variant="contained" type="button" onClick={handleDelete}>
          {/* Delete */}
          <MdDelete />
        </Button>
      </ItemWrapper>
    </Item>
  );
};
