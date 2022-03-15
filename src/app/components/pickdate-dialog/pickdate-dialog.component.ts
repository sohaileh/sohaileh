import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-pickdate-dialog',
  templateUrl: './pickdate-dialog.component.html',
  styleUrls: ['./pickdate-dialog.component.scss']
})
export class PickdateDialogComponent implements OnInit {
  searchDate: any;
  constructor(public dialogRef: MatDialogRef<PickdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }
  Search() {
    this.dialogRef.close({ value: this.searchDate, status: true })
  }
  close() {
    this.dialogRef.close({ status: false })
  }
}
