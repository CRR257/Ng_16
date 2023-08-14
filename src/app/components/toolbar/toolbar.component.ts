import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GButtonComponent } from '@src/components/g-button/g-button.component';
import { DialogService } from '@src/services';

import { GDialogComponent } from '@src/components';
import { GUserFormComponent } from '../g-user-form/g-user-form.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, GButtonComponent, GDialogComponent, GUserFormComponent],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  dialogService = inject(DialogService);

  openDialog() {
    // this.dialogService.$dialogSubject.setSubject(true);
    this.dialogService.dialogSignal.set(true);
  }
}
