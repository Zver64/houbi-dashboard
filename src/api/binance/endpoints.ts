export const API_CALLS = {
  PING: 'ping'
}
export default {
  [API_CALLS.PING]: {
    private: false,
    path: '/api/v3/ping'
  }
}