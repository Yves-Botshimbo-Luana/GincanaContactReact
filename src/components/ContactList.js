import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, deleteContact, updateContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.email}
          contact={contact}
          deleteContact={deleteContact}
          updateContact={updateContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
