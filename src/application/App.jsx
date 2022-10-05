import React, { useState } from 'react';
import { Wrapper } from './StyeledComponents';
import ContactsBook from './contactsBook/ContactsBook';

export const App = () => {
  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);
  const [filter, setFilter] = useState('');
  console.log(contacts);

  return (
    <Wrapper>
      <ContactsBook
        filter={filter}
        contacts={contacts}
        setFilter={setFilter}
        setContacts={setContacts}
      />
    </Wrapper>
  );
};
