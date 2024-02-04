import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { IField } from '@app/shared/interfaces/form';
import { IWalletAccount } from '@app/shared/interfaces/wallet_account';
import { FormService } from '@app/shared/services/form.service';
import * as moment from 'moment';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  inputForm!: FormGroup;
  inputFields!: IField[];
  walletAccounts: IWalletAccount[] = [
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

  public get totalWallet(): number {
    return this.walletAccounts
      .map((item) => item.value)
      .reduce((prev, cur) => prev + cur);
  }

  public ngOnInit(): void {
    this.setInputForm();
  }

  public send() {}

  private setInputForm(): void {
    this.inputFields = this.getInputFields();
    this.inputForm = this.formService.buildForm(this.inputFields);
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
        name: 'by',
        label: 'Recebido de',
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
