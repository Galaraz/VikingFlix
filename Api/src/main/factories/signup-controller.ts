import { Controller } from "@/presentation/contracts";
import SignupController from "@/presentation/controllers/signup";
import { MongooseAccountRepository } from "@/infra/repositories/mongoose/mongoose-account-repository";

export const makeSignupController = (): Controller => {
  // const repository = new MemoryAccountRepository();
  // const signupController = new SignupController(repository);
  const repositoryMongoose = new MongooseAccountRepository();
  const signupController = new SignupController(repositoryMongoose);

  return signupController;
}
