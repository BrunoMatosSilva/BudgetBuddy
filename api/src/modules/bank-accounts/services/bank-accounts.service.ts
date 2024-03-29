import { Injectable, NotFoundException } from '@nestjs/common';
import { BankAccountRepository } from 'src/shared/database/repositories/bank-accounts.repositories';
import { CreateBankAccountDto } from '../dto/create-bank-account.dto';
import { UpdateBankAccountDto } from '../dto/update-bank-account.dto';
import { ValidateBankAccountOwnershipService } from './validate-bank-account-ownership.service';

@Injectable()
export class BankAccountsService {
  constructor(private readonly bankAccountRepo: BankAccountRepository,
    private readonly validateBankAccountOwnershipRep: ValidateBankAccountOwnershipService) {}

  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    const { name, color, initialBalance, type } = createBankAccountDto;

    return this.bankAccountRepo.create({
      data: {
        userId,
        color,
        initialBalance,
        name,
        type
      }
    });
  }

  async findAllByUserId(userId:string) {
    const bankAccounts = await this.bankAccountRepo.findMany({
      where: { userId },
      include: {
        transactions: {
          select: {
            value: true,
            type: true
          }
        }
      }
    });

    return bankAccounts.map(({transactions, ...bankAccount}) => {
     const totalTransactions = transactions.reduce((acc, transaction) =>
      acc + (transaction.type === 'INCOME' ? transaction.value : -transaction.value)
     , 0,
     );

     const currentBalance = bankAccount.initialBalance + totalTransactions;

      return {
        ...bankAccount,
        currentBalance,
      }
    });
  }

 async update(userId: string, bankAccountId: string, updateBankAccountDto: UpdateBankAccountDto) {
  const { name, color, initialBalance, type } = updateBankAccountDto;

  await this.validateBankAccountOwnershipRep.validate(userId, bankAccountId)

    return this.bankAccountRepo.update({
      where: { id: bankAccountId },
      data: {
        name,
        initialBalance,
        color,
        type
      }
    }) ;
  }

 async remove(userId: string, bankAccountId: string,) {
  await this.validateBankAccountOwnershipRep.validate(userId, bankAccountId)

    await this.bankAccountRepo.delete({
      where: { id: bankAccountId }
    })

    return null
  }
}
