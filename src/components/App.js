import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import './Style.css'

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (email) => {
    setContacts(contacts.filter((contact) => contact.email !== email));
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.email === updatedContact.email ? updatedContact : contact
      )
    );
  };

  const filteredContacts = contacts
    .filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="app-container">
      <h1>Agenda de Contatos</h1>
      <ContactForm addContact={addContact} updateContact={updateContact} />
      <input
        type="text"
        placeholder="Buscar contato..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
        updateContact={updateContact}
      />
    </div>
  );
};

export default App;
