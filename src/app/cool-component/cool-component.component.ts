import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cool-component',
  templateUrl: './cool-component.component.html',
  styleUrls: ['./cool-component.component.css']
})
export class CoolComponentComponent implements OnInit {

  term: string = "nah"	

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	console.log(this.activatedRoute.queryParams["_value"])
  	this.activatedRoute.queryParams.subscribe(
  		(queryParams) => {
  			this.term = queryParams["sup"]
  		}
  		)
  }

}
