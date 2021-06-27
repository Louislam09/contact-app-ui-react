import { gql, useQuery } from '@apollo/client';
import { IAllContact } from '../interface';

const ALL_CONTACT_QUERY = gql`
	query getContacts {
		contacts {
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

/**
 * Hook To Get All Contacts
 */
export const useGetContacts = (): {data:IAllContact,loading:boolean,refetch:any} => {
	const {data,loading,refetch} = useQuery(ALL_CONTACT_QUERY);
    return { data, loading,refetch }
};
