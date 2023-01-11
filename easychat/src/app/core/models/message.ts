import { MessageI } from '../interfaces/message-i';

export class Message implements MessageI {
  public id!: number;
  public text!: Text;
  public userId = 1;
  public channelId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}
