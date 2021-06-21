import { Document } from 'mongoose'

export interface IAccountDocument extends Document {
  email?: string
  name?: string
  password?: string
  passwordConfirmation?: string
}
