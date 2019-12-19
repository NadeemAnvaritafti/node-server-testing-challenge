const router = require('express').Router();

const Users = require('./users-model.js');


router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'Failed to get users '})
    })
});


router.post('/', (req, res) => {
    const userData = req.body;

    Users.add(userData)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'Failed to add user' })
    })
})


router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Users.remove(id)
    .then(deleted => {
        if (deleted) {
            res.status(200).json(deleted);
        } else {
            res.status(404).json({ message: 'Could not find user with that id' });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'Failed to delete user' });
    })
})





module.exports = router;