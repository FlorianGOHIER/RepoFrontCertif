import { ChannelI } from '../interfaces/channel-i';

export class Channel implements ChannelI {
  public id!: number;
  public name!: string;
  public description!: string;
  public ownerId = 2;
  public created_at!: Date;
  public updated_at!: Date;
}
