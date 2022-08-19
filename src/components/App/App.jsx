import { useState, useEffect } from 'react';
import { StyledApp } from './StyledApp';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { List } from '../List/List';
import { testingApartments } from 'initial-db';

const LS_KEY = 'apartments';
const LS_KEY_FILTER = 'filter';
const LS_KEY_SORT = 'sort';

export const App = () => {
  const [apartments, setApartments] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? testingApartments;
  });
  const [filter, setFilter] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY_FILTER)) ?? '';
  });
  const [sort, setSort] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY_SORT)) ?? '';
  });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(apartments));
  }, [apartments]);

  useEffect(() => {
    localStorage.setItem(LS_KEY_FILTER, JSON.stringify(filter));
  }, [filter]);

  useEffect(() => {
    localStorage.setItem(LS_KEY_SORT, JSON.stringify(sort));
  }, [sort]);

  const handleFormData = ({ name, rooms, price, description }) => {
    const alreadyAdded = apartments.some(obj => obj.name === name);
    alreadyAdded
      ? Notify.failure(`Apartment ${name} has already added`)
      : setApartments(prev => [
          ...prev,
          { name, rooms, price, description, id: nanoid() },
        ]);
  };

  const handleChange = e => setFilter(e.target.value);

  const handleSort = e => {
    console.log(e.target.value);
    setSort(e.target.value);
  };

  const deleteApartment = id => {
    setApartments(prev => prev.filter(apartment => apartment.id !== id));
  };

  return (
    <StyledApp>
      <h1>Apartment Marketplace</h1>
      <h2>Create a new rent</h2>
      <Form onSubmit={handleFormData} />
      <h2>Your current rent</h2>
      <h2>Available apartments({counter})</h2>
      <Filter
        value={filter}
        onChange={handleChange}
        onSortChange={handleSort}
        selectValue={sort}
      />
      <List
        setCounter={setCounter}
        items={apartments}
        filter={filter}
        sort={sort}
        deleter={deleteApartment}
      />
    </StyledApp>
  );
};
