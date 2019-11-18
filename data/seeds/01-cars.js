
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: '', MAKE: '', MODEL: '', MILEAGE: '', TransmissionType: '', TitleStatus: ''},
        {id: 2, VIN: '', MAKE: '', MODEL: '', MILEAGE: '', TransmissionType: '', TitleStatus: ''},
        {id: 3, VIN: '', MAKE: '', MODEL: '', MILEAGE: '', TransmissionType: '', TitleStatus: ''}
      ]);
    });
};
