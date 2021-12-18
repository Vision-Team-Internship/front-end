import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoomItemComponent } from './components/room-item/room-item.component';
import { RoomComponent } from './components/room/room.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { FloorComponent } from './backend/floor/floor.component';
import { DepartmentComponent } from './backend/department/department.component';
import { FloorEditComponent } from './backend/floor/floor-edit/floor-edit.component';
import { FloorAddComponent } from './backend/floor/floor-add/floor-add.component';
import { AuthComponent } from './backend/auth/auth.component';
import { RoomsComponent } from './backend/rooms/rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RoomItemComponent,
    RoomComponent,
    DashboardComponent,
    FloorComponent,
    DepartmentComponent,
    FloorEditComponent,
    FloorAddComponent,
    AuthComponent,
    RoomsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
