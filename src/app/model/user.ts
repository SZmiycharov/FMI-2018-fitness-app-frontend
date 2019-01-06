export class User {
    public firstName:string;
    public lastName:string;
    public password:string;
    public email:string;
    public phone: string;
    public photo: ImageData;
    public age: number;
    public weight:number;
    public height:number;
    public role:string;
    public gender:string;
    public calories:number;
    public proteins:number;
    public carbs:number;
    public fats:number;

    constructor(email, password) { 
        this.email = email;
        this.password = password;
        this.role = "client";
    }
  }
  