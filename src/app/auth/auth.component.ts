import { AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AuthMessageComponent } from '../auth-message/auth-message.component';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { IUser } from '../user.entity';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, AfterContentInit, AfterViewInit, AfterContentChecked {

  @Output() loginEvent = new EventEmitter<IUser>();
  showMessage = false; 
  @ContentChild(AuthRememberComponent) remeberComponent? : AuthRememberComponent; 
  @ContentChild('t') abc? : any; 
  @ViewChild(AuthMessageComponent,{static:true}) messageComponent? : AuthMessageComponent; 
  @ViewChild('clbtn',{static:true, read:ElementRef}) btnCal? : ElementRef; 

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.messageComponent);
    console.log(this.btnCal);
  }

  login(value : IUser){
    this.loginEvent.emit(value); 
  }

  ngAfterContentChecked(): void {
    console.log(this.abc);
  }

  ngAfterViewInit(): void {
    console.log(this.abc);
    console.log(this.messageComponent);
    
    if(this.messageComponent != undefined){
      this.messageComponent.days = 90; 
      this.cd.detectChanges();
    }
    else {
      
    }
  }

  ngAfterContentInit(): void {
    console.log(this.abc);
    console.log(this.remeberComponent);
    if(this.remeberComponent != undefined){
      this.remeberComponent.checkedEvent.subscribe(data=>{
        this.showMessage = data; 
      })
    }

  }

}
