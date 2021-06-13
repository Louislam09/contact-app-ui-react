import React, { useEffect } from 'react';

import Header from './components/app/Header';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import Footer from './components/app/Footer';

import { IContact } from './interface';
interface IData {
  contacts : IContact[]
}

function App() {

  return (
      <div>
        {/* <Header title="Contact" /> */}
        {/* <ContactList /> */}
        <ContactDetails />
        {/* <Footer /> */}
      </div>
  );
}

export default App;
