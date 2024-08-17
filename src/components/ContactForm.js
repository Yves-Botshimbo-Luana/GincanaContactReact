import React, { useState } from 'react';

const ContactForm = ({ addContact, updateContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Masculino');
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { name, phone, email, gender };

    if (isEditing) {
      updateContact(newContact);
      setIsEditing(false);
    } else {
      addContact(newContact);
    }

    setName('');
    setPhone('');
    setEmail('');
    setGender('Masculino');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      >
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
      </select>
      <button type="submit">{isEditing ? 'Atualizar' : 'Adicionar'} Contato</button>
    </form>
  );
};

export default ContactForm;
