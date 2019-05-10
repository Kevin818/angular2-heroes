import { Injectable, Inject } from '@angular/core';
import { Hero } from '../model/hero';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Response } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient, @Inject('HeroesApi_URL') private heroApiUrl: string) {

  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroApiUrl + '/api/heroes').pipe(
      map(this.extractData));
  }

  getHero(id:string): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(this.heroApiUrl + '/api/heroes/' + id);
  }

  updateHero(hero: Hero): Observable<Hero> {
    this.messageService.add(`UpdateHero`);
    return this.http.post<Hero>(this.heroApiUrl + '/api/heroes', hero);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
