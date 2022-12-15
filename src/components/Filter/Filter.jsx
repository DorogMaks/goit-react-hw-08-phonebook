import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { selectFilterValue } from 'redux/contacts/selectors';
import { setFilterValue } from 'redux/contacts/slices/filterSlice';
import { InputBaseStyled, Search, SearchIconWrapper } from './FilterStyled';

export const Filter = () => {
  const filter = useSelector(selectFilterValue);

  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(setFilterValue(evt.target.value));
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputBaseStyled
        placeholder="Filter…"
        inputProps={{ 'aria-label': 'Filter' }}
        value={filter}
        onChange={handleFilter}
      />
    </Search>
  );
};
