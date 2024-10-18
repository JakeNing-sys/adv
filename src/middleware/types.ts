export interface Locals {
  redirectUrl: string | null
}

export interface RequestContext {
  [key: string]: any
  locals: Locals
  request: Request
}

export interface NextFunction {
  (): any
}