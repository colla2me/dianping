export default {
  getItem(key) {
    let value
    try {
      value = localStorage.getItem(key)
    } catch (error) {
      if (__DEV) {
        console.log('localStorage.getItem报错', error.message)
      }
    } finally {
      return value
    }
  },
  setItem(key, value) {
    try {
      localStorage.setItem(key, value)
    } catch (error) {
      if (__DEV__) {
        console.log('localStorage.setItem报错', error.message)
      }
    }
  },
  removeItem(key) {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      if (__DEV__) {
        console.log('localStorage.removeItem报错', error.message)
      }
    }
  }
}