import { Injectable, signal } from '@angular/core';
import { SubjectManager } from '@src/utilities/subject-manager.utility';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  // $dialogSubject = new SubjectManager;
  dialogSignal = signal(false);
}
