/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Demo } from '../models/demo';
import { helloWorld } from '../fn/demo-controller/hello-world';
import { HelloWorld$Params } from '../fn/demo-controller/hello-world';

@Injectable({ providedIn: 'root' })
export class DemoControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `helloWorld()` */
  static readonly HelloWorldPath = '/demo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `helloWorld()` instead.
   *
   * This method doesn't expect any request body.
   */
  helloWorld$Response(params?: HelloWorld$Params, context?: HttpContext): Observable<StrictHttpResponse<Demo>> {
    return helloWorld(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `helloWorld$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  helloWorld(params?: HelloWorld$Params, context?: HttpContext): Observable<Demo> {
    return this.helloWorld$Response(params, context).pipe(
      map((r: StrictHttpResponse<Demo>): Demo => r.body)
    );
  }

}
