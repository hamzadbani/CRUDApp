import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { Contact } from '../contact';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Nom !: string;
  Prenom !: string;
  Tel !: number;
  Date !: Date;
  // Contacts !: Array<any>;
  Contacts !: Contact[];
  ContactToEdit: Contact = new Contact();
  editIndex !: number;
  ContactToDelete: Contact = new Contact();
  deleteIndex !:number;

  searchTerm !: string;

  constructor(private contactService:ContactService,private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    // this.Nom = "dbani"
    // this.Prenom = "hamza"
    // this.Tel = 123445;
    this.Date = new Date(); //current date
    // this.Contacts = [
    //   {
    //   nom : "dbani",
    //   prenom : "hamza",
    //   tel : 123443,
    //   status : "active",
    //   etat : "disponible"
    //   },
    //   {
    //     nom : "mouad",
    //     prenom : "hamid",
    //     tel : 12332143,
    //     status : "active",
    //     etat : "occuper"
    //   },
    //   {
    //     nom : "ibrahim",
    //     prenom : "metouali",
    //     tel : 1290443,
    //     status : "inactive",
    //     etat : ""
    //   }
    // ]
    this.contactService.getContacts().subscribe(
      (response : Contact[])=>{
        this.Contacts = response
      }
    )
    this.Date = new Date()

    if (!this.userService.isLoggedIn()){
      this.router.navigate(['/login']);
     }  
  }
  editContact(index: number) {
    this.ContactToEdit.id = this.Contacts[index].id;
    this.ContactToEdit.nom = this.Contacts[index].nom;
    this.ContactToEdit.prenom = this.Contacts[index].prenom;
    this.ContactToEdit.tel = this.Contacts[index].tel;
    this.editIndex = index;
  }
  updateContact() {
    this.contactService.updateContact(this.ContactToEdit).subscribe((response) => {

      var updatedContact = new Contact();
      updatedContact.id = response.id;
      updatedContact.nom = response.nom;
      updatedContact.prenom = response.prenom;
      updatedContact.tel = response.tel;
      updatedContact.status = response.status;
      updatedContact.etat = response.etat;
      this.Contacts[this.editIndex] = updatedContact;

      // this.ContactToEdit.id = 0;
      // this.ContactToEdit.nom = "";
      // this.ContactToEdit.prenom = "";
      // this.ContactToEdit.tel = 0;
      // this.ContactToEdit.status = "";
      // this.ContactToEdit.etat = "";

    }), () => {

    }
  }

  confirmDelete(index: number){
    if(confirm("Are you sure to delete ")) {
    this.ContactToDelete.id = this.Contacts[index].id;
    this.ContactToDelete.nom = this.Contacts[index].nom;
    this.ContactToDelete.prenom = this.Contacts[index].prenom;
    this.ContactToDelete.tel = this.Contacts[index].tel;
    this.deleteIndex = index;

    this.contactService.deleteContact(this.ContactToDelete.id).subscribe((response) => {

      this.Contacts.splice(this.deleteIndex,1);
    }), () => {

    }
  }
  }
  // deleteContact() {
  //   this.contactService.deleteContact(this.ContactToDelete.id).subscribe((response) => {

  //     this.Contacts.splice(this.deleteIndex,1);
  //     // this.ContactToDelete.id = null;
  //     // this.ContactToDelete.nom = null;
  //     // this.ContactToDelete.prenom = null;
  //     // this.ContactToDelete.tel = null;

  //   }), () => {

  //   }
  // }

  findContacts(){
    this.contactService.findContact(this.searchTerm).subscribe(
      (response: Contact[]) => {
        this.Contacts = response;
        this.searchTerm = '';
      }
    );
  }

}
