export function makeParams(data: SimpleObject): string {
  if(Object.keys(data).length === 0) return ''
  return Object.keys(data).reduce(
    (sum: string, val: string, idx: number, arr: string[]) =>
      sum + val + '=' + data[val] + (idx < arr.length - 1 ? '&' : ''),
    ''
  )
}
export default function (
  link: string,
  type: string = 'GET',
  data: SimpleObject = {},
  headers?:Headers
) {
  if (!link) throw new Error('no link provided')
  if (type === 'GET') {
    const totalParams = makeParams(data)
    return fetch(link + (totalParams ? '?' + totalParams : ''), {
      headers: headers
    })
  }
  return fetch(link, {
    method: 'POST',
    body: Object.keys(data).reduce((sum, val, idx, arr) => sum + `${val}=${data[val]}` + (idx < arr.length - 1 ? '&' : ''), ''),
    headers
  })
}
