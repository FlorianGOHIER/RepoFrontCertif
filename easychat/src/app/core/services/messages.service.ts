import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private urlApi: string;
  public collection$: BehaviorSubject<Message[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$ = new BehaviorSubject<Message[]>([]);
  }

  public refreshCollection(id: number) {
    this.httpClient
      .get<Message[]>(`${this.urlApi}/message/${id}`)
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  public update(message: Message): Observable<Message> {
    return this.httpClient.put<Message>(`${this.urlApi}/message`, message);
  }

  public add(message: Message): Observable<Message> {
    return this.httpClient
      .post<Message>(`${this.urlApi}/message`, message)
      .pipe(
        tap(() => {
          this.refreshCollection(message.channelId);
        })
      );
  }

  public getMessageById(id: number) {
    return this.httpClient.get<Message>(
      `${this.urlApi}/message/messageId/${id}`
    );
  }

  // public delete(message: Message): Observable<Message> {
  //   return this.httpClient
  //     .delete<Message>(`${this.urlApi}/message`,message)
  //     .pipe(tap(() => this.refreshCollection(message.id)));
  // }
}
