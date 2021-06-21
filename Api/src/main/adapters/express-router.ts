import { Controller, HttpRequest } from "@/presentation/contracts";

import { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const { body, params, query, headers } = req;

    const request: HttpRequest = {
      body,
      params,
      query,
      headers
    }
    const httpResponse = await controller.handle(request);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
}