import { AccountRepository } from "@/data/contracts/account-repository";
import { AccountModel } from "@/data/models";
import Account from "@/data/schemas/account";
import { IAccountDocument } from "@/data/schemas/interfaces/IAccount";

export class MongooseAccountRepository implements AccountRepository {

  public async create({
    name,
    email,
    password,
  }: any): Promise<any> {
    const account = await Account.create({ name, email, password })
    return account;
  }


  findAll: () => Promise<AccountModel[]>;
  findOne: (id: number) => Promise<AccountModel>;
  findOneByEmail: (email: string) => Promise<AccountModel>;
}
