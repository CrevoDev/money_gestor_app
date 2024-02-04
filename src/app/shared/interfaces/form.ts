import { ValidatorFn } from '@angular/forms';

export interface IField {
  name: string;
  label: string;
  validators: ValidatorFn[];
  options?: any[];
  fieldLabel?: string;
  fieldValue?: any;
  type: 'text' | 'password' | 'date' | 'number';
  format: 'text' | 'textarea' | 'select';
  mask?: 'currency'
}
