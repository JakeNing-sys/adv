interface Locals {
  middlewareTitle: string
  redirectUrl: string | null
}

export function onRequest(context: {
  [x: string]: any
  locals: Locals
  request: Request
}, next: () => any) {
  context.locals.middlewareTitle = 'Hello World'
  const url = new URL(context.request.url)
  console.log('url', url.hostname, 'pathname', url.pathname);

  // 根据不同域名重定向到不同页面
  if (url.hostname === 'www.baidu.com' && url.pathname !== '/adv1') {
    return context.redirect('/adv1');
  } else if (url.hostname === 'localhost' && url.pathname !== '/adv2') {
    return context.redirect('/adv2');
  } else if (url.hostname === 'www.example.com' && url.pathname !== '/adv2') {
    return context.redirect('/adv2');
  }
  // 可以根据需要添加更多的域名判断

  // 如果没有匹配的域名或已经在正确的路径，继续执行下一个中间件或路由处理
  return next()
}
