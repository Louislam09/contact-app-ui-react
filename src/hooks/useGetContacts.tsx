import { gql, QueryResult, useQuery } from "@apollo/client"


const ALL_CONTACT_QUERY = gql`
    query getContacts { 
        contacts { 
            id
            firstName
            lastName
            email
            phone
            address
            isFav
            groups { 
                id
                name
            }
        }
    }
`

/**
 * Hook To Get All Contacts
 */
 export const useGetContacts = (): QueryResult<any> => {
    return useQuery(ALL_CONTACT_QUERY)
}
