const UserService = {
    getAllUsers(knex) {
        return knex.select('*').from('users')
    },

    getUserByEmail(knex, email) {
        return knex.select('*').from('users').where('email', email)
    },

    insertUser(knex, newUser) {
        return knex
            .insert(newUser)
            .into('users')
            .returning('*')
            .then(rows => {
                return rows[0]
        })
    }
}

module.exports = UserService
