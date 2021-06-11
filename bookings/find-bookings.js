const client = require('../utils/square-client');

async function main([ startDate, endDate ]) {
    const avail = await searchAvail(startDate, endDate);
    return avail;
}

async function searchAvail(startDate, endDate){
    try {
        const response = await client.bookingsApi.searchAvailability({
          query: {
            filter: {
              startAtRange: {
                startAt: startDate,
                endAt: endDate,
              },
              locationId: 'L5BH74JAFG7GE',
              segmentFilters: [
                {
                  serviceVariationId: 'P5UPA4E3QSX4BCNA2HVOLGE3',
                  teamMemberIdFilter: {
                    any: [
                      'TM_KUQiMCGhkZKM-'
                    ]
                  }
                }
              ]
            }
          }
        });
      
        console.log(response.result);
        return response.result;
      } catch(error) {
        return null;
      }
}

module.exports = main;