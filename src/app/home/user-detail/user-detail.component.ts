import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { user } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
@Input() userDetail!: user;
@Output() showMessage = new EventEmitter<string>;
ngOnInit(): void {
  console.log(this.userDetail);
}

handleMessage(){
  this.showMessage.emit(`Hello User, I am back`);
}
}
