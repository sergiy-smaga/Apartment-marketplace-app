import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { StyledFilterDiv } from './StyledFilter';

const filterId = nanoid();
const selectId = nanoid();

export const Filter = ({ onChange, onSortChange, value, selectValue }) => {
  return (
    <StyledFilterDiv>
      <label htmlFor={filterId}>Filter by rooms number</label>
      <input
        onChange={onChange}
        id={filterId}
        type="number"
        value={value}
        name="filter"
      />

      <label htmlFor={selectId}>Sort by</label>
      <select value={selectValue} id={selectId} onChange={onSortChange}>
        <option value="">No sorting</option>
        <option value="asc">Price - lowest to highest</option>
        <option value="desc">Price - highest to lowest</option>
      </select>
    </StyledFilterDiv>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  selectValue: PropTypes.string.isRequired,
};
