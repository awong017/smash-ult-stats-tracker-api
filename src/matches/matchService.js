const matchService = {
    getAllMatches(knex) {
        return knex.select('*').from('matches')
    },

    getSpecificMatches(knex, user_id, player, opponent) {
        return knex
            .select('*')
            .from('matches')
            .where(
                {
                    'user_id': user_id,
                    'player': player,
                    'opponent': opponent
                }
            )
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