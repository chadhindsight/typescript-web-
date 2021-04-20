interface UserProps {
    name: string,
    age: number
}

export class User {
    // Set to private so collaborators cannot tinker with it
    constructor(private data: UserProps) { }
}