const knex = require('../services/knex');

const index = (_, res) => {
    return knex.select('name')
        .from('people')
        .then((people) => {
            return res.render('home', { people });
        })
}

const store = async (req, res) => {
    const name = req.body.name;

    if (name) {
        await knex.insert({ name }).from('people');
    }

    return res.redirect('/');
}

module.exports = { index, store }