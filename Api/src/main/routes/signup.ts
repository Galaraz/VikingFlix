
import { adaptRoute } from '@/main/adapters/express-router';
import { makeSignupController } from '@/main/factories';
import { Router } from 'express';

export default (router: Router): void => {
  router.post('/accounts', adaptRoute(makeSignupController()));
}