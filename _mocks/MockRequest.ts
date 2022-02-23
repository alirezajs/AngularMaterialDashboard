import { HttpRequest } from '@angular/common/http';



export default interface MockRequest {
  params?: any;
  queryString?: any;
  headers?: any;
  body?: any;
  original: HttpRequest<any>;
}
