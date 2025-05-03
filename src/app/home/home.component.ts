import { Component, OnInit } from '@angular/core';
import { PaintingService } from '../painting.service';
import { user } from '../model/user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 userDetails : user[] = [];
 selectedUser : any ;
 title:string="hello";
 message='';
 constructor(private paintService: PaintingService){}

  ngOnInit(){
   this.paintService.getProductDetails().subscribe(user => {
      this.userDetails = user;
    });
  }

  selectUser(user:user){
    this.selectedUser = user;
  }

  receiveMessage(event:string){
    this.message = event;
  }
}
