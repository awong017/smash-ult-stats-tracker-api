const matchService = {
    getAllMatches(knex) {
        return knex.select('*').from('matches')
    },

    insertMatch(knex, newMatch) {
        return knex
            .insert(newMatch)
            .into('matches')
            .returning('*')
            .then(rows => {
                return rows[0]
        })
    },

    deleteMatch(knex, date) {
        return knex('matches')
        .where('date', date)
        .delete()
    }
}

module.exports = matchService