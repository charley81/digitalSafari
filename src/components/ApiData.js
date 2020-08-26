import { Client } from '@petfinder/petfinder-js';

const ApiData = new Client({
  apiKey: '7KY0mb85otu1fUOuhLnaDCTXbnfZTkURoFngwdtvVRQPCk86AP',
  secret: 'Qw4T31QMXT6MkxyEu1AF4s5e6JQpii9svmCF16h5',
});

ApiData.animal
  .search({
    type: 'Dog',
    breed: 'Bernedoodle',
    page: 1,
    limit: 100,
  })
  .then(function (response) {
    console.log(response.data.animals);
  })
  .catch(function (error) {
    console.error(error);
  });

export default ApiData;
