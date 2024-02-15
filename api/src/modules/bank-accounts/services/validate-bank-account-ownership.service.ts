import { Injectable, NotFoundException } from "@nestjs/common"
import { BankAccountRepository } from "src/shared/database/repositories/bank-accounts.repositories"

@Injectable()
export class ValidateBankAccountOwnershipService {
  constructor(private readonly bankAccountRepo: BankAccountRepository){}

async validate(userId:string, bankAccountId:string) {
  const isOwner = await this.bankAccountRepo.findFirst({
    where: {
      userId, id: bankAccountId
    },
  })

  if (!isOwner) {
    throw new NotFoundException('Bank account not found!')
  }
}
}
