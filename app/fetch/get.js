import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
  try {
    let result = fetch(url, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*'
      }
    })
    return result
  } catch (error) {
    console.log('error', error.message)
  }
}
