import PropTypes from 'prop-types';
import { StyledLi } from './StyledListElement';

export const ListElement = ({ deleter, contact }) => {
  const { name, number, id } = contact;

  return (
    <StyledLi>
      <p>
        {name} : {number}
      </p>
      <button onClick={() => deleter(id)}>delete</button>
    </StyledLi>
  );
};

ListElement.propTypes = {
  deleter: PropTypes.func.isRequired,
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
