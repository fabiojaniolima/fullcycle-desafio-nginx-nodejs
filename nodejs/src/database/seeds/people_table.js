
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {name: 'Fábio Jânio'},
        {name: 'Zezinho'},
        {name: 'Maria'}
      ]);
    });
};
