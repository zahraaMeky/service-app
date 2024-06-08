import { gql, request } from "graphql-request";

const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/' + process.env.NEXT_PUBLIC_MASTER_URL_KEY + '/master';

const getCategory = async () => {
    const categoryQuery = gql`
        query category {
            categories {
                name
                image {
                    url
                }
            }
        }
    `;
    
    try {
        const categoryresult = await request(MASTER_URL,categoryQuery);
        return categoryresult;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error; // Re-throw the error to propagate it to the caller
    }
};

const getAllBusinessList = async () => {
    const BusinessListsQuery = gql`
        query BusinessList {
        businessLists {
          about
          address
          category {
            name
          }
          contactPerson
          email
          image {
            url
          }
          id
          name
        }
      }
    `;
  
    try {
        const BusinessListsresult = await request(MASTER_URL,BusinessListsQuery);
        return BusinessListsresult;
    } catch (error) {
        console.error("Error fetching business lists:", error);
        throw error; // Re-throw the error to propagate it to the caller
    }
};

export default {
    getCategory,
    getAllBusinessList
};
