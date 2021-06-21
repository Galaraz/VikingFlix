import { MemoryAccountRepository } from '@/infra/repositories/cache';
import inMemoryAccounts from '@/infra/repositories/cache/accounts.json';

const makeSut = () => {
  const sut = new MemoryAccountRepository();
  return {
    sut
  };
}

describe('In memory account repository', () => {
  it('should return a list with all accounts', async () => {
    const { sut } = makeSut();
    const accounts = await sut.findAll();

    expect(accounts).toEqual(inMemoryAccounts);
  });

  it('should return an account with the id provided', async () => {
    const { sut } = makeSut();
    const id = 3;
    const account = await sut.findOne(id);

    expect(account.id).toBe(3);
  });

  it('should return an account with the email provided', async () => {
    const { sut } = makeSut();
    const email = 'teste2@email.com';
    const account = await sut.findOneByEmail(email);

    expect(account.email).toBe(email);
  });

  it('should add a new account', async () => {
    const { sut } = makeSut();

    const accountData = {
      email: 'any_email@mail.com',
      password: 'any_password'
    }

    await sut.create(accountData);

    expect(sut.accounts).toHaveLength(inMemoryAccounts.length + 1);
  });
})
