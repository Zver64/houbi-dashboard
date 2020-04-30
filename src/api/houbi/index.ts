const apiUrl = 'http://api.testnet.huobi.pro'
const myKeyId: string = 'f20a2557-851a45b1-1hrfj6yhgg-ed192'

const credentials: RequestData = {
  AccessKeyId: myKeyId,
  SignatureMethod: 'HmacSHA256',
  SignatureVersion: 2,
  Timestamp: Date.now(),
}
function request(
  link: string = '',
  type: string = 'GET',
  data: RequestData = {}
) {
  if (type === 'GET') {
    let queries = ''
    const params = Object.assign({}, credentials, data)
    for (let prop in params) {
      queries += `${prop}=${params[prop]}&`
    }
    return fetch(apiUrl + link + (queries ? `?${queries}` : ''),)
  }
  return fetch(apiUrl + link, {
    method: 'POST',
    body: JSON.stringify({
      credentials,
      data,
    }),
  })
}
export default request
