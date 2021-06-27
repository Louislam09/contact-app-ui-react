import { gql, useQuery } from '@apollo/client';
import { IContact } from '../interface';

const CONTACT_QUERY = gql`
	query getContacts($id: ID!) {
		contact(id: $id) {
			id
			firstName
			lastName
			phone
			email
			address
			isFav
			groups {
				id
				name
			}
		}
	}
`;

interface IContactData{
	contact: IContact;
}

/**
 * Hook To Get  Contact
 */
export const useGetContact = (id:string): {data: IContactData,loading:boolean} => {
	const {data,loading} = useQuery(CONTACT_QUERY,{
		variables: {id}
	});
    return {data,loading}
};
