import axios from "axios";

export class Sync {
    constructor(public Rooturl: string) { }
    fetch(): void {
        axios.get(`${this.Rooturl}/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data)
            })
    }

    save(): void {
        const id = this.get('id');

        if (id) {
            axios.put(`${this.Rooturl}${id}`, this.data)
        } else {
            axios.post(this.Rooturl, this.data);
        }
    }
}
