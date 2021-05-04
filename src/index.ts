import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 })

// Makes a reference to the on function in the user class
user.on('change', () => {
    console.log('User was changed!')
})