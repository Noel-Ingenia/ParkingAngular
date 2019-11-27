export class LoginObjects {
  username: string;
  pass: string;

  constructor( object: any) {
    this.username = (object.username) ? object.username : null;
    this.pass = (object.pass) ? object.pass : null;
  }
}
