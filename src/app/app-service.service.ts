import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class AppService {
  URL = 'https://private-c3edb-postsmock.apiary-mock.com/';
 
  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient
      .get(`${this.URL}/posts`);
  }
/*
  getMockPeople() {
    return of(this.fighters);
  }

  getPeopleById(id: number) {
    return this.httpClient
      .get(`${this.URL}/people/${id}`)
      .pipe(map((response: Response) => response['results']));
  }

  getSpecies() {
    return this.httpClient
      .get(`${this.URL}/species`)
      .pipe(map((response: Response) => response['results']));
  }

  getStarships() {
    return this.httpClient
      .get(`${this.URL}/starships`)
      .pipe(map((response: Response) => response['results']));
  }

  postPeople(name: string) {
    const headers = new HttpHeaders({
      test: 'STW',
    });

    const params = new HttpParams().set('Fany', 'Fancy');
    return this.httpClient
      .post('https://httpbin.org/post', { name }, { headers, params })
      .pipe(map((response: Response) => response));
  }
  */
}
