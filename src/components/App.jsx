import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import { GiRotaryPhone } from "react-icons/gi";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";

import contactsData from "../data/contacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");

    return savedContacts ? JSON.parse(savedContacts) : contactsData;
  });
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  const addContact = ({ name, number }) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: nanoid(), name, number },
    ]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const searchContacts = (searchValue) => {
    setSearch(searchValue);
  };

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="upper-container">
      <div className="container">
        <h1>
          <GiRotaryPhone className={"phonebook-logo"} />
          Phonebook
        </h1>
        <ContactForm onAddContact={addContact} />
        <SearchBox search={search} onChange={searchContacts} />
      </div>
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
