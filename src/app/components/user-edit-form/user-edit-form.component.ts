import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../../models/user';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent implements OnChanges {
  @Output() save = new EventEmitter<User>();
  @Input() user: User;

  userForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user.currentValue) {
      this.userForm.patchValue(changes.user.currentValue);
    }
  }

  submit() {
    const updatedUser = {
      ...this.user,
      name: this.userForm.controls.name.value
    };
    this.save.emit(updatedUser);
  }
}
