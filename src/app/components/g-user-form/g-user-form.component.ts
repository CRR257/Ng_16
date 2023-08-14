import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GButtonComponent } from '@src/components/g-button/g-button.component';
import { DialogService } from '@src/services';
import { UserService } from '@src/app/services';
import { User } from '@src/app/models';

@Component({
  selector: 'app-g-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GButtonComponent],
  templateUrl: './g-user-form.component.html',
  styleUrls: ['./g-user-form.component.scss'],
})
export class GUserFormComponent {
  dialogService = inject(DialogService);
  userService = inject(UserService);
  fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    name: new FormControl<string>('', [Validators.required]),
  });

  closeDialog() {
    this.dialogService.dialogSignal.set(false); // with signals
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.getRawValue());
      this.userService.setUserFormState(this.form.getRawValue() as User);
      this.dialogService.dialogSignal.set(false);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
