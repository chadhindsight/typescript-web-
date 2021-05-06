import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { AxiosResponse } from 'axios';
import { Model } from './Model';

export interface UserProps {
    // '?' marks the properties as optional
    id?: number,
    name?: string,
    age?: number
}
const rooturl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
    static buildBuild(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rooturl)
        )
    }


}