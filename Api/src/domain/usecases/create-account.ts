import { Account } from "@/domain/entities"

export interface CreateAccount {
  create: (account: Account) => Promise<Account>
}