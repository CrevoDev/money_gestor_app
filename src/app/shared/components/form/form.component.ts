import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IField } from '../../interfaces/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input()
  form!: FormGroup;
  @Input()
  fields!: IField[];

  ngOnInit(): void {}
}
