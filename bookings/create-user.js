const client = require('../utils/square-client');
const { v4: uuidv4 } = require('uuid');


const createUser = async ({ first_name, last_name, email }) => {
    let userExists = false;
    try{
        const response = await client.customersApi.searchCustomers({
            query: {
                filter: {
                    emailAddress: {
                        exact: email
                    }
                }
            }
        });
        console.log(response.result);
        if (response.result.customers){
            userExists = true;
            return response.result.customers[0].id
        }
    } catch (error){
        console.error(error);
    }

    if(!userExists){
        try {
            const response = await client.customersApi.createCustomer({
                idempotencyKey: uuidv4(),
                givenName: first_name,
                familyName: last_name,
                emailAddress: email
            });
    
            return response.result.customer.id;
        } catch(error){
            console.error(error);
        }
    }  
}

module.exports = createUser;