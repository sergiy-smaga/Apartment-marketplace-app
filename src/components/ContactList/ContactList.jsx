import PropTypes from 'prop-types';
import { ListElement } from '../ListElement/ListElement';

export const ContactList = ({ items, filter, deleter }) => {
  return (
    <ul>
      {items
        .filter(item =>
          item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map(contact => (
          <ListElement deleter={deleter} key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  deleter: PropTypes.func.isRequired,
};
