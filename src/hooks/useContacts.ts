
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { addContact, updateContact, deleteContact } from '@/store/contactsSlice';
import { Contact } from '@/types/contact';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useContacts = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getContactById = (id: string) => {
    return contacts.find(contact => contact.id === id);
  };

  const handleAddContact = (contact: Omit<Contact, 'id'>) => {
    const newContact = {
      ...contact,
      id: Date.now().toString() // Simple ID generation
    };
    dispatch(addContact(newContact));
    toast.success('Contact added successfully!');
    navigate('/');
  };

  const handleUpdateContact = (contact: Contact) => {
    dispatch(updateContact(contact));
    toast.success('Contact updated successfully!');
    navigate('/');
  };

  const handleDeleteContact = (id: string) => {
    dispatch(deleteContact(id));
    toast.success('Contact deleted successfully!');
    navigate('/');
  };

  return {
    contacts,
    getContactById,
    handleAddContact,
    handleUpdateContact,
    handleDeleteContact
  };
};
