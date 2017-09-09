import { Component, Inject } from '@angular/core';
import { MdDialog, MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { AppService } from './app.service';

@Component({
  selector: 'app-dialog',
  template: `
    <div style="text-align: center;">
      <div>{{ data.message }}</div>
      <br>
      <button md-raised-button (click)="close()" color="accent">Ok</button>
    </div>
  `,
})
export class AppDialogComponent {
  constructor(
    public dialogRef: MdDialogRef<AppDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private appService: AppService,
    public dialog: MdDialog
  ) {}

  emailField: string;
  valid = false;

  validate() {
    this.appService.validateEmail((this.emailField)).subscribe(
      res => this.valid = true,
      err => this.openDialog('Invalid email address')
    );
  }

  openDialog(message) {
    this.dialog.open(AppDialogComponent, {
      data: {
        message: message
      }
    });
  }

  keyDown() {
    this.valid = false;
  }
}
