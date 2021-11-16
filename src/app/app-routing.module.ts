import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { RoomItemComponent } from './components/room-item/room-item.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'room/:id',
    component: RoomItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
