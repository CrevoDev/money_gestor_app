import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth/auth.service';
import { IField } from '@app/shared/interfaces/form';
import { FormService } from '@app/shared/services/form.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  fields!: IField[];

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly formService: FormService
  ) {}

  public ngOnInit(): void {
    this.fields = this.getFields();
    this.form = this.formService.buildForm(this.fields);
  }

  public send(): void {
    const values = this.form.value;
    const logged = this.authService.login(values);
    if (!logged) return;
    this.router.navigate(['/home']);
  }

  private getFields(): IField[] {
    return [
      {
        name: 'username',
        label: 'Usuário',
        type: 'text',
        validators: [Validators.required, Validators.email],
        format: 'text',
      },
      {
        name: 'password',
        label: 'Senha',
        type: 'password',
        validators: [Validators.required, Validators.minLength(6)],
        format: 'text',
      },
    ];
  }
}
