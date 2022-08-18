import { useState, useEffect } from 'react';
import { StyledApp } from './StyledApp';
import { nanoid } from 'nanoid';
import { ContactForm } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

const LS_KEY = 'contacts';
const testingContactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? testingContactsList;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleFormData = data => {
    const alreadyAdded = contacts.some(obj => obj.name === data.name);
    alreadyAdded
      ? alert(`Contact ${data.name} has already added`)
      : setContacts(prevContacts => [
          ...prevContacts,
          { name: data.name, number: data.number, id: nanoid() },
        ]);
  };

  const handleChange = e => setFilter(e.target.value);

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <StyledApp>
      <h1>Phone book</h1>
      <ContactForm onSubmit={handleFormData} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChange} />
      <ContactList items={contacts} filter={filter} deleter={deleteContact} />
    </StyledApp>
  );
};
