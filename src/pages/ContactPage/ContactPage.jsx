import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import ContactForm from 'components/AddForm/AddForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import style from './ContactPage.module.css';
import Loader from 'components/Loader/Loader';

const ContactPage = () => {
  const dispatch = useDispatch();
  const addedContacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={style.container}>
      <h1 className={style.titleBook}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.titleContacts}>Contacts</h2>
      {error && <h2>...Error</h2>}
      {isLoading && (
        <h3>
          <Loader />
        </h3>
      )}
      {addedContacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <h2>You have not added contacts yet</h2>
      )}
    </div>
  );
};

export default ContactPage;
