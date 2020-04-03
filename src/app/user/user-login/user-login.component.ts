import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { SystemService } from 'src/app/system.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  message: string = ''
  
  login(): void {
    this.usersvc.login(this.user.username, this.user.password ).subscribe(
      res => {
         this.systemsvc.loggedInUser = res;
         console.debug("User:", res)
         this.router.navigateByUrl("/requests/list");
      },
      err => {
        this.message =  "Invalid Usernname/Password"        
        console.error("Invalid Username/Password:", err);

      }
  )
  }
  constructor(
    private usersvc: UserService,
    private router: Router,
    private systemsvc: SystemService) {}
  
  ngOnInit(): void {
  }

}
  

  


