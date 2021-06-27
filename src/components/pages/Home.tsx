import React, { useEffect, useState } from 'react'
import { IData } from '../../App';
import { useGetContacts } from '../../hooks/useGetContacts';
import { useGetGroups } from '../../hooks/useGetGroups';
import { useToggleFavContact } from '../../hooks/useToggleFavContact';
import { IContact, IGroup } from '../../interface';
import formatData from '../../utils/formatData';
import Footer from '../app/Footer';
import Header from '../app/Header';
import ContactList from '../ContactList';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {

    const {data, loading,refetch } = useGetContacts();
    const {data:_groups,loading: groupLoading} = useGetGroups()
    const [activeTab, setActiveTab] = useState(0);
    const [allData,setAllData] = useState<IContact[]>([]);
    const [toggleFavContact] = useToggleFavContact()
  
    const [allContacts, setAllContacts] = useState<IData>({
      contacts: [],
      favoriteContacts: [],   
      groups: []
    });
  
    const {contacts,favoriteContacts,groups} = allContacts;
  
    const _activeTab = (tabNumber: number) => {
        setActiveTab(tabNumber);
    }
    
    const toggleFav = (id:number) => {
      const nFavs = allData.map((item:any) => {
        if(item.id === id) {
          item.isFav = !item.isFav;
          toggleFavContact({variables: {id,fav:item.isFav}})
        }
        return item
      })
      setAllData(nFavs);
    }
    
    const onSearch = ({ currentTarget:{value} }: React.FormEvent<HTMLInputElement>) => {
      if(activeTab === 1){
        if(value){
          const searchFilter = _groups?.groups.filter((g: IGroup) => {
            if( g.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ) return g
            return null
          })
          setAllContacts((cv:any)=> ({...cv,groups: searchFilter}))
        }else{
          setAllContacts((cv:any)=> ({...cv,groups: _groups?.groups}))
        }
      }else{
        if(value){
          const searchFilter = allData.filter((c: IContact) => {
            if(
              c.firstName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
              c.lastName.toLowerCase().indexOf(value.toLowerCase()) !== -1
            ) return c
            return null
          })
          setAllContacts((cv:any)=> ({...cv,contacts: searchFilter}))
        }else{
          setAllContacts((cv:any)=> ({...cv,contacts: allData}))
        }
        
      }
    }

    useEffect(() => {
      data?.contacts && setAllData([...formatData(data?.contacts)]);    
    }, [loading,data]);

    useEffect(() => {
      _groups?.groups && setAllContacts((currentValue: any) => ({
        ...currentValue,
        groups: _groups?.groups 
      }));
    }, [_groups?.groups,groupLoading]);

    useEffect(()=>{
      refetch()
    },[refetch])
  
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
          <Header title="Contact" onSearch={onSearch}/>
          {activeTab === 0 && <ContactList data={contacts} toggleFav={toggleFav} />}
          {activeTab === 1 && <ContactList data={groups} toggleFav={toggleFav} isGroup={true} />}
          {activeTab === 2 && <ContactList data={favoriteContacts} toggleFav={toggleFav} />}
          <Footer activeTab={activeTab} setActiveTab={_activeTab}/>
        </div>
    );
}

export default Home;