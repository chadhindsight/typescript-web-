import { User } from './models/User';

const user = User.buildUser({ id: 69 })

// Makes a reference to the eventing functions 
user.on('change', () => {
    console.log(user)
})

user.fetch()