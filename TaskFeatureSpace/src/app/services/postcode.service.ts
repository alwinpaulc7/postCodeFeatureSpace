import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostcodeService {
  private apiBaseUrl = 'http://postcodes.io';

  constructor(private http: HttpClient) { }

  fetchPostcodeAutocomplete(postcode: string): Observable<any> {
    const url = this.apiBaseUrl + `/postcodes/${postcode}/autocomplete`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  fetchPostcodeDetails(postcode: string): Observable<any> {
    const url = this.apiBaseUrl + `/postcodes/${postcode}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  fetchNearestPostcode(postcode: string): Observable<any> {

    const url = this.apiBaseUrl + `/postcodes/${postcode}/nearest`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error Occured';
    if (error.error instanceof ErrorEvent) {
      //Client Side Error
      errorMessage = 'Error: ${error.error.message}';
    } else {
      //Server side Error
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
    return throwError(() => new Error(errorMessage));
  }
}
