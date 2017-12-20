import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Requests } from './../services/requests.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [Requests]
})

export class UsersComponent {
  ELEMENT_DATA: UserElement[];
  animal: string;
  name: string;

  constructor(private requests: Requests, public dialog: MatDialog) { }


  ngOnInit(){
    let a: any;
    this.requests.GetUsers().subscribe(resp => {
      a  = resp; this.ELEMENT_DATA = a;
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(NewUserComponent, {
      width: '500px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

export interface UserElement {
  email: string;
  firstDate: string;
  firstName: string;
  lastName: string;
  id: number;
  managerId: number;
  role: string;
  status: string;
}


@Component({
  selector: 'new-user',
  templateUrl: 'new-user.popup.html',
  styleUrls: ['./users.component.css'],
  providers: [Requests]
})
export class NewUserComponent {

  newUserForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private requests: Requests) { }

  ngOnInit(){
    this.newUserForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      firstDate: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      role: new FormControl(''),
      typeOfEmployment: new FormControl(''),
      managerId: new FormControl('', Validators.required),
      'class': new FormControl('user')
    });
  }

  Close(): void {
    this.dialogRef.close();
  }

  Create():void{
    this.requests.CreateUser(this.newUserForm.value).subscribe(resp => {
      this.dialogRef.close();
      location.reload();
    });
  }



}
