import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private snackBar: MatSnackBar) { }

  openAlertError(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000,
      panelClass: ['alert-error'],
      horizontalPosition: 'right'
    });
  }

  openAlertSuccess(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000,
      panelClass: ['alert-success'],
      horizontalPosition: 'right'
    });
  }

  openAlertMessage(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000,
      panelClass: ['alert-msg'],
      horizontalPosition: 'right'
    });
  }

}
