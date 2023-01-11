import { ChannelI } from '../interfaces/channel-i';

export class Channel implements ChannelI {
  public id!: number;
  public name!: string;
  public description!: string;
  public ownerId = 1;
  public createdAt!: Date;
  public updatedAt!: Date;
}
