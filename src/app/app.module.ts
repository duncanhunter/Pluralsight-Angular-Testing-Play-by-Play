import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './containers/users/users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditFormComponent } from './components/user-edit-form/user-edit-form.component';
import { UserComponent } from './containers/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserListComponent,
    UserEditFormComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'users' },
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserComponent }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
