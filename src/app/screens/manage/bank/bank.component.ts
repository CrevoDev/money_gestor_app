import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { IBankAccount } from '@app/shared/interfaces/bank_account';
import { IField } from '@app/shared/interfaces/form';
import { FormService } from '@app/shared/services/form.service';
import * as moment from 'moment';

@Component({
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss'],
})
export class BankComponent {
  inputForm!: FormGroup;
  outputForm!: FormGroup;
  inputFields!: IField[];
  outputFields!: IField[];
  bankAccounts: IBankAccount[] = [
    {
      accounting: moment().toDate(),
      at: moment().toDate(),
      description: 'Salário',
      value: 1750,
    },
    {
      accounting: moment().toDate(),
      at: moment().toDate(),
      description: 'Salário',
      value: 1750,
    },
  ];

  constructor(private readonly formService: FormService) {}

  public get totalBank(): number {
    return this.bankAccounts
      .map((item) => item.value)
      .reduce((prev, cur) => prev + cur);
  }

  public ngOnInit(): void {
    this.setInputForm();
    this.setOutputForm();
  }

  public send() {}

  private setInputForm(): void {
    this.inputFields = this.getInputFields();
    this.inputForm = this.formService.buildForm(this.inputFields);
  }

  private setOutputForm(): void {
    this.outputFields = this.getOutputFields();
    this.outputForm = this.formService.buildForm(this.outputFields);
  }

  private getInputFields(): IField[] {
    return [
      {
        name: 'accounting',
        label: 'Fechamento',
        type: 'text',
        validators: [Validators.required],
        format: 'select',
        options: [
          {
            label: '01-01-2024',
            value: new Date('2024-01-01'),
          },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
      },
      {
        name: 'at',
        label: 'Data',
        type: 'date',
        validators: [Validators.required],
        format: 'text',
      },
      {
        name: 'value',
        label: 'Valor',
        type: 'number',
        validators: [Validators.required],
        format: 'text',
        mask: 'currency',
      },
      {
        name: 'description',
        label: 'Descrição',
        type: 'text',
        validators: [Validators.required],
        format: 'text',
      },
    ];
  }

  private getOutputFields(): IField[] {
    return [
      {
        name: 'accounting',
        label: 'Fechamento',
        type: 'text',
        validators: [Validators.required],
        format: 'select',
        options: [
          {
            label: '01-01-2024',
            value: new Date('2024-01-01'),
          },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
      },
      {
        name: 'at',
        label: 'Data',
        type: 'date',
        validators: [Validators.required],
        format: 'text',
      },
      {
        name: 'value',
        label: 'Valor',
        type: 'number',
        validators: [Validators.required],
        format: 'text',
        mask: 'currency',
      },
      {
        name: 'description',
        label: 'Descrição',
        type: 'text',
        validators: [Validators.required],
        format: 'text',
      },
    ];
  }
}
