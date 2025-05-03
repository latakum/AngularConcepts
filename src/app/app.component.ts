import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PaintingService } from './painting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isAuthenticated : boolean = false;

  constructor(private paintService: PaintingService,
    private router : Router
  ){
this.paintService.getauth().subscribe(x => {
  this.isAuthenticated = x;
});
  }

ngOnInit(): void {
  //this.isAuthenticated = localStorage.getItem('isAuthenticated') == 'true';
  this.paintService.setauth(true);
  console.log('isAuthenticated',this.isAuthenticated);
}

logout(){
  //localStorage.removeItem('isAuthenticated');
  this.paintService.setauth(false);
  this.isAuthenticated = false;
  this.router.navigate(['']);
}
}
