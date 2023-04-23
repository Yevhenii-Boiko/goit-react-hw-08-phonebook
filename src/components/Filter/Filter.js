import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filterContact = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterChange = evt => dispatch(setFilter(evt.target.value));

  return (
    <Label>
      Filter contacts by name
      <Input type="text" value={filterContact} onChange={handleFilterChange} />
    </Label>
  );
};
