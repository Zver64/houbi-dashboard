import request from '../request'
import endpoints from './endpoints'
import { makeParams } from '../request'
import crypto from 'crypto-js'
import { binanceKey } from '../keys'

const baseSettings = {
  api: 'https://api.binance.com',
}

export default function (
  route: string,
  type: string = 'GET',
  data: RequestSettings = {}
) {
  if (!endpoints[route]) {
    throw new Error('path is not correct!')
  }
  if (endpoints[route].private) {
    if (!data.timestamp) {
      data.timestamp = Date.now()
    }
    const totalParams = makeParams(data)
    const signed = crypto.HmacSHA256(totalParams, binanceKey.secret).toString()
    data.signature = signed
  }
  if(process.env.NODE_ENV === 'development') {
    baseSettings.api = 'http://localhost:3001'
  }
  const headers = new Headers({
    'X-MBX-APIKEY': binanceKey.public,
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  })
  return request(
    baseSettings.api + endpoints[route].path,
    type,
    data,
    headers
  )
}
