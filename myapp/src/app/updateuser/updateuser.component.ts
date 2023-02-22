import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserdetailsService} from '../userdetails.service';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  constructor(private router:ActivatedRoute, private user:UserdetailsService ) { }
  updateuser = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    password: new FormControl("")
  })


  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.user.getcurrentuser(this.router.snapshot.params['id']).subscribe((res:any)=>{
     this.updateuser = new FormGroup({
       firstname: new FormControl(res['firstname']),
       lastname: new FormControl(res['lastname']),
      
       password: new FormControl(res['password'])
     })
    })       

  }
  updateuserdata(){
    this.user.updateuserdata(this.router.snapshot.params['id'],this.updateuser.value).subscribe((res)=>{
      console.log(res);      
    })
  }

}

  




