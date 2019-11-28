export class Users {
    id: number;
    name: string;
    surname: string;
    username: string;
    pass?: string;
    email: string;
    extraEmail: string;
    idGroup: number;


    constructor(id: number, name: string, surname: string, username: string,
                pass: string, email: string, extraEmail: string, idGroup: number) {
      this.id = id;
      this.username = username;
      this.pass = pass;
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.extraEmail = extraEmail;
      this.idGroup = idGroup;
    }
}
