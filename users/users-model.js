const db = require('../data/db-config');

module.exports = {
    find,
    add,
    remove
};

function find() {
    return db('users');
}


function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return db('users')
                .where({ id })
                .first();
        })
}


function remove(id) {
    return db('users')
        .where('id', id)
        .del()
        .then(count => {
            if (count > 0) {
                return db('users')
                    .where({ id })
                    .first();
            }
        })

}