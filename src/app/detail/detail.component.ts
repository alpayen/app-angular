import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute } from '@angular/router';
import {DetailService} from './detail.service';
import {Single} from './single'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers : [DetailService]

})
export class DetailComponent implements OnInit {
  id: number;
  single = {};

  constructor(private activatedRoute : ActivatedRoute , private detailService: DetailService) {

  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.single =  this.detailService.getTodo(this.id);
  }

  updateTodo(id:number,text:string){
    this.single = this.detailService.updateTodo(id, text);
  }

}
