export class Attributes<T> {
    // Set to private so collaborators cannot tinker with it
    constructor(private data: T) { }

    get(propName: string): (number | string) {
        return this.data[propName];
    }
    // Change and update user's properties
    set(update: T): void {
        Object.assign(this.data, update);
    }
}