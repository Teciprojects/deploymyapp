import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';

import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {
  path:'userlist',
  component:UserlistComponent
  },
  {
    path:'adduser',
    component:AdduserComponent
  },
  {
    path:'updateuser/:id',
    component:UpdateuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
