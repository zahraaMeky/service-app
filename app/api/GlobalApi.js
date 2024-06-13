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

const getBusinessByCategory=async(category)=>{
    const BusinessByCategory = gql`
      query FilterByCategory {
        businessLists(where: {category: 
            {name: "`+category+`"}}) {
            about
            address
            contactPerson
            category {
            name
            }
            image {
            url
            }
            email
            id
        }
    }
      `
    try {
        const BusinessByCategoryresult = await request(MASTER_URL,BusinessByCategory);
        return BusinessByCategoryresult;
    } catch (error) {
        console.error("Error fetching business lists:", error);
        throw error; // Re-throw the error to propagate it to the caller
    }
};
const getBusinessByID=async(id)=>{
    const BusinessByid = gql`
        query GetBusinessById {
        businessList(where: {id: "`+id+`"}) {
        about
        address
        contactPerson
        category {
        name
        }
        email
        id
        image {
        url
        }
        name
    }
    }
    
      `
    try {
        const BusinessByidresult = await request(MASTER_URL,BusinessByid);
        return BusinessByidresult;
    } catch (error) {
        console.error("Error fetching business lists:", error);
        throw error; // Re-throw the error to propagate it to the caller
    }
};


const CreateNewBooking=async(businessId,date,time,userEmail,userName)=>{
    const createBooking = gql`
      mutation createBooking {
        createBooking(
            data: {bookingStatus: Booked, 
            businessList: {connect: {id: "`+businessId+`"}},
            date: "`+date+`", time: "`+time+`", 
            userEmail: "`+userEmail+`",
            userName: "`+userName+`"}
        ) {
            id
        }
        publishManyBookings(to: PUBLISHED) {
            count
        }
        }
      `
    try {
        const createBookingresult = await request(MASTER_URL,createBooking);
        return createBookingresult;
    } catch (error) {
        console.error("Error fetching business lists:", error);
        throw error; // Re-throw the error to propagate it to the caller
    }
};
const BusinessBookedSlot=async(businessId,date,)=>{
    const BookedSlot = gql`
        query BusinessBookedSlot {
        bookings(where: {businessList: {id: "`+businessId+`"}, date:"`+date+`"}) {
            date
            time
        }
        }
      `
    try {
        const BookedSlotresult = await request(MASTER_URL,BookedSlot);
        return BookedSlotresult;
    } catch (error) {
        console.error("Error fetching business lists:", error);
        throw error; // Re-throw the error to propagate it to the caller
    }
};
export default {
    getCategory,
    getAllBusinessList,
    getBusinessByCategory,
    getBusinessByID,
    CreateNewBooking,
    BusinessBookedSlot
};
