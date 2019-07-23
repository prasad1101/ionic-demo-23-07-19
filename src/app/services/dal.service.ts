

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomHttpService } from '../services/custom-http.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


@Injectable()
export class DalService {

  constructor(public http: HttpClient, private customHttp: CustomHttpService) {
    console.log('Hello DalProvider Provider');
  }

 
  

  getData() {
    return this.customHttp.getReq(`http://lpbackend.co.in/learningpod-api-test/master/class`)
  }

  

}
