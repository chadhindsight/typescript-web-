import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { Sync } from './Sync';



export interface UserProps {
    // '?' marks the properties as optional 
    id?: number,
    name?: string,
    age?: number
}

export class User {
    public events: Eventing = new Eventing()

    // Set to private so collaborators cannot tinker with it
    constructor(private data: UserProps) { }

    get(propName: string): (number | string) {
        return this.data[propName];
    }
    // Change and update user's properties
    set(update: UserProps): void {
        Object.assign(this.data, update);
    }





}