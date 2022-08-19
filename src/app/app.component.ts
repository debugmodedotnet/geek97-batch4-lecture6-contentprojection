import { Component } from '@angular/core';
import { IUser } from './user.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Content Projection Demo';
  
  r : boolean = false; 

  login(user:IUser){
    console.log('login', user, this.r);
  }

  signUp(user:IUser){
    console.log('singnup', user);
  }
  rememberMe(r1: boolean){
     this.r = r1; 
  }
}
