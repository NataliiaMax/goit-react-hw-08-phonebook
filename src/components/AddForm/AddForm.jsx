import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import style from './AddForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const nameId = nanoid();
  const numberId = nanoid();

  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);

  const handleSubmit = event => {
    event.preventDefault();

    const newContacts = {
      id: nanoid(),
      name: name,
      number: phone,
    };

    if (
      contacts?.some(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      return toast.info(`${name} is already in contacts`);
    }
    dispatch(addContact(newContacts));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.containerInput}>
        <label htmlFor={nameId} className={style.formLabel}>
          <span className={style.text}>Name</span>
          <input
            className={style.formInput}
            value={name}
            id={nameId}
            type="text"
            onChange={handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={numberId} className={style.formLabel}>
          <span className={style.text}> Number</span>
          <input
            className={style.formInput}
            id={numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" className={style.buttonForm}>
        Add contact
      </button>
    </form>
  );
}


