export class Users {
    Id: number;
    EmployeeName: string;
    EmployeeSurname: string;
    UserName: string;
    UserPassword?: string;
    Email: string;
    ExtraEmail: string;
    IdGroup: number;


    constructor(Id: number, EmployeeName: string, EmployeeSurname: string, UserName: string,
                UserPassword: string, Email: string, ExtraEmail: string, IdGroup: number) {
      this.Id = Id;
      this.UserName = UserName;
      this.UserPassword = UserPassword;
      this.EmployeeName = EmployeeName;
      this.EmployeeSurname = EmployeeSurname;
      this.Email = Email;
      this.ExtraEmail = ExtraEmail;
      this.IdGroup = IdGroup;
    }
}
