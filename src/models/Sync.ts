import axios, { AxiosPromise } from "axios";
import { UserProps } from './User'

interface hasId {
    id?: number;
}

export class Sync<T extends hasId> {
    constructor(public Rooturl: string) { }
    fetch(id: number): AxiosPromise {
        return axios.get(`${this.Rooturl}/${id}`)
    }

    save(data: T): AxiosPromise {
        const { id } = data;

        if (id) {
            return axios.put(`${this.Rooturl}${id}`, data)
        } else {
            return axios.post(this.Rooturl, data);
        }
    }
}
