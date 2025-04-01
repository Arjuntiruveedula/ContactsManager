
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Contact } from '@/types/contact';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ContactFormProps {
  initialValues: Omit<Contact, 'id'> | Contact;
  onSubmit: (values: any) => void;
  isEditing?: boolean;
}

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  address: Yup.string().required('Address is required'),
});

const ContactForm: React.FC<ContactFormProps> = ({ initialValues, onSubmit, isEditing = false }) => {
  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>{isEditing ? 'Edit Contact' : 'Add New Contact'}</CardTitle>
      </CardHeader>
      <CardContent>
        <Formik
          initialValues={initialValues}
          validationSchema={ContactSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.name && touched.name ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="Arjun Srivastav"
                />
                <ErrorMessage name="name" component="div" className="text-destructive text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.phone && touched.phone ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="99999 99999"
                />
                <ErrorMessage name="phone" component="div" className="text-destructive text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.email && touched.email ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="Arjun.Srivatav@example.com"
                />
                <ErrorMessage name="email" component="div" className="text-destructive text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
                <Field
                  as="textarea"
                  name="address"
                  id="address"
                  rows={3}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.address && touched.address ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="123 Main St, City, Country"
                />
                <ErrorMessage name="address" component="div" className="text-destructive text-sm mt-1" />
              </div>

              <div className="flex justify-between pt-4">
                <Link to="/">
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" disabled={isSubmitting}>
                  {isEditing ? 'Update Contact' : 'Add Contact'}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
