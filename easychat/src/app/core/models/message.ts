import { MessageI } from '../interfaces/message-i';

export class Message implements MessageI {
  public id!: number;
  public text!: Text;
  public userId = 13;
  public channelId!: number;
  public created_at!: Date;
  public updated_at!: Date;
}
