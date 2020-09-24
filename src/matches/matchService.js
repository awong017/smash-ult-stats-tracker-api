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

    deleteMatch(knex, id) {
        return knex('matches')
        .where('id', id)
        .delete()
    }
}

module.exports = matchService