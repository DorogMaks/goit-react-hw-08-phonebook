import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { setFilterValue } from 'redux/slices/filterSlice';
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
