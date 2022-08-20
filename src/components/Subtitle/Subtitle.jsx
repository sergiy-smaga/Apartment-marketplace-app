import { StyledSubtitle } from './StyledSubtitle';
import PropTypes from 'prop-types';

export const Subtitle = ({ text, counter }) => {
  return (
    <StyledSubtitle>
      {text}
      {counter && ` (${counter})`}
    </StyledSubtitle>
  );
};

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
  counter: PropTypes.number,
};
