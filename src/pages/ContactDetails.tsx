
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContacts } from '@/hooks/useContacts';
import Layout from '@/components/Layout';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";

const ContactDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getContactById, handleDeleteContact } = useContacts();
  
  if (!id) {
    navigate('/');
    return null;
  }
  
  const contact = getContactById(id);
  
  if (!contact) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-4">Contact not found</h2>
          <Link to="/">
            <Button>Back to Contacts</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const initials = contact.name
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  return (
    <Layout>
      <div className="mb-6">
        <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={16} className="mr-1" />
          <span>Back to contacts</span>
        </Link>
      </div>
      
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="flex flex-col items-center pb-6">
          <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mb-4">
            {initials}
          </div>
          <CardTitle className="text-2xl">{contact.name}</CardTitle>
          <CardDescription>Contact Details</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex items-center">
            <div className="mr-3 p-2 bg-primary/10 rounded-full">
              <Phone className="text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Phone</div>
              <div className="font-medium">{contact.phone}</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="mr-3 p-2 bg-primary/10 rounded-full">
              <Mail className="text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="font-medium">{contact.email}</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="mr-3 p-2 bg-primary/10 rounded-full">
              <MapPin className="text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Address</div>
              <div className="font-medium">{contact.address}</div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between border-t pt-6">
          <Link to={`/contacts/${id}/edit`}>
            <Button variant="outline" className="flex items-center">
              <Edit size={16} className="mr-2" />
              <span>Edit</span>
            </Button>
          </Link>
          
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="flex items-center">
                <Trash2 size={16} className="mr-2" />
                <span>Delete</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete {contact.name}'s contact information.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => handleDeleteContact(id)}>
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </Layout>
  );
};

export default ContactDetails;
