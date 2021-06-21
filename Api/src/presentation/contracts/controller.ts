import { HttpResponse, HttpRequest } from "@/presentation/contracts";

export interface Controller {
  handle: (request: HttpRequest) => Promise<HttpResponse>
}