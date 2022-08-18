import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { StyledFilterDiv } from './StyledFilter';

const filterId = nanoid();

export const Filter = ({ onChange, value }) => {
  return (
    <StyledFilterDiv>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        onChange={onChange}
        id={filterId}
        type="text"
        value={value}
        name="filter"
      />
    </StyledFilterDiv>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
