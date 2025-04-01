
import React from 'react';
import { Contact } from '@/types/contact';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Phone, Mail } from 'lucide-react';

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const initials = contact.name
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();
    
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="flex flex-col items-center mb-4">
          <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-2">
            {initials}
          </div>
          <h3 className="text-lg font-bold">{contact.name}</h3>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Phone size={16} className="mr-2 flex-shrink-0" />
            <span className="truncate">{contact.phone}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Mail size={16} className="mr-2 flex-shrink-0" />
            <span className="truncate">{contact.email}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 py-3 mt-auto">
        <Link 
          to={`/contacts/${contact.id}`}
          className="w-full text-center text-primary hover:text-primary/80 font-medium"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
