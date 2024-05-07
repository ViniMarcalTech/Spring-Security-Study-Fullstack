/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Demo } from '../../models/demo';

export interface HelloWorld$Params {
}

export function helloWorld(http: HttpClient, rootUrl: string, params?: HelloWorld$Params, context?: HttpContext): Observable<StrictHttpResponse<Demo>> {
  const rb = new RequestBuilder(rootUrl, helloWorld.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Demo>;
    })
  );
}

helloWorld.PATH = '/demo';
