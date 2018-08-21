
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes')
  .del()
  .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        
        {name: 'Paint the House'},
      ]);
    });
};