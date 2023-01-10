import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
}
