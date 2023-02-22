import { Component } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  
  constructor(private user:UserdetailsService){}
  
  mydata:any=[];
 ngOnInit(): void {
   this.user.getdata().subscribe((data)=>{
    // console.log(data);
    this.mydata=data;
   })
 }
 deleteuser(item:any){
  this.mydata.splice(item-1,1);
  this.user.deletedata(item).subscribe((data)=>{
    console.log(data);
    
  })
}

}




