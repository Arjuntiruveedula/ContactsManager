
import React from 'react';
import Layout from '@/components/Layout';
import ContactCard from '@/components/ContactCard';
import { useContacts } from '@/hooks/useContacts';
import { Search } from 'lucide-react';
import { useState } from 'react';

const Index: React.FC = () => {
  const { contacts } = useContacts();
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Your Contacts</h1>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full pl-10 py-2 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredContacts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium text-muted-foreground mb-2">No contacts found</h2>
          <p className="text-muted-foreground">
            {contacts.length === 0 
              ? "You don't have any contacts yet. Add your first contact!" 
              : "No contacts matching your search."}
          </p>
        </div>
      ) : (
        <div className="contacts-grid">
          {filteredContacts.map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Index;
