import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Channel } from '../models/channel';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  private urlApi: string;
  public collection$: Observable<Channel[]>;
  public channels$: BehaviorSubject<Channel[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$ = this.httpClient.get<Channel[]>(`${this.urlApi}/channel`);
    this.channels$ = new BehaviorSubject<Channel[]>([]);
  }

  public refreshChannels() {
    this.httpClient
      .get<Channel[]>(`${this.urlApi}/channel`)
      .subscribe((data) => {
        this.channels$.next(data);
      });
  }

  getChannelById(id: number): Observable<Channel> {
    return this.httpClient.get<Channel>(`${this.urlApi}/channel/${id}`);
  }

  public add(channel: Channel): Observable<Channel> {
    return this.httpClient.post<Channel>(`${this.urlApi}/channel`, channel);
  }

  public update(channel: Channel): Observable<Channel> {
    return this.httpClient.put<Channel>(`${this.urlApi}/channel`, channel);
  }

  public delete(channel: Channel) {
    this.httpClient
      .delete<Channel>(`${this.urlApi}/channel/${channel.id}`)
      .pipe(tap(() => this.refreshChannels()));
  }
}
