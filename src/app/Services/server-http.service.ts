import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Emittable, Emitter, Receiver} from "@ngxs-labs/emitter";
import {State, StateContext} from "@ngxs/store";

export interface JsValueUser {
  username: string,
  password: string
}

export namespace TestState {
  export type Model = {
    data: JsValueUser[]
  }
}

const STATE_API = {
  REST_API: 'https://62162c9f7428a1d2a35dc9b0.mockapi.io/User'
}

@State<TestState.Model>({
  name: 'test__State',
  defaults: {
    data: []
  }
})
@Injectable()
export class TestState { //TestState

  static http: HttpClient

  @Emitter(TestState.success) static actSuccess: Emittable<any>

  @Receiver()
  static success(
    ctx: StateContext<TestState.Model>,
    act: Emittable<void>
  ) {
    this.http.get<JsValueUser[]>(STATE_API.REST_API).subscribe(response => {
    ctx.patchState({data: response})
    }, catchError(this.handleError))
  }

  constructor(private  httpClient: HttpClient) {
    TestState.http = httpClient
  }

  // public getAll(): Observable<any> {
  //   const url = `${this.REST_API}`;
  //   return this.httpClient
  //     .get<any>(url)
  //     .pipe(catchError(this.handleError));
  // }

  private static handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
