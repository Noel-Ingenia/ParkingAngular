export class Users {
    Id : Number;
    Name : String;
    Surname: String;
    Plates: String;
    Email: String;
    Password: String;
    Rol : String;
    Active: Boolean;

    constructor(id: number, name: string, surname: string, plates: string, email: string, password: string,rol: string, active: boolean){
      this.Id = id;
      this.Name = name;
      this.Surname = surname;
      this.Plates = plates;
      this.Email = email;
      this.Password = password;
      this.Rol = rol;
      this.Active = active;
    }
}
