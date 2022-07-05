// 不同环境的请求地址
const baseUrl: Map<string, string> = new Map([
  ['dev', 'dev.Lemon.com'],
  ['uat', 'dev.Lemon.com'],
  ['pre', 'dev.Lemon.com'],
  ['prod', 'Lemon.com']
])
export default baseUrl
