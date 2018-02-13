import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: number;
  user$: Observable<User>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usersService: UserService) { }

  ngOnInit() {
    this.userId = +this.activatedRoute.snapshot.params['id'];
    if (this.userId !== 0) {
      this.user$ = this.usersService.getUser(this.userId);
    }
  }

  save(user: User) {
    user.id >= 1
      ? this.usersService.updatetUser(user).subscribe(() => this.router.navigate(['/users']))
      : this.usersService.addUser(user).subscribe(() => this.router.navigate(['/users']));
  }
}
