import React, { useEffect, useState } from 'react';

// import Header from './components/app/Header';
// import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
// import ContactDetails from './components/ContactDetails';
// import Footer from './components/app/Footer';

import { IContact, IGroup } from './interface';
import { useGetContacts } from './hooks/useGetContacts';
import formatData from './utils/formatData';
export interface IData {
  contacts : IContact[];
  favoriteContacts : IContact[];
  groups : IGroup[];
}


function App() {
  const {data, loading } = useGetContacts();
  const [activeTab, setActiveTab] = useState(0);
  const [allData,setAllData] = useState<IContact[]>([]);

  const [allContacts, setAllContacts] = useState<IData>({
    contacts: [],
    favoriteContacts: [],
    groups: []
  });

  const {contacts,favoriteContacts} = allContacts;

  const _activeTab = (tabNumber: number) => {
      setActiveTab(tabNumber);
  }
  
  const toggleFav = (id:number) => {
    const nFavs = allData.map((item:any) => {
      if(item.id === id) {
        item.isFav = !item.isFav;
      }
      return item
    })
    setAllData(nFavs);
  }
  
  useEffect(() => {
    data?.contacts && setAllData([...formatData(data?.contacts)]);    
  }, [loading,data]);

  useEffect(()=>{
    // sort by favorite
    // const all = allData.sort((a,b) => Number(b.isFav) - Number(a.isFav));
    setAllContacts((currentValue: any) => ({
      ...currentValue,
      contacts: allData,
      favoriteContacts: allData.filter(item => item.isFav)
    }))
  },[allData])


  return (
      <div>
        {/* <Header title="Contact" /> */}
        {/* {activeTab === 0 && <ContactList data={contacts} toggleFav={toggleFav} />} */}
        {/* {activeTab === 1 && <ContactList data={[]} toggleFav={toggleFav} />} */}
        {/* {activeTab === 2 && <ContactList data={favoriteContacts} toggleFav={toggleFav} />} */}
        {/* <ContactDetails /> */}
        <ContactForm />
        {/* <Footer activeTab={activeTab} setActiveTab={_activeTab}/> */}
      </div>
  );
}

export default App;
