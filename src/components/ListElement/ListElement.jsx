// import PropTypes from 'prop-types';
import { StyledLi } from './StyledListElement';

export const ListElement = ({ deleter, apartment }) => {
  const { name, rooms, price, description, id } = apartment;

  return (
    <StyledLi>
      <p>
        {name} / {rooms} rooms / ${price} / {description}
      </p>
      <button onClick={() => deleter(id)}>Delete</button>
    </StyledLi>
  );
};

// ListElement.propTypes = {
//   deleter: PropTypes.func.isRequired,
//   contact: PropTypes.exact({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }),
// };
