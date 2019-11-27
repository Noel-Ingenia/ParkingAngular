export class Users {
    id: number;
    username: string;
    pass?: string;


    constructor(id: number, username: string,  pass: string) {
      this.id = id;
      this.username = username;
      this.pass = pass;
    }
}
