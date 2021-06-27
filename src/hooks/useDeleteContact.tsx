import { ApolloError, gql, useMutation } from '@apollo/client';

interface IContactInput {}

const DELETE_CONTACT_MUTATION = gql`
	mutation delete($id: ID!){
		deleteContact(id: $id) {
			firstName
		}
	}
`;

/**
 * Hook to delete a contact
 */
export const useDeleteContact = (id:string,onCompleted:any) => {
	return useMutation(DELETE_CONTACT_MUTATION, {
		onCompleted: onCompleted,
		variables:{id}
	});
};
