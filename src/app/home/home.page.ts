import { Component } from '@angular/core';
import { DalService } from '../services/dal.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private dal : DalService) {}

 

}
