import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/contacts/selectors';
import { setFilterValue } from 'redux/contacts/slices/filterSlice';
import { Input, Label, Span } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(setFilterValue(evt.target.value));
  };

  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input type="text" value={filter} onChange={handleFilter} />
    </Label>
  );
};
