import { Component, OnInit } from '@angular/core';
import { DalService } from '../services/dal.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  constructor(private dal: DalService){}


  ngOnInit() {
    this.getData();
  }

  userData : any=[]
  userHeads : any = []

getData(){
  this.dal.getData().subscribe(x=>{
    console.log('userdata>>>>',x)
    this.userData = x
    this.userHeads = Object.keys(x[0])
    console.log('userHeads>>>>',this.userHeads)

  })
}
}
