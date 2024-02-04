import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { IBankAccount } from '@app/shared/interfaces/bank_account';
import { IField } from '@app/shared/interfaces/form';
import { IWalletAccount } from '@app/shared/interfaces/wallet_account';
import { FormService } from '@app/shared/services/form.service';
import * as moment from 'moment';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  outputForm!: FormGroup;
  outputFields!: IField[];
  transactionsAccounts: IWalletAccount[] = [
    {
      accounting: moment().toDate(),
      at: moment().toDate(),
      by: 'Count',
      method: 'salary',
      description: 'Salário',
      value: 1750,
    },
    {
      accounting: moment().toDate(),
      at: moment().toDate(),
      by: 'Count',
      method: 'salary',
      description: 'Salário',
      value: 1750,
    },
  ];

  constructor(private readonly formService: FormService) {}

  public get totalTransactions(): number {
    return this.transactionsAccounts
      .map((item) => item.value)
      .reduce((prev, cur) => prev + cur);
  }

  public ngOnInit(): void {
    this.setOutputForm();
  }

  public send() {}

  private setOutputForm(): void {
    this.outputFields = this.getOutputFields();
    this.outputForm = this.formService.buildForm(this.outputFields);
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
        name: 'method',
        label: 'Tipo',
        type: 'text',
        validators: [Validators.required],
        format: 'select',
        options: [
          {
            label: 'Pix',
            value: 'pix',
          },
          {
            label: 'Salário',
            value: 'salary',
          },
          {
            label: 'Transferência',
            value: 'transfer',
          },
          {
            label: 'Depósito',
            value: 'deposit',
          },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
      },
      {
        name: 'at',
        label: 'Enviado para',
        type: 'text',
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
