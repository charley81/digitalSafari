import { Client } from '@petfinder/petfinder-js';

const PetData = new Client({
  apiKey: '7KY0mb85otu1fUOuhLnaDCTXbnfZTkURoFngwdtvVRQPCk86AP',
  secret: 'Qw4T31QMXT6MkxyEu1AF4s5e6JQpii9svmCF16h5',
});

PetData.animal
  .search()
  .then(function (response) {
    return response.data.animals;
  })
  .catch(function (error) {
    console.error(error);
  });

export default PetData;
