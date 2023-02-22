import { Component } from '@angular/core';
import {FormGroup,FormControl} from "@angular/forms";
import { UserdetailsService } from '../userdetails.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  
  mydata:any=[];
  alert=false;
  constructor(private user:UserdetailsService) { }
 
  ngOnInit(): void {
  }
    adduser = new  FormGroup({
      firstname: new FormControl(""),
      lastname: new FormControl(""),
      password: new FormControl(""),
    })
    adduserdata(){
      this.user.adduserdata(this.adduser.value).subscribe((data)=>{
        this.mydata = data;
       this.alert=true;
        
      })
    }
    
      closefunc(){
        this.alert=false;
      }

  }


