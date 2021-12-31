import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contact } from '../contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private Url = 'http://localhost/contacts-app-php-api/get_contacts.php'
  private UrlAdd = 'http://localhost/contacts-app-php-api/add_contacts.php'
  private UrlUpdate = 'http://localhost/contacts-app-php-api/update_contacts.php'
  constructor(private httpClient: HttpClient) { }

  getContacts():Observable<Contact[]>{
    // var contacts = [
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
    //   },
    //   {
    //     nom : "ahmed",
    //     prenom : "alami",
    //     tel : 1923888,
    //     status : "active",
    //     etat : "disponible"
    //   }
    // ]
    // return contacts;
    return this.httpClient.get<Contact[]>(this.Url);
    
  }
  addContact(newContact: Contact):Observable<Contact>{
    return this.httpClient.post<Contact>(this.UrlAdd,newContact)
  }
  updateContact(contactToUpdate: Contact): Observable<Contact> {
    return this.httpClient.put<Contact>(this.UrlUpdate, contactToUpdate);
  }
  deleteContact(contactId: number): Observable<object> {
    return this.httpClient.delete<object>(`http://localhost/contacts-app-php-api/delete_contacts.php?id=`+contactId);
  }
  findContact(searchTerm: string): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`http://localhost/contacts-app-php-api/find_contact.php?term=`+searchTerm);
  }
}
