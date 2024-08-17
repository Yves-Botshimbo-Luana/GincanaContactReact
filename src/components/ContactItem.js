import React from 'react';

const ContactItem = ({ contact, deleteContact, updateContact }) => {
  return (
    <li>
      <h3>{contact.name}</h3>
      <p>Telefone: {contact.phone}</p>
      <p>E-mail: {contact.email}</p>
      <p>Sexo: {contact.gender}</p>
      <button onClick={() => updateContact(contact)}>Editar</button>
      <button onClick={() => deleteContact(contact.email)}>Excluir</button>
    </li>
  );
};

export default ContactItem;
