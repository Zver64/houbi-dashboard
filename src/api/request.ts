export function makeParams(data: SimpleObject): string {
  return Object.keys(data).reduce(
    (sum: string, val: string, idx: number, arr: string[]) =>
      sum + val + '=' + data[val] + (idx < arr.length - 1 ? '&' : ''),
    '?'
  )
}
export default function (
  link: string,
  type: string = 'GET',
  data: SimpleObject = {}
) {
  if (!link) throw new Error('no link provided')
  let totalParams = ''
  if (type === 'GET') {
    if (!totalParams) {
      totalParams = makeParams(data)
    }

    return fetch(link + totalParams)
  }
  return fetch(link, {
    method: 'POST',
    body: JSON.stringify({
      data,
    }),
  })
}
