const client = require('./square-client');
const { v4: uuidv4 } = require('uuid');

const createBooking = async (obj) => {
    console.log(obj);
    try {
        const response = await client.bookingsApi.createBooking({
            idempotencyKey: uuidv4(),
            booking: {
                startAt: obj.startAt,
                locationId: obj.locationId,
                customerId: obj.customerId,
                customerNote: 'Null',
                appointmentSegments: [
                    {
                        durationMinutes: obj.durationMinutes,
                        serviceVariationId: obj.serviceVariationId,
                        teamMemberId: obj.teamMemberId,
                        serviceVariationVersion: obj.serviceVariationVersion
                    }
                ]
            }
        });

        console.log(response.result);

    } catch(error){
        console.error(error);
    }
}

module.exports = createBooking;