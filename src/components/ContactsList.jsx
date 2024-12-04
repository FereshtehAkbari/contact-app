import React from "react";
import ContactsItem from "./Contactsitem";
import styles from "./ContactsList.module.css";
function ContactsList({ contacts, deleteHandler }) {
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactsItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.massage}>No contacts yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
