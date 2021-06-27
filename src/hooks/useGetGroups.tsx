import { gql, useQuery } from '@apollo/client';
import { IAllGroup } from '../interface';

const GET_GROUPS_QUERY = gql`
	query getGroups {
		groups {
			name
			id
            members{
                firstName
            }
		}
	}
`;

/**
 * Hook To Get Groups
 */
export const useGetGroups = (): { data: IAllGroup; loading: boolean } => {
	const { data, loading } = useQuery(GET_GROUPS_QUERY);
	return { data, loading };
};
