import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'user/view/:id', component: UserViewComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
