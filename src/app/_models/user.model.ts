export enum UserRole {
    Admin = "admin",
    Standard = "standard"
}

export class User {
    id: string = "";
    email: string = "";
    username: string = "";
    name: string = "";
    role: UserRole = UserRole.Standard;

    constructor() {}
}