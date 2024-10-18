import type {
  RequestContext,
  NextFunction
} from './types.ts'

const redirectMap: Record<string, string> = {
  'www.baidu.com': '/adv1',
  'localhost': '/adv2',
};

export function onRequest(context: RequestContext, next: NextFunction) {
  const url = new URL(context.request.url)

  // 根据不同域名重定向到不同页面
  if (redirectMap[url.hostname] && url.pathname !== redirectMap[url.hostname]) {
    return context.redirect(redirectMap[url.hostname]);
  }

  return next()
}