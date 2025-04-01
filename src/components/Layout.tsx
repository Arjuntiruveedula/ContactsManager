
import React from 'react';
import { Link } from 'react-router-dom';
import { BookUser } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-secondary/40">
      <header className="bg-primary text-primary-foreground py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <BookUser size={24} />
            <span>ContactsManager</span>
          </Link>
          <nav>
            <Link 
              to="/contacts/new" 
              className="bg-white text-primary hover:bg-primary-foreground/90 transition px-4 py-2 rounded-md font-medium"
            >
              Add Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
