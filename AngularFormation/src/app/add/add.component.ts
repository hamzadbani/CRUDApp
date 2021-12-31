import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../service/contact.service';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  newContact: Contact = new Contact();
  constructor(private contactService:ContactService, private router:Router,private userService:UserService) { }

  ngOnInit(): void {
     if (!this.userService.isLoggedIn()){
      this.router.navigate(['/login']);
       // window.location.href="/login";
      //  console.log('blan');
     }     
     
  }
  saveContact(){
    this.contactService.addContact(this.newContact).subscribe(
      (response) =>{
        console.log(response)
        // window.location.href="/home"
        this.router.navigate(['/home'])
      },(error)=>{
        console.log(error)
      }
    )
  }
}
