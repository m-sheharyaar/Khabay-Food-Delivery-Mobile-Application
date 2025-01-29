import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  list;
  constructor(private router: Router) { }

  ngOnInit() {
      var A1 =[1,2,3,4,5];
      var A2 =[4,6];
      for (var i = 0; i < A2.length; i++) {
        var dublicate = true;
          for(var j=0; j < A1.length; j++){
            if(A2[i] == A1[j]){
                dublicate = false;
            }  
          }
          if(dublicate == true){
            A1.push(A2[i]);
          }
     }
     console.log(A1);
     this.list = A1;
  }
  back(){
    this.router.navigate(['tabs/settings']);
  }
}
