export class Attributes<T> {
    // Set to private so collaborators cannot tinker with it
    constructor(private data: T) { }

    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }
    // Change and update user's properties.
    set(update: T): void {
        Object.assign(this.data, update);
    }
}