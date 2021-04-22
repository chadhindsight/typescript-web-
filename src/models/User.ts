import axios, { AxiosResponse } from 'axios';

interface UserProps {
    // '?' marks the properties as optional 
    id?: number,
    name?: string,
    age?: number
}

export class User {

    // Set to private so collaborators cannot tinker with it
    constructor(private data: UserProps) { }

    get(propName: string): (number | string) {
        return this.data[propName];
    }
    // Change and update user's properties
    set(update: UserProps): void {
        Object.assign(this.data, update);
    }




    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data)
            })
    }
}