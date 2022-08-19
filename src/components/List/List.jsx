import PropTypes from 'prop-types';
import { ListElement } from '../ListElement/ListElement';
import { useEffect } from 'react';

export const List = ({ items, filter, sort, deleter, setCounter }) => {
  const filteredItems = items.filter(item => {
    return !filter || Number(item.rooms) === Number(filter);
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sort) {
      case 'asc':
        return a.price - b.price;
      case 'desc':
        return b.price - a.price;
      default:
        return [...filteredItems];
    }
  });

  useEffect(() => {
    setCounter(filteredItems.length);
  }, [filteredItems, setCounter]);

  return (
    <ul>
      {sortedItems.map(apartment => (
        <ListElement
          deleter={deleter}
          key={apartment.id}
          apartment={apartment}
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rooms: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
    })
  ),
  filter: PropTypes.string.isRequired,
  deleter: PropTypes.func.isRequired,
  sort: PropTypes.string,
  setCounter: PropTypes.func.isRequired,
};
