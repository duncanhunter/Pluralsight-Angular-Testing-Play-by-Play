import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
  }
}
