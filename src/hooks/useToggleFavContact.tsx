import { ApolloError, gql, useMutation } from '@apollo/client';

interface IContactInput {}

const CONTACT_MUTATION = gql`
	mutation toggleFav($id: ID!,$fav: Boolean!){
		toggleContactFav(id: $id, fav:$fav) {
			firstName
			isFav
		}
	}
`;

/**
 * Hook Toggle fav contact value
 */
export const useToggleFavContact = () => {
	return useMutation(CONTACT_MUTATION,{
        onCompleted: (data)=>{
            console.log(data)            
        }
    });
};
