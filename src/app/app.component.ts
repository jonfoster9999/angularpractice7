import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  users: any[] = [
  	"bill",
  	"bob",
  	"sam"
  ] 

  goToNice() {
    this.router.navigate(['/nice'])
  }

  constructor(private accountsService: AccountsService,
  			  private router: Router,
  			  private activatedRoute: ActivatedRoute ) {
  	console.log(this.activatedRoute.params)
  }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
