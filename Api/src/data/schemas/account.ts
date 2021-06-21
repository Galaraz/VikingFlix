import { Schema, model } from 'mongoose'

import { IAccountDocument } from './interfaces/IAccount'

const AccountSchema = new Schema(
  {
    email: String,
    name: String,
    password: String,
    passwordConfirmation: String,
  },
  {
    timestamps: true,
  },
)

const Account = model<IAccountDocument>('Account', AccountSchema)

export default Account
