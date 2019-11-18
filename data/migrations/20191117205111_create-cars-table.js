
exports.up = function(knex) {
  return knex.schema.createTable('cars', function(tbl){
    tbl.increments();
    tbl.integer('VIN').unique().notNullable();
    tbl.string('MAKE').notNullable();
    tbl.string('MODEL').notNullable();
    tbl.integer('MILEAGE').notNullable();
    tbl.string('TransmissionType');
    tbl.string('TitleStatus');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
