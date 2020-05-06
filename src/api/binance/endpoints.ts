export const API_CALLS = {
  PING: 'ping',
  ACCOUNT: 'account',
  ORDER: 'order',
  CANDLES: 'candles'
}
export default {
  [API_CALLS.PING]: {
    private: false,
    path: '/api/v3/ping'
  },
  [API_CALLS.ACCOUNT] : {
    private: true,
    path: '/api/v3/account'
  },
  [API_CALLS.ORDER]: {
    private: true,
    path: '/api/v3/order'
  },
  [API_CALLS.CANDLES]: {
    private: false,
    path: '/api/v3/klines'
  }
}