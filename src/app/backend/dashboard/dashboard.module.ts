import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FloorComponent } from '../floor/floor.component';
import { DepartmentComponent } from '../department/department.component';
import { AuthComponent } from '../auth/auth.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { MessageComponent } from '../message/message.component';
import { DashboardComponent } from './dashboard.component';
import { AllFeedbackComponent } from '../all-feedback/all-feedback.component';

const routes: Routes = [
  {
    path: 'floor',
    pathMatch: 'full',
    component: FloorComponent,
  },
  {
    path: 'department',
    pathMatch: 'full',
    component: DepartmentComponent,
  },
  {
    path: 'room',
    pathMatch: 'full',
    component: RoomsComponent,
  },
  {
    path: 'msg',
    pathMatch: 'full',
    component: MessageComponent,
  },
  {
    path: 'all-msg',
    pathMatch: 'full',
    component: AllFeedbackComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
