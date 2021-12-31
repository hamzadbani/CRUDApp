import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../user'; 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private UrlInscrip = 'http://localhost/contacts-app-php-api/register.php';
  private UrlConnexion = 'http://localhost/contacts-app-php-api/login.php';
  constructor(private httpClient: HttpClient) {}


  signUp(newUser: User): Observable<User> {
    return this.httpClient.post<User>(this.UrlInscrip,newUser);
  }
  signIn(newUser: User): Observable<User> {
    return this.httpClient.post<User>(this.UrlConnexion,newUser);
  }

  isLoggedIn(){
    if (localStorage.getItem('user')){
      return JSON.parse(localStorage.getItem('user') || '{}') ;
    }
    else return false;
    //return JSON.parse(localStorage.getItem('user') || '{}') ;
    //localStorage.getItem('user') || null
  }
  signOut(){
    localStorage.clear();
  }
}
