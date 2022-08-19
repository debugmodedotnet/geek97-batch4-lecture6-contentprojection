import { AfterContentInit, Component, ContentChild, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.css']
})
export class AuthRememberComponent implements OnInit {

  @Output() checkedEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    //console.log(this.remeberComponent);
  }



  onChecked(value:any){
    this.checkedEvent.emit(value?.target?.checked);
  }

}
