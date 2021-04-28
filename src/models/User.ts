import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { Sync } from './Sync';



export interface UserProps {
    // '?' marks the properties as optional 
    id?: number,
    name?: string,
    age?: number
}
const rooturl = 'http://localhost:3000/users'
export class User {
    public events: Eventing = new Eventing()

    public sync: Sync<UserProps> = new Sync<UserProps>(rooturl);


}