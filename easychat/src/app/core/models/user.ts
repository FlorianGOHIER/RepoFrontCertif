import { UserI } from '../interfaces/user-i';

export class User implements UserI {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
}
