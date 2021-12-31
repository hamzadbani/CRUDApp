import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFormation';
  logged : boolean = false;
  existingUser : User = new User();
  constructor(private userService:UserService, private router:Router) { }

ngOnInit(): void {
     if(this.userService.isLoggedIn()){
      this.logged = true;
      this.existingUser = this.userService.isLoggedIn();
     }
     else{
      this.logged = false;
     }
  }
  logout(){
   this.userService.signOut();
   this.logged = false;
   this.router.navigate(['/login']);
  }
}
