
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContactDetails from "./pages/ContactDetails";
import AddContact from "./pages/ContactForm/AddContact";
import EditContact from "./pages/ContactForm/EditContact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contacts/:id" element={<ContactDetails />} />
              <Route path="/contacts/new" element={<AddContact />} />
              <Route path="/contacts/:id/edit" element={<EditContact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

export default App;
