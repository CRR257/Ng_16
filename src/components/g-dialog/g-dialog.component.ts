import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GUserFormComponent } from '@src/app/components/g-user-form/g-user-form.component';
import { DialogService } from '@src/services';

@Component({
  selector: 'app-g-dialog',
  standalone: true,
  imports: [CommonModule, GUserFormComponent],
  templateUrl: './g-dialog.component.html',
  styleUrls: ['./g-dialog.component.scss'],
})
export class GDialogComponent {
  dialogService = inject(DialogService);
  isOpen = this.dialogService.dialogSignal;

  /*
  with rxjs

  isOpen = false;

  constructor(public dialogService: DialogService) {
    dialogService.$dialogSubject
      .getSubject()
      .pipe(takeUntilDestroyed())
      .subscribe((dialogState) => (this.isOpen = dialogState));
  }
  */

  closeDialog() {
    this.dialogService.dialogSignal.set(false); // with signals
  }
}
