interface ModelAttributes<T> {
    set(value: T): void;
    get<K extends keyof T>(key: K): T[K];
}


interface Sync {

}

interface Events {
    on(eventName: string, callback: () => void): void
    trigger(ventName: string): void;
}

export class Model {

}