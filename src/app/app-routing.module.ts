import { FloorComponent } from './backend/floor/floor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { RoomItemComponent } from './components/room-item/room-item.component';
import { RoomComponent } from './components/room/room.component';
import { AuthComponent } from './backend/auth/auth.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'room/:id',
    component: RoomItemComponent,
  },
  {
    path: 'room',
    component: RoomComponent,
  },
  {
    path: 'd',
    component: DashboardComponent,
  },
  // {
  //   path: 'd/floor',
  //   component: FloorComponent,
  // },
  {
    path: 'd/login',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
