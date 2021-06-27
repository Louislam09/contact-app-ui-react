import { ApolloError, gql, useMutation } from '@apollo/client';

interface IContactInput {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    groups: Array<string>;

}

const CONTACT_MUTATION = gql`
	mutation createConctact($contactInput: ContactInput!) {
		addContact(contactInput: $contactInput) {
			id
			firstName
			lastName
		}
	}
`;

/**
 * Hook To Get All Contacts
 */
export const useCreateContact = (values: IContactInput,onCompletedHandle: ((data: any) => void) ,onErrorHandle: ((error: ApolloError) => void)) => {
	return useMutation(CONTACT_MUTATION,{
        onCompleted: onCompletedHandle,
        onError: onErrorHandle,
        variables: { contactInput: values }
    });
};
