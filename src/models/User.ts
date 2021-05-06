import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { AxiosResponse } from 'axios';


export interface UserProps {
    // '?' marks the properties as optional
    id?: number,
    name?: string,
    age?: number
}
const rooturl = 'http://localhost:3000/users'
export class User {
    public events: Eventing = new Eventing()
    public sync: ApiSync<UserProps> = new ApiSync<UserProps>(rooturl);
    public attributes: Attributes<UserProps>;


}