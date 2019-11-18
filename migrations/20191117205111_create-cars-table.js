
exports.up = function(knex) {
  return knex.schema.createTable('cars'), tbl => {
      tbl.increments();
      //REQ:
      //VIN
      tbl.integer('VIN').unique().notNullable();
      //MAKE
      tbl.string('MAKE').notNullable();
      //MODEL
      tbl.string('MODEL').notNullable();
      //MILEAGE
      tbl.integer('MILEAGE').notNullable();
      //NOT REQ:
      //TRANSMISSION TYPE
      tbl.string('Transmission Type');
      //TITLE STATUS
      tbl.string('Title Status');
  }
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};