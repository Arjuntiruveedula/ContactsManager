
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { useContacts } from '@/hooks/useContacts';

const EditContact: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getContactById, handleUpdateContact } = useContacts();
  
  if (!id) {
    navigate('/');
    return null;
  }
  
  const contact = getContactById(id);
  
  if (!contact) {
    navigate('/');
    return null;
  }
  
  return (
    <Layout>
      <ContactForm 
        initialValues={contact} 
        onSubmit={handleUpdateContact} 
        isEditing={true}
      />
    </Layout>
  );
};

export default EditContact;
