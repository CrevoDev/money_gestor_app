import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IField } from '@app/shared/interfaces/form';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit, AfterViewInit {
  @ViewChild('text')
  textTemplate!: TemplateRef<any>;
  @ViewChild('textarea')
  textareaTemplate!: TemplateRef<any>;
  @ViewChild('select')
  selectTemplate!: TemplateRef<any>;

  template!: TemplateRef<any>;

  @Input() field!: IField;
  @Input() form!: FormGroup;

  type: string = 'text';

  hidePass: boolean = false;
  show: boolean = false;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.getTemplate();
    this.type = this.field.type;
  }

  getTemplate(): void {
    const templateMap: Record<string, TemplateRef<any>> = {
      text: this.textTemplate,
      textarea: this.textareaTemplate,
      select: this.selectTemplate,
    };

    this.template = templateMap[this.field.format] || this.textTemplate;
  }

  changeFieldType(): void {
    if (this.type === 'password' && this.hidePass) {
      this.field.type = 'password';
    } else if (this.type === 'password' && !this.hidePass) {
      this.field.type = 'text';
    }
    this.hidePass = !this.hidePass;
    return;
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.form.get(fieldName);
    if (control) return control.invalid && control.touched;
    return false;
  }

  getValue(fieldName: string): any {
    const control = this.form.get(fieldName);

    if (control) {
      const value = control.value;
      return value;
    }

    return null;
  }

  hasRequiredValidator(fieldName: string): boolean {
    const control = this.form.get(fieldName);

    if (control) {
      const validators = control.validator && control.validator({} as any);
      return validators && validators['required'];
    }

    return false;
  }

  getErrorMessage(fieldName: string): string | null {
    const control = this.form.get(fieldName);

    if (!control) return null;

    if (control.hasError('required')) {
      return 'Este campo é obrigatório.';
    }

    if (control.hasError('email')) {
      return `Campo precisa ser um email valido`;
    }

    if (control.hasError('minlength')) {
      const minLengthRequiredLength =
        control.errors?.['minlength']?.requiredLength;
      if (minLengthRequiredLength) {
        return `O comprimento mínimo é ${minLengthRequiredLength}.`;
      }
    }

    return 'Campo inválido.';
  }
}
