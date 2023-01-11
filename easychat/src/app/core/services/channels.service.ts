import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Channel } from '../models/channel';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  private urlApi: string;
  public collection$: Observable<Channel[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$ = this.httpClient.get<Channel[]>(`${this.urlApi}/channel`);
  }

  getChannelById(id: number): Observable<Channel> {
    return this.httpClient.get<Channel>(`${this.urlApi}/channel/${id}`);
  }

  public add(channel: Channel): Observable<Channel> {
    return this.httpClient.post<Channel>(`${this.urlApi}/channel`, channel);
  }
}
