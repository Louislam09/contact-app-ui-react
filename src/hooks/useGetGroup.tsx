import { gql, useQuery } from '@apollo/client';
import { IGroup } from '../interface';

const GROUP_QUERY = gql`
	query getGroup($id: ID!) {
		group(id: $id) {
			id
			name
			members {
				id
				firstName
				lastName
				phone
				email
				address
				isFav
			}
		}
	}
`;

interface IGroupData{
	group: IGroup;
}

/**
 * Hook To Get  Contact
 */
export const useGetGroup = (id:string): {data: IGroupData,loading:boolean} => {
	const {data,loading} = useQuery(GROUP_QUERY,{
		variables: {id}
	});
    return {data,loading}
};
