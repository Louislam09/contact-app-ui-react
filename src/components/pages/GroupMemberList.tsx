import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetGroup } from '../../hooks/useGetGroup';
import { IContact } from '../../interface';
import Header from '../app/Header';
import ContactList from '../ContactList';

interface GroupMemberListProps {}

const GroupMemberList: React.FC<GroupMemberListProps> = () => {
	let { id } = useParams<any>();
  const [members, setMembers] = useState<IContact[]>();
  const {data,loading} = useGetGroup(id);

  useEffect(() => {
    setMembers(data?.group?.members);
  }, [data,loading]);

  const onSearch = ({ currentTarget:{value} }: React.FormEvent<HTMLInputElement>) => {
    if(value){
      const searchFilter = (data?.group?.members||[]).filter((c: IContact) => {
        if(
          c.firstName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
          c.lastName.toLowerCase().indexOf(value.toLowerCase()) !== -1
        ) return c
        return null;
      })
      setMembers(searchFilter)
    }else{
      setMembers( data?.group?.members || [])
    }
  }


	return (
		<div>
			<Header title={`${data?.group?.name ||""} Group Members`} onSearch={onSearch}/>
      {loading 
            ? 
              <div style={{width: "100%",height: "100vh",display: "grid", placeItems: "center", fontSize: "4rem"}}>loading...</div> 
            :
            <>
        			<ContactList data={members||[]} toggleFav={() => console.log} />
              <div className="contact__detail__close" style={{position: "absolute",transform: "translateX(-50%)", left: "50%",bottom: "5px"}}>
                  <Link to={`/`}>
                      <i className='bx bx-x'></i>
                  </Link>
              </div>
            </>
      }
         
		</div>
	);
};

export default GroupMemberList;
