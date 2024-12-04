import React from "react";
import { useState } from "react";
import { v4 } from "uuid";
import ContactsList from "./ContactsList";
import styles from "./Contacts.module.css";
function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const inputs = [
    { type: "text", name: "name", placeholder: "Name" },
    { type: "text", name: "lastName", placeholder: "LastName" },
    { type: "email", name: "email", placeholder: "Email" },
    { type: "number", name: "phone", placeholder: "Phone" },
  ];

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };
  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");
    const newContact = { ...contacts, id: v4() };
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const deleteHandler = (id) => {
    const NewContacts = contacts.filter((contact) => contact.id != id);
    setContacts(NewContacts);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>} </div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contacts;
