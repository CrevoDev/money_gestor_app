import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IField } from '../interfaces/form';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  public buildForm(fields: IField[]): FormGroup {
    const group: { [key: string]: FormControl } = {};
    fields.forEach((field) => {
      group[field.name] = new FormControl(null, field.validators);
    });
    return new FormGroup(group);
  }
}
