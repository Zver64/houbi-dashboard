export default function (
  link: string,
  type: string = 'GET',
  data: SimpleObject = {}
) {
  if (!link) throw new Error('no link provided')
  if (type === 'GET') {
    let queries = ''
    const params = Object.assign({}, data)
    for (let prop in params) {
      queries += `${prop}=${params[prop]}&`
    }
    return fetch(link + (queries ? `?${queries}` : ''))
  }
  return fetch(link, {
    method: 'POST',
    body: JSON.stringify({
      data,
    }),
  })
}
