import { User } from './models/User';

const user = new User({ id: 1 })

// Makes a reference to the eventing functions 
user.on('save', () => {
    console.log(user)
})

user.save()