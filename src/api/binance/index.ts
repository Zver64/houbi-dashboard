import request from '../request'
const baseSettings = {
  api: 'https://api.binance.com',

}

export default function(link:string = '', type:string = 'GET', data:RequestSettings = {}) {
  return request(baseSettings.api + link, type, data)
}