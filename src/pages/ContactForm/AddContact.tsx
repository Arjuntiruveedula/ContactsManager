
import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { useContacts } from '@/hooks/useContacts';

const AddContact: React.FC = () => {
  const { handleAddContact } = useContacts();
  
  const initialValues = {
    name: '',
    phone: '',
    email: '',
    address: ''
  };
  
  return (
    <Layout>
      <ContactForm 
        initialValues={initialValues} 
        onSubmit={handleAddContact} 
      />
    </Layout>
  );
};

export default AddContact;
