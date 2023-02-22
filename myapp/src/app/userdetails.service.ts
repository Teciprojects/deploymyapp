import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  url="http://localhost:3000/users";
  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get(this.url);
  }
  adduserdata(formdata:any){
    return this.http.post(this.url,formdata)
  }

  deletedata(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getcurrentuser(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  updateuserdata(id:any,datas:any){
    return this.http.put(`${this.url}/${id}`,datas)
  }

 

}


