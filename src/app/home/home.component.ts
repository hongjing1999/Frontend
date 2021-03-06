import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../register/login.service';
import { AccountService } from '../shared/accounts.service';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;
  constructor(private router: Router,
    private loginService: LoginService,
    private accountService: AccountService,
    ) 
    { 

    }
  
  ngOnInit(): void {
    this.loginService.loggedIn.subscribe(loggedIn => this.loggedIn = loggedIn )
    this.accountService.identity().subscribe(() => {
      if (this.accountService.isAuthenticated()) {
        this.loginService.setLoggedIn(true);
        console.log(this.loggedIn);
      }
      else{
        this.loginService.setLoggedIn(false);
        console.log(this.loggedIn);
      }
    });
    
  }

  login(): void {
    if(this.loggedIn){
      this.router.navigate(['/logInSuccess']);
    }
    else{
      this.router.navigate(['/register'], { queryParams: { authorization: 'normal' } });
    }
    

  }

  loginProvider(): void {
    if(this.loggedIn){
      this.router.navigate(['/dashboard']);
    }
    else{
      this.router.navigate(['/register'], { queryParams: { authorization: 'provider' } });
    }
    

  }

  goToSuccessLogInPage(){
    //this.router.navigate(['/logInSuccess']);
  }


}
