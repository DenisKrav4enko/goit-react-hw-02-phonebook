import React from 'react';
import {
  Wrapper,
  ContactsList,
  DeleteContact,
  ContactsListItem,
} from './StyledComponents';

const ContactList = props => {
  const {
    filter,
    contacts,
    setContacts,
  } = props;

  const lowerCase = filter.toLowerCase();
  const upperCase = filter.toUpperCase();
  const filteredContacts = contacts.filter(contact => {
    return Object.keys(contact).some(key =>
      contact[key].toLowerCase().includes(lowerCase, upperCase)
    );
  });

  const handleOnDelete = event => {
    setContacts(contacts.filter(contact => contact.id !== event))
}

  return (
    <Wrapper>
      <ContactsList>
        {!filter.length
          ? contacts.map(contact => (
            <ContactsListItem key={contact.id}>
              {contact.name}: {contact.number}
              <DeleteContact accessKey={contact.id} onClick={event => handleOnDelete(event.currentTarget.accessKey)}>
                Delete
              </DeleteContact>
            </ContactsListItem>
          ))
          : filteredContacts.map(item => (
              <ContactsListItem key={item.id}>
                {item.name}: {item.number}
              </ContactsListItem>
            ))
        }
      </ContactsList>
    </Wrapper>
  )
}

export default ContactList;