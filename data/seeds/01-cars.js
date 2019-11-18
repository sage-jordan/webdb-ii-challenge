
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 83947594758204798, MAKE: 'TOYOTA', MODEL: 'SCION XB', MILEAGE: 104999, TransmissionType: '', TitleStatus: 'salvage'},
        {id: 2, VIN: 56948578858588899, MAKE: 'HONDA', MODEL: 'CIVIC', MILEAGE: 80000, TransmissionType: '', TitleStatus: 'clean'},
        {id: 3, VIN: 92928222657883674, MAKE: 'HONDA', MODEL: 'CRV', MILEAGE: 43005, TransmissionType: '', TitleStatus: ''}
      ]);
    });
};
