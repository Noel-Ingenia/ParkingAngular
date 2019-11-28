export class LoginObjects {
  UserName: string;
  UserPassword: string;

  constructor( object: any) {
    this.UserName = (object.UserName) ? object.UserName : null;
    this.UserPassword = (object.UserPassword) ? object.UserPassword : null;
  }
}
